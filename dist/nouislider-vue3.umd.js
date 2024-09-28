(function(T,j){typeof exports=="object"&&typeof module<"u"?module.exports=j(require("vue")):typeof define=="function"&&define.amd?define(["vue"],j):(T=typeof globalThis<"u"?globalThis:T||self,T.noUiSliderVue=j(T.Vue))})(this,function(T){"use strict";var j;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(j||(j={}));var M;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(M||(M={}));function Ye(t){return W(t)&&typeof t.from=="function"}function W(t){return typeof t=="object"&&typeof t.to=="function"}function we(t){t.parentElement.removeChild(t)}function se(t){return t!=null}function Ee(t){t.preventDefault()}function Je(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function We(t,e){return Math.round(t/e)*e}function Ge(t,e){var n=t.getBoundingClientRect(),o=t.ownerDocument,l=o.documentElement,d=Ae(o);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(d.x=0),e?n.top+d.y-l.clientTop:n.left+d.x-l.clientLeft}function H(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function Ce(t,e,n){n>0&&(U(t,e),setTimeout(function(){Z(t,e)},n))}function Pe(t){return Math.max(Math.min(t,100),0)}function G(t){return Array.isArray(t)?t:[t]}function Ze(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function U(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function Z(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Qe(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Ae(t){var e=window.pageXOffset!==void 0,n=(t.compatMode||"")==="CSS1Compat",o=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,l=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:o,y:l}}function et(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function tt(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function rt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function ne(t,e){return 100/(e-t)}function ae(t,e,n){return e*100/(t[n+1]-t[n])}function it(t,e){return ae(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function st(t,e){return e*(t[1]-t[0])/100+t[0]}function I(t,e){for(var n=1;t>=e[n];)n+=1;return n}function nt(t,e,n){if(n>=t.slice(-1)[0])return 100;var o=I(n,t),l=t[o-1],d=t[o],p=e[o-1],x=e[o];return p+it([l,d],n)/ne(p,x)}function at(t,e,n){if(n>=100)return t.slice(-1)[0];var o=I(n,e),l=t[o-1],d=t[o],p=e[o-1],x=e[o];return st([l,d],(n-p)*ne(p,x))}function ot(t,e,n,o){if(o===100)return o;var l=I(o,t),d=t[l-1],p=t[l];return n?o-d>(p-d)/2?p:d:e[l-1]?t[l-1]+We(o-t[l-1],e[l-1]):o}var Ve=function(){function t(e,n,o){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[o||!1],this.xNumSteps=[!1],this.snap=n;var l,d=[];for(Object.keys(e).forEach(function(p){d.push([G(e[p]),p])}),d.sort(function(p,x){return p[0][0]-x[0][0]}),l=0;l<d.length;l++)this.handleEntryPoint(d[l][1],d[l][0]);for(this.xNumSteps=this.xSteps.slice(0),l=0;l<this.xNumSteps.length;l++)this.handleStepPoint(l,this.xNumSteps[l])}return t.prototype.getDistance=function(e){for(var n=[],o=0;o<this.xNumSteps.length-1;o++)n[o]=ae(this.xVal,e,o);return n},t.prototype.getAbsoluteDistance=function(e,n,o){var l=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[l+1];)l++;else e===this.xPct[this.xPct.length-1]&&(l=this.xPct.length-2);!o&&e===this.xPct[l+1]&&l++,n===null&&(n=[]);var d,p=1,x=n[l],y=0,v=0,k=0,O=0;for(o?d=(e-this.xPct[l])/(this.xPct[l+1]-this.xPct[l]):d=(this.xPct[l+1]-e)/(this.xPct[l+1]-this.xPct[l]);x>0;)y=this.xPct[l+1+O]-this.xPct[l+O],n[l+O]*p+100-d*100>100?(v=y*d,p=(x-100*d)/n[l+O],d=1):(v=n[l+O]*y/100*p,p=0),o?(k=k-v,this.xPct.length+O>=1&&O--):(k=k+v,this.xPct.length-O>=1&&O++),x=n[l+O]*p;return e+k},t.prototype.toStepping=function(e){return e=nt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return at(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=ot(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,n,o){var l=I(e,this.xPct);return(e===100||n&&e===this.xPct[l-1])&&(l=Math.max(l-1,1)),(this.xVal[l]-this.xVal[l-1])/o},t.prototype.getNearbySteps=function(e){var n=I(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Ze);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,n){var o;if(e==="min"?o=0:e==="max"?o=100:o=parseFloat(e),!H(o)||!H(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(o),this.xVal.push(n[0]);var l=Number(n[1]);o?this.xSteps.push(isNaN(l)?!1:l):isNaN(l)||(this.xSteps[0]=l),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=ae([this.xVal[e],this.xVal[e+1]],n,0)/ne(this.xPct[e],this.xPct[e+1]);var o=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],l=Math.ceil(Number(o.toFixed(3))-1),d=this.xVal[e]+this.xNumSteps[e]*l;this.xHighestCompleteStep[e]=d}},t}(),ke={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},De={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},N={tooltips:".__tooltips",aria:".__aria"};function lt(t,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function ut(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function ft(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function ct(t,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function ht(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Ve(e,t.snap||!1,t.singleStep)}function dt(t,e){if(e=G(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function pt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function vt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function mt(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function Ue(t,e){var n=[!1],o;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(o=1;o<t.handles;o++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function gt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Oe(t,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function St(t,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function bt(t,e){var n;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var o=e[0]+e[1],l=t.spectrum.xVal[0],d=t.spectrum.xVal[t.spectrum.xVal.length-1];if(o/(d-l)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function xt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function yt(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,o=e.indexOf("drag")>=0,l=e.indexOf("fixed")>=0,d=e.indexOf("snap")>=0,p=e.indexOf("hover")>=0,x=e.indexOf("unconstrained")>=0,y=e.indexOf("invert-connects")>=0,v=e.indexOf("drag-all")>=0,k=e.indexOf("smooth-steps")>=0;if(l){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Oe(t,t.start[1]-t.start[0])}if(y&&t.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(x&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||d,drag:o,dragAll:v,smoothSteps:k,fixed:l,snap:d,hover:p,unconstrained:x,invertConnects:y}}function wt(t,e){if(e!==!1)if(e===!0||W(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=G(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(o){if(typeof o!="boolean"&&!W(o))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function Et(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function Ct(t,e){if(!W(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function Pt(t,e){if(!Ye(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function At(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function Vt(t,e){t.documentElement=e}function kt(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function Dt(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(n){t.cssClasses[n]=t.cssPrefix+e[n]})):t.cssClasses=e}function _e(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:ke,format:ke},n={step:{r:!1,t:lt},keyboardPageMultiplier:{r:!1,t:ut},keyboardMultiplier:{r:!1,t:ft},keyboardDefaultStep:{r:!1,t:ct},start:{r:!0,t:dt},connect:{r:!0,t:Ue},direction:{r:!0,t:xt},snap:{r:!1,t:pt},animate:{r:!1,t:vt},animationDuration:{r:!1,t:mt},range:{r:!0,t:ht},orientation:{r:!1,t:gt},margin:{r:!1,t:Oe},limit:{r:!1,t:St},padding:{r:!1,t:bt},behaviour:{r:!0,t:yt},ariaFormat:{r:!1,t:Ct},format:{r:!1,t:Pt},tooltips:{r:!1,t:wt},keyboardSupport:{r:!0,t:At},documentElement:{r:!1,t:Vt},cssPrefix:{r:!0,t:kt},cssClasses:{r:!0,t:Dt},handleAttributes:{r:!1,t:Et}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:De,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(y){if(!se(t[y])&&o[y]===void 0){if(n[y].r)throw new Error("noUiSlider: '"+y+"' is required.");return}n[y].t(e,se(t[y])?t[y]:o[y])}),e.pips=t.pips;var l=document.createElement("div"),d=l.style.msTransform!==void 0,p=l.style.transform!==void 0;e.transformRule=p?"transform":d?"msTransform":"webkitTransform";var x=[["left","top"],["right","bottom"]];return e.style=x[e.dir][e.ort],e}function Ut(t,e,n){var o=et(),l=rt(),d=l&&tt(),p=t,x,y,v,k,O,B,m=e.spectrum,L=[],w=[],R=[],oe=0,z={},X=!1,K=t.ownerDocument,Q=e.documentElement||K.documentElement,ee=K.body,zt=K.dir==="rtl"||e.ort===1?0:100;function F(r,i){var s=K.createElement("div");return i&&U(s,i),r.appendChild(s),s}function Ft(r,i){var s=F(r,e.cssClasses.origin),a=F(s,e.cssClasses.handle);if(F(a,e.cssClasses.touchArea),a.setAttribute("data-handle",String(i)),e.keyboardSupport&&(a.setAttribute("tabindex","0"),a.addEventListener("keydown",function(f){return tr(f,i)})),e.handleAttributes!==void 0){var u=e.handleAttributes[i];Object.keys(u).forEach(function(f){a.setAttribute(f,u[f])})}return a.setAttribute("role","slider"),a.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?U(a,e.cssClasses.handleLower):i===e.handles-1&&U(a,e.cssClasses.handleUpper),s.handle=a,s}function le(r,i){return i?F(r,e.cssClasses.connect):!1}function Nt(r,i){y=F(i,e.cssClasses.connects),v=[],k=[],k.push(le(y,r[0]));for(var s=0;s<e.handles;s++)v.push(Ft(i,s)),R[s]=s,k.push(le(y,r[s+1]))}function Bt(r){U(r,e.cssClasses.target),e.dir===0?U(r,e.cssClasses.ltr):U(r,e.cssClasses.rtl),e.ort===0?U(r,e.cssClasses.horizontal):U(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?U(r,e.cssClasses.textDirectionRtl):U(r,e.cssClasses.textDirectionLtr),F(r,e.cssClasses.base)}function Tt(r,i){return!e.tooltips||!e.tooltips[i]?!1:F(r.firstChild,e.cssClasses.tooltip)}function Me(){return p.hasAttribute("disabled")}function ue(r){var i=v[r];return i.hasAttribute("disabled")}function $t(r){r!=null?(v[r].setAttribute("disabled",""),v[r].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),v.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function qt(r){r!=null?(v[r].removeAttribute("disabled"),v[r].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),v.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function fe(){B&&(Y("update"+N.tooltips),B.forEach(function(r){r&&we(r)}),B=null)}function Re(){fe(),B=v.map(Tt),ve("update"+N.tooltips,function(r,i,s){if(!(!B||!e.tooltips)&&B[i]!==!1){var a=r[i];e.tooltips[i]!==!0&&(a=e.tooltips[i].to(s[i])),B[i].innerHTML=a}})}function Kt(){Y("update"+N.aria),ve("update"+N.aria,function(r,i,s,a,u){R.forEach(function(f){var h=v[f],c=te(w,f,0,!0,!0,!0),S=te(w,f,100,!0,!0,!0),b=u[f],E=String(e.ariaFormat.to(s[f]));c=m.fromStepping(c).toFixed(1),S=m.fromStepping(S).toFixed(1),b=m.fromStepping(b).toFixed(1),h.children[0].setAttribute("aria-valuemin",c),h.children[0].setAttribute("aria-valuemax",S),h.children[0].setAttribute("aria-valuenow",b),h.children[0].setAttribute("aria-valuetext",E)})})}function It(r){if(r.mode===j.Range||r.mode===j.Steps)return m.xVal;if(r.mode===j.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,s=100/i,a=[];i--;)a[i]=i*s;return a.push(100),je(a,r.stepped)}return r.mode===j.Positions?je(r.values,r.stepped):r.mode===j.Values?r.stepped?r.values.map(function(u){return m.fromStepping(m.getStep(m.toStepping(u)))}):r.values:[]}function je(r,i){return r.map(function(s){return m.fromStepping(i?m.getStep(s):s)})}function Xt(r){function i(b,E){return Number((b+E).toFixed(7))}var s=It(r),a={},u=m.xVal[0],f=m.xVal[m.xVal.length-1],h=!1,c=!1,S=0;return s=Je(s.slice().sort(function(b,E){return b-E})),s[0]!==u&&(s.unshift(u),h=!0),s[s.length-1]!==f&&(s.push(f),c=!0),s.forEach(function(b,E){var C,g,A,_=b,V=s[E+1],D,Se,be,xe,Ke,ye,Ie,Xe=r.mode===j.Steps;for(Xe&&(C=m.xNumSteps[E]),C||(C=V-_),V===void 0&&(V=_),C=Math.max(C,1e-7),g=_;g<=V;g=i(g,C)){for(D=m.toStepping(g),Se=D-S,Ke=Se/(r.density||1),ye=Math.round(Ke),Ie=Se/ye,A=1;A<=ye;A+=1)be=S+A*Ie,a[be.toFixed(5)]=[m.fromStepping(be),0];xe=s.indexOf(g)>-1?M.LargeValue:Xe?M.SmallValue:M.NoValue,!E&&h&&g!==V&&(xe=0),g===V&&c||(a[D.toFixed(5)]=[g,xe]),S=D}}),a}function Yt(r,i,s){var a,u,f=K.createElement("div"),h=(a={},a[M.None]="",a[M.NoValue]=e.cssClasses.valueNormal,a[M.LargeValue]=e.cssClasses.valueLarge,a[M.SmallValue]=e.cssClasses.valueSub,a),c=(u={},u[M.None]="",u[M.NoValue]=e.cssClasses.markerNormal,u[M.LargeValue]=e.cssClasses.markerLarge,u[M.SmallValue]=e.cssClasses.markerSub,u),S=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],b=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];U(f,e.cssClasses.pips),U(f,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(g,A){var _=A===e.cssClasses.value,V=_?S:b,D=_?h:c;return A+" "+V[e.ort]+" "+D[g]}function C(g,A,_){if(_=i?i(A,_):_,_!==M.None){var V=F(f,!1);V.className=E(_,e.cssClasses.marker),V.style[e.style]=g+"%",_>M.NoValue&&(V=F(f,!1),V.className=E(_,e.cssClasses.value),V.setAttribute("data-value",String(A)),V.style[e.style]=g+"%",V.innerHTML=String(s.to(A)))}}return Object.keys(r).forEach(function(g){C(g,r[g][0],r[g][1])}),f}function ce(){O&&(we(O),O=null)}function he(r){ce();var i=Xt(r),s=r.filter,a=r.format||{to:function(u){return String(Math.round(u))}};return O=p.appendChild(Yt(i,s,a)),O}function He(){var r=x.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||x[i]:r.height||x[i]}function $(r,i,s,a){var u=function(h){var c=Jt(h,a.pageOffset,a.target||i);if(!c||Me()&&!a.doNotReject||Qe(p,e.cssClasses.tap)&&!a.doNotReject||r===o.start&&c.buttons!==void 0&&c.buttons>1||a.hover&&c.buttons)return!1;d||c.preventDefault(),c.calcPoint=c.points[e.ort],s(c,a)},f=[];return r.split(" ").forEach(function(h){i.addEventListener(h,u,d?{passive:!0}:!1),f.push([h,u])}),f}function Jt(r,i,s){var a=r.type.indexOf("touch")===0,u=r.type.indexOf("mouse")===0,f=r.type.indexOf("pointer")===0,h=0,c=0;if(r.type.indexOf("MSPointer")===0&&(f=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(a){var S=function(C){var g=C.target;return g===s||s.contains(g)||r.composed&&r.composedPath().shift()===s};if(r.type==="touchstart"){var b=Array.prototype.filter.call(r.touches,S);if(b.length>1)return!1;h=b[0].pageX,c=b[0].pageY}else{var E=Array.prototype.find.call(r.changedTouches,S);if(!E)return!1;h=E.pageX,c=E.pageY}}return i=i||Ae(K),(u||f)&&(h=r.clientX+i.x,c=r.clientY+i.y),r.pageOffset=i,r.points=[h,c],r.cursor=u||f,r}function Le(r){var i=r-Ge(x,e.ort),s=i*100/He();return s=Pe(s),e.dir?100-s:s}function Wt(r){var i=100,s=!1;return v.forEach(function(a,u){if(!ue(u)){var f=w[u],h=Math.abs(f-r),c=h===100&&i===100,S=h<i,b=h<=i&&r>f;(S||b||c)&&(s=u,i=h)}}),s}function Gt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&de(r,i)}function Zt(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return de(r,i);var s=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),a=s*100/i.baseSize;Fe(s>0,a,i.locations,i.handleNumbers,i.connect)}function de(r,i){i.handle&&(Z(i.handle,e.cssClasses.active),oe-=1),i.listeners.forEach(function(s){Q.removeEventListener(s[0],s[1])}),oe===0&&(Z(p,e.cssClasses.drag),ge(),r.cursor&&(ee.style.cursor="",ee.removeEventListener("selectstart",Ee))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(s){q(s,w[s],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(s){P("update",s)})),i.handleNumbers.forEach(function(s){P("change",s),P("set",s),P("end",s)})}function pe(r,i){if(!i.handleNumbers.some(ue)){var s;if(i.handleNumbers.length===1){var a=v[i.handleNumbers[0]];s=a.children[0],oe+=1,U(s,e.cssClasses.active)}r.stopPropagation();var u=[],f=$(o.move,Q,Zt,{target:r.target,handle:s,connect:i.connect,listeners:u,startCalcPoint:r.calcPoint,baseSize:He(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:w.slice()}),h=$(o.end,Q,de,{target:r.target,handle:s,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers}),c=$("mouseout",Q,Gt,{target:r.target,handle:s,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers});u.push.apply(u,f.concat(h,c)),r.cursor&&(ee.style.cursor=getComputedStyle(r.target).cursor,v.length>1&&U(p,e.cssClasses.drag),ee.addEventListener("selectstart",Ee,!1)),i.handleNumbers.forEach(function(S){P("start",S)})}}function Qt(r){r.stopPropagation();var i=Le(r.calcPoint),s=Wt(i);s!==!1&&(e.events.snap||Ce(p,e.cssClasses.tap,e.animationDuration),q(s,i,!0,!0),ge(),P("slide",s,!0),P("update",s,!0),e.events.snap?pe(r,{handleNumbers:[s]}):(P("change",s,!0),P("set",s,!0)))}function er(r){var i=Le(r.calcPoint),s=m.getStep(i),a=m.fromStepping(s);Object.keys(z).forEach(function(u){u.split(".")[0]==="hover"&&z[u].forEach(function(f){f.call(ie,a)})})}function tr(r,i){if(Me()||ue(i))return!1;var s=["Left","Right"],a=["Down","Up"],u=["PageDown","PageUp"],f=["Home","End"];e.dir&&!e.ort?s.reverse():e.ort&&!e.dir&&(a.reverse(),u.reverse());var h=r.key.replace("Arrow",""),c=h===u[0],S=h===u[1],b=h===a[0]||h===s[0]||c,E=h===a[1]||h===s[1]||S,C=h===f[0],g=h===f[1];if(!b&&!E&&!C&&!g)return!0;r.preventDefault();var A;if(E||b){var _=b?0:1,V=$e(i),D=V[_];if(D===null)return!1;D===!1&&(D=m.getDefaultStep(w[i],b,e.keyboardDefaultStep)),S||c?D*=e.keyboardPageMultiplier:D*=e.keyboardMultiplier,D=Math.max(D,1e-7),D=(b?-1:1)*D,A=L[i]+D}else g?A=e.spectrum.xVal[e.spectrum.xVal.length-1]:A=e.spectrum.xVal[0];return q(i,m.toStepping(A),!0,!0),P("slide",i),P("update",i),P("change",i),P("set",i),!1}function ze(r){r.fixed||v.forEach(function(i,s){$(o.start,i.children[0],pe,{handleNumbers:[s]})}),r.tap&&$(o.start,x,Qt,{}),r.hover&&$(o.move,x,er,{hover:!0}),r.drag&&k.forEach(function(i,s){if(!(i===!1||s===0||s===k.length-1)){var a=v[s-1],u=v[s],f=[i],h=[a,u],c=[s-1,s];U(i,e.cssClasses.draggable),r.fixed&&(f.push(a.children[0]),f.push(u.children[0])),r.dragAll&&(h=v,c=R),f.forEach(function(S){$(o.start,S,pe,{handles:h,handleNumbers:c,connect:i})})}})}function ve(r,i){z[r]=z[r]||[],z[r].push(i),r.split(".")[0]==="update"&&v.forEach(function(s,a){P("update",a)})}function rr(r){return r===N.aria||r===N.tooltips}function Y(r){var i=r&&r.split(".")[0],s=i?r.substring(i.length):r;Object.keys(z).forEach(function(a){var u=a.split(".")[0],f=a.substring(u.length);(!i||i===u)&&(!s||s===f)&&(!rr(f)||s===f)&&delete z[a]})}function P(r,i,s){Object.keys(z).forEach(function(a){var u=a.split(".")[0];r===u&&z[a].forEach(function(f){f.call(ie,L.map(e.format.to),i,L.slice(),s||!1,w.slice(),ie)})})}function te(r,i,s,a,u,f,h){var c;return v.length>1&&!e.events.unconstrained&&(a&&i>0&&(c=m.getAbsoluteDistance(r[i-1],e.margin,!1),s=Math.max(s,c)),u&&i<v.length-1&&(c=m.getAbsoluteDistance(r[i+1],e.margin,!0),s=Math.min(s,c))),v.length>1&&e.limit&&(a&&i>0&&(c=m.getAbsoluteDistance(r[i-1],e.limit,!1),s=Math.min(s,c)),u&&i<v.length-1&&(c=m.getAbsoluteDistance(r[i+1],e.limit,!0),s=Math.max(s,c))),e.padding&&(i===0&&(c=m.getAbsoluteDistance(0,e.padding[0],!1),s=Math.max(s,c)),i===v.length-1&&(c=m.getAbsoluteDistance(100,e.padding[1],!0),s=Math.min(s,c))),h||(s=m.getStep(s)),s=Pe(s),s===r[i]&&!f?!1:s}function me(r,i){var s=e.ort;return(s?i:r)+", "+(s?r:i)}function Fe(r,i,s,a,u){var f=s.slice(),h=a[0],c=e.events.smoothSteps,S=[!r,r],b=[r,!r];a=a.slice(),r&&a.reverse(),a.length>1?a.forEach(function(C,g){var A=te(f,C,f[C]+i,S[g],b[g],!1,c);A===!1?i=0:(i=A-f[C],f[C]=A)}):S=b=[!0];var E=!1;a.forEach(function(C,g){E=q(C,s[C]+i,S[g],b[g],!1,c)||E}),E&&(a.forEach(function(C){P("update",C),P("slide",C)}),u!=null&&P("drag",h))}function Ne(r,i){return e.dir?100-r-i:r}function ir(r,i){w[r]=i,L[r]=m.fromStepping(i);var s=Ne(i,0)-zt,a="translate("+me(s+"%","0")+")";if(v[r].style[e.transformRule]=a,e.events.invertConnects&&w.length>1){var u=w.every(function(f,h,c){return h===0||f>=c[h-1]});if(X!==!u){ur();return}}J(r),J(r+1),X&&(J(r-1),J(r+2))}function ge(){R.forEach(function(r){var i=w[r]>50?-1:1,s=3+(v.length+i*r);v[r].style.zIndex=String(s)})}function q(r,i,s,a,u,f){return u||(i=te(w,r,i,s,a,!1,f)),i===!1?!1:(ir(r,i),!0)}function J(r){if(k[r]){var i=w.slice();X&&i.sort(function(c,S){return c-S});var s=0,a=100;r!==0&&(s=i[r-1]),r!==k.length-1&&(a=i[r]);var u=a-s,f="translate("+me(Ne(s,u)+"%","0")+")",h="scale("+me(u/100,"1")+")";k[r].style[e.transformRule]=f+" "+h}}function Be(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=m.toStepping(r)),r===!1||isNaN(r))?w[i]:r}function re(r,i,s){var a=G(r),u=w[0]===void 0;i=i===void 0?!0:i,e.animate&&!u&&Ce(p,e.cssClasses.tap,e.animationDuration),R.forEach(function(c){q(c,Be(a[c],c),!0,!1,s)});var f=R.length===1?0:1;if(u&&m.hasNoSize()&&(s=!0,w[0]=0,R.length>1)){var h=100/(R.length-1);R.forEach(function(c){w[c]=c*h})}for(;f<R.length;++f)R.forEach(function(c){q(c,w[c],!0,!0,s)});ge(),R.forEach(function(c){P("update",c),a[c]!==null&&i&&P("set",c)})}function sr(r){re(e.start,r)}function nr(r,i,s,a){if(r=Number(r),!(r>=0&&r<R.length))throw new Error("noUiSlider: invalid handle number, got: "+r);q(r,Be(i,r),!0,!0,a),P("update",r),s&&P("set",r)}function Te(r){if(r===void 0&&(r=!1),r)return L.length===1?L[0]:L.slice(0);var i=L.map(e.format.to);return i.length===1?i[0]:i}function ar(){for(Y(N.aria),Y(N.tooltips),Object.keys(e.cssClasses).forEach(function(r){Z(p,e.cssClasses[r])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function $e(r){var i=w[r],s=m.getNearbySteps(i),a=L[r],u=s.thisStep.step,f=null;if(e.snap)return[a-s.stepBefore.startValue||null,s.stepAfter.startValue-a||null];u!==!1&&a+u>s.stepAfter.startValue&&(u=s.stepAfter.startValue-a),a>s.thisStep.startValue?f=s.thisStep.step:s.stepBefore.step===!1?f=!1:f=a-s.stepBefore.highestStep,i===100?u=null:i===0&&(f=null);var h=m.countStepDecimals();return u!==null&&u!==!1&&(u=Number(u.toFixed(h))),f!==null&&f!==!1&&(f=Number(f.toFixed(h))),[f,u]}function or(){return R.map($e)}function lr(r,i){var s=Te(),a=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];a.forEach(function(f){r[f]!==void 0&&(n[f]=r[f])});var u=_e(n);a.forEach(function(f){r[f]!==void 0&&(e[f]=u[f])}),m=u.spectrum,e.margin=u.margin,e.limit=u.limit,e.padding=u.padding,e.pips?he(e.pips):ce(),e.tooltips?Re():fe(),w=[],re(se(r.start)?r.start:s,i),r.connect&&qe()}function qe(){for(;y.firstChild;)y.removeChild(y.firstChild);for(var r=0;r<=e.handles;r++)k[r]=le(y,e.connect[r]),J(r);ze({drag:e.events.drag,fixed:!0})}function ur(){X=!X,Ue(e,e.connect.map(function(r){return!r})),qe()}function fr(){x=Bt(p),Nt(e.connect,x),ze(e.events),re(e.start),e.pips&&he(e.pips),e.tooltips&&Re(),Kt()}fr();var ie={destroy:ar,steps:or,on:ve,off:Y,get:Te,set:re,setHandle:nr,reset:sr,disable:$t,enable:qt,__moveHandles:function(r,i,s){Fe(r,i,w,s)},options:n,updateOptions:lr,target:p,removePips:ce,removeTooltips:fe,getPositions:function(){return w.slice()},getTooltips:function(){return B},getOrigins:function(){return v},pips:he};return ie}function Ot(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=_e(e),o=Ut(t,n,e);return t.noUiSlider=o,o}const _t={__spectrum:Ve,cssClasses:De,create:Ot},Mt=(t,e)=>{const n=t.__vccOpts||t;for(const[o,l]of e)n[o]=l;return n},Rt={props:{id:{type:String,default:()=>"slider-"+(Math.random()+1).toString(36).substring(7)},start:{type:[Array,Number],validator(t){return typeof t=="object"?t.length&&t.every(e=>typeof e=="number"):!0}},connect:{type:[Array,Boolean,String],default:!1,validator(t){return typeof t=="object"?t.length&&t.every(e=>typeof e=="boolean"):!0}},range:{type:Object,required:!0},step:{type:Number},margin:{type:Number},padding:{type:[Array,Number],validator(t){return typeof t=="object"?t.length&&t.every(e=>typeof e=="number"):!0},default:0},limit:{type:Number},direction:{type:String,default:"ltr"},orientation:{type:String,default:"horizontal"},animate:{type:Boolean,default:!1},handleAttributes:{type:Array},keyboardSupport:{type:Boolean,default:!0},keyboardDefaultStep:{type:Number,default:10},keyboardPageMultiplier:{type:Number,default:5},keyboardMultiplier:{type:Number,default:1},behaviour:{type:String,default:"tap"},tooltips:{type:[Array,Object,Boolean,Function],default:!1,validator(t){const e=n=>!!(typeof n=="boolean"||typeof n=="function"||typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"to"));return Array.isArray(t)?t.every(e):e(t)}},format:{type:Object},pips:{type:Object,default:null},pipsys:{},snap:{type:Boolean},ariaFormat:{type:Object},modelValue:{required:!0,type:[Number,Array,String,null]},cssPrefix:{type:String},cssClasses:{type:Object},animationDuration:{type:Number},disable:{type:Boolean,default:!1}},data(){return{currentValues:null,events:[]}},mounted(){this.create(),this.startBasicEvents()},beforeUnmount(){this.destroy()},methods:{getReference(){return this.$refs[this.id]},create(){let t=this.modelValue;this.start!==void 0&&this.start!==null&&(t=this.start),t==null&&(t=Object.values(this.range)[0]);let e={start:t,connect:this.connect,range:this.range,step:this.step,margin:this.margin,padding:this.padding,limit:this.limit,direction:this.direction,orientation:this.orientation,animate:this.animate,handleAttributes:this.handleAttributes,keyboardSupport:this.keyboardSupport,keyboardDefaultStep:this.keyboardDefaultStep,keyboardPageMultiplier:this.keyboardPageMultiplier,keyboardMultiplier:this.keyboardMultiplier,behaviour:this.behaviour,tooltips:this.normalizeTooltip(this.tooltips),pips:this.pips,snap:this.snap,cssPrefix:this.cssPrefix,cssClasses:this.cssClasses,animationDuration:this.animationDuration};this.ariaFormat&&(e.ariaFormat=this.ariaFormat),this.format&&(e.format=this.format),this.pipsys!=null&&!e.pips&&(e.pips={mode:"steps"}),_t.create(this.getReference(),e)},startBasicEvents(){this.startUpdate(),this.startStart(),this.startSlide(),this.startDrag(),this.startChange(),this.startSet(),this.startEnd()},offAllEvents(){let t=this.events.length;for(let e=0;e<t;e++)this.off(this.events.pop())},normalizeTooltip(t){return typeof t=="function"?{to:t}:Array.isArray(t)?t.map(this.normalizeTooltip):t},startUpdate(){this.on("update",(t,e,n,o,l)=>{this.$emit("update",{values:t,handle:e,unencoded:n,tap:o,positions:l});let d=t.length>1?t:t[0];this.currentValues=d,this.$emit("update:modelValue",d)})},startStart(){this.on("start",(t,e,n,o,l)=>{this.$emit("start",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},startSlide(){this.on("slide",(t,e,n,o,l)=>{this.$emit("slide",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},startDrag(){this.on("drag",(t,e,n,o,l)=>{this.$emit("drag",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},startChange(){this.on("change",(t,e,n,o,l)=>{this.$emit("change",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},startSet(){this.on("set",(t,e,n,o,l)=>{this.$emit("set",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},startEnd(){this.on("end",(t,e,n,o,l)=>{this.$emit("end",{values:t,handle:e,unencoded:n,tap:o,positions:l})})},compareValues(t,e){return t=JSON.stringify(t),e=JSON.stringify(e),t==e},destroy(){this.offAllEvents(),this.getReference().noUiSlider.destroy()},getSteps(){return this.getReference().noUiSlider.steps()},on(t,e){this.events.push(t),this.getReference().noUiSlider.on(t,e)},off(t){this.getReference().noUiSlider.off(t)},get(t){return this.getReference().noUiSlider.get(t)},set(t,e,n){this.getReference().noUiSlider.set(t,e,n)},setHandle(t,e,n,o){this.getReference().noUiSlider.setHandle(t,e,n,o)},reset(t){this.getReference().noUiSlider.reset(t)},setDisable(t){this.getReference().noUiSlider.disable(t)},setEnable(t){this.getReference().noUiSlider.enable(t)},updateOptions(t,e){this.getReference().noUiSlider.updateOptions(t,e)},removePips(){this.getReference().noUiSlider.removePips()},removeTooltips(){this.getReference().noUiSlider.removeTooltips()},getPositions(){return this.getReference().noUiSlider.getPositions()},getTooltips(){return this.getReference().noUiSlider.getTooltips()},getOrigins(){return this.getReference().noUiSlider.getOrigins()},setPips(t){return this.getReference().noUiSlider.pips(t)}},watch:{currentValues(t){this.compareValues(t,this.get())||this.set(t,!1)},modelValue:{handler(t){this.compareValues(t,this.get())||this.set(t,!1)},deep:!0},pips:{handler(t){this.removePips(),this.$nextTick(()=>this.setPips(t))},deep:!0},disable(t){t?this.setDisable():this.setEnable()},step(t){this.updateOptions({step:t})},margin(t){this.updateOptions({margin:t})},padding:{handler(t){this.updateOptions({padding:t})},deep:!0},limit(t){this.updateOptions({limit:t})},tooltips(t){this.updateOptions({tooltips:t})},format:{handler(t){this.updateOptions({format:t})},deep:!0},range:{handler(t){this.updateOptions({range:t}),this.$nextTick(()=>this.reset())},deep:!0}},emits:["update","start","slide","drag","change","set","end","update:modelValue"],expose:["destroy","getSteps","on","off","get","set","setHandle","reset","setDisable","setEnable","updateOptions","removePips","removeTooltips","getPositions","getTooltips","getOrigins","setPips"]},jt=["id"];function Ht(t,e,n,o,l,d){return T.openBlock(),T.createElementBlock("div",{id:n.id,ref:n.id,class:"slider-ui"},null,8,jt)}const Lt=Mt(Rt,[["render",Ht]]),cr="";return Lt});
