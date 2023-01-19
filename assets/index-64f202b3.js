(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var To={},d_={get exports(){return To},set exports(t){To=t}},Vl={},K={},f_={get exports(){return K},set exports(t){K=t}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),h_=Symbol.for("react.portal"),p_=Symbol.for("react.fragment"),m_=Symbol.for("react.strict_mode"),g_=Symbol.for("react.profiler"),v_=Symbol.for("react.provider"),__=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),y_=Symbol.for("react.suspense"),S_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),fh=Symbol.iterator;function M_(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,eg={};function Os(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Qm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tg(){}tg.prototype=Os.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=eg,this.updater=n||Qm}var Wd=Gd.prototype=new tg;Wd.constructor=Gd;Jm(Wd,Os.prototype);Wd.isPureReactComponent=!0;var hh=Array.isArray,ng=Object.prototype.hasOwnProperty,$d={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zo,type:t,key:s,ref:o,props:r,_owner:$d.current}}function E_(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function b_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b_(""+t.key):e.toString(36)}function qa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case h_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vu(o,0):i,hh(r)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),qa(r,e,n,"",function(u){return u})):r!=null&&(jd(r)&&(r=E_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ph,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vu(s,a);o+=qa(s,e,n,l,r)}else if(l=M_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vu(s,a++),o+=qa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var i=[],r=0;return qa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function T_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Ka={transition:null},C_={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:$d};De.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};De.Component=Os;De.Fragment=p_;De.Profiler=g_;De.PureComponent=Gd;De.StrictMode=m_;De.Suspense=y_;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;De.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Jm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Zo,type:t.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(t){return t={$$typeof:__,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v_,_context:t},t.Consumer=t};De.createElement=rg;De.createFactory=function(t){var e=rg.bind(null,t);return e.type=t,e};De.createRef=function(){return{current:null}};De.forwardRef=function(t){return{$$typeof:x_,render:t}};De.isValidElement=jd;De.lazy=function(t){return{$$typeof:w_,_payload:{_status:-1,_result:t},_init:T_}};De.memo=function(t,e){return{$$typeof:S_,type:t,compare:e===void 0?null:e}};De.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};De.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};De.useCallback=function(t,e){return Vt.current.useCallback(t,e)};De.useContext=function(t){return Vt.current.useContext(t)};De.useDebugValue=function(){};De.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};De.useEffect=function(t,e){return Vt.current.useEffect(t,e)};De.useId=function(){return Vt.current.useId()};De.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};De.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};De.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};De.useMemo=function(t,e){return Vt.current.useMemo(t,e)};De.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};De.useRef=function(t){return Vt.current.useRef(t)};De.useState=function(t){return Vt.current.useState(t)};De.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};De.useTransition=function(){return Vt.current.useTransition()};De.version="18.2.0";(function(t){t.exports=De})(f_);const Xn=Zm(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=K,P_=Symbol.for("react.element"),L_=Symbol.for("react.fragment"),D_=Object.prototype.hasOwnProperty,R_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I_={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D_.call(e,i)&&!I_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:P_,type:t,key:s,ref:o,props:r,_owner:R_.current}}Vl.Fragment=L_;Vl.jsx=sg;Vl.jsxs=sg;(function(t){t.exports=Vl})(d_);const cl=To.Fragment,ce=To.jsx,On=To.jsxs;var Lc={},dl={},N_={get exports(){return dl},set exports(t){dl=t}},hn={},Dc={},k_={get exports(){return Dc},set exports(t){Dc=t}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var V=D.length;D.push(W);e:for(;0<V;){var O=V-1>>>1,B=D[O];if(0<r(B,W))D[O]=W,D[V]=B,V=O;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],V=D.pop();if(V!==W){D[0]=V;e:for(var O=0,B=D.length,Q=B>>>1;O<Q;){var ee=2*(O+1)-1,ie=D[ee],H=ee+1,Te=D[H];if(0>r(ie,V))H<B&&0>r(Te,ie)?(D[O]=Te,D[H]=V,O=H):(D[O]=ie,D[ee]=V,O=ee);else if(H<B&&0>r(Te,V))D[O]=Te,D[H]=V,O=H;else break e}}return W}function r(D,W){var V=D.sortIndex-W.sortIndex;return V!==0?V:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function w(D){if(h=!1,_(D),!x)if(n(l)!==null)x=!0,J(S);else{var W=n(u);W!==null&&Z(w,W.startTime-D)}}function S(D,W){x=!1,h&&(h=!1,m(y),y=-1),g=!0;var V=d;try{for(_(W),f=n(l);f!==null&&(!(f.expirationTime>W)||D&&!$());){var O=f.callback;if(typeof O=="function"){f.callback=null,d=f.priorityLevel;var B=O(f.expirationTime<=W);W=t.unstable_now(),typeof B=="function"?f.callback=B:f===n(l)&&i(l),_(W)}else i(l);f=n(l)}if(f!==null)var Q=!0;else{var ee=n(u);ee!==null&&Z(w,ee.startTime-W),Q=!1}return Q}finally{f=null,d=V,g=!1}}var T=!1,P=null,y=-1,A=5,L=-1;function $(){return!(t.unstable_now()-L<A)}function re(){if(P!==null){var D=t.unstable_now();L=D;var W=!0;try{W=P(!0,D)}finally{W?N():(T=!1,P=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v(re)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=re,N=function(){G.postMessage(null)}}else N=function(){p(re,0)};function J(D){P=D,T||(T=!0,N())}function Z(D,W){y=p(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,J(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var V=d;d=W;try{return D()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=d;d=D;try{return W()}finally{d=V}},t.unstable_scheduleCallback=function(D,W,V){var O=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?O+V:O):V=O,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,D={id:c++,callback:W,priorityLevel:D,startTime:V,expirationTime:B,sortIndex:-1},V>O?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(h?(m(y),y=-1):h=!0,Z(w,V-O))):(D.sortIndex=B,e(l,D),x||g||(x=!0,J(S))),D},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(D){var W=d;return function(){var V=d;d=W;try{return D.apply(this,arguments)}finally{d=V}}}})(og);(function(t){t.exports=og})(k_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag=K,fn=Dc;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,Co={};function Lr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Co[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,F_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function O_(t){return Rc.call(gh,t)?!0:Rc.call(mh,t)?!1:F_.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function z_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U_(t,e,n,i){if(e===null||typeof e>"u"||z_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Tt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Yd);Tt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Yd);Tt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,i){var r=Tt.hasOwnProperty(e)?Tt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),ug=Symbol.for("react.provider"),cg=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,_u;function so(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var xu=!1;function yu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function B_(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Ic:return"Profiler";case Kd:return"StrictMode";case Nc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case ug:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:Fc(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Fc(t(e))}catch{}}return null}function V_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H_(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=H_(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oc(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function zc(t,e){pg(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(oo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function mg(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G_=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){G_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function _g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W_=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(t,e){if(e){if(W_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $c=null,vs=null,_s=null;function wh(t){if(t=ea(t)){if(typeof $c!="function")throw Error(te(280));var e=t.stateNode;e&&(e=jl(e),$c(t.stateNode,t.type,e))}}function yg(t){vs?_s?_s.push(t):_s=[t]:vs=t}function Sg(){if(vs){var t=vs,e=_s;if(_s=vs=null,wh(t),e)for(t=0;t<e.length;t++)wh(e[t])}}function wg(t,e){return t(e)}function Mg(){}var Su=!1;function Eg(t,e,n){if(Su)return t(e,n);Su=!0;try{return wg(t,e,n)}finally{Su=!1,(vs!==null||_s!==null)&&(Mg(),Sg())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var i=jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var jc=!1;if(xi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{jc=!1}function $_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var mo=!1,hl=null,pl=!1,Xc=null,j_={onError:function(t){mo=!0,hl=t}};function X_(t,e,n,i,r,s,o,a,l){mo=!1,hl=null,$_.apply(j_,arguments)}function Y_(t,e,n,i,r,s,o,a,l){if(X_.apply(this,arguments),mo){if(mo){var u=hl;mo=!1,hl=null}else throw Error(te(198));pl||(pl=!0,Xc=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(Dr(t)!==t)throw Error(te(188))}function q_(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mh(r),t;if(s===i)return Mh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Tg(t){return t=q_(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Ag=fn.unstable_scheduleCallback,Eh=fn.unstable_cancelCallback,K_=fn.unstable_shouldYield,Z_=fn.unstable_requestPaint,it=fn.unstable_now,Q_=fn.unstable_getCurrentPriorityLevel,ef=fn.unstable_ImmediatePriority,Pg=fn.unstable_UserBlockingPriority,ml=fn.unstable_NormalPriority,J_=fn.unstable_LowPriority,Lg=fn.unstable_IdlePriority,Hl=null,qn=null;function ex(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:ix,tx=Math.log,nx=Math.LN2;function ix(t){return t>>>=0,t===0?32:31-(tx(t)/nx|0)|0}var da=64,fa=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ao(a):(s&=o,s!==0&&(i=ao(s)))}else o=n&~r,o!==0?i=ao(o):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=rx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dg(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function wu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function ox(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ig,nf,Ng,kg,Fg,qc=!1,ha=[],zi=null,Ui=null,Bi=null,Lo=new Map,Do=new Map,Ni=[],ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lx(t,e,n,i,r){switch(e){case"focusin":return zi=$s(zi,t,e,n,i,r),!0;case"dragenter":return Ui=$s(Ui,t,e,n,i,r),!0;case"mouseover":return Bi=$s(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Lo.set(s,$s(Lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Do.set(s,$s(Do.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=fr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wc=i,n.target.dispatchEvent(i),Wc=null}else return e=ea(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){Za(t)&&n.delete(e)}function ux(){qc=!1,zi!==null&&Za(zi)&&(zi=null),Ui!==null&&Za(Ui)&&(Ui=null),Bi!==null&&Za(Bi)&&(Bi=null),Lo.forEach(Th),Do.forEach(Th)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,qc||(qc=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,ux)))}function Ro(t){function e(r){return js(r,t)}if(0<ha.length){js(ha[0],t);for(var n=1;n<ha.length;n++){var i=ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&js(zi,t),Ui!==null&&js(Ui,t),Bi!==null&&js(Bi,t),Lo.forEach(e),Do.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&Ni.shift()}var xs=Mi.ReactCurrentBatchConfig,vl=!0;function cx(t,e,n,i){var r=Ge,s=xs.transition;xs.transition=null;try{Ge=1,rf(t,e,n,i)}finally{Ge=r,xs.transition=s}}function dx(t,e,n,i){var r=Ge,s=xs.transition;xs.transition=null;try{Ge=4,rf(t,e,n,i)}finally{Ge=r,xs.transition=s}}function rf(t,e,n,i){if(vl){var r=Kc(t,e,n,i);if(r===null)Ru(t,e,i,_l,n),bh(t,i);else if(lx(r,t,e,n,i))i.stopPropagation();else if(bh(t,i),e&4&&-1<ax.indexOf(t)){for(;r!==null;){var s=ea(r);if(s!==null&&Ig(s),s=Kc(t,e,n,i),s===null&&Ru(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ru(t,e,i,null,n)}}var _l=null;function Kc(t,e,n,i){if(_l=null,t=Jd(i),t=fr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case ef:return 1;case Pg:return 4;case ml:case J_:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var Fi=null,sf=null,Qa=null;function Ug(){if(Qa)return Qa;var t,e=sf,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function Ch(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:Ch,this.isPropagationStopped=Ch,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=pn(zs),Jo=et({},zs,{view:0,detail:0}),fx=pn(Jo),Mu,Eu,Xs,Gl=et({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Mu=t.screenX-Xs.screenX,Eu=t.screenY-Xs.screenY):Eu=Mu=0,Xs=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Ah=pn(Gl),hx=et({},Gl,{dataTransfer:0}),px=pn(hx),mx=et({},Jo,{relatedTarget:0}),bu=pn(mx),gx=et({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=pn(gx),_x=et({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=pn(_x),yx=et({},zs,{data:0}),Ph=pn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mx[t])?!!e[t]:!1}function af(){return Ex}var bx=et({},Jo,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=pn(bx),Cx=et({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=pn(Cx),Ax=et({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),Px=pn(Ax),Lx=et({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=pn(Lx),Rx=et({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=pn(Rx),Nx=[9,13,27,32],lf=xi&&"CompositionEvent"in window,go=null;xi&&"documentMode"in document&&(go=document.documentMode);var kx=xi&&"TextEvent"in window&&!go,Bg=xi&&(!lf||go&&8<go&&11>=go),Dh=String.fromCharCode(32),Rh=!1;function Vg(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Fx(t,e){switch(t){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(Rh=!0,Dh);case"textInput":return t=e.data,t===Dh&&Rh?null:t;default:return null}}function Ox(t,e){if(ns)return t==="compositionend"||!lf&&Vg(t,e)?(t=Ug(),Qa=sf=Fi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bg&&e.locale!=="ko"?null:e.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zx[t.type]:e==="textarea"}function Gg(t,e,n,i){yg(i),e=xl(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vo=null,Io=null;function Ux(t){ev(t,0)}function Wl(t){var e=ss(t);if(hg(e))return t}function Bx(t,e){if(t==="change")return e}var Wg=!1;if(xi){var Tu;if(xi){var Cu="oninput"in document;if(!Cu){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Cu=typeof Nh.oninput=="function"}Tu=Cu}else Tu=!1;Wg=Tu&&(!document.documentMode||9<document.documentMode)}function kh(){vo&&(vo.detachEvent("onpropertychange",$g),Io=vo=null)}function $g(t){if(t.propertyName==="value"&&Wl(Io)){var e=[];Gg(e,Io,t,Jd(t)),Eg(Ux,e)}}function Vx(t,e,n){t==="focusin"?(kh(),vo=e,Io=n,vo.attachEvent("onpropertychange",$g)):t==="focusout"&&kh()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Io)}function Gx(t,e){if(t==="click")return Wl(e)}function Wx(t,e){if(t==="input"||t==="change")return Wl(e)}function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:$x;function No(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var n=Fh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=Xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(i!==null&&uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Oh(n,s);var o=Oh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xx=xi&&"documentMode"in document&&11>=document.documentMode,is=null,Zc=null,_o=null,Qc=!1;function zh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||is==null||is!==fl(i)||(i=is,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&No(_o,i)||(_o=i,i=xl(Zc,"onSelect"),0<i.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Au={},Yg={};xi&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function $l(t){if(Au[t])return Au[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yg)return Au[t]=e[n];return t}var qg=$l("animationend"),Kg=$l("animationiteration"),Zg=$l("animationstart"),Qg=$l("transitionend"),Jg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Jg.set(t,e),Lr(e,[t])}for(var Pu=0;Pu<Uh.length;Pu++){var Lu=Uh[Pu],Yx=Lu.toLowerCase(),qx=Lu[0].toUpperCase()+Lu.slice(1);Ki(Yx,"on"+qx)}Ki(qg,"onAnimationEnd");Ki(Kg,"onAnimationIteration");Ki(Zg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Qg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y_(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,a,u),s=l}}}if(pl)throw t=Xc,pl=!1,Xc=null,t}function je(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[ga]){t[ga]=!0,lg.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,Du("selectionchange",!1,e))}}function tv(t,e,n,i){switch(zg(e)){case 1:var r=cx;break;case 4:r=dx;break;default:r=rf}n=r.bind(null,e,n,t),r=void 0,!jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Eg(function(){var u=s,c=Jd(n),f=[];e:{var d=Jg.get(t);if(d!==void 0){var g=of,x=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":g=Tx;break;case"focusin":x="focus",g=bu;break;case"focusout":x="blur",g=bu;break;case"beforeblur":case"afterblur":g=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Px;break;case qg:case Kg:case Zg:g=vx;break;case Qg:g=Dx;break;case"scroll":g=fx;break;case"wheel":g=Ix;break;case"copy":case"cut":case"paste":g=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lh}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?d!==null?d+"Capture":null:d;h=[];for(var v=u,_;v!==null;){_=v;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,m!==null&&(w=Po(v,m),w!=null&&h.push(Fo(v,w,_)))),p)break;v=v.return}0<h.length&&(d=new g(d,x,null,n,c),f.push({event:d,listeners:h}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Wc&&(x=n.relatedTarget||n.fromElement)&&(fr(x)||x[yi]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?fr(x):null,x!==null&&(p=Dr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(h=Ah,w="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Lh,w="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?d:ss(g),_=x==null?d:ss(x),d=new h(w,v+"leave",g,n,c),d.target=p,d.relatedTarget=_,w=null,fr(c)===u&&(h=new h(m,v+"enter",x,n,c),h.target=_,h.relatedTarget=p,w=h),p=w,g&&x)t:{for(h=g,m=x,v=0,_=h;_;_=Nr(_))v++;for(_=0,w=m;w;w=Nr(w))_++;for(;0<v-_;)h=Nr(h),v--;for(;0<_-v;)m=Nr(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Nr(h),m=Nr(m)}h=null}else h=null;g!==null&&Vh(f,d,g,h,!1),x!==null&&p!==null&&Vh(f,p,x,h,!0)}}e:{if(d=u?ss(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=Bx;else if(Ih(d))if(Wg)S=Wx;else{S=Hx;var T=Vx}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Gx);if(S&&(S=S(t,u))){Gg(f,S,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Uc(d,"number",d.value)}switch(T=u?ss(u):window,t){case"focusin":(Ih(T)||T.contentEditable==="true")&&(is=T,Zc=u,_o=null);break;case"focusout":_o=Zc=is=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,zh(f,n,c);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":zh(f,n,c)}var P;if(lf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ns?Vg(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Bg&&n.locale!=="ko"&&(ns||y!=="onCompositionStart"?y==="onCompositionEnd"&&ns&&(P=Ug()):(Fi=c,sf="value"in Fi?Fi.value:Fi.textContent,ns=!0)),T=xl(u,y),0<T.length&&(y=new Ph(y,t,null,n,c),f.push({event:y,listeners:T}),P?y.data=P:(P=Hg(n),P!==null&&(y.data=P)))),(P=kx?Fx(t,n):Ox(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(c=new Ph("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}ev(f,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Po(t,n),s!=null&&i.unshift(Fo(t,s,r)),s=Po(t,e),s!=null&&i.push(Fo(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Po(n,s),l!=null&&o.unshift(Fo(n,l,a))):r||(l=Po(n,s),l!=null&&o.push(Fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Qx,"")}function va(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(te(425))}function yl(){}var Jc=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(ty)}:nd;function ty(t){setTimeout(function(){throw t})}function Iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),jn="__reactFiber$"+Us,Oo="__reactProps$"+Us,yi="__reactContainer$"+Us,id="__reactEvents$"+Us,ny="__reactListeners$"+Us,iy="__reactHandles$"+Us;function fr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wh(t);t!==null;){if(n=t[jn])return n;t=Wh(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[jn]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function jl(t){return t[Oo]||null}var rd=[],os=-1;function Zi(t){return{current:t}}function Ye(t){0>os||(t.current=rd[os],rd[os]=null,os--)}function $e(t,e){os++,rd[os]=t.current,t.current=e}var Yi={},Nt=Zi(Yi),Xt=Zi(!1),wr=Yi;function bs(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Yt(t){return t=t.childContextTypes,t!=null}function Sl(){Ye(Xt),Ye(Nt)}function $h(t,e,n){if(Nt.current!==Yi)throw Error(te(168));$e(Nt,e),$e(Xt,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,V_(t)||"Unknown",r));return et({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,wr=Nt.current,$e(Nt,t),$e(Xt,Xt.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=nv(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,Ye(Xt),Ye(Nt),$e(Nt,t)):Ye(Xt),$e(Xt,n)}var ui=null,Xl=!1,Nu=!1;function iv(t){ui===null?ui=[t]:ui.push(t)}function ry(t){Xl=!0,iv(t)}function Qi(){if(!Nu&&ui!==null){Nu=!0;var t=0,e=Ge;try{var n=ui;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Xl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),Ag(ef,Qi),r}finally{Ge=e,Nu=!1}}return null}var as=[],ls=0,Ml=null,El=0,_n=[],xn=0,Mr=null,hi=1,pi="";function or(t,e){as[ls++]=El,as[ls++]=Ml,Ml=t,El=e}function rv(t,e,n){_n[xn++]=hi,_n[xn++]=pi,_n[xn++]=Mr,Mr=t;var i=hi;t=pi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-zn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function cf(t){t.return!==null&&(or(t,1),rv(t,1,0))}function df(t){for(;t===Ml;)Ml=as[--ls],as[ls]=null,El=as[--ls],as[ls]=null;for(;t===Mr;)Mr=_n[--xn],_n[xn]=null,pi=_n[--xn],_n[xn]=null,hi=_n[--xn],_n[xn]=null}var dn=null,un=null,Ke=!1,Nn=null;function sv(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(Ke){var e=un;if(e){var n=e;if(!Xh(t,e)){if(sd(t))throw Error(te(418));e=Vi(n.nextSibling);var i=dn;e&&Xh(t,e)?sv(i,n):(t.flags=t.flags&-4097|2,Ke=!1,dn=t)}}else{if(sd(t))throw Error(te(418));t.flags=t.flags&-4097|2,Ke=!1,dn=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function _a(t){if(t!==dn)return!1;if(!Ke)return Yh(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=un)){if(sd(t))throw ov(),Error(te(418));for(;e;)sv(t,e),e=Vi(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Vi(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=un;t;)t=Vi(t.nextSibling)}function Ts(){un=dn=null,Ke=!1}function ff(t){Nn===null?Nn=[t]:Nn.push(t)}var sy=Mi.ReactCurrentBatchConfig;function Rn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bl=Zi(null),Tl=null,us=null,hf=null;function pf(){hf=us=Tl=null}function mf(t){var e=bl.current;Ye(bl),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Tl=t,hf=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Tl===null)throw Error(te(308));us=t,Tl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var hr=null;function gf(t){hr===null?hr=[t]:hr.push(t)}function av(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(d=e,g=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){f=x.call(g,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,d=typeof x=="function"?x.call(g,f,d):x,d==null)break e;f=et({},f,d);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=f}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var uv=new ag.Component().refs;function ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Wi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Un(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Wi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Un(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),i=Wi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Un(e,t,i,n),el(e,t,i))}};function Zh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,i)||!No(r,s):!0}function cv(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=Yt(e)?wr:Nt.current,i=e.contextTypes,s=(i=i!=null)?bs(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=uv,vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=Yt(e)?wr:Nt.current,r.context=bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===uv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jh(t){var e=t._init;return e(t._payload)}function dv(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=$i(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,w){return v===null||v.tag!==6?(v=Vu(_,m.mode,w),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,w){var S=_.type;return S===ts?c(m,v,_.props.children,w,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Di&&Jh(S)===v.type)?(w=r(v,_.props),w.ref=Ys(m,v,_),w.return=m,w):(w=ol(_.type,_.key,_.props,null,m.mode,w),w.ref=Ys(m,v,_),w.return=m,w)}function u(m,v,_,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Hu(_,m.mode,w),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,w,S){return v===null||v.tag!==7?(v=xr(_,m.mode,w,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function f(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vu(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return _=ol(v.type,v.key,v.props,null,m.mode,_),_.ref=Ys(m,null,v),_.return=m,_;case es:return v=Hu(v,m.mode,_),v.return=m,v;case Di:var w=v._init;return f(m,w(v._payload),_)}if(oo(v)||Gs(v))return v=xr(v,m.mode,_,null),v.return=m,v;xa(m,v)}return null}function d(m,v,_,w){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,v,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case la:return _.key===S?l(m,v,_,w):null;case es:return _.key===S?u(m,v,_,w):null;case Di:return S=_._init,d(m,v,S(_._payload),w)}if(oo(_)||Gs(_))return S!==null?null:c(m,v,_,w,null);xa(m,_)}return null}function g(m,v,_,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(_)||null,a(v,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case la:return m=m.get(w.key===null?_:w.key)||null,l(v,m,w,S);case es:return m=m.get(w.key===null?_:w.key)||null,u(v,m,w,S);case Di:var T=w._init;return g(m,v,_,T(w._payload),S)}if(oo(w)||Gs(w))return m=m.get(_)||null,c(v,m,w,S,null);xa(v,w)}return null}function x(m,v,_,w){for(var S=null,T=null,P=v,y=v=0,A=null;P!==null&&y<_.length;y++){P.index>y?(A=P,P=null):A=P.sibling;var L=d(m,P,_[y],w);if(L===null){P===null&&(P=A);break}t&&P&&L.alternate===null&&e(m,P),v=s(L,v,y),T===null?S=L:T.sibling=L,T=L,P=A}if(y===_.length)return n(m,P),Ke&&or(m,y),S;if(P===null){for(;y<_.length;y++)P=f(m,_[y],w),P!==null&&(v=s(P,v,y),T===null?S=P:T.sibling=P,T=P);return Ke&&or(m,y),S}for(P=i(m,P);y<_.length;y++)A=g(P,m,y,_[y],w),A!==null&&(t&&A.alternate!==null&&P.delete(A.key===null?y:A.key),v=s(A,v,y),T===null?S=A:T.sibling=A,T=A);return t&&P.forEach(function($){return e(m,$)}),Ke&&or(m,y),S}function h(m,v,_,w){var S=Gs(_);if(typeof S!="function")throw Error(te(150));if(_=S.call(_),_==null)throw Error(te(151));for(var T=S=null,P=v,y=v=0,A=null,L=_.next();P!==null&&!L.done;y++,L=_.next()){P.index>y?(A=P,P=null):A=P.sibling;var $=d(m,P,L.value,w);if($===null){P===null&&(P=A);break}t&&P&&$.alternate===null&&e(m,P),v=s($,v,y),T===null?S=$:T.sibling=$,T=$,P=A}if(L.done)return n(m,P),Ke&&or(m,y),S;if(P===null){for(;!L.done;y++,L=_.next())L=f(m,L.value,w),L!==null&&(v=s(L,v,y),T===null?S=L:T.sibling=L,T=L);return Ke&&or(m,y),S}for(P=i(m,P);!L.done;y++,L=_.next())L=g(P,m,y,L.value,w),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?y:L.key),v=s(L,v,y),T===null?S=L:T.sibling=L,T=L);return t&&P.forEach(function(re){return e(m,re)}),Ke&&or(m,y),S}function p(m,v,_,w){if(typeof _=="object"&&_!==null&&_.type===ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case la:e:{for(var S=_.key,T=v;T!==null;){if(T.key===S){if(S=_.type,S===ts){if(T.tag===7){n(m,T.sibling),v=r(T,_.props.children),v.return=m,m=v;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Di&&Jh(S)===T.type){n(m,T.sibling),v=r(T,_.props),v.ref=Ys(m,T,_),v.return=m,m=v;break e}n(m,T);break}else e(m,T);T=T.sibling}_.type===ts?(v=xr(_.props.children,m.mode,w,_.key),v.return=m,m=v):(w=ol(_.type,_.key,_.props,null,m.mode,w),w.ref=Ys(m,v,_),w.return=m,m=w)}return o(m);case es:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=Hu(_,m.mode,w),v.return=m,m=v}return o(m);case Di:return T=_._init,p(m,v,T(_._payload),w)}if(oo(_))return x(m,v,_,w);if(Gs(_))return h(m,v,_,w);xa(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=Vu(_,m.mode,w),v.return=m,m=v),o(m)):n(m,v)}return p}var Cs=dv(!0),fv=dv(!1),ta={},Kn=Zi(ta),zo=Zi(ta),Uo=Zi(ta);function pr(t){if(t===ta)throw Error(te(174));return t}function _f(t,e){switch($e(Uo,e),$e(zo,t),$e(Kn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vc(e,t)}Ye(Kn),$e(Kn,e)}function As(){Ye(Kn),Ye(zo),Ye(Uo)}function hv(t){pr(Uo.current);var e=pr(Kn.current),n=Vc(e,t.type);e!==n&&($e(zo,t),$e(Kn,n))}function xf(t){zo.current===t&&(Ye(Kn),Ye(zo))}var Ze=Zi(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ku=[];function yf(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var tl=Mi.ReactCurrentDispatcher,Fu=Mi.ReactCurrentBatchConfig,Er=0,Je=null,dt=null,xt=null,Pl=!1,xo=!1,Bo=0,oy=0;function At(){throw Error(te(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function wf(t,e,n,i,r,s){if(Er=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?cy:dy,t=n(i,r),xo){s=0;do{if(xo=!1,Bo=0,25<=s)throw Error(te(301));s+=1,xt=dt=null,e.updateQueue=null,tl.current=fy,t=n(i,r)}while(xo)}if(tl.current=Ll,e=dt!==null&&dt.next!==null,Er=0,xt=dt=Je=null,Pl=!1,e)throw Error(te(300));return t}function Mf(){var t=Bo!==0;return Bo=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Je.memoizedState=xt=t:xt=xt.next=t,xt}function Tn(){if(dt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=xt===null?Je.memoizedState:xt.next;if(e!==null)xt=e,dt=t;else{if(t===null)throw Error(te(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},xt===null?Je.memoizedState=xt=t:xt=xt.next=t}return xt}function Vo(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Je.lanes|=c,br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Je.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function pv(){}function mv(t,e){var n=Je,i=Tn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,Ef(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,Ho(9,vv.bind(null,n,i,r,e),void 0,null),yt===null)throw Error(te(349));Er&30||gv(n,e,r)}return r}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,i){e.value=n,e.getSnapshot=i,xv(e)&&yv(t)}function _v(t,e,n){return n(function(){xv(e)&&yv(t)})}function xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function yv(t){var e=Si(t,1);e!==null&&Un(e,t,1,-1)}function ep(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,Je,t),[e.memoizedState,t]}function Ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sv(){return Tn().memoizedState}function nl(t,e,n,i){var r=Gn();Je.flags|=t,r.memoizedState=Ho(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,i!==null&&Sf(i,o.deps)){r.memoizedState=Ho(e,n,s,i);return}}Je.flags|=t,r.memoizedState=Ho(1|e,n,s,i)}function tp(t,e){return nl(8390656,8,t,e)}function Ef(t,e){return ql(2048,8,t,e)}function wv(t,e){return ql(4,2,t,e)}function Mv(t,e){return ql(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,Ev.bind(null,e,t),n)}function bf(){}function Tv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return Er&21?(Vn(n,e)||(n=Dg(),Je.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function ay(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=Fu.transition;Fu.transition={};try{t(!1),e()}finally{Ge=n,Fu.transition=i}}function Pv(){return Tn().memoizedState}function ly(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Lv(t))Dv(e,n);else if(n=av(t,e,n,i),n!==null){var r=Bt();Un(n,t,i,r),Rv(n,e,i)}}function uy(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lv(t))Dv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=av(t,e,r,i),n!==null&&(r=Bt(),Un(n,t,i,r),Rv(n,e,i))}}function Lv(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function Dv(t,e){xo=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}var Ll={readContext:bn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},cy={readContext:bn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,Je,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:bf,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=ay.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Je,r=Gn();if(Ke){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),yt===null)throw Error(te(349));Er&30||gv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,tp(_v.bind(null,i,s,t),[t]),i.flags|=2048,Ho(9,vv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=yt.identifierPrefix;if(Ke){var n=pi,i=hi;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:bn,useCallback:Tv,useContext:bn,useEffect:Ef,useImperativeHandle:bv,useInsertionEffect:wv,useLayoutEffect:Mv,useMemo:Cv,useReducer:Ou,useRef:Sv,useState:function(){return Ou(Vo)},useDebugValue:bf,useDeferredValue:function(t){var e=Tn();return Av(e,dt.memoizedState,t)},useTransition:function(){var t=Ou(Vo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Pv,unstable_isNewReconciler:!1},fy={readContext:bn,useCallback:Tv,useContext:bn,useEffect:Ef,useImperativeHandle:bv,useInsertionEffect:wv,useLayoutEffect:Mv,useMemo:Cv,useReducer:zu,useRef:Sv,useState:function(){return zu(Vo)},useDebugValue:bf,useDeferredValue:function(t){var e=Tn();return dt===null?e.memoizedState=t:Av(e,dt.memoizedState,t)},useTransition:function(){var t=zu(Vo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Pv,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",i=e;do n+=B_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,yd=i),cd(t,e)},n}function Nv(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var py=Mi.ReactCurrentOwner,jt=!1;function Ut(t,e,n,i){e.child=t===null?fv(e,null,n,i):Cs(e,t.child,n,i)}function sp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=wf(t,e,n,i,s,r),n=Mf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(Ke&&n&&cf(e),e.flags|=1,Ut(t,e,i,r),e.child)}function op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kv(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(No(s,i)&&t.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,wi(t,e,r)}return dd(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ds,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(ds,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,$e(ds,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,$e(ds,on),on|=i;return Ut(t,e,r,n),e.child}function Ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,i,r){var s=Yt(n)?wr:Nt.current;return s=bs(e,s),ys(e,r),n=wf(t,e,n,i,s,r),i=Mf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(Ke&&i&&cf(e),e.flags|=1,Ut(t,e,n,r),e.child)}function ap(t,e,n,i,r){if(Yt(n)){var s=!0;wl(e)}else s=!1;if(ys(e,r),e.stateNode===null)il(t,e),cv(e,n,i),ud(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=Yt(n)?wr:Nt.current,u=bs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Qh(e,o,i,u),Ri=!1;var d=e.memoizedState;o.state=d,Cl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Xt.current||Ri?(typeof c=="function"&&(ld(e,n,c,i),l=e.memoizedState),(a=Ri||Zh(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=Yt(n)?wr:Nt.current,l=bs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Qh(e,o,i,l),Ri=!1,d=e.memoizedState,o.state=d,Cl(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||Xt.current||Ri?(typeof g=="function"&&(ld(e,n,g,i),x=e.memoizedState),(u=Ri||Zh(e,n,u,i,d,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return fd(t,e,n,i,s,r)}function fd(t,e,n,i,r,s){Ov(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jh(e,n,!1),wi(t,e,s);i=e.stateNode,py.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function zv(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),_f(t,e.containerInfo)}function lp(t,e,n,i,r){return Ts(),ff(r),e.flags|=256,Ut(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var i=e.pendingProps,r=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),$e(Ze,r&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ql(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=hd,t):Tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return my(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,i){return i!==null&&ff(i),Cs(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(te(422))),ya(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=pd(o),e.memoizedState=hd,s);if(!(e.mode&1))return ya(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Uu(s,i,void 0),ya(t,e,o,i)}if(a=(o&t.childLanes)!==0,jt||a){if(i=yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Un(i,t,r,-1))}return Rf(),i=Uu(Error(te(421))),ya(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Vi(r.nextSibling),dn=e,Ke=!0,Nn=null,t!==null&&(_n[xn++]=hi,_n[xn++]=pi,_n[xn++]=Mr,hi=t.id,pi=t.overflow,Mr=e),e=Tf(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ad(t.return,e,n)}function Bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ut(t,e,i.children,n),i=Ze.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if($e(Ze,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:zv(e),Ts();break;case 5:hv(e);break;case 1:Yt(e.type)&&wl(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?Uv(t,e,n):($e(Ze,Ze.current&1),t=wi(t,e,n),t!==null?t.sibling:null);$e(Ze,Ze.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(Ze,Ze.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return wi(t,e,n)}var Vv,md,Hv,Gv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};Hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Kn.current);var s=null;switch(n){case"input":r=Oc(t,r),i=Oc(t,i),s=[];break;case"select":r=et({},r,{value:void 0}),i=et({},i,{value:void 0}),s=[];break;case"textarea":r=Bc(t,r),i=Bc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yl)}Hc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return Yt(e.type)&&Sl(),Pt(e),null;case 3:return i=e.stateNode,As(),Ye(Xt),Ye(Nt),yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Md(Nn),Nn=null))),md(t,e),Pt(e),null;case 5:xf(e);var r=pr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Pt(e),null}if(t=pr(Kn.current),_a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)je(lo[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":_h(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":yh(i,s),je("invalid",i)}Hc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,t),r=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",i)}switch(n){case"input":ua(i),xh(i,s,!0);break;case"textarea":ua(i),Sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[Oo]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gc(n,i),n){case"dialog":je("cancel",t),je("close",t),r=i;break;case"iframe":case"object":case"embed":je("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)je(lo[r],t);r=i;break;case"source":je("error",t),r=i;break;case"img":case"image":case"link":je("error",t),je("load",t),r=i;break;case"details":je("toggle",t),r=i;break;case"input":_h(t,i),r=Oc(t,i),je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=et({},i,{value:void 0}),je("invalid",t);break;case"textarea":yh(t,i),r=Bc(t,i),je("invalid",t);break;default:r=i}Hc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&qd(t,s,l,o))}switch(n){case"input":ua(t),xh(t,i,!1);break;case"textarea":ua(t),Sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)Gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=pr(Uo.current),pr(Kn.current),_a(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Pt(e),null;case 13:if(Ye(Ze),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&un!==null&&e.mode&1&&!(e.flags&128))ov(),Ts(),e.flags|=98560,s=!1;else if(s=_a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[jn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else Nn!==null&&(Md(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?ft===0&&(ft=3):Rf())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return As(),md(t,e),t===null&&ko(e.stateNode.containerInfo),Pt(e),null;case 10:return mf(e.type._context),Pt(e),null;case 17:return Yt(e.type)&&Sl(),Pt(e),null;case 19:if(Ye(Ze),s=e.memoizedState,s===null)return Pt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>Ls&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return Pt(e),null}else 2*it()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Ze.current,$e(Ze,i?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function _y(t,e){switch(df(e),e.tag){case 1:return Yt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),Ye(Xt),Ye(Nt),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(Ye(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(Ze),null;case 4:return As(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Sa=!1,Rt=!1,xy=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){tt(t,e,i)}else n.current=null}function gd(t,e,n){try{n()}catch(i){tt(t,e,i)}}var cp=!1;function yy(t,e){if(Jc=vl,t=Xg(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},vl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Rn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(w){tt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=cp,cp=!1,x}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gd(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Oo],delete e[id],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var Mt=null,In=!1;function bi(t,e,n){for(n=n.child;n!==null;)jv(t,e,n),n=n.sibling}function jv(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Rt||cs(n,e);case 6:var i=Mt,r=In;Mt=null,bi(t,e,n),Mt=i,In=r,Mt!==null&&(In?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(In?(t=Mt,n=n.stateNode,t.nodeType===8?Iu(t.parentNode,n):t.nodeType===1&&Iu(t,n),Ro(t)):Iu(Mt,n.stateNode));break;case 4:i=Mt,r=In,Mt=n.stateNode.containerInfo,In=!0,bi(t,e,n),Mt=i,In=r;break;case 0:case 11:case 14:case 15:if(!Rt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gd(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Rt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){tt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Rt=(i=Rt)||n.memoizedState!==null,bi(t,e,n),Rt=i):bi(t,e,n);break;default:bi(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=Py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,In=!1;break e;case 3:Mt=a.stateNode.containerInfo,In=!0;break e;case 4:Mt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Mt===null)throw Error(te(160));jv(s,o,r),Mt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{yo(3,t,t.return),Kl(3,t)}catch(h){tt(t,t.return,h)}try{yo(5,t,t.return)}catch(h){tt(t,t.return,h)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ao(r,"")}catch(h){tt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Gc(a,o);var u=Gc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?xg(r,f):c==="dangerouslySetInnerHTML"?vg(r,f):c==="children"?Ao(r,f):qd(r,c,f,u)}switch(a){case"input":zc(r,s);break;case"textarea":mg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?gs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oo]=s}catch(h){tt(t,t.return,h)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){tt(t,t.return,h)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(h){tt(t,t.return,h)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=it())),i&4&&fp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(u=Rt)||c,Cn(e,t),Rt=u):Cn(e,t),Hn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(d=me,g=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:cs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){tt(i,n,h)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){pp(f);continue}}g!==null?(g.return=d,me=g):pp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_g("display",o))}catch(h){tt(t,t.return,h)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){tt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&fp(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=dp(t);xd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dp(t);_d(t,a,o);break;default:throw Error(te(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){me=t,Yv(t)}function Yv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=Sa;var u=Rt;if(Sa=o,(Rt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?mp(r):l!==null?(l.return=o,me=l):mp(r);for(;s!==null;)me=s,Yv(s),s=s.sibling;me=r,Sa=a,Rt=u}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):hp(t)}}function hp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Rt||e.flags&512&&vd(e)}catch(d){tt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function pp(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function mp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{vd(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var wy=Math.ceil,Dl=Mi.ReactCurrentDispatcher,Cf=Mi.ReactCurrentOwner,Mn=Mi.ReactCurrentBatchConfig,ze=0,yt=null,at=null,bt=0,on=0,ds=Zi(0),ft=0,Go=null,br=0,Zl=0,Af=0,So=null,Wt=null,Pf=0,Ls=1/0,ai=null,Rl=!1,yd=null,Gi=null,wa=!1,Oi=null,Il=0,wo=0,Sd=null,rl=-1,sl=0;function Bt(){return ze&6?it():rl!==-1?rl:rl=it()}function Wi(t){return t.mode&1?ze&2&&bt!==0?bt&-bt:sy.transition!==null?(sl===0&&(sl=Dg()),sl):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:zg(t.type)),t):1}function Un(t,e,n,i){if(50<wo)throw wo=0,Sd=null,Error(te(185));Qo(t,n,i),(!(ze&2)||t!==yt)&&(t===yt&&(!(ze&2)&&(Zl|=n),ft===4&&ki(t,bt)),qt(t,i),n===1&&ze===0&&!(e.mode&1)&&(Ls=it()+500,Xl&&Qi()))}function qt(t,e){var n=t.callbackNode;sx(t,e);var i=gl(t,t===yt?bt:0);if(i===0)n!==null&&Eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eh(n),e===1)t.tag===0?ry(gp.bind(null,t)):iv(gp.bind(null,t)),ey(function(){!(ze&6)&&Qi()}),n=null;else{switch(Rg(i)){case 1:n=ef;break;case 4:n=Pg;break;case 16:n=ml;break;case 536870912:n=Lg;break;default:n=ml}n=n0(n,qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qv(t,e){if(rl=-1,sl=0,ze&6)throw Error(te(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=gl(t,t===yt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=ze;ze|=2;var s=Zv();(yt!==t||bt!==e)&&(ai=null,Ls=it()+500,_r(t,e));do try{by();break}catch(a){Kv(t,a)}while(1);pf(),Dl.current=s,ze=r,at!==null?e=0:(yt=null,bt=0,e=ft)}if(e!==0){if(e===2&&(r=Yc(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=Go,_r(t,0),ki(t,i),qt(t,it()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!My(r)&&(e=Nl(t,i),e===2&&(s=Yc(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=Go,_r(t,0),ki(t,i),qt(t,it()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:ar(t,Wt,ai);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=Pf+500-it(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Bt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nd(ar.bind(null,t,Wt,ai),e);break}ar(t,Wt,ai);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=it()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=nd(ar.bind(null,t,Wt,ai),i);break}ar(t,Wt,ai);break;case 5:ar(t,Wt,ai);break;default:throw Error(te(329))}}}return qt(t,it()),t.callbackNode===n?qv.bind(null,t):null}function wd(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Md(e)),t}function Md(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function My(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~Af,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function gp(t){if(ze&6)throw Error(te(327));Ss();var e=gl(t,0);if(!(e&1))return qt(t,it()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Yc(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=Go,_r(t,0),ki(t,e),qt(t,it()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Wt,ai),qt(t,it()),null}function Lf(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(Ls=it()+500,Xl&&Qi())}}function Tr(t){Oi!==null&&Oi.tag===0&&!(ze&6)&&Ss();var e=ze;ze|=1;var n=Mn.transition,i=Ge;try{if(Mn.transition=null,Ge=1,t)return t()}finally{Ge=i,Mn.transition=n,ze=e,!(ze&6)&&Qi()}}function Df(){on=ds.current,Ye(ds)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),at!==null)for(n=at.return;n!==null;){var i=n;switch(df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:As(),Ye(Xt),Ye(Nt),yf();break;case 5:xf(i);break;case 4:As();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:mf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(yt=t,at=t=$i(t.current,null),bt=on=e,ft=0,Go=null,Af=Zl=br=0,Wt=So=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function Kv(t,e){do{var n=at;try{if(pf(),tl.current=Ll,Pl){for(var i=Je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Er=0,xt=dt=Je=null,xo=!1,Bo=0,Cf.current=null,n===null||n.return===null){ft=1,Go=e,at=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=ip(o);if(g!==null){g.flags&=-257,rp(g,o,a,s,e),g.mode&1&&np(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){np(s,u,e),Rf();break e}l=Error(te(426))}}else if(Ke&&a.mode&1){var p=ip(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),rp(p,o,a,s,e),ff(Ps(l,a));break e}}s=l=Ps(l,a),ft!==4&&(ft=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Iv(s,l,e);qh(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Nv(s,a,e);qh(s,w);break e}}s=s.return}while(s!==null)}Jv(n)}catch(S){e=S,at===n&&n!==null&&(at=n=n.return);continue}break}while(1)}function Zv(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Rf(){(ft===0||ft===3||ft===2)&&(ft=4),yt===null||!(br&268435455)&&!(Zl&268435455)||ki(yt,bt)}function Nl(t,e){var n=ze;ze|=2;var i=Zv();(yt!==t||bt!==e)&&(ai=null,_r(t,e));do try{Ey();break}catch(r){Kv(t,r)}while(1);if(pf(),ze=n,Dl.current=i,at!==null)throw Error(te(261));return yt=null,bt=0,ft}function Ey(){for(;at!==null;)Qv(at)}function by(){for(;at!==null&&!K_();)Qv(at)}function Qv(t){var e=t0(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Jv(t):at=e,Cf.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,at=null;return}}else if(n=vy(n,e,on),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);ft===0&&(ft=5)}function ar(t,e,n){var i=Ge,r=Mn.transition;try{Mn.transition=null,Ge=1,Ty(t,e,n,i)}finally{Mn.transition=r,Ge=i}return null}function Ty(t,e,n,i){do Ss();while(Oi!==null);if(ze&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ox(t,s),t===yt&&(at=yt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,n0(ml,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Ge;Ge=1;var a=ze;ze|=4,Cf.current=null,yy(t,n),Xv(n,t),jx(ed),vl=!!Jc,ed=Jc=null,t.current=n,Sy(n),Z_(),ze=a,Ge=o,Mn.transition=s}else t.current=n;if(wa&&(wa=!1,Oi=t,Il=r),s=t.pendingLanes,s===0&&(Gi=null),ex(n.stateNode),qt(t,it()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=yd,yd=null,t;return Il&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Sd?wo++:(wo=0,Sd=t):wo=0,Qi(),null}function Ss(){if(Oi!==null){var t=Rg(Il),e=Mn.transition,n=Ge;try{if(Mn.transition=null,Ge=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Il=0,ze&6)throw Error(te(331));var r=ze;for(ze|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var d=c.sibling,g=c.return;if(Wv(c),c===u){me=null;break}if(d!==null){d.return=g,me=d;break}me=g}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,me=m;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(S){tt(a,a.return,S)}if(a===o){me=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,me=w;break e}me=a.return}}if(ze=r,Qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{Ge=n,Mn.transition=e}}return!1}function vp(t,e,n){e=Ps(n,e),e=Iv(t,e,1),t=Hi(t,e,1),e=Bt(),t!==null&&(Qo(t,1,e),qt(t,e))}function tt(t,e,n){if(t.tag===3)vp(t,t,n);else for(;e!==null;){if(e.tag===3){vp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ps(n,t),t=Nv(e,t,1),e=Hi(e,t,1),t=Bt(),e!==null&&(Qo(e,1,t),qt(e,t));break}}e=e.return}}function Cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(bt&n)===n&&(ft===4||ft===3&&(bt&130023424)===bt&&500>it()-Pf?_r(t,0):Af|=n),qt(t,e)}function e0(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=Bt();t=Si(t,e),t!==null&&(Qo(t,e,n),qt(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e0(t,n)}function Py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),e0(t,n)}var t0;t0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,gy(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ke&&e.flags&1048576&&rv(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=bs(e,Nt.current);ys(e,n),r=wf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(i)?(s=!0,wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vf(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,ud(e,i,t,n),e=fd(null,e,i,!0,s,n)):(e.tag=0,Ke&&s&&cf(e),Ut(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=Rn(i,t),r){case 0:e=dd(null,e,i,t,n);break e;case 1:e=ap(null,e,i,t,n);break e;case 11:e=sp(null,e,i,t,n);break e;case 14:e=op(null,e,i,Rn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),ap(t,e,i,r,n);case 3:e:{if(zv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lv(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(te(423)),e),e=lp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(te(424)),e),e=lp(t,e,i,n,r);break e}else for(un=Vi(e.stateNode.containerInfo.firstChild),dn=e,Ke=!0,Nn=null,n=fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=wi(t,e,n);break e}Ut(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,td(i,r)?o=null:s!==null&&td(i,s)&&(e.flags|=32),Ov(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&od(e),null;case 13:return Uv(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cs(e,null,i,n):Ut(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),sp(t,e,i,r,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(bl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!Xt.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ad(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=bn(r),i=i(r),e.flags|=1,Ut(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),op(t,e,i,r,n);case 15:return kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),il(t,e),e.tag=1,Yt(i)?(t=!0,wl(e)):t=!1,ys(e,n),cv(e,i,r),ud(e,i,r,n),fd(null,e,i,!0,t,n);case 19:return Bv(t,e,n);case 22:return Fv(t,e,n)}throw Error(te(156,e.tag))};function n0(t,e){return Ag(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new Ly(t,e,n,i)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===Qd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return xr(n.children,r,s,e);case Kd:o=8,r|=8;break;case Ic:return t=wn(12,n,e,r|2),t.elementType=Ic,t.lanes=s,t;case Nc:return t=wn(13,n,e,r),t.elementType=Nc,t.lanes=s,t;case kc:return t=wn(19,n,e,r),t.elementType=kc,t.lanes=s,t;case dg:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ug:o=10;break e;case cg:o=9;break e;case Zd:o=11;break e;case Qd:o=14;break e;case Di:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=wn(22,t,i,e),t.elementType=dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ry(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wu(0),this.expirationTimes=wu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,o,a,l){return t=new Ry(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function Iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i0(t){if(!t)return Yi;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Yt(n))return nv(t,n,e)}return e}function r0(t,e,n,i,r,s,o,a,l){return t=Nf(n,i,!0,t,r,s,o,a,l),t.context=i0(null),n=t.current,i=Bt(),r=Wi(n),s=gi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Qo(t,r,i),qt(t,i),t}function Jl(t,e,n,i){var r=e.current,s=Bt(),o=Wi(r);return n=i0(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Un(t,r,o,s),el(t,r,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){_p(t,e),(t=t.alternate)&&_p(t,e)}function Ny(){return null}var s0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}eu.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Jl(t,e,null,null)};eu.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Jl(null,t,null,null)}),e[yi]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Og(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function ky(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=kl(o);s.call(u)}}var o=r0(e,i,t,0,null,!1,!1,"",xp);return t._reactRootContainer=o,t[yi]=o.current,ko(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=kl(l);a.call(u)}}var l=Nf(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=l,t[yi]=l.current,ko(t.nodeType===8?t.parentNode:t),Tr(function(){Jl(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kl(o);a.call(l)}}Jl(e,o,t,r)}else o=ky(n,e,t,r,i);return kl(o)}Ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(tf(e,n|1),qt(e,it()),!(ze&6)&&(Ls=it()+500,Qi()))}break;case 13:Tr(function(){var i=Si(t,1);if(i!==null){var r=Bt();Un(i,t,1,r)}}),kf(t,1)}};nf=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}kf(t,134217728)}};Ng=function(t){if(t.tag===13){var e=Wi(t),n=Si(t,e);if(n!==null){var i=Bt();Un(n,t,e,i)}kf(t,e)}};kg=function(){return Ge};Fg=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};$c=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=jl(i);if(!r)throw Error(te(90));hg(i),zc(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};wg=Lf;Mg=Tr;var Fy={usingClientEntryPoint:!1,Events:[ea,ss,jl,yg,Sg,Lf]},Ks={findFiberByHostInstance:fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Oy={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{Hl=Ma.inject(Oy),qn=Ma}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(te(200));return Iy(t,e,null,n)};hn.createRoot=function(t,e){if(!Of(t))throw Error(te(299));var n=!1,i="",r=s0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,ko(t.nodeType===8?t.parentNode:t),new Ff(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Tr(t)};hn.hydrate=function(t,e,n){if(!tu(e))throw Error(te(200));return nu(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r0(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};hn.render=function(t,e,n){if(!tu(e))throw Error(te(200));return nu(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(te(40));return t._reactRootContainer?(Tr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};hn.unstable_batchedUpdates=Lf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return nu(t,e,n,!1,i)};hn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=hn})(N_);const fs=Zm(dl);var yp=dl;Lc.createRoot=yp.createRoot,Lc.hydrateRoot=yp.hydrateRoot;var Ed={},zy={get exports(){return Ed},set exports(t){Ed=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var o=typeof s;if(o==="string"||o==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&i.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&i.push(l)}}}return i.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(zy);const wt=Ed,Uy=["xxl","xl","lg","md","sm","xs"],By="xs",Vy=K.createContext({prefixes:{},breakpoints:Uy,minBreakpoint:By});function Jt(t,e){const{prefixes:n}=K.useContext(Vy);return t||n[e]||e}const Hy={fluid:!1},zf=K.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:i,...r},s)=>{const o=Jt(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return ce(n,{ref:s,...r,className:wt(i,e?`${o}${a}`:o)})});zf.displayName="Container";zf.defaultProps=Hy;var bd={},Gy={get exports(){return bd},set exports(t){bd=t}},Fl={},Wy={get exports(){return Fl},set exports(t){Fl=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(i){function r(o,a,l,u,c,f){var d=u||"<<anonymous>>",g=f||l;if(a[l]==null)return o?new Error("Required "+c+" `"+g+"` was not specified "+("in `"+d+"`.")):null;for(var x=arguments.length,h=Array(x>6?x-6:0),p=6;p<x;p++)h[p-6]=arguments[p];return i.apply(void 0,[a,l,d,c,g].concat(h))}var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}t.exports=e.default})(Wy,Fl);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Fl,i=r(n);function r(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,f=Array(c),d=0;d<c;d++)f[d]=arguments[d];var g=null;return a.forEach(function(x){if(g==null){var h=x.apply(void 0,f);h!=null&&(g=h)}}),g}return(0,i.default)(u)}t.exports=e.default})(Gy,bd);function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Td.apply(this,arguments)}function o0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Sp(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function $y(t){var e=jy(t,"string");return typeof e=="symbol"?e:String(e)}function jy(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xy(t,e,n){var i=K.useRef(t!==void 0),r=K.useState(e),s=r[0],o=r[1],a=t!==void 0,l=i.current;return i.current=a,!a&&l&&s!==e&&o(e),[a?t:s,K.useCallback(function(u){for(var c=arguments.length,f=new Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(f)),o(u)},[n])]}function Uf(t,e){return Object.keys(e).reduce(function(n,i){var r,s=n,o=s[Sp(i)],a=s[i],l=o0(s,[Sp(i),i].map($y)),u=e[i],c=Xy(a,o,t[u]),f=c[0],d=c[1];return Td({},l,(r={},r[i]=f,r[u]=d,r))},t)}function Cd(t,e){return Cd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Cd(t,e)}function Yy(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Cd(t,e)}var qy=Function.prototype.bind.call(Function.prototype.call,[].slice);function lr(t,e){return qy(t.querySelectorAll(e))}function Ky(){var t=K.useReducer(function(n){return!n},!1),e=t[1];return e}var wp=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function Zy(t,e){var n=wp(t),i=wp(e);return function(r){n&&n(r),i&&i(r)}}function a0(t,e){return K.useMemo(function(){return Zy(t,e)},[t,e])}const Bf=K.createContext(null);Bf.displayName="NavContext";const Ol=K.createContext(null),iu=(t,e=null)=>t!=null?String(t):e||null,l0=K.createContext(null),Qy="data-rr-ui-",Jy="rrUi";function ru(t){return`${Qy}${t}`}function eS(t){return`${Jy}${t}`}function tS(t){var e=K.useRef(t);return K.useEffect(function(){e.current=t},[t]),e}function Fn(t){var e=tS(t);return K.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const nS=["as","disabled"];function iS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function rS(t){return!t||t.trim()==="#"}function u0({tagName:t,disabled:e,href:n,target:i,rel:r,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||i!=null||r!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&rS(n))&&d.preventDefault(),e){d.stopPropagation();return}o?.(d)},f=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?i:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:c,onKeyDown:f},u]}const c0=K.forwardRef((t,e)=>{let{as:n,disabled:i}=t,r=iS(t,nS);const[s,{tagName:o}]=u0(Object.assign({tagName:n,disabled:i},r));return ce(o,Object.assign({},r,s,{ref:e}))});c0.displayName="Button";const sS=["as","active","eventKey"];function oS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Vf({key:t,onClick:e,active:n,id:i,role:r,disabled:s}){const o=K.useContext(Ol),a=K.useContext(Bf),l=K.useContext(l0);let u=n;const c={role:r};if(a){!r&&a.role==="tablist"&&(c.role="tab");const f=a.getControllerId(t??null),d=a.getControlledId(t??null);c[ru("event-key")]=t,c.id=f||i,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Fn(f=>{s||(e?.(f),t!=null&&o&&!f.isPropagationStopped()&&o(t,f))}),[c,{isActive:u}]}const d0=K.forwardRef((t,e)=>{let{as:n=c0,active:i,eventKey:r}=t,s=oS(t,sS);const[o,a]=Vf(Object.assign({key:iu(r,s.href),active:i},s));return o[ru("active")]=a.isActive,ce(n,Object.assign({},s,o,{ref:e}))});d0.displayName="NavItem";const aS=["as","onSelect","activeKey","role","onKeyDown"];function lS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const Mp=()=>{},Ep=ru("event-key"),f0=K.forwardRef((t,e)=>{let{as:n="div",onSelect:i,activeKey:r,role:s,onKeyDown:o}=t,a=lS(t,aS);const l=Ky(),u=K.useRef(!1),c=K.useContext(Ol),f=K.useContext(l0);let d,g;f&&(s=s||"tablist",r=f.activeKey,d=f.getControlledId,g=f.getControllerId);const x=K.useRef(null),h=_=>{const w=x.current;if(!w)return null;const S=lr(w,`[${Ep}]:not([aria-disabled=true])`),T=w.querySelector("[aria-selected=true]");if(!T||T!==document.activeElement)return null;const P=S.indexOf(T);if(P===-1)return null;let y=P+_;return y>=S.length&&(y=0),y<0&&(y=S.length-1),S[y]},p=(_,w)=>{_!=null&&(i?.(_,w),c?.(_,w))},m=_=>{if(o?.(_),!f)return;let w;switch(_.key){case"ArrowLeft":case"ArrowUp":w=h(-1);break;case"ArrowRight":case"ArrowDown":w=h(1);break;default:return}w&&(_.preventDefault(),p(w.dataset[eS("EventKey")]||null,_),u.current=!0,l())};K.useEffect(()=>{if(x.current&&u.current){const _=x.current.querySelector(`[${Ep}][aria-selected=true]`);_?.focus()}u.current=!1});const v=a0(e,x);return ce(Ol.Provider,{value:p,children:ce(Bf.Provider,{value:{role:s,activeKey:iu(r),getControlledId:d||Mp,getControllerId:g||Mp},children:ce(n,Object.assign({},a,{onKeyDown:m,ref:v,role:s}))})})});f0.displayName="Nav";const h0=Object.assign(f0,{Item:d0}),Rr=K.createContext(null);Rr.displayName="NavbarContext";const p0=K.createContext(null);p0.displayName="CardHeaderContext";var uS=/-(.)/g;function cS(t){return t.replace(uS,function(e,n){return n.toUpperCase()})}const dS=t=>t[0].toUpperCase()+cS(t).slice(1);function su(t,{displayName:e=dS(t),Component:n,defaultProps:i}={}){const r=K.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=Jt(o,t);return ce(a,{ref:u,className:wt(s,c),...l})});return r.defaultProps=i,r.displayName=e,r}const fS=su("nav-item");function hS(){var t=K.useRef(!0),e=K.useRef(function(){return t.current});return K.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function pS(t){var e=K.useRef(null);return K.useEffect(function(){e.current=t}),e.current}var mS=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",gS=typeof document<"u";const vS=gS||mS?K.useLayoutEffect:K.useEffect,_S=["onKeyDown"];function xS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function yS(t){return!t||t.trim()==="#"}const m0=K.forwardRef((t,e)=>{let{onKeyDown:n}=t,i=xS(t,_S);const[r]=u0(Object.assign({tagName:"a"},i)),s=Fn(o=>{r.onKeyDown(o),n?.(o)});return yS(i.href)||i.role==="button"?ce("a",Object.assign({ref:e},i,r,{onKeyDown:s})):ce("a",Object.assign({ref:e},i,{onKeyDown:n}))});m0.displayName="Anchor";const SS={disabled:!1},Hf=K.forwardRef(({bsPrefix:t,className:e,as:n=m0,active:i,eventKey:r,...s},o)=>{t=Jt(t,"nav-link");const[a,l]=Vf({key:iu(r,s.href),active:i,...s});return ce(n,{...s,...a,ref:o,className:wt(e,t,s.disabled&&"disabled",l.isActive&&"active")})});Hf.displayName="NavLink";Hf.defaultProps=SS;const wS={justify:!1,fill:!1},Gf=K.forwardRef((t,e)=>{const{as:n="div",bsPrefix:i,variant:r,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:c,...f}=Uf(t,{activeKey:"onSelect"}),d=Jt(i,"nav");let g,x,h=!1;const p=K.useContext(Rr),m=K.useContext(p0);return p?(g=p.bsPrefix,h=a??!0):m&&({cardHeaderBsPrefix:x}=m),ce(h0,{as:n,ref:e,activeKey:c,className:wt(u,{[d]:!h,[`${g}-nav`]:h,[`${g}-nav-scroll`]:h&&l,[`${x}-${r}`]:!!x,[`${d}-${r}`]:!!r,[`${d}-fill`]:s,[`${d}-justified`]:o}),...f})});Gf.displayName="Nav";Gf.defaultProps=wS;const Gu=Object.assign(Gf,{Item:fS,Link:Hf}),g0=K.forwardRef(({bsPrefix:t,className:e,as:n,...i},r)=>{t=Jt(t,"navbar-brand");const s=n||(i.href?"a":"span");return ce(s,{...i,ref:r,className:wt(e,t)})});g0.displayName="NavbarBrand";function Wf(t){return t&&t.ownerDocument||document}function MS(t){var e=Wf(t);return e&&e.defaultView||window}function ES(t,e){return MS(t).getComputedStyle(t,e)}var bS=/([A-Z])/g;function TS(t){return t.replace(bS,"-$1").toLowerCase()}var CS=/^ms-/;function Ea(t){return TS(t).replace(CS,"-ms-")}var AS=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function PS(t){return!!(t&&AS.test(t))}function vi(t,e){var n="",i="";if(typeof e=="string")return t.style.getPropertyValue(Ea(e))||ES(t).getPropertyValue(Ea(e));Object.keys(e).forEach(function(r){var s=e[r];!s&&s!==0?t.style.removeProperty(Ea(r)):PS(r)?i+=r+"("+s+") ":n+=Ea(r)+": "+s+";"}),i&&(n+="transform: "+i+";"),t.style.cssText+=";"+n}var Mo={},LS={get exports(){return Mo},set exports(t){Mo=t}},DS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RS=DS,IS=RS;function v0(){}function _0(){}_0.resetWarningCache=v0;var NS=function(){function t(i,r,s,o,a,l){if(l!==IS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_0,resetWarningCache:v0};return n.PropTypes=n,n};LS.exports=NS();const bp={disabled:!1},x0=Xn.createContext(null);var kS=function(e){return e.scrollTop},uo="unmounted",Ii="exited",kn="entering",di="entered",Wo="exiting",Ei=function(t){Yy(e,t);function e(i,r){var s;s=t.call(this,i,r)||this;var o=r,a=o&&!o.isMounting?i.enter:i.appear,l;return s.appearStatus=null,i.in?a?(l=Ii,s.appearStatus=kn):l=di:i.unmountOnExit||i.mountOnEnter?l=uo:l=Ii,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(r,s){var o=r.in;return o&&s.status===uo?{status:Ii}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var s=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==kn&&o!==di&&(s=kn):(o===kn||o===di)&&(s=Wo)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,s,o,a;return s=o=a=r,r!=null&&typeof r!="number"&&(s=r.exit,o=r.enter,a=r.appear!==void 0?r.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(r,s){if(r===void 0&&(r=!1),s!==null)if(this.cancelNextCallback(),s===kn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:fs.findDOMNode(this);o&&kS(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ii&&this.setState({status:uo})},n.performEnter=function(r){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[fs.findDOMNode(this),a],u=l[0],c=l[1],f=this.getTimeouts(),d=a?f.appear:f.enter;if(!r&&!o||bp.disabled){this.safeSetState({status:di},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:kn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:di},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var r=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:fs.findDOMNode(this);if(!s||bp.disabled){this.safeSetState({status:Ii},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Wo},function(){r.props.onExiting(a),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:Ii},function(){r.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,s){s=this.setNextCallback(s),this.setState(r,s)},n.setNextCallback=function(r){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,r(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(r,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:fs.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===uo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=o0(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Xn.createElement(x0.Provider,{value:null},typeof o=="function"?o(r,a):Xn.cloneElement(Xn.Children.only(o),a))},e}(Xn.Component);Ei.contextType=x0;Ei.propTypes={};function kr(){}Ei.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:kr,onEntering:kr,onEntered:kr,onExit:kr,onExiting:kr,onExited:kr};Ei.UNMOUNTED=uo;Ei.EXITED=Ii;Ei.ENTERING=kn;Ei.ENTERED=di;Ei.EXITING=Wo;const ou=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ad=!1,Pd=!1;try{var Wu={get passive(){return Ad=!0},get once(){return Pd=Ad=!0}};ou&&(window.addEventListener("test",Wu,Wu),window.removeEventListener("test",Wu,!0))}catch{}function FS(t,e,n,i){if(i&&typeof i!="boolean"&&!Pd){var r=i.once,s=i.capture,o=n;!Pd&&r&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Ad?i:s)}t.addEventListener(e,n,i)}function OS(t,e,n,i){var r=i&&typeof i!="boolean"?i.capture:i;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function zl(t,e,n,i){return FS(t,e,n,i),function(){OS(t,e,n,i)}}function zS(t,e,n,i){if(n===void 0&&(n=!1),i===void 0&&(i=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,i),t.dispatchEvent(r)}}function US(t){var e=vi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function BS(t,e,n){n===void 0&&(n=5);var i=!1,r=setTimeout(function(){i||zS(t,"transitionend",!0)},e+n),s=zl(t,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(r),s()}}function VS(t,e,n,i){n==null&&(n=US(t)||0);var r=BS(t,n,i),s=zl(t,"transitionend",e);return function(){r(),s()}}function Tp(t,e){const n=vi(t,e)||"",i=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*i}function $f(t,e){const n=Tp(t,"transitionDuration"),i=Tp(t,"transitionDelay"),r=VS(t,s=>{s.target===t&&(r(),e(s))},n+i)}function Zs(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...r){e.apply(this,r),n.apply(this,r)}},null)}function y0(t){t.offsetHeight}function HS(t){return t&&"setState"in t?fs.findDOMNode(t):t??null}const jf=Xn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const f=K.useRef(null),d=a0(f,l),g=T=>{d(HS(T))},x=T=>P=>{T&&f.current&&T(f.current,P)},h=K.useCallback(x(t),[t]),p=K.useCallback(x(e),[e]),m=K.useCallback(x(n),[n]),v=K.useCallback(x(i),[i]),_=K.useCallback(x(r),[r]),w=K.useCallback(x(s),[s]),S=K.useCallback(x(o),[o]);return ce(Ei,{ref:c,...u,onEnter:h,onEntered:m,onEntering:p,onExit:v,onExited:w,onExiting:_,addEndListener:S,nodeRef:f,children:typeof a=="function"?(T,P)=>a(T,{...P,ref:g}):Xn.cloneElement(a,{ref:g})})}),GS={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function S0(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,i=e[n],r=GS[t];return i+parseInt(vi(e,r[0]),10)+parseInt(vi(e,r[1]),10)}const WS={[Ii]:"collapse",[Wo]:"collapsing",[kn]:"collapsing",[di]:"collapse show"},$S={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:S0},w0=Xn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,className:s,children:o,dimension:a="height",getDimensionValue:l=S0,...u},c)=>{const f=typeof a=="function"?a():a,d=K.useMemo(()=>Zs(m=>{m.style[f]="0"},t),[f,t]),g=K.useMemo(()=>Zs(m=>{const v=`scroll${f[0].toUpperCase()}${f.slice(1)}`;m.style[f]=`${m[v]}px`},e),[f,e]),x=K.useMemo(()=>Zs(m=>{m.style[f]=null},n),[f,n]),h=K.useMemo(()=>Zs(m=>{m.style[f]=`${l(f,m)}px`,y0(m)},i),[i,l,f]),p=K.useMemo(()=>Zs(m=>{m.style[f]=null},r),[f,r]);return ce(jf,{ref:c,addEndListener:$f,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:g,onEntered:x,onExit:h,onExiting:p,childRef:o.ref,children:(m,v)=>Xn.cloneElement(o,{...v,className:wt(s,o.props.className,WS[m],f==="width"&&"collapse-horizontal")})})});w0.defaultProps=$S;const M0=K.forwardRef(({children:t,bsPrefix:e,...n},i)=>{e=Jt(e,"navbar-collapse");const r=K.useContext(Rr);return ce(w0,{in:!!(r&&r.expanded),...n,children:ce("div",{ref:i,className:e,children:t})})});M0.displayName="NavbarCollapse";const jS={label:"Toggle navigation"},Xf=K.forwardRef(({bsPrefix:t,className:e,children:n,label:i,as:r="button",onClick:s,...o},a)=>{t=Jt(t,"navbar-toggler");const{onToggle:l,expanded:u}=K.useContext(Rr)||{},c=Fn(f=>{s&&s(f),l&&l()});return r==="button"&&(o.type="button"),ce(r,{...o,ref:a,onClick:c,"aria-label":i,className:wt(e,t,!u&&"collapsed"),children:n||ce("span",{className:`${t}-icon`})})});Xf.displayName="NavbarToggle";Xf.defaultProps=jS;var Ld=new WeakMap,Cp=function(e,n){if(!(!e||!n)){var i=Ld.get(n)||new Map;Ld.set(n,i);var r=i.get(e);return r||(r=n.matchMedia(e),r.refCount=0,i.set(r.media,r)),r}};function XS(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=Cp(t,e),i=K.useState(function(){return n?n.matches:!1}),r=i[0],s=i[1];return vS(function(){var o=Cp(t,e);if(!o)return s(!1);var a=Ld.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&a?.delete(o.media),o=void 0}},[t]),r}function YS(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function i(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function r(a){var l=i(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var f;l=l||!0,c=(f={},f[a]=l,f)}var d=K.useMemo(function(){return Object.entries(c).reduce(function(g,x){var h=x[0],p=x[1];return(p==="up"||p===!0)&&(g=n(g,s(h))),(p==="down"||p===!0)&&(g=n(g,r(h))),g},"")},[JSON.stringify(c)]);return XS(d,u)}return o}var qS=YS({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function $u(t){t===void 0&&(t=Wf());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Ap(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function KS(t){var e=K.useRef(t);return e.current=t,e}function ZS(t){var e=KS(t);K.useEffect(function(){return function(){return e.current()}},[])}function QS(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Pp=ru("modal-open");class Yf{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:i=!1}={}){this.handleContainerOverflow=n,this.isRTL=i,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return QS(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[i]:r.style[i]},e.scrollBarWidth&&(n[i]=`${parseInt(vi(r,i)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Pp,""),vi(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Pp),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const E0=K.createContext(ou?window:void 0);E0.Provider;function b0(){return K.useContext(E0)}const ju=(t,e)=>ou?t==null?(e||Wf()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function JS(t,e){const n=b0(),[i,r]=K.useState(()=>ju(t,n?.document));if(!i){const s=ju(t);s&&r(s)}return K.useEffect(()=>{e&&i&&e(i)},[e,i]),K.useEffect(()=>{const s=ju(t);s!==i&&r(s)},[t,i]),i}const e1=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function t1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let Xu;function n1(t){return Xu||(Xu=new Yf({ownerDocument:t?.document})),Xu}function i1(t){const e=b0(),n=t||n1(e),i=K.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>n.add(i.current),remove:()=>n.remove(i.current),isTopModal:()=>n.isTopModal(i.current),setDialogRef:K.useCallback(r=>{i.current.dialog=r},[]),setBackdropRef:K.useCallback(r=>{i.current.backdrop=r},[])})}const T0=K.forwardRef((t,e)=>{let{show:n=!1,role:i="dialog",className:r,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:f,backdropTransition:d,autoFocus:g=!0,enforceFocus:x=!0,restoreFocus:h=!0,restoreFocusOptions:p,renderDialog:m,renderBackdrop:v=le=>ce("div",Object.assign({},le)),manager:_,container:w,onShow:S,onHide:T=()=>{},onExit:P,onExited:y,onExiting:A,onEnter:L,onEntering:$,onEntered:re}=t,N=t1(t,e1);const I=JS(w),G=i1(_),J=hS(),Z=pS(n),[D,W]=K.useState(!n),V=K.useRef(null);K.useImperativeHandle(e,()=>G,[G]),ou&&!Z&&n&&(V.current=$u()),!f&&!n&&!D?W(!0):n&&D&&W(!1);const O=Fn(()=>{if(G.add(),Te.current=zl(document,"keydown",ie),H.current=zl(document,"focus",()=>setTimeout(Q),!0),S&&S(),g){const le=$u(document);G.dialog&&le&&!Ap(G.dialog,le)&&(V.current=le,G.dialog.focus())}}),B=Fn(()=>{if(G.remove(),Te.current==null||Te.current(),H.current==null||H.current(),h){var le;(le=V.current)==null||le.focus==null||le.focus(p),V.current=null}});K.useEffect(()=>{!n||!I||O()},[n,I,O]),K.useEffect(()=>{D&&B()},[D,B]),ZS(()=>{B()});const Q=Fn(()=>{if(!x||!J()||!G.isTopModal())return;const le=$u();G.dialog&&le&&!Ap(G.dialog,le)&&G.dialog.focus()}),ee=Fn(le=>{le.target===le.currentTarget&&(u?.(le),a===!0&&T())}),ie=Fn(le=>{l&&le.keyCode===27&&G.isTopModal()&&(c?.(le),le.defaultPrevented||T())}),H=K.useRef(),Te=K.useRef(),ve=(...le)=>{W(!0),y?.(...le)},Se=f;if(!I||!(n||Se&&!D))return null;const he=Object.assign({role:i,ref:G.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},N,{style:s,className:r,tabIndex:-1});let Re=m?m(he):ce("div",Object.assign({},he,{children:K.cloneElement(o,{role:"document"})}));Se&&(Re=ce(Se,{appear:!0,unmountOnExit:!0,in:!!n,onExit:P,onExiting:A,onExited:ve,onEnter:L,onEntering:$,onEntered:re,children:Re}));let be=null;if(a){const le=d;be=v({ref:G.setBackdropRef,onClick:ee}),le&&(be=ce(le,{appear:!0,in:!!n,children:be}))}return ce(cl,{children:fs.createPortal(On(cl,{children:[be,Re]}),I)})});T0.displayName="Modal";const r1=Object.assign(T0,{Manager:Yf}),s1={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},o1={[kn]:"show",[di]:"show"},qf=K.forwardRef(({className:t,children:e,transitionClasses:n={},...i},r)=>{const s=K.useCallback((o,a)=>{y0(o),i.onEnter==null||i.onEnter(o,a)},[i]);return ce(jf,{ref:r,addEndListener:$f,...i,onEnter:s,childRef:e.ref,children:(o,a)=>K.cloneElement(e,{...a,className:wt("fade",t,e.props.className,o1[o],n[o])})})});qf.defaultProps=s1;qf.displayName="Fade";const a1=su("offcanvas-body"),l1={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},u1={[kn]:"show",[di]:"show"},Kf=K.forwardRef(({bsPrefix:t,className:e,children:n,...i},r)=>(t=Jt(t,"offcanvas"),ce(jf,{ref:r,addEndListener:$f,...i,childRef:n.ref,children:(s,o)=>K.cloneElement(n,{...o,className:wt(e,n.props.className,(s===kn||s===Wo)&&`${t}-toggling`,u1[s])})})));Kf.defaultProps=l1;Kf.displayName="OffcanvasToggling";const C0=K.createContext({onHide(){}}),c1={"aria-label":Mo.string,onClick:Mo.func,variant:Mo.oneOf(["white"])},d1={"aria-label":"Close"},au=K.forwardRef(({className:t,variant:e,...n},i)=>ce("button",{ref:i,type:"button",className:wt("btn-close",e&&`btn-close-${e}`,t),...n}));au.displayName="CloseButton";au.propTypes=c1;au.defaultProps=d1;const f1={closeLabel:"Close",closeButton:!1},A0=K.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:i,children:r,...s},o)=>{const a=K.useContext(C0),l=Fn(()=>{a?.onHide(),i?.()});return On("div",{ref:o,...s,children:[r,n&&ce(au,{"aria-label":t,variant:e,onClick:l})]})});A0.defaultProps=f1;const h1={closeLabel:"Close",closeButton:!1},Zf=K.forwardRef(({bsPrefix:t,className:e,...n},i)=>(t=Jt(t,"offcanvas-header"),ce(A0,{ref:i,...n,className:wt(e,t)})));Zf.displayName="OffcanvasHeader";Zf.defaultProps=h1;const p1=t=>K.forwardRef((e,n)=>ce("div",{...e,ref:n,className:wt(e.className,t)})),m1=p1("h5"),g1=su("offcanvas-title",{Component:m1});function v1(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function _1(t,e){t.classList?t.classList.add(e):v1(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Lp(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function x1(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Lp(t.className,e):t.setAttribute("class",Lp(t.className&&t.className.baseVal||"",e))}const Fr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class P0 extends Yf{adjustAndStore(e,n,i){const r=n.style[e];n.dataset[e]=r,vi(n,{[e]:`${parseFloat(vi(n,e))+i}px`})}restore(e,n){const i=n.dataset[e];i!==void 0&&(delete n.dataset[e],vi(n,{[e]:i}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(_1(n,"modal-open"),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";lr(n,Fr.FIXED_CONTENT).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth)),lr(n,Fr.STICKY_CONTENT).forEach(s=>this.adjustAndStore(r,s,-e.scrollBarWidth)),lr(n,Fr.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();x1(n,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";lr(n,Fr.FIXED_CONTENT).forEach(s=>this.restore(i,s)),lr(n,Fr.STICKY_CONTENT).forEach(s=>this.restore(r,s)),lr(n,Fr.NAVBAR_TOGGLER).forEach(s=>this.restore(r,s))}}let Yu;function y1(t){return Yu||(Yu=new P0(t)),Yu}const S1={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function w1(t){return ce(Kf,{...t})}function M1(t){return ce(qf,{...t})}const Qf=K.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":i,placement:r,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:f,onHide:d,container:g,autoFocus:x,enforceFocus:h,restoreFocus:p,restoreFocusOptions:m,onEntered:v,onExit:_,onExiting:w,onEnter:S,onEntering:T,onExited:P,backdropClassName:y,manager:A,renderStaticNode:L,...$},re)=>{const N=K.useRef();t=Jt(t,"offcanvas");const{onToggle:I}=K.useContext(Rr)||{},[G,J]=K.useState(!1),Z=qS(s||"xs","up");K.useEffect(()=>{J(s?o&&!Z:o)},[o,s,Z]);const D=Fn(()=>{I?.(),d?.()}),W=K.useMemo(()=>({onHide:D}),[D]);function V(){return A||(u?(N.current||(N.current=new P0({handleContainerOverflow:!1})),N.current):y1())}const O=(ie,...H)=>{ie&&(ie.style.visibility="visible"),S?.(ie,...H)},B=(ie,...H)=>{ie&&(ie.style.visibility=""),P?.(...H)},Q=K.useCallback(ie=>ce("div",{...ie,className:wt(`${t}-backdrop`,y)}),[y,t]),ee=ie=>ce("div",{...ie,...$,className:wt(e,s?`${t}-${s}`:t,`${t}-${r}`),"aria-labelledby":i,children:n});return On(cl,{children:[!G&&(s||L)&&ee({}),ce(C0.Provider,{value:W,children:ce(r1,{show:G,ref:re,backdrop:a,container:g,keyboard:l,autoFocus:x,enforceFocus:h&&!u,restoreFocus:p,restoreFocusOptions:m,onEscapeKeyDown:c,onShow:f,onHide:D,onEnter:O,onEntering:T,onEntered:v,onExit:_,onExiting:w,onExited:B,manager:V(),transition:w1,backdropTransition:M1,renderBackdrop:Q,renderDialog:ee})})]})});Qf.displayName="Offcanvas";Qf.defaultProps=S1;const E1=Object.assign(Qf,{Body:a1,Header:Zf,Title:g1}),L0=K.forwardRef((t,e)=>{const n=K.useContext(Rr);return ce(E1,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});L0.displayName="NavbarOffcanvas";const b1=su("navbar-text",{Component:"span"}),T1={expand:!0,variant:"light",collapseOnSelect:!1},Jf=K.forwardRef((t,e)=>{const{bsPrefix:n,expand:i,variant:r,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:f,onSelect:d,collapseOnSelect:g,...x}=Uf(t,{expanded:"onToggle"}),h=Jt(n,"navbar"),p=K.useCallback((..._)=>{d?.(..._),g&&c&&f?.(!1)},[d,g,c,f]);x.role===void 0&&u!=="nav"&&(x.role="navigation");let m=`${h}-expand`;typeof i=="string"&&(m=`${m}-${i}`);const v=K.useMemo(()=>({onToggle:()=>f?.(!c),bsPrefix:h,expanded:!!c,expand:i}),[h,c,i,f]);return ce(Rr.Provider,{value:v,children:ce(Ol.Provider,{value:p,children:ce(u,{ref:e,...x,className:wt(l,h,i&&m,r&&`${h}-${r}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});Jf.defaultProps=T1;Jf.displayName="Navbar";const ba=Object.assign(Jf,{Brand:g0,Collapse:M0,Offcanvas:L0,Text:b1,Toggle:Xf});const C1=()=>On("div",{style:{textAlign:"center"},children:[ce("img",{src:"profile.jpeg",style:{marginTop:"30px",marginBottom:"30px",width:150,height:150,borderRadius:"50%",objectFit:"cover"}}),On("div",{className:"container",style:{color:"white",maxWidth:"450px"},children:[ce("p",{style:{},children:"Hey there! I'm a master's student in AI at Maastricht University and I'm currently doing my research internship at the University of Amsterdam. I'm super passionate about deep learning, computer science, and blockchain technologies."}),ce("p",{children:"I give private lessons in the field of computer programming, artificial intelligence (deep learning) and machine learning. I'm also available as a consultant for your project or thesis. Please check out the Contact section if you are interested."})]})]}),D0=K.forwardRef(({bsPrefix:t,active:e,disabled:n,eventKey:i,className:r,variant:s,action:o,as:a,...l},u)=>{t=Jt(t,"list-group-item");const[c,f]=Vf({key:iu(i,l.href),active:e,...l}),d=Fn(x=>{if(n){x.preventDefault(),x.stopPropagation();return}c.onClick(x)});n&&l.tabIndex===void 0&&(l.tabIndex=-1,l["aria-disabled"]=!0);const g=a||(o?l.href?"a":"button":"div");return ce(g,{ref:u,...l,...c,onClick:d,className:wt(r,t,f.isActive&&"active",n&&"disabled",s&&`${t}-${s}`,o&&`${t}-action`)})});D0.displayName="ListGroupItem";const R0=K.forwardRef((t,e)=>{const{className:n,bsPrefix:i,variant:r,horizontal:s,numbered:o,as:a="div",...l}=Uf(t,{activeKey:"onSelect"}),u=Jt(i,"list-group");let c;return s&&(c=s===!0?"horizontal":`horizontal-${s}`),ce(h0,{ref:e,...l,as:a,className:wt(n,u,r&&`${u}-${r}`,c&&`${u}-${c}`,o&&`${u}-numbered`)})});R0.displayName="ListGroup";const hs=Object.assign(R0,{Item:D0}),A1=()=>ce("div",{style:{textAlign:"center"},children:On(hs,{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"200px",marginTop:"20px"},children:[ce(hs.Item,{children:ce("a",{href:"mailto:g.zani@uva.nl",children:"mail"})}),ce(hs.Item,{children:ce("a",{href:"https://github.com/salamanderxing",children:"GitHub"})}),ce(hs.Item,{children:ce("a",{href:"https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html",children:"Superprof"})})]})}),P1={bg:"primary",pill:!1},eh=K.forwardRef(({bsPrefix:t,bg:e,pill:n,text:i,className:r,as:s="span",...o},a)=>{const l=Jt(t,"badge");return ce(s,{ref:a,...o,className:wt(r,l,n&&"rounded-pill",i&&`text-${i}`,e&&`bg-${e}`)})});eh.displayName="Badge";eh.defaultProps=P1;function L1(){return ce("div",{style:{textAlign:"center"},children:ce(hs,{as:"ol",style:{marginTop:"20px",marginLeft:"auto",marginRight:"auto",maxWidth:500},children:[{name:"Mate",description:"Next gen deep learning framework",link:"https://salamanderxing.github.io/mate"},{name:"Stochastic Hopfield Network",description:"Online Stochastic Hopfield Network in JavaScript",link:"https://salamanderxing.github.io/hopfield-network/"},{name:"Cannon",description:"Play online agains an AI",link:"https://salamanderxing.github.io/cannon/"},{name:"Focus",description:"Test your focus, in your browser.",link:"https://salamanderxing.github.io/focus/"},{name:"MCS",description:"Computes the maximum common subgraph of two graphs",link:"https://github.com/salamanderxing/mcs"}].map((e,n)=>On(hs.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:[ce("div",{className:"ms-2 me-auto",style:{textAlign:"center",width:"100%"},children:On("div",{style:{marginLeft:"auto",marginRight:"auto"},children:[ce("div",{className:"fw-bold",children:e.name}),e.description]})}),ce("a",{href:e.link,target:"_blank",style:{textDecoration:"none"},children:ce(eh,{bg:"primary",children:"Link"})})]},n))})})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="148",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},D1=0,Dp=1,R1=2,I0=1,I1=2,co=3,Cr=0,En=1,nh=2,Ta=3,ji=0,ws=1,Dd=2,Rp=3,Ip=4,N1=5,Jr=100,k1=101,F1=102,Np=103,kp=104,O1=200,z1=201,U1=202,B1=203,N0=204,k0=205,V1=206,H1=207,G1=208,W1=209,$1=210,j1=0,X1=1,Y1=2,Rd=3,q1=4,K1=5,Z1=6,Q1=7,F0=0,J1=1,ew=2,Zn=0,tw=1,nw=2,iw=3,rw=4,sw=5,O0=300,Ds=301,Rs=302,Id=303,Nd=304,lu=306,mr=1e3,an=1001,kd=1002,Qe=1003,Fp=1004,qu=1005,yn=1006,ow=1007,$o=1008,Ar=1009,aw=1010,lw=1011,z0=1012,uw=1013,gr=1014,mi=1015,Is=1016,cw=1017,dw=1018,Ms=1020,fw=1021,hw=1022,ln=1023,pw=1024,mw=1025,yr=1026,Ns=1027,gw=1028,vw=1029,_w=1030,xw=1031,yw=1033,Ku=33776,Zu=33777,Qu=33778,Ju=33779,Op=35840,zp=35841,Up=35842,Bp=35843,Sw=36196,Vp=37492,Hp=37496,Gp=37808,Wp=37809,$p=37810,jp=37811,Xp=37812,Yp=37813,qp=37814,Kp=37815,Zp=37816,Qp=37817,Jp=37818,em=37819,tm=37820,nm=37821,im=36492,qi=3e3,Xe=3001,ww=3200,Mw=3201,Ew=0,bw=1,Wn="srgb",jo="srgb-linear",ec=7680,Tw=519,rm=35044,sm="300 es",Fd=1035;class Ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,om=180/Math.PI;function na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Cw(t,e){return(t%e+e)%e}function nc(t,e,n){return(1-n)*t+n*e}function am(t){return(t&t-1)===0&&t!==0}function Od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,n=0){Me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],x=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],w=r[7],S=r[2],T=r[5],P=r[8];return s[0]=o*h+a*v+l*S,s[3]=o*p+a*_+l*T,s[6]=o*m+a*w+l*P,s[1]=u*h+c*v+f*S,s[4]=u*p+c*_+f*T,s[7]=u*m+c*w+f*P,s[2]=d*h+g*v+x*S,s[5]=d*p+g*_+x*T,s[8]=d*m+g*w+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,x=n*f+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=f*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=g*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ic.makeScale(e,n)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(ic.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new cn;function U0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function al(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const rc={[Wn]:{[jo]:Sr},[jo]:{[Wn]:al}},Ot={legacyMode:!0,get workingColorSpace(){return jo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(rc[e]&&rc[e][n]!==void 0){const i=rc[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},B0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},An={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Pa(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ot.workingColorSpace){if(e=Cw(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sc(o,s,e+1/3),this.g=sc(o,s,e),this.b=sc(o,s,e-1/3)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ot.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ot.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ot.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ot.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Wn){const i=B0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=al(e.r),this.g=al(e.g),this.b=al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ot.fromWorkingColorSpace(Pa(this,ct),e),$t(ct.r*255,0,255)<<16^$t(ct.g*255,0,255)<<8^$t(ct.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Pa(this,ct),n);const i=ct.r,r=ct.g,s=ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Pa(this,ct),n),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Wn){return Ot.fromWorkingColorSpace(Pa(this,ct),e),e!==Wn?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(An),An.h+=e,An.s+=n,An.l+=i,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(An),e.getHSL(Aa);const i=nc(An.h,Aa.h,n),r=nc(An.s,Aa.s,n),s=nc(An.l,Aa.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=B0;let Ur;class V0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Ul("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Sr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Sr(n[i]/255)*255):n[i]=Sr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class H0{constructor(e=null){this.isSource=!0,this.uuid=na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oc(r[o].image)):s.push(oc(r[o]))}else s=oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?V0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Aw=0;class Kt extends Ir{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=an,r=an,s=yn,o=$o,a=ln,l=Ar,u=Kt.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=na(),this.name="",this.source=new H0(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=O0;Kt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],x=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,w=(g+1)/2,S=(m+1)/2,T=(c+d)/4,P=(f+h)/4,y=(x+p)/4;return _>w&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=P/i):w>S?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=T/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=P/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-h)*(f-h)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-h)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zt extends Ir{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new H0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G0 extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pw extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=x,e[n+3]=h;return}if(f!==h||l!==d||u!==g||c!==x){let p=1-a;const m=l*d+u*g+c*x+f*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),T=Math.atan2(S,m*v);p=Math.sin(p*T)/S,a=Math.sin(a*T)/S}const w=a*v;if(l=l*p+d*w,u=u*p+g*w,c=c*p+x*w,f=f*p+h*w,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+c*f+l*g-u*d,e[n+1]=l*x+c*d+u*f-a*g,e[n+2]=u*x+c*g+a*d-l*f,e[n+3]=c*x-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"YXZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"ZXY":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"ZYX":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"YZX":this._x=d*c*f+u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f-d*g*x;break;case"XZY":this._x=d*c*f-u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new z,lm=new Pr;class ia{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ir.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ir.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ir)}else i.boundingBox===null&&i.computeBoundingBox(),lc.copy(i.boundingBox),lc.applyMatrix4(e.matrixWorld),this.union(lc);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),La.subVectors(this.max,Qs),Br.subVectors(e.a,Qs),Vr.subVectors(e.b,Qs),Hr.subVectors(e.c,Qs),Ti.subVectors(Vr,Br),Ci.subVectors(Hr,Vr),rr.subVectors(Br,Hr);let n=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-rr.z,rr.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,rr.z,0,-rr.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-rr.y,rr.x,0];return!uc(n,Br,Vr,Hr,La)||(n=[1,0,0,0,1,0,0,0,1],!uc(n,Br,Vr,Hr,La))?!1:(Da.crossVectors(Ti,Ci),n=[Da.x,Da.y,Da.z],uc(n,Br,Vr,Hr,La))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ir.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new z,new z,new z,new z,new z,new z,new z,new z],ir=new z,lc=new ia,Br=new z,Vr=new z,Hr=new z,Ti=new z,Ci=new z,rr=new z,Qs=new z,La=new z,Da=new z,sr=new z;function uc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){sr.fromArray(t,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),c=i.dot(sr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Lw=new ia,Js=new z,cc=new z;class uu{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(cc)),this.expandByPoint(Js.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new z,dc=new z,Ra=new z,Ai=new z,fc=new z,Ia=new z,hc=new z;class W0{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.direction).multiplyScalar(n).add(this.origin),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dc.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(dc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ra),a=Ai.dot(this.direction),l=-Ai.dot(Ra),u=Ai.lengthSq(),c=Math.abs(1-o*o);let f,d,g,x;if(c>0)if(f=o*l-a,d=o*a-l,x=s*c,f>=0)if(d>=-x)if(d<=x){const h=1/c;f*=h,d*=h,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ra).multiplyScalar(d).add(dc),g}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){fc.subVectors(n,e),Ia.subVectors(i,e),hc.crossVectors(fc,Ia);let o=this.direction.dot(hc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Ai,Ia));if(l<0)return null;const u=a*this.direction.dot(fc.cross(Ai));if(u<0||l+u>o)return null;const c=-a*Ai.dot(hc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,g,x,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=x,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,x=a*c,h=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=g+x*u,n[5]=d-h*u,n[9]=-a*l,n[2]=h-d*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,x=u*c,h=u*f;n[0]=d+h*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=g*a-x,n[6]=h+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,x=u*c,h=u*f;n[0]=d-h*a,n[4]=-o*f,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*c,n[9]=h-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,x=a*c,h=a*f;n[0]=l*c,n[4]=x*u-g,n[8]=d*u+h,n[1]=l*f,n[5]=h*u+d,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-d*f,n[8]=x*f+g,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*f+x,n[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+h,n[5]=o*c,n[9]=g*f-x,n[2]=x*f-g,n[6]=a*c,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dw,e,Rw)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Pi.crossVectors(i,rn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Pi.crossVectors(i,rn)),Pi.normalize(),Na.crossVectors(rn,Pi),r[0]=Pi.x,r[4]=Na.x,r[8]=rn.x,r[1]=Pi.y,r[5]=Na.y,r[9]=rn.y,r[2]=Pi.z,r[6]=Na.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],x=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],w=i[11],S=i[15],T=r[0],P=r[4],y=r[8],A=r[12],L=r[1],$=r[5],re=r[9],N=r[13],I=r[2],G=r[6],J=r[10],Z=r[14],D=r[3],W=r[7],V=r[11],O=r[15];return s[0]=o*T+a*L+l*I+u*D,s[4]=o*P+a*$+l*G+u*W,s[8]=o*y+a*re+l*J+u*V,s[12]=o*A+a*N+l*Z+u*O,s[1]=c*T+f*L+d*I+g*D,s[5]=c*P+f*$+d*G+g*W,s[9]=c*y+f*re+d*J+g*V,s[13]=c*A+f*N+d*Z+g*O,s[2]=x*T+h*L+p*I+m*D,s[6]=x*P+h*$+p*G+m*W,s[10]=x*y+h*re+p*J+m*V,s[14]=x*A+h*N+p*Z+m*O,s[3]=v*T+_*L+w*I+S*D,s[7]=v*P+_*$+w*G+S*W,s[11]=v*y+_*re+w*J+S*V,s[15]=v*A+_*N+w*Z+S*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],x=e[3],h=e[7],p=e[11],m=e[15];return x*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+h*(+n*l*g-n*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+p*(+n*u*f-n*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],x=e[12],h=e[13],p=e[14],m=e[15],v=f*p*u-h*d*u+h*l*g-a*p*g-f*l*m+a*d*m,_=x*d*u-c*p*u-x*l*g+o*p*g+c*l*m-o*d*m,w=c*h*u-x*f*u+x*a*g-o*h*g-c*a*m+o*f*m,S=x*f*l-c*h*l-x*a*d+o*h*d+c*a*p-o*f*p,T=n*v+i*_+r*w+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=v*P,e[1]=(h*d*s-f*p*s-h*r*g+i*p*g+f*r*m-i*d*m)*P,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*P,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*P,e[4]=_*P,e[5]=(c*p*s-x*d*s+x*r*g-n*p*g-c*r*m+n*d*m)*P,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*m-n*l*m)*P,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*g+n*l*g)*P,e[8]=w*P,e[9]=(x*f*s-c*h*s-x*i*g+n*h*g+c*i*m-n*f*m)*P,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*m+n*a*m)*P,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*g-n*a*g)*P,e[12]=S*P,e[13]=(c*h*r-x*f*r+x*i*d-n*h*d-c*i*p+n*f*p)*P,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*P,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,x=s*f,h=o*c,p=o*f,m=a*f,v=l*u,_=l*c,w=l*f,S=i.x,T=i.y,P=i.z;return r[0]=(1-(h+m))*S,r[1]=(g+w)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-w)*T,r[5]=(1-(d+m))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(x+_)*P,r[9]=(p-v)*P,r[10]=(1-(d+h))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,c=1/o,f=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new z,Pn=new St,Dw=new z(0,0,0),Rw=new z(1,1,1),Pi=new z,Na=new z,rn=new z,um=new St,cm=new Pr;class ra{constructor(e=0,n=0,i=0,r=ra.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ra.DefaultOrder="XYZ";ra.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iw=0;const dm=new z,Wr=new Pr,ri=new St,ka=new z,eo=new z,Nw=new z,kw=new Pr,fm=new z(1,0,0),hm=new z(0,1,0),pm=new z(0,0,1),Fw={type:"added"},mm={type:"removed"};class Qt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DefaultUp.clone();const e=new z,n=new ra,i=new Pr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new cn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DefaultMatrixWorldAutoUpdate,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ka.copy(e):ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(eo,ka,this.up):ri.lookAt(ka,eo,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ri),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(mm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Nw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,kw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DefaultUp=new z(0,1,0);Qt.DefaultMatrixAutoUpdate=!0;Qt.DefaultMatrixWorldAutoUpdate=!0;const Ln=new z,si=new z,pc=new z,oi=new z,$r=new z,jr=new z,gm=new z,mc=new z,gc=new z,vc=new z;class fi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),si.subVectors(i,n),pc.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(si),l=Ln.dot(pc),u=si.dot(si),c=si.dot(pc),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi),l.set(0,0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),si.subVectors(e,n),Ln.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Ln.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return fi.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),jr.subVectors(s,i),mc.subVectors(e,i);const l=$r.dot(mc),u=jr.dot(mc);if(l<=0&&u<=0)return n.copy(i);gc.subVectors(e,r);const c=$r.dot(gc),f=jr.dot(gc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector($r,o);vc.subVectors(e,s);const g=$r.dot(vc),x=jr.dot(vc);if(x>=0&&g<=x)return n.copy(s);const h=g*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(jr,a);const p=c*x-g*f;if(p<=0&&f-c>=0&&g-x>=0)return gm.subVectors(s,r),a=(f-c)/(f-c+(g-x)),n.copy(r).addScaledVector(gm,a);const m=1/(p+h+d);return o=h*m,a=d*m,n.copy(i).addScaledVector($r,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ow=0;class sa extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=na(),this.name="",this.type="Material",this.blending=ws,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=N0,this.blendDst=k0,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cu extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new z,Fa=new Me;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rm,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyMatrix3(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyMatrix4(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyNormalMatrix(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.transformDirection(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class j0 extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X0 extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _i extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zw=0;const vn=new St,_c=new Qt,Xr=new z,sn=new ia,to=new ia,_t=new z;class Jn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?X0:j0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _i(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(sn.min,to.min),sn.expandByPoint(_t),_t.addVectors(sn.max,to.max),sn.expandByPoint(_t)):(sn.expandByPoint(to.min),sn.expandByPoint(to.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_t.fromBufferAttribute(a,u),l&&(Xr.fromBufferAttribute(e,u),_t.add(Xr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new z,c[L]=new z;const f=new z,d=new z,g=new z,x=new Me,h=new Me,p=new Me,m=new z,v=new z;function _(L,$,re){f.fromArray(r,L*3),d.fromArray(r,$*3),g.fromArray(r,re*3),x.fromArray(o,L*2),h.fromArray(o,$*2),p.fromArray(o,re*2),d.sub(f),g.sub(f),h.sub(x),p.sub(x);const N=1/(h.x*p.y-p.x*h.y);isFinite(N)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(N),v.copy(g).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(N),u[L].add(m),u[$].add(m),u[re].add(m),c[L].add(v),c[$].add(v),c[re].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let L=0,$=w.length;L<$;++L){const re=w[L],N=re.start,I=re.count;for(let G=N,J=N+I;G<J;G+=3)_(i[G+0],i[G+1],i[G+2])}const S=new z,T=new z,P=new z,y=new z;function A(L){P.fromArray(s,L*3),y.copy(P);const $=u[L];S.copy($),S.sub(P.multiplyScalar(P.dot($))).normalize(),T.crossVectors(y,$);const N=T.dot(c[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=N}for(let L=0,$=w.length;L<$;++L){const re=w[L],N=re.start,I=re.count;for(let G=N,J=N+I;G<J;G+=3)A(i[G+0]),A(i[G+1]),A(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)d[x++]=u[g++]}return new Bn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new St,Yr=new W0,xc=new uu,no=new z,io=new z,ro=new z,yc=new z,Oa=new z,za=new Me,Ua=new Me,Ba=new Me,Sc=new z,Va=new z;class Yn extends Qt{constructor(e=new Jn,n=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(yc.fromBufferAttribute(f,e),o?Oa.addScaledVector(yc,c):Oa.addScaledVector(yc.sub(n),c))}n.add(Oa)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),e.ray.intersectsSphere(xc)===!1)||(vm.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(vm),i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,f=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],p=r[h.materialIndex],m=Math.max(h.start,d.start),v=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let _=m,w=v;_<w;_+=3){const S=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);o=Ha(this,p,e,Yr,u,c,S,T,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let h=g,p=x;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=Ha(this,r,e,Yr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],p=r[h.materialIndex],m=Math.max(h.start,d.start),v=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let _=m,w=v;_<w;_+=3){const S=_,T=_+1,P=_+2;o=Ha(this,p,e,Yr,u,c,S,T,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let h=g,p=x;h<p;h+=3){const m=h,v=h+1,_=h+2;o=Ha(this,r,e,Yr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function Uw(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Va);return u<n.near||u>n.far?null:{distance:u,point:Va.clone(),object:t}}function Ha(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,no),t.getVertexPosition(a,io),t.getVertexPosition(l,ro);const u=Uw(t,e,n,i,no,io,ro,Sc);if(u){r&&(za.fromBufferAttribute(r,o),Ua.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),u.uv=fi.getUV(Sc,no,io,ro,za,Ua,Ba,new Me)),s&&(za.fromBufferAttribute(s,o),Ua.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),u.uv2=fi.getUV(Sc,no,io,ro,za,Ua,Ba,new Me));const c={a:o,b:a,c:l,normal:new z,materialIndex:0};fi.getNormal(no,io,ro,c.normal),u.face=c}return u}class oa extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(c,3)),this.setAttribute("uv",new _i(f,2));function x(h,p,m,v,_,w,S,T,P,y,A){const L=w/P,$=S/y,re=w/2,N=S/2,I=T/2,G=P+1,J=y+1;let Z=0,D=0;const W=new z;for(let V=0;V<J;V++){const O=V*$-N;for(let B=0;B<G;B++){const Q=B*L-re;W[h]=Q*v,W[p]=O*_,W[m]=I,u.push(W.x,W.y,W.z),W[h]=0,W[p]=0,W[m]=T>0?1:-1,c.push(W.x,W.y,W.z),f.push(B/P),f.push(1-V/y),Z+=1}}for(let V=0;V<y;V++)for(let O=0;O<P;O++){const B=d+O+G*V,Q=d+O+G*(V+1),ee=d+(O+1)+G*(V+1),ie=d+(O+1)+G*V;l.push(B,Q,ie),l.push(Q,ee,ie),D+=6}a.addGroup(g,D,A),g+=D,d+=Z}}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function Bw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y0(t){return t.getRenderTarget()===null&&t.outputEncoding===Xe?Wn:jo}const Xo={clone:ks,merge:zt};var Vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vw,this.fragmentShader=Hw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Bw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ih extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends ih{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=om*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return om*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Kr=1;class Gw extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Sn(qr,Kr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Sn(qr,Kr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Sn(qr,Kr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Sn(qr,Kr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Sn(qr,Kr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Sn(qr,Kr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Zn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class q0 extends Kt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ww extends Zt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new q0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new It({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ji});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===$o&&(n.minFilter=yn),new Gw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const wc=new z,$w=new z,jw=new cn;class ur{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wc.subVectors(i,n).cross($w.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jw.getNormalMatrix(e),r=this.coplanarPoint(wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new uu,Ga=new z;class K0{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],x=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,f-l,h-d,_-p).normalize(),n[1].setComponents(a+r,f+l,h+d,_+p).normalize(),n[2].setComponents(a+s,f+u,h+g,_+m).normalize(),n[3].setComponents(a-s,f-u,h-g,_-m).normalize(),n[4].setComponents(a-o,f-c,h-x,_-v).normalize(),n[5].setComponents(a+o,f+c,h+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Xw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;t.bindBuffer(f,u),g.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class du extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,g=[],x=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*d-o;for(let _=0;_<u;_++){const w=_*f-s;x.push(w,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,w=v+u*(m+1),S=v+1+u*(m+1),T=v+1+u*m;g.push(_,w,T),g.push(w,S,T)}this.setIndex(g),this.setAttribute("position",new _i(x,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(p,2))}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM="vec3 transformed = vec3( position );",tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lE=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CE=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,DE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,UE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,BE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,VE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,HE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,GE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,WE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Eb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:Yw,alphamap_pars_fragment:qw,alphatest_fragment:Kw,alphatest_pars_fragment:Zw,aomap_fragment:Qw,aomap_pars_fragment:Jw,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:lM,color_fragment:uM,color_pars_fragment:cM,color_pars_vertex:dM,color_vertex:fM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:xM,encodings_fragment:yM,encodings_pars_fragment:SM,envmap_fragment:wM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:OM,envmap_vertex:TM,fog_vertex:CM,fog_pars_vertex:AM,fog_fragment:PM,fog_pars_fragment:LM,gradientmap_pars_fragment:DM,lightmap_fragment:RM,lightmap_pars_fragment:IM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:kM,lights_pars_begin:FM,lights_toon_fragment:zM,lights_toon_pars_fragment:UM,lights_phong_fragment:BM,lights_phong_pars_fragment:VM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:WM,lights_fragment_maps:$M,lights_fragment_end:jM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:QM,map_particle_fragment:JM,map_particle_pars_fragment:eE,metalnessmap_fragment:tE,metalnessmap_pars_fragment:nE,morphcolor_vertex:iE,morphnormal_vertex:rE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:aE,normal_fragment_maps:lE,normal_pars_fragment:uE,normal_pars_vertex:cE,normal_vertex:dE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:pE,clearcoat_pars_fragment:mE,iridescence_pars_fragment:gE,output_fragment:vE,packing:_E,premultiplied_alpha_fragment:xE,project_vertex:yE,dithering_fragment:SE,dithering_pars_fragment:wE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:bE,shadowmap_pars_vertex:TE,shadowmap_vertex:CE,shadowmask_pars_fragment:AE,skinbase_vertex:PE,skinning_pars_vertex:LE,skinning_vertex:DE,skinnormal_vertex:RE,specularmap_fragment:IE,specularmap_pars_fragment:NE,tonemapping_fragment:kE,tonemapping_pars_fragment:FE,transmission_fragment:OE,transmission_pars_fragment:zE,uv_pars_fragment:UE,uv_pars_vertex:BE,uv_vertex:VE,uv2_pars_fragment:HE,uv2_pars_vertex:GE,uv2_vertex:WE,worldpos_vertex:$E,background_vert:jE,background_frag:XE,backgroundCube_vert:YE,backgroundCube_frag:qE,cube_vert:KE,cube_frag:ZE,depth_vert:QE,depth_frag:JE,distanceRGBA_vert:eb,distanceRGBA_frag:tb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:rb,linedashed_frag:sb,meshbasic_vert:ob,meshbasic_frag:ab,meshlambert_vert:lb,meshlambert_frag:ub,meshmatcap_vert:cb,meshmatcap_frag:db,meshnormal_vert:fb,meshnormal_frag:hb,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:vb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:yb,points_frag:Sb,shadow_vert:wb,shadow_frag:Mb,sprite_vert:Eb,sprite_frag:bb},ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},$n={basic:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:zt([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:zt([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:zt([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:zt([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:zt([ae.lights,ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};$n.physical={uniforms:zt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Wa={r:0,b:0,g:0};function Tb(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,u,c,f=null,d=0,g=null;function x(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const w=t.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lu)?(c===void 0&&(c=new Yn(new oa(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:ks($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Xe,(f!==_||d!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Yn(new du(2,2),new It({name:"BackgroundMaterial",uniforms:ks($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(Wa,Y0(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function Cb(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(I,G,J,Z,D){let W=!1;if(o){const V=h(Z,J,G);u!==V&&(u=V,g(u.object)),W=m(I,Z,J,D),W&&v(I,Z,J,D)}else{const V=G.wireframe===!0;(u.geometry!==Z.id||u.program!==J.id||u.wireframe!==V)&&(u.geometry=Z.id,u.program=J.id,u.wireframe=V,W=!0)}D!==null&&n.update(D,34963),(W||c)&&(c=!1,y(I,G,J,Z),D!==null&&t.bindBuffer(34963,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,G,J){const Z=J.wireframe===!0;let D=a[I.id];D===void 0&&(D={},a[I.id]=D);let W=D[G.id];W===void 0&&(W={},D[G.id]=W);let V=W[Z];return V===void 0&&(V=p(d()),W[Z]=V),V}function p(I){const G=[],J=[],Z=[];for(let D=0;D<r;D++)G[D]=0,J[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Z,object:I,attributes:{},index:null}}function m(I,G,J,Z){const D=u.attributes,W=G.attributes;let V=0;const O=J.getAttributes();for(const B in O)if(O[B].location>=0){const ee=D[B];let ie=W[B];if(ie===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;V++}return u.attributesNum!==V||u.index!==Z}function v(I,G,J,Z){const D={},W=G.attributes;let V=0;const O=J.getAttributes();for(const B in O)if(O[B].location>=0){let ee=W[B];ee===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),D[B]=ie,V++}u.attributes=D,u.attributesNum=V,u.index=Z}function _(){const I=u.newAttributes;for(let G=0,J=I.length;G<J;G++)I[G]=0}function w(I){S(I,0)}function S(I,G){const J=u.newAttributes,Z=u.enabledAttributes,D=u.attributeDivisors;J[I]=1,Z[I]===0&&(t.enableVertexAttribArray(I),Z[I]=1),D[I]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),D[I]=G)}function T(){const I=u.newAttributes,G=u.enabledAttributes;for(let J=0,Z=G.length;J<Z;J++)G[J]!==I[J]&&(t.disableVertexAttribArray(J),G[J]=0)}function P(I,G,J,Z,D,W){i.isWebGL2===!0&&(J===5124||J===5125)?t.vertexAttribIPointer(I,G,J,D,W):t.vertexAttribPointer(I,G,J,Z,D,W)}function y(I,G,J,Z){if(i.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=Z.attributes,W=J.getAttributes(),V=G.defaultAttributeValues;for(const O in W){const B=W[O];if(B.location>=0){let Q=D[O];if(Q===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const ee=Q.normalized,ie=Q.itemSize,H=n.get(Q);if(H===void 0)continue;const Te=H.buffer,ve=H.type,Se=H.bytesPerElement;if(Q.isInterleavedBufferAttribute){const he=Q.data,Re=he.stride,be=Q.offset;if(he.isInstancedInterleavedBuffer){for(let le=0;le<B.locationSize;le++)S(B.location+le,he.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<B.locationSize;le++)w(B.location+le);t.bindBuffer(34962,Te);for(let le=0;le<B.locationSize;le++)P(B.location+le,ie/B.locationSize,ve,ee,Re*Se,(be+ie/B.locationSize*le)*Se)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)S(B.location+he,Q.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<B.locationSize;he++)w(B.location+he);t.bindBuffer(34962,Te);for(let he=0;he<B.locationSize;he++)P(B.location+he,ie/B.locationSize,ve,ee,ie*Se,ie/B.locationSize*he*Se)}}else if(V!==void 0){const ee=V[O];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(B.location,ee);break;case 3:t.vertexAttrib3fv(B.location,ee);break;case 4:t.vertexAttrib4fv(B.location,ee);break;default:t.vertexAttrib1fv(B.location,ee)}}}}T()}function A(){re();for(const I in a){const G=a[I];for(const J in G){const Z=G[J];for(const D in Z)x(Z[D].object),delete Z[D];delete G[J]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const J in G){const Z=G[J];for(const D in Z)x(Z[D].object),delete Z[D];delete G[J]}delete a[I.id]}function $(I){for(const G in a){const J=a[G];if(J[I.id]===void 0)continue;const Z=J[I.id];for(const D in Z)x(Z[D].object),delete Z[D];delete J[I.id]}}function re(){N(),c=!0,u!==l&&(u=l,g(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:$,initAttributes:_,enableAttribute:w,disableUnusedAttributes:T}}function Ab(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Pb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=d>0,w=o||e.has("OES_texture_float"),S=_&&w,T=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:T}}function Lb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const x=f.length!==0||d||i!==0||r;return r=d,n=c(f,g,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const x=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,_=v*4;let w=m.clippingState||null;l.value=w,w=c(x,d,_,g);for(let S=0;S!==_;++S)w[S]=n[S];m.clippingState=w,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,x){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const m=g+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,w=g;_!==h;++_,w+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Db(t){let e=new WeakMap;function n(o,a){return a===Id?o.mapping=Ds:a===Nd&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Id||a===Nd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ww(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Q0 extends ih{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=4,_m=[.125,.215,.35,.446,.526,.582],dr=20,Mc=new Q0,xm=new He;let Ec=null;const cr=(1+Math.sqrt(5))/2,Qr=1/cr,ym=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,cr,Qr),new z(0,cr,-Qr),new z(Qr,0,cr),new z(-Qr,0,cr),new z(cr,Qr,0),new z(-cr,Qr,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Is,format:ln,encoding:qi,depthBuffer:!1},r=wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rb(s)),this._blurMaterial=Ib(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Mc)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(xm),c.toneMapping=Zn,c.autoClear=!1;const g=new cu({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),x=new Yn(new oa,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(xm),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;$a(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Yn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*dr-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):dr;p>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const m=[];let v=0;for(let P=0;P<dr;++P){const y=P/h,A=Math.exp(-y*y/2);m.push(A),P===0?v+=A:P<p&&(v+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const w=this._sizeLods[r],S=3*w*(r>_-ps?r-_+ps:0),T=4*(this._cubeSize-w);$a(n,S,T,3*w,2*w),l.setRenderTarget(n),l.render(f,Mc)}}function Rb(t){const e=[],n=[],i=[];let r=t;const s=t-ps+1+_m.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ps?l=_m[o-t+ps-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,x=6,h=3,p=2,m=1,v=new Float32Array(h*x*g),_=new Float32Array(p*x*g),w=new Float32Array(m*x*g);for(let T=0;T<g;T++){const P=T%3*2/3-1,y=T>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(A,h*x*T),_.set(d,p*x*T);const L=[T,T,T,T,T,T];w.set(L,m*x*T)}const S=new Jn;S.setAttribute("position",new Bn(v,h)),S.setAttribute("uv",new Bn(_,p)),S.setAttribute("faceIndex",new Bn(w,m)),e.push(S),r>ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wm(t,e,n){const i=new Zt(t,e,n);return i.texture.mapping=lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ib(t,e,n){const i=new Float32Array(dr),r=new z(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Mm(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Em(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Id||l===Nd,c=l===Ds||l===Rs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Sm(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Sm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function kb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],34962);const g=f.morphAttributes;for(const x in g){const h=g[x];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(f){const d=[],g=f.index,x=f.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,w=v.length;_<w;_+=3){const S=v[_+0],T=v[_+1],P=v[_+2];d.push(S,T,T,P,P,S)}}else{const v=x.array;h=x.version;for(let _=0,w=v.length/3-1;_<w;_+=3){const S=_+0,T=_+1,P=_+2;d.push(S,T,T,P,P,S)}}const p=new(U0(d)?X0:j0)(d,1);p.version=h;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Ob(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){t.drawElements(s,g,a,d*l),n.update(g,s,1)}function f(d,g,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,d*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function zb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ub(t,e){return t[0]-e[0]}function Bb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Vb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let J=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",J)};var x=J;m!==void 0&&m.texture.dispose();const w=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let L=0;w===!0&&(L=1),S===!0&&(L=2),T===!0&&(L=3);let $=c.attributes.position.count*L,re=1;$>e.maxTextureSize&&(re=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const N=new Float32Array($*re*4*p),I=new G0(N,$,re,p);I.type=mi,I.needsUpdate=!0;const G=L*4;for(let Z=0;Z<p;Z++){const D=P[Z],W=y[Z],V=A[Z],O=$*re*4*Z;for(let B=0;B<D.count;B++){const Q=B*G;w===!0&&(o.fromBufferAttribute(D,B),N[O+Q+0]=o.x,N[O+Q+1]=o.y,N[O+Q+2]=o.z,N[O+Q+3]=0),S===!0&&(o.fromBufferAttribute(W,B),N[O+Q+4]=o.x,N[O+Q+5]=o.y,N[O+Q+6]=o.z,N[O+Q+7]=0),T===!0&&(o.fromBufferAttribute(V,B),N[O+Q+8]=o.x,N[O+Q+9]=o.y,N[O+Q+10]=o.z,N[O+Q+11]=V.itemSize===4?o.w:1)}}m={count:p,texture:I,size:new Me($,re)},s.set(c,m),c.addEventListener("dispose",J)}let v=0;for(let w=0;w<g.length;w++)v+=g[w];const _=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",g),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const T=p[S];T[0]=S,T[1]=g[S]}p.sort(Bb);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Ub);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const T=a[S],P=T[0],y=T[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[P]&&c.setAttribute("morphTarget"+S,m[P]),v&&c.getAttribute("morphNormal"+S)!==v[P]&&c.setAttribute("morphNormal"+S,v[P]),r[S]=y,_+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const w=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",w),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Hb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const J0=new Kt,e_=new G0,t_=new Pw,n_=new q0,bm=[],Tm=[],Cm=new Float32Array(16),Am=new Float32Array(9),Pm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2fv(this.addr,e),pt(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ht(n,e))return;t.uniform3fv(this.addr,e),pt(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4fv(this.addr,e),pt(n,e)}}function Xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Pm.set(i),t.uniformMatrix2fv(this.addr,!1,Pm),pt(n,i)}}function Yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Am.set(i),t.uniformMatrix3fv(this.addr,!1,Am),pt(n,i)}}function qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;Cm.set(i),t.uniformMatrix4fv(this.addr,!1,Cm),pt(n,i)}}function Kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2iv(this.addr,e),pt(n,e)}}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3iv(this.addr,e),pt(n,e)}}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4iv(this.addr,e),pt(n,e)}}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2uiv(this.addr,e),pt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3uiv(this.addr,e),pt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4uiv(this.addr,e),pt(n,e)}}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||J0,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||t_,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||n_,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||e_,r)}function lT(t){switch(t){case 5126:return Gb;case 35664:return Wb;case 35665:return $b;case 35666:return jb;case 35674:return Xb;case 35675:return Yb;case 35676:return qb;case 5124:case 35670:return Kb;case 35667:case 35671:return Zb;case 35668:case 35672:return Qb;case 35669:case 35673:return Jb;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}function uT(t,e){t.uniform1fv(this.addr,e)}function cT(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function dT(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function fT(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function hT(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pT(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mT(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gT(t,e){t.uniform1iv(this.addr,e)}function vT(t,e){t.uniform2iv(this.addr,e)}function _T(t,e){t.uniform3iv(this.addr,e)}function xT(t,e){t.uniform4iv(this.addr,e)}function yT(t,e){t.uniform1uiv(this.addr,e)}function ST(t,e){t.uniform2uiv(this.addr,e)}function wT(t,e){t.uniform3uiv(this.addr,e)}function MT(t,e){t.uniform4uiv(this.addr,e)}function ET(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||J0,s[o])}function bT(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||t_,s[o])}function TT(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||n_,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||e_,s[o])}function AT(t){switch(t){case 5126:return uT;case 35664:return cT;case 35665:return dT;case 35666:return fT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return vT;case 35668:case 35672:return _T;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return ST;case 36295:return wT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return CT}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lT(n.type)}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=AT(n.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Lm(t,e){t.seq.push(e),t.map[e.id]=e}function RT(t,e,n){const i=t.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),o=bc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Lm(n,u===void 0?new PT(a,t,e):new LT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new DT(a),Lm(n,f)),n=f}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);RT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Dm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let IT=0;function NT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kT(t){switch(t){case qi:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Rm(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+NT(t.getShaderSource(e),o)}else return r}function FT(t,e){const n=kT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function OT(t,e){let n;switch(e){case tw:n="Linear";break;case nw:n="Reinhard";break;case iw:n="OptimizedCineon";break;case rw:n="ACESFilmic";break;case sw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function UT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BT(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function Im(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(t){return t.replace(VT,HT)}function HT(t,e){const n=Ae[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return zd(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(GT,WT)}function WT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===I1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===co&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Rs:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function YT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case J1:e="ENVMAP_BLENDING_MIX";break;case ew:e="ENVMAP_BLENDING_ADD";break}return e}function qT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$T(n),u=jT(n),c=XT(n),f=YT(n),d=qT(n),g=n.isWebGL2?"":zT(n),x=UT(s),h=r.createProgram();let p,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(fo).join(`
`),p.length>0&&(p+=`
`),m=[g,x].filter(fo).join(`
`),m.length>0&&(m+=`
`)):(p=[Fm(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),m=[g,Fm(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zn?"#define TONE_MAPPING":"",n.toneMapping!==Zn?Ae.tonemapping_pars_fragment:"",n.toneMapping!==Zn?OT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,FT("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=zd(o),o=Im(o,n),o=Nm(o,n),a=zd(a),a=Im(a,n),a=Nm(a,n),o=km(o),a=km(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+o,w=v+m+a,S=Dm(r,35633,_),T=Dm(r,35632,w);if(r.attachShader(h,S),r.attachShader(h,T),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const A=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(T).trim();let re=!0,N=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const I=Rm(r,S,"vertex"),G=Rm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+A+`
`+I+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||$==="")&&(N=!1);N&&(this.diagnostics={runnable:re,programLog:A,vertexShader:{log:L,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(S),r.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new ll(r,h)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=BT(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=T,this}let ZT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JT(e),n.set(e,i)),i}}class JT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function eC(t,e,n,i,r,s,o){const a=new $0,l=new QT,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,A,L,$,re){const N=$.fog,I=re.geometry,G=y.isMeshStandardMaterial?$.environment:null,J=(y.isMeshStandardMaterial?n:e).get(y.envMap||G),Z=J&&J.mapping===lu?J.image.height:null,D=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=W!==void 0?W.length:0;let O=0;I.morphAttributes.position!==void 0&&(O=1),I.morphAttributes.normal!==void 0&&(O=2),I.morphAttributes.color!==void 0&&(O=3);let B,Q,ee,ie;if(D){const Re=$n[D];B=Re.vertexShader,Q=Re.fragmentShader}else B=y.vertexShader,Q=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const H=t.getRenderTarget(),Te=y.alphaTest>0,ve=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:y.type,vertexShader:B,fragmentShader:Q,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?t.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:qi,map:!!y.map,matcap:!!y.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Z,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===bw,tangentSpaceNormalMap:y.normalMapType===Ew,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ws,alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:O,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Zn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nh,flipSided:y.side===En,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)A.push(L),A.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(A,y),v(A,y),A.push(t.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),y.push(a.mask)}function _(y){const A=x[y.type];let L;if(A){const $=$n[A];L=Xo.clone($.uniforms)}else L=y.uniforms;return L}function w(y,A){let L;for(let $=0,re=u.length;$<re;$++){const N=u[$];if(N.cacheKey===A){L=N,++L.usedTimes;break}}return L===void 0&&(L=new KT(t,A,y,s),u.push(L)),L}function S(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:P}}function tC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,g,x,h,p){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:x,renderOrder:f.renderOrder,z:h,group:p},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=h,m.group=p),e++,m}function a(f,d,g,x,h,p){const m=o(f,d,g,x,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(f,d,g,x,h,p){const m=o(f,d,g,x,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,d){n.length>1&&n.sort(f||nC),i.length>1&&i.sort(d||Om),r.length>1&&r.sort(d||Om)}function c(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function iC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new zm,t.set(i,[o])):r>=s.length?(o=new zm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new He};break;case"SpotLight":n={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function sC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oC=0;function aC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lC(t,e){const n=new rC,i=sC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new St,a=new St;function l(c,f){let d=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,w=0,S=0,T=0,P=0,y=0;c.sort(aC);const A=f!==!0?Math.PI:1;for(let $=0,re=c.length;$<re;$++){const N=c[$],I=N.color,G=N.intensity,J=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=I.r*G*A,g+=I.g*G*A,x+=I.b*G*A;else if(N.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(N.sh.coefficients[D],G);else if(N.isDirectionalLight){const D=n.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const W=N.shadow,V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.directionalShadow[h]=V,r.directionalShadowMap[h]=Z,r.directionalShadowMatrix[h]=N.shadow.matrix,w++}r.directional[h]=D,h++}else if(N.isSpotLight){const D=n.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(I).multiplyScalar(G*A),D.distance=J,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,r.spot[m]=D;const W=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,W.updateMatrices(N),N.castShadow&&y++),r.spotLightMatrix[m]=W.matrix,N.castShadow){const V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.spotShadow[m]=V,r.spotShadowMap[m]=Z,T++}m++}else if(N.isRectAreaLight){const D=n.get(N);D.color.copy(I).multiplyScalar(G),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=D,v++}else if(N.isPointLight){const D=n.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*A),D.distance=N.distance,D.decay=N.decay,N.castShadow){const W=N.shadow,V=i.get(N);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,r.pointShadow[p]=V,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=N.shadow.matrix,S++}r.point[p]=D,p++}else if(N.isHemisphereLight){const D=n.get(N);D.skyColor.copy(N.color).multiplyScalar(G*A),D.groundColor.copy(N.groundColor).multiplyScalar(G*A),r.hemi[_]=D,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==v||L.hemiLength!==_||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==T||L.numSpotMaps!==P)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,L.directionalLength=h,L.pointLength=p,L.spotLength=m,L.rectAreaLength=v,L.hemiLength=_,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=T,L.numSpotMaps=P,r.version=oC++)}function u(c,f){let d=0,g=0,x=0,h=0,p=0;const m=f.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const w=c[v];if(w.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(w.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),x++}else if(w.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(w.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Um(t,e){const n=new lC(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function uC(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Um(t,e),n.set(s,[l])):o>=a.length?(l=new Um(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class cC extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ww,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dC extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pC(t,e,n){let i=new K0;const r=new Me,s=new Me,o=new Et,a=new cC({depthPacking:Mw}),l=new dC,u={},c=n.maxTextureSize,f={0:En,1:Cr,2:nh},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:fC,fragmentShader:hC}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Jn;x.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Yn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0,this.render=function(w,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),L=t.state;L.setBlending(ji),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let $=0,re=w.length;$<re;$++){const N=w[$],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null){const Z=this.type!==co?{minFilter:Qe,magFilter:Qe}:{};I.map=new Zt(r.x,r.y,Z),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let Z=0;Z<J;Z++){const D=I.getViewport(Z);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),L.viewport(o),I.updateMatrices(N,Z),i=I.getFrustum(),_(S,T,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===co&&m(I,T),I.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(P,y,A)};function m(w,S){const T=e.update(h);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zt(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(S,null,T,d,h,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(S,null,T,g,h,null)}function v(w,S,T,P,y,A){let L=null;const $=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0)L=$;else if(L=T.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const re=L.uuid,N=S.uuid;let I=u[re];I===void 0&&(I={},u[re]=I);let G=I[N];G===void 0&&(G=L.clone(),I[N]=G),L=G}return L.visible=S.visible,L.wireframe=S.wireframe,A===co?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:f[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=P,L.farDistance=y),L}function _(w,S,T,P,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===co)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const $=e.update(w),re=w.material;if(Array.isArray(re)){const N=$.groups;for(let I=0,G=N.length;I<G;I++){const J=N[I],Z=re[J.materialIndex];if(Z&&Z.visible){const D=v(w,Z,P,T.near,T.far,y);t.renderBufferDirect(T,null,$,D,w,J)}}}else if(re.visible){const N=v(w,re,P,T.near,T.far,y);t.renderBufferDirect(T,null,$,N,w,null)}}const L=w.children;for(let $=0,re=L.length;$<re;$++)_(L[$],S,T,P,y)}}function mC(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const X=new Et;let ne=null;const pe=new Et(0,0,0,0);return{setMask:function(ye){ne!==ye&&!R&&(t.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){R=ye},setClear:function(ye,Be,gt,Ct,Ji){Ji===!0&&(ye*=Ct,Be*=Ct,gt*=Ct),X.set(ye,Be,gt,Ct),pe.equals(X)===!1&&(t.clearColor(ye,Be,gt,Ct),pe.copy(X))},reset:function(){R=!1,ne=null,pe.set(-1,0,0,0)}}}function s(){let R=!1,X=null,ne=null,pe=null;return{setTest:function(ye){ye?Te(2929):ve(2929)},setMask:function(ye){X!==ye&&!R&&(t.depthMask(ye),X=ye)},setFunc:function(ye){if(ne!==ye){switch(ye){case j1:t.depthFunc(512);break;case X1:t.depthFunc(519);break;case Y1:t.depthFunc(513);break;case Rd:t.depthFunc(515);break;case q1:t.depthFunc(514);break;case K1:t.depthFunc(518);break;case Z1:t.depthFunc(516);break;case Q1:t.depthFunc(517);break;default:t.depthFunc(515)}ne=ye}},setLocked:function(ye){R=ye},setClear:function(ye){pe!==ye&&(t.clearDepth(ye),pe=ye)},reset:function(){R=!1,X=null,ne=null,pe=null}}}function o(){let R=!1,X=null,ne=null,pe=null,ye=null,Be=null,gt=null,Ct=null,Ji=null;return{setTest:function(qe){R||(qe?Te(2960):ve(2960))},setMask:function(qe){X!==qe&&!R&&(t.stencilMask(qe),X=qe)},setFunc:function(qe,ei,gn){(ne!==qe||pe!==ei||ye!==gn)&&(t.stencilFunc(qe,ei,gn),ne=qe,pe=ei,ye=gn)},setOp:function(qe,ei,gn){(Be!==qe||gt!==ei||Ct!==gn)&&(t.stencilOp(qe,ei,gn),Be=qe,gt=ei,Ct=gn)},setLocked:function(qe){R=qe},setClear:function(qe){Ji!==qe&&(t.clearStencil(qe),Ji=qe)},reset:function(){R=!1,X=null,ne=null,pe=null,ye=null,Be=null,gt=null,Ct=null,Ji=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,w=null,S=null,T=null,P=null,y=null,A=!1,L=null,$=null,re=null,N=null,I=null;const G=t.getParameter(35661);let J=!1,Z=0;const D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(D)[1]),J=Z>=1):D.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),J=Z>=2);let W=null,V={};const O=t.getParameter(3088),B=t.getParameter(2978),Q=new Et().fromArray(O),ee=new Et().fromArray(B);function ie(R,X,ne){const pe=new Uint8Array(4),ye=t.createTexture();t.bindTexture(R,ye),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let Be=0;Be<ne;Be++)t.texImage2D(X+Be,0,6408,1,1,0,6408,5121,pe);return ye}const H={};H[3553]=ie(3553,3553,1),H[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(2929),l.setFunc(Rd),ut(!1),kt(Dp),Te(2884),mt(ji);function Te(R){d[R]!==!0&&(t.enable(R),d[R]=!0)}function ve(R){d[R]!==!1&&(t.disable(R),d[R]=!1)}function Se(R,X){return g[R]!==X?(t.bindFramebuffer(R,X),g[R]=X,i&&(R===36009&&(g[36160]=X),R===36160&&(g[36009]=X)),!0):!1}function he(R,X){let ne=h,pe=!1;if(R)if(ne=x.get(X),ne===void 0&&(ne=[],x.set(X,ne)),R.isWebGLMultipleRenderTargets){const ye=R.texture;if(ne.length!==ye.length||ne[0]!==36064){for(let Be=0,gt=ye.length;Be<gt;Be++)ne[Be]=36064+Be;ne.length=ye.length,pe=!0}}else ne[0]!==36064&&(ne[0]=36064,pe=!0);else ne[0]!==1029&&(ne[0]=1029,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Re(R){return p!==R?(t.useProgram(R),p=R,!0):!1}const be={[Jr]:32774,[k1]:32778,[F1]:32779};if(i)be[Np]=32775,be[kp]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(be[Np]=R.MIN_EXT,be[kp]=R.MAX_EXT)}const le={[O1]:0,[z1]:1,[U1]:768,[N0]:770,[$1]:776,[G1]:774,[V1]:772,[B1]:769,[k0]:771,[W1]:775,[H1]:773};function mt(R,X,ne,pe,ye,Be,gt,Ct){if(R===ji){m===!0&&(ve(3042),m=!1);return}if(m===!1&&(Te(3042),m=!0),R!==N1){if(R!==v||Ct!==A){if((_!==Jr||T!==Jr)&&(t.blendEquation(32774),_=Jr,T=Jr),Ct)switch(R){case ws:t.blendFuncSeparate(1,771,1,771);break;case Dd:t.blendFunc(1,1);break;case Rp:t.blendFuncSeparate(0,769,0,1);break;case Ip:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ws:t.blendFuncSeparate(770,771,1,771);break;case Dd:t.blendFunc(770,1);break;case Rp:t.blendFuncSeparate(0,769,0,1);break;case Ip:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,S=null,P=null,y=null,v=R,A=Ct}return}ye=ye||X,Be=Be||ne,gt=gt||pe,(X!==_||ye!==T)&&(t.blendEquationSeparate(be[X],be[ye]),_=X,T=ye),(ne!==w||pe!==S||Be!==P||gt!==y)&&(t.blendFuncSeparate(le[ne],le[pe],le[Be],le[gt]),w=ne,S=pe,P=Be,y=gt),v=R,A=!1}function lt(R,X){R.side===nh?ve(2884):Te(2884);let ne=R.side===En;X&&(ne=!ne),ut(ne),R.blending===ws&&R.transparent===!1?mt(ji):mt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const pe=R.stencilWrite;u.setTest(pe),pe&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ve(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Te(32926):ve(32926)}function ut(R){L!==R&&(R?t.frontFace(2304):t.frontFace(2305),L=R)}function kt(R){R!==D1?(Te(2884),R!==$&&(R===Dp?t.cullFace(1029):R===R1?t.cullFace(1028):t.cullFace(1032))):ve(2884),$=R}function nt(R){R!==re&&(J&&t.lineWidth(R),re=R)}function Ve(R,X,ne){R?(Te(32823),(N!==X||I!==ne)&&(t.polygonOffset(X,ne),N=X,I=ne)):ve(32823)}function mn(R){R?Te(3089):ve(3089)}function Gt(R){R===void 0&&(R=33984+G-1),W!==R&&(t.activeTexture(R),W=R)}function b(R,X,ne){ne===void 0&&(W===null?ne=33984+G-1:ne=W);let pe=V[ne];pe===void 0&&(pe={type:void 0,texture:void 0},V[ne]=pe),(pe.type!==R||pe.texture!==X)&&(W!==ne&&(t.activeTexture(ne),W=ne),t.bindTexture(R,X||H[R]),pe.type=R,pe.texture=X)}function M(){const R=V[W];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function C(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(R){Q.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function _e(R){ee.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function Ie(R,X){let ne=f.get(X);ne===void 0&&(ne=new WeakMap,f.set(X,ne));let pe=ne.get(R);pe===void 0&&(pe=t.getUniformBlockIndex(X,R.name),ne.set(R,pe))}function Ne(R,X){const pe=f.get(X).get(R);c.get(X)!==pe&&(t.uniformBlockBinding(X,pe,R.__bindingPointIndex),c.set(X,pe))}function We(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},W=null,V={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,w=null,S=null,T=null,P=null,y=null,A=!1,L=null,$=null,re=null,N=null,I=null,Q.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:ve,bindFramebuffer:Se,drawBuffers:he,useProgram:Re,setBlending:mt,setMaterial:lt,setFlipSided:ut,setCullFace:kt,setLineWidth:nt,setPolygonOffset:Ve,setScissorTest:mn,activeTexture:Gt,bindTexture:b,unbindTexture:M,compressedTexImage2D:j,compressedTexImage3D:se,texImage2D:ge,texImage3D:de,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:k,texStorage3D:fe,texSubImage2D:oe,texSubImage3D:ue,compressedTexSubImage2D:Ee,compressedTexSubImage3D:C,scissor:xe,viewport:_e,reset:We}}function gC(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):Ul("canvas")}function _(b,M,j,se){let oe=1;if((b.width>se||b.height>se)&&(oe=se/Math.max(b.width,b.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ue=M?Od:Math.floor,Ee=ue(oe*b.width),C=ue(oe*b.height);h===void 0&&(h=v(Ee,C));const k=j?v(Ee,C):h;return k.width=Ee,k.height=C,k.getContext("2d").drawImage(b,0,0,Ee,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ee+"x"+C+")."),k}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function w(b){return am(b.width)&&am(b.height)}function S(b){return a?!1:b.wrapS!==an||b.wrapT!==an||b.minFilter!==Qe&&b.minFilter!==yn}function T(b,M){return b.generateMipmaps&&M&&b.minFilter!==Qe&&b.minFilter!==yn}function P(b){t.generateMipmap(b)}function y(b,M,j,se,oe=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=M;return M===6403&&(j===5126&&(ue=33326),j===5131&&(ue=33325),j===5121&&(ue=33321)),M===33319&&(j===5126&&(ue=33328),j===5131&&(ue=33327),j===5121&&(ue=33323)),M===6408&&(j===5126&&(ue=34836),j===5131&&(ue=34842),j===5121&&(ue=se===Xe&&oe===!1?35907:32856),j===32819&&(ue=32854),j===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function A(b,M,j){return T(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==Qe&&b.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function L(b){return b===Qe||b===Fp||b===qu?9728:9729}function $(b){const M=b.target;M.removeEventListener("dispose",$),N(M),M.isVideoTexture&&x.delete(M)}function re(b){const M=b.target;M.removeEventListener("dispose",re),G(M)}function N(b){const M=i.get(b);if(M.__webglInit===void 0)return;const j=b.source,se=p.get(j);if(se){const oe=se[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(b),Object.keys(se).length===0&&p.delete(j)}i.remove(b)}function I(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const j=b.source,se=p.get(j);delete se[M.__cacheKey],o.memory.textures--}function G(b){const M=b.texture,j=i.get(b),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)t.deleteFramebuffer(j.__webglFramebuffer[oe]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[oe]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let oe=0;oe<j.__webglColorRenderbuffer.length;oe++)j.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[oe]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let oe=0,ue=M.length;oe<ue;oe++){const Ee=i.get(M[oe]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(b)}let J=0;function Z(){J=0}function D(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function W(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function V(b,M){const j=i.get(b);if(b.isVideoTexture&&mn(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(j,b,M);return}}n.bindTexture(3553,j.__webglTexture,33984+M)}function O(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ve(j,b,M);return}n.bindTexture(35866,j.__webglTexture,33984+M)}function B(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ve(j,b,M);return}n.bindTexture(32879,j.__webglTexture,33984+M)}function Q(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Se(j,b,M);return}n.bindTexture(34067,j.__webglTexture,33984+M)}const ee={[mr]:10497,[an]:33071,[kd]:33648},ie={[Qe]:9728,[Fp]:9984,[qu]:9986,[yn]:9729,[ow]:9985,[$o]:9987};function H(b,M,j){if(j?(t.texParameteri(b,10242,ee[M.wrapS]),t.texParameteri(b,10243,ee[M.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,ee[M.wrapR]),t.texParameteri(b,10240,ie[M.magFilter]),t.texParameteri(b,10241,ie[M.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(M.wrapS!==an||M.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,L(M.magFilter)),t.texParameteri(b,10241,L(M.minFilter)),M.minFilter!==Qe&&M.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Qe||M.minFilter!==qu&&M.minFilter!==$o||M.type===mi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Te(b,M){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",$));const se=M.source;let oe=p.get(se);oe===void 0&&(oe={},p.set(se,oe));const ue=W(M);if(ue!==b.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),oe[ue].usedTimes++;const Ee=oe[b.__cacheKey];Ee!==void 0&&(oe[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(M)),b.__cacheKey=ue,b.__webglTexture=oe[ue].texture}return j}function ve(b,M,j){let se=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=35866),M.isData3DTexture&&(se=32879);const oe=Te(b,M),ue=M.source;n.bindTexture(se,b.__webglTexture,33984+j);const Ee=i.get(ue);if(ue.version!==Ee.__version||oe===!0){n.activeTexture(33984+j),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const C=S(M)&&w(M.image)===!1;let k=_(M.image,C,!1,c);k=Gt(M,k);const fe=w(k)||a,ge=s.convert(M.format,M.encoding);let de=s.convert(M.type),xe=y(M.internalFormat,ge,de,M.encoding,M.isVideoTexture);H(se,M,fe);let _e;const Ie=M.mipmaps,Ne=a&&M.isVideoTexture!==!0,We=Ee.__version===void 0||oe===!0,R=A(M,k,fe);if(M.isDepthTexture)xe=6402,a?M.type===mi?xe=36012:M.type===gr?xe=33190:M.type===Ms?xe=35056:xe=33189:M.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===yr&&xe===6402&&M.type!==z0&&M.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gr,de=s.convert(M.type)),M.format===Ns&&xe===6402&&(xe=34041,M.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ms,de=s.convert(M.type))),We&&(Ne?n.texStorage2D(3553,1,xe,k.width,k.height):n.texImage2D(3553,0,xe,k.width,k.height,0,ge,de,null));else if(M.isDataTexture)if(Ie.length>0&&fe){Ne&&We&&n.texStorage2D(3553,R,xe,Ie[0].width,Ie[0].height);for(let X=0,ne=Ie.length;X<ne;X++)_e=Ie[X],Ne?n.texSubImage2D(3553,X,0,0,_e.width,_e.height,ge,de,_e.data):n.texImage2D(3553,X,xe,_e.width,_e.height,0,ge,de,_e.data);M.generateMipmaps=!1}else Ne?(We&&n.texStorage2D(3553,R,xe,k.width,k.height),n.texSubImage2D(3553,0,0,0,k.width,k.height,ge,de,k.data)):n.texImage2D(3553,0,xe,k.width,k.height,0,ge,de,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&We&&n.texStorage3D(35866,R,xe,Ie[0].width,Ie[0].height,k.depth);for(let X=0,ne=Ie.length;X<ne;X++)_e=Ie[X],M.format!==ln?ge!==null?Ne?n.compressedTexSubImage3D(35866,X,0,0,0,_e.width,_e.height,k.depth,ge,_e.data,0,0):n.compressedTexImage3D(35866,X,xe,_e.width,_e.height,k.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?n.texSubImage3D(35866,X,0,0,0,_e.width,_e.height,k.depth,ge,de,_e.data):n.texImage3D(35866,X,xe,_e.width,_e.height,k.depth,0,ge,de,_e.data)}else{Ne&&We&&n.texStorage2D(3553,R,xe,Ie[0].width,Ie[0].height);for(let X=0,ne=Ie.length;X<ne;X++)_e=Ie[X],M.format!==ln?ge!==null?Ne?n.compressedTexSubImage2D(3553,X,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(3553,X,xe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?n.texSubImage2D(3553,X,0,0,_e.width,_e.height,ge,de,_e.data):n.texImage2D(3553,X,xe,_e.width,_e.height,0,ge,de,_e.data)}else if(M.isDataArrayTexture)Ne?(We&&n.texStorage3D(35866,R,xe,k.width,k.height,k.depth),n.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,ge,de,k.data)):n.texImage3D(35866,0,xe,k.width,k.height,k.depth,0,ge,de,k.data);else if(M.isData3DTexture)Ne?(We&&n.texStorage3D(32879,R,xe,k.width,k.height,k.depth),n.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,ge,de,k.data)):n.texImage3D(32879,0,xe,k.width,k.height,k.depth,0,ge,de,k.data);else if(M.isFramebufferTexture){if(We)if(Ne)n.texStorage2D(3553,R,xe,k.width,k.height);else{let X=k.width,ne=k.height;for(let pe=0;pe<R;pe++)n.texImage2D(3553,pe,xe,X,ne,0,ge,de,null),X>>=1,ne>>=1}}else if(Ie.length>0&&fe){Ne&&We&&n.texStorage2D(3553,R,xe,Ie[0].width,Ie[0].height);for(let X=0,ne=Ie.length;X<ne;X++)_e=Ie[X],Ne?n.texSubImage2D(3553,X,0,0,ge,de,_e):n.texImage2D(3553,X,xe,ge,de,_e);M.generateMipmaps=!1}else Ne?(We&&n.texStorage2D(3553,R,xe,k.width,k.height),n.texSubImage2D(3553,0,0,0,ge,de,k)):n.texImage2D(3553,0,xe,ge,de,k);T(M,fe)&&P(se),Ee.__version=ue.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Se(b,M,j){if(M.image.length!==6)return;const se=Te(b,M),oe=M.source;n.bindTexture(34067,b.__webglTexture,33984+j);const ue=i.get(oe);if(oe.version!==ue.__version||se===!0){n.activeTexture(33984+j),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,k=[];for(let X=0;X<6;X++)!Ee&&!C?k[X]=_(M.image[X],!1,!0,u):k[X]=C?M.image[X].image:M.image[X],k[X]=Gt(M,k[X]);const fe=k[0],ge=w(fe)||a,de=s.convert(M.format,M.encoding),xe=s.convert(M.type),_e=y(M.internalFormat,de,xe,M.encoding),Ie=a&&M.isVideoTexture!==!0,Ne=ue.__version===void 0||se===!0;let We=A(M,fe,ge);H(34067,M,ge);let R;if(Ee){Ie&&Ne&&n.texStorage2D(34067,We,_e,fe.width,fe.height);for(let X=0;X<6;X++){R=k[X].mipmaps;for(let ne=0;ne<R.length;ne++){const pe=R[ne];M.format!==ln?de!==null?Ie?n.compressedTexSubImage2D(34069+X,ne,0,0,pe.width,pe.height,de,pe.data):n.compressedTexImage2D(34069+X,ne,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(34069+X,ne,0,0,pe.width,pe.height,de,xe,pe.data):n.texImage2D(34069+X,ne,_e,pe.width,pe.height,0,de,xe,pe.data)}}}else{R=M.mipmaps,Ie&&Ne&&(R.length>0&&We++,n.texStorage2D(34067,We,_e,k[0].width,k[0].height));for(let X=0;X<6;X++)if(C){Ie?n.texSubImage2D(34069+X,0,0,0,k[X].width,k[X].height,de,xe,k[X].data):n.texImage2D(34069+X,0,_e,k[X].width,k[X].height,0,de,xe,k[X].data);for(let ne=0;ne<R.length;ne++){const ye=R[ne].image[X].image;Ie?n.texSubImage2D(34069+X,ne+1,0,0,ye.width,ye.height,de,xe,ye.data):n.texImage2D(34069+X,ne+1,_e,ye.width,ye.height,0,de,xe,ye.data)}}else{Ie?n.texSubImage2D(34069+X,0,0,0,de,xe,k[X]):n.texImage2D(34069+X,0,_e,de,xe,k[X]);for(let ne=0;ne<R.length;ne++){const pe=R[ne];Ie?n.texSubImage2D(34069+X,ne+1,0,0,de,xe,pe.image[X]):n.texImage2D(34069+X,ne+1,_e,de,xe,pe.image[X])}}}T(M,ge)&&P(34067),ue.__version=oe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function he(b,M,j,se,oe){const ue=s.convert(j.format,j.encoding),Ee=s.convert(j.type),C=y(j.internalFormat,ue,Ee,j.encoding);i.get(M).__hasExternalTextures||(oe===32879||oe===35866?n.texImage3D(oe,0,C,M.width,M.height,M.depth,0,ue,Ee,null):n.texImage2D(oe,0,C,M.width,M.height,0,ue,Ee,null)),n.bindFramebuffer(36160,b),Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,se,oe,i.get(j).__webglTexture,0,nt(M)):(oe===3553||oe>=34069&&oe<=34074)&&t.framebufferTexture2D(36160,se,oe,i.get(j).__webglTexture,0),n.bindFramebuffer(36160,null)}function Re(b,M,j){if(t.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let se=33189;if(j||Ve(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===mi?se=36012:oe.type===gr&&(se=33190));const ue=nt(M);Ve(M)?d.renderbufferStorageMultisampleEXT(36161,ue,se,M.width,M.height):t.renderbufferStorageMultisample(36161,ue,se,M.width,M.height)}else t.renderbufferStorage(36161,se,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){const se=nt(M);j&&Ve(M)===!1?t.renderbufferStorageMultisample(36161,se,35056,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(36161,se,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<se.length;oe++){const ue=se[oe],Ee=s.convert(ue.format,ue.encoding),C=s.convert(ue.type),k=y(ue.internalFormat,Ee,C,ue.encoding),fe=nt(M);j&&Ve(M)===!1?t.renderbufferStorageMultisample(36161,fe,k,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(36161,fe,k,M.width,M.height):t.renderbufferStorage(36161,k,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function be(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,oe=nt(M);if(M.depthTexture.format===yr)Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,oe):t.framebufferTexture2D(36160,36096,3553,se,0);else if(M.depthTexture.format===Ns)Ve(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,oe):t.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function le(b){const M=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,b)}else if(j){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(36160,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),Re(M.__webglDepthbuffer[se],b,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Re(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function mt(b,M,j){const se=i.get(b);M!==void 0&&he(se.__webglFramebuffer,b,b.texture,36064,3553),j!==void 0&&le(b)}function lt(b){const M=b.texture,j=i.get(b),se=i.get(M);b.addEventListener("dispose",re),b.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const oe=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,Ee=w(b)||a;if(oe){j.__webglFramebuffer=[];for(let C=0;C<6;C++)j.__webglFramebuffer[C]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),ue)if(r.drawBuffers){const C=b.texture;for(let k=0,fe=C.length;k<fe;k++){const ge=i.get(C[k]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ve(b)===!1){const C=ue?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let k=0;k<C.length;k++){const fe=C[k];j.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(36161,j.__webglColorRenderbuffer[k]);const ge=s.convert(fe.format,fe.encoding),de=s.convert(fe.type),xe=y(fe.internalFormat,ge,de,fe.encoding,b.isXRRenderTarget===!0),_e=nt(b);t.renderbufferStorageMultisample(36161,_e,xe,b.width,b.height),t.framebufferRenderbuffer(36160,36064+k,36161,j.__webglColorRenderbuffer[k])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(oe){n.bindTexture(34067,se.__webglTexture),H(34067,M,Ee);for(let C=0;C<6;C++)he(j.__webglFramebuffer[C],b,M,36064,34069+C);T(M,Ee)&&P(34067),n.unbindTexture()}else if(ue){const C=b.texture;for(let k=0,fe=C.length;k<fe;k++){const ge=C[k],de=i.get(ge);n.bindTexture(3553,de.__webglTexture),H(3553,ge,Ee),he(j.__webglFramebuffer,b,ge,36064+k,3553),T(ge,Ee)&&P(3553)}n.unbindTexture()}else{let C=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?C=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(C,se.__webglTexture),H(C,M,Ee),he(j.__webglFramebuffer,b,M,36064,C),T(M,Ee)&&P(C),n.unbindTexture()}b.depthBuffer&&le(b)}function ut(b){const M=w(b)||a,j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let se=0,oe=j.length;se<oe;se++){const ue=j[se];if(T(ue,M)){const Ee=b.isWebGLCubeRenderTarget?34067:3553,C=i.get(ue).__webglTexture;n.bindTexture(Ee,C),P(Ee),n.unbindTexture()}}}function kt(b){if(a&&b.samples>0&&Ve(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],j=b.width,se=b.height;let oe=16384;const ue=[],Ee=b.stencilBuffer?33306:36096,C=i.get(b),k=b.isWebGLMultipleRenderTargets===!0;if(k)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,null),n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,null,0);n.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,C.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){ue.push(36064+fe),b.depthBuffer&&ue.push(Ee);const ge=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ge===!1&&(b.depthBuffer&&(oe|=256),b.stencilBuffer&&(oe|=1024)),k&&t.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[fe]),ge===!0&&(t.invalidateFramebuffer(36008,[Ee]),t.invalidateFramebuffer(36009,[Ee])),k){const de=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,de,0)}t.blitFramebuffer(0,0,j,se,0,0,j,se,oe,9728),g&&t.invalidateFramebuffer(36008,ue)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),k)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,C.__webglColorRenderbuffer[fe]);const ge=i.get(M[fe]).__webglTexture;n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,ge,0)}n.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function nt(b){return Math.min(f,b.samples)}function Ve(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mn(b){const M=o.render.frame;x.get(b)!==M&&(x.set(b,M),b.update())}function Gt(b,M){const j=b.encoding,se=b.format,oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Fd||j!==qi&&(j===Xe?a===!1?e.has("EXT_sRGB")===!0&&se===ln?(b.format=Fd,b.minFilter=yn,b.generateMipmaps=!1):M=V0.sRGBToLinear(M):(se!==ln||oe!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ve}function vC(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Ar)return 5121;if(s===cw)return 32819;if(s===dw)return 32820;if(s===aw)return 5120;if(s===lw)return 5122;if(s===z0)return 5123;if(s===uw)return 5124;if(s===gr)return 5125;if(s===mi)return 5126;if(s===Is)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fw)return 6406;if(s===ln)return 6408;if(s===pw)return 6409;if(s===mw)return 6410;if(s===yr)return 6402;if(s===Ns)return 34041;if(s===hw)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Fd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gw)return 6403;if(s===vw)return 36244;if(s===_w)return 33319;if(s===xw)return 33320;if(s===yw)return 36249;if(s===Ku||s===Zu||s===Qu||s===Ju)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ku)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ku)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Op||s===zp||s===Up||s===Bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Op)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Up)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Hp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vp)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===Wp||s===$p||s===jp||s===Xp||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$p)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jp)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===em)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nm)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===im)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===im)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ms?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class _C extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ja extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xC={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ja;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yC extends Kt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:yr,c!==yr&&c!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===yr&&(i=gr),i===void 0&&c===Ns&&(i=Ms),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1}}class SC extends Ir{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const x=n.getContextAttributes();let h=null,p=null;const m=[],v=[],_=new Set,w=new Map,S=new Sn;S.layers.enable(1),S.viewport=new Et;const T=new Sn;T.layers.enable(2),T.viewport=new Et;const P=[S,T],y=new _C;y.layers.enable(1),y.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=m[O];return B===void 0&&(B=new Tc,m[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=m[O];return B===void 0&&(B=new Tc,m[O]=B),B.getGripSpace()},this.getHand=function(O){let B=m[O];return B===void 0&&(B=new Tc,m[O]=B),B.getHandSpace()};function $(O){const B=v.indexOf(O.inputSource);if(B===-1)return;const Q=m[B];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function re(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",N);for(let O=0;O<m.length;O++){const B=v[O];B!==null&&(v[O]=null,m[O].disconnect(B))}A=null,L=null,e.setRenderTarget(h),d=null,f=null,c=null,r=null,p=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",re),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:d}),p=new Zt(d.framebufferWidth,d.framebufferHeight,{format:ln,type:Ar,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let B=null,Q=null,ee=null;x.depth&&(ee=x.stencil?35056:33190,B=x.stencil?Ns:yr,Q=x.stencil?Ms:gr);const ie={colorFormat:32856,depthFormat:ee,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),p=new Zt(f.textureWidth,f.textureHeight,{format:ln,type:Ar,depthTexture:new yC(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(O){for(let B=0;B<O.removed.length;B++){const Q=O.removed[B],ee=v.indexOf(Q);ee>=0&&(v[ee]=null,m[ee].disconnect(Q))}for(let B=0;B<O.added.length;B++){const Q=O.added[B];let ee=v.indexOf(Q);if(ee===-1){for(let H=0;H<m.length;H++)if(H>=v.length){v.push(Q),ee=H;break}else if(v[H]===null){v[H]=Q,ee=H;break}if(ee===-1)break}const ie=m[ee];ie&&ie.connect(Q)}}const I=new z,G=new z;function J(O,B,Q){I.setFromMatrixPosition(B.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const ee=I.distanceTo(G),ie=B.projectionMatrix.elements,H=Q.projectionMatrix.elements,Te=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),Se=(ie[9]+1)/ie[5],he=(ie[9]-1)/ie[5],Re=(ie[8]-1)/ie[0],be=(H[8]+1)/H[0],le=Te*Re,mt=Te*be,lt=ee/(-Re+be),ut=lt*-Re;B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ut),O.translateZ(lt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const kt=Te+lt,nt=ve+lt,Ve=le-ut,mn=mt+(ee-ut),Gt=Se*ve/nt*kt,b=he*ve/nt*kt;O.projectionMatrix.makePerspective(Ve,mn,Gt,b,kt,nt)}function Z(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;y.near=T.near=S.near=O.near,y.far=T.far=S.far=O.far,(A!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far);const B=O.parent,Q=y.cameras;Z(y,B);for(let ie=0;ie<Q.length;ie++)Z(Q[ie],B);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),O.matrix.copy(y.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const ee=O.children;for(let ie=0,H=ee.length;ie<H;ie++)ee[ie].updateMatrixWorld(!0);Q.length===2?J(y,S,T):y.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.getPlanes=function(){return _};let D=null;function W(O,B){if(u=B.getViewerPose(l||o),g=B,u!==null){const Q=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ee=!1;Q.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let ie=0;ie<Q.length;ie++){const H=Q[ie];let Te=null;if(d!==null)Te=d.getViewport(H);else{const Se=c.getViewSubImage(f,H);Te=Se.viewport,ie===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ve=P[ie];ve===void 0&&(ve=new Sn,ve.layers.enable(ie),ve.viewport=new Et,P[ie]=ve),ve.matrix.fromArray(H.transform.matrix),ve.projectionMatrix.fromArray(H.projectionMatrix),ve.viewport.set(Te.x,Te.y,Te.width,Te.height),ie===0&&y.matrix.copy(ve.matrix),ee===!0&&y.cameras.push(ve)}}for(let Q=0;Q<m.length;Q++){const ee=v[Q],ie=m[Q];ee!==null&&ie!==void 0&&ie.update(ee,B,l||o)}if(D&&D(O,B),B.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let Q=null;for(const ee of _)B.detectedPlanes.has(ee)||(Q===null&&(Q=[]),Q.push(ee));if(Q!==null)for(const ee of Q)_.delete(ee),w.delete(ee),i.dispatchEvent({type:"planeremoved",data:ee});for(const ee of B.detectedPlanes)if(!_.has(ee))_.add(ee),w.set(ee,B.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ee});else{const ie=w.get(ee);ee.lastChangedTime>ie&&(w.set(ee,ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ee}))}}g=null}const V=new Z0;V.setAnimationLoop(W),this.setAnimationLoop=function(O){D=O},this.dispose=function(){}}}function wC(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,Y0(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===En&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===En&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const w=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===En&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MC(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const w=_.program;i.uniformBlockBinding(v,w)}function u(v,_){let w=r[v.id];w===void 0&&(x(v),w=c(v),r[v.id]=w,v.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(v,S);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const _=f();v.__bindingPointIndex=_;const w=t.createBuffer(),S=v.__size,T=v.usage;return t.bindBuffer(35345,w),t.bufferData(35345,S,T),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],w=v.uniforms,S=v.__cache;t.bindBuffer(35345,_);for(let T=0,P=w.length;T<P;T++){const y=w[T];if(g(y,T,S)===!0){const A=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let re=0;re<L.length;re++){const N=L[re],I=h(N);typeof N=="number"?(y.__data[0]=N,t.bufferSubData(35345,A+$,y.__data)):N.isMatrix3?(y.__data[0]=N.elements[0],y.__data[1]=N.elements[1],y.__data[2]=N.elements[2],y.__data[3]=N.elements[0],y.__data[4]=N.elements[3],y.__data[5]=N.elements[4],y.__data[6]=N.elements[5],y.__data[7]=N.elements[0],y.__data[8]=N.elements[6],y.__data[9]=N.elements[7],y.__data[10]=N.elements[8],y.__data[11]=N.elements[0]):(N.toArray(y.__data,$),$+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,A,y.__data)}}t.bindBuffer(35345,null)}function g(v,_,w){const S=v.value;if(w[_]===void 0){if(typeof S=="number")w[_]=S;else{const T=Array.isArray(S)?S:[S],P=[];for(let y=0;y<T.length;y++)P.push(T[y].clone());w[_]=P}return!0}else if(typeof S=="number"){if(w[_]!==S)return w[_]=S,!0}else{const T=Array.isArray(w[_])?w[_]:[w[_]],P=Array.isArray(S)?S:[S];for(let y=0;y<T.length;y++){const A=T[y];if(A.equals(P[y])===!1)return A.copy(P[y]),!0}}return!1}function x(v){const _=v.uniforms;let w=0;const S=16;let T=0;for(let P=0,y=_.length;P<y;P++){const A=_[P],L={boundary:0,storage:0},$=Array.isArray(A.value)?A.value:[A.value];for(let re=0,N=$.length;re<N;re++){const I=$[re],G=h(I);L.boundary+=G.boundary,L.storage+=G.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,P>0){T=w%S;const re=S-T;T!==0&&re-L.boundary<0&&(w+=S-T,A.__offset=w)}w+=L.storage}return T=w%S,T>0&&(w+=S-T),v.__size=w,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function EC(){const t=Ul("canvas");return t.style.display="block",t}function i_(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:EC(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qi,this.physicallyCorrectLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,w=-1,S=null;const T=new Et,P=new Et;let y=null,A=e.width,L=e.height,$=1,re=null,N=null;const I=new Et(0,0,A,L),G=new Et(0,0,A,L);let J=!1;const Z=new K0;let D=!1,W=!1,V=null;const O=new St,B=new Me,Q=new z,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return _===null?$:1}let H=n;function Te(E,U){for(let Y=0;Y<E.length;Y++){const F=E[Y],q=e.getContext(F,U);if(q!==null)return q}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${th}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),H===null){const U=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&U.shift(),H=Te(U,E),H===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,Se,he,Re,be,le,mt,lt,ut,kt,nt,Ve,mn,Gt,b,M,j,se,oe,ue,Ee,C,k,fe;function ge(){ve=new kb(H),Se=new Pb(H,ve,t),ve.init(Se),C=new vC(H,ve,Se),he=new mC(H,ve,Se),Re=new zb,be=new tC,le=new gC(H,ve,he,be,Se,C,Re),mt=new Db(h),lt=new Nb(h),ut=new Xw(H,Se),k=new Cb(H,ve,ut,Se),kt=new Fb(H,ut,Re,k),nt=new Hb(H,kt,ut,Re),oe=new Vb(H,Se,le),M=new Lb(be),Ve=new eC(h,mt,lt,ve,Se,k,M),mn=new wC(h,be),Gt=new iC,b=new uC(ve,Se),se=new Tb(h,mt,lt,he,nt,c,o),j=new pC(h,nt,Se),fe=new MC(H,Re,Se,he),ue=new Ab(H,ve,Re,Se),Ee=new Ob(H,ve,Re,Se),Re.programs=Ve.programs,h.capabilities=Se,h.extensions=ve,h.properties=be,h.renderLists=Gt,h.shadowMap=j,h.state=he,h.info=Re}ge();const de=new SC(h,H);this.xr=de,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(A,L,!1))},this.getSize=function(E){return E.set(A,L)},this.setSize=function(E,U,Y){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,L=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),Y!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(A*$,L*$).floor()},this.setDrawingBufferSize=function(E,U,Y){A=E,L=U,$=Y,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,U,Y,F){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,U,Y,F),he.viewport(T.copy(I).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,U,Y,F){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,U,Y,F),he.scissor(P.copy(G).multiplyScalar($).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){he.setScissorTest(J=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(E=!0,U=!0,Y=!0){let F=0;E&&(F|=16384),U&&(F|=256),Y&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),Gt.dispose(),b.dispose(),be.dispose(),mt.dispose(),lt.dispose(),nt.dispose(),k.dispose(),fe.dispose(),Ve.dispose(),de.dispose(),de.removeEventListener("sessionstart",pe),de.removeEventListener("sessionend",ye),V&&(V.dispose(),V=null),Be.stop()};function xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Re.autoReset,U=j.enabled,Y=j.autoUpdate,F=j.needsUpdate,q=j.type;ge(),Re.autoReset=E,j.enabled=U,j.autoUpdate=Y,j.needsUpdate=F,j.type=q}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){const U=E.target;U.removeEventListener("dispose",Ne),We(U)}function We(E){R(E),be.remove(E)}function R(E){const U=be.get(E).programs;U!==void 0&&(U.forEach(function(Y){Ve.releaseProgram(Y)}),E.isShaderMaterial&&Ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,F,q,we){U===null&&(U=ee);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Pe=a_(E,U,Y,F,q);he.setMaterial(F,Ce);let Le=Y.index,Ue=1;F.wireframe===!0&&(Le=kt.getWireframeAttribute(Y),Ue=2);const ke=Y.drawRange,Fe=Y.attributes.position;let rt=ke.start*Ue,en=(ke.start+ke.count)*Ue;we!==null&&(rt=Math.max(rt,we.start*Ue),en=Math.min(en,(we.start+we.count)*Ue)),Le!==null?(rt=Math.max(rt,0),en=Math.min(en,Le.count)):Fe!=null&&(rt=Math.max(rt,0),en=Math.min(en,Fe.count));const ti=en-rt;if(ti<0||ti===1/0)return;k.setup(q,F,Pe,Y,Le);let er,st=ue;if(Le!==null&&(er=ut.get(Le),st=Ee,st.setIndex(er)),q.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*ie()),st.setMode(1)):st.setMode(4);else if(q.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),he.setLineWidth(Oe*ie()),q.isLineSegments?st.setMode(1):q.isLineLoop?st.setMode(2):st.setMode(3)}else q.isPoints?st.setMode(0):q.isSprite&&st.setMode(4);if(q.isInstancedMesh)st.renderInstances(rt,ti,q.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,hu=Math.min(Y.instanceCount,Oe);st.renderInstances(rt,ti,hu)}else st.render(rt,ti)},this.compile=function(E,U){function Y(F,q,we){F.transparent===!0&&F.side===Ta?(F.side=En,F.needsUpdate=!0,gn(F,q,we),F.side=Cr,F.needsUpdate=!0,gn(F,q,we),F.side=Ta):gn(F,q,we)}d=b.get(E),d.init(),x.push(d),E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(h.physicallyCorrectLights),E.traverse(function(F){const q=F.material;if(q)if(Array.isArray(q))for(let we=0;we<q.length;we++){const Ce=q[we];Y(Ce,E,F)}else Y(q,E,F)}),x.pop(),d=null};let X=null;function ne(E){X&&X(E)}function pe(){Be.stop()}function ye(){Be.start()}const Be=new Z0;Be.setAnimationLoop(ne),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){X=E,de.setAnimationLoop(E),E===null?Be.stop():Be.start()},de.addEventListener("sessionstart",pe),de.addEventListener("sessionend",ye),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,U,_),d=b.get(E,x.length),d.init(),x.push(d),O.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(O),W=this.localClippingEnabled,D=M.init(this.clippingPlanes,W,U),f=Gt.get(E,g.length),f.init(),g.push(f),gt(E,U,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,N),D===!0&&M.beginShadows();const Y=d.state.shadowsArray;if(j.render(Y,E,U),D===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(f,E),d.setupLights(h.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let q=0,we=F.length;q<we;q++){const Ce=F[q];Ct(f,E,Ce,Ce.viewport)}}else Ct(f,E,U);_!==null&&(le.updateMultisampleRenderTarget(_),le.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,U),k.resetDefaultState(),w=-1,S=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function gt(E,U,Y,F){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){F&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const Ce=nt.update(E),Pe=E.material;Pe.visible&&f.push(E,Ce,Pe,Y,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Re.render.frame&&(E.skeleton.update(),E.skeleton.frame=Re.render.frame),!E.frustumCulled||Z.intersectsObject(E))){F&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const Ce=nt.update(E),Pe=E.material;if(Array.isArray(Pe)){const Le=Ce.groups;for(let Ue=0,ke=Le.length;Ue<ke;Ue++){const Fe=Le[Ue],rt=Pe[Fe.materialIndex];rt&&rt.visible&&f.push(E,Ce,rt,Y,Q.z,Fe)}}else Pe.visible&&f.push(E,Ce,Pe,Y,Q.z,null)}}const we=E.children;for(let Ce=0,Pe=we.length;Ce<Pe;Ce++)gt(we[Ce],U,Y,F)}function Ct(E,U,Y,F){const q=E.opaque,we=E.transmissive,Ce=E.transparent;d.setupLightsView(Y),we.length>0&&Ji(q,U,Y),F&&he.viewport(T.copy(F)),q.length>0&&qe(q,U,Y),we.length>0&&qe(we,U,Y),Ce.length>0&&qe(Ce,U,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ji(E,U,Y){const F=Se.isWebGL2;V===null&&(V=new Zt(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Is:Ar,minFilter:$o,samples:F&&s===!0?4:0})),h.getDrawingBufferSize(B),F?V.setSize(B.x,B.y):V.setSize(Od(B.x),Od(B.y));const q=h.getRenderTarget();h.setRenderTarget(V),h.clear();const we=h.toneMapping;h.toneMapping=Zn,qe(E,U,Y),h.toneMapping=we,le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V),h.setRenderTarget(q)}function qe(E,U,Y){const F=U.isScene===!0?U.overrideMaterial:null;for(let q=0,we=E.length;q<we;q++){const Ce=E[q],Pe=Ce.object,Le=Ce.geometry,Ue=F===null?Ce.material:F,ke=Ce.group;Pe.layers.test(Y.layers)&&ei(Pe,U,Y,Le,Ue,ke)}}function ei(E,U,Y,F,q,we){E.onBeforeRender(h,U,Y,F,q,we),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(h,U,Y,F,E,we),q.transparent===!0&&q.side===Ta?(q.side=En,q.needsUpdate=!0,h.renderBufferDirect(Y,U,F,q,E,we),q.side=Cr,q.needsUpdate=!0,h.renderBufferDirect(Y,U,F,q,E,we),q.side=Ta):h.renderBufferDirect(Y,U,F,q,E,we),E.onAfterRender(h,U,Y,F,q,we)}function gn(E,U,Y){U.isScene!==!0&&(U=ee);const F=be.get(E),q=d.state.lights,we=d.state.shadowsArray,Ce=q.state.version,Pe=Ve.getParameters(E,q.state,we,U,Y),Le=Ve.getProgramCacheKey(Pe);let Ue=F.programs;F.environment=E.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(E.isMeshStandardMaterial?lt:mt).get(E.envMap||F.environment),Ue===void 0&&(E.addEventListener("dispose",Ne),Ue=new Map,F.programs=Ue);let ke=Ue.get(Le);if(ke!==void 0){if(F.currentProgram===ke&&F.lightsStateVersion===Ce)return uh(E,Pe),ke}else Pe.uniforms=Ve.getUniforms(E),E.onBuild(Y,Pe,h),E.onBeforeCompile(Pe,h),ke=Ve.acquireProgram(Pe,Le),Ue.set(Le,ke),F.uniforms=Pe.uniforms;const Fe=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=M.uniform),uh(E,Pe),F.needsLights=u_(E),F.lightsStateVersion=Ce,F.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.directionalShadowMap.value=q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotShadowMap.value=q.state.spotShadowMap,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMap.value=q.state.pointShadowMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix);const rt=ke.getUniforms(),en=ll.seqWithValue(rt.seq,Fe);return F.currentProgram=ke,F.uniformsList=en,ke}function uh(E,U){const Y=be.get(E);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function a_(E,U,Y,F,q){U.isScene!==!0&&(U=ee),le.resetTextureUnits();const we=U.fog,Ce=F.isMeshStandardMaterial?U.environment:null,Pe=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:qi,Le=(F.isMeshStandardMaterial?lt:mt).get(F.envMap||Ce),Ue=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!F.normalMap&&!!Y.attributes.tangent,Fe=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,en=!!Y.morphAttributes.color,ti=F.toneMapped?h.toneMapping:Zn,er=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,st=er!==void 0?er.length:0,Oe=be.get(F),hu=d.state.lights;if(D===!0&&(W===!0||E!==S)){const tn=E===S&&F.id===w;M.setState(F,E,tn)}let vt=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==hu.state.version||Oe.outputEncoding!==Pe||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Le||F.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==M.numPlanes||Oe.numIntersection!==M.numIntersection)||Oe.vertexAlphas!==Ue||Oe.vertexTangents!==ke||Oe.morphTargets!==Fe||Oe.morphNormals!==rt||Oe.morphColors!==en||Oe.toneMapping!==ti||Se.isWebGL2===!0&&Oe.morphTargetsCount!==st)&&(vt=!0):(vt=!0,Oe.__version=F.version);let tr=Oe.currentProgram;vt===!0&&(tr=gn(F,U,q));let ch=!1,Hs=!1,pu=!1;const Ft=tr.getUniforms(),nr=Oe.uniforms;if(he.useProgram(tr.program)&&(ch=!0,Hs=!0,pu=!0),F.id!==w&&(w=F.id,Hs=!0),ch||S!==E){if(Ft.setValue(H,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Hs=!0,pu=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const tn=Ft.map.cameraPosition;tn!==void 0&&tn.setValue(H,Q.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&Ft.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){Ft.setOptional(H,q,"bindMatrix"),Ft.setOptional(H,q,"bindMatrixInverse");const tn=q.skeleton;tn&&(Se.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ft.setValue(H,"boneTexture",tn.boneTexture,le),Ft.setValue(H,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mu=Y.morphAttributes;if((mu.position!==void 0||mu.normal!==void 0||mu.color!==void 0&&Se.isWebGL2===!0)&&oe.update(q,Y,F,tr),(Hs||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,Ft.setValue(H,"receiveShadow",q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(nr.envMap.value=Le,nr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Hs&&(Ft.setValue(H,"toneMappingExposure",h.toneMappingExposure),Oe.needsLights&&l_(nr,pu),we&&F.fog===!0&&mn.refreshFogUniforms(nr,we),mn.refreshMaterialUniforms(nr,F,$,L,V),ll.upload(H,Oe.uniformsList,nr,le)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ll.upload(H,Oe.uniformsList,nr,le),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ft.setValue(H,"center",q.center),Ft.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ft.setValue(H,"normalMatrix",q.normalMatrix),Ft.setValue(H,"modelMatrix",q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const tn=F.uniformsGroups;for(let gu=0,c_=tn.length;gu<c_;gu++)if(Se.isWebGL2){const dh=tn[gu];fe.update(dh,tr),fe.bind(dh,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function l_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function u_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,U,Y){be.get(E.texture).__webglTexture=U,be.get(E.depthTexture).__webglTexture=Y;const F=be.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const Y=be.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){_=E,m=U,v=Y;let F=!0,q=null,we=!1,Ce=!1;if(E){const Le=be.get(E);Le.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Le.__webglFramebuffer===void 0?le.setupRenderTarget(E):Le.__hasExternalTextures&&le.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ce=!0);const ke=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=ke[U],we=!0):Se.isWebGL2&&E.samples>0&&le.useMultisampledRTT(E)===!1?q=be.get(E).__webglMultisampledFramebuffer:q=ke,T.copy(E.viewport),P.copy(E.scissor),y=E.scissorTest}else T.copy(I).multiplyScalar($).floor(),P.copy(G).multiplyScalar($).floor(),y=J;if(he.bindFramebuffer(36160,q)&&Se.drawBuffers&&F&&he.drawBuffers(E,q),he.viewport(T),he.scissor(P),he.setScissorTest(y),we){const Le=be.get(E.texture);H.framebufferTexture2D(36160,36064,34069+U,Le.__webglTexture,Y)}else if(Ce){const Le=be.get(E.texture),Ue=U||0;H.framebufferTextureLayer(36160,36064,Le.__webglTexture,Y||0,Ue)}w=-1},this.readRenderTargetPixels=function(E,U,Y,F,q,we,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){he.bindFramebuffer(36160,Pe);try{const Le=E.texture,Ue=Le.format,ke=Le.type;if(Ue!==ln&&C.convert(Ue)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=ke===Is&&(ve.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ve.has("EXT_color_buffer_float"));if(ke!==Ar&&C.convert(ke)!==H.getParameter(35738)&&!(ke===mi&&(Se.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-F&&Y>=0&&Y<=E.height-q&&H.readPixels(U,Y,F,q,C.convert(Ue),C.convert(ke),we)}finally{const Le=_!==null?be.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(E,U,Y=0){const F=Math.pow(2,-Y),q=Math.floor(U.image.width*F),we=Math.floor(U.image.height*F);le.setTexture2D(U,0),H.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,q,we),he.unbindTexture()},this.copyTextureToTexture=function(E,U,Y,F=0){const q=U.image.width,we=U.image.height,Ce=C.convert(Y.format),Pe=C.convert(Y.type);le.setTexture2D(Y,0),H.pixelStorei(37440,Y.flipY),H.pixelStorei(37441,Y.premultiplyAlpha),H.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,F,E.x,E.y,q,we,Ce,Pe,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,F,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Ce,U.mipmaps[0].data):H.texSubImage2D(3553,F,E.x,E.y,Ce,Pe,U.image),F===0&&Y.generateMipmaps&&H.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,U,Y,F,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Le=C.convert(F.format),Ue=C.convert(F.type);let ke;if(F.isData3DTexture)le.setTexture3D(F,0),ke=32879;else if(F.isDataArrayTexture)le.setTexture2DArray(F,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Fe=H.getParameter(3314),rt=H.getParameter(32878),en=H.getParameter(3316),ti=H.getParameter(3315),er=H.getParameter(32877),st=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;H.pixelStorei(3314,st.width),H.pixelStorei(32878,st.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(ke,q,U.x,U.y,U.z,we,Ce,Pe,Le,Ue,st.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ke,q,U.x,U.y,U.z,we,Ce,Pe,Le,st.data)):H.texSubImage3D(ke,q,U.x,U.y,U.z,we,Ce,Pe,Le,Ue,st),H.pixelStorei(3314,Fe),H.pixelStorei(32878,rt),H.pixelStorei(3316,en),H.pixelStorei(3315,ti),H.pixelStorei(32877,er),q===0&&F.generateMipmaps&&H.generateMipmap(ke),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,he.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bC extends i_{}bC.prototype.isWebGL1Renderer=!0;class r_ extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class TC extends Kt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Qe,c=Qe,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CC extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new St,Ud=new W0,Xa=new uu,Ya=new z;class AC extends Qt{constructor(e=new Jn,n=new CC){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Bm.copy(r).invert(),Ud.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,h=g;x<h;x++){const p=u.getX(x);Ya.fromBufferAttribute(f,p),Vm(Ya,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,h=g;x<h;x++)Ya.fromBufferAttribute(f,x),Vm(Ya,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vm(t,e,n,i,r,s,o){const a=Ud.distanceSqToPoint(t);if(a<n){const l=new z;Ud.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class PC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Hm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Hm(){return(typeof performance>"u"?Date:performance).now()}class Gm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);const Wm={type:"change"},Cc={type:"start"},$m={type:"end"};class LC extends Ir{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Gt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wm),i.update(),s=r.NONE},this.update=function(){const C=new z,k=new Pr().setFromUnitVectors(e.up,new z(0,1,0)),fe=k.clone().invert(),ge=new z,de=new Pr,xe=2*Math.PI;return function(){const Ie=i.object.position;C.copy(Ie).sub(i.target),C.applyQuaternion(k),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&A(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=i.minAzimuthAngle,We=i.maxAzimuthAngle;return isFinite(Ne)&&isFinite(We)&&(Ne<-Math.PI?Ne+=xe:Ne>Math.PI&&(Ne-=xe),We<-Math.PI?We+=xe:We>Math.PI&&(We-=xe),Ne<=We?a.theta=Math.max(Ne,Math.min(We,a.theta)):a.theta=a.theta>(Ne+We)/2?Math.max(Ne,a.theta):Math.min(We,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(fe),Ie.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||ge.distanceToSquared(i.object.position)>o||8*(1-de.dot(i.object.quaternion))>o?(i.dispatchEvent(Wm),ge.copy(i.object.position),de.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",mt),i.domElement.removeEventListener("pointercancel",kt),i.domElement.removeEventListener("wheel",mn),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",ut),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Gt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gm,l=new Gm;let u=1;const c=new z;let f=!1;const d=new Me,g=new Me,x=new Me,h=new Me,p=new Me,m=new Me,v=new Me,_=new Me,w=new Me,S=[],T={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function A(C){l.theta-=C}function L(C){l.phi-=C}const $=function(){const C=new z;return function(fe,ge){C.setFromMatrixColumn(ge,0),C.multiplyScalar(-fe),c.add(C)}}(),re=function(){const C=new z;return function(fe,ge){i.screenSpacePanning===!0?C.setFromMatrixColumn(ge,1):(C.setFromMatrixColumn(ge,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(fe),c.add(C)}}(),N=function(){const C=new z;return function(fe,ge){const de=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;C.copy(xe).sub(i.target);let _e=C.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),$(2*fe*_e/de.clientHeight,i.object.matrix),re(2*ge*_e/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(fe*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),re(ge*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(C){d.set(C.clientX,C.clientY)}function Z(C){v.set(C.clientX,C.clientY)}function D(C){h.set(C.clientX,C.clientY)}function W(C){g.set(C.clientX,C.clientY),x.subVectors(g,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;A(2*Math.PI*x.x/k.clientHeight),L(2*Math.PI*x.y/k.clientHeight),d.copy(g),i.update()}function V(C){_.set(C.clientX,C.clientY),w.subVectors(_,v),w.y>0?I(y()):w.y<0&&G(y()),v.copy(_),i.update()}function O(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),N(m.x,m.y),h.copy(p),i.update()}function B(C){C.deltaY<0?G(y()):C.deltaY>0&&I(y()),i.update()}function Q(C){let k=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),k=!0;break}k&&(C.preventDefault(),i.update())}function ee(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);d.set(C,k)}}function ie(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);h.set(C,k)}}function H(){const C=S[0].pageX-S[1].pageX,k=S[0].pageY-S[1].pageY,fe=Math.sqrt(C*C+k*k);v.set(0,fe)}function Te(){i.enableZoom&&H(),i.enablePan&&ie()}function ve(){i.enableZoom&&H(),i.enableRotate&&ee()}function Se(C){if(S.length==1)g.set(C.pageX,C.pageY);else{const fe=Ee(C),ge=.5*(C.pageX+fe.x),de=.5*(C.pageY+fe.y);g.set(ge,de)}x.subVectors(g,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;A(2*Math.PI*x.x/k.clientHeight),L(2*Math.PI*x.y/k.clientHeight),d.copy(g)}function he(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const k=Ee(C),fe=.5*(C.pageX+k.x),ge=.5*(C.pageY+k.y);p.set(fe,ge)}m.subVectors(p,h).multiplyScalar(i.panSpeed),N(m.x,m.y),h.copy(p)}function Re(C){const k=Ee(C),fe=C.pageX-k.x,ge=C.pageY-k.y,de=Math.sqrt(fe*fe+ge*ge);_.set(0,de),w.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),I(w.y),v.copy(_)}function be(C){i.enableZoom&&Re(C),i.enablePan&&he(C)}function le(C){i.enableZoom&&Re(C),i.enableRotate&&Se(C)}function mt(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",lt),i.domElement.addEventListener("pointerup",ut)),se(C),C.pointerType==="touch"?b(C):nt(C))}function lt(C){i.enabled!==!1&&(C.pointerType==="touch"?M(C):Ve(C))}function ut(C){oe(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",ut)),i.dispatchEvent($m),s=r.NONE}function kt(C){oe(C)}function nt(C){let k;switch(C.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Or.DOLLY:if(i.enableZoom===!1)return;Z(C),s=r.DOLLY;break;case Or.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;D(C),s=r.PAN}else{if(i.enableRotate===!1)return;J(C),s=r.ROTATE}break;case Or.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;J(C),s=r.ROTATE}else{if(i.enablePan===!1)return;D(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Cc)}function Ve(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;W(C);break;case r.DOLLY:if(i.enableZoom===!1)return;V(C);break;case r.PAN:if(i.enablePan===!1)return;O(C);break}}function mn(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Cc),B(C),i.dispatchEvent($m))}function Gt(C){i.enabled===!1||i.enablePan===!1||Q(C)}function b(C){switch(ue(C),S.length){case 1:switch(i.touches.ONE){case zr.ROTATE:if(i.enableRotate===!1)return;ee(),s=r.TOUCH_ROTATE;break;case zr.PAN:if(i.enablePan===!1)return;ie(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case zr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(),s=r.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Cc)}function M(C){switch(ue(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;le(C),i.update();break;default:s=r.NONE}}function j(C){i.enabled!==!1&&C.preventDefault()}function se(C){S.push(C)}function oe(C){delete T[C.pointerId];for(let k=0;k<S.length;k++)if(S[k].pointerId==C.pointerId){S.splice(k,1);return}}function ue(C){let k=T[C.pointerId];k===void 0&&(k=new Me,T[C.pointerId]=k),k.set(C.pageX,C.pageY)}function Ee(C){const k=C.pointerId===S[0].pointerId?S[1]:S[0];return T[k.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",mt),i.domElement.addEventListener("pointercancel",kt),i.domElement.addEventListener("wheel",mn,{passive:!1}),this.update()}}var Eo=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),i(++t%e.children.length)},!1);function n(c){return e.appendChild(c.dom),c}function i(c){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===c?"block":"none";t=c}var r=(performance||Date).now(),s=r,o=0,a=n(new Eo.Panel("FPS","#0ff","#002")),l=n(new Eo.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new Eo.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:n,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var c=(performance||Date).now();if(l.update(c-r,200),c>=s+1e3&&(a.update(o*1e3/(c-s),100),s=c,o=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return c},update:function(){r=this.end()},domElement:e,setMode:i}};Eo.Panel=function(t,e,n){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,u=3*o,c=2*o,f=3*o,d=15*o,g=74*o,x=30*o,h=document.createElement("canvas");h.width=a,h.height=l,h.style.cssText="width:80px;height:48px";var p=h.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=n,p.fillRect(0,0,a,l),p.fillStyle=e,p.fillText(t,u,c),p.fillRect(f,d,g,x),p.fillStyle=n,p.globalAlpha=.9,p.fillRect(f,d,g,x),{dom:h,update:function(m,v){i=Math.min(i,m),r=Math.max(r,m),p.fillStyle=n,p.globalAlpha=1,p.fillRect(0,0,a,d),p.fillStyle=e,p.fillText(s(m)+" "+t+" ("+s(i)+"-"+s(r)+")",u,c),p.drawImage(h,f+o,d,g-o,x,f,d,g-o,x),p.fillRect(f+g-o,d,o,x),p.fillStyle=n,p.globalAlpha=.9,p.fillRect(f+g-o,d,o,s((1-m/v)*x))}}};const DC=Eo;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Qn{constructor(e,n,i,r,s="div"){this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Qn.nextNameID=Qn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Qn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class RC extends Qn{constructor(e,n,i){super(e,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bd(t){let e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!n&&"#"+n}const IC={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:Bd,toHexString:Bd},Yo={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},NC={isPrimitive:!1,match:Array.isArray,fromHexString(t,e,n=1){const i=Yo.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(255&i)/255*n},toHexString:([t,e,n],i=1)=>Yo.toHexString(t*(i=255/i)<<16^e*i<<8^n*i<<0)},kC={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,n=1){const i=Yo.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(255&i)/255*n},toHexString:({r:t,g:e,b:n},i=1)=>Yo.toHexString(t*(i=255/i)<<16^e*i<<8^n*i<<0)},FC=[IC,Yo,NC,kC];class OC extends Qn{constructor(e,n,i,r){var s;super(e,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,FC.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Bd(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ac extends Qn{constructor(e,n,i){super(e,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class zC extends Qn{constructor(e,n,i,r,s,o){super(e,n,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=100*n+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=c=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+c),this.$input.value=this.getValue())};let n,i,r,s,o,a=!1;const l=c=>{if(a){const f=c.clientX-n,d=c.clientY-i;Math.abs(d)>5?(c.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>5&&u()}if(!a){const f=c.clientY-r;o-=f*this._step*this._arrowKeyMultiplier(c),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=c.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),e(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{n=c.clientX,i=r=c.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const g=this.$slider.getBoundingClientRect();let x=(h=d,p=g.left,m=g.right,v=this._min,_=this._max,(h-p)/(m-p)*(_-v)+v);var h,p,m,v,_;this._snapClampSetValue(x)},n=d=>{e(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},l=d=>{if(o){const g=d.touches[0].clientX-r,x=d.touches[0].clientY-s;Math.abs(g)>Math.abs(x)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else d.preventDefault(),e(d.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},c=this._callOnFinishChange.bind(this);let f;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(r=d.touches[0].clientX,s=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const g=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+n,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class UC extends Qn{constructor(e,n,i,r){super(e,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?e:this._names[n],this}}class BC extends Qn{constructor(e,n,i){super(e,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let jm=!1;class sh{constructor({parent:e,autoPlace:n=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!jm&&o&&(function(l){const u=document.createElement("style");u.innerHTML=l;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(u,c):document.head.appendChild(u)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),jm=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,n,i,r,s){if(Object(i)===i)return new UC(this,e,n,i);const o=e[n];switch(typeof o){case"number":return new zC(this,e,n,i,r,s);case"boolean":return new RC(this,e,n);case"string":return new BC(this,e,n);case"function":return new Ac(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,o)}addColor(e,n,i=1){return new OC(this,e,n,i)}addFolder(e){return new sh({parent:this,title:e})}load(e,n=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ac||i._name in e.controllers&&i.load(e.controllers[i._name])}),n&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ac)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}class VC{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=mi;const s=new r_,o=new ih;o.position.z=1;const a={passThruTexture:{value:null}},l=f(g(),a),u=new Yn(new du(2,2),l);s.add(u),this.setDataType=function(x){return r=x,this},this.addVariable=function(x,h,p){const m=this.createShaderMaterial(h),v={name:x,initialValueTexture:p,material:m,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Qe,magFilter:Qe};return this.variables.push(v),v},this.setVariableDependencies=function(x,h){x.dependencies=h},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const h=this.variables[x];h.renderTargets[0]=this.createRenderTarget(e,n,h.wrapS,h.wrapT,h.minFilter,h.magFilter),h.renderTargets[1]=this.createRenderTarget(e,n,h.wrapS,h.wrapT,h.minFilter,h.magFilter),this.renderTexture(h.initialValueTexture,h.renderTargets[0]),this.renderTexture(h.initialValueTexture,h.renderTargets[1]);const p=h.material,m=p.uniforms;if(h.dependencies!==null)for(let v=0;v<h.dependencies.length;v++){const _=h.dependencies[v];if(_.name!==h.name){let w=!1;for(let S=0;S<this.variables.length;S++)if(_.name===this.variables[S].name){w=!0;break}if(!w)return"Variable dependency not found. Variable="+h.name+", dependency="+_.name}m[_.name]={value:null},p.fragmentShader=`
uniform sampler2D `+_.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,h=this.currentTextureIndex===0?1:0;for(let p=0,m=this.variables.length;p<m;p++){const v=this.variables[p];if(v.dependencies!==null){const _=v.material.uniforms;for(let w=0,S=v.dependencies.length;w<S;w++){const T=v.dependencies[w];_[T.name].value=T.renderTargets[x].texture}}this.doRenderTarget(v.material,v.renderTargets[h])}this.currentTextureIndex=h},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){u.geometry.dispose(),u.material.dispose();const x=this.variables;for(let h=0;h<x.length;h++){const p=x[h];p.initialValueTexture?.dispose();const m=p.renderTargets;for(let v=0;v<m.length;v++)m[v].dispose()}};function c(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=c;function f(x,h){h=h||{};const p=new It({uniforms:h,vertexShader:d(),fragmentShader:x});return c(p),p}this.createShaderMaterial=f,this.createRenderTarget=function(x,h,p,m,v,_){return x=x||e,h=h||n,p=p||an,m=m||an,v=v||Qe,_=_||Qe,new Zt(x,h,{wrapS:p,wrapT:m,minFilter:v,magFilter:_,format:ln,type:r,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*n*4),h=new TC(x,e,n,ln,mi);return h.needsUpdate=!0,h},this.renderTexture=function(x,h){a.passThruTexture.value=x,this.doRenderTarget(l,h),a.passThruTexture.value=null},this.doRenderTarget=function(x,h){const p=i.getRenderTarget(),m=i.xr.enabled,v=i.shadowMap.autoUpdate,_=i.outputEncoding,w=i.toneMapping;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.outputEncoding=qi,i.toneMapping=Zn,u.material=x,i.setRenderTarget(h),i.render(s,o),u.material=l,i.xr.enabled=m,i.shadowMap.autoUpdate=v,i.outputEncoding=_,i.toneMapping=w,i.setRenderTarget(p)};function d(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function g(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}class Vs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const HC=new Q0(-1,1,1,-1,0,1),oh=new Jn;oh.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3));oh.setAttribute("uv",new _i([0,2,0,0,2,0],2));class Bl{constructor(e){this._mesh=new Yn(oh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,HC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const s_={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`},GC={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fs extends Vs{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Zt(s,o);d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new Zt(s,o);g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),o=Math.round(o/2)}const a=GC;this.highPassUniforms=Xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new Me(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=s_;this.copyUniforms=Xo.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new It({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Dd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new cu,this.fsQuad=new Bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new Me(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new It({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fs.BlurDirectionX=new Me(1,0);Fs.BlurDirectionY=new Me(0,1);const WC={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class $C extends Vs{constructor(e=.96){super(),this.shader=WC,this.uniforms=Xo.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new Zt(window.innerWidth,window.innerHeight,{magFilter:Qe}),this.textureOld=new Zt(window.innerWidth,window.innerHeight,{magFilter:Qe}),this.compFsMaterial=new It({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Bl(this.compFsMaterial),this.copyFsMaterial=new cu,this.copyFsQuad=new Bl(this.copyFsMaterial)}render(e,n,i){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=i.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.copyFsQuad.render(e));const r=this.textureOld;this.textureOld=this.textureComp,this.textureComp=r}setSize(e,n){this.textureComp.setSize(e,n),this.textureOld.setSize(e,n)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class jC extends Vs{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xo.clone(e.uniforms),this.material=new It({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bl(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xm extends Vs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class XC extends Vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YC{constructor(e,n){if(this.renderer=e,n===void 0){const i=e.getSize(new Me);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,n=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jC(s_),this.clock=new PC}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xm!==void 0&&(o instanceof Xm?i=!0:o instanceof XC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qC extends Vs{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const KC=`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance; //
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 250.0;
float preyRadius = BOUNDS * 0.5;
float separationThresh = 0.45;
float alignmentThresh = 0.65 ;
const float SPEED_LIMIT = 10.0;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;


float rand( vec2 co ){
  return fract( sin( dot( co.xy, vec2(12.9898,78.233) ) ) * 43758.5453 );
}

void main() {

  float zoneRadiusSquared = zoneRadius * zoneRadius;
  float preyRadiusSq = preyRadius * preyRadius;

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;
  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;
  float dist;
  vec3 dir; // direction
  float distSquared;
  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;
  float f;
  float percent;
  vec3 velocity = selfVelocity;

  float limit = SPEED_LIMIT;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  // move birds away from predator
  if ( dist < preyRadius ) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for ( float y = 0.0; y < height; y++ ) {
    for ( float x = 0.0; x < width; x++ ) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length( dir );

      if ( dist < 0.0001 ) continue;

      distSquared = dist * dist;

      if ( distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = ( separationThresh / percent - 1.0 ) * delta;
        velocity -= normalize( dir ) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize( birdVelocity ) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent;
        if( threshDelta == 0. ) adjustedPercent = 1.;
        else adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize( dir ) * f;
      }
    }
  }
  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);
  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }
  gl_FragColor = vec4( velocity, 1.0 );
}
`,ZC=`uniform float time;
uniform float delta;

void main()	{

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );
}
`,QC=`
attribute vec2 reference;
uniform vec2 resolution;
uniform sampler2D positionTex;

void main() {
  vec2 uv = (position.xy / resolution); //* width;
  vec4 tmpPos = texture2D( positionTex, uv );
  vec3 pos = tmpPos.xyz;
  vec3 newPosition = position;
  newPosition = mat3( modelMatrix ) * newPosition;
  newPosition += pos;
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition.x, newPosition.y, newPosition.z, 1.0 );
  gl_PointSize = 4.0;
}
`,JC=`varying vec3 vPosition;

void main() {
    gl_FragColor = vec4( 0.0, 0.4, 1.0, 1.0 );
}
`,qo=32,Ym=9e3,bo=window.innerHeight/4,Pc=bo/2;let qm,ms,ul,ci,Vd=0,Hd=0,ah=window.innerWidth/2,lh=window.innerHeight/2,Km=performance.now(),Dn,Li,li,vr,Dt,Ko,ho;Ko=new It({uniforms:{positionTex:{value:null},resolution:{value:new Me},width:{value:qo}},vertexShader:QC,fragmentShader:JC});function e2(t){ms=new Sn(75,window.innerWidth/window.innerHeight,1,3e4),ms.position.z=1e3,ul=new r_,ci=new i_,ci.setPixelRatio(window.devicePixelRatio),ci.setSize(window.innerWidth,window.innerHeight),t.appendChild(ci.domElement);const e=new qC(ul,ms),n=new Fs(new Me(window.innerWidth,window.innerHeight),3,0,0),i=new $C(.9);i.uniforms.damp.value=.975,ho=new YC(ci),ho.addPass(e),ho.addPass(n),ho.addPass(i),ul.background=new He("black"),new LC(ms,ci.domElement),t2(),Ko.uniforms.positionTex.value=li.texture,qm=new DC,t.appendChild(qm.dom),t.style.touchAction="none",t.addEventListener("pointermove",o2),window.addEventListener("resize",s2);const r=new sh,s={separation:20,alignment:50,cohesion:50,freedom:.9},o=function(){Dt.separationDistance.value=s.separation,Dt.alignmentDistance.value=s.alignment,Dt.cohesionDistance.value=s.cohesion,Dt.freedomFactor.value=s.freedom};o(),r.add(s,"separation",0,100,1).onChange(o),r.add(s,"alignment",0,200,.001).onChange(o),r.add(s,"cohesion",0,200,.001).onChange(o),r.close(),n2(),o_()}function t2(){Dn=new VC(qo,qo,ci),ci.capabilities.isWebGL2===!1&&Dn.setDataType(Is);const t=Dn.createTexture(),e=Dn.createTexture();i2(t),r2(e),Li=Dn.addVariable("textureVelocity",KC,e),li=Dn.addVariable("texturePosition",ZC,t),Dn.setVariableDependencies(Li,[li,Li]),Dn.setVariableDependencies(li,[li,Li]),vr=li.material.uniforms,Dt=Li.material.uniforms,vr.time={value:0},vr.delta={value:0},Dt.time={value:1},Dt.delta={value:0},Dt.testing={value:1},Dt.separationDistance={value:1},Dt.alignmentDistance={value:1},Dt.cohesionDistance={value:1},Dt.freedomFactor={value:1},Dt.predator={value:new z},Li.material.defines.BOUNDS=bo.toFixed(2),Li.wrapS=mr,Li.wrapT=mr,li.wrapS=mr,li.wrapT=mr;const n=Dn.init();n!==null&&console.error(n)}function n2(){const e=new Float32Array(Ym*3*1),n=window.innerHeight/4,i=n/2,r=new Jn;for(let o=0;o<Ym;o++)for(let a=0;a<1;a++)e[o*3*1+a*3]=Math.random()*n-i,e[o*3*1+a*3+1]=Math.random()*n-i,e[o*3*1+a*3+2]=Math.random()*n-i;r.setAttribute("position",new Bn(e,3));const s=new AC(r,Ko);ul.add(s)}function i2(t){const e=t.image.data;for(let n=0,i=e.length;n<i;n+=4){const r=Math.random()*bo-Pc,s=Math.random()*bo-Pc,o=Math.random()*bo-Pc;e[n+0]=r,e[n+1]=s,e[n+2]=o,e[n+3]=1}}function r2(t){const e=t.image.data;for(let n=0,i=e.length;n<i;n+=4){const r=Math.random()-.5,s=Math.random()-.5,o=Math.random()-.5;e[n+0]=r*10,e[n+1]=s*10,e[n+2]=o*10,e[n+3]=1}}function s2(){ah=window.innerWidth/2,lh=window.innerHeight/2,ms.aspect=window.innerWidth/window.innerHeight,ms.updateProjectionMatrix(),ci.setSize(window.innerWidth,window.innerHeight)}function o2(t){t.isPrimary!==!1&&(Vd=t.clientX-ah,Hd=t.clientY-lh)}function o_(){requestAnimationFrame(o_),a2()}function a2(){const t=performance.now();let e=(t-Km)/1e3;e>1&&(e=1),Km=t,vr.time.value=t,vr.delta.value=e,Dt.time.value=t,Dt.delta.value=e,vr.time.value=t,vr.delta.value=e,Dt.predator.value.set(.5*Vd/ah,-.5*Hd/lh,0),Vd=1e4,Hd=1e4,Dn.compute(),Ko.uniforms.positionTex.value=Dn.getCurrentRenderTarget(li).texture,Ko.uniforms.resolution.value.set(qo,qo),ho.render()}function l2(){const[t,e]=K.useState(!1),n={"Giulio Zani":ce(C1,{}),Projects:ce(L1,{}),Contact:ce(A1,{})},[i,r]=K.useState("Giulio Zani"),s=K.createRef(),o=l=>{l.preventDefault();const u=l.currentTarget.innerText;r(u),t&&s.current?.click()};let a=!1;return K.useEffect(()=>{const l=document.getElementById("particle-canvas");a||(e2(l),a=!0)},[]),On(cl,{children:[ce("div",{id:"particle-canvas"}),ce(ba,{bg:"dark",expand:"lg",style:{color:"white"},children:On(zf,{style:{maxWidth:"100vw",width:"100vw",color:"white"},children:[ce(ba.Brand,{style:{color:"white"},onClick:o,children:"Giulio Zani"}),ce(ba.Toggle,{style:{marginRight:"0px",color:"white"},ref:s,"aria-controls":"basic-navbar-nav",className:`${t?"collapse":""}`,onClick:()=>e(!t)}),ce(ba.Collapse,{id:"basic-navbar-nav",className:`${t?"show":""}`,style:{color:"white"},children:On(Gu,{className:"me-auto",children:[ce(Gu.Link,{style:{color:"white"},onClick:o,children:"Contact"}),ce(Gu.Link,{style:{color:"white"},onClick:o,children:"Projects"})]})})]})}),n[i]]})}Lc.createRoot(document.getElementById("root")).render(ce(Xn.StrictMode,{children:ce(l2,{})}));
