(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function He(){const e=document.querySelector("#app"),t=document.createElement("header");t.innerHTML=`
    <h1 id="title">What do you want to watch?</h1>
    <div id="search-container">
        <input type="text" placeholder="Search" name="search" id="search-input">
        <button class="search-button">
            <div class="search-icon"></div>
            <div class="search-bar"></div>
        </button>
    </div>
    `,e.appendChild(t)}function ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:ye}=Object.prototype,{getPrototypeOf:Y}=Object,Z=(e=>t=>{const n=ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>Z(t)===e),H=e=>t=>typeof t===e,{isArray:x}=Array,N=H("undefined");function je(e){return e!==null&&!N(e)&&e.constructor!==null&&!N(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=O("ArrayBuffer");function qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const Ie=H("string"),A=H("function"),be=H("number"),ee=e=>e!==null&&typeof e=="object",ze=e=>e===!0||e===!1,D=e=>{if(Z(e)!=="object")return!1;const t=Y(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=O("Date"),Je=O("File"),Ve=O("Blob"),We=O("FileList"),Ke=e=>ee(e)&&A(e.pipe),Ge=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ye.call(e)===t||A(e.toString)&&e.toString()===t)},Xe=O("URLSearchParams"),Qe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function P(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function we(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Se=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ve=e=>!N(e)&&e!==Se;function W(){const{caseless:e}=ve(this)&&this||{},t={},n=(r,s)=>{const i=e&&we(t,s)||s;D(t[i])&&D(r)?t[i]=W(t[i],r):D(r)?t[i]=W({},r):x(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&P(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(P(t,(s,i)=>{n&&A(s)?e[i]=ge(s,n):e[i]=s},{allOwnKeys:r}),e),Ze=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&Y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rt=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},st=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Y(Uint8Array)),it=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ot=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},at=O("HTMLFormElement"),ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ie=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),lt=O("RegExp"),Oe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};P(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},ut=e=>{Oe(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return x(e)?r(e):r(String(e).split(t)),n},ft=()=>{},mt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",oe="0123456789",Re={DIGIT:oe,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+oe},pt=(e=16,t=Re.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ht(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const gt=e=>{const t=new Array(10),n=(r,s)=>{if(ee(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=x(r)?[]:{};return P(r,(o,c)=>{const d=n(o,s+1);!N(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:x,isArrayBuffer:Ee,isBuffer:je,isFormData:Ge,isArrayBufferView:qe,isString:Ie,isNumber:be,isBoolean:ze,isObject:ee,isPlainObject:D,isUndefined:N,isDate:$e,isFile:Je,isBlob:Ve,isRegExp:lt,isFunction:A,isStream:Ke,isURLSearchParams:Xe,isTypedArray:st,isFileList:We,forEach:P,merge:W,extend:Ye,trim:Qe,stripBOM:Ze,inherits:et,toFlatObject:tt,kindOf:Z,kindOfTest:O,endsWith:nt,toArray:rt,forEachEntry:it,matchAll:ot,isHTMLForm:at,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:Oe,freezeMethods:ut,toObjectSet:dt,toCamelCase:ct,noop:ft,toFiniteNumber:mt,findKey:we,global:Se,isContextDefined:ve,ALPHABET:Re,generateString:pt,isSpecCompliantForm:ht,toJSONObject:gt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=h.prototype,Te={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Te[e]={value:e}});Object.defineProperties(h,Te);Object.defineProperty(Ae,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,i)=>{const o=Object.create(Ae);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),h.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const yt=null;function K(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ae(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ce(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Et(e){return a.isArray(e)&&!e.some(K)}const bt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function j(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,b){return!a.isUndefined(b[p])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,p,b){let w=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Et(f)||(a.isFileList(f)||a.endsWith(p,"[]"))&&(w=a.toArray(f)))return p=Ce(p),w.forEach(function(B,ke){!(a.isUndefined(B)||B===null)&&t.append(o===!0?ae([p],ke,i):o===null?p:p+"[]",l(B))}),!1}return K(f)?!0:(t.append(ae(b,p,i),l(f)),!1)}const m=[],y=Object.assign(bt,{defaultVisitor:u,convertValue:l,isVisitable:K});function g(f,p){if(!a.isUndefined(f)){if(m.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));m.push(f),a.forEach(f,function(w,T){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(T)?T.trim():T,p,y))===!0&&g(w,p?p.concat(T):[T])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ce(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&j(e,this,t)}const xe=te.prototype;xe.append=function(t,n){this._pairs.push([t,n])};xe.toString=function(t){const n=t?function(r){return t.call(this,r,ce)}:ce;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||wt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class St{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const le=St,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:te,Ot=typeof FormData<"u"?FormData:null,Rt=typeof Blob<"u"?Blob:null,At=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Tt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:vt,FormData:Ot,Blob:Rt},isStandardBrowserEnv:At,isStandardBrowserWebWorkerEnv:Tt,protocols:["http","https","file","blob","url","data"]};function Ct(e,t){return j(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Pe(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Lt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(xt(r),s,n,0)}),n}return null}const Nt={"Content-Type":void 0};function Pt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const q={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Pe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ct(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return j(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const n=this.transitional||q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){q.headers[t]={}});a.forEach(["post","put","patch"],function(t){q.headers[t]=a.merge(Nt)});const ne=q,Ft=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ft[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ue=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Mt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function $(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function _t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ut(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class I{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,l){const u=L(d);if(!u)throw new Error("header name must be a non-empty string");const m=a.findKey(s,u);(!m||s[m]===void 0||l===!0||l===void 0&&s[m]!==!1)&&(s[m||d]=M(c))}const o=(c,d)=>a.forEach(c,(l,u)=>i(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Mt(t)?o(Bt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Dt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=L(o),o){const c=a.findKey(r,o);c&&(!n||$(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||$(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=M(s),delete n[i];return}const c=t?_t(i):String(i).trim();c!==i&&delete n[i],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ue]=this[ue]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=L(o);r[c]||(Ut(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}I.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(I.prototype);a.freezeMethods(I);const v=I;function J(e,t){const n=this||ne,r=t||n,s=v.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Fe(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,h,{__CANCEL__:!0});function kt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ht=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Be(e,t){return e&&!jt(t)?qt(e,t):t}const It=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function zt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function $t(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[i];o||(o=l),n[s]=d,r[s]=l;let m=i,y=0;for(;m!==s;)y+=n[m++],m=m%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(y*1e3/g):void 0}}function de(e,t){let n=0;const r=$t(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&l?(o-i)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Jt=typeof XMLHttpRequest<"u",Vt=Jt&&function(e){return new Promise(function(n,r){let s=e.data;const i=v.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+f))}const u=Be(e.baseURL,e.url);l.open(e.method.toUpperCase(),Le(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function m(){if(!l)return;const g=v.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};kt(function(w){n(w),d()},function(w){r(w),d()},p),l=null}if("onloadend"in l?l.onloadend=m:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(m)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ne;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,p.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},S.isStandardBrowserEnv){const g=(e.withCredentials||It(u))&&e.xsrfCookieName&&Ht.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(f,p){l.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=g=>{l&&(r(!g||g.type?new F(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=zt(u);if(y&&S.protocols.indexOf(y)===-1){r(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}l.send(s||null)})},_={http:yt,xhr:Vt};a.forEach(_,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?_[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(_,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:_};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function fe(e){return V(e),e.headers=v.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Wt.getAdapter(e.adapter||ne.adapter)(e).then(function(r){return V(e),r.data=J.call(e,e.transformResponse,r),r.headers=v.from(r.headers),r},function(r){return Fe(r)||(V(e),r&&r.response&&(r.response.data=J.call(e,e.transformResponse,r.response),r.response.headers=v.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof v?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(l,u,m){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:m},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,m){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,m)}else return r(l,u,m)}function i(l,u){if(!a.isUndefined(u))return r(void 0,u)}function o(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,m){if(m in t)return r(l,u);if(m in e)return r(void 0,l)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(l,u)=>s(me(l),me(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const m=d[u]||s,y=m(e[u],t[u],u);a.isUndefined(y)&&m!==c||(n[u]=y)}),n}const De="1.3.4",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pe={};re.transitional=function(t,n,r){function s(i,o){return"[Axios v"+De+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new h(s(o," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!pe[o]&&(pe[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Kt(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new h("option "+i+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const G={assertOptions:Kt,validators:re},R=G.validators;class k{constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&G.assertOptions(r,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1),s!==void 0&&G.assertOptions(s,{encode:R.function,serialize:R.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=v.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,c.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let u,m=0,y;if(!d){const f=[fe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),y=f.length,u=Promise.resolve(n);m<y;)u=u.then(f[m++],f[m++]);return u}y=c.length;let g=n;for(m=0;m<y;){const f=c[m++],p=c[m++];try{g=f(g)}catch(b){p.call(this,b);break}}try{u=fe.call(this,g)}catch(f){return Promise.reject(f)}for(m=0,y=l.length;m<y;)u=u.then(l[m++],l[m++]);return u}getUri(t){t=C(this.defaults,t);const n=Be(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}k.prototype[t]=n(),k.prototype[t+"Form"]=n(!0)});const U=k;class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new F(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new se(function(s){t=s}),cancel:t}}}const Gt=se;function Xt(e){return function(n){return e.apply(null,n)}}function Qt(e){return a.isObject(e)&&e.isAxiosError===!0}const X={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(X).forEach(([e,t])=>{X[t]=e});const Yt=X;function Me(e){const t=new U(e),n=ge(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(C(e,s))},n}const E=Me(ne);E.Axios=U;E.CanceledError=F;E.CancelToken=Gt;E.isCancel=Fe;E.VERSION=De;E.toFormData=j;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Xt;E.isAxiosError=Qt;E.mergeConfig=C;E.AxiosHeaders=v;E.formToJSON=e=>Pe(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=Yt;E.default=E;const Zt=E;async function en(){const{data:e}=await Zt.get("https://europe-west1-movie-api-recruitment.cloudfunctions.net/movies",{withCredentials:!1});return e}function _e(e){const t=document.createElement("dialog");t.id="modal-detail-movie",t.innerHTML=`
        <div class='container-status-bar'> 
            <div id='container-left-status-bar'>
                <img src="./src/img/Time.svg" id="img-time" alt="image time" />
            </div>
            <div id='container-right-status-bar'>
                <img src="./src/img/MobileSignal.svg" id="img-mobile-signal" alt="image mobile signal" />
                <img src="./src/img/Wifi.svg" id="img-wifi" alt="image wifi" />
                <img src="./src/img/Battery.svg" id="img-battery" alt="image battey" />
            </div>
        </div>
        <header id='modal-header'>
            <img src="/src/img/arrow-left.svg" alt="image return" class="closeBtn">   
            <h1 id="title" class='title-center'>Detail</h1>
        </header>
        <main id='main-modal'>
            <div id='container-cover-thumbnail'>
                <img src="${e.cover}" alt='cover movie' class='cover-details-movie'/>
                <div id='container-title-thumbnail-modal'>
                    <img src=${e.thumbnail} id='thumbnail-modal'>
                    <h2 class='title-modal-movie'>${e.title}</h2>
                </div>
            </div>
            <div id='container-details-modal'>
                <div class='line-detail-modal' id='date-detail-modal'>
                    <img src="./src/img/CalendarGrey.svg" alt='logo date movie' class='logo-details-movie'/><p class='movie-details-modal'>${e.date}</p>
                </div>
                <img src="./src/img/Vector.svg" alt='design separator' class='separator-details'/>
                <div class='line-detail-modal'>
                    <img src="./src/img/ClockGrey.svg" alt='logo duration movie' class='logo-details-movie'/><p class='movie-details-modal'>${e.duration} minutes</p>
                </div> 
                <img src="./src/img/Vector.svg" alt='design separator' class='separator-details'/>
                <div class='line-detail-modal' id='type-detail-modal'>
                <img src="./src/img/TicketGrey.svg" alt='logo type of movie' class='logo-details-movie'/><p class='movie-details-modal'>${e.type}</p>
                </div> 
            </div>
            <p id='about-movie'>About Movie</p>
            <img src="./src/img/separatorHorizontal.svg" alt='design separator' class='separator-about'/>
           <p id='about-movie-description'>${e.description}</p>
        </main>
    `,t.querySelectorAll("img").forEach(i=>{i.addEventListener("error",()=>{i.src="./src/img/NoData.svg",i.style.backgroundColor="white"})}),document.querySelector("#app").appendChild(t),t.showModal(),document.body.style.overflow="hidden",document.querySelector(".closeBtn").addEventListener("click",()=>{document.body.style.overflow="auto",t.close(),t.remove()})}function tn(e){e.sort((m,y)=>parseInt(y.date)-parseInt(m.date));const t=e.slice(0,4),n=e.slice(4),r=m=>{const y=document.createElement("ul");return m.forEach((g,f)=>{const p=document.createElement("li"),b=document.createElement("img"),w=document.createElement("div");w.innerHTML=`${f+1}`,w.classList.add("number-movie"),b.addEventListener("error",()=>{b.src="./src/img/NoData.svg",b.style.backgroundColor="white"}),b.src=g.thumbnail,b.style.borderRadius="16px",b.addEventListener("click",()=>{_e(g)}),p.appendChild(b),p.appendChild(w),y.appendChild(p)}),y},s=r(t);s.classList.add("latest-movies","carousel-list");const i=r(n);i.classList.add("rest-movies");const o=document.createElement("section");o.id="latestMoviesSection";const c=document.createElement("section");c.id="restMoviesSection",o.appendChild(s),c.appendChild(i);const d=document.createElement("img");d.src="./src/img/separatorHorizontal.svg",d.alt="esign separator",d.id="separator";const l=document.createElement("main");return l.appendChild(o),l.appendChild(d),l.appendChild(c),document.querySelector("#app").appendChild(l),e}function nn(){const e=document.querySelector("#title");e.classList.add("title-center"),e.textContent="Search";const t=e.parentElement,n=document.querySelector("#search-container");let r=document.querySelector("#img-back-main-menu");if(!r){r=document.createElement("img"),r.src="/src/img/arrow-left.svg",r.alt="image go back to main menu",r.id="img-back-main-menu";const s=document.createElement("div");s.id="container-title-search",s.appendChild(r),s.appendChild(e),t.insertBefore(s,n),r.addEventListener("click",()=>{document.querySelector("#search-container").classList.remove("search-margin"),document.querySelector("main").classList.remove("search-main-css"),Ue()})}}var Q={},rn={get exports(){return Q},set exports(e){Q=e}};(function(e,t){(function(){var n={};e.exports=n,n.simpleFilter=function(r,s){return s.filter(function(i){return n.test(r,i)})},n.test=function(r,s){return n.match(r,s)!==null},n.match=function(r,s,i){i=i||{};var o=0,c=[],d=s.length,l=0,u=0,m=i.pre||"",y=i.post||"",g=i.caseSensitive&&s||s.toLowerCase(),f;r=i.caseSensitive&&r||r.toLowerCase();for(var p=0;p<d;p++)f=s[p],g[p]===r[o]?(f=m+f+y,o+=1,u+=1+u):u=0,l+=u,c[c.length]=f;return o===r.length?(l=g===r?1/0:l,{rendered:c.join(""),score:l}):null},n.filter=function(r,s,i){return!s||s.length===0?[]:typeof r!="string"?s:(i=i||{},s.reduce(function(o,c,d,l){var u=c;i.extract&&(u=i.extract(c));var m=n.match(r,u,i);return m!=null&&(o[o.length]={string:m.rendered,score:m.score,index:d,original:c}),o},[]).sort(function(o,c){var d=c.score-o.score;return d||o.index-c.index}))}})()})(rn);const sn=Q;const on=(e,t)=>{const n={extract:s=>s.title};return sn.filter(e,t,n).map(s=>s.original)},he=e=>`
    <div class='container-search-message'>
      <img src="./src/img/searchLoop.svg" alt='image of search' class='img-loop-search'/>
      <p class="message-search">${e}</p>
      <p class="message-search-hint">Find your movie by title</p>
    </div>
  `;function an(e,t){document.querySelector("#search-container").classList.add("search-margin");const r=document.querySelector("main");r.classList.add("search-main-css");const s=on(e,t);if(r.innerHTML="",s.length===0){const i=he("We Are Sorry, We Can Not Find The Movies :(");r.innerHTML=i}else if(e.length===0){const i=he("Start Typing To Find A Movie!");r.innerHTML=i}else s.forEach(i=>{const o=document.createElement("div");o.classList.add("render-search-movie","movie-details"),o.innerHTML=`
        <aside>
        <img src=${i.thumbnail}> 
        </aside>
        <section class='section-details-movie'>
        <p class='title-search-movie'>${i.title}</p>
        <div class='container-details-search-movie'>
            <div class='container-line-detail-movie'>
            <img src="./src/img/Ticket.svg" alt='logo type of movie' class='logo-details-movie'/><p class='section-search-movie-details'>${i.type}</p>
            </div> 
            <div class='container-line-detail-movie'>
                <img src="./src/img/CalendarBlank.svg" alt='logo date movie' class='logo-details-movie'/><p class='section-search-movie-details'>${i.date}</p>
            </div> 
            <div class='container-line-detail-movie'>
                <img src="./src/img/Clock.svg" alt='logo duration movie' class='logo-details-movie'/><p class='section-search-movie-details'>${i.duration} minutes</p>
            </div> 
        </div>
        </section>
      `,o.querySelectorAll("img").forEach(d=>{d.addEventListener("error",()=>{d.src="./src/img/NoData.svg",d.style.backgroundColor="white"})}),r.appendChild(o),o.addEventListener("click",()=>{_e(i)})})}function cn(){const e=document.querySelector("#app");e.innerHTML="";const t=document.createElement("div");t.id="container-status-bar",t.innerHTML=`
        <div id='container-left-status-bar'>
            <img src="./src/img/Time.svg" id="img-time" alt="image time" />
        </div>
        <div id='container-right-status-bar'>
            <img src="./src/img/MobileSignal.svg" id="img-mobile-signal" alt="image mobile signal" />
            <img src="./src/img/Wifi.svg" id="img-wifi" alt="image wifi" />
            <img src="./src/img/Battery.svg" id="img-battery" alt="image battey" />
        </div>
    `,e.appendChild(t)}function Ue(){cn(),He(),en().then(e=>{const t=tn(e);document.querySelector("#search-input").addEventListener("input",r=>{nn();const s=r.target.value;an(s,t)})}).catch(e=>{console.error(e)})}document.querySelector("#app").innerHTML=`
  <div id='container-logo-popcorn'>
    <a href="#" target="_blank">
      <img src="/src/img/PopCorn.svg" id="logo-popcorn" alt="App logo" />
    </a>
  </div>
`;setTimeout(Ue,1e3);
