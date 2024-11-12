import{j as r}from"./jsx-runtime-CfatFE5O.js";import{u as gn}from"./index-gGKStiao.js";import{a as Pt,r as D}from"./index-ClcD9ViR.js";import{p as nr,h as tr,d as xn,O as ln,b as ve,c as cn}from"./factory-COau3w21.js";import{f as Tt}from"./forward-ref-D13m8o2p.js";import{a as rr}from"./use-component-style-CLSKeq_H.js";import{o as sr}from"./theme-provider-CNI9L2WW.js";import{G as Rn,M as In}from"./move-horizontal-BIXjPqbP.js";import{C as p}from"./center-CSG2P-cD.js";import{W as Et}from"./flex-BgJeD3no.js";import{B as he}from"./button-Dh7D4tOu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./createLucideIcon-Czt4prMK.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";const{createElement:xe,createContext:or,createRef:ls,forwardRef:Lt,useCallback:F,useContext:Wt,useEffect:le,useImperativeHandle:kt,useLayoutEffect:ir,useMemo:ar,useRef:K,useState:be}=Pt,yn=Pt[`useId${Math.random()}`.slice(0,5)],lr=ir,Ye=or(null);Ye.displayName="PanelGroupContext";const ce=lr,cr=typeof yn=="function"?yn:()=>null;let dr=0;function dn(e=null){const n=cr(),t=K(e||n||null);return t.current===null&&(t.current=""+dr++),e??t.current}function _t({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:h,onExpand:R,onResize:m,order:d,style:b,tagName:z="div",...w}){const j=Wt(Ye);if(j===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:g,expandPanel:L,getPanelSize:W,getPanelStyle:N,groupId:V,isPanelCollapsed:k,reevaluatePanelConstraints:I,registerPanel:U,resizePanel:X,unregisterPanel:se}=j,J=dn(a),O=K({callbacks:{onCollapse:h,onExpand:R,onResize:m},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:J,idIsFromProps:a!==void 0,order:d});K({didLogMissingDefaultSizeWarning:!1}),ce(()=>{const{callbacks:$,constraints:H}=O.current,B={...H};O.current.id=J,O.current.idIsFromProps=a!==void 0,O.current.order=d,$.onCollapse=h,$.onExpand=R,$.onResize=m,H.collapsedSize=t,H.collapsible=s,H.defaultSize=i,H.maxSize=l,H.minSize=c,(B.collapsedSize!==H.collapsedSize||B.collapsible!==H.collapsible||B.maxSize!==H.maxSize||B.minSize!==H.minSize)&&I(O.current,B)}),ce(()=>{const $=O.current;return U($),()=>{se($)}},[d,J,U,se]),kt(o,()=>({collapse:()=>{g(O.current)},expand:$=>{L(O.current,$)},getId(){return J},getSize(){return W(O.current)},isCollapsed(){return k(O.current)},isExpanded(){return!k(O.current)},resize:$=>{X(O.current,$)}}),[g,L,W,k,J,X]);const te=N(O.current,i);return xe(z,{...w,children:e,className:n,id:a,style:{...te,...b},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":V,"data-panel-id":J,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Mt=Lt((e,n)=>xe(_t,{...e,forwardedRef:n}));_t.displayName="Panel";Mt.displayName="forwardRef(Panel)";let an=null,ae=null;function ur(e,n){if(n){const t=(n&$t)!==0,s=(n&Ht)!==0,i=(n&Bt)!==0,o=(n&Gt)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function mr(){ae!==null&&(document.head.removeChild(ae),an=null,ae=null)}function sn(e,n){const t=ur(e,n);an!==t&&(an=t,ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${t}!important;}`)}function Dt(e){return e.type==="keydown"}function Ot(e){return e.type.startsWith("pointer")}function At(e){return e.type.startsWith("mouse")}function Ze(e){if(Ot(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(At(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function fr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function pr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function hr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:vn(e),b:vn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;S(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:wn(Sn(t.a)),b:wn(Sn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const zr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function br(e){var n;const t=getComputedStyle((n=Nt(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function gr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||br(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||zr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Sn(e){let n=e.length;for(;n--;){const t=e[n];if(S(t,"Missing node"),gr(t))return t}return null}function wn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function vn(e){const n=[];for(;e;)n.push(e),e=Nt(e);return n}function Nt(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const $t=1,Ht=2,Bt=4,Gt=8,xr=fr()==="coarse";let Z=[],ge=!1,re=new Map,Qe=new Map;const Ce=new Set;function Rr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),Ce.add(l),Xe(),function(){var R;Qe.delete(e),Ce.delete(l);const m=(R=re.get(a))!==null&&R!==void 0?R:1;if(re.set(a,m-1),Xe(),m===1&&re.delete(a),Z.includes(l)){const d=Z.indexOf(l);d>=0&&Z.splice(d,1),mn(),i("up",!0,null)}}}function Cn(e){const{target:n}=e,{x:t,y:s}=Ze(e);ge=!0,un({target:n,x:t,y:s}),Xe(),Z.length>0&&(Je("down",e),e.preventDefault(),e.stopPropagation())}function ye(e){const{x:n,y:t}=Ze(e);if(ge&&e.buttons===0&&(ge=!1,Je("up",e)),!ge){const{target:s}=e;un({target:s,x:n,y:t})}Je("move",e),mn(),Z.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Ze(e);Qe.clear(),ge=!1,Z.length>0&&e.preventDefault(),Je("up",e),un({target:n,x:t,y:s}),mn(),Xe()}function un({target:e,x:n,y:t}){Z.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:h,right:R,top:m}=l,d=xr?a.coarse:a.fine;if(n>=h-d&&n<=R+d&&t>=m-d&&t<=c+d){if(s!==null&&document.contains(s)&&o!==s&&!o.contains(s)&&!s.contains(o)&&hr(s,o)>0){let z=s,w=!1;for(;z&&!z.contains(o);){if(pr(z.getBoundingClientRect(),l)){w=!0;break}z=z.parentElement}if(w)return}Z.push(i)}})}function on(e,n){Qe.set(e,n)}function mn(){let e=!1,n=!1;Z.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Qe.forEach(s=>{t|=s}),e&&n?sn("intersection",t):e?sn("horizontal",t):n?sn("vertical",t):mr()}function Xe(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",Cn),t.removeEventListener("pointerleave",ye),t.removeEventListener("pointermove",ye)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),Ce.size>0&&(ge?(Z.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",ye),t.addEventListener("pointermove",ye))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",Cn,{capture:!0}),t.addEventListener("pointermove",ye))}))}function Je(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=Z.includes(t);s(e,i,n)})}function Ir(){const[e,n]=be(0);return F(()=>n(t=>t+1),[])}function S(e,n){if(!e)throw console.error(n),Error(n)}const fn=10;function de(e,n,t=fn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=fn){return de(e,n,t)===0}function q(e,n,t){return de(e,n,t)===0}function yr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!q(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];S(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(de(t,l)<0)if(o){const c=(i+l)/2;de(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(fn)),t}function Se({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(q(e,0))return n;const a=[...n],[l,c]=s;S(l!=null,"Invalid first pivot index"),S(c!=null,"Invalid second pivot index");let h=0;if(o==="keyboard"){{const m=e<0?c:l,d=t[m];S(d,`Panel constraints not found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:w=0}=d;if(z){const j=n[m];if(S(j!=null,`Previous layout not found for panel index ${m}`),q(j,b)){const g=w-j;de(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const m=e<0?l:c,d=t[m];S(d,`No panel constraints found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:w=0}=d;if(z){const j=n[m];if(S(j!=null,`Previous layout not found for panel index ${m}`),q(j,w)){const g=j-b;de(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}}{const m=e<0?1:-1;let d=e<0?c:l,b=0;for(;;){const w=n[d];S(w!=null,`Previous layout not found for panel index ${d}`);const g=ze({panelConstraints:t,panelIndex:d,size:100})-w;if(b+=g,d+=m,d<0||d>=t.length)break}const z=Math.min(Math.abs(e),Math.abs(b));e=e<0?0-z:z}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const b=Math.abs(e)-Math.abs(h),z=n[d];S(z!=null,`Previous layout not found for panel index ${d}`);const w=z-b,j=ze({panelConstraints:t,panelIndex:d,size:w});if(!q(z,j)&&(h+=z-j,a[d]=j,h.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(yr(i,a))return i;{const m=e<0?c:l,d=n[m];S(d!=null,`Previous layout not found for panel index ${m}`);const b=d+h,z=ze({panelConstraints:t,panelIndex:m,size:b});if(a[m]=z,!q(z,b)){let w=b-z,g=e<0?c:l;for(;g>=0&&g<t.length;){const L=a[g];S(L!=null,`Previous layout not found for panel index ${g}`);const W=L+w,N=ze({panelConstraints:t,panelIndex:g,size:W});if(q(L,N)||(w-=N-L,a[g]=N),q(w,0))break;e>0?g--:g++}}}const R=a.reduce((m,d)=>d+m,0);return q(R,100)?a:i}function Sr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];S(l!=null,"No pivot index found"),n.forEach((m,d)=>{const{constraints:b}=m,{maxSize:z=100,minSize:w=0}=b;d===l?(s=w,i=z):(o+=w,a+=z)});const c=Math.min(i,100-o),h=Math.max(s,100-a),R=e[l];return{valueMax:c,valueMin:h,valueNow:R}}function je(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Ft(e,n,t=document){const i=je(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Kt(e,n,t){const s=Ft(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function pn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function wr(e,n,t,s=document){var i,o,a,l;const c=Pe(n,s),h=je(e,s),R=c?h.indexOf(c):-1,m=(i=(o=t[R])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[R+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[m,d]}function vr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){K({didWarnAboutMissingResizeHandle:!1}),ce(()=>{if(!o)return;const l=je(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:h,valueMin:R,valueNow:m}=Sr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const b=i[c];S(b,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",b.id),d.setAttribute("aria-valuemax",""+Math.round(h)),d.setAttribute("aria-valuemin",""+Math.round(R)),d.setAttribute("aria-valuenow",m!=null?""+Math.round(m):"")}}return()=>{l.forEach((c,h)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),le(()=>{if(!o)return;const l=n.current;S(l,"Eager values not found");const{panelDataArray:c}=l,h=pn(t,o);S(h!=null,`No group found for id "${t}"`);const R=je(t,o);S(R,`No resize handles found for group id "${t}"`);const m=R.map(d=>{const b=d.getAttribute("data-panel-resize-handle-id");S(b,"Resize handle element has no handle id attribute");const[z,w]=wr(t,b,c,o);if(z==null||w==null)return()=>{};const j=g=>{if(!g.defaultPrevented)switch(g.key){case"Enter":{g.preventDefault();const L=c.findIndex(W=>W.id===z);if(L>=0){const W=c[L];S(W,`No panel data found for index ${L}`);const N=s[L],{collapsedSize:V=0,collapsible:k,minSize:I=0}=W.constraints;if(N!=null&&k){const U=Se({delta:q(N,V)?I-V:V-N,initialLayout:s,panelConstraints:c.map(X=>X.constraints),pivotIndices:Kt(t,b,o),prevLayout:s,trigger:"keyboard"});s!==U&&a(U)}}break}}};return d.addEventListener("keydown",j),()=>{d.removeEventListener("keydown",j)}});return()=>{m.forEach(d=>d())}},[o,e,n,t,s,i,a])}function jn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Vt(e,n){const t=e==="horizontal",{x:s,y:i}=Ze(n);return t?s:i}function Cr(e,n,t,s,i){const o=t==="horizontal",a=Pe(n,i);S(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");S(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const h=Vt(t,e),R=pn(l,i);S(R,`No group element found for id "${l}"`);const m=R.getBoundingClientRect(),d=o?m.width:m.height;return(h-c)/d*100}function jr(e,n,t,s,i,o){if(Dt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Cr(e,n,t,s,o)}function Pr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];S(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];S(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,h=i/c;s++,n[o]=h,i-=h}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];S(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:h=0,collapsible:R}=l,m=t[c];if(m==null||s!==m){t[c]=s;const{onCollapse:d,onExpand:b,onResize:z}=a;z&&z(s,m),R&&(d||b)&&(b&&(m==null||ne(m,h))&&!ne(s,h)&&b(),d&&(m==null||!ne(m,h))&&ne(s,h)&&d())}})}function Le(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Tr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Er(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Pn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Ut(e){return`react-resizable-panels:${e}`}function qt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Xt(e,n){try{const t=Ut(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Lr(e,n,t){var s,i;const o=(s=Xt(e,t))!==null&&s!==void 0?s:{},a=qt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Wr(e,n,t,s,i){var o;const a=Ut(e),l=qt(n),c=(o=Xt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(h){console.error(h)}}function Tn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!q(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];S(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];S(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!q(i,0))for(let o=0;o<n.length;o++){const a=t[o];S(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,q(i,0)))break}return t}const kr=100,we={getItem:e=>(Pn(we),we.getItem(e)),setItem:(e,n)=>{Pn(we),we.setItem(e,n)}},En={};function Jt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=we,style:h,tagName:R="div",...m}){const d=dn(o),b=K(null),[z,w]=be(null),[j,g]=be([]),L=Ir(),W=K({}),N=K(new Map),V=K(0),k=K({autoSaveId:e,direction:s,dragState:z,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),I=K({layout:j,panelDataArray:[],panelDataArrayChanged:!1});K({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),kt(i,()=>({getId:()=>k.current.id,getLayout:()=>{const{layout:u}=I.current;return u},setLayout:u=>{const{onLayout:y}=k.current,{layout:C,panelDataArray:v}=I.current,x=Tn({layout:u,panelConstraints:v.map(T=>T.constraints)});jn(C,x)||(g(x),I.current.layout=x,y&&y(x),fe(v,x,W.current))}}),[]),ce(()=>{k.current.autoSaveId=e,k.current.direction=s,k.current.dragState=z,k.current.id=d,k.current.onLayout=a,k.current.storage=c}),vr({committedValuesRef:k,eagerValuesRef:I,groupId:d,layout:j,panelDataArray:I.current.panelDataArray,setLayout:g,panelGroupElement:b.current}),le(()=>{const{panelDataArray:u}=I.current;if(e){if(j.length===0||j.length!==u.length)return;let y=En[e];y==null&&(y=Er(Wr,kr),En[e]=y);const C=[...u],v=new Map(N.current);y(e,C,v,j,c)}},[e,j,c]),le(()=>{});const U=F(u=>{const{onLayout:y}=k.current,{layout:C,panelDataArray:v}=I.current;if(u.constraints.collapsible){const x=v.map(Q=>Q.constraints),{collapsedSize:T=0,panelSize:_,pivotIndices:A}=ie(v,u,C);if(S(_!=null,`Panel size not found for panel "${u.id}"`),!ne(_,T)){N.current.set(u.id,_);const ee=pe(v,u)===v.length-1?_-T:T-_,M=Se({delta:ee,initialLayout:C,panelConstraints:x,pivotIndices:A,prevLayout:C,trigger:"imperative-api"});Le(C,M)||(g(M),I.current.layout=M,y&&y(M),fe(v,M,W.current))}}},[]),X=F((u,y)=>{const{onLayout:C}=k.current,{layout:v,panelDataArray:x}=I.current;if(u.constraints.collapsible){const T=x.map(Y=>Y.constraints),{collapsedSize:_=0,panelSize:A=0,minSize:Q=0,pivotIndices:ee}=ie(x,u,v),M=y??Q;if(ne(A,_)){const Y=N.current.get(u.id),Re=Y!=null&&Y>=M?Y:M,rn=pe(x,u)===x.length-1?A-Re:Re-A,G=Se({delta:rn,initialLayout:v,panelConstraints:T,pivotIndices:ee,prevLayout:v,trigger:"imperative-api"});Le(v,G)||(g(G),I.current.layout=G,C&&C(G),fe(x,G,W.current))}}},[]),se=F(u=>{const{layout:y,panelDataArray:C}=I.current,{panelSize:v}=ie(C,u,y);return S(v!=null,`Panel size not found for panel "${u.id}"`),v},[]),J=F((u,y)=>{const{panelDataArray:C}=I.current,v=pe(C,u);return Tr({defaultSize:y,dragState:z,layout:j,panelData:C,panelIndex:v})},[z,j]),O=F(u=>{const{layout:y,panelDataArray:C}=I.current,{collapsedSize:v=0,collapsible:x,panelSize:T}=ie(C,u,y);return S(T!=null,`Panel size not found for panel "${u.id}"`),x===!0&&ne(T,v)},[]),te=F(u=>{const{layout:y,panelDataArray:C}=I.current,{collapsedSize:v=0,collapsible:x,panelSize:T}=ie(C,u,y);return S(T!=null,`Panel size not found for panel "${u.id}"`),!x||de(T,v)>0},[]),$=F(u=>{const{panelDataArray:y}=I.current;y.push(u),y.sort((C,v)=>{const x=C.order,T=v.order;return x==null&&T==null?0:x==null?-1:T==null?1:x-T}),I.current.panelDataArrayChanged=!0,L()},[L]);ce(()=>{if(I.current.panelDataArrayChanged){I.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:y,storage:C}=k.current,{layout:v,panelDataArray:x}=I.current;let T=null;if(u){const A=Lr(u,x,C);A&&(N.current=new Map(Object.entries(A.expandToSizes)),T=A.layout)}T==null&&(T=Pr({panelDataArray:x}));const _=Tn({layout:T,panelConstraints:x.map(A=>A.constraints)});jn(v,_)||(g(_),I.current.layout=_,y&&y(_),fe(x,_,W.current))}}),ce(()=>{const u=I.current;return()=>{u.layout=[]}},[]);const H=F(u=>{let y=!1;const C=b.current;return C&&window.getComputedStyle(C,null).getPropertyValue("direction")==="rtl"&&(y=!0),function(x){x.preventDefault();const T=b.current;if(!T)return()=>null;const{direction:_,dragState:A,id:Q,keyboardResizeBy:ee,onLayout:M}=k.current,{layout:Y,panelDataArray:Re}=I.current,{initialLayout:Ee}=A??{},rn=Kt(Q,u,T);let G=jr(x,u,_,A,ee,T);const zn=_==="horizontal";zn&&y&&(G=-G);const Qt=Re.map(er=>er.constraints),Ie=Se({delta:G,initialLayout:Ee??Y,panelConstraints:Qt,pivotIndices:rn,prevLayout:Y,trigger:Dt(x)?"keyboard":"mouse-or-touch"}),bn=!Le(Y,Ie);(Ot(x)||At(x))&&V.current!=G&&(V.current=G,!bn&&G!==0?zn?on(u,G<0?$t:Ht):on(u,G<0?Bt:Gt):on(u,0)),bn&&(g(Ie),I.current.layout=Ie,M&&M(Ie),fe(Re,Ie,W.current))}},[]),B=F((u,y)=>{const{onLayout:C}=k.current,{layout:v,panelDataArray:x}=I.current,T=x.map(Y=>Y.constraints),{panelSize:_,pivotIndices:A}=ie(x,u,v);S(_!=null,`Panel size not found for panel "${u.id}"`);const ee=pe(x,u)===x.length-1?_-y:y-_,M=Se({delta:ee,initialLayout:v,panelConstraints:T,pivotIndices:A,prevLayout:v,trigger:"imperative-api"});Le(v,M)||(g(M),I.current.layout=M,C&&C(M),fe(x,M,W.current))},[]),en=F((u,y)=>{const{layout:C,panelDataArray:v}=I.current,{collapsedSize:x=0,collapsible:T}=y,{collapsedSize:_=0,collapsible:A,maxSize:Q=100,minSize:ee=0}=u.constraints,{panelSize:M}=ie(v,u,C);M!=null&&(T&&A&&ne(M,x)?ne(x,_)||B(u,_):M<ee?B(u,ee):M>Q&&B(u,Q))},[B]),oe=F((u,y)=>{const{direction:C}=k.current,{layout:v}=I.current;if(!b.current)return;const x=Pe(u,b.current);S(x,`Drag handle element not found for id "${u}"`);const T=Vt(C,y);w({dragHandleId:u,dragHandleRect:x.getBoundingClientRect(),initialCursorPosition:T,initialLayout:v})},[]),nn=F(()=>{w(null)},[]),Te=F(u=>{const{panelDataArray:y}=I.current,C=pe(y,u);C>=0&&(y.splice(C,1),delete W.current[u.id],I.current.panelDataArrayChanged=!0,L())},[L]),tn=ar(()=>({collapsePanel:U,direction:s,dragState:z,expandPanel:X,getPanelSize:se,getPanelStyle:J,groupId:d,isPanelCollapsed:O,isPanelExpanded:te,reevaluatePanelConstraints:en,registerPanel:$,registerResizeHandle:H,resizePanel:B,startDragging:oe,stopDragging:nn,unregisterPanel:Te,panelGroupElement:b.current}),[U,z,s,X,se,J,d,O,te,en,$,H,B,oe,nn,Te]),ue={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return xe(Ye.Provider,{value:tn},xe(R,{...m,children:n,className:t,id:o,ref:b,style:{...ue,...h},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Yt=Lt((e,n)=>xe(Jt,{...e,forwardedRef:n}));Jt.displayName="PanelGroup";Yt.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ie(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function _r({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){le(()=>{if(e||t==null||s==null)return;const i=Pe(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");S(l,`No group element found for id "${l}"`);const c=je(l,s),h=Ft(l,n,s);S(h!==null,`No resize element found for id "${n}"`);const R=a.shiftKey?h>0?h-1:c.length-1:h+1<c.length?h+1:0;c[R].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Zt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:h=0,tagName:R="div",...m}){var d,b;const z=K(null),w=K({onDragging:a});le(()=>{w.current.onDragging=a});const j=Wt(Ye);if(j===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:g,groupId:L,registerResizeHandle:W,startDragging:N,stopDragging:V,panelGroupElement:k}=j,I=dn(i),[U,X]=be("inactive"),[se,J]=be(!1),[O,te]=be(null),$=K({state:U});ce(()=>{$.current.state=U}),le(()=>{if(t)te(null);else{const oe=W(I);te(()=>oe)}},[t,I,W]);const H=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,B=(b=s==null?void 0:s.fine)!==null&&b!==void 0?b:5;return le(()=>{if(t||O==null)return;const oe=z.current;return S(oe,"Element ref not attached"),Rr(I,oe,g,{coarse:H,fine:B},(Te,tn,ue)=>{if(tn)switch(Te){case"down":{X("drag"),S(ue,'Expected event to be defined for "down" action'),N(I,ue);const{onDragging:u}=w.current;u&&u(!0);break}case"move":{const{state:u}=$.current;u!=="drag"&&X("hover"),S(ue,'Expected event to be defined for "move" action'),O(ue);break}case"up":{X("hover"),V();const{onDragging:u}=w.current;u&&u(!1);break}}else X("inactive")})},[H,g,t,B,W,I,O,N,V]),_r({disabled:t,handleId:I,resizeHandler:O,panelGroupElement:k}),xe(R,{...m,children:e,className:n,id:i,onBlur:()=>{J(!1),o==null||o()},onFocus:()=>{J(!0),l==null||l()},ref:z,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:h,"data-panel-group-direction":g,"data-panel-group-id":L,"data-resize-handle":"","data-resize-handle-active":U==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":U,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":I})}Zt.displayName="PanelResizeHandle";function Mr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Dr,hn]=nr({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Or=({id:e,ref:n,direction:t="horizontal",isDisabled:s=!1,keyboardStep:i,storage:o,storageKey:a,groupProps:l,onLayout:c,...h})=>{const R=D.useId();e??(e=R);const m=D.useCallback((b={},z=null)=>({...b,ref:z,...h}),[h]),d=D.useCallback((b={})=>{const{as:z,...w}=l??{};return{...b,id:e,autoSaveId:a,direction:t,keyboardResizeBy:i,storage:o,tagName:z,onLayout:c,...w}},[e,t,l,a,i,c,o]);return D.useEffect(()=>{if(!e)return;const b=pn(e);ln(n)&&(n.current=b)},[n,e]),{isDisabled:s,getContainerProps:m,getGroupProps:d}},Ar=({id:e,ref:n,collapsedSize:t,collapsible:s,controlRef:i,defaultSize:o,maxSize:a,minSize:l,order:c,containerProps:h,onCollapse:R,onExpand:m,onResize:d,...b})=>{const z=D.useId();e??(e=z);const w=D.useCallback((g={})=>{const{as:L,...W}=h??{};return{...g,id:e,ref:i,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:a,minSize:l,order:c,tagName:L,onCollapse:R,onExpand:m,onResize:d,...s?{"aria-labelledby":e}:{"aria-label":e},...W}},[e,i,h,t,s,o,a,l,R,m,d,c]),j=D.useCallback((g={},L=null)=>({...g,ref:L,...b}),[b]);return D.useEffect(()=>{if(!e)return;const g=Mr(e);ln(n)&&(n.current=g)},[n,e]),{getItemProps:j,getPanelProps:w}},Nr=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{const l=D.useId();e??(e=l);const{isDisabled:c}=hn(),[h,R]=D.useState(!1),m=s||i||c,d=D.useCallback((z={})=>({...z,id:e,disabled:m,tagName:t,onDragging:tr(o,w=>R(w)),...a,style:{...z.style,...a.style,...m?{cursor:"default"}:{}},"data-active":xn(h)}),[e,t,m,o,a,h]),b=D.useCallback((z={},w=null)=>({...z,ref:w,"data-active":xn(h)}),[h]);return D.useEffect(()=>{if(!e)return;const z=Pe(e);ln(n)&&(n.current=z)},[n,e]),{getIconProps:b,getTriggerProps:d}},E=Tt(({direction:e="horizontal",...n},t)=>{const[s,i]=rr("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=sr(i),{getContainerProps:h,getGroupProps:R,...m}=Or({ref:t,...c}),d={h:"100%",w:"100%",...s.container};return r.jsx(Dr,{value:{styles:s,...m},children:r.jsx(ve.div,{className:cn("ui-resizable",o),__css:d,...h({},l),children:r.jsx(Yt,{...R(),children:a})})})});E.displayName="Resizable";E.__ui__="Resizable";const $r=new Set(["order"]),Hr=ve(Mt,{disableStyleProp:e=>$r.has(e)}),f=Tt(({className:e,boxSize:n,children:t,h:s,height:i,innerRef:o,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:R,minHeight:m,minW:d,minWidth:b,w:z,width:w,...j},g)=>{const{styles:L}=hn(),{getItemProps:W,getPanelProps:N}=Ar({ref:g,...j}),V={boxSize:"100%",...L.item};return r.jsx(Hr,{...N({boxSize:n,h:s,height:i,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:R,minHeight:m,minW:d,minWidth:b,w:z,width:w}),children:r.jsx(ve.div,{className:cn("ui-resizable__item",e),__css:V,...W({},o),children:t})})});f.displayName="ResizableItem";f.__ui__="ResizableItem";const P=D.forwardRef(({className:e,children:n,icon:t,iconProps:s,...i},o)=>{const{styles:a}=hn(),{getIconProps:l,getTriggerProps:c}=Nr({ref:o,...i}),h={position:"relative",...a.trigger};return r.jsxs(ve.div,{as:Zt,className:cn("ui-resizable__trigger",e),__css:h,...c(),children:[t?r.jsx(ve.div,{className:"ui-resizable__trigger__icon",__css:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",transform:"auto",translateX:"-50%",translateY:"-50%",...a.icon},...l(s),children:t}):null,n]})});P.displayName="ResizableTrigger";P.__ui__="ResizableTrigger";const cs={component:E,title:"Components / Data Display / Resizable"},We=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{colorScheme:"primary",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{colorScheme:"red",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",direction:"horizontal",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),De=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,defaultSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Oe=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,maxSize:70,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ae=()=>r.jsxs(E,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),$e=()=>{const e=D.useRef(null),n=D.useRef(null),t=D.useRef(null),s=D.useRef(null),i=D.useRef(null);return D.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,borderWidth:"1px",containerRef:e,h:"md",rounded:"md",children:[r.jsx(f,{ref:t,as:p,innerRef:s,children:"One"}),r.jsx(P,{ref:i}),r.jsx(f,{as:p,children:"Two"})]})},He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",direction:"vertical",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:p,children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Bottom"})]})})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Right"})]})})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",isDisabled:!0,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Three"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{isDisabled:!0}),r.jsx(f,{as:p,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Three"})]})]}),Ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ve=()=>{const[e,n]=gn(!0),[t,s]=gn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]}),r.jsxs(Et,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{id:"left",as:p,minSize:10,order:1,children:"Left"}),r.jsx(P,{})]}):null,r.jsx(f,{id:"middle",as:p,minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(P,{}),r.jsx(f,{id:"right",as:p,minSize:10,order:3,children:"Right"})]}):null]})]})},Ue=()=>{const e=D.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storage:e,storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]})},qe=()=>{const e=D.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Et,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]})};var Ln,Wn,kn;We.parameters={...We.parameters,docs:{...(Ln=We.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(kn=(Wn=We.parameters)==null?void 0:Wn.docs)==null?void 0:kn.source}}};var _n,Mn,Dn;ke.parameters={...ke.parameters,docs:{...(_n=ke.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable variant="unstyled" h="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Dn=(Mn=ke.parameters)==null?void 0:Mn.docs)==null?void 0:Dn.source}}};var On,An,Nn;_e.parameters={..._e.parameters,docs:{...(On=_e.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  return <>
      <Resizable colorScheme="primary" variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>

      <Resizable colorScheme="red" variant="spacer" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(Nn=(An=_e.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var $n,Hn,Bn;Me.parameters={...Me.parameters,docs:{...($n=Me.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" direction="horizontal" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Bn=(Hn=Me.parameters)==null?void 0:Hn.docs)==null?void 0:Bn.source}}};var Gn,Fn,Kn;De.parameters={...De.parameters,docs:{...(Gn=De.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Kn=(Fn=De.parameters)==null?void 0:Fn.docs)==null?void 0:Kn.source}}};var Vn,Un,qn;Oe.parameters={...Oe.parameters,docs:{...(Vn=Oe.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(qn=(Un=Oe.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Xn,Jn,Yn;Ae.parameters={...Ae.parameters,docs:{...(Xn=Ae.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Yn=(Jn=Ae.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Zn,Qn,et;Ne.parameters={...Ne.parameters,docs:{...(Zn=Ne.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center} collapsedSize={5} collapsible defaultSize={15} maxSize={20} minSize={15} onCollapse={() => {
        console.log("collapsed item");
      }} onExpand={() => {
        console.log("expand item");
      }}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center} collapsedSize={10} collapsible defaultSize={25} maxSize={30} minSize={25} onCollapse={() => {
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
}`,...(et=(Qn=Ne.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};var nt,tt,rt;$e.parameters={...$e.parameters,docs:{...(nt=$e.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
  return <Resizable ref={groupRef} borderWidth="1px" containerRef={containerRef} h="md" rounded="md">
      <ResizableItem ref={itemRef} as={Center} innerRef={innerRef}>
        One
      </ResizableItem>

      <ResizableTrigger ref={triggerRef} />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(rt=(tt=$e.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var st,ot,it;He.parameters={...He.parameters,docs:{...(st=He.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" direction="vertical" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(it=(ot=He.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var at,lt,ct;Be.parameters={...Be.parameters,docs:{...(at=Be.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(ct=(lt=Be.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,mt;Ge.parameters={...Ge.parameters,docs:{...(dt=Ge.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
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

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
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
}`,...(mt=(ut=Ge.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var ft,pt,ht;Fe.parameters={...Fe.parameters,docs:{...(ft=Fe.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" isDisabled rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger isDisabled />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>
    </>;
}`,...(ht=(pt=Fe.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};var zt,bt,gt;Ke.parameters={...Ke.parameters,docs:{...(zt=Ke.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(gt=(bt=Ke.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var xt,Rt,It;Ve.parameters={...Ve.parameters,docs:{...(xt=Ve.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  const [showLeft, showLeftControls] = useBoolean(true);
  const [showRight, showRightControls] = useBoolean(true);
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md" storageKey="persistence">
        <ResizableItem id="one" as={Center}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem id="two" as={Center}>
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

      <Resizable borderWidth="1px" h="md" rounded="md" storageKey="conditional">
        {showLeft ? <>
            <ResizableItem id="left" as={Center} minSize={10} order={1}>
              Left
            </ResizableItem>

            <ResizableTrigger />
          </> : null}

        <ResizableItem id="middle" as={Center} minSize={10} order={2}>
          Middle
        </ResizableItem>

        {showRight ? <>
            <ResizableTrigger />

            <ResizableItem id="right" as={Center} minSize={10} order={3}>
              Right
            </ResizableItem>
          </> : null}
      </Resizable>
    </>;
}`,...(It=(Rt=Ve.parameters)==null?void 0:Rt.docs)==null?void 0:It.source}}};var yt,St,wt;Ue.parameters={...Ue.parameters,docs:{...(yt=Ue.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
  const storage: ResizableStorage = useMemo(() => ({
    getItem: key => {
      const match = document.cookie.match(new RegExp(\`(^| )\${key}=([^;]+)\`));
      return match ? match[2] ?? null : null;
    },
    setItem: (key, value) => {
      document.cookie = \`\${key}=\${value}; max-age=31536000; path=/\`;
    }
  }), []);
  return <Resizable borderWidth="1px" h="md" rounded="md" storage={storage} storageKey="persistence">
      <ResizableItem id="one" as={Center}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem id="two" as={Center}>
        Two
      </ResizableItem>
    </Resizable>;
}`,...(wt=(St=Ue.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var vt,Ct,jt;qe.parameters={...qe.parameters,docs:{...(vt=qe.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
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

      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center} collapsedSize={15} collapsible controlRef={controlRef} maxSize={50} minSize={30}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(jt=(Ct=qe.parameters)==null?void 0:Ct.docs)==null?void 0:jt.source}}};const ds=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{ds as __namedExportsOrder,We as basic,qe as customControls,Be as customIcon,cs as default,Fe as isDisabled,Ge as nestedResizable,Ue as useCookieStorage,Ve as useLocaleStorage,Ke as useOnResize,Ne as withCollapsible,_e as withColorScheme,De as withDefaultSize,Me as withDirection,He as withIcon,Ae as withKeyboardStep,Oe as withMinMaxSize,$e as withRefs,ke as withVariant};
