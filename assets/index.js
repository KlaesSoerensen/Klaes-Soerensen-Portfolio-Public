(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const Dr=(e,t)=>e===t,q=Symbol("solid-proxy"),Jt=typeof Proxy=="function",dt=Symbol("solid-track"),We={equals:Dr};let Qt=sr;const le=1,ze=2,Zt={owned:null,cleanups:null,context:null,owner:null};var T=null;let st=null,Lr=null,I=null,G=null,te=null,Ze=0;function Pe(e,t){const r=I,n=T,i=e.length===0,o=t===void 0?n:t,s=i?Zt:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=i?e:()=>e(()=>V(()=>Te(s)));T=s,I=null;try{return ce(a,!0)}finally{I=r,T=n}}function M(e,t){t=t?Object.assign({},We,t):We;const r={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=i=>(typeof i=="function"&&(i=i(r.value)),or(r,i));return[ir.bind(r),n]}function _(e,t,r){const n=$t(e,t,!1,le);Le(n)}function Ct(e,t,r){Qt=Mr;const n=$t(e,t,!1,le);n.user=!0,te?te.push(n):Le(n)}function S(e,t,r){r=r?Object.assign({},We,r):We;const n=$t(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,Le(n),ir.bind(n)}function Fr(e){return ce(e,!1)}function V(e){if(I===null)return e();const t=I;I=null;try{return e()}finally{I=t}}function er(e,t,r){const n=Array.isArray(e);let i;return o=>{let s;if(n){s=Array(e.length);for(let l=0;l<e.length;l++)s[l]=e[l]()}else s=e();const a=V(()=>t(s,i,o));return i=s,a}}function me(e){Ct(()=>V(e))}function ye(e){return T===null||(T.cleanups===null?T.cleanups=[e]:T.cleanups.push(e)),e}function ht(){return I}function tr(){return T}function rr(e,t){const r=T,n=I;T=e,I=null;try{return ce(t,!0)}catch(i){Pt(i)}finally{T=r,I=n}}function Nr(e){const t=I,r=T;return Promise.resolve().then(()=>{I=t,T=r;let n;return ce(e,!1),I=T=null,n?n.done:void 0})}function nr(e,t){const r=Symbol("context");return{id:r,Provider:Br(r),defaultValue:e}}function St(e){let t;return T&&T.context&&(t=T.context[e.id])!==void 0?t:e.defaultValue}function At(e){const t=S(e),r=S(()=>gt(t()));return r.toArray=()=>{const n=r();return Array.isArray(n)?n:n!=null?[n]:[]},r}function ir(){if(this.sources&&this.state)if(this.state===le)Le(this);else{const e=G;G=null,ce(()=>Ve(this),!1),G=e}if(I){const e=this.observers?this.observers.length:0;I.sources?(I.sources.push(this),I.sourceSlots.push(e)):(I.sources=[this],I.sourceSlots=[e]),this.observers?(this.observers.push(I),this.observerSlots.push(I.sources.length-1)):(this.observers=[I],this.observerSlots=[I.sources.length-1])}return this.value}function or(e,t,r){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&ce(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],s=st&&st.running;s&&st.disposed.has(o),(s?!o.tState:!o.state)&&(o.pure?G.push(o):te.push(o),o.observers&&ar(o)),s||(o.state=le)}if(G.length>1e6)throw G=[],new Error},!1)),t}function Le(e){if(!e.fn)return;Te(e);const t=Ze;jr(e,e.value,t)}function jr(e,t,r){let n;const i=T,o=I;I=T=e;try{n=e.fn(t)}catch(s){return e.pure&&(e.state=le,e.owned&&e.owned.forEach(Te),e.owned=null),e.updatedAt=r+1,Pt(s)}finally{I=o,T=i}(!e.updatedAt||e.updatedAt<=r)&&(e.updatedAt!=null&&"observers"in e?or(e,n):e.value=n,e.updatedAt=r)}function $t(e,t,r,n=le,i){const o={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:T,context:T?T.context:null,pure:r};return T===null||T!==Zt&&(T.owned?T.owned.push(o):T.owned=[o]),o}function Ke(e){if(e.state===0)return;if(e.state===ze)return Ve(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ze);)e.state&&t.push(e);for(let r=t.length-1;r>=0;r--)if(e=t[r],e.state===le)Le(e);else if(e.state===ze){const n=G;G=null,ce(()=>Ve(e,t[0]),!1),G=n}}function ce(e,t){if(G)return e();let r=!1;t||(G=[]),te?r=!0:te=[],Ze++;try{const n=e();return Ur(r),n}catch(n){r||(te=null),G=null,Pt(n)}}function Ur(e){if(G&&(sr(G),G=null),e)return;const t=te;te=null,t.length&&ce(()=>Qt(t),!1)}function sr(e){for(let t=0;t<e.length;t++)Ke(e[t])}function Mr(e){let t,r=0;for(t=0;t<e.length;t++){const n=e[t];n.user?e[r++]=n:Ke(n)}for(t=0;t<r;t++)Ke(e[t])}function Ve(e,t){e.state=0;for(let r=0;r<e.sources.length;r+=1){const n=e.sources[r];if(n.sources){const i=n.state;i===le?n!==t&&(!n.updatedAt||n.updatedAt<Ze)&&Ke(n):i===ze&&Ve(n,t)}}}function ar(e){for(let t=0;t<e.observers.length;t+=1){const r=e.observers[t];r.state||(r.state=ze,r.pure?G.push(r):te.push(r),r.observers&&ar(r))}}function Te(e){let t;if(e.sources)for(;e.sources.length;){const r=e.sources.pop(),n=e.sourceSlots.pop(),i=r.observers;if(i&&i.length){const o=i.pop(),s=r.observerSlots.pop();n<i.length&&(o.sourceSlots[s]=n,i[n]=o,r.observerSlots[n]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Te(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Gr(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Pt(e,t=T){throw Gr(e)}function gt(e){if(typeof e=="function"&&!e.length)return gt(e());if(Array.isArray(e)){const t=[];for(let r=0;r<e.length;r++){const n=gt(e[r]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}function Br(e,t){return function(n){let i;return _(()=>i=V(()=>(T.context={...T.context,[e]:n.value},At(()=>n.children))),void 0),i}}const Hr=Symbol("fallback");function Rt(e){for(let t=0;t<e.length;t++)e[t]()}function Wr(e,t,r={}){let n=[],i=[],o=[],s=0,a=t.length>1?[]:null;return ye(()=>Rt(o)),()=>{let l=e()||[],u=l.length,c,f;return l[dt],V(()=>{let h,d,m,w,y,x,p,k,E;if(u===0)s!==0&&(Rt(o),o=[],n=[],i=[],s=0,a&&(a=[])),r.fallback&&(n=[Hr],i[0]=Pe(L=>(o[0]=L,r.fallback())),s=1);else if(s===0){for(i=new Array(u),f=0;f<u;f++)n[f]=l[f],i[f]=Pe(g);s=u}else{for(m=new Array(u),w=new Array(u),a&&(y=new Array(u)),x=0,p=Math.min(s,u);x<p&&n[x]===l[x];x++);for(p=s-1,k=u-1;p>=x&&k>=x&&n[p]===l[k];p--,k--)m[k]=i[p],w[k]=o[p],a&&(y[k]=a[p]);for(h=new Map,d=new Array(k+1),f=k;f>=x;f--)E=l[f],c=h.get(E),d[f]=c===void 0?-1:c,h.set(E,f);for(c=x;c<=p;c++)E=n[c],f=h.get(E),f!==void 0&&f!==-1?(m[f]=i[c],w[f]=o[c],a&&(y[f]=a[c]),f=d[f],h.set(E,f)):o[c]();for(f=x;f<u;f++)f in m?(i[f]=m[f],o[f]=w[f],a&&(a[f]=y[f],a[f](f))):i[f]=Pe(g);i=i.slice(0,s=u),n=l.slice(0)}return i});function g(h){if(o[f]=h,a){const[d,m]=M(f);return a[f]=m,t(l[f],d)}return t(l[f])}}}function C(e,t){return V(()=>e(t||{}))}function Ne(){return!0}const mt={get(e,t,r){return t===q?r:e.get(t)},has(e,t){return t===q?!0:e.has(t)},set:Ne,deleteProperty:Ne,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ne,deleteProperty:Ne}},ownKeys(e){return e.keys()}};function at(e){return(e=typeof e=="function"?e():e)?e:{}}function zr(){for(let e=0,t=this.length;e<t;++e){const r=this[e]();if(r!==void 0)return r}}function Oe(...e){let t=!1;for(let s=0;s<e.length;s++){const a=e[s];t=t||!!a&&q in a,e[s]=typeof a=="function"?(t=!0,S(a)):a}if(Jt&&t)return new Proxy({get(s){for(let a=e.length-1;a>=0;a--){const l=at(e[a])[s];if(l!==void 0)return l}},has(s){for(let a=e.length-1;a>=0;a--)if(s in at(e[a]))return!0;return!1},keys(){const s=[];for(let a=0;a<e.length;a++)s.push(...Object.keys(at(e[a])));return[...new Set(s)]}},mt);const r={},n=Object.create(null);for(let s=e.length-1;s>=0;s--){const a=e[s];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let u=l.length-1;u>=0;u--){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(a,c);if(!n[c])n[c]=f.get?{enumerable:!0,configurable:!0,get:zr.bind(r[c]=[f.get.bind(a)])}:f.value!==void 0?f:void 0;else{const g=r[c];g&&(f.get?g.push(f.get.bind(a)):f.value!==void 0&&g.push(()=>f.value))}}}const i={},o=Object.keys(n);for(let s=o.length-1;s>=0;s--){const a=o[s],l=n[a];l&&l.get?Object.defineProperty(i,a,l):i[a]=l?l.value:void 0}return i}function Kr(e,...t){if(Jt&&q in e){const i=new Set(t.length>1?t.flat():t[0]),o=t.map(s=>new Proxy({get(a){return s.includes(a)?e[a]:void 0},has(a){return s.includes(a)&&a in e},keys(){return s.filter(a=>a in e)}},mt));return o.push(new Proxy({get(s){return i.has(s)?void 0:e[s]},has(s){return i.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!i.has(s))}},mt)),o}const r={},n=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,i),s=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let a=!1,l=0;for(const u of t)u.includes(i)&&(a=!0,s?n[l][i]=o.value:Object.defineProperty(n[l],i,o)),++l;a||(s?r[i]=o.value:Object.defineProperty(r,i,o))}return[...n,r]}const Vr=e=>`Stale read from <${e}>.`;function Ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return S(Wr(()=>e.each,e.children,t||void 0))}function oe(e){const t=e.keyed,r=S(()=>e.when,void 0,{equals:(n,i)=>t?n===i:!n==!i});return S(()=>{const n=r();if(n){const i=e.children;return typeof i=="function"&&i.length>0?V(()=>i(t?n:()=>{if(!V(r))throw Vr("Show");return e.when})):i}return e.fallback},void 0,void 0)}const Yr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Yr]),Xr=new Set(["innerHTML","textContent","innerText","children"]),Jr=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Qr=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Zr(e,t){const r=Qr[e];return typeof r=="object"?r[t]?r.$:void 0:r}const en=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function tn(e,t,r){let n=r.length,i=t.length,o=n,s=0,a=0,l=t[i-1].nextSibling,u=null;for(;s<i||a<o;){if(t[s]===r[a]){s++,a++;continue}for(;t[i-1]===r[o-1];)i--,o--;if(i===s){const c=o<n?a?r[a-1].nextSibling:r[o-a]:l;for(;a<o;)e.insertBefore(r[a++],c)}else if(o===a)for(;s<i;)(!u||!u.has(t[s]))&&t[s].remove(),s++;else if(t[s]===r[o-1]&&r[a]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(r[a++],t[s++].nextSibling),e.insertBefore(r[--o],c),t[i]=r[o]}else{if(!u){u=new Map;let f=a;for(;f<o;)u.set(r[f],f++)}const c=u.get(t[s]);if(c!=null)if(a<c&&c<o){let f=s,g=1,h;for(;++f<i&&f<o&&!((h=u.get(t[f]))==null||h!==c+g);)g++;if(g>c-a){const d=t[s];for(;a<c;)e.insertBefore(r[a++],d)}else e.replaceChild(r[a++],t[s++])}else s++;else t[s++].remove()}}}const Dt="_$DX_DELEGATE";function rn(e,t,r,n={}){let i;return Pe(o=>{i=o,t===document?e():O(t,e(),t.firstChild?null:void 0,r)},n.owner),()=>{i(),t.textContent=""}}function R(e,t,r){let n;const i=()=>{const s=document.createElement("template");return s.innerHTML=e,r?s.content.firstChild.firstChild:s.content.firstChild},o=t?()=>V(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return o.cloneNode=o,o}function et(e,t=window.document){const r=t[Dt]||(t[Dt]=new Set);for(let n=0,i=e.length;n<i;n++){const o=e[n];r.has(o)||(r.add(o),t.addEventListener(o,fn))}}function v(e,t,r){r==null?e.removeAttribute(t):e.setAttribute(t,r)}function nn(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)}function ae(e,t){t==null?e.removeAttribute("class"):e.className=t}function lr(e,t,r,n){if(n)Array.isArray(r)?(e[`$$${t}`]=r[0],e[`$$${t}Data`]=r[1]):e[`$$${t}`]=r;else if(Array.isArray(r)){const i=r[0];e.addEventListener(t,r[0]=o=>i.call(e,r[1],o))}else e.addEventListener(t,r,typeof r!="function"&&r)}function on(e,t,r={}){const n=Object.keys(t||{}),i=Object.keys(r);let o,s;for(o=0,s=i.length;o<s;o++){const a=i[o];!a||a==="undefined"||t[a]||(Lt(e,a,!1),delete r[a])}for(o=0,s=n.length;o<s;o++){const a=n[o],l=!!t[a];!a||a==="undefined"||r[a]===l||!l||(Lt(e,a,!0),r[a]=l)}return r}function sn(e,t,r){if(!t)return r?v(e,"style"):t;const n=e.style;if(typeof t=="string")return n.cssText=t;typeof r=="string"&&(n.cssText=r=void 0),r||(r={}),t||(t={});let i,o;for(o in r)t[o]==null&&n.removeProperty(o),delete r[o];for(o in t)i=t[o],i!==r[o]&&(n.setProperty(o,i),r[o]=i);return r}function an(e,t={},r,n){const i={};return _(()=>i.children=Ee(e,t.children,i.children)),_(()=>typeof t.ref=="function"&&ln(t.ref,e)),_(()=>cn(e,t,r,!0,i,!0)),i}function ln(e,t,r){return V(()=>e(t,r))}function O(e,t,r,n){if(r!==void 0&&!n&&(n=[]),typeof t!="function")return Ee(e,t,n,r);_(i=>Ee(e,t(),i,r),n)}function cn(e,t,r,n,i={},o=!1){t||(t={});for(const s in i)if(!(s in t)){if(s==="children")continue;i[s]=Ft(e,s,null,i[s],r,o,t)}for(const s in t){if(s==="children")continue;const a=t[s];i[s]=Ft(e,s,a,i[s],r,o,t)}}function un(e){return e.toLowerCase().replace(/-([a-z])/g,(t,r)=>r.toUpperCase())}function Lt(e,t,r){const n=t.trim().split(/\s+/);for(let i=0,o=n.length;i<o;i++)e.classList.toggle(n[i],r)}function Ft(e,t,r,n,i,o,s){let a,l,u,c,f;if(t==="style")return sn(e,r,n);if(t==="classList")return on(e,r,n);if(r===n)return n;if(t==="ref")o||r(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);n&&e.removeEventListener(g,n,typeof n!="function"&&n),r&&e.addEventListener(g,r,typeof r!="function"&&r)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);n&&e.removeEventListener(g,n,!0),r&&e.addEventListener(g,r,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),h=en.has(g);if(!h&&n){const d=Array.isArray(n)?n[0]:n;e.removeEventListener(g,d)}(h||r)&&(lr(e,g,r,h),h&&et([g]))}else t.slice(0,5)==="attr:"?v(e,t.slice(5),r):t.slice(0,5)==="bool:"?nn(e,t.slice(5),r):(f=t.slice(0,5)==="prop:")||(u=Xr.has(t))||(c=Zr(t,e.tagName))||(l=qr.has(t))||(a=e.nodeName.includes("-")||"is"in s)?(f&&(t=t.slice(5),l=!0),t==="class"||t==="className"?ae(e,r):a&&!l&&!u?e[un(t)]=r:e[c||t]=r):v(e,Jr[t]||t,r);return r}function fn(e){let t=e.target;const r=`$$${e.type}`,n=e.target,i=e.currentTarget,o=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),s=()=>{const l=t[r];if(l&&!t.disabled){const u=t[`${r}Data`];if(u!==void 0?l.call(t,u,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();o(l[0]);for(let u=0;u<l.length-2&&(t=l[u],!!s());u++){if(t._$host){t=t._$host,a();break}if(t.parentNode===i)break}}else a();o(n)}function Ee(e,t,r,n,i){for(;typeof r=="function";)r=r();if(t===r)return r;const o=typeof t,s=n!==void 0;if(e=s&&r[0]&&r[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===r))return r;if(s){let a=r[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),r=be(e,r,n,a)}else r!==""&&typeof r=="string"?r=e.firstChild.data=t:r=e.textContent=t}else if(t==null||o==="boolean")r=be(e,r,n);else{if(o==="function")return _(()=>{let a=t();for(;typeof a=="function";)a=a();r=Ee(e,a,r,n)}),()=>r;if(Array.isArray(t)){const a=[],l=r&&Array.isArray(r);if(yt(a,t,r,i))return _(()=>r=Ee(e,a,r,n,!0)),()=>r;if(a.length===0){if(r=be(e,r,n),s)return r}else l?r.length===0?Nt(e,a,n):tn(e,r,a):(r&&be(e),Nt(e,a));r=a}else if(t.nodeType){if(Array.isArray(r)){if(s)return r=be(e,r,n,t);be(e,r,null,t)}else r==null||r===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);r=t}}return r}function yt(e,t,r,n){let i=!1;for(let o=0,s=t.length;o<s;o++){let a=t[o],l=r&&r[e.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))i=yt(e,a,l)||i;else if(u==="function")if(n){for(;typeof a=="function";)a=a();i=yt(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||i}else e.push(a),i=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return i}function Nt(e,t,r=null){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],r)}function be(e,t,r,n){if(r===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let o=!1;for(let s=t.length-1;s>=0;s--){const a=t[s];if(i!==a){const l=a.parentNode===e;!o&&!s?l?e.replaceChild(i,a):e.insertBefore(i,r):l&&a.remove()}else o=!0}}else e.insertBefore(i,r);return[i]}const dn=!1;function cr(){let e=new Set;function t(i){return e.add(i),()=>e.delete(i)}let r=!1;function n(i,o){if(r)return!(r=!1);const s={to:i,options:o,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const a of e)a.listener({...s,from:a.location,retry:l=>{l&&(r=!0),a.navigate(i,{...o,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:n}}let wt;function Tt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),wt=window.history.state._depth}Tt();function hn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function gn(e,t){let r=!1;return()=>{const n=wt;Tt();const i=n==null?null:wt-n;if(r){r=!1;return}i&&t(i)?(r=!0,window.history.go(-i)):e()}}const mn=/^(?:[a-z0-9]+:)?\/\//i,yn=/^\/+|(\/)\/+$/g,ur="http://sr";function he(e,t=!1){const r=e.replace(yn,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function Me(e,t,r){if(mn.test(t))return;const n=he(e),i=r&&he(r);let o="";return!i||t.startsWith("/")?o=n:i.toLowerCase().indexOf(n.toLowerCase())!==0?o=n+i:o=i,(o||"/")+he(t,!o)}function wn(e,t){if(e==null)throw new Error(t);return e}function bn(e,t){return he(e).replace(/\/*(\*.*)?$/g,"")+he(t)}function fr(e){const t={};return e.searchParams.forEach((r,n)=>{t[n]=r}),t}function pn(e,t,r){const[n,i]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return a=>{const l=a.split("/").filter(Boolean),u=l.length-s;if(u<0||u>0&&i===void 0&&!t)return null;const c={path:s?"":"/",params:{}},f=g=>r===void 0?void 0:r[g];for(let g=0;g<s;g++){const h=o[g],d=l[g],m=h[0]===":",w=m?h.slice(1):h;if(m&&lt(d,f(w)))c.params[w]=d;else if(m||!lt(d,h))return null;c.path+=`/${d}`}if(i){const g=u?l.slice(-u).join("/"):"";if(lt(g,f(i)))c.params[i]=g;else return null}return c}}function lt(e,t){const r=n=>n.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?r(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp?t.test(e):!1}function vn(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((i,o)=>i+(o.startsWith(":")?2:3),n.length-(r===void 0?0:1))}function dr(e){const t=new Map,r=tr();return new Proxy({},{get(n,i){return t.has(i)||rr(r,()=>t.set(i,S(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function hr(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const i=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)i.push(r+=t[1]),n=n.slice(t[0].length);return hr(n).reduce((o,s)=>[...o,...i.map(a=>a+s)],[])}const xn=100,gr=nr(),tt=nr(),rt=()=>wn(St(gr),"<A> and 'use' router primitives can be only used inside a Route."),mr=()=>St(tt)||rt().base,kn=e=>{const t=mr();return S(()=>t.resolvePath(e()))},Cn=e=>{const t=rt();return S(()=>{const r=e();return r!==void 0?t.renderPath(r):r})},Sn=()=>rt().navigatorFactory(),An=()=>rt().location,$n=()=>mr().params;function Pn(e,t=""){const{component:r,load:n,children:i,info:o}=e,s=!i||Array.isArray(i)&&!i.length,a={key:e,component:r,load:n,info:o};return yr(e.path).reduce((l,u)=>{for(const c of hr(u)){const f=bn(t,c);let g=s?f:f.split("/*",1)[0];g=g.split("/").map(h=>h.startsWith(":")||h.startsWith("*")?h:encodeURIComponent(h)).join("/"),l.push({...a,originalPath:c,pattern:g,matcher:pn(g,!s,e.matchFilters)})}return l},[])}function Tn(e,t=0){return{routes:e,score:vn(e[e.length-1])*1e4-t,matcher(r){const n=[];for(let i=e.length-1;i>=0;i--){const o=e[i],s=o.matcher(r);if(!s)return null;n.unshift({...s,route:o})}return n}}}function yr(e){return Array.isArray(e)?e:[e]}function wr(e,t="",r=[],n=[]){const i=yr(e);for(let o=0,s=i.length;o<s;o++){const a=i[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=Pn(a,t);for(const u of l){r.push(u);const c=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!c)wr(a.children,u.pattern,r,n);else{const f=Tn([...r],n.length);n.push(f)}r.pop()}}}return r.length?n:n.sort((o,s)=>s.score-o.score)}function br(e,t){for(let r=0,n=e.length;r<n;r++){const i=e[r].matcher(t);if(i)return i}return[]}function On(e,t){const r=new URL(ur),n=S(l=>{const u=e();try{return new URL(u,r)}catch{return console.error(`Invalid path ${u}`),l}},r,{equals:(l,u)=>l.href===u.href}),i=S(()=>n().pathname),o=S(()=>n().search,!0),s=S(()=>n().hash),a=()=>"";return{get pathname(){return i()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return a()},query:dr(er(o,()=>fr(n())))}}let ie;function En(e,t,r,n={}){const{signal:[i,o],utils:s={}}=e,a=s.parsePath||(A=>A),l=s.renderPath||(A=>A),u=s.beforeLeave||cr(),c=Me("",n.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!i().value&&o({value:c,replace:!0,scroll:!1});const[f,g]=M(!1),h=async A=>{g(!0);try{await Nr(A)}finally{g(!1)}},[d,m]=M(i().value),[w,y]=M(i().state),x=On(d,w),p=[],k=M([]),E={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(A){return Me(c,A)}};return _(()=>{const{value:A,state:D}=i();V(()=>{A!==d()&&h(()=>{ie="native",m(A),y(D),k[1]([])}).then(()=>{ie=void 0})})}),{base:E,location:x,isRouting:f,renderPath:l,parsePath:a,navigatorFactory:b,beforeLeave:u,preloadRoute:j,singleFlight:n.singleFlight===void 0?!0:n.singleFlight,submissions:k};function L(A,D,z){V(()=>{if(typeof D=="number"){D&&(s.go?s.go(D):console.warn("Router integration does not support relative routing"));return}const{replace:we,resolve:ue,scroll:Z,state:re}={replace:!1,resolve:!0,scroll:!0,...z},ne=ue?A.resolvePath(D):Me("",D);if(ne===void 0)throw new Error(`Path '${D}' is not a routable path`);if(p.length>=xn)throw new Error("Too many redirects");const It=d();if((ne!==It||re!==w())&&!dn){if(u.confirm(ne,z)){const Rr=p.push({value:It,replace:we,scroll:Z,state:w()});h(()=>{ie="navigate",m(ne),y(re),k[1]([])}).then(()=>{p.length===Rr&&(ie=void 0,B({value:ne,state:re}))})}}})}function b(A){return A=A||St(tt)||E,(D,z)=>L(A,D,z)}function B(A){const D=p[0];D&&((A.value!==D.value||A.state!==D.state)&&o({...A,replace:D.replace,scroll:D.scroll}),p.length=0)}function j(A,D){const z=br(r(),A.pathname),we=ie;ie="preload";for(let ue in z){const{route:Z,params:re}=z[ue];Z.component&&Z.component.preload&&Z.component.preload();const{load:ne}=Z;D&&ne&&rr(t(),()=>ne({params:re,location:{pathname:A.pathname,search:A.search,hash:A.hash,query:fr(A),state:null,key:""},intent:"preload"}))}ie=we}}function _n(e,t,r,n,i){const{base:o,location:s}=e,{pattern:a,component:l,load:u}=n().route,c=S(()=>n().path);l&&l.preload&&l.preload();const f=u?u({params:i,location:s,intent:ie||"initial"}):void 0;return{parent:t,pattern:a,path:c,params:i,outlet:()=>l?C(l,{params:i,location:s,data:f,get children(){return r()}}):r(),resolvePath(h){return Me(o.path(),h,c())}}}const In=e=>t=>{const{base:r}=t,n=At(()=>t.children),i=S(()=>wr(t.root?{component:t.root,load:t.rootLoad,children:n()}:n(),t.base||""));let o;const s=En(e,()=>o,i,{base:r,singleFlight:t.singleFlight});return e.create&&e.create(s),C(gr.Provider,{value:s,get children(){return[S(()=>(o=tr())&&null),C(Rn,{routerState:s,get branches(){return i()}})]}})};function Rn(e){const t=S(()=>br(e.branches,e.routerState.location.pathname)),r=dr(()=>{const s=t(),a={};for(let l=0;l<s.length;l++)Object.assign(a,s[l].params);return a}),n=[];let i;const o=S(er(t,(s,a,l)=>{let u=a&&s.length===a.length;const c=[];for(let f=0,g=s.length;f<g;f++){const h=a&&a[f],d=s[f];l&&h&&d.route.key===h.route.key?c[f]=l[f]:(u=!1,n[f]&&n[f](),Pe(m=>{n[f]=m,c[f]=_n(e.routerState,c[f-1]||e.routerState.base,Dn(()=>o()[f+1]),()=>t()[f],r)}))}return n.splice(s.length).forEach(f=>f()),l&&u?l:(i=c[0],c)}));return C(oe,{get when(){return o()&&i},keyed:!0,children:s=>C(tt.Provider,{value:s,get children(){return s.outlet()}})})}const Dn=e=>()=>C(oe,{get when(){return e()},keyed:!0,children:t=>C(tt.Provider,{value:t,get children(){return t.outlet()}})}),jt=e=>{const t=At(()=>e.children);return Oe(e,{get children(){return t()}})};function Ln([e,t],r,n){return[e,i=>t(n(i))]}function Fn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Nn(e){let t=!1;const r=i=>typeof i=="string"?{value:i}:i,n=Ln(M(r(e.get()),{equals:(i,o)=>i.value===o.value}),void 0,i=>(!t&&e.set(i),i));return e.init&&ye(e.init((i=e.get())=>{t=!0,n[1](r(i)),t=!1})),In({signal:n,create:e.create,utils:e.utils})}function jn(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Un(e,t){const r=Fn(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0)}const Mn=new Map;function Gn(e=!0,t=!1,r="/_server"){return n=>{const i=n.base.path(),o=n.navigatorFactory(n.base);let s={};function a(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function l(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const m=d.composedPath().find(E=>E instanceof Node&&E.nodeName.toUpperCase()==="A");if(!m||t&&!m.hasAttribute("link"))return;const w=a(m),y=w?m.href.baseVal:m.href;if((w?m.target.baseVal:m.target)||!y&&!m.hasAttribute("state"))return;const p=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||p&&p.includes("external"))return;const k=w?new URL(y,document.baseURI):new URL(y);if(!(k.origin!==window.location.origin||i&&k.pathname&&!k.pathname.toLowerCase().startsWith(i.toLowerCase())))return[m,k]}function u(d){const m=l(d);if(!m)return;const[w,y]=m,x=n.parsePath(y.pathname+y.search+y.hash),p=w.getAttribute("state");d.preventDefault(),o(x,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:p&&JSON.parse(p)})}function c(d){const m=l(d);if(!m)return;const[w,y]=m;s[y.pathname]||n.preloadRoute(y,w.getAttribute("preload")!=="false")}function f(d){const m=l(d);if(!m)return;const[w,y]=m;s[y.pathname]||(s[y.pathname]=setTimeout(()=>{n.preloadRoute(y,w.getAttribute("preload")!=="false"),delete s[y.pathname]},200))}function g(d){const m=l(d);if(!m)return;const[,w]=m;s[w.pathname]&&(clearTimeout(s[w.pathname]),delete s[w.pathname])}function h(d){let m=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const y=new URL(m,ur);if(m=n.parsePath(y.pathname+y.search),!m.startsWith(r))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=Mn.get(m);if(w){d.preventDefault();const y=new FormData(d.target);d.submitter&&d.submitter.name&&y.append(d.submitter.name,d.submitter.value),w.call(n,y)}}et(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",g),document.addEventListener("focusin",c),document.addEventListener("touchstart",c)),document.addEventListener("submit",h),ye(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",c),document.removeEventListener("touchstart",c)),document.removeEventListener("submit",h)})}}function Bn(e){const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),r=cr();return Nn({get:t,set({value:n,replace:i,scroll:o,state:s}){i?window.history.replaceState(hn(s),"",n):window.history.pushState(s,"",n),Un(window.location.hash.slice(1),o),Tt()},init:n=>jn(window,"popstate",gn(n,i=>{if(i&&i<0)return!r.confirm(i);{const o=t();return!r.confirm(o.value,{state:o.state})}})),create:Gn(e.preload,e.explicitLinks,e.actionBase),utils:{go:n=>window.history.go(n),beforeLeave:r}})(e)}var Hn=R("<a>");function bt(e){e=Oe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Kr(e,["href","state","class","activeClass","inactiveClass","end"]),r=kn(()=>e.href),n=Cn(r),i=An(),o=S(()=>{const s=r();if(s===void 0)return[!1,!1];const a=he(s.split(/[?#]/,1)[0]).toLowerCase(),l=he(i.pathname).toLowerCase();return[e.end?a===l:l.startsWith(a),a===l]});return(()=>{var s=Hn();return an(s,Oe(t,{get href(){return n()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o()[0],[e.activeClass]:o()[0],...t.classList}},link:"",get"aria-current"(){return o()[1]?"page":void 0}}),!1),s})()}const pt=Symbol("store-raw"),ve=Symbol("store-node"),ee=Symbol("store-has"),pr=Symbol("store-self");function vr(e){let t=e[q];if(!t&&(Object.defineProperty(e,q,{value:t=new Proxy(e,Kn)}),!Array.isArray(e))){const r=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let i=0,o=r.length;i<o;i++){const s=r[i];n[s].get&&Object.defineProperty(e,s,{enumerable:n[s].enumerable,get:n[s].get.bind(t)})}}return t}function Ye(e){let t;return e!=null&&typeof e=="object"&&(e[q]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function _e(e,t=new Set){let r,n,i,o;if(r=e!=null&&e[pt])return r;if(!Ye(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,a=e.length;s<a;s++)i=e[s],(n=_e(i,t))!==i&&(e[s]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let l=0,u=s.length;l<u;l++)o=s[l],!a[o].get&&(i=e[o],(n=_e(i,t))!==i&&(e[o]=n))}return e}function qe(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function Ie(e,t,r){if(e[t])return e[t];const[n,i]=M(r,{equals:!1,internal:!0});return n.$=i,e[t]=n}function Wn(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===q||t===ve||(delete r.value,delete r.writable,r.get=()=>e[q][t]),r}function xr(e){ht()&&Ie(qe(e,ve),pr)()}function zn(e){return xr(e),Reflect.ownKeys(e)}const Kn={get(e,t,r){if(t===pt)return e;if(t===q)return r;if(t===dt)return xr(e),r;const n=qe(e,ve),i=n[t];let o=i?i():e[t];if(t===ve||t===ee||t==="__proto__")return o;if(!i){const s=Object.getOwnPropertyDescriptor(e,t);ht()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(o=Ie(n,t,o)())}return Ye(o)?vr(o):o},has(e,t){return t===pt||t===q||t===dt||t===ve||t===ee||t==="__proto__"?!0:(ht()&&Ie(qe(e,ee),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:zn,getOwnPropertyDescriptor:Wn};function Xe(e,t,r,n=!1){if(!n&&e[t]===r)return;const i=e[t],o=e.length;r===void 0?(delete e[t],e[ee]&&e[ee][t]&&i!==void 0&&e[ee][t].$()):(e[t]=r,e[ee]&&e[ee][t]&&i===void 0&&e[ee][t].$());let s=qe(e,ve),a;if((a=Ie(s,t,i))&&a.$(()=>r),Array.isArray(e)&&e.length!==o){for(let l=e.length;l<o;l++)(a=s[l])&&a.$();(a=Ie(s,"length",o))&&a.$(e.length)}(a=s[pr])&&a.$()}function kr(e,t){const r=Object.keys(t);for(let n=0;n<r.length;n+=1){const i=r[n];Xe(e,i,t[i])}}function Vn(e,t){if(typeof t=="function"&&(t=t(e)),t=_e(t),Array.isArray(t)){if(e===t)return;let r=0,n=t.length;for(;r<n;r++){const i=t[r];e[r]!==i&&Xe(e,r,i)}Xe(e,"length",n)}else kr(e,t)}function $e(e,t,r=[]){let n,i=e;if(t.length>1){n=t.shift();const s=typeof n,a=Array.isArray(e);if(Array.isArray(n)){for(let l=0;l<n.length;l++)$e(e,[n[l]].concat(t),r);return}else if(a&&s==="function"){for(let l=0;l<e.length;l++)n(e[l],l)&&$e(e,[l].concat(t),r);return}else if(a&&s==="object"){const{from:l=0,to:u=e.length-1,by:c=1}=n;for(let f=l;f<=u;f+=c)$e(e,[f].concat(t),r);return}else if(t.length>1){$e(e[n],t,[n].concat(r));return}i=e[n],r=[n].concat(r)}let o=t[0];typeof o=="function"&&(o=o(i,r),o===i)||n===void 0&&o==null||(o=_e(o),n===void 0||Ye(i)&&Ye(o)&&!Array.isArray(o)?kr(i,o):Xe(e,n,o))}function vt(...[e,t]){const r=_e(e||{}),n=Array.isArray(r),i=vr(r);function o(...s){Fr(()=>{n&&s.length===1?Vn(r,s[0]):$e(r,s)})}return[i,o]}const Ut={bgColor:"#ffffff",textColor:"#333333",navbarBg:"rgba(255, 255, 255, 0.8)",gallery:{containerBg:"#ffffff",cardBg:"#ffffff",cardHoverBg:"#f8f8f8",shadowColor:"rgba(0, 0, 0, 0.1)",titleColor:"#333333",descriptionColor:"#666666",linkColor:"#0066cc",linkHoverColor:"#004499",borderColor:"#eeeeee",buttonBg:"#f0f0f0",buttonText:"#333333",buttonHoverBg:"#e0e0e0",primaryButtonBg:"#0066cc",primaryButtonText:"#ffffff",primaryButtonHoverBg:"#0052a3"}},Mt={bgColor:"#1a1a1a",textColor:"#ffffff",navbarBg:"rgba(42, 42, 42, 0.8)",gallery:{containerBg:"#1a1a1a",cardBg:"#2d2d2d",cardHoverBg:"#363636",shadowColor:"rgba(0, 0, 0, 0.3)",titleColor:"#ffffff",descriptionColor:"#cccccc",linkColor:"#66b3ff",linkHoverColor:"#99ccff",borderColor:"#404040",buttonBg:"#404040",buttonText:"#ffffff",buttonHoverBg:"#505050",primaryButtonBg:"#2196f3",primaryButtonText:"#ffffff",primaryButtonHoverBg:"#1976d2"}};var Yn=!1;function qn(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Xn(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Jn=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!Yn:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xn(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=qn(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),U="-ms-",Je="-moz-",$="-webkit-",Cr="comm",Ot="rule",Et="decl",Qn="@import",Sr="@keyframes",Zn="@layer",ei=Math.abs,nt=String.fromCharCode,ti=Object.assign;function ri(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function Ar(e){return e.trim()}function ni(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function xt(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function Re(e,t,r){return e.slice(t,r)}function J(e){return e.length}function _t(e){return e.length}function je(e,t){return t.push(e),e}function ii(e,t){return e.map(t).join("")}var it=1,ke=1,$r=0,W=0,F=0,Se="";function ot(e,t,r,n,i,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:it,column:ke,length:s,return:""}}function Ae(e,t){return ti(ot("",null,null,"",null,null,0),e,{length:-e.length},t)}function oi(){return F}function si(){return F=W>0?N(Se,--W):0,ke--,F===10&&(ke=1,it--),F}function K(){return F=W<$r?N(Se,W++):0,ke++,F===10&&(ke=1,it++),F}function Q(){return N(Se,W)}function Ge(){return W}function Fe(e,t){return Re(Se,e,t)}function De(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pr(e){return it=ke=1,$r=J(Se=e),W=0,[]}function Tr(e){return Se="",e}function Be(e){return Ar(Fe(W-1,kt(e===91?e+2:e===40?e+1:e)))}function ai(e){for(;(F=Q())&&F<33;)K();return De(e)>2||De(F)>3?"":" "}function li(e,t){for(;--t&&K()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return Fe(e,Ge()+(t<6&&Q()==32&&K()==32))}function kt(e){for(;K();)switch(F){case e:return W;case 34:case 39:e!==34&&e!==39&&kt(F);break;case 40:e===41&&kt(e);break;case 92:K();break}return W}function ci(e,t){for(;K()&&e+F!==57;)if(e+F===84&&Q()===47)break;return"/*"+Fe(t,W-1)+"*"+nt(e===47?e:K())}function ui(e){for(;!De(Q());)K();return Fe(e,W)}function fi(e){return Tr(He("",null,null,null,[""],e=Pr(e),0,[0],e))}function He(e,t,r,n,i,o,s,a,l){for(var u=0,c=0,f=s,g=0,h=0,d=0,m=1,w=1,y=1,x=0,p="",k=i,E=o,L=n,b=p;w;)switch(d=x,x=K()){case 40:if(d!=108&&N(b,f-1)==58){xt(b+=P(Be(x),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:b+=Be(x);break;case 9:case 10:case 13:case 32:b+=ai(d);break;case 92:b+=li(Ge()-1,7);continue;case 47:switch(Q()){case 42:case 47:je(di(ci(K(),Ge()),t,r),l);break;default:b+="/"}break;case 123*m:a[u++]=J(b)*y;case 125*m:case 59:case 0:switch(x){case 0:case 125:w=0;case 59+c:y==-1&&(b=P(b,/\f/g,"")),h>0&&J(b)-f&&je(h>32?Bt(b+";",n,r,f-1):Bt(P(b," ","")+";",n,r,f-2),l);break;case 59:b+=";";default:if(je(L=Gt(b,t,r,u,c,i,a,p,k=[],E=[],f),o),x===123)if(c===0)He(b,t,L,L,k,o,f,a,E);else switch(g===99&&N(b,3)===110?100:g){case 100:case 108:case 109:case 115:He(e,L,L,n&&je(Gt(e,L,L,0,0,i,a,p,i,k=[],f),E),i,E,f,a,n?k:E);break;default:He(b,L,L,L,[""],E,0,a,E)}}u=c=h=0,m=y=1,p=b="",f=s;break;case 58:f=1+J(b),h=d;default:if(m<1){if(x==123)--m;else if(x==125&&m++==0&&si()==125)continue}switch(b+=nt(x),x*m){case 38:y=c>0?1:(b+="\f",-1);break;case 44:a[u++]=(J(b)-1)*y,y=1;break;case 64:Q()===45&&(b+=Be(K())),g=Q(),c=f=J(p=b+=ui(Ge())),x++;break;case 45:d===45&&J(b)==2&&(m=0)}}return o}function Gt(e,t,r,n,i,o,s,a,l,u,c){for(var f=i-1,g=i===0?o:[""],h=_t(g),d=0,m=0,w=0;d<n;++d)for(var y=0,x=Re(e,f+1,f=ei(m=s[d])),p=e;y<h;++y)(p=Ar(m>0?g[y]+" "+x:P(x,/&\f/g,g[y])))&&(l[w++]=p);return ot(e,t,r,i===0?Ot:a,l,u,c)}function di(e,t,r){return ot(e,t,r,Cr,nt(oi()),Re(e,2,-2),0)}function Bt(e,t,r,n){return ot(e,t,r,Et,Re(e,0,n),Re(e,n+1,-1),n)}function xe(e,t){for(var r="",n=_t(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function hi(e,t,r,n){switch(e.type){case Zn:if(e.children.length)break;case Qn:case Et:return e.return=e.return||e.value;case Cr:return"";case Sr:return e.return=e.value+"{"+xe(e.children,n)+"}";case Ot:e.value=e.props.join(",")}return J(r=xe(e.children,n))?e.return=e.value+"{"+r+"}":""}function gi(e){var t=_t(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}function mi(e){return function(t){t.root||(t=t.return)&&e(t)}}function yi(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var wi=function(t,r,n){for(var i=0,o=0;i=o,o=Q(),i===38&&o===12&&(r[n]=1),!De(o);)K();return Fe(t,W)},bi=function(t,r){var n=-1,i=44;do switch(De(i)){case 0:i===38&&Q()===12&&(r[n]=1),t[n]+=wi(W-1,r,n);break;case 2:t[n]+=Be(i);break;case 4:if(i===44){t[++n]=Q()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=nt(i)}while(i=K());return t},pi=function(t,r){return Tr(bi(Pr(t),r))},Ht=new WeakMap,vi=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Ht.get(n))&&!i){Ht.set(t,!0);for(var o=[],s=pi(r,o),a=n.props,l=0,u=0;l<s.length;l++)for(var c=0;c<a.length;c++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[c]):a[c]+" "+s[l]}}},xi=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Or(e,t){switch(ri(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Je+e+U+e+e;case 6828:case 4268:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+P(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+P(e,/flex-|-self/,"")+e;case 4675:return $+e+U+"flex-line-pack"+P(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+U+P(e,"shrink","negative")+e;case 5292:return $+e+U+P(e,"basis","preferred-size")+e;case 6060:return $+"box-"+P(e,"-grow","")+$+e+U+P(e,"grow","positive")+e;case 4554:return $+P(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(J(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Je+(N(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xt(e,"stretch")?Or(P(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(N(e,t+1)!==115)break;case 6444:switch(N(e,J(e)-3-(~xt(e,"!important")&&10))){case 107:return P(e,":",":"+$)+e;case 101:return P(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(N(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e}break;case 5936:switch(N(e,t+11)){case 114:return $+e+U+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+U+e+e}return e}var ki=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Et:t.return=Or(t.value,t.length);break;case Sr:return xe([Ae(t,{value:P(t.value,"@","@"+$)})],i);case Ot:if(t.length)return ii(t.props,function(o){switch(ni(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xe([Ae(t,{props:[P(o,/:(read-\w+)/,":"+Je+"$1")]})],i);case"::placeholder":return xe([Ae(t,{props:[P(o,/:(plac\w+)/,":"+$+"input-$1")]}),Ae(t,{props:[P(o,/:(plac\w+)/,":"+Je+"$1")]}),Ae(t,{props:[P(o,/:(plac\w+)/,U+"input-$1")]})],i)}return""})}},Ci=[ki],Si=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ci,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),y=1;y<w.length;y++)o[w[y]]=!0;a.push(m)});var l,u=[vi,xi];{var c,f=[hi,mi(function(m){c.insert(m)})],g=gi(u.concat(i,f)),h=function(w){return xe(fi(w),g)};l=function(w,y,x,p){c=x,h(w?w+"{"+y.styles+"}":y.styles),p&&(d.inserted[y.name]=!0)}}var d={key:r,sheet:new Jn({key:r,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return d.sheet.hydrate(a),d};function Ai(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var $i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pi=/[A-Z]|^ms/g,Ti=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Er=function(t){return t.charCodeAt(1)===45},Wt=function(t){return t!=null&&typeof t!="boolean"},ct=yi(function(e){return Er(e)?e:e.replace(Pi,"-$&").toLowerCase()}),zt=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ti,function(n,i,o){return se={name:i,styles:o,next:se},i})}return $i[t]!==1&&!Er(t)&&typeof r=="number"&&r!==0?r+"px":r};function Qe(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return se={name:i.name,styles:i.styles,next:se},i.name;var o=r;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)se={name:s.name,styles:s.styles,next:se},s=s.next;var a=o.styles+";";return a}return Oi(e,t,r)}}var l=r;if(t==null)return l;var u=t[l];return u!==void 0?u:l}function Oi(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Qe(e,t,r[i])+";";else for(var o in r){var s=r[o];if(typeof s!="object"){var a=s;t!=null&&t[a]!==void 0?n+=o+"{"+t[a]+"}":Wt(a)&&(n+=ct(o)+":"+zt(o,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Wt(s[l])&&(n+=ct(o)+":"+zt(o,s[l])+";");else{var u=Qe(e,t,s);switch(o){case"animation":case"animationName":{n+=ct(o)+":"+u+";";break}default:n+=o+"{"+u+"}"}}}return n}var Kt=/label:\s*([^\s;{]+)\s*(;|$)/g,se;function ut(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";se=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,i+=Qe(r,t,o);else{var s=o;i+=s[0]}for(var a=1;a<e.length;a++)if(i+=Qe(r,t,e[a]),n){var l=o;i+=l[a]}Kt.lastIndex=0;for(var u="",c;(c=Kt.exec(i))!==null;)u+="-"+c[1];var f=Ai(i)+u;return{name:f,styles:i,next:se}}function _r(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var Ei=function(t,r,n){var i=t.key+"-"+r.name;t.registered[i]===void 0&&(t.registered[i]=r.styles)},_i=function(t,r,n){Ei(t,r);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Vt(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function Yt(e,t,r){var n=[],i=_r(e,n,r);return n.length<2?r:i+t(n)}var Ii=function(t){var r=Si(t);r.sheet.speedy=function(a){this.isSpeedy=a},r.compat=!0;var n=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered,void 0);return _i(r,f),r.key+"-"+f.name},i=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered),g="animation-"+f.name;return Vt(r,{name:f.name,styles:"@keyframes "+g+"{"+f.styles+"}"}),g},o=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var f=ut(u,r.registered);Vt(r,f)},s=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return Yt(r.registered,n,Ri(u))};return{css:n,cx:s,injectGlobal:o,keyframes:i,hydrate:function(l){l.forEach(function(u){r.inserted[u]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:_r.bind(null,r.registered),merge:Yt.bind(null,r.registered,n)}},Ri=function e(t){for(var r="",n=0;n<t.length;n++){var i=t[n];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(r&&(r+=" "),r+=o)}}return r},Di=Ii({key:"css"}),ge=Di.css,Li=R("<div><nav class=navbar><div class=right-section><button class=theme-toggle>"),Fi=R('<svg class=sun-icon xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><circle class=sun-glow cx=12 cy=12 r=8></circle><circle class=sun-core cx=12 cy=12 r=5 stroke-width=1.5></circle><g class=sun-rays stroke-linecap=round><line x1=12 y1=3 x2=12 y2=1></line><line x1=12 y1=23 x2=12 y2=21></line><line x1=3 y1=12 x2=1 y2=12></line><line x1=23 y1=12 x2=21 y2=12></line><line x1=5.6 y1=5.6 x2=4.2 y2=4.2></line><line x1=18.4 y1=18.4 x2=19.8 y2=19.8></line><line x1=5.6 y1=18.4 x2=4.2 y2=19.8></line><line x1=18.4 y1=5.6 x2=19.8 y2=4.2>'),Ni=R('<svg class=moon-icon xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"><circle class=moon-glow cx=12 cy=12 r=10></circle><path class=moon-body d="M12 3a9 9 0 1 0 9 9 10 10 0 0 1-9-9z"stroke-width=1.5></path><circle class=moon-crater cx=15 cy=9 r=1.5></circle><circle class=moon-crater cx=10 cy=11 r=1></circle><circle class=moon-crater cx=13 cy=14 r=1.2>');const ji=e=>{const t=S(()=>ge`
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
  `);return(()=>{var r=Li(),n=r.firstChild,i=n.firstChild,o=i.firstChild;return O(n,C(bt,{href:"/",class:"logo",children:"Portfolio Gallery"}),i),lr(o,"click",e.onThemeToggle,!0),O(o,(()=>{var s=S(()=>!!e.isDark);return()=>s()?Fi():Ni()})()),_(s=>{var a=t(),l=e.isDark?"Switch to light mode":"Switch to dark mode";return a!==s.e&&ae(r,s.e=a),l!==s.t&&v(o,"aria-label",s.t=l),s},{e:void 0,t:void 0}),r})()};et(["click"]);class pe{static instance;workers;taskQueue;activeWorkers;constructor(){const t=Math.max(2,Math.min(4,navigator.hardwareConcurrency-1));this.workers=[],this.taskQueue=[],this.activeWorkers=new Map;for(let r=0;r<t;r++){const n=new Worker(new URL("/Klaes-Soerensen-Portfolio-Public/assets/worker-CPAWidZg.js",import.meta.url),{type:"module"});n.onmessage=i=>this.handleWorkerMessage(n,i),n.onerror=i=>this.handleWorkerError(n,i),this.workers.push(n)}console.log(`TaskProcessor initialized with ${t} workers`)}static getInstance(){return pe.instance||(pe.instance=new pe),pe.instance}async submitTask(t){return new Promise((r,n)=>{const i=crypto.randomUUID(),o={task:t,resolve:r,reject:n},s=this.workers.find(a=>!Array.from(this.activeWorkers.values()).some(l=>l.worker===a));s?this.assignTask(s,i,o):this.taskQueue.push(o)})}assignTask(t,r,n){this.activeWorkers.set(r,{worker:t,...n});const i={taskId:r,entityType:n.task.entityType,action:n.task.action,payload:{entities:n.task.payload.entities?JSON.parse(JSON.stringify(n.task.payload.entities)):void 0,config:JSON.parse(JSON.stringify(n.task.payload.config))}};t.postMessage(i)}handleWorkerMessage(t,r){const{taskId:n,result:i,error:o}=r.data,s=this.activeWorkers.get(n);if(s&&(o?s.reject(new Error(o)):s.resolve({data:i}),this.activeWorkers.delete(n),this.taskQueue.length>0)){const a=this.taskQueue.shift(),l=crypto.randomUUID();this.assignTask(t,l,a)}}handleWorkerError(t,r){console.error("Worker error:",r);const n=this.workers.indexOf(t);t.terminate();const i=new Worker(new URL("/Klaes-Soerensen-Portfolio-Public/assets/worker-CPAWidZg.js",import.meta.url),{type:"module"});i.onmessage=o=>this.handleWorkerMessage(i,o),i.onerror=o=>this.handleWorkerError(i,o),this.workers[n]=i;for(const[o,s]of this.activeWorkers.entries())s.worker===t&&(s.reject(new Error("Worker failed")),this.activeWorkers.delete(o))}cleanup(){this.workers.forEach(t=>t.terminate()),this.workers=[],this.taskQueue=[],this.activeWorkers.clear()}}const Ce=pe.getInstance(),Y={cloudSpeed:.3,starSpeed:.2,groundSpeed:2,transitionSpeed:3},ft={minGroundHeight:.2,maxGroundHeight:.6,noiseScale:.005},X={maxStars:200,maxClouds:10,initialClouds:4,cloudSpawnOffset:200,cloudSpawnChance:.1},Ui={chunkSize:Math.max(window.innerWidth/2,800),pointsPerChunk:25,overlapPoints:4},Mi={day:{sky:{r:135,g:206,b:235,a:255},skyTop:{r:30,g:144,b:255,a:255},skyHorizon:{r:176,g:226,b:255,a:255},star:{r:255,g:255,b:255,a:0},cloud:{r:255,g:255,b:255,a:230},ground:{r:78,g:53,b:36,a:255},grass:{r:44,g:176,b:55,a:255}},night:{sky:{r:15,g:20,b:45,a:255},skyTop:{r:8,g:10,b:30,a:255},skyHorizon:{r:25,g:35,b:65,a:255},star:{r:255,g:255,b:255,a:255},cloud:{r:149,g:149,b:149,a:220},ground:{r:39,g:26,b:18,a:255},grass:{r:22,g:88,b:27,a:255}}};var Gi=R("<svg><g class=star-field></svg>",!1,!0),Bi=R("<svg><path class=star-chunk fill=white opacity=0.8></svg>",!1,!0);const Hi=e=>{const r=X.maxStars,[n,i]=M([]),[o,s]=M(!1),a=async u=>{if(!o())try{s(!0);const c=await Ce.submitTask({entityType:"STAR_CHUNK",action:"GENERATE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,chunkWidth:500,starsPerChunk:r,startX:u}}});c.data&&i(f=>[...f,c.data])}finally{s(!1)}};me(async()=>{try{const u=await Ce.submitTask({entityType:"STAR_CHUNK",action:"INITIALIZE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,chunkWidth:500,starsPerChunk:r,startX:0}}});u.data&&i(u.data)}catch(u){console.error("Error initializing star chunks:",u)}});let l;return me(()=>{const u=()=>{i(c=>{if(c.length===0)return c;const f=c.map(h=>({...h,x:h.x-Y.starSpeed})).filter(h=>h.x>-500);if(f.length===0)return[];const g=f.reduce((h,d)=>d.x>h.x?d:h,f[0]);return g&&g.x+500<window.innerWidth&&(o()||a(g.x+500)),f}),l=requestAnimationFrame(u)};l=requestAnimationFrame(u)}),ye(()=>{l&&cancelAnimationFrame(l)}),(()=>{var u=Gi();return O(u,()=>n().map(c=>(()=>{var f=Bi();return _(g=>{var h=c.pathData,d=`translate(${c.x}, 0)`;return h!==g.e&&v(f,"d",g.e=h),d!==g.t&&v(f,"transform",g.t=d),g},{e:void 0,t:void 0}),f})())),_(c=>{var f=e.isDark?1:0,g=`opacity ${Y.transitionSpeed}s ease`;return f!==c.e&&((c.e=f)!=null?u.style.setProperty("opacity",f):u.style.removeProperty("opacity")),g!==c.t&&((c.t=g)!=null?u.style.setProperty("transition",g):u.style.removeProperty("transition")),c},{e:void 0,t:void 0}),u})()};var Wi=R("<svg><g class=cloud-field><defs><filter id=cloud-blur><feGaussianBlur in=SourceGraphic stdDeviation=5></svg>",!1,!0),zi=R("<svg><g></svg>",!1,!0),Ki=R("<svg><ellipse class=cloud-section filter=url(#cloud-blur)></svg>",!1,!0);const Vi=e=>{const[t,r]=M([]),[n,i]=M(!1),o=async()=>{if(!n())try{i(!0);const l=await Ce.submitTask({entityType:"CLOUD",action:"GENERATE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,spawnOffset:X.cloudSpawnOffset,maxClouds:X.maxClouds,cloudSpawnChance:X.cloudSpawnChance,cloudSpeed:Y.cloudSpeed}}});if(l.data){const u={...l.data,id:crypto.randomUUID()};r(c=>[...c,u])}}finally{i(!1)}};me(async()=>{try{const l=await Ce.submitTask({entityType:"CLOUD",action:"INITIALIZE",payload:{config:{windowWidth:window.innerWidth,windowHeight:window.innerHeight,spawnOffset:X.cloudSpawnOffset,maxClouds:X.initialClouds,cloudSpawnChance:X.cloudSpawnChance,cloudSpeed:Y.cloudSpeed}}});if(l.data){const u=l.data.map(c=>({...c,id:crypto.randomUUID()}));r(u),console.log("Initial clouds:",u)}}catch(l){console.error("Error initializing clouds:",l)}});let s,a;return me(()=>{const l=()=>{r(u=>u.map(c=>({...c,x:c.x-Y.cloudSpeed})).filter(c=>c.x>-X.cloudSpawnOffset)),a=requestAnimationFrame(l)};a=requestAnimationFrame(l),s=setInterval(()=>{t().length<X.maxClouds&&!n()&&Math.random()<X.cloudSpawnChance&&o()},1e3)}),ye(()=>{s&&clearInterval(s),a&&cancelAnimationFrame(a)}),(()=>{var l=Wi();return l.firstChild,O(l,()=>t().map(u=>(()=>{var c=zi();return O(c,()=>u.sections.map((f,g)=>(()=>{var h=Ki();return _(d=>{var m=f.x,w=f.y,y=f.width/2,x=f.height/2,p=`rgb(${e.colors.cloud.r}, ${e.colors.cloud.g}, ${e.colors.cloud.b})`,k=e.colors.cloud.a/255;return m!==d.e&&v(h,"cx",d.e=m),w!==d.t&&v(h,"cy",d.t=w),y!==d.a&&v(h,"rx",d.a=y),x!==d.o&&v(h,"ry",d.o=x),p!==d.i&&v(h,"fill",d.i=p),k!==d.n&&v(h,"opacity",d.n=k),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),h})())),_(()=>v(c,"transform",`translate(${u.x}, ${u.y})`)),c})()),null),_(u=>{var c=e.isDark?.95:1,f=`opacity ${Y.transitionSpeed}s ease`;return c!==u.e&&((u.e=c)!=null?l.style.setProperty("opacity",c):l.style.removeProperty("opacity")),f!==u.t&&((u.t=f)!=null?l.style.setProperty("transition",f):l.style.removeProperty("transition")),u},{e:void 0,t:void 0}),l})()};var Yi=R('<svg><g class=celestial-bodies><defs><radialGradient id=sunGlow cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color="rgba(255, 220, 150, 0.4)"></stop><stop offset=50% stop-color="rgba(255, 180, 120, 0.2)"></stop><stop offset=100% stop-color="rgba(255, 160, 100, 0)"></stop></radialGradient><radialGradient id=sunBody cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color=#fffaf0></stop><stop offset=30% stop-color=#ffe4b5></stop><stop offset=60% stop-color=#ffd700></stop><stop offset=80% stop-color=#ffa500></stop><stop offset=100% stop-color=#ff8c00></stop></radialGradient><radialGradient id=moonGlow cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color="rgba(255, 255, 255, 0.3)"></stop><stop offset=100% stop-color="rgba(255, 255, 255, 0)"></stop></radialGradient><radialGradient id=moonBody cx=0.5 cy=0.5 r=0.5><stop offset=0% stop-color=#ffffff></stop><stop offset=50% stop-color=#e0e0e0></stop><stop offset=80% stop-color=#b0b0b0></stop><stop offset=100% stop-color=#909090></stop></radialGradient></defs><g><circle fill=url(#sunGlow)></circle><circle fill=url(#sunBody)></circle><g></g></g><g><circle fill=url(#moonGlow)></circle><circle fill=url(#moonBody)></svg>',!1,!0),qi=R('<svg><path fill="rgba(255, 200, 100, 0.4)"></svg>',!1,!0),Xi=R('<svg><circle fill="rgba(0, 0, 0, 0.2)"></svg>',!1,!0);const Ji=e=>{const[t,r]=M(0);let n,i=0;const o=1e3/60,s=S(()=>Math.min(e.width,e.height)/1e3,[e.width,e.height]),a=S(()=>({SUN_RADIUS:30*s(),MOON_RADIUS:20*s(),SUN_GLOW_RADIUS:320*s(),MOON_GLOW_RADIUS:100*s(),SUN_X_RATIO:e.width<768?.2:.13,MOON_X_RATIO:e.width<768?.8:.87,BASE_Y_RATIO:e.width<768?.15:.2,ROTATION_SPEED:.2,RAY_COUNT:e.width<768?8:12}),[s(),e.width]),l=S(()=>{const d=a();return Array.from({length:d.RAY_COUNT}).map((m,w)=>{const y=w*360/d.RAY_COUNT;return{angle:y,path:`M ${d.SUN_RADIUS*Math.cos(y*Math.PI/180)} ${d.SUN_RADIUS*Math.sin(y*Math.PI/180)} 
                       L ${d.SUN_RADIUS*2*Math.cos((y+5)*Math.PI/180)} ${d.SUN_RADIUS*2*Math.sin((y+5)*Math.PI/180)} 
                       L ${d.SUN_RADIUS*2*Math.cos((y-5)*Math.PI/180)} ${d.SUN_RADIUS*2*Math.sin((y-5)*Math.PI/180)} Z`}})},[a().RAY_COUNT,a().SUN_RADIUS]),u=S(()=>{const d=s();return[{x:-8*d,y:-5*d,r:4*d},{x:5*d,y:8*d,r:3*d},{x:-3*d,y:10*d,r:2*d},{x:7*d,y:-7*d,r:3*d},{x:0,y:0,r:4*d}]},[s()]),c=S(()=>{const d=a();return{sunX:e.width*d.SUN_X_RATIO,moonX:e.width*d.MOON_X_RATIO,baseY:e.height*d.BASE_Y_RATIO,hiddenY:e.height+100}},[e.width,e.height,a()]),f=S(()=>e.isDark?c().hiddenY:c().baseY,[e.isDark,c()]),g=S(()=>e.isDark?c().baseY:c().hiddenY,[e.isDark,c()]),h=d=>{d-i>=o&&(i=d,r(m=>{const w=(m+a().ROTATION_SPEED)%360;return Number.isFinite(w)?w:0})),n=requestAnimationFrame(h)};return me(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r(45);return}i=performance.now(),n=requestAnimationFrame(h)}),ye(()=>{n&&cancelAnimationFrame(n)}),(()=>{var d=Yi(),m=d.firstChild,w=m.nextSibling,y=w.firstChild,x=y.nextSibling,p=x.nextSibling,k=w.nextSibling,E=k.firstChild,L=E.nextSibling;return w.style.setProperty("will-change","transform"),p.style.setProperty("will-change","transform"),O(p,()=>l().map(b=>(()=>{var B=qi();return _(()=>v(B,"d",b.path)),B})())),k.style.setProperty("will-change","transform"),O(k,()=>u().map(b=>(()=>{var B=Xi();return _(j=>{var A=b.x,D=b.y,z=b.r;return A!==j.e&&v(B,"cx",j.e=A),D!==j.t&&v(B,"cy",j.t=D),z!==j.a&&v(B,"r",j.a=z),j},{e:void 0,t:void 0,a:void 0}),B})()),null),_(b=>{var B=`translate(${c().sunX}, ${f()})`,j=`transform ${Y.transitionSpeed}s ease`,A=a().SUN_GLOW_RADIUS,D=a().SUN_RADIUS,z=`rotate(${t()})`,we=`translate(${c().moonX}, ${g()})`,ue=`transform ${Y.transitionSpeed}s ease`,Z=a().MOON_GLOW_RADIUS,re=a().MOON_RADIUS;return B!==b.e&&v(w,"transform",b.e=B),j!==b.t&&((b.t=j)!=null?w.style.setProperty("transition",j):w.style.removeProperty("transition")),A!==b.a&&v(y,"r",b.a=A),D!==b.o&&v(x,"r",b.o=D),z!==b.i&&v(p,"transform",b.i=z),we!==b.n&&v(k,"transform",b.n=we),ue!==b.s&&((b.s=ue)!=null?k.style.setProperty("transition",ue):k.style.removeProperty("transition")),Z!==b.h&&v(E,"r",b.h=Z),re!==b.r&&v(L,"r",b.r=re),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),d})()},fe={sky:{r:200,g:150,b:180,a:255},skyTop:{r:150,g:100,b:150,a:255},skyHorizon:{r:255,g:170,b:190,a:255},star:{r:255,g:255,b:255,a:128},cloud:{r:255,g:170,b:160,a:255},ground:{r:58,g:40,b:27,a:255},grass:{r:33,g:132,b:41,a:255}},de={sky:{r:255,g:200,b:150,a:255},skyTop:{r:200,g:150,b:120,a:255},skyHorizon:{r:255,g:220,b:180,a:255},star:{r:255,g:255,b:255,a:128},cloud:{r:255,g:220,b:200,a:255},ground:{r:78,g:53,b:36,a:255},grass:{r:44,g:176,b:55,a:255}},qt=(e,t,r)=>({r:Math.round(e.r+(t.r-e.r)*r),g:Math.round(e.g+(t.g-e.g)*r),b:Math.round(e.b+(t.b-e.b)*r),a:Math.round(e.a+(t.a-e.a)*r)}),H=(e,t,r,n,i=!1)=>{if(i){const o=Math.max(0,Math.min(1,(n-.3)*1.4));return{r:r.r,g:r.g,b:r.b,a:Math.floor(r.a*o)}}if(n<.5){const o=n*2;return qt(e,t,o)}else{const o=(n-.5)*2;return qt(t,r,o)}},Qi=e=>{let t=null;const r=1e3/120,[n,i]=vt({currentMode:e,targetMode:e,progress:e?1:0,isAnimating:!1,_cachedProgress:-1,_cachedColors:null,_lastFrameTime:0}),o=()=>{const{day:l,night:u}=Mi,c=n.progress;if(!n.isAnimating)return n.currentMode?u:l;if(n._cachedProgress===c&&n._cachedColors)return n._cachedColors;const f=n.targetMode?{sky:H(l.sky,fe.sky,u.sky,c),skyTop:H(l.skyTop,fe.skyTop,u.skyTop,c),skyHorizon:H(l.skyHorizon,fe.skyHorizon,u.skyHorizon,c),star:H(l.star,fe.star,u.star,c,!0),cloud:H(l.cloud,fe.cloud,u.cloud,c),ground:H(l.ground,fe.ground,u.ground,c),grass:H(l.grass,fe.grass,u.grass,c)}:{sky:H(u.sky,de.sky,l.sky,1-c),skyTop:H(u.skyTop,de.skyTop,l.skyTop,1-c),skyHorizon:H(u.skyHorizon,de.skyHorizon,l.skyHorizon,1-c),star:H(u.star,de.star,l.star,1-c,!0),cloud:H(u.cloud,de.cloud,l.cloud,1-c),ground:H(u.ground,de.ground,l.ground,1-c),grass:H(u.grass,de.grass,l.grass,1-c)};return i(g=>({...g,_cachedProgress:c,_cachedColors:f})),f},s=l=>{if(!n.isAnimating){t=null;return}l-n._lastFrameTime>=r&&(i("_lastFrameTime",l),i(u=>{const c=1/(60*Y.transitionSpeed/2),f=u.targetMode?u.progress+c:u.progress-c;return u.targetMode&&f>=1?{...u,currentMode:!0,progress:1,isAnimating:!1,_cachedProgress:-1,_cachedColors:null}:!u.targetMode&&f<=0?{...u,currentMode:!1,progress:0,isAnimating:!1,_cachedProgress:-1,_cachedColors:null}:{...u,progress:f}})),t=requestAnimationFrame(s)};return{colors:o,updateTheme:l=>{n.targetMode!==l&&i(u=>({...u,targetMode:l,isAnimating:!0,_lastFrameTime:0})),n.isAnimating&&!t&&(t=requestAnimationFrame(s))}}};var Zi=R('<svg preserveAspectRatio=none><defs><linearGradient id=skyGradient x1=0 y1=0 x2=0 y2=1><stop offset=0%></stop><stop offset=30%></stop><stop offset=70%></stop><stop offset=100%></stop></linearGradient><linearGradient id=terrainGradient x1=0 y1=0 x2=0 y2=1><stop offset=0%></stop><stop offset=100%></stop></linearGradient><linearGradient id=leftEdgeGradient x1=0 y1=0 x2=1 y2=0><stop offset=0% stop-color=black></stop><stop offset=100% stop-color=white></stop></linearGradient><linearGradient id=rightEdgeGradient x1=0 y1=0 x2=1 y2=0><stop offset=0% stop-color=white></stop><stop offset=100% stop-color=black></stop></linearGradient><mask id=chunkEdgeMask><rect width=100% height=100% fill=white></rect><rect x=0 width=50 height=100% fill=url(#leftEdgeGradient)></rect><rect x=100% width=50 height=100% transform="translate(-50, 0)"fill=url(#rightEdgeGradient)></rect></mask></defs><rect width=100% height=100% fill=url(#skyGradient)></rect><g class=terrain>'),eo=R("<svg><path class=terrain-chunk fill=url(#terrainGradient) mask=url(#chunkEdgeMask)></svg>",!1,!0);const to=e=>(()=>{var t=Zi(),r=t.firstChild,n=r.firstChild,i=n.firstChild,o=i.nextSibling,s=o.nextSibling,a=s.nextSibling,l=n.nextSibling,u=l.firstChild,c=u.nextSibling,f=r.nextSibling,g=f.nextSibling;return t.style.setProperty("position","fixed"),t.style.setProperty("top","0"),t.style.setProperty("left","0"),t.style.setProperty("z-index","-1"),t.style.setProperty("pointer-events","none"),t.style.setProperty("transition","all 0.5s ease"),i.style.setProperty("transition","stop-color 0.5s ease"),o.style.setProperty("transition","stop-color 0.5s ease"),s.style.setProperty("transition","stop-color 0.5s ease"),a.style.setProperty("transition","stop-color 0.5s ease"),u.style.setProperty("transition","stop-color 0.5s ease"),c.style.setProperty("transition","stop-color 0.5s ease"),f.style.setProperty("transition","all 0.5s ease"),O(t,()=>e.children,g),O(g,()=>e.chunks.map(h=>(()=>{var d=eo();return d.style.setProperty("transition","fill 0.5s ease"),_(m=>{var w=h.pathData,y=`translate(${h.x}, 0)`;return w!==m.e&&v(d,"d",m.e=w),y!==m.t&&v(d,"transform",m.t=y),m},{e:void 0,t:void 0}),d})())),_(h=>{var d=e.width,m=e.height,w=`0 0 ${e.width} ${e.height}`,y=`rgb(${e.colors.skyTop.r}, ${e.colors.skyTop.g}, ${e.colors.skyTop.b})`,x=`rgb(${e.colors.sky.r}, ${e.colors.sky.g}, ${e.colors.sky.b})`,p=`rgb(${e.colors.sky.r}, ${e.colors.sky.g}, ${e.colors.sky.b})`,k=`rgb(${e.colors.skyHorizon.r}, ${e.colors.skyHorizon.g}, ${e.colors.skyHorizon.b})`,E=`rgb(${e.colors.grass.r}, ${e.colors.grass.g}, ${e.colors.grass.b})`,L=`rgb(${e.colors.ground.r}, ${e.colors.ground.g}, ${e.colors.ground.b})`;return d!==h.e&&v(t,"width",h.e=d),m!==h.t&&v(t,"height",h.t=m),w!==h.a&&v(t,"viewBox",h.a=w),y!==h.o&&v(i,"stop-color",h.o=y),x!==h.i&&v(o,"stop-color",h.i=x),p!==h.n&&v(s,"stop-color",h.n=p),k!==h.s&&v(a,"stop-color",h.s=k),E!==h.h&&v(u,"stop-color",h.h=E),L!==h.r&&v(c,"stop-color",h.r=L),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),t})(),ro=e=>{const[t,r]=M(0),[n,i]=vt([]),[o,s]=vt({width:window.innerWidth,height:window.innerHeight}),a=Qi(e.isDark);let l=null,u=!1,c=!1;const f=()=>({windowWidth:o.width,windowHeight:o.height,chunkSize:Ui.chunkSize,time:t(),noiseScale:ft.noiseScale,minGroundHeight:ft.minGroundHeight,maxGroundHeight:ft.maxGroundHeight,groundSpeed:Y.groundSpeed,startX:0}),g=()=>{l&&(cancelAnimationFrame(l),l=null),i([]),r(0)},h=async()=>{try{g(),u=!0;const y=await Ce.submitTask({entityType:"TERRAIN",action:"INITIALIZE",payload:{config:f()}});y.data&&i(y.data),!c&&!l&&(l=requestAnimationFrame(d))}catch(y){console.error("Error initializing terrain:",y)}finally{u=!1}},d=async()=>{if(!c){if(r(y=>y+Y.groundSpeed),!u)try{const y=await Ce.submitTask({entityType:"TERRAIN",action:"UPDATE",payload:{entities:n,config:f()}});y.data&&i(y.data)}catch(y){console.error("Error updating terrain:",y)}a.updateTheme(e.isDark),c||(l=requestAnimationFrame(d))}};let m=null;const w=()=>{c=!0,g(),m&&window.clearTimeout(m),m=window.setTimeout(()=>{s({width:window.innerWidth,height:window.innerHeight}),c=!1,h()},200)};return me(()=>{h(),window.addEventListener("resize",w)}),ye(()=>{window.removeEventListener("resize",w),g(),m&&window.clearTimeout(m)}),C(to,{get width(){return o.width},get height(){return o.height},get colors(){return a.colors()},chunks:n,get isDark(){return e.isDark},get children(){return[C(Ji,{get isDark(){return e.isDark},get width(){return o.width},get height(){return o.height}}),C(Hi,{get isDark(){return e.isDark}}),C(Vi,{get isDark(){return e.isDark},get colors(){return a.colors()}})]}})};var no=R("<div><div><main>");const io=e=>{const t=()=>{const s=localStorage.getItem("theme-preference");return s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches},[r,n]=M(t());Ct(()=>{const s=r()?"dark":"light";document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme-preference",s)}),me(()=>{const s=window.matchMedia("(prefers-color-scheme: dark)"),a=l=>{localStorage.getItem("theme-preference")||n(l.matches)};return s.addEventListener("change",a),()=>s.removeEventListener("change",a)});const i=()=>{n(s=>!s)},o={appContainer:ge`
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
        `};return(()=>{var s=no(),a=s.firstChild,l=a.firstChild;return O(s,C(ro,{get isDark(){return r()}}),a),O(a,C(ji,{onThemeToggle:i,get isDark(){return r()},get theme(){return r()?Mt:Ut}}),l),O(l,()=>e.children({theme:r()?Mt:Ut,isDark:r(),onThemeToggle:i})),_(u=>{var c=o.appContainer,f=r()?"dark":"light",g=o.mainContainer,h=o.mainContent;return c!==u.e&&ae(s,u.e=c),f!==u.t&&v(s,"data-theme",u.t=f),g!==u.a&&ae(a,u.a=g),h!==u.o&&ae(l,u.o=h),u},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()};var oo=R("<div class=featured-label>Featured"),so=R("<div class=tags>"),ao=R('<a target=_blank rel="noopener noreferrer"class=button>Download'),lo=R("<div class=card><div class=image-container><img loading=lazy class=image></div><div class=info><h3 class=title></h3><p class=description></p><div class=button-container>",!0,!1),co=R("<span class=tag>"),uo=R('<a target=_blank rel="noopener noreferrer"class="button primary">View Project'),Xt=R('<a target=_blank rel="noopener noreferrer"class="button small">'),fo=R("<div>");const ho=e=>{const t=S(()=>e.isDark?{bgGradient:"linear-gradient(145deg, rgba(220, 225, 235, 0.6), rgba(200, 208, 224, 0.6))",glow:"rgba(220, 225, 235, 0.4)",glowHover:"rgba(220, 225, 235, 0.5)",borderColor:"rgba(220, 225, 235, 0.6)",textColor:"#000"}:{bgGradient:"linear-gradient(145deg, rgba(255, 171, 64, 0.8), rgba(255, 171, 64, 0.8))",glow:"rgba(255, 171, 64, 0.6)",glowHover:"rgba(255, 171, 64, 0.7)",borderColor:"rgba(255, 171, 64, 0.8)",textColor:"#fff"}),r=S(()=>ge`
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
  `),n=()=>(()=>{var i=lo(),o=i.firstChild,s=o.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling,c=u.nextSibling;return O(o,C(oe,{get when(){return e.project.isFeatured},get children(){return oo()}}),s),O(l,()=>e.project.title),O(u,()=>e.project.description),O(a,C(oe,{get when(){return e.project.tags?.length},get children(){var f=so();return O(f,C(Ue,{get each(){return e.project.tags},children:g=>(()=>{var h=co();return O(h,g),h})()})),f}}),c),O(c,C(oe,{get when(){return e.project.demoUrl||e.project.pdfId},get children(){return S(()=>!!e.project.demoUrl)()?(()=>{var f=uo();return _(()=>v(f,"href",e.project.demoUrl)),f})():C(bt,{get href(){return`/pdf/${e.project.pdfId}`},class:"button primary",children:"View Project"})}}),null),O(c,C(oe,{get when(){return e.project.downloadUrl},get children(){var f=ao();return _(()=>v(f,"href",e.project.downloadUrl)),f}}),null),O(c,C(oe,{get when(){return e.project.playlists},get children(){return C(Ue,{get each(){return e.project.playlists},children:f=>(()=>{var g=Xt();return O(g,()=>f.name),_(()=>v(g,"href",f.url)),g})()})}}),null),O(c,C(oe,{get when(){return e.project.relatedLinks},get children(){return C(Ue,{get each(){return e.project.relatedLinks},children:f=>(()=>{var g=Xt();return O(g,()=>f.name),_(()=>v(g,"href",f.url)),g})()})}}),null),_(f=>{var g=e.project.imagePath,h=e.project.title;return g!==f.e&&v(s,"src",f.e=g),h!==f.t&&v(s,"alt",f.t=h),f},{e:void 0,t:void 0}),i})();return(()=>{var i=fo();return O(i,(()=>{var o=S(()=>!!(e.project.isFeatured&&e.project.pdfId));return()=>o()?C(bt,{get href(){return`/pdf/${e.project.pdfId}`},class:"card-link",get children(){return C(n,{})}}):C(n,{})})()),_(()=>ae(i,r())),i})()};var go=R("<div><div class=wrapper><div class=container>");const mo=e=>{const t=S(()=>ge`
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
  `);return(()=>{var r=go(),n=r.firstChild,i=n.firstChild;return O(i,C(Ue,{get each(){return e.projects},children:o=>C(ho,{project:o,get theme(){return e.theme},get isDark(){return e.isDark}})})),_(()=>ae(r,t())),r})()},yo="/Klaes-Soerensen-Portfolio-Public/assets/URSA.png",wo="/Klaes-Soerensen-Portfolio-Public/assets/the_snake_game.png",bo="/Klaes-Soerensen-Portfolio-Public/assets/terrain_generator.png",po="/Klaes-Soerensen-Portfolio-Public/assets/ftl.png",vo="/Klaes-Soerensen-Portfolio-Public/assets/menger_sponge.png",xo="/Klaes-Soerensen-Portfolio-Public/assets/sierpinski_triangle_fractal.png",ko="/Klaes-Soerensen-Portfolio-Public/assets/sea_of_trash.png",Co=[{imagePath:yo,title:"U.R.S.A - Educational Touch Typing Game",description:"A space-themed educational game developed in collaboration with Vitec MV to teach touch typing through gamification. Features multiplayer minigames, persistent colony progression, and support for multiple languages. Created with typed SolidJS and Go.",pdfId:"SDU - BSC - Developing Educational Games for Teaching Touch Typing",tags:["Educational Game","Touch Typing","Multiplayer","Web Development"],isFeatured:!0,relatedLinks:[{name:"Vitec MV",url:"https://www.vitec-mv.com/"}]},{imagePath:wo,title:"The Snake Game In 3D",description:"A passion project developed during summer vacation, inspired by The Coding Train's coding challenges. Created independently in 3D without following the tutorial directly.",demoUrl:"https://www.youtube.com/watch?v=yogBioVQJog",downloadUrl:"https://drive.google.com/file/d/1Jg7QSQe586pStXBInt5RwWCTmETP3RUq/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["3D","Game Development","JavaScript"]},{imagePath:bo,title:"Terrain Generator",description:"An expanded project based on The Coding Train's 'The Nature of Code' series. A visual terrain generator created for relaxation purposes.",demoUrl:"https://youtu.be/2IuRP7Y1hus",downloadUrl:"https://drive.google.com/file/d/1LivnnXRGxswARTboDR9HlbvFfWl78DzD/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Procedural Generation","Graphics"]},{imagePath:po,title:"Faster Than Light",description:"A visualization of faster-than-light space travel. Extended version created for Twitch streamer Rand118's stream pause screen.",demoUrl:"https://www.youtube.com/watch?v=JwuM0GIAC70",downloadUrl:"https://drive.google.com/file/d/1NHp2M079nYoS8IBzzcbooB0pcHh2X7TI/view",modifiedDownloadUrl:"https://drive.google.com/file/d/1Z94k0XlHET0yHqDE5ofTrGTBdLM6J1Lw/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],relatedLinks:[{name:"Modified Version",url:"https://drive.google.com/file/d/1Z94k0XlHET0yHqDE5ofTrGTBdLM6J1Lw/view"}],tags:["Visual Effects","Streaming"]},{imagePath:vo,title:"Menger Sponge Fractal",description:"A fractal visualization project that splits cubes into 27 new cubes, removing those in contact with axis. Includes attempted optimization for out-of-view cubes and zoom functionality.",demoUrl:"https://youtu.be/wsgn0FZhwNk",downloadUrl:"https://drive.google.com/file/d/1477pASOHnVxJCAAn7us2XZputru4MU_2/view",playlists:[{name:"Coding Challenge Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1CAxTf3gK1bX2lfUiU3yoJY"},{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Fractals","3D","Optimization"]},{imagePath:xo,title:"Sierpinski's Triangle Fractal",description:"A fractal generation program using a point-placement algorithm to create Sierpinski's Triangle through iterative middle-point selection. Place three points, one for each corner. Place a point at any location within the corners. Pick a random corner point and the newest point. Place a point in the middle of a line going through the two points. Repeat this process until the fractal appears.",demoUrl:"https://youtu.be/NKCWcQS50jM",downloadUrl:"https://drive.google.com/file/d/1qY2NqLm5v8WDG63HWjjMrw-4edtX6gEf/view",playlists:[{name:"Coding Playlist",url:"https://www.youtube.com/playlist?list=PL-OVYpeedL1BS_sW_OLTDAVN1UP1FIP0j"}],tags:["Fractals","Mathematics"]},{imagePath:ko,title:"Sea of Trash",description:"A semester project educational game connected to 'The Global Goals for Sustainable Development'. Players clean ecosystems by collecting trash and managing invasive species while learning through informative content. Features include: inventory management, health and air supply systems, currency-based upgrades, and a tile-based world with depth-influenced random item spawns. The map is generated using an image-to-tile conversion system for easy editing.",downloadUrl:"https://drive.google.com/file/d/1TEpBoGfbxeDcTxyC9BQ7L757GHS1FX9D/view",relatedLinks:[{name:"Global Goals",url:"https://www.verdensmaalene.dk/"}],tags:["Educational","Game Development","Environmental"]}],So=e=>C(mo,{projects:Co,get isDark(){return e.isDark},get theme(){return e.theme},get onThemeToggle(){return e.onThemeToggle}});var Ao=R('<div><div class=outer-container><div class=viewer-container><div class=controls><button class=button>← Back to Gallery</button><button class=button></button></div><div class=pdf-container><object class=pdf-frame type=application/pdf><div class=error-message><p>Unable to display PDF directly.</p><p>Attempting to load from: </p><p>You can try downloading it <a target=_blank rel="noopener noreferrer">here</a>.');const[$o,Po]=M(!1),To=e=>{const t=$n(),r=Sn();M(null);const n=$o,i=Po,o=S(()=>{const c=`/Klaes-Soerensen-Portfolio-Public/pdfs/${t.id}.pdf`;return console.log("PDF path:",c),c}),s=S(()=>ge`
    .outer-container {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${n()?"0":"2rem"};
      background: rgba(0, 0, 0, 0.2);
      z-index: 100;
    }

    .viewer-container {
      width: ${n()?"100%":"80%"};
      height: ${n()?"100%":"90%"};
      background: ${e.theme.gallery.cardBg};
      border-radius: ${n()?"0":"8px"};
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
      background: white;
    }

    .pdf-frame {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
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

    .error-message {
      padding: 1rem;
      margin: 1rem;
      background: rgba(255, 0, 0, 0.1);
      border-radius: 4px;
      color: red;
    }
  `),a=()=>{n()&&i(!1),r("/")},l=()=>{i(u=>!u)};return Ct(()=>()=>i(!1)),(()=>{var u=Ao(),c=u.firstChild,f=c.firstChild,g=f.firstChild,h=g.firstChild,d=h.nextSibling,m=g.nextSibling,w=m.firstChild,y=w.firstChild,x=y.firstChild,p=x.nextSibling;p.firstChild;var k=p.nextSibling,E=k.firstChild,L=E.nextSibling;return h.$$click=a,d.$$click=l,O(d,()=>n()?"Exit Fullscreen":"Fullscreen"),O(p,o,null),_(b=>{var B=s(),j=o(),A=o();return B!==b.e&&ae(u,b.e=B),j!==b.t&&v(w,"data",b.t=j),A!==b.a&&v(L,"href",b.a=A),b},{e:void 0,t:void 0,a:void 0}),u})()};et(["click"]);console.log("Script starting...");const Ir=document.getElementById("app");if(!Ir)throw new Error("Root element not found. Make sure there is a div with id 'app' in your HTML.");const Oo=()=>C(Bn,{base:"/Klaes-Soerensen-Portfolio-Public",get children(){return C(io,{children:e=>{const t=S(()=>({theme:e.theme,isDark:e.isDark}));return[C(jt,{path:"/",component:()=>C(So,Oe(t,{get onThemeToggle(){return e.onThemeToggle}}))}),C(jt,{path:"/pdf/:id",component:()=>C(To,Oe(t))})]}})}});rn(()=>C(Oo,{}),Ir);
