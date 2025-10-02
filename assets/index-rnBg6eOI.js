function Jx(n,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const u=Object.getOwnPropertyDescriptor(r,t);u&&Object.defineProperty(n,t,u.get?u:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const u of t)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const u={};return t.integrity&&(u.integrity=t.integrity),t.referrerPolicy&&(u.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?u.credentials="include":t.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(t){if(t.ep)return;t.ep=!0;const u=o(t);fetch(t.href,u)}})();function tu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Xx(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var o=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};o.prototype=e.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var t=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:function(){return n[r]}})}),o}var Dd={exports:{}},wr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nk;function qx(){if(Nk)return wr;Nk=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function o(r,t,u){var c=null;if(u!==void 0&&(c=""+u),t.key!==void 0&&(c=""+t.key),"key"in t){u={};for(var m in t)m!=="key"&&(u[m]=t[m])}else u=t;return t=u.ref,{$$typeof:n,type:r,key:c,ref:t!==void 0?t:null,props:u}}return wr.Fragment=e,wr.jsx=o,wr.jsxs=o,wr}var Ek;function Qx(){return Ek||(Ek=1,Dd.exports=qx()),Dd.exports}var P=Qx(),wd={exports:{}},An={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hk;function nR(){if(Hk)return An;Hk=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),t=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),p=Symbol.iterator;function y(R){return R===null||typeof R!="object"?null:(R=p&&R[p]||R["@@iterator"],typeof R=="function"?R:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,O={};function A(R,W,Q){this.props=R,this.context=W,this.refs=O,this.updater=Q||k}A.prototype.isReactComponent={},A.prototype.setState=function(R,W){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,W,"setState")},A.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function b(){}b.prototype=A.prototype;function I(R,W,Q){this.props=R,this.context=W,this.refs=O,this.updater=Q||k}var C=I.prototype=new b;C.constructor=I,T(C,A.prototype),C.isPureReactComponent=!0;var K=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},E=Object.prototype.hasOwnProperty;function j(R,W,Q,nn,ln,Mn){return Q=Mn.ref,{$$typeof:n,type:R,key:W,ref:Q!==void 0?Q:null,props:Mn}}function z(R,W){return j(R.type,W,void 0,void 0,void 0,R.props)}function X(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function on(R){var W={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return W[Q]})}var rn=/\/+/g;function un(R,W){return typeof R=="object"&&R!==null&&R.key!=null?on(""+R.key):W.toString(36)}function kn(){}function q(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(kn,kn):(R.status="pending",R.then(function(W){R.status==="pending"&&(R.status="fulfilled",R.value=W)},function(W){R.status==="pending"&&(R.status="rejected",R.reason=W)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function tn(R,W,Q,nn,ln){var Mn=typeof R;(Mn==="undefined"||Mn==="boolean")&&(R=null);var hn=!1;if(R===null)hn=!0;else switch(Mn){case"bigint":case"string":case"number":hn=!0;break;case"object":switch(R.$$typeof){case n:case e:hn=!0;break;case S:return hn=R._init,tn(hn(R._payload),W,Q,nn,ln)}}if(hn)return ln=ln(R),hn=nn===""?"."+un(R,0):nn,K(ln)?(Q="",hn!=null&&(Q=hn.replace(rn,"$&/")+"/"),tn(ln,W,Q,"",function(Le){return Le})):ln!=null&&(X(ln)&&(ln=z(ln,Q+(ln.key==null||R&&R.key===ln.key?"":(""+ln.key).replace(rn,"$&/")+"/")+hn)),W.push(ln)),1;hn=0;var qn=nn===""?".":nn+":";if(K(R))for(var Kn=0;Kn<R.length;Kn++)nn=R[Kn],Mn=qn+un(nn,Kn),hn+=tn(nn,W,Q,Mn,ln);else if(Kn=y(R),typeof Kn=="function")for(R=Kn.call(R),Kn=0;!(nn=R.next()).done;)nn=nn.value,Mn=qn+un(nn,Kn++),hn+=tn(nn,W,Q,Mn,ln);else if(Mn==="object"){if(typeof R.then=="function")return tn(q(R),W,Q,nn,ln);throw W=String(R),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return hn}function H(R,W,Q){if(R==null)return R;var nn=[],ln=0;return tn(R,nn,"","",function(Mn){return W.call(Q,Mn,ln++)}),nn}function Z(R){if(R._status===-1){var W=R._result;W=W(),W.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=W)}if(R._status===1)return R._result.default;throw R._result}var an=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function pn(){}return An.Children={map:H,forEach:function(R,W,Q){H(R,function(){W.apply(this,arguments)},Q)},count:function(R){var W=0;return H(R,function(){W++}),W},toArray:function(R){return H(R,function(W){return W})||[]},only:function(R){if(!X(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},An.Component=A,An.Fragment=o,An.Profiler=t,An.PureComponent=I,An.StrictMode=r,An.Suspense=h,An.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,An.__COMPILER_RUNTIME={__proto__:null,c:function(R){return w.H.useMemoCache(R)}},An.cache=function(R){return function(){return R.apply(null,arguments)}},An.cloneElement=function(R,W,Q){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var nn=T({},R.props),ln=R.key,Mn=void 0;if(W!=null)for(hn in W.ref!==void 0&&(Mn=void 0),W.key!==void 0&&(ln=""+W.key),W)!E.call(W,hn)||hn==="key"||hn==="__self"||hn==="__source"||hn==="ref"&&W.ref===void 0||(nn[hn]=W[hn]);var hn=arguments.length-2;if(hn===1)nn.children=Q;else if(1<hn){for(var qn=Array(hn),Kn=0;Kn<hn;Kn++)qn[Kn]=arguments[Kn+2];nn.children=qn}return j(R.type,ln,void 0,void 0,Mn,nn)},An.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},An.createElement=function(R,W,Q){var nn,ln={},Mn=null;if(W!=null)for(nn in W.key!==void 0&&(Mn=""+W.key),W)E.call(W,nn)&&nn!=="key"&&nn!=="__self"&&nn!=="__source"&&(ln[nn]=W[nn]);var hn=arguments.length-2;if(hn===1)ln.children=Q;else if(1<hn){for(var qn=Array(hn),Kn=0;Kn<hn;Kn++)qn[Kn]=arguments[Kn+2];ln.children=qn}if(R&&R.defaultProps)for(nn in hn=R.defaultProps,hn)ln[nn]===void 0&&(ln[nn]=hn[nn]);return j(R,Mn,void 0,void 0,null,ln)},An.createRef=function(){return{current:null}},An.forwardRef=function(R){return{$$typeof:m,render:R}},An.isValidElement=X,An.lazy=function(R){return{$$typeof:S,_payload:{_status:-1,_result:R},_init:Z}},An.memo=function(R,W){return{$$typeof:d,type:R,compare:W===void 0?null:W}},An.startTransition=function(R){var W=w.T,Q={};w.T=Q;try{var nn=R(),ln=w.S;ln!==null&&ln(Q,nn),typeof nn=="object"&&nn!==null&&typeof nn.then=="function"&&nn.then(pn,an)}catch(Mn){an(Mn)}finally{w.T=W}},An.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},An.use=function(R){return w.H.use(R)},An.useActionState=function(R,W,Q){return w.H.useActionState(R,W,Q)},An.useCallback=function(R,W){return w.H.useCallback(R,W)},An.useContext=function(R){return w.H.useContext(R)},An.useDebugValue=function(){},An.useDeferredValue=function(R,W){return w.H.useDeferredValue(R,W)},An.useEffect=function(R,W,Q){var nn=w.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return nn.useEffect(R,W)},An.useId=function(){return w.H.useId()},An.useImperativeHandle=function(R,W,Q){return w.H.useImperativeHandle(R,W,Q)},An.useInsertionEffect=function(R,W){return w.H.useInsertionEffect(R,W)},An.useLayoutEffect=function(R,W){return w.H.useLayoutEffect(R,W)},An.useMemo=function(R,W){return w.H.useMemo(R,W)},An.useOptimistic=function(R,W){return w.H.useOptimistic(R,W)},An.useReducer=function(R,W,Q){return w.H.useReducer(R,W,Q)},An.useRef=function(R){return w.H.useRef(R)},An.useState=function(R){return w.H.useState(R)},An.useSyncExternalStore=function(R,W,Q){return w.H.useSyncExternalStore(R,W,Q)},An.useTransition=function(){return w.H.useTransition()},An.version="19.1.1",An}var Gk;function em(){return Gk||(Gk=1,wd.exports=nR()),wd.exports}var D=em();const so=tu(D),Lk=Jx({__proto__:null,default:so},[D]);var Cd={exports:{}},Cr={},Od={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _k;function eR(){return _k||(_k=1,function(n){function e(H,Z){var an=H.length;H.push(Z);n:for(;0<an;){var pn=an-1>>>1,R=H[pn];if(0<t(R,Z))H[pn]=Z,H[an]=R,an=pn;else break n}}function o(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],an=H.pop();if(an!==Z){H[0]=an;n:for(var pn=0,R=H.length,W=R>>>1;pn<W;){var Q=2*(pn+1)-1,nn=H[Q],ln=Q+1,Mn=H[ln];if(0>t(nn,an))ln<R&&0>t(Mn,nn)?(H[pn]=Mn,H[ln]=an,pn=ln):(H[pn]=nn,H[Q]=an,pn=Q);else if(ln<R&&0>t(Mn,an))H[pn]=Mn,H[ln]=an,pn=ln;else break n}}return Z}function t(H,Z){var an=H.sortIndex-Z.sortIndex;return an!==0?an:H.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var c=Date,m=c.now();n.unstable_now=function(){return c.now()-m}}var h=[],d=[],S=1,p=null,y=3,k=!1,T=!1,O=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function K(H){for(var Z=o(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=H)r(d),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=o(d)}}function w(H){if(O=!1,K(H),!T)if(o(h)!==null)T=!0,E||(E=!0,un());else{var Z=o(d);Z!==null&&tn(w,Z.startTime-H)}}var E=!1,j=-1,z=5,X=-1;function on(){return A?!0:!(n.unstable_now()-X<z)}function rn(){if(A=!1,E){var H=n.unstable_now();X=H;var Z=!0;try{n:{T=!1,O&&(O=!1,I(j),j=-1),k=!0;var an=y;try{e:{for(K(H),p=o(h);p!==null&&!(p.expirationTime>H&&on());){var pn=p.callback;if(typeof pn=="function"){p.callback=null,y=p.priorityLevel;var R=pn(p.expirationTime<=H);if(H=n.unstable_now(),typeof R=="function"){p.callback=R,K(H),Z=!0;break e}p===o(h)&&r(h),K(H)}else r(h);p=o(h)}if(p!==null)Z=!0;else{var W=o(d);W!==null&&tn(w,W.startTime-H),Z=!1}}break n}finally{p=null,y=an,k=!1}Z=void 0}}finally{Z?un():E=!1}}}var un;if(typeof C=="function")un=function(){C(rn)};else if(typeof MessageChannel<"u"){var kn=new MessageChannel,q=kn.port2;kn.port1.onmessage=rn,un=function(){q.postMessage(null)}}else un=function(){b(rn,0)};function tn(H,Z){j=b(function(){H(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(H){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var an=y;y=Z;try{return H()}finally{y=an}},n.unstable_requestPaint=function(){A=!0},n.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var an=y;y=H;try{return Z()}finally{y=an}},n.unstable_scheduleCallback=function(H,Z,an){var pn=n.unstable_now();switch(typeof an=="object"&&an!==null?(an=an.delay,an=typeof an=="number"&&0<an?pn+an:pn):an=pn,H){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=an+R,H={id:S++,callback:Z,priorityLevel:H,startTime:an,expirationTime:R,sortIndex:-1},an>pn?(H.sortIndex=an,e(d,H),o(h)===null&&H===o(d)&&(O?(I(j),j=-1):O=!0,tn(w,an-pn))):(H.sortIndex=R,e(h,H),T||k||(T=!0,E||(E=!0,un()))),H},n.unstable_shouldYield=on,n.unstable_wrapCallback=function(H){var Z=y;return function(){var an=y;y=Z;try{return H.apply(this,arguments)}finally{y=an}}}}(Id)),Id}var jk;function tR(){return jk||(jk=1,Od.exports=eR()),Od.exports}var Kd={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zk;function aR(){if(zk)return we;zk=1;var n=em();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)d+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(e(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},t=Symbol.for("react.portal");function u(h,d,S){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:t,key:p==null?null:""+p,children:h,containerInfo:d,implementation:S}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,we.createPortal=function(h,d){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(h,d,null,S)},we.flushSync=function(h){var d=c.T,S=r.p;try{if(c.T=null,r.p=2,h)return h()}finally{c.T=d,r.p=S,r.d.f()}},we.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(h,d))},we.prefetchDNS=function(h){typeof h=="string"&&r.d.D(h)},we.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var S=d.as,p=m(S,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,k=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;S==="style"?r.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:p,integrity:y,fetchPriority:k}):S==="script"&&r.d.X(h,{crossOrigin:p,integrity:y,fetchPriority:k,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},we.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var S=m(d.as,d.crossOrigin);r.d.M(h,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(h)},we.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var S=d.as,p=m(S,d.crossOrigin);r.d.L(h,S,{crossOrigin:p,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},we.preloadModule=function(h,d){if(typeof h=="string")if(d){var S=m(d.as,d.crossOrigin);r.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(h)},we.requestFormReset=function(h){r.d.r(h)},we.unstable_batchedUpdates=function(h,d){return h(d)},we.useFormState=function(h,d,S){return c.H.useFormState(h,d,S)},we.useFormStatus=function(){return c.H.useHostTransitionStatus()},we.version="19.1.1",we}var $k;function RM(){if($k)return Kd.exports;$k=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=aR(),Kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fk;function iR(){if(Fk)return Cr;Fk=1;var n=tR(),e=em(),o=RM();function r(a){var i="https://react.dev/errors/"+a;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+a+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function u(a){var i=a,s=a;if(a.alternate)for(;i.return;)i=i.return;else{a=i;do i=a,(i.flags&4098)!==0&&(s=i.return),a=i.return;while(a)}return i.tag===3?s:null}function c(a){if(a.tag===13){var i=a.memoizedState;if(i===null&&(a=a.alternate,a!==null&&(i=a.memoizedState)),i!==null)return i.dehydrated}return null}function m(a){if(u(a)!==a)throw Error(r(188))}function h(a){var i=a.alternate;if(!i){if(i=u(a),i===null)throw Error(r(188));return i!==a?null:a}for(var s=a,l=i;;){var f=s.return;if(f===null)break;var g=f.alternate;if(g===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===s)return m(f),a;if(g===l)return m(f),i;g=g.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=g;else{for(var v=!1,M=f.child;M;){if(M===s){v=!0,s=f,l=g;break}if(M===l){v=!0,l=f,s=g;break}M=M.sibling}if(!v){for(M=g.child;M;){if(M===s){v=!0,s=g,l=f;break}if(M===l){v=!0,l=g,s=f;break}M=M.sibling}if(!v)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?a:i}function d(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a;for(a=a.child;a!==null;){if(i=d(a),i!==null)return i;a=a.sibling}return null}var S=Object.assign,p=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),C=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),on=Symbol.for("react.memo_cache_sentinel"),rn=Symbol.iterator;function un(a){return a===null||typeof a!="object"?null:(a=rn&&a[rn]||a["@@iterator"],typeof a=="function"?a:null)}var kn=Symbol.for("react.client.reference");function q(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===kn?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case T:return"Fragment";case A:return"Profiler";case O:return"StrictMode";case w:return"Suspense";case E:return"SuspenseList";case X:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case k:return"Portal";case C:return(a.displayName||"Context")+".Provider";case I:return(a._context.displayName||"Context")+".Consumer";case K:var i=a.render;return a=a.displayName,a||(a=i.displayName||i.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case j:return i=a.displayName||null,i!==null?i:q(a.type)||"Memo";case z:i=a._payload,a=a._init;try{return q(a(i))}catch{}}return null}var tn=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,an={pending:!1,data:null,method:null,action:null},pn=[],R=-1;function W(a){return{current:a}}function Q(a){0>R||(a.current=pn[R],pn[R]=null,R--)}function nn(a,i){R++,pn[R]=a.current,a.current=i}var ln=W(null),Mn=W(null),hn=W(null),qn=W(null);function Kn(a,i){switch(nn(hn,i),nn(Mn,a),nn(ln,null),i.nodeType){case 9:case 11:a=(a=i.documentElement)&&(a=a.namespaceURI)?lk(a):0;break;default:if(a=i.tagName,i=i.namespaceURI)i=lk(i),a=ck(i,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}Q(ln),nn(ln,a)}function Le(){Q(ln),Q(Mn),Q(hn)}function Co(a){a.memoizedState!==null&&nn(qn,a);var i=ln.current,s=ck(i,a.type);i!==s&&(nn(Mn,a),nn(ln,s))}function Ea(a){Mn.current===a&&(Q(ln),Q(Mn)),qn.current===a&&(Q(qn),br._currentValue=an)}var mi=Object.prototype.hasOwnProperty,Oo=n.unstable_scheduleCallback,gi=n.unstable_cancelCallback,fc=n.unstable_shouldYield,II=n.unstable_requestPaint,yt=n.unstable_now,KI=n.unstable_getCurrentPriorityLevel,$S=n.unstable_ImmediatePriority,FS=n.unstable_UserBlockingPriority,pu=n.unstable_NormalPriority,xI=n.unstable_LowPriority,US=n.unstable_IdlePriority,RI=n.log,BI=n.unstable_setDisableYieldValue,Io=null,_e=null;function oa(a){if(typeof RI=="function"&&BI(a),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(Io,a)}catch{}}var je=Math.clz32?Math.clz32:EI,PI=Math.log,NI=Math.LN2;function EI(a){return a>>>=0,a===0?32:31-(PI(a)/NI|0)|0}var yu=256,vu=4194304;function Ha(a){var i=a&42;if(i!==0)return i;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function ku(a,i,s){var l=a.pendingLanes;if(l===0)return 0;var f=0,g=a.suspendedLanes,v=a.pingedLanes;a=a.warmLanes;var M=l&134217727;return M!==0?(l=M&~g,l!==0?f=Ha(l):(v&=M,v!==0?f=Ha(v):s||(s=M&~a,s!==0&&(f=Ha(s))))):(M=l&~g,M!==0?f=Ha(M):v!==0?f=Ha(v):s||(s=l&~a,s!==0&&(f=Ha(s)))),f===0?0:i!==0&&i!==f&&(i&g)===0&&(g=f&-f,s=i&-i,g>=s||g===32&&(s&4194048)!==0)?i:f}function Ko(a,i){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&i)===0}function HI(a,i){switch(a){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(){var a=yu;return yu<<=1,(yu&4194048)===0&&(yu=256),a}function YS(){var a=vu;return vu<<=1,(vu&62914560)===0&&(vu=4194304),a}function mc(a){for(var i=[],s=0;31>s;s++)i.push(a);return i}function xo(a,i){a.pendingLanes|=i,i!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function GI(a,i,s,l,f,g){var v=a.pendingLanes;a.pendingLanes=s,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=s,a.entangledLanes&=s,a.errorRecoveryDisabledLanes&=s,a.shellSuspendCounter=0;var M=a.entanglements,x=a.expirationTimes,_=a.hiddenUpdates;for(s=v&~s;0<s;){var U=31-je(s),Y=1<<U;M[U]=0,x[U]=-1;var $=_[U];if($!==null)for(_[U]=null,U=0;U<$.length;U++){var F=$[U];F!==null&&(F.lane&=-536870913)}s&=~Y}l!==0&&WS(a,l,0),g!==0&&f===0&&a.tag!==0&&(a.suspendedLanes|=g&~(v&~i))}function WS(a,i,s){a.pendingLanes|=i,a.suspendedLanes&=~i;var l=31-je(i);a.entangledLanes|=i,a.entanglements[l]=a.entanglements[l]|1073741824|s&4194090}function ZS(a,i){var s=a.entangledLanes|=i;for(a=a.entanglements;s;){var l=31-je(s),f=1<<l;f&i|a[l]&i&&(a[l]|=i),s&=~f}}function gc(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Sc(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function JS(){var a=Z.p;return a!==0?a:(a=window.event,a===void 0?32:Ik(a.type))}function LI(a,i){var s=Z.p;try{return Z.p=a,i()}finally{Z.p=s}}var ra=Math.random().toString(36).slice(2),Ae="__reactFiber$"+ra,Re="__reactProps$"+ra,Si="__reactContainer$"+ra,pc="__reactEvents$"+ra,_I="__reactListeners$"+ra,jI="__reactHandles$"+ra,XS="__reactResources$"+ra,Ro="__reactMarker$"+ra;function yc(a){delete a[Ae],delete a[Re],delete a[pc],delete a[_I],delete a[jI]}function pi(a){var i=a[Ae];if(i)return i;for(var s=a.parentNode;s;){if(i=s[Si]||s[Ae]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(a=mk(a);a!==null;){if(s=a[Ae])return s;a=mk(a)}return i}a=s,s=a.parentNode}return null}function yi(a){if(a=a[Ae]||a[Si]){var i=a.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return a}return null}function Bo(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a.stateNode;throw Error(r(33))}function vi(a){var i=a[XS];return i||(i=a[XS]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function me(a){a[Ro]=!0}var qS=new Set,QS={};function Ga(a,i){ki(a,i),ki(a+"Capture",i)}function ki(a,i){for(QS[a]=i,a=0;a<i.length;a++)qS.add(i[a])}var zI=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),np={},ep={};function $I(a){return mi.call(ep,a)?!0:mi.call(np,a)?!1:zI.test(a)?ep[a]=!0:(np[a]=!0,!1)}function bu(a,i,s){if($I(i))if(s===null)a.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":a.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){a.removeAttribute(i);return}}a.setAttribute(i,""+s)}}function Tu(a,i,s){if(s===null)a.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(i);return}a.setAttribute(i,""+s)}}function Pt(a,i,s,l){if(l===null)a.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(s);return}a.setAttributeNS(i,s,""+l)}}var vc,tp;function bi(a){if(vc===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);vc=i&&i[1]||"",tp=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vc+a+tp}var kc=!1;function bc(a,i){if(!a||kc)return"";kc=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(F){var $=F}Reflect.construct(a,[],Y)}else{try{Y.call()}catch(F){$=F}a.call(Y.prototype)}}else{try{throw Error()}catch(F){$=F}(Y=a())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(F){if(F&&$&&typeof F.stack=="string")return[F.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),v=g[0],M=g[1];if(v&&M){var x=v.split(`
`),_=M.split(`
`);for(f=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;f<_.length&&!_[f].includes("DetermineComponentFrameRoot");)f++;if(l===x.length||f===_.length)for(l=x.length-1,f=_.length-1;1<=l&&0<=f&&x[l]!==_[f];)f--;for(;1<=l&&0<=f;l--,f--)if(x[l]!==_[f]){if(l!==1||f!==1)do if(l--,f--,0>f||x[l]!==_[f]){var U=`
`+x[l].replace(" at new "," at ");return a.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",a.displayName)),U}while(1<=l&&0<=f);break}}}finally{kc=!1,Error.prepareStackTrace=s}return(s=a?a.displayName||a.name:"")?bi(s):""}function FI(a){switch(a.tag){case 26:case 27:case 5:return bi(a.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return bc(a.type,!1);case 11:return bc(a.type.render,!1);case 1:return bc(a.type,!0);case 31:return bi("Activity");default:return""}}function ap(a){try{var i="";do i+=FI(a),a=a.return;while(a);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Xe(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function ip(a){var i=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function UI(a){var i=ip(a)?"checked":"value",s=Object.getOwnPropertyDescriptor(a.constructor.prototype,i),l=""+a[i];if(!a.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,g=s.set;return Object.defineProperty(a,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,g.call(this,v)}}),Object.defineProperty(a,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){a._valueTracker=null,delete a[i]}}}}function Mu(a){a._valueTracker||(a._valueTracker=UI(a))}function op(a){if(!a)return!1;var i=a._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return a&&(l=ip(a)?a.checked?"true":"false":a.value),a=l,a!==s?(i.setValue(a),!0):!1}function Au(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var VI=/[\n"\\]/g;function qe(a){return a.replace(VI,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tc(a,i,s,l,f,g,v,M){a.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?a.type=v:a.removeAttribute("type"),i!=null?v==="number"?(i===0&&a.value===""||a.value!=i)&&(a.value=""+Xe(i)):a.value!==""+Xe(i)&&(a.value=""+Xe(i)):v!=="submit"&&v!=="reset"||a.removeAttribute("value"),i!=null?Mc(a,v,Xe(i)):s!=null?Mc(a,v,Xe(s)):l!=null&&a.removeAttribute("value"),f==null&&g!=null&&(a.defaultChecked=!!g),f!=null&&(a.checked=f&&typeof f!="function"&&typeof f!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?a.name=""+Xe(M):a.removeAttribute("name")}function rp(a,i,s,l,f,g,v,M){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(a.type=g),i!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;s=s!=null?""+Xe(s):"",i=i!=null?""+Xe(i):s,M||i===a.value||(a.value=i),a.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,a.checked=M?a.checked:!!l,a.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(a.name=v)}function Mc(a,i,s){i==="number"&&Au(a.ownerDocument)===a||a.defaultValue===""+s||(a.defaultValue=""+s)}function Ti(a,i,s,l){if(a=a.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<a.length;s++)f=i.hasOwnProperty("$"+a[s].value),a[s].selected!==f&&(a[s].selected=f),f&&l&&(a[s].defaultSelected=!0)}else{for(s=""+Xe(s),i=null,f=0;f<a.length;f++){if(a[f].value===s){a[f].selected=!0,l&&(a[f].defaultSelected=!0);return}i!==null||a[f].disabled||(i=a[f])}i!==null&&(i.selected=!0)}}function up(a,i,s){if(i!=null&&(i=""+Xe(i),i!==a.value&&(a.value=i),s==null)){a.defaultValue!==i&&(a.defaultValue=i);return}a.defaultValue=s!=null?""+Xe(s):""}function sp(a,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(tn(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Xe(i),a.defaultValue=s,l=a.textContent,l===s&&l!==""&&l!==null&&(a.value=l)}function Mi(a,i){if(i){var s=a.firstChild;if(s&&s===a.lastChild&&s.nodeType===3){s.nodeValue=i;return}}a.textContent=i}var YI=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lp(a,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?a.setProperty(i,""):i==="float"?a.cssFloat="":a[i]="":l?a.setProperty(i,s):typeof s!="number"||s===0||YI.has(i)?i==="float"?a.cssFloat=s:a[i]=(""+s).trim():a[i]=s+"px"}function cp(a,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(a=a.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?a.setProperty(l,""):l==="float"?a.cssFloat="":a[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&lp(a,f,l)}else for(var g in i)i.hasOwnProperty(g)&&lp(a,g,i[g])}function Ac(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WI=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZI=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(a){return ZI.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var Dc=null;function wc(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Ai=null,Di=null;function hp(a){var i=yi(a);if(i&&(a=i.stateNode)){var s=a[Re]||null;n:switch(a=i.stateNode,i.type){case"input":if(Tc(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=a;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==a&&l.form===a.form){var f=l[Re]||null;if(!f)throw Error(r(90));Tc(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===a.form&&op(l)}break n;case"textarea":up(a,s.value,s.defaultValue);break n;case"select":i=s.value,i!=null&&Ti(a,!!s.multiple,i,!1)}}}var Cc=!1;function dp(a,i,s){if(Cc)return a(i,s);Cc=!0;try{var l=a(i);return l}finally{if(Cc=!1,(Ai!==null||Di!==null)&&(cs(),Ai&&(i=Ai,a=Di,Di=Ai=null,hp(i),a)))for(i=0;i<a.length;i++)hp(a[i])}}function Po(a,i){var s=a.stateNode;if(s===null)return null;var l=s[Re]||null;if(l===null)return null;s=l[i];n:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(a=a.type,l=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!l;break n;default:a=!1}if(a)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Nt)try{var No={};Object.defineProperty(No,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Oc=!1}var ua=null,Ic=null,wu=null;function fp(){if(wu)return wu;var a,i=Ic,s=i.length,l,f="value"in ua?ua.value:ua.textContent,g=f.length;for(a=0;a<s&&i[a]===f[a];a++);var v=s-a;for(l=1;l<=v&&i[s-l]===f[g-l];l++);return wu=f.slice(a,1<l?1-l:void 0)}function Cu(a){var i=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&i===13&&(a=13)):a=i,a===10&&(a=13),32<=a||a===13?a:0}function Ou(){return!0}function mp(){return!1}function Be(a){function i(s,l,f,g,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var M in a)a.hasOwnProperty(M)&&(s=a[M],this[M]=s?s(g):g[M]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ou:mp,this.isPropagationStopped=mp,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ou)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ou)},persist:function(){},isPersistent:Ou}),i}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=Be(La),Eo=S({},La,{view:0,detail:0}),JI=Be(Eo),Kc,xc,Ho,Ku=S({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Ho&&(Ho&&a.type==="mousemove"?(Kc=a.screenX-Ho.screenX,xc=a.screenY-Ho.screenY):xc=Kc=0,Ho=a),Kc)},movementY:function(a){return"movementY"in a?a.movementY:xc}}),gp=Be(Ku),XI=S({},Ku,{dataTransfer:0}),qI=Be(XI),QI=S({},Eo,{relatedTarget:0}),Rc=Be(QI),nK=S({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),eK=Be(nK),tK=S({},La,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),aK=Be(tK),iK=S({},La,{data:0}),Sp=Be(iK),oK={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rK={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uK={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sK(a){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(a):(a=uK[a])?!!i[a]:!1}function Bc(){return sK}var lK=S({},Eo,{key:function(a){if(a.key){var i=oK[a.key]||a.key;if(i!=="Unidentified")return i}return a.type==="keypress"?(a=Cu(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?rK[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(a){return a.type==="keypress"?Cu(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Cu(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),cK=Be(lK),hK=S({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Be(hK),dK=S({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),fK=Be(dK),mK=S({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),gK=Be(mK),SK=S({},Ku,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),pK=Be(SK),yK=S({},La,{newState:0,oldState:0}),vK=Be(yK),kK=[9,13,27,32],Pc=Nt&&"CompositionEvent"in window,Go=null;Nt&&"documentMode"in document&&(Go=document.documentMode);var bK=Nt&&"TextEvent"in window&&!Go,yp=Nt&&(!Pc||Go&&8<Go&&11>=Go),vp=" ",kp=!1;function bp(a,i){switch(a){case"keyup":return kK.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var wi=!1;function TK(a,i){switch(a){case"compositionend":return Tp(i);case"keypress":return i.which!==32?null:(kp=!0,vp);case"textInput":return a=i.data,a===vp&&kp?null:a;default:return null}}function MK(a,i){if(wi)return a==="compositionend"||!Pc&&bp(a,i)?(a=fp(),wu=Ic=ua=null,wi=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yp&&i.locale!=="ko"?null:i.data;default:return null}}var AK={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i==="input"?!!AK[a.type]:i==="textarea"}function Ap(a,i,s,l){Ai?Di?Di.push(l):Di=[l]:Ai=l,i=Ss(i,"onChange"),0<i.length&&(s=new Iu("onChange","change",null,s,l),a.push({event:s,listeners:i}))}var Lo=null,_o=null;function DK(a){ik(a,0)}function xu(a){var i=Bo(a);if(op(i))return a}function Dp(a,i){if(a==="change")return i}var wp=!1;if(Nt){var Nc;if(Nt){var Ec="oninput"in document;if(!Ec){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Ec=typeof Cp.oninput=="function"}Nc=Ec}else Nc=!1;wp=Nc&&(!document.documentMode||9<document.documentMode)}function Op(){Lo&&(Lo.detachEvent("onpropertychange",Ip),_o=Lo=null)}function Ip(a){if(a.propertyName==="value"&&xu(_o)){var i=[];Ap(i,_o,a,wc(a)),dp(DK,i)}}function wK(a,i,s){a==="focusin"?(Op(),Lo=i,_o=s,Lo.attachEvent("onpropertychange",Ip)):a==="focusout"&&Op()}function CK(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return xu(_o)}function OK(a,i){if(a==="click")return xu(i)}function IK(a,i){if(a==="input"||a==="change")return xu(i)}function KK(a,i){return a===i&&(a!==0||1/a===1/i)||a!==a&&i!==i}var ze=typeof Object.is=="function"?Object.is:KK;function jo(a,i){if(ze(a,i))return!0;if(typeof a!="object"||a===null||typeof i!="object"||i===null)return!1;var s=Object.keys(a),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!mi.call(i,f)||!ze(a[f],i[f]))return!1}return!0}function Kp(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function xp(a,i){var s=Kp(a);a=0;for(var l;s;){if(s.nodeType===3){if(l=a+s.textContent.length,a<=i&&l>=i)return{node:s,offset:i-a};a=l}n:{for(;s;){if(s.nextSibling){s=s.nextSibling;break n}s=s.parentNode}s=void 0}s=Kp(s)}}function Rp(a,i){return a&&i?a===i?!0:a&&a.nodeType===3?!1:i&&i.nodeType===3?Rp(a,i.parentNode):"contains"in a?a.contains(i):a.compareDocumentPosition?!!(a.compareDocumentPosition(i)&16):!1:!1}function Bp(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var i=Au(a.document);i instanceof a.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)a=i.contentWindow;else break;i=Au(a.document)}return i}function Hc(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i&&(i==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||i==="textarea"||a.contentEditable==="true")}var xK=Nt&&"documentMode"in document&&11>=document.documentMode,Ci=null,Gc=null,zo=null,Lc=!1;function Pp(a,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lc||Ci==null||Ci!==Au(l)||(l=Ci,"selectionStart"in l&&Hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zo&&jo(zo,l)||(zo=l,l=Ss(Gc,"onSelect"),0<l.length&&(i=new Iu("onSelect","select",null,i,s),a.push({event:i,listeners:l}),i.target=Ci)))}function _a(a,i){var s={};return s[a.toLowerCase()]=i.toLowerCase(),s["Webkit"+a]="webkit"+i,s["Moz"+a]="moz"+i,s}var Oi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},_c={},Np={};Nt&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function ja(a){if(_c[a])return _c[a];if(!Oi[a])return a;var i=Oi[a],s;for(s in i)if(i.hasOwnProperty(s)&&s in Np)return _c[a]=i[s];return a}var Ep=ja("animationend"),Hp=ja("animationiteration"),Gp=ja("animationstart"),RK=ja("transitionrun"),BK=ja("transitionstart"),PK=ja("transitioncancel"),Lp=ja("transitionend"),_p=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function lt(a,i){_p.set(a,i),Ga(i,[a])}var jp=new WeakMap;function Qe(a,i){if(typeof a=="object"&&a!==null){var s=jp.get(a);return s!==void 0?s:(i={value:a,source:i,stack:ap(i)},jp.set(a,i),i)}return{value:a,source:i,stack:ap(i)}}var nt=[],Ii=0,zc=0;function Ru(){for(var a=Ii,i=zc=Ii=0;i<a;){var s=nt[i];nt[i++]=null;var l=nt[i];nt[i++]=null;var f=nt[i];nt[i++]=null;var g=nt[i];if(nt[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}g!==0&&zp(s,f,g)}}function Bu(a,i,s,l){nt[Ii++]=a,nt[Ii++]=i,nt[Ii++]=s,nt[Ii++]=l,zc|=l,a.lanes|=l,a=a.alternate,a!==null&&(a.lanes|=l)}function $c(a,i,s,l){return Bu(a,i,s,l),Pu(a)}function Ki(a,i){return Bu(a,null,null,i),Pu(a)}function zp(a,i,s){a.lanes|=s;var l=a.alternate;l!==null&&(l.lanes|=s);for(var f=!1,g=a.return;g!==null;)g.childLanes|=s,l=g.alternate,l!==null&&(l.childLanes|=s),g.tag===22&&(a=g.stateNode,a===null||a._visibility&1||(f=!0)),a=g,g=g.return;return a.tag===3?(g=a.stateNode,f&&i!==null&&(f=31-je(s),a=g.hiddenUpdates,l=a[f],l===null?a[f]=[i]:l.push(i),i.lane=s|536870912),g):null}function Pu(a){if(50<fr)throw fr=0,Zh=null,Error(r(185));for(var i=a.return;i!==null;)a=i,i=a.return;return a.tag===3?a.stateNode:null}var xi={};function NK(a,i,s,l){this.tag=a,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(a,i,s,l){return new NK(a,i,s,l)}function Fc(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Et(a,i){var s=a.alternate;return s===null?(s=$e(a.tag,i,a.key,a.mode),s.elementType=a.elementType,s.type=a.type,s.stateNode=a.stateNode,s.alternate=a,a.alternate=s):(s.pendingProps=i,s.type=a.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=a.flags&65011712,s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,i=a.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=a.sibling,s.index=a.index,s.ref=a.ref,s.refCleanup=a.refCleanup,s}function $p(a,i){a.flags&=65011714;var s=a.alternate;return s===null?(a.childLanes=0,a.lanes=i,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,i=s.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a}function Nu(a,i,s,l,f,g){var v=0;if(l=a,typeof a=="function")Fc(a)&&(v=1);else if(typeof a=="string")v=Hx(a,s,ln.current)?26:a==="html"||a==="head"||a==="body"?27:5;else n:switch(a){case X:return a=$e(31,s,i,f),a.elementType=X,a.lanes=g,a;case T:return za(s.children,f,g,i);case O:v=8,f|=24;break;case A:return a=$e(12,s,i,f|2),a.elementType=A,a.lanes=g,a;case w:return a=$e(13,s,i,f),a.elementType=w,a.lanes=g,a;case E:return a=$e(19,s,i,f),a.elementType=E,a.lanes=g,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case b:case C:v=10;break n;case I:v=9;break n;case K:v=11;break n;case j:v=14;break n;case z:v=16,l=null;break n}v=29,s=Error(r(130,a===null?"null":typeof a,"")),l=null}return i=$e(v,s,i,f),i.elementType=a,i.type=l,i.lanes=g,i}function za(a,i,s,l){return a=$e(7,a,l,i),a.lanes=s,a}function Uc(a,i,s){return a=$e(6,a,null,i),a.lanes=s,a}function Vc(a,i,s){return i=$e(4,a.children!==null?a.children:[],a.key,i),i.lanes=s,i.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},i}var Ri=[],Bi=0,Eu=null,Hu=0,et=[],tt=0,$a=null,Ht=1,Gt="";function Fa(a,i){Ri[Bi++]=Hu,Ri[Bi++]=Eu,Eu=a,Hu=i}function Fp(a,i,s){et[tt++]=Ht,et[tt++]=Gt,et[tt++]=$a,$a=a;var l=Ht;a=Gt;var f=32-je(l)-1;l&=~(1<<f),s+=1;var g=32-je(i)+f;if(30<g){var v=f-f%5;g=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Ht=1<<32-je(i)+f|s<<f|l,Gt=g+a}else Ht=1<<g|s<<f|l,Gt=a}function Yc(a){a.return!==null&&(Fa(a,1),Fp(a,1,0))}function Wc(a){for(;a===Eu;)Eu=Ri[--Bi],Ri[Bi]=null,Hu=Ri[--Bi],Ri[Bi]=null;for(;a===$a;)$a=et[--tt],et[tt]=null,Gt=et[--tt],et[tt]=null,Ht=et[--tt],et[tt]=null}var Ie=null,Qn=null,Pn=!1,Ua=null,vt=!1,Zc=Error(r(519));function Va(a){var i=Error(r(418,""));throw Uo(Qe(i,a)),Zc}function Up(a){var i=a.stateNode,s=a.type,l=a.memoizedProps;switch(i[Ae]=a,i[Re]=l,s){case"dialog":In("cancel",i),In("close",i);break;case"iframe":case"object":case"embed":In("load",i);break;case"video":case"audio":for(s=0;s<gr.length;s++)In(gr[s],i);break;case"source":In("error",i);break;case"img":case"image":case"link":In("error",i),In("load",i);break;case"details":In("toggle",i);break;case"input":In("invalid",i),rp(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Mu(i);break;case"select":In("invalid",i);break;case"textarea":In("invalid",i),sp(i,l.value,l.defaultValue,l.children),Mu(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||sk(i.textContent,s)?(l.popover!=null&&(In("beforetoggle",i),In("toggle",i)),l.onScroll!=null&&In("scroll",i),l.onScrollEnd!=null&&In("scrollend",i),l.onClick!=null&&(i.onclick=ps),i=!0):i=!1,i||Va(a)}function Vp(a){for(Ie=a.return;Ie;)switch(Ie.tag){case 5:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:Ie=Ie.return}}function $o(a){if(a!==Ie)return!1;if(!Pn)return Vp(a),Pn=!0,!1;var i=a.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=a.type,s=!(s!=="form"&&s!=="button")||hd(a.type,a.memoizedProps)),s=!s),s&&Qn&&Va(a),Vp(a),i===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));n:{for(a=a.nextSibling,i=0;a;){if(a.nodeType===8)if(s=a.data,s==="/$"){if(i===0){Qn=ht(a.nextSibling);break n}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;a=a.nextSibling}Qn=null}}else i===27?(i=Qn,Ma(a.type)?(a=gd,gd=null,Qn=a):Qn=i):Qn=Ie?ht(a.stateNode.nextSibling):null;return!0}function Fo(){Qn=Ie=null,Pn=!1}function Yp(){var a=Ua;return a!==null&&(Ee===null?Ee=a:Ee.push.apply(Ee,a),Ua=null),a}function Uo(a){Ua===null?Ua=[a]:Ua.push(a)}var Jc=W(null),Ya=null,Lt=null;function sa(a,i,s){nn(Jc,i._currentValue),i._currentValue=s}function _t(a){a._currentValue=Jc.current,Q(Jc)}function Xc(a,i,s){for(;a!==null;){var l=a.alternate;if((a.childLanes&i)!==i?(a.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),a===s)break;a=a.return}}function qc(a,i,s,l){var f=a.child;for(f!==null&&(f.return=a);f!==null;){var g=f.dependencies;if(g!==null){var v=f.child;g=g.firstContext;n:for(;g!==null;){var M=g;g=f;for(var x=0;x<i.length;x++)if(M.context===i[x]){g.lanes|=s,M=g.alternate,M!==null&&(M.lanes|=s),Xc(g.return,s,a),l||(v=null);break n}g=M.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(r(341));v.lanes|=s,g=v.alternate,g!==null&&(g.lanes|=s),Xc(v,s,a),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===a){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Vo(a,i,s,l){a=null;for(var f=i,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var M=f.type;ze(f.pendingProps.value,v.value)||(a!==null?a.push(M):a=[M])}}else if(f===qn.current){if(v=f.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(a!==null?a.push(br):a=[br])}f=f.return}a!==null&&qc(i,a,s,l),i.flags|=262144}function Gu(a){for(a=a.firstContext;a!==null;){if(!ze(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Wa(a){Ya=a,Lt=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function De(a){return Wp(Ya,a)}function Lu(a,i){return Ya===null&&Wa(a),Wp(a,i)}function Wp(a,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Lt===null){if(a===null)throw Error(r(308));Lt=i,a.dependencies={lanes:0,firstContext:i},a.flags|=524288}else Lt=Lt.next=i;return s}var EK=typeof AbortController<"u"?AbortController:function(){var a=[],i=this.signal={aborted:!1,addEventListener:function(s,l){a.push(l)}};this.abort=function(){i.aborted=!0,a.forEach(function(s){return s()})}},HK=n.unstable_scheduleCallback,GK=n.unstable_NormalPriority,he={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new EK,data:new Map,refCount:0}}function Yo(a){a.refCount--,a.refCount===0&&HK(GK,function(){a.controller.abort()})}var Wo=null,nh=0,Pi=0,Ni=null;function LK(a,i){if(Wo===null){var s=Wo=[];nh=0,Pi=td(),Ni={status:"pending",value:void 0,then:function(l){s.push(l)}}}return nh++,i.then(Zp,Zp),i}function Zp(){if(--nh===0&&Wo!==null){Ni!==null&&(Ni.status="fulfilled");var a=Wo;Wo=null,Pi=0,Ni=null;for(var i=0;i<a.length;i++)(0,a[i])()}}function _K(a,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return a.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Jp=H.S;H.S=function(a,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&LK(a,i),Jp!==null&&Jp(a,i)};var Za=W(null);function eh(){var a=Za.current;return a!==null?a:Fn.pooledCache}function _u(a,i){i===null?nn(Za,Za.current):nn(Za,i.pool)}function Xp(){var a=eh();return a===null?null:{parent:he._currentValue,pool:a}}var Zo=Error(r(460)),qp=Error(r(474)),ju=Error(r(542)),th={then:function(){}};function Qp(a){return a=a.status,a==="fulfilled"||a==="rejected"}function zu(){}function ny(a,i,s){switch(s=a[s],s===void 0?a.push(i):s!==i&&(i.then(zu,zu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,ty(a),a;default:if(typeof i.status=="string")i.then(zu,zu);else{if(a=Fn,a!==null&&100<a.shellSuspendCounter)throw Error(r(482));a=i,a.status="pending",a.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,ty(a),a}throw Jo=i,Zo}}var Jo=null;function ey(){if(Jo===null)throw Error(r(459));var a=Jo;return Jo=null,a}function ty(a){if(a===Zo||a===ju)throw Error(r(483))}var la=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ih(a,i){a=a.updateQueue,i.updateQueue===a&&(i.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function ca(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function ha(a,i,s){var l=a.updateQueue;if(l===null)return null;if(l=l.shared,(Gn&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pu(a),zp(a,null,s),i}return Bu(a,l,i,s),Pu(a)}function Xo(a,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=a.pendingLanes,s|=l,i.lanes=s,ZS(a,s)}}function oh(a,i){var s=a.updateQueue,l=a.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?f=g=v:g=g.next=v,s=s.next}while(s!==null);g===null?f=g=i:g=g.next=i}else f=g=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},a.updateQueue=s;return}a=s.lastBaseUpdate,a===null?s.firstBaseUpdate=i:a.next=i,s.lastBaseUpdate=i}var rh=!1;function qo(){if(rh){var a=Ni;if(a!==null)throw a}}function Qo(a,i,s,l){rh=!1;var f=a.updateQueue;la=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,M=f.shared.pending;if(M!==null){f.shared.pending=null;var x=M,_=x.next;x.next=null,v===null?g=_:v.next=_,v=x;var U=a.alternate;U!==null&&(U=U.updateQueue,M=U.lastBaseUpdate,M!==v&&(M===null?U.firstBaseUpdate=_:M.next=_,U.lastBaseUpdate=x))}if(g!==null){var Y=f.baseState;v=0,U=_=x=null,M=g;do{var $=M.lane&-536870913,F=$!==M.lane;if(F?(xn&$)===$:(l&$)===$){$!==0&&$===Pi&&(rh=!0),U!==null&&(U=U.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});n:{var yn=a,mn=M;$=i;var zn=s;switch(mn.tag){case 1:if(yn=mn.payload,typeof yn=="function"){Y=yn.call(zn,Y,$);break n}Y=yn;break n;case 3:yn.flags=yn.flags&-65537|128;case 0:if(yn=mn.payload,$=typeof yn=="function"?yn.call(zn,Y,$):yn,$==null)break n;Y=S({},Y,$);break n;case 2:la=!0}}$=M.callback,$!==null&&(a.flags|=64,F&&(a.flags|=8192),F=f.callbacks,F===null?f.callbacks=[$]:F.push($))}else F={lane:$,tag:M.tag,payload:M.payload,callback:M.callback,next:null},U===null?(_=U=F,x=Y):U=U.next=F,v|=$;if(M=M.next,M===null){if(M=f.shared.pending,M===null)break;F=M,M=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);U===null&&(x=Y),f.baseState=x,f.firstBaseUpdate=_,f.lastBaseUpdate=U,g===null&&(f.shared.lanes=0),va|=v,a.lanes=v,a.memoizedState=Y}}function ay(a,i){if(typeof a!="function")throw Error(r(191,a));a.call(i)}function iy(a,i){var s=a.callbacks;if(s!==null)for(a.callbacks=null,a=0;a<s.length;a++)ay(s[a],i)}var Ei=W(null),$u=W(0);function oy(a,i){a=Yt,nn($u,a),nn(Ei,i),Yt=a|i.baseLanes}function uh(){nn($u,Yt),nn(Ei,Ei.current)}function sh(){Yt=$u.current,Q(Ei),Q($u)}var da=0,Dn=null,_n=null,ue=null,Fu=!1,Hi=!1,Ja=!1,Uu=0,nr=0,Gi=null,jK=0;function ie(){throw Error(r(321))}function lh(a,i){if(i===null)return!1;for(var s=0;s<i.length&&s<a.length;s++)if(!ze(a[s],i[s]))return!1;return!0}function ch(a,i,s,l,f,g){return da=g,Dn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=a===null||a.memoizedState===null?zy:$y,Ja=!1,g=s(l,f),Ja=!1,Hi&&(g=uy(i,s,l,f)),ry(a),g}function ry(a){H.H=Xu;var i=_n!==null&&_n.next!==null;if(da=0,ue=_n=Dn=null,Fu=!1,nr=0,Gi=null,i)throw Error(r(300));a===null||ge||(a=a.dependencies,a!==null&&Gu(a)&&(ge=!0))}function uy(a,i,s,l){Dn=a;var f=0;do{if(Hi&&(Gi=null),nr=0,Hi=!1,25<=f)throw Error(r(301));if(f+=1,ue=_n=null,a.updateQueue!=null){var g=a.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}H.H=WK,g=i(s,l)}while(Hi);return g}function zK(){var a=H.H,i=a.useState()[0];return i=typeof i.then=="function"?er(i):i,a=a.useState()[0],(_n!==null?_n.memoizedState:null)!==a&&(Dn.flags|=1024),i}function hh(){var a=Uu!==0;return Uu=0,a}function dh(a,i,s){i.updateQueue=a.updateQueue,i.flags&=-2053,a.lanes&=~s}function fh(a){if(Fu){for(a=a.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Fu=!1}da=0,ue=_n=Dn=null,Hi=!1,nr=Uu=0,Gi=null}function Pe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Dn.memoizedState=ue=a:ue=ue.next=a,ue}function se(){if(_n===null){var a=Dn.alternate;a=a!==null?a.memoizedState:null}else a=_n.next;var i=ue===null?Dn.memoizedState:ue.next;if(i!==null)ue=i,_n=a;else{if(a===null)throw Dn.alternate===null?Error(r(467)):Error(r(310));_n=a,a={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},ue===null?Dn.memoizedState=ue=a:ue=ue.next=a}return ue}function mh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function er(a){var i=nr;return nr+=1,Gi===null&&(Gi=[]),a=ny(Gi,a,i),i=Dn,(ue===null?i.memoizedState:ue.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?zy:$y),a}function Vu(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return er(a);if(a.$$typeof===C)return De(a)}throw Error(r(438,String(a)))}function gh(a){var i=null,s=Dn.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Dn.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=mh(),Dn.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(a),l=0;l<a;l++)s[l]=on;return i.index++,s}function jt(a,i){return typeof i=="function"?i(a):i}function Yu(a){var i=se();return Sh(i,_n,a)}function Sh(a,i,s){var l=a.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=a.baseQueue,g=l.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}i.baseQueue=f=g,l.pending=null}if(g=a.baseState,f===null)a.memoizedState=g;else{i=f.next;var M=v=null,x=null,_=i,U=!1;do{var Y=_.lane&-536870913;if(Y!==_.lane?(xn&Y)===Y:(da&Y)===Y){var $=_.revertLane;if($===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),Y===Pi&&(U=!0);else if((da&$)===$){_=_.next,$===Pi&&(U=!0);continue}else Y={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},x===null?(M=x=Y,v=g):x=x.next=Y,Dn.lanes|=$,va|=$;Y=_.action,Ja&&s(g,Y),g=_.hasEagerState?_.eagerState:s(g,Y)}else $={lane:Y,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},x===null?(M=x=$,v=g):x=x.next=$,Dn.lanes|=Y,va|=Y;_=_.next}while(_!==null&&_!==i);if(x===null?v=g:x.next=M,!ze(g,a.memoizedState)&&(ge=!0,U&&(s=Ni,s!==null)))throw s;a.memoizedState=g,a.baseState=v,a.baseQueue=x,l.lastRenderedState=g}return f===null&&(l.lanes=0),[a.memoizedState,l.dispatch]}function ph(a){var i=se(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=s.dispatch,f=s.pending,g=i.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do g=a(g,v.action),v=v.next;while(v!==f);ze(g,i.memoizedState)||(ge=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,l]}function sy(a,i,s){var l=Dn,f=se(),g=Pn;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=i();var v=!ze((_n||f).memoizedState,s);v&&(f.memoizedState=s,ge=!0),f=f.queue;var M=hy.bind(null,l,f,a);if(tr(2048,8,M,[a]),f.getSnapshot!==i||v||ue!==null&&ue.memoizedState.tag&1){if(l.flags|=2048,Li(9,Wu(),cy.bind(null,l,f,s,i),null),Fn===null)throw Error(r(349));g||(da&124)!==0||ly(l,i,s)}return s}function ly(a,i,s){a.flags|=16384,a={getSnapshot:i,value:s},i=Dn.updateQueue,i===null?(i=mh(),Dn.updateQueue=i,i.stores=[a]):(s=i.stores,s===null?i.stores=[a]:s.push(a))}function cy(a,i,s,l){i.value=s,i.getSnapshot=l,dy(i)&&fy(a)}function hy(a,i,s){return s(function(){dy(i)&&fy(a)})}function dy(a){var i=a.getSnapshot;a=a.value;try{var s=i();return!ze(a,s)}catch{return!0}}function fy(a){var i=Ki(a,2);i!==null&&We(i,a,2)}function yh(a){var i=Pe();if(typeof a=="function"){var s=a;if(a=s(),Ja){oa(!0);try{s()}finally{oa(!1)}}}return i.memoizedState=i.baseState=a,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:a},i}function my(a,i,s,l){return a.baseState=s,Sh(a,_n,typeof l=="function"?l:jt)}function $K(a,i,s,l,f){if(Ju(a))throw Error(r(485));if(a=i.action,a!==null){var g={payload:f,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){g.listeners.push(v)}};H.T!==null?s(!0):g.isTransition=!1,l(g),s=i.pending,s===null?(g.next=i.pending=g,gy(i,g)):(g.next=s.next,i.pending=s.next=g)}}function gy(a,i){var s=i.action,l=i.payload,f=a.state;if(i.isTransition){var g=H.T,v={};H.T=v;try{var M=s(f,l),x=H.S;x!==null&&x(v,M),Sy(a,i,M)}catch(_){vh(a,i,_)}finally{H.T=g}}else try{g=s(f,l),Sy(a,i,g)}catch(_){vh(a,i,_)}}function Sy(a,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){py(a,i,l)},function(l){return vh(a,i,l)}):py(a,i,s)}function py(a,i,s){i.status="fulfilled",i.value=s,yy(i),a.state=s,i=a.pending,i!==null&&(s=i.next,s===i?a.pending=null:(s=s.next,i.next=s,gy(a,s)))}function vh(a,i,s){var l=a.pending;if(a.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,yy(i),i=i.next;while(i!==l)}a.action=null}function yy(a){a=a.listeners;for(var i=0;i<a.length;i++)(0,a[i])()}function vy(a,i){return i}function ky(a,i){if(Pn){var s=Fn.formState;if(s!==null){n:{var l=Dn;if(Pn){if(Qn){e:{for(var f=Qn,g=vt;f.nodeType!==8;){if(!g){f=null;break e}if(f=ht(f.nextSibling),f===null){f=null;break e}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){Qn=ht(f.nextSibling),l=f.data==="F!";break n}}Va(l)}l=!1}l&&(i=s[0])}}return s=Pe(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vy,lastRenderedState:i},s.queue=l,s=Ly.bind(null,Dn,l),l.dispatch=s,l=yh(!1),g=Ah.bind(null,Dn,!1,l.queue),l=Pe(),f={state:i,dispatch:null,action:a,pending:null},l.queue=f,s=$K.bind(null,Dn,f,g,s),f.dispatch=s,l.memoizedState=a,[i,s,!1]}function by(a){var i=se();return Ty(i,_n,a)}function Ty(a,i,s){if(i=Sh(a,i,vy)[0],a=Yu(jt)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=er(i)}catch(v){throw v===Zo?ju:v}else l=i;i=se();var f=i.queue,g=f.dispatch;return s!==i.memoizedState&&(Dn.flags|=2048,Li(9,Wu(),FK.bind(null,f,s),null)),[l,g,a]}function FK(a,i){a.action=i}function My(a){var i=se(),s=_n;if(s!==null)return Ty(i,s,a);se(),i=i.memoizedState,s=se();var l=s.queue.dispatch;return s.memoizedState=a,[i,l,!1]}function Li(a,i,s,l){return a={tag:a,create:s,deps:l,inst:i,next:null},i=Dn.updateQueue,i===null&&(i=mh(),Dn.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=a.next=a:(l=s.next,s.next=a,a.next=l,i.lastEffect=a),a}function Wu(){return{destroy:void 0,resource:void 0}}function Ay(){return se().memoizedState}function Zu(a,i,s,l){var f=Pe();l=l===void 0?null:l,Dn.flags|=a,f.memoizedState=Li(1|i,Wu(),s,l)}function tr(a,i,s,l){var f=se();l=l===void 0?null:l;var g=f.memoizedState.inst;_n!==null&&l!==null&&lh(l,_n.memoizedState.deps)?f.memoizedState=Li(i,g,s,l):(Dn.flags|=a,f.memoizedState=Li(1|i,g,s,l))}function Dy(a,i){Zu(8390656,8,a,i)}function wy(a,i){tr(2048,8,a,i)}function Cy(a,i){return tr(4,2,a,i)}function Oy(a,i){return tr(4,4,a,i)}function Iy(a,i){if(typeof i=="function"){a=a();var s=i(a);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return a=a(),i.current=a,function(){i.current=null}}function Ky(a,i,s){s=s!=null?s.concat([a]):null,tr(4,4,Iy.bind(null,i,a),s)}function kh(){}function xy(a,i){var s=se();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&lh(i,l[1])?l[0]:(s.memoizedState=[a,i],a)}function Ry(a,i){var s=se();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&lh(i,l[1]))return l[0];if(l=a(),Ja){oa(!0);try{a()}finally{oa(!1)}}return s.memoizedState=[l,i],l}function bh(a,i,s){return s===void 0||(da&1073741824)!==0?a.memoizedState=i:(a.memoizedState=s,a=Nv(),Dn.lanes|=a,va|=a,s)}function By(a,i,s,l){return ze(s,i)?s:Ei.current!==null?(a=bh(a,s,l),ze(a,i)||(ge=!0),a):(da&42)===0?(ge=!0,a.memoizedState=s):(a=Nv(),Dn.lanes|=a,va|=a,i)}function Py(a,i,s,l,f){var g=Z.p;Z.p=g!==0&&8>g?g:8;var v=H.T,M={};H.T=M,Ah(a,!1,i,s);try{var x=f(),_=H.S;if(_!==null&&_(M,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=_K(x,l);ar(a,i,U,Ye(a))}else ar(a,i,l,Ye(a))}catch(Y){ar(a,i,{then:function(){},status:"rejected",reason:Y},Ye())}finally{Z.p=g,H.T=v}}function UK(){}function Th(a,i,s,l){if(a.tag!==5)throw Error(r(476));var f=Ny(a).queue;Py(a,f,i,an,s===null?UK:function(){return Ey(a),s(l)})}function Ny(a){var i=a.memoizedState;if(i!==null)return i;i={memoizedState:an,baseState:an,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:an},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:s},next:null},a.memoizedState=i,a=a.alternate,a!==null&&(a.memoizedState=i),i}function Ey(a){var i=Ny(a).next.queue;ar(a,i,{},Ye())}function Mh(){return De(br)}function Hy(){return se().memoizedState}function Gy(){return se().memoizedState}function VK(a){for(var i=a.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ye();a=ca(s);var l=ha(i,a,s);l!==null&&(We(l,i,s),Xo(l,i,s)),i={cache:Qc()},a.payload=i;return}i=i.return}}function YK(a,i,s){var l=Ye();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ju(a)?_y(i,s):(s=$c(a,i,s,l),s!==null&&(We(s,a,l),jy(s,i,l)))}function Ly(a,i,s){var l=Ye();ar(a,i,s,l)}function ar(a,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ju(a))_y(i,f);else{var g=a.alternate;if(a.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var v=i.lastRenderedState,M=g(v,s);if(f.hasEagerState=!0,f.eagerState=M,ze(M,v))return Bu(a,i,f,0),Fn===null&&Ru(),!1}catch{}finally{}if(s=$c(a,i,f,l),s!==null)return We(s,a,l),jy(s,i,l),!0}return!1}function Ah(a,i,s,l){if(l={lane:2,revertLane:td(),action:l,hasEagerState:!1,eagerState:null,next:null},Ju(a)){if(i)throw Error(r(479))}else i=$c(a,s,l,2),i!==null&&We(i,a,2)}function Ju(a){var i=a.alternate;return a===Dn||i!==null&&i===Dn}function _y(a,i){Hi=Fu=!0;var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}function jy(a,i,s){if((s&4194048)!==0){var l=i.lanes;l&=a.pendingLanes,s|=l,i.lanes=s,ZS(a,s)}}var Xu={readContext:De,use:Vu,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useLayoutEffect:ie,useInsertionEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useSyncExternalStore:ie,useId:ie,useHostTransitionStatus:ie,useFormState:ie,useActionState:ie,useOptimistic:ie,useMemoCache:ie,useCacheRefresh:ie},zy={readContext:De,use:Vu,useCallback:function(a,i){return Pe().memoizedState=[a,i===void 0?null:i],a},useContext:De,useEffect:Dy,useImperativeHandle:function(a,i,s){s=s!=null?s.concat([a]):null,Zu(4194308,4,Iy.bind(null,i,a),s)},useLayoutEffect:function(a,i){return Zu(4194308,4,a,i)},useInsertionEffect:function(a,i){Zu(4,2,a,i)},useMemo:function(a,i){var s=Pe();i=i===void 0?null:i;var l=a();if(Ja){oa(!0);try{a()}finally{oa(!1)}}return s.memoizedState=[l,i],l},useReducer:function(a,i,s){var l=Pe();if(s!==void 0){var f=s(i);if(Ja){oa(!0);try{s(i)}finally{oa(!1)}}}else f=i;return l.memoizedState=l.baseState=f,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:f},l.queue=a,a=a.dispatch=YK.bind(null,Dn,a),[l.memoizedState,a]},useRef:function(a){var i=Pe();return a={current:a},i.memoizedState=a},useState:function(a){a=yh(a);var i=a.queue,s=Ly.bind(null,Dn,i);return i.dispatch=s,[a.memoizedState,s]},useDebugValue:kh,useDeferredValue:function(a,i){var s=Pe();return bh(s,a,i)},useTransition:function(){var a=yh(!1);return a=Py.bind(null,Dn,a.queue,!0,!1),Pe().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,i,s){var l=Dn,f=Pe();if(Pn){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Fn===null)throw Error(r(349));(xn&124)!==0||ly(l,i,s)}f.memoizedState=s;var g={value:s,getSnapshot:i};return f.queue=g,Dy(hy.bind(null,l,g,a),[a]),l.flags|=2048,Li(9,Wu(),cy.bind(null,l,g,s,i),null),s},useId:function(){var a=Pe(),i=Fn.identifierPrefix;if(Pn){var s=Gt,l=Ht;s=(l&~(1<<32-je(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Uu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=jK++,i="«"+i+"r"+s.toString(32)+"»";return a.memoizedState=i},useHostTransitionStatus:Mh,useFormState:ky,useActionState:ky,useOptimistic:function(a){var i=Pe();i.memoizedState=i.baseState=a;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ah.bind(null,Dn,!0,s),s.dispatch=i,[a,i]},useMemoCache:gh,useCacheRefresh:function(){return Pe().memoizedState=VK.bind(null,Dn)}},$y={readContext:De,use:Vu,useCallback:xy,useContext:De,useEffect:wy,useImperativeHandle:Ky,useInsertionEffect:Cy,useLayoutEffect:Oy,useMemo:Ry,useReducer:Yu,useRef:Ay,useState:function(){return Yu(jt)},useDebugValue:kh,useDeferredValue:function(a,i){var s=se();return By(s,_n.memoizedState,a,i)},useTransition:function(){var a=Yu(jt)[0],i=se().memoizedState;return[typeof a=="boolean"?a:er(a),i]},useSyncExternalStore:sy,useId:Hy,useHostTransitionStatus:Mh,useFormState:by,useActionState:by,useOptimistic:function(a,i){var s=se();return my(s,_n,a,i)},useMemoCache:gh,useCacheRefresh:Gy},WK={readContext:De,use:Vu,useCallback:xy,useContext:De,useEffect:wy,useImperativeHandle:Ky,useInsertionEffect:Cy,useLayoutEffect:Oy,useMemo:Ry,useReducer:ph,useRef:Ay,useState:function(){return ph(jt)},useDebugValue:kh,useDeferredValue:function(a,i){var s=se();return _n===null?bh(s,a,i):By(s,_n.memoizedState,a,i)},useTransition:function(){var a=ph(jt)[0],i=se().memoizedState;return[typeof a=="boolean"?a:er(a),i]},useSyncExternalStore:sy,useId:Hy,useHostTransitionStatus:Mh,useFormState:My,useActionState:My,useOptimistic:function(a,i){var s=se();return _n!==null?my(s,_n,a,i):(s.baseState=a,[a,s.queue.dispatch])},useMemoCache:gh,useCacheRefresh:Gy},_i=null,ir=0;function qu(a){var i=ir;return ir+=1,_i===null&&(_i=[]),ny(_i,a,i)}function or(a,i){i=i.props.ref,a.ref=i!==void 0?i:null}function Qu(a,i){throw i.$$typeof===p?Error(r(525)):(a=Object.prototype.toString.call(i),Error(r(31,a==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":a)))}function Fy(a){var i=a._init;return i(a._payload)}function Uy(a){function i(N,B){if(a){var G=N.deletions;G===null?(N.deletions=[B],N.flags|=16):G.push(B)}}function s(N,B){if(!a)return null;for(;B!==null;)i(N,B),B=B.sibling;return null}function l(N){for(var B=new Map;N!==null;)N.key!==null?B.set(N.key,N):B.set(N.index,N),N=N.sibling;return B}function f(N,B){return N=Et(N,B),N.index=0,N.sibling=null,N}function g(N,B,G){return N.index=G,a?(G=N.alternate,G!==null?(G=G.index,G<B?(N.flags|=67108866,B):G):(N.flags|=67108866,B)):(N.flags|=1048576,B)}function v(N){return a&&N.alternate===null&&(N.flags|=67108866),N}function M(N,B,G,V){return B===null||B.tag!==6?(B=Uc(G,N.mode,V),B.return=N,B):(B=f(B,G),B.return=N,B)}function x(N,B,G,V){var sn=G.type;return sn===T?U(N,B,G.props.children,V,G.key):B!==null&&(B.elementType===sn||typeof sn=="object"&&sn!==null&&sn.$$typeof===z&&Fy(sn)===B.type)?(B=f(B,G.props),or(B,G),B.return=N,B):(B=Nu(G.type,G.key,G.props,null,N.mode,V),or(B,G),B.return=N,B)}function _(N,B,G,V){return B===null||B.tag!==4||B.stateNode.containerInfo!==G.containerInfo||B.stateNode.implementation!==G.implementation?(B=Vc(G,N.mode,V),B.return=N,B):(B=f(B,G.children||[]),B.return=N,B)}function U(N,B,G,V,sn){return B===null||B.tag!==7?(B=za(G,N.mode,V,sn),B.return=N,B):(B=f(B,G),B.return=N,B)}function Y(N,B,G){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Uc(""+B,N.mode,G),B.return=N,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case y:return G=Nu(B.type,B.key,B.props,null,N.mode,G),or(G,B),G.return=N,G;case k:return B=Vc(B,N.mode,G),B.return=N,B;case z:var V=B._init;return B=V(B._payload),Y(N,B,G)}if(tn(B)||un(B))return B=za(B,N.mode,G,null),B.return=N,B;if(typeof B.then=="function")return Y(N,qu(B),G);if(B.$$typeof===C)return Y(N,Lu(N,B),G);Qu(N,B)}return null}function $(N,B,G,V){var sn=B!==null?B.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return sn!==null?null:M(N,B,""+G,V);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return G.key===sn?x(N,B,G,V):null;case k:return G.key===sn?_(N,B,G,V):null;case z:return sn=G._init,G=sn(G._payload),$(N,B,G,V)}if(tn(G)||un(G))return sn!==null?null:U(N,B,G,V,null);if(typeof G.then=="function")return $(N,B,qu(G),V);if(G.$$typeof===C)return $(N,B,Lu(N,G),V);Qu(N,G)}return null}function F(N,B,G,V,sn){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return N=N.get(G)||null,M(B,N,""+V,sn);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return N=N.get(V.key===null?G:V.key)||null,x(B,N,V,sn);case k:return N=N.get(V.key===null?G:V.key)||null,_(B,N,V,sn);case z:var Cn=V._init;return V=Cn(V._payload),F(N,B,G,V,sn)}if(tn(V)||un(V))return N=N.get(G)||null,U(B,N,V,sn,null);if(typeof V.then=="function")return F(N,B,G,qu(V),sn);if(V.$$typeof===C)return F(N,B,G,Lu(B,V),sn);Qu(B,V)}return null}function yn(N,B,G,V){for(var sn=null,Cn=null,cn=B,gn=B=0,pe=null;cn!==null&&gn<G.length;gn++){cn.index>gn?(pe=cn,cn=null):pe=cn.sibling;var Bn=$(N,cn,G[gn],V);if(Bn===null){cn===null&&(cn=pe);break}a&&cn&&Bn.alternate===null&&i(N,cn),B=g(Bn,B,gn),Cn===null?sn=Bn:Cn.sibling=Bn,Cn=Bn,cn=pe}if(gn===G.length)return s(N,cn),Pn&&Fa(N,gn),sn;if(cn===null){for(;gn<G.length;gn++)cn=Y(N,G[gn],V),cn!==null&&(B=g(cn,B,gn),Cn===null?sn=cn:Cn.sibling=cn,Cn=cn);return Pn&&Fa(N,gn),sn}for(cn=l(cn);gn<G.length;gn++)pe=F(cn,N,gn,G[gn],V),pe!==null&&(a&&pe.alternate!==null&&cn.delete(pe.key===null?gn:pe.key),B=g(pe,B,gn),Cn===null?sn=pe:Cn.sibling=pe,Cn=pe);return a&&cn.forEach(function(Oa){return i(N,Oa)}),Pn&&Fa(N,gn),sn}function mn(N,B,G,V){if(G==null)throw Error(r(151));for(var sn=null,Cn=null,cn=B,gn=B=0,pe=null,Bn=G.next();cn!==null&&!Bn.done;gn++,Bn=G.next()){cn.index>gn?(pe=cn,cn=null):pe=cn.sibling;var Oa=$(N,cn,Bn.value,V);if(Oa===null){cn===null&&(cn=pe);break}a&&cn&&Oa.alternate===null&&i(N,cn),B=g(Oa,B,gn),Cn===null?sn=Oa:Cn.sibling=Oa,Cn=Oa,cn=pe}if(Bn.done)return s(N,cn),Pn&&Fa(N,gn),sn;if(cn===null){for(;!Bn.done;gn++,Bn=G.next())Bn=Y(N,Bn.value,V),Bn!==null&&(B=g(Bn,B,gn),Cn===null?sn=Bn:Cn.sibling=Bn,Cn=Bn);return Pn&&Fa(N,gn),sn}for(cn=l(cn);!Bn.done;gn++,Bn=G.next())Bn=F(cn,N,gn,Bn.value,V),Bn!==null&&(a&&Bn.alternate!==null&&cn.delete(Bn.key===null?gn:Bn.key),B=g(Bn,B,gn),Cn===null?sn=Bn:Cn.sibling=Bn,Cn=Bn);return a&&cn.forEach(function(Zx){return i(N,Zx)}),Pn&&Fa(N,gn),sn}function zn(N,B,G,V){if(typeof G=="object"&&G!==null&&G.type===T&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case y:n:{for(var sn=G.key;B!==null;){if(B.key===sn){if(sn=G.type,sn===T){if(B.tag===7){s(N,B.sibling),V=f(B,G.props.children),V.return=N,N=V;break n}}else if(B.elementType===sn||typeof sn=="object"&&sn!==null&&sn.$$typeof===z&&Fy(sn)===B.type){s(N,B.sibling),V=f(B,G.props),or(V,G),V.return=N,N=V;break n}s(N,B);break}else i(N,B);B=B.sibling}G.type===T?(V=za(G.props.children,N.mode,V,G.key),V.return=N,N=V):(V=Nu(G.type,G.key,G.props,null,N.mode,V),or(V,G),V.return=N,N=V)}return v(N);case k:n:{for(sn=G.key;B!==null;){if(B.key===sn)if(B.tag===4&&B.stateNode.containerInfo===G.containerInfo&&B.stateNode.implementation===G.implementation){s(N,B.sibling),V=f(B,G.children||[]),V.return=N,N=V;break n}else{s(N,B);break}else i(N,B);B=B.sibling}V=Vc(G,N.mode,V),V.return=N,N=V}return v(N);case z:return sn=G._init,G=sn(G._payload),zn(N,B,G,V)}if(tn(G))return yn(N,B,G,V);if(un(G)){if(sn=un(G),typeof sn!="function")throw Error(r(150));return G=sn.call(G),mn(N,B,G,V)}if(typeof G.then=="function")return zn(N,B,qu(G),V);if(G.$$typeof===C)return zn(N,B,Lu(N,G),V);Qu(N,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,B!==null&&B.tag===6?(s(N,B.sibling),V=f(B,G),V.return=N,N=V):(s(N,B),V=Uc(G,N.mode,V),V.return=N,N=V),v(N)):s(N,B)}return function(N,B,G,V){try{ir=0;var sn=zn(N,B,G,V);return _i=null,sn}catch(cn){if(cn===Zo||cn===ju)throw cn;var Cn=$e(29,cn,null,N.mode);return Cn.lanes=V,Cn.return=N,Cn}finally{}}}var ji=Uy(!0),Vy=Uy(!1),at=W(null),kt=null;function fa(a){var i=a.alternate;nn(de,de.current&1),nn(at,a),kt===null&&(i===null||Ei.current!==null||i.memoizedState!==null)&&(kt=a)}function Yy(a){if(a.tag===22){if(nn(de,de.current),nn(at,a),kt===null){var i=a.alternate;i!==null&&i.memoizedState!==null&&(kt=a)}}else ma()}function ma(){nn(de,de.current),nn(at,at.current)}function zt(a){Q(at),kt===a&&(kt=null),Q(de)}var de=W(0);function ns(a){for(var i=a;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||md(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Dh(a,i,s,l){i=a.memoizedState,s=s(l,i),s=s==null?i:S({},i,s),a.memoizedState=s,a.lanes===0&&(a.updateQueue.baseState=s)}var wh={enqueueSetState:function(a,i,s){a=a._reactInternals;var l=Ye(),f=ca(l);f.payload=i,s!=null&&(f.callback=s),i=ha(a,f,l),i!==null&&(We(i,a,l),Xo(i,a,l))},enqueueReplaceState:function(a,i,s){a=a._reactInternals;var l=Ye(),f=ca(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ha(a,f,l),i!==null&&(We(i,a,l),Xo(i,a,l))},enqueueForceUpdate:function(a,i){a=a._reactInternals;var s=Ye(),l=ca(s);l.tag=2,i!=null&&(l.callback=i),i=ha(a,l,s),i!==null&&(We(i,a,s),Xo(i,a,s))}};function Wy(a,i,s,l,f,g,v){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(l,g,v):i.prototype&&i.prototype.isPureReactComponent?!jo(s,l)||!jo(f,g):!0}function Zy(a,i,s,l){a=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==a&&wh.enqueueReplaceState(i,i.state,null)}function Xa(a,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(a=a.defaultProps){s===i&&(s=S({},s));for(var f in a)s[f]===void 0&&(s[f]=a[f])}return s}var es=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function Jy(a){es(a)}function Xy(a){console.error(a)}function qy(a){es(a)}function ts(a,i){try{var s=a.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Qy(a,i,s){try{var l=a.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ch(a,i,s){return s=ca(s),s.tag=3,s.payload={element:null},s.callback=function(){ts(a,i)},s}function nv(a){return a=ca(a),a.tag=3,a}function ev(a,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var g=l.value;a.payload=function(){return f(g)},a.callback=function(){Qy(i,s,l)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Qy(i,s,l),typeof f!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var M=l.stack;this.componentDidCatch(l.value,{componentStack:M!==null?M:""})})}function ZK(a,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Vo(i,s,f,!0),s=at.current,s!==null){switch(s.tag){case 13:return kt===null?Xh():s.alternate===null&&ne===0&&(ne=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===th?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Qh(a,l,f)),!1;case 22:return s.flags|=65536,l===th?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Qh(a,l,f)),!1}throw Error(r(435,s.tag))}return Qh(a,l,f),Xh(),!1}if(Pn)return i=at.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Zc&&(a=Error(r(422),{cause:l}),Uo(Qe(a,s)))):(l!==Zc&&(i=Error(r(423),{cause:l}),Uo(Qe(i,s))),a=a.current.alternate,a.flags|=65536,f&=-f,a.lanes|=f,l=Qe(l,s),f=Ch(a.stateNode,l,f),oh(a,f),ne!==4&&(ne=2)),!1;var g=Error(r(520),{cause:l});if(g=Qe(g,s),dr===null?dr=[g]:dr.push(g),ne!==4&&(ne=2),i===null)return!0;l=Qe(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,a=f&-f,s.lanes|=a,a=Ch(s.stateNode,l,a),oh(s,a),!1;case 1:if(i=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ka===null||!ka.has(g))))return s.flags|=65536,f&=-f,s.lanes|=f,f=nv(f),ev(f,a,s,l),oh(s,f),!1}s=s.return}while(s!==null);return!1}var tv=Error(r(461)),ge=!1;function ye(a,i,s,l){i.child=a===null?Vy(i,null,s,l):ji(i,a.child,s,l)}function av(a,i,s,l,f){s=s.render;var g=i.ref;if("ref"in l){var v={};for(var M in l)M!=="ref"&&(v[M]=l[M])}else v=l;return Wa(i),l=ch(a,i,s,v,g,f),M=hh(),a!==null&&!ge?(dh(a,i,f),$t(a,i,f)):(Pn&&M&&Yc(i),i.flags|=1,ye(a,i,l,f),i.child)}function iv(a,i,s,l,f){if(a===null){var g=s.type;return typeof g=="function"&&!Fc(g)&&g.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=g,ov(a,i,g,l,f)):(a=Nu(s.type,null,l,i,i.mode,f),a.ref=i.ref,a.return=i,i.child=a)}if(g=a.child,!Nh(a,f)){var v=g.memoizedProps;if(s=s.compare,s=s!==null?s:jo,s(v,l)&&a.ref===i.ref)return $t(a,i,f)}return i.flags|=1,a=Et(g,l),a.ref=i.ref,a.return=i,i.child=a}function ov(a,i,s,l,f){if(a!==null){var g=a.memoizedProps;if(jo(g,l)&&a.ref===i.ref)if(ge=!1,i.pendingProps=l=g,Nh(a,f))(a.flags&131072)!==0&&(ge=!0);else return i.lanes=a.lanes,$t(a,i,f)}return Oh(a,i,s,l,f)}function rv(a,i,s){var l=i.pendingProps,f=l.children,g=a!==null?a.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=g!==null?g.baseLanes|s:s,a!==null){for(f=i.child=a.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;i.childLanes=g&~l}else i.childLanes=0,i.child=null;return uv(a,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},a!==null&&_u(i,g!==null?g.cachePool:null),g!==null?oy(i,g):uh(),Yy(i);else return i.lanes=i.childLanes=536870912,uv(a,i,g!==null?g.baseLanes|s:s,s)}else g!==null?(_u(i,g.cachePool),oy(i,g),ma(),i.memoizedState=null):(a!==null&&_u(i,null),uh(),ma());return ye(a,i,f,s),i.child}function uv(a,i,s,l){var f=eh();return f=f===null?null:{parent:he._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},a!==null&&_u(i,null),uh(),Yy(i),a!==null&&Vo(a,i,l,!0),null}function as(a,i){var s=i.ref;if(s===null)a!==null&&a.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(a===null||a.ref!==s)&&(i.flags|=4194816)}}function Oh(a,i,s,l,f){return Wa(i),s=ch(a,i,s,l,void 0,f),l=hh(),a!==null&&!ge?(dh(a,i,f),$t(a,i,f)):(Pn&&l&&Yc(i),i.flags|=1,ye(a,i,s,f),i.child)}function sv(a,i,s,l,f,g){return Wa(i),i.updateQueue=null,s=uy(i,l,s,f),ry(a),l=hh(),a!==null&&!ge?(dh(a,i,g),$t(a,i,g)):(Pn&&l&&Yc(i),i.flags|=1,ye(a,i,s,g),i.child)}function lv(a,i,s,l,f){if(Wa(i),i.stateNode===null){var g=xi,v=s.contextType;typeof v=="object"&&v!==null&&(g=De(v)),g=new s(l,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=wh,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=l,g.state=i.memoizedState,g.refs={},ah(i),v=s.contextType,g.context=typeof v=="object"&&v!==null?De(v):xi,g.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Dh(i,s,v,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(v=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),v!==g.state&&wh.enqueueReplaceState(g,g.state,null),Qo(i,l,g,f),qo(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(a===null){g=i.stateNode;var M=i.memoizedProps,x=Xa(s,M);g.props=x;var _=g.context,U=s.contextType;v=xi,typeof U=="object"&&U!==null&&(v=De(U));var Y=s.getDerivedStateFromProps;U=typeof Y=="function"||typeof g.getSnapshotBeforeUpdate=="function",M=i.pendingProps!==M,U||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M||_!==v)&&Zy(i,g,l,v),la=!1;var $=i.memoizedState;g.state=$,Qo(i,l,g,f),qo(),_=i.memoizedState,M||$!==_||la?(typeof Y=="function"&&(Dh(i,s,Y,l),_=i.memoizedState),(x=la||Wy(i,s,x,l,$,_,v))?(U||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=_),g.props=l,g.state=_,g.context=v,l=x):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,ih(a,i),v=i.memoizedProps,U=Xa(s,v),g.props=U,Y=i.pendingProps,$=g.context,_=s.contextType,x=xi,typeof _=="object"&&_!==null&&(x=De(_)),M=s.getDerivedStateFromProps,(_=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==Y||$!==x)&&Zy(i,g,l,x),la=!1,$=i.memoizedState,g.state=$,Qo(i,l,g,f),qo();var F=i.memoizedState;v!==Y||$!==F||la||a!==null&&a.dependencies!==null&&Gu(a.dependencies)?(typeof M=="function"&&(Dh(i,s,M,l),F=i.memoizedState),(U=la||Wy(i,s,U,l,$,F,x)||a!==null&&a.dependencies!==null&&Gu(a.dependencies))?(_||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,F,x),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,F,x)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||v===a.memoizedProps&&$===a.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===a.memoizedProps&&$===a.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),g.props=l,g.state=F,g.context=x,l=U):(typeof g.componentDidUpdate!="function"||v===a.memoizedProps&&$===a.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===a.memoizedProps&&$===a.memoizedState||(i.flags|=1024),l=!1)}return g=l,as(a,i),l=(i.flags&128)!==0,g||l?(g=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,a!==null&&l?(i.child=ji(i,a.child,null,f),i.child=ji(i,null,s,f)):ye(a,i,s,f),i.memoizedState=g.state,a=i.child):a=$t(a,i,f),a}function cv(a,i,s,l){return Fo(),i.flags|=256,ye(a,i,s,l),i.child}var Ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kh(a){return{baseLanes:a,cachePool:Xp()}}function xh(a,i,s){return a=a!==null?a.childLanes&~s:0,i&&(a|=it),a}function hv(a,i,s){var l=i.pendingProps,f=!1,g=(i.flags&128)!==0,v;if((v=g)||(v=a!==null&&a.memoizedState===null?!1:(de.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,a===null){if(Pn){if(f?fa(i):ma(),Pn){var M=Qn,x;if(x=M){n:{for(x=M,M=vt;x.nodeType!==8;){if(!M){M=null;break n}if(x=ht(x.nextSibling),x===null){M=null;break n}}M=x}M!==null?(i.memoizedState={dehydrated:M,treeContext:$a!==null?{id:Ht,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},x=$e(18,null,null,0),x.stateNode=M,x.return=i,i.child=x,Ie=i,Qn=null,x=!0):x=!1}x||Va(i)}if(M=i.memoizedState,M!==null&&(M=M.dehydrated,M!==null))return md(M)?i.lanes=32:i.lanes=536870912,null;zt(i)}return M=l.children,l=l.fallback,f?(ma(),f=i.mode,M=is({mode:"hidden",children:M},f),l=za(l,f,s,null),M.return=i,l.return=i,M.sibling=l,i.child=M,f=i.child,f.memoizedState=Kh(s),f.childLanes=xh(a,v,s),i.memoizedState=Ih,l):(fa(i),Rh(i,M))}if(x=a.memoizedState,x!==null&&(M=x.dehydrated,M!==null)){if(g)i.flags&256?(fa(i),i.flags&=-257,i=Bh(a,i,s)):i.memoizedState!==null?(ma(),i.child=a.child,i.flags|=128,i=null):(ma(),f=l.fallback,M=i.mode,l=is({mode:"visible",children:l.children},M),f=za(f,M,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,ji(i,a.child,null,s),l=i.child,l.memoizedState=Kh(s),l.childLanes=xh(a,v,s),i.memoizedState=Ih,i=f);else if(fa(i),md(M)){if(v=M.nextSibling&&M.nextSibling.dataset,v)var _=v.dgst;v=_,l=Error(r(419)),l.stack="",l.digest=v,Uo({value:l,source:null,stack:null}),i=Bh(a,i,s)}else if(ge||Vo(a,i,s,!1),v=(s&a.childLanes)!==0,ge||v){if(v=Fn,v!==null&&(l=s&-s,l=(l&42)!==0?1:gc(l),l=(l&(v.suspendedLanes|s))!==0?0:l,l!==0&&l!==x.retryLane))throw x.retryLane=l,Ki(a,l),We(v,a,l),tv;M.data==="$?"||Xh(),i=Bh(a,i,s)}else M.data==="$?"?(i.flags|=192,i.child=a.child,i=null):(a=x.treeContext,Qn=ht(M.nextSibling),Ie=i,Pn=!0,Ua=null,vt=!1,a!==null&&(et[tt++]=Ht,et[tt++]=Gt,et[tt++]=$a,Ht=a.id,Gt=a.overflow,$a=i),i=Rh(i,l.children),i.flags|=4096);return i}return f?(ma(),f=l.fallback,M=i.mode,x=a.child,_=x.sibling,l=Et(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,_!==null?f=Et(_,f):(f=za(f,M,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,M=a.child.memoizedState,M===null?M=Kh(s):(x=M.cachePool,x!==null?(_=he._currentValue,x=x.parent!==_?{parent:_,pool:_}:x):x=Xp(),M={baseLanes:M.baseLanes|s,cachePool:x}),f.memoizedState=M,f.childLanes=xh(a,v,s),i.memoizedState=Ih,l):(fa(i),s=a.child,a=s.sibling,s=Et(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,a!==null&&(v=i.deletions,v===null?(i.deletions=[a],i.flags|=16):v.push(a)),i.child=s,i.memoizedState=null,s)}function Rh(a,i){return i=is({mode:"visible",children:i},a.mode),i.return=a,a.child=i}function is(a,i){return a=$e(22,a,null,i),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function Bh(a,i,s){return ji(i,a.child,null,s),a=Rh(i,i.pendingProps.children),a.flags|=2,i.memoizedState=null,a}function dv(a,i,s){a.lanes|=i;var l=a.alternate;l!==null&&(l.lanes|=i),Xc(a.return,i,s)}function Ph(a,i,s,l,f){var g=a.memoizedState;g===null?a.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=s,g.tailMode=f)}function fv(a,i,s){var l=i.pendingProps,f=l.revealOrder,g=l.tail;if(ye(a,i,l.children,s),l=de.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(a!==null&&(a.flags&128)!==0)n:for(a=i.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&dv(a,s,i);else if(a.tag===19)dv(a,s,i);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break n;for(;a.sibling===null;){if(a.return===null||a.return===i)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}l&=1}switch(nn(de,l),f){case"forwards":for(s=i.child,f=null;s!==null;)a=s.alternate,a!==null&&ns(a)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ph(i,!1,f,s,g);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(a=f.alternate,a!==null&&ns(a)===null){i.child=f;break}a=f.sibling,f.sibling=s,s=f,f=a}Ph(i,!0,s,null,g);break;case"together":Ph(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $t(a,i,s){if(a!==null&&(i.dependencies=a.dependencies),va|=i.lanes,(s&i.childLanes)===0)if(a!==null){if(Vo(a,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(a!==null&&i.child!==a.child)throw Error(r(153));if(i.child!==null){for(a=i.child,s=Et(a,a.pendingProps),i.child=s,s.return=i;a.sibling!==null;)a=a.sibling,s=s.sibling=Et(a,a.pendingProps),s.return=i;s.sibling=null}return i.child}function Nh(a,i){return(a.lanes&i)!==0?!0:(a=a.dependencies,!!(a!==null&&Gu(a)))}function JK(a,i,s){switch(i.tag){case 3:Kn(i,i.stateNode.containerInfo),sa(i,he,a.memoizedState.cache),Fo();break;case 27:case 5:Co(i);break;case 4:Kn(i,i.stateNode.containerInfo);break;case 10:sa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(fa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?hv(a,i,s):(fa(i),a=$t(a,i,s),a!==null?a.sibling:null);fa(i);break;case 19:var f=(a.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Vo(a,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return fv(a,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),nn(de,de.current),l)break;return null;case 22:case 23:return i.lanes=0,rv(a,i,s);case 24:sa(i,he,a.memoizedState.cache)}return $t(a,i,s)}function mv(a,i,s){if(a!==null)if(a.memoizedProps!==i.pendingProps)ge=!0;else{if(!Nh(a,s)&&(i.flags&128)===0)return ge=!1,JK(a,i,s);ge=(a.flags&131072)!==0}else ge=!1,Pn&&(i.flags&1048576)!==0&&Fp(i,Hu,i.index);switch(i.lanes=0,i.tag){case 16:n:{a=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")Fc(l)?(a=Xa(l,a),i.tag=1,i=lv(null,i,l,a,s)):(i.tag=0,i=Oh(null,i,l,a,s));else{if(l!=null){if(f=l.$$typeof,f===K){i.tag=11,i=av(null,i,l,a,s);break n}else if(f===j){i.tag=14,i=iv(null,i,l,a,s);break n}}throw i=q(l)||l,Error(r(306,i,""))}}return i;case 0:return Oh(a,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Xa(l,i.pendingProps),lv(a,i,l,f,s);case 3:n:{if(Kn(i,i.stateNode.containerInfo),a===null)throw Error(r(387));l=i.pendingProps;var g=i.memoizedState;f=g.element,ih(a,i),Qo(i,l,null,s);var v=i.memoizedState;if(l=v.cache,sa(i,he,l),l!==g.cache&&qc(i,[he],s,!0),qo(),l=v.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=cv(a,i,l,s);break n}else if(l!==f){f=Qe(Error(r(424)),i),Uo(f),i=cv(a,i,l,s);break n}else{switch(a=i.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(Qn=ht(a.firstChild),Ie=i,Pn=!0,Ua=null,vt=!0,s=Vy(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fo(),l===f){i=$t(a,i,s);break n}ye(a,i,l,s)}i=i.child}return i;case 26:return as(a,i),a===null?(s=yk(i.type,null,i.pendingProps,null))?i.memoizedState=s:Pn||(s=i.type,a=i.pendingProps,l=ys(hn.current).createElement(s),l[Ae]=i,l[Re]=a,ke(l,s,a),me(l),i.stateNode=l):i.memoizedState=yk(i.type,a.memoizedProps,i.pendingProps,a.memoizedState),null;case 27:return Co(i),a===null&&Pn&&(l=i.stateNode=gk(i.type,i.pendingProps,hn.current),Ie=i,vt=!0,f=Qn,Ma(i.type)?(gd=f,Qn=ht(l.firstChild)):Qn=f),ye(a,i,i.pendingProps.children,s),as(a,i),a===null&&(i.flags|=4194304),i.child;case 5:return a===null&&Pn&&((f=l=Qn)&&(l=Ax(l,i.type,i.pendingProps,vt),l!==null?(i.stateNode=l,Ie=i,Qn=ht(l.firstChild),vt=!1,f=!0):f=!1),f||Va(i)),Co(i),f=i.type,g=i.pendingProps,v=a!==null?a.memoizedProps:null,l=g.children,hd(f,g)?l=null:v!==null&&hd(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=ch(a,i,zK,null,null,s),br._currentValue=f),as(a,i),ye(a,i,l,s),i.child;case 6:return a===null&&Pn&&((a=s=Qn)&&(s=Dx(s,i.pendingProps,vt),s!==null?(i.stateNode=s,Ie=i,Qn=null,a=!0):a=!1),a||Va(i)),null;case 13:return hv(a,i,s);case 4:return Kn(i,i.stateNode.containerInfo),l=i.pendingProps,a===null?i.child=ji(i,null,l,s):ye(a,i,l,s),i.child;case 11:return av(a,i,i.type,i.pendingProps,s);case 7:return ye(a,i,i.pendingProps,s),i.child;case 8:return ye(a,i,i.pendingProps.children,s),i.child;case 12:return ye(a,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,sa(i,i.type,l.value),ye(a,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Wa(i),f=De(f),l=l(f),i.flags|=1,ye(a,i,l,s),i.child;case 14:return iv(a,i,i.type,i.pendingProps,s);case 15:return ov(a,i,i.type,i.pendingProps,s);case 19:return fv(a,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},a===null?(s=is(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Et(a.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return rv(a,i,s);case 24:return Wa(i),l=De(he),a===null?(f=eh(),f===null&&(f=Fn,g=Qc(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=s),f=g),i.memoizedState={parent:l,cache:f},ah(i),sa(i,he,f)):((a.lanes&s)!==0&&(ih(a,i),Qo(i,null,null,s),qo()),f=a.memoizedState,g=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),sa(i,he,l)):(l=g.cache,sa(i,he,l),l!==f.cache&&qc(i,[he],s,!0))),ye(a,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ft(a){a.flags|=4}function gv(a,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!Mk(i)){if(i=at.current,i!==null&&((xn&4194048)===xn?kt!==null:(xn&62914560)!==xn&&(xn&536870912)===0||i!==kt))throw Jo=th,qp;a.flags|=8192}}function os(a,i){i!==null&&(a.flags|=4),a.flags&16384&&(i=a.tag!==22?YS():536870912,a.lanes|=i,Ui|=i)}function rr(a,i){if(!Pn)switch(a.tailMode){case"hidden":i=a.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?a.tail=null:s.sibling=null;break;case"collapsed":s=a.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||a.tail===null?a.tail=null:a.tail.sibling=null:l.sibling=null}}function Zn(a){var i=a.alternate!==null&&a.alternate.child===a.child,s=0,l=0;if(i)for(var f=a.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=a,f=f.sibling;else for(f=a.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=a,f=f.sibling;return a.subtreeFlags|=l,a.childLanes=s,i}function XK(a,i,s){var l=i.pendingProps;switch(Wc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zn(i),null;case 1:return Zn(i),null;case 3:return s=i.stateNode,l=null,a!==null&&(l=a.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),_t(he),Le(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(a===null||a.child===null)&&($o(i)?Ft(i):a===null||a.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Yp())),Zn(i),null;case 26:return s=i.memoizedState,a===null?(Ft(i),s!==null?(Zn(i),gv(i,s)):(Zn(i),i.flags&=-16777217)):s?s!==a.memoizedState?(Ft(i),Zn(i),gv(i,s)):(Zn(i),i.flags&=-16777217):(a.memoizedProps!==l&&Ft(i),Zn(i),i.flags&=-16777217),null;case 27:Ea(i),s=hn.current;var f=i.type;if(a!==null&&i.stateNode!=null)a.memoizedProps!==l&&Ft(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zn(i),null}a=ln.current,$o(i)?Up(i):(a=gk(f,l,s),i.stateNode=a,Ft(i))}return Zn(i),null;case 5:if(Ea(i),s=i.type,a!==null&&i.stateNode!=null)a.memoizedProps!==l&&Ft(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Zn(i),null}if(a=ln.current,$o(i))Up(i);else{switch(f=ys(hn.current),a){case 1:a=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=f.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}a[Ae]=i,a[Re]=l;n:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)a.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break n;for(;f.sibling===null;){if(f.return===null||f.return===i)break n;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=a;n:switch(ke(a,s,l),s){case"button":case"input":case"select":case"textarea":a=!!l.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&Ft(i)}}return Zn(i),i.flags&=-16777217,null;case 6:if(a&&i.stateNode!=null)a.memoizedProps!==l&&Ft(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(a=hn.current,$o(i)){if(a=i.stateNode,s=i.memoizedProps,l=null,f=Ie,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}a[Ae]=i,a=!!(a.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||sk(a.nodeValue,s)),a||Va(i)}else a=ys(a).createTextNode(l),a[Ae]=i,i.stateNode=a}return Zn(i),null;case 13:if(l=i.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(f=$o(i),l!==null&&l.dehydrated!==null){if(a===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ae]=i}else Fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zn(i),f=!1}else f=Yp(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(zt(i),i):(zt(i),null)}if(zt(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,a=a!==null&&a.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var g=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==f&&(l.flags|=2048)}return s!==a&&s&&(i.child.flags|=8192),os(i,i.updateQueue),Zn(i),null;case 4:return Le(),a===null&&rd(i.stateNode.containerInfo),Zn(i),null;case 10:return _t(i.type),Zn(i),null;case 19:if(Q(de),f=i.memoizedState,f===null)return Zn(i),null;if(l=(i.flags&128)!==0,g=f.rendering,g===null)if(l)rr(f,!1);else{if(ne!==0||a!==null&&(a.flags&128)!==0)for(a=i.child;a!==null;){if(g=ns(a),g!==null){for(i.flags|=128,rr(f,!1),a=g.updateQueue,i.updateQueue=a,os(i,a),i.subtreeFlags=0,a=s,s=i.child;s!==null;)$p(s,a),s=s.sibling;return nn(de,de.current&1|2),i.child}a=a.sibling}f.tail!==null&&yt()>ss&&(i.flags|=128,l=!0,rr(f,!1),i.lanes=4194304)}else{if(!l)if(a=ns(g),a!==null){if(i.flags|=128,l=!0,a=a.updateQueue,i.updateQueue=a,os(i,a),rr(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Pn)return Zn(i),null}else 2*yt()-f.renderingStartTime>ss&&s!==536870912&&(i.flags|=128,l=!0,rr(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(a=f.last,a!==null?a.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=yt(),i.sibling=null,a=de.current,nn(de,l?a&1|2:a&1),i):(Zn(i),null);case 22:case 23:return zt(i),sh(),l=i.memoizedState!==null,a!==null?a.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Zn(i),i.subtreeFlags&6&&(i.flags|=8192)):Zn(i),s=i.updateQueue,s!==null&&os(i,s.retryQueue),s=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),a!==null&&Q(Za),null;case 24:return s=null,a!==null&&(s=a.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),_t(he),Zn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function qK(a,i){switch(Wc(i),i.tag){case 1:return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 3:return _t(he),Le(),a=i.flags,(a&65536)!==0&&(a&128)===0?(i.flags=a&-65537|128,i):null;case 26:case 27:case 5:return Ea(i),null;case 13:if(zt(i),a=i.memoizedState,a!==null&&a.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Fo()}return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 19:return Q(de),null;case 4:return Le(),null;case 10:return _t(i.type),null;case 22:case 23:return zt(i),sh(),a!==null&&Q(Za),a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 24:return _t(he),null;case 25:return null;default:return null}}function Sv(a,i){switch(Wc(i),i.tag){case 3:_t(he),Le();break;case 26:case 27:case 5:Ea(i);break;case 4:Le();break;case 13:zt(i);break;case 19:Q(de);break;case 10:_t(i.type);break;case 22:case 23:zt(i),sh(),a!==null&&Q(Za);break;case 24:_t(he)}}function ur(a,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&a)===a){l=void 0;var g=s.create,v=s.inst;l=g(),v.destroy=l}s=s.next}while(s!==f)}}catch(M){$n(i,i.return,M)}}function ga(a,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var g=f.next;l=g;do{if((l.tag&a)===a){var v=l.inst,M=v.destroy;if(M!==void 0){v.destroy=void 0,f=i;var x=s,_=M;try{_()}catch(U){$n(f,x,U)}}}l=l.next}while(l!==g)}}catch(U){$n(i,i.return,U)}}function pv(a){var i=a.updateQueue;if(i!==null){var s=a.stateNode;try{iy(i,s)}catch(l){$n(a,a.return,l)}}}function yv(a,i,s){s.props=Xa(a.type,a.memoizedProps),s.state=a.memoizedState;try{s.componentWillUnmount()}catch(l){$n(a,i,l)}}function sr(a,i){try{var s=a.ref;if(s!==null){switch(a.tag){case 26:case 27:case 5:var l=a.stateNode;break;case 30:l=a.stateNode;break;default:l=a.stateNode}typeof s=="function"?a.refCleanup=s(l):s.current=l}}catch(f){$n(a,i,f)}}function bt(a,i){var s=a.ref,l=a.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){$n(a,i,f)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){$n(a,i,f)}else s.current=null}function vv(a){var i=a.type,s=a.memoizedProps,l=a.stateNode;try{n:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break n;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){$n(a,a.return,f)}}function Eh(a,i,s){try{var l=a.stateNode;vx(l,a.type,s,i),l[Re]=i}catch(f){$n(a,a.return,f)}}function kv(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&Ma(a.type)||a.tag===4}function Hh(a){n:for(;;){for(;a.sibling===null;){if(a.return===null||kv(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&Ma(a.type)||a.flags&2||a.child===null||a.tag===4)continue n;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Gh(a,i,s){var l=a.tag;if(l===5||l===6)a=a.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(a,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(a),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ps));else if(l!==4&&(l===27&&Ma(a.type)&&(s=a.stateNode,i=null),a=a.child,a!==null))for(Gh(a,i,s),a=a.sibling;a!==null;)Gh(a,i,s),a=a.sibling}function rs(a,i,s){var l=a.tag;if(l===5||l===6)a=a.stateNode,i?s.insertBefore(a,i):s.appendChild(a);else if(l!==4&&(l===27&&Ma(a.type)&&(s=a.stateNode),a=a.child,a!==null))for(rs(a,i,s),a=a.sibling;a!==null;)rs(a,i,s),a=a.sibling}function bv(a){var i=a.stateNode,s=a.memoizedProps;try{for(var l=a.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);ke(i,l,s),i[Ae]=a,i[Re]=s}catch(g){$n(a,a.return,g)}}var Ut=!1,oe=!1,Lh=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,Se=null;function QK(a,i){if(a=a.containerInfo,ld=As,a=Bp(a),Hc(a)){if("selectionStart"in a)var s={start:a.selectionStart,end:a.selectionEnd};else n:{s=(s=a.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break n}var v=0,M=-1,x=-1,_=0,U=0,Y=a,$=null;e:for(;;){for(var F;Y!==s||f!==0&&Y.nodeType!==3||(M=v+f),Y!==g||l!==0&&Y.nodeType!==3||(x=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(F=Y.firstChild)!==null;)$=Y,Y=F;for(;;){if(Y===a)break e;if($===s&&++_===f&&(M=v),$===g&&++U===l&&(x=v),(F=Y.nextSibling)!==null)break;Y=$,$=Y.parentNode}Y=F}s=M===-1||x===-1?null:{start:M,end:x}}else s=null}s=s||{start:0,end:0}}else s=null;for(cd={focusedElem:a,selectionRange:s},As=!1,Se=i;Se!==null;)if(i=Se,a=i.child,(i.subtreeFlags&1024)!==0&&a!==null)a.return=i,Se=a;else for(;Se!==null;){switch(i=Se,g=i.alternate,a=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&g!==null){a=void 0,s=i,f=g.memoizedProps,g=g.memoizedState,l=s.stateNode;try{var yn=Xa(s.type,f,s.elementType===s.type);a=l.getSnapshotBeforeUpdate(yn,g),l.__reactInternalSnapshotBeforeUpdate=a}catch(mn){$n(s,s.return,mn)}}break;case 3:if((a&1024)!==0){if(a=i.stateNode.containerInfo,s=a.nodeType,s===9)fd(a);else if(s===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":fd(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(r(163))}if(a=i.sibling,a!==null){a.return=i.return,Se=a;break}Se=i.return}}function Mv(a,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(a,s),l&4&&ur(5,s);break;case 1:if(Sa(a,s),l&4)if(a=s.stateNode,i===null)try{a.componentDidMount()}catch(v){$n(s,s.return,v)}else{var f=Xa(s.type,i.memoizedProps);i=i.memoizedState;try{a.componentDidUpdate(f,i,a.__reactInternalSnapshotBeforeUpdate)}catch(v){$n(s,s.return,v)}}l&64&&pv(s),l&512&&sr(s,s.return);break;case 3:if(Sa(a,s),l&64&&(a=s.updateQueue,a!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{iy(a,i)}catch(v){$n(s,s.return,v)}}break;case 27:i===null&&l&4&&bv(s);case 26:case 5:Sa(a,s),i===null&&l&4&&vv(s),l&512&&sr(s,s.return);break;case 12:Sa(a,s);break;case 13:Sa(a,s),l&4&&wv(a,s),l&64&&(a=s.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(s=sx.bind(null,s),wx(a,s))));break;case 22:if(l=s.memoizedState!==null||Ut,!l){i=i!==null&&i.memoizedState!==null||oe,f=Ut;var g=oe;Ut=l,(oe=i)&&!g?pa(a,s,(s.subtreeFlags&8772)!==0):Sa(a,s),Ut=f,oe=g}break;case 30:break;default:Sa(a,s)}}function Av(a){var i=a.alternate;i!==null&&(a.alternate=null,Av(i)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(i=a.stateNode,i!==null&&yc(i)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var Yn=null,Ne=!1;function Vt(a,i,s){for(s=s.child;s!==null;)Dv(a,i,s),s=s.sibling}function Dv(a,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(Io,s)}catch{}switch(s.tag){case 26:oe||bt(s,i),Vt(a,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:oe||bt(s,i);var l=Yn,f=Ne;Ma(s.type)&&(Yn=s.stateNode,Ne=!1),Vt(a,i,s),pr(s.stateNode),Yn=l,Ne=f;break;case 5:oe||bt(s,i);case 6:if(l=Yn,f=Ne,Yn=null,Vt(a,i,s),Yn=l,Ne=f,Yn!==null)if(Ne)try{(Yn.nodeType===9?Yn.body:Yn.nodeName==="HTML"?Yn.ownerDocument.body:Yn).removeChild(s.stateNode)}catch(g){$n(s,i,g)}else try{Yn.removeChild(s.stateNode)}catch(g){$n(s,i,g)}break;case 18:Yn!==null&&(Ne?(a=Yn,fk(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.stateNode),Dr(a)):fk(Yn,s.stateNode));break;case 4:l=Yn,f=Ne,Yn=s.stateNode.containerInfo,Ne=!0,Vt(a,i,s),Yn=l,Ne=f;break;case 0:case 11:case 14:case 15:oe||ga(2,s,i),oe||ga(4,s,i),Vt(a,i,s);break;case 1:oe||(bt(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&yv(s,i,l)),Vt(a,i,s);break;case 21:Vt(a,i,s);break;case 22:oe=(l=oe)||s.memoizedState!==null,Vt(a,i,s),oe=l;break;default:Vt(a,i,s)}}function wv(a,i){if(i.memoizedState===null&&(a=i.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Dr(a)}catch(s){$n(i,i.return,s)}}function nx(a){switch(a.tag){case 13:case 19:var i=a.stateNode;return i===null&&(i=a.stateNode=new Tv),i;case 22:return a=a.stateNode,i=a._retryCache,i===null&&(i=a._retryCache=new Tv),i;default:throw Error(r(435,a.tag))}}function _h(a,i){var s=nx(a);i.forEach(function(l){var f=lx.bind(null,a,l);s.has(l)||(s.add(l),l.then(f,f))})}function Fe(a,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],g=a,v=i,M=v;n:for(;M!==null;){switch(M.tag){case 27:if(Ma(M.type)){Yn=M.stateNode,Ne=!1;break n}break;case 5:Yn=M.stateNode,Ne=!1;break n;case 3:case 4:Yn=M.stateNode.containerInfo,Ne=!0;break n}M=M.return}if(Yn===null)throw Error(r(160));Dv(g,v,f),Yn=null,Ne=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Cv(i,a),i=i.sibling}var ct=null;function Cv(a,i){var s=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Fe(i,a),Ue(a),l&4&&(ga(3,a,a.return),ur(3,a),ga(5,a,a.return));break;case 1:Fe(i,a),Ue(a),l&512&&(oe||s===null||bt(s,s.return)),l&64&&Ut&&(a=a.updateQueue,a!==null&&(l=a.callbacks,l!==null&&(s=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ct;if(Fe(i,a),Ue(a),l&512&&(oe||s===null||bt(s,s.return)),l&4){var g=s!==null?s.memoizedState:null;if(l=a.memoizedState,s===null)if(l===null)if(a.stateNode===null){n:{l=a.type,s=a.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":g=f.getElementsByTagName("title")[0],(!g||g[Ro]||g[Ae]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(l),f.head.insertBefore(g,f.querySelector("head > title"))),ke(g,l,s),g[Ae]=a,me(g),l=g;break n;case"link":var v=bk("link","href",f).get(l+(s.href||""));if(v){for(var M=0;M<v.length;M++)if(g=v[M],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(M,1);break e}}g=f.createElement(l),ke(g,l,s),f.head.appendChild(g);break;case"meta":if(v=bk("meta","content",f).get(l+(s.content||""))){for(M=0;M<v.length;M++)if(g=v[M],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(M,1);break e}}g=f.createElement(l),ke(g,l,s),f.head.appendChild(g);break;default:throw Error(r(468,l))}g[Ae]=a,me(g),l=g}a.stateNode=l}else Tk(f,a.type,a.stateNode);else a.stateNode=kk(f,l,a.memoizedProps);else g!==l?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,l===null?Tk(f,a.type,a.stateNode):kk(f,l,a.memoizedProps)):l===null&&a.stateNode!==null&&Eh(a,a.memoizedProps,s.memoizedProps)}break;case 27:Fe(i,a),Ue(a),l&512&&(oe||s===null||bt(s,s.return)),s!==null&&l&4&&Eh(a,a.memoizedProps,s.memoizedProps);break;case 5:if(Fe(i,a),Ue(a),l&512&&(oe||s===null||bt(s,s.return)),a.flags&32){f=a.stateNode;try{Mi(f,"")}catch(F){$n(a,a.return,F)}}l&4&&a.stateNode!=null&&(f=a.memoizedProps,Eh(a,f,s!==null?s.memoizedProps:f)),l&1024&&(Lh=!0);break;case 6:if(Fe(i,a),Ue(a),l&4){if(a.stateNode===null)throw Error(r(162));l=a.memoizedProps,s=a.stateNode;try{s.nodeValue=l}catch(F){$n(a,a.return,F)}}break;case 3:if(bs=null,f=ct,ct=vs(i.containerInfo),Fe(i,a),ct=f,Ue(a),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Dr(i.containerInfo)}catch(F){$n(a,a.return,F)}Lh&&(Lh=!1,Ov(a));break;case 4:l=ct,ct=vs(a.stateNode.containerInfo),Fe(i,a),Ue(a),ct=l;break;case 12:Fe(i,a),Ue(a);break;case 13:Fe(i,a),Ue(a),a.child.flags&8192&&a.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vh=yt()),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,_h(a,l)));break;case 22:f=a.memoizedState!==null;var x=s!==null&&s.memoizedState!==null,_=Ut,U=oe;if(Ut=_||f,oe=U||x,Fe(i,a),oe=U,Ut=_,Ue(a),l&8192)n:for(i=a.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||x||Ut||oe||qa(a)),s=null,i=a;;){if(i.tag===5||i.tag===26){if(s===null){x=s=i;try{if(g=x.stateNode,f)v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{M=x.stateNode;var Y=x.memoizedProps.style,$=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;M.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(F){$n(x,x.return,F)}}}else if(i.tag===6){if(s===null){x=i;try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(F){$n(x,x.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===a)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break n;for(;i.sibling===null;){if(i.return===null||i.return===a)break n;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=a.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,_h(a,s))));break;case 19:Fe(i,a),Ue(a),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,_h(a,l)));break;case 30:break;case 21:break;default:Fe(i,a),Ue(a)}}function Ue(a){var i=a.flags;if(i&2){try{for(var s,l=a.return;l!==null;){if(kv(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,g=Hh(a);rs(a,g,f);break;case 5:var v=s.stateNode;s.flags&32&&(Mi(v,""),s.flags&=-33);var M=Hh(a);rs(a,M,v);break;case 3:case 4:var x=s.stateNode.containerInfo,_=Hh(a);Gh(a,_,x);break;default:throw Error(r(161))}}catch(U){$n(a,a.return,U)}a.flags&=-3}i&4096&&(a.flags&=-4097)}function Ov(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var i=a;Ov(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),a=a.sibling}}function Sa(a,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mv(a,i.alternate,i),i=i.sibling}function qa(a){for(a=a.child;a!==null;){var i=a;switch(i.tag){case 0:case 11:case 14:case 15:ga(4,i,i.return),qa(i);break;case 1:bt(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&yv(i,i.return,s),qa(i);break;case 27:pr(i.stateNode);case 26:case 5:bt(i,i.return),qa(i);break;case 22:i.memoizedState===null&&qa(i);break;case 30:qa(i);break;default:qa(i)}a=a.sibling}}function pa(a,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=a,g=i,v=g.flags;switch(g.tag){case 0:case 11:case 15:pa(f,g,s),ur(4,g);break;case 1:if(pa(f,g,s),l=g,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(_){$n(l,l.return,_)}if(l=g,f=l.updateQueue,f!==null){var M=l.stateNode;try{var x=f.shared.hiddenCallbacks;if(x!==null)for(f.shared.hiddenCallbacks=null,f=0;f<x.length;f++)ay(x[f],M)}catch(_){$n(l,l.return,_)}}s&&v&64&&pv(g),sr(g,g.return);break;case 27:bv(g);case 26:case 5:pa(f,g,s),s&&l===null&&v&4&&vv(g),sr(g,g.return);break;case 12:pa(f,g,s);break;case 13:pa(f,g,s),s&&v&4&&wv(f,g);break;case 22:g.memoizedState===null&&pa(f,g,s),sr(g,g.return);break;case 30:break;default:pa(f,g,s)}i=i.sibling}}function jh(a,i){var s=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(a!=null&&a.refCount++,s!=null&&Yo(s))}function zh(a,i){a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&Yo(a))}function Tt(a,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Iv(a,i,s,l),i=i.sibling}function Iv(a,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Tt(a,i,s,l),f&2048&&ur(9,i);break;case 1:Tt(a,i,s,l);break;case 3:Tt(a,i,s,l),f&2048&&(a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&Yo(a)));break;case 12:if(f&2048){Tt(a,i,s,l),a=i.stateNode;try{var g=i.memoizedProps,v=g.id,M=g.onPostCommit;typeof M=="function"&&M(v,i.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(x){$n(i,i.return,x)}}else Tt(a,i,s,l);break;case 13:Tt(a,i,s,l);break;case 23:break;case 22:g=i.stateNode,v=i.alternate,i.memoizedState!==null?g._visibility&2?Tt(a,i,s,l):lr(a,i):g._visibility&2?Tt(a,i,s,l):(g._visibility|=2,zi(a,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&jh(v,i);break;case 24:Tt(a,i,s,l),f&2048&&zh(i.alternate,i);break;default:Tt(a,i,s,l)}}function zi(a,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=a,v=i,M=s,x=l,_=v.flags;switch(v.tag){case 0:case 11:case 15:zi(g,v,M,x,f),ur(8,v);break;case 23:break;case 22:var U=v.stateNode;v.memoizedState!==null?U._visibility&2?zi(g,v,M,x,f):lr(g,v):(U._visibility|=2,zi(g,v,M,x,f)),f&&_&2048&&jh(v.alternate,v);break;case 24:zi(g,v,M,x,f),f&&_&2048&&zh(v.alternate,v);break;default:zi(g,v,M,x,f)}i=i.sibling}}function lr(a,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=a,l=i,f=l.flags;switch(l.tag){case 22:lr(s,l),f&2048&&jh(l.alternate,l);break;case 24:lr(s,l),f&2048&&zh(l.alternate,l);break;default:lr(s,l)}i=i.sibling}}var cr=8192;function $i(a){if(a.subtreeFlags&cr)for(a=a.child;a!==null;)Kv(a),a=a.sibling}function Kv(a){switch(a.tag){case 26:$i(a),a.flags&cr&&a.memoizedState!==null&&Lx(ct,a.memoizedState,a.memoizedProps);break;case 5:$i(a);break;case 3:case 4:var i=ct;ct=vs(a.stateNode.containerInfo),$i(a),ct=i;break;case 22:a.memoizedState===null&&(i=a.alternate,i!==null&&i.memoizedState!==null?(i=cr,cr=16777216,$i(a),cr=i):$i(a));break;default:$i(a)}}function xv(a){var i=a.alternate;if(i!==null&&(a=i.child,a!==null)){i.child=null;do i=a.sibling,a.sibling=null,a=i;while(a!==null)}}function hr(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Se=l,Bv(l,a)}xv(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Rv(a),a=a.sibling}function Rv(a){switch(a.tag){case 0:case 11:case 15:hr(a),a.flags&2048&&ga(9,a,a.return);break;case 3:hr(a);break;case 12:hr(a);break;case 22:var i=a.stateNode;a.memoizedState!==null&&i._visibility&2&&(a.return===null||a.return.tag!==13)?(i._visibility&=-3,us(a)):hr(a);break;default:hr(a)}}function us(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Se=l,Bv(l,a)}xv(a)}for(a=a.child;a!==null;){switch(i=a,i.tag){case 0:case 11:case 15:ga(8,i,i.return),us(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,us(i));break;default:us(i)}a=a.sibling}}function Bv(a,i){for(;Se!==null;){var s=Se;switch(s.tag){case 0:case 11:case 15:ga(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Se=l;else n:for(s=a;Se!==null;){l=Se;var f=l.sibling,g=l.return;if(Av(l),l===s){Se=null;break n}if(f!==null){f.return=g,Se=f;break n}Se=g}}}var ex={getCacheForType:function(a){var i=De(he),s=i.data.get(a);return s===void 0&&(s=a(),i.data.set(a,s)),s}},tx=typeof WeakMap=="function"?WeakMap:Map,Gn=0,Fn=null,On=null,xn=0,Ln=0,Ve=null,ya=!1,Fi=!1,$h=!1,Yt=0,ne=0,va=0,Qa=0,Fh=0,it=0,Ui=0,dr=null,Ee=null,Uh=!1,Vh=0,ss=1/0,ls=null,ka=null,ve=0,ba=null,Vi=null,Yi=0,Yh=0,Wh=null,Pv=null,fr=0,Zh=null;function Ye(){if((Gn&2)!==0&&xn!==0)return xn&-xn;if(H.T!==null){var a=Pi;return a!==0?a:td()}return JS()}function Nv(){it===0&&(it=(xn&536870912)===0||Pn?VS():536870912);var a=at.current;return a!==null&&(a.flags|=32),it}function We(a,i,s){(a===Fn&&(Ln===2||Ln===9)||a.cancelPendingCommit!==null)&&(Wi(a,0),Ta(a,xn,it,!1)),xo(a,s),((Gn&2)===0||a!==Fn)&&(a===Fn&&((Gn&2)===0&&(Qa|=s),ne===4&&Ta(a,xn,it,!1)),Mt(a))}function Ev(a,i,s){if((Gn&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&a.expiredLanes)===0||Ko(a,i),f=l?ox(a,i):qh(a,i,!0),g=l;do{if(f===0){Fi&&!l&&Ta(a,i,0,!1);break}else{if(s=a.current.alternate,g&&!ax(s)){f=qh(a,i,!1),g=!1;continue}if(f===2){if(g=i,a.errorRecoveryDisabledLanes&g)var v=0;else v=a.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;n:{var M=a;f=dr;var x=M.current.memoizedState.isDehydrated;if(x&&(Wi(M,v).flags|=256),v=qh(M,v,!1),v!==2){if($h&&!x){M.errorRecoveryDisabledLanes|=g,Qa|=g,f=4;break n}g=Ee,Ee=f,g!==null&&(Ee===null?Ee=g:Ee.push.apply(Ee,g))}f=v}if(g=!1,f!==2)continue}}if(f===1){Wi(a,0),Ta(a,i,0,!0);break}n:{switch(l=a,g=f,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ta(l,i,it,!ya);break n;case 2:Ee=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=Vh+300-yt(),10<f)){if(Ta(l,i,it,!ya),ku(l,0,!0)!==0)break n;l.timeoutHandle=hk(Hv.bind(null,l,s,Ee,ls,Uh,i,it,Qa,Ui,ya,g,2,-0,0),f);break n}Hv(l,s,Ee,ls,Uh,i,it,Qa,Ui,ya,g,0,-0,0)}}break}while(!0);Mt(a)}function Hv(a,i,s,l,f,g,v,M,x,_,U,Y,$,F){if(a.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(kr={stylesheets:null,count:0,unsuspend:Gx},Kv(i),Y=_x(),Y!==null)){a.cancelPendingCommit=Y(Fv.bind(null,a,i,g,s,l,f,v,M,x,U,1,$,F)),Ta(a,g,v,!_);return}Fv(a,i,g,s,l,f,v,M,x)}function ax(a){for(var i=a;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],g=f.getSnapshot;f=f.value;try{if(!ze(g(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ta(a,i,s,l){i&=~Fh,i&=~Qa,a.suspendedLanes|=i,a.pingedLanes&=~i,l&&(a.warmLanes|=i),l=a.expirationTimes;for(var f=i;0<f;){var g=31-je(f),v=1<<g;l[g]=-1,f&=~v}s!==0&&WS(a,s,i)}function cs(){return(Gn&6)===0?(mr(0),!1):!0}function Jh(){if(On!==null){if(Ln===0)var a=On.return;else a=On,Lt=Ya=null,fh(a),_i=null,ir=0,a=On;for(;a!==null;)Sv(a.alternate,a),a=a.return;On=null}}function Wi(a,i){var s=a.timeoutHandle;s!==-1&&(a.timeoutHandle=-1,bx(s)),s=a.cancelPendingCommit,s!==null&&(a.cancelPendingCommit=null,s()),Jh(),Fn=a,On=s=Et(a.current,null),xn=i,Ln=0,Ve=null,ya=!1,Fi=Ko(a,i),$h=!1,Ui=it=Fh=Qa=va=ne=0,Ee=dr=null,Uh=!1,(i&8)!==0&&(i|=i&32);var l=a.entangledLanes;if(l!==0)for(a=a.entanglements,l&=i;0<l;){var f=31-je(l),g=1<<f;i|=a[f],l&=~g}return Yt=i,Ru(),s}function Gv(a,i){Dn=null,H.H=Xu,i===Zo||i===ju?(i=ey(),Ln=3):i===qp?(i=ey(),Ln=4):Ln=i===tv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ve=i,On===null&&(ne=1,ts(a,Qe(i,a.current)))}function Lv(){var a=H.H;return H.H=Xu,a===null?Xu:a}function _v(){var a=H.A;return H.A=ex,a}function Xh(){ne=4,ya||(xn&4194048)!==xn&&at.current!==null||(Fi=!0),(va&134217727)===0&&(Qa&134217727)===0||Fn===null||Ta(Fn,xn,it,!1)}function qh(a,i,s){var l=Gn;Gn|=2;var f=Lv(),g=_v();(Fn!==a||xn!==i)&&(ls=null,Wi(a,i)),i=!1;var v=ne;n:do try{if(Ln!==0&&On!==null){var M=On,x=Ve;switch(Ln){case 8:Jh(),v=6;break n;case 3:case 2:case 9:case 6:at.current===null&&(i=!0);var _=Ln;if(Ln=0,Ve=null,Zi(a,M,x,_),s&&Fi){v=0;break n}break;default:_=Ln,Ln=0,Ve=null,Zi(a,M,x,_)}}ix(),v=ne;break}catch(U){Gv(a,U)}while(!0);return i&&a.shellSuspendCounter++,Lt=Ya=null,Gn=l,H.H=f,H.A=g,On===null&&(Fn=null,xn=0,Ru()),v}function ix(){for(;On!==null;)jv(On)}function ox(a,i){var s=Gn;Gn|=2;var l=Lv(),f=_v();Fn!==a||xn!==i?(ls=null,ss=yt()+500,Wi(a,i)):Fi=Ko(a,i);n:do try{if(Ln!==0&&On!==null){i=On;var g=Ve;e:switch(Ln){case 1:Ln=0,Ve=null,Zi(a,i,g,1);break;case 2:case 9:if(Qp(g)){Ln=0,Ve=null,zv(i);break}i=function(){Ln!==2&&Ln!==9||Fn!==a||(Ln=7),Mt(a)},g.then(i,i);break n;case 3:Ln=7;break n;case 4:Ln=5;break n;case 7:Qp(g)?(Ln=0,Ve=null,zv(i)):(Ln=0,Ve=null,Zi(a,i,g,7));break;case 5:var v=null;switch(On.tag){case 26:v=On.memoizedState;case 5:case 27:var M=On;if(!v||Mk(v)){Ln=0,Ve=null;var x=M.sibling;if(x!==null)On=x;else{var _=M.return;_!==null?(On=_,hs(_)):On=null}break e}}Ln=0,Ve=null,Zi(a,i,g,5);break;case 6:Ln=0,Ve=null,Zi(a,i,g,6);break;case 8:Jh(),ne=6;break n;default:throw Error(r(462))}}rx();break}catch(U){Gv(a,U)}while(!0);return Lt=Ya=null,H.H=l,H.A=f,Gn=s,On!==null?0:(Fn=null,xn=0,Ru(),ne)}function rx(){for(;On!==null&&!fc();)jv(On)}function jv(a){var i=mv(a.alternate,a,Yt);a.memoizedProps=a.pendingProps,i===null?hs(a):On=i}function zv(a){var i=a,s=i.alternate;switch(i.tag){case 15:case 0:i=sv(s,i,i.pendingProps,i.type,void 0,xn);break;case 11:i=sv(s,i,i.pendingProps,i.type.render,i.ref,xn);break;case 5:fh(i);default:Sv(s,i),i=On=$p(i,Yt),i=mv(s,i,Yt)}a.memoizedProps=a.pendingProps,i===null?hs(a):On=i}function Zi(a,i,s,l){Lt=Ya=null,fh(i),_i=null,ir=0;var f=i.return;try{if(ZK(a,f,i,s,xn)){ne=1,ts(a,Qe(s,a.current)),On=null;return}}catch(g){if(f!==null)throw On=f,g;ne=1,ts(a,Qe(s,a.current)),On=null;return}i.flags&32768?(Pn||l===1?a=!0:Fi||(xn&536870912)!==0?a=!1:(ya=a=!0,(l===2||l===9||l===3||l===6)&&(l=at.current,l!==null&&l.tag===13&&(l.flags|=16384))),$v(i,a)):hs(i)}function hs(a){var i=a;do{if((i.flags&32768)!==0){$v(i,ya);return}a=i.return;var s=XK(i.alternate,i,Yt);if(s!==null){On=s;return}if(i=i.sibling,i!==null){On=i;return}On=i=a}while(i!==null);ne===0&&(ne=5)}function $v(a,i){do{var s=qK(a.alternate,a);if(s!==null){s.flags&=32767,On=s;return}if(s=a.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(a=a.sibling,a!==null)){On=a;return}On=a=s}while(a!==null);ne=6,On=null}function Fv(a,i,s,l,f,g,v,M,x){a.cancelPendingCommit=null;do ds();while(ve!==0);if((Gn&6)!==0)throw Error(r(327));if(i!==null){if(i===a.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=zc,GI(a,s,g,v,M,x),a===Fn&&(On=Fn=null,xn=0),Vi=i,ba=a,Yi=s,Yh=g,Wh=f,Pv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,cx(pu,function(){return Zv(),null})):(a.callbackNode=null,a.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=Z.p,Z.p=2,v=Gn,Gn|=4;try{QK(a,i,s)}finally{Gn=v,Z.p=f,H.T=l}}ve=1,Uv(),Vv(),Yv()}}function Uv(){if(ve===1){ve=0;var a=ba,i=Vi,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=Z.p;Z.p=2;var f=Gn;Gn|=4;try{Cv(i,a);var g=cd,v=Bp(a.containerInfo),M=g.focusedElem,x=g.selectionRange;if(v!==M&&M&&M.ownerDocument&&Rp(M.ownerDocument.documentElement,M)){if(x!==null&&Hc(M)){var _=x.start,U=x.end;if(U===void 0&&(U=_),"selectionStart"in M)M.selectionStart=_,M.selectionEnd=Math.min(U,M.value.length);else{var Y=M.ownerDocument||document,$=Y&&Y.defaultView||window;if($.getSelection){var F=$.getSelection(),yn=M.textContent.length,mn=Math.min(x.start,yn),zn=x.end===void 0?mn:Math.min(x.end,yn);!F.extend&&mn>zn&&(v=zn,zn=mn,mn=v);var N=xp(M,mn),B=xp(M,zn);if(N&&B&&(F.rangeCount!==1||F.anchorNode!==N.node||F.anchorOffset!==N.offset||F.focusNode!==B.node||F.focusOffset!==B.offset)){var G=Y.createRange();G.setStart(N.node,N.offset),F.removeAllRanges(),mn>zn?(F.addRange(G),F.extend(B.node,B.offset)):(G.setEnd(B.node,B.offset),F.addRange(G))}}}}for(Y=[],F=M;F=F.parentNode;)F.nodeType===1&&Y.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<Y.length;M++){var V=Y[M];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}As=!!ld,cd=ld=null}finally{Gn=f,Z.p=l,H.T=s}}a.current=i,ve=2}}function Vv(){if(ve===2){ve=0;var a=ba,i=Vi,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=Z.p;Z.p=2;var f=Gn;Gn|=4;try{Mv(a,i.alternate,i)}finally{Gn=f,Z.p=l,H.T=s}}ve=3}}function Yv(){if(ve===4||ve===3){ve=0,II();var a=ba,i=Vi,s=Yi,l=Pv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ve=5:(ve=0,Vi=ba=null,Wv(a,a.pendingLanes));var f=a.pendingLanes;if(f===0&&(ka=null),Sc(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(Io,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,f=Z.p,Z.p=2,H.T=null;try{for(var g=a.onRecoverableError,v=0;v<l.length;v++){var M=l[v];g(M.value,{componentStack:M.stack})}}finally{H.T=i,Z.p=f}}(Yi&3)!==0&&ds(),Mt(a),f=a.pendingLanes,(s&4194090)!==0&&(f&42)!==0?a===Zh?fr++:(fr=0,Zh=a):fr=0,mr(0)}}function Wv(a,i){(a.pooledCacheLanes&=i)===0&&(i=a.pooledCache,i!=null&&(a.pooledCache=null,Yo(i)))}function ds(a){return Uv(),Vv(),Yv(),Zv()}function Zv(){if(ve!==5)return!1;var a=ba,i=Yh;Yh=0;var s=Sc(Yi),l=H.T,f=Z.p;try{Z.p=32>s?32:s,H.T=null,s=Wh,Wh=null;var g=ba,v=Yi;if(ve=0,Vi=ba=null,Yi=0,(Gn&6)!==0)throw Error(r(331));var M=Gn;if(Gn|=4,Rv(g.current),Iv(g,g.current,v,s),Gn=M,mr(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(Io,g)}catch{}return!0}finally{Z.p=f,H.T=l,Wv(a,i)}}function Jv(a,i,s){i=Qe(s,i),i=Ch(a.stateNode,i,2),a=ha(a,i,2),a!==null&&(xo(a,2),Mt(a))}function $n(a,i,s){if(a.tag===3)Jv(a,a,s);else for(;i!==null;){if(i.tag===3){Jv(i,a,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ka===null||!ka.has(l))){a=Qe(s,a),s=nv(2),l=ha(i,s,2),l!==null&&(ev(s,l,i,a),xo(l,2),Mt(l));break}}i=i.return}}function Qh(a,i,s){var l=a.pingCache;if(l===null){l=a.pingCache=new tx;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||($h=!0,f.add(s),a=ux.bind(null,a,i,s),i.then(a,a))}function ux(a,i,s){var l=a.pingCache;l!==null&&l.delete(i),a.pingedLanes|=a.suspendedLanes&s,a.warmLanes&=~s,Fn===a&&(xn&s)===s&&(ne===4||ne===3&&(xn&62914560)===xn&&300>yt()-Vh?(Gn&2)===0&&Wi(a,0):Fh|=s,Ui===xn&&(Ui=0)),Mt(a)}function Xv(a,i){i===0&&(i=YS()),a=Ki(a,i),a!==null&&(xo(a,i),Mt(a))}function sx(a){var i=a.memoizedState,s=0;i!==null&&(s=i.retryLane),Xv(a,s)}function lx(a,i){var s=0;switch(a.tag){case 13:var l=a.stateNode,f=a.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=a.stateNode;break;case 22:l=a.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Xv(a,s)}function cx(a,i){return Oo(a,i)}var fs=null,Ji=null,nd=!1,ms=!1,ed=!1,ni=0;function Mt(a){a!==Ji&&a.next===null&&(Ji===null?fs=Ji=a:Ji=Ji.next=a),ms=!0,nd||(nd=!0,dx())}function mr(a,i){if(!ed&&ms){ed=!0;do for(var s=!1,l=fs;l!==null;){if(a!==0){var f=l.pendingLanes;if(f===0)var g=0;else{var v=l.suspendedLanes,M=l.pingedLanes;g=(1<<31-je(42|a)+1)-1,g&=f&~(v&~M),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,ek(l,g))}else g=xn,g=ku(l,l===Fn?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Ko(l,g)||(s=!0,ek(l,g));l=l.next}while(s);ed=!1}}function hx(){qv()}function qv(){ms=nd=!1;var a=0;ni!==0&&(kx()&&(a=ni),ni=0);for(var i=yt(),s=null,l=fs;l!==null;){var f=l.next,g=Qv(l,i);g===0?(l.next=null,s===null?fs=f:s.next=f,f===null&&(Ji=s)):(s=l,(a!==0||(g&3)!==0)&&(ms=!0)),l=f}mr(a)}function Qv(a,i){for(var s=a.suspendedLanes,l=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes&-62914561;0<g;){var v=31-je(g),M=1<<v,x=f[v];x===-1?((M&s)===0||(M&l)!==0)&&(f[v]=HI(M,i)):x<=i&&(a.expiredLanes|=M),g&=~M}if(i=Fn,s=xn,s=ku(a,a===i?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l=a.callbackNode,s===0||a===i&&(Ln===2||Ln===9)||a.cancelPendingCommit!==null)return l!==null&&l!==null&&gi(l),a.callbackNode=null,a.callbackPriority=0;if((s&3)===0||Ko(a,s)){if(i=s&-s,i===a.callbackPriority)return i;switch(l!==null&&gi(l),Sc(s)){case 2:case 8:s=FS;break;case 32:s=pu;break;case 268435456:s=US;break;default:s=pu}return l=nk.bind(null,a),s=Oo(s,l),a.callbackPriority=i,a.callbackNode=s,i}return l!==null&&l!==null&&gi(l),a.callbackPriority=2,a.callbackNode=null,2}function nk(a,i){if(ve!==0&&ve!==5)return a.callbackNode=null,a.callbackPriority=0,null;var s=a.callbackNode;if(ds()&&a.callbackNode!==s)return null;var l=xn;return l=ku(a,a===Fn?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l===0?null:(Ev(a,l,i),Qv(a,yt()),a.callbackNode!=null&&a.callbackNode===s?nk.bind(null,a):null)}function ek(a,i){if(ds())return null;Ev(a,i,!0)}function dx(){Tx(function(){(Gn&6)!==0?Oo($S,hx):qv()})}function td(){return ni===0&&(ni=VS()),ni}function tk(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Du(""+a)}function ak(a,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,a.id&&s.setAttribute("form",a.id),i.parentNode.insertBefore(s,i),a=new FormData(a),s.parentNode.removeChild(s),a}function fx(a,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var g=tk((f[Re]||null).action),v=l.submitter;v&&(i=(i=v[Re]||null)?tk(i.formAction):v.getAttribute("formAction"),i!==null&&(g=i,v=null));var M=new Iu("action","action",null,l,f);a.push({event:M,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ni!==0){var x=v?ak(f,v):new FormData(f);Th(s,{pending:!0,data:x,method:f.method,action:g},null,x)}}else typeof g=="function"&&(M.preventDefault(),x=v?ak(f,v):new FormData(f),Th(s,{pending:!0,data:x,method:f.method,action:g},g,x))},currentTarget:f}]})}}for(var ad=0;ad<jc.length;ad++){var id=jc[ad],mx=id.toLowerCase(),gx=id[0].toUpperCase()+id.slice(1);lt(mx,"on"+gx)}lt(Ep,"onAnimationEnd"),lt(Hp,"onAnimationIteration"),lt(Gp,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(RK,"onTransitionRun"),lt(BK,"onTransitionStart"),lt(PK,"onTransitionCancel"),lt(Lp,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gr));function ik(a,i){i=(i&4)!==0;for(var s=0;s<a.length;s++){var l=a[s],f=l.event;l=l.listeners;n:{var g=void 0;if(i)for(var v=l.length-1;0<=v;v--){var M=l[v],x=M.instance,_=M.currentTarget;if(M=M.listener,x!==g&&f.isPropagationStopped())break n;g=M,f.currentTarget=_;try{g(f)}catch(U){es(U)}f.currentTarget=null,g=x}else for(v=0;v<l.length;v++){if(M=l[v],x=M.instance,_=M.currentTarget,M=M.listener,x!==g&&f.isPropagationStopped())break n;g=M,f.currentTarget=_;try{g(f)}catch(U){es(U)}f.currentTarget=null,g=x}}}}function In(a,i){var s=i[pc];s===void 0&&(s=i[pc]=new Set);var l=a+"__bubble";s.has(l)||(ok(i,a,2,!1),s.add(l))}function od(a,i,s){var l=0;i&&(l|=4),ok(s,a,l,i)}var gs="_reactListening"+Math.random().toString(36).slice(2);function rd(a){if(!a[gs]){a[gs]=!0,qS.forEach(function(s){s!=="selectionchange"&&(Sx.has(s)||od(s,!1,a),od(s,!0,a))});var i=a.nodeType===9?a:a.ownerDocument;i===null||i[gs]||(i[gs]=!0,od("selectionchange",!1,i))}}function ok(a,i,s,l){switch(Ik(i)){case 2:var f=$x;break;case 8:f=Fx;break;default:f=kd}s=f.bind(null,i,s,a),f=void 0,!Oc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?a.addEventListener(i,s,{capture:!0,passive:f}):a.addEventListener(i,s,!0):f!==void 0?a.addEventListener(i,s,{passive:f}):a.addEventListener(i,s,!1)}function ud(a,i,s,l,f){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)n:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var M=l.stateNode.containerInfo;if(M===f)break;if(v===4)for(v=l.return;v!==null;){var x=v.tag;if((x===3||x===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;M!==null;){if(v=pi(M),v===null)return;if(x=v.tag,x===5||x===6||x===26||x===27){l=g=v;continue n}M=M.parentNode}}l=l.return}dp(function(){var _=g,U=wc(s),Y=[];n:{var $=_p.get(a);if($!==void 0){var F=Iu,yn=a;switch(a){case"keypress":if(Cu(s)===0)break n;case"keydown":case"keyup":F=cK;break;case"focusin":yn="focus",F=Rc;break;case"focusout":yn="blur",F=Rc;break;case"beforeblur":case"afterblur":F=Rc;break;case"click":if(s.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=qI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=fK;break;case Ep:case Hp:case Gp:F=eK;break;case Lp:F=gK;break;case"scroll":case"scrollend":F=JI;break;case"wheel":F=pK;break;case"copy":case"cut":case"paste":F=aK;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=pp;break;case"toggle":case"beforetoggle":F=vK}var mn=(i&4)!==0,zn=!mn&&(a==="scroll"||a==="scrollend"),N=mn?$!==null?$+"Capture":null:$;mn=[];for(var B=_,G;B!==null;){var V=B;if(G=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||G===null||N===null||(V=Po(B,N),V!=null&&mn.push(Sr(B,V,G))),zn)break;B=B.return}0<mn.length&&($=new F($,yn,null,s,U),Y.push({event:$,listeners:mn}))}}if((i&7)===0){n:{if($=a==="mouseover"||a==="pointerover",F=a==="mouseout"||a==="pointerout",$&&s!==Dc&&(yn=s.relatedTarget||s.fromElement)&&(pi(yn)||yn[Si]))break n;if((F||$)&&($=U.window===U?U:($=U.ownerDocument)?$.defaultView||$.parentWindow:window,F?(yn=s.relatedTarget||s.toElement,F=_,yn=yn?pi(yn):null,yn!==null&&(zn=u(yn),mn=yn.tag,yn!==zn||mn!==5&&mn!==27&&mn!==6)&&(yn=null)):(F=null,yn=_),F!==yn)){if(mn=gp,V="onMouseLeave",N="onMouseEnter",B="mouse",(a==="pointerout"||a==="pointerover")&&(mn=pp,V="onPointerLeave",N="onPointerEnter",B="pointer"),zn=F==null?$:Bo(F),G=yn==null?$:Bo(yn),$=new mn(V,B+"leave",F,s,U),$.target=zn,$.relatedTarget=G,V=null,pi(U)===_&&(mn=new mn(N,B+"enter",yn,s,U),mn.target=G,mn.relatedTarget=zn,V=mn),zn=V,F&&yn)e:{for(mn=F,N=yn,B=0,G=mn;G;G=Xi(G))B++;for(G=0,V=N;V;V=Xi(V))G++;for(;0<B-G;)mn=Xi(mn),B--;for(;0<G-B;)N=Xi(N),G--;for(;B--;){if(mn===N||N!==null&&mn===N.alternate)break e;mn=Xi(mn),N=Xi(N)}mn=null}else mn=null;F!==null&&rk(Y,$,F,mn,!1),yn!==null&&zn!==null&&rk(Y,zn,yn,mn,!0)}}n:{if($=_?Bo(_):window,F=$.nodeName&&$.nodeName.toLowerCase(),F==="select"||F==="input"&&$.type==="file")var sn=Dp;else if(Mp($))if(wp)sn=IK;else{sn=CK;var Cn=wK}else F=$.nodeName,!F||F.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?_&&Ac(_.elementType)&&(sn=Dp):sn=OK;if(sn&&(sn=sn(a,_))){Ap(Y,sn,s,U);break n}Cn&&Cn(a,$,_),a==="focusout"&&_&&$.type==="number"&&_.memoizedProps.value!=null&&Mc($,"number",$.value)}switch(Cn=_?Bo(_):window,a){case"focusin":(Mp(Cn)||Cn.contentEditable==="true")&&(Ci=Cn,Gc=_,zo=null);break;case"focusout":zo=Gc=Ci=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Pp(Y,s,U);break;case"selectionchange":if(xK)break;case"keydown":case"keyup":Pp(Y,s,U)}var cn;if(Pc)n:{switch(a){case"compositionstart":var gn="onCompositionStart";break n;case"compositionend":gn="onCompositionEnd";break n;case"compositionupdate":gn="onCompositionUpdate";break n}gn=void 0}else wi?bp(a,s)&&(gn="onCompositionEnd"):a==="keydown"&&s.keyCode===229&&(gn="onCompositionStart");gn&&(yp&&s.locale!=="ko"&&(wi||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&wi&&(cn=fp()):(ua=U,Ic="value"in ua?ua.value:ua.textContent,wi=!0)),Cn=Ss(_,gn),0<Cn.length&&(gn=new Sp(gn,a,null,s,U),Y.push({event:gn,listeners:Cn}),cn?gn.data=cn:(cn=Tp(s),cn!==null&&(gn.data=cn)))),(cn=bK?TK(a,s):MK(a,s))&&(gn=Ss(_,"onBeforeInput"),0<gn.length&&(Cn=new Sp("onBeforeInput","beforeinput",null,s,U),Y.push({event:Cn,listeners:gn}),Cn.data=cn)),fx(Y,a,_,s,U)}ik(Y,i)})}function Sr(a,i,s){return{instance:a,listener:i,currentTarget:s}}function Ss(a,i){for(var s=i+"Capture",l=[];a!==null;){var f=a,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Po(a,s),f!=null&&l.unshift(Sr(a,f,g)),f=Po(a,i),f!=null&&l.push(Sr(a,f,g))),a.tag===3)return l;a=a.return}return[]}function Xi(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function rk(a,i,s,l,f){for(var g=i._reactName,v=[];s!==null&&s!==l;){var M=s,x=M.alternate,_=M.stateNode;if(M=M.tag,x!==null&&x===l)break;M!==5&&M!==26&&M!==27||_===null||(x=_,f?(_=Po(s,g),_!=null&&v.unshift(Sr(s,_,x))):f||(_=Po(s,g),_!=null&&v.push(Sr(s,_,x)))),s=s.return}v.length!==0&&a.push({event:i,listeners:v})}var px=/\r\n?/g,yx=/\u0000|\uFFFD/g;function uk(a){return(typeof a=="string"?a:""+a).replace(px,`
`).replace(yx,"")}function sk(a,i){return i=uk(i),uk(a)===i}function ps(){}function jn(a,i,s,l,f,g){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mi(a,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mi(a,""+l);break;case"className":Tu(a,"class",l);break;case"tabIndex":Tu(a,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tu(a,s,l);break;case"style":cp(a,l,g);break;case"data":if(i!=="object"){Tu(a,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){a.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(s);break}l=Du(""+l),a.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){a.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(i!=="input"&&jn(a,i,"name",f.name,f,null),jn(a,i,"formEncType",f.formEncType,f,null),jn(a,i,"formMethod",f.formMethod,f,null),jn(a,i,"formTarget",f.formTarget,f,null)):(jn(a,i,"encType",f.encType,f,null),jn(a,i,"method",f.method,f,null),jn(a,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(s);break}l=Du(""+l),a.setAttribute(s,l);break;case"onClick":l!=null&&(a.onclick=ps);break;case"onScroll":l!=null&&In("scroll",a);break;case"onScrollEnd":l!=null&&In("scrollend",a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));a.innerHTML=s}}break;case"multiple":a.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":a.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){a.removeAttribute("xlink:href");break}s=Du(""+l),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(s,""+l):a.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(s,""):a.removeAttribute(s);break;case"capture":case"download":l===!0?a.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(s,l):a.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?a.setAttribute(s,l):a.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?a.removeAttribute(s):a.setAttribute(s,l);break;case"popover":In("beforetoggle",a),In("toggle",a),bu(a,"popover",l);break;case"xlinkActuate":Pt(a,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(a,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(a,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(a,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(a,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(a,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(a,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bu(a,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=WI.get(s)||s,bu(a,s,l))}}function sd(a,i,s,l,f,g){switch(s){case"style":cp(a,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));a.innerHTML=s}}break;case"children":typeof l=="string"?Mi(a,l):(typeof l=="number"||typeof l=="bigint")&&Mi(a,""+l);break;case"onScroll":l!=null&&In("scroll",a);break;case"onScrollEnd":l!=null&&In("scrollend",a);break;case"onClick":l!=null&&(a.onclick=ps);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!QS.hasOwnProperty(s))n:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),g=a[Re]||null,g=g!=null?g[s]:null,typeof g=="function"&&a.removeEventListener(i,g,f),typeof l=="function")){typeof g!="function"&&g!==null&&(s in a?a[s]=null:a.hasAttribute(s)&&a.removeAttribute(s)),a.addEventListener(i,l,f);break n}s in a?a[s]=l:l===!0?a.setAttribute(s,""):bu(a,s,l)}}}function ke(a,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":In("error",a),In("load",a);var l=!1,f=!1,g;for(g in s)if(s.hasOwnProperty(g)){var v=s[g];if(v!=null)switch(g){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jn(a,i,g,v,s,null)}}f&&jn(a,i,"srcSet",s.srcSet,s,null),l&&jn(a,i,"src",s.src,s,null);return;case"input":In("invalid",a);var M=g=v=f=null,x=null,_=null;for(l in s)if(s.hasOwnProperty(l)){var U=s[l];if(U!=null)switch(l){case"name":f=U;break;case"type":v=U;break;case"checked":x=U;break;case"defaultChecked":_=U;break;case"value":g=U;break;case"defaultValue":M=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,i));break;default:jn(a,i,l,U,s,null)}}rp(a,g,M,x,_,v,f,!1),Mu(a);return;case"select":In("invalid",a),l=v=g=null;for(f in s)if(s.hasOwnProperty(f)&&(M=s[f],M!=null))switch(f){case"value":g=M;break;case"defaultValue":v=M;break;case"multiple":l=M;default:jn(a,i,f,M,s,null)}i=g,s=v,a.multiple=!!l,i!=null?Ti(a,!!l,i,!1):s!=null&&Ti(a,!!l,s,!0);return;case"textarea":In("invalid",a),g=f=l=null;for(v in s)if(s.hasOwnProperty(v)&&(M=s[v],M!=null))switch(v){case"value":l=M;break;case"defaultValue":f=M;break;case"children":g=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(91));break;default:jn(a,i,v,M,s,null)}sp(a,l,f,g),Mu(a);return;case"option":for(x in s)if(s.hasOwnProperty(x)&&(l=s[x],l!=null))switch(x){case"selected":a.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:jn(a,i,x,l,s,null)}return;case"dialog":In("beforetoggle",a),In("toggle",a),In("cancel",a),In("close",a);break;case"iframe":case"object":In("load",a);break;case"video":case"audio":for(l=0;l<gr.length;l++)In(gr[l],a);break;case"image":In("error",a),In("load",a);break;case"details":In("toggle",a);break;case"embed":case"source":case"link":In("error",a),In("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in s)if(s.hasOwnProperty(_)&&(l=s[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:jn(a,i,_,l,s,null)}return;default:if(Ac(i)){for(U in s)s.hasOwnProperty(U)&&(l=s[U],l!==void 0&&sd(a,i,U,l,s,void 0));return}}for(M in s)s.hasOwnProperty(M)&&(l=s[M],l!=null&&jn(a,i,M,l,s,null))}function vx(a,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,v=null,M=null,x=null,_=null,U=null;for(F in s){var Y=s[F];if(s.hasOwnProperty(F)&&Y!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":x=Y;default:l.hasOwnProperty(F)||jn(a,i,F,null,l,Y)}}for(var $ in l){var F=l[$];if(Y=s[$],l.hasOwnProperty($)&&(F!=null||Y!=null))switch($){case"type":g=F;break;case"name":f=F;break;case"checked":_=F;break;case"defaultChecked":U=F;break;case"value":v=F;break;case"defaultValue":M=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:F!==Y&&jn(a,i,$,F,l,Y)}}Tc(a,v,M,x,_,U,g,f);return;case"select":F=v=M=$=null;for(g in s)if(x=s[g],s.hasOwnProperty(g)&&x!=null)switch(g){case"value":break;case"multiple":F=x;default:l.hasOwnProperty(g)||jn(a,i,g,null,l,x)}for(f in l)if(g=l[f],x=s[f],l.hasOwnProperty(f)&&(g!=null||x!=null))switch(f){case"value":$=g;break;case"defaultValue":M=g;break;case"multiple":v=g;default:g!==x&&jn(a,i,f,g,l,x)}i=M,s=v,l=F,$!=null?Ti(a,!!s,$,!1):!!l!=!!s&&(i!=null?Ti(a,!!s,i,!0):Ti(a,!!s,s?[]:"",!1));return;case"textarea":F=$=null;for(M in s)if(f=s[M],s.hasOwnProperty(M)&&f!=null&&!l.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:jn(a,i,M,null,l,f)}for(v in l)if(f=l[v],g=s[v],l.hasOwnProperty(v)&&(f!=null||g!=null))switch(v){case"value":$=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&jn(a,i,v,f,l,g)}up(a,$,F);return;case"option":for(var yn in s)if($=s[yn],s.hasOwnProperty(yn)&&$!=null&&!l.hasOwnProperty(yn))switch(yn){case"selected":a.selected=!1;break;default:jn(a,i,yn,null,l,$)}for(x in l)if($=l[x],F=s[x],l.hasOwnProperty(x)&&$!==F&&($!=null||F!=null))switch(x){case"selected":a.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:jn(a,i,x,$,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mn in s)$=s[mn],s.hasOwnProperty(mn)&&$!=null&&!l.hasOwnProperty(mn)&&jn(a,i,mn,null,l,$);for(_ in l)if($=l[_],F=s[_],l.hasOwnProperty(_)&&$!==F&&($!=null||F!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,i));break;default:jn(a,i,_,$,l,F)}return;default:if(Ac(i)){for(var zn in s)$=s[zn],s.hasOwnProperty(zn)&&$!==void 0&&!l.hasOwnProperty(zn)&&sd(a,i,zn,void 0,l,$);for(U in l)$=l[U],F=s[U],!l.hasOwnProperty(U)||$===F||$===void 0&&F===void 0||sd(a,i,U,$,l,F);return}}for(var N in s)$=s[N],s.hasOwnProperty(N)&&$!=null&&!l.hasOwnProperty(N)&&jn(a,i,N,null,l,$);for(Y in l)$=l[Y],F=s[Y],!l.hasOwnProperty(Y)||$===F||$==null&&F==null||jn(a,i,Y,$,l,F)}var ld=null,cd=null;function ys(a){return a.nodeType===9?a:a.ownerDocument}function lk(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ck(a,i){if(a===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&i==="foreignObject"?0:a}function hd(a,i){return a==="textarea"||a==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dd=null;function kx(){var a=window.event;return a&&a.type==="popstate"?a===dd?!1:(dd=a,!0):(dd=null,!1)}var hk=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,dk=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof dk<"u"?function(a){return dk.resolve(null).then(a).catch(Mx)}:hk;function Mx(a){setTimeout(function(){throw a})}function Ma(a){return a==="head"}function fk(a,i){var s=i,l=0,f=0;do{var g=s.nextSibling;if(a.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<l&&8>l){s=l;var v=a.ownerDocument;if(s&1&&pr(v.documentElement),s&2&&pr(v.body),s&4)for(s=v.head,pr(s),v=s.firstChild;v;){var M=v.nextSibling,x=v.nodeName;v[Ro]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&v.rel.toLowerCase()==="stylesheet"||s.removeChild(v),v=M}}if(f===0){a.removeChild(g),Dr(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=g}while(s);Dr(i)}function fd(a){var i=a.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":fd(s),yc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}a.removeChild(s)}}function Ax(a,i,s,l){for(;a.nodeType===1;){var f=s;if(a.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(l){if(!a[Ro])switch(i){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(g=a.getAttribute("rel"),g==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(g!==f.rel||a.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||a.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||a.getAttribute("title")!==(f.title==null?null:f.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(g=a.getAttribute("src"),(g!==(f.src==null?null:f.src)||a.getAttribute("type")!==(f.type==null?null:f.type)||a.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(i==="input"&&a.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&a.getAttribute("name")===g)return a}else return a;if(a=ht(a.nextSibling),a===null)break}return null}function Dx(a,i,s){if(i==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!s||(a=ht(a.nextSibling),a===null))return null;return a}function md(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function wx(a,i){var s=a.ownerDocument;if(a.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),a._reactRetry=l}}function ht(a){for(;a!=null;a=a.nextSibling){var i=a.nodeType;if(i===1||i===3)break;if(i===8){if(i=a.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return a}var gd=null;function mk(a){a=a.previousSibling;for(var i=0;a;){if(a.nodeType===8){var s=a.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return a;i--}else s==="/$"&&i++}a=a.previousSibling}return null}function gk(a,i,s){switch(i=ys(s),a){case"html":if(a=i.documentElement,!a)throw Error(r(452));return a;case"head":if(a=i.head,!a)throw Error(r(453));return a;case"body":if(a=i.body,!a)throw Error(r(454));return a;default:throw Error(r(451))}}function pr(a){for(var i=a.attributes;i.length;)a.removeAttributeNode(i[0]);yc(a)}var ot=new Map,Sk=new Set;function vs(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Wt=Z.d;Z.d={f:Cx,r:Ox,D:Ix,C:Kx,L:xx,m:Rx,X:Px,S:Bx,M:Nx};function Cx(){var a=Wt.f(),i=cs();return a||i}function Ox(a){var i=yi(a);i!==null&&i.tag===5&&i.type==="form"?Ey(i):Wt.r(a)}var qi=typeof document>"u"?null:document;function pk(a,i,s){var l=qi;if(l&&typeof i=="string"&&i){var f=qe(i);f='link[rel="'+a+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Sk.has(f)||(Sk.add(f),a={rel:a,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),ke(i,"link",a),me(i),l.head.appendChild(i)))}}function Ix(a){Wt.D(a),pk("dns-prefetch",a,null)}function Kx(a,i){Wt.C(a,i),pk("preconnect",a,i)}function xx(a,i,s){Wt.L(a,i,s);var l=qi;if(l&&a&&i){var f='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+qe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+qe(s.imageSizes)+'"]')):f+='[href="'+qe(a)+'"]';var g=f;switch(i){case"style":g=Qi(a);break;case"script":g=no(a)}ot.has(g)||(a=S({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:a,as:i},s),ot.set(g,a),l.querySelector(f)!==null||i==="style"&&l.querySelector(yr(g))||i==="script"&&l.querySelector(vr(g))||(i=l.createElement("link"),ke(i,"link",a),me(i),l.head.appendChild(i)))}}function Rx(a,i){Wt.m(a,i);var s=qi;if(s&&a){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qe(l)+'"][href="'+qe(a)+'"]',g=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=no(a)}if(!ot.has(g)&&(a=S({rel:"modulepreload",href:a},i),ot.set(g,a),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vr(g)))return}l=s.createElement("link"),ke(l,"link",a),me(l),s.head.appendChild(l)}}}function Bx(a,i,s){Wt.S(a,i,s);var l=qi;if(l&&a){var f=vi(l).hoistableStyles,g=Qi(a);i=i||"default";var v=f.get(g);if(!v){var M={loading:0,preload:null};if(v=l.querySelector(yr(g)))M.loading=5;else{a=S({rel:"stylesheet",href:a,"data-precedence":i},s),(s=ot.get(g))&&Sd(a,s);var x=v=l.createElement("link");me(x),ke(x,"link",a),x._p=new Promise(function(_,U){x.onload=_,x.onerror=U}),x.addEventListener("load",function(){M.loading|=1}),x.addEventListener("error",function(){M.loading|=2}),M.loading|=4,ks(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:M},f.set(g,v)}}}function Px(a,i){Wt.X(a,i);var s=qi;if(s&&a){var l=vi(s).hoistableScripts,f=no(a),g=l.get(f);g||(g=s.querySelector(vr(f)),g||(a=S({src:a,async:!0},i),(i=ot.get(f))&&pd(a,i),g=s.createElement("script"),me(g),ke(g,"link",a),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(f,g))}}function Nx(a,i){Wt.M(a,i);var s=qi;if(s&&a){var l=vi(s).hoistableScripts,f=no(a),g=l.get(f);g||(g=s.querySelector(vr(f)),g||(a=S({src:a,async:!0,type:"module"},i),(i=ot.get(f))&&pd(a,i),g=s.createElement("script"),me(g),ke(g,"link",a),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(f,g))}}function yk(a,i,s,l){var f=(f=hn.current)?vs(f):null;if(!f)throw Error(r(446));switch(a){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Qi(s.href),s=vi(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){a=Qi(s.href);var g=vi(f).hoistableStyles,v=g.get(a);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(a,v),(g=f.querySelector(yr(a)))&&!g._p&&(v.instance=g,v.state.loading=5),ot.has(a)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ot.set(a,s),g||Ex(f,a,s,v.state))),i&&l===null)throw Error(r(528,""));return v}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=no(s),s=vi(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,a))}}function Qi(a){return'href="'+qe(a)+'"'}function yr(a){return'link[rel="stylesheet"]['+a+"]"}function vk(a){return S({},a,{"data-precedence":a.precedence,precedence:null})}function Ex(a,i,s,l){a.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=a.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ke(i,"link",s),me(i),a.head.appendChild(i))}function no(a){return'[src="'+qe(a)+'"]'}function vr(a){return"script[async]"+a}function kk(a,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=a.querySelector('style[data-href~="'+qe(s.href)+'"]');if(l)return i.instance=l,me(l),l;var f=S({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(a.ownerDocument||a).createElement("style"),me(l),ke(l,"style",f),ks(l,s.precedence,a),i.instance=l;case"stylesheet":f=Qi(s.href);var g=a.querySelector(yr(f));if(g)return i.state.loading|=4,i.instance=g,me(g),g;l=vk(s),(f=ot.get(f))&&Sd(l,f),g=(a.ownerDocument||a).createElement("link"),me(g);var v=g;return v._p=new Promise(function(M,x){v.onload=M,v.onerror=x}),ke(g,"link",l),i.state.loading|=4,ks(g,s.precedence,a),i.instance=g;case"script":return g=no(s.src),(f=a.querySelector(vr(g)))?(i.instance=f,me(f),f):(l=s,(f=ot.get(g))&&(l=S({},s),pd(l,f)),a=a.ownerDocument||a,f=a.createElement("script"),me(f),ke(f,"link",l),a.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ks(l,s.precedence,a));return i.instance}function ks(a,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,g=f,v=0;v<l.length;v++){var M=l[v];if(M.dataset.precedence===i)g=M;else if(g!==f)break}g?g.parentNode.insertBefore(a,g.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(a,i.firstChild))}function Sd(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.title==null&&(a.title=i.title)}function pd(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.integrity==null&&(a.integrity=i.integrity)}var bs=null;function bk(a,i,s){if(bs===null){var l=new Map,f=bs=new Map;f.set(s,l)}else f=bs,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(a))return l;for(l.set(a,null),s=s.getElementsByTagName(a),f=0;f<s.length;f++){var g=s[f];if(!(g[Ro]||g[Ae]||a==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var v=g.getAttribute(i)||"";v=a+v;var M=l.get(v);M?M.push(g):l.set(v,[g])}}return l}function Tk(a,i,s){a=a.ownerDocument||a,a.head.insertBefore(s,i==="title"?a.querySelector("head > title"):null)}function Hx(a,i,s){if(s===1||i.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return a=i.disabled,typeof i.precedence=="string"&&a==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Mk(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var kr=null;function Gx(){}function Lx(a,i,s){if(kr===null)throw Error(r(475));var l=kr;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Qi(s.href),g=a.querySelector(yr(f));if(g){a=g._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(l.count++,l=Ts.bind(l),a.then(l,l)),i.state.loading|=4,i.instance=g,me(g);return}g=a.ownerDocument||a,s=vk(s),(f=ot.get(f))&&Sd(s,f),g=g.createElement("link"),me(g);var v=g;v._p=new Promise(function(M,x){v.onload=M,v.onerror=x}),ke(g,"link",s),i.instance=g}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ts.bind(l),a.addEventListener("load",i),a.addEventListener("error",i))}}function _x(){if(kr===null)throw Error(r(475));var a=kr;return a.stylesheets&&a.count===0&&yd(a,a.stylesheets),0<a.count?function(i){var s=setTimeout(function(){if(a.stylesheets&&yd(a,a.stylesheets),a.unsuspend){var l=a.unsuspend;a.unsuspend=null,l()}},6e4);return a.unsuspend=i,function(){a.unsuspend=null,clearTimeout(s)}}:null}function Ts(){if(this.count--,this.count===0){if(this.stylesheets)yd(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Ms=null;function yd(a,i){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Ms=new Map,i.forEach(jx,a),Ms=null,Ts.call(a))}function jx(a,i){if(!(i.state.loading&4)){var s=Ms.get(a);if(s)var l=s.get(null);else{s=new Map,Ms.set(a,s);for(var f=a.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var v=f[g];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),l=v)}l&&s.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),g=s.get(v)||l,g===l&&s.set(null,f),s.set(v,f),this.count++,l=Ts.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),g?g.parentNode.insertBefore(f,g.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(f,a.firstChild)),i.state.loading|=4}}var br={$$typeof:C,Provider:null,Consumer:null,_currentValue:an,_currentValue2:an,_threadCount:0};function zx(a,i,s,l,f,g,v,M){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.hiddenUpdates=mc(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.incompleteTransitions=new Map}function Ak(a,i,s,l,f,g,v,M,x,_,U,Y){return a=new zx(a,i,s,v,M,x,_,Y),i=1,g===!0&&(i|=24),g=$e(3,null,null,i),a.current=g,g.stateNode=a,i=Qc(),i.refCount++,a.pooledCache=i,i.refCount++,g.memoizedState={element:l,isDehydrated:s,cache:i},ah(g),a}function Dk(a){return a?(a=xi,a):xi}function wk(a,i,s,l,f,g){f=Dk(f),l.context===null?l.context=f:l.pendingContext=f,l=ca(i),l.payload={element:s},g=g===void 0?null:g,g!==null&&(l.callback=g),s=ha(a,l,i),s!==null&&(We(s,a,i),Xo(s,a,i))}function Ck(a,i){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var s=a.retryLane;a.retryLane=s!==0&&s<i?s:i}}function vd(a,i){Ck(a,i),(a=a.alternate)&&Ck(a,i)}function Ok(a){if(a.tag===13){var i=Ki(a,67108864);i!==null&&We(i,a,67108864),vd(a,67108864)}}var As=!0;function $x(a,i,s,l){var f=H.T;H.T=null;var g=Z.p;try{Z.p=2,kd(a,i,s,l)}finally{Z.p=g,H.T=f}}function Fx(a,i,s,l){var f=H.T;H.T=null;var g=Z.p;try{Z.p=8,kd(a,i,s,l)}finally{Z.p=g,H.T=f}}function kd(a,i,s,l){if(As){var f=bd(l);if(f===null)ud(a,i,l,Ds,s),Kk(a,l);else if(Vx(f,a,i,s,l))l.stopPropagation();else if(Kk(a,l),i&4&&-1<Ux.indexOf(a)){for(;f!==null;){var g=yi(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var v=Ha(g.pendingLanes);if(v!==0){var M=g;for(M.pendingLanes|=2,M.entangledLanes|=2;v;){var x=1<<31-je(v);M.entanglements[1]|=x,v&=~x}Mt(g),(Gn&6)===0&&(ss=yt()+500,mr(0))}}break;case 13:M=Ki(g,2),M!==null&&We(M,g,2),cs(),vd(g,2)}if(g=bd(l),g===null&&ud(a,i,l,Ds,s),g===f)break;f=g}f!==null&&l.stopPropagation()}else ud(a,i,l,null,s)}}function bd(a){return a=wc(a),Td(a)}var Ds=null;function Td(a){if(Ds=null,a=pi(a),a!==null){var i=u(a);if(i===null)a=null;else{var s=i.tag;if(s===13){if(a=c(i),a!==null)return a;a=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;a=null}else i!==a&&(a=null)}}return Ds=a,null}function Ik(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(KI()){case $S:return 2;case FS:return 8;case pu:case xI:return 32;case US:return 268435456;default:return 32}default:return 32}}var Md=!1,Aa=null,Da=null,wa=null,Tr=new Map,Mr=new Map,Ca=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kk(a,i){switch(a){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Tr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(i.pointerId)}}function Ar(a,i,s,l,f,g){return a===null||a.nativeEvent!==g?(a={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:g,targetContainers:[f]},i!==null&&(i=yi(i),i!==null&&Ok(i)),a):(a.eventSystemFlags|=l,i=a.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),a)}function Vx(a,i,s,l,f){switch(i){case"focusin":return Aa=Ar(Aa,a,i,s,l,f),!0;case"dragenter":return Da=Ar(Da,a,i,s,l,f),!0;case"mouseover":return wa=Ar(wa,a,i,s,l,f),!0;case"pointerover":var g=f.pointerId;return Tr.set(g,Ar(Tr.get(g)||null,a,i,s,l,f)),!0;case"gotpointercapture":return g=f.pointerId,Mr.set(g,Ar(Mr.get(g)||null,a,i,s,l,f)),!0}return!1}function xk(a){var i=pi(a.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){a.blockedOn=i,LI(a.priority,function(){if(s.tag===13){var l=Ye();l=gc(l);var f=Ki(s,l);f!==null&&We(f,s,l),vd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){a.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}a.blockedOn=null}function ws(a){if(a.blockedOn!==null)return!1;for(var i=a.targetContainers;0<i.length;){var s=bd(a.nativeEvent);if(s===null){s=a.nativeEvent;var l=new s.constructor(s.type,s);Dc=l,s.target.dispatchEvent(l),Dc=null}else return i=yi(s),i!==null&&Ok(i),a.blockedOn=s,!1;i.shift()}return!0}function Rk(a,i,s){ws(a)&&s.delete(i)}function Yx(){Md=!1,Aa!==null&&ws(Aa)&&(Aa=null),Da!==null&&ws(Da)&&(Da=null),wa!==null&&ws(wa)&&(wa=null),Tr.forEach(Rk),Mr.forEach(Rk)}function Cs(a,i){a.blockedOn===i&&(a.blockedOn=null,Md||(Md=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Yx)))}var Os=null;function Bk(a){Os!==a&&(Os=a,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Os===a&&(Os=null);for(var i=0;i<a.length;i+=3){var s=a[i],l=a[i+1],f=a[i+2];if(typeof l!="function"){if(Td(l||s)===null)continue;break}var g=yi(s);g!==null&&(a.splice(i,3),i-=3,Th(g,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Dr(a){function i(x){return Cs(x,a)}Aa!==null&&Cs(Aa,a),Da!==null&&Cs(Da,a),wa!==null&&Cs(wa,a),Tr.forEach(i),Mr.forEach(i);for(var s=0;s<Ca.length;s++){var l=Ca[s];l.blockedOn===a&&(l.blockedOn=null)}for(;0<Ca.length&&(s=Ca[0],s.blockedOn===null);)xk(s),s.blockedOn===null&&Ca.shift();if(s=(a.ownerDocument||a).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],g=s[l+1],v=f[Re]||null;if(typeof g=="function")v||Bk(s);else if(v){var M=null;if(g&&g.hasAttribute("formAction")){if(f=g,v=g[Re]||null)M=v.formAction;else if(Td(f)!==null)continue}else M=v.action;typeof M=="function"?s[l+1]=M:(s.splice(l,3),l-=3),Bk(s)}}}function Ad(a){this._internalRoot=a}Is.prototype.render=Ad.prototype.render=function(a){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Ye();wk(s,l,a,i,null,null)},Is.prototype.unmount=Ad.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var i=a.containerInfo;wk(a.current,2,null,a,null,null),cs(),i[Si]=null}};function Is(a){this._internalRoot=a}Is.prototype.unstable_scheduleHydration=function(a){if(a){var i=JS();a={blockedOn:null,target:a,priority:i};for(var s=0;s<Ca.length&&i!==0&&i<Ca[s].priority;s++);Ca.splice(s,0,a),s===0&&xk(a)}};var Pk=e.version;if(Pk!=="19.1.1")throw Error(r(527,Pk,"19.1.1"));Z.findDOMNode=function(a){var i=a._reactInternals;if(i===void 0)throw typeof a.render=="function"?Error(r(188)):(a=Object.keys(a).join(","),Error(r(268,a)));return a=h(i),a=a!==null?d(a):null,a=a===null?null:a.stateNode,a};var Wx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Io=Ks.inject(Wx),_e=Ks}catch{}}return Cr.createRoot=function(a,i){if(!t(a))throw Error(r(299));var s=!1,l="",f=Jy,g=Xy,v=qy,M=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(M=i.unstable_transitionCallbacks)),i=Ak(a,1,!1,null,null,s,l,f,g,v,M,null),a[Si]=i.current,rd(a),new Ad(i)},Cr.hydrateRoot=function(a,i,s){if(!t(a))throw Error(r(299));var l=!1,f="",g=Jy,v=Xy,M=qy,x=null,_=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(M=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(x=s.unstable_transitionCallbacks),s.formState!==void 0&&(_=s.formState)),i=Ak(a,1,!0,i,s??null,l,f,g,v,M,x,_),i.context=Dk(null),s=i.current,l=Ye(),l=gc(l),f=ca(l),f.callback=null,ha(s,f,l),s=l,i.current.lanes=s,xo(i,s),Mt(i),a[Si]=i.current,rd(a),new Is(i)},Cr.version="19.1.1",Cr}var Uk;function oR(){if(Uk)return Cd.exports;Uk=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cd.exports=iR(),Cd.exports}var rR=oR();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vk="popstate";function uR(n={}){function e(r,t){let{pathname:u,search:c,hash:m}=r.location;return ff("",{pathname:u,search:c,hash:m},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function o(r,t){return typeof t=="string"?t:jr(t)}return lR(e,o,null,n)}function Xn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function xt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sR(){return Math.random().toString(36).substring(2,10)}function Yk(n,e){return{usr:n.state,key:n.key,idx:e}}function ff(n,e,o=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ko(e):e,state:o,key:e&&e.key||r||sR()}}function jr({pathname:n="/",search:e="",hash:o=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ko(n){let e={};if(n){let o=n.indexOf("#");o>=0&&(e.hash=n.substring(o),n=n.substring(0,o));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function lR(n,e,o,r={}){let{window:t=document.defaultView,v5Compat:u=!1}=r,c=t.history,m="POP",h=null,d=S();d==null&&(d=0,c.replaceState({...c.state,idx:d},""));function S(){return(c.state||{idx:null}).idx}function p(){m="POP";let A=S(),b=A==null?null:A-d;d=A,h&&h({action:m,location:O.location,delta:b})}function y(A,b){m="PUSH";let I=ff(O.location,A,b);d=S()+1;let C=Yk(I,d),K=O.createHref(I);try{c.pushState(C,"",K)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;t.location.assign(K)}u&&h&&h({action:m,location:O.location,delta:1})}function k(A,b){m="REPLACE";let I=ff(O.location,A,b);d=S();let C=Yk(I,d),K=O.createHref(I);c.replaceState(C,"",K),u&&h&&h({action:m,location:O.location,delta:0})}function T(A){return cR(A)}let O={get action(){return m},get location(){return n(t,c)},listen(A){if(h)throw new Error("A history only accepts one active listener");return t.addEventListener(Vk,p),h=A,()=>{t.removeEventListener(Vk,p),h=null}},createHref(A){return e(t,A)},createURL:T,encodeLocation(A){let b=T(A);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:y,replace:k,go(A){return c.go(A)}};return O}function cR(n,e=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xn(o,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:jr(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function BM(n,e,o="/"){return hR(n,e,o,!1)}function hR(n,e,o,r){let t=typeof e=="string"?ko(e):e,u=qt(t.pathname||"/",o);if(u==null)return null;let c=PM(n);dR(c);let m=null;for(let h=0;m==null&&h<c.length;++h){let d=MR(u);m=bR(c[h],d,r)}return m}function PM(n,e=[],o=[],r=""){let t=(u,c,m)=>{let h={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(Xn(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let d=Jt([r,h.relativePath]),S=o.concat(h);u.children&&u.children.length>0&&(Xn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),PM(u.children,e,S,d)),!(u.path==null&&!u.index)&&e.push({path:d,score:vR(d,u.index),routesMeta:S})};return n.forEach((u,c)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))t(u,c);else for(let h of NM(u.path))t(u,c,h)}),e}function NM(n){let e=n.split("/");if(e.length===0)return[];let[o,...r]=e,t=o.endsWith("?"),u=o.replace(/\?$/,"");if(r.length===0)return t?[u,""]:[u];let c=NM(r.join("/")),m=[];return m.push(...c.map(h=>h===""?u:[u,h].join("/"))),t&&m.push(...c),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function dR(n){n.sort((e,o)=>e.score!==o.score?o.score-e.score:kR(e.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var fR=/^:[\w-]+$/,mR=3,gR=2,SR=1,pR=10,yR=-2,Wk=n=>n==="*";function vR(n,e){let o=n.split("/"),r=o.length;return o.some(Wk)&&(r+=yR),e&&(r+=gR),o.filter(t=>!Wk(t)).reduce((t,u)=>t+(fR.test(u)?mR:u===""?SR:pR),r)}function kR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,t)=>r===e[t])?n[n.length-1]-e[e.length-1]:0}function bR(n,e,o=!1){let{routesMeta:r}=n,t={},u="/",c=[];for(let m=0;m<r.length;++m){let h=r[m],d=m===r.length-1,S=u==="/"?e:e.slice(u.length)||"/",p=gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:d},S),y=h.route;if(!p&&d&&o&&!r[r.length-1].route.index&&(p=gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},S)),!p)return null;Object.assign(t,p.params),c.push({params:t,pathname:Jt([u,p.pathname]),pathnameBase:CR(Jt([u,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(u=Jt([u,p.pathnameBase]))}return c}function gl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,r]=TR(n.path,n.caseSensitive,n.end),t=e.match(o);if(!t)return null;let u=t[0],c=u.replace(/(.)\/+$/,"$1"),m=t.slice(1);return{params:r.reduce((d,{paramName:S,isOptional:p},y)=>{if(S==="*"){let T=m[y]||"";c=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const k=m[y];return p&&!k?d[S]=void 0:d[S]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:u,pathnameBase:c,pattern:n}}function TR(n,e=!1,o=!0){xt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],t="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,m,h)=>(r.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),t+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?t+="\\/*$":n!==""&&n!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,e?void 0:"i"),r]}function MR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function qt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let o=e.endsWith("/")?e.length-1:e.length,r=n.charAt(o);return r&&r!=="/"?null:n.slice(o)||"/"}function AR(n,e="/"){let{pathname:o,search:r="",hash:t=""}=typeof n=="string"?ko(n):n;return{pathname:o?o.startsWith("/")?o:DR(o,e):e,search:OR(r),hash:IR(t)}}function DR(n,e){let o=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(t=>{t===".."?o.length>1&&o.pop():t!=="."&&o.push(t)}),o.length>1?o.join("/"):"/"}function xd(n,e,o,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wR(n){return n.filter((e,o)=>o===0||e.route.path&&e.route.path.length>0)}function EM(n){let e=wR(n);return e.map((o,r)=>r===e.length-1?o.pathname:o.pathnameBase)}function HM(n,e,o,r=!1){let t;typeof n=="string"?t=ko(n):(t={...n},Xn(!t.pathname||!t.pathname.includes("?"),xd("?","pathname","search",t)),Xn(!t.pathname||!t.pathname.includes("#"),xd("#","pathname","hash",t)),Xn(!t.search||!t.search.includes("#"),xd("#","search","hash",t)));let u=n===""||t.pathname==="",c=u?"/":t.pathname,m;if(c==null)m=o;else{let p=e.length-1;if(!r&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),p-=1;t.pathname=y.join("/")}m=p>=0?e[p]:"/"}let h=AR(t,m),d=c&&c!=="/"&&c.endsWith("/"),S=(u||c===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(d||S)&&(h.pathname+="/"),h}var Jt=n=>n.join("/").replace(/\/\/+/g,"/"),CR=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),OR=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,IR=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function KR(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var GM=["POST","PUT","PATCH","DELETE"];new Set(GM);var xR=["GET",...GM];new Set(xR);var bo=D.createContext(null);bo.displayName="DataRouter";var jl=D.createContext(null);jl.displayName="DataRouterState";D.createContext(!1);var LM=D.createContext({isTransitioning:!1});LM.displayName="ViewTransition";var RR=D.createContext(new Map);RR.displayName="Fetchers";var BR=D.createContext(null);BR.displayName="Await";var Rt=D.createContext(null);Rt.displayName="Navigation";var au=D.createContext(null);au.displayName="Location";var ta=D.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var tm=D.createContext(null);tm.displayName="RouteError";function PR(n,{relative:e}={}){Xn(iu(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=D.useContext(Rt),{hash:t,pathname:u,search:c}=ou(n,{relative:e}),m=u;return o!=="/"&&(m=u==="/"?o:Jt([o,u])),r.createHref({pathname:m,search:c,hash:t})}function iu(){return D.useContext(au)!=null}function aa(){return Xn(iu(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(au).location}var _M="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jM(n){D.useContext(Rt).static||D.useLayoutEffect(n)}function am(){let{isDataRoute:n}=D.useContext(ta);return n?YR():NR()}function NR(){Xn(iu(),"useNavigate() may be used only in the context of a <Router> component.");let n=D.useContext(bo),{basename:e,navigator:o}=D.useContext(Rt),{matches:r}=D.useContext(ta),{pathname:t}=aa(),u=JSON.stringify(EM(r)),c=D.useRef(!1);return jM(()=>{c.current=!0}),D.useCallback((h,d={})=>{if(xt(c.current,_M),!c.current)return;if(typeof h=="number"){o.go(h);return}let S=HM(h,JSON.parse(u),t,d.relative==="path");n==null&&e!=="/"&&(S.pathname=S.pathname==="/"?e:Jt([e,S.pathname])),(d.replace?o.replace:o.push)(S,d.state,d)},[e,o,u,t,n])}D.createContext(null);function ou(n,{relative:e}={}){let{matches:o}=D.useContext(ta),{pathname:r}=aa(),t=JSON.stringify(EM(o));return D.useMemo(()=>HM(n,JSON.parse(t),r,e==="path"),[n,t,r,e])}function ER(n,e){return zM(n,e)}function zM(n,e,o,r){var b;Xn(iu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:t}=D.useContext(Rt),{matches:u}=D.useContext(ta),c=u[u.length-1],m=c?c.params:{},h=c?c.pathname:"/",d=c?c.pathnameBase:"/",S=c&&c.route;{let I=S&&S.path||"";$M(h,!S||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let p=aa(),y;if(e){let I=typeof e=="string"?ko(e):e;Xn(d==="/"||((b=I.pathname)==null?void 0:b.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${I.pathname}" was given in the \`location\` prop.`),y=I}else y=p;let k=y.pathname||"/",T=k;if(d!=="/"){let I=d.replace(/^\//,"").split("/");T="/"+k.replace(/^\//,"").split("/").slice(I.length).join("/")}let O=BM(n,{pathname:T});xt(S||O!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),xt(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=jR(O&&O.map(I=>Object.assign({},I,{params:Object.assign({},m,I.params),pathname:Jt([d,t.encodeLocation?t.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?d:Jt([d,t.encodeLocation?t.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),u,o,r);return e&&A?D.createElement(au.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},A):A}function HR(){let n=VR(),e=KR(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",t={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:u},"ErrorBoundary")," or"," ",D.createElement("code",{style:u},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),o?D.createElement("pre",{style:t},o):null,c)}var GR=D.createElement(HR,null),LR=class extends D.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?D.createElement(ta.Provider,{value:this.props.routeContext},D.createElement(tm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _R({routeContext:n,match:e,children:o}){let r=D.useContext(bo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(ta.Provider,{value:n},o)}function jR(n,e=[],o=null,r=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(e.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let t=n,u=o==null?void 0:o.errors;if(u!=null){let h=t.findIndex(d=>d.route.id&&(u==null?void 0:u[d.route.id])!==void 0);Xn(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),t=t.slice(0,Math.min(t.length,h+1))}let c=!1,m=-1;if(o)for(let h=0;h<t.length;h++){let d=t[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(m=h),d.route.id){let{loaderData:S,errors:p}=o,y=d.route.loader&&!S.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||y){c=!0,m>=0?t=t.slice(0,m+1):t=[t[0]];break}}}return t.reduceRight((h,d,S)=>{let p,y=!1,k=null,T=null;o&&(p=u&&d.route.id?u[d.route.id]:void 0,k=d.route.errorElement||GR,c&&(m<0&&S===0?($M("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,T=null):m===S&&(y=!0,T=d.route.hydrateFallbackElement||null)));let O=e.concat(t.slice(0,S+1)),A=()=>{let b;return p?b=k:y?b=T:d.route.Component?b=D.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=h,D.createElement(_R,{match:d,routeContext:{outlet:h,matches:O,isDataRoute:o!=null},children:b})};return o&&(d.route.ErrorBoundary||d.route.errorElement||S===0)?D.createElement(LR,{location:o.location,revalidation:o.revalidation,component:k,error:p,children:A(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):A()},null)}function im(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zR(n){let e=D.useContext(bo);return Xn(e,im(n)),e}function $R(n){let e=D.useContext(jl);return Xn(e,im(n)),e}function FR(n){let e=D.useContext(ta);return Xn(e,im(n)),e}function om(n){let e=FR(n),o=e.matches[e.matches.length-1];return Xn(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function UR(){return om("useRouteId")}function VR(){var r;let n=D.useContext(tm),e=$R("useRouteError"),o=om("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[o]}function YR(){let{router:n}=zR("useNavigate"),e=om("useNavigate"),o=D.useRef(!1);return jM(()=>{o.current=!0}),D.useCallback(async(t,u={})=>{xt(o.current,_M),o.current&&(typeof t=="number"?n.navigate(t):await n.navigate(t,{fromRouteId:e,...u}))},[n,e])}var Zk={};function $M(n,e,o){!e&&!Zk[n]&&(Zk[n]=!0,xt(!1,o))}D.memo(WR);function WR({routes:n,future:e,state:o}){return zM(n,void 0,o,e)}function ti(n){Xn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ZR({basename:n="/",children:e=null,location:o,navigationType:r="POP",navigator:t,static:u=!1}){Xn(!iu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),m=D.useMemo(()=>({basename:c,navigator:t,static:u,future:{}}),[c,t,u]);typeof o=="string"&&(o=ko(o));let{pathname:h="/",search:d="",hash:S="",state:p=null,key:y="default"}=o,k=D.useMemo(()=>{let T=qt(h,c);return T==null?null:{location:{pathname:T,search:d,hash:S,state:p,key:y},navigationType:r}},[c,h,d,S,p,y,r]);return xt(k!=null,`<Router basename="${c}"> is not able to match the URL "${h}${d}${S}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:D.createElement(Rt.Provider,{value:m},D.createElement(au.Provider,{children:e,value:k}))}function JR({children:n,location:e}){return ER(mf(n),e)}function mf(n,e=[]){let o=[];return D.Children.forEach(n,(r,t)=>{if(!D.isValidElement(r))return;let u=[...e,t];if(r.type===D.Fragment){o.push.apply(o,mf(r.props.children,u));return}Xn(r.type===ti,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=mf(r.props.children,u)),o.push(c)}),o}var Xs="get",qs="application/x-www-form-urlencoded";function zl(n){return n!=null&&typeof n.tagName=="string"}function XR(n){return zl(n)&&n.tagName.toLowerCase()==="button"}function qR(n){return zl(n)&&n.tagName.toLowerCase()==="form"}function QR(n){return zl(n)&&n.tagName.toLowerCase()==="input"}function n1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function e1(n,e){return n.button===0&&(!e||e==="_self")&&!n1(n)}var xs=null;function t1(){if(xs===null)try{new FormData(document.createElement("form"),0),xs=!1}catch{xs=!0}return xs}var a1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(n){return n!=null&&!a1.has(n)?(xt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qs}"`),null):n}function i1(n,e){let o,r,t,u,c;if(qR(n)){let m=n.getAttribute("action");r=m?qt(m,e):null,o=n.getAttribute("method")||Xs,t=Rd(n.getAttribute("enctype"))||qs,u=new FormData(n)}else if(XR(n)||QR(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(r=h?qt(h,e):null,o=n.getAttribute("formmethod")||m.getAttribute("method")||Xs,t=Rd(n.getAttribute("formenctype"))||Rd(m.getAttribute("enctype"))||qs,u=new FormData(m,n),!t1()){let{name:d,type:S,value:p}=n;if(S==="image"){let y=d?`${d}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else d&&u.append(d,p)}}else{if(zl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Xs,r=null,t=qs,c=n}return u&&t==="text/plain"&&(c=u,u=void 0),{action:r,method:o.toLowerCase(),encType:t,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function o1(n,e,o){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${o}`:e&&qt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function r1(n,e){if(n.id in e)return e[n.id];try{let o=await import(n.module);return e[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function s1(n,e,o){let r=await Promise.all(n.map(async t=>{let u=e.routes[t.route.id];if(u){let c=await r1(u,o);return c.links?c.links():[]}return[]}));return d1(r.flat(1).filter(u1).filter(t=>t.rel==="stylesheet"||t.rel==="preload").map(t=>t.rel==="stylesheet"?{...t,rel:"prefetch",as:"style"}:{...t,rel:"prefetch"}))}function Jk(n,e,o,r,t,u){let c=(h,d)=>o[d]?h.route.id!==o[d].route.id:!0,m=(h,d)=>{var S;return o[d].pathname!==h.pathname||((S=o[d].route.path)==null?void 0:S.endsWith("*"))&&o[d].params["*"]!==h.params["*"]};return u==="assets"?e.filter((h,d)=>c(h,d)||m(h,d)):u==="data"?e.filter((h,d)=>{var p;let S=r.routes[h.route.id];if(!S||!S.hasLoader)return!1;if(c(h,d)||m(h,d))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(t.pathname+t.search+t.hash,window.origin),currentParams:((p=o[0])==null?void 0:p.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function l1(n,e,{includeHydrateFallback:o}={}){return c1(n.map(r=>{let t=e.routes[r.route.id];if(!t)return[];let u=[t.module];return t.clientActionModule&&(u=u.concat(t.clientActionModule)),t.clientLoaderModule&&(u=u.concat(t.clientLoaderModule)),o&&t.hydrateFallbackModule&&(u=u.concat(t.hydrateFallbackModule)),t.imports&&(u=u.concat(t.imports)),u}).flat(1))}function c1(n){return[...new Set(n)]}function h1(n){let e={},o=Object.keys(n).sort();for(let r of o)e[r]=n[r];return e}function d1(n,e){let o=new Set;return new Set(e),n.reduce((r,t)=>{let u=JSON.stringify(h1(t));return o.has(u)||(o.add(u),r.push({key:u,link:t})),r},[])}function FM(){let n=D.useContext(bo);return rm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function f1(){let n=D.useContext(jl);return rm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var um=D.createContext(void 0);um.displayName="FrameworkContext";function UM(){let n=D.useContext(um);return rm(n,"You must render this element inside a <HydratedRouter> element"),n}function m1(n,e){let o=D.useContext(um),[r,t]=D.useState(!1),[u,c]=D.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:d,onMouseLeave:S,onTouchStart:p}=e,y=D.useRef(null);D.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let O=b=>{b.forEach(I=>{c(I.isIntersecting)})},A=new IntersectionObserver(O,{threshold:.5});return y.current&&A.observe(y.current),()=>{A.disconnect()}}},[n]),D.useEffect(()=>{if(r){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[r]);let k=()=>{t(!0)},T=()=>{t(!1),c(!1)};return o?n!=="intent"?[u,y,{}]:[u,y,{onFocus:Or(m,k),onBlur:Or(h,T),onMouseEnter:Or(d,k),onMouseLeave:Or(S,T),onTouchStart:Or(p,k)}]:[!1,y,{}]}function Or(n,e){return o=>{n&&n(o),o.defaultPrevented||e(o)}}function g1({page:n,...e}){let{router:o}=FM(),r=D.useMemo(()=>BM(o.routes,n,o.basename),[o.routes,n,o.basename]);return r?D.createElement(p1,{page:n,matches:r,...e}):null}function S1(n){let{manifest:e,routeModules:o}=UM(),[r,t]=D.useState([]);return D.useEffect(()=>{let u=!1;return s1(n,e,o).then(c=>{u||t(c)}),()=>{u=!0}},[n,e,o]),r}function p1({page:n,matches:e,...o}){let r=aa(),{manifest:t,routeModules:u}=UM(),{basename:c}=FM(),{loaderData:m,matches:h}=f1(),d=D.useMemo(()=>Jk(n,e,h,t,r,"data"),[n,e,h,t,r]),S=D.useMemo(()=>Jk(n,e,h,t,r,"assets"),[n,e,h,t,r]),p=D.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let T=new Set,O=!1;if(e.forEach(b=>{var C;let I=t.routes[b.route.id];!I||!I.hasLoader||(!d.some(K=>K.route.id===b.route.id)&&b.route.id in m&&((C=u[b.route.id])!=null&&C.shouldRevalidate)||I.hasClientLoader?O=!0:T.add(b.route.id))}),T.size===0)return[];let A=o1(n,c,"data");return O&&T.size>0&&A.searchParams.set("_routes",e.filter(b=>T.has(b.route.id)).map(b=>b.route.id).join(",")),[A.pathname+A.search]},[c,m,r,t,d,e,n,u]),y=D.useMemo(()=>l1(S,t),[S,t]),k=S1(S);return D.createElement(D.Fragment,null,p.map(T=>D.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),y.map(T=>D.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),k.map(({key:T,link:O})=>D.createElement("link",{key:T,nonce:o.nonce,...O})))}function y1(...n){return e=>{n.forEach(o=>{typeof o=="function"?o(e):o!=null&&(o.current=e)})}}var VM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{VM&&(window.__reactRouterVersion="7.8.0")}catch{}function v1({basename:n,children:e,window:o}){let r=D.useRef();r.current==null&&(r.current=uR({window:o,v5Compat:!0}));let t=r.current,[u,c]=D.useState({action:t.action,location:t.location}),m=D.useCallback(h=>{D.startTransition(()=>c(h))},[c]);return D.useLayoutEffect(()=>t.listen(m),[t,m]),D.createElement(ZR,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:t})}var YM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ka=D.forwardRef(function({onClick:e,discover:o="render",prefetch:r="none",relative:t,reloadDocument:u,replace:c,state:m,target:h,to:d,preventScrollReset:S,viewTransition:p,...y},k){let{basename:T}=D.useContext(Rt),O=typeof d=="string"&&YM.test(d),A,b=!1;if(typeof d=="string"&&O&&(A=d,VM))try{let X=new URL(window.location.href),on=d.startsWith("//")?new URL(X.protocol+d):new URL(d),rn=qt(on.pathname,T);on.origin===X.origin&&rn!=null?d=rn+on.search+on.hash:b=!0}catch{xt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let I=PR(d,{relative:t}),[C,K,w]=m1(r,y),E=M1(d,{replace:c,state:m,target:h,preventScrollReset:S,relative:t,viewTransition:p});function j(X){e&&e(X),X.defaultPrevented||E(X)}let z=D.createElement("a",{...y,...w,href:A||I,onClick:b||u?e:j,ref:y1(k,K),target:h,"data-discover":!O&&o==="render"?"true":void 0});return C&&!O?D.createElement(D.Fragment,null,z,D.createElement(g1,{page:I})):z});Ka.displayName="Link";var k1=D.forwardRef(function({"aria-current":e="page",caseSensitive:o=!1,className:r="",end:t=!1,style:u,to:c,viewTransition:m,children:h,...d},S){let p=ou(c,{relative:d.relative}),y=aa(),k=D.useContext(jl),{navigator:T,basename:O}=D.useContext(Rt),A=k!=null&&O1(p)&&m===!0,b=T.encodeLocation?T.encodeLocation(p).pathname:p.pathname,I=y.pathname,C=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(I=I.toLowerCase(),C=C?C.toLowerCase():null,b=b.toLowerCase()),C&&O&&(C=qt(C,O)||C);const K=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let w=I===b||!t&&I.startsWith(b)&&I.charAt(K)==="/",E=C!=null&&(C===b||!t&&C.startsWith(b)&&C.charAt(b.length)==="/"),j={isActive:w,isPending:E,isTransitioning:A},z=w?e:void 0,X;typeof r=="function"?X=r(j):X=[r,w?"active":null,E?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let on=typeof u=="function"?u(j):u;return D.createElement(Ka,{...d,"aria-current":z,className:X,ref:S,style:on,to:c,viewTransition:m},typeof h=="function"?h(j):h)});k1.displayName="NavLink";var b1=D.forwardRef(({discover:n="render",fetcherKey:e,navigate:o,reloadDocument:r,replace:t,state:u,method:c=Xs,action:m,onSubmit:h,relative:d,preventScrollReset:S,viewTransition:p,...y},k)=>{let T=w1(),O=C1(m,{relative:d}),A=c.toLowerCase()==="get"?"get":"post",b=typeof m=="string"&&YM.test(m),I=C=>{if(h&&h(C),C.defaultPrevented)return;C.preventDefault();let K=C.nativeEvent.submitter,w=(K==null?void 0:K.getAttribute("formmethod"))||c;T(K||C.currentTarget,{fetcherKey:e,method:w,navigate:o,replace:t,state:u,relative:d,preventScrollReset:S,viewTransition:p})};return D.createElement("form",{ref:k,method:A,action:O,onSubmit:r?h:I,...y,"data-discover":!b&&n==="render"?"true":void 0})});b1.displayName="Form";function T1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WM(n){let e=D.useContext(bo);return Xn(e,T1(n)),e}function M1(n,{target:e,replace:o,state:r,preventScrollReset:t,relative:u,viewTransition:c}={}){let m=am(),h=aa(),d=ou(n,{relative:u});return D.useCallback(S=>{if(e1(S,e)){S.preventDefault();let p=o!==void 0?o:jr(h)===jr(d);m(n,{replace:p,state:r,preventScrollReset:t,relative:u,viewTransition:c})}},[h,m,d,o,r,e,n,t,u,c])}var A1=0,D1=()=>`__${String(++A1)}__`;function w1(){let{router:n}=WM("useSubmit"),{basename:e}=D.useContext(Rt),o=UR();return D.useCallback(async(r,t={})=>{let{action:u,method:c,encType:m,formData:h,body:d}=i1(r,e);if(t.navigate===!1){let S=t.fetcherKey||D1();await n.fetch(S,o,t.action||u,{preventScrollReset:t.preventScrollReset,formData:h,body:d,formMethod:t.method||c,formEncType:t.encType||m,flushSync:t.flushSync})}else await n.navigate(t.action||u,{preventScrollReset:t.preventScrollReset,formData:h,body:d,formMethod:t.method||c,formEncType:t.encType||m,replace:t.replace,state:t.state,fromRouteId:o,flushSync:t.flushSync,viewTransition:t.viewTransition})},[n,e,o])}function C1(n,{relative:e}={}){let{basename:o}=D.useContext(Rt),r=D.useContext(ta);Xn(r,"useFormAction must be used inside a RouteContext");let[t]=r.matches.slice(-1),u={...ou(n||".",{relative:e})},c=aa();if(n==null){u.search=c.search;let m=new URLSearchParams(u.search),h=m.getAll("index");if(h.some(S=>S==="")){m.delete("index"),h.filter(p=>p).forEach(p=>m.append("index",p));let S=m.toString();u.search=S?`?${S}`:""}}return(!n||n===".")&&t.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Jt([o,u.pathname])),jr(u)}function O1(n,{relative:e}={}){let o=D.useContext(LM);Xn(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=WM("useViewTransitionState"),t=ou(n,{relative:e});if(!o.isTransitioning)return!1;let u=qt(o.currentLocation.pathname,r)||o.currentLocation.pathname,c=qt(o.nextLocation.pathname,r)||o.nextLocation.pathname;return gl(t.pathname,c)!=null||gl(t.pathname,u)!=null}var I1=RM();const K1="modulepreload",x1=function(n){return"/Guess-The-Anime-OP/"+n},Xk={},R1=function(e,o,r){let t=Promise.resolve();if(o&&o.length>0){let c=function(d){return Promise.all(d.map(S=>Promise.resolve(S).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),h=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));t=c(o.map(d=>{if(d=x1(d),d in Xk)return;Xk[d]=!0;const S=d.endsWith(".css"),p=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const y=document.createElement("link");if(y.rel=S?"stylesheet":K1,S||(y.as="script"),y.crossOrigin="",y.href=d,h&&y.setAttribute("nonce",h),document.head.appendChild(y),S)return new Promise((k,T)=>{y.addEventListener("load",k),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${d}`)))})}))}function u(c){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=c,window.dispatchEvent(m),!m.defaultPrevented)throw c}return t.then(c=>{for(const m of c||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})},B1="/Guess-The-Anime-OP/flower%20field.jpg",P1="/Guess-The-Anime-OP/frieren%20in%20river.png";function sm(n=768){const e=`(max-width: ${n}px)`,[o,r]=D.useState(()=>window.matchMedia(e).matches);return D.useEffect(()=>{const t=window.matchMedia(e),u=c=>{r(c.matches)};return t.addEventListener("change",u),()=>t.removeEventListener("change",u)},[e]),o}function N1(){const[n,e]=D.useState(30),o=sm();return D.useEffect(()=>{},[n]),D.useEffect(()=>{e(o?15:30)},[o]),P.jsx("div",{className:"stars",children:[...Array(n)].map((r,t)=>{const u=t+1,c=.2+Math.random()*.2,m=3.5+Math.random();let h=Math.random()>.5,d=-10+Math.random()*45;Math.random()>.5&&(d=75+Math.random()*35);const S=-10+Math.random()*110;return P.jsxs("div",{className:"star",style:{width:`max(${c}vw, 3px)`,animation:`star-spin ${m}s linear infinite ${h?"reverse":"normal"}`,top:`${d}%`,left:`${S}%`},children:[P.jsx("span",{className:"stick one"}),P.jsx("span",{className:"stick two"})]},`star_${u}`)})})}const to=1e3,E1=[P.jsx("li",{className:"hover:text-[var(--tertiary-color)]",children:P.jsx(Ka,{to:"/",children:"Home"},"link-maincontent")},"header_li_1"),P.jsx("li",{className:"hover:text-[var(--tertiary-color)]",children:P.jsx(Ka,{to:"/about",children:"About"},"link-about")},"header_li_2"),P.jsx("li",{className:"hover:text-[var(--tertiary-color)]",children:P.jsx(Ka,{to:"/rules",children:"Rules"},"link-rules")},"header_li_3"),P.jsx("li",{className:"hover:text-[var(--tertiary-color)]",children:P.jsx(Ka,{to:"/faq",children:"FAQ"},"link-faq")},"header_li_4"),P.jsx("li",{className:"hover:text-[var(--tertiary-color)]",children:P.jsx(Ka,{to:"/stats",children:"Stats"},"link-stats")},"header_li_5")];function H1({mode:n,setMode:e}){const o=()=>{e(n==="Opening"?"Ending":"Opening")},r=n==="Opening"?P1:B1;return P.jsx("header",{className:"Header w-full h-full max-h-[1080px] text-center border-12 lg:border-8 border-[var(--primary-color)]",children:P.jsx("div",{className:"BannerWrapper relative flex items-center justify-center w-full",children:P.jsxs("div",{className:`Banner w-full aspect-[6/5] md:aspect-[2/1] lg:aspect-[3.5/1] max-w-[1920px] max-h-[972px] bg-cover bg-center 
                    flex flex-col justify-center items-center shrink-0
                    `,style:{backgroundImage:`url(${r})`},children:[P.jsxs("h1",{className:`Title w-full h-auto min-h-[150px] m-0 
                      flex flex-col md:flex-row justify-center items-center 
                      text-center ext-white text-[10.35vw] md:text-[max(7.0vw,45px)]
                      text-shadow-3xl text-shadow-red-900`,style:{textShadow:"0 0 10px black"},children:[P.jsx("span",{className:"md:whitespace-pre",children:"Guess the Anime "}),P.jsxs("span",{className:"OpeningEnding relative text-[var(--secondary-color)] hover:text-[var(--tertiary-color)]",onClick:o,children:[n,"!",P.jsx(N1,{})]})]}),P.jsx("nav",{className:"NavMenu w-auto p-2 md:p-4 bg-[var(--primary-color)] text-white text-md md:text-md lg:text-3xl xl:text-[30px] rounded-lg lg:rounded-xl",children:P.jsx("ul",{className:"flex justify-center gap-4 list-none m-0 p-0",children:E1})})]})})})}const G1="Top 1000 by Anime Score",lm=D.createContext(void 0);lm.displayName="FilterContext";const ru=()=>{const n=D.useContext(lm);if(!n)throw new Error("useFilterContext must be used within the provider!");return n},L1=({children:n,initial:e=G1})=>{const[o,r]=D.useState(e),t=D.useCallback(c=>r(c),[]),u=D.useMemo(()=>({filter:o,updateFilter:t}),[o]);return P.jsx(lm.Provider,{value:u,children:n})};function _1(){const n=am(),e=ru(),o=()=>{const r=Math.floor(Math.random()*to+1);n(`/guess?id=${r}&filter=${e.filter}`)};return P.jsx("div",{className:"ButtonContainer relative top-[5.5vw] left-[2.0vw] lg:top-[2.5vw] lg:left-0",children:P.jsx("button",{className:"RandomSong",onClick:o,children:"Random Song!"})})}const j1="Opening",cm=D.createContext(void 0);cm.displayName="ModeContext";const uu=()=>{const n=D.useContext(cm);if(!n)throw new Error("useModeContext must be used within the provider!");return n},z1=({initial:n=j1,children:e})=>{const[o,r]=D.useState(n),t=D.useCallback(c=>r(c),[]),u=D.useMemo(()=>({mode:o,updateMode:t}),[o]);return P.jsx(cm.Provider,{value:u,children:e})},hm=["Top 1000 by Anime Score","Random Preset 1","Random Preset 2","Random Preset 3","Top 1000 by Song Viewcount","Random Preset 4","Random Preset 5","Random Preset 6"],$1=["Opening","Ending"],F1=["Correct","Incorrect","Attempting","None"];function li(n){"@babel/helpers - typeof";return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},li(n)}function U1(n,e){if(li(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var r=o.call(n,e);if(li(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ZM(n){var e=U1(n,"string");return li(e)=="symbol"?e:e+""}function Br(n,e,o){return(e=ZM(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function qk(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,r)}return o}function fn(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?qk(Object(o),!0).forEach(function(r){Br(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):qk(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function V1(n){if(Array.isArray(n))return n}function Y1(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r,t,u,c,m=[],h=!0,d=!1;try{if(u=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;h=!1}else for(;!(h=(r=u.call(o)).done)&&(m.push(r.value),m.length!==e);h=!0);}catch(S){d=!0,t=S}finally{try{if(!h&&o.return!=null&&(c=o.return(),Object(c)!==c))return}finally{if(d)throw t}}return m}}function gf(n,e){(e==null||e>n.length)&&(e=n.length);for(var o=0,r=Array(e);o<e;o++)r[o]=n[o];return r}function JM(n,e){if(n){if(typeof n=="string")return gf(n,e);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?gf(n,e):void 0}}function W1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(n,e){return V1(n)||Y1(n,e)||JM(n,e)||W1()}function Z1(n,e){if(n==null)return{};var o={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;o[r]=n[r]}return o}function ia(n,e){if(n==null)return{};var o,r,t=Z1(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)o=u[r],e.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var J1=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function X1(n){var e=n.defaultInputValue,o=e===void 0?"":e,r=n.defaultMenuIsOpen,t=r===void 0?!1:r,u=n.defaultValue,c=u===void 0?null:u,m=n.inputValue,h=n.menuIsOpen,d=n.onChange,S=n.onInputChange,p=n.onMenuClose,y=n.onMenuOpen,k=n.value,T=ia(n,J1),O=D.useState(m!==void 0?m:o),A=Xt(O,2),b=A[0],I=A[1],C=D.useState(h!==void 0?h:t),K=Xt(C,2),w=K[0],E=K[1],j=D.useState(k!==void 0?k:c),z=Xt(j,2),X=z[0],on=z[1],rn=D.useCallback(function(an,pn){typeof d=="function"&&d(an,pn),on(an)},[d]),un=D.useCallback(function(an,pn){var R;typeof S=="function"&&(R=S(an,pn)),I(R!==void 0?R:an)},[S]),kn=D.useCallback(function(){typeof y=="function"&&y(),E(!0)},[y]),q=D.useCallback(function(){typeof p=="function"&&p(),E(!1)},[p]),tn=m!==void 0?m:b,H=h!==void 0?h:w,Z=k!==void 0?k:X;return fn(fn({},T),{},{inputValue:tn,menuIsOpen:H,onChange:rn,onInputChange:un,onMenuClose:q,onMenuOpen:kn,value:Z})}function Sn(){return Sn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)({}).hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n},Sn.apply(null,arguments)}function q1(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Qk(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,ZM(r.key),r)}}function Q1(n,e,o){return e&&Qk(n.prototype,e),o&&Qk(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function Sf(n,e){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},Sf(n,e)}function n2(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Sf(n,e)}function Sl(n){return Sl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Sl(n)}function XM(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XM=function(){return!!n})()}function e2(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function t2(n,e){if(e&&(li(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return e2(n)}function a2(n){var e=XM();return function(){var o,r=Sl(n);if(e){var t=Sl(this).constructor;o=Reflect.construct(r,arguments,t)}else o=r.apply(this,arguments);return t2(this,o)}}function i2(n){if(Array.isArray(n))return gf(n)}function o2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function r2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dm(n){return i2(n)||o2(n)||JM(n)||r2()}function u2(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function s2(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var l2=function(){function n(o){var r=this;this._insertTag=function(t){var u;r.tags.length===0?r.insertionPoint?u=r.insertionPoint.nextSibling:r.prepend?u=r.container.firstChild:u=r.before:u=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(t,u),r.tags.push(t)},this.isSpeedy=o.speedy===void 0?!0:o.speedy,this.tags=[],this.ctr=0,this.nonce=o.nonce,this.key=o.key,this.container=o.container,this.prepend=o.prepend,this.insertionPoint=o.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(s2(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var u=u2(t);try{u.insertRule(r,u.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var t;return(t=r.parentNode)==null?void 0:t.removeChild(r)}),this.tags=[],this.ctr=0},n}(),Ce="-ms-",pl="-moz-",Nn="-webkit-",qM="comm",fm="rule",mm="decl",c2="@import",QM="@keyframes",h2="@layer",d2=Math.abs,$l=String.fromCharCode,f2=Object.assign;function m2(n,e){return Me(n,0)^45?(((e<<2^Me(n,0))<<2^Me(n,1))<<2^Me(n,2))<<2^Me(n,3):0}function nA(n){return n.trim()}function g2(n,e){return(n=e.exec(n))?n[0]:n}function En(n,e,o){return n.replace(e,o)}function pf(n,e){return n.indexOf(e)}function Me(n,e){return n.charCodeAt(e)|0}function zr(n,e,o){return n.slice(e,o)}function At(n){return n.length}function gm(n){return n.length}function Rs(n,e){return e.push(n),n}function S2(n,e){return n.map(e).join("")}var Fl=1,fo=1,eA=0,Ge=0,ce=0,To="";function Ul(n,e,o,r,t,u,c){return{value:n,root:e,parent:o,type:r,props:t,children:u,line:Fl,column:fo,length:c,return:""}}function Ir(n,e){return f2(Ul("",null,null,"",null,null,0),n,{length:-n.length},e)}function p2(){return ce}function y2(){return ce=Ge>0?Me(To,--Ge):0,fo--,ce===10&&(fo=1,Fl--),ce}function Je(){return ce=Ge<eA?Me(To,Ge++):0,fo++,ce===10&&(fo=1,Fl++),ce}function wt(){return Me(To,Ge)}function Qs(){return Ge}function su(n,e){return zr(To,n,e)}function $r(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tA(n){return Fl=fo=1,eA=At(To=n),Ge=0,[]}function aA(n){return To="",n}function nl(n){return nA(su(Ge-1,yf(n===91?n+2:n===40?n+1:n)))}function v2(n){for(;(ce=wt())&&ce<33;)Je();return $r(n)>2||$r(ce)>3?"":" "}function k2(n,e){for(;--e&&Je()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return su(n,Qs()+(e<6&&wt()==32&&Je()==32))}function yf(n){for(;Je();)switch(ce){case n:return Ge;case 34:case 39:n!==34&&n!==39&&yf(ce);break;case 40:n===41&&yf(n);break;case 92:Je();break}return Ge}function b2(n,e){for(;Je()&&n+ce!==57;)if(n+ce===84&&wt()===47)break;return"/*"+su(e,Ge-1)+"*"+$l(n===47?n:Je())}function T2(n){for(;!$r(wt());)Je();return su(n,Ge)}function M2(n){return aA(el("",null,null,null,[""],n=tA(n),0,[0],n))}function el(n,e,o,r,t,u,c,m,h){for(var d=0,S=0,p=c,y=0,k=0,T=0,O=1,A=1,b=1,I=0,C="",K=t,w=u,E=r,j=C;A;)switch(T=I,I=Je()){case 40:if(T!=108&&Me(j,p-1)==58){pf(j+=En(nl(I),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:j+=nl(I);break;case 9:case 10:case 13:case 32:j+=v2(T);break;case 92:j+=k2(Qs()-1,7);continue;case 47:switch(wt()){case 42:case 47:Rs(A2(b2(Je(),Qs()),e,o),h);break;default:j+="/"}break;case 123*O:m[d++]=At(j)*b;case 125*O:case 59:case 0:switch(I){case 0:case 125:A=0;case 59+S:b==-1&&(j=En(j,/\f/g,"")),k>0&&At(j)-p&&Rs(k>32?eb(j+";",r,o,p-1):eb(En(j," ","")+";",r,o,p-2),h);break;case 59:j+=";";default:if(Rs(E=nb(j,e,o,d,S,t,m,C,K=[],w=[],p),u),I===123)if(S===0)el(j,e,E,E,K,u,p,m,w);else switch(y===99&&Me(j,3)===110?100:y){case 100:case 108:case 109:case 115:el(n,E,E,r&&Rs(nb(n,E,E,0,0,t,m,C,t,K=[],p),w),t,w,p,m,r?K:w);break;default:el(j,E,E,E,[""],w,0,m,w)}}d=S=k=0,O=b=1,C=j="",p=c;break;case 58:p=1+At(j),k=T;default:if(O<1){if(I==123)--O;else if(I==125&&O++==0&&y2()==125)continue}switch(j+=$l(I),I*O){case 38:b=S>0?1:(j+="\f",-1);break;case 44:m[d++]=(At(j)-1)*b,b=1;break;case 64:wt()===45&&(j+=nl(Je())),y=wt(),S=p=At(C=j+=T2(Qs())),I++;break;case 45:T===45&&At(j)==2&&(O=0)}}return u}function nb(n,e,o,r,t,u,c,m,h,d,S){for(var p=t-1,y=t===0?u:[""],k=gm(y),T=0,O=0,A=0;T<r;++T)for(var b=0,I=zr(n,p+1,p=d2(O=c[T])),C=n;b<k;++b)(C=nA(O>0?y[b]+" "+I:En(I,/&\f/g,y[b])))&&(h[A++]=C);return Ul(n,e,o,t===0?fm:m,h,d,S)}function A2(n,e,o){return Ul(n,e,o,qM,$l(p2()),zr(n,2,-2),0)}function eb(n,e,o,r){return Ul(n,e,o,mm,zr(n,0,r),zr(n,r+1,-1),r)}function lo(n,e){for(var o="",r=gm(n),t=0;t<r;t++)o+=e(n[t],t,n,e)||"";return o}function D2(n,e,o,r){switch(n.type){case h2:if(n.children.length)break;case c2:case mm:return n.return=n.return||n.value;case qM:return"";case QM:return n.return=n.value+"{"+lo(n.children,r)+"}";case fm:n.value=n.props.join(",")}return At(o=lo(n.children,r))?n.return=n.value+"{"+o+"}":""}function w2(n){var e=gm(n);return function(o,r,t,u){for(var c="",m=0;m<e;m++)c+=n[m](o,r,t,u)||"";return c}}function C2(n){return function(e){e.root||(e=e.return)&&n(e)}}function O2(n){var e=Object.create(null);return function(o){return e[o]===void 0&&(e[o]=n(o)),e[o]}}var I2=function(e,o,r){for(var t=0,u=0;t=u,u=wt(),t===38&&u===12&&(o[r]=1),!$r(u);)Je();return su(e,Ge)},K2=function(e,o){var r=-1,t=44;do switch($r(t)){case 0:t===38&&wt()===12&&(o[r]=1),e[r]+=I2(Ge-1,o,r);break;case 2:e[r]+=nl(t);break;case 4:if(t===44){e[++r]=wt()===58?"&\f":"",o[r]=e[r].length;break}default:e[r]+=$l(t)}while(t=Je());return e},x2=function(e,o){return aA(K2(tA(e),o))},tb=new WeakMap,R2=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var o=e.value,r=e.parent,t=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&o.charCodeAt(0)!==58&&!tb.get(r))&&!t){tb.set(e,!0);for(var u=[],c=x2(o,u),m=r.props,h=0,d=0;h<c.length;h++)for(var S=0;S<m.length;S++,d++)e.props[d]=u[h]?c[h].replace(/&\f/g,m[S]):m[S]+" "+c[h]}}},B2=function(e){if(e.type==="decl"){var o=e.value;o.charCodeAt(0)===108&&o.charCodeAt(2)===98&&(e.return="",e.value="")}};function iA(n,e){switch(m2(n,e)){case 5103:return Nn+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nn+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nn+n+pl+n+Ce+n+n;case 6828:case 4268:return Nn+n+Ce+n+n;case 6165:return Nn+n+Ce+"flex-"+n+n;case 5187:return Nn+n+En(n,/(\w+).+(:[^]+)/,Nn+"box-$1$2"+Ce+"flex-$1$2")+n;case 5443:return Nn+n+Ce+"flex-item-"+En(n,/flex-|-self/,"")+n;case 4675:return Nn+n+Ce+"flex-line-pack"+En(n,/align-content|flex-|-self/,"")+n;case 5548:return Nn+n+Ce+En(n,"shrink","negative")+n;case 5292:return Nn+n+Ce+En(n,"basis","preferred-size")+n;case 6060:return Nn+"box-"+En(n,"-grow","")+Nn+n+Ce+En(n,"grow","positive")+n;case 4554:return Nn+En(n,/([^-])(transform)/g,"$1"+Nn+"$2")+n;case 6187:return En(En(En(n,/(zoom-|grab)/,Nn+"$1"),/(image-set)/,Nn+"$1"),n,"")+n;case 5495:case 3959:return En(n,/(image-set\([^]*)/,Nn+"$1$`$1");case 4968:return En(En(n,/(.+:)(flex-)?(.*)/,Nn+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nn+n+n;case 4095:case 3583:case 4068:case 2532:return En(n,/(.+)-inline(.+)/,Nn+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(n)-1-e>6)switch(Me(n,e+1)){case 109:if(Me(n,e+4)!==45)break;case 102:return En(n,/(.+:)(.+)-([^]+)/,"$1"+Nn+"$2-$3$1"+pl+(Me(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~pf(n,"stretch")?iA(En(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(Me(n,e+1)!==115)break;case 6444:switch(Me(n,At(n)-3-(~pf(n,"!important")&&10))){case 107:return En(n,":",":"+Nn)+n;case 101:return En(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Nn+(Me(n,14)===45?"inline-":"")+"box$3$1"+Nn+"$2$3$1"+Ce+"$2box$3")+n}break;case 5936:switch(Me(n,e+11)){case 114:return Nn+n+Ce+En(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nn+n+Ce+En(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nn+n+Ce+En(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return Nn+n+Ce+n+n}return n}var P2=function(e,o,r,t){if(e.length>-1&&!e.return)switch(e.type){case mm:e.return=iA(e.value,e.length);break;case QM:return lo([Ir(e,{value:En(e.value,"@","@"+Nn)})],t);case fm:if(e.length)return S2(e.props,function(u){switch(g2(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return lo([Ir(e,{props:[En(u,/:(read-\w+)/,":"+pl+"$1")]})],t);case"::placeholder":return lo([Ir(e,{props:[En(u,/:(plac\w+)/,":"+Nn+"input-$1")]}),Ir(e,{props:[En(u,/:(plac\w+)/,":"+pl+"$1")]}),Ir(e,{props:[En(u,/:(plac\w+)/,Ce+"input-$1")]})],t)}return""})}},N2=[P2],E2=function(e){var o=e.key;if(o==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(O){var A=O.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(O),O.setAttribute("data-s",""))})}var t=e.stylisPlugins||N2,u={},c,m=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+o+' "]'),function(O){for(var A=O.getAttribute("data-emotion").split(" "),b=1;b<A.length;b++)u[A[b]]=!0;m.push(O)});var h,d=[R2,B2];{var S,p=[D2,C2(function(O){S.insert(O)})],y=w2(d.concat(t,p)),k=function(A){return lo(M2(A),y)};h=function(A,b,I,C){S=I,k(A?A+"{"+b.styles+"}":b.styles),C&&(T.inserted[b.name]=!0)}}var T={key:o,sheet:new l2({key:o,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:h};return T.sheet.hydrate(m),T},Bd={exports:{}},Hn={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ab;function H2(){if(ab)return Hn;ab=1;var n=typeof Symbol=="function"&&Symbol.for,e=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,h=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,S=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,k=n?Symbol.for("react.memo"):60115,T=n?Symbol.for("react.lazy"):60116,O=n?Symbol.for("react.block"):60121,A=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,I=n?Symbol.for("react.scope"):60119;function C(w){if(typeof w=="object"&&w!==null){var E=w.$$typeof;switch(E){case e:switch(w=w.type,w){case h:case d:case r:case u:case t:case p:return w;default:switch(w=w&&w.$$typeof,w){case m:case S:case T:case k:case c:return w;default:return E}}case o:return E}}}function K(w){return C(w)===d}return Hn.AsyncMode=h,Hn.ConcurrentMode=d,Hn.ContextConsumer=m,Hn.ContextProvider=c,Hn.Element=e,Hn.ForwardRef=S,Hn.Fragment=r,Hn.Lazy=T,Hn.Memo=k,Hn.Portal=o,Hn.Profiler=u,Hn.StrictMode=t,Hn.Suspense=p,Hn.isAsyncMode=function(w){return K(w)||C(w)===h},Hn.isConcurrentMode=K,Hn.isContextConsumer=function(w){return C(w)===m},Hn.isContextProvider=function(w){return C(w)===c},Hn.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===e},Hn.isForwardRef=function(w){return C(w)===S},Hn.isFragment=function(w){return C(w)===r},Hn.isLazy=function(w){return C(w)===T},Hn.isMemo=function(w){return C(w)===k},Hn.isPortal=function(w){return C(w)===o},Hn.isProfiler=function(w){return C(w)===u},Hn.isStrictMode=function(w){return C(w)===t},Hn.isSuspense=function(w){return C(w)===p},Hn.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===r||w===d||w===u||w===t||w===p||w===y||typeof w=="object"&&w!==null&&(w.$$typeof===T||w.$$typeof===k||w.$$typeof===c||w.$$typeof===m||w.$$typeof===S||w.$$typeof===A||w.$$typeof===b||w.$$typeof===I||w.$$typeof===O)},Hn.typeOf=C,Hn}var ib;function G2(){return ib||(ib=1,Bd.exports=H2()),Bd.exports}var Pd,ob;function L2(){if(ob)return Pd;ob=1;var n=G2(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[n.ForwardRef]=r,u[n.Memo]=t;function c(T){return n.isMemo(T)?t:u[T.$$typeof]||e}var m=Object.defineProperty,h=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;function k(T,O,A){if(typeof O!="string"){if(y){var b=p(O);b&&b!==y&&k(T,b,A)}var I=h(O);d&&(I=I.concat(d(O)));for(var C=c(T),K=c(O),w=0;w<I.length;++w){var E=I[w];if(!o[E]&&!(A&&A[E])&&!(K&&K[E])&&!(C&&C[E])){var j=S(O,E);try{m(T,E,j)}catch{}}}}return T}return Pd=k,Pd}L2();var _2=!0;function j2(n,e,o){var r="";return o.split(" ").forEach(function(t){n[t]!==void 0?e.push(n[t]+";"):t&&(r+=t+" ")}),r}var oA=function(e,o,r){var t=e.key+"-"+o.name;(r===!1||_2===!1)&&e.registered[t]===void 0&&(e.registered[t]=o.styles)},z2=function(e,o,r){oA(e,o,r);var t=e.key+"-"+o.name;if(e.inserted[o.name]===void 0){var u=o;do e.insert(o===u?"."+t:"",u,e.sheet,!0),u=u.next;while(u!==void 0)}};function $2(n){for(var e=0,o,r=0,t=n.length;t>=4;++r,t-=4)o=n.charCodeAt(r)&255|(n.charCodeAt(++r)&255)<<8|(n.charCodeAt(++r)&255)<<16|(n.charCodeAt(++r)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,e=(o&65535)*1540483477+((o>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(t){case 3:e^=(n.charCodeAt(r+2)&255)<<16;case 2:e^=(n.charCodeAt(r+1)&255)<<8;case 1:e^=n.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var F2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},U2=/[A-Z]|^ms/g,V2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rA=function(e){return e.charCodeAt(1)===45},rb=function(e){return e!=null&&typeof e!="boolean"},Nd=O2(function(n){return rA(n)?n:n.replace(U2,"-$&").toLowerCase()}),ub=function(e,o){switch(e){case"animation":case"animationName":if(typeof o=="string")return o.replace(V2,function(r,t,u){return Dt={name:t,styles:u,next:Dt},t})}return F2[e]!==1&&!rA(e)&&typeof o=="number"&&o!==0?o+"px":o};function Fr(n,e,o){if(o==null)return"";var r=o;if(r.__emotion_styles!==void 0)return r;switch(typeof o){case"boolean":return"";case"object":{var t=o;if(t.anim===1)return Dt={name:t.name,styles:t.styles,next:Dt},t.name;var u=o;if(u.styles!==void 0){var c=u.next;if(c!==void 0)for(;c!==void 0;)Dt={name:c.name,styles:c.styles,next:Dt},c=c.next;var m=u.styles+";";return m}return Y2(n,e,o)}case"function":{if(n!==void 0){var h=Dt,d=o(n);return Dt=h,Fr(n,e,d)}break}}var S=o;return S}function Y2(n,e,o){var r="";if(Array.isArray(o))for(var t=0;t<o.length;t++)r+=Fr(n,e,o[t])+";";else for(var u in o){var c=o[u];if(typeof c!="object"){var m=c;rb(m)&&(r+=Nd(u)+":"+ub(u,m)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&e==null)for(var h=0;h<c.length;h++)rb(c[h])&&(r+=Nd(u)+":"+ub(u,c[h])+";");else{var d=Fr(n,e,c);switch(u){case"animation":case"animationName":{r+=Nd(u)+":"+d+";";break}default:r+=u+"{"+d+"}"}}}return r}var sb=/label:\s*([^\s;{]+)\s*(;|$)/g,Dt;function uA(n,e,o){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var r=!0,t="";Dt=void 0;var u=n[0];if(u==null||u.raw===void 0)r=!1,t+=Fr(o,e,u);else{var c=u;t+=c[0]}for(var m=1;m<n.length;m++)if(t+=Fr(o,e,n[m]),r){var h=u;t+=h[m]}sb.lastIndex=0;for(var d="",S;(S=sb.exec(t))!==null;)d+="-"+S[1];var p=$2(t)+d;return{name:p,styles:t,next:Dt}}var W2=function(e){return e()},Z2=Lk.useInsertionEffect?Lk.useInsertionEffect:!1,J2=Z2||W2,sA=D.createContext(typeof HTMLElement<"u"?E2({key:"css"}):null);sA.Provider;var X2=function(e){return D.forwardRef(function(o,r){var t=D.useContext(sA);return e(o,t,r)})},q2=D.createContext({}),Sm={}.hasOwnProperty,vf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Q2=function(e,o){var r={};for(var t in o)Sm.call(o,t)&&(r[t]=o[t]);return r[vf]=e,r},nB=function(e){var o=e.cache,r=e.serialized,t=e.isStringTag;return oA(o,r,t),J2(function(){return z2(o,r,t)}),null},eB=X2(function(n,e,o){var r=n.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var t=n[vf],u=[r],c="";typeof n.className=="string"?c=j2(e.registered,u,n.className):n.className!=null&&(c=n.className+" ");var m=uA(u,void 0,D.useContext(q2));c+=e.key+"-"+m.name;var h={};for(var d in n)Sm.call(n,d)&&d!=="css"&&d!==vf&&(h[d]=n[d]);return h.className=c,o&&(h.ref=o),D.createElement(D.Fragment,null,D.createElement(nB,{cache:e,serialized:m,isStringTag:typeof t=="string"}),D.createElement(t,h))}),tB=eB,dn=function(e,o){var r=arguments;if(o==null||!Sm.call(o,"css"))return D.createElement.apply(void 0,r);var t=r.length,u=new Array(t);u[0]=tB,u[1]=Q2(e,o);for(var c=2;c<t;c++)u[c]=r[c];return D.createElement.apply(null,u)};(function(n){var e;e||(e=n.JSX||(n.JSX={}))})(dn||(dn={}));function pm(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return uA(e)}function aB(){var n=pm.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function iB(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const oB=Math.min,rB=Math.max,yl=Math.round,Bs=Math.floor,vl=n=>({x:n,y:n});function uB(n){const{x:e,y:o,width:r,height:t}=n;return{width:r,height:t,top:o,left:e,right:e+r,bottom:o+t,x:e,y:o}}function Vl(){return typeof window<"u"}function lA(n){return hA(n)?(n.nodeName||"").toLowerCase():"#document"}function Qt(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function cA(n){var e;return(e=(hA(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function hA(n){return Vl()?n instanceof Node||n instanceof Qt(n).Node:!1}function sB(n){return Vl()?n instanceof Element||n instanceof Qt(n).Element:!1}function ym(n){return Vl()?n instanceof HTMLElement||n instanceof Qt(n).HTMLElement:!1}function lb(n){return!Vl()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Qt(n).ShadowRoot}const lB=new Set(["inline","contents"]);function dA(n){const{overflow:e,overflowX:o,overflowY:r,display:t}=vm(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!lB.has(t)}function cB(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const hB=new Set(["html","body","#document"]);function dB(n){return hB.has(lA(n))}function vm(n){return Qt(n).getComputedStyle(n)}function fB(n){if(lA(n)==="html")return n;const e=n.assignedSlot||n.parentNode||lb(n)&&n.host||cA(n);return lb(e)?e.host:e}function fA(n){const e=fB(n);return dB(e)?n.ownerDocument?n.ownerDocument.body:n.body:ym(e)&&dA(e)?e:fA(e)}function kl(n,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=fA(n),u=t===((r=n.ownerDocument)==null?void 0:r.body),c=Qt(t);if(u){const m=kf(c);return e.concat(c,c.visualViewport||[],dA(t)?t:[],m&&o?kl(m):[])}return e.concat(t,kl(t,[],o))}function kf(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function mB(n){const e=vm(n);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const t=ym(n),u=t?n.offsetWidth:o,c=t?n.offsetHeight:r,m=yl(o)!==u||yl(r)!==c;return m&&(o=u,r=c),{width:o,height:r,$:m}}function km(n){return sB(n)?n:n.contextElement}function cb(n){const e=km(n);if(!ym(e))return vl(1);const o=e.getBoundingClientRect(),{width:r,height:t,$:u}=mB(e);let c=(u?yl(o.width):o.width)/r,m=(u?yl(o.height):o.height)/t;return(!c||!Number.isFinite(c))&&(c=1),(!m||!Number.isFinite(m))&&(m=1),{x:c,y:m}}const gB=vl(0);function SB(n){const e=Qt(n);return!cB()||!e.visualViewport?gB:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pB(n,e,o){return!1}function hb(n,e,o,r){e===void 0&&(e=!1);const t=n.getBoundingClientRect(),u=km(n);let c=vl(1);e&&(c=cb(n));const m=pB()?SB(u):vl(0);let h=(t.left+m.x)/c.x,d=(t.top+m.y)/c.y,S=t.width/c.x,p=t.height/c.y;if(u){const y=Qt(u),k=r;let T=y,O=kf(T);for(;O&&r&&k!==T;){const A=cb(O),b=O.getBoundingClientRect(),I=vm(O),C=b.left+(O.clientLeft+parseFloat(I.paddingLeft))*A.x,K=b.top+(O.clientTop+parseFloat(I.paddingTop))*A.y;h*=A.x,d*=A.y,S*=A.x,p*=A.y,h+=C,d+=K,T=Qt(O),O=kf(T)}}return uB({width:S,height:p,x:h,y:d})}function mA(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function yB(n,e){let o=null,r;const t=cA(n);function u(){var m;clearTimeout(r),(m=o)==null||m.disconnect(),o=null}function c(m,h){m===void 0&&(m=!1),h===void 0&&(h=1),u();const d=n.getBoundingClientRect(),{left:S,top:p,width:y,height:k}=d;if(m||e(),!y||!k)return;const T=Bs(p),O=Bs(t.clientWidth-(S+y)),A=Bs(t.clientHeight-(p+k)),b=Bs(S),C={rootMargin:-T+"px "+-O+"px "+-A+"px "+-b+"px",threshold:rB(0,oB(1,h))||1};let K=!0;function w(E){const j=E[0].intersectionRatio;if(j!==h){if(!K)return c();j?c(!1,j):r=setTimeout(()=>{c(!1,1e-7)},1e3)}j===1&&!mA(d,n.getBoundingClientRect())&&c(),K=!1}try{o=new IntersectionObserver(w,{...C,root:t.ownerDocument})}catch{o=new IntersectionObserver(w,C)}o.observe(n)}return c(!0),u}function vB(n,e,o,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:u=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:h=!1}=r,d=km(n),S=t||u?[...d?kl(d):[],...kl(e)]:[];S.forEach(b=>{t&&b.addEventListener("scroll",o,{passive:!0}),u&&b.addEventListener("resize",o)});const p=d&&m?yB(d,o):null;let y=-1,k=null;c&&(k=new ResizeObserver(b=>{let[I]=b;I&&I.target===d&&k&&(k.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var C;(C=k)==null||C.observe(e)})),o()}),d&&!h&&k.observe(d),k.observe(e));let T,O=h?hb(n):null;h&&A();function A(){const b=hb(n);O&&!mA(O,b)&&o(),O=b,T=requestAnimationFrame(A)}return o(),()=>{var b;S.forEach(I=>{t&&I.removeEventListener("scroll",o),u&&I.removeEventListener("resize",o)}),p==null||p(),(b=k)==null||b.disconnect(),k=null,h&&cancelAnimationFrame(T)}}var bf=D.useLayoutEffect,kB=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],bl=function(){};function bB(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function TB(n,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),t=2;t<o;t++)r[t-2]=arguments[t];var u=[].concat(r);if(e&&n)for(var c in e)e.hasOwnProperty(c)&&e[c]&&u.push("".concat(bB(n,c)));return u.filter(function(m){return m}).map(function(m){return String(m).trim()}).join(" ")}var db=function(e){return xB(e)?e.filter(Boolean):li(e)==="object"&&e!==null?[e]:[]},gA=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=ia(e,kB);return fn({},o)},te=function(e,o,r){var t=e.cx,u=e.getStyles,c=e.getClassNames,m=e.className;return{css:u(o,e),className:t(r??{},c(o,e),m)}};function Yl(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function MB(n){return Yl(n)?window.innerHeight:n.clientHeight}function SA(n){return Yl(n)?window.pageYOffset:n.scrollTop}function Tl(n,e){if(Yl(n)){window.scrollTo(0,e);return}n.scrollTop=e}function AB(n){var e=getComputedStyle(n),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function DB(n,e,o,r){return o*((n=n/r-1)*n*n+1)+e}function Ps(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:bl,t=SA(n),u=e-t,c=10,m=0;function h(){m+=c;var d=DB(m,t,u,o);Tl(n,d),m<o?window.requestAnimationFrame(h):r(n)}h()}function fb(n,e){var o=n.getBoundingClientRect(),r=e.getBoundingClientRect(),t=e.offsetHeight/3;r.bottom+t>o.bottom?Tl(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):r.top-t<o.top&&Tl(n,Math.max(e.offsetTop-t,0))}function wB(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function mb(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function CB(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var pA=!1,OB={get passive(){return pA=!0}},Ns=typeof window<"u"?window:{};Ns.addEventListener&&Ns.removeEventListener&&(Ns.addEventListener("p",bl,OB),Ns.removeEventListener("p",bl,!1));var IB=pA;function KB(n){return n!=null}function xB(n){return Array.isArray(n)}function Es(n,e,o){return n?e:o}var RB=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),t=1;t<o;t++)r[t-1]=arguments[t];var u=Object.entries(e).filter(function(c){var m=Xt(c,1),h=m[0];return!r.includes(h)});return u.reduce(function(c,m){var h=Xt(m,2),d=h[0],S=h[1];return c[d]=S,c},{})},BB=["children","innerProps"],PB=["children","innerProps"];function NB(n){var e=n.maxHeight,o=n.menuEl,r=n.minHeight,t=n.placement,u=n.shouldScroll,c=n.isFixedPosition,m=n.controlHeight,h=AB(o),d={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return d;var S=h.getBoundingClientRect(),p=S.height,y=o.getBoundingClientRect(),k=y.bottom,T=y.height,O=y.top,A=o.offsetParent.getBoundingClientRect(),b=A.top,I=c?window.innerHeight:MB(h),C=SA(h),K=parseInt(getComputedStyle(o).marginBottom,10),w=parseInt(getComputedStyle(o).marginTop,10),E=b-w,j=I-O,z=E+C,X=p-C-O,on=k-I+C+K,rn=C+O-w,un=160;switch(t){case"auto":case"bottom":if(j>=T)return{placement:"bottom",maxHeight:e};if(X>=T&&!c)return u&&Ps(h,on,un),{placement:"bottom",maxHeight:e};if(!c&&X>=r||c&&j>=r){u&&Ps(h,on,un);var kn=c?j-K:X-K;return{placement:"bottom",maxHeight:kn}}if(t==="auto"||c){var q=e,tn=c?E:z;return tn>=r&&(q=Math.min(tn-K-m,e)),{placement:"top",maxHeight:q}}if(t==="bottom")return u&&Tl(h,on),{placement:"bottom",maxHeight:e};break;case"top":if(E>=T)return{placement:"top",maxHeight:e};if(z>=T&&!c)return u&&Ps(h,rn,un),{placement:"top",maxHeight:e};if(!c&&z>=r||c&&E>=r){var H=e;return(!c&&z>=r||c&&E>=r)&&(H=c?E-w:z-w),u&&Ps(h,rn,un),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return d}function EB(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var yA=function(e){return e==="auto"?"bottom":e},HB=function(e,o){var r,t=e.placement,u=e.theme,c=u.borderRadius,m=u.spacing,h=u.colors;return fn((r={label:"menu"},Br(r,EB(t),"100%"),Br(r,"position","absolute"),Br(r,"width","100%"),Br(r,"zIndex",1),r),o?{}:{backgroundColor:h.neutral0,borderRadius:c,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:m.menuGutter,marginTop:m.menuGutter})},vA=D.createContext(null),GB=function(e){var o=e.children,r=e.minMenuHeight,t=e.maxMenuHeight,u=e.menuPlacement,c=e.menuPosition,m=e.menuShouldScrollIntoView,h=e.theme,d=D.useContext(vA)||{},S=d.setPortalPlacement,p=D.useRef(null),y=D.useState(t),k=Xt(y,2),T=k[0],O=k[1],A=D.useState(null),b=Xt(A,2),I=b[0],C=b[1],K=h.spacing.controlHeight;return bf(function(){var w=p.current;if(w){var E=c==="fixed",j=m&&!E,z=NB({maxHeight:t,menuEl:w,minHeight:r,placement:u,shouldScroll:j,isFixedPosition:E,controlHeight:K});O(z.maxHeight),C(z.placement),S==null||S(z.placement)}},[t,u,c,m,r,S,K]),o({ref:p,placerProps:fn(fn({},e),{},{placement:I||yA(u),maxHeight:T})})},LB=function(e){var o=e.children,r=e.innerRef,t=e.innerProps;return dn("div",Sn({},te(e,"menu",{menu:!0}),{ref:r},t),o)},_B=LB,jB=function(e,o){var r=e.maxHeight,t=e.theme.spacing.baseUnit;return fn({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},zB=function(e){var o=e.children,r=e.innerProps,t=e.innerRef,u=e.isMulti;return dn("div",Sn({},te(e,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:t},r),o)},kA=function(e,o){var r=e.theme,t=r.spacing.baseUnit,u=r.colors;return fn({textAlign:"center"},o?{}:{color:u.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},$B=kA,FB=kA,UB=function(e){var o=e.children,r=o===void 0?"No options":o,t=e.innerProps,u=ia(e,BB);return dn("div",Sn({},te(fn(fn({},u),{},{children:r,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),r)},VB=function(e){var o=e.children,r=o===void 0?"Loading...":o,t=e.innerProps,u=ia(e,PB);return dn("div",Sn({},te(fn(fn({},u),{},{children:r,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),r)},YB=function(e){var o=e.rect,r=e.offset,t=e.position;return{left:o.left,position:t,top:r,width:o.width,zIndex:1}},WB=function(e){var o=e.appendTo,r=e.children,t=e.controlElement,u=e.innerProps,c=e.menuPlacement,m=e.menuPosition,h=D.useRef(null),d=D.useRef(null),S=D.useState(yA(c)),p=Xt(S,2),y=p[0],k=p[1],T=D.useMemo(function(){return{setPortalPlacement:k}},[]),O=D.useState(null),A=Xt(O,2),b=A[0],I=A[1],C=D.useCallback(function(){if(t){var j=wB(t),z=m==="fixed"?0:window.pageYOffset,X=j[y]+z;(X!==(b==null?void 0:b.offset)||j.left!==(b==null?void 0:b.rect.left)||j.width!==(b==null?void 0:b.rect.width))&&I({offset:X,rect:j})}},[t,m,y,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);bf(function(){C()},[C]);var K=D.useCallback(function(){typeof d.current=="function"&&(d.current(),d.current=null),t&&h.current&&(d.current=vB(t,h.current,C,{elementResize:"ResizeObserver"in window}))},[t,C]);bf(function(){K()},[K]);var w=D.useCallback(function(j){h.current=j,K()},[K]);if(!o&&m!=="fixed"||!b)return null;var E=dn("div",Sn({ref:w},te(fn(fn({},e),{},{offset:b.offset,position:m,rect:b.rect}),"menuPortal",{"menu-portal":!0}),u),r);return dn(vA.Provider,{value:T},o?I1.createPortal(E,o):E)},ZB=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},JB=function(e){var o=e.children,r=e.innerProps,t=e.isDisabled,u=e.isRtl;return dn("div",Sn({},te(e,"container",{"--is-disabled":t,"--is-rtl":u}),r),o)},XB=function(e,o){var r=e.theme.spacing,t=e.isMulti,u=e.hasValue,c=e.selectProps.controlShouldRenderValue;return fn({alignItems:"center",display:t&&u&&c?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},qB=function(e){var o=e.children,r=e.innerProps,t=e.isMulti,u=e.hasValue;return dn("div",Sn({},te(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":u}),r),o)},QB=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},nP=function(e){var o=e.children,r=e.innerProps;return dn("div",Sn({},te(e,"indicatorsContainer",{indicators:!0}),r),o)},gb,eP=["size"],tP=["innerProps","isRtl","size"],aP={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},bA=function(e){var o=e.size,r=ia(e,eP);return dn("svg",Sn({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:aP},r))},bm=function(e){return dn(bA,Sn({size:20},e),dn("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},TA=function(e){return dn(bA,Sn({size:20},e),dn("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},MA=function(e,o){var r=e.isFocused,t=e.theme,u=t.spacing.baseUnit,c=t.colors;return fn({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?c.neutral60:c.neutral20,padding:u*2,":hover":{color:r?c.neutral80:c.neutral40}})},iP=MA,oP=function(e){var o=e.children,r=e.innerProps;return dn("div",Sn({},te(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||dn(TA,null))},rP=MA,uP=function(e){var o=e.children,r=e.innerProps;return dn("div",Sn({},te(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||dn(bm,null))},sP=function(e,o){var r=e.isDisabled,t=e.theme,u=t.spacing.baseUnit,c=t.colors;return fn({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?c.neutral10:c.neutral20,marginBottom:u*2,marginTop:u*2})},lP=function(e){var o=e.innerProps;return dn("span",Sn({},o,te(e,"indicatorSeparator",{"indicator-separator":!0})))},cP=aB(gb||(gb=iB([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),hP=function(e,o){var r=e.isFocused,t=e.size,u=e.theme,c=u.colors,m=u.spacing.baseUnit;return fn({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?c.neutral60:c.neutral20,padding:m*2})},Ed=function(e){var o=e.delay,r=e.offset;return dn("span",{css:pm({animation:"".concat(cP," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},dP=function(e){var o=e.innerProps,r=e.isRtl,t=e.size,u=t===void 0?4:t,c=ia(e,tP);return dn("div",Sn({},te(fn(fn({},c),{},{innerProps:o,isRtl:r,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),dn(Ed,{delay:0,offset:r}),dn(Ed,{delay:160,offset:!0}),dn(Ed,{delay:320,offset:!r}))},fP=function(e,o){var r=e.isDisabled,t=e.isFocused,u=e.theme,c=u.colors,m=u.borderRadius,h=u.spacing;return fn({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:h.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?c.neutral5:c.neutral0,borderColor:r?c.neutral10:t?c.primary:c.neutral20,borderRadius:m,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(c.primary):void 0,"&:hover":{borderColor:t?c.primary:c.neutral30}})},mP=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,u=e.innerRef,c=e.innerProps,m=e.menuIsOpen;return dn("div",Sn({ref:u},te(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":t,"control--menu-is-open":m}),c,{"aria-disabled":r||void 0}),o)},gP=mP,SP=["data"],pP=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},yP=function(e){var o=e.children,r=e.cx,t=e.getStyles,u=e.getClassNames,c=e.Heading,m=e.headingProps,h=e.innerProps,d=e.label,S=e.theme,p=e.selectProps;return dn("div",Sn({},te(e,"group",{group:!0}),h),dn(c,Sn({},m,{selectProps:p,theme:S,getStyles:t,getClassNames:u,cx:r}),d),dn("div",null,o))},vP=function(e,o){var r=e.theme,t=r.colors,u=r.spacing;return fn({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},kP=function(e){var o=gA(e);o.data;var r=ia(o,SP);return dn("div",Sn({},te(e,"groupHeading",{"group-heading":!0}),r))},bP=yP,TP=["innerRef","isDisabled","isHidden","inputClassName"],MP=function(e,o){var r=e.isDisabled,t=e.value,u=e.theme,c=u.spacing,m=u.colors;return fn(fn({visibility:r?"hidden":"visible",transform:t?"translateZ(0)":""},AP),o?{}:{margin:c.baseUnit/2,paddingBottom:c.baseUnit/2,paddingTop:c.baseUnit/2,color:m.neutral80})},AA={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},AP={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":fn({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},AA)},DP=function(e){return fn({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},AA)},wP=function(e){var o=e.cx,r=e.value,t=gA(e),u=t.innerRef,c=t.isDisabled,m=t.isHidden,h=t.inputClassName,d=ia(t,TP);return dn("div",Sn({},te(e,"input",{"input-container":!0}),{"data-value":r||""}),dn("input",Sn({className:o({input:!0},h),ref:u,style:DP(m),disabled:c},d)))},CP=wP,OP=function(e,o){var r=e.theme,t=r.spacing,u=r.borderRadius,c=r.colors;return fn({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:c.neutral10,borderRadius:u/2,margin:t.baseUnit/2})},IP=function(e,o){var r=e.theme,t=r.borderRadius,u=r.colors,c=e.cropWithEllipsis;return fn({overflow:"hidden",textOverflow:c||c===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},KP=function(e,o){var r=e.theme,t=r.spacing,u=r.borderRadius,c=r.colors,m=e.isFocused;return fn({alignItems:"center",display:"flex"},o?{}:{borderRadius:u/2,backgroundColor:m?c.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:c.dangerLight,color:c.danger}})},DA=function(e){var o=e.children,r=e.innerProps;return dn("div",r,o)},xP=DA,RP=DA;function BP(n){var e=n.children,o=n.innerProps;return dn("div",Sn({role:"button"},o),e||dn(bm,{size:14}))}var PP=function(e){var o=e.children,r=e.components,t=e.data,u=e.innerProps,c=e.isDisabled,m=e.removeProps,h=e.selectProps,d=r.Container,S=r.Label,p=r.Remove;return dn(d,{data:t,innerProps:fn(fn({},te(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":c})),u),selectProps:h},dn(S,{data:t,innerProps:fn({},te(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:h},o),dn(p,{data:t,innerProps:fn(fn({},te(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},m),selectProps:h}))},NP=PP,EP=function(e,o){var r=e.isDisabled,t=e.isFocused,u=e.isSelected,c=e.theme,m=c.spacing,h=c.colors;return fn({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:u?h.primary:t?h.primary25:"transparent",color:r?h.neutral20:u?h.neutral0:"inherit",padding:"".concat(m.baseUnit*2,"px ").concat(m.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:u?h.primary:h.primary50}})},HP=function(e){var o=e.children,r=e.isDisabled,t=e.isFocused,u=e.isSelected,c=e.innerRef,m=e.innerProps;return dn("div",Sn({},te(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":t,"option--is-selected":u}),{ref:c,"aria-disabled":r},m),o)},GP=HP,LP=function(e,o){var r=e.theme,t=r.spacing,u=r.colors;return fn({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:u.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},_P=function(e){var o=e.children,r=e.innerProps;return dn("div",Sn({},te(e,"placeholder",{placeholder:!0}),r),o)},jP=_P,zP=function(e,o){var r=e.isDisabled,t=e.theme,u=t.spacing,c=t.colors;return fn({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?c.neutral40:c.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},$P=function(e){var o=e.children,r=e.isDisabled,t=e.innerProps;return dn("div",Sn({},te(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),t),o)},FP=$P,UP={ClearIndicator:uP,Control:gP,DropdownIndicator:oP,DownChevron:TA,CrossIcon:bm,Group:bP,GroupHeading:kP,IndicatorsContainer:nP,IndicatorSeparator:lP,Input:CP,LoadingIndicator:dP,Menu:_B,MenuList:zB,MenuPortal:WB,LoadingMessage:VB,NoOptionsMessage:UB,MultiValue:NP,MultiValueContainer:xP,MultiValueLabel:RP,MultiValueRemove:BP,Option:GP,Placeholder:jP,SelectContainer:JB,SingleValue:FP,ValueContainer:qB},VP=function(e){return fn(fn({},UP),e.components)},Sb=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function YP(n,e){return!!(n===e||Sb(n)&&Sb(e))}function WP(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!YP(n[o],e[o]))return!1;return!0}function ZP(n,e){e===void 0&&(e=WP);var o=null;function r(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var c=n.apply(this,t);return o={lastResult:c,lastArgs:t,lastThis:this},c}return r.clear=function(){o=null},r}var JP={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},XP=function(e){return dn("span",Sn({css:JP},e))},pb=XP,qP={guidance:function(e){var o=e.isSearchable,r=e.isMulti,t=e.tabSelectsValue,u=e.context,c=e.isInitialFocus;switch(u){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return c?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,t=r===void 0?"":r,u=e.labels,c=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return c?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,t=e.options,u=e.label,c=u===void 0?"":u,m=e.selectValue,h=e.isDisabled,d=e.isSelected,S=e.isAppleDevice,p=function(O,A){return O&&O.length?"".concat(O.indexOf(A)+1," of ").concat(O.length):""};if(o==="value"&&m)return"value ".concat(c," focused, ").concat(p(m,r),".");if(o==="menu"&&S){var y=h?" disabled":"",k="".concat(d?" selected":"").concat(y);return"".concat(c).concat(k,", ").concat(p(t,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},QP=function(e){var o=e.ariaSelection,r=e.focusedOption,t=e.focusedValue,u=e.focusableOptions,c=e.isFocused,m=e.selectValue,h=e.selectProps,d=e.id,S=e.isAppleDevice,p=h.ariaLiveMessages,y=h.getOptionLabel,k=h.inputValue,T=h.isMulti,O=h.isOptionDisabled,A=h.isSearchable,b=h.menuIsOpen,I=h.options,C=h.screenReaderStatus,K=h.tabSelectsValue,w=h.isLoading,E=h["aria-label"],j=h["aria-live"],z=D.useMemo(function(){return fn(fn({},qP),p||{})},[p]),X=D.useMemo(function(){var tn="";if(o&&z.onChange){var H=o.option,Z=o.options,an=o.removedValue,pn=o.removedValues,R=o.value,W=function(Kn){return Array.isArray(Kn)?null:Kn},Q=an||H||W(R),nn=Q?y(Q):"",ln=Z||pn||void 0,Mn=ln?ln.map(y):[],hn=fn({isDisabled:Q&&O(Q,m),label:nn,labels:Mn},o);tn=z.onChange(hn)}return tn},[o,z,O,m,y]),on=D.useMemo(function(){var tn="",H=r||t,Z=!!(r&&m&&m.includes(r));if(H&&z.onFocus){var an={focused:H,label:y(H),isDisabled:O(H,m),isSelected:Z,options:u,context:H===r?"menu":"value",selectValue:m,isAppleDevice:S};tn=z.onFocus(an)}return tn},[r,t,y,O,z,u,m,S]),rn=D.useMemo(function(){var tn="";if(b&&I.length&&!w&&z.onFilter){var H=C({count:u.length});tn=z.onFilter({inputValue:k,resultsMessage:H})}return tn},[u,k,b,z,I,C,w]),un=(o==null?void 0:o.action)==="initial-input-focus",kn=D.useMemo(function(){var tn="";if(z.guidance){var H=t?"value":b?"menu":"input";tn=z.guidance({"aria-label":E,context:H,isDisabled:r&&O(r,m),isMulti:T,isSearchable:A,tabSelectsValue:K,isInitialFocus:un})}return tn},[E,r,t,T,O,A,b,z,m,K,un]),q=dn(D.Fragment,null,dn("span",{id:"aria-selection"},X),dn("span",{id:"aria-focused"},on),dn("span",{id:"aria-results"},rn),dn("span",{id:"aria-guidance"},kn));return dn(D.Fragment,null,dn(pb,{id:d},un&&q),dn(pb,{"aria-live":j,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},c&&!un&&q))},nN=QP,Tf=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],eN=new RegExp("["+Tf.map(function(n){return n.letters}).join("")+"]","g"),wA={};for(var Hd=0;Hd<Tf.length;Hd++)for(var Gd=Tf[Hd],Ld=0;Ld<Gd.letters.length;Ld++)wA[Gd.letters[Ld]]=Gd.base;var CA=function(e){return e.replace(eN,function(o){return wA[o]})},tN=ZP(CA),yb=function(e){return e.replace(/^\s+|\s+$/g,"")},aN=function(e){return"".concat(e.label," ").concat(e.value)},iN=function(e){return function(o,r){if(o.data.__isNew__)return!0;var t=fn({ignoreCase:!0,ignoreAccents:!0,stringify:aN,trim:!0,matchFrom:"any"},e),u=t.ignoreCase,c=t.ignoreAccents,m=t.stringify,h=t.trim,d=t.matchFrom,S=h?yb(r):r,p=h?yb(m(o)):m(o);return u&&(S=S.toLowerCase(),p=p.toLowerCase()),c&&(S=tN(S),p=CA(p)),d==="start"?p.substr(0,S.length)===S:p.indexOf(S)>-1}},oN=["innerRef"];function rN(n){var e=n.innerRef,o=ia(n,oN),r=RB(o,"onExited","in","enter","exit","appear");return dn("input",Sn({ref:e},r,{css:pm({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var uN=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function sN(n){var e=n.isEnabled,o=n.onBottomArrive,r=n.onBottomLeave,t=n.onTopArrive,u=n.onTopLeave,c=D.useRef(!1),m=D.useRef(!1),h=D.useRef(0),d=D.useRef(null),S=D.useCallback(function(A,b){if(d.current!==null){var I=d.current,C=I.scrollTop,K=I.scrollHeight,w=I.clientHeight,E=d.current,j=b>0,z=K-w-C,X=!1;z>b&&c.current&&(r&&r(A),c.current=!1),j&&m.current&&(u&&u(A),m.current=!1),j&&b>z?(o&&!c.current&&o(A),E.scrollTop=K,X=!0,c.current=!0):!j&&-b>C&&(t&&!m.current&&t(A),E.scrollTop=0,X=!0,m.current=!0),X&&uN(A)}},[o,r,t,u]),p=D.useCallback(function(A){S(A,A.deltaY)},[S]),y=D.useCallback(function(A){h.current=A.changedTouches[0].clientY},[]),k=D.useCallback(function(A){var b=h.current-A.changedTouches[0].clientY;S(A,b)},[S]),T=D.useCallback(function(A){if(A){var b=IB?{passive:!1}:!1;A.addEventListener("wheel",p,b),A.addEventListener("touchstart",y,b),A.addEventListener("touchmove",k,b)}},[k,y,p]),O=D.useCallback(function(A){A&&(A.removeEventListener("wheel",p,!1),A.removeEventListener("touchstart",y,!1),A.removeEventListener("touchmove",k,!1))},[k,y,p]);return D.useEffect(function(){if(e){var A=d.current;return T(A),function(){O(A)}}},[e,T,O]),function(A){d.current=A}}var vb=["boxSizing","height","overflow","paddingRight","position"],kb={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function bb(n){n.cancelable&&n.preventDefault()}function Tb(n){n.stopPropagation()}function Mb(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function Ab(){return"ontouchstart"in window||navigator.maxTouchPoints}var Db=!!(typeof window<"u"&&window.document&&window.document.createElement),Kr=0,eo={capture:!1,passive:!1};function lN(n){var e=n.isEnabled,o=n.accountForScrollbars,r=o===void 0?!0:o,t=D.useRef({}),u=D.useRef(null),c=D.useCallback(function(h){if(Db){var d=document.body,S=d&&d.style;if(r&&vb.forEach(function(T){var O=S&&S[T];t.current[T]=O}),r&&Kr<1){var p=parseInt(t.current.paddingRight,10)||0,y=document.body?document.body.clientWidth:0,k=window.innerWidth-y+p||0;Object.keys(kb).forEach(function(T){var O=kb[T];S&&(S[T]=O)}),S&&(S.paddingRight="".concat(k,"px"))}d&&Ab()&&(d.addEventListener("touchmove",bb,eo),h&&(h.addEventListener("touchstart",Mb,eo),h.addEventListener("touchmove",Tb,eo))),Kr+=1}},[r]),m=D.useCallback(function(h){if(Db){var d=document.body,S=d&&d.style;Kr=Math.max(Kr-1,0),r&&Kr<1&&vb.forEach(function(p){var y=t.current[p];S&&(S[p]=y)}),d&&Ab()&&(d.removeEventListener("touchmove",bb,eo),h&&(h.removeEventListener("touchstart",Mb,eo),h.removeEventListener("touchmove",Tb,eo)))}},[r]);return D.useEffect(function(){if(e){var h=u.current;return c(h),function(){m(h)}}},[e,c,m]),function(h){u.current=h}}var cN=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},hN={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function dN(n){var e=n.children,o=n.lockEnabled,r=n.captureEnabled,t=r===void 0?!0:r,u=n.onBottomArrive,c=n.onBottomLeave,m=n.onTopArrive,h=n.onTopLeave,d=sN({isEnabled:t,onBottomArrive:u,onBottomLeave:c,onTopArrive:m,onTopLeave:h}),S=lN({isEnabled:o}),p=function(k){d(k),S(k)};return dn(D.Fragment,null,o&&dn("div",{onClick:cN,css:hN}),e(p))}var fN={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},mN=function(e){var o=e.name,r=e.onFocus;return dn("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:fN,value:"",onChange:function(){}})},gN=mN;function Tm(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function SN(){return Tm(/^iPhone/i)}function OA(){return Tm(/^Mac/i)}function pN(){return Tm(/^iPad/i)||OA()&&navigator.maxTouchPoints>1}function yN(){return SN()||pN()}function vN(){return OA()||yN()}var kN=function(e){return e.label},bN=function(e){return e.label},TN=function(e){return e.value},MN=function(e){return!!e.isDisabled},AN={clearIndicator:rP,container:ZB,control:fP,dropdownIndicator:iP,group:pP,groupHeading:vP,indicatorsContainer:QB,indicatorSeparator:sP,input:MP,loadingIndicator:hP,loadingMessage:FB,menu:HB,menuList:jB,menuPortal:YB,multiValue:OP,multiValueLabel:IP,multiValueRemove:KP,noOptionsMessage:$B,option:EP,placeholder:LP,singleValue:zP,valueContainer:XB},DN={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},wN=4,IA=4,CN=38,ON=IA*2,IN={baseUnit:IA,controlHeight:CN,menuGutter:ON},_d={borderRadius:wN,colors:DN,spacing:IN},KN={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:mb(),captureMenuScroll:!mb(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:iN(),formatGroupLabel:kN,getOptionLabel:bN,getOptionValue:TN,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:MN,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!CB(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function wb(n,e,o,r){var t=RA(n,e,o),u=BA(n,e,o),c=xA(n,e),m=Ml(n,e);return{type:"option",data:e,isDisabled:t,isSelected:u,label:c,value:m,index:r}}function tl(n,e){return n.options.map(function(o,r){if("options"in o){var t=o.options.map(function(c,m){return wb(n,c,e,m)}).filter(function(c){return Ob(n,c)});return t.length>0?{type:"group",data:o,options:t,index:r}:void 0}var u=wb(n,o,e,r);return Ob(n,u)?u:void 0}).filter(KB)}function KA(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,dm(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Cb(n,e){return n.reduce(function(o,r){return r.type==="group"?o.push.apply(o,dm(r.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(r.index,"-").concat(t.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function xN(n,e){return KA(tl(n,e))}function Ob(n,e){var o=n.inputValue,r=o===void 0?"":o,t=e.data,u=e.isSelected,c=e.label,m=e.value;return(!NA(n)||!u)&&PA(n,{label:c,value:m,data:t},r)}function RN(n,e){var o=n.focusedValue,r=n.selectValue,t=r.indexOf(o);if(t>-1){var u=e.indexOf(o);if(u>-1)return o;if(t<e.length)return e[t]}return null}function BN(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var jd=function(e,o){var r,t=(r=e.find(function(u){return u.data===o}))===null||r===void 0?void 0:r.id;return t||null},xA=function(e,o){return e.getOptionLabel(o)},Ml=function(e,o){return e.getOptionValue(o)};function RA(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function BA(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var r=Ml(n,e);return o.some(function(t){return Ml(n,t)===r})}function PA(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var NA=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},PN=1,EA=function(n){n2(o,n);var e=a2(o);function o(r){var t;if(q1(this,o),t=e.call(this,r),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.controlRef=null,t.getControlRef=function(h){t.controlRef=h},t.focusedOptionRef=null,t.getFocusedOptionRef=function(h){t.focusedOptionRef=h},t.menuListRef=null,t.getMenuListRef=function(h){t.menuListRef=h},t.inputRef=null,t.getInputRef=function(h){t.inputRef=h},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(h,d){var S=t.props,p=S.onChange,y=S.name;d.name=y,t.ariaOnChange(h,d),p(h,d)},t.setValue=function(h,d,S){var p=t.props,y=p.closeMenuOnSelect,k=p.isMulti,T=p.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:T}),y&&(t.setState({inputIsHiddenAfterUpdate:!k}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(h,{action:d,option:S})},t.selectOption=function(h){var d=t.props,S=d.blurInputOnSelect,p=d.isMulti,y=d.name,k=t.state.selectValue,T=p&&t.isOptionSelected(h,k),O=t.isOptionDisabled(h,k);if(T){var A=t.getOptionValue(h);t.setValue(k.filter(function(b){return t.getOptionValue(b)!==A}),"deselect-option",h)}else if(!O)p?t.setValue([].concat(dm(k),[h]),"select-option",h):t.setValue(h,"select-option");else{t.ariaOnChange(h,{action:"select-option",option:h,name:y});return}S&&t.blurInput()},t.removeValue=function(h){var d=t.props.isMulti,S=t.state.selectValue,p=t.getOptionValue(h),y=S.filter(function(T){return t.getOptionValue(T)!==p}),k=Es(d,y,y[0]||null);t.onChange(k,{action:"remove-value",removedValue:h}),t.focusInput()},t.clearValue=function(){var h=t.state.selectValue;t.onChange(Es(t.props.isMulti,[],null),{action:"clear",removedValues:h})},t.popValue=function(){var h=t.props.isMulti,d=t.state.selectValue,S=d[d.length-1],p=d.slice(0,d.length-1),y=Es(h,p,p[0]||null);S&&t.onChange(y,{action:"pop-value",removedValue:S})},t.getFocusedOptionId=function(h){return jd(t.state.focusableOptionsWithIds,h)},t.getFocusableOptionsWithIds=function(){return Cb(tl(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var h=arguments.length,d=new Array(h),S=0;S<h;S++)d[S]=arguments[S];return TB.apply(void 0,[t.props.classNamePrefix].concat(d))},t.getOptionLabel=function(h){return xA(t.props,h)},t.getOptionValue=function(h){return Ml(t.props,h)},t.getStyles=function(h,d){var S=t.props.unstyled,p=AN[h](d,S);p.boxSizing="border-box";var y=t.props.styles[h];return y?y(p,d):p},t.getClassNames=function(h,d){var S,p;return(S=(p=t.props.classNames)[h])===null||S===void 0?void 0:S.call(p,d)},t.getElementId=function(h){return"".concat(t.state.instancePrefix,"-").concat(h)},t.getComponents=function(){return VP(t.props)},t.buildCategorizedOptions=function(){return tl(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return KA(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(h,d){t.setState({ariaSelection:fn({value:h},d)})},t.onMenuMouseDown=function(h){h.button===0&&(h.stopPropagation(),h.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(h){t.blockOptionHover=!1},t.onControlMouseDown=function(h){if(!h.defaultPrevented){var d=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?h.target.tagName!=="INPUT"&&h.target.tagName!=="TEXTAREA"&&t.onMenuClose():d&&t.openMenu("first"):(d&&(t.openAfterFocus=!0),t.focusInput()),h.target.tagName!=="INPUT"&&h.target.tagName!=="TEXTAREA"&&h.preventDefault()}},t.onDropdownIndicatorMouseDown=function(h){if(!(h&&h.type==="mousedown"&&h.button!==0)&&!t.props.isDisabled){var d=t.props,S=d.isMulti,p=d.menuIsOpen;t.focusInput(),p?(t.setState({inputIsHiddenAfterUpdate:!S}),t.onMenuClose()):t.openMenu("first"),h.preventDefault()}},t.onClearIndicatorMouseDown=function(h){h&&h.type==="mousedown"&&h.button!==0||(t.clearValue(),h.preventDefault(),t.openAfterFocus=!1,h.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(h){typeof t.props.closeMenuOnScroll=="boolean"?h.target instanceof HTMLElement&&Yl(h.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(h)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(h){var d=h.touches,S=d&&d.item(0);S&&(t.initialTouchX=S.clientX,t.initialTouchY=S.clientY,t.userIsDragging=!1)},t.onTouchMove=function(h){var d=h.touches,S=d&&d.item(0);if(S){var p=Math.abs(S.clientX-t.initialTouchX),y=Math.abs(S.clientY-t.initialTouchY),k=5;t.userIsDragging=p>k||y>k}},t.onTouchEnd=function(h){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(h.target)&&t.menuListRef&&!t.menuListRef.contains(h.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(h){t.userIsDragging||t.onControlMouseDown(h)},t.onClearIndicatorTouchEnd=function(h){t.userIsDragging||t.onClearIndicatorMouseDown(h)},t.onDropdownIndicatorTouchEnd=function(h){t.userIsDragging||t.onDropdownIndicatorMouseDown(h)},t.handleInputChange=function(h){var d=t.props.inputValue,S=h.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(S,{action:"input-change",prevInputValue:d}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(h){t.props.onFocus&&t.props.onFocus(h),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(h){var d=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(h),t.onInputChange("",{action:"input-blur",prevInputValue:d}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(h){if(!(t.blockOptionHover||t.state.focusedOption===h)){var d=t.getFocusableOptions(),S=d.indexOf(h);t.setState({focusedOption:h,focusedOptionId:S>-1?t.getFocusedOptionId(h):null})}},t.shouldHideSelectedOptions=function(){return NA(t.props)},t.onValueInputFocus=function(h){h.preventDefault(),h.stopPropagation(),t.focus()},t.onKeyDown=function(h){var d=t.props,S=d.isMulti,p=d.backspaceRemovesValue,y=d.escapeClearsValue,k=d.inputValue,T=d.isClearable,O=d.isDisabled,A=d.menuIsOpen,b=d.onKeyDown,I=d.tabSelectsValue,C=d.openMenuOnFocus,K=t.state,w=K.focusedOption,E=K.focusedValue,j=K.selectValue;if(!O&&!(typeof b=="function"&&(b(h),h.defaultPrevented))){switch(t.blockOptionHover=!0,h.key){case"ArrowLeft":if(!S||k)return;t.focusValue("previous");break;case"ArrowRight":if(!S||k)return;t.focusValue("next");break;case"Delete":case"Backspace":if(k)return;if(E)t.removeValue(E);else{if(!p)return;S?t.popValue():T&&t.clearValue()}break;case"Tab":if(t.isComposing||h.shiftKey||!A||!I||!w||C&&t.isOptionSelected(w,j))return;t.selectOption(w);break;case"Enter":if(h.keyCode===229)break;if(A){if(!w||t.isComposing)return;t.selectOption(w);break}return;case"Escape":A?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:k}),t.onMenuClose()):T&&y&&t.clearValue();break;case" ":if(k)return;if(!A){t.openMenu("first");break}if(!w)return;t.selectOption(w);break;case"ArrowUp":A?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":A?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!A)return;t.focusOption("pageup");break;case"PageDown":if(!A)return;t.focusOption("pagedown");break;case"Home":if(!A)return;t.focusOption("first");break;case"End":if(!A)return;t.focusOption("last");break;default:return}h.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++PN),t.state.selectValue=db(r.value),r.menuIsOpen&&t.state.selectValue.length){var u=t.getFocusableOptionsWithIds(),c=t.buildFocusableOptions(),m=c.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=u,t.state.focusedOption=c[m],t.state.focusedOptionId=jd(u,c[m])}return t}return Q1(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&fb(this.menuListRef,this.focusedOptionRef),vN()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(t){var u=this.props,c=u.isDisabled,m=u.menuIsOpen,h=this.state.isFocused;(h&&!c&&t.isDisabled||h&&m&&!t.menuIsOpen)&&this.focusInput(),h&&c&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!h&&!c&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(fb(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,u){this.props.onInputChange(t,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var u=this,c=this.state,m=c.selectValue,h=c.isFocused,d=this.buildFocusableOptions(),S=t==="first"?0:d.length-1;if(!this.props.isMulti){var p=d.indexOf(m[0]);p>-1&&(S=p)}this.scrollToFocusedOptionOnUpdate=!(h&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:d[S],focusedOptionId:this.getFocusedOptionId(d[S])},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(t){var u=this.state,c=u.selectValue,m=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var h=c.indexOf(m);m||(h=-1);var d=c.length-1,S=-1;if(c.length){switch(t){case"previous":h===0?S=0:h===-1?S=d:S=h-1;break;case"next":h>-1&&h<d&&(S=h+1);break}this.setState({inputIsHidden:S!==-1,focusedValue:c[S]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,c=this.state.focusedOption,m=this.getFocusableOptions();if(m.length){var h=0,d=m.indexOf(c);c||(d=-1),t==="up"?h=d>0?d-1:m.length-1:t==="down"?h=(d+1)%m.length:t==="pageup"?(h=d-u,h<0&&(h=0)):t==="pagedown"?(h=d+u,h>m.length-1&&(h=m.length-1)):t==="last"&&(h=m.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:m[h],focusedValue:null,focusedOptionId:this.getFocusedOptionId(m[h])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(_d):fn(fn({},_d),this.props.theme):_d}},{key:"getCommonProps",value:function(){var t=this.clearValue,u=this.cx,c=this.getStyles,m=this.getClassNames,h=this.getValue,d=this.selectOption,S=this.setValue,p=this.props,y=p.isMulti,k=p.isRtl,T=p.options,O=this.hasValue();return{clearValue:t,cx:u,getStyles:c,getClassNames:m,getValue:h,hasValue:O,isMulti:y,isRtl:k,options:T,selectOption:d,selectProps:p,setValue:S,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,u=t.isClearable,c=t.isMulti;return u===void 0?c:u}},{key:"isOptionDisabled",value:function(t,u){return RA(this.props,t,u)}},{key:"isOptionSelected",value:function(t,u){return BA(this.props,t,u)}},{key:"filterOption",value:function(t,u){return PA(this.props,t,u)}},{key:"formatOptionLabel",value:function(t,u){if(typeof this.props.formatOptionLabel=="function"){var c=this.props.inputValue,m=this.state.selectValue;return this.props.formatOptionLabel(t,{context:u,inputValue:c,selectValue:m})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,u=t.isDisabled,c=t.isSearchable,m=t.inputId,h=t.inputValue,d=t.tabIndex,S=t.form,p=t.menuIsOpen,y=t.required,k=this.getComponents(),T=k.Input,O=this.state,A=O.inputIsHidden,b=O.ariaSelection,I=this.commonProps,C=m||this.getElementId("input"),K=fn(fn(fn({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":y,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!c&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return c?D.createElement(T,Sn({},I,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:u,isHidden:A,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:d,form:S,type:"text",value:h},K)):D.createElement(rN,Sn({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:bl,onFocus:this.onInputFocus,disabled:u,tabIndex:d,inputMode:"none",form:S,value:""},K))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,u=this.getComponents(),c=u.MultiValue,m=u.MultiValueContainer,h=u.MultiValueLabel,d=u.MultiValueRemove,S=u.SingleValue,p=u.Placeholder,y=this.commonProps,k=this.props,T=k.controlShouldRenderValue,O=k.isDisabled,A=k.isMulti,b=k.inputValue,I=k.placeholder,C=this.state,K=C.selectValue,w=C.focusedValue,E=C.isFocused;if(!this.hasValue()||!T)return b?null:D.createElement(p,Sn({},y,{key:"placeholder",isDisabled:O,isFocused:E,innerProps:{id:this.getElementId("placeholder")}}),I);if(A)return K.map(function(z,X){var on=z===w,rn="".concat(t.getOptionLabel(z),"-").concat(t.getOptionValue(z));return D.createElement(c,Sn({},y,{components:{Container:m,Label:h,Remove:d},isFocused:on,isDisabled:O,key:rn,index:X,removeProps:{onClick:function(){return t.removeValue(z)},onTouchEnd:function(){return t.removeValue(z)},onMouseDown:function(kn){kn.preventDefault()}},data:z}),t.formatOptionLabel(z,"value"))});if(b)return null;var j=K[0];return D.createElement(S,Sn({},y,{data:j,isDisabled:O}),this.formatOptionLabel(j,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),u=t.ClearIndicator,c=this.commonProps,m=this.props,h=m.isDisabled,d=m.isLoading,S=this.state.isFocused;if(!this.isClearable()||!u||h||!this.hasValue()||d)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return D.createElement(u,Sn({},c,{innerProps:p,isFocused:S}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),u=t.LoadingIndicator,c=this.commonProps,m=this.props,h=m.isDisabled,d=m.isLoading,S=this.state.isFocused;if(!u||!d)return null;var p={"aria-hidden":"true"};return D.createElement(u,Sn({},c,{innerProps:p,isDisabled:h,isFocused:S}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),u=t.DropdownIndicator,c=t.IndicatorSeparator;if(!u||!c)return null;var m=this.commonProps,h=this.props.isDisabled,d=this.state.isFocused;return D.createElement(c,Sn({},m,{isDisabled:h,isFocused:d}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),u=t.DropdownIndicator;if(!u)return null;var c=this.commonProps,m=this.props.isDisabled,h=this.state.isFocused,d={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return D.createElement(u,Sn({},c,{innerProps:d,isDisabled:m,isFocused:h}))}},{key:"renderMenu",value:function(){var t=this,u=this.getComponents(),c=u.Group,m=u.GroupHeading,h=u.Menu,d=u.MenuList,S=u.MenuPortal,p=u.LoadingMessage,y=u.NoOptionsMessage,k=u.Option,T=this.commonProps,O=this.state.focusedOption,A=this.props,b=A.captureMenuScroll,I=A.inputValue,C=A.isLoading,K=A.loadingMessage,w=A.minMenuHeight,E=A.maxMenuHeight,j=A.menuIsOpen,z=A.menuPlacement,X=A.menuPosition,on=A.menuPortalTarget,rn=A.menuShouldBlockScroll,un=A.menuShouldScrollIntoView,kn=A.noOptionsMessage,q=A.onMenuScrollToTop,tn=A.onMenuScrollToBottom;if(!j)return null;var H=function(nn,ln){var Mn=nn.type,hn=nn.data,qn=nn.isDisabled,Kn=nn.isSelected,Le=nn.label,Co=nn.value,Ea=O===hn,mi=qn?void 0:function(){return t.onOptionHover(hn)},Oo=qn?void 0:function(){return t.selectOption(hn)},gi="".concat(t.getElementId("option"),"-").concat(ln),fc={id:gi,onClick:Oo,onMouseMove:mi,onMouseOver:mi,tabIndex:-1,role:"option","aria-selected":t.state.isAppleDevice?void 0:Kn};return D.createElement(k,Sn({},T,{innerProps:fc,data:hn,isDisabled:qn,isSelected:Kn,key:gi,label:Le,type:Mn,value:Co,isFocused:Ea,innerRef:Ea?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(nn.data,"menu"))},Z;if(this.hasOptions())Z=this.getCategorizedOptions().map(function(Q){if(Q.type==="group"){var nn=Q.data,ln=Q.options,Mn=Q.index,hn="".concat(t.getElementId("group"),"-").concat(Mn),qn="".concat(hn,"-heading");return D.createElement(c,Sn({},T,{key:hn,data:nn,options:ln,Heading:m,headingProps:{id:qn,data:Q.data},label:t.formatGroupLabel(Q.data)}),Q.options.map(function(Kn){return H(Kn,"".concat(Mn,"-").concat(Kn.index))}))}else if(Q.type==="option")return H(Q,"".concat(Q.index))});else if(C){var an=K({inputValue:I});if(an===null)return null;Z=D.createElement(p,T,an)}else{var pn=kn({inputValue:I});if(pn===null)return null;Z=D.createElement(y,T,pn)}var R={minMenuHeight:w,maxMenuHeight:E,menuPlacement:z,menuPosition:X,menuShouldScrollIntoView:un},W=D.createElement(GB,Sn({},T,R),function(Q){var nn=Q.ref,ln=Q.placerProps,Mn=ln.placement,hn=ln.maxHeight;return D.createElement(h,Sn({},T,R,{innerRef:nn,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:C,placement:Mn}),D.createElement(dN,{captureEnabled:b,onTopArrive:q,onBottomArrive:tn,lockEnabled:rn},function(qn){return D.createElement(d,Sn({},T,{innerRef:function(Le){t.getMenuListRef(Le),qn(Le)},innerProps:{role:"listbox","aria-multiselectable":T.isMulti,id:t.getElementId("listbox")},isLoading:C,maxHeight:hn,focusedOption:O}),Z)}))});return on||X==="fixed"?D.createElement(S,Sn({},T,{appendTo:on,controlElement:this.controlRef,menuPlacement:z,menuPosition:X}),W):W}},{key:"renderFormField",value:function(){var t=this,u=this.props,c=u.delimiter,m=u.isDisabled,h=u.isMulti,d=u.name,S=u.required,p=this.state.selectValue;if(S&&!this.hasValue()&&!m)return D.createElement(gN,{name:d,onFocus:this.onValueInputFocus});if(!(!d||m))if(h)if(c){var y=p.map(function(O){return t.getOptionValue(O)}).join(c);return D.createElement("input",{name:d,type:"hidden",value:y})}else{var k=p.length>0?p.map(function(O,A){return D.createElement("input",{key:"i-".concat(A),name:d,type:"hidden",value:t.getOptionValue(O)})}):D.createElement("input",{name:d,type:"hidden",value:""});return D.createElement("div",null,k)}else{var T=p[0]?this.getOptionValue(p[0]):"";return D.createElement("input",{name:d,type:"hidden",value:T})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,u=this.state,c=u.ariaSelection,m=u.focusedOption,h=u.focusedValue,d=u.isFocused,S=u.selectValue,p=this.getFocusableOptions();return D.createElement(nN,Sn({},t,{id:this.getElementId("live-region"),ariaSelection:c,focusedOption:m,focusedValue:h,isFocused:d,selectValue:S,focusableOptions:p,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),u=t.Control,c=t.IndicatorsContainer,m=t.SelectContainer,h=t.ValueContainer,d=this.props,S=d.className,p=d.id,y=d.isDisabled,k=d.menuIsOpen,T=this.state.isFocused,O=this.commonProps=this.getCommonProps();return D.createElement(m,Sn({},O,{className:S,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:y,isFocused:T}),this.renderLiveRegion(),D.createElement(u,Sn({},O,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:y,isFocused:T,menuIsOpen:k}),D.createElement(h,Sn({},O,{isDisabled:y}),this.renderPlaceholderOrValue(),this.renderInput()),D.createElement(c,Sn({},O,{isDisabled:y}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,u){var c=u.prevProps,m=u.clearFocusValueOnUpdate,h=u.inputIsHiddenAfterUpdate,d=u.ariaSelection,S=u.isFocused,p=u.prevWasFocused,y=u.instancePrefix,k=t.options,T=t.value,O=t.menuIsOpen,A=t.inputValue,b=t.isMulti,I=db(T),C={};if(c&&(T!==c.value||k!==c.options||O!==c.menuIsOpen||A!==c.inputValue)){var K=O?xN(t,I):[],w=O?Cb(tl(t,I),"".concat(y,"-option")):[],E=m?RN(u,I):null,j=BN(u,K),z=jd(w,j);C={selectValue:I,focusedOption:j,focusedOptionId:z,focusableOptionsWithIds:w,focusedValue:E,clearFocusValueOnUpdate:!1}}var X=h!=null&&t!==c?{inputIsHidden:h,inputIsHiddenAfterUpdate:void 0}:{},on=d,rn=S&&p;return S&&!rn&&(on={value:Es(b,I,I[0]||null),options:I,action:"initial-input-focus"},rn=!p),(d==null?void 0:d.action)==="initial-input-focus"&&(on=null),fn(fn(fn({},C),X),{},{prevProps:t,ariaSelection:on,prevWasFocused:rn})}}]),o}(D.Component);EA.defaultProps=KN;var NN=D.forwardRef(function(n,e){var o=X1(n);return D.createElement(EA,Sn({ref:e},o))}),EN=NN;function HN(){const n=ru(),e=t=>{if(!t)return;const u=t.value;n.updateFilter(u)},o=hm.map(t=>({value:t,label:t})),r={control:(t,u)=>({...t,backgroundColor:"white",borderRadius:"0.75rem",borderColor:u.isFocused?"#22c55e":"#d1d5db",boxShadow:u.isFocused?"0 0 0 2px rgba(34,197,94,0.4)":"none",padding:"0.25rem 0.5rem",minHeight:"2.5rem","&:hover":{borderColor:"#22c55e"}}),container:t=>({...t,width:"100%"}),valueContainer:t=>({...t,whiteSpace:"normal",padding:"0 0.5rem"}),singleValue:t=>({...t,whiteSpace:"normal",color:"#111827",fontWeight:500,textAlign:"center",fontSize:"minmax(25px, 1.5rem)"}),placeholder:t=>({...t,color:"#9ca3af"}),option:(t,u)=>({...t,whiteSpace:"normal",wordWrap:"break-word",borderRadius:"0.5rem",padding:"0.5rem 0.75rem",backgroundColor:u.isSelected?"#22c55e":u.isFocused?"#f0fdf4":"white",color:u.isSelected?"white":"#111827",cursor:"pointer","&:active":{backgroundColor:"#22c55e",color:"white"}}),menu:t=>({...t,borderRadius:"0.75rem",marginTop:"0.25rem",boxShadow:"0 8px 16px rgba(0,0,0,0.08)",width:"100%"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(t,u)=>({...t,color:u.isFocused?"#22c55e":"#6b7280","&:hover":{color:"#22c55e"}})};return P.jsx("div",{className:"Filter flex justify-center w-[50vw] md:w-[35vw]",children:P.jsx(EN,{className:"SelectOptions",value:{value:n.filter,label:n.filter},options:o,styles:r,isSearchable:!1,onChange:e})})}const GN=`'Tis Time for "Torture," Princess
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
`,LN=`Cowboy Bebop
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

`,HA=Object.freeze({status:"aborted"});function L(n,e,o){function r(m,h){var d;Object.defineProperty(m,"_zod",{value:m._zod??{},enumerable:!1}),(d=m._zod).traits??(d.traits=new Set),m._zod.traits.add(n),e(m,h);for(const S in c.prototype)S in m||Object.defineProperty(m,S,{value:c.prototype[S].bind(m)});m._zod.constr=c,m._zod.def=h}const t=(o==null?void 0:o.Parent)??Object;class u extends t{}Object.defineProperty(u,"name",{value:n});function c(m){var h;const d=o!=null&&o.Parent?new u:this;r(d,m),(h=d._zod).deferred??(h.deferred=[]);for(const S of d._zod.deferred)S();return d}return Object.defineProperty(c,"init",{value:r}),Object.defineProperty(c,Symbol.hasInstance,{value:m=>{var h,d;return o!=null&&o.Parent&&m instanceof o.Parent?!0:(d=(h=m==null?void 0:m._zod)==null?void 0:h.traits)==null?void 0:d.has(n)}}),Object.defineProperty(c,"name",{value:n}),c}const GA=Symbol("zod_brand");class mo extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const Al={};function xe(n){return n&&Object.assign(Al,n),Al}function _N(n){return n}function jN(n){return n}function zN(n){}function $N(n){throw new Error}function FN(n){}function Mm(n){const e=Object.values(n).filter(r=>typeof r=="number");return Object.entries(n).filter(([r,t])=>e.indexOf(+r)===-1).map(([r,t])=>t)}function en(n,e="|"){return n.map(o=>Tn(o)).join(e)}function Dl(n,e){return typeof e=="bigint"?e.toString():e}function Wl(n){return{get value(){{const e=n();return Object.defineProperty(this,"value",{value:e}),e}}}}function di(n){return n==null}function Zl(n){const e=n.startsWith("^")?1:0,o=n.endsWith("$")?n.length-1:n.length;return n.slice(e,o)}function LA(n,e){const o=(n.toString().split(".")[1]||"").length,r=e.toString();let t=(r.split(".")[1]||"").length;if(t===0&&/\d?e-\d?/.test(r)){const h=r.match(/\d?e-(\d?)/);h!=null&&h[1]&&(t=Number.parseInt(h[1]))}const u=o>t?o:t,c=Number.parseInt(n.toFixed(u).replace(".","")),m=Number.parseInt(e.toFixed(u).replace(".",""));return c%m/10**u}const Ib=Symbol("evaluating");function Rn(n,e,o){let r;Object.defineProperty(n,e,{get(){if(r!==Ib)return r===void 0&&(r=Ib,r=o()),r},set(t){Object.defineProperty(n,e,{value:t})},configurable:!0})}function Jl(n){return Object.create(Object.getPrototypeOf(n),Object.getOwnPropertyDescriptors(n))}function Bt(n,e,o){Object.defineProperty(n,e,{value:o,writable:!0,enumerable:!0,configurable:!0})}function Pa(...n){const e={};for(const o of n){const r=Object.getOwnPropertyDescriptors(o);Object.assign(e,r)}return Object.defineProperties({},e)}function UN(n){return Pa(n._zod.def)}function VN(n,e){return e?e.reduce((o,r)=>o==null?void 0:o[r],n):n}function YN(n){const e=Object.keys(n),o=e.map(r=>n[r]);return Promise.all(o).then(r=>{const t={};for(let u=0;u<e.length;u++)t[e[u]]=r[u];return t})}function WN(n=10){const e="abcdefghijklmnopqrstuvwxyz";let o="";for(let r=0;r<n;r++)o+=e[Math.floor(Math.random()*e.length)];return o}function Mf(n){return JSON.stringify(n)}const Am="captureStackTrace"in Error?Error.captureStackTrace:(...n)=>{};function Ur(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}const _A=Wl(()=>{var n;if(typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)!=null&&n.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Vr(n){if(Ur(n)===!1)return!1;const e=n.constructor;if(e===void 0)return!0;const o=e.prototype;return!(Ur(o)===!1||Object.prototype.hasOwnProperty.call(o,"isPrototypeOf")===!1)}function ZN(n){let e=0;for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&e++;return e}const JN=n=>{const e=typeof n;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(n)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(n)?"array":n===null?"null":n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?"promise":typeof Map<"u"&&n instanceof Map?"map":typeof Set<"u"&&n instanceof Set?"set":typeof Date<"u"&&n instanceof Date?"date":typeof File<"u"&&n instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},wl=new Set(["string","number","symbol"]),jA=new Set(["string","number","bigint","boolean","symbol","undefined"]);function xa(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pt(n,e,o){const r=new n._zod.constr(e??n._zod.def);return(!e||o!=null&&o.parent)&&(r._zod.parent=n),r}function J(n){const e=n;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function XN(n){let e;return new Proxy({},{get(o,r,t){return e??(e=n()),Reflect.get(e,r,t)},set(o,r,t,u){return e??(e=n()),Reflect.set(e,r,t,u)},has(o,r){return e??(e=n()),Reflect.has(e,r)},deleteProperty(o,r){return e??(e=n()),Reflect.deleteProperty(e,r)},ownKeys(o){return e??(e=n()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(o,r){return e??(e=n()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(o,r,t){return e??(e=n()),Reflect.defineProperty(e,r,t)}})}function Tn(n){return typeof n=="bigint"?n.toString()+"n":typeof n=="string"?`"${n}"`:`${n}`}function zA(n){return Object.keys(n).filter(e=>n[e]._zod.optin==="optional"&&n[e]._zod.optout==="optional")}const $A={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},FA={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function UA(n,e){const o=n._zod.def,r=Pa(n._zod.def,{get shape(){const t={};for(const u in e){if(!(u in o.shape))throw new Error(`Unrecognized key: "${u}"`);e[u]&&(t[u]=o.shape[u])}return Bt(this,"shape",t),t},checks:[]});return pt(n,r)}function VA(n,e){const o=n._zod.def,r=Pa(n._zod.def,{get shape(){const t={...n._zod.def.shape};for(const u in e){if(!(u in o.shape))throw new Error(`Unrecognized key: "${u}"`);e[u]&&delete t[u]}return Bt(this,"shape",t),t},checks:[]});return pt(n,r)}function YA(n,e){if(!Vr(e))throw new Error("Invalid input to extend: expected a plain object");const o=Pa(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e};return Bt(this,"shape",r),r},checks:[]});return pt(n,o)}function WA(n,e){const o=Pa(n._zod.def,{get shape(){const r={...n._zod.def.shape,...e._zod.def.shape};return Bt(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:[]});return pt(n,o)}function ZA(n,e,o){const r=Pa(e._zod.def,{get shape(){const t=e._zod.def.shape,u={...t};if(o)for(const c in o){if(!(c in t))throw new Error(`Unrecognized key: "${c}"`);o[c]&&(u[c]=n?new n({type:"optional",innerType:t[c]}):t[c])}else for(const c in t)u[c]=n?new n({type:"optional",innerType:t[c]}):t[c];return Bt(this,"shape",u),u},checks:[]});return pt(e,r)}function JA(n,e,o){const r=Pa(e._zod.def,{get shape(){const t=e._zod.def.shape,u={...t};if(o)for(const c in o){if(!(c in u))throw new Error(`Unrecognized key: "${c}"`);o[c]&&(u[c]=new n({type:"nonoptional",innerType:t[c]}))}else for(const c in t)u[c]=new n({type:"nonoptional",innerType:t[c]});return Bt(this,"shape",u),u},checks:[]});return pt(e,r)}function co(n,e=0){var o;for(let r=e;r<n.issues.length;r++)if(((o=n.issues[r])==null?void 0:o.continue)!==!0)return!0;return!1}function mt(n,e){return e.map(o=>{var r;return(r=o).path??(r.path=[]),o.path.unshift(n),o})}function Pr(n){return typeof n=="string"?n:n==null?void 0:n.message}function St(n,e,o){var t,u,c,m,h,d;const r={...n,path:n.path??[]};if(!n.message){const S=Pr((c=(u=(t=n.inst)==null?void 0:t._zod.def)==null?void 0:u.error)==null?void 0:c.call(u,n))??Pr((m=e==null?void 0:e.error)==null?void 0:m.call(e,n))??Pr((h=o.customError)==null?void 0:h.call(o,n))??Pr((d=o.localeError)==null?void 0:d.call(o,n))??"Invalid input";r.message=S}return delete r.inst,delete r.continue,e!=null&&e.reportInput||delete r.input,r}function Xl(n){return n instanceof Set?"set":n instanceof Map?"map":n instanceof File?"file":"unknown"}function ql(n){return Array.isArray(n)?"array":typeof n=="string"?"string":"unknown"}function go(...n){const[e,o,r]=n;return typeof e=="string"?{message:e,code:"custom",input:o,inst:r}:{...e}}function qN(n){return Object.entries(n).filter(([e,o])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}class QN{constructor(...e){}}const nE=Object.freeze(Object.defineProperty({__proto__:null,BIGINT_FORMAT_RANGES:FA,Class:QN,NUMBER_FORMAT_RANGES:$A,aborted:co,allowsEval:_A,assert:FN,assertEqual:_N,assertIs:zN,assertNever:$N,assertNotEqual:jN,assignProp:Bt,cached:Wl,captureStackTrace:Am,cleanEnum:qN,cleanRegex:Zl,clone:pt,cloneDef:UN,createTransparentProxy:XN,defineLazy:Rn,esc:Mf,escapeRegex:xa,extend:YA,finalizeIssue:St,floatSafeRemainder:LA,getElementAtPath:VN,getEnumValues:Mm,getLengthableOrigin:ql,getParsedType:JN,getSizableOrigin:Xl,isObject:Ur,isPlainObject:Vr,issue:go,joinValues:en,jsonStringifyReplacer:Dl,merge:WA,mergeDefs:Pa,normalizeParams:J,nullish:di,numKeys:ZN,objectClone:Jl,omit:VA,optionalKeys:zA,partial:ZA,pick:UA,prefixIssues:mt,primitiveTypes:jA,promiseAllObject:YN,propertyKeyTypes:wl,randomString:WN,required:JA,stringifyPrimitive:Tn,unwrapMessage:Pr},Symbol.toStringTag,{value:"Module"})),XA=(n,e)=>{n.name="$ZodError",Object.defineProperty(n,"_zod",{value:n._zod,enumerable:!1}),Object.defineProperty(n,"issues",{value:e,enumerable:!1}),n.message=JSON.stringify(e,Dl,2),Object.defineProperty(n,"toString",{value:()=>n.message,enumerable:!1})},Dm=L("$ZodError",XA),lu=L("$ZodError",XA,{Parent:Error});function wm(n,e=o=>o.message){const o={},r=[];for(const t of n.issues)t.path.length>0?(o[t.path[0]]=o[t.path[0]]||[],o[t.path[0]].push(e(t))):r.push(e(t));return{formErrors:r,fieldErrors:o}}function Cm(n,e){const o=e||function(u){return u.message},r={_errors:[]},t=u=>{for(const c of u.issues)if(c.code==="invalid_union"&&c.errors.length)c.errors.map(m=>t({issues:m}));else if(c.code==="invalid_key")t({issues:c.issues});else if(c.code==="invalid_element")t({issues:c.issues});else if(c.path.length===0)r._errors.push(o(c));else{let m=r,h=0;for(;h<c.path.length;){const d=c.path[h];h===c.path.length-1?(m[d]=m[d]||{_errors:[]},m[d]._errors.push(o(c))):m[d]=m[d]||{_errors:[]},m=m[d],h++}}};return t(n),r}function qA(n,e){const o=e||function(u){return u.message},r={errors:[]},t=(u,c=[])=>{var m,h;for(const d of u.issues)if(d.code==="invalid_union"&&d.errors.length)d.errors.map(S=>t({issues:S},d.path));else if(d.code==="invalid_key")t({issues:d.issues},d.path);else if(d.code==="invalid_element")t({issues:d.issues},d.path);else{const S=[...c,...d.path];if(S.length===0){r.errors.push(o(d));continue}let p=r,y=0;for(;y<S.length;){const k=S[y],T=y===S.length-1;typeof k=="string"?(p.properties??(p.properties={}),(m=p.properties)[k]??(m[k]={errors:[]}),p=p.properties[k]):(p.items??(p.items=[]),(h=p.items)[k]??(h[k]={errors:[]}),p=p.items[k]),T&&p.errors.push(o(d)),y++}}};return t(n),r}function QA(n){const e=[],o=n.map(r=>typeof r=="object"?r.key:r);for(const r of o)typeof r=="number"?e.push(`[${r}]`):typeof r=="symbol"?e.push(`[${JSON.stringify(String(r))}]`):/[^\w$]/.test(r)?e.push(`[${JSON.stringify(r)}]`):(e.length&&e.push("."),e.push(r));return e.join("")}function n0(n){var r;const e=[],o=[...n.issues].sort((t,u)=>(t.path??[]).length-(u.path??[]).length);for(const t of o)e.push(`✖ ${t.message}`),(r=t.path)!=null&&r.length&&e.push(`  → at ${QA(t.path)}`);return e.join(`
`)}const Om=n=>(e,o,r,t)=>{const u=r?Object.assign(r,{async:!1}):{async:!1},c=e._zod.run({value:o,issues:[]},u);if(c instanceof Promise)throw new mo;if(c.issues.length){const m=new((t==null?void 0:t.Err)??n)(c.issues.map(h=>St(h,u,xe())));throw Am(m,t==null?void 0:t.callee),m}return c.value},Af=Om(lu),Im=n=>async(e,o,r,t)=>{const u=r?Object.assign(r,{async:!0}):{async:!0};let c=e._zod.run({value:o,issues:[]},u);if(c instanceof Promise&&(c=await c),c.issues.length){const m=new((t==null?void 0:t.Err)??n)(c.issues.map(h=>St(h,u,xe())));throw Am(m,t==null?void 0:t.callee),m}return c.value},Df=Im(lu),Km=n=>(e,o,r)=>{const t=r?{...r,async:!1}:{async:!1},u=e._zod.run({value:o,issues:[]},t);if(u instanceof Promise)throw new mo;return u.issues.length?{success:!1,error:new(n??Dm)(u.issues.map(c=>St(c,t,xe())))}:{success:!0,data:u.value}},e0=Km(lu),xm=n=>async(e,o,r)=>{const t=r?Object.assign(r,{async:!0}):{async:!0};let u=e._zod.run({value:o,issues:[]},t);return u instanceof Promise&&(u=await u),u.issues.length?{success:!1,error:new n(u.issues.map(c=>St(c,t,xe())))}:{success:!0,data:u.value}},t0=xm(lu),a0=/^[cC][^\s-]{8,}$/,i0=/^[0-9a-z]+$/,o0=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,r0=/^[0-9a-vA-V]{20}$/,u0=/^[A-Za-z0-9]{27}$/,s0=/^[a-zA-Z0-9_-]{21}$/,l0=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,eE=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,c0=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,So=n=>n?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,tE=So(4),aE=So(6),iE=So(7),h0=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,oE=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rE=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,uE=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,sE=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,lE=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,cE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function d0(){return new RegExp(cE,"u")}const f0=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,m0=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,g0=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,S0=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,p0=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Rm=/^[A-Za-z0-9_-]*$/,Bm=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,hE=/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,y0=/^\+(?:[0-9]){6,14}[0-9]$/,v0="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",k0=new RegExp(`^${v0}$`);function b0(n){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof n.precision=="number"?n.precision===-1?`${e}`:n.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${n.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function T0(n){return new RegExp(`^${b0(n)}$`)}function M0(n){const e=b0({precision:n.precision}),o=["Z"];n.local&&o.push(""),n.offset&&o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const r=`${e}(?:${o.join("|")})`;return new RegExp(`^${v0}T(?:${r})$`)}const A0=n=>{const e=n?`[\\s\\S]{${(n==null?void 0:n.minimum)??0},${(n==null?void 0:n.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},D0=/^\d+n?$/,w0=/^\d+$/,C0=/^-?\d+(?:\.\d+)?/i,O0=/true|false/i,I0=/null/i,K0=/undefined/i,x0=/^[^A-Z]*$/,R0=/^[^a-z]*$/,B0=Object.freeze(Object.defineProperty({__proto__:null,base64:p0,base64url:Rm,bigint:D0,boolean:O0,browserEmail:lE,cidrv4:g0,cidrv6:S0,cuid:a0,cuid2:i0,date:k0,datetime:M0,domain:hE,duration:l0,e164:y0,email:h0,emoji:d0,extendedDuration:eE,guid:c0,hostname:Bm,html5Email:oE,idnEmail:sE,integer:w0,ipv4:f0,ipv6:m0,ksuid:u0,lowercase:x0,nanoid:s0,null:I0,number:C0,rfc5322Email:rE,string:A0,time:T0,ulid:o0,undefined:K0,unicodeEmail:uE,uppercase:R0,uuid:So,uuid4:tE,uuid6:aE,uuid7:iE,xid:r0},Symbol.toStringTag,{value:"Module"})),ae=L("$ZodCheck",(n,e)=>{var o;n._zod??(n._zod={}),n._zod.def=e,(o=n._zod).onattach??(o.onattach=[])}),P0={number:"number",bigint:"bigint",object:"date"},Pm=L("$ZodCheckLessThan",(n,e)=>{ae.init(n,e);const o=P0[typeof e.value];n._zod.onattach.push(r=>{const t=r._zod.bag,u=(e.inclusive?t.maximum:t.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<u&&(e.inclusive?t.maximum=e.value:t.exclusiveMaximum=e.value)}),n._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:o,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),Nm=L("$ZodCheckGreaterThan",(n,e)=>{ae.init(n,e);const o=P0[typeof e.value];n._zod.onattach.push(r=>{const t=r._zod.bag,u=(e.inclusive?t.minimum:t.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>u&&(e.inclusive?t.minimum=e.value:t.exclusiveMinimum=e.value)}),n._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:o,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:n,continue:!e.abort})}}),N0=L("$ZodCheckMultipleOf",(n,e)=>{ae.init(n,e),n._zod.onattach.push(o=>{var r;(r=o._zod.bag).multipleOf??(r.multipleOf=e.value)}),n._zod.check=o=>{if(typeof o.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof o.value=="bigint"?o.value%e.value===BigInt(0):LA(o.value,e.value)===0)||o.issues.push({origin:typeof o.value,code:"not_multiple_of",divisor:e.value,input:o.value,inst:n,continue:!e.abort})}}),E0=L("$ZodCheckNumberFormat",(n,e)=>{var c;ae.init(n,e),e.format=e.format||"float64";const o=(c=e.format)==null?void 0:c.includes("int"),r=o?"int":"number",[t,u]=$A[e.format];n._zod.onattach.push(m=>{const h=m._zod.bag;h.format=e.format,h.minimum=t,h.maximum=u,o&&(h.pattern=w0)}),n._zod.check=m=>{const h=m.value;if(o){if(!Number.isInteger(h)){m.issues.push({expected:r,format:e.format,code:"invalid_type",continue:!1,input:h,inst:n});return}if(!Number.isSafeInteger(h)){h>0?m.issues.push({input:h,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:r,continue:!e.abort}):m.issues.push({input:h,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:n,origin:r,continue:!e.abort});return}}h<t&&m.issues.push({origin:"number",input:h,code:"too_small",minimum:t,inclusive:!0,inst:n,continue:!e.abort}),h>u&&m.issues.push({origin:"number",input:h,code:"too_big",maximum:u,inst:n})}}),H0=L("$ZodCheckBigIntFormat",(n,e)=>{ae.init(n,e);const[o,r]=FA[e.format];n._zod.onattach.push(t=>{const u=t._zod.bag;u.format=e.format,u.minimum=o,u.maximum=r}),n._zod.check=t=>{const u=t.value;u<o&&t.issues.push({origin:"bigint",input:u,code:"too_small",minimum:o,inclusive:!0,inst:n,continue:!e.abort}),u>r&&t.issues.push({origin:"bigint",input:u,code:"too_big",maximum:r,inst:n})}}),G0=L("$ZodCheckMaxSize",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<t&&(r._zod.bag.maximum=e.maximum)}),n._zod.check=r=>{const t=r.value;t.size<=e.maximum||r.issues.push({origin:Xl(t),code:"too_big",maximum:e.maximum,input:t,inst:n,continue:!e.abort})}}),L0=L("$ZodCheckMinSize",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>t&&(r._zod.bag.minimum=e.minimum)}),n._zod.check=r=>{const t=r.value;t.size>=e.minimum||r.issues.push({origin:Xl(t),code:"too_small",minimum:e.minimum,input:t,inst:n,continue:!e.abort})}}),_0=L("$ZodCheckSizeEquals",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.size!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag;t.minimum=e.size,t.maximum=e.size,t.size=e.size}),n._zod.check=r=>{const t=r.value,u=t.size;if(u===e.size)return;const c=u>e.size;r.issues.push({origin:Xl(t),...c?{code:"too_big",maximum:e.size}:{code:"too_small",minimum:e.size},inclusive:!0,exact:!0,input:r.value,inst:n,continue:!e.abort})}}),j0=L("$ZodCheckMaxLength",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<t&&(r._zod.bag.maximum=e.maximum)}),n._zod.check=r=>{const t=r.value;if(t.length<=e.maximum)return;const c=ql(t);r.issues.push({origin:c,code:"too_big",maximum:e.maximum,inclusive:!0,input:t,inst:n,continue:!e.abort})}}),z0=L("$ZodCheckMinLength",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>t&&(r._zod.bag.minimum=e.minimum)}),n._zod.check=r=>{const t=r.value;if(t.length>=e.minimum)return;const c=ql(t);r.issues.push({origin:c,code:"too_small",minimum:e.minimum,inclusive:!0,input:t,inst:n,continue:!e.abort})}}),$0=L("$ZodCheckLengthEquals",(n,e)=>{var o;ae.init(n,e),(o=n._zod.def).when??(o.when=r=>{const t=r.value;return!di(t)&&t.length!==void 0}),n._zod.onattach.push(r=>{const t=r._zod.bag;t.minimum=e.length,t.maximum=e.length,t.length=e.length}),n._zod.check=r=>{const t=r.value,u=t.length;if(u===e.length)return;const c=ql(t),m=u>e.length;r.issues.push({origin:c,...m?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:n,continue:!e.abort})}}),cu=L("$ZodCheckStringFormat",(n,e)=>{var o,r;ae.init(n,e),n._zod.onattach.push(t=>{const u=t._zod.bag;u.format=e.format,e.pattern&&(u.patterns??(u.patterns=new Set),u.patterns.add(e.pattern))}),e.pattern?(o=n._zod).check??(o.check=t=>{e.pattern.lastIndex=0,!e.pattern.test(t.value)&&t.issues.push({origin:"string",code:"invalid_format",format:e.format,input:t.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:n,continue:!e.abort})}):(r=n._zod).check??(r.check=()=>{})}),F0=L("$ZodCheckRegex",(n,e)=>{cu.init(n,e),n._zod.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:"regex",input:o.value,pattern:e.pattern.toString(),inst:n,continue:!e.abort})}}),U0=L("$ZodCheckLowerCase",(n,e)=>{e.pattern??(e.pattern=x0),cu.init(n,e)}),V0=L("$ZodCheckUpperCase",(n,e)=>{e.pattern??(e.pattern=R0),cu.init(n,e)}),Y0=L("$ZodCheckIncludes",(n,e)=>{ae.init(n,e);const o=xa(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${o}`:o);e.pattern=r,n._zod.onattach.push(t=>{const u=t._zod.bag;u.patterns??(u.patterns=new Set),u.patterns.add(r)}),n._zod.check=t=>{t.value.includes(e.includes,e.position)||t.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:t.value,inst:n,continue:!e.abort})}}),W0=L("$ZodCheckStartsWith",(n,e)=>{ae.init(n,e);const o=new RegExp(`^${xa(e.prefix)}.*`);e.pattern??(e.pattern=o),n._zod.onattach.push(r=>{const t=r._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(o)}),n._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:n,continue:!e.abort})}}),Z0=L("$ZodCheckEndsWith",(n,e)=>{ae.init(n,e);const o=new RegExp(`.*${xa(e.suffix)}$`);e.pattern??(e.pattern=o),n._zod.onattach.push(r=>{const t=r._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(o)}),n._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:n,continue:!e.abort})}});function Kb(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues))}const J0=L("$ZodCheckProperty",(n,e)=>{ae.init(n,e),n._zod.check=o=>{const r=e.schema._zod.run({value:o.value[e.property],issues:[]},{});if(r instanceof Promise)return r.then(t=>Kb(t,o,e.property));Kb(r,o,e.property)}}),X0=L("$ZodCheckMimeType",(n,e)=>{ae.init(n,e);const o=new Set(e.mime);n._zod.onattach.push(r=>{r._zod.bag.mime=e.mime}),n._zod.check=r=>{o.has(r.value.type)||r.issues.push({code:"invalid_value",values:e.mime,input:r.value.type,inst:n,continue:!e.abort})}}),q0=L("$ZodCheckOverwrite",(n,e)=>{ae.init(n,e),n._zod.check=o=>{o.value=e.tx(o.value)}});class Q0{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const r=e.split(`
`).filter(c=>c),t=Math.min(...r.map(c=>c.length-c.trimStart().length)),u=r.map(c=>c.slice(t)).map(c=>" ".repeat(this.indent*2)+c);for(const c of u)this.content.push(c)}compile(){const e=Function,o=this==null?void 0:this.args,t=[...((this==null?void 0:this.content)??[""]).map(u=>`  ${u}`)];return new e(...o,t.join(`
`))}}const nD={major:4,minor:0,patch:15},bn=L("$ZodType",(n,e)=>{var t;var o;n??(n={}),n._zod.def=e,n._zod.bag=n._zod.bag||{},n._zod.version=nD;const r=[...n._zod.def.checks??[]];n._zod.traits.has("$ZodCheck")&&r.unshift(n);for(const u of r)for(const c of u._zod.onattach)c(n);if(r.length===0)(o=n._zod).deferred??(o.deferred=[]),(t=n._zod.deferred)==null||t.push(()=>{n._zod.run=n._zod.parse});else{const u=(c,m,h)=>{let d=co(c),S;for(const p of m){if(p._zod.def.when){if(!p._zod.def.when(c))continue}else if(d)continue;const y=c.issues.length,k=p._zod.check(c);if(k instanceof Promise&&(h==null?void 0:h.async)===!1)throw new mo;if(S||k instanceof Promise)S=(S??Promise.resolve()).then(async()=>{await k,c.issues.length!==y&&(d||(d=co(c,y)))});else{if(c.issues.length===y)continue;d||(d=co(c,y))}}return S?S.then(()=>c):c};n._zod.run=(c,m)=>{const h=n._zod.parse(c,m);if(h instanceof Promise){if(m.async===!1)throw new mo;return h.then(d=>u(d,r,m))}return u(h,r,m)}}n["~standard"]={validate:u=>{var c;try{const m=e0(n,u);return m.success?{value:m.data}:{issues:(c=m.error)==null?void 0:c.issues}}catch{return t0(n,u).then(h=>{var d;return h.success?{value:h.data}:{issues:(d=h.error)==null?void 0:d.issues}})}},vendor:"zod",version:1}}),hu=L("$ZodString",(n,e)=>{var o;bn.init(n,e),n._zod.pattern=[...((o=n==null?void 0:n._zod.bag)==null?void 0:o.patterns)??[]].pop()??A0(n._zod.bag),n._zod.parse=(r,t)=>{if(e.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:n}),r}}),Un=L("$ZodStringFormat",(n,e)=>{cu.init(n,e),hu.init(n,e)}),eD=L("$ZodGUID",(n,e)=>{e.pattern??(e.pattern=c0),Un.init(n,e)}),tD=L("$ZodUUID",(n,e)=>{if(e.version){const r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=So(r))}else e.pattern??(e.pattern=So());Un.init(n,e)}),aD=L("$ZodEmail",(n,e)=>{e.pattern??(e.pattern=h0),Un.init(n,e)}),iD=L("$ZodURL",(n,e)=>{Un.init(n,e),n._zod.check=o=>{try{const r=o.value.trim(),t=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(t.hostname)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Bm.source,input:o.value,inst:n,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)||o.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:o.value,inst:n,continue:!e.abort})),e.normalize?o.value=t.href:o.value=r;return}catch{o.issues.push({code:"invalid_format",format:"url",input:o.value,inst:n,continue:!e.abort})}}}),oD=L("$ZodEmoji",(n,e)=>{e.pattern??(e.pattern=d0()),Un.init(n,e)}),rD=L("$ZodNanoID",(n,e)=>{e.pattern??(e.pattern=s0),Un.init(n,e)}),uD=L("$ZodCUID",(n,e)=>{e.pattern??(e.pattern=a0),Un.init(n,e)}),sD=L("$ZodCUID2",(n,e)=>{e.pattern??(e.pattern=i0),Un.init(n,e)}),lD=L("$ZodULID",(n,e)=>{e.pattern??(e.pattern=o0),Un.init(n,e)}),cD=L("$ZodXID",(n,e)=>{e.pattern??(e.pattern=r0),Un.init(n,e)}),hD=L("$ZodKSUID",(n,e)=>{e.pattern??(e.pattern=u0),Un.init(n,e)}),dD=L("$ZodISODateTime",(n,e)=>{e.pattern??(e.pattern=M0(e)),Un.init(n,e)}),fD=L("$ZodISODate",(n,e)=>{e.pattern??(e.pattern=k0),Un.init(n,e)}),mD=L("$ZodISOTime",(n,e)=>{e.pattern??(e.pattern=T0(e)),Un.init(n,e)}),gD=L("$ZodISODuration",(n,e)=>{e.pattern??(e.pattern=l0),Un.init(n,e)}),SD=L("$ZodIPv4",(n,e)=>{e.pattern??(e.pattern=f0),Un.init(n,e),n._zod.onattach.push(o=>{const r=o._zod.bag;r.format="ipv4"})}),pD=L("$ZodIPv6",(n,e)=>{e.pattern??(e.pattern=m0),Un.init(n,e),n._zod.onattach.push(o=>{const r=o._zod.bag;r.format="ipv6"}),n._zod.check=o=>{try{new URL(`http://[${o.value}]`)}catch{o.issues.push({code:"invalid_format",format:"ipv6",input:o.value,inst:n,continue:!e.abort})}}}),yD=L("$ZodCIDRv4",(n,e)=>{e.pattern??(e.pattern=g0),Un.init(n,e)}),vD=L("$ZodCIDRv6",(n,e)=>{e.pattern??(e.pattern=S0),Un.init(n,e),n._zod.check=o=>{const[r,t]=o.value.split("/");try{if(!t)throw new Error;const u=Number(t);if(`${u}`!==t)throw new Error;if(u<0||u>128)throw new Error;new URL(`http://[${r}]`)}catch{o.issues.push({code:"invalid_format",format:"cidrv6",input:o.value,inst:n,continue:!e.abort})}}});function Em(n){if(n==="")return!0;if(n.length%4!==0)return!1;try{return atob(n),!0}catch{return!1}}const kD=L("$ZodBase64",(n,e)=>{e.pattern??(e.pattern=p0),Un.init(n,e),n._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64"}),n._zod.check=o=>{Em(o.value)||o.issues.push({code:"invalid_format",format:"base64",input:o.value,inst:n,continue:!e.abort})}});function bD(n){if(!Rm.test(n))return!1;const e=n.replace(/[-_]/g,r=>r==="-"?"+":"/"),o=e.padEnd(Math.ceil(e.length/4)*4,"=");return Em(o)}const TD=L("$ZodBase64URL",(n,e)=>{e.pattern??(e.pattern=Rm),Un.init(n,e),n._zod.onattach.push(o=>{o._zod.bag.contentEncoding="base64url"}),n._zod.check=o=>{bD(o.value)||o.issues.push({code:"invalid_format",format:"base64url",input:o.value,inst:n,continue:!e.abort})}}),MD=L("$ZodE164",(n,e)=>{e.pattern??(e.pattern=y0),Un.init(n,e)});function AD(n,e=null){try{const o=n.split(".");if(o.length!==3)return!1;const[r]=o;if(!r)return!1;const t=JSON.parse(atob(r));return!("typ"in t&&(t==null?void 0:t.typ)!=="JWT"||!t.alg||e&&(!("alg"in t)||t.alg!==e))}catch{return!1}}const DD=L("$ZodJWT",(n,e)=>{Un.init(n,e),n._zod.check=o=>{AD(o.value,e.alg)||o.issues.push({code:"invalid_format",format:"jwt",input:o.value,inst:n,continue:!e.abort})}}),wD=L("$ZodCustomStringFormat",(n,e)=>{Un.init(n,e),n._zod.check=o=>{e.fn(o.value)||o.issues.push({code:"invalid_format",format:e.format,input:o.value,inst:n,continue:!e.abort})}}),Hm=L("$ZodNumber",(n,e)=>{bn.init(n,e),n._zod.pattern=n._zod.bag.pattern??C0,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=Number(o.value)}catch{}const t=o.value;if(typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t))return o;const u=typeof t=="number"?Number.isNaN(t)?"NaN":Number.isFinite(t)?void 0:"Infinity":void 0;return o.issues.push({expected:"number",code:"invalid_type",input:t,inst:n,...u?{received:u}:{}}),o}}),CD=L("$ZodNumber",(n,e)=>{E0.init(n,e),Hm.init(n,e)}),Gm=L("$ZodBoolean",(n,e)=>{bn.init(n,e),n._zod.pattern=O0,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=!!o.value}catch{}const t=o.value;return typeof t=="boolean"||o.issues.push({expected:"boolean",code:"invalid_type",input:t,inst:n}),o}}),Lm=L("$ZodBigInt",(n,e)=>{bn.init(n,e),n._zod.pattern=D0,n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=BigInt(o.value)}catch{}return typeof o.value=="bigint"||o.issues.push({expected:"bigint",code:"invalid_type",input:o.value,inst:n}),o}}),OD=L("$ZodBigInt",(n,e)=>{H0.init(n,e),Lm.init(n,e)}),ID=L("$ZodSymbol",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return typeof t=="symbol"||o.issues.push({expected:"symbol",code:"invalid_type",input:t,inst:n}),o}}),KD=L("$ZodUndefined",(n,e)=>{bn.init(n,e),n._zod.pattern=K0,n._zod.values=new Set([void 0]),n._zod.optin="optional",n._zod.optout="optional",n._zod.parse=(o,r)=>{const t=o.value;return typeof t>"u"||o.issues.push({expected:"undefined",code:"invalid_type",input:t,inst:n}),o}}),xD=L("$ZodNull",(n,e)=>{bn.init(n,e),n._zod.pattern=I0,n._zod.values=new Set([null]),n._zod.parse=(o,r)=>{const t=o.value;return t===null||o.issues.push({expected:"null",code:"invalid_type",input:t,inst:n}),o}}),RD=L("$ZodAny",(n,e)=>{bn.init(n,e),n._zod.parse=o=>o}),Cl=L("$ZodUnknown",(n,e)=>{bn.init(n,e),n._zod.parse=o=>o}),BD=L("$ZodNever",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>(o.issues.push({expected:"never",code:"invalid_type",input:o.value,inst:n}),o)}),PD=L("$ZodVoid",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return typeof t>"u"||o.issues.push({expected:"void",code:"invalid_type",input:t,inst:n}),o}}),ND=L("$ZodDate",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{if(e.coerce)try{o.value=new Date(o.value)}catch{}const t=o.value,u=t instanceof Date;return u&&!Number.isNaN(t.getTime())||o.issues.push({expected:"date",code:"invalid_type",input:t,...u?{received:"Invalid Date"}:{},inst:n}),o}});function xb(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues)),e.value[o]=n.value}const _m=L("$ZodArray",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!Array.isArray(t))return o.issues.push({expected:"array",code:"invalid_type",input:t,inst:n}),o;o.value=Array(t.length);const u=[];for(let c=0;c<t.length;c++){const m=t[c],h=e.element._zod.run({value:m,issues:[]},r);h instanceof Promise?u.push(h.then(d=>xb(d,o,c))):xb(h,o,c)}return u.length?Promise.all(u).then(()=>o):o}});function Hs(n,e,o,r){n.issues.length&&e.issues.push(...mt(o,n.issues)),n.value===void 0?o in r&&(e.value[o]=void 0):e.value[o]=n.value}const ED=L("$ZodObject",(n,e)=>{bn.init(n,e);const o=Wl(()=>{const p=Object.keys(e.shape);for(const k of p)if(!(e.shape[k]instanceof bn))throw new Error(`Invalid element at key "${k}": expected a Zod schema`);const y=zA(e.shape);return{shape:e.shape,keys:p,keySet:new Set(p),numKeys:p.length,optionalKeys:new Set(y)}});Rn(n._zod,"propValues",()=>{const p=e.shape,y={};for(const k in p){const T=p[k]._zod;if(T.values){y[k]??(y[k]=new Set);for(const O of T.values)y[k].add(O)}}return y});const r=p=>{const y=new Q0(["shape","payload","ctx"]),k=o.value,T=I=>{const C=Mf(I);return`shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`};y.write("const input = payload.value;");const O=Object.create(null);let A=0;for(const I of k.keys)O[I]=`key_${A++}`;y.write("const newResult = {}");for(const I of k.keys){const C=O[I],K=Mf(I);y.write(`const ${C} = ${T(I)};`),y.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${K}, ...iss.path] : [${K}]
          })));
        }
        
        if (${C}.value === undefined) {
          if (${K} in input) {
            newResult[${K}] = undefined;
          }
        } else {
          newResult[${K}] = ${C}.value;
        }
      `)}y.write("payload.value = newResult;"),y.write("return payload;");const b=y.compile();return(I,C)=>b(p,I,C)};let t;const u=Ur,c=!Al.jitless,h=c&&_A.value,d=e.catchall;let S;n._zod.parse=(p,y)=>{S??(S=o.value);const k=p.value;if(!u(k))return p.issues.push({expected:"object",code:"invalid_type",input:k,inst:n}),p;const T=[];if(c&&h&&(y==null?void 0:y.async)===!1&&y.jitless!==!0)t||(t=r(e.shape)),p=t(p,y);else{p.value={};const C=S.shape;for(const K of S.keys){const E=C[K]._zod.run({value:k[K],issues:[]},y);E instanceof Promise?T.push(E.then(j=>Hs(j,p,K,k))):Hs(E,p,K,k)}}if(!d)return T.length?Promise.all(T).then(()=>p):p;const O=[],A=S.keySet,b=d._zod,I=b.def.type;for(const C of Object.keys(k)){if(A.has(C))continue;if(I==="never"){O.push(C);continue}const K=b.run({value:k[C],issues:[]},y);K instanceof Promise?T.push(K.then(w=>Hs(w,p,C,k))):Hs(K,p,C,k)}return O.length&&p.issues.push({code:"unrecognized_keys",keys:O,input:k,inst:n}),T.length?Promise.all(T).then(()=>p):p}});function Rb(n,e,o,r){for(const u of n)if(u.issues.length===0)return e.value=u.value,e;const t=n.filter(u=>!co(u));return t.length===1?(e.value=t[0].value,t[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:o,errors:n.map(u=>u.issues.map(c=>St(c,r,xe())))}),e)}const jm=L("$ZodUnion",(n,e)=>{bn.init(n,e),Rn(n._zod,"optin",()=>e.options.some(t=>t._zod.optin==="optional")?"optional":void 0),Rn(n._zod,"optout",()=>e.options.some(t=>t._zod.optout==="optional")?"optional":void 0),Rn(n._zod,"values",()=>{if(e.options.every(t=>t._zod.values))return new Set(e.options.flatMap(t=>Array.from(t._zod.values)))}),Rn(n._zod,"pattern",()=>{if(e.options.every(t=>t._zod.pattern)){const t=e.options.map(u=>u._zod.pattern);return new RegExp(`^(${t.map(u=>Zl(u.source)).join("|")})$`)}});const o=e.options.length===1,r=e.options[0]._zod.run;n._zod.parse=(t,u)=>{if(o)return r(t,u);let c=!1;const m=[];for(const h of e.options){const d=h._zod.run({value:t.value,issues:[]},u);if(d instanceof Promise)m.push(d),c=!0;else{if(d.issues.length===0)return d;m.push(d)}}return c?Promise.all(m).then(h=>Rb(h,t,n,u)):Rb(m,t,n,u)}}),HD=L("$ZodDiscriminatedUnion",(n,e)=>{jm.init(n,e);const o=n._zod.parse;Rn(n._zod,"propValues",()=>{const t={};for(const u of e.options){const c=u._zod.propValues;if(!c||Object.keys(c).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(u)}"`);for(const[m,h]of Object.entries(c)){t[m]||(t[m]=new Set);for(const d of h)t[m].add(d)}}return t});const r=Wl(()=>{var c;const t=e.options,u=new Map;for(const m of t){const h=(c=m._zod.propValues)==null?void 0:c[e.discriminator];if(!h||h.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(m)}"`);for(const d of h){if(u.has(d))throw new Error(`Duplicate discriminator value "${String(d)}"`);u.set(d,m)}}return u});n._zod.parse=(t,u)=>{const c=t.value;if(!Ur(c))return t.issues.push({code:"invalid_type",expected:"object",input:c,inst:n}),t;const m=r.value.get(c==null?void 0:c[e.discriminator]);return m?m._zod.run(t,u):e.unionFallback?o(t,u):(t.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,input:c,path:[e.discriminator],inst:n}),t)}}),GD=L("$ZodIntersection",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value,u=e.left._zod.run({value:t,issues:[]},r),c=e.right._zod.run({value:t,issues:[]},r);return u instanceof Promise||c instanceof Promise?Promise.all([u,c]).then(([h,d])=>Bb(o,h,d)):Bb(o,u,c)}});function wf(n,e){if(n===e)return{valid:!0,data:n};if(n instanceof Date&&e instanceof Date&&+n==+e)return{valid:!0,data:n};if(Vr(n)&&Vr(e)){const o=Object.keys(e),r=Object.keys(n).filter(u=>o.indexOf(u)!==-1),t={...n,...e};for(const u of r){const c=wf(n[u],e[u]);if(!c.valid)return{valid:!1,mergeErrorPath:[u,...c.mergeErrorPath]};t[u]=c.data}return{valid:!0,data:t}}if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return{valid:!1,mergeErrorPath:[]};const o=[];for(let r=0;r<n.length;r++){const t=n[r],u=e[r],c=wf(t,u);if(!c.valid)return{valid:!1,mergeErrorPath:[r,...c.mergeErrorPath]};o.push(c.data)}return{valid:!0,data:o}}return{valid:!1,mergeErrorPath:[]}}function Bb(n,e,o){if(e.issues.length&&n.issues.push(...e.issues),o.issues.length&&n.issues.push(...o.issues),co(n))return n;const r=wf(e.value,o.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return n.value=r.data,n}const Ql=L("$ZodTuple",(n,e)=>{bn.init(n,e);const o=e.items,r=o.length-[...o].reverse().findIndex(t=>t._zod.optin!=="optional");n._zod.parse=(t,u)=>{const c=t.value;if(!Array.isArray(c))return t.issues.push({input:c,inst:n,expected:"tuple",code:"invalid_type"}),t;t.value=[];const m=[];if(!e.rest){const d=c.length>o.length,S=c.length<r-1;if(d||S)return t.issues.push({...d?{code:"too_big",maximum:o.length}:{code:"too_small",minimum:o.length},input:c,inst:n,origin:"array"}),t}let h=-1;for(const d of o){if(h++,h>=c.length&&h>=r)continue;const S=d._zod.run({value:c[h],issues:[]},u);S instanceof Promise?m.push(S.then(p=>Gs(p,t,h))):Gs(S,t,h)}if(e.rest){const d=c.slice(o.length);for(const S of d){h++;const p=e.rest._zod.run({value:S,issues:[]},u);p instanceof Promise?m.push(p.then(y=>Gs(y,t,h))):Gs(p,t,h)}}return m.length?Promise.all(m).then(()=>t):t}});function Gs(n,e,o){n.issues.length&&e.issues.push(...mt(o,n.issues)),e.value[o]=n.value}const LD=L("$ZodRecord",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!Vr(t))return o.issues.push({expected:"record",code:"invalid_type",input:t,inst:n}),o;const u=[];if(e.keyType._zod.values){const c=e.keyType._zod.values;o.value={};for(const h of c)if(typeof h=="string"||typeof h=="number"||typeof h=="symbol"){const d=e.valueType._zod.run({value:t[h],issues:[]},r);d instanceof Promise?u.push(d.then(S=>{S.issues.length&&o.issues.push(...mt(h,S.issues)),o.value[h]=S.value})):(d.issues.length&&o.issues.push(...mt(h,d.issues)),o.value[h]=d.value)}let m;for(const h in t)c.has(h)||(m=m??[],m.push(h));m&&m.length>0&&o.issues.push({code:"unrecognized_keys",input:t,inst:n,keys:m})}else{o.value={};for(const c of Reflect.ownKeys(t)){if(c==="__proto__")continue;const m=e.keyType._zod.run({value:c,issues:[]},r);if(m instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(m.issues.length){o.issues.push({code:"invalid_key",origin:"record",issues:m.issues.map(d=>St(d,r,xe())),input:c,path:[c],inst:n}),o.value[m.value]=m.value;continue}const h=e.valueType._zod.run({value:t[c],issues:[]},r);h instanceof Promise?u.push(h.then(d=>{d.issues.length&&o.issues.push(...mt(c,d.issues)),o.value[m.value]=d.value})):(h.issues.length&&o.issues.push(...mt(c,h.issues)),o.value[m.value]=h.value)}}return u.length?Promise.all(u).then(()=>o):o}}),_D=L("$ZodMap",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!(t instanceof Map))return o.issues.push({expected:"map",code:"invalid_type",input:t,inst:n}),o;const u=[];o.value=new Map;for(const[c,m]of t){const h=e.keyType._zod.run({value:c,issues:[]},r),d=e.valueType._zod.run({value:m,issues:[]},r);h instanceof Promise||d instanceof Promise?u.push(Promise.all([h,d]).then(([S,p])=>{Pb(S,p,o,c,t,n,r)})):Pb(h,d,o,c,t,n,r)}return u.length?Promise.all(u).then(()=>o):o}});function Pb(n,e,o,r,t,u,c){n.issues.length&&(wl.has(typeof r)?o.issues.push(...mt(r,n.issues)):o.issues.push({code:"invalid_key",origin:"map",input:t,inst:u,issues:n.issues.map(m=>St(m,c,xe()))})),e.issues.length&&(wl.has(typeof r)?o.issues.push(...mt(r,e.issues)):o.issues.push({origin:"map",code:"invalid_element",input:t,inst:u,key:r,issues:e.issues.map(m=>St(m,c,xe()))})),o.value.set(n.value,e.value)}const jD=L("$ZodSet",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;if(!(t instanceof Set))return o.issues.push({input:t,inst:n,expected:"set",code:"invalid_type"}),o;const u=[];o.value=new Set;for(const c of t){const m=e.valueType._zod.run({value:c,issues:[]},r);m instanceof Promise?u.push(m.then(h=>Nb(h,o))):Nb(m,o)}return u.length?Promise.all(u).then(()=>o):o}});function Nb(n,e){n.issues.length&&e.issues.push(...n.issues),e.value.add(n.value)}const zD=L("$ZodEnum",(n,e)=>{bn.init(n,e);const o=Mm(e.entries),r=new Set(o);n._zod.values=r,n._zod.pattern=new RegExp(`^(${o.filter(t=>wl.has(typeof t)).map(t=>typeof t=="string"?xa(t):t.toString()).join("|")})$`),n._zod.parse=(t,u)=>{const c=t.value;return r.has(c)||t.issues.push({code:"invalid_value",values:o,input:c,inst:n}),t}}),$D=L("$ZodLiteral",(n,e)=>{if(bn.init(n,e),e.values.length===0)throw new Error("Cannot create literal schema with no valid values");n._zod.values=new Set(e.values),n._zod.pattern=new RegExp(`^(${e.values.map(o=>typeof o=="string"?xa(o):o?xa(o.toString()):String(o)).join("|")})$`),n._zod.parse=(o,r)=>{const t=o.value;return n._zod.values.has(t)||o.issues.push({code:"invalid_value",values:e.values,input:t,inst:n}),o}}),FD=L("$ZodFile",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=o.value;return t instanceof File||o.issues.push({expected:"file",code:"invalid_type",input:t,inst:n}),o}}),zm=L("$ZodTransform",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=e.transform(o.value,o);if(r.async)return(t instanceof Promise?t:Promise.resolve(t)).then(c=>(o.value=c,o));if(t instanceof Promise)throw new mo;return o.value=t,o}});function Eb(n,e){return n.issues.length&&e===void 0?{issues:[],value:void 0}:n}const UD=L("$ZodOptional",(n,e)=>{bn.init(n,e),n._zod.optin="optional",n._zod.optout="optional",Rn(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),Rn(n._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${Zl(o.source)})?$`):void 0}),n._zod.parse=(o,r)=>{if(e.innerType._zod.optin==="optional"){const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(u=>Eb(u,o.value)):Eb(t,o.value)}return o.value===void 0?o:e.innerType._zod.run(o,r)}}),VD=L("$ZodNullable",(n,e)=>{bn.init(n,e),Rn(n._zod,"optin",()=>e.innerType._zod.optin),Rn(n._zod,"optout",()=>e.innerType._zod.optout),Rn(n._zod,"pattern",()=>{const o=e.innerType._zod.pattern;return o?new RegExp(`^(${Zl(o.source)}|null)$`):void 0}),Rn(n._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),n._zod.parse=(o,r)=>o.value===null?o:e.innerType._zod.run(o,r)}),YD=L("$ZodDefault",(n,e)=>{bn.init(n,e),n._zod.optin="optional",Rn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>{if(o.value===void 0)return o.value=e.defaultValue,o;const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(u=>Hb(u,e)):Hb(t,e)}});function Hb(n,e){return n.value===void 0&&(n.value=e.defaultValue),n}const WD=L("$ZodPrefault",(n,e)=>{bn.init(n,e),n._zod.optin="optional",Rn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>(o.value===void 0&&(o.value=e.defaultValue),e.innerType._zod.run(o,r))}),ZD=L("$ZodNonOptional",(n,e)=>{bn.init(n,e),Rn(n._zod,"values",()=>{const o=e.innerType._zod.values;return o?new Set([...o].filter(r=>r!==void 0)):void 0}),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(u=>Gb(u,n)):Gb(t,n)}});function Gb(n,e){return!n.issues.length&&n.value===void 0&&n.issues.push({code:"invalid_type",expected:"nonoptional",input:n.value,inst:e}),n}const JD=L("$ZodSuccess",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(u=>(o.value=u.issues.length===0,o)):(o.value=t.issues.length===0,o)}}),XD=L("$ZodCatch",(n,e)=>{bn.init(n,e),Rn(n._zod,"optin",()=>e.innerType._zod.optin),Rn(n._zod,"optout",()=>e.innerType._zod.optout),Rn(n._zod,"values",()=>e.innerType._zod.values),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(u=>(o.value=u.value,u.issues.length&&(o.value=e.catchValue({...o,error:{issues:u.issues.map(c=>St(c,r,xe()))},input:o.value}),o.issues=[]),o)):(o.value=t.value,t.issues.length&&(o.value=e.catchValue({...o,error:{issues:t.issues.map(u=>St(u,r,xe()))},input:o.value}),o.issues=[]),o)}}),qD=L("$ZodNaN",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>((typeof o.value!="number"||!Number.isNaN(o.value))&&o.issues.push({input:o.value,inst:n,expected:"nan",code:"invalid_type"}),o)}),$m=L("$ZodPipe",(n,e)=>{bn.init(n,e),Rn(n._zod,"values",()=>e.in._zod.values),Rn(n._zod,"optin",()=>e.in._zod.optin),Rn(n._zod,"optout",()=>e.out._zod.optout),Rn(n._zod,"propValues",()=>e.in._zod.propValues),n._zod.parse=(o,r)=>{const t=e.in._zod.run(o,r);return t instanceof Promise?t.then(u=>Lb(u,e,r)):Lb(t,e,r)}});function Lb(n,e,o){return n.issues.length?n:e.out._zod.run({value:n.value,issues:n.issues},o)}const QD=L("$ZodReadonly",(n,e)=>{bn.init(n,e),Rn(n._zod,"propValues",()=>e.innerType._zod.propValues),Rn(n._zod,"values",()=>e.innerType._zod.values),Rn(n._zod,"optin",()=>e.innerType._zod.optin),Rn(n._zod,"optout",()=>e.innerType._zod.optout),n._zod.parse=(o,r)=>{const t=e.innerType._zod.run(o,r);return t instanceof Promise?t.then(_b):_b(t)}});function _b(n){return n.value=Object.freeze(n.value),n}const nw=L("$ZodTemplateLiteral",(n,e)=>{bn.init(n,e);const o=[];for(const r of e.parts)if(r instanceof bn){if(!r._zod.pattern)throw new Error(`Invalid template literal part, no pattern found: ${[...r._zod.traits].shift()}`);const t=r._zod.pattern instanceof RegExp?r._zod.pattern.source:r._zod.pattern;if(!t)throw new Error(`Invalid template literal part: ${r._zod.traits}`);const u=t.startsWith("^")?1:0,c=t.endsWith("$")?t.length-1:t.length;o.push(t.slice(u,c))}else if(r===null||jA.has(typeof r))o.push(xa(`${r}`));else throw new Error(`Invalid template literal part: ${r}`);n._zod.pattern=new RegExp(`^${o.join("")}$`),n._zod.parse=(r,t)=>typeof r.value!="string"?(r.issues.push({input:r.value,inst:n,expected:"template_literal",code:"invalid_type"}),r):(n._zod.pattern.lastIndex=0,n._zod.pattern.test(r.value)||r.issues.push({input:r.value,inst:n,code:"invalid_format",format:e.format??"template_literal",pattern:n._zod.pattern.source}),r)}),ew=L("$ZodPromise",(n,e)=>{bn.init(n,e),n._zod.parse=(o,r)=>Promise.resolve(o.value).then(t=>e.innerType._zod.run({value:t,issues:[]},r))}),tw=L("$ZodLazy",(n,e)=>{bn.init(n,e),Rn(n._zod,"innerType",()=>e.getter()),Rn(n._zod,"pattern",()=>n._zod.innerType._zod.pattern),Rn(n._zod,"propValues",()=>n._zod.innerType._zod.propValues),Rn(n._zod,"optin",()=>n._zod.innerType._zod.optin??void 0),Rn(n._zod,"optout",()=>n._zod.innerType._zod.optout??void 0),n._zod.parse=(o,r)=>n._zod.innerType._zod.run(o,r)}),aw=L("$ZodCustom",(n,e)=>{ae.init(n,e),bn.init(n,e),n._zod.parse=(o,r)=>o,n._zod.check=o=>{const r=o.value,t=e.fn(r);if(t instanceof Promise)return t.then(u=>jb(u,o,r,n));jb(t,o,r,n)}});function jb(n,e,o,r){if(!n){const t={code:"custom",input:o,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(t.params=r._zod.def.params),e.issues.push(go(t))}}const dE=()=>{const n={string:{unit:"حرف",verb:"أن يحوي"},file:{unit:"بايت",verb:"أن يحوي"},array:{unit:"عنصر",verb:"أن يحوي"},set:{unit:"عنصر",verb:"أن يحوي"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"مدخل",email:"بريد إلكتروني",url:"رابط",emoji:"إيموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاريخ ووقت بمعيار ISO",date:"تاريخ بمعيار ISO",time:"وقت بمعيار ISO",duration:"مدة بمعيار ISO",ipv4:"عنوان IPv4",ipv6:"عنوان IPv6",cidrv4:"مدى عناوين بصيغة IPv4",cidrv6:"مدى عناوين بصيغة IPv6",base64:"نَص بترميز base64-encoded",base64url:"نَص بترميز base64url-encoded",json_string:"نَص على هيئة JSON",e164:"رقم هاتف بمعيار E.164",jwt:"JWT",template_literal:"مدخل"};return t=>{switch(t.code){case"invalid_type":return`مدخلات غير مقبولة: يفترض إدخال ${t.expected}، ولكن تم إدخال ${o(t.input)}`;case"invalid_value":return t.values.length===1?`مدخلات غير مقبولة: يفترض إدخال ${Tn(t.values[0])}`:`اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?` أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${u} ${t.maximum.toString()} ${c.unit??"عنصر"}`:`أكبر من اللازم: يفترض أن تكون ${t.origin??"القيمة"} ${u} ${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${u} ${t.minimum.toString()} ${c.unit}`:`أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${u} ${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`نَص غير مقبول: يجب أن يبدأ بـ "${t.prefix}"`:u.format==="ends_with"?`نَص غير مقبول: يجب أن ينتهي بـ "${u.suffix}"`:u.format==="includes"?`نَص غير مقبول: يجب أن يتضمَّن "${u.includes}"`:u.format==="regex"?`نَص غير مقبول: يجب أن يطابق النمط ${u.pattern}`:`${r[u.format]??t.format} غير مقبول`}case"not_multiple_of":return`رقم غير مقبول: يجب أن يكون من مضاعفات ${t.divisor}`;case"unrecognized_keys":return`معرف${t.keys.length>1?"ات":""} غريب${t.keys.length>1?"ة":""}: ${en(t.keys,"، ")}`;case"invalid_key":return`معرف غير مقبول في ${t.origin}`;case"invalid_union":return"مدخل غير مقبول";case"invalid_element":return`مدخل غير مقبول في ${t.origin}`;default:return"مدخل غير مقبول"}}};function fE(){return{localeError:dE()}}const mE=()=>{const n={string:{unit:"simvol",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"element",verb:"olmalıdır"},set:{unit:"element",verb:"olmalıdır"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Yanlış dəyər: gözlənilən ${t.expected}, daxil olan ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Yanlış dəyər: gözlənilən ${Tn(t.values[0])}`:`Yanlış seçim: aşağıdakılardan biri olmalıdır: ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${u}${t.maximum.toString()} ${c.unit??"element"}`:`Çox böyük: gözlənilən ${t.origin??"dəyər"} ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Çox kiçik: gözlənilən ${t.origin} ${u}${t.minimum.toString()} ${c.unit}`:`Çox kiçik: gözlənilən ${t.origin} ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Yanlış mətn: "${u.prefix}" ilə başlamalıdır`:u.format==="ends_with"?`Yanlış mətn: "${u.suffix}" ilə bitməlidir`:u.format==="includes"?`Yanlış mətn: "${u.includes}" daxil olmalıdır`:u.format==="regex"?`Yanlış mətn: ${u.pattern} şablonuna uyğun olmalıdır`:`Yanlış ${r[u.format]??t.format}`}case"not_multiple_of":return`Yanlış ədəd: ${t.divisor} ilə bölünə bilən olmalıdır`;case"unrecognized_keys":return`Tanınmayan açar${t.keys.length>1?"lar":""}: ${en(t.keys,", ")}`;case"invalid_key":return`${t.origin} daxilində yanlış açar`;case"invalid_union":return"Yanlış dəyər";case"invalid_element":return`${t.origin} daxilində yanlış dəyər`;default:return"Yanlış dəyər"}}};function gE(){return{localeError:mE()}}function zb(n,e,o,r){const t=Math.abs(n),u=t%10,c=t%100;return c>=11&&c<=19?r:u===1?e:u>=2&&u<=4?o:r}const SE=()=>{const n={string:{unit:{one:"сімвал",few:"сімвалы",many:"сімвалаў"},verb:"мець"},array:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},set:{unit:{one:"элемент",few:"элементы",many:"элементаў"},verb:"мець"},file:{unit:{one:"байт",few:"байты",many:"байтаў"},verb:"мець"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"лік";case"object":{if(Array.isArray(t))return"масіў";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"увод",email:"email адрас",url:"URL",emoji:"эмодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата і час",date:"ISO дата",time:"ISO час",duration:"ISO працягласць",ipv4:"IPv4 адрас",ipv6:"IPv6 адрас",cidrv4:"IPv4 дыяпазон",cidrv6:"IPv6 дыяпазон",base64:"радок у фармаце base64",base64url:"радок у фармаце base64url",json_string:"JSON радок",e164:"нумар E.164",jwt:"JWT",template_literal:"увод"};return t=>{switch(t.code){case"invalid_type":return`Няправільны ўвод: чакаўся ${t.expected}, атрымана ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Няправільны ўвод: чакалася ${Tn(t.values[0])}`:`Няправільны варыянт: чакаўся адзін з ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);if(c){const m=Number(t.maximum),h=zb(m,c.unit.one,c.unit.few,c.unit.many);return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна ${c.verb} ${u}${t.maximum.toString()} ${h}`}return`Занадта вялікі: чакалася, што ${t.origin??"значэнне"} павінна быць ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);if(c){const m=Number(t.minimum),h=zb(m,c.unit.one,c.unit.few,c.unit.many);return`Занадта малы: чакалася, што ${t.origin} павінна ${c.verb} ${u}${t.minimum.toString()} ${h}`}return`Занадта малы: чакалася, што ${t.origin} павінна быць ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Няправільны радок: павінен пачынацца з "${u.prefix}"`:u.format==="ends_with"?`Няправільны радок: павінен заканчвацца на "${u.suffix}"`:u.format==="includes"?`Няправільны радок: павінен змяшчаць "${u.includes}"`:u.format==="regex"?`Няправільны радок: павінен адпавядаць шаблону ${u.pattern}`:`Няправільны ${r[u.format]??t.format}`}case"not_multiple_of":return`Няправільны лік: павінен быць кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспазнаны ${t.keys.length>1?"ключы":"ключ"}: ${en(t.keys,", ")}`;case"invalid_key":return`Няправільны ключ у ${t.origin}`;case"invalid_union":return"Няправільны ўвод";case"invalid_element":return`Няправільнае значэнне ў ${t.origin}`;default:return"Няправільны ўвод"}}};function pE(){return{localeError:SE()}}const yE=()=>{const n={string:{unit:"caràcters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"entrada",email:"adreça electrònica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adreça IPv4",ipv6:"adreça IPv6",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Tipus invàlid: s'esperava ${t.expected}, s'ha rebut ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Valor invàlid: s'esperava ${Tn(t.values[0])}`:`Opció invàlida: s'esperava una de ${en(t.values," o ")}`;case"too_big":{const u=t.inclusive?"com a màxim":"menys de",c=e(t.origin);return c?`Massa gran: s'esperava que ${t.origin??"el valor"} contingués ${u} ${t.maximum.toString()} ${c.unit??"elements"}`:`Massa gran: s'esperava que ${t.origin??"el valor"} fos ${u} ${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?"com a mínim":"més de",c=e(t.origin);return c?`Massa petit: s'esperava que ${t.origin} contingués ${u} ${t.minimum.toString()} ${c.unit}`:`Massa petit: s'esperava que ${t.origin} fos ${u} ${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Format invàlid: ha de començar amb "${u.prefix}"`:u.format==="ends_with"?`Format invàlid: ha d'acabar amb "${u.suffix}"`:u.format==="includes"?`Format invàlid: ha d'incloure "${u.includes}"`:u.format==="regex"?`Format invàlid: ha de coincidir amb el patró ${u.pattern}`:`Format invàlid per a ${r[u.format]??t.format}`}case"not_multiple_of":return`Número invàlid: ha de ser múltiple de ${t.divisor}`;case"unrecognized_keys":return`Clau${t.keys.length>1?"s":""} no reconeguda${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Clau invàlida a ${t.origin}`;case"invalid_union":return"Entrada invàlida";case"invalid_element":return`Element invàlid a ${t.origin}`;default:return"Entrada invàlida"}}};function vE(){return{localeError:yE()}}const kE=()=>{const n={string:{unit:"znaků",verb:"mít"},file:{unit:"bajtů",verb:"mít"},array:{unit:"prvků",verb:"mít"},set:{unit:"prvků",verb:"mít"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"číslo";case"string":return"řetězec";case"boolean":return"boolean";case"bigint":return"bigint";case"function":return"funkce";case"symbol":return"symbol";case"undefined":return"undefined";case"object":{if(Array.isArray(t))return"pole";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"regulární výraz",email:"e-mailová adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a čas ve formátu ISO",date:"datum ve formátu ISO",time:"čas ve formátu ISO",duration:"doba trvání ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"řetězec zakódovaný ve formátu base64",base64url:"řetězec zakódovaný ve formátu base64url",json_string:"řetězec ve formátu JSON",e164:"číslo E.164",jwt:"JWT",template_literal:"vstup"};return t=>{switch(t.code){case"invalid_type":return`Neplatný vstup: očekáváno ${t.expected}, obdrženo ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Neplatný vstup: očekáváno ${Tn(t.values[0])}`:`Neplatná možnost: očekávána jedna z hodnot ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Hodnota je příliš velká: ${t.origin??"hodnota"} musí mít ${u}${t.maximum.toString()} ${c.unit??"prvků"}`:`Hodnota je příliš velká: ${t.origin??"hodnota"} musí být ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Hodnota je příliš malá: ${t.origin??"hodnota"} musí mít ${u}${t.minimum.toString()} ${c.unit??"prvků"}`:`Hodnota je příliš malá: ${t.origin??"hodnota"} musí být ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Neplatný řetězec: musí začínat na "${u.prefix}"`:u.format==="ends_with"?`Neplatný řetězec: musí končit na "${u.suffix}"`:u.format==="includes"?`Neplatný řetězec: musí obsahovat "${u.includes}"`:u.format==="regex"?`Neplatný řetězec: musí odpovídat vzoru ${u.pattern}`:`Neplatný formát ${r[u.format]??t.format}`}case"not_multiple_of":return`Neplatné číslo: musí být násobkem ${t.divisor}`;case"unrecognized_keys":return`Neznámé klíče: ${en(t.keys,", ")}`;case"invalid_key":return`Neplatný klíč v ${t.origin}`;case"invalid_union":return"Neplatný vstup";case"invalid_element":return`Neplatná hodnota v ${t.origin}`;default:return"Neplatný vstup"}}};function bE(){return{localeError:kE()}}const TE=()=>{const n={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"}},e={string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"sæt",file:"fil"};function o(c){return n[c]??null}function r(c){return e[c]??c}const t=c=>{const m=typeof c;switch(m){case"number":return Number.isNaN(c)?"NaN":"tal";case"object":return Array.isArray(c)?"liste":c===null?"null":Object.getPrototypeOf(c)!==Object.prototype&&c.constructor?c.constructor.name:"objekt"}return m},u={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslæt",date:"ISO-dato",time:"ISO-klokkeslæt",duration:"ISO-varighed",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return c=>{switch(c.code){case"invalid_type":return`Ugyldigt input: forventede ${r(c.expected)}, fik ${r(t(c.input))}`;case"invalid_value":return c.values.length===1?`Ugyldig værdi: forventede ${Tn(c.values[0])}`:`Ugyldigt valg: forventede en af følgende ${en(c.values,"|")}`;case"too_big":{const m=c.inclusive?"<=":"<",h=o(c.origin),d=r(c.origin);return h?`For stor: forventede ${d??"value"} ${h.verb} ${m} ${c.maximum.toString()} ${h.unit??"elementer"}`:`For stor: forventede ${d??"value"} havde ${m} ${c.maximum.toString()}`}case"too_small":{const m=c.inclusive?">=":">",h=o(c.origin),d=r(c.origin);return h?`For lille: forventede ${d} ${h.verb} ${m} ${c.minimum.toString()} ${h.unit}`:`For lille: forventede ${d} havde ${m} ${c.minimum.toString()}`}case"invalid_format":{const m=c;return m.format==="starts_with"?`Ugyldig streng: skal starte med "${m.prefix}"`:m.format==="ends_with"?`Ugyldig streng: skal ende med "${m.suffix}"`:m.format==="includes"?`Ugyldig streng: skal indeholde "${m.includes}"`:m.format==="regex"?`Ugyldig streng: skal matche mønsteret ${m.pattern}`:`Ugyldig ${u[m.format]??c.format}`}case"not_multiple_of":return`Ugyldigt tal: skal være deleligt med ${c.divisor}`;case"unrecognized_keys":return`${c.keys.length>1?"Ukendte nøgler":"Ukendt nøgle"}: ${en(c.keys,", ")}`;case"invalid_key":return`Ugyldig nøgle i ${c.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig værdi i ${c.origin}`;default:return"Ugyldigt input"}}};function ME(){return{localeError:TE()}}const AE=()=>{const n={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"Zahl";case"object":{if(Array.isArray(t))return"Array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",jwt:"JWT",template_literal:"Eingabe"};return t=>{switch(t.code){case"invalid_type":return`Ungültige Eingabe: erwartet ${t.expected}, erhalten ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ungültige Eingabe: erwartet ${Tn(t.values[0])}`:`Ungültige Option: erwartet eine von ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Zu groß: erwartet, dass ${t.origin??"Wert"} ${u}${t.maximum.toString()} ${c.unit??"Elemente"} hat`:`Zu groß: erwartet, dass ${t.origin??"Wert"} ${u}${t.maximum.toString()} ist`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Zu klein: erwartet, dass ${t.origin} ${u}${t.minimum.toString()} ${c.unit} hat`:`Zu klein: erwartet, dass ${t.origin} ${u}${t.minimum.toString()} ist`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Ungültiger String: muss mit "${u.prefix}" beginnen`:u.format==="ends_with"?`Ungültiger String: muss mit "${u.suffix}" enden`:u.format==="includes"?`Ungültiger String: muss "${u.includes}" enthalten`:u.format==="regex"?`Ungültiger String: muss dem Muster ${u.pattern} entsprechen`:`Ungültig: ${r[u.format]??t.format}`}case"not_multiple_of":return`Ungültige Zahl: muss ein Vielfaches von ${t.divisor} sein`;case"unrecognized_keys":return`${t.keys.length>1?"Unbekannte Schlüssel":"Unbekannter Schlüssel"}: ${en(t.keys,", ")}`;case"invalid_key":return`Ungültiger Schlüssel in ${t.origin}`;case"invalid_union":return"Ungültige Eingabe";case"invalid_element":return`Ungültiger Wert in ${t.origin}`;default:return"Ungültige Eingabe"}}};function DE(){return{localeError:AE()}}const wE=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"number";case"object":{if(Array.isArray(n))return"array";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},CE=()=>{const n={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return n[r]??null}const o={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${wE(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${Tn(r.values[0])}`:`Invalid option: expected one of ${en(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",u=e(r.origin);return u?`Too big: expected ${r.origin??"value"} to have ${t}${r.maximum.toString()} ${u.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",u=e(r.origin);return u?`Too small: expected ${r.origin} to have ${t}${r.minimum.toString()} ${u.unit}`:`Too small: expected ${r.origin} to be ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Invalid string: must start with "${t.prefix}"`:t.format==="ends_with"?`Invalid string: must end with "${t.suffix}"`:t.format==="includes"?`Invalid string: must include "${t.includes}"`:t.format==="regex"?`Invalid string: must match pattern ${t.pattern}`:`Invalid ${o[t.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${en(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function iw(){return{localeError:CE()}}const OE=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"nombro";case"object":{if(Array.isArray(n))return"tabelo";if(n===null)return"senvalora";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},IE=()=>{const n={string:{unit:"karaktrojn",verb:"havi"},file:{unit:"bajtojn",verb:"havi"},array:{unit:"elementojn",verb:"havi"},set:{unit:"elementojn",verb:"havi"}};function e(r){return n[r]??null}const o={regex:"enigo",email:"retadreso",url:"URL",emoji:"emoĝio",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datotempo",date:"ISO-dato",time:"ISO-tempo",duration:"ISO-daŭro",ipv4:"IPv4-adreso",ipv6:"IPv6-adreso",cidrv4:"IPv4-rango",cidrv6:"IPv6-rango",base64:"64-ume kodita karaktraro",base64url:"URL-64-ume kodita karaktraro",json_string:"JSON-karaktraro",e164:"E.164-nombro",jwt:"JWT",template_literal:"enigo"};return r=>{switch(r.code){case"invalid_type":return`Nevalida enigo: atendiĝis ${r.expected}, riceviĝis ${OE(r.input)}`;case"invalid_value":return r.values.length===1?`Nevalida enigo: atendiĝis ${Tn(r.values[0])}`:`Nevalida opcio: atendiĝis unu el ${en(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",u=e(r.origin);return u?`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${t}${r.maximum.toString()} ${u.unit??"elementojn"}`:`Tro granda: atendiĝis ke ${r.origin??"valoro"} havu ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",u=e(r.origin);return u?`Tro malgranda: atendiĝis ke ${r.origin} havu ${t}${r.minimum.toString()} ${u.unit}`:`Tro malgranda: atendiĝis ke ${r.origin} estu ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Nevalida karaktraro: devas komenciĝi per "${t.prefix}"`:t.format==="ends_with"?`Nevalida karaktraro: devas finiĝi per "${t.suffix}"`:t.format==="includes"?`Nevalida karaktraro: devas inkluzivi "${t.includes}"`:t.format==="regex"?`Nevalida karaktraro: devas kongrui kun la modelo ${t.pattern}`:`Nevalida ${o[t.format]??r.format}`}case"not_multiple_of":return`Nevalida nombro: devas esti oblo de ${r.divisor}`;case"unrecognized_keys":return`Nekonata${r.keys.length>1?"j":""} ŝlosilo${r.keys.length>1?"j":""}: ${en(r.keys,", ")}`;case"invalid_key":return`Nevalida ŝlosilo en ${r.origin}`;case"invalid_union":return"Nevalida enigo";case"invalid_element":return`Nevalida valoro en ${r.origin}`;default:return"Nevalida enigo"}}};function KE(){return{localeError:IE()}}const xE=()=>{const n={string:{unit:"caracteres",verb:"tener"},file:{unit:"bytes",verb:"tener"},array:{unit:"elementos",verb:"tener"},set:{unit:"elementos",verb:"tener"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"número";case"object":{if(Array.isArray(t))return"arreglo";if(t===null)return"nulo";if(Object.getPrototypeOf(t)!==Object.prototype)return t.constructor.name}}return u},r={regex:"entrada",email:"dirección de correo electrónico",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"fecha y hora ISO",date:"fecha ISO",time:"hora ISO",duration:"duración ISO",ipv4:"dirección IPv4",ipv6:"dirección IPv6",cidrv4:"rango IPv4",cidrv6:"rango IPv6",base64:"cadena codificada en base64",base64url:"URL codificada en base64",json_string:"cadena JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Entrada inválida: se esperaba ${t.expected}, recibido ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrada inválida: se esperaba ${Tn(t.values[0])}`:`Opción inválida: se esperaba una de ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Demasiado grande: se esperaba que ${t.origin??"valor"} tuviera ${u}${t.maximum.toString()} ${c.unit??"elementos"}`:`Demasiado grande: se esperaba que ${t.origin??"valor"} fuera ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Demasiado pequeño: se esperaba que ${t.origin} tuviera ${u}${t.minimum.toString()} ${c.unit}`:`Demasiado pequeño: se esperaba que ${t.origin} fuera ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Cadena inválida: debe comenzar con "${u.prefix}"`:u.format==="ends_with"?`Cadena inválida: debe terminar en "${u.suffix}"`:u.format==="includes"?`Cadena inválida: debe incluir "${u.includes}"`:u.format==="regex"?`Cadena inválida: debe coincidir con el patrón ${u.pattern}`:`Inválido ${r[u.format]??t.format}`}case"not_multiple_of":return`Número inválido: debe ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Llave${t.keys.length>1?"s":""} desconocida${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Llave inválida en ${t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido en ${t.origin}`;default:return"Entrada inválida"}}};function RE(){return{localeError:xE()}}const BE=()=>{const n={string:{unit:"کاراکتر",verb:"داشته باشد"},file:{unit:"بایت",verb:"داشته باشد"},array:{unit:"آیتم",verb:"داشته باشد"},set:{unit:"آیتم",verb:"داشته باشد"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"عدد";case"object":{if(Array.isArray(t))return"آرایه";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ورودی",email:"آدرس ایمیل",url:"URL",emoji:"ایموجی",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"تاریخ و زمان ایزو",date:"تاریخ ایزو",time:"زمان ایزو",duration:"مدت زمان ایزو",ipv4:"IPv4 آدرس",ipv6:"IPv6 آدرس",cidrv4:"IPv4 دامنه",cidrv6:"IPv6 دامنه",base64:"base64-encoded رشته",base64url:"base64url-encoded رشته",json_string:"JSON رشته",e164:"E.164 عدد",jwt:"JWT",template_literal:"ورودی"};return t=>{switch(t.code){case"invalid_type":return`ورودی نامعتبر: می‌بایست ${t.expected} می‌بود، ${o(t.input)} دریافت شد`;case"invalid_value":return t.values.length===1?`ورودی نامعتبر: می‌بایست ${Tn(t.values[0])} می‌بود`:`گزینه نامعتبر: می‌بایست یکی از ${en(t.values,"|")} می‌بود`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`خیلی بزرگ: ${t.origin??"مقدار"} باید ${u}${t.maximum.toString()} ${c.unit??"عنصر"} باشد`:`خیلی بزرگ: ${t.origin??"مقدار"} باید ${u}${t.maximum.toString()} باشد`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`خیلی کوچک: ${t.origin} باید ${u}${t.minimum.toString()} ${c.unit} باشد`:`خیلی کوچک: ${t.origin} باید ${u}${t.minimum.toString()} باشد`}case"invalid_format":{const u=t;return u.format==="starts_with"?`رشته نامعتبر: باید با "${u.prefix}" شروع شود`:u.format==="ends_with"?`رشته نامعتبر: باید با "${u.suffix}" تمام شود`:u.format==="includes"?`رشته نامعتبر: باید شامل "${u.includes}" باشد`:u.format==="regex"?`رشته نامعتبر: باید با الگوی ${u.pattern} مطابقت داشته باشد`:`${r[u.format]??t.format} نامعتبر`}case"not_multiple_of":return`عدد نامعتبر: باید مضرب ${t.divisor} باشد`;case"unrecognized_keys":return`کلید${t.keys.length>1?"های":""} ناشناس: ${en(t.keys,", ")}`;case"invalid_key":return`کلید ناشناس در ${t.origin}`;case"invalid_union":return"ورودی نامعتبر";case"invalid_element":return`مقدار نامعتبر در ${t.origin}`;default:return"ورودی نامعتبر"}}};function PE(){return{localeError:BE()}}const NE=()=>{const n={string:{unit:"merkkiä",subject:"merkkijonon"},file:{unit:"tavua",subject:"tiedoston"},array:{unit:"alkiota",subject:"listan"},set:{unit:"alkiota",subject:"joukon"},number:{unit:"",subject:"luvun"},bigint:{unit:"",subject:"suuren kokonaisluvun"},int:{unit:"",subject:"kokonaisluvun"},date:{unit:"",subject:"päivämäärän"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"säännöllinen lauseke",email:"sähköpostiosoite",url:"URL-osoite",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-aikaleima",date:"ISO-päivämäärä",time:"ISO-aika",duration:"ISO-kesto",ipv4:"IPv4-osoite",ipv6:"IPv6-osoite",cidrv4:"IPv4-alue",cidrv6:"IPv6-alue",base64:"base64-koodattu merkkijono",base64url:"base64url-koodattu merkkijono",json_string:"JSON-merkkijono",e164:"E.164-luku",jwt:"JWT",template_literal:"templaattimerkkijono"};return t=>{switch(t.code){case"invalid_type":return`Virheellinen tyyppi: odotettiin ${t.expected}, oli ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Virheellinen syöte: täytyy olla ${Tn(t.values[0])}`:`Virheellinen valinta: täytyy olla yksi seuraavista: ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Liian suuri: ${c.subject} täytyy olla ${u}${t.maximum.toString()} ${c.unit}`.trim():`Liian suuri: arvon täytyy olla ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Liian pieni: ${c.subject} täytyy olla ${u}${t.minimum.toString()} ${c.unit}`.trim():`Liian pieni: arvon täytyy olla ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Virheellinen syöte: täytyy alkaa "${u.prefix}"`:u.format==="ends_with"?`Virheellinen syöte: täytyy loppua "${u.suffix}"`:u.format==="includes"?`Virheellinen syöte: täytyy sisältää "${u.includes}"`:u.format==="regex"?`Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${u.pattern}`:`Virheellinen ${r[u.format]??t.format}`}case"not_multiple_of":return`Virheellinen luku: täytyy olla luvun ${t.divisor} monikerta`;case"unrecognized_keys":return`${t.keys.length>1?"Tuntemattomat avaimet":"Tuntematon avain"}: ${en(t.keys,", ")}`;case"invalid_key":return"Virheellinen avain tietueessa";case"invalid_union":return"Virheellinen unioni";case"invalid_element":return"Virheellinen arvo joukossa";default:return"Virheellinen syöte"}}};function EE(){return{localeError:NE()}}const HE=()=>{const n={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"nombre";case"object":{if(Array.isArray(t))return"tableau";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"entrée",email:"adresse e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date et heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return t=>{switch(t.code){case"invalid_type":return`Entrée invalide : ${t.expected} attendu, ${o(t.input)} reçu`;case"invalid_value":return t.values.length===1?`Entrée invalide : ${Tn(t.values[0])} attendu`:`Option invalide : une valeur parmi ${en(t.values,"|")} attendue`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Trop grand : ${t.origin??"valeur"} doit ${c.verb} ${u}${t.maximum.toString()} ${c.unit??"élément(s)"}`:`Trop grand : ${t.origin??"valeur"} doit être ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Trop petit : ${t.origin} doit ${c.verb} ${u}${t.minimum.toString()} ${c.unit}`:`Trop petit : ${t.origin} doit être ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Chaîne invalide : doit commencer par "${u.prefix}"`:u.format==="ends_with"?`Chaîne invalide : doit se terminer par "${u.suffix}"`:u.format==="includes"?`Chaîne invalide : doit inclure "${u.includes}"`:u.format==="regex"?`Chaîne invalide : doit correspondre au modèle ${u.pattern}`:`${r[u.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${en(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function GE(){return{localeError:HE()}}const LE=()=>{const n={string:{unit:"caractères",verb:"avoir"},file:{unit:"octets",verb:"avoir"},array:{unit:"éléments",verb:"avoir"},set:{unit:"éléments",verb:"avoir"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"entrée",email:"adresse courriel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"date-heure ISO",date:"date ISO",time:"heure ISO",duration:"durée ISO",ipv4:"adresse IPv4",ipv6:"adresse IPv6",cidrv4:"plage IPv4",cidrv6:"plage IPv6",base64:"chaîne encodée en base64",base64url:"chaîne encodée en base64url",json_string:"chaîne JSON",e164:"numéro E.164",jwt:"JWT",template_literal:"entrée"};return t=>{switch(t.code){case"invalid_type":return`Entrée invalide : attendu ${t.expected}, reçu ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrée invalide : attendu ${Tn(t.values[0])}`:`Option invalide : attendu l'une des valeurs suivantes ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"≤":"<",c=e(t.origin);return c?`Trop grand : attendu que ${t.origin??"la valeur"} ait ${u}${t.maximum.toString()} ${c.unit}`:`Trop grand : attendu que ${t.origin??"la valeur"} soit ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?"≥":">",c=e(t.origin);return c?`Trop petit : attendu que ${t.origin} ait ${u}${t.minimum.toString()} ${c.unit}`:`Trop petit : attendu que ${t.origin} soit ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Chaîne invalide : doit commencer par "${u.prefix}"`:u.format==="ends_with"?`Chaîne invalide : doit se terminer par "${u.suffix}"`:u.format==="includes"?`Chaîne invalide : doit inclure "${u.includes}"`:u.format==="regex"?`Chaîne invalide : doit correspondre au motif ${u.pattern}`:`${r[u.format]??t.format} invalide`}case"not_multiple_of":return`Nombre invalide : doit être un multiple de ${t.divisor}`;case"unrecognized_keys":return`Clé${t.keys.length>1?"s":""} non reconnue${t.keys.length>1?"s":""} : ${en(t.keys,", ")}`;case"invalid_key":return`Clé invalide dans ${t.origin}`;case"invalid_union":return"Entrée invalide";case"invalid_element":return`Valeur invalide dans ${t.origin}`;default:return"Entrée invalide"}}};function _E(){return{localeError:LE()}}const jE=()=>{const n={string:{unit:"אותיות",verb:"לכלול"},file:{unit:"בייטים",verb:"לכלול"},array:{unit:"פריטים",verb:"לכלול"},set:{unit:"פריטים",verb:"לכלול"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"קלט",email:"כתובת אימייל",url:"כתובת רשת",emoji:"אימוג'י",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"תאריך וזמן ISO",date:"תאריך ISO",time:"זמן ISO",duration:"משך זמן ISO",ipv4:"כתובת IPv4",ipv6:"כתובת IPv6",cidrv4:"טווח IPv4",cidrv6:"טווח IPv6",base64:"מחרוזת בבסיס 64",base64url:"מחרוזת בבסיס 64 לכתובות רשת",json_string:"מחרוזת JSON",e164:"מספר E.164",jwt:"JWT",template_literal:"קלט"};return t=>{switch(t.code){case"invalid_type":return`קלט לא תקין: צריך ${t.expected}, התקבל ${o(t.input)}`;case"invalid_value":return t.values.length===1?`קלט לא תקין: צריך ${Tn(t.values[0])}`:`קלט לא תקין: צריך אחת מהאפשרויות  ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`גדול מדי: ${t.origin??"value"} צריך להיות ${u}${t.maximum.toString()} ${c.unit??"elements"}`:`גדול מדי: ${t.origin??"value"} צריך להיות ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`קטן מדי: ${t.origin} צריך להיות ${u}${t.minimum.toString()} ${c.unit}`:`קטן מדי: ${t.origin} צריך להיות ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`מחרוזת לא תקינה: חייבת להתחיל ב"${u.prefix}"`:u.format==="ends_with"?`מחרוזת לא תקינה: חייבת להסתיים ב "${u.suffix}"`:u.format==="includes"?`מחרוזת לא תקינה: חייבת לכלול "${u.includes}"`:u.format==="regex"?`מחרוזת לא תקינה: חייבת להתאים לתבנית ${u.pattern}`:`${r[u.format]??t.format} לא תקין`}case"not_multiple_of":return`מספר לא תקין: חייב להיות מכפלה של ${t.divisor}`;case"unrecognized_keys":return`מפתח${t.keys.length>1?"ות":""} לא מזוה${t.keys.length>1?"ים":"ה"}: ${en(t.keys,", ")}`;case"invalid_key":return`מפתח לא תקין ב${t.origin}`;case"invalid_union":return"קלט לא תקין";case"invalid_element":return`ערך לא תקין ב${t.origin}`;default:return"קלט לא תקין"}}};function zE(){return{localeError:jE()}}const $E=()=>{const n={string:{unit:"karakter",verb:"legyen"},file:{unit:"byte",verb:"legyen"},array:{unit:"elem",verb:"legyen"},set:{unit:"elem",verb:"legyen"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"szám";case"object":{if(Array.isArray(t))return"tömb";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"bemenet",email:"email cím",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO időbélyeg",date:"ISO dátum",time:"ISO idő",duration:"ISO időintervallum",ipv4:"IPv4 cím",ipv6:"IPv6 cím",cidrv4:"IPv4 tartomány",cidrv6:"IPv6 tartomány",base64:"base64-kódolt string",base64url:"base64url-kódolt string",json_string:"JSON string",e164:"E.164 szám",jwt:"JWT",template_literal:"bemenet"};return t=>{switch(t.code){case"invalid_type":return`Érvénytelen bemenet: a várt érték ${t.expected}, a kapott érték ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Érvénytelen bemenet: a várt érték ${Tn(t.values[0])}`:`Érvénytelen opció: valamelyik érték várt ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Túl nagy: ${t.origin??"érték"} mérete túl nagy ${u}${t.maximum.toString()} ${c.unit??"elem"}`:`Túl nagy: a bemeneti érték ${t.origin??"érték"} túl nagy: ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Túl kicsi: a bemeneti érték ${t.origin} mérete túl kicsi ${u}${t.minimum.toString()} ${c.unit}`:`Túl kicsi: a bemeneti érték ${t.origin} túl kicsi ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Érvénytelen string: "${u.prefix}" értékkel kell kezdődnie`:u.format==="ends_with"?`Érvénytelen string: "${u.suffix}" értékkel kell végződnie`:u.format==="includes"?`Érvénytelen string: "${u.includes}" értéket kell tartalmaznia`:u.format==="regex"?`Érvénytelen string: ${u.pattern} mintának kell megfelelnie`:`Érvénytelen ${r[u.format]??t.format}`}case"not_multiple_of":return`Érvénytelen szám: ${t.divisor} többszörösének kell lennie`;case"unrecognized_keys":return`Ismeretlen kulcs${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Érvénytelen kulcs ${t.origin}`;case"invalid_union":return"Érvénytelen bemenet";case"invalid_element":return`Érvénytelen érték: ${t.origin}`;default:return"Érvénytelen bemenet"}}};function FE(){return{localeError:$E()}}const UE=()=>{const n={string:{unit:"karakter",verb:"memiliki"},file:{unit:"byte",verb:"memiliki"},array:{unit:"item",verb:"memiliki"},set:{unit:"item",verb:"memiliki"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"input",email:"alamat email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tanggal dan waktu format ISO",date:"tanggal format ISO",time:"jam format ISO",duration:"durasi format ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"rentang alamat IPv4",cidrv6:"rentang alamat IPv6",base64:"string dengan enkode base64",base64url:"string dengan enkode base64url",json_string:"string JSON",e164:"angka E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input tidak valid: diharapkan ${t.expected}, diterima ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input tidak valid: diharapkan ${Tn(t.values[0])}`:`Pilihan tidak valid: diharapkan salah satu dari ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Terlalu besar: diharapkan ${t.origin??"value"} memiliki ${u}${t.maximum.toString()} ${c.unit??"elemen"}`:`Terlalu besar: diharapkan ${t.origin??"value"} menjadi ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Terlalu kecil: diharapkan ${t.origin} memiliki ${u}${t.minimum.toString()} ${c.unit}`:`Terlalu kecil: diharapkan ${t.origin} menjadi ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`String tidak valid: harus dimulai dengan "${u.prefix}"`:u.format==="ends_with"?`String tidak valid: harus berakhir dengan "${u.suffix}"`:u.format==="includes"?`String tidak valid: harus menyertakan "${u.includes}"`:u.format==="regex"?`String tidak valid: harus sesuai pola ${u.pattern}`:`${r[u.format]??t.format} tidak valid`}case"not_multiple_of":return`Angka tidak valid: harus kelipatan dari ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali ${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Kunci tidak valid di ${t.origin}`;case"invalid_union":return"Input tidak valid";case"invalid_element":return`Nilai tidak valid di ${t.origin}`;default:return"Input tidak valid"}}};function VE(){return{localeError:UE()}}const YE=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"númer";case"object":{if(Array.isArray(n))return"fylki";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},WE=()=>{const n={string:{unit:"stafi",verb:"að hafa"},file:{unit:"bæti",verb:"að hafa"},array:{unit:"hluti",verb:"að hafa"},set:{unit:"hluti",verb:"að hafa"}};function e(r){return n[r]??null}const o={regex:"gildi",email:"netfang",url:"vefslóð",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dagsetning og tími",date:"ISO dagsetning",time:"ISO tími",duration:"ISO tímalengd",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded strengur",base64url:"base64url-encoded strengur",json_string:"JSON strengur",e164:"E.164 tölugildi",jwt:"JWT",template_literal:"gildi"};return r=>{switch(r.code){case"invalid_type":return`Rangt gildi: Þú slóst inn ${YE(r.input)} þar sem á að vera ${r.expected}`;case"invalid_value":return r.values.length===1?`Rangt gildi: gert ráð fyrir ${Tn(r.values[0])}`:`Ógilt val: má vera eitt af eftirfarandi ${en(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",u=e(r.origin);return u?`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} hafi ${t}${r.maximum.toString()} ${u.unit??"hluti"}`:`Of stórt: gert er ráð fyrir að ${r.origin??"gildi"} sé ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",u=e(r.origin);return u?`Of lítið: gert er ráð fyrir að ${r.origin} hafi ${t}${r.minimum.toString()} ${u.unit}`:`Of lítið: gert er ráð fyrir að ${r.origin} sé ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Ógildur strengur: verður að byrja á "${t.prefix}"`:t.format==="ends_with"?`Ógildur strengur: verður að enda á "${t.suffix}"`:t.format==="includes"?`Ógildur strengur: verður að innihalda "${t.includes}"`:t.format==="regex"?`Ógildur strengur: verður að fylgja mynstri ${t.pattern}`:`Rangt ${o[t.format]??r.format}`}case"not_multiple_of":return`Röng tala: verður að vera margfeldi af ${r.divisor}`;case"unrecognized_keys":return`Óþekkt ${r.keys.length>1?"ir lyklar":"ur lykill"}: ${en(r.keys,", ")}`;case"invalid_key":return`Rangur lykill í ${r.origin}`;case"invalid_union":return"Rangt gildi";case"invalid_element":return`Rangt gildi í ${r.origin}`;default:return"Rangt gildi"}}};function ZE(){return{localeError:WE()}}const JE=()=>{const n={string:{unit:"caratteri",verb:"avere"},file:{unit:"byte",verb:"avere"},array:{unit:"elementi",verb:"avere"},set:{unit:"elementi",verb:"avere"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"numero";case"object":{if(Array.isArray(t))return"vettore";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"input",email:"indirizzo email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e ora ISO",date:"data ISO",time:"ora ISO",duration:"durata ISO",ipv4:"indirizzo IPv4",ipv6:"indirizzo IPv6",cidrv4:"intervallo IPv4",cidrv6:"intervallo IPv6",base64:"stringa codificata in base64",base64url:"URL codificata in base64",json_string:"stringa JSON",e164:"numero E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input non valido: atteso ${t.expected}, ricevuto ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input non valido: atteso ${Tn(t.values[0])}`:`Opzione non valida: atteso uno tra ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Troppo grande: ${t.origin??"valore"} deve avere ${u}${t.maximum.toString()} ${c.unit??"elementi"}`:`Troppo grande: ${t.origin??"valore"} deve essere ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Troppo piccolo: ${t.origin} deve avere ${u}${t.minimum.toString()} ${c.unit}`:`Troppo piccolo: ${t.origin} deve essere ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Stringa non valida: deve iniziare con "${u.prefix}"`:u.format==="ends_with"?`Stringa non valida: deve terminare con "${u.suffix}"`:u.format==="includes"?`Stringa non valida: deve includere "${u.includes}"`:u.format==="regex"?`Stringa non valida: deve corrispondere al pattern ${u.pattern}`:`Invalid ${r[u.format]??t.format}`}case"not_multiple_of":return`Numero non valido: deve essere un multiplo di ${t.divisor}`;case"unrecognized_keys":return`Chiav${t.keys.length>1?"i":"e"} non riconosciut${t.keys.length>1?"e":"a"}: ${en(t.keys,", ")}`;case"invalid_key":return`Chiave non valida in ${t.origin}`;case"invalid_union":return"Input non valido";case"invalid_element":return`Valore non valido in ${t.origin}`;default:return"Input non valido"}}};function XE(){return{localeError:JE()}}const qE=()=>{const n={string:{unit:"文字",verb:"である"},file:{unit:"バイト",verb:"である"},array:{unit:"要素",verb:"である"},set:{unit:"要素",verb:"である"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"数値";case"object":{if(Array.isArray(t))return"配列";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"入力値",email:"メールアドレス",url:"URL",emoji:"絵文字",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日時",date:"ISO日付",time:"ISO時刻",duration:"ISO期間",ipv4:"IPv4アドレス",ipv6:"IPv6アドレス",cidrv4:"IPv4範囲",cidrv6:"IPv6範囲",base64:"base64エンコード文字列",base64url:"base64urlエンコード文字列",json_string:"JSON文字列",e164:"E.164番号",jwt:"JWT",template_literal:"入力値"};return t=>{switch(t.code){case"invalid_type":return`無効な入力: ${t.expected}が期待されましたが、${o(t.input)}が入力されました`;case"invalid_value":return t.values.length===1?`無効な入力: ${Tn(t.values[0])}が期待されました`:`無効な選択: ${en(t.values,"、")}のいずれかである必要があります`;case"too_big":{const u=t.inclusive?"以下である":"より小さい",c=e(t.origin);return c?`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${c.unit??"要素"}${u}必要があります`:`大きすぎる値: ${t.origin??"値"}は${t.maximum.toString()}${u}必要があります`}case"too_small":{const u=t.inclusive?"以上である":"より大きい",c=e(t.origin);return c?`小さすぎる値: ${t.origin}は${t.minimum.toString()}${c.unit}${u}必要があります`:`小さすぎる値: ${t.origin}は${t.minimum.toString()}${u}必要があります`}case"invalid_format":{const u=t;return u.format==="starts_with"?`無効な文字列: "${u.prefix}"で始まる必要があります`:u.format==="ends_with"?`無効な文字列: "${u.suffix}"で終わる必要があります`:u.format==="includes"?`無効な文字列: "${u.includes}"を含む必要があります`:u.format==="regex"?`無効な文字列: パターン${u.pattern}に一致する必要があります`:`無効な${r[u.format]??t.format}`}case"not_multiple_of":return`無効な数値: ${t.divisor}の倍数である必要があります`;case"unrecognized_keys":return`認識されていないキー${t.keys.length>1?"群":""}: ${en(t.keys,"、")}`;case"invalid_key":return`${t.origin}内の無効なキー`;case"invalid_union":return"無効な入力";case"invalid_element":return`${t.origin}内の無効な値`;default:return"無効な入力"}}};function QE(){return{localeError:qE()}}const nH=()=>{const n={string:{unit:"តួអក្សរ",verb:"គួរមាន"},file:{unit:"បៃ",verb:"គួរមាន"},array:{unit:"ធាតុ",verb:"គួរមាន"},set:{unit:"ធាតុ",verb:"គួរមាន"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"មិនមែនជាលេខ (NaN)":"លេខ";case"object":{if(Array.isArray(t))return"អារេ (Array)";if(t===null)return"គ្មានតម្លៃ (null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ទិន្នន័យបញ្ចូល",email:"អាសយដ្ឋានអ៊ីមែល",url:"URL",emoji:"សញ្ញាអារម្មណ៍",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"កាលបរិច្ឆេទ និងម៉ោង ISO",date:"កាលបរិច្ឆេទ ISO",time:"ម៉ោង ISO",duration:"រយៈពេល ISO",ipv4:"អាសយដ្ឋាន IPv4",ipv6:"អាសយដ្ឋាន IPv6",cidrv4:"ដែនអាសយដ្ឋាន IPv4",cidrv6:"ដែនអាសយដ្ឋាន IPv6",base64:"ខ្សែអក្សរអ៊ិកូដ base64",base64url:"ខ្សែអក្សរអ៊ិកូដ base64url",json_string:"ខ្សែអក្សរ JSON",e164:"លេខ E.164",jwt:"JWT",template_literal:"ទិន្នន័យបញ្ចូល"};return t=>{switch(t.code){case"invalid_type":return`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${t.expected} ប៉ុន្តែទទួលបាន ${o(t.input)}`;case"invalid_value":return t.values.length===1?`ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${Tn(t.values[0])}`:`ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${u} ${t.maximum.toString()} ${c.unit??"ធាតុ"}`:`ធំពេក៖ ត្រូវការ ${t.origin??"តម្លៃ"} ${u} ${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`តូចពេក៖ ត្រូវការ ${t.origin} ${u} ${t.minimum.toString()} ${c.unit}`:`តូចពេក៖ ត្រូវការ ${t.origin} ${u} ${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${u.prefix}"`:u.format==="ends_with"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${u.suffix}"`:u.format==="includes"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${u.includes}"`:u.format==="regex"?`ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${u.pattern}`:`មិនត្រឹមត្រូវ៖ ${r[u.format]??t.format}`}case"not_multiple_of":return`លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${t.divisor}`;case"unrecognized_keys":return`រកឃើញសោមិនស្គាល់៖ ${en(t.keys,", ")}`;case"invalid_key":return`សោមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;case"invalid_union":return"ទិន្នន័យមិនត្រឹមត្រូវ";case"invalid_element":return`ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;default:return"ទិន្នន័យមិនត្រឹមត្រូវ"}}};function eH(){return{localeError:nH()}}const tH=()=>{const n={string:{unit:"문자",verb:"to have"},file:{unit:"바이트",verb:"to have"},array:{unit:"개",verb:"to have"},set:{unit:"개",verb:"to have"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"입력",email:"이메일 주소",url:"URL",emoji:"이모지",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 날짜시간",date:"ISO 날짜",time:"ISO 시간",duration:"ISO 기간",ipv4:"IPv4 주소",ipv6:"IPv6 주소",cidrv4:"IPv4 범위",cidrv6:"IPv6 범위",base64:"base64 인코딩 문자열",base64url:"base64url 인코딩 문자열",json_string:"JSON 문자열",e164:"E.164 번호",jwt:"JWT",template_literal:"입력"};return t=>{switch(t.code){case"invalid_type":return`잘못된 입력: 예상 타입은 ${t.expected}, 받은 타입은 ${o(t.input)}입니다`;case"invalid_value":return t.values.length===1?`잘못된 입력: 값은 ${Tn(t.values[0])} 이어야 합니다`:`잘못된 옵션: ${en(t.values,"또는 ")} 중 하나여야 합니다`;case"too_big":{const u=t.inclusive?"이하":"미만",c=u==="미만"?"이어야 합니다":"여야 합니다",m=e(t.origin),h=(m==null?void 0:m.unit)??"요소";return m?`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()}${h} ${u}${c}`:`${t.origin??"값"}이 너무 큽니다: ${t.maximum.toString()} ${u}${c}`}case"too_small":{const u=t.inclusive?"이상":"초과",c=u==="이상"?"이어야 합니다":"여야 합니다",m=e(t.origin),h=(m==null?void 0:m.unit)??"요소";return m?`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()}${h} ${u}${c}`:`${t.origin??"값"}이 너무 작습니다: ${t.minimum.toString()} ${u}${c}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`잘못된 문자열: "${u.prefix}"(으)로 시작해야 합니다`:u.format==="ends_with"?`잘못된 문자열: "${u.suffix}"(으)로 끝나야 합니다`:u.format==="includes"?`잘못된 문자열: "${u.includes}"을(를) 포함해야 합니다`:u.format==="regex"?`잘못된 문자열: 정규식 ${u.pattern} 패턴과 일치해야 합니다`:`잘못된 ${r[u.format]??t.format}`}case"not_multiple_of":return`잘못된 숫자: ${t.divisor}의 배수여야 합니다`;case"unrecognized_keys":return`인식할 수 없는 키: ${en(t.keys,", ")}`;case"invalid_key":return`잘못된 키: ${t.origin}`;case"invalid_union":return"잘못된 입력";case"invalid_element":return`잘못된 값: ${t.origin}`;default:return"잘못된 입력"}}};function aH(){return{localeError:tH()}}const iH=()=>{const n={string:{unit:"знаци",verb:"да имаат"},file:{unit:"бајти",verb:"да имаат"},array:{unit:"ставки",verb:"да имаат"},set:{unit:"ставки",verb:"да имаат"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"број";case"object":{if(Array.isArray(t))return"низа";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"внес",email:"адреса на е-пошта",url:"URL",emoji:"емоџи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO датум и време",date:"ISO датум",time:"ISO време",duration:"ISO времетраење",ipv4:"IPv4 адреса",ipv6:"IPv6 адреса",cidrv4:"IPv4 опсег",cidrv6:"IPv6 опсег",base64:"base64-енкодирана низа",base64url:"base64url-енкодирана низа",json_string:"JSON низа",e164:"E.164 број",jwt:"JWT",template_literal:"внес"};return t=>{switch(t.code){case"invalid_type":return`Грешен внес: се очекува ${t.expected}, примено ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Invalid input: expected ${Tn(t.values[0])}`:`Грешана опција: се очекува една ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Премногу голем: се очекува ${t.origin??"вредноста"} да има ${u}${t.maximum.toString()} ${c.unit??"елементи"}`:`Премногу голем: се очекува ${t.origin??"вредноста"} да биде ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Премногу мал: се очекува ${t.origin} да има ${u}${t.minimum.toString()} ${c.unit}`:`Премногу мал: се очекува ${t.origin} да биде ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Неважечка низа: мора да започнува со "${u.prefix}"`:u.format==="ends_with"?`Неважечка низа: мора да завршува со "${u.suffix}"`:u.format==="includes"?`Неважечка низа: мора да вклучува "${u.includes}"`:u.format==="regex"?`Неважечка низа: мора да одгоара на патернот ${u.pattern}`:`Invalid ${r[u.format]??t.format}`}case"not_multiple_of":return`Грешен број: мора да биде делив со ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Непрепознаени клучеви":"Непрепознаен клуч"}: ${en(t.keys,", ")}`;case"invalid_key":return`Грешен клуч во ${t.origin}`;case"invalid_union":return"Грешен внес";case"invalid_element":return`Грешна вредност во ${t.origin}`;default:return"Грешен внес"}}};function oH(){return{localeError:iH()}}const rH=()=>{const n={string:{unit:"aksara",verb:"mempunyai"},file:{unit:"bait",verb:"mempunyai"},array:{unit:"elemen",verb:"mempunyai"},set:{unit:"elemen",verb:"mempunyai"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"nombor";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"input",email:"alamat e-mel",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"tarikh masa ISO",date:"tarikh ISO",time:"masa ISO",duration:"tempoh ISO",ipv4:"alamat IPv4",ipv6:"alamat IPv6",cidrv4:"julat IPv4",cidrv6:"julat IPv6",base64:"string dikodkan base64",base64url:"string dikodkan base64url",json_string:"string JSON",e164:"nombor E.164",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Input tidak sah: dijangka ${t.expected}, diterima ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Input tidak sah: dijangka ${Tn(t.values[0])}`:`Pilihan tidak sah: dijangka salah satu daripada ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Terlalu besar: dijangka ${t.origin??"nilai"} ${c.verb} ${u}${t.maximum.toString()} ${c.unit??"elemen"}`:`Terlalu besar: dijangka ${t.origin??"nilai"} adalah ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Terlalu kecil: dijangka ${t.origin} ${c.verb} ${u}${t.minimum.toString()} ${c.unit}`:`Terlalu kecil: dijangka ${t.origin} adalah ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`String tidak sah: mesti bermula dengan "${u.prefix}"`:u.format==="ends_with"?`String tidak sah: mesti berakhir dengan "${u.suffix}"`:u.format==="includes"?`String tidak sah: mesti mengandungi "${u.includes}"`:u.format==="regex"?`String tidak sah: mesti sepadan dengan corak ${u.pattern}`:`${r[u.format]??t.format} tidak sah`}case"not_multiple_of":return`Nombor tidak sah: perlu gandaan ${t.divisor}`;case"unrecognized_keys":return`Kunci tidak dikenali: ${en(t.keys,", ")}`;case"invalid_key":return`Kunci tidak sah dalam ${t.origin}`;case"invalid_union":return"Input tidak sah";case"invalid_element":return`Nilai tidak sah dalam ${t.origin}`;default:return"Input tidak sah"}}};function uH(){return{localeError:rH()}}const sH=()=>{const n={string:{unit:"tekens"},file:{unit:"bytes"},array:{unit:"elementen"},set:{unit:"elementen"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"getal";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"invoer",email:"emailadres",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum en tijd",date:"ISO datum",time:"ISO tijd",duration:"ISO duur",ipv4:"IPv4-adres",ipv6:"IPv6-adres",cidrv4:"IPv4-bereik",cidrv6:"IPv6-bereik",base64:"base64-gecodeerde tekst",base64url:"base64 URL-gecodeerde tekst",json_string:"JSON string",e164:"E.164-nummer",jwt:"JWT",template_literal:"invoer"};return t=>{switch(t.code){case"invalid_type":return`Ongeldige invoer: verwacht ${t.expected}, ontving ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ongeldige invoer: verwacht ${Tn(t.values[0])}`:`Ongeldige optie: verwacht één van ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Te lang: verwacht dat ${t.origin??"waarde"} ${u}${t.maximum.toString()} ${c.unit??"elementen"} bevat`:`Te lang: verwacht dat ${t.origin??"waarde"} ${u}${t.maximum.toString()} is`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Te kort: verwacht dat ${t.origin} ${u}${t.minimum.toString()} ${c.unit} bevat`:`Te kort: verwacht dat ${t.origin} ${u}${t.minimum.toString()} is`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Ongeldige tekst: moet met "${u.prefix}" beginnen`:u.format==="ends_with"?`Ongeldige tekst: moet op "${u.suffix}" eindigen`:u.format==="includes"?`Ongeldige tekst: moet "${u.includes}" bevatten`:u.format==="regex"?`Ongeldige tekst: moet overeenkomen met patroon ${u.pattern}`:`Ongeldig: ${r[u.format]??t.format}`}case"not_multiple_of":return`Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;case"unrecognized_keys":return`Onbekende key${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Ongeldige key in ${t.origin}`;case"invalid_union":return"Ongeldige invoer";case"invalid_element":return`Ongeldige waarde in ${t.origin}`;default:return"Ongeldige invoer"}}};function lH(){return{localeError:sH()}}const cH=()=>{const n={string:{unit:"tegn",verb:"å ha"},file:{unit:"bytes",verb:"å ha"},array:{unit:"elementer",verb:"å inneholde"},set:{unit:"elementer",verb:"å inneholde"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"tall";case"object":{if(Array.isArray(t))return"liste";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"input",email:"e-postadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkeslett",date:"ISO-dato",time:"ISO-klokkeslett",duration:"ISO-varighet",ipv4:"IPv4-område",ipv6:"IPv6-område",cidrv4:"IPv4-spekter",cidrv6:"IPv6-spekter",base64:"base64-enkodet streng",base64url:"base64url-enkodet streng",json_string:"JSON-streng",e164:"E.164-nummer",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`Ugyldig input: forventet ${t.expected}, fikk ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ugyldig verdi: forventet ${Tn(t.values[0])}`:`Ugyldig valg: forventet en av ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`For stor(t): forventet ${t.origin??"value"} til å ha ${u}${t.maximum.toString()} ${c.unit??"elementer"}`:`For stor(t): forventet ${t.origin??"value"} til å ha ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`For lite(n): forventet ${t.origin} til å ha ${u}${t.minimum.toString()} ${c.unit}`:`For lite(n): forventet ${t.origin} til å ha ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Ugyldig streng: må starte med "${u.prefix}"`:u.format==="ends_with"?`Ugyldig streng: må ende med "${u.suffix}"`:u.format==="includes"?`Ugyldig streng: må inneholde "${u.includes}"`:u.format==="regex"?`Ugyldig streng: må matche mønsteret ${u.pattern}`:`Ugyldig ${r[u.format]??t.format}`}case"not_multiple_of":return`Ugyldig tall: må være et multiplum av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Ukjente nøkler":"Ukjent nøkkel"}: ${en(t.keys,", ")}`;case"invalid_key":return`Ugyldig nøkkel i ${t.origin}`;case"invalid_union":return"Ugyldig input";case"invalid_element":return`Ugyldig verdi i ${t.origin}`;default:return"Ugyldig input"}}};function hH(){return{localeError:cH()}}const dH=()=>{const n={string:{unit:"harf",verb:"olmalıdır"},file:{unit:"bayt",verb:"olmalıdır"},array:{unit:"unsur",verb:"olmalıdır"},set:{unit:"unsur",verb:"olmalıdır"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"numara";case"object":{if(Array.isArray(t))return"saf";if(t===null)return"gayb";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"giren",email:"epostagâh",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO hengâmı",date:"ISO tarihi",time:"ISO zamanı",duration:"ISO müddeti",ipv4:"IPv4 nişânı",ipv6:"IPv6 nişânı",cidrv4:"IPv4 menzili",cidrv6:"IPv6 menzili",base64:"base64-şifreli metin",base64url:"base64url-şifreli metin",json_string:"JSON metin",e164:"E.164 sayısı",jwt:"JWT",template_literal:"giren"};return t=>{switch(t.code){case"invalid_type":return`Fâsit giren: umulan ${t.expected}, alınan ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Fâsit giren: umulan ${Tn(t.values[0])}`:`Fâsit tercih: mûteberler ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Fazla büyük: ${t.origin??"value"}, ${u}${t.maximum.toString()} ${c.unit??"elements"} sahip olmalıydı.`:`Fazla büyük: ${t.origin??"value"}, ${u}${t.maximum.toString()} olmalıydı.`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Fazla küçük: ${t.origin}, ${u}${t.minimum.toString()} ${c.unit} sahip olmalıydı.`:`Fazla küçük: ${t.origin}, ${u}${t.minimum.toString()} olmalıydı.`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Fâsit metin: "${u.prefix}" ile başlamalı.`:u.format==="ends_with"?`Fâsit metin: "${u.suffix}" ile bitmeli.`:u.format==="includes"?`Fâsit metin: "${u.includes}" ihtivâ etmeli.`:u.format==="regex"?`Fâsit metin: ${u.pattern} nakşına uymalı.`:`Fâsit ${r[u.format]??t.format}`}case"not_multiple_of":return`Fâsit sayı: ${t.divisor} katı olmalıydı.`;case"unrecognized_keys":return`Tanınmayan anahtar ${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`${t.origin} için tanınmayan anahtar var.`;case"invalid_union":return"Giren tanınamadı.";case"invalid_element":return`${t.origin} için tanınmayan kıymet var.`;default:return"Kıymet tanınamadı."}}};function fH(){return{localeError:dH()}}const mH=()=>{const n={string:{unit:"توکي",verb:"ولري"},file:{unit:"بایټس",verb:"ولري"},array:{unit:"توکي",verb:"ولري"},set:{unit:"توکي",verb:"ولري"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"عدد";case"object":{if(Array.isArray(t))return"ارې";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ورودي",email:"بریښنالیک",url:"یو آر ال",emoji:"ایموجي",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"نیټه او وخت",date:"نېټه",time:"وخت",duration:"موده",ipv4:"د IPv4 پته",ipv6:"د IPv6 پته",cidrv4:"د IPv4 ساحه",cidrv6:"د IPv6 ساحه",base64:"base64-encoded متن",base64url:"base64url-encoded متن",json_string:"JSON متن",e164:"د E.164 شمېره",jwt:"JWT",template_literal:"ورودي"};return t=>{switch(t.code){case"invalid_type":return`ناسم ورودي: باید ${t.expected} وای, مګر ${o(t.input)} ترلاسه شو`;case"invalid_value":return t.values.length===1?`ناسم ورودي: باید ${Tn(t.values[0])} وای`:`ناسم انتخاب: باید یو له ${en(t.values,"|")} څخه وای`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`ډیر لوی: ${t.origin??"ارزښت"} باید ${u}${t.maximum.toString()} ${c.unit??"عنصرونه"} ولري`:`ډیر لوی: ${t.origin??"ارزښت"} باید ${u}${t.maximum.toString()} وي`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`ډیر کوچنی: ${t.origin} باید ${u}${t.minimum.toString()} ${c.unit} ولري`:`ډیر کوچنی: ${t.origin} باید ${u}${t.minimum.toString()} وي`}case"invalid_format":{const u=t;return u.format==="starts_with"?`ناسم متن: باید د "${u.prefix}" سره پیل شي`:u.format==="ends_with"?`ناسم متن: باید د "${u.suffix}" سره پای ته ورسيږي`:u.format==="includes"?`ناسم متن: باید "${u.includes}" ولري`:u.format==="regex"?`ناسم متن: باید د ${u.pattern} سره مطابقت ولري`:`${r[u.format]??t.format} ناسم دی`}case"not_multiple_of":return`ناسم عدد: باید د ${t.divisor} مضرب وي`;case"unrecognized_keys":return`ناسم ${t.keys.length>1?"کلیډونه":"کلیډ"}: ${en(t.keys,", ")}`;case"invalid_key":return`ناسم کلیډ په ${t.origin} کې`;case"invalid_union":return"ناسمه ورودي";case"invalid_element":return`ناسم عنصر په ${t.origin} کې`;default:return"ناسمه ورودي"}}};function gH(){return{localeError:mH()}}const SH=()=>{const n={string:{unit:"znaków",verb:"mieć"},file:{unit:"bajtów",verb:"mieć"},array:{unit:"elementów",verb:"mieć"},set:{unit:"elementów",verb:"mieć"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"liczba";case"object":{if(Array.isArray(t))return"tablica";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"wyrażenie",email:"adres email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i godzina w formacie ISO",date:"data w formacie ISO",time:"godzina w formacie ISO",duration:"czas trwania ISO",ipv4:"adres IPv4",ipv6:"adres IPv6",cidrv4:"zakres IPv4",cidrv6:"zakres IPv6",base64:"ciąg znaków zakodowany w formacie base64",base64url:"ciąg znaków zakodowany w formacie base64url",json_string:"ciąg znaków w formacie JSON",e164:"liczba E.164",jwt:"JWT",template_literal:"wejście"};return t=>{switch(t.code){case"invalid_type":return`Nieprawidłowe dane wejściowe: oczekiwano ${t.expected}, otrzymano ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Nieprawidłowe dane wejściowe: oczekiwano ${Tn(t.values[0])}`:`Nieprawidłowa opcja: oczekiwano jednej z wartości ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Za duża wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${u}${t.maximum.toString()} ${c.unit??"elementów"}`:`Zbyt duż(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Za mała wartość: oczekiwano, że ${t.origin??"wartość"} będzie mieć ${u}${t.minimum.toString()} ${c.unit??"elementów"}`:`Zbyt mał(y/a/e): oczekiwano, że ${t.origin??"wartość"} będzie wynosić ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Nieprawidłowy ciąg znaków: musi zaczynać się od "${u.prefix}"`:u.format==="ends_with"?`Nieprawidłowy ciąg znaków: musi kończyć się na "${u.suffix}"`:u.format==="includes"?`Nieprawidłowy ciąg znaków: musi zawierać "${u.includes}"`:u.format==="regex"?`Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${u.pattern}`:`Nieprawidłow(y/a/e) ${r[u.format]??t.format}`}case"not_multiple_of":return`Nieprawidłowa liczba: musi być wielokrotnością ${t.divisor}`;case"unrecognized_keys":return`Nierozpoznane klucze${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Nieprawidłowy klucz w ${t.origin}`;case"invalid_union":return"Nieprawidłowe dane wejściowe";case"invalid_element":return`Nieprawidłowa wartość w ${t.origin}`;default:return"Nieprawidłowe dane wejściowe"}}};function pH(){return{localeError:SH()}}const yH=()=>{const n={string:{unit:"caracteres",verb:"ter"},file:{unit:"bytes",verb:"ter"},array:{unit:"itens",verb:"ter"},set:{unit:"itens",verb:"ter"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"número";case"object":{if(Array.isArray(t))return"array";if(t===null)return"nulo";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"padrão",email:"endereço de e-mail",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data e hora ISO",date:"data ISO",time:"hora ISO",duration:"duração ISO",ipv4:"endereço IPv4",ipv6:"endereço IPv6",cidrv4:"faixa de IPv4",cidrv6:"faixa de IPv6",base64:"texto codificado em base64",base64url:"URL codificada em base64",json_string:"texto JSON",e164:"número E.164",jwt:"JWT",template_literal:"entrada"};return t=>{switch(t.code){case"invalid_type":return`Tipo inválido: esperado ${t.expected}, recebido ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Entrada inválida: esperado ${Tn(t.values[0])}`:`Opção inválida: esperada uma das ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Muito grande: esperado que ${t.origin??"valor"} tivesse ${u}${t.maximum.toString()} ${c.unit??"elementos"}`:`Muito grande: esperado que ${t.origin??"valor"} fosse ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Muito pequeno: esperado que ${t.origin} tivesse ${u}${t.minimum.toString()} ${c.unit}`:`Muito pequeno: esperado que ${t.origin} fosse ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Texto inválido: deve começar com "${u.prefix}"`:u.format==="ends_with"?`Texto inválido: deve terminar com "${u.suffix}"`:u.format==="includes"?`Texto inválido: deve incluir "${u.includes}"`:u.format==="regex"?`Texto inválido: deve corresponder ao padrão ${u.pattern}`:`${r[u.format]??t.format} inválido`}case"not_multiple_of":return`Número inválido: deve ser múltiplo de ${t.divisor}`;case"unrecognized_keys":return`Chave${t.keys.length>1?"s":""} desconhecida${t.keys.length>1?"s":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Chave inválida em ${t.origin}`;case"invalid_union":return"Entrada inválida";case"invalid_element":return`Valor inválido em ${t.origin}`;default:return"Campo inválido"}}};function vH(){return{localeError:yH()}}function $b(n,e,o,r){const t=Math.abs(n),u=t%10,c=t%100;return c>=11&&c<=19?r:u===1?e:u>=2&&u<=4?o:r}const kH=()=>{const n={string:{unit:{one:"символ",few:"символа",many:"символов"},verb:"иметь"},file:{unit:{one:"байт",few:"байта",many:"байт"},verb:"иметь"},array:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"},set:{unit:{one:"элемент",few:"элемента",many:"элементов"},verb:"иметь"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"число";case"object":{if(Array.isArray(t))return"массив";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ввод",email:"email адрес",url:"URL",emoji:"эмодзи",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO дата и время",date:"ISO дата",time:"ISO время",duration:"ISO длительность",ipv4:"IPv4 адрес",ipv6:"IPv6 адрес",cidrv4:"IPv4 диапазон",cidrv6:"IPv6 диапазон",base64:"строка в формате base64",base64url:"строка в формате base64url",json_string:"JSON строка",e164:"номер E.164",jwt:"JWT",template_literal:"ввод"};return t=>{switch(t.code){case"invalid_type":return`Неверный ввод: ожидалось ${t.expected}, получено ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Неверный ввод: ожидалось ${Tn(t.values[0])}`:`Неверный вариант: ожидалось одно из ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);if(c){const m=Number(t.maximum),h=$b(m,c.unit.one,c.unit.few,c.unit.many);return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет иметь ${u}${t.maximum.toString()} ${h}`}return`Слишком большое значение: ожидалось, что ${t.origin??"значение"} будет ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);if(c){const m=Number(t.minimum),h=$b(m,c.unit.one,c.unit.few,c.unit.many);return`Слишком маленькое значение: ожидалось, что ${t.origin} будет иметь ${u}${t.minimum.toString()} ${h}`}return`Слишком маленькое значение: ожидалось, что ${t.origin} будет ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Неверная строка: должна начинаться с "${u.prefix}"`:u.format==="ends_with"?`Неверная строка: должна заканчиваться на "${u.suffix}"`:u.format==="includes"?`Неверная строка: должна содержать "${u.includes}"`:u.format==="regex"?`Неверная строка: должна соответствовать шаблону ${u.pattern}`:`Неверный ${r[u.format]??t.format}`}case"not_multiple_of":return`Неверное число: должно быть кратным ${t.divisor}`;case"unrecognized_keys":return`Нераспознанн${t.keys.length>1?"ые":"ый"} ключ${t.keys.length>1?"и":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Неверный ключ в ${t.origin}`;case"invalid_union":return"Неверные входные данные";case"invalid_element":return`Неверное значение в ${t.origin}`;default:return"Неверные входные данные"}}};function bH(){return{localeError:kH()}}const TH=()=>{const n={string:{unit:"znakov",verb:"imeti"},file:{unit:"bajtov",verb:"imeti"},array:{unit:"elementov",verb:"imeti"},set:{unit:"elementov",verb:"imeti"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"število";case"object":{if(Array.isArray(t))return"tabela";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"vnos",email:"e-poštni naslov",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datum in čas",date:"ISO datum",time:"ISO čas",duration:"ISO trajanje",ipv4:"IPv4 naslov",ipv6:"IPv6 naslov",cidrv4:"obseg IPv4",cidrv6:"obseg IPv6",base64:"base64 kodiran niz",base64url:"base64url kodiran niz",json_string:"JSON niz",e164:"E.164 številka",jwt:"JWT",template_literal:"vnos"};return t=>{switch(t.code){case"invalid_type":return`Neveljaven vnos: pričakovano ${t.expected}, prejeto ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Neveljaven vnos: pričakovano ${Tn(t.values[0])}`:`Neveljavna možnost: pričakovano eno izmed ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} imelo ${u}${t.maximum.toString()} ${c.unit??"elementov"}`:`Preveliko: pričakovano, da bo ${t.origin??"vrednost"} ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Premajhno: pričakovano, da bo ${t.origin} imelo ${u}${t.minimum.toString()} ${c.unit}`:`Premajhno: pričakovano, da bo ${t.origin} ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Neveljaven niz: mora se začeti z "${u.prefix}"`:u.format==="ends_with"?`Neveljaven niz: mora se končati z "${u.suffix}"`:u.format==="includes"?`Neveljaven niz: mora vsebovati "${u.includes}"`:u.format==="regex"?`Neveljaven niz: mora ustrezati vzorcu ${u.pattern}`:`Neveljaven ${r[u.format]??t.format}`}case"not_multiple_of":return`Neveljavno število: mora biti večkratnik ${t.divisor}`;case"unrecognized_keys":return`Neprepoznan${t.keys.length>1?"i ključi":" ključ"}: ${en(t.keys,", ")}`;case"invalid_key":return`Neveljaven ključ v ${t.origin}`;case"invalid_union":return"Neveljaven vnos";case"invalid_element":return`Neveljavna vrednost v ${t.origin}`;default:return"Neveljaven vnos"}}};function MH(){return{localeError:TH()}}const AH=()=>{const n={string:{unit:"tecken",verb:"att ha"},file:{unit:"bytes",verb:"att ha"},array:{unit:"objekt",verb:"att innehålla"},set:{unit:"objekt",verb:"att innehålla"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"antal";case"object":{if(Array.isArray(t))return"lista";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"reguljärt uttryck",email:"e-postadress",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-datum och tid",date:"ISO-datum",time:"ISO-tid",duration:"ISO-varaktighet",ipv4:"IPv4-intervall",ipv6:"IPv6-intervall",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodad sträng",base64url:"base64url-kodad sträng",json_string:"JSON-sträng",e164:"E.164-nummer",jwt:"JWT",template_literal:"mall-literal"};return t=>{switch(t.code){case"invalid_type":return`Ogiltig inmatning: förväntat ${t.expected}, fick ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ogiltig inmatning: förväntat ${Tn(t.values[0])}`:`Ogiltigt val: förväntade en av ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`För stor(t): förväntade ${t.origin??"värdet"} att ha ${u}${t.maximum.toString()} ${c.unit??"element"}`:`För stor(t): förväntat ${t.origin??"värdet"} att ha ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`För lite(t): förväntade ${t.origin??"värdet"} att ha ${u}${t.minimum.toString()} ${c.unit}`:`För lite(t): förväntade ${t.origin??"värdet"} att ha ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Ogiltig sträng: måste börja med "${u.prefix}"`:u.format==="ends_with"?`Ogiltig sträng: måste sluta med "${u.suffix}"`:u.format==="includes"?`Ogiltig sträng: måste innehålla "${u.includes}"`:u.format==="regex"?`Ogiltig sträng: måste matcha mönstret "${u.pattern}"`:`Ogiltig(t) ${r[u.format]??t.format}`}case"not_multiple_of":return`Ogiltigt tal: måste vara en multipel av ${t.divisor}`;case"unrecognized_keys":return`${t.keys.length>1?"Okända nycklar":"Okänd nyckel"}: ${en(t.keys,", ")}`;case"invalid_key":return`Ogiltig nyckel i ${t.origin??"värdet"}`;case"invalid_union":return"Ogiltig input";case"invalid_element":return`Ogiltigt värde i ${t.origin??"värdet"}`;default:return"Ogiltig input"}}};function DH(){return{localeError:AH()}}const wH=()=>{const n={string:{unit:"எழுத்துக்கள்",verb:"கொண்டிருக்க வேண்டும்"},file:{unit:"பைட்டுகள்",verb:"கொண்டிருக்க வேண்டும்"},array:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"},set:{unit:"உறுப்புகள்",verb:"கொண்டிருக்க வேண்டும்"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"எண் அல்லாதது":"எண்";case"object":{if(Array.isArray(t))return"அணி";if(t===null)return"வெறுமை";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"உள்ளீடு",email:"மின்னஞ்சல் முகவரி",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO தேதி நேரம்",date:"ISO தேதி",time:"ISO நேரம்",duration:"ISO கால அளவு",ipv4:"IPv4 முகவரி",ipv6:"IPv6 முகவரி",cidrv4:"IPv4 வரம்பு",cidrv6:"IPv6 வரம்பு",base64:"base64-encoded சரம்",base64url:"base64url-encoded சரம்",json_string:"JSON சரம்",e164:"E.164 எண்",jwt:"JWT",template_literal:"input"};return t=>{switch(t.code){case"invalid_type":return`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${t.expected}, பெறப்பட்டது ${o(t.input)}`;case"invalid_value":return t.values.length===1?`தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${Tn(t.values[0])}`:`தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${en(t.values,"|")} இல் ஒன்று`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${u}${t.maximum.toString()} ${c.unit??"உறுப்புகள்"} ஆக இருக்க வேண்டும்`:`மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin??"மதிப்பு"} ${u}${t.maximum.toString()} ஆக இருக்க வேண்டும்`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${u}${t.minimum.toString()} ${c.unit} ஆக இருக்க வேண்டும்`:`மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${u}${t.minimum.toString()} ஆக இருக்க வேண்டும்`}case"invalid_format":{const u=t;return u.format==="starts_with"?`தவறான சரம்: "${u.prefix}" இல் தொடங்க வேண்டும்`:u.format==="ends_with"?`தவறான சரம்: "${u.suffix}" இல் முடிவடைய வேண்டும்`:u.format==="includes"?`தவறான சரம்: "${u.includes}" ஐ உள்ளடக்க வேண்டும்`:u.format==="regex"?`தவறான சரம்: ${u.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`:`தவறான ${r[u.format]??t.format}`}case"not_multiple_of":return`தவறான எண்: ${t.divisor} இன் பலமாக இருக்க வேண்டும்`;case"unrecognized_keys":return`அடையாளம் தெரியாத விசை${t.keys.length>1?"கள்":""}: ${en(t.keys,", ")}`;case"invalid_key":return`${t.origin} இல் தவறான விசை`;case"invalid_union":return"தவறான உள்ளீடு";case"invalid_element":return`${t.origin} இல் தவறான மதிப்பு`;default:return"தவறான உள்ளீடு"}}};function CH(){return{localeError:wH()}}const OH=()=>{const n={string:{unit:"ตัวอักษร",verb:"ควรมี"},file:{unit:"ไบต์",verb:"ควรมี"},array:{unit:"รายการ",verb:"ควรมี"},set:{unit:"รายการ",verb:"ควรมี"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"ไม่ใช่ตัวเลข (NaN)":"ตัวเลข";case"object":{if(Array.isArray(t))return"อาร์เรย์ (Array)";if(t===null)return"ไม่มีค่า (null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ข้อมูลที่ป้อน",email:"ที่อยู่อีเมล",url:"URL",emoji:"อิโมจิ",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"วันที่เวลาแบบ ISO",date:"วันที่แบบ ISO",time:"เวลาแบบ ISO",duration:"ช่วงเวลาแบบ ISO",ipv4:"ที่อยู่ IPv4",ipv6:"ที่อยู่ IPv6",cidrv4:"ช่วง IP แบบ IPv4",cidrv6:"ช่วง IP แบบ IPv6",base64:"ข้อความแบบ Base64",base64url:"ข้อความแบบ Base64 สำหรับ URL",json_string:"ข้อความแบบ JSON",e164:"เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",jwt:"โทเคน JWT",template_literal:"ข้อมูลที่ป้อน"};return t=>{switch(t.code){case"invalid_type":return`ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${t.expected} แต่ได้รับ ${o(t.input)}`;case"invalid_value":return t.values.length===1?`ค่าไม่ถูกต้อง: ควรเป็น ${Tn(t.values[0])}`:`ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"ไม่เกิน":"น้อยกว่า",c=e(t.origin);return c?`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${u} ${t.maximum.toString()} ${c.unit??"รายการ"}`:`เกินกำหนด: ${t.origin??"ค่า"} ควรมี${u} ${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?"อย่างน้อย":"มากกว่า",c=e(t.origin);return c?`น้อยกว่ากำหนด: ${t.origin} ควรมี${u} ${t.minimum.toString()} ${c.unit}`:`น้อยกว่ากำหนด: ${t.origin} ควรมี${u} ${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${u.prefix}"`:u.format==="ends_with"?`รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${u.suffix}"`:u.format==="includes"?`รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${u.includes}" อยู่ในข้อความ`:u.format==="regex"?`รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${u.pattern}`:`รูปแบบไม่ถูกต้อง: ${r[u.format]??t.format}`}case"not_multiple_of":return`ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${t.divisor} ได้ลงตัว`;case"unrecognized_keys":return`พบคีย์ที่ไม่รู้จัก: ${en(t.keys,", ")}`;case"invalid_key":return`คีย์ไม่ถูกต้องใน ${t.origin}`;case"invalid_union":return"ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";case"invalid_element":return`ข้อมูลไม่ถูกต้องใน ${t.origin}`;default:return"ข้อมูลไม่ถูกต้อง"}}};function IH(){return{localeError:OH()}}const KH=n=>{const e=typeof n;switch(e){case"number":return Number.isNaN(n)?"NaN":"number";case"object":{if(Array.isArray(n))return"array";if(n===null)return"null";if(Object.getPrototypeOf(n)!==Object.prototype&&n.constructor)return n.constructor.name}}return e},xH=()=>{const n={string:{unit:"karakter",verb:"olmalı"},file:{unit:"bayt",verb:"olmalı"},array:{unit:"öğe",verb:"olmalı"},set:{unit:"öğe",verb:"olmalı"}};function e(r){return n[r]??null}const o={regex:"girdi",email:"e-posta adresi",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO tarih ve saat",date:"ISO tarih",time:"ISO saat",duration:"ISO süre",ipv4:"IPv4 adresi",ipv6:"IPv6 adresi",cidrv4:"IPv4 aralığı",cidrv6:"IPv6 aralığı",base64:"base64 ile şifrelenmiş metin",base64url:"base64url ile şifrelenmiş metin",json_string:"JSON dizesi",e164:"E.164 sayısı",jwt:"JWT",template_literal:"Şablon dizesi"};return r=>{switch(r.code){case"invalid_type":return`Geçersiz değer: beklenen ${r.expected}, alınan ${KH(r.input)}`;case"invalid_value":return r.values.length===1?`Geçersiz değer: beklenen ${Tn(r.values[0])}`:`Geçersiz seçenek: aşağıdakilerden biri olmalı: ${en(r.values,"|")}`;case"too_big":{const t=r.inclusive?"<=":"<",u=e(r.origin);return u?`Çok büyük: beklenen ${r.origin??"değer"} ${t}${r.maximum.toString()} ${u.unit??"öğe"}`:`Çok büyük: beklenen ${r.origin??"değer"} ${t}${r.maximum.toString()}`}case"too_small":{const t=r.inclusive?">=":">",u=e(r.origin);return u?`Çok küçük: beklenen ${r.origin} ${t}${r.minimum.toString()} ${u.unit}`:`Çok küçük: beklenen ${r.origin} ${t}${r.minimum.toString()}`}case"invalid_format":{const t=r;return t.format==="starts_with"?`Geçersiz metin: "${t.prefix}" ile başlamalı`:t.format==="ends_with"?`Geçersiz metin: "${t.suffix}" ile bitmeli`:t.format==="includes"?`Geçersiz metin: "${t.includes}" içermeli`:t.format==="regex"?`Geçersiz metin: ${t.pattern} desenine uymalı`:`Geçersiz ${o[t.format]??r.format}`}case"not_multiple_of":return`Geçersiz sayı: ${r.divisor} ile tam bölünebilmeli`;case"unrecognized_keys":return`Tanınmayan anahtar${r.keys.length>1?"lar":""}: ${en(r.keys,", ")}`;case"invalid_key":return`${r.origin} içinde geçersiz anahtar`;case"invalid_union":return"Geçersiz değer";case"invalid_element":return`${r.origin} içinde geçersiz değer`;default:return"Geçersiz değer"}}};function RH(){return{localeError:xH()}}const BH=()=>{const n={string:{unit:"символів",verb:"матиме"},file:{unit:"байтів",verb:"матиме"},array:{unit:"елементів",verb:"матиме"},set:{unit:"елементів",verb:"матиме"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"число";case"object":{if(Array.isArray(t))return"масив";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"вхідні дані",email:"адреса електронної пошти",url:"URL",emoji:"емодзі",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"дата та час ISO",date:"дата ISO",time:"час ISO",duration:"тривалість ISO",ipv4:"адреса IPv4",ipv6:"адреса IPv6",cidrv4:"діапазон IPv4",cidrv6:"діапазон IPv6",base64:"рядок у кодуванні base64",base64url:"рядок у кодуванні base64url",json_string:"рядок JSON",e164:"номер E.164",jwt:"JWT",template_literal:"вхідні дані"};return t=>{switch(t.code){case"invalid_type":return`Неправильні вхідні дані: очікується ${t.expected}, отримано ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Неправильні вхідні дані: очікується ${Tn(t.values[0])}`:`Неправильна опція: очікується одне з ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Занадто велике: очікується, що ${t.origin??"значення"} ${c.verb} ${u}${t.maximum.toString()} ${c.unit??"елементів"}`:`Занадто велике: очікується, що ${t.origin??"значення"} буде ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Занадто мале: очікується, що ${t.origin} ${c.verb} ${u}${t.minimum.toString()} ${c.unit}`:`Занадто мале: очікується, що ${t.origin} буде ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Неправильний рядок: повинен починатися з "${u.prefix}"`:u.format==="ends_with"?`Неправильний рядок: повинен закінчуватися на "${u.suffix}"`:u.format==="includes"?`Неправильний рядок: повинен містити "${u.includes}"`:u.format==="regex"?`Неправильний рядок: повинен відповідати шаблону ${u.pattern}`:`Неправильний ${r[u.format]??t.format}`}case"not_multiple_of":return`Неправильне число: повинно бути кратним ${t.divisor}`;case"unrecognized_keys":return`Нерозпізнаний ключ${t.keys.length>1?"і":""}: ${en(t.keys,", ")}`;case"invalid_key":return`Неправильний ключ у ${t.origin}`;case"invalid_union":return"Неправильні вхідні дані";case"invalid_element":return`Неправильне значення у ${t.origin}`;default:return"Неправильні вхідні дані"}}};function PH(){return{localeError:BH()}}const NH=()=>{const n={string:{unit:"حروف",verb:"ہونا"},file:{unit:"بائٹس",verb:"ہونا"},array:{unit:"آئٹمز",verb:"ہونا"},set:{unit:"آئٹمز",verb:"ہونا"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"نمبر";case"object":{if(Array.isArray(t))return"آرے";if(t===null)return"نل";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ان پٹ",email:"ای میل ایڈریس",url:"یو آر ایل",emoji:"ایموجی",uuid:"یو یو آئی ڈی",uuidv4:"یو یو آئی ڈی وی 4",uuidv6:"یو یو آئی ڈی وی 6",nanoid:"نینو آئی ڈی",guid:"جی یو آئی ڈی",cuid:"سی یو آئی ڈی",cuid2:"سی یو آئی ڈی 2",ulid:"یو ایل آئی ڈی",xid:"ایکس آئی ڈی",ksuid:"کے ایس یو آئی ڈی",datetime:"آئی ایس او ڈیٹ ٹائم",date:"آئی ایس او تاریخ",time:"آئی ایس او وقت",duration:"آئی ایس او مدت",ipv4:"آئی پی وی 4 ایڈریس",ipv6:"آئی پی وی 6 ایڈریس",cidrv4:"آئی پی وی 4 رینج",cidrv6:"آئی پی وی 6 رینج",base64:"بیس 64 ان کوڈڈ سٹرنگ",base64url:"بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",json_string:"جے ایس او این سٹرنگ",e164:"ای 164 نمبر",jwt:"جے ڈبلیو ٹی",template_literal:"ان پٹ"};return t=>{switch(t.code){case"invalid_type":return`غلط ان پٹ: ${t.expected} متوقع تھا، ${o(t.input)} موصول ہوا`;case"invalid_value":return t.values.length===1?`غلط ان پٹ: ${Tn(t.values[0])} متوقع تھا`:`غلط آپشن: ${en(t.values,"|")} میں سے ایک متوقع تھا`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`بہت بڑا: ${t.origin??"ویلیو"} کے ${u}${t.maximum.toString()} ${c.unit??"عناصر"} ہونے متوقع تھے`:`بہت بڑا: ${t.origin??"ویلیو"} کا ${u}${t.maximum.toString()} ہونا متوقع تھا`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`بہت چھوٹا: ${t.origin} کے ${u}${t.minimum.toString()} ${c.unit} ہونے متوقع تھے`:`بہت چھوٹا: ${t.origin} کا ${u}${t.minimum.toString()} ہونا متوقع تھا`}case"invalid_format":{const u=t;return u.format==="starts_with"?`غلط سٹرنگ: "${u.prefix}" سے شروع ہونا چاہیے`:u.format==="ends_with"?`غلط سٹرنگ: "${u.suffix}" پر ختم ہونا چاہیے`:u.format==="includes"?`غلط سٹرنگ: "${u.includes}" شامل ہونا چاہیے`:u.format==="regex"?`غلط سٹرنگ: پیٹرن ${u.pattern} سے میچ ہونا چاہیے`:`غلط ${r[u.format]??t.format}`}case"not_multiple_of":return`غلط نمبر: ${t.divisor} کا مضاعف ہونا چاہیے`;case"unrecognized_keys":return`غیر تسلیم شدہ کی${t.keys.length>1?"ز":""}: ${en(t.keys,"، ")}`;case"invalid_key":return`${t.origin} میں غلط کی`;case"invalid_union":return"غلط ان پٹ";case"invalid_element":return`${t.origin} میں غلط ویلیو`;default:return"غلط ان پٹ"}}};function EH(){return{localeError:NH()}}const HH=()=>{const n={string:{unit:"ký tự",verb:"có"},file:{unit:"byte",verb:"có"},array:{unit:"phần tử",verb:"có"},set:{unit:"phần tử",verb:"có"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"số";case"object":{if(Array.isArray(t))return"mảng";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"đầu vào",email:"địa chỉ email",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ngày giờ ISO",date:"ngày ISO",time:"giờ ISO",duration:"khoảng thời gian ISO",ipv4:"địa chỉ IPv4",ipv6:"địa chỉ IPv6",cidrv4:"dải IPv4",cidrv6:"dải IPv6",base64:"chuỗi mã hóa base64",base64url:"chuỗi mã hóa base64url",json_string:"chuỗi JSON",e164:"số E.164",jwt:"JWT",template_literal:"đầu vào"};return t=>{switch(t.code){case"invalid_type":return`Đầu vào không hợp lệ: mong đợi ${t.expected}, nhận được ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Đầu vào không hợp lệ: mong đợi ${Tn(t.values[0])}`:`Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Quá lớn: mong đợi ${t.origin??"giá trị"} ${c.verb} ${u}${t.maximum.toString()} ${c.unit??"phần tử"}`:`Quá lớn: mong đợi ${t.origin??"giá trị"} ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Quá nhỏ: mong đợi ${t.origin} ${c.verb} ${u}${t.minimum.toString()} ${c.unit}`:`Quá nhỏ: mong đợi ${t.origin} ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Chuỗi không hợp lệ: phải bắt đầu bằng "${u.prefix}"`:u.format==="ends_with"?`Chuỗi không hợp lệ: phải kết thúc bằng "${u.suffix}"`:u.format==="includes"?`Chuỗi không hợp lệ: phải bao gồm "${u.includes}"`:u.format==="regex"?`Chuỗi không hợp lệ: phải khớp với mẫu ${u.pattern}`:`${r[u.format]??t.format} không hợp lệ`}case"not_multiple_of":return`Số không hợp lệ: phải là bội số của ${t.divisor}`;case"unrecognized_keys":return`Khóa không được nhận dạng: ${en(t.keys,", ")}`;case"invalid_key":return`Khóa không hợp lệ trong ${t.origin}`;case"invalid_union":return"Đầu vào không hợp lệ";case"invalid_element":return`Giá trị không hợp lệ trong ${t.origin}`;default:return"Đầu vào không hợp lệ"}}};function GH(){return{localeError:HH()}}const LH=()=>{const n={string:{unit:"字符",verb:"包含"},file:{unit:"字节",verb:"包含"},array:{unit:"项",verb:"包含"},set:{unit:"项",verb:"包含"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"非数字(NaN)":"数字";case"object":{if(Array.isArray(t))return"数组";if(t===null)return"空值(null)";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"输入",email:"电子邮件",url:"URL",emoji:"表情符号",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO日期时间",date:"ISO日期",time:"ISO时间",duration:"ISO时长",ipv4:"IPv4地址",ipv6:"IPv6地址",cidrv4:"IPv4网段",cidrv6:"IPv6网段",base64:"base64编码字符串",base64url:"base64url编码字符串",json_string:"JSON字符串",e164:"E.164号码",jwt:"JWT",template_literal:"输入"};return t=>{switch(t.code){case"invalid_type":return`无效输入：期望 ${t.expected}，实际接收 ${o(t.input)}`;case"invalid_value":return t.values.length===1?`无效输入：期望 ${Tn(t.values[0])}`:`无效选项：期望以下之一 ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`数值过大：期望 ${t.origin??"值"} ${u}${t.maximum.toString()} ${c.unit??"个元素"}`:`数值过大：期望 ${t.origin??"值"} ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`数值过小：期望 ${t.origin} ${u}${t.minimum.toString()} ${c.unit}`:`数值过小：期望 ${t.origin} ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`无效字符串：必须以 "${u.prefix}" 开头`:u.format==="ends_with"?`无效字符串：必须以 "${u.suffix}" 结尾`:u.format==="includes"?`无效字符串：必须包含 "${u.includes}"`:u.format==="regex"?`无效字符串：必须满足正则表达式 ${u.pattern}`:`无效${r[u.format]??t.format}`}case"not_multiple_of":return`无效数字：必须是 ${t.divisor} 的倍数`;case"unrecognized_keys":return`出现未知的键(key): ${en(t.keys,", ")}`;case"invalid_key":return`${t.origin} 中的键(key)无效`;case"invalid_union":return"无效输入";case"invalid_element":return`${t.origin} 中包含无效值(value)`;default:return"无效输入"}}};function _H(){return{localeError:LH()}}const jH=()=>{const n={string:{unit:"字元",verb:"擁有"},file:{unit:"位元組",verb:"擁有"},array:{unit:"項目",verb:"擁有"},set:{unit:"項目",verb:"擁有"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"輸入",email:"郵件地址",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO 日期時間",date:"ISO 日期",time:"ISO 時間",duration:"ISO 期間",ipv4:"IPv4 位址",ipv6:"IPv6 位址",cidrv4:"IPv4 範圍",cidrv6:"IPv6 範圍",base64:"base64 編碼字串",base64url:"base64url 編碼字串",json_string:"JSON 字串",e164:"E.164 數值",jwt:"JWT",template_literal:"輸入"};return t=>{switch(t.code){case"invalid_type":return`無效的輸入值：預期為 ${t.expected}，但收到 ${o(t.input)}`;case"invalid_value":return t.values.length===1?`無效的輸入值：預期為 ${Tn(t.values[0])}`:`無效的選項：預期為以下其中之一 ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`數值過大：預期 ${t.origin??"值"} 應為 ${u}${t.maximum.toString()} ${c.unit??"個元素"}`:`數值過大：預期 ${t.origin??"值"} 應為 ${u}${t.maximum.toString()}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`數值過小：預期 ${t.origin} 應為 ${u}${t.minimum.toString()} ${c.unit}`:`數值過小：預期 ${t.origin} 應為 ${u}${t.minimum.toString()}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`無效的字串：必須以 "${u.prefix}" 開頭`:u.format==="ends_with"?`無效的字串：必須以 "${u.suffix}" 結尾`:u.format==="includes"?`無效的字串：必須包含 "${u.includes}"`:u.format==="regex"?`無效的字串：必須符合格式 ${u.pattern}`:`無效的 ${r[u.format]??t.format}`}case"not_multiple_of":return`無效的數字：必須為 ${t.divisor} 的倍數`;case"unrecognized_keys":return`無法識別的鍵值${t.keys.length>1?"們":""}：${en(t.keys,"、")}`;case"invalid_key":return`${t.origin} 中有無效的鍵值`;case"invalid_union":return"無效的輸入值";case"invalid_element":return`${t.origin} 中有無效的值`;default:return"無效的輸入值"}}};function zH(){return{localeError:jH()}}const $H=()=>{const n={string:{unit:"àmi",verb:"ní"},file:{unit:"bytes",verb:"ní"},array:{unit:"nkan",verb:"ní"},set:{unit:"nkan",verb:"ní"}};function e(t){return n[t]??null}const o=t=>{const u=typeof t;switch(u){case"number":return Number.isNaN(t)?"NaN":"nọ́mbà";case"object":{if(Array.isArray(t))return"akopọ";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return u},r={regex:"ẹ̀rọ ìbáwọlé",email:"àdírẹ́sì ìmẹ́lì",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"àkókò ISO",date:"ọjọ́ ISO",time:"àkókò ISO",duration:"àkókò tó pé ISO",ipv4:"àdírẹ́sì IPv4",ipv6:"àdírẹ́sì IPv6",cidrv4:"àgbègbè IPv4",cidrv6:"àgbègbè IPv6",base64:"ọ̀rọ̀ tí a kọ́ ní base64",base64url:"ọ̀rọ̀ base64url",json_string:"ọ̀rọ̀ JSON",e164:"nọ́mbà E.164",jwt:"JWT",template_literal:"ẹ̀rọ ìbáwọlé"};return t=>{switch(t.code){case"invalid_type":return`Ìbáwọlé aṣìṣe: a ní láti fi ${t.expected}, àmọ̀ a rí ${o(t.input)}`;case"invalid_value":return t.values.length===1?`Ìbáwọlé aṣìṣe: a ní láti fi ${Tn(t.values[0])}`:`Àṣàyàn aṣìṣe: yan ọ̀kan lára ${en(t.values,"|")}`;case"too_big":{const u=t.inclusive?"<=":"<",c=e(t.origin);return c?`Tó pọ̀ jù: a ní láti jẹ́ pé ${t.origin??"iye"} ${c.verb} ${u}${t.maximum} ${c.unit}`:`Tó pọ̀ jù: a ní láti jẹ́ ${u}${t.maximum}`}case"too_small":{const u=t.inclusive?">=":">",c=e(t.origin);return c?`Kéré ju: a ní láti jẹ́ pé ${t.origin} ${c.verb} ${u}${t.minimum} ${c.unit}`:`Kéré ju: a ní láti jẹ́ ${u}${t.minimum}`}case"invalid_format":{const u=t;return u.format==="starts_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${u.prefix}"`:u.format==="ends_with"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${u.suffix}"`:u.format==="includes"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${u.includes}"`:u.format==="regex"?`Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${u.pattern}`:`Aṣìṣe: ${r[u.format]??t.format}`}case"not_multiple_of":return`Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${t.divisor}`;case"unrecognized_keys":return`Bọtìnì àìmọ̀: ${en(t.keys,", ")}`;case"invalid_key":return`Bọtìnì aṣìṣe nínú ${t.origin}`;case"invalid_union":return"Ìbáwọlé aṣìṣe";case"invalid_element":return`Iye aṣìṣe nínú ${t.origin}`;default:return"Ìbáwọlé aṣìṣe"}}};function FH(){return{localeError:$H()}}const ow=Object.freeze(Object.defineProperty({__proto__:null,ar:fE,az:gE,be:pE,ca:vE,cs:bE,da:ME,de:DE,en:iw,eo:KE,es:RE,fa:PE,fi:EE,fr:GE,frCA:_E,he:zE,hu:FE,id:VE,is:ZE,it:XE,ja:QE,kh:eH,ko:aH,mk:oH,ms:uH,nl:lH,no:hH,ota:fH,pl:pH,ps:gH,pt:vH,ru:bH,sl:MH,sv:DH,ta:CH,th:IH,tr:RH,ua:PH,ur:EH,vi:GH,yo:FH,zhCN:_H,zhTW:zH},Symbol.toStringTag,{value:"Module"})),rw=Symbol("ZodOutput"),uw=Symbol("ZodInput");class Fm{constructor(){this._map=new Map,this._idmap=new Map}add(e,...o){const r=o[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){const o=this._map.get(e);return o&&typeof o=="object"&&"id"in o&&this._idmap.delete(o.id),this._map.delete(e),this}get(e){const o=e._zod.parent;if(o){const r={...this.get(o)??{}};delete r.id;const t={...r,...this._map.get(e)};return Object.keys(t).length?t:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Um(){return new Fm}const ii=Um();function sw(n,e){return new n({type:"string",...J(e)})}function lw(n,e){return new n({type:"string",coerce:!0,...J(e)})}function Vm(n,e){return new n({type:"string",format:"email",check:"string_format",abort:!1,...J(e)})}function Ol(n,e){return new n({type:"string",format:"guid",check:"string_format",abort:!1,...J(e)})}function Ym(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,...J(e)})}function Wm(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...J(e)})}function Zm(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...J(e)})}function Jm(n,e){return new n({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...J(e)})}function Xm(n,e){return new n({type:"string",format:"url",check:"string_format",abort:!1,...J(e)})}function qm(n,e){return new n({type:"string",format:"emoji",check:"string_format",abort:!1,...J(e)})}function Qm(n,e){return new n({type:"string",format:"nanoid",check:"string_format",abort:!1,...J(e)})}function ng(n,e){return new n({type:"string",format:"cuid",check:"string_format",abort:!1,...J(e)})}function eg(n,e){return new n({type:"string",format:"cuid2",check:"string_format",abort:!1,...J(e)})}function tg(n,e){return new n({type:"string",format:"ulid",check:"string_format",abort:!1,...J(e)})}function ag(n,e){return new n({type:"string",format:"xid",check:"string_format",abort:!1,...J(e)})}function ig(n,e){return new n({type:"string",format:"ksuid",check:"string_format",abort:!1,...J(e)})}function og(n,e){return new n({type:"string",format:"ipv4",check:"string_format",abort:!1,...J(e)})}function rg(n,e){return new n({type:"string",format:"ipv6",check:"string_format",abort:!1,...J(e)})}function ug(n,e){return new n({type:"string",format:"cidrv4",check:"string_format",abort:!1,...J(e)})}function sg(n,e){return new n({type:"string",format:"cidrv6",check:"string_format",abort:!1,...J(e)})}function lg(n,e){return new n({type:"string",format:"base64",check:"string_format",abort:!1,...J(e)})}function cg(n,e){return new n({type:"string",format:"base64url",check:"string_format",abort:!1,...J(e)})}function hg(n,e){return new n({type:"string",format:"e164",check:"string_format",abort:!1,...J(e)})}function dg(n,e){return new n({type:"string",format:"jwt",check:"string_format",abort:!1,...J(e)})}const cw={Any:null,Minute:-1,Second:0,Millisecond:3,Microsecond:6};function hw(n,e){return new n({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...J(e)})}function dw(n,e){return new n({type:"string",format:"date",check:"string_format",...J(e)})}function fw(n,e){return new n({type:"string",format:"time",check:"string_format",precision:null,...J(e)})}function mw(n,e){return new n({type:"string",format:"duration",check:"string_format",...J(e)})}function gw(n,e){return new n({type:"number",checks:[],...J(e)})}function Sw(n,e){return new n({type:"number",coerce:!0,checks:[],...J(e)})}function pw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"safeint",...J(e)})}function yw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"float32",...J(e)})}function vw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"float64",...J(e)})}function kw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"int32",...J(e)})}function bw(n,e){return new n({type:"number",check:"number_format",abort:!1,format:"uint32",...J(e)})}function Tw(n,e){return new n({type:"boolean",...J(e)})}function Mw(n,e){return new n({type:"boolean",coerce:!0,...J(e)})}function Aw(n,e){return new n({type:"bigint",...J(e)})}function Dw(n,e){return new n({type:"bigint",coerce:!0,...J(e)})}function ww(n,e){return new n({type:"bigint",check:"bigint_format",abort:!1,format:"int64",...J(e)})}function Cw(n,e){return new n({type:"bigint",check:"bigint_format",abort:!1,format:"uint64",...J(e)})}function Ow(n,e){return new n({type:"symbol",...J(e)})}function Iw(n,e){return new n({type:"undefined",...J(e)})}function Kw(n,e){return new n({type:"null",...J(e)})}function xw(n){return new n({type:"any"})}function Il(n){return new n({type:"unknown"})}function Rw(n,e){return new n({type:"never",...J(e)})}function Bw(n,e){return new n({type:"void",...J(e)})}function Pw(n,e){return new n({type:"date",...J(e)})}function Nw(n,e){return new n({type:"date",coerce:!0,...J(e)})}function Ew(n,e){return new n({type:"nan",...J(e)})}function ci(n,e){return new Pm({check:"less_than",...J(e),value:n,inclusive:!1})}function gt(n,e){return new Pm({check:"less_than",...J(e),value:n,inclusive:!0})}function hi(n,e){return new Nm({check:"greater_than",...J(e),value:n,inclusive:!1})}function Ze(n,e){return new Nm({check:"greater_than",...J(e),value:n,inclusive:!0})}function Hw(n){return hi(0,n)}function Gw(n){return ci(0,n)}function Lw(n){return gt(0,n)}function _w(n){return Ze(0,n)}function Yr(n,e){return new N0({check:"multiple_of",...J(e),value:n})}function nc(n,e){return new G0({check:"max_size",...J(e),maximum:n})}function Wr(n,e){return new L0({check:"min_size",...J(e),minimum:n})}function fg(n,e){return new _0({check:"size_equals",...J(e),size:n})}function ec(n,e){return new j0({check:"max_length",...J(e),maximum:n})}function po(n,e){return new z0({check:"min_length",...J(e),minimum:n})}function tc(n,e){return new $0({check:"length_equals",...J(e),length:n})}function mg(n,e){return new F0({check:"string_format",format:"regex",...J(e),pattern:n})}function gg(n){return new U0({check:"string_format",format:"lowercase",...J(n)})}function Sg(n){return new V0({check:"string_format",format:"uppercase",...J(n)})}function pg(n,e){return new Y0({check:"string_format",format:"includes",...J(e),includes:n})}function yg(n,e){return new W0({check:"string_format",format:"starts_with",...J(e),prefix:n})}function vg(n,e){return new Z0({check:"string_format",format:"ends_with",...J(e),suffix:n})}function jw(n,e,o){return new J0({check:"property",property:n,schema:e,...J(o)})}function kg(n,e){return new X0({check:"mime_type",mime:n,...J(e)})}function fi(n){return new q0({check:"overwrite",tx:n})}function bg(n){return fi(e=>e.normalize(n))}function Tg(){return fi(n=>n.trim())}function Mg(){return fi(n=>n.toLowerCase())}function Ag(){return fi(n=>n.toUpperCase())}function Dg(n,e,o){return new n({type:"array",element:e,...J(o)})}function UH(n,e,o){return new n({type:"union",options:e,...J(o)})}function VH(n,e,o,r){return new n({type:"union",options:o,discriminator:e,...J(r)})}function YH(n,e,o){return new n({type:"intersection",left:e,right:o})}function zw(n,e,o,r){const t=o instanceof bn,u=t?r:o,c=t?o:null;return new n({type:"tuple",items:e,rest:c,...J(u)})}function WH(n,e,o,r){return new n({type:"record",keyType:e,valueType:o,...J(r)})}function ZH(n,e,o,r){return new n({type:"map",keyType:e,valueType:o,...J(r)})}function JH(n,e,o){return new n({type:"set",valueType:e,...J(o)})}function XH(n,e,o){const r=Array.isArray(e)?Object.fromEntries(e.map(t=>[t,t])):e;return new n({type:"enum",entries:r,...J(o)})}function qH(n,e,o){return new n({type:"enum",entries:e,...J(o)})}function QH(n,e,o){return new n({type:"literal",values:Array.isArray(e)?e:[e],...J(o)})}function $w(n,e){return new n({type:"file",...J(e)})}function nG(n,e){return new n({type:"transform",transform:e})}function eG(n,e){return new n({type:"optional",innerType:e})}function tG(n,e){return new n({type:"nullable",innerType:e})}function aG(n,e,o){return new n({type:"default",innerType:e,get defaultValue(){return typeof o=="function"?o():o}})}function iG(n,e,o){return new n({type:"nonoptional",innerType:e,...J(o)})}function oG(n,e){return new n({type:"success",innerType:e})}function rG(n,e,o){return new n({type:"catch",innerType:e,catchValue:typeof o=="function"?o:()=>o})}function uG(n,e,o){return new n({type:"pipe",in:e,out:o})}function sG(n,e){return new n({type:"readonly",innerType:e})}function lG(n,e,o){return new n({type:"template_literal",parts:e,...J(o)})}function cG(n,e){return new n({type:"lazy",getter:e})}function hG(n,e){return new n({type:"promise",innerType:e})}function Fw(n,e,o){const r=J(o);return r.abort??(r.abort=!0),new n({type:"custom",check:"custom",fn:e,...r})}function Uw(n,e,o){return new n({type:"custom",check:"custom",fn:e,...J(o)})}function Vw(n){const e=Yw(o=>(o.addIssue=r=>{if(typeof r=="string")o.issues.push(go(r,o.value,e._zod.def));else{const t=r;t.fatal&&(t.continue=!1),t.code??(t.code="custom"),t.input??(t.input=o.value),t.inst??(t.inst=e),t.continue??(t.continue=!e._zod.def.abort),o.issues.push(go(t))}},n(o.value,o)));return e}function Yw(n,e){const o=new ae({check:"custom",...J(e)});return o._zod.check=n,o}function Ww(n,e){const o=J(e);let r=o.truthy??["true","1","yes","on","y","enabled"],t=o.falsy??["false","0","no","off","n","disabled"];o.case!=="sensitive"&&(r=r.map(T=>typeof T=="string"?T.toLowerCase():T),t=t.map(T=>typeof T=="string"?T.toLowerCase():T));const u=new Set(r),c=new Set(t),m=n.Pipe??$m,h=n.Boolean??Gm,d=n.String??hu,S=n.Transform??zm,p=new S({type:"transform",transform:(T,O)=>{let A=T;return o.case!=="sensitive"&&(A=A.toLowerCase()),u.has(A)?!0:c.has(A)?!1:(O.issues.push({code:"invalid_value",expected:"stringbool",values:[...u,...c],input:O.value,inst:p,continue:!1}),{})},error:o.error}),y=new m({type:"pipe",in:new d({type:"string",error:o.error}),out:p,error:o.error});return new m({type:"pipe",in:y,out:new h({type:"boolean",error:o.error}),error:o.error})}function wg(n,e,o,r={}){const t=J(r),u={...J(r),check:"string_format",type:"string",format:e,fn:typeof o=="function"?o:m=>o.test(m),...t};return o instanceof RegExp&&(u.pattern=o),new n(u)}class Zw{constructor(e){this._def=e,this.def=e}implement(e){if(typeof e!="function")throw new Error("implement() must be called with a function");const o=(...r)=>{const t=this._def.input?Af(this._def.input,r,void 0,{callee:o}):r;if(!Array.isArray(t))throw new Error("Invalid arguments schema: not an array or tuple schema.");const u=e(...t);return this._def.output?Af(this._def.output,u,void 0,{callee:o}):u};return o}implementAsync(e){if(typeof e!="function")throw new Error("implement() must be called with a function");const o=async(...r)=>{const t=this._def.input?await Df(this._def.input,r,void 0,{callee:o}):r;if(!Array.isArray(t))throw new Error("Invalid arguments schema: not an array or tuple schema.");const u=await e(...t);return this._def.output?Df(this._def.output,u,void 0,{callee:o}):u};return o}input(...e){const o=this.constructor;return Array.isArray(e[0])?new o({type:"function",input:new Ql({type:"tuple",items:e[0],rest:e[1]}),output:this._def.output}):new o({type:"function",input:e[0],output:this._def.output})}output(e){const o=this.constructor;return new o({type:"function",input:this._def.input,output:e})}}function Jw(n){return new Zw({type:"function",input:Array.isArray(n==null?void 0:n.input)?zw(Ql,n==null?void 0:n.input):(n==null?void 0:n.input)??Dg(_m,Il(Cl)),output:(n==null?void 0:n.output)??Il(Cl)})}class Cf{constructor(e){this.counter=0,this.metadataRegistry=(e==null?void 0:e.metadata)??ii,this.target=(e==null?void 0:e.target)??"draft-2020-12",this.unrepresentable=(e==null?void 0:e.unrepresentable)??"throw",this.override=(e==null?void 0:e.override)??(()=>{}),this.io=(e==null?void 0:e.io)??"output",this.seen=new Map}process(e,o={path:[],schemaPath:[]}){var p,y,k;var r;const t=e._zod.def,u={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},c=this.seen.get(e);if(c)return c.count++,o.schemaPath.includes(e)&&(c.cycle=o.path),c.schema;const m={schema:{},count:1,cycle:void 0,path:o.path};this.seen.set(e,m);const h=(y=(p=e._zod).toJSONSchema)==null?void 0:y.call(p);if(h)m.schema=h;else{const T={...o,schemaPath:[...o.schemaPath,e],path:o.path},O=e._zod.parent;if(O)m.ref=O,this.process(O,T),this.seen.get(O).isParent=!0;else{const A=m.schema;switch(t.type){case"string":{const b=A;b.type="string";const{minimum:I,maximum:C,format:K,patterns:w,contentEncoding:E}=e._zod.bag;if(typeof I=="number"&&(b.minLength=I),typeof C=="number"&&(b.maxLength=C),K&&(b.format=u[K]??K,b.format===""&&delete b.format),E&&(b.contentEncoding=E),w&&w.size>0){const j=[...w];j.length===1?b.pattern=j[0].source:j.length>1&&(m.schema.allOf=[...j.map(z=>({...this.target==="draft-7"||this.target==="draft-4"?{type:"string"}:{},pattern:z.source}))])}break}case"number":{const b=A,{minimum:I,maximum:C,format:K,multipleOf:w,exclusiveMaximum:E,exclusiveMinimum:j}=e._zod.bag;typeof K=="string"&&K.includes("int")?b.type="integer":b.type="number",typeof j=="number"&&(this.target==="draft-4"?(b.minimum=j,b.exclusiveMinimum=!0):b.exclusiveMinimum=j),typeof I=="number"&&(b.minimum=I,typeof j=="number"&&this.target!=="draft-4"&&(j>=I?delete b.minimum:delete b.exclusiveMinimum)),typeof E=="number"&&(this.target==="draft-4"?(b.maximum=E,b.exclusiveMaximum=!0):b.exclusiveMaximum=E),typeof C=="number"&&(b.maximum=C,typeof E=="number"&&this.target!=="draft-4"&&(E<=C?delete b.maximum:delete b.exclusiveMaximum)),typeof w=="number"&&(b.multipleOf=w);break}case"boolean":{const b=A;b.type="boolean";break}case"bigint":{if(this.unrepresentable==="throw")throw new Error("BigInt cannot be represented in JSON Schema");break}case"symbol":{if(this.unrepresentable==="throw")throw new Error("Symbols cannot be represented in JSON Schema");break}case"null":{A.type="null";break}case"any":break;case"unknown":break;case"undefined":{if(this.unrepresentable==="throw")throw new Error("Undefined cannot be represented in JSON Schema");break}case"void":{if(this.unrepresentable==="throw")throw new Error("Void cannot be represented in JSON Schema");break}case"never":{A.not={};break}case"date":{if(this.unrepresentable==="throw")throw new Error("Date cannot be represented in JSON Schema");break}case"array":{const b=A,{minimum:I,maximum:C}=e._zod.bag;typeof I=="number"&&(b.minItems=I),typeof C=="number"&&(b.maxItems=C),b.type="array",b.items=this.process(t.element,{...T,path:[...T.path,"items"]});break}case"object":{const b=A;b.type="object",b.properties={};const I=t.shape;for(const w in I)b.properties[w]=this.process(I[w],{...T,path:[...T.path,"properties",w]});const C=new Set(Object.keys(I)),K=new Set([...C].filter(w=>{const E=t.shape[w]._zod;return this.io==="input"?E.optin===void 0:E.optout===void 0}));K.size>0&&(b.required=Array.from(K)),((k=t.catchall)==null?void 0:k._zod.def.type)==="never"?b.additionalProperties=!1:t.catchall?t.catchall&&(b.additionalProperties=this.process(t.catchall,{...T,path:[...T.path,"additionalProperties"]})):this.io==="output"&&(b.additionalProperties=!1);break}case"union":{const b=A;b.anyOf=t.options.map((I,C)=>this.process(I,{...T,path:[...T.path,"anyOf",C]}));break}case"intersection":{const b=A,I=this.process(t.left,{...T,path:[...T.path,"allOf",0]}),C=this.process(t.right,{...T,path:[...T.path,"allOf",1]}),K=E=>"allOf"in E&&Object.keys(E).length===1,w=[...K(I)?I.allOf:[I],...K(C)?C.allOf:[C]];b.allOf=w;break}case"tuple":{const b=A;b.type="array";const I=t.items.map((w,E)=>this.process(w,{...T,path:[...T.path,"prefixItems",E]}));if(this.target==="draft-2020-12"?b.prefixItems=I:b.items=I,t.rest){const w=this.process(t.rest,{...T,path:[...T.path,"items"]});this.target==="draft-2020-12"?b.items=w:b.additionalItems=w}t.rest&&(b.items=this.process(t.rest,{...T,path:[...T.path,"items"]}));const{minimum:C,maximum:K}=e._zod.bag;typeof C=="number"&&(b.minItems=C),typeof K=="number"&&(b.maxItems=K);break}case"record":{const b=A;b.type="object",this.target!=="draft-4"&&(b.propertyNames=this.process(t.keyType,{...T,path:[...T.path,"propertyNames"]})),b.additionalProperties=this.process(t.valueType,{...T,path:[...T.path,"additionalProperties"]});break}case"map":{if(this.unrepresentable==="throw")throw new Error("Map cannot be represented in JSON Schema");break}case"set":{if(this.unrepresentable==="throw")throw new Error("Set cannot be represented in JSON Schema");break}case"enum":{const b=A,I=Mm(t.entries);I.every(C=>typeof C=="number")&&(b.type="number"),I.every(C=>typeof C=="string")&&(b.type="string"),b.enum=I;break}case"literal":{const b=A,I=[];for(const C of t.values)if(C===void 0){if(this.unrepresentable==="throw")throw new Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof C=="bigint"){if(this.unrepresentable==="throw")throw new Error("BigInt literals cannot be represented in JSON Schema");I.push(Number(C))}else I.push(C);if(I.length!==0)if(I.length===1){const C=I[0];b.type=C===null?"null":typeof C,this.target==="draft-4"?b.enum=[C]:b.const=C}else I.every(C=>typeof C=="number")&&(b.type="number"),I.every(C=>typeof C=="string")&&(b.type="string"),I.every(C=>typeof C=="boolean")&&(b.type="string"),I.every(C=>C===null)&&(b.type="null"),b.enum=I;break}case"file":{const b=A,I={type:"string",format:"binary",contentEncoding:"binary"},{minimum:C,maximum:K,mime:w}=e._zod.bag;C!==void 0&&(I.minLength=C),K!==void 0&&(I.maxLength=K),w?w.length===1?(I.contentMediaType=w[0],Object.assign(b,I)):b.anyOf=w.map(E=>({...I,contentMediaType:E})):Object.assign(b,I);break}case"transform":{if(this.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema");break}case"nullable":{const b=this.process(t.innerType,T);A.anyOf=[b,{type:"null"}];break}case"nonoptional":{this.process(t.innerType,T),m.ref=t.innerType;break}case"success":{const b=A;b.type="boolean";break}case"default":{this.process(t.innerType,T),m.ref=t.innerType,A.default=JSON.parse(JSON.stringify(t.defaultValue));break}case"prefault":{this.process(t.innerType,T),m.ref=t.innerType,this.io==="input"&&(A._prefault=JSON.parse(JSON.stringify(t.defaultValue)));break}case"catch":{this.process(t.innerType,T),m.ref=t.innerType;let b;try{b=t.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}A.default=b;break}case"nan":{if(this.unrepresentable==="throw")throw new Error("NaN cannot be represented in JSON Schema");break}case"template_literal":{const b=A,I=e._zod.pattern;if(!I)throw new Error("Pattern not found in template literal");b.type="string",b.pattern=I.source;break}case"pipe":{const b=this.io==="input"?t.in._zod.def.type==="transform"?t.out:t.in:t.out;this.process(b,T),m.ref=b;break}case"readonly":{this.process(t.innerType,T),m.ref=t.innerType,A.readOnly=!0;break}case"promise":{this.process(t.innerType,T),m.ref=t.innerType;break}case"optional":{this.process(t.innerType,T),m.ref=t.innerType;break}case"lazy":{const b=e._zod.innerType;this.process(b,T),m.ref=b;break}case"custom":{if(this.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema");break}}}}const d=this.metadataRegistry.get(e);return d&&Object.assign(m.schema,d),this.io==="input"&&fe(e)&&(delete m.schema.examples,delete m.schema.default),this.io==="input"&&m.schema._prefault&&((r=m.schema).default??(r.default=m.schema._prefault)),delete m.schema._prefault,this.seen.get(e).schema}emit(e,o){var S,p,y,k,T,O;const r={cycles:(o==null?void 0:o.cycles)??"ref",reused:(o==null?void 0:o.reused)??"inline",external:(o==null?void 0:o.external)??void 0},t=this.seen.get(e);if(!t)throw new Error("Unprocessed schema. This is a bug in Zod.");const u=A=>{var w;const b=this.target==="draft-2020-12"?"$defs":"definitions";if(r.external){const E=(w=r.external.registry.get(A[0]))==null?void 0:w.id,j=r.external.uri??(X=>X);if(E)return{ref:j(E)};const z=A[1].defId??A[1].schema.id??`schema${this.counter++}`;return A[1].defId=z,{defId:z,ref:`${j("__shared")}#/${b}/${z}`}}if(A[1]===t)return{ref:"#"};const C=`#/${b}/`,K=A[1].schema.id??`__schema${this.counter++}`;return{defId:K,ref:C+K}},c=A=>{if(A[1].schema.$ref)return;const b=A[1],{ref:I,defId:C}=u(A);b.def={...b.schema},C&&(b.defId=C);const K=b.schema;for(const w in K)delete K[w];K.$ref=I};if(r.cycles==="throw")for(const A of this.seen.entries()){const b=A[1];if(b.cycle)throw new Error(`Cycle detected: #/${(S=b.cycle)==null?void 0:S.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const A of this.seen.entries()){const b=A[1];if(e===A[0]){c(A);continue}if(r.external){const C=(p=r.external.registry.get(A[0]))==null?void 0:p.id;if(e!==A[0]&&C){c(A);continue}}if((y=this.metadataRegistry.get(A[0]))==null?void 0:y.id){c(A);continue}if(b.cycle){c(A);continue}if(b.count>1&&r.reused==="ref"){c(A);continue}}const m=(A,b)=>{const I=this.seen.get(A),C=I.def??I.schema,K={...C};if(I.ref===null)return;const w=I.ref;if(I.ref=null,w){m(w,b);const E=this.seen.get(w).schema;E.$ref&&(b.target==="draft-7"||b.target==="draft-4")?(C.allOf=C.allOf??[],C.allOf.push(E)):(Object.assign(C,E),Object.assign(C,K))}I.isParent||this.override({zodSchema:A,jsonSchema:C,path:I.path??[]})};for(const A of[...this.seen.entries()].reverse())m(A[0],{target:this.target});const h={};if(this.target==="draft-2020-12"?h.$schema="https://json-schema.org/draft/2020-12/schema":this.target==="draft-7"?h.$schema="http://json-schema.org/draft-07/schema#":this.target==="draft-4"?h.$schema="http://json-schema.org/draft-04/schema#":console.warn(`Invalid target: ${this.target}`),(k=r.external)!=null&&k.uri){const A=(T=r.external.registry.get(e))==null?void 0:T.id;if(!A)throw new Error("Schema is missing an `id` property");h.$id=r.external.uri(A)}Object.assign(h,t.def);const d=((O=r.external)==null?void 0:O.defs)??{};for(const A of this.seen.entries()){const b=A[1];b.def&&b.defId&&(d[b.defId]=b.def)}r.external||Object.keys(d).length>0&&(this.target==="draft-2020-12"?h.$defs=d:h.definitions=d);try{return JSON.parse(JSON.stringify(h))}catch{throw new Error("Error converting schema to JSON.")}}}function Xw(n,e){if(n instanceof Fm){const r=new Cf(e),t={};for(const m of n._idmap.entries()){const[h,d]=m;r.process(d)}const u={},c={registry:n,uri:e==null?void 0:e.uri,defs:t};for(const m of n._idmap.entries()){const[h,d]=m;u[h]=r.emit(d,{...e,external:c})}if(Object.keys(t).length>0){const m=r.target==="draft-2020-12"?"$defs":"definitions";u.__shared={[m]:t}}return{schemas:u}}const o=new Cf(e);return o.process(n),o.emit(n,e)}function fe(n,e){const o=e??{seen:new Set};if(o.seen.has(n))return!1;o.seen.add(n);const t=n._zod.def;switch(t.type){case"string":case"number":case"bigint":case"boolean":case"date":case"symbol":case"undefined":case"null":case"any":case"unknown":case"never":case"void":case"literal":case"enum":case"nan":case"file":case"template_literal":return!1;case"array":return fe(t.element,o);case"object":{for(const u in t.shape)if(fe(t.shape[u],o))return!0;return!1}case"union":{for(const u of t.options)if(fe(u,o))return!0;return!1}case"intersection":return fe(t.left,o)||fe(t.right,o);case"tuple":{for(const u of t.items)if(fe(u,o))return!0;return!!(t.rest&&fe(t.rest,o))}case"record":return fe(t.keyType,o)||fe(t.valueType,o);case"map":return fe(t.keyType,o)||fe(t.valueType,o);case"set":return fe(t.valueType,o);case"promise":case"optional":case"nonoptional":case"nullable":case"readonly":return fe(t.innerType,o);case"lazy":return fe(t.getter(),o);case"default":return fe(t.innerType,o);case"prefault":return fe(t.innerType,o);case"custom":return!1;case"transform":return!0;case"pipe":return fe(t.in,o)||fe(t.out,o);case"success":return!1;case"catch":return!1}throw new Error(`Unknown schema type: ${t.type}`)}const dG=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),fG=Object.freeze(Object.defineProperty({__proto__:null,$ZodAny:RD,$ZodArray:_m,$ZodAsyncError:mo,$ZodBase64:kD,$ZodBase64URL:TD,$ZodBigInt:Lm,$ZodBigIntFormat:OD,$ZodBoolean:Gm,$ZodCIDRv4:yD,$ZodCIDRv6:vD,$ZodCUID:uD,$ZodCUID2:sD,$ZodCatch:XD,$ZodCheck:ae,$ZodCheckBigIntFormat:H0,$ZodCheckEndsWith:Z0,$ZodCheckGreaterThan:Nm,$ZodCheckIncludes:Y0,$ZodCheckLengthEquals:$0,$ZodCheckLessThan:Pm,$ZodCheckLowerCase:U0,$ZodCheckMaxLength:j0,$ZodCheckMaxSize:G0,$ZodCheckMimeType:X0,$ZodCheckMinLength:z0,$ZodCheckMinSize:L0,$ZodCheckMultipleOf:N0,$ZodCheckNumberFormat:E0,$ZodCheckOverwrite:q0,$ZodCheckProperty:J0,$ZodCheckRegex:F0,$ZodCheckSizeEquals:_0,$ZodCheckStartsWith:W0,$ZodCheckStringFormat:cu,$ZodCheckUpperCase:V0,$ZodCustom:aw,$ZodCustomStringFormat:wD,$ZodDate:ND,$ZodDefault:YD,$ZodDiscriminatedUnion:HD,$ZodE164:MD,$ZodEmail:aD,$ZodEmoji:oD,$ZodEnum:zD,$ZodError:Dm,$ZodFile:FD,$ZodFunction:Zw,$ZodGUID:eD,$ZodIPv4:SD,$ZodIPv6:pD,$ZodISODate:fD,$ZodISODateTime:dD,$ZodISODuration:gD,$ZodISOTime:mD,$ZodIntersection:GD,$ZodJWT:DD,$ZodKSUID:hD,$ZodLazy:tw,$ZodLiteral:$D,$ZodMap:_D,$ZodNaN:qD,$ZodNanoID:rD,$ZodNever:BD,$ZodNonOptional:ZD,$ZodNull:xD,$ZodNullable:VD,$ZodNumber:Hm,$ZodNumberFormat:CD,$ZodObject:ED,$ZodOptional:UD,$ZodPipe:$m,$ZodPrefault:WD,$ZodPromise:ew,$ZodReadonly:QD,$ZodRealError:lu,$ZodRecord:LD,$ZodRegistry:Fm,$ZodSet:jD,$ZodString:hu,$ZodStringFormat:Un,$ZodSuccess:JD,$ZodSymbol:ID,$ZodTemplateLiteral:nw,$ZodTransform:zm,$ZodTuple:Ql,$ZodType:bn,$ZodULID:lD,$ZodURL:iD,$ZodUUID:tD,$ZodUndefined:KD,$ZodUnion:jm,$ZodUnknown:Cl,$ZodVoid:PD,$ZodXID:cD,$brand:GA,$constructor:L,$input:uw,$output:rw,Doc:Q0,JSONSchema:dG,JSONSchemaGenerator:Cf,NEVER:HA,TimePrecision:cw,_any:xw,_array:Dg,_base64:lg,_base64url:cg,_bigint:Aw,_boolean:Tw,_catch:rG,_check:Yw,_cidrv4:ug,_cidrv6:sg,_coercedBigint:Dw,_coercedBoolean:Mw,_coercedDate:Nw,_coercedNumber:Sw,_coercedString:lw,_cuid:ng,_cuid2:eg,_custom:Fw,_date:Pw,_default:aG,_discriminatedUnion:VH,_e164:hg,_email:Vm,_emoji:qm,_endsWith:vg,_enum:XH,_file:$w,_float32:yw,_float64:vw,_gt:hi,_gte:Ze,_guid:Ol,_includes:pg,_int:pw,_int32:kw,_int64:ww,_intersection:YH,_ipv4:og,_ipv6:rg,_isoDate:dw,_isoDateTime:hw,_isoDuration:mw,_isoTime:fw,_jwt:dg,_ksuid:ig,_lazy:cG,_length:tc,_literal:QH,_lowercase:gg,_lt:ci,_lte:gt,_map:ZH,_max:gt,_maxLength:ec,_maxSize:nc,_mime:kg,_min:Ze,_minLength:po,_minSize:Wr,_multipleOf:Yr,_nan:Ew,_nanoid:Qm,_nativeEnum:qH,_negative:Gw,_never:Rw,_nonnegative:_w,_nonoptional:iG,_nonpositive:Lw,_normalize:bg,_null:Kw,_nullable:tG,_number:gw,_optional:eG,_overwrite:fi,_parse:Om,_parseAsync:Im,_pipe:uG,_positive:Hw,_promise:hG,_property:jw,_readonly:sG,_record:WH,_refine:Uw,_regex:mg,_safeParse:Km,_safeParseAsync:xm,_set:JH,_size:fg,_startsWith:yg,_string:sw,_stringFormat:wg,_stringbool:Ww,_success:oG,_superRefine:Vw,_symbol:Ow,_templateLiteral:lG,_toLowerCase:Mg,_toUpperCase:Ag,_transform:nG,_trim:Tg,_tuple:zw,_uint32:bw,_uint64:Cw,_ulid:tg,_undefined:Iw,_union:UH,_unknown:Il,_uppercase:Sg,_url:Xm,_uuid:Ym,_uuidv4:Wm,_uuidv6:Zm,_uuidv7:Jm,_void:Bw,_xid:ag,clone:pt,config:xe,flattenError:wm,formatError:Cm,function:Jw,globalConfig:Al,globalRegistry:ii,isValidBase64:Em,isValidBase64URL:bD,isValidJWT:AD,locales:ow,parse:Af,parseAsync:Df,prettifyError:n0,regexes:B0,registry:Um,safeParse:e0,safeParseAsync:t0,toDotPath:QA,toJSONSchema:Xw,treeifyError:qA,util:nE,version:nD},Symbol.toStringTag,{value:"Module"})),Cg=L("ZodISODateTime",(n,e)=>{dD.init(n,e),Vn.init(n,e)});function qw(n){return hw(Cg,n)}const Og=L("ZodISODate",(n,e)=>{fD.init(n,e),Vn.init(n,e)});function Qw(n){return dw(Og,n)}const Ig=L("ZodISOTime",(n,e)=>{mD.init(n,e),Vn.init(n,e)});function nC(n){return fw(Ig,n)}const Kg=L("ZodISODuration",(n,e)=>{gD.init(n,e),Vn.init(n,e)});function eC(n){return mw(Kg,n)}const mG=Object.freeze(Object.defineProperty({__proto__:null,ZodISODate:Og,ZodISODateTime:Cg,ZodISODuration:Kg,ZodISOTime:Ig,date:Qw,datetime:qw,duration:eC,time:nC},Symbol.toStringTag,{value:"Module"})),tC=(n,e)=>{Dm.init(n,e),n.name="ZodError",Object.defineProperties(n,{format:{value:o=>Cm(n,o)},flatten:{value:o=>wm(n,o)},addIssue:{value:o=>{n.issues.push(o),n.message=JSON.stringify(n.issues,Dl,2)}},addIssues:{value:o=>{n.issues.push(...o),n.message=JSON.stringify(n.issues,Dl,2)}},isEmpty:{get(){return n.issues.length===0}}})},gG=L("ZodError",tC),du=L("ZodError",tC,{Parent:Error}),aC=Om(du),iC=Im(du),oC=Km(du),rC=xm(du),wn=L("ZodType",(n,e)=>(bn.init(n,e),n.def=e,Object.defineProperty(n,"_def",{value:e}),n.check=(...o)=>n.clone({...e,checks:[...e.checks??[],...o.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),n.clone=(o,r)=>pt(n,o,r),n.brand=()=>n,n.register=(o,r)=>(o.add(n,r),n),n.parse=(o,r)=>aC(n,o,r,{callee:n.parse}),n.safeParse=(o,r)=>oC(n,o,r),n.parseAsync=async(o,r)=>iC(n,o,r,{callee:n.parseAsync}),n.safeParseAsync=async(o,r)=>rC(n,o,r),n.spa=n.safeParseAsync,n.refine=(o,r)=>n.check(UC(o,r)),n.superRefine=o=>n.check(VC(o)),n.overwrite=o=>n.check(fi(o)),n.optional=()=>Rl(n),n.nullable=()=>Bl(n),n.nullish=()=>Rl(Bl(n)),n.nonoptional=o=>PC(n,o),n.array=()=>Qg(n),n.or=o=>eS([n,o]),n.and=o=>kC(n,o),n.transform=o=>Pl(n,iS(o)),n.default=o=>xC(n,o),n.prefault=o=>BC(n,o),n.catch=o=>HC(n,o),n.pipe=o=>Pl(n,o),n.readonly=()=>_C(n),n.describe=o=>{const r=n.clone();return ii.add(r,{description:o}),r},Object.defineProperty(n,"description",{get(){var o;return(o=ii.get(n))==null?void 0:o.description},configurable:!0}),n.meta=(...o)=>{if(o.length===0)return ii.get(n);const r=n.clone();return ii.add(r,o[0]),r},n.isOptional=()=>n.safeParse(void 0).success,n.isNullable=()=>n.safeParse(null).success,n)),xg=L("_ZodString",(n,e)=>{hu.init(n,e),wn.init(n,e);const o=n._zod.bag;n.format=o.format??null,n.minLength=o.minimum??null,n.maxLength=o.maximum??null,n.regex=(...r)=>n.check(mg(...r)),n.includes=(...r)=>n.check(pg(...r)),n.startsWith=(...r)=>n.check(yg(...r)),n.endsWith=(...r)=>n.check(vg(...r)),n.min=(...r)=>n.check(po(...r)),n.max=(...r)=>n.check(ec(...r)),n.length=(...r)=>n.check(tc(...r)),n.nonempty=(...r)=>n.check(po(1,...r)),n.lowercase=r=>n.check(gg(r)),n.uppercase=r=>n.check(Sg(r)),n.trim=()=>n.check(Tg()),n.normalize=(...r)=>n.check(bg(...r)),n.toLowerCase=()=>n.check(Mg()),n.toUpperCase=()=>n.check(Ag())}),ac=L("ZodString",(n,e)=>{hu.init(n,e),xg.init(n,e),n.email=o=>n.check(Vm(Rg,o)),n.url=o=>n.check(Xm(Bg,o)),n.jwt=o=>n.check(dg(Wg,o)),n.emoji=o=>n.check(qm(Pg,o)),n.guid=o=>n.check(Ol(Kl,o)),n.uuid=o=>n.check(Ym(Zt,o)),n.uuidv4=o=>n.check(Wm(Zt,o)),n.uuidv6=o=>n.check(Zm(Zt,o)),n.uuidv7=o=>n.check(Jm(Zt,o)),n.nanoid=o=>n.check(Qm(Ng,o)),n.guid=o=>n.check(Ol(Kl,o)),n.cuid=o=>n.check(ng(Eg,o)),n.cuid2=o=>n.check(eg(Hg,o)),n.ulid=o=>n.check(tg(Gg,o)),n.base64=o=>n.check(lg(Ug,o)),n.base64url=o=>n.check(cg(Vg,o)),n.xid=o=>n.check(ag(Lg,o)),n.ksuid=o=>n.check(ig(_g,o)),n.ipv4=o=>n.check(og(jg,o)),n.ipv6=o=>n.check(rg(zg,o)),n.cidrv4=o=>n.check(ug($g,o)),n.cidrv6=o=>n.check(sg(Fg,o)),n.e164=o=>n.check(hg(Yg,o)),n.datetime=o=>n.check(qw(o)),n.date=o=>n.check(Qw(o)),n.time=o=>n.check(nC(o)),n.duration=o=>n.check(eC(o))});function Of(n){return sw(ac,n)}const Vn=L("ZodStringFormat",(n,e)=>{Un.init(n,e),xg.init(n,e)}),Rg=L("ZodEmail",(n,e)=>{aD.init(n,e),Vn.init(n,e)});function SG(n){return Vm(Rg,n)}const Kl=L("ZodGUID",(n,e)=>{eD.init(n,e),Vn.init(n,e)});function pG(n){return Ol(Kl,n)}const Zt=L("ZodUUID",(n,e)=>{tD.init(n,e),Vn.init(n,e)});function yG(n){return Ym(Zt,n)}function vG(n){return Wm(Zt,n)}function kG(n){return Zm(Zt,n)}function bG(n){return Jm(Zt,n)}const Bg=L("ZodURL",(n,e)=>{iD.init(n,e),Vn.init(n,e)});function TG(n){return Xm(Bg,n)}const Pg=L("ZodEmoji",(n,e)=>{oD.init(n,e),Vn.init(n,e)});function MG(n){return qm(Pg,n)}const Ng=L("ZodNanoID",(n,e)=>{rD.init(n,e),Vn.init(n,e)});function AG(n){return Qm(Ng,n)}const Eg=L("ZodCUID",(n,e)=>{uD.init(n,e),Vn.init(n,e)});function DG(n){return ng(Eg,n)}const Hg=L("ZodCUID2",(n,e)=>{sD.init(n,e),Vn.init(n,e)});function wG(n){return eg(Hg,n)}const Gg=L("ZodULID",(n,e)=>{lD.init(n,e),Vn.init(n,e)});function CG(n){return tg(Gg,n)}const Lg=L("ZodXID",(n,e)=>{cD.init(n,e),Vn.init(n,e)});function OG(n){return ag(Lg,n)}const _g=L("ZodKSUID",(n,e)=>{hD.init(n,e),Vn.init(n,e)});function IG(n){return ig(_g,n)}const jg=L("ZodIPv4",(n,e)=>{SD.init(n,e),Vn.init(n,e)});function KG(n){return og(jg,n)}const zg=L("ZodIPv6",(n,e)=>{pD.init(n,e),Vn.init(n,e)});function xG(n){return rg(zg,n)}const $g=L("ZodCIDRv4",(n,e)=>{yD.init(n,e),Vn.init(n,e)});function RG(n){return ug($g,n)}const Fg=L("ZodCIDRv6",(n,e)=>{vD.init(n,e),Vn.init(n,e)});function BG(n){return sg(Fg,n)}const Ug=L("ZodBase64",(n,e)=>{kD.init(n,e),Vn.init(n,e)});function PG(n){return lg(Ug,n)}const Vg=L("ZodBase64URL",(n,e)=>{TD.init(n,e),Vn.init(n,e)});function NG(n){return cg(Vg,n)}const Yg=L("ZodE164",(n,e)=>{MD.init(n,e),Vn.init(n,e)});function EG(n){return hg(Yg,n)}const Wg=L("ZodJWT",(n,e)=>{DD.init(n,e),Vn.init(n,e)});function HG(n){return dg(Wg,n)}const Zg=L("ZodCustomStringFormat",(n,e)=>{wD.init(n,e),Vn.init(n,e)});function GG(n,e,o={}){return wg(Zg,n,e,o)}function LG(n){return wg(Zg,"hostname",Bm,n)}const ic=L("ZodNumber",(n,e)=>{Hm.init(n,e),wn.init(n,e),n.gt=(r,t)=>n.check(hi(r,t)),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.lt=(r,t)=>n.check(ci(r,t)),n.lte=(r,t)=>n.check(gt(r,t)),n.max=(r,t)=>n.check(gt(r,t)),n.int=r=>n.check(If(r)),n.safe=r=>n.check(If(r)),n.positive=r=>n.check(hi(0,r)),n.nonnegative=r=>n.check(Ze(0,r)),n.negative=r=>n.check(ci(0,r)),n.nonpositive=r=>n.check(gt(0,r)),n.multipleOf=(r,t)=>n.check(Yr(r,t)),n.step=(r,t)=>n.check(Yr(r,t)),n.finite=()=>n;const o=n._zod.bag;n.minValue=Math.max(o.minimum??Number.NEGATIVE_INFINITY,o.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,n.maxValue=Math.min(o.maximum??Number.POSITIVE_INFINITY,o.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,n.isInt=(o.format??"").includes("int")||Number.isSafeInteger(o.multipleOf??.5),n.isFinite=!0,n.format=o.format??null});function uC(n){return gw(ic,n)}const Mo=L("ZodNumberFormat",(n,e)=>{CD.init(n,e),ic.init(n,e)});function If(n){return pw(Mo,n)}function _G(n){return yw(Mo,n)}function jG(n){return vw(Mo,n)}function zG(n){return kw(Mo,n)}function $G(n){return bw(Mo,n)}const oc=L("ZodBoolean",(n,e)=>{Gm.init(n,e),wn.init(n,e)});function sC(n){return Tw(oc,n)}const rc=L("ZodBigInt",(n,e)=>{Lm.init(n,e),wn.init(n,e),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.gt=(r,t)=>n.check(hi(r,t)),n.gte=(r,t)=>n.check(Ze(r,t)),n.min=(r,t)=>n.check(Ze(r,t)),n.lt=(r,t)=>n.check(ci(r,t)),n.lte=(r,t)=>n.check(gt(r,t)),n.max=(r,t)=>n.check(gt(r,t)),n.positive=r=>n.check(hi(BigInt(0),r)),n.negative=r=>n.check(ci(BigInt(0),r)),n.nonpositive=r=>n.check(gt(BigInt(0),r)),n.nonnegative=r=>n.check(Ze(BigInt(0),r)),n.multipleOf=(r,t)=>n.check(Yr(r,t));const o=n._zod.bag;n.minValue=o.minimum??null,n.maxValue=o.maximum??null,n.format=o.format??null});function FG(n){return Aw(rc,n)}const Jg=L("ZodBigIntFormat",(n,e)=>{OD.init(n,e),rc.init(n,e)});function UG(n){return ww(Jg,n)}function VG(n){return Cw(Jg,n)}const lC=L("ZodSymbol",(n,e)=>{ID.init(n,e),wn.init(n,e)});function YG(n){return Ow(lC,n)}const cC=L("ZodUndefined",(n,e)=>{KD.init(n,e),wn.init(n,e)});function WG(n){return Iw(cC,n)}const hC=L("ZodNull",(n,e)=>{xD.init(n,e),wn.init(n,e)});function dC(n){return Kw(hC,n)}const fC=L("ZodAny",(n,e)=>{RD.init(n,e),wn.init(n,e)});function ZG(){return xw(fC)}const mC=L("ZodUnknown",(n,e)=>{Cl.init(n,e),wn.init(n,e)});function xl(){return Il(mC)}const gC=L("ZodNever",(n,e)=>{BD.init(n,e),wn.init(n,e)});function Xg(n){return Rw(gC,n)}const SC=L("ZodVoid",(n,e)=>{PD.init(n,e),wn.init(n,e)});function JG(n){return Bw(SC,n)}const qg=L("ZodDate",(n,e)=>{ND.init(n,e),wn.init(n,e),n.min=(r,t)=>n.check(Ze(r,t)),n.max=(r,t)=>n.check(gt(r,t));const o=n._zod.bag;n.minDate=o.minimum?new Date(o.minimum):null,n.maxDate=o.maximum?new Date(o.maximum):null});function XG(n){return Pw(qg,n)}const pC=L("ZodArray",(n,e)=>{_m.init(n,e),wn.init(n,e),n.element=e.element,n.min=(o,r)=>n.check(po(o,r)),n.nonempty=o=>n.check(po(1,o)),n.max=(o,r)=>n.check(ec(o,r)),n.length=(o,r)=>n.check(tc(o,r)),n.unwrap=()=>n.element});function Qg(n,e){return Dg(pC,n,e)}function qG(n){const e=n._zod.def.shape;return CC(Object.keys(e))}const uc=L("ZodObject",(n,e)=>{ED.init(n,e),wn.init(n,e),Rn(n,"shape",()=>e.shape),n.keyof=()=>DC(Object.keys(n._zod.def.shape)),n.catchall=o=>n.clone({...n._zod.def,catchall:o}),n.passthrough=()=>n.clone({...n._zod.def,catchall:xl()}),n.loose=()=>n.clone({...n._zod.def,catchall:xl()}),n.strict=()=>n.clone({...n._zod.def,catchall:Xg()}),n.strip=()=>n.clone({...n._zod.def,catchall:void 0}),n.extend=o=>YA(n,o),n.merge=o=>WA(n,o),n.pick=o=>UA(n,o),n.omit=o=>VA(n,o),n.partial=(...o)=>ZA(oS,n,o[0]),n.required=(...o)=>JA(rS,n,o[0])});function QG(n,e){const o={type:"object",get shape(){return Bt(this,"shape",n?Jl(n):{}),this.shape},...J(e)};return new uc(o)}function nL(n,e){return new uc({type:"object",get shape(){return Bt(this,"shape",Jl(n)),this.shape},catchall:Xg(),...J(e)})}function eL(n,e){return new uc({type:"object",get shape(){return Bt(this,"shape",Jl(n)),this.shape},catchall:xl(),...J(e)})}const nS=L("ZodUnion",(n,e)=>{jm.init(n,e),wn.init(n,e),n.options=e.options});function eS(n,e){return new nS({type:"union",options:n,...J(e)})}const yC=L("ZodDiscriminatedUnion",(n,e)=>{nS.init(n,e),HD.init(n,e)});function tL(n,e,o){return new yC({type:"union",options:e,discriminator:n,...J(o)})}const vC=L("ZodIntersection",(n,e)=>{GD.init(n,e),wn.init(n,e)});function kC(n,e){return new vC({type:"intersection",left:n,right:e})}const bC=L("ZodTuple",(n,e)=>{Ql.init(n,e),wn.init(n,e),n.rest=o=>n.clone({...n._zod.def,rest:o})});function aL(n,e,o){const r=e instanceof bn,t=r?o:e,u=r?e:null;return new bC({type:"tuple",items:n,rest:u,...J(t)})}const tS=L("ZodRecord",(n,e)=>{LD.init(n,e),wn.init(n,e),n.keyType=e.keyType,n.valueType=e.valueType});function TC(n,e,o){return new tS({type:"record",keyType:n,valueType:e,...J(o)})}function iL(n,e,o){const r=pt(n);return r._zod.values=void 0,new tS({type:"record",keyType:r,valueType:e,...J(o)})}const MC=L("ZodMap",(n,e)=>{_D.init(n,e),wn.init(n,e),n.keyType=e.keyType,n.valueType=e.valueType});function oL(n,e,o){return new MC({type:"map",keyType:n,valueType:e,...J(o)})}const AC=L("ZodSet",(n,e)=>{jD.init(n,e),wn.init(n,e),n.min=(...o)=>n.check(Wr(...o)),n.nonempty=o=>n.check(Wr(1,o)),n.max=(...o)=>n.check(nc(...o)),n.size=(...o)=>n.check(fg(...o))});function rL(n,e){return new AC({type:"set",valueType:n,...J(e)})}const Zr=L("ZodEnum",(n,e)=>{zD.init(n,e),wn.init(n,e),n.enum=e.entries,n.options=Object.values(e.entries);const o=new Set(Object.keys(e.entries));n.extract=(r,t)=>{const u={};for(const c of r)if(o.has(c))u[c]=e.entries[c];else throw new Error(`Key ${c} not found in enum`);return new Zr({...e,checks:[],...J(t),entries:u})},n.exclude=(r,t)=>{const u={...e.entries};for(const c of r)if(o.has(c))delete u[c];else throw new Error(`Key ${c} not found in enum`);return new Zr({...e,checks:[],...J(t),entries:u})}});function DC(n,e){const o=Array.isArray(n)?Object.fromEntries(n.map(r=>[r,r])):n;return new Zr({type:"enum",entries:o,...J(e)})}function uL(n,e){return new Zr({type:"enum",entries:n,...J(e)})}const wC=L("ZodLiteral",(n,e)=>{$D.init(n,e),wn.init(n,e),n.values=new Set(e.values),Object.defineProperty(n,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function CC(n,e){return new wC({type:"literal",values:Array.isArray(n)?n:[n],...J(e)})}const OC=L("ZodFile",(n,e)=>{FD.init(n,e),wn.init(n,e),n.min=(o,r)=>n.check(Wr(o,r)),n.max=(o,r)=>n.check(nc(o,r)),n.mime=(o,r)=>n.check(kg(Array.isArray(o)?o:[o],r))});function sL(n){return $w(OC,n)}const aS=L("ZodTransform",(n,e)=>{zm.init(n,e),wn.init(n,e),n._zod.parse=(o,r)=>{o.addIssue=u=>{if(typeof u=="string")o.issues.push(go(u,o.value,e));else{const c=u;c.fatal&&(c.continue=!1),c.code??(c.code="custom"),c.input??(c.input=o.value),c.inst??(c.inst=n),o.issues.push(go(c))}};const t=e.transform(o.value,o);return t instanceof Promise?t.then(u=>(o.value=u,o)):(o.value=t,o)}});function iS(n){return new aS({type:"transform",transform:n})}const oS=L("ZodOptional",(n,e)=>{UD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function Rl(n){return new oS({type:"optional",innerType:n})}const IC=L("ZodNullable",(n,e)=>{VD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function Bl(n){return new IC({type:"nullable",innerType:n})}function lL(n){return Rl(Bl(n))}const KC=L("ZodDefault",(n,e)=>{YD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType,n.removeDefault=n.unwrap});function xC(n,e){return new KC({type:"default",innerType:n,get defaultValue(){return typeof e=="function"?e():e}})}const RC=L("ZodPrefault",(n,e)=>{WD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function BC(n,e){return new RC({type:"prefault",innerType:n,get defaultValue(){return typeof e=="function"?e():e}})}const rS=L("ZodNonOptional",(n,e)=>{ZD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function PC(n,e){return new rS({type:"nonoptional",innerType:n,...J(e)})}const NC=L("ZodSuccess",(n,e)=>{JD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function cL(n){return new NC({type:"success",innerType:n})}const EC=L("ZodCatch",(n,e)=>{XD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType,n.removeCatch=n.unwrap});function HC(n,e){return new EC({type:"catch",innerType:n,catchValue:typeof e=="function"?e:()=>e})}const GC=L("ZodNaN",(n,e)=>{qD.init(n,e),wn.init(n,e)});function hL(n){return Ew(GC,n)}const uS=L("ZodPipe",(n,e)=>{$m.init(n,e),wn.init(n,e),n.in=e.in,n.out=e.out});function Pl(n,e){return new uS({type:"pipe",in:n,out:e})}const LC=L("ZodReadonly",(n,e)=>{QD.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function _C(n){return new LC({type:"readonly",innerType:n})}const jC=L("ZodTemplateLiteral",(n,e)=>{nw.init(n,e),wn.init(n,e)});function dL(n,e){return new jC({type:"template_literal",parts:n,...J(e)})}const zC=L("ZodLazy",(n,e)=>{tw.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.getter()});function $C(n){return new zC({type:"lazy",getter:n})}const FC=L("ZodPromise",(n,e)=>{ew.init(n,e),wn.init(n,e),n.unwrap=()=>n._zod.def.innerType});function fL(n){return new FC({type:"promise",innerType:n})}const sc=L("ZodCustom",(n,e)=>{aw.init(n,e),wn.init(n,e)});function mL(n){const e=new ae({check:"custom"});return e._zod.check=n,e}function gL(n,e){return Fw(sc,n??(()=>!0),e)}function UC(n,e={}){return Uw(sc,n,e)}function VC(n){return Vw(n)}function SL(n,e={error:`Input not instance of ${n.name}`}){const o=new sc({type:"custom",check:"custom",fn:r=>r instanceof n,abort:!0,...J(e)});return o._zod.bag.Class=n,o}const pL=(...n)=>Ww({Pipe:uS,Boolean:oc,String:ac,Transform:aS},...n);function yL(n){const e=$C(()=>eS([Of(n),uC(),sC(),dC(),Qg(e),TC(Of(),e)]));return e}function vL(n,e){return Pl(iS(n),e)}const kL={invalid_type:"invalid_type",too_big:"too_big",too_small:"too_small",invalid_format:"invalid_format",not_multiple_of:"not_multiple_of",unrecognized_keys:"unrecognized_keys",invalid_union:"invalid_union",invalid_key:"invalid_key",invalid_element:"invalid_element",invalid_value:"invalid_value",custom:"custom"};function bL(n){xe({customError:n})}function TL(){return xe().customError}var Kf;Kf||(Kf={});function ML(n){return lw(ac,n)}function AL(n){return Sw(ic,n)}function DL(n){return Mw(oc,n)}function wL(n){return Dw(rc,n)}function CL(n){return Nw(qg,n)}const OL=Object.freeze(Object.defineProperty({__proto__:null,bigint:wL,boolean:DL,date:CL,number:AL,string:ML},Symbol.toStringTag,{value:"Module"}));xe(iw());const Ct=Object.freeze(Object.defineProperty({__proto__:null,$brand:GA,$input:uw,$output:rw,NEVER:HA,TimePrecision:cw,ZodAny:fC,ZodArray:pC,ZodBase64:Ug,ZodBase64URL:Vg,ZodBigInt:rc,ZodBigIntFormat:Jg,ZodBoolean:oc,ZodCIDRv4:$g,ZodCIDRv6:Fg,ZodCUID:Eg,ZodCUID2:Hg,ZodCatch:EC,ZodCustom:sc,ZodCustomStringFormat:Zg,ZodDate:qg,ZodDefault:KC,ZodDiscriminatedUnion:yC,ZodE164:Yg,ZodEmail:Rg,ZodEmoji:Pg,ZodEnum:Zr,ZodError:gG,ZodFile:OC,get ZodFirstPartyTypeKind(){return Kf},ZodGUID:Kl,ZodIPv4:jg,ZodIPv6:zg,ZodISODate:Og,ZodISODateTime:Cg,ZodISODuration:Kg,ZodISOTime:Ig,ZodIntersection:vC,ZodIssueCode:kL,ZodJWT:Wg,ZodKSUID:_g,ZodLazy:zC,ZodLiteral:wC,ZodMap:MC,ZodNaN:GC,ZodNanoID:Ng,ZodNever:gC,ZodNonOptional:rS,ZodNull:hC,ZodNullable:IC,ZodNumber:ic,ZodNumberFormat:Mo,ZodObject:uc,ZodOptional:oS,ZodPipe:uS,ZodPrefault:RC,ZodPromise:FC,ZodReadonly:LC,ZodRealError:du,ZodRecord:tS,ZodSet:AC,ZodString:ac,ZodStringFormat:Vn,ZodSuccess:NC,ZodSymbol:lC,ZodTemplateLiteral:jC,ZodTransform:aS,ZodTuple:bC,ZodType:wn,ZodULID:Gg,ZodURL:Bg,ZodUUID:Zt,ZodUndefined:cC,ZodUnion:nS,ZodUnknown:mC,ZodVoid:SC,ZodXID:Lg,_ZodString:xg,_default:xC,any:ZG,array:Qg,base64:PG,base64url:NG,bigint:FG,boolean:sC,catch:HC,check:mL,cidrv4:RG,cidrv6:BG,clone:pt,coerce:OL,config:xe,core:fG,cuid:DG,cuid2:wG,custom:gL,date:XG,discriminatedUnion:tL,e164:EG,email:SG,emoji:MG,endsWith:vg,enum:DC,file:sL,flattenError:wm,float32:_G,float64:jG,formatError:Cm,function:Jw,getErrorMap:TL,globalRegistry:ii,gt:hi,gte:Ze,guid:pG,hostname:LG,includes:pg,instanceof:SL,int:If,int32:zG,int64:UG,intersection:kC,ipv4:KG,ipv6:xG,iso:mG,json:yL,jwt:HG,keyof:qG,ksuid:IG,lazy:$C,length:tc,literal:CC,locales:ow,looseObject:eL,lowercase:gg,lt:ci,lte:gt,map:oL,maxLength:ec,maxSize:nc,mime:kg,minLength:po,minSize:Wr,multipleOf:Yr,nan:hL,nanoid:AG,nativeEnum:uL,negative:Gw,never:Xg,nonnegative:_w,nonoptional:PC,nonpositive:Lw,normalize:bg,null:dC,nullable:Bl,nullish:lL,number:uC,object:QG,optional:Rl,overwrite:fi,parse:aC,parseAsync:iC,partialRecord:iL,pipe:Pl,positive:Hw,prefault:BC,preprocess:vL,prettifyError:n0,promise:fL,property:jw,readonly:_C,record:TC,refine:UC,regex:mg,regexes:B0,registry:Um,safeParse:oC,safeParseAsync:rC,set:rL,setErrorMap:bL,size:fg,startsWith:yg,strictObject:nL,string:Of,stringFormat:GG,stringbool:pL,success:cL,superRefine:VC,symbol:YG,templateLiteral:dL,toJSONSchema:Xw,toLowerCase:Mg,toUpperCase:Ag,transform:iS,treeifyError:qA,trim:Tg,tuple:aL,uint32:$G,uint64:VG,ulid:CG,undefined:WG,union:eS,unknown:xl,uppercase:Sg,url:TG,uuid:yG,uuidv4:vG,uuidv6:kG,uuidv7:bG,void:JG,xid:OG},Symbol.toStringTag,{value:"Module"})),sS=GN.split(`
`).map(n=>n.trim());sS.filter((n,e)=>e%2===1);sS.filter((n,e)=>e%2===0);const YC=LN.split(`
`).map(n=>n.trim());YC.filter((n,e)=>e%2===1);const IL=YC.filter((n,e)=>e%2===0),KL=Ct.enum($1),xL=Ct.enum(hm),RL=Ct.enum(F1),BL=Ct.object({status:RL,guesses:Ct.array(Ct.string())}),PL=Ct.record(Ct.string(),BL),NL=Ct.object(Object.fromEntries(xL.options.map(n=>[n,PL.optional()]))),Fb=Ct.object(Object.fromEntries(KL.options.map(n=>[n,NL.optional()]))),WC=D.createContext(void 0),lS=()=>{const n=D.useContext(WC);if(!n)throw new Error("useGuessStateContext must be used within the provider!");return n},EL=({children:n})=>{const[e,o]=D.useState(()=>{const m=localStorage.getItem("guessStates");return console.log(m?JSON.parse(m):{}),m?JSON.parse(m):{}});D.useEffect(()=>{localStorage.setItem("guessStates",JSON.stringify(e))},[e]);const r=D.useCallback((m,h,d,S,p)=>{o(y=>{var b,I;const k=y[m]??{},T=((I=(b=k[h])==null?void 0:b[d])==null?void 0:I.guesses)??[],O=S!=null?[...T,S]:T;return{...y,[m]:{...k,[h]:{...k[h]||{},[d]:{status:p,guesses:O}}}}})},[]),t=D.useCallback(m=>o(m),[]),u=D.useCallback(()=>{const m=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),h=URL.createObjectURL(m),d=document.createElement("a");d.href=h,d.download="GuessTheAnimeOpeningEndingProgress.json",d.click(),URL.revokeObjectURL(h)},[e]),c=D.useMemo(()=>({guessStates:e,updateGuessStates:r,loadGuessStates:t,saveGuessStates:u}),[e,u]);return P.jsx(WC.Provider,{value:c,children:n})};function HL({song_id:n}){var u,c,m;const{mode:e}=uu(),{filter:o}=ru(),{guessStates:r}=lS(),t=((m=(c=(u=r[e])==null?void 0:u[o])==null?void 0:c[n])==null?void 0:m.status)??"None";return P.jsx("div",{className:`Song ${t} text-center text-s`,children:n})}function GL(){const n=ru();return P.jsx("div",{className:"SongListContainer",children:P.jsx("div",{className:`OpeningsSongList grid grid-cols-5 text-sm
                      sm:grid-cols-10 sm:text-md
                      md:grid-cols-10 md:text-lg
                      lg:grid-cols-15
                      xl:grid-cols-20
                      bg-gradient-to-b from-[var(--primary-color)] via-[var(--primary-color-gradient-two)] to-[var(--primary-color-gradient-three)]`,children:[...Array(to)].map((e,o)=>{const r=o+1;return P.jsx(Ka,{className:"linky border-2 border-blue-900",to:`/guess?id=${r}&filter=${n.filter}`,children:P.jsx(HL,{song_id:r})},r)})})})}function LL(n){const e=so.useRef(null),o=D.useCallback(()=>{e.current&&(e.current.value="",e.current.click())},[]);return{FileInput:P.jsx("input",{ref:e,type:"file",accept:".json,application/json",style:{display:"none"},onChange:async t=>{var m;const u=(m=t.target.files)==null?void 0:m[0];if(!u)return;const c=await u.text();try{const h=JSON.parse(c),d=Fb.safeParse(h);console.log(Fb.strict),d.success?n(d.data):n(null)}catch{n(null)}}}),openPicker:o}}const _L=({type:n,message:e,onDone:o,duration:r=3e3})=>(D.useEffect(()=>{const t=setTimeout(o,r);return()=>clearTimeout(t)},[r,o]),P.jsx("div",{className:`Alert ${n==="Success"?"Success":"Error"}`,children:e})),ZC=D.createContext({});function JC(n){const e=D.useRef(null);return e.current===null&&(e.current=n()),e.current}const cS=typeof window<"u",XC=cS?D.useLayoutEffect:D.useEffect,hS=D.createContext(null);function dS(n,e){n.indexOf(e)===-1&&n.push(e)}function fS(n,e){const o=n.indexOf(e);o>-1&&n.splice(o,1)}const na=(n,e,o)=>o>e?e:o<n?n:o;let mS=()=>{};const ea={},qC=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function QC(n){return typeof n=="object"&&n!==null}const nO=n=>/^0[^.\s]+$/u.test(n);function gS(n){let e;return()=>(e===void 0&&(e=n()),e)}const st=n=>n,jL=(n,e)=>o=>e(n(o)),fu=(...n)=>n.reduce(jL),Jr=(n,e,o)=>{const r=e-n;return r===0?1:(o-n)/r};class SS{constructor(){this.subscriptions=[]}add(e){return dS(this.subscriptions,e),()=>fS(this.subscriptions,e)}notify(e,o,r){const t=this.subscriptions.length;if(t)if(t===1)this.subscriptions[0](e,o,r);else for(let u=0;u<t;u++){const c=this.subscriptions[u];c&&c(e,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ot=n=>n*1e3,It=n=>n/1e3;function eO(n,e){return e?n*(1e3/e):0}const tO=(n,e,o)=>(((1-3*o+3*e)*n+(3*o-6*e))*n+3*e)*n,zL=1e-7,$L=12;function FL(n,e,o,r,t){let u,c,m=0;do c=e+(o-e)/2,u=tO(c,r,t)-n,u>0?o=c:e=c;while(Math.abs(u)>zL&&++m<$L);return c}function mu(n,e,o,r){if(n===e&&o===r)return st;const t=u=>FL(u,0,1,n,o);return u=>u===0||u===1?u:tO(t(u),e,r)}const aO=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,iO=n=>e=>1-n(1-e),oO=mu(.33,1.53,.69,.99),pS=iO(oO),rO=aO(pS),uO=n=>(n*=2)<1?.5*pS(n):.5*(2-Math.pow(2,-10*(n-1))),yS=n=>1-Math.sin(Math.acos(n)),sO=iO(yS),lO=aO(yS),UL=mu(.42,0,1,1),VL=mu(0,0,.58,1),cO=mu(.42,0,.58,1),YL=n=>Array.isArray(n)&&typeof n[0]!="number",hO=n=>Array.isArray(n)&&typeof n[0]=="number",WL={linear:st,easeIn:UL,easeInOut:cO,easeOut:VL,circIn:yS,circInOut:lO,circOut:sO,backIn:pS,backInOut:rO,backOut:oO,anticipate:uO},ZL=n=>typeof n=="string",Ub=n=>{if(hO(n)){mS(n.length===4);const[e,o,r,t]=n;return mu(e,o,r,t)}else if(ZL(n))return WL[n];return n},Ls=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function JL(n,e){let o=new Set,r=new Set,t=!1,u=!1;const c=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(S){c.has(S)&&(d.schedule(S),n()),S(m)}const d={schedule:(S,p=!1,y=!1)=>{const T=y&&t?o:r;return p&&c.add(S),T.has(S)||T.add(S),S},cancel:S=>{r.delete(S),c.delete(S)},process:S=>{if(m=S,t){u=!0;return}t=!0,[o,r]=[r,o],o.forEach(h),o.clear(),t=!1,u&&(u=!1,d.process(S))}};return d}const XL=40;function dO(n,e){let o=!1,r=!0;const t={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,c=Ls.reduce((C,K)=>(C[K]=JL(u),C),{}),{setup:m,read:h,resolveKeyframes:d,preUpdate:S,update:p,preRender:y,render:k,postRender:T}=c,O=()=>{const C=ea.useManualTiming?t.timestamp:performance.now();o=!1,ea.useManualTiming||(t.delta=r?1e3/60:Math.max(Math.min(C-t.timestamp,XL),1)),t.timestamp=C,t.isProcessing=!0,m.process(t),h.process(t),d.process(t),S.process(t),p.process(t),y.process(t),k.process(t),T.process(t),t.isProcessing=!1,o&&e&&(r=!1,n(O))},A=()=>{o=!0,r=!0,t.isProcessing||n(O)};return{schedule:Ls.reduce((C,K)=>{const w=c[K];return C[K]=(E,j=!1,z=!1)=>(o||A(),w.schedule(E,j,z)),C},{}),cancel:C=>{for(let K=0;K<Ls.length;K++)c[Ls[K]].cancel(C)},state:t,steps:c}}const{schedule:Wn,cancel:Ra,state:Te,steps:zd}=dO(typeof requestAnimationFrame<"u"?requestAnimationFrame:st,!0);let al;function qL(){al=void 0}const He={now:()=>(al===void 0&&He.set(Te.isProcessing||ea.useManualTiming?Te.timestamp:performance.now()),al),set:n=>{al=n,queueMicrotask(qL)}},fO=n=>e=>typeof e=="string"&&e.startsWith(n),vS=fO("--"),QL=fO("var(--"),kS=n=>QL(n)?n_.test(n.split("/*")[0].trim()):!1,n_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ao={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Xr={...Ao,transform:n=>na(0,1,n)},_s={...Ao,default:1},Er=n=>Math.round(n*1e5)/1e5,bS=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function e_(n){return n==null}const t_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,TS=(n,e)=>o=>!!(typeof o=="string"&&t_.test(o)&&o.startsWith(n)||e&&!e_(o)&&Object.prototype.hasOwnProperty.call(o,e)),mO=(n,e,o)=>r=>{if(typeof r!="string")return r;const[t,u,c,m]=r.match(bS);return{[n]:parseFloat(t),[e]:parseFloat(u),[o]:parseFloat(c),alpha:m!==void 0?parseFloat(m):1}},a_=n=>na(0,255,n),$d={...Ao,transform:n=>Math.round(a_(n))},oi={test:TS("rgb","red"),parse:mO("red","green","blue"),transform:({red:n,green:e,blue:o,alpha:r=1})=>"rgba("+$d.transform(n)+", "+$d.transform(e)+", "+$d.transform(o)+", "+Er(Xr.transform(r))+")"};function i_(n){let e="",o="",r="",t="";return n.length>5?(e=n.substring(1,3),o=n.substring(3,5),r=n.substring(5,7),t=n.substring(7,9)):(e=n.substring(1,2),o=n.substring(2,3),r=n.substring(3,4),t=n.substring(4,5),e+=e,o+=o,r+=r,t+=t),{red:parseInt(e,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:t?parseInt(t,16)/255:1}}const xf={test:TS("#"),parse:i_,transform:oi.transform},gu=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ia=gu("deg"),Kt=gu("%"),vn=gu("px"),o_=gu("vh"),r_=gu("vw"),Vb={...Kt,parse:n=>Kt.parse(n)/100,transform:n=>Kt.transform(n*100)},ao={test:TS("hsl","hue"),parse:mO("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:o,alpha:r=1})=>"hsla("+Math.round(n)+", "+Kt.transform(Er(e))+", "+Kt.transform(Er(o))+", "+Er(Xr.transform(r))+")"},le={test:n=>oi.test(n)||xf.test(n)||ao.test(n),parse:n=>oi.test(n)?oi.parse(n):ao.test(n)?ao.parse(n):xf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?oi.transform(n):ao.transform(n),getAnimatableNone:n=>{const e=le.parse(n);return e.alpha=0,le.transform(e)}},u_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function s_(n){var e,o;return isNaN(n)&&typeof n=="string"&&(((e=n.match(bS))==null?void 0:e.length)||0)+(((o=n.match(u_))==null?void 0:o.length)||0)>0}const gO="number",SO="color",l_="var",c_="var(",Yb="${}",h_=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qr(n){const e=n.toString(),o=[],r={color:[],number:[],var:[]},t=[];let u=0;const m=e.replace(h_,h=>(le.test(h)?(r.color.push(u),t.push(SO),o.push(le.parse(h))):h.startsWith(c_)?(r.var.push(u),t.push(l_),o.push(h)):(r.number.push(u),t.push(gO),o.push(parseFloat(h))),++u,Yb)).split(Yb);return{values:o,split:m,indexes:r,types:t}}function pO(n){return qr(n).values}function yO(n){const{split:e,types:o}=qr(n),r=e.length;return t=>{let u="";for(let c=0;c<r;c++)if(u+=e[c],t[c]!==void 0){const m=o[c];m===gO?u+=Er(t[c]):m===SO?u+=le.transform(t[c]):u+=t[c]}return u}}const d_=n=>typeof n=="number"?0:le.test(n)?le.getAnimatableNone(n):n;function f_(n){const e=pO(n);return yO(n)(e.map(d_))}const Ba={test:s_,parse:pO,createTransformer:yO,getAnimatableNone:f_};function Fd(n,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(e-n)*6*o:o<1/2?e:o<2/3?n+(e-n)*(2/3-o)*6:n}function m_({hue:n,saturation:e,lightness:o,alpha:r}){n/=360,e/=100,o/=100;let t=0,u=0,c=0;if(!e)t=u=c=o;else{const m=o<.5?o*(1+e):o+e-o*e,h=2*o-m;t=Fd(h,m,n+1/3),u=Fd(h,m,n),c=Fd(h,m,n-1/3)}return{red:Math.round(t*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:r}}function Nl(n,e){return o=>o>0?e:n}const Jn=(n,e,o)=>n+(e-n)*o,Ud=(n,e,o)=>{const r=n*n,t=o*(e*e-r)+r;return t<0?0:Math.sqrt(t)},g_=[xf,oi,ao],S_=n=>g_.find(e=>e.test(n));function Wb(n){const e=S_(n);if(!e)return!1;let o=e.parse(n);return e===ao&&(o=m_(o)),o}const Zb=(n,e)=>{const o=Wb(n),r=Wb(e);if(!o||!r)return Nl(n,e);const t={...o};return u=>(t.red=Ud(o.red,r.red,u),t.green=Ud(o.green,r.green,u),t.blue=Ud(o.blue,r.blue,u),t.alpha=Jn(o.alpha,r.alpha,u),oi.transform(t))},Rf=new Set(["none","hidden"]);function p_(n,e){return Rf.has(n)?o=>o<=0?n:e:o=>o>=1?e:n}function y_(n,e){return o=>Jn(n,e,o)}function MS(n){return typeof n=="number"?y_:typeof n=="string"?kS(n)?Nl:le.test(n)?Zb:b_:Array.isArray(n)?vO:typeof n=="object"?le.test(n)?Zb:v_:Nl}function vO(n,e){const o=[...n],r=o.length,t=n.map((u,c)=>MS(u)(u,e[c]));return u=>{for(let c=0;c<r;c++)o[c]=t[c](u);return o}}function v_(n,e){const o={...n,...e},r={};for(const t in o)n[t]!==void 0&&e[t]!==void 0&&(r[t]=MS(n[t])(n[t],e[t]));return t=>{for(const u in r)o[u]=r[u](t);return o}}function k_(n,e){const o=[],r={color:0,var:0,number:0};for(let t=0;t<e.values.length;t++){const u=e.types[t],c=n.indexes[u][r[u]],m=n.values[c]??0;o[t]=m,r[u]++}return o}const b_=(n,e)=>{const o=Ba.createTransformer(e),r=qr(n),t=qr(e);return r.indexes.var.length===t.indexes.var.length&&r.indexes.color.length===t.indexes.color.length&&r.indexes.number.length>=t.indexes.number.length?Rf.has(n)&&!t.values.length||Rf.has(e)&&!r.values.length?p_(n,e):fu(vO(k_(r,t),t.values),o):Nl(n,e)};function kO(n,e,o){return typeof n=="number"&&typeof e=="number"&&typeof o=="number"?Jn(n,e,o):MS(n)(n,e)}const T_=n=>{const e=({timestamp:o})=>n(o);return{start:(o=!0)=>Wn.update(e,o),stop:()=>Ra(e),now:()=>Te.isProcessing?Te.timestamp:He.now()}},bO=(n,e,o=10)=>{let r="";const t=Math.max(Math.round(e/o),2);for(let u=0;u<t;u++)r+=Math.round(n(u/(t-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},El=2e4;function AS(n){let e=0;const o=50;let r=n.next(e);for(;!r.done&&e<El;)e+=o,r=n.next(e);return e>=El?1/0:e}function M_(n,e=100,o){const r=o({...n,keyframes:[0,e]}),t=Math.min(AS(r),El);return{type:"keyframes",ease:u=>r.next(t*u).value/e,duration:It(t)}}const A_=5;function TO(n,e,o){const r=Math.max(e-A_,0);return eO(o-n(r),e-r)}const ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vd=.001;function D_({duration:n=ee.duration,bounce:e=ee.bounce,velocity:o=ee.velocity,mass:r=ee.mass}){let t,u,c=1-e;c=na(ee.minDamping,ee.maxDamping,c),n=na(ee.minDuration,ee.maxDuration,It(n)),c<1?(t=d=>{const S=d*c,p=S*n,y=S-o,k=Bf(d,c),T=Math.exp(-p);return Vd-y/k*T},u=d=>{const p=d*c*n,y=p*o+o,k=Math.pow(c,2)*Math.pow(d,2)*n,T=Math.exp(-p),O=Bf(Math.pow(d,2),c);return(-t(d)+Vd>0?-1:1)*((y-k)*T)/O}):(t=d=>{const S=Math.exp(-d*n),p=(d-o)*n+1;return-Vd+S*p},u=d=>{const S=Math.exp(-d*n),p=(o-d)*(n*n);return S*p});const m=5/n,h=C_(t,u,m);if(n=Ot(n),isNaN(h))return{stiffness:ee.stiffness,damping:ee.damping,duration:n};{const d=Math.pow(h,2)*r;return{stiffness:d,damping:c*2*Math.sqrt(r*d),duration:n}}}const w_=12;function C_(n,e,o){let r=o;for(let t=1;t<w_;t++)r=r-n(r)/e(r);return r}function Bf(n,e){return n*Math.sqrt(1-e*e)}const O_=["duration","bounce"],I_=["stiffness","damping","mass"];function Jb(n,e){return e.some(o=>n[o]!==void 0)}function K_(n){let e={velocity:ee.velocity,stiffness:ee.stiffness,damping:ee.damping,mass:ee.mass,isResolvedFromDuration:!1,...n};if(!Jb(n,I_)&&Jb(n,O_))if(n.visualDuration){const o=n.visualDuration,r=2*Math.PI/(o*1.2),t=r*r,u=2*na(.05,1,1-(n.bounce||0))*Math.sqrt(t);e={...e,mass:ee.mass,stiffness:t,damping:u}}else{const o=D_(n);e={...e,...o,mass:ee.mass},e.isResolvedFromDuration=!0}return e}function Hl(n=ee.visualDuration,e=ee.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:t}=o;const u=o.keyframes[0],c=o.keyframes[o.keyframes.length-1],m={done:!1,value:u},{stiffness:h,damping:d,mass:S,duration:p,velocity:y,isResolvedFromDuration:k}=K_({...o,velocity:-It(o.velocity||0)}),T=y||0,O=d/(2*Math.sqrt(h*S)),A=c-u,b=It(Math.sqrt(h/S)),I=Math.abs(A)<5;r||(r=I?ee.restSpeed.granular:ee.restSpeed.default),t||(t=I?ee.restDelta.granular:ee.restDelta.default);let C;if(O<1){const w=Bf(b,O);C=E=>{const j=Math.exp(-O*b*E);return c-j*((T+O*b*A)/w*Math.sin(w*E)+A*Math.cos(w*E))}}else if(O===1)C=w=>c-Math.exp(-b*w)*(A+(T+b*A)*w);else{const w=b*Math.sqrt(O*O-1);C=E=>{const j=Math.exp(-O*b*E),z=Math.min(w*E,300);return c-j*((T+O*b*A)*Math.sinh(z)+w*A*Math.cosh(z))/w}}const K={calculatedDuration:k&&p||null,next:w=>{const E=C(w);if(k)m.done=w>=p;else{let j=w===0?T:0;O<1&&(j=w===0?Ot(T):TO(C,w,E));const z=Math.abs(j)<=r,X=Math.abs(c-E)<=t;m.done=z&&X}return m.value=m.done?c:E,m},toString:()=>{const w=Math.min(AS(K),El),E=bO(j=>K.next(w*j).value,w,30);return w+"ms "+E},toTransition:()=>{}};return K}Hl.applyToOptions=n=>{const e=M_(n,100,Hl);return n.ease=e.ease,n.duration=Ot(e.duration),n.type="keyframes",n};function Pf({keyframes:n,velocity:e=0,power:o=.8,timeConstant:r=325,bounceDamping:t=10,bounceStiffness:u=500,modifyTarget:c,min:m,max:h,restDelta:d=.5,restSpeed:S}){const p=n[0],y={done:!1,value:p},k=z=>m!==void 0&&z<m||h!==void 0&&z>h,T=z=>m===void 0?h:h===void 0||Math.abs(m-z)<Math.abs(h-z)?m:h;let O=o*e;const A=p+O,b=c===void 0?A:c(A);b!==A&&(O=b-p);const I=z=>-O*Math.exp(-z/r),C=z=>b+I(z),K=z=>{const X=I(z),on=C(z);y.done=Math.abs(X)<=d,y.value=y.done?b:on};let w,E;const j=z=>{k(y.value)&&(w=z,E=Hl({keyframes:[y.value,T(y.value)],velocity:TO(C,z,y.value),damping:t,stiffness:u,restDelta:d,restSpeed:S}))};return j(0),{calculatedDuration:null,next:z=>{let X=!1;return!E&&w===void 0&&(X=!0,K(z),j(z)),w!==void 0&&z>=w?E.next(z-w):(!X&&K(z),y)}}}function x_(n,e,o){const r=[],t=o||ea.mix||kO,u=n.length-1;for(let c=0;c<u;c++){let m=t(n[c],n[c+1]);if(e){const h=Array.isArray(e)?e[c]||st:e;m=fu(h,m)}r.push(m)}return r}function R_(n,e,{clamp:o=!0,ease:r,mixer:t}={}){const u=n.length;if(mS(u===e.length),u===1)return()=>e[0];if(u===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),e=[...e].reverse());const m=x_(e,r,t),h=m.length,d=S=>{if(c&&S<n[0])return e[0];let p=0;if(h>1)for(;p<n.length-2&&!(S<n[p+1]);p++);const y=Jr(n[p],n[p+1],S);return m[p](y)};return o?S=>d(na(n[0],n[u-1],S)):d}function B_(n,e){const o=n[n.length-1];for(let r=1;r<=e;r++){const t=Jr(0,e,r);n.push(Jn(o,1,t))}}function P_(n){const e=[0];return B_(e,n.length-1),e}function N_(n,e){return n.map(o=>o*e)}function E_(n,e){return n.map(()=>e||cO).splice(0,n.length-1)}function Hr({duration:n=300,keyframes:e,times:o,ease:r="easeInOut"}){const t=YL(r)?r.map(Ub):Ub(r),u={done:!1,value:e[0]},c=N_(o&&o.length===e.length?o:P_(e),n),m=R_(c,e,{ease:Array.isArray(t)?t:E_(e,t)});return{calculatedDuration:n,next:h=>(u.value=m(h),u.done=h>=n,u)}}const H_=n=>n!==null;function DS(n,{repeat:e,repeatType:o="loop"},r,t=1){const u=n.filter(H_),m=t<0||e&&o!=="loop"&&e%2===1?0:u.length-1;return!m||r===void 0?u[m]:r}const G_={decay:Pf,inertia:Pf,tween:Hr,keyframes:Hr,spring:Hl};function MO(n){typeof n.type=="string"&&(n.type=G_[n.type])}class wS{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,o){return this.finished.then(e,o)}}const L_=n=>n/100;class CS extends wS{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,t;const{motionValue:o}=this.options;o&&o.updatedAt!==He.now()&&this.tick(He.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(t=(r=this.options).onStop)==null||t.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;MO(e);const{type:o=Hr,repeat:r=0,repeatDelay:t=0,repeatType:u,velocity:c=0}=e;let{keyframes:m}=e;const h=o||Hr;h!==Hr&&typeof m[0]!="number"&&(this.mixKeyframes=fu(L_,kO(m[0],m[1])),m=[0,100]);const d=h({...e,keyframes:m});u==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...m].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=AS(d));const{calculatedDuration:S}=d;this.calculatedDuration=S,this.resolvedDuration=S+t,this.totalDuration=this.resolvedDuration*(r+1)-t,this.generator=d}updateTime(e){const o=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(e,o=!1){const{generator:r,totalDuration:t,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:m,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:S,repeat:p,repeatType:y,repeatDelay:k,type:T,onUpdate:O,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-t/this.speed,this.startTime)),o?this.currentTime=e:this.updateTime(e);const b=this.currentTime-d*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?b<0:b>t;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=t);let C=this.currentTime,K=r;if(p){const z=Math.min(this.currentTime,t)/m;let X=Math.floor(z),on=z%1;!on&&z>=1&&(on=1),on===1&&X--,X=Math.min(X,p+1),!!(X%2)&&(y==="reverse"?(on=1-on,k&&(on-=k/m)):y==="mirror"&&(K=c)),C=na(0,1,on)*m}const w=I?{done:!1,value:S[0]}:K.next(C);u&&(w.value=u(w.value));let{done:E}=w;!I&&h!==null&&(E=this.playbackSpeed>=0?this.currentTime>=t:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return j&&T!==Pf&&(w.value=DS(S,this.options,A,this.speed)),O&&O(w.value),j&&this.finish(),w}then(e,o){return this.finished.then(e,o)}get duration(){return It(this.calculatedDuration)}get time(){return It(this.currentTime)}set time(e){var o;e=Ot(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(He.now());const o=this.playbackSpeed!==e;this.playbackSpeed=e,o&&(this.time=It(this.currentTime))}play(){var t,u;if(this.isStopped)return;const{driver:e=T_,startTime:o}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(u=(t=this.options).onPlay)==null||u.call(t);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(He.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(e=this.options).onComplete)==null||o.call(e)}cancel(){var e,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(e=this.options).onCancel)==null||o.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),e.observe(this)}}function __(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const ri=n=>n*180/Math.PI,Nf=n=>{const e=ri(Math.atan2(n[1],n[0]));return Ef(e)},j_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Nf,rotateZ:Nf,skewX:n=>ri(Math.atan(n[1])),skewY:n=>ri(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ef=n=>(n=n%360,n<0&&(n+=360),n),Xb=Nf,qb=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Qb=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),z_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:qb,scaleY:Qb,scale:n=>(qb(n)+Qb(n))/2,rotateX:n=>Ef(ri(Math.atan2(n[6],n[5]))),rotateY:n=>Ef(ri(Math.atan2(-n[2],n[0]))),rotateZ:Xb,rotate:Xb,skewX:n=>ri(Math.atan(n[4])),skewY:n=>ri(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Hf(n){return n.includes("scale")?1:0}function Gf(n,e){if(!n||n==="none")return Hf(e);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,t;if(o)r=z_,t=o;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=j_,t=m}if(!t)return Hf(e);const u=r[e],c=t[1].split(",").map(F_);return typeof u=="function"?u(c):c[u]}const $_=(n,e)=>{const{transform:o="none"}=getComputedStyle(n);return Gf(o,e)};function F_(n){return parseFloat(n.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wo=new Set(Do),nT=n=>n===Ao||n===vn,U_=new Set(["x","y","z"]),V_=Do.filter(n=>!U_.has(n));function Y_(n){const e=[];return V_.forEach(o=>{const r=n.getValue(o);r!==void 0&&(e.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),e}const ui={width:({x:n},{paddingLeft:e="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(e)-parseFloat(o),height:({y:n},{paddingTop:e="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(e)-parseFloat(o),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Gf(e,"x"),y:(n,{transform:e})=>Gf(e,"y")};ui.translateX=ui.x;ui.translateY=ui.y;const si=new Set;let Lf=!1,_f=!1,jf=!1;function AO(){if(_f){const n=Array.from(si).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),o=new Map;e.forEach(r=>{const t=Y_(r);t.length&&(o.set(r,t),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const t=o.get(r);t&&t.forEach(([u,c])=>{var m;(m=r.getValue(u))==null||m.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}_f=!1,Lf=!1,si.forEach(n=>n.complete(jf)),si.clear()}function DO(){si.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(_f=!0)})}function W_(){jf=!0,DO(),AO(),jf=!1}class OS{constructor(e,o,r,t,u,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=o,this.name=r,this.motionValue=t,this.element=u,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(si.add(this),Lf||(Lf=!0,Wn.read(DO),Wn.resolveKeyframes(AO))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:o,element:r,motionValue:t}=this;if(e[0]===null){const u=t==null?void 0:t.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&o){const m=r.readValue(o,c);m!=null&&(e[0]=m)}e[0]===void 0&&(e[0]=c),t&&u===void 0&&t.set(e[0])}__(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),si.delete(this)}cancel(){this.state==="scheduled"&&(si.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Z_=n=>n.startsWith("--");function J_(n,e,o){Z_(e)?n.style.setProperty(e,o):n.style[e]=o}const X_=gS(()=>window.ScrollTimeline!==void 0),q_={};function Q_(n,e){const o=gS(n);return()=>q_[e]??o()}const wO=Q_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Nr=([n,e,o,r])=>`cubic-bezier(${n}, ${e}, ${o}, ${r})`,eT={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Nr([0,.65,.55,1]),circOut:Nr([.55,0,1,.45]),backIn:Nr([.31,.01,.66,-.59]),backOut:Nr([.33,1.53,.69,.99])};function CO(n,e){if(n)return typeof n=="function"?wO()?bO(n,e):"ease-out":hO(n)?Nr(n):Array.isArray(n)?n.map(o=>CO(o,e)||eT.easeOut):eT[n]}function nj(n,e,o,{delay:r=0,duration:t=300,repeat:u=0,repeatType:c="loop",ease:m="easeOut",times:h}={},d=void 0){const S={[e]:o};h&&(S.offset=h);const p=CO(m,t);Array.isArray(p)&&(S.easing=p);const y={delay:r,duration:t,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return d&&(y.pseudoElement=d),n.animate(S,y)}function OO(n){return typeof n=="function"&&"applyToOptions"in n}function ej({type:n,...e}){return OO(n)&&wO()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class tj extends wS{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:o,name:r,keyframes:t,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:m,onComplete:h}=e;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=e,mS(typeof e.type!="string");const d=ej(e);this.animation=nj(o,r,t,d,u),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const S=DS(t,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(S):J_(o,r,S),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,o;(o=(e=this.animation).finish)==null||o.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,o;this.isPseudoElement||(o=(e=this.animation).commitStyles)==null||o.call(e)}get duration(){var o,r;const e=((r=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:r.call(o).duration)||0;return It(Number(e))}get time(){return It(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Ot(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:o}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&X_()?(this.animation.timeline=e,st):o(this)}}const IO={anticipate:uO,backInOut:rO,circInOut:lO};function aj(n){return n in IO}function ij(n){typeof n.ease=="string"&&aj(n.ease)&&(n.ease=IO[n.ease])}const tT=10;class oj extends tj{constructor(e){ij(e),MO(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:o,onUpdate:r,onComplete:t,element:u,...c}=this.options;if(!o)return;if(e!==void 0){o.set(e);return}const m=new CS({...c,autoplay:!1}),h=Ot(this.finishedTime??this.time);o.setWithVelocity(m.sample(h-tT).value,m.sample(h).value,tT),m.stop()}}const aT=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ba.test(n)||n==="0")&&!n.startsWith("url("));function rj(n){const e=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==e)return!0}function uj(n,e,o,r){const t=n[0];if(t===null)return!1;if(e==="display"||e==="visibility")return!0;const u=n[n.length-1],c=aT(t,e),m=aT(u,e);return!c||!m?!1:rj(n)||(o==="spring"||OO(o))&&r}function zf(n){n.duration=0,n.type}const sj=new Set(["opacity","clipPath","filter","transform"]),lj=gS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function cj(n){var S;const{motionValue:e,name:o,repeatDelay:r,repeatType:t,damping:u,type:c}=n;if(!(((S=e==null?void 0:e.owner)==null?void 0:S.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:d}=e.owner.getProps();return lj()&&o&&sj.has(o)&&(o!=="transform"||!d)&&!h&&!r&&t!=="mirror"&&u!==0&&c!=="inertia"}const hj=40;class dj extends wS{constructor({autoplay:e=!0,delay:o=0,type:r="keyframes",repeat:t=0,repeatDelay:u=0,repeatType:c="loop",keyframes:m,name:h,motionValue:d,element:S,...p}){var T;super(),this.stop=()=>{var O,A;this._animation&&(this._animation.stop(),(O=this.stopTimeline)==null||O.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=He.now();const y={autoplay:e,delay:o,type:r,repeat:t,repeatDelay:u,repeatType:c,name:h,motionValue:d,element:S,...p},k=(S==null?void 0:S.KeyframeResolver)||OS;this.keyframeResolver=new k(m,(O,A,b)=>this.onKeyframesResolved(O,A,y,!b),h,d,S),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(e,o,r,t){this.keyframeResolver=void 0;const{name:u,type:c,velocity:m,delay:h,isHandoff:d,onUpdate:S}=r;this.resolvedAt=He.now(),uj(e,u,c,m)||((ea.instantAnimations||!h)&&(S==null||S(DS(e,r,o))),e[0]=e[e.length-1],zf(r),r.repeat=0);const y={startTime:t?this.resolvedAt?this.resolvedAt-this.createdAt>hj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:e},k=!d&&cj(y)?new oj({...y,element:y.motionValue.owner.current}):new CS(y);k.finished.then(()=>this.notifyFinished()).catch(st),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(e,o){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),W_()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const fj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mj(n){const e=fj.exec(n);if(!e)return[,];const[,o,r,t]=e;return[`--${o??r}`,t]}function KO(n,e,o=1){const[r,t]=mj(n);if(!r)return;const u=window.getComputedStyle(e).getPropertyValue(r);if(u){const c=u.trim();return qC(c)?parseFloat(c):c}return kS(t)?KO(t,e,o+1):t}function IS(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const xO=new Set(["width","height","top","left","right","bottom",...Do]),gj={test:n=>n==="auto",parse:n=>n},RO=n=>e=>e.test(n),BO=[Ao,vn,Kt,Ia,r_,o_,gj],iT=n=>BO.find(RO(n));function Sj(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||nO(n):!0}const pj=new Set(["brightness","contrast","saturate","opacity"]);function yj(n){const[e,o]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=o.match(bS)||[];if(!r)return n;const t=o.replace(r,"");let u=pj.has(e)?1:0;return r!==o&&(u*=100),e+"("+u+t+")"}const vj=/\b([a-z-]*)\(.*?\)/gu,$f={...Ba,getAnimatableNone:n=>{const e=n.match(vj);return e?e.map(yj).join(" "):n}},oT={...Ao,transform:Math.round},kj={rotate:Ia,rotateX:Ia,rotateY:Ia,rotateZ:Ia,scale:_s,scaleX:_s,scaleY:_s,scaleZ:_s,skew:Ia,skewX:Ia,skewY:Ia,distance:vn,translateX:vn,translateY:vn,translateZ:vn,x:vn,y:vn,z:vn,perspective:vn,transformPerspective:vn,opacity:Xr,originX:Vb,originY:Vb,originZ:vn},KS={borderWidth:vn,borderTopWidth:vn,borderRightWidth:vn,borderBottomWidth:vn,borderLeftWidth:vn,borderRadius:vn,radius:vn,borderTopLeftRadius:vn,borderTopRightRadius:vn,borderBottomRightRadius:vn,borderBottomLeftRadius:vn,width:vn,maxWidth:vn,height:vn,maxHeight:vn,top:vn,right:vn,bottom:vn,left:vn,padding:vn,paddingTop:vn,paddingRight:vn,paddingBottom:vn,paddingLeft:vn,margin:vn,marginTop:vn,marginRight:vn,marginBottom:vn,marginLeft:vn,backgroundPositionX:vn,backgroundPositionY:vn,...kj,zIndex:oT,fillOpacity:Xr,strokeOpacity:Xr,numOctaves:oT},bj={...KS,color:le,backgroundColor:le,outlineColor:le,fill:le,stroke:le,borderColor:le,borderTopColor:le,borderRightColor:le,borderBottomColor:le,borderLeftColor:le,filter:$f,WebkitFilter:$f},PO=n=>bj[n];function NO(n,e){let o=PO(n);return o!==$f&&(o=Ba),o.getAnimatableNone?o.getAnimatableNone(e):void 0}const Tj=new Set(["auto","none","0"]);function Mj(n,e,o){let r=0,t;for(;r<n.length&&!t;){const u=n[r];typeof u=="string"&&!Tj.has(u)&&qr(u).values.length&&(t=n[r]),r++}if(t&&o)for(const u of e)n[u]=NO(o,t)}class Aj extends OS{constructor(e,o,r,t,u){super(e,o,r,t,u,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<e.length;h++){let d=e[h];if(typeof d=="string"&&(d=d.trim(),kS(d))){const S=KO(d,o.current);S!==void 0&&(e[h]=S),h===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!xO.has(r)||e.length!==2)return;const[t,u]=e,c=iT(t),m=iT(u);if(c!==m)if(nT(c)&&nT(m))for(let h=0;h<e.length;h++){const d=e[h];typeof d=="string"&&(e[h]=parseFloat(d))}else ui[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:o}=this,r=[];for(let t=0;t<e.length;t++)(e[t]===null||Sj(e[t]))&&r.push(t);r.length&&Mj(e,r,o)}measureInitialState(){const{element:e,unresolvedKeyframes:o,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ui[r](e.measureViewportBox(),window.getComputedStyle(e.current)),o[0]=this.measuredOrigin;const t=o[o.length-1];t!==void 0&&e.getValue(r,t).jump(t,!1)}measureEndState(){var m;const{element:e,name:o,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const t=e.getValue(o);t&&t.jump(this.measuredOrigin,!1);const u=r.length-1,c=r[u];r[u]=ui[o](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([h,d])=>{e.getValue(h).set(d)}),this.resolveNoneKeyframes()}}function Dj(n,e,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const t=(o==null?void 0:o[n])??r.querySelectorAll(n);return t?Array.from(t):[]}return Array.from(n)}const EO=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function wj(n){return QC(n)&&"offsetHeight"in n}const rT=30,Cj=n=>!isNaN(parseFloat(n));class Oj{constructor(e,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var u;const t=He.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=o.owner}setCurrent(e){this.current=e,this.updatedAt=He.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Cj(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,o){this.events[e]||(this.events[e]=new SS);const r=this.events[e].add(o);return e==="change"?()=>{r(),Wn.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,o){this.passiveEffect=e,this.stopPassiveEffect=o}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,o=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=He.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>rT)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,rT);return eO(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(e){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=e(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,o;(e=this.dependents)==null||e.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yo(n,e){return new Oj(n,e)}const{schedule:xS}=dO(queueMicrotask,!1),dt={x:!1,y:!1};function HO(){return dt.x||dt.y}function Ij(n){return n==="x"||n==="y"?dt[n]?null:(dt[n]=!0,()=>{dt[n]=!1}):dt.x||dt.y?null:(dt.x=dt.y=!0,()=>{dt.x=dt.y=!1})}function GO(n,e){const o=Dj(n),r=new AbortController,t={passive:!0,...e,signal:r.signal};return[o,t,()=>r.abort()]}function uT(n){return!(n.pointerType==="touch"||HO())}function Kj(n,e,o={}){const[r,t,u]=GO(n,o),c=m=>{if(!uT(m))return;const{target:h}=m,d=e(h,m);if(typeof d!="function"||!h)return;const S=p=>{uT(p)&&(d(p),h.removeEventListener("pointerleave",S))};h.addEventListener("pointerleave",S,t)};return r.forEach(m=>{m.addEventListener("pointerenter",c,t)}),u}const LO=(n,e)=>e?n===e?!0:LO(n,e.parentElement):!1,RS=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,xj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Rj(n){return xj.has(n.tagName)||n.tabIndex!==-1}const il=new WeakSet;function sT(n){return e=>{e.key==="Enter"&&n(e)}}function Yd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Bj=(n,e)=>{const o=n.currentTarget;if(!o)return;const r=sT(()=>{if(il.has(o))return;Yd(o,"down");const t=sT(()=>{Yd(o,"up")}),u=()=>Yd(o,"cancel");o.addEventListener("keyup",t,e),o.addEventListener("blur",u,e)});o.addEventListener("keydown",r,e),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),e)};function lT(n){return RS(n)&&!HO()}function Pj(n,e,o={}){const[r,t,u]=GO(n,o),c=m=>{const h=m.currentTarget;if(!lT(m))return;il.add(h);const d=e(h,m),S=(k,T)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",y),il.has(h)&&il.delete(h),lT(k)&&typeof d=="function"&&d(k,{success:T})},p=k=>{S(k,h===window||h===document||o.useGlobalTarget||LO(h,k.target))},y=k=>{S(k,!1)};window.addEventListener("pointerup",p,t),window.addEventListener("pointercancel",y,t)};return r.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",c,t),wj(m)&&(m.addEventListener("focus",d=>Bj(d,t)),!Rj(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),u}function _O(n){return QC(n)&&"ownerSVGElement"in n}function Nj(n){return _O(n)&&n.tagName==="svg"}const Oe=n=>!!(n&&n.getVelocity),Ej=[...BO,le,Ba],Hj=n=>Ej.find(RO(n)),jO=D.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Gj(n=!0){const e=D.useContext(hS);if(e===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:t}=e,u=D.useId();D.useEffect(()=>{if(n)return t(u)},[n]);const c=D.useCallback(()=>n&&r&&r(u),[u,r,n]);return!o&&r?[!1,c]:[!0]}const zO=D.createContext({strict:!1}),cT={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},vo={};for(const n in cT)vo[n]={isEnabled:e=>cT[n].some(o=>!!e[o])};function Lj(n){for(const e in n)vo[e]={...vo[e],...n[e]}}const _j=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gl(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||_j.has(n)}let $O=n=>!Gl(n);function jj(n){typeof n=="function"&&($O=e=>e.startsWith("on")?!Gl(e):n(e))}try{jj(require("@emotion/is-prop-valid").default)}catch{}function zj(n,e,o){const r={};for(const t in n)t==="values"&&typeof n.values=="object"||($O(t)||o===!0&&Gl(t)||!e&&!Gl(t)||n.draggable&&t.startsWith("onDrag"))&&(r[t]=n[t]);return r}const lc=D.createContext({});function cc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Qr(n){return typeof n=="string"||Array.isArray(n)}const BS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],PS=["initial",...BS];function hc(n){return cc(n.animate)||PS.some(e=>Qr(n[e]))}function FO(n){return!!(hc(n)||n.variants)}function $j(n,e){if(hc(n)){const{initial:o,animate:r}=n;return{initial:o===!1||Qr(o)?o:void 0,animate:Qr(r)?r:void 0}}return n.inherit!==!1?e:{}}function Fj(n){const{initial:e,animate:o}=$j(n,D.useContext(lc));return D.useMemo(()=>({initial:e,animate:o}),[hT(e),hT(o)])}function hT(n){return Array.isArray(n)?n.join(" "):n}const nu={};function Uj(n){for(const e in n)nu[e]=n[e],vS(e)&&(nu[e].isCSSVariable=!0)}function UO(n,{layout:e,layoutId:o}){return wo.has(n)||n.startsWith("origin")||(e||o!==void 0)&&(!!nu[n]||n==="opacity")}const Vj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yj=Do.length;function Wj(n,e,o){let r="",t=!0;for(let u=0;u<Yj;u++){const c=Do[u],m=n[c];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(c.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||o){const d=EO(m,KS[c]);if(!h){t=!1;const S=Vj[c]||c;r+=`${S}(${d}) `}o&&(e[c]=d)}}return r=r.trim(),o?r=o(e,t?"":r):t&&(r="none"),r}function NS(n,e,o){const{style:r,vars:t,transformOrigin:u}=n;let c=!1,m=!1;for(const h in e){const d=e[h];if(wo.has(h)){c=!0;continue}else if(vS(h)){t[h]=d;continue}else{const S=EO(d,KS[h]);h.startsWith("origin")?(m=!0,u[h]=S):r[h]=S}}if(e.transform||(c||o?r.transform=Wj(e,n.transform,o):r.transform&&(r.transform="none")),m){const{originX:h="50%",originY:d="50%",originZ:S=0}=u;r.transformOrigin=`${h} ${d} ${S}`}}const ES=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function VO(n,e,o){for(const r in e)!Oe(e[r])&&!UO(r,o)&&(n[r]=e[r])}function Zj({transformTemplate:n},e){return D.useMemo(()=>{const o=ES();return NS(o,e,n),Object.assign({},o.vars,o.style)},[e])}function Jj(n,e){const o=n.style||{},r={};return VO(r,o,n),Object.assign(r,Zj(n,e)),r}function Xj(n,e){const o={},r=Jj(n,e);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=r,o}const qj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Qj={offset:"strokeDashoffset",array:"strokeDasharray"};function nz(n,e,o=1,r=0,t=!0){n.pathLength=1;const u=t?qj:Qj;n[u.offset]=vn.transform(-r);const c=vn.transform(e),m=vn.transform(o);n[u.array]=`${c} ${m}`}function YO(n,{attrX:e,attrY:o,attrScale:r,pathLength:t,pathSpacing:u=1,pathOffset:c=0,...m},h,d,S){if(NS(n,m,d),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:p,style:y}=n;p.transform&&(y.transform=p.transform,delete p.transform),(y.transform||p.transformOrigin)&&(y.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),y.transform&&(y.transformBox=(S==null?void 0:S.transformBox)??"fill-box",delete p.transformBox),e!==void 0&&(p.x=e),o!==void 0&&(p.y=o),r!==void 0&&(p.scale=r),t!==void 0&&nz(p,t,u,c,!1)}const WO=()=>({...ES(),attrs:{}}),ZO=n=>typeof n=="string"&&n.toLowerCase()==="svg";function ez(n,e,o,r){const t=D.useMemo(()=>{const u=WO();return YO(u,e,ZO(r),n.transformTemplate,n.style),{...u.attrs,style:{...u.style}}},[e]);if(n.style){const u={};VO(u,n.style,n),t.style={...u,...t.style}}return t}const tz=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function HS(n){return typeof n!="string"||n.includes("-")?!1:!!(tz.indexOf(n)>-1||/[A-Z]/u.test(n))}function az(n,e,o,{latestValues:r},t,u=!1){const m=(HS(n)?ez:Xj)(e,r,t,n),h=zj(e,typeof n=="string",u),d=n!==D.Fragment?{...h,...m,ref:o}:{},{children:S}=e,p=D.useMemo(()=>Oe(S)?S.get():S,[S]);return D.createElement(n,{...d,children:p})}function dT(n){const e=[{},{}];return n==null||n.values.forEach((o,r)=>{e[0][r]=o.get(),e[1][r]=o.getVelocity()}),e}function GS(n,e,o,r){if(typeof e=="function"){const[t,u]=dT(r);e=e(o!==void 0?o:n.custom,t,u)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[t,u]=dT(r);e=e(o!==void 0?o:n.custom,t,u)}return e}function ol(n){return Oe(n)?n.get():n}function iz({scrapeMotionValuesFromProps:n,createRenderState:e},o,r,t){return{latestValues:oz(o,r,t,n),renderState:e()}}function oz(n,e,o,r){const t={},u=r(n,{});for(const y in u)t[y]=ol(u[y]);let{initial:c,animate:m}=n;const h=hc(n),d=FO(n);e&&d&&!h&&n.inherit!==!1&&(c===void 0&&(c=e.initial),m===void 0&&(m=e.animate));let S=o?o.initial===!1:!1;S=S||c===!1;const p=S?m:c;if(p&&typeof p!="boolean"&&!cc(p)){const y=Array.isArray(p)?p:[p];for(let k=0;k<y.length;k++){const T=GS(n,y[k]);if(T){const{transitionEnd:O,transition:A,...b}=T;for(const I in b){let C=b[I];if(Array.isArray(C)){const K=S?C.length-1:0;C=C[K]}C!==null&&(t[I]=C)}for(const I in O)t[I]=O[I]}}}return t}const JO=n=>(e,o)=>{const r=D.useContext(lc),t=D.useContext(hS),u=()=>iz(n,e,r,t);return o?u():JC(u)};function LS(n,e,o){var u;const{style:r}=n,t={};for(const c in r)(Oe(r[c])||e.style&&Oe(e.style[c])||UO(c,n)||((u=o==null?void 0:o.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(t[c]=r[c]);return t}const rz=JO({scrapeMotionValuesFromProps:LS,createRenderState:ES});function XO(n,e,o){const r=LS(n,e,o);for(const t in n)if(Oe(n[t])||Oe(e[t])){const u=Do.indexOf(t)!==-1?"attr"+t.charAt(0).toUpperCase()+t.substring(1):t;r[u]=n[t]}return r}const uz=JO({scrapeMotionValuesFromProps:XO,createRenderState:WO}),sz=Symbol.for("motionComponentSymbol");function io(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function lz(n,e,o){return D.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),o&&(typeof o=="function"?o(r):io(o)&&(o.current=r))},[e])}const _S=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),cz="framerAppearId",qO="data-"+_S(cz),QO=D.createContext({});function hz(n,e,o,r,t){var O,A;const{visualElement:u}=D.useContext(lc),c=D.useContext(zO),m=D.useContext(hS),h=D.useContext(jO).reducedMotion,d=D.useRef(null);r=r||c.renderer,!d.current&&r&&(d.current=r(n,{visualState:e,parent:u,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:h}));const S=d.current,p=D.useContext(QO);S&&!S.projection&&t&&(S.type==="html"||S.type==="svg")&&dz(d.current,o,t,p);const y=D.useRef(!1);D.useInsertionEffect(()=>{S&&y.current&&S.update(o,m)});const k=o[qO],T=D.useRef(!!k&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,k))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,k)));return XC(()=>{S&&(y.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),T.current&&S.animationState&&S.animationState.animateChanges())}),D.useEffect(()=>{S&&(!T.current&&S.animationState&&S.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,k)}),T.current=!1),S.enteringChildren=void 0)}),S}function dz(n,e,o,r){const{layoutId:t,layout:u,drag:c,dragConstraints:m,layoutScroll:h,layoutRoot:d,layoutCrossfade:S}=e;n.projection=new o(n.latestValues,e["data-framer-portal-id"]?void 0:nI(n.parent)),n.projection.setOptions({layoutId:t,layout:u,alwaysMeasureLayout:!!c||m&&io(m),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:r,crossfade:S,layoutScroll:h,layoutRoot:d})}function nI(n){if(n)return n.options.allowProjection!==!1?n.projection:nI(n.parent)}function Wd(n,{forwardMotionProps:e=!1}={},o,r){o&&Lj(o);const t=HS(n)?uz:rz;function u(m,h){let d;const S={...D.useContext(jO),...m,layoutId:fz(m)},{isStatic:p}=S,y=Fj(m),k=t(m,p);if(!p&&cS){mz();const T=gz(S);d=T.MeasureLayout,y.visualElement=hz(n,k,S,r,T.ProjectionNode)}return P.jsxs(lc.Provider,{value:y,children:[d&&y.visualElement?P.jsx(d,{visualElement:y.visualElement,...S}):null,az(n,m,lz(k,y.visualElement,h),k,p,e)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const c=D.forwardRef(u);return c[sz]=n,c}function fz({layoutId:n}){const e=D.useContext(ZC).id;return e&&n!==void 0?e+"-"+n:n}function mz(n,e){D.useContext(zO).strict}function gz(n){const{drag:e,layout:o}=vo;if(!e&&!o)return{};const r={...e,...o};return{MeasureLayout:e!=null&&e.isEnabled(n)||o!=null&&o.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Sz(n,e){if(typeof Proxy>"u")return Wd;const o=new Map,r=(u,c)=>Wd(u,c,n,e),t=(u,c)=>r(u,c);return new Proxy(t,{get:(u,c)=>c==="create"?r:(o.has(c)||o.set(c,Wd(c,void 0,n,e)),o.get(c))})}function eI({top:n,left:e,right:o,bottom:r}){return{x:{min:e,max:o},y:{min:n,max:r}}}function pz({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function yz(n,e){if(!e)return n;const o=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function Zd(n){return n===void 0||n===1}function Ff({scale:n,scaleX:e,scaleY:o}){return!Zd(n)||!Zd(e)||!Zd(o)}function ai(n){return Ff(n)||tI(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function tI(n){return fT(n.x)||fT(n.y)}function fT(n){return n&&n!=="0%"}function Ll(n,e,o){const r=n-o,t=e*r;return o+t}function mT(n,e,o,r,t){return t!==void 0&&(n=Ll(n,t,r)),Ll(n,o,r)+e}function Uf(n,e=0,o=1,r,t){n.min=mT(n.min,e,o,r,t),n.max=mT(n.max,e,o,r,t)}function aI(n,{x:e,y:o}){Uf(n.x,e.translate,e.scale,e.originPoint),Uf(n.y,o.translate,o.scale,o.originPoint)}const gT=.999999999999,ST=1.0000000000001;function vz(n,e,o,r=!1){const t=o.length;if(!t)return;e.x=e.y=1;let u,c;for(let m=0;m<t;m++){u=o[m],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ro(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,aI(n,c)),r&&ai(u.latestValues)&&ro(n,u.latestValues))}e.x<ST&&e.x>gT&&(e.x=1),e.y<ST&&e.y>gT&&(e.y=1)}function oo(n,e){n.min=n.min+e,n.max=n.max+e}function pT(n,e,o,r,t=.5){const u=Jn(n.min,n.max,t);Uf(n,e,o,u,r)}function ro(n,e){pT(n.x,e.x,e.scaleX,e.scale,e.originX),pT(n.y,e.y,e.scaleY,e.scale,e.originY)}function iI(n,e){return eI(yz(n.getBoundingClientRect(),e))}function kz(n,e,o){const r=iI(n,o),{scroll:t}=e;return t&&(oo(r.x,t.offset.x),oo(r.y,t.offset.y)),r}const yT=()=>({translate:0,scale:1,origin:0,originPoint:0}),uo=()=>({x:yT(),y:yT()}),vT=()=>({min:0,max:0}),re=()=>({x:vT(),y:vT()}),Vf={current:null},oI={current:!1};function bz(){if(oI.current=!0,!!cS)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Vf.current=n.matches;n.addEventListener("change",e),e()}else Vf.current=!1}const Tz=new WeakMap;function Mz(n,e,o){for(const r in e){const t=e[r],u=o[r];if(Oe(t))n.addValue(r,t);else if(Oe(u))n.addValue(r,yo(t,{owner:n}));else if(u!==t)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(t):c.hasAnimated||c.set(t)}else{const c=n.getStaticValue(r);n.addValue(r,yo(c!==void 0?c:t,{owner:n}))}}for(const r in o)e[r]===void 0&&n.removeValue(r);return e}const kT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Az{scrapeMotionValuesFromProps(e,o,r){return{}}constructor({parent:e,props:o,presenceContext:r,reducedMotionConfig:t,blockInitialAnimation:u,visualState:c},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=OS,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=He.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Wn.render(this.render,!1,!0))};const{latestValues:h,renderState:d}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=d,this.parent=e,this.props=o,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=t,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=hc(o),this.isVariantNode=FO(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:S,...p}=this.scrapeMotionValuesFromProps(o,{},this);for(const y in p){const k=p[y];h[y]!==void 0&&Oe(k)&&k.set(h[y])}}mount(e){var o;this.current=e,Tz.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,t)=>this.bindToMotionValue(t,r)),oI.current||bz(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vf.current,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ra(this.notifyUpdate),Ra(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const r=this.features[o];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,o){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=wo.has(e);r&&this.onBindTransform&&this.onBindTransform();const t=o.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Wn.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,o)),this.valueSubscriptions.set(e,()=>{t(),u&&u(),o.owner&&o.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in vo){const o=vo[e];if(!o)continue;const{isEnabled:r,Feature:t}=o;if(!this.features[e]&&t&&r(this.props)&&(this.features[e]=new t(this)),this.features[e]){const u=this.features[e];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):re()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,o){this.latestValues[e]=o}update(e,o){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<kT.length;r++){const t=kT[r];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const u="on"+t,c=e[u];c&&(this.propEventSubscriptions[t]=this.on(t,c))}this.prevMotionValues=Mz(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(e),()=>o.variantChildren.delete(e)}addValue(e,o){const r=this.values.get(e);o!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,o),this.values.set(e,o),this.latestValues[e]=o.get())}removeValue(e){this.values.delete(e);const o=this.valueSubscriptions.get(e);o&&(o(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,o){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&o!==void 0&&(r=yo(o===null?void 0:o,{owner:this}),this.addValue(e,r)),r}readValue(e,o){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(qC(r)||nO(r))?r=parseFloat(r):!Hj(r)&&Ba.test(o)&&(r=NO(e,o)),this.setBaseTarget(e,Oe(r)?r.get():r)),Oe(r)?r.get():r}setBaseTarget(e,o){this.baseTarget[e]=o}getBaseTarget(e){var u;const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const c=GS(this.props,o,(u=this.presenceContext)==null?void 0:u.custom);c&&(r=c[e])}if(o&&r!==void 0)return r;const t=this.getBaseTargetFromProps(this.props,e);return t!==void 0&&!Oe(t)?t:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,o){return this.events[e]||(this.events[e]=new SS),this.events[e].add(o)}notify(e,...o){this.events[e]&&this.events[e].notify(...o)}scheduleRenderMicrotask(){xS.render(this.render)}}class rI extends Az{constructor(){super(...arguments),this.KeyframeResolver=Aj}sortInstanceNodePosition(e,o){return e.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(e,o){return e.style?e.style[o]:void 0}removeValueFromRenderState(e,{vars:o,style:r}){delete o[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Oe(e)&&(this.childSubscription=e.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function uI(n,{style:e,vars:o},r,t){const u=n.style;let c;for(c in e)u[c]=e[c];t==null||t.applyProjectionStyles(u,r);for(c in o)u.setProperty(c,o[c])}function Dz(n){return window.getComputedStyle(n)}class wz extends rI{constructor(){super(...arguments),this.type="html",this.renderInstance=uI}readValueFromInstance(e,o){var r;if(wo.has(o))return(r=this.projection)!=null&&r.isProjecting?Hf(o):$_(e,o);{const t=Dz(e),u=(vS(o)?t.getPropertyValue(o):t[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(e,{transformPagePoint:o}){return iI(e,o)}build(e,o,r){NS(e,o,r.transformTemplate)}scrapeMotionValuesFromProps(e,o,r){return LS(e,o,r)}}const sI=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cz(n,e,o,r){uI(n,e,void 0,r);for(const t in e.attrs)n.setAttribute(sI.has(t)?t:_S(t),e.attrs[t])}class Oz extends rI{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=re}getBaseTargetFromProps(e,o){return e[o]}readValueFromInstance(e,o){if(wo.has(o)){const r=PO(o);return r&&r.default||0}return o=sI.has(o)?o:_S(o),e.getAttribute(o)}scrapeMotionValuesFromProps(e,o,r){return XO(e,o,r)}build(e,o,r){YO(e,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,o,r,t){Cz(e,o,r,t)}mount(e){this.isSVGTag=ZO(e.tagName),super.mount(e)}}const Iz=(n,e)=>HS(n)?new Oz(e):new wz(e,{allowProjection:n!==D.Fragment});function ho(n,e,o){const r=n.getProps();return GS(r,e,o!==void 0?o:r.custom,n)}const Yf=n=>Array.isArray(n);function Kz(n,e,o){n.hasValue(e)?n.getValue(e).set(o):n.addValue(e,yo(o))}function xz(n){return Yf(n)?n[n.length-1]||0:n}function jS(n,e){const o=ho(n,e);let{transitionEnd:r={},transition:t={},...u}=o||{};u={...u,...r};for(const c in u){const m=xz(u[c]);Kz(n,c,m)}}function Rz(n){return!!(Oe(n)&&n.add)}function Wf(n,e){const o=n.getValue("willChange");if(Rz(o))return o.add(e);if(!o&&ea.WillChange){const r=new ea.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function lI(n){return n.props[qO]}const Bz=n=>n!==null;function Pz(n,{repeat:e,repeatType:o="loop"},r){const t=n.filter(Bz),u=e&&o!=="loop"&&e%2===1?0:t.length-1;return t[u]}const Nz={type:"spring",stiffness:500,damping:25,restSpeed:10},Ez=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Hz={type:"keyframes",duration:.8},Gz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Lz=(n,{keyframes:e})=>e.length>2?Hz:wo.has(n)?n.startsWith("scale")?Ez(e[1]):Nz:Gz;function _z({when:n,delay:e,delayChildren:o,staggerChildren:r,staggerDirection:t,repeat:u,repeatType:c,repeatDelay:m,from:h,elapsed:d,...S}){return!!Object.keys(S).length}const zS=(n,e,o,r={},t,u)=>c=>{const m=IS(r,n)||{},h=m.delay||r.delay||0;let{elapsed:d=0}=r;d=d-Ot(h);const S={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:e.getVelocity(),...m,delay:-d,onUpdate:y=>{e.set(y),m.onUpdate&&m.onUpdate(y)},onComplete:()=>{c(),m.onComplete&&m.onComplete()},name:n,motionValue:e,element:u?void 0:t};_z(m)||Object.assign(S,Lz(n,S)),S.duration&&(S.duration=Ot(S.duration)),S.repeatDelay&&(S.repeatDelay=Ot(S.repeatDelay)),S.from!==void 0&&(S.keyframes[0]=S.from);let p=!1;if((S.type===!1||S.duration===0&&!S.repeatDelay)&&(zf(S),S.delay===0&&(p=!0)),(ea.instantAnimations||ea.skipAnimations)&&(p=!0,zf(S),S.delay=0),S.allowFlatten=!m.type&&!m.ease,p&&!u&&e.get()!==void 0){const y=Pz(S.keyframes,m);if(y!==void 0){Wn.update(()=>{S.onUpdate(y),S.onComplete()});return}}return m.isSync?new CS(S):new dj(S)};function jz({protectedKeys:n,needsAnimating:e},o){const r=n.hasOwnProperty(o)&&e[o]!==!0;return e[o]=!1,r}function cI(n,e,{delay:o=0,transitionOverride:r,type:t}={}){let{transition:u=n.getDefaultTransition(),transitionEnd:c,...m}=e;r&&(u=r);const h=[],d=t&&n.animationState&&n.animationState.getState()[t];for(const S in m){const p=n.getValue(S,n.latestValues[S]??null),y=m[S];if(y===void 0||d&&jz(d,S))continue;const k={delay:o,...IS(u||{},S)},T=p.get();if(T!==void 0&&!p.isAnimating&&!Array.isArray(y)&&y===T&&!k.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const b=lI(n);if(b){const I=window.MotionHandoffAnimation(b,S,Wn);I!==null&&(k.startTime=I,O=!0)}}Wf(n,S),p.start(zS(S,p,y,n.shouldReduceMotion&&xO.has(S)?{type:!1}:k,n,O));const A=p.animation;A&&h.push(A)}return c&&Promise.all(h).then(()=>{Wn.update(()=>{c&&jS(n,c)})}),h}function hI(n,e,o,r=0,t=1){const u=Array.from(n).sort((d,S)=>d.sortNodePosition(S)).indexOf(e),c=n.size,m=(c-1)*r;return typeof o=="function"?o(u,c):t===1?u*r:m-u*r}function Zf(n,e,o={}){var h;const r=ho(n,e,o.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:t=n.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(t=o.transitionOverride);const u=r?()=>Promise.all(cI(n,r,o)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:S=0,staggerChildren:p,staggerDirection:y}=t;return zz(n,e,d,S,p,y,o)}:()=>Promise.resolve(),{when:m}=t;if(m){const[d,S]=m==="beforeChildren"?[u,c]:[c,u];return d().then(()=>S())}else return Promise.all([u(),c(o.delay)])}function zz(n,e,o=0,r=0,t=0,u=1,c){const m=[];for(const h of n.variantChildren)h.notify("AnimationStart",e),m.push(Zf(h,e,{...c,delay:o+(typeof r=="function"?0:r)+hI(n.variantChildren,h,r,t,u)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(m)}function dI(n,e,o={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const t=e.map(u=>Zf(n,u,o));r=Promise.all(t)}else if(typeof e=="string")r=Zf(n,e,o);else{const t=typeof e=="function"?ho(n,e,o.custom):e;r=Promise.all(cI(n,t,o))}return r.then(()=>{n.notify("AnimationComplete",e)})}function fI(n,e){if(!Array.isArray(e))return!1;const o=e.length;if(o!==n.length)return!1;for(let r=0;r<o;r++)if(e[r]!==n[r])return!1;return!0}const $z=PS.length;function mI(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?mI(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const e={};for(let o=0;o<$z;o++){const r=PS[o],t=n.props[r];(Qr(t)||t===!1)&&(e[r]=t)}return e}const Fz=[...BS].reverse(),Uz=BS.length;function Vz(n){return e=>Promise.all(e.map(({animation:o,options:r})=>dI(n,o,r)))}function Yz(n){let e=Vz(n),o=bT(),r=!0;const t=h=>(d,S)=>{var y;const p=ho(n,S,h==="exit"?(y=n.presenceContext)==null?void 0:y.custom:void 0);if(p){const{transition:k,transitionEnd:T,...O}=p;d={...d,...O,...T}}return d};function u(h){e=h(n)}function c(h){const{props:d}=n,S=mI(n.parent)||{},p=[],y=new Set;let k={},T=1/0;for(let A=0;A<Uz;A++){const b=Fz[A],I=o[b],C=d[b]!==void 0?d[b]:S[b],K=Qr(C),w=b===h?I.isActive:null;w===!1&&(T=A);let E=C===S[b]&&C!==d[b]&&K;if(E&&r&&n.manuallyAnimateOnMount&&(E=!1),I.protectedKeys={...k},!I.isActive&&w===null||!C&&!I.prevProp||cc(C)||typeof C=="boolean")continue;const j=Wz(I.prevProp,C);let z=j||b===h&&I.isActive&&!E&&K||A>T&&K,X=!1;const on=Array.isArray(C)?C:[C];let rn=on.reduce(t(b),{});w===!1&&(rn={});const{prevResolvedValues:un={}}=I,kn={...un,...rn},q=Z=>{z=!0,y.has(Z)&&(X=!0,y.delete(Z)),I.needsAnimating[Z]=!0;const an=n.getValue(Z);an&&(an.liveStyle=!1)};for(const Z in kn){const an=rn[Z],pn=un[Z];if(k.hasOwnProperty(Z))continue;let R=!1;Yf(an)&&Yf(pn)?R=!fI(an,pn):R=an!==pn,R?an!=null?q(Z):y.add(Z):an!==void 0&&y.has(Z)?q(Z):I.protectedKeys[Z]=!0}I.prevProp=C,I.prevResolvedValues=rn,I.isActive&&(k={...k,...rn}),r&&n.blockInitialAnimation&&(z=!1);const tn=E&&j;z&&(!tn||X)&&p.push(...on.map(Z=>{const an={type:b};if(typeof Z=="string"&&r&&!tn&&n.manuallyAnimateOnMount&&n.parent){const{parent:pn}=n,R=ho(pn,Z);if(pn.enteringChildren&&R){const{delayChildren:W}=R.transition||{};an.delay=hI(pn.enteringChildren,n,W)}}return{animation:Z,options:an}}))}if(y.size){const A={};if(typeof d.initial!="boolean"){const b=ho(n,Array.isArray(d.initial)?d.initial[0]:d.initial);b&&b.transition&&(A.transition=b.transition)}y.forEach(b=>{const I=n.getBaseTarget(b),C=n.getValue(b);C&&(C.liveStyle=!0),A[b]=I??null}),p.push({animation:A})}let O=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!n.manuallyAnimateOnMount&&(O=!1),r=!1,O?e(p):Promise.resolve()}function m(h,d){var p;if(o[h].isActive===d)return Promise.resolve();(p=n.variantChildren)==null||p.forEach(y=>{var k;return(k=y.animationState)==null?void 0:k.setActive(h,d)}),o[h].isActive=d;const S=c(h);for(const y in o)o[y].protectedKeys={};return S}return{animateChanges:c,setActive:m,setAnimateFunction:u,getState:()=>o,reset:()=>{o=bT(),r=!0}}}function Wz(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!fI(e,n):!1}function ei(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bT(){return{animate:ei(!0),whileInView:ei(),whileHover:ei(),whileTap:ei(),whileDrag:ei(),whileFocus:ei(),exit:ei()}}class Na{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Zz extends Na{constructor(e){super(e),e.animationState||(e.animationState=Yz(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();cc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:o}=this.node.prevProps||{};e!==o&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Jz=0;class Xz extends Na{constructor(){super(...arguments),this.id=Jz++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const t=this.node.animationState.setActive("exit",!e);o&&!e&&t.then(()=>{o(this.id)})}mount(){const{register:e,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const qz={animation:{Feature:Zz},exit:{Feature:Xz}};function eu(n,e,o,r={passive:!0}){return n.addEventListener(e,o,r),()=>n.removeEventListener(e,o)}function Su(n){return{point:{x:n.pageX,y:n.pageY}}}const Qz=n=>e=>RS(e)&&n(e,Su(e));function Gr(n,e,o,r){return eu(n,e,Qz(o),r)}const gI=1e-4,n$=1-gI,e$=1+gI,SI=.01,t$=0-SI,a$=0+SI;function Ke(n){return n.max-n.min}function i$(n,e,o){return Math.abs(n-e)<=o}function TT(n,e,o,r=.5){n.origin=r,n.originPoint=Jn(e.min,e.max,n.origin),n.scale=Ke(o)/Ke(e),n.translate=Jn(o.min,o.max,n.origin)-n.originPoint,(n.scale>=n$&&n.scale<=e$||isNaN(n.scale))&&(n.scale=1),(n.translate>=t$&&n.translate<=a$||isNaN(n.translate))&&(n.translate=0)}function Lr(n,e,o,r){TT(n.x,e.x,o.x,r?r.originX:void 0),TT(n.y,e.y,o.y,r?r.originY:void 0)}function MT(n,e,o){n.min=o.min+e.min,n.max=n.min+Ke(e)}function o$(n,e,o){MT(n.x,e.x,o.x),MT(n.y,e.y,o.y)}function AT(n,e,o){n.min=e.min-o.min,n.max=n.min+Ke(e)}function _r(n,e,o){AT(n.x,e.x,o.x),AT(n.y,e.y,o.y)}function ut(n){return[n("x"),n("y")]}const pI=({current:n})=>n?n.ownerDocument.defaultView:null,DT=(n,e)=>Math.abs(n-e);function r$(n,e){const o=DT(n.x,e.x),r=DT(n.y,e.y);return Math.sqrt(o**2+r**2)}class yI{constructor(e,o,{transformPagePoint:r,contextWindow:t=window,dragSnapToOrigin:u=!1,distanceThreshold:c=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Xd(this.lastMoveEventInfo,this.history),k=this.startEvent!==null,T=r$(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!k&&!T)return;const{point:O}=y,{timestamp:A}=Te;this.history.push({...O,timestamp:A});const{onStart:b,onMove:I}=this.handlers;k||(b&&b(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,y)},this.handlePointerMove=(y,k)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Jd(k,this.transformPagePoint),Wn.update(this.updatePoint,!0)},this.handlePointerUp=(y,k)=>{this.end();const{onEnd:T,onSessionEnd:O,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Xd(y.type==="pointercancel"?this.lastMoveEventInfo:Jd(k,this.transformPagePoint),this.history);this.startEvent&&T&&T(y,b),O&&O(y,b)},!RS(e))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=t||window;const m=Su(e),h=Jd(m,this.transformPagePoint),{point:d}=h,{timestamp:S}=Te;this.history=[{...d,timestamp:S}];const{onSessionStart:p}=o;p&&p(e,Xd(h,this.history)),this.removeListeners=fu(Gr(this.contextWindow,"pointermove",this.handlePointerMove),Gr(this.contextWindow,"pointerup",this.handlePointerUp),Gr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ra(this.updatePoint)}}function Jd(n,e){return e?{point:e(n.point)}:n}function wT(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Xd({point:n},e){return{point:n,delta:wT(n,vI(e)),offset:wT(n,u$(e)),velocity:s$(e,.1)}}function u$(n){return n[0]}function vI(n){return n[n.length-1]}function s$(n,e){if(n.length<2)return{x:0,y:0};let o=n.length-1,r=null;const t=vI(n);for(;o>=0&&(r=n[o],!(t.timestamp-r.timestamp>Ot(e)));)o--;if(!r)return{x:0,y:0};const u=It(t.timestamp-r.timestamp);if(u===0)return{x:0,y:0};const c={x:(t.x-r.x)/u,y:(t.y-r.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function l$(n,{min:e,max:o},r){return e!==void 0&&n<e?n=r?Jn(e,n,r.min):Math.max(n,e):o!==void 0&&n>o&&(n=r?Jn(o,n,r.max):Math.min(n,o)),n}function CT(n,e,o){return{min:e!==void 0?n.min+e:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function c$(n,{top:e,left:o,bottom:r,right:t}){return{x:CT(n.x,o,t),y:CT(n.y,e,r)}}function OT(n,e){let o=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([o,r]=[r,o]),{min:o,max:r}}function h$(n,e){return{x:OT(n.x,e.x),y:OT(n.y,e.y)}}function d$(n,e){let o=.5;const r=Ke(n),t=Ke(e);return t>r?o=Jr(e.min,e.max-r,n.min):r>t&&(o=Jr(n.min,n.max-t,e.min)),na(0,1,o)}function f$(n,e){const o={};return e.min!==void 0&&(o.min=e.min-n.min),e.max!==void 0&&(o.max=e.max-n.min),o}const Jf=.35;function m$(n=Jf){return n===!1?n=0:n===!0&&(n=Jf),{x:IT(n,"left","right"),y:IT(n,"top","bottom")}}function IT(n,e,o){return{min:KT(n,e),max:KT(n,o)}}function KT(n,e){return typeof n=="number"?n:n[e]||0}const g$=new WeakMap;class S${constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=re(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:t}=this.visualElement;if(t&&t.isPresent===!1)return;const u=p=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Su(p).point)},c=(p,y)=>{const{drag:k,dragPropagation:T,onDragStart:O}=this.getProps();if(k&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ij(k),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ut(b=>{let I=this.getAxisMotionValue(b).get()||0;if(Kt.test(I)){const{projection:C}=this.visualElement;if(C&&C.layout){const K=C.layout.layoutBox[b];K&&(I=Ke(K)*(parseFloat(I)/100))}}this.originPoint[b]=I}),O&&Wn.postRender(()=>O(p,y)),Wf(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},m=(p,y)=>{this.latestPointerEvent=p,this.latestPanInfo=y;const{dragPropagation:k,dragDirectionLock:T,onDirectionLock:O,onDrag:A}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:b}=y;if(T&&this.currentDirection===null){this.currentDirection=p$(b),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",y.point,b),this.updateAxis("y",y.point,b),this.visualElement.render(),A&&A(p,y)},h=(p,y)=>{this.latestPointerEvent=p,this.latestPanInfo=y,this.stop(p,y),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>ut(p=>{var y;return this.getAnimationState(p)==="paused"&&((y=this.getAxisMotionValue(p).animation)==null?void 0:y.play())}),{dragSnapToOrigin:S}=this.getProps();this.panSession=new yI(e,{onSessionStart:u,onStart:c,onMove:m,onSessionEnd:h,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:S,distanceThreshold:r,contextWindow:pI(this.visualElement)})}stop(e,o){const r=e||this.latestPointerEvent,t=o||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!t||!r)return;const{velocity:c}=t;this.startAnimation(c);const{onDragEnd:m}=this.getProps();m&&Wn.postRender(()=>m(r,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:o}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(e,o,r){const{drag:t}=this.getProps();if(!r||!js(e,t,this.currentDirection))return;const u=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=l$(c,this.constraints[e],this.elastic[e])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:e,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,t=this.constraints;e&&io(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=c$(r.layoutBox,e):this.constraints=!1,this.elastic=m$(o),t!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ut(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=f$(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:o}=this.getProps();if(!e||!io(e))return!1;const r=e.current,{projection:t}=this.visualElement;if(!t||!t.layout)return!1;const u=kz(r,t.root,this.visualElement.getTransformPagePoint());let c=h$(t.layout.layoutBox,u);if(o){const m=o(pz(c));this.hasMutatedConstraints=!!m,m&&(c=eI(m))}return c}startAnimation(e){const{drag:o,dragMomentum:r,dragElastic:t,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},d=ut(S=>{if(!js(S,o,this.currentDirection))return;let p=h&&h[S]||{};c&&(p={min:0,max:0});const y=t?200:1e6,k=t?40:1e7,T={type:"inertia",velocity:r?e[S]:0,bounceStiffness:y,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...u,...p};return this.startAxisValueAnimation(S,T)});return Promise.all(d).then(m)}startAxisValueAnimation(e,o){const r=this.getAxisMotionValue(e);return Wf(this.visualElement,e),r.start(zS(e,r,0,o,this.visualElement,!1))}stopAnimation(){ut(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ut(e=>{var o;return(o=this.getAxisMotionValue(e).animation)==null?void 0:o.pause()})}getAnimationState(e){var o;return(o=this.getAxisMotionValue(e).animation)==null?void 0:o.state}getAxisMotionValue(e){const o=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),t=r[o];return t||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ut(o=>{const{drag:r}=this.getProps();if(!js(o,r,this.currentDirection))return;const{projection:t}=this.visualElement,u=this.getAxisMotionValue(o);if(t&&t.layout){const{min:c,max:m}=t.layout.layoutBox[o];u.set(e[o]-Jn(c,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!io(o)||!r||!this.constraints)return;this.stopAnimation();const t={x:0,y:0};ut(c=>{const m=this.getAxisMotionValue(c);if(m&&this.constraints!==!1){const h=m.get();t[c]=d$({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ut(c=>{if(!js(c,e,null))return;const m=this.getAxisMotionValue(c),{min:h,max:d}=this.constraints[c];m.set(Jn(h,d,t[c]))})}addListeners(){if(!this.visualElement.current)return;g$.set(this.visualElement,this);const e=this.visualElement.current,o=Gr(e,"pointerdown",h=>{const{drag:d,dragListener:S=!0}=this.getProps();d&&S&&this.start(h)}),r=()=>{const{dragConstraints:h}=this.getProps();io(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:t}=this.visualElement,u=t.addEventListener("measure",r);t&&!t.layout&&(t.root&&t.root.updateScroll(),t.updateLayout()),Wn.read(r);const c=eu(window,"resize",()=>this.scalePositionWithinConstraints()),m=t.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d})=>{this.isDragging&&d&&(ut(S=>{const p=this.getAxisMotionValue(S);p&&(this.originPoint[S]+=h[S].translate,p.set(p.get()+h[S].translate))}),this.visualElement.render())});return()=>{c(),o(),u(),m&&m()}}getProps(){const e=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:t=!1,dragConstraints:u=!1,dragElastic:c=Jf,dragMomentum:m=!0}=e;return{...e,drag:o,dragDirectionLock:r,dragPropagation:t,dragConstraints:u,dragElastic:c,dragMomentum:m}}}function js(n,e,o){return(e===!0||e===n)&&(o===null||o===n)}function p$(n,e=10){let o=null;return Math.abs(n.y)>e?o="y":Math.abs(n.x)>e&&(o="x"),o}class y$ extends Na{constructor(e){super(e),this.removeGroupControls=st,this.removeListeners=st,this.controls=new S$(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||st}unmount(){this.removeGroupControls(),this.removeListeners()}}const xT=n=>(e,o)=>{n&&Wn.postRender(()=>n(e,o))};class v$ extends Na{constructor(){super(...arguments),this.removePointerDownListener=st}onPointerDown(e){this.session=new yI(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pI(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:o,onPan:r,onPanEnd:t}=this.node.getProps();return{onSessionStart:xT(e),onStart:xT(o),onMove:r,onEnd:(u,c)=>{delete this.session,t&&Wn.postRender(()=>t(u,c))}}}mount(){this.removePointerDownListener=Gr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const rl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function RT(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const xr={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(vn.test(n))n=parseFloat(n);else return n;const o=RT(n,e.target.x),r=RT(n,e.target.y);return`${o}% ${r}%`}},k$={correct:(n,{treeScale:e,projectionDelta:o})=>{const r=n,t=Ba.parse(n);if(t.length>5)return r;const u=Ba.createTransformer(n),c=typeof t[0]!="number"?1:0,m=o.x.scale*e.x,h=o.y.scale*e.y;t[0+c]/=m,t[1+c]/=h;const d=Jn(m,h,.5);return typeof t[2+c]=="number"&&(t[2+c]/=d),typeof t[3+c]=="number"&&(t[3+c]/=d),u(t)}};let qd=!1;class b$ extends D.Component{componentDidMount(){const{visualElement:e,layoutGroup:o,switchLayoutGroup:r,layoutId:t}=this.props,{projection:u}=e;Uj(T$),u&&(o.group&&o.group.add(u),r&&r.register&&t&&r.register(u),qd&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),rl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:o,visualElement:r,drag:t,isPresent:u}=this.props,{projection:c}=r;return c&&(c.isPresent=u,qd=!0,t||e.layoutDependency!==o||o===void 0||e.isPresent!==u?c.willUpdate():this.safeToRemove(),e.isPresent!==u&&(u?c.promote():c.relegate()||Wn.postRender(()=>{const m=c.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),xS.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:t}=e;qd=!0,t&&(t.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(t),r&&r.deregister&&r.deregister(t))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function kI(n){const[e,o]=Gj(),r=D.useContext(ZC);return P.jsx(b$,{...n,layoutGroup:r,switchLayoutGroup:D.useContext(QO),isPresent:e,safeToRemove:o})}const T$={borderRadius:{...xr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xr,borderTopRightRadius:xr,borderBottomLeftRadius:xr,borderBottomRightRadius:xr,boxShadow:k$};function M$(n,e,o){const r=Oe(n)?n:yo(n);return r.start(zS("",r,e,o)),r.animation}const A$=(n,e)=>n.depth-e.depth;class D${constructor(){this.children=[],this.isDirty=!1}add(e){dS(this.children,e),this.isDirty=!0}remove(e){fS(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(A$),this.isDirty=!1,this.children.forEach(e)}}function w$(n,e){const o=He.now(),r=({timestamp:t})=>{const u=t-o;u>=e&&(Ra(r),n(u-e))};return Wn.setup(r,!0),()=>Ra(r)}const bI=["TopLeft","TopRight","BottomLeft","BottomRight"],C$=bI.length,BT=n=>typeof n=="string"?parseFloat(n):n,PT=n=>typeof n=="number"||vn.test(n);function O$(n,e,o,r,t,u){t?(n.opacity=Jn(0,o.opacity??1,I$(r)),n.opacityExit=Jn(e.opacity??1,0,K$(r))):u&&(n.opacity=Jn(e.opacity??1,o.opacity??1,r));for(let c=0;c<C$;c++){const m=`border${bI[c]}Radius`;let h=NT(e,m),d=NT(o,m);if(h===void 0&&d===void 0)continue;h||(h=0),d||(d=0),h===0||d===0||PT(h)===PT(d)?(n[m]=Math.max(Jn(BT(h),BT(d),r),0),(Kt.test(d)||Kt.test(h))&&(n[m]+="%")):n[m]=d}(e.rotate||o.rotate)&&(n.rotate=Jn(e.rotate||0,o.rotate||0,r))}function NT(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const I$=TI(0,.5,sO),K$=TI(.5,.95,st);function TI(n,e,o){return r=>r<n?0:r>e?1:o(Jr(n,e,r))}function ET(n,e){n.min=e.min,n.max=e.max}function rt(n,e){ET(n.x,e.x),ET(n.y,e.y)}function HT(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function GT(n,e,o,r,t){return n-=e,n=Ll(n,1/o,r),t!==void 0&&(n=Ll(n,1/t,r)),n}function x$(n,e=0,o=1,r=.5,t,u=n,c=n){if(Kt.test(e)&&(e=parseFloat(e),e=Jn(c.min,c.max,e/100)-c.min),typeof e!="number")return;let m=Jn(u.min,u.max,r);n===u&&(m-=e),n.min=GT(n.min,e,o,m,t),n.max=GT(n.max,e,o,m,t)}function LT(n,e,[o,r,t],u,c){x$(n,e[o],e[r],e[t],e.scale,u,c)}const R$=["x","scaleX","originX"],B$=["y","scaleY","originY"];function _T(n,e,o,r){LT(n.x,e,R$,o?o.x:void 0,r?r.x:void 0),LT(n.y,e,B$,o?o.y:void 0,r?r.y:void 0)}function jT(n){return n.translate===0&&n.scale===1}function MI(n){return jT(n.x)&&jT(n.y)}function zT(n,e){return n.min===e.min&&n.max===e.max}function P$(n,e){return zT(n.x,e.x)&&zT(n.y,e.y)}function $T(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function AI(n,e){return $T(n.x,e.x)&&$T(n.y,e.y)}function FT(n){return Ke(n.x)/Ke(n.y)}function UT(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class N${constructor(){this.members=[]}add(e){dS(this.members,e),e.scheduleRender()}remove(e){if(fS(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(e){const o=this.members.findIndex(t=>e===t);if(o===0)return!1;let r;for(let t=o;t>=0;t--){const u=this.members[t];if(u.isPresent!==!1){r=u;break}}return r?(this.promote(r),!0):!1}promote(e,o){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,o&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:t}=e.options;t===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:o,resumingFrom:r}=e;o.onExitComplete&&o.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function E$(n,e,o){let r="";const t=n.x.translate/e.x,u=n.y.translate/e.y,c=(o==null?void 0:o.z)||0;if((t||u||c)&&(r=`translate3d(${t}px, ${u}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),o){const{transformPerspective:d,rotate:S,rotateX:p,rotateY:y,skewX:k,skewY:T}=o;d&&(r=`perspective(${d}px) ${r}`),S&&(r+=`rotate(${S}deg) `),p&&(r+=`rotateX(${p}deg) `),y&&(r+=`rotateY(${y}deg) `),k&&(r+=`skewX(${k}deg) `),T&&(r+=`skewY(${T}deg) `)}const m=n.x.scale*e.x,h=n.y.scale*e.y;return(m!==1||h!==1)&&(r+=`scale(${m}, ${h})`),r||"none"}const Qd=["","X","Y","Z"],H$=1e3;let G$=0;function nf(n,e,o,r){const{latestValues:t}=e;t[n]&&(o[n]=t[n],e.setStaticValue(n,0),r&&(r[n]=0))}function DI(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const o=lI(e);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:t,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Wn,!(t||u))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&DI(r)}function wI({attachResizeListener:n,defaultParent:e,measureScroll:o,checkIsScrollRoot:r,resetTransform:t}){return class{constructor(c={},m=e==null?void 0:e()){this.id=G$++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(j$),this.nodes.forEach(U$),this.nodes.forEach(V$),this.nodes.forEach(z$)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new D$)}addEventListener(c,m){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new SS),this.eventHandlers.get(c).add(m)}notifyListeners(c,...m){const h=this.eventHandlers.get(c);h&&h.notify(...m)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=_O(c)&&!Nj(c),this.instance=c;const{layoutId:m,layout:h,visualElement:d}=this.options;if(d&&!d.current&&d.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||m)&&(this.isLayoutDirty=!0),n){let S,p=0;const y=()=>this.root.updateBlockedByResize=!1;Wn.read(()=>{p=window.innerWidth}),n(c,()=>{const k=window.innerWidth;k!==p&&(p=k,this.root.updateBlockedByResize=!0,S&&S(),S=w$(y,250),rl.hasAnimatedSinceResize&&(rl.hasAnimatedSinceResize=!1,this.nodes.forEach(WT)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&d&&(m||h)&&this.addEventListener("didUpdate",({delta:S,hasLayoutChanged:p,hasRelativeLayoutChanged:y,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||d.getDefaultTransition()||X$,{onLayoutAnimationStart:O,onLayoutAnimationComplete:A}=d.getProps(),b=!this.targetLayout||!AI(this.targetLayout,k),I=!p&&y;if(this.options.layoutRoot||this.resumeFrom||I||p&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...IS(T,"layout"),onPlay:O,onComplete:A};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(S,I)}else p||WT(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ra(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Y$),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&DI(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let S=0;S<this.path.length;S++){const p=this.path[S];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(VT);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(YT);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(F$),this.nodes.forEach(L$),this.nodes.forEach(_$)):this.nodes.forEach(YT),this.clearAllSnapshots();const m=He.now();Te.delta=na(0,1e3/60,m-Te.timestamp),Te.timestamp=m,Te.isProcessing=!0,zd.update.process(Te),zd.preRender.process(Te),zd.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($$),this.sharedNodes.forEach(W$)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Wn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Wn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ke(this.snapshot.measuredBox.x)&&!Ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(m=!1),m&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!t)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!MI(this.projectionDelta),h=this.getTransformTemplate(),d=h?h(this.latestValues,""):void 0,S=d!==this.prevTransformTemplateValue;c&&this.instance&&(m||ai(this.latestValues)||S)&&(t(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return c&&(h=this.removeTransform(h)),q$(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:c}=this.options;if(!c)return re();const m=c.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(Q$))){const{scroll:S}=this.root;S&&(oo(m.x,S.offset.x),oo(m.y,S.offset.y))}return m}removeElementScroll(c){var h;const m=re();if(rt(m,c),(h=this.scroll)!=null&&h.wasRoot)return m;for(let d=0;d<this.path.length;d++){const S=this.path[d],{scroll:p,options:y}=S;S!==this.root&&p&&y.layoutScroll&&(p.wasRoot&&rt(m,c),oo(m.x,p.offset.x),oo(m.y,p.offset.y))}return m}applyTransform(c,m=!1){const h=re();rt(h,c);for(let d=0;d<this.path.length;d++){const S=this.path[d];!m&&S.options.layoutScroll&&S.scroll&&S!==S.root&&ro(h,{x:-S.scroll.offset.x,y:-S.scroll.offset.y}),ai(S.latestValues)&&ro(h,S.latestValues)}return ai(this.latestValues)&&ro(h,this.latestValues),h}removeTransform(c){const m=re();rt(m,c);for(let h=0;h<this.path.length;h++){const d=this.path[h];if(!d.instance||!ai(d.latestValues))continue;Ff(d.latestValues)&&d.updateSnapshot();const S=re(),p=d.measurePageBox();rt(S,p),_T(m,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,S)}return ai(this.latestValues)&&_T(m,this.latestValues),m}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var y;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==m;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:S,layoutId:p}=this.options;if(!(!this.layout||!(S||p))){if(this.resolvedRelativeTargetAt=Te.timestamp,!this.targetDelta&&!this.relativeTarget){const k=this.getClosestProjectingParent();k&&k.layout&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),_r(this.relativeTargetOrigin,this.layout.layoutBox,k.layout.layoutBox),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=re(),this.targetWithTransforms=re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o$(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):rt(this.target,this.layout.layoutBox),aI(this.target,this.targetDelta)):rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const k=this.getClosestProjectingParent();k&&!!k.resumingFrom==!!this.resumingFrom&&!k.options.layoutScroll&&k.target&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=re(),this.relativeTargetOrigin=re(),_r(this.relativeTargetOrigin,this.target,k.target),rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ff(this.parent.latestValues)||tI(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var T;const c=this.getLead(),m=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(h=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(h=!1),h)return;const{layout:d,layoutId:S}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||S))return;rt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;vz(this.layoutCorrected,this.treeScale,this.path,m),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=re());const{target:k}=c;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(HT(this.prevProjectionDelta.x,this.projectionDelta.x),HT(this.prevProjectionDelta.y,this.projectionDelta.y)),Lr(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==y||!UT(this.projectionDelta.x,this.prevProjectionDelta.x)||!UT(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=uo(),this.projectionDelta=uo(),this.projectionDeltaWithTransform=uo()}setAnimationOrigin(c,m=!1){const h=this.snapshot,d=h?h.latestValues:{},S={...this.latestValues},p=uo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const y=re(),k=h?h.source:void 0,T=this.layout?this.layout.source:void 0,O=k!==T,A=this.getStack(),b=!A||A.members.length<=1,I=!!(O&&!b&&this.options.crossfade===!0&&!this.path.some(J$));this.animationProgress=0;let C;this.mixTargetDelta=K=>{const w=K/1e3;ZT(p.x,c.x,w),ZT(p.y,c.y,w),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_r(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Z$(this.relativeTarget,this.relativeTargetOrigin,y,w),C&&P$(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=re()),rt(C,this.relativeTarget)),O&&(this.animationValues=S,O$(S,d,this.latestValues,w,I,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var m,h,d;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(d=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||d.stop(),this.pendingAnimation&&(Ra(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Wn.update(()=>{rl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yo(0)),this.currentAnimation=M$(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:S=>{this.mixTargetDelta(S),c.onUpdate&&c.onUpdate(S)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(H$),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:m,target:h,layout:d,latestValues:S}=c;if(!(!m||!h||!d)){if(this!==c&&this.layout&&d&&CI(this.options.animationType,this.layout.layoutBox,d.layoutBox)){h=this.target||re();const p=Ke(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+p;const y=Ke(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+y}rt(m,h),ro(m,S),Lr(this.projectionDeltaWithTransform,this.layoutCorrected,m,S)}}registerSharedNode(c,m){this.sharedNodes.has(c)||this.sharedNodes.set(c,new N$),this.sharedNodes.get(c).add(m);const d=m.options.initialPromotionConfig;m.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(m):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var m;const{layoutId:c}=this.options;return c?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:c}=this.options;return c?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:m,preserveFollowOpacity:h}={}){const d=this.getStack();d&&d.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let m=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const d={};h.z&&nf("z",c,d,this.animationValues);for(let S=0;S<Qd.length;S++)nf(`rotate${Qd[S]}`,c,d,this.animationValues),nf(`skew${Qd[S]}`,c,d,this.animationValues);c.render();for(const S in d)c.setStaticValue(S,d[S]),this.animationValues&&(this.animationValues[S]=d[S]);c.scheduleRender()}applyProjectionStyles(c,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=ol(m==null?void 0:m.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=ol(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!ai(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const S=d.animationValues||d.latestValues;this.applyTransformsToTarget();let p=E$(this.projectionDeltaWithTransform,this.treeScale,S);h&&(p=h(S,p)),c.transform=p;const{x:y,y:k}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${k.origin*100}% 0`,d.animationValues?c.opacity=d===this?S.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:S.opacityExit:c.opacity=d===this?S.opacity!==void 0?S.opacity:"":S.opacityExit!==void 0?S.opacityExit:0;for(const T in nu){if(S[T]===void 0)continue;const{correct:O,applyTo:A,isCSSVariable:b}=nu[T],I=p==="none"?S[T]:O(S[T],d);if(A){const C=A.length;for(let K=0;K<C;K++)c[A[K]]=I}else b?this.options.visualElement.renderState.vars[T]=I:c[T]=I}this.options.layoutId&&(c.pointerEvents=d===this?ol(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var m;return(m=c.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(VT),this.root.sharedNodes.clear()}}}function L$(n){n.updateLayout()}function _$(n){var o;const e=((o=n.resumeFrom)==null?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:t}=n.layout,{animationType:u}=n.options,c=e.source!==n.layout.source;u==="size"?ut(p=>{const y=c?e.measuredBox[p]:e.layoutBox[p],k=Ke(y);y.min=r[p].min,y.max=y.min+k}):CI(u,e.layoutBox,r)&&ut(p=>{const y=c?e.measuredBox[p]:e.layoutBox[p],k=Ke(r[p]);y.max=y.min+k,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+k)});const m=uo();Lr(m,r,e.layoutBox);const h=uo();c?Lr(h,n.applyTransform(t,!0),e.measuredBox):Lr(h,r,e.layoutBox);const d=!MI(m);let S=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:y,layout:k}=p;if(y&&k){const T=re();_r(T,e.layoutBox,y.layoutBox);const O=re();_r(O,r,k.layoutBox),AI(T,O)||(S=!0),p.options.layoutRoot&&(n.relativeTarget=O,n.relativeTargetOrigin=T,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:m,hasLayoutChanged:d,hasRelativeLayoutChanged:S})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function j$(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function z$(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function $$(n){n.clearSnapshot()}function VT(n){n.clearMeasurements()}function YT(n){n.isLayoutDirty=!1}function F$(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function WT(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function U$(n){n.resolveTargetDelta()}function V$(n){n.calcProjection()}function Y$(n){n.resetSkewAndRotation()}function W$(n){n.removeLeadSnapshot()}function ZT(n,e,o){n.translate=Jn(e.translate,0,o),n.scale=Jn(e.scale,1,o),n.origin=e.origin,n.originPoint=e.originPoint}function JT(n,e,o,r){n.min=Jn(e.min,o.min,r),n.max=Jn(e.max,o.max,r)}function Z$(n,e,o,r){JT(n.x,e.x,o.x,r),JT(n.y,e.y,o.y,r)}function J$(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const X$={duration:.45,ease:[.4,0,.1,1]},XT=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),qT=XT("applewebkit/")&&!XT("chrome/")?Math.round:st;function QT(n){n.min=qT(n.min),n.max=qT(n.max)}function q$(n){QT(n.x),QT(n.y)}function CI(n,e,o){return n==="position"||n==="preserve-aspect"&&!i$(FT(e),FT(o),.2)}function Q$(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const nF=wI({attachResizeListener:(n,e)=>eu(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ef={current:void 0},OI=wI({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ef.current){const n=new nF({});n.mount(window),n.setOptions({layoutScroll:!0}),ef.current=n}return ef.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),eF={pan:{Feature:v$},drag:{Feature:y$,ProjectionNode:OI,MeasureLayout:kI}};function nM(n,e,o){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",o==="Start");const t="onHover"+o,u=r[t];u&&Wn.postRender(()=>u(e,Su(e)))}class tF extends Na{mount(){const{current:e}=this.node;e&&(this.unmount=Kj(e,(o,r)=>(nM(this.node,r,"Start"),t=>nM(this.node,t,"End"))))}unmount(){}}class aF extends Na{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fu(eu(this.node.current,"focus",()=>this.onFocus()),eu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function eM(n,e,o){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",o==="Start");const t="onTap"+(o==="End"?"":o),u=r[t];u&&Wn.postRender(()=>u(e,Su(e)))}class iF extends Na{mount(){const{current:e}=this.node;e&&(this.unmount=Pj(e,(o,r)=>(eM(this.node,r,"Start"),(t,{success:u})=>eM(this.node,t,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xf=new WeakMap,tf=new WeakMap,oF=n=>{const e=Xf.get(n.target);e&&e(n)},rF=n=>{n.forEach(oF)};function uF({root:n,...e}){const o=n||document;tf.has(o)||tf.set(o,{});const r=tf.get(o),t=JSON.stringify(e);return r[t]||(r[t]=new IntersectionObserver(rF,{root:n,...e})),r[t]}function sF(n,e,o){const r=uF(e);return Xf.set(n,o),r.observe(n),()=>{Xf.delete(n),r.unobserve(n)}}const lF={some:0,all:1};class cF extends Na{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:o,margin:r,amount:t="some",once:u}=e,c={root:o?o.current:void 0,rootMargin:r,threshold:typeof t=="number"?t:lF[t]},m=h=>{const{isIntersecting:d}=h;if(this.isInView===d||(this.isInView=d,u&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:S,onViewportLeave:p}=this.node.getProps(),y=d?S:p;y&&y(h)};return sF(this.node.current,c,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:o}=this.node;["amount","margin","root"].some(hF(e,o))&&this.startObserver()}unmount(){}}function hF({viewport:n={}},{viewport:e={}}={}){return o=>n[o]!==e[o]}const dF={inView:{Feature:cF},tap:{Feature:iF},focus:{Feature:aF},hover:{Feature:tF}},fF={layout:{ProjectionNode:OI,MeasureLayout:kI}},mF={...qz,...dF,...eF,...fF},ft=Sz(mF,Iz);function gF(n){n.values.forEach(e=>e.stop())}function qf(n,e){[...e].reverse().forEach(r=>{const t=n.getVariant(r);t&&jS(n,t),n.variantChildren&&n.variantChildren.forEach(u=>{qf(u,e)})})}function SF(n,e){if(Array.isArray(e))return qf(n,e);if(typeof e=="string")return qf(n,[e]);jS(n,e)}function pF(){const n=new Set,e={subscribe(o){return n.add(o),()=>void n.delete(o)},start(o,r){const t=[];return n.forEach(u=>{t.push(dI(u,o,{transitionOverride:r}))}),Promise.all(t)},set(o){return n.forEach(r=>{SF(r,o)})},stop(){n.forEach(o=>{gF(o)})},mount(){return()=>{e.stop()}}};return e}function yF(){const n=JC(pF);return XC(n.mount,[]),n}const _l=yF;function vF(){const n=_l(),e=_l(),[o,r]=D.useState(null),{saveGuessStates:t,loadGuessStates:u}=lS(),{FileInput:c,openPicker:m}=LL(S=>{S?(u(S),r({type:"Success",msg:"File loaded!"})):r({type:"Error",msg:"Invalid JSON"})}),h=()=>n.start({x:0,transition:{duration:.15}}),d=()=>n.start({x:"-101%",transition:{duration:.5}});return P.jsxs(P.Fragment,{children:[c," ",P.jsxs(ft.button,{className:"SaveButton relative overflow-hidden bg-gray-500 text-white text-[11px] sm:text-sm lg:text-lg w-[90%] h-16 lg:h-20 px-4 py-2 rounded",onHoverStart:h,onHoverEnd:d,onTapStart:h,onTapCancel:d,onClick:()=>{t(),d()},children:[P.jsx(ft.div,{className:"absolute top-0 left-0 h-full w-full bg-[var(--primary-color)] rounded z-0",animate:n,initial:{x:"-101%",transition:{duration:.15}}}),P.jsx("span",{className:"relative z-10",children:"Save Progress"})]}),P.jsxs(ft.button,{onHoverStart:()=>e.start({x:0,transition:{duration:.15}}),onHoverEnd:()=>e.start({x:"101%",transition:{duration:.5}}),className:"LoadButton relative overflow-hidden bg-gray-500 text-white text-[11px] sm:text-sm lg:text-lg w-[90%] h-16 lg:h-20 px-4 py-2 rounded",onClick:m,children:[P.jsx(ft.div,{className:"absolute top-0 right-0 h-full w-full bg-green-500 rounded z-0",animate:e,initial:{x:"101%",transition:{duration:.15}}}),P.jsx("span",{className:"relative z-10",children:"Load Progress"})]}),o&&P.jsx(_L,{type:o.type,message:o.msg,onDone:()=>r(null)})]})}function kF(){const{mode:n}=uu();return n==="Opening"?P.jsxs("div",{className:"MainContent relative flex flex-row justify-center w-[100vw] h-full top-[1.5vw]",children:[P.jsx("div",{className:"flex relative justify-center w-[20vw]",children:P.jsx(_1,{})}),P.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 w-[60vw]",children:[P.jsx(HN,{}),P.jsx(GL,{})]}),P.jsx("div",{className:"flex relative flex flex-col items-center gap-[0.5vw] w-[20vw] h-full",children:P.jsx(vF,{})})]}):P.jsx("div",{children:"Under Construction"})}var af={exports:{}},of,tM;function bF(){if(tM)return of;tM=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return of=n,of}var rf,aM;function TF(){if(aM)return rf;aM=1;var n=bF();function e(){}function o(){}return o.resetWarningCache=e,rf=function(){function r(c,m,h,d,S,p){if(p!==n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function t(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:t,element:r,elementType:r,instanceOf:t,node:r,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:e};return u.PropTypes=u,u},rf}var iM;function MF(){return iM||(iM=1,af.exports=TF()()),af.exports}var AF=MF();const be=tu(AF);var uf,oM;function DF(){return oM||(oM=1,uf=function n(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var r,t,u;if(Array.isArray(e)){if(r=e.length,r!=o.length)return!1;for(t=r;t--!==0;)if(!n(e[t],o[t]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if(u=Object.keys(e),r=u.length,r!==Object.keys(o).length)return!1;for(t=r;t--!==0;)if(!Object.prototype.hasOwnProperty.call(o,u[t]))return!1;for(t=r;t--!==0;){var c=u[t];if(!n(e[c],o[c]))return!1}return!0}return e!==e&&o!==o}),uf}var wF=DF();const CF=tu(wF);var zs={exports:{}},sf,rM;function OF(){if(rM)return sf;rM=1;var n;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/return n=function(){var e={},o={};return e.on=function(r,t){var u={name:r,handler:t};return o[r]=o[r]||[],o[r].unshift(u),u},e.off=function(r){var t=o[r.name].indexOf(r);t!==-1&&o[r.name].splice(t,1)},e.trigger=function(r,t){var u=o[r],c;if(u)for(c=u.length;c--;)u[c].handler(t)},e},sf=n,sf}var $s={exports:{}},lf,uM;function IF(){if(uM)return lf;uM=1,lf=function(t,u,c){var m=document.head||document.getElementsByTagName("head")[0],h=document.createElement("script");typeof u=="function"&&(c=u,u={}),u=u||{},c=c||function(){},h.type=u.type||"text/javascript",h.charset=u.charset||"utf8",h.async="async"in u?!!u.async:!0,h.src=t,u.attrs&&n(h,u.attrs),u.text&&(h.text=""+u.text);var d="onload"in h?e:o;d(h,c),h.onload||e(h,c),m.appendChild(h)};function n(r,t){for(var u in t)r.setAttribute(u,t[u])}function e(r,t){r.onload=function(){this.onerror=this.onload=null,t(null,r)},r.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),r)}}function o(r,t){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,r))}}return lf}var sM;function KF(){return sM||(sM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=IF(),r=t(o);function t(u){return u&&u.__esModule?u:{default:u}}e.default=function(u){var c=new Promise(function(m){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){m(window.YT);return}else{var h=window.location.protocol==="http:"?"http:":"https:";(0,r.default)(h+"//www.youtube.com/iframe_api",function(S){S&&u.trigger("error",S)})}var d=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){d&&d(),m(window.YT)}});return c},n.exports=e.default}($s,$s.exports)),$s.exports}var Fs={exports:{}},Us={exports:{}},Vs={exports:{}},cf,lM;function xF(){if(lM)return cf;lM=1;var n=1e3,e=n*60,o=e*60,r=o*24,t=r*365.25;cf=function(d,S){S=S||{};var p=typeof d;if(p==="string"&&d.length>0)return u(d);if(p==="number"&&isNaN(d)===!1)return S.long?m(d):c(d);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(d))};function u(d){if(d=String(d),!(d.length>100)){var S=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(d);if(S){var p=parseFloat(S[1]),y=(S[2]||"ms").toLowerCase();switch(y){case"years":case"year":case"yrs":case"yr":case"y":return p*t;case"days":case"day":case"d":return p*r;case"hours":case"hour":case"hrs":case"hr":case"h":return p*o;case"minutes":case"minute":case"mins":case"min":case"m":return p*e;case"seconds":case"second":case"secs":case"sec":case"s":return p*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return p;default:return}}}}function c(d){return d>=r?Math.round(d/r)+"d":d>=o?Math.round(d/o)+"h":d>=e?Math.round(d/e)+"m":d>=n?Math.round(d/n)+"s":d+"ms"}function m(d){return h(d,r,"day")||h(d,o,"hour")||h(d,e,"minute")||h(d,n,"second")||d+" ms"}function h(d,S,p){if(!(d<S))return d<S*1.5?Math.floor(d/S)+" "+p:Math.ceil(d/S)+" "+p+"s"}return cf}var cM;function RF(){return cM||(cM=1,function(n,e){e=n.exports=t.debug=t.default=t,e.coerce=h,e.disable=c,e.enable=u,e.enabled=m,e.humanize=xF(),e.names=[],e.skips=[],e.formatters={};var o;function r(d){var S=0,p;for(p in d)S=(S<<5)-S+d.charCodeAt(p),S|=0;return e.colors[Math.abs(S)%e.colors.length]}function t(d){function S(){if(S.enabled){var p=S,y=+new Date,k=y-(o||y);p.diff=k,p.prev=o,p.curr=y,o=y;for(var T=new Array(arguments.length),O=0;O<T.length;O++)T[O]=arguments[O];T[0]=e.coerce(T[0]),typeof T[0]!="string"&&T.unshift("%O");var A=0;T[0]=T[0].replace(/%([a-zA-Z%])/g,function(I,C){if(I==="%%")return I;A++;var K=e.formatters[C];if(typeof K=="function"){var w=T[A];I=K.call(p,w),T.splice(A,1),A--}return I}),e.formatArgs.call(p,T);var b=S.log||e.log||console.log.bind(console);b.apply(p,T)}}return S.namespace=d,S.enabled=e.enabled(d),S.useColors=e.useColors(),S.color=r(d),typeof e.init=="function"&&e.init(S),S}function u(d){e.save(d),e.names=[],e.skips=[];for(var S=(typeof d=="string"?d:"").split(/[\s,]+/),p=S.length,y=0;y<p;y++)S[y]&&(d=S[y].replace(/\*/g,".*?"),d[0]==="-"?e.skips.push(new RegExp("^"+d.substr(1)+"$")):e.names.push(new RegExp("^"+d+"$")))}function c(){e.enable("")}function m(d){var S,p;for(S=0,p=e.skips.length;S<p;S++)if(e.skips[S].test(d))return!1;for(S=0,p=e.names.length;S<p;S++)if(e.names[S].test(d))return!0;return!1}function h(d){return d instanceof Error?d.stack||d.message:d}}(Vs,Vs.exports)),Vs.exports}var hM;function BF(){return hM||(hM=1,function(n,e){var o={};e=n.exports=RF(),e.log=u,e.formatArgs=t,e.save=c,e.load=m,e.useColors=r,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:h(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(d){try{return JSON.stringify(d)}catch(S){return"[UnexpectedJSONParseError]: "+S.message}};function t(d){var S=this.useColors;if(d[0]=(S?"%c":"")+this.namespace+(S?" %c":" ")+d[0]+(S?"%c ":" ")+"+"+e.humanize(this.diff),!!S){var p="color: "+this.color;d.splice(1,0,p,"color: inherit");var y=0,k=0;d[0].replace(/%[a-zA-Z%]/g,function(T){T!=="%%"&&(y++,T==="%c"&&(k=y))}),d.splice(k,0,p)}}function u(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(d){try{d==null?e.storage.removeItem("debug"):e.storage.debug=d}catch{}}function m(){var d;try{d=e.storage.debug}catch{}return!d&&typeof process<"u"&&"env"in process&&(d=o.DEBUG),d}e.enable(m());function h(){try{return window.localStorage}catch{}}}(Us,Us.exports)),Us.exports}var Ys={exports:{}},dM;function PF(){return dM||(dM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],n.exports=e.default}(Ys,Ys.exports)),Ys.exports}var Ws={exports:{}},fM;function NF(){return fM||(fM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],n.exports=e.default}(Ws,Ws.exports)),Ws.exports}var Zs={exports:{}},Js={exports:{}},mM;function EF(){return mM||(mM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},n.exports=e.default}(Js,Js.exports)),Js.exports}var gM;function HF(){return gM||(gM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=EF(),r=t(o);function t(u){return u&&u.__esModule?u:{default:u}}e.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},n.exports=e.default}(Zs,Zs.exports)),Zs.exports}var SM;function GF(){return SM||(SM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=BF(),r=S(o),t=PF(),u=S(t),c=NF(),m=S(c),h=HF(),d=S(h);function S(k){return k&&k.__esModule?k:{default:k}}var p=(0,r.default)("youtube-player"),y={};y.proxyEvents=function(k){var T={},O=function(j){var z="on"+j.slice(0,1).toUpperCase()+j.slice(1);T[z]=function(X){p('event "%s"',z,X),k.trigger(j,X)}},A=!0,b=!1,I=void 0;try{for(var C=m.default[Symbol.iterator](),K;!(A=(K=C.next()).done);A=!0){var w=K.value;O(w)}}catch(E){b=!0,I=E}finally{try{!A&&C.return&&C.return()}finally{if(b)throw I}}return T},y.promisifyPlayer=function(k){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O={},A=function(z){T&&d.default[z]?O[z]=function(){for(var X=arguments.length,on=Array(X),rn=0;rn<X;rn++)on[rn]=arguments[rn];return k.then(function(un){var kn=d.default[z],q=un.getPlayerState(),tn=un[z].apply(un,on);return kn.stateChangeRequired||Array.isArray(kn.acceptableStates)&&kn.acceptableStates.indexOf(q)===-1?new Promise(function(H){var Z=function an(){var pn=un.getPlayerState(),R=void 0;typeof kn.timeout=="number"&&(R=setTimeout(function(){un.removeEventListener("onStateChange",an),H()},kn.timeout)),Array.isArray(kn.acceptableStates)&&kn.acceptableStates.indexOf(pn)!==-1&&(un.removeEventListener("onStateChange",an),clearTimeout(R),H())};un.addEventListener("onStateChange",Z)}).then(function(){return tn}):tn})}:O[z]=function(){for(var X=arguments.length,on=Array(X),rn=0;rn<X;rn++)on[rn]=arguments[rn];return k.then(function(un){return un[z].apply(un,on)})}},b=!0,I=!1,C=void 0;try{for(var K=u.default[Symbol.iterator](),w;!(b=(w=K.next()).done);b=!0){var E=w.value;A(E)}}catch(j){I=!0,C=j}finally{try{!b&&K.return&&K.return()}finally{if(I)throw C}}return O},e.default=y,n.exports=e.default}(Fs,Fs.exports)),Fs.exports}var pM;function LF(){return pM||(pM=1,function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},r=OF(),t=d(r),u=KF(),c=d(u),m=GF(),h=d(m);function d(p){return p&&p.__esModule?p:{default:p}}var S=void 0;e.default=function(p){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,T=(0,t.default)();if(S||(S=(0,c.default)(T)),y.events)throw new Error("Event handlers cannot be overwritten.");if(typeof p=="string"&&!document.getElementById(p))throw new Error('Element "'+p+'" does not exist.');y.events=h.default.proxyEvents(T);var O=new Promise(function(b){if((typeof p>"u"?"undefined":o(p))==="object"&&p.playVideo instanceof Function){var I=p;b(I)}else S.then(function(C){var K=new C.Player(p,y);return T.on("ready",function(){b(K)}),null})}),A=h.default.promisifyPlayer(O,k);return A.on=T.on,A.off=T.off,A},n.exports=e.default}(zs,zs.exports)),zs.exports}var _F=LF();const jF=tu(_F);var zF=Object.defineProperty,$F=Object.defineProperties,FF=Object.getOwnPropertyDescriptors,yM=Object.getOwnPropertySymbols,UF=Object.prototype.hasOwnProperty,VF=Object.prototype.propertyIsEnumerable,vM=(n,e,o)=>e in n?zF(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,Qf=(n,e)=>{for(var o in e||(e={}))UF.call(e,o)&&vM(n,o,e[o]);if(yM)for(var o of yM(e))VF.call(e,o)&&vM(n,o,e[o]);return n},nm=(n,e)=>$F(n,FF(e)),YF=(n,e,o)=>new Promise((r,t)=>{var u=h=>{try{m(o.next(h))}catch(d){t(d)}},c=h=>{try{m(o.throw(h))}catch(d){t(d)}},m=h=>h.done?r(h.value):Promise.resolve(h.value).then(u,c);m((o=o.apply(n,e)).next())});function WF(n,e){var o,r;if(n.videoId!==e.videoId)return!0;const t=((o=n.opts)==null?void 0:o.playerVars)||{},u=((r=e.opts)==null?void 0:r.playerVars)||{};return t.start!==u.start||t.end!==u.end}function kM(n={}){return nm(Qf({},n),{height:0,width:0,playerVars:nm(Qf({},n.playerVars),{autoplay:0,start:0,end:0})})}function ZF(n,e){return n.videoId!==e.videoId||!CF(kM(n.opts),kM(e.opts))}function JF(n,e){var o,r,t,u;return n.id!==e.id||n.className!==e.className||((o=n.opts)==null?void 0:o.width)!==((r=e.opts)==null?void 0:r.width)||((t=n.opts)==null?void 0:t.height)!==((u=e.opts)==null?void 0:u.height)||n.iframeClassName!==e.iframeClassName||n.title!==e.title}var XF={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},qF={videoId:be.string,id:be.string,className:be.string,iframeClassName:be.string,style:be.object,title:be.string,loading:be.oneOf(["lazy","eager"]),opts:be.objectOf(be.any),onReady:be.func,onError:be.func,onPlay:be.func,onPause:be.func,onEnd:be.func,onStateChange:be.func,onPlaybackRateChange:be.func,onPlaybackQualityChange:be.func},ul=class extends so.Component{constructor(n){super(n),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var o,r;return(r=(o=this.props).onReady)==null?void 0:r.call(o,e)},this.onPlayerError=e=>{var o,r;return(r=(o=this.props).onError)==null?void 0:r.call(o,e)},this.onPlayerStateChange=e=>{var o,r,t,u,c,m,h,d;switch((r=(o=this.props).onStateChange)==null||r.call(o,e),e.data){case ul.PlayerState.ENDED:(u=(t=this.props).onEnd)==null||u.call(t,e);break;case ul.PlayerState.PLAYING:(m=(c=this.props).onPlay)==null||m.call(c,e);break;case ul.PlayerState.PAUSED:(d=(h=this.props).onPause)==null||d.call(h,e);break}},this.onPlayerPlaybackRateChange=e=>{var o,r;return(r=(o=this.props).onPlaybackRateChange)==null?void 0:r.call(o,e)},this.onPlayerPlaybackQualityChange=e=>{var o,r;return(r=(o=this.props).onPlaybackQualityChange)==null?void 0:r.call(o,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=nm(Qf({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=jF(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(o=>{this.props.title&&o.setAttribute("title",this.props.title),this.props.loading&&o.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(o=>{this.props.id?o.setAttribute("id",this.props.id):o.removeAttribute("id"),this.props.iframeClassName?o.setAttribute("class",this.props.iframeClassName):o.removeAttribute("class"),this.props.opts&&this.props.opts.width?o.setAttribute("width",this.props.opts.width.toString()):o.removeAttribute("width"),this.props.opts&&this.props.opts.height?o.setAttribute("height",this.props.opts.height.toString()):o.removeAttribute("height"),this.props.title?o.setAttribute("title",this.props.title):o.setAttribute("title","YouTube video player"),this.props.loading?o.setAttribute("loading",this.props.loading):o.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,o,r,t;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let u=!1;const c={videoId:this.props.videoId};if((o=this.props.opts)!=null&&o.playerVars&&(u=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),u){(r=this.internalPlayer)==null||r.loadVideoById(c);return}(t=this.internalPlayer)==null||t.cueVideoById(c)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(n){return YF(this,null,function*(){JF(n,this.props)&&this.updatePlayer(),ZF(n,this.props)&&(yield this.resetPlayer()),WF(n,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return so.createElement("div",{className:this.props.className,style:this.props.style},so.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},dc=ul;dc.propTypes=qF;dc.defaultProps=XF;dc.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var bM=dc;function TM({angles:n}){return P.jsxs("div",{className:"TopLeftSpinningRecordContainer relative w-[100px] h-[100px]",children:[P.jsxs("div",{className:"Record relative w-full h-full rounded-full",children:[P.jsx("div",{className:`RecordGradient absolute inset-0 rounded-full
                    bg-linear-to-r/srgb from-teal-950 to-indigo-500
                    animate-[spin_3s_linear_infinite]
                    delay-[${Math.random()*1500}]`}),P.jsx("div",{className:`RecordRings absolute inset-0 rounded-full 
                                [background:repeating-radial-gradient(circle,#0f172a_0px,#0f172a_8px,transparent_9px,transparent_14px)]`})]}),n.map(e=>P.jsx("div",{className:"RecordStickOverlay absolute w-[55px] h-[15px] top-[50%] left-[50%] -translate-y-1/2 bg-black origin-left rounded-r-xl z-2",style:{transform:`rotate(${e}deg)`}},e)),P.jsx("div",{className:"RecordBoundingCircle absolute top-[-5px] left-[-5px] w-[110%] h-[110%] border-[8px] border-black rounded-full z-3"})]})}var sl={exports:{}},QF=sl.exports,MM;function nU(){return MM||(MM=1,function(n){(function(e,o,r){function t(h){var d=this,S=m();d.next=function(){var p=2091639*d.s0+d.c*23283064365386963e-26;return d.s0=d.s1,d.s1=d.s2,d.s2=p-(d.c=p|0)},d.c=1,d.s0=S(" "),d.s1=S(" "),d.s2=S(" "),d.s0-=S(h),d.s0<0&&(d.s0+=1),d.s1-=S(h),d.s1<0&&(d.s1+=1),d.s2-=S(h),d.s2<0&&(d.s2+=1),S=null}function u(h,d){return d.c=h.c,d.s0=h.s0,d.s1=h.s1,d.s2=h.s2,d}function c(h,d){var S=new t(h),p=d&&d.state,y=S.next;return y.int32=function(){return S.next()*4294967296|0},y.double=function(){return y()+(y()*2097152|0)*11102230246251565e-32},y.quick=y,p&&(typeof p=="object"&&u(p,S),y.state=function(){return u(S,{})}),y}function m(){var h=4022871197,d=function(S){S=String(S);for(var p=0;p<S.length;p++){h+=S.charCodeAt(p);var y=.02519603282416938*h;h=y>>>0,y-=h,y*=h,h=y>>>0,y-=h,h+=y*4294967296}return(h>>>0)*23283064365386963e-26};return d}o&&o.exports?o.exports=c:this.alea=c})(QF,n)}(sl)),sl.exports}var ll={exports:{}},eU=ll.exports,AM;function tU(){return AM||(AM=1,function(n){(function(e,o,r){function t(m){var h=this,d="";h.x=0,h.y=0,h.z=0,h.w=0,h.next=function(){var p=h.x^h.x<<11;return h.x=h.y,h.y=h.z,h.z=h.w,h.w^=h.w>>>19^p^p>>>8},m===(m|0)?h.x=m:d+=m;for(var S=0;S<d.length+64;S++)h.x^=d.charCodeAt(S)|0,h.next()}function u(m,h){return h.x=m.x,h.y=m.y,h.z=m.z,h.w=m.w,h}function c(m,h){var d=new t(m),S=h&&h.state,p=function(){return(d.next()>>>0)/4294967296};return p.double=function(){do var y=d.next()>>>11,k=(d.next()>>>0)/4294967296,T=(y+k)/(1<<21);while(T===0);return T},p.int32=d.next,p.quick=p,S&&(typeof S=="object"&&u(S,d),p.state=function(){return u(d,{})}),p}o&&o.exports?o.exports=c:this.xor128=c})(eU,n)}(ll)),ll.exports}var cl={exports:{}},aU=cl.exports,DM;function iU(){return DM||(DM=1,function(n){(function(e,o,r){function t(m){var h=this,d="";h.next=function(){var p=h.x^h.x>>>2;return h.x=h.y,h.y=h.z,h.z=h.w,h.w=h.v,(h.d=h.d+362437|0)+(h.v=h.v^h.v<<4^(p^p<<1))|0},h.x=0,h.y=0,h.z=0,h.w=0,h.v=0,m===(m|0)?h.x=m:d+=m;for(var S=0;S<d.length+64;S++)h.x^=d.charCodeAt(S)|0,S==d.length&&(h.d=h.x<<10^h.x>>>4),h.next()}function u(m,h){return h.x=m.x,h.y=m.y,h.z=m.z,h.w=m.w,h.v=m.v,h.d=m.d,h}function c(m,h){var d=new t(m),S=h&&h.state,p=function(){return(d.next()>>>0)/4294967296};return p.double=function(){do var y=d.next()>>>11,k=(d.next()>>>0)/4294967296,T=(y+k)/(1<<21);while(T===0);return T},p.int32=d.next,p.quick=p,S&&(typeof S=="object"&&u(S,d),p.state=function(){return u(d,{})}),p}o&&o.exports?o.exports=c:this.xorwow=c})(aU,n)}(cl)),cl.exports}var hl={exports:{}},oU=hl.exports,wM;function rU(){return wM||(wM=1,function(n){(function(e,o,r){function t(m){var h=this;h.next=function(){var S=h.x,p=h.i,y,k;return y=S[p],y^=y>>>7,k=y^y<<24,y=S[p+1&7],k^=y^y>>>10,y=S[p+3&7],k^=y^y>>>3,y=S[p+4&7],k^=y^y<<7,y=S[p+7&7],y=y^y<<13,k^=y^y<<9,S[p]=k,h.i=p+1&7,k};function d(S,p){var y,k=[];if(p===(p|0))k[0]=p;else for(p=""+p,y=0;y<p.length;++y)k[y&7]=k[y&7]<<15^p.charCodeAt(y)+k[y+1&7]<<13;for(;k.length<8;)k.push(0);for(y=0;y<8&&k[y]===0;++y);for(y==8?k[7]=-1:k[y],S.x=k,S.i=0,y=256;y>0;--y)S.next()}d(h,m)}function u(m,h){return h.x=m.x.slice(),h.i=m.i,h}function c(m,h){m==null&&(m=+new Date);var d=new t(m),S=h&&h.state,p=function(){return(d.next()>>>0)/4294967296};return p.double=function(){do var y=d.next()>>>11,k=(d.next()>>>0)/4294967296,T=(y+k)/(1<<21);while(T===0);return T},p.int32=d.next,p.quick=p,S&&(S.x&&u(S,d),p.state=function(){return u(d,{})}),p}o&&o.exports?o.exports=c:this.xorshift7=c})(oU,n)}(hl)),hl.exports}var dl={exports:{}},uU=dl.exports,CM;function sU(){return CM||(CM=1,function(n){(function(e,o,r){function t(m){var h=this;h.next=function(){var S=h.w,p=h.X,y=h.i,k,T;return h.w=S=S+1640531527|0,T=p[y+34&127],k=p[y=y+1&127],T^=T<<13,k^=k<<17,T^=T>>>15,k^=k>>>12,T=p[y]=T^k,h.i=y,T+(S^S>>>16)|0};function d(S,p){var y,k,T,O,A,b=[],I=128;for(p===(p|0)?(k=p,p=null):(p=p+"\0",k=0,I=Math.max(I,p.length)),T=0,O=-32;O<I;++O)p&&(k^=p.charCodeAt((O+32)%p.length)),O===0&&(A=k),k^=k<<10,k^=k>>>15,k^=k<<4,k^=k>>>13,O>=0&&(A=A+1640531527|0,y=b[O&127]^=k+A,T=y==0?T+1:0);for(T>=128&&(b[(p&&p.length||0)&127]=-1),T=127,O=512;O>0;--O)k=b[T+34&127],y=b[T=T+1&127],k^=k<<13,y^=y<<17,k^=k>>>15,y^=y>>>12,b[T]=k^y;S.w=A,S.X=b,S.i=T}d(h,m)}function u(m,h){return h.i=m.i,h.w=m.w,h.X=m.X.slice(),h}function c(m,h){m==null&&(m=+new Date);var d=new t(m),S=h&&h.state,p=function(){return(d.next()>>>0)/4294967296};return p.double=function(){do var y=d.next()>>>11,k=(d.next()>>>0)/4294967296,T=(y+k)/(1<<21);while(T===0);return T},p.int32=d.next,p.quick=p,S&&(S.X&&u(S,d),p.state=function(){return u(d,{})}),p}o&&o.exports?o.exports=c:this.xor4096=c})(uU,n)}(dl)),dl.exports}var fl={exports:{}},lU=fl.exports,OM;function cU(){return OM||(OM=1,function(n){(function(e,o,r){function t(m){var h=this,d="";h.next=function(){var p=h.b,y=h.c,k=h.d,T=h.a;return p=p<<25^p>>>7^y,y=y-k|0,k=k<<24^k>>>8^T,T=T-p|0,h.b=p=p<<20^p>>>12^y,h.c=y=y-k|0,h.d=k<<16^y>>>16^T,h.a=T-p|0},h.a=0,h.b=0,h.c=-1640531527,h.d=1367130551,m===Math.floor(m)?(h.a=m/4294967296|0,h.b=m|0):d+=m;for(var S=0;S<d.length+20;S++)h.b^=d.charCodeAt(S)|0,h.next()}function u(m,h){return h.a=m.a,h.b=m.b,h.c=m.c,h.d=m.d,h}function c(m,h){var d=new t(m),S=h&&h.state,p=function(){return(d.next()>>>0)/4294967296};return p.double=function(){do var y=d.next()>>>11,k=(d.next()>>>0)/4294967296,T=(y+k)/(1<<21);while(T===0);return T},p.int32=d.next,p.quick=p,S&&(typeof S=="object"&&u(S,d),p.state=function(){return u(d,{})}),p}o&&o.exports?o.exports=c:this.tychei=c})(lU,n)}(fl)),fl.exports}var ml={exports:{}};const hU={},dU=Object.freeze(Object.defineProperty({__proto__:null,default:hU},Symbol.toStringTag,{value:"Module"})),fU=Xx(dU);var mU=ml.exports,IM;function gU(){return IM||(IM=1,function(n){(function(e,o,r){var t=256,u=6,c=52,m="random",h=r.pow(t,u),d=r.pow(2,c),S=d*2,p=t-1,y;function k(K,w,E){var j=[];w=w==!0?{entropy:!0}:w||{};var z=b(A(w.entropy?[K,C(o)]:K??I(),3),j),X=new T(j),on=function(){for(var rn=X.g(u),un=h,kn=0;rn<d;)rn=(rn+kn)*t,un*=t,kn=X.g(1);for(;rn>=S;)rn/=2,un/=2,kn>>>=1;return(rn+kn)/un};return on.int32=function(){return X.g(4)|0},on.quick=function(){return X.g(4)/4294967296},on.double=on,b(C(X.S),o),(w.pass||E||function(rn,un,kn,q){return q&&(q.S&&O(q,X),rn.state=function(){return O(X,{})}),kn?(r[m]=rn,un):rn})(on,z,"global"in w?w.global:this==r,w.state)}function T(K){var w,E=K.length,j=this,z=0,X=j.i=j.j=0,on=j.S=[];for(E||(K=[E++]);z<t;)on[z]=z++;for(z=0;z<t;z++)on[z]=on[X=p&X+K[z%E]+(w=on[z])],on[X]=w;(j.g=function(rn){for(var un,kn=0,q=j.i,tn=j.j,H=j.S;rn--;)un=H[q=p&q+1],kn=kn*t+H[p&(H[q]=H[tn=p&tn+un])+(H[tn]=un)];return j.i=q,j.j=tn,kn})(t)}function O(K,w){return w.i=K.i,w.j=K.j,w.S=K.S.slice(),w}function A(K,w){var E=[],j=typeof K,z;if(w&&j=="object")for(z in K)try{E.push(A(K[z],w-1))}catch{}return E.length?E:j=="string"?K:K+"\0"}function b(K,w){for(var E=K+"",j,z=0;z<E.length;)w[p&z]=p&(j^=w[p&z]*19)+E.charCodeAt(z++);return C(w)}function I(){try{var K;return y&&(K=y.randomBytes)?K=K(t):(K=new Uint8Array(t),(e.crypto||e.msCrypto).getRandomValues(K)),C(K)}catch{var w=e.navigator,E=w&&w.plugins;return[+new Date,e,E,e.screen,C(o)]}}function C(K){return String.fromCharCode.apply(0,K)}if(b(r.random(),o),n.exports){n.exports=k;try{y=fU}catch{}}else r["seed"+m]=k})(typeof self<"u"?self:mU,[],Math)}(ml)),ml.exports}var hf,KM;function SU(){if(KM)return hf;KM=1;var n=nU(),e=tU(),o=iU(),r=rU(),t=sU(),u=cU(),c=gU();return c.alea=n,c.xor128=e,c.xorwow=o,c.xorshift7=r,c.xor4096=t,c.tychei=u,hf=c,hf}var pU=SU();const yU=tu(pU);function vU({hintsRevealed:n,songTitle:e,songArtist:o}){const r=_l(),[t,u]=D.useState(!1),[c,m]=D.useState(""),[h,d]=D.useState(5),S=D.useRef(null),[p,y]=D.useState([]),k=D.useCallback(()=>{var O;if(!S.current)return;const T=((O=S.current)==null?void 0:O.offsetWidth)+35;u(A=>A?(r.set({x:0}),r.start({x:[0,-T],transition:{x:{duration:h,ease:"linear"}}}),!1):(r.set({x:150}),r.start({x:[150,0,0],transition:{x:{duration:5,times:[0,.7,1],ease:"easeOut"}}}),!0))},[t,h]);return D.useEffect(()=>{let T=Math.floor((c.length-4)/5*n);T=T<=p.length?T:p.length,n===5&&(T=p.length);const O=c.split("");for(let A=0;A<T;A++){const b=p[A];O[b.pos]=b.letter}m(O.join(""))},[n,p,e,o]),D.useEffect(()=>{const T="?".repeat(e.length)+" by "+"?".repeat(o.length),O=.3*T.length,A=[];for(let C=0;C<e.length;C++)A.push({letter:e[C],pos:C});for(let C=0;C<o.length;C++)A.push({letter:o[C],pos:C+e.length+4});const b=yU(`${e}`),I=A.map(C=>({val:C,sort:b()})).sort((C,K)=>C.sort-K.sort).map(({val:C})=>C);y(I),m(T),d(O),u(!1),k()},[e,o]),P.jsx(ft.div,{className:`ElectronicDisplay absolute w-[135px] h-[25px] top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-1
                        bg-black border-2 border-teal-100/70 text-violet-300 font-[Orbitron] tracking-[2px] drop-shadow-[0_0_8px_rgba(80,44,158,0.8)]
                        overflow-hidden`,children:P.jsx(ft.div,{animate:r,transition:{duration:5,ease:"linear"},onAnimationComplete:()=>k(),children:P.jsx("span",{ref:S,className:"whitespace-pre",children:c})})})}const kU=[0,60,120,160,200,240,280,320],bU=[0,40,80,140,200,240,280,320],Rr=[1,2,5,10,15,30];function TU({hintsRevealed:n,videoId:e,showVideo:o,songTitle:r,songArtist:t}){const[u,c]=D.useState(0),[m,h]=D.useState(!1),d=D.useRef(null),[S,p]=D.useState(50),[y,k]=D.useState(!1),T=sm(),O=_l(),A=q=>{d.current=q.target,d.current.setVolume(S),k(!0),h(!1),c(0)},b=()=>{d.current&&(d.current.getPlayerState()===window.YT.PlayerState.CUED||d.current.getPlayerState()===window.YT.PlayerState.PAUSED?(console.log("clicked"),d.current.playVideo(),h(!0)):d.current.getPlayerState()===window.YT.PlayerState.PLAYING&&(d.current.pauseVideo(),h(!1)))},I=()=>{d.current&&(d.current.getPlayerState()===window.YT.PlayerState.CUED||d.current.getPlayerState()===window.YT.PlayerState.PAUSED||d.current.getPlayerState()===window.YT.PlayerState.PLAYING)&&(d.current.seekTo(0),d.current.pauseVideo()),h(!1),c(0)};D.useEffect(()=>{I()},[n]),D.useEffect(()=>{let q;return m&&d.current&&(q=setInterval(()=>{const tn=d.current.getCurrentTime();typeof tn=="number"&&(c(tn),tn>Rr[n]&&I())},300)),()=>clearInterval(q)},[m,n]);const C=q=>{const tn=Number.parseInt(q.target.value);c(tn),h(!0),d.current.seekTo(tn),d.current.playVideo()},K=q=>{const tn=Number.parseInt(q.target.value);p(tn),d&&(d.current.setVolume(tn),tn<1?d.current.mute():d.current.unMute())},w=q=>({textShadow:`0 0 ${q}px black`}),E={hidden:{},show:{},plusVol:{},minusVol:{},bumpReset:{}},j={duration:.5},z={duration:.25},X={hidden:{opacity:0},show:{opacity:1,y:45,scale:1,transition:j},plusVol:{opacity:1,y:45,scale:1,transition:j},minusVol:{opacity:1,y:45,scale:1.5,color:"red",fastTransition:z},bumpReset:{scale:1,color:"white"}},on={hidden:{opacity:0,scale:1},show:{opacity:1,y:-45,scale:1,transition:j},plusVol:{opacity:1,y:-45,scale:1.5,color:"red",fastTransition:z},minusVol:{opacity:1,y:-45,scale:1,transition:j},bumpReset:{scale:1,color:"white"}},rn={hidden:{opacity:0},show:{opacity:1,transition:j},plusVol:{opacity:1,transition:j},minusVol:{opacity:1,transition:j},bumpReset:{}},un=async()=>{p(q=>q-1<0?q:q-1),O.set("bumpReset"),await O.start("minusVol"),O.start("hidden")},kn=async()=>{p(q=>q+1>100?q:q+1),O.set("bumpReset"),await O.start("plusVol"),O.start("hidden")};return o?P.jsx("div",{className:"w-[360px] h-[240px] md:w-[640px] md:h-[360px]",children:P.jsx(bM,{videoId:e,onReady:A,opts:{width:`${T?360:640}`,height:`${T?240:360}`,playerVars:{autoplay:0,controls:1,modestbranding:1,rel:0,enablejsapi:1}}})}):P.jsxs("div",{className:"MediaContainer w-full h-[200px] md:h-[270px] flex items-center justify-center",children:[P.jsx("div",{className:"w-0 h-0"}),P.jsx(bM,{videoId:e,onReady:A,opts:{width:"0",height:"0",playerVars:{autoplay:0,controls:1,modestbranding:1,rel:0,enablejsapi:1}}}),P.jsx("div",{className:"PlayerContainer relative w-[350px] h-[200px] origin-center md:scale-135",children:P.jsxs("div",{className:`Media absolute w-[300px] h-[150px] bottom-0 left-[25px] 
                                    bg-[var(--primary-color-gradient-two)] rounded-xl
                                    before:content-[''] before:absolute before:inset-0
                                    before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/45 
                                    before:rounded-xl`,children:[P.jsx(vU,{hintsRevealed:n,songTitle:r,songArtist:t}),P.jsx("div",{className:"relative bg-green-500 rounded-tr-xl rounded-tl-xl",children:P.jsx("div",{className:"relative -top-4 -left-16 scale-50",children:P.jsx(TM,{angles:kU})})}),P.jsx("div",{className:"absolute -top-4 left-53 scale-50",children:P.jsx(TM,{angles:bU})}),P.jsxs("div",{className:"TopRightButtons overflow-hidden flex flex-row items-end absolute w-[105px] h-[25px] top-[-25px] right-[15px]",children:[P.jsx("div",{className:`ButtonLeft relative w-[35px] h-[15px] rounded-tl-xl rounded-tr-xl bg-green-500
                                            active:translate-y-[2px] active:shadow-inner
                                            before:content-[''] before:absolute before:inset-0
                                            before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                            before:rounded-xl`,onClick:un}),P.jsx("div",{className:`ButtonLeft relative w-[35px] h-[25px] rounded-tl-xl rounded-tr-xl bg-yellow-500
                                            active:translate-y-[2px] active:shadow-inner
                                            before:content-[''] before:absolute before:inset-0
                                            before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                            before:rounded-xl`,onClick:b}),P.jsx("div",{className:`ButtonLeft relative w-[35px] h-[20px] rounded-tl-xl rounded-tr-xl bg-cyan-500
                                            active:translate-y-[2px] active:shadow-inner
                                            before:content-[''] before:absolute before:inset-0
                                            before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30
                                            before:rounded-xl`,onClick:kn})]}),P.jsxs("div",{className:"VolumeSlider absolute w-[20px] h-[35px] top-[15px] right-[-20px] rounded-r-lg bg-blue-500",children:[[...Array(18)].map((q,tn)=>{const H=tn<=1||tn>=16?tn==1||tn==16?17:16:18;return P.jsx("div",{className:"VolumeKnobGroove absolute h-[1px] bg-slate-900",style:{width:`${H}px`,top:`${tn*2}px`}},`volknobgroove_${tn}`)}),P.jsxs(ft.div,{variants:E,initial:"hidden",animate:O,whileHover:"show",whileTap:"show",children:[P.jsx(ft.p,{variants:on,className:"absolute -top-1.5 left-0.5 text-2xl",style:w(10),children:"+"}),P.jsx(ft.p,{variants:X,className:"absolute top-2 left-1 text-3xl",style:w(10),children:"-"}),P.jsx(ft.div,{variants:rn,className:"TimeShow absolute w-[25px] h-[25px] top-2 left-6 text-md",children:S}),P.jsx(ft.input,{variants:rn,className:"Slider absolute w-[75px] -rotate-90 origin-top-left top-14",type:"range",min:"0",max:"100",value:S,onChange:q=>K(q)})]})]}),P.jsx("div",{className:"SlidersContainer relative w-full h-[30px] top-[-33px] z-1",children:P.jsxs("div",{className:"PlayTimeBar relative flex w-full h-full",children:[P.jsx("div",{className:"TimeShow relative w-[25px] h-[25px] left-1 text-lg",style:w(10),children:Math.min(Math.floor(u),Rr[n])}),P.jsx("input",{className:"Progress w-[80%]",type:"range",min:"0",max:Rr[n],value:Math.min(u,Rr[n]),onChange:q=>C(q)}),P.jsx("span",{className:"TimeShow relative w-[25px] h-[25px] left-1 text-lg",style:w(10),children:Rr[n]})]})}),P.jsxs("div",{className:"PlayButtonContainer absolute w-[250px] h-[80px] bottom-0 left-[25px]",children:[P.jsxs("button",{className:`ReverseButton flex flex-row absolute w-[60px] h-[40px] top-[10px] left-[10px]
                                            text-[var(--primary-color)] hover:text-red-500 transition-colors duration-200`,children:[P.jsx("span",{className:"relative text-[40px] top-[5px]",style:w(10),children:"<"}),P.jsx("span",{className:"relative text-[45px] left-[-5px]",style:w(10),children:"<"}),P.jsx("span",{className:"relative text-[40px] top-[5px] left-[-10px]",style:w(10),children:"<"})]}),P.jsx("button",{className:`PlayPauseButton ${m?"Pause":"Play"} 
                                            relative w-[30px] h-[30px] top-[15px] left-[105px]
                                            xs:scale-70 md:scale-60 xl:scale-55`,onClick:b,disabled:!y}),P.jsxs("button",{className:`ForwardButton flex flex-row absolute w-[60px] h-full top-[10px] right-[10px]
                                            text-[var(--primary-color)] active:text-red-500 hover:text-red-500 transition-colors duration-200`,children:[P.jsx("span",{className:"relative text-[40px] top-[5px]",style:w(10),children:">"}),P.jsx("span",{className:"relative text-[45px] left-[-5px]",style:w(10),children:">"}),P.jsx("span",{className:"relative text-[40px] top-[5px] left-[-10px]",style:w(10),children:">"})]})]})]})})]})}function df({onSubmit:n,guesses:e,won:o,disabled:r}){const[t,u]=D.useState(""),[c,m]=D.useState(null),[h,d]=D.useState(-1),S=D.useRef(null),p=D.useRef(null),{mode:y}=uu(),k=y==="Opening"?sS:IL,[T,O]=D.useState([]);D.useEffect(()=>{const K=t?k.filter(w=>{const E=w.toLowerCase(),j=t.toLocaleLowerCase(),z=E.split(" "),X=z.filter((un,kn)=>z.slice(kn).join(" ").startsWith(j)).length>0,on=e.filter(un=>un.trim().toLowerCase()===w.toLowerCase()).length>0,rn=c?E!=c.toLowerCase():!0;return X&&!on&&rn}):[];O(K.splice(0,5))},[t]),D.useEffect(()=>{var K;(K=S.current)==null||K.focus()},[]),D.useEffect(()=>{p.current&&p.current.scrollIntoView()},[T]);const A=()=>{setTimeout(()=>{var K;return(K=S.current)==null?void 0:K.focus()},0)},b=K=>{m(K),u(K),d(-1)},I=()=>{var K;n(c?c.trim():"Skipped!"),u(""),d(-1),m(null),(K=S.current)==null||K.focus()},C=K=>{if(K.key==="ArrowDown")K.preventDefault(),d(w=>w<T.length-1?w+1:0);else if(K.key==="ArrowUp")K.preventDefault(),d(w=>w>0?w-1:T.length-1);else if(K.key==="Enter")if(h>=0&&h<T.length){const w=T[h];b(w)}else c&&c.trim()!==""?I():T.length>0&&S.current&&(m(S.current.value),I())};return P.jsxs("div",{className:"GuessContainer relative flex flex-col justify-center",children:[e.length>0&&P.jsx("ul",{className:"GuessedList p-1 flex flex-col items-center",children:e.map((K,w)=>P.jsxs("li",{className:`${o&&w==e.length-1?"CorrectGuess":"IncorrectGuess"}
                                        text-center`,children:[w+1,". ",K]},`guess_${K}_${w}`))}),!r&&P.jsxs("div",{className:"SearchBarContainer flex flex-row gap-4 justify-center",children:[P.jsx("input",{type:"text",ref:S,disabled:r,id:"SearchBar",className:"SearchBar",placeholder:"Guess...",value:t,onChange:K=>{u(K.target.value),m(null),d(-1)},onKeyDown:C,onBlur:A}),P.jsx("button",{className:"SubmitSearchButton bg-gray-500 text-white rounded p-1",onClick:I,children:`${c?"Guess!":"Skip"}`})]}),T.length>0&&P.jsx("ul",{id:"AnimeSearchListID",ref:p,className:"AnimeSearchList absolute w-[100%] bg-black top-[100%] left-0",children:T.map((K,w)=>P.jsx("li",{className:`AnimeItem ${w==h?"Highlighted":""} w-[100%] text-wrap`,onClick:()=>{u(K),m(K)},onMouseDown:()=>b(K),children:K},`${K}_${w}`))})]})}function xM({hintsRevealed:n,song:e,endGameState:o}){const r=["num_episodes","year_released","genres","score","studios"],t=["Number of Episodes","Year Released","Genres","Score","Studios"];return P.jsx("div",{className:"HintContainer w-[90%]",children:e&&r.map((u,c)=>c<n||o?P.jsxs("div",{className:`Hint ${c==n-1?"NewHint":""}`,style:c==n-1?{animation:`flipHints 0.1s ease-in ${Math.floor(Math.random()*5)+3}`}:{animation:"none"},children:[t[c],": ",e[u]]},`revealedhint_${c}`):P.jsxs("div",{className:"Hint Hidden",children:["Hint #",c+1]},`hiddenhint_${c}`))})}function MU(){const n=am(),e=sm(),o=aa(),[r,t]=D.useState(null),[u,c]=D.useState(null),[m,h]=D.useState(""),[d,S]=D.useState(null),[p,y]=D.useState(null),[k,T]=D.useState(0),[O,A]=D.useState([]),{guessStates:b,updateGuessStates:I}=lS(),{filter:C,updateFilter:K}=ru(),{mode:w}=uu(),[E,j]=D.useState(()=>{var q,tn,H;return((H=(tn=(q=b[w])==null?void 0:q[C])==null?void 0:tn[u??""])==null?void 0:H.status)??"Attempting"}),[z,X]=D.useState(()=>E==="Correct"||E==="Incorrect"),on=D.useRef(null),rn="https://guess-the-anime-op.onrender.com",un=()=>{if(!u||m===""){S(null),y(`Song ${u} with filter does not exist`);return}fetch(`${rn}/song?id=${u}&filter=${m}`).then(q=>{if(!q.ok)throw S(null),y(`${q.status}: Error fetching song ${u}`),new Error(`Error fetching song ${u}: ${q.status}`);return q.json()}).then(q=>S(q)).catch(q=>console.error("Fetch error:",q))};D.useEffect(()=>{const q=new URLSearchParams(o.search);t(q);const tn=q.get("id"),H=q.get("filter")??"",Z=tn&&parseInt(tn)>=1&&parseInt(tn)<=to?parseInt(tn):null,an=hm.includes(H)?H:"";Z&&Z>=1&&Z<=to?c(Z):c(null),h(an),H!==""&&K(H)},[o.search]),D.useEffect(()=>{X(E==="Correct"||E==="Incorrect")},[E]),D.useEffect(()=>{var tn,H;un();const q=(H=(tn=b[w])==null?void 0:tn[C])==null?void 0:H[u??""];A((q==null?void 0:q.guesses)??[]),T((q==null?void 0:q.guesses.length)??0),j((q==null?void 0:q.status)??"Attempting")},[u,C,b]);const kn=D.useCallback(q=>{var pn;const tn=q.trim();if(!u)return;const an=(d==null?void 0:d.def_title.includes(tn))||(d==null?void 0:d.eng_title.includes(tn))?"Correct":k===5?"Incorrect":"Attempting";T(R=>R+1),A(R=>[...R,tn]),j(an),I(w,C,u,tn,an),on.current&&((pn=on.current)==null||pn.scrollIntoView())},[u,d,C,O,E,k,b]);return d?P.jsxs("div",{className:"GuessTheSongContainer w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1vw]",children:[P.jsxs("h1",{className:"Title w-full text-center",children:["Guess Anime ",w," ",u,"!"]}),P.jsx("div",{children:m}),E==="Correct"&&P.jsx("div",{className:"w-full text-center animate-bounce",children:"You guessed correctly!"}),E==="Incorrect"&&P.jsx("div",{className:"w-full text-center",children:"Better Luck Next Time!"}),P.jsxs("div",{className:"AnimeInfoContainer flex justify-center w-[80vw] max-w-[640px]",children:[z&&P.jsxs("div",{className:"flex flex-col text-center w-full",children:[!d.def_title.startsWith(d.eng_title)&&d.eng_title!==d.def_title?P.jsxs("div",{className:"flex flex-col p-2",children:[P.jsx("div",{children:d.eng_title}),P.jsx("div",{children:d.def_title})]}):P.jsx("div",{className:"p-2",children:d.eng_title}),P.jsxs("div",{className:"flex flex-row justify-center",children:[P.jsx("div",{className:"w-1/2 flex justify-center",children:P.jsx("img",{className:"aspect-[2/3] max-h-[300px]",src:d.img_url,alt:`${d.eng_title}`})}),P.jsxs("div",{className:"w-1/2 flex flex-col items-center content-center justify-center gap-4",children:[P.jsx(xM,{hintsRevealed:k,song:d,endGameState:z}),!e&&P.jsx("div",{className:"w-[100%]",children:P.jsx(df,{onSubmit:kn,guesses:O,won:E==="Correct",disabled:z})})]})]})]}),!z&&P.jsx("div",{ref:on,className:"w-1/2 flex justify-center",children:P.jsx(xM,{hintsRevealed:k,song:d,endGameState:z})})]}),P.jsx(TU,{hintsRevealed:k,videoId:d.yt_video_id,showVideo:z,songTitle:d.song_title,songArtist:d.song_artist}),!z&&P.jsx(df,{onSubmit:kn,guesses:O,won:E==="Correct",disabled:z}),z&&e&&P.jsx(df,{onSubmit:kn,guesses:O,won:E==="Correct",disabled:z}),P.jsxs("div",{className:"ButtonsContainer w-full h-full flex flex-row items-center justify-center gap-[1vw]",children:[P.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:q=>{if(q.preventDefault(),u&&r){const tn=u>1?u-1:to;r.set("id",tn.toString()),n(`/guess?${r.toString()}`)}},children:"Prev"}),P.jsx("button",{className:"bg-[var(--primary-color)] text-white px-4 py-2 rounded",onClick:()=>n("/"),children:"Back"}),P.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:q=>{if(q.preventDefault(),u&&r){const tn=u<to?u+1:1;r.set("id",tn.toString()),n(`/guess?${r.toString()}`)}},children:"Next"})]})]}):p?P.jsxs("div",{children:[P.jsx("div",{children:p}),P.jsx("div",{children:"I'm currently using a free tier for db hosting so please wait 30-60 seconds and click again the server is spinning back up for you!"}),P.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded",onClick:()=>n("/"),children:"Back"})]}):P.jsxs("span",{className:"Loading",children:["Song Loading",P.jsx("span",{className:"dot one",children:"."}),P.jsx("span",{className:"dot two",children:"."}),P.jsx("span",{className:"dot three",children:"."})]})}function AU(){return P.jsxs("div",{className:"flex flex-row w-1",children:[P.jsx("div",{className:"Top1000ByScore flex flex-col",children:"PlaceHolder Table"}),P.jsx("div",{children:"PlaceHolder Table"}),"Stats"]})}function DU(){return P.jsxs("div",{className:`grid md:grid-cols-2 text-[#351f23]
                        bg-gradient-to-b to-[rgba(224,208,234,0.9)] from-[rgba(247,200,210,0.9)]`,children:[P.jsx("h2",{className:"col-span-6 col-start-3 text-2xl md:text-3xl text-center",children:"Welcome to Guess the Anime Opening!!!"}),P.jsx("span",{className:"row-start-2 col-start-2 col-span-2 text-left",children:"Yahoo, I'll be your humbwle guide today!"}),P.jsx("span",{className:"row-start-2 col-start-5 col-span-5 row-span-3",children:"How this works: There are two main modes guessing the Openings and the Ending songs. In each mode there are filters which make the guessing order of songs different. There is a filter, Top 1000 By Anime Score, that sorts the song order based on the ratings an Anime received on MAL. The other filter, Top 1000 By Song Viewcount, sorts the song order based on the number of views it has accumulated on YT."})]})}function wU(){return P.jsx("div",{children:"FAQ"})}function CU(){return P.jsx("div",{children:"Rules"})}const OU=D.memo(({hidden:n,mode:e,setMode:o})=>n?null:P.jsx(H1,{mode:e,setMode:o}));so.lazy(()=>R1(()=>import("./Dev-D4zAShOt.js"),[]));const IU=[P.jsx(ti,{path:"/",element:P.jsx(kF,{})},"maincontent"),P.jsx(ti,{path:"/guess",element:P.jsx(MU,{})},"guess"),P.jsx(ti,{path:"/about",element:P.jsx(DU,{})},"about"),P.jsx(ti,{path:"/rules",element:P.jsx(CU,{})},"rules"),P.jsx(ti,{path:"/faq",element:P.jsx(wU,{})},"faq"),P.jsx(ti,{path:"/stats",element:P.jsx(AU,{})},"stats")];function KU(){const{mode:n,updateMode:e}=uu(),r=aa().pathname.startsWith("/guess");return P.jsxs("div",{className:`App ${n}`,children:[P.jsx(OU,{hidden:r,mode:n,setMode:e}),P.jsx(JR,{children:IU})]})}const xU="/Guess-The-Anime-OP";rR.createRoot(document.getElementById("root")).render(P.jsx(D.StrictMode,{children:P.jsx(v1,{basename:xU,children:P.jsx(z1,{children:P.jsx(L1,{children:P.jsx(EL,{children:P.jsx(KU,{})})})})})}));export{P as j};
