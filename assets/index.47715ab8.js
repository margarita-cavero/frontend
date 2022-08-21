const ym=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};ym();var xm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function wm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function km(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var M={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Sm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Tm=Symbol.for("react.memo"),jm=Symbol.for("react.lazy"),bu=Symbol.iterator;function Am(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ad=Object.assign,ld={};function wr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||id}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=wr.prototype;function ds(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||id}var fs=ds.prototype=new sd;fs.constructor=ds;ad(fs,wr.prototype);fs.isPureReactComponent=!0;var Nu=Array.isArray,ud=Object.prototype.hasOwnProperty,ps={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ud.call(t,r)&&!cd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:po,type:e,key:i,ref:l,props:o,_owner:ps.current}}function zm(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ms(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function Lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lm(""+e.key):t.toString(36)}function Bo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case po:case Sm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Na(l,0):r,Nu(o)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Bo(o,t,n,"",function(s){return s})):o!=null&&(ms(o)&&(o=zm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Pu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Nu(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Na(i,a);l+=Bo(i,t,n,u,o)}else if(u=Am(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Na(i,a++),l+=Bo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Bo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Rm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Wo={transition:null},Dm={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:ps};ae.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!ms(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=wr;ae.Fragment=_m;ae.Profiler=Em;ae.PureComponent=ds;ae.StrictMode=Cm;ae.Suspense=Om;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ad({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ps.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)ud.call(t,u)&&!cd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:po,type:e.type,key:o,ref:i,props:r,_owner:l}};ae.createContext=function(e){return e={$$typeof:Nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bm,_context:e},e.Consumer=e};ae.createElement=dd;ae.createFactory=function(e){var t=dd.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:Pm,render:e}};ae.isValidElement=ms;ae.lazy=function(e){return{$$typeof:jm,_payload:{_status:-1,_result:e},_init:Rm}};ae.memo=function(e,t){return{$$typeof:Tm,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(e,t){return qe.current.useCallback(e,t)};ae.useContext=function(e){return qe.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};ae.useEffect=function(e,t){return qe.current.useEffect(e,t)};ae.useId=function(){return qe.current.useId()};ae.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return qe.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};ae.useRef=function(e){return qe.current.useRef(e)};ae.useState=function(e){return qe.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return qe.current.useTransition()};ae.version="18.2.0";M.exports=ae;var Ne=M.exports,al={},fd={exports:{}},at={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var B=z.length;z.push(F);e:for(;0<B;){var X=B-1>>>1,U=z[X];if(0<o(U,F))z[X]=F,z[B]=U,B=X;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],B=z.pop();if(B!==F){z[0]=B;e:for(var X=0,U=z.length,k=U>>>1;X<k;){var K=2*(X+1)-1,D=z[K],E=K+1,re=z[E];if(0>o(D,B))E<U&&0>o(re,D)?(z[X]=re,z[E]=B,X=E):(z[X]=D,z[K]=B,X=K);else if(E<U&&0>o(re,B))z[X]=re,z[E]=B,X=E;else break e}}return F}function o(z,F){var B=z.sortIndex-F.sortIndex;return B!==0?B:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],c=1,f=null,d=3,p=!1,g=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var F=n(s);F!==null;){if(F.callback===null)r(s);else if(F.startTime<=z)r(s),F.sortIndex=F.expirationTime,t(u,F);else break;F=n(s)}}function _(z){if(x=!1,v(z),!g)if(n(u)!==null)g=!0,te(O);else{var F=n(s);F!==null&&Se(_,F.startTime-z)}}function O(z,F){g=!1,x&&(x=!1,h(P),P=-1),p=!0;var B=d;try{for(v(F),f=n(u);f!==null&&(!(f.expirationTime>F)||z&&!L());){var X=f.callback;if(typeof X=="function"){f.callback=null,d=f.priorityLevel;var U=X(f.expirationTime<=F);F=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(u)&&r(u),v(F)}else r(u);f=n(u)}if(f!==null)var k=!0;else{var K=n(s);K!==null&&Se(_,K.startTime-F),k=!1}return k}finally{f=null,d=B,p=!1}}var T=!1,C=null,P=-1,R=5,A=-1;function L(){return!(e.unstable_now()-A<R)}function W(){if(C!==null){var z=e.unstable_now();A=z;var F=!0;try{F=C(!0,z)}finally{F?Q():(T=!1,C=null)}}else T=!1}var Q;if(typeof m=="function")Q=function(){m(W)};else if(typeof MessageChannel!="undefined"){var G=new MessageChannel,ee=G.port2;G.port1.onmessage=W,Q=function(){ee.postMessage(null)}}else Q=function(){S(W,0)};function te(z){C=z,T||(T=!0,Q())}function Se(z,F){P=S(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,te(O))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var B=d;d=F;try{return z()}finally{d=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=d;d=z;try{return F()}finally{d=B}},e.unstable_scheduleCallback=function(z,F,B){var X=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=B+U,z={id:c++,callback:F,priorityLevel:z,startTime:B,expirationTime:U,sortIndex:-1},B>X?(z.sortIndex=B,t(s,z),n(u)===null&&z===n(s)&&(x?(h(P),P=-1):x=!0,Se(_,B-X))):(z.sortIndex=U,t(u,z),g||p||(g=!0,te(O))),z},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(z){var F=d;return function(){var B=d;d=F;try{return z.apply(this,arguments)}finally{d=B}}}})(md);pd.exports=md;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=M.exports,it=pd.exports;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,qr={};function Mn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(qr[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Ht=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ll=Object.prototype.hasOwnProperty,Mm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ou={},Tu={};function Fm(e){return ll.call(Tu,e)?!0:ll.call(Ou,e)?!1:Mm.test(e)?Tu[e]=!0:(Ou[e]=!0,!1)}function $m(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Im(e,t,n,r){if(t===null||typeof t=="undefined"||$m(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var hs=/[\-:]([a-z])/g;function gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hs,gs);Me[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hs,gs);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hs,gs);Me[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=Me.hasOwnProperty(t)?Me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Im(t,n,o,r)&&(n=null),r||o===null?Fm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),ys=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),ws=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),xd=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Pa;function Lr(e){if(Pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pa=t&&t[1]||""}return`
`+Pa+e}var Oa=!1;function Ta(e,t){if(!e||Oa)return"";Oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function Vm(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Bn:return"Portal";case sl:return"Profiler";case ys:return"StrictMode";case ul:return"Suspense";case cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ws:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function Um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bm(e){var t=wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=Bm(e))}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sd(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function pl(e,t){Sd(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Rr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function _d(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,Ed=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Wm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function bd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function Nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hm=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(Hm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,ir=null,ar=null;function Du(e){if(e=go(e)){if(typeof wl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=$i(t),wl(e.stateNode,e.type,t))}}function Pd(e){ir?ar?ar.push(e):ar=[e]:ir=e}function Od(){if(ir){var e=ir,t=ar;if(ar=ir=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Td(e,t){return e(t)}function jd(){}var ja=!1;function Ad(e,t,n){if(ja)return e(t,n);ja=!0;try{return Td(e,t,n)}finally{ja=!1,(ir!==null||ar!==null)&&(jd(),Od())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var kl=!1;if(Ht)try{var br={};Object.defineProperty(br,"passive",{get:function(){kl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{kl=!1}function Qm(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var $r=!1,oi=null,ii=!1,Sl=null,Ym={onError:function(e){$r=!0,oi=e}};function qm(e,t,n,r,o,i,l,a,u){$r=!1,oi=null,Qm.apply(Ym,arguments)}function Km(e,t,n,r,o,i,l,a,u){if(qm.apply(this,arguments),$r){if($r){var s=oi;$r=!1,oi=null}else throw Error(I(198));ii||(ii=!0,Sl=s)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mu(e){if(Fn(e)!==e)throw Error(I(188))}function Gm(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mu(o),e;if(i===r)return Mu(o),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Ld(e){return e=Gm(e),e!==null?Rd(e):null}function Rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rd(e);if(t!==null)return t;e=e.sibling}return null}var Dd=it.unstable_scheduleCallback,Fu=it.unstable_cancelCallback,Xm=it.unstable_shouldYield,Zm=it.unstable_requestPaint,Ee=it.unstable_now,Jm=it.unstable_getCurrentPriorityLevel,Ss=it.unstable_ImmediatePriority,Md=it.unstable_UserBlockingPriority,ai=it.unstable_NormalPriority,eh=it.unstable_LowPriority,Fd=it.unstable_IdlePriority,Ri=null,Dt=null;function th(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:oh,nh=Math.log,rh=Math.LN2;function oh(e){return e>>>=0,e===0?32:31-(nh(e)/rh|0)|0}var bo=64,No=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Dr(a):(i&=l,i!==0&&(r=Dr(i)))}else l=n&~o,l!==0?r=Dr(l):i!==0&&(r=Dr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),o=1<<n,r|=e[n],t&=~o;return r}function ih(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ah(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Et(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=ih(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $d(){var e=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),e}function Aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var se=0;function Id(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vd,Cs,Ud,Bd,Wd,Cl=!1,Po=[],on=null,an=null,ln=null,Xr=new Map,Zr=new Map,en=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=go(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uh(e,t,n,r,o){switch(t){case"focusin":return on=Nr(on,e,t,n,r,o),!0;case"dragenter":return an=Nr(an,e,t,n,r,o),!0;case"mouseover":return ln=Nr(ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xr.set(i,Nr(Xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zr.set(i,Nr(Zr.get(i)||null,e,t,n,r,o)),!0}return!1}function Hd(e){var t=En(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=zd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=go(n),t!==null&&Cs(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Ho(e)&&n.delete(t)}function ch(){Cl=!1,on!==null&&Ho(on)&&(on=null),an!==null&&Ho(an)&&(an=null),ln!==null&&Ho(ln)&&(ln=null),Xr.forEach(Iu),Zr.forEach(Iu)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,ch)))}function Jr(e){function t(o){return Pr(o,e)}if(0<Po.length){Pr(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Pr(on,e),an!==null&&Pr(an,e),ln!==null&&Pr(ln,e),Xr.forEach(t),Zr.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&en.shift()}var lr=Kt.ReactCurrentBatchConfig,si=!0;function dh(e,t,n,r){var o=se,i=lr.transition;lr.transition=null;try{se=1,Es(e,t,n,r)}finally{se=o,lr.transition=i}}function fh(e,t,n,r){var o=se,i=lr.transition;lr.transition=null;try{se=4,Es(e,t,n,r)}finally{se=o,lr.transition=i}}function Es(e,t,n,r){if(si){var o=El(e,t,n,r);if(o===null)Ua(e,t,r,ui,n),$u(e,r);else if(uh(o,e,t,n,r))r.stopPropagation();else if($u(e,r),t&4&&-1<sh.indexOf(e)){for(;o!==null;){var i=go(o);if(i!==null&&Vd(i),i=El(e,t,n,r),i===null&&Ua(e,t,r,ui,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var ui=null;function El(e,t,n,r){if(ui=null,e=ks(r),e=En(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function Qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jm()){case Ss:return 1;case Md:return 4;case ai:case eh:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var nn=null,bs=null,Qo=null;function Yd(){if(Qo)return Qo;var e,t=bs,n=t.length,r,o="value"in nn?nn.value:nn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Qo=o.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Vu(){return!1}function lt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oo:Vu,this.isPropagationStopped=Vu,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=lt(kr),ho=ke({},kr,{view:0,detail:0}),ph=lt(ho),za,La,Or,Di=ke({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(za=e.screenX-Or.screenX,La=e.screenY-Or.screenY):La=za=0,Or=e),za)},movementY:function(e){return"movementY"in e?e.movementY:La}}),Uu=lt(Di),mh=ke({},Di,{dataTransfer:0}),hh=lt(mh),gh=ke({},ho,{relatedTarget:0}),Ra=lt(gh),vh=ke({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=lt(vh),xh=ke({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wh=lt(xh),kh=ke({},kr,{data:0}),Bu=lt(kh),Sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ch[e])?!!t[e]:!1}function Ps(){return Eh}var bh=ke({},ho,{key:function(e){if(e.key){var t=Sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nh=lt(bh),Ph=ke({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=lt(Ph),Oh=ke({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Th=lt(Oh),jh=ke({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ah=lt(jh),zh=ke({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=lt(zh),Rh=[9,13,27,32],Os=Ht&&"CompositionEvent"in window,Ir=null;Ht&&"documentMode"in document&&(Ir=document.documentMode);var Dh=Ht&&"TextEvent"in window&&!Ir,qd=Ht&&(!Os||Ir&&8<Ir&&11>=Ir),Hu=String.fromCharCode(32),Qu=!1;function Kd(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Mh(e,t){switch(e){case"compositionend":return Gd(t);case"keypress":return t.which!==32?null:(Qu=!0,Hu);case"textInput":return e=t.data,e===Hu&&Qu?null:e;default:return null}}function Fh(e,t){if(Hn)return e==="compositionend"||!Os&&Kd(e,t)?(e=Yd(),Qo=bs=nn=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var $h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$h[e.type]:t==="textarea"}function Xd(e,t,n,r){Pd(r),t=ci(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,eo=null;function Ih(e){uf(e,0)}function Mi(e){var t=qn(e);if(kd(t))return e}function Vh(e,t){if(e==="change")return t}var Zd=!1;if(Ht){var Da;if(Ht){var Ma="oninput"in document;if(!Ma){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Ma=typeof qu.oninput=="function"}Da=Ma}else Da=!1;Zd=Da&&(!document.documentMode||9<document.documentMode)}function Ku(){Vr&&(Vr.detachEvent("onpropertychange",Jd),eo=Vr=null)}function Jd(e){if(e.propertyName==="value"&&Mi(eo)){var t=[];Xd(t,eo,e,ks(e)),Ad(Ih,t)}}function Uh(e,t,n){e==="focusin"?(Ku(),Vr=t,eo=n,Vr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Ku()}function Bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(eo)}function Wh(e,t){if(e==="click")return Mi(t)}function Hh(e,t){if(e==="input"||e==="change")return Mi(t)}function Qh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Qh;function to(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ll.call(t,o)||!Nt(e[o],t[o]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xu(e,t){var n=Gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gu(n)}}function ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tf(){for(var e=window,t=ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yh(e){var t=tf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ef(n.ownerDocument.documentElement,n)){if(r!==null&&Ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xu(n,i);var l=Xu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qh=Ht&&"documentMode"in document&&11>=document.documentMode,Qn=null,bl=null,Ur=null,Nl=!1;function Zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||Qn==null||Qn!==ri(r)||(r=Qn,"selectionStart"in r&&Ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&to(Ur,r)||(Ur=r,r=ci(bl,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Fa={},nf={};Ht&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Fi(e){if(Fa[e])return Fa[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nf)return Fa[e]=t[n];return e}var rf=Fi("animationend"),of=Fi("animationiteration"),af=Fi("animationstart"),lf=Fi("transitionend"),sf=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){sf.set(e,t),Mn(t,[e])}for(var $a=0;$a<Ju.length;$a++){var Ia=Ju[$a],Kh=Ia.toLowerCase(),Gh=Ia[0].toUpperCase()+Ia.slice(1);xn(Kh,"on"+Gh)}xn(rf,"onAnimationEnd");xn(of,"onAnimationIteration");xn(af,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(lf,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Km(r,t,void 0,e),e.currentTarget=null}function uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;ec(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;ec(o,a,s),i=u}}}if(ii)throw e=Sl,ii=!1,Sl=null,e}function me(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(cf(t,e,2,!1),n.add(r))}function Va(e,t,n){var r=0;t&&(r|=4),cf(n,e,r,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function no(e){if(!e[jo]){e[jo]=!0,gd.forEach(function(n){n!=="selectionchange"&&(Xh.has(n)||Va(n,!1,e),Va(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,Va("selectionchange",!1,t))}}function cf(e,t,n,r){switch(Qd(t)){case 1:var o=dh;break;case 4:o=fh;break;default:o=Es}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=En(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Ad(function(){var s=i,c=ks(n),f=[];e:{var d=sf.get(e);if(d!==void 0){var p=Ns,g=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":p=Nh;break;case"focusin":g="focus",p=Ra;break;case"focusout":g="blur",p=Ra;break;case"beforeblur":case"afterblur":p=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Th;break;case rf:case of:case af:p=yh;break;case lf:p=Ah;break;case"scroll":p=ph;break;case"wheel":p=Lh;break;case"copy":case"cut":case"paste":p=wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wu}var x=(t&4)!==0,S=!x&&e==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var m=s,v;m!==null;){v=m;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,h!==null&&(_=Gr(m,h),_!=null&&x.push(ro(m,_,v)))),S)break;m=m.return}0<x.length&&(d=new p(d,g,null,n,c),f.push({event:d,listeners:x}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==xl&&(g=n.relatedTarget||n.fromElement)&&(En(g)||g[Qt]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=s,g=g?En(g):null,g!==null&&(S=Fn(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=s),p!==g)){if(x=Uu,_="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Wu,_="onPointerLeave",h="onPointerEnter",m="pointer"),S=p==null?d:qn(p),v=g==null?d:qn(g),d=new x(_,m+"leave",p,n,c),d.target=S,d.relatedTarget=v,_=null,En(c)===s&&(x=new x(h,m+"enter",g,n,c),x.target=v,x.relatedTarget=S,_=x),S=_,p&&g)t:{for(x=p,h=g,m=0,v=x;v;v=Vn(v))m++;for(v=0,_=h;_;_=Vn(_))v++;for(;0<m-v;)x=Vn(x),m--;for(;0<v-m;)h=Vn(h),v--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=Vn(x),h=Vn(h)}x=null}else x=null;p!==null&&tc(f,d,p,x,!1),g!==null&&S!==null&&tc(f,S,g,x,!0)}}e:{if(d=s?qn(s):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var O=Vh;else if(Yu(d))if(Zd)O=Hh;else{O=Bh;var T=Uh}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=Wh);if(O&&(O=O(e,s))){Xd(f,O,n,c);break e}T&&T(e,d,s),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ml(d,"number",d.value)}switch(T=s?qn(s):window,e){case"focusin":(Yu(T)||T.contentEditable==="true")&&(Qn=T,bl=s,Ur=null);break;case"focusout":Ur=bl=Qn=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,Zu(f,n,c);break;case"selectionchange":if(qh)break;case"keydown":case"keyup":Zu(f,n,c)}var C;if(Os)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hn?Kd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(qd&&n.locale!=="ko"&&(Hn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hn&&(C=Yd()):(nn=c,bs="value"in nn?nn.value:nn.textContent,Hn=!0)),T=ci(s,P),0<T.length&&(P=new Bu(P,e,null,n,c),f.push({event:P,listeners:T}),C?P.data=C:(C=Gd(n),C!==null&&(P.data=C)))),(C=Dh?Mh(e,n):Fh(e,n))&&(s=ci(s,"onBeforeInput"),0<s.length&&(c=new Bu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:s}),c.data=C))}uf(f,t)})}function ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Gr(e,n),i!=null&&r.unshift(ro(e,i,o)),i=Gr(e,t),i!=null&&r.push(ro(e,i,o))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Gr(n,i),u!=null&&l.unshift(ro(n,u,a))):o||(u=Gr(n,i),u!=null&&l.push(ro(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zh=/\r\n?/g,Jh=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Jh,"")}function Ao(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(I(425))}function di(){}var Pl=null,Ol=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof rc!="undefined"?function(e){return rc.resolve(null).then(e).catch(n0)}:jl;function n0(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jr(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Sr,oo="__reactProps$"+Sr,Qt="__reactContainer$"+Sr,Al="__reactEvents$"+Sr,r0="__reactListeners$"+Sr,o0="__reactHandles$"+Sr;function En(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=oc(e);e!==null;){if(n=e[Lt])return n;e=oc(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[Lt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function $i(e){return e[oo]||null}var zl=[],Kn=-1;function wn(e){return{current:e}}function he(e){0>Kn||(e.current=zl[Kn],zl[Kn]=null,Kn--)}function pe(e,t){Kn++,zl[Kn]=e.current,e.current=t}var gn={},Ue=wn(gn),Ze=wn(!1),jn=gn;function dr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Je(e){return e=e.childContextTypes,e!=null}function fi(){he(Ze),he(Ue)}function ic(e,t,n){if(Ue.current!==gn)throw Error(I(168));pe(Ue,t),pe(Ze,n)}function df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,Um(e)||"Unknown",o));return ke({},n,r)}function pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,jn=Ue.current,pe(Ue,e),pe(Ze,Ze.current),!0}function ac(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=df(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(Ue),pe(Ue,e)):he(Ze),pe(Ze,n)}var Vt=null,Ii=!1,Wa=!1;function ff(e){Vt===null?Vt=[e]:Vt.push(e)}function i0(e){Ii=!0,ff(e)}function kn(){if(!Wa&&Vt!==null){Wa=!0;var e=0,t=se;try{var n=Vt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Ii=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),Dd(Ss,kn),o}finally{se=t,Wa=!1}}return null}var Gn=[],Xn=0,mi=null,hi=0,ft=[],pt=0,An=null,Ut=1,Bt="";function Sn(e,t){Gn[Xn++]=hi,Gn[Xn++]=mi,mi=e,hi=t}function pf(e,t,n){ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=An,An=e;var r=Ut;e=Bt;var o=32-Et(r)-1;r&=~(1<<o),n+=1;var i=32-Et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ut=1<<32-Et(t)+o|n<<o|r,Bt=i+e}else Ut=1<<i|n<<o|r,Bt=e}function js(e){e.return!==null&&(Sn(e,1),pf(e,1,0))}function As(e){for(;e===mi;)mi=Gn[--Xn],Gn[Xn]=null,hi=Gn[--Xn],Gn[Xn]=null;for(;e===An;)An=ft[--pt],ft[pt]=null,Bt=ft[--pt],ft[pt]=null,Ut=ft[--pt],ft[pt]=null}var ot=null,nt=null,ve=!1,St=null;function mf(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,nt=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,nt=null,!0):!1;default:return!1}}function Ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(ve){var t=nt;if(t){var n=t;if(!lc(e,t)){if(Ll(e))throw Error(I(418));t=sn(n.nextSibling);var r=ot;t&&lc(e,t)?mf(r,n):(e.flags=e.flags&-4097|2,ve=!1,ot=e)}}else{if(Ll(e))throw Error(I(418));e.flags=e.flags&-4097|2,ve=!1,ot=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function zo(e){if(e!==ot)return!1;if(!ve)return sc(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=nt)){if(Ll(e))throw hf(),Error(I(418));for(;t;)mf(e,t),t=sn(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=ot?sn(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=nt;e;)e=sn(e.nextSibling)}function fr(){nt=ot=null,ve=!1}function zs(e){St===null?St=[e]:St.push(e)}var a0=Kt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var gi=wn(null),vi=null,Zn=null,Ls=null;function Rs(){Ls=Zn=vi=null}function Ds(e){var t=gi.current;he(gi),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){vi=e,Ls=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(vi===null)throw Error(I(308));Zn=e,vi.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var bn=null;function Ms(e){bn===null?bn=[e]:bn.push(e)}function gf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ms(t)):(n.next=o.next,o.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Yt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ms(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yt(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}function uc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yi(e,t,n,r){var o=e.updateQueue;Jt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==l&&(a===null?c.firstBaseUpdate=s:a.next=s,c.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;l=0,c=s=u=null,a=i;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,x=a;switch(d=t,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=ke({},f,d);break e;case 2:Jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(s=c=p,u=f):c=c.next=p,l|=d;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;d=a,a=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(1);if(c===null&&(u=f),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=f}}function cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var yf=new hd.Component().refs;function Ml(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),o=dn(e),i=Wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(bt(t,e,o,r),qo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),o=dn(e),i=Wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=un(e,i,o),t!==null&&(bt(t,e,o,r),qo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=dn(e),o=Wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=un(e,o,r),t!==null&&(bt(t,e,r,n),qo(t,e,r))}};function dc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!to(n,r)||!to(o,i):!0}function xf(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=gt(i):(o=Je(t)?jn:Ue.current,r=t.contextTypes,i=(r=r!=null)?dr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=yf,Fs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=gt(i):(i=Je(t)?jn:Ue.current,o.context=dr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ml(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vi.enqueueReplaceState(o,o.state,null),yi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===yf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function wf(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=fn(h,m),h.index=0,h.sibling=null,h}function i(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,_){return m===null||m.tag!==6?(m=Xa(v,h.mode,_),m.return=h,m):(m=o(m,v),m.return=h,m)}function u(h,m,v,_){var O=v.type;return O===Wn?c(h,m,v.props.children,_,v.key):m!==null&&(m.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Zt&&pc(O)===m.type)?(_=o(m,v.props),_.ref=Tr(h,m,v),_.return=h,_):(_=ei(v.type,v.key,v.props,null,h.mode,_),_.ref=Tr(h,m,v),_.return=h,_)}function s(h,m,v,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Za(v,h.mode,_),m.return=h,m):(m=o(m,v.children||[]),m.return=h,m)}function c(h,m,v,_,O){return m===null||m.tag!==7?(m=Tn(v,h.mode,_,O),m.return=h,m):(m=o(m,v),m.return=h,m)}function f(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xa(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:return v=ei(m.type,m.key,m.props,null,h.mode,v),v.ref=Tr(h,null,m),v.return=h,v;case Bn:return m=Za(m,h.mode,v),m.return=h,m;case Zt:var _=m._init;return f(h,_(m._payload),v)}if(Rr(m)||Er(m))return m=Tn(m,h.mode,v,null),m.return=h,m;Lo(h,m)}return null}function d(h,m,v,_){var O=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:a(h,m,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _o:return v.key===O?u(h,m,v,_):null;case Bn:return v.key===O?s(h,m,v,_):null;case Zt:return O=v._init,d(h,m,O(v._payload),_)}if(Rr(v)||Er(v))return O!==null?null:c(h,m,v,_,null);Lo(h,v)}return null}function p(h,m,v,_,O){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(v)||null,a(m,h,""+_,O);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _o:return h=h.get(_.key===null?v:_.key)||null,u(m,h,_,O);case Bn:return h=h.get(_.key===null?v:_.key)||null,s(m,h,_,O);case Zt:var T=_._init;return p(h,m,v,T(_._payload),O)}if(Rr(_)||Er(_))return h=h.get(v)||null,c(m,h,_,O,null);Lo(m,_)}return null}function g(h,m,v,_){for(var O=null,T=null,C=m,P=m=0,R=null;C!==null&&P<v.length;P++){C.index>P?(R=C,C=null):R=C.sibling;var A=d(h,C,v[P],_);if(A===null){C===null&&(C=R);break}e&&C&&A.alternate===null&&t(h,C),m=i(A,m,P),T===null?O=A:T.sibling=A,T=A,C=R}if(P===v.length)return n(h,C),ve&&Sn(h,P),O;if(C===null){for(;P<v.length;P++)C=f(h,v[P],_),C!==null&&(m=i(C,m,P),T===null?O=C:T.sibling=C,T=C);return ve&&Sn(h,P),O}for(C=r(h,C);P<v.length;P++)R=p(C,h,P,v[P],_),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?P:R.key),m=i(R,m,P),T===null?O=R:T.sibling=R,T=R);return e&&C.forEach(function(L){return t(h,L)}),ve&&Sn(h,P),O}function x(h,m,v,_){var O=Er(v);if(typeof O!="function")throw Error(I(150));if(v=O.call(v),v==null)throw Error(I(151));for(var T=O=null,C=m,P=m=0,R=null,A=v.next();C!==null&&!A.done;P++,A=v.next()){C.index>P?(R=C,C=null):R=C.sibling;var L=d(h,C,A.value,_);if(L===null){C===null&&(C=R);break}e&&C&&L.alternate===null&&t(h,C),m=i(L,m,P),T===null?O=L:T.sibling=L,T=L,C=R}if(A.done)return n(h,C),ve&&Sn(h,P),O;if(C===null){for(;!A.done;P++,A=v.next())A=f(h,A.value,_),A!==null&&(m=i(A,m,P),T===null?O=A:T.sibling=A,T=A);return ve&&Sn(h,P),O}for(C=r(h,C);!A.done;P++,A=v.next())A=p(C,h,P,A.value,_),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?P:A.key),m=i(A,m,P),T===null?O=A:T.sibling=A,T=A);return e&&C.forEach(function(W){return t(h,W)}),ve&&Sn(h,P),O}function S(h,m,v,_){if(typeof v=="object"&&v!==null&&v.type===Wn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _o:e:{for(var O=v.key,T=m;T!==null;){if(T.key===O){if(O=v.type,O===Wn){if(T.tag===7){n(h,T.sibling),m=o(T,v.props.children),m.return=h,h=m;break e}}else if(T.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Zt&&pc(O)===T.type){n(h,T.sibling),m=o(T,v.props),m.ref=Tr(h,T,v),m.return=h,h=m;break e}n(h,T);break}else t(h,T);T=T.sibling}v.type===Wn?(m=Tn(v.props.children,h.mode,_,v.key),m.return=h,h=m):(_=ei(v.type,v.key,v.props,null,h.mode,_),_.ref=Tr(h,m,v),_.return=h,h=_)}return l(h);case Bn:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=o(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Za(v,h.mode,_),m.return=h,h=m}return l(h);case Zt:return T=v._init,S(h,m,T(v._payload),_)}if(Rr(v))return g(h,m,v,_);if(Er(v))return x(h,m,v,_);Lo(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,v),m.return=h,h=m):(n(h,m),m=Xa(v,h.mode,_),m.return=h,h=m),l(h)):n(h,m)}return S}var pr=wf(!0),kf=wf(!1),vo={},Mt=wn(vo),io=wn(vo),ao=wn(vo);function Nn(e){if(e===vo)throw Error(I(174));return e}function $s(e,t){switch(pe(ao,t),pe(io,e),pe(Mt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}he(Mt),pe(Mt,t)}function mr(){he(Mt),he(io),he(ao)}function Sf(e){Nn(ao.current);var t=Nn(Mt.current),n=gl(t,e.type);t!==n&&(pe(io,e),pe(Mt,n))}function Is(e){io.current===e&&(he(Mt),he(io))}var xe=wn(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function Vs(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var Ko=Kt.ReactCurrentDispatcher,Qa=Kt.ReactCurrentBatchConfig,zn=0,we=null,Oe=null,Ae=null,wi=!1,Br=!1,lo=0,l0=0;function Fe(){throw Error(I(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,o,i){if(zn=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?d0:f0,e=n(r,o),Br){i=0;do{if(Br=!1,lo=0,25<=i)throw Error(I(301));i+=1,Ae=Oe=null,t.updateQueue=null,Ko.current=p0,e=n(r,o)}while(Br)}if(Ko.current=ki,t=Oe!==null&&Oe.next!==null,zn=0,Ae=Oe=we=null,wi=!1,t)throw Error(I(300));return e}function Ws(){var e=lo!==0;return lo=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function vt(){if(Oe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Ae===null?we.memoizedState:Ae.next;if(t!==null)Ae=t,Oe=e;else{if(e===null)throw Error(I(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ae===null?we.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function so(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=vt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Oe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var c=s.lane;if((zn&c)===c)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,we.lanes|=c,Ln|=c}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,Nt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,we.lanes|=i,Ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qa(e){var t=vt(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Nt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _f(){}function Cf(e,t){var n=we,r=vt(),o=t(),i=!Nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Xe=!0),r=r.queue,Hs(Nf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,uo(9,bf.bind(null,n,r,o,t),void 0,null),ze===null)throw Error(I(349));(zn&30)!==0||Ef(n,t,o)}return o}function Ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bf(e,t,n,r){t.value=n,t.getSnapshot=r,Pf(t)&&Of(e)}function Nf(e,t,n){return n(function(){Pf(t)&&Of(e)})}function Pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function Of(e){var t=Yt(e,1);t!==null&&bt(t,e,1,-1)}function mc(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:e},t.queue=e,e=e.dispatch=c0.bind(null,we,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tf(){return vt().memoizedState}function Go(e,t,n,r){var o=zt();we.flags|=e,o.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function Ui(e,t,n,r){var o=vt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var l=Oe.memoizedState;if(i=l.destroy,r!==null&&Us(r,l.deps)){o.memoizedState=uo(t,n,i,r);return}}we.flags|=e,o.memoizedState=uo(1|t,n,i,r)}function hc(e,t){return Go(8390656,8,e,t)}function Hs(e,t){return Ui(2048,8,e,t)}function jf(e,t){return Ui(4,2,e,t)}function Af(e,t){return Ui(4,4,e,t)}function zf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lf(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4,4,zf.bind(null,t,e),n)}function Qs(){}function Rf(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Df(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mf(e,t,n){return(zn&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n):(Nt(n,t)||(n=$d(),we.lanes|=n,Ln|=n,e.baseState=!0),t)}function s0(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),t()}finally{se=n,Qa.transition=r}}function Ff(){return vt().memoizedState}function u0(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$f(e))If(t,n);else if(n=gf(e,t,n,r),n!==null){var o=Ye();bt(n,e,r,o),Vf(n,t,r)}}function c0(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($f(e))If(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Nt(a,l)){var u=t.interleaved;u===null?(o.next=o,Ms(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=gf(e,t,o,r),n!==null&&(o=Ye(),bt(n,e,r,o),Vf(n,t,r))}}function $f(e){var t=e.alternate;return e===we||t!==null&&t===we}function If(e,t){Br=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}var ki={readContext:gt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},d0={readContext:gt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,zf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u0.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:mc,useDebugValue:Qs,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=mc(!1),t=e[0];return e=s0.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,o=zt();if(ve){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ze===null)throw Error(I(349));(zn&30)!==0||Ef(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,hc(Nf.bind(null,r,i,e),[e]),r.flags|=2048,uo(9,bf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=zt(),t=ze.identifierPrefix;if(ve){var n=Bt,r=Ut;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},f0={readContext:gt,useCallback:Rf,useContext:gt,useEffect:Hs,useImperativeHandle:Lf,useInsertionEffect:jf,useLayoutEffect:Af,useMemo:Df,useReducer:Ya,useRef:Tf,useState:function(){return Ya(so)},useDebugValue:Qs,useDeferredValue:function(e){var t=vt();return Mf(t,Oe.memoizedState,e)},useTransition:function(){var e=Ya(so)[0],t=vt().memoizedState;return[e,t]},useMutableSource:_f,useSyncExternalStore:Cf,useId:Ff,unstable_isNewReconciler:!1},p0={readContext:gt,useCallback:Rf,useContext:gt,useEffect:Hs,useImperativeHandle:Lf,useInsertionEffect:jf,useLayoutEffect:Af,useMemo:Df,useReducer:qa,useRef:Tf,useState:function(){return qa(so)},useDebugValue:Qs,useDeferredValue:function(e){var t=vt();return Oe===null?t.memoizedState=e:Mf(t,Oe.memoizedState,e)},useTransition:function(){var e=qa(so)[0],t=vt().memoizedState;return[e,t]},useMutableSource:_f,useSyncExternalStore:Cf,useId:Ff,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ka(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function Uf(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Kl=r),$l(e,t)},n}function Bf(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$l(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=P0.bind(null,e,t,n),t.then(e,e))}function vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var h0=Kt.ReactCurrentOwner,Xe=!1;function Qe(e,t,n,r){t.child=e===null?kf(t,null,n,r):pr(t,e.child,n,r)}function xc(e,t,n,r,o){n=n.render;var i=t.ref;return sr(t,o),r=Bs(e,t,n,r,i,o),n=Ws(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(ve&&n&&js(t),t.flags|=1,Qe(e,t,r,o),t.child)}function wc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!eu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wf(e,t,i,r,o)):(e=ei(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(l,r)&&e.ref===t.ref)return qt(e,t,o)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(to(i,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,qt(e,t,o)}return Il(e,t,n,r,o)}function Hf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(er,tt),tt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(er,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(er,tt),tt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(er,tt),tt|=r;return Qe(e,t,o,n),t.child}function Qf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,o){var i=Je(n)?jn:Ue.current;return i=dr(t,i),sr(t,o),n=Bs(e,t,n,r,i,o),r=Ws(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(ve&&r&&js(t),t.flags|=1,Qe(e,t,n,o),t.child)}function kc(e,t,n,r,o){if(Je(n)){var i=!0;pi(t)}else i=!1;if(sr(t,o),t.stateNode===null)Xo(e,t),xf(t,n,r),Fl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=gt(s):(s=Je(n)?jn:Ue.current,s=dr(t,s));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&fc(t,l,r,s),Jt=!1;var d=t.memoizedState;l.state=d,yi(t,r,l,o),u=t.memoizedState,a!==r||d!==u||Ze.current||Jt?(typeof c=="function"&&(Ml(t,n,c,r),u=t.memoizedState),(a=Jt||dc(t,n,a,r,d,u,s))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,vf(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:wt(t.type,a),l.props=s,f=t.pendingProps,d=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=gt(u):(u=Je(n)?jn:Ue.current,u=dr(t,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||d!==u)&&fc(t,l,r,u),Jt=!1,d=t.memoizedState,l.state=d,yi(t,r,l,o);var g=t.memoizedState;a!==f||d!==g||Ze.current||Jt?(typeof p=="function"&&(Ml(t,n,p,r),g=t.memoizedState),(s=Jt||dc(t,n,s,r,d,g,u)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,i,o)}function Vl(e,t,n,r,o,i){Qf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ac(t,n,!1),qt(e,t,i);r=t.stateNode,h0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=pr(t,e.child,null,i),t.child=pr(t,null,a,i)):Qe(e,t,a,i),t.memoizedState=r.state,o&&ac(t,n,!0),t.child}function Yf(e){var t=e.stateNode;t.pendingContext?ic(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ic(e,t.context,!1),$s(e,t.containerInfo)}function Sc(e,t,n,r,o){return fr(),zs(o),t.flags|=256,Qe(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,o=xe.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),pe(xe,o&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Hi(l,r,0,null),e=Tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bl(n),t.memoizedState=Ul,e):Ys(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return g0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=fn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=fn(a,i):(i=Tn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Bl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=Hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&zs(r),pr(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ka(Error(I(422))),Ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Hi({mode:"visible",children:r.children},o,0,null),i=Tn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&pr(t,e.child,null,l),t.child.memoizedState=Bl(l),t.memoizedState=Ul,i);if((t.mode&1)===0)return Ro(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(I(419)),r=Ka(i,r,void 0),Ro(e,t,l,r)}if(a=(l&e.childLanes)!==0,Xe||a){if(r=ze,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Yt(e,o),bt(r,e,o,-1))}return Js(),r=Ka(Error(I(421))),Ro(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=O0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,nt=sn(o.nextSibling),ot=t,ve=!0,St=null,e!==null&&(ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=An,Ut=e.id,Bt=e.overflow,An=t),t=Ys(t,r.children),t.flags|=4096,t)}function _c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function Ga(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Qe(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,n,t);else if(e.tag===19)_c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ga(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ga(t,!0,n,null,i);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v0(e,t,n){switch(t.tag){case 3:Yf(t),fr();break;case 5:Sf(t);break;case 1:Je(t.type)&&pi(t);break;case 4:$s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;pe(gi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qf(e,t,n):(pe(xe,xe.current&1),e=qt(e,t,n),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Kf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,n)}return qt(e,t,n)}var Gf,Wl,Xf,Zf;Gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};Xf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(Mt.current);var i=null;switch(n){case"input":o=fl(e,o),r=fl(e,r),i=[];break;case"select":o=ke({},o,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":o=hl(e,o),r=hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}vl(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(qr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&me("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Zf=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y0(e,t,n){var r=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Je(t.type)&&fi(),$e(t),null;case 3:return r=t.stateNode,mr(),he(Ze),he(Ue),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Zl(St),St=null))),Wl(e,t),$e(t),null;case 5:Is(t);var o=Nn(ao.current);if(n=t.type,e!==null&&t.stateNode!=null)Xf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return $e(t),null}if(e=Nn(Mt.current),zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Lt]=t,r[oo]=i,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)me(Mr[o],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Au(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":Lu(r,i),me("invalid",r)}vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),o=["children",""+a]):qr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&me("scroll",r)}switch(n){case"input":Co(r),zu(r,i,!0);break;case"textarea":Co(r),Ru(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Lt]=t,e[oo]=r,Gf(e,t,!1,!1),t.stateNode=e;e:{switch(l=yl(n,r),n){case"dialog":me("cancel",e),me("close",e),o=r;break;case"iframe":case"object":case"embed":me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)me(Mr[o],e);o=r;break;case"source":me("error",e),o=r;break;case"img":case"image":case"link":me("error",e),me("load",e),o=r;break;case"details":me("toggle",e),o=r;break;case"input":Au(e,r),o=fl(e,r),me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ke({},r,{value:void 0}),me("invalid",e);break;case"textarea":Lu(e,r),o=hl(e,r),me("invalid",e);break;default:o=r}vl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Nd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ed(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kr(e,u):typeof u=="number"&&Kr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",e):u!=null&&vs(e,i,u,l))}switch(n){case"input":Co(e),zu(e,r,!1);break;case"textarea":Co(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?or(e,!!r.multiple,i,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Zf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Nn(ao.current),Nn(Mt.current),zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(i=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return $e(t),null;case 13:if(he(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hf(),fr(),t.flags|=98560,i=!1;else if(i=zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Lt]=t}else fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),i=!1}else St!==null&&(Zl(St),St=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?je===0&&(je=3):Js())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return mr(),Wl(e,t),e===null&&no(t.stateNode.containerInfo),$e(t),null;case 10:return Ds(t.type._context),$e(t),null;case 17:return Je(t.type)&&fi(),$e(t),null;case 19:if(he(xe),i=t.memoizedState,i===null)return $e(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)jr(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=xi(e),l!==null){for(t.flags|=128,jr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>gr&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=xi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ve)return $e(t),null}else 2*Ee()-i.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function x0(e,t){switch(As(t),t.tag){case 1:return Je(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),he(Ze),he(Ue),Vs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(he(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(xe),null;case 4:return mr(),null;case 10:return Ds(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Do=!1,Ve=!1,w0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Cc=!1;function k0(e,t){if(Pl=si,e=tf(),Ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===n&&++s===o&&(a=l),d===i&&++c===r&&(u=l),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},si=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var g=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,S=g.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:wt(t.type,x),S);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){Ce(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return g=Cc,Cc=!1,g}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hl(t,n,i)}o=o.next}while(o!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[oo],delete t[Al],delete t[r0],delete t[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var Re=null,kt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 5:Ve||Jn(n,t);case 6:var r=Re,o=kt;Re=null,Gt(e,t,n),Re=r,kt=o,Re!==null&&(kt?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(kt?(e=Re,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),Jr(e)):Ba(Re,n.stateNode));break;case 4:r=Re,o=kt,Re=n.stateNode.containerInfo,kt=!0,Gt(e,t,n),Re=r,kt=o;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Hl(n,t,l),o=o.next}while(o!==r)}Gt(e,t,n);break;case 1:if(!Ve&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Gt(e,t,n),Ve=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w0),t.forEach(function(r){var o=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,kt=!1;break e;case 3:Re=a.stateNode.containerInfo,kt=!0;break e;case 4:Re=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Re===null)throw Error(I(160));tp(i,l,o),Re=null,kt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){Ce(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),At(e),r&4){try{Wr(3,e,e.return),Bi(3,e)}catch(x){Ce(e,e.return,x)}try{Wr(5,e,e.return)}catch(x){Ce(e,e.return,x)}}break;case 1:xt(t,e),At(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(xt(t,e),At(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{Kr(o,"")}catch(x){Ce(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Sd(o,i),yl(a,l);var s=yl(a,i);for(l=0;l<u.length;l+=2){var c=u[l],f=u[l+1];c==="style"?Nd(o,f):c==="dangerouslySetInnerHTML"?Ed(o,f):c==="children"?Kr(o,f):vs(o,c,f,s)}switch(a){case"input":pl(o,i);break;case"textarea":_d(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?or(o,!!i.multiple,p,!1):d!==!!i.multiple&&(i.defaultValue!=null?or(o,!!i.multiple,i.defaultValue,!0):or(o,!!i.multiple,i.multiple?[]:"",!1))}o[oo]=i}catch(x){Ce(e,e.return,x)}}break;case 6:if(xt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){Ce(e,e.return,x)}}break;case 3:if(xt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(x){Ce(e,e.return,x)}break;case 4:xt(t,e),At(e);break;case 13:xt(t,e),At(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Gs=Ee())),r&4&&bc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(s=Ve)||c,xt(t,e),Ve=s):xt(t,e),At(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!c&&(e.mode&1)!==0)for(Z=e,c=e.child;c!==null;){for(f=Z=c;Z!==null;){switch(d=Z,p=d.child,d.tag){case 0:case 11:case 14:case 15:Wr(4,d,d.return);break;case 1:Jn(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){Ce(r,n,x)}}break;case 5:Jn(d,d.return);break;case 22:if(d.memoizedState!==null){Pc(f);continue}}p!==null?(p.return=d,Z=p):Pc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=bd("display",l))}catch(x){Ce(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(x){Ce(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),At(e),r&4&&bc(e);break;case 21:break;default:xt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kr(o,""),r.flags&=-33);var i=Ec(e);ql(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ec(e);Yl(e,a,l);break;default:throw Error(I(161))}}catch(u){Ce(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){Z=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var o=Z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Do;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Ve;a=Do;var s=Ve;if(Do=l,(Ve=u)&&!s)for(Z=o;Z!==null;)l=Z,u=l.child,l.tag===22&&l.memoizedState!==null?Oc(o):u!==null?(u.return=l,Z=u):Oc(o);for(;i!==null;)Z=i,rp(i),i=i.sibling;Z=o,Do=a,Ve=s}Nc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,Z=i):Nc(e)}}function Nc(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&cc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var c=s.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ve||t.flags&512&&Ql(t)}catch(d){Ce(t,t.return,d)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Pc(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Oc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(u){Ce(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Ce(t,o,u)}}var i=t.return;try{Ql(t)}catch(u){Ce(t,i,u)}break;case 5:var l=t.return;try{Ql(t)}catch(u){Ce(t,l,u)}}}catch(u){Ce(t,t.return,u)}if(t===e){Z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Z=a;break}Z=t.return}}var _0=Math.ceil,Si=Kt.ReactCurrentDispatcher,qs=Kt.ReactCurrentOwner,ht=Kt.ReactCurrentBatchConfig,le=0,ze=null,be=null,De=0,tt=0,er=wn(0),je=0,co=null,Ln=0,Wi=0,Ks=0,Hr=null,Ge=null,Gs=0,gr=1/0,It=null,_i=!1,Kl=null,cn=null,Mo=!1,rn=null,Ci=0,Qr=0,Gl=null,Zo=-1,Jo=0;function Ye(){return(le&6)!==0?Ee():Zo!==-1?Zo:Zo=Ee()}function dn(e){return(e.mode&1)===0?1:(le&2)!==0&&De!==0?De&-De:a0.transition!==null?(Jo===0&&(Jo=$d()),Jo):(e=se,e!==0||(e=window.event,e=e===void 0?16:Qd(e.type)),e)}function bt(e,t,n,r){if(50<Qr)throw Qr=0,Gl=null,Error(I(185));mo(e,n,r),((le&2)===0||e!==ze)&&(e===ze&&((le&2)===0&&(Wi|=n),je===4&&tn(e,De)),et(e,r),n===1&&le===0&&(t.mode&1)===0&&(gr=Ee()+500,Ii&&kn()))}function et(e,t){var n=e.callbackNode;ah(e,t);var r=li(e,e===ze?De:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?i0(Tc.bind(null,e)):ff(Tc.bind(null,e)),t0(function(){(le&6)===0&&kn()}),n=null;else{switch(Id(r)){case 1:n=Ss;break;case 4:n=Md;break;case 16:n=ai;break;case 536870912:n=Fd;break;default:n=ai}n=dp(n,op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function op(e,t){if(Zo=-1,Jo=0,(le&6)!==0)throw Error(I(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=li(e,e===ze?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ei(e,r);else{t=r;var o=le;le|=2;var i=ap();(ze!==e||De!==t)&&(It=null,gr=Ee()+500,On(e,t));do try{b0();break}catch(a){ip(e,a)}while(1);Rs(),Si.current=i,le=o,be!==null?t=0:(ze=null,De=0,t=je)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=Xl(e,o))),t===1)throw n=co,On(e,0),tn(e,r),et(e,Ee()),n;if(t===6)tn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!C0(o)&&(t=Ei(e,r),t===2&&(i=_l(e),i!==0&&(r=i,t=Xl(e,i))),t===1))throw n=co,On(e,0),tn(e,r),et(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:_n(e,Ge,It);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Gs+500-Ee(),10<t)){if(li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(_n.bind(null,e,Ge,It),t);break}_n(e,Ge,It);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_0(r/1960))-r,10<r){e.timeoutHandle=jl(_n.bind(null,e,Ge,It),r);break}_n(e,Ge,It);break;case 5:_n(e,Ge,It);break;default:throw Error(I(329))}}}return et(e,Ee()),e.callbackNode===n?op.bind(null,e):null}function Xl(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Zl(t)),e}function Zl(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function C0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Ks,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if((le&6)!==0)throw Error(I(327));ur();var t=li(e,0);if((t&1)===0)return et(e,Ee()),null;var n=Ei(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=co,On(e,0),tn(e,t),et(e,Ee()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ge,It),et(e,Ee()),null}function Xs(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(gr=Ee()+500,Ii&&kn())}}function Rn(e){rn!==null&&rn.tag===0&&(le&6)===0&&ur();var t=le;le|=1;var n=ht.transition,r=se;try{if(ht.transition=null,se=1,e)return e()}finally{se=r,ht.transition=n,le=t,(le&6)===0&&kn()}}function Zs(){tt=er.current,he(er)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e0(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:mr(),he(Ze),he(Ue),Vs();break;case 5:Is(r);break;case 4:mr();break;case 13:he(xe);break;case 19:he(xe);break;case 10:Ds(r.type._context);break;case 22:case 23:Zs()}n=n.return}if(ze=e,be=e=fn(e.current,null),De=tt=t,je=0,co=null,Ks=Wi=Ln=0,Ge=Hr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}bn=null}return e}function ip(e,t){do{var n=be;try{if(Rs(),Ko.current=ki,wi){for(var r=we.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wi=!1}if(zn=0,Ae=Oe=we=null,Br=!1,lo=0,qs.current=null,n===null||n.return===null){je=1,co=t,be=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=De,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=vc(l);if(p!==null){p.flags&=-257,yc(p,l,a,i,t),p.mode&1&&gc(i,s,t),t=p,u=s;var g=t.updateQueue;if(g===null){var x=new Set;x.add(u),t.updateQueue=x}else g.add(u);break e}else{if((t&1)===0){gc(i,s,t),Js();break e}u=Error(I(426))}}else if(ve&&a.mode&1){var S=vc(l);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),yc(S,l,a,i,t),zs(hr(u,a));break e}}i=u=hr(u,a),je!==4&&(je=2),Hr===null?Hr=[i]:Hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Uf(i,u,t);uc(i,h);break e;case 1:a=u;var m=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cn===null||!cn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Bf(i,a,t);uc(i,_);break e}}i=i.return}while(i!==null)}sp(n)}catch(O){t=O,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function ap(){var e=Si.current;return Si.current=ki,e===null?ki:e}function Js(){(je===0||je===3||je===2)&&(je=4),ze===null||(Ln&268435455)===0&&(Wi&268435455)===0||tn(ze,De)}function Ei(e,t){var n=le;le|=2;var r=ap();(ze!==e||De!==t)&&(It=null,On(e,t));do try{E0();break}catch(o){ip(e,o)}while(1);if(Rs(),le=n,Si.current=r,be!==null)throw Error(I(261));return ze=null,De=0,je}function E0(){for(;be!==null;)lp(be)}function b0(){for(;be!==null&&!Xm();)lp(be)}function lp(e){var t=cp(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?sp(e):be=t,qs.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=y0(n,t,tt),n!==null){be=n;return}}else{if(n=x0(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);je===0&&(je=5)}function _n(e,t,n){var r=se,o=ht.transition;try{ht.transition=null,se=1,N0(e,t,n,r)}finally{ht.transition=o,se=r}return null}function N0(e,t,n,r){do ur();while(rn!==null);if((le&6)!==0)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lh(e,i),e===ze&&(be=ze=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Mo||(Mo=!0,dp(ai,function(){return ur(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ht.transition,ht.transition=null;var l=se;se=1;var a=le;le|=4,qs.current=null,k0(e,n),np(n,e),Yh(Ol),si=!!Pl,Ol=Pl=null,e.current=n,S0(n),Zm(),le=a,se=l,ht.transition=i}else e.current=n;if(Mo&&(Mo=!1,rn=e,Ci=o),i=e.pendingLanes,i===0&&(cn=null),th(n.stateNode),et(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=Kl,Kl=null,e;return(Ci&1)!==0&&e.tag!==0&&ur(),i=e.pendingLanes,(i&1)!==0?e===Gl?Qr++:(Qr=0,Gl=e):Qr=0,kn(),null}function ur(){if(rn!==null){var e=Id(Ci),t=ht.transition,n=se;try{if(ht.transition=null,se=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Ci=0,(le&6)!==0)throw Error(I(331));var o=le;for(le|=4,Z=e.current;Z!==null;){var i=Z,l=i.child;if((Z.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(Z=s;Z!==null;){var c=Z;switch(c.tag){case 0:case 11:case 15:Wr(8,c,i)}var f=c.child;if(f!==null)f.return=c,Z=f;else for(;Z!==null;){c=Z;var d=c.sibling,p=c.return;if(Jf(c),c===s){Z=null;break}if(d!==null){d.return=p,Z=d;break}Z=p}}}var g=i.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}Z=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,Z=l;else e:for(;Z!==null;){if(i=Z,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,Z=h;break e}Z=i.return}}var m=e.current;for(Z=m;Z!==null;){l=Z;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,Z=v;else e:for(l=m;Z!==null;){if(a=Z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Bi(9,a)}}catch(O){Ce(a,a.return,O)}if(a===l){Z=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Z=_;break e}Z=a.return}}if(le=o,kn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{se=n,ht.transition=t}}return!1}function jc(e,t,n){t=hr(n,t),t=Uf(e,t,1),e=un(e,t,1),t=Ye(),e!==null&&(mo(e,1,t),et(e,t))}function Ce(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=hr(n,e),e=Bf(t,e,1),t=un(t,e,1),e=Ye(),t!==null&&(mo(t,1,e),et(t,e));break}}t=t.return}}function P0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(De&n)===n&&(je===4||je===3&&(De&130023424)===De&&500>Ee()-Gs?On(e,0):Ks|=n),et(e,t)}function up(e,t){t===0&&((e.mode&1)===0?t=1:(t=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=Ye();e=Yt(e,t),e!==null&&(mo(e,t,n),et(e,n))}function O0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Xe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Xe=!1,v0(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,ve&&(t.flags&1048576)!==0&&pf(t,hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var o=dr(t,Ue.current);sr(t,n),o=Bs(null,t,r,e,o,n);var i=Ws();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(i=!0,pi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(t),o.updater=Vi,t.stateNode=o,o._reactInternals=t,Fl(t,r,e,n),t=Vl(null,t,r,!0,i,n)):(t.tag=0,ve&&i&&js(t),Qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=A0(r),e=wt(r,e),o){case 0:t=Il(null,t,r,e,n);break e;case 1:t=kc(null,t,r,e,n);break e;case 11:t=xc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,wt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),kc(e,t,r,o,n);case 3:e:{if(Yf(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vf(e,t),yi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=hr(Error(I(423)),t),t=Sc(e,t,r,n,o);break e}else if(r!==o){o=hr(Error(I(424)),t),t=Sc(e,t,r,n,o);break e}else for(nt=sn(t.stateNode.containerInfo.firstChild),ot=t,ve=!0,St=null,n=kf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===o){t=qt(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return Sf(t),e===null&&Rl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Tl(r,o)?l=null:i!==null&&Tl(r,i)&&(t.flags|=32),Qf(e,t),Qe(e,t,l,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return qf(e,t,n);case 4:return $s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),xc(e,t,r,o,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,pe(gi,r._currentValue),r._currentValue=l,i!==null)if(Nt(i.value,l)){if(i.children===o.children&&!Ze.current){t=qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Wt(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var c=s.pending;c===null?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Dl(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(I(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Dl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sr(t,n),o=gt(o),r=r(o),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),wc(e,t,r,o,n);case 15:return Wf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Xo(e,t),t.tag=1,Je(r)?(e=!0,pi(t)):e=!1,sr(t,n),xf(t,r,o),Fl(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return Kf(e,t,n);case 22:return Hf(e,t,n)}throw Error(I(156,t.tag))};function dp(e,t){return Dd(e,t)}function j0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new j0(e,t,n,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A0(e){if(typeof e=="function")return eu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===ws)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")eu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return Tn(n.children,o,i,t);case ys:l=8,o|=8;break;case sl:return e=mt(12,n,t,o|2),e.elementType=sl,e.lanes=i,e;case ul:return e=mt(13,n,t,o),e.elementType=ul,e.lanes=i,e;case cl:return e=mt(19,n,t,o),e.elementType=cl,e.lanes=i,e;case xd:return Hi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:l=10;break e;case yd:l=9;break e;case xs:l=11;break e;case ws:l=14;break e;case Zt:l=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=mt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Tn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Hi(e,t,n,r){return e=mt(22,e,r,t),e.elementType=xd,e.lanes=n,e.stateNode={isHidden:!1},e}function Xa(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Za(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function tu(e,t,n,r,o,i,l,a,u){return e=new z0(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(i),e}function L0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fp(e){if(!e)return gn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Je(n))return df(e,n,t)}return t}function pp(e,t,n,r,o,i,l,a,u){return e=tu(n,r,!0,e,o,i,l,a,u),e.context=fp(null),n=e.current,r=Ye(),o=dn(n),i=Wt(r,o),i.callback=t!=null?t:null,un(n,i,o),e.current.lanes=o,mo(e,o,r),et(e,r),e}function Qi(e,t,n,r){var o=t.current,i=Ye(),l=dn(o);return n=fp(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(o,t,l),e!==null&&(bt(e,o,l,i),qo(e,o,l)),l}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function R0(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ru(e){this._internalRoot=e}Yi.prototype.render=ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Qi(e,t,null,null)};Yi.prototype.unmount=ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){Qi(null,e,null,null)}),t[Qt]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Hd(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function D0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=bi(l);i.call(s)}}var l=pp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[Qt]=l.current,no(e.nodeType===8?e.parentNode:e),Rn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=bi(u);a.call(s)}}var u=tu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=u,e[Qt]=u.current,no(e.nodeType===8?e.parentNode:e),Rn(function(){Qi(t,u,n,r)}),u}function Ki(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=bi(l);a.call(u)}}Qi(t,l,e,o)}else l=D0(n,t,e,o,r);return bi(l)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(_s(t,n|1),et(t,Ee()),(le&6)===0&&(gr=Ee()+500,kn()))}break;case 13:Rn(function(){var r=Yt(e,1);if(r!==null){var o=Ye();bt(r,e,1,o)}}),nu(e,1)}};Cs=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ye();bt(t,e,134217728,n)}nu(e,134217728)}};Ud=function(e){if(e.tag===13){var t=dn(e),n=Yt(e,t);if(n!==null){var r=Ye();bt(n,e,t,r)}nu(e,t)}};Bd=function(){return se};Wd=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};wl=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$i(r);if(!o)throw Error(I(90));kd(r),pl(r,o)}}}break;case"textarea":_d(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};Td=Xs;jd=Rn;var M0={usingClientEntryPoint:!1,Events:[go,qn,$i,Pd,Od,Xs]},Ar={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F0={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ld(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Ri=Fo.inject(F0),Dt=Fo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(I(200));return L0(e,t,null,n)};at.createRoot=function(e,t){if(!ou(e))throw Error(I(299));var n=!1,r="",o=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=tu(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,no(e.nodeType===8?e.parentNode:e),new ru(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Ld(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return Rn(e)};at.hydrate=function(e,t,n){if(!qi(t))throw Error(I(200));return Ki(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=mp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=pp(t,null,e,1,n!=null?n:null,o,!1,i,l),e[Qt]=t.current,no(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yi(t)};at.render=function(e,t,n){if(!qi(t))throw Error(I(200));return Ki(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!qi(e))throw Error(I(40));return e._reactRootContainer?(Rn(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};at.unstable_batchedUpdates=Xs;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qi(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Ki(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp)}catch(e){console.error(e)}}hp(),fd.exports=at;var Lc=fd.exports;al.createRoot=Lc.createRoot,al.hydrateRoot=Lc.hydrateRoot;function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ni.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));var Rc=function(e){return e},Dc="beforeunload",$0="popstate";function I0(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,o=r.history;function i(){var C=r.location,P=C.pathname,R=C.search,A=C.hash,L=o.state||{};return[L.idx,Rc({pathname:P,search:R,hash:A,state:L.usr||null,key:L.key||"default"})]}var l=null;function a(){if(l)p.call(l),l=null;else{var C=Pn.Pop,P=i(),R=P[0],A=P[1];if(p.length){if(R!=null){var L=c-R;L&&(l={action:C,location:A,retry:function(){O(L*-1)}},O(L))}}else m(C)}}r.addEventListener($0,a);var u=Pn.Pop,s=i(),c=s[0],f=s[1],d=Fc(),p=Fc();c==null&&(c=0,o.replaceState(Ni({},o.state,{idx:c}),""));function g(C){return typeof C=="string"?C:Jl(C)}function x(C,P){return P===void 0&&(P=null),Rc(Ni({pathname:f.pathname,hash:"",search:""},typeof C=="string"?$n(C):C,{state:P,key:V0()}))}function S(C,P){return[{usr:C.state,key:C.key,idx:P},g(C)]}function h(C,P,R){return!p.length||(p.call({action:C,location:P,retry:R}),!1)}function m(C){u=C;var P=i();c=P[0],f=P[1],d.call({action:u,location:f})}function v(C,P){var R=Pn.Push,A=x(C,P);function L(){v(C,P)}if(h(R,A,L)){var W=S(A,c+1),Q=W[0],G=W[1];try{o.pushState(Q,"",G)}catch{r.location.assign(G)}m(R)}}function _(C,P){var R=Pn.Replace,A=x(C,P);function L(){_(C,P)}if(h(R,A,L)){var W=S(A,c),Q=W[0],G=W[1];o.replaceState(Q,"",G),m(R)}}function O(C){o.go(C)}var T={get action(){return u},get location(){return f},createHref:g,push:v,replace:_,go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(P){return d.push(P)},block:function(P){var R=p.push(P);return p.length===1&&r.addEventListener(Dc,Mc),function(){R(),p.length||r.removeEventListener(Dc,Mc)}}};return T}function Mc(e){e.preventDefault(),e.returnValue=""}function Fc(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function V0(){return Math.random().toString(36).substr(2,8)}function Jl(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,o=r===void 0?"":r,i=e.hash,l=i===void 0?"":i;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function $n(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iu=M.exports.createContext(null),au=M.exports.createContext(null),Gi=M.exports.createContext({outlet:null,matches:[]});function Ft(e,t){if(!e)throw new Error(t)}function U0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$n(t):t,o=yp(r.pathname||"/",n);if(o==null)return null;let i=gp(e);B0(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Z0(i[a],o);return l}function gp(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let l={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||Ft(!1),l.relativePath=l.relativePath.slice(r.length));let a=pn([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(o.index===!0&&Ft(!1),gp(o.children,t,u,a)),!(o.path==null&&!o.index)&&t.push({path:a,score:G0(a,o.index),routesMeta:u})}),t}function B0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:X0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const W0=/^:\w+$/,H0=3,Q0=2,Y0=1,q0=10,K0=-2,$c=e=>e==="*";function G0(e,t){let n=e.split("/"),r=n.length;return n.some($c)&&(r+=K0),t&&(r+=Q0),n.filter(o=>!$c(o)).reduce((o,i)=>o+(W0.test(i)?H0:i===""?Y0:q0),r)}function X0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Z0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,s=o==="/"?t:t.slice(o.length)||"/",c=J0({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!c)return null;Object.assign(r,c.params);let f=a.route;i.push({params:r,pathname:pn([o,c.pathname]),pathnameBase:xp(pn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=pn([o,c.pathnameBase]))}return i}function J0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((s,c,f)=>{if(c==="*"){let d=a[f]||"";l=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return s[c]=tg(a[f]||""),s},{}),pathname:i,pathnameBase:l,pattern:e}}function eg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),r]}function tg(e,t){try{return decodeURIComponent(e)}catch{return e}}function ng(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$n(e):e;return{pathname:n?n.startsWith("/")?n:rg(n,t):t,search:ig(r),hash:ag(o)}}function rg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function vp(e,t,n){let r=typeof e=="string"?$n(e):e,o=e===""||r.pathname===""?"/":r.pathname,i;if(o==null)i=n;else{let a=t.length-1;if(o.startsWith("..")){let u=o.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}i=a>=0?t[a]:"/"}let l=ng(r,i);return o&&o!=="/"&&o.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function og(e){return e===""||e.pathname===""?"/":typeof e=="string"?$n(e).pathname:e.pathname}function yp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),xp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ig=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ag=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lg(e){yo()||Ft(!1);let{basename:t,navigator:n}=M.exports.useContext(iu),{hash:r,pathname:o,search:i}=lu(e),l=o;if(t!=="/"){let a=og(e),u=a!=null&&a.endsWith("/");l=o==="/"?t+(u?"/":""):pn([t,o])}return n.createHref({pathname:l,search:i,hash:r})}function yo(){return M.exports.useContext(au)!=null}function _r(){return yo()||Ft(!1),M.exports.useContext(au).location}function sg(){yo()||Ft(!1);let{basename:e,navigator:t}=M.exports.useContext(iu),{matches:n}=M.exports.useContext(Gi),{pathname:r}=_r(),o=JSON.stringify(n.map(a=>a.pathnameBase)),i=M.exports.useRef(!1);return M.exports.useEffect(()=>{i.current=!0}),M.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let s=vp(a,JSON.parse(o),r);e!=="/"&&(s.pathname=pn([e,s.pathname])),(u.replace?t.replace:t.push)(s,u.state)},[e,t,o,r])}function lu(e){let{matches:t}=M.exports.useContext(Gi),{pathname:n}=_r(),r=JSON.stringify(t.map(o=>o.pathnameBase));return M.exports.useMemo(()=>vp(e,JSON.parse(r),n),[e,r,n])}function ug(e,t){yo()||Ft(!1);let{matches:n}=M.exports.useContext(Gi),r=n[n.length-1],o=r?r.params:{};r&&r.pathname;let i=r?r.pathnameBase:"/";r&&r.route;let l=_r(),a;if(t){var u;let d=typeof t=="string"?$n(t):t;i==="/"||((u=d.pathname)==null?void 0:u.startsWith(i))||Ft(!1),a=d}else a=l;let s=a.pathname||"/",c=i==="/"?s:s.slice(i.length)||"/",f=U0(e,{pathname:c});return cg(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},o,d.params),pathname:pn([i,d.pathname]),pathnameBase:d.pathnameBase==="/"?i:pn([i,d.pathnameBase])})),n)}function cg(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,o)=>M.exports.createElement(Gi.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,o+1))}}),null)}function Xt(e){Ft(!1)}function dg(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Pn.Pop,navigator:i,static:l=!1}=e;yo()&&Ft(!1);let a=xp(t),u=M.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=$n(r));let{pathname:s="/",search:c="",hash:f="",state:d=null,key:p="default"}=r,g=M.exports.useMemo(()=>{let x=yp(s,a);return x==null?null:{pathname:x,search:c,hash:f,state:d,key:p}},[a,s,c,f,d,p]);return g==null?null:M.exports.createElement(iu.Provider,{value:u},M.exports.createElement(au.Provider,{children:n,value:{location:g,navigationType:o}}))}function fg(e){let{children:t,location:n}=e;return ug(es(t),n)}function es(e){let t=[];return M.exports.Children.forEach(e,n=>{if(!M.exports.isValidElement(n))return;if(n.type===M.exports.Fragment){t.push.apply(t,es(n.props.children));return}n.type!==Xt&&Ft(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=es(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pi(){return Pi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pi.apply(this,arguments)}function wp(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const pg=["onClick","reloadDocument","replace","state","target","to"],mg=["aria-current","caseSensitive","className","end","style","to","children"];function hg(e){let{basename:t,children:n,window:r}=e,o=M.exports.useRef();o.current==null&&(o.current=I0({window:r}));let i=o.current,[l,a]=M.exports.useState({action:i.action,location:i.location});return M.exports.useLayoutEffect(()=>i.listen(a),[i]),M.exports.createElement(dg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function gg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const fo=M.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:o,replace:i=!1,state:l,target:a,to:u}=t,s=wp(t,pg),c=lg(u),f=vg(u,{replace:i,state:l,target:a});function d(p){r&&r(p),!p.defaultPrevented&&!o&&f(p)}return M.exports.createElement("a",Pi({},s,{href:c,onClick:d,ref:n,target:a}))}),$o=M.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:a,to:u,children:s}=t,c=wp(t,mg),f=_r(),d=lu(u),p=f.pathname,g=d.pathname;o||(p=p.toLowerCase(),g=g.toLowerCase());let x=p===g||!l&&p.startsWith(g)&&p.charAt(g.length)==="/",S=x?r:void 0,h;typeof i=="function"?h=i({isActive:x}):h=[i,x?"active":null].filter(Boolean).join(" ");let m=typeof a=="function"?a({isActive:x}):a;return M.exports.createElement(fo,Pi({},c,{"aria-current":S,className:h,ref:n,style:m,to:u}),typeof s=="function"?s({isActive:x}):s)});function vg(e,t){let{target:n,replace:r,state:o}=t===void 0?{}:t,i=sg(),l=_r(),a=lu(e);return M.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!gg(u)){u.preventDefault();let s=!!r||Jl(l)===Jl(a);i(e,{replace:s,state:o})}},[l,i,a,r,o,n,e])}var su={exports:{}},ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),cu=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),Ji=Symbol.for("react.profiler"),ea=Symbol.for("react.provider"),ta=Symbol.for("react.context"),yg=Symbol.for("react.server_context"),na=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),ia=Symbol.for("react.memo"),aa=Symbol.for("react.lazy"),xg=Symbol.for("react.offscreen"),kp;kp=Symbol.for("react.module.reference");function yt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uu:switch(e=e.type,e){case Xi:case Ji:case Zi:case ra:case oa:return e;default:switch(e=e&&e.$$typeof,e){case yg:case ta:case na:case aa:case ia:case ea:return e;default:return t}}case cu:return t}}}ue.ContextConsumer=ta;ue.ContextProvider=ea;ue.Element=uu;ue.ForwardRef=na;ue.Fragment=Xi;ue.Lazy=aa;ue.Memo=ia;ue.Portal=cu;ue.Profiler=Ji;ue.StrictMode=Zi;ue.Suspense=ra;ue.SuspenseList=oa;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(e){return yt(e)===ta};ue.isContextProvider=function(e){return yt(e)===ea};ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uu};ue.isForwardRef=function(e){return yt(e)===na};ue.isFragment=function(e){return yt(e)===Xi};ue.isLazy=function(e){return yt(e)===aa};ue.isMemo=function(e){return yt(e)===ia};ue.isPortal=function(e){return yt(e)===cu};ue.isProfiler=function(e){return yt(e)===Ji};ue.isStrictMode=function(e){return yt(e)===Zi};ue.isSuspense=function(e){return yt(e)===ra};ue.isSuspenseList=function(e){return yt(e)===oa};ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xi||e===Ji||e===Zi||e===ra||e===oa||e===xg||typeof e=="object"&&e!==null&&(e.$$typeof===aa||e.$$typeof===ia||e.$$typeof===ea||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===kp||e.getModuleId!==void 0)};ue.typeOf=yt;su.exports=ue;var wg=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),a=Object.keys(n);if(l.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),s=0;s<l.length;s++){var c=l[s];if(!u(c))return!1;var f=t[c],d=n[c];if(i=r?r.call(o,f,d,c):void 0,i===!1||i===void 0&&f!==d)return!1}return!0};function kg(e){function t(U,k,K,D,E){for(var re=0,$=0,ie=0,w=0,b,N,V=0,H=0,j,Y=j=b=0,ne=0,de=0,ut=0,ge=0,Tt=K.length,ct=Tt-1,We,oe="",fe="",In="",Cr="",jt;ne<Tt;){if(N=K.charCodeAt(ne),ne===ct&&$+w+ie+re!==0&&($!==0&&(N=$===47?10:47),w=ie=re=0,Tt++,ct++),$+w+ie+re===0){if(ne===ct&&(0<de&&(oe=oe.replace(d,"")),0<oe.trim().length)){switch(N){case 32:case 9:case 59:case 13:case 10:break;default:oe+=K.charAt(ne)}N=59}switch(N){case 123:for(oe=oe.trim(),b=oe.charCodeAt(0),j=1,ge=++ne;ne<Tt;){switch(N=K.charCodeAt(ne)){case 123:j++;break;case 125:j--;break;case 47:switch(N=K.charCodeAt(ne+1)){case 42:case 47:e:{for(Y=ne+1;Y<ct;++Y)switch(K.charCodeAt(Y)){case 47:if(N===42&&K.charCodeAt(Y-1)===42&&ne+2!==Y){ne=Y+1;break e}break;case 10:if(N===47){ne=Y+1;break e}}ne=Y}}break;case 91:N++;case 40:N++;case 34:case 39:for(;ne++<ct&&K.charCodeAt(ne)!==N;);}if(j===0)break;ne++}switch(j=K.substring(ge,ne),b===0&&(b=(oe=oe.replace(f,"").trim()).charCodeAt(0)),b){case 64:switch(0<de&&(oe=oe.replace(d,"")),N=oe.charCodeAt(1),N){case 100:case 109:case 115:case 45:de=k;break;default:de=te}if(j=t(k,de,j,N,E+1),ge=j.length,0<z&&(de=n(te,oe,ut),jt=a(3,j,de,k,Q,W,ge,N,E,D),oe=de.join(""),jt!==void 0&&(ge=(j=jt.trim()).length)===0&&(N=0,j="")),0<ge)switch(N){case 115:oe=oe.replace(T,l);case 100:case 109:case 45:j=oe+"{"+j+"}";break;case 107:oe=oe.replace(m,"$1 $2"),j=oe+"{"+j+"}",j=ee===1||ee===2&&i("@"+j,3)?"@-webkit-"+j+"@"+j:"@"+j;break;default:j=oe+j,D===112&&(j=(fe+=j,""))}else j="";break;default:j=t(k,n(k,oe,ut),j,D,E+1)}In+=j,j=ut=de=Y=b=0,oe="",N=K.charCodeAt(++ne);break;case 125:case 59:if(oe=(0<de?oe.replace(d,""):oe).trim(),1<(ge=oe.length))switch(Y===0&&(b=oe.charCodeAt(0),b===45||96<b&&123>b)&&(ge=(oe=oe.replace(" ",":")).length),0<z&&(jt=a(1,oe,k,U,Q,W,fe.length,D,E,D))!==void 0&&(ge=(oe=jt.trim()).length)===0&&(oe="\0\0"),b=oe.charCodeAt(0),N=oe.charCodeAt(1),b){case 0:break;case 64:if(N===105||N===99){Cr+=oe+K.charAt(ne);break}default:oe.charCodeAt(ge-1)!==58&&(fe+=o(oe,b,N,oe.charCodeAt(2)))}ut=de=Y=b=0,oe="",N=K.charCodeAt(++ne)}}switch(N){case 13:case 10:$===47?$=0:1+b===0&&D!==107&&0<oe.length&&(de=1,oe+="\0"),0<z*B&&a(0,oe,k,U,Q,W,fe.length,D,E,D),W=1,Q++;break;case 59:case 125:if($+w+ie+re===0){W++;break}default:switch(W++,We=K.charAt(ne),N){case 9:case 32:if(w+re+$===0)switch(V){case 44:case 58:case 9:case 32:We="";break;default:N!==32&&(We=" ")}break;case 0:We="\\0";break;case 12:We="\\f";break;case 11:We="\\v";break;case 38:w+$+re===0&&(de=ut=1,We="\f"+We);break;case 108:if(w+$+re+G===0&&0<Y)switch(ne-Y){case 2:V===112&&K.charCodeAt(ne-3)===58&&(G=V);case 8:H===111&&(G=H)}break;case 58:w+$+re===0&&(Y=ne);break;case 44:$+ie+w+re===0&&(de=1,We+="\r");break;case 34:case 39:$===0&&(w=w===N?0:w===0?N:w);break;case 91:w+$+ie===0&&re++;break;case 93:w+$+ie===0&&re--;break;case 41:w+$+re===0&&ie--;break;case 40:if(w+$+re===0){if(b===0)switch(2*V+3*H){case 533:break;default:b=1}ie++}break;case 64:$+ie+w+re+Y+j===0&&(j=1);break;case 42:case 47:if(!(0<w+re+ie))switch($){case 0:switch(2*N+3*K.charCodeAt(ne+1)){case 235:$=47;break;case 220:ge=ne,$=42}break;case 42:N===47&&V===42&&ge+2!==ne&&(K.charCodeAt(ge+2)===33&&(fe+=K.substring(ge,ne+1)),We="",$=0)}}$===0&&(oe+=We)}H=V,V=N,ne++}if(ge=fe.length,0<ge){if(de=k,0<z&&(jt=a(2,fe,de,U,Q,W,ge,D,E,D),jt!==void 0&&(fe=jt).length===0))return Cr+fe+In;if(fe=de.join(",")+"{"+fe+"}",ee*G!==0){switch(ee!==2||i(fe,2)||(G=0),G){case 111:fe=fe.replace(_,":-moz-$1")+fe;break;case 112:fe=fe.replace(v,"::-webkit-input-$1")+fe.replace(v,"::-moz-$1")+fe.replace(v,":-ms-input-$1")+fe}G=0}}return Cr+fe+In}function n(U,k,K){var D=k.trim().split(S);k=D;var E=D.length,re=U.length;switch(re){case 0:case 1:var $=0;for(U=re===0?"":U[0]+" ";$<E;++$)k[$]=r(U,k[$],K).trim();break;default:var ie=$=0;for(k=[];$<E;++$)for(var w=0;w<re;++w)k[ie++]=r(U[w]+" ",D[$],K).trim()}return k}function r(U,k,K){var D=k.charCodeAt(0);switch(33>D&&(D=(k=k.trim()).charCodeAt(0)),D){case 38:return k.replace(h,"$1"+U.trim());case 58:return U.trim()+k.replace(h,"$1"+U.trim());default:if(0<1*K&&0<k.indexOf("\f"))return k.replace(h,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+k}function o(U,k,K,D){var E=U+";",re=2*k+3*K+4*D;if(re===944){U=E.indexOf(":",9)+1;var $=E.substring(U,E.length-1).trim();return $=E.substring(0,U).trim()+$+";",ee===1||ee===2&&i($,1)?"-webkit-"+$+$:$}if(ee===0||ee===2&&!i(E,1))return E;switch(re){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(L,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return $=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+E+"-ms-flex-pack"+$+E;case 1005:return g.test(E)?E.replace(p,":-webkit-")+E.replace(p,":-moz-")+E:E;case 1e3:switch($=E.substring(13).trim(),k=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(k)){case 226:$=E.replace(O,"tb");break;case 232:$=E.replace(O,"tb-rl");break;case 220:$=E.replace(O,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+$+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(k=(E=U).length-10,$=(E.charCodeAt(k)===33?E.substring(0,k):E).substring(U.indexOf(":",7)+1).trim(),re=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:E=E.replace($,"-webkit-"+$)+";"+E;break;case 207:case 102:E=E.replace($,"-webkit-"+(102<re?"inline-":"")+"box")+";"+E.replace($,"-webkit-"+$)+";"+E.replace($,"-ms-"+$+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return $=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+$+"-ms-flex-"+$+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(A.test(U)===!0)return($=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?o(U.replace("stretch","fill-available"),k,K,D).replace(":fill-available",":stretch"):E.replace($,"-webkit-"+$)+E.replace($,"-moz-"+$.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,K+D===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+E}return E}function i(U,k){var K=U.indexOf(k===1?":":"{"),D=U.substring(0,k!==3?K:10);return K=U.substring(K+1,U.length-1),F(k!==2?D:D.replace(R,"$1"),K,k)}function l(U,k){var K=o(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return K!==k+";"?K.replace(C," or ($1)").substring(4):"("+k+")"}function a(U,k,K,D,E,re,$,ie,w,b){for(var N=0,V=k,H;N<z;++N)switch(H=Se[N].call(c,U,V,K,D,E,re,$,ie,w,b)){case void 0:case!1:case!0:case null:break;default:V=H}if(V!==k)return V}function u(U){switch(U){case void 0:case null:z=Se.length=0;break;default:if(typeof U=="function")Se[z++]=U;else if(typeof U=="object")for(var k=0,K=U.length;k<K;++k)u(U[k]);else B=!!U|0}return u}function s(U){return U=U.prefix,U!==void 0&&(F=null,U?typeof U!="function"?ee=1:(ee=2,F=U):ee=0),s}function c(U,k){var K=U;if(33>K.charCodeAt(0)&&(K=K.trim()),X=K,K=[X],0<z){var D=a(-1,k,K,K,Q,W,0,0,0,0);D!==void 0&&typeof D=="string"&&(k=D)}var E=t(te,K,k,0,0);return 0<z&&(D=a(-2,E,K,K,Q,W,E.length,0,0,0),D!==void 0&&(E=D)),X="",G=0,W=Q=1,E}var f=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,S=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,_=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,P=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,W=1,Q=1,G=0,ee=1,te=[],Se=[],z=0,F=null,B=0,X="";return c.use=u,c.set=s,e!==void 0&&s(e),c}var Sg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _g(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Cg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ic=_g(function(e){return Cg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Sp={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=typeof Symbol=="function"&&Symbol.for,du=Le?Symbol.for("react.element"):60103,fu=Le?Symbol.for("react.portal"):60106,la=Le?Symbol.for("react.fragment"):60107,sa=Le?Symbol.for("react.strict_mode"):60108,ua=Le?Symbol.for("react.profiler"):60114,ca=Le?Symbol.for("react.provider"):60109,da=Le?Symbol.for("react.context"):60110,pu=Le?Symbol.for("react.async_mode"):60111,fa=Le?Symbol.for("react.concurrent_mode"):60111,pa=Le?Symbol.for("react.forward_ref"):60112,ma=Le?Symbol.for("react.suspense"):60113,Eg=Le?Symbol.for("react.suspense_list"):60120,ha=Le?Symbol.for("react.memo"):60115,ga=Le?Symbol.for("react.lazy"):60116,bg=Le?Symbol.for("react.block"):60121,Ng=Le?Symbol.for("react.fundamental"):60117,Pg=Le?Symbol.for("react.responder"):60118,Og=Le?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case du:switch(e=e.type,e){case pu:case fa:case la:case ua:case sa:case ma:return e;default:switch(e=e&&e.$$typeof,e){case da:case pa:case ga:case ha:case ca:return e;default:return t}}case fu:return t}}}function _p(e){return st(e)===fa}ce.AsyncMode=pu;ce.ConcurrentMode=fa;ce.ContextConsumer=da;ce.ContextProvider=ca;ce.Element=du;ce.ForwardRef=pa;ce.Fragment=la;ce.Lazy=ga;ce.Memo=ha;ce.Portal=fu;ce.Profiler=ua;ce.StrictMode=sa;ce.Suspense=ma;ce.isAsyncMode=function(e){return _p(e)||st(e)===pu};ce.isConcurrentMode=_p;ce.isContextConsumer=function(e){return st(e)===da};ce.isContextProvider=function(e){return st(e)===ca};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===du};ce.isForwardRef=function(e){return st(e)===pa};ce.isFragment=function(e){return st(e)===la};ce.isLazy=function(e){return st(e)===ga};ce.isMemo=function(e){return st(e)===ha};ce.isPortal=function(e){return st(e)===fu};ce.isProfiler=function(e){return st(e)===ua};ce.isStrictMode=function(e){return st(e)===sa};ce.isSuspense=function(e){return st(e)===ma};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===la||e===fa||e===ua||e===sa||e===ma||e===Eg||typeof e=="object"&&e!==null&&(e.$$typeof===ga||e.$$typeof===ha||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===pa||e.$$typeof===Ng||e.$$typeof===Pg||e.$$typeof===Og||e.$$typeof===bg)};ce.typeOf=st;Sp.exports=ce;var mu=Sp.exports,Tg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ag={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hu={};hu[mu.ForwardRef]=Ag;hu[mu.Memo]=Cp;function Vc(e){return mu.isMemo(e)?Cp:hu[e.$$typeof]||Tg}var zg=Object.defineProperty,Lg=Object.getOwnPropertyNames,Uc=Object.getOwnPropertySymbols,Rg=Object.getOwnPropertyDescriptor,Dg=Object.getPrototypeOf,Bc=Object.prototype;function Ep(e,t,n){if(typeof t!="string"){if(Bc){var r=Dg(t);r&&r!==Bc&&Ep(e,r,n)}var o=Lg(t);Uc&&(o=o.concat(Uc(t)));for(var i=Vc(e),l=Vc(t),a=0;a<o.length;++a){var u=o[a];if(!jg[u]&&!(n&&n[u])&&!(l&&l[u])&&!(i&&i[u])){var s=Rg(t,u);try{zg(e,u,s)}catch{}}}}return e}var bp=Ep;function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Wc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ts=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!su.exports.typeOf(e)},Oi=Object.freeze([]),mn=Object.freeze({});function vr(e){return typeof e=="function"}function ns(e){return e.displayName||e.name||"Component"}function va(e){return e&&typeof e.styledComponentId=="string"}var vn=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Mg="5.3.5",gu=typeof window!="undefined"&&"HTMLElement"in window,Fg=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),$g={};function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ig=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Ct(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,c=r.length;s<c;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ti=new Map,Ti=new Map,Yr=1,Io=function(e){if(ti.has(e))return ti.get(e);for(;Ti.has(Yr);)Yr++;var t=Yr++;return ti.set(e,t),Ti.set(t,e),t},Vg=function(e){return Ti.get(e)},Ug=function(e,t){t>=Yr&&(Yr=t+1),ti.set(e,t),Ti.set(t,e)},Bg="style["+vn+'][data-styled-version="5.3.5"]',Wg=new RegExp("^"+vn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Hg=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Qg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(Wg);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(Ug(s,u),Hg(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},rs=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Np=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var c=u[s];if(c&&c.nodeType===1&&c.hasAttribute(vn))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(vn,"active"),r.setAttribute("data-styled-version","5.3.5");var l=rs();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Yg=function(){function e(n){var r=this.element=Np(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var u=i[l];if(u.ownerNode===o)return u}Ct(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),qg=function(){function e(n){var r=this.element=Np(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Kg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Hc=gu,Gg={isServer:!gu,useCSSOMInjection:!Fg},yr=function(){function e(n,r,o){n===void 0&&(n=mn),r===void 0&&(r={}),this.options=rt({},Gg,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&gu&&Hc&&(Hc=!1,function(i){for(var l=document.querySelectorAll(Bg),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(vn)!=="active"&&(Qg(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Io(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(rt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Kg(l):i?new Yg(l):new qg(l),new Ig(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Io(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Io(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Io(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=Vg(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var c=vn+".g"+l+'[id="'+a+'"]',f="";u!==void 0&&u.forEach(function(d){d.length>0&&(f+=d+",")}),i+=""+s+c+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),Xg=/(a)(d)/gi,Qc=function(e){return String.fromCharCode(e+(e>25?39:97))};function os(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Qc(t%52)+n;return(Qc(t%52)+n).replace(Xg,"$1-$2")}var tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pp=function(e){return tr(5381,e)};function Op(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vr(n)&&!va(n))return!1}return!0}var Zg=Pp("5.3.5"),Jg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Op(t),this.componentId=n,this.baseHash=tr(Zg,n),this.baseStyle=r,yr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Dn(this.rules,t,n,r).join(""),a=os(tr(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var u=r(l,"."+a,void 0,o);n.insertRules(o,a,u)}i.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,c=tr(this.baseHash,r.hash),f="",d=0;d<s;d++){var p=this.rules[d];if(typeof p=="string")f+=p;else if(p){var g=Dn(p,t,n,r),x=Array.isArray(g)?g.join(""):g;c=tr(c,x+d),f+=x}}if(f){var S=os(c>>>0);if(!n.hasNameForId(o,S)){var h=r(f,"."+S,void 0,o);n.insertRules(o,S,h)}i.push(S)}}return i.join(" ")},e}(),ev=/^\s*\/\/.*$/gm,tv=[":","[",".","#"];function Tp(e){var t,n,r,o,i=e===void 0?mn:e,l=i.options,a=l===void 0?mn:l,u=i.plugins,s=u===void 0?Oi:u,c=new kg(a),f=[],d=function(x){function S(h){if(h)try{x(h+"}")}catch{}}return function(h,m,v,_,O,T,C,P,R,A){switch(h){case 1:if(R===0&&m.charCodeAt(0)===64)return x(m+";"),"";break;case 2:if(P===0)return m+"/*|*/";break;case 3:switch(P){case 102:case 112:return x(v[0]+m),"";default:return m+(A===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(S)}}}(function(x){f.push(x)}),p=function(x,S,h){return S===0&&tv.indexOf(h[n.length])!==-1||h.match(o)?x:"."+t};function g(x,S,h,m){m===void 0&&(m="&");var v=x.replace(ev,""),_=S&&h?h+" "+S+" { "+v+" }":v;return t=m,n=S,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(h||!S?"":S,_)}return c.use([].concat(s,[function(x,S,h){x===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,p))},d,function(x){if(x===-2){var S=f;return f=[],S}}])),g.hash=s.length?s.reduce(function(x,S){return S.name||Ct(15),tr(x,S.name)},5381).toString():"",g}var ya=Ne.createContext(),nv=ya.Consumer,vu=Ne.createContext(),jp=(vu.Consumer,new yr),is=Tp();function yu(){return M.exports.useContext(ya)||jp}function Ap(){return M.exports.useContext(vu)||is}function zp(e){var t=M.exports.useState(e.stylisPlugins),n=t[0],r=t[1],o=yu(),i=M.exports.useMemo(function(){var a=o;return e.sheet?a=e.sheet:e.target&&(a=a.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(a=a.reconstructWithOptions({useCSSOMInjection:!1})),a},[e.disableCSSOMInjection,e.sheet,e.target]),l=M.exports.useMemo(function(){return Tp({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return M.exports.useEffect(function(){wg(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),Ne.createElement(ya.Provider,{value:i},Ne.createElement(vu.Provider,{value:l},e.children))}var Lp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=is);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Ct(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=is),this.name+t.hash},e}(),rv=/([A-Z])/,ov=/([A-Z])/g,iv=/^ms-/,av=function(e){return"-"+e.toLowerCase()};function Yc(e){return rv.test(e)?e.replace(ov,av).replace(iv,"-ms-"):e}var qc=function(e){return e==null||e===!1||e===""};function Dn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=Dn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(qc(e))return"";if(va(e))return"."+e.styledComponentId;if(vr(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return Dn(u,t,n,r)}var s;return e instanceof Lp?n?(e.inject(n,r),e.getName(r)):e:ts(e)?function c(f,d){var p,g,x=[];for(var S in f)f.hasOwnProperty(S)&&!qc(f[S])&&(Array.isArray(f[S])&&f[S].isCss||vr(f[S])?x.push(Yc(S)+":",f[S],";"):ts(f[S])?x.push.apply(x,c(f[S],S)):x.push(Yc(S)+": "+(p=S,(g=f[S])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in Sg?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(x,["}"]):x}(e):e.toString()}var Kc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return vr(e)||ts(e)?Kc(Dn(Wc(Oi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Kc(Dn(Wc(e,n)))}var xu=function(e,t,n){return n===void 0&&(n=mn),e.theme!==n.theme&&e.theme||t||n.theme},lv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sv=/(^-|-$)/g;function Ja(e){return e.replace(lv,"-").replace(sv,"")}var wu=function(e){return os(Pp(e)>>>0)};function Vo(e){return typeof e=="string"&&!0}var as=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},uv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function cv(e,t,n){var r=e[n];as(t)&&as(r)?Rp(r,t):e[n]=t}function Rp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(as(l))for(var a in l)uv(a)&&cv(e,l[a],a)}return e}var yn=Ne.createContext(),dv=yn.Consumer;function fv(e){var t=M.exports.useContext(yn),n=M.exports.useMemo(function(){return function(r,o){if(!r)return Ct(14);if(vr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Ct(8):o?rt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ne.createElement(yn.Provider,{value:n},e.children):null}var el={};function Dp(e,t,n){var r=va(e),o=!Vo(e),i=t.attrs,l=i===void 0?Oi:i,a=t.componentId,u=a===void 0?function(m,v){var _=typeof m!="string"?"sc":Ja(m);el[_]=(el[_]||0)+1;var O=_+"-"+wu("5.3.5"+_+el[_]);return v?v+"-"+O:O}(t.displayName,t.parentComponentId):a,s=t.displayName,c=s===void 0?function(m){return Vo(m)?"styled."+m:"Styled("+ns(m)+")"}(e):s,f=t.displayName&&t.componentId?Ja(t.displayName)+"-"+t.componentId:t.componentId||u,d=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(m,v,_){return e.shouldForwardProp(m,v,_)&&t.shouldForwardProp(m,v,_)}:e.shouldForwardProp);var g,x=new Jg(n,f,r?e.componentStyle:void 0),S=x.isStatic&&l.length===0,h=function(m,v){return function(_,O,T,C){var P=_.attrs,R=_.componentStyle,A=_.defaultProps,L=_.foldedComponentIds,W=_.shouldForwardProp,Q=_.styledComponentId,G=_.target,ee=function(D,E,re){D===void 0&&(D=mn);var $=rt({},E,{theme:D}),ie={};return re.forEach(function(w){var b,N,V,H=w;for(b in vr(H)&&(H=H($)),H)$[b]=ie[b]=b==="className"?(N=ie[b],V=H[b],N&&V?N+" "+V:N||V):H[b]}),[$,ie]}(xu(O,M.exports.useContext(yn),A)||mn,O,P),te=ee[0],Se=ee[1],z=function(D,E,re,$){var ie=yu(),w=Ap(),b=E?D.generateAndInjectStyles(mn,ie,w):D.generateAndInjectStyles(re,ie,w);return b}(R,C,te),F=T,B=Se.$as||O.$as||Se.as||O.as||G,X=Vo(B),U=Se!==O?rt({},O,{},Se):O,k={};for(var K in U)K[0]!=="$"&&K!=="as"&&(K==="forwardedAs"?k.as=U[K]:(W?W(K,Ic,B):!X||Ic(K))&&(k[K]=U[K]));return O.style&&Se.style!==O.style&&(k.style=rt({},O.style,{},Se.style)),k.className=Array.prototype.concat(L,Q,z!==Q?z:null,O.className,Se.className).filter(Boolean).join(" "),k.ref=F,M.exports.createElement(B,k)}(g,m,v,S)};return h.displayName=c,(g=Ne.forwardRef(h)).attrs=d,g.componentStyle=x,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Oi,g.styledComponentId=f,g.target=r?e.target:e,g.withComponent=function(m){var v=t.componentId,_=function(T,C){if(T==null)return{};var P,R,A={},L=Object.keys(T);for(R=0;R<L.length;R++)P=L[R],C.indexOf(P)>=0||(A[P]=T[P]);return A}(t,["componentId"]),O=v&&v+"-"+(Vo(m)?m:Ja(ns(m)));return Dp(m,rt({},_,{attrs:d,componentId:O}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?Rp({},e.defaultProps,m):m}}),g.toString=function(){return"."+g.styledComponentId},o&&bp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var ls=function(e){return function t(n,r,o){if(o===void 0&&(o=mn),!su.exports.isValidElementType(r))return Ct(1,String(r));var i=function(){return n(r,o,xa.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,rt({},o,{},l))},i.attrs=function(l){return t(n,r,rt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Dp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ls[e]=ls(e)});var pv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Op(n),yr.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(Dn(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&yr.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function mv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=xa.apply(void 0,[e].concat(n)),i="sc-global-"+wu(JSON.stringify(o)),l=new pv(o,i);function a(s){var c=yu(),f=Ap(),d=M.exports.useContext(yn),p=M.exports.useRef(c.allocateGSInstance(i)).current;return c.server&&u(p,s,c,d,f),M.exports.useLayoutEffect(function(){if(!c.server)return u(p,s,c,d,f),function(){return l.removeStyles(p,c)}},[p,s,c,d,f]),null}function u(s,c,f,d,p){if(l.isStatic)l.renderStyles(s,$g,f,p);else{var g=rt({},c,{theme:xu(c,d,a.defaultProps)});l.renderStyles(s,g,f,p)}}return Ne.memo(a)}function hv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=xa.apply(void 0,[e].concat(n)).join(""),i=wu(o);return new Lp(i,o)}var gv=function(){function e(){var n=this;this._emitSheetCSS=function(){var r=n.instance.toString();if(!r)return"";var o=rs();return"<style "+[o&&'nonce="'+o+'"',vn+'="true"','data-styled-version="5.3.5"'].filter(Boolean).join(" ")+">"+r+"</style>"},this.getStyleTags=function(){return n.sealed?Ct(2):n._emitSheetCSS()},this.getStyleElement=function(){var r;if(n.sealed)return Ct(2);var o=((r={})[vn]="",r["data-styled-version"]="5.3.5",r.dangerouslySetInnerHTML={__html:n.instance.toString()},r),i=rs();return i&&(o.nonce=i),[Ne.createElement("style",rt({},o,{key:"sc-0-0"}))]},this.seal=function(){n.sealed=!0},this.instance=new yr({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(n){return this.sealed?Ct(2):Ne.createElement(zp,{sheet:this.instance},n)},t.interleaveWithNodeStream=function(n){return Ct(3)},e}(),vv=function(e){var t=Ne.forwardRef(function(n,r){var o=M.exports.useContext(yn),i=e.defaultProps,l=xu(n,o,i);return Ne.createElement(e,rt({},n,{theme:l,ref:r}))});return bp(t,e),t.displayName="WithTheme("+ns(e)+")",t},yv=function(){return M.exports.useContext(yn)},xv={StyleSheet:yr,masterSheet:jp},ye=ls,wv=Object.freeze(Object.defineProperty({__proto__:null,default:ye,ServerStyleSheet:gv,StyleSheetConsumer:nv,StyleSheetContext:ya,StyleSheetManager:zp,ThemeConsumer:dv,ThemeContext:yn,ThemeProvider:fv,__PRIVATE__:xv,createGlobalStyle:mv,css:xa,isStyledComponent:va,keyframes:hv,useTheme:yv,version:Mg,withTheme:vv},Symbol.toStringTag,{value:"Module"}));const kv=ye.div`
    position: fixed;
    background-image: url('images/madera-rotada.jpg');
    background-position: center;
    top:-1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 50;
    box-shadow: 1px 1px 1px #bb9885;
    transition: all .6s ease;
    &.active{
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        border-radius: 0 0 80% 0;
    }
`,Sv=ye.div`
margin-right: .5rem;
  .nav-icon-5{
    width: 30px;
    height: 25px;
    margin: 1px 1px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span{
    background-color:#cd9b81;
    filter: drop-shadow(2px 2px 2px #a42f42);
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
    transition-duration: 500ms
  }
  .nav-icon-5 span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .nav-icon-5 span:nth-child(2){
    top:13px;
    left: 0px;
    opacity:1;
  }
  .nav-icon-5 span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1){
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2){
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3){
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1){
    transform: rotate(45deg);
    top: 13px;
  }
  .nav-icon-5.open span:nth-child(2){
    opacity:0;
  }
  .nav-icon-5.open span:nth-child(3){
    transform: rotate(-45deg);
    top: 13px;
  }
@media (min-width: 375px) {
margin-right: 1rem;
  .nav-icon-5{
    width: 35px;
    height: 30px;
    margin: 10px 10px;
  }
}
@media (min-width: 768px) {
margin-right: 2rem;
}
`;var wa={exports:{}},ka={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=M.exports,Cv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Nv=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pv={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)bv.call(t,r)&&!Pv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Cv,type:e,key:i,ref:l,props:o,_owner:Nv.current}}ka.Fragment=Ev;ka.jsx=Mp;ka.jsxs=Mp;wa.exports=ka;const y=wa.exports.jsx,q=wa.exports.jsxs,xo=wa.exports.Fragment,Ov=({handleClick:e,clicked:t})=>y(Sv,{children:q("div",{onClick:e,className:`icon nav-icon-5 ${t?"open":""}`,children:[y("span",{}),y("span",{}),y("span",{})]})}),Tv=ye.nav`
position: fixed;
width: 100%;
height: 10vh;
background-image: url('images/madera.jpeg');
background-position: center;
padding: .4rem;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
border-bottom: 2px inset #181818;
.navbar-brand{
    font-weight: 400;
    font-size: .9rem;
    font-family: 'Srisakdi-Bold';
    padding: .5rem;
    background: -webkit-linear-gradient(to right, #a42f42, #cd9b81);
    background: linear-gradient(to right, #a42f42, #bb9885);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.navbar-brand:hover{
    background: -webkit-linear-gradient(to right, #cd9b81, #a42f42);
    background: linear-gradient(to right, #cd9b81, #a42f42);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.links-container{
    position: absolute;
    top: -1000px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 50;
    .links{
        display: block;
        font-family: 'Roboto-regular';
        font-size: 2rem;
        margin-right: 2rem;
        background: -webkit-linear-gradient(to right, #cd9b81, #a42f42);
        background: linear-gradient(to right, #cd9b81, #a42f42);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: all .5s ease;
    }
    .links:hover{
        background: -webkit-linear-gradient(to right, #a42f42, #cd9b81);
        background: linear-gradient(to right, #a42f42, #cd9b81);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
}
.links-container.active{
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25vh;
    left: 0;
    right: 0;
    text-align: center;
        .links{
            margin-top: 1rem;
            font-size: 2rem;
        }
        .links:after {
            content: "";
            display: block;
            margin: auto;
            height: 2px;
            width: 0px;
            transition: all .8s;
        }
        .links:hover:after {
            width: 50%;
            background: #cd9b81;
        }
}
.burguer{
    @media(min-width: 780px){
        display: none;
    }
}
@media (min-width: 375px) {
    .navbar-brand{
        font-size: 1.2rem;
        padding: 1rem;
    }
}
@media (min-width: 780px) {
    .navbar-brand{
        font-size: 1.5rem;
        padding: 1rem;
    }
    .links-container{
        position: initial;
        margin: 0;
        margin-right: 2rem;
        .links{
            display: inline-block;
            font-size: 1.5rem;
        }
    }
}
`,Uo={borderBottom:"2px solid #cd9b81"},jv=()=>{const[e,t]=M.exports.useState(!1),n=()=>{if(window.innerWidth<=768)return t(!e)};return q(xo,{children:[q(Tv,{children:[y(fo,{className:"navbar-brand",to:"/",children:y("h1",{children:"Margarita Cavero"})}),q("div",{className:`links-container ${e?"active":""}`,children:[y($o,{className:"links",onClick:n,to:"/",style:({isActive:r})=>r?Uo:{},children:"Inicio"}),y($o,{className:"links",onClick:n,to:"/demos",style:({isActive:r})=>r?Uo:{},children:"Demos"}),y($o,{className:"links",onClick:n,to:"/trabajos",style:({isActive:r})=>r?Uo:{},children:"Trabajos"}),y($o,{className:"links",onClick:n,to:"/contacto",style:({isActive:r})=>r?Uo:{},children:"Contacto"})]}),y("div",{className:"burguer",children:y(Ov,{clicked:e,handleClick:n})})]}),y(kv,{className:`icon nav-icon-5 ${e?"active":""}`})]})},Av=ye.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-image: url('images/contactWallpaper.webp');
background-attachment: fixed;
background-position: top;
background-size: cover;
@media (min-width: 768px) {
height: 100vh;
}
`;var wo=e=>e.type==="checkbox",nr=e=>e instanceof Date,Ie=e=>e==null;const Fp=e=>typeof e=="object";var Be=e=>!Ie(e)&&!Array.isArray(e)&&Fp(e)&&!nr(e),zv=e=>Be(e)&&e.target?wo(e.target)?e.target.checked:e.target.value:e,Lv=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Rv=(e,t)=>e.has(Lv(t)),Sa=e=>Array.isArray(e)?e.filter(Boolean):[],Te=e=>e===void 0,J=(e,t,n)=>{if(!t||!Be(e))return n;const r=Sa(t.split(/[,[\].]+?/)).reduce((o,i)=>Ie(o)?o:o[i],e);return Te(r)||r===e?Te(e[t])?n:e[t]:r};const Gc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_t={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$t={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Ne.createContext(null);var Dv=(e,t,n,r=!0)=>{const o={};for(const i in e)Object.defineProperty(o,i,{get:()=>{const l=i;return t[l]!==_t.all&&(t[l]=!r||_t.all),n&&(n[l]=!0),e[l]}});return o},dt=e=>Be(e)&&!Object.keys(e).length,Mv=(e,t,n)=>{const{name:r,...o}=e;return dt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(i=>t[i]===(!n||_t.all))},tl=e=>Array.isArray(e)?e:[e];function Fv(e){const t=Ne.useRef(e);t.current=e,Ne.useEffect(()=>{const n=o=>{o&&o.unsubscribe()},r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>n(r)},[e.disabled])}var Rt=e=>typeof e=="string",$v=(e,t,n,r)=>{const o=Array.isArray(e);return Rt(e)?(r&&t.watch.add(e),J(n,e)):o?e.map(i=>(r&&t.watch.add(i),J(n,i))):(r&&(t.watchAll=!0),n)},_a=e=>typeof e=="function",$p=e=>{for(const t in e)if(_a(e[t]))return!0;return!1},Iv=(e,t,n,r,o)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:o||!0}}:{},ku=e=>/^\w*$/.test(e),Ip=e=>Sa(e.replace(/["|']|\]/g,"").split(/\.|\[/));function _e(e,t,n){let r=-1;const o=ku(t)?[t]:Ip(t),i=o.length,l=i-1;for(;++r<i;){const a=o[r];let u=n;if(r!==l){const s=e[a];u=Be(s)||Array.isArray(s)?s:isNaN(+o[r+1])?{}:[]}e[a]=u,e=e[a]}return e}const ss=(e,t,n)=>{for(const r of n||Object.keys(e)){const o=J(e,r);if(o){const{_f:i,...l}=o;if(i&&t(i.name)){if(i.ref.focus&&Te(i.ref.focus()))break;if(i.refs){i.refs[0].focus();break}}else Be(l)&&ss(l,t)}}};var Xc=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),us=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function Cn(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(us&&(e instanceof Blob||e instanceof FileList))&&(n||Be(e))){t=n?[]:{};for(const r in e){if(_a(e[r])){t=e;break}t[r]=Cn(e[r])}}else return e;return t}function Vv(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Te(e)?r++:e[t[r++]];return e}function He(e,t){const n=ku(t)?[t]:Ip(t),r=n.length==1?e:Vv(e,n),o=n[n.length-1];let i;r&&delete r[o];for(let l=0;l<n.slice(0,-1).length;l++){let a=-1,u;const s=n.slice(0,-(l+1)),c=s.length-1;for(l>0&&(i=e);++a<s.length;){const f=s[a];u=u?u[f]:e[f],c===a&&(Be(u)&&dt(u)||Array.isArray(u)&&!u.filter(d=>!Te(d)).length)&&(i?delete i[f]:delete e[f]),i=u}}return e}function nl(){let e=[];return{get observers(){return e},next:o=>{for(const i of e)i.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(i=>i!==o)}}),unsubscribe:()=>{e=[]}}}var ji=e=>Ie(e)||!Fp(e);function rr(e,t){if(ji(e)||ji(t))return e===t;if(nr(e)&&nr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n){const i=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const l=t[o];if(nr(i)&&nr(l)||Be(i)&&Be(l)||Array.isArray(i)&&Array.isArray(l)?!rr(i,l):i!==l)return!1}}return!0}var Zc=e=>({isOnSubmit:!e||e===_t.onSubmit,isOnBlur:e===_t.onBlur,isOnChange:e===_t.onChange,isOnAll:e===_t.all,isOnTouch:e===_t.onTouched}),Ai=e=>typeof e=="boolean",Su=e=>e.type==="file",cs=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},Vp=e=>e.type==="select-multiple",_u=e=>e.type==="radio",Uv=e=>_u(e)||wo(e),rl=e=>cs(e)&&e.isConnected;function zi(e,t={}){const n=Array.isArray(e);if(Be(e)||n)for(const r in e)Array.isArray(e[r])||Be(e[r])&&!$p(e[r])?(t[r]=Array.isArray(e[r])?[]:{},zi(e[r],t[r])):Ie(e[r])||(t[r]=!0);return t}function Up(e,t,n){const r=Array.isArray(e);if(Be(e)||r)for(const o in e)Array.isArray(e[o])||Be(e[o])&&!$p(e[o])?Te(t)||ji(n[o])?n[o]=Array.isArray(e[o])?zi(e[o],[]):{...zi(e[o])}:Up(e[o],Ie(t)?{}:t[o],n[o]):n[o]=!rr(e[o],t[o]);return n}var ol=(e,t)=>Up(e,t,zi(t));const Jc={value:!1,isValid:!1},ed={value:!0,isValid:!0};var Bp=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Te(e[0].attributes.value)?Te(e[0].value)||e[0].value===""?ed:{value:e[0].value,isValid:!0}:ed:Jc}return Jc},Wp=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Te(e)?e:t?e===""||Ie(e)?NaN:+e:n&&Rt(e)?new Date(e):r?r(e):e;const td={isValid:!1,value:null};var Hp=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,td):td;function il(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Su(t)?t.files:_u(t)?Hp(e.refs).value:Vp(t)?[...t.selectedOptions].map(({value:n})=>n):wo(t)?Bp(e.refs).value:Wp(Te(t.value)?e.ref.value:t.value,e)}var Bv=(e,t,n,r)=>{const o={};for(const i of e){const l=J(t,i);l&&_e(o,i,l._f)}return{criteriaMode:n,names:[...e],fields:o,shouldUseNativeValidation:r}},Li=e=>e instanceof RegExp,zr=e=>Te(e)?void 0:Li(e)?e.source:Be(e)?Li(e.value)?e.value.source:e.value:e,Wv=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nd(e,t,n){const r=J(e,n);if(r||ku(n))return{error:r,name:n};const o=n.split(".");for(;o.length;){const i=o.join("."),l=J(t,i),a=J(e,i);if(l&&!Array.isArray(l)&&n!==i)return{name:n};if(a&&a.type)return{name:i,error:a};o.pop()}return{name:n}}var Hv=(e,t,n,r,o)=>o.isOnAll?!1:!n&&o.isOnTouch?!(t||e):(n?r.isOnBlur:o.isOnBlur)?!e:(n?r.isOnChange:o.isOnChange)?e:!0,Qv=(e,t)=>!Sa(J(e,t)).length&&He(e,t),ni=e=>Rt(e)||Ne.isValidElement(e);function rd(e,t,n="validate"){if(ni(e)||Array.isArray(e)&&e.every(ni)||Ai(e)&&!e)return{type:n,message:ni(e)?e:"",ref:t}}var Un=e=>Be(e)&&!Li(e)?e:{value:e,message:""},od=async(e,t,n,r)=>{const{ref:o,refs:i,required:l,maxLength:a,minLength:u,min:s,max:c,pattern:f,validate:d,name:p,valueAsNumber:g,mount:x,disabled:S}=e._f;if(!x||S)return{};const h=i?i[0]:o,m=A=>{r&&h.reportValidity&&(h.setCustomValidity(Ai(A)?"":A||" "),h.reportValidity())},v={},_=_u(o),O=wo(o),T=_||O,C=(g||Su(o))&&!o.value||t===""||Array.isArray(t)&&!t.length,P=Iv.bind(null,p,n,v),R=(A,L,W,Q=$t.maxLength,G=$t.minLength)=>{const ee=A?L:W;v[p]={type:A?Q:G,message:ee,ref:o,...P(A?Q:G,ee)}};if(l&&(!T&&(C||Ie(t))||Ai(t)&&!t||O&&!Bp(i).isValid||_&&!Hp(i).isValid)){const{value:A,message:L}=ni(l)?{value:!!l,message:l}:Un(l);if(A&&(v[p]={type:$t.required,message:L,ref:h,...P($t.required,L)},!n))return m(L),v}if(!C&&(!Ie(s)||!Ie(c))){let A,L;const W=Un(c),Q=Un(s);if(!Ie(t)&&!isNaN(t)){const G=o.valueAsNumber||+t;Ie(W.value)||(A=G>W.value),Ie(Q.value)||(L=G<Q.value)}else{const G=o.valueAsDate||new Date(t);Rt(W.value)&&(A=G>new Date(W.value)),Rt(Q.value)&&(L=G<new Date(Q.value))}if((A||L)&&(R(!!A,W.message,Q.message,$t.max,$t.min),!n))return m(v[p].message),v}if((a||u)&&!C&&Rt(t)){const A=Un(a),L=Un(u),W=!Ie(A.value)&&t.length>A.value,Q=!Ie(L.value)&&t.length<L.value;if((W||Q)&&(R(W,A.message,L.message),!n))return m(v[p].message),v}if(f&&!C&&Rt(t)){const{value:A,message:L}=Un(f);if(Li(A)&&!t.match(A)&&(v[p]={type:$t.pattern,message:L,ref:o,...P($t.pattern,L)},!n))return m(L),v}if(d){if(_a(d)){const A=await d(t),L=rd(A,h);if(L&&(v[p]={...L,...P($t.validate,L.message)},!n))return m(L.message),v}else if(Be(d)){let A={};for(const L in d){if(!dt(A)&&!n)break;const W=rd(await d[L](t),h,L);W&&(A={...W,...P(L,W.message)},m(W.message),n&&(v[p]=A))}if(!dt(A)&&(v[p]={ref:h,...A},!n))return v}}return m(!0),v};const Yv={mode:_t.onSubmit,reValidateMode:_t.onChange,shouldFocusError:!0};function qv(e={}){let t={...Yv,...e},n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},r={},o=Cn(t.defaultValues)||{},i=t.shouldUnregister?{}:Cn(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,s=0,c={};const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:nl(),array:nl(),state:nl()},p=Zc(t.mode),g=Zc(t.reValidateMode),x=t.criteriaMode===_t.all,S=w=>b=>{clearTimeout(s),s=window.setTimeout(w,b)},h=async w=>{let b=!1;return f.isValid&&(b=t.resolver?dt((await C()).errors):await R(r,!0),!w&&b!==n.isValid&&(n.isValid=b,d.state.next({isValid:b}))),b},m=(w,b=[],N,V,H=!0,j=!0)=>{if(V&&N){if(l.action=!0,j&&Array.isArray(J(r,w))){const Y=N(J(r,w),V.argA,V.argB);H&&_e(r,w,Y)}if(f.errors&&j&&Array.isArray(J(n.errors,w))){const Y=N(J(n.errors,w),V.argA,V.argB);H&&_e(n.errors,w,Y),Qv(n.errors,w)}if(f.touchedFields&&j&&Array.isArray(J(n.touchedFields,w))){const Y=N(J(n.touchedFields,w),V.argA,V.argB);H&&_e(n.touchedFields,w,Y)}f.dirtyFields&&(n.dirtyFields=ol(o,i)),d.state.next({isDirty:L(w,b),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else _e(i,w,b)},v=(w,b)=>{_e(n.errors,w,b),d.state.next({errors:n.errors})},_=(w,b,N,V)=>{const H=J(r,w);if(H){const j=J(i,w,Te(N)?J(o,w):N);Te(j)||V&&V.defaultChecked||b?_e(i,w,b?j:il(H._f)):G(w,j),l.mount&&h()}},O=(w,b,N,V,H)=>{let j=!1;const Y={name:w},ne=J(n.touchedFields,w);if(f.isDirty){const de=n.isDirty;n.isDirty=Y.isDirty=L(),j=de!==Y.isDirty}if(f.dirtyFields&&(!N||V)){const de=J(n.dirtyFields,w);rr(J(o,w),b)?He(n.dirtyFields,w):_e(n.dirtyFields,w,!0),Y.dirtyFields=n.dirtyFields,j=j||de!==J(n.dirtyFields,w)}return N&&!ne&&(_e(n.touchedFields,w,N),Y.touchedFields=n.touchedFields,j=j||f.touchedFields&&ne!==N),j&&H&&d.state.next(Y),j?Y:{}},T=async(w,b,N,V)=>{const H=J(n.errors,w),j=f.isValid&&n.isValid!==b;if(e.delayError&&N?(u=S(()=>v(w,N)),u(e.delayError)):(clearTimeout(s),u=null,N?_e(n.errors,w,N):He(n.errors,w)),(N?!rr(H,N):H)||!dt(V)||j){const Y={...V,...j?{isValid:b}:{},errors:n.errors,name:w};n={...n,...Y},d.state.next(Y)}c[w]--,f.isValidating&&!Object.values(c).some(Y=>Y)&&(d.state.next({isValidating:!1}),c={})},C=async w=>t.resolver?await t.resolver({...i},t.context,Bv(w||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation)):{},P=async w=>{const{errors:b}=await C();if(w)for(const N of w){const V=J(b,N);V?_e(n.errors,N,V):He(n.errors,N)}else n.errors=b;return b},R=async(w,b,N={valid:!0})=>{for(const V in w){const H=w[V];if(H){const{_f:j,...Y}=H;if(j){const ne=await od(H,J(i,j.name),x,t.shouldUseNativeValidation);if(ne[j.name]&&(N.valid=!1,b))break;b||(ne[j.name]?_e(n.errors,j.name,ne[j.name]):He(n.errors,j.name))}Y&&await R(Y,b,N)}}return N.valid},A=()=>{for(const w of a.unMount){const b=J(r,w);b&&(b._f.refs?b._f.refs.every(N=>!rl(N)):!rl(b._f.ref))&&K(w)}a.unMount=new Set},L=(w,b)=>(w&&b&&_e(i,w,b),!rr(F(),o)),W=(w,b,N)=>{const V={...l.mount?i:Te(b)?o:Rt(w)?{[w]:b}:b};return $v(w,a,V,N)},Q=w=>Sa(J(l.mount?i:o,w,e.shouldUnregister?J(o,w,[]):[])),G=(w,b,N={})=>{const V=J(r,w);let H=b;if(V){const j=V._f;j&&(!j.disabled&&_e(i,w,Wp(b,j)),H=us&&cs(j.ref)&&Ie(b)?"":b,Vp(j.ref)?[...j.ref.options].forEach(Y=>Y.selected=H.includes(Y.value)):j.refs?wo(j.ref)?j.refs.length>1?j.refs.forEach(Y=>!Y.disabled&&(Y.checked=Array.isArray(H)?!!H.find(ne=>ne===Y.value):H===Y.value)):j.refs[0]&&(j.refs[0].checked=!!H):j.refs.forEach(Y=>Y.checked=Y.value===H):Su(j.ref)?j.ref.value="":(j.ref.value=H,j.ref.type||d.watch.next({name:w})))}(N.shouldDirty||N.shouldTouch)&&O(w,H,N.shouldTouch,N.shouldDirty,!0),N.shouldValidate&&z(w)},ee=(w,b,N)=>{for(const V in b){const H=b[V],j=`${w}.${V}`,Y=J(r,j);(a.array.has(w)||!ji(H)||Y&&!Y._f)&&!nr(H)?ee(j,H,N):G(j,H,N)}},te=(w,b,N={})=>{const V=J(r,w),H=a.array.has(w),j=Cn(b);_e(i,w,j),H?(d.array.next({name:w,values:i}),(f.isDirty||f.dirtyFields)&&N.shouldDirty&&(n.dirtyFields=ol(o,i),d.state.next({name:w,dirtyFields:n.dirtyFields,isDirty:L(w,j)}))):V&&!V._f&&!Ie(j)?ee(w,j,N):G(w,j,N),Xc(w,a)&&d.state.next({}),d.watch.next({name:w})},Se=async w=>{const b=w.target;let N=b.name;const V=J(r,N);if(V){let H,j;const Y=b.type?il(V._f):zv(w),ne=w.type===Gc.BLUR||w.type===Gc.FOCUS_OUT,de=!Wv(V._f)&&!t.resolver&&!J(n.errors,N)&&!V._f.deps||Hv(ne,J(n.touchedFields,N),n.isSubmitted,g,p),ut=Xc(N,a,ne);_e(i,N,Y),ne?(V._f.onBlur&&V._f.onBlur(w),u&&u(0)):V._f.onChange&&V._f.onChange(w);const ge=O(N,Y,ne,!1),Tt=!dt(ge)||ut;if(!ne&&d.watch.next({name:N,type:w.type}),de)return Tt&&d.state.next({name:N,...ut?{}:ge});if(!ne&&ut&&d.state.next({}),c[N]=(c[N],1),d.state.next({isValidating:!0}),t.resolver){const{errors:ct}=await C([N]),We=nd(n.errors,r,N),oe=nd(ct,r,We.name||N);H=oe.error,N=oe.name,j=dt(ct)}else H=(await od(V,J(i,N),x,t.shouldUseNativeValidation))[N],j=await h(!0);V._f.deps&&z(V._f.deps),T(N,j,H,ge)}},z=async(w,b={})=>{let N,V;const H=tl(w);if(d.state.next({isValidating:!0}),t.resolver){const j=await P(Te(w)?w:H);N=dt(j),V=w?!H.some(Y=>J(j,Y)):N}else w?(V=(await Promise.all(H.map(async j=>{const Y=J(r,j);return await R(Y&&Y._f?{[j]:Y}:Y)}))).every(Boolean),!(!V&&!n.isValid)&&h()):V=N=await R(r);return d.state.next({...!Rt(w)||f.isValid&&N!==n.isValid?{}:{name:w},...t.resolver?{isValid:N}:{},errors:n.errors,isValidating:!1}),b.shouldFocus&&!V&&ss(r,j=>J(n.errors,j),w?H:a.mount),V},F=w=>{const b={...o,...l.mount?i:{}};return Te(w)?b:Rt(w)?J(b,w):w.map(N=>J(b,N))},B=(w,b)=>({invalid:!!J((b||n).errors,w),isDirty:!!J((b||n).dirtyFields,w),isTouched:!!J((b||n).touchedFields,w),error:J((b||n).errors,w)}),X=w=>{w?tl(w).forEach(b=>He(n.errors,b)):n.errors={},d.state.next({errors:n.errors})},U=(w,b,N)=>{const V=(J(r,w,{_f:{}})._f||{}).ref;_e(n.errors,w,{...b,ref:V}),d.state.next({name:w,errors:n.errors,isValid:!1}),N&&N.shouldFocus&&V&&V.focus&&V.focus()},k=(w,b)=>_a(w)?d.watch.subscribe({next:N=>w(W(void 0,b),N)}):W(w,b,!0),K=(w,b={})=>{for(const N of w?tl(w):a.mount)a.mount.delete(N),a.array.delete(N),J(r,N)&&(b.keepValue||(He(r,N),He(i,N)),!b.keepError&&He(n.errors,N),!b.keepDirty&&He(n.dirtyFields,N),!b.keepTouched&&He(n.touchedFields,N),!t.shouldUnregister&&!b.keepDefaultValue&&He(o,N));d.watch.next({}),d.state.next({...n,...b.keepDirty?{isDirty:L()}:{}}),!b.keepIsValid&&h()},D=(w,b={})=>{let N=J(r,w);const V=Ai(b.disabled);return _e(r,w,{_f:{...N&&N._f?N._f:{ref:{name:w}},name:w,mount:!0,...b}}),a.mount.add(w),N?V&&_e(i,w,b.disabled?void 0:J(i,w,il(N._f))):_(w,!0,b.value),{...V?{disabled:b.disabled}:{},...t.shouldUseNativeValidation?{required:!!b.required,min:zr(b.min),max:zr(b.max),minLength:zr(b.minLength),maxLength:zr(b.maxLength),pattern:zr(b.pattern)}:{},name:w,onChange:Se,onBlur:Se,ref:H=>{if(H){D(w,b),N=J(r,w);const j=Te(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,Y=Uv(j),ne=N._f.refs||[];if(Y?ne.find(de=>de===j):j===N._f.ref)return;_e(r,w,{_f:{...N._f,...Y?{refs:[...ne.filter(rl),j,...Array.isArray(J(o,w))?[{}]:[]],ref:{type:j.type,name:w}}:{ref:j}}}),_(w,!1,void 0,j)}else N=J(r,w,{}),N._f&&(N._f.mount=!1),(t.shouldUnregister||b.shouldUnregister)&&!(Rv(a.array,w)&&l.action)&&a.unMount.add(w)}}};return{control:{register:D,unregister:K,getFieldState:B,_executeSchema:C,_getWatch:W,_getDirty:L,_updateValid:h,_removeUnmounted:A,_updateFieldArray:m,_getFieldArray:Q,_subjects:d,_proxyFormState:f,get _fields(){return r},get _formValues(){return i},get _stateFlags(){return l},set _stateFlags(w){l=w},get _defaultValues(){return o},get _names(){return a},set _names(w){a=w},get _formState(){return n},set _formState(w){n=w},get _options(){return t},set _options(w){t={...t,...w}}},trigger:z,register:D,handleSubmit:(w,b)=>async N=>{N&&(N.preventDefault&&N.preventDefault(),N.persist&&N.persist());let V=!0,H=Cn(i);d.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:j,values:Y}=await C();n.errors=j,H=Y}else await R(r);dt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await w(H,N)):(b&&await b({...n.errors},N),t.shouldFocusError&&ss(r,j=>J(n.errors,j),a.mount))}catch(j){throw V=!1,j}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:dt(n.errors)&&V,submitCount:n.submitCount+1,errors:n.errors})}},watch:k,setValue:te,getValues:F,reset:(w,b={})=>{const N=w||o,V=Cn(N),H=w&&!dt(w)?V:o;if(b.keepDefaultValues||(o=N),!b.keepValues){if(b.keepDirtyValues)for(const j of a.mount)J(n.dirtyFields,j)?_e(H,j,J(i,j)):te(j,J(H,j));else{if(us&&Te(w))for(const j of a.mount){const Y=J(r,j);if(Y&&Y._f){const ne=Array.isArray(Y._f.refs)?Y._f.refs[0]:Y._f.ref;try{cs(ne)&&ne.closest("form").reset();break}catch{}}}r={}}i=e.shouldUnregister?b.keepDefaultValues?Cn(o):{}:V,d.array.next({values:H}),d.watch.next({values:H})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!f.isValid||!!b.keepIsValid,l.watch=!!e.shouldUnregister,d.state.next({submitCount:b.keepSubmitCount?n.submitCount:0,isDirty:b.keepDirty||b.keepDirtyValues?n.isDirty:!!(b.keepDefaultValues&&!rr(w,o)),isSubmitted:b.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:b.keepDirty||b.keepDirtyValues?n.dirtyFields:b.keepDefaultValues&&w?ol(o,w):{},touchedFields:b.keepTouched?n.touchedFields:{},errors:b.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(w,b={})=>{J(r,w)&&(Te(b.defaultValue)?te(w,J(o,w)):(te(w,b.defaultValue),_e(o,w,b.defaultValue)),b.keepTouched||He(n.touchedFields,w),b.keepDirty||(He(n.dirtyFields,w),n.isDirty=b.defaultValue?L(w,J(o,w)):L()),b.keepError||(He(n.errors,w),f.isValid&&h()),d.state.next({...n}))},clearErrors:X,unregister:K,setError:U,setFocus:(w,b={})=>{const N=J(r,w)._f,V=N.refs?N.refs[0]:N.ref;V.focus(),b.shouldSelect&&V.select()},getFieldState:B}}function Cu(e={}){const t=Ne.useRef(),[n,r]=Ne.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...qv(e),formState:n};const o=t.current.control,i=Ne.useCallback(l=>{Mv(l,o._proxyFormState,!0)&&(o._formState={...o._formState,...l},r({...o._formState}))},[o]);return Fv({subject:o._subjects.state,callback:i}),Ne.useEffect(()=>{o._stateFlags.mount||(o._proxyFormState.isValid&&o._updateValid(),o._stateFlags.mount=!0),o._stateFlags.watch&&(o._stateFlags.watch=!1,o._subjects.state.next({})),o._removeUnmounted()}),t.current.formState=Dv(n,o._proxyFormState),t.current}const Kv=ye.div`
display: flex;
flex-flow: row nowrap;
width: 90%;
height: 80%;
background-color: #905f4588;
margin: 20% 0 10% 0;
font-family: 'Roboto-regular';
box-shadow:
    0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034),
    0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049),
    0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067),
    0 71px 71px rgba(0, 0, 0, 0.09);
.formParts{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
    .contactImage{
        width: 40%;
        border-radius: 50%;
        filter: drop-shadow(1px 1px 5px #400811);
    }
}
.halfContact{
    display: none;
}
.formContainer{
height: 100%;
margin: 50px 0;
    .title{
        font-size: 3rem;
        color: #400811;
    }
    .form{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        width: 80%;
        .input{
            background-color: #905f45aa;
            outline: none;
            border: 0;
            color: #400811; 
            margin-top: 1rem;
            width: 100%;
            height: 2rem;
            padding: 1rem;
            border-bottom: 2px solid #400811;
            font-size: 1.2rem;
        }
        .input::placeholder { 
            color: #400811; 
        }
        .input:focus{
            color: #000;
        }
        .input::selection{
            background-color: #400811;
            color: #a42f42;
        }
        .input:hover{
            color: #000;
        }
        .textArea{
            resize: none;
            height: 6rem;
            padding: .5rem 1rem;
        }
        .send {
            min-width: 130px;
            height: 40px;
            color: #400811;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            margin-top: 1rem;
            border-radius: 5px;
            border: none;
            box-shadow:inset 2px 2px 2px 0px #400811, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
            background: #905f45;
            z-index: 1;
        }
        .send:hover:after {
            width: 100%;
            left: 0;
        }
        .send:after {
            border-radius: 5px;
            position: absolute;
            content: "";
            width: 0;
            height: 100%;
            top: 0;
            z-index: -1;
            box-shadow:inset 2px 2px 2px 0px #905f45, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
            transition: all 0.3s ease;
            background-color: #400811;
            right: 0;
        }
        .send:hover{
            color: #905f45;
        }
        .send:active {
            top: 2px;
            color: #905f45;
        }
        .validation{ 
            margin-top: 0;
            color: #a42f42;
            text-shadow: 1px 1px 1px #000;
        }
    }
    .sendMessage{
        margin-top: .8rem;
        color: #09b000;
        text-shadow: 2px 2px 3px #000;
        font-size: 1.2rem;
    }
}
@media (min-width: 768px) {
    margin: 0;
    margin-top: 5%;
    .halfContact{
    display: flex;
    }
    .formParts{
        width: 50%;
    }
    .formContainer{
        margin: 0;
    }
}
`;var Ca={urlContactPost:"https://margarita-cavero.herokuapp.com/contact",urlAddWork:"https://margarita-cavero.herokuapp.com/works",urlLogin:"https://margarita-cavero.herokuapp.com/auth/login"};const Gv=()=>{var l,a,u,s,c,f,d,p,g,x,S,h;const{register:e,reset:t,formState:{errors:n,isSubmitSuccessful:r},handleSubmit:o}=Cu({mode:"onChange",defaultValues:{firstName:"",lastName:"",email:"",message:""}});return q(Kv,{children:[y("div",{className:"formParts halfContact",children:y("img",{className:"contactImage",src:"images/contact.jpeg"})}),q("div",{className:"formParts formContainer",children:[y("h1",{className:"title",children:"CONTACTO"}),q("form",{className:"form",onSubmit:o(async m=>{t({firstName:"",lastName:"",email:"",message:""},{keepErrors:!0,keepDirty:!0,keepIsSubmitted:!0,keepTouched:!1,keepIsValid:!1,keepSubmitCount:!1}),await fetch(Ca.urlContactPost,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(m)})}),children:[y("input",{className:"input",type:"text",...e("firstName",{required:!0,minLength:3,maxLength:10}),name:"firstName",placeholder:"Nombre"}),((l=n.firstName)==null?void 0:l.type)==="required"&&y("p",{className:"validation",children:"El nombre es obligatorio"}),((a=n.firstName)==null?void 0:a.type)==="minLength"&&y("p",{className:"validation",children:"El nombre tiene que tener como m\xEDnimo 3 caracteres."}),((u=n.firstName)==null?void 0:u.type)==="maxLength"&&y("p",{className:"validation",children:"El nombre tiene que tener como m\xE1ximo 10 caracteres."}),y("input",{className:"input",type:"text",name:"lastName",...e("lastName",{required:!0,minLength:3,maxLength:30}),placeholder:"Apellido"}),((s=n.lastName)==null?void 0:s.type)==="required"&&y("p",{className:"validation",children:"El apellido es obligatorio"}),((c=n.lastName)==null?void 0:c.type)==="minLength"&&y("p",{className:"validation",children:"El apellido tiene que tener como m\xEDnimo 3 caracteres."}),((f=n.lastName)==null?void 0:f.type)==="maxLength"&&y("p",{className:"validation",children:"El apellido tiene que tener como m\xE1ximo 30 caracteres."}),y("input",{className:"input",type:"email",name:"email",...e("email",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,maxLength:50}),placeholder:"Email"}),((d=n.email)==null?void 0:d.type)==="pattern"&&y("p",{className:"validation",children:"Introduce un correo valido."}),((p=n.email)==null?void 0:p.type)==="required"&&y("p",{className:"validation",children:"El correo electronico es obligatorio."}),((g=n.email)==null?void 0:g.type)==="maxLength"&&y("p",{className:"validation",children:"El correo electronico puede tener como m\xE1ximo 50 caracteres."}),y("textarea",{className:"input textArea",name:"message",...e("message",{minLength:30,maxLength:1e3,required:!0}),placeholder:"Escribe tu mensaje..."}),((x=n.message)==null?void 0:x.type)==="minLength"&&y("p",{className:"validation",children:"El mensaje tiene que tener como m\xEDnimo 30 caracteres."}),((S=n.message)==null?void 0:S.type)==="maxLength"&&y("p",{className:"validation",children:"El mensaje tiene que tener como m\xE1ximo 1000 caracteres."}),((h=n.message)==null?void 0:h.type)==="required"&&y("p",{className:"validation",children:"El mensaje es obligatorio."}),y("button",{className:"send",type:"submit",children:"Enviar"})]}),r===!0&&y("p",{className:"sendMessage",children:"Mensaje enviado correctamente"})]})]})},Xv=()=>y(Av,{children:y(Gv,{})}),Ea=ye.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
padding: 3rem;
.audioPlayer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 343px;
    height: 200px;
    max-width: 100%;
    background-color: #4a4747bb;
    border-radius: 16px;
    box-shadow: 0 0 5px #777;
    z-index:1;
    margin-bottom: 3rem;
    .title{
        color: #eee7;
        /* font-family: 'Roboto-regular'; */
        font-size: 2rem;
        /* margin-top: -10%; */
    }
    .timeBar{
        -webkit-appearance: none;
      width: 90%;
      height: 8px;
      border-radius: 5px;
      background: #a42f42;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      margin: 20px;
    }
    .timeBar:hover {
      opacity: 1;
    }
    .timeBar::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #cd9b81;
      cursor: pointer;
      box-shadow:0px 0px 11px 8px rgba(0,0,0,0.26);
      background-color: #cd9b81;
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .timeBar::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #cd9b81;
      cursor: pointer;
      box-shadow:0px 0px 11px 8px rgba(0,0,0,0.26);
      background-color: #cd9b81;
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .buttons{
        display: flex;
        flex-direction: row;
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 5px;
        cursor: pointer;
        background-size: cover;
    }
    .button:hover{
        filter: drop-shadow(0 0 5px #000);
    }
    .button:active{
        filter: drop-shadow(0 0 0px #0000);
    }
    .play{
        background-image: url('images/audio-player/play.png');
    }
    .pause{
        background-image: url('images/audio-player/pausa.png');
    }
    .stop{
        background-image: url('images/audio-player/stop.png');
    }
    .time{
        background-color: #000;
        color: #fff;
        border-radius: 3px;
        font-family: 'Typewriter-Bold';
        font-size: 12px;
    }
}
`,Zv=ye.div`
min-height: 50vh;
width: 100%;
background-image: url('images/demos/wallpaper4.webp');
background-size:cover;
background-attachment: fixed;
background-position: top;
color: #fff;
text-align: center;
font-family: 'Roboto-regular';
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 3rem;
    font-size: 3rem;
    text-shadow: 1px 1px 5px #000;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
    .titles{
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`,Jv=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/audiolibro.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Audiolibro"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},ey=()=>q(Zv,{children:[y("h2",{className:"titles",children:"AUDIOLIBROS"}),y("p",{className:"text paragraph",children:"Otro ejemplo de mis capacidades son los audiolibros, rel\xE1jate y disfruta de esta muestra. \u{1F607}"}),y(Ea,{children:y(Jv,{})})]}),ty=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/adolescente.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Adolescente"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},ny=ye.div`
width:100%;
min-height: 100vh;
background-image: url('images/demos/wallpaper2.webp');
background-size:cover;
background-attachment: fixed;
background-position: right;
font-family: 'Roboto-regular';
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 25%;
    font-size: 3rem;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
background-position: center;
    .titles{
        padding-top: 10%;
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`,ry=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/mujer.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Mujer"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},oy=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/mujer-joven.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Mujer Joven"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},iy=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/ni\xF1a.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Ni\xF1a"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},ay=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/ni\xF1o.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Ni\xF1o"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},ly=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/ni\xF1o-peque.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Ni\xF1o Peque\xF1o"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},sy=()=>q(ny,{children:[y("h1",{className:"text titles",children:"DOBLAJE"}),y("p",{className:"text paragraph",children:"Estos son algunos de los registros que poseo como actriz de doblaje, es un honor para m\xED mostrar el alma de mis personajes, no dudes en contactar si necesitas m\xE1s demos. \u{1F642}"}),q(Ea,{children:[y(ty,{}),y(ry,{}),y(oy,{}),y(iy,{}),y(ay,{}),y(ly,{})]})]}),uy=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/locucion.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Locuci\xF3n"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},cy=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/locucion2.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Locuci\xF3n 2"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},dy=ye.div`
min-height: 50vh;
width: 100%;
background-image: url('images/demos/wallpaper3.webp');
background-size:cover;
/* background-attachment: fixed; */
background-position: center;
font-family: 'Roboto-regular';
border-top: 2px solid #400811;
border-bottom: 2px solid #400811;
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 3rem;
    font-size: 3rem;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
    .titles{
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`,fy=()=>q(dy,{children:[y("h2",{className:"titles text",children:"LOCUCIONES"}),y("p",{className:"text paragraph",children:"No todo en la vida es doblaje, tambien realizo locuciones y en este caso quiero mostrar un ejemplo de lo que soy capaz de hacer en este aspecto, espero que te guste. \u{1F60A}"}),q(Ea,{children:[y(uy,{}),y(cy,{})]})]}),py=()=>{const e=M.exports.useRef(),[t,n]=M.exports.useState(0),[r,o]=M.exports.useState(0);return q("div",{className:"audioPlayer",children:[q("audio",{src:"../audios/cancion.mp3",ref:e,onTimeUpdate:()=>{n(e.current.currentTime),o(e.current.currentTime/e.current.duration*100)},children:["Your browser does not support the",y("code",{children:"audio"})," element."]}),y("h3",{className:"title",children:"Canci\xF3n"}),y("input",{className:"timeBar",type:"range",min:"0",max:"100",step:"1",value:r,onChange:s=>{const c=e.current.duration*(+s.target.value/100);e.current.currentTime=c,o(s.target.value)}}),q("div",{className:"buttons",children:[y("div",{className:"button play",onClick:()=>{e.current.play()}}),y("div",{className:"button pause",onClick:()=>{e.current.pause()}}),y("div",{className:"button stop",onClick:()=>{e.current.pause(),e.current.currentTime=0}})]})]})},my=ye.div`
min-height: 50vh;
width: 100%;
font-family: 'Roboto-regular';
border-top: 2px solid #400811;
border-bottom: 2px solid #400811;
background-image: url('images/demos/wallpaper1.webp');
background-size:cover;
background-position: center;
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 3rem;
    font-size: 3rem;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
    .titles{
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`,hy=()=>q(my,{children:[y("h2",{className:"titles text",children:"CANTO"}),y("p",{className:"text paragraph",children:"Cantar es para m\xED algo ilusionante que me ha ayudado mucho a mejorar en mis otras facetas a nivel profesional. \u{1F917}"}),y(Ea,{children:y(py,{})})]}),gy=()=>q(xo,{children:[y(sy,{}),y(fy,{}),y(ey,{}),y(hy,{})]}),vy=()=>{const e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".sticky1"}).setClassToggle(".aboutMe","show").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky2"}).setClassToggle(".s","show2").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky3"}).setClassToggle(".s","show3").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky3"}).setClassToggle(".o","show4").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky4"}).setClassToggle(".o","show5").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky4"}).setClassToggle(".b","show6").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky5"}).setClassToggle(".b","show7").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky5"}).setClassToggle(".r","show8").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky6"}).setClassToggle(".r","show9").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky6"}).setClassToggle(".e","show10").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky7"}).setClassToggle(".e","show11").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky7"}).setClassToggle(".mi","show12").addTo(e)},yy=ye.div`
display:flex;
align-items:center;
position: relative;
flex-direction:column;
width: 100%;
font-family: 'Roboto-regular';
    .sticky1{
        width: 90%;
        height: 1500px;
        .aboutMe{
            position:sticky;
            top: 40%;
            font-size:3rem;
            margin: 1rem;
            text-align:center;
            opacity:0;
            transition: all 2s;
            color: #fff;
            .sobre{
                color: #000;
                .s, .o, .b, .r, .e, .mi{
                    transition: all .7s;
                }
            }
        }
        .divs{
            width:100%;
            height: 200px;
        }
    }
    .aboutMe.show{
        opacity:1;
    }
    .mi.show12{
        animation: mi 1s linear alternate;
        color: #000;
    }
    @keyframes mi {
        0%{
            color: #fff;
        }
        50%{
            color: #a42f42;
        }
        100%{
            color: #000;
        }
    }
    .presentation{
        margin: .5rem 5%;
        font-size:1.5rem;
        text-align:justify;
        color: #000;
        text-shadow: 1px 1px 1px #555;
        line-height: 2.5rem;
        .links{
            color: #555;
            transition: all 1s;
        }
        .links:hover{
            color: #aaa;
        }
    }
    .s.show2{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .s.show3{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .o.show4{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .o.show5{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .b.show6{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .b.show7{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .r.show8{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .r.show9{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .e.show10{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .e.show11{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
@media (min-width: 768px){
    .sticky1{
        width: 50%;
        .aboutMe{
            font-size:6rem;
            margin: 2rem;
        }
    }
        .s.show2{
        font-size:8rem;
    }
    .presentation{
        font-size: 2rem;
        margin: 1rem 10%;
        line-height: 2.5rem;
    }
    .s.show3{
        font-size:6rem;
    }
    .o.show4{
        font-size:8rem;
    }
    .o.show5{
        font-size:6rem;
    }
    .b.show6{
        font-size:8rem;
    }
    .b.show7{
        font-size:6rem;
    }
    .r.show8{
        font-size:8rem;
    }
    .r.show9{
        font-size:6rem;
    }
    .e.show10{
        font-size:8rem;
    }
    .e.show11{
        font-size:6rem;
    }
}
`,xy=()=>{const e=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),t=new Date;return M.exports.useEffect(()=>{vy()},[]),q(yy,{children:[q("div",{className:"sticky1",children:[q("h2",{className:"aboutMe",children:[q("span",{className:"sobre",children:[y("span",{className:"s",children:"S"}),y("span",{className:"o",children:"O"}),y("span",{className:"b",children:"B"}),y("span",{className:"r",children:"R"}),y("span",{className:"e",children:"E"})," "]}),y("span",{className:"mi",children:"M\xCD"})]}),y("div",{className:"divs sticky2"}),y("div",{className:"divs sticky3"}),y("div",{className:"divs sticky4"}),y("div",{className:"divs sticky5"}),y("div",{className:"divs sticky6"}),y("div",{className:"divs sticky7"})]}),q("p",{className:"presentation",children:["Hola, mi nombre es Margarita Cavero y hoy d\xEDa ",t.getDate()+" de "+e[t.getMonth()]+" de "+t.getFullYear()," hace ",t.getFullYear()-2010," a\xF1os que decid\xED dedicarme al doblaje. Fue un camino duro, ya que es una profesi\xF3n exigente."]}),y("br",{}),y("p",{className:"presentation",children:"Lo primero que hice fue informarme de que necesitaba estudiar para dedicarme a esto, me form\xE9 en interpretaci\xF3n, teatro musical, dicci\xF3n, t\xE9cnica vocal, doblaje y locuci\xF3n. A partir de ese momento dediqu\xE9 varios a\xF1os a mi formaci\xF3n, tambien practicando por mi cuenta en casa. La parte de hecharle horas en casa y seguir investigando sobre mi voz y como puedo ofrecer cosas diferentes con el asesoramiento de un especialista, es un habito que sigo realizando hasta el d\xEDa de hoy ya que es una buena manera de mantenerse y aprender cosas nuevas."}),y("br",{}),y("p",{className:"presentation",children:"En 2014 decid\xED mudarme a Barcelona y antes de empezar, invert\xED en demos profesionales y me trabaj\xE9 para poder realizar mi trabajo de la mejor manera posible, me sent\xEDa preparada."}),y("br",{}),q("p",{className:"presentation",children:["Han pasado ",t.getFullYear()-2014," a\xF1os desde entonces y puedo decir que estoy muy orgullosa del camino que he recorrido, de todas las personas que he conocido dentro de la profesi\xF3n y me han ayudado a ser quien soy. Tras cientos de trabajos a mis espaldas tengo ganas de seguir creciendo, mejorando y disfrutando del arte del doblaje."]}),y("br",{}),q("p",{className:"presentation",children:["Actualmente resido en Madrid y a parte de dedicarme al doblaje, tambien canto, realizo locuciones y audiolibros. Te invito a pasarte por mis ",y(fo,{className:"links",to:"/demos",children:"demos"})," para conocer un poco m\xE1s de m\xED."]})]})};ye.div`
width: 100%;
height: 100vh;
`;const wy=()=>y(xo,{}),ky=()=>{const e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".title"}).setClassToggle(".title","show").addTo(e)},Sy=ye.div`
font-family: 'Roboto-regular';
margin-top: 2rem;
.titleContainer{
    width:100%;
    height: 500px;
    .title{
        position: sticky;
        top: 25%;
        color: #fff;
        font-size: 2rem;
        text-align: center;
        margin: 0;
        padding: 2rem 1.3rem 0 1.3rem;
        transition: all 1s;
    }
    .show{
        color: #400811;
    }
}
.companiesContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 40px;
    .imgsContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 200px;
        margin: 40px;
        .companies{
            width: 80%;
        }
    }
}
.photo{
    width:100%;
    height: 60vh;
    background-image: url('images/margaritaCavero4-phone.webp');
    background-attachment: fixed;
    background-position: top;
    background-size: cover;
}
@media (min-width: 768px) {
    .titleContainer{
        .title{
            font-size: 4rem;
            margin: 0 8rem;
            padding: 2rem 2rem 0 2rem;
        }
    }
    .companiesContainer{
        .imgsContainer{
            width: 20%;
            margin: 30px;
        }
    }
    .photo{
        background-image: url('images/margaritaCavero4.webp');
        background-position: top;
    }
}
`,_y=()=>(M.exports.useEffect(()=>{ky()},[]),q(Sy,{children:[y("div",{className:"titleContainer",children:y("h2",{className:"title",children:"Algunas de las compa\xF1ias con las que he trabajado:"})}),q("div",{className:"companiesContainer",children:[y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/disney.png",alt:"disney"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/hbo.png",alt:"hbo"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/netflix.png",alt:"netflix"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/sony.png",alt:"sony"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/paramount.png",alt:"paramount"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/universal.png",alt:"universal"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/apple.png",alt:"apple"})}),y("div",{className:"imgsContainer",children:y("img",{className:"companies",src:"images/logos/warner.png",alt:"warner"})})]}),y("div",{className:"photo"})]})),Cy=ye.div`
background: #cd9b81;
/* background: -webkit-linear-gradient(to right, #400811, #cd9b81); */
/* background: linear-gradient(to right, #400811, #cd9b81); */
background: -webkit-linear-gradient(-180deg, #400811 0%, #cd9b81 70%);
background: linear-gradient(-180deg, #400811 0%, #cd9b81 70%);
.margarita-img{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-image: url('images/margaritaCavero3.webp');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
}
`,Ey=()=>{const e=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".riendo"}).setClassToggle(".riendo","show").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky"}).setClassToggle(".riendo","show2").addTo(e),new ScrollMagic.Scene({triggerElement:".sticky3"}).setClassToggle(".riendo","show3").addTo(e)},by=ye.div`
display: flex;
justify-content: center;
margin-top: 2rem;
.riendoContainer{
    display: block;
    width:80%;
    height: 1000px;
    transition: all 3s;
    text-align: center;
    .riendo{
        position: sticky;
        margin: auto;
        top: 20%;
        opacity: 0;
        width: 30%;
        border-radius: 20%;
        transition: all 3s;
    }
    .riendo.show{
        opacity: 1;
    }
    .sticky{
        width: 100%;
        height: 1px;
        margin-top: 100px;
    }
}
.riendo.show2{
    width: 80%;
    border-radius: 100%;
    filter: drop-shadow(0 0 5px #000);
}
`,Ny=()=>(M.exports.useEffect(()=>{Ey()},[]),y(by,{children:q("div",{className:"riendoContainer",children:[y("img",{className:"riendo",src:"images/margaritaCavero2.webp",alt:"Actriz de doblaje riendo"}),y("div",{className:"divs sticky"})]})}));var Qp={exports:{}};(function(e,t){(function(n,r){e.exports=r(M.exports)})(typeof self!="undefined"?self:xm,n=>(()=>{var r={7403:(a,u,s)=>{s.d(u,{default:()=>Se});var c=s(4087),f=s.n(c);const d=function(z){return new RegExp(/<[a-z][\s\S]*>/i).test(z)},p=function(z){var F=document.createElement("div");return F.innerHTML=z,F.childNodes},g=function(z,F){return Math.floor(Math.random()*(F-z+1))+z};var x="TYPE_CHARACTER",S="REMOVE_CHARACTER",h="REMOVE_ALL",m="REMOVE_LAST_VISIBLE_NODE",v="PAUSE_FOR",_="CALL_FUNCTION",O="ADD_HTML_TAG_ELEMENT",T="CHANGE_DELETE_SPEED",C="CHANGE_DELAY",P="CHANGE_CURSOR",R="PASTE_STRING",A="HTML_TAG";function L(z,F){var B=Object.keys(z);if(Object.getOwnPropertySymbols){var X=Object.getOwnPropertySymbols(z);F&&(X=X.filter(function(U){return Object.getOwnPropertyDescriptor(z,U).enumerable})),B.push.apply(B,X)}return B}function W(z){for(var F=1;F<arguments.length;F++){var B=arguments[F]!=null?arguments[F]:{};F%2?L(Object(B),!0).forEach(function(X){te(z,X,B[X])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(B)):L(Object(B)).forEach(function(X){Object.defineProperty(z,X,Object.getOwnPropertyDescriptor(B,X))})}return z}function Q(z){return function(F){if(Array.isArray(F))return G(F)}(z)||function(F){if(typeof Symbol!="undefined"&&F[Symbol.iterator]!=null||F["@@iterator"]!=null)return Array.from(F)}(z)||function(F,B){if(F){if(typeof F=="string")return G(F,B);var X=Object.prototype.toString.call(F).slice(8,-1);return X==="Object"&&F.constructor&&(X=F.constructor.name),X==="Map"||X==="Set"?Array.from(F):X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X)?G(F,B):void 0}}(z)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function G(z,F){(F==null||F>z.length)&&(F=z.length);for(var B=0,X=new Array(F);B<F;B++)X[B]=z[B];return X}function ee(z,F){for(var B=0;B<F.length;B++){var X=F[B];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(z,X.key,X)}}function te(z,F,B){return F in z?Object.defineProperty(z,F,{value:B,enumerable:!0,configurable:!0,writable:!0}):z[F]=B,z}const Se=function(){function z(X,U){var k=this;if(function(D,E){if(!(D instanceof E))throw new TypeError("Cannot call a class as a function")}(this,z),te(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),te(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),te(this,"setupWrapperElement",function(){k.state.elements.container&&(k.state.elements.wrapper.className=k.options.wrapperClassName,k.state.elements.cursor.className=k.options.cursorClassName,k.state.elements.cursor.innerHTML=k.options.cursor,k.state.elements.container.innerHTML="",k.state.elements.container.appendChild(k.state.elements.wrapper),k.state.elements.container.appendChild(k.state.elements.cursor))}),te(this,"start",function(){return k.state.eventLoopPaused=!1,k.runEventLoop(),k}),te(this,"pause",function(){return k.state.eventLoopPaused=!0,k}),te(this,"stop",function(){return k.state.eventLoop&&((0,c.cancel)(k.state.eventLoop),k.state.eventLoop=null),k}),te(this,"pauseFor",function(D){return k.addEventToQueue(v,{ms:D}),k}),te(this,"typeOutAllStrings",function(){return typeof k.options.strings=="string"?(k.typeString(k.options.strings).pauseFor(k.options.pauseFor),k):(k.options.strings.forEach(function(D){k.typeString(D).pauseFor(k.options.pauseFor).deleteAll(k.options.deleteSpeed)}),k)}),te(this,"typeString",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(D))return k.typeOutHTMLString(D,E);if(D){var re=k.options||{},$=re.stringSplitter,ie=typeof $=="function"?$(D):D.split("");k.typeCharacters(ie,E)}return k}),te(this,"pasteString",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(D)?k.typeOutHTMLString(D,E,!0):(D&&k.addEventToQueue(R,{character:D,node:E}),k)}),te(this,"typeOutHTMLString",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,re=arguments.length>2?arguments[2]:void 0,$=p(D);if($.length>0)for(var ie=0;ie<$.length;ie++){var w=$[ie],b=w.innerHTML;w&&w.nodeType!==3?(w.innerHTML="",k.addEventToQueue(O,{node:w,parentNode:E}),re?k.pasteString(b,w):k.typeString(b,w)):w.textContent&&(re?k.pasteString(w.textContent,E):k.typeString(w.textContent,E))}return k}),te(this,"deleteAll",function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return k.addEventToQueue(h,{speed:D}),k}),te(this,"changeDeleteSpeed",function(D){if(!D)throw new Error("Must provide new delete speed");return k.addEventToQueue(T,{speed:D}),k}),te(this,"changeDelay",function(D){if(!D)throw new Error("Must provide new delay");return k.addEventToQueue(C,{delay:D}),k}),te(this,"changeCursor",function(D){if(!D)throw new Error("Must provide new cursor");return k.addEventToQueue(P,{cursor:D}),k}),te(this,"deleteChars",function(D){if(!D)throw new Error("Must provide amount of characters to delete");for(var E=0;E<D;E++)k.addEventToQueue(S);return k}),te(this,"callFunction",function(D,E){if(!D||typeof D!="function")throw new Error("Callbak must be a function");return k.addEventToQueue(_,{cb:D,thisArg:E}),k}),te(this,"typeCharacters",function(D){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(re){k.addEventToQueue(x,{character:re,node:E})}),k}),te(this,"removeCharacters",function(D){if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(){k.addEventToQueue(S)}),k}),te(this,"addEventToQueue",function(D,E){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return k.addEventToStateProperty(D,E,re,"eventQueue")}),te(this,"addReverseCalledEvent",function(D,E){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2],$=k.options.loop;return $?k.addEventToStateProperty(D,E,re,"reverseCalledEvents"):k}),te(this,"addEventToStateProperty",function(D,E){var re=arguments.length>2&&arguments[2]!==void 0&&arguments[2],$=arguments.length>3?arguments[3]:void 0,ie={eventName:D,eventArgs:E||{}};return k.state[$]=re?[ie].concat(Q(k.state[$])):[].concat(Q(k.state[$]),[ie]),k}),te(this,"runEventLoop",function(){k.state.lastFrameTime||(k.state.lastFrameTime=Date.now());var D=Date.now(),E=D-k.state.lastFrameTime;if(!k.state.eventQueue.length){if(!k.options.loop)return;k.state.eventQueue=Q(k.state.calledEvents),k.state.calledEvents=[],k.options=W({},k.state.initialOptions)}if(k.state.eventLoop=f()(k.runEventLoop),!k.state.eventLoopPaused){if(k.state.pauseUntil){if(D<k.state.pauseUntil)return;k.state.pauseUntil=null}var re,$=Q(k.state.eventQueue),ie=$.shift();if(!(E<=(re=ie.eventName===m||ie.eventName===S?k.options.deleteSpeed==="natural"?g(40,80):k.options.deleteSpeed:k.options.delay==="natural"?g(120,160):k.options.delay))){var w=ie.eventName,b=ie.eventArgs;switch(k.logInDevMode({currentEvent:ie,state:k.state,delay:re}),w){case R:case x:var N=b.character,V=b.node,H=document.createTextNode(N),j=H;k.options.onCreateTextNode&&typeof k.options.onCreateTextNode=="function"&&(j=k.options.onCreateTextNode(N,H)),j&&(V?V.appendChild(j):k.state.elements.wrapper.appendChild(j)),k.state.visibleNodes=[].concat(Q(k.state.visibleNodes),[{type:"TEXT_NODE",character:N,node:j}]);break;case S:$.unshift({eventName:m,eventArgs:{removingCharacterNode:!0}});break;case v:var Y=ie.eventArgs.ms;k.state.pauseUntil=Date.now()+parseInt(Y);break;case _:var ne=ie.eventArgs,de=ne.cb,ut=ne.thisArg;de.call(ut,{elements:k.state.elements});break;case O:var ge=ie.eventArgs,Tt=ge.node,ct=ge.parentNode;ct?ct.appendChild(Tt):k.state.elements.wrapper.appendChild(Tt),k.state.visibleNodes=[].concat(Q(k.state.visibleNodes),[{type:A,node:Tt,parentNode:ct||k.state.elements.wrapper}]);break;case h:var We=k.state.visibleNodes,oe=b.speed,fe=[];oe&&fe.push({eventName:T,eventArgs:{speed:oe,temp:!0}});for(var In=0,Cr=We.length;In<Cr;In++)fe.push({eventName:m,eventArgs:{removingCharacterNode:!1}});oe&&fe.push({eventName:T,eventArgs:{speed:k.options.deleteSpeed,temp:!0}}),$.unshift.apply($,fe);break;case m:var jt=ie.eventArgs.removingCharacterNode;if(k.state.visibleNodes.length){var ba=k.state.visibleNodes.pop(),gm=ba.type,ko=ba.node,vm=ba.character;k.options.onRemoveNode&&typeof k.options.onRemoveNode=="function"&&k.options.onRemoveNode({node:ko,character:vm}),ko&&ko.parentNode.removeChild(ko),gm===A&&jt&&$.unshift({eventName:m,eventArgs:{}})}break;case T:k.options.deleteSpeed=ie.eventArgs.speed;break;case C:k.options.delay=ie.eventArgs.delay;break;case P:k.options.cursor=ie.eventArgs.cursor,k.state.elements.cursor.innerHTML=ie.eventArgs.cursor}k.options.loop&&(ie.eventName===m||ie.eventArgs&&ie.eventArgs.temp||(k.state.calledEvents=[].concat(Q(k.state.calledEvents),[ie]))),k.state.eventQueue=$,k.state.lastFrameTime=D}}}),X)if(typeof X=="string"){var K=document.querySelector(X);if(!K)throw new Error("Could not find container element");this.state.elements.container=K}else this.state.elements.container=X;U&&(this.options=W(W({},this.options),U)),this.state.initialOptions=W({},this.options),this.init()}var F,B;return F=z,(B=[{key:"init",value:function(){var X,U;this.setupWrapperElement(),this.addEventToQueue(P,{cursor:this.options.cursor},!0),this.addEventToQueue(h,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(X=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(U=document.createElement("style")).appendChild(document.createTextNode(X)),document.head.appendChild(U),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(X){this.options.devMode&&console.log(X)}}])&&ee(F.prototype,B),Object.defineProperty(F,"prototype",{writable:!1}),z}()},8552:(a,u,s)=>{var c=s(852)(s(5639),"DataView");a.exports=c},1989:(a,u,s)=>{var c=s(1789),f=s(401),d=s(7667),p=s(1327),g=s(1866);function x(S){var h=-1,m=S==null?0:S.length;for(this.clear();++h<m;){var v=S[h];this.set(v[0],v[1])}}x.prototype.clear=c,x.prototype.delete=f,x.prototype.get=d,x.prototype.has=p,x.prototype.set=g,a.exports=x},8407:(a,u,s)=>{var c=s(7040),f=s(4125),d=s(2117),p=s(7518),g=s(4705);function x(S){var h=-1,m=S==null?0:S.length;for(this.clear();++h<m;){var v=S[h];this.set(v[0],v[1])}}x.prototype.clear=c,x.prototype.delete=f,x.prototype.get=d,x.prototype.has=p,x.prototype.set=g,a.exports=x},7071:(a,u,s)=>{var c=s(852)(s(5639),"Map");a.exports=c},3369:(a,u,s)=>{var c=s(4785),f=s(1285),d=s(6e3),p=s(9916),g=s(5265);function x(S){var h=-1,m=S==null?0:S.length;for(this.clear();++h<m;){var v=S[h];this.set(v[0],v[1])}}x.prototype.clear=c,x.prototype.delete=f,x.prototype.get=d,x.prototype.has=p,x.prototype.set=g,a.exports=x},3818:(a,u,s)=>{var c=s(852)(s(5639),"Promise");a.exports=c},8525:(a,u,s)=>{var c=s(852)(s(5639),"Set");a.exports=c},8668:(a,u,s)=>{var c=s(3369),f=s(619),d=s(2385);function p(g){var x=-1,S=g==null?0:g.length;for(this.__data__=new c;++x<S;)this.add(g[x])}p.prototype.add=p.prototype.push=f,p.prototype.has=d,a.exports=p},6384:(a,u,s)=>{var c=s(8407),f=s(7465),d=s(3779),p=s(7599),g=s(4758),x=s(4309);function S(h){var m=this.__data__=new c(h);this.size=m.size}S.prototype.clear=f,S.prototype.delete=d,S.prototype.get=p,S.prototype.has=g,S.prototype.set=x,a.exports=S},2705:(a,u,s)=>{var c=s(5639).Symbol;a.exports=c},1149:(a,u,s)=>{var c=s(5639).Uint8Array;a.exports=c},577:(a,u,s)=>{var c=s(852)(s(5639),"WeakMap");a.exports=c},4963:a=>{a.exports=function(u,s){for(var c=-1,f=u==null?0:u.length,d=0,p=[];++c<f;){var g=u[c];s(g,c,u)&&(p[d++]=g)}return p}},4636:(a,u,s)=>{var c=s(2545),f=s(5694),d=s(1469),p=s(4144),g=s(5776),x=s(6719),S=Object.prototype.hasOwnProperty;a.exports=function(h,m){var v=d(h),_=!v&&f(h),O=!v&&!_&&p(h),T=!v&&!_&&!O&&x(h),C=v||_||O||T,P=C?c(h.length,String):[],R=P.length;for(var A in h)!m&&!S.call(h,A)||C&&(A=="length"||O&&(A=="offset"||A=="parent")||T&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||g(A,R))||P.push(A);return P}},2488:a=>{a.exports=function(u,s){for(var c=-1,f=s.length,d=u.length;++c<f;)u[d+c]=s[c];return u}},2908:a=>{a.exports=function(u,s){for(var c=-1,f=u==null?0:u.length;++c<f;)if(s(u[c],c,u))return!0;return!1}},8470:(a,u,s)=>{var c=s(7813);a.exports=function(f,d){for(var p=f.length;p--;)if(c(f[p][0],d))return p;return-1}},8866:(a,u,s)=>{var c=s(2488),f=s(1469);a.exports=function(d,p,g){var x=p(d);return f(d)?x:c(x,g(d))}},4239:(a,u,s)=>{var c=s(2705),f=s(9607),d=s(2333),p=c?c.toStringTag:void 0;a.exports=function(g){return g==null?g===void 0?"[object Undefined]":"[object Null]":p&&p in Object(g)?f(g):d(g)}},9454:(a,u,s)=>{var c=s(4239),f=s(7005);a.exports=function(d){return f(d)&&c(d)=="[object Arguments]"}},939:(a,u,s)=>{var c=s(2492),f=s(7005);a.exports=function d(p,g,x,S,h){return p===g||(p==null||g==null||!f(p)&&!f(g)?p!=p&&g!=g:c(p,g,x,S,d,h))}},2492:(a,u,s)=>{var c=s(6384),f=s(7114),d=s(8351),p=s(6096),g=s(4160),x=s(1469),S=s(4144),h=s(6719),m="[object Arguments]",v="[object Array]",_="[object Object]",O=Object.prototype.hasOwnProperty;a.exports=function(T,C,P,R,A,L){var W=x(T),Q=x(C),G=W?v:g(T),ee=Q?v:g(C),te=(G=G==m?_:G)==_,Se=(ee=ee==m?_:ee)==_,z=G==ee;if(z&&S(T)){if(!S(C))return!1;W=!0,te=!1}if(z&&!te)return L||(L=new c),W||h(T)?f(T,C,P,R,A,L):d(T,C,G,P,R,A,L);if(!(1&P)){var F=te&&O.call(T,"__wrapped__"),B=Se&&O.call(C,"__wrapped__");if(F||B){var X=F?T.value():T,U=B?C.value():C;return L||(L=new c),A(X,U,P,R,L)}}return!!z&&(L||(L=new c),p(T,C,P,R,A,L))}},8458:(a,u,s)=>{var c=s(3560),f=s(5346),d=s(3218),p=s(346),g=/^\[object .+?Constructor\]$/,x=Function.prototype,S=Object.prototype,h=x.toString,m=S.hasOwnProperty,v=RegExp("^"+h.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(_){return!(!d(_)||f(_))&&(c(_)?v:g).test(p(_))}},8749:(a,u,s)=>{var c=s(4239),f=s(1780),d=s(7005),p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Arguments]"]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p["[object Map]"]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p["[object Set]"]=p["[object String]"]=p["[object WeakMap]"]=!1,a.exports=function(g){return d(g)&&f(g.length)&&!!p[c(g)]}},280:(a,u,s)=>{var c=s(5726),f=s(6916),d=Object.prototype.hasOwnProperty;a.exports=function(p){if(!c(p))return f(p);var g=[];for(var x in Object(p))d.call(p,x)&&x!="constructor"&&g.push(x);return g}},2545:a=>{a.exports=function(u,s){for(var c=-1,f=Array(u);++c<u;)f[c]=s(c);return f}},1717:a=>{a.exports=function(u){return function(s){return u(s)}}},4757:a=>{a.exports=function(u,s){return u.has(s)}},4429:(a,u,s)=>{var c=s(5639)["__core-js_shared__"];a.exports=c},7114:(a,u,s)=>{var c=s(8668),f=s(2908),d=s(4757);a.exports=function(p,g,x,S,h,m){var v=1&x,_=p.length,O=g.length;if(_!=O&&!(v&&O>_))return!1;var T=m.get(p),C=m.get(g);if(T&&C)return T==g&&C==p;var P=-1,R=!0,A=2&x?new c:void 0;for(m.set(p,g),m.set(g,p);++P<_;){var L=p[P],W=g[P];if(S)var Q=v?S(W,L,P,g,p,m):S(L,W,P,p,g,m);if(Q!==void 0){if(Q)continue;R=!1;break}if(A){if(!f(g,function(G,ee){if(!d(A,ee)&&(L===G||h(L,G,x,S,m)))return A.push(ee)})){R=!1;break}}else if(L!==W&&!h(L,W,x,S,m)){R=!1;break}}return m.delete(p),m.delete(g),R}},8351:(a,u,s)=>{var c=s(2705),f=s(1149),d=s(7813),p=s(7114),g=s(8776),x=s(1814),S=c?c.prototype:void 0,h=S?S.valueOf:void 0;a.exports=function(m,v,_,O,T,C,P){switch(_){case"[object DataView]":if(m.byteLength!=v.byteLength||m.byteOffset!=v.byteOffset)return!1;m=m.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(m.byteLength!=v.byteLength||!C(new f(m),new f(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+m,+v);case"[object Error]":return m.name==v.name&&m.message==v.message;case"[object RegExp]":case"[object String]":return m==v+"";case"[object Map]":var R=g;case"[object Set]":var A=1&O;if(R||(R=x),m.size!=v.size&&!A)return!1;var L=P.get(m);if(L)return L==v;O|=2,P.set(m,v);var W=p(R(m),R(v),O,T,C,P);return P.delete(m),W;case"[object Symbol]":if(h)return h.call(m)==h.call(v)}return!1}},6096:(a,u,s)=>{var c=s(8234),f=Object.prototype.hasOwnProperty;a.exports=function(d,p,g,x,S,h){var m=1&g,v=c(d),_=v.length;if(_!=c(p).length&&!m)return!1;for(var O=_;O--;){var T=v[O];if(!(m?T in p:f.call(p,T)))return!1}var C=h.get(d),P=h.get(p);if(C&&P)return C==p&&P==d;var R=!0;h.set(d,p),h.set(p,d);for(var A=m;++O<_;){var L=d[T=v[O]],W=p[T];if(x)var Q=m?x(W,L,T,p,d,h):x(L,W,T,d,p,h);if(!(Q===void 0?L===W||S(L,W,g,x,h):Q)){R=!1;break}A||(A=T=="constructor")}if(R&&!A){var G=d.constructor,ee=p.constructor;G==ee||!("constructor"in d)||!("constructor"in p)||typeof G=="function"&&G instanceof G&&typeof ee=="function"&&ee instanceof ee||(R=!1)}return h.delete(d),h.delete(p),R}},1957:(a,u,s)=>{var c=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g;a.exports=c},8234:(a,u,s)=>{var c=s(8866),f=s(9551),d=s(3674);a.exports=function(p){return c(p,d,f)}},5050:(a,u,s)=>{var c=s(7019);a.exports=function(f,d){var p=f.__data__;return c(d)?p[typeof d=="string"?"string":"hash"]:p.map}},852:(a,u,s)=>{var c=s(8458),f=s(7801);a.exports=function(d,p){var g=f(d,p);return c(g)?g:void 0}},9607:(a,u,s)=>{var c=s(2705),f=Object.prototype,d=f.hasOwnProperty,p=f.toString,g=c?c.toStringTag:void 0;a.exports=function(x){var S=d.call(x,g),h=x[g];try{x[g]=void 0;var m=!0}catch{}var v=p.call(x);return m&&(S?x[g]=h:delete x[g]),v}},9551:(a,u,s)=>{var c=s(4963),f=s(479),d=Object.prototype.propertyIsEnumerable,p=Object.getOwnPropertySymbols,g=p?function(x){return x==null?[]:(x=Object(x),c(p(x),function(S){return d.call(x,S)}))}:f;a.exports=g},4160:(a,u,s)=>{var c=s(8552),f=s(7071),d=s(3818),p=s(8525),g=s(577),x=s(4239),S=s(346),h="[object Map]",m="[object Promise]",v="[object Set]",_="[object WeakMap]",O="[object DataView]",T=S(c),C=S(f),P=S(d),R=S(p),A=S(g),L=x;(c&&L(new c(new ArrayBuffer(1)))!=O||f&&L(new f)!=h||d&&L(d.resolve())!=m||p&&L(new p)!=v||g&&L(new g)!=_)&&(L=function(W){var Q=x(W),G=Q=="[object Object]"?W.constructor:void 0,ee=G?S(G):"";if(ee)switch(ee){case T:return O;case C:return h;case P:return m;case R:return v;case A:return _}return Q}),a.exports=L},7801:a=>{a.exports=function(u,s){return u==null?void 0:u[s]}},1789:(a,u,s)=>{var c=s(4536);a.exports=function(){this.__data__=c?c(null):{},this.size=0}},401:a=>{a.exports=function(u){var s=this.has(u)&&delete this.__data__[u];return this.size-=s?1:0,s}},7667:(a,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var p=this.__data__;if(c){var g=p[d];return g==="__lodash_hash_undefined__"?void 0:g}return f.call(p,d)?p[d]:void 0}},1327:(a,u,s)=>{var c=s(4536),f=Object.prototype.hasOwnProperty;a.exports=function(d){var p=this.__data__;return c?p[d]!==void 0:f.call(p,d)}},1866:(a,u,s)=>{var c=s(4536);a.exports=function(f,d){var p=this.__data__;return this.size+=this.has(f)?0:1,p[f]=c&&d===void 0?"__lodash_hash_undefined__":d,this}},5776:a=>{var u=/^(?:0|[1-9]\d*)$/;a.exports=function(s,c){var f=typeof s;return!!(c=c==null?9007199254740991:c)&&(f=="number"||f!="symbol"&&u.test(s))&&s>-1&&s%1==0&&s<c}},7019:a=>{a.exports=function(u){var s=typeof u;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?u!=="__proto__":u===null}},5346:(a,u,s)=>{var c,f=s(4429),d=(c=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"";a.exports=function(p){return!!d&&d in p}},5726:a=>{var u=Object.prototype;a.exports=function(s){var c=s&&s.constructor;return s===(typeof c=="function"&&c.prototype||u)}},7040:a=>{a.exports=function(){this.__data__=[],this.size=0}},4125:(a,u,s)=>{var c=s(8470),f=Array.prototype.splice;a.exports=function(d){var p=this.__data__,g=c(p,d);return!(g<0||(g==p.length-1?p.pop():f.call(p,g,1),--this.size,0))}},2117:(a,u,s)=>{var c=s(8470);a.exports=function(f){var d=this.__data__,p=c(d,f);return p<0?void 0:d[p][1]}},7518:(a,u,s)=>{var c=s(8470);a.exports=function(f){return c(this.__data__,f)>-1}},4705:(a,u,s)=>{var c=s(8470);a.exports=function(f,d){var p=this.__data__,g=c(p,f);return g<0?(++this.size,p.push([f,d])):p[g][1]=d,this}},4785:(a,u,s)=>{var c=s(1989),f=s(8407),d=s(7071);a.exports=function(){this.size=0,this.__data__={hash:new c,map:new(d||f),string:new c}}},1285:(a,u,s)=>{var c=s(5050);a.exports=function(f){var d=c(this,f).delete(f);return this.size-=d?1:0,d}},6e3:(a,u,s)=>{var c=s(5050);a.exports=function(f){return c(this,f).get(f)}},9916:(a,u,s)=>{var c=s(5050);a.exports=function(f){return c(this,f).has(f)}},5265:(a,u,s)=>{var c=s(5050);a.exports=function(f,d){var p=c(this,f),g=p.size;return p.set(f,d),this.size+=p.size==g?0:1,this}},8776:a=>{a.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f,d){c[++s]=[d,f]}),c}},4536:(a,u,s)=>{var c=s(852)(Object,"create");a.exports=c},6916:(a,u,s)=>{var c=s(5569)(Object.keys,Object);a.exports=c},1167:(a,u,s)=>{a=s.nmd(a);var c=s(1957),f=u&&!u.nodeType&&u,d=f&&a&&!a.nodeType&&a,p=d&&d.exports===f&&c.process,g=function(){try{return d&&d.require&&d.require("util").types||p&&p.binding&&p.binding("util")}catch{}}();a.exports=g},2333:a=>{var u=Object.prototype.toString;a.exports=function(s){return u.call(s)}},5569:a=>{a.exports=function(u,s){return function(c){return u(s(c))}}},5639:(a,u,s)=>{var c=s(1957),f=typeof self=="object"&&self&&self.Object===Object&&self,d=c||f||Function("return this")();a.exports=d},619:a=>{a.exports=function(u){return this.__data__.set(u,"__lodash_hash_undefined__"),this}},2385:a=>{a.exports=function(u){return this.__data__.has(u)}},1814:a=>{a.exports=function(u){var s=-1,c=Array(u.size);return u.forEach(function(f){c[++s]=f}),c}},7465:(a,u,s)=>{var c=s(8407);a.exports=function(){this.__data__=new c,this.size=0}},3779:a=>{a.exports=function(u){var s=this.__data__,c=s.delete(u);return this.size=s.size,c}},7599:a=>{a.exports=function(u){return this.__data__.get(u)}},4758:a=>{a.exports=function(u){return this.__data__.has(u)}},4309:(a,u,s)=>{var c=s(8407),f=s(7071),d=s(3369);a.exports=function(p,g){var x=this.__data__;if(x instanceof c){var S=x.__data__;if(!f||S.length<199)return S.push([p,g]),this.size=++x.size,this;x=this.__data__=new d(S)}return x.set(p,g),this.size=x.size,this}},346:a=>{var u=Function.prototype.toString;a.exports=function(s){if(s!=null){try{return u.call(s)}catch{}try{return s+""}catch{}}return""}},7813:a=>{a.exports=function(u,s){return u===s||u!=u&&s!=s}},5694:(a,u,s)=>{var c=s(9454),f=s(7005),d=Object.prototype,p=d.hasOwnProperty,g=d.propertyIsEnumerable,x=c(function(){return arguments}())?c:function(S){return f(S)&&p.call(S,"callee")&&!g.call(S,"callee")};a.exports=x},1469:a=>{var u=Array.isArray;a.exports=u},8612:(a,u,s)=>{var c=s(3560),f=s(1780);a.exports=function(d){return d!=null&&f(d.length)&&!c(d)}},4144:(a,u,s)=>{a=s.nmd(a);var c=s(5639),f=s(5062),d=u&&!u.nodeType&&u,p=d&&a&&!a.nodeType&&a,g=p&&p.exports===d?c.Buffer:void 0,x=(g?g.isBuffer:void 0)||f;a.exports=x},8446:(a,u,s)=>{var c=s(939);a.exports=function(f,d){return c(f,d)}},3560:(a,u,s)=>{var c=s(4239),f=s(3218);a.exports=function(d){if(!f(d))return!1;var p=c(d);return p=="[object Function]"||p=="[object GeneratorFunction]"||p=="[object AsyncFunction]"||p=="[object Proxy]"}},1780:a=>{a.exports=function(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=9007199254740991}},3218:a=>{a.exports=function(u){var s=typeof u;return u!=null&&(s=="object"||s=="function")}},7005:a=>{a.exports=function(u){return u!=null&&typeof u=="object"}},6719:(a,u,s)=>{var c=s(8749),f=s(1717),d=s(1167),p=d&&d.isTypedArray,g=p?f(p):c;a.exports=g},3674:(a,u,s)=>{var c=s(4636),f=s(280),d=s(8612);a.exports=function(p){return d(p)?c(p):f(p)}},479:a=>{a.exports=function(){return[]}},5062:a=>{a.exports=function(){return!1}},75:function(a){(function(){var u,s,c,f,d,p;typeof performance!="undefined"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process!="undefined"&&process!==null&&process.hrtime?(a.exports=function(){return(u()-d)/1e6},s=process.hrtime,f=(u=function(){var g;return 1e9*(g=s())[0]+g[1]})(),p=1e9*process.uptime(),d=f-p):Date.now?(a.exports=function(){return Date.now()-c},c=Date.now()):(a.exports=function(){return new Date().getTime()-c},c=new Date().getTime())}).call(this)},4087:(a,u,s)=>{for(var c=s(75),f=typeof window=="undefined"?s.g:window,d=["moz","webkit"],p="AnimationFrame",g=f["request"+p],x=f["cancel"+p]||f["cancelRequest"+p],S=0;!g&&S<d.length;S++)g=f[d[S]+"Request"+p],x=f[d[S]+"Cancel"+p]||f[d[S]+"CancelRequest"+p];if(!g||!x){var h=0,m=0,v=[];g=function(_){if(v.length===0){var O=c(),T=Math.max(0,16.666666666666668-(O-h));h=T+O,setTimeout(function(){var C=v.slice(0);v.length=0;for(var P=0;P<C.length;P++)if(!C[P].cancelled)try{C[P].callback(h)}catch(R){setTimeout(function(){throw R},0)}},Math.round(T))}return v.push({handle:++m,callback:_,cancelled:!1}),m},x=function(_){for(var O=0;O<v.length;O++)v[O].handle===_&&(v[O].cancelled=!0)}}a.exports=function(_){return g.call(f,_)},a.exports.cancel=function(){x.apply(f,arguments)},a.exports.polyfill=function(_){_||(_=f),_.requestAnimationFrame=g,_.cancelAnimationFrame=x}},8156:a=>{a.exports=n}},o={};function i(a){var u=o[a];if(u!==void 0)return u.exports;var s=o[a]={id:a,loaded:!1,exports:{}};return r[a].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.n=a=>{var u=a&&a.__esModule?()=>a.default:()=>a;return i.d(u,{a:u}),u},i.d=(a,u)=>{for(var s in u)i.o(u,s)&&!i.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:u[s]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),i.nmd=a=>(a.paths=[],a.children||(a.children=[]),a);var l={};return(()=>{i.d(l,{default:()=>O});var a=i(8156),u=i.n(a),s=i(7403),c=i(8446),f=i.n(c);function d(T){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d(T)}function p(T,C){if(!(T instanceof C))throw new TypeError("Cannot call a class as a function")}function g(T,C){for(var P=0;P<C.length;P++){var R=C[P];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(T,R.key,R)}}function x(T,C){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(P,R){return P.__proto__=R,P},x(T,C)}function S(T,C){if(C&&(d(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(T)}function h(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function m(T){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(C){return C.__proto__||Object.getPrototypeOf(C)},m(T)}function v(T,C,P){return C in T?Object.defineProperty(T,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):T[C]=P,T}var _=function(T){(function(Q,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");Q.prototype=Object.create(G&&G.prototype,{constructor:{value:Q,writable:!0,configurable:!0}}),Object.defineProperty(Q,"prototype",{writable:!1}),G&&x(Q,G)})(W,T);var C,P,R,A,L=(R=W,A=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var Q,G=m(R);if(A){var ee=m(this).constructor;Q=Reflect.construct(G,arguments,ee)}else Q=G.apply(this,arguments);return S(this,Q)});function W(){var Q;p(this,W);for(var G=arguments.length,ee=new Array(G),te=0;te<G;te++)ee[te]=arguments[te];return v(h(Q=L.call.apply(L,[this].concat(ee))),"state",{instance:null}),Q}return C=W,(P=[{key:"componentDidMount",value:function(){var Q=this,G=new s.default(this.typewriter,this.props.options);this.setState({instance:G},function(){var ee=Q.props.onInit;ee&&ee(G)})}},{key:"componentDidUpdate",value:function(Q){f()(this.props.options,Q.options)||this.setState({instance:new s.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var Q=this,G=this.props.component;return u().createElement(G,{ref:function(ee){return Q.typewriter=ee},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&g(C.prototype,P),Object.defineProperty(C,"prototype",{writable:!1}),W}(a.Component);_.defaultProps={component:"div"};const O=_})(),l.default})())})(Qp);var Py=wm(Qp.exports);const Oy=ye.div`
font-size:2rem;
font-family: 'Typewriter-Bold';
color: #ffffff;
text-shadow:2px 2px 1px #a42f42;
@media (min-width: 375px) {
font-size:2.2rem;
}
@media (min-width: 414px) {
font-size:2.5rem;
}
@media (min-width: 765px) {
font-size:5rem;
}
`,Ty=()=>y(Oy,{children:y("div",{className:"text-box",children:y(Py,{options:{autoStart:!0,loop:!0},onInit:e=>{e.typeString("Actriz de doblaje").pauseFor(2e3).deleteAll().typeString("Locuci\xF3n").pauseFor(2e3).deleteAll().typeString("Audiolibros").pauseFor(2e3).deleteAll().typeString("Canto").pauseFor(2e3).deleteAll().start()}})})}),jy=()=>q(Cy,{children:[y("div",{className:"margarita-img",children:y(Ty,{})}),y(xy,{}),y(Ny,{}),y(_y,{}),y(wy,{})]}),Ay=ye.div`
/* background: linear-gradient(-180deg, #400811 0%, #cd9b81 70%); */
background-image: url('images/works/fondo-micro.jpeg');
background-attachment: fixed;
background-size: cover;
font-family: 'Roboto-regular';
min-height: 100vh;
.mainTitle{
    padding-top: 25%;
    color: rgba(186,121,55,1);
    font-size: 3rem;
}
.paragraph{
    color: #f5e1ce;
    font-size: 2rem;
    padding: 2rem 2rem 0 2rem;
}
.mainText{
    text-align: center;
    text-shadow: 2px 2px 5px #000;
}
.worksContainer{
    /* padding: 2rem 1rem 3rem 1rem; */
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    width: 100%;
    padding-bottom:4em;
}
@media (min-width: 768px){
.mainTitle{
    padding-top: 10%;
    font-size: 4rem;
}
}
`,zy=ye.div`
display: flex;
justify-content: center;
flex-flow: row wrap;
width: 300px;
font-family: 'Roboto-regular';
.workContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(98,54,0,1) 30%, rgba(186,121,55,1) 100%);
    top: 10%;
    border-radius: 1rem;
    padding: 20px 0;
    margin: 1rem;
    box-shadow:
    0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034),
    0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049),
    0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067),
    0 71px 71px rgba(0, 0, 0, 0.09)
    ;
    transition: all 0.2s ease-in-out;
}
.workContainer:hover{
    transform: scale(1.05);
}
.title{
    font-size: 1.5rem;
    background: rgba(186,121,55,1);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin: 0 5px;
}
.image{
    width: 60%;
    margin: 1rem 0;
}
.text{
    font-size: 1.2rem;
    color: #000;
    font-style: italic;
    margin: 0 10px;
}
.textInside{
    font-weight: bold;
    font-style: normal;
}
`,Ly=({id:e,originalActor:t,title:n,character:r,year:o,imageURL:i})=>y(zy,{children:y("div",{className:"workContainer",children:q("div",{children:[y("h2",{className:"title",children:n}),y("img",{className:"image",src:i,alt:n}),q("p",{className:"text",children:[y("span",{className:"textInside",children:"Actor Original: "}),t]}),q("p",{className:"text",children:[y("span",{className:"textInside",children:"Personaje: "}),r]}),q("p",{className:"text",children:[y("span",{className:"textInside",children:"A\xF1o: "}),o]})]})})}),Ry=()=>{const e=Ca.urlAddWork,[t,n]=M.exports.useState([]),r=async()=>{await fetch(e).then(o=>o.json()).then(o=>n(o.works)).catch(o=>console.log(o))};return M.exports.useEffect(()=>{r()},[]),q(Ay,{children:[y("h1",{className:"mainTitle mainText",children:"TRABAJOS"}),y("p",{className:"paragraph mainText",children:"Aqu\xED te muestro la mayor\xEDa de los trabajos que he realizado a lo largo de mi carrera como actriz de doblaje."}),y("div",{className:"worksContainer",children:t.map((o,i)=>y(Ly,{id:o._id,title:o.title,imageURL:o.imageURL,originalActor:o.originalActor,character:o.character,year:o.year},i))})]})},Dy=ye.footer`
background-color: #a42f42;
overflow: hidden;
font-family: 'Roboto-regular';
.infoFooter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 100%;
        .interes{
            padding-bottom: 1.5rem;
        }
        .links{
            color: #000;
            font-size: 1.5rem;
            margin: .2rem;
        }
        .links:hover{
            text-shadow: 1px 1px 2px #999;
        }
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        .micro{
            height: 300px;
            margin: 2rem;
        }
    }
    .titles{
        color:#fff;
        text-align: center;
        padding-top: 2rem;
        font-size:2rem;
    }
    .socialContainer{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 150px;
        .socialLink{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;

            .social{
                width: 100%;
                margin: 10px;
            }
            .social:hover{
                filter: drop-shadow(0 0 2px #000);
            }
        }
    }
}
.created{
    font-size: 1.2rem;
    text-align: center;
    padding: 20px 0;
    color: #fff;
    a{
        text-shadow: 1px 1px 2px #000;
        color: #fff;
    }    
    a:hover{
        text-shadow: 0 0 0 #0000;
        color: #ccc;
    }
}
@media (min-width: 768px) {
    .infoFooter{
        flex-direction: row;
        height: 300px;
        width: 100%;
        .footer{
            width: 33%;
            .links{
                font-size: 2rem;
            }
        }
        .center{
            .micro{
                height: 90%;
            }
        }
        .titles{
            color:#fff;
            text-align: center;
            padding-top: 2rem;
            font-size:2.5rem;
        }
    }
}
`,My=()=>q("div",{className:"footer",children:[y("h3",{className:"titles interes",children:"Links de inter\xE9s:"}),y("a",{className:"links",href:"https://www.eldoblaje.com/datos/FichaActorDoblaje.asp?id=114434",target:"_BLANK",children:"Ficha en eldoblaje.com"}),y("a",{className:"links",href:"https://vocalbums.com/margarita-cavero",target:"_BLANK",children:"Ficha en vocalbums.com"}),y(fo,{className:"links",to:"/demos",children:"Demos"}),y(fo,{className:"links",to:"/trabajos",children:"Trabajos"})]}),Fy=()=>q("div",{className:"footer",children:[y("h3",{className:"titles",children:"Redes sociales:"}),q("div",{className:"socialContainer",children:[y("a",{className:"socialLink",href:"https://www.facebook.com/mar.D.hancock",target:"_BLANK",children:y("img",{className:"social",src:"images/social/facebook.png",alt:"facebook"})}),y("a",{className:"socialLink",href:"https://www.instagram.com/margarita.cavero/",target:"_BLANK",children:y("img",{className:"social",src:"images/social/instagram.png",alt:"instagram"})}),y("a",{className:"socialLink",href:"https://www.youtube.com/channel/UCNWDsDOExmyS-RSUANNezEA",target:"_BLANK",children:y("img",{className:"social",src:"images/social/youtube.png",alt:"youtube"})}),y("a",{className:"socialLink",href:"https://www.linkedin.com/in/margarita-cavero-zarza-06141248/",target:"_BLANK",children:y("img",{className:"social",src:"images/social/linkedin.png",alt:"linkedin"})})]})]}),$y=()=>q(Dy,{children:[q("div",{className:"infoFooter",children:[y(My,{}),y("div",{className:"footer center",children:y("img",{className:"micro",src:"images/micro.png",alt:"microfono"})}),y(Fy,{})]}),y("div",{children:q("p",{className:"created",children:["Created by ",y("a",{href:"https://daniel-espanadero.com/",target:"_BLANK",children:"Daniel Espa\xF1adero"})," \xA9 ",new Date().getFullYear()]})})]}),Iy=ye.div`
.error404{
    width: 100%;
    height: 100vh;
    background-image: url('images/404-error.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
`,Vy=()=>y(Iy,{children:y("div",{className:"error404"})}),Uy=e=>{const t=_r();return M.exports.useEffect(()=>{window.scrollTo(0,0)},[t]),y(xo,{children:e.children})},By=ye.div`
display: flex;
align-items: center;
justify-content: center;
background-image: url('images/admin/tools.jpeg');
background-size: cover;
background-attachment: fixed;
padding-top: 5%;
width: 100%;
height: 100vh;
font-family: 'Roboto-regular';
.text{
    color: #400811;
}
.formContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background-color: #905f4599;
    box-shadow:
        0 1.6px 1.6px rgba(0, 0, 0, 0.023),
        0 3.8px 3.8px rgba(0, 0, 0, 0.034),
        0 6.9px 6.9px rgba(0, 0, 0, 0.041),
        0 11.4px 11.4px rgba(0, 0, 0, 0.049),
        0 18.8px 18.8px rgba(0, 0, 0, 0.056),
        0 32.8px 32.8px rgba(0, 0, 0, 0.067),
        0 71px 71px rgba(0, 0, 0, 0.09);
        .form{
            display: flex;
            flex-direction: column;
            width: 50%;
            .inputs{
                font-size: 1.5rem;
                margin-top: 1rem;
                padding: 1.5rem;
                background-color: #905f45aa;
                outline: none;
                border: 0;
                width: 100%;
                height: 2rem;
                border-bottom: 2px solid #400811;
            }
            .inputs::placeholder { 
            color: #400811; 
            }
            .inputs:focus{
                color: #000;
            }
            .inputs::selection{
                background-color: #400811;
                color: #a42f42;
            }
            .inputs:hover{
                color: #000;
            }
            .send {
                min-width: 130px;
                height: 40px;
                color: #400811;
                /* padding: 5px 10px; */
                font-weight: bold;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                outline: none;
                margin-top: 3rem;
                border-radius: 5px;
                border: none;
                box-shadow:inset 2px 2px 2px 0px #400811, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
                background: #905f45;
                z-index: 1;
        }
        .send:hover:after {
            width: 100%;
            left: 0;
        }
        .send:after {
            border-radius: 5px;
            position: absolute;
            content: "";
            width: 0;
            height: 100%;
            top: 0;
            z-index: -1;
            box-shadow:inset 2px 2px 2px 0px #905f45, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
            transition: all 0.3s ease;
            background-color: #400811;
            right: 0;
        }
        .send:hover{
            color: #905f45;
        }
        .send:active {
            top: 2px;
            color: #905f45;
        }
        }
        .validation{ 
            margin-top: 0;
            color: #a42f42;
            text-shadow: 1px 1px 1px #000;
        }
}
`,Wy=()=>{var a,u,s,c,f;const{register:e,reset:t,formState:{errors:n,isSubmitSuccessful:r},handleSubmit:o}=Cu({mode:"onChange",defaultValues:{email:"",password:""}}),i=async d=>{t({email:"",password:""},{keepErrors:!0,keepDirty:!0,keepIsSubmitted:!0,keepTouched:!1,keepIsValid:!1,keepSubmitCount:!1}),await fetch(Ca.urlLogin,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}).then(p=>p.json()).then(p=>{localStorage.setItem("token",p.JWTGenerated),window.location.href="/admin/works/add"})},l=async()=>{const d=localStorage.getItem("token")||"";if(d.length<10&&localStorage.removeItem("token"),d.length>10)return window.location.href="/admin/works/add"};return M.exports.useEffect(()=>{l()},[]),y(By,{children:q("div",{className:"formContainer",children:[y("h1",{className:"title text",children:"\u{1F6E0} BIENVENIDA AL BACKOFFICE \u{1F6E0}"}),y("p",{className:"paragraph text",children:"Desde aqu\xED podr\xE1s modificar algunos de los par\xE1metros de tu p\xE1gina web."}),q("form",{className:"form",onSubmit:o(i),children:[y("input",{className:"inputs",type:"email",placeholder:"Usuario",...e("email",{required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,minLength:3,maxLength:30}),name:"email"}),((a=n.email)==null?void 0:a.type)==="pattern"&&y("p",{className:"validation",children:"Introduce un usuario valido."}),((u=n.email)==null?void 0:u.type)==="required"&&y("p",{className:"validation",children:"El usuario es obligatorio"}),((s=n.email)==null?void 0:s.type)==="minLength"&&y("p",{className:"validation",children:"El usuario tiene que tener como m\xEDnimo 3 caracteres."}),((c=n.email)==null?void 0:c.type)==="maxLength"&&y("p",{className:"validation",children:"El usuario tiene que tener como m\xE1ximo 30 caracteres."}),y("input",{className:"inputs",type:"password",placeholder:"Contrase\xF1a",...e("password",{required:!0}),name:"password"}),((f=n.password)==null?void 0:f.type)==="required"&&y("p",{className:"validation",children:"La contrase\xF1a es obligatoria"}),y("button",{className:"send",type:"submit",children:"ENTRAR AL BACKOFFICE"})]})]})})};ye.div`
padding-top: 4rem;
`;const Hy=ye.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url('images/admin/dub.png');
background-size: cover;
background-attachment: fixed;
padding-top: 5%;
width: 100%;
min-height: 100vh;
font-family: 'Roboto-regular';
.formContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    padding: 2rem 0;
    margin: 2rem 0;
    background-color: #905f4577;
    box-shadow:
        0 1.6px 1.6px rgba(0, 0, 0, 0.023),
        0 3.8px 3.8px rgba(0, 0, 0, 0.034),
        0 6.9px 6.9px rgba(0, 0, 0, 0.041),
        0 11.4px 11.4px rgba(0, 0, 0, 0.049),
        0 18.8px 18.8px rgba(0, 0, 0, 0.056),
        0 32.8px 32.8px rgba(0, 0, 0, 0.067),
        0 71px 71px rgba(0, 0, 0, 0.09);
        .title{
            font-size: 3rem;
            color: #400811;
        }
        .form{
            display: flex;
            flex-direction: column;
            width: 50%;
            .inputs{
                font-size: 1.5rem;
                margin-top: 1rem;
                padding: 1.5rem;
                background-color: #905f45aa;
                outline: none;
                border: 0;
                width: 100%;
                height: 2rem;
                border-bottom: 2px solid #400811;
            }
            .inputs::placeholder { 
            color: #400811; 
            }
            .inputs:focus{
                color: #000;
            }
            .inputs::selection{
                background-color: #400811;
                color: #a42f42;
            }
            .inputs:hover{
                color: #000;
            }
            
        }
        .validation{ 
            margin-top: 0;
            color: #a42f42;
            text-shadow: 1px 1px 1px #000;
        }
}
.send {
    min-width: 130px;
    height: 40px;
    color: #400811;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    margin-top: 2rem;
    border-radius: 5px;
    border: none;
    box-shadow:inset 2px 2px 2px 0px #400811, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
    background: #905f45;
    z-index: 1;
}
.send:hover:after {
    width: 100%;
    left: 0;
}
.send:after {
    border-radius: 5px;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    z-index: -1;
    box-shadow:inset 2px 2px 2px 0px #905f45, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
    transition: all 0.3s ease;
    background-color: #400811;
    right: 0;
}
.send:hover{
    color: #905f45;
}
.send:active {
    top: 2px;
    color: #905f45;
}
`,Qy=()=>{var s,c,f,d,p,g,x,S,h,m,v;const{register:e,reset:t,formState:{errors:n,isSubmitSuccessful:r},handleSubmit:o}=Cu({mode:"onChange",defaultValues:{originalActor:"",title:"",character:"",year:"",imageURL:""}}),i=localStorage.getItem("token"),l=async _=>{t({originalActor:"",title:"",character:"",year:"",imageURL:""},{keepErrors:!0,keepDirty:!0,keepIsSubmitted:!0,keepTouched:!1,keepIsValid:!1,keepSubmitCount:!1}),await fetch(Ca.urlAddWork,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:i},body:JSON.stringify(_)})},a=async()=>{const _=localStorage.getItem("token")||"";_.length<10&&localStorage.removeItem("token"),(!_||_===void 0||_.length<10)&&(window.location.href="/admin")};M.exports.useEffect(()=>{a()},[]);function u(_){_.preventDefault(),localStorage.removeItem("token"),window.location.href="/admin"}return q(Hy,{children:[y("form",{onSubmit:u,children:y("button",{className:"send",type:"submit",children:"Cerrar sesi\xF3n"})}),q("div",{className:"formContainer",children:[y("h1",{className:"title",children:"\u{1F6E0} A\xD1ADIR UN NUEVO TRABAJO \u{1F6E0}"}),q("form",{className:"form",onSubmit:o(l),children:[y("input",{className:"inputs",type:"text",placeholder:"Actor Original",...e("originalActor",{required:!0,minLength:2}),name:"originalActor"}),((s=n.originalActor)==null?void 0:s.type)==="required"&&y("p",{className:"validation",children:"El actor original es obligatorio"}),((c=n.originalActor)==null?void 0:c.type)==="minLength"&&y("p",{className:"validation",children:"El actor original tiene que tener como m\xEDnimo 2 caracteres."}),y("input",{className:"inputs",type:"text",placeholder:"T\xEDtulo",...e("title",{required:!0,minLength:3,maxLength:100}),name:"title"}),((f=n.title)==null?void 0:f.type)==="required"&&y("p",{className:"validation",children:"El t\xEDtulo es obligatorio"}),((d=n.title)==null?void 0:d.type)==="minLength"&&y("p",{className:"validation",children:"El t\xEDtulo tiene que tener como m\xEDnimo 3 caracteres."}),((p=n.title)==null?void 0:p.type)==="maxLength"&&y("p",{className:"validation",children:"El t\xEDtulo tiene que tener como m\xE1ximo 100 caracteres."}),y("input",{className:"inputs",type:"text",placeholder:"Personaje",...e("character",{required:!0,minLength:3}),name:"character"}),((g=n.character)==null?void 0:g.type)==="required"&&y("p",{className:"validation",children:"El personaje es obligatorio"}),((x=n.character)==null?void 0:x.type)==="minLength"&&y("p",{className:"validation",children:"El personaje tiene que tener como m\xEDnimo 3 caracteres."}),y("input",{className:"inputs",type:"text",placeholder:"A\xF1o",...e("year",{required:!0,minLength:4,maxLength:4}),name:"year"}),((S=n.year)==null?void 0:S.type)==="required"&&y("p",{className:"validation",children:"El a\xF1o es obligatorio"}),((h=n.year)==null?void 0:h.type)==="minLength"&&y("p",{className:"validation",children:"El a\xF1o tiene que tener 4 caracteres."}),((m=n.year)==null?void 0:m.type)==="maxLength"&&y("p",{className:"validation",children:"El a\xF1o tiene que tener 4 caracteres."}),y("input",{className:"inputs",type:"text",placeholder:"URL de la imagen",...e("imageURL",{required:!0}),name:"imageURL"}),((v=n.imageURL)==null?void 0:v.type)==="required"&&y("p",{className:"validation",children:"La imagen es obligatoria"}),y("button",{className:"send",type:"submit",children:"A\xD1ADIR TRABAJO"})]})]})]})},Yy=()=>y(hg,{children:q(Uy,{children:[y(jv,{}),y("div",{className:"container",children:q(fg,{children:[y(Xt,{path:"/",element:y(jy,{})}),y(Xt,{path:"demos",element:y(gy,{})}),y(Xt,{path:"trabajos",element:y(Ry,{})}),y(Xt,{path:"contacto",element:y(Xv,{})}),y(Xt,{path:"admin",element:y(Wy,{})}),y(Xt,{path:"admin/works/add",element:y(Qy,{})}),y(Xt,{path:"*",element:y(Vy,{})})]})}),y($y,{})]})});var Yp={},qp={},Pe=km(wv),Pt={exports:{}},qy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ky=qy,Gy=Ky;function Kp(){}function Gp(){}Gp.resetWarningCache=Kp;var Xy=function(){function e(r,o,i,l,a,u){if(u!==Gy){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gp,resetWarningCache:Kp};return n.PropTypes=n,n};Pt.exports=Xy();var Ot={},Eu={},Xp={},xr={};Object.defineProperty(xr,"__esModule",{value:!0});xr.fadeAnimation=xr.slideAnimation=void 0;var Zy=function(t){var n=t.animation,r=t.loadingStatus;return n.name==="slide"?n.direction?n.direction==="up"||n.direction==="down"?"top: ".concat(r?0:"".concat(n.direction==="up"?"-100%":"100%"),`;
     transition: 0.5s;`):"left: ".concat(r?0:"".concat(n.direction==="right"?"100%":"-101%"),`;
              top: 0;
              transition: 0.5s;`):"top: ".concat(r?0:"-100%",`;
            transition: 0.5s;`):`top: 0; 
          left: 0;`};xr.slideAnimation=Zy;var Jy=function(t){return t.animation.name==="fade"&&" opacity: ".concat(t.loadingStatus?1:0,`;
       visibility: `).concat(t.loadingStatus?"visible":"hidden",`;
       transition: opacity 0.3s linear, visibility 0.2s linear 0.3s;`)};xr.fadeAnimation=Jy;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe,n=xr;function r(){var a=o([`
  z-index: 9999;
  position: fixed;
  `,`
  `,`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  background: `,`;
`]);return r=function(){return a},a}function o(a,u){return u||(u=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(u)}}))}var i=(0,t.css)(r(),n.slideAnimation,n.fadeAnimation,function(a){return a.background}),l=i;e.default=l})(Xp);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=i(Pt.exports),r=i(Pe),o=i(Xp);function i(S){return S&&S.__esModule?S:{default:S}}function l(S){if(S&&S.__esModule)return S;var h={};if(S!=null){for(var m in S)if(Object.prototype.hasOwnProperty.call(S,m)){var v=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(S,m):{};v.get||v.set?Object.defineProperty(h,m,v):h[m]=S[m]}}return h.default=S,h}function a(S,h){return c(S)||s(S,h)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(S,h){var m=[],v=!0,_=!1,O=void 0;try{for(var T=S[Symbol.iterator](),C;!(v=(C=T.next()).done)&&(m.push(C.value),!(h&&m.length===h));v=!0);}catch(P){_=!0,O=P}finally{try{!v&&T.return!=null&&T.return()}finally{if(_)throw O}}return m}function c(S){if(Array.isArray(S))return S}function f(){var S=d([`
  `,`
`]);return f=function(){return S},S}function d(S,h){return h||(h=S.slice(0)),Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(h)}}))}var p=r.default.div(f(),o.default);function g(S){var h=S.children,m=S.background,v=S.color,_=S.time,O=S.customLoading,T=S.animation,C=(0,t.useState)(!0),P=a(C,2),R=P[0],A=P[1],L=t.default.Children.map(h,function(ee){return t.default.cloneElement(ee,{color:v})}),W=function(){document.body.style.overflow=R?"hidden":null,document.body.style.height=R?"100%":null,document.body.style.width=R?"100%":null,document.body.style.position=R?"fixed":null},Q=function(){var te=T&&T.split("-");return{name:te&&te[0],direction:te&&te[1]}},G=function(){return m==="blur"?"rgba(94, 85, 85, 0.32941176470588235)":m};return W(),(0,t.useEffect)(function(){O===!1&&setTimeout(function(){A(!1)},_),O===void 0&&(document.onreadystatechange=function(){document.readyState==="complete"&&setTimeout(function(){A(!1)},_)})},[O]),(0,t.useEffect)(function(){if(m==="blur"){var ee=Object.values(document.getElementById("preloader").parentNode.childNodes).filter(function(te){return te.id!=="preloader"});ee.forEach(function(te){te.style.filter=R?"blur(5px)":"blur(0px)"})}},[R]),t.default.createElement(p,{animation:Q(),background:G(),loadingStatus:R,id:"preloader"},L)}g.propTypes={time:n.default.number,background:n.default.string,color:n.default.string,animation:n.default.string,children:n.default.element,customLoading:n.default.bool},g.defaultProps={time:1300,background:"#f7f7f7",color:"#2D2D2D",animation:"fade"};var x=g;e.default=x})(Eu);var Zp={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(M.exports),n=r(Eu);function r(l){return l&&l.__esModule?l:{default:l}}var o=function(a){return function(u){return t.default.createElement(n.default,u,t.default.createElement(a,{className:u.className}))}},i=o;e.default=i})(Zp);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withPreloader",{enumerable:!0,get:function(){return n.default}}),e.default=void 0;var t=r(Eu),n=r(Zp);function r(i){return i&&i.__esModule?i:{default:i}}var o=t.default;e.default=o})(Ot);var Jp={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var c=i([`
  animation: `,` 2s linear infinite;
  height: 50px;
  left: 50%;
  position: absolute;
  top: 50%;
  transition: all 0.2s ease;
  transform: translate(-50%, -50%) rotate(360deg);
  width: 50px;
  z-index: 4;
  .path {
    stroke-dasharray: 1, 500;
    stroke-dashoffset: 0;
    animation: `,` 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
`]);return n=function(){return c},c}function r(){var c=i([`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`]);return r=function(){return c},c}function o(){var c=i([`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`]);return o=function(){return c},c}function i(c,f){return f||(f=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var l=(0,t.keyframes)(o()),a=(0,t.keyframes)(r()),u=(0,t.css)(n(),l,a),s=u;e.default=s})(Jp);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pe),r=l(Pt.exports),o=Ot,i=l(Jp);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className,x=p.color;return t.default.createElement("svg",{className:g,height:"50",width:"50"},t.default.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",stroke:x,fill:"none",strokeWidth:"2.5",strokeMiterlimit:"10"}))};s.propTypes={className:r.default.string,color:r.default.string};var c=(0,n.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(qp);var em={},tm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var u=o([`
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  > div {
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 2px;
    background: `,`;
    animation: `,` 1.2s infinite ease-in-out;
  }
  .rect2 {
    animation-delay: -1.1s;
  }
  .rect3 {
    animation-delay: -1s;
  }
  .rect4 {
    animation-delay: -0.9s;
  }
  .rect5 {
    animation-delay: -0.8s;
  }
`]);return n=function(){return u},u}function r(){var u=o([`
0%,
40%,
100% {
  transform: scaleY(0.6);
}
20% {
  transform: scaleY(1);
}
`]);return r=function(){return u},u}function o(u,s){return s||(s=u.slice(0)),Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}}))}var i=(0,t.keyframes)(r()),l=(0,t.css)(n(),function(u){return u.color},i),a=l;e.default=a})(tm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pe),r=l(Pt.exports),o=Ot,i=l(tm);function l(p){return p&&p.__esModule?p:{default:p}}function a(){var p=u([`
  `,`
`]);return a=function(){return p},p}function u(p,g){return g||(g=p.slice(0)),Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var s=new Array(5).fill(""),c=function(g){var x=g.className;return t.default.createElement("div",{className:x},s.map(function(S,h){return t.default.createElement("div",{key:h.toString(),className:"rect".concat(h+1)})}))};c.propTypes={className:r.default.string};var f=(0,n.default)(c)(a(),i.default),d=(0,o.withPreloader)(f);e.default=d})(em);var nm={},rm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var c=i([`
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  width: 90px;
  ul {
    margin: 0;
    list-style: none;
    width: 90px;
    position: relative;
    padding: 0;
    height: 10px;
    li {
      position: absolute;
      width: 2px;
      height: 0;
      background: `,`;
      bottom: 0;
      &:nth-child(1) {
        left: 0;
        animation: `,` 1s ease infinite 0;
      }
      &:nth-child(2) {
        left: 15px;
        animation: `,` 1s ease infinite 0.1s;
      }
      &:nth-child(3) {
        left: 30px;
        animation: `,` 1s ease-in-out infinite 0.2s;
      }
      &:nth-child(4) {
        left: 45px;
        animation: `,` 1s ease-in infinite 0.3s;
      }
      &:nth-child(5) {
        left: 60px;
        animation: `,` 1s ease-in-out infinite 0.4s;
      }
      &:nth-child(6) {
        left: 75px;
        animation: `,` 1s ease infinite 0.5s;
      }
    }
  }
`]);return n=function(){return c},c}function r(){var c=i([`
0% {
  height: 20px;
}
50% {
  height: 65px;
}
100% {
  height: 20px;
}
`]);return r=function(){return c},c}function o(){var c=i([`
0% {
  height: 10px;
}
50% {
  height: 50px;
}
100% {
  height: 10px;
}
`]);return o=function(){return c},c}function i(c,f){return f||(f=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var l=(0,t.keyframes)(o()),a=(0,t.keyframes)(r()),u=(0,t.css)(n(),function(c){return c.color},l,a,l,a,l,a),s=u;e.default=s})(rm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pe),r=l(Pt.exports),o=Ot,i=l(rm);function l(p){return p&&p.__esModule?p:{default:p}}function a(){var p=u([`
  `,`
`]);return a=function(){return p},p}function u(p,g){return g||(g=p.slice(0)),Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var s=new Array(6).fill(""),c=function(g){var x=g.className;return t.default.createElement("div",{className:x},t.default.createElement("ul",null,s.map(function(S,h){return t.default.createElement("li",{key:h.toString()})})))};c.propTypes={className:r.default.string};var f=(0,n.default)(c)(a(),i.default),d=(0,o.withPreloader)(f);e.default=d})(nm);var om={},im={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var c=i([`
  width: 200px;
  height: 200px;
  position: relative;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: `,`;
  animation: `,` 0.6s cubic-bezier(0.44, 0.39, 0.32, 1.28) infinite;
  &:after,
  :before {
    content: '';
    display: block;
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }
  &:before {
    animation: `,` 1s linear infinite;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    border-top-color: inherit;
    filter: brightness(150%);
  }
  &:after {
    animation: `,` 2s linear infinite;
    top: 43px;
    bottom: 43px;
    left: 43px;
    right: 43px;
    filter: brightness(180%);
    border-top-color: inherit;
  }
`]);return n=function(){return c},c}function r(){var c=i([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`]);return r=function(){return c},c}function o(){var c=i([`
from {
  transform: rotate(0deg) scale(0.4, 0.4);
}
to {
  transform: rotate(360deg) scale(0.4, 0.4);
}
`]);return o=function(){return c},c}function i(c,f){return f||(f=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var l=(0,t.keyframes)(o()),a=(0,t.keyframes)(r()),u=(0,t.css)(n(),function(c){return c.color},l,a,a),s=u;e.default=s})(im);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pe),r=l(Pt.exports),o=Ot,i=l(im);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className;return t.default.createElement("div",{className:g})};s.propTypes={className:r.default.string};var c=(0,n.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(om);var am={},lm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var c=i([`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid `,`;
  animation: `,` 2s infinite ease;
  span {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: `,`;
    animation: `,` 2s infinite ease-in;
  }
`]);return n=function(){return c},c}function r(){var c=i([`  {
  0% {
    height: 0%;
  }
  25% {
    height: 0%;
  }
  50% {
    height: 100%;
  }
  75% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`]);return r=function(){return c},c}function o(){var c=i([` {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`]);return o=function(){return c},c}function i(c,f){return f||(f=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var l=(0,t.keyframes)(o()),a=(0,t.keyframes)(r()),u=(0,t.css)(n(),function(c){return c.color},l,function(c){return c.color},a),s=u;e.default=s})(lm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pt.exports),r=l(Pe),o=Ot,i=l(lm);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className;return t.default.createElement("div",{className:g},t.default.createElement("span",null))};s.propTypes={className:n.default.string};var c=(0,r.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(am);var sm={},um={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var u=o([`
  height: 30px;
  text-align: center;
  font-size: 10px;
  > div {
    background: `,`;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0 10px;
    display: inline-block;
    animation: `,` 0.7s infinite ease-in-out;
  }
  .circ2 {
    animation-delay: -0.6s;
  }
  .circ3 {
    animation-delay: -0.5s;
  }
  .circ4 {
    animation-delay: -0.4s;
  }
  .circ5 {
    animation-delay: -0.3s;
  }
`]);return n=function(){return u},u}function r(){var u=o([`
  0%,
  40%,
  100% {
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
  }
  20% {
    transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
  }
`]);return r=function(){return u},u}function o(u,s){return s||(s=u.slice(0)),Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}}))}var i=(0,t.keyframes)(r()),l=(0,t.css)(n(),function(u){return u.color},i),a=l;e.default=a})(um);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pt.exports),r=l(Pe),o=Ot,i=l(um);function l(p){return p&&p.__esModule?p:{default:p}}function a(){var p=u([`
  `,`
`]);return a=function(){return p},p}function u(p,g){return g||(g=p.slice(0)),Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(g)}}))}var s=new Array(4).fill(""),c=function(g){var x=g.className;return t.default.createElement("div",{className:x},s.map(function(S,h){return t.default.createElement("div",{key:h.toString(),className:"circ".concat(h+1)})}))};c.propTypes={className:n.default.string};var f=(0,r.default)(c)(a(),i.default),d=(0,o.withPreloader)(f);e.default=d})(sm);var cm={},dm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var u=o([`
  width: 100px;
  height: 100px;
  div {
    opacity:0;
    animation: 1.5s `,` infinite;
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 5px solid `,`;
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
  }
`]);return n=function(){return u},u}function r(){var u=o([`
from {
  transform: scale(0);
  opacity: 1;
}

to {
  transform: scale(1);
  opacity: 0;
}
`]);return r=function(){return u},u}function o(u,s){return s||(s=u.slice(0)),Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}}))}var i=(0,t.keyframes)(r()),l=(0,t.css)(n(),i,function(u){return u.color}),a=l;e.default=a})(dm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pt.exports),r=l(Pe),o=Ot,i=l(dm);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className;return t.default.createElement("div",{className:g},t.default.createElement("div",null),t.default.createElement("div",null))};s.propTypes={className:n.default.string};var c=(0,r.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(cm);var fm={},pm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var u=o([`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid `,`;
    border-radius: 50%;
  }

  .earth-orbit {
    width: 165px;
    height: 165px;
    animation: `,` 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 120px;
    height: 120px;
    animation: `,` 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 90px;
    height: 90px;
    animation: `,` 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: `,`;
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ffab91;
  }
`]);return n=function(){return u},u}function r(){var u=o([`
from {
  transform: rotate(0);
}
to{
  transform: rotate(359deg);
}
`]);return r=function(){return u},u}function o(u,s){return s||(s=u.slice(0)),Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(s)}}))}var i=(0,t.keyframes)(r()),l=(0,t.css)(n(),function(u){var s=u.color;return s.split("")[0]==="#"?"".concat(s,"4d"):s},i,i,i,function(u){var s=u.color;return s}),a=l;e.default=a})(pm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pt.exports),r=l(Pe),o=Ot,i=l(pm);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className;return t.default.createElement("div",{className:g},t.default.createElement("div",{className:"earth-orbit orbit"},t.default.createElement("div",{className:"planet earth"}),t.default.createElement("div",{className:"venus-orbit orbit"},t.default.createElement("div",{className:"planet venus"}),t.default.createElement("div",{className:"mercury-orbit orbit"},t.default.createElement("div",{className:"planet mercury"}),t.default.createElement("div",{className:"sun"})))))};s.propTypes={className:n.default.string};var c=(0,r.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(fm);var mm={},hm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Pe;function n(){var c=i([`
  span {
    position: relative;
  }
  span:before,
  span:after {
    content: '';
    position: relative;
    display: block;
  }
  span:before {
    animation: `,` 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    width: 50px;
    height: 50px;
    background-color: `,`;
  }
  span:after {
    animation: `,` 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    bottom: -30px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`]);return n=function(){return c},c}function r(){var c=i([`
50% {
  transform: scale(0.5);
  background-color: rgba(0, 0, 0, 0.1);
}
`]);return r=function(){return c},c}function o(){var c=i([`
50% {
  border-radius: 50%;
  transform: scale(0.5) rotate(360deg);
}
100% {
  transform: scale(1) rotate(720deg);
}
`]);return o=function(){return c},c}function i(c,f){return f||(f=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var l=(0,t.keyframes)(o()),a=(0,t.keyframes)(r()),u=(0,t.css)(n(),l,function(c){var f=c.color;return f},a),s=u;e.default=s})(hm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(M.exports),n=l(Pt.exports),r=l(Pe),o=Ot,i=l(hm);function l(d){return d&&d.__esModule?d:{default:d}}function a(){var d=u([`
  `,`
`]);return a=function(){return d},d}function u(d,p){return p||(p=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(p)}}))}var s=function(p){var g=p.className;return t.default.createElement("div",{className:g},t.default.createElement("span",null))};s.propTypes={className:n.default.string};var c=(0,r.default)(s)(a(),i.default),f=(0,o.withPreloader)(c);e.default=f})(mm);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Zoom",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Lines",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Circle2",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"Cube",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"Dots",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"Ripple",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"Planets",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"Sugar",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"CustomPreloader",{enumerable:!0,get:function(){return c.default}});var t=f(qp),n=f(em),r=f(nm),o=f(om),i=f(am),l=f(sm),a=f(cm),u=f(fm),s=f(mm),c=f(Ot);function f(d){return d&&d.__esModule?d:{default:d}}})(Yp);const e1=()=>q(xo,{children:[y(Yy,{}),y(Yp.Sugar,{color:"#400811",background:"#cd9b81"})]});al.createRoot(document.getElementById("root")).render(y(e1,{}));
