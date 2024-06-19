import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{u as hn}from"./index-CBqzus2r.js";import{$ as vt,r as D}from"./index-uCp2LrAq.js";import{l as Yt,h as Zt,d as zn,b as Se,c as on}from"./factory-Bf0a1C4O.js";import{f as an}from"./forward-ref-Dr5Hqd9a.js";import{a as Qt}from"./use-component-style-C0MoE1pt.js";import{o as er}from"./theme-provider-zwL-D6eR.js";import{G as bn,M as gn}from"./move-horizontal-B_ggNoxX.js";import{C as f}from"./center-CSFPO4u1.js";import{W as Ct}from"./flex-BWicnFVx.js";import{B as he}from"./button-BybGdL7z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./lucide-icon-BNUZiTU8.js";import"./icon-CVBZDjqd.js";import"./index-BJ39ysE2.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-BMMGc-Ko.js";const{createElement:be,createContext:nr,createRef:ss,forwardRef:jt,useCallback:F,useContext:Pt,useEffect:ce,useImperativeHandle:Tt,useLayoutEffect:tr,useMemo:rr,useRef:B,useState:ye}=vt,xn=vt.useId,sr=tr,Ye=nr(null);Ye.displayName="PanelGroupContext";const de=sr,or=typeof xn=="function"?xn:()=>null;let ir=0;function ln(e=null){const n=or(),t=B(e||n||null);return t.current===null&&(t.current=""+ir++),e??t.current}function Et({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:g,onResize:u,order:d,style:h,tagName:b="div",...j}){const v=Pt(Ye);if(v===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:x,expandPanel:W,getPanelSize:A,getPanelStyle:N,groupId:E,isPanelCollapsed:y,reevaluatePanelConstraints:U,registerPanel:Y,resizePanel:Z,unregisterPanel:Q}=v,V=ln(a),_=B({callbacks:{onCollapse:z,onExpand:g,onResize:u},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:V,idIsFromProps:a!==void 0,order:d});B({didLogMissingDefaultSizeWarning:!1}),de(()=>{const{callbacks:H,constraints:$}=_.current,G={...$};_.current.id=V,_.current.idIsFromProps=a!==void 0,_.current.order=d,H.onCollapse=z,H.onExpand=g,H.onResize=u,$.collapsedSize=t,$.collapsible=s,$.defaultSize=i,$.maxSize=l,$.minSize=c,(G.collapsedSize!==$.collapsedSize||G.collapsible!==$.collapsible||G.maxSize!==$.maxSize||G.minSize!==$.minSize)&&U(_.current,G)}),de(()=>{const H=_.current;return Y(H),()=>{Q(H)}},[d,V,Y,Q]),Tt(o,()=>({collapse:()=>{x(_.current)},expand:H=>{W(_.current,H)},getId(){return V},getSize(){return A(_.current)},isCollapsed(){return y(_.current)},isExpanded(){return!y(_.current)},resize:H=>{Z(_.current,H)}}),[x,W,A,y,V,Z]);const re=N(_.current,i);return be(b,{...j,children:e,className:n,id:a,style:{...re,...h},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":E,"data-panel-id":V,"data-panel-size":parseFloat(""+re.flexGrow).toFixed(1)})}const Lt=jt((e,n)=>be(Et,{...e,forwardedRef:n}));Et.displayName="Panel";Lt.displayName="forwardRef(Panel)";let sn=null,le=null;function ar(e,n){if(n){const t=(n&At)!==0,s=(n&_t)!==0,i=(n&$t)!==0,o=(n&Ot)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function lr(){le!==null&&(document.head.removeChild(le),sn=null,le=null)}function tn(e,n){const t=ar(e,n);sn!==t&&(sn=t,le===null&&(le=document.createElement("style"),document.head.appendChild(le)),le.innerHTML=`*{cursor: ${t}!important;}`)}function Wt(e){return e.type==="keydown"}function kt(e){return e.type.startsWith("pointer")}function Mt(e){return e.type.startsWith("mouse")}function Ze(e){if(kt(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Mt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function cr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function dr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function ur(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:yn(e),b:yn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;C(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:In(Rn(t.a)),b:In(Rn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const mr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function fr(e){var n;const t=getComputedStyle((n=Dt(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function pr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||fr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||mr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Rn(e){let n=e.length;for(;n--;){const t=e[n];if(C(t,"Missing node"),pr(t))return t}return null}function In(e){return e&&Number(getComputedStyle(e).zIndex)||0}function yn(e){const n=[];for(;e;)n.push(e),e=Dt(e);return n}function Dt(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const At=1,_t=2,$t=4,Ot=8,hr=cr()==="coarse";let oe=[],Qe=!1,se=new Map,en=new Map;const we=new Set;function zr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=se.get(a))!==null&&o!==void 0?o:0;return se.set(a,c+1),we.add(l),Je(),function(){var g;en.delete(e),we.delete(l);const u=(g=se.get(a))!==null&&g!==void 0?g:1;se.set(a,u-1),Je(),u===1&&se.delete(a)}}function Sn(e){const{target:n}=e,{x:t,y:s}=Ze(e);Qe=!0,cn({target:n,x:t,y:s}),Je(),oe.length>0&&(dn("down",e),e.preventDefault(),e.stopPropagation())}function xe(e){const{x:n,y:t}=Ze(e);if(!Qe){const{target:s}=e;cn({target:s,x:n,y:t})}dn("move",e),Nt(),oe.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Ze(e);en.clear(),Qe=!1,oe.length>0&&e.preventDefault(),dn("up",e),cn({target:n,x:t,y:s}),Nt(),Je()}function cn({target:e,x:n,y:t}){oe.splice(0);let s=null;e instanceof HTMLElement&&(s=e),we.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:z,right:g,top:u}=l,d=hr?a.coarse:a.fine;if(n>=z-d&&n<=g+d&&t>=u-d&&t<=c+d){if(s!==null&&o!==s&&!o.contains(s)&&!s.contains(o)&&ur(s,o)>0){let b=s,j=!1;for(;b&&!b.contains(o);){if(dr(b.getBoundingClientRect(),l)){j=!0;break}b=b.parentElement}if(j)return}oe.push(i)}})}function rn(e,n){en.set(e,n)}function Nt(){let e=!1,n=!1;oe.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;en.forEach(s=>{t|=s}),e&&n?tn("intersection",t):e?tn("horizontal",t):n?tn("vertical",t):lr()}function Je(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",Sn),t.removeEventListener("pointerleave",xe),t.removeEventListener("pointermove",xe)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),we.size>0&&(Qe?(oe.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",xe),t.addEventListener("pointermove",xe))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",Sn,{capture:!0}),t.addEventListener("pointermove",xe))}))}function dn(e,n){we.forEach(t=>{const{setResizeHandlerState:s}=t,i=oe.includes(t);s(e,i,n)})}function C(e,n){if(!e)throw console.error(n),Error(n)}const un=10;function ue(e,n,t=un){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function te(e,n,t=un){return ue(e,n,t)===0}function K(e,n,t){return ue(e,n,t)===0}function br(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!K(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];C(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ue(t,l)<0)if(o){const c=(i+l)/2;ue(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(un)),t}function Re({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(K(e,0))return n;const a=[...n],[l,c]=s;C(l!=null,"Invalid first pivot index"),C(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const u=e<0?c:l,d=t[u];C(d,`Panel constraints not found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const v=n[u];if(C(v!=null,`Previous layout not found for panel index ${u}`),K(v,h)){const x=j-v;ue(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}{const u=e<0?l:c,d=t[u];C(d,`No panel constraints found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const v=n[u];if(C(v!=null,`Previous layout not found for panel index ${u}`),K(v,j)){const x=v-h;ue(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}}{const u=e<0?1:-1;let d=e<0?c:l,h=0;for(;;){const j=n[d];C(j!=null,`Previous layout not found for panel index ${d}`);const x=ze({panelConstraints:t,panelIndex:d,size:100})-j;if(h+=x,d+=u,d<0||d>=t.length)break}const b=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-b:b}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const h=Math.abs(e)-Math.abs(z),b=n[d];C(b!=null,`Previous layout not found for panel index ${d}`);const j=b-h,v=ze({panelConstraints:t,panelIndex:d,size:j});if(!K(b,v)&&(z+=b-v,a[d]=v,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(br(i,a))return i;{const u=e<0?c:l,d=n[u];C(d!=null,`Previous layout not found for panel index ${u}`);const h=d+z,b=ze({panelConstraints:t,panelIndex:u,size:h});if(a[u]=b,!K(b,h)){let j=h-b,x=e<0?c:l;for(;x>=0&&x<t.length;){const W=a[x];C(W!=null,`Previous layout not found for panel index ${x}`);const A=W+j,N=ze({panelConstraints:t,panelIndex:x,size:A});if(K(W,N)||(j-=N-W,a[x]=N),K(j,0))break;e>0?x--:x++}}}const g=a.reduce((u,d)=>d+u,0);return K(g,100)?a:i}function gr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];C(l!=null,"No pivot index found"),n.forEach((u,d)=>{const{constraints:h}=u,{maxSize:b=100,minSize:j=0}=h;d===l?(s=j,i=b):(o+=j,a+=b)});const c=Math.min(i,100-o),z=Math.max(s,100-a),g=e[l];return{valueMax:c,valueMin:z,valueNow:g}}function ve(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Ht(e,n,t=document){const i=ve(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Bt(e,n,t){const s=Ht(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function mn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Ce(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function xr(e,n,t,s=document){var i,o,a,l;const c=Ce(n,s),z=ve(e,s),g=c?z.indexOf(c):-1,u=(i=(o=t[g])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[g+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[u,d]}function Rr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){B({didWarnAboutMissingResizeHandle:!1}),de(()=>{if(!o)return;const l=ve(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:z,valueMin:g,valueNow:u}=gr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const h=i[c];C(h,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",h.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(g)),d.setAttribute("aria-valuenow",u!=null?""+Math.round(u):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),ce(()=>{if(!o)return;const l=n.current;C(l,"Eager values not found");const{panelDataArray:c}=l,z=mn(t,o);C(z!=null,`No group found for id "${t}"`);const g=ve(t,o);C(g,`No resize handles found for group id "${t}"`);const u=g.map(d=>{const h=d.getAttribute("data-panel-resize-handle-id");C(h,"Resize handle element has no handle id attribute");const[b,j]=xr(t,h,c,o);if(b==null||j==null)return()=>{};const v=x=>{if(!x.defaultPrevented)switch(x.key){case"Enter":{x.preventDefault();const W=c.findIndex(A=>A.id===b);if(W>=0){const A=c[W];C(A,`No panel data found for index ${W}`);const N=s[W],{collapsedSize:E=0,collapsible:y,minSize:U=0}=A.constraints;if(N!=null&&y){const Y=Re({delta:K(N,E)?U-E:E-N,initialLayout:s,panelConstraints:c.map(Z=>Z.constraints),pivotIndices:Bt(t,h,o),prevLayout:s,trigger:"keyboard"});s!==Y&&a(Y)}}break}}};return d.addEventListener("keydown",v),()=>{d.removeEventListener("keydown",v)}});return()=>{u.forEach(d=>d())}},[o,e,n,t,s,i,a])}function wn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Gt(e,n){const t=e==="horizontal",{x:s,y:i}=Ze(n);return t?s:i}function Ir(e,n,t,s,i){const o=t==="horizontal",a=Ce(n,i);C(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");C(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const z=Gt(t,e),g=mn(l,i);C(g,`No group element found for id "${l}"`);const u=g.getBoundingClientRect(),d=o?u.width:u.height;return(z-c)/d*100}function yr(e,n,t,s,i,o){if(Wt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Ir(e,n,t,s,o)}function Sr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];C(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];C(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=i/c;s++,n[o]=z,i-=z}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];C(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:g}=l,u=t[c];if(u==null||s!==u){t[c]=s;const{onCollapse:d,onExpand:h,onResize:b}=a;b&&b(s,u),g&&(d||h)&&(h&&(u==null||te(u,z))&&!te(s,z)&&h(),d&&(u==null||!te(u,z))&&te(s,z)&&d())}})}function We(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function wr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function vr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function vn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Ft(e){return`react-resizable-panels:${e}`}function Kt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Vt(e,n){try{const t=Ft(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Cr(e,n,t){var s,i;const o=(s=Vt(e,t))!==null&&s!==void 0?s:{},a=Kt(n);return(i=o[a])!==null&&i!==void 0?i:null}function jr(e,n,t,s,i){var o;const a=Ft(e),l=Kt(n),c=(o=Vt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function Cn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!K(s,100))for(let o=0;o<n.length;o++){const a=t[o];C(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];C(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!K(i,0))for(let o=0;o<n.length;o++){const a=t[o];C(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,K(i,0)))break}return t}const Pr=100,Ie={getItem:e=>(vn(Ie),Ie.getItem(e)),setItem:(e,n)=>{vn(Ie),Ie.setItem(e,n)}},jn={};function qt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:z,tagName:g="div",...u}){const d=ln(o),h=B(null),[b,j]=ye(null),[v,x]=ye([]),W=B({}),A=B(new Map),N=B(0),E=B({autoSaveId:e,direction:s,dragState:b,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),y=B({layout:v,panelDataArray:[],panelDataArrayChanged:!1});B({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Tt(i,()=>({getId:()=>E.current.id,getLayout:()=>{const{layout:p}=y.current;return p},setLayout:p=>{const{onLayout:w}=E.current,{layout:S,panelDataArray:R}=y.current,I=Cn({layout:p,panelConstraints:R.map(P=>P.constraints)});wn(S,I)||(x(I),y.current.layout=I,w&&w(I),fe(R,I,W.current))}}),[]),de(()=>{E.current.autoSaveId=e,E.current.direction=s,E.current.dragState=b,E.current.id=d,E.current.onLayout=a,E.current.storage=c}),Rr({committedValuesRef:E,eagerValuesRef:y,groupId:d,layout:v,panelDataArray:y.current.panelDataArray,setLayout:x,panelGroupElement:h.current}),ce(()=>{const{panelDataArray:p}=y.current;if(e){if(v.length===0||v.length!==p.length)return;let w=jn[e];w==null&&(w=vr(jr,Pr),jn[e]=w);const S=[...p],R=new Map(A.current);w(e,S,R,v,c)}},[e,v,c]),ce(()=>{});const U=F(p=>{const{onLayout:w}=E.current,{layout:S,panelDataArray:R}=y.current;if(p.constraints.collapsible){const I=R.map(X=>X.constraints),{collapsedSize:P=0,panelSize:k,pivotIndices:O}=ae(R,p,S);if(C(k!=null,`Panel size not found for panel "${p.id}"`),!te(k,P)){A.current.set(p.id,k);const q=pe(R,p)===R.length-1?k-P:P-k,M=Re({delta:q,initialLayout:S,panelConstraints:I,pivotIndices:O,prevLayout:S,trigger:"imperative-api"});We(S,M)||(x(M),y.current.layout=M,w&&w(M),fe(R,M,W.current))}}},[]),Y=F((p,w)=>{const{onLayout:S}=E.current,{layout:R,panelDataArray:I}=y.current;if(p.constraints.collapsible){const P=I.map(J=>J.constraints),{collapsedSize:k=0,panelSize:O=0,minSize:X=0,pivotIndices:q}=ae(I,p,R),M=w??X;if(te(O,k)){const J=A.current.get(p.id),Ee=J!=null&&J>=M?J:M,Le=pe(I,p)===I.length-1?O-Ee:Ee-O,ie=Re({delta:Le,initialLayout:R,panelConstraints:P,pivotIndices:q,prevLayout:R,trigger:"imperative-api"});We(R,ie)||(x(ie),y.current.layout=ie,S&&S(ie),fe(I,ie,W.current))}}},[]),Z=F(p=>{const{layout:w,panelDataArray:S}=y.current,{panelSize:R}=ae(S,p,w);return C(R!=null,`Panel size not found for panel "${p.id}"`),R},[]),Q=F((p,w)=>{const{panelDataArray:S}=y.current,R=pe(S,p);return wr({defaultSize:w,dragState:b,layout:v,panelData:S,panelIndex:R})},[b,v]),V=F(p=>{const{layout:w,panelDataArray:S}=y.current,{collapsedSize:R=0,collapsible:I,panelSize:P}=ae(S,p,w);return C(P!=null,`Panel size not found for panel "${p.id}"`),I===!0&&te(P,R)},[]),_=F(p=>{const{layout:w,panelDataArray:S}=y.current,{collapsedSize:R=0,collapsible:I,panelSize:P}=ae(S,p,w);return C(P!=null,`Panel size not found for panel "${p.id}"`),!I||ue(P,R)>0},[]),re=F(p=>{const{panelDataArray:w}=y.current;w.push(p),w.sort((S,R)=>{const I=S.order,P=R.order;return I==null&&P==null?0:I==null?-1:P==null?1:I-P}),y.current.panelDataArrayChanged=!0},[]);de(()=>{if(y.current.panelDataArrayChanged){y.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:w,storage:S}=E.current,{layout:R,panelDataArray:I}=y.current;let P=null;if(p){const O=Cr(p,I,S);O&&(A.current=new Map(Object.entries(O.expandToSizes)),P=O.layout)}P==null&&(P=Sr({panelDataArray:I}));const k=Cn({layout:P,panelConstraints:I.map(O=>O.constraints)});wn(R,k)||(x(k),y.current.layout=k,w&&w(k),fe(I,k,W.current))}}),de(()=>{const p=y.current;return()=>{p.layout=[]}},[]);const H=F(p=>function(S){S.preventDefault();const R=h.current;if(!R)return()=>null;const{direction:I,dragState:P,id:k,keyboardResizeBy:O,onLayout:X}=E.current,{layout:q,panelDataArray:M}=y.current,{initialLayout:J}=P??{},Ee=Bt(k,p,R);let ne=yr(S,p,I,P,O,R);if(ne===0)return;const Le=I==="horizontal";document.dir==="rtl"&&Le&&(ne=-ne);const ie=M.map(Jt=>Jt.constraints),ge=Re({delta:ne,initialLayout:J??q,panelConstraints:ie,pivotIndices:Ee,prevLayout:q,trigger:Wt(S)?"keyboard":"mouse-or-touch"}),pn=!We(q,ge);(kt(S)||Mt(S))&&N.current!=ne&&(N.current=ne,pn?rn(p,0):Le?rn(p,ne<0?At:_t):rn(p,ne<0?$t:Ot)),pn&&(x(ge),y.current.layout=ge,X&&X(ge),fe(M,ge,W.current))},[]),$=F((p,w)=>{const{onLayout:S}=E.current,{layout:R,panelDataArray:I}=y.current,P=I.map(J=>J.constraints),{panelSize:k,pivotIndices:O}=ae(I,p,R);C(k!=null,`Panel size not found for panel "${p.id}"`);const q=pe(I,p)===I.length-1?k-w:w-k,M=Re({delta:q,initialLayout:R,panelConstraints:P,pivotIndices:O,prevLayout:R,trigger:"imperative-api"});We(R,M)||(x(M),y.current.layout=M,S&&S(M),fe(I,M,W.current))},[]),G=F((p,w)=>{const{layout:S,panelDataArray:R}=y.current,{collapsedSize:I=0,collapsible:P}=w,{collapsedSize:k=0,collapsible:O,maxSize:X=100,minSize:q=0}=p.constraints,{panelSize:M}=ae(R,p,S);M!=null&&(P&&O&&te(M,I)?te(I,k)||$(p,k):M<q?$(p,q):M>X&&$(p,X))},[$]),nn=F((p,w)=>{const{direction:S}=E.current,{layout:R}=y.current;if(!h.current)return;const I=Ce(p,h.current);C(I,`Drag handle element not found for id "${p}"`);const P=Gt(S,w);j({dragHandleId:p,dragHandleRect:I.getBoundingClientRect(),initialCursorPosition:P,initialLayout:R})},[]),je=F(()=>{j(null)},[]),Pe=F(p=>{const{panelDataArray:w}=y.current,S=pe(w,p);S>=0&&(w.splice(S,1),delete W.current[p.id],y.current.panelDataArrayChanged=!0)},[]),Te=rr(()=>({collapsePanel:U,direction:s,dragState:b,expandPanel:Y,getPanelSize:Z,getPanelStyle:Q,groupId:d,isPanelCollapsed:V,isPanelExpanded:_,reevaluatePanelConstraints:G,registerPanel:re,registerResizeHandle:H,resizePanel:$,startDragging:nn,stopDragging:je,unregisterPanel:Pe,panelGroupElement:h.current}),[U,b,s,Y,Z,Q,d,V,_,G,re,H,$,nn,je,Pe]),ee={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return be(Ye.Provider,{value:Te},be(g,{...u,children:n,className:t,id:o,ref:h,style:{...ee,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Ut=jt((e,n)=>be(qt,{...e,forwardedRef:n}));qt.displayName="PanelGroup";Ut.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ae(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Tr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){ce(()=>{if(e||t==null||s==null)return;const i=Ce(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");C(l,`No group element found for id "${l}"`);const c=ve(l,s),z=Ht(l,n,s);C(z!==null,`No resize element found for id "${n}"`);const g=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[g].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Xt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onDragging:o,style:a={},tabIndex:l=0,tagName:c="div",...z}){var g,u;const d=B(null),h=B({onDragging:o});ce(()=>{h.current.onDragging=o});const b=Pt(Ye);if(b===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:j,groupId:v,registerResizeHandle:x,startDragging:W,stopDragging:A,panelGroupElement:N}=b,E=ln(i),[y,U]=ye("inactive"),[Y,Z]=ye(!1),[Q,V]=ye(null),_=B({state:y});de(()=>{_.current.state=y}),ce(()=>{if(t)V(null);else{const G=x(E);V(()=>G)}},[t,E,x]);const re=(g=s==null?void 0:s.coarse)!==null&&g!==void 0?g:15,H=(u=s==null?void 0:s.fine)!==null&&u!==void 0?u:5;return ce(()=>{if(t||Q==null)return;const G=d.current;return C(G,"Element ref not attached"),zr(E,G,j,{coarse:re,fine:H},(je,Pe,Te)=>{if(Pe)switch(je){case"down":{U("drag"),W(E,Te);const{onDragging:ee}=h.current;ee&&ee(!0);break}case"move":{const{state:ee}=_.current;ee!=="drag"&&U("hover"),Q(Te);break}case"up":{U("hover"),A();const{onDragging:ee}=h.current;ee&&ee(!1);break}}else U("inactive")})},[re,j,t,H,x,E,Q,W,A]),Tr({disabled:t,handleId:E,resizeHandler:Q,panelGroupElement:N}),be(c,{...z,children:e,className:n,id:i,onBlur:()=>Z(!1),onFocus:()=>Z(!0),ref:d,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":j,"data-panel-group-id":v,"data-resize-handle":"","data-resize-handle-active":y==="drag"?"pointer":Y?"keyboard":void 0,"data-resize-handle-state":y,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":E})}Xt.displayName="PanelResizeHandle";function Er(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Lr,fn]=Yt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Wr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:i=!1,onLayout:o,storage:a,ref:l,groupProps:c,...z})=>{e??(e=D.useId());const g=D.useCallback((d={},h=null)=>({...d,ref:h,...z}),[z]),u=D.useCallback((d={})=>{const{as:h,...b}=c??{};return{...d,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...b}},[e,n,c,t,s,o,a]);return D.useEffect(()=>{if(!e)return;const d=mn(e);l&&(l.current=d)},[l,e]),{isDisabled:i,getContainerProps:g,getGroupProps:u}},kr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:i,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:g,controlRef:u,containerProps:d,...h})=>{e??(e=D.useId());const b=D.useCallback((v={})=>{const{as:x,...W}=d??{};return{...v,ref:u,id:e,tagName:x,collapsible:s,defaultSize:i,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:g,...s?{"aria-labelledby":e}:{"aria-label":e},...W}},[e,u,d,t,s,i,o,a,l,c,z,g]),j=D.useCallback((v={},x=null)=>({...v,ref:x,...h}),[h]);return D.useEffect(()=>{if(!e)return;const v=Er(e);n&&(n.current=v)},[n,e]),{getPanelProps:b,getItemProps:j}},Mr=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{e??(e=D.useId());const{isDisabled:l}=fn(),[c,z]=D.useState(!1),g=s||i||l,u=D.useCallback((h={})=>({...h,id:e,tagName:t,disabled:g,onDragging:Zt(o,b=>z(b)),...a,"data-active":zn(c),style:{...h.style,...a.style,...g?{cursor:"default"}:{}}}),[e,t,g,o,a,c]),d=D.useCallback((h={},b=null)=>({...h,ref:b,"data-active":zn(c)}),[c]);return D.useEffect(()=>{if(!e)return;const h=Ce(e);n&&(n.current=h)},[n,e]),{getTriggerProps:u,getIconProps:d}},L=an(({direction:e="horizontal",...n},t)=>{const[s,i]=Qt("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=er(i),{getContainerProps:z,getGroupProps:g,...u}=Wr({ref:t,...c}),d={w:"100%",h:"100%",...s.container};return r.jsx(Lr,{value:{styles:s,...u},children:r.jsx(Se.div,{className:on("ui-resizable",o),__css:d,...z({},l),children:r.jsx(Ut,{...g(),children:a})})})}),Dr=new Set(["order"]),Ar=Se(Lt,{disableStyleProp:e=>Dr.has(e)}),m=an(({className:e,children:n,innerRef:t,w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:g,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j,...v},x)=>{const{styles:W}=fn(),{getPanelProps:A,getItemProps:N}=kr({ref:x,...v}),E={boxSize:"100%",...W.item};return r.jsx(Ar,{...A({w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:g,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j}),children:r.jsx(Se.div,{className:on("ui-resizable__item",e),__css:E,...N({},t),children:n})})}),T=an(({className:e,icon:n,children:t,iconProps:s,...i},o)=>{const{styles:a}=fn(),{getTriggerProps:l,getIconProps:c}=Mr({ref:o,...i}),z={position:"relative",...a.trigger};return r.jsxs(Se.div,{as:Xt,className:on("ui-resizable__trigger",e),__css:z,...l(),children:[n?r.jsx(Se.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})}),os={title:"Components / Data Display / Resizable",component:L},ke=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(L,{variant:"unstyled",h:"md",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),De=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(L,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ae=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),_e=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),$e=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Oe=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),He=()=>{const e=D.useRef(null),n=D.useRef(null),t=D.useRef(null),s=D.useRef(null),i=D.useRef(null);return D.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(L,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(m,{as:f,children:"Two"})]})},Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(bn,{})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(bn,{})}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(m,{as:f,children:"Two"})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(L,{direction:"vertical",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Bottom"})]})})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(L,{children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Right"})]})})]})]}),Ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]})]}),Ve=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),qe=()=>{const[e,n]=hn(!0),[t,s]=hn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]}),r.jsxs(Ct,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(m,{as:f,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(m,{as:f,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(m,{as:f,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Ue=()=>{const e=D.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]})},Xe=()=>{const e=D.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Ct,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]})};var Pn,Tn,En;ke.parameters={...ke.parameters,docs:{...(Pn=ke.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(En=(Tn=ke.parameters)==null?void 0:Tn.docs)==null?void 0:En.source}}};var Ln,Wn,kn;Me.parameters={...Me.parameters,docs:{...(Ln=Me.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(kn=(Wn=Me.parameters)==null?void 0:Wn.docs)==null?void 0:kn.source}}};var Mn,Dn,An;De.parameters={...De.parameters,docs:{...(Mn=De.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(An=(Dn=De.parameters)==null?void 0:Dn.docs)==null?void 0:An.source}}};var _n,$n,On;Ae.parameters={...Ae.parameters,docs:{...(_n=Ae.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(On=($n=Ae.parameters)==null?void 0:$n.docs)==null?void 0:On.source}}};var Nn,Hn,Bn;_e.parameters={..._e.parameters,docs:{...(Nn=_e.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Bn=(Hn=_e.parameters)==null?void 0:Hn.docs)==null?void 0:Bn.source}}};var Gn,Fn,Kn;$e.parameters={...$e.parameters,docs:{...(Gn=$e.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Kn=(Fn=$e.parameters)==null?void 0:Fn.docs)==null?void 0:Kn.source}}};var Vn,qn,Un;Oe.parameters={...Oe.parameters,docs:{...(Vn=Oe.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Un=(qn=Oe.parameters)==null?void 0:qn.docs)==null?void 0:Un.source}}};var Xn,Jn,Yn;Ne.parameters={...Ne.parameters,docs:{...(Xn=Ne.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Jn=Ne.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Zn,Qn,et;He.parameters={...He.parameters,docs:{...(Zn=He.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(et=(Qn=He.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};var nt,tt,rt;Be.parameters={...Be.parameters,docs:{...(nt=Be.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(rt=(tt=Be.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var st,ot,it;Ge.parameters={...Ge.parameters,docs:{...(st=Ge.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
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
}`,...(it=(ot=Ge.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var at,lt,ct;Fe.parameters={...Fe.parameters,docs:{...(at=Fe.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
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
}`,...(ct=(lt=Fe.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,mt;Ke.parameters={...Ke.parameters,docs:{...(dt=Ke.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
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
}`,...(mt=(ut=Ke.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var ft,pt,ht;Ve.parameters={...Ve.parameters,docs:{...(ft=Ve.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(ht=(pt=Ve.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};var zt,bt,gt;qe.parameters={...qe.parameters,docs:{...(zt=qe.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
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
}`,...(gt=(bt=qe.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var xt,Rt,It;Ue.parameters={...Ue.parameters,docs:{...(xt=Ue.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
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
}`,...(It=(Rt=Ue.parameters)==null?void 0:Rt.docs)==null?void 0:It.source}}};var yt,St,wt;Xe.parameters={...Xe.parameters,docs:{...(yt=Xe.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
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
}`,...(wt=(St=Xe.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};const is=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{is as __namedExportsOrder,ke as basic,Xe as customControls,Ge as customIcon,os as default,Ke as isDisabled,Fe as nestedResizable,Ue as useCookieStorage,qe as useLocaleStorage,Ve as useOnResize,Ne as withCollapsible,De as withColorScheme,_e as withDefaultSize,Ae as withDirection,Be as withIcon,Oe as withKeyboardStep,$e as withMinMaxSize,He as withRefs,Me as withVariant};
