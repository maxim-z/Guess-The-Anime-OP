function KR(n,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const s=Object.getOwnPropertyDescriptor(r,t);s&&Object.defineProperty(n,t,s.get?s:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function Bl(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pd={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ak;function RR(){if(Ak)return Dr;Ak=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function o(r,t,s){var c=null;if(s!==void 0&&(c=""+s),t.key!==void 0&&(c=""+t.key),"key"in t){s={};for(var m in t)m!=="key"&&(s[m]=t[m])}else s=t;return t=s.ref,{$$typeof:n,type:r,key:c,ref:t!==void 0?t:null,props:s}}return Dr.Fragment=e,Dr.jsx=o,Dr.jsxs=o,Dr}var Dk;function BR(){return Dk||(Dk=1,pd.exports=RR()),pd.exports}var $=BR(),yd={exports:{}},Mn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wk;function PR(){if(wk)return Mn;wk=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),p=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=p&&R[p]||R["@@iterator"],typeof R=="function"?R:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function A(R,W,X){this.props=R,this.context=W,this.refs=C,this.updater=X||T}A.prototype.isReactComponent={},A.prototype.setState=function(R,W){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,W,"setState")},A.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function k(){}k.prototype=A.prototype;function O(R,W,X){this.props=R,this.context=W,this.refs=C,this.updater=X||T}var D=O.prototype=new k;D.constructor=O,M(D,A.prototype),D.isPureReactComponent=!0;var P=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function z(R,W,X,q,on,Tn){return X=Tn.ref,{$$typeof:n,type:R,key:W,ref:X!==void 0?X:null,props:Tn}}function U(R,W){return z(R.type,W,void 0,void 0,void 0,R.props)}function tn(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function ln(R){var W={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(X){return W[X]})}var fn=/\/+/g;function nn(R,W){return typeof R=="object"&&R!==null&&R.key!=null?ln(""+R.key):W.toString(36)}function yn(){}function In(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(yn,yn):(R.status="pending",R.then(function(W){R.status==="pending"&&(R.status="fulfilled",R.value=W)},function(W){R.status==="pending"&&(R.status="rejected",R.reason=W)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function gn(R,W,X,q,on){var Tn=typeof R;(Tn==="undefined"||Tn==="boolean")&&(R=null);var un=!1;if(R===null)un=!0;else switch(Tn){case"bigint":case"string":case"number":un=!0;break;case"object":switch(R.$$typeof){case n:case e:un=!0;break;case S:return un=R._init,gn(un(R._payload),W,X,q,on)}}if(un)return on=on(R),un=q===""?"."+nn(R,0):q,P(on)?(X="",un!=null&&(X=un.replace(fn,"$&/")+"/"),gn(on,W,X,"",function(Le){return Le})):on!=null&&(tn(on)&&(on=U(on,X+(on.key==null||R&&R.key===on.key?"":(""+on.key).replace(fn,"$&/")+"/")+un)),W.push(on)),1;un=0;var qn=q===""?".":q+":";if(P(R))for(var Kn=0;Kn<R.length;Kn++)q=R[Kn],Tn=qn+nn(q,Kn),un+=gn(q,W,X,Tn,on);else if(Kn=v(R),typeof Kn=="function")for(R=Kn.call(R),Kn=0;!(q=R.next()).done;)q=q.value,Tn=qn+nn(q,Kn++),un+=gn(q,W,X,Tn,on);else if(Tn==="object"){if(typeof R.then=="function")return gn(In(R),W,X,q,on);throw W=String(R),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return un}function L(R,W,X){if(R==null)return R;var q=[],on=0;return gn(R,q,"","",function(Tn){return W.call(X,Tn,on++)}),q}function Z(R){if(R._status===-1){var W=R._result;W=W(),W.then(function(X){(R._status===0||R._status===-1)&&(R._status=1,R._result=X)},function(X){(R._status===0||R._status===-1)&&(R._status=2,R._result=X)}),R._status===-1&&(R._status=0,R._result=W)}if(R._status===1)return R._result.default;throw R._result}var en=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function vn(){}return Mn.Children={map:L,forEach:function(R,W,X){L(R,function(){W.apply(this,arguments)},X)},count:function(R){var W=0;return L(R,function(){W++}),W},toArray:function(R){return L(R,function(W){return W})||[]},only:function(R){if(!tn(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Mn.Component=A,Mn.Fragment=o,Mn.Profiler=t,Mn.PureComponent=O,Mn.StrictMode=r,Mn.Suspense=d,Mn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,Mn.__COMPILER_RUNTIME={__proto__:null,c:function(R){return I.H.useMemoCache(R)}},Mn.cache=function(R){return function(){return R.apply(null,arguments)}},Mn.cloneElement=function(R,W,X){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var q=M({},R.props),on=R.key,Tn=void 0;if(W!=null)for(un in W.ref!==void 0&&(Tn=void 0),W.key!==void 0&&(on=""+W.key),W)!j.call(W,un)||un==="key"||un==="__self"||un==="__source"||un==="ref"&&W.ref===void 0||(q[un]=W[un]);var un=arguments.length-2;if(un===1)q.children=X;else if(1<un){for(var qn=Array(un),Kn=0;Kn<un;Kn++)qn[Kn]=arguments[Kn+2];q.children=qn}return z(R.type,on,void 0,void 0,Tn,q)},Mn.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:s,_context:R},R},Mn.createElement=function(R,W,X){var q,on={},Tn=null;if(W!=null)for(q in W.key!==void 0&&(Tn=""+W.key),W)j.call(W,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(on[q]=W[q]);var un=arguments.length-2;if(un===1)on.children=X;else if(1<un){for(var qn=Array(un),Kn=0;Kn<un;Kn++)qn[Kn]=arguments[Kn+2];on.children=qn}if(R&&R.defaultProps)for(q in un=R.defaultProps,un)on[q]===void 0&&(on[q]=un[q]);return z(R,Tn,void 0,void 0,null,on)},Mn.createRef=function(){return{current:null}},Mn.forwardRef=function(R){return{$$typeof:m,render:R}},Mn.isValidElement=tn,Mn.lazy=function(R){return{$$typeof:S,_payload:{_status:-1,_result:R},_init:Z}},Mn.memo=function(R,W){return{$$typeof:f,type:R,compare:W===void 0?null:W}},Mn.startTransition=function(R){var W=I.T,X={};I.T=X;try{var q=R(),on=I.S;on!==null&&on(X,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(vn,en)}catch(Tn){en(Tn)}finally{I.T=W}},Mn.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},Mn.use=function(R){return I.H.use(R)},Mn.useActionState=function(R,W,X){return I.H.useActionState(R,W,X)},Mn.useCallback=function(R,W){return I.H.useCallback(R,W)},Mn.useContext=function(R){return I.H.useContext(R)},Mn.useDebugValue=function(){},Mn.useDeferredValue=function(R,W){return I.H.useDeferredValue(R,W)},Mn.useEffect=function(R,W,X){var q=I.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(R,W)},Mn.useId=function(){return I.H.useId()},Mn.useImperativeHandle=function(R,W,X){return I.H.useImperativeHandle(R,W,X)},Mn.useInsertionEffect=function(R,W){return I.H.useInsertionEffect(R,W)},Mn.useLayoutEffect=function(R,W){return I.H.useLayoutEffect(R,W)},Mn.useMemo=function(R,W){return I.H.useMemo(R,W)},Mn.useOptimistic=function(R,W){return I.H.useOptimistic(R,W)},Mn.useReducer=function(R,W,X){return I.H.useReducer(R,W,X)},Mn.useRef=function(R){return I.H.useRef(R)},Mn.useState=function(R){return I.H.useState(R)},Mn.useSyncExternalStore=function(R,W,X){return I.H.useSyncExternalStore(R,W,X)},Mn.useTransition=function(){return I.H.useTransition()},Mn.version="19.1.1",Mn}var Ok;function Fm(){return Ok||(Ok=1,yd.exports=PR()),yd.exports}var w=Fm();const uo=Bl(w),Ck=KR({__proto__:null,default:uo},[w]);var vd={exports:{}},wr={},kd={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ik;function ER(){return Ik||(Ik=1,function(n){function e(L,Z){var en=L.length;L.push(Z);n:for(;0<en;){var vn=en-1>>>1,R=L[vn];if(0<t(R,Z))L[vn]=Z,L[en]=R,en=vn;else break n}}function o(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Z=L[0],en=L.pop();if(en!==Z){L[0]=en;n:for(var vn=0,R=L.length,W=R>>>1;vn<W;){var X=2*(vn+1)-1,q=L[X],on=X+1,Tn=L[on];if(0>t(q,en))on<R&&0>t(Tn,q)?(L[vn]=Tn,L[on]=en,vn=on):(L[vn]=q,L[X]=en,vn=X);else if(on<R&&0>t(Tn,en))L[vn]=Tn,L[on]=en,vn=on;else break n}}return Z}function t(L,Z){var en=L.sortIndex-Z.sortIndex;return en!==0?en:L.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var c=Date,m=c.now();n.unstable_now=function(){return c.now()-m}}var d=[],f=[],S=1,p=null,v=3,T=!1,M=!1,C=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var Z=o(f);Z!==null;){if(Z.callback===null)r(f);else if(Z.startTime<=L)r(f),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=o(f)}}function I(L){if(C=!1,P(L),!M)if(o(d)!==null)M=!0,j||(j=!0,nn());else{var Z=o(f);Z!==null&&gn(I,Z.startTime-L)}}var j=!1,z=-1,U=5,tn=-1;function ln(){return A?!0:!(n.unstable_now()-tn<U)}function fn(){if(A=!1,j){var L=n.unstable_now();tn=L;var Z=!0;try{n:{M=!1,C&&(C=!1,O(z),z=-1),T=!0;var en=v;try{e:{for(P(L),p=o(d);p!==null&&!(p.expirationTime>L&&ln());){var vn=p.callback;if(typeof vn=="function"){p.callback=null,v=p.priorityLevel;var R=vn(p.expirationTime<=L);if(L=n.unstable_now(),typeof R=="function"){p.callback=R,P(L),Z=!0;break e}p===o(d)&&r(d),P(L)}else r(d);p=o(d)}if(p!==null)Z=!0;else{var W=o(f);W!==null&&gn(I,W.startTime-L),Z=!1}}break n}finally{p=null,v=en,T=!1}Z=void 0}}finally{Z?nn():j=!1}}}var nn;if(typeof D=="function")nn=function(){D(fn)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,In=yn.port2;yn.port1.onmessage=fn,nn=function(){In.postMessage(null)}}else nn=function(){k(fn,0)};function gn(L,Z){z=k(function(){L(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_next=function(L){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var en=v;v=Z;try{return L()}finally{v=en}},n.unstable_requestPaint=function(){A=!0},n.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var en=v;v=L;try{return Z()}finally{v=en}},n.unstable_scheduleCallback=function(L,Z,en){var vn=n.unstable_now();switch(typeof en=="object"&&en!==null?(en=en.delay,en=typeof en=="number"&&0<en?vn+en:vn):en=vn,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=en+R,L={id:S++,callback:Z,priorityLevel:L,startTime:en,expirationTime:R,sortIndex:-1},en>vn?(L.sortIndex=en,e(f,L),o(d)===null&&L===o(f)&&(C?(O(z),z=-1):C=!0,gn(I,en-vn))):(L.sortIndex=R,e(d,L),M||T||(M=!0,j||(j=!0,nn()))),L},n.unstable_shouldYield=ln,n.unstable_wrapCallback=function(L){var Z=v;return function(){var en=v;v=Z;try{return L.apply(this,arguments)}finally{v=en}}}}(bd)),bd}var Kk;function NR(){return Kk||(Kk=1,kd.exports=ER()),kd.exports}var Td={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rk;function HR(){if(Rk)return we;Rk=1;var n=Fm();function e(d){var f="https://react.dev/errors/"+d;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)f+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+d+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(e(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},t=Symbol.for("react.portal");function s(d,f,S){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:t,key:p==null?null:""+p,children:d,containerInfo:f,implementation:S}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(d,f){if(d==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,we.createPortal=function(d,f){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return s(d,f,null,S)},we.flushSync=function(d){var f=c.T,S=r.p;try{if(c.T=null,r.p=2,d)return d()}finally{c.T=f,r.p=S,r.d.f()}},we.preconnect=function(d,f){typeof d=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,r.d.C(d,f))},we.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},we.preinit=function(d,f){if(typeof d=="string"&&f&&typeof f.as=="string"){var S=f.as,p=m(S,f.crossOrigin),v=typeof f.integrity=="string"?f.integrity:void 0,T=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;S==="style"?r.d.S(d,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:p,integrity:v,fetchPriority:T}):S==="script"&&r.d.X(d,{crossOrigin:p,integrity:v,fetchPriority:T,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},we.preinitModule=function(d,f){if(typeof d=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var S=m(f.as,f.crossOrigin);r.d.M(d,{crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&r.d.M(d)},we.preload=function(d,f){if(typeof d=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var S=f.as,p=m(S,f.crossOrigin);r.d.L(d,S,{crossOrigin:p,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},we.preloadModule=function(d,f){if(typeof d=="string")if(f){var S=m(f.as,f.crossOrigin);r.d.m(d,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:S,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else r.d.m(d)},we.requestFormReset=function(d){r.d.r(d)},we.unstable_batchedUpdates=function(d,f){return d(f)},we.useFormState=function(d,f,S){return c.H.useFormState(d,f,S)},we.useFormStatus=function(){return c.H.useHostTransitionStatus()},we.version="19.1.1",we}var Bk;function hM(){if(Bk)return Td.exports;Bk=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Td.exports=HR(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pk;function GR(){if(Pk)return wr;Pk=1;var n=NR(),e=Fm(),o=hM();function r(a){var i="https://react.dev/errors/"+a;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)i+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+a+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function s(a){var i=a,u=a;if(a.alternate)for(;i.return;)i=i.return;else{a=i;do i=a,(i.flags&4098)!==0&&(u=i.return),a=i.return;while(a)}return i.tag===3?u:null}function c(a){if(a.tag===13){var i=a.memoizedState;if(i===null&&(a=a.alternate,a!==null&&(i=a.memoizedState)),i!==null)return i.dehydrated}return null}function m(a){if(s(a)!==a)throw Error(r(188))}function d(a){var i=a.alternate;if(!i){if(i=s(a),i===null)throw Error(r(188));return i!==a?null:a}for(var u=a,l=i;;){var h=u.return;if(h===null)break;var g=h.alternate;if(g===null){if(l=h.return,l!==null){u=l;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===u)return m(h),a;if(g===l)return m(h),i;g=g.sibling}throw Error(r(188))}if(u.return!==l.return)u=h,l=g;else{for(var y=!1,b=h.child;b;){if(b===u){y=!0,u=h,l=g;break}if(b===l){y=!0,l=h,u=g;break}b=b.sibling}if(!y){for(b=g.child;b;){if(b===u){y=!0,u=g,l=h;break}if(b===l){y=!0,l=g,u=h;break}b=b.sibling}if(!y)throw Error(r(189))}}if(u.alternate!==l)throw Error(r(190))}if(u.tag!==3)throw Error(r(188));return u.stateNode.current===u?a:i}function f(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a;for(a=a.child;a!==null;){if(i=f(a),i!==null)return i;a=a.sibling}return null}var S=Object.assign,p=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),ln=Symbol.for("react.memo_cache_sentinel"),fn=Symbol.iterator;function nn(a){return a===null||typeof a!="object"?null:(a=fn&&a[fn]||a["@@iterator"],typeof a=="function"?a:null)}var yn=Symbol.for("react.client.reference");function In(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===yn?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case M:return"Fragment";case A:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case j:return"SuspenseList";case tn:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case T:return"Portal";case D:return(a.displayName||"Context")+".Provider";case O:return(a._context.displayName||"Context")+".Consumer";case P:var i=a.render;return a=a.displayName,a||(a=i.displayName||i.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case z:return i=a.displayName||null,i!==null?i:In(a.type)||"Memo";case U:i=a._payload,a=a._init;try{return In(a(i))}catch{}}return null}var gn=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,en={pending:!1,data:null,method:null,action:null},vn=[],R=-1;function W(a){return{current:a}}function X(a){0>R||(a.current=vn[R],vn[R]=null,R--)}function q(a,i){R++,vn[R]=a.current,a.current=i}var on=W(null),Tn=W(null),un=W(null),qn=W(null);function Kn(a,i){switch(q(un,i),q(Tn,a),q(on,null),i.nodeType){case 9:case 11:a=(a=i.documentElement)&&(a=a.namespaceURI)?qv(a):0;break;default:if(a=i.tagName,i=i.namespaceURI)i=qv(i),a=Qv(i,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}X(on),q(on,a)}function Le(){X(on),X(Tn),X(un)}function wo(a){a.memoizedState!==null&&q(qn,a);var i=on.current,u=Qv(i,a.type);i!==u&&(q(Tn,a),q(on,u))}function Na(a){Tn.current===a&&(X(on),X(Tn)),qn.current===a&&(X(qn),kr._currentValue=en)}var mi=Object.prototype.hasOwnProperty,Oo=n.unstable_scheduleCallback,fi=n.unstable_cancelCallback,oc=n.unstable_shouldYield,lI=n.unstable_requestPaint,pt=n.unstable_now,cI=n.unstable_getCurrentPriorityLevel,BS=n.unstable_ImmediatePriority,PS=n.unstable_UserBlockingPriority,gu=n.unstable_NormalPriority,hI=n.unstable_LowPriority,ES=n.unstable_IdlePriority,dI=n.log,mI=n.unstable_setDisableYieldValue,Co=null,_e=null;function ia(a){if(typeof dI=="function"&&mI(a),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(Co,a)}catch{}}var je=Math.clz32?Math.clz32:SI,fI=Math.log,gI=Math.LN2;function SI(a){return a>>>=0,a===0?32:31-(fI(a)/gI|0)|0}var Su=256,pu=4194304;function Ha(a){var i=a&42;if(i!==0)return i;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function yu(a,i,u){var l=a.pendingLanes;if(l===0)return 0;var h=0,g=a.suspendedLanes,y=a.pingedLanes;a=a.warmLanes;var b=l&134217727;return b!==0?(l=b&~g,l!==0?h=Ha(l):(y&=b,y!==0?h=Ha(y):u||(u=b&~a,u!==0&&(h=Ha(u))))):(b=l&~g,b!==0?h=Ha(b):y!==0?h=Ha(y):u||(u=l&~a,u!==0&&(h=Ha(u)))),h===0?0:i!==0&&i!==h&&(i&g)===0&&(g=h&-h,u=i&-i,g>=u||g===32&&(u&4194048)!==0)?i:h}function Io(a,i){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&i)===0}function pI(a,i){switch(a){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NS(){var a=Su;return Su<<=1,(Su&4194048)===0&&(Su=256),a}function HS(){var a=pu;return pu<<=1,(pu&62914560)===0&&(pu=4194304),a}function rc(a){for(var i=[],u=0;31>u;u++)i.push(a);return i}function Ko(a,i){a.pendingLanes|=i,i!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function yI(a,i,u,l,h,g){var y=a.pendingLanes;a.pendingLanes=u,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=u,a.entangledLanes&=u,a.errorRecoveryDisabledLanes&=u,a.shellSuspendCounter=0;var b=a.entanglements,K=a.expirationTimes,G=a.hiddenUpdates;for(u=y&~u;0<u;){var F=31-je(u),Y=1<<F;b[F]=0,K[F]=-1;var x=G[F];if(x!==null)for(G[F]=null,F=0;F<x.length;F++){var _=x[F];_!==null&&(_.lane&=-536870913)}u&=~Y}l!==0&&GS(a,l,0),g!==0&&h===0&&a.tag!==0&&(a.suspendedLanes|=g&~(y&~i))}function GS(a,i,u){a.pendingLanes|=i,a.suspendedLanes&=~i;var l=31-je(i);a.entangledLanes|=i,a.entanglements[l]=a.entanglements[l]|1073741824|u&4194090}function xS(a,i){var u=a.entangledLanes|=i;for(a=a.entanglements;u;){var l=31-je(u),h=1<<l;h&i|a[l]&i&&(a[l]|=i),u&=~h}}function uc(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function sc(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function LS(){var a=Z.p;return a!==0?a:(a=window.event,a===void 0?32:yk(a.type))}function vI(a,i){var u=Z.p;try{return Z.p=a,i()}finally{Z.p=u}}var oa=Math.random().toString(36).slice(2),Ae="__reactFiber$"+oa,Be="__reactProps$"+oa,gi="__reactContainer$"+oa,lc="__reactEvents$"+oa,kI="__reactListeners$"+oa,bI="__reactHandles$"+oa,_S="__reactResources$"+oa,Ro="__reactMarker$"+oa;function cc(a){delete a[Ae],delete a[Be],delete a[lc],delete a[kI],delete a[bI]}function Si(a){var i=a[Ae];if(i)return i;for(var u=a.parentNode;u;){if(i=u[gi]||u[Ae]){if(u=i.alternate,i.child!==null||u!==null&&u.child!==null)for(a=ak(a);a!==null;){if(u=a[Ae])return u;a=ak(a)}return i}a=u,u=a.parentNode}return null}function pi(a){if(a=a[Ae]||a[gi]){var i=a.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return a}return null}function Bo(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a.stateNode;throw Error(r(33))}function yi(a){var i=a[_S];return i||(i=a[_S]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fe(a){a[Ro]=!0}var jS=new Set,zS={};function Ga(a,i){vi(a,i),vi(a+"Capture",i)}function vi(a,i){for(zS[a]=i,a=0;a<i.length;a++)jS.add(i[a])}var TI=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$S={},FS={};function MI(a){return mi.call(FS,a)?!0:mi.call($S,a)?!1:TI.test(a)?FS[a]=!0:($S[a]=!0,!1)}function vu(a,i,u){if(MI(i))if(u===null)a.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":a.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){a.removeAttribute(i);return}}a.setAttribute(i,""+u)}}function ku(a,i,u){if(u===null)a.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(i);return}a.setAttribute(i,""+u)}}function Pt(a,i,u,l){if(l===null)a.removeAttribute(u);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(u);return}a.setAttributeNS(i,u,""+l)}}var hc,US;function ki(a){if(hc===void 0)try{throw Error()}catch(u){var i=u.stack.trim().match(/\n( *(at )?)/);hc=i&&i[1]||"",US=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hc+a+US}var dc=!1;function mc(a,i){if(!a||dc)return"";dc=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(_){var x=_}Reflect.construct(a,[],Y)}else{try{Y.call()}catch(_){x=_}a.call(Y.prototype)}}else{try{throw Error()}catch(_){x=_}(Y=a())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(_){if(_&&x&&typeof _.stack=="string")return[_.stack,x.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),y=g[0],b=g[1];if(y&&b){var K=y.split(`
`),G=b.split(`
`);for(h=l=0;l<K.length&&!K[l].includes("DetermineComponentFrameRoot");)l++;for(;h<G.length&&!G[h].includes("DetermineComponentFrameRoot");)h++;if(l===K.length||h===G.length)for(l=K.length-1,h=G.length-1;1<=l&&0<=h&&K[l]!==G[h];)h--;for(;1<=l&&0<=h;l--,h--)if(K[l]!==G[h]){if(l!==1||h!==1)do if(l--,h--,0>h||K[l]!==G[h]){var F=`
`+K[l].replace(" at new "," at ");return a.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",a.displayName)),F}while(1<=l&&0<=h);break}}}finally{dc=!1,Error.prepareStackTrace=u}return(u=a?a.displayName||a.name:"")?ki(u):""}function AI(a){switch(a.tag){case 26:case 27:case 5:return ki(a.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return mc(a.type,!1);case 11:return mc(a.type.render,!1);case 1:return mc(a.type,!0);case 31:return ki("Activity");default:return""}}function VS(a){try{var i="";do i+=AI(a),a=a.return;while(a);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function Xe(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function YS(a){var i=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function DI(a){var i=YS(a)?"checked":"value",u=Object.getOwnPropertyDescriptor(a.constructor.prototype,i),l=""+a[i];if(!a.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,g=u.set;return Object.defineProperty(a,i,{configurable:!0,get:function(){return h.call(this)},set:function(y){l=""+y,g.call(this,y)}}),Object.defineProperty(a,i,{enumerable:u.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){a._valueTracker=null,delete a[i]}}}}function bu(a){a._valueTracker||(a._valueTracker=DI(a))}function WS(a){if(!a)return!1;var i=a._valueTracker;if(!i)return!0;var u=i.getValue(),l="";return a&&(l=YS(a)?a.checked?"true":"false":a.value),a=l,a!==u?(i.setValue(a),!0):!1}function Tu(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var wI=/[\n"\\]/g;function qe(a){return a.replace(wI,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fc(a,i,u,l,h,g,y,b){a.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?a.type=y:a.removeAttribute("type"),i!=null?y==="number"?(i===0&&a.value===""||a.value!=i)&&(a.value=""+Xe(i)):a.value!==""+Xe(i)&&(a.value=""+Xe(i)):y!=="submit"&&y!=="reset"||a.removeAttribute("value"),i!=null?gc(a,y,Xe(i)):u!=null?gc(a,y,Xe(u)):l!=null&&a.removeAttribute("value"),h==null&&g!=null&&(a.defaultChecked=!!g),h!=null&&(a.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?a.name=""+Xe(b):a.removeAttribute("name")}function ZS(a,i,u,l,h,g,y,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(a.type=g),i!=null||u!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;u=u!=null?""+Xe(u):"",i=i!=null?""+Xe(i):u,b||i===a.value||(a.value=i),a.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,a.checked=b?a.checked:!!l,a.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(a.name=y)}function gc(a,i,u){i==="number"&&Tu(a.ownerDocument)===a||a.defaultValue===""+u||(a.defaultValue=""+u)}function bi(a,i,u,l){if(a=a.options,i){i={};for(var h=0;h<u.length;h++)i["$"+u[h]]=!0;for(u=0;u<a.length;u++)h=i.hasOwnProperty("$"+a[u].value),a[u].selected!==h&&(a[u].selected=h),h&&l&&(a[u].defaultSelected=!0)}else{for(u=""+Xe(u),i=null,h=0;h<a.length;h++){if(a[h].value===u){a[h].selected=!0,l&&(a[h].defaultSelected=!0);return}i!==null||a[h].disabled||(i=a[h])}i!==null&&(i.selected=!0)}}function JS(a,i,u){if(i!=null&&(i=""+Xe(i),i!==a.value&&(a.value=i),u==null)){a.defaultValue!==i&&(a.defaultValue=i);return}a.defaultValue=u!=null?""+Xe(u):""}function XS(a,i,u,l){if(i==null){if(l!=null){if(u!=null)throw Error(r(92));if(gn(l)){if(1<l.length)throw Error(r(93));l=l[0]}u=l}u==null&&(u=""),i=u}u=Xe(i),a.defaultValue=u,l=a.textContent,l===u&&l!==""&&l!==null&&(a.value=l)}function Ti(a,i){if(i){var u=a.firstChild;if(u&&u===a.lastChild&&u.nodeType===3){u.nodeValue=i;return}}a.textContent=i}var OI=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qS(a,i,u){var l=i.indexOf("--")===0;u==null||typeof u=="boolean"||u===""?l?a.setProperty(i,""):i==="float"?a.cssFloat="":a[i]="":l?a.setProperty(i,u):typeof u!="number"||u===0||OI.has(i)?i==="float"?a.cssFloat=u:a[i]=(""+u).trim():a[i]=u+"px"}function QS(a,i,u){if(i!=null&&typeof i!="object")throw Error(r(62));if(a=a.style,u!=null){for(var l in u)!u.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?a.setProperty(l,""):l==="float"?a.cssFloat="":a[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&u[h]!==l&&qS(a,h,l)}else for(var g in i)i.hasOwnProperty(g)&&qS(a,g,i[g])}function Sc(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CI=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),II=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(a){return II.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var pc=null;function yc(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Mi=null,Ai=null;function np(a){var i=pi(a);if(i&&(a=i.stateNode)){var u=a[Be]||null;n:switch(a=i.stateNode,i.type){case"input":if(fc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name),i=u.name,u.type==="radio"&&i!=null){for(u=a;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<u.length;i++){var l=u[i];if(l!==a&&l.form===a.form){var h=l[Be]||null;if(!h)throw Error(r(90));fc(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<u.length;i++)l=u[i],l.form===a.form&&WS(l)}break n;case"textarea":JS(a,u.value,u.defaultValue);break n;case"select":i=u.value,i!=null&&bi(a,!!u.multiple,i,!1)}}}var vc=!1;function ep(a,i,u){if(vc)return a(i,u);vc=!0;try{var l=a(i);return l}finally{if(vc=!1,(Mi!==null||Ai!==null)&&(ss(),Mi&&(i=Mi,a=Ai,Ai=Mi=null,np(i),a)))for(i=0;i<a.length;i++)np(a[i])}}function Po(a,i){var u=a.stateNode;if(u===null)return null;var l=u[Be]||null;if(l===null)return null;u=l[i];n:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(a=a.type,l=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!l;break n;default:a=!1}if(a)return null;if(u&&typeof u!="function")throw Error(r(231,i,typeof u));return u}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Et)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{kc=!1}var ra=null,bc=null,Au=null;function tp(){if(Au)return Au;var a,i=bc,u=i.length,l,h="value"in ra?ra.value:ra.textContent,g=h.length;for(a=0;a<u&&i[a]===h[a];a++);var y=u-a;for(l=1;l<=y&&i[u-l]===h[g-l];l++);return Au=h.slice(a,1<l?1-l:void 0)}function Du(a){var i=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&i===13&&(a=13)):a=i,a===10&&(a=13),32<=a||a===13?a:0}function wu(){return!0}function ap(){return!1}function Pe(a){function i(u,l,h,g,y){this._reactName=u,this._targetInst=h,this.type=l,this.nativeEvent=g,this.target=y,this.currentTarget=null;for(var b in a)a.hasOwnProperty(b)&&(u=a[b],this[b]=u?u(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?wu:ap,this.isPropagationStopped=ap,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),i}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Pe(xa),No=S({},xa,{view:0,detail:0}),KI=Pe(No),Tc,Mc,Ho,Cu=S({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Ho&&(Ho&&a.type==="mousemove"?(Tc=a.screenX-Ho.screenX,Mc=a.screenY-Ho.screenY):Mc=Tc=0,Ho=a),Tc)},movementY:function(a){return"movementY"in a?a.movementY:Mc}}),ip=Pe(Cu),RI=S({},Cu,{dataTransfer:0}),BI=Pe(RI),PI=S({},No,{relatedTarget:0}),Ac=Pe(PI),EI=S({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),NI=Pe(EI),HI=S({},xa,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),GI=Pe(HI),xI=S({},xa,{data:0}),op=Pe(xI),LI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_I={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(a){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(a):(a=jI[a])?!!i[a]:!1}function Dc(){return zI}var $I=S({},No,{key:function(a){if(a.key){var i=LI[a.key]||a.key;if(i!=="Unidentified")return i}return a.type==="keypress"?(a=Du(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?_I[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(a){return a.type==="keypress"?Du(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Du(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),FI=Pe($I),UI=S({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Pe(UI),VI=S({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),YI=Pe(VI),WI=S({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZI=Pe(WI),JI=S({},Cu,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Pe(JI),qI=S({},xa,{newState:0,oldState:0}),QI=Pe(qI),nK=[9,13,27,32],wc=Et&&"CompositionEvent"in window,Go=null;Et&&"documentMode"in document&&(Go=document.documentMode);var eK=Et&&"TextEvent"in window&&!Go,up=Et&&(!wc||Go&&8<Go&&11>=Go),sp=" ",lp=!1;function cp(a,i){switch(a){case"keyup":return nK.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Di=!1;function tK(a,i){switch(a){case"compositionend":return hp(i);case"keypress":return i.which!==32?null:(lp=!0,sp);case"textInput":return a=i.data,a===sp&&lp?null:a;default:return null}}function aK(a,i){if(Di)return a==="compositionend"||!wc&&cp(a,i)?(a=tp(),Au=bc=ra=null,Di=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return up&&i.locale!=="ko"?null:i.data;default:return null}}var iK={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i==="input"?!!iK[a.type]:i==="textarea"}function mp(a,i,u,l){Mi?Ai?Ai.push(l):Ai=[l]:Mi=l,i=fs(i,"onChange"),0<i.length&&(u=new Ou("onChange","change",null,u,l),a.push({event:u,listeners:i}))}var xo=null,Lo=null;function oK(a){Yv(a,0)}function Iu(a){var i=Bo(a);if(WS(i))return a}function fp(a,i){if(a==="change")return i}var gp=!1;if(Et){var Oc;if(Et){var Cc="oninput"in document;if(!Cc){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Cc=typeof Sp.oninput=="function"}Oc=Cc}else Oc=!1;gp=Oc&&(!document.documentMode||9<document.documentMode)}function pp(){xo&&(xo.detachEvent("onpropertychange",yp),Lo=xo=null)}function yp(a){if(a.propertyName==="value"&&Iu(Lo)){var i=[];mp(i,Lo,a,yc(a)),ep(oK,i)}}function rK(a,i,u){a==="focusin"?(pp(),xo=i,Lo=u,xo.attachEvent("onpropertychange",yp)):a==="focusout"&&pp()}function uK(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Iu(Lo)}function sK(a,i){if(a==="click")return Iu(i)}function lK(a,i){if(a==="input"||a==="change")return Iu(i)}function cK(a,i){return a===i&&(a!==0||1/a===1/i)||a!==a&&i!==i}var ze=typeof Object.is=="function"?Object.is:cK;function _o(a,i){if(ze(a,i))return!0;if(typeof a!="object"||a===null||typeof i!="object"||i===null)return!1;var u=Object.keys(a),l=Object.keys(i);if(u.length!==l.length)return!1;for(l=0;l<u.length;l++){var h=u[l];if(!mi.call(i,h)||!ze(a[h],i[h]))return!1}return!0}function vp(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function kp(a,i){var u=vp(a);a=0;for(var l;u;){if(u.nodeType===3){if(l=a+u.textContent.length,a<=i&&l>=i)return{node:u,offset:i-a};a=l}n:{for(;u;){if(u.nextSibling){u=u.nextSibling;break n}u=u.parentNode}u=void 0}u=vp(u)}}function bp(a,i){return a&&i?a===i?!0:a&&a.nodeType===3?!1:i&&i.nodeType===3?bp(a,i.parentNode):"contains"in a?a.contains(i):a.compareDocumentPosition?!!(a.compareDocumentPosition(i)&16):!1:!1}function Tp(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var i=Tu(a.document);i instanceof a.HTMLIFrameElement;){try{var u=typeof i.contentWindow.location.href=="string"}catch{u=!1}if(u)a=i.contentWindow;else break;i=Tu(a.document)}return i}function Ic(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i&&(i==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||i==="textarea"||a.contentEditable==="true")}var hK=Et&&"documentMode"in document&&11>=document.documentMode,wi=null,Kc=null,jo=null,Rc=!1;function Mp(a,i,u){var l=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Rc||wi==null||wi!==Tu(l)||(l=wi,"selectionStart"in l&&Ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&_o(jo,l)||(jo=l,l=fs(Kc,"onSelect"),0<l.length&&(i=new Ou("onSelect","select",null,i,u),a.push({event:i,listeners:l}),i.target=wi)))}function La(a,i){var u={};return u[a.toLowerCase()]=i.toLowerCase(),u["Webkit"+a]="webkit"+i,u["Moz"+a]="moz"+i,u}var Oi={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Bc={},Ap={};Et&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function _a(a){if(Bc[a])return Bc[a];if(!Oi[a])return a;var i=Oi[a],u;for(u in i)if(i.hasOwnProperty(u)&&u in Ap)return Bc[a]=i[u];return a}var Dp=_a("animationend"),wp=_a("animationiteration"),Op=_a("animationstart"),dK=_a("transitionrun"),mK=_a("transitionstart"),fK=_a("transitioncancel"),Cp=_a("transitionend"),Ip=new Map,Pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pc.push("scrollEnd");function lt(a,i){Ip.set(a,i),Ga(i,[a])}var Kp=new WeakMap;function Qe(a,i){if(typeof a=="object"&&a!==null){var u=Kp.get(a);return u!==void 0?u:(i={value:a,source:i,stack:VS(i)},Kp.set(a,i),i)}return{value:a,source:i,stack:VS(i)}}var nt=[],Ci=0,Ec=0;function Ku(){for(var a=Ci,i=Ec=Ci=0;i<a;){var u=nt[i];nt[i++]=null;var l=nt[i];nt[i++]=null;var h=nt[i];nt[i++]=null;var g=nt[i];if(nt[i++]=null,l!==null&&h!==null){var y=l.pending;y===null?h.next=h:(h.next=y.next,y.next=h),l.pending=h}g!==0&&Rp(u,h,g)}}function Ru(a,i,u,l){nt[Ci++]=a,nt[Ci++]=i,nt[Ci++]=u,nt[Ci++]=l,Ec|=l,a.lanes|=l,a=a.alternate,a!==null&&(a.lanes|=l)}function Nc(a,i,u,l){return Ru(a,i,u,l),Bu(a)}function Ii(a,i){return Ru(a,null,null,i),Bu(a)}function Rp(a,i,u){a.lanes|=u;var l=a.alternate;l!==null&&(l.lanes|=u);for(var h=!1,g=a.return;g!==null;)g.childLanes|=u,l=g.alternate,l!==null&&(l.childLanes|=u),g.tag===22&&(a=g.stateNode,a===null||a._visibility&1||(h=!0)),a=g,g=g.return;return a.tag===3?(g=a.stateNode,h&&i!==null&&(h=31-je(u),a=g.hiddenUpdates,l=a[h],l===null?a[h]=[i]:l.push(i),i.lane=u|536870912),g):null}function Bu(a){if(50<dr)throw dr=0,jh=null,Error(r(185));for(var i=a.return;i!==null;)a=i,i=a.return;return a.tag===3?a.stateNode:null}var Ki={};function gK(a,i,u,l){this.tag=a,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(a,i,u,l){return new gK(a,i,u,l)}function Hc(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Nt(a,i){var u=a.alternate;return u===null?(u=$e(a.tag,i,a.key,a.mode),u.elementType=a.elementType,u.type=a.type,u.stateNode=a.stateNode,u.alternate=a,a.alternate=u):(u.pendingProps=i,u.type=a.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=a.flags&65011712,u.childLanes=a.childLanes,u.lanes=a.lanes,u.child=a.child,u.memoizedProps=a.memoizedProps,u.memoizedState=a.memoizedState,u.updateQueue=a.updateQueue,i=a.dependencies,u.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},u.sibling=a.sibling,u.index=a.index,u.ref=a.ref,u.refCleanup=a.refCleanup,u}function Bp(a,i){a.flags&=65011714;var u=a.alternate;return u===null?(a.childLanes=0,a.lanes=i,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,i=u.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a}function Pu(a,i,u,l,h,g){var y=0;if(l=a,typeof a=="function")Hc(a)&&(y=1);else if(typeof a=="string")y=pR(a,u,on.current)?26:a==="html"||a==="head"||a==="body"?27:5;else n:switch(a){case tn:return a=$e(31,u,i,h),a.elementType=tn,a.lanes=g,a;case M:return ja(u.children,h,g,i);case C:y=8,h|=24;break;case A:return a=$e(12,u,i,h|2),a.elementType=A,a.lanes=g,a;case I:return a=$e(13,u,i,h),a.elementType=I,a.lanes=g,a;case j:return a=$e(19,u,i,h),a.elementType=j,a.lanes=g,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case k:case D:y=10;break n;case O:y=9;break n;case P:y=11;break n;case z:y=14;break n;case U:y=16,l=null;break n}y=29,u=Error(r(130,a===null?"null":typeof a,"")),l=null}return i=$e(y,u,i,h),i.elementType=a,i.type=l,i.lanes=g,i}function ja(a,i,u,l){return a=$e(7,a,l,i),a.lanes=u,a}function Gc(a,i,u){return a=$e(6,a,null,i),a.lanes=u,a}function xc(a,i,u){return i=$e(4,a.children!==null?a.children:[],a.key,i),i.lanes=u,i.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},i}var Ri=[],Bi=0,Eu=null,Nu=0,et=[],tt=0,za=null,Ht=1,Gt="";function $a(a,i){Ri[Bi++]=Nu,Ri[Bi++]=Eu,Eu=a,Nu=i}function Pp(a,i,u){et[tt++]=Ht,et[tt++]=Gt,et[tt++]=za,za=a;var l=Ht;a=Gt;var h=32-je(l)-1;l&=~(1<<h),u+=1;var g=32-je(i)+h;if(30<g){var y=h-h%5;g=(l&(1<<y)-1).toString(32),l>>=y,h-=y,Ht=1<<32-je(i)+h|u<<h|l,Gt=g+a}else Ht=1<<g|u<<h|l,Gt=a}function Lc(a){a.return!==null&&($a(a,1),Pp(a,1,0))}function _c(a){for(;a===Eu;)Eu=Ri[--Bi],Ri[Bi]=null,Nu=Ri[--Bi],Ri[Bi]=null;for(;a===za;)za=et[--tt],et[tt]=null,Gt=et[--tt],et[tt]=null,Ht=et[--tt],et[tt]=null}var Ie=null,Qn=null,En=!1,Fa=null,yt=!1,jc=Error(r(519));function Ua(a){var i=Error(r(418,""));throw Fo(Qe(i,a)),jc}function Ep(a){var i=a.stateNode,u=a.type,l=a.memoizedProps;switch(i[Ae]=a,i[Be]=l,u){case"dialog":Cn("cancel",i),Cn("close",i);break;case"iframe":case"object":case"embed":Cn("load",i);break;case"video":case"audio":for(u=0;u<fr.length;u++)Cn(fr[u],i);break;case"source":Cn("error",i);break;case"img":case"image":case"link":Cn("error",i),Cn("load",i);break;case"details":Cn("toggle",i);break;case"input":Cn("invalid",i),ZS(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),bu(i);break;case"select":Cn("invalid",i);break;case"textarea":Cn("invalid",i),XS(i,l.value,l.defaultValue,l.children),bu(i)}u=l.children,typeof u!="string"&&typeof u!="number"&&typeof u!="bigint"||i.textContent===""+u||l.suppressHydrationWarning===!0||Xv(i.textContent,u)?(l.popover!=null&&(Cn("beforetoggle",i),Cn("toggle",i)),l.onScroll!=null&&Cn("scroll",i),l.onScrollEnd!=null&&Cn("scrollend",i),l.onClick!=null&&(i.onclick=gs),i=!0):i=!1,i||Ua(a)}function Np(a){for(Ie=a.return;Ie;)switch(Ie.tag){case 5:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:Ie=Ie.return}}function zo(a){if(a!==Ie)return!1;if(!En)return Np(a),En=!0,!1;var i=a.tag,u;if((u=i!==3&&i!==27)&&((u=i===5)&&(u=a.type,u=!(u!=="form"&&u!=="button")||ad(a.type,a.memoizedProps)),u=!u),u&&Qn&&Ua(a),Np(a),i===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));n:{for(a=a.nextSibling,i=0;a;){if(a.nodeType===8)if(u=a.data,u==="/$"){if(i===0){Qn=ht(a.nextSibling);break n}i--}else u!=="$"&&u!=="$!"&&u!=="$?"||i++;a=a.nextSibling}Qn=null}}else i===27?(i=Qn,Ta(a.type)?(a=ud,ud=null,Qn=a):Qn=i):Qn=Ie?ht(a.stateNode.nextSibling):null;return!0}function $o(){Qn=Ie=null,En=!1}function Hp(){var a=Fa;return a!==null&&(He===null?He=a:He.push.apply(He,a),Fa=null),a}function Fo(a){Fa===null?Fa=[a]:Fa.push(a)}var zc=W(null),Va=null,xt=null;function ua(a,i,u){q(zc,i._currentValue),i._currentValue=u}function Lt(a){a._currentValue=zc.current,X(zc)}function $c(a,i,u){for(;a!==null;){var l=a.alternate;if((a.childLanes&i)!==i?(a.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),a===u)break;a=a.return}}function Fc(a,i,u,l){var h=a.child;for(h!==null&&(h.return=a);h!==null;){var g=h.dependencies;if(g!==null){var y=h.child;g=g.firstContext;n:for(;g!==null;){var b=g;g=h;for(var K=0;K<i.length;K++)if(b.context===i[K]){g.lanes|=u,b=g.alternate,b!==null&&(b.lanes|=u),$c(g.return,u,a),l||(y=null);break n}g=b.next}}else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=u,g=y.alternate,g!==null&&(g.lanes|=u),$c(y,u,a),y=null}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===a){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}}function Uo(a,i,u,l){a=null;for(var h=i,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var y=h.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=h.type;ze(h.pendingProps.value,y.value)||(a!==null?a.push(b):a=[b])}}else if(h===qn.current){if(y=h.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(a!==null?a.push(kr):a=[kr])}h=h.return}a!==null&&Fc(i,a,u,l),i.flags|=262144}function Hu(a){for(a=a.firstContext;a!==null;){if(!ze(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ya(a){Va=a,xt=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function De(a){return Gp(Va,a)}function Gu(a,i){return Va===null&&Ya(a),Gp(a,i)}function Gp(a,i){var u=i._currentValue;if(i={context:i,memoizedValue:u,next:null},xt===null){if(a===null)throw Error(r(308));xt=i,a.dependencies={lanes:0,firstContext:i},a.flags|=524288}else xt=xt.next=i;return u}var SK=typeof AbortController<"u"?AbortController:function(){var a=[],i=this.signal={aborted:!1,addEventListener:function(u,l){a.push(l)}};this.abort=function(){i.aborted=!0,a.forEach(function(u){return u()})}},pK=n.unstable_scheduleCallback,yK=n.unstable_NormalPriority,he={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new SK,data:new Map,refCount:0}}function Vo(a){a.refCount--,a.refCount===0&&pK(yK,function(){a.controller.abort()})}var Yo=null,Vc=0,Pi=0,Ei=null;function vK(a,i){if(Yo===null){var u=Yo=[];Vc=0,Pi=Wh(),Ei={status:"pending",value:void 0,then:function(l){u.push(l)}}}return Vc++,i.then(xp,xp),i}function xp(){if(--Vc===0&&Yo!==null){Ei!==null&&(Ei.status="fulfilled");var a=Yo;Yo=null,Pi=0,Ei=null;for(var i=0;i<a.length;i++)(0,a[i])()}}function kK(a,i){var u=[],l={status:"pending",value:null,reason:null,then:function(h){u.push(h)}};return a.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<u.length;h++)(0,u[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<u.length;h++)(0,u[h])(void 0)}),l}var Lp=L.S;L.S=function(a,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&vK(a,i),Lp!==null&&Lp(a,i)};var Wa=W(null);function Yc(){var a=Wa.current;return a!==null?a:Fn.pooledCache}function xu(a,i){i===null?q(Wa,Wa.current):q(Wa,i.pool)}function _p(){var a=Yc();return a===null?null:{parent:he._currentValue,pool:a}}var Wo=Error(r(460)),jp=Error(r(474)),Lu=Error(r(542)),Wc={then:function(){}};function zp(a){return a=a.status,a==="fulfilled"||a==="rejected"}function _u(){}function $p(a,i,u){switch(u=a[u],u===void 0?a.push(i):u!==i&&(i.then(_u,_u),i=u),i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,Up(a),a;default:if(typeof i.status=="string")i.then(_u,_u);else{if(a=Fn,a!==null&&100<a.shellSuspendCounter)throw Error(r(482));a=i,a.status="pending",a.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,Up(a),a}throw Zo=i,Wo}}var Zo=null;function Fp(){if(Zo===null)throw Error(r(459));var a=Zo;return Zo=null,a}function Up(a){if(a===Wo||a===Lu)throw Error(r(483))}var sa=!1;function Zc(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(a,i){a=a.updateQueue,i.updateQueue===a&&(i.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function la(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function ca(a,i,u){var l=a.updateQueue;if(l===null)return null;if(l=l.shared,(xn&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Bu(a),Rp(a,null,u),i}return Ru(a,l,i,u),Bu(a)}function Jo(a,i,u){if(i=i.updateQueue,i!==null&&(i=i.shared,(u&4194048)!==0)){var l=i.lanes;l&=a.pendingLanes,u|=l,i.lanes=u,xS(a,u)}}function Xc(a,i){var u=a.updateQueue,l=a.alternate;if(l!==null&&(l=l.updateQueue,u===l)){var h=null,g=null;if(u=u.firstBaseUpdate,u!==null){do{var y={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};g===null?h=g=y:g=g.next=y,u=u.next}while(u!==null);g===null?h=g=i:g=g.next=i}else h=g=i;u={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},a.updateQueue=u;return}a=u.lastBaseUpdate,a===null?u.firstBaseUpdate=i:a.next=i,u.lastBaseUpdate=i}var qc=!1;function Xo(){if(qc){var a=Ei;if(a!==null)throw a}}function qo(a,i,u,l){qc=!1;var h=a.updateQueue;sa=!1;var g=h.firstBaseUpdate,y=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var K=b,G=K.next;K.next=null,y===null?g=G:y.next=G,y=K;var F=a.alternate;F!==null&&(F=F.updateQueue,b=F.lastBaseUpdate,b!==y&&(b===null?F.firstBaseUpdate=G:b.next=G,F.lastBaseUpdate=K))}if(g!==null){var Y=h.baseState;y=0,F=G=K=null,b=g;do{var x=b.lane&-536870913,_=x!==b.lane;if(_?(Rn&x)===x:(l&x)===x){x!==0&&x===Pi&&(qc=!0),F!==null&&(F=F.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});n:{var Sn=a,hn=b;x=i;var zn=u;switch(hn.tag){case 1:if(Sn=hn.payload,typeof Sn=="function"){Y=Sn.call(zn,Y,x);break n}Y=Sn;break n;case 3:Sn.flags=Sn.flags&-65537|128;case 0:if(Sn=hn.payload,x=typeof Sn=="function"?Sn.call(zn,Y,x):Sn,x==null)break n;Y=S({},Y,x);break n;case 2:sa=!0}}x=b.callback,x!==null&&(a.flags|=64,_&&(a.flags|=8192),_=h.callbacks,_===null?h.callbacks=[x]:_.push(x))}else _={lane:x,tag:b.tag,payload:b.payload,callback:b.callback,next:null},F===null?(G=F=_,K=Y):F=F.next=_,y|=x;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;_=b,b=_.next,_.next=null,h.lastBaseUpdate=_,h.shared.pending=null}}while(!0);F===null&&(K=Y),h.baseState=K,h.firstBaseUpdate=G,h.lastBaseUpdate=F,g===null&&(h.shared.lanes=0),ya|=y,a.lanes=y,a.memoizedState=Y}}function Vp(a,i){if(typeof a!="function")throw Error(r(191,a));a.call(i)}function Yp(a,i){var u=a.callbacks;if(u!==null)for(a.callbacks=null,a=0;a<u.length;a++)Vp(u[a],i)}var Ni=W(null),ju=W(0);function Wp(a,i){a=Vt,q(ju,a),q(Ni,i),Vt=a|i.baseLanes}function Qc(){q(ju,Vt),q(Ni,Ni.current)}function nh(){Vt=ju.current,X(Ni),X(ju)}var ha=0,An=null,_n=null,ue=null,zu=!1,Hi=!1,Za=!1,$u=0,Qo=0,Gi=null,bK=0;function ie(){throw Error(r(321))}function eh(a,i){if(i===null)return!1;for(var u=0;u<i.length&&u<a.length;u++)if(!ze(a[u],i[u]))return!1;return!0}function th(a,i,u,l,h,g){return ha=g,An=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=a===null||a.memoizedState===null?Ry:By,Za=!1,g=u(l,h),Za=!1,Hi&&(g=Jp(i,u,l,h)),Zp(a),g}function Zp(a){L.H=Zu;var i=_n!==null&&_n.next!==null;if(ha=0,ue=_n=An=null,zu=!1,Qo=0,Gi=null,i)throw Error(r(300));a===null||ge||(a=a.dependencies,a!==null&&Hu(a)&&(ge=!0))}function Jp(a,i,u,l){An=a;var h=0;do{if(Hi&&(Gi=null),Qo=0,Hi=!1,25<=h)throw Error(r(301));if(h+=1,ue=_n=null,a.updateQueue!=null){var g=a.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}L.H=CK,g=i(u,l)}while(Hi);return g}function TK(){var a=L.H,i=a.useState()[0];return i=typeof i.then=="function"?nr(i):i,a=a.useState()[0],(_n!==null?_n.memoizedState:null)!==a&&(An.flags|=1024),i}function ah(){var a=$u!==0;return $u=0,a}function ih(a,i,u){i.updateQueue=a.updateQueue,i.flags&=-2053,a.lanes&=~u}function oh(a){if(zu){for(a=a.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}zu=!1}ha=0,ue=_n=An=null,Hi=!1,Qo=$u=0,Gi=null}function Ee(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?An.memoizedState=ue=a:ue=ue.next=a,ue}function se(){if(_n===null){var a=An.alternate;a=a!==null?a.memoizedState:null}else a=_n.next;var i=ue===null?An.memoizedState:ue.next;if(i!==null)ue=i,_n=a;else{if(a===null)throw An.alternate===null?Error(r(467)):Error(r(310));_n=a,a={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},ue===null?An.memoizedState=ue=a:ue=ue.next=a}return ue}function rh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nr(a){var i=Qo;return Qo+=1,Gi===null&&(Gi=[]),a=$p(Gi,a,i),i=An,(ue===null?i.memoizedState:ue.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?Ry:By),a}function Fu(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return nr(a);if(a.$$typeof===D)return De(a)}throw Error(r(438,String(a)))}function uh(a){var i=null,u=An.updateQueue;if(u!==null&&(i=u.memoCache),i==null){var l=An.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),u===null&&(u=rh(),An.updateQueue=u),u.memoCache=i,u=i.data[i.index],u===void 0)for(u=i.data[i.index]=Array(a),l=0;l<a;l++)u[l]=ln;return i.index++,u}function _t(a,i){return typeof i=="function"?i(a):i}function Uu(a){var i=se();return sh(i,_n,a)}function sh(a,i,u){var l=a.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=u;var h=a.baseQueue,g=l.pending;if(g!==null){if(h!==null){var y=h.next;h.next=g.next,g.next=y}i.baseQueue=h=g,l.pending=null}if(g=a.baseState,h===null)a.memoizedState=g;else{i=h.next;var b=y=null,K=null,G=i,F=!1;do{var Y=G.lane&-536870913;if(Y!==G.lane?(Rn&Y)===Y:(ha&Y)===Y){var x=G.revertLane;if(x===0)K!==null&&(K=K.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),Y===Pi&&(F=!0);else if((ha&x)===x){G=G.next,x===Pi&&(F=!0);continue}else Y={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},K===null?(b=K=Y,y=g):K=K.next=Y,An.lanes|=x,ya|=x;Y=G.action,Za&&u(g,Y),g=G.hasEagerState?G.eagerState:u(g,Y)}else x={lane:Y,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},K===null?(b=K=x,y=g):K=K.next=x,An.lanes|=Y,ya|=Y;G=G.next}while(G!==null&&G!==i);if(K===null?y=g:K.next=b,!ze(g,a.memoizedState)&&(ge=!0,F&&(u=Ei,u!==null)))throw u;a.memoizedState=g,a.baseState=y,a.baseQueue=K,l.lastRenderedState=g}return h===null&&(l.lanes=0),[a.memoizedState,l.dispatch]}function lh(a){var i=se(),u=i.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=a;var l=u.dispatch,h=u.pending,g=i.memoizedState;if(h!==null){u.pending=null;var y=h=h.next;do g=a(g,y.action),y=y.next;while(y!==h);ze(g,i.memoizedState)||(ge=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),u.lastRenderedState=g}return[g,l]}function Xp(a,i,u){var l=An,h=se(),g=En;if(g){if(u===void 0)throw Error(r(407));u=u()}else u=i();var y=!ze((_n||h).memoizedState,u);y&&(h.memoizedState=u,ge=!0),h=h.queue;var b=ny.bind(null,l,h,a);if(er(2048,8,b,[a]),h.getSnapshot!==i||y||ue!==null&&ue.memoizedState.tag&1){if(l.flags|=2048,xi(9,Vu(),Qp.bind(null,l,h,u,i),null),Fn===null)throw Error(r(349));g||(ha&124)!==0||qp(l,i,u)}return u}function qp(a,i,u){a.flags|=16384,a={getSnapshot:i,value:u},i=An.updateQueue,i===null?(i=rh(),An.updateQueue=i,i.stores=[a]):(u=i.stores,u===null?i.stores=[a]:u.push(a))}function Qp(a,i,u,l){i.value=u,i.getSnapshot=l,ey(i)&&ty(a)}function ny(a,i,u){return u(function(){ey(i)&&ty(a)})}function ey(a){var i=a.getSnapshot;a=a.value;try{var u=i();return!ze(a,u)}catch{return!0}}function ty(a){var i=Ii(a,2);i!==null&&We(i,a,2)}function ch(a){var i=Ee();if(typeof a=="function"){var u=a;if(a=u(),Za){ia(!0);try{u()}finally{ia(!1)}}}return i.memoizedState=i.baseState=a,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:a},i}function ay(a,i,u,l){return a.baseState=u,sh(a,_n,typeof l=="function"?l:_t)}function MK(a,i,u,l,h){if(Wu(a))throw Error(r(485));if(a=i.action,a!==null){var g={payload:h,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){g.listeners.push(y)}};L.T!==null?u(!0):g.isTransition=!1,l(g),u=i.pending,u===null?(g.next=i.pending=g,iy(i,g)):(g.next=u.next,i.pending=u.next=g)}}function iy(a,i){var u=i.action,l=i.payload,h=a.state;if(i.isTransition){var g=L.T,y={};L.T=y;try{var b=u(h,l),K=L.S;K!==null&&K(y,b),oy(a,i,b)}catch(G){hh(a,i,G)}finally{L.T=g}}else try{g=u(h,l),oy(a,i,g)}catch(G){hh(a,i,G)}}function oy(a,i,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(l){ry(a,i,l)},function(l){return hh(a,i,l)}):ry(a,i,u)}function ry(a,i,u){i.status="fulfilled",i.value=u,uy(i),a.state=u,i=a.pending,i!==null&&(u=i.next,u===i?a.pending=null:(u=u.next,i.next=u,iy(a,u)))}function hh(a,i,u){var l=a.pending;if(a.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=u,uy(i),i=i.next;while(i!==l)}a.action=null}function uy(a){a=a.listeners;for(var i=0;i<a.length;i++)(0,a[i])()}function sy(a,i){return i}function ly(a,i){if(En){var u=Fn.formState;if(u!==null){n:{var l=An;if(En){if(Qn){e:{for(var h=Qn,g=yt;h.nodeType!==8;){if(!g){h=null;break e}if(h=ht(h.nextSibling),h===null){h=null;break e}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Qn=ht(h.nextSibling),l=h.data==="F!";break n}}Ua(l)}l=!1}l&&(i=u[0])}}return u=Ee(),u.memoizedState=u.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sy,lastRenderedState:i},u.queue=l,u=Cy.bind(null,An,l),l.dispatch=u,l=ch(!1),g=Sh.bind(null,An,!1,l.queue),l=Ee(),h={state:i,dispatch:null,action:a,pending:null},l.queue=h,u=MK.bind(null,An,h,g,u),h.dispatch=u,l.memoizedState=a,[i,u,!1]}function cy(a){var i=se();return hy(i,_n,a)}function hy(a,i,u){if(i=sh(a,i,sy)[0],a=Uu(_t)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=nr(i)}catch(y){throw y===Wo?Lu:y}else l=i;i=se();var h=i.queue,g=h.dispatch;return u!==i.memoizedState&&(An.flags|=2048,xi(9,Vu(),AK.bind(null,h,u),null)),[l,g,a]}function AK(a,i){a.action=i}function dy(a){var i=se(),u=_n;if(u!==null)return hy(i,u,a);se(),i=i.memoizedState,u=se();var l=u.queue.dispatch;return u.memoizedState=a,[i,l,!1]}function xi(a,i,u,l){return a={tag:a,create:u,deps:l,inst:i,next:null},i=An.updateQueue,i===null&&(i=rh(),An.updateQueue=i),u=i.lastEffect,u===null?i.lastEffect=a.next=a:(l=u.next,u.next=a,a.next=l,i.lastEffect=a),a}function Vu(){return{destroy:void 0,resource:void 0}}function my(){return se().memoizedState}function Yu(a,i,u,l){var h=Ee();l=l===void 0?null:l,An.flags|=a,h.memoizedState=xi(1|i,Vu(),u,l)}function er(a,i,u,l){var h=se();l=l===void 0?null:l;var g=h.memoizedState.inst;_n!==null&&l!==null&&eh(l,_n.memoizedState.deps)?h.memoizedState=xi(i,g,u,l):(An.flags|=a,h.memoizedState=xi(1|i,g,u,l))}function fy(a,i){Yu(8390656,8,a,i)}function gy(a,i){er(2048,8,a,i)}function Sy(a,i){return er(4,2,a,i)}function py(a,i){return er(4,4,a,i)}function yy(a,i){if(typeof i=="function"){a=a();var u=i(a);return function(){typeof u=="function"?u():i(null)}}if(i!=null)return a=a(),i.current=a,function(){i.current=null}}function vy(a,i,u){u=u!=null?u.concat([a]):null,er(4,4,yy.bind(null,i,a),u)}function dh(){}function ky(a,i){var u=se();i=i===void 0?null:i;var l=u.memoizedState;return i!==null&&eh(i,l[1])?l[0]:(u.memoizedState=[a,i],a)}function by(a,i){var u=se();i=i===void 0?null:i;var l=u.memoizedState;if(i!==null&&eh(i,l[1]))return l[0];if(l=a(),Za){ia(!0);try{a()}finally{ia(!1)}}return u.memoizedState=[l,i],l}function mh(a,i,u){return u===void 0||(ha&1073741824)!==0?a.memoizedState=i:(a.memoizedState=u,a=Av(),An.lanes|=a,ya|=a,u)}function Ty(a,i,u,l){return ze(u,i)?u:Ni.current!==null?(a=mh(a,u,l),ze(a,i)||(ge=!0),a):(ha&42)===0?(ge=!0,a.memoizedState=u):(a=Av(),An.lanes|=a,ya|=a,i)}function My(a,i,u,l,h){var g=Z.p;Z.p=g!==0&&8>g?g:8;var y=L.T,b={};L.T=b,Sh(a,!1,i,u);try{var K=h(),G=L.S;if(G!==null&&G(b,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var F=kK(K,l);tr(a,i,F,Ye(a))}else tr(a,i,l,Ye(a))}catch(Y){tr(a,i,{then:function(){},status:"rejected",reason:Y},Ye())}finally{Z.p=g,L.T=y}}function DK(){}function fh(a,i,u,l){if(a.tag!==5)throw Error(r(476));var h=Ay(a).queue;My(a,h,i,en,u===null?DK:function(){return Dy(a),u(l)})}function Ay(a){var i=a.memoizedState;if(i!==null)return i;i={memoizedState:en,baseState:en,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:en},next:null};var u={};return i.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:u},next:null},a.memoizedState=i,a=a.alternate,a!==null&&(a.memoizedState=i),i}function Dy(a){var i=Ay(a).next.queue;tr(a,i,{},Ye())}function gh(){return De(kr)}function wy(){return se().memoizedState}function Oy(){return se().memoizedState}function wK(a){for(var i=a.return;i!==null;){switch(i.tag){case 24:case 3:var u=Ye();a=la(u);var l=ca(i,a,u);l!==null&&(We(l,i,u),Jo(l,i,u)),i={cache:Uc()},a.payload=i;return}i=i.return}}function OK(a,i,u){var l=Ye();u={lane:l,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null},Wu(a)?Iy(i,u):(u=Nc(a,i,u,l),u!==null&&(We(u,a,l),Ky(u,i,l)))}function Cy(a,i,u){var l=Ye();tr(a,i,u,l)}function tr(a,i,u,l){var h={lane:l,revertLane:0,action:u,hasEagerState:!1,eagerState:null,next:null};if(Wu(a))Iy(i,h);else{var g=a.alternate;if(a.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var y=i.lastRenderedState,b=g(y,u);if(h.hasEagerState=!0,h.eagerState=b,ze(b,y))return Ru(a,i,h,0),Fn===null&&Ku(),!1}catch{}finally{}if(u=Nc(a,i,h,l),u!==null)return We(u,a,l),Ky(u,i,l),!0}return!1}function Sh(a,i,u,l){if(l={lane:2,revertLane:Wh(),action:l,hasEagerState:!1,eagerState:null,next:null},Wu(a)){if(i)throw Error(r(479))}else i=Nc(a,u,l,2),i!==null&&We(i,a,2)}function Wu(a){var i=a.alternate;return a===An||i!==null&&i===An}function Iy(a,i){Hi=zu=!0;var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}function Ky(a,i,u){if((u&4194048)!==0){var l=i.lanes;l&=a.pendingLanes,u|=l,i.lanes=u,xS(a,u)}}var Zu={readContext:De,use:Fu,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useLayoutEffect:ie,useInsertionEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useSyncExternalStore:ie,useId:ie,useHostTransitionStatus:ie,useFormState:ie,useActionState:ie,useOptimistic:ie,useMemoCache:ie,useCacheRefresh:ie},Ry={readContext:De,use:Fu,useCallback:function(a,i){return Ee().memoizedState=[a,i===void 0?null:i],a},useContext:De,useEffect:fy,useImperativeHandle:function(a,i,u){u=u!=null?u.concat([a]):null,Yu(4194308,4,yy.bind(null,i,a),u)},useLayoutEffect:function(a,i){return Yu(4194308,4,a,i)},useInsertionEffect:function(a,i){Yu(4,2,a,i)},useMemo:function(a,i){var u=Ee();i=i===void 0?null:i;var l=a();if(Za){ia(!0);try{a()}finally{ia(!1)}}return u.memoizedState=[l,i],l},useReducer:function(a,i,u){var l=Ee();if(u!==void 0){var h=u(i);if(Za){ia(!0);try{u(i)}finally{ia(!1)}}}else h=i;return l.memoizedState=l.baseState=h,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:h},l.queue=a,a=a.dispatch=OK.bind(null,An,a),[l.memoizedState,a]},useRef:function(a){var i=Ee();return a={current:a},i.memoizedState=a},useState:function(a){a=ch(a);var i=a.queue,u=Cy.bind(null,An,i);return i.dispatch=u,[a.memoizedState,u]},useDebugValue:dh,useDeferredValue:function(a,i){var u=Ee();return mh(u,a,i)},useTransition:function(){var a=ch(!1);return a=My.bind(null,An,a.queue,!0,!1),Ee().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,i,u){var l=An,h=Ee();if(En){if(u===void 0)throw Error(r(407));u=u()}else{if(u=i(),Fn===null)throw Error(r(349));(Rn&124)!==0||qp(l,i,u)}h.memoizedState=u;var g={value:u,getSnapshot:i};return h.queue=g,fy(ny.bind(null,l,g,a),[a]),l.flags|=2048,xi(9,Vu(),Qp.bind(null,l,g,u,i),null),u},useId:function(){var a=Ee(),i=Fn.identifierPrefix;if(En){var u=Gt,l=Ht;u=(l&~(1<<32-je(l)-1)).toString(32)+u,i="«"+i+"R"+u,u=$u++,0<u&&(i+="H"+u.toString(32)),i+="»"}else u=bK++,i="«"+i+"r"+u.toString(32)+"»";return a.memoizedState=i},useHostTransitionStatus:gh,useFormState:ly,useActionState:ly,useOptimistic:function(a){var i=Ee();i.memoizedState=i.baseState=a;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=u,i=Sh.bind(null,An,!0,u),u.dispatch=i,[a,i]},useMemoCache:uh,useCacheRefresh:function(){return Ee().memoizedState=wK.bind(null,An)}},By={readContext:De,use:Fu,useCallback:ky,useContext:De,useEffect:gy,useImperativeHandle:vy,useInsertionEffect:Sy,useLayoutEffect:py,useMemo:by,useReducer:Uu,useRef:my,useState:function(){return Uu(_t)},useDebugValue:dh,useDeferredValue:function(a,i){var u=se();return Ty(u,_n.memoizedState,a,i)},useTransition:function(){var a=Uu(_t)[0],i=se().memoizedState;return[typeof a=="boolean"?a:nr(a),i]},useSyncExternalStore:Xp,useId:wy,useHostTransitionStatus:gh,useFormState:cy,useActionState:cy,useOptimistic:function(a,i){var u=se();return ay(u,_n,a,i)},useMemoCache:uh,useCacheRefresh:Oy},CK={readContext:De,use:Fu,useCallback:ky,useContext:De,useEffect:gy,useImperativeHandle:vy,useInsertionEffect:Sy,useLayoutEffect:py,useMemo:by,useReducer:lh,useRef:my,useState:function(){return lh(_t)},useDebugValue:dh,useDeferredValue:function(a,i){var u=se();return _n===null?mh(u,a,i):Ty(u,_n.memoizedState,a,i)},useTransition:function(){var a=lh(_t)[0],i=se().memoizedState;return[typeof a=="boolean"?a:nr(a),i]},useSyncExternalStore:Xp,useId:wy,useHostTransitionStatus:gh,useFormState:dy,useActionState:dy,useOptimistic:function(a,i){var u=se();return _n!==null?ay(u,_n,a,i):(u.baseState=a,[a,u.queue.dispatch])},useMemoCache:uh,useCacheRefresh:Oy},Li=null,ar=0;function Ju(a){var i=ar;return ar+=1,Li===null&&(Li=[]),$p(Li,a,i)}function ir(a,i){i=i.props.ref,a.ref=i!==void 0?i:null}function Xu(a,i){throw i.$$typeof===p?Error(r(525)):(a=Object.prototype.toString.call(i),Error(r(31,a==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":a)))}function Py(a){var i=a._init;return i(a._payload)}function Ey(a){function i(E,B){if(a){var N=E.deletions;N===null?(E.deletions=[B],E.flags|=16):N.push(B)}}function u(E,B){if(!a)return null;for(;B!==null;)i(E,B),B=B.sibling;return null}function l(E){for(var B=new Map;E!==null;)E.key!==null?B.set(E.key,E):B.set(E.index,E),E=E.sibling;return B}function h(E,B){return E=Nt(E,B),E.index=0,E.sibling=null,E}function g(E,B,N){return E.index=N,a?(N=E.alternate,N!==null?(N=N.index,N<B?(E.flags|=67108866,B):N):(E.flags|=67108866,B)):(E.flags|=1048576,B)}function y(E){return a&&E.alternate===null&&(E.flags|=67108866),E}function b(E,B,N,V){return B===null||B.tag!==6?(B=Gc(N,E.mode,V),B.return=E,B):(B=h(B,N),B.return=E,B)}function K(E,B,N,V){var an=N.type;return an===M?F(E,B,N.props.children,V,N.key):B!==null&&(B.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===U&&Py(an)===B.type)?(B=h(B,N.props),ir(B,N),B.return=E,B):(B=Pu(N.type,N.key,N.props,null,E.mode,V),ir(B,N),B.return=E,B)}function G(E,B,N,V){return B===null||B.tag!==4||B.stateNode.containerInfo!==N.containerInfo||B.stateNode.implementation!==N.implementation?(B=xc(N,E.mode,V),B.return=E,B):(B=h(B,N.children||[]),B.return=E,B)}function F(E,B,N,V,an){return B===null||B.tag!==7?(B=ja(N,E.mode,V,an),B.return=E,B):(B=h(B,N),B.return=E,B)}function Y(E,B,N){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Gc(""+B,E.mode,N),B.return=E,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return N=Pu(B.type,B.key,B.props,null,E.mode,N),ir(N,B),N.return=E,N;case T:return B=xc(B,E.mode,N),B.return=E,B;case U:var V=B._init;return B=V(B._payload),Y(E,B,N)}if(gn(B)||nn(B))return B=ja(B,E.mode,N,null),B.return=E,B;if(typeof B.then=="function")return Y(E,Ju(B),N);if(B.$$typeof===D)return Y(E,Gu(E,B),N);Xu(E,B)}return null}function x(E,B,N,V){var an=B!==null?B.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return an!==null?null:b(E,B,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case v:return N.key===an?K(E,B,N,V):null;case T:return N.key===an?G(E,B,N,V):null;case U:return an=N._init,N=an(N._payload),x(E,B,N,V)}if(gn(N)||nn(N))return an!==null?null:F(E,B,N,V,null);if(typeof N.then=="function")return x(E,B,Ju(N),V);if(N.$$typeof===D)return x(E,B,Gu(E,N),V);Xu(E,N)}return null}function _(E,B,N,V,an){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return E=E.get(N)||null,b(B,E,""+V,an);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return E=E.get(V.key===null?N:V.key)||null,K(B,E,V,an);case T:return E=E.get(V.key===null?N:V.key)||null,G(B,E,V,an);case U:var wn=V._init;return V=wn(V._payload),_(E,B,N,V,an)}if(gn(V)||nn(V))return E=E.get(N)||null,F(B,E,V,an,null);if(typeof V.then=="function")return _(E,B,N,Ju(V),an);if(V.$$typeof===D)return _(E,B,N,Gu(B,V),an);Xu(B,V)}return null}function Sn(E,B,N,V){for(var an=null,wn=null,rn=B,dn=B=0,pe=null;rn!==null&&dn<N.length;dn++){rn.index>dn?(pe=rn,rn=null):pe=rn.sibling;var Pn=x(E,rn,N[dn],V);if(Pn===null){rn===null&&(rn=pe);break}a&&rn&&Pn.alternate===null&&i(E,rn),B=g(Pn,B,dn),wn===null?an=Pn:wn.sibling=Pn,wn=Pn,rn=pe}if(dn===N.length)return u(E,rn),En&&$a(E,dn),an;if(rn===null){for(;dn<N.length;dn++)rn=Y(E,N[dn],V),rn!==null&&(B=g(rn,B,dn),wn===null?an=rn:wn.sibling=rn,wn=rn);return En&&$a(E,dn),an}for(rn=l(rn);dn<N.length;dn++)pe=_(rn,E,dn,N[dn],V),pe!==null&&(a&&pe.alternate!==null&&rn.delete(pe.key===null?dn:pe.key),B=g(pe,B,dn),wn===null?an=pe:wn.sibling=pe,wn=pe);return a&&rn.forEach(function(Oa){return i(E,Oa)}),En&&$a(E,dn),an}function hn(E,B,N,V){if(N==null)throw Error(r(151));for(var an=null,wn=null,rn=B,dn=B=0,pe=null,Pn=N.next();rn!==null&&!Pn.done;dn++,Pn=N.next()){rn.index>dn?(pe=rn,rn=null):pe=rn.sibling;var Oa=x(E,rn,Pn.value,V);if(Oa===null){rn===null&&(rn=pe);break}a&&rn&&Oa.alternate===null&&i(E,rn),B=g(Oa,B,dn),wn===null?an=Oa:wn.sibling=Oa,wn=Oa,rn=pe}if(Pn.done)return u(E,rn),En&&$a(E,dn),an;if(rn===null){for(;!Pn.done;dn++,Pn=N.next())Pn=Y(E,Pn.value,V),Pn!==null&&(B=g(Pn,B,dn),wn===null?an=Pn:wn.sibling=Pn,wn=Pn);return En&&$a(E,dn),an}for(rn=l(rn);!Pn.done;dn++,Pn=N.next())Pn=_(rn,E,dn,Pn.value,V),Pn!==null&&(a&&Pn.alternate!==null&&rn.delete(Pn.key===null?dn:Pn.key),B=g(Pn,B,dn),wn===null?an=Pn:wn.sibling=Pn,wn=Pn);return a&&rn.forEach(function(IR){return i(E,IR)}),En&&$a(E,dn),an}function zn(E,B,N,V){if(typeof N=="object"&&N!==null&&N.type===M&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case v:n:{for(var an=N.key;B!==null;){if(B.key===an){if(an=N.type,an===M){if(B.tag===7){u(E,B.sibling),V=h(B,N.props.children),V.return=E,E=V;break n}}else if(B.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===U&&Py(an)===B.type){u(E,B.sibling),V=h(B,N.props),ir(V,N),V.return=E,E=V;break n}u(E,B);break}else i(E,B);B=B.sibling}N.type===M?(V=ja(N.props.children,E.mode,V,N.key),V.return=E,E=V):(V=Pu(N.type,N.key,N.props,null,E.mode,V),ir(V,N),V.return=E,E=V)}return y(E);case T:n:{for(an=N.key;B!==null;){if(B.key===an)if(B.tag===4&&B.stateNode.containerInfo===N.containerInfo&&B.stateNode.implementation===N.implementation){u(E,B.sibling),V=h(B,N.children||[]),V.return=E,E=V;break n}else{u(E,B);break}else i(E,B);B=B.sibling}V=xc(N,E.mode,V),V.return=E,E=V}return y(E);case U:return an=N._init,N=an(N._payload),zn(E,B,N,V)}if(gn(N))return Sn(E,B,N,V);if(nn(N)){if(an=nn(N),typeof an!="function")throw Error(r(150));return N=an.call(N),hn(E,B,N,V)}if(typeof N.then=="function")return zn(E,B,Ju(N),V);if(N.$$typeof===D)return zn(E,B,Gu(E,N),V);Xu(E,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,B!==null&&B.tag===6?(u(E,B.sibling),V=h(B,N),V.return=E,E=V):(u(E,B),V=Gc(N,E.mode,V),V.return=E,E=V),y(E)):u(E,B)}return function(E,B,N,V){try{ar=0;var an=zn(E,B,N,V);return Li=null,an}catch(rn){if(rn===Wo||rn===Lu)throw rn;var wn=$e(29,rn,null,E.mode);return wn.lanes=V,wn.return=E,wn}finally{}}}var _i=Ey(!0),Ny=Ey(!1),at=W(null),vt=null;function da(a){var i=a.alternate;q(de,de.current&1),q(at,a),vt===null&&(i===null||Ni.current!==null||i.memoizedState!==null)&&(vt=a)}function Hy(a){if(a.tag===22){if(q(de,de.current),q(at,a),vt===null){var i=a.alternate;i!==null&&i.memoizedState!==null&&(vt=a)}}else ma()}function ma(){q(de,de.current),q(at,at.current)}function jt(a){X(at),vt===a&&(vt=null),X(de)}var de=W(0);function qu(a){for(var i=a;i!==null;){if(i.tag===13){var u=i.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||rd(u)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ph(a,i,u,l){i=a.memoizedState,u=u(l,i),u=u==null?i:S({},i,u),a.memoizedState=u,a.lanes===0&&(a.updateQueue.baseState=u)}var yh={enqueueSetState:function(a,i,u){a=a._reactInternals;var l=Ye(),h=la(l);h.payload=i,u!=null&&(h.callback=u),i=ca(a,h,l),i!==null&&(We(i,a,l),Jo(i,a,l))},enqueueReplaceState:function(a,i,u){a=a._reactInternals;var l=Ye(),h=la(l);h.tag=1,h.payload=i,u!=null&&(h.callback=u),i=ca(a,h,l),i!==null&&(We(i,a,l),Jo(i,a,l))},enqueueForceUpdate:function(a,i){a=a._reactInternals;var u=Ye(),l=la(u);l.tag=2,i!=null&&(l.callback=i),i=ca(a,l,u),i!==null&&(We(i,a,u),Jo(i,a,u))}};function Gy(a,i,u,l,h,g,y){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(l,g,y):i.prototype&&i.prototype.isPureReactComponent?!_o(u,l)||!_o(h,g):!0}function xy(a,i,u,l){a=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(u,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(u,l),i.state!==a&&yh.enqueueReplaceState(i,i.state,null)}function Ja(a,i){var u=i;if("ref"in i){u={};for(var l in i)l!=="ref"&&(u[l]=i[l])}if(a=a.defaultProps){u===i&&(u=S({},u));for(var h in a)u[h]===void 0&&(u[h]=a[h])}return u}var Qu=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function Ly(a){Qu(a)}function _y(a){console.error(a)}function jy(a){Qu(a)}function ns(a,i){try{var u=a.onUncaughtError;u(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function zy(a,i,u){try{var l=a.onCaughtError;l(u.value,{componentStack:u.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function vh(a,i,u){return u=la(u),u.tag=3,u.payload={element:null},u.callback=function(){ns(a,i)},u}function $y(a){return a=la(a),a.tag=3,a}function Fy(a,i,u,l){var h=u.type.getDerivedStateFromError;if(typeof h=="function"){var g=l.value;a.payload=function(){return h(g)},a.callback=function(){zy(i,u,l)}}var y=u.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){zy(i,u,l),typeof h!="function"&&(va===null?va=new Set([this]):va.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function IK(a,i,u,l,h){if(u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=u.alternate,i!==null&&Uo(i,u,h,!0),u=at.current,u!==null){switch(u.tag){case 13:return vt===null?$h():u.alternate===null&&ne===0&&(ne=3),u.flags&=-257,u.flags|=65536,u.lanes=h,l===Wc?u.flags|=16384:(i=u.updateQueue,i===null?u.updateQueue=new Set([l]):i.add(l),Uh(a,l,h)),!1;case 22:return u.flags|=65536,l===Wc?u.flags|=16384:(i=u.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},u.updateQueue=i):(u=i.retryQueue,u===null?i.retryQueue=new Set([l]):u.add(l)),Uh(a,l,h)),!1}throw Error(r(435,u.tag))}return Uh(a,l,h),$h(),!1}if(En)return i=at.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==jc&&(a=Error(r(422),{cause:l}),Fo(Qe(a,u)))):(l!==jc&&(i=Error(r(423),{cause:l}),Fo(Qe(i,u))),a=a.current.alternate,a.flags|=65536,h&=-h,a.lanes|=h,l=Qe(l,u),h=vh(a.stateNode,l,h),Xc(a,h),ne!==4&&(ne=2)),!1;var g=Error(r(520),{cause:l});if(g=Qe(g,u),hr===null?hr=[g]:hr.push(g),ne!==4&&(ne=2),i===null)return!0;l=Qe(l,u),u=i;do{switch(u.tag){case 3:return u.flags|=65536,a=h&-h,u.lanes|=a,a=vh(u.stateNode,l,a),Xc(u,a),!1;case 1:if(i=u.type,g=u.stateNode,(u.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(va===null||!va.has(g))))return u.flags|=65536,h&=-h,u.lanes|=h,h=$y(h),Fy(h,a,u,l),Xc(u,h),!1}u=u.return}while(u!==null);return!1}var Uy=Error(r(461)),ge=!1;function ye(a,i,u,l){i.child=a===null?Ny(i,null,u,l):_i(i,a.child,u,l)}function Vy(a,i,u,l,h){u=u.render;var g=i.ref;if("ref"in l){var y={};for(var b in l)b!=="ref"&&(y[b]=l[b])}else y=l;return Ya(i),l=th(a,i,u,y,g,h),b=ah(),a!==null&&!ge?(ih(a,i,h),zt(a,i,h)):(En&&b&&Lc(i),i.flags|=1,ye(a,i,l,h),i.child)}function Yy(a,i,u,l,h){if(a===null){var g=u.type;return typeof g=="function"&&!Hc(g)&&g.defaultProps===void 0&&u.compare===null?(i.tag=15,i.type=g,Wy(a,i,g,l,h)):(a=Pu(u.type,null,l,i,i.mode,h),a.ref=i.ref,a.return=i,i.child=a)}if(g=a.child,!Oh(a,h)){var y=g.memoizedProps;if(u=u.compare,u=u!==null?u:_o,u(y,l)&&a.ref===i.ref)return zt(a,i,h)}return i.flags|=1,a=Nt(g,l),a.ref=i.ref,a.return=i,i.child=a}function Wy(a,i,u,l,h){if(a!==null){var g=a.memoizedProps;if(_o(g,l)&&a.ref===i.ref)if(ge=!1,i.pendingProps=l=g,Oh(a,h))(a.flags&131072)!==0&&(ge=!0);else return i.lanes=a.lanes,zt(a,i,h)}return kh(a,i,u,l,h)}function Zy(a,i,u){var l=i.pendingProps,h=l.children,g=a!==null?a.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=g!==null?g.baseLanes|u:u,a!==null){for(h=i.child=a.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;i.childLanes=g&~l}else i.childLanes=0,i.child=null;return Jy(a,i,l,u)}if((u&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},a!==null&&xu(i,g!==null?g.cachePool:null),g!==null?Wp(i,g):Qc(),Hy(i);else return i.lanes=i.childLanes=536870912,Jy(a,i,g!==null?g.baseLanes|u:u,u)}else g!==null?(xu(i,g.cachePool),Wp(i,g),ma(),i.memoizedState=null):(a!==null&&xu(i,null),Qc(),ma());return ye(a,i,h,u),i.child}function Jy(a,i,u,l){var h=Yc();return h=h===null?null:{parent:he._currentValue,pool:h},i.memoizedState={baseLanes:u,cachePool:h},a!==null&&xu(i,null),Qc(),Hy(i),a!==null&&Uo(a,i,l,!0),null}function es(a,i){var u=i.ref;if(u===null)a!==null&&a.ref!==null&&(i.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(r(284));(a===null||a.ref!==u)&&(i.flags|=4194816)}}function kh(a,i,u,l,h){return Ya(i),u=th(a,i,u,l,void 0,h),l=ah(),a!==null&&!ge?(ih(a,i,h),zt(a,i,h)):(En&&l&&Lc(i),i.flags|=1,ye(a,i,u,h),i.child)}function Xy(a,i,u,l,h,g){return Ya(i),i.updateQueue=null,u=Jp(i,l,u,h),Zp(a),l=ah(),a!==null&&!ge?(ih(a,i,g),zt(a,i,g)):(En&&l&&Lc(i),i.flags|=1,ye(a,i,u,g),i.child)}function qy(a,i,u,l,h){if(Ya(i),i.stateNode===null){var g=Ki,y=u.contextType;typeof y=="object"&&y!==null&&(g=De(y)),g=new u(l,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=yh,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=l,g.state=i.memoizedState,g.refs={},Zc(i),y=u.contextType,g.context=typeof y=="object"&&y!==null?De(y):Ki,g.state=i.memoizedState,y=u.getDerivedStateFromProps,typeof y=="function"&&(ph(i,u,y,l),g.state=i.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(y=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),y!==g.state&&yh.enqueueReplaceState(g,g.state,null),qo(i,l,g,h),Xo(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(a===null){g=i.stateNode;var b=i.memoizedProps,K=Ja(u,b);g.props=K;var G=g.context,F=u.contextType;y=Ki,typeof F=="object"&&F!==null&&(y=De(F));var Y=u.getDerivedStateFromProps;F=typeof Y=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||G!==y)&&xy(i,g,l,y),sa=!1;var x=i.memoizedState;g.state=x,qo(i,l,g,h),Xo(),G=i.memoizedState,b||x!==G||sa?(typeof Y=="function"&&(ph(i,u,Y,l),G=i.memoizedState),(K=sa||Gy(i,u,K,l,x,G,y))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=G),g.props=l,g.state=G,g.context=y,l=K):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,Jc(a,i),y=i.memoizedProps,F=Ja(u,y),g.props=F,Y=i.pendingProps,x=g.context,G=u.contextType,K=Ki,typeof G=="object"&&G!==null&&(K=De(G)),b=u.getDerivedStateFromProps,(G=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==Y||x!==K)&&xy(i,g,l,K),sa=!1,x=i.memoizedState,g.state=x,qo(i,l,g,h),Xo();var _=i.memoizedState;y!==Y||x!==_||sa||a!==null&&a.dependencies!==null&&Hu(a.dependencies)?(typeof b=="function"&&(ph(i,u,b,l),_=i.memoizedState),(F=sa||Gy(i,u,F,l,x,_,K)||a!==null&&a.dependencies!==null&&Hu(a.dependencies))?(G||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,_,K),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,_,K)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===a.memoizedProps&&x===a.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===a.memoizedProps&&x===a.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=_),g.props=l,g.state=_,g.context=K,l=F):(typeof g.componentDidUpdate!="function"||y===a.memoizedProps&&x===a.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===a.memoizedProps&&x===a.memoizedState||(i.flags|=1024),l=!1)}return g=l,es(a,i),l=(i.flags&128)!==0,g||l?(g=i.stateNode,u=l&&typeof u.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,a!==null&&l?(i.child=_i(i,a.child,null,h),i.child=_i(i,null,u,h)):ye(a,i,u,h),i.memoizedState=g.state,a=i.child):a=zt(a,i,h),a}function Qy(a,i,u,l){return $o(),i.flags|=256,ye(a,i,u,l),i.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(a){return{baseLanes:a,cachePool:_p()}}function Mh(a,i,u){return a=a!==null?a.childLanes&~u:0,i&&(a|=it),a}function nv(a,i,u){var l=i.pendingProps,h=!1,g=(i.flags&128)!==0,y;if((y=g)||(y=a!==null&&a.memoizedState===null?!1:(de.current&2)!==0),y&&(h=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,a===null){if(En){if(h?da(i):ma(),En){var b=Qn,K;if(K=b){n:{for(K=b,b=yt;K.nodeType!==8;){if(!b){b=null;break n}if(K=ht(K.nextSibling),K===null){b=null;break n}}b=K}b!==null?(i.memoizedState={dehydrated:b,treeContext:za!==null?{id:Ht,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},K=$e(18,null,null,0),K.stateNode=b,K.return=i,i.child=K,Ie=i,Qn=null,K=!0):K=!1}K||Ua(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return rd(b)?i.lanes=32:i.lanes=536870912,null;jt(i)}return b=l.children,l=l.fallback,h?(ma(),h=i.mode,b=ts({mode:"hidden",children:b},h),l=ja(l,h,u,null),b.return=i,l.return=i,b.sibling=l,i.child=b,h=i.child,h.memoizedState=Th(u),h.childLanes=Mh(a,y,u),i.memoizedState=bh,l):(da(i),Ah(i,b))}if(K=a.memoizedState,K!==null&&(b=K.dehydrated,b!==null)){if(g)i.flags&256?(da(i),i.flags&=-257,i=Dh(a,i,u)):i.memoizedState!==null?(ma(),i.child=a.child,i.flags|=128,i=null):(ma(),h=l.fallback,b=i.mode,l=ts({mode:"visible",children:l.children},b),h=ja(h,b,u,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,_i(i,a.child,null,u),l=i.child,l.memoizedState=Th(u),l.childLanes=Mh(a,y,u),i.memoizedState=bh,i=h);else if(da(i),rd(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var G=y.dgst;y=G,l=Error(r(419)),l.stack="",l.digest=y,Fo({value:l,source:null,stack:null}),i=Dh(a,i,u)}else if(ge||Uo(a,i,u,!1),y=(u&a.childLanes)!==0,ge||y){if(y=Fn,y!==null&&(l=u&-u,l=(l&42)!==0?1:uc(l),l=(l&(y.suspendedLanes|u))!==0?0:l,l!==0&&l!==K.retryLane))throw K.retryLane=l,Ii(a,l),We(y,a,l),Uy;b.data==="$?"||$h(),i=Dh(a,i,u)}else b.data==="$?"?(i.flags|=192,i.child=a.child,i=null):(a=K.treeContext,Qn=ht(b.nextSibling),Ie=i,En=!0,Fa=null,yt=!1,a!==null&&(et[tt++]=Ht,et[tt++]=Gt,et[tt++]=za,Ht=a.id,Gt=a.overflow,za=i),i=Ah(i,l.children),i.flags|=4096);return i}return h?(ma(),h=l.fallback,b=i.mode,K=a.child,G=K.sibling,l=Nt(K,{mode:"hidden",children:l.children}),l.subtreeFlags=K.subtreeFlags&65011712,G!==null?h=Nt(G,h):(h=ja(h,b,u,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,b=a.child.memoizedState,b===null?b=Th(u):(K=b.cachePool,K!==null?(G=he._currentValue,K=K.parent!==G?{parent:G,pool:G}:K):K=_p(),b={baseLanes:b.baseLanes|u,cachePool:K}),h.memoizedState=b,h.childLanes=Mh(a,y,u),i.memoizedState=bh,l):(da(i),u=a.child,a=u.sibling,u=Nt(u,{mode:"visible",children:l.children}),u.return=i,u.sibling=null,a!==null&&(y=i.deletions,y===null?(i.deletions=[a],i.flags|=16):y.push(a)),i.child=u,i.memoizedState=null,u)}function Ah(a,i){return i=ts({mode:"visible",children:i},a.mode),i.return=a,a.child=i}function ts(a,i){return a=$e(22,a,null,i),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function Dh(a,i,u){return _i(i,a.child,null,u),a=Ah(i,i.pendingProps.children),a.flags|=2,i.memoizedState=null,a}function ev(a,i,u){a.lanes|=i;var l=a.alternate;l!==null&&(l.lanes|=i),$c(a.return,i,u)}function wh(a,i,u,l,h){var g=a.memoizedState;g===null?a.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:u,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=u,g.tailMode=h)}function tv(a,i,u){var l=i.pendingProps,h=l.revealOrder,g=l.tail;if(ye(a,i,l.children,u),l=de.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(a!==null&&(a.flags&128)!==0)n:for(a=i.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&ev(a,u,i);else if(a.tag===19)ev(a,u,i);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break n;for(;a.sibling===null;){if(a.return===null||a.return===i)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}l&=1}switch(q(de,l),h){case"forwards":for(u=i.child,h=null;u!==null;)a=u.alternate,a!==null&&qu(a)===null&&(h=u),u=u.sibling;u=h,u===null?(h=i.child,i.child=null):(h=u.sibling,u.sibling=null),wh(i,!1,h,u,g);break;case"backwards":for(u=null,h=i.child,i.child=null;h!==null;){if(a=h.alternate,a!==null&&qu(a)===null){i.child=h;break}a=h.sibling,h.sibling=u,u=h,h=a}wh(i,!0,u,null,g);break;case"together":wh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zt(a,i,u){if(a!==null&&(i.dependencies=a.dependencies),ya|=i.lanes,(u&i.childLanes)===0)if(a!==null){if(Uo(a,i,u,!1),(u&i.childLanes)===0)return null}else return null;if(a!==null&&i.child!==a.child)throw Error(r(153));if(i.child!==null){for(a=i.child,u=Nt(a,a.pendingProps),i.child=u,u.return=i;a.sibling!==null;)a=a.sibling,u=u.sibling=Nt(a,a.pendingProps),u.return=i;u.sibling=null}return i.child}function Oh(a,i){return(a.lanes&i)!==0?!0:(a=a.dependencies,!!(a!==null&&Hu(a)))}function KK(a,i,u){switch(i.tag){case 3:Kn(i,i.stateNode.containerInfo),ua(i,he,a.memoizedState.cache),$o();break;case 27:case 5:wo(i);break;case 4:Kn(i,i.stateNode.containerInfo);break;case 10:ua(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(da(i),i.flags|=128,null):(u&i.child.childLanes)!==0?nv(a,i,u):(da(i),a=zt(a,i,u),a!==null?a.sibling:null);da(i);break;case 19:var h=(a.flags&128)!==0;if(l=(u&i.childLanes)!==0,l||(Uo(a,i,u,!1),l=(u&i.childLanes)!==0),h){if(l)return tv(a,i,u);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),q(de,de.current),l)break;return null;case 22:case 23:return i.lanes=0,Zy(a,i,u);case 24:ua(i,he,a.memoizedState.cache)}return zt(a,i,u)}function av(a,i,u){if(a!==null)if(a.memoizedProps!==i.pendingProps)ge=!0;else{if(!Oh(a,u)&&(i.flags&128)===0)return ge=!1,KK(a,i,u);ge=(a.flags&131072)!==0}else ge=!1,En&&(i.flags&1048576)!==0&&Pp(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:n:{a=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Hc(l)?(a=Ja(l,a),i.tag=1,i=qy(null,i,l,a,u)):(i.tag=0,i=kh(null,i,l,a,u));else{if(l!=null){if(h=l.$$typeof,h===P){i.tag=11,i=Vy(null,i,l,a,u);break n}else if(h===z){i.tag=14,i=Yy(null,i,l,a,u);break n}}throw i=In(l)||l,Error(r(306,i,""))}}return i;case 0:return kh(a,i,i.type,i.pendingProps,u);case 1:return l=i.type,h=Ja(l,i.pendingProps),qy(a,i,l,h,u);case 3:n:{if(Kn(i,i.stateNode.containerInfo),a===null)throw Error(r(387));l=i.pendingProps;var g=i.memoizedState;h=g.element,Jc(a,i),qo(i,l,null,u);var y=i.memoizedState;if(l=y.cache,ua(i,he,l),l!==g.cache&&Fc(i,[he],u,!0),Xo(),l=y.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=Qy(a,i,l,u);break n}else if(l!==h){h=Qe(Error(r(424)),i),Fo(h),i=Qy(a,i,l,u);break n}else{switch(a=i.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(Qn=ht(a.firstChild),Ie=i,En=!0,Fa=null,yt=!0,u=Ny(i,null,l,u),i.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling}else{if($o(),l===h){i=zt(a,i,u);break n}ye(a,i,l,u)}i=i.child}return i;case 26:return es(a,i),a===null?(u=uk(i.type,null,i.pendingProps,null))?i.memoizedState=u:En||(u=i.type,a=i.pendingProps,l=Ss(un.current).createElement(u),l[Ae]=i,l[Be]=a,ke(l,u,a),fe(l),i.stateNode=l):i.memoizedState=uk(i.type,a.memoizedProps,i.pendingProps,a.memoizedState),null;case 27:return wo(i),a===null&&En&&(l=i.stateNode=ik(i.type,i.pendingProps,un.current),Ie=i,yt=!0,h=Qn,Ta(i.type)?(ud=h,Qn=ht(l.firstChild)):Qn=h),ye(a,i,i.pendingProps.children,u),es(a,i),a===null&&(i.flags|=4194304),i.child;case 5:return a===null&&En&&((h=l=Qn)&&(l=iR(l,i.type,i.pendingProps,yt),l!==null?(i.stateNode=l,Ie=i,Qn=ht(l.firstChild),yt=!1,h=!0):h=!1),h||Ua(i)),wo(i),h=i.type,g=i.pendingProps,y=a!==null?a.memoizedProps:null,l=g.children,ad(h,g)?l=null:y!==null&&ad(h,y)&&(i.flags|=32),i.memoizedState!==null&&(h=th(a,i,TK,null,null,u),kr._currentValue=h),es(a,i),ye(a,i,l,u),i.child;case 6:return a===null&&En&&((a=u=Qn)&&(u=oR(u,i.pendingProps,yt),u!==null?(i.stateNode=u,Ie=i,Qn=null,a=!0):a=!1),a||Ua(i)),null;case 13:return nv(a,i,u);case 4:return Kn(i,i.stateNode.containerInfo),l=i.pendingProps,a===null?i.child=_i(i,null,l,u):ye(a,i,l,u),i.child;case 11:return Vy(a,i,i.type,i.pendingProps,u);case 7:return ye(a,i,i.pendingProps,u),i.child;case 8:return ye(a,i,i.pendingProps.children,u),i.child;case 12:return ye(a,i,i.pendingProps.children,u),i.child;case 10:return l=i.pendingProps,ua(i,i.type,l.value),ye(a,i,l.children,u),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ya(i),h=De(h),l=l(h),i.flags|=1,ye(a,i,l,u),i.child;case 14:return Yy(a,i,i.type,i.pendingProps,u);case 15:return Wy(a,i,i.type,i.pendingProps,u);case 19:return tv(a,i,u);case 31:return l=i.pendingProps,u=i.mode,l={mode:l.mode,children:l.children},a===null?(u=ts(l,u),u.ref=i.ref,i.child=u,u.return=i,i=u):(u=Nt(a.child,l),u.ref=i.ref,i.child=u,u.return=i,i=u),i;case 22:return Zy(a,i,u);case 24:return Ya(i),l=De(he),a===null?(h=Yc(),h===null&&(h=Fn,g=Uc(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=u),h=g),i.memoizedState={parent:l,cache:h},Zc(i),ua(i,he,h)):((a.lanes&u)!==0&&(Jc(a,i),qo(i,null,null,u),Xo()),h=a.memoizedState,g=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ua(i,he,l)):(l=g.cache,ua(i,he,l),l!==h.cache&&Fc(i,[he],u,!0))),ye(a,i,i.pendingProps.children,u),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function $t(a){a.flags|=4}function iv(a,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!dk(i)){if(i=at.current,i!==null&&((Rn&4194048)===Rn?vt!==null:(Rn&62914560)!==Rn&&(Rn&536870912)===0||i!==vt))throw Zo=Wc,jp;a.flags|=8192}}function as(a,i){i!==null&&(a.flags|=4),a.flags&16384&&(i=a.tag!==22?HS():536870912,a.lanes|=i,Fi|=i)}function or(a,i){if(!En)switch(a.tailMode){case"hidden":i=a.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?a.tail=null:u.sibling=null;break;case"collapsed":u=a.tail;for(var l=null;u!==null;)u.alternate!==null&&(l=u),u=u.sibling;l===null?i||a.tail===null?a.tail=null:a.tail.sibling=null:l.sibling=null}}function Zn(a){var i=a.alternate!==null&&a.alternate.child===a.child,u=0,l=0;if(i)for(var h=a.child;h!==null;)u|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=a,h=h.sibling;else for(h=a.child;h!==null;)u|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=a,h=h.sibling;return a.subtreeFlags|=l,a.childLanes=u,i}function RK(a,i,u){var l=i.pendingProps;switch(_c(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(i),null;case 1:return Zn(i),null;case 3:return u=i.stateNode,l=null,a!==null&&(l=a.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Lt(he),Le(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(a===null||a.child===null)&&(zo(i)?$t(i):a===null||a.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hp())),Zn(i),null;case 26:return u=i.memoizedState,a===null?($t(i),u!==null?(Zn(i),iv(i,u)):(Zn(i),i.flags&=-16777217)):u?u!==a.memoizedState?($t(i),Zn(i),iv(i,u)):(Zn(i),i.flags&=-16777217):(a.memoizedProps!==l&&$t(i),Zn(i),i.flags&=-16777217),null;case 27:Na(i),u=un.current;var h=i.type;if(a!==null&&i.stateNode!=null)a.memoizedProps!==l&&$t(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zn(i),null}a=on.current,zo(i)?Ep(i):(a=ik(h,l,u),i.stateNode=a,$t(i))}return Zn(i),null;case 5:if(Na(i),u=i.type,a!==null&&i.stateNode!=null)a.memoizedProps!==l&&$t(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zn(i),null}if(a=on.current,zo(i))Ep(i);else{switch(h=Ss(un.current),a){case 1:a=h.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:a=h.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":a=h.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":a=h.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":a=h.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?h.createElement(u,{is:l.is}):h.createElement(u)}}a[Ae]=i,a[Be]=l;n:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)a.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break n;for(;h.sibling===null;){if(h.return===null||h.return===i)break n;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=a;n:switch(ke(a,u,l),u){case"button":case"input":case"select":case"textarea":a=!!l.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&$t(i)}}return Zn(i),i.flags&=-16777217,null;case 6:if(a&&i.stateNode!=null)a.memoizedProps!==l&&$t(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(a=un.current,zo(i)){if(a=i.stateNode,u=i.memoizedProps,l=null,h=Ie,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}a[Ae]=i,a=!!(a.nodeValue===u||l!==null&&l.suppressHydrationWarning===!0||Xv(a.nodeValue,u)),a||Ua(i)}else a=Ss(a).createTextNode(l),a[Ae]=i,i.stateNode=a}return Zn(i),null;case 13:if(l=i.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(h=zo(i),l!==null&&l.dehydrated!==null){if(a===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Ae]=i}else $o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zn(i),h=!1}else h=Hp(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(jt(i),i):(jt(i),null)}if(jt(i),(i.flags&128)!==0)return i.lanes=u,i;if(u=l!==null,a=a!==null&&a.memoizedState!==null,u){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var g=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==h&&(l.flags|=2048)}return u!==a&&u&&(i.child.flags|=8192),as(i,i.updateQueue),Zn(i),null;case 4:return Le(),a===null&&qh(i.stateNode.containerInfo),Zn(i),null;case 10:return Lt(i.type),Zn(i),null;case 19:if(X(de),h=i.memoizedState,h===null)return Zn(i),null;if(l=(i.flags&128)!==0,g=h.rendering,g===null)if(l)or(h,!1);else{if(ne!==0||a!==null&&(a.flags&128)!==0)for(a=i.child;a!==null;){if(g=qu(a),g!==null){for(i.flags|=128,or(h,!1),a=g.updateQueue,i.updateQueue=a,as(i,a),i.subtreeFlags=0,a=u,u=i.child;u!==null;)Bp(u,a),u=u.sibling;return q(de,de.current&1|2),i.child}a=a.sibling}h.tail!==null&&pt()>rs&&(i.flags|=128,l=!0,or(h,!1),i.lanes=4194304)}else{if(!l)if(a=qu(g),a!==null){if(i.flags|=128,l=!0,a=a.updateQueue,i.updateQueue=a,as(i,a),or(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!En)return Zn(i),null}else 2*pt()-h.renderingStartTime>rs&&u!==536870912&&(i.flags|=128,l=!0,or(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(a=h.last,a!==null?a.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=pt(),i.sibling=null,a=de.current,q(de,l?a&1|2:a&1),i):(Zn(i),null);case 22:case 23:return jt(i),nh(),l=i.memoizedState!==null,a!==null?a.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(u&536870912)!==0&&(i.flags&128)===0&&(Zn(i),i.subtreeFlags&6&&(i.flags|=8192)):Zn(i),u=i.updateQueue,u!==null&&as(i,u.retryQueue),u=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==u&&(i.flags|=2048),a!==null&&X(Wa),null;case 24:return u=null,a!==null&&(u=a.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Lt(he),Zn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function BK(a,i){switch(_c(i),i.tag){case 1:return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 3:return Lt(he),Le(),a=i.flags,(a&65536)!==0&&(a&128)===0?(i.flags=a&-65537|128,i):null;case 26:case 27:case 5:return Na(i),null;case 13:if(jt(i),a=i.memoizedState,a!==null&&a.dehydrated!==null){if(i.alternate===null)throw Error(r(340));$o()}return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 19:return X(de),null;case 4:return Le(),null;case 10:return Lt(i.type),null;case 22:case 23:return jt(i),nh(),a!==null&&X(Wa),a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 24:return Lt(he),null;case 25:return null;default:return null}}function ov(a,i){switch(_c(i),i.tag){case 3:Lt(he),Le();break;case 26:case 27:case 5:Na(i);break;case 4:Le();break;case 13:jt(i);break;case 19:X(de);break;case 10:Lt(i.type);break;case 22:case 23:jt(i),nh(),a!==null&&X(Wa);break;case 24:Lt(he)}}function rr(a,i){try{var u=i.updateQueue,l=u!==null?u.lastEffect:null;if(l!==null){var h=l.next;u=h;do{if((u.tag&a)===a){l=void 0;var g=u.create,y=u.inst;l=g(),y.destroy=l}u=u.next}while(u!==h)}}catch(b){$n(i,i.return,b)}}function fa(a,i,u){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var g=h.next;l=g;do{if((l.tag&a)===a){var y=l.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,h=i;var K=u,G=b;try{G()}catch(F){$n(h,K,F)}}}l=l.next}while(l!==g)}}catch(F){$n(i,i.return,F)}}function rv(a){var i=a.updateQueue;if(i!==null){var u=a.stateNode;try{Yp(i,u)}catch(l){$n(a,a.return,l)}}}function uv(a,i,u){u.props=Ja(a.type,a.memoizedProps),u.state=a.memoizedState;try{u.componentWillUnmount()}catch(l){$n(a,i,l)}}function ur(a,i){try{var u=a.ref;if(u!==null){switch(a.tag){case 26:case 27:case 5:var l=a.stateNode;break;case 30:l=a.stateNode;break;default:l=a.stateNode}typeof u=="function"?a.refCleanup=u(l):u.current=l}}catch(h){$n(a,i,h)}}function kt(a,i){var u=a.ref,l=a.refCleanup;if(u!==null)if(typeof l=="function")try{l()}catch(h){$n(a,i,h)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(h){$n(a,i,h)}else u.current=null}function sv(a){var i=a.type,u=a.memoizedProps,l=a.stateNode;try{n:switch(i){case"button":case"input":case"select":case"textarea":u.autoFocus&&l.focus();break n;case"img":u.src?l.src=u.src:u.srcSet&&(l.srcset=u.srcSet)}}catch(h){$n(a,a.return,h)}}function Ch(a,i,u){try{var l=a.stateNode;QK(l,a.type,u,i),l[Be]=i}catch(h){$n(a,a.return,h)}}function lv(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Ta(a.type)||a.tag===4}function Ih(a){n:for(;;){for(;a.sibling===null;){if(a.return===null||lv(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Ta(a.type)||a.flags&2||a.child===null||a.tag===4)continue n;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Kh(a,i,u){var l=a.tag;if(l===5||l===6)a=a.stateNode,i?(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u).insertBefore(a,i):(i=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,i.appendChild(a),u=u._reactRootContainer,u!=null||i.onclick!==null||(i.onclick=gs));else if(l!==4&&(l===27&&Ta(a.type)&&(u=a.stateNode,i=null),a=a.child,a!==null))for(Kh(a,i,u),a=a.sibling;a!==null;)Kh(a,i,u),a=a.sibling}function is(a,i,u){var l=a.tag;if(l===5||l===6)a=a.stateNode,i?u.insertBefore(a,i):u.appendChild(a);else if(l!==4&&(l===27&&Ta(a.type)&&(u=a.stateNode),a=a.child,a!==null))for(is(a,i,u),a=a.sibling;a!==null;)is(a,i,u),a=a.sibling}function cv(a){var i=a.stateNode,u=a.memoizedProps;try{for(var l=a.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ke(i,l,u),i[Ae]=a,i[Be]=u}catch(g){$n(a,a.return,g)}}var Ft=!1,oe=!1,Rh=!1,hv=typeof WeakSet=="function"?WeakSet:Set,Se=null;function PK(a,i){if(a=a.containerInfo,ed=Ts,a=Tp(a),Ic(a)){if("selectionStart"in a)var u={start:a.selectionStart,end:a.selectionEnd};else n:{u=(u=a.ownerDocument)&&u.defaultView||window;var l=u.getSelection&&u.getSelection();if(l&&l.rangeCount!==0){u=l.anchorNode;var h=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{u.nodeType,g.nodeType}catch{u=null;break n}var y=0,b=-1,K=-1,G=0,F=0,Y=a,x=null;e:for(;;){for(var _;Y!==u||h!==0&&Y.nodeType!==3||(b=y+h),Y!==g||l!==0&&Y.nodeType!==3||(K=y+l),Y.nodeType===3&&(y+=Y.nodeValue.length),(_=Y.firstChild)!==null;)x=Y,Y=_;for(;;){if(Y===a)break e;if(x===u&&++G===h&&(b=y),x===g&&++F===l&&(K=y),(_=Y.nextSibling)!==null)break;Y=x,x=Y.parentNode}Y=_}u=b===-1||K===-1?null:{start:b,end:K}}else u=null}u=u||{start:0,end:0}}else u=null;for(td={focusedElem:a,selectionRange:u},Ts=!1,Se=i;Se!==null;)if(i=Se,a=i.child,(i.subtreeFlags&1024)!==0&&a!==null)a.return=i,Se=a;else for(;Se!==null;){switch(i=Se,g=i.alternate,a=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&g!==null){a=void 0,u=i,h=g.memoizedProps,g=g.memoizedState,l=u.stateNode;try{var Sn=Ja(u.type,h,u.elementType===u.type);a=l.getSnapshotBeforeUpdate(Sn,g),l.__reactInternalSnapshotBeforeUpdate=a}catch(hn){$n(u,u.return,hn)}}break;case 3:if((a&1024)!==0){if(a=i.stateNode.containerInfo,u=a.nodeType,u===9)od(a);else if(u===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":od(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(r(163))}if(a=i.sibling,a!==null){a.return=i.return,Se=a;break}Se=i.return}}function dv(a,i,u){var l=u.flags;switch(u.tag){case 0:case 11:case 15:ga(a,u),l&4&&rr(5,u);break;case 1:if(ga(a,u),l&4)if(a=u.stateNode,i===null)try{a.componentDidMount()}catch(y){$n(u,u.return,y)}else{var h=Ja(u.type,i.memoizedProps);i=i.memoizedState;try{a.componentDidUpdate(h,i,a.__reactInternalSnapshotBeforeUpdate)}catch(y){$n(u,u.return,y)}}l&64&&rv(u),l&512&&ur(u,u.return);break;case 3:if(ga(a,u),l&64&&(a=u.updateQueue,a!==null)){if(i=null,u.child!==null)switch(u.child.tag){case 27:case 5:i=u.child.stateNode;break;case 1:i=u.child.stateNode}try{Yp(a,i)}catch(y){$n(u,u.return,y)}}break;case 27:i===null&&l&4&&cv(u);case 26:case 5:ga(a,u),i===null&&l&4&&sv(u),l&512&&ur(u,u.return);break;case 12:ga(a,u);break;case 13:ga(a,u),l&4&&gv(a,u),l&64&&(a=u.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(u=zK.bind(null,u),rR(a,u))));break;case 22:if(l=u.memoizedState!==null||Ft,!l){i=i!==null&&i.memoizedState!==null||oe,h=Ft;var g=oe;Ft=l,(oe=i)&&!g?Sa(a,u,(u.subtreeFlags&8772)!==0):ga(a,u),Ft=h,oe=g}break;case 30:break;default:ga(a,u)}}function mv(a){var i=a.alternate;i!==null&&(a.alternate=null,mv(i)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(i=a.stateNode,i!==null&&cc(i)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var Yn=null,Ne=!1;function Ut(a,i,u){for(u=u.child;u!==null;)fv(a,i,u),u=u.sibling}function fv(a,i,u){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(Co,u)}catch{}switch(u.tag){case 26:oe||kt(u,i),Ut(a,i,u),u.memoizedState?u.memoizedState.count--:u.stateNode&&(u=u.stateNode,u.parentNode.removeChild(u));break;case 27:oe||kt(u,i);var l=Yn,h=Ne;Ta(u.type)&&(Yn=u.stateNode,Ne=!1),Ut(a,i,u),Sr(u.stateNode),Yn=l,Ne=h;break;case 5:oe||kt(u,i);case 6:if(l=Yn,h=Ne,Yn=null,Ut(a,i,u),Yn=l,Ne=h,Yn!==null)if(Ne)try{(Yn.nodeType===9?Yn.body:Yn.nodeName==="HTML"?Yn.ownerDocument.body:Yn).removeChild(u.stateNode)}catch(g){$n(u,i,g)}else try{Yn.removeChild(u.stateNode)}catch(g){$n(u,i,g)}break;case 18:Yn!==null&&(Ne?(a=Yn,tk(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,u.stateNode),Ar(a)):tk(Yn,u.stateNode));break;case 4:l=Yn,h=Ne,Yn=u.stateNode.containerInfo,Ne=!0,Ut(a,i,u),Yn=l,Ne=h;break;case 0:case 11:case 14:case 15:oe||fa(2,u,i),oe||fa(4,u,i),Ut(a,i,u);break;case 1:oe||(kt(u,i),l=u.stateNode,typeof l.componentWillUnmount=="function"&&uv(u,i,l)),Ut(a,i,u);break;case 21:Ut(a,i,u);break;case 22:oe=(l=oe)||u.memoizedState!==null,Ut(a,i,u),oe=l;break;default:Ut(a,i,u)}}function gv(a,i){if(i.memoizedState===null&&(a=i.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Ar(a)}catch(u){$n(i,i.return,u)}}function EK(a){switch(a.tag){case 13:case 19:var i=a.stateNode;return i===null&&(i=a.stateNode=new hv),i;case 22:return a=a.stateNode,i=a._retryCache,i===null&&(i=a._retryCache=new hv),i;default:throw Error(r(435,a.tag))}}function Bh(a,i){var u=EK(a);i.forEach(function(l){var h=$K.bind(null,a,l);u.has(l)||(u.add(l),l.then(h,h))})}function Fe(a,i){var u=i.deletions;if(u!==null)for(var l=0;l<u.length;l++){var h=u[l],g=a,y=i,b=y;n:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Yn=b.stateNode,Ne=!1;break n}break;case 5:Yn=b.stateNode,Ne=!1;break n;case 3:case 4:Yn=b.stateNode.containerInfo,Ne=!0;break n}b=b.return}if(Yn===null)throw Error(r(160));fv(g,y,h),Yn=null,Ne=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Sv(i,a),i=i.sibling}var ct=null;function Sv(a,i){var u=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Fe(i,a),Ue(a),l&4&&(fa(3,a,a.return),rr(3,a),fa(5,a,a.return));break;case 1:Fe(i,a),Ue(a),l&512&&(oe||u===null||kt(u,u.return)),l&64&&Ft&&(a=a.updateQueue,a!==null&&(l=a.callbacks,l!==null&&(u=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=u===null?l:u.concat(l))));break;case 26:var h=ct;if(Fe(i,a),Ue(a),l&512&&(oe||u===null||kt(u,u.return)),l&4){var g=u!==null?u.memoizedState:null;if(l=a.memoizedState,u===null)if(l===null)if(a.stateNode===null){n:{l=a.type,u=a.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":g=h.getElementsByTagName("title")[0],(!g||g[Ro]||g[Ae]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(l),h.head.insertBefore(g,h.querySelector("head > title"))),ke(g,l,u),g[Ae]=a,fe(g),l=g;break n;case"link":var y=ck("link","href",h).get(l+(u.href||""));if(y){for(var b=0;b<y.length;b++)if(g=y[b],g.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&g.getAttribute("rel")===(u.rel==null?null:u.rel)&&g.getAttribute("title")===(u.title==null?null:u.title)&&g.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){y.splice(b,1);break e}}g=h.createElement(l),ke(g,l,u),h.head.appendChild(g);break;case"meta":if(y=ck("meta","content",h).get(l+(u.content||""))){for(b=0;b<y.length;b++)if(g=y[b],g.getAttribute("content")===(u.content==null?null:""+u.content)&&g.getAttribute("name")===(u.name==null?null:u.name)&&g.getAttribute("property")===(u.property==null?null:u.property)&&g.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&g.getAttribute("charset")===(u.charSet==null?null:u.charSet)){y.splice(b,1);break e}}g=h.createElement(l),ke(g,l,u),h.head.appendChild(g);break;default:throw Error(r(468,l))}g[Ae]=a,fe(g),l=g}a.stateNode=l}else hk(h,a.type,a.stateNode);else a.stateNode=lk(h,l,a.memoizedProps);else g!==l?(g===null?u.stateNode!==null&&(u=u.stateNode,u.parentNode.removeChild(u)):g.count--,l===null?hk(h,a.type,a.stateNode):lk(h,l,a.memoizedProps)):l===null&&a.stateNode!==null&&Ch(a,a.memoizedProps,u.memoizedProps)}break;case 27:Fe(i,a),Ue(a),l&512&&(oe||u===null||kt(u,u.return)),u!==null&&l&4&&Ch(a,a.memoizedProps,u.memoizedProps);break;case 5:if(Fe(i,a),Ue(a),l&512&&(oe||u===null||kt(u,u.return)),a.flags&32){h=a.stateNode;try{Ti(h,"")}catch(_){$n(a,a.return,_)}}l&4&&a.stateNode!=null&&(h=a.memoizedProps,Ch(a,h,u!==null?u.memoizedProps:h)),l&1024&&(Rh=!0);break;case 6:if(Fe(i,a),Ue(a),l&4){if(a.stateNode===null)throw Error(r(162));l=a.memoizedProps,u=a.stateNode;try{u.nodeValue=l}catch(_){$n(a,a.return,_)}}break;case 3:if(vs=null,h=ct,ct=ps(i.containerInfo),Fe(i,a),ct=h,Ue(a),l&4&&u!==null&&u.memoizedState.isDehydrated)try{Ar(i.containerInfo)}catch(_){$n(a,a.return,_)}Rh&&(Rh=!1,pv(a));break;case 4:l=ct,ct=ps(a.stateNode.containerInfo),Fe(i,a),Ue(a),ct=l;break;case 12:Fe(i,a),Ue(a);break;case 13:Fe(i,a),Ue(a),a.child.flags&8192&&a.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(xh=pt()),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,Bh(a,l)));break;case 22:h=a.memoizedState!==null;var K=u!==null&&u.memoizedState!==null,G=Ft,F=oe;if(Ft=G||h,oe=F||K,Fe(i,a),oe=F,Ft=G,Ue(a),l&8192)n:for(i=a.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(u===null||K||Ft||oe||Xa(a)),u=null,i=a;;){if(i.tag===5||i.tag===26){if(u===null){K=u=i;try{if(g=K.stateNode,h)y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=K.stateNode;var Y=K.memoizedProps.style,x=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(_){$n(K,K.return,_)}}}else if(i.tag===6){if(u===null){K=i;try{K.stateNode.nodeValue=h?"":K.memoizedProps}catch(_){$n(K,K.return,_)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===a)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break n;for(;i.sibling===null;){if(i.return===null||i.return===a)break n;u===i&&(u=null),i=i.return}u===i&&(u=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=a.updateQueue,l!==null&&(u=l.retryQueue,u!==null&&(l.retryQueue=null,Bh(a,u))));break;case 19:Fe(i,a),Ue(a),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,Bh(a,l)));break;case 30:break;case 21:break;default:Fe(i,a),Ue(a)}}function Ue(a){var i=a.flags;if(i&2){try{for(var u,l=a.return;l!==null;){if(lv(l)){u=l;break}l=l.return}if(u==null)throw Error(r(160));switch(u.tag){case 27:var h=u.stateNode,g=Ih(a);is(a,g,h);break;case 5:var y=u.stateNode;u.flags&32&&(Ti(y,""),u.flags&=-33);var b=Ih(a);is(a,b,y);break;case 3:case 4:var K=u.stateNode.containerInfo,G=Ih(a);Kh(a,G,K);break;default:throw Error(r(161))}}catch(F){$n(a,a.return,F)}a.flags&=-3}i&4096&&(a.flags&=-4097)}function pv(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var i=a;pv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),a=a.sibling}}function ga(a,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)dv(a,i.alternate,i),i=i.sibling}function Xa(a){for(a=a.child;a!==null;){var i=a;switch(i.tag){case 0:case 11:case 14:case 15:fa(4,i,i.return),Xa(i);break;case 1:kt(i,i.return);var u=i.stateNode;typeof u.componentWillUnmount=="function"&&uv(i,i.return,u),Xa(i);break;case 27:Sr(i.stateNode);case 26:case 5:kt(i,i.return),Xa(i);break;case 22:i.memoizedState===null&&Xa(i);break;case 30:Xa(i);break;default:Xa(i)}a=a.sibling}}function Sa(a,i,u){for(u=u&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=a,g=i,y=g.flags;switch(g.tag){case 0:case 11:case 15:Sa(h,g,u),rr(4,g);break;case 1:if(Sa(h,g,u),l=g,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(G){$n(l,l.return,G)}if(l=g,h=l.updateQueue,h!==null){var b=l.stateNode;try{var K=h.shared.hiddenCallbacks;if(K!==null)for(h.shared.hiddenCallbacks=null,h=0;h<K.length;h++)Vp(K[h],b)}catch(G){$n(l,l.return,G)}}u&&y&64&&rv(g),ur(g,g.return);break;case 27:cv(g);case 26:case 5:Sa(h,g,u),u&&l===null&&y&4&&sv(g),ur(g,g.return);break;case 12:Sa(h,g,u);break;case 13:Sa(h,g,u),u&&y&4&&gv(h,g);break;case 22:g.memoizedState===null&&Sa(h,g,u),ur(g,g.return);break;case 30:break;default:Sa(h,g,u)}i=i.sibling}}function Ph(a,i){var u=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==u&&(a!=null&&a.refCount++,u!=null&&Vo(u))}function Eh(a,i){a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&Vo(a))}function bt(a,i,u,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yv(a,i,u,l),i=i.sibling}function yv(a,i,u,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:bt(a,i,u,l),h&2048&&rr(9,i);break;case 1:bt(a,i,u,l);break;case 3:bt(a,i,u,l),h&2048&&(a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&Vo(a)));break;case 12:if(h&2048){bt(a,i,u,l),a=i.stateNode;try{var g=i.memoizedProps,y=g.id,b=g.onPostCommit;typeof b=="function"&&b(y,i.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(K){$n(i,i.return,K)}}else bt(a,i,u,l);break;case 13:bt(a,i,u,l);break;case 23:break;case 22:g=i.stateNode,y=i.alternate,i.memoizedState!==null?g._visibility&2?bt(a,i,u,l):sr(a,i):g._visibility&2?bt(a,i,u,l):(g._visibility|=2,ji(a,i,u,l,(i.subtreeFlags&10256)!==0)),h&2048&&Ph(y,i);break;case 24:bt(a,i,u,l),h&2048&&Eh(i.alternate,i);break;default:bt(a,i,u,l)}}function ji(a,i,u,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=a,y=i,b=u,K=l,G=y.flags;switch(y.tag){case 0:case 11:case 15:ji(g,y,b,K,h),rr(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?ji(g,y,b,K,h):sr(g,y):(F._visibility|=2,ji(g,y,b,K,h)),h&&G&2048&&Ph(y.alternate,y);break;case 24:ji(g,y,b,K,h),h&&G&2048&&Eh(y.alternate,y);break;default:ji(g,y,b,K,h)}i=i.sibling}}function sr(a,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var u=a,l=i,h=l.flags;switch(l.tag){case 22:sr(u,l),h&2048&&Ph(l.alternate,l);break;case 24:sr(u,l),h&2048&&Eh(l.alternate,l);break;default:sr(u,l)}i=i.sibling}}var lr=8192;function zi(a){if(a.subtreeFlags&lr)for(a=a.child;a!==null;)vv(a),a=a.sibling}function vv(a){switch(a.tag){case 26:zi(a),a.flags&lr&&a.memoizedState!==null&&vR(ct,a.memoizedState,a.memoizedProps);break;case 5:zi(a);break;case 3:case 4:var i=ct;ct=ps(a.stateNode.containerInfo),zi(a),ct=i;break;case 22:a.memoizedState===null&&(i=a.alternate,i!==null&&i.memoizedState!==null?(i=lr,lr=16777216,zi(a),lr=i):zi(a));break;default:zi(a)}}function kv(a){var i=a.alternate;if(i!==null&&(a=i.child,a!==null)){i.child=null;do i=a.sibling,a.sibling=null,a=i;while(a!==null)}}function cr(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var u=0;u<i.length;u++){var l=i[u];Se=l,Tv(l,a)}kv(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)bv(a),a=a.sibling}function bv(a){switch(a.tag){case 0:case 11:case 15:cr(a),a.flags&2048&&fa(9,a,a.return);break;case 3:cr(a);break;case 12:cr(a);break;case 22:var i=a.stateNode;a.memoizedState!==null&&i._visibility&2&&(a.return===null||a.return.tag!==13)?(i._visibility&=-3,os(a)):cr(a);break;default:cr(a)}}function os(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var u=0;u<i.length;u++){var l=i[u];Se=l,Tv(l,a)}kv(a)}for(a=a.child;a!==null;){switch(i=a,i.tag){case 0:case 11:case 15:fa(8,i,i.return),os(i);break;case 22:u=i.stateNode,u._visibility&2&&(u._visibility&=-3,os(i));break;default:os(i)}a=a.sibling}}function Tv(a,i){for(;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:fa(8,u,i);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var l=u.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vo(u.memoizedState.cache)}if(l=u.child,l!==null)l.return=u,Se=l;else n:for(u=a;Se!==null;){l=Se;var h=l.sibling,g=l.return;if(mv(l),l===u){Se=null;break n}if(h!==null){h.return=g,Se=h;break n}Se=g}}}var NK={getCacheForType:function(a){var i=De(he),u=i.data.get(a);return u===void 0&&(u=a(),i.data.set(a,u)),u}},HK=typeof WeakMap=="function"?WeakMap:Map,xn=0,Fn=null,On=null,Rn=0,Ln=0,Ve=null,pa=!1,$i=!1,Nh=!1,Vt=0,ne=0,ya=0,qa=0,Hh=0,it=0,Fi=0,hr=null,He=null,Gh=!1,xh=0,rs=1/0,us=null,va=null,ve=0,ka=null,Ui=null,Vi=0,Lh=0,_h=null,Mv=null,dr=0,jh=null;function Ye(){if((xn&2)!==0&&Rn!==0)return Rn&-Rn;if(L.T!==null){var a=Pi;return a!==0?a:Wh()}return LS()}function Av(){it===0&&(it=(Rn&536870912)===0||En?NS():536870912);var a=at.current;return a!==null&&(a.flags|=32),it}function We(a,i,u){(a===Fn&&(Ln===2||Ln===9)||a.cancelPendingCommit!==null)&&(Yi(a,0),ba(a,Rn,it,!1)),Ko(a,u),((xn&2)===0||a!==Fn)&&(a===Fn&&((xn&2)===0&&(qa|=u),ne===4&&ba(a,Rn,it,!1)),Tt(a))}function Dv(a,i,u){if((xn&6)!==0)throw Error(r(327));var l=!u&&(i&124)===0&&(i&a.expiredLanes)===0||Io(a,i),h=l?LK(a,i):Fh(a,i,!0),g=l;do{if(h===0){$i&&!l&&ba(a,i,0,!1);break}else{if(u=a.current.alternate,g&&!GK(u)){h=Fh(a,i,!1),g=!1;continue}if(h===2){if(g=i,a.errorRecoveryDisabledLanes&g)var y=0;else y=a.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;n:{var b=a;h=hr;var K=b.current.memoizedState.isDehydrated;if(K&&(Yi(b,y).flags|=256),y=Fh(b,y,!1),y!==2){if(Nh&&!K){b.errorRecoveryDisabledLanes|=g,qa|=g,h=4;break n}g=He,He=h,g!==null&&(He===null?He=g:He.push.apply(He,g))}h=y}if(g=!1,h!==2)continue}}if(h===1){Yi(a,0),ba(a,i,0,!0);break}n:{switch(l=a,g=h,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ba(l,i,it,!pa);break n;case 2:He=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=xh+300-pt(),10<h)){if(ba(l,i,it,!pa),yu(l,0,!0)!==0)break n;l.timeoutHandle=nk(wv.bind(null,l,u,He,us,Gh,i,it,qa,Fi,pa,g,2,-0,0),h);break n}wv(l,u,He,us,Gh,i,it,qa,Fi,pa,g,0,-0,0)}}break}while(!0);Tt(a)}function wv(a,i,u,l,h,g,y,b,K,G,F,Y,x,_){if(a.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(vr={stylesheets:null,count:0,unsuspend:yR},vv(i),Y=kR(),Y!==null)){a.cancelPendingCommit=Y(Pv.bind(null,a,i,g,u,l,h,y,b,K,F,1,x,_)),ba(a,g,y,!G);return}Pv(a,i,g,u,l,h,y,b,K)}function GK(a){for(var i=a;;){var u=i.tag;if((u===0||u===11||u===15)&&i.flags&16384&&(u=i.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var l=0;l<u.length;l++){var h=u[l],g=h.getSnapshot;h=h.value;try{if(!ze(g(),h))return!1}catch{return!1}}if(u=i.child,i.subtreeFlags&16384&&u!==null)u.return=i,i=u;else{if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ba(a,i,u,l){i&=~Hh,i&=~qa,a.suspendedLanes|=i,a.pingedLanes&=~i,l&&(a.warmLanes|=i),l=a.expirationTimes;for(var h=i;0<h;){var g=31-je(h),y=1<<g;l[g]=-1,h&=~y}u!==0&&GS(a,u,i)}function ss(){return(xn&6)===0?(mr(0),!1):!0}function zh(){if(On!==null){if(Ln===0)var a=On.return;else a=On,xt=Va=null,oh(a),Li=null,ar=0,a=On;for(;a!==null;)ov(a.alternate,a),a=a.return;On=null}}function Yi(a,i){var u=a.timeoutHandle;u!==-1&&(a.timeoutHandle=-1,eR(u)),u=a.cancelPendingCommit,u!==null&&(a.cancelPendingCommit=null,u()),zh(),Fn=a,On=u=Nt(a.current,null),Rn=i,Ln=0,Ve=null,pa=!1,$i=Io(a,i),Nh=!1,Fi=it=Hh=qa=ya=ne=0,He=hr=null,Gh=!1,(i&8)!==0&&(i|=i&32);var l=a.entangledLanes;if(l!==0)for(a=a.entanglements,l&=i;0<l;){var h=31-je(l),g=1<<h;i|=a[h],l&=~g}return Vt=i,Ku(),u}function Ov(a,i){An=null,L.H=Zu,i===Wo||i===Lu?(i=Fp(),Ln=3):i===jp?(i=Fp(),Ln=4):Ln=i===Uy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ve=i,On===null&&(ne=1,ns(a,Qe(i,a.current)))}function Cv(){var a=L.H;return L.H=Zu,a===null?Zu:a}function Iv(){var a=L.A;return L.A=NK,a}function $h(){ne=4,pa||(Rn&4194048)!==Rn&&at.current!==null||($i=!0),(ya&134217727)===0&&(qa&134217727)===0||Fn===null||ba(Fn,Rn,it,!1)}function Fh(a,i,u){var l=xn;xn|=2;var h=Cv(),g=Iv();(Fn!==a||Rn!==i)&&(us=null,Yi(a,i)),i=!1;var y=ne;n:do try{if(Ln!==0&&On!==null){var b=On,K=Ve;switch(Ln){case 8:zh(),y=6;break n;case 3:case 2:case 9:case 6:at.current===null&&(i=!0);var G=Ln;if(Ln=0,Ve=null,Wi(a,b,K,G),u&&$i){y=0;break n}break;default:G=Ln,Ln=0,Ve=null,Wi(a,b,K,G)}}xK(),y=ne;break}catch(F){Ov(a,F)}while(!0);return i&&a.shellSuspendCounter++,xt=Va=null,xn=l,L.H=h,L.A=g,On===null&&(Fn=null,Rn=0,Ku()),y}function xK(){for(;On!==null;)Kv(On)}function LK(a,i){var u=xn;xn|=2;var l=Cv(),h=Iv();Fn!==a||Rn!==i?(us=null,rs=pt()+500,Yi(a,i)):$i=Io(a,i);n:do try{if(Ln!==0&&On!==null){i=On;var g=Ve;e:switch(Ln){case 1:Ln=0,Ve=null,Wi(a,i,g,1);break;case 2:case 9:if(zp(g)){Ln=0,Ve=null,Rv(i);break}i=function(){Ln!==2&&Ln!==9||Fn!==a||(Ln=7),Tt(a)},g.then(i,i);break n;case 3:Ln=7;break n;case 4:Ln=5;break n;case 7:zp(g)?(Ln=0,Ve=null,Rv(i)):(Ln=0,Ve=null,Wi(a,i,g,7));break;case 5:var y=null;switch(On.tag){case 26:y=On.memoizedState;case 5:case 27:var b=On;if(!y||dk(y)){Ln=0,Ve=null;var K=b.sibling;if(K!==null)On=K;else{var G=b.return;G!==null?(On=G,ls(G)):On=null}break e}}Ln=0,Ve=null,Wi(a,i,g,5);break;case 6:Ln=0,Ve=null,Wi(a,i,g,6);break;case 8:zh(),ne=6;break n;default:throw Error(r(462))}}_K();break}catch(F){Ov(a,F)}while(!0);return xt=Va=null,L.H=l,L.A=h,xn=u,On!==null?0:(Fn=null,Rn=0,Ku(),ne)}function _K(){for(;On!==null&&!oc();)Kv(On)}function Kv(a){var i=av(a.alternate,a,Vt);a.memoizedProps=a.pendingProps,i===null?ls(a):On=i}function Rv(a){var i=a,u=i.alternate;switch(i.tag){case 15:case 0:i=Xy(u,i,i.pendingProps,i.type,void 0,Rn);break;case 11:i=Xy(u,i,i.pendingProps,i.type.render,i.ref,Rn);break;case 5:oh(i);default:ov(u,i),i=On=Bp(i,Vt),i=av(u,i,Vt)}a.memoizedProps=a.pendingProps,i===null?ls(a):On=i}function Wi(a,i,u,l){xt=Va=null,oh(i),Li=null,ar=0;var h=i.return;try{if(IK(a,h,i,u,Rn)){ne=1,ns(a,Qe(u,a.current)),On=null;return}}catch(g){if(h!==null)throw On=h,g;ne=1,ns(a,Qe(u,a.current)),On=null;return}i.flags&32768?(En||l===1?a=!0:$i||(Rn&536870912)!==0?a=!1:(pa=a=!0,(l===2||l===9||l===3||l===6)&&(l=at.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bv(i,a)):ls(i)}function ls(a){var i=a;do{if((i.flags&32768)!==0){Bv(i,pa);return}a=i.return;var u=RK(i.alternate,i,Vt);if(u!==null){On=u;return}if(i=i.sibling,i!==null){On=i;return}On=i=a}while(i!==null);ne===0&&(ne=5)}function Bv(a,i){do{var u=BK(a.alternate,a);if(u!==null){u.flags&=32767,On=u;return}if(u=a.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!i&&(a=a.sibling,a!==null)){On=a;return}On=a=u}while(a!==null);ne=6,On=null}function Pv(a,i,u,l,h,g,y,b,K){a.cancelPendingCommit=null;do cs();while(ve!==0);if((xn&6)!==0)throw Error(r(327));if(i!==null){if(i===a.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=Ec,yI(a,u,g,y,b,K),a===Fn&&(On=Fn=null,Rn=0),Ui=i,ka=a,Vi=u,Lh=g,_h=h,Mv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,FK(gu,function(){return xv(),null})):(a.callbackNode=null,a.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,h=Z.p,Z.p=2,y=xn,xn|=4;try{PK(a,i,u)}finally{xn=y,Z.p=h,L.T=l}}ve=1,Ev(),Nv(),Hv()}}function Ev(){if(ve===1){ve=0;var a=ka,i=Ui,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=L.T,L.T=null;var l=Z.p;Z.p=2;var h=xn;xn|=4;try{Sv(i,a);var g=td,y=Tp(a.containerInfo),b=g.focusedElem,K=g.selectionRange;if(y!==b&&b&&b.ownerDocument&&bp(b.ownerDocument.documentElement,b)){if(K!==null&&Ic(b)){var G=K.start,F=K.end;if(F===void 0&&(F=G),"selectionStart"in b)b.selectionStart=G,b.selectionEnd=Math.min(F,b.value.length);else{var Y=b.ownerDocument||document,x=Y&&Y.defaultView||window;if(x.getSelection){var _=x.getSelection(),Sn=b.textContent.length,hn=Math.min(K.start,Sn),zn=K.end===void 0?hn:Math.min(K.end,Sn);!_.extend&&hn>zn&&(y=zn,zn=hn,hn=y);var E=kp(b,hn),B=kp(b,zn);if(E&&B&&(_.rangeCount!==1||_.anchorNode!==E.node||_.anchorOffset!==E.offset||_.focusNode!==B.node||_.focusOffset!==B.offset)){var N=Y.createRange();N.setStart(E.node,E.offset),_.removeAllRanges(),hn>zn?(_.addRange(N),_.extend(B.node,B.offset)):(N.setEnd(B.node,B.offset),_.addRange(N))}}}}for(Y=[],_=b;_=_.parentNode;)_.nodeType===1&&Y.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var V=Y[b];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Ts=!!ed,td=ed=null}finally{xn=h,Z.p=l,L.T=u}}a.current=i,ve=2}}function Nv(){if(ve===2){ve=0;var a=ka,i=Ui,u=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||u){u=L.T,L.T=null;var l=Z.p;Z.p=2;var h=xn;xn|=4;try{dv(a,i.alternate,i)}finally{xn=h,Z.p=l,L.T=u}}ve=3}}function Hv(){if(ve===4||ve===3){ve=0,lI();var a=ka,i=Ui,u=Vi,l=Mv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ve=5:(ve=0,Ui=ka=null,Gv(a,a.pendingLanes));var h=a.pendingLanes;if(h===0&&(va=null),sc(u),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(Co,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,h=Z.p,Z.p=2,L.T=null;try{for(var g=a.onRecoverableError,y=0;y<l.length;y++){var b=l[y];g(b.value,{componentStack:b.stack})}}finally{L.T=i,Z.p=h}}(Vi&3)!==0&&cs(),Tt(a),h=a.pendingLanes,(u&4194090)!==0&&(h&42)!==0?a===jh?dr++:(dr=0,jh=a):dr=0,mr(0)}}function Gv(a,i){(a.pooledCacheLanes&=i)===0&&(i=a.pooledCache,i!=null&&(a.pooledCache=null,Vo(i)))}function cs(a){return Ev(),Nv(),Hv(),xv()}function xv(){if(ve!==5)return!1;var a=ka,i=Lh;Lh=0;var u=sc(Vi),l=L.T,h=Z.p;try{Z.p=32>u?32:u,L.T=null,u=_h,_h=null;var g=ka,y=Vi;if(ve=0,Ui=ka=null,Vi=0,(xn&6)!==0)throw Error(r(331));var b=xn;if(xn|=4,bv(g.current),yv(g,g.current,y,u),xn=b,mr(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(Co,g)}catch{}return!0}finally{Z.p=h,L.T=l,Gv(a,i)}}function Lv(a,i,u){i=Qe(u,i),i=vh(a.stateNode,i,2),a=ca(a,i,2),a!==null&&(Ko(a,2),Tt(a))}function $n(a,i,u){if(a.tag===3)Lv(a,a,u);else for(;i!==null;){if(i.tag===3){Lv(i,a,u);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(va===null||!va.has(l))){a=Qe(u,a),u=$y(2),l=ca(i,u,2),l!==null&&(Fy(u,l,i,a),Ko(l,2),Tt(l));break}}i=i.return}}function Uh(a,i,u){var l=a.pingCache;if(l===null){l=a.pingCache=new HK;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(u)||(Nh=!0,h.add(u),a=jK.bind(null,a,i,u),i.then(a,a))}function jK(a,i,u){var l=a.pingCache;l!==null&&l.delete(i),a.pingedLanes|=a.suspendedLanes&u,a.warmLanes&=~u,Fn===a&&(Rn&u)===u&&(ne===4||ne===3&&(Rn&62914560)===Rn&&300>pt()-xh?(xn&2)===0&&Yi(a,0):Hh|=u,Fi===Rn&&(Fi=0)),Tt(a)}function _v(a,i){i===0&&(i=HS()),a=Ii(a,i),a!==null&&(Ko(a,i),Tt(a))}function zK(a){var i=a.memoizedState,u=0;i!==null&&(u=i.retryLane),_v(a,u)}function $K(a,i){var u=0;switch(a.tag){case 13:var l=a.stateNode,h=a.memoizedState;h!==null&&(u=h.retryLane);break;case 19:l=a.stateNode;break;case 22:l=a.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),_v(a,u)}function FK(a,i){return Oo(a,i)}var hs=null,Zi=null,Vh=!1,ds=!1,Yh=!1,Qa=0;function Tt(a){a!==Zi&&a.next===null&&(Zi===null?hs=Zi=a:Zi=Zi.next=a),ds=!0,Vh||(Vh=!0,VK())}function mr(a,i){if(!Yh&&ds){Yh=!0;do for(var u=!1,l=hs;l!==null;){if(a!==0){var h=l.pendingLanes;if(h===0)var g=0;else{var y=l.suspendedLanes,b=l.pingedLanes;g=(1<<31-je(42|a)+1)-1,g&=h&~(y&~b),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(u=!0,Fv(l,g))}else g=Rn,g=yu(l,l===Fn?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Io(l,g)||(u=!0,Fv(l,g));l=l.next}while(u);Yh=!1}}function UK(){jv()}function jv(){ds=Vh=!1;var a=0;Qa!==0&&(nR()&&(a=Qa),Qa=0);for(var i=pt(),u=null,l=hs;l!==null;){var h=l.next,g=zv(l,i);g===0?(l.next=null,u===null?hs=h:u.next=h,h===null&&(Zi=u)):(u=l,(a!==0||(g&3)!==0)&&(ds=!0)),l=h}mr(a)}function zv(a,i){for(var u=a.suspendedLanes,l=a.pingedLanes,h=a.expirationTimes,g=a.pendingLanes&-62914561;0<g;){var y=31-je(g),b=1<<y,K=h[y];K===-1?((b&u)===0||(b&l)!==0)&&(h[y]=pI(b,i)):K<=i&&(a.expiredLanes|=b),g&=~b}if(i=Fn,u=Rn,u=yu(a,a===i?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l=a.callbackNode,u===0||a===i&&(Ln===2||Ln===9)||a.cancelPendingCommit!==null)return l!==null&&l!==null&&fi(l),a.callbackNode=null,a.callbackPriority=0;if((u&3)===0||Io(a,u)){if(i=u&-u,i===a.callbackPriority)return i;switch(l!==null&&fi(l),sc(u)){case 2:case 8:u=PS;break;case 32:u=gu;break;case 268435456:u=ES;break;default:u=gu}return l=$v.bind(null,a),u=Oo(u,l),a.callbackPriority=i,a.callbackNode=u,i}return l!==null&&l!==null&&fi(l),a.callbackPriority=2,a.callbackNode=null,2}function $v(a,i){if(ve!==0&&ve!==5)return a.callbackNode=null,a.callbackPriority=0,null;var u=a.callbackNode;if(cs()&&a.callbackNode!==u)return null;var l=Rn;return l=yu(a,a===Fn?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l===0?null:(Dv(a,l,i),zv(a,pt()),a.callbackNode!=null&&a.callbackNode===u?$v.bind(null,a):null)}function Fv(a,i){if(cs())return null;Dv(a,i,!0)}function VK(){tR(function(){(xn&6)!==0?Oo(BS,UK):jv()})}function Wh(){return Qa===0&&(Qa=NS()),Qa}function Uv(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Mu(""+a)}function Vv(a,i){var u=i.ownerDocument.createElement("input");return u.name=i.name,u.value=i.value,a.id&&u.setAttribute("form",a.id),i.parentNode.insertBefore(u,i),a=new FormData(a),u.parentNode.removeChild(u),a}function YK(a,i,u,l,h){if(i==="submit"&&u&&u.stateNode===h){var g=Uv((h[Be]||null).action),y=l.submitter;y&&(i=(i=y[Be]||null)?Uv(i.formAction):y.getAttribute("formAction"),i!==null&&(g=i,y=null));var b=new Ou("action","action",null,l,h);a.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Qa!==0){var K=y?Vv(h,y):new FormData(h);fh(u,{pending:!0,data:K,method:h.method,action:g},null,K)}}else typeof g=="function"&&(b.preventDefault(),K=y?Vv(h,y):new FormData(h),fh(u,{pending:!0,data:K,method:h.method,action:g},g,K))},currentTarget:h}]})}}for(var Zh=0;Zh<Pc.length;Zh++){var Jh=Pc[Zh],WK=Jh.toLowerCase(),ZK=Jh[0].toUpperCase()+Jh.slice(1);lt(WK,"on"+ZK)}lt(Dp,"onAnimationEnd"),lt(wp,"onAnimationIteration"),lt(Op,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(dK,"onTransitionRun"),lt(mK,"onTransitionStart"),lt(fK,"onTransitionCancel"),lt(Cp,"onTransitionEnd"),vi("onMouseEnter",["mouseout","mouseover"]),vi("onMouseLeave",["mouseout","mouseover"]),vi("onPointerEnter",["pointerout","pointerover"]),vi("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JK=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fr));function Yv(a,i){i=(i&4)!==0;for(var u=0;u<a.length;u++){var l=a[u],h=l.event;l=l.listeners;n:{var g=void 0;if(i)for(var y=l.length-1;0<=y;y--){var b=l[y],K=b.instance,G=b.currentTarget;if(b=b.listener,K!==g&&h.isPropagationStopped())break n;g=b,h.currentTarget=G;try{g(h)}catch(F){Qu(F)}h.currentTarget=null,g=K}else for(y=0;y<l.length;y++){if(b=l[y],K=b.instance,G=b.currentTarget,b=b.listener,K!==g&&h.isPropagationStopped())break n;g=b,h.currentTarget=G;try{g(h)}catch(F){Qu(F)}h.currentTarget=null,g=K}}}}function Cn(a,i){var u=i[lc];u===void 0&&(u=i[lc]=new Set);var l=a+"__bubble";u.has(l)||(Wv(i,a,2,!1),u.add(l))}function Xh(a,i,u){var l=0;i&&(l|=4),Wv(u,a,l,i)}var ms="_reactListening"+Math.random().toString(36).slice(2);function qh(a){if(!a[ms]){a[ms]=!0,jS.forEach(function(u){u!=="selectionchange"&&(JK.has(u)||Xh(u,!1,a),Xh(u,!0,a))});var i=a.nodeType===9?a:a.ownerDocument;i===null||i[ms]||(i[ms]=!0,Xh("selectionchange",!1,i))}}function Wv(a,i,u,l){switch(yk(i)){case 2:var h=MR;break;case 8:h=AR;break;default:h=dd}u=h.bind(null,i,u,a),h=void 0,!kc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?a.addEventListener(i,u,{capture:!0,passive:h}):a.addEventListener(i,u,!0):h!==void 0?a.addEventListener(i,u,{passive:h}):a.addEventListener(i,u,!1)}function Qh(a,i,u,l,h){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)n:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var b=l.stateNode.containerInfo;if(b===h)break;if(y===4)for(y=l.return;y!==null;){var K=y.tag;if((K===3||K===4)&&y.stateNode.containerInfo===h)return;y=y.return}for(;b!==null;){if(y=Si(b),y===null)return;if(K=y.tag,K===5||K===6||K===26||K===27){l=g=y;continue n}b=b.parentNode}}l=l.return}ep(function(){var G=g,F=yc(u),Y=[];n:{var x=Ip.get(a);if(x!==void 0){var _=Ou,Sn=a;switch(a){case"keypress":if(Du(u)===0)break n;case"keydown":case"keyup":_=FI;break;case"focusin":Sn="focus",_=Ac;break;case"focusout":Sn="blur",_=Ac;break;case"beforeblur":case"afterblur":_=Ac;break;case"click":if(u.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=BI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=YI;break;case Dp:case wp:case Op:_=NI;break;case Cp:_=ZI;break;case"scroll":case"scrollend":_=KI;break;case"wheel":_=XI;break;case"copy":case"cut":case"paste":_=GI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=rp;break;case"toggle":case"beforetoggle":_=QI}var hn=(i&4)!==0,zn=!hn&&(a==="scroll"||a==="scrollend"),E=hn?x!==null?x+"Capture":null:x;hn=[];for(var B=G,N;B!==null;){var V=B;if(N=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||N===null||E===null||(V=Po(B,E),V!=null&&hn.push(gr(B,V,N))),zn)break;B=B.return}0<hn.length&&(x=new _(x,Sn,null,u,F),Y.push({event:x,listeners:hn}))}}if((i&7)===0){n:{if(x=a==="mouseover"||a==="pointerover",_=a==="mouseout"||a==="pointerout",x&&u!==pc&&(Sn=u.relatedTarget||u.fromElement)&&(Si(Sn)||Sn[gi]))break n;if((_||x)&&(x=F.window===F?F:(x=F.ownerDocument)?x.defaultView||x.parentWindow:window,_?(Sn=u.relatedTarget||u.toElement,_=G,Sn=Sn?Si(Sn):null,Sn!==null&&(zn=s(Sn),hn=Sn.tag,Sn!==zn||hn!==5&&hn!==27&&hn!==6)&&(Sn=null)):(_=null,Sn=G),_!==Sn)){if(hn=ip,V="onMouseLeave",E="onMouseEnter",B="mouse",(a==="pointerout"||a==="pointerover")&&(hn=rp,V="onPointerLeave",E="onPointerEnter",B="pointer"),zn=_==null?x:Bo(_),N=Sn==null?x:Bo(Sn),x=new hn(V,B+"leave",_,u,F),x.target=zn,x.relatedTarget=N,V=null,Si(F)===G&&(hn=new hn(E,B+"enter",Sn,u,F),hn.target=N,hn.relatedTarget=zn,V=hn),zn=V,_&&Sn)e:{for(hn=_,E=Sn,B=0,N=hn;N;N=Ji(N))B++;for(N=0,V=E;V;V=Ji(V))N++;for(;0<B-N;)hn=Ji(hn),B--;for(;0<N-B;)E=Ji(E),N--;for(;B--;){if(hn===E||E!==null&&hn===E.alternate)break e;hn=Ji(hn),E=Ji(E)}hn=null}else hn=null;_!==null&&Zv(Y,x,_,hn,!1),Sn!==null&&zn!==null&&Zv(Y,zn,Sn,hn,!0)}}n:{if(x=G?Bo(G):window,_=x.nodeName&&x.nodeName.toLowerCase(),_==="select"||_==="input"&&x.type==="file")var an=fp;else if(dp(x))if(gp)an=lK;else{an=uK;var wn=rK}else _=x.nodeName,!_||_.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?G&&Sc(G.elementType)&&(an=fp):an=sK;if(an&&(an=an(a,G))){mp(Y,an,u,F);break n}wn&&wn(a,x,G),a==="focusout"&&G&&x.type==="number"&&G.memoizedProps.value!=null&&gc(x,"number",x.value)}switch(wn=G?Bo(G):window,a){case"focusin":(dp(wn)||wn.contentEditable==="true")&&(wi=wn,Kc=G,jo=null);break;case"focusout":jo=Kc=wi=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Mp(Y,u,F);break;case"selectionchange":if(hK)break;case"keydown":case"keyup":Mp(Y,u,F)}var rn;if(wc)n:{switch(a){case"compositionstart":var dn="onCompositionStart";break n;case"compositionend":dn="onCompositionEnd";break n;case"compositionupdate":dn="onCompositionUpdate";break n}dn=void 0}else Di?cp(a,u)&&(dn="onCompositionEnd"):a==="keydown"&&u.keyCode===229&&(dn="onCompositionStart");dn&&(up&&u.locale!=="ko"&&(Di||dn!=="onCompositionStart"?dn==="onCompositionEnd"&&Di&&(rn=tp()):(ra=F,bc="value"in ra?ra.value:ra.textContent,Di=!0)),wn=fs(G,dn),0<wn.length&&(dn=new op(dn,a,null,u,F),Y.push({event:dn,listeners:wn}),rn?dn.data=rn:(rn=hp(u),rn!==null&&(dn.data=rn)))),(rn=eK?tK(a,u):aK(a,u))&&(dn=fs(G,"onBeforeInput"),0<dn.length&&(wn=new op("onBeforeInput","beforeinput",null,u,F),Y.push({event:wn,listeners:dn}),wn.data=rn)),YK(Y,a,G,u,F)}Yv(Y,i)})}function gr(a,i,u){return{instance:a,listener:i,currentTarget:u}}function fs(a,i){for(var u=i+"Capture",l=[];a!==null;){var h=a,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=Po(a,u),h!=null&&l.unshift(gr(a,h,g)),h=Po(a,i),h!=null&&l.push(gr(a,h,g))),a.tag===3)return l;a=a.return}return[]}function Ji(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Zv(a,i,u,l,h){for(var g=i._reactName,y=[];u!==null&&u!==l;){var b=u,K=b.alternate,G=b.stateNode;if(b=b.tag,K!==null&&K===l)break;b!==5&&b!==26&&b!==27||G===null||(K=G,h?(G=Po(u,g),G!=null&&y.unshift(gr(u,G,K))):h||(G=Po(u,g),G!=null&&y.push(gr(u,G,K)))),u=u.return}y.length!==0&&a.push({event:i,listeners:y})}var XK=/\r\n?/g,qK=/\u0000|\uFFFD/g;function Jv(a){return(typeof a=="string"?a:""+a).replace(XK,`
`).replace(qK,"")}function Xv(a,i){return i=Jv(i),Jv(a)===i}function gs(){}function jn(a,i,u,l,h,g){switch(u){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ti(a,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ti(a,""+l);break;case"className":ku(a,"class",l);break;case"tabIndex":ku(a,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ku(a,u,l);break;case"style":QS(a,l,g);break;case"data":if(i!=="object"){ku(a,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||u!=="href")){a.removeAttribute(u);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(u);break}l=Mu(""+l),a.setAttribute(u,l);break;case"action":case"formAction":if(typeof l=="function"){a.setAttribute(u,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(u==="formAction"?(i!=="input"&&jn(a,i,"name",h.name,h,null),jn(a,i,"formEncType",h.formEncType,h,null),jn(a,i,"formMethod",h.formMethod,h,null),jn(a,i,"formTarget",h.formTarget,h,null)):(jn(a,i,"encType",h.encType,h,null),jn(a,i,"method",h.method,h,null),jn(a,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(u);break}l=Mu(""+l),a.setAttribute(u,l);break;case"onClick":l!=null&&(a.onclick=gs);break;case"onScroll":l!=null&&Cn("scroll",a);break;case"onScrollEnd":l!=null&&Cn("scrollend",a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(u=l.__html,u!=null){if(h.children!=null)throw Error(r(60));a.innerHTML=u}}break;case"multiple":a.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":a.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){a.removeAttribute("xlink:href");break}u=Mu(""+l),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(u,""+l):a.removeAttribute(u);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(u,""):a.removeAttribute(u);break;case"capture":case"download":l===!0?a.setAttribute(u,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(u,l):a.removeAttribute(u);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?a.setAttribute(u,l):a.removeAttribute(u);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?a.removeAttribute(u):a.setAttribute(u,l);break;case"popover":Cn("beforetoggle",a),Cn("toggle",a),vu(a,"popover",l);break;case"xlinkActuate":Pt(a,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(a,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(a,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(a,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(a,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(a,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vu(a,"is",l);break;case"innerText":case"textContent":break;default:(!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")&&(u=CI.get(u)||u,vu(a,u,l))}}function nd(a,i,u,l,h,g){switch(u){case"style":QS(a,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(u=l.__html,u!=null){if(h.children!=null)throw Error(r(60));a.innerHTML=u}}break;case"children":typeof l=="string"?Ti(a,l):(typeof l=="number"||typeof l=="bigint")&&Ti(a,""+l);break;case"onScroll":l!=null&&Cn("scroll",a);break;case"onScrollEnd":l!=null&&Cn("scrollend",a);break;case"onClick":l!=null&&(a.onclick=gs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zS.hasOwnProperty(u))n:{if(u[0]==="o"&&u[1]==="n"&&(h=u.endsWith("Capture"),i=u.slice(2,h?u.length-7:void 0),g=a[Be]||null,g=g!=null?g[u]:null,typeof g=="function"&&a.removeEventListener(i,g,h),typeof l=="function")){typeof g!="function"&&g!==null&&(u in a?a[u]=null:a.hasAttribute(u)&&a.removeAttribute(u)),a.addEventListener(i,l,h);break n}u in a?a[u]=l:l===!0?a.setAttribute(u,""):vu(a,u,l)}}}function ke(a,i,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Cn("error",a),Cn("load",a);var l=!1,h=!1,g;for(g in u)if(u.hasOwnProperty(g)){var y=u[g];if(y!=null)switch(g){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jn(a,i,g,y,u,null)}}h&&jn(a,i,"srcSet",u.srcSet,u,null),l&&jn(a,i,"src",u.src,u,null);return;case"input":Cn("invalid",a);var b=g=y=h=null,K=null,G=null;for(l in u)if(u.hasOwnProperty(l)){var F=u[l];if(F!=null)switch(l){case"name":h=F;break;case"type":y=F;break;case"checked":K=F;break;case"defaultChecked":G=F;break;case"value":g=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:jn(a,i,l,F,u,null)}}ZS(a,g,b,K,G,y,h,!1),bu(a);return;case"select":Cn("invalid",a),l=y=g=null;for(h in u)if(u.hasOwnProperty(h)&&(b=u[h],b!=null))switch(h){case"value":g=b;break;case"defaultValue":y=b;break;case"multiple":l=b;default:jn(a,i,h,b,u,null)}i=g,u=y,a.multiple=!!l,i!=null?bi(a,!!l,i,!1):u!=null&&bi(a,!!l,u,!0);return;case"textarea":Cn("invalid",a),g=h=l=null;for(y in u)if(u.hasOwnProperty(y)&&(b=u[y],b!=null))switch(y){case"value":l=b;break;case"defaultValue":h=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:jn(a,i,y,b,u,null)}XS(a,l,h,g),bu(a);return;case"option":for(K in u)if(u.hasOwnProperty(K)&&(l=u[K],l!=null))switch(K){case"selected":a.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:jn(a,i,K,l,u,null)}return;case"dialog":Cn("beforetoggle",a),Cn("toggle",a),Cn("cancel",a),Cn("close",a);break;case"iframe":case"object":Cn("load",a);break;case"video":case"audio":for(l=0;l<fr.length;l++)Cn(fr[l],a);break;case"image":Cn("error",a),Cn("load",a);break;case"details":Cn("toggle",a);break;case"embed":case"source":case"link":Cn("error",a),Cn("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in u)if(u.hasOwnProperty(G)&&(l=u[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jn(a,i,G,l,u,null)}return;default:if(Sc(i)){for(F in u)u.hasOwnProperty(F)&&(l=u[F],l!==void 0&&nd(a,i,F,l,u,void 0));return}}for(b in u)u.hasOwnProperty(b)&&(l=u[b],l!=null&&jn(a,i,b,l,u,null))}function QK(a,i,u,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,y=null,b=null,K=null,G=null,F=null;for(_ in u){var Y=u[_];if(u.hasOwnProperty(_)&&Y!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":K=Y;default:l.hasOwnProperty(_)||jn(a,i,_,null,l,Y)}}for(var x in l){var _=l[x];if(Y=u[x],l.hasOwnProperty(x)&&(_!=null||Y!=null))switch(x){case"type":g=_;break;case"name":h=_;break;case"checked":G=_;break;case"defaultChecked":F=_;break;case"value":y=_;break;case"defaultValue":b=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,i));break;default:_!==Y&&jn(a,i,x,_,l,Y)}}fc(a,y,b,K,G,F,g,h);return;case"select":_=y=b=x=null;for(g in u)if(K=u[g],u.hasOwnProperty(g)&&K!=null)switch(g){case"value":break;case"multiple":_=K;default:l.hasOwnProperty(g)||jn(a,i,g,null,l,K)}for(h in l)if(g=l[h],K=u[h],l.hasOwnProperty(h)&&(g!=null||K!=null))switch(h){case"value":x=g;break;case"defaultValue":b=g;break;case"multiple":y=g;default:g!==K&&jn(a,i,h,g,l,K)}i=b,u=y,l=_,x!=null?bi(a,!!u,x,!1):!!l!=!!u&&(i!=null?bi(a,!!u,i,!0):bi(a,!!u,u?[]:"",!1));return;case"textarea":_=x=null;for(b in u)if(h=u[b],u.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:jn(a,i,b,null,l,h)}for(y in l)if(h=l[y],g=u[y],l.hasOwnProperty(y)&&(h!=null||g!=null))switch(y){case"value":x=h;break;case"defaultValue":_=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==g&&jn(a,i,y,h,l,g)}JS(a,x,_);return;case"option":for(var Sn in u)if(x=u[Sn],u.hasOwnProperty(Sn)&&x!=null&&!l.hasOwnProperty(Sn))switch(Sn){case"selected":a.selected=!1;break;default:jn(a,i,Sn,null,l,x)}for(K in l)if(x=l[K],_=u[K],l.hasOwnProperty(K)&&x!==_&&(x!=null||_!=null))switch(K){case"selected":a.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:jn(a,i,K,x,l,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var hn in u)x=u[hn],u.hasOwnProperty(hn)&&x!=null&&!l.hasOwnProperty(hn)&&jn(a,i,hn,null,l,x);for(G in l)if(x=l[G],_=u[G],l.hasOwnProperty(G)&&x!==_&&(x!=null||_!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,i));break;default:jn(a,i,G,x,l,_)}return;default:if(Sc(i)){for(var zn in u)x=u[zn],u.hasOwnProperty(zn)&&x!==void 0&&!l.hasOwnProperty(zn)&&nd(a,i,zn,void 0,l,x);for(F in l)x=l[F],_=u[F],!l.hasOwnProperty(F)||x===_||x===void 0&&_===void 0||nd(a,i,F,x,l,_);return}}for(var E in u)x=u[E],u.hasOwnProperty(E)&&x!=null&&!l.hasOwnProperty(E)&&jn(a,i,E,null,l,x);for(Y in l)x=l[Y],_=u[Y],!l.hasOwnProperty(Y)||x===_||x==null&&_==null||jn(a,i,Y,x,l,_)}var ed=null,td=null;function Ss(a){return a.nodeType===9?a:a.ownerDocument}function qv(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qv(a,i){if(a===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&i==="foreignObject"?0:a}function ad(a,i){return a==="textarea"||a==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var id=null;function nR(){var a=window.event;return a&&a.type==="popstate"?a===id?!1:(id=a,!0):(id=null,!1)}var nk=typeof setTimeout=="function"?setTimeout:void 0,eR=typeof clearTimeout=="function"?clearTimeout:void 0,ek=typeof Promise=="function"?Promise:void 0,tR=typeof queueMicrotask=="function"?queueMicrotask:typeof ek<"u"?function(a){return ek.resolve(null).then(a).catch(aR)}:nk;function aR(a){setTimeout(function(){throw a})}function Ta(a){return a==="head"}function tk(a,i){var u=i,l=0,h=0;do{var g=u.nextSibling;if(a.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(0<l&&8>l){u=l;var y=a.ownerDocument;if(u&1&&Sr(y.documentElement),u&2&&Sr(y.body),u&4)for(u=y.head,Sr(u),y=u.firstChild;y;){var b=y.nextSibling,K=y.nodeName;y[Ro]||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&y.rel.toLowerCase()==="stylesheet"||u.removeChild(y),y=b}}if(h===0){a.removeChild(g),Ar(i);return}h--}else u==="$"||u==="$?"||u==="$!"?h++:l=u.charCodeAt(0)-48;else l=0;u=g}while(u);Ar(i)}function od(a){var i=a.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var u=i;switch(i=i.nextSibling,u.nodeName){case"HTML":case"HEAD":case"BODY":od(u),cc(u);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(u.rel.toLowerCase()==="stylesheet")continue}a.removeChild(u)}}function iR(a,i,u,l){for(;a.nodeType===1;){var h=u;if(a.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(l){if(!a[Ro])switch(i){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(g=a.getAttribute("rel"),g==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(g!==h.rel||a.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||a.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||a.getAttribute("title")!==(h.title==null?null:h.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(g=a.getAttribute("src"),(g!==(h.src==null?null:h.src)||a.getAttribute("type")!==(h.type==null?null:h.type)||a.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(i==="input"&&a.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&a.getAttribute("name")===g)return a}else return a;if(a=ht(a.nextSibling),a===null)break}return null}function oR(a,i,u){if(i==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!u||(a=ht(a.nextSibling),a===null))return null;return a}function rd(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function rR(a,i){var u=a.ownerDocument;if(a.data!=="$?"||u.readyState==="complete")i();else{var l=function(){i(),u.removeEventListener("DOMContentLoaded",l)};u.addEventListener("DOMContentLoaded",l),a._reactRetry=l}}function ht(a){for(;a!=null;a=a.nextSibling){var i=a.nodeType;if(i===1||i===3)break;if(i===8){if(i=a.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return a}var ud=null;function ak(a){a=a.previousSibling;for(var i=0;a;){if(a.nodeType===8){var u=a.data;if(u==="$"||u==="$!"||u==="$?"){if(i===0)return a;i--}else u==="/$"&&i++}a=a.previousSibling}return null}function ik(a,i,u){switch(i=Ss(u),a){case"html":if(a=i.documentElement,!a)throw Error(r(452));return a;case"head":if(a=i.head,!a)throw Error(r(453));return a;case"body":if(a=i.body,!a)throw Error(r(454));return a;default:throw Error(r(451))}}function Sr(a){for(var i=a.attributes;i.length;)a.removeAttributeNode(i[0]);cc(a)}var ot=new Map,ok=new Set;function ps(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Yt=Z.d;Z.d={f:uR,r:sR,D:lR,C:cR,L:hR,m:dR,X:fR,S:mR,M:gR};function uR(){var a=Yt.f(),i=ss();return a||i}function sR(a){var i=pi(a);i!==null&&i.tag===5&&i.type==="form"?Dy(i):Yt.r(a)}var Xi=typeof document>"u"?null:document;function rk(a,i,u){var l=Xi;if(l&&typeof i=="string"&&i){var h=qe(i);h='link[rel="'+a+'"][href="'+h+'"]',typeof u=="string"&&(h+='[crossorigin="'+u+'"]'),ok.has(h)||(ok.add(h),a={rel:a,crossOrigin:u,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ke(i,"link",a),fe(i),l.head.appendChild(i)))}}function lR(a){Yt.D(a),rk("dns-prefetch",a,null)}function cR(a,i){Yt.C(a,i),rk("preconnect",a,i)}function hR(a,i,u){Yt.L(a,i,u);var l=Xi;if(l&&a&&i){var h='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&u&&u.imageSrcSet?(h+='[imagesrcset="'+qe(u.imageSrcSet)+'"]',typeof u.imageSizes=="string"&&(h+='[imagesizes="'+qe(u.imageSizes)+'"]')):h+='[href="'+qe(a)+'"]';var g=h;switch(i){case"style":g=qi(a);break;case"script":g=Qi(a)}ot.has(g)||(a=S({rel:"preload",href:i==="image"&&u&&u.imageSrcSet?void 0:a,as:i},u),ot.set(g,a),l.querySelector(h)!==null||i==="style"&&l.querySelector(pr(g))||i==="script"&&l.querySelector(yr(g))||(i=l.createElement("link"),ke(i,"link",a),fe(i),l.head.appendChild(i)))}}function dR(a,i){Yt.m(a,i);var u=Xi;if(u&&a){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+qe(l)+'"][href="'+qe(a)+'"]',g=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Qi(a)}if(!ot.has(g)&&(a=S({rel:"modulepreload",href:a},i),ot.set(g,a),u.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(u.querySelector(yr(g)))return}l=u.createElement("link"),ke(l,"link",a),fe(l),u.head.appendChild(l)}}}function mR(a,i,u){Yt.S(a,i,u);var l=Xi;if(l&&a){var h=yi(l).hoistableStyles,g=qi(a);i=i||"default";var y=h.get(g);if(!y){var b={loading:0,preload:null};if(y=l.querySelector(pr(g)))b.loading=5;else{a=S({rel:"stylesheet",href:a,"data-precedence":i},u),(u=ot.get(g))&&sd(a,u);var K=y=l.createElement("link");fe(K),ke(K,"link",a),K._p=new Promise(function(G,F){K.onload=G,K.onerror=F}),K.addEventListener("load",function(){b.loading|=1}),K.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ys(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:b},h.set(g,y)}}}function fR(a,i){Yt.X(a,i);var u=Xi;if(u&&a){var l=yi(u).hoistableScripts,h=Qi(a),g=l.get(h);g||(g=u.querySelector(yr(h)),g||(a=S({src:a,async:!0},i),(i=ot.get(h))&&ld(a,i),g=u.createElement("script"),fe(g),ke(g,"link",a),u.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(h,g))}}function gR(a,i){Yt.M(a,i);var u=Xi;if(u&&a){var l=yi(u).hoistableScripts,h=Qi(a),g=l.get(h);g||(g=u.querySelector(yr(h)),g||(a=S({src:a,async:!0,type:"module"},i),(i=ot.get(h))&&ld(a,i),g=u.createElement("script"),fe(g),ke(g,"link",a),u.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(h,g))}}function uk(a,i,u,l){var h=(h=un.current)?ps(h):null;if(!h)throw Error(r(446));switch(a){case"meta":case"title":return null;case"style":return typeof u.precedence=="string"&&typeof u.href=="string"?(i=qi(u.href),u=yi(h).hoistableStyles,l=u.get(i),l||(l={type:"style",instance:null,count:0,state:null},u.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(u.rel==="stylesheet"&&typeof u.href=="string"&&typeof u.precedence=="string"){a=qi(u.href);var g=yi(h).hoistableStyles,y=g.get(a);if(y||(h=h.ownerDocument||h,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(a,y),(g=h.querySelector(pr(a)))&&!g._p&&(y.instance=g,y.state.loading=5),ot.has(a)||(u={rel:"preload",as:"style",href:u.href,crossOrigin:u.crossOrigin,integrity:u.integrity,media:u.media,hrefLang:u.hrefLang,referrerPolicy:u.referrerPolicy},ot.set(a,u),g||SR(h,a,u,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=u.async,u=u.src,typeof u=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Qi(u),u=yi(h).hoistableScripts,l=u.get(i),l||(l={type:"script",instance:null,count:0,state:null},u.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,a))}}function qi(a){return'href="'+qe(a)+'"'}function pr(a){return'link[rel="stylesheet"]['+a+"]"}function sk(a){return S({},a,{"data-precedence":a.precedence,precedence:null})}function SR(a,i,u,l){a.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=a.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ke(i,"link",u),fe(i),a.head.appendChild(i))}function Qi(a){return'[src="'+qe(a)+'"]'}function yr(a){return"script[async]"+a}function lk(a,i,u){if(i.count++,i.instance===null)switch(i.type){case"style":var l=a.querySelector('style[data-href~="'+qe(u.href)+'"]');if(l)return i.instance=l,fe(l),l;var h=S({},u,{"data-href":u.href,"data-precedence":u.precedence,href:null,precedence:null});return l=(a.ownerDocument||a).createElement("style"),fe(l),ke(l,"style",h),ys(l,u.precedence,a),i.instance=l;case"stylesheet":h=qi(u.href);var g=a.querySelector(pr(h));if(g)return i.state.loading|=4,i.instance=g,fe(g),g;l=sk(u),(h=ot.get(h))&&sd(l,h),g=(a.ownerDocument||a).createElement("link"),fe(g);var y=g;return y._p=new Promise(function(b,K){y.onload=b,y.onerror=K}),ke(g,"link",l),i.state.loading|=4,ys(g,u.precedence,a),i.instance=g;case"script":return g=Qi(u.src),(h=a.querySelector(yr(g)))?(i.instance=h,fe(h),h):(l=u,(h=ot.get(g))&&(l=S({},u),ld(l,h)),a=a.ownerDocument||a,h=a.createElement("script"),fe(h),ke(h,"link",l),a.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ys(l,u.precedence,a));return i.instance}function ys(a,i,u){for(var l=u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,g=h,y=0;y<l.length;y++){var b=l[y];if(b.dataset.precedence===i)g=b;else if(g!==h)break}g?g.parentNode.insertBefore(a,g.nextSibling):(i=u.nodeType===9?u.head:u,i.insertBefore(a,i.firstChild))}function sd(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.title==null&&(a.title=i.title)}function ld(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.integrity==null&&(a.integrity=i.integrity)}var vs=null;function ck(a,i,u){if(vs===null){var l=new Map,h=vs=new Map;h.set(u,l)}else h=vs,l=h.get(u),l||(l=new Map,h.set(u,l));if(l.has(a))return l;for(l.set(a,null),u=u.getElementsByTagName(a),h=0;h<u.length;h++){var g=u[h];if(!(g[Ro]||g[Ae]||a==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var y=g.getAttribute(i)||"";y=a+y;var b=l.get(y);b?b.push(g):l.set(y,[g])}}return l}function hk(a,i,u){a=a.ownerDocument||a,a.head.insertBefore(u,i==="title"?a.querySelector("head > title"):null)}function pR(a,i,u){if(u===1||i.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return a=i.disabled,typeof i.precedence=="string"&&a==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function dk(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var vr=null;function yR(){}function vR(a,i,u){if(vr===null)throw Error(r(475));var l=vr;if(i.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=qi(u.href),g=a.querySelector(pr(h));if(g){a=g._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(l.count++,l=ks.bind(l),a.then(l,l)),i.state.loading|=4,i.instance=g,fe(g);return}g=a.ownerDocument||a,u=sk(u),(h=ot.get(h))&&sd(u,h),g=g.createElement("link"),fe(g);var y=g;y._p=new Promise(function(b,K){y.onload=b,y.onerror=K}),ke(g,"link",u),i.instance=g}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=ks.bind(l),a.addEventListener("load",i),a.addEventListener("error",i))}}function kR(){if(vr===null)throw Error(r(475));var a=vr;return a.stylesheets&&a.count===0&&cd(a,a.stylesheets),0<a.count?function(i){var u=setTimeout(function(){if(a.stylesheets&&cd(a,a.stylesheets),a.unsuspend){var l=a.unsuspend;a.unsuspend=null,l()}},6e4);return a.unsuspend=i,function(){a.unsuspend=null,clearTimeout(u)}}:null}function ks(){if(this.count--,this.count===0){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var bs=null;function cd(a,i){a.stylesheets=null,a.unsuspend!==null&&(a.count++,bs=new Map,i.forEach(bR,a),bs=null,ks.call(a))}function bR(a,i){if(!(i.state.loading&4)){var u=bs.get(a);if(u)var l=u.get(null);else{u=new Map,bs.set(a,u);for(var h=a.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var y=h[g];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(u.set(y.dataset.precedence,y),l=y)}l&&u.set(null,l)}h=i.instance,y=h.getAttribute("data-precedence"),g=u.get(y)||l,g===l&&u.set(null,h),u.set(y,h),this.count++,l=ks.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),g?g.parentNode.insertBefore(h,g.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(h,a.firstChild)),i.state.loading|=4}}var kr={$$typeof:D,Provider:null,Consumer:null,_currentValue:en,_currentValue2:en,_threadCount:0};function TR(a,i,u,l,h,g,y,b){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.hiddenUpdates=rc(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function mk(a,i,u,l,h,g,y,b,K,G,F,Y){return a=new TR(a,i,u,y,b,K,G,Y),i=1,g===!0&&(i|=24),g=$e(3,null,null,i),a.current=g,g.stateNode=a,i=Uc(),i.refCount++,a.pooledCache=i,i.refCount++,g.memoizedState={element:l,isDehydrated:u,cache:i},Zc(g),a}function fk(a){return a?(a=Ki,a):Ki}function gk(a,i,u,l,h,g){h=fk(h),l.context===null?l.context=h:l.pendingContext=h,l=la(i),l.payload={element:u},g=g===void 0?null:g,g!==null&&(l.callback=g),u=ca(a,l,i),u!==null&&(We(u,a,i),Jo(u,a,i))}function Sk(a,i){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var u=a.retryLane;a.retryLane=u!==0&&u<i?u:i}}function hd(a,i){Sk(a,i),(a=a.alternate)&&Sk(a,i)}function pk(a){if(a.tag===13){var i=Ii(a,67108864);i!==null&&We(i,a,67108864),hd(a,67108864)}}var Ts=!0;function MR(a,i,u,l){var h=L.T;L.T=null;var g=Z.p;try{Z.p=2,dd(a,i,u,l)}finally{Z.p=g,L.T=h}}function AR(a,i,u,l){var h=L.T;L.T=null;var g=Z.p;try{Z.p=8,dd(a,i,u,l)}finally{Z.p=g,L.T=h}}function dd(a,i,u,l){if(Ts){var h=md(l);if(h===null)Qh(a,i,l,Ms,u),vk(a,l);else if(wR(h,a,i,u,l))l.stopPropagation();else if(vk(a,l),i&4&&-1<DR.indexOf(a)){for(;h!==null;){var g=pi(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var y=Ha(g.pendingLanes);if(y!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var K=1<<31-je(y);b.entanglements[1]|=K,y&=~K}Tt(g),(xn&6)===0&&(rs=pt()+500,mr(0))}}break;case 13:b=Ii(g,2),b!==null&&We(b,g,2),ss(),hd(g,2)}if(g=md(l),g===null&&Qh(a,i,l,Ms,u),g===h)break;h=g}h!==null&&l.stopPropagation()}else Qh(a,i,l,null,u)}}function md(a){return a=yc(a),fd(a)}var Ms=null;function fd(a){if(Ms=null,a=Si(a),a!==null){var i=s(a);if(i===null)a=null;else{var u=i.tag;if(u===13){if(a=c(i),a!==null)return a;a=null}else if(u===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;a=null}else i!==a&&(a=null)}}return Ms=a,null}function yk(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cI()){case BS:return 2;case PS:return 8;case gu:case hI:return 32;case ES:return 268435456;default:return 32}default:return 32}}var gd=!1,Ma=null,Aa=null,Da=null,br=new Map,Tr=new Map,wa=[],DR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vk(a,i){switch(a){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(i.pointerId)}}function Mr(a,i,u,l,h,g){return a===null||a.nativeEvent!==g?(a={blockedOn:i,domEventName:u,eventSystemFlags:l,nativeEvent:g,targetContainers:[h]},i!==null&&(i=pi(i),i!==null&&pk(i)),a):(a.eventSystemFlags|=l,i=a.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),a)}function wR(a,i,u,l,h){switch(i){case"focusin":return Ma=Mr(Ma,a,i,u,l,h),!0;case"dragenter":return Aa=Mr(Aa,a,i,u,l,h),!0;case"mouseover":return Da=Mr(Da,a,i,u,l,h),!0;case"pointerover":var g=h.pointerId;return br.set(g,Mr(br.get(g)||null,a,i,u,l,h)),!0;case"gotpointercapture":return g=h.pointerId,Tr.set(g,Mr(Tr.get(g)||null,a,i,u,l,h)),!0}return!1}function kk(a){var i=Si(a.target);if(i!==null){var u=s(i);if(u!==null){if(i=u.tag,i===13){if(i=c(u),i!==null){a.blockedOn=i,vI(a.priority,function(){if(u.tag===13){var l=Ye();l=uc(l);var h=Ii(u,l);h!==null&&We(h,u,l),hd(u,l)}});return}}else if(i===3&&u.stateNode.current.memoizedState.isDehydrated){a.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}a.blockedOn=null}function As(a){if(a.blockedOn!==null)return!1;for(var i=a.targetContainers;0<i.length;){var u=md(a.nativeEvent);if(u===null){u=a.nativeEvent;var l=new u.constructor(u.type,u);pc=l,u.target.dispatchEvent(l),pc=null}else return i=pi(u),i!==null&&pk(i),a.blockedOn=u,!1;i.shift()}return!0}function bk(a,i,u){As(a)&&u.delete(i)}function OR(){gd=!1,Ma!==null&&As(Ma)&&(Ma=null),Aa!==null&&As(Aa)&&(Aa=null),Da!==null&&As(Da)&&(Da=null),br.forEach(bk),Tr.forEach(bk)}function Ds(a,i){a.blockedOn===i&&(a.blockedOn=null,gd||(gd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,OR)))}var ws=null;function Tk(a){ws!==a&&(ws=a,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ws===a&&(ws=null);for(var i=0;i<a.length;i+=3){var u=a[i],l=a[i+1],h=a[i+2];if(typeof l!="function"){if(fd(l||u)===null)continue;break}var g=pi(u);g!==null&&(a.splice(i,3),i-=3,fh(g,{pending:!0,data:h,method:u.method,action:l},l,h))}}))}function Ar(a){function i(K){return Ds(K,a)}Ma!==null&&Ds(Ma,a),Aa!==null&&Ds(Aa,a),Da!==null&&Ds(Da,a),br.forEach(i),Tr.forEach(i);for(var u=0;u<wa.length;u++){var l=wa[u];l.blockedOn===a&&(l.blockedOn=null)}for(;0<wa.length&&(u=wa[0],u.blockedOn===null);)kk(u),u.blockedOn===null&&wa.shift();if(u=(a.ownerDocument||a).$$reactFormReplay,u!=null)for(l=0;l<u.length;l+=3){var h=u[l],g=u[l+1],y=h[Be]||null;if(typeof g=="function")y||Tk(u);else if(y){var b=null;if(g&&g.hasAttribute("formAction")){if(h=g,y=g[Be]||null)b=y.formAction;else if(fd(h)!==null)continue}else b=y.action;typeof b=="function"?u[l+1]=b:(u.splice(l,3),l-=3),Tk(u)}}}function Sd(a){this._internalRoot=a}Os.prototype.render=Sd.prototype.render=function(a){var i=this._internalRoot;if(i===null)throw Error(r(409));var u=i.current,l=Ye();gk(u,l,a,i,null,null)},Os.prototype.unmount=Sd.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var i=a.containerInfo;gk(a.current,2,null,a,null,null),ss(),i[gi]=null}};function Os(a){this._internalRoot=a}Os.prototype.unstable_scheduleHydration=function(a){if(a){var i=LS();a={blockedOn:null,target:a,priority:i};for(var u=0;u<wa.length&&i!==0&&i<wa[u].priority;u++);wa.splice(u,0,a),u===0&&kk(a)}};var Mk=e.version;if(Mk!=="19.1.1")throw Error(r(527,Mk,"19.1.1"));Z.findDOMNode=function(a){var i=a._reactInternals;if(i===void 0)throw typeof a.render=="function"?Error(r(188)):(a=Object.keys(a).join(","),Error(r(268,a)));return a=d(i),a=a!==null?f(a):null,a=a===null?null:a.stateNode,a};var CR={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{Co=Cs.inject(CR),_e=Cs}catch{}}return wr.createRoot=function(a,i){if(!t(a))throw Error(r(299));var u=!1,l="",h=Ly,g=_y,y=jy,b=null;return i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=mk(a,1,!1,null,null,u,l,h,g,y,b,null),a[gi]=i.current,qh(a),new Sd(i)},wr.hydrateRoot=function(a,i,u){if(!t(a))throw Error(r(299));var l=!1,h="",g=Ly,y=_y,b=jy,K=null,G=null;return u!=null&&(u.unstable_strictMode===!0&&(l=!0),u.identifierPrefix!==void 0&&(h=u.identifierPrefix),u.onUncaughtError!==void 0&&(g=u.onUncaughtError),u.onCaughtError!==void 0&&(y=u.onCaughtError),u.onRecoverableError!==void 0&&(b=u.onRecoverableError),u.unstable_transitionCallbacks!==void 0&&(K=u.unstable_transitionCallbacks),u.formState!==void 0&&(G=u.formState)),i=mk(a,1,!0,i,u??null,l,h,g,y,b,K,G),i.context=fk(null),u=i.current,l=Ye(),l=uc(l),h=la(l),h.callback=null,ca(u,h,l),u=l,i.current.lanes=u,Ko(i,u),Tt(i),a[gi]=i.current,qh(a),new Os(i)},wr.version="19.1.1",wr}var Ek;function xR(){if(Ek)return vd.exports;Ek=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),vd.exports=GR(),vd.exports}var LR=xR();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nk="popstate";function _R(n={}){function e(r,t){let{pathname:s,search:c,hash:m}=r.location;return tm("",{pathname:s,search:c,hash:m},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function o(r,t){return typeof t=="string"?t:_r(t)}return zR(e,o,null,n)}function Xn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Kt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jR(){return Math.random().toString(36).substring(2,10)}function Hk(n,e){return{usr:n.state,key:n.key,idx:e}}function tm(n,e,o=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?vo(e):e,state:o,key:e&&e.key||r||jR()}}function _r({pathname:n="/",search:e="",hash:o=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function vo(n){let e={};if(n){let o=n.indexOf("#");o>=0&&(e.hash=n.substring(o),n=n.substring(0,o));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function zR(n,e,o,r={}){let{window:t=document.defaultView,v5Compat:s=!1}=r,c=t.history,m="POP",d=null,f=S();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function S(){return(c.state||{idx:null}).idx}function p(){m="POP";let A=S(),k=A==null?null:A-f;f=A,d&&d({action:m,location:C.location,delta:k})}function v(A,k){m="PUSH";let O=tm(C.location,A,k);f=S()+1;let D=Hk(O,f),P=C.createHref(O);try{c.pushState(D,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;t.location.assign(P)}s&&d&&d({action:m,location:C.location,delta:1})}function T(A,k){m="REPLACE";let O=tm(C.location,A,k);f=S();let D=Hk(O,f),P=C.createHref(O);c.replaceState(D,"",P),s&&d&&d({action:m,location:C.location,delta:0})}function M(A){return $R(A)}let C={get action(){return m},get location(){return n(t,c)},listen(A){if(d)throw new Error("A history only accepts one active listener");return t.addEventListener(Nk,p),d=A,()=>{t.removeEventListener(Nk,p),d=null}},createHref(A){return e(t,A)},createURL:M,encodeLocation(A){let k=M(A);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:v,replace:T,go(A){return c.go(A)}};return C}function $R(n,e=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xn(o,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:_r(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function dM(n,e,o="/"){return FR(n,e,o,!1)}function FR(n,e,o,r){let t=typeof e=="string"?vo(e):e,s=Xt(t.pathname||"/",o);if(s==null)return null;let c=mM(n);UR(c);let m=null;for(let d=0;m==null&&d<c.length;++d){let f=tB(s);m=nB(c[d],f,r)}return m}function mM(n,e=[],o=[],r=""){let t=(s,c,m)=>{let d={relativePath:m===void 0?s.path||"":m,caseSensitive:s.caseSensitive===!0,childrenIndex:c,route:s};d.relativePath.startsWith("/")&&(Xn(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length));let f=Zt([r,d.relativePath]),S=o.concat(d);s.children&&s.children.length>0&&(Xn(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),mM(s.children,e,S,f)),!(s.path==null&&!s.index)&&e.push({path:f,score:qR(f,s.index),routesMeta:S})};return n.forEach((s,c)=>{var m;if(s.path===""||!((m=s.path)!=null&&m.includes("?")))t(s,c);else for(let d of fM(s.path))t(s,c,d)}),e}function fM(n){let e=n.split("/");if(e.length===0)return[];let[o,...r]=e,t=o.endsWith("?"),s=o.replace(/\?$/,"");if(r.length===0)return t?[s,""]:[s];let c=fM(r.join("/")),m=[];return m.push(...c.map(d=>d===""?s:[s,d].join("/"))),t&&m.push(...c),m.map(d=>n.startsWith("/")&&d===""?"/":d)}function UR(n){n.sort((e,o)=>e.score!==o.score?o.score-e.score:QR(e.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var VR=/^:[\w-]+$/,YR=3,WR=2,ZR=1,JR=10,XR=-2,Gk=n=>n==="*";function qR(n,e){let o=n.split("/"),r=o.length;return o.some(Gk)&&(r+=XR),e&&(r+=WR),o.filter(t=>!Gk(t)).reduce((t,s)=>t+(VR.test(s)?YR:s===""?ZR:JR),r)}function QR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,t)=>r===e[t])?n[n.length-1]-e[e.length-1]:0}function nB(n,e,o=!1){let{routesMeta:r}=n,t={},s="/",c=[];for(let m=0;m<r.length;++m){let d=r[m],f=m===r.length-1,S=s==="/"?e:e.slice(s.length)||"/",p=ul({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},S),v=d.route;if(!p&&f&&o&&!r[r.length-1].route.index&&(p=ul({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},S)),!p)return null;Object.assign(t,p.params),c.push({params:t,pathname:Zt([s,p.pathname]),pathnameBase:rB(Zt([s,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(s=Zt([s,p.pathnameBase]))}return c}function ul(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,r]=eB(n.path,n.caseSensitive,n.end),t=e.match(o);if(!t)return null;let s=t[0],c=s.replace(/(.)\/+$/,"$1"),m=t.slice(1);return{params:r.reduce((f,{paramName:S,isOptional:p},v)=>{if(S==="*"){let M=m[v]||"";c=s.slice(0,s.length-M.length).replace(/(.)\/+$/,"$1")}const T=m[v];return p&&!T?f[S]=void 0:f[S]=(T||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:c,pattern:n}}function eB(n,e=!1,o=!0){Kt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],t="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,d)=>(r.push({paramName:m,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),t+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?t+="\\/*$":n!==""&&n!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,e?void 0:"i"),r]}function tB(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Xt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let o=e.endsWith("/")?e.length-1:e.length,r=n.charAt(o);return r&&r!=="/"?null:n.slice(o)||"/"}function aB(n,e="/"){let{pathname:o,search:r="",hash:t=""}=typeof n=="string"?vo(n):n;return{pathname:o?o.startsWith("/")?o:iB(o,e):e,search:uB(r),hash:sB(t)}}function iB(n,e){let o=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(t=>{t===".."?o.length>1&&o.pop():t!=="."&&o.push(t)}),o.length>1?o.join("/"):"/"}function Md(n,e,o,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oB(n){return n.filter((e,o)=>o===0||e.route.path&&e.route.path.length>0)}function gM(n){let e=oB(n);return e.map((o,r)=>r===e.length-1?o.pathname:o.pathnameBase)}function SM(n,e,o,r=!1){let t;typeof n=="string"?t=vo(n):(t={...n},Xn(!t.pathname||!t.pathname.includes("?"),Md("?","pathname","search",t)),Xn(!t.pathname||!t.pathname.includes("#"),Md("#","pathname","hash",t)),Xn(!t.search||!t.search.includes("#"),Md("#","search","hash",t)));let s=n===""||t.pathname==="",c=s?"/":t.pathname,m;if(c==null)m=o;else{let p=e.length-1;if(!r&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),p-=1;t.pathname=v.join("/")}m=p>=0?e[p]:"/"}let d=aB(t,m),f=c&&c!=="/"&&c.endsWith("/"),S=(s||c===".")&&o.endsWith("/");return!d.pathname.endsWith("/")&&(f||S)&&(d.pathname+="/"),d}var Zt=n=>n.join("/").replace(/\/\/+/g,"/"),rB=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uB=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sB=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lB(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var pM=["POST","PUT","PATCH","DELETE"];new Set(pM);var cB=["GET",...pM];new Set(cB);var ko=w.createContext(null);ko.displayName="DataRouter";var Pl=w.createContext(null);Pl.displayName="DataRouterState";w.createContext(!1);var yM=w.createContext({isTransitioning:!1});yM.displayName="ViewTransition";var hB=w.createContext(new Map);hB.displayName="Fetchers";var dB=w.createContext(null);dB.displayName="Await";var Rt=w.createContext(null);Rt.displayName="Navigation";var eu=w.createContext(null);eu.displayName="Location";var ea=w.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var Um=w.createContext(null);Um.displayName="RouteError";function mB(n,{relative:e}={}){Xn(tu(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=w.useContext(Rt),{hash:t,pathname:s,search:c}=au(n,{relative:e}),m=s;return o!=="/"&&(m=s==="/"?o:Zt([o,s])),r.createHref({pathname:m,search:c,hash:t})}function tu(){return w.useContext(eu)!=null}function ta(){return Xn(tu(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(eu).location}var vM="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kM(n){w.useContext(Rt).static||w.useLayoutEffect(n)}function Vm(){let{isDataRoute:n}=w.useContext(ea);return n?wB():fB()}function fB(){Xn(tu(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(ko),{basename:e,navigator:o}=w.useContext(Rt),{matches:r}=w.useContext(ea),{pathname:t}=ta(),s=JSON.stringify(gM(r)),c=w.useRef(!1);return kM(()=>{c.current=!0}),w.useCallback((d,f={})=>{if(Kt(c.current,vM),!c.current)return;if(typeof d=="number"){o.go(d);return}let S=SM(d,JSON.parse(s),t,f.relative==="path");n==null&&e!=="/"&&(S.pathname=S.pathname==="/"?e:Zt([e,S.pathname])),(f.replace?o.replace:o.push)(S,f.state,f)},[e,o,s,t,n])}w.createContext(null);function au(n,{relative:e}={}){let{matches:o}=w.useContext(ea),{pathname:r}=ta(),t=JSON.stringify(gM(o));return w.useMemo(()=>SM(n,JSON.parse(t),r,e==="path"),[n,t,r,e])}function gB(n,e){return bM(n,e)}function bM(n,e,o,r){var k;Xn(tu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:t}=w.useContext(Rt),{matches:s}=w.useContext(ea),c=s[s.length-1],m=c?c.params:{},d=c?c.pathname:"/",f=c?c.pathnameBase:"/",S=c&&c.route;{let O=S&&S.path||"";TM(d,!S||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let p=ta(),v;if(e){let O=typeof e=="string"?vo(e):e;Xn(f==="/"||((k=O.pathname)==null?void 0:k.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${O.pathname}" was given in the \`location\` prop.`),v=O}else v=p;let T=v.pathname||"/",M=T;if(f!=="/"){let O=f.replace(/^\//,"").split("/");M="/"+T.replace(/^\//,"").split("/").slice(O.length).join("/")}let C=dM(n,{pathname:M});Kt(S||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Kt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=kB(C&&C.map(O=>Object.assign({},O,{params:Object.assign({},m,O.params),pathname:Zt([f,t.encodeLocation?t.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?f:Zt([f,t.encodeLocation?t.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,o,r);return e&&A?w.createElement(eu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},A):A}function SB(){let n=DB(),e=lB(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",t={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:s},"ErrorBoundary")," or"," ",w.createElement("code",{style:s},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),o?w.createElement("pre",{style:t},o):null,c)}var pB=w.createElement(SB,null),yB=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?w.createElement(ea.Provider,{value:this.props.routeContext},w.createElement(Um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vB({routeContext:n,match:e,children:o}){let r=w.useContext(ko);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),w.createElement(ea.Provider,{value:n},o)}function kB(n,e=[],o=null,r=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(e.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let t=n,s=o==null?void 0:o.errors;if(s!=null){let d=t.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Xn(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),t=t.slice(0,Math.min(t.length,d+1))}let c=!1,m=-1;if(o)for(let d=0;d<t.length;d++){let f=t[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(m=d),f.route.id){let{loaderData:S,errors:p}=o,v=f.route.loader&&!S.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){c=!0,m>=0?t=t.slice(0,m+1):t=[t[0]];break}}}return t.reduceRight((d,f,S)=>{let p,v=!1,T=null,M=null;o&&(p=s&&f.route.id?s[f.route.id]:void 0,T=f.route.errorElement||pB,c&&(m<0&&S===0?(TM("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):m===S&&(v=!0,M=f.route.hydrateFallbackElement||null)));let C=e.concat(t.slice(0,S+1)),A=()=>{let k;return p?k=T:v?k=M:f.route.Component?k=w.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=d,w.createElement(vB,{match:f,routeContext:{outlet:d,matches:C,isDataRoute:o!=null},children:k})};return o&&(f.route.ErrorBoundary||f.route.errorElement||S===0)?w.createElement(yB,{location:o.location,revalidation:o.revalidation,component:T,error:p,children:A(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):A()},null)}function Ym(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bB(n){let e=w.useContext(ko);return Xn(e,Ym(n)),e}function TB(n){let e=w.useContext(Pl);return Xn(e,Ym(n)),e}function MB(n){let e=w.useContext(ea);return Xn(e,Ym(n)),e}function Wm(n){let e=MB(n),o=e.matches[e.matches.length-1];return Xn(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function AB(){return Wm("useRouteId")}function DB(){var r;let n=w.useContext(Um),e=TB("useRouteError"),o=Wm("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[o]}function wB(){let{router:n}=bB("useNavigate"),e=Wm("useNavigate"),o=w.useRef(!1);return kM(()=>{o.current=!0}),w.useCallback(async(t,s={})=>{Kt(o.current,vM),o.current&&(typeof t=="number"?n.navigate(t):await n.navigate(t,{fromRouteId:e,...s}))},[n,e])}var xk={};function TM(n,e,o){!e&&!xk[n]&&(xk[n]=!0,Kt(!1,o))}w.memo(OB);function OB({routes:n,future:e,state:o}){return bM(n,void 0,o,e)}function ei(n){Xn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CB({basename:n="/",children:e=null,location:o,navigationType:r="POP",navigator:t,static:s=!1}){Xn(!tu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:c,navigator:t,static:s,future:{}}),[c,t,s]);typeof o=="string"&&(o=vo(o));let{pathname:d="/",search:f="",hash:S="",state:p=null,key:v="default"}=o,T=w.useMemo(()=>{let M=Xt(d,c);return M==null?null:{location:{pathname:M,search:f,hash:S,state:p,key:v},navigationType:r}},[c,d,f,S,p,v,r]);return Kt(T!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${S}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:w.createElement(Rt.Provider,{value:m},w.createElement(eu.Provider,{children:e,value:T}))}function IB({children:n,location:e}){return gB(am(n),e)}function am(n,e=[]){let o=[];return w.Children.forEach(n,(r,t)=>{if(!w.isValidElement(r))return;let s=[...e,t];if(r.type===w.Fragment){o.push.apply(o,am(r.props.children,s));return}Xn(r.type===ei,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=am(r.props.children,s)),o.push(c)}),o}var Js="get",Xs="application/x-www-form-urlencoded";function El(n){return n!=null&&typeof n.tagName=="string"}function KB(n){return El(n)&&n.tagName.toLowerCase()==="button"}function RB(n){return El(n)&&n.tagName.toLowerCase()==="form"}function BB(n){return El(n)&&n.tagName.toLowerCase()==="input"}function PB(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function EB(n,e){return n.button===0&&(!e||e==="_self")&&!PB(n)}var Is=null;function NB(){if(Is===null)try{new FormData(document.createElement("form"),0),Is=!1}catch{Is=!0}return Is}var HB=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(n){return n!=null&&!HB.has(n)?(Kt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xs}"`),null):n}function GB(n,e){let o,r,t,s,c;if(RB(n)){let m=n.getAttribute("action");r=m?Xt(m,e):null,o=n.getAttribute("method")||Js,t=Ad(n.getAttribute("enctype"))||Xs,s=new FormData(n)}else if(KB(n)||BB(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=n.getAttribute("formaction")||m.getAttribute("action");if(r=d?Xt(d,e):null,o=n.getAttribute("formmethod")||m.getAttribute("method")||Js,t=Ad(n.getAttribute("formenctype"))||Ad(m.getAttribute("enctype"))||Xs,s=new FormData(m,n),!NB()){let{name:f,type:S,value:p}=n;if(S==="image"){let v=f?`${f}.`:"";s.append(`${v}x`,"0"),s.append(`${v}y`,"0")}else f&&s.append(f,p)}}else{if(El(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Js,r=null,t=Xs,c=n}return s&&t==="text/plain"&&(c=s,s=void 0),{action:r,method:o.toLowerCase(),encType:t,formData:s,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xB(n,e,o){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${o}`:e&&Xt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function LB(n,e){if(n.id in e)return e[n.id];try{let o=await import(n.module);return e[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _B(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function jB(n,e,o){let r=await Promise.all(n.map(async t=>{let s=e.routes[t.route.id];if(s){let c=await LB(s,o);return c.links?c.links():[]}return[]}));return UB(r.flat(1).filter(_B).filter(t=>t.rel==="stylesheet"||t.rel==="preload").map(t=>t.rel==="stylesheet"?{...t,rel:"prefetch",as:"style"}:{...t,rel:"prefetch"}))}function Lk(n,e,o,r,t,s){let c=(d,f)=>o[f]?d.route.id!==o[f].route.id:!0,m=(d,f)=>{var S;return o[f].pathname!==d.pathname||((S=o[f].route.path)==null?void 0:S.endsWith("*"))&&o[f].params["*"]!==d.params["*"]};return s==="assets"?e.filter((d,f)=>c(d,f)||m(d,f)):s==="data"?e.filter((d,f)=>{var p;let S=r.routes[d.route.id];if(!S||!S.hasLoader)return!1;if(c(d,f)||m(d,f))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(t.pathname+t.search+t.hash,window.origin),currentParams:((p=o[0])==null?void 0:p.params)||{},nextUrl:new URL(n,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function zB(n,e,{includeHydrateFallback:o}={}){return $B(n.map(r=>{let t=e.routes[r.route.id];if(!t)return[];let s=[t.module];return t.clientActionModule&&(s=s.concat(t.clientActionModule)),t.clientLoaderModule&&(s=s.concat(t.clientLoaderModule)),o&&t.hydrateFallbackModule&&(s=s.concat(t.hydrateFallbackModule)),t.imports&&(s=s.concat(t.imports)),s}).flat(1))}function $B(n){return[...new Set(n)]}function FB(n){let e={},o=Object.keys(n).sort();for(let r of o)e[r]=n[r];return e}function UB(n,e){let o=new Set;return new Set(e),n.reduce((r,t)=>{let s=JSON.stringify(FB(t));return o.has(s)||(o.add(s),r.push({key:s,link:t})),r},[])}function MM(){let n=w.useContext(ko);return Zm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function VB(){let n=w.useContext(Pl);return Zm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Jm=w.createContext(void 0);Jm.displayName="FrameworkContext";function AM(){let n=w.useContext(Jm);return Zm(n,"You must render this element inside a <HydratedRouter> element"),n}function YB(n,e){let o=w.useContext(Jm),[r,t]=w.useState(!1),[s,c]=w.useState(!1),{onFocus:m,onBlur:d,onMouseEnter:f,onMouseLeave:S,onTouchStart:p}=e,v=w.useRef(null);w.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let C=k=>{k.forEach(O=>{c(O.isIntersecting)})},A=new IntersectionObserver(C,{threshold:.5});return v.current&&A.observe(v.current),()=>{A.disconnect()}}},[n]),w.useEffect(()=>{if(r){let C=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(C)}}},[r]);let T=()=>{t(!0)},M=()=>{t(!1),c(!1)};return o?n!=="intent"?[s,v,{}]:[s,v,{onFocus:Or(m,T),onBlur:Or(d,M),onMouseEnter:Or(f,T),onMouseLeave:Or(S,M),onTouchStart:Or(p,T)}]:[!1,v,{}]}function Or(n,e){return o=>{n&&n(o),o.defaultPrevented||e(o)}}function WB({page:n,...e}){let{router:o}=MM(),r=w.useMemo(()=>dM(o.routes,n,o.basename),[o.routes,n,o.basename]);return r?w.createElement(JB,{page:n,matches:r,...e}):null}function ZB(n){let{manifest:e,routeModules:o}=AM(),[r,t]=w.useState([]);return w.useEffect(()=>{let s=!1;return jB(n,e,o).then(c=>{s||t(c)}),()=>{s=!0}},[n,e,o]),r}function JB({page:n,matches:e,...o}){let r=ta(),{manifest:t,routeModules:s}=AM(),{basename:c}=MM(),{loaderData:m,matches:d}=VB(),f=w.useMemo(()=>Lk(n,e,d,t,r,"data"),[n,e,d,t,r]),S=w.useMemo(()=>Lk(n,e,d,t,r,"assets"),[n,e,d,t,r]),p=w.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let M=new Set,C=!1;if(e.forEach(k=>{var D;let O=t.routes[k.route.id];!O||!O.hasLoader||(!f.some(P=>P.route.id===k.route.id)&&k.route.id in m&&((D=s[k.route.id])!=null&&D.shouldRevalidate)||O.hasClientLoader?C=!0:M.add(k.route.id))}),M.size===0)return[];let A=xB(n,c,"data");return C&&M.size>0&&A.searchParams.set("_routes",e.filter(k=>M.has(k.route.id)).map(k=>k.route.id).join(",")),[A.pathname+A.search]},[c,m,r,t,f,e,n,s]),v=w.useMemo(()=>zB(S,t),[S,t]),T=ZB(S);return w.createElement(w.Fragment,null,p.map(M=>w.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...o})),v.map(M=>w.createElement("link",{key:M,rel:"modulepreload",href:M,...o})),T.map(({key:M,link:C})=>w.createElement("link",{key:M,nonce:o.nonce,...C})))}function XB(...n){return e=>{n.forEach(o=>{typeof o=="function"?o(e):o!=null&&(o.current=e)})}}var DM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{DM&&(window.__reactRouterVersion="7.8.0")}catch{}function qB({basename:n,children:e,window:o}){let r=w.useRef();r.current==null&&(r.current=_R({window:o,v5Compat:!0}));let t=r.current,[s,c]=w.useState({action:t.action,location:t.location}),m=w.useCallback(d=>{w.startTransition(()=>c(d))},[c]);return w.useLayoutEffect(()=>t.listen(m),[t,m]),w.createElement(CB,{basename:n,children:e,location:s.location,navigationType:s.action,navigator:t})}var wM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ia=w.forwardRef(function({onClick:e,discover:o="render",prefetch:r="none",relative:t,reloadDocument:s,replace:c,state:m,target:d,to:f,preventScrollReset:S,viewTransition:p,...v},T){let{basename:M}=w.useContext(Rt),C=typeof f=="string"&&wM.test(f),A,k=!1;if(typeof f=="string"&&C&&(A=f,DM))try{let tn=new URL(window.location.href),ln=f.startsWith("//")?new URL(tn.protocol+f):new URL(f),fn=Xt(ln.pathname,M);ln.origin===tn.origin&&fn!=null?f=fn+ln.search+ln.hash:k=!0}catch{Kt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=mB(f,{relative:t}),[D,P,I]=YB(r,v),j=tP(f,{replace:c,state:m,target:d,preventScrollReset:S,relative:t,viewTransition:p});function z(tn){e&&e(tn),tn.defaultPrevented||j(tn)}let U=w.createElement("a",{...v,...I,href:A||O,onClick:k||s?e:z,ref:XB(T,P),target:d,"data-discover":!C&&o==="render"?"true":void 0});return D&&!C?w.createElement(w.Fragment,null,U,w.createElement(WB,{page:O})):U});Ia.displayName="Link";var QB=w.forwardRef(function({"aria-current":e="page",caseSensitive:o=!1,className:r="",end:t=!1,style:s,to:c,viewTransition:m,children:d,...f},S){let p=au(c,{relative:f.relative}),v=ta(),T=w.useContext(Pl),{navigator:M,basename:C}=w.useContext(Rt),A=T!=null&&uP(p)&&m===!0,k=M.encodeLocation?M.encodeLocation(p).pathname:p.pathname,O=v.pathname,D=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;o||(O=O.toLowerCase(),D=D?D.toLowerCase():null,k=k.toLowerCase()),D&&C&&(D=Xt(D,C)||D);const P=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let I=O===k||!t&&O.startsWith(k)&&O.charAt(P)==="/",j=D!=null&&(D===k||!t&&D.startsWith(k)&&D.charAt(k.length)==="/"),z={isActive:I,isPending:j,isTransitioning:A},U=I?e:void 0,tn;typeof r=="function"?tn=r(z):tn=[r,I?"active":null,j?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let ln=typeof s=="function"?s(z):s;return w.createElement(Ia,{...f,"aria-current":U,className:tn,ref:S,style:ln,to:c,viewTransition:m},typeof d=="function"?d(z):d)});QB.displayName="NavLink";var nP=w.forwardRef(({discover:n="render",fetcherKey:e,navigate:o,reloadDocument:r,replace:t,state:s,method:c=Js,action:m,onSubmit:d,relative:f,preventScrollReset:S,viewTransition:p,...v},T)=>{let M=oP(),C=rP(m,{relative:f}),A=c.toLowerCase()==="get"?"get":"post",k=typeof m=="string"&&wM.test(m),O=D=>{if(d&&d(D),D.defaultPrevented)return;D.preventDefault();let P=D.nativeEvent.submitter,I=(P==null?void 0:P.getAttribute("formmethod"))||c;M(P||D.currentTarget,{fetcherKey:e,method:I,navigate:o,replace:t,state:s,relative:f,preventScrollReset:S,viewTransition:p})};return w.createElement("form",{ref:T,method:A,action:C,onSubmit:r?d:O,...v,"data-discover":!k&&n==="render"?"true":void 0})});nP.displayName="Form";function eP(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OM(n){let e=w.useContext(ko);return Xn(e,eP(n)),e}function tP(n,{target:e,replace:o,state:r,preventScrollReset:t,relative:s,viewTransition:c}={}){let m=Vm(),d=ta(),f=au(n,{relative:s});return w.useCallback(S=>{if(EB(S,e)){S.preventDefault();let p=o!==void 0?o:_r(d)===_r(f);m(n,{replace:p,state:r,preventScrollReset:t,relative:s,viewTransition:c})}},[d,m,f,o,r,e,n,t,s,c])}var aP=0,iP=()=>`__${String(++aP)}__`;function oP(){let{router:n}=OM("useSubmit"),{basename:e}=w.useContext(Rt),o=AB();return w.useCallback(async(r,t={})=>{let{action:s,method:c,encType:m,formData:d,body:f}=GB(r,e);if(t.navigate===!1){let S=t.fetcherKey||iP();await n.fetch(S,o,t.action||s,{preventScrollReset:t.preventScrollReset,formData:d,body:f,formMethod:t.method||c,formEncType:t.encType||m,flushSync:t.flushSync})}else await n.navigate(t.action||s,{preventScrollReset:t.preventScrollReset,formData:d,body:f,formMethod:t.method||c,formEncType:t.encType||m,replace:t.replace,state:t.state,fromRouteId:o,flushSync:t.flushSync,viewTransition:t.viewTransition})},[n,e,o])}function rP(n,{relative:e}={}){let{basename:o}=w.useContext(Rt),r=w.useContext(ea);Xn(r,"useFormAction must be used inside a RouteContext");let[t]=r.matches.slice(-1),s={...au(n||".",{relative:e})},c=ta();if(n==null){s.search=c.search;let m=new URLSearchParams(s.search),d=m.getAll("index");if(d.some(S=>S==="")){m.delete("index"),d.filter(p=>p).forEach(p=>m.append("index",p));let S=m.toString();s.search=S?`?${S}`:""}}return(!n||n===".")&&t.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(s.pathname=s.pathname==="/"?o:Zt([o,s.pathname])),_r(s)}function uP(n,{relative:e}={}){let o=w.useContext(yM);Xn(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=OM("useViewTransitionState"),t=au(n,{relative:e});if(!o.isTransitioning)return!1;let s=Xt(o.currentLocation.pathname,r)||o.currentLocation.pathname,c=Xt(o.nextLocation.pathname,r)||o.nextLocation.pathname;return ul(t.pathname,c)!=null||ul(t.pathname,s)!=null}var sP=hM();const lP="modulepreload",cP=function(n){return"/Guess-The-Anime-OP/"+n},_k={},hP=function(e,o,r){let t=Promise.resolve();if(o&&o.length>0){let c=function(f){return Promise.all(f.map(S=>Promise.resolve(S).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),d=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));t=c(o.map(f=>{if(f=cP(f),f in _k)return;_k[f]=!0;const S=f.endsWith(".css"),p=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${p}`))return;const v=document.createElement("link");if(v.rel=S?"stylesheet":lP,S||(v.as="script"),v.crossOrigin="",v.href=f,d&&v.setAttribute("nonce",d),document.head.appendChild(v),S)return new Promise((T,M)=>{v.addEventListener("load",T),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(c){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=c,window.dispatchEvent(m),!m.defaultPrevented)throw c}return t.then(c=>{for(const m of c||[])m.status==="rejected"&&s(m.reason);return e().catch(s)})},dP="/Guess-The-Anime-OP/flower%20field.jpg",mP="/Guess-The-Anime-OP/frieren%20in%20river.png";function CM(n=768){const e=`(max-width: ${n}px)`,[o,r]=w.useState(()=>window.matchMedia(e).matches);return w.useEffect(()=>{const t=window.matchMedia(e),s=c=>{r(c.matches)};return t.addEventListener("change",s),()=>t.removeEventListener("change",s)},[e]),o}function fP(){const[n,e]=w.useState(30),o=CM();return w.useEffect(()=>{},[n]),w.useEffect(()=>{e(o?15:30)},[o]),$.jsx("div",{className:"stars",children:[...Array(n)].map((r,t)=>{const s=t+1,c=.2+Math.random()*.2,m=3.5+Math.random();let d=Math.random()>.5,f=-10+Math.random()*45;Math.random()>.5&&(f=75+Math.random()*35);const S=-10+Math.random()*110;return $.jsxs("div",{className:"star",style:{width:`max(${c}vw, 3px)`,animation:`spin ${m}s linear infinite ${d?"reverse":"normal"}`,top:`${f}%`,left:`${S}%`},children:[$.jsx("span",{className:"stick one"}),$.jsx("span",{className:"stick two"})]},`star_${s}`)})})}const eo=1e3,gP=[$.jsx("li",{children:$.jsx(Ia,{to:"/",children:"Home"},"link-maincontent")}),$.jsx("li",{children:$.jsx(Ia,{to:"/about",children:"About"},"link-about")}),$.jsx("li",{children:$.jsx(Ia,{to:"/rules",children:"Rules"},"link-rules")}),$.jsx("li",{children:$.jsx(Ia,{to:"/faq",children:"FAQ"},"link-faq")}),$.jsx("li",{children:$.jsx(Ia,{to:"/stats",children:"Stats"},"link-stats")})];function SP({mode:n,setMode:e}){const o=()=>{e(n==="Opening"?"Ending":"Opening")},r=n==="Opening"?mP:dP;return $.jsx("header",{className:"Header",children:$.jsx("div",{className:"BannerWrapper",children:$.jsxs("div",{className:"Banner",style:{backgroundImage:`url(${r})`},children:[$.jsxs("h1",{className:"Title",children:[$.jsxs("pre",{style:{textAlign:"center"},children:["Guess the Anime"," "]}),$.jsxs("span",{className:"OpeningEnding",onClick:o,children:[n,"!",$.jsx(fP,{})]})]}),$.jsx("nav",{className:"NavMenu",children:$.jsx("ul",{children:gP})})]})})})}const pP="Opening",Xm=w.createContext(void 0);Xm.displayName="ModeContext";const iu=()=>{const n=w.useContext(Xm);if(!n)throw new Error("useModeContext must be used within the provider!");return n},yP=({initial:n=pP,children:e})=>{const[o,r]=w.useState(n),t=w.useCallback(c=>r(c),[]),s=w.useMemo(()=>({mode:o,updateMode:t}),[o]);return $.jsx(Xm.Provider,{value:s,children:e})},qm=["Top 1000 by Anime Score","Random Preset 1","Random Preset 2","Random Preset 3","Top 1000 by Song Viewcount","Random Preset 4","Random Preset 5","Random Preset 6"],vP=["Opening","Ending"],kP=["Correct","Incorrect","Attempting","None"],bP="Top 1000 by Anime Score",Qm=w.createContext(void 0);Qm.displayName="FilterContext";const ou=()=>{const n=w.useContext(Qm);if(!n)throw new Error("useFilterContext must be used within the provider!");return n},TP=({children:n,initial:e=bP})=>{const[o,r]=w.useState(e),t=w.useCallback(c=>r(c),[]),s=w.useMemo(()=>({filter:o,updateFilter:t}),[o]);return $.jsx(Qm.Provider,{value:s,children:n})};function si(n){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},si(n)}function MP(n,e){if(si(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var r=o.call(n,e);if(si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function IM(n){var e=MP(n,"string");return si(e)=="symbol"?e:e+""}function Br(n,e,o){return(e=IM(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function jk(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,r)}return o}function cn(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?jk(Object(o),!0).forEach(function(r){Br(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):jk(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function AP(n){if(Array.isArray(n))return n}function DP(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r,t,s,c,m=[],d=!0,f=!1;try{if(s=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;d=!1}else for(;!(d=(r=s.call(o)).done)&&(m.push(r.value),m.length!==e);d=!0);}catch(S){f=!0,t=S}finally{try{if(!d&&o.return!=null&&(c=o.return(),Object(c)!==c))return}finally{if(f)throw t}}return m}}function im(n,e){(e==null||e>n.length)&&(e=n.length);for(var o=0,r=Array(e);o<e;o++)r[o]=n[o];return r}function KM(n,e){if(n){if(typeof n=="string")return im(n,e);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?im(n,e):void 0}}function wP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(n,e){return AP(n)||DP(n,e)||KM(n,e)||wP()}function OP(n,e){if(n==null)return{};var o={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;o[r]=n[r]}return o}function aa(n,e){if(n==null)return{};var o,r,t=OP(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)o=s[r],e.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var CP=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function IP(n){var e=n.defaultInputValue,o=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,s=n.defaultValue,c=s===void 0?null:s,m=n.inputValue,d=n.menuIsOpen,f=n.onChange,S=n.onInputChange,p=n.onMenuClose,v=n.onMenuOpen,T=n.value,M=aa(n,CP),C=w.useState(m!==void 0?m:o),A=Jt(C,2),k=A[0],O=A[1],D=w.useState(d!==void 0?d:t),P=Jt(D,2),I=P[0],j=P[1],z=w.useState(T!==void 0?T:c),U=Jt(z,2),tn=U[0],ln=U[1],fn=w.useCallback(function(en,vn){typeof f=="function"&&f(en,vn),ln(en)},[f]),nn=w.useCallback(function(en,vn){var R;typeof S=="function"&&(R=S(en,vn)),O(R!==void 0?R:en)},[S]),yn=w.useCallback(function(){typeof v=="function"&&v(),j(!0)},[v]),In=w.useCallback(function(){typeof p=="function"&&p(),j(!1)},[p]),gn=m!==void 0?m:k,L=d!==void 0?d:I,Z=T!==void 0?T:tn;return cn(cn({},M),{},{inputValue:gn,menuIsOpen:L,onChange:fn,onInputChange:nn,onMenuClose:In,onMenuOpen:yn,value:Z})}function mn(){return mn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)({}).hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},mn.apply(null,arguments)}function KP(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function zk(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,IM(r.key),r)}}function RP(n,e,o){return e&&zk(n.prototype,e),o&&zk(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function om(n,e){return om=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},om(n,e)}function BP(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&om(n,e)}function sl(n){return sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},sl(n)}function RM(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RM=function(){return!!n})()}function PP(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function EP(n,e){if(e&&(si(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PP(n)}function NP(n){var e=RM();return function(){var o,r=sl(n);if(e){var t=sl(this).constructor;o=Reflect.construct(r,arguments,t)}else o=r.apply(this,arguments);return EP(this,o)}}function HP(n){if(Array.isArray(n))return im(n)}function GP(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function xP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nf(n){return HP(n)||GP(n)||KM(n)||xP()}function LP(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function _P(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var jP=function(){function n(o){var r=this;this._insertTag=function(t){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(t,s),r.tags.push(t)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_P(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var s=LP(t);try{s.insertRule(r,s.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var t;return(t=r.parentNode)==null?void 0:t.removeChild(r)}),this.tags=[],this.ctr=0},n}(),Oe="-ms-",ll="-moz-",Nn="-webkit-",BM="comm",ef="rule",tf="decl",zP="@import",PM="@keyframes",$P="@layer",FP=Math.abs,Nl=String.fromCharCode,UP=Object.assign;function VP(n,e){return Me(n,0)^45?(((e<<2^Me(n,0))<<2^Me(n,1))<<2^Me(n,2))<<2^Me(n,3):0}function EM(n){return n.trim()}function YP(n,e){return(n=e.exec(n))?n[0]:n}function Hn(n,e,o){return n.replace(e,o)}function rm(n,e){return n.indexOf(e)}function Me(n,e){return n.charCodeAt(e)|0}function jr(n,e,o){return n.slice(e,o)}function Mt(n){return n.length}function af(n){return n.length}function Ks(n,e){return e.push(n),n}function WP(n,e){return n.map(e).join("")}var Hl=1,ho=1,NM=0,xe=0,ce=0,bo="";function Gl(n,e,o,r,t,s,c){return{value:n,root:e,parent:o,type:r,props:t,children:s,line:Hl,column:ho,length:c,return:""}}function Cr(n,e){return UP(Gl("",null,null,"",null,null,0),n,{length:-n.length},e)}function ZP(){return ce}function JP(){return ce=xe>0?Me(bo,--xe):0,ho--,ce===10&&(ho=1,Hl--),ce}function Je(){return ce=xe<NM?Me(bo,xe++):0,ho++,ce===10&&(ho=1,Hl++),ce}function Dt(){return Me(bo,xe)}function qs(){return xe}function ru(n,e){return jr(bo,n,e)}function zr(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function HM(n){return Hl=ho=1,NM=Mt(bo=n),xe=0,[]}function GM(n){return bo="",n}function Qs(n){return EM(ru(xe-1,um(n===91?n+2:n===40?n+1:n)))}function XP(n){for(;(ce=Dt())&&ce<33;)Je();return zr(n)>2||zr(ce)>3?"":" "}function qP(n,e){for(;--e&&Je()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return ru(n,qs()+(e<6&&Dt()==32&&Je()==32))}function um(n){for(;Je();)switch(ce){case n:return xe;case 34:case 39:n!==34&&n!==39&&um(ce);break;case 40:n===41&&um(n);break;case 92:Je();break}return xe}function QP(n,e){for(;Je()&&n+ce!==57;)if(n+ce===84&&Dt()===47)break;return"/*"+ru(e,xe-1)+"*"+Nl(n===47?n:Je())}function nE(n){for(;!zr(Dt());)Je();return ru(n,xe)}function eE(n){return GM(nl("",null,null,null,[""],n=HM(n),0,[0],n))}function nl(n,e,o,r,t,s,c,m,d){for(var f=0,S=0,p=c,v=0,T=0,M=0,C=1,A=1,k=1,O=0,D="",P=t,I=s,j=r,z=D;A;)switch(M=O,O=Je()){case 40:if(M!=108&&Me(z,p-1)==58){rm(z+=Hn(Qs(O),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:z+=Qs(O);break;case 9:case 10:case 13:case 32:z+=XP(M);break;case 92:z+=qP(qs()-1,7);continue;case 47:switch(Dt()){case 42:case 47:Ks(tE(QP(Je(),qs()),e,o),d);break;default:z+="/"}break;case 123*C:m[f++]=Mt(z)*k;case 125*C:case 59:case 0:switch(O){case 0:case 125:A=0;case 59+S:k==-1&&(z=Hn(z,/\f/g,"")),T>0&&Mt(z)-p&&Ks(T>32?Fk(z+";",r,o,p-1):Fk(Hn(z," ","")+";",r,o,p-2),d);break;case 59:z+=";";default:if(Ks(j=$k(z,e,o,f,S,t,m,D,P=[],I=[],p),s),O===123)if(S===0)nl(z,e,j,j,P,s,p,m,I);else switch(v===99&&Me(z,3)===110?100:v){case 100:case 108:case 109:case 115:nl(n,j,j,r&&Ks($k(n,j,j,0,0,t,m,D,t,P=[],p),I),t,I,p,m,r?P:I);break;default:nl(z,j,j,j,[""],I,0,m,I)}}f=S=T=0,C=k=1,D=z="",p=c;break;case 58:p=1+Mt(z),T=M;default:if(C<1){if(O==123)--C;else if(O==125&&C++==0&&JP()==125)continue}switch(z+=Nl(O),O*C){case 38:k=S>0?1:(z+="\f",-1);break;case 44:m[f++]=(Mt(z)-1)*k,k=1;break;case 64:Dt()===45&&(z+=Qs(Je())),v=Dt(),S=p=Mt(D=z+=nE(qs())),O++;break;case 45:M===45&&Mt(z)==2&&(C=0)}}return s}function $k(n,e,o,r,t,s,c,m,d,f,S){for(var p=t-1,v=t===0?s:[""],T=af(v),M=0,C=0,A=0;M<r;++M)for(var k=0,O=jr(n,p+1,p=FP(C=c[M])),D=n;k<T;++k)(D=EM(C>0?v[k]+" "+O:Hn(O,/&\f/g,v[k])))&&(d[A++]=D);return Gl(n,e,o,t===0?ef:m,d,f,S)}function tE(n,e,o){return Gl(n,e,o,BM,Nl(ZP()),jr(n,2,-2),0)}function Fk(n,e,o,r){return Gl(n,e,o,tf,jr(n,0,r),jr(n,r+1,-1),r)}function so(n,e){for(var o="",r=af(n),t=0;t<r;t++)o+=e(n[t],t,n,e)||"";return o}function aE(n,e,o,r){switch(n.type){case $P:if(n.children.length)break;case zP:case tf:return n.return=n.return||n.value;case BM:return"";case PM:return n.return=n.value+"{"+so(n.children,r)+"}";case ef:n.value=n.props.join(",")}return Mt(o=so(n.children,r))?n.return=n.value+"{"+o+"}":""}function iE(n){var e=af(n);return function(o,r,t,s){for(var c="",m=0;m<e;m++)c+=n[m](o,r,t,s)||"";return c}}function oE(n){return function(e){e.root||(e=e.return)&&n(e)}}function rE(n){var e=Object.create(null);return function(o){return e[o]===void 0&&(e[o]=n(o)),e[o]}}var uE=function(e,o,r){for(var t=0,s=0;t=s,s=Dt(),t===38&&s===12&&(o[r]=1),!zr(s);)Je();return ru(e,xe)},sE=function(e,o){var r=-1,t=44;do switch(zr(t)){case 0:t===38&&Dt()===12&&(o[r]=1),e[r]+=uE(xe-1,o,r);break;case 2:e[r]+=Qs(t);break;case 4:if(t===44){e[++r]=Dt()===58?"&\f":"",o[r]=e[r].length;break}default:e[r]+=Nl(t)}while(t=Je());return e},lE=function(e,o){return GM(sE(HM(e),o))},Uk=new WeakMap,cE=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var o=e.value,r=e.parent,t=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&o.charCodeAt(0)!==58&&!Uk.get(r))&&!t){Uk.set(e,!0);for(var s=[],c=lE(o,s),m=r.props,d=0,f=0;d<c.length;d++)for(var S=0;S<m.length;S++,f++)e.props[f]=s[d]?c[d].replace(/&\f/g,m[S]):m[S]+" "+c[d]}}},hE=function(e){if(e.type==="decl"){var o=e.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(e.return="",e.value="")}};function xM(n,e){switch(VP(n,e)){case 5103:return Nn+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nn+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nn+n+ll+n+Oe+n+n;case 6828:case 4268:return Nn+n+Oe+n+n;case 6165:return Nn+n+Oe+"flex-"+n+n;case 5187:return Nn+n+Hn(n,/(\w+).+(:[^]+)/,Nn+"box-$1$2"+Oe+"flex-$1$2")+n;case 5443:return Nn+n+Oe+"flex-item-"+Hn(n,/flex-|-self/,"")+n;case 4675:return Nn+n+Oe+"flex-line-pack"+Hn(n,/align-content|flex-|-self/,"")+n;case 5548:return Nn+n+Oe+Hn(n,"shrink","negative")+n;case 5292:return Nn+n+Oe+Hn(n,"basis","preferred-size")+n;case 6060:return Nn+"box-"+Hn(n,"-grow","")+Nn+n+Oe+Hn(n,"grow","positive")+n;case 4554:return Nn+Hn(n,/([^-])(transform)/g,"$1"+Nn+"$2")+n;case 6187:return Hn(Hn(Hn(n,/(zoom-|grab)/,Nn+"$1"),/(image-set)/,Nn+"$1"),n,"")+n;case 5495:case 3959:return Hn(n,/(image-set\([^]*)/,Nn+"$1$`$1");case 4968:return Hn(Hn(n,/(.+:)(flex-)?(.*)/,Nn+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nn+n+n;case 4095:case 3583:case 4068:case 2532:return Hn(n,/(.+)-inline(.+)/,Nn+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(n)-1-e>6)switch(Me(n,e+1)){case 109:if(Me(n,e+4)!==45)break;case 102:return Hn(n,/(.+:)(.+)-([^]+)/,"$1"+Nn+"$2-$3$1"+ll+(Me(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~rm(n,"stretch")?xM(Hn(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Me(n,e+1)!==115)break;case 6444:switch(Me(n,Mt(n)-3-(~rm(n,"!important")&&10))){case 107:return Hn(n,":",":"+Nn)+n;case 101:return Hn(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Nn+(Me(n,14)===45?"inline-":"")+"box$3$1"+Nn+"$2$3$1"+Oe+"$2box$3")+n}break;case 5936:switch(Me(n,e+11)){case 114:return Nn+n+Oe+Hn(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nn+n+Oe+Hn(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nn+n+Oe+Hn(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Nn+n+Oe+n+n}return n}var dE=function(e,o,r,t){if(e.length>-1&&!e.return)switch(e.type){case tf:e.return=xM(e.value,e.length);break;case PM:return so([Cr(e,{value:Hn(e.value,"@","@"+Nn)})],t);case ef:if(e.length)return WP(e.props,function(s){switch(YP(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return so([Cr(e,{props:[Hn(s,/:(read-\w+)/,":"+ll+"$1")]})],t);case"::placeholder":return so([Cr(e,{props:[Hn(s,/:(plac\w+)/,":"+Nn+"input-$1")]}),Cr(e,{props:[Hn(s,/:(plac\w+)/,":"+ll+"$1")]}),Cr(e,{props:[Hn(s,/:(plac\w+)/,Oe+"input-$1")]})],t)}return""})}},mE=[dE],fE=function(e){var o=e.key;if(o==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(C){var A=C.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(C),C.setAttribute("data-s",""))})}var t=e.stylisPlugins||mE,s={},c,m=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(C){for(var A=C.getAttribute("data-emotion").split(" "),k=1;k<A.length;k++)s[A[k]]=!0;m.push(C)});var d,f=[cE,hE];{var S,p=[aE,oE(function(C){S.insert(C)})],v=iE(f.concat(t,p)),T=function(A){return so(eE(A),v)};d=function(A,k,O,D){S=O,T(A?A+"{"+k.styles+"}":k.styles),D&&(M.inserted[k.name]=!0)}}var M={key:o,sheet:new jP({key:o,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return M.sheet.hydrate(m),M},Dd={exports:{}},Gn={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vk;function gE(){if(Vk)return Gn;Vk=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,S=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,v=n?Symbol.for("react.suspense_list"):60120,T=n?Symbol.for("react.memo"):60115,M=n?Symbol.for("react.lazy"):60116,C=n?Symbol.for("react.block"):60121,A=n?Symbol.for("react.fundamental"):60117,k=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function D(I){if(typeof I=="object"&&I!==null){var j=I.$$typeof;switch(j){case e:switch(I=I.type,I){case d:case f:case r:case s:case t:case p:return I;default:switch(I=I&&I.$$typeof,I){case m:case S:case M:case T:case c:return I;default:return j}}case o:return j}}}function P(I){return D(I)===f}return Gn.AsyncMode=d,Gn.ConcurrentMode=f,Gn.ContextConsumer=m,Gn.ContextProvider=c,Gn.Element=e,Gn.ForwardRef=S,Gn.Fragment=r,Gn.Lazy=M,Gn.Memo=T,Gn.Portal=o,Gn.Profiler=s,Gn.StrictMode=t,Gn.Suspense=p,Gn.isAsyncMode=function(I){return P(I)||D(I)===d},Gn.isConcurrentMode=P,Gn.isContextConsumer=function(I){return D(I)===m},Gn.isContextProvider=function(I){return D(I)===c},Gn.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===e},Gn.isForwardRef=function(I){return D(I)===S},Gn.isFragment=function(I){return D(I)===r},Gn.isLazy=function(I){return D(I)===M},Gn.isMemo=function(I){return D(I)===T},Gn.isPortal=function(I){return D(I)===o},Gn.isProfiler=function(I){return D(I)===s},Gn.isStrictMode=function(I){return D(I)===t},Gn.isSuspense=function(I){return D(I)===p},Gn.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===r||I===f||I===s||I===t||I===p||I===v||typeof I=="object"&&I!==null&&(I.$$typeof===M||I.$$typeof===T||I.$$typeof===c||I.$$typeof===m||I.$$typeof===S||I.$$typeof===A||I.$$typeof===k||I.$$typeof===O||I.$$typeof===C)},Gn.typeOf=D,Gn}var Yk;function SE(){return Yk||(Yk=1,Dd.exports=gE()),Dd.exports}var wd,Wk;function pE(){if(Wk)return wd;Wk=1;var n=SE(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=r,s[n.Memo]=t;function c(M){return n.isMemo(M)?t:s[M.$$typeof]||e}var m=Object.defineProperty,d=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;function T(M,C,A){if(typeof C!="string"){if(v){var k=p(C);k&&k!==v&&T(M,k,A)}var O=d(C);f&&(O=O.concat(f(C)));for(var D=c(M),P=c(C),I=0;I<O.length;++I){var j=O[I];if(!o[j]&&!(A&&A[j])&&!(P&&P[j])&&!(D&&D[j])){var z=S(C,j);try{m(M,j,z)}catch{}}}}return M}return wd=T,wd}pE();var yE=!0;function vE(n,e,o){var r="";return o.split(" ").forEach(function(t){n[t]!==void 0?e.push(n[t]+";"):t&&(r+=t+" ")}),r}var LM=function(e,o,r){var t=e.key+"-"+o.name;(r===!1||yE===!1)&&e.registered[t]===void 0&&(e.registered[t]=o.styles)},kE=function(e,o,r){LM(e,o,r);var t=e.key+"-"+o.name;if(e.inserted[o.name]===void 0){var s=o;do e.insert(o===s?"."+t:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function bE(n){for(var e=0,o,r=0,t=n.length;t>=4;++r,t-=4)o=n.charCodeAt(r)&255|(n.charCodeAt(++r)&255)<<8|(n.charCodeAt(++r)&255)<<16|(n.charCodeAt(++r)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,e=(o&65535)*1540483477+((o>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(t){case 3:e^=(n.charCodeAt(r+2)&255)<<16;case 2:e^=(n.charCodeAt(r+1)&255)<<8;case 1:e^=n.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var TE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ME=/[A-Z]|^ms/g,AE=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_M=function(e){return e.charCodeAt(1)===45},Zk=function(e){return e!=null&&typeof e!="boolean"},Od=rE(function(n){return _M(n)?n:n.replace(ME,"-$&").toLowerCase()}),Jk=function(e,o){switch(e){case"animation":case"animationName":if(typeof o=="string")return o.replace(AE,function(r,t,s){return At={name:t,styles:s,next:At},t})}return TE[e]!==1&&!_M(e)&&typeof o=="number"&&o!==0?o+"px":o};function $r(n,e,o){if(o==null)return"";var r=o;if(r.__emotion_styles!==void 0)return r;switch(typeof o){case"boolean":return"";case"object":{var t=o;if(t.anim===1)return At={name:t.name,styles:t.styles,next:At},t.name;var s=o;if(s.styles!==void 0){var c=s.next;if(c!==void 0)for(;c!==void 0;)At={name:c.name,styles:c.styles,next:At},c=c.next;var m=s.styles+";";return m}return DE(n,e,o)}case"function":{if(n!==void 0){var d=At,f=o(n);return At=d,$r(n,e,f)}break}}var S=o;return S}function DE(n,e,o){var r="";if(Array.isArray(o))for(var t=0;t<o.length;t++)r+=$r(n,e,o[t])+";";else for(var s in o){var c=o[s];if(typeof c!="object"){var m=c;Zk(m)&&(r+=Od(s)+":"+Jk(s,m)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&e==null)for(var d=0;d<c.length;d++)Zk(c[d])&&(r+=Od(s)+":"+Jk(s,c[d])+";");else{var f=$r(n,e,c);switch(s){case"animation":case"animationName":{r+=Od(s)+":"+f+";";break}default:r+=s+"{"+f+"}"}}}return r}var Xk=/label:\s*([^\s;{]+)\s*(;|$)/g,At;function jM(n,e,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var r=!0,t="";At=void 0;var s=n[0];if(s==null||s.raw===void 0)r=!1,t+=$r(o,e,s);else{var c=s;t+=c[0]}for(var m=1;m<n.length;m++)if(t+=$r(o,e,n[m]),r){var d=s;t+=d[m]}Xk.lastIndex=0;for(var f="",S;(S=Xk.exec(t))!==null;)f+="-"+S[1];var p=bE(t)+f;return{name:p,styles:t,next:At}}var wE=function(e){return e()},OE=Ck.useInsertionEffect?Ck.useInsertionEffect:!1,CE=OE||wE,zM=w.createContext(typeof HTMLElement<"u"?fE({key:"css"}):null);zM.Provider;var IE=function(e){return w.forwardRef(function(o,r){var t=w.useContext(zM);return e(o,t,r)})},KE=w.createContext({}),of={}.hasOwnProperty,sm="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",RE=function(e,o){var r={};for(var t in o)of.call(o,t)&&(r[t]=o[t]);return r[sm]=e,r},BE=function(e){var o=e.cache,r=e.serialized,t=e.isStringTag;return LM(o,r,t),CE(function(){return kE(o,r,t)}),null},PE=IE(function(n,e,o){var r=n.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var t=n[sm],s=[r],c="";typeof n.className=="string"?c=vE(e.registered,s,n.className):n.className!=null&&(c=n.className+" ");var m=jM(s,void 0,w.useContext(KE));c+=e.key+"-"+m.name;var d={};for(var f in n)of.call(n,f)&&f!=="css"&&f!==sm&&(d[f]=n[f]);return d.className=c,o&&(d.ref=o),w.createElement(w.Fragment,null,w.createElement(BE,{cache:e,serialized:m,isStringTag:typeof t=="string"}),w.createElement(t,d))}),EE=PE,sn=function(e,o){var r=arguments;if(o==null||!of.call(o,"css"))return w.createElement.apply(void 0,r);var t=r.length,s=new Array(t);s[0]=EE,s[1]=RE(e,o);for(var c=2;c<t;c++)s[c]=r[c];return w.createElement.apply(null,s)};(function(n){var e;e||(e=n.JSX||(n.JSX={}))})(sn||(sn={}));function rf(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return jM(e)}function NE(){var n=rf.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function HE(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const GE=Math.min,xE=Math.max,cl=Math.round,Rs=Math.floor,hl=n=>({x:n,y:n});function LE(n){const{x:e,y:o,width:r,height:t}=n;return{width:r,height:t,top:o,left:e,right:e+r,bottom:o+t,x:e,y:o}}function xl(){return typeof window<"u"}function $M(n){return UM(n)?(n.nodeName||"").toLowerCase():"#document"}function qt(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function FM(n){var e;return(e=(UM(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function UM(n){return xl()?n instanceof Node||n instanceof qt(n).Node:!1}function _E(n){return xl()?n instanceof Element||n instanceof qt(n).Element:!1}function uf(n){return xl()?n instanceof HTMLElement||n instanceof qt(n).HTMLElement:!1}function qk(n){return!xl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof qt(n).ShadowRoot}const jE=new Set(["inline","contents"]);function VM(n){const{overflow:e,overflowX:o,overflowY:r,display:t}=sf(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!jE.has(t)}function zE(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const $E=new Set(["html","body","#document"]);function FE(n){return $E.has($M(n))}function sf(n){return qt(n).getComputedStyle(n)}function UE(n){if($M(n)==="html")return n;const e=n.assignedSlot||n.parentNode||qk(n)&&n.host||FM(n);return qk(e)?e.host:e}function YM(n){const e=UE(n);return FE(e)?n.ownerDocument?n.ownerDocument.body:n.body:uf(e)&&VM(e)?e:YM(e)}function dl(n,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=YM(n),s=t===((r=n.ownerDocument)==null?void 0:r.body),c=qt(t);if(s){const m=lm(c);return e.concat(c,c.visualViewport||[],VM(t)?t:[],m&&o?dl(m):[])}return e.concat(t,dl(t,[],o))}function lm(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function VE(n){const e=sf(n);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=uf(n),s=t?n.offsetWidth:o,c=t?n.offsetHeight:r,m=cl(o)!==s||cl(r)!==c;return m&&(o=s,r=c),{width:o,height:r,$:m}}function lf(n){return _E(n)?n:n.contextElement}function Qk(n){const e=lf(n);if(!uf(e))return hl(1);const o=e.getBoundingClientRect(),{width:r,height:t,$:s}=VE(e);let c=(s?cl(o.width):o.width)/r,m=(s?cl(o.height):o.height)/t;return(!c||!Number.isFinite(c))&&(c=1),(!m||!Number.isFinite(m))&&(m=1),{x:c,y:m}}const YE=hl(0);function WE(n){const e=qt(n);return!zE()||!e.visualViewport?YE:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ZE(n,e,o){return!1}function nb(n,e,o,r){e===void 0&&(e=!1);const t=n.getBoundingClientRect(),s=lf(n);let c=hl(1);e&&(c=Qk(n));const m=ZE()?WE(s):hl(0);let d=(t.left+m.x)/c.x,f=(t.top+m.y)/c.y,S=t.width/c.x,p=t.height/c.y;if(s){const v=qt(s),T=r;let M=v,C=lm(M);for(;C&&r&&T!==M;){const A=Qk(C),k=C.getBoundingClientRect(),O=sf(C),D=k.left+(C.clientLeft+parseFloat(O.paddingLeft))*A.x,P=k.top+(C.clientTop+parseFloat(O.paddingTop))*A.y;d*=A.x,f*=A.y,S*=A.x,p*=A.y,d+=D,f+=P,M=qt(C),C=lm(M)}}return LE({width:S,height:p,x:d,y:f})}function WM(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function JE(n,e){let o=null,r;const t=FM(n);function s(){var m;clearTimeout(r),(m=o)==null||m.disconnect(),o=null}function c(m,d){m===void 0&&(m=!1),d===void 0&&(d=1),s();const f=n.getBoundingClientRect(),{left:S,top:p,width:v,height:T}=f;if(m||e(),!v||!T)return;const M=Rs(p),C=Rs(t.clientWidth-(S+v)),A=Rs(t.clientHeight-(p+T)),k=Rs(S),D={rootMargin:-M+"px "+-C+"px "+-A+"px "+-k+"px",threshold:xE(0,GE(1,d))||1};let P=!0;function I(j){const z=j[0].intersectionRatio;if(z!==d){if(!P)return c();z?c(!1,z):r=setTimeout(()=>{c(!1,1e-7)},1e3)}z===1&&!WM(f,n.getBoundingClientRect())&&c(),P=!1}try{o=new IntersectionObserver(I,{...D,root:t.ownerDocument})}catch{o=new IntersectionObserver(I,D)}o.observe(n)}return c(!0),s}function XE(n,e,o,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:s=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,f=lf(n),S=t||s?[...f?dl(f):[],...dl(e)]:[];S.forEach(k=>{t&&k.addEventListener("scroll",o,{passive:!0}),s&&k.addEventListener("resize",o)});const p=f&&m?JE(f,o):null;let v=-1,T=null;c&&(T=new ResizeObserver(k=>{let[O]=k;O&&O.target===f&&T&&(T.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var D;(D=T)==null||D.observe(e)})),o()}),f&&!d&&T.observe(f),T.observe(e));let M,C=d?nb(n):null;d&&A();function A(){const k=nb(n);C&&!WM(C,k)&&o(),C=k,M=requestAnimationFrame(A)}return o(),()=>{var k;S.forEach(O=>{t&&O.removeEventListener("scroll",o),s&&O.removeEventListener("resize",o)}),p==null||p(),(k=T)==null||k.disconnect(),T=null,d&&cancelAnimationFrame(M)}}var cm=w.useLayoutEffect,qE=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ml=function(){};function QE(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function nN(n,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),t=2;t<o;t++)r[t-2]=arguments[t];var s=[].concat(r);if(e&&n)for(var c in e)e.hasOwnProperty(c)&&e[c]&&s.push("".concat(QE(n,c)));return s.filter(function(m){return m}).map(function(m){return String(m).trim()}).join(" ")}var eb=function(e){return lN(e)?e.filter(Boolean):si(e)==="object"&&e!==null?[e]:[]},ZM=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=aa(e,qE);return cn({},o)},te=function(e,o,r){var t=e.cx,s=e.getStyles,c=e.getClassNames,m=e.className;return{css:s(o,e),className:t(r??{},c(o,e),m)}};function Ll(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function eN(n){return Ll(n)?window.innerHeight:n.clientHeight}function JM(n){return Ll(n)?window.pageYOffset:n.scrollTop}function fl(n,e){if(Ll(n)){window.scrollTo(0,e);return}n.scrollTop=e}function tN(n){var e=getComputedStyle(n),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function aN(n,e,o,r){return o*((n=n/r-1)*n*n+1)+e}function Bs(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ml,t=JM(n),s=e-t,c=10,m=0;function d(){m+=c;var f=aN(m,t,s,o);fl(n,f),m<o?window.requestAnimationFrame(d):r(n)}d()}function tb(n,e){var o=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>o.bottom?fl(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<o.top&&fl(n,Math.max(e.offsetTop-t,0))}function iN(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function ab(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function oN(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var XM=!1,rN={get passive(){return XM=!0}},Ps=typeof window<"u"?window:{};Ps.addEventListener&&Ps.removeEventListener&&(Ps.addEventListener("p",ml,rN),Ps.removeEventListener("p",ml,!1));var uN=XM;function sN(n){return n!=null}function lN(n){return Array.isArray(n)}function Es(n,e,o){return n?e:o}var cN=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),t=1;t<o;t++)r[t-1]=arguments[t];var s=Object.entries(e).filter(function(c){var m=Jt(c,1),d=m[0];return!r.includes(d)});return s.reduce(function(c,m){var d=Jt(m,2),f=d[0],S=d[1];return c[f]=S,c},{})},hN=["children","innerProps"],dN=["children","innerProps"];function mN(n){var e=n.maxHeight,o=n.menuEl,r=n.minHeight,t=n.placement,s=n.shouldScroll,c=n.isFixedPosition,m=n.controlHeight,d=tN(o),f={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return f;var S=d.getBoundingClientRect(),p=S.height,v=o.getBoundingClientRect(),T=v.bottom,M=v.height,C=v.top,A=o.offsetParent.getBoundingClientRect(),k=A.top,O=c?window.innerHeight:eN(d),D=JM(d),P=parseInt(getComputedStyle(o).marginBottom,10),I=parseInt(getComputedStyle(o).marginTop,10),j=k-I,z=O-C,U=j+D,tn=p-D-C,ln=T-O+D+P,fn=D+C-I,nn=160;switch(t){case"auto":case"bottom":if(z>=M)return{placement:"bottom",maxHeight:e};if(tn>=M&&!c)return s&&Bs(d,ln,nn),{placement:"bottom",maxHeight:e};if(!c&&tn>=r||c&&z>=r){s&&Bs(d,ln,nn);var yn=c?z-P:tn-P;return{placement:"bottom",maxHeight:yn}}if(t==="auto"||c){var In=e,gn=c?j:U;return gn>=r&&(In=Math.min(gn-P-m,e)),{placement:"top",maxHeight:In}}if(t==="bottom")return s&&fl(d,ln),{placement:"bottom",maxHeight:e};break;case"top":if(j>=M)return{placement:"top",maxHeight:e};if(U>=M&&!c)return s&&Bs(d,fn,nn),{placement:"top",maxHeight:e};if(!c&&U>=r||c&&j>=r){var L=e;return(!c&&U>=r||c&&j>=r)&&(L=c?j-I:U-I),s&&Bs(d,fn,nn),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return f}function fN(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var qM=function(e){return e==="auto"?"bottom":e},gN=function(e,o){var r,t=e.placement,s=e.theme,c=s.borderRadius,m=s.spacing,d=s.colors;return cn((r={label:"menu"},Br(r,fN(t),"100%"),Br(r,"position","absolute"),Br(r,"width","100%"),Br(r,"zIndex",1),r),o?{}:{backgroundColor:d.neutral0,borderRadius:c,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:m.menuGutter,marginTop:m.menuGutter})},QM=w.createContext(null),SN=function(e){var o=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,s=e.menuPlacement,c=e.menuPosition,m=e.menuShouldScrollIntoView,d=e.theme,f=w.useContext(QM)||{},S=f.setPortalPlacement,p=w.useRef(null),v=w.useState(t),T=Jt(v,2),M=T[0],C=T[1],A=w.useState(null),k=Jt(A,2),O=k[0],D=k[1],P=d.spacing.controlHeight;return cm(function(){var I=p.current;if(I){var j=c==="fixed",z=m&&!j,U=mN({maxHeight:t,menuEl:I,minHeight:r,placement:s,shouldScroll:z,isFixedPosition:j,controlHeight:P});C(U.maxHeight),D(U.placement),S==null||S(U.placement)}},[t,s,c,m,r,S,P]),o({ref:p,placerProps:cn(cn({},e),{},{placement:O||qM(s),maxHeight:M})})},pN=function(e){var o=e.children,r=e.innerRef,t=e.innerProps;return sn("div",mn({},te(e,"menu",{menu:!0}),{ref:r},t),o)},yN=pN,vN=function(e,o){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return cn({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},kN=function(e){var o=e.children,r=e.innerProps,t=e.innerRef,s=e.isMulti;return sn("div",mn({},te(e,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:t},r),o)},nA=function(e,o){var r=e.theme,t=r.spacing.baseUnit,s=r.colors;return cn({textAlign:"center"},o?{}:{color:s.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},bN=nA,TN=nA,MN=function(e){var o=e.children,r=o===void 0?"No options":o,t=e.innerProps,s=aa(e,hN);return sn("div",mn({},te(cn(cn({},s),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},AN=function(e){var o=e.children,r=o===void 0?"Loading...":o,t=e.innerProps,s=aa(e,dN);return sn("div",mn({},te(cn(cn({},s),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},DN=function(e){var o=e.rect,r=e.offset,t=e.position;return{left:o.left,position:t,top:r,width:o.width,zIndex:1}},wN=function(e){var o=e.appendTo,r=e.children,t=e.controlElement,s=e.innerProps,c=e.menuPlacement,m=e.menuPosition,d=w.useRef(null),f=w.useRef(null),S=w.useState(qM(c)),p=Jt(S,2),v=p[0],T=p[1],M=w.useMemo(function(){return{setPortalPlacement:T}},[]),C=w.useState(null),A=Jt(C,2),k=A[0],O=A[1],D=w.useCallback(function(){if(t){var z=iN(t),U=m==="fixed"?0:window.pageYOffset,tn=z[v]+U;(tn!==(k==null?void 0:k.offset)||z.left!==(k==null?void 0:k.rect.left)||z.width!==(k==null?void 0:k.rect.width))&&O({offset:tn,rect:z})}},[t,m,v,k==null?void 0:k.offset,k==null?void 0:k.rect.left,k==null?void 0:k.rect.width]);cm(function(){D()},[D]);var P=w.useCallback(function(){typeof f.current=="function"&&(f.current(),f.current=null),t&&d.current&&(f.current=XE(t,d.current,D,{elementResize:"ResizeObserver"in window}))},[t,D]);cm(function(){P()},[P]);var I=w.useCallback(function(z){d.current=z,P()},[P]);if(!o&&m!=="fixed"||!k)return null;var j=sn("div",mn({ref:I},te(cn(cn({},e),{},{offset:k.offset,position:m,rect:k.rect}),"menuPortal",{"menu-portal":!0}),s),r);return sn(QM.Provider,{value:M},o?sP.createPortal(j,o):j)},ON=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},CN=function(e){var o=e.children,r=e.innerProps,t=e.isDisabled,s=e.isRtl;return sn("div",mn({},te(e,"container",{"--is-disabled":t,"--is-rtl":s}),r),o)},IN=function(e,o){var r=e.theme.spacing,t=e.isMulti,s=e.hasValue,c=e.selectProps.controlShouldRenderValue;return cn({alignItems:"center",display:t&&s&&c?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},KN=function(e){var o=e.children,r=e.innerProps,t=e.isMulti,s=e.hasValue;return sn("div",mn({},te(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":s}),r),o)},RN=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},BN=function(e){var o=e.children,r=e.innerProps;return sn("div",mn({},te(e,"indicatorsContainer",{indicators:!0}),r),o)},ib,PN=["size"],EN=["innerProps","isRtl","size"],NN={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},eA=function(e){var o=e.size,r=aa(e,PN);return sn("svg",mn({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:NN},r))},cf=function(e){return sn(eA,mn({size:20},e),sn("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},tA=function(e){return sn(eA,mn({size:20},e),sn("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},aA=function(e,o){var r=e.isFocused,t=e.theme,s=t.spacing.baseUnit,c=t.colors;return cn({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?c.neutral60:c.neutral20,padding:s*2,":hover":{color:r?c.neutral80:c.neutral40}})},HN=aA,GN=function(e){var o=e.children,r=e.innerProps;return sn("div",mn({},te(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||sn(tA,null))},xN=aA,LN=function(e){var o=e.children,r=e.innerProps;return sn("div",mn({},te(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||sn(cf,null))},_N=function(e,o){var r=e.isDisabled,t=e.theme,s=t.spacing.baseUnit,c=t.colors;return cn({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?c.neutral10:c.neutral20,marginBottom:s*2,marginTop:s*2})},jN=function(e){var o=e.innerProps;return sn("span",mn({},o,te(e,"indicatorSeparator",{"indicator-separator":!0})))},zN=NE(ib||(ib=HE([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),$N=function(e,o){var r=e.isFocused,t=e.size,s=e.theme,c=s.colors,m=s.spacing.baseUnit;return cn({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?c.neutral60:c.neutral20,padding:m*2})},Cd=function(e){var o=e.delay,r=e.offset;return sn("span",{css:rf({animation:"".concat(zN," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},FN=function(e){var o=e.innerProps,r=e.isRtl,t=e.size,s=t===void 0?4:t,c=aa(e,EN);return sn("div",mn({},te(cn(cn({},c),{},{innerProps:o,isRtl:r,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),sn(Cd,{delay:0,offset:r}),sn(Cd,{delay:160,offset:!0}),sn(Cd,{delay:320,offset:!r}))},UN=function(e,o){var r=e.isDisabled,t=e.isFocused,s=e.theme,c=s.colors,m=s.borderRadius,d=s.spacing;return cn({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:d.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?c.neutral5:c.neutral0,borderColor:r?c.neutral10:t?c.primary:c.neutral20,borderRadius:m,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(c.primary):void 0,"&:hover":{borderColor:t?c.primary:c.neutral30}})},VN=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,s=e.innerRef,c=e.innerProps,m=e.menuIsOpen;return sn("div",mn({ref:s},te(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":m}),c,{"aria-disabled":r||void 0}),o)},YN=VN,WN=["data"],ZN=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},JN=function(e){var o=e.children,r=e.cx,t=e.getStyles,s=e.getClassNames,c=e.Heading,m=e.headingProps,d=e.innerProps,f=e.label,S=e.theme,p=e.selectProps;return sn("div",mn({},te(e,"group",{group:!0}),d),sn(c,mn({},m,{selectProps:p,theme:S,getStyles:t,getClassNames:s,cx:r}),f),sn("div",null,o))},XN=function(e,o){var r=e.theme,t=r.colors,s=r.spacing;return cn({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},qN=function(e){var o=ZM(e);o.data;var r=aa(o,WN);return sn("div",mn({},te(e,"groupHeading",{"group-heading":!0}),r))},QN=JN,n2=["innerRef","isDisabled","isHidden","inputClassName"],e2=function(e,o){var r=e.isDisabled,t=e.value,s=e.theme,c=s.spacing,m=s.colors;return cn(cn({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},t2),o?{}:{margin:c.baseUnit/2,paddingBottom:c.baseUnit/2,paddingTop:c.baseUnit/2,color:m.neutral80})},iA={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},t2={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":cn({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},iA)},a2=function(e){return cn({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},iA)},i2=function(e){var o=e.cx,r=e.value,t=ZM(e),s=t.innerRef,c=t.isDisabled,m=t.isHidden,d=t.inputClassName,f=aa(t,n2);return sn("div",mn({},te(e,"input",{"input-container":!0}),{"data-value":r||""}),sn("input",mn({className:o({input:!0},d),ref:s,style:a2(m),disabled:c},f)))},o2=i2,r2=function(e,o){var r=e.theme,t=r.spacing,s=r.borderRadius,c=r.colors;return cn({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:c.neutral10,borderRadius:s/2,margin:t.baseUnit/2})},u2=function(e,o){var r=e.theme,t=r.borderRadius,s=r.colors,c=e.cropWithEllipsis;return cn({overflow:"hidden",textOverflow:c||c===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},s2=function(e,o){var r=e.theme,t=r.spacing,s=r.borderRadius,c=r.colors,m=e.isFocused;return cn({alignItems:"center",display:"flex"},o?{}:{borderRadius:s/2,backgroundColor:m?c.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:c.dangerLight,color:c.danger}})},oA=function(e){var o=e.children,r=e.innerProps;return sn("div",r,o)},l2=oA,c2=oA;function h2(n){var e=n.children,o=n.innerProps;return sn("div",mn({role:"button"},o),e||sn(cf,{size:14}))}var d2=function(e){var o=e.children,r=e.components,t=e.data,s=e.innerProps,c=e.isDisabled,m=e.removeProps,d=e.selectProps,f=r.Container,S=r.Label,p=r.Remove;return sn(f,{data:t,innerProps:cn(cn({},te(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":c})),s),selectProps:d},sn(S,{data:t,innerProps:cn({},te(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:d},o),sn(p,{data:t,innerProps:cn(cn({},te(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},m),selectProps:d}))},m2=d2,f2=function(e,o){var r=e.isDisabled,t=e.isFocused,s=e.isSelected,c=e.theme,m=c.spacing,d=c.colors;return cn({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:s?d.primary:t?d.primary25:"transparent",color:r?d.neutral20:s?d.neutral0:"inherit",padding:"".concat(m.baseUnit*2,"px ").concat(m.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:s?d.primary:d.primary50}})},g2=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,s=e.isSelected,c=e.innerRef,m=e.innerProps;return sn("div",mn({},te(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":s}),{ref:c,"aria-disabled":r},m),o)},S2=g2,p2=function(e,o){var r=e.theme,t=r.spacing,s=r.colors;return cn({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:s.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},y2=function(e){var o=e.children,r=e.innerProps;return sn("div",mn({},te(e,"placeholder",{placeholder:!0}),r),o)},v2=y2,k2=function(e,o){var r=e.isDisabled,t=e.theme,s=t.spacing,c=t.colors;return cn({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?c.neutral40:c.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},b2=function(e){var o=e.children,r=e.isDisabled,t=e.innerProps;return sn("div",mn({},te(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),o)},T2=b2,M2={ClearIndicator:LN,Control:YN,DropdownIndicator:GN,DownChevron:tA,CrossIcon:cf,Group:QN,GroupHeading:qN,IndicatorsContainer:BN,IndicatorSeparator:jN,Input:o2,LoadingIndicator:FN,Menu:yN,MenuList:kN,MenuPortal:wN,LoadingMessage:AN,NoOptionsMessage:MN,MultiValue:m2,MultiValueContainer:l2,MultiValueLabel:c2,MultiValueRemove:h2,Option:S2,Placeholder:v2,SelectContainer:CN,SingleValue:T2,ValueContainer:KN},A2=function(e){return cn(cn({},M2),e.components)},ob=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function D2(n,e){return!!(n===e||ob(n)&&ob(e))}function w2(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!D2(n[o],e[o]))return!1;return!0}function O2(n,e){e===void 0&&(e=w2);var o=null;function r(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var c=n.apply(this,t);return o={lastResult:c,lastArgs:t,lastThis:this},c}return r.clear=function(){o=null},r}var C2={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},I2=function(e){return sn("span",mn({css:C2},e))},rb=I2,K2={guidance:function(e){var o=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,s=e.context,c=e.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return c?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,t=r===void 0?"":r,s=e.labels,c=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return c?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,t=e.options,s=e.label,c=s===void 0?"":s,m=e.selectValue,d=e.isDisabled,f=e.isSelected,S=e.isAppleDevice,p=function(C,A){return C&&C.length?"".concat(C.indexOf(A)+1," of ").concat(C.length):""};if(o==="value"&&m)return"value ".concat(c," focused, ").concat(p(m,r),".");if(o==="menu"&&S){var v=d?" disabled":"",T="".concat(f?" selected":"").concat(v);return"".concat(c).concat(T,", ").concat(p(t,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},R2=function(e){var o=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,s=e.focusableOptions,c=e.isFocused,m=e.selectValue,d=e.selectProps,f=e.id,S=e.isAppleDevice,p=d.ariaLiveMessages,v=d.getOptionLabel,T=d.inputValue,M=d.isMulti,C=d.isOptionDisabled,A=d.isSearchable,k=d.menuIsOpen,O=d.options,D=d.screenReaderStatus,P=d.tabSelectsValue,I=d.isLoading,j=d["aria-label"],z=d["aria-live"],U=w.useMemo(function(){return cn(cn({},K2),p||{})},[p]),tn=w.useMemo(function(){var gn="";if(o&&U.onChange){var L=o.option,Z=o.options,en=o.removedValue,vn=o.removedValues,R=o.value,W=function(Kn){return Array.isArray(Kn)?null:Kn},X=en||L||W(R),q=X?v(X):"",on=Z||vn||void 0,Tn=on?on.map(v):[],un=cn({isDisabled:X&&C(X,m),label:q,labels:Tn},o);gn=U.onChange(un)}return gn},[o,U,C,m,v]),ln=w.useMemo(function(){var gn="",L=r||t,Z=!!(r&&m&&m.includes(r));if(L&&U.onFocus){var en={focused:L,label:v(L),isDisabled:C(L,m),isSelected:Z,options:s,context:L===r?"menu":"value",selectValue:m,isAppleDevice:S};gn=U.onFocus(en)}return gn},[r,t,v,C,U,s,m,S]),fn=w.useMemo(function(){var gn="";if(k&&O.length&&!I&&U.onFilter){var L=D({count:s.length});gn=U.onFilter({inputValue:T,resultsMessage:L})}return gn},[s,T,k,U,O,D,I]),nn=(o==null?void 0:o.action)==="initial-input-focus",yn=w.useMemo(function(){var gn="";if(U.guidance){var L=t?"value":k?"menu":"input";gn=U.guidance({"aria-label":j,context:L,isDisabled:r&&C(r,m),isMulti:M,isSearchable:A,tabSelectsValue:P,isInitialFocus:nn})}return gn},[j,r,t,M,C,A,k,U,m,P,nn]),In=sn(w.Fragment,null,sn("span",{id:"aria-selection"},tn),sn("span",{id:"aria-focused"},ln),sn("span",{id:"aria-results"},fn),sn("span",{id:"aria-guidance"},yn));return sn(w.Fragment,null,sn(rb,{id:f},nn&&In),sn(rb,{"aria-live":z,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},c&&!nn&&In))},B2=R2,hm=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],P2=new RegExp("["+hm.map(function(n){return n.letters}).join("")+"]","g"),rA={};for(var Id=0;Id<hm.length;Id++)for(var Kd=hm[Id],Rd=0;Rd<Kd.letters.length;Rd++)rA[Kd.letters[Rd]]=Kd.base;var uA=function(e){return e.replace(P2,function(o){return rA[o]})},E2=O2(uA),ub=function(e){return e.replace(/^\s+|\s+$/g,"")},N2=function(e){return"".concat(e.label," ").concat(e.value)},H2=function(e){return function(o,r){if(o.data.__isNew__)return!0;var t=cn({ignoreCase:!0,ignoreAccents:!0,stringify:N2,trim:!0,matchFrom:"any"},e),s=t.ignoreCase,c=t.ignoreAccents,m=t.stringify,d=t.trim,f=t.matchFrom,S=d?ub(r):r,p=d?ub(m(o)):m(o);return s&&(S=S.toLowerCase(),p=p.toLowerCase()),c&&(S=E2(S),p=uA(p)),f==="start"?p.substr(0,S.length)===S:p.indexOf(S)>-1}},G2=["innerRef"];function x2(n){var e=n.innerRef,o=aa(n,G2),r=cN(o,"onExited","in","enter","exit","appear");return sn("input",mn({ref:e},r,{css:rf({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var L2=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function _2(n){var e=n.isEnabled,o=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,s=n.onTopLeave,c=w.useRef(!1),m=w.useRef(!1),d=w.useRef(0),f=w.useRef(null),S=w.useCallback(function(A,k){if(f.current!==null){var O=f.current,D=O.scrollTop,P=O.scrollHeight,I=O.clientHeight,j=f.current,z=k>0,U=P-I-D,tn=!1;U>k&&c.current&&(r&&r(A),c.current=!1),z&&m.current&&(s&&s(A),m.current=!1),z&&k>U?(o&&!c.current&&o(A),j.scrollTop=P,tn=!0,c.current=!0):!z&&-k>D&&(t&&!m.current&&t(A),j.scrollTop=0,tn=!0,m.current=!0),tn&&L2(A)}},[o,r,t,s]),p=w.useCallback(function(A){S(A,A.deltaY)},[S]),v=w.useCallback(function(A){d.current=A.changedTouches[0].clientY},[]),T=w.useCallback(function(A){var k=d.current-A.changedTouches[0].clientY;S(A,k)},[S]),M=w.useCallback(function(A){if(A){var k=uN?{passive:!1}:!1;A.addEventListener("wheel",p,k),A.addEventListener("touchstart",v,k),A.addEventListener("touchmove",T,k)}},[T,v,p]),C=w.useCallback(function(A){A&&(A.removeEventListener("wheel",p,!1),A.removeEventListener("touchstart",v,!1),A.removeEventListener("touchmove",T,!1))},[T,v,p]);return w.useEffect(function(){if(e){var A=f.current;return M(A),function(){C(A)}}},[e,M,C]),function(A){f.current=A}}var sb=["boxSizing","height","overflow","paddingRight","position"],lb={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function cb(n){n.cancelable&&n.preventDefault()}function hb(n){n.stopPropagation()}function db(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function mb(){return"ontouchstart"in window||navigator.maxTouchPoints}var fb=!!(typeof window<"u"&&window.document&&window.document.createElement),Ir=0,no={capture:!1,passive:!1};function j2(n){var e=n.isEnabled,o=n.accountForScrollbars,r=o===void 0?!0:o,t=w.useRef({}),s=w.useRef(null),c=w.useCallback(function(d){if(fb){var f=document.body,S=f&&f.style;if(r&&sb.forEach(function(M){var C=S&&S[M];t.current[M]=C}),r&&Ir<1){var p=parseInt(t.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,T=window.innerWidth-v+p||0;Object.keys(lb).forEach(function(M){var C=lb[M];S&&(S[M]=C)}),S&&(S.paddingRight="".concat(T,"px"))}f&&mb()&&(f.addEventListener("touchmove",cb,no),d&&(d.addEventListener("touchstart",db,no),d.addEventListener("touchmove",hb,no))),Ir+=1}},[r]),m=w.useCallback(function(d){if(fb){var f=document.body,S=f&&f.style;Ir=Math.max(Ir-1,0),r&&Ir<1&&sb.forEach(function(p){var v=t.current[p];S&&(S[p]=v)}),f&&mb()&&(f.removeEventListener("touchmove",cb,no),d&&(d.removeEventListener("touchstart",db,no),d.removeEventListener("touchmove",hb,no)))}},[r]);return w.useEffect(function(){if(e){var d=s.current;return c(d),function(){m(d)}}},[e,c,m]),function(d){s.current=d}}var z2=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},$2={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function F2(n){var e=n.children,o=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,s=n.onBottomArrive,c=n.onBottomLeave,m=n.onTopArrive,d=n.onTopLeave,f=_2({isEnabled:t,onBottomArrive:s,onBottomLeave:c,onTopArrive:m,onTopLeave:d}),S=j2({isEnabled:o}),p=function(T){f(T),S(T)};return sn(w.Fragment,null,o&&sn("div",{onClick:z2,css:$2}),e(p))}var U2={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},V2=function(e){var o=e.name,r=e.onFocus;return sn("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:U2,value:"",onChange:function(){}})},Y2=V2;function hf(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function W2(){return hf(/^iPhone/i)}function sA(){return hf(/^Mac/i)}function Z2(){return hf(/^iPad/i)||sA()&&navigator.maxTouchPoints>1}function J2(){return W2()||Z2()}function X2(){return sA()||J2()}var q2=function(e){return e.label},Q2=function(e){return e.label},n1=function(e){return e.value},e1=function(e){return!!e.isDisabled},t1={clearIndicator:xN,container:ON,control:UN,dropdownIndicator:HN,group:ZN,groupHeading:XN,indicatorsContainer:RN,indicatorSeparator:_N,input:e2,loadingIndicator:$N,loadingMessage:TN,menu:gN,menuList:vN,menuPortal:DN,multiValue:r2,multiValueLabel:u2,multiValueRemove:s2,noOptionsMessage:bN,option:f2,placeholder:p2,singleValue:k2,valueContainer:IN},a1={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},i1=4,lA=4,o1=38,r1=lA*2,u1={baseUnit:lA,controlHeight:o1,menuGutter:r1},Bd={borderRadius:i1,colors:a1,spacing:u1},s1={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:ab(),captureMenuScroll:!ab(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:H2(),formatGroupLabel:q2,getOptionLabel:Q2,getOptionValue:n1,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:e1,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!oN(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function gb(n,e,o,r){var t=dA(n,e,o),s=mA(n,e,o),c=hA(n,e),m=gl(n,e);return{type:"option",data:e,isDisabled:t,isSelected:s,label:c,value:m,index:r}}function el(n,e){return n.options.map(function(o,r){if("options"in o){var t=o.options.map(function(c,m){return gb(n,c,e,m)}).filter(function(c){return pb(n,c)});return t.length>0?{type:"group",data:o,options:t,index:r}:void 0}var s=gb(n,o,e,r);return pb(n,s)?s:void 0}).filter(sN)}function cA(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,nf(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Sb(n,e){return n.reduce(function(o,r){return r.type==="group"?o.push.apply(o,nf(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function l1(n,e){return cA(el(n,e))}function pb(n,e){var o=n.inputValue,r=o===void 0?"":o,t=e.data,s=e.isSelected,c=e.label,m=e.value;return(!gA(n)||!s)&&fA(n,{label:c,value:m,data:t},r)}function c1(n,e){var o=n.focusedValue,r=n.selectValue,t=r.indexOf(o);if(t>-1){var s=e.indexOf(o);if(s>-1)return o;if(t<e.length)return e[t]}return null}function h1(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Pd=function(e,o){var r,t=(r=e.find(function(s){return s.data===o}))===null||r===void 0?void 0:r.id;return t||null},hA=function(e,o){return e.getOptionLabel(o)},gl=function(e,o){return e.getOptionValue(o)};function dA(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function mA(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var r=gl(n,e);return o.some(function(t){return gl(n,t)===r})}function fA(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var gA=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},d1=1,SA=function(n){BP(o,n);var e=NP(o);function o(r){var t;if(KP(this,o),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(d){t.controlRef=d},t.focusedOptionRef=null,t.getFocusedOptionRef=function(d){t.focusedOptionRef=d},t.menuListRef=null,t.getMenuListRef=function(d){t.menuListRef=d},t.inputRef=null,t.getInputRef=function(d){t.inputRef=d},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(d,f){var S=t.props,p=S.onChange,v=S.name;f.name=v,t.ariaOnChange(d,f),p(d,f)},t.setValue=function(d,f,S){var p=t.props,v=p.closeMenuOnSelect,T=p.isMulti,M=p.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:M}),v&&(t.setState({inputIsHiddenAfterUpdate:!T}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(d,{action:f,option:S})},t.selectOption=function(d){var f=t.props,S=f.blurInputOnSelect,p=f.isMulti,v=f.name,T=t.state.selectValue,M=p&&t.isOptionSelected(d,T),C=t.isOptionDisabled(d,T);if(M){var A=t.getOptionValue(d);t.setValue(T.filter(function(k){return t.getOptionValue(k)!==A}),"deselect-option",d)}else if(!C)p?t.setValue([].concat(nf(T),[d]),"select-option",d):t.setValue(d,"select-option");else{t.ariaOnChange(d,{action:"select-option",option:d,name:v});return}S&&t.blurInput()},t.removeValue=function(d){var f=t.props.isMulti,S=t.state.selectValue,p=t.getOptionValue(d),v=S.filter(function(M){return t.getOptionValue(M)!==p}),T=Es(f,v,v[0]||null);t.onChange(T,{action:"remove-value",removedValue:d}),t.focusInput()},t.clearValue=function(){var d=t.state.selectValue;t.onChange(Es(t.props.isMulti,[],null),{action:"clear",removedValues:d})},t.popValue=function(){var d=t.props.isMulti,f=t.state.selectValue,S=f[f.length-1],p=f.slice(0,f.length-1),v=Es(d,p,p[0]||null);S&&t.onChange(v,{action:"pop-value",removedValue:S})},t.getFocusedOptionId=function(d){return Pd(t.state.focusableOptionsWithIds,d)},t.getFocusableOptionsWithIds=function(){return Sb(el(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var d=arguments.length,f=new Array(d),S=0;S<d;S++)f[S]=arguments[S];return nN.apply(void 0,[t.props.classNamePrefix].concat(f))},t.getOptionLabel=function(d){return hA(t.props,d)},t.getOptionValue=function(d){return gl(t.props,d)},t.getStyles=function(d,f){var S=t.props.unstyled,p=t1[d](f,S);p.boxSizing="border-box";var v=t.props.styles[d];return v?v(p,f):p},t.getClassNames=function(d,f){var S,p;return(S=(p=t.props.classNames)[d])===null||S===void 0?void 0:S.call(p,f)},t.getElementId=function(d){return"".concat(t.state.instancePrefix,"-").concat(d)},t.getComponents=function(){return A2(t.props)},t.buildCategorizedOptions=function(){return el(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return cA(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(d,f){t.setState({ariaSelection:cn({value:d},f)})},t.onMenuMouseDown=function(d){d.button===0&&(d.stopPropagation(),d.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(d){t.blockOptionHover=!1},t.onControlMouseDown=function(d){if(!d.defaultPrevented){var f=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&t.onMenuClose():f&&t.openMenu("first"):(f&&(t.openAfterFocus=!0),t.focusInput()),d.target.tagName!=="INPUT"&&d.target.tagName!=="TEXTAREA"&&d.preventDefault()}},t.onDropdownIndicatorMouseDown=function(d){if(!(d&&d.type==="mousedown"&&d.button!==0)&&!t.props.isDisabled){var f=t.props,S=f.isMulti,p=f.menuIsOpen;t.focusInput(),p?(t.setState({inputIsHiddenAfterUpdate:!S}),t.onMenuClose()):t.openMenu("first"),d.preventDefault()}},t.onClearIndicatorMouseDown=function(d){d&&d.type==="mousedown"&&d.button!==0||(t.clearValue(),d.preventDefault(),t.openAfterFocus=!1,d.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(d){typeof t.props.closeMenuOnScroll=="boolean"?d.target instanceof HTMLElement&&Ll(d.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(d)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(d){var f=d.touches,S=f&&f.item(0);S&&(t.initialTouchX=S.clientX,t.initialTouchY=S.clientY,t.userIsDragging=!1)},t.onTouchMove=function(d){var f=d.touches,S=f&&f.item(0);if(S){var p=Math.abs(S.clientX-t.initialTouchX),v=Math.abs(S.clientY-t.initialTouchY),T=5;t.userIsDragging=p>T||v>T}},t.onTouchEnd=function(d){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(d.target)&&t.menuListRef&&!t.menuListRef.contains(d.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(d){t.userIsDragging||t.onControlMouseDown(d)},t.onClearIndicatorTouchEnd=function(d){t.userIsDragging||t.onClearIndicatorMouseDown(d)},t.onDropdownIndicatorTouchEnd=function(d){t.userIsDragging||t.onDropdownIndicatorMouseDown(d)},t.handleInputChange=function(d){var f=t.props.inputValue,S=d.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(S,{action:"input-change",prevInputValue:f}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(d){t.props.onFocus&&t.props.onFocus(d),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(d){var f=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(d),t.onInputChange("",{action:"input-blur",prevInputValue:f}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(d){if(!(t.blockOptionHover||t.state.focusedOption===d)){var f=t.getFocusableOptions(),S=f.indexOf(d);t.setState({focusedOption:d,focusedOptionId:S>-1?t.getFocusedOptionId(d):null})}},t.shouldHideSelectedOptions=function(){return gA(t.props)},t.onValueInputFocus=function(d){d.preventDefault(),d.stopPropagation(),t.focus()},t.onKeyDown=function(d){var f=t.props,S=f.isMulti,p=f.backspaceRemovesValue,v=f.escapeClearsValue,T=f.inputValue,M=f.isClearable,C=f.isDisabled,A=f.menuIsOpen,k=f.onKeyDown,O=f.tabSelectsValue,D=f.openMenuOnFocus,P=t.state,I=P.focusedOption,j=P.focusedValue,z=P.selectValue;if(!C&&!(typeof k=="function"&&(k(d),d.defaultPrevented))){switch(t.blockOptionHover=!0,d.key){case"ArrowLeft":if(!S||T)return;t.focusValue("previous");break;case"ArrowRight":if(!S||T)return;t.focusValue("next");break;case"Delete":case"Backspace":if(T)return;if(j)t.removeValue(j);else{if(!p)return;S?t.popValue():M&&t.clearValue()}break;case"Tab":if(t.isComposing||d.shiftKey||!A||!O||!I||D&&t.isOptionSelected(I,z))return;t.selectOption(I);break;case"Enter":if(d.keyCode===229)break;if(A){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":A?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:T}),t.onMenuClose()):M&&v&&t.clearValue();break;case" ":if(T)return;if(!A){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":A?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":A?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!A)return;t.focusOption("pageup");break;case"PageDown":if(!A)return;t.focusOption("pagedown");break;case"Home":if(!A)return;t.focusOption("first");break;case"End":if(!A)return;t.focusOption("last");break;default:return}d.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++d1),t.state.selectValue=eb(r.value),r.menuIsOpen&&t.state.selectValue.length){var s=t.getFocusableOptionsWithIds(),c=t.buildFocusableOptions(),m=c.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=s,t.state.focusedOption=c[m],t.state.focusedOptionId=Pd(s,c[m])}return t}return RP(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&tb(this.menuListRef,this.focusedOptionRef),X2()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(t){var s=this.props,c=s.isDisabled,m=s.menuIsOpen,d=this.state.isFocused;(d&&!c&&t.isDisabled||d&&m&&!t.menuIsOpen)&&this.focusInput(),d&&c&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!d&&!c&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(tb(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,s){this.props.onInputChange(t,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var s=this,c=this.state,m=c.selectValue,d=c.isFocused,f=this.buildFocusableOptions(),S=t==="first"?0:f.length-1;if(!this.props.isMulti){var p=f.indexOf(m[0]);p>-1&&(S=p)}this.scrollToFocusedOptionOnUpdate=!(d&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:f[S],focusedOptionId:this.getFocusedOptionId(f[S])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(t){var s=this.state,c=s.selectValue,m=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var d=c.indexOf(m);m||(d=-1);var f=c.length-1,S=-1;if(c.length){switch(t){case"previous":d===0?S=0:d===-1?S=f:S=d-1;break;case"next":d>-1&&d<f&&(S=d+1);break}this.setState({inputIsHidden:S!==-1,focusedValue:c[S]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,c=this.state.focusedOption,m=this.getFocusableOptions();if(m.length){var d=0,f=m.indexOf(c);c||(f=-1),t==="up"?d=f>0?f-1:m.length-1:t==="down"?d=(f+1)%m.length:t==="pageup"?(d=f-s,d<0&&(d=0)):t==="pagedown"?(d=f+s,d>m.length-1&&(d=m.length-1)):t==="last"&&(d=m.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:m[d],focusedValue:null,focusedOptionId:this.getFocusedOptionId(m[d])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Bd):cn(cn({},Bd),this.props.theme):Bd}},{key:"getCommonProps",value:function(){var t=this.clearValue,s=this.cx,c=this.getStyles,m=this.getClassNames,d=this.getValue,f=this.selectOption,S=this.setValue,p=this.props,v=p.isMulti,T=p.isRtl,M=p.options,C=this.hasValue();return{clearValue:t,cx:s,getStyles:c,getClassNames:m,getValue:d,hasValue:C,isMulti:v,isRtl:T,options:M,selectOption:f,selectProps:p,setValue:S,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,s=t.isClearable,c=t.isMulti;return s===void 0?c:s}},{key:"isOptionDisabled",value:function(t,s){return dA(this.props,t,s)}},{key:"isOptionSelected",value:function(t,s){return mA(this.props,t,s)}},{key:"filterOption",value:function(t,s){return fA(this.props,t,s)}},{key:"formatOptionLabel",value:function(t,s){if(typeof this.props.formatOptionLabel=="function"){var c=this.props.inputValue,m=this.state.selectValue;return this.props.formatOptionLabel(t,{context:s,inputValue:c,selectValue:m})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,s=t.isDisabled,c=t.isSearchable,m=t.inputId,d=t.inputValue,f=t.tabIndex,S=t.form,p=t.menuIsOpen,v=t.required,T=this.getComponents(),M=T.Input,C=this.state,A=C.inputIsHidden,k=C.ariaSelection,O=this.commonProps,D=m||this.getElementId("input"),P=cn(cn(cn({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!c&&{"aria-readonly":!0}),this.hasValue()?(k==null?void 0:k.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return c?w.createElement(M,mn({},O,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:s,isHidden:A,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:f,form:S,type:"text",value:d},P)):w.createElement(x2,mn({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ml,onFocus:this.onInputFocus,disabled:s,tabIndex:f,inputMode:"none",form:S,value:""},P))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,s=this.getComponents(),c=s.MultiValue,m=s.MultiValueContainer,d=s.MultiValueLabel,f=s.MultiValueRemove,S=s.SingleValue,p=s.Placeholder,v=this.commonProps,T=this.props,M=T.controlShouldRenderValue,C=T.isDisabled,A=T.isMulti,k=T.inputValue,O=T.placeholder,D=this.state,P=D.selectValue,I=D.focusedValue,j=D.isFocused;if(!this.hasValue()||!M)return k?null:w.createElement(p,mn({},v,{key:"placeholder",isDisabled:C,isFocused:j,innerProps:{id:this.getElementId("placeholder")}}),O);if(A)return P.map(function(U,tn){var ln=U===I,fn="".concat(t.getOptionLabel(U),"-").concat(t.getOptionValue(U));return w.createElement(c,mn({},v,{components:{Container:m,Label:d,Remove:f},isFocused:ln,isDisabled:C,key:fn,index:tn,removeProps:{onClick:function(){return t.removeValue(U)},onTouchEnd:function(){return t.removeValue(U)},onMouseDown:function(yn){yn.preventDefault()}},data:U}),t.formatOptionLabel(U,"value"))});if(k)return null;var z=P[0];return w.createElement(S,mn({},v,{data:z,isDisabled:C}),this.formatOptionLabel(z,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),s=t.ClearIndicator,c=this.commonProps,m=this.props,d=m.isDisabled,f=m.isLoading,S=this.state.isFocused;if(!this.isClearable()||!s||d||!this.hasValue()||f)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return w.createElement(s,mn({},c,{innerProps:p,isFocused:S}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),s=t.LoadingIndicator,c=this.commonProps,m=this.props,d=m.isDisabled,f=m.isLoading,S=this.state.isFocused;if(!s||!f)return null;var p={"aria-hidden":"true"};return w.createElement(s,mn({},c,{innerProps:p,isDisabled:d,isFocused:S}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator,c=t.IndicatorSeparator;if(!s||!c)return null;var m=this.commonProps,d=this.props.isDisabled,f=this.state.isFocused;return w.createElement(c,mn({},m,{isDisabled:d,isFocused:f}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),s=t.DropdownIndicator;if(!s)return null;var c=this.commonProps,m=this.props.isDisabled,d=this.state.isFocused,f={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return w.createElement(s,mn({},c,{innerProps:f,isDisabled:m,isFocused:d}))}},{key:"renderMenu",value:function(){var t=this,s=this.getComponents(),c=s.Group,m=s.GroupHeading,d=s.Menu,f=s.MenuList,S=s.MenuPortal,p=s.LoadingMessage,v=s.NoOptionsMessage,T=s.Option,M=this.commonProps,C=this.state.focusedOption,A=this.props,k=A.captureMenuScroll,O=A.inputValue,D=A.isLoading,P=A.loadingMessage,I=A.minMenuHeight,j=A.maxMenuHeight,z=A.menuIsOpen,U=A.menuPlacement,tn=A.menuPosition,ln=A.menuPortalTarget,fn=A.menuShouldBlockScroll,nn=A.menuShouldScrollIntoView,yn=A.noOptionsMessage,In=A.onMenuScrollToTop,gn=A.onMenuScrollToBottom;if(!z)return null;var L=function(q,on){var Tn=q.type,un=q.data,qn=q.isDisabled,Kn=q.isSelected,Le=q.label,wo=q.value,Na=C===un,mi=qn?void 0:function(){return t.onOptionHover(un)},Oo=qn?void 0:function(){return t.selectOption(un)},fi="".concat(t.getElementId("option"),"-").concat(on),oc={id:fi,onClick:Oo,onMouseMove:mi,onMouseOver:mi,tabIndex:-1,role:"option","aria-selected":t.state.isAppleDevice?void 0:Kn};return w.createElement(T,mn({},M,{innerProps:oc,data:un,isDisabled:qn,isSelected:Kn,key:fi,label:Le,type:Tn,value:wo,isFocused:Na,innerRef:Na?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(q.data,"menu"))},Z;if(this.hasOptions())Z=this.getCategorizedOptions().map(function(X){if(X.type==="group"){var q=X.data,on=X.options,Tn=X.index,un="".concat(t.getElementId("group"),"-").concat(Tn),qn="".concat(un,"-heading");return w.createElement(c,mn({},M,{key:un,data:q,options:on,Heading:m,headingProps:{id:qn,data:X.data},label:t.formatGroupLabel(X.data)}),X.options.map(function(Kn){return L(Kn,"".concat(Tn,"-").concat(Kn.index))}))}else if(X.type==="option")return L(X,"".concat(X.index))});else if(D){var en=P({inputValue:O});if(en===null)return null;Z=w.createElement(p,M,en)}else{var vn=yn({inputValue:O});if(vn===null)return null;Z=w.createElement(v,M,vn)}var R={minMenuHeight:I,maxMenuHeight:j,menuPlacement:U,menuPosition:tn,menuShouldScrollIntoView:nn},W=w.createElement(SN,mn({},M,R),function(X){var q=X.ref,on=X.placerProps,Tn=on.placement,un=on.maxHeight;return w.createElement(d,mn({},M,R,{innerRef:q,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:D,placement:Tn}),w.createElement(F2,{captureEnabled:k,onTopArrive:In,onBottomArrive:gn,lockEnabled:fn},function(qn){return w.createElement(f,mn({},M,{innerRef:function(Le){t.getMenuListRef(Le),qn(Le)},innerProps:{role:"listbox","aria-multiselectable":M.isMulti,id:t.getElementId("listbox")},isLoading:D,maxHeight:un,focusedOption:C}),Z)}))});return ln||tn==="fixed"?w.createElement(S,mn({},M,{appendTo:ln,controlElement:this.controlRef,menuPlacement:U,menuPosition:tn}),W):W}},{key:"renderFormField",value:function(){var t=this,s=this.props,c=s.delimiter,m=s.isDisabled,d=s.isMulti,f=s.name,S=s.required,p=this.state.selectValue;if(S&&!this.hasValue()&&!m)return w.createElement(Y2,{name:f,onFocus:this.onValueInputFocus});if(!(!f||m))if(d)if(c){var v=p.map(function(C){return t.getOptionValue(C)}).join(c);return w.createElement("input",{name:f,type:"hidden",value:v})}else{var T=p.length>0?p.map(function(C,A){return w.createElement("input",{key:"i-".concat(A),name:f,type:"hidden",value:t.getOptionValue(C)})}):w.createElement("input",{name:f,type:"hidden",value:""});return w.createElement("div",null,T)}else{var M=p[0]?this.getOptionValue(p[0]):"";return w.createElement("input",{name:f,type:"hidden",value:M})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,s=this.state,c=s.ariaSelection,m=s.focusedOption,d=s.focusedValue,f=s.isFocused,S=s.selectValue,p=this.getFocusableOptions();return w.createElement(B2,mn({},t,{id:this.getElementId("live-region"),ariaSelection:c,focusedOption:m,focusedValue:d,isFocused:f,selectValue:S,focusableOptions:p,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),s=t.Control,c=t.IndicatorsContainer,m=t.SelectContainer,d=t.ValueContainer,f=this.props,S=f.className,p=f.id,v=f.isDisabled,T=f.menuIsOpen,M=this.state.isFocused,C=this.commonProps=this.getCommonProps();return w.createElement(m,mn({},C,{className:S,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:M}),this.renderLiveRegion(),w.createElement(s,mn({},C,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:M,menuIsOpen:T}),w.createElement(d,mn({},C,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),w.createElement(c,mn({},C,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,s){var c=s.prevProps,m=s.clearFocusValueOnUpdate,d=s.inputIsHiddenAfterUpdate,f=s.ariaSelection,S=s.isFocused,p=s.prevWasFocused,v=s.instancePrefix,T=t.options,M=t.value,C=t.menuIsOpen,A=t.inputValue,k=t.isMulti,O=eb(M),D={};if(c&&(M!==c.value||T!==c.options||C!==c.menuIsOpen||A!==c.inputValue)){var P=C?l1(t,O):[],I=C?Sb(el(t,O),"".concat(v,"-option")):[],j=m?c1(s,O):null,z=h1(s,P),U=Pd(I,z);D={selectValue:O,focusedOption:z,focusedOptionId:U,focusableOptionsWithIds:I,focusedValue:j,clearFocusValueOnUpdate:!1}}var tn=d!=null&&t!==c?{inputIsHidden:d,inputIsHiddenAfterUpdate:void 0}:{},ln=f,fn=S&&p;return S&&!fn&&(ln={value:Es(k,O,O[0]||null),options:O,action:"initial-input-focus"},fn=!p),(f==null?void 0:f.action)==="initial-input-focus"&&(ln=null),cn(cn(cn({},D),tn),{},{prevProps:t,ariaSelection:ln,prevWasFocused:fn})}}]),o}(w.Component);SA.defaultProps=s1;var m1=w.forwardRef(function(n,e){var o=IP(n);return w.createElement(SA,mn({ref:e},o))}),f1=m1;function g1(){const n=Vm(),e=ou(),o=c=>{if(!c)return;const m=c.value;e.updateFilter(m)},r=()=>{const c=Math.floor(Math.random()*eo+1);n(`/guess?id=${c}&filter=${e.filter}`)},t=qm.map(c=>({value:c,label:c})),s={option:(c,m)=>({...c,whiteSpace:"normal",wordWrap:"break-word",color:m.isSelected?"black":"rgba(0, 0, 0, 0.7)"}),singleValue:c=>({...c,whiteSpace:"normal",color:"black"})};return $.jsx("div",{className:"FilterContainer",children:$.jsxs("div",{className:"Filter",children:[$.jsx(f1,{className:"SelectOptions",value:{value:e.filter,label:e.filter},options:t,styles:s,components:{DropdownIndicator:()=>null},isSearchable:!1,onChange:o}),$.jsx("button",{className:"RandomSong",onClick:r,children:"Random Song!"})]})})}const S1=`'Tis Time for "Torture," Princess
2.5 Dimensional Seduction
2.5-jigen no Ririsa
3-gatsu no Lion
3-gatsu no Lion 2nd Season
30-sai made Doutei dato Mahoutsukai ni Nareru Rashii
365 Days to the Wedding
3D Kanojo: Real Girl 2nd Season
5-toubun no Hanayome
5-toubun no Hanayome ∬
7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!
86
86 Eighty-Six
86 Eighty-Six Part 2
86 Part 2
91 Days
A Certain Magical Index
A Certain Magical Index II
A Certain Scientific Railgun
A Certain Scientific Railgun S
A Certain Scientific Railgun T
A Dog of Flanders: My Patrasche
A Little Princess Sara
A Little Snow Fairy Sugar
A Lull in the Sea
A Place Further Than The Universe
A Sign of Affection
A Sister's All You Need
ACCA: 13-Territory Inspection Dept.
ACCA: 13-ku Kansatsu-ka
AKB0048
AKB0048: Next Stage
Aa! Megami-sama! (TV)
Aa! Megami-sama! Sorezore no Tsubasa
Accel World
Ace of Diamond Act II
Ace of Diamond: Second Season
After War Gundam X
After the Rain
Ah! My Goddess
Ah! My Goddess: Flights of Fancy
Aharen-san wa Hakarenai Season 2
Ahiru no Sora
Aikatsu Stars!
Aikatsu!
Air Gear
Ajin
Ajin Part 2
Ajin: Demi-Human
Ajin: Demi-Human 2nd Season
Akachan to Boku
Akagami no Shirayuki-hime
Akagami no Shirayuki-hime 2nd Season
Akage no Anne
Akagi
Akame ga Kill!
Akashic Records of Bastard Magic Instructor
Akatsuki no Yona
Akebi's Sailor Uniform
Akebi-chan no Sailor-fuku
Akiba Maid War
Akiba Meido Sensou
Akudama Drive
Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen
Alderamin on the Sky
Aldnoah.Zero
Alfred J. Kwak
Alice & Zoroku
Alice to Zouroku
All Out!!
Altair: A Record of Battles
Alya Sometimes Hides Her Feelings in Russian
Amaama to Inazuma
Amagami-san Chi no Enmusubi
Amagi Brilliant Park
Ameku M.D.: Doctor Detective
Ameku Takao no Suiri Karte
An Archdemon's Dilemma: How to Love Your Elf Bride
Angel Beats!
Ani ni Tsukeru Kusuri wa Nai! 2
Ani ni Tsukeru Kusuri wa Nai! 4
Animal Lane
Animal Yokochou
Anne Shirley
Anne of Green Gables
Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.
Ano Natsu de Matteru
Anohana: The Flower We Saw That Day
Another
Ansatsu Kyoushitsu
Ansatsu Kyoushitsu 2nd Season
Anyamal Tantei Kiruminzoo
Ao Ashi
Ao Haru Ride
Ao no Exorcist
Ao no Exorcist: Shimane Illuminati-hen
Ao no Hako
Ao no Orchestra
Aoashi
Apocalypse Hotel
Aquarion
Aquarion Evol
Arakawa Under the Bridge
Arakawa Under the Bridge x Bridge
Aria the Animation
Aria the Origination
Arifureta Shokugyou de Sekai Saikyou 2nd Season
Arifureta: From Commonplace to World's Strongest Season 2
Arknights Animation: Prelude to Dawn
Arknights: Perish in Frost
Arknights: Reimei Zensou
Arknights: Touin Kiro
Armored Trooper Votoms
Arslan Senki (TV)
Arslan Senki (TV): Fuujin Ranbu
As Miss Beelzebub Likes.
Ascendance of a Bookworm
Ascendance of a Bookworm Season 2
Ascendance of a Bookworm Season 3
Ashita no Joe
Ashita no Joe 2
Ashita no Nadja
Asobi Asobase
Asobi Asobase - workshop of fun -
Assassination Classroom
Assassination Classroom Second Season
Astra Lost in Space
Astro Boy (2003)
Astro Boy: Tetsuwan Atom
Atarashii Joushi wa Do Tennen
Atashin'chi
Attack on Titan
Attack on Titan Season 2
Attack on Titan Season 3
Attack on Titan Season 3 Part 2
Attack on Titan: Final Season
Attack on Titan: Final Season Part 2
Attack on Titan: Junior High
Aura Battler Dunbine
Ave Mujica: The Die is Cast
Azumanga Daioh: The Animation
Azumanga Daiou The Animation
BLEND-S
BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.
BTOOOM!
Baby Steps
Baby Steps 2nd Season
Baby and Me
Baccano!
Backflip!!
Baka & Test – Summon the Beasts 2
Baka & Test: Summon the Beasts
Baka to Test to Shoukanjuu
Baka to Test to Shoukanjuu Ni!
Bakemonogatari
Bakuman.
Bakuman. 2nd Season
Bakuman. 3rd Season
Bakuman. Season 2
Bakuman. Season 3
Bakuten!!
Ballroom e Youkoso
BanG Dream! 2nd Season
BanG Dream! 3rd Season
BanG Dream! Ave Mujica
BanG Dream! It's MyGO!!!!!
Banana Fish
Banner of the Stars
Banner of the Stars II
Barakamon
Basilisk
Basilisk: Kouga Ninpou Chou
Battle Spirits: Shounen Gekiha Dan
Beastars
Beastars 2nd Season
Beck
Beck: Mongolian Chop Squad
Beelzebub
Beelzebub-jou no Okinimesu mama.
Before Green Gables
Berserk
Berserk: Ougon Jidai-hen - Memorial Edition
Berserk: The Golden Age Arc - Memorial Edition
Beyond the Boundary
Big Windup!
Big Windup! 2
Binbougami ga!
Birdie Wing: Golf Girls' Story Season 2
Birdy the Mighty: Decode
Birdy the Mighty: Decode 02
Bishoujo Senshi Sailor Moon Crystal Season III
Bishoujo Senshi Sailor Moon R
Bishoujo Senshi Sailor Moon S
Bishoujo Senshi Sailor Moon: Sailor Stars
Bishounen Tanteidan
Black Bullet
Black Butler
Black Butler II
Black Butler: Book of Circus
Black Butler: Emerald Witch Arc
Black Butler: Public School Arc
Black Cat
Black Clover
Black Jack (TV)
Black Jack 21
Black Lagoon
Black Summoner
Blast of Tempest
Bleach
Bleach: Sennen Kessen-hen
Bleach: Sennen Kessen-hen - Ketsubetsu-tan
Bleach: Sennen Kessen-hen - Soukoku-tan
Bleach: Thousand-Year Blood War
Bleach: Thousand-Year Blood War - The Conflict
Bleach: Thousand-Year Blood War - The Separation
Blend S
Blood Blockade Battlefront
Blood Blockade Battlefront & Beyond
Blood+
Bloom Into You
Blue Archive the Animation
Blue Box
Blue Exorcist
Blue Exorcist: Shimane Illuminati Saga
Blue Lock
Blue Lock Season 2
Blue Lock vs. U-20 Japan
Blue Period
Blue Spring Ride
Boarding School Juliet
Bobobo-bo Bo-bobo
Bocchi the Rock!
Bodacious Space Pirates
Boku dake ga Inai Machi
Boku no Hero Academia
Boku no Hero Academia 2nd Season
Boku no Hero Academia 3rd Season
Boku no Hero Academia 4th Season
Boku no Hero Academia 6th Season
Boku no Hero Academia 7th Season
Boku no Kokoro no Yabai Yatsu
Boku no Kokoro no Yabai Yatsu 2nd Season
Bokura no
Bokura wa Minna Kawai-sou
Bokurano
Bokutachi wa Benkyou ga Dekinai
Bokutachi wa Benkyou ga Dekinai!
Boogiepop and Others
Boogiepop wa Warawanai (2019)
Bottom-Tier Character Tomozaki
Boukyaku Battery (TV)
Brave Bang Bravern!
Btooom!
Buddy Complex
Buddy Daddies
Bungo Stray Dogs
Bungo Stray Dogs 2
Bungo Stray Dogs 3
Bungo Stray Dogs 4
Bungo Stray Dogs 5
Bungou Stray Dogs
Bungou Stray Dogs 2nd Season
Bungou Stray Dogs 3rd Season
Bungou Stray Dogs 4th Season
Bungou Stray Dogs 5th Season
Bunny Drop
Call of the Night
Campfire Cooking in Another World with My Absurd Skill
Canaan
Candy Candy
Capeta
Captain Tsubasa
Captain Tsubasa Season 2: Junior Youth-hen
Captain Tsubasa: Junior Youth Arc
Captain Tsubasa: Road to 2002
Cardcaptor Sakura
Cardcaptor Sakura: Clear Card
Cardcaptor Sakura: Clear Card-hen
Cardfight!! Vanguard
Cardfight!! Vanguard Divinez
Cardfight!! Vanguard Divinez Season 2
Cardfight!! Vanguard: Divinez
Cardfight!! Vanguard: Divinez Deluxe-hen
Cardfight!! Vanguard: Divinez Season 2
Carole & Tuesday
Case Closed
Casshern Sins
Cat's Eye
Cautious Hero: The Hero Is Overpowered but Overly Cautious
Cells at Work!
Chainsaw Man
Charlotte
Cherry Magic! Thirty Years of Virginity Can Make You a Wizard?!
Chi's New Address
Chi's Sweet Home
Chi's Sweet Home: Atarashii Ouchi
Chi. Chikyuu no Undou ni Tsuite
Chibi Maruko-chan
Chibi Maruko-chan (1995)
Chicchana Yukitsukai Sugar
Chihayafuru
Chihayafuru 2
Chihayafuru 3
Chiisana Ahiru no Ooki na Ai no Monogatari: Ahiru no Kwak
Children of the Whales
Chivalry of a Failed Knight
Chiyu Mahou no Machigatta Tsukaikata
Chobits
Chou Denji Machine Voltes V
Chrno Crusade
Chrono Crusade
Chuuka Ichiban!
Chuukan Kanriroku Tonegawa
Chuunibyou demo Koi ga Shitai!
Chuunibyou demo Koi ga Shitai! Ren
City Hunter
City Hunter '91
City Hunter 2
City Hunter 3
Clannad
Clannad: After Story
Classroom of the Elite
Classroom of the Elite II
Classroom of the Elite III
Code Geass: Hangyaku no Lelouch
Code Geass: Hangyaku no Lelouch R2
Code Geass: Lelouch of the Rebellion
Code Geass: Lelouch of the Rebellion R2
Combatants Will Be Dispatched!
Cooking Master Boy
Cool Doji Danshi
Corpse Princess: Kuro
Cowboy Bebop
Crayon Shin-chan
Crest of the Stars
Cromartie High School
Cross Ange: Rondo of Angel and Dragon
Cross Ange: Tenshi to Ryuu no Rondo
Cross Game
Cyborg 009
Cyborg 009 (1979)
Cyborg 009: The Cyborg Soldier
D.Gray-man
D.Gray-man HALLOW
D.Gray-man Hallow
D4DJ First Mix
DARLING in the FRANXX
Daa! Daa! Daa!
Daily Lives of High School Boys
Daimos
Dakaichi -I'm being harassed by the sexiest man of the year-
Dakaretai Otoko 1-i ni Odosarete Imasu.
Dan Da Dan
Danball Senki
Danball Senki W
Dance Dance Danseur
Dandadan
Danganronpa: Kibou no Gakuen to Zetsubou no Koukousei The Animation
Danganronpa: The Animation
Danshi Koukousei no Nichijou
Dark Gathering
Darker than Black
Darker than Black: Gemini of the Meteor
Darker than Black: Kuro no Keiyakusha
Darker than Black: Ryuusei no Gemini
Darling in the FranXX
Darwin's Game
Dash! Kappei
Date A Live
Date A Live II
Date A Live III
Date A Live IV
Date A Live V
Days
Dead Mount Death Play Part 2
Deadman Wonderland
Deaimon
Deaimon: Recipe for Happiness
Dear Brother
Death Note
Death Parade
Dekiru Neko wa Kyou mo Yuuutsu
Delicious in Dungeon
Demi-chan wa Kataritai
Demon Lord 2099
Demon Slayer: Kimetsu no Yaiba
Demon Slayer: Kimetsu no Yaiba Entertainment District Arc
Demon Slayer: Kimetsu no Yaiba Hashira Training Arc
Demon Slayer: Kimetsu no Yaiba Mugen Train Arc
Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc
Den-noh Coil
Dennou Coil
Densetsu Kyojin Ideon
Densetsu no Yuusha no Densetsu
Descending Stories: Showa Genroku Rakugo Shinju
Detective Conan: Zero's Tea Time
Detective School Q
Di Gi Charat Nyo
Diamond no Ace: Act II
Diamond no Ace: Second Season
Digimon Adventure
Digimon Adventure 02
Digimon Frontier
Digimon Tamers
Digimon: Digital Monsters
Dimension W
Don't Toy with Me, Miss Nagatoro
Doraemon
Doraemon (2005)
Dorohedoro
Dororo
Dosanko Gal wa Namara Menkoi
Doukyonin wa Hiza, Tokidoki, Atama no Ue.
Dr. Ramune -Mysterious Disease Specialist-
Dr. Stone
Dr. Stone: New World
Dr. Stone: New World Part 2
Dr. Stone: Science Future
Dr. Stone: Stone Wars
Dragon Ball
Dragon Ball Daima
Dragon Ball Kai
Dragon Ball Kai (2014)
Dragon Ball Super
Dragon Ball Z
Dragon Ball Z Kai
Dragon Ball Z Kai: The Final Chapters
Dragon Quest: Dai no Daibouken (2020)
Dragon Quest: Dai no Daibouken (TV)
Dragon Quest: The Adventure of Dai
Drifters
Dumbbell Nan Kilo Moteru?
Dungeon Meshi
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Gaiden: Sword Oratoria
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Yakusai-hen
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V: Houjou no Megami-hen
Durarara!!
Durarara!! x2 Ketsu
Durarara!! x2 Shou
Durarara!! x2 Ten
Durarara!!x2 Ketsu
Durarara!!x2 Shou
Durarara!!x2 Ten
Dusk Maiden of Amnesia
Eden of The East
Edens Zero
Edomae Elf
Eikoku Koi Monogatari Emma
Eikoku Koi Monogatari Emma: Molders-hen
Eizouken ni wa Te wo Dasu na!
Elemental Gelade
Elfen Lied
Emma: A Victorian Romance
Emma: A Victorian Romance Season Two
Encouragement of Climb Season 2
Encouragement of Climb: Next Summit
Endo and Kobayashi Live! The Latest on Tsundere Villainess Lieselotte
Enen no Shouboutai
Enen no Shouboutai: Ni no Shou
Enen no Shouboutai: San no Shou
Erased
Erementar Gerad
Ergo Proxy
Eureka Seven
Eyeshield 21
Fafner
Fairy Tail
Fairy Tail (2014)
Fairy Tail Final Series
Fairy Tail Series 2
Fairy Tail: 100 Years Quest
Fairy Tail: 100-nen Quest
Fairy Tail: Final Series
Farming Life in Another World
Fate/Apocrypha
Fate/Grand Order: Absolute Demonic Front - Babylonia
Fate/Grand Order: Zettai Majuu Sensen Babylonia
Fate/Kaleid Liner Prisma Illya
Fate/Kaleid Liner Prisma Illya 2Wei Herz!
Fate/Kaleid Liner Prisma Illya 2Wei!
Fate/Zero
Fate/Zero 2nd Season
Fate/Zero Season 2
Fate/kaleid liner Prisma Illya 3rei!!
Fate/kaleid liner Prisma☆Illya
Fate/kaleid liner Prisma☆Illya 2wei Herz!
Fate/kaleid liner Prisma☆Illya 2wei!
Fate/kaleid liner Prisma☆Illya 3rei!!
Fate/stay night
Fate/stay night [Unlimited Blade Works]
Fate/stay night [Unlimited Blade Works] Season 2
Fate/stay night: Unlimited Blade Works
Fate/stay night: Unlimited Blade Works 2nd Season
Fighting Spirit
Fighting Spirit: New Challenger
Fighting Spirit: Rising
Fire Force
Fire Force Season 2
Fire Force Season 3
Fist of the North Star
Fist of the North Star 2
Flanders no Inu, Boku no Patrasche
Flip Flappers
Flying Witch
Food Wars! Shokugeki no Soma
Food Wars! The Fourth Plate
Food Wars! The Second Plate
Food Wars! The Third Plate
Food Wars! The Third Plate: Totsuki Train Arc
Food for the Soul
Forest of Piano Second Season
Free! Dive to the Future
Free! Eternal Summer
Frieren: Beyond Journey's End
From the New World
Fruits Basket
Fruits Basket 1st Season
Fruits Basket 2nd Season
Fruits Basket: The Final
Fruits Basket: The Final Season
Fugou Keiji: Balance:Unlimited
Fukigen na Mononokean Tsuzuki
Full Metal Panic!
Full Metal Panic! Invisible Victory
Full Metal Panic! The Second Raid
Full Metal Panic? Fumoffu
Full Moon wo Sagashite
Fullmetal Alchemist
Fullmetal Alchemist: Brotherhood
Fumetsu no Anata e Season 2
Fune wo Amu
Funny Faces in High School
Fushigi Yuugi
Fushigi no Umi no Nadia
Futari wa Precure
Futari wa Precure: Max Heart
Futari wa Precure: Splash☆Star
Futatsu no Spica
Future Boy Conan
Fuufu Ijou, Koibito Miman.
GARO: THE ANIMATION
GATE
GATE Part 2
Ga-Rei-Zero
Ga-Rei: Zero
Gaiking: Legend of Daiku-Maryu
Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu
Gakkou no Kaidan
Gakkougurashi!
Gakuen Alice
Gakuen Babysitters
Gakuen Senki Muryou
Gakusen Toshi Asterisk 2nd Season
Galaxy Express 999
Ganbare Genki
Gangsta.
Gankutsuou
Gankutsuou: The Count of Monte Cristo
Gantz
Garo: Honoo no Kokuin
Gate: Jieitai Kanochi nite, Kaku Tatakaeri
Gate: Jieitai Kanochi nite, Kaku Tatakaeri Part 2
GeGeGe no Kitaro
Gegege no Kitarou (2018)
Gekkan Shoujo Nozaki-kun
Genesis Climber Mospeada
Genjitsu Shugi Yuusha no Oukoku Saikenki
Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2
Genshiken
Genshiken 2
Gensoumaden Saiyuuki
GetBackers
Getbackers
Ghost Hunt
Ghost Stories
Ghost in the Shell: Stand Alone Complex
Ghost in the Shell: Stand Alone Complex 2nd GIG
Giant Gorg
Giant Killing
Giji Harem
Gin no Saji
Gin no Saji 2nd Season
Ginga Eiyuu Densetsu: Die Neue These - Kaikou
Ginga Nagareboshi Gin
Ginga Tetsudou 999
Gingitsune
Gingitsune: Messenger Fox of the Gods
Gintama
Gintama Season 2
Gintama Season 4
Gintama Season 5
Gintama'
Gintama': Enchousen
Gintama.
Gintama. Porori-hen
Gintama. Shirogane no Tamashii-hen
Gintama. Shirogane no Tamashii-hen - Kouhan-sen
Gintama. Silver Soul Arc
Gintama. Silver Soul Arc - Second Half War
Gintama. Slip Arc
Gintama: Enchousen
Gintama°
Girlfriend, Girlfriend Season 2
Girls & Panzer
Girls Band Cry
Girls und Panzer
Girls' Last Tour
Given
Glass Mask
Glass no Kamen (2005)
Go! Go! Loser Ranger! Season 2
Go! Princess Precure
Go! Princess Pretty Cure
Goblin Slayer
Goblin Slayer II
Gochuumon wa Usagi desu ka? Bloom
Gochuumon wa Usagi desu ka??
God Eater
Gokinjo Monogatari
Golden Kamuy
Golden Kamuy 2nd Season
Golden Kamuy 3rd Season
Golden Kamuy 4th Season
Golden Kamuy Season 2
Golden Kamuy Season 3
Golden Kamuy Season 4
Golden Time
Golgo 13
Golgo 13 (TV)
Good Luck Girl!
Gosick
Grand Blue
Grand Blue Dreaming
Grandpa and Grandma Turn Young Again
Great Pretender
Great Teacher Onizuka
Grimgar: Ashes and Illusions
Grisaia no Rakuen
Gugure! Kokkuri-san
Guilty Crown
Gundam Build Fighters
Gundam Build Fighters Try
Gungrave
Gunslinger Girl: II Teatrino
Gunslinger Girl: Il Teatrino
Gurren Lagann
Gushing over Magical Girls
Gyakkyou Burai Kaiji: Hakairoku-hen
Gyakkyou Burai Kaiji: Ultimate Survivor
Hachimitsu to Clover
Hachimitsu to Clover II
Hai to Gensou no Grimgar
Haibane Renmei
Haikyu!!
Haikyu!! 2nd Season
Haikyu!! 3rd Season
Haikyu!! To the Top
Haikyu!! To the Top 2nd-cour
Haikyuu!!
Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou
Haikyuu!! Second Season
Haikyuu!! To the Top
Haikyuu!! To the Top Part 2
Haiyore! Nyaruko-san
Haiyore! Nyaruko-san W
Hajime no Ippo
Hajime no Ippo: New Challenger
Hajime no Ippo: Rising
Hakata Tonkotsu Ramens
Hakkenden -Eight Dogs of the East- Season 2
Hakkenden: Touhou Hakken Ibun 2nd Season
Hakumei and Mikochi
Hakumei to Mikochi
Hakuoki ~Demon of the Fleeting Blossom~
Hakuoki: Demon of the Fleeting Blossom - Record of the Jade Blood
Hakuouki
Hakuouki: Hekketsuroku
Hana Yori Dango
Hana yori Dango
Hanada Shounen-shi
Hanasakeru Seishonen
Hanasakeru Seishounen
Hanasaku Iroha
Hanasaku Iroha: Blossoms for Tomorrow
Hanyou no Yashahime: Sengoku Otogizoushi - Ni no Shou
Haré+Guu
Hataraku Maou-sama!
Hataraku Saibou
Haven't You Heard? I'm Sakamoto
Hayate no Gotoku!
Hayate no Gotoku!!
Hayate the Combat Butler
Hayate the Combat Butler!!
Heartcatch Precure!
Heaven's Memo Pad
Heavenly Delusion
Heavy Object
Heike Monogatari
Heion Sedai no Idaten-tachi
Hell Girl
Hell Girl: Three Vessels
Hell Girl: Two Mirrors
Hell Teacher Nube
Hell's Paradise
Hello! Lady Lynn
Hellsing
Hentai Ouji to Warawanai Neko.
Heroic Age
Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto
Heroines Run the Show: The Unpopular Girl and the Secret Task
Hi Score Girl
Hi Score Girl II
Hibi wa Sugiredo Meshi Umashi
Hibike! Euphonium
Hibike! Euphonium 2
Hibike! Euphonium 3
Hidamari Sketch x 365
Higashi no Eden
Hige wo Soru. Soshite Joshikousei wo Hirou.
Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway
Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.
High School DxD Hero
High School DxD New
High School of the Dead
High School! Kimengumi
High Score Girl
High Score Girl II
Highschool of the Dead
Higurashi no Naku Koro ni
Higurashi no Naku Koro ni Gou
Higurashi no Naku Koro ni Kai
Higurashi: When They Cry
Higurashi: When They Cry – Gou
Higurashi: When They Cry – Kai
Hiiro no Kakera 2nd Season
Hiiro no Kakera: The Tamayori Princess Saga Season 2
Hikaru no Go
Hikikomari Kyuuketsuki no Monmon
Hime-chan no Ribbon
Himesama "Goumon" no Jikan desu
Himouto! Umaru-chan
Hinamatsuri
Hinomaru Sumo
Hinomaruzumou
Hirogaru Sky! Precure
His and Her Circumstances
Hitoribocchi no Marumaru Seikatsu
Hitorijime My Hero
Hokkaido Gals Are Super Adorable!
Hokuto no Ken
Hokuto no Ken 2
Honey Lemon Soda
Honey and Clover
Honey and Clover II
Honobono Log
Honoo no Toukyuuji: Dodge Danpei
Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen
Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season
Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season
Hoozuki no Reitetsu 2nd Season
Horimiya
Horimiya: Piece
Horimiya: The Missing Pieces
Horizon in the Middle of Nowhere
Hoshiai no Sora
Hourou Musuko
House of Five Leaves
Houseki no Kuni
How Heavy Are the Dumbbells You Lift?
How a Realist Hero Rebuilt the Kingdom
How a Realist Hero Rebuilt the Kingdom Part 2
Hozuki's Coolheadedness 2
Hug tto! Precure
Humanity Has Declined
Hungry Heart: Wild Striker
Hunter x Hunter
Hunter x Hunter (2011)
Hyouge Mono
Hyouka
I Have a Crush at Work
I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability
I'm Quitting Heroing
I'm in Love with the Villainess
ID: INVADED
IDOLISH7 Third BEAT!
IDOLiSH7
IDOLiSH7 Second BEAT!
IDOLiSH7 Second Beat!
IDOLiSH7 Third BEAT! Part 2
IDOLiSH7 Third Beat!
IDOLiSH7 Third Beat! Part 2
IGPX: Immortal Grand Prix
IGPX: Immortal Grand Prix (2005)
Ichigo Mashimaro
Id:Invaded
Idol Time PriPara
Ie Naki Ko
Ie Naki Ko Remy
Igano Kabamaru
Ijiranaide, Nagatoro-san
Ima, Soko ni Iru Boku
Imouto sae Ireba Ii.
In the Heart of Kunoichi Tsubaki
Inazuma Eleven
Inazuma Eleven Go
Inazuma Eleven Go: Chrono Stone
Inazuma Eleven Go: Chrono Stones
Initial D Fifth Stage
Initial D Final Stage
Initial D First Stage
Initial D Fourth Stage
Insomniacs After School
Interviews With Monster Girls
Inu X Boku Secret Service
Inu x Boku SS
InuYasha
InuYasha: Kanketsu-hen
InuYasha: The Final Act
Inuyashiki
Inuyashiki: Last Hero
Iroduku: The World in Colors
Irozuku Sekai no Ashita kara
Is It Wrong to Try to Pick Up Girls in a Dungeon?
Is It Wrong to Try to Pick Up Girls in a Dungeon? II
Is It Wrong to Try to Pick Up Girls in a Dungeon? IV
Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2
Is It Wrong to Try to Pick Up Girls in a Dungeon? V
Is the Order a Rabbit? Bloom
Is the Order a Rabbit??
Isekai Nonbiri Nouka
Isekai Ojisan
Isekai Shokudou
Isekai Shokudou 2
Isshuukan Friends.
ItaKiss
Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
Itazura na Kiss
Itsudatte Bokura no Koi wa 10 cm Datta.
Jaku-Chara Tomozaki-kun
Jellyfish Can't Swim in the Night
Jibaku Shounen Hanako-kun
Jibaku Shounen Hanako-kun 2
Jigoku Sensei Nube
Jigoku Shoujo
Jigoku Shoujo Futakomori
Jigoku Shoujo Mitsuganae
Jigokuraku
Jiisan Baasan Wakagaeru
Jijou wo Shiranai Tenkousei ga Guigui Kuru.
Jinrui wa Suitai Shimashita
JoJo no Kimyou na Bouken (TV)
JoJo no Kimyou na Bouken Part 3: Stardust Crusaders
JoJo no Kimyou na Bouken Part 3: Stardust Crusaders - Egypt-hen
JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai
JoJo no Kimyou na Bouken Part 5: Ougon no Kaze
JoJo's Bizarre Adventure (2012)
JoJo's Bizarre Adventure: Diamond Is Unbreakable
JoJo's Bizarre Adventure: Golden Wind
JoJo's Bizarre Adventure: Stardust Crusaders
JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt
Joker Game
Jormungand
Jormungand Season 2: Perfect Order
Jormungand: Perfect Order
Joshikousei no Mudazukai
Jujutsu Kaisen
Jujutsu Kaisen 2nd Season
Jujutsu Kaisen Season 2
Jungle no Ouja Tar-chan
Jungle wa Itsumo Hare nochi Guu
Junjo Romantica
Junjo Romantica 2
Junjo Romantica 3
Junjou Romantica
Junjou Romantica 2
Junjou Romantica 3
Just Because!
Juuni Kokuki
K
K-ON!
K-ON! Season 2
K-On!
K-On!!
K: Return of Kings
KINMOZA!
Kage no Jitsuryokusha ni Naritakute!
Kage no Jitsuryokusha ni Naritakute! 2nd Season
Kageki Shojo!!
Kageki Shoujo!!
Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen
Kaguya-sama wa Kokurasetai: Ultra Romantic
Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen
Kaguya-sama: Love is War
Kaguya-sama: Love is War -Ultra Romantic-
Kaguya-sama: Love is War?
Kai Byoui Ramune
Kaiba
Kaichou wa Maid-sama!
Kaiji: Against All Rules
Kaiji: Ultimate Survivor
Kaiju No. 8
Kaijuu 8-gou
Kaitou Saint Tail
Kakegurui
Kakegurui××
Kakumeiki Valvrave
Kakumeiki Valvrave 2nd Season
Kakuriyo no Yadomeshi
Kakuriyo: Bed and Breakfast for Spirits
Kakushigoto
Kaleido Star
Kami no Tou
Kami nomi zo Shiru Sekai
Kami nomi zo Shiru Sekai II
Kami nomi zo Shiru Sekai: Megami-hen
Kamichama Karin
Kamisama Hajimemashita
Kamisama Hajimemashita◎
Kamisama Kiss
Kamisama Kiss Season 2
Kamisama no Memochou
Kamonohashi Ron no Kindan Suiri
Kamonohashi Ron no Kindan Suiri 2nd Season
Kanata no Astra
Kanojo ga Koushaku-tei ni Itta Riyuu
Kanojo mo Kanojo Season 2
Kanojo to Kanojo no Neko: Everything Flows
Kanon
Kanon (2006)
Kanpekisugite Kawaige ga Nai to Konyaku Haki sareta Seijo wa Ringoku ni Urareru
Karakai Jouzu no Takagi-san
Karakai Jouzu no Takagi-san 2
Karakai Jouzu no Takagi-san 3
Karakuri Circus
Karasu wa Aruji wo Erabanai
Kareshi Kanojo no Jijou
Karin
Karneval
Karneval (TV)
Katanagatari
Katekyou Hitman Reborn!
Katsute Mahou Shoujo to Aku wa Tekitai shiteita.
Kaze ga Tsuyoku Fuiteiru
Keep Your Hands Off Eizouken!
Kekkai Sensen
Kekkai Sensen & Beyond
Kekkaishi
Kekkon suru tte, Hontou desu ka
Kemono Friends
Kemono Jihen
Kemono no Souja Erin
Kemurikusa (TV)
KenIchi: The Mightiest Disciple
Kenpuu Denki Berserk
Kenran Butou Sai: The Mars Daybreak
Keroro Gunsou
Kidou Butouden G Gundam
Kidou Keisatsu Patlabor: On Television
Kidou Senkan Nadesico
Kidou Senshi Gundam
Kidou Senshi Gundam 00
Kidou Senshi Gundam 00 Second Season
Kidou Senshi Gundam SEED
Kidou Senshi Gundam SEED Destiny
Kidou Senshi Gundam Unicorn RE:0096
Kidou Senshi Gundam: GQuuuuuuX
Kidou Senshi Gundam: Suisei no Majo
Kidou Senshi Gundam: Suisei no Majo Season 2
Kidou Senshi Gundam: Tekketsu no Orphans
Kidou Senshi Gundam: Tekketsu no Orphans 2nd Season
Kidou Senshi Gundam: The Origin - Zenya Akai Suisei
Kidou Senshi Zeta Gundam
Kidou Shinseiki Gundam X
Kids on the Slope
Kijin Gentoushou
Kikou Souseiki Mospeada
Kill la Kill
Kimagure Orange Road
Kimagure Orange☆Road
Kimetsu no Yaiba
Kimetsu no Yaiba: Hashira Geiko-hen
Kimetsu no Yaiba: Katanakaji no Sato-hen
Kimetsu no Yaiba: Mugen Ressha-hen
Kimetsu no Yaiba: Yuukaku-hen
Kimi ni Todoke
Kimi ni Todoke 2nd Season
Kimi ni Todoke: From Me to You
Kimi ni Todoke: From Me to You Season 2
Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo
Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo 2nd Season
Kimi to Boku.
Kimi to Boku. 2
Kimi to Idol Precure♪
Kimi wa Houkago Insomnia
Kindaichi Shounen no Jikenbo
Kindaichi Shounen no Jikenbo Returns
Kindaichi Shounen no Jikenbo Returns 2nd Season
King of Braves GaoGaiGar
Kingdom
Kingdom 2nd Season
Kingdom 3rd Season
Kingdom 4th Season
Kingdom 5th Season
Kingdom: Season 2
Kingdom: Season 3
Kingdom: Season 4
Kingdom: Season 5
Kiniro Mosaic
Kinnikuman
Kino no Tabi: The Beautiful World
Kino no Tabi: The Beautiful World - The Animated Series
Kino's Journey
Kino's Journey -the Beautiful World- the Animated Series
Kirakira Pretty Cure A La Mode
Kirakira☆Precure A La Mode
Kirarin Revolution
Kirarin☆Revolution
Kiseijuu: Sei no Kakuritsu
Kishin Douji Zenki
Kishuku Gakkou no Juliet
Knight's & Magic
Knights of Sidonia
Knights of Sidonia: Battle for Planet Nine
Kobato.
Kobayashi-san Chi no Maid Dragon
Kobayashi-san Chi no Maid Dragon S
Kochira Katsushikaku Kameari Kouenmae Hashutsujo
Kodocha
Kodomo no Omocha (TV)
Koi to Yobu ni wa Kimochi Warui
Koi wa Ameagari no You ni
Koi wa Sekai Seifuku no Ato de
Koikimo
Kokkoku
Kokoro Connect
Komi Can't Communicate
Komi Can't Communicate Season 2
Komi-san wa, Comyushou desu.
Komi-san wa, Comyushou desu. 2nd Season
Konjiki no Gash Bell!!
Konnichiwa Anne: Before Green Gables
Kono Kaisha ni Suki na Hito ga Imasu
Kono Oto Tomare!
Kono Oto Tomare! Part 2
Kono Oto Tomare!: Sounds of Life
Kono Oto Tomare!: Sounds of Life Season 2
Kono Subarashii Sekai ni Bakuen wo!
Kono Subarashii Sekai ni Shukufuku wo!
Kono Subarashii Sekai ni Shukufuku wo! 2
Kono Subarashii Sekai ni Shukufuku wo! 3
KonoSuba: An Explosion on This Wonderful World!
KonoSuba: God's Blessing on This Wonderful World!
KonoSuba: God's Blessing on This Wonderful World! 2
KonoSuba: God's Blessing on This Wonderful World! 3
Koukaku Kidoutai: Stand Alone Complex
Koukaku Kidoutai: Stand Alone Complex 2nd GIG
Koukyoushihen Eureka Seven
Koukyuu no Karasu
Kowloon Generic Romance
Kubo Won't Let Me Be Invisible
Kubo-san wa Mob wo Yurusanai
Kujira no Kora wa Sajou ni Utau
Kumichou Musume to Sewagakari
Kumo desu ga, Nani ka?
Kunoichi Tsubaki no Mune no Uchi
Kuragehime
Kuro no Shoukanshi
Kuroko no Basket
Kuroko no Basket 2nd Season
Kuroko no Basket 3rd Season
Kuroko's Basketball
Kuroko's Basketball 2
Kuroko's Basketball 3
Kuroshitsuji
Kuroshitsuji II
Kuroshitsuji: Book of Circus
Kuroshitsuji: Kishuku Gakkou-hen
Kuroshitsuji: Midori no Majo-hen
Kusuriya no Hitorigoto
Kusuriya no Hitorigoto 2nd Season
Kuuchuu Buranko
Kuzu no Honkai
Kyou kara Maou!
Kyoukai no Kanata
Kyoukai no Rinne 3rd Season
Kyoukaisenjou no Horizon
Kyousou Giga (TV)
Kyousougiga
LBX: Little Battlers eXperience
LBX: Little Battlers eXperience Season 2
Lady Lady!!
Laid-Back Camp
Laid-Back Camp Season 2
Laid-Back Camp Season 3
Land of the Lustrous
Last Exile
Last Exile: Fam, the Silver Wing
Last Exile: Ginyoku no Fam
Legend of the Galactic Heroes: Die Neue These
Les Misérables: Shoujo Cosette
Let This Grieving Soul Retire
Life Lessons with Uramichi-Oniisan
Little Busters! Refrain
Little Busters! ~Refrain~
Little Miss Maruko
Little Witch Academia
Little Witch Academia (TV)
Little Women II: Jo's Boys
Lodoss-tou Senki: Eiyuu Kishi Den
Log Horizon 2
Log Horizon 2nd Season
Log Horizon: Destruction of the Round Table
Log Horizon: Entaku Houkai
Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru
Lost Universe
Love After World Domination
Love Live! Nijigasaki Gakuen School Idol Doukoukai
Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season
Love Live! Nijigasaki High School Idol Club
Love Live! Nijigasaki High School Idol Club Season 2
Love Live! School Idol Project 2
Love Live! School Idol Project 2nd Season
Love Live! Sunshine!!
Love Live! Sunshine!! 2nd Season
Love Live! Sunshine!! Season 2
Love Live! SuperStar!!
Love Live! Superstar!!
Love Live! Superstar!! 2nd Season
Love Live! Superstar!! 3rd Season
Love Live! Superstar!! Season 2
Love Live! Superstar!! Season 3
Love, Chunibyo & Other Delusions!
Love, Chunibyo & Other Delusions!: Heart Throb
Lovely Complex
Lovely★Complex
Lucky☆Star
Lupin III
Lupin III (2015)
Lupin III: Part 5
Lupin III: Part 6
Lupin III: Part II
Lupin the Third Part 4
Lupin the Third Part 5
Lupin the Third Part 6
Lupin the Third: Mine Fujiko to Iu Onna
Lupin the Third: The Woman Called Fujiko Mine
Lycoris Recoil
MF Ghost
MF Ghost 2nd Season
MF Ghost Season 2
MIX
MIX Season 2
MM!
Machikado Mazoku
Machikado Mazoku: 2-choume
Macross
Macross 7
Macross F
Macross Frontier
Made in Abyss
Made in Abyss: Retsujitsu no Ougonkyou
Made in Abyss: The Golden City of the Scorching Sun
Magi: Adventure of Sinbad
Magi: Sinbad no Bouken (TV)
Magi: The Kingdom of Magic
Magi: The Labyrinth of Magic
Magia Record: Mahou Shoujo Madoka☆Magica Gaiden 2nd Season - Kakusei Zenya
Magia Record: Puella Magi Madoka Magica Side Story Season 2 - The Eve of Awakening
Magic Kaito 1412
Magical Circle
Magical Circle Guru Guru
Magical Girl Lyrical Nanoha
Magical Girl Lyrical Nanoha A's
Magical Girl Lyrical Nanoha StrikerS
Mahou Shoujo Lyrical Nanoha
Mahou Shoujo Lyrical Nanoha A's
Mahou Shoujo Lyrical Nanoha StrikerS
Mahou Shoujo Madoka★Magica
Mahou Shoujo ni Akogarete
Mahoujin Guruguru
Mahoujin Guruguru (2017)
Mahouka Koukou no Rettousei
Mahouka Koukou no Rettousei 3rd Season
Mahouka Koukou no Rettousei: Raihousha-hen
Mahoutsukai Precure!! Mirai Days
Mahoutsukai no Yome
Mahoutsukai no Yome Season 2
Mahoutsukai no Yome Season 2 Part 2
Maid Sama!
Mairimashita! Iruma-kun
Mairimashita! Iruma-kun 2nd Season
Mairimashita! Iruma-kun 3rd Season
Maison Ikkoku
Majin Tantei Nougami Neuro
Majo no Tabitabi
Major 2nd
Major 2nd 2nd Season
Major S1
Major S2
Major S3
Major S4
Major S5
Major S6
Make Heroine ga Oosugiru!
Makeine: Too Many Losing Heroines!
Maou 2099
Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?
Maoujou de Oyasumi
March Comes In Like a Lion
March Comes In Like a Lion 2nd Season
Maria Watches Over Us Season 4
Maria Watches Over Us: Printemps
Maria-sama ga Miteru 4th
Maria-sama ga Miteru: Haru
Maria†Holic
Mars Daybreak
Martian Successor Nadesico
Masamune-kun no Revenge R
Masamune-kun's Revenge R
Mashiro no Oto
Mashiro-iro Symphony: The Color of Lovers
Mashiroiro Symphony: The Color of Lovers
Mashle
Mashle: Magic and Muscles
Mashle: Magic and Muscles The Divine Visionary Candidate Exam Arc
Mashle: Shinkakusha Kouho Senbatsu Shiken-hen
Master Keaton
Mawaru Penguindrum
Mazinger Edition Z: The Impact!
Medalist
Megalo Box
Megalobox
Megalobox 2: Nomad
Megami no Café Terrace
Megami no Café Terrace 2nd Season
Meikyuu Black Company
Meitantei Conan
Meitantei Conan: Zero no Tea Time
Mekakucity Actors
Mermaid Melody Pichi Pichi Pitch
Mermaid Melody: Pichi Pichi Pitch
Michiko & Hatchin
Michiko to Hatchin
Migi & Dali
Migi to Dali
Minami-ke Tadaima
Mirai Nikki (TV)
Mirai Shounen Conan
Miss Kobayashi's Dragon Maid
Miss Kobayashi's Dragon Maid S
Mission: Yozakura Family
Mitsudomoe
Mitsudomoe Zouryouchuu!
Mix: Meisei Story
Mix: Meisei Story 2nd Season - Nidome no Natsu, Sora no Mukou e
Mnemosyne: Mnemosyne no Musume-tachi
Mob Psycho 100
Mob Psycho 100 II
Mob Psycho 100 III
Mobile Fighter G Gundam
Mobile Suit Gundam
Mobile Suit Gundam 00
Mobile Suit Gundam 00: Second Season
Mobile Suit Gundam SEED
Mobile Suit Gundam SEED Destiny
Mobile Suit Gundam Unicorn RE:0096
Mobile Suit Gundam Wing
Mobile Suit Gundam: GQuuuuuuX
Mobile Suit Gundam: Iron-Blooded Orphans
Mobile Suit Gundam: Iron-Blooded Orphans 2nd Season
Mobile Suit Gundam: The Origin - Advent of the Red Comet
Mobile Suit Gundam: The Witch from Mercury
Mobile Suit Gundam: The Witch from Mercury Season 2
Mobile Suit Zeta Gundam
Mojakou
Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?
Mono
Monogatari Series: Second Season
Mononoke
Monster
Monthly Girls' Nozaki-kun
Moomin
More than a Married Couple, but Not Lovers.
Moriarty the Patriot
Moriarty the Patriot Part 2
Motto To LOVE Ru
Motto To LOVE-Ru
Mouretsu Pirates
Moyashimon
Mr. Osomatsu
Mr. Osomatsu 2
Mr. Osomatsu 3
Mr. Tonegawa: Middle Management Blues
Mujin Wakusei Survive
Munou na Nana
Musekinin Kanchou Tylor
Mushi-Shi
Mushi-shi: Next Passage Part 1
Mushi-shi: Next Passage Part 2
Mushishi
Mushishi Zoku Shou
Mushishi Zoku Shou 2nd Season
Mushoku Tensei II: Isekai Ittara Honki Dasu
Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2
Mushoku Tensei: Isekai Ittara Honki Dasu
Mushoku Tensei: Isekai Ittara Honki Dasu Part 2
Mushoku Tensei: Jobless Reincarnation
Mushoku Tensei: Jobless Reincarnation Part 2
Mushoku Tensei: Jobless Reincarnation Season 2
Mushoku Tensei: Jobless Reincarnation Season 2 Part 2
Mutsu Enmei Ryuu Gaiden: Shura no Toki
Muv-Luv Alternative: Total Eclipse
My Bride is a Mermaid
My Clueless First Friend
My Daddy Long Legs
My Deer Friend Nokotan
My Dress-Up Darling
My Family
My Happy Marriage
My Happy Marriage Season 2
My Hero Academia
My Hero Academia Season 2
My Hero Academia Season 3
My Hero Academia Season 4
My Hero Academia Season 6
My Hero Academia Season 7
My Hero Academia: Vigilantes
My Little Monster
My Love Story with Yamada-kun at Lv999
My Love Story!!
My New Boss Is Goofy
My Next Life as a Villainess: All Routes Lead to Doom!
My Roommate is a Cat
My Senpai is Annoying
My Teen Romantic Comedy SNAFU
My Teen Romantic Comedy SNAFU Climax!
My Teen Romantic Comedy SNAFU TOO!
Mysterious Play
Mysterious Thief Saint Tail
MÄR
NHK ni Youkoso!
Nabari no Ou
Nadia: The Secret of Blue Water
Nageki no Bourei wa Intai shitai
Nagi no Asu kara
Nana
Nanana's Buried Treasure
Nanatsu no Taizai
Nanatsu no Taizai: Imashime no Fukkatsu
Nanatsu no Taizai: Mokushiroku no Yonkishi
Nanatsu no Taizai: Mokushiroku no Yonkishi 2nd Season
Naruto
Naruto Shippuden
Naruto: Shippuuden
Natsume Yuujinchou
Natsume Yuujinchou Go
Natsume Yuujinchou Roku
Natsume Yuujinchou San
Natsume Yuujinchou Shi
Natsume Yuujinchou Shichi
Natsume's Book of Friends
Natsume's Book of Friends Season 2
Natsume's Book of Friends Season 3
Natsume's Book of Friends Season 4
Natsume's Book of Friends Season 5
Natsume's Book of Friends Season 6
Natsume's Book of Friends Season 7
Neighborhood Stories
Nejimaki Seirei Senki: Tenkyou no Alderamin
Nekketsu Saikyou Go-Saurer
Neo Angelique Abyss: Second Age
Neon Genesis Evangelion
Net-juu no Susume
Neuro: Supernatural Detective
New Game!
New Game!!
Nichijou
Nichijou - My Ordinary Life
NieR:Automata Ver1.1a
NieR:Automata Ver1.1a (Cour 2)
NieR:Automata Ver1.1a Part 2
Niehime to Kemono no Ou
Nige Jouzu no Wakagimi
Nijiiro Days
Nijuu Mensou no Musume
Nintama Rantarou
Nisekoi
Nisekoi:
Nisekoi: False Love
Nisekoi: False Love Season 2
No Game No Life
No Game, No Life
No Guns Life 2nd Season
No Guns Life Season 2
No. 6
No.6
Nobody's Boy Remi
Nodame Cantabile
Nodame Cantabile Finale
Nodame Cantabile: Paris-hen
Noein: Mou Hitori no Kimi e
Noein: To Your Other Self
Nomad: Megalo Box 2
Non Non Biyori
Non Non Biyori Nonstop
Non Non Biyori Repeat
Noragami
Noragami Aragoto
Now and Then, Here and There
Nura: Rise of the Yokai Clan
Nura: Rise of the Yokai Clan - Demon Capital
Nurarihyon no Mago
Nurarihyon no Mago: Sennen Makyou
Nyaruko: Crawling With Love!
Nyaruko: Crawling With Love! Second Season
Oban Star-Racers
Oblivion Battery
Ochame na Futago: Claire Gakuin Monogatari
Odd Taxi
Ojamajo Doremi Dokkaan!
Okami-San and Her Seven Companions
One Outs
One Piece
One Piece Log: Fish-Man Island Saga
One Piece: Gyojin Tou-hen
One Punch Man
One Punch Man 2nd Season
One Punch Man Season 2
One Week Friends
Oniichan wa Oshimai!
Oniisama e...
Onimai: I'm Now Your Sister!
Ooi! Tonbo
Ookami to Koushinryou
Ookami to Koushinryou II
Ookami to Koushinryou: Merchant Meets the Wise Wolf
Ookami-san to Shichinin no Nakama-tachi
Ookiku Furikabutte
Ookiku Furikabutte: Natsu no Taikai-hen
Orange
Orb: On the Movements of the Earth
Ore Monogatari!!
Ore dake Level Up na Ken
Ore dake Level Up na Ken Season 2: Arise from the Shadow
Osomatsu-san
Osomatsu-san 2nd Season
Osomatsu-san 3rd Season
Otaku Elf
Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...
Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken
Our love has always been 10 centimeters apart.
Ouran High School Host Club
Ouran Koukou Host Club
Ousama Ranking
Ousama Ranking: Yuuki no Takarabako
Outlaw Star
Over Drive
Overlord
Overlord II
Overlord III
Overlord IV
Overtake!
Owari no Seraph
Owari no Seraph: Nagoya Kessen-hen
Owarimonogatari
Pandora Hearts
Panty & Stocking with Garterbelt
Paradise Kiss
Parasyte: The Maxim
Paripi Koumei
Patapata Hikousen no Bouken
Patlabor: The Mobile Police - The TV Series
Penguindrum
Perrine Monogatari
Persona 4 the Animation
Phantom: Requiem for the Phantom
Phi Brain: Kami no Puzzle - Orpheus Order-hen
Phi-Brain ~ Puzzle of God: The Orpheus Order
Piano no Mori (TV) 2nd Season
Ping Pong the Animation
Planetes
Plastic Memories
Play It Cool, Guys
Poco's Udon World
Pokemon
Pokemon (2019)
Pokemon (2023)
Pokemon Advanced Generation
Pokemon XY
Pokemon XY&Z
Pokemon: Mezase Pokemon Master
Pokémon
Pokémon Horizons: The Series
Pokémon Journeys: The Series
Pokémon the Series: XY
Pokémon the Series: XYZ
Pokémon: Advanced
Pokémon: To Be a Pokémon Master
Polar Bear Cafe
Pop Team Epic Season 2
Poputepipikku 2nd Season
Pretty Boy Detective Club
Pretty Cure
Pretty Cure Max Heart
Pretty Cure Splash Star
Pretty Guardian Sailor Moon Crystal Season III
Pretty Rhythm: Rainbow Live
PriPara
Princess Connect! Re:Dive Season 2
Princess Jellyfish
Princess Principal
Princess Sara
Princess Tutu
Prison School
Problem Children Are Coming from Another World, Aren't They?
Pseudo Harem
Psychic Detective Yakumo
Psycho-Pass
Psycho-Pass 2
Psycho-Pass 3
Puella Magi Madoka Magica
Qin Shi Mingyue: Wanli Changcheng
Qin's Moon: The Great Wall
R.O.D -The TV-
R.O.D: The TV
RADIANT Season 2
RIN-NE Season 3
Radiant 2nd Season
Rage of Bahamut: Genesis
Ragna Crimson
RahXephon
Rainbow
Rainbow Days
Rainbow: Nisha Rokubou no Shichinin
Raise wa Tanin ga Ii
Rakudai Kishi no Cavalry
Ramen Akaneko
Ranking of Kings
Ranking of Kings: The Treasure Chest of Courage
Ranma ½
Ranma ½ (2024)
Rascal Does Not Dream of Bunny Girl Senpai
Raven of the Inner Palace
Re-Main
Re:CREATORS
Re:Creators
Re:ZERO -Starting Life in Another World-
Re:ZERO -Starting Life in Another World- Season 2
Re:ZERO -Starting Life in Another World- Season 2 Part 2
Re:ZERO -Starting Life in Another World- Season 3
Re:Zero kara Hajimeru Isekai Seikatsu
Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season
Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2
Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season
ReLIFE
Real Girl Season 2
Reborn!
Record of Lodoss War: Chronicles of the Heroic Knight
Recovery of an MMO Junkie
Reincarnated as a Sword
Restaurant to Another World
Restaurant to Another World 2
Revolutionary Girl Utena
Revue Starlight
Rewrite 2nd Season
Rewrite: Moon and Terra
Rin: Daughters of Mnemosyne
Rock Is a Lady's Modesty
Rock wa Lady no Tashinami deshite
Rockman.EXE Stream
Rokka no Yuusha
Rokka: Braves of the Six Flowers
Rokudenashi Majutsu Koushi to Akashic Records
Rokuhou-dou Yotsuiro Biyori
Romeo no Aoi Sora
Romeo x Juliet
Romeo's Blue Skies
Ron Kamonohashi's Forbidden Deductions
Ron Kamonohashi's Forbidden Deductions Season 2
Rozen Maiden
Rozen Maiden: Träumend
Run with the Wind
Runway de Waratte
Rurouni Kenshin
Rurouni Kenshin: Kyoto Disturbance
Rurouni Kenshin: Meiji Kenkaku Romantan
Rurouni Kenshin: Meiji Kenkaku Romantan (2023)
Rurouni Kenshin: Meiji Kenkaku Romantan - Kyoto Douran
Ryman's Club
Ryuugajou Nanana no Maizoukin
SK8 the Infinity
SKET Dance
SK∞
SSSS.Dynazenon
SSSS.Gridman
Saber Marionette J
Sacrificial Princess and the King of Beasts
Saekano: How to Raise a Boring Girlfriend
Saekano: How to Raise a Boring Girlfriend .flat
Saenai Heroine no Sodatekata
Saenai Heroine no Sodatekata ♭
Saga of Tanya the Evil
Sagrada Reset
Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita.
Saiki Kusuo no Ψ-nan
Saiki Kusuo no Ψ-nan 2
Saikyou no Shienshoku "Wajutsushi" de Aru Ore wa Sekai Saikyou Clan wo Shitagaeru
Sailor Moon R
Sailor Moon S
Sailor Moon Sailor Stars
Saint Seiya
Saint Seiya: Knights of the Zodiac
Saiunkoku Monogatari
Saiyuki
Saiyuki Gunlock
Saiyuuki Reload Gunlock
Sakamichi no Apollon
Sakamoto Days
Sakamoto desu ga?
Sakigake!! Cromartie Koukou
Sakura-sou no Pet na Kanojo
Sakurada Reset
Salaryman's Club
Samurai Champloo
Samurai Troopers
Sans Famille
Saraiya Goyou
Sasaki and Miyano
Sasaki to Miyano
Sayonara Zetsubou Sensei
Sayonara, Zetsubou-Sensei
School Babysitters
School Rumble
School Rumble Ni Gakki
School Rumble: 2nd Semester
School-Live!
Scum's Wish
Searching for the Full Moon
Secret of Cerulean Sand
Seihou Bukyou Outlaw Star
Seijo no Maryoku wa Bannou desu
Seikai no Monshou
Seikai no Senki
Seikai no Senki II
Seirei Gensouki
Seirei Gensouki: Spirit Chronicles
Seisenshi Dunbine
Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
Seitokai Yakuindomo
Seitokai Yakuindomo*
Sekai Ichi Hatsukoi - World's Greatest First Love
Sekai Ichi Hatsukoi - World's Greatest First Love 2
Sekai Seifuku: Bouryaku no Zvezda
Sekaiichi Hatsukoi
Sekaiichi Hatsukoi 2
Selector Infected WIXOSS
Sengoku Youko 2nd Season
Sengoku Youko: Senma Konton-hen
Senjou no Valkyria
Senki Zesshou Symphogear
Senki Zesshou Symphogear AXZ
Senki Zesshou Symphogear G
Senki Zesshou Symphogear GX
Senki Zesshou Symphogear XV
Senpai ga Uzai Kouhai no Hanashi
Sentai Daishikkaku 2nd Season
Sentou Mecha Xabungle
Sentouin, Haken shimasu!
Seraph of the End: Battle in Nagoya
Seraph of the End: Vampire Reign
Serial Experiments Lain
Servant x Service
Seto no Hanayome
Sexy Commando Gaiden: Sugoi yo!! Masaru-san
Sgt. Frog
Shadows House
Shadows House 2nd Season
Shakugan no Shana II (Second)
Shakugan no Shana III (Final)
Shakugan no Shana: Season II
Shakugan no Shana: Season III
Shaman King
Shangri-La Frontier
Shangri-La Frontier Season 2
Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su
Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su 2nd Season
She and Her Cat: Everything Flows
Shigatsu wa Kimi no Uso
Shijou Saikyou no Deshi Kenichi
Shikabane Hime: Kuro
Shikanoko Nokonoko Koshitantan
Shiki
Shin Chan
Shin Kidou Senki Gundam Wing
Shin Mazinger Shougeki! Z-hen
Shin Tennis no Oujisama
Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru
Shingeki no Bahamut: Genesis
Shingeki no Kyojin
Shingeki no Kyojin Season 2
Shingeki no Kyojin Season 3
Shingeki no Kyojin Season 3 Part 2
Shingeki no Kyojin: The Final Season
Shingeki no Kyojin: The Final Season Part 2
Shingeki! Kyojin Chuugakkou
Shingu: Secret of the Stellar Wars
Shinigami Bocchan to Kuro Maid
Shinigami Bocchan to Kuro Maid 2nd Season
Shinigami Bocchan to Kuro Maid 3rd Season
Shinrei Tantei Yakumo
Shinryaku!? Ika Musume
Shinseiki Evangelion
Shinsekai yori
Shion no Ou
Shirobako
Shiroi Suna no Aquatope
Shirokuma Cafe
Shokugeki no Souma
Shokugeki no Souma: Ni no Sara
Shokugeki no Souma: San no Sara
Shokugeki no Souma: San no Sara - Tootsuki Ressha-hen
Shokugeki no Souma: Shin no Sara
Shonen Onmyoji
Shoshimin: How to Become Ordinary Season 2
Shoubushi Densetsu Tetsuya
Shoujo Kakumei Utena
Shoujo Shuumatsu Ryokou
Shoujo☆Kageki Revue Starlight
Shoukoku no Altair
Shounen Onmyouji
Shoushimin Series 2nd Season
Shouwa Genroku Rakugo Shinjuu
Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen
Showa Genroku Rakugo Shinju
Shuffle!
Shugo Chara!
Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?
Sidonia no Kishi
Sidonia no Kishi: Daikyuu Wakusei Seneki
Silver Fang
Silver Spoon
Silver Spoon 2nd Season
Skeleton Knight in Another World
Skip Beat!
Skip and Loafer
Skip to Loafer
Slam Dunk
Slayers
Slayers Next
Slayers Try
Sleepy Princess in the Demon Castle
Smile Down the Runway
Snow White with the Red Hair
Snow White with the Red Hair 2
So I'm a Spider, So What?
So Ra No Wo To
Soaring Sky! Pretty Cure
Solo Leveling
Solo Leveling Season 2: Arise from the Shadow
Solty Rei
Somali and the Forest Spirit
Somali to Mori no Kamisama
Sono Bisque Doll wa Koi wo Suru
Sora yori mo Tooi Basho
Sorairo Utility
Sorairo Utility (TV)
Soredemo Sekai wa Utsukushii
Soukou Kihei Votoms
Soukyuu no Fafner: Dead Aggressor
Soul Eater
Sound of the Sky
Sound! Euphonium
Sound! Euphonium 2
Sound! Euphonium 3
Sousei no Aquarion
Sousou no Frieren
Space Adventure Cobra
Space Brothers
Space Cobra
Space Dandy
Space Patrol Luluco
Space Pirate Captain Harlock
Space Runaway Ideon
Space☆Dandy
Special A
Special A (S.A)
Spice and Wolf
Spice and Wolf II
Spice and Wolf: Merchant Meets the Wise Wolf
Spy x Family
Spy x Family Part 2
Spy x Family Season 2
Star Blazers: The Bolar Wars
Star Blazers: The Quest for Iscandar
Star Driver
Star Driver: Kagayaki no Takuto
Stars Align
Star☆Twinkle Precure
Star☆Twinkle Pretty Cure
Steins;Gate
Steins;Gate 0
Stop!! Hibari-kun!
Strawberry Marshmallow
Street Fighter II V
Street Fighter II: The Animated Series
Strike the Blood
Student Council Staff Members
Sugar Apple Fairy Tale Part 2
Sugar Sugar Rune
Suite Precure♪
Suki na Ko ga Megane wo Wasureta
Summer Pockets
Summer Time Rendering
Summertime Render
Super Dimension Fortress Macross
Suzuka
Suzumiya Haruhi no Yuuutsu
Suzumiya Haruhi no Yuuutsu (2009)
Sweetness & Lightning
Sword Art Online
Sword Art Online Alternative: Gun Gale Online
Sword Art Online Alternative: Gun Gale Online II
Sword Art Online: Alicization
Sword Art Online: Alicization - War of Underworld
Sword Art Online: Alicization - War of Underworld 2nd Season
Sword Art Online: Alicization - War of Underworld Part 2
Sword Oratoria: Is It Wrong to Try to Pick Up Girls in a Dungeon? On the Side
Sword of the Demon Hunter: Kijin Gentosho
Symphogear
Symphogear AXZ
Symphogear G
Symphogear GX
Symphogear XV
THE IDOLM@STER
THE IDOLM@STER CINDERELLA GIRLS
THE IDOLM@STER SideM
TRILLION GAME
Tada Never Falls in Love
Tada-kun wa Koi wo Shinai
Tadaima, Okaeri
Taiho Shichau zo (TV)
Taisho Otome Fairy Tale
Taishou Otome Otogibanashi
Taiyou no Ko Esteban
Takarajima
Takt Op. Destiny
Talentless Nana
Tales of Zestiria the Cross
Tales of Zestiria the X
Tamayura: More Aggressive
Tanaka-kun is Always Listless
Tanaka-kun wa Itsumo Kedaruge
Tanoshii Muumin Ikka
Tanoshii Muumin Ikka Bouken Nikki
Tantei Gakuen Q
Tasogare Otome x Amnesia
Tate no Yuusha no Nariagari
Tate no Yuusha no Nariagari Season 3
Tearmoon Empire
Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story
Teasing Master Takagi-san
Teasing Master Takagi-san 2
Teasing Master Takagi-san 3
Tegami Bachi: Letter Bee
Tegami Bachi: Letter Bee Reverse
Tegamibachi
Tegamibachi Reverse
Tengen Toppa Gurren Lagann
Tengoku Daimakyou
Tenkuu no Escaflowne
Tennis no Oujisama
Tensei Oujo to Tensai Reijou no Mahou Kakumei
Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu
Tensei shitara Ken deshita
Tensei shitara Slime Datta Ken
Tensei shitara Slime Datta Ken 2nd Season
Tensei shitara Slime Datta Ken 2nd Season Part 2
Tensei shitara Slime Datta Ken 3rd Season
Tensura Nikki: Tensei shitara Slime Datta Ken
Tentai Senshi Sunred
Tentai Senshi Sunred 2nd Season
Terra Formars
Terra e... (TV)
Terror in Resonance
Tetsujin 28
Tetsujin 28-gou (2004)
Tetsuwan Birdy Decode
Tetsuwan Birdy Decode:02
Texhnolyze
That Time I Got Reincarnated as a Slime
That Time I Got Reincarnated as a Slime Season 2
That Time I Got Reincarnated as a Slime Season 2 Part 2
That Time I Got Reincarnated as a Slime Season 3
The "Hentai" Prince and the Stony Cat.
The 100 Girlfriends Who Really, Really, Really, Really, Really Love You
The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2
The Ancient Magus' Bride
The Ancient Magus' Bride Season 2
The Ancient Magus' Bride Season 2 Part 2
The Angel Next Door Spoils Me Rotten
The Apothecary Diaries
The Apothecary Diaries Season 2
The Aquatope on White Sand
The Asterisk War Season 2
The Beast Player Erin
The Big O
The Café Terrace and Its Goddesses
The Café Terrace and Its Goddesses Season 2
The Case Study of Vanitas
The Case Study of Vanitas Part 2
The Dangers in My Heart
The Dangers in My Heart Season 2
The Daughter of 20 Faces
The Demon Girl Next Door
The Demon Girl Next Door 2
The Devil is a Part-Timer!
The Disastrous Life of Saiki K.
The Disastrous Life of Saiki K. 2
The Duke of Death and His Maid
The Duke of Death and His Maid Season 2
The Duke of Death and His Maid Season 3
The Dungeon of Black Company
The Eccentric Family
The Eccentric Family 2
The Eden of Grisaia
The Elusive Samurai
The Eminence in Shadow
The Eminence in Shadow Season 2
The Fable
The Familiar of Zero
The Familiar of Zero: Knight of the Twin Moons
The Familiar of Zero: Rondo of Princesses
The File of Young Kindaichi
The File of Young Kindaichi Returns
The File of Young Kindaichi Returns 2nd Season
The Flowers of Hard Blood
The Future Diary
The Girl I Like Forgot Her Glasses
The God of High School
The Great Passage
The Heike Story
The Heroic Legend of Arslan
The Heroic Legend of Arslan: Dust Storm Dance
The Idaten Deities Know Only Peace
The Irregular at Magic High School
The Irregular at Magic High School Season 3
The Irregular at Magic High School: Visitor Arc
The Irresponsible Captain Tylor
The Kawai Complex Guide to Manors and Hostel Behavior
The Law of Ueki
The Legend of the Legendary Heroes
The Magical Girl and the Evil Lieutenant Used to Be Archenemies
The Magical Revolution of the Reincarnated Princess and the Genius Young Lady
The Masterful Cat Is Depressed Again Today
The Melancholy of Haruhi Suzumiya
The Melancholy of Haruhi Suzumiya Season 2
The Millionaire Detective – Balance: Unlimited
The Mischevious Twins
The Morose Mononokean II
The Most Heretical Last Boss Queen: From Villainess to Savior
The Most Notorious "Talker" Runs the World's Greatest Clan
The Mysterious Cities of Gold
The Pet Girl of Sakurasou
The Prince of Tennis
The Prince of Tennis II
The Promised Neverland
The Quintessential Quintuplets
The Quintessential Quintuplets 2
The Rising of the Shield Hero
The Rising of the Shield Hero Season 3
The Rose of Versailles
The Saint's Magic Power is Omnipotent
The Seven Deadly Sins
The Seven Deadly Sins: Four Knights of the Apocalypse
The Seven Deadly Sins: Four Knights of the Apocalypse Season 2
The Seven Deadly Sins: Revival of the Commandments
The Slime Diaries
The Squid Girl 2
The Story of Saiunkoku
The Tatami Galaxy
The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom
The Trapp Family Story
The Twelve Kingdoms
The Vexations of a Shut-In Vampire Princess
The Vision of Escaflowne
The Wallflower
The Weakest Tamer Began a Journey to Pick Up Trash
The World God Only Knows
The World God Only Knows II
The World God Only Knows: Goddesses
The World is Still Beautiful
The Wrong Way to Use Healing Magic
The Yakuza's Guide to Babysitting
The Yuzuki Family's Four Sons
The iDOLM@STER
The iDOLM@STER Cinderella Girls
The iDOLM@STER Cinderella Girls: U149
The iDOLM@STER SideM
Those Snow White Notes
Tiger & Bunny
Time Quest
Time Travel Tondekeman!
Time of Shura
To LOVE Ru Darkness
To LOVE-Ru
To LOVE-Ru Darkness
To Love Ru
To Your Eternity Season 2
Toaru Kagaku no Railgun
Toaru Kagaku no Railgun S
Toaru Kagaku no Railgun T
Toaru Majutsu no Index
Toaru Majutsu no Index II
Toilet-Bound Hanako-kun
Toilet-Bound Hanako-kun Season 2
Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san
Tokyo Ghoul
Tokyo Ghoul √A
Tokyo Magnitude 8.0
Tokyo Ravens
Tokyo Revengers
Tokyo Revengers: Christmas Showdown
Tokyo Revengers: Seiya Kessen-hen
Tomo-chan Is a Girl!
Tomo-chan wa Onnanoko!
Tomodachi Game
Tomorrow's Joe
Tomorrow's Joe 2
Tomorrow's Nadja
Tonari no Kaibutsu-kun
Tonari no Seki-kun
Tonari no Seki-kun: The Master of Killing Time
Tonbo!
Tondemo Skill de Isekai Hourou Meshi
Tonikaku Kawaii
Tonikaku Kawaii 2nd Season
Tonikawa: Over The Moon For You
Tonikawa: Over The Moon For You Season 2
Toradora!
Toriko
Touch
Touhai Densetsu Akagi: Yami ni Maiorita Tensai
Touken Ranbu - Hanamaru 2
Toushou Daimos
Toward the Terra (TV)
Tower of God
Trapp Ikka Monogatari
Treasure Island
Trigun
Trigun Stampede
Trillion Game
Trinity Seven
Tropical-Rouge! Precure
Tropical-Rouge! Pretty Cure
True Tears
Tsubasa Chronicle
Tsubasa Chronicle 2nd Season
Tsubasa RESERVoir CHRoNiCLE
Tsubasa RESERVoir CHRoNiCLE Season Two
Tsue to Tsurugi no Wistoria
Tsugumomo
Tsuki ga Kirei
Tsuki ga Michibiku Isekai Douchuu
Tsuki ga Michibiku Isekai Douchuu 2nd Season
Tsukigakirei
Tsukimichi -Moonlit Fantasy-
Tsukimichi -Moonlit Fantasy- Season 2
Tsuma, Shougakusei ni Naru.
TsumaSho
Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san
Tsuredure Children
Tsurezure Children
Tsuritama
Tsurune - The Linking Shot -
Tsurune: Kazemai High School Kyudo Club
Tsurune: Kazemai Koukou Kyuudou-bu
Tsurune: Tsunagari no Issha
Turn A Gundam
Twin Spica
Tying the Knot with an Amagami Sister
UFO Robo Grendizer
Uchouten Kazoku
Uchouten Kazoku 2
Uchuu Kaizoku Captain Herlock
Uchuu Kyoudai
Uchuu Patrol Luluco
Uchuu Senkan Yamato
Uchuu Senkan Yamato III
Udon no Kuni no Kiniro Kemari
Ueki no Housoku
Uma Musume: Cinderella Gray
Uma Musume: Pretty Derby Season 2
Uma Musume: Pretty Derby Season 3
Umamusume: Cinderella Gray
Umineko no Naku Koro ni
Umineko: When They Cry
Uncle from Another World
Undead Girl Murder Farce
Undead Murder Farce
Undead Unluck
Uramichi Oniisan
Urusei Yatsura
Urusei Yatsura (2022)
Urusei Yatsura (2022) 2nd Season
Usagi Drop
Ushio & Tora (2015)
Ushio & Tora (2016)
Ushio to Tora (TV)
Ushio to Tora (TV) 2nd Season
Utawarerumono
Utawarerumono: Futari no Hakuoro
Utawarerumono: Itsuwari no Kamen
Utawarerumono: Mask of Truth
Utawarerumono: The False Faces
Valkyria Chronicles
Valvrave the Liberator
Valvrave the Liberator 2nd Season
Vampire Knight Guilty
Vanitas no Karte
Vanitas no Karte Part 2
Versailles no Bara
Vigilante: Boku no Hero Academia Illegals
Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord
Vinland Saga
Vinland Saga Season 2
Violet Evergarden
Vivy -Fluorite Eye's Song-
Vivy: Fluorite Eye's Song
Voltes V
Wagnaria!!
Wagnaria!!2
Wagnaria!!3
Waiting in the Summer
Wakakusa Monogatari: Nan to Jo-sensei
Wandering Son
Wandering Witch: The Journey of Elaina
Wangan Midnight
Wasteful Days of High School Girls
WataMote: No Matter How I Look At It, It's You Guys' Fault I'm Not Popular!
Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!
Watashi no Ashinaga Ojisan
Watashi no Oshi wa Akuyaku Reijou.
Watashi no Shiawase na Kekkon
Watashi no Shiawase na Kekkon 2nd Season
We Never Learn: BOKUBEN
We Never Learn: BOKUBEN Season 2
Welcome to Demon School! Iruma-kun
Welcome to Demon School! Iruma-kun Season 2
Welcome to Demon School! Iruma-kun Season 3
Welcome to Irabu's Office
Welcome to the Ballroom
Welcome to the N.H.K.
White Album 2
Why Raeliana Ended up at the Duke's Mansion
Wind Breaker
Wind Breaker Season 2
Wistoria: Wand and Sword
Witch Craft Works
Witch Watch
Witchy Pretty Cure!! Mirai Days
Wolf's Rain
Wonder Egg Priority
Wonderful Precure!
Working!!
Working!!!
Working'!!
World Conquest Zvezda Plot
World Trigger
World Trigger 2nd Season
World Trigger 3rd Season
WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?
Wotakoi: Love is Hard for Otaku
Wotaku ni Koi wa Muzukashii
YAT Anshin! Uchuu Ryokou
Ya Boy Kongming!
Yagate Kimi ni Naru
Yahari Ore no Seishun Love Comedy wa Machigatteiru.
Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan
Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku
Yakitate!! Japan
Yakusoku no Neverland
Yakuza Fiancé: Raise wa Tanin ga Ii
Yama no Susume Second Season
Yama no Susume: Next Summit
Yamada-kun and the Seven Witches
Yamada-kun to 7-nin no Majo
Yamada-kun to Lv999 no Koi wo Suru
Yamato Nadeshiko Shichihenge♥
Yashahime: Princess Half-Demon: The Second Act
Yatagarasu: The Raven Does Not Choose Its Master
Yawara!
Yes! Precure 5
Yes! Precure 5 GoGo!
Yofukashi no Uta
Yojouhan Shinwa Taikei
Yokoyama Mitsuteru Sangokushi
Yona of the Dawn
Yondemasu yo, Azazel-san. (TV)
Yondemasu yo, Azazel-san. Z
Yoroiden Samurai Troopers
Yoru no Kurage wa Oyogenai
Yotsuiro Biyori
You and Idol Precure♪
You and Me 2
You and Me.
You're Being Summoned, Azazel
You're Being Summoned, Azazel Z
You're Under Arrest (1996)
Youjo Senki
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season
Young Black Jack
Your Lie in April
Yowamushi Pedal
Yowamushi Pedal: Glory Line
Yowamushi Pedal: Grande Road
Yowamushi Pedal: Limit Break
Yowamushi Pedal: New Generation
Yozakura Quartet: Hana no Uta
Yozakura-san Chi no Daisakusen
Yu Yu Hakusho: Ghost Files
Yu-Gi-Oh!
Yu-Gi-Oh! 5D's
Yu-Gi-Oh! GX
Yubisaki to Renren
Yuki Yuna is a Hero: The Hero Chapter
Yuki Yuna is a Hero: The Washio Sumi Chapter
Yume-iro Pâtissière
Yume-iro Pâtissière SP Professional
Yuri!!! On Ice
Yuri!!! on Ice
Yuru Camp△
Yuru Camp△ Season 2
Yuru Camp△ Season 3
Yuru Yuri
Yuru Yuri♪♪
YuruYuri: Happy Go Lily
YuruYuri: Happy Go Lily ♪♪
Yuuki Bakuhatsu Bang Bravern
Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou
Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou
Yuukoku no Moriarty
Yuukoku no Moriarty Part 2
Yuusha, Yamemasu
Yuusha-Ou GaoGaiGar
Yuu☆Yuu☆Hakusho
Yuzuki-san Chi no Yonkyoudai.
Yu☆Gi☆Oh!
Yu☆Gi☆Oh! 5D's
Yu☆Gi☆Oh! Duel Monsters
Yu☆Gi☆Oh! Duel Monsters GX
Zan Sayonara Zetsubou Sensei
Zankyou no Terror
Zatch Bell!
Zenki
Zenshu
Zenshuu.
Zero no Tsukaima
Zero no Tsukaima: Futatsuki no Kishi
Zero no Tsukaima: Princesses no Rondo
Zetsuen no Tempest
Zipang
Zoids Genesis
Zoku Natsume Yuujinchou
Zoku Owarimonogatari
Zoku Sayonara Zetsubou Sensei
Zoku Touken Ranbu: Hanamaru
Zom 100: Bucket List of the Dead
Zom 100: Zombie ni Naru made ni Shitai 100 no Koto
Zombie Land Saga Revenge
Zombieland Saga Revenge
[Oshi No Ko]
[Oshi No Ko] Season 2
[Oshi no Ko]
[Oshi no Ko] 2nd Season
ef - a tale of melodies.
ef - a tale of memories.
ef: A Tale of Melodies.
ef: A Tale of Memories.
mono
selector infected WIXOSS
xxxHOLiC
xxxHOLiC◆Kei
∀ Gundam
`,p1=`Cowboy Bebop
Cowboy Bebop
Cowboy Bebop: Tengoku no Tobira
Cowboy Bebop: The Movie
Trigun
Trigun
Witch Hunter Robin
Witch Hunter Robin
Eyeshield 21

Hachimitsu to Clover
Honey and Clover
Hungry Heart: Wild Striker

Initial D Fourth Stage

Monster
Monster
Naruto
Naruto
One Piece
One Piece
Tennis no Oujisama
The Prince of Tennis
School Rumble
School Rumble
Sunabouzu
Desert Punk
Texhnolyze
Texhnolyze
Trinity Blood
Trinity Blood
Yakitate!! Japan
Yakitate!! Japan
Zipang

Shinseiki Evangelion
Neon Genesis Evangelion
Shinseiki Evangelion Movie: Shi to Shinsei
Neon Genesis Evangelion: Death & Rebirth
Shinseiki Evangelion Movie: Air/Magokoro wo, Kimi ni
Neon Genesis Evangelion: The End of Evangelion
Kenpuu Denki Berserk
Berserk
Koukaku Kidoutai
Ghost in the Shell
Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen
Samurai X: Trust and Betrayal
Rurouni Kenshin: Meiji Kenkaku Romantan
Rurouni Kenshin
Rurouni Kenshin: Meiji Kenkaku Romantan - Ishinshishi e no Chinkonka
Samurai X: The Motion Picture
Akira
Akira
Aa! Megami-sama!
Oh! My Goddess
Aa! Megami-sama! (TV)
Ah! My Goddess
Kidou Tenshi Angelic Layer
Battle Doll Angelic Layer
Ai Yori Aoshi
Ai Yori Aoshi
Appleseed (Movie)

Beck
Beck: Mongolian Chop Squad
Blue Gender
Blue Gender
Chobits
Chobits
Chrno Crusade
Chrono Crusade
D.N.Angel
D.N.Angel
Rozen Maiden
Rozen Maiden
Rozen Maiden: Träumend
Rozen Maiden: Träumend
Azumanga Daiou The Animation
Azumanga Daioh: The Animation
Basilisk: Kouga Ninpou Chou
Basilisk
Black Cat
Black Cat
Full Metal Panic!
Full Metal Panic!
Full Metal Panic? Fumoffu
Full Metal Panic? Fumoffu
Full Metal Panic! The Second Raid
Full Metal Panic! The Second Raid
Gakuen Alice
Gakuen Alice
Soukyuu no Fafner: Dead Aggressor
Fafner
Mahou Shoujo Lyrical Nanoha
Magical Girl Lyrical Nanoha
Mahou Shoujo Lyrical Nanoha A's
Magical Girl Lyrical Nanoha A's
Shuffle!
Shuffle!
Kidou Senshi Gundam
Mobile Suit Gundam
Kidou Senshi Gundam: Dai 08 MS Shoutai
Mobile Suit Gundam: The 08th MS Team
Kidou Senshi Gundam 0080: Pocket no Naka no Sensou
Mobile Suit Gundam 0080: War in the Pocket
Kidou Senshi Gundam 0083: Stardust Memory
Mobile Suit Gundam 0083: Stardust Memory
Kidou Senshi Zeta Gundam
Mobile Suit Zeta Gundam
Kidou Senshi Gundam: Gyakushuu no Char
Mobile Suit Gundam: Char's Counterattack
Shin Kidou Senki Gundam Wing
Mobile Suit Gundam Wing
Shin Kidou Senki Gundam Wing: Endless Waltz
Mobile Suit Gundam Wing: Endless Waltz
Kidou Shinseiki Gundam X
After War Gundam X
Kidou Senshi Gundam SEED
Mobile Suit Gundam SEED
Kidou Senshi Gundam SEED Destiny
Mobile Suit Gundam SEED Destiny
Turn A Gundam
∀ Gundam
Kidou Butouden G Gundam
Mobile Fighter G Gundam
Last Exile
Last Exile
Mai-HiME
My-Hime
Mai-Otome
My-Otome
Shin Shirayuki-hime Densetsu Prétear
Prétear: The New Legend of Snow White
Air
Air
Aishiteruze Baby★★
Babe, My Love
Akazukin Chacha
Red Riding Hood Chacha
Ayashi no Ceres
Ceres, Celestial Legend
Hana yori Dango
Hana Yori Dango
Ou Dorobou Jing
Jing: King of Bandits
Ou Dorobou Jing in Seventh Heaven
Jing: King of Bandits - Seventh Heaven
Chuuka Ichiban!
Cooking Master Boy
Uchuu no Stellvia
Stellvia
Sakigake!! Cromartie Koukou
Cromartie High School
Shinpi no Sekai El-Hazard
El Hazard: The Magnificent World
Fruits Basket
Fruits Basket
Fullmetal Alchemist
Fullmetal Alchemist
Full Moon wo Sagashite
Searching for the Full Moon
Fushigi Yuugi
Mysterious Play
Gensoumaden Saiyuuki
Saiyuki
Saiyuuki Reload
Saiyuki Reload
Saiyuuki Reload Gunlock
Saiyuki Gunlock
GetBackers
Getbackers
Gunslinger Girl
Gunslinger Girl
Hikaru no Go
Hikaru no Go
Hunter x Hunter
Hunter x Hunter
Hunter x Hunter: Original Video Animation

Hunter x Hunter: Greed Island

Hunter x Hunter: Greed Island Final

Kamikaze Kaitou Jeanne

Kanon

Kareshi Kanojo no Jijou
His and Her Circumstances
Kimi ga Nozomu Eien
Rumbling Hearts
Blood+
Blood+
Re: Cutie Honey

Solty Rei

Juuni Kokuki
The Twelve Kingdoms
Shaman King
Shaman King
X
X
Maria-sama ga Miteru
Maria Watches Over Us
Ima, Soko ni Iru Boku
Now and Then, Here and There
Peace Maker Kurogane
Peace Maker Kurogane
Mononoke Hime
Princess Mononoke
RahXephon
RahXephon
Samurai 7
Samurai 7
Scrapped Princess
Scrapped Princess
s.CRY.ed
s-CRY-ed
Slam Dunk
Slam Dunk
Tactics

Tsubasa Chronicle
Tsubasa RESERVoir CHRoNiCLE
Ultra Maniac
Ultra Maniac
Vandread
Vandread
Vandread: The Second Stage
Vandread: The Second Stage
Tenkuu no Escaflowne
The Vision of Escaflowne
Whistle!

Initial D First Stage
Initial D First Stage
Initial D Second Stage
Initial D Second Stage
Initial D Third Stage

Love Hina
Love Hina
Love Hina Again
Love Hina Again
Love Hina Christmas Special: Silent Eve
Love Hina Christmas Movie
Love Hina Haru Special: Kimi Sakura Chiru Nakare!!
Love Hina Spring Movie
Macross Zero
Macross Zero
Onegai☆Teacher
Please Teacher!
Speed Grapher
Speed Grapher
Sen to Chihiro no Kamikakushi
Spirited Away
Tenshi na Konamaiki
Cheeky Angel
Video Girl Ai
Video Girl Ai
Wolf's Rain
Wolf's Rain
Samurai Champloo
Samurai Champloo
Lodoss-tou Senki: Eiyuu Kishi Den
Record of Lodoss War: Chronicles of the Heroic Knight
Lodoss-tou Senki
Record of Lodoss War
R.O.D: Read or Die
R.O.D - Read or Die
R.O.D: The TV
R.O.D -The TV-
Ranma ½
Ranma ½
Kidou Senkan Nadesico
Martian Successor Nadesico
Dragon Ball
Dragon Ball
Elfen Lied
Elfen Lied
FLCL
FLCL
Jigoku Shoujo
Hell Girl
Cardcaptor Sakura
Cardcaptor Sakura
Daa! Daa! Daa!

Meitantei Conan
Case Closed
Koukyoushihen Eureka Seven
Eureka Seven
Rekka no Honoo
Flame of Recca
Gankutsuou
Gankutsuou: The Count of Monte Cristo
Genshiken
Genshiken
Gokusen
The Gokusen
Great Teacher Onizuka
Great Teacher Onizuka
Groove Adventure Rave
Rave Master
Harukanaru Toki no Naka de: Hachiyou Shou
Haruka: Beyond the Stream of Time – A Tale of the Eight Guardians
InuYasha
InuYasha
Konjiki no Gash Bell!!
Zatch Bell!
Kyou kara Maou!

Madlax

Jungle wa Itsumo Hare nochi Guu
Haré+Guu
Jungle wa Itsumo Hare nochi Guu Deluxe
Haré+Guu Deluxe
Jungle wa Itsumo Hare nochi Guu Final
Haré+Guu Final
Hoshi no Koe
Voices of a Distant Star
Hajime no Ippo
Fighting Spirit
Hajime no Ippo: Champion Road
Fighting Spirit: Champion Road
Hajime no Ippo: Mashiba vs. Kimura
Fighting Spirit: Mashiba vs. Kimura
Gungrave
Gungrave
Golden Boy
Golden Boy
Bleach
Bleach
Hellsing
Hellsing
Noir
Noir
Kiddy Grade
Kiddy Grade
Mahoromatic: Automatic Maiden
Mahoromatic: Automatic Maiden
Mahoromatic: Motto Utsukushii Mono
Mahoromatic ~Something More Beautiful~
Kyougoku Natsuhiko: Kousetsu Hyaku Monogatari
Requiem from the Darkness
Animal Yokochou
Animal Lane
Angel Heart

Akage no Anne
Anne of Green Gables
Area 88 (TV)

B'T X

Grappler Baki (TV)
Baki the Grappler
Seikai no Monshou
Crest of the Stars
Mirai Shounen Conan
Future Boy Conan
Aa! Megami-sama! Movie
Ah! My Goddess: The Movie
Abenobashi Mahou☆Shoutengai
Magical☆Shopping Arcade Abenobashi
Ace wo Nerae!
Aim for the Ace!
Ace wo Nerae! 2
Aim for the Ace!: Another Match
Final Fantasy VII: Advent Children

Paradise Kiss
Paradise Kiss
Mousou Dairinin
Paranoia Agent
Kidou Keisatsu Patlabor: On Television
Patlabor: The Mobile Police - The TV Series
Petshop of Horrors
Pet Shop of Horrors
Puchi Pri*Yucie
Petite Princess Yucie
Planetes
Planetes
Midori no Hibi
Midori Days
Mahoujin Guruguru
Magical Circle Guru Guru
Dokidoki♡Densetsu: Mahoujin Guruguru
Magical Circle Guru Guru 2
Mama wa Shougaku 4-nensei
Mama is Just a Fourth Grade Pupil
Marmalade Boy
Marmalade Boy
Matantei Loki Ragnarok
Mythical Detective Loki Ragnarok
Versailles no Bara
The Rose of Versailles
Serial Experiments Lain
Serial Experiments Lain
Mutsu Enmei Ryuu Gaiden: Shura no Toki
Time of Shura
Spiral: Suiri no Kizuna
Spiral: Bond of Reasoning
Futatsu no Spica
Twin Spica
Eikoku Koi Monogatari Emma
Emma: A Victorian Romance
Ojamajo Doremi
Magical DoReMi
Ojamajo Doremi Sharp

Motto! Ojamajo Doremi

Ojamajo Doremi Dokkaan!

Shakugan no Shana
Shakugan no Shana: Season I
Fate/stay night
Fate/stay night
Gallery Fake

Akazukin Chacha OVA

Boogiepop wa Warawanai
Boogiepop Phantom
Cardcaptor Sakura Movie 1
Cardcaptor Sakura The Movie
Cardcaptor Sakura Movie 2: Fuuin Sareta Card
Cardcaptor Sakura Movie 2: The Sealed Card
Elfen Lied: Tooriame nite Arui wa, Shoujo wa Ikani Shite Sono Shinjou ni Itatta ka? - Regenschauer
Elfen Lied: In the Passing Rain, or, How Can a Girl Have Reached Such Feelings?
Heppoko Jikken Animation Excel♥Saga
Excel Saga
Fushigi Yuugi OVA
Mysterious Play OVA
Fushigi Yuugi: Dai Ni Bu
Mysterious Play OVA 2
Galaxy Angel

Gantz
Gantz
H2

Haibane Renmei
Haibane Renmei
Capeta

Karas
Karas
Suzuka
Suzuka
Yuu☆Yuu☆Hakusho
Yu Yu Hakusho: Ghost Files
Escaflowne
Escaflowne: A Girl in Gaea
Ai Yori Aoshi: Enishi
Ai Yori Aoshi: Enishi
Gantz 2nd Stage
Gantz: Second Stage
Seikai no Senki
Banner of the Stars
Seikai no Senki II
Banner of the Stars II
Seikai no Senki III
Banner of the Stars III
Seikai no Senki Special

Seihou Bukyou Outlaw Star
Outlaw Star
Rurouni Kenshin: Meiji Kenkaku Romantan - Seisou-hen
Samurai X: Reflection
Tantei Gakuen Q
Detective School Q
Final Fantasy VII: Last Order
Final Fantasy VII: Last Order
Gun x Sword
Gun x Sword
Tonari no Yamada-kun
My Neighbors the Yamadas
Kurenai no Buta
Porco Rosso
Ranma ½: Chuugoku Nekonron Daikessen! Okite Yaburi no Gekitou-hen!!
Ranma ½: Big Trouble in Nekonron, China
Dirty Pair
Dirty Pair
Kaleido Star
Kaleido Star
Kaleido Star: Aratanaru Tsubasa - Extra Stage
Kaleido Star: New Wings Extra Stage
Kaleido Star: Legend of Phoenix - Layla Hamilton Monogatari
Kaleido Star: Legend of Phoenix - The Layla Hamilton Story
Fullmetal Alchemist: The Conqueror of Shamballa
Fullmetal Alchemist: The Movie - Conqueror of Shamballa
Howl no Ugoku Shiro
Howl's Moving Castle
Iria: Zeiram The Animation
Iria: Zeiram The Animation
Kumo no Mukou, Yakusoku no Basho
The Place Promised in Our Early Days
Magic Knight Rayearth
Magic Knight Rayearth
Perfect Blue
Perfect Blue
Shoujo Kakumei Utena
Revolutionary Girl Utena
Shoujo Kakumei Utena: Adolescence Mokushiroku
Revolutionary Girl Utena: The Adolescence of Utena
Naruto Movie 1: Dai Katsugeki!! Yuki Hime Ninpouchou Dattebayo!
Naruto the Movie 1: Ninja Clash in the Land of Snow
Onegai☆Teacher: Himitsu na Futari
Please Teacher!: Secret Couple
Maria-sama ga Miteru: Haru
Maria Watches Over Us: Printemps
Tenjou Tenge: The Ultimate Fight
Tenjho Tenge: The Ultimate Fight
InuYasha Movie 4: Guren no Houraijima
InuYasha the Movie 4: Fire on the Mystic Island
InuYasha Movie 2: Kagami no Naka no Mugenjou
InuYasha the Movie 2: The Castle Beyond the Looking Glass
InuYasha Movie 3: Tenka Hadou no Ken
InuYasha the Movie 3: Swords of an Honorable Ruler
InuYasha Movie 1: Toki wo Koeru Omoi
InuYasha the Movie: Affections Touching Across Time
Fantastic Children
Fantastic Children
Mushishi
Mushi-Shi
One Piece Movie 01
One Piece: The Movie
One Piece Movie 02: Nejimaki-jima no Daibouken
One Piece: Clockwork Island Adventure
One Piece Movie 04: Dead End no Bouken
One Piece: Dead End Adventure
One Piece Movie 05: Norowareta Seiken
One Piece: The Curse of the Sacred Sword
One Piece Movie 06: Omatsuri Danshaku to Himitsu no Shima
One Piece: Baron Omatsuri and the Secret Island
One Piece Movie 07: Karakuri-jou no Mecha Kyohei
One Piece: The Giant Mechanical Soldier of Karakuri Castle
Koukaku Kidoutai: Stand Alone Complex
Ghost in the Shell: Stand Alone Complex
Innocence
Ghost in the Shell 2: Innocence
Karin
Karin
Macross Plus

Ginban Kaleidoscope

Aria the Animation
Aria the Animation
Sousei no Aquarion
Aquarion
Ueki no Housoku
The Law of Ueki
Yu☆Gi☆Oh! Duel Monsters
Yu-Gi-Oh!
Yu☆Gi☆Oh! Duel Monsters GX
Yu-Gi-Oh! GX
Kurau Phantom Memory

Gensoumaden Saiyuuki Movie: Requiem - Erabarezaru Mono e no Chinkonka
Saiyuki: Requiem
Damekko Doubutsu

Kino no Tabi: The Beautiful World
Kino's Journey
Ichigo Mashimaro
Strawberry Marshmallow
Kamichu!
Kamichu!
Paniponi Dash!
Pani Poni Dash!
Armitage III: Poly-Matrix

Doraemon

Fushigiboshi no☆Futagohime

Glass no Kamen

Tottoko Hamtarou
Hamtaro
Majo no Takkyuubin
Kiki's Delivery Service
Tenkuu no Shiro Laputa
Castle in the Sky
Keroro Gunsou
Sgt. Frog
School Rumble: Ichi Gakki Hoshuu
School Rumble: Extra Class
Mahoraba: Heartful Days

Marmalade Boy Movie

Mermaid Melody Pichi Pichi Pitch
Mermaid Melody: Pichi Pichi Pitch
Metropolis

Tonari no Totoro
My Neighbor Totoro
Onegai☆Twins: Natsu wa Owaranai
Please Twins!: The Summer Never Ends
Boku no Chikyuu wo Mamotte
Please Save My Earth
Pokemon
Pokémon
Pokemon Movie 01: Mewtwo no Gyakushuu
Pokémon: The First Movie - Mewtwo Strikes Back
Saishuu Heiki Kanojo
She, The Ultimate Weapon
Bishoujo Senshi Sailor Moon
Sailor Moon
Bishoujo Senshi Sailor Moon R: The Movie
Sailor Moon R: The Movie - The Promise of the Rose
Bishoujo Senshi Sailor Moon S
Sailor Moon S
Slayers
Slayers
Slayers Next
Slayers Next
Slayers: The Motion Picture
Slayers: The Motion Picture
Tenchi Muyou! Ryououki
Tenchi Muyo! Ryo-Ohki
Tenchi Muyou! Ryououki 2nd Season
Tenchi Muyo! Ryo-Ohki
Tenchi Muyou! Ryououki 3rd Season
Tenchi Muyo! Ryo-Ohki
Vampire Hunter D (2000)
Vampire Hunter D: Bloodlust
Wonderful Days
Sky Blue
Yu☆Gi☆Oh!

Grappler Baki: Saidai Tournament-hen
Baki the Grappler: Saidai Tournament-hen
Digimon Adventure
Digimon: Digital Monsters
Yami no Matsuei
Descendants of Darkness
Major S2

Soukyuu no Fafner: Dead Aggressor - Right of Left

Steamboy
Steamboy
Tetsuwan Birdy
Birdy the Mighty
The Big O
The Big O
Bubblegum Crisis Tokyo 2040

Musekinin Kanchou Tylor
The Irresponsible Captain Tylor
Jin-Rou
Jin-Roh: The Wolf Brigade
Kaze no Tani no Nausicaä
Nausicaä of the Valley of the Wind
Saber Marionette J
Saber Marionette J
Hotaru no Haka
Grave of the Fireflies
Sexy Commando Gaiden: Sugoi yo!! Masaru-san

Noein: Mou Hitori no Kimi e
Noein: To Your Other Self
Mimi wo Sumaseba
Whisper of the Heart
Ayakashi: Japanese Classic Horror

Hanbun no Tsuki ga Noboru Sora
Looking Up At The Half-Moon
Ginga Nagareboshi Gin
Silver Fang
Mugen no Ryvius
Infinite Ryvius
Neko no Ongaeshi
The Cat Returns
Jinzou Ningen Kikaider The Animation
Android Kikaider - The Animation
Nekojiru-sou
Cat Soup
Futari wa Precure
Pretty Cure
Mahou no Stage Fancy Lala
Magical Stage Fancy Lala
Kazemakase Tsukikage Ran
Carried by the Wind: Tsukikage Ran
Saishuu Heiki Kanojo: Another Love Song
Saikano: Another Love Song
Onmyou Taisenki
The Chronicle of the Big Battle between Yin and Yang
Juubee Ninpuuchou
Ninja Scroll
Takahashi Rumiko Gekijou Ningyo no Mori
Mermaid Forest
Major S1

Mahoutsukai Tai!
Magic User's Club OVA
Mahoromatic Summer Special

Legend of Basara

Koi Kaze

Hachimitsu to Clover Specials
Honey and Clover Specials
Hikaru no Go: Hokuto Hai e no Michi

Gunsmith Cats
Gunsmith Cats
Galaxy Angel Z

Galaxy Angel 3
Galaxy Angel A
Galaxy Angel 3 Specials
Galaxy Angel AA
Galaxy Angel 4
Galaxy Angel X
Air in Summer
Air in Summer
Touhai Densetsu Akagi: Yami ni Maiorita Tensai
Akagi
Azumanga Daiou: Gekijou Tanpen
Azumanga Daioh: The Very Short Movie
Fullmetal Alchemist: Reflections

JoJo no Kimyou na Bouken: Adventure
JoJo's Bizarre Adventure (OVA)
JoJo no Kimyou na Bouken
JoJo's Bizarre Adventure
Shadow Skill: Eigi

Tokyo Mew Mew
Mew Mew Power
Kyuuketsuhime Miyu (TV)
Vampire Princess Miyu
Yawara!

Tenchi Muyou!
Tenchi Muyo! Tenchi Universe
Patapata Hikousen no Bouken
Secret of Cerulean Sand
Mujin Wakusei Survive

Rec

Zoids Genesis
Zoids Genesis
Air Movie
Air: The Motion Picture
High School! Kimengumi
Funny Faces in High School
Ai no Kusabi
Ai no Kusabi
Princess Tutu
Princess Tutu
Kingyo Chuuihou!
Goldfish Warning!
Hiatari Ryoukou!
Sunny Ryoko
Interstella5555: The 5tory of The 5ecret 5tar 5ystem

Vampire Hunter D
Vampire Hunter D
MÄR

Bishoujo Senshi Sailor Moon R
Sailor Moon R
Binchou-tan

Yuki no Joou (TV)
The Snow Queen
RahXephon: Tagen Hensoukyoku
RahXephon: Pluralitas Concentio
Tokyo Godfathers
Tokyo Godfathers
Tenjou Tenge: The Past Chapter
TenjhoTenge: The Past Chapter
Bleach: Memories in the Rain
Bleach: Memories in the Rain
Zoids
Zoids
Zoids Shinseiki/Zero
Zoids: New Century
Pale Cocoon

Hellsing Ultimate
Hellsing Ultimate
Meitantei Conan Movie 01: Tokei Jikake no Matenrou
Case Closed Movie 01: The Time Bombed Skyscraper
Meitantei Conan Movie 02: 14-banme no Target
Case Closed Movie 02: The Fourteenth Target
Meitantei Conan Movie 03: Seikimatsu no Majutsushi
Case Closed Movie 03: The Last Wizard of the Century
Otaku no Video

Ergo Proxy
Ergo Proxy
Ranma ½: Kessen Tougenkyou! Hanayome wo Torimodose!
Ranma ½: The Movie 2 - The Battle of Togenkyo: Rescue the Brides!
xxxHOLiC Movie: Manatsu no Yoru no Yume
xxxHOLiC The Movie: A Midsummer Night's Dream
Oniisama e...
Dear Brother
Yomigaeru Sora: Rescue Wings

Koukaku Kidoutai: Stand Alone Complex 2nd GIG
Ghost in the Shell: Stand Alone Complex 2nd GIG
Tsubasa Chronicle: Tori Kago no Kuni no Himegimi
Tsubasa RESERVoir CHRoNiCLE The Movie: The Princess in the Birdcage Kingdom
Dragon Ball Z
Dragon Ball Z
Tennis no Oujisama: Atobe kara no Okurimono - Kimi ni Sasageru Tennis Prince Matsuri
The Prince of Tennis: A Gift from Atobe
Tennis no Oujisama Movie 1: Futari no Samurai - The First Game
The Prince of Tennis: The Two Samurai, The First Game
Ginga Eiyuu Densetsu
Legend of the Galactic Heroes
Initial D Battle Stage

Initial D Extra Stage

Chicchana Yukitsukai Sugar
A Little Snow Fairy Sugar
Bleach: The Sealed Sword Frenzy

Kyou no 5 no 2
Today in Class 5-2
Ushio to Tora
Ushio and Tora
Konjiki no Gash Bell!!: 101-banme no Mamono
Zatch Bell! 101st Devil
Kiba
Kiba
School Rumble Ni Gakki
School Rumble: 2nd Semester
Suzumiya Haruhi no Yuuutsu
The Melancholy of Haruhi Suzumiya
Kyou kara Ore wa!!

Gokinjo Monogatari
Neighborhood Stories
Ouran Koukou Host Club
Ouran High School Host Club
Strawberry Panic
Strawberry Panic
Utawarerumono
Utawarerumono
Air Gear
Air Gear
xxxHOLiC
xxxHOLiC
Slayers Premium

Slayers Gorgeous

Slayers Great
Slayers Great
Slayers Return
Slayers Return
Mahou Shoujo-tai Arusu
Tweeny Witches
Digimon Tamers
Digimon Tamers
Mind Game

Street Fighter II V
Street Fighter II: The Animated Series
Nana
Nana
Zegapain
Zegapain
Simoun

Aa! Megami-sama! Sorezore no Tsubasa
Ah! My Goddess: Flights of Fancy
Yuu☆Yuu☆Hakusho: Meikai Shitou-hen - Honoo no Kizuna
Yu Yu Hakusho the Movie: Poltergeist Report
Tenshi no Tamago
Angel's Egg
Black Lagoon
Black Lagoon
Yuusha-Ou GaoGaiGar
King of Braves GaoGaiGar
Dragon Ball Movie 4: Saikyou e no Michi
Dragon Ball: The Path to Power
Dragon Ball Z Movie 05: Tobikkiri no Saikyou tai Saikyou
Dragon Ball Z: Cooler's Revenge
Dragon Ball Z Movie 08: Moetsukiro!! Nessen, Ressen, Chougekisen
Dragon Ball Z: Broly - The Legendary Super Saiyan
Dragon Ball Z Movie 09: Ginga Girigiri!! Bucchigiri no Sugoi Yatsu
Dragon Ball Z: Bojack Unbound
Dragon Ball Z Movie 12: Fukkatsu no Fusion!! Gokuu to Vegeta
Dragon Ball Z: Fusion Reborn
Dragon Ball Z Movie 13: Ryuuken Bakuhatsu!! Gokuu ga Yaraneba Dare ga Yaru
Dragon Ball Z: Wrath of the Dragon
Princess Princess
Princess Princess
Fullmetal Alchemist: Premium Collection
Fullmetal Alchemist: Premium OVA Collection
Konjiki no Gash Bell!!: Mecha Vulkan no Raishuu
Zatch Bell! Attack of Mechavulcan
Ninkuu

Ike! Ina-chuu Takkyuu-bu
The Ping-Pong Club
Ginga Densetsu Weed

Riding Bean

Gintama
Gintama
Seisenshi Dunbine
Aura Battler Dunbine
Densetsu Kyojin Ideon
Space Runaway Ideon
Higurashi no Naku Koro ni
Higurashi: When They Cry
Witchblade
Witchblade
Shin Getter Robo tai Neo Getter Robo
Shin Getter Robo vs. Neo Getter Robo
Inukami!

The Third: Aoi Hitomi no Shoujo
The Third: The Girl with the Blue Eye
Top wo Nerae! Gunbuster
Gunbuster
Chibi Maruko-chan

Juu Ou Sei
Jyu-Oh-Sei: Planet of the Beast King
Saiunkoku Monogatari
The Story of Saiunkoku
Heat Guy J
HeatGuy J
Shin Chou Kyou Ryo: Condor Hero
Legend of the Condor Hero
Shin Chou Kyou Ryo: Condor Hero II
Legend of the Condor Hero II
Virtua Fighter

Aria the Natural
Aria the Natural
Love Hina: Motoko no Sentaku, Koi ka Ken... "Naku na"
Love Hina: Motoko's Choice Between Love or Swords: Don't cry!
Crayon Shin-chan
Shin Chan
Hokuto no Ken
Fist of the North Star
Tsubasa Chronicle 2nd Season
Tsubasa RESERVoir CHRoNiCLE Season Two
Yokoyama Mitsuteru Sangokushi

Astro Boy: Tetsuwan Atom
Astro Boy (2003)
Dead Leaves
Dead Leaves
Yokohama Kaidashi Kikou

Yokohama Kaidashi Kikou: Quiet Country Cafe

Change!! Getter Robo: Sekai Saigo no Hi
Getter Robo: Armageddon
Dragon Ball Z Special 2: Zetsubou e no Hankou!! Nokosareta Chousenshi - Gohan to Trunks
Dragon Ball Z: The History of Trunks
Dragon Ball Z Special 1: Tatta Hitori no Saishuu Kessen
Dragon Ball Z: Bardock, The Father of Goku
Kamisama Kazoku

Dual! Parallel Lun-Lun Monogatari
Dual! Parallel Trouble Adventure
Tennis no Oujisama: Zenkoku Taikai-hen
The Prince of Tennis: National Championship Chapter
Bishoujo Senshi Sailor Moon: Sailor Stars
Sailor Moon Sailor Stars
Bishoujo Senshi Sailor Moon S: Kaguya-hime no Koibito
Sailor Moon S Movie: Hearts in Ice
Blue Seed
Blue Seed
Uchuu Kaizoku Captain Herlock
Space Pirate Captain Harlock
Top wo Nerae 2! Diebuster
Gunbuster 2
Aa! Megami-sama! (TV) Specials
Ah! My Goddess Specials
Kanojo to Kanojo no Neko
She and Her Cat: Their Standing Points
Tenchi Muyou! in Love
Tenchi Muyo! In Love
Ranma ½ OVA
Ranma ½ OVA
Ranma ½: Yomigaeru Kioku
Ranma 1/2 Special: Reawakening Memories
Ranma ½: Chou Musabetsu Kessen! Ranma Team vs. Densetsu no Houou
Ranma ½: Team Ranma vs. The Legendary Phoenix
Ranma ½ Super

Le Chevalier D'Eon

Chicchana Yukitsukai Sugar Specials
Sugar: A Little Snow Fairy Summer Special
Full Metal Panic! The Second Raid: Wari to Hima na Sentaichou no Ichinichi
Full Metal Panic! The Second Raid: A Relatively Leisurely Day in the Life of a Fleet Captain
Gunnm
Battle Angel Alita
Majutsushi Orphen
Orphen
Kaikan Phrase

Wolf's Rain OVA
Wolf's Rain OVA
Omoide Poroporo
Only Yesterday
Heisei Tanuki Gassen Ponpoko
Pom Poko
Sennen Joyuu
Millennium Actress
Ouritsu Uchuugun: Honneamise no Tsubasa
Royal Space Force: The Wings of Honneamise
Mizuiro Jidai

Elf wo Karu Mono-tachi II
Those Who Hunt Elves II
On Your Mark
On Your Mark
Bobobo-bo Bo-bobo
Bobobo-bo Bo-bobo
Ao no 6-gou
Blue Submarine No. 6
Oruchuban Ebichu

Mazinkaiser
Mazinkaiser
Touch

Shakugan no Shana-tan

Chou Denji Machine Voltes V
Voltes V
Sweat Punch
Sweat Punch
Cardcaptor Sakura: Kero-chan ni Omakase!
Cardcaptor Sakura: Leave it to Kero! Theatrical Version
Sentou Yousei Yukikaze
Yukikaze
Space Pirate Captain Herlock: Outside Legend - The Endless Odyssey

Kenran Butou Sai: The Mars Daybreak
Mars Daybreak
Kimagure Orange☆Road
Kimagure Orange Road
Macross
Super Dimension Fortress Macross
Macross: Do You Remember Love?
Super Dimension Fortress Macross: Do You Remember Love?
Kidou Senshi Gundam I
Mobile Suit Gundam I
Kidou Senshi Gundam II: Ai Senshi-hen
Mobile Suit Gundam II: Soldiers of Sorrow
Kidou Senshi Gundam III: Meguriai Sora-hen
Mobile Suit Gundam III: Encounters in Space
Oishinbo

One Piece: Umi no Heso no Daibouken-hen
One Piece: Adventure in the Ocean's Navel
Kidou Keisatsu Patlabor the Movie
Patlabor: The Movie
Kidou Keisatsu Patlabor 2 the Movie
Patlabor 2: The Movie
Tenchi Muyou! Manatsu no Eve
Tenchi the Movie 2: Daughter of Darkness
Senkaiden Houshin Engi
Soul Hunter
Mermaid Melody Pichi Pichi Pitch Pure

Junkers Come Here

Pokemon Movie 02: Maboroshi no Pokemon Lugia Bakutan
Pokémon: The Movie 2000
Pokemon Movie 03: Kesshoutou no Teiou Entei
Pokémon 3: The Movie
Pokemon Movie 05: Mizu no Miyako no Mamorigami Latias to Latios
Pokémon Heroes
Pokemon Movie 07: Rekkuu no Houmonsha Deoxys
Pokémon: Destiny Deoxys
Seikai no Danshou: Tanjou
Crest of the Stars: Birth
Figure 17: Tsubasa & Hikaru

Digimon Frontier
Digimon Frontier
Tenchi Muyou! GXP

Medarot
Medabots
Giniro no Kami no Agito
Origin: Spirits of the Past
Hachimitsu to Clover II
Honey and Clover II
Tenchi Muyou! in Love 2: Harukanaru Omoi
Tenchi Forever!
Kaze no Youjinbou
Kaze no Yojimbo
Tenchi Muyou! Ryououki: Omatsuri Zenjitsu no Yoru!
Tenchi Muyo! Ryo-Ohki: The Night Before The Carnival
Tenchi Muyou! Ryououki 3rd Season: Tenchi Seirou naredo Namitakashi?

Mahou Senshi Louie
Rune Soldier
Musekinin Kanchou Tylor OVA
Irresponsible Captain Tylor OVA
Slayers Specials
Slayers: The Book of Spells
Slayers Excellent
Slayers Excellent
Slayers Try

Gakuen Senki Muryou
Shingu: Secret of the Stellar Wars
Lost Universe

Tennis no Oujisama: Sonzoku Yama no Hi
Prince of Tennis: A Day of the Survival Mountain
Saber Marionette J Again

Zero no Tsukaima
The Familiar of Zero
Masuda Kousuke Gekijou: Gag Manga Biyori

Nintama Rantarou

Nitaboh

Aru Tabibito no Nikki
A Traveller's Diary
Ihatov Gensou: Kenji no Haru
Spring and Chaos
NHK ni Youkoso!
Welcome to the N.H.K.
Macross Plus Movie Edition

Oban Star-Racers

Kidou Senshi Gundam SEED C.E. 73: Stargazer
Mobile Suit Gundam SEED C.E.73: Stargazer
Bokura ga Ita
We Were There
Saber Marionette J to X

One Piece: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!
One Piece: Open Upon the Great Sea! A Father's Huge, HUGE Dream!
One Piece: Mamore! Saigo no Oobutai
One Piece: Protect! The Last Great Performance
Bishoujo Senshi Sailor Moon SuperS
Sailor Moon SuperS
Bishoujo Senshi Sailor Moon SuperS: Sailor 9 Senshi Shuuketsu! Black Dream Hole no Kiseki
Sailor Moon SuperS the Movie: Black Dream Hole
Kidou Senshi Gundam SEED Destiny Final Plus: Erabareta Mirai
Mobile Suit Gundam SEED Destiny Final Plus: The Chosen Future
Yuugo: Koushounin
Yugo The Negotiator
Erementar Gerad
Elemental Gelade
Fushigi no Umi no Nadia
Nadia: The Secret of Blue Water
Saint Seiya: Meiou Hades Meikai-hen
Saint Seiya: The Hades Chapter - Inferno
Saint Seiya
Saint Seiya: Knights of the Zodiac
Saint Seiya: Shinku no Shounen Densetsu
Saint Seiya: Legend of Crimson Youth
Saint Seiya: Meiou Hades Juuni Kyuu-hen
Saint Seiya: The Hades Chapter - Sanctuary
Saint Seiya: Tenkai-hen Josou - Overture
Saint Seiya: The Heaven Chapter - Overture
Kyattou Ninden Teyandee
Samurai Pizza Cats
Yoroiden Samurai Troopers
Samurai Troopers
Bishoujo Senshi Sailor Moon SuperS Gaiden: Ami-chan no Hatsukoi
Sailor Moon SuperS Plus: Ami's First Love
Taiyou no Ko Esteban
The Mysterious Cities of Gold
Gakkou no Kaidan
Ghost Stories
Kidou Keisatsu Patlabor
Patlabor: The Mobile Police
Kidou Keisatsu Patlabor: New OVA
Mobile Police Patlabor: The New Files
Afro Samurai
Afro Samurai
Urusei Yatsura
Urusei Yatsura
Flag

Ginga Tetsudou 999 (Movie)
Galaxy Express 999
Sayonara Ginga Tetsudou 999: Andromeda Shuuchakueki
Adieu Galaxy Express 999
The Animatrix
The Animatrix
Chikyuu Bouei Kigyou Dai-Guard
Dai-Guard: Terrestrial Defense Corp.
Digimon Adventure 02
Digimon Adventure 02
Idaten Jump
Idaten Jump
Aoki Densetsu Shoot!
Blue Legend Shoot!
Koukaku Kidoutai: Stand Alone Complex - Tachikoma na Hibi
Ghost in the Shell: Stand Alone Complex: Tachikomatic Days
Bubblegum Crisis

Cyber City Oedo 808
Cyber City
Hokuto no Ken 2
Fist of the North Star 2
Hokuto no Ken Movie
Fist of the North Star: The Movie
Street Fighter II Movie
Street Fighter II: The Animated Movie
Meitantei Conan Movie 04: Hitomi no Naka no Ansatsusha
Case Closed Movie 04: Captured In Her Eyes
Meitantei Conan Movie 05: Tengoku e no Countdown
Case Closed Movie 05: Countdown to Heaven
Meitantei Conan Movie 06: Baker Street no Bourei
Case Closed Movie 06: The Phantom of Baker Street
Meitantei Conan Movie 07: Meikyuu no Crossroad
Detective Conan Movie 07: Crossroad in the Ancient Capital
Meitantei Conan Movie 08: Ginyoku no Magician
Detective Conan Movie 08: Magician of the Silver Sky
Meitantei Conan OVA 06: Kieta Daiya wo Oe! Conan & Heiji VS Kid!
Detective Conan OVA 06: Follow the Vanished Diamond! Conan & Heiji vs. Kid!
Meitantei Conan OVA 01: Conan vs. Kid vs. Yaiba - Houtou Soudatsu Daikessen!!
Detective Conan OVA 01: Conan VS KID VS Yaiba
Hi no Tori
Phoenix
Taiho Shichau zo (TV)
You're Under Arrest (1996)
Black Jack Specials: Inochi wo Meguru Yottsu no Kiseki

Kyoushoku Soukou Guyver (2005)
Guyver: The Bioboosted Armor
Watashi no Ashinaga Ojisan
My Daddy Long Legs
Ojamajo Doremi Na-i-sho

Kino no Tabi: The Beautiful World - Nanika wo Suru Tame ni - Life Goes On.

Seikai no Monshou Special

Yuusha-Ou GaoGaiGar Final
GaoGaiGar Final
Future GPX Cyber Formula

Future GPX Cyber Formula 11

Future GPX Cyber Formula Zero

Future GPX Cyber Formula Saga

Future GPX Cyber Formula Sin

Macross 7

IGPX: Immortal Grand Prix (2005) 2nd Season
IGPX: Immortal Grand Prix Season 2
Lupin III
Lupin III
Lupin III: Alcatraz Connection

Lupin III: Dead or Alive
Lupin III: Dead or Alive
Lupin III: Moeyo Zantetsuken!
Lupin III: Dragon of Doom
Lupin III: Episode 0 "First Contact"
Lupin III Episode 0: The First Contact
Lupin III: Kutabare! Nostradamus
Lupin III: Farewell to Nostradamus
Lupin III: $1 Money Wars
Lupin III: Missed by a Dollar
Lupin III: Otakara Henkyaku Daisakusen!!
Lupin III: Operation Return the Treasure
Lupin III: Part II

Lupin III: Part III

Lupin III: Cagliostro no Shiro
Lupin III: The Castle of Cagliostro
Lupin III: Fuuma Ichizoku no Inbou
Lupin III: The Fuma Conspiracy
Lupin III: Lupin vs. Fukusei-ningen
Lupin III: The Mystery of Mamo
Lupin III: Honoo no Kioku - Tokyo Crisis
Lupin III: Tokyo Crisis
Lupin III: Walther P38
Lupin III: Island of Assassins
Ginga Tetsudou no Yoru
Night on the Galactic Railroad
Brigadoon: Marin to Melan
Brigadoon
Maison Ikkoku
Maison Ikkoku
Kemonozume

Uchuu no Kishi Tekkaman Blade
Tekkaman Blade
Memories
Memories
City Hunter

City Hunter 2

City Hunter 3

City Hunter '91

City Hunter: Ai to Shukumei no Magnum
City Hunter: .357 Magnum
City Hunter: Bay City Wars
City Hunter: Bay City Wars
City Hunter: Hyakuman Dollar no Inbou
City Hunter: Million Dollar Conspiracy
City Hunter: The Secret Service
City Hunter: The Secret Service
City Hunter: Goodbye My Sweetheart
City Hunter: The Motion Picture
City Hunter: Kinkyuu Namachuukei!? Kyouakuhan Saeba Ryou no Saigo
City Hunter: Death of the Vicious Criminal Ryo Saeba
D.Gray-man
D.Gray-man
Master Keaton

Akachan to Boku
Baby and Me
Kodomo no Omocha (TV)
Kodocha
Area 88

Ginga Tetsudou Monogatari
The Galaxy Railways
Ginga Tetsudou 999
Galaxy Express 999
Black Blood Brothers
Black Blood Brothers
Meitantei Conan Movie 09: Suihei Senjou no Strategy
Detective Conan Movie 09: Strategy Above the Depths
Meitantei Conan Movie 10: Tantei-tachi no Requiem
Detective Conan Movie 10: The Private Eyes' Requiem
Kirarin☆Revolution
Kirarin Revolution
Black Lagoon: The Second Barrage
Black Lagoon: The Second Barrage
Black Jack
Black Jack
Black Jack the Movie
Black Jack: The Movie
Fuujin Monogatari
Windy Tales
Pokemon Movie 08: Mew to Hadou no Yuusha Lucario
Pokémon: Lucario and the Mystery of Mew
Kanon (2006)
Kanon
Shakugan no Shana: Koi to Onsen no Kougai Gakushuu!

Futari wa Precure: Splash☆Star
Pretty Cure Splash Star
Death Note
Death Note
Busou Renkin
Buso Renkin
Pumpkin Scissors

Yoake Mae yori Ruriiro na: Crescent Love
Brighter Than the Dawning Blue
Shin Taketori Monogatari: 1000-nen Joou
Queen Millennia
Asatte no Houkou.
Living for the Day After Tomorrow
Tokimeki Memorial: Only Love
Tokimeki Memorial
Kikoushi Enma
Demon Prince Enma
Shounen Onmyouji
Shonen Onmyoji
Shijou Saikyou no Deshi Kenichi
KenIchi: The Mightiest Disciple
Yamato Nadeshiko Shichihenge♥
The Wallflower
Magic Knight Rayearth II
Magic Knight Rayearth II
Pokemon Advanced Generation
Pokémon: Advanced
Pokemon Diamond & Pearl
Pokémon: Diamond and Pearl
Koukaku Kidoutai: Stand Alone Complex - Solid State Society
Ghost in the Shell: Stand Alone Complex - Solid State Society
Kaitou Saint Tail
Mysterious Thief Saint Tail
Otome wa Boku ni Koishiteru
Otoboku: Maidens are Falling for Me!
Ghost Hunt
Ghost Hunt
Kishin Douji Zenki
Zenki
Code Geass: Hangyaku no Lelouch
Code Geass: Lelouch of the Rebellion
Bakumatsu Kikansetsu Irohanihoheto
Intrigue in the Bakumatsu: Irohanihoheto
Taiho Shichau zo
You're Under Arrest
Kiniro no Corda: Primo Passo
La corda d'oro: primo passo
Mamoru-kun ni Megami no Shukufuku wo!
Venus to Mamoru!
Bartender
Bartender
Legendz: Yomigaeru Ryuuou Densetsu
Legendz: Tale of the Dragon Kings
Hataraki Man

Jigoku Shoujo Futakomori
Hell Girl: Two Mirrors
Red Garden
Red Garden
Soukou no Strain
Strain: Strategic Armored Infantry
Katekyou Hitman Reborn!
Reborn!
Kekkaishi
Kekkaishi
Salaryman Kintarou

Mai-Otome Zwei
My-Otome Zwei
Captain Tsubasa: Road to 2002
Captain Tsubasa
Negima!? Haru Special!?

Sugar Sugar Rune
Sugar Sugar Rune
Uchuu Senkan Yamato
Star Blazers: The Quest for Iscandar
Uchuu Senkan Yamato 2
Star Blazers: The Comet Empire
Uchuu Senkan Yamato III
Star Blazers: The Bolar Wars
Nerima Daikon Brothers
Nerima Daikon Brothers
Haha wo Tazunete Sanzenri
From the Appenines to the Andes
Bakuten Shoot Beyblade G Revolution
Beyblade G Revolution
Captain Tsubasa J

Cyborg 009: The Cyborg Soldier
Cyborg 009
Brave Story
Brave Story
Di Gi Charat Nyo

Dotto Koni-chan
.Koni-chan
Bleach Movie 1: Memories of Nobody
Bleach the Movie: Memories of Nobody
Nanatsu-iro★Drops

Byousoku 5 Centimeter
5 Centimeters per Second
Bokura no
Bokurano
Kaze no Stigma
Kaze no Stigma
Les Misérables: Shoujo Cosette

Nodame Cantabile
Nodame Cantabile
Romeo x Juliet
Romeo x Juliet
Pokemon: Mewtwo! Ware wa Koko ni Ari
Pokémon: Mewtwo Returns
Rozen Maiden: Ouvertüre
Rozen Maiden: Ouvertüre
Nagasarete Airantou

Clannad Movie
Clannad The Motion Picture
Super GALS! Kotobuki Ran
Super GALS!
Maria-sama ga Miteru 3rd
Maria Watches Over Us 3rd
Tales of Symphonia The Animation: Sylvarant-hen

Negima!? Natsu Special!?

Naruto: Shippuuden
Naruto Shippuden
B'T X Neo

Muteki Kanban Musume
Ramen Fighter Miki
Wagamama☆Fairy Mirumo de Pon!
Mirmo Zibang!
Freedom
Freedom
Slam Dunk (Movie)

Hokuto no Ken: Raoh Gaiden Junai-hen
Fist of the North Star: Raoh Side Story Junai Arc
Dae Jang Geum: Jang Geum's Dream

Viper GTS
Viper GTS
Dirty Pair: The Movie
Dirty Pair: Project Eden
Dirty Pair: Lovely Angels yori Ai wo Komete
Dirty Pair: With Love From the Lovely Angels
Kamichama Karin

Genshiken OVA

Shakugan no Shana Movie
Shakugan no Shana: The Movie
Claymore
Claymore
Shin Hakkenden

Hadashi no Gen
Barefoot Gen
Hadashi no Gen 2
Barefoot Gen 2
Deltora Quest
Deltora Quest
Seirei no Moribito
Moribito - Guardian of the Spirit
Utawarerumono Specials

Ryuusei no Rockman
Megaman Star Force
Zero no Tsukaima: Futatsuki no Kishi
The Familiar of Zero: Knight of the Twin Moons
Major S3

Gaiking: Legend of Daiku-Maryu

Princess Nine: Kisaragi Joshikou Yakyuubu
Princess Nine
Rec: Yurusarezarumono

Hidamari Sketch
Hidamari Sketch
Gakuen Utopia Manabi Straight!

Tokyo Majin Gakuen Kenpuuchou: Tou
Tokyo Majin
Slam Dunk: Zenkoku Seiha Da! - Sakuragi Hanamichi
Slam Dunk: National Domination! Sakuragi Hanamichi
Nana Recaps

Plawres Sanshirou
Plastic Model Wrestling Sanshiro
Kaze no Shoujo Emily

Fushigiboshi no☆Futagohime Gyu!
Twin Princesses of the Wonder Planet
Lucky☆Star
Lucky☆Star
Ichigo Mashimaro OVA
Strawberry Marshmallow OVA
Higurashi no Naku Koro ni Kai
Higurashi: When They Cry – Kai
YAT Anshin! Uchuu Ryokou

11-nin Iru!
They Were Eleven
Harukanaru Toki no Naka de: Maihitoyo

Master Keaton OVA

Top wo Nerae! & Top wo Nerae 2! Gattai Movie!!

Shonan Junai Gumi!
Young GTO
Saiunkoku Monogatari 2nd Season
Tales of Saiunkoku
Mahou Shoujo Lyrical Nanoha StrikerS
Magical Girl Lyrical Nanoha StrikerS
Urusei Yatsura OVA

Urusei Yatsura Movie 1: Only You

Urusei Yatsura 2: Beautiful Dreamer
Urusei Yatsura Movie 2: Beautiful Dreamer
Urusei Yatsura Movie 5: Kanketsu-hen
Urusei Yatsura Movie 5: The Final Chapter
Futari wa Precure: Max Heart
Pretty Cure Max Heart
Futari wa Precure: Max Heart Movie 2 - Yukizora no Tomodachi

Yes! Precure 5
Yes! Precure 5
Moonlight Mile 1st Season: Lift Off

Paprika
Paprika
Photon
Photon: The Idiot Adventures
Ashita no Nadja
Tomorrow's Nadja
Manie-Manie: Meikyuu Monogatari
Neo Tokyo
Arashi no Yoru ni
One Stormy Night
Sola

Kidou Senshi Z Gundam I: Hoshi wo Tsugu Mono
Mobile Suit Zeta Gundam: A New Translation - Heir to the Stars
Kidou Senshi Z Gundam III: Hoshi no Kodou wa Ai
Mobile Suit Zeta Gundam: A New Translation III - Love Is the Pulse of the Stars
Meitantei Holmes
Sherlock Hound
Glass no Kamen (2005)
Glass Mask
Black Jack: Futari no Kuroi Isha
Black Jack: The Two Doctors of Darkness
UFO Robo Grendizer

Roujin Z
Roujin Z
Tengen Toppa Gurren Lagann
Gurren Lagann
Heroic Age
Heroic Age
Hanada Shounen-shi

Yawara!: Zutto Kimi no Koto ga...

Taiho Shichau zo Special
You're Under Arrest Mini Specials
Jigoku Sensei Nube
Hell Teacher Nube
Taiho Shichau zo The Movie
You're Under Arrest The Movie
Taiho Shichau zo: Second Season
You're Under Arrest: Fast & Furious
One Piece: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou
One Piece: The Detective Memoirs of Chief Straw Hat Luffy
Darker than Black: Kuro no Keiyakusha
Darker than Black
Hayate no Gotoku!
Hayate the Combat Butler
El Cazador de la Bruja
El Cazador de la Bruja
Lovely★Complex
Lovely Complex
Eikoku Koi Monogatari Emma: Molders-hen
Emma: A Victorian Romance Season Two
Cosmic Baton Girl Comet-san☆

Hime-chan no Ribbon

Cat's Eye

Mahou no Tenshi Creamy Mami
Magical Angel Creamy Mami
Kikou Ryouhei Mellowlink
Armor Hunter Mellowlink
Kindaichi Shounen no Jikenbo
The File of Young Kindaichi
Kindaichi Shounen no Jikenbo Movie 1: Operazakan - Aratanaru Satsujin

NG Knight Ramune & 40

Shin Kimagure Orange☆Road: Soshite, Ano Natsu no Hajimari

Seto no Hanayome
My Bride is a Mermaid
One Piece Movie 08: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi
One Piece: Episode of Alabasta - The Desert Princess and the Pirates
Rockman.EXE Axess
MegaMan NT Warrior: Axess
Rockman.EXE Stream

Rockman.EXE Beast

Rockman.EXE Movie: Hikari to Yami no Program

Over Drive

Tenkuu Senki Shurato

Captain Tsubasa
Flash Kicker
Shin Captain Tsubasa

Digimon X-Evolution

Code Geass: Hangyaku no Lelouch Recaps
Code Geass: Lelouch of the Rebellion Recaps
Yuu☆Yuu☆Hakusho: Eizou Hakusho - Ankoku Bujutsukai no Shou

Yuu☆Yuu☆Hakusho: Eizou Hakusho II

True Tears
True Tears
Inukami! The Movie: Tokumei Reiteki Sousakan Karina Shirou!
Inukami! The Movie
Sora no Iro, Mizu no Iro
Color of Sky, Color of Water
Oseam

Saiyuuki Reload: Burial

Tanoshii Muumin Ikka
Moomin
Nils no Fushigi na Tabi
Wonderful Adventures of Nils
Oh! Edo Rocket
Oh! Edo Rocket
Tekkon Kinkreet
Tekkonkinkreet
Terra e... (TV)
Toward the Terra (TV)
Ookiku Furikabutte
Big Windup!
Dennou Coil
Den-noh Coil
Clannad
Clannad
Sousei no Aquarion OVA

Meitantei Conan Movie 11: Konpeki no Jolly Roger
Detective Conan Movie 11: Jolly Roger in the Deep Azure
Hokuto no Ken: Raoh Gaiden Gekitou-hen
Fist of the North Star: Raoh Side Story Fierce Fighting Arc
Kino no Tabi: The Beautiful World - Byouki no Kuni - For You

Robot Carnival
Robot Carnival
Saiunkoku Monogatari Recaps

Aa! Megami-sama! Sorezore no Tsubasa Specials
Ah! My Goddess: Flights of Fancy Specials
Chirin no Suzu
Ringing Bell
Muteki Choujin Zanbot 3
Invincible Superman Zanbot 3
Waga Seishun no Arcadia
Captain Harlock: Arcadia of my Youth
Waga Seishun no Arcadia: Mugen Kidou SSX
Captain Harlock: Arcadia of my Youth - Endless Orbit SSX
Karakuri Zoushi Ayatsuri Sakon

Black Jack (TV)

Black Jack 21

Shigurui
Shigurui: Death Frenzy
Dr. Slump: Arale-chan

Alps no Shoujo Heidi
Heidi: Girl of the Alps
Lady Lady!!

Honoo no Toukyuuji: Dodge Danpei

Dragon Quest: Dai no Daibouken (TV)
Dragon Quest: The Adventure of Dai
Toki wo Kakeru Shoujo
The Girl Who Leapt Through Time
Fuyu no Semi
Embracing Love: A Cicada in Winter
Mononoke
Mononoke
Baccano!
Baccano!
Mazinger Z
Mazinger Z
Sentou Mecha Xabungle

Taiyou no Kiba Dougram

Jungle Taitei Movie (1997)
Jungle Emperor Leo
Kidou Senshi Gundam SEED Special Edition
Mobile Suit Gundam SEED Special Edition
Shin Kidou Senki Gundam Wing: Endless Waltz Tokubetsu-hen
Mobile Suit Gundam Wing: Endless Waltz
Red Baron

Little Nemo
Little Nemo: Adventures in Slumberland
Kidou Senshi Gundam SEED Destiny Special Edition
Mobile Suit Gundam SEED Destiny Special Edition
Muumindani no Suisei
Comet in Moominland
Giant Robo the Animation: Chikyuu ga Seishi Suru Hi
Giant Robo the Animation: The Day the Earth Stood Still
Jibaku-kun
Bucky: The Incredible Kid
Uchuu Densetsu Ulysses 31
Ulysses 31
Anime Sanjuushi
The Three Musketeers
Kenyuu Densetsu Yaiba
Legendary Brave Swordsman Yaiba
Hikaru no Go: New Year Special

Tetsujin 28-gou (2004)
Tetsujin 28
Devilman: Tanjou-hen
Devilman: The Birth
Devilman: Yochou Sirene-hen
Devilman: The Demon Bird
Sei Juushi Bismarck
Saber Rider and the Star Sheriffs
Rental Magica
Rental Magica
Enbo
Taboo Charming Mother
Cybersix
Cybersix
One Piece: Jango no Dance Carnival
One Piece: Django's Dance Carnival
One Piece: Yume no Soccer Ou!
One Piece: Dream Soccer King
Doraemon Movie 26: Nobita no Kyouryuu 2006
Doraemon the Movie: Nobita's Dinosaur 2006
Doraemon Movie 24: Nobita to Fushigi Kaze Tsukai
Doraemon the Movie: Nobita and the Windmasters
Digimon Adventure: Bokura no War Game!
Digimon: The Movie
Digimon Adventure 02: Diablomon no Gyakushuu
Digimon Adventure 02: Revenge of Diaboromon
GS Mikami
Ghost Sweeper Mikami
Ashita no Joe
Tomorrow's Joe
Hello! Lady Lynn

Keroro Gunsou Movie 1
Sergeant Frog Movie
Keroro Gunsou Movie 2: Shinkai no Princess de Arimasu!
Sergeant Frog Movie 2
Gokudou-kun Manyuuki
Gokudo
Grander Musashi RV

Stranger: Mukou Hadan
Sword of the Stranger
Suteki desu wa, Sakura-chan! Tomoyo no Cardcaptor Sakura Katsuyaku Video Nikki!
Cardcaptor Sakura Specials
Unico
The Fantastic Adventures Of Unico
Unico: Mahou no Shima e
Unico in the Island of Magic
Lingeries

Nikuyome: Takayanagi Ke no Hitobito

Koukaku Kidoutai: Stand Alone Complex 2nd GIG - Individual Eleven
Ghost in the Shell: Stand Alone Complex 2nd GIG - Individual Eleven
Koukaku Kidoutai: Stand Alone Complex - The Laughing Man
Ghost in the Shell: Stand Alone Complex - The Laughing Man
Crayon Shin-chan Movie 09: Arashi wo Yobu Mouretsu! Otona Teikoku no Gyakushuu

Space Cobra
Space Adventure Cobra
Space Adventure Cobra
Space Adventure Cobra: The Movie
Kimagure Orange☆Road: Ano Hi ni Kaeritai
Kimagure Orange Road: I Want to Return to That Day
Kimagure Orange☆Road OVA
Kimagure Orange Road OVA
Maison Ikkoku: Kanketsu-hen

Shounan Bakusouzoku

Doraemon (1979)
Doraemon
Naruto: Shippuuden Movie 1
Naruto Shippuden the Movie 1
Gear Fighter Dendoh

Takahashi Rumiko Gekijou
Rumiko Takahashi Anthology
Mei to Koneko Bus
Mei and the Baby Cat Bus
Onegai My Melody
Onegai My Melody
Slam Dunk: Shouhoku Saidai no Kiki! Moero Sakuragi Hanamichi
Slam Dunk: Shohoku Maximum Crisis! Burn Sakuragi Hanamichi
Slam Dunk: Hoero Basketman-damashii! Hanamichi to Rukawa no Atsuki Natsu
Slam Dunk: Roar!! Basket Man Spirit
The Cockpit

Genshiken 2
Genshiken 2
Meitantei Conan OVA 02: 16-nin no Yougisha!?
Detective Conan OVA 02: 16 Suspects
Meitantei Conan OVA 03: Conan to Heiji to Kieta Shounen
Detective Conan OVA 03: Conan and Heiji and the Vanished Boy
Meitantei Conan OVA 04: Conan to Kid to Crystal Mother
Detective Conan OVA 04: Conan and Kid and Crystal Mother
Meitantei Conan OVA 05: Hyouteki wa Kogorou!! Shounen Tanteidan Maruchichousa
Detective Conan OVA 05: The Target is Kogoro! The Detective Boys' Secret Investigation
Eikoku Koi Monogatari Emma: Intermission
Emma: A Victorian Romance - Intermission
Masuda Kousuke Gekijou: Gag Manga Biyori 2

Lady Georgie

Robin Hood no Daibouken
The Great Adventures of Robin Hood
Kazoku Robinson Hyouryuuki: Fushigi na Shima no Flone
The Swiss Family Robinson: Flone of the Mysterious Island
Princess Sara
A Little Princess Sara
Ai no Wakakusa Monogatari
Tales of Little Women
Perrine Monogatari

Flanders no Inu
A Dog of Flanders
Shoukoushi Cedie
Little Lord Fauntleroy
Trapp Ikka Monogatari
The Trapp Family Story
Wakakusa Monogatari: Nan to Jo-sensei
Little Women II: Jo's Boys
Romeo no Aoi Sora
Romeo's Blue Skies
Captain Future

Shion no Ou
The Flowers of Hard Blood
Aria the OVA: Arietta
Aria the OVA: Arietta
Jungle Book Shounen Mowgli
The Jungle Book
Ochame na Futago: Claire Gakuin Monogatari
The Mischevious Twins
Minami no Niji no Lucy
Lucy-May of the Southern Rainbow
Tom Sawyer no Bouken
The Adventures of Tom Sawyer
Kidou Senshi Gundam 00
Mobile Suit Gundam 00
Soukou Kihei Votoms
Armored Trooper Votoms
Soukou Kihei Votoms: The Last Red Shoulder
Armored Trooper Votoms: The Last Red Shoulder
Soukou Kihei Votoms: Red Shoulder Document - Yabou no Roots
Armored Trooper Votoms: Red Shoulder Document - Roots of Treachery
Black Cat: Toozakaru Neko
Black Cat Special
Kara no Kyoukai Movie 1: Fukan Fuukei
The Garden of Sinners Chapter 1: Overlooking View
Piano no Mori
The Piano Forest
Shinreigari
Ghost Hound
Meitantei Conan OVA 07: Agasa kara no Chousenjou! Agasa vs Conan & Shounen Tanteidan
Detective Conan OVA 07: A Challenge from Agasa! Agasa vs. Conan and the Detective Boys
Kenkou Zenrakei Suiei-bu Umishou

Sky Girls

Sayonara Zetsubou Sensei
Sayonara, Zetsubou-Sensei
Wangan Midnight

Takarajima
Treasure Island
Flanders no Inu (Movie)
The Dog of Flanders
Flanders no Inu, Boku no Patrasche
A Dog of Flanders: My Patrasche
Doraemon: Kaette Kita Doraemon
Doraemon: Doraemon Comes Back
Doraemon: 2112-nen Doraemon Tanjou

Doraemon: Obaachan no Omoide
Doraemon: A Grandmother's Recollections
Doraemon: Kaette Kita Doraemon (Movie)
Doraemon: Doraemon Comes Back (Movie)
Doraemon: The Day When I Was Born

Doraemon Movie 22: Nobita to Tsubasa no Yuusha-tachi
Doraemon the Movie: Nobita and the Winged Braves
Doraemon Movie 23: Nobita to Robot Kingdom
Doraemon the Movie: Nobita in the Robot Kingdom
Doraemon Movie 25: Nobita no Wan Nyan Jikuuden
Doraemon the Movie: Nobita in the Wan-Nyan Spacetime Odyssey
Doraemon Movie 08: Nobita to Ryuu no Kishi
Doraemon the Movie: Nobita and the Knights on Dinosaurs
Doraemon Movie 09: Nobita no Parallel Saiyuuki
Doraemon the Movie: The Record of Nobita's Parallel Visit to the West
Doraemon Movie 14: Nobita to Buriki no Labyrinth
Doraemon the Movie: Nobita and the Tin Labyrinth
Doraemon: Nobita's the Night Before a Wedding

Doraemon Movie 13: Nobita to Kumo no Oukoku
Doraemon the Movie: Nobita and the Kingdom of Clouds
Doraemon Movie 02: Nobita no Uchuu Kaitakushi
Doraemon the Movie: The Records of Nobita, Spaceblazer
Doraemon Movie 19: Nobita no Nankai Daibouken
Doraemon the Movie: Nobita's Great Adventure in the South Seas
Doraemon Movie 07: Nobita to Tetsujin Heidan
Doraemon the Movie: Nobita and the Steel Troops
Doraemon Movie 10: Nobita no Nippon Tanjou
Doraemon the Movie: Nobita and the Birth of Japan
Doraemon Movie 04: Nobita no Kaitei Kiganjou
Doraemon the Movie: Nobita and the Castle of the Undersea Devil
Doraemon Movie 20: Nobita no Uchuu Hyouryuuki
Doraemon the Movie: Nobita Drifts in the Universe
Doraemon Movie 06: Nobita no Little Star Wars
Doraemon the Movie: Nobita's Little Space War
Doraemon Movie 12: Nobita no Dorabian Nights
Doraemon the Movie: Nobita's Dorabian Nights
Doraemon Movie 03: Nobita no Daimakyou
Doraemon the Movie: Nobita and the Haunts of Evil
Doraemon Movie 05: Nobita no Makai Daibouken
Doraemon the Movie: Nobita's Great Adventure into the Underworld
Doraemon Movie 27: Nobita no Shin Makai Daibouken - 7-nin no Mahoutsukai
Doraemon the Movie: Nobita's New Great Adventure into the Underworld
Doraemon Movie 16: Nobita no Sousei Nikki
Doraemon the Movie: Nobita's Diary of the Creation of the World
Doraemon Movie 17: Nobita to Ginga Express
Doraemon the Movie: Nobita and the Galaxy Super-express
Doraemon Movie 15: Nobita to Mugen Sankenshi
Doraemon the Movie: Nobita's Three Visionary Swordsmen
Doraemon Movie 11: Nobita to Animal Planet
Doraemon the Movie: Nobita and the Animal Planet
Tokyo Majin Gakuen Kenpuuchou: Tou Dai Ni Maku

Tsubasa: Tokyo Revelations
Tsubasa RESERVoir CHRoNiCLE: Tokyo Revelations
Hidamari no Ki
Tree in the Sun
Bakusou Kyoudai Let's & Go WGP

Daicon Opening Animations

Mazinkaiser: Shitou! Ankoku Dai Shougun
Mazinkaiser VS Great General of Darkness
Mojakou

Kidou Senshi Gundam SEED: SEED Supernova - Tanekyara Gekijou

Potemayo

Jigoku Sensei Nube OVA
Hell Teacher Nube
Tetsuwan Atom
Astro Boy
Dash! Kappei

Tennis no Oujisama: Zenkoku Taikai-hen - Semifinal
The Prince of Tennis: The National Tournament Semifinals
Ushiro no Shoumen Daare
Who's Left Behind?
Cheonnyeon-yeowoo Yeowoobi
Yobi, The Five Tailed Fox
Juuni Senshi Bakuretsu Eto Ranger

Shippuu! Iron Leaguer

Evangelion Movie 1: Jo
Evangelion: 1.0 You Are (Not) Alone
Densetsu Kyojin Ideon: Hatsudou-hen
The Ideon: Be Invoked
Igano Kabamaru

CLAMP in Wonderland 2

Shakugan no Shana II (Second)
Shakugan no Shana: Season II
Hatsu Inu The Animation
A Strange Kind of Woman
Hello! Sandybell

Candy Candy

Densetsu no Yuusha da Garn
Legendary Brave da Garn
Irregular Hunter X: The Day of Sigma
Megaman X - The Day of Sigma
Anime Himitsu no Hanazono
The Secret Garden
Chiisana Ahiru no Ooki na Ai no Monogatari: Ahiru no Kwak
Alfred J. Kwak
Geragera Boes Monogatari
Ox Tales
Toushou Daimos
Daimos
Cinderella Monogatari
The Story of Cinderella
Madou King Granzort
Mado King Granzort
Time Travel Tondekeman!
Time Quest
Arabian Nights: Sindbad no Bouken (TV)
Arabian Nights: Sinbad's Adventures
Ie Naki Ko
Nobody's Boy Remi
Ie Naki Ko Remy
Sans Famille
Miracle☆Girls

Patalliro!

Pokemon Movie 10: Dialga vs. Palkia vs. Darkrai
Pokémon: The Rise Of Darkrai
Kappa no Coo to Natsuyasumi
Summer Days with Coo
Bleach Movie 2: The DiamondDust Rebellion - Mou Hitotsu no Hyourinmaru
Bleach the Movie: The DiamondDust Rebellion
Gake no Ue no Ponyo
Ponyo
Higurashi no Naku Koro ni Special: Nekogoroshi-hen
Higurashi: When They Cry - Cat Killing Chapter
Kochira Katsushikaku Kameari Kouenmae Hashutsujo The Movie
Kameari Park Precinct
Sakigake!! Otokojuku
Charge!! Men's Private School
Code Geass: Hangyaku no Lelouch R2
Code Geass: Lelouch of the Rebellion R2
Cyborg Kuro-chan

Daisougen no Chiisana Tenshi: Bush Baby
Bush Baby, Little Angel of the Great Plains
Genki Bakuhatsu Ganbaruger
Energetic Bomb Ganbaruger
Ashita no Joe (Movie)
Tomorrow's Joe The Movie
Ashita no Joe 2
Tomorrow's Joe 2
Ashita no Joe 2 (Movie)
Tomorrow's Joe 2 The Movie
Shugo Chara!
Shugo Chara!
ef: A Tale of Memories.
ef - a tale of memories.
Myself; Yourself
Myself; Yourself
KimiKiss Pure Rouge
KimiKiss: Pure Rouge
Moonlight Mile 2nd Season: Touch Down

Mokke

Bishoujo Senshi Sailor Moon R: Make Up! Sailor Senshi
Sailor Moon R: Make Up! Sailor Guardians
Sketchbook: Full Color's
Sketchbook ~full color's~
Ojamajo Doremi Sharp Movie

Motto! Ojamajo Doremi: Kaeru Ishi no Himitsu

Doubutsu no Mori
Animal Crossing: The Movie
Gintama: Nanigoto mo Saisho ga Kanjin nanode Tashou Senobisuru Kurai ga Choudoyoi
Gintama: Jump Festa 2005 Special
Final Fantasy VII: Advent Children Complete

Maria-sama ga Miteru 3rd Specials
Keep it a Secret from Maria-sama
Digimon Adventure Movie
Digimon: The Movie
Digimon Adventure 02 Movies
Digimon Movie 02 - Digimon Hurricane Touchdown! Supreme Evolution! The Golden Digimentals.
Minami-ke

Ookami to Koushinryou
Spice and Wolf
Appleseed Saga Ex Machina
Appleseed: Ex Machina
Kyou kara Maou! R

Shin Getter Robo
New Getter Robo
Majin Tantei Nougami Neuro
Neuro: Supernatural Detective
Bamboo Blade
Bamboo Blade
Ginga Hyouryuu Vifam

Death Note: Rewrite
Death Note: Relight
Taiho Shichau zo: Full Throttle
You're Under Arrest: Full Throttle
Moyashimon

Gyakkyou Burai Kaiji: Ultimate Survivor
Kaiji: Ultimate Survivor
Atashin'chi
My Family
Tiger Mask
Tiger Mask
Kaiketsu Zorro
The Magnificent Zorro
Ginga Eiyuu Densetsu: Waga Yuku wa Hoshi no Taikai
Legend of the Galactic Heroes: My Conquest is the Sea of Stars
Ginga Eiyuu Densetsu: Arata naru Tatakai no Overture
Legend of the Galactic Heroes: Overture to a New War
Hokuto no Ken: Yuria-den
Fist of the North Star: The Legend of Yuria
Digimon Tamers: Bousou Digimon Tokkyuu
Digimon Tamers: Runaway Locomon
Tobe! Isami
Soar High! Isami
Tetsuwan Atom (1980)
Astro Boy (1980)
Yes! Precure 5 Movie: Kagami no Kuni no Miracle Daibouken!

Saraba Uchuu Senkan Yamato: Ai no Senshi-tachi
Farewell to Space Battleship Yamato: In the Name of Love
Bishoujo Senshi Sailor Moon SuperS Specials
Sailor Moon SuperS Specials
Cencoroll

Tokyo Marble Chocolate
Tokyo Marble Chocolate
The Sky Crawlers
The Sky Crawlers
Aa! Megami-sama! Tatakau Tsubasa
Ah! My Goddess: Fighting Wings
xxxHOLiC◆Kei

Junjou Romantica
Junjo Romantica
Kateikyoushi no Oneesan The Animation: H no Hensachi Agechaimasu

Kaze no Naka no Shoujo: Kinpatsu no Jeanie

Nasu: Suitcase no Wataridori
Nasu: A Migratory Bird with Suitcase
Kodomo no Jikan OVA

Tokimeki Tonight

Ochamegami Monogatari: Korokoro Pollon
Little Pollon
Tsurikichi Sanpei
Sanpei the Fisherman
Solty Rei: Surechigau Kimochi de, Omoi Au Kokoro de.

Makiba no Shoujo Katri
Katri, Girl of the Meadows
Hidamari Sketch Specials

Eve no Jikan
Time of Eve
Nanatsu no Umi no Tico
Tico and Friends
Chibi Maruko-chan Movie

Ganbare Genki

Saiyuuki (OVA)
Saiyuki
Gakuen Utopia Manabi Straight!: Natsu da! Manabi da! Kyouka Gasshuku da!

Kanashimi no Belladonna
Belladonna of Sadness
Shakugan no Shana-tan Movie

Kiddy Grade: Maelstrom

Kiddy Grade: Truth Dawn

Minami-ke Okawari

Major S4

Zoku Sayonara Zetsubou Sensei

Kimi ga Aruji de Shitsuji ga Ore de
They Are My Noble Masters
Druaga no Tou: The Aegis of Uruk
Tower of Druaga: The Aegis of Uruk
Gunslinger Girl: Il Teatrino
Gunslinger Girl: II Teatrino
Kindaichi Shounen no Jikenbo Specials
Kindaichi Case Files Special
Love Hina Final Selection
Love Hina Final Selection
Soukou Kihei Votoms: Pailsen Files
Armored Trooper Votoms: Pailsen Files
Mai-Otome 0: S.ifr
My-Otome 0: S.ifr
.hack//G.U. Trilogy
.hack//G.U. Trilogy
IGPX: Immortal Grand Prix (2005)
IGPX: Immortal Grand Prix
Kinnikuman

Potemayo Specials

Aria the Origination
Aria the Origination
Hatenkou Yuugi
Hatenkou Yugi
Muteki Koujin Daitarn 3

Dr. Slump

Wagaya no Oinari-sama.
Our Home's Fox Deity
Giant Gorg
Giant Gorg
Stop!! Hibari-kun!

Haikara-san ga Tooru
Smart-san
Mnemosyne: Mnemosyne no Musume-tachi
Rin: Daughters of Mnemosyne
Mikan Enikki

Tengen Toppa Gurren Lagann: Mitee Mono wa Miteen da!!
Gurren Lagann: There are Some Things I Just Have to See!!
Zombie-Loan Specials
Zombie-Loan
Kure-nai
Kurenai
RD Sennou Chousashitsu
Real Drive
Shoubushi Densetsu Tetsuya

Ginga Eiyuu Densetsu Gaiden
Legend of the Galactic Heroes Gaiden
Kiniro no Corda: Primo Passo - Hitonatsu no Encore

Jungle no Ouja Tar-chan

Shigofumi
Shigofumi: Letters from the Departed
Kodomo no Omocha

Chou Mashin Eiyuuden Wataru
Super Demon Hero Wataru
Mister Ajikko

Kamichu! Specials
The Goddess is a Middle School Student
To LOVE-Ru
To Love Ru
Bosco Adventure
Bosco Adventure
Minky Momo in Yume ni Kakeru Hashi
Minky Momo in the Bridge Over Dreams
Kino no Tabi: The Beautiful World - Tou no Kuni - Free Lance
Kino's Journey: Tower Country
Nogizaka Haruka no Himitsu
Haruka Nogizaka's Secret
Maria-sama ga Miteru Specials
Maria Watches Over Us
Maria-sama ga Miteru: Haru Specials
Maria Watches Over Us: Printemps
Special A
Special A (S.A)
Koukaku Kidoutai: Stand Alone Complex 2nd GIG - Tachikoma na Hibi
Ghost in the Shell: Stand Alone Complex 2nd GIG - Tachikomatic Days
Yuusha Tokkyuu Might Gaine

Yuusha Shirei Dagwon
Brave Command Dagwon
Genius Party

Saint Seiya: Meiou Hades Elysion-hen
Saint Seiya: The Hades Chapter - Elysion
Kochira Katsushikaku Kameari Kouenmae Hashutsujo

Allison to Lillia
Allison & Lillia
Stringendo: Angel-tachi no Private Lesson
Stringendo
Dennou Boukenki Webdiver
Brain Adventure Record Webdiver
Ganbarist! Shun

Macross F
Macross Frontier
Kyouran Kazoku Nikki

Soul Eater
Soul Eater
Utawarerumono OVA
Utawarerumono OVA
Tears to Tiara
Tears to Tiara
JoJo no Kimyou na Bouken: Phantom Blood
JoJo's Bizarre Adventure: Phantom Blood
Hidamari Sketch x 365
Hidamari Sketch x 365
Toshokan Sensou
Library Wars
Yakushiji Ryouko no Kaiki Jikenbo
Ryoko's Case File
Kamen no Maid Guy

Seimei no Kagaku: Micro Patrol
Once Upon a Time... Life
Shin Kidou Senki Gundam Wing: Operation Meteor
Mobile Suit Gundam Wing: Operation Meteor
D.C.II S.S.: Da Capo II Second Season

Kaiketsu Zorori
Kaiketsu Zorori
Higurashi no Naku Koro ni Rei
Higurashi: When They Cry – Rei
Nabari no Ou
Nabari no Ou
Ginga Eiyuu Densetsu Gaiden (1999)
Legend of the Galactic Heroes Gaiden (1999)
Kikou Souseiki Mospeada
Genesis Climber Mospeada
Tottemo! Luckyman

Nijuu Mensou no Musume
The Daughter of 20 Faces
Sayonara Zetsubou Sensei Jo: Zetsubou Shoujo Senshuu

Watashi to Watashi: Futari no Lotte
The Two Lottes
Yes! Precure 5 GoGo!

Kaiba
Kaiba
Detroit Metal City
Detroit Metal City
Zero no Tsukaima: Princesses no Rondo
The Familiar of Zero: Rondo of Princesses
Jigoku Shoujo Mitsuganae
Hell Girl: Three Vessels
Doraemon Movie 01: Nobita no Kyouryuu
Doraemon the Movie: Nobita's Dinosaur
Itazura na Kiss
ItaKiss
Usavich II
Usavich II
Crayon Shin-chan Movie 10: Arashi wo Yobu Appare! Sengoku Daikassen

Crayon Shin-chan Movie 02: Buriburi Oukoku no Hihou

Maria-sama ga Miteru 4th
Maria Watches Over Us Season 4
Tongari Boushi no Memole

Kara no Kyoukai Movie 2: Satsujin Kousatsu (Zen)
The Garden of Sinners Chapter 2: A Study in Murder - Part 1
Kara no Kyoukai Movie 3: Tsuukaku Zanryuu
The Garden of Sinners Chapter 3: Remaining Sense of Pain
Evangelion Movie 2: Ha
Evangelion: 2.0 You Can (Not) Advance
Evangelion Movie 3: Q
Evangelion: 3.0 You Can (Not) Redo
Shin Evangelion Movie:||
Evangelion: 3.0+1.0 Thrice Upon a Time
Air Gear Special
Air Gear: Special Trick
Chi's Sweet Home

One Piece Movie 09: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura
One Piece: Episode of Chopper Plus - Bloom in the Winter, Miracle Sakura
Top Secret: The Revelation

Shaman King Specials

Ookiku Furikabutte: Kihon no Kihon
Big Windup! The Basics of Basics
Baccano! Specials
Baccano! Specials
Ginga Sengoku Gunyuuden Rai
Galaxy Warring State Chronicle Rai
Resort Boin

Kidou Senshi Gundam 00 Second Season
Mobile Suit Gundam 00: Second Season
Initial D Battle Stage 2

Kafun Shoujo Chuuihou! The Animation

Jarinko Chie
Chie the Brat
Shakugan no Shana-tan II (Second)

Kannagi
Kannagi: Crazy Shrine Maidens
Nodame Cantabile: Nodame to Chiaki no Umi Monogatari

Sentakuya Shin-chan
Dirty Laundry
Yu☆Gi☆Oh! 5D's
Yu-Gi-Oh! 5D's
Tetsuwan Birdy Decode
Birdy the Mighty: Decode
School Rumble San Gakki
School Rumble: 3rd Semester
Seiyou Kottou Yougashiten: Antique
Antique Bakery
Slayers Revolution

Cowboy Bebop: Yose Atsume Blues
Cowboy Bebop: Session XX - Mish-Mash Blues
Zettai Karen Children
Psychic Squad
Golgo 13 (TV)
Golgo 13
Tennis no Oujisama: Zenkoku Taikai-hen - Final
The Prince of Tennis: The National Tournament Finals
Masuda Kousuke Gekijou: Gag Manga Biyori 3

Clannad: Mou Hitotsu no Sekai, Tomoyo-hen
Clannad: Another World, Tomoyo Chapter
Grimm Meisaku Gekijou
Grimm's Fairy Tale Classics
Shin Grimm Meisaku Gekijou
Grimm's Fairy Tale Classics
Musashi no Ken

Sekirei
Sekirei
Kyou kara Maou! 3rd Series

Natsume Yuujinchou
Natsume's Book of Friends
Michiko to Hatchin
Michiko & Hatchin
Trigun: Badlands Rumble
Trigun: Badlands Rumble
Tengen Toppa Gurren Lagann Movie 1: Gurren-hen
Gurren Lagann The Movie: Childhood's End
Onegai My Melody: Kurukuru Shuffle!

Naruto: Shippuuden - Shippuu! "Konoha Gakuen" Den
Naruto Shippuden: Konoha Gakuen - Special
Chiisana Penguin Lolo no Bouken
The Adventures of Scamper the Penguin
One Piece Film: Strong World
One Piece Film: Strong World
Ichigo Mashimaro Episode 0
Strawberry Marshmallow Prologue
Taiho Shichau zo: Nagisa no Koutsuu Yuudou
You're Under Arrest: Diverting Traffic at the Beach
Seto no Hanayome OVA
My Bride is a Mermaid OVA
Bounen no Xamdou
Xam'd: Lost Memories
Clannad: After Story
Clannad: After Story
Darker than Black: Kuro no Keiyakusha - Sakura no Hana no Mankai no Shita
Darker Than Black Episode 26: Beneath the Fully Bloomed Cherry Blossoms
Koukaku no Regios
Chrome Shelled Regios
Mahou Sensei Negima!: Shiroki Tsubasa Ala Alba

Fuyu no Sonata
Winter Sonata
Popolocrois Monogatari
Popolocrois Monogatari
Hayate no Gotoku!!
Hayate the Combat Butler!!
Kodomo no Jikan Ni Gakki

Koutetsu Jeeg

Dirty Pair OVA

Toradora!
Toradora!
Koukyoushihen Eureka Seven: Pocket ga Niji de Ippai
Eureka Seven - good night, sleep tight, young lovers
Kara no Kyoukai Movie 4: Garan no Dou
The Garden of Sinners Chapter 4: The Hollow Shrine
Kara no Kyoukai Movie 5: Mujun Rasen
The Garden of Sinners Chapter 5: Paradox Spiral
Hokuto no Ken: Toki-den
Fist of the North Star: The Legend of Toki
Aniyome wa Ijippari
Lover-in-Law
Kyoro-chan

Suzumiya Haruhi no Yuuutsu (2009)
The Melancholy of Haruhi Suzumiya Season 2
Yuusha-Ou GaoGaiGar Final Grand Glorious Gathering
King of Braves GaoGaiGar Final Grand Glorious Gathering
Naruto: Shippuuden Movie 2 - Kizuna
Naruto Shippuden the Movie 2: Bonds
Meitantei Conan Movie 12: Senritsu no Full Score
Detective Conan Movie 12: Full Score of Fear
Macross F: Close Encounter - Deculture Edition

Lucky☆Star: Original na Visual to Animation
Lucky☆Star OVA
Nodame Cantabile: Paris-hen

Mahoutsukai ni Taisetsu na Koto: Natsu no Sora
Someday's Dreamers II: Sora
Stringendo+Accelerando Ultimatum Sera

Hokuto no Ken: Raoh Gaiden Ten no Haoh
Legends of the Dark King: A Fist of the North Star Story
Hyakko

Hakushaku to Yousei
Earl and Fairy
Tengen Toppa Gurren Lagann Movie 2: Lagann-hen
Gurren Lagann The Movie: The Lights in the Sky are Stars
Shikabane Hime: Aka
Corpse Princess: Aka
Daisuki! BuBu ChaCha
I love BuBu ChaCha
Code Geass: Hangyaku no Lelouch Special Edition - Black Rebellion
Code Geass: Lelouch of the Rebellion Special Edition - Black Rebellion
RideBack
Ride Back
Gosenzo-sama Banbanzai!
Long Life To The Ancestors
Yume no Crayon Oukoku
Crayon Kingdom of Dreams
Toaru Majutsu no Index
A Certain Magical Index
Neo Angelique Abyss: Second Age

Tekken Chinmi
Iron Fist Chinmi
Rurouni Kenshin: Special Techniques

Koukaku Kidoutai 2.0
Ghost in the Shell 2.0
Cyborg 009 (1979)
Cyborg 009
Yes! Precure 5 GoGo! Movie: Okashi no Kuni no Happy Birthday

Tengen Toppa Gurren Lagann: Parallel Works
Gurren Lagann: Parallel Works
Shigofumi: Sore kara
Shigofumi: Letters from the Departed Special
Skip Beat!
Skip Beat!
Ga-Rei: Zero
Ga-Rei-Zero
Druaga no Tou: The Sword of Uruk
Tower of Druaga: The Sword of Uruk
Vampire Knight Guilty
Vampire Knight Guilty
Tsuma Shibori
Beautiful Sisters
Aria the Origination: Sono Choppiri Himitsu no Basho ni...
Aria the Origination Episode 5.5: That Little Secret Place…
ef: A Tale of Melodies.
ef - a tale of melodies.
Druaga no Tou: The Aegis of Uruk - Jil no Bouken
Tower of Druaga: The Aegis of Uruk - Jil's Adventure
Ichigo Mashimaro Encore
Strawberry Marshmallow Encore
Junjou Romantica 2
Junjo Romantica 2
Bleach Movie 3: Fade to Black - Kimi no Na wo Yobu
Bleach the Movie: Fade to Black
Goku Sayonara Zetsubou Sensei
Goodbye Mr. Despair OAD
Mouryou no Hako
Box of Goblins
Tales of the Abyss
Tales of the Abyss
InuYasha: Kuroi Tessaiga

Umineko no Naku Koro ni
Umineko: When They Cry
Kuroshitsuji
Black Butler
Black Lagoon: Roberta's Blood Trail
Black Lagoon: Roberta's Blood Trail
Kyou no 5 no 2 (TV)
Today in Class 5-2 (TV)
xxxHOLiC Shunmuki

Ramayana: The Legend of Prince Rama
Ramayana: The Legend of Prince Rama
Marco: Haha wo Tazunete Sanzenri

Ninja Hattori-kun
Ninja Hattori-kun
Tsubasa: Shunraiki
Tsubasa RESERVoir CHRoNiCLE: Spring Thunder Chronicle
Afro Samurai: Resurrection
Afro Samurai: Resurrection
Casshern Sins
Casshern Sins
Mahou Shoujo Lyrical Nanoha: The Movie 1st
Magical Girl Lyrical Nanoha: The Movie 1st
Tentai Senshi Sunred

Major S5

Major Movie: Yuujou no Winning Shot

Maria†Holic
Maria†Holic
Cobra The Animation

Shikabane Hime: Kuro
Corpse Princess: Kuro
One Outs
One Outs
Guin Saga

Hetalia Axis Powers
Hetalia Axis Powers
Detroit Metal City: Birth of the Metal Devil
Detroit Metal City: Birth of the Metal Devil
Tetsuwan Birdy Decode:02
Birdy the Mighty: Decode 02
Yuusha Keisatsu J-Decker
Brave Police J-Decker
Kurokami The Animation
Kurokami The Animation
Bakemonogatari
Bakemonogatari
Mai Mai Shinko to Sennen no Mahou
Mai-Mai Miracle
Doraemon Movie 28: Nobita to Midori no Kyojin Den
Doraemon the Movie: Nobita and the Green Giant Legend
Hatsu Inu 2 The Animation: Strange Kind of Woman - Again

Fullmetal Alchemist: Brotherhood
Fullmetal Alchemist: Brotherhood
Suzumiya Haruhi-chan no Yuuutsu
The Melancholy of Haruhi-chan Suzumiya
Taishou Yakyuu Musume.
Taisho Baseball Girls
Hatsukoi Limited.
Hatsukoi Limited
Minami-ke Okaeri

Code Geass: Hangyaku no Lelouch R2 Picture Drama
Code Geass: Lelouch of the Rebellion R2 Picture Dramas
Denpa-teki na Kanojo
Electromagnetic Girlfriend
Aria the Origination Picture Drama
Aria The Origination Picture Drama
Dragon League
Dragon League
Offside (TV)

Kara no Kyoukai Movie 6: Boukyaku Rokuon
The Garden of Sinners Chapter 6: Oblivion Recording
Kara no Kyoukai Movie 7: Satsujin Kousatsu (Go)
The Garden of Sinners Chapter 7: A Study in Murder - Part 2
D.C.if: Da Capo if

Shangri-La
Shangri-La
Souten Kouro
Beyond the Heavens
Initial D Extra Stage 2
Initial D Extra Stage 2
Inazuma Eleven

Slayers Evolution-R

Aria the Natural: Sono Futatabi Deaeru Kiseki ni...

Angel Densetsu

One Piece: Romance Dawn Story
One Piece: Romance Dawn Story
Hajime no Ippo: New Challenger
Fighting Spirit: New Challenger
Shugo Chara!! Doki
Shugo Chara!! Doki
Gamba no Bouken
Adventure of Gamba
Miracle Giants Doumu-kun

Sekirei: Pure Engagement
Sekirei: Pure Engagement
Sekirei: Hajimete no Otsukai

Keroro Gunsou Movie 3: Tenkuu Daikessen de Arimasu!
Keroro Movie 3
Hokuto no Ken Zero: Kenshirou Den
Fist of the North Star: Legend of Kenshiro
Zoku Natsume Yuujinchou
Natsume's Book of Friends Season 2
Tales of Symphonia The Animation: Tethe'alla-hen

Sora wo Kakeru Shoujo
The Girl Who Leapt Through Space
Macross F Movie 1: Itsuwari no Utahime
Macross Frontier: The False Songstress
Toshokan Sensou: Koi no Shougai
Library Wars: Situation Love Handicap
Ookami to Koushinryou II
Spice and Wolf II
Meitantei Conan Magic File 2: Kudou Shinichi Nazo no Kabe to Kuro Lab Jiken
Detective Conan Magic File 2: Kudou Shinichi - The Case of the Mysterious Wall and the Black Lab
Kidou Senshi Gundam 00: Tenshi-tachi no Kiseki

Sengoku Basara
Sengoku Basara: Samurai Kings
Canaan
Canaan
Tsumiki no Ie
La Maison en Petits Cubes
Nekketsu Saikyou Go-Saurer

Usavich III
Usavich III
Paniponi Dash!: Danjite Okonaeba Kishin mo Kore wo Saku

Kemono no Souja Erin
The Beast Player Erin
Ougon Yuusha Goldran
The Brave of Gold Goldran
Yu☆Gi☆Oh! Duel Monsters: Battle City Special

Meitantei Conan Movie 13: Shikkoku no Chaser
Detective Conan Movie 13: The Raven Chaser
Shin Mazinger Shougeki! Z-hen
Mazinger Edition Z: The Impact!
Ranma ½: Akumu! Shunmin Kou

Konnichiwa Anne: Before Green Gables
Before Green Gables
Shinkyoku Soukai Polyphonica Crimson S
Polyphonica Crimson S
Senjou no Valkyria
Valkyria Chronicles
Hayate no Gotoku!!: Atsu ga Natsuize - Mizugi-hen!

07-Ghost
07-Ghost
Pandora Hearts
Pandora Hearts
Tegamibachi: Hikari to Ao no Gensou Yawa
Letter Bee: Light and Blue Night Fantasy
Aoyama Goushou Tanpenshuu
Gosho Aoyama's Collection of Short Stories
Dogs: Bullets & Carnage

Natsu no Arashi!
Summer Storm!
Higashi no Eden
Eden of The East
Great Mazinger

To LOVE-Ru OVA

GA: Geijutsuka Art Design Class

Saki

Basquash!

Kobato.
Kobato.
K-On!
K-ON!
Summer Wars
Summer Wars
Phantom: Requiem for the Phantom
Phantom: Requiem for the Phantom
Fresh Precure!

Nodame Cantabile Finale

Rekka no Honoo: Final Burning
Flame of Recca: Final Burning
Sora wo Miageru Shoujo no Hitomi ni Utsuru Sekai

Keroro Gunsou Movie 4: Gekishin Dragon Warriors de Arimasu!

Tanoshii Muumin Ikka Bouken Nikki

Minami-ke Betsubara

Kiniro no Corda: Secondo Passo

Tennis no Oujisama: Another Story - Kako to Mirai no Message
The Prince of Tennis: Another Story - Messages From Past and Future
Precure All Stars Movie DX: Minna Tomodachi☆Kiseki no Zenin Daishuugou!

Dororo to Hyakkimaru
Dororo
Zero no Tsukaima: Princesses no Rondo - Yuuwaku no Sunahama
The Familiar of Zero: Rondo of the Princesses OVA
Isekai no Seikishi Monogatari
Tenchi Muyo! War on Geminar
Tsurupika Hagemaru-kun
Little Baldy Hagemaru
Tiger Mask Nisei

Hanasakeru Seishounen
Hanasakeru Seishonen
Shin Chou Kyou Ryo: Condor Hero III
Legend of the Condor Hero III
Seitokai no Ichizon
Student Council's Discretion
Hi no Ame ga Furu

Cross Game
Cross Game
Tengen Toppa Gurren Lagann Movie Zenyasai: Viral no Amai Yume
Gurren Lagann: Viral's Sweet Dream
Sora no Otoshimono
Heaven's Lost Property
Mizugi Kanojo The Animation

Kinnikuman II Sei: Ultimate Muscle 2

Kannagi: Moshimo Kannagi ga Attara...

Higepiyo

Ristorante Paradiso
Ristorante Paradiso
Hottarake no Shima: Haruka to Mahou no Kagami
Oblivion Island: Haruka and the Magic Mirror
Ookami to Koushinryou II: Ookami to Kohakuiro no Yuuutsu
Spice and Wolf II: The Wolf and the Amber Melancholy
Kyoushoku Soukou Guyver (1989)
The Guyver: Bio-Booster Armor
Nogizaka Haruka no Himitsu Purezza ♪
Haruka Nogizaka's Secret Purezza
Chi's Sweet Home: Atarashii Ouchi
Chi's New Address
Needless
Needless
Dragon Ball Kai
Dragon Ball Z Kai
Kimi ni Todoke
Kimi ni Todoke: From Me to You
Tales of Vesperia: The First Strike
Tales of Vesperia ~The First Strike~
Mahou Sensei Negima!: Mou Hitotsu no Sekai

Higurashi no Naku Koro ni Kai Specials
Higurashi: When They Cry – Kai Specials
Sora no Manimani
At The Mercy of The Sky
Rainbow: Nisha Rokubou no Shichinin
Rainbow
Lupin III vs. Meitantei Conan
Lupin III vs. Detective Conan
Mainichi Kaasan
Kaasan: Mom's Life
Chibi Maruko-chan (1995)
Little Miss Maruko
Final Fantasy VII: On the Way to a Smile - Episode: Denzel

Final Fantasy VII: Advent Children - Venice Film Festival Footage
Final Fantasy VII: Advent Children - Venice Film Festival Footage
Saint Seiya Recap
Saint Seiya: Summary
Saint Seiya: Meiou Hades Juuni Kyuu-hen - Yomigaerishi Gold Saint-tachi no Shinwa
Saint Seiya: The Hades Chapter - Recaps
Kuroshitsuji Recap
Black Butler: The Story Thus Far
Aoi Hana
Sweet Blue Flowers
Tenjoubito to Akutobito Saigo no Tatakai

Saint Seiya: The Lost Canvas - Meiou Shinwa
Saint Seiya: The Lost Canvas
Layton Kyouju to Eien no Utahime
Professor Layton and the Eternal Diva
Pokemon Movie 12: Arceus Choukoku no Jikuu e
Pokémon: Arceus and the Jewel of Life
Nodame Cantabile OVA

Meitantei Conan OVA 08: Joshikousei Tantei Suzuki Sonoko no Jikenbo
Detective Conan OVA 08: High School Girl Detective Sonoko Suzuki's Case Files
Sasameki Koto
Whispered Words
Tokyo Magnitude 8.0
Tokyo Magnitude 8.0
Toaru Kagaku no Railgun
A Certain Scientific Railgun
Nijiiro Hotaru: Eien no Natsuyasumi
Rainbow Fireflies
Meitantei Conan Magic File 3: Shinichi to Ran Mahjong Pai to Tanabata no Omoide
Detective Conan Magic File 3: Shinichi and Ran - Memories of Mahjong Tiles and Tanabata
Manga Sekai Mukashibanashi
Manga Fairy Tales of the World
Kidou Senshi Gundam 00 Movie: A Wakening of the Trailblazer
Mobile Suit Gundam 00 The Movie: A Wakening of the Trailblazer
Full Metal Panic! The Second Raid Episode 00

Maria-sama ga Miteru 4th Specials
Keep it a Secret from Maria-sama
Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono
Naruto Shippuden the Movie 3: The Will of Fire
Kidou Senshi Gundam Unicorn
Mobile Suit Gundam Unicorn
Baka to Test to Shoukanjuu
Baka & Test: Summon the Beasts
Clannad: After Story - Mou Hitotsu no Sekai, Kyou-hen
Clannad: After Story - Another World, Kyou Chapter
ef: A Tale of Memories. - Prologue

Higashi no Eden Movie I: The King of Eden
Eden of The East the Movie I: The King of Eden
Zan Sayonara Zetsubou Sensei

Kyou no 5 no 2 (TV): Takarabako

Tetsuwan Birdy Decode: The Cipher
Birdy the Mighty: Decode OVA
Strike Witches 2
Strike Witches 2
Higashi no Eden: Falling Down

ef: A Tale of Melodies. - Prologue

"Bungaku Shoujo" Movie

Fullmetal Alchemist: Brotherhood Specials
Fullmetal Alchemist: Brotherhood OVA Collection
Meitantei Conan OVA 09: 10-nengo no Stranger
Detective Conan OVA 09: The Stranger in 10 Years...
Tegamibachi
Tegami Bachi: Letter Bee
Crayon Shin-chan Movie 05: Ankoku Tamatama Daitsuiseki

Hoshi wo Katta Hi
The Day I Bought a Star
Meitantei Conan Movie 14: Tenkuu no Lost Ship
Detective Conan Movie 14: The Lost Ship in the Sky
Tteotda Keunyeo!!
There She Is!!
Nyan Koi!
Nyan Koi!
Angel Beats!
Angel Beats!
Tengen Toppa Gurren Lagann: Kirameki★Yoko Box - Pieces of Sweet Stars
Gurren Lagann: Kirameki★Yoko Box - Pieces of Sweet Stars
Popee the Performer
Popee the Clown
Urusei Yatsura: The Shougaibutsu Suieitaikai

Shakugan no Shana S
Shakugan no Shana S: OVA Series
Darker than Black: Ryuusei no Gemini
Darker than Black: Gemini of the Meteor
Hanamaru Youchien
Hanamaru Kindergarten
Sengoku Basara: Setonai no Gekitotsu! Hi wo Fuku Umi no Daiyousai - Fugaku!!

Tentai Senshi Sunred 2nd Season

Yume-iro Pâtissière

Rurouni Kenshin DVD-BOX Special Ending
Samurai X DVD-BOX Special Ending
Katanagatari
Katanagatari
Kuruneko

Kara no Kyoukai Remix: Gate of Seventh Heaven
The Garden of Sinners Remix: Gate of Seventh Heaven
Sengoku Basara Ni
Sengoku Basara: Samurai Kings 2
Higashi no Eden Movie II: Paradise Lost
Eden of The East the Movie II: Paradise Lost
Redline
Redline
Asura Cryin' 2

Fairy Tail
Fairy Tail
Kuroshitsuji II
Black Butler II
Natsu no Arashi! Akinaichuu
Summer Storm! Open for Business
Ranma ½: Nettou Uta Gassen
Ranma 1/2: Hot Song Contest
Durarara!!
Durarara!!
Tatakau Shisho: The Book of Bantorra
Armed Librarians: The Book of Bantorra
Code Geass: Hangyaku no Lelouch R2 Special Edition - Zero Requiem
Code Geass: Lelouch of the Rebellion R2 Special Edition - Zero Requiem
Break Blade Movie 1: Kakusei no Toki
Broken Blade
Shakugan no Shana III (Final)
Shakugan no Shana: Season III
Kuuchuu Buranko
Welcome to Irabu's Office
ef: A Tale of Memories. - Recollections
ef ~ A Tale of Melodies - Recollections
Kuroshitsuji: Sono Shitsuji, Kougyou
Black Butler Special
Genius Party Beyond

So Ra No Wo To
Sound of the Sky
InuYasha: Kanketsu-hen
InuYasha: The Final Act
K-On!: Live House!
K-ON! Live House!
xxxHOLiC Rou

Halo Legends
Halo Legends
Deadman Wonderland
Deadman Wonderland
Ookami to Koushinryou II: Holo no Short Anime
Spice and Wolf II Specials
Hakuouki
Hakuoki ~Demon of the Fleeting Blossom~
Pandora Hearts Omake

Battle Spirits: Shounen Gekiha Dan

Hellsing: Digest for Freaks

Fate/stay night Movie: Unlimited Blade Works
Fate/stay night: Unlimited Blade Works
Higashi no Eden: Air Communication
Eden of The East Compilation: Air Communication; Higashi no Eden Recap
Doraemon Movie 29: Shin Nobita no Uchuu Kaitakushi
Doraemon the Movie: The Record of Nobita's Spaceblazer
Toriko: Jump Super Anime Tour 2009 Special

Gintama: Shiroyasha Koutan
Gintama: Jump Festa 2008 Special
Bakemonogatari Recap

Yu☆Gi☆Oh! Movie: Chou Yuugou! Toki wo Koeta Kizuna
Yu-Gi-Oh! 3D: Bonds Beyond Time
Kara no Kyoukai Movie 8: Shuushou
The Garden of Sinners Chapter 8: Epilogue
Working!!
Wagnaria!!
GA: Geijutsuka Art Design Class - Aozora ga Kakitai

Seikimatsu Occult Gakuin
Occult Academy
Kaidan Restaurant

Hidamari Sketch x 365 Specials

Doraemon Movie 30: Nobita no Ningyo Daikaisen

Tennis no Oujisama: Another Story - Kako to Mirai no Message Specials
The Prince of Tennis: Another Story - Messages From Past and Future OVA Bonus
Seto no Hanayome OVA Specials
Seto no Hanayome OVA Extras
Zan Sayonara Zetsubou Sensei Bangaichi

Doraemon Movie 21: Nobita no Taiyou Ou Densetsu
Doraemon the Movie: Nobita's the Legend of the Sun King
Fault!!

Kaichou wa Maid-sama!
Maid Sama!
Uragiri wa Boku no Namae wo Shitteiru
The Betrayal Knows My Name
Black★Rock Shooter (OVA)

Hidamari Sketch x ☆☆☆

Mahoromatic: Tadaima Okaeri
Mahoromatic: I'm Home!
Danball Senki
LBX: Little Battlers eXperience
Anyamal Tantei Kiruminzoo

Aoi Bungaku Series

Macross F Movie 2: Sayonara no Tsubasa
Macross Frontier: The Wings of Farewell
Mameshiba

Kidou Senshi Gundam 00 Special Edition
Mobile Suit Gundam 00 Special Edition
Meitantei Conan: Kuro no Soshiki to Taiketsu no Rekishi
Detective Conan: Black History
Meitantei Conan Movie 08: Ginyoku no Time Travel Recap
Detective Conan Movie 08: Time Travel of the Silver Sky Recap
Meitantei Conan Movie 10: Tantei-tachi no Requiem Recap
Detective Conan Movie 10: Requiem of the Detectives Recap
Mirai Shounen Conan (Movie)
Future Boy Conan Movie
Suzumiya Haruhi no Shoushitsu
The Disappearance of Haruhi Suzumiya
Hetalia Axis Powers Movie: Paint it, White
Hetalia Axis Powers: Paint it, White!
Darker than Black: Kuro no Keiyakusha Gaiden
Darker Than Black: Gemini of the Meteor OVAs
Kanojo x Kanojo x Kanojo: Sanshimai to no Dokidoki Kyoudou Seikatsu
Kanojo x Kanojo x Kanojo
Eve no Jikan (Movie)
Time of Eve
Meitantei Conan Movie 09: Suihei Senjou no Strategy Recap
Detective Conan Movie 09: Strategy Above the Depths Recap
Gintama Movie 1: Shinyaku Benizakura-hen
Gintama: The Movie
Saraiya Goyou
House of Five Leaves
Nurarihyon no Mago
Nura: Rise of the Yokai Clan
Michi (Movie)

Mitsudomoe
Mitsudomoe
Heartcatch Precure!

Arakawa Under the Bridge
Arakawa Under the Bridge
Ningen Shikkaku: Director's Cut-ban

Tokyo Magnitude 8.0 Recap

Major S6

Giant Killing
Giant Killing
Shinrei Tantei Yakumo
Psychic Detective Yakumo
Bakuman.
Bakuman.
Karigurashi no Arrietty
The Secret World of Arrietty
Ookiku Furikabutte: Natsu no Taikai-hen
Big Windup! 2
Shiki
Shiki
Zettai Karen Children OVA: Aitazousei! Ubawareta Mirai?

Sono Hanabira ni Kuchizuke wo: Anata to Koibito Tsunagi
A Kiss for the Petals: Becoming Your Lover
Yondemasu yo, Azazel-san.

Ookami-san to Shichinin no Nakama-tachi
Okami-San and Her Seven Companions
Yojouhan Shinwa Taikei
The Tatami Galaxy
K-On!!
K-ON! Season 2
Sora no Otoshimono: Project Pink
Heaven's Lost Property OVA
Versailles no Bara to Onna-tachi
Lady Oscar Special
Baka to Test to Shoukanjuu Specials

Momoko, Kaeru no Uta ga Kikoeru yo.
My Sister Momoko
Fullmetal Alchemist: Brotherhood - 4-koma Gekijou
Fullmetal Alchemist: Brotherhood 4-koma Theater
Chi's Sweet Home: Chi to Kocchi, Deau.

Tegamibachi Gakuen
Letter Bee Academy
Nodame Cantabile: Finale - Mine to Kiyora no Saikai

Sekaiichi Hatsukoi OVA

Kuroshitsuji Picture Drama

Highschool of the Dead
High School of the Dead
Densetsu no Yuusha no Densetsu
The Legend of the Legendary Heroes
Soukyuu no Fafner: Dead Aggressor - Heaven and Earth
Fafner: Heaven and Earth
Mardock Scramble: The First Compression
Mardock Scramble: The First Compression
Fukubiki! Triangle: Miharu After

Uchuu Show e Youkoso
Welcome to THE SPACE SHOW
Gotou ni Naritai.

Kuragehime
Princess Jellyfish
Precure All Stars Movie DX2: Kibou no Hikari☆Rainbow Jewel wo Mamore!

Keroro Gunsou Movie 5: Tanjou! Kyuukyoku Keroro, Kiseki no Jikuu-jima, de Arimasu!!
Keroro Gunso the Super Movie: Creation! Ultimate Keroro, Wonder Space-Time Island!!
Colorful (Movie)
Colorful: The Motion Picture
One Piece Recap
One Piece: Romance Dawn Story - Recapping the TV Series So Far
Nodame Cantabile Finale OVA

So Ra No Wo To Specials
Sound of the Sky Specials
Jewelpet Twinkle☆

Muumin

Naruto: Shippuuden Movie 4 - The Lost Tower
Naruto Shippuden the Movie 4: The Lost Tower
Bleach Movie 4: Jigoku-hen
Bleach the Movie: Hell Verse
Ojousama wa H ga Osuki: The Animation

Magic Kaito

Tegamibachi Reverse
Tegami Bachi: Letter Bee Reverse
Sayonara Zetsubou Sensei Jo: Zoku Zetsubou Shoujo Senshuu

Meitantei Conan Magic File 4: Osaka Okonomiyaki Odyssey
Detective Conan Magic File 4: Osaka Okonomiyaki Odyssey
Crayon Shin-chan Movie 01: Action Kamen vs. Haigure Maou

Crayon Shin-chan Movie 04: Henderland no Daibouken

Crayon Shin-chan Movie 06: Dengeki! Buta no Hizume Daisakusen

Crayon Shin-chan Movie 08: Arashi wo Yobu Jungle

Crayon Shin-chan Movie 11: Arashi wo Yobu Eikou no Yakiniku Road

Crayon Shin-chan Movie 12: Arashi wo Yobu! Yuuhi no Kasukabe Boys

Crayon Shin-chan Movie 18: Chou Jikuu! Arashi wo Yobu Ora no Hanayome

Sora no Otoshimono Forte
Heaven's Lost Property Forte
Durarara!! Specials
Durarara!! Specials
Metal Fight Beyblade: Baku
Beyblade: Metal Masters
Ookiku Furikabutte: Natsu no Scorebook
Big Windup!
MM!
MM!
Gosick

Hourou Musuko
Wandering Son
Yozakura Quartet: Hoshi no Umi

Mirai Nikki
The Future Diary OVA
Asura

Otome Youkai Zakuro
Zakuro
Hetalia World Series
Hetalia World Series
"Bungaku Shoujo" Memoire

Fushigi Mahou Fun Fun Pharmacy

Break Blade Movie 2: Ketsubetsu no Michi
Broken Blade 2
Baka to Test to Shoukanjuu Ni!
Baka & Test – Summon the Beasts 2
Kami nomi zo Shiru Sekai
The World God Only Knows
Katekyou Hitman Reborn! Vongola Family Soutoujou! Vongola Shiki Shuugakuryokou, Kuru!!
Reborn! Here Comes a Vongola Family-Style School Trip!
Shinryaku! Ika Musume
The Squid Girl
Meitantei Conan OVA 10: Kid in Trap Island
Detective Conan OVA 10: Kid in Trap Island
Mazinkaiser SKL

Seitokai Yakuindomo
Student Council Staff Members
Amagami SS
Amagami SS
Doraemon (2005)

Soredemo Machi wa Mawatteiru
And Yet the Town Moves
One Piece Film: Strong World Episode 0

Bishoujo Senshi Sailor Moon Memorial
Pretty Soldier Sailor Moon Memorial
Hiyokoi

Panty & Stocking with Garterbelt
Panty & Stocking with Garterbelt
Kore wa Zombie desu ka?
Is This a Zombie?
Nichijou: Nichijou no 0-wa
Nichijou - My Ordinary Life Episode 0
Code Geass: Boukoku no Akito 1 - Yokuryuu wa Maiorita
Code Geass: Akito the Exiled - The Wyvern Arrives
Yume-iro Pâtissière: Mune Kyun Tropical Island!

Tales of Symphonia The Animation: Tethe'alla-hen Specials

Dantalian no Shoka
The Mystic Archives of Dantalian
Mouretsu Pirates
Bodacious Space Pirates
Star Driver: Kagayaki no Takuto
Star Driver
Toaru Majutsu no Index II
A Certain Magical Index II
Tales of Symphonia The Animation: Sekai Tougou-hen

Toaru Hikuushi e no Tsuioku
The Princess and the Pilot
Kuruneko 2nd Season

Katekyou Hitman Reborn!: Mr. Rebokku no Ciao Ciao Interview

Inazuma Eleven: Saikyou Gundan Ogre Shuurai

Toaru Kagaku no Railgun: Misaka-san wa Ima Chuumoku no Mato desu kara

Tamayura

Angel Beats! Specials

Hakuouki: Hekketsuroku
Hakuoki: Demon of the Fleeting Blossom - Record of the Jade Blood
Arakawa Under the Bridge x Bridge
Arakawa Under the Bridge x Bridge
Saiyuuki Gaiden

Amagami SS OVA
Amagami SS Short Animations
Beelzebub: Hirotta Akachan wa Daimaou!?

Ookiku Furikabutte: Natsu no Taikai-hen – Mokuhyou
Big Windup! 2 Episode 12.5
Saint Seiya: The Lost Canvas - Meiou Shinwa 2
Saint Seiya: The Lost Canvas 2
Fullmetal Alchemist: The Sacred Star of Milos
Fullmetal Alchemist: The Sacred Star of Milos
Kuroshitsuji II Specials
Black Butler II Specials
Kindaichi Shounen no Jikenbo Movie 2: Satsuriku no Deep Blue
Young Kindaichi's Casebook: Deep Blue Massacre
Kaibutsu Oujo (OVA)

Motto To LOVE-Ru
Motto To LOVE Ru
Dae Jang Geum: Jang Geum's Dream 2

Air Gear: Kuro no Hane to Nemuri no Mori - Break on the Sky

Omae Umasou da na
Heart and Yummie
Kowarekake no Orgel

Super Robot Taisen OG: The Inspector
Super Robot Wars OG: The Inspector
Break Blade Movie 3: Kyoujin no Ato
Broken Blade 3
Steins;Gate
Steins;Gate
Kizumonogatari I: Tekketsu-hen
Kizumonogatari Part 1: Iron-Blooded
Heartcatch Precure! Movie: Hana no Miyako de Fashion Show... desu ka!?

Hanasaku Iroha
Hanasaku Iroha: Blossoms for Tomorrow
Kateikyoushi no Oneesan 2 The Animation: H no Hensachi Agechaimasu

HHH Triple Ecchi

.hack//Quantum

Cheburashka

Battle Spirits: Brave

Chibi Maruko-chan: Watashi no Suki na Uta

Sekirei: Pure Engagement Episode 0

Kaichou wa Maid-sama!: Omake da yo!
Maid Sama!: It's an Extra!
Denpa Onna to Seishun Otoko
Ground Control to Psychoelectric Girl
Mitsudomoe: Oppai Ippai Mama Genki

Yume-iro Pâtissière SP Professional

Break Blade Movie 4: Sanka no Chi
Broken Blade 4
Baka to Test to Shoukanjuu: Matsuri
Baka & Test - Summon the Beasts OVA
Cencoroll Connect
Cencoroll Connect
Mitsudomoe Zouryouchuu!

Beelzebub
Beelzebub
Cardfight!! Vanguard
Cardfight!! Vanguard
Biohazard: Damnation
Resident Evil: Damnation
Alps no Shoujo Heidi (1979)
The Story of Heidi
Hidamari Sketch x ☆☆☆ Specials

Aa! Megami-sama! (2011)
Ah! My Goddess: Together Forever
K-On! Movie
K-ON! The Movie
Be-Bop Highschool

Kimi ni Todoke 2nd Season
Kimi ni Todoke: From Me to You Season 2
Hakuouki: Hekketsuroku - Kyoto Kaisouroku

Break Blade Movie 5: Shisen no Hate
Broken Blade 5
K-On!!: Keikaku!
K-On!!: Plan!
Gintama: Shinyaku Benizakura-hen

Sengoku Basara Movie: The Last Party
Sengoku Basara - Samurai Kings: The Movie
Strike Witches Movie
Strike Witches: The Movie
Mahou Shoujo Madoka★Magica
Puella Magi Madoka Magica
Hoshi wo Ou Kodomo
Children Who Chase Lost Voices
Meitantei Conan: Conan vs. Kid - Shark & Jewel
Detective Conan: Conan vs. Kid - Shark & Jewel
Meitantei Conan: Conan vs. Kid - Shikkoku no Sniper
Detective Conan: Conan vs. Kid - Jet Black Sniper
Sora no Otoshimono: Tokeijikake no Angeloid
Heaven's Lost Property the Movie: The Angeloid of Clockwork
Senjou no Valkyria 3: Tagatame no Juusou

Level E
Level E
SKET Dance
SKET Dance
Hetalia Axis Powers Fan Disc
Hetalia Axis Powers Fan Disc
Touhou Niji Sousaku Doujin Anime: Musou Kakyou

Shinryaku! Ika Musume Specials
The Squid Girl Specials
Major: Message

Suite Precure♪

Bokura no Live Kimi to no Life

Ao no Exorcist
Blue Exorcist
Amagami SS: Tachibana Miya-hen - Imouto
Amagami SS: Little Sister
Sekaiichi Hatsukoi
Sekai Ichi Hatsukoi - World's Greatest First Love
Snow Halation

Happy Birthday: Inochi Kagayaku Toki
Re-Birthday
Ikoku Meiro no Croisée The Animation
Croisée in a Foreign Labyrinth The Animation
Tiger & Bunny
Tiger & Bunny
Hayate no Gotoku! Heaven Is a Place on Earth
Hayate the Combat Butler! Movie
Raiyantsuuri no Uta

Meitantei Conan Movie 15: Chinmoku no Quarter
Detective Conan Movie 15: Quarter of Silence
Gintama'
Gintama Season 2
Precure All Stars Movie DX3: Mirai ni Todoke! Sekai wo Tsunagu☆Nijiiro no Hana

Phi Brain: Kami no Puzzle
Phi-Brain ~ Puzzle of God
Fairy Tail OVA

Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.
Anohana: The Flower We Saw That Day
Hyouge Mono

Carnival Phantasm

Ore no Imouto ga Konnani Kawaii Wake ga Nai Specials
OreImo Specials
Coquelicot-zaka kara
From Up on Poppy Hill
Bakuman. 2nd Season
Bakuman. Season 2
Toriko
Toriko
Nurarihyon no Mago: Sennen Makyou
Nura: Rise of the Yokai Clan - Demon Capital
Macross F Music Clip Shuu: Nyankuri

Angel Beats! Another Epilogue

Naruto x UT

Kami nomi zo Shiru Sekai II
The World God Only Knows II
Shiki Specials
Shiki Specials
Fate/Zero
Fate/Zero
Koukaku Kidoutai: Stand Alone Complex - Solid State Society 3D
Ghost in the Shell: Stand Alone Complex - Solid State Society 3D
Break Blade Movie 6: Doukoku no Toride
Broken Blade 6
Sweet Home: H na Oneesan wa Suki desu ka?

Mayo Chiki!
Mayo Chiki!
Crayon Shin-chan Movie 19: Arashi wo Yobu Ougon no Spy Daisakusen
Crayon Shin-chan: Fierceness That Invites Storm! Operation Golden Spy
Seitokai Yakuindomo OVA

Kimi ni Todoke: Kataomoi
Kimi ni Todoke: From Me to You - Unrequited Love
Mahou Shoujo Lyrical Nanoha: The Movie 2nd A's
Magical Girl Lyrical Nanoha: The Movie 2nd A's
No.6
No. 6
Usagi Drop
Bunny Drop
C: The Money of Soul and Possibility Control
[C] CONTROL - The Money and Soul of Possibility
Nichijou
Nichijou - My Ordinary Life
Otona Joshi no Anime Time

Hunter x Hunter Pilot

Kore wa Zombie desu ka? OVA
Is This a Zombie? OVA
Yondemasu yo, Azazel-san. (TV)
You're Being Summoned, Azazel
Berserk: Ougon Jidai-hen I - Haou no Tamago
Berserk: The Golden Age Arc I - The Egg of the King
Tamayura: Hitotose

Pretty Rhythm: Aurora Dream

Da Yu Hai Tang (Movie)
Big Fish & Begonia
Gyakkyou Burai Kaiji: Hakairoku-hen
Kaiji: Against All Rules
The iDOLM@STER
THE IDOLM@STER
Towa no Quon 1: Utakata no Kaben
Towanoquon: The Ephemeral Petals
Kaichou wa Maid-sama!: Goshujinsama to Asonjao♥
Maid Sama! Play with Your Husband ♥
Uta no☆Prince-sama♪ Maji Love 1000%
Uta no Prince Sama
Rurouni Kenshin Recap
Samurai X Recap
Last Exile: Ginyoku no Fam
Last Exile: Fam, the Silver Wing
Hakuouki: Sekkaroku
Hakuoki: Demon of the Fleeting Blossom - A Memory of Snow Flowers
Jinrui wa Suitai Shimashita
Humanity Has Declined
Metal Fight Beyblade 4D
Beyblade: Metal Fury
Kamisama Dolls
Kamisama Dolls
Shinryaku!? Ika Musume
The Squid Girl 2
Natsume Yuujinchou San
Natsume's Book of Friends Season 3
Oni Chichi: Re-birth

Momo e no Tegami
A Letter to Momo
Ben-To
Ben-To
Mashiro-iro Symphony: The Color of Lovers
Mashiroiro Symphony: The Color of Lovers
Hotarubi no Mori e
Into the Forest of Fireflies' Light
Menkui!

Digimon Xros Wars: Aku no Death General to Nanatsu no Oukoku
Digimon Fusion
Perfect Day

Aquarion Evol
Aquarion Evol
Rain Town

Kyoukaisenjou no Horizon
Horizon in the Middle of Nowhere
Kimi to Boku.
You and Me.
Seitokai no Ichizon Lv.2
Student Council's Discretion Level 2
Sayonara Zetsubou Sensei Special

Ie Naki Ko Remy Specials

Beelzebub Specials

Sengoku Basara Ni: Ryuko, Itadaki no Chikai! Atsuki Mirai e Kakeru Tamashii!!

Yuru Yuri
YuruYuri: Happy Go Lily
Hetalia World Series Specials
Hetalia World Series Extra Episodes
Ojiisan no Lamp

Gosick: Utsukushiki Kaibutsu wa Konton no Sen wo Shimiru

Inazuma Eleven Go

Working'!!
Wagnaria!!2
Meitantei Conan Magic File 5: Niigata - Tokyo Omiyage Capriccio
Detective Conan Magic File 5: Niigata - Tokyo Omiyage Capriccio
Doraemon Movie 31: Shin Nobita to Tetsujin Heidan - Habatake Tenshi-tachi
Doraemon: Nobita and the Steel Troops - The New Age
Kimi ni Todoke 2nd Season: Minitodo Gekijou
Kimi ni Todoke: From Me to You Season 2 - Mini Theater
Kamisama no Memochou
Heaven's Memo Pad
Tennis no Oujisama: Another Story II - Ano Toki no Bokura
The Prince of Tennis OVA Another Story II
Persona 4 the Animation
Persona 4 the Animation
Naruto: Shippuuden Movie 5 - Blood Prison
Naruto Shippuden the Movie 5: Blood Prison
Mirai Nikki (TV)
The Future Diary
Mardock Scramble: The Second Combustion
Mardock Scramble: The Second Combustion
Mahou Sensei Negima!: Mou Hitotsu no Sekai Extra - Mahou Shoujo Yue♥

Tibet Inu Monogatari
The Tibetan Dog
Denpa Onna to Seishun Otoko: Mayonaka no Taiyou
Ground Control to Psychoelectric Girl Special
Gintama: Dai Hanseikai

Ao no Exorcist: Ura Ex
Blue Exorcist: Ura Eku
Blood-C: The Last Dark
Blood-C: The Last Dark
Tentacle and Witches

Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!
Naruto Shippuden: Chunin Exam on Fire! Naruto vs. Konohamaru!
Meitantei Conan OVA 11: London kara no Maru Hi Shirei
Detective Conan OVA 11: A Secret Order from London
Plastic Neesan

Towa no Quon 2: Konton no Ranbu
Towanoquon: Dancing Orchid in Chaos
Towa no Quon 3: Mugen no Renza
Towanoquon: The Complicity of Dreams
Towa no Quon 4: Guren no Shoushin
Towanoquon: The Roaring Anxiety
Towa no Quon 5: Souzetsu no Raifuku
Towanoquon: The Return of the Invincible
Towa no Quon 6: Towa no Quon
Towanoquon: Eternal Quon
Boku wa Tomodachi ga Sukunai
Haganai: I don't have many friends
Mawaru Penguindrum
Penguindrum
Tennis no Oujisama Movie 2: Eikokushiki Teikyuu Shiro Kessen!

Hikaru no Go: Sabaki no Ikkyoku! Inishie no Hana yo Sake!!

Eroge! H mo Game mo Kaihatsu Zanmai

Kore wa Zombie desu ka? of the Dead
Is This a Zombie? of the Dead
Guilty Crown
Guilty Crown
Un-Go
Un-Go
Chihayafuru
Chihayafuru
Ikoku Meiro no Croisée The Animation: Ongakkai "Récital"
Croisée in a Foreign Labyrinth The Animation: Concert
Kami nomi zo Shiru Sekai: 4-nin to Idol
The World God Only Knows: Four Girls and an Idol
Nichijou: Original Jikai Yokoku
My Ordinary Life Specials
Suite Precure♪ Movie: Torimodose! Kokoro ga Tsunagu Kiseki no Melody♪

Ranma ½: Totteoki Talk - Best of Memories
Ranma ½: Best Memories
Ranma ½: Battle ga Ippai 29-nin no Korinai Yatsura
Ranma ½: Huge Battle! 29 Unteachable Fools
Baka to Test to Shoukanjuu: Spinout! Sore ga Bokura no Nichijou

Tennis no Oujisama: Pair Prince

Steins;Gate: Oukoubakko no Poriomania
Steins;Gate: Egoistic Poriomania
Koukaku Kidoutai: Stand Alone Complex - Tachikoma na Hibi (TV)
Ghost in the Shell: Stand Alone Complex: Tachikomatic Days
Saki Achiga-hen: Episode of Side-A
Saki Episode of Side A
Kowarekake no Orgel (Movie)

Nogizaka Haruka no Himitsu Finale ♪
Haruka Nogizaka's Secret Finale
Hourou Musuko Specials
Wandering Son Specials
Kidou Senshi Gundam: The Origin
Mobile Suit Gundam: The Origin
Inazuma Eleven Go: Kyuukyoku no Kizuna Gryphon
Inazuma Eleven GO: The Ultimate Bond Griffon
Toshokan Sensou: Kakumei no Tsubasa
Library Wars: The Wings of Revolution
Inu x Boku SS
Inu X Boku Secret Service
Pokemon 3D Adventure: Mew wo Sagase!
Pokémon 3D Adventure: Find Mew!
Muv-Luv Alternative: Total Eclipse
Muv-Luv Alternative: Total Eclipse
Natsu-iro Egao de 1, 2, Jump!

Doraemon Movie 32: Nobita to Kiseki no Shima - Animal Adventure

Hunter x Hunter (2011)
Hunter x Hunter
Hellsing: The Dawn

Another
Another
Usagi Drop Specials
Bunny Drop Specials
Sekaiichi Hatsukoi 2
Sekai Ichi Hatsukoi - World's Greatest First Love 2
Hybrid Child

Papa no Iukoto wo Kikinasai!
Listen to Me, Girls. I Am Your Father!
Amagami SS+ Plus
Amagami SS+ plus
Hidamari Sketch x SP
Hidamari Sketch x SP
Hidamari Sketch x Honeycomb

Ao no Exorcist: Kuro no Iede
Blue Exorcist: Runaway Kuro
Kimi no Iru Machi: Tasogare Kousaten
A Town Where You Live: Crossing at Twilight
Zero no Tsukaima F
The Familiar of Zero F
Nee Summer!

A-Channel+smile

Tantei Opera Milky Holmes Dai 2 Maku
Detective Opera Milky Holmes 2
Dragon Ball Kai: Mirai ni Heiwa wo! Goku no Tamashii yo Eien ni
Dragon Ball Z Kai: Bring Peace to the Future! Goku's Spirit is Eternal
Shin Tennis no Oujisama
The Prince of Tennis II
.hack//The Movie: Sekai no Mukou ni

Ano Natsu de Matteru
Waiting in the Summer
Rurouni Kenshin: Meiji Kenkaku Romantan - Shin Kyoto-hen
Rurouni Kenshin: New Kyoto Arc
Sankarea
Sankarea: Undying Love
Un-Go: Inga-ron
Un-Go: Chapter of Inga
Toradora!: Bentou no Gokui
Toradora! Special
Steins;Gate Movie: Fuka Ryouiki no Déjà vu
Steins;Gate: The Movie - Load Region of Déjà Vu
Nisemonogatari
Nisemonogatari
High School DxD
High School DxD
Blood Lad
Blood Lad
Hakuouki OVA

Natsume Yuujinchou Shi
Natsume's Book of Friends Season 4
Area no Kishi
The Knight in the Area
Another: The Other - Inga
Another: The Other
Ao no Exorcist Movie
Blue Exorcist: The Movie
Kimi to Boku. 2
You and Me 2
Fate/Zero 2nd Season
Fate/Zero Season 2
Toaru Majutsu no Index Movie: Endymion no Kiseki
A Certain Magical Index the Movie: The Miracle of Endymion
Senki Zesshou Symphogear
Symphogear
Sword Art Online
Sword Art Online
Accel World
Accel World
Medaka Box
Medaka Box
Kuroko no Basket
Kuroko's Basketball
Lupin III: Chi no Kokuin - Eien no Mermaid
Lupin III: Blood Seal of the Eternal Mermaid
Dog Days'

Haiyore! Nyaruko-san
Nyaruko: Crawling With Love!
Tamayura: Hitotose - Attakai Kaze no Omoide, nanode

Shijou Saikyou no Deshi Kenichi OVA
KenIchi: The Mightiest Disciple OVA
Kuroinu: Kedakaki Seijo wa Hakudaku ni Somaru

Danshi Koukousei no Nichijou
Daily Lives of High School Boys
Oni Chichi: Re-born

Kokoro Connect
Kokoro Connect
The iDOLM@STER: 765 Pro to Iu Monogatari

Major: World Series

Oda Nobuna no Yabou
The Ambition of Oda Nobuna
Mahou Shoujo Madoka★Magica Movie 1: Hajimari no Monogatari
Puella Magi Madoka Magica the Movie Part 1: Beginnings
Mahou Shoujo Madoka★Magica Movie 2: Eien no Monogatari
Puella Magi Madoka Magica the Movie Part 2: Eternal
Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari
Puella Magi Madoka Magica the Movie: Rebellion
Tiger & Bunny Movie 1: The Beginning
Tiger & Bunny Movie 1
Tiger & Bunny Movie 2: The Rising
Tiger & Bunny: The Rising
Poyopoyo Kansatsu Nikki
Poyopoyo
Uchuu Senkan Yamato 2199
Star Blazers: Space Battleship Yamato 2199
Kingdom
Kingdom
Fairy Tail Movie 1: Houou no Miko
Fairy Tail the Movie: The Phoenix Priestess
Mardock Scramble: The Third Exhaust
Mardock Scramble: The Third Exhaust
Rurouni Kenshin Special
Samurai X Special
Hajime no Ippo: Boxer no Kobushi
Fighting Spirit Special
Black★Rock Shooter

Berserk: Ougon Jidai-hen II - Doldrey Kouryaku
Berserk: The Golden Age Arc II - The Battle for Doldrey
Berserk: Ougon Jidai-hen III - Kourin
Berserk: The Golden Age Arc III - The Advent
Meitantei Conan Movie 16: 11-ninme no Striker
Detective Conan Movie 16: The Eleventh Striker
Natsu-iro Kiseki
A Summer-Colored Miracle
Swing Out Sisters

AKB0048
AKB0048
Carnival Phantasm EX Season

Hyouka
Hyouka
Precure All Stars Movie New Stage: Mirai no Tomodachi

Dragon Ball: Episode of Bardock
Dragon Ball: Episode of Bardock
Acchi Kocchi
Place to Place
Ookami Kodomo no Ame to Yuki
Wolf Children
Bakuman. 3rd Season
Bakuman. Season 3
Maki-chan to Now.

Yuru Yuri♪♪
YuruYuri: Happy Go Lily ♪♪
Jormungand
Jormungand
Guilty Crown: Kiseki - Reassortment
Guilty Crown Locus: Reassortment
Uchuu Kyoudai
Space Brothers
Tasogare Otome x Amnesia
Dusk Maiden of Amnesia
Nazo no Kanojo X
Mysterious Girlfriend X
Sakasama no Patema
Patema Inverted
Kyoukaisenjou no Horizon II
Horizon in the Middle of Nowhere II
Sakamichi no Apollon
Kids on the Slope
Mogyutto "Love" de Sekkinchuu!

Danball Senki W
LBX: Little Battlers eXperience Season 2
Amagami SS+ Plus: Extra Episode+ Plus

Papa no Iukoto wo Kikinasai!: Pokkapoka

Joshiraku
Joshiraku
Tight-rope
Tight-rope
Tales of Symphonia The Animation: Sekai Tougou-hen Specials

Uta no☆Prince-sama♪ Maji Love 2000%
Uta no Prince Sama 2
Initial D: Project D to the Next Stage - Project D e Mukete

High School DxD OVA

Phi Brain: Kami no Puzzle - Orpheus Order-hen
Phi-Brain ~ Puzzle of God: The Orpheus Order
Shirokuma Cafe
Polar Bear Cafe
Shakugan no Shana-tan III (Final): Final Destruction

One Piece Film: Z
One Piece Film: Z
Ginga e Kickoff!!
Victory Kickoff!!
Dantalian no Shoka: Ibarahime
The Mystic Archives of Dantalian: Ibarahime
Tsuritama
Tsuritama
Danshi Koukousei no Nichijou Specials
Daily Lives of High School Boys Specials
Madang-eul Naon Amtalg
Daisy: A Hen into the Wild
Naruto SD: Rock Lee no Seishun Full-Power Ninden
Naruto Spin-Off: Rock Lee & His Ninja Pals
Sankarea OVA

Peace Hame!

Tennis no Oujisama: Another Story II - Ano Toki no Bokura Specials
The Prince of Tennis OVA Another Story II Bonus
Nazo no Kanojo X: Nazo no Natsu Matsuri
Mysterious Girlfriend X: A Mysterious Summer Festival
Hakuouki: Reimeiroku
Hakuoki: Demon of the Fleeting Blossom - Dawn of the Shinsengumi
Hakuouki Movie 1: Kyoto Ranbu
Hakuoki ~Demon of the Fleeting Blossom~ Wild Dance of Kyoto
Hakuouki Movie 2: Shikon Soukyuu
Hakuoki ~Demon of the Fleeting Blossom~ Warrior Spirit of the Blue Sky
Shinsekai yori
From the New World
Wasurenagumo
Li'l Spider Girl
Fate/Zero Remix

Lupin the Third: Mine Fujiko to Iu Onna
Lupin the Third: The Woman Called Fujiko Mine
Kyonyuu Fantasy

Shin Tennis no Oujisama Specials
The Prince of Tennis II Specials
Inazuma Eleven Go: Chrono Stone
Inazuma Eleven Go: Chrono Stones
Shinryaku!! Ika Musume
The Squid Girl OVA
Hunter x Hunter Movie 1: Phantom Rouge
Hunter x Hunter: Phantom Rouge
Jormungand: Perfect Order
Jormungand Season 2: Perfect Order
Tari Tari
Tari Tari
Fuse: Teppou Musume no Torimonochou
Fusé: Memoirs of a Huntress
Chouyaku Hyakuninisshu: Uta Koi.
Utakoi
High School DxD Specials

Rakuen Tsuihou
Expelled from Paradise
Inu x Boku SS: Miketsukami-kun Henka/Switch/Omamagoto
Inu X Boku Secret Service Episode 13
Moyashimon Returns

Sakasama no Patema: Beginning of the Day
Patema Inverted: Beginning of the Day
Hyouka: Motsubeki Mono wa
Hyouka: What Should Be Had
Binbougami ga!
Good Luck Girl!
Natsuyuki Rendezvous
Natsuyuki Rendezvous
Persona 4 the Animation: No One is Alone

Robotics;Notes
Robotics;Notes
Psycho-Pass
Psycho-Pass
Furiko
Pendulum
Little Busters!
Little Busters!
To LOVE-Ru Darkness
To LOVE Ru Darkness
Naruto: Shippuuden Movie 6 - Road to Ninja
Naruto Shippuden the Movie 6: Road to Ninja
Afro Samurai Movie
Afro Samurai the Movie
Sakura-sou no Pet na Kanojo
The Pet Girl of Sakurasou
Junjou Romantica OVA

Meitantei Conan Bonus File: Fantasista no Hana
Detective Conan Bonus File: Fantasista Flower
Meitantei Conan OVA 12: Excalibur no Kiseki
Detective Conan OVA 12: The Miracle of Excalibur
To LOVE-Ru Darkness OVA

Bishoujo Senshi Sailor Moon: Sailor Stars - Hero Club

Accel World EX

Boku wa Tomodachi ga Sukunai: Relay Shousetsu wa Ketsumatsu ga Hanpanai
Haganai: A Round-Robin Story's Ending Is Way Extreme
Zetsuen no Tempest
Blast of Tempest
Pokemon Black and White 2: Introduction Movie
Pokémon Black and White 2: Introduction Movie
Girls & Panzer
Girls und Panzer
Hanasaku Iroha Movie: Home Sweet Home
Hanasaku Iroha the Movie: Home Sweet Home
Tasogare Otome x Amnesia: Taima Otome
Dusk Maiden of Amnesia: Ghost Girl
Tonari no Kaibutsu-kun
My Little Monster
Persona 4 the Animation: The Factor of Hope
Persona 4 the Animation: The Factor of Hope
Suki tte Ii na yo.
Say "I Love You."
Btooom!
BTOOOM!
Little Witch Academia

Death Billiards
Death Billiards
Chihayafuru 2

Persona 3 the Movie 1: Spring of Birth
Persona 3 the Movie: #1 Spring of Birth
K
K
Minami-ke Tadaima

Magi: The Labyrinth of Magic
Magi: The Labyrinth of Magic
Medaka Box Abnormal
Medaka Box Abnormal
Minami-ke Omatase

Stranger: Mukou Hadan Pilot
Sword of the Stranger Pilot
Hiiro no Kakera 2nd Season
Hiiro no Kakera: The Tamayori Princess Saga Season 2
Hayate no Gotoku! Can't Take My Eyes Off You
Hayate the Combat Butler: Can't Take My Eyes Off You
Aura: Maryuuin Kouga Saigo no Tatakai
Aura: Koga Maryuin's Last War
Kamisama Hajimemashita
Kamisama Kiss
JoJo no Kimyou na Bouken (TV)
JoJo's Bizarre Adventure (2012)
Meitantei Conan Movie 17: Zekkai no Private Eye
Detective Conan Movie 17: Private Eye in the Distant Sea
Chuunibyou demo Koi ga Shitai!
Love, Chunibyo & Other Delusions!
Bishoujo Senshi Sailor Moon Crystal
Pretty Guardian Sailor Moon Crystal
Hori-san to Miyamura-kun

Ixion Saga DT

Kara no Kyoukai Movie: Mirai Fukuin
The Garden of Sinners: Future Gospel
GJ-bu
GJ Club
Yahari Ore no Seishun Love Comedy wa Machigatteiru.
My Teen Romantic Comedy SNAFU
Mouretsu Pirates: Abyss of Hyperspace
Bodacious Space Pirates the Movie: Abyss of Hyperspace
Fate/kaleid liner Prisma☆Illya
Fate/Kaleid Liner Prisma Illya
Maoyuu Maou Yuusha
Maoyu
The iDOLM@STER Shiny Festa
THE IDOLM@STER SHINY FESTA
Dragon Ball Z Movie 14: Kami to Kami
Dragon Ball Z: Battle of Gods
AKB0048: Next Stage
AKB0048: Next Stage
Wonderful Rush

Boku wa Tomodachi ga Sukunai Next
Haganai: I don't have many friends NEXT
Harem Time The Animation

Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. Movie
Anohana: The Flower We Saw That Day The Movie
Love Live! School Idol Project
Love Live! School Idol Project
Initial D Fifth Stage

Aikatsu!

Tabisuru Nuigurumi: Traveling Daru

Tropical Kiss

Cuticle Tantei Inaba
Cuticle Detective Inaba
Kami nomi zo Shiru Sekai: Tenri-hen
The World God Only Knows: Tenri Arc
Hetalia: The Beautiful World
Hetalia: The Beautiful World
Code Geass: Boukoku no Akito 2 - Hikisakareshi Yokuryuu
Code Geass: Akito the Exiled - The Wyvern Divided
Code Geass: Boukoku no Akito 3 - Kagayaku Mono Ten yori Otsu
Code Geass: Akito the Exiled - The Brightness Falls
Code Geass: Boukoku no Akito 4 - Nikushimi no Kioku kara
Code Geass: Akito the Exiled - Memories of Hatred
Hentai Ouji to Warawanai Neko.
The "Hentai" Prince and the Stony Cat.
Kono Sekai no Katasumi ni
In This Corner of the World
Smile Precure! Movie: Ehon no Naka wa Minna Chiguhagu!

Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?
Problem Children Are Coming from Another World, Aren't They?
One Piece: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna
One Piece: Episode of Nami - Tears of a Navigator and the Bonds of Friends
Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare
Gintama: The Movie: The Final Chapter: Be Forever Yorozuya
Kyousou Giga (2012)

Kotoura-san
The Troubled Life of Miss Kotoura
Gintama': Enchousen
Gintama: Enchousen
Kore wa Zombie desu ka? of the Dead: Hai, Minotake ni Attemasu
Is This a Zombie? Of the Dead OVA
Kono Danshi, Ningyo Hiroimashita.
This Boy Caught A Merman
High School DxD New
High School DxD New
Kuroko no Basket NG-shuu
Kuroko's Basketball Specials
Tsugou no Yoi Sexfriend?

Date A Live
Date A Live
Joshiraku OVA

Cardfight!! Vanguard: Link Joker-hen
Cardfight!! Vanguard Link Joker
Hakkenden: Touhou Hakken Ibun
Hakkenden -Eight Dogs of the East-
Jinrui wa Suitai Shimashita Specials
Humanity Has Declined Specials
Puchimas!: Petit iDOLM@STER
PUCHIM@S
Phi Brain: Kami no Puzzle - Shukuteki! Rätsel-hen
Phi Brain: Puzzle of God 3
Chuunibyou demo Koi ga Shitai! Lite
Love, Chunibyo & Other Delusions!: Chuni-Shorts
Nekomonogatari: Kuro
Nekomonogatari Black
Haiyore! Nyaruko-san W
Nyaruko: Crawling With Love! Second Season
Bakuman. Deraman.

Tamayura: More Aggressive

Jormungand: Perfect Order Recap

Senyuu.

Saint☆Oniisan (Movie)
Saint☆Young Men (Movie)
Saint☆Oniisan
Saint☆Young Men
Senki Zesshou Symphogear G
Symphogear G
Hataraku Maou-sama!
The Devil is a Part-Timer!
Girls & Panzer Specials
Girls und Panzer OVA
Majokko Shimai no Yoyo to Nene
Magical Sisters Yoyo & Nene
Kindaichi Shounen no Jikenbo: Kuromajutsu Satsujin Jiken-hen

Tsun Tsun Maid wa Ero Ero desu

Koiito Kinenbi The Animation

Ginga Kikoutai Majestic Prince
Majestic Prince
Qin Shi Mingyue: Wanli Changcheng
Qin's Moon: The Great Wall
Yuyushiki
Yuyushiki
Doraemon Movie 33: Nobita no Himitsu Dougu Museum

Carnival Phantasm: HibiChika Special

Nurarihyon no Mago OVA

Seitokai no Ichizon Lv.2: Watasu Seitokai
Student Council's Discretion Level 2 OVA
Saki Achiga-hen: Episode of Side-A Specials
Saki - Episode of Side A Specials
Kokoro Connect: Michi Random
Kokoro Connect OVA
Zettai Karen Children: The Unlimited - Hyoubu Kyousuke
Unlimited Psychic Squad
Kamisama no Inai Nichiyoubi
Sunday Without God
Tokyo Ravens
Tokyo Ravens
Karneval

Karneval (TV)
Karneval
Toaru Kagaku no Railgun S
A Certain Scientific Railgun S
Ro-Kyu-Bu! SS

Nagi no Asu kara
A Lull in the Sea
Saki: Zenkoku-hen
Saki: The Nationals
One Piece: Kinkyuu Kikaku One Piece Kanzen Kouryakuhou
One Piece: Emergency Planning, A Perfect Strategy for the One Piece
Aku no Hana
Flowers of Evil
One Piece: Episode of Luffy - Hand Island no Bouken
One Piece: Episode of Luffy - Adventure on Hand Island
Yondemasu yo, Azazel-san. Z
You're Being Summoned, Azazel Z
Acchi Kocchi: Place=Princess

Love Lab
Love Lab
SKET Dance: Imouto no Nayami ni Nayamu Ani ni Nayamu Imouto to Sono Nakama-tachi

Tamako Market
Tamako Market
Penguin's Memory: Shiawase Monogatari

Precure All Stars Movie New Stage 2: Kokoro no Tomodachi

Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?: Onsen Manyuuki
Problem Children Are Coming from Another World, Aren't They? OVA
One Piece: Glorious Island

Sei Yariman Gakuen Enkou Nikki The Animation

Soushisouai Note The Animation

Shingeki no Kyojin
Attack on Titan
Suisei no Gargantia
Gargantia on the Verdurous Planet
Hal
Hal
Danganronpa: Kibou no Gakuen to Zetsubou no Koukousei The Animation
Danganronpa: The Animation
Kaze Tachinu
The Wind Rises
Kaguya-hime no Monogatari
The Tale of the Princess Kaguya
Kakumeiki Valvrave
Valvrave the Liberator
Sankarea: Wagahai mo... Zombie de Aru...
Sankarea: I, Too, Am... A Zombie...
Higurashi no Naku Koro ni Kaku: Outbreak
Higurashi: When They Cry - Outbreak
Kami nomi zo Shiru Sekai: Megami-hen
The World God Only Knows: Goddesses
Kiniro Mosaic
KINMOZA!
Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!
WataMote: No Matter How I Look At It, It's You Guys' Fault I'm Not Popular!
Mirai Nikki: Redial
The Future Diary: Redial
Inferno Cop

Kotonoha no Niwa
The Garden of Words
Tonari no Kaibutsu-kun: Tonari no Gokudou-kun
My Little Monster OVA
Suki tte Ii na yo. Dareka ga
Say "I Love You." OVA
The Last: Naruto the Movie
Naruto Shippuden the Movie 7: The Last
Makai Ouji: Devils and Realist
Devils and Realist
Kuroko no Basket 2nd Season
Kuroko's Basketball 2
K: Missing Kings
K: Missing Kings
Kuroko no Basket: Tip Off
Kuroko's Basketball: Tip Off
Gin no Saji
Silver Spoon
Chuunibyou demo Koi ga Shitai! Kirameki no... Slapstick Noel
Love, Chunibyo & Other Delusions!: Sparkling... Slapstick Noel
Hayate no Gotoku! Cuties
Hayate the Combat Butler! Cuties
Monogatari Series: Second Season
Monogatari Series: Second Season
Soukyuu no Fafner: Dead Aggressor - Exodus
Fafner Exodus
Crayon Shin-chan Movie 21: Bakauma! B-Kyuu Gourmet Survival Battle!!

Dareka no Manazashi
Someone's Gaze
Saiyuuki Gaiden: Kouga no Shou

Koukaku Kidoutai Arise: Ghost in the Shell - Border:1 Ghost Pain
Ghost in the Shell: Arise - Border 1: Ghost Pain
Machine-Doll wa Kizutsukanai
Unbreakable Machine-Doll
Pretty Rhythm: Rainbow Live

Kuroko no Basket: Oshaberi Shiyokka
Kuroko's Basketball Special
Log Horizon
Log Horizon
Captain Herlock
Space Pirate Captain Harlock
Hetalia: The Beautiful World Specials

Kingdom 2nd Season
Kingdom: Season 2
Senyuu. Specials

The iDOLM@STER Movie: Kagayaki no Mukougawa e!
THE IDOLM@STER MOVIE: BEYOND THE BRILLIANT FUTURE!
Mushibugyou
Mushibugyo
Fairy Tail Movie 1: Houou no Miko - Hajimari no Asa
Fairy Tail the Movie: The Phoenix Priestess - The First Morning
Non Non Biyori
Non Non Biyori
Date A Live: Date to Date

Little Busters! Sekai no Saitou wa Ore ga Mamoru!
Little Busters!: I Will Protect the World of Saitou!
Toriko Movie: Bishokushin no Special Menu
Toriko the Movie: Secret Recipe of Gourmet God!
Kidou Senshi Gundam: Dai 08 MS Shoutai - Sanjigen to no Tatakai
Mobile Suit Gundam: The 08th MS Team - A Battle with the Third Dimension
Grisaia no Kajitsu
The Fruit of Grisaia
Hidamari Sketch: Sae Hiro Sotsugyou-hen
Hidamari Sketch: Sae & Hiro Graduation
Kyoto Animation: Suiei-hen
Swimming
Papa no Iukoto wo Kikinasai! OVA

Golden Time
Golden Time
All Alone With You

Uchouten Kazoku
The Eccentric Family
Danball Senki Wars

Mahou Shoujo Lyrical Nanoha: Reflection
Magical Girl Lyrical Nanoha Reflection
The Everlasting Guilty Crown

Rozen Maiden (2013)
Rozen Maiden: Zurückspulen
Hakkenden: Touhou Hakken Ibun 2nd Season
Hakkenden -Eight Dogs of the East- Season 2
Magi: The Kingdom of Magic
Magi: The Kingdom of Magic
Servant x Service
Servant x Service
Tonari no Seki-kun
Tonari no Seki-kun: The Master of Killing Time
Kyoukai no Kanata
Beyond the Boundary
Yowamushi Pedal: Special Ride

Yowamushi Pedal
Yowamushi Pedal
Little Busters! Refrain
Little Busters! ~Refrain~
Gatchaman Crowds
Gatchaman Crowds
White Album 2
White Album 2
Strike the Blood
Strike the Blood
Kakumeiki Valvrave 2nd Season
Valvrave the Liberator 2nd Season
Girls & Panzer: Fushou Akiyama Yukari no Sensha Kouza

Fairy Tail x Rave

Shingeki no Kyojin OVA
Attack on Titan OAD
Gingitsune
Gingitsune: Messenger Fox of the Gods
Lupin III vs. Meitantei Conan: The Movie
Lupin III vs. Detective Conan: The Movie
Blood Lad: Wagahai wa Neko de wa Nai
Blood Lad OVA
Genshiken Nidaime
Genshiken Second Season
Yozakura Quartet: Hana no Uta

Yozakura Quartet: Tsuki ni Naku

Free!
Free! - Iwatobi Swim Club
Senyuu. 2

Girls & Panzer Movie
Girls und Panzer der Film
Girls & Panzer: Kore ga Hontou no Anzio-sen desu!
Girls und Panzer: This is the Real Anzio Battle!
Koikishi Purely☆Kiss The Animation

Kamisama Hajimemashita OVA
Kamisama Kiss OVA
Chuunibyou demo Koi ga Shitai! Ren
Love, Chunibyo & Other Delusions!: Heart Throb
Kill la Kill
Kill la Kill
Diamond no Ace
Ace of Diamond
Joshikousei no Koshitsuki
High School Girls' Waists
Tenioha!: Onnanoko datte Honto wa Ecchi da yo?

Haiyore! Nyaruko-san: Yasashii Teki no Shitome-kata

Chihayafuru 2: Waga Miyo ni Furu Nagame Shima ni
Chihayafuru 2 OVA
Yahari Ore no Seishun Love Comedy wa Machigatteiru. OVA
My Teen Romantic Comedy SNAFU OVA
Hakuouki: Reimeiroku OVA

Natsume Yuujinchou: Nyanko-sensei to Hajimete no Otsukai
Natsume’s Book of Friends: Nyanko-Sensei and the First Errand
Aoki Hagane no Arpeggio: Ars Nova
Arpeggio of Blue Steel -Ars Nova-
Nisekoi
Nisekoi: False Love
Takanashi Rikka Kai: Chuunibyou demo Koi ga Shitai! Movie
Love, Chunibyo & Other Delusions!: Rikka Version
Wake Up, Girls!
Wake Up, Girls!
Imouto Paradise! 2

Love Live! School Idol Project 2nd Season
Love Live! School Idol Project 2
Giovanni no Shima
Giovanni's Island
Toaru Hikuushi e no Koiuta
The Pilot's Love Song
One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari
One Piece: Episode of Merry - The Tale of One More Friend
Genshiken Nidaime OVA

Date A Live II
Date A Live II
Koukaku Kidoutai Arise: Ghost in the Shell - Border:2 Ghost Whispers
Ghost in the Shell: Arise - Border 2: Ghost Whispers
Koukaku Kidoutai Arise: Ghost in the Shell - Border:3 Ghost Tears
Ghost in the Shell: Arise - Border 3: Ghost Tears
Koukaku Kidoutai Arise: Ghost in the Shell - Border:4 Ghost Stands Alone
Ghost in the Shell: Arise - Border 4: Ghost Stands Alone
Suisei no Gargantia Specials
Gargantia on the Verdurous Planet Specials
Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru
My Mental Choices Are Completely Interfering With My School Romantic Comedy
Uta no☆Prince-sama♪ Maji Love 2000%: Shining Star Xmas

Shingeki no Kyojin: Ano Hi Kara
Attack on Titan: Since That Day
Pokemon XY
Pokémon the Series: XY
Gundam Build Fighters
Gundam Build Fighters
Gin no Saji 2nd Season
Silver Spoon 2nd Season
Outbreak Company
Outbreak Company
Yami Shibai
Theatre of Darkness: Yamishibai
Saiki Kusuo no Ψ-nan (ONA)

Little Witch Academia: Mahoujikake no Parade
Little Witch Academia: The Enchanted Parade
Naruto: Shippuuden - Sunny Side Battle
Naruto Shippuden: Sunny Side Battle
New Initial D Movie: Legend 1 - Kakusei
Initial D Legend 1 Awakening
Jewelpet Twinkle☆: Hohoemi no Niji ni Dokki☆Doki!

Tayu Tayu

Doraemon Movie 34: Shin Nobita no Daimakyou - Peko to 5-nin no Tankentai
Doraemon the Movie: Nobita in the New Haunts of Evil -Peko and the Five Explorers-
Hajime no Ippo: Rising
Fighting Spirit: Rising
Neppuu Kairiku Bushi Road

Kuroko no Basket: Baka ja Katenai no yo!
Kuroko's Basketball OVA
Free!: FrFr - Short Movie

Toaru Kagaku no Railgun S: Motto Marutto Railgun
A Certain Scientific Railgun S Specials
Kyousou Giga (TV)
Kyousougiga
Ansatsu Kyoushitsu: Jump Festa 2013 Special
Assassination Classroom: Jump Festa 2013 Special
Sidonia no Kishi
Knights of Sidonia
No Game No Life
No Game, No Life
Hunter x Hunter Movie 2: The Last Mission
Hunter x Hunter: The Last Mission
D-Frag!
D-Frag!
Toaru Majutsu no Index-tan Movie: Endymion no Kiseki - Ga Attari Nakattari
A Certain Magical Index Movie Special
Space☆Dandy
Space Dandy
Pokemon: The Origin
Pokémon: Origins
Minami-ke Natsuyasumi

Yamada-kun to 7-nin no Majo PV

Sekaiichi Hatsukoi Movie: Yokozawa Takafumi no Baai

Dorei Usagi to Anthony The Animation

Hoozuki no Reitetsu
Hozuki's Coolheadedness
Inari, Konkon, Koi Iroha.
Inari Kon Kon
Choujigen Game Neptune The Animation: Yakusoku no Eien - True End
Hyperdimension Neptunia: The Eternity (True Ending) Promised
Noragami
Noragami
Fate/kaleid liner Prisma☆Illya 2wei!
Fate/Kaleid Liner Prisma Illya 2Wei!
Little Busters! EX
Little Busters! EX
Mikakunin de Shinkoukei
Engaged to the Unidentified
Haikyuu!!
Haikyu!!
Kimi no Iru Machi OVA
A Town Where You Live OVA
Natsume Yuujinchou: Itsuka Yuki no Hi ni
Natsume’s Book of Friends: On a Certain Snowy Day
Shashinkan
The Portrait Studio
Hamatora The Animation
Hamatora The Animation
Sabage-bu!
Sabagebu! -Survival Game Club!-
Noragami OVA
Noragami OVA
Mahouka Koukou no Rettousei
The Irregular at Magic High School
Black Bullet
Black Bullet
Koakuma Kanojo The Animation

Sekaiichi Hatsukoi: Valentine-hen

Seitokai Yakuindomo*

Hitsugi no Chaika
Chaika -The Coffin Princess-
Music S.T.A.R.T!!

JoJo no Kimyou na Bouken Part 3: Stardust Crusaders
JoJo's Bizarre Adventure: Stardust Crusaders
Harmonie

Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru OVA
My Mental Choices Are Completely Interfering With My School Romantic Comedy OVA
Sekai Seifuku: Bouryaku no Zvezda
World Conquest Zvezda Plot
Tonari no Seki-kun OVA

Precure All Stars Movie New Stage 3: Eien no Tomodachi

Gatchaman Crowds Insight

Amanee!: Tomodachinchi de Konna Koto ni Naru Nante!
MILF Assault Mode
Puchimas!!: Petit Petit iDOLM@STER
PUCHIM@S 2
Hetalia: The Beautiful World Extra Disc

Witch Craft Works
Witch Craft Works
Oni Chichi: Rebuild

Love Stage!!
Love Stage!!
Baby Steps

Wake Up, Girls! Shichinin no Idol
Wake Up, Girls! The Movie
Gochuumon wa Usagi desu ka?
Is the Order a Rabbit?
Isshuukan Friends.
One Week Friends
Mushishi: Hihamukage
Mushi-shi: The Shadow that Devours the Sun
Psycho-Pass Movie
Psycho-Pass: The Movie
Crayon Shin-chan Movie 22: Gachinko! Gyakushuu no Robo To-chan
Crayon Shin-chan: Serious Battle! Robot Dad Strikes Back
Bokura wa Minna Kawai-sou
The Kawai Complex Guide to Manors and Hostel Behavior
Meitantei Conan Movie 18: Ijigen no Sniper
Detective Conan Movie 18: The Sniper from Another Dimension
Yama no Susume Second Season
Encouragement of Climb Season 2
Buddy Complex
Buddy Complex
Uta no☆Prince-sama♪ Maji Love Revolutions
Uta no Prince Sama Revolutions
Stand By Me Doraemon

Persona 3 the Movie 2: Midsummer Knight's Dream
Persona 3 the Movie: #2 Midsummer Knight's Dream
Futa-bu!

Omoide no Marnie
When Marnie Was There
Ryuugajou Nanana no Maizoukin
Nanana's Buried Treasure
Kamigami no Asobi
Kamigami no Asobi
Senki Zesshou Symphogear GX
Symphogear GX
Mekakucity Actors
Mekakucity Actors
GJ-bu@

Tamako Love Story

Kill la Kill Specials
Kill la Kill Specials
Non Non Biyori: Okinawa e Ikukoto ni Natta
Non Non Biyori: We're Going to Okinawa
Hanayamata
Hanayamata
Tamayura: More Aggressive - Ichinichi dake no Shuugakuryokou, nanode

Donten ni Warau
Laughing Under the Clouds
Okusama wa Moto Yariman

Shin Tennis no Oujisama vs. Genius 10
The Prince of Tennis II vs Genius10
Chuunibyou demo Koi ga Shitai! Ren Lite
Love, Chunibyo & Other Delusions!: Heart Throb Lite Shorts
Fella Pure: Mitarashi-san Chi no Jijou The Animation

Shingeki no Bahamut: Genesis
Rage of Bahamut: Genesis
Tesagure! Bukatsumono Encore

Hanamonogatari
Hanamonogatari
Mangaka-san to Assistant-san to The Animation
The Comic Artist and His Assistants
Edogawa Conan Shissou Jiken: Shijou Saiaku no Futsukakan
The Disappearance of Conan Edogawa: The Worst Two Days in History
High Score Girl
Hi Score Girl
Gintama: Yorinuki Gintama-san on Theater 2D

Chichiiro Toiki

Mushishi Zoku Shou
Mushi-shi: Next Passage Part 1
Ao Haru Ride
Blue Spring Ride
Fairy Tail (2014)
Fairy Tail Series 2
Swing Out Sisters (2014)

Mikakunin de Shinkoukei: Mite. Are ga Watashitachi no Tomatteiru Ryokan yo.
Engaged to the Unidentified Special
Magi: Sinbad no Bouken

Soredemo Sekai wa Utsukushii
The World is Still Beautiful
Kuroko no Basket: Mou Ikkai Yarimasen ka
Kuroko’s Basketball: Would You Mind Doing That Once More
Ping Pong the Animation
Ping Pong the Animation
Kuroshitsuji: Book of Circus
Black Butler: Book of Circus
Amagi Brilliant Park
Amagi Brilliant Park
Akame ga Kill!
Akame ga Kill!
Free! Eternal Summer

Selector Infected WIXOSS
selector infected WIXOSS
Fate/stay night: Unlimited Blade Works
Fate/stay night [Unlimited Blade Works]
Tokyo Ghoul
Tokyo Ghoul
Sanzoku no Musume Ronja
Ronja the Robber's Daughter
Itadaki! Seieki♥
Vampire Vixen
Break Blade
Broken Blade
Initial D Final Stage

Kiseijuu: Sei no Kakuritsu
Parasyte: The Maxim
Uchuu Kyoudai: Number Zero
Space Brothers #0
Kuroko no Basket 2nd Season NG-shuu

Terra Formars

Terra Formars: Bugs 2-hen

Lady Jewelpet

Aldnoah.Zero
Aldnoah.Zero
Kara no Kyoukai Movie: Mirai Fukuin - Extra Chorus
The Garden of Sinners: Future Gospel - Extra Chorus
Dragon Ball Kai (2014)
Dragon Ball Z Kai: The Final Chapters
Barakamon
Barakamon
Kindaichi Shounen no Jikenbo Returns
The File of Young Kindaichi Returns
Aikatsu! Movie

Cross Road

Takanashi Rikka Kai: Chuunibyou demo Koi ga Shitai! Movie Lite
Love, Chunibyo & Other Delusions!: Rikka Version Lite
Rokujouma no Shinryakusha!?
Invaders of the Rokujyoma!?
Date A Live II: Kurumi Star Festival

Re Boot

Happiness Charge Precure! Movie: Ningyou no Kuni no Ballerina

PriPara

Hayate no Gotoku! OVA

Durarara!!x2 Shou
Durarara!! x2 Shou
Yuru Yuri Nachuyachumi!

Mikakunin de Shinkoukei: Kamoniku tte Midori-ppoi Aji ga Suru no ne.
Engaged to the Unidentified OVA
Chuunibyou demo Koi ga Shitai! Ren Specials
Love, Chunibyo & Other Delusions!: Heart Throb Specials
Uchuu Senkan Yamato 2199: Hoshimeguru Hakobune
Space Battleship Yamato 2199: Odyssey of the Celestial Ark
Gugure! Kokkuri-san

Hello!! Kiniro Mosaic
Hello!! KINMOZA!
Shigatsu wa Kimi no Uso
Your Lie in April
Saenai Heroine no Sodatekata
Saekano: How to Raise a Boring Girlfriend
Gyakusatsu Kikan
Genocidal Organ
Psycho-Pass 2
Psycho-Pass 2
Zankyou no Terror
Terror in Resonance
Paulette no Isu
Paulette's Chair
Gekkan Shoujo Nozaki-kun
Monthly Girls' Nozaki-kun
Lupin the IIIrd: Jigen Daisuke no Bohyou
Lupin the Third: Jigen's Gravestone
Pokemon XY: Mega Evolution
Pokémon: Mega Evolution Special
Garo: Honoo no Kokuin
GARO: THE ANIMATION
Kuroshitsuji: Book of Murder
Black Butler: Book of Murder
Suisei no Gargantia: Meguru Kouro, Haruka
Gargantia on the Verdurous Planet: Far Beyond the Voyage
Log Horizon 2nd Season
Log Horizon 2
Space☆Dandy 2nd Season
Space Dandy 2nd Season
Code Geass: Boukoku no Akito 2 - Hikisakareshi Yokuryuu Picture Drama
Code Geass: Akito the Exiled - The Wyvern Divided Picture Drama
D-Frag!*

Kyoukai no Kanata: Shinonome
Beyond the Boundary: Daybreak
Re:␣Hamatora
Re: Hamatora: Season 2
Love Stage!!: Chotto ja Nakutte

Ano Natsu de Matteru: Bokutachi wa Koukou Saigo no Natsu wo Sugoshinagara, Ano Natsu de Matteiru.
Waiting in the Summer: In Our Last Summer of High School, We Await That Summer
Itadaki! Seieki♥ Special
Vampire Vixen Special
The iDOLM@STER Cinderella Girls
THE IDOLM@STER CINDERELLA GIRLS
Haiyore! Nyaruko-san W: W ni Sayonara/Kono Onsen ni Koi no Konton wo

Non Non Biyori Repeat
Non Non Biyori Repeat
Ookami Shoujo to Kuro Ouji
Wolf Girl & Black Prince
Toradora! Recap

Gatchaman Crowds: Embrace

Strike Witches: Operation Victory Arrow

Nanatsu no Taizai
The Seven Deadly Sins
Shingeki no Kyojin Movie 1: Guren no Yumiya
Attack on Titan: Crimson Bow and Arrow
Shingeki no Kyojin Movie 2: Jiyuu no Tsubasa
Attack on Titan: Wings of Freedom
Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku
My Teen Romantic Comedy SNAFU TOO!
Sarusuberi: Miss Hokusai
Miss Hokusai
Shijou Saikyou no Deshi Kenichi Specials

Denki-gai no Honya-san
Denki-gai
Selector Spread WIXOSS
selector spread WIXOSS
Nobunaga Concerto

Ao Haru Ride OVA
Blue Spring Ride OVA
Meitantei Conan: Toubousha Mouri Kogorou
Detective Conan: The Fugitive Kogorou Mouri
Mushibugyou OVA

Nisekoi OVA

Hitsugi no Chaika: Avenging Battle
Chaika -The Coffin Princess- Avenging Battle
Hitsugi no Chaika: Nerawareta Hitsugi/Yomigaeru Iseki

Yowamushi Pedal: Grande Road

Inazuma Eleven: Chou Jigen Dream Match

Tonari no Seki-kun Specials

World Trigger
World Trigger
Kuroko no Basket 3rd Season
Kuroko's Basketball 3
Daze

Kekkai Sensen
Blood Blockade Battlefront
Madan no Ou to Vanadis
Lord Marksman and Vanadis
Tales of Zestiria: Doushi no Yoake
Tales of Zestiria: Dawn of the Shepherd
Buddy Complex: Kanketsu-hen - Ano Sora ni Kaeru Mirai de

Hoozuki no Reitetsu OVA

Mangaka-san to Assistant-san to The Animation Specials
The Comic Artist and His Assistants Specials
Persona 3 the Movie 3: Falling Down
Persona 3 the Movie: #3 Falling Down
Youkai Watch Movie 1: Tanjou no Himitsu da Nyan!
Yo-kai Watch the Movie: It's the Secret of Birth, Meow!
Gundam Build Fighters Try
Gundam Build Fighters Try
Yamada-kun to 7-nin no Majo: Mou Hitotsu no Suzaku-sai
Yamada-kun and the Seven Witches OVA
Baku Ane: Otouto Shibocchau zo! The Animation
Bombastic Sisters
Date A Live Movie: Mayuri Judgment
Date A Live Movie: Mayuri Judgement
Mushishi Zoku Shou: Odoro no Michi
Mushi-shi Path of Thorns
Mushishi Zoku Shou 2nd Season
Mushi-shi: Next Passage Part 2
High School DxD BorN
High School DxD BorN
Baka to Test to Shoukanjuu Ni!: Mahou Hideyoshi Hideyoshi
Baka and Test - Summon the Beasts: Magical Hideyoshi Hideyoshi
Gakkougurashi!
School-Live!
Imawa no Kuni no Alice
Alice in Borderland
Ansatsu Kyoushitsu
Assassination Classroom
Sidonia no Kishi: Daikyuu Wakusei Seneki
Knights of Sidonia: Battle for Planet Nine
Kaitou Joker
JOKER
Bokura wa Minna Kawai-sou: Hajimete no
The Kawai Complex Guide to Manors and Hostel Behavior OVA: First Time
Aoki Hagane no Arpeggio: Ars Nova Movie 1 - DC

Aoki Hagane no Arpeggio: Ars Nova Movie 2 - Cadenza

Bokura wa Minna Kawai-sou Specials

Love Live! The School Idol Movie
Love Live! The School Idol Movie
Akatsuki no Yona
Yona of the Dawn
Kyoukai no Kanata Movie 1: I'll Be Here - Kako-hen
Beyond the Boundary: I'll Be Here - Past
Trinity Seven
Trinity Seven
Inou-Battle wa Nichijou-kei no Naka de
When Supernatural Battles Became Commonplace
One Piece 3D2Y: Ace no shi wo Koete! Luffy Nakama Tono Chikai
One Piece 3D2Y: Overcoming Ace's Death! Luffy's Pledge to His Friends
Gangsta.
Gangsta.
Haikyuu!! Lev Genzan!
Haikyu!!: Lev Appears!
Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite Neru ni Nerenai Toki mo Aru

Diamond no Ace OVA
Ace of Diamond OVA
Rance 01: Hikari wo Motomete The Animation

Doraemon Movie 35: Nobita no Space Heroes

Dragon Ball Z Movie 15: Fukkatsu no "F"
Dragon Ball Z: Resurrection 'F'
Magic Kaito 1412

Yuuki Yuuna wa Yuusha de Aru
Yuki Yuna is a Hero
Fate/stay night Movie: Heaven's Feel - I. Presage Flower
Fate/stay night: Heaven's Feel - I. Presage Flower
Sabage-bu! Specials

Junjou Romantica 3
Junjo Romantica 3
Boy Meets Harem The Animation

Kamisama Hajimemashita◎
Kamisama Kiss Season 2
Digimon Adventure tri. 1: Saikai
Digimon Adventure tri. Reunion
Tamayura: Sotsugyou Shashin Part 1 - Kizashi

Cross Ange: Tenshi to Ryuu no Rondo
Cross Ange: Rondo of Angel and Dragon
Yowamushi Pedal: Re:Ride
Yowapeda Re:RIDE
Shingeki no Kyojin Season 2
Attack on Titan Season 2
Shingeki no Kyojin: Kuinaki Sentaku
Attack on Titan: No Regrets
Shouwa Genroku Rakugo Shinjuu: Yotarou Hourou-hen

Shirobako
Shirobako
Working!!!
Wagnaria!!3
Haiyore! Nyaruko-san F

JoJo no Kimyou na Bouken Part 3: Stardust Crusaders - Egypt-hen
JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt
Seitokai Yakuindomo* OVA

Yuri Kuma Arashi
Yurikuma Arashi
Free! Eternal Summer: Kindan no All Hard!

Owari no Seraph
Seraph of the End: Vampire Reign
Danna ga Nani wo Itteiru ka Wakaranai Ken
I Can't Understand What My Husband Is Saying
Junketsu no Maria
Maria the Virgin Witch
Koukaku Kidoutai: Shin Movie
Ghost in the Shell: The New Movie
Show By Rock!!

Fate/kaleid liner Prisma☆Illya 2wei Herz!
Fate/Kaleid Liner Prisma Illya 2Wei Herz!
Pikmin Short Movies

Fushigi Yuugi Special: Nakago Shikkari Shinasai!
Fushigi Yuugi Special: Watase Yuu Selection
Chuunibyou demo Koi ga Shitai! Ren: The Rikka Wars
Love, Chunibyo & Other Delusions!: Heart Throb - The Rikka Wars
God Eater
God Eater
Gekkan Shoujo Nozaki-kun Specials
Monthly Girls' Nozaki-kun Specials
Crayon Shin-chan Movie 23: Ora no Hikkoshi Monogatari - Saboten Daisuugeki
Crayon Shin-chan: My Moving Story - The Great Cactus Attack!
Baby Steps 2nd Season

Plastic Memories
Plastic Memories
Nisekoi:
Nisekoi: False Love Season 2
Fate/stay night: Unlimited Blade Works Prologue
Fate/stay night [Unlimited Blade Works] - Prologue
Long Zhi Gu: Poxiao Qibing
Dragon Nest: Warriors' Dawn
Heavy Object
Heavy Object
Durarara!!x2 Ten
Durarara!! x2 Ten
Durarara!!x2 Ketsu
Durarara!! x2 Ketsu
Tokyo Ghoul √A
Tokyo Ghoul √A
Gugure! Kokkuri-san Specials

Lupin III (2015)
Lupin the Third Part 4
Steins;Gate: Soumei Eichi no Cognitive Computing
Steins;Gate: The Sagacious Wisdom of Cognitive Computing
Hana to Alice: Satsujin Jiken
The Case of Hana & Alice
Hibike! Euphonium
Sound! Euphonium
K: Return of Kings
K: Return of Kings
Macross Δ
Macross Delta
Tsukimonogatari
Tsukimonogatari
Shigatsu wa Kimi no Uso: Moments
Your Lie in April: Moments
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka
Is It Wrong to Try to Pick Up Girls in a Dungeon?
Nihon Animator Mihonichi
Japan Anima(tor)'s Exhibition
Sei Brunehilde Gakuen Shoujo Kishidan to Junpaku no Panty The Animation

Shokugeki no Souma
Food Wars! Shokugeki no Soma
Saint Seiya: Soul of Gold

Death Parade
Death Parade
Arslan Senki (TV)
The Heroic Legend of Arslan
Trinity Seven: Nanatsu no Taizai to Nana Madoushi
Trinity Seven OVA
Ore Monogatari!!
My Love Story!!
Ookami Shoujo to Kuro Ouji: Gishinanki – Happening Kiss
Wolf Girl & Black Prince OVA
Joukamachi no Dandelion
Castle Town Dandelion
Ansatsu Kyoushitsu: Deai no Jikan
Assassination Classroom: Meeting Time
Meitantei Conan Movie 19: Gouka no Himawari
Detective Conan Movie 19: The Sunflowers of Inferno
Sidonia no Kishi Movie
Knights of Sidonia: The Movie
Rokka no Yuusha
Rokka: Braves of the Six Flowers
Garo Movie: Divine Flame

Hetalia: The World Twinkle
Hetalia: The World Twinkle
Subete ga F ni Naru
The Perfect Insider
Koutetsujou no Kabaneri
Kabaneri of the Iron Fortress
Go! Princess Precure
Go! Princess Pretty Cure
Kyoukai no Kanata Movie 2: I'll Be Here - Mirai-hen
Beyond the Boundary: I'll Be Here - Future
Yamada-kun to 7-nin no Majo
Yamada-kun and the Seven Witches
One Piece: Episode of Alabasta - Prologue

Fate/stay night: Unlimited Blade Works 2nd Season
Fate/stay night [Unlimited Blade Works] Season 2
Kokoro ga Sakebitagatterunda.
The Anthem of the Heart
Shouwa Genroku Rakugo Shinjuu
Showa Genroku Rakugo Shinju
Boruto: Naruto the Movie
Boruto: Naruto the Movie
Yu☆Gi☆Oh! The Dark Side of Dimensions

Futa-bu!!

3-gatsu no Lion meets Bump of Chicken
March comes in like a lion meets Bump of Chicken
Bakemono no Ko
The Boy and the Beast
Himouto! Umaru-chan
Himouto! Umaru-chan
Wake Up, Girls! Seishun no Kage
Wake Up, Girls! Shadow of Youth
Koe no Katachi
A Silent Voice
Kaitou Joker 2nd Season
JOKER 2nd Season
New Initial D Movie: Legend 2 - Tousou
Initial D Legend 2 Racer
Haikyuu!! Second Season
Haikyu!! 2nd Season
Gate: Jieitai Kanochi nite, Kaku Tatakaeri
GATE
Owari no Seraph: Nagoya Kessen-hen
Seraph of the End: Battle in Nagoya
Mushishi Zoku Shou: Suzu no Shizuku

Idol☆Sister

Gintama°
Gintama Season 4
To LOVE-Ru Darkness 2nd
To LOVE Ru Darkness 2
Charlotte
Charlotte
Danna ga Nani wo Itteiru ka Wakaranai Ken 2 Sure-me
I Can't Understand What My Husband Is Saying: 2nd Thread
Lovely x Cation The Animation

Grisaia no Meikyuu: Caprice no Mayu 0
The Labyrinth of Grisaia: The Cocoon of Caprice 0
Grisaia no Rakuen
The Eden of Grisaia
Sore ga Seiyuu!
Seiyu's Life!
Genkaku Cool na Sensei ga Aheboteochi!

Saenai Heroine no Sodatekata: Ai to Seishun no Service-kai
Saekano: Fan Service of Love and Youth
Koukaku Kidoutai Arise: Alternative Architecture
Ghost in the Shell: Arise - Alternative Architecture
Meitantei Conan: Kinga Shinnen Mouri Kogorou
Detective Conan: Happy New Year Special
Mankitsu Happening

Kuroko no Basket: Oshaberi Demo Shimasen ka

Haikyuu!! Movie 1: Owari to Hajimari
Haikyu!! the Movie: The End and the Beginning
Shimoneta to Iu Gainen ga Sonzai Shinai Taikutsu na Sekai
SHIMONETA: A Boring World Where the Concept of Dirty Jokes Doesn't Exist
Gochuumon wa Usagi desu ka??
Is the Order a Rabbit??
Overlord
Overlord
Honoo no Haramase Paidol My★Star Gakuen Z The Animation

Namaiki: Kissuisou e Youkoso! The Animation

Tamayura: Sotsugyou Shashin Part 2 - Hibiki

Tamayura: Sotsugyou Shashin Part 3 - Akogare

Tamayura: Sotsugyou Shashin Part 4 - Ashita

Ushio to Tora (TV)
Ushio & Tora (2015)
Aria the Avvenire
Aria the Avvenire
Momokuri
momokuri
ReLIFE
ReLIFE
Nanbaka
Nanbaka
Akagami no Shirayuki-hime
Snow White with the Red Hair
Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru
Beautiful Bones -Sakurako's Investigation-
Durarara!!x2 Shou: Watashi no Kokoro wa Nabe Moyou
Durarara!! x2 Shou: My Heart Is in the Pattern of a Hot Pot
Aoharu x Kikanjuu
Aoharu x Machinegun
Amagi Brilliant Park: Nonbirishiteiru Hima ga Nai!
Amagi Brilliant Park: No Time to Take It Easy!
Diamond no Ace: Second Season
Ace of Diamond: Second Season
Prison School
Prison School
Gakuen de Jikan yo Tomare

One Punch Man
One Punch Man
Yuru Yuri San☆Hai!

Rakudai Kishi no Cavalry
Chivalry of a Failed Knight
High School DxD New: Oppai, Tsutsumimasu!
High School DxD New OVA
Kuroko no Basket 3rd Season NG-shuu

Strike the Blood: Valkyria no Oukoku-hen
Strike the Blood: Kingdom of the Valkyria
The iDOLM@STER Cinderella Girls 2nd Season
THE IDOLM@STER CINDERELLA GIRLS 2nd SEASON
Doukyuusei
Doukyusei: Classmates
Nanatsu no Taizai OVA
The Seven Deadly Sins: Ban's Side Story OVA
Haikyuu!! Movie 2: Shousha to Haisha
Haikyuu!! the Movie: The Winner and the Loser
Akatsuki no Yona OVA
Yona of the Dawn OVA
Yowamushi Pedal Movie

High☆Speed! Movie: Free! Starting Days
Free! Starting Days
Wake Up, Girls! Beyond the Bottom

Tokyo Ghoul: "Jack"
Tokyo Ghoul: Jack
Steins;Gate 0
Steins;Gate 0
Noragami Aragoto
Noragami Aragoto
Touhou Niji Sousaku Doujin Anime: Musou Kakyou Special

Soukyuu no Fafner: Dead Aggressor - Exodus Part 2

Ane Yome Quartet

Yankee-kun na Yamada-kun to Megane-chan to Majo

Shin Atashin'chi

Ansatsu Kyoushitsu 2nd Season
Assassination Classroom Second Season
Dragon Ball Super
Dragon Ball Super
Victorian Maid Maria no Houshi

Kamisama Hajimemashita: Kako-hen

Code Geass: Boukoku no Akito 5 - Itoshiki Mono-tachi e
Code Geass: Akito the Exiled - To Beloved Ones
Owaranai Seraph
Seraph of the Endless
Saenai Heroine no Sodatekata ♭
Saekano: How to Raise a Boring Girlfriend .flat
Shingeki no Bahamut: Virgin Soul
Rage of Bahamut: Virgin Soul
Young Black Jack
Young Black Jack
Mudai

Fairy Tail Movie 2: Dragon Cry
Fairy Tail the Movie 2: Dragon Cry
Yowamushi Pedal: Re:Road

Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e PV
Classroom of the Elite PV
Gakkou no Kaidan: Kubinashi Rider!! Shi no Noroi
Ghost Stories: The Headless Horsemen!! Curse of Death
30-pun de Wakaru! Kore made no Love Live!
Love Live! School Idol Project in 30 Minutes
Kono Subarashii Sekai ni Shukufuku wo!
KonoSuba: God's Blessing on This Wonderful World!
Aikatsu! Music Award: Minna de Shou wo MoracchaimaShow!

Ajin Part 1: Shoudou
Ajin: Demi-Human Movie 1: Compel
Ajin Part 2: Shoutotsu
Ajin: Demi-Human Movie 2: Confront
Ajin Part 3: Shougeki
Ajin: Demi-Human Movie 3: Collide
Noragami Aragoto OVA

Tsunpri

Utawarerumono: Itsuwari no Kamen
Utawarerumono: The False Faces
Yuru Yuri Nachuyachumi!+

Eine Kleine

Tales of Zestiria the Cross
Tales of Zestiria the X
Mekakucity Days
Mekakucity Days
Gatchaman Crowds Insight: Inbound

New Initial D Movie: Legend 3 - Mugen
Initial D Legend 3: Dream
Futsuu no Joshikousei ga "Locodol" Yattemita. OVA
Locodol OVA
Himouto! Umaru-chan OVA

Boku dake ga Inai Machi
Erased
Kuroko no Basket: Saikou no Present desu
Kuroko’s Basketball: It is the Best Present
Ushio to Tora (TV) 2nd Season
Ushio & Tora (2016)
Persona 3 the Movie 4: Winter of Rebirth
Persona 3 the Movie: #4 Winter of Rebirth
Hetalia: The World Twinkle Specials

Dimension W
Dimension W
Akagami no Shirayuki-hime 2nd Season
Snow White with the Red Hair 2
Osomatsu-san
Mr. Osomatsu
Uta no☆Prince-sama♪ Maji Love Legend Star
Uta no Prince Sama Legend Star
Owarimonogatari
Owarimonogatari
Doraemon Movie 36: Shin Nobita no Nippon Tanjou
Doraemon the Movie: Nobita and the Birth of Japan 2016
Kindaichi Shounen no Jikenbo Returns 2nd Season
The File of Young Kindaichi Returns 2nd Season
Himouto! Umaru-chanS
Himouto! Umaru-chanS
Re:Zero kara Hajimeru Isekai Seikatsu
Re:ZERO -Starting Life in Another World-
Zutto Mae kara Suki deshita. Kokuhaku Jikkou Iinkai
I've Always Liked You
Kidou Senshi Gundam: Tekketsu no Orphans
Mobile Suit Gundam: Iron-Blooded Orphans
Selector Destructed WIXOSS Movie

One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi
One Piece: Episode of Sabo - Bond of Three Brothers, A Miraculous Reunion and an Inherited Will
Tokyo Ghoul: "Pinto"
Tokyo Ghoul: Pinto
Grisaia no Meikyuu: Caprice no Mayu 0 - Takizono Basketball Club no Nama Cream Party!

High School DxD BorN: Ishibumi Ichiei Kanzen Kanshuu! Mousou Bakuyou Kaijo Original Video
High School DxD BorN Specials
Shokugeki no Souma OVA
Food Wars! OVA
Drifters
Drifters
Grisaia no Rakuen Specials

Tonkatsu DJ Agetarou

Shingeki! Kyojin Chuugakkou
Attack on Titan: Junior High
Flying Witch
Flying Witch
Owari no Seraph: Kyuuketsuki Shahar
Seraph of the End: Vampire Shahar
To LOVE-Ru Darkness 2nd OVA

Fate/stay night: Unlimited Blade Works 2nd Season - Sunny Day
Fate/stay night [Unlimited Blade Works] Season 2: Sunny Day
Joker Game
Joker Game
Nijiiro Days
Rainbow Days
Binan Koukou Chikyuu Bouei-bu LOVE! LOVE!
Cute High Earth Defense Club LOVE! LOVE!
KanColle Movie
KanColle Movie
Ginga Eiyuu Densetsu: Die Neue These - Kaikou
Legend of the Galactic Heroes: Die Neue These
Bungou Stray Dogs
Bungo Stray Dogs
Akagami no Shirayuki-hime: Nandemonai Takaramono, Kono Page
Snow White with the Red Hair OVA
Aikatsu Stars! Movie

Tantei Opera Milky Holmes Movie: Gyakushuu no Milky Holmes
Tantei Opera Milky Holmes the Movie: Milky Holmes' Counterattack
One Piece Film: Gold

Huyao Xiao Hongniang
Fox Spirit Matchmaker
High School Fleet
High School Fleet
Durarara!!x2 Ten: Onoroke Chakapoko
Durarara!!x2 Ten Episode 13.5
Charlotte: Tsuyoimono-tachi
Charlotte: The Strong Ones
Sansha Sanyou
Three Leaves, Three Colors
Ajin
Ajin: Demi-Human
All Out!!
All Out!!
Pokemon XY&Z
Pokémon the Series: XYZ
Kyoukai no Rinne 2nd Season
RIN-NE Season 2
Gate: Jieitai Kanochi nite, Kaku Tatakaeri Part 2
GATE Part 2
Persona 5 the Animation: The Day Breakers
Persona 5 the Animation -THE DAY BREAKERS-
3-gatsu no Lion
March Comes In Like a Lion
Kuroko no Basket Movie 4: Last Game
Kuroko's Basketball the Movie: Last Game
Hibike! Euphonium: Kakedasu Monaka
Sound! Euphonium Episode 14 – Ready, Set, Monaka
Kaitou Joker 3rd Season
JOKER 3rd Season
Long Zhi Gu: Jingling Wangzuo
Dragon Nest: Throne of Elves
One Punch Man: Road to Hero

Fate/kaleid liner Prisma☆Illya 3rei!!
Fate/kaleid liner Prisma Illya 3rei!!
To LOVE-Ru Darkness 2nd Specials
To LOVE Ru Darkness 2 Specials
Working!!! Lord of the Takanashi

Bishoujo Senshi Sailor Moon Crystal Season III
Pretty Guardian Sailor Moon Crystal Season III
Gakusen Toshi Asterisk 2nd Season
The Asterisk War Season 2
Magi: Sinbad no Bouken (TV)
Magi: Adventure of Sinbad
Aoharu x Kikanjuu: Kemono-tachi no Senjou da na!
Aoharu x Machinegun: This is a Battlefield for Beasts!
Owari no Seraph: The Beginning of the End
Seraph of the End: The Beginning of the End
Kizumonogatari II: Nekketsu-hen
Kizumonogatari Part 2: Hot-Blooded
Kizumonogatari III: Reiketsu-hen
Kizumonogatari Part 3: Cold-Blooded
Nejimaki Seirei Senki: Tenkyou no Alderamin
Alderamin on the Sky
Sword Art Online Movie: Ordinal Scale
Sword Art Online the Movie: Ordinal Scale
Amanchu!

One Punch Man Specials
One Punch Man Specials
Kimi no Kokoro wa Kagayaiteru kai?

Yowamushi Pedal: New Generation

Kiznaiver
Kiznaiver
Kuroshitsuji Movie: Book of the Atlantic
Black Butler: Book of the Atlantic
Arslan Senki (TV): Fuujin Ranbu
The Heroic Legend of Arslan: Dust Storm Dance
Hai to Gensou no Grimgar
Grimgar: Ashes and Illusions
Mahoutsukai Precure!
Witchy Pretty Cure!
Owaranai Seraph: Nagoya-hen
Seraph of the Endless: Battle in Nagoya
PriPara Movie: Mi~nna no Akogare♪ Let's Go☆Prix Paris

Full Metal Panic! Invisible Victory
Full Metal Panic! Invisible Victory
JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai
JoJo's Bizarre Adventure: Diamond Is Unbreakable
Kono Bijutsu-bu ni wa Mondai ga Aru!
This Art Club Has a Problem!
New Game!
New Game!
Boku no Hero Academia
My Hero Academia
Kidou Senshi Gundam Thunderbolt
Mobile Suit Gundam Thunderbolt
Crayon Shin-chan Movie 24: Bakusui! Yumemi World Dai Totsugeki
Crayon Shin-chan: Fast Asleep! The Great Assault on the Dreaming World!
Hibike! Euphonium 2
Sound! Euphonium 2
Hibike! Euphonium Movie 1: Kitauji Koukou Suisougaku-bu e Youkoso
Sound! Euphonium the Movie: Welcome to the Kitauji High School Concert Band
Hetalia: The World Twinkle Extra Disc

Meitantei Conan Movie 20: Junkoku no Nightmare
Detective Conan Movie 20: The Darkest Nightmare
Oshiete! Galko-chan
Please tell me! Galko-chan
Ajin OVA

Osomatsu-san Special
Mr. Osomatsu Episode 3.5: Virgin Heroes
MEMORiES MELODiES

Soukyuu no Fafner: Dead Aggressor - Exodus Special

Show By Rock!! #
Show By Rock!! 2
One Piece: Adventure of Nebulandia
One Piece: Adventure of Nebulandia
Kyonyuu Hitozuma Onna Kyoushi Saimin

Gantz:O

Blame! Movie
Blame!: The Movie
Tanaka-kun wa Itsumo Kedaruge
Tanaka-kun is Always Listless
Reikenzan: Hoshikuzu-tachi no Utage

Sousei no Onmyouji
Twin Star Exorcists
Digimon Adventure tri. 2: Ketsui
Digimon Adventure tri. Determination
Gintama°: Umai-mono wa Atomawashi ni Suru to Yokodorisareru kara Yappari Saki ni Kue

Mahou Shoujo Madoka★Magica: Concept Movie
Puella Magi Madoka Magica Concept Movie
Precure All Stars Movie: Minna de Utau♪ - Kiseki no Mahou

The iDOLM@STER Cinderella Girls: Anytime, Anywhere with Cinderella.
THE IDOLM@STER CINDERELLA GIRLS: Anytime, Anywhere with Cinderella.
Shounen Maid
Shonen Maid
Mob Psycho 100
Mob Psycho 100
Steins;Gate: Kyoukaimenjou no Missing Link - Divide By Zero
Steins;Gate: Open the Missing Link - Divide By Zero
Danganronpa 3: The End of Kibougamine Gakuen - Mirai-hen
Danganronpa 3: The End of Hope's Peak High School - Future Arc
High School DxD BorN: Yomigaeranai Fushichou
High School DxD Born OVA
Micchiri Neko March

Kuromukuro
Kuromukuro
Koyomimonogatari
Koyomimonogatari
Kimi no Na wa.
Your Name.
Shokugeki no Souma: Ni no Sara
Food Wars! The Second Plate
Concrete Revolutio: Choujin Gensou - The Last Song
Concrete Revolutio The Last Song
Toshi Densetsu Series

Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi
Boruto: Naruto the Movie - The Day Naruto Became Hokage
Gintama°: Aizome Kaori-hen
Gintama: Love Incense Arc
D.Gray-man Hallow
D.Gray-man HALLOW
Kindaichi Shounen no Jikenbo Returns 2nd Season: Akechi Keibu no Jikenbo

Kono Subarashii Sekai ni Shukufuku wo!: Kono Subarashii Choker ni Shukufuku wo!
KonoSuba: God's Blessing on This Wonderful World! - God's Blessing on This Wonderful Choker!
Pretty x Cation The Animation

Prison School: Mad Wax

Kanojo to Kanojo no Neko: Everything Flows
She and Her Cat: Everything Flows
Days
Days
Love Live! Sunshine!!
Love Live! Sunshine!!
Sakamoto desu ga?
Haven't You Heard? I'm Sakamoto
Non Non Biyori Repeat: Hotaru ga Tanoshinda
Non Non Biyori Repeat: Hotaru Had Fun
Digimon Adventure tri. 3: Kokuhaku
Digimon Adventure tri. Confession
Nisekoi: OVA

Noblesse: Pamyeol-ui Sijak

Kekkai Sensen: Ousama no Restaurant no Ousama
Blood Blockade Battlefront OVA
Youjo Senki
Saga of Tanya the Evil
Koinaka: Koinaka de Hatsukoi x Nakadashi Sexual Life The Animation

Handa-kun
Handa-kun
Baka na Imouto wo Rikou ni Suru no wa Ore no xx dake na Ken ni Tsuite

Noblesse: Awakening

Udon no Kuni no Kiniro Kemari
Poco's Udon World
Uchuu Patrol Luluco
Space Patrol Luluco
Fukigen na Mononokean
The Morose Mononokean
Monster Musume no Iru Nichijou OVA
Monster Musume: Everyday Life with Monster Girls OVA
Aikatsu Stars!

Orange
Orange
Girls & Panzer Movie Specials
Girls und Panzer der Film Specials
Kidou Senshi Gundam Unicorn RE:0096
Mobile Suit Gundam Unicorn RE:0096
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka OVA
Is It Wrong to Try to Pick Up Girls in a Dungeon?: Is It Wrong to Expect a Hot Spring in a Dungeon?
Aikatsu!: Nerawareta Mahou no Aikatsu! Card

B: The Beginning
B: The Beginning
Amaama to Inazuma
Sweetness & Lightning
Nobunaga no Shinobi
Ninja Girl & Samurai Master
Senki Zesshou Symphogear AXZ
Symphogear AXZ
Senki Zesshou Symphogear XV
Symphogear XV
Ansatsu Kyoushitsu: Kagaijugyou-hen
Assassination Classroom: Extracurricular Lesson
Bungou Stray Dogs 2nd Season
Bungo Stray Dogs 2
Kuroko no Basket Movie 1: Winter Cup - Kage to Hikari
Winter Cup Highlights Episode 1 – Winter Cup Highlights -Shadow and Light-
Kuroko no Basket Movie 2: Winter Cup - Namida no Saki e
Winter Cup Highlights Episode 2 – Winter Cup Highlights -Beyond the Tears-
Kuroko no Basket Movie 3: Winter Cup - Tobira no Mukou
Winter Cup Highlights Episode 3 – Winter Cup Highlights -Crossing the Door-
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Gaiden: Sword Oratoria
Sword Oratoria: Is It Wrong to Try to Pick Up Girls in a Dungeon? On the Side
Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo
The Irregular at Magic High School The Movie - The Girl Who Summons The Stars
Mahoutsukai no Yome: Hoshi Matsu Hito
The Ancient Magus' Bride: Those Awaiting a Star
Durarara!!x2 Ketsu: Dufufufu!!
Durarara!! x2 Ketsu: Dufufufu!!
Urara Meirochou
Urara Meirocho
Fairy Tail OVA (2016)
Fairy Tail Series 2 OVA
Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou
Haikyu!! 3rd Season
Kono Subarashii Sekai ni Shukufuku wo! 2
KonoSuba: God's Blessing on This Wonderful World! 2
Fune wo Amu
The Great Passage
Kuzu no Honkai
Scum's Wish
Rokudenashi Majutsu Koushi to Akashic Records
Akashic Records of Bastard Magic Instructor
Koi ni Naritai Aquarium

Aggressive Retsuko
Aggretsuko
Flip Flappers
Flip Flappers
Natsume Yuujinchou Go
Natsume's Book of Friends Season 5
Yuri!!! on Ice
Yuri!!! On Ice
91 Days
91 Days
Tanaka-kun wa Kyou mo Kedaruge
Tanaka is Listless Today Too
Super Lovers OVA

Ginga Kikoutai Majestic Prince Movie: Kakusei no Idenshi
Majestic Prince The Movie: Genetic Awakening
Danganronpa 3: The End of Kibougamine Gakuen - Zetsubou-hen
Danganronpa 3: The End of Hope's Peak High School - Despair Arc
Shakunetsu no Takkyuu Musume
Scorching Ping Pong Girls
Drifters: Special Edition

Starmyu OVA

Kiniro Mosaic: Pretty Days
Kinmoza! Pretty Days
Yuyushiki: Komarasetari, Komarasaretari

Suki ni Naru Sono Shunkan wo. Kokuhaku Jikkou Iinkai
The Moment You Fall in Love
Fate/stay night Movie: Heaven's Feel - II. Lost Butterfly
Fate/stay night: Heaven's Feel - II. Lost Butterfly
Fate/stay night Movie: Heaven's Feel - III. Spring Song
Fate/stay night: Heaven's Feel - III. Spring Song
Kidou Senshi Gundam: Tekketsu no Orphans 2nd Season
Mobile Suit Gundam: Iron-Blooded Orphans 2nd Season
Uchuu Senkan Yamato 2202: Ai no Senshi-tachi
Star Blazers: Space Battleship Yamato 2202
Bungou Stray Dogs: Hitori Ayumu
Bungo Stray Dogs 2 - Walking Alone
Lupin III (2015) Specials
Lupin the Third Part 4 Specials
Kingsglaive: Final Fantasy XV
Kingsglaive: Final Fantasy XV
Kemono Friends

Planetarian: Chiisana Hoshi no Yume
Planetarian: The Reverie of a Little Planet
WWW.Working!!
WWW.WAGNARIA!!
Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen
Descending Stories: Showa Genroku Rakugo Shinju
Love Live! μ's Final Love Live! Opening Animation

Tanaka-kun wa Itsumo Kedaruge Specials
Tanaka-kun is Always Listless Specials
Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku OVA
My Teen Romantic Comedy SNAFU TOO! OVA
Mahoutsukai Precure! Movie: Kiseki no Henshin! Cure Mofurun!

Planetarian: Hoshi no Hito
Planetarian: Storyteller of the Stars
Kishibe Rohan wa Ugokanai
Thus Spoke Kishibe Rohan
Kobayashi-san Chi no Maid Dragon
Miss Kobayashi's Dragon Maid
Huyao Xiao Hongniang: Wangquan Fugui

Kidou Senshi Gundam Thunderbolt: December Sky
Mobile Suit Gundam Thunderbolt: December Sky
Fella Hame Lips

Honobono Log

K: Seven Stories Movie 1 - R:B - Blaze
K: SEVEN STORIES "R:B - BLAZE -"
Ajin Part 2
Ajin: Demi-Human 2nd Season
Arslan Senki (TV) Gaiden

Saiki Kusuo no Ψ-nan
The Disastrous Life of Saiki K.
Kubikiri Cycle: Aoiro Savant to Zaregotozukai
The Kubikiri Cycle
Gochuumon wa Usagi desu ka?? Dear My Sister
Is the Order a Rabbit?? Dear My Sister
Magic-Kyun! Renaissance
Magic-Kyun! Renaissance
Yowamushi Pedal: Spare Bike

JK Bitch ni Shiboraretai

Kamisama Hajimemashita: Kamisama, Shiawase ni Naru

ACCA: 13-ku Kansatsu-ka
ACCA: 13-Territory Inspection Dept.
One Piece: Heart of Gold
One Piece: Heart of Gold
Zhen Hun Jie
Rakshasa Street
Violet Evergarden
Violet Evergarden
Cardcaptor Sakura: Clear Card-hen
Cardcaptor Sakura: Clear Card
Starmyu 2nd Season

Haikara-san ga Tooru Movie 1: Benio, Hana no 17-sai
Haikara-san: Here Comes Miss Modern
Super Lovers 2
Super Lovers 2
RESTART POiNTER

Luo Xiao Hei Zhan Ji
The Legend of Luoxiaohei
Huyao Xiao Hongniang: Yue Hong

Boku no Hero Academia 2nd Season
My Hero Academia Season 2
Little Witch Academia (TV)
Little Witch Academia
Kaitou Joker 4th Season
JOKER 4th Season
Shounen Maid: Onna wa Dokyou, Otoko wa Aikyou?
Shounen Maid Episode 8.5
Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?
WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?
Tsumamigui 3 The Animation

Ao no Exorcist: Kyoto Fujouou-hen
Blue Exorcist: Kyoto Saga
Ansatsu Kyoushitsu: 365-nichi no Jikan
Assassination Classroom The Movie: 365 Days' Time
Koutetsujou no Kabaneri Movie 1: Tsudou Hikari
Kabaneri of the Iron Fortress: Light That Gathers
Koutetsujou no Kabaneri Movie 2: Moeru Inochi
Kabaneri of the Iron Fortress: Life The Burns
Tales of Zestiria the Cross: Saiyaku no Jidai
Tales of Zestiria the X Prologue: The Age of Chaos
BanG Dream!
BanG Dream!
Trinity Seven Movie 1: Eternity Library to Alchemic Girl
Trinity Seven: Eternity Library & Alchemic Girl
Ling Qi
Spiritpact
One Piece Film: Gold Episode 0 - 711 ver.
One Piece Film: Gold Episode 0 - 711 ver.
Hitorijime My Hero
Hitorijime My Hero
Doraemon Movie 37: Nobita no Nankyoku Kachikochi Daibouken
Doraemon the Movie 2017: Great Adventure in the Antarctic Kachi Kochi
No Game No Life: Zero
No Game, No Life: Zero
Seihou Bukyou Outlaw Star Specials
Outlaw Star
Saiyuuki Reload Blast
Saiyuki Reload Blast
Chain Chronicle: Haecceitas no Hikari Part 1
Chain Chronicle: The Light of Haecceitas Part 1
Chain Chronicle: Haecceitas no Hikari Part 2
Chain Chronicle: The Light of Haecceitas Part 2
Chain Chronicle: Haecceitas no Hikari Part 3
Chain Chronicle: The Light of Haecceitas Part 3
Gabriel DropOut
Gabriel DropOut
Wu Geng Ji

Amanchu!: Yakusoku no Natsu to Atarashii Omoide no Koto
Amanchu! Episode 13: The Story of the Promised Summer and New Memories
Free! Movie 1: Timeless Medley - Kizuna
Free! The Movie -Timeless Medley- the Bond
IDOLiSH7
IDOLiSH7
Quanzhi Gaoshou
The King's Avatar
Boku no Hero Academia: Sukue! Kyuujo Kunren!
My Hero Academia: Rescue! Rescue Training
Oshiete! Galko-chan: Natsuyasumi tte Hontou desu ka?
Please tell me! Galko-chan OVA
Shuangsheng Lingtan
Twin Spirit Detectives
Girls & Panzer: Saishuushou Part 1
Girls und Panzer das Finale – Part 1
Pretty x Cation 2 The Animation

Onihei
Onihei
Demi-chan wa Kataritai
Interviews With Monster Girls
Isekai Shokudou
Restaurant to Another World
Tsugumomo
Tsugumomo
Lupin the IIIrd: Chikemuri no Ishikawa Goemon
Lupin the Third: Goemon's Blood Spray
Meitantei Conan: Episode One - Chiisaku Natta Meitantei
Detective Conan: Episode One - The Great Detective Turned Small
Uchouten Kazoku 2
The Eccentric Family 2
Sakura Nagashi

Tales of Zestiria the Cross 2nd Season
Tales of Zestiria the X Season 2
Gintama.
Gintama Season 5
Fate/kaleid liner Prisma☆Illya Movie: Sekka no Chikai
Fate/kaleid liner Prisma Illya: Vow in the Snow
Sakurada Reset
Sagrada Reset
Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen
Danganronpa 3: The End of Hope's Peak High School - Hope Arc
Knight's & Magic
Knight's & Magic
Kyoukai no Rinne 3rd Season
RIN-NE Season 3
High School Fleet OVA

Rewrite 2nd Season
Rewrite: Moon and Terra
One Punch Man 2nd Season
One Punch Man Season 2
Orange: Mirai

Super Danganronpa 2.5: Komaeda Nagito to Sekai no Hakaisha
Super Danganronpa 2.5: Nagito Komaeda and the Destroyer of the World
Overlord Movie 1: Fushisha no Ou
Overlord: The Undead King
Zero kara Hajimeru Mahou no Sho
Grimoire of Zero
Meiji Tokyo Renka

Osomatsu-san: Ouma de Kobanashi

Shelter (Music)
Shelter
Oushitsu Kyoushi Heine
The Royal Tutor
New Game! Watashi, Shain Ryokou tte Hajimete nanode...

Grancrest Senki
Record of Grancrest War
High School DxD Hero
High School DxD Hero
Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou
Yuki Yuna is a Hero: The Washio Sumi Chapter
Kirakira☆Precure A La Mode
Kirakira Pretty Cure A La Mode
Digimon Adventure tri. 4: Soushitsu
Digimon Adventure tri. Loss
Quanzhi Fashi
Full-Time Magister
Precure Dream Stars! Movie

PriPara Movie: Mi~nna de Kagayake! Kirarin☆Star Live!

Mekakucity V's
Mekakucity V's
Pokemon XY&Z Specials

Pig: Oka no Ue no Dam Keeper
Pig: The Dam Keeper Poems
Diamond no Ace: Second Season OVA
Ace of Diamond: Second Season OVA
Alice to Zouroku
Alice & Zoroku
Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou 1 - Tomodachi

Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou 2 - Tamashii

Yuuki Yuuna wa Yuusha de Aru: Washio Sumi no Shou 3 - Yakusoku

Shikkoku no Shaga The Animation

Koro-sensei Quest!
Koro Sensei Quest!
Kidou Senshi Gundam Thunderbolt 2nd Season
Mobile Suit Gundam Thunderbolt 2nd Season
Nanbaka 2
Nanbaka Season 2
Isekai Izakaya: Koto Aitheria no Izakaya Nobu
Isekai Izakaya: Japanese Food From Another World
Overlord Movie 2: Shikkoku no Eiyuu
Overlord: The Dark Hero
Meitantei Conan Movie 21: Karakurenai no Love Letter
Detective Conan Movie 21: The Crimson Love Letter
Code Geass: Fukkatsu no Lelouch
Code Geass: Lelouch of the Re;surrection
Code Geass: Hangyaku no Lelouch I - Koudou
Code Geass: Lelouch of the Rebellion I - Initiation
Code Geass: Hangyaku no Lelouch II - Handou
Code Geass: Lelouch of the Rebellion II - Transgression
Code Geass: Hangyaku no Lelouch III - Oudou
Code Geass: Lelouch of the Rebellion III - Glorification
Baki

Yuuki Yuuna wa Yuusha de Aru: Yuusha no Shou
Yuki Yuna is a Hero: The Hero Chapter
Kekkai Sensen & Beyond
Blood Blockade Battlefront & Beyond
Ao no Exorcist: Kyoto Fujouou-hen OVA
Blue Exorcist: Kyoto Saga OVA
Youkai Watch Movie 4: Shadow Side - Oni-ou no Fukkatsu
Yo-kai Watch Shadowside: The Return of the Oni King
Shokugeki no Souma: Ni no Sara OVA
Food Wars! The Second Plate OVA
Sakura Quest
Sakura Quest
Seitokai Yakuindomo Movie

Days: Touin Gakuen-sen!

Pokemon Generations
Pokémon Generations
Natsume Yuujinchou Go Specials
Natsume's Book of Friends Season 5 Specials
Yoru wa Mijikashi Arukeyo Otome
Night Is Short, Walk on Girl
Pokemon Movie 20: Kimi ni Kimeta!
Pokémon the Movie: I Choose You!
Mary to Majo no Hana
Mary and the Witch's Flower
Inuyashiki
Inuyashiki: Last Hero
Koutetsujou no Kabaneri Movie 3: Unato Kessen
Kabaneri of the Iron Fortress: The Battle of Unato
Shoukoku no Altair
Altair: A Record of Battles
Ryuu no Haisha
The Dragon Dentist
Re:Creators
Re:CREATORS
Black Clover
Black Clover
Nanatsu no Taizai: Imashime no Fukkatsu
The Seven Deadly Sins: Revival of the Commandments
Natsume Yuujinchou Roku
Natsume's Book of Friends Season 6
Made in Abyss
Made in Abyss
UQ Holder! Mahou Sensei Negima! 2 OVA

Lostorage Conflated WIXOSS

Answer (2016)

Saiki Kusuo no Ψ-nan 2
The Disastrous Life of Saiki K. 2
Blend S
BLEND-S
Kono Subarashii Sekai ni Shukufuku wo! 2: Kono Subarashii Geijutsu ni Shukufuku wo!
KonoSuba: God's Blessing on This Wonderful World! 2 - God's Blessing on This Wonderful Art!
Ballroom e Youkoso
Welcome to the Ballroom
Shingeki no Bahamut: Genesis - Short Story
Rage of Bahamut: Genesis - Short Story
Brave Witches: Petersburg Daisenryaku
Brave Witches: Petersburg Grand Strategy
Soukyuu no Fafner: Dead Aggressor - The Beyond
Fafner The Beyond
Fate/Apocrypha

Kujira no Kora wa Sajou ni Utau
Children of the Whales
Mahoujin Guruguru (2017)
Magical Circle
Meikoku Gakuen: Jutai-hen
Dark Hour Academy: Fertilization Arc
Kuroko no Basket: Oshaberi Shiyou ka

Idol Time PriPara

Yoake Tsugeru Lu no Uta
Lu Over the Wall
Yuru Camp△
Laid-Back Camp
Tsuki ga Kirei
Tsukigakirei
Gabriel DropOut Specials

Zoku Touken Ranbu: Hanamaru
Touken Ranbu - Hanamaru 2
BanG Dream! Asonjatta!
BanG Dream! We Had Some Fun!
Beyblade Burst God
Beyblade Burst Evolution
Tsurezure Children
Tsuredure Children
New Game!!
New Game!!
The iDOLM@STER SideM
THE IDOLM@STER SideM
Kakegurui
Kakegurui
Bungou Stray Dogs: Dead Apple
Bungo Stray Dogs: Dead Apple
Digimon Adventure tri. 5: Kyousei
Digimon Adventure tri. Coexistence
Yarimoku Beach ni Shuugakuryokou de!! The Animation

Love Live! Sunshine!! 2nd Season
Love Live! Sunshine!! Season 2
Nobunaga no Shinobi: Ise Kanegasaki-hen
Ninja Girl & Samurai Master 2nd
Koi wa Ameagari no You ni
After the Rain
To LOVE-Ru: Multiplication - Mae kara Ushiro kara

Happy Party Train

Ani ni Tsukeru Kusuri wa Nai!

Baka Dakedo Chinchin Shaburu no dake wa Jouzu na Chii-chan♡

Tu Bian Yingxiong Leaf
To Be Heroine
Mahoutsukai no Yome
The Ancient Magus' Bride
Osomatsu-san 2nd Season
Mr. Osomatsu 2
Overlord II
Overlord II
Hoozuki no Reitetsu 2nd Season
Hozuki's Coolheadedness 2
Mitsuboshi Colors
Mitsuboshi Colors
Kino no Tabi: The Beautiful World - The Animated Series
Kino's Journey -the Beautiful World- the Animated Series
Hibike! Euphonium Movie 2: Todoketai Melody
Sound! Euphonium the Movie: May the Melody Reach You!
Donten ni Warau Gaiden: Ketsubetsu, Yamainu no Chikai
Donten: Laughing Under the Clouds - Gaiden: Chapter 1 - One Year After the Battle
Hinamatsuri (OVA)

Haikyuu!! Movie 3: Sainou to Sense
Haikyu!! The Movie: Talent and Sense
Haikyuu!! Movie 4: Concept no Tatakai
Haikyu!! The Movie: Battle of Concepts
Devilman: Crybaby
Devilman: Crybaby
Kobayashi-san Chi no OO Dragon
Miss Kobayashi's Dragon Something
Kimi no Hikari: Asagao to Kase-san.
Your Light: Kase-san and Morning Glories
3-gatsu no Lion 2nd Season
March Comes In Like a Lion 2nd Season
Free! Movie 2: Timeless Medley - Yakusoku
Free! The Movie -Timeless Medley- the Promise
Free! Take Your Marks

Youkai Apartment no Yuuga na Nichijou
Elegant Yokai Apartment Life
Gakuen Babysitters
School Babysitters
Princess Principal
Princess Principal
Konohana Kitan
Konohana Kitan
Owarimonogatari 2nd Season
Owarimonogatari Second Season
Uma Musume: Pretty Derby
Umamusume: Pretty Derby
Boku no Hero Academia: Hero Note
My Hero Academia: Hero Notebook
Cardcaptor Sakura: Clear Card-hen Prologue - Sakura to Futatsu no Kuma
Cardcaptor Sakura: Clear Card Prologue – Sakura and the Two Bears
Haikyuu!! Tokushuu! Haru-kou Volley ni Kaketa Seishun
Haikyuu!! Special Feature! The Spring Tournament of Their Youth
Hiyoko no Basket Movie: Last Game 0401

Poputepipikku
Pop Team Epic
Yi Ren Zhi Xia 2
Hitori no Shita - The Outcast 2
Saenai Heroine no Sodatekata ♭: Koi to Junjou no Service-kai
Saekano: How to Raise a Boring Girlfriend .flat - Fan Service of Love and Pure heart
Kobayashi-san Chi no Maid Dragon: Valentine, Soshite Onsen! - Amari Kitai Shinaide Kudasai
Miss Kobayashi's Dragon Maid: Valentine's, and Then Hot Springs! (Please Don't Get Your Hopes Up)
Himouto! Umaru-chan R

Yuri!!! on Ice: Yuri Plisetsky GPF in Barcelona EX - Welcome to The Madness
Yuri!!! On ICE: Yuri Plisetsky GPF in Barcelona EX "Welcome to The Madness"
Imouto sae Ireba Ii.
A Sister's All You Need
Donten ni Warau Gaiden: Shukumei, Soutou no Fuuma
Donten: Laughing Under the Clouds - Gaiden: Chapter 2 - The Tragedy of Fuuma Ninja Tribe
Donten ni Warau Gaiden: Ouka, Tenbou no Kakehashi
Donten: Laughing Under the Clouds - Gaiden: Chapter 3 - Conspiracy of the Military
Boku no Hero Academia: Training of the Dead
My Hero Academia: Training of the Dead
ReLIFE: Kanketsu-hen
ReLIFE: Final Arc
Shoujo☆Kageki Revue Starlight
Revue Starlight
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e
Classroom of the Elite
Honoo no Haramase Oppai: Ero Appli Gakuen The Animation

Slow Start
Slow Start
Houseki no Kuni
Land of the Lustrous
Koe no Katachi Specials
A Silent Voice Specials
Oide yo! Mizuryuu Kei Land

Chuunibyou demo Koi ga Shitai! Movie: Take On Me
Love, Chunibyo & Other Delusions!: Take On Me
Yao Shen Ji
Tales of Demons and Gods
Just Because!
Just Because!
Uta no☆Prince-sama♪ Movie: Maji Love Kingdom

No Doubt
No Doubt
Kuroko no Basket: Last Game NG-shuu

Yama no Susume Third Season
Encouragement of Climb Season 3
Yama no Susume: Omoide Present
Encouragement of Climb: "Omoide" Present
Liz to Aoi Tori
Liz and the Blue Bird
Hibike! Euphonium Movie 3: Chikai no Finale
Sound! Euphonium: Our Promise: A Brand New Day
Mayoiga no Oneesan The Animation
Lusty Ladies of Mayohiga
Pluto
Pluto
Doraemon Movie 38: Nobita no Takarajima
Doraemon the Movie 2018: Nobita's Treasure Island
Otsukimi Recital

Comic Girls

Sidonia no Kishi: Ai Tsumugu Hoshi
Knights of Sidonia: Love Woven in the Stars
Shingeki no Kyojin Season 3
Attack on Titan Season 3
Rilakkuma to Kaoru-san
Rilakkuma and Kaoru
Shokugeki no Souma: San no Sara
Food Wars! The Third Plate
Yowamushi Pedal: Glory Line

Tate no Yuusha no Nariagari
The Rising of the Shield Hero
Meitantei Conan Movie 22: Zero no Shikkounin
Case Closed Movie 22: Zero the Enforcer
Haikyuu!! vs. "Akaten"
Haikyu!!: VS "Failing Marks"
Boku dake ga Inai Machi Recaps
ERASED Digest
Chio-chan no Tsuugakuro
Chio's School Road
Demi-chan wa Kataritai: Demi-chan no Natsuyasumi
Interviews With Monster Girls: The Demi-chans' Summer Break
Miira no Kaikata
How to Keep a Mummy
Angolmois: Genkou Kassenki
Angolmois: Record of Mongol Invasion
Shoujo Shuumatsu Ryokou
Girls' Last Tour
Sora yori mo Tooi Basho
A Place Further Than The Universe
Gintama. Porori-hen
Gintama. Slip Arc
SSSS.Gridman
SSSS.Gridman
Promare
Promare
Darling in the FranXX
DARLING in the FRANXX
Sayonara no Asa ni Yakusoku no Hana wo Kazarou
Maquia: When the Promised Flower Blooms
Lupin III: Part 5
Lupin the Third Part 5
Karakai Jouzu no Takagi-san
Teasing Master Takagi-san
Yowamushi Pedal: Re:Generation

Hakata Tonkotsu Ramens
Hakata Tonkotsu Ramens
Shishunki Sex

Imouto Bitch ni Shiboraretai

Nanatsu no Taizai Movie 1: Tenkuu no Torawarebito
The Seven Deadly Sins the Movie: Prisoners of the Sky
Kidou Senshi Gundam Thunderbolt: Bandit Flower
Mobile Suit Gundam Thunderbolt: Bandit Flower
Baja no Studio

Wotaku ni Koi wa Muzukashii
Wotakoi: Love is Hard for Otaku
Fairy Tail: Final Series
Fairy Tail Final Series
Gundam Build Fighters: GM no Gyakushuu

Mahou Shoujo Lyrical Nanoha: Detonation
Magical Girl Lyrical Nanoha: Detonation
Golden Kamuy
Golden Kamuy
Net-juu no Susume
Recovery of an MMO Junkie
Net-juu no Susume Special
Recovery of an MMO Junkie Special
Kyonyuu Daikazoku Saimin

Fate/Grand Order
Fate/Grand Order
Hakumei to Mikochi
Hakumei and Mikochi
Kimi no Suizou wo Tabetai
I Want To Eat Your Pancreas
Shingeki no Kyojin: Lost Girls
Attack on Titan: Lost Girls
Uchiage Hanabi

Garo: Vanishing Line
GARO -VANISHING LINE-
Yaoguai Mingdan 2nd Season

Suna no Wakusei feat. Hatsune Miku
DUNE feat. Hatsune Miku
Feng Ling Yu Xiu
Soulmate Adventure
The iDOLM@STER Prologue SideM: Episode of Jupiter
The iDOLM@STER Side M: Episode of Jupiter
Asagao to Kase-san.
Kase-san and Morning Glories
One Piece: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken
One Piece: Episode of East Blue - Luffy and His Four Crewmates' Great Adventure
Itsudatte Bokura no Koi wa 10 cm Datta.
Our love has always been 10 centimeters apart.
Baku Ane 2: Otouto Ippai Shibocchau zo! The Animation
Bombastic Sisters 2
Katainaka ni Totsuidekita ○-ssia Musume to H Shimakuru Ohanashi

Ohedo Julia-Night

Natsume Yuujinchou Roku Specials
Natsume's Book of Friends Season 6 Specials
Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow
Re:ZERO -Starting Life in Another World- Memory Snow
Daybreak Interlude
Daybreak Interlude
Hinamatsuri
Hinamatsuri
Zutto Mae kara Suki deshita. Kokuhaku Jikkou Iinkai: Kinyoubi no Ohayou
I've Always Liked You: A Friday's Good Morning
Gaikotsu Shotenin Honda-san
Skull-face Bookseller Honda-san
Full Metal Panic! Movie 1: Boy Meets Girl

Full Metal Panic! Movie 2: One Night Stand

Full Metal Panic! Movie 3: Into the Blue

Ginga Eiyuu Densetsu: Die Neue These - Seiran 1
Legend of the Galactic Heroes: Die Neue These - Stellar War Part 1
Ginga Eiyuu Densetsu: Die Neue These - Seiran 2
Legend of the Galactic Heroes: Die Neue These - Stellar War Part 2
Ginga Eiyuu Densetsu: Die Neue These - Seiran 3
Legend of the Galactic Heroes: Die Neue These - Stellar War Part 3
Boku no Hero Academia 3rd Season
My Hero Academia Season 3
Digimon Adventure tri. 6: Bokura no Mirai
Digimon Adventure tri. Future
Tada-kun wa Koi wo Shinai
Tada Never Falls in Love
Sword Art Online: Alicization
Sword Art Online: Alicization
Sword Art Online Alternative: Gun Gale Online

Drifters (OVA)
Drifters
Doupo Cangqiong
Fights Break Sphere
Mekakucity Records
Mekakucity Records
Rokuhou-dou Yotsuiro Biyori
Yotsuiro Biyori
Ling Qi 2
Spiritpact: Bond of the Underworld
Natsume Yuujinchou Movie: Utsusemi ni Musubu
Natsume's Book of Friends Movie: Ephemeral Bond
Tsuki ga Kirei Special

Huyao Xiao Hongniang: Qian Yan
Fox Spirit Matchmaker 5th Season
Kokkoku
Kokkoku
Yinhun x He Wei Dao

Doupo Cangqiong Specials
Fights Break Sphere Specials
Megalo Box
Megalobox
Major 2nd

Hug tto! Precure

Mob Psycho 100: Reigen - Shirarezaru Kiseki no Reinouryokusha
Mob Psycho 100 Reigen: The Miraculous Unknown Psychic
Ajin Part 2 OVA

Date A Live III
Date A Live III
Banana Fish
Banana Fish
Piano no Mori (TV)
Forest of Piano
Tsurune: Kazemai Koukou Kyuudou-bu
Tsurune: Kazemai High School Kyudo Club
Hifuu Katsudou Kiroku: The Sealed Esoteric History
Hifuu Club Activity Record: The Sealed Esoteric History
Kimitachi wa Dou Ikiru ka
The Boy and the Heron
Shingeki no Kyojin Season 2 Movie: Kakusei no Houkou
Attack on Titan: The Roar of Awakening
Free! Dive to the Future

Youkoso! Sukebe Elf no Mori e

Yuragi-sou no Yuuna-san
Yuuna and the Haunted Hot Springs
Real Eroge Situation! The Animation
Real Erogame Situation!
Kakuriyo no Yadomeshi
Kakuriyo: Bed and Breakfast for Spirits
Wo Shi Jiang Xiaobai
I'm Joybo
Girls & Panzer: Dai 63-kai Senshadou Zenkoku Koukousei Taikai Recap
Girls und Panzer Compilation: The 63rd National High School Sensha-do Games
Golden Time (Movie)
Golden Time
Owarimonogatari 2nd Season Recaps
Owarimonogatari Second Season Recaps
Yuuki Yuuna wa Yuusha de Aru: Hidamari
Yuki Yuna is a Hero: A Sunny Place
Amanchu! Advance

Servamp Movie: Alice in the Garden
Servamp Movie: Alice in the Garden
Huyao Xiao Hongniang: Beishan Yaodi
Fox Spirit Matchmaker 4th Season
Huyao Xiao Hongniang: Nan Guo
Fox Spirit Matchmaker 6th Season
Gintama. Shirogane no Tamashii-hen
Gintama. Silver Soul Arc
Aishen Qiaokeli-ing...II
Cupid’s Chocolates II
Made in Abyss Movie 3: Fukaki Tamashii no Reimei
Made in Abyss: Dawn of the Deep Soul
Back Street Girls: Gokudolls
Back Street Girls: Gokudols
Hisone to Maso-tan
Dragon Pilot: Hisone and Masotan
Saenai Heroine no Sodatekata Fine
Saekano the Movie: Finale
Boku no Hero Academia the Movie 1: Futari no Hero
My Hero Academia: Two Heroes
Kengan Ashura

Aggressive Retsuko (ONA)
Aggretsuko (ONA)
Jashin-chan Dropkick
Dropkick On My Devil!
Wu Geng Ji Zhi Tianqi

Nanatsu no Taizai: Imashime no Fukkatsu Joshou
The Seven Deadly Sins: Revival of The Commandments - Prologue
Pokemon Movie 21: Minna no Monogatari
Pokémon the Movie: The Power of Us
Captain Tsubasa (2018)

Mirai no Mirai
Mirai
Dragon Ball Super: Broly
Dragon Ball Super: Broly
Shokugeki no Souma: San no Sara - Tootsuki Ressha-hen
Food Wars! The Third Plate: Totsuki Train Arc
Yuragi-sou no Yuuna-san OVA

Yuu☆Yuu☆Hakusho: Two Shots/Noru ka Soru ka
Yu Yu Hakusho: Ghost Files - Two Shots / All or Nothing
Shokugeki no Souma: San no Sara - Kyokuseiryou no Erina
Food Wars! The Third Plate OVA - Erina's New Life
IDOLiSH7 Vibrato

Non Non Biyori Movie: Vacation

Zoku Owarimonogatari

Hinomaruzumou
Hinomaru Sumo
Layton Mystery Tanteisha: Katri no Nazotoki File

Love Live! Sunshine!! The School Idol Movie: Over the Rainbow

Hoozuki no Reitetsu 2nd Season: Sono Ni
Hozuki's Coolheadedness 2: Part 2
Mahoutsukai no Yome Recap
The Ancient Magus' Bride Recap
Emiya-san Chi no Kyou no Gohan
Today's Menu for the Emiya Family
Youjo Senki Movie
Saga of Tanya the Evil: The Movie
Quanzhi Gaoshou Specials
The King's Avatar (2018)
Kakegurui××

Violet Evergarden: Kitto "Ai" wo Shiru Hi ga Kuru no Darou
Violet Evergarden: The Day You Understand "I Love You" Will Surely Come
Grand Blue
Grand Blue Dreaming
Hakumei to Mikochi: Neji to Bed to Irori to Bakuchi

Nobunaga no Shinobi: Anegawa Ishiyama-hen
Ninja Girl & Samurai Master: Anegawa and Ishiyama Arc
Gegege no Kitarou (2018)
GeGeGe no Kitaro
Hataraku Saibou
Cells at Work!
Douluo Dalu
Soul Land
Yao Shen Ji 2nd Season

Asobi Asobase
Asobi Asobase - workshop of fun -
Mi Yu Xingzhe
Uncharted Walker
Doupo Cangqiong 2nd Season
Fights Break Sphere 2nd Season
Kiratto Pri☆chan

Ze Tian Ji 2nd Season

Aikatsu Friends!

Mo Dao Zu Shi
The Master of Diabolism
Muttsuri Dosukebe Tsuyu Gibo Shimai no Honshitsu Minuite Sex Sanmai

Ano Ko Secret
The Secret About That Girl
Fei Ren Zai
Non-Human
Kemurikusa (TV)

K: Seven Stories Movie 2 - Side:Blue - Tenrou no Gotoku
K: SEVEN STORIES "SIDE:BLUE - Sirius - "
K: Seven Stories Movie 3 - Side:Green - Uwagaki Sekai
K: SEVEN STORIES "SIDE:GREEN - Overwrite World - "
K: Seven Stories Movie 4 - Lost Small World - Ori no Mukou ni
K: SEVEN STORIES "Lost Small World - Outside the Cage - "
K: Seven Stories Movie 5 - Memory of Red - Burn
K: SEVEN STORIES "Memory of RED - BURN -"
K: Seven Stories Movie 6 - Circle Vision - Nameless Song
K: SEVEN STORIES "Circle Vision - Nameless Song - "
Chuukan Kanriroku Tonegawa
Mr. Tonegawa: Middle Management Blues
Yuru Camp△ Specials
Laid-Back Camp Specials
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II
Is It Wrong to Try to Pick Up Girls in a Dungeon? II
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya
Is It Wrong to Try to Pick Up Girls in a Dungeon?: Arrow of the Orion
Goblin Slayer
Goblin Slayer
Kekkai Sensen & Beyond: Zapp Renfro Ingaouhouchuu!!/Baccardio no Shizuku
Blood Blockade Battlefront & Beyond OVA
The Perfect World
The Perfect World
Chihayafuru 3

Shikioriori
Flavors of Youth
Ahiru no Sora

Dokidoki Little Ooyasan

Penguin Highway

Sarazanmai
Sarazanmai
Tensei shitara Slime Datta Ken
That Time I Got Reincarnated as a Slime
Carole & Tuesday
Carole & Tuesday
Psycho-Pass: Sinners of the System Case.1 - Tsumi to Batsu
Psycho-Pass: Sinners of the System Case.1 - Crime and Punishment
Psycho-Pass: Sinners of the System Case.2 - First Guardian

Psycho-Pass: Sinners of the System Case.3 - Onshuu no Kanata ni＿＿
Psycho-Pass: Sinners of the System Case.3 - On the Other Side of Love and Hate
Karakuri Circus
Karakuri Circus
Strike the Blood III

Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
Rascal Does Not Dream of Bunny Girl Senpai
Boogiepop wa Warawanai (2019)
Boogiepop and Others
Kishuku Gakkou no Juliet
Boarding School Juliet
Gyakuten Saiban: Sono "Shinjitsu", Igi Ari! Season 2
Ace Attorney Season 2
Gintama. Shirogane no Tamashii-hen - Kouhan-sen
Gintama. Silver Soul Arc - Second Half War
Steins;Gate 0: Kesshou Takei no Valentine - Bittersweet Intermedio
Steins;Gate 0: Valentine's of Crystal Polymorphism -Bittersweet Intermedio-
Irozuku Sekai no Ashita kara
Iroduku: The World in Colors
Hug tto! Precure♡Futari wa Precure Movie: All Stars Memories

Mob Psycho 100 II
Mob Psycho 100 II
Made in Abyss Movie 1: Tabidachi no Yoake
Made in Abyss: Journey's Dawn
Made in Abyss Movie 2: Hourou Suru Tasogare
Made in Abyss: Wandering Twilight
City Hunter Movie: Shinjuku Private Eyes

Dororo
Dororo
Vinland Saga

Planet With

Tonari no Kyuuketsuki-san
Ms. Vampire who lives in my neighborhood.
Cardcaptor Sakura: Clear Card-hen Recap
Cardcaptor Sakura: Clear Card Recap
Poputepipikku TV Special
Pop Team Epic TV Special
Dakaretai Otoko 1-i ni Odosarete Imasu.
Dakaichi -I'm being harassed by the sexiest man of the year-
Hitoribocchi no Marumaru Seikatsu

Meng Qi Shi Shen
Cinderella Chef
Karakai Jouzu no Takagi-san: Water Slide
Teasing Master Takagi-san: Water Slide
Overlord III
Overlord III
Wakaokami wa Shougakusei! Movie
Okko's Inn
High School Fleet Movie

Beelzebub-jou no Okinimesu mama.
As Miss Beelzebub Likes.
Kidou Senshi Gundam: Senkou no Hathaway
Mobile Suit Gundam: Hathaway
Yuru Yuri,

Yakusoku no Neverland
The Promised Neverland
Yagate Kimi ni Naru
Bloom Into You
Shirobako Movie

Princess Principal: Crown Handler Movie 1
Princess Principal: Crown Handler - Chapter 1
Inazuma Eleven: Reloaded - Soccer no Henkaku

Niizuma Koyomi The Animation

Douluo Dalu 2nd Season

Osake wa Fuufu ni Natte kara: Yuzu Atsukan
Love is Like a Cocktail: Fourteenth Glass - Yuzu Hot Sake
Diamond Fusion

BanG Dream! 2nd Season
BanG Dream! 2nd Season
BanG Dream! 3rd Season

BanG Dream! Garupa☆Pico

Golden Kamuy: Barato no Youjinbou/Kaiki! Nazo no Kyodai Tori
Golden Kamuy: The Bodyguards of Barato/Terror! The Mysterious Giant Bird
Wo Shi Jiang Xiaobai (2018)
I'm Joybo OVA
Oshi ga Budoukan Ittekuretara Shinu
If My Favorite Pop Idol Made It to the Budokan, I Would Die
One Piece: Episode of Sorajima
One Piece: Episode of Skypiea
Uma Musume: Pretty Derby - BNW no Chikai

Ani ni Tsukeru Kusuri wa Nai! 2

Quanzhi Gaoshou 2
The King's Avatar 2
Wu Shan Wu Xing (2020)
Fog Hill of Five Elements
Wan Jie Xian Zong
The Wonderland of Ten Thousands
Neo-Aspect

3D Kanojo: Real Girl 2nd Season
Real Girl Season 2
Fukigen na Mononokean Tsuzuki
The Morose Mononokean II
Gakuen Babysitters Special
School Babysitters Episode 13
IDOLiSH7 Second Beat!
IDOLiSH7 Second BEAT!
Kaze ga Tsuyoku Fuiteiru
Run with the Wind
Hoshiai no Sora
Stars Align
Piano no Mori (TV) 2nd Season
Forest of Piano Second Season
Zombieland Saga
Zombie Land Saga
Kaijuu no Kodomo
Children of the Sea
Nekopara: Koneko no Hi no Yakusoku

Kumo desu ga, Nani ka?
So I'm a Spider, So What?
Aggressive Retsuko (ONA) 2nd Season
Aggretsuko (ONA) 2nd Season
Trinity Seven Movie 2: Heavens Library to Crimson Lord
Trinity Seven: Heavens Library & Crimson Lord
Violet Evergarden Movie
Violet Evergarden: The Movie
Golden Kamuy 2nd Season
Golden Kamuy Season 2
JoJo no Kimyou na Bouken Part 5: Ougon no Kaze
JoJo's Bizarre Adventure: Golden Wind
Watashi ni Tenshi ga Maiorita!
Wataten! an Angel Flew Down to Me
Asobi Asobase: Cosplay Taikai/Otona no Watashi e
Asobi Asobase: Cosplay Contest/To the Future Me
Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen
Kaguya-sama: Love is War
Kimetsu no Yaiba
Demon Slayer: Kimetsu no Yaiba
Asobi Asobase Specials

Bungou Stray Dogs 3rd Season
Bungo Stray Dogs 3
Strike Witches: Road to Berlin

Free! Dive to the Future - Soushun no Build-up!
Free! Dive to the Future Episode 0
Tiny Evil

Kono Subarashii Sekai ni Shukufuku wo! Movie: Kurenai Densetsu
KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson
WiSH VOYAGE

Kono Oto Tomare!
Kono Oto Tomare!: Sounds of Life
Girls & Panzer: Saishuushou Part 2
Girls und Panzer das Finale – Part 2
Fate/Grand Order: Zettai Majuu Sensen Babylonia
Fate/Grand Order: Absolute Demonic Front - Babylonia
Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram
Fate/Grand Order: Divine Realm of the Round Table - Camelot Paladin; Agateram
Digimon Adventure: Last Evolution Kizuna

Mix: Meisei Story
MIX
5-toubun no Hanayome
The Quintessential Quintuplets
Doukyonin wa Hiza, Tokidoki, Atama no Ue.
My Roommate is a Cat
Bokutachi wa Benkyou ga Dekinai
We Never Learn: BOKUBEN
Nanatsu no Taizai: Eiyuu-tachi wa Hashagu
The Seven Deadly Sins: Heroes' Frolic
Osomatsu-san Movie
Mr. Osomatsu the Movie
Wei, Kanjian Erduo La!

Ze Tian Ji 4th Season

One Piece Movie 14: Stampede
One Piece: Stampede
Saiki Kusuo no Ψ-nan: Kanketsu-hen
The Disastrous Life of Saiki K. Final Arc
Xiao Lu He Xiao Lan
Beryl and Sapphire
Boku to Nurse no Kenshuu Nisshi The Animation

Mutafukaz
MFKZ
Oushitsu Kyoushi Heine Movie
The Royal Tutor Movie
Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai
Rascal Does Not Dream of a Dreaming Girl
Kimi Omou Koi

Gochuumon wa Usagi desu ka?? Sing for You
Is the Order a Rabbit?? OVA
Gochuumon wa Usagi desu ka? Bloom
Is the Order a Rabbit? Bloom
Wotaku ni Koi wa Muzukashii OVA
Wotakoi: Love is Hard for Otaku OVA
Majimoji Rurumo: Kanketsu-hen

Drifters: The Outlandish Knight

Macross Δ Movie 2: Zettai Live!!!
Macross Delta: Zettai Live!!!!!!
Jashin-chan Dropkick Episode 12
Dropkick On My Devil! Episode 12
Free! Movie 4: The Final Stroke - Zenpen
Free! the Final Stroke: The First Volume
Boku no Hero Academia 4th Season
My Hero Academia Season 4
Cike Wu Liuqi
Scissor Seven
Cike Wu Liuqi Fanwai
Killer Seven
Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna
Re:ZERO -Starting Life in Another World- The Frozen Bond
High Score Girl: Extra Stage
Hi Score Girl: Extra Stage
Yao Shen Ji 3rd Season

Doupo Cangqiong 3rd Season
Fights Break Sphere 3rd Season
Mo Dao Zu Shi: Xian Yun Pian
The Master of Diabolism Season 2
Wu Geng Ji Zhi San Jie

Saimin Seishidou

Isekai Quartet
Isekai Quartet
Yuru Camp△ Season 2
Laid-Back Camp Season 2
Yuru Camp△ Movie
Laid-Back Camp: The Movie
Heya Camp△
Room Camp
Toaru Kagaku no Accelerator
A Certain Scientific Accelerator
Toaru Kagaku no Railgun T
A Certain Scientific Railgun T
Ore wo Suki nano wa Omae dake ka yo
ORESUKI Are you the only one who loves me?
Xingchen Bian
Stellar Transformation
Shingeki no Kyojin Season 3 Part 2
Attack on Titan Season 3 Part 2
Quanzhi Fashi III
Full-Time Magister 3rd Season
Doraemon Movie 39: Nobita no Getsumen Tansaki
Doraemon the Movie 2019: Chronicle of the Moon Exploration
Huyao Xiao Hongniang: Zhu Ye
Fox Spirit Matchmaker 7th Season
Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...
My Next Life as a Villainess: All Routes Lead to Doom!
Star☆Twinkle Precure
Star☆Twinkle Pretty Cure
Kimi to, Nami ni Noretara
Ride Your Wave
Joshikousei no Mudazukai
Wasteful Days of High School Girls
Dragon Ball Super: Broly - Skytree Super

Darwin's Game
Darwin's Game
Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru
Cautious Hero: The Hero Is Overpowered but Overly Cautious
Dorohedoro

Enen no Shouboutai
Fire Force
Fruits Basket 1st Season
Fruits Basket 1st Season
Dr. Stone
Dr. Stone
Boku no Hero Academia the Movie 1: Futari no Hero Specials
My Hero Academia: Two Heroes Specials
Wagaya no Liliana-san The Animation

Golden Kamuy 2nd Season OVA

Diamond no Ace: Act II
Ace of Diamond Act II
Chikan Shita Joshi*sei to Sonogo, Musabori Au Youna Doero Junai

Hataraku Saibou: Kaze Shoukougun
Cells at Work!: The Common Cold
Bai She: Yuan Qi
White Snake
Xue Ying Ling Zhu

Araburu Kisetsu no Otome-domo yo.
O Maidens in Your Savage Season
Sewayaki Kitsune no Senko-san
The Helpful Fox Senko-san
Meitantei Conan Movie 23: Konjou no Fist
Case Closed Movie 23: The Fist of Blue Sapphire
Jujutsu Kaisen Official PVs
Jujutsu Kaisen Official PVs
Senryuu Shoujo
Senryu Girl
Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.
Tensei shitara Slime Datta Ken OVA
That Time I Got Reincarnated as a Slime OAD
Kiratto Pri☆chan Season 2

Aggressive Retsuko: We Wish You a Metal Christmas
Aggretsuko: We Wish You a Metal Christmas
Hello World

Baby I Love You Daze

Tenki no Ko
Weathering with You
Star☆Twinkle Precure: Hoshi no Uta ni Omoi wo Komete

Seikatsu Shuukan The Animation

Haikyuu!! To the Top
Haikyu!! To the Top
Kono Oto Tomare! Part 2
Kono Oto Tomare!: Sounds of Life Season 2
Sora no Method: Mou Hitotsu no Negai

Double Decker! Doug & Kirill: Extra

Tong Ling Fei
Psychic Princess
Shaonian Ge Xing
Youths and Golden Coffin
Tsurune: Kazemai Koukou Kyuudou-bu - Yabai
Tsurune: Kazemai High School Japanese Archery Club - Dangerous Shoot
Lord El-Melloi II-sei no Jikenbo: Rail Zeppelin Grace Note - Hakamori to Neko to Majutsushi
Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note - A Grave Keeper, a Cat, and a Mage
Manga de Wakaru! Fate/Grand Order
Learning with Manga! Fate/Grand Order
Lord El-Melloi II-sei no Jikenbo: Rail Zeppelin Grace Note
Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note
Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.: Menma e no Tegami

JoJo no Kimyou na Bouken Part 5: Ougon no Kaze Recaps
JoJo's Bizarre Adventure: Golden Wind Recaps
Chuan Shu Zijiu Zhinan
Scumbag System
Rikei ga Koi ni Ochita no de Shoumei shitemita.
Science Fell in Love, So I Tried to Prove It
Karakai Jouzu no Takagi-san 2
Teasing Master Takagi-san 2
Watashi ni Tenshi ga Maiorita! Special
Wataten! an Angel Flew Down to Me Episode 13
Free! Movie 3: Road to the World - Yume
Free! -Road to the World- the Dream
Wu Dong Qian Kun
Martial Universe
Dumbbell Nan Kilo Moteru?
How Heavy Are the Dumbbells You Lift?
Gaki ni Modotte Yarinaoshi!!!

Jashin-chan Dropkick'
Dropkick on My Devil!! Dash
Megane no Megami

Bokura Mada Underground
We're Still Underground
Machikado Mazoku
The Demon Girl Next Door
Aikatsu Friends!: Kagayaki no Jewel

Aikagi The Animation

Additional Memory

Kawaki wo Ameku
Crying for Rain
Lilac
Lilac
Hollowness
Hollowness
Otogi

Nonsense Bungaku
Literary Nonsense
Dramaturgy
Dramaturgy
Oki ni Mesu mama
As You Like It
Girls & Panzer: Saishuushou Part 3
Girls und Panzer das Finale – Part 3
Girls & Panzer: Saishuushou Part 4
Girls und Panzer das Finale – Part 4
Cider no You ni Kotoba ga Wakiagaru
Words Bubble Up Like Soda Pop
Doupo Cangqiong 2nd Season Specials
Fights Break Sphere 2nd Season Specials: Song of Desert
A3! Season Spring & Summer
A3! Season Spring & Summer
Beastars

Mairimashita! Iruma-kun
Welcome to Demon School! Iruma-kun
Kanata no Astra
Astra Lost in Space
Kobayashi-san Chi no Maid Dragon S
Miss Kobayashi's Dragon Maid S
Sumikko Gurashi Movie 1: Tobidasu Ehon to Himitsu no Ko

Sayonara Gokko
Play Goodbye
Princess Connect! Re:Dive

Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.
If It's for My Daughter, I'd Even Defeat a Demon Lord
Radiant 2nd Season
RADIANT Season 2
Wei, Kanjian Erduo La! 2

Master Piece The Animation

Jian Wang 3: Xia Gan Yi Dan Shen Jianxin

Itte.
Say It.
Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen
Ascendance of a Bookworm
Tsugu Tsugumomo

Shingeki no Kyojin Season 3 Specials
Attack on Titan: Chibi Theater - Survey Corps, Levi Squad!
Shingeki no Kyojin in the Dome: Heishi-tachi no Hoshizora
Attack on Titan in the Dome: Soldiers' Starry Sky
Gintama: The Final
Gintama: The Very Final
Lupin the IIIrd: Mine Fujiko no Uso
Lupin the Third: Fujiko Mine's Lie
Psycho-Pass 3
Psycho-Pass 3
Totsukuni no Shoujo
The Girl From the Other Side: Siúil, a Rún
Main Actor

Vampire in the Garden
Vampire in the Garden
Ecchi na Oneechan ni Shiboraretai

Given

Jibaku Shounen Hanako-kun
Toilet-Bound Hanako-kun
Mushoku Tensei: Isekai Ittara Honki Dasu
Mushoku Tensei: Jobless Reincarnation
Hoozuki no Reitetsu 2nd Season OVA

Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan
My Teen Romantic Comedy SNAFU Climax!
Tensei shitara Slime Datta Ken 2nd Season
That Time I Got Reincarnated as a Slime Season 2
Baki: Dai Raitaisai-hen
Baki: The Great Raitai Tournament Saga
Boku no Hero Academia the Movie 2: Heroes:Rising
My Hero Academia: Heroes Rising
Sora no Aosa wo Shiru Hito yo
Her Blue Sky
High Score Girl II
Hi Score Girl II
Levius

Somali to Mori no Kamisama
Somali and the Forest Spirit
Goblin Slayer: Goblin's Crown
Goblin Slayer: Goblin's Crown
Majo Minarai wo Sagashite
Looking for Magical Doremi
Hataraku Saibou!!
Cells at Work!!
Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season
Re:ZERO -Starting Life in Another World- Season 2
Kidou Senshi Gundam: The Origin - Zenya Akai Suisei
Mobile Suit Gundam: The Origin - Advent of the Red Comet
Sword Art Online: Alicization - War of Underworld
Sword Art Online: Alicization - War of Underworld
ACCA: 13-ku Kansatsu-ka - Regards
ACCA: 13-Territory Inspection Department - Regards
BanG Dream! Film Live

Choujigen Game Neptune The Animation OVA
Hyperdimension Neptunia OVA
Mob Psycho 100: Dai Ikkai Rei toka Soudansho Ian Ryokou - Kokoro Mitasu Iyashi no Tabi
Mob Psycho 100 II: The Spirits and Such Consultation Office's First Company Outing ~A Healing Trip That Warms the Heart~
One Punch Man 2nd Season Commemorative Special
One Punch Man Season 2 Commemorative Special
Ling Long: Incarnation
Ling Cage
Hanhua Riji
God Troubles Me
D4DJ First Mix
D4DJ First Mix
One Punch Man 2nd Season Specials
One Punch Man Season 2 Specials
Houkago Teibou Nisshi
Diary of Our Days at the Breakwater
Violet Evergarden Gaiden: Eien to Jidou Shuki Ningyou
Violet Evergarden: Eternity and the Auto Memory Doll
Omoi, Omoware, Furi, Furare
Love Me, Love Me Not
Saezuru Tori wa Habatakanai: The Clouds Gather
Twittering Birds Never Fly
Meitantei Conan Movie 24: Hiiro no Dangan
Detective Conan Movie 24: The Scarlet Bullet
5-toubun no Hanayome ∬
The Quintessential Quintuplets 2
Adachi to Shimamura
Adachi and Shimamura
Eizouken ni wa Te wo Dasu na!
Keep Your Hands Off Eizouken!
Joshi Luck!

Mugen no Juunin: Immortal
Blade of the Immortal
Non Non Biyori Nonstop
Non Non Biyori Nonstop
Bokutachi wa Benkyou ga Dekinai: Nagisa ni Usemono Arite Senjin wa Enzen to [X] Suru
We Never Learn: BOKUBEN - The Predecessor [X] with Elegance with the Missing Item on the Beach
Junk Head

Umi no Yuurei

Hibike! Euphonium 3
Sound! Euphonium 3
Wan Jie Xian Zong 2nd Season
The Wonderland of Ten Thousands 2nd Season
Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow - Manner Movie
Re:ZERO -Starting Life in Another World- Memory Snow: Manner Movie
Inu-Ou
Inu-Oh
Shokugeki no Souma: Shin no Sara
Food Wars! The Fourth Plate
Ani ni Tsukeru Kusuri wa Nai! 3

Mayonaka no Occult Koumuin: Hitoribocchi no Kyuuketsuki/Sakura no Mori no Mankai no Shita
Midnight Occult Civil Servants: Lonely Vampire/Beneath the Cherry Tree Forest in Full Bloom
Isekai Quartet 2
Isekai Quartet 2
Yamiyo
Yamiyo
Super Senko-san Time Episode 12

Bokutachi wa Benkyou ga Dekinai!
We Never Learn: BOKUBEN Season 2
Quanzhi Fashi IV
Full-Time Magister 4th Season
Ishuzoku Reviewers
Interspecies Reviewers
Lovely ♡
Lovely Aina-chan
Bishoujo Senshi Sailor Moon Eternal Movie 1
Pretty Guardian Sailor Moon Eternal The Movie Part 1
Shingeki no Kyojin: The Final Season
Attack on Titan: Final Season
Doraemon Movie 40: Nobita no Shin Kyouryuu
Doraemon the Movie 2020: Nobita's New Dinosaur
Id:Invaded
ID: INVADED
Great Pretender

Deca-Dence

Golden Kamuy 3rd Season
Golden Kamuy Season 3
BNA
BNA: Brand New Animal
Ling Jian Zun 2nd Season

Quanzhi Gaoshou: Dianfeng Rongyao
The King's Avatar: For the Glory
Lupin III: The First
Lupin III: The First
Nu Wushen de Canzhuo
Cooking with Valkyries
Soukyuu no Fafner: Dead Aggressor - The Beyond Part 2

Nezha Zhi Mo Tong Jiang Shi
Ne Zha
Arte
Arte
Mahoutsukai no Yome: Gakuin-hen
The Ancient Magus' Bride: School Arc PV
Zombieland Saga Revenge
Zombie Land Saga Revenge
Gundam Build Divers Re:Rise
GUNDAM BUILD DIVERS Re:RISE
Fate/Grand Order: Zettai Majuu Sensen Babylonia - Initium Iter
Fate/Grand Order: Absolute Demonic Front - Babylonia Initium Iter
Luo Xiao Hei Zhan Ji (Movie)
The Legend of Hei
Aggressive Retsuko (ONA) 3rd Season
Aggretsuko (ONA) 3rd Season
Kami no Tou
Tower of God
Housekishou Richard-shi no Nazo Kantei
The Case Files of Jeweler Richard
Mitaiken Horizon

Love Live! School Idol Festival All Stars

Haikyuu!! Riku vs. Kuu
Haikyu!! Land vs. Air
Aikatsu on Parade!

Kengan Ashura Part 2

A3! Season Autumn & Winter
A3! Season Autumn & Winter
Another World

Promare: Lio-hen

Sekaiichi Hatsukoi: Propose-hen

Gintama: Monster Strike-hen

Mewkledreamy

Crayon Shin-chan Movie 28: Gekitotsu! Rakuga Kingdom to Hobo Yonin no Yuusha

Ongaku
On-Gaku: Our Sound
Love x Holic: Miwaku no Otome to Hakudaku Kankei - The Animation

Aibeya The Animation

Pokemon (2019)
Pokémon Journeys: The Series
Tate no Yuusha no Nariagari Season 3
The Rising of the Shield Hero Season 3
Haikyuu!! (OVA)

Uchuu Senkan Yamato 2205: Aratanaru Tabidachi
Star Blazers: Space Battleship Yamato 2205
Runway de Waratte
Smile Down the Runway
Maoujou de Oyasumi
Sleepy Princess in the Demon Castle
Date A Bullet: Dead or Bullet

Fruits Basket 2nd Season
Fruits Basket 2nd Season
Given Movie 1
given The Movie
Bishoujo Senshi Sailor Moon Eternal Movie 2
Pretty Guardian Sailor Moon Eternal The Movie Part 2
Mo Dao Zu Shi: Wanjie Pian
The Master of Diabolism 3
Mo Dao Zu Shi Q
The Master of Diabolism Q
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III
Is It Wrong to Try to Pick Up Girls in a Dungeon? III
Kimetsu no Yaiba Movie: Mugen Ressha-hen
Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train
Boku to Joi no Shinsatsu Nisshi The Animation

Gwahoheub
Hyperventilation
Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou
The Misfit of Demon King Academy
Mahouka Koukou no Rettousei: Raihousha-hen
The Irregular at Magic High School: Visitor Arc
Major 2nd 2nd Season

Arifureta Shokugyou de Sekai Saikyou 2nd Season
Arifureta: From Commonplace to World's Strongest Season 2
Nami yo Kiitekure
Wave, Listen to Me!
No Guns Life 2nd Season
No Guns Life Season 2
Jaku-Chara Tomozaki-kun
Bottom-Tier Character Tomozaki
Appare-Ranman!
Appare-Ranman!
Sword Art Online: Alicization - War of Underworld 2nd Season
Sword Art Online: Alicization - War of Underworld Part 2
Saiki Kusuo no Ψ-nan: Ψ-shidou-hen
The Disastrous Life of Saiki K.: Reawakened
Raison d'être
raison d’etre
Majo no Tabitabi
Wandering Witch: The Journey of Elaina
Precure Miracle Leap Movie: Minna to no Fushigi na Ichinichi

Utawarerumono: Futari no Hakuoro
Utawarerumono: Mask of Truth
Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen
Kaguya-sama: Love is War?
7 Seeds 2nd Season

Umibe no Étranger
The Stranger by the Shore
Uramichi Oniisan
Life Lessons with Uramichi-Oniisan
Saga Incident

Yes ka No ka Hanbun ka
Yes, No, or Maybe?
Girls & Panzer: Saishuushou Part 2 Specials

** Kouhai
Assisted Mating
Jashin-chan Dropkick': Chitose-hen
Dropkick on My Devil!! Dash Episode 12 – Chapter Chitose
Shoujo☆Kageki Revue Starlight Movie
Revue Starlight: The Movie
Shoujo☆Kageki Revue Starlight: Rondo Rondo Rondo

Kingdom 3rd Season
Kingdom: Season 3
Super Cub
Super Cub
Kakushigoto
Kakushigoto
Nomad: Megalo Box 2
Megalobox 2: Nomad
Tian Guan Cifu
Heaven Official's Blessing
Shaonian Ge Xing: Feng Hua Xue Yue Pian Part 1

Zhen Hun Jie: Bei Luo Shi Men Pian Part 1
Rakshasa Street
Yao Shen Ji 4th Season

Tianbao Fuyao Lu
Legend of Exorcism
Overflow
Overflow
Jujutsu Kaisen
Jujutsu Kaisen
Bishounen Tanteidan
Pretty Boy Detective Club
Show By Rock!! Mashumairesh!!
SHOW BY ROCK!! Mashumairesh!!
Haikyuu!! To the Top Part 2
Haikyu!! To the Top 2nd-cour
Planetarian: Snow Globe

Wu Liuqi: Zui Qiang Fa Xing Shi
Scissor Seven (2019)
Josee to Tora to Sakana-tachi
Josee, the Tiger and the Fish
Seitokai Yakuindomo Movie 2

Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season
Ascendance of a Bookworm Season 2
Onnanoko ni Naritai
I wanna be a girl
Inu to Neko Docchi mo Katteru to Mainichi Tanoshii
With a Dog AND a Cat, Every Day is Fun
Ousama Ranking
Ranking of Kings
Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen OVA
Ascendance of a Bookworm: Side Story
Idoly Pride
Idoly Pride
Dr. Stone: Stone Wars

Stand By Me Doraemon 2

BanG Dream! Garupa☆Pico: Oomori

Psycho-Pass 3: First Inspector

Hakumei no Tsubasa
Pokémon: Twilight Wings
SSSS.Dynazenon
SSSS.Dynazenon
Love Live! Nijigasaki Gakuen School Idol Doukoukai
Love Live! Nijigasaki High School Idol Club
Kiratto Pri☆chan Season 3

Pokemon Movie 23: Koko
Pokémon the Movie: Secrets of the Jungle
Can Ci Pin: Fangzhu Xingkong
The Defective
Mr.AFFECTiON
Mr. Affection
Shokugeki no Souma: Gou no Sara
Food Wars! The Fifth Plate
Bokutachi no Remake
Remake Our Life!
Dragon Quest: Dai no Daibouken (2020)
Dragon Quest: The Adventure of Dai
World Trigger 2nd Season
World Trigger 2nd Season
Kemono Jihen
Kemono Jihen
Wan Jie Xian Zong 3rd Season
The Wonderland of Ten Thousand 3rd Season
Yuukoku no Moriarty
Moriarty the Patriot
Aishite Aishite Aishite
Love Me Love Me Love Me
Azur Lane: Bisoku Zenshin!
Azur Lane: Slow Ahead!
Beastars 2nd Season

Ore wo Suki nano wa Omae dake ka yo: Oretachi no Game Set
ORESUKI Are you the only one who loves me? - Our Playball / Our End Run / Our Game
Hige wo Soru. Soshite Joshikousei wo Hirou.
Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway
Gundam Build Divers Re:Rise 2nd Season
GUNDAM BUILD DIVERS Re:RISE
Enen no Shouboutai: Ni no Shou
Fire Force Season 2
Ling Jian Zun 3rd Season

Kuma Kuma Kuma Bear
Kuma Kuma Kuma Bear
Xue Ying Ling Zhu Zhi Qi Yu Pian

Higurashi no Naku Koro ni Gou
Higurashi: When They Cry – Gou
Fumetsu no Anata e
To Your Eternity
Jie Yao
Antidote
Dorohedoro: Ma no Omake
Dorohedoro: Bonus Curse or Extra Evil
Heya Camp△: Sauna to Gohan to Sanrin Bike
Room Camp: Saunas and Grub and Three-Wheeler Bikes
Made in Abyss: Retsujitsu no Ougonkyou
Made in Abyss: The Golden City of the Scorching Sun
Xian Wang de Richang Shenghuo
The Daily Life of the Immortal King
Re-raise
Re-raise
Koi to Yobu ni wa Kimochi Warui
Koikimo
Log Horizon: Entaku Houkai
Log Horizon: Destruction of the Round Table
Fugou Keiji: Balance:Unlimited
The Millionaire Detective – Balance: Unlimited
Tokyo Autumn Session
Tokyo Autumn Session
Princess Principal: Crown Handler Movie 2
Princess Principal: Crown Handler - Chapter 2
Princess Principal: Crown Handler Movie 3
Princess Principal: Crown Handler - Chapter 3
Ruru-chan no Jisatsu Haishin
Ruru's Suicide Show on a Livestream
Nakitai Watashi wa Neko wo Kaburu
A Whisker Away
Love Live! Superstar!!
Love Live! SuperStar!!
Hitchcock

Dakara Boku wa Ongaku wo Yameta
That's Why I Gave Up on Music
Kokoro Yohou
Heart Forecast
Kokoro Magic "A to Z"

Xi Xing Ji: Jijie Pian
The Westward 2nd Season
Fanren Xiu Xian Chuan

Huo Feng Liao Yuan
The Ravages of Time
Liang Bu Yi
No Doubt In Us
Bai Yao Pu
Fairies Albums
Uzaki-chan wa Asobitai!
Uzaki-chan Wants to Hang Out!
Yarichin Kateikyoushi Netori Houkoku

Ane wa Yanmama Junyuu-chuu

Bessatsu Olympia Kyklos
Extra Olympia Kyklos
Saezuru Tori wa Habatakanai: Don't Stay Gold
Twittering Birds Never Fly: Don't Stay Gold
Kami-tachi ni Hirowareta Otoko
By the Grace of the Gods
A song for You! You? You!!

The God of High School
The God of High School
Eiga Daisuki Pompo-san
Pompo: The Cinéphile
Tonikaku Kawaii
Tonikawa: Over The Moon For You
Mairimashita! Iruma-kun 2nd Season
Welcome to Demon School! Iruma-kun Season 2
Wushen Zhuzai
The God of War Dominates
Akudama Drive
Akudama Drive
Sentouin, Haken shimasu!
Combatants Will Be Dispatched!
86
86 Eighty-Six
Date A Live IV
Date A Live IV
BanG Dream! Film Live 2nd Stage

Bleach: Sennen Kessen-hen
Bleach: Thousand-Year Blood War
Burn the Witch

Kiniro Mosaic: Thank You!!
Kinmoza! The Movie: Thank You!!
Tensei shitara Slime Datta Ken 2nd Season Part 2
That Time I Got Reincarnated as a Slime Season 2 Part 2
Tensura Nikki: Tensei shitara Slime Datta Ken
The Slime Diaries
Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon
Fate/Grand Order: Final Singularity - Grand Temple of Time: Solomon
Ma La Nu Pei
Spicy Girl
Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2
BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. Season 2
Show by Rock!! Stars!!

Xingchen Bian: Yu Li Cang Hai

Magia Record: Mahou Shoujo Madoka☆Magica Gaiden 2nd Season - Kakusei Zenya
Magia Record: Puella Magi Madoka Magica Side Story Season 2 - The Eve of Awakening
Maiko-san Chi no Makanai-san
Kiyo in Kyoto: From the Maiko House
Isekai Quartet Movie: Another World

Boku no Hero Academia 5th Season
My Hero Academia Season 5
Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna - Manner Movie
Re:ZERO -Starting Life in Another World- The Frozen Bond: Manner Movie
Tiger & Bunny 2

Wan Sheng Jie
All Saints Street
Munou na Nana
Talentless Nana
Aria the Crepuscolo

Hataraku Saibou Black
Cells at Work! CODE BLACK!
Genjitsu Shugi Yuusha no Oukoku Saikenki
How a Realist Hero Rebuilt the Kingdom
Soukyuu no Fafner: Dead Aggressor - The Beyond Part 3

Tenchi Souzou Design-bu
Heaven's Design Team
BanG Dream! Movie: Episode of Roselia - I: Yakusoku

BanG Dream! Movie: Episode of Roselia - II: Song I Am.

BanG Dream! Movie: Poppin' Dream!
BanG Dream! Poppin'Dream!
Ze Tian Ji 5th Season

Soukyuu no Fafner: Dead Aggressor - The Beyond Part 4

Kyuuketsuki Sugu Shinu
The Vampire Dies in No Time
Shin Tennis no Oujisama: Hyoutei vs. Rikkai - Game of Future
The New Prince of Tennis: Hyoutei vs. Rikkai - Game of Future
Isekai Harem Monogatari

Ling Jian Zun 4th Season

You Yao
Are You OK?
Juan Siliang
The Island of Siliang
Yi Nian Yong Heng
A Will Eternal
Halzion

Fate/kaleid liner Prisma☆Illya Movie: Licht - Namae no Nai Shoujo
Fate/kaleid Liner Prisma Illya: Licht Nameless Girl
Succubus Stayed Life The Animation

Inochi no Tabekata
How to Eat Life
Shingeki no Kyojin: Chronicle
Attack on Titan: Chronicle
Jiang Ziya
Jiang Ziya
Poketoon
Pokétoon
Arknights
Arknights
Violet Evergarden CMs

Huyao Xiao Hongniang: Jin Chenxi

Wu Shang Shen Di

Edens Zero
Edens Zero
Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2
Re:ZERO -Starting Life in Another World- Season 2 Part 2
Nu Wushen de Canzhuo II
Cooking with Valkyries II
Ani ni Tsukeru Kusuri wa Nai! 4

Tokyo Revengers
Tokyo Revengers
Bungou Stray Dogs Wan!
Bungo Stray Dogs Wan!
Wu Dong Qian Kun 2nd Season
Martial Universe 2nd Season
Dubu Xiaoyao

Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... X
My Next Life as a Villainess: All Routes Lead to Doom! X
Yuan Long
Carp Reborn
Ling Long: Incarnation Part 2
Ling Cage
Cyberpunk: Edgerunners

Meikyuu Black Company
The Dungeon of Black Company
Ame wo Matsu,
Waiting for Rain
Senpai ga Uzai Kouhai no Hanashi
My Senpai is Annoying
Zhen Hun Jie: Bei Luo Shi Men Pian Part 2
Rakshasa Street
Ijiranaide, Nagatoro-san
Don't Toy with Me, Miss Nagatoro
Re:Zero kara Hajimeru Break Time 2nd Season
Re:ZERO ~Starting Break Time From Zero~ Season 2
Hataraku Saibou!! Saikyou no Teki, Futatabi. Karada no Naka wa "Chou" Oosawagi!
Cells at Work!! The Return of the Strongest Enemy. A Huge Uproar in the Body’s Bowels!
Osomatsu-san 3rd Season
Mr. Osomatsu 3
Shakunetsu Kabaddi
Burning Kabaddi
Healin' Good♡Precure Movie: Yume no Machi de Kyun! Tto GoGo! Daihenshin!!

Date A Bullet: Nightmare or Queen

Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season
Ascendance of a Bookworm Season 3
Yeon-ae Halujeon Zero
A Day Before Us Zero
Bokutachi wa Benkyou ga Dekinai! Chapel no Kane wa [X] wo Shukufuku Suru
We Never Learn: BOKUBEN - The Church Bells Bless [X]
Kaizoku Oujo
Fena: Pirate Princess
Yuuki Yuuna wa Yuusha de Aru: Dai Mankai no Shou
Yuki Yuna is a Hero: The Great Mankai Chapter
Mashiro no Oto
Those Snow White Notes
Boku no Hero Academia: Ikinokore! Kesshi no Survival Kunren
My Hero Academia: Make It! Do-or-Die Survival Training
Heion Sedai no Idaten-tachi
The Idaten Deities Know Only Peace
Yeon-ae Halujeon 2
A Day Before Us 2
Yeon-ae Halujeon
A Day Before Us
Wan Sheng Jie 2
All Saints Street 2
Taisou Zamurai
The Gymnastics Samurai
Princess Connect! Re:Dive Season 2

Machikado Mazoku: 2-choume
The Demon Girl Next Door 2
Kono Sekai no Tanoshimikata: Secret Story Film

Dazzling White Town
Dazzling White Town
Sayonara Watashi no Cramer Movie: First Touch
Farewell, My Dear Cramer Movie: First Touch
Kai Byoui Ramune
Dr. Ramune -Mysterious Disease Specialist-
Seijo no Maryoku wa Bannou desu
The Saint's Magic Power is Omnipotent
Ai no Utagoe wo Kikasete
Sing a Bit of Harmony
Ginga Eiyuu Densetsu: Die Neue These - Gekitotsu
Legend of the Galactic Heroes: Die Neue These - Collision
Muteki-kyuu*Believer / Mirai Harmony

Natsume Yuujinchou: Ishi Okoshi to Ayashiki Raihousha
Natsume's Book of Friends: The Waking Rock and the Strange Visitor
Horimiya
Horimiya
Wan Jie Xian Zong 4th Season
The Wonderland of Ten Thousand 4th Season
My Little Goat
My Little Goat
Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria
Sword Art Online the Movie: Progressive - Aria of a Starless Night
SK∞
SK8 the Infinity
Fruits Basket: The Final
Fruits Basket: The Final Season
Hanma Baki: Son of Ogre
Baki Hanma
Uma Musume: Pretty Derby Season 2

Wo Jia Da Shixiong Shi Ge Fanpai
What's Wrong with My Big Brother
Hanhua Riji 2nd Season
God Troubles Me 2nd Season
Uzaki-chan wa Asobitai! Double
Uzaki-chan Wants to Hang Out! Season 2
Gotcha!

Ling Long: Incarnation Middle Chapter
Ling Cage
Jashin-chan Dropkick X
Dropkick On My Devil!! X
Wonder Egg Priority
Wonder Egg Priority
Yuukoku no Moriarty Part 2
Moriarty the Patriot Part 2
Sekikashita Kusanagi
Snickers x Dr. Stone
Shadows House
Shadows House
Ijirare: Fukushuu Saimin

Rikei ga Koi ni Ochita no de Shoumei shitemita. Heart
Science Fell in Love, So I Tried to Prove It r=1-sinθ
Leo
Leo
Tsuki ga Michibiku Isekai Douchuu
Tsukimichi -Moonlit Fantasy-
Dr. Stone: Stone Wars - Kaisen Zenya Special Eizou
Dr. Stone: Stone Wars Eve of the Battle Special Feature
Tsurune Movie: Hajimari no Issha
Tsurune the Movie: The First Shot
Yakusoku (2020)
Promise
Kaguya-sama wa Kokurasetai: Ultra Romantic
Kaguya-sama: Love is War -Ultra Romantic-
Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen OVA
Kaguya-sama: Love is War OVA
Boku no Hero Academia the Movie 2: Heroes:Rising - Epilogue Plus - Yume wo Genjitsu ni
My Hero Academia: Heroes Rising - Epilogue Plus
Kageki Shoujo!!
Kageki Shojo!!
Gokushufudou
The Way of the Househusband
Thermae Romae Novae

Bakuten!!
Backflip!!
Obenkyou Shitoite yo
Study Me
Doraemon Movie 41: Nobita no Little Star Wars
Doraemon the Movie 2021: Nobita's Space War (Little Star Wars)
Holo no Graffiti
Holo Graffiti
Sasaki to Miyano
Sasaki and Miyano
Puparia
Puparia
Xin Shen Bang: Nezha Chongsheng
New Gods: Nezha Reborn
Liehuo Jiao Chou
Drowning Sorrows in Raging Fire
Dinghai Fusheng Lu
Dinghai Fusheng Records
Bai Yao Pu 2nd Season
Fairies Albums 2
Tianbao Fuyao Lu 2nd Season
Legend of Exorcism
Xian Wang de Richang Shenghuo 2
The Daily Life of the Immortal King 2
Tian Guan Cifu Special
Heaven Official's Blessing Special
Yuan Long 2nd Season
Carp Reborn 2nd Season
Shiguang Dailiren
Link Click
Prayer X

Gintama: The Semi-Final

Ling Long: Incarnation Final Chapter

Watashi ni Tenshi ga Maiorita! Precious Friends
Wataten! An Angel Flew Down to Me: Precious Friends
Tropical-Rouge! Precure
Tropical-Rouge! Pretty Cure
Shanhe Jian Xin
Thousand Autumns
Boku no Hero Academia the Movie 3: World Heroes' Mission
My Hero Academia: World Heroes' Mission
Seirei Gensouki
Seirei Gensouki: Spirit Chronicles
Kyokou Suiri Season 2
In/Spectre 2
Shenhai
Deep Sea
Tunshi Xingkong
Swallowed Star
Xie Wang Zhui Qi: Yishi Qingcheng
Be My Wife
Pui Pui Molcar

Fate/Grand Carnival
Fate/Grand Carnival
Selection Project

Idol Land PriPara

Biao Ren: Blades of the Guardians
Blades of the Guardians
Zi Chuan
Purple River
Da Wang Rao Ming
Spare Me, Great Lord!
Shinkai (2020)

Long Zu
Dragon Raja -The Blazing Dawn-
Shi Ye Miao Yin

Doupo Cangqiong 4th Season
Fights Break Sphere 4th Season
Chainsaw Man
Chainsaw Man
Kakushigoto Movie

Crayon Shin-chan Movie 29: Nazo Meki! Hana no Tenkasu Gakuen
Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkazu Academy
Ryuu to Sobakasu no Hime
Belle
Tonikaku Kawaii: SNS
Tonikawa: Over The Moon For You - SNS
World Trigger 3rd Season

Taishou Otome Otogibanashi
Taisho Otome Fairy Tale
Wan Jie Fa Shen
God of Ten Thousand Realms
Slow Loop
Slow Loop
Kuma Kuma Kuma Bear Punch!

Aggressive Retsuko (ONA) 4th Season
Aggretsuko (ONA) 4th Season
Wu Liuqi: Xuanwu Guo Pian
Scissor Seven (2021)
Fanren Xiu Xian Chuan: Yan Jia Bao Dazhan

Holy Knight Light

Mushoku Tensei: Isekai Ittara Honki Dasu Part 2
Mushoku Tensei: Jobless Reincarnation Part 2
IDOLiSH7 Third Beat!
IDOLISH7 Third BEAT!
Tonikaku Kawaii: Kaisou
TONIKAWA: Over The Moon For You - Flashbacks
Xue Ying Ling Zhu 2nd Season

Gyokou no Nikuko-chan
Fortune Favors Lady Nikuko
The First Slam Dunk

Soredemo Ayumu wa Yosetekuru
When Will Ayumu Make His Move?
D4DJ Petit Mix
D4DJ Petit Mix
Shiroi Suna no Aquatope
The Aquatope on White Sand
Vivy: Fluorite Eye's Song
Vivy -Fluorite Eye's Song-
Odd Taxi
Odd Taxi
Blue Period
Blue Period
Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi
The Seven Deadly Sins the Movie 2: Cursed By Light
Niehime to Kemono no Ou
Sacrificial Princess and the King of Beasts
Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan: Dakara, Shishunki wa Owarazu ni, Seishun wa Tsuzuiteiku.
My Teen Romantic Comedy SNAFU Climax! OVA
Jigokuraku
Hell's Paradise
Tenchi Souzou Design-bu: Idea 13
Heaven's Design Team: Idea 13
IDOLiSH7 Third Beat! Part 2
IDOLiSH7 Third BEAT! Part 2
Xing Wushen Jue

Tensai Ouji no Akaji Kokka Saisei Jutsu
The Genius Prince's Guide to Raising a Nation Out of Debt
Goblin Slayer II

Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen
Is It Wrong to Try to Pick Up Girls in a Dungeon? IV
Summertime Render
Summer Time Rendering
Shinigami Bocchan to Kuro Maid
The Duke of Death and His Maid
Shin Gengou Nyankogelion

Kaibutsu
Monster (Music)
Heikousen
Gift
Wanmei Shijie
Perfect World
Gekijou Tanpen Macross Frontier: Toki no Meikyuu
Macross Frontier: Labyrinth of Time
Initial D Battle Stage 3
Initial D Battle Stage 3
Meitantei Conan: Hiiro no Fuzai Shoumei
Detective Conan: The Scarlet Alibi
Nu Wushen de Canzhuo Spring Festival Special
Cooking with Valkyries Spring Festival Special
Toku: Touken Ranbu - Hanamaru - Setsugetsuka
Touken Ranbu - Hanamaru Season 3
Kimetsu no Yaiba: Yuukaku-hen
Demon Slayer: Kimetsu no Yaiba Entertainment District Arc
Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru
The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat
MILGЯAM
MILGRAM
Hololive Alternative

Bocchi the Rock!
Bocchi the Rock!
Xian Yu Ge
Salted Fish
Summer Ghost

Red Shoes
Red Shoes and the Seven Dwarfs
Kage no Jitsuryokusha ni Naritakute!
The Eminence in Shadow
Mahouka Koukou no Rettousei: Tsuioku-hen
The Irregular at Magic High School: Reminiscence Arc
Totsukuni no Shoujo (2022)
The Girl From the Other Side
Re-Main
Re-Main
Aria the Benedizione

Sabikui Bisco
Sabikui Bisco
Kitarou Tanjou: Gegege no Nazo
The Birth of Kitaro: The Mystery of GeGeGe
Mahoutsukai no Yome: Nishi no Shounen to Seiran no Kishi
The Ancient Magus' Bride: The Boy from the West and the Knight of the Blue Storm
Super Crooks
Super Crooks
Uchi no Otouto Maji de Dekain Dakedo Mi ni Konai?
My Younger Brother is Really Big, Wanna Come See?
Tsuki to Laika to Nosferatu
Irina: The Vampire Cosmonaut
Mieruko-chan

Yama no Susume: Next Summit
Encouragement of Climb: Next Summit
Hanyou no Yashahime: Sengoku Otogizoushi - Ni no Shou
Yashahime: Princess Half-Demon: The Second Act
Shi Yi Chang An: Mingyue Jishi You Er
Memory of Chang'an 2nd Season
Do It Yourself!!
Do It Yourself!!
5-toubun no Hanayome Movie
The Quintessential Quintuplets Movie
Dr. Stone: New World

Akebi-chan no Sailor-fuku
Akebi's Sailor Uniform
Yasashii Suisei
Comet
Takt Op. Destiny
Takt Op. Destiny
Jujutsu Kaisen 0 Movie
Jujutsu Kaisen 0
86 Part 2
86 Eighty-Six Part 2
Uta no☆Prince-sama♪ Movie: Maji Love ST☆RISH Tours

Vanitas no Karte
The Case Study of Vanitas
Shingeki no Kyojin: The Final Season Part 2
Attack on Titan: Final Season Part 2
Black Clover: Mahou Tei no Ken
Black Clover: Sword of the Wizard King
Mini Dragon
Miss Kobayashi's Dragon Maid S Short Animation Series
Journey: Taiko Arabia Hantou de no Kiseki to Tatakai no Monogatari
The Journey
Re:cycle of the Penguindrum

J* Fuuzoku Gakuensai

Obey Me!
Obey Me!
Koi wa Sekai Seifuku no Ato de
Love After World Domination
Fuuto Tantei
Fuuto PI
Sakusei Byoutou The Animation
Semen Extraction Ward
Yoru ni Kakeru
Racing into the Night
JoJo no Kimyou na Bouken Part 6: Stone Ocean
JoJo's Bizarre Adventure: Stone Ocean
Wan Jie Du Zun
Ten Thousand Worlds
Eroge de Subete wa Kaiketsu Dekiru! The Animation
Eroge Can Solve Everything! The Animation
Dance Dance Danseur
Dance Dance Danseur
Gokushufudou Part 2
The Way of the Househusband Part 2
Yoru no Kuni

Chibi Revenger

Sono Bisque Doll wa Koi wo Suru
My Dress-Up Darling
Jahy-sama wa Kujikenai!
The Great Jahy Will Not Be Defeated!
Imaizumin Chi wa Douyara Gal no Tamariba ni Natteru Rashii
Imaizumi Brings All the Gyarus to His House
Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu
Skeleton Knight in Another World
Kaginado
Kaginado
Deaimon
Deaimon: Recipe for Happiness
Dakaretai Otoko 1-i ni Odosarete Imasu. Movie: Spain-hen
DAKAICHI -I'm being harassed by the sexiest man of the year- the Movie: Spain Arc
Luo Xiao Hei Zhan Ji: Zhongsheng Zhi Men
The Legend of Luoxiaohei: The Gate of All Living Beings
Isekai Shokudou 2
Restaurant to Another World 2
Blue Archive PVs

Free! Movie 5: The Final Stroke - Kouhen
Free! the Final Stroke: The Second Volume
Li Linke de Xiao Guaner
The Dining of Link Lee
Sonny Boy
Sonny Boy
Healer Girl
Healer Girl
Shaonian Bai Ma Zui Chun Feng
The Young Brewmaster's Adventure
Yoru wa Honoka
Night is Faint
Ling Long: Incarnation Special

Overlord IV
Overlord IV
Overlord Movie 3: Sei Oukoku-hen
Overlord: The Sacred Kingdom
Dragon Ball Super: Super Hero
Dragon Ball Super: Super Hero
Love Live! Nijigasaki Gakuen School Idol Doukoukai 2nd Season
Love Live! Nijigasaki High School Idol Club Season 2
Komi-san wa, Comyushou desu.
Komi Can't Communicate
Quanzhi Fashi V
Full-Time Magister 5th Season
Haru Dorobou
Spring Thief
Twisted-Wonderland 1-shuunen Kinen PV
Twisted-Wonderland 1st Anniversary PV
Natsume Yuujinchou: Hitoyoshi Kuma de no Yasashii Jikan
Natsume's Book of Friends: A Day Out in Hitoyoshi Kuma
Wu Shang Shen Di 2nd Season

Xie Wang Zhui Qi 3: Shen Nu Guilai

You Yao 2
Are You OK? Season 2
Shen Lan Qi Yu Wushuang Zhu
The Land of Miracles
Fantasy Bishoujo Juniku Ojisan to
Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout
Jashin Shoukan: Inran Kyonyuu Oyako Ikenie Gishiki
The Courtesan's Palace of Wicked Conception: A Busty Mother-Daughter Sacrificial Ritual
Yuru Camp△ Season 2 Specials
Laid-Back Camp Season 2 Specials
Lupin III: Part 6
Lupin the Third Part 6
Ao Ashi
Aoashi
Given: Uragawa no Sonzai
given - on the other hand
Ensemble Stars!! 5th Anniversary Animation PV

Artiswitch

Kidou Senshi Gundam SEED Freedom
Mobile Suit Gundam SEED Freedom
Vanitas no Karte Part 2
The Case Study of Vanitas Part 2
BanG Dream! Garupa☆Pico Fever!

RabbiTube: Creator ni Challenge!

High Card
High Card
Shachiku-san wa Youjo Yuurei ni Iyasaretai.
Miss Shachiku and the Little Baby Ghost
Shiguang Dailiren Fanwai Pian: Biwu Zhaoqin
Link Click Episode 5.5
Semantic Error

Isekai Ojisan
Uncle from Another World
Youjo Senki: Sabaku no Pasta Daisakusen
Saga of Tanya the Evil: Operation Desert Pasta
Vivy: Fluorite Eye's Song - To Make Everyone Happy With My Singing

Hua Jianghu: Bu Liang Ren IV

Renou Xueyuan
Elf Academy
Bakuten!! Movie
Backflip!! Movie
Waccha PriMagi!
Waccha PriMagi!
Alice to Therese no Maboroshi Koujou
Maboroshi
Wan Jie Xian Zong 5th Season
The Wonderland of Ten Thousand 5th Season
Fruits Basket: Prelude

Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2
That Time I Got Reincarnated as a Slime Season 2: Tales - Veldora's Journal 2
Meitantei Conan Movie 25: Halloween no Hanayome
Detective Conan Movie 25: The Bride of Halloween
Hakuouki OVA (2021)

Goodbye, Don Glees!
Goodbye, Don Glees!
Star Wars: Visions
Star Wars: Visions
Lord El-Melloi II-sei no Jikenbo: Rail Zeppelin Grace Note Special
Lord El-Melloi II's Case Files: Rail Zeppelin Grace Note - Waver, Reunion, and the Magic Lantern
SK∞ OVA: Extra Part
SK8 the Infinity Extra Part
Mou Ippon!
"Ippon" again!
Xingchen Bian: Xingchen Yao Hai

Vinland Saga Season 2
Vinland Saga Season 2
Bai She II: Qing She Jie Qi
White Snake 2: The Tribulation of the Green Snake
Shiguang Dailiren II
Link Click Season 2
Sangenshoku
RGB
Mignon

Isekai Yakkyoku
Parallel World Pharmacy
Ni Tian Zhizun
Against The Sky Supreme
Kono Subarashii Sekai ni Shukufuku wo! 3
KonoSuba: God's Blessing on This Wonderful World! 3
Beastars Final Season

Mini Dragon Specials
Miss Kobayashi's Dragon Maid S Short Animation Series
Hakozume: Kouban Joshi no Gyakushuu
Police in a Pod
Aharen-san wa Hakarenai
Aharen-san wa Hakarenai
Non Non Biyori Nonstop: Bukatsu wo Ganbatta
Non Non Biyori Nonstop: Our Club Worked Hard
Onaho Kyoushitsu: Joshi Zenin Ninshin Keikaku - The Animation
Onahole Classroom
Quanzhi Gaoshou 3
The King's Avatar 3
Xue Ying Ling Zhu 3rd Season

Wu Dong Qian Kun 3rd Season
Martial Universe 3rd Season
Tunshi Xingkong 2nd Season
Swallowed Star 2nd Season
Quanzhi Fashi VI
Full-Time Magister 6th Season
Ya She
YaShe
Yi Nian Yong Heng: Chuan Cheng Pian
A Will Eternal 2nd Season
Wan Sheng Jie 3
All Saints Street 3
Yojouhan Time Machine Blues
The Tatami Time Machine Blues
Blue Lock
Blue Lock
Ani ni Tsukeru Kusuri wa Nai! 5

Chiyu Mahou no Machigatta Tsukaikata
The Wrong Way to Use Healing Magic
Shuumatsu no Walküre II
Record of Ragnarok II
Shingeki no Kyojin: The Final Season Specials
Attack on Titan: Chibi Theater - Survey Corps, The Final!
Voy@ger

Girls & Panzer: Saishuushou Part 3 Specials

Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto
Heroines Run the Show: The Unpopular Girl and the Secret Task
Doupo Cangqiong: San Nian Zhi Yue
Fights Break Sphere: Three Year Agreement
Fumetsu no Anata e Season 2
To Your Eternity Season 2
Karakai Jouzu no Takagi-san 3
Teasing Master Takagi-san 3
Karakai Jouzu no Takagi-san Movie
Teasing Master Takagi-san: The Movie
Pokemon Evolutions
Pokémon Evolutions
Yuukoku no Moriarty OVA
Moriarty the Patriot OVA
Heike Monogatari
The Heike Story
Xiuluo Wushen
Martial God Asura
Juedai Shuang Jiao
Legendary Twins
Obey Me!: Makai Dai Ryokou!

Zhu Xian
Jade Dynasty
Mama x Holic: Miwaku no Mama to Amaama Kankei - The Animation

Kumichou Musume to Sewagakari
The Yakuza's Guide to Babysitting
Kijin Gentoushou
Sword of the Demon Hunter: Kijin Gentosho
Shadows House 2nd Season
Shadows House 2nd Season
Mairimashita! Iruma-kun 3rd Season
Welcome to Demon School! Iruma-kun Season 3
Fairy Tail: 100-nen Quest
Fairy Tail: 100 Years Quest
Kidou Senshi Gundam: Cucuruz Doan no Shima
Mobile Suit Gundam: Cucuruz Doan's Island
Kidou Senshi Gundam: Suisei no Majo
Mobile Suit Gundam: The Witch from Mercury
Boku ga Aishita Subete no Kimi e
To Every You I've Loved Before
Kimi wo Aishita Hitori no Boku e
To Me, The One Who Loved You
Yuuseiboushi
Living Idly and Dying as if Dreaming
Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... Movie
My Next Life as a Villainess: All Routes Lead to Doom! Movie
Meng Qi Shi Shen: Zaijie Liangyuan
Cinderella Chef: Adorable Food Goddess
Shinigami Bocchan to Kuro Maid 2nd Season
The Duke of Death and His Maid Season 2
Unison

Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen
That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond
KU-RU-KU-RU Cruller!

Tsuki ga Michibiku Isekai Douchuu 2nd Season
Tsukimichi -Moonlit Fantasy- Season 2
Tensei shitara Ken deshita
Reincarnated as a Sword
Kobayashi-san Chi no Maid Dragon S: Nippon no Omotenashi - Attend wa Dragon desu
Miss Kobayashi's Dragon Maid S: Japanese Hospitality (The Attendant is a Dragon)
Kotarou wa Hitorigurashi
Kotaro Lives Alone
Boku no Hero Academia 6th Season
My Hero Academia Season 6
Kimetsu no Yaiba: Mugen Ressha-hen
Demon Slayer: Kimetsu no Yaiba Mugen Train Arc
Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2
How a Realist Hero Rebuilt the Kingdom Part 2
Ame wo Tsugeru Hyouryuu Danchi
Drifting Home
Shishunki no Obenkyou

Girls Rush The Animation

Gunjou Sanka

Akuyaku Reijou nanode Last Boss wo Kattemimashita
I'm the Villainess, So I'm Taming the Final Boss
Sugar Apple Fairy Tale

Edens Zero 2nd Season
Edens Zero Season 2
Meitantei Conan: Zero no Tea Time
Detective Conan: Zero's Tea Time
Ghost (Music)

Kuraku Kuroku
Darken
Tabun
Probably
Ano Yume wo Nazotte
Tracing that Dream
Yellow (Music)

Hajimari wa Kimi no Sora

Lupin III: Part 6 - Jidai
Lupin the Third Part 6: The Times
Kyoukaisen

Shiguang Zhaoxiangguan de Richang
Link Click: The Daily Life in Lightime
Yuan Zun
Dragon Prince Yuan
Kingdom 4th Season
Kingdom: Season 4
Anehame: Ore no Hatsukoi ga Jisshi na Wake ga Nai

Mob Psycho 100 III
Mob Psycho 100 III
Yuusha, Yamemasu
I'm Quitting Heroing
Blue Giant
Blue Giant
Ryman's Club
Salaryman's Club
Ijiranaide, Nagatoro-san 2nd Attack
Don't Toy with Me, Miss Nagatoro 2nd Attack
Love Live! Superstar!! 2nd Season
Love Live! Superstar!! Season 2
Arknights: Reimei Zensou
Arknights Animation: Prelude to Dawn
Fanren Xiu Xian Chuan 2nd Season
A Record of a Mortal's Journey to Immortality Season 2
Shine Post

Kyonyuu Elf Oyako Saimin

Da Li Si Rizhi 2nd Season
White Cat Legend Season 2
Birdie Wing: Golf Girls' Story
Birdie Wing: Golf Girls' Story
Chiikawa

Spy x Family

Tomodachi Game
Tomodachi Game
Yao Shen Ji 5th Season
Tales of Demons and Gods Season 5
Sword Art Online: Progressive Movie - Kuraki Yuuyami no Scherzo
Sword Art Online the Movie: Progressive - Scherzo of Deep Night
Kyuuketsuki Sugu Shinu 2
The Vampire Dies in No Time Season 2
Tonikaku Kawaii 2nd Season
Tonikawa: Over The Moon For You Season 2
Oz.

Kaguya-sama wa Kokurasetai: Ultra Romantic Teaser PV - Ishigami Yuu wa Kataritai
Kaguya-sama: Love is War - Ultra Romantic "Yu Ishigami Wants to Chat"
Bungou Stray Dogs 4th Season
Bungo Stray Dogs 4
Kunoichi Tsubaki no Mune no Uchi
In the Heart of Kunoichi Tsubaki
Kakegurui Twin
Kakegurui Twin
Yofukashi no Uta
Call of the Night
Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu
Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer
Paripi Koumei
Ya Boy Kongming!
Mononogatari
Malevolent Spirits: Mononogatari
Tian Guan Cifu Er
Heaven Official's Blessing Season 2
Hanhua Riji 3rd Season
God Troubles Me 3rd Season
Liang Bu Yi 2nd Season
No Doubt In Us 2nd Season
Xian Wang de Richang Shenghuo 3
The Daily Life of the Immortal King 3
Wu Shan Wu Xing: Xichuan Huan Zi Lin
Fog Hill of Five Elements
One Piece Film: Red
One Piece Film: Red
Ensemble Stars!! Road to Show!!

Skip to Loafer
Skip and Loafer
Fuufu Ijou, Koibito Miman.
More than a Married Couple, but Not Lovers.
Aiyou de Mishi
X&Y
Jun You Yun
Word of Honor
Yong Sheng
Immortality
Otome Game Sekai wa Mob ni Kibishii Sekai desu
Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs
Jiyi Guanli Ju
False Memory
Garden: Takamine-ke no Nirinka - The Animation

Golden Kamuy 4th Season
Golden Kamuy Season 4
Boku no Hero Academia the Movie 3: World Heroes' Mission - Tabidachi
My Hero Academia: World Heroes' Mission - Take-off
Bai Yao Pu 3rd Season
Fairies Albums 3
Long She Yanyi
Dragon's Disciple
Bubble
Bubble
Yowamushi Pedal: Limit Break

Yaneura no Rudger
The Imaginary
Crayon Shin-chan Movie 30: Mononoke Ninja Chinpuuden

Binghuo Mochu
The Magic Chef of Ice and Fire
Migi to Dali
Migi & Dali
Gridman Universe

Koukyuu no Karasu
Raven of the Inner Palace
Natsu e no Tunnel, Sayonara no Deguchi
The Tunnel to Summer, the Exit of Goodbyes
Suzume no Tojimari
Suzume
Aggressive Retsuko (ONA) 5th Season
Aggretsuko (ONA) 5th Season
Spy x Family Part 2

Tokyo Revengers: Seiya Kessen-hen
Tokyo Revengers: Christmas Showdown
Dr. Stone: Ryuusui
Dr. Stone: Ryusui
Rurouni Kenshin: Meiji Kenkaku Romantan (2023)
Rurouni Kenshin
Shaonian Ge Xing: Feng Hua Xue Yue Pian Part 2

Komi-san wa, Comyushou desu. 2nd Season
Komi Can't Communicate Season 2
Love Me: Kaede to Suzu The Animation
Love Me: Kaede and Suzu The Animation
Zhen Wu Dianfeng
The Peak of True Martial Arts
Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san
Endo and Kobayashi Live! The Latest on Tsundere Villainess Lieselotte
Poputepipikku 2nd Season
Pop Team Epic Season 2
Saihate no Paladin: Tetsusabi no Yama no Ou
The Faraway Paladin: The Lord of the Rust Mountains
Xingchen Bian: Po Tian Mi Ju

Bye Bye Rainy

Sasaki to Miyano: Koi ni Kizuku Mae no Chotto Shita Hanashi.
Sasaki and Miyano: A Tiny Episode from Before He Realized His Feelings
Kaginado Season 2
KAGI-NADO
Summer Pockets
Summer Pockets
MF Ghost

Lycoris Recoil
Lycoris Recoil
Urusei Yatsura (2022)
Urusei Yatsura
Mahouka Koukou no Rettousei 3rd Season
The Irregular at Magic High School Season 3
Coruscate: DNA

Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken
The Angel Next Door Spoils Me Rotten
Vanitas no Karte: Le Chemin Parcouru Depuis la Rencontre

My Song

Kimi wa Houkago Insomnia
Insomniacs After School
Jaku-Chara Tomozaki-kun 2nd Stage
Bottom-Tier Character Tomozaki 2nd Stage
New Initial D Movie: Battle Digest

Benriya Saitou-san, Isekai ni Iku
Handyman Saitou in Another World
Yamato yo, Towa ni: Rebel 3199
Star Blazers: Space Battleship Yamato 3199
Prima Doll
Prima Doll
Zhu Tian Ji
Thousands of worlds
Saikyou Onmyouji no Isekai Tenseiki
The Reincarnation of the Strongest Exorcist in Another World
Jujutsu Kaisen 2nd Season
Jujutsu Kaisen Season 2
Piplup Step

Kimetsu no Yaiba: Katanakaji no Sato-hen
Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc
Helck
Helck
Doupo Cangqiong: Yuanqi
Fights Break Sphere: Origin
Doupo Cangqiong: Nian Fan

Kuro no Shoukanshi
Black Summoner
Manga "Bakemonogatari" Shaft Seisaku Tokubetsu PV
Bakemonogatari Shaft Special Production PV
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season
Classroom of the Elite II
NieR:Automata Ver1.1a

Kagami no Kojou
Lonely Castle in the Mirror
Ookami to Koushinryou: Merchant Meets the Wise Wolf
Spice and Wolf: Merchant Meets the Wise Wolf
Pokemon Legends Arceus: Yuki Hodo Kishi Futaai
Pokémon: Hisuian Snow
Mushoku Tensei II: Isekai Ittara Honki Dasu
Mushoku Tensei: Jobless Reincarnation Season 2
Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season
Classroom of the Elite III
Yi Ren Zhi Xia 5th season
The Outcast 5th Season
Wu Shan Wu Xing
Fog Hill of Five Elements
Meng Qi Shi Shen: Huanxi Zhui Hun
Cinderella Chef 3rd Season
Seijo no Maryoku wa Bannou desu Season 2
The Saint's Magic Power is Omnipotent Season 2
BanG Dream! 5th Anniversary Animation: CiRCLE Thanks Party!

Uma Musume: Pretty Derby - 1st Anniversary Special Animation

Taikutsu wo Saien Shinaide
Don't replay the boredom.
D4DJ Double Mix

Cang Lan Jue
Love Between Fairy and Devil
Emo Faze
Law of Devil
Zuoshou Shanglan
Left-Hand Layup!
Zhe Tian
Shrouding the Heavens
Ragna Crimson

Yoku

Hanma Baki: Son of Ogre 2nd Season
Baki Hanma 2nd Season
Echo

Baise Shandian

Xin Shen Bang: Yang Jian
New Gods: Yang Jian
Shen Yin Wangzuo
Throne of Seal
Dead Dead Demons Dededede Destruction
Dead Dead Demons Dededede Destruction
JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 2
JoJo's Bizarre Adventure: Stone Ocean Part 2
Orient: Awajishima Gekitou-hen

Kengan Ashura Season 2

Xing Yu Siwan Nian
Forty Millenniums of Cultivation
Sasaki to Miyano Movie: Sotsugyou-hen
Sasaki and Miyano: Graduation
Kakero

Lv1 Maou to One Room Yuusha
Level 1 Demon Lord and One Room Hero
Tonari no Youkai-san
Tonari no Yokai-san
Isekai Nonbiri Nouka
Farming Life in Another World
4-nin wa Sorezore Uso wo Tsuku
The Little Lies We All Tell
Arifureta Shokugyou de Sekai Saikyou: Maboroshi no Bouken to Kiseki no Kaigou
Arifureta: Phantom Adventure and Miraculous Encounter
Gunjou
Blue
Lagtrain

Template

Masamune-kun no Revenge R
Masamune-kun's Revenge R
Palette
Palette
Ahoy!! Warera Houshou Kaizokudan☆

Tonikaku Kawaii: Seifuku
Tonikawa: Over The Moon For You - Uniform
Shingeki no Kyojin: The Final Season - Kanketsu-hen
Attack on Titan: Final Season - The Final Chapters
The iDOLM@STER Cinderella Girls: U149

Watashi no Shiawase na Kekkon
My Happy Marriage
City Hunter Movie: Tenshi no Namida
City Hunter The Movie: Angel Dust
D4DJ All Mix

Q
Q
Ao no Orchestra

Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen Recap
Ascendance of a Bookworm: Re-Ascendance of a Bookworm
Doggy God's Street

Nozomanu Fushi no Boukensha
The Unwanted Undead Adventurer
Ultraman Final

Seika Jogakuin Kounin Sao Ojisan

Oniichan wa Oshimai!
Onimai: I'm Now Your Sister!
Cool Doji Danshi
Play It Cool, Guys
Yoru wa Neko to Issho
Nights with a Cat
Otonari ni Ginga
A Galaxy Next Door
Marine Shukkou!!

Bishoujo Senshi Sailor Moon Cosmos Movie
Pretty Guardian Sailor Moon Cosmos the Movie
Uma Musume: Pretty Derby - Road to the Top

Xingchen Bian 5th Season
Legend of Immortals 5th Season
Meitantei Conan: Honchou no Keiji Koi Monogatari - Kekkon Zenya
Detective Conan: Love Story at Police Headquarters - Wedding Eve
Xi Xing Ji: Chongsheng Pian
The Westward 4th Season
Nanatsu no Taizai: Mokushiroku no Yonkishi
The Seven Deadly Sins: Four Knights of the Apocalypse
Ginga Eiyuu Densetsu: Die Neue These - Sakubou
Legend of the Galactic Heroes: Die Neue These - Intrigue
Kubo-san wa Mob wo Yurusanai
Kubo Won't Let Me Be Invisible
Enen no Shouboutai: San no Shou
Fire Force Season 3
Douluo Dalu II: Jueshi Tangmen
Soul Land 2: The Peerless Tang Clan
Shen Mu
Tomb of Fallen Gods
Hua Jianghu: Bu Liang Ren VI

Da Wang Rao Ming 2
Spare Me, Great Lord! Season 2
Play Dice!

Bouto
Mob
Dekiru Neko wa Kyou mo Yuuutsu
The Masterful Cat Is Depressed Again Today
Kono Subarashii Sekai ni Bakuen wo!
KonoSuba: An Explosion on This Wonderful World!
Pui Pui Molcar: Driving School

BanG Dream! Morfonication
BanG Dream! Morfonication
Hibike! Euphonium: Ensemble Contest-hen
Sound! Euphonium: Ensemble Contest Arc
[Oshi no Ko]
[Oshi No Ko]
Obey Me! Season 2

Murai no Koi
Murai in Love
Edomae Elf
Otaku Elf
Shiro Seijo to Kuro Bokushi
Saint Cecilia and Pastor Lawrence
My Home Hero
My Home Hero
Trigun Stampede
Trigun Stampede
Boku wa Chiisana Succubus no Shimobe

Mononoke Movie: Karakasa
Mononoke the Movie: Phantom in the Rain
Reflect

Hungry Days x Bump of Chicken: Kinen Satsuei

Made in Abyss: Retsujitsu no Ougonkyou - Papa to Issho
Made in Abyss: The Golden City of the Scorching Sun - Together with Papa
Kidou Senshi Gundam: Suisei no Majo - Prologue
Mobile Suit Gundam: The Witch from Mercury - Prologue
Koori Zokusei Danshi to Cool na Douryou Joshi
The Ice Guy and His Cool Female Colleague
Kao Ni La Zhanshen Xitong
War God System! I'm Counting On You!
Iinchou wa Saimin Appli wo Shinjiteru.

Kin no Kuni Mizu no Kuni
Gold Kingdom and Water Kingdom
Akiba Meido Sensou
Akiba Maid War
Date A Live V
Date A Live V
Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai
Kaguya-sama: Love is War -The First Kiss That Never Ends-
Mashle
Mashle: Magic and Muscles
Chi. Chikyuu no Undou ni Tsuite
Orb: On the Movements of the Earth
Birdie Wing: Golf Girls' Story Season 2

Tiger & Bunny 2 Part 2

Ore dake Level Up na Ken
Solo Leveling
Tomo-chan wa Onnanoko!
Tomo-chan Is a Girl!
Kanojo ga Koushaku-tei ni Itta Riyuu
Why Raeliana Ended up at the Duke's Mansion
Doraemon Movie 42: Nobita to Sora no Utopia

Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su
Shangri-La Frontier
Hirano to Kagiura

Isekai Shikkaku
No Longer Allowed in Another World
Boku ni Sexfriend ga Dekita Riyuu

Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life
Chillin' in My 30s after Getting Fired from the Demon King's Army
Gimai Seikatsu
Days with My Stepsister
Dark Gathering
Dark Gathering
Xian Wu Chuan
Legend of Xianwu
BANZAI! digital trippers

I'm Your Treasure Box: Anata wa Marine Senchou wo Takarabako kara Mitsuketa.

Boku no Kokoro no Yabai Yatsu
The Dangers in My Heart
Kaijuu 8-gou
Kaiju No. 8
Mix: Meisei Story 2nd Season - Nidome no Natsu, Sora no Mukou e
MIX Season 2
Succubus Yondara Gibo ga Kita!?

Ousama Ranking: Yuuki no Takarabako
Ranking of Kings: The Treasure Chest of Courage
Shen Yin Wangzuo 2nd Season
Throne of Seal 2nd Season
Dungeon Meshi
Delicious in Dungeon
Unleash!!!!!
Unleash!!!!!
Tensei Oujo to Tensai Reijou no Mahou Kakumei
The Magical Revolution of the Reincarnated Princess and the Genius Young Lady
Undead Unluck

Haikyuu!! Movie: Gomisuteba no Kessen
Haikyu!! Movie: The Dumpster Battle
Psycho-Pass Movie: Providence

Wan Jie Du Zun 2nd Season
Ten Thousand Worlds
Xiong Shi Shaonian
I Am What I Am
Benghuai 3rd: Dong Zhi Jiyi
Winter Memories: Honkai Impact 3rd Concept Animation
Majo to Yajuu
The Witch and the Beast
Tsurune: Tsunagari no Issha
Tsurune - The Linking Shot -
Shin Jidai
New Genesis
Odo

Tot Musica

Gyakkou
Backlight
Romantic Killer
Romantic Killer
Watashi wa Saikyou
I'm Invincible
Utakata Lullaby
Fleeting Lullaby
Sekai no Tsuzuki
The World's Continuation
Long Zu Episode 0
Dragon Raja: An Invitation From a Foreign Land
Kaze no Yukue
Where the Wind Blows
Mesudachi The Animation

Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu
I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness
Bai Lian Cheng Shen
Apotheosis
Mahoutsukai no Yome Season 2
The Ancient Magus' Bride Season 2
Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story
Tearmoon Empire
Readymade
Readymade
Megami no Café Terrace
The Café Terrace and Its Goddesses
Berserk: Ougon Jidai-hen - Memorial Edition
Berserk: The Golden Age Arc - Memorial Edition
Ashura-chan

Sousou no Frieren
Frieren: Beyond Journey's End
Aikatsu! 10th Story: Mirai e no Starway

Arifureta Shokugyou de Sekai Saikyou Season 3
Arifureta: From Commonplace to World's Strongest Season 3
Ensemble Stars!! Tsuioku Selection Element
Ensemble Stars!! Reminiscences Selection Element
Let You Down
Let You Down
Kanojo mo Kanojo Season 2
Girlfriend, Girlfriend Season 2
Kanojo, Okarishimasu 3rd Season
Rent-a-Girlfriend Season 3
Shark'd

Rebellion
Rebellion
Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Yakusai-hen
Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2
Yamada-kun to Lv999 no Koi wo Suru
My Love Story with Yamada-kun at Lv999
Fate/strange Fake: Whispers of Dawn
Fate/strange Fake: Whispers of Dawn
Atri: My Dear Moments
Atri -My Dear Moments-
Seishun Buta Yarou wa Odekake Sister no Yume wo Minai
Rascal Does Not Dream of a Sister Venturing Out
UniteUp!

Gokushufudou Season 2
The Way of the Househusband Season 2
Oemojisangjuui
Lookism
Onmyouji
Onmyoji
Kidou Senshi Gundam: Suisei no Majo Season 2
Mobile Suit Gundam: The Witch from Mercury Season 2
Isekai Kita no de Sukebe Skill de Zenryoku Ouka Shiyou to Omou The Animation

Kingdom 5th Season
Kingdom: Season 5
Road of Naruto
Road of Naruto
Evangelion: 3.0 (-46h)

Hoshikuzu Telepath
Stardust Telepath
Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi
The Great Cleric
JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3
JoJo's Bizarre Adventure: Stone Ocean Part 3
Shukufuku
The Blessing
Love Live! Superstar!! 3rd Season
Love Live! Superstar!! Season 3
Find Your One Way
Find Your One Way
Shuumatsu Train Doko e Iku?
Train to the End of the World
Shen Lan Qi Yu Wushuang Zhu: Tianmo Pian
The Land of Miracles 2nd Season
Tengoku Daimakyou
Heavenly Delusion
Kagejitsu!

Bartender: Kami no Glass
Bartender Glass of God
Yuru Camp△ Season 3
Laid-Back Camp Season 3
Buddy Daddies

Lupin Zero

Dosanko Gal wa Namara Menkoi
Hokkaido Gals Are Super Adorable!
Oni: Kamigami Yama no Onari
Oni: Thunder God's Tale
Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?
An Archdemon's Dilemma: How to Love Your Elf Bride
Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.
The Most Heretical Last Boss Queen: From Villainess to Savior
Tondemo Skill de Isekai Hourou Meshi
Campfire Cooking in Another World with My Absurd Skill
Tu Bian Yingxiong X
To Be Hero X
Hanhua Riji 4th Season
God Troubles Me 4th Season
Xian Wang de Richang Shenghuo 4
The Daily Life of the Immortal King 4
Binghuo Mochu 2
The Magic Chef of Ice and Fire 2nd Season
Aikatsu! 10th Story: Mirai e no Starway (2023)

Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu
I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability
Hi-DRIVERS!

Uma Musume: Pretty Derby Season 3

Meitantei Conan Movie 26: Kurogane no Submarine
Detective Conan Movie 26: Black Iron Submarine
Tensei shitara Slime Datta Ken 3rd Season
That Time I Got Reincarnated as a Slime Season 3
Modern Love Tokyo: Kare ga Kanaderu Futari no Shirabe
Modern Love Tokyo: He's Playing Our Song
Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita.
The Weakest Tamer Began a Journey to Pick Up Trash
Dead Mount Death Play
Dead Mount Death Play
Jijou wo Shiranai Tenkousei ga Guigui Kuru.
My Clueless First Friend
Blue Archive: Beautiful Day Dreamer
Blue Archive: Beautiful Day Dreamer
Love Live! Nijigasaki Gakuen School Idol Doukoukai: Next Sky
Love Live! Nijigasaki High School Idol Club: Next Sky
Violet Evergarden: Recollections
Violet Evergarden: Recollections
Bonyuu-chan wa Dashitai.

World Dai Star
Stella of the Theater: World Dai Star
Hirogaru Sky! Precure
Soaring Sky! Pretty Cure
Class de Otoko wa Boku Hitori!?

Kimi no Iro
The Colors Within
Sentai Daishikkaku
Go! Go! Loser Ranger!
Meitantei Conan: Haibara Ai Monogatari - Kurogane no Mystery Train
Detective Conan: Ai Haibara's Story - Jet-Black Mystery Train
2.5-jigen no Ririsa
2.5 Dimensional Seduction
Crayon Shin-chan Movie 31: Chounouryoku Daikessen - Tobe Tobe Temakizushi

Watashi no Oshi wa Akuyaku Reijou.
I'm in Love with the Villainess
SSSS.Gridman Movie

SSSS.Dynazenon Movie

Wan Sheng Jie 4
All Saints Street 4
Yozakura-san Chi no Daisakusen
Mission: Yozakura Family
Pokemon (2019): Harukanaru Aoi Sora
Pokémon: Distant Blue Sky!
Pokemon: Mezase Pokemon Master
Pokémon: To Be a Pokémon Master
Pokemon (2023)
Pokémon Horizons: The Series
Kamonohashi Ron no Kindan Suiri
Ron Kamonohashi's Forbidden Deductions
Arknights: Touin Kiro
Arknights: Perish in Frost
Sand Land
Sand Land
Spy x Family Season 2

Spy x Family Movie: Code: White
Spy x Family Code: White
Ao no Exorcist: Shimane Illuminati-hen
Blue Exorcist: Shimane Illuminati Saga
Cang Lan Jue Part 2
Love Between Fairy and Devil Part 2
Jibaku Shounen Hanako-kun 2
Toilet-Bound Hanako-kun Season 2
Futari-bun no Shoumei
Proof of Two
Shirayuki
White Snow
Bleach: Sennen Kessen-hen - Ketsubetsu-tan
Bleach: Thousand-Year Blood War - The Separation
COLORs

Li Linke de Xiao Guaner 2nd Season
The Dining of Link Lee 2nd Season
Fight Song

Wu Liuqi: Anying Suming
Scissor Seven: Shadow Fate
Huangjin Tingyuan: Dongri Li de Xinnian Yuanwang
Golden Courtyard: New Year Wishes in Winter
Fate/Grand Order: Fujimaru Ritsuka wa Wakaranai
Fate/Grand Order: You've Lost Ritsuka Fujimaru
Hikikomari Kyuuketsuki no Monmon
The Vexations of a Shut-In Vampire Princess
Zom 100: Zombie ni Naru made ni Shitai 100 no Koto
Zom 100: Bucket List of the Dead
IDOLiSH7 Movie: LIVE 4bit - BEYOND THE PERiOD

Ooyukiumi no Kaina: Hoshi no Kenja
Kaina of the Great Snow Sea: Star Sage
Shixiong A Shixiong
My Senior Brother Is Too Steady
Bastard!! Ankoku no Hakaishin: Jigoku no Chinkonka-hen
Bastard‼ Heavy Metal, Dark Fantasy Season 2
Cardfight!! Vanguard: Divinez
Cardfight!! Vanguard Divinez
Cardfight!! Vanguard: Divinez Season 2
Cardfight!! Vanguard Divinez Season 2
Cardfight!! Vanguard: Divinez Deluxe-hen

Yoru wa Neko to Issho Season 2
Nights with a Cat Season 2
Suki na Ko ga Megane wo Wasureta
The Girl I Like Forgot Her Glasses
VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta
VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream
Yao Shen Ji 7th Season
Tales of Demons and Gods Season 7
Dog Signal

Overtake!

Blue Archive the Animation

Yuanshen: Hai Dengjie CM Duanpian - Ming Xiao Huanmeng
Genshin Impact: Lantern Rite PV - Dream Upon a Lantern
Lian Qi Shi Wan Nian
One Hundred Thousand Years of Qi Refining
Fanren Xiu Xian Chuan: Chongzhi Ban

Vinland Saga Season 2: Drowning in the Shadow

Kusuriya no Hitorigoto
The Apothecary Diaries
Tensei shitara Slime Datta Ken: Coleus no Yume
That Time I Got Reincarnated as a Slime: Visions of Coleus
Kage no Jitsuryokusha ni Naritakute! 2nd Season
The Eminence in Shadow Season 2
Kyuujitsu no Warumono-san
Mr. Villain's Day Off
Bokurano
Ours
Gekai Elise
Doctor Elise: The Royal Lady with the Lamp
Pokemon Concierge
Pokémon Concierge
Precure All Stars Movie F

Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo
The 100 Girlfriends Who Really, Really, Really, Really, Really Love You
Mahoutsukai Precure!! Mirai Days
Witchy Pretty Cure!! Mirai Days
Mahou Shoujo ni Akogarete
Gushing over Magical Girls
Nige Jouzu no Wakagimi
The Elusive Samurai
Tsuma, Shougakusei ni Naru.
TsumaSho
Dead Mount Death Play Part 2

Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san
Alya Sometimes Hides Her Feelings in Russian
3-nen Z-gumi Ginpachi-sensei Announcement Special

Madogiwa no Totto-chan
Totto-chan, the Little Girl at the Window
Boku no Hero Academia 7th Season
My Hero Academia Season 7
Undead Girl Murder Farce
Undead Murder Farce
Given Movie 2: Hiiragi Mix
given The Movie: Hiiragi Mix
Captain Tsubasa Season 2: Junior Youth-hen
Captain Tsubasa: Junior Youth Arc
Urusei Yatsura (2022) 2nd Season

Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen
Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord
Yoru no Kurage wa Oyogenai
Jellyfish Can't Swim in the Night
Sugar Apple Fairy Tale Part 2

Aishang Ta de Liyou
The Girl Downstairs
Oooku
Ōoku: The Inner Chambers
Kikansha no Mahou wa Tokubetsu desu
A Returner's Magic Should Be Special
Maou 2099
Demon Lord 2099
Senpai wa Otokonoko
Senpai is an Otokonoko
Horimiya: Piece
Horimiya: The Missing Pieces
Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season
Re:ZERO -Starting Life in Another World- Season 3
Meitantei Conan: Keisatsu Gakkou-hen Wild Police Story - Case. Furuya Rei
Detective Conan: Police Academy Arc Wild Police Story - Case. Furuya Rei
Blue Lock vs. U-20 Japan
Blue Lock Season 2
Blue Lock: Episode Nagi
Blue Lock: Episode Nagi
High Card Season 2

Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai
Rascal Does Not Dream of a Knapsack Kid
Zhui Xu
My Heroic Husband
Mononogatari 2nd Season
Malevolent Spirits: Mononogatari 2nd Season
Bungou Stray Dogs 5th Season
Bungo Stray Dogs 5
Wind Breaker
Wind Breaker
Mahou no Nai Sekai de Ikiru to Iu Koto
Living in a World Without Magic
Seventeen
Seventeen
Sukebe Elf Tanbouki

Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.
The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible
5-toubun no Hanayome∽
The Quintessential Quintuplets~
Tokyo Revengers: Tenjiku-hen
Tokyo Revengers: Tenjiku Arc
Spy Kyoushitsu 2nd Season
Spy Classroom Season 2
BanG Dream! It's MyGO!!!!!

Giji Harem
Pseudo Harem
You Shou Yan
Fabulous Beasts
Atashi wa Mondaisaku
I'm a Controversy
Idol

Amagami-san Chi no Enmusubi
Tying the Knot with an Amagami Sister
Umi no Manimani
At The Mercy of The Sea
Girls Band Cry

Hokkyoku Hyakkaten no Concierge-san
The Concierge
Ensemble Stars!! Tsuioku Selection Crossroad

Zhen Wu Dianfeng 2nd Season
The Peak of True Martial Arts 2nd Season
Yarinaoshi Reijou wa Ryuutei Heika wo Kouryakuchuu
The Do-Over Damsel Conquers The Dragon Emperor
Da Zhu Zai (2023)
The Great Ruler
Yuzuki-san Chi no Yonkyoudai.
The Yuzuki Family's Four Sons
Hidari Pilot Film

Ooi! Tonbo
Tonbo!
Alien Stage
Alien Stage
Tensei Kizoku, Kantei Skill de Nariagaru
As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World
Benghuai: Xing Qiong Tiedao - Fei Guang
Honkai: Star Rail - A Flash
Atarashii Joushi wa Do Tennen
My New Boss Is Goofy
Gensou Mangekyou: The Memories of Phantasm
Touhou Fantasy Kaleidoscope: The Memories of Phantasm
Medalist

Bocchi the Rock! Movie

Shuumatsu no Walküre II Part 2
Record of Ragnarok II Part 2
Odekake Kozame
Little Shark's Outings
Tsundero Series

Yuuki Bakuhatsu Bang Bravern
Brave Bang Bravern!
Kono Koi ni Kizuite The Animation
Notice my Love! The Animation
Yuanshen: Juqing CM Duanpian
Genshin Impact: Story PV
Yuanshen: Xumi CM Duanpian
Genshin Impact: Sumeru PV
Dr. Stone: New World Part 2

Tonikaku Kawaii: Joshikou-hen
TONIKAWA: Over The Moon For You - High School Days
Cang Yuan Tu
The Demon Hunter
Yong Sheng: Shi Nian Zhi Yue
Immortality 2nd Season
Boku no Kokoro no Yabai Yatsu 2nd Season
The Dangers in My Heart Season 2
Feng Ling Yu Xiu 2nd Season
Soulmate Adventure Season 2
Kimetsu no Yaiba: Hashira Geiko-hen
Demon Slayer: Kimetsu no Yaiba Hashira Training Arc
Di Yi Xulie
The First Order
Shen Lan Qi Yu Wushuang Zhu: Tianmo Pian
The Land of Miracles 3rd Season
Mahoutsukai no Yome Season 2 Part 2
The Ancient Magus' Bride Season 2 Part 2
Nitian Xie Shen
Against the Gods
Love Live! Nijigasaki Gakuen School Idol Doukoukai: Kanketsu-hen

Megami no Café Terrace 2nd Season
The Café Terrace and Its Goddesses Season 2
Himesama "Goumon" no Jikan desu
'Tis Time for "Torture," Princess
Cocoon: Aru Natsu no Shoujo-tachi yori

Zhen Hun Jie 3rd Season
Rakshasa Street 3rd Season
[Oshi no Ko] 2nd Season
[Oshi No Ko] Season 2
The iDOLM@STER Cinderella Girls: U149 Special

Xian Ni
Renegade Immortal
Mashle: Shinkakusha Kouho Senbatsu Shiken-hen
Mashle: Magic and Muscles The Divine Visionary Candidate Exam Arc
Mushoku Tensei II: Isekai Ittara Honki Dasu - Shugo Jutsushi Fitz
Mushoku Tensei: Jobless Reincarnation Season 2 - Episode 0 "Guardian Fitz"
You Shou Yan 2nd Season
Fabulous Beasts 2nd Season
Natsume Yuujinchou Shichi
Natsume's Book of Friends Season 7
Seishun Archive
Seishun Archive
Okinawa de Suki ni Natta Ko ga Hougen Sugite Tsurasugiru
Okitsura: Fell in Love with an Okinawan Girl, but I Just Wish I Know What She's Saying
Tasogare Out Focus
Twilight Out of Focus
Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta
I Shouldn't Have Gone To The Doujinshi Convention Without Telling My Wife
Kuroshitsuji: Kishuku Gakkou-hen
Black Butler: Public School Arc
Yubisaki to Renren
A Sign of Affection
Doraemon Movie 43: Nobita no Chikyuu Symphony

Henjin no Salad Bowl
A Salad Bowl of Eccentrics
Kekkon suru tte, Hontou desu ka
365 Days to the Wedding
Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2
Mushoku Tensei: Jobless Reincarnation Season 2 Part 2
Watashi no Shiawase na Kekkon: Watashi no Shiawase na Katachi
My Happy Marriage: The Shape of My Happiness
The Fable
The Fable
30-sai made Doutei dato Mahoutsukai ni Nareru Rashii
Cherry Magic! Thirty Years of Virginity Can Make You a Wizard?!
Fanren Xiu Xian Chuan: Xinghai Feichi Xuzhang
A Record of Mortal's Journey to Immortality: Speeding in the Sea of Stars
Sword Art Online Alternative: Gun Gale Online II
Sword Art Online Alternative: Gun Gale Online II
Lazarus

Monsters: Ippyaku Sanjou Hiryuu Jigoku
Monsters: 103 Mercies Dragon Damnation
NieR:Automata Ver1.1a Part 2
NieR:Automata Ver1.1a (Cour 2)
ChroNoiR Episode.0
ChroNoiR Episode.0
Bishoujo Muzai ❤ Pirates

Good Night World

Boukyaku Battery (TV)
Oblivion Battery
Oomuro-ke: Dear Sisters

Boku no Hero Academia the Movie 4: You're Next
My Hero Academia: You're Next
Yi Nian Yong Heng 3rd Season
A Will Eternal 3rd Season
Juan Siliang 2nd Season
The Island of Siliang 2nd Season
Houkago no Breath
Pokémon: Paldean Winds
Rekishi ni Nokoru Akujo ni Naru zo
I'll Become a Villainess Who Goes Down in History
Jiisan Baasan Wakagaeru
Grandpa and Grandma Turn Young Again
Sengoku Youko: Yonaoshi Kyoudai-hen
Sengoku Youko
Jujutsu Kaisen 2nd Season Recaps
Jujutsu Kaisen Season 2 Recaps
Yuanshen: Jiaoxiang Yinyue Hui CM Duanpian
Genshin Impact: Genshin Concert PV
Dungeon no Naka no Hito
Dungeon People
Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru
7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!
Gwahoheub Special
Hyperventilation Special
Houkago Shounen Hanako-kun
After-School Hanako-kun
Wu Ying Sanqian Dao 2nd Season
Three Thousand Roads 2nd Season
Bleach: Sennen Kessen-hen - Ketsubetsu-tan Recap
Bleach: Thousand-Year Blood War - The Separation Recap
Kororon

Benghuai: Xing Qiong Tiedao - Xuanhuang
Honkai: Star Rail - Ichor of Two Dragons
Hatsukoi Jikan

Tunshi Xingkong 3rd Season
Swallowed Star 3rd Season
Tunshi Xingkong 4th Season
Swallowed Star 4th Season
Kimi ni Todoke 3rd Season
Kimi ni Todoke: From Me to You Season 3
Gintama on Theater 2D: Baragaki-hen

Geu Yeoreum Movie
The Summer
Kizumonogatari: Koyomi Vamp

BanG Dream! Ave Mujica
Ave Mujica: The Die is Cast
Trillion Game
TRILLION GAME
Burn the Witch #0.8

Watashi no Shiawase na Kekkon 2nd Season
My Happy Marriage Season 2
Kengan Ashura Season 2 Part 2

Shukusei!! Loli Kami Requiem ☆

Dubu Wangu
Glorious Revenge of Ye Feng
Xian Wu Chuan 2nd Season
Legend of Xianwu 2nd Season
Synduality: Noir Part 2

Shinigami Bocchan to Kuro Maid 3rd Season
The Duke of Death and His Maid Season 3
Ensemble Stars!! Tsuioku Selection Checkmate

Shiguang Dailiren: Yingdu Pian
Link Click: Bridon Arc
Aoshi Jiuchong Tian
Transcending the Nine Heavens
Zhengjing Shao Zhu de Xingfu Shenghuo
The Little Master's Better Life
Qi Hou Bilu
Spirits in Chinese Brushes
Tadaima, Okaeri
Tadaima, Okaeri
Wangzhe Da Shixiong

Bleach: Sennen Kessen-hen - Soukoku-tan
Bleach: Thousand-Year Blood War - The Conflict
Meitantei Conan Movie 27: 100-man Dollar no Michishirube
Detective Conan Movie 27
Shaonian Ge Xing: Haiwai Xianshan Pian

Hanaarashi
Flower Storm
Yuusha
The Brave
Journey to Bloom

One Room, Hiatari Futsuu, Tenshi-tsuki.
Studio Apartment, Good Lighting, Angel Included
Kagejitsu! Second

Goukon ni Ittara Onna ga Inakatta Hanashi
How I Attended an All-Guy's Mixer
Sousou no Frieren: ●● no Mahou
Frieren: Beyond Journey's End Mini Anime
Mumei

Show

Dragon Ball Daima
Dragon Ball Daima
Boku no Kokoro no Yabai Yatsu: Twi-Yaba
The Dangers in My Heart: Twi-Yaba
Veil (July 2019)

Xiehou Ta de Shaonu Shidai
Mom, I'm Sorry
Jin Zhan Fashi
The Melee Mage
Raise wa Tanin ga Ii
Yakuza Fiancé: Raise wa Tanin ga Ii
Karasu wa Aruji wo Erabanai
Yatagarasu: The Raven Does Not Choose Its Master
Ple Ple Pleiades × Kagejitsu!

Fleur The Animation

Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V: Houjou no Megami-hen
Is It Wrong to Try to Pick Up Girls in a Dungeon? V
Fanren Xiu Xian Chuan: Xinghai Feichi
A Record of Mortal's Journey to Immortality Season 3
Wanneng Lian Ai Zahuo Dian
Love Magic Grocery
Houkago Shounen Hanako-kun Part 2
After-School Hanako-kun Part 2
Shinkiro

Sand Land: The Series

Ao no Hako
Blue Box
Wu Dong Qian Kun 4th Season
Martial Universe 4th Season
Katsute Mahou Shoujo to Aku wa Tekitai shiteita.
The Magical Girl and the Evil Lieutenant Used to Be Archenemies
Bai Lian Cheng Shen 2nd Season
Apotheosis 2nd Season
Mitasarete Mezameru Asa ni, Jimi na Choushoku wo The Animation

Benghuai: Xing Qiong Tiedao - Qian Xing Ji You PVs
Honkai: Star Rail - Myriad Celestia Trailers
Ramen Akaneko
Ramen Akaneko
Dandadan
Dan Da Dan
Hoshifuru Oukoku no Nina
Nina the Starry Bride
Paripi Koumei: Road to Summer Sonia
Ya Boy Kongming! Road to Summer Sonia
Mingyun Quan Tai
Ringing Fate
Wonderful Precure!
Wonderful Precure!
Cong Hong Yue Kaishi
Since The Red Moon Appeared
Shixiong A Shixiong 2nd Season
My Senior Brother Is Too Steady 2nd Season
Douluo Dalu: Daoyan Jianji Ban

Modaete yo, Adam-kun
Adam's Sweet Agony
Rising Impact

Crayon Shin-chan Movie 32: Ora-tachi no Kyouryuu Nikki

Trapezium

Make Heroine ga Oosugiru!
Makeine: Too Many Losing Heroines!
Youkai Gakkou no Sensei Hajimemashita!
A Terrified Teacher at Ghoul School!
Rurouni Kenshin: Meiji Kenkaku Romantan - Kyoto Douran
Rurouni Kenshin: Kyoto Disturbance
MF Ghost 2nd Season
MF Ghost Season 2
Dr. Stone: Science Future
Dr. Stone: Science Future
Dan Dao Zhizun
Alchemy Supreme
Kimi wa Meido-sama.
You are Ms. Servant.
Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo 2nd Season
The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2
Kamonohashi Ron no Kindan Suiri 2nd Season
Ron Kamonohashi's Forbidden Deductions Season 2
Uma Musume: Pretty Derby - Shin Jidai no Tobira
Uma Musume: Pretty Derby - Beginning of a New Era
Nihon e Youkoso Elf-san.
Welcome to Japan, Ms. Elf!
Kui Cheng Shoufu Cong Youxi Kaishi
Losing Money to Be a Tycoon
Wangzhe Rongyao: Rongyao Zhi Zhang
Honor of Kings
Akuyaku Reijou Tensei Ojisan
From Bureaucrat to Villainess: Dad's Been Reincarnated!
Bai She 3: Fusheng
White Snake: Afloat
Shoushimin Series
Shoshimin: How to Become Ordinary
Konomi ja Nai kedo: Mukatsuku Ane to Aishou Batsugun Ecchi

Monogatari Series: Off & Monster Season
Monogatari Series: Off & Monster Season
Suu-funkan no Yell wo
A Few Moments of Cheers
Rennyuu Order The Animation

Mayonaka Punch
Mayonaka Punch
Chocolat Cadabra

Oomuro-ke: Dear Friends

Bai Yao Pu 4th Season
Fairies Albums 4
Yu-Gi-Oh! Card Game: The Chronicles PV

Tsue to Tsurugi no Wistoria
Wistoria: Wand and Sword
Sorairo Utility (TV)
Sorairo Utility
Bakuzete Saku
Bleeding Hearts
Lutu Weiji! Sheng Freya Hao Tebie Shijian
Journey Crisis! The St.Freya Special Event
Kenka Dokugaku
Viral Hit
Gintama on Theater 2D: Ikkoku Keisei-hen

Look Back

Shiunji-ke no Kodomotachi
The Shiunji Family Children
Aishang Ta de Liyou Extra
The Girl Downstairs Extra
Spy x Family Movie: Code: White Manner Movie

Nageki no Bourei wa Intai shitai
Let This Grieving Soul Retire
Value

Given Movie 3: Umi e

Honey Lemon Soda
Honey Lemon Soda
Haru (2024)
Sunny
Shikanoko Nokonoko Koshitantan
My Deer Friend Nokotan
Yong Sheng: Qizhuang Shanhe
Immortality 3rd Season
Fanpai Chushihua
Villain Initialization
Ishura 2nd Season

Sengoku Youko: Senma Konton-hen
Sengoku Youko 2nd Season
Mono
mono
Zenshuu.
Zenshu
Zhu Xian 2nd Season
Jade Dynasty
Nanatsu no Taizai: Mokushiroku no Yonkishi 2nd Season
The Seven Deadly Sins: Four Knights of the Apocalypse Season 2
Kusuriya no Hitorigoto 2nd Season
The Apothecary Diaries Season 2
Ao no Exorcist: Yuki no Hate-hen
Blue Exorcist: Beyond the Snow Saga
Uma Musume: Pretty Derby - Road to the Top (Movie)

Huan Chong Shi
The Charm of Soul Pets
Ojamajo Carnival!!

Yuanshen: Tiwate Pian Mu Jian PV - Dong Ye Yu Xi
Genshin Impact: Teyvat Chapter Interlude Teaser - A Winter Night's Lazzo
Hui Ming: Fenghuo San Yue
Back to the Great Ming
You Shou Yan 3rd Season
Fabulous Beasts 3rd Season
Ore dake Level Up na Ken Season 2: Arise from the Shadow
Solo Leveling Season 2: Arise from the Shadow
Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su 2nd Season
Shangri-La Frontier Season 2
Ameku Takao no Suiri Karte
Ameku M.D.: Doctor Detective
Girls & Panzer: Saishuushou Part 4 Specials

Yuanshen: Jinzhong Ge
Genshin Impact: The Song Burning in the Embers
Yuanshen: Xuqu PV - Zhi Zhongmu de Huanyan
Genshin Impact: Overture Teaser - The Final Feast
Jueshi Zhan Hun
Peerless Martial Spirit
Saikyou no Shienshoku "Wajutsushi" de Aru Ore wa Sekai Saikyou Clan wo Shitagaeru
The Most Notorious "Talker" Runs the World's Greatest Clan
Ninja to Koroshiya no Futarigurashi
A Ninja and an Assassin Under One Roof
Boku ni Harem Sexfriend ga Dekita Riyuu

Yao Shen Ji 8th Season
Tales of Demons and Gods Season 8
Arknights 2024 Special Commemorative Animation PV

5-toubun no Hanayome*
The Quintessential Quintuplets*
Seiyoku Tsuyotsuyo The Animation

III

Wanmei Shijie Movie: Huo Zhi Huijin
Perfect World Movie
Shin Samurai-den Yaiba
Yaiba: Samurai Legend
Yuru Camp△ Season 3 Specials
Laid-Back Camp Season 3 Specials
Benghuai: Xing Qiong Tiedao - Yanchu Kaishi Qian
Honkai: Star Rail - "Before the Show Starts"
Hatsukoi no Nioi
Scent of First Love
Dead Dead Demons Dededede Destruction (ONA)
Dead Dead Demons Dededede Destruction
Bubble de House de *** The Animation

Dead Dead Demons Dededede Destruction (ONA) Episode 0
Dead Dead Demons Dededede Destruction Episode 0
Yuanshen: Weixing zhi Lu
Genshin Impact: The Road Not Taken
Sakamoto Days
Sakamoto Days
Ninja Batman tai Yakuza League
Batman Ninja vs. Yakuza League
Cheng He Titong
How Dare You!?
Wuliao Jiu Wanjie
Don't Give Up!
Insomnia

Hana wa Saku, Shura no Gotoku
Flower and Asura
Benghuai: Xing Qiong Tiedao - Gelamo de Yujin
Honkai: Star Rail - The Embers of Glamoth
Tensei Kizoku, Kantei Skill de Nariagaru 2nd Season
As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World Season 2
Tasokare Hotel
Tasokare Hotel
Unnamed Memory Act.2
Unnamed Memory Season 2
Ranma ½ (2024)
Ranma ½
Wu Liuqi: Jiyi Suipian
Scissor Seven: Fragments of Memory
Wind Breaker Season 2
Wind Breaker Season 2
Aru Majo ga Shinu Made
Once Upon a Witch's Death
Ooi! Tonbo 2nd Season
Tonbo! Season 2
Zhui Xu 2nd Season
My Heroic Husband
Long Zhong Ren
Caged Character
Sex ga Suki de Suki de Daisuki na Classmate no Ano Musume

Fuuto Tantei Movie: Kamen Rider Skull no Shouzou

Sentai Daishikkaku 2nd Season
Go! Go! Loser Ranger! Season 2
Ao no Exorcist: Yosuga-hen
Blue Exorcist: The Blue Night Saga
Kuroshitsuji: Midori no Majo-hen
Black Butler: Emerald Witch Arc
Cang Yuan Tu: Dongning Fu Fanwai Pian
The Demon Hunter: Dongning Mansion Special
Seitokai ni mo Ana wa Aru! PV

Zhan Shen: Fanchen Shenyu
Slay The Gods
Incha Couple ga You Gal-tachi to Sex Training Suru Hanashi

Rock wa Lady no Tashinami deshite
Rock Is a Lady's Modesty
Kono Kaisha ni Suki na Hito ga Imasu
I Have a Crush at Work
Lycoris Recoil: Friends Are Thieves of Time.
Lycoris Recoil: Friends are thieves of time.
You Shou Yan 4th Season
Fabulous Beasts 4th Season
Jian Lai
Sword of Coming
Terminator 0
Terminator Zero
Feng Ling Yu Xiu 2nd Season: Tebie Pian

Yong Sheng: Hai Shi Xian Ling
Immortality 4th Season
Iribitari Gal ni Ma〇ko Tsukawasete Morau Hanashi

Mononoke Movie: Dai Ni Shou - Hinezumi

Project Sekai Movie: Kowareta Sekai to Utaenai Miku
Colorful Stage! The Movie: A Miku Who Can't Sing
NegaPosi Angler
Negative Positive Angler
Yuureisensen
Dead Ma'am's Chest
Katainaka no Ossan, Kensei ni Naru
From Old Country Bumpkin to Master Swordsman
Aharen-san wa Hakarenai Season 2
Aharen-san wa Hakarenai Season 2
Rising Impact Season 2

Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack
Attack on Titan: The Last Attack
Witch Watch
Witch Watch
Monogatari Series: Off & Monster Season - Zankoku Douwa: Utsukushi-hime
Monogatari Series: Off & Monster Season - A Cruel Fairy Tale: The Beautiful Princess
Uma Musume: Cinderella Gray
Umamusume: Cinderella Gray
Jujutsu Kaisen: Kaigyoku/Gyokusetsu
Jujutsu Kaisen: Hidden Inventory/Premature Death
Apocalypse Hotel
Apocalypse Hotel
Kidou Senshi Gundam: The Origin - Movie Edition

Transformers 40th Anniversary Special Movie

Undead

Shoushimin Series 2nd Season
Shoshimin: How to Become Ordinary Season 2
Kono Subarashii Sekai ni Shukufuku wo! 3: Bonus Stage
KonoSuba: God's Blessing on This Wonderful World! 3 OVA
Ore dake Level Up na Ken: ReAwakening
Solo Leveling: ReAwakening
Yao Shen Ji 6th Season

Dadao Chaotian
One Way or Another
Tunshi Xingkong Movie: Xueluo Dalu
Swallowed Star: Blood Luo Continent
Poketoon (2024)
Pokétoon
Mushen Ji
Tales of Herding Gods
Zhen Hun Jie 4th Season
Rakshasa Street 4th Season
Hu He Yao Shi Lu
Tiger Crane
Donut Hole

Re:Zero kara Hajimeru Break Time 3rd Season
Re:ZERO ~Starting Break Time From Zero~ Season 3
One Piece Fan Letter

Bleach 20th PV
Bleach 20th Anime Anniversary
Chao Neng Lifang: Chaofan Pian
The Super Cube
Kowloon Generic Romance
Kowloon Generic Romance
Chang Sheng Jie
World of Immortals
One Piece: Gyojin Tou-hen
One Piece Log: Fish-Man Island Saga
Kanpekisugite Kawaige ga Nai to Konyaku Haki sareta Seijo wa Ringoku ni Urareru
The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom
Xian Ni: Shenlin Zhi Zhan
Renegade Immortal: Battle of Gods
Anne Shirley
Anne Shirley
Teenage Blue

Kimi to Idol Precure♪
You and Idol Precure♪
Zuoshou Shanglan 2nd Season
Left-Hand Layup! 2nd Season
Wu Lian Dianfeng
Martial Peak
Cang Yuan Tu 2nd Season
The Demon Hunter 2nd Season
Meitantei Conan Movie 28: Sekigan no Flashback
Detective Conan Movie 28: One-Eyed Flashback
Kidou Senshi Gundam: GQuuuuuuX
Mobile Suit Gundam: GQuuuuuuX
Immoral Routine The Animation

Quanqiu Gao Wu
World's Best Martial Artist
Wu Dong Qian Kun 5th Season
Martial Universe 5th Season
Nezha Zhi Mo Tong Nao Hai
Ne Zha 2
Fanren Xiu Xian Chuan: Waihai Fengyun
A Record of Mortal's Journey to Immortality Season 4
Kun Tun Tianxia Zhi Zhang Men Guilai
The All-devouring Whale: Homecoming
Vigilante: Boku no Hero Academia Illegals
My Hero Academia: Vigilantes
Yuanshen: Huanghun
Genshin Impact: Sunset
Hibi wa Sugiredo Meshi Umashi
Food for the Soul
Neko ni Naritai Tamagawa-kun
Tamagawa Wants to be a Cat
Yuanshen: Ci Shi Zhi Yi
Genshin Impact: Memories of This Life
Benghuai: Xing Qiong Tiedao - The Herta De Mofa Chufang
Honkai: Star Rail - The Herta's Magic Kitchen
Yuugao

Xingchen Bian 6th Season
Legend of Immortals 6th Season
Kairyuu to Yuubinyasan

Tian Guan Cifu Short Film
Heaven Official's Blessing Short Film
Ruri Dragon PV

Kimi ga Shinu made Koi wo Shitai Pilot
I Want to Love You Till Your Dying Day Pilot Film
Tamaranai no wa Koi nano ka

Imprisoned XII

Fuuki Iin to Fuuzoku Katsudou

Digimon Adventure 25-shuunen Kinen PV: Digimon Adventure - Beyond
Digimon Adventure 25th Anniversary PV: Digimon Adventure - Beyond
Caramel Pain

Kidou Senshi Gundam: GQuuuuuuX - Beginning
Mobile Suit Gundam GQuuuuuuX -Beginning-
One Piece Egghead Arc Recap

Shen Yin Wangzuo Movie: Yi Lai Ke Si Chuanqi
Throne of Seal Movie: The Legend of Electrolux
I Byeol-e Pil-yohan
Lost in Starlight
Kireigoto

`,pA=Object.freeze({status:"aborted"});function H(n,e,o){function r(m,d){var f;Object.defineProperty(m,"_zod",{value:m._zod??{},enumerable:!1}),(f=m._zod).traits??(f.traits=new Set),m._zod.traits.add(n),e(m,d);for(const S in c.prototype)S in m||Object.defineProperty(m,S,{value:c.prototype[S].bind(m)});m._zod.constr=c,m._zod.def=d}const t=(o==null?void 0:o.Parent)??Object;class s extends t{}Object.defineProperty(s,"name",{value:n});function c(m){var d;const f=o!=null&&o.Parent?new s:this;r(f,m),(d=f._zod).deferred??(d.deferred=[]);for(const S of f._zod.deferred)S();return f}return Object.defineProperty(c,"init",{value:r}),Object.defineProperty(c,Symbol.hasInstance,{value:m=>{var d,f;return o!=null&&o.Parent&&m instanceof o.Parent?!0:(f=(d=m==null?void 0:m._zod)==null?void 0:d.traits)==null?void 0:f.has(n)}}),Object.defineProperty(c,"name",{value:n}),c}const yA=Symbol("zod_brand");class mo extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const Sl={};function Re(n){return n&&Object.assign(Sl,n),Sl}function y1(n){return n}function v1(n){return n}function k1(n){}function b1(n){throw new Error}function T1(n){}function df(n){const e=Object.values(n).filter(r=>typeof r=="number");return Object.entries(n).filter(([r,t])=>e.indexOf(+r)===-1).map(([r,t])=>t)}function Q(n,e="|"){return n.map(o=>bn(o)).join(e)}function pl(n,e){return typeof e=="bigint"?e.toString():e}function _l(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function hi(n){return n==null}function jl(n){const e=n.startsWith("^")?1:0,o=n.endsWith("$")?n.length-1:n.length;return n.slice(e,o)}function vA(n,e){const o=(n.toString().split(".")[1]||"").length,r=e.toString();let t=(r.split(".")[1]||"").length;if(t===0&&/\d?e-\d?/.test(r)){const d=r.match(/\d?e-(\d?)/);d!=null&&d[1]&&(t=Number.parseInt(d[1]))}const s=o>t?o:t,c=Number.parseInt(n.toFixed(s).replace(".","")),m=Number.parseInt(e.toFixed(s).replace(".",""));return c%m/10**s}const yb=Symbol("evaluating");function Bn(n,e,o){let r;Object.defineProperty(n,e,{get(){if(r!==yb)return r===void 0&&(r=yb,r=o()),r},set(t){Object.defineProperty(n,e,{value:t})},configurable:!0})}function zl(n){return Object.create(Object.getPrototypeOf(n),Object.getOwnPropertyDescriptors(n))}function Bt(n,e,o){Object.defineProperty(n,e,{value:o,writable:!0,enumerable:!0,configurable:!0})}function Pa(...n){const e={};for(const o of n){const r=Object.getOwnPropertyDescriptors(o);Object.assign(e,r)}return Object.defineProperties({},e)}function M1(n){return Pa(n._zod.def)}function A1(n,e){return e?e.reduce((o,r)=>o==null?void 0:o[r],n):n}function D1(n){const e=Object.keys(n),o=e.map(r=>n[r]);return Promise.all(o).then(r=>{const t={};for(let s=0;s<e.length;s++)t[e[s]]=r[s];return t})}function w1(n=10){const e="abcdefghijklmnopqrstuvwxyz";let o="";for(let r=0;r<n;r++)o+=e[Math.floor(Math.random()*e.length)];return o}function dm(n){return JSON.stringify(n)}const mf="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Fr(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const kA=_l(()=>{var n;if(typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Ur(n){if(Fr(n)===!1)return!1;const e=n.constructor;if(e===void 0)return!0;const o=e.prototype;return!(Fr(o)===!1||Object.prototype.hasOwnProperty.call(o,"isPrototypeOf")===!1)}function O1(n){let e=0;for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&e++;return e}const C1=n=>{const e=typeof n;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(n)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(n)?"array":n===null?"null":n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?"promise":typeof Map<"u"&&n instanceof Map?"map":typeof Set<"u"&&n instanceof Set?"set":typeof Date<"u"&&n instanceof Date?"date":typeof File<"u"&&n instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},yl=new Set(["string","number","symbol"]),bA=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Ka(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function St(n,e,o){const r=new n._zod.constr(e??n._zod.def);return(!e||o!=null&&o.parent)&&(r._zod.parent=n),r}function J(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function I1(n){let e;return new Proxy({},{get(o,r,t){return e??(e=n()),Reflect.get(e,r,t)},set(o,r,t,s){return e??(e=n()),Reflect.set(e,r,t,s)},has(o,r){return e??(e=n()),Reflect.has(e,r)},deleteProperty(o,r){return e??(e=n()),Reflect.deleteProperty(e,r)},ownKeys(o){return e??(e=n()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(o,r){return e??(e=n()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(o,r,t){return e??(e=n()),Reflect.defineProperty(e,r,t)}})}function bn(n){return typeof n=="bigint"?n.toString()+"n":typeof n=="string"?`"${n}"`:`${n}`}function TA(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const MA={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},AA={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function DA(n,e){const o=n._zod.def,r=Pa(n._zod.def,{get shape(){const t={};for(const s in e){if(!(s in o.shape))throw new Error(`Unrecognized key: "${s}"`);e[s]&&(t[s]=o.shape[s])}return Bt(this,"shape",t),t},checks:[]});return St(n,r)}function wA(n,e){const o=n._zod.def,r=Pa(n._zod.def,{get shape(){const t={...n._zod.def.shape};for(const s in e){if(!(s in o.shape))throw new Error(`Unrecognized key: "${s}"`);e[s]&&delete t[s]}return Bt(this,"shape",t),t},checks:[]});return St(n,r)}function OA(n,e){if(!Ur(e))throw new Error("Invalid input to extend: expected a plain object");const o=Pa(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e};return Bt(this,"shape",r),r},checks:[]});return St(n,o)}function CA(n,e){const o=Pa(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e._zod.def.shape};return Bt(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:[]});return St(n,o)}function IA(n,e,o){const r=Pa(e._zod.def,{get shape(){const t=e._zod.def.shape,s={...t};if(o)for(const c in o){if(!(c in t))throw new Error(`Unrecognized key: "${c}"`);o[c]&&(s[c]=n?new n({type:"optional",innerType:t[c]}):t[c])}else for(const c in t)s[c]=n?new n({type:"optional",innerType:t[c]}):t[c];return Bt(this,"shape",s),s},checks:[]});return St(e,r)}function KA(n,e,o){const r=Pa(e._zod.def,{get shape(){const t=e._zod.def.shape,s={...t};if(o)for(const c in o){if(!(c in s))throw new Error(`Unrecognized key: "${c}"`);o[c]&&(s[c]=new n({type:"nonoptional",innerType:t[c]}))}else for(const c in t)s[c]=new n({type:"nonoptional",innerType:t[c]});return Bt(this,"shape",s),s},checks:[]});return St(e,r)}function lo(n,e=0){var o;for(let r=e;r<n.issues.length;r++)if(((o=n.issues[r])==null?void 0:o.continue)!==!0)return!0;return!1}function mt(n,e){return e.map(o=>{var r;return(r=o).path??(r.path=[]),o.path.unshift(n),o})}function Pr(n){return typeof n=="string"?n:n==null?void 0:n.message}function gt(n,e,o){var t,s,c,m,d,f;const r={...n,path:n.path??[]};if(!n.message){const S=Pr((c=(s=(t=n.inst)==null?void 0:t._zod.def)==null?void 0:s.error)==null?void 0:c.call(s,n))??Pr((m=e==null?void 0:e.error)==null?void 0:m.call(e,n))??Pr((d=o.customError)==null?void 0:d.call(o,n))??Pr((f=o.localeError)==null?void 0:f.call(o,n))??"Invalid input";r.message=S}return delete r.inst,delete r.continue,e!=null&&e.reportInput||delete r.input,r}function $l(n){return n instanceof Set?"set":n instanceof Map?"map":n instanceof File?"file":"unknown"}function Fl(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function fo(...n){const[e,o,r]=n;return typeof e=="string"?{message:e,code:"custom",input:o,inst:r}:{...e}}function K1(n){return Object.entries(n).filter(([e,o])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}class R1{constructor(...e){}}const B1=Object.freeze(Object.defineProperty({__proto__:null,BIGINT_FORMAT_RANGES:AA,Class:R1,NUMBER_FORMAT_RANGES:MA,aborted:lo,allowsEval:kA,assert:T1,assertEqual:y1,assertIs:k1,assertNever:b1,assertNotEqual:v1,assignProp:Bt,cached:_l,captureStackTrace:mf,cleanEnum:K1,cleanRegex:jl,clone:St,cloneDef:M1,createTransparentProxy:I1,defineLazy:Bn,esc:dm,escapeRegex:Ka,extend:OA,finalizeIssue:gt,floatSafeRemainder:vA,getElementAtPath:A1,getEnumValues:df,getLengthableOrigin:Fl,getParsedType:C1,getSizableOrigin:$l,isObject:Fr,isPlainObject:Ur,issue:fo,joinValues:Q,jsonStringifyReplacer:pl,merge:CA,mergeDefs:Pa,normalizeParams:J,nullish:hi,numKeys:O1,objectClone:zl,omit:wA,optionalKeys:TA,partial:IA,pick:DA,prefixIssues:mt,primitiveTypes:bA,promiseAllObject:D1,propertyKeyTypes:yl,randomString:w1,required:KA,stringifyPrimitive:bn,unwrapMessage:Pr},Symbol.toStringTag,{value:"Module"})),RA=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,pl,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},ff=H("$ZodError",RA),uu=H("$ZodError",RA,{Parent:Error});function gf(n,e=o=>o.message){const o={},r=[];for(const t of n.issues)t.path.length>0?(o[t.path[0]]=o[t.path[0]]||[],o[t.path[0]].push(e(t))):r.push(e(t));return{formErrors:r,fieldErrors:o}}function Sf(n,e){const o=e||function(s){return s.message},r={_errors:[]},t=s=>{for(const c of s.issues)if(c.code==="invalid_union"&&c.errors.length)c.errors.map(m=>t({issues:m}));else if(c.code==="invalid_key")t({issues:c.issues});else if(c.code==="invalid_element")t({issues:c.issues});else if(c.path.length===0)r._errors.push(o(c));else{let m=r,d=0;for(;d<c.path.length;){const f=c.path[d];d===c.path.length-1?(m[f]=m[f]||{_errors:[]},m[f]._errors.push(o(c))):m[f]=m[f]||{_errors:[]},m=m[f],d++}}};return t(n),r}function BA(n,e){const o=e||function(s){return s.message},r={errors:[]},t=(s,c=[])=>{var m,d;for(const f of s.issues)if(f.code==="invalid_union"&&f.errors.length)f.errors.map(S=>t({issues:S},f.path));else if(f.code==="invalid_key")t({issues:f.issues},f.path);else if(f.code==="invalid_element")t({issues:f.issues},f.path);else{const S=[...c,...f.path];if(S.length===0){r.errors.push(o(f));continue}let p=r,v=0;for(;v<S.length;){const T=S[v],M=v===S.length-1;typeof T=="string"?(p.properties??(p.properties={}),(m=p.properties)[T]??(m[T]={errors:[]}),p=p.properties[T]):(p.items??(p.items=[]),(d=p.items)[T]??(d[T]={errors:[]}),p=p.items[T]),M&&p.errors.push(o(f)),v++}}};return t(n),r}function PA(n){const e=[],o=n.map(r=>typeof r=="object"?r.key:r);for(const r of o)typeof r=="number"?e.push(`[${r}]`):typeof r=="symbol"?e.push(`[${JSON.stringify(String(r))}]`):/[^\w$]/.test(r)?e.push(`[${JSON.stringify(r)}]`):(e.length&&e.push("."),e.push(r));return e.join("")}function EA(n){var r;const e=[],o=[...n.issues].sort((t,s)=>(t.path??[]).length-(s.path??[]).length);for(const t of o)e.push(`✖ ${t.message}`),(r=t.path)!=null&&r.length&&e.push(`  → at ${PA(t.path)}`);return e.join(`
`)}const pf=n=>(e,o,r,t)=>{const s=r?Object.assign(r,{async:!1}):{async:!1},c=e._zod.run({value:o,issues:[]},s);if(c instanceof Promise)throw new mo;if(c.issues.length){const m=new((t==null?void 0:t.Err)??n)(c.issues.map(d=>gt(d,s,Re())));throw mf(m,t==null?void 0:t.callee),m}return c.value},mm=pf(uu),yf=n=>async(e,o,r,t)=>{const s=r?Object.assign(r,{async:!0}):{async:!0};let c=e._zod.run({value:o,issues:[]},s);if(c instanceof Promise&&(c=await c),c.issues.length){const m=new((t==null?void 0:t.Err)??n)(c.issues.map(d=>gt(d,s,Re())));throw mf(m,t==null?void 0:t.callee),m}return c.value},fm=yf(uu),vf=n=>(e,o,r)=>{const t=r?{...r,async:!1}:{async:!1},s=e._zod.run({value:o,issues:[]},t);if(s instanceof Promise)throw new mo;return s.issues.length?{success:!1,error:new(n??ff)(s.issues.map(c=>gt(c,t,Re())))}:{success:!0,data:s.value}},NA=vf(uu),kf=n=>async(e,o,r)=>{const t=r?Object.assign(r,{async:!0}):{async:!0};let s=e._zod.run({value:o,issues:[]},t);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new n(s.issues.map(c=>gt(c,t,Re())))}:{success:!0,data:s.value}},HA=kf(uu),GA=/^[cC][^\s-]{8,}$/,xA=/^[0-9a-z]+$/,LA=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,_A=/^[0-9a-vA-V]{20}$/,jA=/^[A-Za-z0-9]{27}$/,zA=/^[a-zA-Z0-9_-]{21}$/,$A=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,P1=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,FA=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,go=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,E1=go(4),N1=go(6),H1=go(7),UA=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,G1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,x1=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,L1=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,_1=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,j1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,z1="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function VA(){return new RegExp(z1,"u")}const YA=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,WA=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,ZA=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,JA=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,XA=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,bf=/^[A-Za-z0-9_-]*$/,Tf=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,$1=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,qA=/^\+(?:[0-9]){6,14}[0-9]$/,QA="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",nD=new RegExp(`^${QA}$`);function eD(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function tD(n){return new RegExp(`^${eD(n)}$`)}function aD(n){const e=eD({precision:n.precision}),o=["Z"];n.local&&o.push(""),n.offset&&o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const r=`${e}(?:${o.join("|")})`;return new RegExp(`^${QA}T(?:${r})$`)}const iD=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},oD=/^\d+n?$/,rD=/^\d+$/,uD=/^-?\d+(?:\.\d+)?/i,sD=/true|false/i,lD=/null/i,cD=/undefined/i,hD=/^[^A-Z]*$/,dD=/^[^a-z]*$/,mD=Object.freeze(Object.defineProperty({__proto__:null,base64:XA,base64url:bf,bigint:oD,boolean:sD,browserEmail:j1,cidrv4:ZA,cidrv6:JA,cuid:GA,cuid2:xA,date:nD,datetime:aD,domain:$1,duration:$A,e164:qA,email:UA,emoji:VA,extendedDuration:P1,guid:FA,hostname:Tf,html5Email:G1,idnEmail:_1,integer:rD,ipv4:YA,ipv6:WA,ksuid:jA,lowercase:hD,nanoid:zA,null:lD,number:uD,rfc5322Email:x1,string:iD,time:tD,ulid:LA,undefined:cD,unicodeEmail:L1,uppercase:dD,uuid:go,uuid4:E1,uuid6:N1,uuid7:H1,xid:_A},Symbol.toStringTag,{value:"Module"})),ae=H("$ZodCheck",(n,e)=>{var o;n._zod??(n._zod={}),n._zod.def=e,(o=n._zod).onattach??(o.onattach=[])}),fD={number:"number",bigint:"bigint",object:"date"},Mf=H("$ZodCheckLessThan",(n,e)=>{ae.init(n,e);const o=fD[typeof e.value];n._zod.onattach.push(r=>{const t=r._zod.bag,s=(e.inclusive?t.maximum:t.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<s&&(e.inclusive?t.maximum=e.value:t.exclusiveMaximum=e.value)}),n._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:o,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Af=H("$ZodCheckGreaterThan",(n,e)=>{ae.init(n,e);const o=fD[typeof e.value];n._zod.onattach.push(r=>{const t=r._zod.bag,s=(e.inclusive?t.minimum:t.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>s&&(e.inclusive?t.minimum=e.value:t.exclusiveMinimum=e.value)}),n._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:o,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),gD=H("$ZodCheckMultipleOf",(n,e)=>{ae.init(n,e),n._zod.onattach.push(o=>{var r;(r=o._zod.bag).multipleOf??(r.multipleOf=e.value)}),n._zod.check=o=>{if(typeof o.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof o.value=="bigint"?o.value%e.value===BigInt(0):vA(o.value,e.value)===0)||o.issues.push({origin:typeof o.value,code:"not_multiple_of",divisor:e.value,input:o.value,inst:n,continue:!e.abort})}}),SD=H("$ZodCheckNumberFormat",(n,e)=>{var c;ae.init(n,e),e.format=e.format||"float64";const o=(c=e.format)==null?void 0:c.includes("int"),r=o?"int":"number",[t,s]=MA[e.format];n._zod.onattach.push(m=>{const d=m._zod.bag;d.format=e.format,d.minimum=t,d.maximum=s,o&&(d.pattern=rD)}),n._zod.check=m=>{const d=m.value;if(o){if(!Number.isInteger(d)){m.issues.push({expected:r,format:e.format,code:"invalid_type",continue:!1,input:d,inst:n});return}if(!Number.isSafeInteger(d)){d>0?m.issues.push({input:d,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:r,continue:!e.abort}):m.issues.push({input:d,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:r,continue:!e.abort});return}}d<t&&m.issues.push({origin:"number",input:d,code:"too_small",minimum:t,inclusive:!0,inst:n,continue:!e.abort}),d>s&&m.issues.push({origin:"number",input:d,code:"too_big",maximum:s,inst:n})}}),pD=H("$ZodCheckBigIntFormat",(n,e)=>{ae.init(n,e);const[o,r]=AA[e.format];n._zod.onattach.push(t=>{const s=t._zod.bag;s.format=e.format,s.minimum=o,s.maximum=r}),n._zod.check=t=>{const s=t.value;s<o&&t.issues.push({origin:"bigint",input:s,code:"too_small",minimum:o,inclusive:!0,inst:n,continue:!e.abort}),s>r&&t.issues.push({origin:"bigint",input:s,code:"too_big",maximum:r,inst:n})}}),yD=H("$ZodCheckMaxSize",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<t&&(r._zod.bag.maximum=e.maximum)}),n._zod.check=r=>{const t=r.value;t.size<=e.maximum||r.issues.push({origin:$l(t),code:"too_big",maximum:e.maximum,input:t,inst:n,continue:!e.abort})}}),vD=H("$ZodCheckMinSize",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>t&&(r._zod.bag.minimum=e.minimum)}),n._zod.check=r=>{const t=r.value;t.size>=e.minimum||r.issues.push({origin:$l(t),code:"too_small",minimum:e.minimum,input:t,inst:n,continue:!e.abort})}}),kD=H("$ZodCheckSizeEquals",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag;t.minimum=e.size,t.maximum=e.size,t.size=e.size}),n._zod.check=r=>{const t=r.value,s=t.size;if(s===e.size)return;const c=s>e.size;r.issues.push({origin:$l(t),...c?{code:"too_big",maximum:e.size}:{code:"too_small",minimum:e.size},inclusive:!0,exact:!0,input:r.value,inst:n,continue:!e.abort})}}),bD=H("$ZodCheckMaxLength",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<t&&(r._zod.bag.maximum=e.maximum)}),n._zod.check=r=>{const t=r.value;if(t.length<=e.maximum)return;const c=Fl(t);r.issues.push({origin:c,code:"too_big",maximum:e.maximum,inclusive:!0,input:t,inst:n,continue:!e.abort})}}),TD=H("$ZodCheckMinLength",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>t&&(r._zod.bag.minimum=e.minimum)}),n._zod.check=r=>{const t=r.value;if(t.length>=e.minimum)return;const c=Fl(t);r.issues.push({origin:c,code:"too_small",minimum:e.minimum,inclusive:!0,input:t,inst:n,continue:!e.abort})}}),MD=H("$ZodCheckLengthEquals",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!hi(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag;t.minimum=e.length,t.maximum=e.length,t.length=e.length}),n._zod.check=r=>{const t=r.value,s=t.length;if(s===e.length)return;const c=Fl(t),m=s>e.length;r.issues.push({origin:c,...m?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:n,continue:!e.abort})}}),su=H("$ZodCheckStringFormat",(n,e)=>{var o,r;ae.init(n,e),n._zod.onattach.push(t=>{const s=t._zod.bag;s.format=e.format,e.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(e.pattern))}),e.pattern?(o=n._zod).check??(o.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:e.format,input:t.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(r=n._zod).check??(r.check=()=>{})}),AD=H("$ZodCheckRegex",(n,e)=>{su.init(n,e),n._zod.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:"regex",input:o.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),DD=H("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=hD),su.init(n,e)}),wD=H("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=dD),su.init(n,e)}),OD=H("$ZodCheckIncludes",(n,e)=>{ae.init(n,e);const o=Ka(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${o}`:o);e.pattern=r,n._zod.onattach.push(t=>{const s=t._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(r)}),n._zod.check=t=>{t.value.includes(e.includes,e.position)||t.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:t.value,inst:n,continue:!e.abort})}}),CD=H("$ZodCheckStartsWith",(n,e)=>{ae.init(n,e);const o=new RegExp(`^${Ka(e.prefix)}.*`);e.pattern??(e.pattern=o),n._zod.onattach.push(r=>{const t=r._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(o)}),n._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:n,continue:!e.abort})}}),ID=H("$ZodCheckEndsWith",(n,e)=>{ae.init(n,e);const o=new RegExp(`.*${Ka(e.suffix)}$`);e.pattern??(e.pattern=o),n._zod.onattach.push(r=>{const t=r._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(o)}),n._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:n,continue:!e.abort})}});function vb(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues))}const KD=H("$ZodCheckProperty",(n,e)=>{ae.init(n,e),n._zod.check=o=>{const r=e.schema._zod.run({value:o.value[e.property],issues:[]},{});if(r instanceof Promise)return r.then(t=>vb(t,o,e.property));vb(r,o,e.property)}}),RD=H("$ZodCheckMimeType",(n,e)=>{ae.init(n,e);const o=new Set(e.mime);n._zod.onattach.push(r=>{r._zod.bag.mime=e.mime}),n._zod.check=r=>{o.has(r.value.type)||r.issues.push({code:"invalid_value",values:e.mime,input:r.value.type,inst:n,continue:!e.abort})}}),BD=H("$ZodCheckOverwrite",(n,e)=>{ae.init(n,e),n._zod.check=o=>{o.value=e.tx(o.value)}});class PD{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const r=e.split(`
`).filter(c=>c),t=Math.min(...r.map(c=>c.length-c.trimStart().length)),s=r.map(c=>c.slice(t)).map(c=>" ".repeat(this.indent*2)+c);for(const c of s)this.content.push(c)}compile(){const e=Function,o=this==null?void 0:this.args,t=[...((this==null?void 0:this.content)??[""]).map(s=>`  ${s}`)];return new e(...o,t.join(`
`))}}const ED={major:4,minor:0,patch:15},kn=H("$ZodType",(n,e)=>{var t;var o;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=ED;const r=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&r.unshift(n);for(const s of r)for(const c of s._zod.onattach)c(n);if(r.length===0)(o=n._zod).deferred??(o.deferred=[]),(t=n._zod.deferred)==null||t.push(()=>{n._zod.run=n._zod.parse});else{const s=(c,m,d)=>{let f=lo(c),S;for(const p of m){if(p._zod.def.when){if(!p._zod.def.when(c))continue}else if(f)continue;const v=c.issues.length,T=p._zod.check(c);if(T instanceof Promise&&(d==null?void 0:d.async)===!1)throw new mo;if(S||T instanceof Promise)S=(S??Promise.resolve()).then(async()=>{await T,c.issues.length!==v&&(f||(f=lo(c,v)))});else{if(c.issues.length===v)continue;f||(f=lo(c,v))}}return S?S.then(()=>c):c};n._zod.run=(c,m)=>{const d=n._zod.parse(c,m);if(d instanceof Promise){if(m.async===!1)throw new mo;return d.then(f=>s(f,r,m))}return s(d,r,m)}}n["~standard"]={validate:s=>{var c;try{const m=NA(n,s);return m.success?{value:m.data}:{issues:(c=m.error)==null?void 0:c.issues}}catch{return HA(n,s).then(d=>{var f;return d.success?{value:d.data}:{issues:(f=d.error)==null?void 0:f.issues}})}},vendor:"zod",version:1}}),lu=H("$ZodString",(n,e)=>{var o;kn.init(n,e),n._zod.pattern=[...((o=n==null?void 0:n._zod.bag)==null?void 0:o.patterns)??[]].pop()??iD(n._zod.bag),n._zod.parse=(r,t)=>{if(e.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:n}),r}}),Un=H("$ZodStringFormat",(n,e)=>{su.init(n,e),lu.init(n,e)}),ND=H("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=FA),Un.init(n,e)}),HD=H("$ZodUUID",(n,e)=>{if(e.version){const r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=go(r))}else e.pattern??(e.pattern=go());Un.init(n,e)}),GD=H("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=UA),Un.init(n,e)}),xD=H("$ZodURL",(n,e)=>{Un.init(n,e),n._zod.check=o=>{try{const r=o.value.trim(),t=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(t.hostname)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Tf.source,input:o.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:o.value,inst:n,continue:!e.abort})),e.normalize?o.value=t.href:o.value=r;return}catch{o.issues.push({code:"invalid_format",format:"url",input:o.value,inst:n,continue:!e.abort})}}}),LD=H("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=VA()),Un.init(n,e)}),_D=H("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=zA),Un.init(n,e)}),jD=H("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=GA),Un.init(n,e)}),zD=H("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=xA),Un.init(n,e)}),$D=H("$ZodULID",(n,e)=>{e.pattern??(e.pattern=LA),Un.init(n,e)}),FD=H("$ZodXID",(n,e)=>{e.pattern??(e.pattern=_A),Un.init(n,e)}),UD=H("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=jA),Un.init(n,e)}),VD=H("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=aD(e)),Un.init(n,e)}),YD=H("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=nD),Un.init(n,e)}),WD=H("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=tD(e)),Un.init(n,e)}),ZD=H("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=$A),Un.init(n,e)}),JD=H("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=YA),Un.init(n,e),n._zod.onattach.push(o=>{const r=o._zod.bag;r.format="ipv4"})}),XD=H("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=WA),Un.init(n,e),n._zod.onattach.push(o=>{const r=o._zod.bag;r.format="ipv6"}),n._zod.check=o=>{try{new URL(`http://[${o.value}]`)}catch{o.issues.push({code:"invalid_format",format:"ipv6",input:o.value,inst:n,continue:!e.abort})}}}),qD=H("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=ZA),Un.init(n,e)}),QD=H("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=JA),Un.init(n,e),n._zod.check=o=>{const[r,t]=o.value.split("/");try{if(!t)throw new Error;const s=Number(t);if(`${s}`!==t)throw new Error;if(s<0||s>128)throw new Error;new URL(`http://[${r}]`)}catch{o.issues.push({code:"invalid_format",format:"cidrv6",input:o.value,inst:n,continue:!e.abort})}}});function Df(n){if(n==="")return!0;if(n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const n0=H("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=XA),Un.init(n,e),n._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64"}),n._zod.check=o=>{Df(o.value)||o.issues.push({code:"invalid_format",format:"base64",input:o.value,inst:n,continue:!e.abort})}});function e0(n){if(!bf.test(n))return!1;const e=n.replace(/[-_]/g,r=>r==="-"?"+":"/"),o=e.padEnd(Math.ceil(e.length/4)*4,"=");return Df(o)}const t0=H("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=bf),Un.init(n,e),n._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64url"}),n._zod.check=o=>{e0(o.value)||o.issues.push({code:"invalid_format",format:"base64url",input:o.value,inst:n,continue:!e.abort})}}),a0=H("$ZodE164",(n,e)=>{e.pattern??(e.pattern=qA),Un.init(n,e)});function i0(n,e=null){try{const o=n.split(".");if(o.length!==3)return!1;const[r]=o;if(!r)return!1;const t=JSON.parse(atob(r));return!("typ"in t&&(t==null?void 0:t.typ)!=="JWT"||!t.alg||e&&(!("alg"in t)||t.alg!==e))}catch{return!1}}const o0=H("$ZodJWT",(n,e)=>{Un.init(n,e),n._zod.check=o=>{i0(o.value,e.alg)||o.issues.push({code:"invalid_format",format:"jwt",input:o.value,inst:n,continue:!e.abort})}}),r0=H("$ZodCustomStringFormat",(n,e)=>{Un.init(n,e),n._zod.check=o=>{e.fn(o.value)||o.issues.push({code:"invalid_format",format:e.format,input:o.value,inst:n,continue:!e.abort})}}),wf=H("$ZodNumber",(n,e)=>{kn.init(n,e),n._zod.pattern=n._zod.bag.pattern??uD,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=Number(o.value)}catch{}const t=o.value;if(typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t))return o;const s=typeof t=="number"?Number.isNaN(t)?"NaN":Number.isFinite(t)?void 0:"Infinity":void 0;return o.issues.push({expected:"number",code:"invalid_type",input:t,inst:n,...s?{received:s}:{}}),o}}),u0=H("$ZodNumber",(n,e)=>{SD.init(n,e),wf.init(n,e)}),Of=H("$ZodBoolean",(n,e)=>{kn.init(n,e),n._zod.pattern=sD,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=!!o.value}catch{}const t=o.value;return typeof t=="boolean"||o.issues.push({expected:"boolean",code:"invalid_type",input:t,inst:n}),o}}),Cf=H("$ZodBigInt",(n,e)=>{kn.init(n,e),n._zod.pattern=oD,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=BigInt(o.value)}catch{}return typeof o.value=="bigint"||o.issues.push({expected:"bigint",code:"invalid_type",input:o.value,inst:n}),o}}),s0=H("$ZodBigInt",(n,e)=>{pD.init(n,e),Cf.init(n,e)}),l0=H("$ZodSymbol",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return typeof t=="symbol"||o.issues.push({expected:"symbol",code:"invalid_type",input:t,inst:n}),o}}),c0=H("$ZodUndefined",(n,e)=>{kn.init(n,e),n._zod.pattern=cD,n._zod.values=new Set([void 0]),n._zod.optin="optional",n._zod.optout="optional",n._zod.parse=(o,r)=>{const t=o.value;return typeof t>"u"||o.issues.push({expected:"undefined",code:"invalid_type",input:t,inst:n}),o}}),h0=H("$ZodNull",(n,e)=>{kn.init(n,e),n._zod.pattern=lD,n._zod.values=new Set([null]),n._zod.parse=(o,r)=>{const t=o.value;return t===null||o.issues.push({expected:"null",code:"invalid_type",input:t,inst:n}),o}}),d0=H("$ZodAny",(n,e)=>{kn.init(n,e),n._zod.parse=o=>o}),vl=H("$ZodUnknown",(n,e)=>{kn.init(n,e),n._zod.parse=o=>o}),m0=H("$ZodNever",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>(o.issues.push({expected:"never",code:"invalid_type",input:o.value,inst:n}),o)}),f0=H("$ZodVoid",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return typeof t>"u"||o.issues.push({expected:"void",code:"invalid_type",input:t,inst:n}),o}}),g0=H("$ZodDate",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=new Date(o.value)}catch{}const t=o.value,s=t instanceof Date;return s&&!Number.isNaN(t.getTime())||o.issues.push({expected:"date",code:"invalid_type",input:t,...s?{received:"Invalid Date"}:{},inst:n}),o}});function kb(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues)),e.value[o]=n.value}const If=H("$ZodArray",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!Array.isArray(t))return o.issues.push({expected:"array",code:"invalid_type",input:t,inst:n}),o;o.value=Array(t.length);const s=[];for(let c=0;c<t.length;c++){const m=t[c],d=e.element._zod.run({value:m,issues:[]},r);d instanceof Promise?s.push(d.then(f=>kb(f,o,c))):kb(d,o,c)}return s.length?Promise.all(s).then(()=>o):o}});function Ns(n,e,o,r){n.issues.length&&e.issues.push(...mt(o,n.issues)),n.value===void 0?o in r&&(e.value[o]=void 0):e.value[o]=n.value}const S0=H("$ZodObject",(n,e)=>{kn.init(n,e);const o=_l(()=>{const p=Object.keys(e.shape);for(const T of p)if(!(e.shape[T]instanceof kn))throw new Error(`Invalid element at key "${T}": expected a Zod schema`);const v=TA(e.shape);return{shape:e.shape,keys:p,keySet:new Set(p),numKeys:p.length,optionalKeys:new Set(v)}});Bn(n._zod,"propValues",()=>{const p=e.shape,v={};for(const T in p){const M=p[T]._zod;if(M.values){v[T]??(v[T]=new Set);for(const C of M.values)v[T].add(C)}}return v});const r=p=>{const v=new PD(["shape","payload","ctx"]),T=o.value,M=O=>{const D=dm(O);return`shape[${D}]._zod.run({ value: input[${D}], issues: [] }, ctx)`};v.write("const input = payload.value;");const C=Object.create(null);let A=0;for(const O of T.keys)C[O]=`key_${A++}`;v.write("const newResult = {}");for(const O of T.keys){const D=C[O],P=dm(O);v.write(`const ${D} = ${M(O)};`),v.write(`
        if (${D}.issues.length) {
          payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        
        if (${D}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${D}.value;
        }
      `)}v.write("payload.value = newResult;"),v.write("return payload;");const k=v.compile();return(O,D)=>k(p,O,D)};let t;const s=Fr,c=!Sl.jitless,d=c&&kA.value,f=e.catchall;let S;n._zod.parse=(p,v)=>{S??(S=o.value);const T=p.value;if(!s(T))return p.issues.push({expected:"object",code:"invalid_type",input:T,inst:n}),p;const M=[];if(c&&d&&(v==null?void 0:v.async)===!1&&v.jitless!==!0)t||(t=r(e.shape)),p=t(p,v);else{p.value={};const D=S.shape;for(const P of S.keys){const j=D[P]._zod.run({value:T[P],issues:[]},v);j instanceof Promise?M.push(j.then(z=>Ns(z,p,P,T))):Ns(j,p,P,T)}}if(!f)return M.length?Promise.all(M).then(()=>p):p;const C=[],A=S.keySet,k=f._zod,O=k.def.type;for(const D of Object.keys(T)){if(A.has(D))continue;if(O==="never"){C.push(D);continue}const P=k.run({value:T[D],issues:[]},v);P instanceof Promise?M.push(P.then(I=>Ns(I,p,D,T))):Ns(P,p,D,T)}return C.length&&p.issues.push({code:"unrecognized_keys",keys:C,input:T,inst:n}),M.length?Promise.all(M).then(()=>p):p}});function bb(n,e,o,r){for(const s of n)if(s.issues.length===0)return e.value=s.value,e;const t=n.filter(s=>!lo(s));return t.length===1?(e.value=t[0].value,t[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:o,errors:n.map(s=>s.issues.map(c=>gt(c,r,Re())))}),e)}const Kf=H("$ZodUnion",(n,e)=>{kn.init(n,e),Bn(n._zod,"optin",()=>e.options.some(t=>t._zod.optin==="optional")?"optional":void 0),Bn(n._zod,"optout",()=>e.options.some(t=>t._zod.optout==="optional")?"optional":void 0),Bn(n._zod,"values",()=>{if(e.options.every(t=>t._zod.values))return new Set(e.options.flatMap(t=>Array.from(t._zod.values)))}),Bn(n._zod,"pattern",()=>{if(e.options.every(t=>t._zod.pattern)){const t=e.options.map(s=>s._zod.pattern);return new RegExp(`^(${t.map(s=>jl(s.source)).join("|")})$`)}});const o=e.options.length===1,r=e.options[0]._zod.run;n._zod.parse=(t,s)=>{if(o)return r(t,s);let c=!1;const m=[];for(const d of e.options){const f=d._zod.run({value:t.value,issues:[]},s);if(f instanceof Promise)m.push(f),c=!0;else{if(f.issues.length===0)return f;m.push(f)}}return c?Promise.all(m).then(d=>bb(d,t,n,s)):bb(m,t,n,s)}}),p0=H("$ZodDiscriminatedUnion",(n,e)=>{Kf.init(n,e);const o=n._zod.parse;Bn(n._zod,"propValues",()=>{const t={};for(const s of e.options){const c=s._zod.propValues;if(!c||Object.keys(c).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);for(const[m,d]of Object.entries(c)){t[m]||(t[m]=new Set);for(const f of d)t[m].add(f)}}return t});const r=_l(()=>{var c;const t=e.options,s=new Map;for(const m of t){const d=(c=m._zod.propValues)==null?void 0:c[e.discriminator];if(!d||d.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(m)}"`);for(const f of d){if(s.has(f))throw new Error(`Duplicate discriminator value "${String(f)}"`);s.set(f,m)}}return s});n._zod.parse=(t,s)=>{const c=t.value;if(!Fr(c))return t.issues.push({code:"invalid_type",expected:"object",input:c,inst:n}),t;const m=r.value.get(c==null?void 0:c[e.discriminator]);return m?m._zod.run(t,s):e.unionFallback?o(t,s):(t.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,input:c,path:[e.discriminator],inst:n}),t)}}),y0=H("$ZodIntersection",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value,s=e.left._zod.run({value:t,issues:[]},r),c=e.right._zod.run({value:t,issues:[]},r);return s instanceof Promise||c instanceof Promise?Promise.all([s,c]).then(([d,f])=>Tb(o,d,f)):Tb(o,s,c)}});function gm(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Ur(n)&&Ur(e)){const o=Object.keys(e),r=Object.keys(n).filter(s=>o.indexOf(s)!==-1),t={...n,...e};for(const s of r){const c=gm(n[s],e[s]);if(!c.valid)return{valid:!1,mergeErrorPath:[s,...c.mergeErrorPath]};t[s]=c.data}return{valid:!0,data:t}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const o=[];for(let r=0;r<n.length;r++){const t=n[r],s=e[r],c=gm(t,s);if(!c.valid)return{valid:!1,mergeErrorPath:[r,...c.mergeErrorPath]};o.push(c.data)}return{valid:!0,data:o}}return{valid:!1,mergeErrorPath:[]}}function Tb(n,e,o){if(e.issues.length&&n.issues.push(...e.issues),o.issues.length&&n.issues.push(...o.issues),lo(n))return n;const r=gm(e.value,o.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return n.value=r.data,n}const Ul=H("$ZodTuple",(n,e)=>{kn.init(n,e);const o=e.items,r=o.length-[...o].reverse().findIndex(t=>t._zod.optin!=="optional");n._zod.parse=(t,s)=>{const c=t.value;if(!Array.isArray(c))return t.issues.push({input:c,inst:n,expected:"tuple",code:"invalid_type"}),t;t.value=[];const m=[];if(!e.rest){const f=c.length>o.length,S=c.length<r-1;if(f||S)return t.issues.push({...f?{code:"too_big",maximum:o.length}:{code:"too_small",minimum:o.length},input:c,inst:n,origin:"array"}),t}let d=-1;for(const f of o){if(d++,d>=c.length&&d>=r)continue;const S=f._zod.run({value:c[d],issues:[]},s);S instanceof Promise?m.push(S.then(p=>Hs(p,t,d))):Hs(S,t,d)}if(e.rest){const f=c.slice(o.length);for(const S of f){d++;const p=e.rest._zod.run({value:S,issues:[]},s);p instanceof Promise?m.push(p.then(v=>Hs(v,t,d))):Hs(p,t,d)}}return m.length?Promise.all(m).then(()=>t):t}});function Hs(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues)),e.value[o]=n.value}const v0=H("$ZodRecord",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!Ur(t))return o.issues.push({expected:"record",code:"invalid_type",input:t,inst:n}),o;const s=[];if(e.keyType._zod.values){const c=e.keyType._zod.values;o.value={};for(const d of c)if(typeof d=="string"||typeof d=="number"||typeof d=="symbol"){const f=e.valueType._zod.run({value:t[d],issues:[]},r);f instanceof Promise?s.push(f.then(S=>{S.issues.length&&o.issues.push(...mt(d,S.issues)),o.value[d]=S.value})):(f.issues.length&&o.issues.push(...mt(d,f.issues)),o.value[d]=f.value)}let m;for(const d in t)c.has(d)||(m=m??[],m.push(d));m&&m.length>0&&o.issues.push({code:"unrecognized_keys",input:t,inst:n,keys:m})}else{o.value={};for(const c of Reflect.ownKeys(t)){if(c==="__proto__")continue;const m=e.keyType._zod.run({value:c,issues:[]},r);if(m instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(m.issues.length){o.issues.push({code:"invalid_key",origin:"record",issues:m.issues.map(f=>gt(f,r,Re())),input:c,path:[c],inst:n}),o.value[m.value]=m.value;continue}const d=e.valueType._zod.run({value:t[c],issues:[]},r);d instanceof Promise?s.push(d.then(f=>{f.issues.length&&o.issues.push(...mt(c,f.issues)),o.value[m.value]=f.value})):(d.issues.length&&o.issues.push(...mt(c,d.issues)),o.value[m.value]=d.value)}}return s.length?Promise.all(s).then(()=>o):o}}),k0=H("$ZodMap",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!(t instanceof Map))return o.issues.push({expected:"map",code:"invalid_type",input:t,inst:n}),o;const s=[];o.value=new Map;for(const[c,m]of t){const d=e.keyType._zod.run({value:c,issues:[]},r),f=e.valueType._zod.run({value:m,issues:[]},r);d instanceof Promise||f instanceof Promise?s.push(Promise.all([d,f]).then(([S,p])=>{Mb(S,p,o,c,t,n,r)})):Mb(d,f,o,c,t,n,r)}return s.length?Promise.all(s).then(()=>o):o}});function Mb(n,e,o,r,t,s,c){n.issues.length&&(yl.has(typeof r)?o.issues.push(...mt(r,n.issues)):o.issues.push({code:"invalid_key",origin:"map",input:t,inst:s,issues:n.issues.map(m=>gt(m,c,Re()))})),e.issues.length&&(yl.has(typeof r)?o.issues.push(...mt(r,e.issues)):o.issues.push({origin:"map",code:"invalid_element",input:t,inst:s,key:r,issues:e.issues.map(m=>gt(m,c,Re()))})),o.value.set(n.value,e.value)}const b0=H("$ZodSet",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!(t instanceof Set))return o.issues.push({input:t,inst:n,expected:"set",code:"invalid_type"}),o;const s=[];o.value=new Set;for(const c of t){const m=e.valueType._zod.run({value:c,issues:[]},r);m instanceof Promise?s.push(m.then(d=>Ab(d,o))):Ab(m,o)}return s.length?Promise.all(s).then(()=>o):o}});function Ab(n,e){n.issues.length&&e.issues.push(...n.issues),e.value.add(n.value)}const T0=H("$ZodEnum",(n,e)=>{kn.init(n,e);const o=df(e.entries),r=new Set(o);n._zod.values=r,n._zod.pattern=new RegExp(`^(${o.filter(t=>yl.has(typeof t)).map(t=>typeof t=="string"?Ka(t):t.toString()).join("|")})$`),n._zod.parse=(t,s)=>{const c=t.value;return r.has(c)||t.issues.push({code:"invalid_value",values:o,input:c,inst:n}),t}}),M0=H("$ZodLiteral",(n,e)=>{if(kn.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");n._zod.values=new Set(e.values),n._zod.pattern=new RegExp(`^(${e.values.map(o=>typeof o=="string"?Ka(o):o?Ka(o.toString()):String(o)).join("|")})$`),n._zod.parse=(o,r)=>{const t=o.value;return n._zod.values.has(t)||o.issues.push({code:"invalid_value",values:e.values,input:t,inst:n}),o}}),A0=H("$ZodFile",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return t instanceof File||o.issues.push({expected:"file",code:"invalid_type",input:t,inst:n}),o}}),Rf=H("$ZodTransform",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=e.transform(o.value,o);if(r.async)return(t instanceof Promise?t:Promise.resolve(t)).then(c=>(o.value=c,o));if(t instanceof Promise)throw new mo;return o.value=t,o}});function Db(n,e){return n.issues.length&&e===void 0?{issues:[],value:void 0}:n}const D0=H("$ZodOptional",(n,e)=>{kn.init(n,e),n._zod.optin="optional",n._zod.optout="optional",Bn(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),Bn(n._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${jl(o.source)})?$`):void 0}),n._zod.parse=(o,r)=>{if(e.innerType._zod.optin==="optional"){const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(s=>Db(s,o.value)):Db(t,o.value)}return o.value===void 0?o:e.innerType._zod.run(o,r)}}),w0=H("$ZodNullable",(n,e)=>{kn.init(n,e),Bn(n._zod,"optin",()=>e.innerType._zod.optin),Bn(n._zod,"optout",()=>e.innerType._zod.optout),Bn(n._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${jl(o.source)}|null)$`):void 0}),Bn(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(o,r)=>o.value===null?o:e.innerType._zod.run(o,r)}),O0=H("$ZodDefault",(n,e)=>{kn.init(n,e),n._zod.optin="optional",Bn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>{if(o.value===void 0)return o.value=e.defaultValue,o;const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(s=>wb(s,e)):wb(t,e)}});function wb(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const C0=H("$ZodPrefault",(n,e)=>{kn.init(n,e),n._zod.optin="optional",Bn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>(o.value===void 0&&(o.value=e.defaultValue),e.innerType._zod.run(o,r))}),I0=H("$ZodNonOptional",(n,e)=>{kn.init(n,e),Bn(n._zod,"values",()=>{const o=e.innerType._zod.values;return o?new Set([...o].filter(r=>r!==void 0)):void 0}),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(s=>Ob(s,n)):Ob(t,n)}});function Ob(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const K0=H("$ZodSuccess",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(s=>(o.value=s.issues.length===0,o)):(o.value=t.issues.length===0,o)}}),R0=H("$ZodCatch",(n,e)=>{kn.init(n,e),Bn(n._zod,"optin",()=>e.innerType._zod.optin),Bn(n._zod,"optout",()=>e.innerType._zod.optout),Bn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(s=>(o.value=s.value,s.issues.length&&(o.value=e.catchValue({...o,error:{issues:s.issues.map(c=>gt(c,r,Re()))},input:o.value}),o.issues=[]),o)):(o.value=t.value,t.issues.length&&(o.value=e.catchValue({...o,error:{issues:t.issues.map(s=>gt(s,r,Re()))},input:o.value}),o.issues=[]),o)}}),B0=H("$ZodNaN",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>((typeof o.value!="number"||!Number.isNaN(o.value))&&o.issues.push({input:o.value,inst:n,expected:"nan",code:"invalid_type"}),o)}),Bf=H("$ZodPipe",(n,e)=>{kn.init(n,e),Bn(n._zod,"values",()=>e.in._zod.values),Bn(n._zod,"optin",()=>e.in._zod.optin),Bn(n._zod,"optout",()=>e.out._zod.optout),Bn(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(o,r)=>{const t=e.in._zod.run(o,r);return t instanceof Promise?t.then(s=>Cb(s,e,r)):Cb(t,e,r)}});function Cb(n,e,o){return n.issues.length?n:e.out._zod.run({value:n.value,issues:n.issues},o)}const P0=H("$ZodReadonly",(n,e)=>{kn.init(n,e),Bn(n._zod,"propValues",()=>e.innerType._zod.propValues),Bn(n._zod,"values",()=>e.innerType._zod.values),Bn(n._zod,"optin",()=>e.innerType._zod.optin),Bn(n._zod,"optout",()=>e.innerType._zod.optout),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(Ib):Ib(t)}});function Ib(n){return n.value=Object.freeze(n.value),n}const E0=H("$ZodTemplateLiteral",(n,e)=>{kn.init(n,e);const o=[];for(const r of e.parts)if(r instanceof kn){if(!r._zod.pattern)throw new Error(`Invalid template literal part, no pattern found: ${[...r._zod.traits].shift()}`);const t=r._zod.pattern instanceof RegExp?r._zod.pattern.source:r._zod.pattern;if(!t)throw new Error(`Invalid template literal part: ${r._zod.traits}`);const s=t.startsWith("^")?1:0,c=t.endsWith("$")?t.length-1:t.length;o.push(t.slice(s,c))}else if(r===null||bA.has(typeof r))o.push(Ka(`${r}`));else throw new Error(`Invalid template literal part: ${r}`);n._zod.pattern=new RegExp(`^${o.join("")}$`),n._zod.parse=(r,t)=>typeof r.value!="string"?(r.issues.push({input:r.value,inst:n,expected:"template_literal",code:"invalid_type"}),r):(n._zod.pattern.lastIndex=0,n._zod.pattern.test(r.value)||r.issues.push({input:r.value,inst:n,code:"invalid_format",format:e.format??"template_literal",pattern:n._zod.pattern.source}),r)}),N0=H("$ZodPromise",(n,e)=>{kn.init(n,e),n._zod.parse=(o,r)=>Promise.resolve(o.value).then(t=>e.innerType._zod.run({value:t,issues:[]},r))}),H0=H("$ZodLazy",(n,e)=>{kn.init(n,e),Bn(n._zod,"innerType",()=>e.getter()),Bn(n._zod,"pattern",()=>n._zod.innerType._zod.pattern),Bn(n._zod,"propValues",()=>n._zod.innerType._zod.propValues),Bn(n._zod,"optin",()=>n._zod.innerType._zod.optin??void 0),Bn(n._zod,"optout",()=>n._zod.innerType._zod.optout??void 0),n._zod.parse=(o,r)=>n._zod.innerType._zod.run(o,r)}),G0=H("$ZodCustom",(n,e)=>{ae.init(n,e),kn.init(n,e),n._zod.parse=(o,r)=>o,n._zod.check=o=>{const r=o.value,t=e.fn(r);if(t instanceof Promise)return t.then(s=>Kb(s,o,r,n));Kb(t,o,r,n)}});function Kb(n,e,o,r){if(!n){const t={code:"custom",input:o,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(t.params=r._zod.def.params),e.issues.push(fo(t))}}const F1=()=>{const n={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"};return t=>{switch(t.code){case"invalid_type":return`مدخلات غير مقبولة: يفترض إدخال ${t.expected}، ولكن تم إدخال ${o(t.input)}`;case"invalid_value":return t.values.length===1?`مدخلات غير مقبولة: يفترض إدخال ${bn(t.values[0])}`:`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?` أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${s} ${t.maximum.toString()} ${c.unit??"عنصر"}`:`أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${s} ${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${s} ${t.minimum.toString()} ${c.unit}`:`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${s} ${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`نَص غير مقبول: يجب أن يبدأ بـ "${t.prefix}"`:s.format==="ends_with"?`نَص غير مقبول: يجب أن ينتهي بـ "${s.suffix}"`:s.format==="includes"?`نَص غير مقبول: يجب أن يتضمَّن "${s.includes}"`:s.format==="regex"?`نَص غير مقبول: يجب أن يطابق النمط ${s.pattern}`:`${r[s.format]??t.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${t.divisor}`;case"unrecognized_keys":return`معرف${t.keys.length>1?"ات":""} غريب${t.keys.length>1?"ة":""}: ${Q(t.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${t.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${t.origin}`;default:return"مدخل غير مقبول"}}};function U1(){return{localeError:F1()}}const V1=()=>{const n={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Yanlış dəyər: gözlənilən ${t.expected}, daxil olan ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Yanlış dəyər: gözlənilən ${bn(t.values[0])}`:`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${s}${t.maximum.toString()} ${c.unit??"element"}`:`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Çox kiçik: gözlənilən ${t.origin} ${s}${t.minimum.toString()} ${c.unit}`:`Çox kiçik: gözlənilən ${t.origin} ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Yanlış mətn: "${s.prefix}" ilə başlamalıdır`:s.format==="ends_with"?`Yanlış mətn: "${s.suffix}" ilə bitməlidir`:s.format==="includes"?`Yanlış mətn: "${s.includes}" daxil olmalıdır`:s.format==="regex"?`Yanlış mətn: ${s.pattern} şablonuna uyğun olmalıdır`:`Yanlış ${r[s.format]??t.format}`}case"not_multiple_of":return`Yanlış ədəd: ${t.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${t.keys.length>1?"lar":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`${t.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${t.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};function Y1(){return{localeError:V1()}}function Rb(n,e,o,r){const t=Math.abs(n),s=t%10,c=t%100;return c>=11&&c<=19?r:s===1?e:s>=2&&s<=4?o:r}const W1=()=>{const n={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"лік";case"object":{if(Array.isArray(t))return"масіў";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"};return t=>{switch(t.code){case"invalid_type":return`Няправільны ўвод: чакаўся ${t.expected}, атрымана ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Няправільны ўвод: чакалася ${bn(t.values[0])}`:`Няправільны варыянт: чакаўся адзін з ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);if(c){const m=Number(t.maximum),d=Rb(m,c.unit.one,c.unit.few,c.unit.many);return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна ${c.verb} ${s}${t.maximum.toString()} ${d}`}return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна быць ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);if(c){const m=Number(t.minimum),d=Rb(m,c.unit.one,c.unit.few,c.unit.many);return`Занадта малы: чакалася, што ${t.origin} павінна ${c.verb} ${s}${t.minimum.toString()} ${d}`}return`Занадта малы: чакалася, што ${t.origin} павінна быць ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Няправільны радок: павінен пачынацца з "${s.prefix}"`:s.format==="ends_with"?`Няправільны радок: павінен заканчвацца на "${s.suffix}"`:s.format==="includes"?`Няправільны радок: павінен змяшчаць "${s.includes}"`:s.format==="regex"?`Няправільны радок: павінен адпавядаць шаблону ${s.pattern}`:`Няправільны ${r[s.format]??t.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${t.keys.length>1?"ключы":"ключ"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${t.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${t.origin}`;default:return"Няправільны ўвод"}}};function Z1(){return{localeError:W1()}}const J1=()=>{const n={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Tipus invàlid: s'esperava ${t.expected}, s'ha rebut ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Valor invàlid: s'esperava ${bn(t.values[0])}`:`Opció invàlida: s'esperava una de ${Q(t.values," o ")}`;case"too_big":{const s=t.inclusive?"com a màxim":"menys de",c=e(t.origin);return c?`Massa gran: s'esperava que ${t.origin??"el valor"} contingués ${s} ${t.maximum.toString()} ${c.unit??"elements"}`:`Massa gran: s'esperava que ${t.origin??"el valor"} fos ${s} ${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?"com a mínim":"més de",c=e(t.origin);return c?`Massa petit: s'esperava que ${t.origin} contingués ${s} ${t.minimum.toString()} ${c.unit}`:`Massa petit: s'esperava que ${t.origin} fos ${s} ${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Format invàlid: ha de començar amb "${s.prefix}"`:s.format==="ends_with"?`Format invàlid: ha d'acabar amb "${s.suffix}"`:s.format==="includes"?`Format invàlid: ha d'incloure "${s.includes}"`:s.format==="regex"?`Format invàlid: ha de coincidir amb el patró ${s.pattern}`:`Format invàlid per a ${r[s.format]??t.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${t.divisor}`;case"unrecognized_keys":return`Clau${t.keys.length>1?"s":""} no reconeguda${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${t.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${t.origin}`;default:return"Entrada invàlida"}}};function X1(){return{localeError:J1()}}const q1=()=>{const n={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"číslo";case"string":return"řetězec";case"boolean":return"boolean";case"bigint":return"bigint";case"function":return"funkce";case"symbol":return"symbol";case"undefined":return"undefined";case"object":{if(Array.isArray(t))return"pole";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"};return t=>{switch(t.code){case"invalid_type":return`Neplatný vstup: očekáváno ${t.expected}, obdrženo ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Neplatný vstup: očekáváno ${bn(t.values[0])}`:`Neplatná možnost: očekávána jedna z hodnot ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Hodnota je příliš velká: ${t.origin??"hodnota"} musí mít ${s}${t.maximum.toString()} ${c.unit??"prvků"}`:`Hodnota je příliš velká: ${t.origin??"hodnota"} musí být ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Hodnota je příliš malá: ${t.origin??"hodnota"} musí mít ${s}${t.minimum.toString()} ${c.unit??"prvků"}`:`Hodnota je příliš malá: ${t.origin??"hodnota"} musí být ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Neplatný řetězec: musí začínat na "${s.prefix}"`:s.format==="ends_with"?`Neplatný řetězec: musí končit na "${s.suffix}"`:s.format==="includes"?`Neplatný řetězec: musí obsahovat "${s.includes}"`:s.format==="regex"?`Neplatný řetězec: musí odpovídat vzoru ${s.pattern}`:`Neplatný formát ${r[s.format]??t.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${t.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${Q(t.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${t.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${t.origin}`;default:return"Neplatný vstup"}}};function Q1(){return{localeError:q1()}}const nH=()=>{const n={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}},e={string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};function o(c){return n[c]??null}function r(c){return e[c]??c}const t=c=>{const m=typeof c;switch(m){case"number":return Number.isNaN(c)?"NaN":"tal";case"object":return Array.isArray(c)?"liste":c===null?"null":Object.getPrototypeOf(c)!==Object.prototype&&c.constructor?c.constructor.name:"objekt"}return m},s={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return c=>{switch(c.code){case"invalid_type":return`Ugyldigt input: forventede ${r(c.expected)}, fik ${r(t(c.input))}`;case"invalid_value":return c.values.length===1?`Ugyldig værdi: forventede ${bn(c.values[0])}`:`Ugyldigt valg: forventede en af følgende ${Q(c.values,"|")}`;case"too_big":{const m=c.inclusive?"<=":"<",d=o(c.origin),f=r(c.origin);return d?`For stor: forventede ${f??"value"} ${d.verb} ${m} ${c.maximum.toString()} ${d.unit??"elementer"}`:`For stor: forventede ${f??"value"} havde ${m} ${c.maximum.toString()}`}case"too_small":{const m=c.inclusive?">=":">",d=o(c.origin),f=r(c.origin);return d?`For lille: forventede ${f} ${d.verb} ${m} ${c.minimum.toString()} ${d.unit}`:`For lille: forventede ${f} havde ${m} ${c.minimum.toString()}`}case"invalid_format":{const m=c;return m.format==="starts_with"?`Ugyldig streng: skal starte med "${m.prefix}"`:m.format==="ends_with"?`Ugyldig streng: skal ende med "${m.suffix}"`:m.format==="includes"?`Ugyldig streng: skal indeholde "${m.includes}"`:m.format==="regex"?`Ugyldig streng: skal matche mønsteret ${m.pattern}`:`Ugyldig ${s[m.format]??c.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${c.divisor}`;case"unrecognized_keys":return`${c.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${Q(c.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${c.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${c.origin}`;default:return"Ugyldigt input"}}};function eH(){return{localeError:nH()}}const tH=()=>{const n={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"Zahl";case"object":{if(Array.isArray(t))return"Array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"};return t=>{switch(t.code){case"invalid_type":return`Ungültige Eingabe: erwartet ${t.expected}, erhalten ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ungültige Eingabe: erwartet ${bn(t.values[0])}`:`Ungültige Option: erwartet eine von ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Zu groß: erwartet, dass ${t.origin??"Wert"} ${s}${t.maximum.toString()} ${c.unit??"Elemente"} hat`:`Zu groß: erwartet, dass ${t.origin??"Wert"} ${s}${t.maximum.toString()} ist`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Zu klein: erwartet, dass ${t.origin} ${s}${t.minimum.toString()} ${c.unit} hat`:`Zu klein: erwartet, dass ${t.origin} ${s}${t.minimum.toString()} ist`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Ungültiger String: muss mit "${s.prefix}" beginnen`:s.format==="ends_with"?`Ungültiger String: muss mit "${s.suffix}" enden`:s.format==="includes"?`Ungültiger String: muss "${s.includes}" enthalten`:s.format==="regex"?`Ungültiger String: muss dem Muster ${s.pattern} entsprechen`:`Ungültig: ${r[s.format]??t.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${t.divisor} sein`;case"unrecognized_keys":return`${t.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${t.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${t.origin}`;default:return"Ungültige Eingabe"}}};function aH(){return{localeError:tH()}}const iH=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"number";case"object":{if(Array.isArray(n))return"array";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},oH=()=>{const n={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return n[r]??null}const o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${iH(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${bn(r.values[0])}`:`Invalid option: expected one of ${Q(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",s=e(r.origin);return s?`Too big: expected ${r.origin??"value"} to have ${t}${r.maximum.toString()} ${s.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",s=e(r.origin);return s?`Too small: expected ${r.origin} to have ${t}${r.minimum.toString()} ${s.unit}`:`Too small: expected ${r.origin} to be ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Invalid string: must start with "${t.prefix}"`:t.format==="ends_with"?`Invalid string: must end with "${t.suffix}"`:t.format==="includes"?`Invalid string: must include "${t.includes}"`:t.format==="regex"?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${o[t.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${Q(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function x0(){return{localeError:oH()}}const rH=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"nombro";case"object":{if(Array.isArray(n))return"tabelo";if(n===null)return"senvalora";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},uH=()=>{const n={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function e(r){return n[r]??null}const o={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"};return r=>{switch(r.code){case"invalid_type":return`Nevalida enigo: atendiĝis ${r.expected}, riceviĝis ${rH(r.input)}`;case"invalid_value":return r.values.length===1?`Nevalida enigo: atendiĝis ${bn(r.values[0])}`:`Nevalida opcio: atendiĝis unu el ${Q(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",s=e(r.origin);return s?`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${t}${r.maximum.toString()} ${s.unit??"elementojn"}`:`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",s=e(r.origin);return s?`Tro malgranda: atendiĝis ke ${r.origin} havu ${t}${r.minimum.toString()} ${s.unit}`:`Tro malgranda: atendiĝis ke ${r.origin} estu ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Nevalida karaktraro: devas komenciĝi per "${t.prefix}"`:t.format==="ends_with"?`Nevalida karaktraro: devas finiĝi per "${t.suffix}"`:t.format==="includes"?`Nevalida karaktraro: devas inkluzivi "${t.includes}"`:t.format==="regex"?`Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}`:`Nevalida ${o[t.format]??r.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${r.divisor}`;case"unrecognized_keys":return`Nekonata${r.keys.length>1?"j":""} ŝlosilo${r.keys.length>1?"j":""}: ${Q(r.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${r.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${r.origin}`;default:return"Nevalida enigo"}}};function sH(){return{localeError:uH()}}const lH=()=>{const n={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"número";case"object":{if(Array.isArray(t))return"arreglo";if(t===null)return"nulo";if(Object.getPrototypeOf(t)!==Object.prototype)return t.constructor.name}}return s},r={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Entrada inválida: se esperaba ${t.expected}, recibido ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrada inválida: se esperaba ${bn(t.values[0])}`:`Opción inválida: se esperaba una de ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Demasiado grande: se esperaba que ${t.origin??"valor"} tuviera ${s}${t.maximum.toString()} ${c.unit??"elementos"}`:`Demasiado grande: se esperaba que ${t.origin??"valor"} fuera ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Demasiado pequeño: se esperaba que ${t.origin} tuviera ${s}${t.minimum.toString()} ${c.unit}`:`Demasiado pequeño: se esperaba que ${t.origin} fuera ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Cadena inválida: debe comenzar con "${s.prefix}"`:s.format==="ends_with"?`Cadena inválida: debe terminar en "${s.suffix}"`:s.format==="includes"?`Cadena inválida: debe incluir "${s.includes}"`:s.format==="regex"?`Cadena inválida: debe coincidir con el patrón ${s.pattern}`:`Inválido ${r[s.format]??t.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Llave${t.keys.length>1?"s":""} desconocida${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Llave inválida en ${t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${t.origin}`;default:return"Entrada inválida"}}};function cH(){return{localeError:lH()}}const hH=()=>{const n={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"عدد";case"object":{if(Array.isArray(t))return"آرایه";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"};return t=>{switch(t.code){case"invalid_type":return`ورودی نامعتبر: می‌بایست ${t.expected} می‌بود، ${o(t.input)} دریافت شد`;case"invalid_value":return t.values.length===1?`ورودی نامعتبر: می‌بایست ${bn(t.values[0])} می‌بود`:`گزینه نامعتبر: می‌بایست یکی از ${Q(t.values,"|")} می‌بود`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`خیلی بزرگ: ${t.origin??"مقدار"} باید ${s}${t.maximum.toString()} ${c.unit??"عنصر"} باشد`:`خیلی بزرگ: ${t.origin??"مقدار"} باید ${s}${t.maximum.toString()} باشد`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`خیلی کوچک: ${t.origin} باید ${s}${t.minimum.toString()} ${c.unit} باشد`:`خیلی کوچک: ${t.origin} باید ${s}${t.minimum.toString()} باشد`}case"invalid_format":{const s=t;return s.format==="starts_with"?`رشته نامعتبر: باید با "${s.prefix}" شروع شود`:s.format==="ends_with"?`رشته نامعتبر: باید با "${s.suffix}" تمام شود`:s.format==="includes"?`رشته نامعتبر: باید شامل "${s.includes}" باشد`:s.format==="regex"?`رشته نامعتبر: باید با الگوی ${s.pattern} مطابقت داشته باشد`:`${r[s.format]??t.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${t.divisor} باشد`;case"unrecognized_keys":return`کلید${t.keys.length>1?"های":""} ناشناس: ${Q(t.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${t.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${t.origin}`;default:return"ورودی نامعتبر"}}};function dH(){return{localeError:hH()}}const mH=()=>{const n={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"};return t=>{switch(t.code){case"invalid_type":return`Virheellinen tyyppi: odotettiin ${t.expected}, oli ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Virheellinen syöte: täytyy olla ${bn(t.values[0])}`:`Virheellinen valinta: täytyy olla yksi seuraavista: ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Liian suuri: ${c.subject} täytyy olla ${s}${t.maximum.toString()} ${c.unit}`.trim():`Liian suuri: arvon täytyy olla ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Liian pieni: ${c.subject} täytyy olla ${s}${t.minimum.toString()} ${c.unit}`.trim():`Liian pieni: arvon täytyy olla ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Virheellinen syöte: täytyy alkaa "${s.prefix}"`:s.format==="ends_with"?`Virheellinen syöte: täytyy loppua "${s.suffix}"`:s.format==="includes"?`Virheellinen syöte: täytyy sisältää "${s.includes}"`:s.format==="regex"?`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${s.pattern}`:`Virheellinen ${r[s.format]??t.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${t.divisor} monikerta`;case"unrecognized_keys":return`${t.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${Q(t.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};function fH(){return{localeError:mH()}}const gH=()=>{const n={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"nombre";case"object":{if(Array.isArray(t))return"tableau";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return t=>{switch(t.code){case"invalid_type":return`Entrée invalide : ${t.expected} attendu, ${o(t.input)} reçu`;case"invalid_value":return t.values.length===1?`Entrée invalide : ${bn(t.values[0])} attendu`:`Option invalide : une valeur parmi ${Q(t.values,"|")} attendue`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Trop grand : ${t.origin??"valeur"} doit ${c.verb} ${s}${t.maximum.toString()} ${c.unit??"élément(s)"}`:`Trop grand : ${t.origin??"valeur"} doit être ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Trop petit : ${t.origin} doit ${c.verb} ${s}${t.minimum.toString()} ${c.unit}`:`Trop petit : ${t.origin} doit être ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Chaîne invalide : doit commencer par "${s.prefix}"`:s.format==="ends_with"?`Chaîne invalide : doit se terminer par "${s.suffix}"`:s.format==="includes"?`Chaîne invalide : doit inclure "${s.includes}"`:s.format==="regex"?`Chaîne invalide : doit correspondre au modèle ${s.pattern}`:`${r[s.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${Q(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function SH(){return{localeError:gH()}}const pH=()=>{const n={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return t=>{switch(t.code){case"invalid_type":return`Entrée invalide : attendu ${t.expected}, reçu ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrée invalide : attendu ${bn(t.values[0])}`:`Option invalide : attendu l'une des valeurs suivantes ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"≤":"<",c=e(t.origin);return c?`Trop grand : attendu que ${t.origin??"la valeur"} ait ${s}${t.maximum.toString()} ${c.unit}`:`Trop grand : attendu que ${t.origin??"la valeur"} soit ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?"≥":">",c=e(t.origin);return c?`Trop petit : attendu que ${t.origin} ait ${s}${t.minimum.toString()} ${c.unit}`:`Trop petit : attendu que ${t.origin} soit ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Chaîne invalide : doit commencer par "${s.prefix}"`:s.format==="ends_with"?`Chaîne invalide : doit se terminer par "${s.suffix}"`:s.format==="includes"?`Chaîne invalide : doit inclure "${s.includes}"`:s.format==="regex"?`Chaîne invalide : doit correspondre au motif ${s.pattern}`:`${r[s.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${Q(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function yH(){return{localeError:pH()}}const vH=()=>{const n={string:{unit:"אותיות",verb:"לכלול"},file:{unit:"בייטים",verb:"לכלול"},array:{unit:"פריטים",verb:"לכלול"},set:{unit:"פריטים",verb:"לכלול"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"קלט",email:"כתובת אימייל",url:"כתובת רשת",emoji:"אימוג'י",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"תאריך וזמן ISO",date:"תאריך ISO",time:"זמן ISO",duration:"משך זמן ISO",ipv4:"כתובת IPv4",ipv6:"כתובת IPv6",cidrv4:"טווח IPv4",cidrv6:"טווח IPv6",base64:"מחרוזת בבסיס 64",base64url:"מחרוזת בבסיס 64 לכתובות רשת",json_string:"מחרוזת JSON",e164:"מספר E.164",jwt:"JWT",template_literal:"קלט"};return t=>{switch(t.code){case"invalid_type":return`קלט לא תקין: צריך ${t.expected}, התקבל ${o(t.input)}`;case"invalid_value":return t.values.length===1?`קלט לא תקין: צריך ${bn(t.values[0])}`:`קלט לא תקין: צריך אחת מהאפשרויות  ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`גדול מדי: ${t.origin??"value"} צריך להיות ${s}${t.maximum.toString()} ${c.unit??"elements"}`:`גדול מדי: ${t.origin??"value"} צריך להיות ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`קטן מדי: ${t.origin} צריך להיות ${s}${t.minimum.toString()} ${c.unit}`:`קטן מדי: ${t.origin} צריך להיות ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`מחרוזת לא תקינה: חייבת להתחיל ב"${s.prefix}"`:s.format==="ends_with"?`מחרוזת לא תקינה: חייבת להסתיים ב "${s.suffix}"`:s.format==="includes"?`מחרוזת לא תקינה: חייבת לכלול "${s.includes}"`:s.format==="regex"?`מחרוזת לא תקינה: חייבת להתאים לתבנית ${s.pattern}`:`${r[s.format]??t.format} לא תקין`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;case"unrecognized_keys":return`מפתח${t.keys.length>1?"ות":""} לא מזוה${t.keys.length>1?"ים":"ה"}: ${Q(t.keys,", ")}`;case"invalid_key":return`מפתח לא תקין ב${t.origin}`;case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${t.origin}`;default:return"קלט לא תקין"}}};function kH(){return{localeError:vH()}}const bH=()=>{const n={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"szám";case"object":{if(Array.isArray(t))return"tömb";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"};return t=>{switch(t.code){case"invalid_type":return`Érvénytelen bemenet: a várt érték ${t.expected}, a kapott érték ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Érvénytelen bemenet: a várt érték ${bn(t.values[0])}`:`Érvénytelen opció: valamelyik érték várt ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Túl nagy: ${t.origin??"érték"} mérete túl nagy ${s}${t.maximum.toString()} ${c.unit??"elem"}`:`Túl nagy: a bemeneti érték ${t.origin??"érték"} túl nagy: ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Túl kicsi: a bemeneti érték ${t.origin} mérete túl kicsi ${s}${t.minimum.toString()} ${c.unit}`:`Túl kicsi: a bemeneti érték ${t.origin} túl kicsi ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Érvénytelen string: "${s.prefix}" értékkel kell kezdődnie`:s.format==="ends_with"?`Érvénytelen string: "${s.suffix}" értékkel kell végződnie`:s.format==="includes"?`Érvénytelen string: "${s.includes}" értéket kell tartalmaznia`:s.format==="regex"?`Érvénytelen string: ${s.pattern} mintának kell megfelelnie`:`Érvénytelen ${r[s.format]??t.format}`}case"not_multiple_of":return`Érvénytelen szám: ${t.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${t.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${t.origin}`;default:return"Érvénytelen bemenet"}}};function TH(){return{localeError:bH()}}const MH=()=>{const n={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input tidak valid: diharapkan ${t.expected}, diterima ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input tidak valid: diharapkan ${bn(t.values[0])}`:`Pilihan tidak valid: diharapkan salah satu dari ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Terlalu besar: diharapkan ${t.origin??"value"} memiliki ${s}${t.maximum.toString()} ${c.unit??"elemen"}`:`Terlalu besar: diharapkan ${t.origin??"value"} menjadi ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Terlalu kecil: diharapkan ${t.origin} memiliki ${s}${t.minimum.toString()} ${c.unit}`:`Terlalu kecil: diharapkan ${t.origin} menjadi ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`String tidak valid: harus dimulai dengan "${s.prefix}"`:s.format==="ends_with"?`String tidak valid: harus berakhir dengan "${s.suffix}"`:s.format==="includes"?`String tidak valid: harus menyertakan "${s.includes}"`:s.format==="regex"?`String tidak valid: harus sesuai pola ${s.pattern}`:`${r[s.format]??t.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${t.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${t.origin}`;default:return"Input tidak valid"}}};function AH(){return{localeError:MH()}}const DH=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"númer";case"object":{if(Array.isArray(n))return"fylki";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},wH=()=>{const n={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function e(r){return n[r]??null}const o={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"};return r=>{switch(r.code){case"invalid_type":return`Rangt gildi: Þú slóst inn ${DH(r.input)} þar sem á að vera ${r.expected}`;case"invalid_value":return r.values.length===1?`Rangt gildi: gert ráð fyrir ${bn(r.values[0])}`:`Ógilt val: má vera eitt af eftirfarandi ${Q(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",s=e(r.origin);return s?`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} hafi ${t}${r.maximum.toString()} ${s.unit??"hluti"}`:`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} sé ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",s=e(r.origin);return s?`Of lítið: gert er ráð fyrir að ${r.origin} hafi ${t}${r.minimum.toString()} ${s.unit}`:`Of lítið: gert er ráð fyrir að ${r.origin} sé ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Ógildur strengur: verður að byrja á "${t.prefix}"`:t.format==="ends_with"?`Ógildur strengur: verður að enda á "${t.suffix}"`:t.format==="includes"?`Ógildur strengur: verður að innihalda "${t.includes}"`:t.format==="regex"?`Ógildur strengur: verður að fylgja mynstri ${t.pattern}`:`Rangt ${o[t.format]??r.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${r.divisor}`;case"unrecognized_keys":return`Óþekkt ${r.keys.length>1?"ir lyklar":"ur lykill"}: ${Q(r.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${r.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${r.origin}`;default:return"Rangt gildi"}}};function OH(){return{localeError:wH()}}const CH=()=>{const n={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"numero";case"object":{if(Array.isArray(t))return"vettore";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input non valido: atteso ${t.expected}, ricevuto ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input non valido: atteso ${bn(t.values[0])}`:`Opzione non valida: atteso uno tra ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Troppo grande: ${t.origin??"valore"} deve avere ${s}${t.maximum.toString()} ${c.unit??"elementi"}`:`Troppo grande: ${t.origin??"valore"} deve essere ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Troppo piccolo: ${t.origin} deve avere ${s}${t.minimum.toString()} ${c.unit}`:`Troppo piccolo: ${t.origin} deve essere ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Stringa non valida: deve iniziare con "${s.prefix}"`:s.format==="ends_with"?`Stringa non valida: deve terminare con "${s.suffix}"`:s.format==="includes"?`Stringa non valida: deve includere "${s.includes}"`:s.format==="regex"?`Stringa non valida: deve corrispondere al pattern ${s.pattern}`:`Invalid ${r[s.format]??t.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${t.divisor}`;case"unrecognized_keys":return`Chiav${t.keys.length>1?"i":"e"} non riconosciut${t.keys.length>1?"e":"a"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${t.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${t.origin}`;default:return"Input non valido"}}};function IH(){return{localeError:CH()}}const KH=()=>{const n={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"数値";case"object":{if(Array.isArray(t))return"配列";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"};return t=>{switch(t.code){case"invalid_type":return`無効な入力: ${t.expected}が期待されましたが、${o(t.input)}が入力されました`;case"invalid_value":return t.values.length===1?`無効な入力: ${bn(t.values[0])}が期待されました`:`無効な選択: ${Q(t.values,"、")}のいずれかである必要があります`;case"too_big":{const s=t.inclusive?"以下である":"より小さい",c=e(t.origin);return c?`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${c.unit??"要素"}${s}必要があります`:`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${s}必要があります`}case"too_small":{const s=t.inclusive?"以上である":"より大きい",c=e(t.origin);return c?`小さすぎる値: ${t.origin}は${t.minimum.toString()}${c.unit}${s}必要があります`:`小さすぎる値: ${t.origin}は${t.minimum.toString()}${s}必要があります`}case"invalid_format":{const s=t;return s.format==="starts_with"?`無効な文字列: "${s.prefix}"で始まる必要があります`:s.format==="ends_with"?`無効な文字列: "${s.suffix}"で終わる必要があります`:s.format==="includes"?`無効な文字列: "${s.includes}"を含む必要があります`:s.format==="regex"?`無効な文字列: パターン${s.pattern}に一致する必要があります`:`無効な${r[s.format]??t.format}`}case"not_multiple_of":return`無効な数値: ${t.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${t.keys.length>1?"群":""}: ${Q(t.keys,"、")}`;case"invalid_key":return`${t.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${t.origin}内の無効な値`;default:return"無効な入力"}}};function RH(){return{localeError:KH()}}const BH=()=>{const n={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"មិនមែនជាលេខ (NaN)":"លេខ";case"object":{if(Array.isArray(t))return"អារេ (Array)";if(t===null)return"គ្មានតម្លៃ (null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"};return t=>{switch(t.code){case"invalid_type":return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t.expected} ប៉ុន្តែទទួលបាន ${o(t.input)}`;case"invalid_value":return t.values.length===1?`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${bn(t.values[0])}`:`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${s} ${t.maximum.toString()} ${c.unit??"ធាតុ"}`:`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${s} ${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`តូចពេក៖ ត្រូវការ ${t.origin} ${s} ${t.minimum.toString()} ${c.unit}`:`តូចពេក៖ ត្រូវការ ${t.origin} ${s} ${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${s.prefix}"`:s.format==="ends_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${s.suffix}"`:s.format==="includes"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${s.includes}"`:s.format==="regex"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${s.pattern}`:`មិនត្រឹមត្រូវ៖ ${r[s.format]??t.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${t.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${Q(t.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};function PH(){return{localeError:BH()}}const EH=()=>{const n={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"};return t=>{switch(t.code){case"invalid_type":return`잘못된 입력: 예상 타입은 ${t.expected}, 받은 타입은 ${o(t.input)}입니다`;case"invalid_value":return t.values.length===1?`잘못된 입력: 값은 ${bn(t.values[0])} 이어야 합니다`:`잘못된 옵션: ${Q(t.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{const s=t.inclusive?"이하":"미만",c=s==="미만"?"이어야 합니다":"여야 합니다",m=e(t.origin),d=(m==null?void 0:m.unit)??"요소";return m?`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()}${d} ${s}${c}`:`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()} ${s}${c}`}case"too_small":{const s=t.inclusive?"이상":"초과",c=s==="이상"?"이어야 합니다":"여야 합니다",m=e(t.origin),d=(m==null?void 0:m.unit)??"요소";return m?`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()}${d} ${s}${c}`:`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()} ${s}${c}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`잘못된 문자열: "${s.prefix}"(으)로 시작해야 합니다`:s.format==="ends_with"?`잘못된 문자열: "${s.suffix}"(으)로 끝나야 합니다`:s.format==="includes"?`잘못된 문자열: "${s.includes}"을(를) 포함해야 합니다`:s.format==="regex"?`잘못된 문자열: 정규식 ${s.pattern} 패턴과 일치해야 합니다`:`잘못된 ${r[s.format]??t.format}`}case"not_multiple_of":return`잘못된 숫자: ${t.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${Q(t.keys,", ")}`;case"invalid_key":return`잘못된 키: ${t.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${t.origin}`;default:return"잘못된 입력"}}};function NH(){return{localeError:EH()}}const HH=()=>{const n={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"број";case"object":{if(Array.isArray(t))return"низа";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"};return t=>{switch(t.code){case"invalid_type":return`Грешен внес: се очекува ${t.expected}, примено ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Invalid input: expected ${bn(t.values[0])}`:`Грешана опција: се очекува една ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Премногу голем: се очекува ${t.origin??"вредноста"} да има ${s}${t.maximum.toString()} ${c.unit??"елементи"}`:`Премногу голем: се очекува ${t.origin??"вредноста"} да биде ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Премногу мал: се очекува ${t.origin} да има ${s}${t.minimum.toString()} ${c.unit}`:`Премногу мал: се очекува ${t.origin} да биде ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Неважечка низа: мора да започнува со "${s.prefix}"`:s.format==="ends_with"?`Неважечка низа: мора да завршува со "${s.suffix}"`:s.format==="includes"?`Неважечка низа: мора да вклучува "${s.includes}"`:s.format==="regex"?`Неважечка низа: мора да одгоара на патернот ${s.pattern}`:`Invalid ${r[s.format]??t.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${t.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${t.origin}`;default:return"Грешен внес"}}};function GH(){return{localeError:HH()}}const xH=()=>{const n={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"nombor";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input tidak sah: dijangka ${t.expected}, diterima ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input tidak sah: dijangka ${bn(t.values[0])}`:`Pilihan tidak sah: dijangka salah satu daripada ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Terlalu besar: dijangka ${t.origin??"nilai"} ${c.verb} ${s}${t.maximum.toString()} ${c.unit??"elemen"}`:`Terlalu besar: dijangka ${t.origin??"nilai"} adalah ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Terlalu kecil: dijangka ${t.origin} ${c.verb} ${s}${t.minimum.toString()} ${c.unit}`:`Terlalu kecil: dijangka ${t.origin} adalah ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`String tidak sah: mesti bermula dengan "${s.prefix}"`:s.format==="ends_with"?`String tidak sah: mesti berakhir dengan "${s.suffix}"`:s.format==="includes"?`String tidak sah: mesti mengandungi "${s.includes}"`:s.format==="regex"?`String tidak sah: mesti sepadan dengan corak ${s.pattern}`:`${r[s.format]??t.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${Q(t.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${t.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${t.origin}`;default:return"Input tidak sah"}}};function LH(){return{localeError:xH()}}const _H=()=>{const n={string:{unit:"tekens"},file:{unit:"bytes"},array:{unit:"elementen"},set:{unit:"elementen"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"getal";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"};return t=>{switch(t.code){case"invalid_type":return`Ongeldige invoer: verwacht ${t.expected}, ontving ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ongeldige invoer: verwacht ${bn(t.values[0])}`:`Ongeldige optie: verwacht één van ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Te lang: verwacht dat ${t.origin??"waarde"} ${s}${t.maximum.toString()} ${c.unit??"elementen"} bevat`:`Te lang: verwacht dat ${t.origin??"waarde"} ${s}${t.maximum.toString()} is`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Te kort: verwacht dat ${t.origin} ${s}${t.minimum.toString()} ${c.unit} bevat`:`Te kort: verwacht dat ${t.origin} ${s}${t.minimum.toString()} is`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Ongeldige tekst: moet met "${s.prefix}" beginnen`:s.format==="ends_with"?`Ongeldige tekst: moet op "${s.suffix}" eindigen`:s.format==="includes"?`Ongeldige tekst: moet "${s.includes}" bevatten`:s.format==="regex"?`Ongeldige tekst: moet overeenkomen met patroon ${s.pattern}`:`Ongeldig: ${r[s.format]??t.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${t.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${t.origin}`;default:return"Ongeldige invoer"}}};function jH(){return{localeError:_H()}}const zH=()=>{const n={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"tall";case"object":{if(Array.isArray(t))return"liste";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Ugyldig input: forventet ${t.expected}, fikk ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ugyldig verdi: forventet ${bn(t.values[0])}`:`Ugyldig valg: forventet en av ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`For stor(t): forventet ${t.origin??"value"} til å ha ${s}${t.maximum.toString()} ${c.unit??"elementer"}`:`For stor(t): forventet ${t.origin??"value"} til å ha ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`For lite(n): forventet ${t.origin} til å ha ${s}${t.minimum.toString()} ${c.unit}`:`For lite(n): forventet ${t.origin} til å ha ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Ugyldig streng: må starte med "${s.prefix}"`:s.format==="ends_with"?`Ugyldig streng: må ende med "${s.suffix}"`:s.format==="includes"?`Ugyldig streng: må inneholde "${s.includes}"`:s.format==="regex"?`Ugyldig streng: må matche mønsteret ${s.pattern}`:`Ugyldig ${r[s.format]??t.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${t.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${t.origin}`;default:return"Ugyldig input"}}};function $H(){return{localeError:zH()}}const FH=()=>{const n={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"numara";case"object":{if(Array.isArray(t))return"saf";if(t===null)return"gayb";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"};return t=>{switch(t.code){case"invalid_type":return`Fâsit giren: umulan ${t.expected}, alınan ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Fâsit giren: umulan ${bn(t.values[0])}`:`Fâsit tercih: mûteberler ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Fazla büyük: ${t.origin??"value"}, ${s}${t.maximum.toString()} ${c.unit??"elements"} sahip olmalıydı.`:`Fazla büyük: ${t.origin??"value"}, ${s}${t.maximum.toString()} olmalıydı.`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Fazla küçük: ${t.origin}, ${s}${t.minimum.toString()} ${c.unit} sahip olmalıydı.`:`Fazla küçük: ${t.origin}, ${s}${t.minimum.toString()} olmalıydı.`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Fâsit metin: "${s.prefix}" ile başlamalı.`:s.format==="ends_with"?`Fâsit metin: "${s.suffix}" ile bitmeli.`:s.format==="includes"?`Fâsit metin: "${s.includes}" ihtivâ etmeli.`:s.format==="regex"?`Fâsit metin: ${s.pattern} nakşına uymalı.`:`Fâsit ${r[s.format]??t.format}`}case"not_multiple_of":return`Fâsit sayı: ${t.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`${t.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${t.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};function UH(){return{localeError:FH()}}const VH=()=>{const n={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"عدد";case"object":{if(Array.isArray(t))return"ارې";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"};return t=>{switch(t.code){case"invalid_type":return`ناسم ورودي: باید ${t.expected} وای, مګر ${o(t.input)} ترلاسه شو`;case"invalid_value":return t.values.length===1?`ناسم ورودي: باید ${bn(t.values[0])} وای`:`ناسم انتخاب: باید یو له ${Q(t.values,"|")} څخه وای`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`ډیر لوی: ${t.origin??"ارزښت"} باید ${s}${t.maximum.toString()} ${c.unit??"عنصرونه"} ولري`:`ډیر لوی: ${t.origin??"ارزښت"} باید ${s}${t.maximum.toString()} وي`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`ډیر کوچنی: ${t.origin} باید ${s}${t.minimum.toString()} ${c.unit} ولري`:`ډیر کوچنی: ${t.origin} باید ${s}${t.minimum.toString()} وي`}case"invalid_format":{const s=t;return s.format==="starts_with"?`ناسم متن: باید د "${s.prefix}" سره پیل شي`:s.format==="ends_with"?`ناسم متن: باید د "${s.suffix}" سره پای ته ورسيږي`:s.format==="includes"?`ناسم متن: باید "${s.includes}" ولري`:s.format==="regex"?`ناسم متن: باید د ${s.pattern} سره مطابقت ولري`:`${r[s.format]??t.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${t.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${t.keys.length>1?"کلیډونه":"کلیډ"}: ${Q(t.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${t.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${t.origin} کې`;default:return"ناسمه ورودي"}}};function YH(){return{localeError:VH()}}const WH=()=>{const n={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"liczba";case"object":{if(Array.isArray(t))return"tablica";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"};return t=>{switch(t.code){case"invalid_type":return`Nieprawidłowe dane wejściowe: oczekiwano ${t.expected}, otrzymano ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Nieprawidłowe dane wejściowe: oczekiwano ${bn(t.values[0])}`:`Nieprawidłowa opcja: oczekiwano jednej z wartości ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Za duża wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${s}${t.maximum.toString()} ${c.unit??"elementów"}`:`Zbyt duż(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Za mała wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${s}${t.minimum.toString()} ${c.unit??"elementów"}`:`Zbyt mał(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Nieprawidłowy ciąg znaków: musi zaczynać się od "${s.prefix}"`:s.format==="ends_with"?`Nieprawidłowy ciąg znaków: musi kończyć się na "${s.suffix}"`:s.format==="includes"?`Nieprawidłowy ciąg znaków: musi zawierać "${s.includes}"`:s.format==="regex"?`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${s.pattern}`:`Nieprawidłow(y/a/e) ${r[s.format]??t.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${t.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${t.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${t.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};function ZH(){return{localeError:WH()}}const JH=()=>{const n={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"número";case"object":{if(Array.isArray(t))return"array";if(t===null)return"nulo";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Tipo inválido: esperado ${t.expected}, recebido ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrada inválida: esperado ${bn(t.values[0])}`:`Opção inválida: esperada uma das ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Muito grande: esperado que ${t.origin??"valor"} tivesse ${s}${t.maximum.toString()} ${c.unit??"elementos"}`:`Muito grande: esperado que ${t.origin??"valor"} fosse ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Muito pequeno: esperado que ${t.origin} tivesse ${s}${t.minimum.toString()} ${c.unit}`:`Muito pequeno: esperado que ${t.origin} fosse ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Texto inválido: deve começar com "${s.prefix}"`:s.format==="ends_with"?`Texto inválido: deve terminar com "${s.suffix}"`:s.format==="includes"?`Texto inválido: deve incluir "${s.includes}"`:s.format==="regex"?`Texto inválido: deve corresponder ao padrão ${s.pattern}`:`${r[s.format]??t.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Chave${t.keys.length>1?"s":""} desconhecida${t.keys.length>1?"s":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Chave inválida em ${t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${t.origin}`;default:return"Campo inválido"}}};function XH(){return{localeError:JH()}}function Bb(n,e,o,r){const t=Math.abs(n),s=t%10,c=t%100;return c>=11&&c<=19?r:s===1?e:s>=2&&s<=4?o:r}const qH=()=>{const n={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"число";case"object":{if(Array.isArray(t))return"массив";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"};return t=>{switch(t.code){case"invalid_type":return`Неверный ввод: ожидалось ${t.expected}, получено ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Неверный ввод: ожидалось ${bn(t.values[0])}`:`Неверный вариант: ожидалось одно из ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);if(c){const m=Number(t.maximum),d=Bb(m,c.unit.one,c.unit.few,c.unit.many);return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет иметь ${s}${t.maximum.toString()} ${d}`}return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);if(c){const m=Number(t.minimum),d=Bb(m,c.unit.one,c.unit.few,c.unit.many);return`Слишком маленькое значение: ожидалось, что ${t.origin} будет иметь ${s}${t.minimum.toString()} ${d}`}return`Слишком маленькое значение: ожидалось, что ${t.origin} будет ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Неверная строка: должна начинаться с "${s.prefix}"`:s.format==="ends_with"?`Неверная строка: должна заканчиваться на "${s.suffix}"`:s.format==="includes"?`Неверная строка: должна содержать "${s.includes}"`:s.format==="regex"?`Неверная строка: должна соответствовать шаблону ${s.pattern}`:`Неверный ${r[s.format]??t.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспознанн${t.keys.length>1?"ые":"ый"} ключ${t.keys.length>1?"и":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${t.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${t.origin}`;default:return"Неверные входные данные"}}};function QH(){return{localeError:qH()}}const nG=()=>{const n={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"število";case"object":{if(Array.isArray(t))return"tabela";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"};return t=>{switch(t.code){case"invalid_type":return`Neveljaven vnos: pričakovano ${t.expected}, prejeto ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Neveljaven vnos: pričakovano ${bn(t.values[0])}`:`Neveljavna možnost: pričakovano eno izmed ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} imelo ${s}${t.maximum.toString()} ${c.unit??"elementov"}`:`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Premajhno: pričakovano, da bo ${t.origin} imelo ${s}${t.minimum.toString()} ${c.unit}`:`Premajhno: pričakovano, da bo ${t.origin} ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Neveljaven niz: mora se začeti z "${s.prefix}"`:s.format==="ends_with"?`Neveljaven niz: mora se končati z "${s.suffix}"`:s.format==="includes"?`Neveljaven niz: mora vsebovati "${s.includes}"`:s.format==="regex"?`Neveljaven niz: mora ustrezati vzorcu ${s.pattern}`:`Neveljaven ${r[s.format]??t.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${t.divisor}`;case"unrecognized_keys":return`Neprepoznan${t.keys.length>1?"i ključi":" ključ"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${t.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${t.origin}`;default:return"Neveljaven vnos"}}};function eG(){return{localeError:nG()}}const tG=()=>{const n={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"antal";case"object":{if(Array.isArray(t))return"lista";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"};return t=>{switch(t.code){case"invalid_type":return`Ogiltig inmatning: förväntat ${t.expected}, fick ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ogiltig inmatning: förväntat ${bn(t.values[0])}`:`Ogiltigt val: förväntade en av ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`För stor(t): förväntade ${t.origin??"värdet"} att ha ${s}${t.maximum.toString()} ${c.unit??"element"}`:`För stor(t): förväntat ${t.origin??"värdet"} att ha ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`För lite(t): förväntade ${t.origin??"värdet"} att ha ${s}${t.minimum.toString()} ${c.unit}`:`För lite(t): förväntade ${t.origin??"värdet"} att ha ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Ogiltig sträng: måste börja med "${s.prefix}"`:s.format==="ends_with"?`Ogiltig sträng: måste sluta med "${s.suffix}"`:s.format==="includes"?`Ogiltig sträng: måste innehålla "${s.includes}"`:s.format==="regex"?`Ogiltig sträng: måste matcha mönstret "${s.pattern}"`:`Ogiltig(t) ${r[s.format]??t.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${Q(t.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${t.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${t.origin??"värdet"}`;default:return"Ogiltig input"}}};function aG(){return{localeError:tG()}}const iG=()=>{const n={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"எண் அல்லாதது":"எண்";case"object":{if(Array.isArray(t))return"அணி";if(t===null)return"வெறுமை";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t.expected}, பெறப்பட்டது ${o(t.input)}`;case"invalid_value":return t.values.length===1?`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${bn(t.values[0])}`:`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${Q(t.values,"|")} இல் ஒன்று`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${s}${t.maximum.toString()} ${c.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`:`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${s}${t.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${s}${t.minimum.toString()} ${c.unit} ஆக இருக்க வேண்டும்`:`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${s}${t.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{const s=t;return s.format==="starts_with"?`தவறான சரம்: "${s.prefix}" இல் தொடங்க வேண்டும்`:s.format==="ends_with"?`தவறான சரம்: "${s.suffix}" இல் முடிவடைய வேண்டும்`:s.format==="includes"?`தவறான சரம்: "${s.includes}" ஐ உள்ளடக்க வேண்டும்`:s.format==="regex"?`தவறான சரம்: ${s.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`:`தவறான ${r[s.format]??t.format}`}case"not_multiple_of":return`தவறான எண்: ${t.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${t.keys.length>1?"கள்":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`${t.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${t.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};function oG(){return{localeError:iG()}}const rG=()=>{const n={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"ไม่ใช่ตัวเลข (NaN)":"ตัวเลข";case"object":{if(Array.isArray(t))return"อาร์เรย์ (Array)";if(t===null)return"ไม่มีค่า (null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"};return t=>{switch(t.code){case"invalid_type":return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t.expected} แต่ได้รับ ${o(t.input)}`;case"invalid_value":return t.values.length===1?`ค่าไม่ถูกต้อง: ควรเป็น ${bn(t.values[0])}`:`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"ไม่เกิน":"น้อยกว่า",c=e(t.origin);return c?`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${s} ${t.maximum.toString()} ${c.unit??"รายการ"}`:`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${s} ${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?"อย่างน้อย":"มากกว่า",c=e(t.origin);return c?`น้อยกว่ากำหนด: ${t.origin} ควรมี${s} ${t.minimum.toString()} ${c.unit}`:`น้อยกว่ากำหนด: ${t.origin} ควรมี${s} ${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${s.prefix}"`:s.format==="ends_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${s.suffix}"`:s.format==="includes"?`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${s.includes}" อยู่ในข้อความ`:s.format==="regex"?`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${s.pattern}`:`รูปแบบไม่ถูกต้อง: ${r[s.format]??t.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${t.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${Q(t.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${t.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${t.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};function uG(){return{localeError:rG()}}const sG=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"number";case"object":{if(Array.isArray(n))return"array";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},lG=()=>{const n={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function e(r){return n[r]??null}const o={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"};return r=>{switch(r.code){case"invalid_type":return`Geçersiz değer: beklenen ${r.expected}, alınan ${sG(r.input)}`;case"invalid_value":return r.values.length===1?`Geçersiz değer: beklenen ${bn(r.values[0])}`:`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${Q(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",s=e(r.origin);return s?`Çok büyük: beklenen ${r.origin??"değer"} ${t}${r.maximum.toString()} ${s.unit??"öğe"}`:`Çok büyük: beklenen ${r.origin??"değer"} ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",s=e(r.origin);return s?`Çok küçük: beklenen ${r.origin} ${t}${r.minimum.toString()} ${s.unit}`:`Çok küçük: beklenen ${r.origin} ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Geçersiz metin: "${t.prefix}" ile başlamalı`:t.format==="ends_with"?`Geçersiz metin: "${t.suffix}" ile bitmeli`:t.format==="includes"?`Geçersiz metin: "${t.includes}" içermeli`:t.format==="regex"?`Geçersiz metin: ${t.pattern} desenine uymalı`:`Geçersiz ${o[t.format]??r.format}`}case"not_multiple_of":return`Geçersiz sayı: ${r.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${r.keys.length>1?"lar":""}: ${Q(r.keys,", ")}`;case"invalid_key":return`${r.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${r.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};function cG(){return{localeError:lG()}}const hG=()=>{const n={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"число";case"object":{if(Array.isArray(t))return"масив";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"};return t=>{switch(t.code){case"invalid_type":return`Неправильні вхідні дані: очікується ${t.expected}, отримано ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Неправильні вхідні дані: очікується ${bn(t.values[0])}`:`Неправильна опція: очікується одне з ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Занадто велике: очікується, що ${t.origin??"значення"} ${c.verb} ${s}${t.maximum.toString()} ${c.unit??"елементів"}`:`Занадто велике: очікується, що ${t.origin??"значення"} буде ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Занадто мале: очікується, що ${t.origin} ${c.verb} ${s}${t.minimum.toString()} ${c.unit}`:`Занадто мале: очікується, що ${t.origin} буде ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Неправильний рядок: повинен починатися з "${s.prefix}"`:s.format==="ends_with"?`Неправильний рядок: повинен закінчуватися на "${s.suffix}"`:s.format==="includes"?`Неправильний рядок: повинен містити "${s.includes}"`:s.format==="regex"?`Неправильний рядок: повинен відповідати шаблону ${s.pattern}`:`Неправильний ${r[s.format]??t.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${t.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${t.keys.length>1?"і":""}: ${Q(t.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${t.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${t.origin}`;default:return"Неправильні вхідні дані"}}};function dG(){return{localeError:hG()}}const mG=()=>{const n={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"نمبر";case"object":{if(Array.isArray(t))return"آرے";if(t===null)return"نل";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"};return t=>{switch(t.code){case"invalid_type":return`غلط ان پٹ: ${t.expected} متوقع تھا، ${o(t.input)} موصول ہوا`;case"invalid_value":return t.values.length===1?`غلط ان پٹ: ${bn(t.values[0])} متوقع تھا`:`غلط آپشن: ${Q(t.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`بہت بڑا: ${t.origin??"ویلیو"} کے ${s}${t.maximum.toString()} ${c.unit??"عناصر"} ہونے متوقع تھے`:`بہت بڑا: ${t.origin??"ویلیو"} کا ${s}${t.maximum.toString()} ہونا متوقع تھا`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`بہت چھوٹا: ${t.origin} کے ${s}${t.minimum.toString()} ${c.unit} ہونے متوقع تھے`:`بہت چھوٹا: ${t.origin} کا ${s}${t.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{const s=t;return s.format==="starts_with"?`غلط سٹرنگ: "${s.prefix}" سے شروع ہونا چاہیے`:s.format==="ends_with"?`غلط سٹرنگ: "${s.suffix}" پر ختم ہونا چاہیے`:s.format==="includes"?`غلط سٹرنگ: "${s.includes}" شامل ہونا چاہیے`:s.format==="regex"?`غلط سٹرنگ: پیٹرن ${s.pattern} سے میچ ہونا چاہیے`:`غلط ${r[s.format]??t.format}`}case"not_multiple_of":return`غلط نمبر: ${t.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${t.keys.length>1?"ز":""}: ${Q(t.keys,"، ")}`;case"invalid_key":return`${t.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${t.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};function fG(){return{localeError:mG()}}const gG=()=>{const n={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"số";case"object":{if(Array.isArray(t))return"mảng";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"};return t=>{switch(t.code){case"invalid_type":return`Đầu vào không hợp lệ: mong đợi ${t.expected}, nhận được ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Đầu vào không hợp lệ: mong đợi ${bn(t.values[0])}`:`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Quá lớn: mong đợi ${t.origin??"giá trị"} ${c.verb} ${s}${t.maximum.toString()} ${c.unit??"phần tử"}`:`Quá lớn: mong đợi ${t.origin??"giá trị"} ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Quá nhỏ: mong đợi ${t.origin} ${c.verb} ${s}${t.minimum.toString()} ${c.unit}`:`Quá nhỏ: mong đợi ${t.origin} ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Chuỗi không hợp lệ: phải bắt đầu bằng "${s.prefix}"`:s.format==="ends_with"?`Chuỗi không hợp lệ: phải kết thúc bằng "${s.suffix}"`:s.format==="includes"?`Chuỗi không hợp lệ: phải bao gồm "${s.includes}"`:s.format==="regex"?`Chuỗi không hợp lệ: phải khớp với mẫu ${s.pattern}`:`${r[s.format]??t.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${t.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${Q(t.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${t.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${t.origin}`;default:return"Đầu vào không hợp lệ"}}};function SG(){return{localeError:gG()}}const pG=()=>{const n={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"非数字(NaN)":"数字";case"object":{if(Array.isArray(t))return"数组";if(t===null)return"空值(null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"};return t=>{switch(t.code){case"invalid_type":return`无效输入：期望 ${t.expected}，实际接收 ${o(t.input)}`;case"invalid_value":return t.values.length===1?`无效输入：期望 ${bn(t.values[0])}`:`无效选项：期望以下之一 ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`数值过大：期望 ${t.origin??"值"} ${s}${t.maximum.toString()} ${c.unit??"个元素"}`:`数值过大：期望 ${t.origin??"值"} ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`数值过小：期望 ${t.origin} ${s}${t.minimum.toString()} ${c.unit}`:`数值过小：期望 ${t.origin} ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`无效字符串：必须以 "${s.prefix}" 开头`:s.format==="ends_with"?`无效字符串：必须以 "${s.suffix}" 结尾`:s.format==="includes"?`无效字符串：必须包含 "${s.includes}"`:s.format==="regex"?`无效字符串：必须满足正则表达式 ${s.pattern}`:`无效${r[s.format]??t.format}`}case"not_multiple_of":return`无效数字：必须是 ${t.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${Q(t.keys,", ")}`;case"invalid_key":return`${t.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${t.origin} 中包含无效值(value)`;default:return"无效输入"}}};function yG(){return{localeError:pG()}}const vG=()=>{const n={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"};return t=>{switch(t.code){case"invalid_type":return`無效的輸入值：預期為 ${t.expected}，但收到 ${o(t.input)}`;case"invalid_value":return t.values.length===1?`無效的輸入值：預期為 ${bn(t.values[0])}`:`無效的選項：預期為以下其中之一 ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`數值過大：預期 ${t.origin??"值"} 應為 ${s}${t.maximum.toString()} ${c.unit??"個元素"}`:`數值過大：預期 ${t.origin??"值"} 應為 ${s}${t.maximum.toString()}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`數值過小：預期 ${t.origin} 應為 ${s}${t.minimum.toString()} ${c.unit}`:`數值過小：預期 ${t.origin} 應為 ${s}${t.minimum.toString()}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`無效的字串：必須以 "${s.prefix}" 開頭`:s.format==="ends_with"?`無效的字串：必須以 "${s.suffix}" 結尾`:s.format==="includes"?`無效的字串：必須包含 "${s.includes}"`:s.format==="regex"?`無效的字串：必須符合格式 ${s.pattern}`:`無效的 ${r[s.format]??t.format}`}case"not_multiple_of":return`無效的數字：必須為 ${t.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${t.keys.length>1?"們":""}：${Q(t.keys,"、")}`;case"invalid_key":return`${t.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${t.origin} 中有無效的值`;default:return"無效的輸入值"}}};function kG(){return{localeError:vG()}}const bG=()=>{const n={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function e(t){return n[t]??null}const o=t=>{const s=typeof t;switch(s){case"number":return Number.isNaN(t)?"NaN":"nọ́mbà";case"object":{if(Array.isArray(t))return"akopọ";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return s},r={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"};return t=>{switch(t.code){case"invalid_type":return`Ìbáwọlé aṣìṣe: a ní láti fi ${t.expected}, àmọ̀ a rí ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ìbáwọlé aṣìṣe: a ní láti fi ${bn(t.values[0])}`:`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${Q(t.values,"|")}`;case"too_big":{const s=t.inclusive?"<=":"<",c=e(t.origin);return c?`Tó pọ̀ jù: a ní láti jẹ́ pé ${t.origin??"iye"} ${c.verb} ${s}${t.maximum} ${c.unit}`:`Tó pọ̀ jù: a ní láti jẹ́ ${s}${t.maximum}`}case"too_small":{const s=t.inclusive?">=":">",c=e(t.origin);return c?`Kéré ju: a ní láti jẹ́ pé ${t.origin} ${c.verb} ${s}${t.minimum} ${c.unit}`:`Kéré ju: a ní láti jẹ́ ${s}${t.minimum}`}case"invalid_format":{const s=t;return s.format==="starts_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${s.prefix}"`:s.format==="ends_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${s.suffix}"`:s.format==="includes"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${s.includes}"`:s.format==="regex"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${s.pattern}`:`Aṣìṣe: ${r[s.format]??t.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${t.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${Q(t.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${t.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${t.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};function TG(){return{localeError:bG()}}const L0=Object.freeze(Object.defineProperty({__proto__:null,ar:U1,az:Y1,be:Z1,ca:X1,cs:Q1,da:eH,de:aH,en:x0,eo:sH,es:cH,fa:dH,fi:fH,fr:SH,frCA:yH,he:kH,hu:TH,id:AH,is:OH,it:IH,ja:RH,kh:PH,ko:NH,mk:GH,ms:LH,nl:jH,no:$H,ota:UH,pl:ZH,ps:YH,pt:XH,ru:QH,sl:eG,sv:aG,ta:oG,th:uG,tr:cG,ua:dG,ur:fG,vi:SG,yo:TG,zhCN:yG,zhTW:kG},Symbol.toStringTag,{value:"Module"})),_0=Symbol("ZodOutput"),j0=Symbol("ZodInput");class Pf{constructor(){this._map=new Map,this._idmap=new Map}add(e,...o){const r=o[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){const o=this._map.get(e);return o&&typeof o=="object"&&"id"in o&&this._idmap.delete(o.id),this._map.delete(e),this}get(e){const o=e._zod.parent;if(o){const r={...this.get(o)??{}};delete r.id;const t={...r,...this._map.get(e)};return Object.keys(t).length?t:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Ef(){return new Pf}const ai=Ef();function z0(n,e){return new n({type:"string",...J(e)})}function $0(n,e){return new n({type:"string",coerce:!0,...J(e)})}function Nf(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...J(e)})}function kl(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...J(e)})}function Hf(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...J(e)})}function Gf(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...J(e)})}function xf(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...J(e)})}function Lf(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...J(e)})}function _f(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...J(e)})}function jf(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...J(e)})}function zf(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...J(e)})}function $f(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...J(e)})}function Ff(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...J(e)})}function Uf(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...J(e)})}function Vf(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...J(e)})}function Yf(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...J(e)})}function Wf(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...J(e)})}function Zf(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...J(e)})}function Jf(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...J(e)})}function Xf(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...J(e)})}function qf(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...J(e)})}function Qf(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...J(e)})}function ng(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...J(e)})}function eg(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...J(e)})}const F0={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6};function U0(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...J(e)})}function V0(n,e){return new n({type:"string",format:"date",check:"string_format",...J(e)})}function Y0(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...J(e)})}function W0(n,e){return new n({type:"string",format:"duration",check:"string_format",...J(e)})}function Z0(n,e){return new n({type:"number",checks:[],...J(e)})}function J0(n,e){return new n({type:"number",coerce:!0,checks:[],...J(e)})}function X0(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...J(e)})}function q0(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"float32",...J(e)})}function Q0(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"float64",...J(e)})}function nw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"int32",...J(e)})}function ew(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"uint32",...J(e)})}function tw(n,e){return new n({type:"boolean",...J(e)})}function aw(n,e){return new n({type:"boolean",coerce:!0,...J(e)})}function iw(n,e){return new n({type:"bigint",...J(e)})}function ow(n,e){return new n({type:"bigint",coerce:!0,...J(e)})}function rw(n,e){return new n({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...J(e)})}function uw(n,e){return new n({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...J(e)})}function sw(n,e){return new n({type:"symbol",...J(e)})}function lw(n,e){return new n({type:"undefined",...J(e)})}function cw(n,e){return new n({type:"null",...J(e)})}function hw(n){return new n({type:"any"})}function bl(n){return new n({type:"unknown"})}function dw(n,e){return new n({type:"never",...J(e)})}function mw(n,e){return new n({type:"void",...J(e)})}function fw(n,e){return new n({type:"date",...J(e)})}function gw(n,e){return new n({type:"date",coerce:!0,...J(e)})}function Sw(n,e){return new n({type:"nan",...J(e)})}function li(n,e){return new Mf({check:"less_than",...J(e),value:n,inclusive:!1})}function ft(n,e){return new Mf({check:"less_than",...J(e),value:n,inclusive:!0})}function ci(n,e){return new Af({check:"greater_than",...J(e),value:n,inclusive:!1})}function Ze(n,e){return new Af({check:"greater_than",...J(e),value:n,inclusive:!0})}function pw(n){return ci(0,n)}function yw(n){return li(0,n)}function vw(n){return ft(0,n)}function kw(n){return Ze(0,n)}function Vr(n,e){return new gD({check:"multiple_of",...J(e),value:n})}function Vl(n,e){return new yD({check:"max_size",...J(e),maximum:n})}function Yr(n,e){return new vD({check:"min_size",...J(e),minimum:n})}function tg(n,e){return new kD({check:"size_equals",...J(e),size:n})}function Yl(n,e){return new bD({check:"max_length",...J(e),maximum:n})}function So(n,e){return new TD({check:"min_length",...J(e),minimum:n})}function Wl(n,e){return new MD({check:"length_equals",...J(e),length:n})}function ag(n,e){return new AD({check:"string_format",format:"regex",...J(e),pattern:n})}function ig(n){return new DD({check:"string_format",format:"lowercase",...J(n)})}function og(n){return new wD({check:"string_format",format:"uppercase",...J(n)})}function rg(n,e){return new OD({check:"string_format",format:"includes",...J(e),includes:n})}function ug(n,e){return new CD({check:"string_format",format:"starts_with",...J(e),prefix:n})}function sg(n,e){return new ID({check:"string_format",format:"ends_with",...J(e),suffix:n})}function bw(n,e,o){return new KD({check:"property",property:n,schema:e,...J(o)})}function lg(n,e){return new RD({check:"mime_type",mime:n,...J(e)})}function di(n){return new BD({check:"overwrite",tx:n})}function cg(n){return di(e=>e.normalize(n))}function hg(){return di(n=>n.trim())}function dg(){return di(n=>n.toLowerCase())}function mg(){return di(n=>n.toUpperCase())}function fg(n,e,o){return new n({type:"array",element:e,...J(o)})}function MG(n,e,o){return new n({type:"union",options:e,...J(o)})}function AG(n,e,o,r){return new n({type:"union",options:o,discriminator:e,...J(r)})}function DG(n,e,o){return new n({type:"intersection",left:e,right:o})}function Tw(n,e,o,r){const t=o instanceof kn,s=t?r:o,c=t?o:null;return new n({type:"tuple",items:e,rest:c,...J(s)})}function wG(n,e,o,r){return new n({type:"record",keyType:e,valueType:o,...J(r)})}function OG(n,e,o,r){return new n({type:"map",keyType:e,valueType:o,...J(r)})}function CG(n,e,o){return new n({type:"set",valueType:e,...J(o)})}function IG(n,e,o){const r=Array.isArray(e)?Object.fromEntries(e.map(t=>[t,t])):e;return new n({type:"enum",entries:r,...J(o)})}function KG(n,e,o){return new n({type:"enum",entries:e,...J(o)})}function RG(n,e,o){return new n({type:"literal",values:Array.isArray(e)?e:[e],...J(o)})}function Mw(n,e){return new n({type:"file",...J(e)})}function BG(n,e){return new n({type:"transform",transform:e})}function PG(n,e){return new n({type:"optional",innerType:e})}function EG(n,e){return new n({type:"nullable",innerType:e})}function NG(n,e,o){return new n({type:"default",innerType:e,get defaultValue(){return typeof o=="function"?o():o}})}function HG(n,e,o){return new n({type:"nonoptional",innerType:e,...J(o)})}function GG(n,e){return new n({type:"success",innerType:e})}function xG(n,e,o){return new n({type:"catch",innerType:e,catchValue:typeof o=="function"?o:()=>o})}function LG(n,e,o){return new n({type:"pipe",in:e,out:o})}function _G(n,e){return new n({type:"readonly",innerType:e})}function jG(n,e,o){return new n({type:"template_literal",parts:e,...J(o)})}function zG(n,e){return new n({type:"lazy",getter:e})}function $G(n,e){return new n({type:"promise",innerType:e})}function Aw(n,e,o){const r=J(o);return r.abort??(r.abort=!0),new n({type:"custom",check:"custom",fn:e,...r})}function Dw(n,e,o){return new n({type:"custom",check:"custom",fn:e,...J(o)})}function ww(n){const e=Ow(o=>(o.addIssue=r=>{if(typeof r=="string")o.issues.push(fo(r,o.value,e._zod.def));else{const t=r;t.fatal&&(t.continue=!1),t.code??(t.code="custom"),t.input??(t.input=o.value),t.inst??(t.inst=e),t.continue??(t.continue=!e._zod.def.abort),o.issues.push(fo(t))}},n(o.value,o)));return e}function Ow(n,e){const o=new ae({check:"custom",...J(e)});return o._zod.check=n,o}function Cw(n,e){const o=J(e);let r=o.truthy??["true","1","yes","on","y","enabled"],t=o.falsy??["false","0","no","off","n","disabled"];o.case!=="sensitive"&&(r=r.map(M=>typeof M=="string"?M.toLowerCase():M),t=t.map(M=>typeof M=="string"?M.toLowerCase():M));const s=new Set(r),c=new Set(t),m=n.Pipe??Bf,d=n.Boolean??Of,f=n.String??lu,S=n.Transform??Rf,p=new S({type:"transform",transform:(M,C)=>{let A=M;return o.case!=="sensitive"&&(A=A.toLowerCase()),s.has(A)?!0:c.has(A)?!1:(C.issues.push({code:"invalid_value",expected:"stringbool",values:[...s,...c],input:C.value,inst:p,continue:!1}),{})},error:o.error}),v=new m({type:"pipe",in:new f({type:"string",error:o.error}),out:p,error:o.error});return new m({type:"pipe",in:v,out:new d({type:"boolean",error:o.error}),error:o.error})}function gg(n,e,o,r={}){const t=J(r),s={...J(r),check:"string_format",type:"string",format:e,fn:typeof o=="function"?o:m=>o.test(m),...t};return o instanceof RegExp&&(s.pattern=o),new n(s)}class Iw{constructor(e){this._def=e,this.def=e}implement(e){if(typeof e!="function")throw new Error("implement() must be called with a function");const o=(...r)=>{const t=this._def.input?mm(this._def.input,r,void 0,{callee:o}):r;if(!Array.isArray(t))throw new Error("Invalid arguments schema: not an array or tuple schema.");const s=e(...t);return this._def.output?mm(this._def.output,s,void 0,{callee:o}):s};return o}implementAsync(e){if(typeof e!="function")throw new Error("implement() must be called with a function");const o=async(...r)=>{const t=this._def.input?await fm(this._def.input,r,void 0,{callee:o}):r;if(!Array.isArray(t))throw new Error("Invalid arguments schema: not an array or tuple schema.");const s=await e(...t);return this._def.output?fm(this._def.output,s,void 0,{callee:o}):s};return o}input(...e){const o=this.constructor;return Array.isArray(e[0])?new o({type:"function",input:new Ul({type:"tuple",items:e[0],rest:e[1]}),output:this._def.output}):new o({type:"function",input:e[0],output:this._def.output})}output(e){const o=this.constructor;return new o({type:"function",input:this._def.input,output:e})}}function Kw(n){return new Iw({type:"function",input:Array.isArray(n==null?void 0:n.input)?Tw(Ul,n==null?void 0:n.input):(n==null?void 0:n.input)??fg(If,bl(vl)),output:(n==null?void 0:n.output)??bl(vl)})}class Sm{constructor(e){this.counter=0,this.metadataRegistry=(e==null?void 0:e.metadata)??ai,this.target=(e==null?void 0:e.target)??"draft-2020-12",this.unrepresentable=(e==null?void 0:e.unrepresentable)??"throw",this.override=(e==null?void 0:e.override)??(()=>{}),this.io=(e==null?void 0:e.io)??"output",this.seen=new Map}process(e,o={path:[],schemaPath:[]}){var p,v,T;var r;const t=e._zod.def,s={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},c=this.seen.get(e);if(c)return c.count++,o.schemaPath.includes(e)&&(c.cycle=o.path),c.schema;const m={schema:{},count:1,cycle:void 0,path:o.path};this.seen.set(e,m);const d=(v=(p=e._zod).toJSONSchema)==null?void 0:v.call(p);if(d)m.schema=d;else{const M={...o,schemaPath:[...o.schemaPath,e],path:o.path},C=e._zod.parent;if(C)m.ref=C,this.process(C,M),this.seen.get(C).isParent=!0;else{const A=m.schema;switch(t.type){case"string":{const k=A;k.type="string";const{minimum:O,maximum:D,format:P,patterns:I,contentEncoding:j}=e._zod.bag;if(typeof O=="number"&&(k.minLength=O),typeof D=="number"&&(k.maxLength=D),P&&(k.format=s[P]??P,k.format===""&&delete k.format),j&&(k.contentEncoding=j),I&&I.size>0){const z=[...I];z.length===1?k.pattern=z[0].source:z.length>1&&(m.schema.allOf=[...z.map(U=>({...this.target==="draft-7"||this.target==="draft-4"?{type:"string"}:{},pattern:U.source}))])}break}case"number":{const k=A,{minimum:O,maximum:D,format:P,multipleOf:I,exclusiveMaximum:j,exclusiveMinimum:z}=e._zod.bag;typeof P=="string"&&P.includes("int")?k.type="integer":k.type="number",typeof z=="number"&&(this.target==="draft-4"?(k.minimum=z,k.exclusiveMinimum=!0):k.exclusiveMinimum=z),typeof O=="number"&&(k.minimum=O,typeof z=="number"&&this.target!=="draft-4"&&(z>=O?delete k.minimum:delete k.exclusiveMinimum)),typeof j=="number"&&(this.target==="draft-4"?(k.maximum=j,k.exclusiveMaximum=!0):k.exclusiveMaximum=j),typeof D=="number"&&(k.maximum=D,typeof j=="number"&&this.target!=="draft-4"&&(j<=D?delete k.maximum:delete k.exclusiveMaximum)),typeof I=="number"&&(k.multipleOf=I);break}case"boolean":{const k=A;k.type="boolean";break}case"bigint":{if(this.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema");break}case"symbol":{if(this.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema");break}case"null":{A.type="null";break}case"any":break;case"unknown":break;case"undefined":{if(this.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema");break}case"void":{if(this.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema");break}case"never":{A.not={};break}case"date":{if(this.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema");break}case"array":{const k=A,{minimum:O,maximum:D}=e._zod.bag;typeof O=="number"&&(k.minItems=O),typeof D=="number"&&(k.maxItems=D),k.type="array",k.items=this.process(t.element,{...M,path:[...M.path,"items"]});break}case"object":{const k=A;k.type="object",k.properties={};const O=t.shape;for(const I in O)k.properties[I]=this.process(O[I],{...M,path:[...M.path,"properties",I]});const D=new Set(Object.keys(O)),P=new Set([...D].filter(I=>{const j=t.shape[I]._zod;return this.io==="input"?j.optin===void 0:j.optout===void 0}));P.size>0&&(k.required=Array.from(P)),((T=t.catchall)==null?void 0:T._zod.def.type)==="never"?k.additionalProperties=!1:t.catchall?t.catchall&&(k.additionalProperties=this.process(t.catchall,{...M,path:[...M.path,"additionalProperties"]})):this.io==="output"&&(k.additionalProperties=!1);break}case"union":{const k=A;k.anyOf=t.options.map((O,D)=>this.process(O,{...M,path:[...M.path,"anyOf",D]}));break}case"intersection":{const k=A,O=this.process(t.left,{...M,path:[...M.path,"allOf",0]}),D=this.process(t.right,{...M,path:[...M.path,"allOf",1]}),P=j=>"allOf"in j&&Object.keys(j).length===1,I=[...P(O)?O.allOf:[O],...P(D)?D.allOf:[D]];k.allOf=I;break}case"tuple":{const k=A;k.type="array";const O=t.items.map((I,j)=>this.process(I,{...M,path:[...M.path,"prefixItems",j]}));if(this.target==="draft-2020-12"?k.prefixItems=O:k.items=O,t.rest){const I=this.process(t.rest,{...M,path:[...M.path,"items"]});this.target==="draft-2020-12"?k.items=I:k.additionalItems=I}t.rest&&(k.items=this.process(t.rest,{...M,path:[...M.path,"items"]}));const{minimum:D,maximum:P}=e._zod.bag;typeof D=="number"&&(k.minItems=D),typeof P=="number"&&(k.maxItems=P);break}case"record":{const k=A;k.type="object",this.target!=="draft-4"&&(k.propertyNames=this.process(t.keyType,{...M,path:[...M.path,"propertyNames"]})),k.additionalProperties=this.process(t.valueType,{...M,path:[...M.path,"additionalProperties"]});break}case"map":{if(this.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema");break}case"set":{if(this.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema");break}case"enum":{const k=A,O=df(t.entries);O.every(D=>typeof D=="number")&&(k.type="number"),O.every(D=>typeof D=="string")&&(k.type="string"),k.enum=O;break}case"literal":{const k=A,O=[];for(const D of t.values)if(D===void 0){if(this.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof D=="bigint"){if(this.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");O.push(Number(D))}else O.push(D);if(O.length!==0)if(O.length===1){const D=O[0];k.type=D===null?"null":typeof D,this.target==="draft-4"?k.enum=[D]:k.const=D}else O.every(D=>typeof D=="number")&&(k.type="number"),O.every(D=>typeof D=="string")&&(k.type="string"),O.every(D=>typeof D=="boolean")&&(k.type="string"),O.every(D=>D===null)&&(k.type="null"),k.enum=O;break}case"file":{const k=A,O={type:"string",format:"binary",contentEncoding:"binary"},{minimum:D,maximum:P,mime:I}=e._zod.bag;D!==void 0&&(O.minLength=D),P!==void 0&&(O.maxLength=P),I?I.length===1?(O.contentMediaType=I[0],Object.assign(k,O)):k.anyOf=I.map(j=>({...O,contentMediaType:j})):Object.assign(k,O);break}case"transform":{if(this.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema");break}case"nullable":{const k=this.process(t.innerType,M);A.anyOf=[k,{type:"null"}];break}case"nonoptional":{this.process(t.innerType,M),m.ref=t.innerType;break}case"success":{const k=A;k.type="boolean";break}case"default":{this.process(t.innerType,M),m.ref=t.innerType,A.default=JSON.parse(JSON.stringify(t.defaultValue));break}case"prefault":{this.process(t.innerType,M),m.ref=t.innerType,this.io==="input"&&(A._prefault=JSON.parse(JSON.stringify(t.defaultValue)));break}case"catch":{this.process(t.innerType,M),m.ref=t.innerType;let k;try{k=t.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}A.default=k;break}case"nan":{if(this.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema");break}case"template_literal":{const k=A,O=e._zod.pattern;if(!O)throw new Error("Pattern not found in template literal");k.type="string",k.pattern=O.source;break}case"pipe":{const k=this.io==="input"?t.in._zod.def.type==="transform"?t.out:t.in:t.out;this.process(k,M),m.ref=k;break}case"readonly":{this.process(t.innerType,M),m.ref=t.innerType,A.readOnly=!0;break}case"promise":{this.process(t.innerType,M),m.ref=t.innerType;break}case"optional":{this.process(t.innerType,M),m.ref=t.innerType;break}case"lazy":{const k=e._zod.innerType;this.process(k,M),m.ref=k;break}case"custom":{if(this.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema");break}}}}const f=this.metadataRegistry.get(e);return f&&Object.assign(m.schema,f),this.io==="input"&&me(e)&&(delete m.schema.examples,delete m.schema.default),this.io==="input"&&m.schema._prefault&&((r=m.schema).default??(r.default=m.schema._prefault)),delete m.schema._prefault,this.seen.get(e).schema}emit(e,o){var S,p,v,T,M,C;const r={cycles:(o==null?void 0:o.cycles)??"ref",reused:(o==null?void 0:o.reused)??"inline",external:(o==null?void 0:o.external)??void 0},t=this.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const s=A=>{var I;const k=this.target==="draft-2020-12"?"$defs":"definitions";if(r.external){const j=(I=r.external.registry.get(A[0]))==null?void 0:I.id,z=r.external.uri??(tn=>tn);if(j)return{ref:z(j)};const U=A[1].defId??A[1].schema.id??`schema${this.counter++}`;return A[1].defId=U,{defId:U,ref:`${z("__shared")}#/${k}/${U}`}}if(A[1]===t)return{ref:"#"};const D=`#/${k}/`,P=A[1].schema.id??`__schema${this.counter++}`;return{defId:P,ref:D+P}},c=A=>{if(A[1].schema.$ref)return;const k=A[1],{ref:O,defId:D}=s(A);k.def={...k.schema},D&&(k.defId=D);const P=k.schema;for(const I in P)delete P[I];P.$ref=O};if(r.cycles==="throw")for(const A of this.seen.entries()){const k=A[1];if(k.cycle)throw new Error(`Cycle detected: #/${(S=k.cycle)==null?void 0:S.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const A of this.seen.entries()){const k=A[1];if(e===A[0]){c(A);continue}if(r.external){const D=(p=r.external.registry.get(A[0]))==null?void 0:p.id;if(e!==A[0]&&D){c(A);continue}}if((v=this.metadataRegistry.get(A[0]))==null?void 0:v.id){c(A);continue}if(k.cycle){c(A);continue}if(k.count>1&&r.reused==="ref"){c(A);continue}}const m=(A,k)=>{const O=this.seen.get(A),D=O.def??O.schema,P={...D};if(O.ref===null)return;const I=O.ref;if(O.ref=null,I){m(I,k);const j=this.seen.get(I).schema;j.$ref&&(k.target==="draft-7"||k.target==="draft-4")?(D.allOf=D.allOf??[],D.allOf.push(j)):(Object.assign(D,j),Object.assign(D,P))}O.isParent||this.override({zodSchema:A,jsonSchema:D,path:O.path??[]})};for(const A of[...this.seen.entries()].reverse())m(A[0],{target:this.target});const d={};if(this.target==="draft-2020-12"?d.$schema="https://json-schema.org/draft/2020-12/schema":this.target==="draft-7"?d.$schema="http://json-schema.org/draft-07/schema#":this.target==="draft-4"?d.$schema="http://json-schema.org/draft-04/schema#":console.warn(`Invalid target: ${this.target}`),(T=r.external)!=null&&T.uri){const A=(M=r.external.registry.get(e))==null?void 0:M.id;if(!A)throw new Error("Schema is missing an `id` property");d.$id=r.external.uri(A)}Object.assign(d,t.def);const f=((C=r.external)==null?void 0:C.defs)??{};for(const A of this.seen.entries()){const k=A[1];k.def&&k.defId&&(f[k.defId]=k.def)}r.external||Object.keys(f).length>0&&(this.target==="draft-2020-12"?d.$defs=f:d.definitions=f);try{return JSON.parse(JSON.stringify(d))}catch{throw new Error("Error converting schema to JSON.")}}}function Rw(n,e){if(n instanceof Pf){const r=new Sm(e),t={};for(const m of n._idmap.entries()){const[d,f]=m;r.process(f)}const s={},c={registry:n,uri:e==null?void 0:e.uri,defs:t};for(const m of n._idmap.entries()){const[d,f]=m;s[d]=r.emit(f,{...e,external:c})}if(Object.keys(t).length>0){const m=r.target==="draft-2020-12"?"$defs":"definitions";s.__shared={[m]:t}}return{schemas:s}}const o=new Sm(e);return o.process(n),o.emit(n,e)}function me(n,e){const o=e??{seen:new Set};if(o.seen.has(n))return!1;o.seen.add(n);const t=n._zod.def;switch(t.type){case"string":case"number":case"bigint":case"boolean":case"date":case"symbol":case"undefined":case"null":case"any":case"unknown":case"never":case"void":case"literal":case"enum":case"nan":case"file":case"template_literal":return!1;case"array":return me(t.element,o);case"object":{for(const s in t.shape)if(me(t.shape[s],o))return!0;return!1}case"union":{for(const s of t.options)if(me(s,o))return!0;return!1}case"intersection":return me(t.left,o)||me(t.right,o);case"tuple":{for(const s of t.items)if(me(s,o))return!0;return!!(t.rest&&me(t.rest,o))}case"record":return me(t.keyType,o)||me(t.valueType,o);case"map":return me(t.keyType,o)||me(t.valueType,o);case"set":return me(t.valueType,o);case"promise":case"optional":case"nonoptional":case"nullable":case"readonly":return me(t.innerType,o);case"lazy":return me(t.getter(),o);case"default":return me(t.innerType,o);case"prefault":return me(t.innerType,o);case"custom":return!1;case"transform":return!0;case"pipe":return me(t.in,o)||me(t.out,o);case"success":return!1;case"catch":return!1}throw new Error(`Unknown schema type: ${t.type}`)}const FG=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),UG=Object.freeze(Object.defineProperty({__proto__:null,$ZodAny:d0,$ZodArray:If,$ZodAsyncError:mo,$ZodBase64:n0,$ZodBase64URL:t0,$ZodBigInt:Cf,$ZodBigIntFormat:s0,$ZodBoolean:Of,$ZodCIDRv4:qD,$ZodCIDRv6:QD,$ZodCUID:jD,$ZodCUID2:zD,$ZodCatch:R0,$ZodCheck:ae,$ZodCheckBigIntFormat:pD,$ZodCheckEndsWith:ID,$ZodCheckGreaterThan:Af,$ZodCheckIncludes:OD,$ZodCheckLengthEquals:MD,$ZodCheckLessThan:Mf,$ZodCheckLowerCase:DD,$ZodCheckMaxLength:bD,$ZodCheckMaxSize:yD,$ZodCheckMimeType:RD,$ZodCheckMinLength:TD,$ZodCheckMinSize:vD,$ZodCheckMultipleOf:gD,$ZodCheckNumberFormat:SD,$ZodCheckOverwrite:BD,$ZodCheckProperty:KD,$ZodCheckRegex:AD,$ZodCheckSizeEquals:kD,$ZodCheckStartsWith:CD,$ZodCheckStringFormat:su,$ZodCheckUpperCase:wD,$ZodCustom:G0,$ZodCustomStringFormat:r0,$ZodDate:g0,$ZodDefault:O0,$ZodDiscriminatedUnion:p0,$ZodE164:a0,$ZodEmail:GD,$ZodEmoji:LD,$ZodEnum:T0,$ZodError:ff,$ZodFile:A0,$ZodFunction:Iw,$ZodGUID:ND,$ZodIPv4:JD,$ZodIPv6:XD,$ZodISODate:YD,$ZodISODateTime:VD,$ZodISODuration:ZD,$ZodISOTime:WD,$ZodIntersection:y0,$ZodJWT:o0,$ZodKSUID:UD,$ZodLazy:H0,$ZodLiteral:M0,$ZodMap:k0,$ZodNaN:B0,$ZodNanoID:_D,$ZodNever:m0,$ZodNonOptional:I0,$ZodNull:h0,$ZodNullable:w0,$ZodNumber:wf,$ZodNumberFormat:u0,$ZodObject:S0,$ZodOptional:D0,$ZodPipe:Bf,$ZodPrefault:C0,$ZodPromise:N0,$ZodReadonly:P0,$ZodRealError:uu,$ZodRecord:v0,$ZodRegistry:Pf,$ZodSet:b0,$ZodString:lu,$ZodStringFormat:Un,$ZodSuccess:K0,$ZodSymbol:l0,$ZodTemplateLiteral:E0,$ZodTransform:Rf,$ZodTuple:Ul,$ZodType:kn,$ZodULID:$D,$ZodURL:xD,$ZodUUID:HD,$ZodUndefined:c0,$ZodUnion:Kf,$ZodUnknown:vl,$ZodVoid:f0,$ZodXID:FD,$brand:yA,$constructor:H,$input:j0,$output:_0,Doc:PD,JSONSchema:FG,JSONSchemaGenerator:Sm,NEVER:pA,TimePrecision:F0,_any:hw,_array:fg,_base64:qf,_base64url:Qf,_bigint:iw,_boolean:tw,_catch:xG,_check:Ow,_cidrv4:Jf,_cidrv6:Xf,_coercedBigint:ow,_coercedBoolean:aw,_coercedDate:gw,_coercedNumber:J0,_coercedString:$0,_cuid:$f,_cuid2:Ff,_custom:Aw,_date:fw,_default:NG,_discriminatedUnion:AG,_e164:ng,_email:Nf,_emoji:jf,_endsWith:sg,_enum:IG,_file:Mw,_float32:q0,_float64:Q0,_gt:ci,_gte:Ze,_guid:kl,_includes:rg,_int:X0,_int32:nw,_int64:rw,_intersection:DG,_ipv4:Wf,_ipv6:Zf,_isoDate:V0,_isoDateTime:U0,_isoDuration:W0,_isoTime:Y0,_jwt:eg,_ksuid:Yf,_lazy:zG,_length:Wl,_literal:RG,_lowercase:ig,_lt:li,_lte:ft,_map:OG,_max:ft,_maxLength:Yl,_maxSize:Vl,_mime:lg,_min:Ze,_minLength:So,_minSize:Yr,_multipleOf:Vr,_nan:Sw,_nanoid:zf,_nativeEnum:KG,_negative:yw,_never:dw,_nonnegative:kw,_nonoptional:HG,_nonpositive:vw,_normalize:cg,_null:cw,_nullable:EG,_number:Z0,_optional:PG,_overwrite:di,_parse:pf,_parseAsync:yf,_pipe:LG,_positive:pw,_promise:$G,_property:bw,_readonly:_G,_record:wG,_refine:Dw,_regex:ag,_safeParse:vf,_safeParseAsync:kf,_set:CG,_size:tg,_startsWith:ug,_string:z0,_stringFormat:gg,_stringbool:Cw,_success:GG,_superRefine:ww,_symbol:sw,_templateLiteral:jG,_toLowerCase:dg,_toUpperCase:mg,_transform:BG,_trim:hg,_tuple:Tw,_uint32:ew,_uint64:uw,_ulid:Uf,_undefined:lw,_union:MG,_unknown:bl,_uppercase:og,_url:_f,_uuid:Hf,_uuidv4:Gf,_uuidv6:xf,_uuidv7:Lf,_void:mw,_xid:Vf,clone:St,config:Re,flattenError:gf,formatError:Sf,function:Kw,globalConfig:Sl,globalRegistry:ai,isValidBase64:Df,isValidBase64URL:e0,isValidJWT:i0,locales:L0,parse:mm,parseAsync:fm,prettifyError:EA,regexes:mD,registry:Ef,safeParse:NA,safeParseAsync:HA,toDotPath:PA,toJSONSchema:Rw,treeifyError:BA,util:B1,version:ED},Symbol.toStringTag,{value:"Module"})),Sg=H("ZodISODateTime",(n,e)=>{VD.init(n,e),Vn.init(n,e)});function Bw(n){return U0(Sg,n)}const pg=H("ZodISODate",(n,e)=>{YD.init(n,e),Vn.init(n,e)});function Pw(n){return V0(pg,n)}const yg=H("ZodISOTime",(n,e)=>{WD.init(n,e),Vn.init(n,e)});function Ew(n){return Y0(yg,n)}const vg=H("ZodISODuration",(n,e)=>{ZD.init(n,e),Vn.init(n,e)});function Nw(n){return W0(vg,n)}const VG=Object.freeze(Object.defineProperty({__proto__:null,ZodISODate:pg,ZodISODateTime:Sg,ZodISODuration:vg,ZodISOTime:yg,date:Pw,datetime:Bw,duration:Nw,time:Ew},Symbol.toStringTag,{value:"Module"})),Hw=(n,e)=>{ff.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:o=>Sf(n,o)},flatten:{value:o=>gf(n,o)},addIssue:{value:o=>{n.issues.push(o),n.message=JSON.stringify(n.issues,pl,2)}},addIssues:{value:o=>{n.issues.push(...o),n.message=JSON.stringify(n.issues,pl,2)}},isEmpty:{get(){return n.issues.length===0}}})},YG=H("ZodError",Hw),cu=H("ZodError",Hw,{Parent:Error}),Gw=pf(cu),xw=yf(cu),Lw=vf(cu),_w=kf(cu),Dn=H("ZodType",(n,e)=>(kn.init(n,e),n.def=e,Object.defineProperty(n,"_def",{value:e}),n.check=(...o)=>n.clone({...e,checks:[...e.checks??[],...o.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),n.clone=(o,r)=>St(n,o,r),n.brand=()=>n,n.register=(o,r)=>(o.add(n,r),n),n.parse=(o,r)=>Gw(n,o,r,{callee:n.parse}),n.safeParse=(o,r)=>Lw(n,o,r),n.parseAsync=async(o,r)=>xw(n,o,r,{callee:n.parseAsync}),n.safeParseAsync=async(o,r)=>_w(n,o,r),n.spa=n.safeParseAsync,n.refine=(o,r)=>n.check(DO(o,r)),n.superRefine=o=>n.check(wO(o)),n.overwrite=o=>n.check(di(o)),n.optional=()=>Al(n),n.nullable=()=>Dl(n),n.nullish=()=>Al(Dl(n)),n.nonoptional=o=>fO(n,o),n.array=()=>zg(n),n.or=o=>Fg([n,o]),n.and=o=>nO(n,o),n.transform=o=>wl(n,Yg(o)),n.default=o=>hO(n,o),n.prefault=o=>mO(n,o),n.catch=o=>pO(n,o),n.pipe=o=>wl(n,o),n.readonly=()=>kO(n),n.describe=o=>{const r=n.clone();return ai.add(r,{description:o}),r},Object.defineProperty(n,"description",{get(){var o;return(o=ai.get(n))==null?void 0:o.description},configurable:!0}),n.meta=(...o)=>{if(o.length===0)return ai.get(n);const r=n.clone();return ai.add(r,o[0]),r},n.isOptional=()=>n.safeParse(void 0).success,n.isNullable=()=>n.safeParse(null).success,n)),kg=H("_ZodString",(n,e)=>{lu.init(n,e),Dn.init(n,e);const o=n._zod.bag;n.format=o.format??null,n.minLength=o.minimum??null,n.maxLength=o.maximum??null,n.regex=(...r)=>n.check(ag(...r)),n.includes=(...r)=>n.check(rg(...r)),n.startsWith=(...r)=>n.check(ug(...r)),n.endsWith=(...r)=>n.check(sg(...r)),n.min=(...r)=>n.check(So(...r)),n.max=(...r)=>n.check(Yl(...r)),n.length=(...r)=>n.check(Wl(...r)),n.nonempty=(...r)=>n.check(So(1,...r)),n.lowercase=r=>n.check(ig(r)),n.uppercase=r=>n.check(og(r)),n.trim=()=>n.check(hg()),n.normalize=(...r)=>n.check(cg(...r)),n.toLowerCase=()=>n.check(dg()),n.toUpperCase=()=>n.check(mg())}),Zl=H("ZodString",(n,e)=>{lu.init(n,e),kg.init(n,e),n.email=o=>n.check(Nf(bg,o)),n.url=o=>n.check(_f(Tg,o)),n.jwt=o=>n.check(eg(Gg,o)),n.emoji=o=>n.check(jf(Mg,o)),n.guid=o=>n.check(kl(Tl,o)),n.uuid=o=>n.check(Hf(Wt,o)),n.uuidv4=o=>n.check(Gf(Wt,o)),n.uuidv6=o=>n.check(xf(Wt,o)),n.uuidv7=o=>n.check(Lf(Wt,o)),n.nanoid=o=>n.check(zf(Ag,o)),n.guid=o=>n.check(kl(Tl,o)),n.cuid=o=>n.check($f(Dg,o)),n.cuid2=o=>n.check(Ff(wg,o)),n.ulid=o=>n.check(Uf(Og,o)),n.base64=o=>n.check(qf(Eg,o)),n.base64url=o=>n.check(Qf(Ng,o)),n.xid=o=>n.check(Vf(Cg,o)),n.ksuid=o=>n.check(Yf(Ig,o)),n.ipv4=o=>n.check(Wf(Kg,o)),n.ipv6=o=>n.check(Zf(Rg,o)),n.cidrv4=o=>n.check(Jf(Bg,o)),n.cidrv6=o=>n.check(Xf(Pg,o)),n.e164=o=>n.check(ng(Hg,o)),n.datetime=o=>n.check(Bw(o)),n.date=o=>n.check(Pw(o)),n.time=o=>n.check(Ew(o)),n.duration=o=>n.check(Nw(o))});function pm(n){return z0(Zl,n)}const Vn=H("ZodStringFormat",(n,e)=>{Un.init(n,e),kg.init(n,e)}),bg=H("ZodEmail",(n,e)=>{GD.init(n,e),Vn.init(n,e)});function WG(n){return Nf(bg,n)}const Tl=H("ZodGUID",(n,e)=>{ND.init(n,e),Vn.init(n,e)});function ZG(n){return kl(Tl,n)}const Wt=H("ZodUUID",(n,e)=>{HD.init(n,e),Vn.init(n,e)});function JG(n){return Hf(Wt,n)}function XG(n){return Gf(Wt,n)}function qG(n){return xf(Wt,n)}function QG(n){return Lf(Wt,n)}const Tg=H("ZodURL",(n,e)=>{xD.init(n,e),Vn.init(n,e)});function nx(n){return _f(Tg,n)}const Mg=H("ZodEmoji",(n,e)=>{LD.init(n,e),Vn.init(n,e)});function ex(n){return jf(Mg,n)}const Ag=H("ZodNanoID",(n,e)=>{_D.init(n,e),Vn.init(n,e)});function tx(n){return zf(Ag,n)}const Dg=H("ZodCUID",(n,e)=>{jD.init(n,e),Vn.init(n,e)});function ax(n){return $f(Dg,n)}const wg=H("ZodCUID2",(n,e)=>{zD.init(n,e),Vn.init(n,e)});function ix(n){return Ff(wg,n)}const Og=H("ZodULID",(n,e)=>{$D.init(n,e),Vn.init(n,e)});function ox(n){return Uf(Og,n)}const Cg=H("ZodXID",(n,e)=>{FD.init(n,e),Vn.init(n,e)});function rx(n){return Vf(Cg,n)}const Ig=H("ZodKSUID",(n,e)=>{UD.init(n,e),Vn.init(n,e)});function ux(n){return Yf(Ig,n)}const Kg=H("ZodIPv4",(n,e)=>{JD.init(n,e),Vn.init(n,e)});function sx(n){return Wf(Kg,n)}const Rg=H("ZodIPv6",(n,e)=>{XD.init(n,e),Vn.init(n,e)});function lx(n){return Zf(Rg,n)}const Bg=H("ZodCIDRv4",(n,e)=>{qD.init(n,e),Vn.init(n,e)});function cx(n){return Jf(Bg,n)}const Pg=H("ZodCIDRv6",(n,e)=>{QD.init(n,e),Vn.init(n,e)});function hx(n){return Xf(Pg,n)}const Eg=H("ZodBase64",(n,e)=>{n0.init(n,e),Vn.init(n,e)});function dx(n){return qf(Eg,n)}const Ng=H("ZodBase64URL",(n,e)=>{t0.init(n,e),Vn.init(n,e)});function mx(n){return Qf(Ng,n)}const Hg=H("ZodE164",(n,e)=>{a0.init(n,e),Vn.init(n,e)});function fx(n){return ng(Hg,n)}const Gg=H("ZodJWT",(n,e)=>{o0.init(n,e),Vn.init(n,e)});function gx(n){return eg(Gg,n)}const xg=H("ZodCustomStringFormat",(n,e)=>{r0.init(n,e),Vn.init(n,e)});function Sx(n,e,o={}){return gg(xg,n,e,o)}function px(n){return gg(xg,"hostname",Tf,n)}const Jl=H("ZodNumber",(n,e)=>{wf.init(n,e),Dn.init(n,e),n.gt=(r,t)=>n.check(ci(r,t)),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.lt=(r,t)=>n.check(li(r,t)),n.lte=(r,t)=>n.check(ft(r,t)),n.max=(r,t)=>n.check(ft(r,t)),n.int=r=>n.check(ym(r)),n.safe=r=>n.check(ym(r)),n.positive=r=>n.check(ci(0,r)),n.nonnegative=r=>n.check(Ze(0,r)),n.negative=r=>n.check(li(0,r)),n.nonpositive=r=>n.check(ft(0,r)),n.multipleOf=(r,t)=>n.check(Vr(r,t)),n.step=(r,t)=>n.check(Vr(r,t)),n.finite=()=>n;const o=n._zod.bag;n.minValue=Math.max(o.minimum??Number.NEGATIVE_INFINITY,o.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(o.maximum??Number.POSITIVE_INFINITY,o.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(o.format??"").includes("int")||Number.isSafeInteger(o.multipleOf??.5),n.isFinite=!0,n.format=o.format??null});function jw(n){return Z0(Jl,n)}const To=H("ZodNumberFormat",(n,e)=>{u0.init(n,e),Jl.init(n,e)});function ym(n){return X0(To,n)}function yx(n){return q0(To,n)}function vx(n){return Q0(To,n)}function kx(n){return nw(To,n)}function bx(n){return ew(To,n)}const Xl=H("ZodBoolean",(n,e)=>{Of.init(n,e),Dn.init(n,e)});function zw(n){return tw(Xl,n)}const ql=H("ZodBigInt",(n,e)=>{Cf.init(n,e),Dn.init(n,e),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.gt=(r,t)=>n.check(ci(r,t)),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.lt=(r,t)=>n.check(li(r,t)),n.lte=(r,t)=>n.check(ft(r,t)),n.max=(r,t)=>n.check(ft(r,t)),n.positive=r=>n.check(ci(BigInt(0),r)),n.negative=r=>n.check(li(BigInt(0),r)),n.nonpositive=r=>n.check(ft(BigInt(0),r)),n.nonnegative=r=>n.check(Ze(BigInt(0),r)),n.multipleOf=(r,t)=>n.check(Vr(r,t));const o=n._zod.bag;n.minValue=o.minimum??null,n.maxValue=o.maximum??null,n.format=o.format??null});function Tx(n){return iw(ql,n)}const Lg=H("ZodBigIntFormat",(n,e)=>{s0.init(n,e),ql.init(n,e)});function Mx(n){return rw(Lg,n)}function Ax(n){return uw(Lg,n)}const $w=H("ZodSymbol",(n,e)=>{l0.init(n,e),Dn.init(n,e)});function Dx(n){return sw($w,n)}const Fw=H("ZodUndefined",(n,e)=>{c0.init(n,e),Dn.init(n,e)});function wx(n){return lw(Fw,n)}const Uw=H("ZodNull",(n,e)=>{h0.init(n,e),Dn.init(n,e)});function Vw(n){return cw(Uw,n)}const Yw=H("ZodAny",(n,e)=>{d0.init(n,e),Dn.init(n,e)});function Ox(){return hw(Yw)}const Ww=H("ZodUnknown",(n,e)=>{vl.init(n,e),Dn.init(n,e)});function Ml(){return bl(Ww)}const Zw=H("ZodNever",(n,e)=>{m0.init(n,e),Dn.init(n,e)});function _g(n){return dw(Zw,n)}const Jw=H("ZodVoid",(n,e)=>{f0.init(n,e),Dn.init(n,e)});function Cx(n){return mw(Jw,n)}const jg=H("ZodDate",(n,e)=>{g0.init(n,e),Dn.init(n,e),n.min=(r,t)=>n.check(Ze(r,t)),n.max=(r,t)=>n.check(ft(r,t));const o=n._zod.bag;n.minDate=o.minimum?new Date(o.minimum):null,n.maxDate=o.maximum?new Date(o.maximum):null});function Ix(n){return fw(jg,n)}const Xw=H("ZodArray",(n,e)=>{If.init(n,e),Dn.init(n,e),n.element=e.element,n.min=(o,r)=>n.check(So(o,r)),n.nonempty=o=>n.check(So(1,o)),n.max=(o,r)=>n.check(Yl(o,r)),n.length=(o,r)=>n.check(Wl(o,r)),n.unwrap=()=>n.element});function zg(n,e){return fg(Xw,n,e)}function Kx(n){const e=n._zod.def.shape;return uO(Object.keys(e))}const Ql=H("ZodObject",(n,e)=>{S0.init(n,e),Dn.init(n,e),Bn(n,"shape",()=>e.shape),n.keyof=()=>oO(Object.keys(n._zod.def.shape)),n.catchall=o=>n.clone({...n._zod.def,catchall:o}),n.passthrough=()=>n.clone({...n._zod.def,catchall:Ml()}),n.loose=()=>n.clone({...n._zod.def,catchall:Ml()}),n.strict=()=>n.clone({...n._zod.def,catchall:_g()}),n.strip=()=>n.clone({...n._zod.def,catchall:void 0}),n.extend=o=>OA(n,o),n.merge=o=>CA(n,o),n.pick=o=>DA(n,o),n.omit=o=>wA(n,o),n.partial=(...o)=>IA(Wg,n,o[0]),n.required=(...o)=>KA(Zg,n,o[0])});function Rx(n,e){const o={type:"object",get shape(){return Bt(this,"shape",n?zl(n):{}),this.shape},...J(e)};return new Ql(o)}function Bx(n,e){return new Ql({type:"object",get shape(){return Bt(this,"shape",zl(n)),this.shape},catchall:_g(),...J(e)})}function Px(n,e){return new Ql({type:"object",get shape(){return Bt(this,"shape",zl(n)),this.shape},catchall:Ml(),...J(e)})}const $g=H("ZodUnion",(n,e)=>{Kf.init(n,e),Dn.init(n,e),n.options=e.options});function Fg(n,e){return new $g({type:"union",options:n,...J(e)})}const qw=H("ZodDiscriminatedUnion",(n,e)=>{$g.init(n,e),p0.init(n,e)});function Ex(n,e,o){return new qw({type:"union",options:e,discriminator:n,...J(o)})}const Qw=H("ZodIntersection",(n,e)=>{y0.init(n,e),Dn.init(n,e)});function nO(n,e){return new Qw({type:"intersection",left:n,right:e})}const eO=H("ZodTuple",(n,e)=>{Ul.init(n,e),Dn.init(n,e),n.rest=o=>n.clone({...n._zod.def,rest:o})});function Nx(n,e,o){const r=e instanceof kn,t=r?o:e,s=r?e:null;return new eO({type:"tuple",items:n,rest:s,...J(t)})}const Ug=H("ZodRecord",(n,e)=>{v0.init(n,e),Dn.init(n,e),n.keyType=e.keyType,n.valueType=e.valueType});function tO(n,e,o){return new Ug({type:"record",keyType:n,valueType:e,...J(o)})}function Hx(n,e,o){const r=St(n);return r._zod.values=void 0,new Ug({type:"record",keyType:r,valueType:e,...J(o)})}const aO=H("ZodMap",(n,e)=>{k0.init(n,e),Dn.init(n,e),n.keyType=e.keyType,n.valueType=e.valueType});function Gx(n,e,o){return new aO({type:"map",keyType:n,valueType:e,...J(o)})}const iO=H("ZodSet",(n,e)=>{b0.init(n,e),Dn.init(n,e),n.min=(...o)=>n.check(Yr(...o)),n.nonempty=o=>n.check(Yr(1,o)),n.max=(...o)=>n.check(Vl(...o)),n.size=(...o)=>n.check(tg(...o))});function xx(n,e){return new iO({type:"set",valueType:n,...J(e)})}const Wr=H("ZodEnum",(n,e)=>{T0.init(n,e),Dn.init(n,e),n.enum=e.entries,n.options=Object.values(e.entries);const o=new Set(Object.keys(e.entries));n.extract=(r,t)=>{const s={};for(const c of r)if(o.has(c))s[c]=e.entries[c];else throw new Error(`Key ${c} not found in enum`);return new Wr({...e,checks:[],...J(t),entries:s})},n.exclude=(r,t)=>{const s={...e.entries};for(const c of r)if(o.has(c))delete s[c];else throw new Error(`Key ${c} not found in enum`);return new Wr({...e,checks:[],...J(t),entries:s})}});function oO(n,e){const o=Array.isArray(n)?Object.fromEntries(n.map(r=>[r,r])):n;return new Wr({type:"enum",entries:o,...J(e)})}function Lx(n,e){return new Wr({type:"enum",entries:n,...J(e)})}const rO=H("ZodLiteral",(n,e)=>{M0.init(n,e),Dn.init(n,e),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function uO(n,e){return new rO({type:"literal",values:Array.isArray(n)?n:[n],...J(e)})}const sO=H("ZodFile",(n,e)=>{A0.init(n,e),Dn.init(n,e),n.min=(o,r)=>n.check(Yr(o,r)),n.max=(o,r)=>n.check(Vl(o,r)),n.mime=(o,r)=>n.check(lg(Array.isArray(o)?o:[o],r))});function _x(n){return Mw(sO,n)}const Vg=H("ZodTransform",(n,e)=>{Rf.init(n,e),Dn.init(n,e),n._zod.parse=(o,r)=>{o.addIssue=s=>{if(typeof s=="string")o.issues.push(fo(s,o.value,e));else{const c=s;c.fatal&&(c.continue=!1),c.code??(c.code="custom"),c.input??(c.input=o.value),c.inst??(c.inst=n),o.issues.push(fo(c))}};const t=e.transform(o.value,o);return t instanceof Promise?t.then(s=>(o.value=s,o)):(o.value=t,o)}});function Yg(n){return new Vg({type:"transform",transform:n})}const Wg=H("ZodOptional",(n,e)=>{D0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function Al(n){return new Wg({type:"optional",innerType:n})}const lO=H("ZodNullable",(n,e)=>{w0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function Dl(n){return new lO({type:"nullable",innerType:n})}function jx(n){return Al(Dl(n))}const cO=H("ZodDefault",(n,e)=>{O0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function hO(n,e){return new cO({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():e}})}const dO=H("ZodPrefault",(n,e)=>{C0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function mO(n,e){return new dO({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():e}})}const Zg=H("ZodNonOptional",(n,e)=>{I0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function fO(n,e){return new Zg({type:"nonoptional",innerType:n,...J(e)})}const gO=H("ZodSuccess",(n,e)=>{K0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function zx(n){return new gO({type:"success",innerType:n})}const SO=H("ZodCatch",(n,e)=>{R0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function pO(n,e){return new SO({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const yO=H("ZodNaN",(n,e)=>{B0.init(n,e),Dn.init(n,e)});function $x(n){return Sw(yO,n)}const Jg=H("ZodPipe",(n,e)=>{Bf.init(n,e),Dn.init(n,e),n.in=e.in,n.out=e.out});function wl(n,e){return new Jg({type:"pipe",in:n,out:e})}const vO=H("ZodReadonly",(n,e)=>{P0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function kO(n){return new vO({type:"readonly",innerType:n})}const bO=H("ZodTemplateLiteral",(n,e)=>{E0.init(n,e),Dn.init(n,e)});function Fx(n,e){return new bO({type:"template_literal",parts:n,...J(e)})}const TO=H("ZodLazy",(n,e)=>{H0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.getter()});function MO(n){return new TO({type:"lazy",getter:n})}const AO=H("ZodPromise",(n,e)=>{N0.init(n,e),Dn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function Ux(n){return new AO({type:"promise",innerType:n})}const nc=H("ZodCustom",(n,e)=>{G0.init(n,e),Dn.init(n,e)});function Vx(n){const e=new ae({check:"custom"});return e._zod.check=n,e}function Yx(n,e){return Aw(nc,n??(()=>!0),e)}function DO(n,e={}){return Dw(nc,n,e)}function wO(n){return ww(n)}function Wx(n,e={error:`Input not instance of ${n.name}`}){const o=new nc({type:"custom",check:"custom",fn:r=>r instanceof n,abort:!0,...J(e)});return o._zod.bag.Class=n,o}const Zx=(...n)=>Cw({Pipe:Jg,Boolean:Xl,String:Zl,Transform:Vg},...n);function Jx(n){const e=MO(()=>Fg([pm(n),jw(),zw(),Vw(),zg(e),tO(pm(),e)]));return e}function Xx(n,e){return wl(Yg(n),e)}const qx={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};function Qx(n){Re({customError:n})}function nL(){return Re().customError}var vm;vm||(vm={});function eL(n){return $0(Zl,n)}function tL(n){return J0(Jl,n)}function aL(n){return aw(Xl,n)}function iL(n){return ow(ql,n)}function oL(n){return gw(jg,n)}const rL=Object.freeze(Object.defineProperty({__proto__:null,bigint:iL,boolean:aL,date:oL,number:tL,string:eL},Symbol.toStringTag,{value:"Module"}));Re(x0());const wt=Object.freeze(Object.defineProperty({__proto__:null,$brand:yA,$input:j0,$output:_0,NEVER:pA,TimePrecision:F0,ZodAny:Yw,ZodArray:Xw,ZodBase64:Eg,ZodBase64URL:Ng,ZodBigInt:ql,ZodBigIntFormat:Lg,ZodBoolean:Xl,ZodCIDRv4:Bg,ZodCIDRv6:Pg,ZodCUID:Dg,ZodCUID2:wg,ZodCatch:SO,ZodCustom:nc,ZodCustomStringFormat:xg,ZodDate:jg,ZodDefault:cO,ZodDiscriminatedUnion:qw,ZodE164:Hg,ZodEmail:bg,ZodEmoji:Mg,ZodEnum:Wr,ZodError:YG,ZodFile:sO,get ZodFirstPartyTypeKind(){return vm},ZodGUID:Tl,ZodIPv4:Kg,ZodIPv6:Rg,ZodISODate:pg,ZodISODateTime:Sg,ZodISODuration:vg,ZodISOTime:yg,ZodIntersection:Qw,ZodIssueCode:qx,ZodJWT:Gg,ZodKSUID:Ig,ZodLazy:TO,ZodLiteral:rO,ZodMap:aO,ZodNaN:yO,ZodNanoID:Ag,ZodNever:Zw,ZodNonOptional:Zg,ZodNull:Uw,ZodNullable:lO,ZodNumber:Jl,ZodNumberFormat:To,ZodObject:Ql,ZodOptional:Wg,ZodPipe:Jg,ZodPrefault:dO,ZodPromise:AO,ZodReadonly:vO,ZodRealError:cu,ZodRecord:Ug,ZodSet:iO,ZodString:Zl,ZodStringFormat:Vn,ZodSuccess:gO,ZodSymbol:$w,ZodTemplateLiteral:bO,ZodTransform:Vg,ZodTuple:eO,ZodType:Dn,ZodULID:Og,ZodURL:Tg,ZodUUID:Wt,ZodUndefined:Fw,ZodUnion:$g,ZodUnknown:Ww,ZodVoid:Jw,ZodXID:Cg,_ZodString:kg,_default:hO,any:Ox,array:zg,base64:dx,base64url:mx,bigint:Tx,boolean:zw,catch:pO,check:Vx,cidrv4:cx,cidrv6:hx,clone:St,coerce:rL,config:Re,core:UG,cuid:ax,cuid2:ix,custom:Yx,date:Ix,discriminatedUnion:Ex,e164:fx,email:WG,emoji:ex,endsWith:sg,enum:oO,file:_x,flattenError:gf,float32:yx,float64:vx,formatError:Sf,function:Kw,getErrorMap:nL,globalRegistry:ai,gt:ci,gte:Ze,guid:ZG,hostname:px,includes:rg,instanceof:Wx,int:ym,int32:kx,int64:Mx,intersection:nO,ipv4:sx,ipv6:lx,iso:VG,json:Jx,jwt:gx,keyof:Kx,ksuid:ux,lazy:MO,length:Wl,literal:uO,locales:L0,looseObject:Px,lowercase:ig,lt:li,lte:ft,map:Gx,maxLength:Yl,maxSize:Vl,mime:lg,minLength:So,minSize:Yr,multipleOf:Vr,nan:$x,nanoid:tx,nativeEnum:Lx,negative:yw,never:_g,nonnegative:kw,nonoptional:fO,nonpositive:vw,normalize:cg,null:Vw,nullable:Dl,nullish:jx,number:jw,object:Rx,optional:Al,overwrite:di,parse:Gw,parseAsync:xw,partialRecord:Hx,pipe:wl,positive:pw,prefault:mO,preprocess:Xx,prettifyError:EA,promise:Ux,property:bw,readonly:kO,record:tO,refine:DO,regex:ag,regexes:mD,registry:Ef,safeParse:Lw,safeParseAsync:_w,set:xx,setErrorMap:Qx,size:tg,startsWith:ug,strictObject:Bx,string:pm,stringFormat:Sx,stringbool:Zx,success:zx,superRefine:wO,symbol:Dx,templateLiteral:Fx,toJSONSchema:Rw,toLowerCase:dg,toUpperCase:mg,transform:Yg,treeifyError:BA,trim:hg,tuple:Nx,uint32:bx,uint64:Ax,ulid:ox,undefined:wx,union:Fg,unknown:Ml,uppercase:og,url:nx,uuid:JG,uuidv4:XG,uuidv6:qG,uuidv7:QG,void:Cx,xid:rx},Symbol.toStringTag,{value:"Module"})),Xg=S1.split(`
`).map(n=>n.trim());Xg.filter((n,e)=>e%2===1);Xg.filter((n,e)=>e%2===0);const OO=p1.split(`
`).map(n=>n.trim());OO.filter((n,e)=>e%2===1);const uL=OO.filter((n,e)=>e%2===0),sL=wt.enum(vP),lL=wt.enum(qm),cL=wt.enum(kP),hL=wt.object({status:cL,guesses:wt.array(wt.string())}),dL=wt.record(wt.string(),hL),mL=wt.object(Object.fromEntries(lL.options.map(n=>[n,dL.optional()]))),Pb=wt.object(Object.fromEntries(sL.options.map(n=>[n,mL.optional()]))),CO=w.createContext(void 0),qg=()=>{const n=w.useContext(CO);if(!n)throw new Error("useGuessStateContext must be used within the provider!");return n},fL=({children:n})=>{const[e,o]=w.useState(()=>{const m=localStorage.getItem("guessStates");return console.log(m?JSON.parse(m):{}),m?JSON.parse(m):{}});w.useEffect(()=>{localStorage.setItem("guessStates",JSON.stringify(e))},[e]);const r=w.useCallback((m,d,f,S,p)=>{o(v=>{var k,O;const T=v[m]??{},M=((O=(k=T[d])==null?void 0:k[f])==null?void 0:O.guesses)??[],C=S!=null?[...M,S]:M;return{...v,[m]:{...T,[d]:{...T[d]||{},[f]:{status:p,guesses:C}}}}})},[]),t=w.useCallback(m=>o(m),[]),s=w.useCallback(()=>{const m=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),d=URL.createObjectURL(m),f=document.createElement("a");f.href=d,f.download="GuessTheAnimeOpeningEndingProgress.json",f.click(),URL.revokeObjectURL(d)},[e]),c=w.useMemo(()=>({guessStates:e,updateGuessStates:r,loadGuessStates:t,saveGuessStates:s}),[e,s]);return $.jsx(CO.Provider,{value:c,children:n})};function gL({song_id:n}){var s,c,m;const{mode:e}=iu(),{filter:o}=ou(),{guessStates:r}=qg(),t=((m=(c=(s=r[e])==null?void 0:s[o])==null?void 0:c[n])==null?void 0:m.status)??"None";return $.jsx("div",{className:`Song ${t}`,children:n})}function SL(){const{filter:n}=ou();return $.jsx("div",{className:"FilterTitle",children:n})}function pL(){const n=ou();return $.jsxs("div",{className:"SongListContainer",children:[$.jsx(SL,{}),$.jsx("div",{className:"OpeningsSongList",children:[...Array(eo)].map((e,o)=>{const r=o+1;return $.jsx(Ia,{className:"linky",to:`/guess?id=${r}&filter=${n.filter}`,children:$.jsx(gL,{song_id:r})},r)})})]})}function yL(n){const e=uo.useRef(null),o=w.useCallback(()=>{e.current&&(e.current.value="",e.current.click())},[]);return{FileInput:$.jsx("input",{ref:e,type:"file",accept:".json,application/json",style:{display:"none"},onChange:async t=>{var m;const s=(m=t.target.files)==null?void 0:m[0];if(!s)return;const c=await s.text();try{const d=JSON.parse(c),f=Pb.safeParse(d);console.log(Pb.strict),f.success?n(f.data):n(null)}catch{n(null)}}}),openPicker:o}}const vL=({type:n,message:e,onDone:o,duration:r=3e3})=>(w.useEffect(()=>{const t=setTimeout(o,r);return()=>clearTimeout(t)},[r,o]),$.jsx("div",{className:`Alert ${n==="Success"?"Success":"Error"}`,children:e})),IO=w.createContext({});function KO(n){const e=w.useRef(null);return e.current===null&&(e.current=n()),e.current}const Qg=typeof window<"u",RO=Qg?w.useLayoutEffect:w.useEffect,nS=w.createContext(null);function eS(n,e){n.indexOf(e)===-1&&n.push(e)}function tS(n,e){const o=n.indexOf(e);o>-1&&n.splice(o,1)}const Qt=(n,e,o)=>o>e?e:o<n?n:o;let aS=()=>{};const na={},BO=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function PO(n){return typeof n=="object"&&n!==null}const EO=n=>/^0[^.\s]+$/u.test(n);function iS(n){let e;return()=>(e===void 0&&(e=n()),e)}const st=n=>n,kL=(n,e)=>o=>e(n(o)),hu=(...n)=>n.reduce(kL),Zr=(n,e,o)=>{const r=e-n;return r===0?1:(o-n)/r};class oS{constructor(){this.subscriptions=[]}add(e){return eS(this.subscriptions,e),()=>tS(this.subscriptions,e)}notify(e,o,r){const t=this.subscriptions.length;if(t)if(t===1)this.subscriptions[0](e,o,r);else for(let s=0;s<t;s++){const c=this.subscriptions[s];c&&c(e,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ot=n=>n*1e3,Ct=n=>n/1e3;function NO(n,e){return e?n*(1e3/e):0}const HO=(n,e,o)=>(((1-3*o+3*e)*n+(3*o-6*e))*n+3*e)*n,bL=1e-7,TL=12;function ML(n,e,o,r,t){let s,c,m=0;do c=e+(o-e)/2,s=HO(c,r,t)-n,s>0?o=c:e=c;while(Math.abs(s)>bL&&++m<TL);return c}function du(n,e,o,r){if(n===e&&o===r)return st;const t=s=>ML(s,0,1,n,o);return s=>s===0||s===1?s:HO(t(s),e,r)}const GO=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,xO=n=>e=>1-n(1-e),LO=du(.33,1.53,.69,.99),rS=xO(LO),_O=GO(rS),jO=n=>(n*=2)<1?.5*rS(n):.5*(2-Math.pow(2,-10*(n-1))),uS=n=>1-Math.sin(Math.acos(n)),zO=xO(uS),$O=GO(uS),AL=du(.42,0,1,1),DL=du(0,0,.58,1),FO=du(.42,0,.58,1),wL=n=>Array.isArray(n)&&typeof n[0]!="number",UO=n=>Array.isArray(n)&&typeof n[0]=="number",OL={linear:st,easeIn:AL,easeInOut:FO,easeOut:DL,circIn:uS,circInOut:$O,circOut:zO,backIn:rS,backInOut:_O,backOut:LO,anticipate:jO},CL=n=>typeof n=="string",Eb=n=>{if(UO(n)){aS(n.length===4);const[e,o,r,t]=n;return du(e,o,r,t)}else if(CL(n))return OL[n];return n},Gs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function IL(n,e){let o=new Set,r=new Set,t=!1,s=!1;const c=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function d(S){c.has(S)&&(f.schedule(S),n()),S(m)}const f={schedule:(S,p=!1,v=!1)=>{const M=v&&t?o:r;return p&&c.add(S),M.has(S)||M.add(S),S},cancel:S=>{r.delete(S),c.delete(S)},process:S=>{if(m=S,t){s=!0;return}t=!0,[o,r]=[r,o],o.forEach(d),o.clear(),t=!1,s&&(s=!1,f.process(S))}};return f}const KL=40;function VO(n,e){let o=!1,r=!0;const t={delta:0,timestamp:0,isProcessing:!1},s=()=>o=!0,c=Gs.reduce((D,P)=>(D[P]=IL(s),D),{}),{setup:m,read:d,resolveKeyframes:f,preUpdate:S,update:p,preRender:v,render:T,postRender:M}=c,C=()=>{const D=na.useManualTiming?t.timestamp:performance.now();o=!1,na.useManualTiming||(t.delta=r?1e3/60:Math.max(Math.min(D-t.timestamp,KL),1)),t.timestamp=D,t.isProcessing=!0,m.process(t),d.process(t),f.process(t),S.process(t),p.process(t),v.process(t),T.process(t),M.process(t),t.isProcessing=!1,o&&e&&(r=!1,n(C))},A=()=>{o=!0,r=!0,t.isProcessing||n(C)};return{schedule:Gs.reduce((D,P)=>{const I=c[P];return D[P]=(j,z=!1,U=!1)=>(o||A(),I.schedule(j,z,U)),D},{}),cancel:D=>{for(let P=0;P<Gs.length;P++)c[Gs[P]].cancel(D)},state:t,steps:c}}const{schedule:Wn,cancel:Ra,state:Te,steps:Ed}=VO(typeof requestAnimationFrame<"u"?requestAnimationFrame:st,!0);let tl;function RL(){tl=void 0}const Ge={now:()=>(tl===void 0&&Ge.set(Te.isProcessing||na.useManualTiming?Te.timestamp:performance.now()),tl),set:n=>{tl=n,queueMicrotask(RL)}},YO=n=>e=>typeof e=="string"&&e.startsWith(n),sS=YO("--"),BL=YO("var(--"),lS=n=>BL(n)?PL.test(n.split("/*")[0].trim()):!1,PL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Mo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Jr={...Mo,transform:n=>Qt(0,1,n)},xs={...Mo,default:1},Nr=n=>Math.round(n*1e5)/1e5,cS=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function EL(n){return n==null}const NL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hS=(n,e)=>o=>!!(typeof o=="string"&&NL.test(o)&&o.startsWith(n)||e&&!EL(o)&&Object.prototype.hasOwnProperty.call(o,e)),WO=(n,e,o)=>r=>{if(typeof r!="string")return r;const[t,s,c,m]=r.match(cS);return{[n]:parseFloat(t),[e]:parseFloat(s),[o]:parseFloat(c),alpha:m!==void 0?parseFloat(m):1}},HL=n=>Qt(0,255,n),Nd={...Mo,transform:n=>Math.round(HL(n))},ii={test:hS("rgb","red"),parse:WO("red","green","blue"),transform:({red:n,green:e,blue:o,alpha:r=1})=>"rgba("+Nd.transform(n)+", "+Nd.transform(e)+", "+Nd.transform(o)+", "+Nr(Jr.transform(r))+")"};function GL(n){let e="",o="",r="",t="";return n.length>5?(e=n.substring(1,3),o=n.substring(3,5),r=n.substring(5,7),t=n.substring(7,9)):(e=n.substring(1,2),o=n.substring(2,3),r=n.substring(3,4),t=n.substring(4,5),e+=e,o+=o,r+=r,t+=t),{red:parseInt(e,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:t?parseInt(t,16)/255:1}}const km={test:hS("#"),parse:GL,transform:ii.transform},mu=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ca=mu("deg"),It=mu("%"),pn=mu("px"),xL=mu("vh"),LL=mu("vw"),Nb={...It,parse:n=>It.parse(n)/100,transform:n=>It.transform(n*100)},to={test:hS("hsl","hue"),parse:WO("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:o,alpha:r=1})=>"hsla("+Math.round(n)+", "+It.transform(Nr(e))+", "+It.transform(Nr(o))+", "+Nr(Jr.transform(r))+")"},le={test:n=>ii.test(n)||km.test(n)||to.test(n),parse:n=>ii.test(n)?ii.parse(n):to.test(n)?to.parse(n):km.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ii.transform(n):to.transform(n),getAnimatableNone:n=>{const e=le.parse(n);return e.alpha=0,le.transform(e)}},_L=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jL(n){var e,o;return isNaN(n)&&typeof n=="string"&&(((e=n.match(cS))==null?void 0:e.length)||0)+(((o=n.match(_L))==null?void 0:o.length)||0)>0}const ZO="number",JO="color",zL="var",$L="var(",Hb="${}",FL=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xr(n){const e=n.toString(),o=[],r={color:[],number:[],var:[]},t=[];let s=0;const m=e.replace(FL,d=>(le.test(d)?(r.color.push(s),t.push(JO),o.push(le.parse(d))):d.startsWith($L)?(r.var.push(s),t.push(zL),o.push(d)):(r.number.push(s),t.push(ZO),o.push(parseFloat(d))),++s,Hb)).split(Hb);return{values:o,split:m,indexes:r,types:t}}function XO(n){return Xr(n).values}function qO(n){const{split:e,types:o}=Xr(n),r=e.length;return t=>{let s="";for(let c=0;c<r;c++)if(s+=e[c],t[c]!==void 0){const m=o[c];m===ZO?s+=Nr(t[c]):m===JO?s+=le.transform(t[c]):s+=t[c]}return s}}const UL=n=>typeof n=="number"?0:le.test(n)?le.getAnimatableNone(n):n;function VL(n){const e=XO(n);return qO(n)(e.map(UL))}const Ba={test:jL,parse:XO,createTransformer:qO,getAnimatableNone:VL};function Hd(n,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(e-n)*6*o:o<1/2?e:o<2/3?n+(e-n)*(2/3-o)*6:n}function YL({hue:n,saturation:e,lightness:o,alpha:r}){n/=360,e/=100,o/=100;let t=0,s=0,c=0;if(!e)t=s=c=o;else{const m=o<.5?o*(1+e):o+e-o*e,d=2*o-m;t=Hd(d,m,n+1/3),s=Hd(d,m,n),c=Hd(d,m,n-1/3)}return{red:Math.round(t*255),green:Math.round(s*255),blue:Math.round(c*255),alpha:r}}function Ol(n,e){return o=>o>0?e:n}const Jn=(n,e,o)=>n+(e-n)*o,Gd=(n,e,o)=>{const r=n*n,t=o*(e*e-r)+r;return t<0?0:Math.sqrt(t)},WL=[km,ii,to],ZL=n=>WL.find(e=>e.test(n));function Gb(n){const e=ZL(n);if(!e)return!1;let o=e.parse(n);return e===to&&(o=YL(o)),o}const xb=(n,e)=>{const o=Gb(n),r=Gb(e);if(!o||!r)return Ol(n,e);const t={...o};return s=>(t.red=Gd(o.red,r.red,s),t.green=Gd(o.green,r.green,s),t.blue=Gd(o.blue,r.blue,s),t.alpha=Jn(o.alpha,r.alpha,s),ii.transform(t))},bm=new Set(["none","hidden"]);function JL(n,e){return bm.has(n)?o=>o<=0?n:e:o=>o>=1?e:n}function XL(n,e){return o=>Jn(n,e,o)}function dS(n){return typeof n=="number"?XL:typeof n=="string"?lS(n)?Ol:le.test(n)?xb:n_:Array.isArray(n)?QO:typeof n=="object"?le.test(n)?xb:qL:Ol}function QO(n,e){const o=[...n],r=o.length,t=n.map((s,c)=>dS(s)(s,e[c]));return s=>{for(let c=0;c<r;c++)o[c]=t[c](s);return o}}function qL(n,e){const o={...n,...e},r={};for(const t in o)n[t]!==void 0&&e[t]!==void 0&&(r[t]=dS(n[t])(n[t],e[t]));return t=>{for(const s in r)o[s]=r[s](t);return o}}function QL(n,e){const o=[],r={color:0,var:0,number:0};for(let t=0;t<e.values.length;t++){const s=e.types[t],c=n.indexes[s][r[s]],m=n.values[c]??0;o[t]=m,r[s]++}return o}const n_=(n,e)=>{const o=Ba.createTransformer(e),r=Xr(n),t=Xr(e);return r.indexes.var.length===t.indexes.var.length&&r.indexes.color.length===t.indexes.color.length&&r.indexes.number.length>=t.indexes.number.length?bm.has(n)&&!t.values.length||bm.has(e)&&!r.values.length?JL(n,e):hu(QO(QL(r,t),t.values),o):Ol(n,e)};function nC(n,e,o){return typeof n=="number"&&typeof e=="number"&&typeof o=="number"?Jn(n,e,o):dS(n)(n,e)}const e_=n=>{const e=({timestamp:o})=>n(o);return{start:(o=!0)=>Wn.update(e,o),stop:()=>Ra(e),now:()=>Te.isProcessing?Te.timestamp:Ge.now()}},eC=(n,e,o=10)=>{let r="";const t=Math.max(Math.round(e/o),2);for(let s=0;s<t;s++)r+=Math.round(n(s/(t-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Cl=2e4;function mS(n){let e=0;const o=50;let r=n.next(e);for(;!r.done&&e<Cl;)e+=o,r=n.next(e);return e>=Cl?1/0:e}function t_(n,e=100,o){const r=o({...n,keyframes:[0,e]}),t=Math.min(mS(r),Cl);return{type:"keyframes",ease:s=>r.next(t*s).value/e,duration:Ct(t)}}const a_=5;function tC(n,e,o){const r=Math.max(e-a_,0);return NO(o-n(r),e-r)}const ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xd=.001;function i_({duration:n=ee.duration,bounce:e=ee.bounce,velocity:o=ee.velocity,mass:r=ee.mass}){let t,s,c=1-e;c=Qt(ee.minDamping,ee.maxDamping,c),n=Qt(ee.minDuration,ee.maxDuration,Ct(n)),c<1?(t=f=>{const S=f*c,p=S*n,v=S-o,T=Tm(f,c),M=Math.exp(-p);return xd-v/T*M},s=f=>{const p=f*c*n,v=p*o+o,T=Math.pow(c,2)*Math.pow(f,2)*n,M=Math.exp(-p),C=Tm(Math.pow(f,2),c);return(-t(f)+xd>0?-1:1)*((v-T)*M)/C}):(t=f=>{const S=Math.exp(-f*n),p=(f-o)*n+1;return-xd+S*p},s=f=>{const S=Math.exp(-f*n),p=(o-f)*(n*n);return S*p});const m=5/n,d=r_(t,s,m);if(n=Ot(n),isNaN(d))return{stiffness:ee.stiffness,damping:ee.damping,duration:n};{const f=Math.pow(d,2)*r;return{stiffness:f,damping:c*2*Math.sqrt(r*f),duration:n}}}const o_=12;function r_(n,e,o){let r=o;for(let t=1;t<o_;t++)r=r-n(r)/e(r);return r}function Tm(n,e){return n*Math.sqrt(1-e*e)}const u_=["duration","bounce"],s_=["stiffness","damping","mass"];function Lb(n,e){return e.some(o=>n[o]!==void 0)}function l_(n){let e={velocity:ee.velocity,stiffness:ee.stiffness,damping:ee.damping,mass:ee.mass,isResolvedFromDuration:!1,...n};if(!Lb(n,s_)&&Lb(n,u_))if(n.visualDuration){const o=n.visualDuration,r=2*Math.PI/(o*1.2),t=r*r,s=2*Qt(.05,1,1-(n.bounce||0))*Math.sqrt(t);e={...e,mass:ee.mass,stiffness:t,damping:s}}else{const o=i_(n);e={...e,...o,mass:ee.mass},e.isResolvedFromDuration=!0}return e}function Il(n=ee.visualDuration,e=ee.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:t}=o;const s=o.keyframes[0],c=o.keyframes[o.keyframes.length-1],m={done:!1,value:s},{stiffness:d,damping:f,mass:S,duration:p,velocity:v,isResolvedFromDuration:T}=l_({...o,velocity:-Ct(o.velocity||0)}),M=v||0,C=f/(2*Math.sqrt(d*S)),A=c-s,k=Ct(Math.sqrt(d/S)),O=Math.abs(A)<5;r||(r=O?ee.restSpeed.granular:ee.restSpeed.default),t||(t=O?ee.restDelta.granular:ee.restDelta.default);let D;if(C<1){const I=Tm(k,C);D=j=>{const z=Math.exp(-C*k*j);return c-z*((M+C*k*A)/I*Math.sin(I*j)+A*Math.cos(I*j))}}else if(C===1)D=I=>c-Math.exp(-k*I)*(A+(M+k*A)*I);else{const I=k*Math.sqrt(C*C-1);D=j=>{const z=Math.exp(-C*k*j),U=Math.min(I*j,300);return c-z*((M+C*k*A)*Math.sinh(U)+I*A*Math.cosh(U))/I}}const P={calculatedDuration:T&&p||null,next:I=>{const j=D(I);if(T)m.done=I>=p;else{let z=I===0?M:0;C<1&&(z=I===0?Ot(M):tC(D,I,j));const U=Math.abs(z)<=r,tn=Math.abs(c-j)<=t;m.done=U&&tn}return m.value=m.done?c:j,m},toString:()=>{const I=Math.min(mS(P),Cl),j=eC(z=>P.next(I*z).value,I,30);return I+"ms "+j},toTransition:()=>{}};return P}Il.applyToOptions=n=>{const e=t_(n,100,Il);return n.ease=e.ease,n.duration=Ot(e.duration),n.type="keyframes",n};function Mm({keyframes:n,velocity:e=0,power:o=.8,timeConstant:r=325,bounceDamping:t=10,bounceStiffness:s=500,modifyTarget:c,min:m,max:d,restDelta:f=.5,restSpeed:S}){const p=n[0],v={done:!1,value:p},T=U=>m!==void 0&&U<m||d!==void 0&&U>d,M=U=>m===void 0?d:d===void 0||Math.abs(m-U)<Math.abs(d-U)?m:d;let C=o*e;const A=p+C,k=c===void 0?A:c(A);k!==A&&(C=k-p);const O=U=>-C*Math.exp(-U/r),D=U=>k+O(U),P=U=>{const tn=O(U),ln=D(U);v.done=Math.abs(tn)<=f,v.value=v.done?k:ln};let I,j;const z=U=>{T(v.value)&&(I=U,j=Il({keyframes:[v.value,M(v.value)],velocity:tC(D,U,v.value),damping:t,stiffness:s,restDelta:f,restSpeed:S}))};return z(0),{calculatedDuration:null,next:U=>{let tn=!1;return!j&&I===void 0&&(tn=!0,P(U),z(U)),I!==void 0&&U>=I?j.next(U-I):(!tn&&P(U),v)}}}function c_(n,e,o){const r=[],t=o||na.mix||nC,s=n.length-1;for(let c=0;c<s;c++){let m=t(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||st:e;m=hu(d,m)}r.push(m)}return r}function h_(n,e,{clamp:o=!0,ease:r,mixer:t}={}){const s=n.length;if(aS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[s-1]&&(n=[...n].reverse(),e=[...e].reverse());const m=c_(e,r,t),d=m.length,f=S=>{if(c&&S<n[0])return e[0];let p=0;if(d>1)for(;p<n.length-2&&!(S<n[p+1]);p++);const v=Zr(n[p],n[p+1],S);return m[p](v)};return o?S=>f(Qt(n[0],n[s-1],S)):f}function d_(n,e){const o=n[n.length-1];for(let r=1;r<=e;r++){const t=Zr(0,e,r);n.push(Jn(o,1,t))}}function m_(n){const e=[0];return d_(e,n.length-1),e}function f_(n,e){return n.map(o=>o*e)}function g_(n,e){return n.map(()=>e||FO).splice(0,n.length-1)}function Hr({duration:n=300,keyframes:e,times:o,ease:r="easeInOut"}){const t=wL(r)?r.map(Eb):Eb(r),s={done:!1,value:e[0]},c=f_(o&&o.length===e.length?o:m_(e),n),m=h_(c,e,{ease:Array.isArray(t)?t:g_(e,t)});return{calculatedDuration:n,next:d=>(s.value=m(d),s.done=d>=n,s)}}const S_=n=>n!==null;function fS(n,{repeat:e,repeatType:o="loop"},r,t=1){const s=n.filter(S_),m=t<0||e&&o!=="loop"&&e%2===1?0:s.length-1;return!m||r===void 0?s[m]:r}const p_={decay:Mm,inertia:Mm,tween:Hr,keyframes:Hr,spring:Il};function aC(n){typeof n.type=="string"&&(n.type=p_[n.type])}class gS{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,o){return this.finished.then(e,o)}}const y_=n=>n/100;class SS extends gS{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,t;const{motionValue:o}=this.options;o&&o.updatedAt!==Ge.now()&&this.tick(Ge.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(t=(r=this.options).onStop)==null||t.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;aC(e);const{type:o=Hr,repeat:r=0,repeatDelay:t=0,repeatType:s,velocity:c=0}=e;let{keyframes:m}=e;const d=o||Hr;d!==Hr&&typeof m[0]!="number"&&(this.mixKeyframes=hu(y_,nC(m[0],m[1])),m=[0,100]);const f=d({...e,keyframes:m});s==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...m].reverse(),velocity:-c})),f.calculatedDuration===null&&(f.calculatedDuration=mS(f));const{calculatedDuration:S}=f;this.calculatedDuration=S,this.resolvedDuration=S+t,this.totalDuration=this.resolvedDuration*(r+1)-t,this.generator=f}updateTime(e){const o=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(e,o=!1){const{generator:r,totalDuration:t,mixKeyframes:s,mirroredGenerator:c,resolvedDuration:m,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:f=0,keyframes:S,repeat:p,repeatType:v,repeatDelay:T,type:M,onUpdate:C,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-t/this.speed,this.startTime)),o?this.currentTime=e:this.updateTime(e);const k=this.currentTime-f*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?k<0:k>t;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=t);let D=this.currentTime,P=r;if(p){const U=Math.min(this.currentTime,t)/m;let tn=Math.floor(U),ln=U%1;!ln&&U>=1&&(ln=1),ln===1&&tn--,tn=Math.min(tn,p+1),!!(tn%2)&&(v==="reverse"?(ln=1-ln,T&&(ln-=T/m)):v==="mirror"&&(P=c)),D=Qt(0,1,ln)*m}const I=O?{done:!1,value:S[0]}:P.next(D);s&&(I.value=s(I.value));let{done:j}=I;!O&&d!==null&&(j=this.playbackSpeed>=0?this.currentTime>=t:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return z&&M!==Mm&&(I.value=fS(S,this.options,A,this.speed)),C&&C(I.value),z&&this.finish(),I}then(e,o){return this.finished.then(e,o)}get duration(){return Ct(this.calculatedDuration)}get time(){return Ct(this.currentTime)}set time(e){var o;e=Ot(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ge.now());const o=this.playbackSpeed!==e;this.playbackSpeed=e,o&&(this.time=Ct(this.currentTime))}play(){var t,s;if(this.isStopped)return;const{driver:e=e_,startTime:o}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(s=(t=this.options).onPlay)==null||s.call(t);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ge.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(e=this.options).onComplete)==null||o.call(e)}cancel(){var e,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(e=this.options).onCancel)==null||o.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),e.observe(this)}}function v_(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const oi=n=>n*180/Math.PI,Am=n=>{const e=oi(Math.atan2(n[1],n[0]));return Dm(e)},k_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Am,rotateZ:Am,skewX:n=>oi(Math.atan(n[1])),skewY:n=>oi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Dm=n=>(n=n%360,n<0&&(n+=360),n),_b=Am,jb=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),zb=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),b_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jb,scaleY:zb,scale:n=>(jb(n)+zb(n))/2,rotateX:n=>Dm(oi(Math.atan2(n[6],n[5]))),rotateY:n=>Dm(oi(Math.atan2(-n[2],n[0]))),rotateZ:_b,rotate:_b,skewX:n=>oi(Math.atan(n[4])),skewY:n=>oi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function wm(n){return n.includes("scale")?1:0}function Om(n,e){if(!n||n==="none")return wm(e);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,t;if(o)r=b_,t=o;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=k_,t=m}if(!t)return wm(e);const s=r[e],c=t[1].split(",").map(M_);return typeof s=="function"?s(c):c[s]}const T_=(n,e)=>{const{transform:o="none"}=getComputedStyle(n);return Om(o,e)};function M_(n){return parseFloat(n.trim())}const Ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Do=new Set(Ao),$b=n=>n===Mo||n===pn,A_=new Set(["x","y","z"]),D_=Ao.filter(n=>!A_.has(n));function w_(n){const e=[];return D_.forEach(o=>{const r=n.getValue(o);r!==void 0&&(e.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),e}const ri={width:({x:n},{paddingLeft:e="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(e)-parseFloat(o),height:({y:n},{paddingTop:e="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(e)-parseFloat(o),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Om(e,"x"),y:(n,{transform:e})=>Om(e,"y")};ri.translateX=ri.x;ri.translateY=ri.y;const ui=new Set;let Cm=!1,Im=!1,Km=!1;function iC(){if(Im){const n=Array.from(ui).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),o=new Map;e.forEach(r=>{const t=w_(r);t.length&&(o.set(r,t),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const t=o.get(r);t&&t.forEach(([s,c])=>{var m;(m=r.getValue(s))==null||m.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Im=!1,Cm=!1,ui.forEach(n=>n.complete(Km)),ui.clear()}function oC(){ui.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Im=!0)})}function O_(){Km=!0,oC(),iC(),Km=!1}class pS{constructor(e,o,r,t,s,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=o,this.name=r,this.motionValue=t,this.element=s,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ui.add(this),Cm||(Cm=!0,Wn.read(oC),Wn.resolveKeyframes(iC))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:o,element:r,motionValue:t}=this;if(e[0]===null){const s=t==null?void 0:t.get(),c=e[e.length-1];if(s!==void 0)e[0]=s;else if(r&&o){const m=r.readValue(o,c);m!=null&&(e[0]=m)}e[0]===void 0&&(e[0]=c),t&&s===void 0&&t.set(e[0])}v_(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ui.delete(this)}cancel(){this.state==="scheduled"&&(ui.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const C_=n=>n.startsWith("--");function I_(n,e,o){C_(e)?n.style.setProperty(e,o):n.style[e]=o}const K_=iS(()=>window.ScrollTimeline!==void 0),R_={};function B_(n,e){const o=iS(n);return()=>R_[e]??o()}const rC=B_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Er=([n,e,o,r])=>`cubic-bezier(${n}, ${e}, ${o}, ${r})`,Fb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Er([0,.65,.55,1]),circOut:Er([.55,0,1,.45]),backIn:Er([.31,.01,.66,-.59]),backOut:Er([.33,1.53,.69,.99])};function uC(n,e){if(n)return typeof n=="function"?rC()?eC(n,e):"ease-out":UO(n)?Er(n):Array.isArray(n)?n.map(o=>uC(o,e)||Fb.easeOut):Fb[n]}function P_(n,e,o,{delay:r=0,duration:t=300,repeat:s=0,repeatType:c="loop",ease:m="easeOut",times:d}={},f=void 0){const S={[e]:o};d&&(S.offset=d);const p=uC(m,t);Array.isArray(p)&&(S.easing=p);const v={delay:r,duration:t,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:s+1,direction:c==="reverse"?"alternate":"normal"};return f&&(v.pseudoElement=f),n.animate(S,v)}function sC(n){return typeof n=="function"&&"applyToOptions"in n}function E_({type:n,...e}){return sC(n)&&rC()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class N_ extends gS{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:o,name:r,keyframes:t,pseudoElement:s,allowFlatten:c=!1,finalKeyframe:m,onComplete:d}=e;this.isPseudoElement=!!s,this.allowFlatten=c,this.options=e,aS(typeof e.type!="string");const f=E_(e);this.animation=P_(o,r,t,f,s),f.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const S=fS(t,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(S):I_(o,r,S),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,o;(o=(e=this.animation).finish)==null||o.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,o;this.isPseudoElement||(o=(e=this.animation).commitStyles)==null||o.call(e)}get duration(){var o,r;const e=((r=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:r.call(o).duration)||0;return Ct(Number(e))}get time(){return Ct(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Ot(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:o}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&K_()?(this.animation.timeline=e,st):o(this)}}const lC={anticipate:jO,backInOut:_O,circInOut:$O};function H_(n){return n in lC}function G_(n){typeof n.ease=="string"&&H_(n.ease)&&(n.ease=lC[n.ease])}const Ub=10;class x_ extends N_{constructor(e){G_(e),aC(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:o,onUpdate:r,onComplete:t,element:s,...c}=this.options;if(!o)return;if(e!==void 0){o.set(e);return}const m=new SS({...c,autoplay:!1}),d=Ot(this.finishedTime??this.time);o.setWithVelocity(m.sample(d-Ub).value,m.sample(d).value,Ub),m.stop()}}const Vb=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ba.test(n)||n==="0")&&!n.startsWith("url("));function L_(n){const e=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==e)return!0}function __(n,e,o,r){const t=n[0];if(t===null)return!1;if(e==="display"||e==="visibility")return!0;const s=n[n.length-1],c=Vb(t,e),m=Vb(s,e);return!c||!m?!1:L_(n)||(o==="spring"||sC(o))&&r}function Rm(n){n.duration=0,n.type}const j_=new Set(["opacity","clipPath","filter","transform"]),z_=iS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $_(n){var S;const{motionValue:e,name:o,repeatDelay:r,repeatType:t,damping:s,type:c}=n;if(!(((S=e==null?void 0:e.owner)==null?void 0:S.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:f}=e.owner.getProps();return z_()&&o&&j_.has(o)&&(o!=="transform"||!f)&&!d&&!r&&t!=="mirror"&&s!==0&&c!=="inertia"}const F_=40;class U_ extends gS{constructor({autoplay:e=!0,delay:o=0,type:r="keyframes",repeat:t=0,repeatDelay:s=0,repeatType:c="loop",keyframes:m,name:d,motionValue:f,element:S,...p}){var M;super(),this.stop=()=>{var C,A;this._animation&&(this._animation.stop(),(C=this.stopTimeline)==null||C.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=Ge.now();const v={autoplay:e,delay:o,type:r,repeat:t,repeatDelay:s,repeatType:c,name:d,motionValue:f,element:S,...p},T=(S==null?void 0:S.KeyframeResolver)||pS;this.keyframeResolver=new T(m,(C,A,k)=>this.onKeyframesResolved(C,A,v,!k),d,f,S),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,o,r,t){this.keyframeResolver=void 0;const{name:s,type:c,velocity:m,delay:d,isHandoff:f,onUpdate:S}=r;this.resolvedAt=Ge.now(),__(e,s,c,m)||((na.instantAnimations||!d)&&(S==null||S(fS(e,r,o))),e[0]=e[e.length-1],Rm(r),r.repeat=0);const v={startTime:t?this.resolvedAt?this.resolvedAt-this.createdAt>F_?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:e},T=!f&&$_(v)?new x_({...v,element:v.motionValue.owner.current}):new SS(v);T.finished.then(()=>this.notifyFinished()).catch(st),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(e,o){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),O_()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const V_=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Y_(n){const e=V_.exec(n);if(!e)return[,];const[,o,r,t]=e;return[`--${o??r}`,t]}function cC(n,e,o=1){const[r,t]=Y_(n);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const c=s.trim();return BO(c)?parseFloat(c):c}return lS(t)?cC(t,e,o+1):t}function yS(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const hC=new Set(["width","height","top","left","right","bottom",...Ao]),W_={test:n=>n==="auto",parse:n=>n},dC=n=>e=>e.test(n),mC=[Mo,pn,It,Ca,LL,xL,W_],Yb=n=>mC.find(dC(n));function Z_(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||EO(n):!0}const J_=new Set(["brightness","contrast","saturate","opacity"]);function X_(n){const[e,o]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=o.match(cS)||[];if(!r)return n;const t=o.replace(r,"");let s=J_.has(e)?1:0;return r!==o&&(s*=100),e+"("+s+t+")"}const q_=/\b([a-z-]*)\(.*?\)/gu,Bm={...Ba,getAnimatableNone:n=>{const e=n.match(q_);return e?e.map(X_).join(" "):n}},Wb={...Mo,transform:Math.round},Q_={rotate:Ca,rotateX:Ca,rotateY:Ca,rotateZ:Ca,scale:xs,scaleX:xs,scaleY:xs,scaleZ:xs,skew:Ca,skewX:Ca,skewY:Ca,distance:pn,translateX:pn,translateY:pn,translateZ:pn,x:pn,y:pn,z:pn,perspective:pn,transformPerspective:pn,opacity:Jr,originX:Nb,originY:Nb,originZ:pn},vS={borderWidth:pn,borderTopWidth:pn,borderRightWidth:pn,borderBottomWidth:pn,borderLeftWidth:pn,borderRadius:pn,radius:pn,borderTopLeftRadius:pn,borderTopRightRadius:pn,borderBottomRightRadius:pn,borderBottomLeftRadius:pn,width:pn,maxWidth:pn,height:pn,maxHeight:pn,top:pn,right:pn,bottom:pn,left:pn,padding:pn,paddingTop:pn,paddingRight:pn,paddingBottom:pn,paddingLeft:pn,margin:pn,marginTop:pn,marginRight:pn,marginBottom:pn,marginLeft:pn,backgroundPositionX:pn,backgroundPositionY:pn,...Q_,zIndex:Wb,fillOpacity:Jr,strokeOpacity:Jr,numOctaves:Wb},nj={...vS,color:le,backgroundColor:le,outlineColor:le,fill:le,stroke:le,borderColor:le,borderTopColor:le,borderRightColor:le,borderBottomColor:le,borderLeftColor:le,filter:Bm,WebkitFilter:Bm},fC=n=>nj[n];function gC(n,e){let o=fC(n);return o!==Bm&&(o=Ba),o.getAnimatableNone?o.getAnimatableNone(e):void 0}const ej=new Set(["auto","none","0"]);function tj(n,e,o){let r=0,t;for(;r<n.length&&!t;){const s=n[r];typeof s=="string"&&!ej.has(s)&&Xr(s).values.length&&(t=n[r]),r++}if(t&&o)for(const s of e)n[s]=gC(o,t)}class aj extends pS{constructor(e,o,r,t,s){super(e,o,r,t,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let f=e[d];if(typeof f=="string"&&(f=f.trim(),lS(f))){const S=cC(f,o.current);S!==void 0&&(e[d]=S),d===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!hC.has(r)||e.length!==2)return;const[t,s]=e,c=Yb(t),m=Yb(s);if(c!==m)if($b(c)&&$b(m))for(let d=0;d<e.length;d++){const f=e[d];typeof f=="string"&&(e[d]=parseFloat(f))}else ri[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:o}=this,r=[];for(let t=0;t<e.length;t++)(e[t]===null||Z_(e[t]))&&r.push(t);r.length&&tj(e,r,o)}measureInitialState(){const{element:e,unresolvedKeyframes:o,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ri[r](e.measureViewportBox(),window.getComputedStyle(e.current)),o[0]=this.measuredOrigin;const t=o[o.length-1];t!==void 0&&e.getValue(r,t).jump(t,!1)}measureEndState(){var m;const{element:e,name:o,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const t=e.getValue(o);t&&t.jump(this.measuredOrigin,!1);const s=r.length-1,c=r[s];r[s]=ri[o](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([d,f])=>{e.getValue(d).set(f)}),this.resolveNoneKeyframes()}}function ij(n,e,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const t=(o==null?void 0:o[n])??r.querySelectorAll(n);return t?Array.from(t):[]}return Array.from(n)}const SC=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function oj(n){return PO(n)&&"offsetHeight"in n}const Zb=30,rj=n=>!isNaN(parseFloat(n));class uj{constructor(e,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const t=Ge.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=o.owner}setCurrent(e){this.current=e,this.updatedAt=Ge.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=rj(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,o){this.events[e]||(this.events[e]=new oS);const r=this.events[e].add(o);return e==="change"?()=>{r(),Wn.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,o){this.passiveEffect=e,this.stopPassiveEffect=o}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,o=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ge.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Zb)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Zb);return NO(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(e){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=e(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,o;(e=this.dependents)==null||e.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function po(n,e){return new uj(n,e)}const{schedule:kS}=VO(queueMicrotask,!1),dt={x:!1,y:!1};function pC(){return dt.x||dt.y}function sj(n){return n==="x"||n==="y"?dt[n]?null:(dt[n]=!0,()=>{dt[n]=!1}):dt.x||dt.y?null:(dt.x=dt.y=!0,()=>{dt.x=dt.y=!1})}function yC(n,e){const o=ij(n),r=new AbortController,t={passive:!0,...e,signal:r.signal};return[o,t,()=>r.abort()]}function Jb(n){return!(n.pointerType==="touch"||pC())}function lj(n,e,o={}){const[r,t,s]=yC(n,o),c=m=>{if(!Jb(m))return;const{target:d}=m,f=e(d,m);if(typeof f!="function"||!d)return;const S=p=>{Jb(p)&&(f(p),d.removeEventListener("pointerleave",S))};d.addEventListener("pointerleave",S,t)};return r.forEach(m=>{m.addEventListener("pointerenter",c,t)}),s}const vC=(n,e)=>e?n===e?!0:vC(n,e.parentElement):!1,bS=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,cj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function hj(n){return cj.has(n.tagName)||n.tabIndex!==-1}const al=new WeakSet;function Xb(n){return e=>{e.key==="Enter"&&n(e)}}function Ld(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const dj=(n,e)=>{const o=n.currentTarget;if(!o)return;const r=Xb(()=>{if(al.has(o))return;Ld(o,"down");const t=Xb(()=>{Ld(o,"up")}),s=()=>Ld(o,"cancel");o.addEventListener("keyup",t,e),o.addEventListener("blur",s,e)});o.addEventListener("keydown",r,e),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),e)};function qb(n){return bS(n)&&!pC()}function mj(n,e,o={}){const[r,t,s]=yC(n,o),c=m=>{const d=m.currentTarget;if(!qb(m))return;al.add(d);const f=e(d,m),S=(T,M)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",v),al.has(d)&&al.delete(d),qb(T)&&typeof f=="function"&&f(T,{success:M})},p=T=>{S(T,d===window||d===document||o.useGlobalTarget||vC(d,T.target))},v=T=>{S(T,!1)};window.addEventListener("pointerup",p,t),window.addEventListener("pointercancel",v,t)};return r.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",c,t),oj(m)&&(m.addEventListener("focus",f=>dj(f,t)),!hj(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),s}function kC(n){return PO(n)&&"ownerSVGElement"in n}function fj(n){return kC(n)&&n.tagName==="svg"}const Ce=n=>!!(n&&n.getVelocity),gj=[...mC,le,Ba],Sj=n=>gj.find(dC(n)),bC=w.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function pj(n=!0){const e=w.useContext(nS);if(e===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:t}=e,s=w.useId();w.useEffect(()=>{if(n)return t(s)},[n]);const c=w.useCallback(()=>n&&r&&r(s),[s,r,n]);return!o&&r?[!1,c]:[!0]}const TC=w.createContext({strict:!1}),Qb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yo={};for(const n in Qb)yo[n]={isEnabled:e=>Qb[n].some(o=>!!e[o])};function yj(n){for(const e in n)yo[e]={...yo[e],...n[e]}}const vj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||vj.has(n)}let MC=n=>!Kl(n);function kj(n){typeof n=="function"&&(MC=e=>e.startsWith("on")?!Kl(e):n(e))}try{kj(require("@emotion/is-prop-valid").default)}catch{}function bj(n,e,o){const r={};for(const t in n)t==="values"&&typeof n.values=="object"||(MC(t)||o===!0&&Kl(t)||!e&&!Kl(t)||n.draggable&&t.startsWith("onDrag"))&&(r[t]=n[t]);return r}const ec=w.createContext({});function tc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function qr(n){return typeof n=="string"||Array.isArray(n)}const TS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],MS=["initial",...TS];function ac(n){return tc(n.animate)||MS.some(e=>qr(n[e]))}function AC(n){return!!(ac(n)||n.variants)}function Tj(n,e){if(ac(n)){const{initial:o,animate:r}=n;return{initial:o===!1||qr(o)?o:void 0,animate:qr(r)?r:void 0}}return n.inherit!==!1?e:{}}function Mj(n){const{initial:e,animate:o}=Tj(n,w.useContext(ec));return w.useMemo(()=>({initial:e,animate:o}),[nT(e),nT(o)])}function nT(n){return Array.isArray(n)?n.join(" "):n}const Qr={};function Aj(n){for(const e in n)Qr[e]=n[e],sS(e)&&(Qr[e].isCSSVariable=!0)}function DC(n,{layout:e,layoutId:o}){return Do.has(n)||n.startsWith("origin")||(e||o!==void 0)&&(!!Qr[n]||n==="opacity")}const Dj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wj=Ao.length;function Oj(n,e,o){let r="",t=!0;for(let s=0;s<wj;s++){const c=Ao[s],m=n[c];if(m===void 0)continue;let d=!0;if(typeof m=="number"?d=m===(c.startsWith("scale")?1:0):d=parseFloat(m)===0,!d||o){const f=SC(m,vS[c]);if(!d){t=!1;const S=Dj[c]||c;r+=`${S}(${f}) `}o&&(e[c]=f)}}return r=r.trim(),o?r=o(e,t?"":r):t&&(r="none"),r}function AS(n,e,o){const{style:r,vars:t,transformOrigin:s}=n;let c=!1,m=!1;for(const d in e){const f=e[d];if(Do.has(d)){c=!0;continue}else if(sS(d)){t[d]=f;continue}else{const S=SC(f,vS[d]);d.startsWith("origin")?(m=!0,s[d]=S):r[d]=S}}if(e.transform||(c||o?r.transform=Oj(e,n.transform,o):r.transform&&(r.transform="none")),m){const{originX:d="50%",originY:f="50%",originZ:S=0}=s;r.transformOrigin=`${d} ${f} ${S}`}}const DS=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function wC(n,e,o){for(const r in e)!Ce(e[r])&&!DC(r,o)&&(n[r]=e[r])}function Cj({transformTemplate:n},e){return w.useMemo(()=>{const o=DS();return AS(o,e,n),Object.assign({},o.vars,o.style)},[e])}function Ij(n,e){const o=n.style||{},r={};return wC(r,o,n),Object.assign(r,Cj(n,e)),r}function Kj(n,e){const o={},r=Ij(n,e);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=r,o}const Rj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bj={offset:"strokeDashoffset",array:"strokeDasharray"};function Pj(n,e,o=1,r=0,t=!0){n.pathLength=1;const s=t?Rj:Bj;n[s.offset]=pn.transform(-r);const c=pn.transform(e),m=pn.transform(o);n[s.array]=`${c} ${m}`}function OC(n,{attrX:e,attrY:o,attrScale:r,pathLength:t,pathSpacing:s=1,pathOffset:c=0,...m},d,f,S){if(AS(n,m,f),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:v}=n;p.transform&&(v.transform=p.transform,delete p.transform),(v.transform||p.transformOrigin)&&(v.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),v.transform&&(v.transformBox=(S==null?void 0:S.transformBox)??"fill-box",delete p.transformBox),e!==void 0&&(p.x=e),o!==void 0&&(p.y=o),r!==void 0&&(p.scale=r),t!==void 0&&Pj(p,t,s,c,!1)}const CC=()=>({...DS(),attrs:{}}),IC=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Ej(n,e,o,r){const t=w.useMemo(()=>{const s=CC();return OC(s,e,IC(r),n.transformTemplate,n.style),{...s.attrs,style:{...s.style}}},[e]);if(n.style){const s={};wC(s,n.style,n),t.style={...s,...t.style}}return t}const Nj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wS(n){return typeof n!="string"||n.includes("-")?!1:!!(Nj.indexOf(n)>-1||/[A-Z]/u.test(n))}function Hj(n,e,o,{latestValues:r},t,s=!1){const m=(wS(n)?Ej:Kj)(e,r,t,n),d=bj(e,typeof n=="string",s),f=n!==w.Fragment?{...d,...m,ref:o}:{},{children:S}=e,p=w.useMemo(()=>Ce(S)?S.get():S,[S]);return w.createElement(n,{...f,children:p})}function eT(n){const e=[{},{}];return n==null||n.values.forEach((o,r)=>{e[0][r]=o.get(),e[1][r]=o.getVelocity()}),e}function OS(n,e,o,r){if(typeof e=="function"){const[t,s]=eT(r);e=e(o!==void 0?o:n.custom,t,s)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[t,s]=eT(r);e=e(o!==void 0?o:n.custom,t,s)}return e}function il(n){return Ce(n)?n.get():n}function Gj({scrapeMotionValuesFromProps:n,createRenderState:e},o,r,t){return{latestValues:xj(o,r,t,n),renderState:e()}}function xj(n,e,o,r){const t={},s=r(n,{});for(const v in s)t[v]=il(s[v]);let{initial:c,animate:m}=n;const d=ac(n),f=AC(n);e&&f&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),m===void 0&&(m=e.animate));let S=o?o.initial===!1:!1;S=S||c===!1;const p=S?m:c;if(p&&typeof p!="boolean"&&!tc(p)){const v=Array.isArray(p)?p:[p];for(let T=0;T<v.length;T++){const M=OS(n,v[T]);if(M){const{transitionEnd:C,transition:A,...k}=M;for(const O in k){let D=k[O];if(Array.isArray(D)){const P=S?D.length-1:0;D=D[P]}D!==null&&(t[O]=D)}for(const O in C)t[O]=C[O]}}}return t}const KC=n=>(e,o)=>{const r=w.useContext(ec),t=w.useContext(nS),s=()=>Gj(n,e,r,t);return o?s():KO(s)};function CS(n,e,o){var s;const{style:r}=n,t={};for(const c in r)(Ce(r[c])||e.style&&Ce(e.style[c])||DC(c,n)||((s=o==null?void 0:o.getValue(c))==null?void 0:s.liveStyle)!==void 0)&&(t[c]=r[c]);return t}const Lj=KC({scrapeMotionValuesFromProps:CS,createRenderState:DS});function RC(n,e,o){const r=CS(n,e,o);for(const t in n)if(Ce(n[t])||Ce(e[t])){const s=Ao.indexOf(t)!==-1?"attr"+t.charAt(0).toUpperCase()+t.substring(1):t;r[s]=n[t]}return r}const _j=KC({scrapeMotionValuesFromProps:RC,createRenderState:CC}),jj=Symbol.for("motionComponentSymbol");function ao(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function zj(n,e,o){return w.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),o&&(typeof o=="function"?o(r):ao(o)&&(o.current=r))},[e])}const IS=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$j="framerAppearId",BC="data-"+IS($j),PC=w.createContext({});function Fj(n,e,o,r,t){var C,A;const{visualElement:s}=w.useContext(ec),c=w.useContext(TC),m=w.useContext(nS),d=w.useContext(bC).reducedMotion,f=w.useRef(null);r=r||c.renderer,!f.current&&r&&(f.current=r(n,{visualState:e,parent:s,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:d}));const S=f.current,p=w.useContext(PC);S&&!S.projection&&t&&(S.type==="html"||S.type==="svg")&&Uj(f.current,o,t,p);const v=w.useRef(!1);w.useInsertionEffect(()=>{S&&v.current&&S.update(o,m)});const T=o[BC],M=w.useRef(!!T&&!((C=window.MotionHandoffIsComplete)!=null&&C.call(window,T))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,T)));return RO(()=>{S&&(v.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),M.current&&S.animationState&&S.animationState.animateChanges())}),w.useEffect(()=>{S&&(!M.current&&S.animationState&&S.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,T)}),M.current=!1),S.enteringChildren=void 0)}),S}function Uj(n,e,o,r){const{layoutId:t,layout:s,drag:c,dragConstraints:m,layoutScroll:d,layoutRoot:f,layoutCrossfade:S}=e;n.projection=new o(n.latestValues,e["data-framer-portal-id"]?void 0:EC(n.parent)),n.projection.setOptions({layoutId:t,layout:s,alwaysMeasureLayout:!!c||m&&ao(m),visualElement:n,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:S,layoutScroll:d,layoutRoot:f})}function EC(n){if(n)return n.options.allowProjection!==!1?n.projection:EC(n.parent)}function _d(n,{forwardMotionProps:e=!1}={},o,r){o&&yj(o);const t=wS(n)?_j:Lj;function s(m,d){let f;const S={...w.useContext(bC),...m,layoutId:Vj(m)},{isStatic:p}=S,v=Mj(m),T=t(m,p);if(!p&&Qg){Yj();const M=Wj(S);f=M.MeasureLayout,v.visualElement=Fj(n,T,S,r,M.ProjectionNode)}return $.jsxs(ec.Provider,{value:v,children:[f&&v.visualElement?$.jsx(f,{visualElement:v.visualElement,...S}):null,Hj(n,m,zj(T,v.visualElement,d),T,p,e)]})}s.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=w.forwardRef(s);return c[jj]=n,c}function Vj({layoutId:n}){const e=w.useContext(IO).id;return e&&n!==void 0?e+"-"+n:n}function Yj(n,e){w.useContext(TC).strict}function Wj(n){const{drag:e,layout:o}=yo;if(!e&&!o)return{};const r={...e,...o};return{MeasureLayout:e!=null&&e.isEnabled(n)||o!=null&&o.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Zj(n,e){if(typeof Proxy>"u")return _d;const o=new Map,r=(s,c)=>_d(s,c,n,e),t=(s,c)=>r(s,c);return new Proxy(t,{get:(s,c)=>c==="create"?r:(o.has(c)||o.set(c,_d(c,void 0,n,e)),o.get(c))})}function NC({top:n,left:e,right:o,bottom:r}){return{x:{min:e,max:o},y:{min:n,max:r}}}function Jj({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Xj(n,e){if(!e)return n;const o=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function jd(n){return n===void 0||n===1}function Pm({scale:n,scaleX:e,scaleY:o}){return!jd(n)||!jd(e)||!jd(o)}function ti(n){return Pm(n)||HC(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function HC(n){return tT(n.x)||tT(n.y)}function tT(n){return n&&n!=="0%"}function Rl(n,e,o){const r=n-o,t=e*r;return o+t}function aT(n,e,o,r,t){return t!==void 0&&(n=Rl(n,t,r)),Rl(n,o,r)+e}function Em(n,e=0,o=1,r,t){n.min=aT(n.min,e,o,r,t),n.max=aT(n.max,e,o,r,t)}function GC(n,{x:e,y:o}){Em(n.x,e.translate,e.scale,e.originPoint),Em(n.y,o.translate,o.scale,o.originPoint)}const iT=.999999999999,oT=1.0000000000001;function qj(n,e,o,r=!1){const t=o.length;if(!t)return;e.x=e.y=1;let s,c;for(let m=0;m<t;m++){s=o[m],c=s.projectionDelta;const{visualElement:d}=s.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&oo(n,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,GC(n,c)),r&&ti(s.latestValues)&&oo(n,s.latestValues))}e.x<oT&&e.x>iT&&(e.x=1),e.y<oT&&e.y>iT&&(e.y=1)}function io(n,e){n.min=n.min+e,n.max=n.max+e}function rT(n,e,o,r,t=.5){const s=Jn(n.min,n.max,t);Em(n,e,o,s,r)}function oo(n,e){rT(n.x,e.x,e.scaleX,e.scale,e.originX),rT(n.y,e.y,e.scaleY,e.scale,e.originY)}function xC(n,e){return NC(Xj(n.getBoundingClientRect(),e))}function Qj(n,e,o){const r=xC(n,o),{scroll:t}=e;return t&&(io(r.x,t.offset.x),io(r.y,t.offset.y)),r}const uT=()=>({translate:0,scale:1,origin:0,originPoint:0}),ro=()=>({x:uT(),y:uT()}),sT=()=>({min:0,max:0}),re=()=>({x:sT(),y:sT()}),Nm={current:null},LC={current:!1};function nz(){if(LC.current=!0,!!Qg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Nm.current=n.matches;n.addEventListener("change",e),e()}else Nm.current=!1}const ez=new WeakMap;function tz(n,e,o){for(const r in e){const t=e[r],s=o[r];if(Ce(t))n.addValue(r,t);else if(Ce(s))n.addValue(r,po(t,{owner:n}));else if(s!==t)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(t):c.hasAnimated||c.set(t)}else{const c=n.getStaticValue(r);n.addValue(r,po(c!==void 0?c:t,{owner:n}))}}for(const r in o)e[r]===void 0&&n.removeValue(r);return e}const lT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class az{scrapeMotionValuesFromProps(e,o,r){return{}}constructor({parent:e,props:o,presenceContext:r,reducedMotionConfig:t,blockInitialAnimation:s,visualState:c},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=pS,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Ge.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Wn.render(this.render,!1,!0))};const{latestValues:d,renderState:f}=c;this.latestValues=d,this.baseTarget={...d},this.initialValues=o.initial?{...d}:{},this.renderState=f,this.parent=e,this.props=o,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=t,this.options=m,this.blockInitialAnimation=!!s,this.isControllingVariants=ac(o),this.isVariantNode=AC(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:S,...p}=this.scrapeMotionValuesFromProps(o,{},this);for(const v in p){const T=p[v];d[v]!==void 0&&Ce(T)&&T.set(d[v])}}mount(e){var o;this.current=e,ez.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,t)=>this.bindToMotionValue(t,r)),LC.current||nz(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Nm.current,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ra(this.notifyUpdate),Ra(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const r=this.features[o];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,o){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Do.has(e);r&&this.onBindTransform&&this.onBindTransform();const t=o.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Wn.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,o)),this.valueSubscriptions.set(e,()=>{t(),s&&s(),o.owner&&o.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yo){const o=yo[e];if(!o)continue;const{isEnabled:r,Feature:t}=o;if(!this.features[e]&&t&&r(this.props)&&(this.features[e]=new t(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):re()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,o){this.latestValues[e]=o}update(e,o){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<lT.length;r++){const t=lT[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const s="on"+t,c=e[s];c&&(this.propEventSubscriptions[t]=this.on(t,c))}this.prevMotionValues=tz(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(e),()=>o.variantChildren.delete(e)}addValue(e,o){const r=this.values.get(e);o!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,o),this.values.set(e,o),this.latestValues[e]=o.get())}removeValue(e){this.values.delete(e);const o=this.valueSubscriptions.get(e);o&&(o(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,o){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&o!==void 0&&(r=po(o===null?void 0:o,{owner:this}),this.addValue(e,r)),r}readValue(e,o){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(BO(r)||EO(r))?r=parseFloat(r):!Sj(r)&&Ba.test(o)&&(r=gC(e,o)),this.setBaseTarget(e,Ce(r)?r.get():r)),Ce(r)?r.get():r}setBaseTarget(e,o){this.baseTarget[e]=o}getBaseTarget(e){var s;const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const c=OS(this.props,o,(s=this.presenceContext)==null?void 0:s.custom);c&&(r=c[e])}if(o&&r!==void 0)return r;const t=this.getBaseTargetFromProps(this.props,e);return t!==void 0&&!Ce(t)?t:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,o){return this.events[e]||(this.events[e]=new oS),this.events[e].add(o)}notify(e,...o){this.events[e]&&this.events[e].notify(...o)}scheduleRenderMicrotask(){kS.render(this.render)}}class _C extends az{constructor(){super(...arguments),this.KeyframeResolver=aj}sortInstanceNodePosition(e,o){return e.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(e,o){return e.style?e.style[o]:void 0}removeValueFromRenderState(e,{vars:o,style:r}){delete o[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ce(e)&&(this.childSubscription=e.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function jC(n,{style:e,vars:o},r,t){const s=n.style;let c;for(c in e)s[c]=e[c];t==null||t.applyProjectionStyles(s,r);for(c in o)s.setProperty(c,o[c])}function iz(n){return window.getComputedStyle(n)}class oz extends _C{constructor(){super(...arguments),this.type="html",this.renderInstance=jC}readValueFromInstance(e,o){var r;if(Do.has(o))return(r=this.projection)!=null&&r.isProjecting?wm(o):T_(e,o);{const t=iz(e),s=(sS(o)?t.getPropertyValue(o):t[o])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:o}){return xC(e,o)}build(e,o,r){AS(e,o,r.transformTemplate)}scrapeMotionValuesFromProps(e,o,r){return CS(e,o,r)}}const zC=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function rz(n,e,o,r){jC(n,e,void 0,r);for(const t in e.attrs)n.setAttribute(zC.has(t)?t:IS(t),e.attrs[t])}class uz extends _C{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=re}getBaseTargetFromProps(e,o){return e[o]}readValueFromInstance(e,o){if(Do.has(o)){const r=fC(o);return r&&r.default||0}return o=zC.has(o)?o:IS(o),e.getAttribute(o)}scrapeMotionValuesFromProps(e,o,r){return RC(e,o,r)}build(e,o,r){OC(e,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,o,r,t){rz(e,o,r,t)}mount(e){this.isSVGTag=IC(e.tagName),super.mount(e)}}const sz=(n,e)=>wS(n)?new uz(e):new oz(e,{allowProjection:n!==w.Fragment});function co(n,e,o){const r=n.getProps();return OS(r,e,o!==void 0?o:r.custom,n)}const Hm=n=>Array.isArray(n);function lz(n,e,o){n.hasValue(e)?n.getValue(e).set(o):n.addValue(e,po(o))}function cz(n){return Hm(n)?n[n.length-1]||0:n}function KS(n,e){const o=co(n,e);let{transitionEnd:r={},transition:t={},...s}=o||{};s={...s,...r};for(const c in s){const m=cz(s[c]);lz(n,c,m)}}function hz(n){return!!(Ce(n)&&n.add)}function Gm(n,e){const o=n.getValue("willChange");if(hz(o))return o.add(e);if(!o&&na.WillChange){const r=new na.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function $C(n){return n.props[BC]}const dz=n=>n!==null;function mz(n,{repeat:e,repeatType:o="loop"},r){const t=n.filter(dz),s=e&&o!=="loop"&&e%2===1?0:t.length-1;return t[s]}const fz={type:"spring",stiffness:500,damping:25,restSpeed:10},gz=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Sz={type:"keyframes",duration:.8},pz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yz=(n,{keyframes:e})=>e.length>2?Sz:Do.has(n)?n.startsWith("scale")?gz(e[1]):fz:pz;function vz({when:n,delay:e,delayChildren:o,staggerChildren:r,staggerDirection:t,repeat:s,repeatType:c,repeatDelay:m,from:d,elapsed:f,...S}){return!!Object.keys(S).length}const RS=(n,e,o,r={},t,s)=>c=>{const m=yS(r,n)||{},d=m.delay||r.delay||0;let{elapsed:f=0}=r;f=f-Ot(d);const S={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:e.getVelocity(),...m,delay:-f,onUpdate:v=>{e.set(v),m.onUpdate&&m.onUpdate(v)},onComplete:()=>{c(),m.onComplete&&m.onComplete()},name:n,motionValue:e,element:s?void 0:t};vz(m)||Object.assign(S,yz(n,S)),S.duration&&(S.duration=Ot(S.duration)),S.repeatDelay&&(S.repeatDelay=Ot(S.repeatDelay)),S.from!==void 0&&(S.keyframes[0]=S.from);let p=!1;if((S.type===!1||S.duration===0&&!S.repeatDelay)&&(Rm(S),S.delay===0&&(p=!0)),(na.instantAnimations||na.skipAnimations)&&(p=!0,Rm(S),S.delay=0),S.allowFlatten=!m.type&&!m.ease,p&&!s&&e.get()!==void 0){const v=mz(S.keyframes,m);if(v!==void 0){Wn.update(()=>{S.onUpdate(v),S.onComplete()});return}}return m.isSync?new SS(S):new U_(S)};function kz({protectedKeys:n,needsAnimating:e},o){const r=n.hasOwnProperty(o)&&e[o]!==!0;return e[o]=!1,r}function FC(n,e,{delay:o=0,transitionOverride:r,type:t}={}){let{transition:s=n.getDefaultTransition(),transitionEnd:c,...m}=e;r&&(s=r);const d=[],f=t&&n.animationState&&n.animationState.getState()[t];for(const S in m){const p=n.getValue(S,n.latestValues[S]??null),v=m[S];if(v===void 0||f&&kz(f,S))continue;const T={delay:o,...yS(s||{},S)},M=p.get();if(M!==void 0&&!p.isAnimating&&!Array.isArray(v)&&v===M&&!T.velocity)continue;let C=!1;if(window.MotionHandoffAnimation){const k=$C(n);if(k){const O=window.MotionHandoffAnimation(k,S,Wn);O!==null&&(T.startTime=O,C=!0)}}Gm(n,S),p.start(RS(S,p,v,n.shouldReduceMotion&&hC.has(S)?{type:!1}:T,n,C));const A=p.animation;A&&d.push(A)}return c&&Promise.all(d).then(()=>{Wn.update(()=>{c&&KS(n,c)})}),d}function UC(n,e,o,r=0,t=1){const s=Array.from(n).sort((f,S)=>f.sortNodePosition(S)).indexOf(e),c=n.size,m=(c-1)*r;return typeof o=="function"?o(s,c):t===1?s*r:m-s*r}function xm(n,e,o={}){var d;const r=co(n,e,o.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:t=n.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(t=o.transitionOverride);const s=r?()=>Promise.all(FC(n,r,o)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(f=0)=>{const{delayChildren:S=0,staggerChildren:p,staggerDirection:v}=t;return bz(n,e,f,S,p,v,o)}:()=>Promise.resolve(),{when:m}=t;if(m){const[f,S]=m==="beforeChildren"?[s,c]:[c,s];return f().then(()=>S())}else return Promise.all([s(),c(o.delay)])}function bz(n,e,o=0,r=0,t=0,s=1,c){const m=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),m.push(xm(d,e,{...c,delay:o+(typeof r=="function"?0:r)+UC(n.variantChildren,d,r,t,s)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(m)}function VC(n,e,o={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const t=e.map(s=>xm(n,s,o));r=Promise.all(t)}else if(typeof e=="string")r=xm(n,e,o);else{const t=typeof e=="function"?co(n,e,o.custom):e;r=Promise.all(FC(n,t,o))}return r.then(()=>{n.notify("AnimationComplete",e)})}function YC(n,e){if(!Array.isArray(e))return!1;const o=e.length;if(o!==n.length)return!1;for(let r=0;r<o;r++)if(e[r]!==n[r])return!1;return!0}const Tz=MS.length;function WC(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?WC(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const e={};for(let o=0;o<Tz;o++){const r=MS[o],t=n.props[r];(qr(t)||t===!1)&&(e[r]=t)}return e}const Mz=[...TS].reverse(),Az=TS.length;function Dz(n){return e=>Promise.all(e.map(({animation:o,options:r})=>VC(n,o,r)))}function wz(n){let e=Dz(n),o=cT(),r=!0;const t=d=>(f,S)=>{var v;const p=co(n,S,d==="exit"?(v=n.presenceContext)==null?void 0:v.custom:void 0);if(p){const{transition:T,transitionEnd:M,...C}=p;f={...f,...C,...M}}return f};function s(d){e=d(n)}function c(d){const{props:f}=n,S=WC(n.parent)||{},p=[],v=new Set;let T={},M=1/0;for(let A=0;A<Az;A++){const k=Mz[A],O=o[k],D=f[k]!==void 0?f[k]:S[k],P=qr(D),I=k===d?O.isActive:null;I===!1&&(M=A);let j=D===S[k]&&D!==f[k]&&P;if(j&&r&&n.manuallyAnimateOnMount&&(j=!1),O.protectedKeys={...T},!O.isActive&&I===null||!D&&!O.prevProp||tc(D)||typeof D=="boolean")continue;const z=Oz(O.prevProp,D);let U=z||k===d&&O.isActive&&!j&&P||A>M&&P,tn=!1;const ln=Array.isArray(D)?D:[D];let fn=ln.reduce(t(k),{});I===!1&&(fn={});const{prevResolvedValues:nn={}}=O,yn={...nn,...fn},In=Z=>{U=!0,v.has(Z)&&(tn=!0,v.delete(Z)),O.needsAnimating[Z]=!0;const en=n.getValue(Z);en&&(en.liveStyle=!1)};for(const Z in yn){const en=fn[Z],vn=nn[Z];if(T.hasOwnProperty(Z))continue;let R=!1;Hm(en)&&Hm(vn)?R=!YC(en,vn):R=en!==vn,R?en!=null?In(Z):v.add(Z):en!==void 0&&v.has(Z)?In(Z):O.protectedKeys[Z]=!0}O.prevProp=D,O.prevResolvedValues=fn,O.isActive&&(T={...T,...fn}),r&&n.blockInitialAnimation&&(U=!1);const gn=j&&z;U&&(!gn||tn)&&p.push(...ln.map(Z=>{const en={type:k};if(typeof Z=="string"&&r&&!gn&&n.manuallyAnimateOnMount&&n.parent){const{parent:vn}=n,R=co(vn,Z);if(vn.enteringChildren&&R){const{delayChildren:W}=R.transition||{};en.delay=UC(vn.enteringChildren,n,W)}}return{animation:Z,options:en}}))}if(v.size){const A={};if(typeof f.initial!="boolean"){const k=co(n,Array.isArray(f.initial)?f.initial[0]:f.initial);k&&k.transition&&(A.transition=k.transition)}v.forEach(k=>{const O=n.getBaseTarget(k),D=n.getValue(k);D&&(D.liveStyle=!0),A[k]=O??null}),p.push({animation:A})}let C=!!p.length;return r&&(f.initial===!1||f.initial===f.animate)&&!n.manuallyAnimateOnMount&&(C=!1),r=!1,C?e(p):Promise.resolve()}function m(d,f){var p;if(o[d].isActive===f)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(v=>{var T;return(T=v.animationState)==null?void 0:T.setActive(d,f)}),o[d].isActive=f;const S=c(d);for(const v in o)o[v].protectedKeys={};return S}return{animateChanges:c,setActive:m,setAnimateFunction:s,getState:()=>o,reset:()=>{o=cT(),r=!0}}}function Oz(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!YC(e,n):!1}function ni(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cT(){return{animate:ni(!0),whileInView:ni(),whileHover:ni(),whileTap:ni(),whileDrag:ni(),whileFocus:ni(),exit:ni()}}class Ea{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Cz extends Ea{constructor(e){super(e),e.animationState||(e.animationState=wz(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();tc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:o}=this.node.prevProps||{};e!==o&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Iz=0;class Kz extends Ea{constructor(){super(...arguments),this.id=Iz++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const t=this.node.animationState.setActive("exit",!e);o&&!e&&t.then(()=>{o(this.id)})}mount(){const{register:e,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Rz={animation:{Feature:Cz},exit:{Feature:Kz}};function nu(n,e,o,r={passive:!0}){return n.addEventListener(e,o,r),()=>n.removeEventListener(e,o)}function fu(n){return{point:{x:n.pageX,y:n.pageY}}}const Bz=n=>e=>bS(e)&&n(e,fu(e));function Gr(n,e,o,r){return nu(n,e,Bz(o),r)}const ZC=1e-4,Pz=1-ZC,Ez=1+ZC,JC=.01,Nz=0-JC,Hz=0+JC;function Ke(n){return n.max-n.min}function Gz(n,e,o){return Math.abs(n-e)<=o}function hT(n,e,o,r=.5){n.origin=r,n.originPoint=Jn(e.min,e.max,n.origin),n.scale=Ke(o)/Ke(e),n.translate=Jn(o.min,o.max,n.origin)-n.originPoint,(n.scale>=Pz&&n.scale<=Ez||isNaN(n.scale))&&(n.scale=1),(n.translate>=Nz&&n.translate<=Hz||isNaN(n.translate))&&(n.translate=0)}function xr(n,e,o,r){hT(n.x,e.x,o.x,r?r.originX:void 0),hT(n.y,e.y,o.y,r?r.originY:void 0)}function dT(n,e,o){n.min=o.min+e.min,n.max=n.min+Ke(e)}function xz(n,e,o){dT(n.x,e.x,o.x),dT(n.y,e.y,o.y)}function mT(n,e,o){n.min=e.min-o.min,n.max=n.min+Ke(e)}function Lr(n,e,o){mT(n.x,e.x,o.x),mT(n.y,e.y,o.y)}function ut(n){return[n("x"),n("y")]}const XC=({current:n})=>n?n.ownerDocument.defaultView:null,fT=(n,e)=>Math.abs(n-e);function Lz(n,e){const o=fT(n.x,e.x),r=fT(n.y,e.y);return Math.sqrt(o**2+r**2)}class qC{constructor(e,o,{transformPagePoint:r,contextWindow:t=window,dragSnapToOrigin:s=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=$d(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,M=Lz(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!M)return;const{point:C}=v,{timestamp:A}=Te;this.history.push({...C,timestamp:A});const{onStart:k,onMove:O}=this.handlers;T||(k&&k(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,v)},this.handlePointerMove=(v,T)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=zd(T,this.transformPagePoint),Wn.update(this.updatePoint,!0)},this.handlePointerUp=(v,T)=>{this.end();const{onEnd:M,onSessionEnd:C,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=$d(v.type==="pointercancel"?this.lastMoveEventInfo:zd(T,this.transformPagePoint),this.history);this.startEvent&&M&&M(v,k),C&&C(v,k)},!bS(e))return;this.dragSnapToOrigin=s,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=t||window;const m=fu(e),d=zd(m,this.transformPagePoint),{point:f}=d,{timestamp:S}=Te;this.history=[{...f,timestamp:S}];const{onSessionStart:p}=o;p&&p(e,$d(d,this.history)),this.removeListeners=hu(Gr(this.contextWindow,"pointermove",this.handlePointerMove),Gr(this.contextWindow,"pointerup",this.handlePointerUp),Gr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ra(this.updatePoint)}}function zd(n,e){return e?{point:e(n.point)}:n}function gT(n,e){return{x:n.x-e.x,y:n.y-e.y}}function $d({point:n},e){return{point:n,delta:gT(n,QC(e)),offset:gT(n,_z(e)),velocity:jz(e,.1)}}function _z(n){return n[0]}function QC(n){return n[n.length-1]}function jz(n,e){if(n.length<2)return{x:0,y:0};let o=n.length-1,r=null;const t=QC(n);for(;o>=0&&(r=n[o],!(t.timestamp-r.timestamp>Ot(e)));)o--;if(!r)return{x:0,y:0};const s=Ct(t.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const c={x:(t.x-r.x)/s,y:(t.y-r.y)/s};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function zz(n,{min:e,max:o},r){return e!==void 0&&n<e?n=r?Jn(e,n,r.min):Math.max(n,e):o!==void 0&&n>o&&(n=r?Jn(o,n,r.max):Math.min(n,o)),n}function ST(n,e,o){return{min:e!==void 0?n.min+e:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function $z(n,{top:e,left:o,bottom:r,right:t}){return{x:ST(n.x,o,t),y:ST(n.y,e,r)}}function pT(n,e){let o=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([o,r]=[r,o]),{min:o,max:r}}function Fz(n,e){return{x:pT(n.x,e.x),y:pT(n.y,e.y)}}function Uz(n,e){let o=.5;const r=Ke(n),t=Ke(e);return t>r?o=Zr(e.min,e.max-r,n.min):r>t&&(o=Zr(n.min,n.max-t,e.min)),Qt(0,1,o)}function Vz(n,e){const o={};return e.min!==void 0&&(o.min=e.min-n.min),e.max!==void 0&&(o.max=e.max-n.min),o}const Lm=.35;function Yz(n=Lm){return n===!1?n=0:n===!0&&(n=Lm),{x:yT(n,"left","right"),y:yT(n,"top","bottom")}}function yT(n,e,o){return{min:vT(n,e),max:vT(n,o)}}function vT(n,e){return typeof n=="number"?n:n[e]||0}const Wz=new WeakMap;class Zz{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=re(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:t}=this.visualElement;if(t&&t.isPresent===!1)return;const s=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(fu(p).point)},c=(p,v)=>{const{drag:T,dragPropagation:M,onDragStart:C}=this.getProps();if(T&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=sj(T),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ut(k=>{let O=this.getAxisMotionValue(k).get()||0;if(It.test(O)){const{projection:D}=this.visualElement;if(D&&D.layout){const P=D.layout.layoutBox[k];P&&(O=Ke(P)*(parseFloat(O)/100))}}this.originPoint[k]=O}),C&&Wn.postRender(()=>C(p,v)),Gm(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},m=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v;const{dragPropagation:T,dragDirectionLock:M,onDirectionLock:C,onDrag:A}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:k}=v;if(M&&this.currentDirection===null){this.currentDirection=Jz(k),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",v.point,k),this.updateAxis("y",v.point,k),this.visualElement.render(),A&&A(p,v)},d=(p,v)=>{this.latestPointerEvent=p,this.latestPanInfo=v,this.stop(p,v),this.latestPointerEvent=null,this.latestPanInfo=null},f=()=>ut(p=>{var v;return this.getAnimationState(p)==="paused"&&((v=this.getAxisMotionValue(p).animation)==null?void 0:v.play())}),{dragSnapToOrigin:S}=this.getProps();this.panSession=new qC(e,{onSessionStart:s,onStart:c,onMove:m,onSessionEnd:d,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:S,distanceThreshold:r,contextWindow:XC(this.visualElement)})}stop(e,o){const r=e||this.latestPointerEvent,t=o||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!t||!r)return;const{velocity:c}=t;this.startAnimation(c);const{onDragEnd:m}=this.getProps();m&&Wn.postRender(()=>m(r,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:o}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(e,o,r){const{drag:t}=this.getProps();if(!r||!Ls(e,t,this.currentDirection))return;const s=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=zz(c,this.constraints[e],this.elastic[e])),s.set(c)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,t=this.constraints;e&&ao(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=$z(r.layoutBox,e):this.constraints=!1,this.elastic=Yz(o),t!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ut(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=Vz(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:o}=this.getProps();if(!e||!ao(e))return!1;const r=e.current,{projection:t}=this.visualElement;if(!t||!t.layout)return!1;const s=Qj(r,t.root,this.visualElement.getTransformPagePoint());let c=Fz(t.layout.layoutBox,s);if(o){const m=o(Jj(c));this.hasMutatedConstraints=!!m,m&&(c=NC(m))}return c}startAnimation(e){const{drag:o,dragMomentum:r,dragElastic:t,dragTransition:s,dragSnapToOrigin:c,onDragTransitionEnd:m}=this.getProps(),d=this.constraints||{},f=ut(S=>{if(!Ls(S,o,this.currentDirection))return;let p=d&&d[S]||{};c&&(p={min:0,max:0});const v=t?200:1e6,T=t?40:1e7,M={type:"inertia",velocity:r?e[S]:0,bounceStiffness:v,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(S,M)});return Promise.all(f).then(m)}startAxisValueAnimation(e,o){const r=this.getAxisMotionValue(e);return Gm(this.visualElement,e),r.start(RS(e,r,0,o,this.visualElement,!1))}stopAnimation(){ut(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ut(e=>{var o;return(o=this.getAxisMotionValue(e).animation)==null?void 0:o.pause()})}getAnimationState(e){var o;return(o=this.getAxisMotionValue(e).animation)==null?void 0:o.state}getAxisMotionValue(e){const o=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),t=r[o];return t||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ut(o=>{const{drag:r}=this.getProps();if(!Ls(o,r,this.currentDirection))return;const{projection:t}=this.visualElement,s=this.getAxisMotionValue(o);if(t&&t.layout){const{min:c,max:m}=t.layout.layoutBox[o];s.set(e[o]-Jn(c,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!ao(o)||!r||!this.constraints)return;this.stopAnimation();const t={x:0,y:0};ut(c=>{const m=this.getAxisMotionValue(c);if(m&&this.constraints!==!1){const d=m.get();t[c]=Uz({min:d,max:d},this.constraints[c])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ut(c=>{if(!Ls(c,e,null))return;const m=this.getAxisMotionValue(c),{min:d,max:f}=this.constraints[c];m.set(Jn(d,f,t[c]))})}addListeners(){if(!this.visualElement.current)return;Wz.set(this.visualElement,this);const e=this.visualElement.current,o=Gr(e,"pointerdown",d=>{const{drag:f,dragListener:S=!0}=this.getProps();f&&S&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();ao(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:t}=this.visualElement,s=t.addEventListener("measure",r);t&&!t.layout&&(t.root&&t.root.updateScroll(),t.updateLayout()),Wn.read(r);const c=nu(window,"resize",()=>this.scalePositionWithinConstraints()),m=t.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f})=>{this.isDragging&&f&&(ut(S=>{const p=this.getAxisMotionValue(S);p&&(this.originPoint[S]+=d[S].translate,p.set(p.get()+d[S].translate))}),this.visualElement.render())});return()=>{c(),o(),s(),m&&m()}}getProps(){const e=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:t=!1,dragConstraints:s=!1,dragElastic:c=Lm,dragMomentum:m=!0}=e;return{...e,drag:o,dragDirectionLock:r,dragPropagation:t,dragConstraints:s,dragElastic:c,dragMomentum:m}}}function Ls(n,e,o){return(e===!0||e===n)&&(o===null||o===n)}function Jz(n,e=10){let o=null;return Math.abs(n.y)>e?o="y":Math.abs(n.x)>e&&(o="x"),o}class Xz extends Ea{constructor(e){super(e),this.removeGroupControls=st,this.removeListeners=st,this.controls=new Zz(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||st}unmount(){this.removeGroupControls(),this.removeListeners()}}const kT=n=>(e,o)=>{n&&Wn.postRender(()=>n(e,o))};class qz extends Ea{constructor(){super(...arguments),this.removePointerDownListener=st}onPointerDown(e){this.session=new qC(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:XC(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:o,onPan:r,onPanEnd:t}=this.node.getProps();return{onSessionStart:kT(e),onStart:kT(o),onMove:r,onEnd:(s,c)=>{delete this.session,t&&Wn.postRender(()=>t(s,c))}}}mount(){this.removePointerDownListener=Gr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ol={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function bT(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Kr={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(pn.test(n))n=parseFloat(n);else return n;const o=bT(n,e.target.x),r=bT(n,e.target.y);return`${o}% ${r}%`}},Qz={correct:(n,{treeScale:e,projectionDelta:o})=>{const r=n,t=Ba.parse(n);if(t.length>5)return r;const s=Ba.createTransformer(n),c=typeof t[0]!="number"?1:0,m=o.x.scale*e.x,d=o.y.scale*e.y;t[0+c]/=m,t[1+c]/=d;const f=Jn(m,d,.5);return typeof t[2+c]=="number"&&(t[2+c]/=f),typeof t[3+c]=="number"&&(t[3+c]/=f),s(t)}};let Fd=!1;class n$ extends w.Component{componentDidMount(){const{visualElement:e,layoutGroup:o,switchLayoutGroup:r,layoutId:t}=this.props,{projection:s}=e;Aj(e$),s&&(o.group&&o.group.add(s),r&&r.register&&t&&r.register(s),Fd&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ol.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:o,visualElement:r,drag:t,isPresent:s}=this.props,{projection:c}=r;return c&&(c.isPresent=s,Fd=!0,t||e.layoutDependency!==o||o===void 0||e.isPresent!==s?c.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?c.promote():c.relegate()||Wn.postRender(()=>{const m=c.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),kS.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:t}=e;Fd=!0,t&&(t.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(t),r&&r.deregister&&r.deregister(t))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nI(n){const[e,o]=pj(),r=w.useContext(IO);return $.jsx(n$,{...n,layoutGroup:r,switchLayoutGroup:w.useContext(PC),isPresent:e,safeToRemove:o})}const e$={borderRadius:{...Kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Kr,borderTopRightRadius:Kr,borderBottomLeftRadius:Kr,borderBottomRightRadius:Kr,boxShadow:Qz};function t$(n,e,o){const r=Ce(n)?n:po(n);return r.start(RS("",r,e,o)),r.animation}const a$=(n,e)=>n.depth-e.depth;class i${constructor(){this.children=[],this.isDirty=!1}add(e){eS(this.children,e),this.isDirty=!0}remove(e){tS(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(a$),this.isDirty=!1,this.children.forEach(e)}}function o$(n,e){const o=Ge.now(),r=({timestamp:t})=>{const s=t-o;s>=e&&(Ra(r),n(s-e))};return Wn.setup(r,!0),()=>Ra(r)}const eI=["TopLeft","TopRight","BottomLeft","BottomRight"],r$=eI.length,TT=n=>typeof n=="string"?parseFloat(n):n,MT=n=>typeof n=="number"||pn.test(n);function u$(n,e,o,r,t,s){t?(n.opacity=Jn(0,o.opacity??1,s$(r)),n.opacityExit=Jn(e.opacity??1,0,l$(r))):s&&(n.opacity=Jn(e.opacity??1,o.opacity??1,r));for(let c=0;c<r$;c++){const m=`border${eI[c]}Radius`;let d=AT(e,m),f=AT(o,m);if(d===void 0&&f===void 0)continue;d||(d=0),f||(f=0),d===0||f===0||MT(d)===MT(f)?(n[m]=Math.max(Jn(TT(d),TT(f),r),0),(It.test(f)||It.test(d))&&(n[m]+="%")):n[m]=f}(e.rotate||o.rotate)&&(n.rotate=Jn(e.rotate||0,o.rotate||0,r))}function AT(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const s$=tI(0,.5,zO),l$=tI(.5,.95,st);function tI(n,e,o){return r=>r<n?0:r>e?1:o(Zr(n,e,r))}function DT(n,e){n.min=e.min,n.max=e.max}function rt(n,e){DT(n.x,e.x),DT(n.y,e.y)}function wT(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function OT(n,e,o,r,t){return n-=e,n=Rl(n,1/o,r),t!==void 0&&(n=Rl(n,1/t,r)),n}function c$(n,e=0,o=1,r=.5,t,s=n,c=n){if(It.test(e)&&(e=parseFloat(e),e=Jn(c.min,c.max,e/100)-c.min),typeof e!="number")return;let m=Jn(s.min,s.max,r);n===s&&(m-=e),n.min=OT(n.min,e,o,m,t),n.max=OT(n.max,e,o,m,t)}function CT(n,e,[o,r,t],s,c){c$(n,e[o],e[r],e[t],e.scale,s,c)}const h$=["x","scaleX","originX"],d$=["y","scaleY","originY"];function IT(n,e,o,r){CT(n.x,e,h$,o?o.x:void 0,r?r.x:void 0),CT(n.y,e,d$,o?o.y:void 0,r?r.y:void 0)}function KT(n){return n.translate===0&&n.scale===1}function aI(n){return KT(n.x)&&KT(n.y)}function RT(n,e){return n.min===e.min&&n.max===e.max}function m$(n,e){return RT(n.x,e.x)&&RT(n.y,e.y)}function BT(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function iI(n,e){return BT(n.x,e.x)&&BT(n.y,e.y)}function PT(n){return Ke(n.x)/Ke(n.y)}function ET(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class f${constructor(){this.members=[]}add(e){eS(this.members,e),e.scheduleRender()}remove(e){if(tS(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(e){const o=this.members.findIndex(t=>e===t);if(o===0)return!1;let r;for(let t=o;t>=0;t--){const s=this.members[t];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,o){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,o&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:t}=e.options;t===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:o,resumingFrom:r}=e;o.onExitComplete&&o.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function g$(n,e,o){let r="";const t=n.x.translate/e.x,s=n.y.translate/e.y,c=(o==null?void 0:o.z)||0;if((t||s||c)&&(r=`translate3d(${t}px, ${s}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),o){const{transformPerspective:f,rotate:S,rotateX:p,rotateY:v,skewX:T,skewY:M}=o;f&&(r=`perspective(${f}px) ${r}`),S&&(r+=`rotate(${S}deg) `),p&&(r+=`rotateX(${p}deg) `),v&&(r+=`rotateY(${v}deg) `),T&&(r+=`skewX(${T}deg) `),M&&(r+=`skewY(${M}deg) `)}const m=n.x.scale*e.x,d=n.y.scale*e.y;return(m!==1||d!==1)&&(r+=`scale(${m}, ${d})`),r||"none"}const Ud=["","X","Y","Z"],S$=1e3;let p$=0;function Vd(n,e,o,r){const{latestValues:t}=e;t[n]&&(o[n]=t[n],e.setStaticValue(n,0),r&&(r[n]=0))}function oI(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const o=$C(e);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:t,layoutId:s}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Wn,!(t||s))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&oI(r)}function rI({attachResizeListener:n,defaultParent:e,measureScroll:o,checkIsScrollRoot:r,resetTransform:t}){return class{constructor(c={},m=e==null?void 0:e()){this.id=p$++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(k$),this.nodes.forEach(A$),this.nodes.forEach(D$),this.nodes.forEach(b$)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new i$)}addEventListener(c,m){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new oS),this.eventHandlers.get(c).add(m)}notifyListeners(c,...m){const d=this.eventHandlers.get(c);d&&d.notify(...m)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=kC(c)&&!fj(c),this.instance=c;const{layoutId:m,layout:d,visualElement:f}=this.options;if(f&&!f.current&&f.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||m)&&(this.isLayoutDirty=!0),n){let S,p=0;const v=()=>this.root.updateBlockedByResize=!1;Wn.read(()=>{p=window.innerWidth}),n(c,()=>{const T=window.innerWidth;T!==p&&(p=T,this.root.updateBlockedByResize=!0,S&&S(),S=o$(v,250),ol.hasAnimatedSinceResize&&(ol.hasAnimatedSinceResize=!1,this.nodes.forEach(GT)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&f&&(m||d)&&this.addEventListener("didUpdate",({delta:S,hasLayoutChanged:p,hasRelativeLayoutChanged:v,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||f.getDefaultTransition()||K$,{onLayoutAnimationStart:C,onLayoutAnimationComplete:A}=f.getProps(),k=!this.targetLayout||!iI(this.targetLayout,T),O=!p&&v;if(this.options.layoutRoot||this.resumeFrom||O||p&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...yS(M,"layout"),onPlay:C,onComplete:A};(f.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(S,O)}else p||GT(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ra(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(w$),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&oI(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let S=0;S<this.path.length;S++){const p=this.path[S];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:m,layout:d}=this.options;if(m===void 0&&!d)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(NT);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(HT);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(M$),this.nodes.forEach(y$),this.nodes.forEach(v$)):this.nodes.forEach(HT),this.clearAllSnapshots();const m=Ge.now();Te.delta=Qt(0,1e3/60,m-Te.timestamp),Te.timestamp=m,Te.isProcessing=!0,Ed.update.process(Te),Ed.preRender.process(Te),Ed.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(T$),this.sharedNodes.forEach(O$)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Wn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Wn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ke(this.snapshot.measuredBox.x)&&!Ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(m=!1),m&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!t)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!aI(this.projectionDelta),d=this.getTransformTemplate(),f=d?d(this.latestValues,""):void 0,S=f!==this.prevTransformTemplateValue;c&&this.instance&&(m||ti(this.latestValues)||S)&&(t(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const m=this.measurePageBox();let d=this.removeElementScroll(m);return c&&(d=this.removeTransform(d)),R$(d),{animationId:this.root.animationId,measuredBox:m,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:c}=this.options;if(!c)return re();const m=c.measureViewportBox();if(!(((f=this.scroll)==null?void 0:f.wasRoot)||this.path.some(B$))){const{scroll:S}=this.root;S&&(io(m.x,S.offset.x),io(m.y,S.offset.y))}return m}removeElementScroll(c){var d;const m=re();if(rt(m,c),(d=this.scroll)!=null&&d.wasRoot)return m;for(let f=0;f<this.path.length;f++){const S=this.path[f],{scroll:p,options:v}=S;S!==this.root&&p&&v.layoutScroll&&(p.wasRoot&&rt(m,c),io(m.x,p.offset.x),io(m.y,p.offset.y))}return m}applyTransform(c,m=!1){const d=re();rt(d,c);for(let f=0;f<this.path.length;f++){const S=this.path[f];!m&&S.options.layoutScroll&&S.scroll&&S!==S.root&&oo(d,{x:-S.scroll.offset.x,y:-S.scroll.offset.y}),ti(S.latestValues)&&oo(d,S.latestValues)}return ti(this.latestValues)&&oo(d,this.latestValues),d}removeTransform(c){const m=re();rt(m,c);for(let d=0;d<this.path.length;d++){const f=this.path[d];if(!f.instance||!ti(f.latestValues))continue;Pm(f.latestValues)&&f.updateSnapshot();const S=re(),p=f.measurePageBox();rt(S,p),IT(m,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,S)}return ti(this.latestValues)&&IT(m,this.latestValues),m}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var v;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==m;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:S,layoutId:p}=this.options;if(!(!this.layout||!(S||p))){if(this.resolvedRelativeTargetAt=Te.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),Lr(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=re(),this.targetWithTransforms=re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xz(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),GC(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),Lr(this.relativeTargetOrigin,this.target,T.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Pm(this.parent.latestValues)||HC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var M;const c=this.getLead(),m=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(d=!1),d)return;const{layout:f,layoutId:S}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||S))return;rt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;qj(this.layoutCorrected,this.treeScale,this.path,m),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=re());const{target:T}=c;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wT(this.prevProjectionDelta.x,this.projectionDelta.x),wT(this.prevProjectionDelta.y,this.projectionDelta.y)),xr(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!ET(this.projectionDelta.x,this.prevProjectionDelta.x)||!ET(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ro(),this.projectionDelta=ro(),this.projectionDeltaWithTransform=ro()}setAnimationOrigin(c,m=!1){const d=this.snapshot,f=d?d.latestValues:{},S={...this.latestValues},p=ro();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const v=re(),T=d?d.source:void 0,M=this.layout?this.layout.source:void 0,C=T!==M,A=this.getStack(),k=!A||A.members.length<=1,O=!!(C&&!k&&this.options.crossfade===!0&&!this.path.some(I$));this.animationProgress=0;let D;this.mixTargetDelta=P=>{const I=P/1e3;xT(p.x,c.x,I),xT(p.y,c.y,I),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lr(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),C$(this.relativeTarget,this.relativeTargetOrigin,v,I),D&&m$(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=re()),rt(D,this.relativeTarget)),C&&(this.animationValues=S,u$(S,f,this.latestValues,I,O,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var m,d,f;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(f=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||f.stop(),this.pendingAnimation&&(Ra(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Wn.update(()=>{ol.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=po(0)),this.currentAnimation=t$(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:S=>{this.mixTargetDelta(S),c.onUpdate&&c.onUpdate(S)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(S$),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:m,target:d,layout:f,latestValues:S}=c;if(!(!m||!d||!f)){if(this!==c&&this.layout&&f&&uI(this.options.animationType,this.layout.layoutBox,f.layoutBox)){d=this.target||re();const p=Ke(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+p;const v=Ke(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+v}rt(m,d),oo(m,S),xr(this.projectionDeltaWithTransform,this.layoutCorrected,m,S)}}registerSharedNode(c,m){this.sharedNodes.has(c)||this.sharedNodes.set(c,new f$),this.sharedNodes.get(c).add(m);const f=m.options.initialPromotionConfig;m.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(m):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var m;const{layoutId:c}=this.options;return c?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:c}=this.options;return c?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:m,preserveFollowOpacity:d}={}){const f=this.getStack();f&&f.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let m=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(m=!0),!m)return;const f={};d.z&&Vd("z",c,f,this.animationValues);for(let S=0;S<Ud.length;S++)Vd(`rotate${Ud[S]}`,c,f,this.animationValues),Vd(`skew${Ud[S]}`,c,f,this.animationValues);c.render();for(const S in f)c.setStaticValue(S,f[S]),this.animationValues&&(this.animationValues[S]=f[S]);c.scheduleRender()}applyProjectionStyles(c,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=il(m==null?void 0:m.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=il(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!ti(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const S=f.animationValues||f.latestValues;this.applyTransformsToTarget();let p=g$(this.projectionDeltaWithTransform,this.treeScale,S);d&&(p=d(S,p)),c.transform=p;const{x:v,y:T}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${T.origin*100}% 0`,f.animationValues?c.opacity=f===this?S.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:S.opacityExit:c.opacity=f===this?S.opacity!==void 0?S.opacity:"":S.opacityExit!==void 0?S.opacityExit:0;for(const M in Qr){if(S[M]===void 0)continue;const{correct:C,applyTo:A,isCSSVariable:k}=Qr[M],O=p==="none"?S[M]:C(S[M],f);if(A){const D=A.length;for(let P=0;P<D;P++)c[A[P]]=O}else k?this.options.visualElement.renderState.vars[M]=O:c[M]=O}this.options.layoutId&&(c.pointerEvents=f===this?il(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var m;return(m=c.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(NT),this.root.sharedNodes.clear()}}}function y$(n){n.updateLayout()}function v$(n){var o;const e=((o=n.resumeFrom)==null?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:t}=n.layout,{animationType:s}=n.options,c=e.source!==n.layout.source;s==="size"?ut(p=>{const v=c?e.measuredBox[p]:e.layoutBox[p],T=Ke(v);v.min=r[p].min,v.max=v.min+T}):uI(s,e.layoutBox,r)&&ut(p=>{const v=c?e.measuredBox[p]:e.layoutBox[p],T=Ke(r[p]);v.max=v.min+T,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+T)});const m=ro();xr(m,r,e.layoutBox);const d=ro();c?xr(d,n.applyTransform(t,!0),e.measuredBox):xr(d,r,e.layoutBox);const f=!aI(m);let S=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:v,layout:T}=p;if(v&&T){const M=re();Lr(M,e.layoutBox,v.layoutBox);const C=re();Lr(C,r,T.layoutBox),iI(M,C)||(S=!0),p.options.layoutRoot&&(n.relativeTarget=C,n.relativeTargetOrigin=M,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:m,hasLayoutChanged:f,hasRelativeLayoutChanged:S})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function k$(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function b$(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function T$(n){n.clearSnapshot()}function NT(n){n.clearMeasurements()}function HT(n){n.isLayoutDirty=!1}function M$(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function GT(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function A$(n){n.resolveTargetDelta()}function D$(n){n.calcProjection()}function w$(n){n.resetSkewAndRotation()}function O$(n){n.removeLeadSnapshot()}function xT(n,e,o){n.translate=Jn(e.translate,0,o),n.scale=Jn(e.scale,1,o),n.origin=e.origin,n.originPoint=e.originPoint}function LT(n,e,o,r){n.min=Jn(e.min,o.min,r),n.max=Jn(e.max,o.max,r)}function C$(n,e,o,r){LT(n.x,e.x,o.x,r),LT(n.y,e.y,o.y,r)}function I$(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const K$={duration:.45,ease:[.4,0,.1,1]},_T=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),jT=_T("applewebkit/")&&!_T("chrome/")?Math.round:st;function zT(n){n.min=jT(n.min),n.max=jT(n.max)}function R$(n){zT(n.x),zT(n.y)}function uI(n,e,o){return n==="position"||n==="preserve-aspect"&&!Gz(PT(e),PT(o),.2)}function B$(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const P$=rI({attachResizeListener:(n,e)=>nu(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yd={current:void 0},sI=rI({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Yd.current){const n=new P$({});n.mount(window),n.setOptions({layoutScroll:!0}),Yd.current=n}return Yd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),E$={pan:{Feature:qz},drag:{Feature:Xz,ProjectionNode:sI,MeasureLayout:nI}};function $T(n,e,o){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",o==="Start");const t="onHover"+o,s=r[t];s&&Wn.postRender(()=>s(e,fu(e)))}class N$ extends Ea{mount(){const{current:e}=this.node;e&&(this.unmount=lj(e,(o,r)=>($T(this.node,r,"Start"),t=>$T(this.node,t,"End"))))}unmount(){}}class H$ extends Ea{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hu(nu(this.node.current,"focus",()=>this.onFocus()),nu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function FT(n,e,o){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",o==="Start");const t="onTap"+(o==="End"?"":o),s=r[t];s&&Wn.postRender(()=>s(e,fu(e)))}class G$ extends Ea{mount(){const{current:e}=this.node;e&&(this.unmount=mj(e,(o,r)=>(FT(this.node,r,"Start"),(t,{success:s})=>FT(this.node,t,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const _m=new WeakMap,Wd=new WeakMap,x$=n=>{const e=_m.get(n.target);e&&e(n)},L$=n=>{n.forEach(x$)};function _$({root:n,...e}){const o=n||document;Wd.has(o)||Wd.set(o,{});const r=Wd.get(o),t=JSON.stringify(e);return r[t]||(r[t]=new IntersectionObserver(L$,{root:n,...e})),r[t]}function j$(n,e,o){const r=_$(e);return _m.set(n,o),r.observe(n),()=>{_m.delete(n),r.unobserve(n)}}const z$={some:0,all:1};class $$ extends Ea{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:o,margin:r,amount:t="some",once:s}=e,c={root:o?o.current:void 0,rootMargin:r,threshold:typeof t=="number"?t:z$[t]},m=d=>{const{isIntersecting:f}=d;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:S,onViewportLeave:p}=this.node.getProps(),v=f?S:p;v&&v(d)};return j$(this.node.current,c,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:o}=this.node;["amount","margin","root"].some(F$(e,o))&&this.startObserver()}unmount(){}}function F$({viewport:n={}},{viewport:e={}}={}){return o=>n[o]!==e[o]}const U$={inView:{Feature:$$},tap:{Feature:G$},focus:{Feature:H$},hover:{Feature:N$}},V$={layout:{ProjectionNode:sI,MeasureLayout:nI}},Y$={...Rz,...U$,...E$,...V$},_s=Zj(Y$,sz);function W$(n){n.values.forEach(e=>e.stop())}function jm(n,e){[...e].reverse().forEach(r=>{const t=n.getVariant(r);t&&KS(n,t),n.variantChildren&&n.variantChildren.forEach(s=>{jm(s,e)})})}function Z$(n,e){if(Array.isArray(e))return jm(n,e);if(typeof e=="string")return jm(n,[e]);KS(n,e)}function J$(){const n=new Set,e={subscribe(o){return n.add(o),()=>void n.delete(o)},start(o,r){const t=[];return n.forEach(s=>{t.push(VC(s,o,{transitionOverride:r}))}),Promise.all(t)},set(o){return n.forEach(r=>{Z$(r,o)})},stop(){n.forEach(o=>{W$(o)})},mount(){return()=>{e.stop()}}};return e}function X$(){const n=KO(J$);return RO(n.mount,[]),n}const UT=X$;function q$(){const n=UT(),e=UT(),[o,r]=w.useState(null),{saveGuessStates:t,loadGuessStates:s}=qg(),{FileInput:c,openPicker:m}=yL(d=>{d?(s(d),r({type:"Success",msg:"File loaded!"})):r({type:"Error",msg:"Invalid JSON"})});return $.jsxs($.Fragment,{children:[c," ",$.jsxs("div",{className:"SaveLoad flex gap-4",children:[$.jsxs(_s.button,{onHoverStart:()=>n.start({x:0,transition:{duration:.15}}),onHoverEnd:()=>n.start({x:"-100%",transition:{duration:.5}}),className:"SaveButton relative overflow-hidden bg-gray-500 text-white px-4 py-2 rounded",onClick:t,children:[$.jsx(_s.div,{className:"absolute top-0 left-0 h-full w-full bg-[var(--primary-color)] rounded z-0",animate:n,initial:{x:"-100%",transition:{duration:.15}}}),$.jsx("span",{className:"relative z-10",children:"Save Progress"})]}),$.jsxs(_s.button,{onHoverStart:()=>e.start({x:0,transition:{duration:.15}}),onHoverEnd:()=>e.start({x:"100%",transition:{duration:.5}}),className:"LoadButton relative overflow-hidden bg-gray-500 text-white px-4 py-2 rounded",onClick:m,children:[$.jsx(_s.div,{className:"absolute top-0 left-0 h-full w-full bg-green-500 rounded z-0",animate:e,initial:{x:"100%",transition:{duration:.15}}}),$.jsx("span",{className:"relative z-10",children:"Load Progress"})]}),o&&$.jsx(vL,{type:o.type,message:o.msg,onDone:()=>r(null)})]})]})}function Q$(){const{mode:n}=iu();return n==="Opening"?$.jsx("div",{className:"MainFilter",children:$.jsxs("div",{className:"MainContent",children:[$.jsx(g1,{}),$.jsx(pL,{}),$.jsx(q$,{})]})}):$.jsx("div",{children:"Under Construction"})}var Zd={exports:{}},Jd,VT;function nF(){if(VT)return Jd;VT=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Jd=n,Jd}var Xd,YT;function eF(){if(YT)return Xd;YT=1;var n=nF();function e(){}function o(){}return o.resetWarningCache=e,Xd=function(){function r(c,m,d,f,S,p){if(p!==n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function t(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:t,element:r,elementType:r,instanceOf:t,node:r,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:e};return s.PropTypes=s,s},Xd}var WT;function tF(){return WT||(WT=1,Zd.exports=eF()()),Zd.exports}var aF=tF();const be=Bl(aF);var qd,ZT;function iF(){return ZT||(ZT=1,qd=function n(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var r,t,s;if(Array.isArray(e)){if(r=e.length,r!=o.length)return!1;for(t=r;t--!==0;)if(!n(e[t],o[t]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(o).length)return!1;for(t=r;t--!==0;)if(!Object.prototype.hasOwnProperty.call(o,s[t]))return!1;for(t=r;t--!==0;){var c=s[t];if(!n(e[c],o[c]))return!1}return!0}return e!==e&&o!==o}),qd}var oF=iF();const rF=Bl(oF);var js={exports:{}},Qd,JT;function uF(){if(JT)return Qd;JT=1;var n;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return n=function(){var e={},o={};return e.on=function(r,t){var s={name:r,handler:t};return o[r]=o[r]||[],o[r].unshift(s),s},e.off=function(r){var t=o[r.name].indexOf(r);t!==-1&&o[r.name].splice(t,1)},e.trigger=function(r,t){var s=o[r],c;if(s)for(c=s.length;c--;)s[c].handler(t)},e},Qd=n,Qd}var zs={exports:{}},nm,XT;function sF(){if(XT)return nm;XT=1,nm=function(t,s,c){var m=document.head||document.getElementsByTagName("head")[0],d=document.createElement("script");typeof s=="function"&&(c=s,s={}),s=s||{},c=c||function(){},d.type=s.type||"text/javascript",d.charset=s.charset||"utf8",d.async="async"in s?!!s.async:!0,d.src=t,s.attrs&&n(d,s.attrs),s.text&&(d.text=""+s.text);var f="onload"in d?e:o;f(d,c),d.onload||e(d,c),m.appendChild(d)};function n(r,t){for(var s in t)r.setAttribute(s,t[s])}function e(r,t){r.onload=function(){this.onerror=this.onload=null,t(null,r)},r.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),r)}}function o(r,t){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,r))}}return nm}var qT;function lF(){return qT||(qT=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=sF(),r=t(o);function t(s){return s&&s.__esModule?s:{default:s}}e.default=function(s){var c=new Promise(function(m){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){m(window.YT);return}else{var d=window.location.protocol==="http:"?"http:":"https:";(0,r.default)(d+"//www.youtube.com/iframe_api",function(S){S&&s.trigger("error",S)})}var f=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){f&&f(),m(window.YT)}});return c},n.exports=e.default}(zs,zs.exports)),zs.exports}var $s={exports:{}},Fs={exports:{}},Us={exports:{}},em,QT;function cF(){if(QT)return em;QT=1;var n=1e3,e=n*60,o=e*60,r=o*24,t=r*365.25;em=function(f,S){S=S||{};var p=typeof f;if(p==="string"&&f.length>0)return s(f);if(p==="number"&&isNaN(f)===!1)return S.long?m(f):c(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function s(f){if(f=String(f),!(f.length>100)){var S=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(f);if(S){var p=parseFloat(S[1]),v=(S[2]||"ms").toLowerCase();switch(v){case"years":case"year":case"yrs":case"yr":case"y":return p*t;case"days":case"day":case"d":return p*r;case"hours":case"hour":case"hrs":case"hr":case"h":return p*o;case"minutes":case"minute":case"mins":case"min":case"m":return p*e;case"seconds":case"second":case"secs":case"sec":case"s":return p*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return p;default:return}}}}function c(f){return f>=r?Math.round(f/r)+"d":f>=o?Math.round(f/o)+"h":f>=e?Math.round(f/e)+"m":f>=n?Math.round(f/n)+"s":f+"ms"}function m(f){return d(f,r,"day")||d(f,o,"hour")||d(f,e,"minute")||d(f,n,"second")||f+" ms"}function d(f,S,p){if(!(f<S))return f<S*1.5?Math.floor(f/S)+" "+p:Math.ceil(f/S)+" "+p+"s"}return em}var nM;function hF(){return nM||(nM=1,function(n,e){e=n.exports=t.debug=t.default=t,e.coerce=d,e.disable=c,e.enable=s,e.enabled=m,e.humanize=cF(),e.names=[],e.skips=[],e.formatters={};var o;function r(f){var S=0,p;for(p in f)S=(S<<5)-S+f.charCodeAt(p),S|=0;return e.colors[Math.abs(S)%e.colors.length]}function t(f){function S(){if(S.enabled){var p=S,v=+new Date,T=v-(o||v);p.diff=T,p.prev=o,p.curr=v,o=v;for(var M=new Array(arguments.length),C=0;C<M.length;C++)M[C]=arguments[C];M[0]=e.coerce(M[0]),typeof M[0]!="string"&&M.unshift("%O");var A=0;M[0]=M[0].replace(/%([a-zA-Z%])/g,function(O,D){if(O==="%%")return O;A++;var P=e.formatters[D];if(typeof P=="function"){var I=M[A];O=P.call(p,I),M.splice(A,1),A--}return O}),e.formatArgs.call(p,M);var k=S.log||e.log||console.log.bind(console);k.apply(p,M)}}return S.namespace=f,S.enabled=e.enabled(f),S.useColors=e.useColors(),S.color=r(f),typeof e.init=="function"&&e.init(S),S}function s(f){e.save(f),e.names=[],e.skips=[];for(var S=(typeof f=="string"?f:"").split(/[\s,]+/),p=S.length,v=0;v<p;v++)S[v]&&(f=S[v].replace(/\*/g,".*?"),f[0]==="-"?e.skips.push(new RegExp("^"+f.substr(1)+"$")):e.names.push(new RegExp("^"+f+"$")))}function c(){e.enable("")}function m(f){var S,p;for(S=0,p=e.skips.length;S<p;S++)if(e.skips[S].test(f))return!1;for(S=0,p=e.names.length;S<p;S++)if(e.names[S].test(f))return!0;return!1}function d(f){return f instanceof Error?f.stack||f.message:f}}(Us,Us.exports)),Us.exports}var eM;function dF(){return eM||(eM=1,function(n,e){var o={};e=n.exports=hF(),e.log=s,e.formatArgs=t,e.save=c,e.load=m,e.useColors=r,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:d(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(f){try{return JSON.stringify(f)}catch(S){return"[UnexpectedJSONParseError]: "+S.message}};function t(f){var S=this.useColors;if(f[0]=(S?"%c":"")+this.namespace+(S?" %c":" ")+f[0]+(S?"%c ":" ")+"+"+e.humanize(this.diff),!!S){var p="color: "+this.color;f.splice(1,0,p,"color: inherit");var v=0,T=0;f[0].replace(/%[a-zA-Z%]/g,function(M){M!=="%%"&&(v++,M==="%c"&&(T=v))}),f.splice(T,0,p)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(f){try{f==null?e.storage.removeItem("debug"):e.storage.debug=f}catch{}}function m(){var f;try{f=e.storage.debug}catch{}return!f&&typeof process<"u"&&"env"in process&&(f=o.DEBUG),f}e.enable(m());function d(){try{return window.localStorage}catch{}}}(Fs,Fs.exports)),Fs.exports}var Vs={exports:{}},tM;function mF(){return tM||(tM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],n.exports=e.default}(Vs,Vs.exports)),Vs.exports}var Ys={exports:{}},aM;function fF(){return aM||(aM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],n.exports=e.default}(Ys,Ys.exports)),Ys.exports}var Ws={exports:{}},Zs={exports:{}},iM;function gF(){return iM||(iM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},n.exports=e.default}(Zs,Zs.exports)),Zs.exports}var oM;function SF(){return oM||(oM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=gF(),r=t(o);function t(s){return s&&s.__esModule?s:{default:s}}e.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},n.exports=e.default}(Ws,Ws.exports)),Ws.exports}var rM;function pF(){return rM||(rM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=dF(),r=S(o),t=mF(),s=S(t),c=fF(),m=S(c),d=SF(),f=S(d);function S(T){return T&&T.__esModule?T:{default:T}}var p=(0,r.default)("youtube-player"),v={};v.proxyEvents=function(T){var M={},C=function(z){var U="on"+z.slice(0,1).toUpperCase()+z.slice(1);M[U]=function(tn){p('event "%s"',U,tn),T.trigger(z,tn)}},A=!0,k=!1,O=void 0;try{for(var D=m.default[Symbol.iterator](),P;!(A=(P=D.next()).done);A=!0){var I=P.value;C(I)}}catch(j){k=!0,O=j}finally{try{!A&&D.return&&D.return()}finally{if(k)throw O}}return M},v.promisifyPlayer=function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C={},A=function(U){M&&f.default[U]?C[U]=function(){for(var tn=arguments.length,ln=Array(tn),fn=0;fn<tn;fn++)ln[fn]=arguments[fn];return T.then(function(nn){var yn=f.default[U],In=nn.getPlayerState(),gn=nn[U].apply(nn,ln);return yn.stateChangeRequired||Array.isArray(yn.acceptableStates)&&yn.acceptableStates.indexOf(In)===-1?new Promise(function(L){var Z=function en(){var vn=nn.getPlayerState(),R=void 0;typeof yn.timeout=="number"&&(R=setTimeout(function(){nn.removeEventListener("onStateChange",en),L()},yn.timeout)),Array.isArray(yn.acceptableStates)&&yn.acceptableStates.indexOf(vn)!==-1&&(nn.removeEventListener("onStateChange",en),clearTimeout(R),L())};nn.addEventListener("onStateChange",Z)}).then(function(){return gn}):gn})}:C[U]=function(){for(var tn=arguments.length,ln=Array(tn),fn=0;fn<tn;fn++)ln[fn]=arguments[fn];return T.then(function(nn){return nn[U].apply(nn,ln)})}},k=!0,O=!1,D=void 0;try{for(var P=s.default[Symbol.iterator](),I;!(k=(I=P.next()).done);k=!0){var j=I.value;A(j)}}catch(z){O=!0,D=z}finally{try{!k&&P.return&&P.return()}finally{if(O)throw D}}return C},e.default=v,n.exports=e.default}($s,$s.exports)),$s.exports}var uM;function yF(){return uM||(uM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},r=uF(),t=f(r),s=lF(),c=f(s),m=pF(),d=f(m);function f(p){return p&&p.__esModule?p:{default:p}}var S=void 0;e.default=function(p){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,M=(0,t.default)();if(S||(S=(0,c.default)(M)),v.events)throw new Error("Event handlers cannot be overwritten.");if(typeof p=="string"&&!document.getElementById(p))throw new Error('Element "'+p+'" does not exist.');v.events=d.default.proxyEvents(M);var C=new Promise(function(k){if((typeof p>"u"?"undefined":o(p))==="object"&&p.playVideo instanceof Function){var O=p;k(O)}else S.then(function(D){var P=new D.Player(p,v);return M.on("ready",function(){k(P)}),null})}),A=d.default.promisifyPlayer(C,T);return A.on=M.on,A.off=M.off,A},n.exports=e.default}(js,js.exports)),js.exports}var vF=yF();const kF=Bl(vF);var bF=Object.defineProperty,TF=Object.defineProperties,MF=Object.getOwnPropertyDescriptors,sM=Object.getOwnPropertySymbols,AF=Object.prototype.hasOwnProperty,DF=Object.prototype.propertyIsEnumerable,lM=(n,e,o)=>e in n?bF(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,zm=(n,e)=>{for(var o in e||(e={}))AF.call(e,o)&&lM(n,o,e[o]);if(sM)for(var o of sM(e))DF.call(e,o)&&lM(n,o,e[o]);return n},$m=(n,e)=>TF(n,MF(e)),wF=(n,e,o)=>new Promise((r,t)=>{var s=d=>{try{m(o.next(d))}catch(f){t(f)}},c=d=>{try{m(o.throw(d))}catch(f){t(f)}},m=d=>d.done?r(d.value):Promise.resolve(d.value).then(s,c);m((o=o.apply(n,e)).next())});function OF(n,e){var o,r;if(n.videoId!==e.videoId)return!0;const t=((o=n.opts)==null?void 0:o.playerVars)||{},s=((r=e.opts)==null?void 0:r.playerVars)||{};return t.start!==s.start||t.end!==s.end}function cM(n={}){return $m(zm({},n),{height:0,width:0,playerVars:$m(zm({},n.playerVars),{autoplay:0,start:0,end:0})})}function CF(n,e){return n.videoId!==e.videoId||!rF(cM(n.opts),cM(e.opts))}function IF(n,e){var o,r,t,s;return n.id!==e.id||n.className!==e.className||((o=n.opts)==null?void 0:o.width)!==((r=e.opts)==null?void 0:r.width)||((t=n.opts)==null?void 0:t.height)!==((s=e.opts)==null?void 0:s.height)||n.iframeClassName!==e.iframeClassName||n.title!==e.title}var KF={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},RF={videoId:be.string,id:be.string,className:be.string,iframeClassName:be.string,style:be.object,title:be.string,loading:be.oneOf(["lazy","eager"]),opts:be.objectOf(be.any),onReady:be.func,onError:be.func,onPlay:be.func,onPause:be.func,onEnd:be.func,onStateChange:be.func,onPlaybackRateChange:be.func,onPlaybackQualityChange:be.func},rl=class extends uo.Component{constructor(n){super(n),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var o,r;return(r=(o=this.props).onReady)==null?void 0:r.call(o,e)},this.onPlayerError=e=>{var o,r;return(r=(o=this.props).onError)==null?void 0:r.call(o,e)},this.onPlayerStateChange=e=>{var o,r,t,s,c,m,d,f;switch((r=(o=this.props).onStateChange)==null||r.call(o,e),e.data){case rl.PlayerState.ENDED:(s=(t=this.props).onEnd)==null||s.call(t,e);break;case rl.PlayerState.PLAYING:(m=(c=this.props).onPlay)==null||m.call(c,e);break;case rl.PlayerState.PAUSED:(f=(d=this.props).onPause)==null||f.call(d,e);break}},this.onPlayerPlaybackRateChange=e=>{var o,r;return(r=(o=this.props).onPlaybackRateChange)==null?void 0:r.call(o,e)},this.onPlayerPlaybackQualityChange=e=>{var o,r;return(r=(o=this.props).onPlaybackQualityChange)==null?void 0:r.call(o,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=$m(zm({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=kF(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(o=>{this.props.title&&o.setAttribute("title",this.props.title),this.props.loading&&o.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(o=>{this.props.id?o.setAttribute("id",this.props.id):o.removeAttribute("id"),this.props.iframeClassName?o.setAttribute("class",this.props.iframeClassName):o.removeAttribute("class"),this.props.opts&&this.props.opts.width?o.setAttribute("width",this.props.opts.width.toString()):o.removeAttribute("width"),this.props.opts&&this.props.opts.height?o.setAttribute("height",this.props.opts.height.toString()):o.removeAttribute("height"),this.props.title?o.setAttribute("title",this.props.title):o.setAttribute("title","YouTube video player"),this.props.loading?o.setAttribute("loading",this.props.loading):o.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,o,r,t;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let s=!1;const c={videoId:this.props.videoId};if((o=this.props.opts)!=null&&o.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),s){(r=this.internalPlayer)==null||r.loadVideoById(c);return}(t=this.internalPlayer)==null||t.cueVideoById(c)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(n){return wF(this,null,function*(){IF(n,this.props)&&this.updatePlayer(),CF(n,this.props)&&(yield this.resetPlayer()),OF(n,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return uo.createElement("div",{className:this.props.className,style:this.props.style},uo.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},ic=rl;ic.propTypes=RF;ic.defaultProps=KF;ic.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var BF=ic;const Rr=[1,2,5,10,15,30];function PF({hintsRevealed:n,videoId:e,showVideo:o}){const[r,t]=w.useState(0),[s,c]=w.useState(!1),m=w.useRef(null),[d,f]=w.useState(50),[S,p]=w.useState(!1),v=CM(),T=O=>{m.current=O.target,m.current.setVolume(d),p(!0),c(!1),t(0)},M=()=>{m.current&&(m.current.getPlayerState()===window.YT.PlayerState.CUED||m.current.getPlayerState()===window.YT.PlayerState.PAUSED?(console.log("clicked"),m.current.playVideo(),c(!0)):m.current.getPlayerState()===window.YT.PlayerState.PLAYING&&(m.current.pauseVideo(),c(!1)))},C=()=>{m.current&&(m.current.seekTo(0),m.current.pauseVideo(),m.current.playVideo(),m.current.pauseVideo(),c(!1),t(0))};w.useEffect(()=>{C()},[n]),w.useEffect(()=>{let O;return s&&m.current&&(O=setInterval(()=>{const D=m.current.getCurrentTime();typeof D=="number"&&(t(Math.floor(D)),D>Rr[n]&&C())},500)),()=>clearInterval(O)},[s,n]);const A=O=>{const D=Math.floor(Number.parseInt(O.target.value));t(D),c(!0),m.current.seekTo(D),m.current.playVideo()},k=O=>{const D=Number.parseInt(O.target.value);f(D),m&&(m.current.setVolume(D),D<1?m.current.mute():m.current.unMute())};return $.jsxs("div",{className:"MediaContainer",children:[$.jsx("div",{className:`${o?"FullSizeVideoContainer":"YouTubeContainer"}`,children:$.jsx(BF,{videoId:e,onReady:T,opts:{width:`${v?o?360:0:o?640:0}`,height:`${v?o?240:0:o?360:0}`,playerVars:{autoplay:0,controls:1,modestbranding:1,rel:0,enablejsapi:1}}})}),!o&&$.jsxs("div",{className:"Media",children:[$.jsx("div",{className:"PlayButtonContainer",children:$.jsx("button",{className:`PlayPauseButton ${s?"Pause":"Play"}`,onClick:M,disabled:!S})}),$.jsxs("div",{className:"SlidersContainer",children:[$.jsxs("div",{className:"PlayTimeBar",children:[$.jsx("span",{className:"TimeShow",children:Math.min(r,Rr[n])}),$.jsx("input",{className:"Progress",type:"range",min:"0",max:Rr[n],value:Math.min(r,Rr[n]),onChange:O=>A(O)}),$.jsx("span",{className:"TimeShow",children:Rr[n]})]}),$.jsx("div",{className:"VolumeSlider",children:$.jsx("input",{className:"Slider",type:"range",min:"0",max:"100",value:d,onChange:O=>k(O)})})]})]})]})}function EF({onSubmit:n,guesses:e,won:o,disabled:r}){const[t,s]=w.useState(""),[c,m]=w.useState(null),[d,f]=w.useState(-1),S=w.useRef(null),{mode:p}=iu(),v=p==="Opening"?Xg:uL,[T,M]=w.useState([]);w.useEffect(()=>{const D=t?v.filter(P=>{const I=P.toLowerCase(),j=t.toLocaleLowerCase(),z=I.split(" "),U=z.filter((fn,nn)=>z.slice(nn).join(" ").startsWith(j)).length>0,tn=e.filter(fn=>fn.trim().toLowerCase()===P.toLowerCase()).length>0,ln=c?I!=c.toLowerCase():!0;return U&&!tn&&ln}):[];M(D.splice(0,5))},[t]),w.useEffect(()=>{var D;(D=S.current)==null||D.focus()},[]);const C=()=>{setTimeout(()=>{var D;return(D=S.current)==null?void 0:D.focus()},0)},A=D=>{m(D),s(D),f(-1)},k=()=>{var D;n(c?c.trim():"Skipped!"),s(""),f(-1),m(null),(D=S.current)==null||D.focus()},O=D=>{if(D.key==="ArrowDown")D.preventDefault(),f(P=>P<T.length-1?P+1:0);else if(D.key==="ArrowUp")D.preventDefault(),f(P=>P>0?P-1:T.length-1);else if(D.key==="Enter")if(d>=0&&d<T.length){const P=T[d];A(P)}else c&&c.trim()!==""?k():T.length>0&&S.current&&(m(S.current.value),k())};return $.jsxs("div",{className:"GuessContainer",children:[e.length>0&&$.jsx("ul",{className:"GuessedList",children:e.map((D,P)=>$.jsx("li",{className:o&&P==e.length-1?"CorrectGuess":"IncorrectGuess",children:D},`guess_${D}_${P}`))}),!r&&$.jsxs("div",{children:[$.jsx("input",{type:"text",ref:S,disabled:r,id:"SearchBar",className:"SearchBar",placeholder:"Guess...",value:t,onChange:D=>{s(D.target.value),m(null),f(-1)},onKeyDown:O,onBlur:C}),$.jsx("button",{className:"SubmitSearchButton bg-gray-500 text-white px-4 py-2 rounded",onClick:k,children:`${c?"Guess!":"Skip"}`})]}),T.length>0&&$.jsx("ul",{className:"AnimeSearchList",children:T.map((D,P)=>$.jsx("li",{className:`AnimeItem ${P==d?"Highlighted":""}`,onClick:()=>{s(D),m(D)},onMouseDown:()=>A(D),children:D},`${D}_${P}`))})]})}function NF({hintsRevealed:n,song:e,endGameState:o}){const r=["num_episodes","year_released","genres","score","studios"],t=["Number of Episodes","Year Released","Genres","Score","Studios"];return $.jsx("div",{className:"HintContainer",children:e&&r.map((s,c)=>c<n||o?$.jsxs("div",{className:`Hint ${c==n-1?"NewHint":""}`,style:c==n-1?{animation:`flipHints 0.1s ease-in ${Math.floor(Math.random()*5)+3}`}:{animation:"none"},children:[t[c],": ",e[s]]}):$.jsx("div",{className:"Hint Hidden",children:"??????????"}))})}function HF(){const n=Vm(),e=ta(),[o,r]=w.useState(null),[t,s]=w.useState(null),[c,m]=w.useState(""),[d,f]=w.useState(null),[S,p]=w.useState(null),[v,T]=w.useState(0),[M,C]=w.useState([]),{guessStates:A,updateGuessStates:k}=qg(),{filter:O,updateFilter:D}=ou(),{mode:P}=iu(),[I,j]=w.useState(()=>{var nn,yn,In;return((In=(yn=(nn=A[P])==null?void 0:nn[O])==null?void 0:yn[t??""])==null?void 0:In.status)??"Attempting"}),[z,U]=w.useState(()=>I==="Correct"||I==="Incorrect"),tn="https://guess-the-anime-op.onrender.com",ln=()=>{if(!t||c===""){f(null),p(`Song ${t} with filter does not exist`);return}fetch(`${tn}/song?id=${t}&filter=${c}`).then(nn=>{if(!nn.ok)throw f(null),p(`${nn.status}: Error fetching song ${t}`),new Error(`Error fetching song ${t}: ${nn.status}`);return nn.json()}).then(nn=>f(nn)).catch(nn=>console.error("Fetch error:",nn))};w.useEffect(()=>{const nn=new URLSearchParams(e.search);r(nn);const yn=nn.get("id"),In=nn.get("filter")??"",gn=yn&&parseInt(yn)>=1&&parseInt(yn)<=eo?parseInt(yn):null,L=qm.includes(In)?In:"";gn&&gn>=1&&gn<=eo?s(gn):s(null),m(L),In!==""&&D(In)},[e.search]),w.useEffect(()=>{U(I==="Correct"||I==="Incorrect")},[I]),w.useEffect(()=>{var yn,In;ln();const nn=(In=(yn=A[P])==null?void 0:yn[O])==null?void 0:In[t??""];C((nn==null?void 0:nn.guesses)??[]),T((nn==null?void 0:nn.guesses.length)??0),j((nn==null?void 0:nn.status)??"Attempting")},[t,O,A]);const fn=w.useCallback(nn=>{const yn=nn.trim();if(!t)return;T(Z=>Z+1),C(Z=>[...Z,yn]);const In=(d==null?void 0:d.def_title.includes(yn))||(d==null?void 0:d.eng_title.includes(yn)),gn=v===5,L=In&&!gn?"Correct":gn?"Incorrect":"Attempting";j(L),k(P,O,t,yn,L)},[t,d,O,M,I,v,A]);return d?$.jsxs("div",{className:"GuessTheSongContainer",children:[$.jsxs("div",{className:"",children:["Guess anime ",t,"!"]}),$.jsx("div",{children:c}),I==="Correct"&&$.jsx("div",{children:"You guessed correctly!"}),I==="Incorrect"&&$.jsx("div",{children:"Better Luck Next Time!"}),$.jsxs("div",{className:"AnimeInfoContainer",children:[z&&$.jsxs("div",{className:"flex flex-col justify-center content-center items-center",children:[$.jsx("div",{children:d.eng_title}),$.jsx("div",{children:d.def_title}),$.jsx("img",{className:"w-1/2 sm:w",src:d.img_url,alt:`${d.eng_title}`})]}),$.jsx(NF,{hintsRevealed:v,song:d,endGameState:z})]}),$.jsx(PF,{hintsRevealed:v,videoId:d.yt_video_id,showVideo:z}),$.jsx(EF,{onSubmit:fn,guesses:M,won:I==="Correct",disabled:z}),$.jsxs("div",{className:"ButtonsContainer",children:[$.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:nn=>{if(nn.preventDefault(),t&&o){const yn=t>1?t-1:eo;o.set("id",yn.toString()),n(`/guess?${o.toString()}`)}},children:"Prev"}),$.jsx("button",{className:"bg-[var(--primary-color)] text-white px-4 py-2 rounded",onClick:()=>n("/"),children:"Back"}),$.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:nn=>{if(nn.preventDefault(),t&&o){const yn=t<eo?t+1:1;o.set("id",yn.toString()),n(`/guess?${o.toString()}`)}},children:"Next"})]})]}):S?$.jsxs("div",{children:[$.jsx("div",{children:S}),$.jsx("div",{children:"I'm currently using a free tier for db hosting so please wait 15-30 seconds and click again the server is spinning back up for you!"}),$.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded",onClick:()=>n(-1),children:"Back"})]}):$.jsxs("span",{className:"Loading",children:["Song Loading",$.jsx("span",{className:"dot one",children:"."}),$.jsx("span",{className:"dot two",children:"."}),$.jsx("span",{className:"dot three",children:"."})]})}function GF(){return $.jsxs("div",{className:"flex flex-row w-1",children:[$.jsx("div",{className:"Top1000ByScore flex flex-col",children:"PlaceHolder Table"}),$.jsx("div",{children:"PlaceHolder Table"}),"Stats"]})}function xF(){return $.jsx("div",{children:"About"})}function LF(){return $.jsx("div",{children:"FAQ"})}function _F(){return $.jsx("div",{children:"Rules"})}const jF=w.memo(({hidden:n,mode:e,setMode:o})=>n?null:$.jsx(SP,{mode:e,setMode:o}));uo.lazy(()=>hP(()=>import("./Dev-DntVnQPR.js"),[]));const zF=[$.jsx(ei,{path:"/",element:$.jsx(Q$,{})},"maincontent"),$.jsx(ei,{path:"/guess",element:$.jsx(HF,{})},"guess"),$.jsx(ei,{path:"/about",element:$.jsx(xF,{})},"about"),$.jsx(ei,{path:"/rules",element:$.jsx(_F,{})},"rules"),$.jsx(ei,{path:"/faq",element:$.jsx(LF,{})},"faq"),$.jsx(ei,{path:"/stats",element:$.jsx(GF,{})},"stats")];function $F(){const{mode:n,updateMode:e}=iu(),r=ta().pathname.startsWith("/guess");return $.jsxs("div",{className:`App ${n}`,children:[$.jsx(jF,{hidden:r,mode:n,setMode:e}),$.jsx(IB,{children:zF})]})}const FF="/Guess-The-Anime-OP";LR.createRoot(document.getElementById("root")).render($.jsx(w.StrictMode,{children:$.jsx(qB,{basename:FF,children:$.jsx(yP,{children:$.jsx(TP,{children:$.jsx(fL,{children:$.jsx($F,{})})})})})}));export{$ as j};
