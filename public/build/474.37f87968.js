/*! For license information please see 474.37f87968.js.LICENSE.txt */
(self.webpackChunkkoillection=self.webpackChunkkoillection||[]).push([[474],{51474:(t,e,n)=>{"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){i(t,e,n[e])}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,{ZP:()=>ie});function s(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var c=s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=s(/Edge/i),d=s(/firefox/i),h=s(/safari/i)&&!s(/chrome/i)&&!s(/android/i),f=s(/iP(ad|od|hone)/i),p=s(/chrome/i)&&s(/android/i),g={capture:!1,passive:!1};function v(t,e,n){t.addEventListener(e,n,!c&&g)}function m(t,e,n){t.removeEventListener(e,n,!c&&g)}function b(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function y(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function w(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&b(t,e):b(t,e))||o&&t===n)return t;if(t===n)break}while(t=y(t))}return null}var E,D=/\s+/g;function S(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(D," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(D," ")}}function _(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function T(t,e){var n="";if("string"==typeof t)n=t;else do{var o=_(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function C(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function x(){var t=document.scrollingElement;return t||document.documentElement}function N(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,u,d,h;if(t!==window&&t.parentNode&&t!==x()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,u=r.right,d=r.height,h=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!c))do{if(i&&i.getBoundingClientRect&&("none"!==_(i,"transform")||n&&"static"!==_(i,"position"))){var f=i.getBoundingClientRect();a-=f.top+parseInt(_(i,"border-top-width")),l-=f.left+parseInt(_(i,"border-left-width")),s=a+r.height,u=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var p=T(i||t),g=p&&p.a,v=p&&p.d;p&&(s=(a/=v)+(d/=v),u=(l/=g)+(h/=g))}return{top:a,left:l,bottom:s,right:u,width:h,height:d}}}function O(t,e,n){for(var o=k(t,!0),i=N(t)[e];o;){var r=N(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===x())break;o=k(o,!1)}return!1}function M(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==Yt.ghost&&r[i]!==Yt.dragged&&w(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function I(t,e){for(var n=t.lastElementChild;n&&(n===Yt.ghost||"none"===_(n,"display")||e&&!b(n,e));)n=n.previousElementSibling;return n||null}function A(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Yt.clone||e&&!b(t,e)||n++;return n}function P(t){var e=0,n=0,o=x();if(t)do{var i=T(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function k(t,e){if(!t||!t.getBoundingClientRect)return x();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=_(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return x();if(o||e)return n;o=!0}}}while(n=n.parentNode);return x()}function X(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function R(t,e){return function(){if(!E){var n=arguments,o=this;1===n.length?t.call(o,n[0]):t.apply(o,n),E=setTimeout((function(){E=void 0}),e)}}}function Y(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function B(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}var F="Sortable"+(new Date).getTime();function H(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==_(t,"display")&&t!==Yt.ghost){e.push({target:t,rect:N(t)});var n=a({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=T(t,!0);o&&(n.top-=o.f,n.left-=o.e)}t.fromRect=n}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(e,{target:t}),1)},animateAll:function(n){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof n&&n());var i=!1,r=0;e.forEach((function(t){var e=0,n=t.target,a=n.fromRect,l=N(n),s=n.prevFromRect,c=n.prevToRect,u=t.rect,d=T(n,!0);d&&(l.top-=d.f,l.left-=d.e),n.toRect=l,n.thisAnimationDuration&&X(s,l)&&!X(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,o.options)),X(l,a)||(n.prevFromRect=a,n.prevToRect=l,e||(e=o.options.animation),o.animate(n,u,l,e)),e&&(i=!0,r=Math.max(r,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),e),n.thisAnimationDuration=e)})),clearTimeout(t),i?t=setTimeout((function(){"function"==typeof n&&n()}),r):"function"==typeof n&&n(),e=[]},animate:function(t,e,n,o){if(o){_(t,"transition",""),_(t,"transform","");var i=T(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,_(t,"transform","translate3d("+l+"px,"+s+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),_(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),_(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){_(t,"transition",""),_(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}}var L=[],W={initializeByDefault:!0},j={mount:function(t){for(var e in W)W.hasOwnProperty(e)&&!(e in t)&&(t[e]=W[e]);L.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),L.push(t)},pluginEvent:function(t,e,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var i=t+"Global";L.forEach((function(o){e[o.pluginName]&&(e[o.pluginName][i]&&e[o.pluginName][i](a({sortable:e},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](a({sortable:e},n)))}))},initializePlugins:function(t,e,n,o){for(var i in L.forEach((function(o){var i=o.pluginName;if(t.options[i]||o.initializeByDefault){var a=new o(t,e,t.options);a.sortable=t,a.options=t.options,t[i]=a,r(n,a.defaults)}})),t.options)if(t.options.hasOwnProperty(i)){var a=this.modifyOption(t,i,t.options[i]);void 0!==a&&(t.options[i]=a)}},getEventProperties:function(t,e){var n={};return L.forEach((function(o){"function"==typeof o.eventProperties&&r(n,o.eventProperties.call(e[o.pluginName],t))})),n},modifyOption:function(t,e,n){var o;return L.forEach((function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))})),o}};function z(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,l=t.toEl,s=t.fromEl,d=t.oldIndex,h=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,g=t.originalEvent,v=t.putSortable,m=t.extraEventProperties;if(e=e||n&&n[F]){var b,y=e.options,w="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||c||u?(b=document.createEvent("Event")).initEvent(o,!0,!0):b=new CustomEvent(o,{bubbles:!0,cancelable:!0}),b.to=l||n,b.from=s||n,b.item=i||n,b.clone=r,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var E=a({},m,j.getEventProperties(o,e));for(var D in E)b[D]=E[D];n&&n.dispatchEvent(b),y[w]&&y[w].call(e,b)}}var G=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=l(n,["evt"]);j.pluginEvent.bind(Yt)(t,e,a({dragEl:V,parentEl:q,ghostEl:Z,rootEl:K,nextEl:Q,lastDownEl:$,cloneEl:J,cloneHidden:tt,dragStarted:ft,putSortable:at,activeSortable:Yt.active,originalEvent:o,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:it,hideGhostForTarget:Pt,unhideGhostForTarget:kt,cloneNowHidden:function(){tt=!0},cloneNowShown:function(){tt=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:o})}},i))};function U(t){z(a({putSortable:at,cloneEl:J,targetEl:V,rootEl:K,oldIndex:et,oldDraggableIndex:ot,newIndex:nt,newDraggableIndex:it},t))}var V,q,Z,K,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt,mt,bt=!1,yt=!1,wt=[],Et=!1,Dt=!1,St=[],_t=!1,Tt=[],Ct="undefined"!=typeof document,xt=f,Nt=u||c?"cssFloat":"float",Ot=Ct&&!p&&!f&&"draggable"in document.createElement("div"),Mt=function(){if(Ct){if(c)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=_(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=M(t,0,e),r=M(t,1,e),a=i&&_(i),l=r&&_(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+N(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+N(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Nt]||r&&"none"===n[Nt]&&s+c>o)?"vertical":"horizontal"},At=function(t){function e(t,n){return function(o,i,r,a){var l=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var s=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var n={},i=t.group;i&&"object"==o(i)||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n},Pt=function(){!Mt&&Z&&_(Z,"display","none")},kt=function(){!Mt&&Z&&_(Z,"display","")};Ct&&document.addEventListener("click",(function(t){if(yt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),yt=!1,!1}),!0);var Xt=function(t){if(V){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,wt.some((function(t){if(!I(t)){var e=N(t),n=t[F].options.emptyInsertThreshold,o=i>=e.left-n&&i<=e.right+n,l=r>=e.top-n&&r<=e.bottom+n;return n&&o&&l?a=t:void 0}})),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[F]._onDragOver(n)}}var i,r,a},Rt=function(t){V&&V.parentNode[F]._isOutsideThisEl(t.target)};function Yt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=r({},e),t[F]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Yt.supportPointer&&"PointerEvent"in window&&!h,emptyInsertThreshold:5};for(var o in j.initializePlugins(this,t,n),n)!(o in e)&&(e[o]=n[o]);for(var i in At(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&Ot,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?v(t,"pointerdown",this._onTapStart):(v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(v(t,"dragover",this),v(t,"dragenter",this)),wt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),r(this,H())}function Bt(t,e,n,o,i,r,a,l){var s,d,h=t[F],f=h.options.onMove;return!window.CustomEvent||c||u?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||N(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),f&&(d=f.call(h,s,a)),d}function Ft(t){t.draggable=!1}function Ht(){_t=!1}function Lt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Wt(t){return setTimeout(t,0)}function jt(t){return clearTimeout(t)}Yt.prototype={constructor:Yt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(pt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,V):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,l=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(n),!V&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!h||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=w(l,o.draggable,n,!1))&&l.animated||$===l)){if(et=A(l),ot=A(l,o.draggable),"function"==typeof c){if(c.call(this,t,l,this))return U({sortable:e,rootEl:s,name:"filter",targetEl:l,toEl:n,fromEl:n}),G("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=w(s,o.trim(),n,!1))return U({sortable:e,rootEl:o,name:"filter",targetEl:l,fromEl:n,toEl:n}),G("filter",e,{evt:t}),!0}))))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!w(s,o.handle,n,!1)||this._prepareDragStart(t,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!V&&n.parentNode===r){var s=N(n);if(K=r,q=(V=n).parentNode,Q=V.nextSibling,$=n,rt=a.group,Yt.dragged=V,lt={target:V,clientX:(e||t).clientX,clientY:(e||t).clientY},dt=lt.clientX-s.left,ht=lt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,V.style["will-change"]="all",o=function(){G("delayEnded",i,{evt:t}),Yt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!d&&i.nativeDraggable&&(V.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),S(V,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){C(V,t.trim(),Ft)})),v(l,"dragover",Xt),v(l,"mousemove",Xt),v(l,"touchmove",Xt),v(l,"mouseup",i._onDrop),v(l,"touchend",i._onDrop),v(l,"touchcancel",i._onDrop),d&&this.nativeDraggable&&(this.options.touchStartThreshold=4,V.draggable=!0),G("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(u||c))o();else{if(Yt.eventCanceled)return void this._onDrop();v(l,"mouseup",i._disableDelayedDrag),v(l,"touchend",i._disableDelayedDrag),v(l,"touchcancel",i._disableDelayedDrag),v(l,"mousemove",i._delayedDragTouchMoveHandler),v(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&v(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){V&&Ft(V),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._disableDelayedDrag),m(t,"touchend",this._disableDelayedDrag),m(t,"touchcancel",this._disableDelayedDrag),m(t,"mousemove",this._delayedDragTouchMoveHandler),m(t,"touchmove",this._delayedDragTouchMoveHandler),m(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?v(document,"pointermove",this._onTouchMove):v(document,e?"touchmove":"mousemove",this._onTouchMove):(v(V,"dragend",this),v(K,"dragstart",this._onDragStart));try{document.selection?Wt((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(bt=!1,K&&V){G("dragStarted",this,{evt:e}),this.nativeDraggable&&v(document,"dragover",Rt);var n=this.options;!t&&S(V,n.dragClass,!1),S(V,n.ghostClass,!0),Yt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Pt();for(var t=document.elementFromPoint(st.clientX,st.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY))!==e;)e=t;if(V.parentNode[F]._isOutsideThisEl(t),e)do{if(e[F]){if(e[F]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);kt()}},_onTouchMove:function(t){if(lt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&T(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,s=xt&&mt&&P(mt),c=(i.clientX-lt.clientX+o.x)/(a||1)+(s?s[0]-St[0]:0)/(a||1),u=(i.clientY-lt.clientY+o.y)/(l||1)+(s?s[1]-St[1]:0)/(l||1);if(!Yt.active&&!bt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(Z){r?(r.e+=c-(ct||0),r.f+=u-(ut||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");_(Z,"webkitTransform",d),_(Z,"mozTransform",d),_(Z,"msTransform",d),_(Z,"transform",d),ct=c,ut=u,st=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:K,e=N(V,!0,xt,!0,t),n=this.options;if(xt){for(mt=t;"static"===_(mt,"position")&&"none"===_(mt,"transform")&&mt!==document;)mt=mt.parentNode;mt!==document.body&&mt!==document.documentElement?(mt===document&&(mt=x()),e.top+=mt.scrollTop,e.left+=mt.scrollLeft):mt=x(),St=P(mt)}S(Z=V.cloneNode(!0),n.ghostClass,!1),S(Z,n.fallbackClass,!0),S(Z,n.dragClass,!0),_(Z,"transition",""),_(Z,"transform",""),_(Z,"box-sizing","border-box"),_(Z,"margin",0),_(Z,"top",e.top),_(Z,"left",e.left),_(Z,"width",e.width),_(Z,"height",e.height),_(Z,"opacity","0.8"),_(Z,"position",xt?"absolute":"fixed"),_(Z,"zIndex","100000"),_(Z,"pointerEvents","none"),Yt.ghost=Z,t.appendChild(Z),_(Z,"transform-origin",dt/parseInt(Z.style.width)*100+"% "+ht/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;G("dragStart",this,{evt:t}),Yt.eventCanceled?this._onDrop():(G("setupClone",this),Yt.eventCanceled||((J=B(V)).draggable=!1,J.style["will-change"]="",this._hideClone(),S(J,this.options.chosenClass,!1),Yt.clone=J),n.cloneId=Wt((function(){G("clone",n),Yt.eventCanceled||(n.options.removeCloneOnHide||K.insertBefore(J,V),n._hideClone(),U({sortable:n,name:"clone"}))})),!e&&S(V,i.dragClass,!0),e?(yt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(m(document,"mouseup",n._onDrop),m(document,"touchend",n._onDrop),m(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,V)),v(document,"drop",n),_(V,"transform","translateZ(0)")),bt=!0,n._dragStartId=Wt(n._dragStarted.bind(n,e,t)),v(document,"selectstart",n),ft=!0,h&&_(document.body,"user-select","none"))},_onDragOver:function(t){var e,n,o,i,r=this.el,l=t.target,s=this.options,c=s.group,u=Yt.active,d=rt===c,h=s.sort,f=at||u,p=this,g=!1;if(!_t){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),l=w(l,s.draggable,r,!0),R("dragOver"),Yt.eventCanceled)return g;if(V.contains(t.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return H(!1);if(yt=!1,u&&!s.disabled&&(d?h||(o=!K.contains(V)):at===this||(this.lastPutMode=rt.checkPull(this,u,V,t))&&c.checkPut(this,u,V,t))){if(i="vertical"===this._getDirection(t,l),e=N(V),R("dragOverValid"),Yt.eventCanceled)return g;if(o)return q=K,B(),this._hideClone(),R("revert"),Yt.eventCanceled||(Q?K.insertBefore(V,Q):K.appendChild(V)),H(!0);var v=I(r,s.draggable);if(!v||function(t,e,n){var o=N(I(n.el,n.options.draggable)),i=10;return e?t.clientX>o.right+i||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+i}(t,i,this)&&!v.animated){if(v===V)return H(!1);if(v&&r===t.target&&(l=v),l&&(n=N(l)),!1!==Bt(K,r,V,e,l,n,t,!!l))return B(),r.appendChild(V),q=r,L(),H(!0)}else if(l.parentNode===r){n=N(l);var m,b,y,E=V.parentNode!==r,D=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(V.animated&&V.toRect||e,l.animated&&l.toRect||n,i),T=i?"top":"left",C=O(l,"top","top")||O(V,"top","top"),x=C?C.scrollTop:void 0;if(pt!==l&&(b=n[T],Et=!1,Dt=!D&&s.invertSwap||E),0!==(m=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&vt<c*i){if(!Et&&(1===gt?s>u+c*r/2:s<d-c*r/2)&&(Et=!0),Et)h=!0;else if(1===gt?s<u+vt:s>d-vt)return-gt}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return A(V)<A(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||s>d-c*r/2))return s>u+c/2?1:-1;return 0}(t,l,n,i,D?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Dt,pt===l))){var M=A(V);do{M-=m,y=q.children[M]}while(y&&("none"===_(y,"display")||y===Z))}if(0===m||y===l)return H(!1);pt=l,gt=m;var P=l.nextElementSibling,k=!1,X=Bt(K,r,V,e,l,n,t,k=1===m);if(!1!==X)return 1!==X&&-1!==X||(k=1===X),_t=!0,setTimeout(Ht,30),B(),k&&!P?r.appendChild(V):l.parentNode.insertBefore(V,k?P:l),C&&Y(C,0,x-C.scrollTop),q=V.parentNode,void 0===b||Dt||(vt=Math.abs(b-N(l)[T])),L(),H(!0)}if(r.contains(V))return H(!1)}return!1}function R(s,c){G(s,p,a({evt:t,isOwner:d,axis:i?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,canSort:h,fromSortable:f,target:l,completed:H,onMove:function(n,o){return Bt(K,r,V,e,n,N(n),t,o)},changed:L},c))}function B(){R("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function H(e){return R("dragOverCompleted",{insertion:e}),e&&(d?u._hideClone():u._showClone(p),p!==f&&(S(V,at?at.options.ghostClass:u.options.ghostClass,!1),S(V,s.ghostClass,!0)),at!==p&&p!==Yt.active?at=p:p===Yt.active&&at&&(at=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll((function(){R("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===V&&!V.animated||l===r&&!l.animated)&&(pt=null),s.dragoverBubble||t.rootEl||l===document||(V.parentNode[F]._isOutsideThisEl(t.target),!e&&Xt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function L(){nt=A(V),it=A(V,s.draggable),U({sortable:p,name:"change",toEl:r,newIndex:nt,newDraggableIndex:it,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){m(document,"mousemove",this._onTouchMove),m(document,"touchmove",this._onTouchMove),m(document,"pointermove",this._onTouchMove),m(document,"dragover",Xt),m(document,"mousemove",Xt),m(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;m(t,"mouseup",this._onDrop),m(t,"touchend",this._onDrop),m(t,"pointerup",this._onDrop),m(t,"touchcancel",this._onDrop),m(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;nt=A(V),it=A(V,n.draggable),G("drop",this,{evt:t}),q=V&&V.parentNode,nt=A(V),it=A(V,n.draggable),Yt.eventCanceled||(bt=!1,Dt=!1,Et=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),jt(this.cloneId),jt(this._dragStartId),this.nativeDraggable&&(m(document,"drop",this),m(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),h&&_(document.body,"user-select",""),_(V,"transform",""),t&&(ft&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),(K===q||at&&"clone"!==at.lastPutMode)&&J&&J.parentNode&&J.parentNode.removeChild(J),V&&(this.nativeDraggable&&m(V,"dragend",this),Ft(V),V.style["will-change"]="",ft&&!bt&&S(V,at?at.options.ghostClass:this.options.ghostClass,!1),S(V,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:q,newIndex:null,newDraggableIndex:null,originalEvent:t}),K!==q?(nt>=0&&(U({rootEl:q,name:"add",toEl:q,fromEl:K,originalEvent:t}),U({sortable:this,name:"remove",toEl:q,originalEvent:t}),U({rootEl:q,name:"sort",toEl:q,fromEl:K,originalEvent:t}),U({sortable:this,name:"sort",toEl:q,originalEvent:t})),at&&at.save()):nt!==et&&nt>=0&&(U({sortable:this,name:"update",toEl:q,originalEvent:t}),U({sortable:this,name:"sort",toEl:q,originalEvent:t})),Yt.active&&(null!=nt&&-1!==nt||(nt=et,it=ot),U({sortable:this,name:"end",toEl:q,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){G("nulling",this),K=V=q=Z=Q=J=$=tt=lt=st=ft=nt=it=et=ot=pt=gt=at=rt=Yt.dragged=Yt.ghost=Yt.clone=Yt.active=null,Tt.forEach((function(t){t.checked=!0})),Tt.length=ct=ut=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":V&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)w(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Lt(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach((function(t,e){var i=o.children[e];w(i,this.options.draggable,o,!1)&&(n[t]=i)}),this),e&&this.captureAnimationState(),t.forEach((function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return w(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=j.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){G("destroy",this);var t=this.el;t[F]=null,m(t,"mousedown",this._onTapStart),m(t,"touchstart",this._onTapStart),m(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(m(t,"dragover",this),m(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),wt.splice(wt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!tt){if(G("hideClone",this),Yt.eventCanceled)return;_(J,"display","none"),this.options.removeCloneOnHide&&J.parentNode&&J.parentNode.removeChild(J),tt=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(tt){if(G("showClone",this),Yt.eventCanceled)return;V.parentNode!=K||this.options.group.revertClone?Q?K.insertBefore(J,Q):K.appendChild(J):K.insertBefore(J,V),this.options.group.revertClone&&this.animate(V,J),_(J,"display",""),tt=!1}}else this._hideClone()}},Ct&&v(document,"touchmove",(function(t){(Yt.active||bt)&&t.cancelable&&t.preventDefault()})),Yt.utils={on:v,off:m,css:_,find:C,is:function(t,e){return!!w(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:R,closest:w,toggleClass:S,clone:B,index:A,nextTick:Wt,cancelNextTick:jt,detectDirection:It,getChild:M},Yt.get=function(t){return t[F]},Yt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Yt.utils=a({},Yt.utils,t.utils)),j.mount(t)}))},Yt.create=function(t,e){return new Yt(t,e)},Yt.version="1.13.0";var zt,Gt,Ut,Vt,qt,Zt,Kt=[],Qt=!1;function $t(){Kt.forEach((function(t){clearInterval(t.pid)})),Kt=[]}function Jt(){clearInterval(Zt)}var te=R((function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=x(),u=!1;Gt!==n&&(Gt=n,$t(),zt=e.scroll,i=e.scrollFn,!0===zt&&(zt=k(n,!0)));var d=0,h=zt;do{var f=h,p=N(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,T=f.scrollHeight,C=_(f),O=f.scrollLeft,M=f.scrollTop;f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),D=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),D=w<T&&("auto"===C.overflowY||"scroll"===C.overflowY));var I=E&&(Math.abs(b-r)<=l&&O+y<S)-(Math.abs(m-r)<=l&&!!O),A=D&&(Math.abs(v-a)<=l&&M+w<T)-(Math.abs(g-a)<=l&&!!M);if(!Kt[d])for(var P=0;P<=d;P++)Kt[P]||(Kt[P]={});Kt[d].vx==I&&Kt[d].vy==A&&Kt[d].el===f||(Kt[d].el=f,Kt[d].vx=I,Kt[d].vy=A,clearInterval(Kt[d].pid),0==I&&0==A||(u=!0,Kt[d].pid=setInterval(function(){o&&0===this.layer&&Yt.active._onTouchMove(qt);var e=Kt[this.layer].vy?Kt[this.layer].vy*s:0,n=Kt[this.layer].vx?Kt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Yt.dragged.parentNode[F],n,e,t,qt,Kt[this.layer].el)||Y(Kt[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=k(h,!1)));Qt=u}}),30),ee=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=M(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:ee},r(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:ee},r(oe,{pluginName:"removeOnSpill"});Yt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):this.options.supportPointer?v(document,"pointermove",this._handleFallbackAutoScroll):e.touches?v(document,"touchmove",this._handleFallbackAutoScroll):v(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?m(document,"dragover",this._handleAutoScroll):(m(document,"pointermove",this._handleFallbackAutoScroll),m(document,"touchmove",this._handleFallbackAutoScroll),m(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),$t(),clearTimeout(E),E=void 0},nulling:function(){qt=Gt=zt=Qt=Zt=Ut=Vt=null,Kt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i);if(qt=t,e||u||c||h){te(t,this.options,r,e);var a=k(r,!0);!Qt||Zt&&o===Ut&&i===Vt||(Zt&&Jt(),Zt=setInterval((function(){var r=k(document.elementFromPoint(o,i),!0);r!==a&&(a=r,$t()),te(t,n.options,r,e)}),10),Ut=o,Vt=i)}else{if(!this.options.bubbleScroll||k(r,!0)===x())return void $t();te(t,this.options,k(r,!1),!1)}}},r(t,{pluginName:"scroll",initializeByDefault:!0})}),Yt.mount(oe,ne);const ie=Yt}}]);