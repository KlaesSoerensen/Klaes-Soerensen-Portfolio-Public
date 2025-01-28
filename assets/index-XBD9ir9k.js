(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Nr=(e,t)=>e===t,q=Symbol("solid-proxy"),Zt=typeof Proxy=="function",dt=Symbol("solid-track"),He={equals:Nr};let er=cr;const le=1,We=2,tr={owned:null,cleanups:null,context:null,owner:null};var T=null;let st=null,Ur=null,D=null,M=null,te=null,Ze=0;function Pe(e,t){const r=D,n=T,i=e.length===0,o=t===void 0?n:t,s=i?tr:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=i?e:()=>e(()=>K(()=>Te(s)));T=s,D=null;try{return ce(a,!0)}finally{D=r,T=n}}function U(e,t){t=t?Object.assign({},He,t):He;const r={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(r.value)),lr(r,i));return[ar.bind(r),n]}function E(e,t,r){const n=$t(e,t,!1,le);Re(n)}function rr(e,t,r){er=Wr;const n=$t(e,t,!1,le);n.user=!0,te?te.push(n):Re(n)}function S(e,t,r){r=r?Object.assign({},He,r):He;const n=$t(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,Re(n),ar.bind(n)}function Mr(e){return ce(e,!1)}function K(e){if(D===null)return e();const t=D;D=null;try{return e()}finally{D=t}}function nr(e,t,r){const n=Array.isArray(e);let i;return o=>{let s;if(n){s=Array(e.length);for(let l=0;l<e.length;l++)s[l]=e[l]()}else s=e();const a=K(()=>t(s,i,o));return i=s,a}}function me(e){rr(()=>K(e))}function ye(e){return T===null||(T.cleanups===null?T.cleanups=[e]:T.cleanups.push(e)),e}function ht(){return D}function ir(){return T}function or(e,t){const r=T,n=D;T=e,D=null;try{return ce(t,!0)}catch(i){At(i)}finally{T=r,D=n}}function Gr(e){const t=D,r=T;return Promise.resolve().then(()=>{D=t,T=r;let n;return ce(e,!1),D=T=null,n?n.done:void 0})}function sr(e,t){const r=Symbol("context");return{id:r,Provider:Vr(r),defaultValue:e}}function Ct(e){let t;return T&&T.context&&(t=T.context[e.id])!==void 0?t:e.defaultValue}function St(e){const t=S(e),r=S(()=>gt(t()));return r.toArray=()=>{const n=r();return Array.isArray(n)?n:n!=null?[n]:[]},r}function ar(){if(this.sources&&this.state)if(this.state===le)Re(this);else{const e=M;M=null,ce(()=>Ve(this),!1),M=e}if(D){const e=this.observers?this.observers.length:0;D.sources?(D.sources.push(this),D.sourceSlots.push(e)):(D.sources=[this],D.sourceSlots=[e]),this.observers?(this.observers.push(D),this.observerSlots.push(D.sources.length-1)):(this.observers=[D],this.observerSlots=[D.sources.length-1])}return this.value}function lr(e,t,r){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&ce(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],s=st&&st.running;s&&st.disposed.has(o),(s?!o.tState:!o.state)&&(o.pure?M.push(o):te.push(o),o.observers&&ur(o)),s||(o.state=le)}if(M.length>1e6)throw M=[],new Error},!1)),t}function Re(e){if(!e.fn)return;Te(e);const t=Ze;Br(e,e.value,t)}function Br(e,t,r){let n;const i=T,o=D;D=T=e;try{n=e.fn(t)}catch(s){return e.pure&&(e.state=le,e.owned&&e.owned.forEach(Te),e.owned=null),e.updatedAt=r+1,At(s)}finally{D=o,T=i}(!e.updatedAt||e.updatedAt<=r)&&(e.updatedAt!=null&&"observers"in e?lr(e,n):e.value=n,e.updatedAt=r)}function $t(e,t,r,n=le,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:T,context:T?T.context:null,pure:r};return T===null||T!==tr&&(T.owned?T.owned.push(o):T.owned=[o]),o}function ze(e){if(e.state===0)return;if(e.state===We)return Ve(e);if(e.suspense&&K(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ze);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if(e=t[r],e.state===le)Re(e);else if(e.state===We){const n=M;M=null,ce(()=>Ve(e,t[0]),!1),M=n}}function ce(e,t){if(M)return e();let r=!1;t||(M=[]),te?r=!0:te=[],Ze++;try{const n=e();return Hr(r),n}catch(n){r||(te=null),M=null,At(n)}}function Hr(e){if(M&&(cr(M),M=null),e)return;const t=te;te=null,t.length&&ce(()=>er(t),!1)}function cr(e){for(let t=0;t<e.length;t++)ze(e[t])}function Wr(e){let t,r=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[r++]=n:ze(n)}for(t=0;t<r;t++)ze(e[t])}function Ve(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const n=e.sources[r];if(n.sources){const i=n.state;i===le?n!==t&&(!n.updatedAt||n.updatedAt<Ze)&&ze(n):i===We&&Ve(n,t)}}}function ur(e){for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];r.state||(r.state=We,r.pure?M.push(r):te.push(r),r.observers&&ur(r))}}function Te(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),i=r.observers;if(i&&i.length){const o=i.pop(),s=r.observerSlots.pop();n<i.length&&(o.sourceSlots[s]=n,i[n]=o,r.observerSlots[n]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Te(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function zr(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function At(e,t=T){throw zr(e)}function gt(e){if(typeof e=="function"&&!e.length)return gt(e());if(Array.isArray(e)){const t=[];for(let r=0;r<e.length;r++){const n=gt(e[r]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}function Vr(e,t){return function(n){let i;return E(()=>i=K(()=>(T.context={...T.context,[e]:n.value},St(()=>n.children))),void 0),i}}const Kr=Symbol("fallback");function Ft(e){for(let t=0;t<e.length;t++)e[t]()}function Yr(e,t,r={}){let n=[],i=[],o=[],s=0,a=t.length>1?[]:null;return ye(()=>Ft(o)),()=>{let l=e()||[],u=l.length,c,f;return l[dt],K(()=>{let g,d,m,w,y,v,p,k,O;if(u===0)s!==0&&(Ft(o),o=[],n=[],i=[],s=0,a&&(a=[])),r.fallback&&(n=[Kr],i[0]=Pe(I=>(o[0]=I,r.fallback())),s=1);else if(s===0){for(i=new Array(u),f=0;f<u;f++)n[f]=l[f],i[f]=Pe(h);s=u}else{for(m=new Array(u),w=new Array(u),a&&(y=new Array(u)),v=0,p=Math.min(s,u);v<p&&n[v]===l[v];v++);for(p=s-1,k=u-1;p>=v&&k>=v&&n[p]===l[k];p--,k--)m[k]=i[p],w[k]=o[p],a&&(y[k]=a[p]);for(g=new Map,d=new Array(k+1),f=k;f>=v;f--)O=l[f],c=g.get(O),d[f]=c===void 0?-1:c,g.set(O,f);for(c=v;c<=p;c++)O=n[c],f=g.get(O),f!==void 0&&f!==-1?(m[f]=i[c],w[f]=o[c],a&&(y[f]=a[c]),f=d[f],g.set(O,f)):o[c]();for(f=v;f<u;f++)f in m?(i[f]=m[f],o[f]=w[f],a&&(a[f]=y[f],a[f](f))):i[f]=Pe(h);i=i.slice(0,s=u),n=l.slice(0)}return i});function h(g){if(o[f]=g,a){const[d,m]=U(f);return a[f]=m,t(l[f],d)}return t(l[f])}}}function C(e,t){return K(()=>e(t||{}))}function Le(){return!0}const mt={get(e,t,r){return t===q?r:e.get(t)},has(e,t){return t===q?!0:e.has(t)},set:Le,deleteProperty:Le,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Le,deleteProperty:Le}},ownKeys(e){return e.keys()}};function at(e){return(e=typeof e=="function"?e():e)?e:{}}function qr(){for(let e=0,t=this.length;e<t;++e){const r=this[e]();if(r!==void 0)return r}}function yt(...e){let t=!1;for(let s=0;s<e.length;s++){const a=e[s];t=t||!!a&&q in a,e[s]=typeof a=="function"?(t=!0,S(a)):a}if(Zt&&t)return new Proxy({get(s){for(let a=e.length-1;a>=0;a--){const l=at(e[a])[s];if(l!==void 0)return l}},has(s){for(let a=e.length-1;a>=0;a--)if(s in at(e[a]))return!0;return!1},keys(){const s=[];for(let a=0;a<e.length;a++)s.push(...Object.keys(at(e[a])));return[...new Set(s)]}},mt);const r={},n=Object.create(null);for(let s=e.length-1;s>=0;s--){const a=e[s];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let u=l.length-1;u>=0;u--){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(a,c);if(!n[c])n[c]=f.get?{enumerable:!0,configurable:!0,get:qr.bind(r[c]=[f.get.bind(a)])}:f.value!==void 0?f:void 0;else{const h=r[c];h&&(f.get?h.push(f.get.bind(a)):f.value!==void 0&&h.push(()=>f.value))}}}const i={},o=Object.keys(n);for(let s=o.length-1;s>=0;s--){const a=o[s],l=n[a];l&&l.get?Object.defineProperty(i,a,l):i[a]=l?l.value:void 0}return i}function Xr(e,...t){if(Zt&&q in e){const i=new Set(t.length>1?t.flat():t[0]),o=t.map(s=>new Proxy({get(a){return s.includes(a)?e[a]:void 0},has(a){return s.includes(a)&&a in e},keys(){return s.filter(a=>a in e)}},mt));return o.push(new Proxy({get(s){return i.has(s)?void 0:e[s]},has(s){return i.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!i.has(s))}},mt)),o}const r={},n=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,i),s=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let a=!1,l=0;for(const u of t)u.includes(i)&&(a=!0,s?n[l][i]=o.value:Object.defineProperty(n[l],i,o)),++l;a||(s?r[i]=o.value:Object.defineProperty(r,i,o))}return[...n,r]}const Jr=e=>`Stale read from <${e}>.`;function Ne(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(Yr(()=>e.each,e.children,t||void 0))}function oe(e){const t=e.keyed,r=S(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return S(()=>{const n=r();if(n){const i=e.children;return typeof i=="function"&&i.length>0?K(()=>i(t?n:()=>{if(!K(r))throw Jr("Show");return e.when})):i}return e.fallback},void 0,void 0)}const Qr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Zr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Qr]),en=new Set(["innerHTML","textContent","innerText","children"]),tn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),rn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function nn(e,t){const r=rn[e];return typeof r=="object"?r[t]?r.$:void 0:r}const on=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function sn(e,t,r){let n=r.length,i=t.length,o=n,s=0,a=0,l=t[i-1].nextSibling,u=null;for(;s<i||a<o;){if(t[s]===r[a]){s++,a++;continue}for(;t[i-1]===r[o-1];)i--,o--;if(i===s){const c=o<n?a?r[a-1].nextSibling:r[o-a]:l;for(;a<o;)e.insertBefore(r[a++],c)}else if(o===a)for(;s<i;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===r[o-1]&&r[a]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(r[a++],t[s++].nextSibling),e.insertBefore(r[--o],c),t[i]=r[o]}else{if(!u){u=new Map;let f=a;for(;f<o;)u.set(r[f],f++)}const c=u.get(t[s]);if(c!=null)if(a<c&&c<o){let f=s,h=1,g;for(;++f<i&&f<o&&!((g=u.get(t[f]))==null||g!==c+h);)h++;if(h>c-a){const d=t[s];for(;a<c;)e.insertBefore(r[a++],d)}else e.replaceChild(r[a++],t[s++])}else s++;else t[s++].remove()}}}const Rt="_$DX_DELEGATE";function an(e,t,r,n={}){let i;return Pe(o=>{i=o,t===document?e():_(t,e(),t.firstChild?null:void 0,r)},n.owner),()=>{i(),t.textContent=""}}function F(e,t,r){let n;const i=()=>{const s=document.createElement("template");return s.innerHTML=e,r?s.content.firstChild.firstChild:s.content.firstChild},o=t?()=>K(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return o.cloneNode=o,o}function et(e,t=window.document){const r=t[Rt]||(t[Rt]=new Set);for(let n=0,i=e.length;n<i;n++){const o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,mn))}}function x(e,t,r){r==null?e.removeAttribute(t):e.setAttribute(t,r)}function ln(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)}function ae(e,t){t==null?e.removeAttribute("class"):e.className=t}function Pt(e,t,r,n){if(n)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){const i=r[0];e.addEventListener(t,r[0]=o=>i.call(e,r[1],o))}else e.addEventListener(t,r,typeof r!="function"&&r)}function cn(e,t,r={}){const n=Object.keys(t||{}),i=Object.keys(r);let o,s;for(o=0,s=i.length;o<s;o++){const a=i[o];!a||a==="undefined"||t[a]||(It(e,a,!1),delete r[a])}for(o=0,s=n.length;o<s;o++){const a=n[o],l=!!t[a];!a||a==="undefined"||r[a]===l||!l||(It(e,a,!0),r[a]=l)}return r}function un(e,t,r){if(!t)return r?x(e,"style"):t;const n=e.style;if(typeof t=="string")return n.cssText=t;typeof r=="string"&&(n.cssText=r=void 0),r||(r={}),t||(t={});let i,o;for(o in r)t[o]==null&&n.removeProperty(o),delete r[o];for(o in t)i=t[o],i!==r[o]&&(n.setProperty(o,i),r[o]=i);return r}function fn(e,t={},r,n){const i={};return E(()=>i.children=Oe(e,t.children,i.children)),E(()=>typeof t.ref=="function"&&dn(t.ref,e)),E(()=>hn(e,t,r,!0,i,!0)),i}function dn(e,t,r){return K(()=>e(t,r))}function _(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return Oe(e,t,n,r);E(i=>Oe(e,t(),i,r),n)}function hn(e,t,r,n,i={},o=!1){t||(t={});for(const s in i)if(!(s in t)){if(s==="children")continue;i[s]=Lt(e,s,null,i[s],r,o,t)}for(const s in t){if(s==="children")continue;const a=t[s];i[s]=Lt(e,s,a,i[s],r,o,t)}}function gn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,r)=>r.toUpperCase())}function It(e,t,r){const n=t.trim().split(/\s+/);for(let i=0,o=n.length;i<o;i++)e.classList.toggle(n[i],r)}function Lt(e,t,r,n,i,o,s){let a,l,u,c,f;if(t==="style")return un(e,r,n);if(t==="classList")return cn(e,r,n);if(r===n)return n;if(t==="ref")o||r(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);n&&e.removeEventListener(h,n,typeof n!="function"&&n),r&&e.addEventListener(h,r,typeof r!="function"&&r)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);n&&e.removeEventListener(h,n,!0),r&&e.addEventListener(h,r,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),g=on.has(h);if(!g&&n){const d=Array.isArray(n)?n[0]:n;e.removeEventListener(h,d)}(g||r)&&(Pt(e,h,r,g),g&&et([h]))}else t.slice(0,5)==="attr:"?x(e,t.slice(5),r):t.slice(0,5)==="bool:"?ln(e,t.slice(5),r):(f=t.slice(0,5)==="prop:")||(u=en.has(t))||(c=nn(t,e.tagName))||(l=Zr.has(t))||(a=e.nodeName.includes("-")||"is"in s)?(f&&(t=t.slice(5),l=!0),t==="class"||t==="className"?ae(e,r):a&&!l&&!u?e[gn(t)]=r:e[c||t]=r):x(e,tn[t]||t,r);return r}function mn(e){let t=e.target;const r=`$$${e.type}`,n=e.target,i=e.currentTarget,o=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),s=()=>{const l=t[r];if(l&&!t.disabled){const u=t[`${r}Data`];if(u!==void 0?l.call(t,u,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();o(l[0]);for(let u=0;u<l.length-2&&(t=l[u],!!s());u++){if(t._$host){t=t._$host,a();break}if(t.parentNode===i)break}}else a();o(n)}function Oe(e,t,r,n,i){for(;typeof r=="function";)r=r();if(t===r)return r;const o=typeof t,s=n!==void 0;if(e=s&&r[0]&&r[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===r))return r;if(s){let a=r[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),r=be(e,r,n,a)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||o==="boolean")r=be(e,r,n);else{if(o==="function")return E(()=>{let a=t();for(;typeof a=="function";)a=a();r=Oe(e,a,r,n)}),()=>r;if(Array.isArray(t)){const a=[],l=r&&Array.isArray(r);if(wt(a,t,r,i))return E(()=>r=Oe(e,a,r,n,!0)),()=>r;if(a.length===0){if(r=be(e,r,n),s)return r}else l?r.length===0?jt(e,a,n):sn(e,r,a):(r&&be(e),jt(e,a));r=a}else if(t.nodeType){if(Array.isArray(r)){if(s)return r=be(e,r,n,t);be(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function wt(e,t,r,n){let i=!1;for(let o=0,s=t.length;o<s;o++){let a=t[o],l=r&&r[e.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))i=wt(e,a,l)||i;else if(u==="function")if(n){for(;typeof a=="function";)a=a();i=wt(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||i}else e.push(a),i=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return i}function jt(e,t,r=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],r)}function be(e,t,r,n){if(r===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const a=t[s];if(i!==a){const l=a.parentNode===e;!o&&!s?l?e.replaceChild(i,a):e.insertBefore(i,r):l&&a.remove()}else o=!0}}else e.insertBefore(i,r);return[i]}const yn=()=>{},fr=!1;function dr(){let e=new Set;function t(i){return e.add(i),()=>e.delete(i)}let r=!1;function n(i,o){if(r)return!(r=!1);const s={to:i,options:o,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const a of e)a.listener({...s,from:a.location,retry:l=>{l&&(r=!0),a.navigate(i,{...o,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:n}}let bt;function Tt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),bt=window.history.state._depth}Tt();function wn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function bn(e,t){let r=!1;return()=>{const n=bt;Tt();const i=n==null?null:bt-n;if(r){r=!1;return}i&&t(i)?(r=!0,window.history.go(-i)):e()}}const pn=/^(?:[a-z0-9]+:)?\/\//i,vn=/^\/+|(\/)\/+$/g,hr="http://sr";function he(e,t=!1){const r=e.replace(vn,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function Ue(e,t,r){if(pn.test(t))return;const n=he(e),i=r&&he(r);let o="";return!i||t.startsWith("/")?o=n:i.toLowerCase().indexOf(n.toLowerCase())!==0?o=n+i:o=i,(o||"/")+he(t,!o)}function xn(e,t){if(e==null)throw new Error(t);return e}function kn(e,t){return he(e).replace(/\/*(\*.*)?$/g,"")+he(t)}function gr(e){const t={};return e.searchParams.forEach((r,n)=>{t[n]=r}),t}function Cn(e,t,r){const[n,i]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return a=>{const l=a.split("/").filter(Boolean),u=l.length-s;if(u<0||u>0&&i===void 0&&!t)return null;const c={path:s?"":"/",params:{}},f=h=>r===void 0?void 0:r[h];for(let h=0;h<s;h++){const g=o[h],d=l[h],m=g[0]===":",w=m?g.slice(1):g;if(m&&lt(d,f(w)))c.params[w]=d;else if(m||!lt(d,g))return null;c.path+=`/${d}`}if(i){const h=u?l.slice(-u).join("/"):"";if(lt(h,f(i)))c.params[i]=h;else return null}return c}}function lt(e,t){const r=n=>n.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?r(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp?t.test(e):!1}function Sn(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((i,o)=>i+(o.startsWith(":")?2:3),n.length-(r===void 0?0:1))}function mr(e){const t=new Map,r=ir();return new Proxy({},{get(n,i){return t.has(i)||or(r,()=>t.set(i,S(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function yr(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const i=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)i.push(r+=t[1]),n=n.slice(t[0].length);return yr(n).reduce((o,s)=>[...o,...i.map(a=>a+s)],[])}const $n=100,wr=sr(),tt=sr(),rt=()=>xn(Ct(wr),"<A> and 'use' router primitives can be only used inside a Route."),br=()=>Ct(tt)||rt().base,An=e=>{const t=br();return S(()=>t.resolvePath(e()))},Pn=e=>{const t=rt();return S(()=>{const r=e();return r!==void 0?t.renderPath(r):r})},Tn=()=>rt().navigatorFactory(),On=()=>rt().location,_n=()=>br().params;function En(e,t=""){const{component:r,load:n,children:i,info:o}=e,s=!i||Array.isArray(i)&&!i.length,a={key:e,component:r,load:n,info:o};return pr(e.path).reduce((l,u)=>{for(const c of yr(u)){const f=kn(t,c);let h=s?f:f.split("/*",1)[0];h=h.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),l.push({...a,originalPath:c,pattern:h,matcher:Cn(h,!s,e.matchFilters)})}return l},[])}function Dn(e,t=0){return{routes:e,score:Sn(e[e.length-1])*1e4-t,matcher(r){const n=[];for(let i=e.length-1;i>=0;i--){const o=e[i],s=o.matcher(r);if(!s)return null;n.unshift({...s,route:o})}return n}}}function pr(e){return Array.isArray(e)?e:[e]}function vr(e,t="",r=[],n=[]){const i=pr(e);for(let o=0,s=i.length;o<s;o++){const a=i[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=En(a,t);for(const u of l){r.push(u);const c=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!c)vr(a.children,u.pattern,r,n);else{const f=Dn([...r],n.length);n.push(f)}r.pop()}}}return r.length?n:n.sort((o,s)=>s.score-o.score)}function xr(e,t){for(let r=0,n=e.length;r<n;r++){const i=e[r].matcher(t);if(i)return i}return[]}function Fn(e,t){const r=new URL(hr),n=S(l=>{const u=e();try{return new URL(u,r)}catch{return console.error(`Invalid path ${u}`),l}},r,{equals:(l,u)=>l.href===u.href}),i=S(()=>n().pathname),o=S(()=>n().search,!0),s=S(()=>n().hash),a=()=>"";return{get pathname(){return i()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return a()},query:mr(nr(o,()=>gr(n())))}}let ie;function Rn(e,t,r,n={}){const{signal:[i,o],utils:s={}}=e,a=s.parsePath||($=>$),l=s.renderPath||($=>$),u=s.beforeLeave||dr(),c=Ue("",n.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!i().value&&o({value:c,replace:!0,scroll:!1});const[f,h]=U(!1),g=async $=>{h(!0);try{await Gr($)}finally{h(!1)}},[d,m]=U(i().value),[w,y]=U(i().state),v=Fn(d,w),p=[],k=U([]),O={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath($){return Ue(c,$)}};return E(()=>{const{value:$,state:R}=i();K(()=>{$!==d()&&g(()=>{ie="native",m($),y(R),k[1]([])}).then(()=>{ie=void 0})})}),{base:O,location:v,isRouting:f,renderPath:l,parsePath:a,navigatorFactory:b,beforeLeave:u,preloadRoute:G,singleFlight:n.singleFlight===void 0?!0:n.singleFlight,submissions:k};function I($,R,z){K(()=>{if(typeof R=="number"){R&&(s.go?s.go(R):console.warn("Router integration does not support relative routing"));return}const{replace:we,resolve:ue,scroll:Z,state:re}={replace:!1,resolve:!0,scroll:!0,...z},ne=ue?$.resolvePath(R):Ue("",R);if(ne===void 0)throw new Error(`Path '${R}' is not a routable path`);if(p.length>=$n)throw new Error("Too many redirects");const Dt=d();if((ne!==Dt||re!==w())&&!fr){if(u.confirm(ne,z)){const jr=p.push({value:Dt,replace:we,scroll:Z,state:w()});g(()=>{ie="navigate",m(ne),y(re),k[1]([])}).then(()=>{p.length===jr&&(ie=void 0,B({value:ne,state:re}))})}}})}function b($){return $=$||Ct(tt)||O,(R,z)=>I($,R,z)}function B($){const R=p[0];R&&(($.value!==R.value||$.state!==R.state)&&o({...$,replace:R.replace,scroll:R.scroll}),p.length=0)}function G($,R){const z=xr(r(),$.pathname),we=ie;ie="preload";for(let ue in z){const{route:Z,params:re}=z[ue];Z.component&&Z.component.preload&&Z.component.preload();const{load:ne}=Z;R&&ne&&or(t(),()=>ne({params:re,location:{pathname:$.pathname,search:$.search,hash:$.hash,query:gr($),state:null,key:""},intent:"preload"}))}ie=we}}function In(e,t,r,n,i){const{base:o,location:s}=e,{pattern:a,component:l,load:u}=n().route,c=S(()=>n().path);l&&l.preload&&l.preload();const f=u?u({params:i,location:s,intent:ie||"initial"}):void 0;return{parent:t,pattern:a,path:c,params:i,outlet:()=>l?C(l,{params:i,location:s,data:f,get children(){return r()}}):r(),resolvePath(g){return Ue(o.path(),g,c())}}}const kr=e=>t=>{const{base:r}=t,n=St(()=>t.children),i=S(()=>vr(t.root?{component:t.root,load:t.rootLoad,children:n()}:n(),t.base||""));let o;const s=Rn(e,()=>o,i,{base:r,singleFlight:t.singleFlight});return e.create&&e.create(s),C(wr.Provider,{value:s,get children(){return[S(()=>(o=ir())&&null),C(Ln,{routerState:s,get branches(){return i()}})]}})};function Ln(e){const t=S(()=>xr(e.branches,e.routerState.location.pathname)),r=mr(()=>{const s=t(),a={};for(let l=0;l<s.length;l++)Object.assign(a,s[l].params);return a}),n=[];let i;const o=S(nr(t,(s,a,l)=>{let u=a&&s.length===a.length;const c=[];for(let f=0,h=s.length;f<h;f++){const g=a&&a[f],d=s[f];l&&g&&d.route.key===g.route.key?c[f]=l[f]:(u=!1,n[f]&&n[f](),Pe(m=>{n[f]=m,c[f]=In(e.routerState,c[f-1]||e.routerState.base,jn(()=>o()[f+1]),()=>t()[f],r)}))}return n.splice(s.length).forEach(f=>f()),l&&u?l:(i=c[0],c)}));return C(oe,{get when(){return o()&&i},keyed:!0,children:s=>C(tt.Provider,{value:s,get children(){return s.outlet()}})})}const jn=e=>()=>C(oe,{get when(){return e()},keyed:!0,children:t=>C(tt.Provider,{value:t,get children(){return t.outlet()}})}),Nt=e=>{const t=St(()=>e.children);return yt(e,{get children(){return t()}})};function Nn([e,t],r,n){return[e,i=>t(n(i))]}function Un(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Mn(e){let t=!1;const r=i=>typeof i=="string"?{value:i}:i,n=Nn(U(r(e.get()),{equals:(i,o)=>i.value===o.value}),void 0,i=>(!t&&e.set(i),i));return e.init&&ye(e.init((i=e.get())=>{t=!0,n[1](r(i)),t=!1})),kr({signal:n,create:e.create,utils:e.utils})}function Gn(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Bn(e,t){const r=Un(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0)}function Hn(e){const t=new URL(e);return t.pathname+t.search}function Wn(e){let t;const r={value:e.url||(t=yn())&&Hn(t.request.url)||""};return kr({signal:[()=>r,n=>Object.assign(r,n)]})(e)}const zn=new Map;function Vn(e=!0,t=!1,r="/_server"){return n=>{const i=n.base.path(),o=n.navigatorFactory(n.base);let s={};function a(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function l(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const m=d.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!m||t&&!m.hasAttribute("link"))return;const w=a(m),y=w?m.href.baseVal:m.href;if((w?m.target.baseVal:m.target)||!y&&!m.hasAttribute("state"))return;const p=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||p&&p.includes("external"))return;const k=w?new URL(y,document.baseURI):new URL(y);if(!(k.origin!==window.location.origin||i&&k.pathname&&!k.pathname.toLowerCase().startsWith(i.toLowerCase())))return[m,k]}function u(d){const m=l(d);if(!m)return;const[w,y]=m,v=n.parsePath(y.pathname+y.search+y.hash),p=w.getAttribute("state");d.preventDefault(),o(v,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:p&&JSON.parse(p)})}function c(d){const m=l(d);if(!m)return;const[w,y]=m;s[y.pathname]||n.preloadRoute(y,w.getAttribute("preload")!=="false")}function f(d){const m=l(d);if(!m)return;const[w,y]=m;s[y.pathname]||(s[y.pathname]=setTimeout(()=>{n.preloadRoute(y,w.getAttribute("preload")!=="false"),delete s[y.pathname]},200))}function h(d){const m=l(d);if(!m)return;const[,w]=m;s[w.pathname]&&(clearTimeout(s[w.pathname]),delete s[w.pathname])}function g(d){let m=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const y=new URL(m,hr);if(m=n.parsePath(y.pathname+y.search),!m.startsWith(r))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=zn.get(m);if(w){d.preventDefault();const y=new FormData(d.target);d.submitter&&d.submitter.name&&y.append(d.submitter.name,d.submitter.value),w.call(n,y)}}et(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",h),document.addEventListener("focusin",c),document.addEventListener("touchstart",c)),document.addEventListener("submit",g),ye(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",h),document.removeEventListener("focusin",c),document.removeEventListener("touchstart",c)),document.removeEventListener("submit",g)})}}function Kn(e){if(fr)return Wn(e);const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),r=dr();return Mn({get:t,set({value:n,replace:i,scroll:o,state:s}){i?window.history.replaceState(wn(s),"",n):window.history.pushState(s,"",n),Bn(window.location.hash.slice(1),o),Tt()},init:n=>Gn(window,"popstate",bn(n,i=>{if(i&&i<0)return!r.confirm(i);{const o=t();return!r.confirm(o.value,{state:o.state})}})),create:Vn(e.preload,e.explicitLinks,e.actionBase),utils:{go:n=>window.history.go(n),beforeLeave:r}})(e)}var Yn=F("<a>");function pt(e){e=yt({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Xr(e,["href","state","class","activeClass","inactiveClass","end"]),r=An(()=>e.href),n=Pn(r),i=On(),o=S(()=>{const s=r();if(s===void 0)return[!1,!1];const a=he(s.split(/[?#]/,1)[0]).toLowerCase(),l=he(i.pathname).toLowerCase();return[e.end?a===l:l.startsWith(a),a===l]});return(()=>{var s=Yn();return fn(s,yt(t,{get href(){return n()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o()[0],[e.activeClass]:o()[0],...t.classList}},link:"",get"aria-current"(){return o()[1]?"page":void 0}}),!1),s})()}const vt=Symbol("store-raw"),ve=Symbol("store-node"),ee=Symbol("store-has"),Cr=Symbol("store-self");function Sr(e){let t=e[q];if(!t&&(Object.defineProperty(e,q,{value:t=new Proxy(e,Jn)}),!Array.isArray(e))){const r=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];n[s].get&&Object.defineProperty(e,s,{enumerable:n[s].enumerable,get:n[s].get.bind(t)})}}return t}function Ke(e){let t;return e!=null&&typeof e=="object"&&(e[q]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function _e(e,t=new Set){let r,n,i,o;if(r=e!=null&&e[vt])return r;if(!Ke(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,a=e.length;s<a;s++)i=e[s],(n=_e(i,t))!==i&&(e[s]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let l=0,u=s.length;l<u;l++)o=s[l],!a[o].get&&(i=e[o],(n=_e(i,t))!==i&&(e[o]=n))}return e}function Ye(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function Ee(e,t,r){if(e[t])return e[t];const[n,i]=U(r,{equals:!1,internal:!0});return n.$=i,e[t]=n}function qn(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===q||t===ve||(delete r.value,delete r.writable,r.get=()=>e[q][t]),r}function $r(e){ht()&&Ee(Ye(e,ve),Cr)()}function Xn(e){return $r(e),Reflect.ownKeys(e)}const Jn={get(e,t,r){if(t===vt)return e;if(t===q)return r;if(t===dt)return $r(e),r;const n=Ye(e,ve),i=n[t];let o=i?i():e[t];if(t===ve||t===ee||t==="__proto__")return o;if(!i){const s=Object.getOwnPropertyDescriptor(e,t);ht()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=Ee(n,t,o)())}return Ke(o)?Sr(o):o},has(e,t){return t===vt||t===q||t===dt||t===ve||t===ee||t==="__proto__"?!0:(ht()&&Ee(Ye(e,ee),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Xn,getOwnPropertyDescriptor:qn};function qe(e,t,r,n=!1){if(!n&&e[t]===r)return;const i=e[t],o=e.length;r===void 0?(delete e[t],e[ee]&&e[ee][t]&&i!==void 0&&e[ee][t].$()):(e[t]=r,e[ee]&&e[ee][t]&&i===void 0&&e[ee][t].$());let s=Ye(e,ve),a;if((a=Ee(s,t,i))&&a.$(()=>r),Array.isArray(e)&&e.length!==o){for(let l=e.length;l<o;l++)(a=s[l])&&a.$();(a=Ee(s,"length",o))&&a.$(e.length)}(a=s[Cr])&&a.$()}function Ar(e,t){const r=Object.keys(t);for(let n=0;n<r.length;n+=1){const i=r[n];qe(e,i,t[i])}}function Qn(e,t){if(typeof t=="function"&&(t=t(e)),t=_e(t),Array.isArray(t)){if(e===t)return;let r=0,n=t.length;for(;r<n;r++){const i=t[r];e[r]!==i&&qe(e,r,i)}qe(e,"length",n)}else Ar(e,t)}function Ae(e,t,r=[]){let n,i=e;if(t.length>1){n=t.shift();const s=typeof n,a=Array.isArray(e);if(Array.isArray(n)){for(let l=0;l<n.length;l++)Ae(e,[n[l]].concat(t),r);return}else if(a&&s==="function"){for(let l=0;l<e.length;l++)n(e[l],l)&&Ae(e,[l].concat(t),r);return}else if(a&&s==="object"){const{from:l=0,to:u=e.length-1,by:c=1}=n;for(let f=l;f<=u;f+=c)Ae(e,[f].concat(t),r);return}else if(t.length>1){Ae(e[n],t,[n].concat(r));return}i=e[n],r=[n].concat(r)}let o=t[0];typeof o=="function"&&(o=o(i,r),o===i)||n===void 0&&o==null||(o=_e(o),n===void 0||Ke(i)&&Ke(o)&&!Array.isArray(o)?Ar(i,o):qe(e,n,o))}function Xe(...[e,t]){const r=_e(e||{}),n=Array.isArray(r),i=Sr(r);function o(...s){Mr(()=>{n&&s.length===1?Qn(r,s[0]):Ae(r,s)})}return[i,o]}const Ut={bgColor:"#ffffff",textColor:"#333333",navbarBg:"rgba(255, 255, 255, 0.8)",gallery:{containerBg:"#ffffff",cardBg:"#ffffff",cardHoverBg:"#f8f8f8",shadowColor:"rgba(0, 0, 0, 0.1)",titleColor:"#333333",descriptionColor:"#666666",linkColor:"#0066cc",linkHoverColor:"#004499",borderColor:"#eeeeee",buttonBg:"#f0f0f0",buttonText:"#333333",buttonHoverBg:"#e0e0e0",primaryButtonBg:"#0066cc",primaryButtonText:"#ffffff",primaryButtonHoverBg:"#0052a3"}},Mt={bgColor:"#1a1a1a",textColor:"#ffffff",navbarBg:"rgba(42, 42, 42, 0.8)",gallery:{containerBg:"#1a1a1a",cardBg:"#2d2d2d",cardHoverBg:"#363636",shadowColor:"rgba(0, 0, 0, 0.3)",titleColor:"#ffffff",descriptionColor:"#cccccc",linkColor:"#66b3ff",linkHoverColor:"#99ccff",borderColor:"#404040",buttonBg:"#404040",buttonText:"#ffffff",buttonHoverBg:"#505050",primaryButtonBg:"#2196f3",primaryButtonText:"#ffffff",primaryButtonHoverBg:"#1976d2"}};var Zn=!1;function ei(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ti(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ri=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!Zn:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ti(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ei(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),N="-ms-",Je="-moz-",A="-webkit-",Pr="comm",Ot="rule",_t="decl",ni="@import",Tr="@keyframes",ii="@layer",oi=Math.abs,nt=String.fromCharCode,si=Object.assign;function ai(e,t){return j(e,0)^45?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function Or(e){return e.trim()}function li(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function xt(e,t){return e.indexOf(t)}function j(e,t){return e.charCodeAt(t)|0}function De(e,t,r){return e.slice(t,r)}function J(e){return e.length}function Et(e){return e.length}function je(e,t){return t.push(e),e}function ci(e,t){return e.map(t).join("")}var it=1,ke=1,_r=0,W=0,L=0,Se="";function ot(e,t,r,n,i,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:it,column:ke,length:s,return:""}}function $e(e,t){return si(ot("",null,null,"",null,null,0),e,{length:-e.length},t)}function ui(){return L}function fi(){return L=W>0?j(Se,--W):0,ke--,L===10&&(ke=1,it--),L}function V(){return L=W<_r?j(Se,W++):0,ke++,L===10&&(ke=1,it++),L}function Q(){return j(Se,W)}function Me(){return W}function Ie(e,t){return De(Se,e,t)}function Fe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Er(e){return it=ke=1,_r=J(Se=e),W=0,[]}function Dr(e){return Se="",e}function Ge(e){return Or(Ie(W-1,kt(e===91?e+2:e===40?e+1:e)))}function di(e){for(;(L=Q())&&L<33;)V();return Fe(e)>2||Fe(L)>3?"":" "}function hi(e,t){for(;--t&&V()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Ie(e,Me()+(t<6&&Q()==32&&V()==32))}function kt(e){for(;V();)switch(L){case e:return W;case 34:case 39:e!==34&&e!==39&&kt(L);break;case 40:e===41&&kt(e);break;case 92:V();break}return W}function gi(e,t){for(;V()&&e+L!==57;)if(e+L===84&&Q()===47)break;return"/*"+Ie(t,W-1)+"*"+nt(e===47?e:V())}function mi(e){for(;!Fe(Q());)V();return Ie(e,W)}function yi(e){return Dr(Be("",null,null,null,[""],e=Er(e),0,[0],e))}function Be(e,t,r,n,i,o,s,a,l){for(var u=0,c=0,f=s,h=0,g=0,d=0,m=1,w=1,y=1,v=0,p="",k=i,O=o,I=n,b=p;w;)switch(d=v,v=V()){case 40:if(d!=108&&j(b,f-1)==58){xt(b+=P(Ge(v),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:b+=Ge(v);break;case 9:case 10:case 13:case 32:b+=di(d);break;case 92:b+=hi(Me()-1,7);continue;case 47:switch(Q()){case 42:case 47:je(wi(gi(V(),Me()),t,r),l);break;default:b+="/"}break;case 123*m:a[u++]=J(b)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:w=0;case 59+c:y==-1&&(b=P(b,/\f/g,"")),g>0&&J(b)-f&&je(g>32?Bt(b+";",n,r,f-1):Bt(P(b," ","")+";",n,r,f-2),l);break;case 59:b+=";";default:if(je(I=Gt(b,t,r,u,c,i,a,p,k=[],O=[],f),o),v===123)if(c===0)Be(b,t,I,I,k,o,f,a,O);else switch(h===99&&j(b,3)===110?100:h){case 100:case 108:case 109:case 115:Be(e,I,I,n&&je(Gt(e,I,I,0,0,i,a,p,i,k=[],f),O),i,O,f,a,n?k:O);break;default:Be(b,I,I,I,[""],O,0,a,O)}}u=c=g=0,m=y=1,p=b="",f=s;break;case 58:f=1+J(b),g=d;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&fi()==125)continue}switch(b+=nt(v),v*m){case 38:y=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(J(b)-1)*y,y=1;break;case 64:Q()===45&&(b+=Ge(V())),h=Q(),c=f=J(p=b+=mi(Me())),v++;break;case 45:d===45&&J(b)==2&&(m=0)}}return o}function Gt(e,t,r,n,i,o,s,a,l,u,c){for(var f=i-1,h=i===0?o:[""],g=Et(h),d=0,m=0,w=0;d<n;++d)for(var y=0,v=De(e,f+1,f=oi(m=s[d])),p=e;y<g;++y)(p=Or(m>0?h[y]+" "+v:P(v,/&\f/g,h[y])))&&(l[w++]=p);return ot(e,t,r,i===0?Ot:a,l,u,c)}function wi(e,t,r){return ot(e,t,r,Pr,nt(ui()),De(e,2,-2),0)}function Bt(e,t,r,n){return ot(e,t,r,_t,De(e,0,n),De(e,n+1,-1),n)}function xe(e,t){for(var r="",n=Et(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function bi(e,t,r,n){switch(e.type){case ii:if(e.children.length)break;case ni:case _t:return e.return=e.return||e.value;case Pr:return"";case Tr:return e.return=e.value+"{"+xe(e.children,n)+"}";case Ot:e.value=e.props.join(",")}return J(r=xe(e.children,n))?e.return=e.value+"{"+r+"}":""}function pi(e){var t=Et(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}function vi(e){return function(t){t.root||(t=t.return)&&e(t)}}function xi(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var ki=function(t,r,n){for(var i=0,o=0;i=o,o=Q(),i===38&&o===12&&(r[n]=1),!Fe(o);)V();return Ie(t,W)},Ci=function(t,r){var n=-1,i=44;do switch(Fe(i)){case 0:i===38&&Q()===12&&(r[n]=1),t[n]+=ki(W-1,r,n);break;case 2:t[n]+=Ge(i);break;case 4:if(i===44){t[++n]=Q()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=nt(i)}while(i=V());return t},Si=function(t,r){return Dr(Ci(Er(t),r))},Ht=new WeakMap,$i=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Ht.get(n))&&!i){Ht.set(t,!0);for(var o=[],s=Si(r,o),a=n.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},Ai=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Fr(e,t){switch(ai(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Je+e+N+e+e;case 6828:case 4268:return A+e+N+e+e;case 6165:return A+e+N+"flex-"+e+e;case 5187:return A+e+P(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return A+e+N+"flex-item-"+P(e,/flex-|-self/,"")+e;case 4675:return A+e+N+"flex-line-pack"+P(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+N+P(e,"shrink","negative")+e;case 5292:return A+e+N+P(e,"basis","preferred-size")+e;case 6060:return A+"box-"+P(e,"-grow","")+A+e+N+P(e,"grow","positive")+e;case 4554:return A+P(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(j(e,t+1)){case 109:if(j(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Je+(j(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xt(e,"stretch")?Fr(P(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(j(e,t+1)!==115)break;case 6444:switch(j(e,J(e)-3-(~xt(e,"!important")&&10))){case 107:return P(e,":",":"+A)+e;case 101:return P(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(j(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(j(e,t+11)){case 114:return A+e+N+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+N+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+N+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+N+e+e}return e}var Pi=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case _t:t.return=Fr(t.value,t.length);break;case Tr:return xe([$e(t,{value:P(t.value,"@","@"+A)})],i);case Ot:if(t.length)return ci(t.props,function(o){switch(li(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xe([$e(t,{props:[P(o,/:(read-\w+)/,":"+Je+"$1")]})],i);case"::placeholder":return xe([$e(t,{props:[P(o,/:(plac\w+)/,":"+A+"input-$1")]}),$e(t,{props:[P(o,/:(plac\w+)/,":"+Je+"$1")]}),$e(t,{props:[P(o,/:(plac\w+)/,N+"input-$1")]})],i)}return""})}},Ti=[Pi],Oi=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ti,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)o[w[y]]=!0;a.push(m)});var l,u=[$i,Ai];{var c,f=[bi,vi(function(m){c.insert(m)})],h=pi(u.concat(i,f)),g=function(w){return xe(yi(w),h)};l=function(w,y,v,p){c=v,g(w?w+"{"+y.styles+"}":y.styles),p&&(d.inserted[y.name]=!0)}}var d={key:r,sheet:new ri({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return d.sheet.hydrate(a),d};function _i(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ei={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Di=/[A-Z]|^ms/g,Fi=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Rr=function(t){return t.charCodeAt(1)===45},Wt=function(t){return t!=null&&typeof t!="boolean"},ct=xi(function(e){return Rr(e)?e:e.replace(Di,"-$&").toLowerCase()}),zt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Fi,function(n,i,o){return se={name:i,styles:o,next:se},i})}return Ei[t]!==1&&!Rr(t)&&typeof r=="number"&&r!==0?r+"px":r};function Qe(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return se={name:i.name,styles:i.styles,next:se},i.name;var o=r;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)se={name:s.name,styles:s.styles,next:se},s=s.next;var a=o.styles+";";return a}return Ri(e,t,r)}}var l=r;if(t==null)return l;var u=t[l];return u!==void 0?u:l}function Ri(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Qe(e,t,r[i])+";";else for(var o in r){var s=r[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?n+=o+"{"+t[a]+"}":Wt(a)&&(n+=ct(o)+":"+zt(o,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Wt(s[l])&&(n+=ct(o)+":"+zt(o,s[l])+";");else{var u=Qe(e,t,s);switch(o){case"animation":case"animationName":{n+=ct(o)+":"+u+";";break}default:n+=o+"{"+u+"}"}}}return n}var Vt=/label:\s*([^\s;{]+)\s*(;|$)/g,se;function ut(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";se=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,i+=Qe(r,t,o);else{var s=o;i+=s[0]}for(var a=1;a<e.length;a++)if(i+=Qe(r,t,e[a]),n){var l=o;i+=l[a]}Vt.lastIndex=0;for(var u="",c;(c=Vt.exec(i))!==null;)u+="-"+c[1];var f=_i(i)+u;return{name:f,styles:i,next:se}}function Ir(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var Ii=function(t,r,n){var i=t.key+"-"+r.name;t.registered[i]===void 0&&(t.registered[i]=r.styles)},Li=function(t,r,n){Ii(t,r);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Kt(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Yt(e,t,r){var n=[],i=Ir(e,n,r);return n.length<2?r:i+t(n)}var ji=function(t){var r=Oi(t);r.sheet.speedy=function(a){this.isSpeedy=a},r.compat=!0;var n=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered,void 0);return Li(r,f),r.key+"-"+f.name},i=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered),h="animation-"+f.name;return Kt(r,{name:f.name,styles:"@keyframes "+h+"{"+f.styles+"}"}),h},o=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered);Kt(r,f)},s=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return Yt(r.registered,n,Ni(u))};return{css:n,cx:s,injectGlobal:o,keyframes:i,hydrate:function(l){l.forEach(function(u){r.inserted[u]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:Ir.bind(null,r.registered),merge:Yt.bind(null,r.registered,n)}},Ni=function e(t){for(var r="",n=0;n<t.length;n++){var i=t[n];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(r&&(r+=" "),r+=o)}}return r},Ui=ji({key:"css"}),ge=Ui.css,Mi=F("<div><nav class=navbar><div class=right-section><button class=theme-toggle>"),Gi=F('<svg class=sun-icon xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><circle class=sun-glow cx=12 cy=12 r=8></circle><circle class=sun-core cx=12 cy=12 r=5 stroke-width=1.5></circle><g class=sun-rays stroke-linecap=round><line x1=12 y1=3 x2=12 y2=1></line><line x1=12 y1=23 x2=12 y2=21></line><line x1=3 y1=12 x2=1 y2=12></line><line x1=23 y1=12 x2=21 y2=12></line><line x1=5.6 y1=5.6 x2=4.2 y2=4.2></line><line x1=18.4 y1=18.4 x2=19.8 y2=19.8></line><line x1=5.6 y1=18.4 x2=4.2 y2=19.8></line><line x1=18.4 y1=5.6 x2=19.8 y2=4.2>'),Bi=F('<svg class=moon-icon xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><circle class=moon-glow cx=12 cy=12 r=10></circle><path class=moon-body d="M12 3a9 9 0 1 0 9 9 10 10 0 0 1-9-9z"stroke-width=1.5></path><circle class=moon-crater cx=15 cy=9 r=1.5></circle><circle class=moon-crater cx=10 cy=11 r=1></circle><circle class=moon-crater cx=13 cy=14 r=1.2>');const Hi=e=>{const t=S(()=>ge`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      background: ${e.theme.navbarBg};
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 8px ${e.theme.gallery.shadowColor};
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${e.theme.textColor};
      transition: color 0.3s ease;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.2s ease;
      color: ${e.theme.textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: relative;
      
      &:hover {
        background: ${e.theme.gallery.shadowColor};
        transform: rotate(12deg);
      }

      svg {
        width: 24px;
        height: 24px;
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 4px rgba(255, 140, 0, 0.5));
      }
    }

    .sun-icon {
      .sun-core {
        fill: #FF8C00;
        stroke: #FFA500;
      }
      .sun-rays {
        stroke: #FFD700;
        stroke-width: 2;
      }
      .sun-glow {
        fill: none;
        stroke: #FFA500;
        stroke-width: 0.5;
        opacity: 0.5;
      }
    }

    .moon-icon {
      filter: drop-shadow(0 0 4px rgba(220, 220, 255, 0.7)) !important;
      
      .moon-body {
        fill: #E1E1E6;
        stroke: #CCCCCC;
      }
      .moon-crater {
        fill: #D1D1D6;
        stroke: none;
      }
      .moon-glow {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 0.5;
        opacity: 0.7;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 0 1rem;
      }

      .logo {
        font-size: 1.25rem;
      }

      .theme-toggle {
        width: 36px;
        height: 36px;
        
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  `);return(()=>{var r=Mi(),n=r.firstChild,i=n.firstChild,o=i.firstChild;return _(n,C(pt,{href:"/",class:"logo",children:"Portfolio Gallery"}),i),Pt(o,"click",e.onThemeToggle,!0),_(o,(()=>{var s=S(()=>!!e.isDark);return()=>s()?Gi():Bi()})()),E(s=>{var a=t(),l=e.isDark?"Switch to light mode":"Switch to dark mode";return a!==s.e&&ae(r,s.e=a),l!==s.t&&x(o,"aria-label",s.t=l),s},{e:void 0,t:void 0}),r})()};et(["click"]);class pe{static instance;workers;taskQueue;activeWorkers;constructor(){const t=Math.max(2,Math.min(4,navigator.hardwareConcurrency-1));this.workers=[],this.taskQueue=[],this.activeWorkers=new Map;for(let r=0;r<t;r++){const n=new Worker(new URL("/Klaes-Soerensen-Portfolio-Public/assets/worker-CPAWidZg.js",import.meta.url),{type:"module"});n.onmessage=i=>this.handleWorkerMessage(n,i),n.onerror=i=>this.handleWorkerError(n,i),this.workers.push(n)}console.log(`TaskProcessor initialized with ${t} workers`)}static getInstance(){return pe.instance||(pe.instance=new pe),pe.instance}async submitTask(t){return new Promise((r,n)=>{const i=crypto.randomUUID(),o={task:t,resolve:r,reject:n},s=this.workers.find(a=>!Array.from(this.activeWorkers.values()).some(l=>l.worker===a));s?this.assignTask(s,i,o):this.taskQueue.push(o)})}assignTask(t,r,n){this.activeWorkers.set(r,{worker:t,...n});const i={taskId:r,entityType:n.task.entityType,action:n.task.action,payload:{entities:n.task.payload.entities?JSON.parse(JSON.stringify(n.task.payload.entities)):void 0,config:JSON.parse(JSON.stringify(n.task.payload.config))}};t.postMessage(i)}handleWorkerMessage(t,r){const{taskId:n,result:i,error:o}=r.data,s=this.activeWorkers.get(n);if(s&&(o?s.reject(new Error(o)):s.resolve({data:i}),this.activeWorkers.delete(n),this.taskQueue.length>0)){const a=this.taskQueue.shift(),l=crypto.randomUUID();this.assignTask(t,l,a)}}handleWorkerError(t,r){console.error("Worker error:",r);const n=this.workers.indexOf(t);t.terminate();const i=new Worker(new URL("/Klaes-Soerensen-Portfolio-Public/assets/worker-CPAWidZg.js",import.meta.url),{type:"module"});i.onmessage=o=>this.handleWorkerMessage(i,o),i.onerror=o=>this.handleWorkerError(i,o),this.workers[n]=i;for(const[o,s]of this.activeWorkers.entries())s.worker===t&&(s.reject(new Error("Worker failed")),this.activeWorkers.delete(o))}cleanup(){this.workers.forEach(t=>t.terminate()),this.workers=[],this.taskQueue=[],this.activeWorkers.clear()}}const Ce=pe.getInstance(),Y={cloudSpeed:.3,starSpeed:.2,groundSpeed:2,transitionSpeed:3},ft={minGroundHeight:.2,maxGroundHeight:.6,noiseScale:.005},X={maxStars:200,maxClouds:10,initialClouds:4,cloudSpawnOffset:200,cloudSpawnChance:.1},Wi={chunkSize:Math.max(window.innerWidth/2,800),pointsPerChunk:25,overlapPoints:4},zi={day:{sky:{r:135,g:206,b:235,a:255},skyTop:{r:30,g:144,b:255,a:255},skyHorizon:{r:176,g:226,b:255,a:255},star:{r:255,g:255,b:255,a:0},cloud:{r:255,g:255,b:255,a:230},ground:{r:78,g:53,b:36,a:255},grass:{r:44,g:176,b:55,a:255}},night:{sky:{r:15,g:20,b:45,a:255},skyTop:{r:8,g:10,b:30,a:255},skyHorizon:{r:25,g:35,b:65,a:255},star:{r:255,g:255,b:255,a:255},cloud:{r:149,g:149,b:149,a:220},ground:{r:39,g:26,b:18,a:255},grass:{r:22,g:88,b:27,a:255}}};var Vi=F("<svg><g class=star-field></svg>",!1,!0),Ki=F("<svg><path class=star-chunk fill=white opacity=0.8></svg>",!1,!0);const Yi=e=>{const r=X.maxStars,[n,i]=U([]),[o,s]=U(!1),a=async u=>{if(!o())try{s(!0);const c=await Ce.submitTask({entityType:"STAR_CHUNK",action:"GENERATE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,chunkWidth:500,starsPerChunk:r,startX:u}}});c.data&&i(f=>[...f,c.data])}finally{s(!1)}};me(async()=>{try{const u=await Ce.submitTask({entityType:"STAR_CHUNK",action:"INITIALIZE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,chunkWidth:500,starsPerChunk:r,startX:0}}});u.data&&i(u.data)}catch(u){console.error("Error initializing star chunks:",u)}});let l;return me(()=>{const u=()=>{i(c=>{if(c.length===0)return c;const f=c.map(g=>({...g,x:g.x-Y.starSpeed})).filter(g=>g.x>-500);if(f.length===0)return[];const h=f.reduce((g,d)=>d.x>g.x?d:g,f[0]);return h&&h.x+500<window.innerWidth&&(o()||a(h.x+500)),f}),l=requestAnimationFrame(u)};l=requestAnimationFrame(u)}),ye(()=>{l&&cancelAnimationFrame(l)}),(()=>{var u=Vi();return _(u,()=>n().map(c=>(()=>{var f=Ki();return E(h=>{var g=c.pathData,d=`translate(${c.x}, 0)`;return g!==h.e&&x(f,"d",h.e=g),d!==h.t&&x(f,"transform",h.t=d),h},{e:void 0,t:void 0}),f})())),E(c=>{var f=e.isDark?1:0,h=`opacity ${Y.transitionSpeed}s ease`;return f!==c.e&&((c.e=f)!=null?u.style.setProperty("opacity",f):u.style.removeProperty("opacity")),h!==c.t&&((c.t=h)!=null?u.style.setProperty("transition",h):u.style.removeProperty("transition")),c},{e:void 0,t:void 0}),u})()};var qi=F("<svg><g class=cloud-field><defs><filter id=cloud-blur><feGaussianBlur in=SourceGraphic stdDeviation=5></svg>",!1,!0),Xi=F("<svg><g></svg>",!1,!0),Ji=F("<svg><ellipse class=cloud-section filter=url(#cloud-blur)></svg>",!1,!0);const Qi=e=>{const[t,r]=U([]),[n,i]=U(!1),o=async()=>{if(!n())try{i(!0);const l=await Ce.submitTask({entityType:"CLOUD",action:"GENERATE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,spawnOffset:X.cloudSpawnOffset,maxClouds:X.maxClouds,cloudSpawnChance:X.cloudSpawnChance,cloudSpeed:Y.cloudSpeed}}});if(l.data){const u={...l.data,id:crypto.randomUUID()};r(c=>[...c,u])}}finally{i(!1)}};me(async()=>{try{const l=await Ce.submitTask({entityType:"CLOUD",action:"INITIALIZE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,spawnOffset:X.cloudSpawnOffset,maxClouds:X.initialClouds,cloudSpawnChance:X.cloudSpawnChance,cloudSpeed:Y.cloudSpeed}}});if(l.data){const u=l.data.map(c=>({...c,id:crypto.randomUUID()}));r(u),console.log("Initial clouds:",u)}}catch(l){console.error("Error initializing clouds:",l)}});let s,a;return me(()=>{const l=()=>{r(u=>u.map(c=>({...c,x:c.x-Y.cloudSpeed})).filter(c=>c.x>-X.cloudSpawnOffset)),a=requestAnimationFrame(l)};a=requestAnimationFrame(l),s=setInterval(()=>{t().length<X.maxClouds&&!n()&&Math.random()<X.cloudSpawnChance&&o()},1e3)}),ye(()=>{s&&clearInterval(s),a&&cancelAnimationFrame(a)}),(()=>{var l=qi();return l.firstChild,_(l,()=>t().map(u=>(()=>{var c=Xi();return _(c,()=>u.sections.map((f,h)=>(()=>{var g=Ji();return E(d=>{var m=f.x,w=f.y,y=f.width/2,v=f.height/2,p=`rgb(${e.colors.cloud.r}, ${e.colors.cloud.g}, ${e.colors.cloud.b})`,k=e.colors.cloud.a/255;return m!==d.e&&x(g,"cx",d.e=m),w!==d.t&&x(g,"cy",d.t=w),y!==d.a&&x(g,"rx",d.a=y),v!==d.o&&x(g,"ry",d.o=v),p!==d.i&&x(g,"fill",d.i=p),k!==d.n&&x(g,"opacity",d.n=k),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),g})())),E(()=>x(c,"transform",`translate(${u.x}, ${u.y})`)),c})()),null),E(u=>{var c=e.isDark?.95:1,f=`opacity ${Y.transitionSpeed}s ease`;return c!==u.e&&((u.e=c)!=null?l.style.setProperty("opacity",c):l.style.removeProperty("opacity")),f!==u.t&&((u.t=f)!=null?l.style.setProperty("transition",f):l.style.removeProperty("transition")),u},{e:void 0,t:void 0}),l})()};var Zi=F('<svg><g class=celestial-bodies><defs><radialGradient id=sunGlow cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color="rgba(255, 220, 150, 0.4)"></stop><stop offset=50% stop-color="rgba(255, 180, 120, 0.2)"></stop><stop offset=100% stop-color="rgba(255, 160, 100, 0)"></stop></radialGradient><radialGradient id=sunBody cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color=#fffaf0></stop><stop offset=30% stop-color=#ffe4b5></stop><stop offset=60% stop-color=#ffd700></stop><stop offset=80% stop-color=#ffa500></stop><stop offset=100% stop-color=#ff8c00></stop></radialGradient><radialGradient id=moonGlow cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color="rgba(255, 255, 255, 0.3)"></stop><stop offset=100% stop-color="rgba(255, 255, 255, 0)"></stop></radialGradient><radialGradient id=moonBody cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color=#ffffff></stop><stop offset=50% stop-color=#e0e0e0></stop><stop offset=80% stop-color=#b0b0b0></stop><stop offset=100% stop-color=#909090></stop></radialGradient></defs><g><circle fill=url(#sunGlow)></circle><circle fill=url(#sunBody)></circle><g></g></g><g><circle fill=url(#moonGlow)></circle><circle fill=url(#moonBody)></svg>',!1,!0),eo=F('<svg><path fill="rgba(255, 200, 100, 0.4)"></svg>',!1,!0),to=F('<svg><circle fill="rgba(0, 0, 0, 0.2)"></svg>',!1,!0);const ro=e=>{const[t,r]=U(0);let n,i=0;const o=1e3/60,s=S(()=>Math.min(e.width,e.height)/1e3,[e.width,e.height]),a=S(()=>({SUN_RADIUS:30*s(),MOON_RADIUS:20*s(),SUN_GLOW_RADIUS:320*s(),MOON_GLOW_RADIUS:100*s(),SUN_X_RATIO:e.width<768?.2:.13,MOON_X_RATIO:e.width<768?.8:.87,BASE_Y_RATIO:e.width<768?.15:.2,ROTATION_SPEED:.2,RAY_COUNT:e.width<768?8:12}),[s(),e.width]),l=S(()=>{const d=a();return Array.from({length:d.RAY_COUNT}).map((m,w)=>{const y=w*360/d.RAY_COUNT;return{angle:y,path:`M ${d.SUN_RADIUS*Math.cos(y*Math.PI/180)} ${d.SUN_RADIUS*Math.sin(y*Math.PI/180)} 
                       L ${d.SUN_RADIUS*2*Math.cos((y+5)*Math.PI/180)} ${d.SUN_RADIUS*2*Math.sin((y+5)*Math.PI/180)} 
                       L ${d.SUN_RADIUS*2*Math.cos((y-5)*Math.PI/180)} ${d.SUN_RADIUS*2*Math.sin((y-5)*Math.PI/180)} Z`}})},[a().RAY_COUNT,a().SUN_RADIUS]),u=S(()=>{const d=s();return[{x:-8*d,y:-5*d,r:4*d},{x:5*d,y:8*d,r:3*d},{x:-3*d,y:10*d,r:2*d},{x:7*d,y:-7*d,r:3*d},{x:0,y:0,r:4*d}]},[s()]),c=S(()=>{const d=a();return{sunX:e.width*d.SUN_X_RATIO,moonX:e.width*d.MOON_X_RATIO,baseY:e.height*d.BASE_Y_RATIO,hiddenY:e.height+100}},[e.width,e.height,a()]),f=S(()=>e.isDark?c().hiddenY:c().baseY,[e.isDark,c()]),h=S(()=>e.isDark?c().baseY:c().hiddenY,[e.isDark,c()]),g=d=>{d-i>=o&&(i=d,r(m=>{const w=(m+a().ROTATION_SPEED)%360;return Number.isFinite(w)?w:0})),n=requestAnimationFrame(g)};return me(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(45);return}i=performance.now(),n=requestAnimationFrame(g)}),ye(()=>{n&&cancelAnimationFrame(n)}),(()=>{var d=Zi(),m=d.firstChild,w=m.nextSibling,y=w.firstChild,v=y.nextSibling,p=v.nextSibling,k=w.nextSibling,O=k.firstChild,I=O.nextSibling;return w.style.setProperty("will-change","transform"),p.style.setProperty("will-change","transform"),_(p,()=>l().map(b=>(()=>{var B=eo();return E(()=>x(B,"d",b.path)),B})())),k.style.setProperty("will-change","transform"),_(k,()=>u().map(b=>(()=>{var B=to();return E(G=>{var $=b.x,R=b.y,z=b.r;return $!==G.e&&x(B,"cx",G.e=$),R!==G.t&&x(B,"cy",G.t=R),z!==G.a&&x(B,"r",G.a=z),G},{e:void 0,t:void 0,a:void 0}),B})()),null),E(b=>{var B=`translate(${c().sunX}, ${f()})`,G=`transform ${Y.transitionSpeed}s ease`,$=a().SUN_GLOW_RADIUS,R=a().SUN_RADIUS,z=`rotate(${t()})`,we=`translate(${c().moonX}, ${h()})`,ue=`transform ${Y.transitionSpeed}s ease`,Z=a().MOON_GLOW_RADIUS,re=a().MOON_RADIUS;return B!==b.e&&x(w,"transform",b.e=B),G!==b.t&&((b.t=G)!=null?w.style.setProperty("transition",G):w.style.removeProperty("transition")),$!==b.a&&x(y,"r",b.a=$),R!==b.o&&x(v,"r",b.o=R),z!==b.i&&x(p,"transform",b.i=z),we!==b.n&&x(k,"transform",b.n=we),ue!==b.s&&((b.s=ue)!=null?k.style.setProperty("transition",ue):k.style.removeProperty("transition")),Z!==b.h&&x(O,"r",b.h=Z),re!==b.r&&x(I,"r",b.r=re),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),d})()},fe={sky:{r:200,g:150,b:180,a:255},skyTop:{r:150,g:100,b:150,a:255},skyHorizon:{r:255,g:170,b:190,a:255},star:{r:255,g:255,b:255,a:128},cloud:{r:255,g:170,b:160,a:255},ground:{r:58,g:40,b:27,a:255},grass:{r:33,g:132,b:41,a:255}},de={sky:{r:255,g:200,b:150,a:255},skyTop:{r:200,g:150,b:120,a:255},skyHorizon:{r:255,g:220,b:180,a:255},star:{r:255,g:255,b:255,a:128},cloud:{r:255,g:220,b:200,a:255},ground:{r:78,g:53,b:36,a:255},grass:{r:44,g:176,b:55,a:255}},qt=(e,t,r)=>({r:Math.round(e.r+(t.r-e.r)*r),g:Math.round(e.g+(t.g-e.g)*r),b:Math.round(e.b+(t.b-e.b)*r),a:Math.round(e.a+(t.a-e.a)*r)}),H=(e,t,r,n,i=!1)=>{if(i){const o=Math.max(0,Math.min(1,(n-.3)*1.4));return{r:r.r,g:r.g,b:r.b,a:Math.floor(r.a*o)}}if(n<.5){const o=n*2;return qt(e,t,o)}else{const o=(n-.5)*2;return qt(t,r,o)}},no=e=>{let t=null;const r=1e3/120,[n,i]=Xe({currentMode:e,targetMode:e,progress:e?1:0,isAnimating:!1,_cachedProgress:-1,_cachedColors:null,_lastFrameTime:0}),o=()=>{const{day:l,night:u}=zi,c=n.progress;if(!n.isAnimating)return n.currentMode?u:l;if(n._cachedProgress===c&&n._cachedColors)return n._cachedColors;const f=n.targetMode?{sky:H(l.sky,fe.sky,u.sky,c),skyTop:H(l.skyTop,fe.skyTop,u.skyTop,c),skyHorizon:H(l.skyHorizon,fe.skyHorizon,u.skyHorizon,c),star:H(l.star,fe.star,u.star,c,!0),cloud:H(l.cloud,fe.cloud,u.cloud,c),ground:H(l.ground,fe.ground,u.ground,c),grass:H(l.grass,fe.grass,u.grass,c)}:{sky:H(u.sky,de.sky,l.sky,1-c),skyTop:H(u.skyTop,de.skyTop,l.skyTop,1-c),skyHorizon:H(u.skyHorizon,de.skyHorizon,l.skyHorizon,1-c),star:H(u.star,de.star,l.star,1-c,!0),cloud:H(u.cloud,de.cloud,l.cloud,1-c),ground:H(u.ground,de.ground,l.ground,1-c),grass:H(u.grass,de.grass,l.grass,1-c)};return i(h=>({...h,_cachedProgress:c,_cachedColors:f})),f},s=l=>{if(!n.isAnimating){t=null;return}l-n._lastFrameTime>=r&&(i("_lastFrameTime",l),i(u=>{const c=1/(60*Y.transitionSpeed/2),f=u.targetMode?u.progress+c:u.progress-c;return u.targetMode&&f>=1?{...u,currentMode:!0,progress:1,isAnimating:!1,_cachedProgress:-1,_cachedColors:null}:!u.targetMode&&f<=0?{...u,currentMode:!1,progress:0,isAnimating:!1,_cachedProgress:-1,_cachedColors:null}:{...u,progress:f}})),t=requestAnimationFrame(s)};return{colors:o,updateTheme:l=>{n.targetMode!==l&&i(u=>({...u,targetMode:l,isAnimating:!0,_lastFrameTime:0})),n.isAnimating&&!t&&(t=requestAnimationFrame(s))}}};var io=F('<svg preserveAspectRatio=none><defs><linearGradient id=skyGradient x1=0 y1=0 x2=0 y2=1><stop offset=0%></stop><stop offset=30%></stop><stop offset=70%></stop><stop offset=100%></stop></linearGradient><linearGradient id=terrainGradient x1=0 y1=0 x2=0 y2=1><stop offset=0%></stop><stop offset=100%></stop></linearGradient><linearGradient id=leftEdgeGradient x1=0 y1=0 x2=1 y2=0><stop offset=0% stop-color=black></stop><stop offset=100% stop-color=white></stop></linearGradient><linearGradient id=rightEdgeGradient x1=0 y1=0 x2=1 y2=0><stop offset=0% stop-color=white></stop><stop offset=100% stop-color=black></stop></linearGradient><mask id=chunkEdgeMask><rect width=100% height=100% fill=white></rect><rect x=0 width=50 height=100% fill=url(#leftEdgeGradient)></rect><rect x=100% width=50 height=100% transform="translate(-50, 0)"fill=url(#rightEdgeGradient)></rect></mask></defs><rect width=100% height=100% fill=url(#skyGradient)></rect><g class=terrain>'),oo=F("<svg><path class=terrain-chunk fill=url(#terrainGradient) mask=url(#chunkEdgeMask)></svg>",!1,!0);const so=e=>(()=>{var t=io(),r=t.firstChild,n=r.firstChild,i=n.firstChild,o=i.nextSibling,s=o.nextSibling,a=s.nextSibling,l=n.nextSibling,u=l.firstChild,c=u.nextSibling,f=r.nextSibling,h=f.nextSibling;return t.style.setProperty("position","fixed"),t.style.setProperty("top","0"),t.style.setProperty("left","0"),t.style.setProperty("z-index","-1"),t.style.setProperty("pointer-events","none"),t.style.setProperty("transition","all 0.5s ease"),i.style.setProperty("transition","stop-color 0.5s ease"),o.style.setProperty("transition","stop-color 0.5s ease"),s.style.setProperty("transition","stop-color 0.5s ease"),a.style.setProperty("transition","stop-color 0.5s ease"),u.style.setProperty("transition","stop-color 0.5s ease"),c.style.setProperty("transition","stop-color 0.5s ease"),f.style.setProperty("transition","all 0.5s ease"),_(t,()=>e.children,h),_(h,()=>e.chunks.map(g=>(()=>{var d=oo();return d.style.setProperty("transition","fill 0.5s ease"),E(m=>{var w=g.pathData,y=`translate(${g.x}, 0)`;return w!==m.e&&x(d,"d",m.e=w),y!==m.t&&x(d,"transform",m.t=y),m},{e:void 0,t:void 0}),d})())),E(g=>{var d=e.width,m=e.height,w=`0 0 ${e.width} ${e.height}`,y=`rgb(${e.colors.skyTop.r}, ${e.colors.skyTop.g}, ${e.colors.skyTop.b})`,v=`rgb(${e.colors.sky.r}, ${e.colors.sky.g}, ${e.colors.sky.b})`,p=`rgb(${e.colors.sky.r}, ${e.colors.sky.g}, ${e.colors.sky.b})`,k=`rgb(${e.colors.skyHorizon.r}, ${e.colors.skyHorizon.g}, ${e.colors.skyHorizon.b})`,O=`rgb(${e.colors.grass.r}, ${e.colors.grass.g}, ${e.colors.grass.b})`,I=`rgb(${e.colors.ground.r}, ${e.colors.ground.g}, ${e.colors.ground.b})`;return d!==g.e&&x(t,"width",g.e=d),m!==g.t&&x(t,"height",g.t=m),w!==g.a&&x(t,"viewBox",g.a=w),y!==g.o&&x(i,"stop-color",g.o=y),v!==g.i&&x(o,"stop-color",g.i=v),p!==g.n&&x(s,"stop-color",g.n=p),k!==g.s&&x(a,"stop-color",g.s=k),O!==g.h&&x(u,"stop-color",g.h=O),I!==g.r&&x(c,"stop-color",g.r=I),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),t})(),ao=e=>{const[t,r]=U(0),[n,i]=Xe([]),[o,s]=Xe({width:window.innerWidth,height:window.innerHeight}),a=no(e.isDark);let l=null,u=!1,c=!1;const f=()=>({windowWidth:o.width,windowHeight:o.height,chunkSize:Wi.chunkSize,time:t(),noiseScale:ft.noiseScale,minGroundHeight:ft.minGroundHeight,maxGroundHeight:ft.maxGroundHeight,groundSpeed:Y.groundSpeed,startX:0}),h=()=>{l&&(cancelAnimationFrame(l),l=null),i([]),r(0)},g=async()=>{try{h(),u=!0;const y=await Ce.submitTask({entityType:"TERRAIN",action:"INITIALIZE",payload:{config:f()}});y.data&&i(y.data),!c&&!l&&(l=requestAnimationFrame(d))}catch(y){console.error("Error initializing terrain:",y)}finally{u=!1}},d=async()=>{if(!c){if(r(y=>y+Y.groundSpeed),!u)try{const y=await Ce.submitTask({entityType:"TERRAIN",action:"UPDATE",payload:{entities:n,config:f()}});y.data&&i(y.data)}catch(y){console.error("Error updating terrain:",y)}a.updateTheme(e.isDark),c||(l=requestAnimationFrame(d))}};let m=null;const w=()=>{c=!0,h(),m&&window.clearTimeout(m),m=window.setTimeout(()=>{s({width:window.innerWidth,height:window.innerHeight}),c=!1,g()},200)};return me(()=>{g(),window.addEventListener("resize",w)}),ye(()=>{window.removeEventListener("resize",w),h(),m&&window.clearTimeout(m)}),C(so,{get width(){return o.width},get height(){return o.height},get colors(){return a.colors()},chunks:n,get isDark(){return e.isDark},get children(){return[C(ro,{get isDark(){return e.isDark},get width(){return o.width},get height(){return o.height}}),C(Yi,{get isDark(){return e.isDark}}),C(Qi,{get isDark(){return e.isDark},get colors(){return a.colors()}})]}})};var lo=F("<div><div><main>");const Xt=e=>{const t=()=>{const s=localStorage.getItem("theme-preference");return s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},[r,n]=U(t());rr(()=>{const s=r()?"dark":"light";document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme-preference",s)}),me(()=>{const s=window.matchMedia("(prefers-color-scheme: dark)"),a=l=>{localStorage.getItem("theme-preference")||n(l.matches)};return s.addEventListener("change",a),()=>s.removeEventListener("change",a)});const i=()=>{n(s=>!s)},o={appContainer:ge`
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            overflow-x: clip;
            width: 100%;
            min-height: 100vh;
            position: relative;

            * {
                box-sizing: border-box;
            }
        `,mainContainer:ge`
            position: relative;
            min-height: 100vh;
            width: 100%;
            overflow-x: clip;
            transition: all 0.3s ease;
        `,mainContent:ge`
            padding-top: 80px;
            position: relative;
            z-index: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        `};return(()=>{var s=lo(),a=s.firstChild,l=a.firstChild;return _(s,C(ao,{get isDark(){return r()}}),a),_(a,C(Hi,{onThemeToggle:i,get isDark(){return r()},get theme(){return r()?Mt:Ut}}),l),_(l,()=>e.children({theme:r()?Mt:Ut,isDark:r(),onThemeToggle:i})),E(u=>{var c=o.appContainer,f=r()?"dark":"light",h=o.mainContainer,g=o.mainContent;return c!==u.e&&ae(s,u.e=c),f!==u.t&&x(s,"data-theme",u.t=f),h!==u.a&&ae(a,u.a=h),g!==u.o&&ae(l,u.o=g),u},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()};var co=F("<div class=featured-label>Featured"),uo=F("<div class=tags>"),fo=F('<a target=_blank rel="noopener noreferrer"class=button>Download'),ho=F("<div class=card><div class=image-container><img loading=lazy class=image></div><div class=info><h3 class=title></h3><p class=description></p><div class=button-container>",!0,!1),go=F("<span class=tag>"),mo=F('<a target=_blank rel="noopener noreferrer"class="button primary">View Project'),Jt=F('<a target=_blank rel="noopener noreferrer"class="button small">'),yo=F("<div>");const wo=e=>{const t=S(()=>e.isDark?{bgGradient:"linear-gradient(145deg, rgba(220, 225, 235, 0.6), rgba(200, 208, 224, 0.6))",glow:"rgba(220, 225, 235, 0.4)",glowHover:"rgba(220, 225, 235, 0.5)",borderColor:"rgba(220, 225, 235, 0.6)",textColor:"#000"}:{bgGradient:"linear-gradient(145deg, rgba(255, 171, 64, 0.8), rgba(255, 171, 64, 0.8))",glow:"rgba(255, 171, 64, 0.6)",glowHover:"rgba(255, 171, 64, 0.7)",borderColor:"rgba(255, 171, 64, 0.8)",textColor:"#fff"}),r=S(()=>ge`
    .card {
      position: relative;
      display: grid;
      grid-template-rows: auto 1fr;
      background: ${e.theme.gallery.cardBg};
      color: ${e.isDark?"#fff":"rgba(255, 255, 255, 0.87)"};
      border-radius: 16px;
      box-shadow: 0 4px 6px ${e.theme.gallery.shadowColor};
      transition: all 0.3s ease;
      border: ${e.project.isFeatured?`2px solid ${t().borderColor}`:`1px solid ${e.theme.gallery.borderColor}`};
      height: 100%;
      transform: ${e.project.isFeatured,"scale(1)"};
      grid-column: ${e.project.isFeatured?"span 2":"span 1"};
      grid-row: ${e.project.isFeatured?"span 2":"span 1"};

      ${e.project.isFeatured&&`
        box-shadow: 0 0 40px ${t().glow};  // Increased spread from 20px
        background: ${e.isDark?"#E1E6F0":"#FFAB40"}; /* Solid sun color */
      `}

      &:hover {
        transform: ${e.project.isFeatured?"scale(1.01)":"translateY(-5px)"};
        box-shadow: ${e.project.isFeatured?`0 0 60px ${t().glowHover}`:"0 8px 16px "+e.theme.gallery.shadowColor};
      }
    }

    .card-link {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    .image-container {
      position: relative;
      padding-bottom: ${e.project.isFeatured?"50%":"60%"};
      width: 100%;
      overflow: hidden;
      border-radius: 16px 16px 0 0;
    }

    .featured-label {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: ${e.isDark?"rgba(220, 225, 235, 0.9)":"rgba(255, 171, 64, 0.9)"};
      color: ${e.isDark?"#000":"#fff"};
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 1;
      font-family: var(--font-subtitle);
      letter-spacing: 0.02em;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: ${e.project.isFeatured?"1rem":"0.75rem"};
      padding: ${e.project.isFeatured?"1.5rem":"1.25rem"};
      background: transparent;
      border-radius: 0 0 16px 16px;
      transition: all 0.3s ease;
    }

    .title {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      font-family: var(--font-title);
      color: ${e.project.isFeatured?t().textColor:e.theme.gallery.titleColor};
      transition: color 0.3s ease;
      letter-spacing: -0.01em;
    }

    .description {
      margin: 0;
      color: ${e.project.isFeatured?t().textColor:e.theme.gallery.descriptionColor};
      font-size: 0.85rem;
      line-height: 1.5;
      font-family: var(--font-body);
      opacity: ${e.project.isFeatured?"0.9":"1"};
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 0.75rem;
    }

    .tag {
      background: ${e.project.isFeatured?e.isDark?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.15)":e.theme.gallery.buttonBg};
      color: ${e.project.isFeatured?t().textColor:e.theme.gallery.buttonText};
      padding: 0.2rem 0.5rem;
      border-radius: 8px;
      font-size: 0.7rem;
      font-family: var(--font-subtitle);
      white-space: nowrap;
      letter-spacing: 0.02em;
      border: 1px solid ${e.project.isFeatured?e.isDark?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.25)":"rgba(0, 0, 0, 0.1)"};
    }

    .button-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .button {
      background: ${e.project.isFeatured?e.isDark?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.25)":e.theme.gallery.buttonBg};
      color: ${e.project.isFeatured?t().textColor:e.theme.gallery.buttonText};
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      font-size: 0.8rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.3s ease;
      font-family: var(--font-subtitle);
      letter-spacing: 0.02em;
      font-weight: 500;
      
      &:hover {
        background: ${e.project.isFeatured?e.isDark?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.35)":e.theme.gallery.buttonHoverBg};
        transform: translateY(-2px);
      }

      &.primary {
        background: ${e.project.isFeatured?"#000":e.theme.gallery.primaryButtonBg};
        color: ${e.project.isFeatured?"#fff":e.theme.gallery.primaryButtonText};
        font-weight: 600;
        
        &:hover {
          background: ${e.project.isFeatured?"#333":e.theme.gallery.primaryButtonHoverBg};
        }
      }

      &.small {
        padding: 0.3rem 0.6rem;
        font-size: 0.75rem;
      }
    }
  `),n=()=>(()=>{var i=ho(),o=i.firstChild,s=o.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling,c=u.nextSibling;return _(o,C(oe,{get when(){return e.project.isFeatured},get children(){return co()}}),s),_(l,()=>e.project.title),_(u,()=>e.project.description),_(a,C(oe,{get when(){return e.project.tags?.length},get children(){var f=uo();return _(f,C(Ne,{get each(){return e.project.tags},children:h=>(()=>{var g=go();return _(g,h),g})()})),f}}),c),_(c,C(oe,{get when(){return e.project.demoUrl||e.project.pdfId},get children(){return S(()=>!!e.project.demoUrl)()?(()=>{var f=mo();return E(()=>x(f,"href",e.project.demoUrl)),f})():C(pt,{get href(){return`/pdf/${e.project.pdfId}`},class:"button primary",children:"View Project"})}}),null),_(c,C(oe,{get when(){return e.project.downloadUrl},get children(){var f=fo();return E(()=>x(f,"href",e.project.downloadUrl)),f}}),null),_(c,C(oe,{get when(){return e.project.playlists},get children(){return C(Ne,{get each(){return e.project.playlists},children:f=>(()=>{var h=Jt();return _(h,()=>f.name),E(()=>x(h,"href",f.url)),h})()})}}),null),_(c,C(oe,{get when(){return e.project.relatedLinks},get children(){return C(Ne,{get each(){return e.project.relatedLinks},children:f=>(()=>{var h=Jt();return _(h,()=>f.name),E(()=>x(h,"href",f.url)),h})()})}}),null),E(f=>{var h=e.project.imagePath,g=e.project.title;return h!==f.e&&x(s,"src",f.e=h),g!==f.t&&x(s,"alt",f.t=g),f},{e:void 0,t:void 0}),i})();return(()=>{var i=yo();return _(i,(()=>{var o=S(()=>!!(e.project.isFeatured&&e.project.pdfId));return()=>o()?C(pt,{get href(){return`/pdf/${e.project.pdfId}`},class:"card-link",get children(){return C(n,{})}}):C(n,{})})()),E(()=>ae(i,r())),i})()};var bo=F("<div><div class=wrapper><div class=container>");const po=e=>{const t=S(()=>ge`
    .wrapper {
      position: relative;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: max(2rem, 5vh) max(2rem, 5vw);
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      width: 100%;
      position: relative;
      border-radius: 24px;
      padding: max(1.5rem, 3vh) max(1.5rem, 3vw);
      isolation: isolate;

      /* Base glass effect */
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        backdrop-filter: blur(12px) saturate(160%);
        -webkit-backdrop-filter: blur(12px) saturate(160%);
        background: ${e.isDark?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.12)"};
        border-radius: inherit;
        border: 1px solid ${e.isDark?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.16)"};
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
      }

      /* Gradient overlay */
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(
          145deg,
          ${e.isDark?"rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%)":"rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)"}
        );
        border-radius: inherit;
        opacity: 0.8;
      }

      /* Inner shadow for depth */
      box-shadow: inset 0 0 30px ${e.isDark?"rgba(255, 255, 255, 0.03)":"rgba(255, 255, 255, 0.05)"};

      @container (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @container (max-width: 1199px) and (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @container (max-width: 799px) {
        grid-template-columns: 1fr;
      }
    }
  `);return(()=>{var r=bo(),n=r.firstChild,i=n.firstChild;return _(i,C(Ne,{get each(){return e.projects},children:o=>C(wo,{project:o,get theme(){return e.theme},get isDark(){return e.isDark}})})),E(()=>ae(r,t())),r})()},vo="/Klaes-Soerensen-Portfolio-Public/assets/URSA-DGfdB_9a.png",xo="/Klaes-Soerensen-Portfolio-Public/assets/the_snake_game-BxWRTFzw.png",ko="/Klaes-Soerensen-Portfolio-Public/assets/terrain_generator-BsT39lGQ.png",Co="/Klaes-Soerensen-Portfolio-Public/assets/ftl-COMatZTl.png",So="/Klaes-Soerensen-Portfolio-Public/assets/menger_sponge-DV303b63.png",$o="/Klaes-Soerensen-Portfolio-Public/assets/sierpinski_triangle_fractal-oH3VLpJ3.png",Ao="/Klaes-Soerensen-Portfolio-Public/assets/sea_of_trash-CRy04hnB.png",Po=[{imagePath:vo,title:"U.R.S.A - Educational Touch Typing Game",description:"A space-themed educational game developed in collaboration with Vitec MV to teach touch typing through gamification. Features multiplayer minigames, persistent colony progression, and support for multiple languages. Created with typed SolidJS and Go.",pdfId:"SDU - BSC - Developing Educational Games for Teaching Touch Typing",tags:["Educational Game","Touch Typing","Multiplayer","Web Development"],isFeatured:!0,relatedLinks:[{name:"Vitec MV",url:"https://www.vitec-mv.com/"}]},{imagePath:xo,title:"The Snake Game In 3D",description:"A passion project developed during summer vacation, inspired by The Coding Train's coding challenges. Created independently in 3D without following the tutorial directly.",demoUrl:"https://www.youtube.com/watch?v=yogBioVQJog",downloadUrl:"https://drive.google.com/file/d/1Jg7QSQe586pStXBInt5RwWCTmETP3RUq/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["3D","Game Development","JavaScript"]},{imagePath:ko,title:"Terrain Generator",description:"An expanded project based on The Coding Train's 'The Nature of Code' series. A visual terrain generator created for relaxation purposes.",demoUrl:"https://youtu.be/2IuRP7Y1hus",downloadUrl:"https://drive.google.com/file/d/1LivnnXRGxswARTboDR9HlbvFfWl78DzD/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Procedural Generation","Graphics"]},{imagePath:Co,title:"Faster Than Light",description:"A visualization of faster-than-light space travel. Extended version created for Twitch streamer Rand118's stream pause screen.",demoUrl:"https://www.youtube.com/watch?v=JwuM0GIAC70",downloadUrl:"https://drive.google.com/file/d/1NHp2M079nYoS8IBzzcbooB0pcHh2X7TI/view",modifiedDownloadUrl:"https://drive.google.com/file/d/1Z94k0XlHET0yHqDE5ofTrGTBdLM6J1Lw/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],relatedLinks:[{name:"Modified Version",url:"https://drive.google.com/file/d/1Z94k0XlHET0yHqDE5ofTrGTBdLM6J1Lw/view"}],tags:["Visual Effects","Streaming"]},{imagePath:So,title:"Menger Sponge Fractal",description:"A fractal visualization project that splits cubes into 27 new cubes, removing those in contact with axis. Includes attempted optimization for out-of-view cubes and zoom functionality.",demoUrl:"https://youtu.be/wsgn0FZhwNk",downloadUrl:"https://drive.google.com/file/d/1477pASOHnVxJCAAn7us2XZputru4MU_2/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Fractals","3D","Optimization"]},{imagePath:$o,title:"Sierpinski's Triangle Fractal",description:"A fractal generation program using a point-placement algorithm to create Sierpinski's Triangle through iterative middle-point selection. Place three points, one for each corner. Place a point at any location within the corners. Pick a random corner point and the newest point. Place a point in the middle of a line going through the two points. Repeat this process until the fractal appears.",demoUrl:"https://youtu.be/NKCWcQS50jM",downloadUrl:"https://drive.google.com/file/d/1qY2NqLm5v8WDG63HWjjMrw-4edtX6gEf/view",playlists:[{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Fractals","Mathematics"]},{imagePath:Ao,title:"Sea of Trash",description:"A semester project educational game connected to 'The Global Goals for Sustainable Development'. Players clean ecosystems by collecting trash and managing invasive species while learning through informative content. Features include: inventory management, health and air supply systems, currency-based upgrades, and a tile-based world with depth-influenced random item spawns. The map is generated using an image-to-tile conversion system for easy editing.",downloadUrl:"https://drive.google.com/file/d/1TEpBoGfbxeDcTxyC9BQ7L757GHS1FX9D/view",relatedLinks:[{name:"Global Goals",url:"https://www.verdensmaalene.dk/"}],tags:["Educational","Game Development","Environmental"]}],To=e=>C(po,{projects:Po,get isDark(){return e.isDark},get theme(){return e.theme},get onThemeToggle(){return e.onThemeToggle}}),[Oo,Qt]=Xe({isFullscreen:!1}),_o=()=>({isFullscreen:()=>Oo.isFullscreen,toggleFullscreen:()=>{Qt("isFullscreen",r=>!r)},setFullscreen:r=>{Qt("isFullscreen",r)}});var Eo=F('<div><div class=outer-container><div class=viewer-container><div class=controls><button class=button>← Back to Gallery</button><button class=button></button></div><div class=pdf-container><iframe class=pdf-frame title="PDF Viewer">'),Do=F("<div class=loading-message><p>Loading PDF..."),Fo=F('<div class=error-message><p>Unable to display PDF directly.</p><p>You can try downloading it <a target=_blank rel="noopener noreferrer">here</a>.');const Ro=e=>{const t=_n(),r=Tn(),[n,i]=U(!0),[o,s]=U(!1),{isFullscreen:a,toggleFullscreen:l,setFullscreen:u}=_o(),c=S(()=>ge`
    .outer-container {
      position: fixed;
      top: 60px; /* Account for navbar height */
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${a()?"0":"2rem"};
      background: rgba(0, 0, 0, 0.2);
      z-index: 100; /* Below navbar */
    }

    .viewer-container {
      width: ${a()?"100%":"80%"};
      height: ${a()?"100%":"90%"};
      background: ${e.theme.gallery.cardBg};
      border-radius: ${a()?"0":"8px"};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      background: ${e.theme.gallery.cardBg};
      border-bottom: 1px solid ${e.theme.gallery.shadowColor};
      z-index: 10;
      flex-shrink: 0;
      height: 3.5rem;
      position: sticky;
      top: 0;
    }

    .pdf-container {
      flex-grow: 1;
      height: calc(100% - 3.5rem);
      overflow: hidden;
      position: relative;
    }

    .pdf-frame {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }

    .loading-message, .error-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: ${e.theme.textColor};
      background: ${e.theme.gallery.cardBg};
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: ${e.theme.gallery.cardBg};
      border: 1px solid ${e.theme.textColor};
      color: ${e.theme.textColor};
      cursor: pointer;
      font-family: var(--font-subtitle);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease;
      
      &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0px);
      }
    }
  `),f=()=>{a()&&u(!1),r("/")},h=`/Klaes-Soerensen-Portfolio-Public/pdfs/${t.id}.pdf`;console.log("Attempting to load PDF from:",h);const g=d=>{const m=d.target;i(!1);try{m.contentWindow?.document.body.innerHTML.includes("404")&&(s(!0),console.error("PDF not found at path:",h))}catch{s(!1)}};return(()=>{var d=Eo(),m=d.firstChild,w=m.firstChild,y=w.firstChild,v=y.firstChild,p=v.nextSibling,k=y.nextSibling,O=k.firstChild;return v.$$click=f,Pt(p,"click",l,!0),_(p,()=>a()?"Exit Fullscreen":"Fullscreen"),_(k,(()=>{var I=S(()=>!!n());return()=>I()&&Do()})(),O),O.addEventListener("load",g),x(O,"src",`${h}#view=FitH&zoom=100`),_(k,(()=>{var I=S(()=>!!o());return()=>I()&&(()=>{var b=Fo(),B=b.firstChild,G=B.nextSibling,$=G.firstChild,R=$.nextSibling;return x(R,"href",h),b})()})(),null),E(()=>ae(d,c())),d})()};et(["click"]);console.log("Script starting...");const Lr=document.getElementById("app");if(!Lr)throw new Error("Root element not found. Make sure there is a div with id 'app' in your HTML.");an(()=>C(Kn,{base:"/Klaes-Soerensen-Portfolio-Public",get children(){return[C(Nt,{path:"/",component:()=>C(Xt,{children:e=>C(To,{get theme(){return e.theme},get isDark(){return e.isDark},get onThemeToggle(){return e.onThemeToggle}})})}),C(Nt,{path:"/pdf/:id",component:()=>C(Xt,{children:e=>C(Ro,{get theme(){return e.theme},get isDark(){return e.isDark}})})})]}}),Lr);
