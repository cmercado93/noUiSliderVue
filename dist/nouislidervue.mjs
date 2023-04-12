import{openBlock as ir,createElementBlock as sr}from"vue";var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ar(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var re={},or={get exports(){return re},set exports(t){re=t}};!function(){function n(t){return"object"==typeof t&&"function"==typeof t.to}function ut(t){t.parentElement.removeChild(t)}function ct(t){return null!=t}function pt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function dt(t,e,r){0<r&&(mt(t,e),setTimeout(function(){gt(t,e)},r))}function ht(t){return Math.max(Math.min(t,100),0)}function ft(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function gt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function vt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function a(t,e){return 100/(e-t)}function l(t,e,r){return 100*e/(t[r+1]-t[r])}function u(t,e){for(var r=1;t>=e[r];)r+=1;return r}function o(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function c(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function p(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function h(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new r(e,t.snap||!1,t.singleStep)}function f(t,e){if(e=ft(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function m(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function g(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function v(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function b(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function S(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function x(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function y(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function P(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var e=e[0]+e[1],n=t.spectrum.xVal[0];if(1<e/(t.spectrum.xVal[t.spectrum.xVal.length-1]-n))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function C(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function N(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),s=0<=e.indexOf("snap"),o=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");x(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||s,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:s,hover:o,unconstrained:a}}function U(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=ft(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function V(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function k(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function A(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function M(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function D(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function bt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:w,format:w},n={step:{r:!1,t:o},keyboardPageMultiplier:{r:!1,t:c},keyboardMultiplier:{r:!1,t:p},keyboardDefaultStep:{r:!1,t:d},start:{r:!0,t:f},connect:{r:!0,t:b},direction:{r:!0,t:C},snap:{r:!1,t:m},animate:{r:!1,t:g},animationDuration:{r:!1,t:v},range:{r:!0,t:h},orientation:{r:!1,t:S},margin:{r:!1,t:x},limit:{r:!1,t:y},padding:{r:!1,t:P},behaviour:{r:!0,t:N},ariaFormat:{r:!1,t:k},format:{r:!1,t:A},tooltips:{r:!1,t:U},keyboardSupport:{r:!0,t:M},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:D},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:V}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:E,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10},t=(e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(ct(e[t])||void 0!==i[t])n[t].t(r,(ct(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips,document.createElement("div")),s=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":s?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function R(t,d,s){var i,l,a,n,o,u=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},L=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}(),c=t,S=d.spectrum,p=[],h=[],f=[],m=0,g={},v=t.ownerDocument,b=d.documentElement||v.documentElement,x=v.body,j="rtl"===v.dir||1===d.ort?0:100;function y(t,e){var r=v.createElement("div");return e&&mt(r,e),t.appendChild(r),r}function H(t,c){var e,t=y(t,d.cssClasses.origin),r=y(t,d.cssClasses.handle);return y(r,d.cssClasses.touchArea),r.setAttribute("data-handle",String(c)),d.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",function(t){var e=c;if(!_()&&!w(e)){var r,n=["Left","Right"],i=["Down","Up"],s=["PageDown","PageUp"],o=["Home","End"],a=(d.dir&&!d.ort?n.reverse():d.ort&&!d.dir&&(i.reverse(),s.reverse()),t.key.replace("Arrow","")),l=a===s[0],s=a===s[1],u=a===i[0]||a===n[0]||l,i=a===i[1]||a===n[1]||s,n=a===o[0],a=a===o[1];if(!(u||i||n||a))return!0;if(t.preventDefault(),i||u){o=u?0:1,n=st(e)[o];if(null===n)return!1;!1===n&&(n=S.getDefaultStep(h[e],u,d.keyboardDefaultStep)),n*=s||l?d.keyboardPageMultiplier:d.keyboardMultiplier,n=Math.max(n,1e-7),n*=u?-1:1,r=p[e]+n}else r=a?d.spectrum.xVal[d.spectrum.xVal.length-1]:d.spectrum.xVal[0];M(e,S.toStepping(r),!0,!0),k("slide",e),k("update",e),k("change",e),k("set",e)}return!1})),void 0!==d.handleAttributes&&(e=d.handleAttributes[c],Object.keys(e).forEach(function(t){r.setAttribute(t,e[t])})),r.setAttribute("role","slider"),r.setAttribute("aria-orientation",d.ort?"vertical":"horizontal"),0===c?mt(r,d.cssClasses.handleLower):c===d.handles-1&&mt(r,d.cssClasses.handleUpper),t.handle=r,t}function z(t,e){return!!e&&y(t,d.cssClasses.connect)}function F(t,e){return!(!d.tooltips||!d.tooltips[e])&&y(t.firstChild,d.cssClasses.tooltip)}function _(){return c.hasAttribute("disabled")}function w(t){return l[t].hasAttribute("disabled")}function E(){o&&(r("update"+xt.tooltips),o.forEach(function(t){t&&ut(t)}),o=null)}function B(){E(),o=l.map(F),e("update"+xt.tooltips,function(t,e,r){o&&d.tooltips&&!1!==o[e]&&(t=t[e],!0!==d.tooltips[e]&&(t=d.tooltips[e].to(r[e])),o[e].innerHTML=t)})}function $(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function q(h){var f=function(t){if(t.mode===St.PipsMode.Range||t.mode===St.PipsMode.Steps)return S.xVal;if(t.mode!==St.PipsMode.Count)return t.mode===St.PipsMode.Positions?$(t.values,t.stepped):t.mode===St.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),$(n,t.stepped)}(h),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(f=f.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(f.unshift(t),g=!0),f[f.length-1]!==e&&(f.push(e),v=!0),f.forEach(function(t,e){var r,n,i,s,o,a,l,u,c=f[e+1],p=h.mode===St.PipsMode.Steps,d=(d=p?S.xNumSteps[e]:d)||c-t;for(void 0===c&&(c=t),d=Math.max(d,1e-7),r=t;r<=c;r=Number((r+d).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(h.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];o=-1<f.indexOf(r)?St.PipsType.LargeValue:p?St.PipsType.SmallValue:St.PipsType.NoValue,!e&&g&&r!==c&&(o=0),r===c&&v||(m[i.toFixed(5)]=[r,o]),b=i}}),m}function X(i,s,o){var t,a=v.createElement("div"),n=((t={})[St.PipsType.None]="",t[St.PipsType.NoValue]=d.cssClasses.valueNormal,t[St.PipsType.LargeValue]=d.cssClasses.valueLarge,t[St.PipsType.SmallValue]=d.cssClasses.valueSub,t),l=((t={})[St.PipsType.None]="",t[St.PipsType.NoValue]=d.cssClasses.markerNormal,t[St.PipsType.LargeValue]=d.cssClasses.markerLarge,t[St.PipsType.SmallValue]=d.cssClasses.markerSub,t),u=[d.cssClasses.valueHorizontal,d.cssClasses.valueVertical],c=[d.cssClasses.markerHorizontal,d.cssClasses.markerVertical];function p(t,e){var r=e===d.cssClasses.value;return e+" "+(r?u:c)[d.ort]+" "+(r?n:l)[t]}return mt(a,d.cssClasses.pips),mt(a,0===d.ort?d.cssClasses.pipsHorizontal:d.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],t=i[t][1],(t=s?s(r,t):t)!==St.PipsType.None&&((n=y(a,!1)).className=p(t,d.cssClasses.marker),n.style[d.style]=e+"%",t>St.PipsType.NoValue)&&((n=y(a,!1)).className=p(t,d.cssClasses.value),n.setAttribute("data-value",String(r)),n.style[d.style]=e+"%",n.innerHTML=String(o.to(r)))}),a}function P(){n&&(ut(n),n=null)}function C(t){P();var e=q(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=c.appendChild(X(e,r,t))}function Y(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][d.ort];return 0===d.ort?t.width||i[e]:t.height||i[e]}function N(n,i,s,o){function e(t){var e,r;if(!(t=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),s=0===e.type.indexOf("pointer"),o=0,a=0;if(0===e.type.indexOf("MSPointer")&&(s=!0),"mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){function l(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r}if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;o=n[0].pageX,a=n[0].pageY}else{n=Array.prototype.find.call(e.changedTouches,l);if(!n)return!1;o=n.pageX,a=n.pageY}}return t=t||vt(v),(i||s)&&(o=e.clientX+t.x,a=e.clientY+t.y),e.pageOffset=t,e.points=[o,a],e.cursor=i||s,e}(t,o.pageOffset,o.target||i))||_()&&!o.doNotReject||(e=c,r=d.cssClasses.tap,(e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!o.doNotReject)||n===u.start&&void 0!==t.buttons&&1<t.buttons||o.hover&&t.buttons)return!1;L||t.preventDefault(),t.calcPoint=t.points[d.ort],s(t,o)}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!L&&{passive:!0}),r.push([t,e])}),r}function I(t){var e,r,n=ht(100*(t-(t=i,n=d.ort,e=t.getBoundingClientRect(),r=(t=t.ownerDocument).documentElement,t=vt(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),n?e.top+t.y-r.clientTop:e.left+t.x-r.clientLeft))/Y());return d.dir?100-n:n}function W(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&U(t,e)}function G(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return U(t,e);t=(d.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function U(t,e){e.handle&&(gt(e.handle,d.cssClasses.active),--m),e.listeners.forEach(function(t){b.removeEventListener(t[0],t[1])}),0===m&&(gt(c,d.cssClasses.drag),et(),t.cursor)&&(x.style.cursor="",x.removeEventListener("selectstart",pt)),d.events.smoothSteps&&(e.handleNumbers.forEach(function(t){M(t,h[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){k("update",t)})),e.handleNumbers.forEach(function(t){k("change",t),k("set",t),k("end",t)})}function V(t,e){var r,n,i,s;e.handleNumbers.some(w)||(1===e.handleNumbers.length&&(s=l[e.handleNumbers[0]].children[0],m+=1,mt(s,d.cssClasses.active)),t.stopPropagation(),n=N(u.move,b,G,{target:t.target,handle:s,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:Y(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:h.slice()}),i=N(u.end,b,U,{target:t.target,handle:s,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),s=N("mouseout",b,W,{target:t.target,handle:s,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,s)),t.cursor&&(x.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&mt(c,d.cssClasses.drag),x.addEventListener("selectstart",pt,!1)),e.handleNumbers.forEach(function(t){k("start",t)}))}function J(t){t.stopPropagation();var i,s,o,e=I(t.calcPoint),r=(i=e,o=!(s=100),l.forEach(function(t,e){var r,n;!w(e)&&(r=h[e],(n=Math.abs(r-i))<s||n<=s&&r<i||100===n&&100===s)&&(o=e,s=n)}),o);!1!==r&&(d.events.snap||dt(c,d.cssClasses.tap,d.animationDuration),M(r,e,!0,!0),et(),k("slide",r,!0),k("update",r,!0),d.events.snap?V(t,{handleNumbers:[r]}):(k("change",r,!0),k("set",r,!0)))}function K(t){var t=I(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(g).forEach(function(t){"hover"===t.split(".")[0]&&g[t].forEach(function(t){t.call(R,e)})})}function e(t,e){g[t]=g[t]||[],g[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){k("update",e)})}function r(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(g).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)===xt.aria||e===xt.tooltips)&&i!==r||delete g[t]})}function k(r,n,i){Object.keys(g).forEach(function(t){var e=t.split(".")[0];r===e&&g[t].forEach(function(t){t.call(R,p.map(d.format.to),n,p.slice(),i||!1,h.slice(),R)})})}function A(t,e,r,n,i,s,o){var a;return 1<l.length&&!d.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],d.margin,!1),r=Math.max(r,a)),i)&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],d.margin,!0),r=Math.min(r,a)),1<l.length&&d.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],d.limit,!1),r=Math.min(r,a)),i)&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],d.limit,!0),r=Math.max(r,a)),d.padding&&(0===e&&(a=S.getAbsoluteDistance(0,d.padding[0],!1),r=Math.max(r,a)),e===l.length-1)&&(a=S.getAbsoluteDistance(100,d.padding[1],!0),r=Math.min(r,a)),!((r=ht(r=o?r:S.getStep(r)))===t[e]&&!s)&&r}function Q(t,e){var r=d.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,r,n,e,i){var s=n.slice(),o=e[0],a=d.events.smoothSteps,l=[!t,t],u=[t,!t],c=(e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=A(s,t,s[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-s[t],s[t]=e)}):l=u=[!0],!1);e.forEach(function(t,e){c=M(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){k("update",t),k("slide",t)}),null!=i)&&k("drag",o)}function tt(t,e){return d.dir?100-t-e:t}function et(){f.forEach(function(t){var e=50<h[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function M(t,e,r,n,i,s){return!1!==(e=i?e:A(h,t,e,r,n,!1,s))&&(i=e,h[r=t]=i,p[r]=S.fromStepping(i),i="translate("+Q(tt(i,0)-j+"%","0")+")",l[r].style[d.transformRule]=i,rt(r),rt(r+1),!0)}function rt(t){var e,r;a[t]&&(r=100,e="translate("+Q(tt(e=(e=0)!==t?h[t-1]:e,r=(r=t!==a.length-1?h[t]:r)-e)+"%","0")+")",r="scale("+Q(r/100,"1")+")",a[t].style[d.transformRule]=e+" "+r)}function nt(t,e){return null===t||!1===t||void 0===t||("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=d.format.from(t))?S.toStepping(t):t))||isNaN(t)?h[e]:t}function O(t,e,r){var n,i=ft(t),t=void 0===h[0],s=(e=void 0===e||e,d.animate&&!t&&dt(c,d.cssClasses.tap,d.animationDuration),f.forEach(function(t){M(t,nt(i[t],t),!0,!1,r)}),1===f.length?0:1);for(t&&S.hasNoSize()&&(r=!0,h[0]=0,1<f.length)&&(n=100/(f.length-1),f.forEach(function(t){h[t]=t*n}));s<f.length;++s)f.forEach(function(t){M(t,h[t],!0,!0,r)});et(),f.forEach(function(t){k("update",t),null!==i[t]&&e&&k("set",t)})}function it(t){return(t=void 0!==t&&t)?1===p.length?p[0]:p.slice(0):1===(t=p.map(d.format.to)).length?t[0]:t}function st(t){var e=h[t],r=S.getNearbySteps(e),t=p[t],n=r.thisStep.step,i=null;if(d.snap)return[t-r.stepBefore.startValue||null,r.stepAfter.startValue-t||null];!1!==n&&t+n>r.stepAfter.startValue&&(n=r.stepAfter.startValue-t),i=t>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&t-r.stepBefore.highestStep,100===e?n=null:0===e&&(i=null);t=S.countStepDecimals();return null!==n&&!1!==n&&(n=Number(n.toFixed(t))),[i=null!==i&&!1!==i?Number(i.toFixed(t)):i,n]}mt(t=c,d.cssClasses.target),0===d.dir?mt(t,d.cssClasses.ltr):mt(t,d.cssClasses.rtl),0===d.ort?mt(t,d.cssClasses.horizontal):mt(t,d.cssClasses.vertical),mt(t,"rtl"===getComputedStyle(t).direction?d.cssClasses.textDirectionRtl:d.cssClasses.textDirectionLtr),i=y(t,d.cssClasses.base);var ot=d.connect,at=i,lt=y(at,d.cssClasses.connects);l=[],(a=[]).push(z(lt,ot[0]));for(var D,T=0;T<d.handles;T++)l.push(H(at,T)),f[T]=T,a.push(z(lt,ot[T+1]));(D=d.events).fixed||l.forEach(function(t,e){N(u.start,t.children[0],V,{handleNumbers:[e]})}),D.tap&&N(u.start,i,J,{}),D.hover&&N(u.move,i,K,{hover:!0}),D.drag&&a.forEach(function(e,t){var r,n,i,s,o;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],s=[r,n],o=[t-1,t],mt(e,d.cssClasses.draggable),D.fixed&&(i.push(r.children[0]),i.push(n.children[0])),D.dragAll&&(s=l,o=f),i.forEach(function(t){N(u.start,t,V,{handles:s,handleNumbers:o,connect:e})}))}),O(d.start),d.pips&&C(d.pips),d.tooltips&&B(),r("update"+xt.aria),e("update"+xt.aria,function(t,e,s,r,o){f.forEach(function(t){var e=l[t],r=A(h,t,0,!0,!0,!0),n=A(h,t,100,!0,!0,!0),i=o[t],t=String(d.ariaFormat.to(s[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var R={destroy:function(){for(r(xt.aria),r(xt.tooltips),Object.keys(d.cssClasses).forEach(function(t){gt(c,d.cssClasses[t])});c.firstChild;)c.removeChild(c.firstChild);delete c.noUiSlider},steps:function(){return f.map(st)},on:e,off:r,get:it,set:O,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<f.length))throw new Error("noUiSlider: invalid handle number, got: "+t);M(t,nt(e,t),!0,!0,n),k("update",t),r&&k("set",t)},reset:function(t){O(d.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(c.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(c.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){Z(t,e,h,r)},options:s,updateOptions:function(e,t){var r=it(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"],i=(n.forEach(function(t){void 0!==e[t]&&(s[t]=e[t])}),bt(s));n.forEach(function(t){void 0!==e[t]&&(d[t]=i[t])}),S=i.spectrum,d.margin=i.margin,d.limit=i.limit,d.padding=i.padding,d.pips?C(d.pips):P(),(d.tooltips?B:E)(),h=[],O(ct(e.start)?e.start:r,t)},target:c,removePips:P,removeTooltips:E,getPositions:function(){return h.slice()},getTooltips:function(){return o},getOrigins:function(){return l},pips:C};return R}function t(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=R(t,bt(e),e);return t.noUiSlider=e}var St,r,w,E,xt,s;(St=re).PipsMode=void 0,(s=St.PipsMode||(St.PipsMode={})).Range="range",s.Steps="steps",s.Positions="positions",s.Count="count",s.Values="values",St.PipsType=void 0,(s=St.PipsType||(St.PipsType={}))[s.None=-1]="None",s[s.NoValue=0]="NoValue",s[s.LargeValue=1]="LargeValue",s[s.SmallValue=2]="SmallValue",r=function(){function t(e,t,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var n,i=[];for(Object.keys(e).forEach(function(t){i.push([ft(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=l(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,s=1,o=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<o;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*s+100-100*c?(a=i*c,s=(o-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*s,s=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),o=e[n+u]*s;return t+l},t.prototype.toStepping=function(t){return e=this.xVal,r=this.xPct,t=(n=t)>=e.slice(-1)[0]?100:(i=u(n,e),s=e[i-1],e=e[i],o=r[i-1],r=r[i],o+function(t,e){return l(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([s,e],n)/a(o,r));var e,r,n,i,s,o},t.prototype.fromStepping=function(t){return e=this.xVal,r=this.xPct,100<=(t=t)?e.slice(-1)[0]:(s=u(t,r),n=e[s-1],e=e[s],i=r[s-1],r=r[s],(t-i)*a(i,r)*((s=[n,e])[1]-s[0])/100+s[0]);var e,r,n,i,s},t.prototype.getStep=function(t){return e=this.xPct,r=this.xSteps,n=this.snap,t=100===(i=t)?i:(s=u(i,e),o=e[s-1],a=e[s],n?(a-o)/2<i-o?a:o:r[s-1]?e[s-1]+function(t,e){return Math.round(t/e)*e}(i-e[s-1],r[s-1]):i);var e,r,n,i,s,o,a},t.prototype.getDefaultStep=function(t,e,r){var n=u(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=u(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]===this.xVal[t+1]?this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]:(this.xSteps[t]=l([this.xVal[t],this.xVal[t+1]],e,0)/a(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e))},t}(),w={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},xt={tooltips:".__tooltips",aria:".__aria"},s={__spectrum:r,cssClasses:E={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},create:t},St.create=t,St.cssClasses=E,St.default=s,Object.defineProperty(St,"__esModule",{value:!0})}();const lr=ar(re),fr=(t,e)=>{var r,n,i=t.__vccOpts||t;for([r,n]of e)i[r]=n;return i},ur={props:{id:{type:String,default:()=>"slider-"+(Math.random()+1).toString(36).substring(7)},configs:{type:Object,required:!0,validator(t){return 0<Object.keys(t).length}}},data(){return{events:[]}},mounted(){this.create(),this.startBasicEvents()},beforeUnmount(){this.destroy()},methods:{getReference(){return this.$refs[this.id]},create(){lr.create(this.getReference(),this.configs)},startBasicEvents(){this.startUpdate(),this.startStart(),this.startSlide(),this.startDrag(),this.startChange(),this.startSet(),this.startEnd()},offAllEvents(){var e=this.events.length;for(let t=0;t<e;t++)this.off(this.events.pop())},startUpdate(){this.on("update",(t,e,r,n,i)=>{this.$emit("update",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startStart(){this.on("start",(t,e,r,n,i)=>{this.$emit("start",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startSlide(){this.on("slide",(t,e,r,n,i)=>{this.$emit("slide",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startDrag(){this.on("drag",(t,e,r,n,i)=>{this.$emit("drag",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startChange(){this.on("change",(t,e,r,n,i)=>{this.$emit("change",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startSet(){this.on("set",(t,e,r,n,i)=>{this.$emit("set",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},startEnd(){this.on("end",(t,e,r,n,i)=>{this.$emit("end",{values:t,handle:e,unencoded:r,tap:n,positions:i})})},destroy(){this.offAllEvents(),this.getReference().noUiSlider.destroy()},steps(){return this.getReference().noUiSlider.steps()},on(t,e){this.events.push(t),this.getReference().noUiSlider.on(t,e)},off(t){this.getReference().noUiSlider.off(t)},get(t){return this.getReference().noUiSlider.get(t)},set(t,e,r){this.getReference().noUiSlider.set(t,e,r)},setHandle(t,e,r,n){this.getReference().noUiSlider.setHandle(t,e,r,n)},reset(t){this.getReference().noUiSlider.reset(t)},disable(t){this.getReference().noUiSlider.disable(t)},enable(t){this.getReference().noUiSlider.enable(t)},updateOptions(t,e){this.getReference().noUiSlider.updateOptions(t,e)},removePips(){this.getReference().noUiSlider.removePips()},removeTooltips(){this.getReference().noUiSlider.removeTooltips()},getPositions(){return this.getReference().noUiSlider.getPositions()},getTooltips(){return this.getReference().noUiSlider.getTooltips()},getOrigins(){return this.getReference().noUiSlider.getOrigins()},pips(t){return this.getReference().noUiSlider.pips(t)}},expose:["destroy","steps","on","off","get","set","setHandle","reset","disable","enable","updateOptions","removePips","removeTooltips","getPositions","getTooltips","getOrigins","pips"]},cr=["id"];function hr(t,e,r,n,i,s){return ir(),sr("div",{id:r.id,ref:r.id,class:"slider-ui"},null,8,cr)}const pr=fr(ur,[["render",hr]]);export{pr as default};