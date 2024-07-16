import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{u as zn}from"./index-Du0-7Fls.js";import{a as Ct,r as _}from"./index-BwDkhjyp.js";import{l as Yt,h as Zt,d as bn,b as Se,c as on}from"./factory-CtEVzbYf.js";import{f as an}from"./forward-ref-BmTAT9U5.js";import{a as Qt}from"./use-component-style-D3qgkwVB.js";import{o as er}from"./theme-provider-DwNsBv-g.js";import{G as gn,M as xn}from"./move-horizontal-BE8xDz6r.js";import{C as p}from"./center-Dj7-DfXn.js";import{W as jt}from"./flex--8sdKDgM.js";import{B as he}from"./button-ixSdWECI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-DT4tbm16.js";import"./icon-DBsGF4uC.js";import"./index-DXbYvzpO.js";import"./use-ripple-CSL3XTH4.js";import"./index-DGf9HWvz.js";import"./motion-Y1F55cL9.js";import"./motion-BkrKHA2r.js";import"./loading-k_S2O4S_.js";const{createElement:be,createContext:nr,createRef:ss,forwardRef:Pt,useCallback:K,useContext:Tt,useEffect:ce,useImperativeHandle:Et,useLayoutEffect:tr,useMemo:rr,useRef:G,useState:ye}=Ct,Rn=Ct.useId,sr=tr,Ue=nr(null);Ue.displayName="PanelGroupContext";const de=sr,or=typeof Rn=="function"?Rn:()=>null;let ir=0;function ln(e=null){const n=or(),t=G(e||n||null);return t.current===null&&(t.current=""+ir++),e??t.current}function Lt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:x,onResize:u,order:d,style:h,tagName:b="div",...j}){const w=Tt(Ue);if(w===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:R,expandPanel:L,getPanelSize:A,getPanelStyle:$,groupId:W,isPanelCollapsed:C,reevaluatePanelConstraints:B,registerPanel:F,resizePanel:q,unregisterPanel:se}=w,U=ln(a),D=G({callbacks:{onCollapse:z,onExpand:x,onResize:u},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:U,idIsFromProps:a!==void 0,order:d});G({didLogMissingDefaultSizeWarning:!1}),de(()=>{const{callbacks:H,constraints:O}=D.current,J={...O};D.current.id=U,D.current.idIsFromProps=a!==void 0,D.current.order=d,H.onCollapse=z,H.onExpand=x,H.onResize=u,O.collapsedSize=t,O.collapsible=s,O.defaultSize=i,O.maxSize=l,O.minSize=c,(J.collapsedSize!==O.collapsedSize||J.collapsible!==O.collapsible||J.maxSize!==O.maxSize||J.minSize!==O.minSize)&&B(D.current,J)}),de(()=>{const H=D.current;return F(H),()=>{se(H)}},[d,U,F,se]),Et(o,()=>({collapse:()=>{R(D.current)},expand:H=>{L(D.current,H)},getId(){return U},getSize(){return A(D.current)},isCollapsed(){return C(D.current)},isExpanded(){return!C(D.current)},resize:H=>{q(D.current,H)}}),[R,L,A,C,U,q]);const te=$(D.current,i);return be(b,{...j,children:e,className:n,id:a,style:{...te,...h},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":W,"data-panel-id":U,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Wt=Pt((e,n)=>be(Lt,{...e,forwardedRef:n}));Lt.displayName="Panel";Wt.displayName="forwardRef(Panel)";let sn=null,le=null;function ar(e,n){if(n){const t=(n&At)!==0,s=(n&Ot)!==0,i=(n&$t)!==0,o=(n&Nt)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function lr(){le!==null&&(document.head.removeChild(le),sn=null,le=null)}function tn(e,n){const t=ar(e,n);sn!==t&&(sn=t,le===null&&(le=document.createElement("style"),document.head.appendChild(le)),le.innerHTML=`*{cursor: ${t}!important;}`)}function kt(e){return e.type==="keydown"}function Mt(e){return e.type.startsWith("pointer")}function Dt(e){return e.type.startsWith("mouse")}function Xe(e){if(Mt(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Dt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function cr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function dr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function ur(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Sn(e),b:Sn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;v(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:yn(In(t.a)),b:yn(In(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const mr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function fr(e){var n;const t=getComputedStyle((n=_t(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function pr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||fr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||mr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function In(e){let n=e.length;for(;n--;){const t=e[n];if(v(t,"Missing node"),pr(t))return t}return null}function yn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Sn(e){const n=[];for(;e;)n.push(e),e=_t(e);return n}function _t(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const At=1,Ot=2,$t=4,Nt=8,hr=cr()==="coarse";let Q=[],Je=!1,re=new Map,Ye=new Map;const we=new Set;function zr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),we.add(l),qe(),function(){var x;Ye.delete(e),we.delete(l);const u=(x=re.get(a))!==null&&x!==void 0?x:1;if(re.set(a,u-1),qe(),u===1&&re.delete(a),Q.includes(l)){const d=Q.indexOf(l);d>=0&&Q.splice(d,1),dn()}}}function wn(e){const{target:n}=e,{x:t,y:s}=Xe(e);Je=!0,cn({target:n,x:t,y:s}),qe(),Q.length>0&&(un("down",e),e.preventDefault(),e.stopPropagation())}function xe(e){const{x:n,y:t}=Xe(e);if(!Je){const{target:s}=e;cn({target:s,x:n,y:t})}un("move",e),dn(),Q.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Xe(e);Ye.clear(),Je=!1,Q.length>0&&e.preventDefault(),un("up",e),cn({target:n,x:t,y:s}),dn(),qe()}function cn({target:e,x:n,y:t}){Q.splice(0);let s=null;e instanceof HTMLElement&&(s=e),we.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:z,right:x,top:u}=l,d=hr?a.coarse:a.fine;if(n>=z-d&&n<=x+d&&t>=u-d&&t<=c+d){if(s!==null&&o!==s&&!o.contains(s)&&!s.contains(o)&&ur(s,o)>0){let b=s,j=!1;for(;b&&!b.contains(o);){if(dr(b.getBoundingClientRect(),l)){j=!0;break}b=b.parentElement}if(j)return}Q.push(i)}})}function rn(e,n){Ye.set(e,n)}function dn(){let e=!1,n=!1;Q.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Ye.forEach(s=>{t|=s}),e&&n?tn("intersection",t):e?tn("horizontal",t):n?tn("vertical",t):lr()}function qe(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",wn),t.removeEventListener("pointerleave",xe),t.removeEventListener("pointermove",xe)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),we.size>0&&(Je?(Q.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",xe),t.addEventListener("pointermove",xe))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",wn,{capture:!0}),t.addEventListener("pointermove",xe))}))}function un(e,n){we.forEach(t=>{const{setResizeHandlerState:s}=t,i=Q.includes(t);s(e,i,n)})}function v(e,n){if(!e)throw console.error(n),Error(n)}const mn=10;function ue(e,n,t=mn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=mn){return ue(e,n,t)===0}function V(e,n,t){return ue(e,n,t)===0}function br(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!V(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];v(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ue(t,l)<0)if(o){const c=(i+l)/2;ue(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(mn)),t}function Re({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(V(e,0))return n;const a=[...n],[l,c]=s;v(l!=null,"Invalid first pivot index"),v(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const u=e<0?c:l,d=t[u];v(d,`Panel constraints not found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const w=n[u];if(v(w!=null,`Previous layout not found for panel index ${u}`),V(w,h)){const R=j-w;ue(R,Math.abs(e))>0&&(e=e<0?0-R:R)}}}{const u=e<0?l:c,d=t[u];v(d,`No panel constraints found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const w=n[u];if(v(w!=null,`Previous layout not found for panel index ${u}`),V(w,j)){const R=w-h;ue(R,Math.abs(e))>0&&(e=e<0?0-R:R)}}}}{const u=e<0?1:-1;let d=e<0?c:l,h=0;for(;;){const j=n[d];v(j!=null,`Previous layout not found for panel index ${d}`);const R=ze({panelConstraints:t,panelIndex:d,size:100})-j;if(h+=R,d+=u,d<0||d>=t.length)break}const b=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-b:b}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const h=Math.abs(e)-Math.abs(z),b=n[d];v(b!=null,`Previous layout not found for panel index ${d}`);const j=b-h,w=ze({panelConstraints:t,panelIndex:d,size:j});if(!V(b,w)&&(z+=b-w,a[d]=w,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(br(i,a))return i;{const u=e<0?c:l,d=n[u];v(d!=null,`Previous layout not found for panel index ${u}`);const h=d+z,b=ze({panelConstraints:t,panelIndex:u,size:h});if(a[u]=b,!V(b,h)){let j=h-b,R=e<0?c:l;for(;R>=0&&R<t.length;){const L=a[R];v(L!=null,`Previous layout not found for panel index ${R}`);const A=L+j,$=ze({panelConstraints:t,panelIndex:R,size:A});if(V(L,$)||(j-=$-L,a[R]=$),V(j,0))break;e>0?R--:R++}}}const x=a.reduce((u,d)=>d+u,0);return V(x,100)?a:i}function gr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];v(l!=null,"No pivot index found"),n.forEach((u,d)=>{const{constraints:h}=u,{maxSize:b=100,minSize:j=0}=h;d===l?(s=j,i=b):(o+=j,a+=b)});const c=Math.min(i,100-o),z=Math.max(s,100-a),x=e[l];return{valueMax:c,valueMin:z,valueNow:x}}function ve(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Ht(e,n,t=document){const i=ve(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Bt(e,n,t){const s=Ht(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function fn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Ce(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function xr(e,n,t,s=document){var i,o,a,l;const c=Ce(n,s),z=ve(e,s),x=c?z.indexOf(c):-1,u=(i=(o=t[x])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[x+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[u,d]}function Rr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){G({didWarnAboutMissingResizeHandle:!1}),de(()=>{if(!o)return;const l=ve(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:z,valueMin:x,valueNow:u}=gr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const h=i[c];v(h,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",h.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(x)),d.setAttribute("aria-valuenow",u!=null?""+Math.round(u):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),ce(()=>{if(!o)return;const l=n.current;v(l,"Eager values not found");const{panelDataArray:c}=l,z=fn(t,o);v(z!=null,`No group found for id "${t}"`);const x=ve(t,o);v(x,`No resize handles found for group id "${t}"`);const u=x.map(d=>{const h=d.getAttribute("data-panel-resize-handle-id");v(h,"Resize handle element has no handle id attribute");const[b,j]=xr(t,h,c,o);if(b==null||j==null)return()=>{};const w=R=>{if(!R.defaultPrevented)switch(R.key){case"Enter":{R.preventDefault();const L=c.findIndex(A=>A.id===b);if(L>=0){const A=c[L];v(A,`No panel data found for index ${L}`);const $=s[L],{collapsedSize:W=0,collapsible:C,minSize:B=0}=A.constraints;if($!=null&&C){const F=Re({delta:V($,W)?B-W:W-$,initialLayout:s,panelConstraints:c.map(q=>q.constraints),pivotIndices:Bt(t,h,o),prevLayout:s,trigger:"keyboard"});s!==F&&a(F)}}break}}};return d.addEventListener("keydown",w),()=>{d.removeEventListener("keydown",w)}});return()=>{u.forEach(d=>d())}},[o,e,n,t,s,i,a])}function vn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Gt(e,n){const t=e==="horizontal",{x:s,y:i}=Xe(n);return t?s:i}function Ir(e,n,t,s,i){const o=t==="horizontal",a=Ce(n,i);v(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");v(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const z=Gt(t,e),x=fn(l,i);v(x,`No group element found for id "${l}"`);const u=x.getBoundingClientRect(),d=o?u.width:u.height;return(z-c)/d*100}function yr(e,n,t,s,i,o){if(kt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Ir(e,n,t,s,o)}function Sr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=i/c;s++,n[o]=z,i-=z}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];v(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:x}=l,u=t[c];if(u==null||s!==u){t[c]=s;const{onCollapse:d,onExpand:h,onResize:b}=a;b&&b(s,u),x&&(d||h)&&(h&&(u==null||ne(u,z))&&!ne(s,z)&&h(),d&&(u==null||!ne(u,z))&&ne(s,z)&&d())}})}function Te(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function wr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function vr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Cn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Ft(e){return`react-resizable-panels:${e}`}function Kt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Vt(e,n){try{const t=Ft(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Cr(e,n,t){var s,i;const o=(s=Vt(e,t))!==null&&s!==void 0?s:{},a=Kt(n);return(i=o[a])!==null&&i!==void 0?i:null}function jr(e,n,t,s,i){var o;const a=Ft(e),l=Kt(n),c=(o=Vt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function jn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!V(s,100))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!V(i,0))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,V(i,0)))break}return t}const Pr=100,Ie={getItem:e=>(Cn(Ie),Ie.getItem(e)),setItem:(e,n)=>{Cn(Ie),Ie.setItem(e,n)}},Pn={};function qt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:z,tagName:x="div",...u}){const d=ln(o),h=G(null),[b,j]=ye(null),[w,R]=ye([]),L=G({}),A=G(new Map),$=G(0),W=G({autoSaveId:e,direction:s,dragState:b,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),C=G({layout:w,panelDataArray:[],panelDataArrayChanged:!1});G({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Et(i,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:m}=C.current;return m},setLayout:m=>{const{onLayout:g}=W.current,{layout:S,panelDataArray:I}=C.current,y=jn({layout:m,panelConstraints:I.map(P=>P.constraints)});vn(S,y)||(R(y),C.current.layout=y,g&&g(y),fe(I,y,L.current))}}),[]),de(()=>{W.current.autoSaveId=e,W.current.direction=s,W.current.dragState=b,W.current.id=d,W.current.onLayout=a,W.current.storage=c}),Rr({committedValuesRef:W,eagerValuesRef:C,groupId:d,layout:w,panelDataArray:C.current.panelDataArray,setLayout:R,panelGroupElement:h.current}),ce(()=>{const{panelDataArray:m}=C.current;if(e){if(w.length===0||w.length!==m.length)return;let g=Pn[e];g==null&&(g=vr(jr,Pr),Pn[e]=g);const S=[...m],I=new Map(A.current);g(e,S,I,w,c)}},[e,w,c]),ce(()=>{});const B=K(m=>{const{onLayout:g}=W.current,{layout:S,panelDataArray:I}=C.current;if(m.constraints.collapsible){const y=I.map(Y=>Y.constraints),{collapsedSize:P=0,panelSize:k,pivotIndices:N}=ae(I,m,S);if(v(k!=null,`Panel size not found for panel "${m.id}"`),!ne(k,P)){A.current.set(m.id,k);const X=pe(I,m)===I.length-1?k-P:P-k,M=Re({delta:X,initialLayout:S,panelConstraints:y,pivotIndices:N,prevLayout:S,trigger:"imperative-api"});Te(S,M)||(R(M),C.current.layout=M,g&&g(M),fe(I,M,L.current))}}},[]),F=K((m,g)=>{const{onLayout:S}=W.current,{layout:I,panelDataArray:y}=C.current;if(m.constraints.collapsible){const P=y.map(Z=>Z.constraints),{collapsedSize:k=0,panelSize:N=0,minSize:Y=0,pivotIndices:X}=ae(y,m,I),M=g??Y;if(ne(N,k)){const Z=A.current.get(m.id),je=Z!=null&&Z>=M?Z:M,Pe=pe(y,m)===y.length-1?N-je:je-N,ie=Re({delta:Pe,initialLayout:I,panelConstraints:P,pivotIndices:X,prevLayout:I,trigger:"imperative-api"});Te(I,ie)||(R(ie),C.current.layout=ie,S&&S(ie),fe(y,ie,L.current))}}},[]),q=K(m=>{const{layout:g,panelDataArray:S}=C.current,{panelSize:I}=ae(S,m,g);return v(I!=null,`Panel size not found for panel "${m.id}"`),I},[]),se=K((m,g)=>{const{panelDataArray:S}=C.current,I=pe(S,m);return wr({defaultSize:g,dragState:b,layout:w,panelData:S,panelIndex:I})},[b,w]),U=K(m=>{const{layout:g,panelDataArray:S}=C.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,m,g);return v(P!=null,`Panel size not found for panel "${m.id}"`),y===!0&&ne(P,I)},[]),D=K(m=>{const{layout:g,panelDataArray:S}=C.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,m,g);return v(P!=null,`Panel size not found for panel "${m.id}"`),!y||ue(P,I)>0},[]),te=K(m=>{const{panelDataArray:g}=C.current;g.push(m),g.sort((S,I)=>{const y=S.order,P=I.order;return y==null&&P==null?0:y==null?-1:P==null?1:y-P}),C.current.panelDataArrayChanged=!0},[]);de(()=>{if(C.current.panelDataArrayChanged){C.current.panelDataArrayChanged=!1;const{autoSaveId:m,onLayout:g,storage:S}=W.current,{layout:I,panelDataArray:y}=C.current;let P=null;if(m){const N=Cr(m,y,S);N&&(A.current=new Map(Object.entries(N.expandToSizes)),P=N.layout)}P==null&&(P=Sr({panelDataArray:y}));const k=jn({layout:P,panelConstraints:y.map(N=>N.constraints)});vn(I,k)||(R(k),C.current.layout=k,g&&g(k),fe(y,k,L.current))}}),de(()=>{const m=C.current;return()=>{m.layout=[]}},[]);const H=K(m=>function(S){S.preventDefault();const I=h.current;if(!I)return()=>null;const{direction:y,dragState:P,id:k,keyboardResizeBy:N,onLayout:Y}=W.current,{layout:X,panelDataArray:M}=C.current,{initialLayout:Z}=P??{},je=Bt(k,m,I);let ee=yr(S,m,y,P,N,I);if(ee===0)return;const Pe=y==="horizontal";document.dir==="rtl"&&Pe&&(ee=-ee);const ie=M.map(Jt=>Jt.constraints),ge=Re({delta:ee,initialLayout:Z??X,panelConstraints:ie,pivotIndices:je,prevLayout:X,trigger:kt(S)?"keyboard":"mouse-or-touch"}),hn=!Te(X,ge);(Mt(S)||Dt(S))&&$.current!=ee&&($.current=ee,hn?rn(m,0):Pe?rn(m,ee<0?At:Ot):rn(m,ee<0?$t:Nt)),hn&&(R(ge),C.current.layout=ge,Y&&Y(ge),fe(M,ge,L.current))},[]),O=K((m,g)=>{const{onLayout:S}=W.current,{layout:I,panelDataArray:y}=C.current,P=y.map(Z=>Z.constraints),{panelSize:k,pivotIndices:N}=ae(y,m,I);v(k!=null,`Panel size not found for panel "${m.id}"`);const X=pe(y,m)===y.length-1?k-g:g-k,M=Re({delta:X,initialLayout:I,panelConstraints:P,pivotIndices:N,prevLayout:I,trigger:"imperative-api"});Te(I,M)||(R(M),C.current.layout=M,S&&S(M),fe(y,M,L.current))},[]),J=K((m,g)=>{const{layout:S,panelDataArray:I}=C.current,{collapsedSize:y=0,collapsible:P}=g,{collapsedSize:k=0,collapsible:N,maxSize:Y=100,minSize:X=0}=m.constraints,{panelSize:M}=ae(I,m,S);M!=null&&(P&&N&&ne(M,y)?ne(y,k)||O(m,k):M<X?O(m,X):M>Y&&O(m,Y))},[O]),Ze=K((m,g)=>{const{direction:S}=W.current,{layout:I}=C.current;if(!h.current)return;const y=Ce(m,h.current);v(y,`Drag handle element not found for id "${m}"`);const P=Gt(S,g);j({dragHandleId:m,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:P,initialLayout:I})},[]),oe=K(()=>{j(null)},[]),Qe=K(m=>{const{panelDataArray:g}=C.current,S=pe(g,m);S>=0&&(g.splice(S,1),delete L.current[m.id],C.current.panelDataArrayChanged=!0)},[]),en=rr(()=>({collapsePanel:B,direction:s,dragState:b,expandPanel:F,getPanelSize:q,getPanelStyle:se,groupId:d,isPanelCollapsed:U,isPanelExpanded:D,reevaluatePanelConstraints:J,registerPanel:te,registerResizeHandle:H,resizePanel:O,startDragging:Ze,stopDragging:oe,unregisterPanel:Qe,panelGroupElement:h.current}),[B,b,s,F,q,se,d,U,D,J,te,H,O,Ze,oe,Qe]),nn={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return be(Ue.Provider,{value:en},be(x,{...u,children:n,className:t,id:o,ref:h,style:{...nn,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Ut=Pt((e,n)=>be(qt,{...e,forwardedRef:n}));qt.displayName="PanelGroup";Ut.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ae(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Tr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){ce(()=>{if(e||t==null||s==null)return;const i=Ce(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");v(l,`No group element found for id "${l}"`);const c=ve(l,s),z=Ht(l,n,s);v(z!==null,`No resize element found for id "${n}"`);const x=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[x].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Xt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:z=0,tagName:x="div",...u}){var d,h;const b=G(null),j=G({onDragging:a});ce(()=>{j.current.onDragging=a});const w=Tt(Ue);if(w===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:R,groupId:L,registerResizeHandle:A,startDragging:$,stopDragging:W,panelGroupElement:C}=w,B=ln(i),[F,q]=ye("inactive"),[se,U]=ye(!1),[D,te]=ye(null),H=G({state:F});de(()=>{H.current.state=F}),ce(()=>{if(t)te(null);else{const oe=A(B);te(()=>oe)}},[t,B,A]);const O=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,J=(h=s==null?void 0:s.fine)!==null&&h!==void 0?h:5;return ce(()=>{if(t||D==null)return;const oe=b.current;return v(oe,"Element ref not attached"),zr(B,oe,R,{coarse:O,fine:J},(en,nn,m)=>{if(nn)switch(en){case"down":{q("drag"),$(B,m);const{onDragging:g}=j.current;g&&g(!0);break}case"move":{const{state:g}=H.current;g!=="drag"&&q("hover"),D(m);break}case"up":{q("hover"),W();const{onDragging:g}=j.current;g&&g(!1);break}}else q("inactive")})},[O,R,t,J,A,B,D,$,W]),Tr({disabled:t,handleId:B,resizeHandler:D,panelGroupElement:C}),be(x,{...u,children:e,className:n,id:i,onBlur:()=>{U(!1),o==null||o()},onFocus:()=>{U(!0),l==null||l()},ref:b,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:z,"data-panel-group-direction":R,"data-panel-group-id":L,"data-resize-handle":"","data-resize-handle-active":F==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":F,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":B})}Xt.displayName="PanelResizeHandle";function Er(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Lr,pn]=Yt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Wr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:i=!1,onLayout:o,storage:a,ref:l,groupProps:c,...z})=>{e??(e=_.useId());const x=_.useCallback((d={},h=null)=>({...d,ref:h,...z}),[z]),u=_.useCallback((d={})=>{const{as:h,...b}=c??{};return{...d,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...b}},[e,n,c,t,s,o,a]);return _.useEffect(()=>{if(!e)return;const d=fn(e);l&&(l.current=d)},[l,e]),{isDisabled:i,getContainerProps:x,getGroupProps:u}},kr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:i,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:x,controlRef:u,containerProps:d,...h})=>{e??(e=_.useId());const b=_.useCallback((w={})=>{const{as:R,...L}=d??{};return{...w,ref:u,id:e,tagName:R,collapsible:s,defaultSize:i,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:x,...s?{"aria-labelledby":e}:{"aria-label":e},...L}},[e,u,d,t,s,i,o,a,l,c,z,x]),j=_.useCallback((w={},R=null)=>({...w,ref:R,...h}),[h]);return _.useEffect(()=>{if(!e)return;const w=Er(e);n&&(n.current=w)},[n,e]),{getPanelProps:b,getItemProps:j}},Mr=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{e??(e=_.useId());const{isDisabled:l}=pn(),[c,z]=_.useState(!1),x=s||i||l,u=_.useCallback((h={})=>({...h,id:e,tagName:t,disabled:x,onDragging:Zt(o,b=>z(b)),...a,"data-active":bn(c),style:{...h.style,...a.style,...x?{cursor:"default"}:{}}}),[e,t,x,o,a,c]),d=_.useCallback((h={},b=null)=>({...h,ref:b,"data-active":bn(c)}),[c]);return _.useEffect(()=>{if(!e)return;const h=Ce(e);n&&(n.current=h)},[n,e]),{getTriggerProps:u,getIconProps:d}},E=an(({direction:e="horizontal",...n},t)=>{const[s,i]=Qt("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=er(i),{getContainerProps:z,getGroupProps:x,...u}=Wr({ref:t,...c}),d={w:"100%",h:"100%",...s.container};return r.jsx(Lr,{value:{styles:s,...u},children:r.jsx(Se.div,{className:on("ui-resizable",o),__css:d,...z({},l),children:r.jsx(Ut,{...x(),children:a})})})}),Dr=new Set(["order"]),_r=Se(Wt,{disableStyleProp:e=>Dr.has(e)}),f=an(({className:e,children:n,innerRef:t,w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:x,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j,...w},R)=>{const{styles:L}=pn(),{getPanelProps:A,getItemProps:$}=kr({ref:R,...w}),W={boxSize:"100%",...L.item};return r.jsx(_r,{...A({w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:x,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j}),children:r.jsx(Se.div,{className:on("ui-resizable__item",e),__css:W,...$({},t),children:n})})}),T=an(({className:e,icon:n,children:t,iconProps:s,...i},o)=>{const{styles:a}=pn(),{getTriggerProps:l,getIconProps:c}=Mr({ref:o,...i}),z={position:"relative",...a.trigger};return r.jsxs(Se.div,{as:Xt,className:on("ui-resizable__trigger",e),__css:z,...l(),children:[n?r.jsx(Se.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})}),os={title:"Components / Data Display / Resizable",component:E},Ee=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),We=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),Me=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),De=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),_e=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ae=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),Oe=()=>{const e=_.useRef(null),n=_.useRef(null),t=_.useRef(null),s=_.useRef(null),i=_.useRef(null);return _.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(f,{as:p,children:"Two"})]})},$e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(gn,{})}),r.jsx(f,{as:p,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,children:"Two"})]})]}),He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Bottom"})]})})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Right"})]})})]})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]})]}),Ge=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Fe=()=>{const[e,n]=zn(!0),[t,s]=zn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(f,{as:p,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,id:"two",children:"Two"})]}),r.jsxs(jt,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{as:p,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(f,{as:p,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(f,{as:p,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Ke=()=>{const e=_.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(f,{as:p,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,id:"two",children:"Two"})]})},Ve=()=>{const e=_.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(jt,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:p,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]})};var Tn,En,Ln;Ee.parameters={...Ee.parameters,docs:{...(Tn=Ee.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Ln=(En=Ee.parameters)==null?void 0:En.docs)==null?void 0:Ln.source}}};var Wn,kn,Mn;Le.parameters={...Le.parameters,docs:{...(Wn=Le.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(kn=Le.parameters)==null?void 0:kn.docs)==null?void 0:Mn.source}}};var Dn,_n,An;We.parameters={...We.parameters,docs:{...(Dn=We.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(An=(_n=We.parameters)==null?void 0:_n.docs)==null?void 0:An.source}}};var On,$n,Nn;ke.parameters={...ke.parameters,docs:{...(On=ke.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Nn=($n=ke.parameters)==null?void 0:$n.docs)==null?void 0:Nn.source}}};var Hn,Bn,Gn;Me.parameters={...Me.parameters,docs:{...(Hn=Me.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Gn=(Bn=Me.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.source}}};var Fn,Kn,Vn;De.parameters={...De.parameters,docs:{...(Fn=De.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=De.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var qn,Un,Xn;_e.parameters={..._e.parameters,docs:{...(qn=_e.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Xn=(Un=_e.parameters)==null?void 0:Un.docs)==null?void 0:Xn.source}}};var Jn,Yn,Zn;Ae.parameters={...Ae.parameters,docs:{...(Jn=Ae.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=Ae.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var Qn,et,nt;Oe.parameters={...Oe.parameters,docs:{...(Qn=Oe.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=Oe.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,st;$e.parameters={...$e.parameters,docs:{...(tt=$e.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(st=(rt=$e.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,it,at;Ne.parameters={...Ne.parameters,docs:{...(ot=Ne.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(at=(it=Ne.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;He.parameters={...He.parameters,docs:{...(lt=He.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=He.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Be.parameters={...Be.parameters,docs:{...(ut=Be.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(ft=(mt=Be.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var pt,ht,zt;Ge.parameters={...Ge.parameters,docs:{...(pt=Ge.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(zt=(ht=Ge.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,xt;Fe.parameters={...Fe.parameters,docs:{...(bt=Fe.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(xt=(gt=Fe.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var Rt,It,yt;Ke.parameters={...Ke.parameters,docs:{...(Rt=Ke.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(yt=(It=Ke.parameters)==null?void 0:It.docs)==null?void 0:yt.source}}};var St,wt,vt;Ve.parameters={...Ve.parameters,docs:{...(St=Ve.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
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
}`,...(vt=(wt=Ve.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};const is=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{is as __namedExportsOrder,Ee as basic,Ve as customControls,Ne as customIcon,os as default,Be as isDisabled,He as nestedResizable,Ke as useCookieStorage,Fe as useLocaleStorage,Ge as useOnResize,Ae as withCollapsible,We as withColorScheme,Me as withDefaultSize,ke as withDirection,$e as withIcon,_e as withKeyboardStep,De as withMinMaxSize,Oe as withRefs,Le as withVariant};
