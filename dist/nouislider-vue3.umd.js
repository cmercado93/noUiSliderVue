(function(q,G){typeof exports=="object"&&typeof module<"u"?module.exports=G(require("vue")):typeof define=="function"&&define.amd?define(["vue"],G):(q=typeof globalThis<"u"?globalThis:q||self,q.noUiSliderVue=G(q.Vue))})(this,function(q){"use strict";var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ye(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Z={},Ge={get exports(){return Z},set exports(n){Z=n}};(function(n,m){(function(p,A){A(m)})(G,function(p){p.PipsMode=void 0,function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"}(p.PipsMode||(p.PipsMode={})),p.PipsType=void 0,function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"}(p.PipsType||(p.PipsType={}));function A(r){return k(r)&&typeof r.from=="function"}function k(r){return typeof r=="object"&&typeof r.to=="function"}function X(r){r.parentElement.removeChild(r)}function ne(r){return r!=null}function Pe(r){r.preventDefault()}function rt(r){return r.filter(function(e){return this[e]?!1:this[e]=!0},{})}function it(r,e){return Math.round(r/e)*e}function st(r,e){var o=r.getBoundingClientRect(),f=r.ownerDocument,c=f.documentElement,S=Ve(f);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(S.x=0),e?o.top+S.y-c.clientTop:o.left+S.x-c.clientLeft}function T(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function Ce(r,e,o){o>0&&(R(r,e),setTimeout(function(){ee(r,e)},o))}function Ae(r){return Math.max(Math.min(r,100),0)}function Q(r){return Array.isArray(r)?r:[r]}function at(r){r=String(r);var e=r.split(".");return e.length>1?e[1].length:0}function R(r,e){r.classList&&!/\s/.test(e)?r.classList.add(e):r.className+=" "+e}function ee(r,e){r.classList&&!/\s/.test(e)?r.classList.remove(e):r.className=r.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function nt(r,e){return r.classList?r.classList.contains(e):new RegExp("\\b"+e+"\\b").test(r.className)}function Ve(r){var e=window.pageXOffset!==void 0,o=(r.compatMode||"")==="CSS1Compat",f=e?window.pageXOffset:o?r.documentElement.scrollLeft:r.body.scrollLeft,c=e?window.pageYOffset:o?r.documentElement.scrollTop:r.body.scrollTop;return{x:f,y:c}}function ot(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function lt(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch{}return r}function ut(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function oe(r,e){return 100/(e-r)}function le(r,e,o){return e*100/(r[o+1]-r[o])}function ft(r,e){return le(r,r[0]<0?e+Math.abs(r[0]):e-r[0],0)}function ct(r,e){return e*(r[1]-r[0])/100+r[0]}function J(r,e){for(var o=1;r>=e[o];)o+=1;return o}function dt(r,e,o){if(o>=r.slice(-1)[0])return 100;var f=J(o,r),c=r[f-1],S=r[f],g=e[f-1],x=e[f];return g+ft([c,S],o)/oe(g,x)}function pt(r,e,o){if(o>=100)return r.slice(-1)[0];var f=J(o,e),c=r[f-1],S=r[f],g=e[f-1],x=e[f];return ct([c,S],(o-g)*oe(g,x))}function ht(r,e,o,f){if(f===100)return f;var c=J(f,r),S=r[c-1],g=r[c];return o?f-S>(g-S)/2?g:S:e[c-1]?r[c-1]+it(f-r[c-1],e[c-1]):f}var ke=function(){function r(e,o,f){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[f||!1],this.xNumSteps=[!1],this.snap=o;var c,S=[];for(Object.keys(e).forEach(function(g){S.push([Q(e[g]),g])}),S.sort(function(g,x){return g[0][0]-x[0][0]}),c=0;c<S.length;c++)this.handleEntryPoint(S[c][1],S[c][0]);for(this.xNumSteps=this.xSteps.slice(0),c=0;c<this.xNumSteps.length;c++)this.handleStepPoint(c,this.xNumSteps[c])}return r.prototype.getDistance=function(e){for(var o=[],f=0;f<this.xNumSteps.length-1;f++)o[f]=le(this.xVal,e,f);return o},r.prototype.getAbsoluteDistance=function(e,o,f){var c=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[c+1];)c++;else e===this.xPct[this.xPct.length-1]&&(c=this.xPct.length-2);!f&&e===this.xPct[c+1]&&c++,o===null&&(o=[]);var S,g=1,x=o[c],v=0,H=0,z=0,O=0;for(f?S=(e-this.xPct[c])/(this.xPct[c+1]-this.xPct[c]):S=(this.xPct[c+1]-e)/(this.xPct[c+1]-this.xPct[c]);x>0;)v=this.xPct[c+1+O]-this.xPct[c+O],o[c+O]*g+100-S*100>100?(H=v*S,g=(x-100*S)/o[c+O],S=1):(H=o[c+O]*v/100*g,g=0),f?(z=z-H,this.xPct.length+O>=1&&O--):(z=z+H,this.xPct.length-O>=1&&O++),x=o[c+O]*g;return e+z},r.prototype.toStepping=function(e){return e=dt(this.xVal,this.xPct,e),e},r.prototype.fromStepping=function(e){return pt(this.xVal,this.xPct,e)},r.prototype.getStep=function(e){return e=ht(this.xPct,this.xSteps,this.snap,e),e},r.prototype.getDefaultStep=function(e,o,f){var c=J(e,this.xPct);return(e===100||o&&e===this.xPct[c-1])&&(c=Math.max(c-1,1)),(this.xVal[c]-this.xVal[c-1])/f},r.prototype.getNearbySteps=function(e){var o=J(e,this.xPct);return{stepBefore:{startValue:this.xVal[o-2],step:this.xNumSteps[o-2],highestStep:this.xHighestCompleteStep[o-2]},thisStep:{startValue:this.xVal[o-1],step:this.xNumSteps[o-1],highestStep:this.xHighestCompleteStep[o-1]},stepAfter:{startValue:this.xVal[o],step:this.xNumSteps[o],highestStep:this.xHighestCompleteStep[o]}}},r.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(at);return Math.max.apply(null,e)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(e){return this.getStep(this.toStepping(e))},r.prototype.handleEntryPoint=function(e,o){var f;if(e==="min"?f=0:e==="max"?f=100:f=parseFloat(e),!T(f)||!T(o[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(f),this.xVal.push(o[0]);var c=Number(o[1]);f?this.xSteps.push(isNaN(c)?!1:c):isNaN(c)||(this.xSteps[0]=c),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(e,o){if(o){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=le([this.xVal[e],this.xVal[e+1]],o,0)/oe(this.xPct[e],this.xPct[e+1]);var f=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],c=Math.ceil(Number(f.toFixed(3))-1),S=this.xVal[e]+this.xNumSteps[e]*c;this.xHighestCompleteStep[e]=S}},r}(),De={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},ue={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},$={tooltips:".__tooltips",aria:".__aria"};function vt(r,e){if(!T(e))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=e}function gt(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=e}function mt(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=e}function St(r,e){if(!T(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=e}function bt(r,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new ke(e,r.snap||!1,r.singleStep)}function yt(r,e){if(e=Q(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=e.length,r.start=e}function wt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=e}function Et(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=e}function xt(r,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=e}function Pt(r,e){var o=[!1],f;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(f=1;f<r.handles;f++)o.push(e);o.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");o=e}r.connect=o}function Ct(r,e){switch(e){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ue(r,e){if(!T(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(r.margin=r.spectrum.getDistance(e))}function At(r,e){if(!T(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(e),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Vt(r,e){var o;if(!T(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||T(e[0])||T(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),r.padding=[r.spectrum.getDistance(e[0]),r.spectrum.getDistance(e[1])],o=0;o<r.spectrum.xNumSteps.length-1;o++)if(r.padding[0][o]<0||r.padding[1][o]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var f=e[0]+e[1],c=r.spectrum.xVal[0],S=r.spectrum.xVal[r.spectrum.xVal.length-1];if(f/(S-c)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function kt(r,e){switch(e){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Dt(r,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var o=e.indexOf("tap")>=0,f=e.indexOf("drag")>=0,c=e.indexOf("fixed")>=0,S=e.indexOf("snap")>=0,g=e.indexOf("hover")>=0,x=e.indexOf("unconstrained")>=0,v=e.indexOf("drag-all")>=0,H=e.indexOf("smooth-steps")>=0;if(c){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ue(r,r.start[1]-r.start[0])}if(x&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:o||S,drag:f,dragAll:v,smoothSteps:H,fixed:c,snap:S,hover:g,unconstrained:x}}function Ut(r,e){if(e!==!1)if(e===!0||k(e)){r.tooltips=[];for(var o=0;o<r.handles;o++)r.tooltips.push(e)}else{if(e=Q(e),e.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(f){if(typeof f!="boolean"&&!k(f))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=e}}function Ot(r,e){if(e.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=e}function Mt(r,e){if(!k(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=e}function _t(r,e){if(!A(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=e}function Rt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=e}function jt(r,e){r.documentElement=e}function Ht(r,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=e}function Lt(r,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(e).forEach(function(o){r.cssClasses[o]=r.cssPrefix+e[o]})):r.cssClasses=e}function Oe(r){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:De,format:De},o={step:{r:!1,t:vt},keyboardPageMultiplier:{r:!1,t:gt},keyboardMultiplier:{r:!1,t:mt},keyboardDefaultStep:{r:!1,t:St},start:{r:!0,t:yt},connect:{r:!0,t:Pt},direction:{r:!0,t:kt},snap:{r:!1,t:wt},animate:{r:!1,t:Et},animationDuration:{r:!1,t:xt},range:{r:!0,t:bt},orientation:{r:!1,t:Ct},margin:{r:!1,t:Ue},limit:{r:!1,t:At},padding:{r:!1,t:Vt},behaviour:{r:!0,t:Dt},ariaFormat:{r:!1,t:Mt},format:{r:!1,t:_t},tooltips:{r:!1,t:Ut},keyboardSupport:{r:!0,t:Rt},documentElement:{r:!1,t:jt},cssPrefix:{r:!0,t:Ht},cssClasses:{r:!0,t:Lt},handleAttributes:{r:!1,t:Ot}},f={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:ue,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(o).forEach(function(v){if(!ne(r[v])&&f[v]===void 0){if(o[v].r)throw new Error("noUiSlider: '"+v+"' is required.");return}o[v].t(e,ne(r[v])?r[v]:f[v])}),e.pips=r.pips;var c=document.createElement("div"),S=c.style.msTransform!==void 0,g=c.style.transform!==void 0;e.transformRule=g?"transform":S?"msTransform":"webkitTransform";var x=[["left","top"],["right","bottom"]];return e.style=x[e.dir][e.ort],e}function Tt(r,e,o){var f=ot(),c=ut(),S=c&&lt(),g=r,x,v,H,z,O,b=e.spectrum,F=[],V=[],L=[],fe=0,N={},Y=r.ownerDocument,te=e.documentElement||Y.documentElement,re=Y.body,Ft=Y.dir==="rtl"||e.ort===1?0:100;function B(t,i){var s=Y.createElement("div");return i&&R(s,i),t.appendChild(s),s}function Nt(t,i){var s=B(t,e.cssClasses.origin),a=B(s,e.cssClasses.handle);if(B(a,e.cssClasses.touchArea),a.setAttribute("data-handle",String(i)),e.keyboardSupport&&(a.setAttribute("tabindex","0"),a.addEventListener("keydown",function(l){return ir(l,i)})),e.handleAttributes!==void 0){var u=e.handleAttributes[i];Object.keys(u).forEach(function(l){a.setAttribute(l,u[l])})}return a.setAttribute("role","slider"),a.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?R(a,e.cssClasses.handleLower):i===e.handles-1&&R(a,e.cssClasses.handleUpper),s.handle=a,s}function _e(t,i){return i?B(t,e.cssClasses.connect):!1}function Bt(t,i){var s=B(i,e.cssClasses.connects);v=[],H=[],H.push(_e(s,t[0]));for(var a=0;a<e.handles;a++)v.push(Nt(i,a)),L[a]=a,H.push(_e(s,t[a+1]))}function $t(t){R(t,e.cssClasses.target),e.dir===0?R(t,e.cssClasses.ltr):R(t,e.cssClasses.rtl),e.ort===0?R(t,e.cssClasses.horizontal):R(t,e.cssClasses.vertical);var i=getComputedStyle(t).direction;return i==="rtl"?R(t,e.cssClasses.textDirectionRtl):R(t,e.cssClasses.textDirectionLtr),B(t,e.cssClasses.base)}function qt(t,i){return!e.tooltips||!e.tooltips[i]?!1:B(t.firstChild,e.cssClasses.tooltip)}function Re(){return g.hasAttribute("disabled")}function ce(t){var i=v[t];return i.hasAttribute("disabled")}function Kt(t){t!=null?(v[t].setAttribute("disabled",""),v[t].handle.removeAttribute("tabindex")):(g.setAttribute("disabled",""),v.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function It(t){t!=null?(v[t].removeAttribute("disabled"),v[t].handle.setAttribute("tabindex","0")):(g.removeAttribute("disabled"),v.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function de(){O&&(W("update"+$.tooltips),O.forEach(function(t){t&&X(t)}),O=null)}function je(){de(),O=v.map(qt),me("update"+$.tooltips,function(t,i,s){if(!(!O||!e.tooltips)&&O[i]!==!1){var a=t[i];e.tooltips[i]!==!0&&(a=e.tooltips[i].to(s[i])),O[i].innerHTML=a}})}function Xt(){W("update"+$.aria),me("update"+$.aria,function(t,i,s,a,u){L.forEach(function(l){var h=v[l],d=ie(V,l,0,!0,!0,!0),E=ie(V,l,100,!0,!0,!0),w=u[l],P=String(e.ariaFormat.to(s[l]));d=b.fromStepping(d).toFixed(1),E=b.fromStepping(E).toFixed(1),w=b.fromStepping(w).toFixed(1),h.children[0].setAttribute("aria-valuemin",d),h.children[0].setAttribute("aria-valuemax",E),h.children[0].setAttribute("aria-valuenow",w),h.children[0].setAttribute("aria-valuetext",P)})})}function Yt(t){if(t.mode===p.PipsMode.Range||t.mode===p.PipsMode.Steps)return b.xVal;if(t.mode===p.PipsMode.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=t.values-1,s=100/i,a=[];i--;)a[i]=i*s;return a.push(100),He(a,t.stepped)}return t.mode===p.PipsMode.Positions?He(t.values,t.stepped):t.mode===p.PipsMode.Values?t.stepped?t.values.map(function(u){return b.fromStepping(b.getStep(b.toStepping(u)))}):t.values:[]}function He(t,i){return t.map(function(s){return b.fromStepping(i?b.getStep(s):s)})}function Gt(t){function i(w,P){return Number((w+P).toFixed(7))}var s=Yt(t),a={},u=b.xVal[0],l=b.xVal[b.xVal.length-1],h=!1,d=!1,E=0;return s=rt(s.slice().sort(function(w,P){return w-P})),s[0]!==u&&(s.unshift(u),h=!0),s[s.length-1]!==l&&(s.push(l),d=!0),s.forEach(function(w,P){var C,y,U,j=w,M=s[P+1],_,ye,we,Ee,Ke,xe,Ie,Xe=t.mode===p.PipsMode.Steps;for(Xe&&(C=b.xNumSteps[P]),C||(C=M-j),M===void 0&&(M=j),C=Math.max(C,1e-7),y=j;y<=M;y=i(y,C)){for(_=b.toStepping(y),ye=_-E,Ke=ye/(t.density||1),xe=Math.round(Ke),Ie=ye/xe,U=1;U<=xe;U+=1)we=E+U*Ie,a[we.toFixed(5)]=[b.fromStepping(we),0];Ee=s.indexOf(y)>-1?p.PipsType.LargeValue:Xe?p.PipsType.SmallValue:p.PipsType.NoValue,!P&&h&&y!==M&&(Ee=0),y===M&&d||(a[_.toFixed(5)]=[y,Ee]),E=_}}),a}function Jt(t,i,s){var a,u,l=Y.createElement("div"),h=(a={},a[p.PipsType.None]="",a[p.PipsType.NoValue]=e.cssClasses.valueNormal,a[p.PipsType.LargeValue]=e.cssClasses.valueLarge,a[p.PipsType.SmallValue]=e.cssClasses.valueSub,a),d=(u={},u[p.PipsType.None]="",u[p.PipsType.NoValue]=e.cssClasses.markerNormal,u[p.PipsType.LargeValue]=e.cssClasses.markerLarge,u[p.PipsType.SmallValue]=e.cssClasses.markerSub,u),E=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],w=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];R(l,e.cssClasses.pips),R(l,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function P(y,U){var j=U===e.cssClasses.value,M=j?E:w,_=j?h:d;return U+" "+M[e.ort]+" "+_[y]}function C(y,U,j){if(j=i?i(U,j):j,j!==p.PipsType.None){var M=B(l,!1);M.className=P(j,e.cssClasses.marker),M.style[e.style]=y+"%",j>p.PipsType.NoValue&&(M=B(l,!1),M.className=P(j,e.cssClasses.value),M.setAttribute("data-value",String(U)),M.style[e.style]=y+"%",M.innerHTML=String(s.to(U)))}}return Object.keys(t).forEach(function(y){C(y,t[y][0],t[y][1])}),l}function pe(){z&&(X(z),z=null)}function he(t){pe();var i=Gt(t),s=t.filter,a=t.format||{to:function(u){return String(Math.round(u))}};return z=g.appendChild(Jt(i,s,a)),z}function Le(){var t=x.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?t.width||x[i]:t.height||x[i]}function K(t,i,s,a){var u=function(h){var d=Wt(h,a.pageOffset,a.target||i);if(!d||Re()&&!a.doNotReject||nt(g,e.cssClasses.tap)&&!a.doNotReject||t===f.start&&d.buttons!==void 0&&d.buttons>1||a.hover&&d.buttons)return!1;S||d.preventDefault(),d.calcPoint=d.points[e.ort],s(d,a)},l=[];return t.split(" ").forEach(function(h){i.addEventListener(h,u,S?{passive:!0}:!1),l.push([h,u])}),l}function Wt(t,i,s){var a=t.type.indexOf("touch")===0,u=t.type.indexOf("mouse")===0,l=t.type.indexOf("pointer")===0,h=0,d=0;if(t.type.indexOf("MSPointer")===0&&(l=!0),t.type==="mousedown"&&!t.buttons&&!t.touches)return!1;if(a){var E=function(C){var y=C.target;return y===s||s.contains(y)||t.composed&&t.composedPath().shift()===s};if(t.type==="touchstart"){var w=Array.prototype.filter.call(t.touches,E);if(w.length>1)return!1;h=w[0].pageX,d=w[0].pageY}else{var P=Array.prototype.find.call(t.changedTouches,E);if(!P)return!1;h=P.pageX,d=P.pageY}}return i=i||Ve(Y),(u||l)&&(h=t.clientX+i.x,d=t.clientY+i.y),t.pageOffset=i,t.points=[h,d],t.cursor=u||l,t}function Te(t){var i=t-st(x,e.ort),s=i*100/Le();return s=Ae(s),e.dir?100-s:s}function Zt(t){var i=100,s=!1;return v.forEach(function(a,u){if(!ce(u)){var l=V[u],h=Math.abs(l-t),d=h===100&&i===100,E=h<i,w=h<=i&&t>l;(E||w||d)&&(s=u,i=h)}}),s}function Qt(t,i){t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null&&ve(t,i)}function er(t,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&i.buttonsProperty!==0)return ve(t,i);var s=(e.dir?-1:1)*(t.calcPoint-i.startCalcPoint),a=s*100/i.baseSize;ze(s>0,a,i.locations,i.handleNumbers,i.connect)}function ve(t,i){i.handle&&(ee(i.handle,e.cssClasses.active),fe-=1),i.listeners.forEach(function(s){te.removeEventListener(s[0],s[1])}),fe===0&&(ee(g,e.cssClasses.drag),be(),t.cursor&&(re.style.cursor="",re.removeEventListener("selectstart",Pe))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(s){I(s,V[s],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(s){D("update",s)})),i.handleNumbers.forEach(function(s){D("change",s),D("set",s),D("end",s)})}function ge(t,i){if(!i.handleNumbers.some(ce)){var s;if(i.handleNumbers.length===1){var a=v[i.handleNumbers[0]];s=a.children[0],fe+=1,R(s,e.cssClasses.active)}t.stopPropagation();var u=[],l=K(f.move,te,er,{target:t.target,handle:s,connect:i.connect,listeners:u,startCalcPoint:t.calcPoint,baseSize:Le(),pageOffset:t.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:t.buttons,locations:V.slice()}),h=K(f.end,te,ve,{target:t.target,handle:s,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers}),d=K("mouseout",te,Qt,{target:t.target,handle:s,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers});u.push.apply(u,l.concat(h,d)),t.cursor&&(re.style.cursor=getComputedStyle(t.target).cursor,v.length>1&&R(g,e.cssClasses.drag),re.addEventListener("selectstart",Pe,!1)),i.handleNumbers.forEach(function(E){D("start",E)})}}function tr(t){t.stopPropagation();var i=Te(t.calcPoint),s=Zt(i);s!==!1&&(e.events.snap||Ce(g,e.cssClasses.tap,e.animationDuration),I(s,i,!0,!0),be(),D("slide",s,!0),D("update",s,!0),e.events.snap?ge(t,{handleNumbers:[s]}):(D("change",s,!0),D("set",s,!0)))}function rr(t){var i=Te(t.calcPoint),s=b.getStep(i),a=b.fromStepping(s);Object.keys(N).forEach(function(u){u.split(".")[0]==="hover"&&N[u].forEach(function(l){l.call(ae,a)})})}function ir(t,i){if(Re()||ce(i))return!1;var s=["Left","Right"],a=["Down","Up"],u=["PageDown","PageUp"],l=["Home","End"];e.dir&&!e.ort?s.reverse():e.ort&&!e.dir&&(a.reverse(),u.reverse());var h=t.key.replace("Arrow",""),d=h===u[0],E=h===u[1],w=h===a[0]||h===s[0]||d,P=h===a[1]||h===s[1]||E,C=h===l[0],y=h===l[1];if(!w&&!P&&!C&&!y)return!0;t.preventDefault();var U;if(P||w){var j=w?0:1,M=qe(i),_=M[j];if(_===null)return!1;_===!1&&(_=b.getDefaultStep(V[i],w,e.keyboardDefaultStep)),E||d?_*=e.keyboardPageMultiplier:_*=e.keyboardMultiplier,_=Math.max(_,1e-7),_=(w?-1:1)*_,U=F[i]+_}else y?U=e.spectrum.xVal[e.spectrum.xVal.length-1]:U=e.spectrum.xVal[0];return I(i,b.toStepping(U),!0,!0),D("slide",i),D("update",i),D("change",i),D("set",i),!1}function sr(t){t.fixed||v.forEach(function(i,s){K(f.start,i.children[0],ge,{handleNumbers:[s]})}),t.tap&&K(f.start,x,tr,{}),t.hover&&K(f.move,x,rr,{hover:!0}),t.drag&&H.forEach(function(i,s){if(!(i===!1||s===0||s===H.length-1)){var a=v[s-1],u=v[s],l=[i],h=[a,u],d=[s-1,s];R(i,e.cssClasses.draggable),t.fixed&&(l.push(a.children[0]),l.push(u.children[0])),t.dragAll&&(h=v,d=L),l.forEach(function(E){K(f.start,E,ge,{handles:h,handleNumbers:d,connect:i})})}})}function me(t,i){N[t]=N[t]||[],N[t].push(i),t.split(".")[0]==="update"&&v.forEach(function(s,a){D("update",a)})}function ar(t){return t===$.aria||t===$.tooltips}function W(t){var i=t&&t.split(".")[0],s=i?t.substring(i.length):t;Object.keys(N).forEach(function(a){var u=a.split(".")[0],l=a.substring(u.length);(!i||i===u)&&(!s||s===l)&&(!ar(l)||s===l)&&delete N[a]})}function D(t,i,s){Object.keys(N).forEach(function(a){var u=a.split(".")[0];t===u&&N[a].forEach(function(l){l.call(ae,F.map(e.format.to),i,F.slice(),s||!1,V.slice(),ae)})})}function ie(t,i,s,a,u,l,h){var d;return v.length>1&&!e.events.unconstrained&&(a&&i>0&&(d=b.getAbsoluteDistance(t[i-1],e.margin,!1),s=Math.max(s,d)),u&&i<v.length-1&&(d=b.getAbsoluteDistance(t[i+1],e.margin,!0),s=Math.min(s,d))),v.length>1&&e.limit&&(a&&i>0&&(d=b.getAbsoluteDistance(t[i-1],e.limit,!1),s=Math.min(s,d)),u&&i<v.length-1&&(d=b.getAbsoluteDistance(t[i+1],e.limit,!0),s=Math.max(s,d))),e.padding&&(i===0&&(d=b.getAbsoluteDistance(0,e.padding[0],!1),s=Math.max(s,d)),i===v.length-1&&(d=b.getAbsoluteDistance(100,e.padding[1],!0),s=Math.min(s,d))),h||(s=b.getStep(s)),s=Ae(s),s===t[i]&&!l?!1:s}function Se(t,i){var s=e.ort;return(s?i:t)+", "+(s?t:i)}function ze(t,i,s,a,u){var l=s.slice(),h=a[0],d=e.events.smoothSteps,E=[!t,t],w=[t,!t];a=a.slice(),t&&a.reverse(),a.length>1?a.forEach(function(C,y){var U=ie(l,C,l[C]+i,E[y],w[y],!1,d);U===!1?i=0:(i=U-l[C],l[C]=U)}):E=w=[!0];var P=!1;a.forEach(function(C,y){P=I(C,s[C]+i,E[y],w[y],!1,d)||P}),P&&(a.forEach(function(C){D("update",C),D("slide",C)}),u!=null&&D("drag",h))}function Fe(t,i){return e.dir?100-t-i:t}function nr(t,i){V[t]=i,F[t]=b.fromStepping(i);var s=Fe(i,0)-Ft,a="translate("+Se(s+"%","0")+")";v[t].style[e.transformRule]=a,Ne(t),Ne(t+1)}function be(){L.forEach(function(t){var i=V[t]>50?-1:1,s=3+(v.length+i*t);v[t].style.zIndex=String(s)})}function I(t,i,s,a,u,l){return u||(i=ie(V,t,i,s,a,!1,l)),i===!1?!1:(nr(t,i),!0)}function Ne(t){if(H[t]){var i=0,s=100;t!==0&&(i=V[t-1]),t!==H.length-1&&(s=V[t]);var a=s-i,u="translate("+Se(Fe(i,a)+"%","0")+")",l="scale("+Se(a/100,"1")+")";H[t].style[e.transformRule]=u+" "+l}}function Be(t,i){return t===null||t===!1||t===void 0||(typeof t=="number"&&(t=String(t)),t=e.format.from(t),t!==!1&&(t=b.toStepping(t)),t===!1||isNaN(t))?V[i]:t}function se(t,i,s){var a=Q(t),u=V[0]===void 0;i=i===void 0?!0:i,e.animate&&!u&&Ce(g,e.cssClasses.tap,e.animationDuration),L.forEach(function(d){I(d,Be(a[d],d),!0,!1,s)});var l=L.length===1?0:1;if(u&&b.hasNoSize()&&(s=!0,V[0]=0,L.length>1)){var h=100/(L.length-1);L.forEach(function(d){V[d]=d*h})}for(;l<L.length;++l)L.forEach(function(d){I(d,V[d],!0,!0,s)});be(),L.forEach(function(d){D("update",d),a[d]!==null&&i&&D("set",d)})}function or(t){se(e.start,t)}function lr(t,i,s,a){if(t=Number(t),!(t>=0&&t<L.length))throw new Error("noUiSlider: invalid handle number, got: "+t);I(t,Be(i,t),!0,!0,a),D("update",t),s&&D("set",t)}function $e(t){if(t===void 0&&(t=!1),t)return F.length===1?F[0]:F.slice(0);var i=F.map(e.format.to);return i.length===1?i[0]:i}function ur(){for(W($.aria),W($.tooltips),Object.keys(e.cssClasses).forEach(function(t){ee(g,e.cssClasses[t])});g.firstChild;)g.removeChild(g.firstChild);delete g.noUiSlider}function qe(t){var i=V[t],s=b.getNearbySteps(i),a=F[t],u=s.thisStep.step,l=null;if(e.snap)return[a-s.stepBefore.startValue||null,s.stepAfter.startValue-a||null];u!==!1&&a+u>s.stepAfter.startValue&&(u=s.stepAfter.startValue-a),a>s.thisStep.startValue?l=s.thisStep.step:s.stepBefore.step===!1?l=!1:l=a-s.stepBefore.highestStep,i===100?u=null:i===0&&(l=null);var h=b.countStepDecimals();return u!==null&&u!==!1&&(u=Number(u.toFixed(h))),l!==null&&l!==!1&&(l=Number(l.toFixed(h))),[l,u]}function fr(){return L.map(qe)}function cr(t,i){var s=$e(),a=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];a.forEach(function(l){t[l]!==void 0&&(o[l]=t[l])});var u=Oe(o);a.forEach(function(l){t[l]!==void 0&&(e[l]=u[l])}),b=u.spectrum,e.margin=u.margin,e.limit=u.limit,e.padding=u.padding,e.pips?he(e.pips):pe(),e.tooltips?je():de(),V=[],se(ne(t.start)?t.start:s,i)}function dr(){x=$t(g),Bt(e.connect,x),sr(e.events),se(e.start),e.pips&&he(e.pips),e.tooltips&&je(),Xt()}dr();var ae={destroy:ur,steps:fr,on:me,off:W,get:$e,set:se,setHandle:lr,reset:or,disable:Kt,enable:It,__moveHandles:function(t,i,s){ze(t,i,V,s)},options:o,updateOptions:cr,target:g,removePips:pe,removeTooltips:de,getPositions:function(){return V.slice()},getTooltips:function(){return O},getOrigins:function(){return v},pips:he};return ae}function Me(r,e){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var o=Oe(e),f=Tt(r,o,e);return r.noUiSlider=f,f}var zt={__spectrum:ke,cssClasses:ue,create:Me};p.create=Me,p.cssClasses=ue,p.default=zt,Object.defineProperty(p,"__esModule",{value:!0})})})(Ge,Z);const Je=Ye(Z),We=(n,m)=>{const p=n.__vccOpts||n;for(const[A,k]of m)p[A]=k;return p},Ze={props:{id:{type:String,default:()=>"slider-"+(Math.random()+1).toString(36).substring(7)},values:{type:[Array,Number],default:0},start:{type:[Array,Number],required:!0,validator(n){return typeof n=="object"?n.length&&n.every(m=>typeof m=="number"):!0}},connect:{type:[Array,Boolean,String],default:!1,validator(n){return typeof n=="object"?n.length&&n.every(m=>typeof m=="boolean"):!0}},range:{type:Object,required:!0},step:{type:Number},margin:{type:Number},padding:{type:[Array,Number],validator(n){return typeof n=="object"?n.length&&n.every(m=>typeof m=="number"):!0},default:0},limit:{type:Number},direction:{type:String,default:"ltr"},orientation:{type:String,default:"horizontal"},animate:{type:Boolean,default:!1},handleAttributes:{type:Array},keyboardSupport:{type:Boolean,default:!0},keyboardDefaultStep:{type:Number,default:10},keyboardPageMultiplier:{type:Number,default:5},keyboardMultiplier:{type:Number,default:1},behaviour:{type:String,default:"tap"},tooltips:{type:[Array,Object,Boolean],default:!1},format:{type:Object},pips:{type:Object},pipsys:{},snap:{type:Boolean},ariaFormat:{type:Object},modelValue:{type:[Number,Array,String]},cssPrefix:{type:String},cssClasses:{type:Object},animationDuration:{type:Number},disable:{type:Boolean,default:!1}},data(){return{currentValues:null,events:[]}},mounted(){this.create(),this.startBasicEvents()},beforeUnmount(){this.destroy()},methods:{getReference(){return this.$refs[this.id]},create(){let n={start:this.start,connect:this.connect,range:this.range,step:this.step,margin:this.margin,padding:this.padding,limit:this.limit,direction:this.direction,orientation:this.orientation,animate:this.animate,handleAttributes:this.handleAttributes,keyboardSupport:this.keyboardSupport,keyboardDefaultStep:this.keyboardDefaultStep,keyboardPageMultiplier:this.keyboardPageMultiplier,keyboardMultiplier:this.keyboardMultiplier,behaviour:this.behaviour,tooltips:this.tooltips,pips:this.pips,snap:this.snap,cssPrefix:this.cssPrefix,cssClasses:this.cssClasses,animationDuration:this.animationDuration};this.ariaFormat&&(n.ariaFormat=this.ariaFormat),this.format&&(n.format=this.format),this.pipsys!=null&&!n.pips&&(n.pips={mode:"range"}),Je.create(this.getReference(),n)},startBasicEvents(){this.startUpdate(),this.startStart(),this.startSlide(),this.startDrag(),this.startChange(),this.startSet(),this.startEnd()},offAllEvents(){let n=this.events.length;for(let m=0;m<n;m++)this.off(this.events.pop())},startUpdate(){this.on("update",(n,m,p,A,k)=>{this.$emit("update",{values:n,handle:m,unencoded:p,tap:A,positions:k});let X=n.length>1?n:n[0];this.currentValues=X,this.$emit("update:modelValue",X)})},startStart(){this.on("start",(n,m,p,A,k)=>{this.$emit("start",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},startSlide(){this.on("slide",(n,m,p,A,k)=>{this.$emit("slide",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},startDrag(){this.on("drag",(n,m,p,A,k)=>{this.$emit("drag",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},startChange(){this.on("change",(n,m,p,A,k)=>{this.$emit("change",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},startSet(){this.on("set",(n,m,p,A,k)=>{this.$emit("set",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},startEnd(){this.on("end",(n,m,p,A,k)=>{this.$emit("end",{values:n,handle:m,unencoded:p,tap:A,positions:k})})},compareValues(n,m){return n=JSON.stringify(n),m=JSON.stringify(m),n==m},destroy(){this.offAllEvents(),this.getReference().noUiSlider.destroy()},getSteps(){return this.getReference().noUiSlider.steps()},on(n,m){this.events.push(n),this.getReference().noUiSlider.on(n,m)},off(n){this.getReference().noUiSlider.off(n)},get(n){return this.getReference().noUiSlider.get(n)},set(n,m,p){this.getReference().noUiSlider.set(n,m,p)},setHandle(n,m,p,A){this.getReference().noUiSlider.setHandle(n,m,p,A)},reset(n){this.getReference().noUiSlider.reset(n)},setDisable(n){this.getReference().noUiSlider.disable(n)},setEnable(n){this.getReference().noUiSlider.enable(n)},updateOptions(n,m){this.getReference().noUiSlider.updateOptions(n,m)},removePips(){this.getReference().noUiSlider.removePips()},removeTooltips(){this.getReference().noUiSlider.removeTooltips()},getPositions(){return this.getReference().noUiSlider.getPositions()},getTooltips(){return this.getReference().noUiSlider.getTooltips()},getOrigins(){return this.getReference().noUiSlider.getOrigins()},setPips(n){return this.getReference().noUiSlider.pips(n)}},watch:{currentValues(n){this.compareValues(n,this.get())||this.set(n,!1)},modelValue:{handler(n){this.compareValues(n,this.get())||this.set(n,!1)},deep:!0},pips:{handler(n){this.removePips(),this.$nextTick(()=>this.setPips(n))},deep:!0},disable(n){n?this.setDisable():this.setEnable()},step(n){this.updateOptions({step:n})},margin(n){this.updateOptions({margin:n})},padding:{handler(n){this.updateOptions({padding:n})},deep:!0},limit(n){this.updateOptions({limit:n})},tooltips(n){this.updateOptions({tooltips:n})},format:{handler(n){this.updateOptions({format:n})},deep:!0},range:{handler(n){this.updateOptions({range:n}),this.$nextTick(()=>this.reset())},deep:!0}},emits:["update","start","slide","drag","change","set","end","update:modelValue"],expose:["destroy","getSteps","on","off","get","set","setHandle","reset","setDisable","setEnable","updateOptions","removePips","removeTooltips","getPositions","getTooltips","getOrigins","setPips"]},Qe=["id"];function et(n,m,p,A,k,X){return q.openBlock(),q.createElementBlock("div",{id:p.id,ref:p.id,class:"slider-ui"},null,8,Qe)}const tt=We(Ze,[["render",et]]),pr="";return tt});
