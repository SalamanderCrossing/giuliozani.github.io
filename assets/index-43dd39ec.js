(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ro={},F0={get exports(){return ro},set exports(t){ro=t}},hl={},Fe={},z0={get exports(){return Fe},set exports(t){Fe=t}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),k0=Symbol.for("react.portal"),O0=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),B0=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),H0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),j0=Symbol.for("react.memo"),X0=Symbol.for("react.lazy"),ud=Symbol.iterator;function q0(t){return t===null||typeof t!="object"?null:(t=ud&&t[ud]||t["@@iterator"],typeof t=="function"?t:null)}var Bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Gp={};function ys(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hp(){}Hp.prototype=ys.prototype;function Jc(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}var ef=Jc.prototype=new Hp;ef.constructor=Jc;Vp(ef,ys.prototype);ef.isPureReactComponent=!0;var cd=Array.isArray,Wp=Object.prototype.hasOwnProperty,tf={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wp.call(e,i)&&!jp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ao,type:t,key:s,ref:o,props:r,_owner:tf.current}}function $0(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function Y0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fd=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y0(""+t.key):e.toString(36)}function Ea(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case k0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ol(o,0):i,cd(r)?(n="",t!=null&&(n=t.replace(fd,"$&/")+"/"),Ea(r,e,n,"",function(u){return u})):r!=null&&(nf(r)&&(r=$0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",cd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ol(s,a);o+=Ea(s,e,n,l,r)}else if(l=q0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ol(s,a++),o+=Ea(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Ea(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Ta={transition:null},Z0={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:tf};Pe.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pe.Component=ys;Pe.Fragment=O0;Pe.Profiler=B0;Pe.PureComponent=Jc;Pe.StrictMode=U0;Pe.Suspense=W0;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;Pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wp.call(e,l)&&!jp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:o}};Pe.createContext=function(t){return t={$$typeof:G0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V0,_context:t},t.Consumer=t};Pe.createElement=Xp;Pe.createFactory=function(t){var e=Xp.bind(null,t);return e.type=t,e};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(t){return{$$typeof:H0,render:t}};Pe.isValidElement=nf;Pe.lazy=function(t){return{$$typeof:X0,_payload:{_status:-1,_result:t},_init:K0}};Pe.memo=function(t,e){return{$$typeof:j0,type:t,compare:e===void 0?null:e}};Pe.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(t,e){return Bt.current.useCallback(t,e)};Pe.useContext=function(t){return Bt.current.useContext(t)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};Pe.useEffect=function(t,e){return Bt.current.useEffect(t,e)};Pe.useId=function(){return Bt.current.useId()};Pe.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};Pe.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};Pe.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};Pe.useMemo=function(t,e){return Bt.current.useMemo(t,e)};Pe.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};Pe.useRef=function(t){return Bt.current.useRef(t)};Pe.useState=function(t){return Bt.current.useState(t)};Pe.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};Pe.useTransition=function(){return Bt.current.useTransition()};Pe.version="18.2.0";(function(t){t.exports=Pe})(z0);const Q0=N0(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=Fe,ev=Symbol.for("react.element"),tv=Symbol.for("react.fragment"),nv=Object.prototype.hasOwnProperty,iv=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rv={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nv.call(e,i)&&!rv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ev,type:t,key:s,ref:o,props:r,_owner:iv.current}}hl.Fragment=tv;hl.jsx=qp;hl.jsxs=qp;(function(t){t.exports=hl})(F0);const sv=ro.Fragment,We=ro.jsx,ba=ro.jsxs;var Wu={},ju={},ov={get exports(){return ju},set exports(t){ju=t}},fn={},Xu={},av={get exports(){return Xu},set exports(t){Xu=t}},$p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,G){var V=R.length;R.push(G);e:for(;0<V;){var U=V-1>>>1,B=R[U];if(0<r(B,G))R[U]=G,R[V]=B,V=U;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var G=R[0],V=R.pop();if(V!==G){R[0]=V;e:for(var U=0,B=R.length,Z=B>>>1;U<Z;){var ee=2*(U+1)-1,oe=R[ee],H=ee+1,Ee=R[H];if(0>r(oe,V))H<B&&0>r(Ee,oe)?(R[U]=Ee,R[H]=V,U=H):(R[U]=oe,R[ee]=V,U=ee);else if(H<B&&0>r(Ee,V))R[U]=Ee,R[H]=V,U=H;else break e}}return G}function r(R,G){var V=R.sortIndex-G.sortIndex;return V!==0?V:R.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,v=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=R)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function M(R){if(h=!1,_(R),!x)if(n(l)!==null)x=!0,Q(S);else{var G=n(u);G!==null&&K(M,G.startTime-R)}}function S(R,G){x=!1,h&&(h=!1,m(y),y=-1),v=!0;var V=f;try{for(_(G),d=n(l);d!==null&&(!(d.expirationTime>G)||R&&!X());){var U=d.callback;if(typeof U=="function"){d.callback=null,f=d.priorityLevel;var B=U(d.expirationTime<=G);G=t.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&i(l),_(G)}else i(l);d=n(l)}if(d!==null)var Z=!0;else{var ee=n(u);ee!==null&&K(M,ee.startTime-G),Z=!1}return Z}finally{d=null,f=V,v=!1}}var b=!1,P=null,y=-1,A=5,L=-1;function X(){return!(t.unstable_now()-L<A)}function ie(){if(P!==null){var R=t.unstable_now();L=R;var G=!0;try{G=P(!0,R)}finally{G?z():(b=!1,P=null)}}else b=!1}var z;if(typeof g=="function")z=function(){g(ie)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,Y=N.port2;N.port1.onmessage=ie,z=function(){Y.postMessage(null)}}else z=function(){p(ie,0)};function Q(R){P=R,b||(b=!0,z())}function K(R,G){y=p(function(){R(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,Q(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var V=f;f=G;try{return R()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=f;f=R;try{return G()}finally{f=V}},t.unstable_scheduleCallback=function(R,G,V){var U=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?U+V:U):V=U,R){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,R={id:c++,callback:G,priorityLevel:R,startTime:V,expirationTime:B,sortIndex:-1},V>U?(R.sortIndex=V,e(u,R),n(l)===null&&R===n(u)&&(h?(m(y),y=-1):h=!0,K(M,V-U))):(R.sortIndex=B,e(l,R),x||v||(x=!0,Q(S))),R},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(R){var G=f;return function(){var V=f;f=G;try{return R.apply(this,arguments)}finally{f=V}}}})($p);(function(t){t.exports=$p})(av);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=Fe,cn=Xu;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,so={};function _r(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(so[t]=e,t=0;t<e.length;t++)Kp.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},hd={};function uv(t){return qu.call(hd,t)?!0:qu.call(dd,t)?!1:lv.test(t)?hd[t]=!0:(dd[t]=!0,!1)}function cv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fv(t,e,n,i){if(e===null||typeof e>"u"||cv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);Tt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);Tt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Tt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,i){var r=Tt.hasOwnProperty(e)?Tt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fv(e,n,r,i)&&(n=null),i||r===null?uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),Jp=Symbol.for("react.offscreen"),pd=Symbol.iterator;function bs(t){return t===null||typeof t!="object"?null:(t=pd&&t[pd]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,Ul;function Vs(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var Bl=!1;function Vl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function dv(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case Ur:return"Portal";case $u:return"Profiler";case af:return"StrictMode";case Yu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qp:return(t.displayName||"Context")+".Consumer";case Zp:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case Si:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function hv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pv(t){var e=em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=pv(t))}function tm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=em(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function md(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nm(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function Ju(t,e){nm(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&ec(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ec(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Gs(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function im(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vo,sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mv=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){mv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function am(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gv=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ic(t,e){if(e){if(gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oc=null,es=null,ts=null;function xd(t){if(t=Do(t)){if(typeof oc!="function")throw Error(J(280));var e=t.stateNode;e&&(e=_l(e),oc(t.stateNode,t.type,e))}}function lm(t){es?ts?ts.push(t):ts=[t]:es=t}function um(){if(es){var t=es,e=ts;if(ts=es=null,xd(t),e)for(t=0;t<e.length;t++)xd(e[t])}}function cm(t,e){return t(e)}function fm(){}var Gl=!1;function dm(t,e,n){if(Gl)return t(e,n);Gl=!0;try{return cm(t,e,n)}finally{Gl=!1,(es!==null||ts!==null)&&(fm(),um())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=_l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var ac=!1;if(ci)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{ac=!1}function vv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ys=!1,Va=null,Ga=!1,lc=null,_v={onError:function(t){Ys=!0,Va=t}};function xv(t,e,n,i,r,s,o,a,l){Ys=!1,Va=null,vv.apply(_v,arguments)}function yv(t,e,n,i,r,s,o,a,l){if(xv.apply(this,arguments),Ys){if(Ys){var u=Va;Ys=!1,Va=null}else throw Error(J(198));Ga||(Ga=!0,lc=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yd(t){if(xr(t)!==t)throw Error(J(188))}function Sv(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yd(r),t;if(s===i)return yd(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function pm(t){return t=Sv(t),t!==null?mm(t):null}function mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mm(t);if(e!==null)return e;t=t.sibling}return null}var gm=cn.unstable_scheduleCallback,Sd=cn.unstable_cancelCallback,Mv=cn.unstable_shouldYield,wv=cn.unstable_requestPaint,it=cn.unstable_now,Ev=cn.unstable_getCurrentPriorityLevel,ff=cn.unstable_ImmediatePriority,vm=cn.unstable_UserBlockingPriority,Ha=cn.unstable_NormalPriority,Tv=cn.unstable_LowPriority,_m=cn.unstable_IdlePriority,pl=null,Hn=null;function bv(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Pv,Cv=Math.log,Av=Math.LN2;function Pv(t){return t>>>=0,t===0?32:31-(Cv(t)/Av|0)|0}var Go=64,Ho=4194304;function Hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Hs(a):(s&=o,s!==0&&(i=Hs(s)))}else o=n&~r,o!==0?i=Hs(o):s!==0&&(i=Hs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function Lv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Lv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xm(){var t=Go;return Go<<=1,!(Go&4194240)&&(Go=64),t}function Hl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Po(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function Rv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sm,hf,Mm,wm,Em,cc=!1,Wo=[],Ci=null,Ai=null,Pi=null,lo=new Map,uo=new Map,wi=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(t,e){switch(t){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function As(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Do(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nv(t,e,n,i,r){switch(e){case"focusin":return Ci=As(Ci,t,e,n,i,r),!0;case"dragenter":return Ai=As(Ai,t,e,n,i,r),!0;case"mouseover":return Pi=As(Pi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return lo.set(s,As(lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,As(uo.get(s)||null,t,e,n,i,r)),!0}return!1}function Tm(t){var e=er(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=hm(n),e!==null){t.blockedOn=e,Em(t.priority,function(){Mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sc=i,n.target.dispatchEvent(i),sc=null}else return e=Do(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){Ca(t)&&n.delete(e)}function Fv(){cc=!1,Ci!==null&&Ca(Ci)&&(Ci=null),Ai!==null&&Ca(Ai)&&(Ai=null),Pi!==null&&Ca(Pi)&&(Pi=null),lo.forEach(wd),uo.forEach(wd)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,cc||(cc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Fv)))}function co(t){function e(r){return Ps(r,t)}if(0<Wo.length){Ps(Wo[0],t);for(var n=1;n<Wo.length;n++){var i=Wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ci!==null&&Ps(Ci,t),Ai!==null&&Ps(Ai,t),Pi!==null&&Ps(Pi,t),lo.forEach(e),uo.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&wi.shift()}var ns=pi.ReactCurrentBatchConfig,ja=!0;function zv(t,e,n,i){var r=Ge,s=ns.transition;ns.transition=null;try{Ge=1,pf(t,e,n,i)}finally{Ge=r,ns.transition=s}}function kv(t,e,n,i){var r=Ge,s=ns.transition;ns.transition=null;try{Ge=4,pf(t,e,n,i)}finally{Ge=r,ns.transition=s}}function pf(t,e,n,i){if(ja){var r=fc(t,e,n,i);if(r===null)Jl(t,e,i,Xa,n),Md(t,i);else if(Nv(r,t,e,n,i))i.stopPropagation();else if(Md(t,i),e&4&&-1<Iv.indexOf(t)){for(;r!==null;){var s=Do(r);if(s!==null&&Sm(s),s=fc(t,e,n,i),s===null&&Jl(t,e,i,Xa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jl(t,e,i,null,n)}}var Xa=null;function fc(t,e,n,i){if(Xa=null,t=cf(i),t=er(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ev()){case ff:return 1;case vm:return 4;case Ha:case Tv:return 16;case _m:return 536870912;default:return 16}default:return 16}}var Ti=null,mf=null,Aa=null;function Cm(){if(Aa)return Aa;var t,e=mf,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Aa=r.slice(t,1<i?1-i:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function Ed(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jo:Ed,this.isPropagationStopped=Ed,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),e}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=dn(Ss),Lo=et({},Ss,{view:0,detail:0}),Ov=dn(Lo),Wl,jl,Ls,ml=et({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(Wl=t.screenX-Ls.screenX,jl=t.screenY-Ls.screenY):jl=Wl=0,Ls=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),Td=dn(ml),Uv=et({},ml,{dataTransfer:0}),Bv=dn(Uv),Vv=et({},Lo,{relatedTarget:0}),Xl=dn(Vv),Gv=et({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=dn(Gv),Wv=et({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=dn(Wv),Xv=et({},Ss,{data:0}),bd=dn(Xv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yv[t])?!!e[t]:!1}function vf(){return Kv}var Zv=et({},Lo,{key:function(t){if(t.key){var e=qv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=dn(Zv),Jv=et({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=dn(Jv),e_=et({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),t_=dn(e_),n_=et({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),i_=dn(n_),r_=et({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=dn(r_),o_=[9,13,27,32],_f=ci&&"CompositionEvent"in window,Ks=null;ci&&"documentMode"in document&&(Ks=document.documentMode);var a_=ci&&"TextEvent"in window&&!Ks,Am=ci&&(!_f||Ks&&8<Ks&&11>=Ks),Ad=String.fromCharCode(32),Pd=!1;function Pm(t,e){switch(t){case"keyup":return o_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function l_(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Pd=!0,Ad);case"textInput":return t=e.data,t===Ad&&Pd?null:t;default:return null}}function u_(t,e){if(Vr)return t==="compositionend"||!_f&&Pm(t,e)?(t=Cm(),Aa=mf=Ti=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Am&&e.locale!=="ko"?null:e.data;default:return null}}var c_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c_[t.type]:e==="textarea"}function Dm(t,e,n,i){lm(i),e=qa(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zs=null,fo=null;function f_(t){Gm(t,0)}function gl(t){var e=Wr(t);if(tm(e))return t}function d_(t,e){if(t==="change")return e}var Rm=!1;if(ci){var ql;if(ci){var $l="oninput"in document;if(!$l){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),$l=typeof Dd.oninput=="function"}ql=$l}else ql=!1;Rm=ql&&(!document.documentMode||9<document.documentMode)}function Rd(){Zs&&(Zs.detachEvent("onpropertychange",Im),fo=Zs=null)}function Im(t){if(t.propertyName==="value"&&gl(fo)){var e=[];Dm(e,fo,t,cf(t)),dm(f_,e)}}function h_(t,e,n){t==="focusin"?(Rd(),Zs=e,fo=n,Zs.attachEvent("onpropertychange",Im)):t==="focusout"&&Rd()}function p_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(fo)}function m_(t,e){if(t==="click")return gl(e)}function g_(t,e){if(t==="input"||t==="change")return gl(e)}function v_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:v_;function ho(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,e){var n=Id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function Nm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fm(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function __(t){var e=Fm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nm(n.ownerDocument.documentElement,n)){if(i!==null&&xf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nd(n,s);var o=Nd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x_=ci&&"documentMode"in document&&11>=document.documentMode,Gr=null,dc=null,Qs=null,hc=!1;function Fd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||Gr==null||Gr!==Ba(i)||(i=Gr,"selectionStart"in i&&xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qs&&ho(Qs,i)||(Qs=i,i=qa(dc,"onSelect"),0<i.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Yl={},zm={};ci&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function vl(t){if(Yl[t])return Yl[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return Yl[t]=e[n];return t}var km=vl("animationend"),Om=vl("animationiteration"),Um=vl("animationstart"),Bm=vl("transitionend"),Vm=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ui(t,e){Vm.set(t,e),_r(e,[t])}for(var Kl=0;Kl<zd.length;Kl++){var Zl=zd[Kl],y_=Zl.toLowerCase(),S_=Zl[0].toUpperCase()+Zl.slice(1);Ui(y_,"on"+S_)}Ui(km,"onAnimationEnd");Ui(Om,"onAnimationIteration");Ui(Um,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(Bm,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function kd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yv(i,e,void 0,t),t.currentTarget=null}function Gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kd(r,a,u),s=l}}}if(Ga)throw t=lc,Ga=!1,lc=null,t}function Xe(t,e){var n=e[_c];n===void 0&&(n=e[_c]=new Set);var i=t+"__bubble";n.has(i)||(Hm(e,t,2,!1),n.add(i))}function Ql(t,e,n){var i=0;e&&(i|=4),Hm(n,t,i,e)}var qo="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[qo]){t[qo]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(M_.has(n)||Ql(n,!1,t),Ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qo]||(e[qo]=!0,Ql("selectionchange",!1,e))}}function Hm(t,e,n,i){switch(bm(e)){case 1:var r=zv;break;case 4:r=kv;break;default:r=pf}n=r.bind(null,e,n,t),r=void 0,!ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dm(function(){var u=s,c=cf(n),d=[];e:{var f=Vm.get(t);if(f!==void 0){var v=gf,x=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":v=Qv;break;case"focusin":x="focus",v=Xl;break;case"focusout":x="blur",v=Xl;break;case"beforeblur":case"afterblur":v=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=t_;break;case km:case Om:case Um:v=Hv;break;case Bm:v=i_;break;case"scroll":v=Ov;break;case"wheel":v=s_;break;case"copy":case"cut":case"paste":v=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cd}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=ao(g,m),M!=null&&h.push(mo(g,M,_)))),p)break;g=g.return}0<h.length&&(f=new v(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==sc&&(x=n.relatedTarget||n.fromElement)&&(er(x)||x[fi]))break e;if((v||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?er(x):null,x!==null&&(p=xr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(h=Td,M="onMouseLeave",m="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(h=Cd,M="onPointerLeave",m="onPointerEnter",g="pointer"),p=v==null?f:Wr(v),_=x==null?f:Wr(x),f=new h(M,g+"leave",v,n,c),f.target=p,f.relatedTarget=_,M=null,er(c)===u&&(h=new h(m,g+"enter",x,n,c),h.target=_,h.relatedTarget=p,M=h),p=M,v&&x)t:{for(h=v,m=x,g=0,_=h;_;_=Sr(_))g++;for(_=0,M=m;M;M=Sr(M))_++;for(;0<g-_;)h=Sr(h),g--;for(;0<_-g;)m=Sr(m),_--;for(;g--;){if(h===m||m!==null&&h===m.alternate)break t;h=Sr(h),m=Sr(m)}h=null}else h=null;v!==null&&Od(d,f,v,h,!1),x!==null&&p!==null&&Od(d,p,x,h,!0)}}e:{if(f=u?Wr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=d_;else if(Ld(f))if(Rm)S=g_;else{S=p_;var b=h_}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=m_);if(S&&(S=S(t,u))){Dm(d,S,n,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ec(f,"number",f.value)}switch(b=u?Wr(u):window,t){case"focusin":(Ld(b)||b.contentEditable==="true")&&(Gr=b,dc=u,Qs=null);break;case"focusout":Qs=dc=Gr=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Fd(d,n,c);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":Fd(d,n,c)}var P;if(_f)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vr?Pm(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Am&&n.locale!=="ko"&&(Vr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Vr&&(P=Cm()):(Ti=c,mf="value"in Ti?Ti.value:Ti.textContent,Vr=!0)),b=qa(u,y),0<b.length&&(y=new bd(y,t,null,n,c),d.push({event:y,listeners:b}),P?y.data=P:(P=Lm(n),P!==null&&(y.data=P)))),(P=a_?l_(t,n):u_(t,n))&&(u=qa(u,"onBeforeInput"),0<u.length&&(c=new bd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Gm(d,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(mo(t,s,r)),s=ao(t,e),s!=null&&i.push(mo(t,s,r))),t=t.return}return i}function Sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Od(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):r||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var w_=/\r\n?/g,E_=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(w_,`
`).replace(E_,"")}function $o(t,e,n){if(e=Ud(e),Ud(t)!==e&&n)throw Error(J(425))}function $a(){}var pc=null,mc=null;function gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(C_)}:vc;function C_(t){setTimeout(function(){throw t})}function eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Ms,go="__reactProps$"+Ms,fi="__reactContainer$"+Ms,_c="__reactEvents$"+Ms,A_="__reactListeners$"+Ms,P_="__reactHandles$"+Ms;function er(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vd(t);t!==null;){if(n=t[Vn])return n;t=Vd(t)}return e}t=n,n=t.parentNode}return null}function Do(t){return t=t[Vn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function _l(t){return t[go]||null}var xc=[],jr=-1;function Bi(t){return{current:t}}function $e(t){0>jr||(t.current=xc[jr],xc[jr]=null,jr--)}function je(t,e){jr++,xc[jr]=t.current,t.current=e}var ki={},It=Bi(ki),Xt=Bi(!1),cr=ki;function ls(t,e){var n=t.type.contextTypes;if(!n)return ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qt(t){return t=t.childContextTypes,t!=null}function Ya(){$e(Xt),$e(It)}function Gd(t,e,n){if(It.current!==ki)throw Error(J(168));je(It,e),je(Xt,n)}function Wm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,hv(t)||"Unknown",r));return et({},n,i)}function Ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,cr=It.current,je(It,t),je(Xt,Xt.current),!0}function Hd(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Wm(t,e,cr),i.__reactInternalMemoizedMergedChildContext=t,$e(Xt),$e(It),je(It,t)):$e(Xt),je(Xt,n)}var ni=null,xl=!1,tu=!1;function jm(t){ni===null?ni=[t]:ni.push(t)}function L_(t){xl=!0,jm(t)}function Vi(){if(!tu&&ni!==null){tu=!0;var t=0,e=Ge;try{var n=ni;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,xl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),gm(ff,Vi),r}finally{Ge=e,tu=!1}}return null}var Xr=[],qr=0,Za=null,Qa=0,gn=[],vn=0,fr=null,si=1,oi="";function Yi(t,e){Xr[qr++]=Qa,Xr[qr++]=Za,Za=t,Qa=e}function Xm(t,e,n){gn[vn++]=si,gn[vn++]=oi,gn[vn++]=fr,fr=t;var i=si;t=oi;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-In(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function yf(t){t.return!==null&&(Yi(t,1),Xm(t,1,0))}function Sf(t){for(;t===Za;)Za=Xr[--qr],Xr[qr]=null,Qa=Xr[--qr],Xr[qr]=null;for(;t===fr;)fr=gn[--vn],gn[vn]=null,oi=gn[--vn],gn[vn]=null,si=gn[--vn],gn[vn]=null}var un=null,an=null,Ke=!1,Rn=null;function qm(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,an=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,an=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(Ke){var e=an;if(e){var n=e;if(!Wd(t,e)){if(yc(t))throw Error(J(418));e=Li(n.nextSibling);var i=un;e&&Wd(t,e)?qm(i,n):(t.flags=t.flags&-4097|2,Ke=!1,un=t)}}else{if(yc(t))throw Error(J(418));t.flags=t.flags&-4097|2,Ke=!1,un=t}}}function jd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Yo(t){if(t!==un)return!1;if(!Ke)return jd(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gc(t.type,t.memoizedProps)),e&&(e=an)){if(yc(t))throw $m(),Error(J(418));for(;e;)qm(t,e),e=Li(e.nextSibling)}if(jd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=un?Li(t.stateNode.nextSibling):null;return!0}function $m(){for(var t=an;t;)t=Li(t.nextSibling)}function us(){an=un=null,Ke=!1}function Mf(t){Rn===null?Rn=[t]:Rn.push(t)}var D_=pi.ReactCurrentBatchConfig;function Ln(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ja=Bi(null),el=null,$r=null,wf=null;function Ef(){wf=$r=el=null}function Tf(t){var e=Ja.current;$e(Ja),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function is(t,e){el=t,wf=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(el===null)throw Error(J(308));$r=t,el.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var tr=null;function bf(t){tr===null?tr=[t]:tr.push(t)}function Ym(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mi=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}function Xd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,i){var r=t.updateQueue;Mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,v=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(v,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(v,d,f):x,f==null)break e;d=et({},d,f);break e;case 2:Mi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=d}}function qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Zm=new Yp.Component().refs;function wc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ut(),r=Ii(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(Nn(e,t,r,i),La(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ut(),r=Ii(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(Nn(e,t,r,i),La(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ut(),i=Ii(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Di(t,r,i),e!==null&&(Nn(e,t,i,n),La(e,t,i))}};function $d(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,i)||!ho(r,s):!0}function Qm(t,e,n){var i=!1,r=ki,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=qt(e)?cr:It.current,i=e.contextTypes,s=(i=i!=null)?ls(t,r):ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Ec(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Zm,Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=qt(e)?cr:It.current,r.context=ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Zm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kd(t){var e=t._init;return e(t._payload)}function Jm(t){function e(m,g){if(t){var _=m.deletions;_===null?(m.deletions=[g],m.flags|=16):_.push(g)}}function n(m,g){if(!t)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function i(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function r(m,g){return m=Ni(m,g),m.index=0,m.sibling=null,m}function s(m,g,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<g?(m.flags|=2,g):_):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,g,_,M){return g===null||g.tag!==6?(g=lu(_,m.mode,M),g.return=m,g):(g=r(g,_),g.return=m,g)}function l(m,g,_,M){var S=_.type;return S===Br?c(m,g,_.props.children,M,_.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Si&&Kd(S)===g.type)?(M=r(g,_.props),M.ref=Ds(m,g,_),M.return=m,M):(M=za(_.type,_.key,_.props,null,m.mode,M),M.ref=Ds(m,g,_),M.return=m,M)}function u(m,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=uu(_,m.mode,M),g.return=m,g):(g=r(g,_.children||[]),g.return=m,g)}function c(m,g,_,M,S){return g===null||g.tag!==7?(g=ar(_,m.mode,M,S),g.return=m,g):(g=r(g,_),g.return=m,g)}function d(m,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=lu(""+g,m.mode,_),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Uo:return _=za(g.type,g.key,g.props,null,m.mode,_),_.ref=Ds(m,null,g),_.return=m,_;case Ur:return g=uu(g,m.mode,_),g.return=m,g;case Si:var M=g._init;return d(m,M(g._payload),_)}if(Gs(g)||bs(g))return g=ar(g,m.mode,_,null),g.return=m,g;Ko(m,g)}return null}function f(m,g,_,M){var S=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uo:return _.key===S?l(m,g,_,M):null;case Ur:return _.key===S?u(m,g,_,M):null;case Si:return S=_._init,f(m,g,S(_._payload),M)}if(Gs(_)||bs(_))return S!==null?null:c(m,g,_,M,null);Ko(m,_)}return null}function v(m,g,_,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(g,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Uo:return m=m.get(M.key===null?_:M.key)||null,l(g,m,M,S);case Ur:return m=m.get(M.key===null?_:M.key)||null,u(g,m,M,S);case Si:var b=M._init;return v(m,g,_,b(M._payload),S)}if(Gs(M)||bs(M))return m=m.get(_)||null,c(g,m,M,S,null);Ko(g,M)}return null}function x(m,g,_,M){for(var S=null,b=null,P=g,y=g=0,A=null;P!==null&&y<_.length;y++){P.index>y?(A=P,P=null):A=P.sibling;var L=f(m,P,_[y],M);if(L===null){P===null&&(P=A);break}t&&P&&L.alternate===null&&e(m,P),g=s(L,g,y),b===null?S=L:b.sibling=L,b=L,P=A}if(y===_.length)return n(m,P),Ke&&Yi(m,y),S;if(P===null){for(;y<_.length;y++)P=d(m,_[y],M),P!==null&&(g=s(P,g,y),b===null?S=P:b.sibling=P,b=P);return Ke&&Yi(m,y),S}for(P=i(m,P);y<_.length;y++)A=v(P,m,y,_[y],M),A!==null&&(t&&A.alternate!==null&&P.delete(A.key===null?y:A.key),g=s(A,g,y),b===null?S=A:b.sibling=A,b=A);return t&&P.forEach(function(X){return e(m,X)}),Ke&&Yi(m,y),S}function h(m,g,_,M){var S=bs(_);if(typeof S!="function")throw Error(J(150));if(_=S.call(_),_==null)throw Error(J(151));for(var b=S=null,P=g,y=g=0,A=null,L=_.next();P!==null&&!L.done;y++,L=_.next()){P.index>y?(A=P,P=null):A=P.sibling;var X=f(m,P,L.value,M);if(X===null){P===null&&(P=A);break}t&&P&&X.alternate===null&&e(m,P),g=s(X,g,y),b===null?S=X:b.sibling=X,b=X,P=A}if(L.done)return n(m,P),Ke&&Yi(m,y),S;if(P===null){for(;!L.done;y++,L=_.next())L=d(m,L.value,M),L!==null&&(g=s(L,g,y),b===null?S=L:b.sibling=L,b=L);return Ke&&Yi(m,y),S}for(P=i(m,P);!L.done;y++,L=_.next())L=v(P,m,y,L.value,M),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?y:L.key),g=s(L,g,y),b===null?S=L:b.sibling=L,b=L);return t&&P.forEach(function(ie){return e(m,ie)}),Ke&&Yi(m,y),S}function p(m,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Br&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Uo:e:{for(var S=_.key,b=g;b!==null;){if(b.key===S){if(S=_.type,S===Br){if(b.tag===7){n(m,b.sibling),g=r(b,_.props.children),g.return=m,m=g;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Si&&Kd(S)===b.type){n(m,b.sibling),g=r(b,_.props),g.ref=Ds(m,b,_),g.return=m,m=g;break e}n(m,b);break}else e(m,b);b=b.sibling}_.type===Br?(g=ar(_.props.children,m.mode,M,_.key),g.return=m,m=g):(M=za(_.type,_.key,_.props,null,m.mode,M),M.ref=Ds(m,g,_),M.return=m,m=M)}return o(m);case Ur:e:{for(b=_.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(m,g.sibling),g=r(g,_.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else e(m,g);g=g.sibling}g=uu(_,m.mode,M),g.return=m,m=g}return o(m);case Si:return b=_._init,p(m,g,b(_._payload),M)}if(Gs(_))return x(m,g,_,M);if(bs(_))return h(m,g,_,M);Ko(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(m,g.sibling),g=r(g,_),g.return=m,m=g):(n(m,g),g=lu(_,m.mode,M),g.return=m,m=g),o(m)):n(m,g)}return p}var cs=Jm(!0),eg=Jm(!1),Ro={},Wn=Bi(Ro),vo=Bi(Ro),_o=Bi(Ro);function nr(t){if(t===Ro)throw Error(J(174));return t}function Af(t,e){switch(je(_o,e),je(vo,t),je(Wn,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nc(e,t)}$e(Wn),je(Wn,e)}function fs(){$e(Wn),$e(vo),$e(_o)}function tg(t){nr(_o.current);var e=nr(Wn.current),n=nc(e,t.type);e!==n&&(je(vo,t),je(Wn,n))}function Pf(t){vo.current===t&&($e(Wn),$e(vo))}var Ze=Bi(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nu=[];function Lf(){for(var t=0;t<nu.length;t++)nu[t]._workInProgressVersionPrimary=null;nu.length=0}var Da=pi.ReactCurrentDispatcher,iu=pi.ReactCurrentBatchConfig,dr=0,Je=null,ft=null,xt=null,il=!1,Js=!1,xo=0,R_=0;function Ct(){throw Error(J(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(dr=s,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?z_:k_,t=n(i,r),Js){s=0;do{if(Js=!1,xo=0,25<=s)throw Error(J(301));s+=1,xt=ft=null,e.updateQueue=null,Da.current=O_,t=n(i,r)}while(Js)}if(Da.current=rl,e=ft!==null&&ft.next!==null,dr=0,xt=ft=Je=null,il=!1,e)throw Error(J(300));return t}function If(){var t=xo!==0;return xo=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Je.memoizedState=xt=t:xt=xt.next=t,xt}function En(){if(ft===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=xt===null?Je.memoizedState:xt.next;if(e!==null)xt=e,ft=t;else{if(t===null)throw Error(J(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},xt===null?Je.memoizedState=xt=t:xt=xt.next=t}return xt}function yo(t,e){return typeof e=="function"?e(t):e}function ru(t){var e=En(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Je.lanes|=c,hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Je.lanes|=s,hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function su(t){var e=En(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ng(){}function ig(t,e){var n=Je,i=En(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,Nf(og.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,So(9,sg.bind(null,n,i,r,e),void 0,null),yt===null)throw Error(J(349));dr&30||rg(n,e,r)}return r}function rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,i){e.value=n,e.getSnapshot=i,ag(e)&&lg(t)}function og(t,e,n){return n(function(){ag(e)&&lg(t)})}function ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function lg(t){var e=di(t,1);e!==null&&Nn(e,t,1,-1)}function Zd(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=F_.bind(null,Je,t),[e.memoizedState,t]}function So(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ug(){return En().memoizedState}function Ra(t,e,n,i){var r=On();Je.flags|=t,r.memoizedState=So(1|e,n,void 0,i===void 0?null:i)}function Sl(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=So(e,n,s,i);return}}Je.flags|=t,r.memoizedState=So(1|e,n,s,i)}function Qd(t,e){return Ra(8390656,8,t,e)}function Nf(t,e){return Sl(2048,8,t,e)}function cg(t,e){return Sl(4,2,t,e)}function fg(t,e){return Sl(4,4,t,e)}function dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hg(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4,4,dg.bind(null,e,t),n)}function Ff(){}function pg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return dr&21?(zn(n,e)||(n=xm(),Je.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function I_(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=iu.transition;iu.transition={};try{t(!1),e()}finally{Ge=n,iu.transition=i}}function vg(){return En().memoizedState}function N_(t,e,n){var i=Ii(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_g(t))xg(e,n);else if(n=Ym(t,e,n,i),n!==null){var r=Ut();Nn(n,t,i,r),yg(n,e,i)}}function F_(t,e,n){var i=Ii(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_g(t))xg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ym(t,e,r,i),n!==null&&(r=Ut(),Nn(n,t,i,r),yg(n,e,i))}}function _g(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function xg(t,e){Js=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}var rl={readContext:wn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},z_={readContext:wn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Qd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=On();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N_.bind(null,Je,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Zd,useDebugValue:Ff,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Zd(!1),e=t[0];return t=I_.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Je,r=On();if(Ke){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),yt===null)throw Error(J(349));dr&30||rg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qd(og.bind(null,i,s,t),[t]),i.flags|=2048,So(9,sg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=On(),e=yt.identifierPrefix;if(Ke){var n=oi,i=si;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k_={readContext:wn,useCallback:pg,useContext:wn,useEffect:Nf,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:ru,useRef:ug,useState:function(){return ru(yo)},useDebugValue:Ff,useDeferredValue:function(t){var e=En();return gg(e,ft.memoizedState,t)},useTransition:function(){var t=ru(yo)[0],e=En().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1},O_={readContext:wn,useCallback:pg,useContext:wn,useEffect:Nf,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:su,useRef:ug,useState:function(){return su(yo)},useDebugValue:Ff,useDeferredValue:function(t){var e=En();return ft===null?e.memoizedState=t:gg(e,ft.memoizedState,t)},useTransition:function(){var t=su(yo)[0],e=En().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1};function ds(t,e){try{var n="",i=e;do n+=dv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U_=typeof WeakMap=="function"?WeakMap:Map;function Sg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,Fc=i),Tc(t,e)},n}function Mg(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tc(t,e),typeof i!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new U_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J_.bind(null,t,e,n),e.then(t,t))}function eh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function th(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var B_=pi.ReactCurrentOwner,jt=!1;function Ot(t,e,n,i){e.child=t===null?eg(e,null,n,i):cs(e,t.child,n,i)}function nh(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=Rf(t,e,n,i,s,r),n=If(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(Ke&&n&&yf(e),e.flags|=1,Ot(t,e,i,r),e.child)}function ih(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wg(t,e,s,i,r)):(t=za(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,i)&&t.ref===e.ref)return hi(t,e,r)}return e.flags|=1,t=Ni(s,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ho(s,i)&&t.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,hi(t,e,r)}return bc(t,e,n,i,r)}function Eg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Kr,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(Kr,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,je(Kr,rn),rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,je(Kr,rn),rn|=i;return Ot(t,e,r,n),e.child}function Tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bc(t,e,n,i,r){var s=qt(n)?cr:It.current;return s=ls(e,s),is(e,r),n=Rf(t,e,n,i,s,r),i=If(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hi(t,e,r)):(Ke&&i&&yf(e),e.flags|=1,Ot(t,e,n,r),e.child)}function rh(t,e,n,i,r){if(qt(n)){var s=!0;Ka(e)}else s=!1;if(is(e,r),e.stateNode===null)Ia(t,e),Qm(e,n,i),Ec(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=qt(n)?cr:It.current,u=ls(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Yd(e,o,i,u),Mi=!1;var f=e.memoizedState;o.state=f,tl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Xt.current||Mi?(typeof c=="function"&&(wc(e,n,c,i),l=e.memoizedState),(a=Mi||$d(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Km(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=qt(n)?cr:It.current,l=ls(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Yd(e,o,i,l),Mi=!1,f=e.memoizedState,o.state=f,tl(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Xt.current||Mi?(typeof v=="function"&&(wc(e,n,v,i),x=e.memoizedState),(u=Mi||$d(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Cc(t,e,n,i,s,r)}function Cc(t,e,n,i,r,s){Tg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hd(e,n,!1),hi(t,e,s);i=e.stateNode,B_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=i.state,r&&Hd(e,n,!0),e.child}function bg(t){var e=t.stateNode;e.pendingContext?Gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gd(t,e.context,!1),Af(t,e.containerInfo)}function sh(t,e,n,i,r){return us(),Mf(r),e.flags|=256,Ot(t,e,n,i),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function Pc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cg(t,e,n){var i=e.pendingProps,r=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),je(Ze,r&1),t===null)return Sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=El(o,i,0,null),t=ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pc(n),e.memoizedState=Ac,t):zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return V_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ac,i}return s=t.child,t=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=El({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&Mf(i),cs(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ou(Error(J(422))),Zo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=El({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=Pc(o),e.memoizedState=Ac,s);if(!(e.mode&1))return Zo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=ou(s,i,void 0),Zo(t,e,o,i)}if(a=(o&t.childLanes)!==0,jt||a){if(i=yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Nn(i,t,r,-1))}return Gf(),i=ou(Error(J(421))),Zo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ex.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=Li(r.nextSibling),un=e,Ke=!0,Rn=null,t!==null&&(gn[vn++]=si,gn[vn++]=oi,gn[vn++]=fr,si=t.id,oi=t.overflow,fr=e),e=zf(e,i.children),e.flags|=4096,e)}function oh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mc(t.return,e,n)}function au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ag(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ot(t,e,i.children,n),i=Ze.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&oh(t,n,e);else if(t.tag===19)oh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(je(Ze,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}au(e,!0,n,null,s);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function G_(t,e,n){switch(e.tag){case 3:bg(e),us();break;case 5:tg(e);break;case 1:qt(e.type)&&Ka(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;je(Ja,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(je(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?Cg(t,e,n):(je(Ze,Ze.current&1),t=hi(t,e,n),t!==null?t.sibling:null);je(Ze,Ze.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ag(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),je(Ze,Ze.current),i)break;return null;case 22:case 23:return e.lanes=0,Eg(t,e,n)}return hi(t,e,n)}var Pg,Lc,Lg,Dg;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};Lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,nr(Wn.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=et({},r,{value:void 0}),i=et({},i,{value:void 0}),s=[];break;case"textarea":r=tc(t,r),i=tc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$a)}ic(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Rs(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function H_(t,e,n){var i=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return qt(e.type)&&Ya(),At(e),null;case 3:return i=e.stateNode,fs(),$e(Xt),$e(It),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Oc(Rn),Rn=null))),Lc(t,e),At(e),null;case 5:Pf(e);var r=nr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)Lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return At(e),null}if(t=nr(Wn.current),Yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Vn]=e,i[go]=s,t=(e.mode&1)!==0,n){case"dialog":Xe("cancel",i),Xe("close",i);break;case"iframe":case"object":case"embed":Xe("load",i);break;case"video":case"audio":for(r=0;r<Ws.length;r++)Xe(Ws[r],i);break;case"source":Xe("error",i);break;case"img":case"image":case"link":Xe("error",i),Xe("load",i);break;case"details":Xe("toggle",i);break;case"input":md(i,s),Xe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Xe("invalid",i);break;case"textarea":vd(i,s),Xe("invalid",i)}ic(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,a,t),r=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Xe("scroll",i)}switch(n){case"input":Bo(i),gd(i,s,!0);break;case"textarea":Bo(i),_d(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$a)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Vn]=e,t[go]=i,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(o=rc(n,i),n){case"dialog":Xe("cancel",t),Xe("close",t),r=i;break;case"iframe":case"object":case"embed":Xe("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ws.length;r++)Xe(Ws[r],t);r=i;break;case"source":Xe("error",t),r=i;break;case"img":case"image":case"link":Xe("error",t),Xe("load",t),r=i;break;case"details":Xe("toggle",t),r=i;break;case"input":md(t,i),r=Qu(t,i),Xe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=et({},i,{value:void 0}),Xe("invalid",t);break;case"textarea":vd(t,i),r=tc(t,i),Xe("invalid",t);break;default:r=i}ic(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?am(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Xe("scroll",t):l!=null&&of(t,s,l,o))}switch(n){case"input":Bo(t),gd(t,i,!1);break;case"textarea":Bo(t),_d(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return At(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=nr(_o.current),nr(Wn.current),Yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Vn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:$o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Vn]=e,e.stateNode=i}return At(e),null;case 13:if($e(Ze),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&an!==null&&e.mode&1&&!(e.flags&128))$m(),us(),e.flags|=98560,s=!1;else if(s=Yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Vn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),s=!1}else Rn!==null&&(Oc(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?dt===0&&(dt=3):Gf())),e.updateQueue!==null&&(e.flags|=4),At(e),null);case 4:return fs(),Lc(t,e),t===null&&po(e.stateNode.containerInfo),At(e),null;case 10:return Tf(e.type._context),At(e),null;case 17:return qt(e.type)&&Ya(),At(e),null;case 19:if($e(Ze),s=e.memoizedState,s===null)return At(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Rs(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,Rs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>hs&&(e.flags|=128,i=!0,Rs(s,!1),e.lanes=4194304)}else{if(!i)if(t=nl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ke)return At(e),null}else 2*it()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,i=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Ze.current,je(Ze,i?n&1|2:n&1),e):(At(e),null);case 22:case 23:return Vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?rn&1073741824&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function W_(t,e){switch(Sf(e),e.tag){case 1:return qt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),$e(Xt),$e(It),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if($e(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(Ze),null;case 4:return fs(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var Qo=!1,Dt=!1,j_=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){tt(t,e,i)}else n.current=null}function Dc(t,e,n){try{n()}catch(i){tt(t,e,i)}}var ah=!1;function X_(t,e){if(pc=ja,t=Fm(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var v;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:t,selectionRange:n},ja=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Ln(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return x=ah,ah=!1,x}function eo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dc(e,n,s)}r=r.next}while(r!==i)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[go],delete e[_c],delete e[A_],delete e[P_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ig(t){return t.tag===5||t.tag===3||t.tag===4}function lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(i!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}function Nc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Mt=null,Dn=!1;function mi(t,e,n){for(n=n.child;n!==null;)Ng(t,e,n),n=n.sibling}function Ng(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:Dt||Yr(n,e);case 6:var i=Mt,r=Dn;Mt=null,mi(t,e,n),Mt=i,Dn=r,Mt!==null&&(Dn?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Dn?(t=Mt,n=n.stateNode,t.nodeType===8?eu(t.parentNode,n):t.nodeType===1&&eu(t,n),co(t)):eu(Mt,n.stateNode));break;case 4:i=Mt,r=Dn,Mt=n.stateNode.containerInfo,Dn=!0,mi(t,e,n),Mt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Dt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dc(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!Dt&&(Yr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){tt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Dt=(i=Dt)||n.memoizedState!==null,mi(t,e,n),Dt=i):mi(t,e,n);break;default:mi(t,e,n)}}function uh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j_),e.forEach(function(i){var r=tx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,Dn=!1;break e;case 3:Mt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Mt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Mt===null)throw Error(J(160));Ng(s,o,r),Mt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fg(e,t),e=e.sibling}function Fg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),kn(t),i&4){try{eo(3,t,t.return),Ml(3,t)}catch(h){tt(t,t.return,h)}try{eo(5,t,t.return)}catch(h){tt(t,t.return,h)}}break;case 1:Tn(e,t),kn(t),i&512&&n!==null&&Yr(n,n.return);break;case 5:if(Tn(e,t),kn(t),i&512&&n!==null&&Yr(n,n.return),t.flags&32){var r=t.stateNode;try{oo(r,"")}catch(h){tt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nm(r,s),rc(a,o);var u=rc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?am(r,d):c==="dangerouslySetInnerHTML"?sm(r,d):c==="children"?oo(r,d):of(r,c,d,u)}switch(a){case"input":Ju(r,s);break;case"textarea":im(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Jr(r,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[go]=s}catch(h){tt(t,t.return,h)}}break;case 6:if(Tn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){tt(t,t.return,h)}}break;case 3:if(Tn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(h){tt(t,t.return,h)}break;case 4:Tn(e,t),kn(t);break;case 13:Tn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=it())),i&4&&uh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(u=Dt)||c,Tn(e,t),Dt=u):Tn(e,t),kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(d=fe=c;fe!==null;){switch(f=fe,v=f.child,f.tag){case 0:case 11:case 14:case 15:eo(4,f,f.return);break;case 1:Yr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){tt(i,n,h)}}break;case 5:Yr(f,f.return);break;case 22:if(f.memoizedState!==null){fh(d);continue}}v!==null?(v.return=f,fe=v):fh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=om("display",o))}catch(h){tt(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){tt(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tn(e,t),kn(t),i&4&&uh(t);break;case 21:break;default:Tn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ig(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oo(r,""),i.flags&=-33);var s=lh(t);Nc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lh(t);Ic(t,a,o);break;default:throw Error(J(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q_(t,e,n){fe=t,zg(t)}function zg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=Qo;var u=Dt;if(Qo=o,(Dt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?dh(r):l!==null?(l.return=o,fe=l):dh(r);for(;s!==null;)fe=s,zg(s),s=s.sibling;fe=r,Qo=a,Dt=u}ch(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):ch(t)}}function ch(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||Ml(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Dt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Dt||e.flags&512&&Rc(e)}catch(f){tt(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function fh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function dh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tt(e,r,l)}}var s=e.return;try{Rc(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{Rc(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var $_=Math.ceil,sl=pi.ReactCurrentDispatcher,kf=pi.ReactCurrentOwner,Sn=pi.ReactCurrentBatchConfig,ze=0,yt=null,at=null,Et=0,rn=0,Kr=Bi(0),dt=0,Mo=null,hr=0,wl=0,Of=0,to=null,Ht=null,Uf=0,hs=1/0,ei=null,ol=!1,Fc=null,Ri=null,Jo=!1,bi=null,al=0,no=0,zc=null,Na=-1,Fa=0;function Ut(){return ze&6?it():Na!==-1?Na:Na=it()}function Ii(t){return t.mode&1?ze&2&&Et!==0?Et&-Et:D_.transition!==null?(Fa===0&&(Fa=xm()),Fa):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Nn(t,e,n,i){if(50<no)throw no=0,zc=null,Error(J(185));Po(t,n,i),(!(ze&2)||t!==yt)&&(t===yt&&(!(ze&2)&&(wl|=n),dt===4&&Ei(t,Et)),$t(t,i),n===1&&ze===0&&!(e.mode&1)&&(hs=it()+500,xl&&Vi()))}function $t(t,e){var n=t.callbackNode;Dv(t,e);var i=Wa(t,t===yt?Et:0);if(i===0)n!==null&&Sd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sd(n),e===1)t.tag===0?L_(hh.bind(null,t)):jm(hh.bind(null,t)),b_(function(){!(ze&6)&&Vi()}),n=null;else{switch(ym(i)){case 1:n=ff;break;case 4:n=vm;break;case 16:n=Ha;break;case 536870912:n=_m;break;default:n=Ha}n=Wg(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(Na=-1,Fa=0,ze&6)throw Error(J(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var i=Wa(t,t===yt?Et:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ll(t,i);else{e=i;var r=ze;ze|=2;var s=Ug();(yt!==t||Et!==e)&&(ei=null,hs=it()+500,or(t,e));do try{Z_();break}catch(a){Og(t,a)}while(1);Ef(),sl.current=s,ze=r,at!==null?e=0:(yt=null,Et=0,e=dt)}if(e!==0){if(e===2&&(r=uc(t),r!==0&&(i=r,e=kc(t,r))),e===1)throw n=Mo,or(t,0),Ei(t,i),$t(t,it()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y_(r)&&(e=ll(t,i),e===2&&(s=uc(t),s!==0&&(i=s,e=kc(t,s))),e===1))throw n=Mo,or(t,0),Ei(t,i),$t(t,it()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Ki(t,Ht,ei);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=Uf+500-it(),10<e)){if(Wa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Ut(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vc(Ki.bind(null,t,Ht,ei),e);break}Ki(t,Ht,ei);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=it()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$_(i/1960))-i,10<i){t.timeoutHandle=vc(Ki.bind(null,t,Ht,ei),i);break}Ki(t,Ht,ei);break;case 5:Ki(t,Ht,ei);break;default:throw Error(J(329))}}}return $t(t,it()),t.callbackNode===n?kg.bind(null,t):null}function kc(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=ll(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&Oc(e)),t}function Oc(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function Y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~Of,e&=~wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function hh(t){if(ze&6)throw Error(J(327));rs();var e=Wa(t,0);if(!(e&1))return $t(t,it()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var i=uc(t);i!==0&&(e=i,n=kc(t,i))}if(n===1)throw n=Mo,or(t,0),Ei(t,e),$t(t,it()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,Ht,ei),$t(t,it()),null}function Bf(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(hs=it()+500,xl&&Vi())}}function pr(t){bi!==null&&bi.tag===0&&!(ze&6)&&rs();var e=ze;ze|=1;var n=Sn.transition,i=Ge;try{if(Sn.transition=null,Ge=1,t)return t()}finally{Ge=i,Sn.transition=n,ze=e,!(ze&6)&&Vi()}}function Vf(){rn=Kr.current,$e(Kr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T_(n)),at!==null)for(n=at.return;n!==null;){var i=n;switch(Sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ya();break;case 3:fs(),$e(Xt),$e(It),Lf();break;case 5:Pf(i);break;case 4:fs();break;case 13:$e(Ze);break;case 19:$e(Ze);break;case 10:Tf(i.type._context);break;case 22:case 23:Vf()}n=n.return}if(yt=t,at=t=Ni(t.current,null),Et=rn=e,dt=0,Mo=null,Of=wl=hr=0,Ht=to=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}tr=null}return t}function Og(t,e){do{var n=at;try{if(Ef(),Da.current=rl,il){for(var i=Je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}il=!1}if(dr=0,xt=ft=Je=null,Js=!1,xo=0,kf.current=null,n===null||n.return===null){dt=1,Mo=e,at=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Et,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=eh(o);if(v!==null){v.flags&=-257,th(v,o,a,s,e),v.mode&1&&Jd(s,u,e),e=v,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Jd(s,u,e),Gf();break e}l=Error(J(426))}}else if(Ke&&a.mode&1){var p=eh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),th(p,o,a,s,e),Mf(ds(l,a));break e}}s=l=ds(l,a),dt!==4&&(dt=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Sg(s,l,e);Xd(s,m);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ri===null||!Ri.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Mg(s,a,e);Xd(s,M);break e}}s=s.return}while(s!==null)}Vg(n)}catch(S){e=S,at===n&&n!==null&&(at=n=n.return);continue}break}while(1)}function Ug(){var t=sl.current;return sl.current=rl,t===null?rl:t}function Gf(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||!(hr&268435455)&&!(wl&268435455)||Ei(yt,Et)}function ll(t,e){var n=ze;ze|=2;var i=Ug();(yt!==t||Et!==e)&&(ei=null,or(t,e));do try{K_();break}catch(r){Og(t,r)}while(1);if(Ef(),ze=n,sl.current=i,at!==null)throw Error(J(261));return yt=null,Et=0,dt}function K_(){for(;at!==null;)Bg(at)}function Z_(){for(;at!==null&&!Mv();)Bg(at)}function Bg(t){var e=Hg(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?Vg(t):at=e,kf.current=null}function Vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W_(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,at=null;return}}else if(n=H_(n,e,rn),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);dt===0&&(dt=5)}function Ki(t,e,n){var i=Ge,r=Sn.transition;try{Sn.transition=null,Ge=1,Q_(t,e,n,i)}finally{Sn.transition=r,Ge=i}return null}function Q_(t,e,n,i){do rs();while(bi!==null);if(ze&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rv(t,s),t===yt&&(at=yt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Wg(Ha,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Ge;Ge=1;var a=ze;ze|=4,kf.current=null,X_(t,n),Fg(n,t),__(mc),ja=!!pc,mc=pc=null,t.current=n,q_(n),wv(),ze=a,Ge=o,Sn.transition=s}else t.current=n;if(Jo&&(Jo=!1,bi=t,al=r),s=t.pendingLanes,s===0&&(Ri=null),bv(n.stateNode),$t(t,it()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=Fc,Fc=null,t;return al&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===zc?no++:(no=0,zc=t):no=0,Vi(),null}function rs(){if(bi!==null){var t=ym(al),e=Sn.transition,n=Ge;try{if(Sn.transition=null,Ge=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,al=0,ze&6)throw Error(J(331));var r=ze;for(ze|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:eo(8,c,s)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var f=c.sibling,v=c.return;if(Rg(c),c===u){fe=null;break}if(f!==null){f.return=v,fe=f;break}fe=v}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,fe=m;break e}fe=s.return}}var g=t.current;for(fe=g;fe!==null;){o=fe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,fe=_;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(S){tt(a,a.return,S)}if(a===o){fe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,fe=M;break e}fe=a.return}}if(ze=r,Vi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(pl,t)}catch{}i=!0}return i}finally{Ge=n,Sn.transition=e}}return!1}function ph(t,e,n){e=ds(n,e),e=Sg(t,e,1),t=Di(t,e,1),e=Ut(),t!==null&&(Po(t,1,e),$t(t,e))}function tt(t,e,n){if(t.tag===3)ph(t,t,n);else for(;e!==null;){if(e.tag===3){ph(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ri===null||!Ri.has(i))){t=ds(n,t),t=Mg(e,t,1),e=Di(e,t,1),t=Ut(),e!==null&&(Po(e,1,t),$t(e,t));break}}e=e.return}}function J_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ut(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(Et&n)===n&&(dt===4||dt===3&&(Et&130023424)===Et&&500>it()-Uf?or(t,0):Of|=n),$t(t,e)}function Gg(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=Ut();t=di(t,e),t!==null&&(Po(t,e,n),$t(t,n))}function ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gg(t,n)}function tx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Gg(t,n)}var Hg;Hg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,G_(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ke&&e.flags&1048576&&Xm(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ia(t,e),t=e.pendingProps;var r=ls(e,It.current);is(e,n),r=Rf(null,e,i,t,r,n);var s=If();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Ka(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cf(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,Ec(e,i,t,n),e=Cc(null,e,i,!0,s,n)):(e.tag=0,Ke&&s&&yf(e),Ot(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ix(i),t=Ln(i,t),r){case 0:e=bc(null,e,i,t,n);break e;case 1:e=rh(null,e,i,t,n);break e;case 11:e=nh(null,e,i,t,n);break e;case 14:e=ih(null,e,i,Ln(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),bc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),rh(t,e,i,r,n);case 3:e:{if(bg(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Km(t,e),tl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ds(Error(J(423)),e),e=sh(t,e,i,n,r);break e}else if(i!==r){r=ds(Error(J(424)),e),e=sh(t,e,i,n,r);break e}else for(an=Li(e.stateNode.containerInfo.firstChild),un=e,Ke=!0,Rn=null,n=eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=hi(t,e,n);break e}Ot(t,e,i,n)}e=e.child}return e;case 5:return tg(e),t===null&&Sc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,gc(i,r)?o=null:s!==null&&gc(i,s)&&(e.flags|=32),Tg(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Sc(e),null;case 13:return Cg(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=cs(e,null,i,n):Ot(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),nh(t,e,i,r,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,je(Ja,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!Xt.current){e=hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,n),r=wn(r),i=i(r),e.flags|=1,Ot(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),ih(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ia(t,e),e.tag=1,qt(i)?(t=!0,Ka(e)):t=!1,is(e,n),Qm(e,i,r),Ec(e,i,r,n),Cc(null,e,i,!0,t,n);case 19:return Ag(t,e,n);case 22:return Eg(t,e,n)}throw Error(J(156,e.tag))};function Wg(t,e){return gm(t,e)}function nx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new nx(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ix(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===uf)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return ar(n.children,r,s,e);case af:o=8,r|=8;break;case $u:return t=yn(12,n,e,r|2),t.elementType=$u,t.lanes=s,t;case Yu:return t=yn(13,n,e,r),t.elementType=Yu,t.lanes=s,t;case Ku:return t=yn(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case Jp:return El(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zp:o=10;break e;case Qp:o=9;break e;case lf:o=11;break e;case uf:o=14;break e;case Si:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ar(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function El(t,e,n,i){return t=yn(22,t,i,e),t.elementType=Jp,t.lanes=n,t.stateNode={isHidden:!1},t}function lu(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function uu(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,i,r,s,o,a,l){return t=new rx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function sx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jg(t){if(!t)return ki;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(qt(n))return Wm(t,n,e)}return e}function Xg(t,e,n,i,r,s,o,a,l){return t=Wf(n,i,!0,t,r,s,o,a,l),t.context=jg(null),n=t.current,i=Ut(),r=Ii(n),s=li(i,r),s.callback=e??null,Di(n,s,r),t.current.lanes=r,Po(t,r,i),$t(t,i),t}function Tl(t,e,n,i){var r=e.current,s=Ut(),o=Ii(r);return n=jg(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Di(r,e,o),t!==null&&(Nn(t,r,o,s),La(t,r,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){mh(t,e),(t=t.alternate)&&mh(t,e)}function ox(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}bl.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Tl(t,e,null,null)};bl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pr(function(){Tl(null,t,null,null)}),e[fi]=null}};function bl(t){this._internalRoot=t}bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&Tm(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gh(){}function ax(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ul(o);s.call(u)}}var o=Xg(e,i,t,0,null,!1,!1,"",gh);return t._reactRootContainer=o,t[fi]=o.current,po(t.nodeType===8?t.parentNode:t),pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ul(l);a.call(u)}}var l=Wf(t,0,!1,null,null,!1,!1,"",gh);return t._reactRootContainer=l,t[fi]=l.current,po(t.nodeType===8?t.parentNode:t),pr(function(){Tl(e,l,n,i)}),l}function Al(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ul(o);a.call(l)}}Tl(e,o,t,r)}else o=ax(n,e,t,r,i);return ul(o)}Sm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hs(e.pendingLanes);n!==0&&(df(e,n|1),$t(e,it()),!(ze&6)&&(hs=it()+500,Vi()))}break;case 13:pr(function(){var i=di(t,1);if(i!==null){var r=Ut();Nn(i,t,1,r)}}),jf(t,1)}};hf=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=Ut();Nn(e,t,134217728,n)}jf(t,134217728)}};Mm=function(t){if(t.tag===13){var e=Ii(t),n=di(t,e);if(n!==null){var i=Ut();Nn(n,t,e,i)}jf(t,e)}};wm=function(){return Ge};Em=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};oc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_l(i);if(!r)throw Error(J(90));tm(i),Ju(i,r)}}}break;case"textarea":im(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};cm=Bf;fm=pr;var lx={usingClientEntryPoint:!1,Events:[Do,Wr,_l,lm,um,Bf]},Is={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ux={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pm(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{pl=ea.inject(ux),Hn=ea}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(J(200));return sx(t,e,null,n)};fn.createRoot=function(t,e){if(!qf(t))throw Error(J(299));var n=!1,i="",r=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,po(t.nodeType===8?t.parentNode:t),new Xf(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=pm(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return pr(t)};fn.hydrate=function(t,e,n){if(!Cl(e))throw Error(J(200));return Al(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=qg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xg(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bl(e)};fn.render=function(t,e,n){if(!Cl(e))throw Error(J(200));return Al(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(J(40));return t._reactRootContainer?(pr(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};fn.unstable_batchedUpdates=Bf;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cl(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Al(t,e,n,!1,i)};fn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=fn})(ov);var vh=ju;Wu.createRoot=vh.createRoot,Wu.hydrateRoot=vh.hydrateRoot;var Uc={},cx={get exports(){return Uc},set exports(t){Uc=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var o=typeof s;if(o==="string"||o==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&i.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&i.push(l)}}}return i.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(cx);const $f=Uc;function Bc(){return Bc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Bc.apply(this,arguments)}function fx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function _h(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function dx(t){var e=hx(t,"string");return typeof e=="symbol"?e:String(e)}function hx(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function px(t,e,n){var i=Fe.useRef(t!==void 0),r=Fe.useState(e),s=r[0],o=r[1],a=t!==void 0,l=i.current;return i.current=a,!a&&l&&s!==e&&o(e),[a?t:s,Fe.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function mx(t,e){return Object.keys(e).reduce(function(n,i){var r,s=n,o=s[_h(i)],a=s[i],l=fx(s,[_h(i),i].map(dx)),u=e[i],c=px(a,o,t[u]),d=c[0],f=c[1];return Bc({},l,(r={},r[i]=d,r[u]=f,r))},t)}var gx=Function.prototype.bind.call(Function.prototype.call,[].slice);function vx(t,e){return gx(t.querySelectorAll(e))}function _x(){var t=Fe.useReducer(function(n){return!n},!1),e=t[1];return e}var xh=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function xx(t,e){var n=xh(t),i=xh(e);return function(r){n&&n(r),i&&i(r)}}function yx(t,e){return Fe.useMemo(function(){return xx(t,e)},[t,e])}const Yf=Fe.createContext(null);Yf.displayName="NavContext";const Vc=Fe.createContext(null),Kf=(t,e=null)=>t!=null?String(t):e||null,$g=Fe.createContext(null),Sx="data-rr-ui-",Mx="rrUi";function Zf(t){return`${Sx}${t}`}function wx(t){return`${Mx}${t}`}function Ex(t){var e=Fe.useRef(t);return Fe.useEffect(function(){e.current=t},[t]),e}function Yg(t){var e=Ex(t);return Fe.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const Tx=["as","disabled"];function bx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Cx(t){return!t||t.trim()==="#"}function Ax({tagName:t,disabled:e,href:n,target:i,rel:r,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||i!=null||r!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=f=>{if((e||t==="a"&&Cx(n))&&f.preventDefault(),e){f.stopPropagation();return}o?.(f)},d=f=>{f.key===" "&&(f.preventDefault(),c(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?i:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:c,onKeyDown:d},u]}const Kg=Fe.forwardRef((t,e)=>{let{as:n,disabled:i}=t,r=bx(t,Tx);const[s,{tagName:o}]=Ax(Object.assign({tagName:n,disabled:i},r));return We(o,Object.assign({},r,s,{ref:e}))});Kg.displayName="Button";const Px=["as","active","eventKey"];function Lx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Zg({key:t,onClick:e,active:n,id:i,role:r,disabled:s}){const o=Fe.useContext(Vc),a=Fe.useContext(Yf),l=Fe.useContext($g);let u=n;const c={role:r};if(a){!r&&a.role==="tablist"&&(c.role="tab");const d=a.getControllerId(t??null),f=a.getControlledId(t??null);c[Zf("event-key")]=t,c.id=d||i,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=f)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=Yg(d=>{s||(e?.(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[c,{isActive:u}]}const Qg=Fe.forwardRef((t,e)=>{let{as:n=Kg,active:i,eventKey:r}=t,s=Lx(t,Px);const[o,a]=Zg(Object.assign({key:Kf(r,s.href),active:i},s));return o[Zf("active")]=a.isActive,We(n,Object.assign({},s,o,{ref:e}))});Qg.displayName="NavItem";const Dx=["as","onSelect","activeKey","role","onKeyDown"];function Rx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const yh=()=>{},Sh=Zf("event-key"),Jg=Fe.forwardRef((t,e)=>{let{as:n="div",onSelect:i,activeKey:r,role:s,onKeyDown:o}=t,a=Rx(t,Dx);const l=_x(),u=Fe.useRef(!1),c=Fe.useContext(Vc),d=Fe.useContext($g);let f,v;d&&(s=s||"tablist",r=d.activeKey,f=d.getControlledId,v=d.getControllerId);const x=Fe.useRef(null),h=_=>{const M=x.current;if(!M)return null;const S=vx(M,`[${Sh}]:not([aria-disabled=true])`),b=M.querySelector("[aria-selected=true]");if(!b||b!==document.activeElement)return null;const P=S.indexOf(b);if(P===-1)return null;let y=P+_;return y>=S.length&&(y=0),y<0&&(y=S.length-1),S[y]},p=(_,M)=>{_!=null&&(i?.(_,M),c?.(_,M))},m=_=>{if(o?.(_),!d)return;let M;switch(_.key){case"ArrowLeft":case"ArrowUp":M=h(-1);break;case"ArrowRight":case"ArrowDown":M=h(1);break;default:return}M&&(_.preventDefault(),p(M.dataset[wx("EventKey")]||null,_),u.current=!0,l())};Fe.useEffect(()=>{if(x.current&&u.current){const _=x.current.querySelector(`[${Sh}][aria-selected=true]`);_?.focus()}u.current=!1});const g=yx(e,x);return We(Vc.Provider,{value:p,children:We(Yf.Provider,{value:{role:s,activeKey:Kf(r),getControlledId:f||yh,getControllerId:v||yh},children:We(n,Object.assign({},a,{onKeyDown:m,ref:g,role:s}))})})});Jg.displayName="Nav";const Ix=Object.assign(Jg,{Item:Qg}),Nx=["xxl","xl","lg","md","sm","xs"],Fx="xs",zx=Fe.createContext({prefixes:{},breakpoints:Nx,minBreakpoint:Fx});function Qf(t,e){const{prefixes:n}=Fe.useContext(zx);return t||n[e]||e}const e0=Fe.forwardRef(({bsPrefix:t,active:e,disabled:n,eventKey:i,className:r,variant:s,action:o,as:a,...l},u)=>{t=Qf(t,"list-group-item");const[c,d]=Zg({key:Kf(i,l.href),active:e,...l}),f=Yg(x=>{if(n){x.preventDefault(),x.stopPropagation();return}c.onClick(x)});n&&l.tabIndex===void 0&&(l.tabIndex=-1,l["aria-disabled"]=!0);const v=a||(o?l.href?"a":"button":"div");return We(v,{ref:u,...l,...c,onClick:f,className:$f(r,t,d.isActive&&"active",n&&"disabled",s&&`${t}-${s}`,o&&`${t}-action`)})});e0.displayName="ListGroupItem";const t0=Fe.forwardRef((t,e)=>{const{className:n,bsPrefix:i,variant:r,horizontal:s,numbered:o,as:a="div",...l}=mx(t,{activeKey:"onSelect"}),u=Qf(i,"list-group");let c;return s&&(c=s===!0?"horizontal":`horizontal-${s}`),We(Ix,{ref:e,...l,as:a,className:$f(n,u,r&&`${u}-${r}`,c&&`${u}-${c}`,o&&`${u}-numbered`)})});t0.displayName="ListGroup";const kx=Object.assign(t0,{Item:e0}),Ox={bg:"primary",pill:!1},cl=Fe.forwardRef(({bsPrefix:t,bg:e,pill:n,text:i,className:r,as:s="span",...o},a)=>{const l=Qf(t,"badge");return We(s,{ref:a,...o,className:$f(r,l,n&&"rounded-pill",i&&`text-${i}`,e&&`bg-${e}`)})});cl.displayName="Badge";cl.defaultProps=Ox;const Ux=()=>{const t=[{name:"GitHub",description:"",link:"https://github.com/salamanderxing"},{name:"UpWork",description:"Play online against an AI (does not work on mobile IOS)",link:"https://www.upwork.com/freelancers/~01f9a244ac1e307355?viewMode=1"},{name:"SuperProf",description:"Play online against an AI (does not work on mobile IOS)",link:"https://www.superprof.com/researcher-python-deep-learning-prompt-engineering-gpt-personalized-lessons-project-support.html"},{name:"SuperProf (IT)",description:"Play online against an AI (does not work on mobile IOS)",link:"https://www.superprof.it/ricercatore-offre-python-deep-learning-prompt-engineering-lezioni-personalizzate-supporto-progetti.html"}],e=[],n="Turtles all the way down 🐢";return ba("div",{style:{textAlign:"center",width:"100vw"},children:[We("img",{src:"profile.jpeg",style:{marginTop:"100px",marginBottom:"30px",width:150,height:150,borderRadius:"50%",objectFit:"cover",zIndex:"-100 !important"}}),ba("div",{children:[We("table",{style:{marginLeft:"auto",marginRight:"auto"},children:We("tbody",{children:We("tr",{children:e.map((r,s)=>We("td",{children:We("a",{href:r.url,target:"_blank",children:We("i",{className:`fa ${r.icon_name} fa-2x`})},s)},s))})})}),ba("div",{className:"card blur",style:{color:"white",maxWidth:"450px",margin:"auto",padding:"5px"},children:[We("p",{style:{background:"rgba(0,0,0,0.0)",backdropFilter:"blur(100)"},children:n}),We("p",{children:We("a",{href:"https://salamanderxing.github.io/cv",target:"_blank",children:We(cl,{variant:"secondary",children:"CV"})})})]})]}),We("div",{style:{textAlign:"center"},children:We(kx,{as:"ol",style:{marginTop:"10px",marginLeft:"auto",marginRight:"auto",maxWidth:500},children:t.map((r,s)=>We("a",{href:r.link,target:"_blank",style:{textDecoration:"none"},children:We(cl,{bg:"primary",children:r.name})}))})})]})};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="148",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bx=0,Mh=1,Vx=2,n0=1,Gx=2,js=3,mr=0,Mn=1,ed=2,ta=3,Fi=0,ss=1,Gc=2,wh=3,Eh=4,Hx=5,Or=100,Wx=101,jx=102,Th=103,bh=104,Xx=200,qx=201,$x=202,Yx=203,i0=204,r0=205,Kx=206,Zx=207,Qx=208,Jx=209,ey=210,ty=0,ny=1,iy=2,Hc=3,ry=4,sy=5,oy=6,ay=7,s0=0,ly=1,uy=2,jn=0,cy=1,fy=2,dy=3,hy=4,py=5,o0=300,ps=301,ms=302,Wc=303,jc=304,Pl=306,ir=1e3,sn=1001,Xc=1002,Qe=1003,Ch=1004,cu=1005,_n=1006,my=1007,wo=1008,gr=1009,gy=1010,vy=1011,a0=1012,_y=1013,rr=1014,ai=1015,gs=1016,xy=1017,yy=1018,os=1020,Sy=1021,My=1022,on=1023,wy=1024,Ey=1025,lr=1026,vs=1027,Ty=1028,by=1029,Cy=1030,Ay=1031,Py=1033,fu=33776,du=33777,hu=33778,pu=33779,Ah=35840,Ph=35841,Lh=35842,Dh=35843,Ly=36196,Rh=37492,Ih=37496,Nh=37808,Fh=37809,zh=37810,kh=37811,Oh=37812,Uh=37813,Bh=37814,Vh=37815,Gh=37816,Hh=37817,Wh=37818,jh=37819,Xh=37820,qh=37821,$h=36492,Oi=3e3,qe=3001,Dy=3200,Ry=3201,Iy=0,Ny=1,Un="srgb",Eo="srgb-linear",mu=7680,Fy=519,Yh=35044,Kh="300 es",qc=1035;class yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,Zh=180/Math.PI;function Io(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function zy(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function Qh(t){return(t&t-1)===0&&t!==0}function $c(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,n=0){xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(){ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],v=i[5],x=i[8],h=r[0],p=r[3],m=r[6],g=r[1],_=r[4],M=r[7],S=r[2],b=r[5],P=r[8];return s[0]=o*h+a*g+l*S,s[3]=o*p+a*_+l*b,s[6]=o*m+a*M+l*P,s[1]=u*h+c*g+d*S,s[4]=u*p+c*_+d*b,s[7]=u*m+c*M+d*P,s[2]=f*h+v*g+x*S,s[5]=f*p+v*_+x*b,s[8]=f*m+v*M+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,v=u*s-o*l,x=n*d+i*f+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=v*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new ln;function l0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ur(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ka(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const xu={[Un]:{[Eo]:ur},[Eo]:{[Un]:ka}},zt={legacyMode:!0,get workingColorSpace(){return Eo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(xu[e]&&xu[e][n]!==void 0){const i=xu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},bn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function yu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ra(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=zt.workingColorSpace){if(e=zy(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,zt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,zt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,zt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,zt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Un){const i=u0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return zt.fromWorkingColorSpace(ra(this,ct),e),Wt(ct.r*255,0,255)<<16^Wt(ct.g*255,0,255)<<8^Wt(ct.b*255,0,255)<<0}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.fromWorkingColorSpace(ra(this,ct),n);const i=ct.r,r=ct.g,s=ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=zt.workingColorSpace){return zt.fromWorkingColorSpace(ra(this,ct),n),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Un){return zt.fromWorkingColorSpace(ra(this,ct),e),e!==Un?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(bn),bn.h+=e,bn.s+=n,bn.l+=i,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bn),e.getHSL(ia);const i=vu(bn.h,ia.h,n),r=vu(bn.s,ia.s,n),s=vu(bn.l,ia.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=u0;let Er;class c0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=fl("canvas")),Er.width=e.width,Er.height=e.height;const i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ur(n[i]/255)*255):n[i]=ur(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class f0{constructor(e=null){this.isSource=!0,this.uuid=Io(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ky=0;class Yt extends yr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=sn,r=sn,s=_n,o=wo,a=on,l=gr,u=Yt.DEFAULT_ANISOTROPY,c=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Io(),this.name="",this.source=new f0(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=o0;Yt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],v=l[5],x=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+v+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(v+1)/2,S=(m+1)/2,b=(c+f)/4,P=(d+h)/4,y=(x+p)/4;return _>M&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=P/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=P/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-h)/g,this.z=(f-c)/g,this.w=Math.acos((u+v+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kt extends yr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new f0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d0 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],v=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=v,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==v||c!==x){let p=1-a;const m=l*f+u*v+c*x+d*h,g=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),b=Math.atan2(S,m*g);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S}const M=a*g;if(l=l*p+f*M,u=u*p+v*M,c=c*p+x*M,d=d*p+h*M,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],v=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*v-u*f,e[n+1]=l*x+c*f+u*d-a*v,e[n+2]=u*x+c*v+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d-f*v*x;break;case"YXZ":this._x=f*c*d+u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d+f*v*x;break;case"ZXY":this._x=f*c*d-u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d-f*v*x;break;case"ZYX":this._x=f*c*d-u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d+f*v*x;break;case"YZX":this._x=f*c*d+u*v*x,this._y=u*v*d+f*c*x,this._z=u*c*x-f*v*d,this._w=u*c*d-f*v*x;break;case"XZY":this._x=f*c*d-u*v*x,this._y=u*v*d-f*c*x,this._z=u*c*x+f*v*d,this._w=u*c*d+f*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(c-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>d){const v=2*Math.sqrt(1+i-a-d);this._w=(c-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>d){const v=2*Math.sqrt(1+a-i-d);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+c)/v}else{const v=2*Math.sqrt(1+d-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+c)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new k,Jh=new vr;class No{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Xi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xi)}else i.boundingBox===null&&i.computeBoundingBox(),wu.copy(i.boundingBox),wu.applyMatrix4(e.matrixWorld),this.union(wu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),sa.subVectors(this.max,Ns),Tr.subVectors(e.a,Ns),br.subVectors(e.b,Ns),Cr.subVectors(e.c,Ns),gi.subVectors(br,Tr),vi.subVectors(Cr,br),qi.subVectors(Tr,Cr);let n=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-qi.z,qi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,qi.z,0,-qi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-qi.y,qi.x,0];return!Eu(n,Tr,br,Cr,sa)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,Tr,br,Cr,sa))?!1:(oa.crossVectors(gi,vi),n=[oa.x,oa.y,oa.z],Eu(n,Tr,br,Cr,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new k,new k,new k,new k,new k,new k,new k,new k],Xi=new k,wu=new No,Tr=new k,br=new k,Cr=new k,gi=new k,vi=new k,qi=new k,Ns=new k,sa=new k,oa=new k,$i=new k;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=n.dot($i),c=i.dot($i);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Uy=new No,Fs=new k,Tu=new k;class Ll{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Tu)),this.expandByPoint(Fs.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new k,bu=new k,aa=new k,_i=new k,Cu=new k,la=new k,Au=new k;class h0{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(n).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bu.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(bu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(aa),a=_i.dot(this.direction),l=-_i.dot(aa),u=_i.lengthSq(),c=Math.abs(1-o*o);let d,f,v,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,v=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),v=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),v=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),v=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),v=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(aa).multiplyScalar(f).add(bu),v}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){Cu.subVectors(n,e),la.subVectors(i,e),Au.crossVectors(Cu,la);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(_i,la));if(l<0)return null;const u=a*this.direction.dot(Cu.cross(_i));if(u<0||l+u>o)return null;const c=-a*_i.dot(Au);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,v,x,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=v,m[7]=x,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,v=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=v+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+v*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,v=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-v,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=v*a-x,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,v=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=x+v*a,n[1]=v+x*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,v=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-v,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=v*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+v,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=v*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,v=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=v*d-x,n[2]=x*d-v,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,Vy)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),xi.crossVectors(i,tn),xi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),xi.crossVectors(i,tn)),xi.normalize(),ua.crossVectors(tn,xi),r[0]=xi.x,r[4]=ua.x,r[8]=tn.x,r[1]=xi.y,r[5]=ua.y,r[9]=tn.y,r[2]=xi.z,r[6]=ua.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],v=i[13],x=i[2],h=i[6],p=i[10],m=i[14],g=i[3],_=i[7],M=i[11],S=i[15],b=r[0],P=r[4],y=r[8],A=r[12],L=r[1],X=r[5],ie=r[9],z=r[13],N=r[2],Y=r[6],Q=r[10],K=r[14],R=r[3],G=r[7],V=r[11],U=r[15];return s[0]=o*b+a*L+l*N+u*R,s[4]=o*P+a*X+l*Y+u*G,s[8]=o*y+a*ie+l*Q+u*V,s[12]=o*A+a*z+l*K+u*U,s[1]=c*b+d*L+f*N+v*R,s[5]=c*P+d*X+f*Y+v*G,s[9]=c*y+d*ie+f*Q+v*V,s[13]=c*A+d*z+f*K+v*U,s[2]=x*b+h*L+p*N+m*R,s[6]=x*P+h*X+p*Y+m*G,s[10]=x*y+h*ie+p*Q+m*V,s[14]=x*A+h*z+p*K+m*U,s[3]=g*b+_*L+M*N+S*R,s[7]=g*P+_*X+M*Y+S*G,s[11]=g*y+_*ie+M*Q+S*V,s[15]=g*A+_*z+M*K+S*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],v=e[14],x=e[3],h=e[7],p=e[11],m=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*v-i*l*v)+h*(+n*l*v-n*u*f+s*o*f-r*o*v+r*u*c-s*l*c)+p*(+n*u*d-n*a*v-s*o*d+i*o*v+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],v=e[11],x=e[12],h=e[13],p=e[14],m=e[15],g=d*p*u-h*f*u+h*l*v-a*p*v-d*l*m+a*f*m,_=x*f*u-c*p*u-x*l*v+o*p*v+c*l*m-o*f*m,M=c*h*u-x*d*u+x*a*v-o*h*v-c*a*m+o*d*m,S=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,b=n*g+i*_+r*M+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=g*P,e[1]=(h*f*s-d*p*s-h*r*v+i*p*v+d*r*m-i*f*m)*P,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*P,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*v-i*l*v)*P,e[4]=_*P,e[5]=(c*p*s-x*f*s+x*r*v-n*p*v-c*r*m+n*f*m)*P,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*m-n*l*m)*P,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*v+n*l*v)*P,e[8]=M*P,e[9]=(x*d*s-c*h*s-x*i*v+n*h*v+c*i*m-n*d*m)*P,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*m+n*a*m)*P,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*v-n*a*v)*P,e[12]=S*P,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*P,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*P,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,v=s*c,x=s*d,h=o*c,p=o*d,m=a*d,g=l*u,_=l*c,M=l*d,S=i.x,b=i.y,P=i.z;return r[0]=(1-(h+m))*S,r[1]=(v+M)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(v-M)*b,r[5]=(1-(f+m))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+_)*P,r[9]=(p-g)*P,r[10]=(1-(f+h))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,c=1/o,d=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),v=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,v=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ar=new k,Cn=new St,By=new k(0,0,0),Vy=new k(1,1,1),xi=new k,ua=new k,tn=new k,ep=new St,tp=new vr;class Fo{constructor(e=0,n=0,i=0,r=Fo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fo.DefaultOrder="XYZ";Fo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const np=new k,Pr=new vr,Zn=new St,ca=new k,zs=new k,Hy=new k,Wy=new vr,ip=new k(1,0,0),rp=new k(0,1,0),sp=new k(0,0,1),jy={type:"added"},op={type:"removed"};class Zt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DefaultUp.clone();const e=new k,n=new Fo,i=new vr,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new ln}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Zt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Zt.DefaultMatrixWorldAutoUpdate,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(zs,ca,this.up):Zn.lookAt(ca,zs,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(op)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(op)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DefaultUp=new k(0,1,0);Zt.DefaultMatrixAutoUpdate=!0;Zt.DefaultMatrixWorldAutoUpdate=!0;const An=new k,Qn=new k,Pu=new k,Jn=new k,Lr=new k,Dr=new k,ap=new k,Lu=new k,Du=new k,Ru=new k;class ri{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),Qn.subVectors(i,n),Pu.subVectors(e,n);const o=An.dot(An),a=An.dot(Qn),l=An.dot(Pu),u=Qn.dot(Qn),c=Qn.dot(Pu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,v=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn),l.set(0,0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),Qn.subVectors(e,n),An.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ri.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Dr.subVectors(s,i),Lu.subVectors(e,i);const l=Lr.dot(Lu),u=Dr.dot(Lu);if(l<=0&&u<=0)return n.copy(i);Du.subVectors(e,r);const c=Lr.dot(Du),d=Dr.dot(Du);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Lr,o);Ru.subVectors(e,s);const v=Lr.dot(Ru),x=Dr.dot(Ru);if(x>=0&&v<=x)return n.copy(s);const h=v*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Dr,a);const p=c*x-v*d;if(p<=0&&d-c>=0&&v-x>=0)return ap.subVectors(s,r),a=(d-c)/(d-c+(v-x)),n.copy(r).addScaledVector(ap,a);const m=1/(p+h+f);return o=h*m,a=f*m,n.copy(i).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xy=0;class zo extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=ss,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=i0,this.blendDst=r0,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mu,this.stencilZFail=mu,this.stencilZPass=mu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new k,fa=new xe;class Fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fa.fromBufferAttribute(this,n),fa.applyMatrix3(e),this.setXY(n,fa.x,fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyMatrix3(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyMatrix4(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.applyNormalMatrix(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ot.fromBufferAttribute(this,n),ot.transformDirection(e),this.setXYZ(n,ot.x,ot.y,ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class m0 extends Fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g0 extends Fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ui extends Fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qy=0;const mn=new St,Iu=new Zt,Rr=new k,nn=new No,ks=new No,_t=new k;class Xn extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?g0:m0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ln().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(nn.min,ks.min),nn.expandByPoint(_t),_t.addVectors(nn.max,ks.max),nn.expandByPoint(_t)):(nn.expandByPoint(ks.min),nn.expandByPoint(ks.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_t.fromBufferAttribute(a,u),l&&(Rr.fromBufferAttribute(e,u),_t.add(Rr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new k,c[L]=new k;const d=new k,f=new k,v=new k,x=new xe,h=new xe,p=new xe,m=new k,g=new k;function _(L,X,ie){d.fromArray(r,L*3),f.fromArray(r,X*3),v.fromArray(r,ie*3),x.fromArray(o,L*2),h.fromArray(o,X*2),p.fromArray(o,ie*2),f.sub(d),v.sub(d),h.sub(x),p.sub(x);const z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(v,-h.y).multiplyScalar(z),g.copy(v).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(z),u[L].add(m),u[X].add(m),u[ie].add(m),c[L].add(g),c[X].add(g),c[ie].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let L=0,X=M.length;L<X;++L){const ie=M[L],z=ie.start,N=ie.count;for(let Y=z,Q=z+N;Y<Q;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const S=new k,b=new k,P=new k,y=new k;function A(L){P.fromArray(s,L*3),y.copy(P);const X=u[L];S.copy(X),S.sub(P.multiplyScalar(P.dot(X))).normalize(),b.crossVectors(y,X);const z=b.dot(c[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=z}for(let L=0,X=M.length;L<X;++L){const ie=M[L],z=ie.start,N=ie.count;for(let Y=z,Q=z+N;Y<Q;Y+=3)A(i[Y+0]),A(i[Y+1]),A(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,d=new k;if(e)for(let f=0,v=e.count;f<v;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,v=n.count;f<v;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let v=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?v=l[h]*a.data.stride+a.offset:v=l[h]*c;for(let m=0;m<c;m++)f[x++]=u[v++]}return new Fn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],v=e(f,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const v=u[d];c.push(v.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,v=d.length;f<v;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new St,Ir=new h0,Nu=new Ll,Os=new k,Us=new k,Bs=new k,Fu=new k,da=new k,ha=new xe,pa=new xe,ma=new xe,zu=new k,ga=new k;class Gn extends Zt{constructor(e=new Xn,n=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Fu.fromBufferAttribute(d,e),o?da.addScaledVector(Fu,c):da.addScaledVector(Fu.sub(n),c))}n.add(da)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Nu.copy(i.boundingSphere),Nu.applyMatrix4(s),e.ray.intersectsSphere(Nu)===!1)||(lp.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(lp),i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const h=d[v],p=r[h.materialIndex],m=Math.max(h.start,f.start),g=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=g;_<M;_+=3){const S=a.getX(_),b=a.getX(_+1),P=a.getX(_+2);o=va(this,p,e,Ir,u,c,S,b,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=v,p=x;h<p;h+=3){const m=a.getX(h),g=a.getX(h+1),_=a.getX(h+2);o=va(this,r,e,Ir,u,c,m,g,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const h=d[v],p=r[h.materialIndex],m=Math.max(h.start,f.start),g=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=g;_<M;_+=3){const S=_,b=_+1,P=_+2;o=va(this,p,e,Ir,u,c,S,b,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=v,p=x;h<p;h+=3){const m=h,g=h+1,_=h+2;o=va(this,r,e,Ir,u,c,m,g,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function $y(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ga);return u<n.near||u>n.far?null:{distance:u,point:ga.clone(),object:t}}function va(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Os),t.getVertexPosition(a,Us),t.getVertexPosition(l,Bs);const u=$y(t,e,n,i,Os,Us,Bs,zu);if(u){r&&(ha.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),u.uv=ri.getUV(zu,Os,Us,Bs,ha,pa,ma,new xe)),s&&(ha.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),u.uv2=ri.getUV(zu,Os,Us,Bs,ha,pa,ma,new xe));const c={a:o,b:a,c:l,normal:new k,materialIndex:0};ri.getNormal(Os,Us,Bs,c.normal),u.face=c}return u}class ko extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,v=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(u,3)),this.setAttribute("normal",new ui(c,3)),this.setAttribute("uv",new ui(d,2));function x(h,p,m,g,_,M,S,b,P,y,A){const L=M/P,X=S/y,ie=M/2,z=S/2,N=b/2,Y=P+1,Q=y+1;let K=0,R=0;const G=new k;for(let V=0;V<Q;V++){const U=V*X-z;for(let B=0;B<Y;B++){const Z=B*L-ie;G[h]=Z*g,G[p]=U*_,G[m]=N,u.push(G.x,G.y,G.z),G[h]=0,G[p]=0,G[m]=b>0?1:-1,c.push(G.x,G.y,G.z),d.push(B/P),d.push(1-V/y),K+=1}}for(let V=0;V<y;V++)for(let U=0;U<P;U++){const B=f+U+Y*V,Z=f+U+Y*(V+1),ee=f+(U+1)+Y*(V+1),oe=f+(U+1)+Y*V;l.push(B,Z,oe),l.push(Z,ee,oe),R+=6}a.addGroup(v,R,A),v+=R,f+=K}}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function Yy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function v0(t){return t.getRenderTarget()===null&&t.outputEncoding===qe?Un:Eo}const To={clone:_s,merge:kt};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class td extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xn extends td{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Fr=1;class Qy extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new xn(Nr,Fr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new xn(Nr,Fr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new xn(Nr,Fr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new xn(Nr,Fr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new xn(Nr,Fr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new xn(Nr,Fr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class _0 extends Yt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ps,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends Kt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ko(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Fi});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===wo&&(n.minFilter=_n),new Qy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ku=new k,eS=new k,tS=new ln;class Zi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(eS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tS.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Ll,_a=new k;class x0{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],x=i[10],h=i[11],p=i[12],m=i[13],g=i[14],_=i[15];return n[0].setComponents(a-r,d-l,h-f,_-p).normalize(),n[1].setComponents(a+r,d+l,h+f,_+p).normalize(),n[2].setComponents(a+s,d+u,h+v,_+m).normalize(),n[3].setComponents(a-s,d-u,h-v,_-m).normalize(),n[4].setComponents(a-o,d-c,h-x,_-g).normalize(),n[5].setComponents(a+o,d+c,h+x,_+g).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,v=t.createBuffer();t.bindBuffer(c,v),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,v=c.updateRange;t.bindBuffer(d,u),v.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):t.bufferSubData(d,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Rl extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,v=[],x=[],h=[],p=[];for(let m=0;m<c;m++){const g=m*f-o;for(let _=0;_<u;_++){const M=_*d-s;x.push(M,-g,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let g=0;g<a;g++){const _=g+u*m,M=g+u*(m+1),S=g+1+u*(m+1),b=g+1+u*m;v.push(_,M,b),v.push(M,S,b)}this.setIndex(v),this.setAttribute("position",new ui(x,3)),this.setAttribute("normal",new ui(h,3)),this.setAttribute("uv",new ui(p,2))}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var iS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uS="vec3 transformed = vec3( position );",cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,dS=`#ifdef USE_IRIDESCENCE
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
#endif`,hS=`#ifdef USE_BUMPMAP
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MS=`#define PI 3.141592653589793
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
}`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ES=`vec3 transformedNormal = objectNormal;
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
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PS="gl_FragColor = linearToOutputTexel( gl_FragColor );",LS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
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
}`,VS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jS=`uniform bool receiveShadow;
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
#endif`,XS=`#if defined( USE_ENVMAP )
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
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
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
#endif`,QS=`struct PhysicalMaterial {
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
}`,JS=`
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
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
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
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
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,v1=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,G1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Y1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,K1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Z1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Q1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,J1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,wM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,TM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,AM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,be={alphamap_fragment:iS,alphamap_pars_fragment:rS,alphatest_fragment:sS,alphatest_pars_fragment:oS,aomap_fragment:aS,aomap_pars_fragment:lS,begin_vertex:uS,beginnormal_vertex:cS,bsdfs:fS,iridescence_fragment:dS,bumpmap_pars_fragment:hS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:vS,color_fragment:_S,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:SS,common:MS,cube_uv_reflection_fragment:wS,defaultnormal_vertex:ES,displacementmap_pars_vertex:TS,displacementmap_vertex:bS,emissivemap_fragment:CS,emissivemap_pars_fragment:AS,encodings_fragment:PS,encodings_pars_fragment:LS,envmap_fragment:DS,envmap_common_pars_fragment:RS,envmap_pars_fragment:IS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:XS,envmap_vertex:FS,fog_vertex:zS,fog_pars_vertex:kS,fog_fragment:OS,fog_pars_fragment:US,gradientmap_pars_fragment:BS,lightmap_fragment:VS,lightmap_pars_fragment:GS,lights_lambert_fragment:HS,lights_lambert_pars_fragment:WS,lights_pars_begin:jS,lights_toon_fragment:qS,lights_toon_pars_fragment:$S,lights_phong_fragment:YS,lights_phong_pars_fragment:KS,lights_physical_fragment:ZS,lights_physical_pars_fragment:QS,lights_fragment_begin:JS,lights_fragment_maps:e1,lights_fragment_end:t1,logdepthbuf_fragment:n1,logdepthbuf_pars_fragment:i1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:a1,map_particle_fragment:l1,map_particle_pars_fragment:u1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:f1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:v1,normal_pars_fragment:_1,normal_pars_vertex:x1,normal_vertex:y1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,output_fragment:b1,packing:C1,premultiplied_alpha_fragment:A1,project_vertex:P1,dithering_fragment:L1,dithering_pars_fragment:D1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:F1,shadowmap_vertex:z1,shadowmask_pars_fragment:k1,skinbase_vertex:O1,skinning_pars_vertex:U1,skinning_vertex:B1,skinnormal_vertex:V1,specularmap_fragment:G1,specularmap_pars_fragment:H1,tonemapping_fragment:W1,tonemapping_pars_fragment:j1,transmission_fragment:X1,transmission_pars_fragment:q1,uv_pars_fragment:$1,uv_pars_vertex:Y1,uv_vertex:K1,uv2_pars_fragment:Z1,uv2_pars_vertex:Q1,uv2_vertex:J1,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distanceRGBA_vert:uM,distanceRGBA_frag:cM,equirect_vert:fM,equirect_frag:dM,linedashed_vert:hM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:vM,meshlambert_frag:_M,meshmatcap_vert:xM,meshmatcap_frag:yM,meshnormal_vert:SM,meshnormal_frag:MM,meshphong_vert:wM,meshphong_frag:EM,meshphysical_vert:TM,meshphysical_frag:bM,meshtoon_vert:CM,meshtoon_frag:AM,points_vert:PM,points_frag:LM,shadow_vert:DM,shadow_frag:RM,sprite_vert:IM,sprite_frag:NM},se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ln},uv2Transform:{value:new ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}}},Bn={basic:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:kt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:kt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:kt([se.points,se.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:kt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:kt([se.common,se.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:kt([se.sprite,se.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:kt([se.common,se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:kt([se.lights,se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Bn.physical={uniforms:kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const xa={r:0,b:0,g:0};function FM(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,u,c,d=null,f=0,v=null;function x(p,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const M=t.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Pl)?(c===void 0&&(c=new Gn(new ko(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:_s(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==qe,(d!==_||f!==_.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,v=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Gn(new Rl(2,2),new Rt({name:"BackgroundMaterial",uniforms:_s(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||v!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,v=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(xa,v0(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function zM(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(N,Y,Q,K,R){let G=!1;if(o){const V=h(K,Q,Y);u!==V&&(u=V,v(u.object)),G=m(N,K,Q,R),G&&g(N,K,Q,R)}else{const V=Y.wireframe===!0;(u.geometry!==K.id||u.program!==Q.id||u.wireframe!==V)&&(u.geometry=K.id,u.program=Q.id,u.wireframe=V,G=!0)}R!==null&&n.update(R,34963),(G||c)&&(c=!1,y(N,Y,Q,K),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,Y,Q){const K=Q.wireframe===!0;let R=a[N.id];R===void 0&&(R={},a[N.id]=R);let G=R[Y.id];G===void 0&&(G={},R[Y.id]=G);let V=G[K];return V===void 0&&(V=p(f()),G[K]=V),V}function p(N){const Y=[],Q=[],K=[];for(let R=0;R<r;R++)Y[R]=0,Q[R]=0,K[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Q,attributeDivisors:K,object:N,attributes:{},index:null}}function m(N,Y,Q,K){const R=u.attributes,G=Y.attributes;let V=0;const U=Q.getAttributes();for(const B in U)if(U[B].location>=0){const ee=R[B];let oe=G[B];if(oe===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;V++}return u.attributesNum!==V||u.index!==K}function g(N,Y,Q,K){const R={},G=Y.attributes;let V=0;const U=Q.getAttributes();for(const B in U)if(U[B].location>=0){let ee=G[B];ee===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),R[B]=oe,V++}u.attributes=R,u.attributesNum=V,u.index=K}function _(){const N=u.newAttributes;for(let Y=0,Q=N.length;Y<Q;Y++)N[Y]=0}function M(N){S(N,0)}function S(N,Y){const Q=u.newAttributes,K=u.enabledAttributes,R=u.attributeDivisors;Q[N]=1,K[N]===0&&(t.enableVertexAttribArray(N),K[N]=1),R[N]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Y),R[N]=Y)}function b(){const N=u.newAttributes,Y=u.enabledAttributes;for(let Q=0,K=Y.length;Q<K;Q++)Y[Q]!==N[Q]&&(t.disableVertexAttribArray(Q),Y[Q]=0)}function P(N,Y,Q,K,R,G){i.isWebGL2===!0&&(Q===5124||Q===5125)?t.vertexAttribIPointer(N,Y,Q,R,G):t.vertexAttribPointer(N,Y,Q,K,R,G)}function y(N,Y,Q,K){if(i.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=K.attributes,G=Q.getAttributes(),V=Y.defaultAttributeValues;for(const U in G){const B=G[U];if(B.location>=0){let Z=R[U];if(Z===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){const ee=Z.normalized,oe=Z.itemSize,H=n.get(Z);if(H===void 0)continue;const Ee=H.buffer,pe=H.type,ye=H.bytesPerElement;if(Z.isInterleavedBufferAttribute){const he=Z.data,Oe=he.stride,Te=Z.offset;if(he.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)S(B.location+Se,he.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Se=0;Se<B.locationSize;Se++)M(B.location+Se);t.bindBuffer(34962,Ee);for(let Se=0;Se<B.locationSize;Se++)P(B.location+Se,oe/B.locationSize,pe,ee,Oe*ye,(Te+oe/B.locationSize*Se)*ye)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)S(B.location+he,Z.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<B.locationSize;he++)M(B.location+he);t.bindBuffer(34962,Ee);for(let he=0;he<B.locationSize;he++)P(B.location+he,oe/B.locationSize,pe,ee,oe*ye,oe/B.locationSize*he*ye)}}else if(V!==void 0){const ee=V[U];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(B.location,ee);break;case 3:t.vertexAttrib3fv(B.location,ee);break;case 4:t.vertexAttrib4fv(B.location,ee);break;default:t.vertexAttrib1fv(B.location,ee)}}}}b()}function A(){ie();for(const N in a){const Y=a[N];for(const Q in Y){const K=Y[Q];for(const R in K)x(K[R].object),delete K[R];delete Y[Q]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const Y=a[N.id];for(const Q in Y){const K=Y[Q];for(const R in K)x(K[R].object),delete K[R];delete Y[Q]}delete a[N.id]}function X(N){for(const Y in a){const Q=a[Y];if(Q[N.id]===void 0)continue;const K=Q[N.id];for(const R in K)x(K[R].object),delete K[R];delete Q[N.id]}}function ie(){z(),c=!0,u!==l&&(u=l,v(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:M,disableUnusedAttributes:b}}function kM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,v;if(r)f=t,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function OM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),v=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),g=t.getParameter(36349),_=f>0,M=o||e.has("OES_texture_float"),S=_&&M,b=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:b}}function UM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,v){const x=d.length!==0||f||i!==0||r;return r=f,n=c(d,v,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,v){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const g=s?0:i,_=g*4;let M=m.clippingState||null;l.value=M,M=c(x,f,_,v);for(let S=0;S!==_;++S)M[S]=n[S];m.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,v,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const m=v+h*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=v;_!==h;++_,M+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function BM(t){let e=new WeakMap;function n(o,a){return a===Wc?o.mapping=ps:a===jc&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wc||a===jc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jy(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class S0 extends td{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=4,up=[.125,.215,.35,.446,.526,.582],Ji=20,Ou=new S0,cp=new Ve;let Uu=null;const Qi=(1+Math.sqrt(5))/2,kr=1/Qi,fp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Qi,kr),new k(0,Qi,-kr),new k(kr,0,Qi),new k(-kr,0,Qi),new k(Qi,kr,0),new k(-Qi,kr,0)];class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:gs,format:on,encoding:Oi,depthBuffer:!1},r=hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VM(s)),this._blurMaterial=GM(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Ou)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(cp),c.toneMapping=jn,c.autoClear=!1;const v=new Dl({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new Gn(new ko,v);let h=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,h=!0):(v.color.copy(cp),h=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):g===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;ya(r,g*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fp[(r-1)%fp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Gn(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Ji-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):Ji;p>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const m=[];let g=0;for(let P=0;P<Ji;++P){const y=P/h,A=Math.exp(-y*y/2);m.push(A),P===0?g+=A:P<p&&(g+=2*A)}for(let P=0;P<m.length;P++)m[P]=m[P]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const M=this._sizeLods[r],S=3*M*(r>_-Zr?r-_+Zr:0),b=4*(this._cubeSize-M);ya(n,S,b,3*M,2*M),l.setRenderTarget(n),l.render(d,Ou)}}function VM(t){const e=[],n=[],i=[];let r=t;const s=t-Zr+1+up.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zr?l=up[o-t+Zr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],v=6,x=6,h=3,p=2,m=1,g=new Float32Array(h*x*v),_=new Float32Array(p*x*v),M=new Float32Array(m*x*v);for(let b=0;b<v;b++){const P=b%3*2/3-1,y=b>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];g.set(A,h*x*b),_.set(f,p*x*b);const L=[b,b,b,b,b,b];M.set(L,m*x*b)}const S=new Xn;S.setAttribute("position",new Fn(g,h)),S.setAttribute("uv",new Fn(_,p)),S.setAttribute("faceIndex",new Fn(M,m)),e.push(S),r>Zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hp(t,e,n){const i=new Kt(t,e,n);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GM(t,e,n){const i=new Float32Array(Ji),r=new k(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function pp(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function mp(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function HM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Wc||l===jc,c=l===ps||l===ms;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new dp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new dp(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function WM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jM(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const v=s.get(f);v&&(e.remove(v),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const v=d.morphAttributes;for(const x in v){const h=v[x];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],v=d.index,x=d.attributes.position;let h=0;if(v!==null){const g=v.array;h=v.version;for(let _=0,M=g.length;_<M;_+=3){const S=g[_+0],b=g[_+1],P=g[_+2];f.push(S,b,b,P,P,S)}}else{const g=x.array;h=x.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const S=_+0,b=_+1,P=_+2;f.push(S,b,b,P,P,S)}}const p=new(l0(f)?g0:m0)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const v=d.index;v!==null&&f.version<v.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function XM(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,v){t.drawElements(s,v,a,f*l),n.update(v,s,1)}function d(f,v,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,v,a,f*l,x),n.update(v,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function qM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $M(t,e){return t[0]-e[0]}function YM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function KM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const v=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let Q=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",Q)};var x=Q;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let L=0;M===!0&&(L=1),S===!0&&(L=2),b===!0&&(L=3);let X=c.attributes.position.count*L,ie=1;X>e.maxTextureSize&&(ie=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*ie*4*p),N=new d0(z,X,ie,p);N.type=ai,N.needsUpdate=!0;const Y=L*4;for(let K=0;K<p;K++){const R=P[K],G=y[K],V=A[K],U=X*ie*4*K;for(let B=0;B<R.count;B++){const Z=B*Y;M===!0&&(o.fromBufferAttribute(R,B),z[U+Z+0]=o.x,z[U+Z+1]=o.y,z[U+Z+2]=o.z,z[U+Z+3]=0),S===!0&&(o.fromBufferAttribute(G,B),z[U+Z+4]=o.x,z[U+Z+5]=o.y,z[U+Z+6]=o.z,z[U+Z+7]=0),b===!0&&(o.fromBufferAttribute(V,B),z[U+Z+8]=o.x,z[U+Z+9]=o.y,z[U+Z+10]=o.z,z[U+Z+11]=V.itemSize===4?o.w:1)}}m={count:p,texture:N,size:new xe(X,ie)},s.set(c,m),c.addEventListener("dispose",Q)}let g=0;for(let M=0;M<v.length;M++)g+=v[M];const _=c.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",v),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=v===void 0?0:v.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const b=p[S];b[0]=S,b[1]=v[S]}p.sort(YM);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($M);const m=c.morphAttributes.position,g=c.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const b=a[S],P=b[0],y=b[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[P]&&c.setAttribute("morphTarget"+S,m[P]),g&&c.getAttribute("morphNormal"+S)!==g[P]&&c.setAttribute("morphNormal"+S,g[P]),r[S]=y,_+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),g&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ZM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const M0=new Yt,w0=new d0,E0=new Oy,T0=new _0,gp=[],vp=[],_p=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gp[r];if(s===void 0&&(s=new Float32Array(r),gp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Il(t,e){let n=vp[e];n===void 0&&(n=new Int32Array(e),vp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2fv(this.addr,e),pt(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ht(n,e))return;t.uniform3fv(this.addr,e),pt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4fv(this.addr,e),pt(n,e)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;yp.set(i),t.uniformMatrix2fv(this.addr,!1,yp),pt(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;xp.set(i),t.uniformMatrix3fv(this.addr,!1,xp),pt(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pt(n,e)}else{if(ht(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),pt(n,i)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2iv(this.addr,e),pt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3iv(this.addr,e),pt(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4iv(this.addr,e),pt(n,e)}}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2uiv(this.addr,e),pt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3uiv(this.addr,e),pt(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4uiv(this.addr,e),pt(n,e)}}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||M0,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E0,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T0,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w0,r)}function vw(t){switch(t){case 5126:return QM;case 35664:return JM;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return uw;case 36294:return cw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function _w(t,e){t.uniform1fv(this.addr,e)}function xw(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function yw(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function Sw(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function Mw(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ww(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ew(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Tw(t,e){t.uniform1iv(this.addr,e)}function bw(t,e){t.uniform2iv(this.addr,e)}function Cw(t,e){t.uniform3iv(this.addr,e)}function Aw(t,e){t.uniform4iv(this.addr,e)}function Pw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Dw(t,e){t.uniform3uiv(this.addr,e)}function Rw(t,e){t.uniform4uiv(this.addr,e)}function Iw(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||M0,s[o])}function Nw(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E0,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||T0,s[o])}function zw(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);ht(i,s)||(t.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||w0,s[o])}function kw(t){switch(t){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return ww;case 35676:return Ew;case 5124:case 35670:return Tw;case 35667:case 35671:return bw;case 35668:case 35672:return Cw;case 35669:case 35673:return Aw;case 5125:return Pw;case 36294:return Lw;case 36295:return Dw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return zw}}class Ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=vw(n.type)}}class Uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=kw(n.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function Sp(t,e){t.seq.push(e),t.map[e.id]=e}function Vw(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sp(n,u===void 0?new Ow(a,t,e):new Uw(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Bw(a),Sp(n,d)),n=d}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Vw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Gw=0;function Hw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ww(t){switch(t){case Oi:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function wp(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Hw(t.getShaderSource(e),o)}else return r}function jw(t,e){const n=Ww(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Xw(t,e){let n;switch(e){case cy:n="Linear";break;case fy:n="Reinhard";break;case dy:n="OptimizedCineon";break;case hy:n="ACESFilmic";break;case py:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function $w(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yw(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(t){return t.replace(Kw,Zw)}function Zw(t,e){const n=be[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Yc(n)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(t){return t.replace(Qw,Jw)}function Jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===js&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case s0:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function rE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=eE(n),u=tE(n),c=nE(n),d=iE(n),f=rE(n),v=n.isWebGL2?"":qw(n),x=$w(s),h=r.createProgram();let p,m,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Xs).join(`
`),p.length>0&&(p+=`
`),m=[v,x].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(p=[Cp(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[v,Cp(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jn?"#define TONE_MAPPING":"",n.toneMapping!==jn?be.tonemapping_pars_fragment:"",n.toneMapping!==jn?Xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,jw("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Yc(o),o=Ep(o,n),o=Tp(o,n),a=Yc(a),a=Ep(a,n),a=Tp(a,n),o=bp(o),a=bp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+p+o,M=g+m+a,S=Mp(r,35633,_),b=Mp(r,35632,M);if(r.attachShader(h,S),r.attachShader(h,b),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const A=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(S).trim(),X=r.getShaderInfoLog(b).trim();let ie=!0,z=!0;if(r.getProgramParameter(h,35714)===!1){ie=!1;const N=wp(r,S,"vertex"),Y=wp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+A+`
`+N+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||X==="")&&(z=!1);z&&(this.diagnostics={runnable:ie,programLog:A,vertexShader:{log:L,prefix:p},fragmentShader:{log:X,prefix:m}})}r.deleteShader(S),r.deleteShader(b);let P;this.getUniforms=function(){return P===void 0&&(P=new Oa(r,h)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=Yw(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=b,this}let oE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lE(e),n.set(e,i)),i}}class lE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(t,e,n,i,r,s,o){const a=new p0,l=new aE,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,A,L,X,ie){const z=X.fog,N=ie.geometry,Y=y.isMeshStandardMaterial?X.environment:null,Q=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),K=Q&&Q.mapping===Pl?Q.image.height:null,R=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,V=G!==void 0?G.length:0;let U=0;N.morphAttributes.position!==void 0&&(U=1),N.morphAttributes.normal!==void 0&&(U=2),N.morphAttributes.color!==void 0&&(U=3);let B,Z,ee,oe;if(R){const Oe=Bn[R];B=Oe.vertexShader,Z=Oe.fragmentShader}else B=y.vertexShader,Z=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const H=t.getRenderTarget(),Ee=y.alphaTest>0,pe=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:B,fragmentShader:Z,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?t.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Oi,map:!!y.map,matcap:!!y.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ny,tangentSpaceNormalMap:y.normalMapType===Iy,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===qe,clearcoat:pe,clearcoatMap:pe&&!!y.clearcoatMap,clearcoatRoughnessMap:pe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ss,alphaMap:!!y.alphaMap,alphaTest:Ee,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:jn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ed,flipSided:y.side===Mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)A.push(L),A.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(m(A,y),g(A,y),A.push(t.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function g(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),y.push(a.mask)}function _(y){const A=x[y.type];let L;if(A){const X=Bn[A];L=To.clone(X.uniforms)}else L=y.uniforms;return L}function M(y,A){let L;for(let X=0,ie=u.length;X<ie;X++){const z=u[X];if(z.cacheKey===A){L=z,++L.usedTimes;break}}return L===void 0&&(L=new sE(t,A,y,s),u.push(L)),L}function S(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:b,programs:u,dispose:P}}function cE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function fE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ap(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,v,x,h,p){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:v,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=v,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,v,x,h,p){const m=o(d,f,v,x,h,p);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function l(d,f,v,x,h,p){const m=o(d,f,v,x,h,p);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||fE),i.length>1&&i.sort(f||Ap),r.length>1&&r.sort(f||Ap)}function c(){for(let d=e,f=t.length;d<f;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function dE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pp,t.set(i,[o])):r>=s.length?(o=new Pp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function hE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ve};break;case"SpotLight":n={position:new k,direction:new k,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function pE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mE=0;function gE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vE(t,e){const n=new hE,i=pE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,o=new St,a=new St;function l(c,d){let f=0,v=0,x=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let h=0,p=0,m=0,g=0,_=0,M=0,S=0,b=0,P=0,y=0;c.sort(gE);const A=d!==!0?Math.PI:1;for(let X=0,ie=c.length;X<ie;X++){const z=c[X],N=z.color,Y=z.intensity,Q=z.distance,K=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=N.r*Y*A,v+=N.g*Y*A,x+=N.b*Y*A;else if(z.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(z.sh.coefficients[R],Y);else if(z.isDirectionalLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const G=z.shadow,V=i.get(z);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.directionalShadow[h]=V,r.directionalShadowMap[h]=K,r.directionalShadowMatrix[h]=z.shadow.matrix,M++}r.directional[h]=R,h++}else if(z.isSpotLight){const R=n.get(z);R.position.setFromMatrixPosition(z.matrixWorld),R.color.copy(N).multiplyScalar(Y*A),R.distance=Q,R.coneCos=Math.cos(z.angle),R.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),R.decay=z.decay,r.spot[m]=R;const G=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,G.updateMatrices(z),z.castShadow&&y++),r.spotLightMatrix[m]=G.matrix,z.castShadow){const V=i.get(z);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,r.spotShadow[m]=V,r.spotShadowMap[m]=K,b++}m++}else if(z.isRectAreaLight){const R=n.get(z);R.color.copy(N).multiplyScalar(Y),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),r.rectArea[g]=R,g++}else if(z.isPointLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*A),R.distance=z.distance,R.decay=z.decay,z.castShadow){const G=z.shadow,V=i.get(z);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,r.pointShadow[p]=V,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=z.shadow.matrix,S++}r.point[p]=R,p++}else if(z.isHemisphereLight){const R=n.get(z);R.skyColor.copy(z.color).multiplyScalar(Y*A),R.groundColor.copy(z.groundColor).multiplyScalar(Y*A),r.hemi[_]=R,_++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==m||L.rectAreaLength!==g||L.hemiLength!==_||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==P)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,L.directionalLength=h,L.pointLength=p,L.spotLength=m,L.rectAreaLength=g,L.hemiLength=_,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=P,r.version=mE++)}function u(c,d){let f=0,v=0,x=0,h=0,p=0;const m=d.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const M=c[g];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),x++}else if(M.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const S=r.point[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),v++}else if(M.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Lp(t,e){const n=new vE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function _E(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Lp(t,e),n.set(s,[l])):o>=a.length?(l=new Lp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class xE extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yE extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`;function wE(t,e,n){let i=new x0;const r=new xe,s=new xe,o=new wt,a=new xE({depthPacking:Ry}),l=new yE,u={},c=n.maxTextureSize,d={0:Mn,1:mr,2:ed},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const x=new Xn;x.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Gn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0,this.render=function(M,S,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Fi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let X=0,ie=M.length;X<ie;X++){const z=M[X],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null){const K=this.type!==js?{minFilter:Qe,magFilter:Qe}:{};N.map=new Kt(r.x,r.y,K),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let K=0;K<Q;K++){const R=N.getViewport(K);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),L.viewport(o),N.updateMatrices(z,K),i=N.getFrustum(),_(S,b,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===js&&m(N,b),N.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(P,y,A)};function m(M,S){const b=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Kt(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(S,null,b,f,h,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value=M.mapSize,v.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(S,null,b,v,h,null)}function g(M,S,b,P,y,A){let L=null;const X=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(X!==void 0)L=X;else if(L=b.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const ie=L.uuid,z=S.uuid;let N=u[ie];N===void 0&&(N={},u[ie]=N);let Y=N[z];Y===void 0&&(Y=L.clone(),N[z]=Y),L=Y}return L.visible=S.visible,L.wireframe=S.wireframe,A===js?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:d[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(b.matrixWorld),L.nearDistance=P,L.farDistance=y),L}function _(M,S,b,P,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===js)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);const X=e.update(M),ie=M.material;if(Array.isArray(ie)){const z=X.groups;for(let N=0,Y=z.length;N<Y;N++){const Q=z[N],K=ie[Q.materialIndex];if(K&&K.visible){const R=g(M,K,P,b.near,b.far,y);t.renderBufferDirect(b,null,X,R,M,Q)}}}else if(ie.visible){const z=g(M,ie,P,b.near,b.far,y);t.renderBufferDirect(b,null,X,z,M,null)}}const L=M.children;for(let X=0,ie=L.length;X<ie;X++)_(L[X],S,b,P,y)}}function EE(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const j=new wt;let te=null;const ce=new wt(0,0,0,0);return{setMask:function(ve){te!==ve&&!D&&(t.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){D=ve},setClear:function(ve,Ue,gt,bt,Gi){Gi===!0&&(ve*=bt,Ue*=bt,gt*=bt),j.set(ve,Ue,gt,bt),ce.equals(j)===!1&&(t.clearColor(ve,Ue,gt,bt),ce.copy(j))},reset:function(){D=!1,te=null,ce.set(-1,0,0,0)}}}function s(){let D=!1,j=null,te=null,ce=null;return{setTest:function(ve){ve?Ee(2929):pe(2929)},setMask:function(ve){j!==ve&&!D&&(t.depthMask(ve),j=ve)},setFunc:function(ve){if(te!==ve){switch(ve){case ty:t.depthFunc(512);break;case ny:t.depthFunc(519);break;case iy:t.depthFunc(513);break;case Hc:t.depthFunc(515);break;case ry:t.depthFunc(514);break;case sy:t.depthFunc(518);break;case oy:t.depthFunc(516);break;case ay:t.depthFunc(517);break;default:t.depthFunc(515)}te=ve}},setLocked:function(ve){D=ve},setClear:function(ve){ce!==ve&&(t.clearDepth(ve),ce=ve)},reset:function(){D=!1,j=null,te=null,ce=null}}}function o(){let D=!1,j=null,te=null,ce=null,ve=null,Ue=null,gt=null,bt=null,Gi=null;return{setTest:function(Ye){D||(Ye?Ee(2960):pe(2960))},setMask:function(Ye){j!==Ye&&!D&&(t.stencilMask(Ye),j=Ye)},setFunc:function(Ye,qn,pn){(te!==Ye||ce!==qn||ve!==pn)&&(t.stencilFunc(Ye,qn,pn),te=Ye,ce=qn,ve=pn)},setOp:function(Ye,qn,pn){(Ue!==Ye||gt!==qn||bt!==pn)&&(t.stencilOp(Ye,qn,pn),Ue=Ye,gt=qn,bt=pn)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Gi!==Ye&&(t.clearStencil(Ye),Gi=Ye)},reset:function(){D=!1,j=null,te=null,ce=null,ve=null,Ue=null,gt=null,bt=null,Gi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},v={},x=new WeakMap,h=[],p=null,m=!1,g=null,_=null,M=null,S=null,b=null,P=null,y=null,A=!1,L=null,X=null,ie=null,z=null,N=null;const Y=t.getParameter(35661);let Q=!1,K=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(R)[1]),Q=K>=1):R.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Q=K>=2);let G=null,V={};const U=t.getParameter(3088),B=t.getParameter(2978),Z=new wt().fromArray(U),ee=new wt().fromArray(B);function oe(D,j,te){const ce=new Uint8Array(4),ve=t.createTexture();t.bindTexture(D,ve),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let Ue=0;Ue<te;Ue++)t.texImage2D(j+Ue,0,6408,1,1,0,6408,5121,ce);return ve}const H={};H[3553]=oe(3553,3553,1),H[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(2929),l.setFunc(Hc),ut(!1),Nt(Mh),Ee(2884),mt(Fi);function Ee(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function pe(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function ye(D,j){return v[D]!==j?(t.bindFramebuffer(D,j),v[D]=j,i&&(D===36009&&(v[36160]=j),D===36160&&(v[36009]=j)),!0):!1}function he(D,j){let te=h,ce=!1;if(D)if(te=x.get(j),te===void 0&&(te=[],x.set(j,te)),D.isWebGLMultipleRenderTargets){const ve=D.texture;if(te.length!==ve.length||te[0]!==36064){for(let Ue=0,gt=ve.length;Ue<gt;Ue++)te[Ue]=36064+Ue;te.length=ve.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Oe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Te={[Or]:32774,[Wx]:32778,[jx]:32779};if(i)Te[Th]=32775,Te[bh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[Th]=D.MIN_EXT,Te[bh]=D.MAX_EXT)}const Se={[Xx]:0,[qx]:1,[$x]:768,[i0]:770,[ey]:776,[Qx]:774,[Kx]:772,[Yx]:769,[r0]:771,[Jx]:775,[Zx]:773};function mt(D,j,te,ce,ve,Ue,gt,bt){if(D===Fi){m===!0&&(pe(3042),m=!1);return}if(m===!1&&(Ee(3042),m=!0),D!==Hx){if(D!==g||bt!==A){if((_!==Or||b!==Or)&&(t.blendEquation(32774),_=Or,b=Or),bt)switch(D){case ss:t.blendFuncSeparate(1,771,1,771);break;case Gc:t.blendFunc(1,1);break;case wh:t.blendFuncSeparate(0,769,0,1);break;case Eh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ss:t.blendFuncSeparate(770,771,1,771);break;case Gc:t.blendFunc(770,1);break;case wh:t.blendFuncSeparate(0,769,0,1);break;case Eh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,P=null,y=null,g=D,A=bt}return}ve=ve||j,Ue=Ue||te,gt=gt||ce,(j!==_||ve!==b)&&(t.blendEquationSeparate(Te[j],Te[ve]),_=j,b=ve),(te!==M||ce!==S||Ue!==P||gt!==y)&&(t.blendFuncSeparate(Se[te],Se[ce],Se[Ue],Se[gt]),M=te,S=ce,P=Ue,y=gt),g=D,A=!1}function lt(D,j){D.side===ed?pe(2884):Ee(2884);let te=D.side===Mn;j&&(te=!te),ut(te),D.blending===ss&&D.transparent===!1?mt(Fi):mt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ce=D.stencilWrite;u.setTest(ce),ce&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(32926):pe(32926)}function ut(D){L!==D&&(D?t.frontFace(2304):t.frontFace(2305),L=D)}function Nt(D){D!==Bx?(Ee(2884),D!==X&&(D===Mh?t.cullFace(1029):D===Vx?t.cullFace(1028):t.cullFace(1032))):pe(2884),X=D}function nt(D){D!==ie&&(Q&&t.lineWidth(D),ie=D)}function Be(D,j,te){D?(Ee(32823),(z!==j||N!==te)&&(t.polygonOffset(j,te),z=j,N=te)):pe(32823)}function hn(D){D?Ee(3089):pe(3089)}function Gt(D){D===void 0&&(D=33984+Y-1),G!==D&&(t.activeTexture(D),G=D)}function T(D,j,te){te===void 0&&(G===null?te=33984+Y-1:te=G);let ce=V[te];ce===void 0&&(ce={type:void 0,texture:void 0},V[te]=ce),(ce.type!==D||ce.texture!==j)&&(G!==te&&(t.activeTexture(te),G=te),t.bindTexture(D,j||H[D]),ce.type=D,ce.texture=j)}function w(){const D=V[G];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Z.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function me(D){ee.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Le(D,j){let te=d.get(j);te===void 0&&(te=new WeakMap,d.set(j,te));let ce=te.get(D);ce===void 0&&(ce=t.getUniformBlockIndex(j,D.name),te.set(D,ce))}function De(D,j){const ce=d.get(j).get(D);c.get(j)!==ce&&(t.uniformBlockBinding(j,ce,D.__bindingPointIndex),c.set(j,ce))}function He(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},G=null,V={},v={},x=new WeakMap,h=[],p=null,m=!1,g=null,_=null,M=null,S=null,b=null,P=null,y=null,A=!1,L=null,X=null,ie=null,z=null,N=null,Z.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:pe,bindFramebuffer:ye,drawBuffers:he,useProgram:Oe,setBlending:mt,setMaterial:lt,setFlipSided:ut,setCullFace:Nt,setLineWidth:nt,setPolygonOffset:Be,setScissorTest:hn,activeTexture:Gt,bindTexture:T,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ne,texImage2D:de,texImage3D:le,updateUBOMapping:Le,uniformBlockBinding:De,texStorage2D:I,texStorage3D:ue,texSubImage2D:re,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:C,scissor:ge,viewport:me,reset:He}}function TE(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return m?new OffscreenCanvas(T,w):fl("canvas")}function _(T,w,W,ne){let re=1;if((T.width>ne||T.height>ne)&&(re=ne/Math.max(T.width,T.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=w?$c:Math.floor,Me=ae(re*T.width),C=ae(re*T.height);h===void 0&&(h=g(Me,C));const I=W?g(Me,C):h;return I.width=Me,I.height=C,I.getContext("2d").drawImage(T,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+C+")."),I}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Qh(T.width)&&Qh(T.height)}function S(T){return a?!1:T.wrapS!==sn||T.wrapT!==sn||T.minFilter!==Qe&&T.minFilter!==_n}function b(T,w){return T.generateMipmaps&&w&&T.minFilter!==Qe&&T.minFilter!==_n}function P(T){t.generateMipmap(T)}function y(T,w,W,ne,re=!1){if(a===!1)return w;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=w;return w===6403&&(W===5126&&(ae=33326),W===5131&&(ae=33325),W===5121&&(ae=33321)),w===33319&&(W===5126&&(ae=33328),W===5131&&(ae=33327),W===5121&&(ae=33323)),w===6408&&(W===5126&&(ae=34836),W===5131&&(ae=34842),W===5121&&(ae=ne===qe&&re===!1?35907:32856),W===32819&&(ae=32854),W===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(T,w,W){return b(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function L(T){return T===Qe||T===Ch||T===cu?9728:9729}function X(T){const w=T.target;w.removeEventListener("dispose",X),z(w),w.isVideoTexture&&x.delete(w)}function ie(T){const w=T.target;w.removeEventListener("dispose",ie),Y(w)}function z(T){const w=i.get(T);if(w.__webglInit===void 0)return;const W=T.source,ne=p.get(W);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(T),Object.keys(ne).length===0&&p.delete(W)}i.remove(T)}function N(T){const w=i.get(T);t.deleteTexture(w.__webglTexture);const W=T.source,ne=p.get(W);delete ne[w.__cacheKey],o.memory.textures--}function Y(T){const w=T.texture,W=i.get(T),ne=i.get(w);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(W.__webglFramebuffer[re]),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let re=0;re<W.__webglColorRenderbuffer.length;re++)W.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[re]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,ae=w.length;re<ae;re++){const Me=i.get(w[re]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(T)}let Q=0;function K(){Q=0}function R(){const T=Q;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Q+=1,T}function G(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function V(T,w){const W=i.get(T);if(T.isVideoTexture&&hn(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,T,w);return}}n.bindTexture(3553,W.__webglTexture,33984+w)}function U(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){pe(W,T,w);return}n.bindTexture(35866,W.__webglTexture,33984+w)}function B(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){pe(W,T,w);return}n.bindTexture(32879,W.__webglTexture,33984+w)}function Z(T,w){const W=i.get(T);if(T.version>0&&W.__version!==T.version){ye(W,T,w);return}n.bindTexture(34067,W.__webglTexture,33984+w)}const ee={[ir]:10497,[sn]:33071,[Xc]:33648},oe={[Qe]:9728,[Ch]:9984,[cu]:9986,[_n]:9729,[my]:9985,[wo]:9987};function H(T,w,W){if(W?(t.texParameteri(T,10242,ee[w.wrapS]),t.texParameteri(T,10243,ee[w.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,ee[w.wrapR]),t.texParameteri(T,10240,oe[w.magFilter]),t.texParameteri(T,10241,oe[w.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(w.wrapS!==sn||w.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,L(w.magFilter)),t.texParameteri(T,10241,L(w.minFilter)),w.minFilter!==Qe&&w.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Qe||w.minFilter!==cu&&w.minFilter!==wo||w.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===gs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ee(T,w){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",X));const ne=w.source;let re=p.get(ne);re===void 0&&(re={},p.set(ne,re));const ae=G(w);if(ae!==T.__cacheKey){re[ae]===void 0&&(re[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ae].usedTimes++;const Me=re[T.__cacheKey];Me!==void 0&&(re[T.__cacheKey].usedTimes--,Me.usedTimes===0&&N(w)),T.__cacheKey=ae,T.__webglTexture=re[ae].texture}return W}function pe(T,w,W){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=Ee(T,w),ae=w.source;n.bindTexture(ne,T.__webglTexture,33984+W);const Me=i.get(ae);if(ae.version!==Me.__version||re===!0){n.activeTexture(33984+W),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const C=S(w)&&M(w.image)===!1;let I=_(w.image,C,!1,c);I=Gt(w,I);const ue=M(I)||a,de=s.convert(w.format,w.encoding);let le=s.convert(w.type),ge=y(w.internalFormat,de,le,w.encoding,w.isVideoTexture);H(ne,w,ue);let me;const Le=w.mipmaps,De=a&&w.isVideoTexture!==!0,He=Me.__version===void 0||re===!0,D=A(w,I,ue);if(w.isDepthTexture)ge=6402,a?w.type===ai?ge=36012:w.type===rr?ge=33190:w.type===os?ge=35056:ge=33189:w.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===lr&&ge===6402&&w.type!==a0&&w.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=rr,le=s.convert(w.type)),w.format===vs&&ge===6402&&(ge=34041,w.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=os,le=s.convert(w.type))),He&&(De?n.texStorage2D(3553,1,ge,I.width,I.height):n.texImage2D(3553,0,ge,I.width,I.height,0,de,le,null));else if(w.isDataTexture)if(Le.length>0&&ue){De&&He&&n.texStorage2D(3553,D,ge,Le[0].width,Le[0].height);for(let j=0,te=Le.length;j<te;j++)me=Le[j],De?n.texSubImage2D(3553,j,0,0,me.width,me.height,de,le,me.data):n.texImage2D(3553,j,ge,me.width,me.height,0,de,le,me.data);w.generateMipmaps=!1}else De?(He&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,I.width,I.height,de,le,I.data)):n.texImage2D(3553,0,ge,I.width,I.height,0,de,le,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&He&&n.texStorage3D(35866,D,ge,Le[0].width,Le[0].height,I.depth);for(let j=0,te=Le.length;j<te;j++)me=Le[j],w.format!==on?de!==null?De?n.compressedTexSubImage3D(35866,j,0,0,0,me.width,me.height,I.depth,de,me.data,0,0):n.compressedTexImage3D(35866,j,ge,me.width,me.height,I.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage3D(35866,j,0,0,0,me.width,me.height,I.depth,de,le,me.data):n.texImage3D(35866,j,ge,me.width,me.height,I.depth,0,de,le,me.data)}else{De&&He&&n.texStorage2D(3553,D,ge,Le[0].width,Le[0].height);for(let j=0,te=Le.length;j<te;j++)me=Le[j],w.format!==on?de!==null?De?n.compressedTexSubImage2D(3553,j,0,0,me.width,me.height,de,me.data):n.compressedTexImage2D(3553,j,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage2D(3553,j,0,0,me.width,me.height,de,le,me.data):n.texImage2D(3553,j,ge,me.width,me.height,0,de,le,me.data)}else if(w.isDataArrayTexture)De?(He&&n.texStorage3D(35866,D,ge,I.width,I.height,I.depth),n.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,de,le,I.data)):n.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,de,le,I.data);else if(w.isData3DTexture)De?(He&&n.texStorage3D(32879,D,ge,I.width,I.height,I.depth),n.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,de,le,I.data)):n.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,de,le,I.data);else if(w.isFramebufferTexture){if(He)if(De)n.texStorage2D(3553,D,ge,I.width,I.height);else{let j=I.width,te=I.height;for(let ce=0;ce<D;ce++)n.texImage2D(3553,ce,ge,j,te,0,de,le,null),j>>=1,te>>=1}}else if(Le.length>0&&ue){De&&He&&n.texStorage2D(3553,D,ge,Le[0].width,Le[0].height);for(let j=0,te=Le.length;j<te;j++)me=Le[j],De?n.texSubImage2D(3553,j,0,0,de,le,me):n.texImage2D(3553,j,ge,de,le,me);w.generateMipmaps=!1}else De?(He&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,de,le,I)):n.texImage2D(3553,0,ge,de,le,I);b(w,ue)&&P(ne),Me.__version=ae.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ye(T,w,W){if(w.image.length!==6)return;const ne=Ee(T,w),re=w.source;n.bindTexture(34067,T.__webglTexture,33984+W);const ae=i.get(re);if(re.version!==ae.__version||ne===!0){n.activeTexture(33984+W),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,I=[];for(let j=0;j<6;j++)!Me&&!C?I[j]=_(w.image[j],!1,!0,u):I[j]=C?w.image[j].image:w.image[j],I[j]=Gt(w,I[j]);const ue=I[0],de=M(ue)||a,le=s.convert(w.format,w.encoding),ge=s.convert(w.type),me=y(w.internalFormat,le,ge,w.encoding),Le=a&&w.isVideoTexture!==!0,De=ae.__version===void 0||ne===!0;let He=A(w,ue,de);H(34067,w,de);let D;if(Me){Le&&De&&n.texStorage2D(34067,He,me,ue.width,ue.height);for(let j=0;j<6;j++){D=I[j].mipmaps;for(let te=0;te<D.length;te++){const ce=D[te];w.format!==on?le!==null?Le?n.compressedTexSubImage2D(34069+j,te,0,0,ce.width,ce.height,le,ce.data):n.compressedTexImage2D(34069+j,te,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?n.texSubImage2D(34069+j,te,0,0,ce.width,ce.height,le,ge,ce.data):n.texImage2D(34069+j,te,me,ce.width,ce.height,0,le,ge,ce.data)}}}else{D=w.mipmaps,Le&&De&&(D.length>0&&He++,n.texStorage2D(34067,He,me,I[0].width,I[0].height));for(let j=0;j<6;j++)if(C){Le?n.texSubImage2D(34069+j,0,0,0,I[j].width,I[j].height,le,ge,I[j].data):n.texImage2D(34069+j,0,me,I[j].width,I[j].height,0,le,ge,I[j].data);for(let te=0;te<D.length;te++){const ve=D[te].image[j].image;Le?n.texSubImage2D(34069+j,te+1,0,0,ve.width,ve.height,le,ge,ve.data):n.texImage2D(34069+j,te+1,me,ve.width,ve.height,0,le,ge,ve.data)}}else{Le?n.texSubImage2D(34069+j,0,0,0,le,ge,I[j]):n.texImage2D(34069+j,0,me,le,ge,I[j]);for(let te=0;te<D.length;te++){const ce=D[te];Le?n.texSubImage2D(34069+j,te+1,0,0,le,ge,ce.image[j]):n.texImage2D(34069+j,te+1,me,le,ge,ce.image[j])}}}b(w,de)&&P(34067),ae.__version=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function he(T,w,W,ne,re){const ae=s.convert(W.format,W.encoding),Me=s.convert(W.type),C=y(W.internalFormat,ae,Me,W.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?n.texImage3D(re,0,C,w.width,w.height,w.depth,0,ae,Me,null):n.texImage2D(re,0,C,w.width,w.height,0,ae,Me,null)),n.bindFramebuffer(36160,T),Be(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,re,i.get(W).__webglTexture,0,nt(w)):(re===3553||re>=34069&&re<=34074)&&t.framebufferTexture2D(36160,ne,re,i.get(W).__webglTexture,0),n.bindFramebuffer(36160,null)}function Oe(T,w,W){if(t.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(W||Be(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===ai?ne=36012:re.type===rr&&(ne=33190));const ae=nt(w);Be(w)?f.renderbufferStorageMultisampleEXT(36161,ae,ne,w.width,w.height):t.renderbufferStorageMultisample(36161,ae,ne,w.width,w.height)}else t.renderbufferStorage(36161,ne,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const ne=nt(w);W&&Be(w)===!1?t.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const ae=ne[re],Me=s.convert(ae.format,ae.encoding),C=s.convert(ae.type),I=y(ae.internalFormat,Me,C,ae.encoding),ue=nt(w);W&&Be(w)===!1?t.renderbufferStorageMultisample(36161,ue,I,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,ue,I,w.width,w.height):t.renderbufferStorage(36161,I,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Te(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,re=nt(w);if(w.depthTexture.format===lr)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):t.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===vs)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):t.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Se(T){const w=i.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,T)}else if(W){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=t.createRenderbuffer(),Oe(w.__webglDepthbuffer[ne],T,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Oe(w.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function mt(T,w,W){const ne=i.get(T);w!==void 0&&he(ne.__webglFramebuffer,T,T.texture,36064,3553),W!==void 0&&Se(T)}function lt(T){const w=T.texture,W=i.get(T),ne=i.get(w);T.addEventListener("dispose",ie),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=w.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,Me=M(T)||a;if(re){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=t.createFramebuffer()}else{if(W.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const C=T.texture;for(let I=0,ue=C.length;I<ue;I++){const de=i.get(C[I]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Be(T)===!1){const C=ae?w:[w];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const ue=C[I];W.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(36161,W.__webglColorRenderbuffer[I]);const de=s.convert(ue.format,ue.encoding),le=s.convert(ue.type),ge=y(ue.internalFormat,de,le,ue.encoding,T.isXRRenderTarget===!0),me=nt(T);t.renderbufferStorageMultisample(36161,me,ge,T.width,T.height),t.framebufferRenderbuffer(36160,36064+I,36161,W.__webglColorRenderbuffer[I])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(W.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(re){n.bindTexture(34067,ne.__webglTexture),H(34067,w,Me);for(let C=0;C<6;C++)he(W.__webglFramebuffer[C],T,w,36064,34069+C);b(w,Me)&&P(34067),n.unbindTexture()}else if(ae){const C=T.texture;for(let I=0,ue=C.length;I<ue;I++){const de=C[I],le=i.get(de);n.bindTexture(3553,le.__webglTexture),H(3553,de,Me),he(W.__webglFramebuffer,T,de,36064+I,3553),b(de,Me)&&P(3553)}n.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(C,ne.__webglTexture),H(C,w,Me),he(W.__webglFramebuffer,T,w,36064,C),b(w,Me)&&P(C),n.unbindTexture()}T.depthBuffer&&Se(T)}function ut(T){const w=M(T)||a,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,re=W.length;ne<re;ne++){const ae=W[ne];if(b(ae,w)){const Me=T.isWebGLCubeRenderTarget?34067:3553,C=i.get(ae).__webglTexture;n.bindTexture(Me,C),P(Me),n.unbindTexture()}}}function Nt(T){if(a&&T.samples>0&&Be(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,ne=T.height;let re=16384;const ae=[],Me=T.stencilBuffer?33306:36096,C=i.get(T),I=T.isWebGLMultipleRenderTargets===!0;if(I)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,null),n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,null,0);n.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,C.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){ae.push(36064+ue),T.depthBuffer&&ae.push(Me);const de=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(de===!1&&(T.depthBuffer&&(re|=256),T.stencilBuffer&&(re|=1024)),I&&t.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ue]),de===!0&&(t.invalidateFramebuffer(36008,[Me]),t.invalidateFramebuffer(36009,[Me])),I){const le=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,le,0)}t.blitFramebuffer(0,0,W,ne,0,0,W,ne,re,9728),v&&t.invalidateFramebuffer(36008,ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),I)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,C.__webglColorRenderbuffer[ue]);const de=i.get(w[ue]).__webglTexture;n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,de,0)}n.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function nt(T){return Math.min(d,T.samples)}function Be(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function hn(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function Gt(T,w){const W=T.encoding,ne=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===qc||W!==Oi&&(W===qe?a===!1?e.has("EXT_sRGB")===!0&&ne===on?(T.format=qc,T.minFilter=_n,T.generateMipmaps=!1):w=c0.sRGBToLinear(w):(ne!==on||re!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=R,this.resetTextureUnits=K,this.setTexture2D=V,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=mt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Be}function bE(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===gr)return 5121;if(s===xy)return 32819;if(s===yy)return 32820;if(s===gy)return 5120;if(s===vy)return 5122;if(s===a0)return 5123;if(s===_y)return 5124;if(s===rr)return 5125;if(s===ai)return 5126;if(s===gs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sy)return 6406;if(s===on)return 6408;if(s===wy)return 6409;if(s===Ey)return 6410;if(s===lr)return 6402;if(s===vs)return 34041;if(s===My)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ty)return 6403;if(s===by)return 36244;if(s===Cy)return 33319;if(s===Ay)return 33320;if(s===Py)return 36249;if(s===fu||s===du||s===hu||s===pu)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ah||s===Ph||s===Lh||s===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ly)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rh||s===Ih)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rh)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ih)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nh||s===Fh||s===zh||s===kh||s===Oh||s===Uh||s===Bh||s===Vh||s===Gh||s===Hh||s===Wh||s===jh||s===Xh||s===qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Nh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$h)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===os?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class CE extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),v=.02,x=.005;u.inputState.pinching&&f>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class PE extends Yt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:lr,c!==lr&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===lr&&(i=rr),i===void 0&&c===vs&&(i=os),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1}}class LE extends yr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,v=null;const x=n.getContextAttributes();let h=null,p=null;const m=[],g=[],_=new Set,M=new Map,S=new xn;S.layers.enable(1),S.viewport=new wt;const b=new xn;b.layers.enable(2),b.viewport=new wt;const P=[S,b],y=new CE;y.layers.enable(1),y.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=m[U];return B===void 0&&(B=new Vu,m[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=m[U];return B===void 0&&(B=new Vu,m[U]=B),B.getGripSpace()},this.getHand=function(U){let B=m[U];return B===void 0&&(B=new Vu,m[U]=B),B.getHandSpace()};function X(U){const B=g.indexOf(U.inputSource);if(B===-1)return;const Z=m[B];Z!==void 0&&Z.dispatchEvent({type:U.type,data:U.inputSource})}function ie(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",z);for(let U=0;U<m.length;U++){const B=g[U];B!==null&&(g[U]=null,m[U].disconnect(B))}A=null,L=null,e.setRenderTarget(h),f=null,d=null,c=null,r=null,p=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:f}),p=new Kt(f.framebufferWidth,f.framebufferHeight,{format:on,type:gr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let B=null,Z=null,ee=null;x.depth&&(ee=x.stencil?35056:33190,B=x.stencil?vs:lr,Z=x.stencil?os:rr);const oe={colorFormat:32856,depthFormat:ee,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),p=new Kt(d.textureWidth,d.textureHeight,{format:on,type:gr,depthTexture:new PE(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const H=e.properties.get(p);H.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(U){for(let B=0;B<U.removed.length;B++){const Z=U.removed[B],ee=g.indexOf(Z);ee>=0&&(g[ee]=null,m[ee].disconnect(Z))}for(let B=0;B<U.added.length;B++){const Z=U.added[B];let ee=g.indexOf(Z);if(ee===-1){for(let H=0;H<m.length;H++)if(H>=g.length){g.push(Z),ee=H;break}else if(g[H]===null){g[H]=Z,ee=H;break}if(ee===-1)break}const oe=m[ee];oe&&oe.connect(Z)}}const N=new k,Y=new k;function Q(U,B,Z){N.setFromMatrixPosition(B.matrixWorld),Y.setFromMatrixPosition(Z.matrixWorld);const ee=N.distanceTo(Y),oe=B.projectionMatrix.elements,H=Z.projectionMatrix.elements,Ee=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),ye=(oe[9]+1)/oe[5],he=(oe[9]-1)/oe[5],Oe=(oe[8]-1)/oe[0],Te=(H[8]+1)/H[0],Se=Ee*Oe,mt=Ee*Te,lt=ee/(-Oe+Te),ut=lt*-Oe;B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ut),U.translateZ(lt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Nt=Ee+lt,nt=pe+lt,Be=Se-ut,hn=mt+(ee-ut),Gt=ye*pe/nt*Nt,T=he*pe/nt*Nt;U.projectionMatrix.makePerspective(Be,hn,Gt,T,Nt,nt)}function K(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;y.near=b.near=S.near=U.near,y.far=b.far=S.far=U.far,(A!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far);const B=U.parent,Z=y.cameras;K(y,B);for(let oe=0;oe<Z.length;oe++)K(Z[oe],B);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),U.matrix.copy(y.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const ee=U.children;for(let oe=0,H=ee.length;oe<H;oe++)ee[oe].updateMatrixWorld(!0);Z.length===2?Q(y,S,b):y.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return _};let R=null;function G(U,B){if(u=B.getViewerPose(l||o),v=B,u!==null){const Z=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ee=!1;Z.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let oe=0;oe<Z.length;oe++){const H=Z[oe];let Ee=null;if(f!==null)Ee=f.getViewport(H);else{const ye=c.getViewSubImage(d,H);Ee=ye.viewport,oe===0&&(e.setRenderTargetTextures(p,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let pe=P[oe];pe===void 0&&(pe=new xn,pe.layers.enable(oe),pe.viewport=new wt,P[oe]=pe),pe.matrix.fromArray(H.transform.matrix),pe.projectionMatrix.fromArray(H.projectionMatrix),pe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),oe===0&&y.matrix.copy(pe.matrix),ee===!0&&y.cameras.push(pe)}}for(let Z=0;Z<m.length;Z++){const ee=g[Z],oe=m[Z];ee!==null&&oe!==void 0&&oe.update(ee,B,l||o)}if(R&&R(U,B),B.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let Z=null;for(const ee of _)B.detectedPlanes.has(ee)||(Z===null&&(Z=[]),Z.push(ee));if(Z!==null)for(const ee of Z)_.delete(ee),M.delete(ee),i.dispatchEvent({type:"planeremoved",data:ee});for(const ee of B.detectedPlanes)if(!_.has(ee))_.add(ee),M.set(ee,B.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ee});else{const oe=M.get(ee);ee.lastChangedTime>oe&&(M.set(ee,ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ee}))}}v=null}const V=new y0;V.setAnimationLoop(G),this.setAnimationLoop=function(U){R=U},this.dispose=function(){}}}function DE(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,v0(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,g,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),v(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,g):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Mn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Mn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let g;p.map?g=p.map:p.specularMap?g=p.specularMap:p.displacementMap?g=p.displacementMap:p.normalMap?g=p.normalMap:p.bumpMap?g=p.bumpMap:p.roughnessMap?g=p.roughnessMap:p.metalnessMap?g=p.metalnessMap:p.alphaMap?g=p.alphaMap:p.emissiveMap?g=p.emissiveMap:p.clearcoatMap?g=p.clearcoatMap:p.clearcoatNormalMap?g=p.clearcoatNormalMap:p.clearcoatRoughnessMap?g=p.clearcoatRoughnessMap:p.iridescenceMap?g=p.iridescenceMap:p.iridescenceThicknessMap?g=p.iridescenceThicknessMap:p.specularIntensityMap?g=p.specularIntensityMap:p.specularColorMap?g=p.specularColorMap:p.transmissionMap?g=p.transmissionMap:p.thicknessMap?g=p.thicknessMap:p.sheenColorMap?g=p.sheenColorMap:p.sheenRoughnessMap&&(g=p.sheenRoughnessMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,g){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=g*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Mn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function v(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function RE(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(x(g),M=c(g),r[g.id]=M,g.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(g,S);const b=e.render.frame;s[g.id]!==b&&(f(g),s[g.id]=b)}function c(g){const _=d();g.__bindingPointIndex=_;const M=t.createBuffer(),S=g.__size,b=g.usage;return t.bindBuffer(35345,M),t.bufferData(35345,S,b),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],M=g.uniforms,S=g.__cache;t.bindBuffer(35345,_);for(let b=0,P=M.length;b<P;b++){const y=M[b];if(v(y,b,S)===!0){const A=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let ie=0;ie<L.length;ie++){const z=L[ie],N=h(z);typeof z=="number"?(y.__data[0]=z,t.bufferSubData(35345,A+X,y.__data)):z.isMatrix3?(y.__data[0]=z.elements[0],y.__data[1]=z.elements[1],y.__data[2]=z.elements[2],y.__data[3]=z.elements[0],y.__data[4]=z.elements[3],y.__data[5]=z.elements[4],y.__data[6]=z.elements[5],y.__data[7]=z.elements[0],y.__data[8]=z.elements[6],y.__data[9]=z.elements[7],y.__data[10]=z.elements[8],y.__data[11]=z.elements[0]):(z.toArray(y.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,A,y.__data)}}t.bindBuffer(35345,null)}function v(g,_,M){const S=g.value;if(M[_]===void 0){if(typeof S=="number")M[_]=S;else{const b=Array.isArray(S)?S:[S],P=[];for(let y=0;y<b.length;y++)P.push(b[y].clone());M[_]=P}return!0}else if(typeof S=="number"){if(M[_]!==S)return M[_]=S,!0}else{const b=Array.isArray(M[_])?M[_]:[M[_]],P=Array.isArray(S)?S:[S];for(let y=0;y<b.length;y++){const A=b[y];if(A.equals(P[y])===!1)return A.copy(P[y]),!0}}return!1}function x(g){const _=g.uniforms;let M=0;const S=16;let b=0;for(let P=0,y=_.length;P<y;P++){const A=_[P],L={boundary:0,storage:0},X=Array.isArray(A.value)?A.value:[A.value];for(let ie=0,z=X.length;ie<z;ie++){const N=X[ie],Y=h(N);L.boundary+=Y.boundary,L.storage+=Y.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,P>0){b=M%S;const ie=S-b;b!==0&&ie-L.boundary<0&&(M+=S-b,A.__offset=M)}M+=L.storage}return b=M%S,b>0&&(M+=S-b),g.__size=M,g.__cache={},this}function h(g){const _={boundary:0,storage:0};return typeof g=="number"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function IE(){const t=fl("canvas");return t.style.display="block",t}function b0(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:IE(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Oi,this.physicallyCorrectLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const h=this;let p=!1,m=0,g=0,_=null,M=-1,S=null;const b=new wt,P=new wt;let y=null,A=e.width,L=e.height,X=1,ie=null,z=null;const N=new wt(0,0,A,L),Y=new wt(0,0,A,L);let Q=!1;const K=new x0;let R=!1,G=!1,V=null;const U=new St,B=new xe,Z=new k,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return _===null?X:1}let H=n;function Ee(E,O){for(let q=0;q<E.length;q++){const F=E[q],$=e.getContext(F,O);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jf}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Le,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),H=Ee(O,E),H===null)throw Ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,ye,he,Oe,Te,Se,mt,lt,ut,Nt,nt,Be,hn,Gt,T,w,W,ne,re,ae,Me,C,I,ue;function de(){pe=new WM(H),ye=new OM(H,pe,t),pe.init(ye),C=new bE(H,pe,ye),he=new EE(H,pe,ye),Oe=new qM,Te=new cE,Se=new TE(H,pe,he,Te,ye,C,Oe),mt=new BM(h),lt=new HM(h),ut=new nS(H,ye),I=new zM(H,pe,ut,ye),Nt=new jM(H,ut,Oe,I),nt=new ZM(H,Nt,ut,Oe),re=new KM(H,ye,Se),w=new UM(Te),Be=new uE(h,mt,lt,pe,ye,I,w),hn=new DE(h,Te),Gt=new dE,T=new _E(pe,ye),ne=new FM(h,mt,lt,he,nt,c,o),W=new wE(h,nt,ye),ue=new RE(H,Oe,ye,he),ae=new kM(H,pe,Oe,ye),Me=new XM(H,pe,Oe,ye),Oe.programs=Be.programs,h.capabilities=ye,h.extensions=pe,h.properties=Te,h.renderLists=Gt,h.shadowMap=W,h.state=he,h.info=Oe}de();const le=new LE(h,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(A,L,!1))},this.getSize=function(E){return E.set(A,L)},this.setSize=function(E,O,q){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,L=O,e.width=Math.floor(E*X),e.height=Math.floor(O*X),q!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(A*X,L*X).floor()},this.setDrawingBufferSize=function(E,O,q){A=E,L=O,X=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,O,q,F){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,O,q,F),he.viewport(b.copy(N).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,O,q,F){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,q,F),he.scissor(P.copy(Y).multiplyScalar(X).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){he.setScissorTest(Q=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,O=!0,q=!0){let F=0;E&&(F|=16384),O&&(F|=256),q&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),Gt.dispose(),T.dispose(),Te.dispose(),mt.dispose(),lt.dispose(),nt.dispose(),I.dispose(),ue.dispose(),Be.dispose(),le.dispose(),le.removeEventListener("sessionstart",ce),le.removeEventListener("sessionend",ve),V&&(V.dispose(),V=null),Ue.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Oe.autoReset,O=W.enabled,q=W.autoUpdate,F=W.needsUpdate,$=W.type;de(),Oe.autoReset=E,W.enabled=O,W.autoUpdate=q,W.needsUpdate=F,W.type=$}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const O=E.target;O.removeEventListener("dispose",De),He(O)}function He(E){D(E),Te.remove(E)}function D(E){const O=Te.get(E).programs;O!==void 0&&(O.forEach(function(q){Be.releaseProgram(q)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,F,$,_e){O===null&&(O=ee);const we=$.isMesh&&$.matrixWorld.determinant()<0,Ce=L0(E,O,q,F,$);he.setMaterial(F,we);let Ae=q.index,ke=1;F.wireframe===!0&&(Ae=Nt.getWireframeAttribute(q),ke=2);const Re=q.drawRange,Ie=q.attributes.position;let rt=Re.start*ke,Qt=(Re.start+Re.count)*ke;_e!==null&&(rt=Math.max(rt,_e.start*ke),Qt=Math.min(Qt,(_e.start+_e.count)*ke)),Ae!==null?(rt=Math.max(rt,0),Qt=Math.min(Qt,Ae.count)):Ie!=null&&(rt=Math.max(rt,0),Qt=Math.min(Qt,Ie.count));const $n=Qt-rt;if($n<0||$n===1/0)return;I.setup($,F,Ce,q,Ae);let Hi,st=ae;if(Ae!==null&&(Hi=ut.get(Ae),st=Me,st.setIndex(Hi)),$.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*oe()),st.setMode(1)):st.setMode(4);else if($.isLine){let Ne=F.linewidth;Ne===void 0&&(Ne=1),he.setLineWidth(Ne*oe()),$.isLineSegments?st.setMode(1):$.isLineLoop?st.setMode(2):st.setMode(3)}else $.isPoints?st.setMode(0):$.isSprite&&st.setMode(4);if($.isInstancedMesh)st.renderInstances(rt,$n,$.count);else if(q.isInstancedBufferGeometry){const Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nl=Math.min(q.instanceCount,Ne);st.renderInstances(rt,$n,Nl)}else st.render(rt,$n)},this.compile=function(E,O){function q(F,$,_e){F.transparent===!0&&F.side===ta?(F.side=Mn,F.needsUpdate=!0,pn(F,$,_e),F.side=mr,F.needsUpdate=!0,pn(F,$,_e),F.side=ta):pn(F,$,_e)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let _e=0;_e<$.length;_e++){const we=$[_e];q(we,E,F)}else q($,E,F)}),x.pop(),f=null};let j=null;function te(E){j&&j(E)}function ce(){Ue.stop()}function ve(){Ue.start()}const Ue=new y0;Ue.setAnimationLoop(te),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){j=E,le.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},le.addEventListener("sessionstart",ce),le.addEventListener("sessionend",ve),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,_),f=T.get(E,x.length),f.init(),x.push(f),U.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(U),G=this.localClippingEnabled,R=w.init(this.clippingPlanes,G,O),d=Gt.get(E,v.length),d.init(),v.push(d),gt(E,O,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(ie,z),R===!0&&w.beginShadows();const q=f.state.shadowsArray;if(W.render(q,E,O),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,E),f.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const F=O.cameras;for(let $=0,_e=F.length;$<_e;$++){const we=F[$];bt(d,E,we,we.viewport)}}else bt(d,E,O);_!==null&&(Se.updateMultisampleRenderTarget(_),Se.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,O),I.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function gt(E,O,q,F){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){F&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const we=nt.update(E),Ce=E.material;Ce.visible&&d.push(E,we,Ce,q,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Oe.render.frame),!E.frustumCulled||K.intersectsObject(E))){F&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const we=nt.update(E),Ce=E.material;if(Array.isArray(Ce)){const Ae=we.groups;for(let ke=0,Re=Ae.length;ke<Re;ke++){const Ie=Ae[ke],rt=Ce[Ie.materialIndex];rt&&rt.visible&&d.push(E,we,rt,q,Z.z,Ie)}}else Ce.visible&&d.push(E,we,Ce,q,Z.z,null)}}const _e=E.children;for(let we=0,Ce=_e.length;we<Ce;we++)gt(_e[we],O,q,F)}function bt(E,O,q,F){const $=E.opaque,_e=E.transmissive,we=E.transparent;f.setupLightsView(q),_e.length>0&&Gi($,O,q),F&&he.viewport(b.copy(F)),$.length>0&&Ye($,O,q),_e.length>0&&Ye(_e,O,q),we.length>0&&Ye(we,O,q),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Gi(E,O,q){const F=ye.isWebGL2;V===null&&(V=new Kt(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?gs:gr,minFilter:wo,samples:F&&s===!0?4:0})),h.getDrawingBufferSize(B),F?V.setSize(B.x,B.y):V.setSize($c(B.x),$c(B.y));const $=h.getRenderTarget();h.setRenderTarget(V),h.clear();const _e=h.toneMapping;h.toneMapping=jn,Ye(E,O,q),h.toneMapping=_e,Se.updateMultisampleRenderTarget(V),Se.updateRenderTargetMipmap(V),h.setRenderTarget($)}function Ye(E,O,q){const F=O.isScene===!0?O.overrideMaterial:null;for(let $=0,_e=E.length;$<_e;$++){const we=E[$],Ce=we.object,Ae=we.geometry,ke=F===null?we.material:F,Re=we.group;Ce.layers.test(q.layers)&&qn(Ce,O,q,Ae,ke,Re)}}function qn(E,O,q,F,$,_e){E.onBeforeRender(h,O,q,F,$,_e),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(h,O,q,F,E,_e),$.transparent===!0&&$.side===ta?($.side=Mn,$.needsUpdate=!0,h.renderBufferDirect(q,O,F,$,E,_e),$.side=mr,$.needsUpdate=!0,h.renderBufferDirect(q,O,F,$,E,_e),$.side=ta):h.renderBufferDirect(q,O,F,$,E,_e),E.onAfterRender(h,O,q,F,$,_e)}function pn(E,O,q){O.isScene!==!0&&(O=ee);const F=Te.get(E),$=f.state.lights,_e=f.state.shadowsArray,we=$.state.version,Ce=Be.getParameters(E,$.state,_e,O,q),Ae=Be.getProgramCacheKey(Ce);let ke=F.programs;F.environment=E.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(E.isMeshStandardMaterial?lt:mt).get(E.envMap||F.environment),ke===void 0&&(E.addEventListener("dispose",De),ke=new Map,F.programs=ke);let Re=ke.get(Ae);if(Re!==void 0){if(F.currentProgram===Re&&F.lightsStateVersion===we)return od(E,Ce),Re}else Ce.uniforms=Be.getUniforms(E),E.onBuild(q,Ce,h),E.onBeforeCompile(Ce,h),Re=Be.acquireProgram(Ce,Ae),ke.set(Ae,Re),F.uniforms=Ce.uniforms;const Ie=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=w.uniform),od(E,Ce),F.needsLights=R0(E),F.lightsStateVersion=we,F.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const rt=Re.getUniforms(),Qt=Oa.seqWithValue(rt.seq,Ie);return F.currentProgram=Re,F.uniformsList=Qt,Re}function od(E,O){const q=Te.get(E);q.outputEncoding=O.outputEncoding,q.instancing=O.instancing,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function L0(E,O,q,F,$){O.isScene!==!0&&(O=ee),Se.resetTextureUnits();const _e=O.fog,we=F.isMeshStandardMaterial?O.environment:null,Ce=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Oi,Ae=(F.isMeshStandardMaterial?lt:mt).get(F.envMap||we),ke=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!F.normalMap&&!!q.attributes.tangent,Ie=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color,$n=F.toneMapped?h.toneMapping:jn,Hi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=Hi!==void 0?Hi.length:0,Ne=Te.get(F),Nl=f.state.lights;if(R===!0&&(G===!0||E!==S)){const Jt=E===S&&F.id===M;w.setState(F,E,Jt)}let vt=!1;F.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Nl.state.version||Ne.outputEncoding!==Ce||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ae||F.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==rt||Ne.morphColors!==Qt||Ne.toneMapping!==$n||ye.isWebGL2===!0&&Ne.morphTargetsCount!==st)&&(vt=!0):(vt=!0,Ne.__version=F.version);let Wi=Ne.currentProgram;vt===!0&&(Wi=pn(F,O,$));let ad=!1,Ts=!1,Fl=!1;const Ft=Wi.getUniforms(),ji=Ne.uniforms;if(he.useProgram(Wi.program)&&(ad=!0,Ts=!0,Fl=!0),F.id!==M&&(M=F.id,Ts=!0),ad||S!==E){if(Ft.setValue(H,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Ts=!0,Fl=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Jt=Ft.map.cameraPosition;Jt!==void 0&&Jt.setValue(H,Z.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&Ft.setValue(H,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Ft.setOptional(H,$,"bindMatrix"),Ft.setOptional(H,$,"bindMatrixInverse");const Jt=$.skeleton;Jt&&(ye.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ft.setValue(H,"boneTexture",Jt.boneTexture,Se),Ft.setValue(H,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zl=q.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0&&ye.isWebGL2===!0)&&re.update($,q,F,Wi),(Ts||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Ft.setValue(H,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ji.envMap.value=Ae,ji.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ts&&(Ft.setValue(H,"toneMappingExposure",h.toneMappingExposure),Ne.needsLights&&D0(ji,Fl),_e&&F.fog===!0&&hn.refreshFogUniforms(ji,_e),hn.refreshMaterialUniforms(ji,F,X,L,V),Oa.upload(H,Ne.uniformsList,ji,Se)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Oa.upload(H,Ne.uniformsList,ji,Se),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ft.setValue(H,"center",$.center),Ft.setValue(H,"modelViewMatrix",$.modelViewMatrix),Ft.setValue(H,"normalMatrix",$.normalMatrix),Ft.setValue(H,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Jt=F.uniformsGroups;for(let kl=0,I0=Jt.length;kl<I0;kl++)if(ye.isWebGL2){const ld=Jt[kl];ue.update(ld,Wi),ue.bind(ld,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}function D0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function R0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,q){Te.get(E.texture).__webglTexture=O,Te.get(E.depthTexture).__webglTexture=q;const F=Te.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const q=Te.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){_=E,m=O,g=q;let F=!0,$=null,_e=!1,we=!1;if(E){const Ae=Te.get(E);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Ae.__webglFramebuffer===void 0?Se.setupRenderTarget(E):Ae.__hasExternalTextures&&Se.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Re=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Re[O],_e=!0):ye.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?$=Te.get(E).__webglMultisampledFramebuffer:$=Re,b.copy(E.viewport),P.copy(E.scissor),y=E.scissorTest}else b.copy(N).multiplyScalar(X).floor(),P.copy(Y).multiplyScalar(X).floor(),y=Q;if(he.bindFramebuffer(36160,$)&&ye.drawBuffers&&F&&he.drawBuffers(E,$),he.viewport(b),he.scissor(P),he.setScissorTest(y),_e){const Ae=Te.get(E.texture);H.framebufferTexture2D(36160,36064,34069+O,Ae.__webglTexture,q)}else if(we){const Ae=Te.get(E.texture),ke=O||0;H.framebufferTextureLayer(36160,36064,Ae.__webglTexture,q||0,ke)}M=-1},this.readRenderTargetPixels=function(E,O,q,F,$,_e,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){he.bindFramebuffer(36160,Ce);try{const Ae=E.texture,ke=Ae.format,Re=Ae.type;if(ke!==on&&C.convert(ke)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===gs&&(pe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Re!==gr&&C.convert(Re)!==H.getParameter(35738)&&!(Re===ai&&(ye.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-F&&q>=0&&q<=E.height-$&&H.readPixels(O,q,F,$,C.convert(ke),C.convert(Re),_e)}finally{const Ae=_!==null?Te.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,O,q=0){const F=Math.pow(2,-q),$=Math.floor(O.image.width*F),_e=Math.floor(O.image.height*F);Se.setTexture2D(O,0),H.copyTexSubImage2D(3553,q,0,0,E.x,E.y,$,_e),he.unbindTexture()},this.copyTextureToTexture=function(E,O,q,F=0){const $=O.image.width,_e=O.image.height,we=C.convert(q.format),Ce=C.convert(q.type);Se.setTexture2D(q,0),H.pixelStorei(37440,q.flipY),H.pixelStorei(37441,q.premultiplyAlpha),H.pixelStorei(3317,q.unpackAlignment),O.isDataTexture?H.texSubImage2D(3553,F,E.x,E.y,$,_e,we,Ce,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(3553,F,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):H.texSubImage2D(3553,F,E.x,E.y,we,Ce,O.image),F===0&&q.generateMipmaps&&H.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q,F,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Ae=C.convert(F.format),ke=C.convert(F.type);let Re;if(F.isData3DTexture)Se.setTexture3D(F,0),Re=32879;else if(F.isDataArrayTexture)Se.setTexture2DArray(F,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Ie=H.getParameter(3314),rt=H.getParameter(32878),Qt=H.getParameter(3316),$n=H.getParameter(3315),Hi=H.getParameter(32877),st=q.isCompressedTexture?q.mipmaps[0]:q.image;H.pixelStorei(3314,st.width),H.pixelStorei(32878,st.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Re,$,O.x,O.y,O.z,_e,we,Ce,Ae,ke,st.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Re,$,O.x,O.y,O.z,_e,we,Ce,Ae,st.data)):H.texSubImage3D(Re,$,O.x,O.y,O.z,_e,we,Ce,Ae,ke,st),H.pixelStorei(3314,Ie),H.pixelStorei(32878,rt),H.pixelStorei(3316,Qt),H.pixelStorei(3315,$n),H.pixelStorei(32877,Hi),$===0&&F.generateMipmaps&&H.generateMipmap(Re),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){m=0,g=0,_=null,he.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class NE extends b0{}NE.prototype.isWebGL1Renderer=!0;class C0 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class FE extends Yt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Qe,c=Qe,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zE extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dp=new St,Kc=new h0,Ma=new Ll,wa=new k;class kE extends Zt{constructor(e=new Xn,n=new zE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Dp.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=f,h=v;x<h;x++){const p=u.getX(x);wa.fromBufferAttribute(d,p),Rp(wa,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=f,h=v;x<h;x++)wa.fromBufferAttribute(d,x),Rp(wa,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rp(t,e,n,i,r,s,o){const a=Kc.distanceSqToPoint(t);if(a<n){const l=new k;Kc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ip(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ip();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ip(){return(typeof performance>"u"?Date:performance).now()}class Np{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const Fp={type:"change"},Gu={type:"start"},zp={type:"end"};class UE extends yr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Gt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Fp),i.update(),s=r.NONE},this.update=function(){const C=new k,I=new vr().setFromUnitVectors(e.up,new k(0,1,0)),ue=I.clone().invert(),de=new k,le=new vr,ge=2*Math.PI;return function(){const Le=i.object.position;C.copy(Le).sub(i.target),C.applyQuaternion(I),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&A(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(De)&&isFinite(He)&&(De<-Math.PI?De+=ge:De>Math.PI&&(De-=ge),He<-Math.PI?He+=ge:He>Math.PI&&(He-=ge),De<=He?a.theta=Math.max(De,Math.min(He,a.theta)):a.theta=a.theta>(De+He)/2?Math.max(De,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ue),Le.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||de.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o?(i.dispatchEvent(Fp),de.copy(i.object.position),le.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",W),i.domElement.removeEventListener("pointerdown",mt),i.domElement.removeEventListener("pointercancel",Nt),i.domElement.removeEventListener("wheel",hn),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",ut),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Gt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Np,l=new Np;let u=1;const c=new k;let d=!1;const f=new xe,v=new xe,x=new xe,h=new xe,p=new xe,m=new xe,g=new xe,_=new xe,M=new xe,S=[],b={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function A(C){l.theta-=C}function L(C){l.phi-=C}const X=function(){const C=new k;return function(ue,de){C.setFromMatrixColumn(de,0),C.multiplyScalar(-ue),c.add(C)}}(),ie=function(){const C=new k;return function(ue,de){i.screenSpacePanning===!0?C.setFromMatrixColumn(de,1):(C.setFromMatrixColumn(de,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ue),c.add(C)}}(),z=function(){const C=new k;return function(ue,de){const le=i.domElement;if(i.object.isPerspectiveCamera){const ge=i.object.position;C.copy(ge).sub(i.target);let me=C.length();me*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ue*me/le.clientHeight,i.object.matrix),ie(2*de*me/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(ue*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),ie(de*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(C){f.set(C.clientX,C.clientY)}function K(C){g.set(C.clientX,C.clientY)}function R(C){h.set(C.clientX,C.clientY)}function G(C){v.set(C.clientX,C.clientY),x.subVectors(v,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;A(2*Math.PI*x.x/I.clientHeight),L(2*Math.PI*x.y/I.clientHeight),f.copy(v),i.update()}function V(C){_.set(C.clientX,C.clientY),M.subVectors(_,g),M.y>0?N(y()):M.y<0&&Y(y()),g.copy(_),i.update()}function U(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p),i.update()}function B(C){C.deltaY<0?Y(y()):C.deltaY>0&&N(y()),i.update()}function Z(C){let I=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),i.update())}function ee(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);f.set(C,I)}}function oe(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);h.set(C,I)}}function H(){const C=S[0].pageX-S[1].pageX,I=S[0].pageY-S[1].pageY,ue=Math.sqrt(C*C+I*I);g.set(0,ue)}function Ee(){i.enableZoom&&H(),i.enablePan&&oe()}function pe(){i.enableZoom&&H(),i.enableRotate&&ee()}function ye(C){if(S.length==1)v.set(C.pageX,C.pageY);else{const ue=Me(C),de=.5*(C.pageX+ue.x),le=.5*(C.pageY+ue.y);v.set(de,le)}x.subVectors(v,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;A(2*Math.PI*x.x/I.clientHeight),L(2*Math.PI*x.y/I.clientHeight),f.copy(v)}function he(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const I=Me(C),ue=.5*(C.pageX+I.x),de=.5*(C.pageY+I.y);p.set(ue,de)}m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p)}function Oe(C){const I=Me(C),ue=C.pageX-I.x,de=C.pageY-I.y,le=Math.sqrt(ue*ue+de*de);_.set(0,le),M.set(0,Math.pow(_.y/g.y,i.zoomSpeed)),N(M.y),g.copy(_)}function Te(C){i.enableZoom&&Oe(C),i.enablePan&&he(C)}function Se(C){i.enableZoom&&Oe(C),i.enableRotate&&ye(C)}function mt(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",lt),i.domElement.addEventListener("pointerup",ut)),ne(C),C.pointerType==="touch"?T(C):nt(C))}function lt(C){i.enabled!==!1&&(C.pointerType==="touch"?w(C):Be(C))}function ut(C){re(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",lt),i.domElement.removeEventListener("pointerup",ut)),i.dispatchEvent(zp),s=r.NONE}function Nt(C){re(C)}function nt(C){let I;switch(C.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Mr.DOLLY:if(i.enableZoom===!1)return;K(C),s=r.DOLLY;break;case Mr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;R(C),s=r.PAN}else{if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}break;case Mr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;R(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function Be(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(C);break;case r.DOLLY:if(i.enableZoom===!1)return;V(C);break;case r.PAN:if(i.enablePan===!1)return;U(C);break}}function hn(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Gu),B(C),i.dispatchEvent(zp))}function Gt(C){i.enabled===!1||i.enablePan===!1||Z(C)}function T(C){switch(ae(C),S.length){case 1:switch(i.touches.ONE){case wr.ROTATE:if(i.enableRotate===!1)return;ee(),s=r.TOUCH_ROTATE;break;case wr.PAN:if(i.enablePan===!1)return;oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(),s=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Gu)}function w(C){switch(ae(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ye(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(C),i.update();break;default:s=r.NONE}}function W(C){i.enabled!==!1&&C.preventDefault()}function ne(C){S.push(C)}function re(C){delete b[C.pointerId];for(let I=0;I<S.length;I++)if(S[I].pointerId==C.pointerId){S.splice(I,1);return}}function ae(C){let I=b[C.pointerId];I===void 0&&(I=new xe,b[C.pointerId]=I),I.set(C.pageX,C.pageY)}function Me(C){const I=C.pointerId===S[0].pointerId?S[1]:S[0];return b[I.pointerId]}i.domElement.addEventListener("contextmenu",W),i.domElement.addEventListener("pointerdown",mt),i.domElement.addEventListener("pointercancel",Nt),i.domElement.addEventListener("wheel",hn,{passive:!1}),this.update()}}class BE{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=ai;const s=new C0,o=new td;o.position.z=1;const a={passThruTexture:{value:null}},l=d(v(),a),u=new Gn(new Rl(2,2),l);s.add(u),this.setDataType=function(x){return r=x,this},this.addVariable=function(x,h,p){const m=this.createShaderMaterial(h),g={name:x,initialValueTexture:p,material:m,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Qe,magFilter:Qe};return this.variables.push(g),g},this.setVariableDependencies=function(x,h){x.dependencies=h},this.init=function(){if(i.capabilities.isWebGL2===!1&&i.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let x=0;x<this.variables.length;x++){const h=this.variables[x];h.renderTargets[0]=this.createRenderTarget(e,n,h.wrapS,h.wrapT,h.minFilter,h.magFilter),h.renderTargets[1]=this.createRenderTarget(e,n,h.wrapS,h.wrapT,h.minFilter,h.magFilter),this.renderTexture(h.initialValueTexture,h.renderTargets[0]),this.renderTexture(h.initialValueTexture,h.renderTargets[1]);const p=h.material,m=p.uniforms;if(h.dependencies!==null)for(let g=0;g<h.dependencies.length;g++){const _=h.dependencies[g];if(_.name!==h.name){let M=!1;for(let S=0;S<this.variables.length;S++)if(_.name===this.variables[S].name){M=!0;break}if(!M)return"Variable dependency not found. Variable="+h.name+", dependency="+_.name}m[_.name]={value:null},p.fragmentShader=`
uniform sampler2D `+_.name+`;
`+p.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const x=this.currentTextureIndex,h=this.currentTextureIndex===0?1:0;for(let p=0,m=this.variables.length;p<m;p++){const g=this.variables[p];if(g.dependencies!==null){const _=g.material.uniforms;for(let M=0,S=g.dependencies.length;M<S;M++){const b=g.dependencies[M];_[b.name].value=b.renderTargets[x].texture}}this.doRenderTarget(g.material,g.renderTargets[h])}this.currentTextureIndex=h},this.getCurrentRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(x){return x.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){u.geometry.dispose(),u.material.dispose();const x=this.variables;for(let h=0;h<x.length;h++){const p=x[h];p.initialValueTexture?.dispose();const m=p.renderTargets;for(let g=0;g<m.length;g++)m[g].dispose()}};function c(x){x.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=c;function d(x,h){h=h||{};const p=new Rt({uniforms:h,vertexShader:f(),fragmentShader:x});return c(p),p}this.createShaderMaterial=d,this.createRenderTarget=function(x,h,p,m,g,_){return x=x||e,h=h||n,p=p||sn,m=m||sn,g=g||Qe,_=_||Qe,new Kt(x,h,{wrapS:p,wrapT:m,minFilter:g,magFilter:_,format:on,type:r,depthBuffer:!1})},this.createTexture=function(){const x=new Float32Array(e*n*4),h=new FE(x,e,n,on,ai);return h.needsUpdate=!0,h},this.renderTexture=function(x,h){a.passThruTexture.value=x,this.doRenderTarget(l,h),a.passThruTexture.value=null},this.doRenderTarget=function(x,h){const p=i.getRenderTarget(),m=i.xr.enabled,g=i.shadowMap.autoUpdate,_=i.outputEncoding,M=i.toneMapping;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.outputEncoding=Oi,i.toneMapping=jn,u.material=x,i.setRenderTarget(h),i.render(s,o),u.material=l,i.xr.enabled=m,i.shadowMap.autoUpdate=g,i.outputEncoding=_,i.toneMapping=M,i.setRenderTarget(p)};function f(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function v(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}class Es{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VE=new S0(-1,1,1,-1,0,1),id=new Xn;id.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3));id.setAttribute("uv",new ui([0,2,0,0,2,0],2));class dl{constructor(e){this._mesh=new Gn(id,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const A0={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},GE={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class xs extends Es{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256),this.clearColor=new Ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Kt(s,o);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const v=new Kt(s,o);v.texture.name="UnrealBloomPass.v"+d,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),s=Math.round(s/2),o=Math.round(o/2)}const a=GE;this.highPassUniforms=To.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new xe(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=A0;this.copyUniforms=To.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Rt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Gc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.basic=new Dl,this.fsQuad=new dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new xe(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Rt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}xs.BlurDirectionX=new xe(1,0);xs.BlurDirectionY=new xe(0,1);const HE={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class WE extends Es{constructor(e=.96){super(),this.shader=HE,this.uniforms=To.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new Kt(window.innerWidth,window.innerHeight,{magFilter:Qe}),this.textureOld=new Kt(window.innerWidth,window.innerHeight,{magFilter:Qe}),this.compFsMaterial=new Rt({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new dl(this.compFsMaterial),this.copyFsMaterial=new Dl,this.copyFsQuad=new dl(this.copyFsMaterial)}render(e,n,i){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=i.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this.copyFsQuad.render(e));const r=this.textureOld;this.textureOld=this.textureComp,this.textureComp=r}setSize(e,n){this.textureComp.setSize(e,n),this.textureOld.setSize(e,n)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class jE extends Es{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=To.clone(e.uniforms),this.material=new Rt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dl(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kp extends Es{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class XE extends Es{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qE{constructor(e,n){if(this.renderer=e,n===void 0){const i=e.getSize(new xe);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,n=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jE(A0),this.clock=new OE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kp!==void 0&&(o instanceof kp?i=!0:o instanceof XE&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $E extends Es{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const YE=`uniform float time;
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
`,KE=`uniform float time;
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
`,ZE=`
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
`,QE=`varying vec3 vPosition;

void main() {
    gl_FragColor = vec4( 0.0, 0.1, 0.2, 1.0 );
}
`,bo=32,Op=1e4,io=window.innerHeight/4,Hu=io/2;let Qr,Ua,ii,Zc=0,Qc=0,rd=window.innerWidth/2,sd=window.innerHeight/2,Up=performance.now(),Pn,yi,ti,sr,Lt,Co,qs;Co=new Rt({uniforms:{positionTex:{value:null},resolution:{value:new xe},width:{value:bo}},vertexShader:ZE,fragmentShader:QE});function JE(t){Qr=new xn(75,window.innerWidth/window.innerHeight,1,3e4),Qr.position.z=1e3,Ua=new C0,ii=new b0,ii.setPixelRatio(window.devicePixelRatio),ii.setSize(window.innerWidth,window.innerHeight),t.appendChild(ii.domElement);const e=new $E(Ua,Qr),n=new xs(new xe(window.innerWidth,window.innerHeight),3,0,0),i=new WE(.9);i.uniforms.damp.value=.975,qs=new qE(ii),qs.addPass(e),qs.addPass(n),qs.addPass(i),Ua.background=new Ve("black"),new UE(Qr,ii.domElement),eT(),Co.uniforms.positionTex.value=ti.texture,document.body.addEventListener("pointermove",sT),window.addEventListener("resize",rT);const r={separation:20,alignment:50,cohesion:50,freedom:.9};(function(){Lt.separationDistance.value=r.separation,Lt.alignmentDistance.value=r.alignment,Lt.cohesionDistance.value=r.cohesion,Lt.freedomFactor.value=r.freedom})(),tT(),P0()}function eT(){Pn=new BE(bo,bo,ii),ii.capabilities.isWebGL2===!1&&Pn.setDataType(gs);const t=Pn.createTexture(),e=Pn.createTexture();nT(t),iT(e),yi=Pn.addVariable("textureVelocity",YE,e),ti=Pn.addVariable("texturePosition",KE,t),Pn.setVariableDependencies(yi,[ti,yi]),Pn.setVariableDependencies(ti,[ti,yi]),sr=ti.material.uniforms,Lt=yi.material.uniforms,sr.time={value:0},sr.delta={value:0},Lt.time={value:1},Lt.delta={value:0},Lt.testing={value:1},Lt.separationDistance={value:1},Lt.alignmentDistance={value:1},Lt.cohesionDistance={value:1},Lt.freedomFactor={value:1},Lt.predator={value:new k},yi.material.defines.BOUNDS=io.toFixed(2),yi.wrapS=ir,yi.wrapT=ir,ti.wrapS=ir,ti.wrapT=ir;const n=Pn.init();n!==null&&console.error(n)}function tT(){const e=new Float32Array(Op*3*1),n=window.innerHeight,i=n/2,r=new Xn;for(let o=0;o<Op;o++)for(let a=0;a<1;a++)e[o*3*1+a*3]=Math.random()*n-i,e[o*3*1+a*3+1]=Math.random()*n-i,e[o*3*1+a*3+2]=Math.random()*n-i;r.setAttribute("position",new Fn(e,3));const s=new kE(r,Co);Ua.add(s)}function nT(t){const e=t.image.data;for(let n=0,i=e.length;n<i;n+=4){const r=Math.random()*io-Hu,s=Math.random()*io-Hu,o=Math.random()*io-Hu;e[n+0]=r,e[n+1]=s,e[n+2]=o,e[n+3]=1}}function iT(t){const e=t.image.data;for(let n=0,i=e.length;n<i;n+=4){const r=Math.random()-.5,s=Math.random()-.5,o=Math.random()-.5;e[n+0]=r*10,e[n+1]=s*10,e[n+2]=o*10,e[n+3]=1}}function rT(){rd=window.innerWidth/2,sd=window.innerHeight/2,Qr.aspect=window.innerWidth/window.innerHeight,Qr.updateProjectionMatrix(),ii.setSize(window.innerWidth,window.innerHeight)}function sT(t){t.isPrimary!==!1&&(Zc=t.clientX-rd,Qc=t.clientY-sd)}function P0(){requestAnimationFrame(P0),oT()}function oT(){const t=performance.now();let e=(t-Up)/1e3;e>1&&(e=1),Up=t,sr.time.value=t,sr.delta.value=e,Lt.time.value=t,Lt.delta.value=e,sr.time.value=t,sr.delta.value=e,Lt.predator.value.set(.5*Zc/rd,-.5*Qc/sd,0),Zc=1e4,Qc=1e4,Pn.compute(),Co.uniforms.positionTex.value=Pn.getCurrentRenderTarget(ti).texture,Co.uniforms.resolution.value.set(bo,bo),qs.render()}function aT(){Fe.useState(!1);let t=!1;return Fe.useEffect(()=>{const e=document.getElementById("particle-canvas");t||(JE(e),t=!0)},[]),ba(sv,{children:[We("div",{style:{position:"fixed",zIndex:"-100",width:"100vw",height:"100vh"},id:"particle-canvas"}),We(Ux,{})]})}Wu.createRoot(document.getElementById("root")).render(We(Q0.StrictMode,{children:We(aT,{})}));
