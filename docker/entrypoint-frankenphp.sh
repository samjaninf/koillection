#!/bin/bash

set -e

echo "**** 1/11 - Make sure /uploads folders exist ****"
[ ! -f /uploads ] && \
	mkdir -p /uploads

echo "**** 2/11 - Create the symbolic link for the /uploads folder ****"
[ ! -L /app/public/public/uploads ] && \
	cp -r /app/public/public/uploads/. /uploads && \
	rm -r /app/public/public/uploads && \
	ln -s /uploads /app/public/public/uploads

echo "**** 3/11 - Setting env variables ****"
rm -rf /app/public/.env.local
touch /app/public/.env.local

echo "APP_ENV=${APP_ENV:-prod}" >> "/app/public/.env.local"
echo "APP_DEBUG=${APP_DEBUG:-0}" >> "/app/public/.env.local"
echo "APP_SECRET=${APP_SECRET:-$(openssl rand -base64 21)}" >> "/app/public/.env.local"

echo "JWT_SECRET_KEY=${JWT_SECRET_KEY:-%kernel.project_dir%/config/jwt/private.pem}" >> "/app/public/.env.local"
echo "JWT_PUBLIC_KEY=${JWT_PUBLIC_KEY:-%kernel.project_dir%/config/jwt/public.pem}" >> "/app/public/.env.local"
echo "JWT_PASSPHRASE=${JWT_PASSPHRASE:-$(openssl rand -base64 21)}" >> "/app/public/.env.local"

echo "DB_DRIVER=${DB_DRIVER:-}" >> "/app/public/.env.local"
echo "DB_NAME=${DB_NAME:-}" >> "/app/public/.env.local"
echo "DB_HOST=${DB_HOST:-}" >> "/app/public/.env.local"
echo "DB_PORT=${DB_PORT:-}" >> "/app/public/.env.local"
echo "DB_USER=${DB_USER:-}" >> "/app/public/.env.local"
echo "DB_PASSWORD=${DB_PASSWORD:-}" >> "/app/public/.env.local"
echo "DB_VERSION=${DB_VERSION:-}" >> "/app/public/.env.local"

echo "CORS_ALLOW_ORIGIN=${CORS_ALLOW_ORIGIN:-'^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'}" >> "/app/public/.env.local"

composer dump-env ${APP_ENV:-prod}

echo "session.cookie_secure=${HTTPS_ENABLED}" >> /usr/local/etc/php/conf.d/php.ini
echo "date.timezone=${PHP_TZ}" >> /usr/local/etc/php/conf.d/php.ini
echo "memory_limit=${PHP_MEMORY_LIMIT:-'512M'}" >> /usr/local/etc/php/conf.d/php.ini

echo "upload_max_filesize=${UPLOAD_MAX_FILESIZE:-'20M'}" >> /usr/local/etc/php/conf.d/php.ini
echo "post_max_size=${UPLOAD_MAX_FILESIZE:-'100M'}" >> /usr/local/etc/php/conf.d/php.ini

echo "**** 4/11 - Migrate the database ****"
cd /app/public && \
php bin/console doctrine:migration:migrate --no-interaction --allow-no-migration --env=prod

echo "**** 5/11 - Refresh cached values ****"
cd /app/public && \
php bin/console app:refresh-cached-values --env=prod

echo "**** 6/11 - Create API keys ****"
cd /app/public && \
php bin/console lexik:jwt:generate-keypair --overwrite --env=prod

echo "**** 7/11 - Create user and use PUID/PGID ****"
PUID=${PUID:-1000}
PGID=${PGID:-1000}
if [ ! "$(id -u "$USER")" -eq "$PUID" ]; then usermod -o -u "$PUID" "$USER" ; fi
if [ ! "$(id -g "$USER")" -eq "$PGID" ]; then groupmod -o -g "$PGID" "$USER" ; fi
echo -e " \tUser UID :\t$(id -u "$USER")"
echo -e " \tUser GID :\t$(id -g "$USER")"

echo "**** 8/11 - Set Permissions ****" && \
find /uploads -type d \( ! -user "$USER" -o ! -group "$USER" \) -exec chown -R "$USER":"$USER" \{\} \;
find /uploads \( ! -user "$USER" -o ! -group "$USER" \) -exec chown "$USER":"$USER" \{\} \;
usermod -a -G "$USER" www-data
find /uploads -type d \( ! -perm -ug+w -o ! -perm -ugo+rX \) -exec chmod -R ug+w,ugo+rX \{\} \;
find /uploads \( ! -perm -ug+w -o ! -perm -ugo+rX \) -exec chmod ug+w,ugo+rX \{\} \;

echo "**** 9/11 - Create nginx log files ****" && \
mkdir -p /logs/nginx
chown -R "$USER":"$USER" /logs/nginx

echo "**** 10/11 - Create symfony log files ****" && \
[ ! -f /app/public/var/log ] && \
	mkdir -p /app/public/var/log

[ ! -f /app/public/var/log/prod.log ] && \
	touch /app/public/var/log/prod.log

chown -R www-data:www-data /app/public/var

echo "**** 11/11 - Setup complete, starting the server. ****"
frankenphp run --config /etc/caddy/Caddyfile
exec "$@"

echo "**** All done ****"