function aw(e,o){for(var r=0;r<o.length;r++){const u=o[r];if(typeof u!="string"&&!Array.isArray(u)){for(const a in u)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(u,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>u[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function Ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},_t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function iw(){if($v)return _t;$v=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(u,a,s){var h=null;if(s!==void 0&&(h=""+s),a.key!==void 0&&(h=""+a.key),"key"in a){s={};for(var g in a)g!=="key"&&(s[g]=a[g])}else s=a;return a=s.ref,{$$typeof:e,type:u,key:h,ref:a!==void 0?a:null,props:s}}return _t.Fragment=o,_t.jsx=r,_t.jsxs=r,_t}var Fv;function ow(){return Fv||(Fv=1,qc.exports=iw()),qc.exports}var x=ow(),Qc={exports:{}},pn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function tw(){if(Uv)return pn;Uv=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function M(K){return K===null||typeof K!="object"?null:(K=y&&K[y]||K["@@iterator"],typeof K=="function"?K:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,R={};function b(K,V,J){this.props=K,this.context=V,this.refs=R,this.updater=J||C}b.prototype.isReactComponent={},b.prototype.setState=function(K,V){if(typeof K!="object"&&typeof K!="function"&&K!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,K,V,"setState")},b.prototype.forceUpdate=function(K){this.updater.enqueueForceUpdate(this,K,"forceUpdate")};function p(){}p.prototype=b.prototype;function w(K,V,J){this.props=K,this.context=V,this.refs=R,this.updater=J||C}var A=w.prototype=new p;A.constructor=w,D(A,b.prototype),A.isPureReactComponent=!0;var P=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},U=Object.prototype.hasOwnProperty;function F(K,V,J,X,on,yn){return J=yn.ref,{$$typeof:e,type:K,key:V,ref:J!==void 0?J:null,props:yn}}function Q(K,V){return F(K.type,V,void 0,void 0,void 0,K.props)}function tn(K){return typeof K=="object"&&K!==null&&K.$$typeof===e}function bn(K){var V={"=":"=0",":":"=2"};return"$"+K.replace(/[=:]/g,function(J){return V[J]})}var vn=/\/+/g;function nn(K,V){return typeof K=="object"&&K!==null&&K.key!=null?bn(""+K.key):V.toString(36)}function kn(){}function Rn(K){switch(K.status){case"fulfilled":return K.value;case"rejected":throw K.reason;default:switch(typeof K.status=="string"?K.then(kn,kn):(K.status="pending",K.then(function(V){K.status==="pending"&&(K.status="fulfilled",K.value=V)},function(V){K.status==="pending"&&(K.status="rejected",K.reason=V)})),K.status){case"fulfilled":return K.value;case"rejected":throw K.reason}}throw K}function fn(K,V,J,X,on){var yn=typeof K;(yn==="undefined"||yn==="boolean")&&(K=null);var un=!1;if(K===null)un=!0;else switch(yn){case"bigint":case"string":case"number":un=!0;break;case"object":switch(K.$$typeof){case e:case o:un=!0;break;case v:return un=K._init,fn(un(K._payload),V,J,X,on)}}if(un)return on=on(K),un=X===""?"."+nn(K,0):X,P(on)?(J="",un!=null&&(J=un.replace(vn,"$&/")+"/"),fn(on,V,J,"",function(Ke){return Ke})):on!=null&&(tn(on)&&(on=Q(on,J+(on.key==null||K&&K.key===on.key?"":(""+on.key).replace(vn,"$&/")+"/")+un)),V.push(on)),1;un=0;var Zn=X===""?".":X+":";if(P(K))for(var Cn=0;Cn<K.length;Cn++)X=K[Cn],yn=Zn+nn(X,Cn),un+=fn(X,V,J,yn,on);else if(Cn=M(K),typeof Cn=="function")for(K=Cn.call(K),Cn=0;!(X=K.next()).done;)X=X.value,yn=Zn+nn(X,Cn++),un+=fn(X,V,J,yn,on);else if(yn==="object"){if(typeof K.then=="function")return fn(Rn(K),V,J,X,on);throw V=String(K),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(K).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return un}function L(K,V,J){if(K==null)return K;var X=[],on=0;return fn(K,X,"","",function(yn){return V.call(J,yn,on++)}),X}function Z(K){if(K._status===-1){var V=K._result;V=V(),V.then(function(J){(K._status===0||K._status===-1)&&(K._status=1,K._result=J)},function(J){(K._status===0||K._status===-1)&&(K._status=2,K._result=J)}),K._status===-1&&(K._status=0,K._result=V)}if(K._status===1)return K._result.default;throw K._result}var en=typeof reportError=="function"?reportError:function(K){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof K=="object"&&K!==null&&typeof K.message=="string"?String(K.message):String(K),error:K});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",K);return}console.error(K)};function An(){}return pn.Children={map:L,forEach:function(K,V,J){L(K,function(){V.apply(this,arguments)},J)},count:function(K){var V=0;return L(K,function(){V++}),V},toArray:function(K){return L(K,function(V){return V})||[]},only:function(K){if(!tn(K))throw Error("React.Children.only expected to receive a single React element child.");return K}},pn.Component=b,pn.Fragment=r,pn.Profiler=a,pn.PureComponent=w,pn.StrictMode=u,pn.Suspense=m,pn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,pn.__COMPILER_RUNTIME={__proto__:null,c:function(K){return I.H.useMemoCache(K)}},pn.cache=function(K){return function(){return K.apply(null,arguments)}},pn.cloneElement=function(K,V,J){if(K==null)throw Error("The argument must be a React element, but you passed "+K+".");var X=D({},K.props),on=K.key,yn=void 0;if(V!=null)for(un in V.ref!==void 0&&(yn=void 0),V.key!==void 0&&(on=""+V.key),V)!U.call(V,un)||un==="key"||un==="__self"||un==="__source"||un==="ref"&&V.ref===void 0||(X[un]=V[un]);var un=arguments.length-2;if(un===1)X.children=J;else if(1<un){for(var Zn=Array(un),Cn=0;Cn<un;Cn++)Zn[Cn]=arguments[Cn+2];X.children=Zn}return F(K.type,on,void 0,void 0,yn,X)},pn.createContext=function(K){return K={$$typeof:h,_currentValue:K,_currentValue2:K,_threadCount:0,Provider:null,Consumer:null},K.Provider=K,K.Consumer={$$typeof:s,_context:K},K},pn.createElement=function(K,V,J){var X,on={},yn=null;if(V!=null)for(X in V.key!==void 0&&(yn=""+V.key),V)U.call(V,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(on[X]=V[X]);var un=arguments.length-2;if(un===1)on.children=J;else if(1<un){for(var Zn=Array(un),Cn=0;Cn<un;Cn++)Zn[Cn]=arguments[Cn+2];on.children=Zn}if(K&&K.defaultProps)for(X in un=K.defaultProps,un)on[X]===void 0&&(on[X]=un[X]);return F(K,yn,void 0,void 0,null,on)},pn.createRef=function(){return{current:null}},pn.forwardRef=function(K){return{$$typeof:g,render:K}},pn.isValidElement=tn,pn.lazy=function(K){return{$$typeof:v,_payload:{_status:-1,_result:K},_init:Z}},pn.memo=function(K,V){return{$$typeof:f,type:K,compare:V===void 0?null:V}},pn.startTransition=function(K){var V=I.T,J={};I.T=J;try{var X=K(),on=I.S;on!==null&&on(J,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(An,en)}catch(yn){en(yn)}finally{I.T=V}},pn.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},pn.use=function(K){return I.H.use(K)},pn.useActionState=function(K,V,J){return I.H.useActionState(K,V,J)},pn.useCallback=function(K,V){return I.H.useCallback(K,V)},pn.useContext=function(K){return I.H.useContext(K)},pn.useDebugValue=function(){},pn.useDeferredValue=function(K,V){return I.H.useDeferredValue(K,V)},pn.useEffect=function(K,V,J){var X=I.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(K,V)},pn.useId=function(){return I.H.useId()},pn.useImperativeHandle=function(K,V,J){return I.H.useImperativeHandle(K,V,J)},pn.useInsertionEffect=function(K,V){return I.H.useInsertionEffect(K,V)},pn.useLayoutEffect=function(K,V){return I.H.useLayoutEffect(K,V)},pn.useMemo=function(K,V){return I.H.useMemo(K,V)},pn.useOptimistic=function(K,V){return I.H.useOptimistic(K,V)},pn.useReducer=function(K,V,J){return I.H.useReducer(K,V,J)},pn.useRef=function(K){return I.H.useRef(K)},pn.useState=function(K){return I.H.useState(K)},pn.useSyncExternalStore=function(K,V,J){return I.H.useSyncExternalStore(K,V,J)},pn.useTransition=function(){return I.H.useTransition()},pn.version="19.1.1",pn}var Yv;function xh(){return Yv||(Yv=1,Qc.exports=tw()),Qc.exports}var T=xh();const Yt=Ss(T),Vv=aw({__proto__:null,default:Yt},[T]);var nh={exports:{}},Lt={},eh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function rw(){return Wv||(Wv=1,function(e){function o(L,Z){var en=L.length;L.push(Z);n:for(;0<en;){var An=en-1>>>1,K=L[An];if(0<a(K,Z))L[An]=Z,L[en]=K,en=An;else break n}}function r(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var Z=L[0],en=L.pop();if(en!==Z){L[0]=en;n:for(var An=0,K=L.length,V=K>>>1;An<V;){var J=2*(An+1)-1,X=L[J],on=J+1,yn=L[on];if(0>a(X,en))on<K&&0>a(yn,X)?(L[An]=yn,L[on]=en,An=on):(L[An]=X,L[J]=en,An=J);else if(on<K&&0>a(yn,en))L[An]=yn,L[on]=en,An=on;else break n}}return Z}function a(L,Z){var en=L.sortIndex-Z.sortIndex;return en!==0?en:L.id-Z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var h=Date,g=h.now();e.unstable_now=function(){return h.now()-g}}var m=[],f=[],v=1,y=null,M=3,C=!1,D=!1,R=!1,b=!1,p=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var Z=r(f);Z!==null;){if(Z.callback===null)u(f);else if(Z.startTime<=L)u(f),Z.sortIndex=Z.expirationTime,o(m,Z);else break;Z=r(f)}}function I(L){if(R=!1,P(L),!D)if(r(m)!==null)D=!0,U||(U=!0,nn());else{var Z=r(f);Z!==null&&fn(I,Z.startTime-L)}}var U=!1,F=-1,Q=5,tn=-1;function bn(){return b?!0:!(e.unstable_now()-tn<Q)}function vn(){if(b=!1,U){var L=e.unstable_now();tn=L;var Z=!0;try{n:{D=!1,R&&(R=!1,w(F),F=-1),C=!0;var en=M;try{e:{for(P(L),y=r(m);y!==null&&!(y.expirationTime>L&&bn());){var An=y.callback;if(typeof An=="function"){y.callback=null,M=y.priorityLevel;var K=An(y.expirationTime<=L);if(L=e.unstable_now(),typeof K=="function"){y.callback=K,P(L),Z=!0;break e}y===r(m)&&u(m),P(L)}else u(m);y=r(m)}if(y!==null)Z=!0;else{var V=r(f);V!==null&&fn(I,V.startTime-L),Z=!1}}break n}finally{y=null,M=en,C=!1}Z=void 0}}finally{Z?nn():U=!1}}}var nn;if(typeof A=="function")nn=function(){A(vn)};else if(typeof MessageChannel<"u"){var kn=new MessageChannel,Rn=kn.port2;kn.port1.onmessage=vn,nn=function(){Rn.postMessage(null)}}else nn=function(){p(vn,0)};function fn(L,Z){F=p(function(){L(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return M},e.unstable_next=function(L){switch(M){case 1:case 2:case 3:var Z=3;break;default:Z=M}var en=M;M=Z;try{return L()}finally{M=en}},e.unstable_requestPaint=function(){b=!0},e.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var en=M;M=L;try{return Z()}finally{M=en}},e.unstable_scheduleCallback=function(L,Z,en){var An=e.unstable_now();switch(typeof en=="object"&&en!==null?(en=en.delay,en=typeof en=="number"&&0<en?An+en:An):en=An,L){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=en+K,L={id:v++,callback:Z,priorityLevel:L,startTime:en,expirationTime:K,sortIndex:-1},en>An?(L.sortIndex=en,o(f,L),r(m)===null&&L===r(f)&&(R?(w(F),F=-1):R=!0,fn(I,en-An))):(L.sortIndex=K,o(m,L),D||C||(D=!0,U||(U=!0,nn()))),L},e.unstable_shouldYield=bn,e.unstable_wrapCallback=function(L){var Z=M;return function(){var en=M;M=Z;try{return L.apply(this,arguments)}finally{M=en}}}}(ah)),ah}var Zv;function uw(){return Zv||(Zv=1,eh.exports=rw()),eh.exports}var ih={exports:{}},ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function sw(){if(Jv)return ye;Jv=1;var e=xh();function o(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(o(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for("react.portal");function s(m,f,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:y==null?null:""+y,children:m,containerInfo:f,implementation:v}}var h=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ye.createPortal=function(m,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(o(299));return s(m,f,null,v)},ye.flushSync=function(m){var f=h.T,v=u.p;try{if(h.T=null,u.p=2,m)return m()}finally{h.T=f,u.p=v,u.d.f()}},ye.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(m,f))},ye.prefetchDNS=function(m){typeof m=="string"&&u.d.D(m)},ye.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var v=f.as,y=g(v,f.crossOrigin),M=typeof f.integrity=="string"?f.integrity:void 0,C=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?u.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:y,integrity:M,fetchPriority:C}):v==="script"&&u.d.X(m,{crossOrigin:y,integrity:M,fetchPriority:C,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ye.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=g(f.as,f.crossOrigin);u.d.M(m,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&u.d.M(m)},ye.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,y=g(v,f.crossOrigin);u.d.L(m,v,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ye.preloadModule=function(m,f){if(typeof m=="string")if(f){var v=g(f.as,f.crossOrigin);u.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else u.d.m(m)},ye.requestFormReset=function(m){u.d.r(m)},ye.unstable_batchedUpdates=function(m,f){return m(f)},ye.useFormState=function(m,f,v){return h.H.useFormState(m,f,v)},ye.useFormStatus=function(){return h.H.useHostTransitionStatus()},ye.version="19.1.1",ye}var Xv;function vy(){if(Xv)return ih.exports;Xv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),ih.exports=sw(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function lw(){if(qv)return Lt;qv=1;var e=uw(),o=xh(),r=vy();function u(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)i+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function s(n){var i=n,t=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(t=i.return),n=i.return;while(n)}return i.tag===3?t:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function g(n){if(s(n)!==n)throw Error(u(188))}function m(n){var i=n.alternate;if(!i){if(i=s(n),i===null)throw Error(u(188));return i!==n?null:n}for(var t=n,l=i;;){var c=t.return;if(c===null)break;var d=c.alternate;if(d===null){if(l=c.return,l!==null){t=l;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===t)return g(c),n;if(d===l)return g(c),i;d=d.sibling}throw Error(u(188))}if(t.return!==l.return)t=c,l=d;else{for(var S=!1,k=c.child;k;){if(k===t){S=!0,t=c,l=d;break}if(k===l){S=!0,l=c,t=d;break}k=k.sibling}if(!S){for(k=d.child;k;){if(k===t){S=!0,t=d,l=c;break}if(k===l){S=!0,l=d,t=c;break}k=k.sibling}if(!S)throw Error(u(189))}}if(t.alternate!==l)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?n:i}function f(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=f(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),A=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),bn=Symbol.for("react.memo_cache_sentinel"),vn=Symbol.iterator;function nn(n){return n===null||typeof n!="object"?null:(n=vn&&n[vn]||n["@@iterator"],typeof n=="function"?n:null)}var kn=Symbol.for("react.client.reference");function Rn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===kn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case b:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case tn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case C:return"Portal";case A:return(n.displayName||"Context")+".Provider";case w:return(n._context.displayName||"Context")+".Consumer";case P:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return i=n.displayName||null,i!==null?i:Rn(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return Rn(n(i))}catch{}}return null}var fn=Array.isArray,L=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,en={pending:!1,data:null,method:null,action:null},An=[],K=-1;function V(n){return{current:n}}function J(n){0>K||(n.current=An[K],An[K]=null,K--)}function X(n,i){K++,An[K]=n.current,n.current=i}var on=V(null),yn=V(null),un=V(null),Zn=V(null);function Cn(n,i){switch(X(un,i),X(yn,n),X(on,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?vv(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=vv(i),n=kv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}J(on),X(on,n)}function Ke(){J(on),J(yn),J(un)}function Lo(n){n.memoizedState!==null&&X(Zn,n);var i=on.current,t=kv(i,n.type);i!==t&&(X(yn,n),X(on,t))}function di(n){yn.current===n&&(J(on),J(yn)),Zn.current===n&&(J(Zn),Nt._currentValue=en)}var _i=Object.prototype.hasOwnProperty,zo=e.unstable_scheduleCallback,Li=e.unstable_cancelCallback,zs=e.unstable_shouldYield,GA=e.unstable_requestPaint,ia=e.unstable_now,EA=e.unstable_getCurrentPriorityLevel,Jm=e.unstable_ImmediatePriority,Xm=e.unstable_UserBlockingPriority,dr=e.unstable_NormalPriority,PA=e.unstable_LowPriority,qm=e.unstable_IdlePriority,_A=e.log,LA=e.unstable_setDisableYieldValue,jo=null,Ie=null;function La(n){if(typeof _A=="function"&&LA(n),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(jo,n)}catch{}}var Re=Math.clz32?Math.clz32:xA,zA=Math.log,jA=Math.LN2;function xA(n){return n>>>=0,n===0?32:31-(zA(n)/jA|0)|0}var mr=256,fr=4194304;function mi(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function gr(n,i,t){var l=n.pendingLanes;if(l===0)return 0;var c=0,d=n.suspendedLanes,S=n.pingedLanes;n=n.warmLanes;var k=l&134217727;return k!==0?(l=k&~d,l!==0?c=mi(l):(S&=k,S!==0?c=mi(S):t||(t=k&~n,t!==0&&(c=mi(t))))):(k=l&~d,k!==0?c=mi(k):S!==0?c=mi(S):t||(t=l&~n,t!==0&&(c=mi(t)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,t=i&-i,d>=t||d===32&&(t&4194048)!==0)?i:c}function xo(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function $A(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(){var n=mr;return mr<<=1,(mr&4194048)===0&&(mr=256),n}function nf(){var n=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),n}function js(n){for(var i=[],t=0;31>t;t++)i.push(n);return i}function $o(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function FA(n,i,t,l,c,d){var S=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var k=n.entanglements,O=n.expirationTimes,E=n.hiddenUpdates;for(t=S&~t;0<t;){var j=31-Re(t),Y=1<<j;k[j]=0,O[j]=-1;var _=E[j];if(_!==null)for(E[j]=null,j=0;j<_.length;j++){var z=_[j];z!==null&&(z.lane&=-536870913)}t&=~Y}l!==0&&ef(n,l,0),d!==0&&c===0&&n.tag!==0&&(n.suspendedLanes|=d&~(S&~i))}function ef(n,i,t){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Re(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|t&4194090}function af(n,i){var t=n.entangledLanes|=i;for(n=n.entanglements;t;){var l=31-Re(t),c=1<<l;c&i|n[l]&i&&(n[l]|=i),t&=~c}}function xs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function $s(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function of(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:Pv(n.type))}function UA(n,i){var t=Z.p;try{return Z.p=n,i()}finally{Z.p=t}}var za=Math.random().toString(36).slice(2),ve="__reactFiber$"+za,Me="__reactProps$"+za,zi="__reactContainer$"+za,Fs="__reactEvents$"+za,YA="__reactListeners$"+za,VA="__reactHandles$"+za,tf="__reactResources$"+za,Fo="__reactMarker$"+za;function Us(n){delete n[ve],delete n[Me],delete n[Fs],delete n[YA],delete n[VA]}function ji(n){var i=n[ve];if(i)return i;for(var t=n.parentNode;t;){if(i=t[zi]||t[ve]){if(t=i.alternate,i.child!==null||t!==null&&t.child!==null)for(n=Tv(n);n!==null;){if(t=n[ve])return t;n=Tv(n)}return i}n=t,t=n.parentNode}return null}function xi(n){if(n=n[ve]||n[zi]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Uo(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(u(33))}function $i(n){var i=n[tf];return i||(i=n[tf]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function se(n){n[Fo]=!0}var rf=new Set,uf={};function fi(n,i){Fi(n,i),Fi(n+"Capture",i)}function Fi(n,i){for(uf[n]=i,n=0;n<i.length;n++)rf.add(i[n])}var WA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sf={},lf={};function ZA(n){return _i.call(lf,n)?!0:_i.call(sf,n)?!1:WA.test(n)?lf[n]=!0:(sf[n]=!0,!1)}function Sr(n,i,t){if(ZA(i))if(t===null)n.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+t)}}function vr(n,i,t){if(t===null)n.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+t)}}function Sa(n,i,t,l){if(l===null)n.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(i,t,""+l)}}var Ys,cf;function Ui(n){if(Ys===void 0)try{throw Error()}catch(t){var i=t.stack.trim().match(/\n( *(at )?)/);Ys=i&&i[1]||"",cf=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ys+n+cf}var Vs=!1;function Ws(n,i){if(!n||Vs)return"";Vs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(z){var _=z}Reflect.construct(n,[],Y)}else{try{Y.call()}catch(z){_=z}n.call(Y.prototype)}}else{try{throw Error()}catch(z){_=z}(Y=n())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(z){if(z&&_&&typeof z.stack=="string")return[z.stack,_.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],k=d[1];if(S&&k){var O=S.split(`
`),E=k.split(`
`);for(c=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;c<E.length&&!E[c].includes("DetermineComponentFrameRoot");)c++;if(l===O.length||c===E.length)for(l=O.length-1,c=E.length-1;1<=l&&0<=c&&O[l]!==E[c];)c--;for(;1<=l&&0<=c;l--,c--)if(O[l]!==E[c]){if(l!==1||c!==1)do if(l--,c--,0>c||O[l]!==E[c]){var j=`
`+O[l].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=l&&0<=c);break}}}finally{Vs=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Ui(t):""}function JA(n){switch(n.tag){case 26:case 27:case 5:return Ui(n.type);case 16:return Ui("Lazy");case 13:return Ui("Suspense");case 19:return Ui("SuspenseList");case 0:case 15:return Ws(n.type,!1);case 11:return Ws(n.type.render,!1);case 1:return Ws(n.type,!0);case 31:return Ui("Activity");default:return""}}function hf(n){try{var i="";do i+=JA(n),n=n.return;while(n);return i}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function je(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function df(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function XA(n){var i=df(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var c=t.get,d=t.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return c.call(this)},set:function(S){l=""+S,d.call(this,S)}}),Object.defineProperty(n,i,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(S){l=""+S},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function kr(n){n._valueTracker||(n._valueTracker=XA(n))}function mf(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var t=i.getValue(),l="";return n&&(l=df(n)?n.checked?"true":"false":n.value),n=l,n!==t?(i.setValue(n),!0):!1}function yr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var qA=/[\n"\\]/g;function xe(n){return n.replace(qA,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zs(n,i,t,l,c,d,S,k){n.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.type=S:n.removeAttribute("type"),i!=null?S==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+je(i)):n.value!==""+je(i)&&(n.value=""+je(i)):S!=="submit"&&S!=="reset"||n.removeAttribute("value"),i!=null?Js(n,S,je(i)):t!=null?Js(n,S,je(t)):l!=null&&n.removeAttribute("value"),c==null&&d!=null&&(n.defaultChecked=!!d),c!=null&&(n.checked=c&&typeof c!="function"&&typeof c!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+je(k):n.removeAttribute("name")}function ff(n,i,t,l,c,d,S,k){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||t!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;t=t!=null?""+je(t):"",i=i!=null?""+je(i):t,k||i===n.value||(n.value=i),n.defaultValue=i}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=k?n.checked:!!l,n.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(n.name=S)}function Js(n,i,t){i==="number"&&yr(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function Yi(n,i,t,l){if(n=n.options,i){i={};for(var c=0;c<t.length;c++)i["$"+t[c]]=!0;for(t=0;t<n.length;t++)c=i.hasOwnProperty("$"+n[t].value),n[t].selected!==c&&(n[t].selected=c),c&&l&&(n[t].defaultSelected=!0)}else{for(t=""+je(t),i=null,c=0;c<n.length;c++){if(n[c].value===t){n[c].selected=!0,l&&(n[c].defaultSelected=!0);return}i!==null||n[c].disabled||(i=n[c])}i!==null&&(i.selected=!0)}}function gf(n,i,t){if(i!=null&&(i=""+je(i),i!==n.value&&(n.value=i),t==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=t!=null?""+je(t):""}function Sf(n,i,t,l){if(i==null){if(l!=null){if(t!=null)throw Error(u(92));if(fn(l)){if(1<l.length)throw Error(u(93));l=l[0]}t=l}t==null&&(t=""),i=t}t=je(i),n.defaultValue=t,l=n.textContent,l===t&&l!==""&&l!==null&&(n.value=l)}function Vi(n,i){if(i){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=i;return}}n.textContent=i}var QA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vf(n,i,t){var l=i.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,t):typeof t!="number"||t===0||QA.has(i)?i==="float"?n.cssFloat=t:n[i]=(""+t).trim():n[i]=t+"px"}function kf(n,i,t){if(i!=null&&typeof i!="object")throw Error(u(62));if(n=n.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var c in i)l=i[c],i.hasOwnProperty(c)&&t[c]!==l&&vf(n,c,l)}else for(var d in i)i.hasOwnProperty(d)&&vf(n,d,i[d])}function Xs(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(n){return eD.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var qs=null;function Qs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wi=null,Zi=null;function yf(n){var i=xi(n);if(i&&(n=i.stateNode)){var t=n[Me]||null;n:switch(n=i.stateNode,i.type){case"input":if(Zs(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),i=t.name,t.type==="radio"&&i!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+xe(""+i)+'"][type="radio"]'),i=0;i<t.length;i++){var l=t[i];if(l!==n&&l.form===n.form){var c=l[Me]||null;if(!c)throw Error(u(90));Zs(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<t.length;i++)l=t[i],l.form===n.form&&mf(l)}break n;case"textarea":gf(n,t.value,t.defaultValue);break n;case"select":i=t.value,i!=null&&Yi(n,!!t.multiple,i,!1)}}}var nl=!1;function pf(n,i,t){if(nl)return n(i,t);nl=!0;try{var l=n(i);return l}finally{if(nl=!1,(Wi!==null||Zi!==null)&&(tu(),Wi&&(i=Wi,n=Zi,Zi=Wi=null,yf(i),n)))for(i=0;i<n.length;i++)yf(n[i])}}function Yo(n,i){var t=n.stateNode;if(t===null)return null;var l=t[Me]||null;if(l===null)return null;t=l[i];n:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(u(231,i,typeof t));return t}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),el=!1;if(va)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){el=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{el=!1}var ja=null,al=null,br=null;function bf(){if(br)return br;var n,i=al,t=i.length,l,c="value"in ja?ja.value:ja.textContent,d=c.length;for(n=0;n<t&&i[n]===c[n];n++);var S=t-n;for(l=1;l<=S&&i[t-l]===c[d-l];l++);return br=c.slice(n,1<l?1-l:void 0)}function Tr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mr(){return!0}function Tf(){return!1}function Ae(n){function i(t,l,c,d,S){this._reactName=t,this._targetInst=c,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(t=n[k],this[k]=t?t(d):d[k]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Mr:Tf,this.isPropagationStopped=Tf,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),i}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ar=Ae(gi),Wo=v({},gi,{view:0,detail:0}),aD=Ae(Wo),il,ol,Zo,Dr=v({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zo&&(Zo&&n.type==="mousemove"?(il=n.screenX-Zo.screenX,ol=n.screenY-Zo.screenY):ol=il=0,Zo=n),il)},movementY:function(n){return"movementY"in n?n.movementY:ol}}),Mf=Ae(Dr),iD=v({},Dr,{dataTransfer:0}),oD=Ae(iD),tD=v({},Wo,{relatedTarget:0}),tl=Ae(tD),rD=v({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),uD=Ae(rD),sD=v({},gi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lD=Ae(sD),cD=v({},gi,{data:0}),Af=Ae(cD),hD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fD(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=mD[n])?!!i[n]:!1}function rl(){return fD}var gD=v({},Wo,{key:function(n){if(n.key){var i=hD[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dD[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(n){return n.type==="keypress"?Tr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),SD=Ae(gD),vD=v({},Dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Ae(vD),kD=v({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),yD=Ae(kD),pD=v({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bD=Ae(pD),TD=v({},Dr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),MD=Ae(TD),AD=v({},gi,{newState:0,oldState:0}),DD=Ae(AD),OD=[9,13,27,32],ul=va&&"CompositionEvent"in window,Jo=null;va&&"documentMode"in document&&(Jo=document.documentMode);var wD=va&&"TextEvent"in window&&!Jo,Of=va&&(!ul||Jo&&8<Jo&&11>=Jo),wf=" ",Cf=!1;function Kf(n,i){switch(n){case"keyup":return OD.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ji=!1;function CD(n,i){switch(n){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(Cf=!0,wf);case"textInput":return n=i.data,n===wf&&Cf?null:n;default:return null}}function KD(n,i){if(Ji)return n==="compositionend"||!ul&&Kf(n,i)?(n=bf(),br=al=ja=null,Ji=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Of&&i.locale!=="ko"?null:i.data;default:return null}}var ID={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ID[n.type]:i==="textarea"}function Bf(n,i,t,l){Wi?Zi?Zi.push(l):Zi=[l]:Wi=l,i=hu(i,"onChange"),0<i.length&&(t=new Ar("onChange","change",null,t,l),n.push({event:t,listeners:i}))}var Xo=null,qo=null;function RD(n){dv(n,0)}function Or(n){var i=Uo(n);if(mf(i))return n}function Nf(n,i){if(n==="change")return i}var Hf=!1;if(va){var sl;if(va){var ll="oninput"in document;if(!ll){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),ll=typeof Gf.oninput=="function"}sl=ll}else sl=!1;Hf=sl&&(!document.documentMode||9<document.documentMode)}function Ef(){Xo&&(Xo.detachEvent("onpropertychange",Pf),qo=Xo=null)}function Pf(n){if(n.propertyName==="value"&&Or(qo)){var i=[];Bf(i,qo,n,Qs(n)),pf(RD,i)}}function BD(n,i,t){n==="focusin"?(Ef(),Xo=i,qo=t,Xo.attachEvent("onpropertychange",Pf)):n==="focusout"&&Ef()}function ND(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Or(qo)}function HD(n,i){if(n==="click")return Or(i)}function GD(n,i){if(n==="input"||n==="change")return Or(i)}function ED(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Be=typeof Object.is=="function"?Object.is:ED;function Qo(n,i){if(Be(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var t=Object.keys(n),l=Object.keys(i);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var c=t[l];if(!_i.call(i,c)||!Be(n[c],i[c]))return!1}return!0}function _f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lf(n,i){var t=_f(n);n=0;for(var l;t;){if(t.nodeType===3){if(l=n+t.textContent.length,n<=i&&l>=i)return{node:t,offset:i-n};n=l}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=_f(t)}}function zf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?zf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jf(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=yr(n.document);i instanceof n.HTMLIFrameElement;){try{var t=typeof i.contentWindow.location.href=="string"}catch{t=!1}if(t)n=i.contentWindow;else break;i=yr(n.document)}return i}function cl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var PD=va&&"documentMode"in document&&11>=document.documentMode,Xi=null,hl=null,nt=null,dl=!1;function xf(n,i,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||Xi==null||Xi!==yr(l)||(l=Xi,"selectionStart"in l&&cl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nt&&Qo(nt,l)||(nt=l,l=hu(hl,"onSelect"),0<l.length&&(i=new Ar("onSelect","select",null,i,t),n.push({event:i,listeners:l}),i.target=Xi)))}function Si(n,i){var t={};return t[n.toLowerCase()]=i.toLowerCase(),t["Webkit"+n]="webkit"+i,t["Moz"+n]="moz"+i,t}var qi={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionrun:Si("Transition","TransitionRun"),transitionstart:Si("Transition","TransitionStart"),transitioncancel:Si("Transition","TransitionCancel"),transitionend:Si("Transition","TransitionEnd")},ml={},$f={};va&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function vi(n){if(ml[n])return ml[n];if(!qi[n])return n;var i=qi[n],t;for(t in i)if(i.hasOwnProperty(t)&&t in $f)return ml[n]=i[t];return n}var Ff=vi("animationend"),Uf=vi("animationiteration"),Yf=vi("animationstart"),_D=vi("transitionrun"),LD=vi("transitionstart"),zD=vi("transitioncancel"),Vf=vi("transitionend"),Wf=new Map,fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fl.push("scrollEnd");function Je(n,i){Wf.set(n,i),fi(i,[n])}var Zf=new WeakMap;function $e(n,i){if(typeof n=="object"&&n!==null){var t=Zf.get(n);return t!==void 0?t:(i={value:n,source:i,stack:hf(i)},Zf.set(n,i),i)}return{value:n,source:i,stack:hf(i)}}var Fe=[],Qi=0,gl=0;function wr(){for(var n=Qi,i=gl=Qi=0;i<n;){var t=Fe[i];Fe[i++]=null;var l=Fe[i];Fe[i++]=null;var c=Fe[i];Fe[i++]=null;var d=Fe[i];if(Fe[i++]=null,l!==null&&c!==null){var S=l.pending;S===null?c.next=c:(c.next=S.next,S.next=c),l.pending=c}d!==0&&Jf(t,c,d)}}function Cr(n,i,t,l){Fe[Qi++]=n,Fe[Qi++]=i,Fe[Qi++]=t,Fe[Qi++]=l,gl|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Sl(n,i,t,l){return Cr(n,i,t,l),Kr(n)}function no(n,i){return Cr(n,null,null,i),Kr(n)}function Jf(n,i,t){n.lanes|=t;var l=n.alternate;l!==null&&(l.lanes|=t);for(var c=!1,d=n.return;d!==null;)d.childLanes|=t,l=d.alternate,l!==null&&(l.childLanes|=t),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(c=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,c&&i!==null&&(c=31-Re(t),n=d.hiddenUpdates,l=n[c],l===null?n[c]=[i]:l.push(i),i.lane=t|536870912),d):null}function Kr(n){if(50<Dt)throw Dt=0,Tc=null,Error(u(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var eo={};function jD(n,i,t,l){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(n,i,t,l){return new jD(n,i,t,l)}function vl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ka(n,i){var t=n.alternate;return t===null?(t=Ne(n.tag,i,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=i,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,i=n.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function Xf(n,i){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,i=t.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Ir(n,i,t,l,c,d){var S=0;if(l=n,typeof n=="function")vl(n)&&(S=1);else if(typeof n=="string")S=$O(n,t,on.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case tn:return n=Ne(31,t,i,c),n.elementType=tn,n.lanes=d,n;case D:return ki(t.children,c,d,i);case R:S=8,c|=24;break;case b:return n=Ne(12,t,i,c|2),n.elementType=b,n.lanes=d,n;case I:return n=Ne(13,t,i,c),n.elementType=I,n.lanes=d,n;case U:return n=Ne(19,t,i,c),n.elementType=U,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case p:case A:S=10;break n;case w:S=9;break n;case P:S=11;break n;case F:S=14;break n;case Q:S=16,l=null;break n}S=29,t=Error(u(130,n===null?"null":typeof n,"")),l=null}return i=Ne(S,t,i,c),i.elementType=n,i.type=l,i.lanes=d,i}function ki(n,i,t,l){return n=Ne(7,n,l,i),n.lanes=t,n}function kl(n,i,t){return n=Ne(6,n,null,i),n.lanes=t,n}function yl(n,i,t){return i=Ne(4,n.children!==null?n.children:[],n.key,i),i.lanes=t,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ao=[],io=0,Rr=null,Br=0,Ue=[],Ye=0,yi=null,ya=1,pa="";function pi(n,i){ao[io++]=Br,ao[io++]=Rr,Rr=n,Br=i}function qf(n,i,t){Ue[Ye++]=ya,Ue[Ye++]=pa,Ue[Ye++]=yi,yi=n;var l=ya;n=pa;var c=32-Re(l)-1;l&=~(1<<c),t+=1;var d=32-Re(i)+c;if(30<d){var S=c-c%5;d=(l&(1<<S)-1).toString(32),l>>=S,c-=S,ya=1<<32-Re(i)+c|t<<c|l,pa=d+n}else ya=1<<d|t<<c|l,pa=n}function pl(n){n.return!==null&&(pi(n,1),qf(n,1,0))}function bl(n){for(;n===Rr;)Rr=ao[--io],ao[io]=null,Br=ao[--io],ao[io]=null;for(;n===yi;)yi=Ue[--Ye],Ue[Ye]=null,pa=Ue[--Ye],Ue[Ye]=null,ya=Ue[--Ye],Ue[Ye]=null}var be=null,Jn=null,Nn=!1,bi=null,oa=!1,Tl=Error(u(519));function Ti(n){var i=Error(u(418,""));throw it($e(i,n)),Tl}function Qf(n){var i=n.stateNode,t=n.type,l=n.memoizedProps;switch(i[ve]=n,i[Me]=l,t){case"dialog":wn("cancel",i),wn("close",i);break;case"iframe":case"object":case"embed":wn("load",i);break;case"video":case"audio":for(t=0;t<wt.length;t++)wn(wt[t],i);break;case"source":wn("error",i);break;case"img":case"image":case"link":wn("error",i),wn("load",i);break;case"details":wn("toggle",i);break;case"input":wn("invalid",i),ff(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),kr(i);break;case"select":wn("invalid",i);break;case"textarea":wn("invalid",i),Sf(i,l.value,l.defaultValue,l.children),kr(i)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||i.textContent===""+t||l.suppressHydrationWarning===!0||Sv(i.textContent,t)?(l.popover!=null&&(wn("beforetoggle",i),wn("toggle",i)),l.onScroll!=null&&wn("scroll",i),l.onScrollEnd!=null&&wn("scrollend",i),l.onClick!=null&&(i.onclick=du),i=!0):i=!1,i||Ti(n)}function ng(n){for(be=n.return;be;)switch(be.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:be=be.return}}function et(n){if(n!==be)return!1;if(!Nn)return ng(n),Nn=!0,!1;var i=n.tag,t;if((t=i!==3&&i!==27)&&((t=i===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||_c(n.type,n.memoizedProps)),t=!t),t&&Jn&&Ti(n),ng(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(i===0){Jn=qe(n.nextSibling);break n}i--}else t!=="$"&&t!=="$!"&&t!=="$?"||i++;n=n.nextSibling}Jn=null}}else i===27?(i=Jn,ii(n.type)?(n=xc,xc=null,Jn=n):Jn=i):Jn=be?qe(n.stateNode.nextSibling):null;return!0}function at(){Jn=be=null,Nn=!1}function eg(){var n=bi;return n!==null&&(we===null?we=n:we.push.apply(we,n),bi=null),n}function it(n){bi===null?bi=[n]:bi.push(n)}var Ml=V(null),Mi=null,ba=null;function xa(n,i,t){X(Ml,i._currentValue),i._currentValue=t}function Ta(n){n._currentValue=Ml.current,J(Ml)}function Al(n,i,t){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===t)break;n=n.return}}function Dl(n,i,t,l){var c=n.child;for(c!==null&&(c.return=n);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;n:for(;d!==null;){var k=d;d=c;for(var O=0;O<i.length;O++)if(k.context===i[O]){d.lanes|=t,k=d.alternate,k!==null&&(k.lanes|=t),Al(d.return,t,n),l||(S=null);break n}d=k.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(u(341));S.lanes|=t,d=S.alternate,d!==null&&(d.lanes|=t),Al(S,t,n),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===n){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function ot(n,i,t,l){n=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(u(387));if(S=S.memoizedProps,S!==null){var k=c.type;Be(c.pendingProps.value,S.value)||(n!==null?n.push(k):n=[k])}}else if(c===Zn.current){if(S=c.alternate,S===null)throw Error(u(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(n!==null?n.push(Nt):n=[Nt])}c=c.return}n!==null&&Dl(i,n,t,l),i.flags|=262144}function Nr(n){for(n=n.firstContext;n!==null;){if(!Be(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ai(n){Mi=n,ba=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ke(n){return ag(Mi,n)}function Hr(n,i){return Mi===null&&Ai(n),ag(n,i)}function ag(n,i){var t=i._currentValue;if(i={context:i,memoizedValue:t,next:null},ba===null){if(n===null)throw Error(u(308));ba=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ba=ba.next=i;return t}var xD=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(t,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(t){return t()})}},$D=e.unstable_scheduleCallback,FD=e.unstable_NormalPriority,te={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ol(){return{controller:new xD,data:new Map,refCount:0}}function tt(n){n.refCount--,n.refCount===0&&$D(FD,function(){n.controller.abort()})}var rt=null,wl=0,oo=0,to=null;function UD(n,i){if(rt===null){var t=rt=[];wl=0,oo=Kc(),to={status:"pending",value:void 0,then:function(l){t.push(l)}}}return wl++,i.then(ig,ig),i}function ig(){if(--wl===0&&rt!==null){to!==null&&(to.status="fulfilled");var n=rt;rt=null,oo=0,to=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function YD(n,i){var t=[],l={status:"pending",value:null,reason:null,then:function(c){t.push(c)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var c=0;c<t.length;c++)(0,t[c])(i)},function(c){for(l.status="rejected",l.reason=c,c=0;c<t.length;c++)(0,t[c])(void 0)}),l}var og=L.S;L.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&UD(n,i),og!==null&&og(n,i)};var Di=V(null);function Cl(){var n=Di.current;return n!==null?n:$n.pooledCache}function Gr(n,i){i===null?X(Di,Di.current):X(Di,i.pool)}function tg(){var n=Cl();return n===null?null:{parent:te._currentValue,pool:n}}var ut=Error(u(460)),rg=Error(u(474)),Er=Error(u(542)),Kl={then:function(){}};function ug(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Pr(){}function sg(n,i,t){switch(t=n[t],t===void 0?n.push(i):t!==i&&(i.then(Pr,Pr),i=t),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,cg(n),n;default:if(typeof i.status=="string")i.then(Pr,Pr);else{if(n=$n,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=l}},function(l){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,cg(n),n}throw st=i,ut}}var st=null;function lg(){if(st===null)throw Error(u(459));var n=st;return st=null,n}function cg(n){if(n===ut||n===Er)throw Error(u(483))}var $a=!1;function Il(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rl(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Fa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ua(n,i,t){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Pn&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,i=Kr(n),Jf(n,null,t),i}return Cr(n,l,i,t),Kr(n)}function lt(n,i,t){if(i=i.updateQueue,i!==null&&(i=i.shared,(t&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,t|=l,i.lanes=t,af(n,t)}}function Bl(n,i){var t=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var c=null,d=null;if(t=t.firstBaseUpdate,t!==null){do{var S={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,t=t.next}while(t!==null);d===null?c=d=i:d=d.next=i}else c=d=i;t={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=i:n.next=i,t.lastBaseUpdate=i}var Nl=!1;function ct(){if(Nl){var n=to;if(n!==null)throw n}}function ht(n,i,t,l){Nl=!1;var c=n.updateQueue;$a=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,k=c.shared.pending;if(k!==null){c.shared.pending=null;var O=k,E=O.next;O.next=null,S===null?d=E:S.next=E,S=O;var j=n.alternate;j!==null&&(j=j.updateQueue,k=j.lastBaseUpdate,k!==S&&(k===null?j.firstBaseUpdate=E:k.next=E,j.lastBaseUpdate=O))}if(d!==null){var Y=c.baseState;S=0,j=E=O=null,k=d;do{var _=k.lane&-536870913,z=_!==k.lane;if(z?(Kn&_)===_:(l&_)===_){_!==0&&_===oo&&(Nl=!0),j!==null&&(j=j.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});n:{var mn=n,cn=k;_=i;var jn=t;switch(cn.tag){case 1:if(mn=cn.payload,typeof mn=="function"){Y=mn.call(jn,Y,_);break n}Y=mn;break n;case 3:mn.flags=mn.flags&-65537|128;case 0:if(mn=cn.payload,_=typeof mn=="function"?mn.call(jn,Y,_):mn,_==null)break n;Y=v({},Y,_);break n;case 2:$a=!0}}_=k.callback,_!==null&&(n.flags|=64,z&&(n.flags|=8192),z=c.callbacks,z===null?c.callbacks=[_]:z.push(_))}else z={lane:_,tag:k.tag,payload:k.payload,callback:k.callback,next:null},j===null?(E=j=z,O=Y):j=j.next=z,S|=_;if(k=k.next,k===null){if(k=c.shared.pending,k===null)break;z=k,k=z.next,z.next=null,c.lastBaseUpdate=z,c.shared.pending=null}}while(!0);j===null&&(O=Y),c.baseState=O,c.firstBaseUpdate=E,c.lastBaseUpdate=j,d===null&&(c.shared.lanes=0),Qa|=S,n.lanes=S,n.memoizedState=Y}}function hg(n,i){if(typeof n!="function")throw Error(u(191,n));n.call(i)}function dg(n,i){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)hg(t[n],i)}var ro=V(null),_r=V(0);function mg(n,i){n=Ka,X(_r,n),X(ro,i),Ka=n|i.baseLanes}function Hl(){X(_r,Ka),X(ro,ro.current)}function Gl(){Ka=_r.current,J(ro),J(_r)}var Ya=0,Tn=null,Ln=null,ae=null,Lr=!1,uo=!1,Oi=!1,zr=0,dt=0,so=null,VD=0;function ne(){throw Error(u(321))}function El(n,i){if(i===null)return!1;for(var t=0;t<i.length&&t<n.length;t++)if(!Be(n[t],i[t]))return!1;return!0}function Pl(n,i,t,l,c,d){return Ya=d,Tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=n===null||n.memoizedState===null?Jg:Xg,Oi=!1,d=t(l,c),Oi=!1,uo&&(d=gg(i,t,l,c)),fg(n),d}function fg(n){L.H=Yr;var i=Ln!==null&&Ln.next!==null;if(Ya=0,ae=Ln=Tn=null,Lr=!1,dt=0,so=null,i)throw Error(u(300));n===null||le||(n=n.dependencies,n!==null&&Nr(n)&&(le=!0))}function gg(n,i,t,l){Tn=n;var c=0;do{if(uo&&(so=null),dt=0,uo=!1,25<=c)throw Error(u(301));if(c+=1,ae=Ln=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=nO,d=i(t,l)}while(uo);return d}function WD(){var n=L.H,i=n.useState()[0];return i=typeof i.then=="function"?mt(i):i,n=n.useState()[0],(Ln!==null?Ln.memoizedState:null)!==n&&(Tn.flags|=1024),i}function _l(){var n=zr!==0;return zr=0,n}function Ll(n,i,t){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~t}function zl(n){if(Lr){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Lr=!1}Ya=0,ae=Ln=Tn=null,uo=!1,dt=zr=0,so=null}function De(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Tn.memoizedState=ae=n:ae=ae.next=n,ae}function ie(){if(Ln===null){var n=Tn.alternate;n=n!==null?n.memoizedState:null}else n=Ln.next;var i=ae===null?Tn.memoizedState:ae.next;if(i!==null)ae=i,Ln=n;else{if(n===null)throw Tn.alternate===null?Error(u(467)):Error(u(310));Ln=n,n={memoizedState:Ln.memoizedState,baseState:Ln.baseState,baseQueue:Ln.baseQueue,queue:Ln.queue,next:null},ae===null?Tn.memoizedState=ae=n:ae=ae.next=n}return ae}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mt(n){var i=dt;return dt+=1,so===null&&(so=[]),n=sg(so,n,i),i=Tn,(ae===null?i.memoizedState:ae.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?Jg:Xg),n}function jr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return mt(n);if(n.$$typeof===A)return ke(n)}throw Error(u(438,String(n)))}function xl(n){var i=null,t=Tn.updateQueue;if(t!==null&&(i=t.memoCache),i==null){var l=Tn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),t===null&&(t=jl(),Tn.updateQueue=t),t.memoCache=i,t=i.data[i.index],t===void 0)for(t=i.data[i.index]=Array(n),l=0;l<n;l++)t[l]=bn;return i.index++,t}function Ma(n,i){return typeof i=="function"?i(n):i}function xr(n){var i=ie();return $l(i,Ln,n)}function $l(n,i,t){var l=n.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=t;var c=n.baseQueue,d=l.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}i.baseQueue=c=d,l.pending=null}if(d=n.baseState,c===null)n.memoizedState=d;else{i=c.next;var k=S=null,O=null,E=i,j=!1;do{var Y=E.lane&-536870913;if(Y!==E.lane?(Kn&Y)===Y:(Ya&Y)===Y){var _=E.revertLane;if(_===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),Y===oo&&(j=!0);else if((Ya&_)===_){E=E.next,_===oo&&(j=!0);continue}else Y={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},O===null?(k=O=Y,S=d):O=O.next=Y,Tn.lanes|=_,Qa|=_;Y=E.action,Oi&&t(d,Y),d=E.hasEagerState?E.eagerState:t(d,Y)}else _={lane:Y,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},O===null?(k=O=_,S=d):O=O.next=_,Tn.lanes|=Y,Qa|=Y;E=E.next}while(E!==null&&E!==i);if(O===null?S=d:O.next=k,!Be(d,n.memoizedState)&&(le=!0,j&&(t=to,t!==null)))throw t;n.memoizedState=d,n.baseState=S,n.baseQueue=O,l.lastRenderedState=d}return c===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Fl(n){var i=ie(),t=i.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=n;var l=t.dispatch,c=t.pending,d=i.memoizedState;if(c!==null){t.pending=null;var S=c=c.next;do d=n(d,S.action),S=S.next;while(S!==c);Be(d,i.memoizedState)||(le=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),t.lastRenderedState=d}return[d,l]}function Sg(n,i,t){var l=Tn,c=ie(),d=Nn;if(d){if(t===void 0)throw Error(u(407));t=t()}else t=i();var S=!Be((Ln||c).memoizedState,t);S&&(c.memoizedState=t,le=!0),c=c.queue;var k=yg.bind(null,l,c,n);if(ft(2048,8,k,[n]),c.getSnapshot!==i||S||ae!==null&&ae.memoizedState.tag&1){if(l.flags|=2048,lo(9,$r(),kg.bind(null,l,c,t,i),null),$n===null)throw Error(u(349));d||(Ya&124)!==0||vg(l,i,t)}return t}function vg(n,i,t){n.flags|=16384,n={getSnapshot:i,value:t},i=Tn.updateQueue,i===null?(i=jl(),Tn.updateQueue=i,i.stores=[n]):(t=i.stores,t===null?i.stores=[n]:t.push(n))}function kg(n,i,t,l){i.value=t,i.getSnapshot=l,pg(i)&&bg(n)}function yg(n,i,t){return t(function(){pg(i)&&bg(n)})}function pg(n){var i=n.getSnapshot;n=n.value;try{var t=i();return!Be(n,t)}catch{return!0}}function bg(n){var i=no(n,2);i!==null&&_e(i,n,2)}function Ul(n){var i=De();if(typeof n=="function"){var t=n;if(n=t(),Oi){La(!0);try{t()}finally{La(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},i}function Tg(n,i,t,l){return n.baseState=t,$l(n,Ln,typeof l=="function"?l:Ma)}function ZD(n,i,t,l,c){if(Ur(n))throw Error(u(485));if(n=i.action,n!==null){var d={payload:c,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};L.T!==null?t(!0):d.isTransition=!1,l(d),t=i.pending,t===null?(d.next=i.pending=d,Mg(i,d)):(d.next=t.next,i.pending=t.next=d)}}function Mg(n,i){var t=i.action,l=i.payload,c=n.state;if(i.isTransition){var d=L.T,S={};L.T=S;try{var k=t(c,l),O=L.S;O!==null&&O(S,k),Ag(n,i,k)}catch(E){Yl(n,i,E)}finally{L.T=d}}else try{d=t(c,l),Ag(n,i,d)}catch(E){Yl(n,i,E)}}function Ag(n,i,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Dg(n,i,l)},function(l){return Yl(n,i,l)}):Dg(n,i,t)}function Dg(n,i,t){i.status="fulfilled",i.value=t,Og(i),n.state=t,i=n.pending,i!==null&&(t=i.next,t===i?n.pending=null:(t=t.next,i.next=t,Mg(n,t)))}function Yl(n,i,t){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=t,Og(i),i=i.next;while(i!==l)}n.action=null}function Og(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function wg(n,i){return i}function Cg(n,i){if(Nn){var t=$n.formState;if(t!==null){n:{var l=Tn;if(Nn){if(Jn){e:{for(var c=Jn,d=oa;c.nodeType!==8;){if(!d){c=null;break e}if(c=qe(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Jn=qe(c.nextSibling),l=c.data==="F!";break n}}Ti(l)}l=!1}l&&(i=t[0])}}return t=De(),t.memoizedState=t.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wg,lastRenderedState:i},t.queue=l,t=Vg.bind(null,Tn,l),l.dispatch=t,l=Ul(!1),d=Xl.bind(null,Tn,!1,l.queue),l=De(),c={state:i,dispatch:null,action:n,pending:null},l.queue=c,t=ZD.bind(null,Tn,c,d,t),c.dispatch=t,l.memoizedState=n,[i,t,!1]}function Kg(n){var i=ie();return Ig(i,Ln,n)}function Ig(n,i,t){if(i=$l(n,i,wg)[0],n=xr(Ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=mt(i)}catch(S){throw S===ut?Er:S}else l=i;i=ie();var c=i.queue,d=c.dispatch;return t!==i.memoizedState&&(Tn.flags|=2048,lo(9,$r(),JD.bind(null,c,t),null)),[l,d,n]}function JD(n,i){n.action=i}function Rg(n){var i=ie(),t=Ln;if(t!==null)return Ig(i,t,n);ie(),i=i.memoizedState,t=ie();var l=t.queue.dispatch;return t.memoizedState=n,[i,l,!1]}function lo(n,i,t,l){return n={tag:n,create:t,deps:l,inst:i,next:null},i=Tn.updateQueue,i===null&&(i=jl(),Tn.updateQueue=i),t=i.lastEffect,t===null?i.lastEffect=n.next=n:(l=t.next,t.next=n,n.next=l,i.lastEffect=n),n}function $r(){return{destroy:void 0,resource:void 0}}function Bg(){return ie().memoizedState}function Fr(n,i,t,l){var c=De();l=l===void 0?null:l,Tn.flags|=n,c.memoizedState=lo(1|i,$r(),t,l)}function ft(n,i,t,l){var c=ie();l=l===void 0?null:l;var d=c.memoizedState.inst;Ln!==null&&l!==null&&El(l,Ln.memoizedState.deps)?c.memoizedState=lo(i,d,t,l):(Tn.flags|=n,c.memoizedState=lo(1|i,d,t,l))}function Ng(n,i){Fr(8390656,8,n,i)}function Hg(n,i){ft(2048,8,n,i)}function Gg(n,i){return ft(4,2,n,i)}function Eg(n,i){return ft(4,4,n,i)}function Pg(n,i){if(typeof i=="function"){n=n();var t=i(n);return function(){typeof t=="function"?t():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _g(n,i,t){t=t!=null?t.concat([n]):null,ft(4,4,Pg.bind(null,i,n),t)}function Vl(){}function Lg(n,i){var t=ie();i=i===void 0?null:i;var l=t.memoizedState;return i!==null&&El(i,l[1])?l[0]:(t.memoizedState=[n,i],n)}function zg(n,i){var t=ie();i=i===void 0?null:i;var l=t.memoizedState;if(i!==null&&El(i,l[1]))return l[0];if(l=n(),Oi){La(!0);try{n()}finally{La(!1)}}return t.memoizedState=[l,i],l}function Wl(n,i,t){return t===void 0||(Ya&1073741824)!==0?n.memoizedState=i:(n.memoizedState=t,n=$S(),Tn.lanes|=n,Qa|=n,t)}function jg(n,i,t,l){return Be(t,i)?t:ro.current!==null?(n=Wl(n,t,l),Be(n,i)||(le=!0),n):(Ya&42)===0?(le=!0,n.memoizedState=t):(n=$S(),Tn.lanes|=n,Qa|=n,i)}function xg(n,i,t,l,c){var d=Z.p;Z.p=d!==0&&8>d?d:8;var S=L.T,k={};L.T=k,Xl(n,!1,i,t);try{var O=c(),E=L.S;if(E!==null&&E(k,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var j=YD(O,l);gt(n,i,j,Pe(n))}else gt(n,i,l,Pe(n))}catch(Y){gt(n,i,{then:function(){},status:"rejected",reason:Y},Pe())}finally{Z.p=d,L.T=S}}function XD(){}function Zl(n,i,t,l){if(n.tag!==5)throw Error(u(476));var c=$g(n).queue;xg(n,c,i,en,t===null?XD:function(){return Fg(n),t(l)})}function $g(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:en,baseState:en,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:en},next:null};var t={};return i.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Fg(n){var i=$g(n).next.queue;gt(n,i,{},Pe())}function Jl(){return ke(Nt)}function Ug(){return ie().memoizedState}function Yg(){return ie().memoizedState}function qD(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var t=Pe();n=Fa(t);var l=Ua(i,n,t);l!==null&&(_e(l,i,t),lt(l,i,t)),i={cache:Ol()},n.payload=i;return}i=i.return}}function QD(n,i,t){var l=Pe();t={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Ur(n)?Wg(i,t):(t=Sl(n,i,t,l),t!==null&&(_e(t,n,l),Zg(t,i,l)))}function Vg(n,i,t){var l=Pe();gt(n,i,t,l)}function gt(n,i,t,l){var c={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ur(n))Wg(i,c);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,k=d(S,t);if(c.hasEagerState=!0,c.eagerState=k,Be(k,S))return Cr(n,i,c,0),$n===null&&wr(),!1}catch{}finally{}if(t=Sl(n,i,c,l),t!==null)return _e(t,n,l),Zg(t,i,l),!0}return!1}function Xl(n,i,t,l){if(l={lane:2,revertLane:Kc(),action:l,hasEagerState:!1,eagerState:null,next:null},Ur(n)){if(i)throw Error(u(479))}else i=Sl(n,t,l,2),i!==null&&_e(i,n,2)}function Ur(n){var i=n.alternate;return n===Tn||i!==null&&i===Tn}function Wg(n,i){uo=Lr=!0;var t=n.pending;t===null?i.next=i:(i.next=t.next,t.next=i),n.pending=i}function Zg(n,i,t){if((t&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,t|=l,i.lanes=t,af(n,t)}}var Yr={readContext:ke,use:jr,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useLayoutEffect:ne,useInsertionEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useSyncExternalStore:ne,useId:ne,useHostTransitionStatus:ne,useFormState:ne,useActionState:ne,useOptimistic:ne,useMemoCache:ne,useCacheRefresh:ne},Jg={readContext:ke,use:jr,useCallback:function(n,i){return De().memoizedState=[n,i===void 0?null:i],n},useContext:ke,useEffect:Ng,useImperativeHandle:function(n,i,t){t=t!=null?t.concat([n]):null,Fr(4194308,4,Pg.bind(null,i,n),t)},useLayoutEffect:function(n,i){return Fr(4194308,4,n,i)},useInsertionEffect:function(n,i){Fr(4,2,n,i)},useMemo:function(n,i){var t=De();i=i===void 0?null:i;var l=n();if(Oi){La(!0);try{n()}finally{La(!1)}}return t.memoizedState=[l,i],l},useReducer:function(n,i,t){var l=De();if(t!==void 0){var c=t(i);if(Oi){La(!0);try{t(i)}finally{La(!1)}}}else c=i;return l.memoizedState=l.baseState=c,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:c},l.queue=n,n=n.dispatch=QD.bind(null,Tn,n),[l.memoizedState,n]},useRef:function(n){var i=De();return n={current:n},i.memoizedState=n},useState:function(n){n=Ul(n);var i=n.queue,t=Vg.bind(null,Tn,i);return i.dispatch=t,[n.memoizedState,t]},useDebugValue:Vl,useDeferredValue:function(n,i){var t=De();return Wl(t,n,i)},useTransition:function(){var n=Ul(!1);return n=xg.bind(null,Tn,n.queue,!0,!1),De().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,t){var l=Tn,c=De();if(Nn){if(t===void 0)throw Error(u(407));t=t()}else{if(t=i(),$n===null)throw Error(u(349));(Kn&124)!==0||vg(l,i,t)}c.memoizedState=t;var d={value:t,getSnapshot:i};return c.queue=d,Ng(yg.bind(null,l,d,n),[n]),l.flags|=2048,lo(9,$r(),kg.bind(null,l,d,t,i),null),t},useId:function(){var n=De(),i=$n.identifierPrefix;if(Nn){var t=pa,l=ya;t=(l&~(1<<32-Re(l)-1)).toString(32)+t,i="«"+i+"R"+t,t=zr++,0<t&&(i+="H"+t.toString(32)),i+="»"}else t=VD++,i="«"+i+"r"+t.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Jl,useFormState:Cg,useActionState:Cg,useOptimistic:function(n){var i=De();i.memoizedState=i.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=t,i=Xl.bind(null,Tn,!0,t),t.dispatch=i,[n,i]},useMemoCache:xl,useCacheRefresh:function(){return De().memoizedState=qD.bind(null,Tn)}},Xg={readContext:ke,use:jr,useCallback:Lg,useContext:ke,useEffect:Hg,useImperativeHandle:_g,useInsertionEffect:Gg,useLayoutEffect:Eg,useMemo:zg,useReducer:xr,useRef:Bg,useState:function(){return xr(Ma)},useDebugValue:Vl,useDeferredValue:function(n,i){var t=ie();return jg(t,Ln.memoizedState,n,i)},useTransition:function(){var n=xr(Ma)[0],i=ie().memoizedState;return[typeof n=="boolean"?n:mt(n),i]},useSyncExternalStore:Sg,useId:Ug,useHostTransitionStatus:Jl,useFormState:Kg,useActionState:Kg,useOptimistic:function(n,i){var t=ie();return Tg(t,Ln,n,i)},useMemoCache:xl,useCacheRefresh:Yg},nO={readContext:ke,use:jr,useCallback:Lg,useContext:ke,useEffect:Hg,useImperativeHandle:_g,useInsertionEffect:Gg,useLayoutEffect:Eg,useMemo:zg,useReducer:Fl,useRef:Bg,useState:function(){return Fl(Ma)},useDebugValue:Vl,useDeferredValue:function(n,i){var t=ie();return Ln===null?Wl(t,n,i):jg(t,Ln.memoizedState,n,i)},useTransition:function(){var n=Fl(Ma)[0],i=ie().memoizedState;return[typeof n=="boolean"?n:mt(n),i]},useSyncExternalStore:Sg,useId:Ug,useHostTransitionStatus:Jl,useFormState:Rg,useActionState:Rg,useOptimistic:function(n,i){var t=ie();return Ln!==null?Tg(t,Ln,n,i):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:xl,useCacheRefresh:Yg},co=null,St=0;function Vr(n){var i=St;return St+=1,co===null&&(co=[]),sg(co,n,i)}function vt(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Wr(n,i){throw i.$$typeof===y?Error(u(525)):(n=Object.prototype.toString.call(i),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function qg(n){var i=n._init;return i(n._payload)}function Qg(n){function i(N,B){if(n){var H=N.deletions;H===null?(N.deletions=[B],N.flags|=16):H.push(B)}}function t(N,B){if(!n)return null;for(;B!==null;)i(N,B),B=B.sibling;return null}function l(N){for(var B=new Map;N!==null;)N.key!==null?B.set(N.key,N):B.set(N.index,N),N=N.sibling;return B}function c(N,B){return N=ka(N,B),N.index=0,N.sibling=null,N}function d(N,B,H){return N.index=H,n?(H=N.alternate,H!==null?(H=H.index,H<B?(N.flags|=67108866,B):H):(N.flags|=67108866,B)):(N.flags|=1048576,B)}function S(N){return n&&N.alternate===null&&(N.flags|=67108866),N}function k(N,B,H,$){return B===null||B.tag!==6?(B=kl(H,N.mode,$),B.return=N,B):(B=c(B,H),B.return=N,B)}function O(N,B,H,$){var an=H.type;return an===D?j(N,B,H.props.children,$,H.key):B!==null&&(B.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===Q&&qg(an)===B.type)?(B=c(B,H.props),vt(B,H),B.return=N,B):(B=Ir(H.type,H.key,H.props,null,N.mode,$),vt(B,H),B.return=N,B)}function E(N,B,H,$){return B===null||B.tag!==4||B.stateNode.containerInfo!==H.containerInfo||B.stateNode.implementation!==H.implementation?(B=yl(H,N.mode,$),B.return=N,B):(B=c(B,H.children||[]),B.return=N,B)}function j(N,B,H,$,an){return B===null||B.tag!==7?(B=ki(H,N.mode,$,an),B.return=N,B):(B=c(B,H),B.return=N,B)}function Y(N,B,H){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=kl(""+B,N.mode,H),B.return=N,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case M:return H=Ir(B.type,B.key,B.props,null,N.mode,H),vt(H,B),H.return=N,H;case C:return B=yl(B,N.mode,H),B.return=N,B;case Q:var $=B._init;return B=$(B._payload),Y(N,B,H)}if(fn(B)||nn(B))return B=ki(B,N.mode,H,null),B.return=N,B;if(typeof B.then=="function")return Y(N,Vr(B),H);if(B.$$typeof===A)return Y(N,Hr(N,B),H);Wr(N,B)}return null}function _(N,B,H,$){var an=B!==null?B.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return an!==null?null:k(N,B,""+H,$);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return H.key===an?O(N,B,H,$):null;case C:return H.key===an?E(N,B,H,$):null;case Q:return an=H._init,H=an(H._payload),_(N,B,H,$)}if(fn(H)||nn(H))return an!==null?null:j(N,B,H,$,null);if(typeof H.then=="function")return _(N,B,Vr(H),$);if(H.$$typeof===A)return _(N,B,Hr(N,H),$);Wr(N,H)}return null}function z(N,B,H,$,an){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return N=N.get(H)||null,k(B,N,""+$,an);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return N=N.get($.key===null?H:$.key)||null,O(B,N,$,an);case C:return N=N.get($.key===null?H:$.key)||null,E(B,N,$,an);case Q:var Dn=$._init;return $=Dn($._payload),z(N,B,H,$,an)}if(fn($)||nn($))return N=N.get(H)||null,j(B,N,$,an,null);if(typeof $.then=="function")return z(N,B,H,Vr($),an);if($.$$typeof===A)return z(N,B,H,Hr(B,$),an);Wr(B,$)}return null}function mn(N,B,H,$){for(var an=null,Dn=null,rn=B,hn=B=0,he=null;rn!==null&&hn<H.length;hn++){rn.index>hn?(he=rn,rn=null):he=rn.sibling;var Bn=_(N,rn,H[hn],$);if(Bn===null){rn===null&&(rn=he);break}n&&rn&&Bn.alternate===null&&i(N,rn),B=d(Bn,B,hn),Dn===null?an=Bn:Dn.sibling=Bn,Dn=Bn,rn=he}if(hn===H.length)return t(N,rn),Nn&&pi(N,hn),an;if(rn===null){for(;hn<H.length;hn++)rn=Y(N,H[hn],$),rn!==null&&(B=d(rn,B,hn),Dn===null?an=rn:Dn.sibling=rn,Dn=rn);return Nn&&pi(N,hn),an}for(rn=l(rn);hn<H.length;hn++)he=z(rn,N,hn,H[hn],$),he!==null&&(n&&he.alternate!==null&&rn.delete(he.key===null?hn:he.key),B=d(he,B,hn),Dn===null?an=he:Dn.sibling=he,Dn=he);return n&&rn.forEach(function(si){return i(N,si)}),Nn&&pi(N,hn),an}function cn(N,B,H,$){if(H==null)throw Error(u(151));for(var an=null,Dn=null,rn=B,hn=B=0,he=null,Bn=H.next();rn!==null&&!Bn.done;hn++,Bn=H.next()){rn.index>hn?(he=rn,rn=null):he=rn.sibling;var si=_(N,rn,Bn.value,$);if(si===null){rn===null&&(rn=he);break}n&&rn&&si.alternate===null&&i(N,rn),B=d(si,B,hn),Dn===null?an=si:Dn.sibling=si,Dn=si,rn=he}if(Bn.done)return t(N,rn),Nn&&pi(N,hn),an;if(rn===null){for(;!Bn.done;hn++,Bn=H.next())Bn=Y(N,Bn.value,$),Bn!==null&&(B=d(Bn,B,hn),Dn===null?an=Bn:Dn.sibling=Bn,Dn=Bn);return Nn&&pi(N,hn),an}for(rn=l(rn);!Bn.done;hn++,Bn=H.next())Bn=z(rn,N,hn,Bn.value,$),Bn!==null&&(n&&Bn.alternate!==null&&rn.delete(Bn.key===null?hn:Bn.key),B=d(Bn,B,hn),Dn===null?an=Bn:Dn.sibling=Bn,Dn=Bn);return n&&rn.forEach(function(ew){return i(N,ew)}),Nn&&pi(N,hn),an}function jn(N,B,H,$){if(typeof H=="object"&&H!==null&&H.type===D&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case M:n:{for(var an=H.key;B!==null;){if(B.key===an){if(an=H.type,an===D){if(B.tag===7){t(N,B.sibling),$=c(B,H.props.children),$.return=N,N=$;break n}}else if(B.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===Q&&qg(an)===B.type){t(N,B.sibling),$=c(B,H.props),vt($,H),$.return=N,N=$;break n}t(N,B);break}else i(N,B);B=B.sibling}H.type===D?($=ki(H.props.children,N.mode,$,H.key),$.return=N,N=$):($=Ir(H.type,H.key,H.props,null,N.mode,$),vt($,H),$.return=N,N=$)}return S(N);case C:n:{for(an=H.key;B!==null;){if(B.key===an)if(B.tag===4&&B.stateNode.containerInfo===H.containerInfo&&B.stateNode.implementation===H.implementation){t(N,B.sibling),$=c(B,H.children||[]),$.return=N,N=$;break n}else{t(N,B);break}else i(N,B);B=B.sibling}$=yl(H,N.mode,$),$.return=N,N=$}return S(N);case Q:return an=H._init,H=an(H._payload),jn(N,B,H,$)}if(fn(H))return mn(N,B,H,$);if(nn(H)){if(an=nn(H),typeof an!="function")throw Error(u(150));return H=an.call(H),cn(N,B,H,$)}if(typeof H.then=="function")return jn(N,B,Vr(H),$);if(H.$$typeof===A)return jn(N,B,Hr(N,H),$);Wr(N,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,B!==null&&B.tag===6?(t(N,B.sibling),$=c(B,H),$.return=N,N=$):(t(N,B),$=kl(H,N.mode,$),$.return=N,N=$),S(N)):t(N,B)}return function(N,B,H,$){try{St=0;var an=jn(N,B,H,$);return co=null,an}catch(rn){if(rn===ut||rn===Er)throw rn;var Dn=Ne(29,rn,null,N.mode);return Dn.lanes=$,Dn.return=N,Dn}finally{}}}var ho=Qg(!0),nS=Qg(!1),Ve=V(null),ta=null;function Va(n){var i=n.alternate;X(re,re.current&1),X(Ve,n),ta===null&&(i===null||ro.current!==null||i.memoizedState!==null)&&(ta=n)}function eS(n){if(n.tag===22){if(X(re,re.current),X(Ve,n),ta===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(ta=n)}}else Wa()}function Wa(){X(re,re.current),X(Ve,Ve.current)}function Aa(n){J(Ve),ta===n&&(ta=null),J(re)}var re=V(0);function Zr(n){for(var i=n;i!==null;){if(i.tag===13){var t=i.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||jc(t)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ql(n,i,t,l){i=n.memoizedState,t=t(l,i),t=t==null?i:v({},i,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ql={enqueueSetState:function(n,i,t){n=n._reactInternals;var l=Pe(),c=Fa(l);c.payload=i,t!=null&&(c.callback=t),i=Ua(n,c,l),i!==null&&(_e(i,n,l),lt(i,n,l))},enqueueReplaceState:function(n,i,t){n=n._reactInternals;var l=Pe(),c=Fa(l);c.tag=1,c.payload=i,t!=null&&(c.callback=t),i=Ua(n,c,l),i!==null&&(_e(i,n,l),lt(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var t=Pe(),l=Fa(t);l.tag=2,i!=null&&(l.callback=i),i=Ua(n,l,t),i!==null&&(_e(i,n,t),lt(i,n,t))}};function aS(n,i,t,l,c,d,S){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Qo(t,l)||!Qo(c,d):!0}function iS(n,i,t,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(t,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(t,l),i.state!==n&&Ql.enqueueReplaceState(i,i.state,null)}function wi(n,i){var t=i;if("ref"in i){t={};for(var l in i)l!=="ref"&&(t[l]=i[l])}if(n=n.defaultProps){t===i&&(t=v({},t));for(var c in n)t[c]===void 0&&(t[c]=n[c])}return t}var Jr=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function oS(n){Jr(n)}function tS(n){console.error(n)}function rS(n){Jr(n)}function Xr(n,i){try{var t=n.onUncaughtError;t(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function uS(n,i,t){try{var l=n.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nc(n,i,t){return t=Fa(t),t.tag=3,t.payload={element:null},t.callback=function(){Xr(n,i)},t}function sS(n){return n=Fa(n),n.tag=3,n}function lS(n,i,t,l){var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=l.value;n.payload=function(){return c(d)},n.callback=function(){uS(i,t,l)}}var S=t.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(n.callback=function(){uS(i,t,l),typeof c!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function eO(n,i,t,l,c){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=t.alternate,i!==null&&ot(i,t,c,!0),t=Ve.current,t!==null){switch(t.tag){case 13:return ta===null?Ac():t.alternate===null&&Xn===0&&(Xn=3),t.flags&=-257,t.flags|=65536,t.lanes=c,l===Kl?t.flags|=16384:(i=t.updateQueue,i===null?t.updateQueue=new Set([l]):i.add(l),Oc(n,l,c)),!1;case 22:return t.flags|=65536,l===Kl?t.flags|=16384:(i=t.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=i):(t=i.retryQueue,t===null?i.retryQueue=new Set([l]):t.add(l)),Oc(n,l,c)),!1}throw Error(u(435,t.tag))}return Oc(n,l,c),Ac(),!1}if(Nn)return i=Ve.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,l!==Tl&&(n=Error(u(422),{cause:l}),it($e(n,t)))):(l!==Tl&&(i=Error(u(423),{cause:l}),it($e(i,t))),n=n.current.alternate,n.flags|=65536,c&=-c,n.lanes|=c,l=$e(l,t),c=nc(n.stateNode,l,c),Bl(n,c),Xn!==4&&(Xn=2)),!1;var d=Error(u(520),{cause:l});if(d=$e(d,t),At===null?At=[d]:At.push(d),Xn!==4&&(Xn=2),i===null)return!0;l=$e(l,t),t=i;do{switch(t.tag){case 3:return t.flags|=65536,n=c&-c,t.lanes|=n,n=nc(t.stateNode,l,n),Bl(t,n),!1;case 1:if(i=t.type,d=t.stateNode,(t.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ni===null||!ni.has(d))))return t.flags|=65536,c&=-c,t.lanes|=c,c=sS(c),lS(c,n,t,l),Bl(t,c),!1}t=t.return}while(t!==null);return!1}var cS=Error(u(461)),le=!1;function de(n,i,t,l){i.child=n===null?nS(i,null,t,l):ho(i,n.child,t,l)}function hS(n,i,t,l,c){t=t.render;var d=i.ref;if("ref"in l){var S={};for(var k in l)k!=="ref"&&(S[k]=l[k])}else S=l;return Ai(i),l=Pl(n,i,t,S,d,c),k=_l(),n!==null&&!le?(Ll(n,i,c),Da(n,i,c)):(Nn&&k&&pl(i),i.flags|=1,de(n,i,l,c),i.child)}function dS(n,i,t,l,c){if(n===null){var d=t.type;return typeof d=="function"&&!vl(d)&&d.defaultProps===void 0&&t.compare===null?(i.tag=15,i.type=d,mS(n,i,d,l,c)):(n=Ir(t.type,null,l,i,i.mode,c),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!sc(n,c)){var S=d.memoizedProps;if(t=t.compare,t=t!==null?t:Qo,t(S,l)&&n.ref===i.ref)return Da(n,i,c)}return i.flags|=1,n=ka(d,l),n.ref=i.ref,n.return=i,i.child=n}function mS(n,i,t,l,c){if(n!==null){var d=n.memoizedProps;if(Qo(d,l)&&n.ref===i.ref)if(le=!1,i.pendingProps=l=d,sc(n,c))(n.flags&131072)!==0&&(le=!0);else return i.lanes=n.lanes,Da(n,i,c)}return ec(n,i,t,l,c)}function fS(n,i,t){var l=i.pendingProps,c=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|t:t,n!==null){for(c=i.child=n.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return gS(n,i,l,t)}if((t&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Gr(i,d!==null?d.cachePool:null),d!==null?mg(i,d):Hl(),eS(i);else return i.lanes=i.childLanes=536870912,gS(n,i,d!==null?d.baseLanes|t:t,t)}else d!==null?(Gr(i,d.cachePool),mg(i,d),Wa(),i.memoizedState=null):(n!==null&&Gr(i,null),Hl(),Wa());return de(n,i,c,t),i.child}function gS(n,i,t,l){var c=Cl();return c=c===null?null:{parent:te._currentValue,pool:c},i.memoizedState={baseLanes:t,cachePool:c},n!==null&&Gr(i,null),Hl(),eS(i),n!==null&&ot(n,i,l,!0),null}function qr(n,i){var t=i.ref;if(t===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(n===null||n.ref!==t)&&(i.flags|=4194816)}}function ec(n,i,t,l,c){return Ai(i),t=Pl(n,i,t,l,void 0,c),l=_l(),n!==null&&!le?(Ll(n,i,c),Da(n,i,c)):(Nn&&l&&pl(i),i.flags|=1,de(n,i,t,c),i.child)}function SS(n,i,t,l,c,d){return Ai(i),i.updateQueue=null,t=gg(i,l,t,c),fg(n),l=_l(),n!==null&&!le?(Ll(n,i,d),Da(n,i,d)):(Nn&&l&&pl(i),i.flags|=1,de(n,i,t,d),i.child)}function vS(n,i,t,l,c){if(Ai(i),i.stateNode===null){var d=eo,S=t.contextType;typeof S=="object"&&S!==null&&(d=ke(S)),d=new t(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ql,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Il(i),S=t.contextType,d.context=typeof S=="object"&&S!==null?ke(S):eo,d.state=i.memoizedState,S=t.getDerivedStateFromProps,typeof S=="function"&&(ql(i,t,S,l),d.state=i.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ql.enqueueReplaceState(d,d.state,null),ht(i,l,d,c),ct(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var k=i.memoizedProps,O=wi(t,k);d.props=O;var E=d.context,j=t.contextType;S=eo,typeof j=="object"&&j!==null&&(S=ke(j));var Y=t.getDerivedStateFromProps;j=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(k||E!==S)&&iS(i,d,l,S),$a=!1;var _=i.memoizedState;d.state=_,ht(i,l,d,c),ct(),E=i.memoizedState,k||_!==E||$a?(typeof Y=="function"&&(ql(i,t,Y,l),E=i.memoizedState),(O=$a||aS(i,t,O,l,_,E,S))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=E),d.props=l,d.state=E,d.context=S,l=O):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Rl(n,i),S=i.memoizedProps,j=wi(t,S),d.props=j,Y=i.pendingProps,_=d.context,E=t.contextType,O=eo,typeof E=="object"&&E!==null&&(O=ke(E)),k=t.getDerivedStateFromProps,(E=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Y||_!==O)&&iS(i,d,l,O),$a=!1,_=i.memoizedState,d.state=_,ht(i,l,d,c),ct();var z=i.memoizedState;S!==Y||_!==z||$a||n!==null&&n.dependencies!==null&&Nr(n.dependencies)?(typeof k=="function"&&(ql(i,t,k,l),z=i.memoizedState),(j=$a||aS(i,t,j,l,_,z,O)||n!==null&&n.dependencies!==null&&Nr(n.dependencies))?(E||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,z,O),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,z,O)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===n.memoizedProps&&_===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&_===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=O,l=j):(typeof d.componentDidUpdate!="function"||S===n.memoizedProps&&_===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&_===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,qr(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=ho(i,n.child,null,c),i.child=ho(i,null,t,c)):de(n,i,t,c),i.memoizedState=d.state,n=i.child):n=Da(n,i,c),n}function kS(n,i,t,l){return at(),i.flags|=256,de(n,i,t,l),i.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ic(n){return{baseLanes:n,cachePool:tg()}}function oc(n,i,t){return n=n!==null?n.childLanes&~t:0,i&&(n|=We),n}function yS(n,i,t){var l=i.pendingProps,c=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=n!==null&&n.memoizedState===null?!1:(re.current&2)!==0),S&&(c=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,n===null){if(Nn){if(c?Va(i):Wa(),Nn){var k=Jn,O;if(O=k){n:{for(O=k,k=oa;O.nodeType!==8;){if(!k){k=null;break n}if(O=qe(O.nextSibling),O===null){k=null;break n}}k=O}k!==null?(i.memoizedState={dehydrated:k,treeContext:yi!==null?{id:ya,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},O=Ne(18,null,null,0),O.stateNode=k,O.return=i,i.child=O,be=i,Jn=null,O=!0):O=!1}O||Ti(i)}if(k=i.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return jc(k)?i.lanes=32:i.lanes=536870912,null;Aa(i)}return k=l.children,l=l.fallback,c?(Wa(),c=i.mode,k=Qr({mode:"hidden",children:k},c),l=ki(l,c,t,null),k.return=i,l.return=i,k.sibling=l,i.child=k,c=i.child,c.memoizedState=ic(t),c.childLanes=oc(n,S,t),i.memoizedState=ac,l):(Va(i),tc(i,k))}if(O=n.memoizedState,O!==null&&(k=O.dehydrated,k!==null)){if(d)i.flags&256?(Va(i),i.flags&=-257,i=rc(n,i,t)):i.memoizedState!==null?(Wa(),i.child=n.child,i.flags|=128,i=null):(Wa(),c=l.fallback,k=i.mode,l=Qr({mode:"visible",children:l.children},k),c=ki(c,k,t,null),c.flags|=2,l.return=i,c.return=i,l.sibling=c,i.child=l,ho(i,n.child,null,t),l=i.child,l.memoizedState=ic(t),l.childLanes=oc(n,S,t),i.memoizedState=ac,i=c);else if(Va(i),jc(k)){if(S=k.nextSibling&&k.nextSibling.dataset,S)var E=S.dgst;S=E,l=Error(u(419)),l.stack="",l.digest=S,it({value:l,source:null,stack:null}),i=rc(n,i,t)}else if(le||ot(n,i,t,!1),S=(t&n.childLanes)!==0,le||S){if(S=$n,S!==null&&(l=t&-t,l=(l&42)!==0?1:xs(l),l=(l&(S.suspendedLanes|t))!==0?0:l,l!==0&&l!==O.retryLane))throw O.retryLane=l,no(n,l),_e(S,n,l),cS;k.data==="$?"||Ac(),i=rc(n,i,t)}else k.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=O.treeContext,Jn=qe(k.nextSibling),be=i,Nn=!0,bi=null,oa=!1,n!==null&&(Ue[Ye++]=ya,Ue[Ye++]=pa,Ue[Ye++]=yi,ya=n.id,pa=n.overflow,yi=i),i=tc(i,l.children),i.flags|=4096);return i}return c?(Wa(),c=l.fallback,k=i.mode,O=n.child,E=O.sibling,l=ka(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,E!==null?c=ka(E,c):(c=ki(c,k,t,null),c.flags|=2),c.return=i,l.return=i,l.sibling=c,i.child=l,l=c,c=i.child,k=n.child.memoizedState,k===null?k=ic(t):(O=k.cachePool,O!==null?(E=te._currentValue,O=O.parent!==E?{parent:E,pool:E}:O):O=tg(),k={baseLanes:k.baseLanes|t,cachePool:O}),c.memoizedState=k,c.childLanes=oc(n,S,t),i.memoizedState=ac,l):(Va(i),t=n.child,n=t.sibling,t=ka(t,{mode:"visible",children:l.children}),t.return=i,t.sibling=null,n!==null&&(S=i.deletions,S===null?(i.deletions=[n],i.flags|=16):S.push(n)),i.child=t,i.memoizedState=null,t)}function tc(n,i){return i=Qr({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Qr(n,i){return n=Ne(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function rc(n,i,t){return ho(i,n.child,null,t),n=tc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function pS(n,i,t){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Al(n.return,i,t)}function uc(n,i,t,l,c){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:c}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=t,d.tailMode=c)}function bS(n,i,t){var l=i.pendingProps,c=l.revealOrder,d=l.tail;if(de(n,i,l.children,t),l=re.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pS(n,t,i);else if(n.tag===19)pS(n,t,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break n;for(;n.sibling===null;){if(n.return===null||n.return===i)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(X(re,l),c){case"forwards":for(t=i.child,c=null;t!==null;)n=t.alternate,n!==null&&Zr(n)===null&&(c=t),t=t.sibling;t=c,t===null?(c=i.child,i.child=null):(c=t.sibling,t.sibling=null),uc(i,!1,c,t,d);break;case"backwards":for(t=null,c=i.child,i.child=null;c!==null;){if(n=c.alternate,n!==null&&Zr(n)===null){i.child=c;break}n=c.sibling,c.sibling=t,t=c,c=n}uc(i,!0,t,null,d);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(n,i,t){if(n!==null&&(i.dependencies=n.dependencies),Qa|=i.lanes,(t&i.childLanes)===0)if(n!==null){if(ot(n,i,t,!1),(t&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(u(153));if(i.child!==null){for(n=i.child,t=ka(n,n.pendingProps),i.child=t,t.return=i;n.sibling!==null;)n=n.sibling,t=t.sibling=ka(n,n.pendingProps),t.return=i;t.sibling=null}return i.child}function sc(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Nr(n)))}function aO(n,i,t){switch(i.tag){case 3:Cn(i,i.stateNode.containerInfo),xa(i,te,n.memoizedState.cache),at();break;case 27:case 5:Lo(i);break;case 4:Cn(i,i.stateNode.containerInfo);break;case 10:xa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Va(i),i.flags|=128,null):(t&i.child.childLanes)!==0?yS(n,i,t):(Va(i),n=Da(n,i,t),n!==null?n.sibling:null);Va(i);break;case 19:var c=(n.flags&128)!==0;if(l=(t&i.childLanes)!==0,l||(ot(n,i,t,!1),l=(t&i.childLanes)!==0),c){if(l)return bS(n,i,t);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),X(re,re.current),l)break;return null;case 22:case 23:return i.lanes=0,fS(n,i,t);case 24:xa(i,te,n.memoizedState.cache)}return Da(n,i,t)}function TS(n,i,t){if(n!==null)if(n.memoizedProps!==i.pendingProps)le=!0;else{if(!sc(n,t)&&(i.flags&128)===0)return le=!1,aO(n,i,t);le=(n.flags&131072)!==0}else le=!1,Nn&&(i.flags&1048576)!==0&&qf(i,Br,i.index);switch(i.lanes=0,i.tag){case 16:n:{n=i.pendingProps;var l=i.elementType,c=l._init;if(l=c(l._payload),i.type=l,typeof l=="function")vl(l)?(n=wi(l,n),i.tag=1,i=vS(null,i,l,n,t)):(i.tag=0,i=ec(null,i,l,n,t));else{if(l!=null){if(c=l.$$typeof,c===P){i.tag=11,i=hS(null,i,l,n,t);break n}else if(c===F){i.tag=14,i=dS(null,i,l,n,t);break n}}throw i=Rn(l)||l,Error(u(306,i,""))}}return i;case 0:return ec(n,i,i.type,i.pendingProps,t);case 1:return l=i.type,c=wi(l,i.pendingProps),vS(n,i,l,c,t);case 3:n:{if(Cn(i,i.stateNode.containerInfo),n===null)throw Error(u(387));l=i.pendingProps;var d=i.memoizedState;c=d.element,Rl(n,i),ht(i,l,null,t);var S=i.memoizedState;if(l=S.cache,xa(i,te,l),l!==d.cache&&Dl(i,[te],t,!0),ct(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=kS(n,i,l,t);break n}else if(l!==c){c=$e(Error(u(424)),i),it(c),i=kS(n,i,l,t);break n}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Jn=qe(n.firstChild),be=i,Nn=!0,bi=null,oa=!0,t=nS(i,null,l,t),i.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(at(),l===c){i=Da(n,i,t);break n}de(n,i,l,t)}i=i.child}return i;case 26:return qr(n,i),n===null?(t=Ov(i.type,null,i.pendingProps,null))?i.memoizedState=t:Nn||(t=i.type,n=i.pendingProps,l=mu(un.current).createElement(t),l[ve]=i,l[Me]=n,fe(l,t,n),se(l),i.stateNode=l):i.memoizedState=Ov(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Lo(i),n===null&&Nn&&(l=i.stateNode=Mv(i.type,i.pendingProps,un.current),be=i,oa=!0,c=Jn,ii(i.type)?(xc=c,Jn=qe(l.firstChild)):Jn=c),de(n,i,i.pendingProps.children,t),qr(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Nn&&((c=l=Jn)&&(l=IO(l,i.type,i.pendingProps,oa),l!==null?(i.stateNode=l,be=i,Jn=qe(l.firstChild),oa=!1,c=!0):c=!1),c||Ti(i)),Lo(i),c=i.type,d=i.pendingProps,S=n!==null?n.memoizedProps:null,l=d.children,_c(c,d)?l=null:S!==null&&_c(c,S)&&(i.flags|=32),i.memoizedState!==null&&(c=Pl(n,i,WD,null,null,t),Nt._currentValue=c),qr(n,i),de(n,i,l,t),i.child;case 6:return n===null&&Nn&&((n=t=Jn)&&(t=RO(t,i.pendingProps,oa),t!==null?(i.stateNode=t,be=i,Jn=null,n=!0):n=!1),n||Ti(i)),null;case 13:return yS(n,i,t);case 4:return Cn(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=ho(i,null,l,t):de(n,i,l,t),i.child;case 11:return hS(n,i,i.type,i.pendingProps,t);case 7:return de(n,i,i.pendingProps,t),i.child;case 8:return de(n,i,i.pendingProps.children,t),i.child;case 12:return de(n,i,i.pendingProps.children,t),i.child;case 10:return l=i.pendingProps,xa(i,i.type,l.value),de(n,i,l.children,t),i.child;case 9:return c=i.type._context,l=i.pendingProps.children,Ai(i),c=ke(c),l=l(c),i.flags|=1,de(n,i,l,t),i.child;case 14:return dS(n,i,i.type,i.pendingProps,t);case 15:return mS(n,i,i.type,i.pendingProps,t);case 19:return bS(n,i,t);case 31:return l=i.pendingProps,t=i.mode,l={mode:l.mode,children:l.children},n===null?(t=Qr(l,t),t.ref=i.ref,i.child=t,t.return=i,i=t):(t=ka(n.child,l),t.ref=i.ref,i.child=t,t.return=i,i=t),i;case 22:return fS(n,i,t);case 24:return Ai(i),l=ke(te),n===null?(c=Cl(),c===null&&(c=$n,d=Ol(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=t),c=d),i.memoizedState={parent:l,cache:c},Il(i),xa(i,te,c)):((n.lanes&t)!==0&&(Rl(n,i),ht(i,null,null,t),ct()),c=n.memoizedState,d=i.memoizedState,c.parent!==l?(c={parent:l,cache:l},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),xa(i,te,l)):(l=d.cache,xa(i,te,l),l!==c.cache&&Dl(i,[te],t,!0))),de(n,i,i.pendingProps.children,t),i.child;case 29:throw i.pendingProps}throw Error(u(156,i.tag))}function Oa(n){n.flags|=4}function MS(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Rv(i)){if(i=Ve.current,i!==null&&((Kn&4194048)===Kn?ta!==null:(Kn&62914560)!==Kn&&(Kn&536870912)===0||i!==ta))throw st=Kl,rg;n.flags|=8192}}function nu(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?nf():536870912,n.lanes|=i,So|=i)}function kt(n,i){if(!Nn)switch(n.tailMode){case"hidden":i=n.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,t=0,l=0;if(i)for(var c=n.child;c!==null;)t|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=n,c=c.sibling;else for(c=n.child;c!==null;)t|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=n,c=c.sibling;return n.subtreeFlags|=l,n.childLanes=t,i}function iO(n,i,t){var l=i.pendingProps;switch(bl(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return Vn(i),null;case 3:return t=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ta(te),Ke(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(et(i)?Oa(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eg())),Vn(i),null;case 26:return t=i.memoizedState,n===null?(Oa(i),t!==null?(Vn(i),MS(i,t)):(Vn(i),i.flags&=-16777217)):t?t!==n.memoizedState?(Oa(i),Vn(i),MS(i,t)):(Vn(i),i.flags&=-16777217):(n.memoizedProps!==l&&Oa(i),Vn(i),i.flags&=-16777217),null;case 27:di(i),t=un.current;var c=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Oa(i);else{if(!l){if(i.stateNode===null)throw Error(u(166));return Vn(i),null}n=on.current,et(i)?Qf(i):(n=Mv(c,l,t),i.stateNode=n,Oa(i))}return Vn(i),null;case 5:if(di(i),t=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Oa(i);else{if(!l){if(i.stateNode===null)throw Error(u(166));return Vn(i),null}if(n=on.current,et(i))Qf(i);else{switch(c=mu(un.current),n){case 1:n=c.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=c.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=c.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=c.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=c.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?c.createElement(t,{is:l.is}):c.createElement(t)}}n[ve]=i,n[Me]=l;n:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)n.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break n;for(;c.sibling===null;){if(c.return===null||c.return===i)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=n;n:switch(fe(n,t,l),t){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Oa(i)}}return Vn(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&Oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(u(166));if(n=un.current,et(i)){if(n=i.stateNode,t=i.memoizedProps,l=null,c=be,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}n[ve]=i,n=!!(n.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Sv(n.nodeValue,t)),n||Ti(i)}else n=mu(n).createTextNode(l),n[ve]=i,i.stateNode=n}return Vn(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(c=et(i),l!==null&&l.dehydrated!==null){if(n===null){if(!c)throw Error(u(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(u(317));c[ve]=i}else at(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),c=!1}else c=eg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Aa(i),i):(Aa(i),null)}if(Aa(i),(i.flags&128)!==0)return i.lanes=t,i;if(t=l!==null,n=n!==null&&n.memoizedState!==null,t){l=i.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==c&&(l.flags|=2048)}return t!==n&&t&&(i.child.flags|=8192),nu(i,i.updateQueue),Vn(i),null;case 4:return Ke(),n===null&&Nc(i.stateNode.containerInfo),Vn(i),null;case 10:return Ta(i.type),Vn(i),null;case 19:if(J(re),c=i.memoizedState,c===null)return Vn(i),null;if(l=(i.flags&128)!==0,d=c.rendering,d===null)if(l)kt(c,!1);else{if(Xn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Zr(n),d!==null){for(i.flags|=128,kt(c,!1),n=d.updateQueue,i.updateQueue=n,nu(i,n),i.subtreeFlags=0,n=t,t=i.child;t!==null;)Xf(t,n),t=t.sibling;return X(re,re.current&1|2),i.child}n=n.sibling}c.tail!==null&&ia()>iu&&(i.flags|=128,l=!0,kt(c,!1),i.lanes=4194304)}else{if(!l)if(n=Zr(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,nu(i,n),kt(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Nn)return Vn(i),null}else 2*ia()-c.renderingStartTime>iu&&t!==536870912&&(i.flags|=128,l=!0,kt(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(n=c.last,n!==null?n.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=ia(),i.sibling=null,n=re.current,X(re,l?n&1|2:n&1),i):(Vn(i),null);case 22:case 23:return Aa(i),Gl(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(t&536870912)!==0&&(i.flags&128)===0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),t=i.updateQueue,t!==null&&nu(i,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==t&&(i.flags|=2048),n!==null&&J(Di),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),i.memoizedState.cache!==t&&(i.flags|=2048),Ta(te),Vn(i),null;case 25:return null;case 30:return null}throw Error(u(156,i.tag))}function oO(n,i){switch(bl(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ta(te),Ke(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return di(i),null;case 13:if(Aa(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(u(340));at()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return J(re),null;case 4:return Ke(),null;case 10:return Ta(i.type),null;case 22:case 23:return Aa(i),Gl(),n!==null&&J(Di),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ta(te),null;case 25:return null;default:return null}}function AS(n,i){switch(bl(i),i.tag){case 3:Ta(te),Ke();break;case 26:case 27:case 5:di(i);break;case 4:Ke();break;case 13:Aa(i);break;case 19:J(re);break;case 10:Ta(i.type);break;case 22:case 23:Aa(i),Gl(),n!==null&&J(Di);break;case 24:Ta(te)}}function yt(n,i){try{var t=i.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var c=l.next;t=c;do{if((t.tag&n)===n){l=void 0;var d=t.create,S=t.inst;l=d(),S.destroy=l}t=t.next}while(t!==c)}}catch(k){xn(i,i.return,k)}}function Za(n,i,t){try{var l=i.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&n)===n){var S=l.inst,k=S.destroy;if(k!==void 0){S.destroy=void 0,c=i;var O=t,E=k;try{E()}catch(j){xn(c,O,j)}}}l=l.next}while(l!==d)}}catch(j){xn(i,i.return,j)}}function DS(n){var i=n.updateQueue;if(i!==null){var t=n.stateNode;try{dg(i,t)}catch(l){xn(n,n.return,l)}}}function OS(n,i,t){t.props=wi(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(l){xn(n,i,l)}}function pt(n,i){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof t=="function"?n.refCleanup=t(l):t.current=l}}catch(c){xn(n,i,c)}}function ra(n,i){var t=n.ref,l=n.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(c){xn(n,i,c)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(c){xn(n,i,c)}else t.current=null}function wS(n){var i=n.type,t=n.memoizedProps,l=n.stateNode;try{n:switch(i){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break n;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(c){xn(n,n.return,c)}}function lc(n,i,t){try{var l=n.stateNode;DO(l,n.type,t,i),l[Me]=i}catch(c){xn(n,n.return,c)}}function CS(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ii(n.type)||n.tag===4}function cc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||CS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ii(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hc(n,i,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,i):(i=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.appendChild(n),t=t._reactRootContainer,t!=null||i.onclick!==null||(i.onclick=du));else if(l!==4&&(l===27&&ii(n.type)&&(t=n.stateNode,i=null),n=n.child,n!==null))for(hc(n,i,t),n=n.sibling;n!==null;)hc(n,i,t),n=n.sibling}function eu(n,i,t){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?t.insertBefore(n,i):t.appendChild(n);else if(l!==4&&(l===27&&ii(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(eu(n,i,t),n=n.sibling;n!==null;)eu(n,i,t),n=n.sibling}function KS(n){var i=n.stateNode,t=n.memoizedProps;try{for(var l=n.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);fe(i,l,t),i[ve]=n,i[Me]=t}catch(d){xn(n,n.return,d)}}var wa=!1,ee=!1,dc=!1,IS=typeof WeakSet=="function"?WeakSet:Set,ce=null;function tO(n,i){if(n=n.containerInfo,Ec=yu,n=jf(n),cl(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var c=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{t.nodeType,d.nodeType}catch{t=null;break n}var S=0,k=-1,O=-1,E=0,j=0,Y=n,_=null;e:for(;;){for(var z;Y!==t||c!==0&&Y.nodeType!==3||(k=S+c),Y!==d||l!==0&&Y.nodeType!==3||(O=S+l),Y.nodeType===3&&(S+=Y.nodeValue.length),(z=Y.firstChild)!==null;)_=Y,Y=z;for(;;){if(Y===n)break e;if(_===t&&++E===c&&(k=S),_===d&&++j===l&&(O=S),(z=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=z}t=k===-1||O===-1?null:{start:k,end:O}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pc={focusedElem:n,selectionRange:t},yu=!1,ce=i;ce!==null;)if(i=ce,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,ce=n;else for(;ce!==null;){switch(i=ce,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,t=i,c=d.memoizedProps,d=d.memoizedState,l=t.stateNode;try{var mn=wi(t.type,c,t.elementType===t.type);n=l.getSnapshotBeforeUpdate(mn,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(cn){xn(t,t.return,cn)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,t=n.nodeType,t===9)zc(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":zc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=i.sibling,n!==null){n.return=i.return,ce=n;break}ce=i.return}}function RS(n,i,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ja(n,t),l&4&&yt(5,t);break;case 1:if(Ja(n,t),l&4)if(n=t.stateNode,i===null)try{n.componentDidMount()}catch(S){xn(t,t.return,S)}else{var c=wi(t.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(c,i,n.__reactInternalSnapshotBeforeUpdate)}catch(S){xn(t,t.return,S)}}l&64&&DS(t),l&512&&pt(t,t.return);break;case 3:if(Ja(n,t),l&64&&(n=t.updateQueue,n!==null)){if(i=null,t.child!==null)switch(t.child.tag){case 27:case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}try{dg(n,i)}catch(S){xn(t,t.return,S)}}break;case 27:i===null&&l&4&&KS(t);case 26:case 5:Ja(n,t),i===null&&l&4&&wS(t),l&512&&pt(t,t.return);break;case 12:Ja(n,t);break;case 13:Ja(n,t),l&4&&HS(n,t),l&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=fO.bind(null,t),BO(n,t))));break;case 22:if(l=t.memoizedState!==null||wa,!l){i=i!==null&&i.memoizedState!==null||ee,c=wa;var d=ee;wa=l,(ee=i)&&!d?Xa(n,t,(t.subtreeFlags&8772)!==0):Ja(n,t),wa=c,ee=d}break;case 30:break;default:Ja(n,t)}}function BS(n){var i=n.alternate;i!==null&&(n.alternate=null,BS(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Us(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Yn=null,Oe=!1;function Ca(n,i,t){for(t=t.child;t!==null;)NS(n,i,t),t=t.sibling}function NS(n,i,t){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(jo,t)}catch{}switch(t.tag){case 26:ee||ra(t,i),Ca(n,i,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ee||ra(t,i);var l=Yn,c=Oe;ii(t.type)&&(Yn=t.stateNode,Oe=!1),Ca(n,i,t),Kt(t.stateNode),Yn=l,Oe=c;break;case 5:ee||ra(t,i);case 6:if(l=Yn,c=Oe,Yn=null,Ca(n,i,t),Yn=l,Oe=c,Yn!==null)if(Oe)try{(Yn.nodeType===9?Yn.body:Yn.nodeName==="HTML"?Yn.ownerDocument.body:Yn).removeChild(t.stateNode)}catch(d){xn(t,i,d)}else try{Yn.removeChild(t.stateNode)}catch(d){xn(t,i,d)}break;case 18:Yn!==null&&(Oe?(n=Yn,bv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Pt(n)):bv(Yn,t.stateNode));break;case 4:l=Yn,c=Oe,Yn=t.stateNode.containerInfo,Oe=!0,Ca(n,i,t),Yn=l,Oe=c;break;case 0:case 11:case 14:case 15:ee||Za(2,t,i),ee||Za(4,t,i),Ca(n,i,t);break;case 1:ee||(ra(t,i),l=t.stateNode,typeof l.componentWillUnmount=="function"&&OS(t,i,l)),Ca(n,i,t);break;case 21:Ca(n,i,t);break;case 22:ee=(l=ee)||t.memoizedState!==null,Ca(n,i,t),ee=l;break;default:Ca(n,i,t)}}function HS(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Pt(n)}catch(t){xn(i,i.return,t)}}function rO(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new IS),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new IS),i;default:throw Error(u(435,n.tag))}}function mc(n,i){var t=rO(n);i.forEach(function(l){var c=gO.bind(null,n,l);t.has(l)||(t.add(l),l.then(c,c))})}function He(n,i){var t=i.deletions;if(t!==null)for(var l=0;l<t.length;l++){var c=t[l],d=n,S=i,k=S;n:for(;k!==null;){switch(k.tag){case 27:if(ii(k.type)){Yn=k.stateNode,Oe=!1;break n}break;case 5:Yn=k.stateNode,Oe=!1;break n;case 3:case 4:Yn=k.stateNode.containerInfo,Oe=!0;break n}k=k.return}if(Yn===null)throw Error(u(160));NS(d,S,c),Yn=null,Oe=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)GS(i,n),i=i.sibling}var Xe=null;function GS(n,i){var t=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:He(i,n),Ge(n),l&4&&(Za(3,n,n.return),yt(3,n),Za(5,n,n.return));break;case 1:He(i,n),Ge(n),l&512&&(ee||t===null||ra(t,t.return)),l&64&&wa&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var c=Xe;if(He(i,n),Ge(n),l&512&&(ee||t===null||ra(t,t.return)),l&4){var d=t!==null?t.memoizedState:null;if(l=n.memoizedState,t===null)if(l===null)if(n.stateNode===null){n:{l=n.type,t=n.memoizedProps,c=c.ownerDocument||c;e:switch(l){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Fo]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(l),c.head.insertBefore(d,c.querySelector("head > title"))),fe(d,l,t),d[ve]=n,se(d),l=d;break n;case"link":var S=Kv("link","href",c).get(l+(t.href||""));if(S){for(var k=0;k<S.length;k++)if(d=S[k],d.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&d.getAttribute("rel")===(t.rel==null?null:t.rel)&&d.getAttribute("title")===(t.title==null?null:t.title)&&d.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){S.splice(k,1);break e}}d=c.createElement(l),fe(d,l,t),c.head.appendChild(d);break;case"meta":if(S=Kv("meta","content",c).get(l+(t.content||""))){for(k=0;k<S.length;k++)if(d=S[k],d.getAttribute("content")===(t.content==null?null:""+t.content)&&d.getAttribute("name")===(t.name==null?null:t.name)&&d.getAttribute("property")===(t.property==null?null:t.property)&&d.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&d.getAttribute("charset")===(t.charSet==null?null:t.charSet)){S.splice(k,1);break e}}d=c.createElement(l),fe(d,l,t),c.head.appendChild(d);break;default:throw Error(u(468,l))}d[ve]=n,se(d),l=d}n.stateNode=l}else Iv(c,n.type,n.stateNode);else n.stateNode=Cv(c,l,n.memoizedProps);else d!==l?(d===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):d.count--,l===null?Iv(c,n.type,n.stateNode):Cv(c,l,n.memoizedProps)):l===null&&n.stateNode!==null&&lc(n,n.memoizedProps,t.memoizedProps)}break;case 27:He(i,n),Ge(n),l&512&&(ee||t===null||ra(t,t.return)),t!==null&&l&4&&lc(n,n.memoizedProps,t.memoizedProps);break;case 5:if(He(i,n),Ge(n),l&512&&(ee||t===null||ra(t,t.return)),n.flags&32){c=n.stateNode;try{Vi(c,"")}catch(z){xn(n,n.return,z)}}l&4&&n.stateNode!=null&&(c=n.memoizedProps,lc(n,c,t!==null?t.memoizedProps:c)),l&1024&&(dc=!0);break;case 6:if(He(i,n),Ge(n),l&4){if(n.stateNode===null)throw Error(u(162));l=n.memoizedProps,t=n.stateNode;try{t.nodeValue=l}catch(z){xn(n,n.return,z)}}break;case 3:if(Su=null,c=Xe,Xe=fu(i.containerInfo),He(i,n),Xe=c,Ge(n),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Pt(i.containerInfo)}catch(z){xn(n,n.return,z)}dc&&(dc=!1,ES(n));break;case 4:l=Xe,Xe=fu(n.stateNode.containerInfo),He(i,n),Ge(n),Xe=l;break;case 12:He(i,n),Ge(n);break;case 13:He(i,n),Ge(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yc=ia()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mc(n,l)));break;case 22:c=n.memoizedState!==null;var O=t!==null&&t.memoizedState!==null,E=wa,j=ee;if(wa=E||c,ee=j||O,He(i,n),ee=j,wa=E,Ge(n),l&8192)n:for(i=n.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(t===null||O||wa||ee||Ci(n)),t=null,i=n;;){if(i.tag===5||i.tag===26){if(t===null){O=t=i;try{if(d=O.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{k=O.stateNode;var Y=O.memoizedProps.style,_=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;k.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){xn(O,O.return,z)}}}else if(i.tag===6){if(t===null){O=i;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(z){xn(O,O.return,z)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break n;for(;i.sibling===null;){if(i.return===null||i.return===n)break n;t===i&&(t=null),i=i.return}t===i&&(t=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,mc(n,t))));break;case 19:He(i,n),Ge(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mc(n,l)));break;case 30:break;case 21:break;default:He(i,n),Ge(n)}}function Ge(n){var i=n.flags;if(i&2){try{for(var t,l=n.return;l!==null;){if(CS(l)){t=l;break}l=l.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var c=t.stateNode,d=cc(n);eu(n,d,c);break;case 5:var S=t.stateNode;t.flags&32&&(Vi(S,""),t.flags&=-33);var k=cc(n);eu(n,k,S);break;case 3:case 4:var O=t.stateNode.containerInfo,E=cc(n);hc(n,E,O);break;default:throw Error(u(161))}}catch(j){xn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ES(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;ES(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ja(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)RS(n,i.alternate,i),i=i.sibling}function Ci(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Ci(i);break;case 1:ra(i,i.return);var t=i.stateNode;typeof t.componentWillUnmount=="function"&&OS(i,i.return,t),Ci(i);break;case 27:Kt(i.stateNode);case 26:case 5:ra(i,i.return),Ci(i);break;case 22:i.memoizedState===null&&Ci(i);break;case 30:Ci(i);break;default:Ci(i)}n=n.sibling}}function Xa(n,i,t){for(t=t&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,c=n,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Xa(c,d,t),yt(4,d);break;case 1:if(Xa(c,d,t),l=d,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(E){xn(l,l.return,E)}if(l=d,c=l.updateQueue,c!==null){var k=l.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)hg(O[c],k)}catch(E){xn(l,l.return,E)}}t&&S&64&&DS(d),pt(d,d.return);break;case 27:KS(d);case 26:case 5:Xa(c,d,t),t&&l===null&&S&4&&wS(d),pt(d,d.return);break;case 12:Xa(c,d,t);break;case 13:Xa(c,d,t),t&&S&4&&HS(c,d);break;case 22:d.memoizedState===null&&Xa(c,d,t),pt(d,d.return);break;case 30:break;default:Xa(c,d,t)}i=i.sibling}}function fc(n,i){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&tt(t))}function gc(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&tt(n))}function ua(n,i,t,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)PS(n,i,t,l),i=i.sibling}function PS(n,i,t,l){var c=i.flags;switch(i.tag){case 0:case 11:case 15:ua(n,i,t,l),c&2048&&yt(9,i);break;case 1:ua(n,i,t,l);break;case 3:ua(n,i,t,l),c&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&tt(n)));break;case 12:if(c&2048){ua(n,i,t,l),n=i.stateNode;try{var d=i.memoizedProps,S=d.id,k=d.onPostCommit;typeof k=="function"&&k(S,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(O){xn(i,i.return,O)}}else ua(n,i,t,l);break;case 13:ua(n,i,t,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?ua(n,i,t,l):bt(n,i):d._visibility&2?ua(n,i,t,l):(d._visibility|=2,mo(n,i,t,l,(i.subtreeFlags&10256)!==0)),c&2048&&fc(S,i);break;case 24:ua(n,i,t,l),c&2048&&gc(i.alternate,i);break;default:ua(n,i,t,l)}}function mo(n,i,t,l,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,S=i,k=t,O=l,E=S.flags;switch(S.tag){case 0:case 11:case 15:mo(d,S,k,O,c),yt(8,S);break;case 23:break;case 22:var j=S.stateNode;S.memoizedState!==null?j._visibility&2?mo(d,S,k,O,c):bt(d,S):(j._visibility|=2,mo(d,S,k,O,c)),c&&E&2048&&fc(S.alternate,S);break;case 24:mo(d,S,k,O,c),c&&E&2048&&gc(S.alternate,S);break;default:mo(d,S,k,O,c)}i=i.sibling}}function bt(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var t=n,l=i,c=l.flags;switch(l.tag){case 22:bt(t,l),c&2048&&fc(l.alternate,l);break;case 24:bt(t,l),c&2048&&gc(l.alternate,l);break;default:bt(t,l)}i=i.sibling}}var Tt=8192;function fo(n){if(n.subtreeFlags&Tt)for(n=n.child;n!==null;)_S(n),n=n.sibling}function _S(n){switch(n.tag){case 26:fo(n),n.flags&Tt&&n.memoizedState!==null&&UO(Xe,n.memoizedState,n.memoizedProps);break;case 5:fo(n);break;case 3:case 4:var i=Xe;Xe=fu(n.stateNode.containerInfo),fo(n),Xe=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Tt,Tt=16777216,fo(n),Tt=i):fo(n));break;default:fo(n)}}function LS(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Mt(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var t=0;t<i.length;t++){var l=i[t];ce=l,jS(l,n)}LS(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zS(n),n=n.sibling}function zS(n){switch(n.tag){case 0:case 11:case 15:Mt(n),n.flags&2048&&Za(9,n,n.return);break;case 3:Mt(n);break;case 12:Mt(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,au(n)):Mt(n);break;default:Mt(n)}}function au(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var t=0;t<i.length;t++){var l=i[t];ce=l,jS(l,n)}LS(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Za(8,i,i.return),au(i);break;case 22:t=i.stateNode,t._visibility&2&&(t._visibility&=-3,au(i));break;default:au(i)}n=n.sibling}}function jS(n,i){for(;ce!==null;){var t=ce;switch(t.tag){case 0:case 11:case 15:Za(8,t,i);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tt(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,ce=l;else n:for(t=n;ce!==null;){l=ce;var c=l.sibling,d=l.return;if(BS(l),l===t){ce=null;break n}if(c!==null){c.return=d,ce=c;break n}ce=d}}}var uO={getCacheForType:function(n){var i=ke(te),t=i.data.get(n);return t===void 0&&(t=n(),i.data.set(n,t)),t}},sO=typeof WeakMap=="function"?WeakMap:Map,Pn=0,$n=null,On=null,Kn=0,_n=0,Ee=null,qa=!1,go=!1,Sc=!1,Ka=0,Xn=0,Qa=0,Ki=0,vc=0,We=0,So=0,At=null,we=null,kc=!1,yc=0,iu=1/0,ou=null,ni=null,me=0,ei=null,vo=null,ko=0,pc=0,bc=null,xS=null,Dt=0,Tc=null;function Pe(){if((Pn&2)!==0&&Kn!==0)return Kn&-Kn;if(L.T!==null){var n=oo;return n!==0?n:Kc()}return of()}function $S(){We===0&&(We=(Kn&536870912)===0||Nn?Qm():536870912);var n=Ve.current;return n!==null&&(n.flags|=32),We}function _e(n,i,t){(n===$n&&(_n===2||_n===9)||n.cancelPendingCommit!==null)&&(yo(n,0),ai(n,Kn,We,!1)),$o(n,t),((Pn&2)===0||n!==$n)&&(n===$n&&((Pn&2)===0&&(Ki|=t),Xn===4&&ai(n,Kn,We,!1)),sa(n))}function FS(n,i,t){if((Pn&6)!==0)throw Error(u(327));var l=!t&&(i&124)===0&&(i&n.expiredLanes)===0||xo(n,i),c=l?hO(n,i):Dc(n,i,!0),d=l;do{if(c===0){go&&!l&&ai(n,i,0,!1);break}else{if(t=n.current.alternate,d&&!lO(t)){c=Dc(n,i,!1),d=!1;continue}if(c===2){if(d=i,n.errorRecoveryDisabledLanes&d)var S=0;else S=n.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;n:{var k=n;c=At;var O=k.current.memoizedState.isDehydrated;if(O&&(yo(k,S).flags|=256),S=Dc(k,S,!1),S!==2){if(Sc&&!O){k.errorRecoveryDisabledLanes|=d,Ki|=d,c=4;break n}d=we,we=c,d!==null&&(we===null?we=d:we.push.apply(we,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){yo(n,0),ai(n,i,0,!0);break}n:{switch(l=n,d=c,d){case 0:case 1:throw Error(u(345));case 4:if((i&4194048)!==i)break;case 6:ai(l,i,We,!qa);break n;case 2:we=null;break;case 3:case 5:break;default:throw Error(u(329))}if((i&62914560)===i&&(c=yc+300-ia(),10<c)){if(ai(l,i,We,!qa),gr(l,0,!0)!==0)break n;l.timeoutHandle=yv(US.bind(null,l,t,we,ou,kc,i,We,Ki,So,qa,d,2,-0,0),c);break n}US(l,t,we,ou,kc,i,We,Ki,So,qa,d,0,-0,0)}}break}while(!0);sa(n)}function US(n,i,t,l,c,d,S,k,O,E,j,Y,_,z){if(n.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Bt={stylesheets:null,count:0,unsuspend:FO},_S(i),Y=YO(),Y!==null)){n.cancelPendingCommit=Y(qS.bind(null,n,i,d,t,l,c,S,k,O,j,1,_,z)),ai(n,d,S,!E);return}qS(n,i,d,t,l,c,S,k,O)}function lO(n){for(var i=n;;){var t=i.tag;if((t===0||t===11||t===15)&&i.flags&16384&&(t=i.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var c=t[l],d=c.getSnapshot;c=c.value;try{if(!Be(d(),c))return!1}catch{return!1}}if(t=i.child,i.subtreeFlags&16384&&t!==null)t.return=i,i=t;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ai(n,i,t,l){i&=~vc,i&=~Ki,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var c=i;0<c;){var d=31-Re(c),S=1<<d;l[d]=-1,c&=~S}t!==0&&ef(n,t,i)}function tu(){return(Pn&6)===0?(Ot(0),!1):!0}function Mc(){if(On!==null){if(_n===0)var n=On.return;else n=On,ba=Mi=null,zl(n),co=null,St=0,n=On;for(;n!==null;)AS(n.alternate,n),n=n.return;On=null}}function yo(n,i){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,wO(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),Mc(),$n=n,On=t=ka(n.current,null),Kn=i,_n=0,Ee=null,qa=!1,go=xo(n,i),Sc=!1,So=We=vc=Ki=Qa=Xn=0,we=At=null,kc=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var c=31-Re(l),d=1<<c;i|=n[c],l&=~d}return Ka=i,wr(),t}function YS(n,i){Tn=null,L.H=Yr,i===ut||i===Er?(i=lg(),_n=3):i===rg?(i=lg(),_n=4):_n=i===cS?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ee=i,On===null&&(Xn=1,Xr(n,$e(i,n.current)))}function VS(){var n=L.H;return L.H=Yr,n===null?Yr:n}function WS(){var n=L.A;return L.A=uO,n}function Ac(){Xn=4,qa||(Kn&4194048)!==Kn&&Ve.current!==null||(go=!0),(Qa&134217727)===0&&(Ki&134217727)===0||$n===null||ai($n,Kn,We,!1)}function Dc(n,i,t){var l=Pn;Pn|=2;var c=VS(),d=WS();($n!==n||Kn!==i)&&(ou=null,yo(n,i)),i=!1;var S=Xn;n:do try{if(_n!==0&&On!==null){var k=On,O=Ee;switch(_n){case 8:Mc(),S=6;break n;case 3:case 2:case 9:case 6:Ve.current===null&&(i=!0);var E=_n;if(_n=0,Ee=null,po(n,k,O,E),t&&go){S=0;break n}break;default:E=_n,_n=0,Ee=null,po(n,k,O,E)}}cO(),S=Xn;break}catch(j){YS(n,j)}while(!0);return i&&n.shellSuspendCounter++,ba=Mi=null,Pn=l,L.H=c,L.A=d,On===null&&($n=null,Kn=0,wr()),S}function cO(){for(;On!==null;)ZS(On)}function hO(n,i){var t=Pn;Pn|=2;var l=VS(),c=WS();$n!==n||Kn!==i?(ou=null,iu=ia()+500,yo(n,i)):go=xo(n,i);n:do try{if(_n!==0&&On!==null){i=On;var d=Ee;e:switch(_n){case 1:_n=0,Ee=null,po(n,i,d,1);break;case 2:case 9:if(ug(d)){_n=0,Ee=null,JS(i);break}i=function(){_n!==2&&_n!==9||$n!==n||(_n=7),sa(n)},d.then(i,i);break n;case 3:_n=7;break n;case 4:_n=5;break n;case 7:ug(d)?(_n=0,Ee=null,JS(i)):(_n=0,Ee=null,po(n,i,d,7));break;case 5:var S=null;switch(On.tag){case 26:S=On.memoizedState;case 5:case 27:var k=On;if(!S||Rv(S)){_n=0,Ee=null;var O=k.sibling;if(O!==null)On=O;else{var E=k.return;E!==null?(On=E,ru(E)):On=null}break e}}_n=0,Ee=null,po(n,i,d,5);break;case 6:_n=0,Ee=null,po(n,i,d,6);break;case 8:Mc(),Xn=6;break n;default:throw Error(u(462))}}dO();break}catch(j){YS(n,j)}while(!0);return ba=Mi=null,L.H=l,L.A=c,Pn=t,On!==null?0:($n=null,Kn=0,wr(),Xn)}function dO(){for(;On!==null&&!zs();)ZS(On)}function ZS(n){var i=TS(n.alternate,n,Ka);n.memoizedProps=n.pendingProps,i===null?ru(n):On=i}function JS(n){var i=n,t=i.alternate;switch(i.tag){case 15:case 0:i=SS(t,i,i.pendingProps,i.type,void 0,Kn);break;case 11:i=SS(t,i,i.pendingProps,i.type.render,i.ref,Kn);break;case 5:zl(i);default:AS(t,i),i=On=Xf(i,Ka),i=TS(t,i,Ka)}n.memoizedProps=n.pendingProps,i===null?ru(n):On=i}function po(n,i,t,l){ba=Mi=null,zl(i),co=null,St=0;var c=i.return;try{if(eO(n,c,i,t,Kn)){Xn=1,Xr(n,$e(t,n.current)),On=null;return}}catch(d){if(c!==null)throw On=c,d;Xn=1,Xr(n,$e(t,n.current)),On=null;return}i.flags&32768?(Nn||l===1?n=!0:go||(Kn&536870912)!==0?n=!1:(qa=n=!0,(l===2||l===9||l===3||l===6)&&(l=Ve.current,l!==null&&l.tag===13&&(l.flags|=16384))),XS(i,n)):ru(i)}function ru(n){var i=n;do{if((i.flags&32768)!==0){XS(i,qa);return}n=i.return;var t=iO(i.alternate,i,Ka);if(t!==null){On=t;return}if(i=i.sibling,i!==null){On=i;return}On=i=n}while(i!==null);Xn===0&&(Xn=5)}function XS(n,i){do{var t=oO(n.alternate,n);if(t!==null){t.flags&=32767,On=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!i&&(n=n.sibling,n!==null)){On=n;return}On=n=t}while(n!==null);Xn=6,On=null}function qS(n,i,t,l,c,d,S,k,O){n.cancelPendingCommit=null;do uu();while(me!==0);if((Pn&6)!==0)throw Error(u(327));if(i!==null){if(i===n.current)throw Error(u(177));if(d=i.lanes|i.childLanes,d|=gl,FA(n,t,d,S,k,O),n===$n&&(On=$n=null,Kn=0),vo=i,ei=n,ko=t,pc=d,bc=c,xS=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,SO(dr,function(){return iv(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,c=Z.p,Z.p=2,S=Pn,Pn|=4;try{tO(n,i,t)}finally{Pn=S,Z.p=c,L.T=l}}me=1,QS(),nv(),ev()}}function QS(){if(me===1){me=0;var n=ei,i=vo,t=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||t){t=L.T,L.T=null;var l=Z.p;Z.p=2;var c=Pn;Pn|=4;try{GS(i,n);var d=Pc,S=jf(n.containerInfo),k=d.focusedElem,O=d.selectionRange;if(S!==k&&k&&k.ownerDocument&&zf(k.ownerDocument.documentElement,k)){if(O!==null&&cl(k)){var E=O.start,j=O.end;if(j===void 0&&(j=E),"selectionStart"in k)k.selectionStart=E,k.selectionEnd=Math.min(j,k.value.length);else{var Y=k.ownerDocument||document,_=Y&&Y.defaultView||window;if(_.getSelection){var z=_.getSelection(),mn=k.textContent.length,cn=Math.min(O.start,mn),jn=O.end===void 0?cn:Math.min(O.end,mn);!z.extend&&cn>jn&&(S=jn,jn=cn,cn=S);var N=Lf(k,cn),B=Lf(k,jn);if(N&&B&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==B.node||z.focusOffset!==B.offset)){var H=Y.createRange();H.setStart(N.node,N.offset),z.removeAllRanges(),cn>jn?(z.addRange(H),z.extend(B.node,B.offset)):(H.setEnd(B.node,B.offset),z.addRange(H))}}}}for(Y=[],z=k;z=z.parentNode;)z.nodeType===1&&Y.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<Y.length;k++){var $=Y[k];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}yu=!!Ec,Pc=Ec=null}finally{Pn=c,Z.p=l,L.T=t}}n.current=i,me=2}}function nv(){if(me===2){me=0;var n=ei,i=vo,t=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||t){t=L.T,L.T=null;var l=Z.p;Z.p=2;var c=Pn;Pn|=4;try{RS(n,i.alternate,i)}finally{Pn=c,Z.p=l,L.T=t}}me=3}}function ev(){if(me===4||me===3){me=0,GA();var n=ei,i=vo,t=ko,l=xS;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?me=5:(me=0,vo=ei=null,av(n,n.pendingLanes));var c=n.pendingLanes;if(c===0&&(ni=null),$s(t),i=i.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(jo,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,c=Z.p,Z.p=2,L.T=null;try{for(var d=n.onRecoverableError,S=0;S<l.length;S++){var k=l[S];d(k.value,{componentStack:k.stack})}}finally{L.T=i,Z.p=c}}(ko&3)!==0&&uu(),sa(n),c=n.pendingLanes,(t&4194090)!==0&&(c&42)!==0?n===Tc?Dt++:(Dt=0,Tc=n):Dt=0,Ot(0)}}function av(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,tt(i)))}function uu(n){return QS(),nv(),ev(),iv()}function iv(){if(me!==5)return!1;var n=ei,i=pc;pc=0;var t=$s(ko),l=L.T,c=Z.p;try{Z.p=32>t?32:t,L.T=null,t=bc,bc=null;var d=ei,S=ko;if(me=0,vo=ei=null,ko=0,(Pn&6)!==0)throw Error(u(331));var k=Pn;if(Pn|=4,zS(d.current),PS(d,d.current,S,t),Pn=k,Ot(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(jo,d)}catch{}return!0}finally{Z.p=c,L.T=l,av(n,i)}}function ov(n,i,t){i=$e(t,i),i=nc(n.stateNode,i,2),n=Ua(n,i,2),n!==null&&($o(n,2),sa(n))}function xn(n,i,t){if(n.tag===3)ov(n,n,t);else for(;i!==null;){if(i.tag===3){ov(i,n,t);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ni===null||!ni.has(l))){n=$e(t,n),t=sS(2),l=Ua(i,t,2),l!==null&&(lS(t,l,i,n),$o(l,2),sa(l));break}}i=i.return}}function Oc(n,i,t){var l=n.pingCache;if(l===null){l=n.pingCache=new sO;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(t)||(Sc=!0,c.add(t),n=mO.bind(null,n,i,t),i.then(n,n))}function mO(n,i,t){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,$n===n&&(Kn&t)===t&&(Xn===4||Xn===3&&(Kn&62914560)===Kn&&300>ia()-yc?(Pn&2)===0&&yo(n,0):vc|=t,So===Kn&&(So=0)),sa(n)}function tv(n,i){i===0&&(i=nf()),n=no(n,i),n!==null&&($o(n,i),sa(n))}function fO(n){var i=n.memoizedState,t=0;i!==null&&(t=i.retryLane),tv(n,t)}function gO(n,i){var t=0;switch(n.tag){case 13:var l=n.stateNode,c=n.memoizedState;c!==null&&(t=c.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(i),tv(n,t)}function SO(n,i){return zo(n,i)}var su=null,bo=null,wc=!1,lu=!1,Cc=!1,Ii=0;function sa(n){n!==bo&&n.next===null&&(bo===null?su=bo=n:bo=bo.next=n),lu=!0,wc||(wc=!0,kO())}function Ot(n,i){if(!Cc&&lu){Cc=!0;do for(var t=!1,l=su;l!==null;){if(n!==0){var c=l.pendingLanes;if(c===0)var d=0;else{var S=l.suspendedLanes,k=l.pingedLanes;d=(1<<31-Re(42|n)+1)-1,d&=c&~(S&~k),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(t=!0,lv(l,d))}else d=Kn,d=gr(l,l===$n?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||xo(l,d)||(t=!0,lv(l,d));l=l.next}while(t);Cc=!1}}function vO(){rv()}function rv(){lu=wc=!1;var n=0;Ii!==0&&(OO()&&(n=Ii),Ii=0);for(var i=ia(),t=null,l=su;l!==null;){var c=l.next,d=uv(l,i);d===0?(l.next=null,t===null?su=c:t.next=c,c===null&&(bo=t)):(t=l,(n!==0||(d&3)!==0)&&(lu=!0)),l=c}Ot(n)}function uv(n,i){for(var t=n.suspendedLanes,l=n.pingedLanes,c=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var S=31-Re(d),k=1<<S,O=c[S];O===-1?((k&t)===0||(k&l)!==0)&&(c[S]=$A(k,i)):O<=i&&(n.expiredLanes|=k),d&=~k}if(i=$n,t=Kn,t=gr(n,n===i?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,t===0||n===i&&(_n===2||_n===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Li(l),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||xo(n,t)){if(i=t&-t,i===n.callbackPriority)return i;switch(l!==null&&Li(l),$s(t)){case 2:case 8:t=Xm;break;case 32:t=dr;break;case 268435456:t=qm;break;default:t=dr}return l=sv.bind(null,n),t=zo(t,l),n.callbackPriority=i,n.callbackNode=t,i}return l!==null&&l!==null&&Li(l),n.callbackPriority=2,n.callbackNode=null,2}function sv(n,i){if(me!==0&&me!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(uu()&&n.callbackNode!==t)return null;var l=Kn;return l=gr(n,n===$n?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(FS(n,l,i),uv(n,ia()),n.callbackNode!=null&&n.callbackNode===t?sv.bind(null,n):null)}function lv(n,i){if(uu())return null;FS(n,i,!0)}function kO(){CO(function(){(Pn&6)!==0?zo(Jm,vO):rv()})}function Kc(){return Ii===0&&(Ii=Qm()),Ii}function cv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:pr(""+n)}function hv(n,i){var t=i.ownerDocument.createElement("input");return t.name=i.name,t.value=i.value,n.id&&t.setAttribute("form",n.id),i.parentNode.insertBefore(t,i),n=new FormData(n),t.parentNode.removeChild(t),n}function yO(n,i,t,l,c){if(i==="submit"&&t&&t.stateNode===c){var d=cv((c[Me]||null).action),S=l.submitter;S&&(i=(i=S[Me]||null)?cv(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var k=new Ar("action","action",null,l,c);n.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ii!==0){var O=S?hv(c,S):new FormData(c);Zl(t,{pending:!0,data:O,method:c.method,action:d},null,O)}}else typeof d=="function"&&(k.preventDefault(),O=S?hv(c,S):new FormData(c),Zl(t,{pending:!0,data:O,method:c.method,action:d},d,O))},currentTarget:c}]})}}for(var Ic=0;Ic<fl.length;Ic++){var Rc=fl[Ic],pO=Rc.toLowerCase(),bO=Rc[0].toUpperCase()+Rc.slice(1);Je(pO,"on"+bO)}Je(Ff,"onAnimationEnd"),Je(Uf,"onAnimationIteration"),Je(Yf,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(_D,"onTransitionRun"),Je(LD,"onTransitionStart"),Je(zD,"onTransitionCancel"),Je(Vf,"onTransitionEnd"),Fi("onMouseEnter",["mouseout","mouseover"]),Fi("onMouseLeave",["mouseout","mouseover"]),Fi("onPointerEnter",["pointerout","pointerover"]),Fi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wt));function dv(n,i){i=(i&4)!==0;for(var t=0;t<n.length;t++){var l=n[t],c=l.event;l=l.listeners;n:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var k=l[S],O=k.instance,E=k.currentTarget;if(k=k.listener,O!==d&&c.isPropagationStopped())break n;d=k,c.currentTarget=E;try{d(c)}catch(j){Jr(j)}c.currentTarget=null,d=O}else for(S=0;S<l.length;S++){if(k=l[S],O=k.instance,E=k.currentTarget,k=k.listener,O!==d&&c.isPropagationStopped())break n;d=k,c.currentTarget=E;try{d(c)}catch(j){Jr(j)}c.currentTarget=null,d=O}}}}function wn(n,i){var t=i[Fs];t===void 0&&(t=i[Fs]=new Set);var l=n+"__bubble";t.has(l)||(mv(i,n,2,!1),t.add(l))}function Bc(n,i,t){var l=0;i&&(l|=4),mv(t,n,l,i)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Nc(n){if(!n[cu]){n[cu]=!0,rf.forEach(function(t){t!=="selectionchange"&&(TO.has(t)||Bc(t,!1,n),Bc(t,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[cu]||(i[cu]=!0,Bc("selectionchange",!1,i))}}function mv(n,i,t,l){switch(Pv(i)){case 2:var c=ZO;break;case 8:c=JO;break;default:c=Vc}t=c.bind(null,i,t,n),c=void 0,!el||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?n.addEventListener(i,t,{capture:!0,passive:c}):n.addEventListener(i,t,!0):c!==void 0?n.addEventListener(i,t,{passive:c}):n.addEventListener(i,t,!1)}function Hc(n,i,t,l,c){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)n:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var k=l.stateNode.containerInfo;if(k===c)break;if(S===4)for(S=l.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;k!==null;){if(S=ji(k),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){l=d=S;continue n}k=k.parentNode}}l=l.return}pf(function(){var E=d,j=Qs(t),Y=[];n:{var _=Wf.get(n);if(_!==void 0){var z=Ar,mn=n;switch(n){case"keypress":if(Tr(t)===0)break n;case"keydown":case"keyup":z=SD;break;case"focusin":mn="focus",z=tl;break;case"focusout":mn="blur",z=tl;break;case"beforeblur":case"afterblur":z=tl;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=oD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=yD;break;case Ff:case Uf:case Yf:z=uD;break;case Vf:z=bD;break;case"scroll":case"scrollend":z=aD;break;case"wheel":z=MD;break;case"copy":case"cut":case"paste":z=lD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Df;break;case"toggle":case"beforetoggle":z=DD}var cn=(i&4)!==0,jn=!cn&&(n==="scroll"||n==="scrollend"),N=cn?_!==null?_+"Capture":null:_;cn=[];for(var B=E,H;B!==null;){var $=B;if(H=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||H===null||N===null||($=Yo(B,N),$!=null&&cn.push(Ct(B,$,H))),jn)break;B=B.return}0<cn.length&&(_=new z(_,mn,null,t,j),Y.push({event:_,listeners:cn}))}}if((i&7)===0){n:{if(_=n==="mouseover"||n==="pointerover",z=n==="mouseout"||n==="pointerout",_&&t!==qs&&(mn=t.relatedTarget||t.fromElement)&&(ji(mn)||mn[zi]))break n;if((z||_)&&(_=j.window===j?j:(_=j.ownerDocument)?_.defaultView||_.parentWindow:window,z?(mn=t.relatedTarget||t.toElement,z=E,mn=mn?ji(mn):null,mn!==null&&(jn=s(mn),cn=mn.tag,mn!==jn||cn!==5&&cn!==27&&cn!==6)&&(mn=null)):(z=null,mn=E),z!==mn)){if(cn=Mf,$="onMouseLeave",N="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(cn=Df,$="onPointerLeave",N="onPointerEnter",B="pointer"),jn=z==null?_:Uo(z),H=mn==null?_:Uo(mn),_=new cn($,B+"leave",z,t,j),_.target=jn,_.relatedTarget=H,$=null,ji(j)===E&&(cn=new cn(N,B+"enter",mn,t,j),cn.target=H,cn.relatedTarget=jn,$=cn),jn=$,z&&mn)e:{for(cn=z,N=mn,B=0,H=cn;H;H=To(H))B++;for(H=0,$=N;$;$=To($))H++;for(;0<B-H;)cn=To(cn),B--;for(;0<H-B;)N=To(N),H--;for(;B--;){if(cn===N||N!==null&&cn===N.alternate)break e;cn=To(cn),N=To(N)}cn=null}else cn=null;z!==null&&fv(Y,_,z,cn,!1),mn!==null&&jn!==null&&fv(Y,jn,mn,cn,!0)}}n:{if(_=E?Uo(E):window,z=_.nodeName&&_.nodeName.toLowerCase(),z==="select"||z==="input"&&_.type==="file")var an=Nf;else if(Rf(_))if(Hf)an=GD;else{an=ND;var Dn=BD}else z=_.nodeName,!z||z.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?E&&Xs(E.elementType)&&(an=Nf):an=HD;if(an&&(an=an(n,E))){Bf(Y,an,t,j);break n}Dn&&Dn(n,_,E),n==="focusout"&&E&&_.type==="number"&&E.memoizedProps.value!=null&&Js(_,"number",_.value)}switch(Dn=E?Uo(E):window,n){case"focusin":(Rf(Dn)||Dn.contentEditable==="true")&&(Xi=Dn,hl=E,nt=null);break;case"focusout":nt=hl=Xi=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,xf(Y,t,j);break;case"selectionchange":if(PD)break;case"keydown":case"keyup":xf(Y,t,j)}var rn;if(ul)n:{switch(n){case"compositionstart":var hn="onCompositionStart";break n;case"compositionend":hn="onCompositionEnd";break n;case"compositionupdate":hn="onCompositionUpdate";break n}hn=void 0}else Ji?Kf(n,t)&&(hn="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(hn="onCompositionStart");hn&&(Of&&t.locale!=="ko"&&(Ji||hn!=="onCompositionStart"?hn==="onCompositionEnd"&&Ji&&(rn=bf()):(ja=j,al="value"in ja?ja.value:ja.textContent,Ji=!0)),Dn=hu(E,hn),0<Dn.length&&(hn=new Af(hn,n,null,t,j),Y.push({event:hn,listeners:Dn}),rn?hn.data=rn:(rn=If(t),rn!==null&&(hn.data=rn)))),(rn=wD?CD(n,t):KD(n,t))&&(hn=hu(E,"onBeforeInput"),0<hn.length&&(Dn=new Af("onBeforeInput","beforeinput",null,t,j),Y.push({event:Dn,listeners:hn}),Dn.data=rn)),yO(Y,n,E,t,j)}dv(Y,i)})}function Ct(n,i,t){return{instance:n,listener:i,currentTarget:t}}function hu(n,i){for(var t=i+"Capture",l=[];n!==null;){var c=n,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Yo(n,t),c!=null&&l.unshift(Ct(n,c,d)),c=Yo(n,i),c!=null&&l.push(Ct(n,c,d))),n.tag===3)return l;n=n.return}return[]}function To(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function fv(n,i,t,l,c){for(var d=i._reactName,S=[];t!==null&&t!==l;){var k=t,O=k.alternate,E=k.stateNode;if(k=k.tag,O!==null&&O===l)break;k!==5&&k!==26&&k!==27||E===null||(O=E,c?(E=Yo(t,d),E!=null&&S.unshift(Ct(t,E,O))):c||(E=Yo(t,d),E!=null&&S.push(Ct(t,E,O)))),t=t.return}S.length!==0&&n.push({event:i,listeners:S})}var MO=/\r\n?/g,AO=/\u0000|\uFFFD/g;function gv(n){return(typeof n=="string"?n:""+n).replace(MO,`
`).replace(AO,"")}function Sv(n,i){return i=gv(i),gv(n)===i}function du(){}function zn(n,i,t,l,c,d){switch(t){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Vi(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Vi(n,""+l);break;case"className":vr(n,"class",l);break;case"tabIndex":vr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(n,t,l);break;case"style":kf(n,l,d);break;case"data":if(i!=="object"){vr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||t!=="href")){n.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=pr(""+l),n.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(t==="formAction"?(i!=="input"&&zn(n,i,"name",c.name,c,null),zn(n,i,"formEncType",c.formEncType,c,null),zn(n,i,"formMethod",c.formMethod,c,null),zn(n,i,"formTarget",c.formTarget,c,null)):(zn(n,i,"encType",c.encType,c,null),zn(n,i,"method",c.method,c,null),zn(n,i,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(t);break}l=pr(""+l),n.setAttribute(t,l);break;case"onClick":l!=null&&(n.onclick=du);break;case"onScroll":l!=null&&wn("scroll",n);break;case"onScrollEnd":l!=null&&wn("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(c.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}t=pr(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""+l):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":l===!0?n.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(t,l):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(t,l):n.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(t):n.setAttribute(t,l);break;case"popover":wn("beforetoggle",n),wn("toggle",n),Sr(n,"popover",l);break;case"xlinkActuate":Sa(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Sa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Sa(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Sa(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Sa(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Sa(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Sa(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Sa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Sa(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sr(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=nD.get(t)||t,Sr(n,t,l))}}function Gc(n,i,t,l,c,d){switch(t){case"style":kf(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(t=l.__html,t!=null){if(c.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"children":typeof l=="string"?Vi(n,l):(typeof l=="number"||typeof l=="bigint")&&Vi(n,""+l);break;case"onScroll":l!=null&&wn("scroll",n);break;case"onScrollEnd":l!=null&&wn("scrollend",n);break;case"onClick":l!=null&&(n.onclick=du);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uf.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(c=t.endsWith("Capture"),i=t.slice(2,c?t.length-7:void 0),d=n[Me]||null,d=d!=null?d[t]:null,typeof d=="function"&&n.removeEventListener(i,d,c),typeof l=="function")){typeof d!="function"&&d!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(i,l,c);break n}t in n?n[t]=l:l===!0?n.setAttribute(t,""):Sr(n,t,l)}}}function fe(n,i,t){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wn("error",n),wn("load",n);var l=!1,c=!1,d;for(d in t)if(t.hasOwnProperty(d)){var S=t[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,i));default:zn(n,i,d,S,t,null)}}c&&zn(n,i,"srcSet",t.srcSet,t,null),l&&zn(n,i,"src",t.src,t,null);return;case"input":wn("invalid",n);var k=d=S=c=null,O=null,E=null;for(l in t)if(t.hasOwnProperty(l)){var j=t[l];if(j!=null)switch(l){case"name":c=j;break;case"type":S=j;break;case"checked":O=j;break;case"defaultChecked":E=j;break;case"value":d=j;break;case"defaultValue":k=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,i));break;default:zn(n,i,l,j,t,null)}}ff(n,d,k,O,E,S,c,!1),kr(n);return;case"select":wn("invalid",n),l=S=d=null;for(c in t)if(t.hasOwnProperty(c)&&(k=t[c],k!=null))switch(c){case"value":d=k;break;case"defaultValue":S=k;break;case"multiple":l=k;default:zn(n,i,c,k,t,null)}i=d,t=S,n.multiple=!!l,i!=null?Yi(n,!!l,i,!1):t!=null&&Yi(n,!!l,t,!0);return;case"textarea":wn("invalid",n),d=c=l=null;for(S in t)if(t.hasOwnProperty(S)&&(k=t[S],k!=null))switch(S){case"value":l=k;break;case"defaultValue":c=k;break;case"children":d=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(91));break;default:zn(n,i,S,k,t,null)}Sf(n,l,c,d),kr(n);return;case"option":for(O in t)if(t.hasOwnProperty(O)&&(l=t[O],l!=null))switch(O){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:zn(n,i,O,l,t,null)}return;case"dialog":wn("beforetoggle",n),wn("toggle",n),wn("cancel",n),wn("close",n);break;case"iframe":case"object":wn("load",n);break;case"video":case"audio":for(l=0;l<wt.length;l++)wn(wt[l],n);break;case"image":wn("error",n),wn("load",n);break;case"details":wn("toggle",n);break;case"embed":case"source":case"link":wn("error",n),wn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,i));default:zn(n,i,E,l,t,null)}return;default:if(Xs(i)){for(j in t)t.hasOwnProperty(j)&&(l=t[j],l!==void 0&&Gc(n,i,j,l,t,void 0));return}}for(k in t)t.hasOwnProperty(k)&&(l=t[k],l!=null&&zn(n,i,k,l,t,null))}function DO(n,i,t,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,k=null,O=null,E=null,j=null;for(z in t){var Y=t[z];if(t.hasOwnProperty(z)&&Y!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":O=Y;default:l.hasOwnProperty(z)||zn(n,i,z,null,l,Y)}}for(var _ in l){var z=l[_];if(Y=t[_],l.hasOwnProperty(_)&&(z!=null||Y!=null))switch(_){case"type":d=z;break;case"name":c=z;break;case"checked":E=z;break;case"defaultChecked":j=z;break;case"value":S=z;break;case"defaultValue":k=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,i));break;default:z!==Y&&zn(n,i,_,z,l,Y)}}Zs(n,S,k,O,E,j,d,c);return;case"select":z=S=k=_=null;for(d in t)if(O=t[d],t.hasOwnProperty(d)&&O!=null)switch(d){case"value":break;case"multiple":z=O;default:l.hasOwnProperty(d)||zn(n,i,d,null,l,O)}for(c in l)if(d=l[c],O=t[c],l.hasOwnProperty(c)&&(d!=null||O!=null))switch(c){case"value":_=d;break;case"defaultValue":k=d;break;case"multiple":S=d;default:d!==O&&zn(n,i,c,d,l,O)}i=k,t=S,l=z,_!=null?Yi(n,!!t,_,!1):!!l!=!!t&&(i!=null?Yi(n,!!t,i,!0):Yi(n,!!t,t?[]:"",!1));return;case"textarea":z=_=null;for(k in t)if(c=t[k],t.hasOwnProperty(k)&&c!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:zn(n,i,k,null,l,c)}for(S in l)if(c=l[S],d=t[S],l.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":_=c;break;case"defaultValue":z=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:c!==d&&zn(n,i,S,c,l,d)}gf(n,_,z);return;case"option":for(var mn in t)if(_=t[mn],t.hasOwnProperty(mn)&&_!=null&&!l.hasOwnProperty(mn))switch(mn){case"selected":n.selected=!1;break;default:zn(n,i,mn,null,l,_)}for(O in l)if(_=l[O],z=t[O],l.hasOwnProperty(O)&&_!==z&&(_!=null||z!=null))switch(O){case"selected":n.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:zn(n,i,O,_,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var cn in t)_=t[cn],t.hasOwnProperty(cn)&&_!=null&&!l.hasOwnProperty(cn)&&zn(n,i,cn,null,l,_);for(E in l)if(_=l[E],z=t[E],l.hasOwnProperty(E)&&_!==z&&(_!=null||z!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,i));break;default:zn(n,i,E,_,l,z)}return;default:if(Xs(i)){for(var jn in t)_=t[jn],t.hasOwnProperty(jn)&&_!==void 0&&!l.hasOwnProperty(jn)&&Gc(n,i,jn,void 0,l,_);for(j in l)_=l[j],z=t[j],!l.hasOwnProperty(j)||_===z||_===void 0&&z===void 0||Gc(n,i,j,_,l,z);return}}for(var N in t)_=t[N],t.hasOwnProperty(N)&&_!=null&&!l.hasOwnProperty(N)&&zn(n,i,N,null,l,_);for(Y in l)_=l[Y],z=t[Y],!l.hasOwnProperty(Y)||_===z||_==null&&z==null||zn(n,i,Y,_,l,z)}var Ec=null,Pc=null;function mu(n){return n.nodeType===9?n:n.ownerDocument}function vv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function _c(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=null;function OO(){var n=window.event;return n&&n.type==="popstate"?n===Lc?!1:(Lc=n,!0):(Lc=null,!1)}var yv=typeof setTimeout=="function"?setTimeout:void 0,wO=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,CO=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(n){return pv.resolve(null).then(n).catch(KO)}:yv;function KO(n){setTimeout(function(){throw n})}function ii(n){return n==="head"}function bv(n,i){var t=i,l=0,c=0;do{var d=t.nextSibling;if(n.removeChild(t),d&&d.nodeType===8)if(t=d.data,t==="/$"){if(0<l&&8>l){t=l;var S=n.ownerDocument;if(t&1&&Kt(S.documentElement),t&2&&Kt(S.body),t&4)for(t=S.head,Kt(t),S=t.firstChild;S;){var k=S.nextSibling,O=S.nodeName;S[Fo]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||t.removeChild(S),S=k}}if(c===0){n.removeChild(d),Pt(i);return}c--}else t==="$"||t==="$?"||t==="$!"?c++:l=t.charCodeAt(0)-48;else l=0;t=d}while(t);Pt(i)}function zc(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var t=i;switch(i=i.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":zc(t),Us(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function IO(n,i,t,l){for(;n.nodeType===1;){var c=t;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Fo])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==c.rel||n.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||n.getAttribute("title")!==(c.title==null?null:c.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(c.src==null?null:c.src)||n.getAttribute("type")!==(c.type==null?null:c.type)||n.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=qe(n.nextSibling),n===null)break}return null}function RO(n,i,t){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=qe(n.nextSibling),n===null))return null;return n}function jc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function BO(n,i){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")i();else{var l=function(){i(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function qe(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var xc=null;function Tv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(i===0)return n;i--}else t==="/$"&&i++}n=n.previousSibling}return null}function Mv(n,i,t){switch(i=mu(t),n){case"html":if(n=i.documentElement,!n)throw Error(u(452));return n;case"head":if(n=i.head,!n)throw Error(u(453));return n;case"body":if(n=i.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function Kt(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Us(n)}var Ze=new Map,Av=new Set;function fu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ia=Z.d;Z.d={f:NO,r:HO,D:GO,C:EO,L:PO,m:_O,X:zO,S:LO,M:jO};function NO(){var n=Ia.f(),i=tu();return n||i}function HO(n){var i=xi(n);i!==null&&i.tag===5&&i.type==="form"?Fg(i):Ia.r(n)}var Mo=typeof document>"u"?null:document;function Dv(n,i,t){var l=Mo;if(l&&typeof i=="string"&&i){var c=xe(i);c='link[rel="'+n+'"][href="'+c+'"]',typeof t=="string"&&(c+='[crossorigin="'+t+'"]'),Av.has(c)||(Av.add(c),n={rel:n,crossOrigin:t,href:i},l.querySelector(c)===null&&(i=l.createElement("link"),fe(i,"link",n),se(i),l.head.appendChild(i)))}}function GO(n){Ia.D(n),Dv("dns-prefetch",n,null)}function EO(n,i){Ia.C(n,i),Dv("preconnect",n,i)}function PO(n,i,t){Ia.L(n,i,t);var l=Mo;if(l&&n&&i){var c='link[rel="preload"][as="'+xe(i)+'"]';i==="image"&&t&&t.imageSrcSet?(c+='[imagesrcset="'+xe(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(c+='[imagesizes="'+xe(t.imageSizes)+'"]')):c+='[href="'+xe(n)+'"]';var d=c;switch(i){case"style":d=Ao(n);break;case"script":d=Do(n)}Ze.has(d)||(n=v({rel:"preload",href:i==="image"&&t&&t.imageSrcSet?void 0:n,as:i},t),Ze.set(d,n),l.querySelector(c)!==null||i==="style"&&l.querySelector(It(d))||i==="script"&&l.querySelector(Rt(d))||(i=l.createElement("link"),fe(i,"link",n),se(i),l.head.appendChild(i)))}}function _O(n,i){Ia.m(n,i);var t=Mo;if(t&&n){var l=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+xe(l)+'"][href="'+xe(n)+'"]',d=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Do(n)}if(!Ze.has(d)&&(n=v({rel:"modulepreload",href:n},i),Ze.set(d,n),t.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Rt(d)))return}l=t.createElement("link"),fe(l,"link",n),se(l),t.head.appendChild(l)}}}function LO(n,i,t){Ia.S(n,i,t);var l=Mo;if(l&&n){var c=$i(l).hoistableStyles,d=Ao(n);i=i||"default";var S=c.get(d);if(!S){var k={loading:0,preload:null};if(S=l.querySelector(It(d)))k.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},t),(t=Ze.get(d))&&$c(n,t);var O=S=l.createElement("link");se(O),fe(O,"link",n),O._p=new Promise(function(E,j){O.onload=E,O.onerror=j}),O.addEventListener("load",function(){k.loading|=1}),O.addEventListener("error",function(){k.loading|=2}),k.loading|=4,gu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:k},c.set(d,S)}}}function zO(n,i){Ia.X(n,i);var t=Mo;if(t&&n){var l=$i(t).hoistableScripts,c=Do(n),d=l.get(c);d||(d=t.querySelector(Rt(c)),d||(n=v({src:n,async:!0},i),(i=Ze.get(c))&&Fc(n,i),d=t.createElement("script"),se(d),fe(d,"link",n),t.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function jO(n,i){Ia.M(n,i);var t=Mo;if(t&&n){var l=$i(t).hoistableScripts,c=Do(n),d=l.get(c);d||(d=t.querySelector(Rt(c)),d||(n=v({src:n,async:!0,type:"module"},i),(i=Ze.get(c))&&Fc(n,i),d=t.createElement("script"),se(d),fe(d,"link",n),t.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function Ov(n,i,t,l){var c=(c=un.current)?fu(c):null;if(!c)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(i=Ao(t.href),t=$i(c).hoistableStyles,l=t.get(i),l||(l={type:"style",instance:null,count:0,state:null},t.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ao(t.href);var d=$i(c).hoistableStyles,S=d.get(n);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,S),(d=c.querySelector(It(n)))&&!d._p&&(S.instance=d,S.state.loading=5),Ze.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ze.set(n,t),d||xO(c,n,t,S.state))),i&&l===null)throw Error(u(528,""));return S}if(i&&l!==null)throw Error(u(529,""));return null;case"script":return i=t.async,t=t.src,typeof t=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Do(t),t=$i(c).hoistableScripts,l=t.get(i),l||(l={type:"script",instance:null,count:0,state:null},t.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function Ao(n){return'href="'+xe(n)+'"'}function It(n){return'link[rel="stylesheet"]['+n+"]"}function wv(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function xO(n,i,t,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),fe(i,"link",t),se(i),n.head.appendChild(i))}function Do(n){return'[src="'+xe(n)+'"]'}function Rt(n){return"script[async]"+n}function Cv(n,i,t){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+xe(t.href)+'"]');if(l)return i.instance=l,se(l),l;var c=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),se(l),fe(l,"style",c),gu(l,t.precedence,n),i.instance=l;case"stylesheet":c=Ao(t.href);var d=n.querySelector(It(c));if(d)return i.state.loading|=4,i.instance=d,se(d),d;l=wv(t),(c=Ze.get(c))&&$c(l,c),d=(n.ownerDocument||n).createElement("link"),se(d);var S=d;return S._p=new Promise(function(k,O){S.onload=k,S.onerror=O}),fe(d,"link",l),i.state.loading|=4,gu(d,t.precedence,n),i.instance=d;case"script":return d=Do(t.src),(c=n.querySelector(Rt(d)))?(i.instance=c,se(c),c):(l=t,(c=Ze.get(d))&&(l=v({},t),Fc(l,c)),n=n.ownerDocument||n,c=n.createElement("script"),se(c),fe(c,"link",l),n.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(u(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gu(l,t.precedence,n));return i.instance}function gu(n,i,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,d=c,S=0;S<l.length;S++){var k=l[S];if(k.dataset.precedence===i)d=k;else if(d!==c)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=t.nodeType===9?t.head:t,i.insertBefore(n,i.firstChild))}function $c(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Fc(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Su=null;function Kv(n,i,t){if(Su===null){var l=new Map,c=Su=new Map;c.set(t,l)}else c=Su,l=c.get(t),l||(l=new Map,c.set(t,l));if(l.has(n))return l;for(l.set(n,null),t=t.getElementsByTagName(n),c=0;c<t.length;c++){var d=t[c];if(!(d[Fo]||d[ve]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=n+S;var k=l.get(S);k?k.push(d):l.set(S,[d])}}return l}function Iv(n,i,t){n=n.ownerDocument||n,n.head.insertBefore(t,i==="title"?n.querySelector("head > title"):null)}function $O(n,i,t){if(t===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Rv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Bt=null;function FO(){}function UO(n,i,t){if(Bt===null)throw Error(u(475));var l=Bt;if(i.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Ao(t.href),d=n.querySelector(It(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=vu.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,se(d);return}d=n.ownerDocument||n,t=wv(t),(c=Ze.get(c))&&$c(t,c),d=d.createElement("link"),se(d);var S=d;S._p=new Promise(function(k,O){S.onload=k,S.onerror=O}),fe(d,"link",t),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=vu.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function YO(){if(Bt===null)throw Error(u(475));var n=Bt;return n.stylesheets&&n.count===0&&Uc(n,n.stylesheets),0<n.count?function(i){var t=setTimeout(function(){if(n.stylesheets&&Uc(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(t)}}:null}function vu(){if(this.count--,this.count===0){if(this.stylesheets)Uc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ku=null;function Uc(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ku=new Map,i.forEach(VO,n),ku=null,vu.call(n))}function VO(n,i){if(!(i.state.loading&4)){var t=ku.get(n);if(t)var l=t.get(null);else{t=new Map,ku.set(n,t);for(var c=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(t.set(S.dataset.precedence,S),l=S)}l&&t.set(null,l)}c=i.instance,S=c.getAttribute("data-precedence"),d=t.get(S)||l,d===l&&t.set(null,c),t.set(S,c),this.count++,l=vu.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),d?d.parentNode.insertBefore(c,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(c,n.firstChild)),i.state.loading|=4}}var Nt={$$typeof:A,Provider:null,Consumer:null,_currentValue:en,_currentValue2:en,_threadCount:0};function WO(n,i,t,l,c,d,S,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Bv(n,i,t,l,c,d,S,k,O,E,j,Y){return n=new WO(n,i,t,S,k,O,E,Y),i=1,d===!0&&(i|=24),d=Ne(3,null,null,i),n.current=d,d.stateNode=n,i=Ol(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:t,cache:i},Il(d),n}function Nv(n){return n?(n=eo,n):eo}function Hv(n,i,t,l,c,d){c=Nv(c),l.context===null?l.context=c:l.pendingContext=c,l=Fa(i),l.payload={element:t},d=d===void 0?null:d,d!==null&&(l.callback=d),t=Ua(n,l,i),t!==null&&(_e(t,n,i),lt(t,n,i))}function Gv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<i?t:i}}function Yc(n,i){Gv(n,i),(n=n.alternate)&&Gv(n,i)}function Ev(n){if(n.tag===13){var i=no(n,67108864);i!==null&&_e(i,n,67108864),Yc(n,67108864)}}var yu=!0;function ZO(n,i,t,l){var c=L.T;L.T=null;var d=Z.p;try{Z.p=2,Vc(n,i,t,l)}finally{Z.p=d,L.T=c}}function JO(n,i,t,l){var c=L.T;L.T=null;var d=Z.p;try{Z.p=8,Vc(n,i,t,l)}finally{Z.p=d,L.T=c}}function Vc(n,i,t,l){if(yu){var c=Wc(l);if(c===null)Hc(n,i,l,pu,t),_v(n,l);else if(qO(c,n,i,t,l))l.stopPropagation();else if(_v(n,l),i&4&&-1<XO.indexOf(n)){for(;c!==null;){var d=xi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=mi(d.pendingLanes);if(S!==0){var k=d;for(k.pendingLanes|=2,k.entangledLanes|=2;S;){var O=1<<31-Re(S);k.entanglements[1]|=O,S&=~O}sa(d),(Pn&6)===0&&(iu=ia()+500,Ot(0))}}break;case 13:k=no(d,2),k!==null&&_e(k,d,2),tu(),Yc(d,2)}if(d=Wc(l),d===null&&Hc(n,i,l,pu,t),d===c)break;c=d}c!==null&&l.stopPropagation()}else Hc(n,i,l,null,t)}}function Wc(n){return n=Qs(n),Zc(n)}var pu=null;function Zc(n){if(pu=null,n=ji(n),n!==null){var i=s(n);if(i===null)n=null;else{var t=i.tag;if(t===13){if(n=h(i),n!==null)return n;n=null}else if(t===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return pu=n,null}function Pv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(EA()){case Jm:return 2;case Xm:return 8;case dr:case PA:return 32;case qm:return 268435456;default:return 32}default:return 32}}var Jc=!1,oi=null,ti=null,ri=null,Ht=new Map,Gt=new Map,ui=[],XO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(n,i){switch(n){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":Ht.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(i.pointerId)}}function Et(n,i,t,l,c,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:t,eventSystemFlags:l,nativeEvent:d,targetContainers:[c]},i!==null&&(i=xi(i),i!==null&&Ev(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),n)}function qO(n,i,t,l,c){switch(i){case"focusin":return oi=Et(oi,n,i,t,l,c),!0;case"dragenter":return ti=Et(ti,n,i,t,l,c),!0;case"mouseover":return ri=Et(ri,n,i,t,l,c),!0;case"pointerover":var d=c.pointerId;return Ht.set(d,Et(Ht.get(d)||null,n,i,t,l,c)),!0;case"gotpointercapture":return d=c.pointerId,Gt.set(d,Et(Gt.get(d)||null,n,i,t,l,c)),!0}return!1}function Lv(n){var i=ji(n.target);if(i!==null){var t=s(i);if(t!==null){if(i=t.tag,i===13){if(i=h(t),i!==null){n.blockedOn=i,UA(n.priority,function(){if(t.tag===13){var l=Pe();l=xs(l);var c=no(t,l);c!==null&&_e(c,t,l),Yc(t,l)}});return}}else if(i===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var t=Wc(n.nativeEvent);if(t===null){t=n.nativeEvent;var l=new t.constructor(t.type,t);qs=l,t.target.dispatchEvent(l),qs=null}else return i=xi(t),i!==null&&Ev(i),n.blockedOn=t,!1;i.shift()}return!0}function zv(n,i,t){bu(n)&&t.delete(i)}function QO(){Jc=!1,oi!==null&&bu(oi)&&(oi=null),ti!==null&&bu(ti)&&(ti=null),ri!==null&&bu(ri)&&(ri=null),Ht.forEach(zv),Gt.forEach(zv)}function Tu(n,i){n.blockedOn===i&&(n.blockedOn=null,Jc||(Jc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,QO)))}var Mu=null;function jv(n){Mu!==n&&(Mu=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Mu===n&&(Mu=null);for(var i=0;i<n.length;i+=3){var t=n[i],l=n[i+1],c=n[i+2];if(typeof l!="function"){if(Zc(l||t)===null)continue;break}var d=xi(t);d!==null&&(n.splice(i,3),i-=3,Zl(d,{pending:!0,data:c,method:t.method,action:l},l,c))}}))}function Pt(n){function i(O){return Tu(O,n)}oi!==null&&Tu(oi,n),ti!==null&&Tu(ti,n),ri!==null&&Tu(ri,n),Ht.forEach(i),Gt.forEach(i);for(var t=0;t<ui.length;t++){var l=ui[t];l.blockedOn===n&&(l.blockedOn=null)}for(;0<ui.length&&(t=ui[0],t.blockedOn===null);)Lv(t),t.blockedOn===null&&ui.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var c=t[l],d=t[l+1],S=c[Me]||null;if(typeof d=="function")S||jv(t);else if(S){var k=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[Me]||null)k=S.formAction;else if(Zc(c)!==null)continue}else k=S.action;typeof k=="function"?t[l+1]=k:(t.splice(l,3),l-=3),jv(t)}}}function Xc(n){this._internalRoot=n}Au.prototype.render=Xc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(u(409));var t=i.current,l=Pe();Hv(t,l,n,i,null,null)},Au.prototype.unmount=Xc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hv(n.current,2,null,n,null,null),tu(),i[zi]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var i=of();n={blockedOn:null,target:n,priority:i};for(var t=0;t<ui.length&&i!==0&&i<ui[t].priority;t++);ui.splice(t,0,n),t===0&&Lv(n)}};var xv=o.version;if(xv!=="19.1.1")throw Error(u(527,xv,"19.1.1"));Z.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=m(i),n=n!==null?f(n):null,n=n===null?null:n.stateNode,n};var nw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{jo=Du.inject(nw),Ie=Du}catch{}}return Lt.createRoot=function(n,i){if(!a(n))throw Error(u(299));var t=!1,l="",c=oS,d=tS,S=rS,k=null;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(k=i.unstable_transitionCallbacks)),i=Bv(n,1,!1,null,null,t,l,c,d,S,k,null),n[zi]=i.current,Nc(n),new Xc(i)},Lt.hydrateRoot=function(n,i,t){if(!a(n))throw Error(u(299));var l=!1,c="",d=oS,S=tS,k=rS,O=null,E=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(c=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(S=t.onCaughtError),t.onRecoverableError!==void 0&&(k=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(O=t.unstable_transitionCallbacks),t.formState!==void 0&&(E=t.formState)),i=Bv(n,1,!0,i,t??null,l,c,d,S,k,O,E),i.context=Nv(null),t=i.current,l=Pe(),l=xs(l),c=Fa(l),c.callback=null,Ua(t,c,l),t=l,i.current.lanes=t,$o(i,t),sa(i),n[zi]=i.current,Nc(n),new Au(i)},Lt.version="19.1.1",Lt}var Qv;function cw(){if(Qv)return nh.exports;Qv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),nh.exports=lw(),nh.exports}var hw=cw();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nk="popstate";function dw(e={}){function o(u,a){let{pathname:s,search:h,hash:g}=u.location;return Th("",{pathname:s,search:h,hash:g},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(u,a){return typeof a=="string"?a:Vt(a)}return fw(o,r,null,e)}function Wn(e,o){if(e===!1||e===null||typeof e>"u")throw new Error(o)}function ma(e,o){if(!e){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function mw(){return Math.random().toString(36).substring(2,10)}function ek(e,o){return{usr:e.state,key:e.key,idx:o}}function Th(e,o,r=null,u){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof o=="string"?Go(o):o,state:r,key:o&&o.key||u||mw()}}function Vt({pathname:e="/",search:o="",hash:r=""}){return o&&o!=="?"&&(e+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Go(e){let o={};if(e){let r=e.indexOf("#");r>=0&&(o.hash=e.substring(r),e=e.substring(0,r));let u=e.indexOf("?");u>=0&&(o.search=e.substring(u),e=e.substring(0,u)),e&&(o.pathname=e)}return o}function fw(e,o,r,u={}){let{window:a=document.defaultView,v5Compat:s=!1}=u,h=a.history,g="POP",m=null,f=v();f==null&&(f=0,h.replaceState({...h.state,idx:f},""));function v(){return(h.state||{idx:null}).idx}function y(){g="POP";let b=v(),p=b==null?null:b-f;f=b,m&&m({action:g,location:R.location,delta:p})}function M(b,p){g="PUSH";let w=Th(R.location,b,p);f=v()+1;let A=ek(w,f),P=R.createHref(w);try{h.pushState(A,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(P)}s&&m&&m({action:g,location:R.location,delta:1})}function C(b,p){g="REPLACE";let w=Th(R.location,b,p);f=v();let A=ek(w,f),P=R.createHref(w);h.replaceState(A,"",P),s&&m&&m({action:g,location:R.location,delta:0})}function D(b){return gw(b)}let R={get action(){return g},get location(){return e(a,h)},listen(b){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(nk,y),m=b,()=>{a.removeEventListener(nk,y),m=null}},createHref(b){return o(a,b)},createURL:D,encodeLocation(b){let p=D(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:M,replace:C,go(b){return h.go(b)}};return R}function gw(e,o=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Wn(r,"No window.location.(origin|href) available to create URL");let u=typeof e=="string"?e:Vt(e);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=r+u),new URL(u,r)}function ky(e,o,r="/"){return Sw(e,o,r,!1)}function Sw(e,o,r,u){let a=typeof o=="string"?Go(o):o,s=Ha(a.pathname||"/",r);if(s==null)return null;let h=yy(e);vw(h);let g=null;for(let m=0;g==null&&m<h.length;++m){let f=Cw(s);g=Ow(h[m],f,u)}return g}function yy(e,o=[],r=[],u=""){let a=(s,h,g)=>{let m={relativePath:g===void 0?s.path||"":g,caseSensitive:s.caseSensitive===!0,childrenIndex:h,route:s};m.relativePath.startsWith("/")&&(Wn(m.relativePath.startsWith(u),`Absolute route path "${m.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(u.length));let f=Ba([u,m.relativePath]),v=r.concat(m);s.children&&s.children.length>0&&(Wn(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),yy(s.children,o,v,f)),!(s.path==null&&!s.index)&&o.push({path:f,score:Aw(f,s.index),routesMeta:v})};return e.forEach((s,h)=>{var g;if(s.path===""||!((g=s.path)!=null&&g.includes("?")))a(s,h);else for(let m of py(s.path))a(s,h,m)}),o}function py(e){let o=e.split("/");if(o.length===0)return[];let[r,...u]=o,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(u.length===0)return a?[s,""]:[s];let h=py(u.join("/")),g=[];return g.push(...h.map(m=>m===""?s:[s,m].join("/"))),a&&g.push(...h),g.map(m=>e.startsWith("/")&&m===""?"/":m)}function vw(e){e.sort((o,r)=>o.score!==r.score?r.score-o.score:Dw(o.routesMeta.map(u=>u.childrenIndex),r.routesMeta.map(u=>u.childrenIndex)))}var kw=/^:[\w-]+$/,yw=3,pw=2,bw=1,Tw=10,Mw=-2,ak=e=>e==="*";function Aw(e,o){let r=e.split("/"),u=r.length;return r.some(ak)&&(u+=Mw),o&&(u+=pw),r.filter(a=>!ak(a)).reduce((a,s)=>a+(kw.test(s)?yw:s===""?bw:Tw),u)}function Dw(e,o){return e.length===o.length&&e.slice(0,-1).every((u,a)=>u===o[a])?e[e.length-1]-o[o.length-1]:0}function Ow(e,o,r=!1){let{routesMeta:u}=e,a={},s="/",h=[];for(let g=0;g<u.length;++g){let m=u[g],f=g===u.length-1,v=s==="/"?o:o.slice(s.length)||"/",y=Ju({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},v),M=m.route;if(!y&&f&&r&&!u[u.length-1].route.index&&(y=Ju({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!y)return null;Object.assign(a,y.params),h.push({params:a,pathname:Ba([s,y.pathname]),pathnameBase:Bw(Ba([s,y.pathnameBase])),route:M}),y.pathnameBase!=="/"&&(s=Ba([s,y.pathnameBase]))}return h}function Ju(e,o){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,u]=ww(e.path,e.caseSensitive,e.end),a=o.match(r);if(!a)return null;let s=a[0],h=s.replace(/(.)\/+$/,"$1"),g=a.slice(1);return{params:u.reduce((f,{paramName:v,isOptional:y},M)=>{if(v==="*"){let D=g[M]||"";h=s.slice(0,s.length-D.length).replace(/(.)\/+$/,"$1")}const C=g[M];return y&&!C?f[v]=void 0:f[v]=(C||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:h,pattern:e}}function ww(e,o=!1,r=!0){ma(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let u=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,m)=>(u.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(u.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,o?void 0:"i"),u]}function Cw(e){try{return e.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return ma(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),e}}function Ha(e,o){if(o==="/")return e;if(!e.toLowerCase().startsWith(o.toLowerCase()))return null;let r=o.endsWith("/")?o.length-1:o.length,u=e.charAt(r);return u&&u!=="/"?null:e.slice(r)||"/"}function Kw(e,o="/"){let{pathname:r,search:u="",hash:a=""}=typeof e=="string"?Go(e):e;return{pathname:r?r.startsWith("/")?r:Iw(r,o):o,search:Nw(u),hash:Hw(a)}}function Iw(e,o){let r=o.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function oh(e,o,r,u){return`Cannot include a '${e}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rw(e){return e.filter((o,r)=>r===0||o.route.path&&o.route.path.length>0)}function by(e){let o=Rw(e);return o.map((r,u)=>u===o.length-1?r.pathname:r.pathnameBase)}function Ty(e,o,r,u=!1){let a;typeof e=="string"?a=Go(e):(a={...e},Wn(!a.pathname||!a.pathname.includes("?"),oh("?","pathname","search",a)),Wn(!a.pathname||!a.pathname.includes("#"),oh("#","pathname","hash",a)),Wn(!a.search||!a.search.includes("#"),oh("#","search","hash",a)));let s=e===""||a.pathname==="",h=s?"/":a.pathname,g;if(h==null)g=r;else{let y=o.length-1;if(!u&&h.startsWith("..")){let M=h.split("/");for(;M[0]==="..";)M.shift(),y-=1;a.pathname=M.join("/")}g=y>=0?o[y]:"/"}let m=Kw(a,g),f=h&&h!=="/"&&h.endsWith("/"),v=(s||h===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(f||v)&&(m.pathname+="/"),m}var Ba=e=>e.join("/").replace(/\/\/+/g,"/"),Bw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var My=["POST","PUT","PATCH","DELETE"];new Set(My);var Ew=["GET",...My];new Set(Ew);var Eo=T.createContext(null);Eo.displayName="DataRouter";var vs=T.createContext(null);vs.displayName="DataRouterState";T.createContext(!1);var Ay=T.createContext({isTransitioning:!1});Ay.displayName="ViewTransition";var Pw=T.createContext(new Map);Pw.displayName="Fetchers";var _w=T.createContext(null);_w.displayName="Await";var fa=T.createContext(null);fa.displayName="Navigation";var ar=T.createContext(null);ar.displayName="Location";var Ea=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ea.displayName="Route";var $h=T.createContext(null);$h.displayName="RouteError";function Lw(e,{relative:o}={}){Wn(ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:u}=T.useContext(fa),{hash:a,pathname:s,search:h}=or(e,{relative:o}),g=s;return r!=="/"&&(g=s==="/"?r:Ba([r,s])),u.createHref({pathname:g,search:h,hash:a})}function ir(){return T.useContext(ar)!=null}function Pa(){return Wn(ir(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(ar).location}var Dy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Oy(e){T.useContext(fa).static||T.useLayoutEffect(e)}function Fh(){let{isDataRoute:e}=T.useContext(Ea);return e?qw():zw()}function zw(){Wn(ir(),"useNavigate() may be used only in the context of a <Router> component.");let e=T.useContext(Eo),{basename:o,navigator:r}=T.useContext(fa),{matches:u}=T.useContext(Ea),{pathname:a}=Pa(),s=JSON.stringify(by(u)),h=T.useRef(!1);return Oy(()=>{h.current=!0}),T.useCallback((m,f={})=>{if(ma(h.current,Dy),!h.current)return;if(typeof m=="number"){r.go(m);return}let v=Ty(m,JSON.parse(s),a,f.relative==="path");e==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:Ba([o,v.pathname])),(f.replace?r.replace:r.push)(v,f.state,f)},[o,r,s,a,e])}T.createContext(null);function or(e,{relative:o}={}){let{matches:r}=T.useContext(Ea),{pathname:u}=Pa(),a=JSON.stringify(by(r));return T.useMemo(()=>Ty(e,JSON.parse(a),u,o==="path"),[e,a,u,o])}function jw(e,o){return wy(e,o)}function wy(e,o,r,u){var p;Wn(ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=T.useContext(fa),{matches:s}=T.useContext(Ea),h=s[s.length-1],g=h?h.params:{},m=h?h.pathname:"/",f=h?h.pathnameBase:"/",v=h&&h.route;{let w=v&&v.path||"";Cy(m,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=Pa(),M;if(o){let w=typeof o=="string"?Go(o):o;Wn(f==="/"||((p=w.pathname)==null?void 0:p.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=y;let C=M.pathname||"/",D=C;if(f!=="/"){let w=f.replace(/^\//,"").split("/");D="/"+C.replace(/^\//,"").split("/").slice(w.length).join("/")}let R=ky(e,{pathname:D});ma(v||R!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),ma(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Yw(R&&R.map(w=>Object.assign({},w,{params:Object.assign({},g,w.params),pathname:Ba([f,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?f:Ba([f,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r,u);return o&&b?T.createElement(ar.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},b):b}function xw(){let e=Xw(),o=Gw(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,u="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:u},s={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",e),h=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:s},"ErrorBoundary")," or"," ",T.createElement("code",{style:s},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},o),r?T.createElement("pre",{style:a},r):null,h)}var $w=T.createElement(xw,null),Fw=class extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,o){return o.location!==e.location||o.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:o.error,location:o.location,revalidation:e.revalidation||o.revalidation}}componentDidCatch(e,o){console.error("React Router caught the following error during render",e,o)}render(){return this.state.error!==void 0?T.createElement(Ea.Provider,{value:this.props.routeContext},T.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Uw({routeContext:e,match:o,children:r}){let u=T.useContext(Eo);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),T.createElement(Ea.Provider,{value:e},r)}function Yw(e,o=[],r=null,u=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(o.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,s=r==null?void 0:r.errors;if(s!=null){let m=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Wn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let h=!1,g=-1;if(r)for(let m=0;m<a.length;m++){let f=a[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(g=m),f.route.id){let{loaderData:v,errors:y}=r,M=f.route.loader&&!v.hasOwnProperty(f.route.id)&&(!y||y[f.route.id]===void 0);if(f.route.lazy||M){h=!0,g>=0?a=a.slice(0,g+1):a=[a[0]];break}}}return a.reduceRight((m,f,v)=>{let y,M=!1,C=null,D=null;r&&(y=s&&f.route.id?s[f.route.id]:void 0,C=f.route.errorElement||$w,h&&(g<0&&v===0?(Cy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,D=null):g===v&&(M=!0,D=f.route.hydrateFallbackElement||null)));let R=o.concat(a.slice(0,v+1)),b=()=>{let p;return y?p=C:M?p=D:f.route.Component?p=T.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=m,T.createElement(Uw,{match:f,routeContext:{outlet:m,matches:R,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?T.createElement(Fw,{location:r.location,revalidation:r.revalidation,component:C,error:y,children:b(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):b()},null)}function Uh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vw(e){let o=T.useContext(Eo);return Wn(o,Uh(e)),o}function Ww(e){let o=T.useContext(vs);return Wn(o,Uh(e)),o}function Zw(e){let o=T.useContext(Ea);return Wn(o,Uh(e)),o}function Yh(e){let o=Zw(e),r=o.matches[o.matches.length-1];return Wn(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Jw(){return Yh("useRouteId")}function Xw(){var u;let e=T.useContext($h),o=Ww("useRouteError"),r=Yh("useRouteError");return e!==void 0?e:(u=o.errors)==null?void 0:u[r]}function qw(){let{router:e}=Vw("useNavigate"),o=Yh("useNavigate"),r=T.useRef(!1);return Oy(()=>{r.current=!0}),T.useCallback(async(a,s={})=>{ma(r.current,Dy),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:o,...s}))},[e,o])}var ik={};function Cy(e,o,r){!o&&!ik[e]&&(ik[e]=!0,ma(!1,r))}T.memo(Qw);function Qw({routes:e,future:o,state:r}){return wy(e,void 0,r,o)}function Ri(e){Wn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nC({basename:e="/",children:o=null,location:r,navigationType:u="POP",navigator:a,static:s=!1}){Wn(!ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=e.replace(/^\/*/,"/"),g=T.useMemo(()=>({basename:h,navigator:a,static:s,future:{}}),[h,a,s]);typeof r=="string"&&(r=Go(r));let{pathname:m="/",search:f="",hash:v="",state:y=null,key:M="default"}=r,C=T.useMemo(()=>{let D=Ha(m,h);return D==null?null:{location:{pathname:D,search:f,hash:v,state:y,key:M},navigationType:u}},[h,m,f,v,y,M,u]);return ma(C!=null,`<Router basename="${h}"> is not able to match the URL "${m}${f}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:T.createElement(fa.Provider,{value:g},T.createElement(ar.Provider,{children:o,value:C}))}function eC({children:e,location:o}){return jw(Mh(e),o)}function Mh(e,o=[]){let r=[];return T.Children.forEach(e,(u,a)=>{if(!T.isValidElement(u))return;let s=[...o,a];if(u.type===T.Fragment){r.push.apply(r,Mh(u.props.children,s));return}Wn(u.type===Ri,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Wn(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||s.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Mh(u.props.children,s)),r.push(h)}),r}var $u="get",Fu="application/x-www-form-urlencoded";function ks(e){return e!=null&&typeof e.tagName=="string"}function aC(e){return ks(e)&&e.tagName.toLowerCase()==="button"}function iC(e){return ks(e)&&e.tagName.toLowerCase()==="form"}function oC(e){return ks(e)&&e.tagName.toLowerCase()==="input"}function tC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rC(e,o){return e.button===0&&(!o||o==="_self")&&!tC(e)}var Ou=null;function uC(){if(Ou===null)try{new FormData(document.createElement("form"),0),Ou=!1}catch{Ou=!0}return Ou}var sC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function th(e){return e!=null&&!sC.has(e)?(ma(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fu}"`),null):e}function lC(e,o){let r,u,a,s,h;if(iC(e)){let g=e.getAttribute("action");u=g?Ha(g,o):null,r=e.getAttribute("method")||$u,a=th(e.getAttribute("enctype"))||Fu,s=new FormData(e)}else if(aC(e)||oC(e)&&(e.type==="submit"||e.type==="image")){let g=e.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||g.getAttribute("action");if(u=m?Ha(m,o):null,r=e.getAttribute("formmethod")||g.getAttribute("method")||$u,a=th(e.getAttribute("formenctype"))||th(g.getAttribute("enctype"))||Fu,s=new FormData(g,e),!uC()){let{name:f,type:v,value:y}=e;if(v==="image"){let M=f?`${f}.`:"";s.append(`${M}x`,"0"),s.append(`${M}y`,"0")}else f&&s.append(f,y)}}else{if(ks(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=$u,u=null,a=Fu,h=e}return s&&a==="text/plain"&&(h=s,s=void 0),{action:u,method:r.toLowerCase(),encType:a,formData:s,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vh(e,o){if(e===!1||e===null||typeof e>"u")throw new Error(o)}function cC(e,o,r){let u=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return u.pathname==="/"?u.pathname=`_root.${r}`:o&&Ha(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${r}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${r}`,u}async function hC(e,o){if(e.id in o)return o[e.id];try{let r=await import(e.module);return o[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function mC(e,o,r){let u=await Promise.all(e.map(async a=>{let s=o.routes[a.route.id];if(s){let h=await hC(s,r);return h.links?h.links():[]}return[]}));return vC(u.flat(1).filter(dC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function ok(e,o,r,u,a,s){let h=(m,f)=>r[f]?m.route.id!==r[f].route.id:!0,g=(m,f)=>{var v;return r[f].pathname!==m.pathname||((v=r[f].route.path)==null?void 0:v.endsWith("*"))&&r[f].params["*"]!==m.params["*"]};return s==="assets"?o.filter((m,f)=>h(m,f)||g(m,f)):s==="data"?o.filter((m,f)=>{var y;let v=u.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(h(m,f)||g(m,f))return!0;if(m.route.shouldRevalidate){let M=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((y=r[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function fC(e,o,{includeHydrateFallback:r}={}){return gC(e.map(u=>{let a=o.routes[u.route.id];if(!a)return[];let s=[a.module];return a.clientActionModule&&(s=s.concat(a.clientActionModule)),a.clientLoaderModule&&(s=s.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(s=s.concat(a.hydrateFallbackModule)),a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function gC(e){return[...new Set(e)]}function SC(e){let o={},r=Object.keys(e).sort();for(let u of r)o[u]=e[u];return o}function vC(e,o){let r=new Set;return new Set(o),e.reduce((u,a)=>{let s=JSON.stringify(SC(a));return r.has(s)||(r.add(s),u.push({key:s,link:a})),u},[])}function Ky(){let e=T.useContext(Eo);return Vh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function kC(){let e=T.useContext(vs);return Vh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Wh=T.createContext(void 0);Wh.displayName="FrameworkContext";function Iy(){let e=T.useContext(Wh);return Vh(e,"You must render this element inside a <HydratedRouter> element"),e}function yC(e,o){let r=T.useContext(Wh),[u,a]=T.useState(!1),[s,h]=T.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:f,onMouseLeave:v,onTouchStart:y}=o,M=T.useRef(null);T.useEffect(()=>{if(e==="render"&&h(!0),e==="viewport"){let R=p=>{p.forEach(w=>{h(w.isIntersecting)})},b=new IntersectionObserver(R,{threshold:.5});return M.current&&b.observe(M.current),()=>{b.disconnect()}}},[e]),T.useEffect(()=>{if(u){let R=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(R)}}},[u]);let C=()=>{a(!0)},D=()=>{a(!1),h(!1)};return r?e!=="intent"?[s,M,{}]:[s,M,{onFocus:zt(g,C),onBlur:zt(m,D),onMouseEnter:zt(f,C),onMouseLeave:zt(v,D),onTouchStart:zt(y,C)}]:[!1,M,{}]}function zt(e,o){return r=>{e&&e(r),r.defaultPrevented||o(r)}}function pC({page:e,...o}){let{router:r}=Ky(),u=T.useMemo(()=>ky(r.routes,e,r.basename),[r.routes,e,r.basename]);return u?T.createElement(TC,{page:e,matches:u,...o}):null}function bC(e){let{manifest:o,routeModules:r}=Iy(),[u,a]=T.useState([]);return T.useEffect(()=>{let s=!1;return mC(e,o,r).then(h=>{s||a(h)}),()=>{s=!0}},[e,o,r]),u}function TC({page:e,matches:o,...r}){let u=Pa(),{manifest:a,routeModules:s}=Iy(),{basename:h}=Ky(),{loaderData:g,matches:m}=kC(),f=T.useMemo(()=>ok(e,o,m,a,u,"data"),[e,o,m,a,u]),v=T.useMemo(()=>ok(e,o,m,a,u,"assets"),[e,o,m,a,u]),y=T.useMemo(()=>{if(e===u.pathname+u.search+u.hash)return[];let D=new Set,R=!1;if(o.forEach(p=>{var A;let w=a.routes[p.route.id];!w||!w.hasLoader||(!f.some(P=>P.route.id===p.route.id)&&p.route.id in g&&((A=s[p.route.id])!=null&&A.shouldRevalidate)||w.hasClientLoader?R=!0:D.add(p.route.id))}),D.size===0)return[];let b=cC(e,h,"data");return R&&D.size>0&&b.searchParams.set("_routes",o.filter(p=>D.has(p.route.id)).map(p=>p.route.id).join(",")),[b.pathname+b.search]},[h,g,u,a,f,o,e,s]),M=T.useMemo(()=>fC(v,a),[v,a]),C=bC(v);return T.createElement(T.Fragment,null,y.map(D=>T.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...r})),M.map(D=>T.createElement("link",{key:D,rel:"modulepreload",href:D,...r})),C.map(({key:D,link:R})=>T.createElement("link",{key:D,nonce:r.nonce,...R})))}function MC(...e){return o=>{e.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}var Ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ry&&(window.__reactRouterVersion="7.8.0")}catch{}function AC({basename:e,children:o,window:r}){let u=T.useRef();u.current==null&&(u.current=dw({window:r,v5Compat:!0}));let a=u.current,[s,h]=T.useState({action:a.action,location:a.location}),g=T.useCallback(m=>{T.startTransition(()=>h(m))},[h]);return T.useLayoutEffect(()=>a.listen(g),[a,g]),T.createElement(nC,{basename:e,children:o,location:s.location,navigationType:s.action,navigator:a})}var By=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,li=T.forwardRef(function({onClick:o,discover:r="render",prefetch:u="none",relative:a,reloadDocument:s,replace:h,state:g,target:m,to:f,preventScrollReset:v,viewTransition:y,...M},C){let{basename:D}=T.useContext(fa),R=typeof f=="string"&&By.test(f),b,p=!1;if(typeof f=="string"&&R&&(b=f,Ry))try{let tn=new URL(window.location.href),bn=f.startsWith("//")?new URL(tn.protocol+f):new URL(f),vn=Ha(bn.pathname,D);bn.origin===tn.origin&&vn!=null?f=vn+bn.search+bn.hash:p=!0}catch{ma(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=Lw(f,{relative:a}),[A,P,I]=yC(u,M),U=CC(f,{replace:h,state:g,target:m,preventScrollReset:v,relative:a,viewTransition:y});function F(tn){o&&o(tn),tn.defaultPrevented||U(tn)}let Q=T.createElement("a",{...M,...I,href:b||w,onClick:p||s?o:F,ref:MC(C,P),target:m,"data-discover":!R&&r==="render"?"true":void 0});return A&&!R?T.createElement(T.Fragment,null,Q,T.createElement(pC,{page:w})):Q});li.displayName="Link";var DC=T.forwardRef(function({"aria-current":o="page",caseSensitive:r=!1,className:u="",end:a=!1,style:s,to:h,viewTransition:g,children:m,...f},v){let y=or(h,{relative:f.relative}),M=Pa(),C=T.useContext(vs),{navigator:D,basename:R}=T.useContext(fa),b=C!=null&&NC(y)&&g===!0,p=D.encodeLocation?D.encodeLocation(y).pathname:y.pathname,w=M.pathname,A=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(w=w.toLowerCase(),A=A?A.toLowerCase():null,p=p.toLowerCase()),A&&R&&(A=Ha(A,R)||A);const P=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let I=w===p||!a&&w.startsWith(p)&&w.charAt(P)==="/",U=A!=null&&(A===p||!a&&A.startsWith(p)&&A.charAt(p.length)==="/"),F={isActive:I,isPending:U,isTransitioning:b},Q=I?o:void 0,tn;typeof u=="function"?tn=u(F):tn=[u,I?"active":null,U?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let bn=typeof s=="function"?s(F):s;return T.createElement(li,{...f,"aria-current":Q,className:tn,ref:v,style:bn,to:h,viewTransition:g},typeof m=="function"?m(F):m)});DC.displayName="NavLink";var OC=T.forwardRef(({discover:e="render",fetcherKey:o,navigate:r,reloadDocument:u,replace:a,state:s,method:h=$u,action:g,onSubmit:m,relative:f,preventScrollReset:v,viewTransition:y,...M},C)=>{let D=RC(),R=BC(g,{relative:f}),b=h.toLowerCase()==="get"?"get":"post",p=typeof g=="string"&&By.test(g),w=A=>{if(m&&m(A),A.defaultPrevented)return;A.preventDefault();let P=A.nativeEvent.submitter,I=(P==null?void 0:P.getAttribute("formmethod"))||h;D(P||A.currentTarget,{fetcherKey:o,method:I,navigate:r,replace:a,state:s,relative:f,preventScrollReset:v,viewTransition:y})};return T.createElement("form",{ref:C,method:b,action:R,onSubmit:u?m:w,...M,"data-discover":!p&&e==="render"?"true":void 0})});OC.displayName="Form";function wC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ny(e){let o=T.useContext(Eo);return Wn(o,wC(e)),o}function CC(e,{target:o,replace:r,state:u,preventScrollReset:a,relative:s,viewTransition:h}={}){let g=Fh(),m=Pa(),f=or(e,{relative:s});return T.useCallback(v=>{if(rC(v,o)){v.preventDefault();let y=r!==void 0?r:Vt(m)===Vt(f);g(e,{replace:y,state:u,preventScrollReset:a,relative:s,viewTransition:h})}},[m,g,f,r,u,o,e,a,s,h])}var KC=0,IC=()=>`__${String(++KC)}__`;function RC(){let{router:e}=Ny("useSubmit"),{basename:o}=T.useContext(fa),r=Jw();return T.useCallback(async(u,a={})=>{let{action:s,method:h,encType:g,formData:m,body:f}=lC(u,o);if(a.navigate===!1){let v=a.fetcherKey||IC();await e.fetch(v,r,a.action||s,{preventScrollReset:a.preventScrollReset,formData:m,body:f,formMethod:a.method||h,formEncType:a.encType||g,flushSync:a.flushSync})}else await e.navigate(a.action||s,{preventScrollReset:a.preventScrollReset,formData:m,body:f,formMethod:a.method||h,formEncType:a.encType||g,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,o,r])}function BC(e,{relative:o}={}){let{basename:r}=T.useContext(fa),u=T.useContext(Ea);Wn(u,"useFormAction must be used inside a RouteContext");let[a]=u.matches.slice(-1),s={...or(e||".",{relative:o})},h=Pa();if(e==null){s.search=h.search;let g=new URLSearchParams(s.search),m=g.getAll("index");if(m.some(v=>v==="")){g.delete("index"),m.filter(y=>y).forEach(y=>g.append("index",y));let v=g.toString();s.search=v?`?${v}`:""}}return(!e||e===".")&&a.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(s.pathname=s.pathname==="/"?r:Ba([r,s.pathname])),Vt(s)}function NC(e,{relative:o}={}){let r=T.useContext(Ay);Wn(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Ny("useViewTransitionState"),a=or(e,{relative:o});if(!r.isTransitioning)return!1;let s=Ha(r.currentLocation.pathname,u)||r.currentLocation.pathname,h=Ha(r.nextLocation.pathname,u)||r.nextLocation.pathname;return Ju(a.pathname,h)!=null||Ju(a.pathname,s)!=null}var HC=vy();const GC="/Guess-The-Anime-OP/flower%20field.jpg",EC="/Guess-The-Anime-OP/frieren%20in%20river.png";function Hy(e=768){const o=`(max-width: ${e}px)`,[r,u]=T.useState(()=>window.matchMedia(o).matches);return T.useEffect(()=>{const a=window.matchMedia(o),s=h=>{u(h.matches)};return a.addEventListener("change",s),()=>a.removeEventListener("change",s)},[o]),r}function PC(){const[e,o]=T.useState(30),r=Hy();return T.useEffect(()=>{},[e]),T.useEffect(()=>{o(r?15:30)},[r]),x.jsx("div",{className:"stars",children:[...Array(e)].map((u,a)=>{const s=a+1,h=.2+Math.random()*.2,g=3.5+Math.random();let m=Math.random()>.5,f=-10+Math.random()*45;Math.random()>.5&&(f=75+Math.random()*35);const v=-10+Math.random()*110;return x.jsxs("div",{className:"star",style:{width:`max(${h}vw, 3px)`,animation:`spin ${g}s linear infinite ${m?"reverse":"normal"}`,top:`${f}%`,left:`${v}%`},children:[x.jsx("span",{className:"stick one"}),x.jsx("span",{className:"stick two"})]},`star_${s}`)})})}function _C({mode:e,setMode:o}){const r=()=>{o(e==="Opening"?"Ending":"Opening")},u=e==="Opening"?EC:GC;return x.jsx("header",{className:"Header",children:x.jsx("div",{className:"BannerWrapper",children:x.jsxs("div",{className:"Banner",style:{backgroundImage:`url(${u})`},children:[x.jsxs("h1",{className:"Title",children:[x.jsxs("pre",{style:{textAlign:"center"},children:["Guess the Anime"," "]}),x.jsxs("span",{className:"OpeningEnding",onClick:r,children:[e,"!",x.jsx(PC,{})]})]}),x.jsx("nav",{className:"NavMenu",children:x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx(li,{to:"/",children:"Home"})}),x.jsx("li",{children:x.jsx(li,{to:"/about",children:"About"})}),x.jsx("li",{children:x.jsx(li,{to:"/rules",children:"Rules"})}),x.jsx("li",{children:x.jsx(li,{to:"/faq",children:"FAQ"})}),x.jsx("li",{children:x.jsx(li,{to:"/stats",children:"Stats"})})]})})]})})})}const LC="Opening",Zh=T.createContext(void 0);Zh.displayName="ModeContext";const tr=()=>{const e=T.useContext(Zh);if(!e)throw new Error("useModeContext must be used within the provider!");return e},zC=({initial:e=LC,children:o})=>{const[r,u]=T.useState(e),a=T.useCallback(h=>u(h),[]),s=T.useMemo(()=>({mode:r,updateMode:a}),[r]);return x.jsx(Zh.Provider,{value:s,children:o})},Jh=["Top 1000 by Anime Score","Random Preset 1","Random Preset 2","Random Preset 3","Top 1000 by Song Viewcount","Random Preset 4","Random Preset 5","Random Preset 6"],jC=["Opening","Ending"],xC=["Correct","Incorrect","Attempting","None"],wo=1e3,$C="Top 1000 by Anime Score",Xh=T.createContext(void 0);Xh.displayName="FilterContext";const rr=()=>{const e=T.useContext(Xh);if(!e)throw new Error("useFilterContext must be used within the provider!");return e},FC=({children:e,initial:o=$C})=>{const[r,u]=T.useState(o),a=T.useCallback(h=>u(h),[]),s=T.useMemo(()=>({filter:r,updateFilter:a}),[r]);return x.jsx(Xh.Provider,{value:s,children:e})};function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ni(e)}function UC(e,o){if(Ni(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var u=r.call(e,o);if(Ni(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}function Gy(e){var o=UC(e,"string");return Ni(o)=="symbol"?o:o+""}function Ft(e,o,r){return(o=Gy(o))in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function tk(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);o&&(u=u.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,u)}return r}function ln(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?tk(Object(r),!0).forEach(function(u){Ft(e,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tk(Object(r)).forEach(function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(r,u))})}return e}function YC(e){if(Array.isArray(e))return e}function VC(e,o){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var u,a,s,h,g=[],m=!0,f=!1;try{if(s=(r=r.call(e)).next,o===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(u=s.call(r)).done)&&(g.push(u.value),g.length!==o);m=!0);}catch(v){f=!0,a=v}finally{try{if(!m&&r.return!=null&&(h=r.return(),Object(h)!==h))return}finally{if(f)throw a}}return g}}function Ah(e,o){(o==null||o>e.length)&&(o=e.length);for(var r=0,u=Array(o);r<o;r++)u[r]=e[r];return u}function Ey(e,o){if(e){if(typeof e=="string")return Ah(e,o);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ah(e,o):void 0}}function WC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Na(e,o){return YC(e)||VC(e,o)||Ey(e,o)||WC()}function ZC(e,o){if(e==null)return{};var r={};for(var u in e)if({}.hasOwnProperty.call(e,u)){if(o.indexOf(u)!==-1)continue;r[u]=e[u]}return r}function _a(e,o){if(e==null)return{};var r,u,a=ZC(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(u=0;u<s.length;u++)r=s[u],o.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var JC=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function XC(e){var o=e.defaultInputValue,r=o===void 0?"":o,u=e.defaultMenuIsOpen,a=u===void 0?!1:u,s=e.defaultValue,h=s===void 0?null:s,g=e.inputValue,m=e.menuIsOpen,f=e.onChange,v=e.onInputChange,y=e.onMenuClose,M=e.onMenuOpen,C=e.value,D=_a(e,JC),R=T.useState(g!==void 0?g:r),b=Na(R,2),p=b[0],w=b[1],A=T.useState(m!==void 0?m:a),P=Na(A,2),I=P[0],U=P[1],F=T.useState(C!==void 0?C:h),Q=Na(F,2),tn=Q[0],bn=Q[1],vn=T.useCallback(function(en,An){typeof f=="function"&&f(en,An),bn(en)},[f]),nn=T.useCallback(function(en,An){var K;typeof v=="function"&&(K=v(en,An)),w(K!==void 0?K:en)},[v]),kn=T.useCallback(function(){typeof M=="function"&&M(),U(!0)},[M]),Rn=T.useCallback(function(){typeof y=="function"&&y(),U(!1)},[y]),fn=g!==void 0?g:p,L=m!==void 0?m:I,Z=C!==void 0?C:tn;return ln(ln({},D),{},{inputValue:fn,menuIsOpen:L,onChange:vn,onInputChange:nn,onMenuClose:Rn,onMenuOpen:kn,value:Z})}function dn(){return dn=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var u in r)({}).hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},dn.apply(null,arguments)}function qC(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function rk(e,o){for(var r=0;r<o.length;r++){var u=o[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,Gy(u.key),u)}}function QC(e,o,r){return o&&rk(e.prototype,o),r&&rk(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dh(e,o){return Dh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,u){return r.__proto__=u,r},Dh(e,o)}function nK(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&Dh(e,o)}function Xu(e){return Xu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Xu(e)}function Py(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Py=function(){return!!e})()}function eK(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aK(e,o){if(o&&(Ni(o)=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eK(e)}function iK(e){var o=Py();return function(){var r,u=Xu(e);if(o){var a=Xu(this).constructor;r=Reflect.construct(u,arguments,a)}else r=u.apply(this,arguments);return aK(this,r)}}function oK(e){if(Array.isArray(e))return Ah(e)}function tK(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rK(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qh(e){return oK(e)||tK(e)||Ey(e)||rK()}function uK(e){if(e.sheet)return e.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===e)return document.styleSheets[o]}function sK(e){var o=document.createElement("style");return o.setAttribute("data-emotion",e.key),e.nonce!==void 0&&o.setAttribute("nonce",e.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var lK=function(){function e(r){var u=this;this._insertTag=function(a){var s;u.tags.length===0?u.insertionPoint?s=u.insertionPoint.nextSibling:u.prepend?s=u.container.firstChild:s=u.before:s=u.tags[u.tags.length-1].nextSibling,u.container.insertBefore(a,s),u.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var o=e.prototype;return o.hydrate=function(u){u.forEach(this._insertTag)},o.insert=function(u){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sK(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=uK(a);try{s.insertRule(u,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(u));this.ctr++},o.flush=function(){this.tags.forEach(function(u){var a;return(a=u.parentNode)==null?void 0:a.removeChild(u)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",qu="-moz-",Hn="-webkit-",_y="comm",Qh="rule",nd="decl",cK="@import",Ly="@keyframes",hK="@layer",dK=Math.abs,ys=String.fromCharCode,mK=Object.assign;function fK(e,o){return Se(e,0)^45?(((o<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function zy(e){return e.trim()}function gK(e,o){return(e=o.exec(e))?e[0]:e}function Gn(e,o,r){return e.replace(o,r)}function Oh(e,o){return e.indexOf(o)}function Se(e,o){return e.charCodeAt(o)|0}function Wt(e,o,r){return e.slice(o,r)}function la(e){return e.length}function ed(e){return e.length}function wu(e,o){return o.push(e),e}function SK(e,o){return e.map(o).join("")}var ps=1,Io=1,jy=0,Ce=0,oe=0,Po="";function bs(e,o,r,u,a,s,h){return{value:e,root:o,parent:r,type:u,props:a,children:s,line:ps,column:Io,length:h,return:""}}function jt(e,o){return mK(bs("",null,null,"",null,null,0),e,{length:-e.length},o)}function vK(){return oe}function kK(){return oe=Ce>0?Se(Po,--Ce):0,Io--,oe===10&&(Io=1,ps--),oe}function ze(){return oe=Ce<jy?Se(Po,Ce++):0,Io++,oe===10&&(Io=1,ps++),oe}function ha(){return Se(Po,Ce)}function Uu(){return Ce}function ur(e,o){return Wt(Po,e,o)}function Zt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xy(e){return ps=Io=1,jy=la(Po=e),Ce=0,[]}function $y(e){return Po="",e}function Yu(e){return zy(ur(Ce-1,wh(e===91?e+2:e===40?e+1:e)))}function yK(e){for(;(oe=ha())&&oe<33;)ze();return Zt(e)>2||Zt(oe)>3?"":" "}function pK(e,o){for(;--o&&ze()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return ur(e,Uu()+(o<6&&ha()==32&&ze()==32))}function wh(e){for(;ze();)switch(oe){case e:return Ce;case 34:case 39:e!==34&&e!==39&&wh(oe);break;case 40:e===41&&wh(e);break;case 92:ze();break}return Ce}function bK(e,o){for(;ze()&&e+oe!==57;)if(e+oe===84&&ha()===47)break;return"/*"+ur(o,Ce-1)+"*"+ys(e===47?e:ze())}function TK(e){for(;!Zt(ha());)ze();return ur(e,Ce)}function MK(e){return $y(Vu("",null,null,null,[""],e=xy(e),0,[0],e))}function Vu(e,o,r,u,a,s,h,g,m){for(var f=0,v=0,y=h,M=0,C=0,D=0,R=1,b=1,p=1,w=0,A="",P=a,I=s,U=u,F=A;b;)switch(D=w,w=ze()){case 40:if(D!=108&&Se(F,y-1)==58){Oh(F+=Gn(Yu(w),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:F+=Yu(w);break;case 9:case 10:case 13:case 32:F+=yK(D);break;case 92:F+=pK(Uu()-1,7);continue;case 47:switch(ha()){case 42:case 47:wu(AK(bK(ze(),Uu()),o,r),m);break;default:F+="/"}break;case 123*R:g[f++]=la(F)*p;case 125*R:case 59:case 0:switch(w){case 0:case 125:b=0;case 59+v:p==-1&&(F=Gn(F,/\f/g,"")),C>0&&la(F)-y&&wu(C>32?sk(F+";",u,r,y-1):sk(Gn(F," ","")+";",u,r,y-2),m);break;case 59:F+=";";default:if(wu(U=uk(F,o,r,f,v,a,g,A,P=[],I=[],y),s),w===123)if(v===0)Vu(F,o,U,U,P,s,y,g,I);else switch(M===99&&Se(F,3)===110?100:M){case 100:case 108:case 109:case 115:Vu(e,U,U,u&&wu(uk(e,U,U,0,0,a,g,A,a,P=[],y),I),a,I,y,g,u?P:I);break;default:Vu(F,U,U,U,[""],I,0,g,I)}}f=v=C=0,R=p=1,A=F="",y=h;break;case 58:y=1+la(F),C=D;default:if(R<1){if(w==123)--R;else if(w==125&&R++==0&&kK()==125)continue}switch(F+=ys(w),w*R){case 38:p=v>0?1:(F+="\f",-1);break;case 44:g[f++]=(la(F)-1)*p,p=1;break;case 64:ha()===45&&(F+=Yu(ze())),M=ha(),v=y=la(A=F+=TK(Uu())),w++;break;case 45:D===45&&la(F)==2&&(R=0)}}return s}function uk(e,o,r,u,a,s,h,g,m,f,v){for(var y=a-1,M=a===0?s:[""],C=ed(M),D=0,R=0,b=0;D<u;++D)for(var p=0,w=Wt(e,y+1,y=dK(R=h[D])),A=e;p<C;++p)(A=zy(R>0?M[p]+" "+w:Gn(w,/&\f/g,M[p])))&&(m[b++]=A);return bs(e,o,r,a===0?Qh:g,m,f,v)}function AK(e,o,r){return bs(e,o,r,_y,ys(vK()),Wt(e,2,-2),0)}function sk(e,o,r,u){return bs(e,o,r,nd,Wt(e,0,u),Wt(e,u+1,-1),u)}function Co(e,o){for(var r="",u=ed(e),a=0;a<u;a++)r+=o(e[a],a,e,o)||"";return r}function DK(e,o,r,u){switch(e.type){case hK:if(e.children.length)break;case cK:case nd:return e.return=e.return||e.value;case _y:return"";case Ly:return e.return=e.value+"{"+Co(e.children,u)+"}";case Qh:e.value=e.props.join(",")}return la(r=Co(e.children,u))?e.return=e.value+"{"+r+"}":""}function OK(e){var o=ed(e);return function(r,u,a,s){for(var h="",g=0;g<o;g++)h+=e[g](r,u,a,s)||"";return h}}function wK(e){return function(o){o.root||(o=o.return)&&e(o)}}function CK(e){var o=Object.create(null);return function(r){return o[r]===void 0&&(o[r]=e(r)),o[r]}}var KK=function(o,r,u){for(var a=0,s=0;a=s,s=ha(),a===38&&s===12&&(r[u]=1),!Zt(s);)ze();return ur(o,Ce)},IK=function(o,r){var u=-1,a=44;do switch(Zt(a)){case 0:a===38&&ha()===12&&(r[u]=1),o[u]+=KK(Ce-1,r,u);break;case 2:o[u]+=Yu(a);break;case 4:if(a===44){o[++u]=ha()===58?"&\f":"",r[u]=o[u].length;break}default:o[u]+=ys(a)}while(a=ze());return o},RK=function(o,r){return $y(IK(xy(o),r))},lk=new WeakMap,BK=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var r=o.value,u=o.parent,a=o.column===u.column&&o.line===u.line;u.type!=="rule";)if(u=u.parent,!u)return;if(!(o.props.length===1&&r.charCodeAt(0)!==58&&!lk.get(u))&&!a){lk.set(o,!0);for(var s=[],h=RK(r,s),g=u.props,m=0,f=0;m<h.length;m++)for(var v=0;v<g.length;v++,f++)o.props[f]=s[m]?h[m].replace(/&\f/g,g[v]):g[v]+" "+h[m]}}},NK=function(o){if(o.type==="decl"){var r=o.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(o.return="",o.value="")}};function Fy(e,o){switch(fK(e,o)){case 5103:return Hn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Hn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Hn+e+qu+e+pe+e+e;case 6828:case 4268:return Hn+e+pe+e+e;case 6165:return Hn+e+pe+"flex-"+e+e;case 5187:return Hn+e+Gn(e,/(\w+).+(:[^]+)/,Hn+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return Hn+e+pe+"flex-item-"+Gn(e,/flex-|-self/,"")+e;case 4675:return Hn+e+pe+"flex-line-pack"+Gn(e,/align-content|flex-|-self/,"")+e;case 5548:return Hn+e+pe+Gn(e,"shrink","negative")+e;case 5292:return Hn+e+pe+Gn(e,"basis","preferred-size")+e;case 6060:return Hn+"box-"+Gn(e,"-grow","")+Hn+e+pe+Gn(e,"grow","positive")+e;case 4554:return Hn+Gn(e,/([^-])(transform)/g,"$1"+Hn+"$2")+e;case 6187:return Gn(Gn(Gn(e,/(zoom-|grab)/,Hn+"$1"),/(image-set)/,Hn+"$1"),e,"")+e;case 5495:case 3959:return Gn(e,/(image-set\([^]*)/,Hn+"$1$`$1");case 4968:return Gn(Gn(e,/(.+:)(flex-)?(.*)/,Hn+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Hn+e+e;case 4095:case 3583:case 4068:case 2532:return Gn(e,/(.+)-inline(.+)/,Hn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(la(e)-1-o>6)switch(Se(e,o+1)){case 109:if(Se(e,o+4)!==45)break;case 102:return Gn(e,/(.+:)(.+)-([^]+)/,"$1"+Hn+"$2-$3$1"+qu+(Se(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~Oh(e,"stretch")?Fy(Gn(e,"stretch","fill-available"),o)+e:e}break;case 4949:if(Se(e,o+1)!==115)break;case 6444:switch(Se(e,la(e)-3-(~Oh(e,"!important")&&10))){case 107:return Gn(e,":",":"+Hn)+e;case 101:return Gn(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Hn+(Se(e,14)===45?"inline-":"")+"box$3$1"+Hn+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(Se(e,o+11)){case 114:return Hn+e+pe+Gn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Hn+e+pe+Gn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Hn+e+pe+Gn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Hn+e+pe+e+e}return e}var HK=function(o,r,u,a){if(o.length>-1&&!o.return)switch(o.type){case nd:o.return=Fy(o.value,o.length);break;case Ly:return Co([jt(o,{value:Gn(o.value,"@","@"+Hn)})],a);case Qh:if(o.length)return SK(o.props,function(s){switch(gK(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Co([jt(o,{props:[Gn(s,/:(read-\w+)/,":"+qu+"$1")]})],a);case"::placeholder":return Co([jt(o,{props:[Gn(s,/:(plac\w+)/,":"+Hn+"input-$1")]}),jt(o,{props:[Gn(s,/:(plac\w+)/,":"+qu+"$1")]}),jt(o,{props:[Gn(s,/:(plac\w+)/,pe+"input-$1")]})],a)}return""})}},GK=[HK],EK=function(o){var r=o.key;if(r==="css"){var u=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(u,function(R){var b=R.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(R),R.setAttribute("data-s",""))})}var a=o.stylisPlugins||GK,s={},h,g=[];h=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(R){for(var b=R.getAttribute("data-emotion").split(" "),p=1;p<b.length;p++)s[b[p]]=!0;g.push(R)});var m,f=[BK,NK];{var v,y=[DK,wK(function(R){v.insert(R)})],M=OK(f.concat(a,y)),C=function(b){return Co(MK(b),M)};m=function(b,p,w,A){v=w,C(b?b+"{"+p.styles+"}":p.styles),A&&(D.inserted[p.name]=!0)}}var D={key:r,sheet:new lK({key:r,container:h,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:s,registered:{},insert:m};return D.sheet.hydrate(g),D},rh={exports:{}},En={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ck;function PK(){if(ck)return En;ck=1;var e=typeof Symbol=="function"&&Symbol.for,o=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,u=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,h=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,v=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,M=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,D=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,p=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function A(I){if(typeof I=="object"&&I!==null){var U=I.$$typeof;switch(U){case o:switch(I=I.type,I){case m:case f:case u:case s:case a:case y:return I;default:switch(I=I&&I.$$typeof,I){case g:case v:case D:case C:case h:return I;default:return U}}case r:return U}}}function P(I){return A(I)===f}return En.AsyncMode=m,En.ConcurrentMode=f,En.ContextConsumer=g,En.ContextProvider=h,En.Element=o,En.ForwardRef=v,En.Fragment=u,En.Lazy=D,En.Memo=C,En.Portal=r,En.Profiler=s,En.StrictMode=a,En.Suspense=y,En.isAsyncMode=function(I){return P(I)||A(I)===m},En.isConcurrentMode=P,En.isContextConsumer=function(I){return A(I)===g},En.isContextProvider=function(I){return A(I)===h},En.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===o},En.isForwardRef=function(I){return A(I)===v},En.isFragment=function(I){return A(I)===u},En.isLazy=function(I){return A(I)===D},En.isMemo=function(I){return A(I)===C},En.isPortal=function(I){return A(I)===r},En.isProfiler=function(I){return A(I)===s},En.isStrictMode=function(I){return A(I)===a},En.isSuspense=function(I){return A(I)===y},En.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===u||I===f||I===s||I===a||I===y||I===M||typeof I=="object"&&I!==null&&(I.$$typeof===D||I.$$typeof===C||I.$$typeof===h||I.$$typeof===g||I.$$typeof===v||I.$$typeof===b||I.$$typeof===p||I.$$typeof===w||I.$$typeof===R)},En.typeOf=A,En}var hk;function _K(){return hk||(hk=1,rh.exports=PK()),rh.exports}var uh,dk;function LK(){if(dk)return uh;dk=1;var e=_K(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=u,s[e.Memo]=a;function h(D){return e.isMemo(D)?a:s[D.$$typeof]||o}var g=Object.defineProperty,m=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,M=Object.prototype;function C(D,R,b){if(typeof R!="string"){if(M){var p=y(R);p&&p!==M&&C(D,p,b)}var w=m(R);f&&(w=w.concat(f(R)));for(var A=h(D),P=h(R),I=0;I<w.length;++I){var U=w[I];if(!r[U]&&!(b&&b[U])&&!(P&&P[U])&&!(A&&A[U])){var F=v(R,U);try{g(D,U,F)}catch{}}}}return D}return uh=C,uh}LK();var zK=!0;function jK(e,o,r){var u="";return r.split(" ").forEach(function(a){e[a]!==void 0?o.push(e[a]+";"):a&&(u+=a+" ")}),u}var Uy=function(o,r,u){var a=o.key+"-"+r.name;(u===!1||zK===!1)&&o.registered[a]===void 0&&(o.registered[a]=r.styles)},xK=function(o,r,u){Uy(o,r,u);var a=o.key+"-"+r.name;if(o.inserted[r.name]===void 0){var s=r;do o.insert(r===s?"."+a:"",s,o.sheet,!0),s=s.next;while(s!==void 0)}};function $K(e){for(var o=0,r,u=0,a=e.length;a>=4;++u,a-=4)r=e.charCodeAt(u)&255|(e.charCodeAt(++u)&255)<<8|(e.charCodeAt(++u)&255)<<16|(e.charCodeAt(++u)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,o=(r&65535)*1540483477+((r>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(a){case 3:o^=(e.charCodeAt(u+2)&255)<<16;case 2:o^=(e.charCodeAt(u+1)&255)<<8;case 1:o^=e.charCodeAt(u)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var FK={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},UK=/[A-Z]|^ms/g,YK=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Yy=function(o){return o.charCodeAt(1)===45},mk=function(o){return o!=null&&typeof o!="boolean"},sh=CK(function(e){return Yy(e)?e:e.replace(UK,"-$&").toLowerCase()}),fk=function(o,r){switch(o){case"animation":case"animationName":if(typeof r=="string")return r.replace(YK,function(u,a,s){return ca={name:a,styles:s,next:ca},a})}return FK[o]!==1&&!Yy(o)&&typeof r=="number"&&r!==0?r+"px":r};function Jt(e,o,r){if(r==null)return"";var u=r;if(u.__emotion_styles!==void 0)return u;switch(typeof r){case"boolean":return"";case"object":{var a=r;if(a.anim===1)return ca={name:a.name,styles:a.styles,next:ca},a.name;var s=r;if(s.styles!==void 0){var h=s.next;if(h!==void 0)for(;h!==void 0;)ca={name:h.name,styles:h.styles,next:ca},h=h.next;var g=s.styles+";";return g}return VK(e,o,r)}case"function":{if(e!==void 0){var m=ca,f=r(e);return ca=m,Jt(e,o,f)}break}}var v=r;return v}function VK(e,o,r){var u="";if(Array.isArray(r))for(var a=0;a<r.length;a++)u+=Jt(e,o,r[a])+";";else for(var s in r){var h=r[s];if(typeof h!="object"){var g=h;mk(g)&&(u+=sh(s)+":"+fk(s,g)+";")}else if(Array.isArray(h)&&typeof h[0]=="string"&&o==null)for(var m=0;m<h.length;m++)mk(h[m])&&(u+=sh(s)+":"+fk(s,h[m])+";");else{var f=Jt(e,o,h);switch(s){case"animation":case"animationName":{u+=sh(s)+":"+f+";";break}default:u+=s+"{"+f+"}"}}}return u}var gk=/label:\s*([^\s;{]+)\s*(;|$)/g,ca;function Vy(e,o,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var u=!0,a="";ca=void 0;var s=e[0];if(s==null||s.raw===void 0)u=!1,a+=Jt(r,o,s);else{var h=s;a+=h[0]}for(var g=1;g<e.length;g++)if(a+=Jt(r,o,e[g]),u){var m=s;a+=m[g]}gk.lastIndex=0;for(var f="",v;(v=gk.exec(a))!==null;)f+="-"+v[1];var y=$K(a)+f;return{name:y,styles:a,next:ca}}var WK=function(o){return o()},ZK=Vv.useInsertionEffect?Vv.useInsertionEffect:!1,JK=ZK||WK,Wy=T.createContext(typeof HTMLElement<"u"?EK({key:"css"}):null);Wy.Provider;var XK=function(o){return T.forwardRef(function(r,u){var a=T.useContext(Wy);return o(r,a,u)})},qK=T.createContext({}),ad={}.hasOwnProperty,Ch="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",QK=function(o,r){var u={};for(var a in r)ad.call(r,a)&&(u[a]=r[a]);return u[Ch]=o,u},n0=function(o){var r=o.cache,u=o.serialized,a=o.isStringTag;return Uy(r,u,a),JK(function(){return xK(r,u,a)}),null},e0=XK(function(e,o,r){var u=e.css;typeof u=="string"&&o.registered[u]!==void 0&&(u=o.registered[u]);var a=e[Ch],s=[u],h="";typeof e.className=="string"?h=jK(o.registered,s,e.className):e.className!=null&&(h=e.className+" ");var g=Vy(s,void 0,T.useContext(qK));h+=o.key+"-"+g.name;var m={};for(var f in e)ad.call(e,f)&&f!=="css"&&f!==Ch&&(m[f]=e[f]);return m.className=h,r&&(m.ref=r),T.createElement(T.Fragment,null,T.createElement(n0,{cache:o,serialized:g,isStringTag:typeof a=="string"}),T.createElement(a,m))}),a0=e0,sn=function(o,r){var u=arguments;if(r==null||!ad.call(r,"css"))return T.createElement.apply(void 0,u);var a=u.length,s=new Array(a);s[0]=a0,s[1]=QK(o,r);for(var h=2;h<a;h++)s[h]=u[h];return T.createElement.apply(null,s)};(function(e){var o;o||(o=e.JSX||(e.JSX={}))})(sn||(sn={}));function id(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return Vy(o)}function i0(){var e=id.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function o0(e,o){return o||(o=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}const t0=Math.min,r0=Math.max,Qu=Math.round,Cu=Math.floor,ns=e=>({x:e,y:e});function u0(e){const{x:o,y:r,width:u,height:a}=e;return{width:u,height:a,top:r,left:o,right:o+u,bottom:r+a,x:o,y:r}}function Ts(){return typeof window<"u"}function Zy(e){return Xy(e)?(e.nodeName||"").toLowerCase():"#document"}function Ga(e){var o;return(e==null||(o=e.ownerDocument)==null?void 0:o.defaultView)||window}function Jy(e){var o;return(o=(Xy(e)?e.ownerDocument:e.document)||window.document)==null?void 0:o.documentElement}function Xy(e){return Ts()?e instanceof Node||e instanceof Ga(e).Node:!1}function s0(e){return Ts()?e instanceof Element||e instanceof Ga(e).Element:!1}function od(e){return Ts()?e instanceof HTMLElement||e instanceof Ga(e).HTMLElement:!1}function Sk(e){return!Ts()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ga(e).ShadowRoot}const l0=new Set(["inline","contents"]);function qy(e){const{overflow:o,overflowX:r,overflowY:u,display:a}=td(e);return/auto|scroll|overlay|hidden|clip/.test(o+u+r)&&!l0.has(a)}function c0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const h0=new Set(["html","body","#document"]);function d0(e){return h0.has(Zy(e))}function td(e){return Ga(e).getComputedStyle(e)}function m0(e){if(Zy(e)==="html")return e;const o=e.assignedSlot||e.parentNode||Sk(e)&&e.host||Jy(e);return Sk(o)?o.host:o}function Qy(e){const o=m0(e);return d0(o)?e.ownerDocument?e.ownerDocument.body:e.body:od(o)&&qy(o)?o:Qy(o)}function es(e,o,r){var u;o===void 0&&(o=[]),r===void 0&&(r=!0);const a=Qy(e),s=a===((u=e.ownerDocument)==null?void 0:u.body),h=Ga(a);if(s){const g=Kh(h);return o.concat(h,h.visualViewport||[],qy(a)?a:[],g&&r?es(g):[])}return o.concat(a,es(a,[],r))}function Kh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function f0(e){const o=td(e);let r=parseFloat(o.width)||0,u=parseFloat(o.height)||0;const a=od(e),s=a?e.offsetWidth:r,h=a?e.offsetHeight:u,g=Qu(r)!==s||Qu(u)!==h;return g&&(r=s,u=h),{width:r,height:u,$:g}}function rd(e){return s0(e)?e:e.contextElement}function vk(e){const o=rd(e);if(!od(o))return ns(1);const r=o.getBoundingClientRect(),{width:u,height:a,$:s}=f0(o);let h=(s?Qu(r.width):r.width)/u,g=(s?Qu(r.height):r.height)/a;return(!h||!Number.isFinite(h))&&(h=1),(!g||!Number.isFinite(g))&&(g=1),{x:h,y:g}}const g0=ns(0);function S0(e){const o=Ga(e);return!c0()||!o.visualViewport?g0:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function v0(e,o,r){return!1}function kk(e,o,r,u){o===void 0&&(o=!1);const a=e.getBoundingClientRect(),s=rd(e);let h=ns(1);o&&(h=vk(e));const g=v0()?S0(s):ns(0);let m=(a.left+g.x)/h.x,f=(a.top+g.y)/h.y,v=a.width/h.x,y=a.height/h.y;if(s){const M=Ga(s),C=u;let D=M,R=Kh(D);for(;R&&u&&C!==D;){const b=vk(R),p=R.getBoundingClientRect(),w=td(R),A=p.left+(R.clientLeft+parseFloat(w.paddingLeft))*b.x,P=p.top+(R.clientTop+parseFloat(w.paddingTop))*b.y;m*=b.x,f*=b.y,v*=b.x,y*=b.y,m+=A,f+=P,D=Ga(R),R=Kh(D)}}return u0({width:v,height:y,x:m,y:f})}function np(e,o){return e.x===o.x&&e.y===o.y&&e.width===o.width&&e.height===o.height}function k0(e,o){let r=null,u;const a=Jy(e);function s(){var g;clearTimeout(u),(g=r)==null||g.disconnect(),r=null}function h(g,m){g===void 0&&(g=!1),m===void 0&&(m=1),s();const f=e.getBoundingClientRect(),{left:v,top:y,width:M,height:C}=f;if(g||o(),!M||!C)return;const D=Cu(y),R=Cu(a.clientWidth-(v+M)),b=Cu(a.clientHeight-(y+C)),p=Cu(v),A={rootMargin:-D+"px "+-R+"px "+-b+"px "+-p+"px",threshold:r0(0,t0(1,m))||1};let P=!0;function I(U){const F=U[0].intersectionRatio;if(F!==m){if(!P)return h();F?h(!1,F):u=setTimeout(()=>{h(!1,1e-7)},1e3)}F===1&&!np(f,e.getBoundingClientRect())&&h(),P=!1}try{r=new IntersectionObserver(I,{...A,root:a.ownerDocument})}catch{r=new IntersectionObserver(I,A)}r.observe(e)}return h(!0),s}function y0(e,o,r,u){u===void 0&&(u={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:m=!1}=u,f=rd(e),v=a||s?[...f?es(f):[],...es(o)]:[];v.forEach(p=>{a&&p.addEventListener("scroll",r,{passive:!0}),s&&p.addEventListener("resize",r)});const y=f&&g?k0(f,r):null;let M=-1,C=null;h&&(C=new ResizeObserver(p=>{let[w]=p;w&&w.target===f&&C&&(C.unobserve(o),cancelAnimationFrame(M),M=requestAnimationFrame(()=>{var A;(A=C)==null||A.observe(o)})),r()}),f&&!m&&C.observe(f),C.observe(o));let D,R=m?kk(e):null;m&&b();function b(){const p=kk(e);R&&!np(R,p)&&r(),R=p,D=requestAnimationFrame(b)}return r(),()=>{var p;v.forEach(w=>{a&&w.removeEventListener("scroll",r),s&&w.removeEventListener("resize",r)}),y==null||y(),(p=C)==null||p.disconnect(),C=null,m&&cancelAnimationFrame(D)}}var Ih=T.useLayoutEffect,p0=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],as=function(){};function b0(e,o){return o?o[0]==="-"?e+o:e+"__"+o:e}function T0(e,o){for(var r=arguments.length,u=new Array(r>2?r-2:0),a=2;a<r;a++)u[a-2]=arguments[a];var s=[].concat(u);if(o&&e)for(var h in o)o.hasOwnProperty(h)&&o[h]&&s.push("".concat(b0(e,h)));return s.filter(function(g){return g}).map(function(g){return String(g).trim()}).join(" ")}var yk=function(o){return R0(o)?o.filter(Boolean):Ni(o)==="object"&&o!==null?[o]:[]},ep=function(o){o.className,o.clearValue,o.cx,o.getStyles,o.getClassNames,o.getValue,o.hasValue,o.isMulti,o.isRtl,o.options,o.selectOption,o.selectProps,o.setValue,o.theme;var r=_a(o,p0);return ln({},r)},qn=function(o,r,u){var a=o.cx,s=o.getStyles,h=o.getClassNames,g=o.className;return{css:s(r,o),className:a(u??{},h(r,o),g)}};function Ms(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function M0(e){return Ms(e)?window.innerHeight:e.clientHeight}function ap(e){return Ms(e)?window.pageYOffset:e.scrollTop}function is(e,o){if(Ms(e)){window.scrollTo(0,o);return}e.scrollTop=o}function A0(e){var o=getComputedStyle(e),r=o.position==="absolute",u=/(auto|scroll)/;if(o.position==="fixed")return document.documentElement;for(var a=e;a=a.parentElement;)if(o=getComputedStyle(a),!(r&&o.position==="static")&&u.test(o.overflow+o.overflowY+o.overflowX))return a;return document.documentElement}function D0(e,o,r,u){return r*((e=e/u-1)*e*e+1)+o}function Ku(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:as,a=ap(e),s=o-a,h=10,g=0;function m(){g+=h;var f=D0(g,a,s,r);is(e,f),g<r?window.requestAnimationFrame(m):u(e)}m()}function pk(e,o){var r=e.getBoundingClientRect(),u=o.getBoundingClientRect(),a=o.offsetHeight/3;u.bottom+a>r.bottom?is(e,Math.min(o.offsetTop+o.clientHeight-e.offsetHeight+a,e.scrollHeight)):u.top-a<r.top&&is(e,Math.max(o.offsetTop-a,0))}function O0(e){var o=e.getBoundingClientRect();return{bottom:o.bottom,height:o.height,left:o.left,right:o.right,top:o.top,width:o.width}}function bk(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function w0(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ip=!1,C0={get passive(){return ip=!0}},Iu=typeof window<"u"?window:{};Iu.addEventListener&&Iu.removeEventListener&&(Iu.addEventListener("p",as,C0),Iu.removeEventListener("p",as,!1));var K0=ip;function I0(e){return e!=null}function R0(e){return Array.isArray(e)}function Ru(e,o,r){return e?o:r}var B0=function(o){for(var r=arguments.length,u=new Array(r>1?r-1:0),a=1;a<r;a++)u[a-1]=arguments[a];var s=Object.entries(o).filter(function(h){var g=Na(h,1),m=g[0];return!u.includes(m)});return s.reduce(function(h,g){var m=Na(g,2),f=m[0],v=m[1];return h[f]=v,h},{})},N0=["children","innerProps"],H0=["children","innerProps"];function G0(e){var o=e.maxHeight,r=e.menuEl,u=e.minHeight,a=e.placement,s=e.shouldScroll,h=e.isFixedPosition,g=e.controlHeight,m=A0(r),f={placement:"bottom",maxHeight:o};if(!r||!r.offsetParent)return f;var v=m.getBoundingClientRect(),y=v.height,M=r.getBoundingClientRect(),C=M.bottom,D=M.height,R=M.top,b=r.offsetParent.getBoundingClientRect(),p=b.top,w=h?window.innerHeight:M0(m),A=ap(m),P=parseInt(getComputedStyle(r).marginBottom,10),I=parseInt(getComputedStyle(r).marginTop,10),U=p-I,F=w-R,Q=U+A,tn=y-A-R,bn=C-w+A+P,vn=A+R-I,nn=160;switch(a){case"auto":case"bottom":if(F>=D)return{placement:"bottom",maxHeight:o};if(tn>=D&&!h)return s&&Ku(m,bn,nn),{placement:"bottom",maxHeight:o};if(!h&&tn>=u||h&&F>=u){s&&Ku(m,bn,nn);var kn=h?F-P:tn-P;return{placement:"bottom",maxHeight:kn}}if(a==="auto"||h){var Rn=o,fn=h?U:Q;return fn>=u&&(Rn=Math.min(fn-P-g,o)),{placement:"top",maxHeight:Rn}}if(a==="bottom")return s&&is(m,bn),{placement:"bottom",maxHeight:o};break;case"top":if(U>=D)return{placement:"top",maxHeight:o};if(Q>=D&&!h)return s&&Ku(m,vn,nn),{placement:"top",maxHeight:o};if(!h&&Q>=u||h&&U>=u){var L=o;return(!h&&Q>=u||h&&U>=u)&&(L=h?U-I:Q-I),s&&Ku(m,vn,nn),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:o};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return f}function E0(e){var o={bottom:"top",top:"bottom"};return e?o[e]:"bottom"}var op=function(o){return o==="auto"?"bottom":o},P0=function(o,r){var u,a=o.placement,s=o.theme,h=s.borderRadius,g=s.spacing,m=s.colors;return ln((u={label:"menu"},Ft(u,E0(a),"100%"),Ft(u,"position","absolute"),Ft(u,"width","100%"),Ft(u,"zIndex",1),u),r?{}:{backgroundColor:m.neutral0,borderRadius:h,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:g.menuGutter,marginTop:g.menuGutter})},tp=T.createContext(null),_0=function(o){var r=o.children,u=o.minMenuHeight,a=o.maxMenuHeight,s=o.menuPlacement,h=o.menuPosition,g=o.menuShouldScrollIntoView,m=o.theme,f=T.useContext(tp)||{},v=f.setPortalPlacement,y=T.useRef(null),M=T.useState(a),C=Na(M,2),D=C[0],R=C[1],b=T.useState(null),p=Na(b,2),w=p[0],A=p[1],P=m.spacing.controlHeight;return Ih(function(){var I=y.current;if(I){var U=h==="fixed",F=g&&!U,Q=G0({maxHeight:a,menuEl:I,minHeight:u,placement:s,shouldScroll:F,isFixedPosition:U,controlHeight:P});R(Q.maxHeight),A(Q.placement),v==null||v(Q.placement)}},[a,s,h,g,u,v,P]),r({ref:y,placerProps:ln(ln({},o),{},{placement:w||op(s),maxHeight:D})})},L0=function(o){var r=o.children,u=o.innerRef,a=o.innerProps;return sn("div",dn({},qn(o,"menu",{menu:!0}),{ref:u},a),r)},z0=L0,j0=function(o,r){var u=o.maxHeight,a=o.theme.spacing.baseUnit;return ln({maxHeight:u,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:a,paddingTop:a})},x0=function(o){var r=o.children,u=o.innerProps,a=o.innerRef,s=o.isMulti;return sn("div",dn({},qn(o,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:a},u),r)},rp=function(o,r){var u=o.theme,a=u.spacing.baseUnit,s=u.colors;return ln({textAlign:"center"},r?{}:{color:s.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},$0=rp,F0=rp,U0=function(o){var r=o.children,u=r===void 0?"No options":r,a=o.innerProps,s=_a(o,N0);return sn("div",dn({},qn(ln(ln({},s),{},{children:u,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),u)},Y0=function(o){var r=o.children,u=r===void 0?"Loading...":r,a=o.innerProps,s=_a(o,H0);return sn("div",dn({},qn(ln(ln({},s),{},{children:u,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),u)},V0=function(o){var r=o.rect,u=o.offset,a=o.position;return{left:r.left,position:a,top:u,width:r.width,zIndex:1}},W0=function(o){var r=o.appendTo,u=o.children,a=o.controlElement,s=o.innerProps,h=o.menuPlacement,g=o.menuPosition,m=T.useRef(null),f=T.useRef(null),v=T.useState(op(h)),y=Na(v,2),M=y[0],C=y[1],D=T.useMemo(function(){return{setPortalPlacement:C}},[]),R=T.useState(null),b=Na(R,2),p=b[0],w=b[1],A=T.useCallback(function(){if(a){var F=O0(a),Q=g==="fixed"?0:window.pageYOffset,tn=F[M]+Q;(tn!==(p==null?void 0:p.offset)||F.left!==(p==null?void 0:p.rect.left)||F.width!==(p==null?void 0:p.rect.width))&&w({offset:tn,rect:F})}},[a,g,M,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Ih(function(){A()},[A]);var P=T.useCallback(function(){typeof f.current=="function"&&(f.current(),f.current=null),a&&m.current&&(f.current=y0(a,m.current,A,{elementResize:"ResizeObserver"in window}))},[a,A]);Ih(function(){P()},[P]);var I=T.useCallback(function(F){m.current=F,P()},[P]);if(!r&&g!=="fixed"||!p)return null;var U=sn("div",dn({ref:I},qn(ln(ln({},o),{},{offset:p.offset,position:g,rect:p.rect}),"menuPortal",{"menu-portal":!0}),s),u);return sn(tp.Provider,{value:D},r?HC.createPortal(U,r):U)},Z0=function(o){var r=o.isDisabled,u=o.isRtl;return{label:"container",direction:u?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},J0=function(o){var r=o.children,u=o.innerProps,a=o.isDisabled,s=o.isRtl;return sn("div",dn({},qn(o,"container",{"--is-disabled":a,"--is-rtl":s}),u),r)},X0=function(o,r){var u=o.theme.spacing,a=o.isMulti,s=o.hasValue,h=o.selectProps.controlShouldRenderValue;return ln({alignItems:"center",display:a&&s&&h?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(u.baseUnit/2,"px ").concat(u.baseUnit*2,"px")})},q0=function(o){var r=o.children,u=o.innerProps,a=o.isMulti,s=o.hasValue;return sn("div",dn({},qn(o,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":s}),u),r)},Q0=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},nI=function(o){var r=o.children,u=o.innerProps;return sn("div",dn({},qn(o,"indicatorsContainer",{indicators:!0}),u),r)},Tk,eI=["size"],aI=["innerProps","isRtl","size"],iI={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},up=function(o){var r=o.size,u=_a(o,eI);return sn("svg",dn({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:iI},u))},ud=function(o){return sn(up,dn({size:20},o),sn("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},sp=function(o){return sn(up,dn({size:20},o),sn("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},lp=function(o,r){var u=o.isFocused,a=o.theme,s=a.spacing.baseUnit,h=a.colors;return ln({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:u?h.neutral60:h.neutral20,padding:s*2,":hover":{color:u?h.neutral80:h.neutral40}})},oI=lp,tI=function(o){var r=o.children,u=o.innerProps;return sn("div",dn({},qn(o,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),u),r||sn(sp,null))},rI=lp,uI=function(o){var r=o.children,u=o.innerProps;return sn("div",dn({},qn(o,"clearIndicator",{indicator:!0,"clear-indicator":!0}),u),r||sn(ud,null))},sI=function(o,r){var u=o.isDisabled,a=o.theme,s=a.spacing.baseUnit,h=a.colors;return ln({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:u?h.neutral10:h.neutral20,marginBottom:s*2,marginTop:s*2})},lI=function(o){var r=o.innerProps;return sn("span",dn({},r,qn(o,"indicatorSeparator",{"indicator-separator":!0})))},cI=i0(Tk||(Tk=o0([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),hI=function(o,r){var u=o.isFocused,a=o.size,s=o.theme,h=s.colors,g=s.spacing.baseUnit;return ln({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},r?{}:{color:u?h.neutral60:h.neutral20,padding:g*2})},lh=function(o){var r=o.delay,u=o.offset;return sn("span",{css:id({animation:"".concat(cI," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:u?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},dI=function(o){var r=o.innerProps,u=o.isRtl,a=o.size,s=a===void 0?4:a,h=_a(o,aI);return sn("div",dn({},qn(ln(ln({},h),{},{innerProps:r,isRtl:u,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),sn(lh,{delay:0,offset:u}),sn(lh,{delay:160,offset:!0}),sn(lh,{delay:320,offset:!u}))},mI=function(o,r){var u=o.isDisabled,a=o.isFocused,s=o.theme,h=s.colors,g=s.borderRadius,m=s.spacing;return ln({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:m.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:u?h.neutral5:h.neutral0,borderColor:u?h.neutral10:a?h.primary:h.neutral20,borderRadius:g,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(h.primary):void 0,"&:hover":{borderColor:a?h.primary:h.neutral30}})},fI=function(o){var r=o.children,u=o.isDisabled,a=o.isFocused,s=o.innerRef,h=o.innerProps,g=o.menuIsOpen;return sn("div",dn({ref:s},qn(o,"control",{control:!0,"control--is-disabled":u,"control--is-focused":a,"control--menu-is-open":g}),h,{"aria-disabled":u||void 0}),r)},gI=fI,SI=["data"],vI=function(o,r){var u=o.theme.spacing;return r?{}:{paddingBottom:u.baseUnit*2,paddingTop:u.baseUnit*2}},kI=function(o){var r=o.children,u=o.cx,a=o.getStyles,s=o.getClassNames,h=o.Heading,g=o.headingProps,m=o.innerProps,f=o.label,v=o.theme,y=o.selectProps;return sn("div",dn({},qn(o,"group",{group:!0}),m),sn(h,dn({},g,{selectProps:y,theme:v,getStyles:a,getClassNames:s,cx:u}),f),sn("div",null,r))},yI=function(o,r){var u=o.theme,a=u.colors,s=u.spacing;return ln({label:"group",cursor:"default",display:"block"},r?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},pI=function(o){var r=ep(o);r.data;var u=_a(r,SI);return sn("div",dn({},qn(o,"groupHeading",{"group-heading":!0}),u))},bI=kI,TI=["innerRef","isDisabled","isHidden","inputClassName"],MI=function(o,r){var u=o.isDisabled,a=o.value,s=o.theme,h=s.spacing,g=s.colors;return ln(ln({visibility:u?"hidden":"visible",transform:a?"translateZ(0)":""},AI),r?{}:{margin:h.baseUnit/2,paddingBottom:h.baseUnit/2,paddingTop:h.baseUnit/2,color:g.neutral80})},cp={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},AI={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":ln({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},cp)},DI=function(o){return ln({label:"input",color:"inherit",background:0,opacity:o?0:1,width:"100%"},cp)},OI=function(o){var r=o.cx,u=o.value,a=ep(o),s=a.innerRef,h=a.isDisabled,g=a.isHidden,m=a.inputClassName,f=_a(a,TI);return sn("div",dn({},qn(o,"input",{"input-container":!0}),{"data-value":u||""}),sn("input",dn({className:r({input:!0},m),ref:s,style:DI(g),disabled:h},f)))},wI=OI,CI=function(o,r){var u=o.theme,a=u.spacing,s=u.borderRadius,h=u.colors;return ln({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:h.neutral10,borderRadius:s/2,margin:a.baseUnit/2})},KI=function(o,r){var u=o.theme,a=u.borderRadius,s=u.colors,h=o.cropWithEllipsis;return ln({overflow:"hidden",textOverflow:h||h===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:a/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},II=function(o,r){var u=o.theme,a=u.spacing,s=u.borderRadius,h=u.colors,g=o.isFocused;return ln({alignItems:"center",display:"flex"},r?{}:{borderRadius:s/2,backgroundColor:g?h.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:h.dangerLight,color:h.danger}})},hp=function(o){var r=o.children,u=o.innerProps;return sn("div",u,r)},RI=hp,BI=hp;function NI(e){var o=e.children,r=e.innerProps;return sn("div",dn({role:"button"},r),o||sn(ud,{size:14}))}var HI=function(o){var r=o.children,u=o.components,a=o.data,s=o.innerProps,h=o.isDisabled,g=o.removeProps,m=o.selectProps,f=u.Container,v=u.Label,y=u.Remove;return sn(f,{data:a,innerProps:ln(ln({},qn(o,"multiValue",{"multi-value":!0,"multi-value--is-disabled":h})),s),selectProps:m},sn(v,{data:a,innerProps:ln({},qn(o,"multiValueLabel",{"multi-value__label":!0})),selectProps:m},r),sn(y,{data:a,innerProps:ln(ln({},qn(o,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},g),selectProps:m}))},GI=HI,EI=function(o,r){var u=o.isDisabled,a=o.isFocused,s=o.isSelected,h=o.theme,g=h.spacing,m=h.colors;return ln({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:s?m.primary:a?m.primary25:"transparent",color:u?m.neutral20:s?m.neutral0:"inherit",padding:"".concat(g.baseUnit*2,"px ").concat(g.baseUnit*3,"px"),":active":{backgroundColor:u?void 0:s?m.primary:m.primary50}})},PI=function(o){var r=o.children,u=o.isDisabled,a=o.isFocused,s=o.isSelected,h=o.innerRef,g=o.innerProps;return sn("div",dn({},qn(o,"option",{option:!0,"option--is-disabled":u,"option--is-focused":a,"option--is-selected":s}),{ref:h,"aria-disabled":u},g),r)},_I=PI,LI=function(o,r){var u=o.theme,a=u.spacing,s=u.colors;return ln({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:s.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},zI=function(o){var r=o.children,u=o.innerProps;return sn("div",dn({},qn(o,"placeholder",{placeholder:!0}),u),r)},jI=zI,xI=function(o,r){var u=o.isDisabled,a=o.theme,s=a.spacing,h=a.colors;return ln({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:u?h.neutral40:h.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},$I=function(o){var r=o.children,u=o.isDisabled,a=o.innerProps;return sn("div",dn({},qn(o,"singleValue",{"single-value":!0,"single-value--is-disabled":u}),a),r)},FI=$I,UI={ClearIndicator:uI,Control:gI,DropdownIndicator:tI,DownChevron:sp,CrossIcon:ud,Group:bI,GroupHeading:pI,IndicatorsContainer:nI,IndicatorSeparator:lI,Input:wI,LoadingIndicator:dI,Menu:z0,MenuList:x0,MenuPortal:W0,LoadingMessage:Y0,NoOptionsMessage:U0,MultiValue:GI,MultiValueContainer:RI,MultiValueLabel:BI,MultiValueRemove:NI,Option:_I,Placeholder:jI,SelectContainer:J0,SingleValue:FI,ValueContainer:q0},YI=function(o){return ln(ln({},UI),o.components)},Mk=Number.isNaN||function(o){return typeof o=="number"&&o!==o};function VI(e,o){return!!(e===o||Mk(e)&&Mk(o))}function WI(e,o){if(e.length!==o.length)return!1;for(var r=0;r<e.length;r++)if(!VI(e[r],o[r]))return!1;return!0}function ZI(e,o){o===void 0&&(o=WI);var r=null;function u(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];if(r&&r.lastThis===this&&o(a,r.lastArgs))return r.lastResult;var h=e.apply(this,a);return r={lastResult:h,lastArgs:a,lastThis:this},h}return u.clear=function(){r=null},u}var JI={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},XI=function(o){return sn("span",dn({css:JI},o))},Ak=XI,qI={guidance:function(o){var r=o.isSearchable,u=o.isMulti,a=o.tabSelectsValue,s=o.context,h=o.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return h?"".concat(o["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(u?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(o){var r=o.action,u=o.label,a=u===void 0?"":u,s=o.labels,h=o.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return h?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(o){var r=o.context,u=o.focused,a=o.options,s=o.label,h=s===void 0?"":s,g=o.selectValue,m=o.isDisabled,f=o.isSelected,v=o.isAppleDevice,y=function(R,b){return R&&R.length?"".concat(R.indexOf(b)+1," of ").concat(R.length):""};if(r==="value"&&g)return"value ".concat(h," focused, ").concat(y(g,u),".");if(r==="menu"&&v){var M=m?" disabled":"",C="".concat(f?" selected":"").concat(M);return"".concat(h).concat(C,", ").concat(y(a,u),".")}return""},onFilter:function(o){var r=o.inputValue,u=o.resultsMessage;return"".concat(u).concat(r?" for search term "+r:"",".")}},QI=function(o){var r=o.ariaSelection,u=o.focusedOption,a=o.focusedValue,s=o.focusableOptions,h=o.isFocused,g=o.selectValue,m=o.selectProps,f=o.id,v=o.isAppleDevice,y=m.ariaLiveMessages,M=m.getOptionLabel,C=m.inputValue,D=m.isMulti,R=m.isOptionDisabled,b=m.isSearchable,p=m.menuIsOpen,w=m.options,A=m.screenReaderStatus,P=m.tabSelectsValue,I=m.isLoading,U=m["aria-label"],F=m["aria-live"],Q=T.useMemo(function(){return ln(ln({},qI),y||{})},[y]),tn=T.useMemo(function(){var fn="";if(r&&Q.onChange){var L=r.option,Z=r.options,en=r.removedValue,An=r.removedValues,K=r.value,V=function(Cn){return Array.isArray(Cn)?null:Cn},J=en||L||V(K),X=J?M(J):"",on=Z||An||void 0,yn=on?on.map(M):[],un=ln({isDisabled:J&&R(J,g),label:X,labels:yn},r);fn=Q.onChange(un)}return fn},[r,Q,R,g,M]),bn=T.useMemo(function(){var fn="",L=u||a,Z=!!(u&&g&&g.includes(u));if(L&&Q.onFocus){var en={focused:L,label:M(L),isDisabled:R(L,g),isSelected:Z,options:s,context:L===u?"menu":"value",selectValue:g,isAppleDevice:v};fn=Q.onFocus(en)}return fn},[u,a,M,R,Q,s,g,v]),vn=T.useMemo(function(){var fn="";if(p&&w.length&&!I&&Q.onFilter){var L=A({count:s.length});fn=Q.onFilter({inputValue:C,resultsMessage:L})}return fn},[s,C,p,Q,w,A,I]),nn=(r==null?void 0:r.action)==="initial-input-focus",kn=T.useMemo(function(){var fn="";if(Q.guidance){var L=a?"value":p?"menu":"input";fn=Q.guidance({"aria-label":U,context:L,isDisabled:u&&R(u,g),isMulti:D,isSearchable:b,tabSelectsValue:P,isInitialFocus:nn})}return fn},[U,u,a,D,R,b,p,Q,g,P,nn]),Rn=sn(T.Fragment,null,sn("span",{id:"aria-selection"},tn),sn("span",{id:"aria-focused"},bn),sn("span",{id:"aria-results"},vn),sn("span",{id:"aria-guidance"},kn));return sn(T.Fragment,null,sn(Ak,{id:f},nn&&Rn),sn(Ak,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},h&&!nn&&Rn))},nR=QI,Rh=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],eR=new RegExp("["+Rh.map(function(e){return e.letters}).join("")+"]","g"),dp={};for(var ch=0;ch<Rh.length;ch++)for(var hh=Rh[ch],dh=0;dh<hh.letters.length;dh++)dp[hh.letters[dh]]=hh.base;var mp=function(o){return o.replace(eR,function(r){return dp[r]})},aR=ZI(mp),Dk=function(o){return o.replace(/^\s+|\s+$/g,"")},iR=function(o){return"".concat(o.label," ").concat(o.value)},oR=function(o){return function(r,u){if(r.data.__isNew__)return!0;var a=ln({ignoreCase:!0,ignoreAccents:!0,stringify:iR,trim:!0,matchFrom:"any"},o),s=a.ignoreCase,h=a.ignoreAccents,g=a.stringify,m=a.trim,f=a.matchFrom,v=m?Dk(u):u,y=m?Dk(g(r)):g(r);return s&&(v=v.toLowerCase(),y=y.toLowerCase()),h&&(v=aR(v),y=mp(y)),f==="start"?y.substr(0,v.length)===v:y.indexOf(v)>-1}},tR=["innerRef"];function rR(e){var o=e.innerRef,r=_a(e,tR),u=B0(r,"onExited","in","enter","exit","appear");return sn("input",dn({ref:o},u,{css:id({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var uR=function(o){o.cancelable&&o.preventDefault(),o.stopPropagation()};function sR(e){var o=e.isEnabled,r=e.onBottomArrive,u=e.onBottomLeave,a=e.onTopArrive,s=e.onTopLeave,h=T.useRef(!1),g=T.useRef(!1),m=T.useRef(0),f=T.useRef(null),v=T.useCallback(function(b,p){if(f.current!==null){var w=f.current,A=w.scrollTop,P=w.scrollHeight,I=w.clientHeight,U=f.current,F=p>0,Q=P-I-A,tn=!1;Q>p&&h.current&&(u&&u(b),h.current=!1),F&&g.current&&(s&&s(b),g.current=!1),F&&p>Q?(r&&!h.current&&r(b),U.scrollTop=P,tn=!0,h.current=!0):!F&&-p>A&&(a&&!g.current&&a(b),U.scrollTop=0,tn=!0,g.current=!0),tn&&uR(b)}},[r,u,a,s]),y=T.useCallback(function(b){v(b,b.deltaY)},[v]),M=T.useCallback(function(b){m.current=b.changedTouches[0].clientY},[]),C=T.useCallback(function(b){var p=m.current-b.changedTouches[0].clientY;v(b,p)},[v]),D=T.useCallback(function(b){if(b){var p=K0?{passive:!1}:!1;b.addEventListener("wheel",y,p),b.addEventListener("touchstart",M,p),b.addEventListener("touchmove",C,p)}},[C,M,y]),R=T.useCallback(function(b){b&&(b.removeEventListener("wheel",y,!1),b.removeEventListener("touchstart",M,!1),b.removeEventListener("touchmove",C,!1))},[C,M,y]);return T.useEffect(function(){if(o){var b=f.current;return D(b),function(){R(b)}}},[o,D,R]),function(b){f.current=b}}var Ok=["boxSizing","height","overflow","paddingRight","position"],wk={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ck(e){e.cancelable&&e.preventDefault()}function Kk(e){e.stopPropagation()}function Ik(){var e=this.scrollTop,o=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===o&&(this.scrollTop=e-1)}function Rk(){return"ontouchstart"in window||navigator.maxTouchPoints}var Bk=!!(typeof window<"u"&&window.document&&window.document.createElement),xt=0,Oo={capture:!1,passive:!1};function lR(e){var o=e.isEnabled,r=e.accountForScrollbars,u=r===void 0?!0:r,a=T.useRef({}),s=T.useRef(null),h=T.useCallback(function(m){if(Bk){var f=document.body,v=f&&f.style;if(u&&Ok.forEach(function(D){var R=v&&v[D];a.current[D]=R}),u&&xt<1){var y=parseInt(a.current.paddingRight,10)||0,M=document.body?document.body.clientWidth:0,C=window.innerWidth-M+y||0;Object.keys(wk).forEach(function(D){var R=wk[D];v&&(v[D]=R)}),v&&(v.paddingRight="".concat(C,"px"))}f&&Rk()&&(f.addEventListener("touchmove",Ck,Oo),m&&(m.addEventListener("touchstart",Ik,Oo),m.addEventListener("touchmove",Kk,Oo))),xt+=1}},[u]),g=T.useCallback(function(m){if(Bk){var f=document.body,v=f&&f.style;xt=Math.max(xt-1,0),u&&xt<1&&Ok.forEach(function(y){var M=a.current[y];v&&(v[y]=M)}),f&&Rk()&&(f.removeEventListener("touchmove",Ck,Oo),m&&(m.removeEventListener("touchstart",Ik,Oo),m.removeEventListener("touchmove",Kk,Oo)))}},[u]);return T.useEffect(function(){if(o){var m=s.current;return h(m),function(){g(m)}}},[o,h,g]),function(m){s.current=m}}var cR=function(o){var r=o.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},hR={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function dR(e){var o=e.children,r=e.lockEnabled,u=e.captureEnabled,a=u===void 0?!0:u,s=e.onBottomArrive,h=e.onBottomLeave,g=e.onTopArrive,m=e.onTopLeave,f=sR({isEnabled:a,onBottomArrive:s,onBottomLeave:h,onTopArrive:g,onTopLeave:m}),v=lR({isEnabled:r}),y=function(C){f(C),v(C)};return sn(T.Fragment,null,r&&sn("div",{onClick:cR,css:hR}),o(y))}var mR={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},fR=function(o){var r=o.name,u=o.onFocus;return sn("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:u,css:mR,value:"",onChange:function(){}})},gR=fR;function sd(e){var o;return typeof window<"u"&&window.navigator!=null?e.test(((o=window.navigator.userAgentData)===null||o===void 0?void 0:o.platform)||window.navigator.platform):!1}function SR(){return sd(/^iPhone/i)}function fp(){return sd(/^Mac/i)}function vR(){return sd(/^iPad/i)||fp()&&navigator.maxTouchPoints>1}function kR(){return SR()||vR()}function yR(){return fp()||kR()}var pR=function(o){return o.label},bR=function(o){return o.label},TR=function(o){return o.value},MR=function(o){return!!o.isDisabled},AR={clearIndicator:rI,container:Z0,control:mI,dropdownIndicator:oI,group:vI,groupHeading:yI,indicatorsContainer:Q0,indicatorSeparator:sI,input:MI,loadingIndicator:hI,loadingMessage:F0,menu:P0,menuList:j0,menuPortal:V0,multiValue:CI,multiValueLabel:KI,multiValueRemove:II,noOptionsMessage:$0,option:EI,placeholder:LI,singleValue:xI,valueContainer:X0},DR={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},OR=4,gp=4,wR=38,CR=gp*2,KR={baseUnit:gp,controlHeight:wR,menuGutter:CR},mh={borderRadius:OR,colors:DR,spacing:KR},IR={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:bk(),captureMenuScroll:!bk(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:oR(),formatGroupLabel:pR,getOptionLabel:bR,getOptionValue:TR,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:MR,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!w0(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(o){var r=o.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Nk(e,o,r,u){var a=kp(e,o,r),s=yp(e,o,r),h=vp(e,o),g=os(e,o);return{type:"option",data:o,isDisabled:a,isSelected:s,label:h,value:g,index:u}}function Wu(e,o){return e.options.map(function(r,u){if("options"in r){var a=r.options.map(function(h,g){return Nk(e,h,o,g)}).filter(function(h){return Gk(e,h)});return a.length>0?{type:"group",data:r,options:a,index:u}:void 0}var s=Nk(e,r,o,u);return Gk(e,s)?s:void 0}).filter(I0)}function Sp(e){return e.reduce(function(o,r){return r.type==="group"?o.push.apply(o,qh(r.options.map(function(u){return u.data}))):o.push(r.data),o},[])}function Hk(e,o){return e.reduce(function(r,u){return u.type==="group"?r.push.apply(r,qh(u.options.map(function(a){return{data:a.data,id:"".concat(o,"-").concat(u.index,"-").concat(a.index)}}))):r.push({data:u.data,id:"".concat(o,"-").concat(u.index)}),r},[])}function RR(e,o){return Sp(Wu(e,o))}function Gk(e,o){var r=e.inputValue,u=r===void 0?"":r,a=o.data,s=o.isSelected,h=o.label,g=o.value;return(!bp(e)||!s)&&pp(e,{label:h,value:g,data:a},u)}function BR(e,o){var r=e.focusedValue,u=e.selectValue,a=u.indexOf(r);if(a>-1){var s=o.indexOf(r);if(s>-1)return r;if(a<o.length)return o[a]}return null}function NR(e,o){var r=e.focusedOption;return r&&o.indexOf(r)>-1?r:o[0]}var fh=function(o,r){var u,a=(u=o.find(function(s){return s.data===r}))===null||u===void 0?void 0:u.id;return a||null},vp=function(o,r){return o.getOptionLabel(r)},os=function(o,r){return o.getOptionValue(r)};function kp(e,o,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(o,r):!1}function yp(e,o,r){if(r.indexOf(o)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(o,r);var u=os(e,o);return r.some(function(a){return os(e,a)===u})}function pp(e,o,r){return e.filterOption?e.filterOption(o,r):!0}var bp=function(o){var r=o.hideSelectedOptions,u=o.isMulti;return r===void 0?u:r},HR=1,Tp=function(e){nK(r,e);var o=iK(r);function r(u){var a;if(qC(this,r),a=o.call(this,u),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.controlRef=null,a.getControlRef=function(m){a.controlRef=m},a.focusedOptionRef=null,a.getFocusedOptionRef=function(m){a.focusedOptionRef=m},a.menuListRef=null,a.getMenuListRef=function(m){a.menuListRef=m},a.inputRef=null,a.getInputRef=function(m){a.inputRef=m},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(m,f){var v=a.props,y=v.onChange,M=v.name;f.name=M,a.ariaOnChange(m,f),y(m,f)},a.setValue=function(m,f,v){var y=a.props,M=y.closeMenuOnSelect,C=y.isMulti,D=y.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:D}),M&&(a.setState({inputIsHiddenAfterUpdate:!C}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(m,{action:f,option:v})},a.selectOption=function(m){var f=a.props,v=f.blurInputOnSelect,y=f.isMulti,M=f.name,C=a.state.selectValue,D=y&&a.isOptionSelected(m,C),R=a.isOptionDisabled(m,C);if(D){var b=a.getOptionValue(m);a.setValue(C.filter(function(p){return a.getOptionValue(p)!==b}),"deselect-option",m)}else if(!R)y?a.setValue([].concat(qh(C),[m]),"select-option",m):a.setValue(m,"select-option");else{a.ariaOnChange(m,{action:"select-option",option:m,name:M});return}v&&a.blurInput()},a.removeValue=function(m){var f=a.props.isMulti,v=a.state.selectValue,y=a.getOptionValue(m),M=v.filter(function(D){return a.getOptionValue(D)!==y}),C=Ru(f,M,M[0]||null);a.onChange(C,{action:"remove-value",removedValue:m}),a.focusInput()},a.clearValue=function(){var m=a.state.selectValue;a.onChange(Ru(a.props.isMulti,[],null),{action:"clear",removedValues:m})},a.popValue=function(){var m=a.props.isMulti,f=a.state.selectValue,v=f[f.length-1],y=f.slice(0,f.length-1),M=Ru(m,y,y[0]||null);v&&a.onChange(M,{action:"pop-value",removedValue:v})},a.getFocusedOptionId=function(m){return fh(a.state.focusableOptionsWithIds,m)},a.getFocusableOptionsWithIds=function(){return Hk(Wu(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var m=arguments.length,f=new Array(m),v=0;v<m;v++)f[v]=arguments[v];return T0.apply(void 0,[a.props.classNamePrefix].concat(f))},a.getOptionLabel=function(m){return vp(a.props,m)},a.getOptionValue=function(m){return os(a.props,m)},a.getStyles=function(m,f){var v=a.props.unstyled,y=AR[m](f,v);y.boxSizing="border-box";var M=a.props.styles[m];return M?M(y,f):y},a.getClassNames=function(m,f){var v,y;return(v=(y=a.props.classNames)[m])===null||v===void 0?void 0:v.call(y,f)},a.getElementId=function(m){return"".concat(a.state.instancePrefix,"-").concat(m)},a.getComponents=function(){return YI(a.props)},a.buildCategorizedOptions=function(){return Wu(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return Sp(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(m,f){a.setState({ariaSelection:ln({value:m},f)})},a.onMenuMouseDown=function(m){m.button===0&&(m.stopPropagation(),m.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(m){a.blockOptionHover=!1},a.onControlMouseDown=function(m){if(!m.defaultPrevented){var f=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?m.target.tagName!=="INPUT"&&m.target.tagName!=="TEXTAREA"&&a.onMenuClose():f&&a.openMenu("first"):(f&&(a.openAfterFocus=!0),a.focusInput()),m.target.tagName!=="INPUT"&&m.target.tagName!=="TEXTAREA"&&m.preventDefault()}},a.onDropdownIndicatorMouseDown=function(m){if(!(m&&m.type==="mousedown"&&m.button!==0)&&!a.props.isDisabled){var f=a.props,v=f.isMulti,y=f.menuIsOpen;a.focusInput(),y?(a.setState({inputIsHiddenAfterUpdate:!v}),a.onMenuClose()):a.openMenu("first"),m.preventDefault()}},a.onClearIndicatorMouseDown=function(m){m&&m.type==="mousedown"&&m.button!==0||(a.clearValue(),m.preventDefault(),a.openAfterFocus=!1,m.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(m){typeof a.props.closeMenuOnScroll=="boolean"?m.target instanceof HTMLElement&&Ms(m.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(m)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(m){var f=m.touches,v=f&&f.item(0);v&&(a.initialTouchX=v.clientX,a.initialTouchY=v.clientY,a.userIsDragging=!1)},a.onTouchMove=function(m){var f=m.touches,v=f&&f.item(0);if(v){var y=Math.abs(v.clientX-a.initialTouchX),M=Math.abs(v.clientY-a.initialTouchY),C=5;a.userIsDragging=y>C||M>C}},a.onTouchEnd=function(m){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(m.target)&&a.menuListRef&&!a.menuListRef.contains(m.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(m){a.userIsDragging||a.onControlMouseDown(m)},a.onClearIndicatorTouchEnd=function(m){a.userIsDragging||a.onClearIndicatorMouseDown(m)},a.onDropdownIndicatorTouchEnd=function(m){a.userIsDragging||a.onDropdownIndicatorMouseDown(m)},a.handleInputChange=function(m){var f=a.props.inputValue,v=m.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(v,{action:"input-change",prevInputValue:f}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(m){a.props.onFocus&&a.props.onFocus(m),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(m){var f=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(m),a.onInputChange("",{action:"input-blur",prevInputValue:f}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(m){if(!(a.blockOptionHover||a.state.focusedOption===m)){var f=a.getFocusableOptions(),v=f.indexOf(m);a.setState({focusedOption:m,focusedOptionId:v>-1?a.getFocusedOptionId(m):null})}},a.shouldHideSelectedOptions=function(){return bp(a.props)},a.onValueInputFocus=function(m){m.preventDefault(),m.stopPropagation(),a.focus()},a.onKeyDown=function(m){var f=a.props,v=f.isMulti,y=f.backspaceRemovesValue,M=f.escapeClearsValue,C=f.inputValue,D=f.isClearable,R=f.isDisabled,b=f.menuIsOpen,p=f.onKeyDown,w=f.tabSelectsValue,A=f.openMenuOnFocus,P=a.state,I=P.focusedOption,U=P.focusedValue,F=P.selectValue;if(!R&&!(typeof p=="function"&&(p(m),m.defaultPrevented))){switch(a.blockOptionHover=!0,m.key){case"ArrowLeft":if(!v||C)return;a.focusValue("previous");break;case"ArrowRight":if(!v||C)return;a.focusValue("next");break;case"Delete":case"Backspace":if(C)return;if(U)a.removeValue(U);else{if(!y)return;v?a.popValue():D&&a.clearValue()}break;case"Tab":if(a.isComposing||m.shiftKey||!b||!w||!I||A&&a.isOptionSelected(I,F))return;a.selectOption(I);break;case"Enter":if(m.keyCode===229)break;if(b){if(!I||a.isComposing)return;a.selectOption(I);break}return;case"Escape":b?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:C}),a.onMenuClose()):D&&M&&a.clearValue();break;case" ":if(C)return;if(!b){a.openMenu("first");break}if(!I)return;a.selectOption(I);break;case"ArrowUp":b?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":b?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!b)return;a.focusOption("pageup");break;case"PageDown":if(!b)return;a.focusOption("pagedown");break;case"Home":if(!b)return;a.focusOption("first");break;case"End":if(!b)return;a.focusOption("last");break;default:return}m.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++HR),a.state.selectValue=yk(u.value),u.menuIsOpen&&a.state.selectValue.length){var s=a.getFocusableOptionsWithIds(),h=a.buildFocusableOptions(),g=h.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=s,a.state.focusedOption=h[g],a.state.focusedOptionId=fh(s,h[g])}return a}return QC(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&pk(this.menuListRef,this.focusedOptionRef),yR()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(a){var s=this.props,h=s.isDisabled,g=s.menuIsOpen,m=this.state.isFocused;(m&&!h&&a.isDisabled||m&&g&&!a.menuIsOpen)&&this.focusInput(),m&&h&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!m&&!h&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(pk(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,s){this.props.onInputChange(a,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var s=this,h=this.state,g=h.selectValue,m=h.isFocused,f=this.buildFocusableOptions(),v=a==="first"?0:f.length-1;if(!this.props.isMulti){var y=f.indexOf(g[0]);y>-1&&(v=y)}this.scrollToFocusedOptionOnUpdate=!(m&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:f[v],focusedOptionId:this.getFocusedOptionId(f[v])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(a){var s=this.state,h=s.selectValue,g=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var m=h.indexOf(g);g||(m=-1);var f=h.length-1,v=-1;if(h.length){switch(a){case"previous":m===0?v=0:m===-1?v=f:v=m-1;break;case"next":m>-1&&m<f&&(v=m+1);break}this.setState({inputIsHidden:v!==-1,focusedValue:h[v]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,h=this.state.focusedOption,g=this.getFocusableOptions();if(g.length){var m=0,f=g.indexOf(h);h||(f=-1),a==="up"?m=f>0?f-1:g.length-1:a==="down"?m=(f+1)%g.length:a==="pageup"?(m=f-s,m<0&&(m=0)):a==="pagedown"?(m=f+s,m>g.length-1&&(m=g.length-1)):a==="last"&&(m=g.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:g[m],focusedValue:null,focusedOptionId:this.getFocusedOptionId(g[m])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(mh):ln(ln({},mh),this.props.theme):mh}},{key:"getCommonProps",value:function(){var a=this.clearValue,s=this.cx,h=this.getStyles,g=this.getClassNames,m=this.getValue,f=this.selectOption,v=this.setValue,y=this.props,M=y.isMulti,C=y.isRtl,D=y.options,R=this.hasValue();return{clearValue:a,cx:s,getStyles:h,getClassNames:g,getValue:m,hasValue:R,isMulti:M,isRtl:C,options:D,selectOption:f,selectProps:y,setValue:v,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,s=a.isClearable,h=a.isMulti;return s===void 0?h:s}},{key:"isOptionDisabled",value:function(a,s){return kp(this.props,a,s)}},{key:"isOptionSelected",value:function(a,s){return yp(this.props,a,s)}},{key:"filterOption",value:function(a,s){return pp(this.props,a,s)}},{key:"formatOptionLabel",value:function(a,s){if(typeof this.props.formatOptionLabel=="function"){var h=this.props.inputValue,g=this.state.selectValue;return this.props.formatOptionLabel(a,{context:s,inputValue:h,selectValue:g})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,s=a.isDisabled,h=a.isSearchable,g=a.inputId,m=a.inputValue,f=a.tabIndex,v=a.form,y=a.menuIsOpen,M=a.required,C=this.getComponents(),D=C.Input,R=this.state,b=R.inputIsHidden,p=R.ariaSelection,w=this.commonProps,A=g||this.getElementId("input"),P=ln(ln(ln({"aria-autocomplete":"list","aria-expanded":y,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":M,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},y&&{"aria-controls":this.getElementId("listbox")}),!h&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return h?T.createElement(D,dn({},w,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:A,innerRef:this.getInputRef,isDisabled:s,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:f,form:v,type:"text",value:m},P)):T.createElement(rR,dn({id:A,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:as,onFocus:this.onInputFocus,disabled:s,tabIndex:f,inputMode:"none",form:v,value:""},P))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,s=this.getComponents(),h=s.MultiValue,g=s.MultiValueContainer,m=s.MultiValueLabel,f=s.MultiValueRemove,v=s.SingleValue,y=s.Placeholder,M=this.commonProps,C=this.props,D=C.controlShouldRenderValue,R=C.isDisabled,b=C.isMulti,p=C.inputValue,w=C.placeholder,A=this.state,P=A.selectValue,I=A.focusedValue,U=A.isFocused;if(!this.hasValue()||!D)return p?null:T.createElement(y,dn({},M,{key:"placeholder",isDisabled:R,isFocused:U,innerProps:{id:this.getElementId("placeholder")}}),w);if(b)return P.map(function(Q,tn){var bn=Q===I,vn="".concat(a.getOptionLabel(Q),"-").concat(a.getOptionValue(Q));return T.createElement(h,dn({},M,{components:{Container:g,Label:m,Remove:f},isFocused:bn,isDisabled:R,key:vn,index:tn,removeProps:{onClick:function(){return a.removeValue(Q)},onTouchEnd:function(){return a.removeValue(Q)},onMouseDown:function(kn){kn.preventDefault()}},data:Q}),a.formatOptionLabel(Q,"value"))});if(p)return null;var F=P[0];return T.createElement(v,dn({},M,{data:F,isDisabled:R}),this.formatOptionLabel(F,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),s=a.ClearIndicator,h=this.commonProps,g=this.props,m=g.isDisabled,f=g.isLoading,v=this.state.isFocused;if(!this.isClearable()||!s||m||!this.hasValue()||f)return null;var y={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(s,dn({},h,{innerProps:y,isFocused:v}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),s=a.LoadingIndicator,h=this.commonProps,g=this.props,m=g.isDisabled,f=g.isLoading,v=this.state.isFocused;if(!s||!f)return null;var y={"aria-hidden":"true"};return T.createElement(s,dn({},h,{innerProps:y,isDisabled:m,isFocused:v}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),s=a.DropdownIndicator,h=a.IndicatorSeparator;if(!s||!h)return null;var g=this.commonProps,m=this.props.isDisabled,f=this.state.isFocused;return T.createElement(h,dn({},g,{isDisabled:m,isFocused:f}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),s=a.DropdownIndicator;if(!s)return null;var h=this.commonProps,g=this.props.isDisabled,m=this.state.isFocused,f={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return T.createElement(s,dn({},h,{innerProps:f,isDisabled:g,isFocused:m}))}},{key:"renderMenu",value:function(){var a=this,s=this.getComponents(),h=s.Group,g=s.GroupHeading,m=s.Menu,f=s.MenuList,v=s.MenuPortal,y=s.LoadingMessage,M=s.NoOptionsMessage,C=s.Option,D=this.commonProps,R=this.state.focusedOption,b=this.props,p=b.captureMenuScroll,w=b.inputValue,A=b.isLoading,P=b.loadingMessage,I=b.minMenuHeight,U=b.maxMenuHeight,F=b.menuIsOpen,Q=b.menuPlacement,tn=b.menuPosition,bn=b.menuPortalTarget,vn=b.menuShouldBlockScroll,nn=b.menuShouldScrollIntoView,kn=b.noOptionsMessage,Rn=b.onMenuScrollToTop,fn=b.onMenuScrollToBottom;if(!F)return null;var L=function(X,on){var yn=X.type,un=X.data,Zn=X.isDisabled,Cn=X.isSelected,Ke=X.label,Lo=X.value,di=R===un,_i=Zn?void 0:function(){return a.onOptionHover(un)},zo=Zn?void 0:function(){return a.selectOption(un)},Li="".concat(a.getElementId("option"),"-").concat(on),zs={id:Li,onClick:zo,onMouseMove:_i,onMouseOver:_i,tabIndex:-1,role:"option","aria-selected":a.state.isAppleDevice?void 0:Cn};return T.createElement(C,dn({},D,{innerProps:zs,data:un,isDisabled:Zn,isSelected:Cn,key:Li,label:Ke,type:yn,value:Lo,isFocused:di,innerRef:di?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(X.data,"menu"))},Z;if(this.hasOptions())Z=this.getCategorizedOptions().map(function(J){if(J.type==="group"){var X=J.data,on=J.options,yn=J.index,un="".concat(a.getElementId("group"),"-").concat(yn),Zn="".concat(un,"-heading");return T.createElement(h,dn({},D,{key:un,data:X,options:on,Heading:g,headingProps:{id:Zn,data:J.data},label:a.formatGroupLabel(J.data)}),J.options.map(function(Cn){return L(Cn,"".concat(yn,"-").concat(Cn.index))}))}else if(J.type==="option")return L(J,"".concat(J.index))});else if(A){var en=P({inputValue:w});if(en===null)return null;Z=T.createElement(y,D,en)}else{var An=kn({inputValue:w});if(An===null)return null;Z=T.createElement(M,D,An)}var K={minMenuHeight:I,maxMenuHeight:U,menuPlacement:Q,menuPosition:tn,menuShouldScrollIntoView:nn},V=T.createElement(_0,dn({},D,K),function(J){var X=J.ref,on=J.placerProps,yn=on.placement,un=on.maxHeight;return T.createElement(m,dn({},D,K,{innerRef:X,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:A,placement:yn}),T.createElement(dR,{captureEnabled:p,onTopArrive:Rn,onBottomArrive:fn,lockEnabled:vn},function(Zn){return T.createElement(f,dn({},D,{innerRef:function(Ke){a.getMenuListRef(Ke),Zn(Ke)},innerProps:{role:"listbox","aria-multiselectable":D.isMulti,id:a.getElementId("listbox")},isLoading:A,maxHeight:un,focusedOption:R}),Z)}))});return bn||tn==="fixed"?T.createElement(v,dn({},D,{appendTo:bn,controlElement:this.controlRef,menuPlacement:Q,menuPosition:tn}),V):V}},{key:"renderFormField",value:function(){var a=this,s=this.props,h=s.delimiter,g=s.isDisabled,m=s.isMulti,f=s.name,v=s.required,y=this.state.selectValue;if(v&&!this.hasValue()&&!g)return T.createElement(gR,{name:f,onFocus:this.onValueInputFocus});if(!(!f||g))if(m)if(h){var M=y.map(function(R){return a.getOptionValue(R)}).join(h);return T.createElement("input",{name:f,type:"hidden",value:M})}else{var C=y.length>0?y.map(function(R,b){return T.createElement("input",{key:"i-".concat(b),name:f,type:"hidden",value:a.getOptionValue(R)})}):T.createElement("input",{name:f,type:"hidden",value:""});return T.createElement("div",null,C)}else{var D=y[0]?this.getOptionValue(y[0]):"";return T.createElement("input",{name:f,type:"hidden",value:D})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,s=this.state,h=s.ariaSelection,g=s.focusedOption,m=s.focusedValue,f=s.isFocused,v=s.selectValue,y=this.getFocusableOptions();return T.createElement(nR,dn({},a,{id:this.getElementId("live-region"),ariaSelection:h,focusedOption:g,focusedValue:m,isFocused:f,selectValue:v,focusableOptions:y,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),s=a.Control,h=a.IndicatorsContainer,g=a.SelectContainer,m=a.ValueContainer,f=this.props,v=f.className,y=f.id,M=f.isDisabled,C=f.menuIsOpen,D=this.state.isFocused,R=this.commonProps=this.getCommonProps();return T.createElement(g,dn({},R,{className:v,innerProps:{id:y,onKeyDown:this.onKeyDown},isDisabled:M,isFocused:D}),this.renderLiveRegion(),T.createElement(s,dn({},R,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:M,isFocused:D,menuIsOpen:C}),T.createElement(m,dn({},R,{isDisabled:M}),this.renderPlaceholderOrValue(),this.renderInput()),T.createElement(h,dn({},R,{isDisabled:M}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,s){var h=s.prevProps,g=s.clearFocusValueOnUpdate,m=s.inputIsHiddenAfterUpdate,f=s.ariaSelection,v=s.isFocused,y=s.prevWasFocused,M=s.instancePrefix,C=a.options,D=a.value,R=a.menuIsOpen,b=a.inputValue,p=a.isMulti,w=yk(D),A={};if(h&&(D!==h.value||C!==h.options||R!==h.menuIsOpen||b!==h.inputValue)){var P=R?RR(a,w):[],I=R?Hk(Wu(a,w),"".concat(M,"-option")):[],U=g?BR(s,w):null,F=NR(s,P),Q=fh(I,F);A={selectValue:w,focusedOption:F,focusedOptionId:Q,focusableOptionsWithIds:I,focusedValue:U,clearFocusValueOnUpdate:!1}}var tn=m!=null&&a!==h?{inputIsHidden:m,inputIsHiddenAfterUpdate:void 0}:{},bn=f,vn=v&&y;return v&&!vn&&(bn={value:Ru(p,w,w[0]||null),options:w,action:"initial-input-focus"},vn=!y),(f==null?void 0:f.action)==="initial-input-focus"&&(bn=null),ln(ln(ln({},A),tn),{},{prevProps:a,ariaSelection:bn,prevWasFocused:vn})}}]),r}(T.Component);Tp.defaultProps=IR;var GR=T.forwardRef(function(e,o){var r=XC(e);return T.createElement(Tp,dn({ref:o},r))}),ER=GR;function PR(){const e=Fh(),o=rr(),r=h=>{if(!h)return;const g=h.value;o.updateFilter(g)},u=()=>{const h=Math.floor(Math.random()*wo+1);e(`/guess?id=${h}&filter=${o.filter}`)},a=Jh.map(h=>({value:h,label:h})),s={option:(h,g)=>({...h,whiteSpace:"normal",wordWrap:"break-word",color:g.isSelected?"black":"rgba(0, 0, 0, 0.7)"}),singleValue:h=>({...h,whiteSpace:"normal",color:"black"})};return x.jsx("div",{className:"FilterContainer",children:x.jsxs("div",{className:"Filter",children:[x.jsx(ER,{className:"SelectOptions",value:{value:o.filter,label:o.filter},options:a,styles:s,components:{DropdownIndicator:()=>null},isSearchable:!1,onChange:r}),x.jsx("button",{className:"RandomSong",onClick:u,children:"Random Song!"})]})})}const _R=`'Tis Time for "Torture," Princess
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
`,LR=`Cowboy Bebop
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

`,Mp=Object.freeze({status:"aborted"});function G(e,o,r){function u(g,m){var f;Object.defineProperty(g,"_zod",{value:g._zod??{},enumerable:!1}),(f=g._zod).traits??(f.traits=new Set),g._zod.traits.add(e),o(g,m);for(const v in h.prototype)v in g||Object.defineProperty(g,v,{value:h.prototype[v].bind(g)});g._zod.constr=h,g._zod.def=m}const a=(r==null?void 0:r.Parent)??Object;class s extends a{}Object.defineProperty(s,"name",{value:e});function h(g){var m;const f=r!=null&&r.Parent?new s:this;u(f,g),(m=f._zod).deferred??(m.deferred=[]);for(const v of f._zod.deferred)v();return f}return Object.defineProperty(h,"init",{value:u}),Object.defineProperty(h,Symbol.hasInstance,{value:g=>{var m,f;return r!=null&&r.Parent&&g instanceof r.Parent?!0:(f=(m=g==null?void 0:g._zod)==null?void 0:m.traits)==null?void 0:f.has(e)}}),Object.defineProperty(h,"name",{value:e}),h}const Ap=Symbol("zod_brand");class Ro extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const ts={};function Te(e){return e&&Object.assign(ts,e),ts}function zR(e){return e}function jR(e){return e}function xR(e){}function $R(e){throw new Error}function FR(e){}function ld(e){const o=Object.values(e).filter(u=>typeof u=="number");return Object.entries(e).filter(([u,a])=>o.indexOf(+u)===-1).map(([u,a])=>a)}function q(e,o="|"){return e.map(r=>Sn(r)).join(o)}function rs(e,o){return typeof o=="bigint"?o.toString():o}function As(e){return{get value(){{const o=e();return Object.defineProperty(this,"value",{value:o}),o}}}}function Ei(e){return e==null}function Ds(e){const o=e.startsWith("^")?1:0,r=e.endsWith("$")?e.length-1:e.length;return e.slice(o,r)}function Dp(e,o){const r=(e.toString().split(".")[1]||"").length,u=o.toString();let a=(u.split(".")[1]||"").length;if(a===0&&/\d?e-\d?/.test(u)){const m=u.match(/\d?e-(\d?)/);m!=null&&m[1]&&(a=Number.parseInt(m[1]))}const s=r>a?r:a,h=Number.parseInt(e.toFixed(s).replace(".","")),g=Number.parseInt(o.toFixed(s).replace(".",""));return h%g/10**s}const Ek=Symbol("evaluating");function In(e,o,r){let u;Object.defineProperty(e,o,{get(){if(u!==Ek)return u===void 0&&(u=Ek,u=r()),u},set(a){Object.defineProperty(e,o,{value:a})},configurable:!0})}function Os(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function ga(e,o,r){Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0})}function hi(...e){const o={};for(const r of e){const u=Object.getOwnPropertyDescriptors(r);Object.assign(o,u)}return Object.defineProperties({},o)}function UR(e){return hi(e._zod.def)}function YR(e,o){return o?o.reduce((r,u)=>r==null?void 0:r[u],e):e}function VR(e){const o=Object.keys(e),r=o.map(u=>e[u]);return Promise.all(r).then(u=>{const a={};for(let s=0;s<o.length;s++)a[o[s]]=u[s];return a})}function WR(e=10){const o="abcdefghijklmnopqrstuvwxyz";let r="";for(let u=0;u<e;u++)r+=o[Math.floor(Math.random()*o.length)];return r}function Bh(e){return JSON.stringify(e)}const cd="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function Xt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}const Op=As(()=>{var e;if(typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)!=null&&e.includes("Cloudflare")))return!1;try{const o=Function;return new o(""),!0}catch{return!1}});function qt(e){if(Xt(e)===!1)return!1;const o=e.constructor;if(o===void 0)return!0;const r=o.prototype;return!(Xt(r)===!1||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)}function ZR(e){let o=0;for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&o++;return o}const JR=e=>{const o=typeof e;switch(o){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(e)?"array":e===null?"null":e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?"promise":typeof Map<"u"&&e instanceof Map?"map":typeof Set<"u"&&e instanceof Set?"set":typeof Date<"u"&&e instanceof Date?"date":typeof File<"u"&&e instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${o}`)}},us=new Set(["string","number","symbol"]),wp=new Set(["string","number","bigint","boolean","symbol","undefined"]);function ci(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function aa(e,o,r){const u=new e._zod.constr(o??e._zod.def);return(!o||r!=null&&r.parent)&&(u._zod.parent=e),u}function W(e){const o=e;if(!o)return{};if(typeof o=="string")return{error:()=>o};if((o==null?void 0:o.message)!==void 0){if((o==null?void 0:o.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");o.error=o.message}return delete o.message,typeof o.error=="string"?{...o,error:()=>o.error}:o}function XR(e){let o;return new Proxy({},{get(r,u,a){return o??(o=e()),Reflect.get(o,u,a)},set(r,u,a,s){return o??(o=e()),Reflect.set(o,u,a,s)},has(r,u){return o??(o=e()),Reflect.has(o,u)},deleteProperty(r,u){return o??(o=e()),Reflect.deleteProperty(o,u)},ownKeys(r){return o??(o=e()),Reflect.ownKeys(o)},getOwnPropertyDescriptor(r,u){return o??(o=e()),Reflect.getOwnPropertyDescriptor(o,u)},defineProperty(r,u,a){return o??(o=e()),Reflect.defineProperty(o,u,a)}})}function Sn(e){return typeof e=="bigint"?e.toString()+"n":typeof e=="string"?`"${e}"`:`${e}`}function Cp(e){return Object.keys(e).filter(o=>e[o]._zod.optin==="optional"&&e[o]._zod.optout==="optional")}const Kp={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Ip={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function Rp(e,o){const r=e._zod.def,u=hi(e._zod.def,{get shape(){const a={};for(const s in o){if(!(s in r.shape))throw new Error(`Unrecognized key: "${s}"`);o[s]&&(a[s]=r.shape[s])}return ga(this,"shape",a),a},checks:[]});return aa(e,u)}function Bp(e,o){const r=e._zod.def,u=hi(e._zod.def,{get shape(){const a={...e._zod.def.shape};for(const s in o){if(!(s in r.shape))throw new Error(`Unrecognized key: "${s}"`);o[s]&&delete a[s]}return ga(this,"shape",a),a},checks:[]});return aa(e,u)}function Np(e,o){if(!qt(o))throw new Error("Invalid input to extend: expected a plain object");const r=hi(e._zod.def,{get shape(){const u={...e._zod.def.shape,...o};return ga(this,"shape",u),u},checks:[]});return aa(e,r)}function Hp(e,o){const r=hi(e._zod.def,{get shape(){const u={...e._zod.def.shape,...o._zod.def.shape};return ga(this,"shape",u),u},get catchall(){return o._zod.def.catchall},checks:[]});return aa(e,r)}function Gp(e,o,r){const u=hi(o._zod.def,{get shape(){const a=o._zod.def.shape,s={...a};if(r)for(const h in r){if(!(h in a))throw new Error(`Unrecognized key: "${h}"`);r[h]&&(s[h]=e?new e({type:"optional",innerType:a[h]}):a[h])}else for(const h in a)s[h]=e?new e({type:"optional",innerType:a[h]}):a[h];return ga(this,"shape",s),s},checks:[]});return aa(o,u)}function Ep(e,o,r){const u=hi(o._zod.def,{get shape(){const a=o._zod.def.shape,s={...a};if(r)for(const h in r){if(!(h in s))throw new Error(`Unrecognized key: "${h}"`);r[h]&&(s[h]=new e({type:"nonoptional",innerType:a[h]}))}else for(const h in a)s[h]=new e({type:"nonoptional",innerType:a[h]});return ga(this,"shape",s),s},checks:[]});return aa(o,u)}function Ko(e,o=0){var r;for(let u=o;u<e.issues.length;u++)if(((r=e.issues[u])==null?void 0:r.continue)!==!0)return!0;return!1}function Qe(e,o){return o.map(r=>{var u;return(u=r).path??(u.path=[]),r.path.unshift(e),r})}function Ut(e){return typeof e=="string"?e:e==null?void 0:e.message}function ea(e,o,r){var a,s,h,g,m,f;const u={...e,path:e.path??[]};if(!e.message){const v=Ut((h=(s=(a=e.inst)==null?void 0:a._zod.def)==null?void 0:s.error)==null?void 0:h.call(s,e))??Ut((g=o==null?void 0:o.error)==null?void 0:g.call(o,e))??Ut((m=r.customError)==null?void 0:m.call(r,e))??Ut((f=r.localeError)==null?void 0:f.call(r,e))??"Invalid input";u.message=v}return delete u.inst,delete u.continue,o!=null&&o.reportInput||delete u.input,u}function ws(e){return e instanceof Set?"set":e instanceof Map?"map":e instanceof File?"file":"unknown"}function Cs(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function Bo(...e){const[o,r,u]=e;return typeof o=="string"?{message:o,code:"custom",input:r,inst:u}:{...o}}function qR(e){return Object.entries(e).filter(([o,r])=>Number.isNaN(Number.parseInt(o,10))).map(o=>o[1])}class QR{constructor(...o){}}const nB=Object.freeze(Object.defineProperty({__proto__:null,BIGINT_FORMAT_RANGES:Ip,Class:QR,NUMBER_FORMAT_RANGES:Kp,aborted:Ko,allowsEval:Op,assert:FR,assertEqual:zR,assertIs:xR,assertNever:$R,assertNotEqual:jR,assignProp:ga,cached:As,captureStackTrace:cd,cleanEnum:qR,cleanRegex:Ds,clone:aa,cloneDef:UR,createTransparentProxy:XR,defineLazy:In,esc:Bh,escapeRegex:ci,extend:Np,finalizeIssue:ea,floatSafeRemainder:Dp,getElementAtPath:YR,getEnumValues:ld,getLengthableOrigin:Cs,getParsedType:JR,getSizableOrigin:ws,isObject:Xt,isPlainObject:qt,issue:Bo,joinValues:q,jsonStringifyReplacer:rs,merge:Hp,mergeDefs:hi,normalizeParams:W,nullish:Ei,numKeys:ZR,objectClone:Os,omit:Bp,optionalKeys:Cp,partial:Gp,pick:Rp,prefixIssues:Qe,primitiveTypes:wp,promiseAllObject:VR,propertyKeyTypes:us,randomString:WR,required:Ep,stringifyPrimitive:Sn,unwrapMessage:Ut},Symbol.toStringTag,{value:"Module"})),Pp=(e,o)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:o,enumerable:!1}),e.message=JSON.stringify(o,rs,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},hd=G("$ZodError",Pp),sr=G("$ZodError",Pp,{Parent:Error});function dd(e,o=r=>r.message){const r={},u=[];for(const a of e.issues)a.path.length>0?(r[a.path[0]]=r[a.path[0]]||[],r[a.path[0]].push(o(a))):u.push(o(a));return{formErrors:u,fieldErrors:r}}function md(e,o){const r=o||function(s){return s.message},u={_errors:[]},a=s=>{for(const h of s.issues)if(h.code==="invalid_union"&&h.errors.length)h.errors.map(g=>a({issues:g}));else if(h.code==="invalid_key")a({issues:h.issues});else if(h.code==="invalid_element")a({issues:h.issues});else if(h.path.length===0)u._errors.push(r(h));else{let g=u,m=0;for(;m<h.path.length;){const f=h.path[m];m===h.path.length-1?(g[f]=g[f]||{_errors:[]},g[f]._errors.push(r(h))):g[f]=g[f]||{_errors:[]},g=g[f],m++}}};return a(e),u}function _p(e,o){const r=o||function(s){return s.message},u={errors:[]},a=(s,h=[])=>{var g,m;for(const f of s.issues)if(f.code==="invalid_union"&&f.errors.length)f.errors.map(v=>a({issues:v},f.path));else if(f.code==="invalid_key")a({issues:f.issues},f.path);else if(f.code==="invalid_element")a({issues:f.issues},f.path);else{const v=[...h,...f.path];if(v.length===0){u.errors.push(r(f));continue}let y=u,M=0;for(;M<v.length;){const C=v[M],D=M===v.length-1;typeof C=="string"?(y.properties??(y.properties={}),(g=y.properties)[C]??(g[C]={errors:[]}),y=y.properties[C]):(y.items??(y.items=[]),(m=y.items)[C]??(m[C]={errors:[]}),y=y.items[C]),D&&y.errors.push(r(f)),M++}}};return a(e),u}function Lp(e){const o=[],r=e.map(u=>typeof u=="object"?u.key:u);for(const u of r)typeof u=="number"?o.push(`[${u}]`):typeof u=="symbol"?o.push(`[${JSON.stringify(String(u))}]`):/[^\w$]/.test(u)?o.push(`[${JSON.stringify(u)}]`):(o.length&&o.push("."),o.push(u));return o.join("")}function zp(e){var u;const o=[],r=[...e.issues].sort((a,s)=>(a.path??[]).length-(s.path??[]).length);for(const a of r)o.push(`✖ ${a.message}`),(u=a.path)!=null&&u.length&&o.push(`  → at ${Lp(a.path)}`);return o.join(`
`)}const fd=e=>(o,r,u,a)=>{const s=u?Object.assign(u,{async:!1}):{async:!1},h=o._zod.run({value:r,issues:[]},s);if(h instanceof Promise)throw new Ro;if(h.issues.length){const g=new((a==null?void 0:a.Err)??e)(h.issues.map(m=>ea(m,s,Te())));throw cd(g,a==null?void 0:a.callee),g}return h.value},Nh=fd(sr),gd=e=>async(o,r,u,a)=>{const s=u?Object.assign(u,{async:!0}):{async:!0};let h=o._zod.run({value:r,issues:[]},s);if(h instanceof Promise&&(h=await h),h.issues.length){const g=new((a==null?void 0:a.Err)??e)(h.issues.map(m=>ea(m,s,Te())));throw cd(g,a==null?void 0:a.callee),g}return h.value},Hh=gd(sr),Sd=e=>(o,r,u)=>{const a=u?{...u,async:!1}:{async:!1},s=o._zod.run({value:r,issues:[]},a);if(s instanceof Promise)throw new Ro;return s.issues.length?{success:!1,error:new(e??hd)(s.issues.map(h=>ea(h,a,Te())))}:{success:!0,data:s.value}},jp=Sd(sr),vd=e=>async(o,r,u)=>{const a=u?Object.assign(u,{async:!0}):{async:!0};let s=o._zod.run({value:r,issues:[]},a);return s instanceof Promise&&(s=await s),s.issues.length?{success:!1,error:new e(s.issues.map(h=>ea(h,a,Te())))}:{success:!0,data:s.value}},xp=vd(sr),$p=/^[cC][^\s-]{8,}$/,Fp=/^[0-9a-z]+$/,Up=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Yp=/^[0-9a-vA-V]{20}$/,Vp=/^[A-Za-z0-9]{27}$/,Wp=/^[a-zA-Z0-9_-]{21}$/,Zp=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,eB=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Jp=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,No=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,aB=No(4),iB=No(6),oB=No(7),Xp=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,tB=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rB=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,uB=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,sB=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,lB=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cB="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function qp(){return new RegExp(cB,"u")}const Qp=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,nb=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,eb=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,ab=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ib=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,kd=/^[A-Za-z0-9_-]*$/,yd=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,hB=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,ob=/^\+(?:[0-9]){6,14}[0-9]$/,tb="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",rb=new RegExp(`^${tb}$`);function ub(e){const o="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${o}`:e.precision===0?`${o}:[0-5]\\d`:`${o}:[0-5]\\d\\.\\d{${e.precision}}`:`${o}(?::[0-5]\\d(?:\\.\\d+)?)?`}function sb(e){return new RegExp(`^${ub(e)}$`)}function lb(e){const o=ub({precision:e.precision}),r=["Z"];e.local&&r.push(""),e.offset&&r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const u=`${o}(?:${r.join("|")})`;return new RegExp(`^${tb}T(?:${u})$`)}const cb=e=>{const o=e?`[\\s\\S]{${(e==null?void 0:e.minimum)??0},${(e==null?void 0:e.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${o}$`)},hb=/^\d+n?$/,db=/^\d+$/,mb=/^-?\d+(?:\.\d+)?/i,fb=/true|false/i,gb=/null/i,Sb=/undefined/i,vb=/^[^A-Z]*$/,kb=/^[^a-z]*$/,yb=Object.freeze(Object.defineProperty({__proto__:null,base64:ib,base64url:kd,bigint:hb,boolean:fb,browserEmail:lB,cidrv4:eb,cidrv6:ab,cuid:$p,cuid2:Fp,date:rb,datetime:lb,domain:hB,duration:Zp,e164:ob,email:Xp,emoji:qp,extendedDuration:eB,guid:Jp,hostname:yd,html5Email:tB,idnEmail:sB,integer:db,ipv4:Qp,ipv6:nb,ksuid:Vp,lowercase:vb,nanoid:Wp,null:gb,number:mb,rfc5322Email:rB,string:cb,time:sb,ulid:Up,undefined:Sb,unicodeEmail:uB,uppercase:kb,uuid:No,uuid4:aB,uuid6:iB,uuid7:oB,xid:Yp},Symbol.toStringTag,{value:"Module"})),Qn=G("$ZodCheck",(e,o)=>{var r;e._zod??(e._zod={}),e._zod.def=o,(r=e._zod).onattach??(r.onattach=[])}),pb={number:"number",bigint:"bigint",object:"date"},pd=G("$ZodCheckLessThan",(e,o)=>{Qn.init(e,o);const r=pb[typeof o.value];e._zod.onattach.push(u=>{const a=u._zod.bag,s=(o.inclusive?a.maximum:a.exclusiveMaximum)??Number.POSITIVE_INFINITY;o.value<s&&(o.inclusive?a.maximum=o.value:a.exclusiveMaximum=o.value)}),e._zod.check=u=>{(o.inclusive?u.value<=o.value:u.value<o.value)||u.issues.push({origin:r,code:"too_big",maximum:o.value,input:u.value,inclusive:o.inclusive,inst:e,continue:!o.abort})}}),bd=G("$ZodCheckGreaterThan",(e,o)=>{Qn.init(e,o);const r=pb[typeof o.value];e._zod.onattach.push(u=>{const a=u._zod.bag,s=(o.inclusive?a.minimum:a.exclusiveMinimum)??Number.NEGATIVE_INFINITY;o.value>s&&(o.inclusive?a.minimum=o.value:a.exclusiveMinimum=o.value)}),e._zod.check=u=>{(o.inclusive?u.value>=o.value:u.value>o.value)||u.issues.push({origin:r,code:"too_small",minimum:o.value,input:u.value,inclusive:o.inclusive,inst:e,continue:!o.abort})}}),bb=G("$ZodCheckMultipleOf",(e,o)=>{Qn.init(e,o),e._zod.onattach.push(r=>{var u;(u=r._zod.bag).multipleOf??(u.multipleOf=o.value)}),e._zod.check=r=>{if(typeof r.value!=typeof o.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof r.value=="bigint"?r.value%o.value===BigInt(0):Dp(r.value,o.value)===0)||r.issues.push({origin:typeof r.value,code:"not_multiple_of",divisor:o.value,input:r.value,inst:e,continue:!o.abort})}}),Tb=G("$ZodCheckNumberFormat",(e,o)=>{var h;Qn.init(e,o),o.format=o.format||"float64";const r=(h=o.format)==null?void 0:h.includes("int"),u=r?"int":"number",[a,s]=Kp[o.format];e._zod.onattach.push(g=>{const m=g._zod.bag;m.format=o.format,m.minimum=a,m.maximum=s,r&&(m.pattern=db)}),e._zod.check=g=>{const m=g.value;if(r){if(!Number.isInteger(m)){g.issues.push({expected:u,format:o.format,code:"invalid_type",continue:!1,input:m,inst:e});return}if(!Number.isSafeInteger(m)){m>0?g.issues.push({input:m,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:u,continue:!o.abort}):g.issues.push({input:m,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:u,continue:!o.abort});return}}m<a&&g.issues.push({origin:"number",input:m,code:"too_small",minimum:a,inclusive:!0,inst:e,continue:!o.abort}),m>s&&g.issues.push({origin:"number",input:m,code:"too_big",maximum:s,inst:e})}}),Mb=G("$ZodCheckBigIntFormat",(e,o)=>{Qn.init(e,o);const[r,u]=Ip[o.format];e._zod.onattach.push(a=>{const s=a._zod.bag;s.format=o.format,s.minimum=r,s.maximum=u}),e._zod.check=a=>{const s=a.value;s<r&&a.issues.push({origin:"bigint",input:s,code:"too_small",minimum:r,inclusive:!0,inst:e,continue:!o.abort}),s>u&&a.issues.push({origin:"bigint",input:s,code:"too_big",maximum:u,inst:e})}}),Ab=G("$ZodCheckMaxSize",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.size!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag.maximum??Number.POSITIVE_INFINITY;o.maximum<a&&(u._zod.bag.maximum=o.maximum)}),e._zod.check=u=>{const a=u.value;a.size<=o.maximum||u.issues.push({origin:ws(a),code:"too_big",maximum:o.maximum,input:a,inst:e,continue:!o.abort})}}),Db=G("$ZodCheckMinSize",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.size!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;o.minimum>a&&(u._zod.bag.minimum=o.minimum)}),e._zod.check=u=>{const a=u.value;a.size>=o.minimum||u.issues.push({origin:ws(a),code:"too_small",minimum:o.minimum,input:a,inst:e,continue:!o.abort})}}),Ob=G("$ZodCheckSizeEquals",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.size!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag;a.minimum=o.size,a.maximum=o.size,a.size=o.size}),e._zod.check=u=>{const a=u.value,s=a.size;if(s===o.size)return;const h=s>o.size;u.issues.push({origin:ws(a),...h?{code:"too_big",maximum:o.size}:{code:"too_small",minimum:o.size},inclusive:!0,exact:!0,input:u.value,inst:e,continue:!o.abort})}}),wb=G("$ZodCheckMaxLength",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.length!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag.maximum??Number.POSITIVE_INFINITY;o.maximum<a&&(u._zod.bag.maximum=o.maximum)}),e._zod.check=u=>{const a=u.value;if(a.length<=o.maximum)return;const h=Cs(a);u.issues.push({origin:h,code:"too_big",maximum:o.maximum,inclusive:!0,input:a,inst:e,continue:!o.abort})}}),Cb=G("$ZodCheckMinLength",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.length!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag.minimum??Number.NEGATIVE_INFINITY;o.minimum>a&&(u._zod.bag.minimum=o.minimum)}),e._zod.check=u=>{const a=u.value;if(a.length>=o.minimum)return;const h=Cs(a);u.issues.push({origin:h,code:"too_small",minimum:o.minimum,inclusive:!0,input:a,inst:e,continue:!o.abort})}}),Kb=G("$ZodCheckLengthEquals",(e,o)=>{var r;Qn.init(e,o),(r=e._zod.def).when??(r.when=u=>{const a=u.value;return!Ei(a)&&a.length!==void 0}),e._zod.onattach.push(u=>{const a=u._zod.bag;a.minimum=o.length,a.maximum=o.length,a.length=o.length}),e._zod.check=u=>{const a=u.value,s=a.length;if(s===o.length)return;const h=Cs(a),g=s>o.length;u.issues.push({origin:h,...g?{code:"too_big",maximum:o.length}:{code:"too_small",minimum:o.length},inclusive:!0,exact:!0,input:u.value,inst:e,continue:!o.abort})}}),lr=G("$ZodCheckStringFormat",(e,o)=>{var r,u;Qn.init(e,o),e._zod.onattach.push(a=>{const s=a._zod.bag;s.format=o.format,o.pattern&&(s.patterns??(s.patterns=new Set),s.patterns.add(o.pattern))}),o.pattern?(r=e._zod).check??(r.check=a=>{o.pattern.lastIndex=0,!o.pattern.test(a.value)&&a.issues.push({origin:"string",code:"invalid_format",format:o.format,input:a.value,...o.pattern?{pattern:o.pattern.toString()}:{},inst:e,continue:!o.abort})}):(u=e._zod).check??(u.check=()=>{})}),Ib=G("$ZodCheckRegex",(e,o)=>{lr.init(e,o),e._zod.check=r=>{o.pattern.lastIndex=0,!o.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:"regex",input:r.value,pattern:o.pattern.toString(),inst:e,continue:!o.abort})}}),Rb=G("$ZodCheckLowerCase",(e,o)=>{o.pattern??(o.pattern=vb),lr.init(e,o)}),Bb=G("$ZodCheckUpperCase",(e,o)=>{o.pattern??(o.pattern=kb),lr.init(e,o)}),Nb=G("$ZodCheckIncludes",(e,o)=>{Qn.init(e,o);const r=ci(o.includes),u=new RegExp(typeof o.position=="number"?`^.{${o.position}}${r}`:r);o.pattern=u,e._zod.onattach.push(a=>{const s=a._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(u)}),e._zod.check=a=>{a.value.includes(o.includes,o.position)||a.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:o.includes,input:a.value,inst:e,continue:!o.abort})}}),Hb=G("$ZodCheckStartsWith",(e,o)=>{Qn.init(e,o);const r=new RegExp(`^${ci(o.prefix)}.*`);o.pattern??(o.pattern=r),e._zod.onattach.push(u=>{const a=u._zod.bag;a.patterns??(a.patterns=new Set),a.patterns.add(r)}),e._zod.check=u=>{u.value.startsWith(o.prefix)||u.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:o.prefix,input:u.value,inst:e,continue:!o.abort})}}),Gb=G("$ZodCheckEndsWith",(e,o)=>{Qn.init(e,o);const r=new RegExp(`.*${ci(o.suffix)}$`);o.pattern??(o.pattern=r),e._zod.onattach.push(u=>{const a=u._zod.bag;a.patterns??(a.patterns=new Set),a.patterns.add(r)}),e._zod.check=u=>{u.value.endsWith(o.suffix)||u.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:o.suffix,input:u.value,inst:e,continue:!o.abort})}});function Pk(e,o,r){e.issues.length&&o.issues.push(...Qe(r,e.issues))}const Eb=G("$ZodCheckProperty",(e,o)=>{Qn.init(e,o),e._zod.check=r=>{const u=o.schema._zod.run({value:r.value[o.property],issues:[]},{});if(u instanceof Promise)return u.then(a=>Pk(a,r,o.property));Pk(u,r,o.property)}}),Pb=G("$ZodCheckMimeType",(e,o)=>{Qn.init(e,o);const r=new Set(o.mime);e._zod.onattach.push(u=>{u._zod.bag.mime=o.mime}),e._zod.check=u=>{r.has(u.value.type)||u.issues.push({code:"invalid_value",values:o.mime,input:u.value.type,inst:e,continue:!o.abort})}}),_b=G("$ZodCheckOverwrite",(e,o)=>{Qn.init(e,o),e._zod.check=r=>{r.value=o.tx(r.value)}});class Lb{constructor(o=[]){this.content=[],this.indent=0,this&&(this.args=o)}indented(o){this.indent+=1,o(this),this.indent-=1}write(o){if(typeof o=="function"){o(this,{execution:"sync"}),o(this,{execution:"async"});return}const u=o.split(`
`).filter(h=>h),a=Math.min(...u.map(h=>h.length-h.trimStart().length)),s=u.map(h=>h.slice(a)).map(h=>" ".repeat(this.indent*2)+h);for(const h of s)this.content.push(h)}compile(){const o=Function,r=this==null?void 0:this.args,a=[...((this==null?void 0:this.content)??[""]).map(s=>`  ${s}`)];return new o(...r,a.join(`
`))}}const zb={major:4,minor:0,patch:15},gn=G("$ZodType",(e,o)=>{var a;var r;e??(e={}),e._zod.def=o,e._zod.bag=e._zod.bag||{},e._zod.version=zb;const u=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&u.unshift(e);for(const s of u)for(const h of s._zod.onattach)h(e);if(u.length===0)(r=e._zod).deferred??(r.deferred=[]),(a=e._zod.deferred)==null||a.push(()=>{e._zod.run=e._zod.parse});else{const s=(h,g,m)=>{let f=Ko(h),v;for(const y of g){if(y._zod.def.when){if(!y._zod.def.when(h))continue}else if(f)continue;const M=h.issues.length,C=y._zod.check(h);if(C instanceof Promise&&(m==null?void 0:m.async)===!1)throw new Ro;if(v||C instanceof Promise)v=(v??Promise.resolve()).then(async()=>{await C,h.issues.length!==M&&(f||(f=Ko(h,M)))});else{if(h.issues.length===M)continue;f||(f=Ko(h,M))}}return v?v.then(()=>h):h};e._zod.run=(h,g)=>{const m=e._zod.parse(h,g);if(m instanceof Promise){if(g.async===!1)throw new Ro;return m.then(f=>s(f,u,g))}return s(m,u,g)}}e["~standard"]={validate:s=>{var h;try{const g=jp(e,s);return g.success?{value:g.data}:{issues:(h=g.error)==null?void 0:h.issues}}catch{return xp(e,s).then(m=>{var f;return m.success?{value:m.data}:{issues:(f=m.error)==null?void 0:f.issues}})}},vendor:"zod",version:1}}),cr=G("$ZodString",(e,o)=>{var r;gn.init(e,o),e._zod.pattern=[...((r=e==null?void 0:e._zod.bag)==null?void 0:r.patterns)??[]].pop()??cb(e._zod.bag),e._zod.parse=(u,a)=>{if(o.coerce)try{u.value=String(u.value)}catch{}return typeof u.value=="string"||u.issues.push({expected:"string",code:"invalid_type",input:u.value,inst:e}),u}}),Fn=G("$ZodStringFormat",(e,o)=>{lr.init(e,o),cr.init(e,o)}),jb=G("$ZodGUID",(e,o)=>{o.pattern??(o.pattern=Jp),Fn.init(e,o)}),xb=G("$ZodUUID",(e,o)=>{if(o.version){const u={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[o.version];if(u===void 0)throw new Error(`Invalid UUID version: "${o.version}"`);o.pattern??(o.pattern=No(u))}else o.pattern??(o.pattern=No());Fn.init(e,o)}),$b=G("$ZodEmail",(e,o)=>{o.pattern??(o.pattern=Xp),Fn.init(e,o)}),Fb=G("$ZodURL",(e,o)=>{Fn.init(e,o),e._zod.check=r=>{try{const u=r.value.trim(),a=new URL(u);o.hostname&&(o.hostname.lastIndex=0,o.hostname.test(a.hostname)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:yd.source,input:r.value,inst:e,continue:!o.abort})),o.protocol&&(o.protocol.lastIndex=0,o.protocol.test(a.protocol.endsWith(":")?a.protocol.slice(0,-1):a.protocol)||r.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:o.protocol.source,input:r.value,inst:e,continue:!o.abort})),o.normalize?r.value=a.href:r.value=u;return}catch{r.issues.push({code:"invalid_format",format:"url",input:r.value,inst:e,continue:!o.abort})}}}),Ub=G("$ZodEmoji",(e,o)=>{o.pattern??(o.pattern=qp()),Fn.init(e,o)}),Yb=G("$ZodNanoID",(e,o)=>{o.pattern??(o.pattern=Wp),Fn.init(e,o)}),Vb=G("$ZodCUID",(e,o)=>{o.pattern??(o.pattern=$p),Fn.init(e,o)}),Wb=G("$ZodCUID2",(e,o)=>{o.pattern??(o.pattern=Fp),Fn.init(e,o)}),Zb=G("$ZodULID",(e,o)=>{o.pattern??(o.pattern=Up),Fn.init(e,o)}),Jb=G("$ZodXID",(e,o)=>{o.pattern??(o.pattern=Yp),Fn.init(e,o)}),Xb=G("$ZodKSUID",(e,o)=>{o.pattern??(o.pattern=Vp),Fn.init(e,o)}),qb=G("$ZodISODateTime",(e,o)=>{o.pattern??(o.pattern=lb(o)),Fn.init(e,o)}),Qb=G("$ZodISODate",(e,o)=>{o.pattern??(o.pattern=rb),Fn.init(e,o)}),nT=G("$ZodISOTime",(e,o)=>{o.pattern??(o.pattern=sb(o)),Fn.init(e,o)}),eT=G("$ZodISODuration",(e,o)=>{o.pattern??(o.pattern=Zp),Fn.init(e,o)}),aT=G("$ZodIPv4",(e,o)=>{o.pattern??(o.pattern=Qp),Fn.init(e,o),e._zod.onattach.push(r=>{const u=r._zod.bag;u.format="ipv4"})}),iT=G("$ZodIPv6",(e,o)=>{o.pattern??(o.pattern=nb),Fn.init(e,o),e._zod.onattach.push(r=>{const u=r._zod.bag;u.format="ipv6"}),e._zod.check=r=>{try{new URL(`http://[${r.value}]`)}catch{r.issues.push({code:"invalid_format",format:"ipv6",input:r.value,inst:e,continue:!o.abort})}}}),oT=G("$ZodCIDRv4",(e,o)=>{o.pattern??(o.pattern=eb),Fn.init(e,o)}),tT=G("$ZodCIDRv6",(e,o)=>{o.pattern??(o.pattern=ab),Fn.init(e,o),e._zod.check=r=>{const[u,a]=r.value.split("/");try{if(!a)throw new Error;const s=Number(a);if(`${s}`!==a)throw new Error;if(s<0||s>128)throw new Error;new URL(`http://[${u}]`)}catch{r.issues.push({code:"invalid_format",format:"cidrv6",input:r.value,inst:e,continue:!o.abort})}}});function Td(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}const rT=G("$ZodBase64",(e,o)=>{o.pattern??(o.pattern=ib),Fn.init(e,o),e._zod.onattach.push(r=>{r._zod.bag.contentEncoding="base64"}),e._zod.check=r=>{Td(r.value)||r.issues.push({code:"invalid_format",format:"base64",input:r.value,inst:e,continue:!o.abort})}});function uT(e){if(!kd.test(e))return!1;const o=e.replace(/[-_]/g,u=>u==="-"?"+":"/"),r=o.padEnd(Math.ceil(o.length/4)*4,"=");return Td(r)}const sT=G("$ZodBase64URL",(e,o)=>{o.pattern??(o.pattern=kd),Fn.init(e,o),e._zod.onattach.push(r=>{r._zod.bag.contentEncoding="base64url"}),e._zod.check=r=>{uT(r.value)||r.issues.push({code:"invalid_format",format:"base64url",input:r.value,inst:e,continue:!o.abort})}}),lT=G("$ZodE164",(e,o)=>{o.pattern??(o.pattern=ob),Fn.init(e,o)});function cT(e,o=null){try{const r=e.split(".");if(r.length!==3)return!1;const[u]=r;if(!u)return!1;const a=JSON.parse(atob(u));return!("typ"in a&&(a==null?void 0:a.typ)!=="JWT"||!a.alg||o&&(!("alg"in a)||a.alg!==o))}catch{return!1}}const hT=G("$ZodJWT",(e,o)=>{Fn.init(e,o),e._zod.check=r=>{cT(r.value,o.alg)||r.issues.push({code:"invalid_format",format:"jwt",input:r.value,inst:e,continue:!o.abort})}}),dT=G("$ZodCustomStringFormat",(e,o)=>{Fn.init(e,o),e._zod.check=r=>{o.fn(r.value)||r.issues.push({code:"invalid_format",format:o.format,input:r.value,inst:e,continue:!o.abort})}}),Md=G("$ZodNumber",(e,o)=>{gn.init(e,o),e._zod.pattern=e._zod.bag.pattern??mb,e._zod.parse=(r,u)=>{if(o.coerce)try{r.value=Number(r.value)}catch{}const a=r.value;if(typeof a=="number"&&!Number.isNaN(a)&&Number.isFinite(a))return r;const s=typeof a=="number"?Number.isNaN(a)?"NaN":Number.isFinite(a)?void 0:"Infinity":void 0;return r.issues.push({expected:"number",code:"invalid_type",input:a,inst:e,...s?{received:s}:{}}),r}}),mT=G("$ZodNumber",(e,o)=>{Tb.init(e,o),Md.init(e,o)}),Ad=G("$ZodBoolean",(e,o)=>{gn.init(e,o),e._zod.pattern=fb,e._zod.parse=(r,u)=>{if(o.coerce)try{r.value=!!r.value}catch{}const a=r.value;return typeof a=="boolean"||r.issues.push({expected:"boolean",code:"invalid_type",input:a,inst:e}),r}}),Dd=G("$ZodBigInt",(e,o)=>{gn.init(e,o),e._zod.pattern=hb,e._zod.parse=(r,u)=>{if(o.coerce)try{r.value=BigInt(r.value)}catch{}return typeof r.value=="bigint"||r.issues.push({expected:"bigint",code:"invalid_type",input:r.value,inst:e}),r}}),fT=G("$ZodBigInt",(e,o)=>{Mb.init(e,o),Dd.init(e,o)}),gT=G("$ZodSymbol",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;return typeof a=="symbol"||r.issues.push({expected:"symbol",code:"invalid_type",input:a,inst:e}),r}}),ST=G("$ZodUndefined",(e,o)=>{gn.init(e,o),e._zod.pattern=Sb,e._zod.values=new Set([void 0]),e._zod.optin="optional",e._zod.optout="optional",e._zod.parse=(r,u)=>{const a=r.value;return typeof a>"u"||r.issues.push({expected:"undefined",code:"invalid_type",input:a,inst:e}),r}}),vT=G("$ZodNull",(e,o)=>{gn.init(e,o),e._zod.pattern=gb,e._zod.values=new Set([null]),e._zod.parse=(r,u)=>{const a=r.value;return a===null||r.issues.push({expected:"null",code:"invalid_type",input:a,inst:e}),r}}),kT=G("$ZodAny",(e,o)=>{gn.init(e,o),e._zod.parse=r=>r}),ss=G("$ZodUnknown",(e,o)=>{gn.init(e,o),e._zod.parse=r=>r}),yT=G("$ZodNever",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>(r.issues.push({expected:"never",code:"invalid_type",input:r.value,inst:e}),r)}),pT=G("$ZodVoid",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;return typeof a>"u"||r.issues.push({expected:"void",code:"invalid_type",input:a,inst:e}),r}}),bT=G("$ZodDate",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{if(o.coerce)try{r.value=new Date(r.value)}catch{}const a=r.value,s=a instanceof Date;return s&&!Number.isNaN(a.getTime())||r.issues.push({expected:"date",code:"invalid_type",input:a,...s?{received:"Invalid Date"}:{},inst:e}),r}});function _k(e,o,r){e.issues.length&&o.issues.push(...Qe(r,e.issues)),o.value[r]=e.value}const Od=G("$ZodArray",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;if(!Array.isArray(a))return r.issues.push({expected:"array",code:"invalid_type",input:a,inst:e}),r;r.value=Array(a.length);const s=[];for(let h=0;h<a.length;h++){const g=a[h],m=o.element._zod.run({value:g,issues:[]},u);m instanceof Promise?s.push(m.then(f=>_k(f,r,h))):_k(m,r,h)}return s.length?Promise.all(s).then(()=>r):r}});function Bu(e,o,r,u){e.issues.length&&o.issues.push(...Qe(r,e.issues)),e.value===void 0?r in u&&(o.value[r]=void 0):o.value[r]=e.value}const TT=G("$ZodObject",(e,o)=>{gn.init(e,o);const r=As(()=>{const y=Object.keys(o.shape);for(const C of y)if(!(o.shape[C]instanceof gn))throw new Error(`Invalid element at key "${C}": expected a Zod schema`);const M=Cp(o.shape);return{shape:o.shape,keys:y,keySet:new Set(y),numKeys:y.length,optionalKeys:new Set(M)}});In(e._zod,"propValues",()=>{const y=o.shape,M={};for(const C in y){const D=y[C]._zod;if(D.values){M[C]??(M[C]=new Set);for(const R of D.values)M[C].add(R)}}return M});const u=y=>{const M=new Lb(["shape","payload","ctx"]),C=r.value,D=w=>{const A=Bh(w);return`shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`};M.write("const input = payload.value;");const R=Object.create(null);let b=0;for(const w of C.keys)R[w]=`key_${b++}`;M.write("const newResult = {}");for(const w of C.keys){const A=R[w],P=Bh(w);M.write(`const ${A} = ${D(w)};`),M.write(`
        if (${A}.issues.length) {
          payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        
        if (${A}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${A}.value;
        }
      `)}M.write("payload.value = newResult;"),M.write("return payload;");const p=M.compile();return(w,A)=>p(y,w,A)};let a;const s=Xt,h=!ts.jitless,m=h&&Op.value,f=o.catchall;let v;e._zod.parse=(y,M)=>{v??(v=r.value);const C=y.value;if(!s(C))return y.issues.push({expected:"object",code:"invalid_type",input:C,inst:e}),y;const D=[];if(h&&m&&(M==null?void 0:M.async)===!1&&M.jitless!==!0)a||(a=u(o.shape)),y=a(y,M);else{y.value={};const A=v.shape;for(const P of v.keys){const U=A[P]._zod.run({value:C[P],issues:[]},M);U instanceof Promise?D.push(U.then(F=>Bu(F,y,P,C))):Bu(U,y,P,C)}}if(!f)return D.length?Promise.all(D).then(()=>y):y;const R=[],b=v.keySet,p=f._zod,w=p.def.type;for(const A of Object.keys(C)){if(b.has(A))continue;if(w==="never"){R.push(A);continue}const P=p.run({value:C[A],issues:[]},M);P instanceof Promise?D.push(P.then(I=>Bu(I,y,A,C))):Bu(P,y,A,C)}return R.length&&y.issues.push({code:"unrecognized_keys",keys:R,input:C,inst:e}),D.length?Promise.all(D).then(()=>y):y}});function Lk(e,o,r,u){for(const s of e)if(s.issues.length===0)return o.value=s.value,o;const a=e.filter(s=>!Ko(s));return a.length===1?(o.value=a[0].value,a[0]):(o.issues.push({code:"invalid_union",input:o.value,inst:r,errors:e.map(s=>s.issues.map(h=>ea(h,u,Te())))}),o)}const wd=G("$ZodUnion",(e,o)=>{gn.init(e,o),In(e._zod,"optin",()=>o.options.some(a=>a._zod.optin==="optional")?"optional":void 0),In(e._zod,"optout",()=>o.options.some(a=>a._zod.optout==="optional")?"optional":void 0),In(e._zod,"values",()=>{if(o.options.every(a=>a._zod.values))return new Set(o.options.flatMap(a=>Array.from(a._zod.values)))}),In(e._zod,"pattern",()=>{if(o.options.every(a=>a._zod.pattern)){const a=o.options.map(s=>s._zod.pattern);return new RegExp(`^(${a.map(s=>Ds(s.source)).join("|")})$`)}});const r=o.options.length===1,u=o.options[0]._zod.run;e._zod.parse=(a,s)=>{if(r)return u(a,s);let h=!1;const g=[];for(const m of o.options){const f=m._zod.run({value:a.value,issues:[]},s);if(f instanceof Promise)g.push(f),h=!0;else{if(f.issues.length===0)return f;g.push(f)}}return h?Promise.all(g).then(m=>Lk(m,a,e,s)):Lk(g,a,e,s)}}),MT=G("$ZodDiscriminatedUnion",(e,o)=>{wd.init(e,o);const r=e._zod.parse;In(e._zod,"propValues",()=>{const a={};for(const s of o.options){const h=s._zod.propValues;if(!h||Object.keys(h).length===0)throw new Error(`Invalid discriminated union option at index "${o.options.indexOf(s)}"`);for(const[g,m]of Object.entries(h)){a[g]||(a[g]=new Set);for(const f of m)a[g].add(f)}}return a});const u=As(()=>{var h;const a=o.options,s=new Map;for(const g of a){const m=(h=g._zod.propValues)==null?void 0:h[o.discriminator];if(!m||m.size===0)throw new Error(`Invalid discriminated union option at index "${o.options.indexOf(g)}"`);for(const f of m){if(s.has(f))throw new Error(`Duplicate discriminator value "${String(f)}"`);s.set(f,g)}}return s});e._zod.parse=(a,s)=>{const h=a.value;if(!Xt(h))return a.issues.push({code:"invalid_type",expected:"object",input:h,inst:e}),a;const g=u.value.get(h==null?void 0:h[o.discriminator]);return g?g._zod.run(a,s):o.unionFallback?r(a,s):(a.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:o.discriminator,input:h,path:[o.discriminator],inst:e}),a)}}),AT=G("$ZodIntersection",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value,s=o.left._zod.run({value:a,issues:[]},u),h=o.right._zod.run({value:a,issues:[]},u);return s instanceof Promise||h instanceof Promise?Promise.all([s,h]).then(([m,f])=>zk(r,m,f)):zk(r,s,h)}});function Gh(e,o){if(e===o)return{valid:!0,data:e};if(e instanceof Date&&o instanceof Date&&+e==+o)return{valid:!0,data:e};if(qt(e)&&qt(o)){const r=Object.keys(o),u=Object.keys(e).filter(s=>r.indexOf(s)!==-1),a={...e,...o};for(const s of u){const h=Gh(e[s],o[s]);if(!h.valid)return{valid:!1,mergeErrorPath:[s,...h.mergeErrorPath]};a[s]=h.data}return{valid:!0,data:a}}if(Array.isArray(e)&&Array.isArray(o)){if(e.length!==o.length)return{valid:!1,mergeErrorPath:[]};const r=[];for(let u=0;u<e.length;u++){const a=e[u],s=o[u],h=Gh(a,s);if(!h.valid)return{valid:!1,mergeErrorPath:[u,...h.mergeErrorPath]};r.push(h.data)}return{valid:!0,data:r}}return{valid:!1,mergeErrorPath:[]}}function zk(e,o,r){if(o.issues.length&&e.issues.push(...o.issues),r.issues.length&&e.issues.push(...r.issues),Ko(e))return e;const u=Gh(o.value,r.value);if(!u.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`);return e.value=u.data,e}const Ks=G("$ZodTuple",(e,o)=>{gn.init(e,o);const r=o.items,u=r.length-[...r].reverse().findIndex(a=>a._zod.optin!=="optional");e._zod.parse=(a,s)=>{const h=a.value;if(!Array.isArray(h))return a.issues.push({input:h,inst:e,expected:"tuple",code:"invalid_type"}),a;a.value=[];const g=[];if(!o.rest){const f=h.length>r.length,v=h.length<u-1;if(f||v)return a.issues.push({...f?{code:"too_big",maximum:r.length}:{code:"too_small",minimum:r.length},input:h,inst:e,origin:"array"}),a}let m=-1;for(const f of r){if(m++,m>=h.length&&m>=u)continue;const v=f._zod.run({value:h[m],issues:[]},s);v instanceof Promise?g.push(v.then(y=>Nu(y,a,m))):Nu(v,a,m)}if(o.rest){const f=h.slice(r.length);for(const v of f){m++;const y=o.rest._zod.run({value:v,issues:[]},s);y instanceof Promise?g.push(y.then(M=>Nu(M,a,m))):Nu(y,a,m)}}return g.length?Promise.all(g).then(()=>a):a}});function Nu(e,o,r){e.issues.length&&o.issues.push(...Qe(r,e.issues)),o.value[r]=e.value}const DT=G("$ZodRecord",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;if(!qt(a))return r.issues.push({expected:"record",code:"invalid_type",input:a,inst:e}),r;const s=[];if(o.keyType._zod.values){const h=o.keyType._zod.values;r.value={};for(const m of h)if(typeof m=="string"||typeof m=="number"||typeof m=="symbol"){const f=o.valueType._zod.run({value:a[m],issues:[]},u);f instanceof Promise?s.push(f.then(v=>{v.issues.length&&r.issues.push(...Qe(m,v.issues)),r.value[m]=v.value})):(f.issues.length&&r.issues.push(...Qe(m,f.issues)),r.value[m]=f.value)}let g;for(const m in a)h.has(m)||(g=g??[],g.push(m));g&&g.length>0&&r.issues.push({code:"unrecognized_keys",input:a,inst:e,keys:g})}else{r.value={};for(const h of Reflect.ownKeys(a)){if(h==="__proto__")continue;const g=o.keyType._zod.run({value:h,issues:[]},u);if(g instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(g.issues.length){r.issues.push({code:"invalid_key",origin:"record",issues:g.issues.map(f=>ea(f,u,Te())),input:h,path:[h],inst:e}),r.value[g.value]=g.value;continue}const m=o.valueType._zod.run({value:a[h],issues:[]},u);m instanceof Promise?s.push(m.then(f=>{f.issues.length&&r.issues.push(...Qe(h,f.issues)),r.value[g.value]=f.value})):(m.issues.length&&r.issues.push(...Qe(h,m.issues)),r.value[g.value]=m.value)}}return s.length?Promise.all(s).then(()=>r):r}}),OT=G("$ZodMap",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;if(!(a instanceof Map))return r.issues.push({expected:"map",code:"invalid_type",input:a,inst:e}),r;const s=[];r.value=new Map;for(const[h,g]of a){const m=o.keyType._zod.run({value:h,issues:[]},u),f=o.valueType._zod.run({value:g,issues:[]},u);m instanceof Promise||f instanceof Promise?s.push(Promise.all([m,f]).then(([v,y])=>{jk(v,y,r,h,a,e,u)})):jk(m,f,r,h,a,e,u)}return s.length?Promise.all(s).then(()=>r):r}});function jk(e,o,r,u,a,s,h){e.issues.length&&(us.has(typeof u)?r.issues.push(...Qe(u,e.issues)):r.issues.push({code:"invalid_key",origin:"map",input:a,inst:s,issues:e.issues.map(g=>ea(g,h,Te()))})),o.issues.length&&(us.has(typeof u)?r.issues.push(...Qe(u,o.issues)):r.issues.push({origin:"map",code:"invalid_element",input:a,inst:s,key:u,issues:o.issues.map(g=>ea(g,h,Te()))})),r.value.set(e.value,o.value)}const wT=G("$ZodSet",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;if(!(a instanceof Set))return r.issues.push({input:a,inst:e,expected:"set",code:"invalid_type"}),r;const s=[];r.value=new Set;for(const h of a){const g=o.valueType._zod.run({value:h,issues:[]},u);g instanceof Promise?s.push(g.then(m=>xk(m,r))):xk(g,r)}return s.length?Promise.all(s).then(()=>r):r}});function xk(e,o){e.issues.length&&o.issues.push(...e.issues),o.value.add(e.value)}const CT=G("$ZodEnum",(e,o)=>{gn.init(e,o);const r=ld(o.entries),u=new Set(r);e._zod.values=u,e._zod.pattern=new RegExp(`^(${r.filter(a=>us.has(typeof a)).map(a=>typeof a=="string"?ci(a):a.toString()).join("|")})$`),e._zod.parse=(a,s)=>{const h=a.value;return u.has(h)||a.issues.push({code:"invalid_value",values:r,input:h,inst:e}),a}}),KT=G("$ZodLiteral",(e,o)=>{if(gn.init(e,o),o.values.length===0)throw new Error("Cannot create literal schema with no valid values");e._zod.values=new Set(o.values),e._zod.pattern=new RegExp(`^(${o.values.map(r=>typeof r=="string"?ci(r):r?ci(r.toString()):String(r)).join("|")})$`),e._zod.parse=(r,u)=>{const a=r.value;return e._zod.values.has(a)||r.issues.push({code:"invalid_value",values:o.values,input:a,inst:e}),r}}),IT=G("$ZodFile",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=r.value;return a instanceof File||r.issues.push({expected:"file",code:"invalid_type",input:a,inst:e}),r}}),Cd=G("$ZodTransform",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=o.transform(r.value,r);if(u.async)return(a instanceof Promise?a:Promise.resolve(a)).then(h=>(r.value=h,r));if(a instanceof Promise)throw new Ro;return r.value=a,r}});function $k(e,o){return e.issues.length&&o===void 0?{issues:[],value:void 0}:e}const RT=G("$ZodOptional",(e,o)=>{gn.init(e,o),e._zod.optin="optional",e._zod.optout="optional",In(e._zod,"values",()=>o.innerType._zod.values?new Set([...o.innerType._zod.values,void 0]):void 0),In(e._zod,"pattern",()=>{const r=o.innerType._zod.pattern;return r?new RegExp(`^(${Ds(r.source)})?$`):void 0}),e._zod.parse=(r,u)=>{if(o.innerType._zod.optin==="optional"){const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(s=>$k(s,r.value)):$k(a,r.value)}return r.value===void 0?r:o.innerType._zod.run(r,u)}}),BT=G("$ZodNullable",(e,o)=>{gn.init(e,o),In(e._zod,"optin",()=>o.innerType._zod.optin),In(e._zod,"optout",()=>o.innerType._zod.optout),In(e._zod,"pattern",()=>{const r=o.innerType._zod.pattern;return r?new RegExp(`^(${Ds(r.source)}|null)$`):void 0}),In(e._zod,"values",()=>o.innerType._zod.values?new Set([...o.innerType._zod.values,null]):void 0),e._zod.parse=(r,u)=>r.value===null?r:o.innerType._zod.run(r,u)}),NT=G("$ZodDefault",(e,o)=>{gn.init(e,o),e._zod.optin="optional",In(e._zod,"values",()=>o.innerType._zod.values),e._zod.parse=(r,u)=>{if(r.value===void 0)return r.value=o.defaultValue,r;const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(s=>Fk(s,o)):Fk(a,o)}});function Fk(e,o){return e.value===void 0&&(e.value=o.defaultValue),e}const HT=G("$ZodPrefault",(e,o)=>{gn.init(e,o),e._zod.optin="optional",In(e._zod,"values",()=>o.innerType._zod.values),e._zod.parse=(r,u)=>(r.value===void 0&&(r.value=o.defaultValue),o.innerType._zod.run(r,u))}),GT=G("$ZodNonOptional",(e,o)=>{gn.init(e,o),In(e._zod,"values",()=>{const r=o.innerType._zod.values;return r?new Set([...r].filter(u=>u!==void 0)):void 0}),e._zod.parse=(r,u)=>{const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(s=>Uk(s,e)):Uk(a,e)}});function Uk(e,o){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:o}),e}const ET=G("$ZodSuccess",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>{const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(s=>(r.value=s.issues.length===0,r)):(r.value=a.issues.length===0,r)}}),PT=G("$ZodCatch",(e,o)=>{gn.init(e,o),In(e._zod,"optin",()=>o.innerType._zod.optin),In(e._zod,"optout",()=>o.innerType._zod.optout),In(e._zod,"values",()=>o.innerType._zod.values),e._zod.parse=(r,u)=>{const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(s=>(r.value=s.value,s.issues.length&&(r.value=o.catchValue({...r,error:{issues:s.issues.map(h=>ea(h,u,Te()))},input:r.value}),r.issues=[]),r)):(r.value=a.value,a.issues.length&&(r.value=o.catchValue({...r,error:{issues:a.issues.map(s=>ea(s,u,Te()))},input:r.value}),r.issues=[]),r)}}),_T=G("$ZodNaN",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>((typeof r.value!="number"||!Number.isNaN(r.value))&&r.issues.push({input:r.value,inst:e,expected:"nan",code:"invalid_type"}),r)}),Kd=G("$ZodPipe",(e,o)=>{gn.init(e,o),In(e._zod,"values",()=>o.in._zod.values),In(e._zod,"optin",()=>o.in._zod.optin),In(e._zod,"optout",()=>o.out._zod.optout),In(e._zod,"propValues",()=>o.in._zod.propValues),e._zod.parse=(r,u)=>{const a=o.in._zod.run(r,u);return a instanceof Promise?a.then(s=>Yk(s,o,u)):Yk(a,o,u)}});function Yk(e,o,r){return e.issues.length?e:o.out._zod.run({value:e.value,issues:e.issues},r)}const LT=G("$ZodReadonly",(e,o)=>{gn.init(e,o),In(e._zod,"propValues",()=>o.innerType._zod.propValues),In(e._zod,"values",()=>o.innerType._zod.values),In(e._zod,"optin",()=>o.innerType._zod.optin),In(e._zod,"optout",()=>o.innerType._zod.optout),e._zod.parse=(r,u)=>{const a=o.innerType._zod.run(r,u);return a instanceof Promise?a.then(Vk):Vk(a)}});function Vk(e){return e.value=Object.freeze(e.value),e}const zT=G("$ZodTemplateLiteral",(e,o)=>{gn.init(e,o);const r=[];for(const u of o.parts)if(u instanceof gn){if(!u._zod.pattern)throw new Error(`Invalid template literal part, no pattern found: ${[...u._zod.traits].shift()}`);const a=u._zod.pattern instanceof RegExp?u._zod.pattern.source:u._zod.pattern;if(!a)throw new Error(`Invalid template literal part: ${u._zod.traits}`);const s=a.startsWith("^")?1:0,h=a.endsWith("$")?a.length-1:a.length;r.push(a.slice(s,h))}else if(u===null||wp.has(typeof u))r.push(ci(`${u}`));else throw new Error(`Invalid template literal part: ${u}`);e._zod.pattern=new RegExp(`^${r.join("")}$`),e._zod.parse=(u,a)=>typeof u.value!="string"?(u.issues.push({input:u.value,inst:e,expected:"template_literal",code:"invalid_type"}),u):(e._zod.pattern.lastIndex=0,e._zod.pattern.test(u.value)||u.issues.push({input:u.value,inst:e,code:"invalid_format",format:o.format??"template_literal",pattern:e._zod.pattern.source}),u)}),jT=G("$ZodPromise",(e,o)=>{gn.init(e,o),e._zod.parse=(r,u)=>Promise.resolve(r.value).then(a=>o.innerType._zod.run({value:a,issues:[]},u))}),xT=G("$ZodLazy",(e,o)=>{gn.init(e,o),In(e._zod,"innerType",()=>o.getter()),In(e._zod,"pattern",()=>e._zod.innerType._zod.pattern),In(e._zod,"propValues",()=>e._zod.innerType._zod.propValues),In(e._zod,"optin",()=>e._zod.innerType._zod.optin??void 0),In(e._zod,"optout",()=>e._zod.innerType._zod.optout??void 0),e._zod.parse=(r,u)=>e._zod.innerType._zod.run(r,u)}),$T=G("$ZodCustom",(e,o)=>{Qn.init(e,o),gn.init(e,o),e._zod.parse=(r,u)=>r,e._zod.check=r=>{const u=r.value,a=o.fn(u);if(a instanceof Promise)return a.then(s=>Wk(s,r,u,e));Wk(a,r,u,e)}});function Wk(e,o,r,u){if(!e){const a={code:"custom",input:r,inst:u,path:[...u._zod.def.path??[]],continue:!u._zod.def.abort};u._zod.def.params&&(a.params=u._zod.def.params),o.issues.push(Bo(a))}}const dB=()=>{const e={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"};return a=>{switch(a.code){case"invalid_type":return`مدخلات غير مقبولة: يفترض إدخال ${a.expected}، ولكن تم إدخال ${r(a.input)}`;case"invalid_value":return a.values.length===1?`مدخلات غير مقبولة: يفترض إدخال ${Sn(a.values[0])}`:`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?` أكبر من اللازم: يفترض أن تكون ${a.origin??"القيمة"} ${s} ${a.maximum.toString()} ${h.unit??"عنصر"}`:`أكبر من اللازم: يفترض أن تكون ${a.origin??"القيمة"} ${s} ${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`أصغر من اللازم: يفترض لـ ${a.origin} أن يكون ${s} ${a.minimum.toString()} ${h.unit}`:`أصغر من اللازم: يفترض لـ ${a.origin} أن يكون ${s} ${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`نَص غير مقبول: يجب أن يبدأ بـ "${a.prefix}"`:s.format==="ends_with"?`نَص غير مقبول: يجب أن ينتهي بـ "${s.suffix}"`:s.format==="includes"?`نَص غير مقبول: يجب أن يتضمَّن "${s.includes}"`:s.format==="regex"?`نَص غير مقبول: يجب أن يطابق النمط ${s.pattern}`:`${u[s.format]??a.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${a.divisor}`;case"unrecognized_keys":return`معرف${a.keys.length>1?"ات":""} غريب${a.keys.length>1?"ة":""}: ${q(a.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${a.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${a.origin}`;default:return"مدخل غير مقبول"}}};function mB(){return{localeError:dB()}}const fB=()=>{const e={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`Yanlış dəyər: gözlənilən ${a.expected}, daxil olan ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Yanlış dəyər: gözlənilən ${Sn(a.values[0])}`:`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Çox böyük: gözlənilən ${a.origin??"dəyər"} ${s}${a.maximum.toString()} ${h.unit??"element"}`:`Çox böyük: gözlənilən ${a.origin??"dəyər"} ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Çox kiçik: gözlənilən ${a.origin} ${s}${a.minimum.toString()} ${h.unit}`:`Çox kiçik: gözlənilən ${a.origin} ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Yanlış mətn: "${s.prefix}" ilə başlamalıdır`:s.format==="ends_with"?`Yanlış mətn: "${s.suffix}" ilə bitməlidir`:s.format==="includes"?`Yanlış mətn: "${s.includes}" daxil olmalıdır`:s.format==="regex"?`Yanlış mətn: ${s.pattern} şablonuna uyğun olmalıdır`:`Yanlış ${u[s.format]??a.format}`}case"not_multiple_of":return`Yanlış ədəd: ${a.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${a.keys.length>1?"lar":""}: ${q(a.keys,", ")}`;case"invalid_key":return`${a.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${a.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};function gB(){return{localeError:fB()}}function Zk(e,o,r,u){const a=Math.abs(e),s=a%10,h=a%100;return h>=11&&h<=19?u:s===1?o:s>=2&&s<=4?r:u}const SB=()=>{const e={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"лік";case"object":{if(Array.isArray(a))return"масіў";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"};return a=>{switch(a.code){case"invalid_type":return`Няправільны ўвод: чакаўся ${a.expected}, атрымана ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Няправільны ўвод: чакалася ${Sn(a.values[0])}`:`Няправільны варыянт: чакаўся адзін з ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);if(h){const g=Number(a.maximum),m=Zk(g,h.unit.one,h.unit.few,h.unit.many);return`Занадта вялікі: чакалася, што ${a.origin??"значэнне"} павінна ${h.verb} ${s}${a.maximum.toString()} ${m}`}return`Занадта вялікі: чакалася, што ${a.origin??"значэнне"} павінна быць ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);if(h){const g=Number(a.minimum),m=Zk(g,h.unit.one,h.unit.few,h.unit.many);return`Занадта малы: чакалася, што ${a.origin} павінна ${h.verb} ${s}${a.minimum.toString()} ${m}`}return`Занадта малы: чакалася, што ${a.origin} павінна быць ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Няправільны радок: павінен пачынацца з "${s.prefix}"`:s.format==="ends_with"?`Няправільны радок: павінен заканчвацца на "${s.suffix}"`:s.format==="includes"?`Няправільны радок: павінен змяшчаць "${s.includes}"`:s.format==="regex"?`Няправільны радок: павінен адпавядаць шаблону ${s.pattern}`:`Няправільны ${u[s.format]??a.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${a.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${a.keys.length>1?"ключы":"ключ"}: ${q(a.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${a.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${a.origin}`;default:return"Няправільны ўвод"}}};function vB(){return{localeError:SB()}}const kB=()=>{const e={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return a=>{switch(a.code){case"invalid_type":return`Tipus invàlid: s'esperava ${a.expected}, s'ha rebut ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Valor invàlid: s'esperava ${Sn(a.values[0])}`:`Opció invàlida: s'esperava una de ${q(a.values," o ")}`;case"too_big":{const s=a.inclusive?"com a màxim":"menys de",h=o(a.origin);return h?`Massa gran: s'esperava que ${a.origin??"el valor"} contingués ${s} ${a.maximum.toString()} ${h.unit??"elements"}`:`Massa gran: s'esperava que ${a.origin??"el valor"} fos ${s} ${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?"com a mínim":"més de",h=o(a.origin);return h?`Massa petit: s'esperava que ${a.origin} contingués ${s} ${a.minimum.toString()} ${h.unit}`:`Massa petit: s'esperava que ${a.origin} fos ${s} ${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Format invàlid: ha de començar amb "${s.prefix}"`:s.format==="ends_with"?`Format invàlid: ha d'acabar amb "${s.suffix}"`:s.format==="includes"?`Format invàlid: ha d'incloure "${s.includes}"`:s.format==="regex"?`Format invàlid: ha de coincidir amb el patró ${s.pattern}`:`Format invàlid per a ${u[s.format]??a.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${a.divisor}`;case"unrecognized_keys":return`Clau${a.keys.length>1?"s":""} no reconeguda${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${a.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${a.origin}`;default:return"Entrada invàlida"}}};function yB(){return{localeError:kB()}}const pB=()=>{const e={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"číslo";case"string":return"řetězec";case"boolean":return"boolean";case"bigint":return"bigint";case"function":return"funkce";case"symbol":return"symbol";case"undefined":return"undefined";case"object":{if(Array.isArray(a))return"pole";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"};return a=>{switch(a.code){case"invalid_type":return`Neplatný vstup: očekáváno ${a.expected}, obdrženo ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Neplatný vstup: očekáváno ${Sn(a.values[0])}`:`Neplatná možnost: očekávána jedna z hodnot ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Hodnota je příliš velká: ${a.origin??"hodnota"} musí mít ${s}${a.maximum.toString()} ${h.unit??"prvků"}`:`Hodnota je příliš velká: ${a.origin??"hodnota"} musí být ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Hodnota je příliš malá: ${a.origin??"hodnota"} musí mít ${s}${a.minimum.toString()} ${h.unit??"prvků"}`:`Hodnota je příliš malá: ${a.origin??"hodnota"} musí být ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Neplatný řetězec: musí začínat na "${s.prefix}"`:s.format==="ends_with"?`Neplatný řetězec: musí končit na "${s.suffix}"`:s.format==="includes"?`Neplatný řetězec: musí obsahovat "${s.includes}"`:s.format==="regex"?`Neplatný řetězec: musí odpovídat vzoru ${s.pattern}`:`Neplatný formát ${u[s.format]??a.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${a.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${q(a.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${a.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${a.origin}`;default:return"Neplatný vstup"}}};function bB(){return{localeError:pB()}}const TB=()=>{const e={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}},o={string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};function r(h){return e[h]??null}function u(h){return o[h]??h}const a=h=>{const g=typeof h;switch(g){case"number":return Number.isNaN(h)?"NaN":"tal";case"object":return Array.isArray(h)?"liste":h===null?"null":Object.getPrototypeOf(h)!==Object.prototype&&h.constructor?h.constructor.name:"objekt"}return g},s={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return h=>{switch(h.code){case"invalid_type":return`Ugyldigt input: forventede ${u(h.expected)}, fik ${u(a(h.input))}`;case"invalid_value":return h.values.length===1?`Ugyldig værdi: forventede ${Sn(h.values[0])}`:`Ugyldigt valg: forventede en af følgende ${q(h.values,"|")}`;case"too_big":{const g=h.inclusive?"<=":"<",m=r(h.origin),f=u(h.origin);return m?`For stor: forventede ${f??"value"} ${m.verb} ${g} ${h.maximum.toString()} ${m.unit??"elementer"}`:`For stor: forventede ${f??"value"} havde ${g} ${h.maximum.toString()}`}case"too_small":{const g=h.inclusive?">=":">",m=r(h.origin),f=u(h.origin);return m?`For lille: forventede ${f} ${m.verb} ${g} ${h.minimum.toString()} ${m.unit}`:`For lille: forventede ${f} havde ${g} ${h.minimum.toString()}`}case"invalid_format":{const g=h;return g.format==="starts_with"?`Ugyldig streng: skal starte med "${g.prefix}"`:g.format==="ends_with"?`Ugyldig streng: skal ende med "${g.suffix}"`:g.format==="includes"?`Ugyldig streng: skal indeholde "${g.includes}"`:g.format==="regex"?`Ugyldig streng: skal matche mønsteret ${g.pattern}`:`Ugyldig ${s[g.format]??h.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${h.divisor}`;case"unrecognized_keys":return`${h.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${q(h.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${h.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${h.origin}`;default:return"Ugyldigt input"}}};function MB(){return{localeError:TB()}}const AB=()=>{const e={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"Zahl";case"object":{if(Array.isArray(a))return"Array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"};return a=>{switch(a.code){case"invalid_type":return`Ungültige Eingabe: erwartet ${a.expected}, erhalten ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Ungültige Eingabe: erwartet ${Sn(a.values[0])}`:`Ungültige Option: erwartet eine von ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Zu groß: erwartet, dass ${a.origin??"Wert"} ${s}${a.maximum.toString()} ${h.unit??"Elemente"} hat`:`Zu groß: erwartet, dass ${a.origin??"Wert"} ${s}${a.maximum.toString()} ist`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Zu klein: erwartet, dass ${a.origin} ${s}${a.minimum.toString()} ${h.unit} hat`:`Zu klein: erwartet, dass ${a.origin} ${s}${a.minimum.toString()} ist`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Ungültiger String: muss mit "${s.prefix}" beginnen`:s.format==="ends_with"?`Ungültiger String: muss mit "${s.suffix}" enden`:s.format==="includes"?`Ungültiger String: muss "${s.includes}" enthalten`:s.format==="regex"?`Ungültiger String: muss dem Muster ${s.pattern} entsprechen`:`Ungültig: ${u[s.format]??a.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${a.divisor} sein`;case"unrecognized_keys":return`${a.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${q(a.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${a.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${a.origin}`;default:return"Ungültige Eingabe"}}};function DB(){return{localeError:AB()}}const OB=e=>{const o=typeof e;switch(o){case"number":return Number.isNaN(e)?"NaN":"number";case"object":{if(Array.isArray(e))return"array";if(e===null)return"null";if(Object.getPrototypeOf(e)!==Object.prototype&&e.constructor)return e.constructor.name}}return o},wB=()=>{const e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function o(u){return e[u]??null}const r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return u=>{switch(u.code){case"invalid_type":return`Invalid input: expected ${u.expected}, received ${OB(u.input)}`;case"invalid_value":return u.values.length===1?`Invalid input: expected ${Sn(u.values[0])}`:`Invalid option: expected one of ${q(u.values,"|")}`;case"too_big":{const a=u.inclusive?"<=":"<",s=o(u.origin);return s?`Too big: expected ${u.origin??"value"} to have ${a}${u.maximum.toString()} ${s.unit??"elements"}`:`Too big: expected ${u.origin??"value"} to be ${a}${u.maximum.toString()}`}case"too_small":{const a=u.inclusive?">=":">",s=o(u.origin);return s?`Too small: expected ${u.origin} to have ${a}${u.minimum.toString()} ${s.unit}`:`Too small: expected ${u.origin} to be ${a}${u.minimum.toString()}`}case"invalid_format":{const a=u;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${r[a.format]??u.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${u.divisor}`;case"unrecognized_keys":return`Unrecognized key${u.keys.length>1?"s":""}: ${q(u.keys,", ")}`;case"invalid_key":return`Invalid key in ${u.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${u.origin}`;default:return"Invalid input"}}};function FT(){return{localeError:wB()}}const CB=e=>{const o=typeof e;switch(o){case"number":return Number.isNaN(e)?"NaN":"nombro";case"object":{if(Array.isArray(e))return"tabelo";if(e===null)return"senvalora";if(Object.getPrototypeOf(e)!==Object.prototype&&e.constructor)return e.constructor.name}}return o},KB=()=>{const e={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function o(u){return e[u]??null}const r={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"};return u=>{switch(u.code){case"invalid_type":return`Nevalida enigo: atendiĝis ${u.expected}, riceviĝis ${CB(u.input)}`;case"invalid_value":return u.values.length===1?`Nevalida enigo: atendiĝis ${Sn(u.values[0])}`:`Nevalida opcio: atendiĝis unu el ${q(u.values,"|")}`;case"too_big":{const a=u.inclusive?"<=":"<",s=o(u.origin);return s?`Tro granda: atendiĝis ke ${u.origin??"valoro"} havu ${a}${u.maximum.toString()} ${s.unit??"elementojn"}`:`Tro granda: atendiĝis ke ${u.origin??"valoro"} havu ${a}${u.maximum.toString()}`}case"too_small":{const a=u.inclusive?">=":">",s=o(u.origin);return s?`Tro malgranda: atendiĝis ke ${u.origin} havu ${a}${u.minimum.toString()} ${s.unit}`:`Tro malgranda: atendiĝis ke ${u.origin} estu ${a}${u.minimum.toString()}`}case"invalid_format":{const a=u;return a.format==="starts_with"?`Nevalida karaktraro: devas komenciĝi per "${a.prefix}"`:a.format==="ends_with"?`Nevalida karaktraro: devas finiĝi per "${a.suffix}"`:a.format==="includes"?`Nevalida karaktraro: devas inkluzivi "${a.includes}"`:a.format==="regex"?`Nevalida karaktraro: devas kongrui kun la modelo ${a.pattern}`:`Nevalida ${r[a.format]??u.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${u.divisor}`;case"unrecognized_keys":return`Nekonata${u.keys.length>1?"j":""} ŝlosilo${u.keys.length>1?"j":""}: ${q(u.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${u.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${u.origin}`;default:return"Nevalida enigo"}}};function IB(){return{localeError:KB()}}const RB=()=>{const e={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"número";case"object":{if(Array.isArray(a))return"arreglo";if(a===null)return"nulo";if(Object.getPrototypeOf(a)!==Object.prototype)return a.constructor.name}}return s},u={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return a=>{switch(a.code){case"invalid_type":return`Entrada inválida: se esperaba ${a.expected}, recibido ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Entrada inválida: se esperaba ${Sn(a.values[0])}`:`Opción inválida: se esperaba una de ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Demasiado grande: se esperaba que ${a.origin??"valor"} tuviera ${s}${a.maximum.toString()} ${h.unit??"elementos"}`:`Demasiado grande: se esperaba que ${a.origin??"valor"} fuera ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Demasiado pequeño: se esperaba que ${a.origin} tuviera ${s}${a.minimum.toString()} ${h.unit}`:`Demasiado pequeño: se esperaba que ${a.origin} fuera ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Cadena inválida: debe comenzar con "${s.prefix}"`:s.format==="ends_with"?`Cadena inválida: debe terminar en "${s.suffix}"`:s.format==="includes"?`Cadena inválida: debe incluir "${s.includes}"`:s.format==="regex"?`Cadena inválida: debe coincidir con el patrón ${s.pattern}`:`Inválido ${u[s.format]??a.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${a.divisor}`;case"unrecognized_keys":return`Llave${a.keys.length>1?"s":""} desconocida${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Llave inválida en ${a.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${a.origin}`;default:return"Entrada inválida"}}};function BB(){return{localeError:RB()}}const NB=()=>{const e={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"عدد";case"object":{if(Array.isArray(a))return"آرایه";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"};return a=>{switch(a.code){case"invalid_type":return`ورودی نامعتبر: می‌بایست ${a.expected} می‌بود، ${r(a.input)} دریافت شد`;case"invalid_value":return a.values.length===1?`ورودی نامعتبر: می‌بایست ${Sn(a.values[0])} می‌بود`:`گزینه نامعتبر: می‌بایست یکی از ${q(a.values,"|")} می‌بود`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`خیلی بزرگ: ${a.origin??"مقدار"} باید ${s}${a.maximum.toString()} ${h.unit??"عنصر"} باشد`:`خیلی بزرگ: ${a.origin??"مقدار"} باید ${s}${a.maximum.toString()} باشد`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`خیلی کوچک: ${a.origin} باید ${s}${a.minimum.toString()} ${h.unit} باشد`:`خیلی کوچک: ${a.origin} باید ${s}${a.minimum.toString()} باشد`}case"invalid_format":{const s=a;return s.format==="starts_with"?`رشته نامعتبر: باید با "${s.prefix}" شروع شود`:s.format==="ends_with"?`رشته نامعتبر: باید با "${s.suffix}" تمام شود`:s.format==="includes"?`رشته نامعتبر: باید شامل "${s.includes}" باشد`:s.format==="regex"?`رشته نامعتبر: باید با الگوی ${s.pattern} مطابقت داشته باشد`:`${u[s.format]??a.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${a.divisor} باشد`;case"unrecognized_keys":return`کلید${a.keys.length>1?"های":""} ناشناس: ${q(a.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${a.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${a.origin}`;default:return"ورودی نامعتبر"}}};function HB(){return{localeError:NB()}}const GB=()=>{const e={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"};return a=>{switch(a.code){case"invalid_type":return`Virheellinen tyyppi: odotettiin ${a.expected}, oli ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Virheellinen syöte: täytyy olla ${Sn(a.values[0])}`:`Virheellinen valinta: täytyy olla yksi seuraavista: ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Liian suuri: ${h.subject} täytyy olla ${s}${a.maximum.toString()} ${h.unit}`.trim():`Liian suuri: arvon täytyy olla ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Liian pieni: ${h.subject} täytyy olla ${s}${a.minimum.toString()} ${h.unit}`.trim():`Liian pieni: arvon täytyy olla ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Virheellinen syöte: täytyy alkaa "${s.prefix}"`:s.format==="ends_with"?`Virheellinen syöte: täytyy loppua "${s.suffix}"`:s.format==="includes"?`Virheellinen syöte: täytyy sisältää "${s.includes}"`:s.format==="regex"?`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${s.pattern}`:`Virheellinen ${u[s.format]??a.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${a.divisor} monikerta`;case"unrecognized_keys":return`${a.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${q(a.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};function EB(){return{localeError:GB()}}const PB=()=>{const e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"nombre";case"object":{if(Array.isArray(a))return"tableau";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return a=>{switch(a.code){case"invalid_type":return`Entrée invalide : ${a.expected} attendu, ${r(a.input)} reçu`;case"invalid_value":return a.values.length===1?`Entrée invalide : ${Sn(a.values[0])} attendu`:`Option invalide : une valeur parmi ${q(a.values,"|")} attendue`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Trop grand : ${a.origin??"valeur"} doit ${h.verb} ${s}${a.maximum.toString()} ${h.unit??"élément(s)"}`:`Trop grand : ${a.origin??"valeur"} doit être ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Trop petit : ${a.origin} doit ${h.verb} ${s}${a.minimum.toString()} ${h.unit}`:`Trop petit : ${a.origin} doit être ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Chaîne invalide : doit commencer par "${s.prefix}"`:s.format==="ends_with"?`Chaîne invalide : doit se terminer par "${s.suffix}"`:s.format==="includes"?`Chaîne invalide : doit inclure "${s.includes}"`:s.format==="regex"?`Chaîne invalide : doit correspondre au modèle ${s.pattern}`:`${u[s.format]??a.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${a.divisor}`;case"unrecognized_keys":return`Clé${a.keys.length>1?"s":""} non reconnue${a.keys.length>1?"s":""} : ${q(a.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${a.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${a.origin}`;default:return"Entrée invalide"}}};function _B(){return{localeError:PB()}}const LB=()=>{const e={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return a=>{switch(a.code){case"invalid_type":return`Entrée invalide : attendu ${a.expected}, reçu ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Entrée invalide : attendu ${Sn(a.values[0])}`:`Option invalide : attendu l'une des valeurs suivantes ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"≤":"<",h=o(a.origin);return h?`Trop grand : attendu que ${a.origin??"la valeur"} ait ${s}${a.maximum.toString()} ${h.unit}`:`Trop grand : attendu que ${a.origin??"la valeur"} soit ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?"≥":">",h=o(a.origin);return h?`Trop petit : attendu que ${a.origin} ait ${s}${a.minimum.toString()} ${h.unit}`:`Trop petit : attendu que ${a.origin} soit ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Chaîne invalide : doit commencer par "${s.prefix}"`:s.format==="ends_with"?`Chaîne invalide : doit se terminer par "${s.suffix}"`:s.format==="includes"?`Chaîne invalide : doit inclure "${s.includes}"`:s.format==="regex"?`Chaîne invalide : doit correspondre au motif ${s.pattern}`:`${u[s.format]??a.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${a.divisor}`;case"unrecognized_keys":return`Clé${a.keys.length>1?"s":""} non reconnue${a.keys.length>1?"s":""} : ${q(a.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${a.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${a.origin}`;default:return"Entrée invalide"}}};function zB(){return{localeError:LB()}}const jB=()=>{const e={string:{unit:"אותיות",verb:"לכלול"},file:{unit:"בייטים",verb:"לכלול"},array:{unit:"פריטים",verb:"לכלול"},set:{unit:"פריטים",verb:"לכלול"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"קלט",email:"כתובת אימייל",url:"כתובת רשת",emoji:"אימוג'י",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"תאריך וזמן ISO",date:"תאריך ISO",time:"זמן ISO",duration:"משך זמן ISO",ipv4:"כתובת IPv4",ipv6:"כתובת IPv6",cidrv4:"טווח IPv4",cidrv6:"טווח IPv6",base64:"מחרוזת בבסיס 64",base64url:"מחרוזת בבסיס 64 לכתובות רשת",json_string:"מחרוזת JSON",e164:"מספר E.164",jwt:"JWT",template_literal:"קלט"};return a=>{switch(a.code){case"invalid_type":return`קלט לא תקין: צריך ${a.expected}, התקבל ${r(a.input)}`;case"invalid_value":return a.values.length===1?`קלט לא תקין: צריך ${Sn(a.values[0])}`:`קלט לא תקין: צריך אחת מהאפשרויות  ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`גדול מדי: ${a.origin??"value"} צריך להיות ${s}${a.maximum.toString()} ${h.unit??"elements"}`:`גדול מדי: ${a.origin??"value"} צריך להיות ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`קטן מדי: ${a.origin} צריך להיות ${s}${a.minimum.toString()} ${h.unit}`:`קטן מדי: ${a.origin} צריך להיות ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`מחרוזת לא תקינה: חייבת להתחיל ב"${s.prefix}"`:s.format==="ends_with"?`מחרוזת לא תקינה: חייבת להסתיים ב "${s.suffix}"`:s.format==="includes"?`מחרוזת לא תקינה: חייבת לכלול "${s.includes}"`:s.format==="regex"?`מחרוזת לא תקינה: חייבת להתאים לתבנית ${s.pattern}`:`${u[s.format]??a.format} לא תקין`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${a.divisor}`;case"unrecognized_keys":return`מפתח${a.keys.length>1?"ות":""} לא מזוה${a.keys.length>1?"ים":"ה"}: ${q(a.keys,", ")}`;case"invalid_key":return`מפתח לא תקין ב${a.origin}`;case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${a.origin}`;default:return"קלט לא תקין"}}};function xB(){return{localeError:jB()}}const $B=()=>{const e={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"szám";case"object":{if(Array.isArray(a))return"tömb";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"};return a=>{switch(a.code){case"invalid_type":return`Érvénytelen bemenet: a várt érték ${a.expected}, a kapott érték ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Érvénytelen bemenet: a várt érték ${Sn(a.values[0])}`:`Érvénytelen opció: valamelyik érték várt ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Túl nagy: ${a.origin??"érték"} mérete túl nagy ${s}${a.maximum.toString()} ${h.unit??"elem"}`:`Túl nagy: a bemeneti érték ${a.origin??"érték"} túl nagy: ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Túl kicsi: a bemeneti érték ${a.origin} mérete túl kicsi ${s}${a.minimum.toString()} ${h.unit}`:`Túl kicsi: a bemeneti érték ${a.origin} túl kicsi ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Érvénytelen string: "${s.prefix}" értékkel kell kezdődnie`:s.format==="ends_with"?`Érvénytelen string: "${s.suffix}" értékkel kell végződnie`:s.format==="includes"?`Érvénytelen string: "${s.includes}" értéket kell tartalmaznia`:s.format==="regex"?`Érvénytelen string: ${s.pattern} mintának kell megfelelnie`:`Érvénytelen ${u[s.format]??a.format}`}case"not_multiple_of":return`Érvénytelen szám: ${a.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${a.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${a.origin}`;default:return"Érvénytelen bemenet"}}};function FB(){return{localeError:$B()}}const UB=()=>{const e={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`Input tidak valid: diharapkan ${a.expected}, diterima ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Input tidak valid: diharapkan ${Sn(a.values[0])}`:`Pilihan tidak valid: diharapkan salah satu dari ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Terlalu besar: diharapkan ${a.origin??"value"} memiliki ${s}${a.maximum.toString()} ${h.unit??"elemen"}`:`Terlalu besar: diharapkan ${a.origin??"value"} menjadi ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Terlalu kecil: diharapkan ${a.origin} memiliki ${s}${a.minimum.toString()} ${h.unit}`:`Terlalu kecil: diharapkan ${a.origin} menjadi ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`String tidak valid: harus dimulai dengan "${s.prefix}"`:s.format==="ends_with"?`String tidak valid: harus berakhir dengan "${s.suffix}"`:s.format==="includes"?`String tidak valid: harus menyertakan "${s.includes}"`:s.format==="regex"?`String tidak valid: harus sesuai pola ${s.pattern}`:`${u[s.format]??a.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${a.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${a.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${a.origin}`;default:return"Input tidak valid"}}};function YB(){return{localeError:UB()}}const VB=e=>{const o=typeof e;switch(o){case"number":return Number.isNaN(e)?"NaN":"númer";case"object":{if(Array.isArray(e))return"fylki";if(e===null)return"null";if(Object.getPrototypeOf(e)!==Object.prototype&&e.constructor)return e.constructor.name}}return o},WB=()=>{const e={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function o(u){return e[u]??null}const r={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"};return u=>{switch(u.code){case"invalid_type":return`Rangt gildi: Þú slóst inn ${VB(u.input)} þar sem á að vera ${u.expected}`;case"invalid_value":return u.values.length===1?`Rangt gildi: gert ráð fyrir ${Sn(u.values[0])}`:`Ógilt val: má vera eitt af eftirfarandi ${q(u.values,"|")}`;case"too_big":{const a=u.inclusive?"<=":"<",s=o(u.origin);return s?`Of stórt: gert er ráð fyrir að ${u.origin??"gildi"} hafi ${a}${u.maximum.toString()} ${s.unit??"hluti"}`:`Of stórt: gert er ráð fyrir að ${u.origin??"gildi"} sé ${a}${u.maximum.toString()}`}case"too_small":{const a=u.inclusive?">=":">",s=o(u.origin);return s?`Of lítið: gert er ráð fyrir að ${u.origin} hafi ${a}${u.minimum.toString()} ${s.unit}`:`Of lítið: gert er ráð fyrir að ${u.origin} sé ${a}${u.minimum.toString()}`}case"invalid_format":{const a=u;return a.format==="starts_with"?`Ógildur strengur: verður að byrja á "${a.prefix}"`:a.format==="ends_with"?`Ógildur strengur: verður að enda á "${a.suffix}"`:a.format==="includes"?`Ógildur strengur: verður að innihalda "${a.includes}"`:a.format==="regex"?`Ógildur strengur: verður að fylgja mynstri ${a.pattern}`:`Rangt ${r[a.format]??u.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${u.divisor}`;case"unrecognized_keys":return`Óþekkt ${u.keys.length>1?"ir lyklar":"ur lykill"}: ${q(u.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${u.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${u.origin}`;default:return"Rangt gildi"}}};function ZB(){return{localeError:WB()}}const JB=()=>{const e={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"numero";case"object":{if(Array.isArray(a))return"vettore";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`Input non valido: atteso ${a.expected}, ricevuto ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Input non valido: atteso ${Sn(a.values[0])}`:`Opzione non valida: atteso uno tra ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Troppo grande: ${a.origin??"valore"} deve avere ${s}${a.maximum.toString()} ${h.unit??"elementi"}`:`Troppo grande: ${a.origin??"valore"} deve essere ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Troppo piccolo: ${a.origin} deve avere ${s}${a.minimum.toString()} ${h.unit}`:`Troppo piccolo: ${a.origin} deve essere ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Stringa non valida: deve iniziare con "${s.prefix}"`:s.format==="ends_with"?`Stringa non valida: deve terminare con "${s.suffix}"`:s.format==="includes"?`Stringa non valida: deve includere "${s.includes}"`:s.format==="regex"?`Stringa non valida: deve corrispondere al pattern ${s.pattern}`:`Invalid ${u[s.format]??a.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${a.divisor}`;case"unrecognized_keys":return`Chiav${a.keys.length>1?"i":"e"} non riconosciut${a.keys.length>1?"e":"a"}: ${q(a.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${a.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${a.origin}`;default:return"Input non valido"}}};function XB(){return{localeError:JB()}}const qB=()=>{const e={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"数値";case"object":{if(Array.isArray(a))return"配列";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"};return a=>{switch(a.code){case"invalid_type":return`無効な入力: ${a.expected}が期待されましたが、${r(a.input)}が入力されました`;case"invalid_value":return a.values.length===1?`無効な入力: ${Sn(a.values[0])}が期待されました`:`無効な選択: ${q(a.values,"、")}のいずれかである必要があります`;case"too_big":{const s=a.inclusive?"以下である":"より小さい",h=o(a.origin);return h?`大きすぎる値: ${a.origin??"値"}は${a.maximum.toString()}${h.unit??"要素"}${s}必要があります`:`大きすぎる値: ${a.origin??"値"}は${a.maximum.toString()}${s}必要があります`}case"too_small":{const s=a.inclusive?"以上である":"より大きい",h=o(a.origin);return h?`小さすぎる値: ${a.origin}は${a.minimum.toString()}${h.unit}${s}必要があります`:`小さすぎる値: ${a.origin}は${a.minimum.toString()}${s}必要があります`}case"invalid_format":{const s=a;return s.format==="starts_with"?`無効な文字列: "${s.prefix}"で始まる必要があります`:s.format==="ends_with"?`無効な文字列: "${s.suffix}"で終わる必要があります`:s.format==="includes"?`無効な文字列: "${s.includes}"を含む必要があります`:s.format==="regex"?`無効な文字列: パターン${s.pattern}に一致する必要があります`:`無効な${u[s.format]??a.format}`}case"not_multiple_of":return`無効な数値: ${a.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${a.keys.length>1?"群":""}: ${q(a.keys,"、")}`;case"invalid_key":return`${a.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${a.origin}内の無効な値`;default:return"無効な入力"}}};function QB(){return{localeError:qB()}}const nN=()=>{const e={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"មិនមែនជាលេខ (NaN)":"លេខ";case"object":{if(Array.isArray(a))return"អារេ (Array)";if(a===null)return"គ្មានតម្លៃ (null)";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"};return a=>{switch(a.code){case"invalid_type":return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${a.expected} ប៉ុន្តែទទួលបាន ${r(a.input)}`;case"invalid_value":return a.values.length===1?`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${Sn(a.values[0])}`:`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`ធំពេក៖ ត្រូវការ ${a.origin??"តម្លៃ"} ${s} ${a.maximum.toString()} ${h.unit??"ធាតុ"}`:`ធំពេក៖ ត្រូវការ ${a.origin??"តម្លៃ"} ${s} ${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`តូចពេក៖ ត្រូវការ ${a.origin} ${s} ${a.minimum.toString()} ${h.unit}`:`តូចពេក៖ ត្រូវការ ${a.origin} ${s} ${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${s.prefix}"`:s.format==="ends_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${s.suffix}"`:s.format==="includes"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${s.includes}"`:s.format==="regex"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${s.pattern}`:`មិនត្រឹមត្រូវ៖ ${u[s.format]??a.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${a.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${q(a.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${a.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${a.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};function eN(){return{localeError:nN()}}const aN=()=>{const e={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"};return a=>{switch(a.code){case"invalid_type":return`잘못된 입력: 예상 타입은 ${a.expected}, 받은 타입은 ${r(a.input)}입니다`;case"invalid_value":return a.values.length===1?`잘못된 입력: 값은 ${Sn(a.values[0])} 이어야 합니다`:`잘못된 옵션: ${q(a.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{const s=a.inclusive?"이하":"미만",h=s==="미만"?"이어야 합니다":"여야 합니다",g=o(a.origin),m=(g==null?void 0:g.unit)??"요소";return g?`${a.origin??"값"}이 너무 큽니다: ${a.maximum.toString()}${m} ${s}${h}`:`${a.origin??"값"}이 너무 큽니다: ${a.maximum.toString()} ${s}${h}`}case"too_small":{const s=a.inclusive?"이상":"초과",h=s==="이상"?"이어야 합니다":"여야 합니다",g=o(a.origin),m=(g==null?void 0:g.unit)??"요소";return g?`${a.origin??"값"}이 너무 작습니다: ${a.minimum.toString()}${m} ${s}${h}`:`${a.origin??"값"}이 너무 작습니다: ${a.minimum.toString()} ${s}${h}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`잘못된 문자열: "${s.prefix}"(으)로 시작해야 합니다`:s.format==="ends_with"?`잘못된 문자열: "${s.suffix}"(으)로 끝나야 합니다`:s.format==="includes"?`잘못된 문자열: "${s.includes}"을(를) 포함해야 합니다`:s.format==="regex"?`잘못된 문자열: 정규식 ${s.pattern} 패턴과 일치해야 합니다`:`잘못된 ${u[s.format]??a.format}`}case"not_multiple_of":return`잘못된 숫자: ${a.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${q(a.keys,", ")}`;case"invalid_key":return`잘못된 키: ${a.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${a.origin}`;default:return"잘못된 입력"}}};function iN(){return{localeError:aN()}}const oN=()=>{const e={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"број";case"object":{if(Array.isArray(a))return"низа";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"};return a=>{switch(a.code){case"invalid_type":return`Грешен внес: се очекува ${a.expected}, примено ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Invalid input: expected ${Sn(a.values[0])}`:`Грешана опција: се очекува една ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Премногу голем: се очекува ${a.origin??"вредноста"} да има ${s}${a.maximum.toString()} ${h.unit??"елементи"}`:`Премногу голем: се очекува ${a.origin??"вредноста"} да биде ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Премногу мал: се очекува ${a.origin} да има ${s}${a.minimum.toString()} ${h.unit}`:`Премногу мал: се очекува ${a.origin} да биде ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Неважечка низа: мора да започнува со "${s.prefix}"`:s.format==="ends_with"?`Неважечка низа: мора да завршува со "${s.suffix}"`:s.format==="includes"?`Неважечка низа: мора да вклучува "${s.includes}"`:s.format==="regex"?`Неважечка низа: мора да одгоара на патернот ${s.pattern}`:`Invalid ${u[s.format]??a.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${a.divisor}`;case"unrecognized_keys":return`${a.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${q(a.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${a.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${a.origin}`;default:return"Грешен внес"}}};function tN(){return{localeError:oN()}}const rN=()=>{const e={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"nombor";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`Input tidak sah: dijangka ${a.expected}, diterima ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Input tidak sah: dijangka ${Sn(a.values[0])}`:`Pilihan tidak sah: dijangka salah satu daripada ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Terlalu besar: dijangka ${a.origin??"nilai"} ${h.verb} ${s}${a.maximum.toString()} ${h.unit??"elemen"}`:`Terlalu besar: dijangka ${a.origin??"nilai"} adalah ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Terlalu kecil: dijangka ${a.origin} ${h.verb} ${s}${a.minimum.toString()} ${h.unit}`:`Terlalu kecil: dijangka ${a.origin} adalah ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`String tidak sah: mesti bermula dengan "${s.prefix}"`:s.format==="ends_with"?`String tidak sah: mesti berakhir dengan "${s.suffix}"`:s.format==="includes"?`String tidak sah: mesti mengandungi "${s.includes}"`:s.format==="regex"?`String tidak sah: mesti sepadan dengan corak ${s.pattern}`:`${u[s.format]??a.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${a.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${q(a.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${a.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${a.origin}`;default:return"Input tidak sah"}}};function uN(){return{localeError:rN()}}const sN=()=>{const e={string:{unit:"tekens"},file:{unit:"bytes"},array:{unit:"elementen"},set:{unit:"elementen"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"getal";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"};return a=>{switch(a.code){case"invalid_type":return`Ongeldige invoer: verwacht ${a.expected}, ontving ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Ongeldige invoer: verwacht ${Sn(a.values[0])}`:`Ongeldige optie: verwacht één van ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Te lang: verwacht dat ${a.origin??"waarde"} ${s}${a.maximum.toString()} ${h.unit??"elementen"} bevat`:`Te lang: verwacht dat ${a.origin??"waarde"} ${s}${a.maximum.toString()} is`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Te kort: verwacht dat ${a.origin} ${s}${a.minimum.toString()} ${h.unit} bevat`:`Te kort: verwacht dat ${a.origin} ${s}${a.minimum.toString()} is`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Ongeldige tekst: moet met "${s.prefix}" beginnen`:s.format==="ends_with"?`Ongeldige tekst: moet op "${s.suffix}" eindigen`:s.format==="includes"?`Ongeldige tekst: moet "${s.includes}" bevatten`:s.format==="regex"?`Ongeldige tekst: moet overeenkomen met patroon ${s.pattern}`:`Ongeldig: ${u[s.format]??a.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${a.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${a.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${a.origin}`;default:return"Ongeldige invoer"}}};function lN(){return{localeError:sN()}}const cN=()=>{const e={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"tall";case"object":{if(Array.isArray(a))return"liste";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`Ugyldig input: forventet ${a.expected}, fikk ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Ugyldig verdi: forventet ${Sn(a.values[0])}`:`Ugyldig valg: forventet en av ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`For stor(t): forventet ${a.origin??"value"} til å ha ${s}${a.maximum.toString()} ${h.unit??"elementer"}`:`For stor(t): forventet ${a.origin??"value"} til å ha ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`For lite(n): forventet ${a.origin} til å ha ${s}${a.minimum.toString()} ${h.unit}`:`For lite(n): forventet ${a.origin} til å ha ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Ugyldig streng: må starte med "${s.prefix}"`:s.format==="ends_with"?`Ugyldig streng: må ende med "${s.suffix}"`:s.format==="includes"?`Ugyldig streng: må inneholde "${s.includes}"`:s.format==="regex"?`Ugyldig streng: må matche mønsteret ${s.pattern}`:`Ugyldig ${u[s.format]??a.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${a.divisor}`;case"unrecognized_keys":return`${a.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${q(a.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${a.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${a.origin}`;default:return"Ugyldig input"}}};function hN(){return{localeError:cN()}}const dN=()=>{const e={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"numara";case"object":{if(Array.isArray(a))return"saf";if(a===null)return"gayb";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"};return a=>{switch(a.code){case"invalid_type":return`Fâsit giren: umulan ${a.expected}, alınan ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Fâsit giren: umulan ${Sn(a.values[0])}`:`Fâsit tercih: mûteberler ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Fazla büyük: ${a.origin??"value"}, ${s}${a.maximum.toString()} ${h.unit??"elements"} sahip olmalıydı.`:`Fazla büyük: ${a.origin??"value"}, ${s}${a.maximum.toString()} olmalıydı.`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Fazla küçük: ${a.origin}, ${s}${a.minimum.toString()} ${h.unit} sahip olmalıydı.`:`Fazla küçük: ${a.origin}, ${s}${a.minimum.toString()} olmalıydı.`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Fâsit metin: "${s.prefix}" ile başlamalı.`:s.format==="ends_with"?`Fâsit metin: "${s.suffix}" ile bitmeli.`:s.format==="includes"?`Fâsit metin: "${s.includes}" ihtivâ etmeli.`:s.format==="regex"?`Fâsit metin: ${s.pattern} nakşına uymalı.`:`Fâsit ${u[s.format]??a.format}`}case"not_multiple_of":return`Fâsit sayı: ${a.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`${a.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${a.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};function mN(){return{localeError:dN()}}const fN=()=>{const e={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"عدد";case"object":{if(Array.isArray(a))return"ارې";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"};return a=>{switch(a.code){case"invalid_type":return`ناسم ورودي: باید ${a.expected} وای, مګر ${r(a.input)} ترلاسه شو`;case"invalid_value":return a.values.length===1?`ناسم ورودي: باید ${Sn(a.values[0])} وای`:`ناسم انتخاب: باید یو له ${q(a.values,"|")} څخه وای`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`ډیر لوی: ${a.origin??"ارزښت"} باید ${s}${a.maximum.toString()} ${h.unit??"عنصرونه"} ولري`:`ډیر لوی: ${a.origin??"ارزښت"} باید ${s}${a.maximum.toString()} وي`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`ډیر کوچنی: ${a.origin} باید ${s}${a.minimum.toString()} ${h.unit} ولري`:`ډیر کوچنی: ${a.origin} باید ${s}${a.minimum.toString()} وي`}case"invalid_format":{const s=a;return s.format==="starts_with"?`ناسم متن: باید د "${s.prefix}" سره پیل شي`:s.format==="ends_with"?`ناسم متن: باید د "${s.suffix}" سره پای ته ورسيږي`:s.format==="includes"?`ناسم متن: باید "${s.includes}" ولري`:s.format==="regex"?`ناسم متن: باید د ${s.pattern} سره مطابقت ولري`:`${u[s.format]??a.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${a.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${a.keys.length>1?"کلیډونه":"کلیډ"}: ${q(a.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${a.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${a.origin} کې`;default:return"ناسمه ورودي"}}};function gN(){return{localeError:fN()}}const SN=()=>{const e={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"liczba";case"object":{if(Array.isArray(a))return"tablica";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"};return a=>{switch(a.code){case"invalid_type":return`Nieprawidłowe dane wejściowe: oczekiwano ${a.expected}, otrzymano ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Nieprawidłowe dane wejściowe: oczekiwano ${Sn(a.values[0])}`:`Nieprawidłowa opcja: oczekiwano jednej z wartości ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Za duża wartość: oczekiwano, że ${a.origin??"wartość"} będzie mieć ${s}${a.maximum.toString()} ${h.unit??"elementów"}`:`Zbyt duż(y/a/e): oczekiwano, że ${a.origin??"wartość"} będzie wynosić ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Za mała wartość: oczekiwano, że ${a.origin??"wartość"} będzie mieć ${s}${a.minimum.toString()} ${h.unit??"elementów"}`:`Zbyt mał(y/a/e): oczekiwano, że ${a.origin??"wartość"} będzie wynosić ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Nieprawidłowy ciąg znaków: musi zaczynać się od "${s.prefix}"`:s.format==="ends_with"?`Nieprawidłowy ciąg znaków: musi kończyć się na "${s.suffix}"`:s.format==="includes"?`Nieprawidłowy ciąg znaków: musi zawierać "${s.includes}"`:s.format==="regex"?`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${s.pattern}`:`Nieprawidłow(y/a/e) ${u[s.format]??a.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${a.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${a.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${a.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};function vN(){return{localeError:SN()}}const kN=()=>{const e={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"número";case"object":{if(Array.isArray(a))return"array";if(a===null)return"nulo";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return a=>{switch(a.code){case"invalid_type":return`Tipo inválido: esperado ${a.expected}, recebido ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Entrada inválida: esperado ${Sn(a.values[0])}`:`Opção inválida: esperada uma das ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Muito grande: esperado que ${a.origin??"valor"} tivesse ${s}${a.maximum.toString()} ${h.unit??"elementos"}`:`Muito grande: esperado que ${a.origin??"valor"} fosse ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Muito pequeno: esperado que ${a.origin} tivesse ${s}${a.minimum.toString()} ${h.unit}`:`Muito pequeno: esperado que ${a.origin} fosse ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Texto inválido: deve começar com "${s.prefix}"`:s.format==="ends_with"?`Texto inválido: deve terminar com "${s.suffix}"`:s.format==="includes"?`Texto inválido: deve incluir "${s.includes}"`:s.format==="regex"?`Texto inválido: deve corresponder ao padrão ${s.pattern}`:`${u[s.format]??a.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${a.divisor}`;case"unrecognized_keys":return`Chave${a.keys.length>1?"s":""} desconhecida${a.keys.length>1?"s":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Chave inválida em ${a.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${a.origin}`;default:return"Campo inválido"}}};function yN(){return{localeError:kN()}}function Jk(e,o,r,u){const a=Math.abs(e),s=a%10,h=a%100;return h>=11&&h<=19?u:s===1?o:s>=2&&s<=4?r:u}const pN=()=>{const e={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"число";case"object":{if(Array.isArray(a))return"массив";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"};return a=>{switch(a.code){case"invalid_type":return`Неверный ввод: ожидалось ${a.expected}, получено ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Неверный ввод: ожидалось ${Sn(a.values[0])}`:`Неверный вариант: ожидалось одно из ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);if(h){const g=Number(a.maximum),m=Jk(g,h.unit.one,h.unit.few,h.unit.many);return`Слишком большое значение: ожидалось, что ${a.origin??"значение"} будет иметь ${s}${a.maximum.toString()} ${m}`}return`Слишком большое значение: ожидалось, что ${a.origin??"значение"} будет ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);if(h){const g=Number(a.minimum),m=Jk(g,h.unit.one,h.unit.few,h.unit.many);return`Слишком маленькое значение: ожидалось, что ${a.origin} будет иметь ${s}${a.minimum.toString()} ${m}`}return`Слишком маленькое значение: ожидалось, что ${a.origin} будет ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Неверная строка: должна начинаться с "${s.prefix}"`:s.format==="ends_with"?`Неверная строка: должна заканчиваться на "${s.suffix}"`:s.format==="includes"?`Неверная строка: должна содержать "${s.includes}"`:s.format==="regex"?`Неверная строка: должна соответствовать шаблону ${s.pattern}`:`Неверный ${u[s.format]??a.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${a.divisor}`;case"unrecognized_keys":return`Нераспознанн${a.keys.length>1?"ые":"ый"} ключ${a.keys.length>1?"и":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${a.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${a.origin}`;default:return"Неверные входные данные"}}};function bN(){return{localeError:pN()}}const TN=()=>{const e={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"število";case"object":{if(Array.isArray(a))return"tabela";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"};return a=>{switch(a.code){case"invalid_type":return`Neveljaven vnos: pričakovano ${a.expected}, prejeto ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Neveljaven vnos: pričakovano ${Sn(a.values[0])}`:`Neveljavna možnost: pričakovano eno izmed ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Preveliko: pričakovano, da bo ${a.origin??"vrednost"} imelo ${s}${a.maximum.toString()} ${h.unit??"elementov"}`:`Preveliko: pričakovano, da bo ${a.origin??"vrednost"} ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Premajhno: pričakovano, da bo ${a.origin} imelo ${s}${a.minimum.toString()} ${h.unit}`:`Premajhno: pričakovano, da bo ${a.origin} ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Neveljaven niz: mora se začeti z "${s.prefix}"`:s.format==="ends_with"?`Neveljaven niz: mora se končati z "${s.suffix}"`:s.format==="includes"?`Neveljaven niz: mora vsebovati "${s.includes}"`:s.format==="regex"?`Neveljaven niz: mora ustrezati vzorcu ${s.pattern}`:`Neveljaven ${u[s.format]??a.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${a.divisor}`;case"unrecognized_keys":return`Neprepoznan${a.keys.length>1?"i ključi":" ključ"}: ${q(a.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${a.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${a.origin}`;default:return"Neveljaven vnos"}}};function MN(){return{localeError:TN()}}const AN=()=>{const e={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"antal";case"object":{if(Array.isArray(a))return"lista";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"};return a=>{switch(a.code){case"invalid_type":return`Ogiltig inmatning: förväntat ${a.expected}, fick ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Ogiltig inmatning: förväntat ${Sn(a.values[0])}`:`Ogiltigt val: förväntade en av ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`För stor(t): förväntade ${a.origin??"värdet"} att ha ${s}${a.maximum.toString()} ${h.unit??"element"}`:`För stor(t): förväntat ${a.origin??"värdet"} att ha ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`För lite(t): förväntade ${a.origin??"värdet"} att ha ${s}${a.minimum.toString()} ${h.unit}`:`För lite(t): förväntade ${a.origin??"värdet"} att ha ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Ogiltig sträng: måste börja med "${s.prefix}"`:s.format==="ends_with"?`Ogiltig sträng: måste sluta med "${s.suffix}"`:s.format==="includes"?`Ogiltig sträng: måste innehålla "${s.includes}"`:s.format==="regex"?`Ogiltig sträng: måste matcha mönstret "${s.pattern}"`:`Ogiltig(t) ${u[s.format]??a.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${a.divisor}`;case"unrecognized_keys":return`${a.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${q(a.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${a.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${a.origin??"värdet"}`;default:return"Ogiltig input"}}};function DN(){return{localeError:AN()}}const ON=()=>{const e={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"எண் அல்லாதது":"எண்";case"object":{if(Array.isArray(a))return"அணி";if(a===null)return"வெறுமை";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"};return a=>{switch(a.code){case"invalid_type":return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${a.expected}, பெறப்பட்டது ${r(a.input)}`;case"invalid_value":return a.values.length===1?`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${Sn(a.values[0])}`:`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${q(a.values,"|")} இல் ஒன்று`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${a.origin??"மதிப்பு"} ${s}${a.maximum.toString()} ${h.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`:`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${a.origin??"மதிப்பு"} ${s}${a.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${a.origin} ${s}${a.minimum.toString()} ${h.unit} ஆக இருக்க வேண்டும்`:`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${a.origin} ${s}${a.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{const s=a;return s.format==="starts_with"?`தவறான சரம்: "${s.prefix}" இல் தொடங்க வேண்டும்`:s.format==="ends_with"?`தவறான சரம்: "${s.suffix}" இல் முடிவடைய வேண்டும்`:s.format==="includes"?`தவறான சரம்: "${s.includes}" ஐ உள்ளடக்க வேண்டும்`:s.format==="regex"?`தவறான சரம்: ${s.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`:`தவறான ${u[s.format]??a.format}`}case"not_multiple_of":return`தவறான எண்: ${a.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${a.keys.length>1?"கள்":""}: ${q(a.keys,", ")}`;case"invalid_key":return`${a.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${a.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};function wN(){return{localeError:ON()}}const CN=()=>{const e={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"ไม่ใช่ตัวเลข (NaN)":"ตัวเลข";case"object":{if(Array.isArray(a))return"อาร์เรย์ (Array)";if(a===null)return"ไม่มีค่า (null)";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"};return a=>{switch(a.code){case"invalid_type":return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${a.expected} แต่ได้รับ ${r(a.input)}`;case"invalid_value":return a.values.length===1?`ค่าไม่ถูกต้อง: ควรเป็น ${Sn(a.values[0])}`:`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"ไม่เกิน":"น้อยกว่า",h=o(a.origin);return h?`เกินกำหนด: ${a.origin??"ค่า"} ควรมี${s} ${a.maximum.toString()} ${h.unit??"รายการ"}`:`เกินกำหนด: ${a.origin??"ค่า"} ควรมี${s} ${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?"อย่างน้อย":"มากกว่า",h=o(a.origin);return h?`น้อยกว่ากำหนด: ${a.origin} ควรมี${s} ${a.minimum.toString()} ${h.unit}`:`น้อยกว่ากำหนด: ${a.origin} ควรมี${s} ${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${s.prefix}"`:s.format==="ends_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${s.suffix}"`:s.format==="includes"?`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${s.includes}" อยู่ในข้อความ`:s.format==="regex"?`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${s.pattern}`:`รูปแบบไม่ถูกต้อง: ${u[s.format]??a.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${a.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${q(a.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${a.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${a.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};function KN(){return{localeError:CN()}}const IN=e=>{const o=typeof e;switch(o){case"number":return Number.isNaN(e)?"NaN":"number";case"object":{if(Array.isArray(e))return"array";if(e===null)return"null";if(Object.getPrototypeOf(e)!==Object.prototype&&e.constructor)return e.constructor.name}}return o},RN=()=>{const e={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function o(u){return e[u]??null}const r={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"};return u=>{switch(u.code){case"invalid_type":return`Geçersiz değer: beklenen ${u.expected}, alınan ${IN(u.input)}`;case"invalid_value":return u.values.length===1?`Geçersiz değer: beklenen ${Sn(u.values[0])}`:`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${q(u.values,"|")}`;case"too_big":{const a=u.inclusive?"<=":"<",s=o(u.origin);return s?`Çok büyük: beklenen ${u.origin??"değer"} ${a}${u.maximum.toString()} ${s.unit??"öğe"}`:`Çok büyük: beklenen ${u.origin??"değer"} ${a}${u.maximum.toString()}`}case"too_small":{const a=u.inclusive?">=":">",s=o(u.origin);return s?`Çok küçük: beklenen ${u.origin} ${a}${u.minimum.toString()} ${s.unit}`:`Çok küçük: beklenen ${u.origin} ${a}${u.minimum.toString()}`}case"invalid_format":{const a=u;return a.format==="starts_with"?`Geçersiz metin: "${a.prefix}" ile başlamalı`:a.format==="ends_with"?`Geçersiz metin: "${a.suffix}" ile bitmeli`:a.format==="includes"?`Geçersiz metin: "${a.includes}" içermeli`:a.format==="regex"?`Geçersiz metin: ${a.pattern} desenine uymalı`:`Geçersiz ${r[a.format]??u.format}`}case"not_multiple_of":return`Geçersiz sayı: ${u.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${u.keys.length>1?"lar":""}: ${q(u.keys,", ")}`;case"invalid_key":return`${u.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${u.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};function BN(){return{localeError:RN()}}const NN=()=>{const e={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"число";case"object":{if(Array.isArray(a))return"масив";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"};return a=>{switch(a.code){case"invalid_type":return`Неправильні вхідні дані: очікується ${a.expected}, отримано ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Неправильні вхідні дані: очікується ${Sn(a.values[0])}`:`Неправильна опція: очікується одне з ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Занадто велике: очікується, що ${a.origin??"значення"} ${h.verb} ${s}${a.maximum.toString()} ${h.unit??"елементів"}`:`Занадто велике: очікується, що ${a.origin??"значення"} буде ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Занадто мале: очікується, що ${a.origin} ${h.verb} ${s}${a.minimum.toString()} ${h.unit}`:`Занадто мале: очікується, що ${a.origin} буде ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Неправильний рядок: повинен починатися з "${s.prefix}"`:s.format==="ends_with"?`Неправильний рядок: повинен закінчуватися на "${s.suffix}"`:s.format==="includes"?`Неправильний рядок: повинен містити "${s.includes}"`:s.format==="regex"?`Неправильний рядок: повинен відповідати шаблону ${s.pattern}`:`Неправильний ${u[s.format]??a.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${a.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${a.keys.length>1?"і":""}: ${q(a.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${a.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${a.origin}`;default:return"Неправильні вхідні дані"}}};function HN(){return{localeError:NN()}}const GN=()=>{const e={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"نمبر";case"object":{if(Array.isArray(a))return"آرے";if(a===null)return"نل";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"};return a=>{switch(a.code){case"invalid_type":return`غلط ان پٹ: ${a.expected} متوقع تھا، ${r(a.input)} موصول ہوا`;case"invalid_value":return a.values.length===1?`غلط ان پٹ: ${Sn(a.values[0])} متوقع تھا`:`غلط آپشن: ${q(a.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`بہت بڑا: ${a.origin??"ویلیو"} کے ${s}${a.maximum.toString()} ${h.unit??"عناصر"} ہونے متوقع تھے`:`بہت بڑا: ${a.origin??"ویلیو"} کا ${s}${a.maximum.toString()} ہونا متوقع تھا`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`بہت چھوٹا: ${a.origin} کے ${s}${a.minimum.toString()} ${h.unit} ہونے متوقع تھے`:`بہت چھوٹا: ${a.origin} کا ${s}${a.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{const s=a;return s.format==="starts_with"?`غلط سٹرنگ: "${s.prefix}" سے شروع ہونا چاہیے`:s.format==="ends_with"?`غلط سٹرنگ: "${s.suffix}" پر ختم ہونا چاہیے`:s.format==="includes"?`غلط سٹرنگ: "${s.includes}" شامل ہونا چاہیے`:s.format==="regex"?`غلط سٹرنگ: پیٹرن ${s.pattern} سے میچ ہونا چاہیے`:`غلط ${u[s.format]??a.format}`}case"not_multiple_of":return`غلط نمبر: ${a.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${a.keys.length>1?"ز":""}: ${q(a.keys,"، ")}`;case"invalid_key":return`${a.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${a.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};function EN(){return{localeError:GN()}}const PN=()=>{const e={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"số";case"object":{if(Array.isArray(a))return"mảng";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"};return a=>{switch(a.code){case"invalid_type":return`Đầu vào không hợp lệ: mong đợi ${a.expected}, nhận được ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Đầu vào không hợp lệ: mong đợi ${Sn(a.values[0])}`:`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Quá lớn: mong đợi ${a.origin??"giá trị"} ${h.verb} ${s}${a.maximum.toString()} ${h.unit??"phần tử"}`:`Quá lớn: mong đợi ${a.origin??"giá trị"} ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Quá nhỏ: mong đợi ${a.origin} ${h.verb} ${s}${a.minimum.toString()} ${h.unit}`:`Quá nhỏ: mong đợi ${a.origin} ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Chuỗi không hợp lệ: phải bắt đầu bằng "${s.prefix}"`:s.format==="ends_with"?`Chuỗi không hợp lệ: phải kết thúc bằng "${s.suffix}"`:s.format==="includes"?`Chuỗi không hợp lệ: phải bao gồm "${s.includes}"`:s.format==="regex"?`Chuỗi không hợp lệ: phải khớp với mẫu ${s.pattern}`:`${u[s.format]??a.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${a.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${q(a.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${a.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${a.origin}`;default:return"Đầu vào không hợp lệ"}}};function _N(){return{localeError:PN()}}const LN=()=>{const e={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"非数字(NaN)":"数字";case"object":{if(Array.isArray(a))return"数组";if(a===null)return"空值(null)";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"};return a=>{switch(a.code){case"invalid_type":return`无效输入：期望 ${a.expected}，实际接收 ${r(a.input)}`;case"invalid_value":return a.values.length===1?`无效输入：期望 ${Sn(a.values[0])}`:`无效选项：期望以下之一 ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`数值过大：期望 ${a.origin??"值"} ${s}${a.maximum.toString()} ${h.unit??"个元素"}`:`数值过大：期望 ${a.origin??"值"} ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`数值过小：期望 ${a.origin} ${s}${a.minimum.toString()} ${h.unit}`:`数值过小：期望 ${a.origin} ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`无效字符串：必须以 "${s.prefix}" 开头`:s.format==="ends_with"?`无效字符串：必须以 "${s.suffix}" 结尾`:s.format==="includes"?`无效字符串：必须包含 "${s.includes}"`:s.format==="regex"?`无效字符串：必须满足正则表达式 ${s.pattern}`:`无效${u[s.format]??a.format}`}case"not_multiple_of":return`无效数字：必须是 ${a.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${q(a.keys,", ")}`;case"invalid_key":return`${a.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${a.origin} 中包含无效值(value)`;default:return"无效输入"}}};function zN(){return{localeError:LN()}}const jN=()=>{const e={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"number";case"object":{if(Array.isArray(a))return"array";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"};return a=>{switch(a.code){case"invalid_type":return`無效的輸入值：預期為 ${a.expected}，但收到 ${r(a.input)}`;case"invalid_value":return a.values.length===1?`無效的輸入值：預期為 ${Sn(a.values[0])}`:`無效的選項：預期為以下其中之一 ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`數值過大：預期 ${a.origin??"值"} 應為 ${s}${a.maximum.toString()} ${h.unit??"個元素"}`:`數值過大：預期 ${a.origin??"值"} 應為 ${s}${a.maximum.toString()}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`數值過小：預期 ${a.origin} 應為 ${s}${a.minimum.toString()} ${h.unit}`:`數值過小：預期 ${a.origin} 應為 ${s}${a.minimum.toString()}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`無效的字串：必須以 "${s.prefix}" 開頭`:s.format==="ends_with"?`無效的字串：必須以 "${s.suffix}" 結尾`:s.format==="includes"?`無效的字串：必須包含 "${s.includes}"`:s.format==="regex"?`無效的字串：必須符合格式 ${s.pattern}`:`無效的 ${u[s.format]??a.format}`}case"not_multiple_of":return`無效的數字：必須為 ${a.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${a.keys.length>1?"們":""}：${q(a.keys,"、")}`;case"invalid_key":return`${a.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${a.origin} 中有無效的值`;default:return"無效的輸入值"}}};function xN(){return{localeError:jN()}}const $N=()=>{const e={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function o(a){return e[a]??null}const r=a=>{const s=typeof a;switch(s){case"number":return Number.isNaN(a)?"NaN":"nọ́mbà";case"object":{if(Array.isArray(a))return"akopọ";if(a===null)return"null";if(Object.getPrototypeOf(a)!==Object.prototype&&a.constructor)return a.constructor.name}}return s},u={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"};return a=>{switch(a.code){case"invalid_type":return`Ìbáwọlé aṣìṣe: a ní láti fi ${a.expected}, àmọ̀ a rí ${r(a.input)}`;case"invalid_value":return a.values.length===1?`Ìbáwọlé aṣìṣe: a ní láti fi ${Sn(a.values[0])}`:`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${q(a.values,"|")}`;case"too_big":{const s=a.inclusive?"<=":"<",h=o(a.origin);return h?`Tó pọ̀ jù: a ní láti jẹ́ pé ${a.origin??"iye"} ${h.verb} ${s}${a.maximum} ${h.unit}`:`Tó pọ̀ jù: a ní láti jẹ́ ${s}${a.maximum}`}case"too_small":{const s=a.inclusive?">=":">",h=o(a.origin);return h?`Kéré ju: a ní láti jẹ́ pé ${a.origin} ${h.verb} ${s}${a.minimum} ${h.unit}`:`Kéré ju: a ní láti jẹ́ ${s}${a.minimum}`}case"invalid_format":{const s=a;return s.format==="starts_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${s.prefix}"`:s.format==="ends_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${s.suffix}"`:s.format==="includes"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${s.includes}"`:s.format==="regex"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${s.pattern}`:`Aṣìṣe: ${u[s.format]??a.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${a.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${q(a.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${a.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${a.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};function FN(){return{localeError:$N()}}const UT=Object.freeze(Object.defineProperty({__proto__:null,ar:mB,az:gB,be:vB,ca:yB,cs:bB,da:MB,de:DB,en:FT,eo:IB,es:BB,fa:HB,fi:EB,fr:_B,frCA:zB,he:xB,hu:FB,id:YB,is:ZB,it:XB,ja:QB,kh:eN,ko:iN,mk:tN,ms:uN,nl:lN,no:hN,ota:mN,pl:vN,ps:gN,pt:yN,ru:bN,sl:MN,sv:DN,ta:wN,th:KN,tr:BN,ua:HN,ur:EN,vi:_N,yo:FN,zhCN:zN,zhTW:xN},Symbol.toStringTag,{value:"Module"})),YT=Symbol("ZodOutput"),VT=Symbol("ZodInput");class Id{constructor(){this._map=new Map,this._idmap=new Map}add(o,...r){const u=r[0];if(this._map.set(o,u),u&&typeof u=="object"&&"id"in u){if(this._idmap.has(u.id))throw new Error(`ID ${u.id} already exists in the registry`);this._idmap.set(u.id,o)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(o){const r=this._map.get(o);return r&&typeof r=="object"&&"id"in r&&this._idmap.delete(r.id),this._map.delete(o),this}get(o){const r=o._zod.parent;if(r){const u={...this.get(r)??{}};delete u.id;const a={...u,...this._map.get(o)};return Object.keys(a).length?a:void 0}return this._map.get(o)}has(o){return this._map.has(o)}}function Rd(){return new Id}const Bi=Rd();function WT(e,o){return new e({type:"string",...W(o)})}function ZT(e,o){return new e({type:"string",coerce:!0,...W(o)})}function Bd(e,o){return new e({type:"string",format:"email",check:"string_format",abort:!1,...W(o)})}function ls(e,o){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...W(o)})}function Nd(e,o){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...W(o)})}function Hd(e,o){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...W(o)})}function Gd(e,o){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...W(o)})}function Ed(e,o){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...W(o)})}function Pd(e,o){return new e({type:"string",format:"url",check:"string_format",abort:!1,...W(o)})}function _d(e,o){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...W(o)})}function Ld(e,o){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...W(o)})}function zd(e,o){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...W(o)})}function jd(e,o){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...W(o)})}function xd(e,o){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...W(o)})}function $d(e,o){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...W(o)})}function Fd(e,o){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...W(o)})}function Ud(e,o){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...W(o)})}function Yd(e,o){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...W(o)})}function Vd(e,o){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...W(o)})}function Wd(e,o){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...W(o)})}function Zd(e,o){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...W(o)})}function Jd(e,o){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...W(o)})}function Xd(e,o){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...W(o)})}function qd(e,o){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...W(o)})}const JT={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6};function XT(e,o){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...W(o)})}function qT(e,o){return new e({type:"string",format:"date",check:"string_format",...W(o)})}function QT(e,o){return new e({type:"string",format:"time",check:"string_format",precision:null,...W(o)})}function nM(e,o){return new e({type:"string",format:"duration",check:"string_format",...W(o)})}function eM(e,o){return new e({type:"number",checks:[],...W(o)})}function aM(e,o){return new e({type:"number",coerce:!0,checks:[],...W(o)})}function iM(e,o){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...W(o)})}function oM(e,o){return new e({type:"number",check:"number_format",abort:!1,format:"float32",...W(o)})}function tM(e,o){return new e({type:"number",check:"number_format",abort:!1,format:"float64",...W(o)})}function rM(e,o){return new e({type:"number",check:"number_format",abort:!1,format:"int32",...W(o)})}function uM(e,o){return new e({type:"number",check:"number_format",abort:!1,format:"uint32",...W(o)})}function sM(e,o){return new e({type:"boolean",...W(o)})}function lM(e,o){return new e({type:"boolean",coerce:!0,...W(o)})}function cM(e,o){return new e({type:"bigint",...W(o)})}function hM(e,o){return new e({type:"bigint",coerce:!0,...W(o)})}function dM(e,o){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...W(o)})}function mM(e,o){return new e({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...W(o)})}function fM(e,o){return new e({type:"symbol",...W(o)})}function gM(e,o){return new e({type:"undefined",...W(o)})}function SM(e,o){return new e({type:"null",...W(o)})}function vM(e){return new e({type:"any"})}function cs(e){return new e({type:"unknown"})}function kM(e,o){return new e({type:"never",...W(o)})}function yM(e,o){return new e({type:"void",...W(o)})}function pM(e,o){return new e({type:"date",...W(o)})}function bM(e,o){return new e({type:"date",coerce:!0,...W(o)})}function TM(e,o){return new e({type:"nan",...W(o)})}function Hi(e,o){return new pd({check:"less_than",...W(o),value:e,inclusive:!1})}function na(e,o){return new pd({check:"less_than",...W(o),value:e,inclusive:!0})}function Gi(e,o){return new bd({check:"greater_than",...W(o),value:e,inclusive:!1})}function Le(e,o){return new bd({check:"greater_than",...W(o),value:e,inclusive:!0})}function MM(e){return Gi(0,e)}function AM(e){return Hi(0,e)}function DM(e){return na(0,e)}function OM(e){return Le(0,e)}function Qt(e,o){return new bb({check:"multiple_of",...W(o),value:e})}function Is(e,o){return new Ab({check:"max_size",...W(o),maximum:e})}function nr(e,o){return new Db({check:"min_size",...W(o),minimum:e})}function Qd(e,o){return new Ob({check:"size_equals",...W(o),size:e})}function Rs(e,o){return new wb({check:"max_length",...W(o),maximum:e})}function Ho(e,o){return new Cb({check:"min_length",...W(o),minimum:e})}function Bs(e,o){return new Kb({check:"length_equals",...W(o),length:e})}function nm(e,o){return new Ib({check:"string_format",format:"regex",...W(o),pattern:e})}function em(e){return new Rb({check:"string_format",format:"lowercase",...W(e)})}function am(e){return new Bb({check:"string_format",format:"uppercase",...W(e)})}function im(e,o){return new Nb({check:"string_format",format:"includes",...W(o),includes:e})}function om(e,o){return new Hb({check:"string_format",format:"starts_with",...W(o),prefix:e})}function tm(e,o){return new Gb({check:"string_format",format:"ends_with",...W(o),suffix:e})}function wM(e,o,r){return new Eb({check:"property",property:e,schema:o,...W(r)})}function rm(e,o){return new Pb({check:"mime_type",mime:e,...W(o)})}function Pi(e){return new _b({check:"overwrite",tx:e})}function um(e){return Pi(o=>o.normalize(e))}function sm(){return Pi(e=>e.trim())}function lm(){return Pi(e=>e.toLowerCase())}function cm(){return Pi(e=>e.toUpperCase())}function hm(e,o,r){return new e({type:"array",element:o,...W(r)})}function UN(e,o,r){return new e({type:"union",options:o,...W(r)})}function YN(e,o,r,u){return new e({type:"union",options:r,discriminator:o,...W(u)})}function VN(e,o,r){return new e({type:"intersection",left:o,right:r})}function CM(e,o,r,u){const a=r instanceof gn,s=a?u:r,h=a?r:null;return new e({type:"tuple",items:o,rest:h,...W(s)})}function WN(e,o,r,u){return new e({type:"record",keyType:o,valueType:r,...W(u)})}function ZN(e,o,r,u){return new e({type:"map",keyType:o,valueType:r,...W(u)})}function JN(e,o,r){return new e({type:"set",valueType:o,...W(r)})}function XN(e,o,r){const u=Array.isArray(o)?Object.fromEntries(o.map(a=>[a,a])):o;return new e({type:"enum",entries:u,...W(r)})}function qN(e,o,r){return new e({type:"enum",entries:o,...W(r)})}function QN(e,o,r){return new e({type:"literal",values:Array.isArray(o)?o:[o],...W(r)})}function KM(e,o){return new e({type:"file",...W(o)})}function nH(e,o){return new e({type:"transform",transform:o})}function eH(e,o){return new e({type:"optional",innerType:o})}function aH(e,o){return new e({type:"nullable",innerType:o})}function iH(e,o,r){return new e({type:"default",innerType:o,get defaultValue(){return typeof r=="function"?r():r}})}function oH(e,o,r){return new e({type:"nonoptional",innerType:o,...W(r)})}function tH(e,o){return new e({type:"success",innerType:o})}function rH(e,o,r){return new e({type:"catch",innerType:o,catchValue:typeof r=="function"?r:()=>r})}function uH(e,o,r){return new e({type:"pipe",in:o,out:r})}function sH(e,o){return new e({type:"readonly",innerType:o})}function lH(e,o,r){return new e({type:"template_literal",parts:o,...W(r)})}function cH(e,o){return new e({type:"lazy",getter:o})}function hH(e,o){return new e({type:"promise",innerType:o})}function IM(e,o,r){const u=W(r);return u.abort??(u.abort=!0),new e({type:"custom",check:"custom",fn:o,...u})}function RM(e,o,r){return new e({type:"custom",check:"custom",fn:o,...W(r)})}function BM(e){const o=NM(r=>(r.addIssue=u=>{if(typeof u=="string")r.issues.push(Bo(u,r.value,o._zod.def));else{const a=u;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=r.value),a.inst??(a.inst=o),a.continue??(a.continue=!o._zod.def.abort),r.issues.push(Bo(a))}},e(r.value,r)));return o}function NM(e,o){const r=new Qn({check:"custom",...W(o)});return r._zod.check=e,r}function HM(e,o){const r=W(o);let u=r.truthy??["true","1","yes","on","y","enabled"],a=r.falsy??["false","0","no","off","n","disabled"];r.case!=="sensitive"&&(u=u.map(D=>typeof D=="string"?D.toLowerCase():D),a=a.map(D=>typeof D=="string"?D.toLowerCase():D));const s=new Set(u),h=new Set(a),g=e.Pipe??Kd,m=e.Boolean??Ad,f=e.String??cr,v=e.Transform??Cd,y=new v({type:"transform",transform:(D,R)=>{let b=D;return r.case!=="sensitive"&&(b=b.toLowerCase()),s.has(b)?!0:h.has(b)?!1:(R.issues.push({code:"invalid_value",expected:"stringbool",values:[...s,...h],input:R.value,inst:y,continue:!1}),{})},error:r.error}),M=new g({type:"pipe",in:new f({type:"string",error:r.error}),out:y,error:r.error});return new g({type:"pipe",in:M,out:new m({type:"boolean",error:r.error}),error:r.error})}function dm(e,o,r,u={}){const a=W(u),s={...W(u),check:"string_format",type:"string",format:o,fn:typeof r=="function"?r:g=>r.test(g),...a};return r instanceof RegExp&&(s.pattern=r),new e(s)}class GM{constructor(o){this._def=o,this.def=o}implement(o){if(typeof o!="function")throw new Error("implement() must be called with a function");const r=(...u)=>{const a=this._def.input?Nh(this._def.input,u,void 0,{callee:r}):u;if(!Array.isArray(a))throw new Error("Invalid arguments schema: not an array or tuple schema.");const s=o(...a);return this._def.output?Nh(this._def.output,s,void 0,{callee:r}):s};return r}implementAsync(o){if(typeof o!="function")throw new Error("implement() must be called with a function");const r=async(...u)=>{const a=this._def.input?await Hh(this._def.input,u,void 0,{callee:r}):u;if(!Array.isArray(a))throw new Error("Invalid arguments schema: not an array or tuple schema.");const s=await o(...a);return this._def.output?Hh(this._def.output,s,void 0,{callee:r}):s};return r}input(...o){const r=this.constructor;return Array.isArray(o[0])?new r({type:"function",input:new Ks({type:"tuple",items:o[0],rest:o[1]}),output:this._def.output}):new r({type:"function",input:o[0],output:this._def.output})}output(o){const r=this.constructor;return new r({type:"function",input:this._def.input,output:o})}}function EM(e){return new GM({type:"function",input:Array.isArray(e==null?void 0:e.input)?CM(Ks,e==null?void 0:e.input):(e==null?void 0:e.input)??hm(Od,cs(ss)),output:(e==null?void 0:e.output)??cs(ss)})}class Eh{constructor(o){this.counter=0,this.metadataRegistry=(o==null?void 0:o.metadata)??Bi,this.target=(o==null?void 0:o.target)??"draft-2020-12",this.unrepresentable=(o==null?void 0:o.unrepresentable)??"throw",this.override=(o==null?void 0:o.override)??(()=>{}),this.io=(o==null?void 0:o.io)??"output",this.seen=new Map}process(o,r={path:[],schemaPath:[]}){var y,M,C;var u;const a=o._zod.def,s={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},h=this.seen.get(o);if(h)return h.count++,r.schemaPath.includes(o)&&(h.cycle=r.path),h.schema;const g={schema:{},count:1,cycle:void 0,path:r.path};this.seen.set(o,g);const m=(M=(y=o._zod).toJSONSchema)==null?void 0:M.call(y);if(m)g.schema=m;else{const D={...r,schemaPath:[...r.schemaPath,o],path:r.path},R=o._zod.parent;if(R)g.ref=R,this.process(R,D),this.seen.get(R).isParent=!0;else{const b=g.schema;switch(a.type){case"string":{const p=b;p.type="string";const{minimum:w,maximum:A,format:P,patterns:I,contentEncoding:U}=o._zod.bag;if(typeof w=="number"&&(p.minLength=w),typeof A=="number"&&(p.maxLength=A),P&&(p.format=s[P]??P,p.format===""&&delete p.format),U&&(p.contentEncoding=U),I&&I.size>0){const F=[...I];F.length===1?p.pattern=F[0].source:F.length>1&&(g.schema.allOf=[...F.map(Q=>({...this.target==="draft-7"||this.target==="draft-4"?{type:"string"}:{},pattern:Q.source}))])}break}case"number":{const p=b,{minimum:w,maximum:A,format:P,multipleOf:I,exclusiveMaximum:U,exclusiveMinimum:F}=o._zod.bag;typeof P=="string"&&P.includes("int")?p.type="integer":p.type="number",typeof F=="number"&&(this.target==="draft-4"?(p.minimum=F,p.exclusiveMinimum=!0):p.exclusiveMinimum=F),typeof w=="number"&&(p.minimum=w,typeof F=="number"&&this.target!=="draft-4"&&(F>=w?delete p.minimum:delete p.exclusiveMinimum)),typeof U=="number"&&(this.target==="draft-4"?(p.maximum=U,p.exclusiveMaximum=!0):p.exclusiveMaximum=U),typeof A=="number"&&(p.maximum=A,typeof U=="number"&&this.target!=="draft-4"&&(U<=A?delete p.maximum:delete p.exclusiveMaximum)),typeof I=="number"&&(p.multipleOf=I);break}case"boolean":{const p=b;p.type="boolean";break}case"bigint":{if(this.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema");break}case"symbol":{if(this.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema");break}case"null":{b.type="null";break}case"any":break;case"unknown":break;case"undefined":{if(this.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema");break}case"void":{if(this.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema");break}case"never":{b.not={};break}case"date":{if(this.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema");break}case"array":{const p=b,{minimum:w,maximum:A}=o._zod.bag;typeof w=="number"&&(p.minItems=w),typeof A=="number"&&(p.maxItems=A),p.type="array",p.items=this.process(a.element,{...D,path:[...D.path,"items"]});break}case"object":{const p=b;p.type="object",p.properties={};const w=a.shape;for(const I in w)p.properties[I]=this.process(w[I],{...D,path:[...D.path,"properties",I]});const A=new Set(Object.keys(w)),P=new Set([...A].filter(I=>{const U=a.shape[I]._zod;return this.io==="input"?U.optin===void 0:U.optout===void 0}));P.size>0&&(p.required=Array.from(P)),((C=a.catchall)==null?void 0:C._zod.def.type)==="never"?p.additionalProperties=!1:a.catchall?a.catchall&&(p.additionalProperties=this.process(a.catchall,{...D,path:[...D.path,"additionalProperties"]})):this.io==="output"&&(p.additionalProperties=!1);break}case"union":{const p=b;p.anyOf=a.options.map((w,A)=>this.process(w,{...D,path:[...D.path,"anyOf",A]}));break}case"intersection":{const p=b,w=this.process(a.left,{...D,path:[...D.path,"allOf",0]}),A=this.process(a.right,{...D,path:[...D.path,"allOf",1]}),P=U=>"allOf"in U&&Object.keys(U).length===1,I=[...P(w)?w.allOf:[w],...P(A)?A.allOf:[A]];p.allOf=I;break}case"tuple":{const p=b;p.type="array";const w=a.items.map((I,U)=>this.process(I,{...D,path:[...D.path,"prefixItems",U]}));if(this.target==="draft-2020-12"?p.prefixItems=w:p.items=w,a.rest){const I=this.process(a.rest,{...D,path:[...D.path,"items"]});this.target==="draft-2020-12"?p.items=I:p.additionalItems=I}a.rest&&(p.items=this.process(a.rest,{...D,path:[...D.path,"items"]}));const{minimum:A,maximum:P}=o._zod.bag;typeof A=="number"&&(p.minItems=A),typeof P=="number"&&(p.maxItems=P);break}case"record":{const p=b;p.type="object",this.target!=="draft-4"&&(p.propertyNames=this.process(a.keyType,{...D,path:[...D.path,"propertyNames"]})),p.additionalProperties=this.process(a.valueType,{...D,path:[...D.path,"additionalProperties"]});break}case"map":{if(this.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema");break}case"set":{if(this.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema");break}case"enum":{const p=b,w=ld(a.entries);w.every(A=>typeof A=="number")&&(p.type="number"),w.every(A=>typeof A=="string")&&(p.type="string"),p.enum=w;break}case"literal":{const p=b,w=[];for(const A of a.values)if(A===void 0){if(this.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof A=="bigint"){if(this.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");w.push(Number(A))}else w.push(A);if(w.length!==0)if(w.length===1){const A=w[0];p.type=A===null?"null":typeof A,this.target==="draft-4"?p.enum=[A]:p.const=A}else w.every(A=>typeof A=="number")&&(p.type="number"),w.every(A=>typeof A=="string")&&(p.type="string"),w.every(A=>typeof A=="boolean")&&(p.type="string"),w.every(A=>A===null)&&(p.type="null"),p.enum=w;break}case"file":{const p=b,w={type:"string",format:"binary",contentEncoding:"binary"},{minimum:A,maximum:P,mime:I}=o._zod.bag;A!==void 0&&(w.minLength=A),P!==void 0&&(w.maxLength=P),I?I.length===1?(w.contentMediaType=I[0],Object.assign(p,w)):p.anyOf=I.map(U=>({...w,contentMediaType:U})):Object.assign(p,w);break}case"transform":{if(this.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema");break}case"nullable":{const p=this.process(a.innerType,D);b.anyOf=[p,{type:"null"}];break}case"nonoptional":{this.process(a.innerType,D),g.ref=a.innerType;break}case"success":{const p=b;p.type="boolean";break}case"default":{this.process(a.innerType,D),g.ref=a.innerType,b.default=JSON.parse(JSON.stringify(a.defaultValue));break}case"prefault":{this.process(a.innerType,D),g.ref=a.innerType,this.io==="input"&&(b._prefault=JSON.parse(JSON.stringify(a.defaultValue)));break}case"catch":{this.process(a.innerType,D),g.ref=a.innerType;let p;try{p=a.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}b.default=p;break}case"nan":{if(this.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema");break}case"template_literal":{const p=b,w=o._zod.pattern;if(!w)throw new Error("Pattern not found in template literal");p.type="string",p.pattern=w.source;break}case"pipe":{const p=this.io==="input"?a.in._zod.def.type==="transform"?a.out:a.in:a.out;this.process(p,D),g.ref=p;break}case"readonly":{this.process(a.innerType,D),g.ref=a.innerType,b.readOnly=!0;break}case"promise":{this.process(a.innerType,D),g.ref=a.innerType;break}case"optional":{this.process(a.innerType,D),g.ref=a.innerType;break}case"lazy":{const p=o._zod.innerType;this.process(p,D),g.ref=p;break}case"custom":{if(this.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema");break}}}}const f=this.metadataRegistry.get(o);return f&&Object.assign(g.schema,f),this.io==="input"&&ue(o)&&(delete g.schema.examples,delete g.schema.default),this.io==="input"&&g.schema._prefault&&((u=g.schema).default??(u.default=g.schema._prefault)),delete g.schema._prefault,this.seen.get(o).schema}emit(o,r){var v,y,M,C,D,R;const u={cycles:(r==null?void 0:r.cycles)??"ref",reused:(r==null?void 0:r.reused)??"inline",external:(r==null?void 0:r.external)??void 0},a=this.seen.get(o);if(!a)throw new Error("Unprocessed schema. This is a bug in Zod.");const s=b=>{var I;const p=this.target==="draft-2020-12"?"$defs":"definitions";if(u.external){const U=(I=u.external.registry.get(b[0]))==null?void 0:I.id,F=u.external.uri??(tn=>tn);if(U)return{ref:F(U)};const Q=b[1].defId??b[1].schema.id??`schema${this.counter++}`;return b[1].defId=Q,{defId:Q,ref:`${F("__shared")}#/${p}/${Q}`}}if(b[1]===a)return{ref:"#"};const A=`#/${p}/`,P=b[1].schema.id??`__schema${this.counter++}`;return{defId:P,ref:A+P}},h=b=>{if(b[1].schema.$ref)return;const p=b[1],{ref:w,defId:A}=s(b);p.def={...p.schema},A&&(p.defId=A);const P=p.schema;for(const I in P)delete P[I];P.$ref=w};if(u.cycles==="throw")for(const b of this.seen.entries()){const p=b[1];if(p.cycle)throw new Error(`Cycle detected: #/${(v=p.cycle)==null?void 0:v.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const b of this.seen.entries()){const p=b[1];if(o===b[0]){h(b);continue}if(u.external){const A=(y=u.external.registry.get(b[0]))==null?void 0:y.id;if(o!==b[0]&&A){h(b);continue}}if((M=this.metadataRegistry.get(b[0]))==null?void 0:M.id){h(b);continue}if(p.cycle){h(b);continue}if(p.count>1&&u.reused==="ref"){h(b);continue}}const g=(b,p)=>{const w=this.seen.get(b),A=w.def??w.schema,P={...A};if(w.ref===null)return;const I=w.ref;if(w.ref=null,I){g(I,p);const U=this.seen.get(I).schema;U.$ref&&(p.target==="draft-7"||p.target==="draft-4")?(A.allOf=A.allOf??[],A.allOf.push(U)):(Object.assign(A,U),Object.assign(A,P))}w.isParent||this.override({zodSchema:b,jsonSchema:A,path:w.path??[]})};for(const b of[...this.seen.entries()].reverse())g(b[0],{target:this.target});const m={};if(this.target==="draft-2020-12"?m.$schema="https://json-schema.org/draft/2020-12/schema":this.target==="draft-7"?m.$schema="http://json-schema.org/draft-07/schema#":this.target==="draft-4"?m.$schema="http://json-schema.org/draft-04/schema#":console.warn(`Invalid target: ${this.target}`),(C=u.external)!=null&&C.uri){const b=(D=u.external.registry.get(o))==null?void 0:D.id;if(!b)throw new Error("Schema is missing an `id` property");m.$id=u.external.uri(b)}Object.assign(m,a.def);const f=((R=u.external)==null?void 0:R.defs)??{};for(const b of this.seen.entries()){const p=b[1];p.def&&p.defId&&(f[p.defId]=p.def)}u.external||Object.keys(f).length>0&&(this.target==="draft-2020-12"?m.$defs=f:m.definitions=f);try{return JSON.parse(JSON.stringify(m))}catch{throw new Error("Error converting schema to JSON.")}}}function PM(e,o){if(e instanceof Id){const u=new Eh(o),a={};for(const g of e._idmap.entries()){const[m,f]=g;u.process(f)}const s={},h={registry:e,uri:o==null?void 0:o.uri,defs:a};for(const g of e._idmap.entries()){const[m,f]=g;s[m]=u.emit(f,{...o,external:h})}if(Object.keys(a).length>0){const g=u.target==="draft-2020-12"?"$defs":"definitions";s.__shared={[g]:a}}return{schemas:s}}const r=new Eh(o);return r.process(e),r.emit(e,o)}function ue(e,o){const r=o??{seen:new Set};if(r.seen.has(e))return!1;r.seen.add(e);const a=e._zod.def;switch(a.type){case"string":case"number":case"bigint":case"boolean":case"date":case"symbol":case"undefined":case"null":case"any":case"unknown":case"never":case"void":case"literal":case"enum":case"nan":case"file":case"template_literal":return!1;case"array":return ue(a.element,r);case"object":{for(const s in a.shape)if(ue(a.shape[s],r))return!0;return!1}case"union":{for(const s of a.options)if(ue(s,r))return!0;return!1}case"intersection":return ue(a.left,r)||ue(a.right,r);case"tuple":{for(const s of a.items)if(ue(s,r))return!0;return!!(a.rest&&ue(a.rest,r))}case"record":return ue(a.keyType,r)||ue(a.valueType,r);case"map":return ue(a.keyType,r)||ue(a.valueType,r);case"set":return ue(a.valueType,r);case"promise":case"optional":case"nonoptional":case"nullable":case"readonly":return ue(a.innerType,r);case"lazy":return ue(a.getter(),r);case"default":return ue(a.innerType,r);case"prefault":return ue(a.innerType,r);case"custom":return!1;case"transform":return!0;case"pipe":return ue(a.in,r)||ue(a.out,r);case"success":return!1;case"catch":return!1}throw new Error(`Unknown schema type: ${a.type}`)}const dH=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),mH=Object.freeze(Object.defineProperty({__proto__:null,$ZodAny:kT,$ZodArray:Od,$ZodAsyncError:Ro,$ZodBase64:rT,$ZodBase64URL:sT,$ZodBigInt:Dd,$ZodBigIntFormat:fT,$ZodBoolean:Ad,$ZodCIDRv4:oT,$ZodCIDRv6:tT,$ZodCUID:Vb,$ZodCUID2:Wb,$ZodCatch:PT,$ZodCheck:Qn,$ZodCheckBigIntFormat:Mb,$ZodCheckEndsWith:Gb,$ZodCheckGreaterThan:bd,$ZodCheckIncludes:Nb,$ZodCheckLengthEquals:Kb,$ZodCheckLessThan:pd,$ZodCheckLowerCase:Rb,$ZodCheckMaxLength:wb,$ZodCheckMaxSize:Ab,$ZodCheckMimeType:Pb,$ZodCheckMinLength:Cb,$ZodCheckMinSize:Db,$ZodCheckMultipleOf:bb,$ZodCheckNumberFormat:Tb,$ZodCheckOverwrite:_b,$ZodCheckProperty:Eb,$ZodCheckRegex:Ib,$ZodCheckSizeEquals:Ob,$ZodCheckStartsWith:Hb,$ZodCheckStringFormat:lr,$ZodCheckUpperCase:Bb,$ZodCustom:$T,$ZodCustomStringFormat:dT,$ZodDate:bT,$ZodDefault:NT,$ZodDiscriminatedUnion:MT,$ZodE164:lT,$ZodEmail:$b,$ZodEmoji:Ub,$ZodEnum:CT,$ZodError:hd,$ZodFile:IT,$ZodFunction:GM,$ZodGUID:jb,$ZodIPv4:aT,$ZodIPv6:iT,$ZodISODate:Qb,$ZodISODateTime:qb,$ZodISODuration:eT,$ZodISOTime:nT,$ZodIntersection:AT,$ZodJWT:hT,$ZodKSUID:Xb,$ZodLazy:xT,$ZodLiteral:KT,$ZodMap:OT,$ZodNaN:_T,$ZodNanoID:Yb,$ZodNever:yT,$ZodNonOptional:GT,$ZodNull:vT,$ZodNullable:BT,$ZodNumber:Md,$ZodNumberFormat:mT,$ZodObject:TT,$ZodOptional:RT,$ZodPipe:Kd,$ZodPrefault:HT,$ZodPromise:jT,$ZodReadonly:LT,$ZodRealError:sr,$ZodRecord:DT,$ZodRegistry:Id,$ZodSet:wT,$ZodString:cr,$ZodStringFormat:Fn,$ZodSuccess:ET,$ZodSymbol:gT,$ZodTemplateLiteral:zT,$ZodTransform:Cd,$ZodTuple:Ks,$ZodType:gn,$ZodULID:Zb,$ZodURL:Fb,$ZodUUID:xb,$ZodUndefined:ST,$ZodUnion:wd,$ZodUnknown:ss,$ZodVoid:pT,$ZodXID:Jb,$brand:Ap,$constructor:G,$input:VT,$output:YT,Doc:Lb,JSONSchema:dH,JSONSchemaGenerator:Eh,NEVER:Mp,TimePrecision:JT,_any:vM,_array:hm,_base64:Zd,_base64url:Jd,_bigint:cM,_boolean:sM,_catch:rH,_check:NM,_cidrv4:Vd,_cidrv6:Wd,_coercedBigint:hM,_coercedBoolean:lM,_coercedDate:bM,_coercedNumber:aM,_coercedString:ZT,_cuid:zd,_cuid2:jd,_custom:IM,_date:pM,_default:iH,_discriminatedUnion:YN,_e164:Xd,_email:Bd,_emoji:_d,_endsWith:tm,_enum:XN,_file:KM,_float32:oM,_float64:tM,_gt:Gi,_gte:Le,_guid:ls,_includes:im,_int:iM,_int32:rM,_int64:dM,_intersection:VN,_ipv4:Ud,_ipv6:Yd,_isoDate:qT,_isoDateTime:XT,_isoDuration:nM,_isoTime:QT,_jwt:qd,_ksuid:Fd,_lazy:cH,_length:Bs,_literal:QN,_lowercase:em,_lt:Hi,_lte:na,_map:ZN,_max:na,_maxLength:Rs,_maxSize:Is,_mime:rm,_min:Le,_minLength:Ho,_minSize:nr,_multipleOf:Qt,_nan:TM,_nanoid:Ld,_nativeEnum:qN,_negative:AM,_never:kM,_nonnegative:OM,_nonoptional:oH,_nonpositive:DM,_normalize:um,_null:SM,_nullable:aH,_number:eM,_optional:eH,_overwrite:Pi,_parse:fd,_parseAsync:gd,_pipe:uH,_positive:MM,_promise:hH,_property:wM,_readonly:sH,_record:WN,_refine:RM,_regex:nm,_safeParse:Sd,_safeParseAsync:vd,_set:JN,_size:Qd,_startsWith:om,_string:WT,_stringFormat:dm,_stringbool:HM,_success:tH,_superRefine:BM,_symbol:fM,_templateLiteral:lH,_toLowerCase:lm,_toUpperCase:cm,_transform:nH,_trim:sm,_tuple:CM,_uint32:uM,_uint64:mM,_ulid:xd,_undefined:gM,_union:UN,_unknown:cs,_uppercase:am,_url:Pd,_uuid:Nd,_uuidv4:Hd,_uuidv6:Gd,_uuidv7:Ed,_void:yM,_xid:$d,clone:aa,config:Te,flattenError:dd,formatError:md,function:EM,globalConfig:ts,globalRegistry:Bi,isValidBase64:Td,isValidBase64URL:uT,isValidJWT:cT,locales:UT,parse:Nh,parseAsync:Hh,prettifyError:zp,regexes:yb,registry:Rd,safeParse:jp,safeParseAsync:xp,toDotPath:Lp,toJSONSchema:PM,treeifyError:_p,util:nB,version:zb},Symbol.toStringTag,{value:"Module"})),mm=G("ZodISODateTime",(e,o)=>{qb.init(e,o),Un.init(e,o)});function _M(e){return XT(mm,e)}const fm=G("ZodISODate",(e,o)=>{Qb.init(e,o),Un.init(e,o)});function LM(e){return qT(fm,e)}const gm=G("ZodISOTime",(e,o)=>{nT.init(e,o),Un.init(e,o)});function zM(e){return QT(gm,e)}const Sm=G("ZodISODuration",(e,o)=>{eT.init(e,o),Un.init(e,o)});function jM(e){return nM(Sm,e)}const fH=Object.freeze(Object.defineProperty({__proto__:null,ZodISODate:fm,ZodISODateTime:mm,ZodISODuration:Sm,ZodISOTime:gm,date:LM,datetime:_M,duration:jM,time:zM},Symbol.toStringTag,{value:"Module"})),xM=(e,o)=>{hd.init(e,o),e.name="ZodError",Object.defineProperties(e,{format:{value:r=>md(e,r)},flatten:{value:r=>dd(e,r)},addIssue:{value:r=>{e.issues.push(r),e.message=JSON.stringify(e.issues,rs,2)}},addIssues:{value:r=>{e.issues.push(...r),e.message=JSON.stringify(e.issues,rs,2)}},isEmpty:{get(){return e.issues.length===0}}})},gH=G("ZodError",xM),hr=G("ZodError",xM,{Parent:Error}),$M=fd(hr),FM=gd(hr),UM=Sd(hr),YM=vd(hr),Mn=G("ZodType",(e,o)=>(gn.init(e,o),e.def=o,Object.defineProperty(e,"_def",{value:o}),e.check=(...r)=>e.clone({...o,checks:[...o.checks??[],...r.map(u=>typeof u=="function"?{_zod:{check:u,def:{check:"custom"},onattach:[]}}:u)]}),e.clone=(r,u)=>aa(e,r,u),e.brand=()=>e,e.register=(r,u)=>(r.add(e,u),e),e.parse=(r,u)=>$M(e,r,u,{callee:e.parse}),e.safeParse=(r,u)=>UM(e,r,u),e.parseAsync=async(r,u)=>FM(e,r,u,{callee:e.parseAsync}),e.safeParseAsync=async(r,u)=>YM(e,r,u),e.spa=e.safeParseAsync,e.refine=(r,u)=>e.check(RA(r,u)),e.superRefine=r=>e.check(BA(r)),e.overwrite=r=>e.check(Pi(r)),e.optional=()=>ms(e),e.nullable=()=>fs(e),e.nullish=()=>ms(fs(e)),e.nonoptional=r=>pA(e,r),e.array=()=>Lm(e),e.or=r=>jm([e,r]),e.and=r=>rA(e,r),e.transform=r=>gs(e,Fm(r)),e.default=r=>vA(e,r),e.prefault=r=>yA(e,r),e.catch=r=>MA(e,r),e.pipe=r=>gs(e,r),e.readonly=()=>OA(e),e.describe=r=>{const u=e.clone();return Bi.add(u,{description:r}),u},Object.defineProperty(e,"description",{get(){var r;return(r=Bi.get(e))==null?void 0:r.description},configurable:!0}),e.meta=(...r)=>{if(r.length===0)return Bi.get(e);const u=e.clone();return Bi.add(u,r[0]),u},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e)),vm=G("_ZodString",(e,o)=>{cr.init(e,o),Mn.init(e,o);const r=e._zod.bag;e.format=r.format??null,e.minLength=r.minimum??null,e.maxLength=r.maximum??null,e.regex=(...u)=>e.check(nm(...u)),e.includes=(...u)=>e.check(im(...u)),e.startsWith=(...u)=>e.check(om(...u)),e.endsWith=(...u)=>e.check(tm(...u)),e.min=(...u)=>e.check(Ho(...u)),e.max=(...u)=>e.check(Rs(...u)),e.length=(...u)=>e.check(Bs(...u)),e.nonempty=(...u)=>e.check(Ho(1,...u)),e.lowercase=u=>e.check(em(u)),e.uppercase=u=>e.check(am(u)),e.trim=()=>e.check(sm()),e.normalize=(...u)=>e.check(um(...u)),e.toLowerCase=()=>e.check(lm()),e.toUpperCase=()=>e.check(cm())}),Ns=G("ZodString",(e,o)=>{cr.init(e,o),vm.init(e,o),e.email=r=>e.check(Bd(km,r)),e.url=r=>e.check(Pd(ym,r)),e.jwt=r=>e.check(qd(Hm,r)),e.emoji=r=>e.check(_d(pm,r)),e.guid=r=>e.check(ls(hs,r)),e.uuid=r=>e.check(Nd(Ra,r)),e.uuidv4=r=>e.check(Hd(Ra,r)),e.uuidv6=r=>e.check(Gd(Ra,r)),e.uuidv7=r=>e.check(Ed(Ra,r)),e.nanoid=r=>e.check(Ld(bm,r)),e.guid=r=>e.check(ls(hs,r)),e.cuid=r=>e.check(zd(Tm,r)),e.cuid2=r=>e.check(jd(Mm,r)),e.ulid=r=>e.check(xd(Am,r)),e.base64=r=>e.check(Zd(Rm,r)),e.base64url=r=>e.check(Jd(Bm,r)),e.xid=r=>e.check($d(Dm,r)),e.ksuid=r=>e.check(Fd(Om,r)),e.ipv4=r=>e.check(Ud(wm,r)),e.ipv6=r=>e.check(Yd(Cm,r)),e.cidrv4=r=>e.check(Vd(Km,r)),e.cidrv6=r=>e.check(Wd(Im,r)),e.e164=r=>e.check(Xd(Nm,r)),e.datetime=r=>e.check(_M(r)),e.date=r=>e.check(LM(r)),e.time=r=>e.check(zM(r)),e.duration=r=>e.check(jM(r))});function Ph(e){return WT(Ns,e)}const Un=G("ZodStringFormat",(e,o)=>{Fn.init(e,o),vm.init(e,o)}),km=G("ZodEmail",(e,o)=>{$b.init(e,o),Un.init(e,o)});function SH(e){return Bd(km,e)}const hs=G("ZodGUID",(e,o)=>{jb.init(e,o),Un.init(e,o)});function vH(e){return ls(hs,e)}const Ra=G("ZodUUID",(e,o)=>{xb.init(e,o),Un.init(e,o)});function kH(e){return Nd(Ra,e)}function yH(e){return Hd(Ra,e)}function pH(e){return Gd(Ra,e)}function bH(e){return Ed(Ra,e)}const ym=G("ZodURL",(e,o)=>{Fb.init(e,o),Un.init(e,o)});function TH(e){return Pd(ym,e)}const pm=G("ZodEmoji",(e,o)=>{Ub.init(e,o),Un.init(e,o)});function MH(e){return _d(pm,e)}const bm=G("ZodNanoID",(e,o)=>{Yb.init(e,o),Un.init(e,o)});function AH(e){return Ld(bm,e)}const Tm=G("ZodCUID",(e,o)=>{Vb.init(e,o),Un.init(e,o)});function DH(e){return zd(Tm,e)}const Mm=G("ZodCUID2",(e,o)=>{Wb.init(e,o),Un.init(e,o)});function OH(e){return jd(Mm,e)}const Am=G("ZodULID",(e,o)=>{Zb.init(e,o),Un.init(e,o)});function wH(e){return xd(Am,e)}const Dm=G("ZodXID",(e,o)=>{Jb.init(e,o),Un.init(e,o)});function CH(e){return $d(Dm,e)}const Om=G("ZodKSUID",(e,o)=>{Xb.init(e,o),Un.init(e,o)});function KH(e){return Fd(Om,e)}const wm=G("ZodIPv4",(e,o)=>{aT.init(e,o),Un.init(e,o)});function IH(e){return Ud(wm,e)}const Cm=G("ZodIPv6",(e,o)=>{iT.init(e,o),Un.init(e,o)});function RH(e){return Yd(Cm,e)}const Km=G("ZodCIDRv4",(e,o)=>{oT.init(e,o),Un.init(e,o)});function BH(e){return Vd(Km,e)}const Im=G("ZodCIDRv6",(e,o)=>{tT.init(e,o),Un.init(e,o)});function NH(e){return Wd(Im,e)}const Rm=G("ZodBase64",(e,o)=>{rT.init(e,o),Un.init(e,o)});function HH(e){return Zd(Rm,e)}const Bm=G("ZodBase64URL",(e,o)=>{sT.init(e,o),Un.init(e,o)});function GH(e){return Jd(Bm,e)}const Nm=G("ZodE164",(e,o)=>{lT.init(e,o),Un.init(e,o)});function EH(e){return Xd(Nm,e)}const Hm=G("ZodJWT",(e,o)=>{hT.init(e,o),Un.init(e,o)});function PH(e){return qd(Hm,e)}const Gm=G("ZodCustomStringFormat",(e,o)=>{dT.init(e,o),Un.init(e,o)});function _H(e,o,r={}){return dm(Gm,e,o,r)}function LH(e){return dm(Gm,"hostname",yd,e)}const Hs=G("ZodNumber",(e,o)=>{Md.init(e,o),Mn.init(e,o),e.gt=(u,a)=>e.check(Gi(u,a)),e.gte=(u,a)=>e.check(Le(u,a)),e.min=(u,a)=>e.check(Le(u,a)),e.lt=(u,a)=>e.check(Hi(u,a)),e.lte=(u,a)=>e.check(na(u,a)),e.max=(u,a)=>e.check(na(u,a)),e.int=u=>e.check(_h(u)),e.safe=u=>e.check(_h(u)),e.positive=u=>e.check(Gi(0,u)),e.nonnegative=u=>e.check(Le(0,u)),e.negative=u=>e.check(Hi(0,u)),e.nonpositive=u=>e.check(na(0,u)),e.multipleOf=(u,a)=>e.check(Qt(u,a)),e.step=(u,a)=>e.check(Qt(u,a)),e.finite=()=>e;const r=e._zod.bag;e.minValue=Math.max(r.minimum??Number.NEGATIVE_INFINITY,r.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(r.maximum??Number.POSITIVE_INFINITY,r.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(r.format??"").includes("int")||Number.isSafeInteger(r.multipleOf??.5),e.isFinite=!0,e.format=r.format??null});function VM(e){return eM(Hs,e)}const _o=G("ZodNumberFormat",(e,o)=>{mT.init(e,o),Hs.init(e,o)});function _h(e){return iM(_o,e)}function zH(e){return oM(_o,e)}function jH(e){return tM(_o,e)}function xH(e){return rM(_o,e)}function $H(e){return uM(_o,e)}const Gs=G("ZodBoolean",(e,o)=>{Ad.init(e,o),Mn.init(e,o)});function WM(e){return sM(Gs,e)}const Es=G("ZodBigInt",(e,o)=>{Dd.init(e,o),Mn.init(e,o),e.gte=(u,a)=>e.check(Le(u,a)),e.min=(u,a)=>e.check(Le(u,a)),e.gt=(u,a)=>e.check(Gi(u,a)),e.gte=(u,a)=>e.check(Le(u,a)),e.min=(u,a)=>e.check(Le(u,a)),e.lt=(u,a)=>e.check(Hi(u,a)),e.lte=(u,a)=>e.check(na(u,a)),e.max=(u,a)=>e.check(na(u,a)),e.positive=u=>e.check(Gi(BigInt(0),u)),e.negative=u=>e.check(Hi(BigInt(0),u)),e.nonpositive=u=>e.check(na(BigInt(0),u)),e.nonnegative=u=>e.check(Le(BigInt(0),u)),e.multipleOf=(u,a)=>e.check(Qt(u,a));const r=e._zod.bag;e.minValue=r.minimum??null,e.maxValue=r.maximum??null,e.format=r.format??null});function FH(e){return cM(Es,e)}const Em=G("ZodBigIntFormat",(e,o)=>{fT.init(e,o),Es.init(e,o)});function UH(e){return dM(Em,e)}function YH(e){return mM(Em,e)}const ZM=G("ZodSymbol",(e,o)=>{gT.init(e,o),Mn.init(e,o)});function VH(e){return fM(ZM,e)}const JM=G("ZodUndefined",(e,o)=>{ST.init(e,o),Mn.init(e,o)});function WH(e){return gM(JM,e)}const XM=G("ZodNull",(e,o)=>{vT.init(e,o),Mn.init(e,o)});function qM(e){return SM(XM,e)}const QM=G("ZodAny",(e,o)=>{kT.init(e,o),Mn.init(e,o)});function ZH(){return vM(QM)}const nA=G("ZodUnknown",(e,o)=>{ss.init(e,o),Mn.init(e,o)});function ds(){return cs(nA)}const eA=G("ZodNever",(e,o)=>{yT.init(e,o),Mn.init(e,o)});function Pm(e){return kM(eA,e)}const aA=G("ZodVoid",(e,o)=>{pT.init(e,o),Mn.init(e,o)});function JH(e){return yM(aA,e)}const _m=G("ZodDate",(e,o)=>{bT.init(e,o),Mn.init(e,o),e.min=(u,a)=>e.check(Le(u,a)),e.max=(u,a)=>e.check(na(u,a));const r=e._zod.bag;e.minDate=r.minimum?new Date(r.minimum):null,e.maxDate=r.maximum?new Date(r.maximum):null});function XH(e){return pM(_m,e)}const iA=G("ZodArray",(e,o)=>{Od.init(e,o),Mn.init(e,o),e.element=o.element,e.min=(r,u)=>e.check(Ho(r,u)),e.nonempty=r=>e.check(Ho(1,r)),e.max=(r,u)=>e.check(Rs(r,u)),e.length=(r,u)=>e.check(Bs(r,u)),e.unwrap=()=>e.element});function Lm(e,o){return hm(iA,e,o)}function qH(e){const o=e._zod.def.shape;return mA(Object.keys(o))}const Ps=G("ZodObject",(e,o)=>{TT.init(e,o),Mn.init(e,o),In(e,"shape",()=>o.shape),e.keyof=()=>hA(Object.keys(e._zod.def.shape)),e.catchall=r=>e.clone({...e._zod.def,catchall:r}),e.passthrough=()=>e.clone({...e._zod.def,catchall:ds()}),e.loose=()=>e.clone({...e._zod.def,catchall:ds()}),e.strict=()=>e.clone({...e._zod.def,catchall:Pm()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=r=>Np(e,r),e.merge=r=>Hp(e,r),e.pick=r=>Rp(e,r),e.omit=r=>Bp(e,r),e.partial=(...r)=>Gp(Um,e,r[0]),e.required=(...r)=>Ep(Ym,e,r[0])});function QH(e,o){const r={type:"object",get shape(){return ga(this,"shape",e?Os(e):{}),this.shape},...W(o)};return new Ps(r)}function n2(e,o){return new Ps({type:"object",get shape(){return ga(this,"shape",Os(e)),this.shape},catchall:Pm(),...W(o)})}function e2(e,o){return new Ps({type:"object",get shape(){return ga(this,"shape",Os(e)),this.shape},catchall:ds(),...W(o)})}const zm=G("ZodUnion",(e,o)=>{wd.init(e,o),Mn.init(e,o),e.options=o.options});function jm(e,o){return new zm({type:"union",options:e,...W(o)})}const oA=G("ZodDiscriminatedUnion",(e,o)=>{zm.init(e,o),MT.init(e,o)});function a2(e,o,r){return new oA({type:"union",options:o,discriminator:e,...W(r)})}const tA=G("ZodIntersection",(e,o)=>{AT.init(e,o),Mn.init(e,o)});function rA(e,o){return new tA({type:"intersection",left:e,right:o})}const uA=G("ZodTuple",(e,o)=>{Ks.init(e,o),Mn.init(e,o),e.rest=r=>e.clone({...e._zod.def,rest:r})});function i2(e,o,r){const u=o instanceof gn,a=u?r:o,s=u?o:null;return new uA({type:"tuple",items:e,rest:s,...W(a)})}const xm=G("ZodRecord",(e,o)=>{DT.init(e,o),Mn.init(e,o),e.keyType=o.keyType,e.valueType=o.valueType});function sA(e,o,r){return new xm({type:"record",keyType:e,valueType:o,...W(r)})}function o2(e,o,r){const u=aa(e);return u._zod.values=void 0,new xm({type:"record",keyType:u,valueType:o,...W(r)})}const lA=G("ZodMap",(e,o)=>{OT.init(e,o),Mn.init(e,o),e.keyType=o.keyType,e.valueType=o.valueType});function t2(e,o,r){return new lA({type:"map",keyType:e,valueType:o,...W(r)})}const cA=G("ZodSet",(e,o)=>{wT.init(e,o),Mn.init(e,o),e.min=(...r)=>e.check(nr(...r)),e.nonempty=r=>e.check(nr(1,r)),e.max=(...r)=>e.check(Is(...r)),e.size=(...r)=>e.check(Qd(...r))});function r2(e,o){return new cA({type:"set",valueType:e,...W(o)})}const er=G("ZodEnum",(e,o)=>{CT.init(e,o),Mn.init(e,o),e.enum=o.entries,e.options=Object.values(o.entries);const r=new Set(Object.keys(o.entries));e.extract=(u,a)=>{const s={};for(const h of u)if(r.has(h))s[h]=o.entries[h];else throw new Error(`Key ${h} not found in enum`);return new er({...o,checks:[],...W(a),entries:s})},e.exclude=(u,a)=>{const s={...o.entries};for(const h of u)if(r.has(h))delete s[h];else throw new Error(`Key ${h} not found in enum`);return new er({...o,checks:[],...W(a),entries:s})}});function hA(e,o){const r=Array.isArray(e)?Object.fromEntries(e.map(u=>[u,u])):e;return new er({type:"enum",entries:r,...W(o)})}function u2(e,o){return new er({type:"enum",entries:e,...W(o)})}const dA=G("ZodLiteral",(e,o)=>{KT.init(e,o),Mn.init(e,o),e.values=new Set(o.values),Object.defineProperty(e,"value",{get(){if(o.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return o.values[0]}})});function mA(e,o){return new dA({type:"literal",values:Array.isArray(e)?e:[e],...W(o)})}const fA=G("ZodFile",(e,o)=>{IT.init(e,o),Mn.init(e,o),e.min=(r,u)=>e.check(nr(r,u)),e.max=(r,u)=>e.check(Is(r,u)),e.mime=(r,u)=>e.check(rm(Array.isArray(r)?r:[r],u))});function s2(e){return KM(fA,e)}const $m=G("ZodTransform",(e,o)=>{Cd.init(e,o),Mn.init(e,o),e._zod.parse=(r,u)=>{r.addIssue=s=>{if(typeof s=="string")r.issues.push(Bo(s,r.value,o));else{const h=s;h.fatal&&(h.continue=!1),h.code??(h.code="custom"),h.input??(h.input=r.value),h.inst??(h.inst=e),r.issues.push(Bo(h))}};const a=o.transform(r.value,r);return a instanceof Promise?a.then(s=>(r.value=s,r)):(r.value=a,r)}});function Fm(e){return new $m({type:"transform",transform:e})}const Um=G("ZodOptional",(e,o)=>{RT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function ms(e){return new Um({type:"optional",innerType:e})}const gA=G("ZodNullable",(e,o)=>{BT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function fs(e){return new gA({type:"nullable",innerType:e})}function l2(e){return ms(fs(e))}const SA=G("ZodDefault",(e,o)=>{NT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function vA(e,o){return new SA({type:"default",innerType:e,get defaultValue(){return typeof o=="function"?o():o}})}const kA=G("ZodPrefault",(e,o)=>{HT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function yA(e,o){return new kA({type:"prefault",innerType:e,get defaultValue(){return typeof o=="function"?o():o}})}const Ym=G("ZodNonOptional",(e,o)=>{GT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function pA(e,o){return new Ym({type:"nonoptional",innerType:e,...W(o)})}const bA=G("ZodSuccess",(e,o)=>{ET.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function c2(e){return new bA({type:"success",innerType:e})}const TA=G("ZodCatch",(e,o)=>{PT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function MA(e,o){return new TA({type:"catch",innerType:e,catchValue:typeof o=="function"?o:()=>o})}const AA=G("ZodNaN",(e,o)=>{_T.init(e,o),Mn.init(e,o)});function h2(e){return TM(AA,e)}const Vm=G("ZodPipe",(e,o)=>{Kd.init(e,o),Mn.init(e,o),e.in=o.in,e.out=o.out});function gs(e,o){return new Vm({type:"pipe",in:e,out:o})}const DA=G("ZodReadonly",(e,o)=>{LT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function OA(e){return new DA({type:"readonly",innerType:e})}const wA=G("ZodTemplateLiteral",(e,o)=>{zT.init(e,o),Mn.init(e,o)});function d2(e,o){return new wA({type:"template_literal",parts:e,...W(o)})}const CA=G("ZodLazy",(e,o)=>{xT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.getter()});function KA(e){return new CA({type:"lazy",getter:e})}const IA=G("ZodPromise",(e,o)=>{jT.init(e,o),Mn.init(e,o),e.unwrap=()=>e._zod.def.innerType});function m2(e){return new IA({type:"promise",innerType:e})}const _s=G("ZodCustom",(e,o)=>{$T.init(e,o),Mn.init(e,o)});function f2(e){const o=new Qn({check:"custom"});return o._zod.check=e,o}function g2(e,o){return IM(_s,e??(()=>!0),o)}function RA(e,o={}){return RM(_s,e,o)}function BA(e){return BM(e)}function S2(e,o={error:`Input not instance of ${e.name}`}){const r=new _s({type:"custom",check:"custom",fn:u=>u instanceof e,abort:!0,...W(o)});return r._zod.bag.Class=e,r}const v2=(...e)=>HM({Pipe:Vm,Boolean:Gs,String:Ns,Transform:$m},...e);function k2(e){const o=KA(()=>jm([Ph(e),VM(),WM(),qM(),Lm(o),sA(Ph(),o)]));return o}function y2(e,o){return gs(Fm(e),o)}const p2={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};function b2(e){Te({customError:e})}function T2(){return Te().customError}var Lh;Lh||(Lh={});function M2(e){return ZT(Ns,e)}function A2(e){return aM(Hs,e)}function D2(e){return lM(Gs,e)}function O2(e){return hM(Es,e)}function w2(e){return bM(_m,e)}const C2=Object.freeze(Object.defineProperty({__proto__:null,bigint:O2,boolean:D2,date:w2,number:A2,string:M2},Symbol.toStringTag,{value:"Module"}));Te(FT());const da=Object.freeze(Object.defineProperty({__proto__:null,$brand:Ap,$input:VT,$output:YT,NEVER:Mp,TimePrecision:JT,ZodAny:QM,ZodArray:iA,ZodBase64:Rm,ZodBase64URL:Bm,ZodBigInt:Es,ZodBigIntFormat:Em,ZodBoolean:Gs,ZodCIDRv4:Km,ZodCIDRv6:Im,ZodCUID:Tm,ZodCUID2:Mm,ZodCatch:TA,ZodCustom:_s,ZodCustomStringFormat:Gm,ZodDate:_m,ZodDefault:SA,ZodDiscriminatedUnion:oA,ZodE164:Nm,ZodEmail:km,ZodEmoji:pm,ZodEnum:er,ZodError:gH,ZodFile:fA,get ZodFirstPartyTypeKind(){return Lh},ZodGUID:hs,ZodIPv4:wm,ZodIPv6:Cm,ZodISODate:fm,ZodISODateTime:mm,ZodISODuration:Sm,ZodISOTime:gm,ZodIntersection:tA,ZodIssueCode:p2,ZodJWT:Hm,ZodKSUID:Om,ZodLazy:CA,ZodLiteral:dA,ZodMap:lA,ZodNaN:AA,ZodNanoID:bm,ZodNever:eA,ZodNonOptional:Ym,ZodNull:XM,ZodNullable:gA,ZodNumber:Hs,ZodNumberFormat:_o,ZodObject:Ps,ZodOptional:Um,ZodPipe:Vm,ZodPrefault:kA,ZodPromise:IA,ZodReadonly:DA,ZodRealError:hr,ZodRecord:xm,ZodSet:cA,ZodString:Ns,ZodStringFormat:Un,ZodSuccess:bA,ZodSymbol:ZM,ZodTemplateLiteral:wA,ZodTransform:$m,ZodTuple:uA,ZodType:Mn,ZodULID:Am,ZodURL:ym,ZodUUID:Ra,ZodUndefined:JM,ZodUnion:zm,ZodUnknown:nA,ZodVoid:aA,ZodXID:Dm,_ZodString:vm,_default:vA,any:ZH,array:Lm,base64:HH,base64url:GH,bigint:FH,boolean:WM,catch:MA,check:f2,cidrv4:BH,cidrv6:NH,clone:aa,coerce:C2,config:Te,core:mH,cuid:DH,cuid2:OH,custom:g2,date:XH,discriminatedUnion:a2,e164:EH,email:SH,emoji:MH,endsWith:tm,enum:hA,file:s2,flattenError:dd,float32:zH,float64:jH,formatError:md,function:EM,getErrorMap:T2,globalRegistry:Bi,gt:Gi,gte:Le,guid:vH,hostname:LH,includes:im,instanceof:S2,int:_h,int32:xH,int64:UH,intersection:rA,ipv4:IH,ipv6:RH,iso:fH,json:k2,jwt:PH,keyof:qH,ksuid:KH,lazy:KA,length:Bs,literal:mA,locales:UT,looseObject:e2,lowercase:em,lt:Hi,lte:na,map:t2,maxLength:Rs,maxSize:Is,mime:rm,minLength:Ho,minSize:nr,multipleOf:Qt,nan:h2,nanoid:AH,nativeEnum:u2,negative:AM,never:Pm,nonnegative:OM,nonoptional:pA,nonpositive:DM,normalize:um,null:qM,nullable:fs,nullish:l2,number:VM,object:QH,optional:ms,overwrite:Pi,parse:$M,parseAsync:FM,partialRecord:o2,pipe:gs,positive:MM,prefault:yA,preprocess:y2,prettifyError:zp,promise:m2,property:wM,readonly:OA,record:sA,refine:RA,regex:nm,regexes:yb,registry:Rd,safeParse:UM,safeParseAsync:YM,set:r2,setErrorMap:b2,size:Qd,startsWith:om,strictObject:n2,string:Ph,stringFormat:_H,stringbool:v2,success:c2,superRefine:BA,symbol:VH,templateLiteral:d2,toJSONSchema:PM,toLowerCase:lm,toUpperCase:cm,transform:Fm,treeifyError:_p,trim:sm,tuple:i2,uint32:$H,uint64:YH,ulid:wH,undefined:WH,union:jm,unknown:ds,uppercase:am,url:TH,uuid:kH,uuidv4:yH,uuidv6:pH,uuidv7:bH,void:JH,xid:CH},Symbol.toStringTag,{value:"Module"})),Wm=_R.split(`
`).map(e=>e.trim());Wm.filter((e,o)=>o%2===1);Wm.filter((e,o)=>o%2===0);const NA=LR.split(`
`).map(e=>e.trim());NA.filter((e,o)=>o%2===1);const K2=NA.filter((e,o)=>o%2===0),I2=da.enum(jC),R2=da.enum(Jh),B2=da.enum(xC),N2=da.object({status:B2,guesses:da.array(da.string())}),H2=da.record(da.string(),N2),G2=da.object(Object.fromEntries(R2.options.map(e=>[e,H2.optional()]))),Xk=da.object(Object.fromEntries(I2.options.map(e=>[e,G2.optional()]))),HA=T.createContext(void 0),Zm=()=>{const e=T.useContext(HA);if(!e)throw new Error("useGuessStateContext must be used within the provider!");return e},E2=({children:e})=>{const[o,r]=T.useState(()=>{const g=localStorage.getItem("guessStates");return console.log(g?JSON.parse(g):{}),g?JSON.parse(g):{}});T.useEffect(()=>{localStorage.setItem("guessStates",JSON.stringify(o))},[o]);const u=T.useCallback((g,m,f,v,y)=>{r(M=>{var p,w;const C=M[g]??{},D=((w=(p=C[m])==null?void 0:p[f])==null?void 0:w.guesses)??[],R=v!=null?[...D,v]:D;return{...M,[g]:{...C,[m]:{...C[m]||{},[f]:{status:y,guesses:R}}}}})},[]),a=T.useCallback(g=>r(g),[]),s=T.useCallback(()=>{const g=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),m=URL.createObjectURL(g),f=document.createElement("a");f.href=m,f.download="GuessTheAnimeOpeningEndingProgress.json",f.click(),URL.revokeObjectURL(m)},[o]),h=T.useMemo(()=>({guessStates:o,updateGuessStates:u,loadGuessStates:a,saveGuessStates:s}),[o,s]);return x.jsx(HA.Provider,{value:h,children:e})};function P2({song_id:e}){var s,h,g;const{mode:o}=tr(),{filter:r}=rr(),{guessStates:u}=Zm(),a=((g=(h=(s=u[o])==null?void 0:s[r])==null?void 0:h[e])==null?void 0:g.status)??"None";return x.jsx("div",{className:`Song ${a}`,children:e})}function _2(){const{filter:e}=rr();return x.jsx("div",{className:"FilterTitle",children:e})}function L2(){const e=rr();return x.jsxs("div",{className:"SongListContainer",children:[x.jsx(_2,{}),x.jsx("div",{className:"OpeningsSongList",children:[...Array(wo)].map((o,r)=>{const u=r+1;return x.jsx(li,{className:"linky",to:`/guess?id=${u}&filter=${e.filter}`,children:x.jsx(P2,{song_id:u})},u)})})]})}function z2(e){const o=Yt.useRef(null),r=T.useCallback(()=>{o.current&&(o.current.value="",o.current.click())},[]);return{FileInput:x.jsx("input",{ref:o,type:"file",accept:".json,application/json",style:{display:"none"},onChange:async a=>{var g;const s=(g=a.target.files)==null?void 0:g[0];if(!s)return;const h=await s.text();try{const m=JSON.parse(h),f=Xk.safeParse(m);console.log(Xk.strict),f.success?e(f.data):e(null)}catch{e(null)}}}),openPicker:r}}const j2=({type:e,message:o,onDone:r,duration:u=3e3})=>(T.useEffect(()=>{const a=setTimeout(r,u);return()=>clearTimeout(a)},[u,r]),x.jsx("div",{className:`Alert ${e==="Success"?"Success":"Error"}`,children:o}));function x2(){const[e,o]=T.useState(null),{saveGuessStates:r,loadGuessStates:u}=Zm(),{FileInput:a,openPicker:s}=z2(h=>{h?(u(h),o({type:"Success",msg:"File loaded!"})):o({type:"Error",msg:"Invalid JSON"})});return x.jsxs(x.Fragment,{children:[a," ",x.jsxs("div",{className:"SaveLoad",children:[x.jsx("button",{className:"SaveButton bg-gray-500 text-white px-4 py-2 rounded",onClick:r,children:"Save Progress"}),x.jsx("button",{className:"LoadButton bg-gray-500 text-white px-4 py-2 rounded",onClick:s,children:"Load Progress"}),e&&x.jsx(j2,{type:e.type,message:e.msg,onDone:()=>o(null)})]})]})}function $2(){const{mode:e}=tr();return e==="Opening"?x.jsx("div",{className:"MainFilter",children:x.jsxs("div",{className:"MainContent",children:[x.jsx(PR,{}),x.jsx(L2,{}),x.jsx(x2,{})]})}):x.jsx("div",{children:"Under Construction"})}var gh={exports:{}},Sh,qk;function F2(){if(qk)return Sh;qk=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sh=e,Sh}var vh,Qk;function U2(){if(Qk)return vh;Qk=1;var e=F2();function o(){}function r(){}return r.resetWarningCache=o,vh=function(){function u(h,g,m,f,v,y){if(y!==e){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}u.isRequired=u;function a(){return u}var s={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:a,element:u,elementType:u,instanceOf:a,node:u,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:o};return s.PropTypes=s,s},vh}var ny;function Y2(){return ny||(ny=1,gh.exports=U2()()),gh.exports}var V2=Y2();const ge=Ss(V2);var kh,ey;function W2(){return ey||(ey=1,kh=function e(o,r){if(o===r)return!0;if(o&&r&&typeof o=="object"&&typeof r=="object"){if(o.constructor!==r.constructor)return!1;var u,a,s;if(Array.isArray(o)){if(u=o.length,u!=r.length)return!1;for(a=u;a--!==0;)if(!e(o[a],r[a]))return!1;return!0}if(o.constructor===RegExp)return o.source===r.source&&o.flags===r.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===r.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===r.toString();if(s=Object.keys(o),u=s.length,u!==Object.keys(r).length)return!1;for(a=u;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[a]))return!1;for(a=u;a--!==0;){var h=s[a];if(!e(o[h],r[h]))return!1}return!0}return o!==o&&r!==r}),kh}var Z2=W2();const J2=Ss(Z2);var Hu={exports:{}},yh,ay;function X2(){if(ay)return yh;ay=1;var e;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return e=function(){var o={},r={};return o.on=function(u,a){var s={name:u,handler:a};return r[u]=r[u]||[],r[u].unshift(s),s},o.off=function(u){var a=r[u.name].indexOf(u);a!==-1&&r[u.name].splice(a,1)},o.trigger=function(u,a){var s=r[u],h;if(s)for(h=s.length;h--;)s[h].handler(a)},o},yh=e,yh}var Gu={exports:{}},ph,iy;function q2(){if(iy)return ph;iy=1,ph=function(a,s,h){var g=document.head||document.getElementsByTagName("head")[0],m=document.createElement("script");typeof s=="function"&&(h=s,s={}),s=s||{},h=h||function(){},m.type=s.type||"text/javascript",m.charset=s.charset||"utf8",m.async="async"in s?!!s.async:!0,m.src=a,s.attrs&&e(m,s.attrs),s.text&&(m.text=""+s.text);var f="onload"in m?o:r;f(m,h),m.onload||o(m,h),g.appendChild(m)};function e(u,a){for(var s in a)u.setAttribute(s,a[s])}function o(u,a){u.onload=function(){this.onerror=this.onload=null,a(null,u)},u.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+this.src),u)}}function r(u,a){u.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,a(null,u))}}return ph}var oy;function Q2(){return oy||(oy=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var r=q2(),u=a(r);function a(s){return s&&s.__esModule?s:{default:s}}o.default=function(s){var h=new Promise(function(g){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){g(window.YT);return}else{var m=window.location.protocol==="http:"?"http:":"https:";(0,u.default)(m+"//www.youtube.com/iframe_api",function(v){v&&s.trigger("error",v)})}var f=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){f&&f(),g(window.YT)}});return h},e.exports=o.default}(Gu,Gu.exports)),Gu.exports}var Eu={exports:{}},Pu={exports:{}},_u={exports:{}},bh,ty;function nG(){if(ty)return bh;ty=1;var e=1e3,o=e*60,r=o*60,u=r*24,a=u*365.25;bh=function(f,v){v=v||{};var y=typeof f;if(y==="string"&&f.length>0)return s(f);if(y==="number"&&isNaN(f)===!1)return v.long?g(f):h(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function s(f){if(f=String(f),!(f.length>100)){var v=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(f);if(v){var y=parseFloat(v[1]),M=(v[2]||"ms").toLowerCase();switch(M){case"years":case"year":case"yrs":case"yr":case"y":return y*a;case"days":case"day":case"d":return y*u;case"hours":case"hour":case"hrs":case"hr":case"h":return y*r;case"minutes":case"minute":case"mins":case"min":case"m":return y*o;case"seconds":case"second":case"secs":case"sec":case"s":return y*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return y;default:return}}}}function h(f){return f>=u?Math.round(f/u)+"d":f>=r?Math.round(f/r)+"h":f>=o?Math.round(f/o)+"m":f>=e?Math.round(f/e)+"s":f+"ms"}function g(f){return m(f,u,"day")||m(f,r,"hour")||m(f,o,"minute")||m(f,e,"second")||f+" ms"}function m(f,v,y){if(!(f<v))return f<v*1.5?Math.floor(f/v)+" "+y:Math.ceil(f/v)+" "+y+"s"}return bh}var ry;function eG(){return ry||(ry=1,function(e,o){o=e.exports=a.debug=a.default=a,o.coerce=m,o.disable=h,o.enable=s,o.enabled=g,o.humanize=nG(),o.names=[],o.skips=[],o.formatters={};var r;function u(f){var v=0,y;for(y in f)v=(v<<5)-v+f.charCodeAt(y),v|=0;return o.colors[Math.abs(v)%o.colors.length]}function a(f){function v(){if(v.enabled){var y=v,M=+new Date,C=M-(r||M);y.diff=C,y.prev=r,y.curr=M,r=M;for(var D=new Array(arguments.length),R=0;R<D.length;R++)D[R]=arguments[R];D[0]=o.coerce(D[0]),typeof D[0]!="string"&&D.unshift("%O");var b=0;D[0]=D[0].replace(/%([a-zA-Z%])/g,function(w,A){if(w==="%%")return w;b++;var P=o.formatters[A];if(typeof P=="function"){var I=D[b];w=P.call(y,I),D.splice(b,1),b--}return w}),o.formatArgs.call(y,D);var p=v.log||o.log||console.log.bind(console);p.apply(y,D)}}return v.namespace=f,v.enabled=o.enabled(f),v.useColors=o.useColors(),v.color=u(f),typeof o.init=="function"&&o.init(v),v}function s(f){o.save(f),o.names=[],o.skips=[];for(var v=(typeof f=="string"?f:"").split(/[\s,]+/),y=v.length,M=0;M<y;M++)v[M]&&(f=v[M].replace(/\*/g,".*?"),f[0]==="-"?o.skips.push(new RegExp("^"+f.substr(1)+"$")):o.names.push(new RegExp("^"+f+"$")))}function h(){o.enable("")}function g(f){var v,y;for(v=0,y=o.skips.length;v<y;v++)if(o.skips[v].test(f))return!1;for(v=0,y=o.names.length;v<y;v++)if(o.names[v].test(f))return!0;return!1}function m(f){return f instanceof Error?f.stack||f.message:f}}(_u,_u.exports)),_u.exports}var uy;function aG(){return uy||(uy=1,function(e,o){var r={};o=e.exports=eG(),o.log=s,o.formatArgs=a,o.save=h,o.load=g,o.useColors=u,o.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:m(),o.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function u(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}o.formatters.j=function(f){try{return JSON.stringify(f)}catch(v){return"[UnexpectedJSONParseError]: "+v.message}};function a(f){var v=this.useColors;if(f[0]=(v?"%c":"")+this.namespace+(v?" %c":" ")+f[0]+(v?"%c ":" ")+"+"+o.humanize(this.diff),!!v){var y="color: "+this.color;f.splice(1,0,y,"color: inherit");var M=0,C=0;f[0].replace(/%[a-zA-Z%]/g,function(D){D!=="%%"&&(M++,D==="%c"&&(C=M))}),f.splice(C,0,y)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function h(f){try{f==null?o.storage.removeItem("debug"):o.storage.debug=f}catch{}}function g(){var f;try{f=o.storage.debug}catch{}return!f&&typeof process<"u"&&"env"in process&&(f=r.DEBUG),f}o.enable(g());function m(){try{return window.localStorage}catch{}}}(Pu,Pu.exports)),Pu.exports}var Lu={exports:{}},sy;function iG(){return sy||(sy=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=o.default}(Lu,Lu.exports)),Lu.exports}var zu={exports:{}},ly;function oG(){return ly||(ly=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=o.default}(zu,zu.exports)),zu.exports}var ju={exports:{}},xu={exports:{}},cy;function tG(){return cy||(cy=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=o.default}(xu,xu.exports)),xu.exports}var hy;function rG(){return hy||(hy=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var r=tG(),u=a(r);function a(s){return s&&s.__esModule?s:{default:s}}o.default={pauseVideo:{acceptableStates:[u.default.ENDED,u.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[u.default.ENDED,u.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[u.default.ENDED,u.default.PLAYING,u.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=o.default}(ju,ju.exports)),ju.exports}var dy;function uG(){return dy||(dy=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var r=aG(),u=v(r),a=iG(),s=v(a),h=oG(),g=v(h),m=rG(),f=v(m);function v(C){return C&&C.__esModule?C:{default:C}}var y=(0,u.default)("youtube-player"),M={};M.proxyEvents=function(C){var D={},R=function(F){var Q="on"+F.slice(0,1).toUpperCase()+F.slice(1);D[Q]=function(tn){y('event "%s"',Q,tn),C.trigger(F,tn)}},b=!0,p=!1,w=void 0;try{for(var A=g.default[Symbol.iterator](),P;!(b=(P=A.next()).done);b=!0){var I=P.value;R(I)}}catch(U){p=!0,w=U}finally{try{!b&&A.return&&A.return()}finally{if(p)throw w}}return D},M.promisifyPlayer=function(C){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,R={},b=function(Q){D&&f.default[Q]?R[Q]=function(){for(var tn=arguments.length,bn=Array(tn),vn=0;vn<tn;vn++)bn[vn]=arguments[vn];return C.then(function(nn){var kn=f.default[Q],Rn=nn.getPlayerState(),fn=nn[Q].apply(nn,bn);return kn.stateChangeRequired||Array.isArray(kn.acceptableStates)&&kn.acceptableStates.indexOf(Rn)===-1?new Promise(function(L){var Z=function en(){var An=nn.getPlayerState(),K=void 0;typeof kn.timeout=="number"&&(K=setTimeout(function(){nn.removeEventListener("onStateChange",en),L()},kn.timeout)),Array.isArray(kn.acceptableStates)&&kn.acceptableStates.indexOf(An)!==-1&&(nn.removeEventListener("onStateChange",en),clearTimeout(K),L())};nn.addEventListener("onStateChange",Z)}).then(function(){return fn}):fn})}:R[Q]=function(){for(var tn=arguments.length,bn=Array(tn),vn=0;vn<tn;vn++)bn[vn]=arguments[vn];return C.then(function(nn){return nn[Q].apply(nn,bn)})}},p=!0,w=!1,A=void 0;try{for(var P=s.default[Symbol.iterator](),I;!(p=(I=P.next()).done);p=!0){var U=I.value;b(U)}}catch(F){w=!0,A=F}finally{try{!p&&P.return&&P.return()}finally{if(w)throw A}}return R},o.default=M,e.exports=o.default}(Eu,Eu.exports)),Eu.exports}var my;function sG(){return my||(my=1,function(e,o){Object.defineProperty(o,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},u=X2(),a=f(u),s=Q2(),h=f(s),g=uG(),m=f(g);function f(y){return y&&y.__esModule?y:{default:y}}var v=void 0;o.default=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,D=(0,a.default)();if(v||(v=(0,h.default)(D)),M.events)throw new Error("Event handlers cannot be overwritten.");if(typeof y=="string"&&!document.getElementById(y))throw new Error('Element "'+y+'" does not exist.');M.events=m.default.proxyEvents(D);var R=new Promise(function(p){if((typeof y>"u"?"undefined":r(y))==="object"&&y.playVideo instanceof Function){var w=y;p(w)}else v.then(function(A){var P=new A.Player(y,M);return D.on("ready",function(){p(P)}),null})}),b=m.default.promisifyPlayer(R,C);return b.on=D.on,b.off=D.off,b},e.exports=o.default}(Hu,Hu.exports)),Hu.exports}var lG=sG();const cG=Ss(lG);var hG=Object.defineProperty,dG=Object.defineProperties,mG=Object.getOwnPropertyDescriptors,fy=Object.getOwnPropertySymbols,fG=Object.prototype.hasOwnProperty,gG=Object.prototype.propertyIsEnumerable,gy=(e,o,r)=>o in e?hG(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,zh=(e,o)=>{for(var r in o||(o={}))fG.call(o,r)&&gy(e,r,o[r]);if(fy)for(var r of fy(o))gG.call(o,r)&&gy(e,r,o[r]);return e},jh=(e,o)=>dG(e,mG(o)),SG=(e,o,r)=>new Promise((u,a)=>{var s=m=>{try{g(r.next(m))}catch(f){a(f)}},h=m=>{try{g(r.throw(m))}catch(f){a(f)}},g=m=>m.done?u(m.value):Promise.resolve(m.value).then(s,h);g((r=r.apply(e,o)).next())});function vG(e,o){var r,u;if(e.videoId!==o.videoId)return!0;const a=((r=e.opts)==null?void 0:r.playerVars)||{},s=((u=o.opts)==null?void 0:u.playerVars)||{};return a.start!==s.start||a.end!==s.end}function Sy(e={}){return jh(zh({},e),{height:0,width:0,playerVars:jh(zh({},e.playerVars),{autoplay:0,start:0,end:0})})}function kG(e,o){return e.videoId!==o.videoId||!J2(Sy(e.opts),Sy(o.opts))}function yG(e,o){var r,u,a,s;return e.id!==o.id||e.className!==o.className||((r=e.opts)==null?void 0:r.width)!==((u=o.opts)==null?void 0:u.width)||((a=e.opts)==null?void 0:a.height)!==((s=o.opts)==null?void 0:s.height)||e.iframeClassName!==o.iframeClassName||e.title!==o.title}var pG={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},bG={videoId:ge.string,id:ge.string,className:ge.string,iframeClassName:ge.string,style:ge.object,title:ge.string,loading:ge.oneOf(["lazy","eager"]),opts:ge.objectOf(ge.any),onReady:ge.func,onError:ge.func,onPlay:ge.func,onPause:ge.func,onEnd:ge.func,onStateChange:ge.func,onPlaybackRateChange:ge.func,onPlaybackQualityChange:ge.func},Zu=class extends Yt.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=o=>{var r,u;return(u=(r=this.props).onReady)==null?void 0:u.call(r,o)},this.onPlayerError=o=>{var r,u;return(u=(r=this.props).onError)==null?void 0:u.call(r,o)},this.onPlayerStateChange=o=>{var r,u,a,s,h,g,m,f;switch((u=(r=this.props).onStateChange)==null||u.call(r,o),o.data){case Zu.PlayerState.ENDED:(s=(a=this.props).onEnd)==null||s.call(a,o);break;case Zu.PlayerState.PLAYING:(g=(h=this.props).onPlay)==null||g.call(h,o);break;case Zu.PlayerState.PAUSED:(f=(m=this.props).onPause)==null||f.call(m,o);break}},this.onPlayerPlaybackRateChange=o=>{var r,u;return(u=(r=this.props).onPlaybackRateChange)==null?void 0:u.call(r,o)},this.onPlayerPlaybackQualityChange=o=>{var r,u;return(u=(r=this.props).onPlaybackQualityChange)==null?void 0:u.call(r,o)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const o=jh(zh({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=cG(this.container,o),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var o;(o=this.internalPlayer)==null||o.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var o,r,u,a;if(typeof this.props.videoId>"u"||this.props.videoId===null){(o=this.internalPlayer)==null||o.stopVideo();return}let s=!1;const h={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(h.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(h.endSeconds=this.props.opts.playerVars.end)),s){(u=this.internalPlayer)==null||u.loadVideoById(h);return}(a=this.internalPlayer)==null||a.cueVideoById(h)},this.refContainer=o=>{this.container=o},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return SG(this,null,function*(){yG(e,this.props)&&this.updatePlayer(),kG(e,this.props)&&(yield this.resetPlayer()),vG(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return Yt.createElement("div",{className:this.props.className,style:this.props.style},Yt.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Ls=Zu;Ls.propTypes=bG;Ls.defaultProps=pG;Ls.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var TG=Ls;const $t=[1,2,5,10,15,30];function MG({hintsRevealed:e,videoId:o,showVideo:r}){const[u,a]=T.useState(0),[s,h]=T.useState(!1),g=T.useRef(null),[m,f]=T.useState(50),[v,y]=T.useState(!1),M=Hy(),C=w=>{g.current=w.target,g.current.setVolume(m),y(!0),h(!1),a(0)},D=()=>{g.current&&(g.current.getPlayerState()===window.YT.PlayerState.CUED||g.current.getPlayerState()===window.YT.PlayerState.PAUSED?(console.log("clicked"),g.current.playVideo(),h(!0)):g.current.getPlayerState()===window.YT.PlayerState.PLAYING&&(g.current.pauseVideo(),h(!1)))},R=()=>{g.current&&(g.current.seekTo(0),g.current.pauseVideo(),g.current.playVideo(),g.current.pauseVideo(),h(!1),a(0))};T.useEffect(()=>{R()},[e]),T.useEffect(()=>{let w;return s&&g.current&&(w=setInterval(()=>{const A=g.current.getCurrentTime();typeof A=="number"&&(a(Math.floor(A)),A>$t[e]&&R())},500)),()=>clearInterval(w)},[s,e]);const b=w=>{const A=Math.floor(Number.parseInt(w.target.value));a(A),h(!0),g.current.seekTo(A),g.current.playVideo()},p=w=>{const A=Number.parseInt(w.target.value);f(A),g&&(g.current.setVolume(A),A<1?g.current.mute():g.current.unMute())};return x.jsxs("div",{className:"MediaContainer",children:[x.jsx("div",{className:`${r?"FullSizeVideoContainer":"YouTubeContainer"}`,children:x.jsx(TG,{videoId:o,onReady:C,opts:{width:`${M?r?360:0:r?640:0}`,height:`${M?r?240:0:r?360:0}`,playerVars:{autoplay:0,controls:1,modestbranding:1,rel:0,enablejsapi:1}}})}),!r&&x.jsxs("div",{className:"Media",children:[x.jsx("div",{className:"PlayButtonContainer",children:x.jsx("button",{className:`PlayPauseButton ${s?"Pause":"Play"}`,onClick:D,disabled:!v})}),x.jsxs("div",{className:"SlidersContainer",children:[x.jsxs("div",{className:"PlayTimeBar",children:[x.jsx("span",{className:"TimeShow",children:Math.min(u,$t[e])}),x.jsx("input",{className:"Progress",type:"range",min:"0",max:$t[e],value:Math.min(u,$t[e]),onChange:w=>b(w)}),x.jsx("span",{className:"TimeShow",children:$t[e]})]}),x.jsx("div",{className:"VolumeSlider",children:x.jsx("input",{className:"Slider",type:"range",min:"0",max:"100",value:m,onChange:w=>p(w)})})]})]})]})}function AG({onSubmit:e,guesses:o,won:r,disabled:u}){const[a,s]=T.useState(""),[h,g]=T.useState(null),[m,f]=T.useState(-1),v=T.useRef(null),{mode:y}=tr(),M=y==="Opening"?Wm:K2,[C,D]=T.useState([]);T.useEffect(()=>{const A=a?M.filter(P=>{const I=P.toLowerCase(),U=a.toLocaleLowerCase(),F=I.split(" "),Q=F.filter((vn,nn)=>F.slice(nn).join(" ").startsWith(U)).length>0,tn=o.filter(vn=>vn.trim().toLowerCase()===P.toLowerCase()).length>0,bn=h?I!=h.toLowerCase():!0;return Q&&!tn&&bn}):[];D(A.splice(0,5))},[a]),T.useEffect(()=>{var A;(A=v.current)==null||A.focus()},[]);const R=()=>{setTimeout(()=>{var A;return(A=v.current)==null?void 0:A.focus()},0)},b=A=>{g(A),s(A),f(-1)},p=()=>{var A;e(h?h.trim():"Skipped!"),s(""),f(-1),g(null),(A=v.current)==null||A.focus()},w=A=>{if(A.key==="ArrowDown")A.preventDefault(),f(P=>P<C.length-1?P+1:0);else if(A.key==="ArrowUp")A.preventDefault(),f(P=>P>0?P-1:C.length-1);else if(A.key==="Enter")if(m>=0&&m<C.length){const P=C[m];b(P)}else h&&h.trim()!==""?p():C.length>0&&v.current&&(g(v.current.value),p())};return x.jsxs("div",{className:"GuessContainer",children:[o.length>0&&x.jsx("ul",{className:"GuessedList",children:o.map((A,P)=>x.jsx("li",{className:r&&P==o.length-1?"CorrectGuess":"IncorrectGuess",children:A},`guess_${A}_${P}`))}),!u&&x.jsxs("div",{children:[x.jsx("input",{type:"text",ref:v,disabled:u,id:"SearchBar",className:"SearchBar",placeholder:"Guess...",value:a,onChange:A=>{s(A.target.value),g(null),f(-1)},onKeyDown:w,onBlur:R}),x.jsx("button",{className:"SubmitSearchButton bg-gray-500 text-white px-4 py-2 rounded",onClick:p,children:`${h?"Guess!":"Skip"}`})]}),C.length>0&&x.jsx("ul",{className:"AnimeSearchList",children:C.map((A,P)=>x.jsx("li",{className:`AnimeItem ${P==m?"Highlighted":""}`,onClick:()=>{s(A),g(A)},onMouseDown:()=>b(A),children:A},`${A}_${P}`))})]})}function DG({hintsRevealed:e,song:o,endGameState:r}){const u=["num_episodes","year_released","genres","score","studio"];return x.jsx("div",{className:"HintContainer",children:o&&u.map((a,s)=>s<e||r?x.jsxs("div",{className:`Hint ${s==e-1?"NewHint":""}`,style:s==e-1?{animation:`flipHints 0.1s ease-in ${Math.floor(Math.random()*5)+3}`}:{animation:"none"},children:[a,": ",o[a]]}):x.jsx("div",{className:"Hint Hidden",children:"??????????"}))})}function OG(){const e=Fh(),o=Pa(),[r,u]=T.useState(null),[a,s]=T.useState(null),[h,g]=T.useState(""),[m,f]=T.useState(null),[v,y]=T.useState(null),[M,C]=T.useState(0),[D,R]=T.useState([]),{guessStates:b,updateGuessStates:p}=Zm(),{filter:w,updateFilter:A}=rr(),{mode:P}=tr(),[I,U]=T.useState(()=>{var nn,kn,Rn;return((Rn=(kn=(nn=b[P])==null?void 0:nn[w])==null?void 0:kn[a??""])==null?void 0:Rn.status)??"Attempting"}),[F,Q]=T.useState(()=>I==="Correct"||I==="Incorrect"),tn="https://guess-the-anime-op.onrender.com",bn=()=>{if(!a||h===""){f(null),y(`Song ${a} with filter does not exist`);return}fetch(`${tn}/song?id=${a}&filter=${h}`).then(nn=>{if(!nn.ok)throw f(null),y(`${nn.status}: Error fetching song ${a}`),new Error(`Error fetching song ${a}: ${nn.status}`);return nn.json()}).then(nn=>f(nn)).catch(nn=>console.error("Fetch error:",nn))};T.useEffect(()=>{const nn=new URLSearchParams(o.search);u(nn);const kn=nn.get("id"),Rn=nn.get("filter")??"",fn=kn&&parseInt(kn)>=1&&parseInt(kn)<=wo?parseInt(kn):null,L=Jh.includes(Rn)?Rn:"";fn&&fn>=1&&fn<=wo?s(fn):s(null),g(L),Rn!==""&&A(Rn)},[o.search]),T.useEffect(()=>{Q(I==="Correct"||I==="Incorrect")},[I]),T.useEffect(()=>{var kn,Rn;bn();const nn=(Rn=(kn=b[P])==null?void 0:kn[w])==null?void 0:Rn[a??""];R((nn==null?void 0:nn.guesses)??[]),C((nn==null?void 0:nn.guesses.length)??0),U((nn==null?void 0:nn.status)??"Attempting")},[a,w,b]);const vn=T.useCallback(nn=>{const kn=nn.trim();if(!a)return;C(Z=>Z+1),R(Z=>[...Z,kn]);const Rn=(m==null?void 0:m.def_title.includes(kn))||(m==null?void 0:m.eng_title.includes(kn)),fn=M===5,L=Rn&&!fn?"Correct":fn?"Incorrect":"Attempting";U(L),p(P,w,a,kn,L)},[a,m,w,D,I,M,b]);return m?x.jsxs("div",{className:"GuessTheSongContainer",children:[x.jsxs("div",{className:"",children:["Guess anime ",a,"!"]}),x.jsx("div",{children:h}),I==="Correct"&&x.jsx("div",{children:"You guessed correctly!"}),I==="Incorrect"&&x.jsx("div",{children:"Better Luck Next Time!"}),x.jsxs("div",{className:"AnimeInfoContainer",children:[F&&x.jsxs("div",{className:"ColWrapper",style:{textAlign:"center"},children:[x.jsx("div",{children:m.eng_title}),x.jsx("div",{children:m.def_title}),x.jsx("img",{src:"https://cdn.myanimelist.net/images/anime/1015/138006.webp",alt:`${m.eng_title}`})]}),x.jsx(DG,{hintsRevealed:M,song:m,endGameState:F})]}),x.jsx(MG,{hintsRevealed:M,videoId:m.yt_video_id,showVideo:F}),x.jsx(AG,{onSubmit:vn,guesses:D,won:I==="Correct",disabled:F}),x.jsxs("div",{className:"ButtonsContainer",children:[x.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:()=>{if(a&&r){const nn=a>1?a-1:wo;r.set("id",nn.toString()),e(`/guess?${r.toString()}`)}},children:"Prev"}),x.jsx("button",{className:"bg-[var(--primary-color)] text-white px-4 py-2 rounded",onClick:()=>e("/"),children:"Back"}),x.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:()=>{if(a&&r){const nn=a<wo?a+1:1;r.set("id",nn.toString()),e(`/guess?${r.toString()}`)}},children:"Next"})]})]}):v?x.jsxs("div",{children:[x.jsx("div",{children:v}),x.jsx("div",{children:"Go back and wait 10-15 seconds and click again the server is spinning back up for you!"}),x.jsx("button",{onClick:()=>e(-1),children:"Back"})]}):x.jsxs("span",{className:"Loading",children:["Song Loading",x.jsx("span",{className:"dot one",children:"."}),x.jsx("span",{className:"dot two",children:"."}),x.jsx("span",{className:"dot three",children:"."})]})}const wG=T.memo(({hidden:e,mode:o,setMode:r})=>e?null:x.jsx(_C,{mode:o,setMode:r}));function CG(){const{mode:e,updateMode:o}=tr(),u=Pa().pathname.startsWith("/guess");return x.jsxs("div",{className:`App ${e}`,children:[x.jsx(wG,{hidden:u,mode:e,setMode:o}),x.jsxs(eC,{children:[x.jsx(Ri,{path:"/",element:x.jsx($2,{})}),x.jsx(Ri,{path:"/guess",element:x.jsx(OG,{})}),x.jsx(Ri,{path:"/about",element:x.jsx("div",{children:"About"})}),x.jsx(Ri,{path:"/rules",element:x.jsx("div",{children:"Rules"})}),x.jsx(Ri,{path:"/faq",element:x.jsx("div",{children:"FAQ"})}),x.jsx(Ri,{path:"/stats",element:x.jsx("div",{children:"Stats"})})]})]})}const KG="/Guess-The-Anime-OP";hw.createRoot(document.getElementById("root")).render(x.jsx(T.StrictMode,{children:x.jsx(AC,{basename:KG,children:x.jsx(zC,{children:x.jsx(FC,{children:x.jsx(E2,{children:x.jsx(CG,{})})})})})}));
