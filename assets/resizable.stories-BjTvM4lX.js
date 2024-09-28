import{j as r}from"./extends-CwFRzn3r.js";import{a as Ct,r as _}from"./index-BwDkhjyp.js";import{u as zn}from"./index-Du0-7Fls.js";import{o as Zt,h as Qt,d as bn,b as ve,c as ln}from"./factory-CYpx3TMG.js";import{f as jt}from"./forward-ref-BWI-Phbn.js";import{a as er}from"./use-component-style-CfUS8Ki1.js";import{o as nr}from"./theme-provider-BZKkW4ID.js";import{G as gn,M as xn}from"./move-horizontal-DvOt3fuc.js";import{C as p}from"./center-pYBjMgrp.js";import{W as Pt}from"./flex-Dpl6_edk.js";import{B as ze}from"./button-Bx26J9Y6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-cfLZgeB_.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";const{createElement:Re,createContext:tr,createRef:ss,forwardRef:Tt,useCallback:G,useContext:Et,useEffect:ce,useImperativeHandle:Lt,useLayoutEffect:rr,useMemo:sr,useRef:F,useState:ge}=Ct,Rn=Ct[`useId${Math.random()}`.slice(0,5)],or=rr,Ze=tr(null);Ze.displayName="PanelGroupContext";const de=or,ir=typeof Rn=="function"?Rn:()=>null;let ar=0;function cn(e=null){const n=ir(),t=F(e||n||null);return t.current===null&&(t.current=""+ar++),e??t.current}function Wt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:h,onExpand:x,onResize:m,order:d,style:b,tagName:z="div",...v}){const j=Et(Ze);if(j===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:g,expandPanel:L,getPanelSize:W,getPanelStyle:O,groupId:K,isPanelCollapsed:k,reevaluatePanelConstraints:R,registerPanel:V,resizePanel:q,unregisterPanel:se}=j,X=cn(a),A=F({callbacks:{onCollapse:h,onExpand:x,onResize:m},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:X,idIsFromProps:a!==void 0,order:d});F({didLogMissingDefaultSizeWarning:!1}),de(()=>{const{callbacks:N,constraints:H}=A.current,B={...H};A.current.id=X,A.current.idIsFromProps=a!==void 0,A.current.order=d,N.onCollapse=h,N.onExpand=x,N.onResize=m,H.collapsedSize=t,H.collapsible=s,H.defaultSize=i,H.maxSize=l,H.minSize=c,(B.collapsedSize!==H.collapsedSize||B.collapsible!==H.collapsible||B.maxSize!==H.maxSize||B.minSize!==H.minSize)&&R(A.current,B)}),de(()=>{const N=A.current;return V(N),()=>{se(N)}},[d,X,V,se]),Lt(o,()=>({collapse:()=>{g(A.current)},expand:N=>{L(A.current,N)},getId(){return X},getSize(){return W(A.current)},isCollapsed(){return k(A.current)},isExpanded(){return!k(A.current)},resize:N=>{q(A.current,N)}}),[g,L,W,k,X,q]);const te=O(A.current,i);return Re(z,{...v,children:e,className:n,id:a,style:{...te,...b},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":K,"data-panel-id":X,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const kt=Tt((e,n)=>Re(Wt,{...e,forwardedRef:n}));Wt.displayName="Panel";kt.displayName="forwardRef(Panel)";let an=null,le=null;function lr(e,n){if(n){const t=(n&Ot)!==0,s=(n&$t)!==0,i=(n&Nt)!==0,o=(n&Ht)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function cr(){le!==null&&(document.head.removeChild(le),an=null,le=null)}function sn(e,n){const t=lr(e,n);an!==t&&(an=t,le===null&&(le=document.createElement("style"),document.head.appendChild(le)),le.innerHTML=`*{cursor: ${t}!important;}`)}function Mt(e){return e.type==="keydown"}function Dt(e){return e.type.startsWith("pointer")}function _t(e){return e.type.startsWith("mouse")}function Qe(e){if(Dt(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(_t(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function dr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ur(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function mr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Sn(e),b:Sn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;w(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:yn(In(t.a)),b:yn(In(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const fr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function pr(e){var n;const t=getComputedStyle((n=At(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function hr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||pr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||fr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function In(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),hr(t))return t}return null}function yn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Sn(e){const n=[];for(;e;)n.push(e),e=At(e);return n}function At(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Ot=1,$t=2,Nt=4,Ht=8,zr=dr()==="coarse";let Q=[],xe=!1,re=new Map,en=new Map;const Ce=new Set;function br(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),Ce.add(l),Je(),function(){var x;en.delete(e),Ce.delete(l);const m=(x=re.get(a))!==null&&x!==void 0?x:1;if(re.set(a,m-1),Je(),m===1&&re.delete(a),Q.includes(l)){const d=Q.indexOf(l);d>=0&&Q.splice(d,1),un(),i("up",!0,null)}}}function wn(e){const{target:n}=e,{x:t,y:s}=Qe(e);xe=!0,dn({target:n,x:t,y:s}),Je(),Q.length>0&&(Ye("down",e),e.preventDefault(),e.stopPropagation())}function ye(e){const{x:n,y:t}=Qe(e);if(xe&&e.buttons===0&&(xe=!1,Ye("up",e)),!xe){const{target:s}=e;dn({target:s,x:n,y:t})}Ye("move",e),un(),Q.length>0&&e.preventDefault()}function fe(e){const{target:n}=e,{x:t,y:s}=Qe(e);en.clear(),xe=!1,Q.length>0&&e.preventDefault(),Ye("up",e),dn({target:n,x:t,y:s}),un(),Je()}function dn({target:e,x:n,y:t}){Q.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:h,right:x,top:m}=l,d=zr?a.coarse:a.fine;if(n>=h-d&&n<=x+d&&t>=m-d&&t<=c+d){if(s!==null&&o!==s&&!o.contains(s)&&!s.contains(o)&&mr(s,o)>0){let z=s,v=!1;for(;z&&!z.contains(o);){if(ur(z.getBoundingClientRect(),l)){v=!0;break}z=z.parentElement}if(v)return}Q.push(i)}})}function on(e,n){en.set(e,n)}function un(){let e=!1,n=!1;Q.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;en.forEach(s=>{t|=s}),e&&n?sn("intersection",t):e?sn("horizontal",t):n?sn("vertical",t):cr()}function Je(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",fe),t.removeEventListener("pointerdown",wn),t.removeEventListener("pointerleave",ye),t.removeEventListener("pointermove",ye)}),window.removeEventListener("pointerup",fe),window.removeEventListener("pointercancel",fe),Ce.size>0&&(xe?(Q.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",fe),t.addEventListener("pointerleave",ye),t.addEventListener("pointermove",ye))}),window.addEventListener("pointerup",fe),window.addEventListener("pointercancel",fe)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",wn,{capture:!0}),t.addEventListener("pointermove",ye))}))}function Ye(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=Q.includes(t);s(e,i,n)})}function gr(){const[e,n]=ge(0);return G(()=>n(t=>t+1),[])}function w(e,n){if(!e)throw console.error(n),Error(n)}const mn=10;function ue(e,n,t=mn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=mn){return ue(e,n,t)===0}function U(e,n,t){return ue(e,n,t)===0}function xr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!U(i,o,t))return!1}return!0}function be({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];w(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ue(t,l)<0)if(o){const c=(i+l)/2;ue(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(mn)),t}function Se({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(U(e,0))return n;const a=[...n],[l,c]=s;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let h=0;if(o==="keyboard"){{const m=e<0?c:l,d=t[m];w(d,`Panel constraints not found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:v=0}=d;if(z){const j=n[m];if(w(j!=null,`Previous layout not found for panel index ${m}`),U(j,b)){const g=v-j;ue(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const m=e<0?l:c,d=t[m];w(d,`No panel constraints found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:v=0}=d;if(z){const j=n[m];if(w(j!=null,`Previous layout not found for panel index ${m}`),U(j,v)){const g=j-b;ue(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}}{const m=e<0?1:-1;let d=e<0?c:l,b=0;for(;;){const v=n[d];w(v!=null,`Previous layout not found for panel index ${d}`);const g=be({panelConstraints:t,panelIndex:d,size:100})-v;if(b+=g,d+=m,d<0||d>=t.length)break}const z=Math.min(Math.abs(e),Math.abs(b));e=e<0?0-z:z}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const b=Math.abs(e)-Math.abs(h),z=n[d];w(z!=null,`Previous layout not found for panel index ${d}`);const v=z-b,j=be({panelConstraints:t,panelIndex:d,size:v});if(!U(z,j)&&(h+=z-j,a[d]=j,h.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(xr(i,a))return i;{const m=e<0?c:l,d=n[m];w(d!=null,`Previous layout not found for panel index ${m}`);const b=d+h,z=be({panelConstraints:t,panelIndex:m,size:b});if(a[m]=z,!U(z,b)){let v=b-z,g=e<0?c:l;for(;g>=0&&g<t.length;){const L=a[g];w(L!=null,`Previous layout not found for panel index ${g}`);const W=L+v,O=be({panelConstraints:t,panelIndex:g,size:W});if(U(L,O)||(v-=O-L,a[g]=O),U(v,0))break;e>0?g--:g++}}}const x=a.reduce((m,d)=>d+m,0);return U(x,100)?a:i}function Rr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((m,d)=>{const{constraints:b}=m,{maxSize:z=100,minSize:v=0}=b;d===l?(s=v,i=z):(o+=v,a+=z)});const c=Math.min(i,100-o),h=Math.max(s,100-a),x=e[l];return{valueMax:c,valueMin:h,valueNow:x}}function je(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Bt(e,n,t=document){const i=je(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Gt(e,n,t){const s=Bt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function fn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Ir(e,n,t,s=document){var i,o,a,l;const c=Pe(n,s),h=je(e,s),x=c?h.indexOf(c):-1,m=(i=(o=t[x])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[x+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[m,d]}function yr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){F({didWarnAboutMissingResizeHandle:!1}),de(()=>{if(!o)return;const l=je(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:h,valueMin:x,valueNow:m}=Rr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const b=i[c];w(b,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",b.id),d.setAttribute("aria-valuemax",""+Math.round(h)),d.setAttribute("aria-valuemin",""+Math.round(x)),d.setAttribute("aria-valuenow",m!=null?""+Math.round(m):"")}}return()=>{l.forEach((c,h)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),ce(()=>{if(!o)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,h=fn(t,o);w(h!=null,`No group found for id "${t}"`);const x=je(t,o);w(x,`No resize handles found for group id "${t}"`);const m=x.map(d=>{const b=d.getAttribute("data-panel-resize-handle-id");w(b,"Resize handle element has no handle id attribute");const[z,v]=Ir(t,b,c,o);if(z==null||v==null)return()=>{};const j=g=>{if(!g.defaultPrevented)switch(g.key){case"Enter":{g.preventDefault();const L=c.findIndex(W=>W.id===z);if(L>=0){const W=c[L];w(W,`No panel data found for index ${L}`);const O=s[L],{collapsedSize:K=0,collapsible:k,minSize:R=0}=W.constraints;if(O!=null&&k){const V=Se({delta:U(O,K)?R-K:K-O,initialLayout:s,panelConstraints:c.map(q=>q.constraints),pivotIndices:Gt(t,b,o),prevLayout:s,trigger:"keyboard"});s!==V&&a(V)}}break}}};return d.addEventListener("keydown",j),()=>{d.removeEventListener("keydown",j)}});return()=>{m.forEach(d=>d())}},[o,e,n,t,s,i,a])}function vn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Ft(e,n){const t=e==="horizontal",{x:s,y:i}=Qe(n);return t?s:i}function Sr(e,n,t,s,i){const o=t==="horizontal",a=Pe(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const h=Ft(t,e),x=fn(l,i);w(x,`No group element found for id "${l}"`);const m=x.getBoundingClientRect(),d=o?m.width:m.height;return(h-c)/d*100}function wr(e,n,t,s,i,o){if(Mt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Sr(e,n,t,s,o)}function vr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,h=i/c;s++,n[o]=h,i-=h}return n}function pe(e,n,t){n.forEach((s,i)=>{const o=e[i];w(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:h=0,collapsible:x}=l,m=t[c];if(m==null||s!==m){t[c]=s;const{onCollapse:d,onExpand:b,onResize:z}=a;z&&z(s,m),x&&(d||b)&&(b&&(m==null||ne(m,h))&&!ne(s,h)&&b(),d&&(m==null||!ne(m,h))&&ne(s,h)&&d())}})}function We(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Cr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function jr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Cn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Kt(e){return`react-resizable-panels:${e}`}function Vt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Ut(e,n){try{const t=Kt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Pr(e,n,t){var s,i;const o=(s=Ut(e,t))!==null&&s!==void 0?s:{},a=Vt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Tr(e,n,t,s,i){var o;const a=Kt(e),l=Vt(n),c=(o=Ut(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(h){console.error(h)}}function jn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!U(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=be({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!U(i,0))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=a+i,c=be({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,U(i,0)))break}return t}const Er=100,we={getItem:e=>(Cn(we),we.getItem(e)),setItem:(e,n)=>{Cn(we),we.setItem(e,n)}},Pn={};function qt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=we,style:h,tagName:x="div",...m}){const d=cn(o),b=F(null),[z,v]=ge(null),[j,g]=ge([]),L=gr(),W=F({}),O=F(new Map),K=F(0),k=F({autoSaveId:e,direction:s,dragState:z,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),R=F({layout:j,panelDataArray:[],panelDataArrayChanged:!1});F({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Lt(i,()=>({getId:()=>k.current.id,getLayout:()=>{const{layout:u}=R.current;return u},setLayout:u=>{const{onLayout:C}=k.current,{layout:S,panelDataArray:I}=R.current,y=jn({layout:u,panelConstraints:I.map(P=>P.constraints)});vn(S,y)||(g(y),R.current.layout=y,C&&C(y),pe(I,y,W.current))}}),[]),de(()=>{k.current.autoSaveId=e,k.current.direction=s,k.current.dragState=z,k.current.id=d,k.current.onLayout=a,k.current.storage=c}),yr({committedValuesRef:k,eagerValuesRef:R,groupId:d,layout:j,panelDataArray:R.current.panelDataArray,setLayout:g,panelGroupElement:b.current}),ce(()=>{const{panelDataArray:u}=R.current;if(e){if(j.length===0||j.length!==u.length)return;let C=Pn[e];C==null&&(C=jr(Tr,Er),Pn[e]=C);const S=[...u],I=new Map(O.current);C(e,S,I,j,c)}},[e,j,c]),ce(()=>{});const V=G(u=>{const{onLayout:C}=k.current,{layout:S,panelDataArray:I}=R.current;if(u.constraints.collapsible){const y=I.map(Y=>Y.constraints),{collapsedSize:P=0,panelSize:M,pivotIndices:$}=ae(I,u,S);if(w(M!=null,`Panel size not found for panel "${u.id}"`),!ne(M,P)){O.current.set(u.id,M);const J=he(I,u)===I.length-1?M-P:P-M,D=Se({delta:J,initialLayout:S,panelConstraints:y,pivotIndices:$,prevLayout:S,trigger:"imperative-api"});We(S,D)||(g(D),R.current.layout=D,C&&C(D),pe(I,D,W.current))}}},[]),q=G((u,C)=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:y}=R.current;if(u.constraints.collapsible){const P=y.map(Z=>Z.constraints),{collapsedSize:M=0,panelSize:$=0,minSize:Y=0,pivotIndices:J}=ae(y,u,I),D=C??Y;if(ne($,M)){const Z=O.current.get(u.id),Ee=Z!=null&&Z>=D?Z:D,Le=he(y,u)===y.length-1?$-Ee:Ee-$,ie=Se({delta:Le,initialLayout:I,panelConstraints:P,pivotIndices:J,prevLayout:I,trigger:"imperative-api"});We(I,ie)||(g(ie),R.current.layout=ie,S&&S(ie),pe(y,ie,W.current))}}},[]),se=G(u=>{const{layout:C,panelDataArray:S}=R.current,{panelSize:I}=ae(S,u,C);return w(I!=null,`Panel size not found for panel "${u.id}"`),I},[]),X=G((u,C)=>{const{panelDataArray:S}=R.current,I=he(S,u);return Cr({defaultSize:C,dragState:z,layout:j,panelData:S,panelIndex:I})},[z,j]),A=G(u=>{const{layout:C,panelDataArray:S}=R.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,u,C);return w(P!=null,`Panel size not found for panel "${u.id}"`),y===!0&&ne(P,I)},[]),te=G(u=>{const{layout:C,panelDataArray:S}=R.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,u,C);return w(P!=null,`Panel size not found for panel "${u.id}"`),!y||ue(P,I)>0},[]),N=G(u=>{const{panelDataArray:C}=R.current;C.push(u),C.sort((S,I)=>{const y=S.order,P=I.order;return y==null&&P==null?0:y==null?-1:P==null?1:y-P}),R.current.panelDataArrayChanged=!0,L()},[L]);de(()=>{if(R.current.panelDataArrayChanged){R.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:C,storage:S}=k.current,{layout:I,panelDataArray:y}=R.current;let P=null;if(u){const $=Pr(u,y,S);$&&(O.current=new Map(Object.entries($.expandToSizes)),P=$.layout)}P==null&&(P=vr({panelDataArray:y}));const M=jn({layout:P,panelConstraints:y.map($=>$.constraints)});vn(I,M)||(g(M),R.current.layout=M,C&&C(M),pe(y,M,W.current))}}),de(()=>{const u=R.current;return()=>{u.layout=[]}},[]);const H=G(u=>function(S){S.preventDefault();const I=b.current;if(!I)return()=>null;const{direction:y,dragState:P,id:M,keyboardResizeBy:$,onLayout:Y}=k.current,{layout:J,panelDataArray:D}=R.current,{initialLayout:Z}=P??{},Ee=Gt(M,u,I);let ee=wr(S,u,y,P,$,I);const Le=y==="horizontal";document.dir==="rtl"&&Le&&(ee=-ee);const ie=D.map(Yt=>Yt.constraints),Ie=Se({delta:ee,initialLayout:Z??J,panelConstraints:ie,pivotIndices:Ee,prevLayout:J,trigger:Mt(S)?"keyboard":"mouse-or-touch"}),hn=!We(J,Ie);(Dt(S)||_t(S))&&K.current!=ee&&(K.current=ee,!hn&&ee!==0?Le?on(u,ee<0?Ot:$t):on(u,ee<0?Nt:Ht):on(u,0)),hn&&(g(Ie),R.current.layout=Ie,Y&&Y(Ie),pe(D,Ie,W.current))},[]),B=G((u,C)=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:y}=R.current,P=y.map(Z=>Z.constraints),{panelSize:M,pivotIndices:$}=ae(y,u,I);w(M!=null,`Panel size not found for panel "${u.id}"`);const J=he(y,u)===y.length-1?M-C:C-M,D=Se({delta:J,initialLayout:I,panelConstraints:P,pivotIndices:$,prevLayout:I,trigger:"imperative-api"});We(I,D)||(g(D),R.current.layout=D,S&&S(D),pe(y,D,W.current))},[]),nn=G((u,C)=>{const{layout:S,panelDataArray:I}=R.current,{collapsedSize:y=0,collapsible:P}=C,{collapsedSize:M=0,collapsible:$,maxSize:Y=100,minSize:J=0}=u.constraints,{panelSize:D}=ae(I,u,S);D!=null&&(P&&$&&ne(D,y)?ne(y,M)||B(u,M):D<J?B(u,J):D>Y&&B(u,Y))},[B]),oe=G((u,C)=>{const{direction:S}=k.current,{layout:I}=R.current;if(!b.current)return;const y=Pe(u,b.current);w(y,`Drag handle element not found for id "${u}"`);const P=Ft(S,C);v({dragHandleId:u,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:P,initialLayout:I})},[]),tn=G(()=>{v(null)},[]),Te=G(u=>{const{panelDataArray:C}=R.current,S=he(C,u);S>=0&&(C.splice(S,1),delete W.current[u.id],R.current.panelDataArrayChanged=!0,L())},[L]),rn=sr(()=>({collapsePanel:V,direction:s,dragState:z,expandPanel:q,getPanelSize:se,getPanelStyle:X,groupId:d,isPanelCollapsed:A,isPanelExpanded:te,reevaluatePanelConstraints:nn,registerPanel:N,registerResizeHandle:H,resizePanel:B,startDragging:oe,stopDragging:tn,unregisterPanel:Te,panelGroupElement:b.current}),[V,z,s,q,se,X,d,A,te,nn,N,H,B,oe,tn,Te]),me={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Re(Ze.Provider,{value:rn},Re(x,{...m,children:n,className:t,id:o,ref:b,style:{...me,...h},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Xt=Tt((e,n)=>Re(qt,{...e,forwardedRef:n}));qt.displayName="PanelGroup";Xt.displayName="forwardRef(PanelGroup)";function he(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ae(e,n,t){const s=he(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Lr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){ce(()=>{if(e||t==null||s==null)return;const i=Pe(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");w(l,`No group element found for id "${l}"`);const c=je(l,s),h=Bt(l,n,s);w(h!==null,`No resize element found for id "${n}"`);const x=a.shiftKey?h>0?h-1:c.length-1:h+1<c.length?h+1:0;c[x].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Jt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:h=0,tagName:x="div",...m}){var d,b;const z=F(null),v=F({onDragging:a});ce(()=>{v.current.onDragging=a});const j=Et(Ze);if(j===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:g,groupId:L,registerResizeHandle:W,startDragging:O,stopDragging:K,panelGroupElement:k}=j,R=cn(i),[V,q]=ge("inactive"),[se,X]=ge(!1),[A,te]=ge(null),N=F({state:V});de(()=>{N.current.state=V}),ce(()=>{if(t)te(null);else{const oe=W(R);te(()=>oe)}},[t,R,W]);const H=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,B=(b=s==null?void 0:s.fine)!==null&&b!==void 0?b:5;return ce(()=>{if(t||A==null)return;const oe=z.current;return w(oe,"Element ref not attached"),br(R,oe,g,{coarse:H,fine:B},(Te,rn,me)=>{if(rn)switch(Te){case"down":{q("drag"),w(me,'Expected event to be defined for "down" action'),O(R,me);const{onDragging:u}=v.current;u&&u(!0);break}case"move":{const{state:u}=N.current;u!=="drag"&&q("hover"),w(me,'Expected event to be defined for "move" action'),A(me);break}case"up":{q("hover"),K();const{onDragging:u}=v.current;u&&u(!1);break}}else q("inactive")})},[H,g,t,B,W,R,A,O,K]),Lr({disabled:t,handleId:R,resizeHandler:A,panelGroupElement:k}),Re(x,{...m,children:e,className:n,id:i,onBlur:()=>{X(!1),o==null||o()},onFocus:()=>{X(!0),l==null||l()},ref:z,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:h,"data-panel-group-direction":g,"data-panel-group-id":L,"data-resize-handle":"","data-resize-handle-active":V==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":V,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":R})}Jt.displayName="PanelResizeHandle";function Wr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[kr,pn]=Zt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Mr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:i=!1,onLayout:o,storage:a,ref:l,groupProps:c,...h})=>{const x=_.useId();e??(e=x);const m=_.useCallback((b={},z=null)=>({...b,ref:z,...h}),[h]),d=_.useCallback((b={})=>{const{as:z,...v}=c??{};return{...b,id:e,direction:n,tagName:z,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...v}},[e,n,c,t,s,o,a]);return _.useEffect(()=>{if(!e)return;const b=fn(e);l&&(l.current=b)},[l,e]),{isDisabled:i,getContainerProps:m,getGroupProps:d}},Dr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:i,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:h,order:x,controlRef:m,containerProps:d,...b})=>{const z=_.useId();e??(e=z);const v=_.useCallback((g={})=>{const{as:L,...W}=d??{};return{...g,ref:m,id:e,tagName:L,collapsible:s,defaultSize:i,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:h,order:x,...s?{"aria-labelledby":e}:{"aria-label":e},...W}},[e,m,d,t,s,i,o,a,l,c,h,x]),j=_.useCallback((g={},L=null)=>({...g,ref:L,...b}),[b]);return _.useEffect(()=>{if(!e)return;const g=Wr(e);n&&(n.current=g)},[n,e]),{getPanelProps:v,getItemProps:j}},_r=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{const l=_.useId();e??(e=l);const{isDisabled:c}=pn(),[h,x]=_.useState(!1),m=s||i||c,d=_.useCallback((z={})=>({...z,id:e,tagName:t,disabled:m,onDragging:Qt(o,v=>x(v)),...a,"data-active":bn(h),style:{...z.style,...a.style,...m?{cursor:"default"}:{}}}),[e,t,m,o,a,h]),b=_.useCallback((z={},v=null)=>({...z,ref:v,"data-active":bn(h)}),[h]);return _.useEffect(()=>{if(!e)return;const z=Pe(e);n&&(n.current=z)},[n,e]),{getTriggerProps:d,getIconProps:b}},E=jt(({direction:e="horizontal",...n},t)=>{const[s,i]=er("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=nr(i),{getContainerProps:h,getGroupProps:x,...m}=Mr({ref:t,...c}),d={w:"100%",h:"100%",...s.container};return r.jsx(kr,{value:{styles:s,...m},children:r.jsx(ve.div,{className:ln("ui-resizable",o),__css:d,...h({},l),children:r.jsx(Xt,{...x(),children:a})})})}),Ar=new Set(["order"]),Or=ve(kt,{disableStyleProp:e=>Ar.has(e)}),f=jt(({className:e,children:n,innerRef:t,w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h,height:x,minH:m,minHeight:d,maxH:b,maxHeight:z,boxSize:v,...j},g)=>{const{styles:L}=pn(),{getPanelProps:W,getItemProps:O}=Dr({ref:g,...j}),K={boxSize:"100%",...L.item};return r.jsx(Or,{...W({w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h,height:x,minH:m,minHeight:d,maxH:b,maxHeight:z,boxSize:v}),children:r.jsx(ve.div,{className:ln("ui-resizable__item",e),__css:K,...O({},t),children:n})})}),T=_.forwardRef(({className:e,icon:n,children:t,iconProps:s,...i},o)=>{const{styles:a}=pn(),{getTriggerProps:l,getIconProps:c}=_r({ref:o,...i}),h={position:"relative",...a.trigger};return r.jsxs(ve.div,{as:Jt,className:ln("ui-resizable__trigger",e),__css:h,...l(),children:[n?r.jsx(ve.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})});T.displayName="ResizableTrigger";const os={title:"Components / Data Display / Resizable",component:E},ke=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),De=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),Ae=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Oe=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),$e=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),He=()=>{const e=_.useRef(null),n=_.useRef(null),t=_.useRef(null),s=_.useRef(null),i=_.useRef(null);return _.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(f,{as:p,children:"Two"})]})},Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,children:"Two"})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Bottom"})]})})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Right"})]})})]})]}),Ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]})]}),Ve=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ue=()=>{const[e,n]=zn(!0),[t,s]=zn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(f,{as:p,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,id:"two",children:"Two"})]}),r.jsxs(Pt,{gap:"md",children:[r.jsxs(ze,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(ze,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{as:p,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(f,{as:p,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(f,{as:p,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},qe=()=>{const e=_.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(f,{as:p,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,id:"two",children:"Two"})]})},Xe=()=>{const e=_.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Pt,{gap:"md",children:[r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]})};var Tn,En,Ln;ke.parameters={...ke.parameters,docs:{...(Tn=ke.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Ln=(En=ke.parameters)==null?void 0:En.docs)==null?void 0:Ln.source}}};var Wn,kn,Mn;Me.parameters={...Me.parameters,docs:{...(Wn=Me.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(kn=Me.parameters)==null?void 0:kn.docs)==null?void 0:Mn.source}}};var Dn,_n,An;De.parameters={...De.parameters,docs:{...(Dn=De.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(An=(_n=De.parameters)==null?void 0:_n.docs)==null?void 0:An.source}}};var On,$n,Nn;_e.parameters={..._e.parameters,docs:{...(On=_e.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Nn=($n=_e.parameters)==null?void 0:$n.docs)==null?void 0:Nn.source}}};var Hn,Bn,Gn;Ae.parameters={...Ae.parameters,docs:{...(Hn=Ae.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Gn=(Bn=Ae.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.source}}};var Fn,Kn,Vn;Oe.parameters={...Oe.parameters,docs:{...(Fn=Oe.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=Oe.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var Un,qn,Xn;$e.parameters={...$e.parameters,docs:{...(Un=$e.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Xn=(qn=$e.parameters)==null?void 0:qn.docs)==null?void 0:Xn.source}}};var Jn,Yn,Zn;Ne.parameters={...Ne.parameters,docs:{...(Jn=Ne.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=Ne.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var Qn,et,nt;He.parameters={...He.parameters,docs:{...(Qn=He.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=He.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,st;Be.parameters={...Be.parameters,docs:{...(tt=Be.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" variant="spacer" h="md">
        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center} rounded="md" borderWidth="1px">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(st=(rt=Be.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,it,at;Ge.parameters={...Ge.parameters,docs:{...(ot=Ge.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  return <>
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable direction="vertical" h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(at=(it=Ge.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;Fe.parameters={...Fe.parameters,docs:{...(lt=Fe.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=Fe.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Ke.parameters={...Ke.parameters,docs:{...(ut=Ke.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(ft=(mt=Ke.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var pt,ht,zt;Ve.parameters={...Ve.parameters,docs:{...(pt=Ve.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(zt=(ht=Ve.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,xt;Ue.parameters={...Ue.parameters,docs:{...(bt=Ue.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(xt=(gt=Ue.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var Rt,It,yt;qe.parameters={...qe.parameters,docs:{...(Rt=qe.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(yt=(It=qe.parameters)==null?void 0:It.docs)==null?void 0:yt.source}}};var St,wt,vt;Xe.parameters={...Xe.parameters,docs:{...(St=Xe.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
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
}`,...(vt=(wt=Xe.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};const is=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{is as __namedExportsOrder,ke as basic,Xe as customControls,Ge as customIcon,os as default,Ke as isDisabled,Fe as nestedResizable,qe as useCookieStorage,Ue as useLocaleStorage,Ve as useOnResize,Ne as withCollapsible,De as withColorScheme,Ae as withDefaultSize,_e as withDirection,Be as withIcon,$e as withKeyboardStep,Oe as withMinMaxSize,He as withRefs,Me as withVariant};
