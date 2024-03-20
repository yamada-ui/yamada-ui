import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as un,z as mn}from"./fontawesome-icon-DuU4vFj3.js";import{u as fn}from"./index-rYLD436_.js";import{a as It,r as A}from"./index-CBqU2yxZ.js";import{a as Jt,h as Yt,M as pn,u as Ie,c as nn}from"./factory-Dr9dj2_3.js";import{f as tn}from"./forward-ref-DuAegr0M.js";import{a as Qt}from"./use-component-style-hxhKhc0Q.js";import{o as er}from"./theme-provider-Bm2ANCLL.js";import{b as nr}from"./icon-BEP1qdzi.js";import{C as f}from"./center-d6pbY6aS.js";import{W as Ct}from"./flex-MVd7F0CM.js";import{B as fe}from"./button-DzbywrjQ.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-Cd5bWo2e.js";import"./use-ripple-D-hcQ8Cu.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CQQhr11g.js";import"./loading-93aTLmy8.js";import"./index-BH_-S3fu.js";import"./index-C5SpnNA3.js";const{createElement:he,createContext:tr,createRef:as,forwardRef:yt,useCallback:V,useContext:St,useEffect:le,useImperativeHandle:vt,useLayoutEffect:rr,useMemo:sr,useRef:G,useState:Re}=It,hn=It.useId,or=rr,Xe=tr(null);Xe.displayName="PanelGroupContext";const ce=or,ir=typeof hn=="function"?hn:()=>null;let ar=0;function rn(e=null){const n=ir(),t=G(e||n||null);return t.current===null&&(t.current=""+ar++),e??t.current}function wt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:x,onResize:u,order:d,style:h,tagName:b="div",...j}){const C=St(Xe);if(C===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:g,expandPanel:W,getPanelSize:k,getPanelStyle:$,groupId:L,isPanelCollapsed:S,reevaluatePanelConstraints:Q,registerPanel:K,resizePanel:q,unregisterPanel:ne}=C,Z=rn(a),D=G({callbacks:{onCollapse:z,onExpand:x,onResize:u},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:Z,idIsFromProps:a!==void 0,order:d});G({didLogMissingDefaultSizeWarning:!1}),ce(()=>{const{callbacks:B,constraints:N}=D.current,J={...N};D.current.id=Z,D.current.idIsFromProps=a!==void 0,D.current.order=d,B.onCollapse=z,B.onExpand=x,B.onResize=u,N.collapsedSize=t,N.collapsible=s,N.defaultSize=i,N.maxSize=l,N.minSize=c,(J.collapsedSize!==N.collapsedSize||J.collapsible!==N.collapsible||J.maxSize!==N.maxSize||J.minSize!==N.minSize)&&Q(D.current,J)}),ce(()=>{const B=D.current;return K(B),()=>{ne(B)}},[d,Z,K,ne]),vt(o,()=>({collapse:()=>{g(D.current)},expand:()=>{W(D.current)},getId(){return Z},getSize(){return k(D.current)},isCollapsed(){return S(D.current)},isExpanded(){return!S(D.current)},resize:B=>{q(D.current,B)}}),[g,W,k,S,Z,q]);const ee=$(D.current,i);return he(b,{...j,children:e,className:n,id:a,style:{...ee,...h},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":L,"data-panel-id":Z,"data-panel-size":parseFloat(""+ee.flexGrow).toFixed(1)})}const jt=yt((e,n)=>he(wt,{...e,forwardedRef:n}));wt.displayName="Panel";jt.displayName="forwardRef(Panel)";let en=null,ae=null;function lr(e,n){if(n){const t=(n&Wt)!==0,s=(n&kt)!==0,i=(n&Mt)!==0,o=(n&Dt)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function cr(){ae!==null&&(document.head.removeChild(ae),en=null,ae=null)}function Ye(e,n){const t=lr(e,n);en!==t&&(en=t,ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${t}!important;}`)}function Pt(e){return e.type==="keydown"}function Tt(e){return e.type.startsWith("mouse")}function Et(e){return e.type.startsWith("touch")}function Ue(e){if(Tt(e))return{x:e.clientX,y:e.clientY};if(Et(e)){const n=e.touches[0];if(n&&n.clientX&&n.clientY)return{x:n.clientX,y:n.clientY}}return{x:1/0,y:1/0}}function dr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ur(e,n,t){return t?e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y:e.x<=n.x+n.width&&e.x+e.width>=n.x&&e.y<=n.y+n.height&&e.y+e.height>=n.y}function mr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:xn(e),b:xn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;w(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:bn(zn(t.a)),b:bn(zn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const fr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function pr(e){var n;const t=getComputedStyle((n=Lt(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function hr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||pr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||fr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function zn(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),hr(t))return t}return null}function bn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function xn(e){const n=[];for(;e;)n.push(e),e=Lt(e);return n}function Lt(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Wt=1,kt=2,Mt=4,Dt=8,zr=dr()==="coarse";let oe=[],qe=!1,se=new Map,Ze=new Map;const Ce=new Set;function br(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=se.get(a))!==null&&o!==void 0?o:0;return se.set(a,c+1),Ce.add(l),Ve(),function(){var x;Ze.delete(e),Ce.delete(l);const u=(x=se.get(a))!==null&&x!==void 0?x:1;se.set(a,u-1),Ve(),u===1&&se.delete(a)}}function je(e){const{target:n}=e,{x:t,y:s}=Ue(e);qe=!0,sn({target:n,x:t,y:s}),Ve(),oe.length>0&&(on("down",e),e.preventDefault())}function te(e){const{x:n,y:t}=Ue(e);if(!qe){const{target:s}=e;sn({target:s,x:n,y:t})}on("move",e),_t(),oe.length>0&&e.preventDefault()}function re(e){const{target:n}=e,{x:t,y:s}=Ue(e);Ze.clear(),qe=!1,oe.length>0&&e.preventDefault(),on("up",e),sn({target:n,x:t,y:s}),_t(),Ve()}function sn({target:e,x:n,y:t}){oe.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:z,right:x,top:u}=l,d=zr?a.coarse:a.fine;if(n>=z-d&&n<=x+d&&t>=u-d&&t<=c+d){if(s!==null&&o!==s&&!o.contains(s)&&!s.contains(o)&&mr(s,o)>0){let b=s,j=!1;for(;b&&!b.contains(o);){if(ur(b.getBoundingClientRect(),l,!0)){j=!0;break}b=b.parentElement}if(j)return}oe.push(i)}})}function Qe(e,n){Ze.set(e,n)}function _t(){let e=!1,n=!1;oe.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Ze.forEach(s=>{t|=s}),e&&n?Ye("intersection",t):e?Ye("horizontal",t):n?Ye("vertical",t):cr()}function Ve(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",re),t.removeEventListener("mousedown",je),t.removeEventListener("mouseleave",te),t.removeEventListener("mousemove",te),t.removeEventListener("touchmove",te),t.removeEventListener("touchstart",je)}),window.removeEventListener("mouseup",re),window.removeEventListener("touchcancel",re),window.removeEventListener("touchend",re),Ce.size>0&&(qe?(oe.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",re),t.addEventListener("mouseleave",te),t.addEventListener("mousemove",te),t.addEventListener("touchmove",te,{passive:!1}))}),window.addEventListener("mouseup",re),window.addEventListener("touchcancel",re),window.addEventListener("touchend",re)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("mousedown",je),t.addEventListener("mousemove",te),t.addEventListener("touchmove",te,{passive:!1}),t.addEventListener("touchstart",je))}))}function on(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=oe.includes(t);s(e,i,n)})}function w(e,n){if(!e)throw console.error(n),Error(n)}const At=10;function ye(e,n,t=At){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const s=e-n;return s===0?0:s>0?1:-1}function X(e,n,t){return ye(e,n,t)===0}function xr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!X(i,o,t))return!1}return!0}function pe({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];w(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ye(t,l)<0)if(o){const c=(i+l)/2;ye(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(At)),t}function xe({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(X(e,0))return n;const a=[...n],[l,c]=s;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const u=e<0?c:l,d=t[u];w(d,`Panel constraints not found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const C=n[u];if(w(C!=null,`Previous layout not found for panel index ${u}`),X(C,h)){const g=j-C;ye(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const u=e<0?l:c,d=t[u];w(d,`No panel constraints found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const C=n[u];if(w(C!=null,`Previous layout not found for panel index ${u}`),X(C,j)){const g=C-h;ye(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}}{const u=e<0?1:-1;let d=e<0?c:l,h=0;for(;;){const j=n[d];w(j!=null,`Previous layout not found for panel index ${d}`);const g=pe({panelConstraints:t,panelIndex:d,size:100})-j;if(h+=g,d+=u,d<0||d>=t.length)break}const b=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-b:b}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const h=Math.abs(e)-Math.abs(z),b=n[d];w(b!=null,`Previous layout not found for panel index ${d}`);const j=b-h,C=pe({panelConstraints:t,panelIndex:d,size:j});if(!X(b,C)&&(z+=b-C,a[d]=C,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(xr(i,a))return i;{const u=e<0?c:l,d=n[u];w(d!=null,`Previous layout not found for panel index ${u}`);const h=d+z,b=pe({panelConstraints:t,panelIndex:u,size:h});if(a[u]=b,!X(b,h)){let j=h-b,g=e<0?c:l;for(;g>=0&&g<t.length;){const W=a[g];w(W!=null,`Previous layout not found for panel index ${g}`);const k=W+j,$=pe({panelConstraints:t,panelIndex:g,size:k});if(X(W,$)||(j-=$-W,a[g]=$),X(j,0))break;e>0?g--:g++}}}const x=a.reduce((u,d)=>d+u,0);return X(x,100)?a:i}function gr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((u,d)=>{const{constraints:h}=u,{maxSize:b=100,minSize:j=0}=h;d===l?(s=j,i=b):(o+=j,a+=b)});const c=Math.min(i,100-o),z=Math.max(s,100-a),x=e[l];return{valueMax:c,valueMin:z,valueNow:x}}function Se(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function $t(e,n,t=document){const i=Se(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Nt(e,n,t){const s=$t(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function an(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function ve(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Rr(e,n,t,s=document){var i,o,a,l;const c=ve(n,s),z=Se(e,s),x=c?z.indexOf(c):-1,u=(i=(o=t[x])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[x+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[u,d]}function Ir({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){G({didWarnAboutMissingResizeHandle:!1}),ce(()=>{if(!o)return;const l=Se(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:z,valueMin:x,valueNow:u}=gr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const h=i[c];w(h,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",h.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(x)),d.setAttribute("aria-valuenow",u!=null?""+Math.round(u):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),le(()=>{if(!o)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,z=an(t,o);w(z!=null,`No group found for id "${t}"`);const x=Se(t,o);w(x,`No resize handles found for group id "${t}"`);const u=x.map(d=>{const h=d.getAttribute("data-panel-resize-handle-id");w(h,"Resize handle element has no handle id attribute");const[b,j]=Rr(t,h,c,o);if(b==null||j==null)return()=>{};const C=g=>{if(!g.defaultPrevented)switch(g.key){case"Enter":{g.preventDefault();const W=c.findIndex(k=>k.id===b);if(W>=0){const k=c[W];w(k,`No panel data found for index ${W}`);const $=s[W],{collapsedSize:L=0,collapsible:S,minSize:Q=0}=k.constraints;if($!=null&&S){const K=xe({delta:X($,L)?Q-L:L-$,initialLayout:s,panelConstraints:c.map(q=>q.constraints),pivotIndices:Nt(t,h,o),prevLayout:s,trigger:"keyboard"});s!==K&&a(K)}}break}}};return d.addEventListener("keydown",C),()=>{d.removeEventListener("keydown",C)}});return()=>{u.forEach(d=>d())}},[o,e,n,t,s,i,a])}function gn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Ot(e,n){const t=e==="horizontal",{x:s,y:i}=Ue(n);return t?s:i}function Cr(e,n,t,s,i){const o=t==="horizontal",a=ve(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const z=Ot(t,e),x=an(l,i);w(x,`No group element found for id "${l}"`);const u=x.getBoundingClientRect(),d=o?u.width:u.height;return(z-c)/d*100}function yr(e,n,t,s,i,o){if(Pt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Cr(e,n,t,s,o)}function Sr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=i/c;s++,n[o]=z,i-=z}return n}function ue(e,n,t){n.forEach((s,i)=>{const o=e[i];w(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:x}=l,u=t[c];if(u==null||s!==u){t[c]=s;const{onCollapse:d,onExpand:h,onResize:b}=a;b&&b(s,u),x&&(d||h)&&(h&&(u==null||u===z)&&s!==z&&h(),d&&(u==null||u!==z)&&s===z&&d())}})}function Pe(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function vr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function wr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Rn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Ht(e){return`react-resizable-panels:${e}`}function Bt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Ft(e,n){try{const t=Ht(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function jr(e,n,t){var s,i;const o=(s=Ft(e,t))!==null&&s!==void 0?s:{},a=Bt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Pr(e,n,t,s,i){var o;const a=Ht(e),l=Bt(n),c=(o=Ft(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function In({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!X(s,100))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=pe({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!X(i,0))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=a+i,c=pe({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,X(i,0)))break}return t}const Tr=100,ge={getItem:e=>(Rn(ge),ge.getItem(e)),setItem:(e,n)=>{Rn(ge),ge.setItem(e,n)}},Cn={};function Gt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=ge,style:z,tagName:x="div",...u}){const d=rn(o),h=G(null),[b,j]=Re(null),[C,g]=Re([]),W=G({}),k=G(new Map),$=G(0),L=G({autoSaveId:e,direction:s,dragState:b,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),S=G({layout:C,panelDataArray:[],panelDataArrayChanged:!1});G({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),vt(i,()=>({getId:()=>L.current.id,getLayout:()=>{const{layout:p}=S.current;return p},setLayout:p=>{const{onLayout:y}=L.current,{layout:R,panelDataArray:I}=S.current,v=In({layout:p,panelConstraints:I.map(P=>P.constraints)});gn(R,v)||(g(v),S.current.layout=v,y&&y(v),ue(I,v,W.current))}}),[]),ce(()=>{L.current.autoSaveId=e,L.current.direction=s,L.current.dragState=b,L.current.id=d,L.current.onLayout=a,L.current.storage=c}),Ir({committedValuesRef:L,eagerValuesRef:S,groupId:d,layout:C,panelDataArray:S.current.panelDataArray,setLayout:g,panelGroupElement:h.current}),le(()=>{const{panelDataArray:p}=S.current;if(e){if(C.length===0||C.length!==p.length)return;let y=Cn[e];y==null&&(y=wr(Pr,Tr),Cn[e]=y);const R=[...p],I=new Map(k.current);y(e,R,I,C,c)}},[e,C,c]),le(()=>{});const Q=V(p=>{const{onLayout:y}=L.current,{layout:R,panelDataArray:I}=S.current;if(p.constraints.collapsible){const v=I.map(U=>U.constraints),{collapsedSize:P=0,panelSize:M,pivotIndices:O}=ie(I,p,R);if(w(M!=null,`Panel size not found for panel "${p.id}"`),M!==P){k.current.set(p.id,M);const H=me(I,p)===I.length-1?M-P:P-M,_=xe({delta:H,initialLayout:R,panelConstraints:v,pivotIndices:O,prevLayout:R,trigger:"imperative-api"});Pe(R,_)||(g(_),S.current.layout=_,y&&y(_),ue(I,_,W.current))}}},[]),K=V(p=>{const{onLayout:y}=L.current,{layout:R,panelDataArray:I}=S.current;if(p.constraints.collapsible){const v=I.map(H=>H.constraints),{collapsedSize:P=0,panelSize:M,minSize:O=0,pivotIndices:U}=ie(I,p,R);if(M===P){const H=k.current.get(p.id),_=H!=null&&H>=O?H:O,Je=me(I,p)===I.length-1?M-_:_-M,F=xe({delta:Je,initialLayout:R,panelConstraints:v,pivotIndices:U,prevLayout:R,trigger:"imperative-api"});Pe(R,F)||(g(F),S.current.layout=F,y&&y(F),ue(I,F,W.current))}}},[]),q=V(p=>{const{layout:y,panelDataArray:R}=S.current,{panelSize:I}=ie(R,p,y);return w(I!=null,`Panel size not found for panel "${p.id}"`),I},[]),ne=V((p,y)=>{const{panelDataArray:R}=S.current,I=me(R,p);return vr({defaultSize:y,dragState:b,layout:C,panelData:R,panelIndex:I})},[b,C]),Z=V(p=>{const{layout:y,panelDataArray:R}=S.current,{collapsedSize:I=0,collapsible:v,panelSize:P}=ie(R,p,y);return v===!0&&P===I},[]),D=V(p=>{const{layout:y,panelDataArray:R}=S.current,{collapsedSize:I=0,collapsible:v,panelSize:P}=ie(R,p,y);return w(P!=null,`Panel size not found for panel "${p.id}"`),!v||P>I},[]),ee=V(p=>{const{panelDataArray:y}=S.current;y.push(p),y.sort((R,I)=>{const v=R.order,P=I.order;return v==null&&P==null?0:v==null?-1:P==null?1:v-P}),S.current.panelDataArrayChanged=!0},[]);ce(()=>{if(S.current.panelDataArrayChanged){S.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:y,storage:R}=L.current,{layout:I,panelDataArray:v}=S.current;let P=null;if(p){const O=jr(p,v,R);O&&(k.current=new Map(Object.entries(O.expandToSizes)),P=O.layout)}P==null&&(P=Sr({panelDataArray:v}));const M=In({layout:P,panelConstraints:v.map(O=>O.constraints)});gn(I,M)||(g(M),S.current.layout=M,y&&y(M),ue(v,M,W.current))}}),ce(()=>{const p=S.current;return()=>{p.layout=[]}},[]);const B=V(p=>function(R){R.preventDefault();const I=h.current;if(!I)return()=>null;const{direction:v,dragState:P,id:M,keyboardResizeBy:O,onLayout:U}=L.current,{layout:H,panelDataArray:_}=S.current,{initialLayout:de}=P??{},Je=Nt(M,p,I);let F=yr(R,p,v,P,O,I);if(F===0)return;const cn=v==="horizontal";document.dir==="rtl"&&cn&&(F=-F);const qt=_.map(Zt=>Zt.constraints),be=xe({delta:F,initialLayout:de??H,panelConstraints:qt,pivotIndices:Je,prevLayout:H,trigger:Pt(R)?"keyboard":"mouse-or-touch"}),dn=!Pe(H,be);(Tt(R)||Et(R))&&$.current!=F&&($.current=F,dn?Qe(p,0):cn?Qe(p,F<0?Wt:kt):Qe(p,F<0?Mt:Dt)),dn&&(g(be),S.current.layout=be,U&&U(be),ue(_,be,W.current))},[]),N=V((p,y)=>{const{onLayout:R}=L.current,{layout:I,panelDataArray:v}=S.current,P=v.map(de=>de.constraints),{panelSize:M,pivotIndices:O}=ie(v,p,I);w(M!=null,`Panel size not found for panel "${p.id}"`);const H=me(v,p)===v.length-1?M-y:y-M,_=xe({delta:H,initialLayout:I,panelConstraints:P,pivotIndices:O,prevLayout:I,trigger:"imperative-api"});Pe(I,_)||(g(_),S.current.layout=_,R&&R(_),ue(v,_,W.current))},[]),J=V((p,y)=>{const{layout:R,panelDataArray:I}=S.current,{collapsedSize:v=0,collapsible:P}=y,{collapsedSize:M=0,collapsible:O,maxSize:U=100,minSize:H=0}=p.constraints,{panelSize:_}=ie(I,p,R);_!=null&&(P&&O&&_===v?v!==M&&N(p,M):_<H?N(p,H):_>U&&N(p,U))},[N]),we=V((p,y)=>{const{direction:R}=L.current,{layout:I}=S.current;if(!h.current)return;const v=ve(p,h.current);w(v,`Drag handle element not found for id "${p}"`);const P=Ot(R,y);j({dragHandleId:p,dragHandleRect:v.getBoundingClientRect(),initialCursorPosition:P,initialLayout:I})},[]),ze=V(()=>{j(null)},[]),Y=V(p=>{const{panelDataArray:y}=S.current,R=me(y,p);R>=0&&(y.splice(R,1),delete W.current[p.id],S.current.panelDataArrayChanged=!0)},[]),Xt=sr(()=>({collapsePanel:Q,direction:s,dragState:b,expandPanel:K,getPanelSize:q,getPanelStyle:ne,groupId:d,isPanelCollapsed:Z,isPanelExpanded:D,reevaluatePanelConstraints:J,registerPanel:ee,registerResizeHandle:B,resizePanel:N,startDragging:we,stopDragging:ze,unregisterPanel:Y,panelGroupElement:h.current}),[Q,b,s,K,q,ne,d,Z,D,J,ee,B,N,we,ze,Y]),Ut={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return he(Xe.Provider,{value:Xt},he(x,{...u,children:n,className:t,id:o,ref:h,style:{...Ut,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Kt=yt((e,n)=>he(Gt,{...e,forwardedRef:n}));Gt.displayName="PanelGroup";Kt.displayName="forwardRef(PanelGroup)";function me(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ie(e,n,t){const s=me(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Er({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){le(()=>{if(e||t==null||s==null)return;const i=ve(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");w(l,`No group element found for id "${l}"`);const c=Se(l,s),z=$t(l,n,s);w(z!==null,`No resize element found for id "${n}"`);const x=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[x].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Vt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onDragging:o,style:a={},tabIndex:l=0,tagName:c="div",...z}){const x=G(null),u=G({onDragging:o});le(()=>{u.current.onDragging=o});const d=St(Xe);if(d===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:h,groupId:b,registerResizeHandle:j,startDragging:C,stopDragging:g,panelGroupElement:W}=d,k=rn(i),[$,L]=Re("inactive"),[S,Q]=Re(!1),[K,q]=Re(null),ne=G({state:$});return ce(()=>{ne.current.state=$}),le(()=>{if(t)q(null);else{const D=j(k);q(()=>D)}},[t,k,j]),le(()=>{var D,ee;if(t||K==null)return;const B=x.current;w(B,"Element ref not attached");const N=(J,we,ze)=>{if(we)switch(J){case"down":{L("drag"),C(k,ze);const{onDragging:Y}=u.current;Y&&Y(!0);break}case"move":{const{state:Y}=ne.current;Y!=="drag"&&L("hover"),K(ze);break}case"up":{L("hover"),g();const{onDragging:Y}=u.current;Y&&Y(!1);break}}else L("inactive")};return br(k,B,h,{coarse:(D=s==null?void 0:s.coarse)!==null&&D!==void 0?D:15,fine:(ee=s==null?void 0:s.fine)!==null&&ee!==void 0?ee:5},N)},[h,t,s,j,k,K,C,g]),Er({disabled:t,handleId:k,resizeHandler:K,panelGroupElement:W}),he(c,{...z,children:e,className:n,id:i,onBlur:()=>Q(!1),onFocus:()=>Q(!0),ref:x,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":h,"data-panel-group-id":b,"data-resize-handle":"","data-resize-handle-active":$==="drag"?"pointer":S?"keyboard":void 0,"data-resize-handle-state":$,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":k})}Vt.displayName="PanelResizeHandle";function Lr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Wr,ln]=Jt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),kr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:i=!1,onLayout:o,storage:a,ref:l,groupProps:c,...z})=>{e??(e=A.useId());const x=A.useCallback((d={},h=null)=>({...d,ref:h,...z}),[z]),u=A.useCallback((d={})=>{const{as:h,...b}=c??{};return{...d,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...b}},[e,n,c,t,s,o,a]);return A.useEffect(()=>{if(!e)return;const d=an(e);l&&(l.current=d)},[l,e]),{isDisabled:i,getContainerProps:x,getGroupProps:u}},Mr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:i,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:x,controlRef:u,containerProps:d,...h})=>{e??(e=A.useId());const b=A.useCallback((C={})=>{const{as:g,...W}=d??{};return{...C,ref:u,id:e,tagName:g,collapsible:s,defaultSize:i,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:x,...W}},[e,u,d,t,s,i,o,a,l,c,z,x]),j=A.useCallback((C={},g=null)=>({...C,ref:g,...h}),[h]);return A.useEffect(()=>{if(!e)return;const C=Lr(e);n&&(n.current=C)},[n,e]),{getPanelProps:b,getItemProps:j}},Dr=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{e??(e=A.useId());const{isDisabled:l}=ln(),[c,z]=A.useState(!1),x=s||i||l,u=A.useCallback((h={})=>({...h,id:e,tagName:t,disabled:x,onDragging:Yt(o,b=>z(b)),...a,"data-active":pn(c),style:{...h.style,...a.style,...x?{cursor:"default"}:{}}}),[e,t,x,o,a,c]),d=A.useCallback((h={},b=null)=>({...h,ref:b,"data-active":pn(c)}),[c]);return A.useEffect(()=>{if(!e)return;const h=ve(e);n&&(n.current=h)},[n,e]),{getTriggerProps:u,getIconProps:d}},E=tn(({direction:e="horizontal",...n},t)=>{const[s,i]=Qt("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=er(i),{getContainerProps:z,getGroupProps:x,...u}=kr({ref:t,...c}),d={w:"100%",h:"100%",...s.container};return r.jsx(Wr,{value:{styles:s,...u},children:r.jsx(Ie.div,{className:nn("ui-resizable",o),__css:d,...z({},l),children:r.jsx(Kt,{...x(),children:a})})})}),_r=new Set(["order"]),Ar=Ie(jt,{disableStyleProp:e=>_r.has(e)}),m=tn(({className:e,children:n,innerRef:t,w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:x,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j,...C},g)=>{const{styles:W}=ln(),{getPanelProps:k,getItemProps:$}=Mr({ref:g,...C}),L={boxSize:"100%",...W.item};return r.jsx(Ar,{...k({w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:x,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j}),children:r.jsx(Ie.div,{className:nn("ui-resizable__item",e),__css:L,...$({},t),children:n})})}),T=tn(({className:e,icon:n,children:t,iconProps:s,...i},o)=>{const{styles:a}=ln(),{getTriggerProps:l,getIconProps:c}=Dr({ref:o,...i}),z={position:"relative",...a.trigger};return r.jsxs(Ie.div,{as:Vt,className:nn("ui-resizable__trigger",e),__css:z,...l(),children:[n?r.jsx(Ie.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})}),yn=e=>r.jsxs(nr,{viewBox:"0 0 23 39",w:"0.5rem",h:"1rem",...e,children:[r.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),ls={title:"Components / Data Display / Resizable",component:E},Te=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Ee=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),We=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),ke=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Me=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),De=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),Ae=()=>{const e=A.useRef(null),n=A.useRef(null),t=A.useRef(null),s=A.useRef(null),i=A.useRef(null);return A.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(m,{as:f,children:"Two"})]})},$e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(yn,{})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(E,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(yn,{})}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(un,{icon:mn})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(un,{icon:mn})}),r.jsx(m,{as:f,children:"Two"})]})]}),Oe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Bottom"})]})})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(E,{children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Right"})]})})]})]}),He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]})]}),Be=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Fe=()=>{const[e,n]=fn(!0),[t,s]=fn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]}),r.jsxs(Ct,{gap:"md",children:[r.jsxs(fe,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(fe,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(m,{as:f,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(m,{as:f,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(m,{as:f,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Ge=()=>{const e=A.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]})},Ke=()=>{const e=A.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Ct,{gap:"md",children:[r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]})};var Sn,vn,wn;Te.parameters={...Te.parameters,docs:{...(Sn=Te.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(wn=(vn=Te.parameters)==null?void 0:vn.docs)==null?void 0:wn.source}}};var jn,Pn,Tn;Ee.parameters={...Ee.parameters,docs:{...(jn=Ee.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable variant="unstyled" h="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Tn=(Pn=Ee.parameters)==null?void 0:Pn.docs)==null?void 0:Tn.source}}};var En,Ln,Wn;Le.parameters={...Le.parameters,docs:{...(En=Le.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <>
      <Resizable variant="spacer" colorScheme="primary" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable variant="spacer" colorScheme="red" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(Wn=(Ln=Le.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var kn,Mn,Dn;We.parameters={...We.parameters,docs:{...(kn=We.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <>
      <Resizable direction="horizontal" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Dn=(Mn=We.parameters)==null?void 0:Mn.docs)==null?void 0:Dn.source}}};var _n,An,$n;ke.parameters={...ke.parameters,docs:{...(_n=ke.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...($n=(An=ke.parameters)==null?void 0:An.docs)==null?void 0:$n.source}}};var Nn,On,Hn;Me.parameters={...Me.parameters,docs:{...(Nn=Me.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Hn=(On=Me.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Bn,Fn,Gn;De.parameters={...De.parameters,docs:{...(Bn=De.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Gn=(Fn=De.parameters)==null?void 0:Fn.docs)==null?void 0:Gn.source}}};var Kn,Vn,Xn;_e.parameters={..._e.parameters,docs:{...(Kn=_e.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center} collapsedSize={5} collapsible defaultSize={15} minSize={15} maxSize={20} onCollapse={() => {
        console.log("collapsed item");
      }} onExpand={() => {
        console.log("expand item");
      }}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center} collapsedSize={10} collapsible defaultSize={25} minSize={25} maxSize={30} onCollapse={() => {
        console.log("collapsed item");
      }} onExpand={() => {
        console.log("expand item");
      }}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Xn=(Vn=_e.parameters)==null?void 0:Vn.docs)==null?void 0:Xn.source}}};var Un,qn,Zn;Ae.parameters={...Ae.parameters,docs:{...(Un=Ae.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("Container ref", containerRef);
    console.log("Group ref", groupRef);
    console.log("Item ref", itemRef);
    console.log("Item inner ref", innerRef);
    console.log("Trigger ref", triggerRef);
  }, []);
  return <Resizable ref={groupRef} containerRef={containerRef} h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} ref={itemRef} innerRef={innerRef}>
        One
      </ResizableItem>

      <ResizableTrigger ref={triggerRef} />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Zn=(qn=Ae.parameters)==null?void 0:qn.docs)==null?void 0:Zn.source}}};var Jn,Yn,Qn;$e.parameters={...$e.parameters,docs:{...(Jn=$e.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<ResizableTriggerIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" variant="spacer" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger icon={<ResizableTriggerIcon />} />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(Qn=(Yn=$e.parameters)==null?void 0:Yn.docs)==null?void 0:Qn.source}}};var et,nt,tt;Ne.parameters={...Ne.parameters,docs:{...(et=Ne.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<Icon icon={faArrowsLeftRight} />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<Icon icon={faArrowsLeftRight} />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(tt=(nt=Ne.parameters)==null?void 0:nt.docs)==null?void 0:tt.source}}};var rt,st,ot;Oe.parameters={...Oe.parameters,docs:{...(rt=Oe.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>Left</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>
          <Resizable direction="vertical">
            <ResizableItem as={Center}>Top</ResizableItem>

            <ResizableTrigger />

            <ResizableItem as={Center}>Bottom</ResizableItem>
          </Resizable>
        </ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>Top</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>
          <Resizable>
            <ResizableItem as={Center}>Left</ResizableItem>

            <ResizableTrigger />

            <ResizableItem as={Center}>Right</ResizableItem>
          </Resizable>
        </ResizableItem>
      </Resizable>
    </>;
}`,...(ot=(st=Oe.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,at,lt;He.parameters={...He.parameters,docs:{...(it=He.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <>
      <Resizable isDisabled h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>

      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger isDisabled />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>
    </>;
}`,...(lt=(at=He.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ct,dt,ut;Be.parameters={...Be.parameters,docs:{...(ct=Be.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(ut=(dt=Be.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,ft,pt;Fe.parameters={...Fe.parameters,docs:{...(mt=Fe.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  const [showLeft, showLeftControls] = useBoolean(true);
  const [showRight, showRightControls] = useBoolean(true);
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px" storageKey="persistence">
        <ResizableItem as={Center} id="one">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} id="two">
          Two
        </ResizableItem>
      </Resizable>

      <Wrap gap="md">
        <Button onClick={showLeftControls.toggle}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={showRightControls.toggle}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable h="md" rounded="md" borderWidth="1px" storageKey="conditional">
        {showLeft ? <>
            <ResizableItem as={Center} id="left" minSize={10} order={1}>
              Left
            </ResizableItem>

            <ResizableTrigger />
          </> : null}

        <ResizableItem as={Center} id="middle" minSize={10} order={2}>
          Middle
        </ResizableItem>

        {showRight ? <>
            <ResizableTrigger />

            <ResizableItem as={Center} id="right" minSize={10} order={3}>
              Right
            </ResizableItem>
          </> : null}
      </Resizable>
    </>;
}`,...(pt=(ft=Fe.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var ht,zt,bt;Ge.parameters={...Ge.parameters,docs:{...(ht=Ge.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  const storage: ResizableStorage = useMemo(() => ({
    getItem: key => {
      const match = document.cookie.match(new RegExp(\`(^| )\${key}=([^;]+)\`));
      return match ? match[2] : null;
    },
    setItem: (key, value) => {
      document.cookie = \`\${key}=\${value}; max-age=31536000; path=/\`;
    }
  }), []);
  return <Resizable h="md" rounded="md" borderWidth="1px" storageKey="persistence" storage={storage}>
      <ResizableItem as={Center} id="one">
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center} id="two">
        Two
      </ResizableItem>
    </Resizable>;
}`,...(bt=(zt=Ge.parameters)==null?void 0:zt.docs)==null?void 0:bt.source}}};var xt,gt,Rt;Ke.parameters={...Ke.parameters,docs:{...(xt=Ke.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  const controlRef = useRef<ResizableItemControl>(null);
  return <>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.collapse()}>
          Collapse "one"
        </Button>

        <Button onClick={() => controlRef.current?.expand()}>
          Expand "one"
        </Button>
        <Button onClick={() => controlRef.current?.resize(30)}>
          Resize "one" to 30
        </Button>

        <Button onClick={() => controlRef.current?.resize(50)}>
          Resize "one" to 50
        </Button>
      </Wrap>

      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center} controlRef={controlRef} collapsible collapsedSize={15} minSize={30} maxSize={50}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Rt=(gt=Ke.parameters)==null?void 0:gt.docs)==null?void 0:Rt.source}}};const cs=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{cs as __namedExportsOrder,Te as basic,Ke as customControls,Ne as customIcon,ls as default,He as isDisabled,Oe as nestedResizable,Ge as useCookieStorage,Fe as useLocaleStorage,Be as useOnResize,_e as withCollapsible,Le as withColorScheme,ke as withDefaultSize,We as withDirection,$e as withIcon,De as withKeyboardStep,Me as withMinMaxSize,Ae as withRefs,Ee as withVariant};
