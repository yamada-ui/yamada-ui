import{j as i,a as g,F as Z}from"./jsx-runtime-2xDJh5tt.js";import{I as fn,z as pn}from"./fontawesome-icon-Dp0uKqnG.js";import{u as hn}from"./index-rYLD436_.js";import{a as yt,r as N}from"./index-CBqU2yxZ.js";import{a as Qt,h as er,M as zn,u as ye,c as rn}from"./factory-DLpD49Xl.js";import{f as on}from"./forward-ref-DuAegr0M.js";import{a as nr}from"./use-component-style-D9HuanlY.js";import{o as tr}from"./theme-provider-DXhTM26K.js";import{b as rr}from"./icon-D30_Pagv.js";import{C as f}from"./center-D93uFMhv.js";import{W as St}from"./flex-Bo1Lb4L5.js";import{B as he}from"./button-DQ4BMoEA.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CpntKjHS.js";import"./use-ripple-Df_aFKka.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CIylrsRE.js";import"./loading-De1VEe6t.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";const{createElement:be,createContext:or,createRef:co,forwardRef:vt,useCallback:U,useContext:wt,useEffect:de,useImperativeHandle:Pt,useLayoutEffect:ir,useMemo:sr,useRef:V,useState:Ce}=yt,bn=yt.useId,ar=ir,Ze=or(null);Ze.displayName="PanelGroupContext";const ue=ar,lr=typeof bn=="function"?bn:()=>null;let cr=0;function sn(e=null){const n=lr(),t=V(e||n||null);return t.current===null&&(t.current=""+cr++),e??t.current}function Tt({children:e,className:n="",collapsedSize:t,collapsible:r,defaultSize:s,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:R,onResize:u,order:d,style:h,tagName:b="div",...T}){const y=wt(Ze);if(y===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:x,expandPanel:M,getPanelSize:D,getPanelStyle:O,groupId:k,isPanelCollapsed:v,reevaluatePanelConstraints:ne,registerPanel:X,resizePanel:J,unregisterPanel:re}=y,Y=sn(a),A=V({callbacks:{onCollapse:z,onExpand:R,onResize:u},constraints:{collapsedSize:t,collapsible:r,defaultSize:s,maxSize:l,minSize:c},id:Y,idIsFromProps:a!==void 0,order:d});V({didLogMissingDefaultSizeWarning:!1}),ue(()=>{const{callbacks:K,constraints:H}=A.current,Q={...H};A.current.id=Y,A.current.idIsFromProps=a!==void 0,A.current.order=d,K.onCollapse=z,K.onExpand=R,K.onResize=u,H.collapsedSize=t,H.collapsible=r,H.defaultSize=s,H.maxSize=l,H.minSize=c,(Q.collapsedSize!==H.collapsedSize||Q.collapsible!==H.collapsible||Q.maxSize!==H.maxSize||Q.minSize!==H.minSize)&&ne(A.current,Q)}),ue(()=>{const K=A.current;return X(K),()=>{re(K)}},[d,Y,X,re]),Pt(o,()=>({collapse:()=>{x(A.current)},expand:()=>{M(A.current)},getId(){return Y},getSize(){return D(A.current)},isCollapsed(){return v(A.current)},isExpanded(){return!v(A.current)},resize:K=>{J(A.current,K)}}),[x,M,D,v,Y,J]);const te=O(A.current,s);return be(b,{...T,children:e,className:n,id:a,style:{...te,...h},"data-panel":"","data-panel-collapsible":r||void 0,"data-panel-group-id":k,"data-panel-id":Y,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Et=vt((e,n)=>be(Tt,{...e,forwardedRef:n}));Tt.displayName="Panel";Et.displayName="forwardRef(Panel)";let tn=null,ce=null;function dr(e,n){if(n){const t=(n&Dt)!==0,r=(n&_t)!==0,s=(n&At)!==0,o=(n&$t)!==0;if(t)return s?"se-resize":o?"ne-resize":"e-resize";if(r)return s?"sw-resize":o?"nw-resize":"w-resize";if(s)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function ur(){ce!==null&&(document.head.removeChild(ce),tn=null,ce=null)}function en(e,n){const t=dr(e,n);tn!==t&&(tn=t,ce===null&&(ce=document.createElement("style"),document.head.appendChild(ce)),ce.innerHTML=`*{cursor: ${t}!important;}`)}function Lt(e){return e.type==="keydown"}function Wt(e){return e.type.startsWith("mouse")}function kt(e){return e.type.startsWith("touch")}function je(e){if(Wt(e))return{x:e.clientX,y:e.clientY};if(kt(e)){const n=e.touches[0];if(n&&n.clientX&&n.clientY)return{x:n.clientX,y:n.clientY}}return{x:1/0,y:1/0}}function mr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function fr(e,n,t){return t?e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y:e.x<=n.x+n.width&&e.x+e.width>=n.x&&e.y<=n.y+n.height&&e.y+e.height>=n.y}function pr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:xn(e),b:xn(n)};let r;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),r=e;P(r,"Stacking order can only be calculated for elements with a common ancestor");const s={a:Rn(gn(t.a)),b:Rn(gn(t.b))};if(s.a===s.b){const o=r.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(s.a-s.b)}const hr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function zr(e){var n;const t=getComputedStyle((n=Mt(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function br(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||zr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||hr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function gn(e){let n=e.length;for(;n--;){const t=e[n];if(P(t,"Missing node"),br(t))return t}return null}function Rn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function xn(e){const n=[];for(;e;)n.push(e),e=Mt(e);return n}function Mt(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Dt=1,_t=2,At=4,$t=8,gr=mr()==="coarse";let ae=[],Je=!1,se=new Map,Ye=new Map;const Se=new Set;function Rr(e,n,t,r,s){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:r,setResizeHandlerState:s},c=(o=se.get(a))!==null&&o!==void 0?o:0;return se.set(a,c+1),Se.add(l),qe(),function(){var R;Ye.delete(e),Se.delete(l);const u=(R=se.get(a))!==null&&R!==void 0?R:1;se.set(a,u-1),qe(),u===1&&se.delete(a)}}function Ee(e){const{target:n}=e,{x:t,y:r}=je(e);Je=!0,an({target:n,x:t,y:r}),qe(),ae.length>0&&(ln("down",e),e.preventDefault())}function oe(e){const{x:n,y:t}=je(e);if(!Je){const{target:r}=e;an({target:r,x:n,y:t})}ln("move",e),Nt(),ae.length>0&&e.preventDefault()}function ie(e){const{target:n}=e,{x:t,y:r}=je(e);Ye.clear(),Je=!1,ae.length>0&&e.preventDefault(),ln("up",e),an({target:n,x:t,y:r}),Nt(),qe()}function an({target:e,x:n,y:t}){ae.splice(0);let r=null;e instanceof HTMLElement&&(r=e),Se.forEach(s=>{const{element:o,hitAreaMargins:a}=s,l=o.getBoundingClientRect(),{bottom:c,left:z,right:R,top:u}=l,d=gr?a.coarse:a.fine;if(n>=z-d&&n<=R+d&&t>=u-d&&t<=c+d){if(r!==null&&o!==r&&!o.contains(r)&&!r.contains(o)&&pr(r,o)>0){let b=r,T=!1;for(;b&&!b.contains(o);){if(fr(b.getBoundingClientRect(),l,!0)){T=!0;break}b=b.parentElement}if(T)return}ae.push(s)}})}function nn(e,n){Ye.set(e,n)}function Nt(){let e=!1,n=!1;ae.forEach(r=>{const{direction:s}=r;s==="horizontal"?e=!0:n=!0});let t=0;Ye.forEach(r=>{t|=r}),e&&n?en("intersection",t):e?en("horizontal",t):n?en("vertical",t):ur()}function qe(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",ie),t.removeEventListener("mousedown",Ee),t.removeEventListener("mouseleave",oe),t.removeEventListener("mousemove",oe),t.removeEventListener("touchmove",oe),t.removeEventListener("touchstart",Ee)}),window.removeEventListener("mouseup",ie),window.removeEventListener("touchcancel",ie),window.removeEventListener("touchend",ie),Se.size>0&&(Je?(ae.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",ie),t.addEventListener("mouseleave",oe),t.addEventListener("mousemove",oe),t.addEventListener("touchmove",oe,{passive:!1}))}),window.addEventListener("mouseup",ie),window.addEventListener("touchcancel",ie),window.addEventListener("touchend",ie)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("mousedown",Ee),t.addEventListener("mousemove",oe),t.addEventListener("touchmove",oe,{passive:!1}),t.addEventListener("touchstart",Ee))}))}function ln(e,n){Se.forEach(t=>{const{setResizeHandlerState:r}=t,s=ae.includes(t);r(e,s,n)})}function P(e,n){if(!e)throw console.error(n),Error(n)}const Ot=10;function ve(e,n,t=Ot){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const r=e-n;return r===0?0:r>0?1:-1}function q(e,n,t){return ve(e,n,t)===0}function xr(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){const s=e[r],o=n[r];if(!q(s,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const r=e[n];P(r!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:s=0,collapsible:o,maxSize:a=100,minSize:l=0}=r;if(ve(t,l)<0)if(o){const c=(s+l)/2;ve(t,c)<0?t=s:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(Ot)),t}function xe({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:r,prevLayout:s,trigger:o}){if(q(e,0))return n;const a=[...n],[l,c]=r;P(l!=null,"Invalid first pivot index"),P(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const u=e<0?c:l,d=t[u];P(d,`Panel constraints not found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:T=0}=d;if(b){const y=n[u];if(P(y!=null,`Previous layout not found for panel index ${u}`),q(y,h)){const x=T-y;ve(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}{const u=e<0?l:c,d=t[u];P(d,`No panel constraints found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:T=0}=d;if(b){const y=n[u];if(P(y!=null,`Previous layout not found for panel index ${u}`),q(y,T)){const x=y-h;ve(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}}{const u=e<0?1:-1;let d=e<0?c:l,h=0;for(;;){const T=n[d];P(T!=null,`Previous layout not found for panel index ${d}`);const x=ze({panelConstraints:t,panelIndex:d,size:100})-T;if(h+=x,d+=u,d<0||d>=t.length)break}const b=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-b:b}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const h=Math.abs(e)-Math.abs(z),b=n[d];P(b!=null,`Previous layout not found for panel index ${d}`);const T=b-h,y=ze({panelConstraints:t,panelIndex:d,size:T});if(!q(b,y)&&(z+=b-y,a[d]=y,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(xr(s,a))return s;{const u=e<0?c:l,d=n[u];P(d!=null,`Previous layout not found for panel index ${u}`);const h=d+z,b=ze({panelConstraints:t,panelIndex:u,size:h});if(a[u]=b,!q(b,h)){let T=h-b,x=e<0?c:l;for(;x>=0&&x<t.length;){const M=a[x];P(M!=null,`Previous layout not found for panel index ${x}`);const D=M+T,O=ze({panelConstraints:t,panelIndex:x,size:D});if(q(M,O)||(T-=O-M,a[x]=O),q(T,0))break;e>0?x--:x++}}}const R=a.reduce((u,d)=>d+u,0);return q(R,100)?a:s}function Ir({layout:e,panelsArray:n,pivotIndices:t}){let r=0,s=100,o=0,a=0;const l=t[0];P(l!=null,"No pivot index found"),n.forEach((u,d)=>{const{constraints:h}=u,{maxSize:b=100,minSize:T=0}=h;d===l?(r=T,s=b):(o+=T,a+=b)});const c=Math.min(s,100-o),z=Math.max(r,100-a),R=e[l];return{valueMax:c,valueMin:z,valueNow:R}}function we(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Ht(e,n,t=document){const s=we(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return s??null}function Bt(e,n,t){const r=Ht(e,n,t);return r!=null?[r,r+1]:[-1,-1]}function cn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const r=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Cr(e,n,t,r=document){var s,o,a,l;const c=Pe(n,r),z=we(e,r),R=c?z.indexOf(c):-1,u=(s=(o=t[R])===null||o===void 0?void 0:o.id)!==null&&s!==void 0?s:null,d=(a=(l=t[R+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[u,d]}function yr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:r,panelDataArray:s,panelGroupElement:o,setLayout:a}){V({didWarnAboutMissingResizeHandle:!1}),ue(()=>{if(!o)return;const l=we(t,o);for(let c=0;c<s.length-1;c++){const{valueMax:z,valueMin:R,valueNow:u}=Ir({layout:r,panelsArray:s,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const h=s[c];P(h,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",h.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(R)),d.setAttribute("aria-valuenow",u!=null?""+Math.round(u):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,r,s,o]),de(()=>{if(!o)return;const l=n.current;P(l,"Eager values not found");const{panelDataArray:c}=l,z=cn(t,o);P(z!=null,`No group found for id "${t}"`);const R=we(t,o);P(R,`No resize handles found for group id "${t}"`);const u=R.map(d=>{const h=d.getAttribute("data-panel-resize-handle-id");P(h,"Resize handle element has no handle id attribute");const[b,T]=Cr(t,h,c,o);if(b==null||T==null)return()=>{};const y=x=>{if(!x.defaultPrevented)switch(x.key){case"Enter":{x.preventDefault();const M=c.findIndex(D=>D.id===b);if(M>=0){const D=c[M];P(D,`No panel data found for index ${M}`);const O=r[M],{collapsedSize:k=0,collapsible:v,minSize:ne=0}=D.constraints;if(O!=null&&v){const X=xe({delta:q(O,k)?ne-k:k-O,initialLayout:r,panelConstraints:c.map(J=>J.constraints),pivotIndices:Bt(t,h,o),prevLayout:r,trigger:"keyboard"});r!==X&&a(X)}}break}}};return d.addEventListener("keydown",y),()=>{d.removeEventListener("keydown",y)}});return()=>{u.forEach(d=>d())}},[o,e,n,t,r,s,a])}function In(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Gt(e,n){const t=e==="horizontal",{x:r,y:s}=je(n);return t?r:s}function Sr(e,n,t,r,s){const o=t==="horizontal",a=Pe(n,s);P(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");P(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=r;const z=Gt(t,e),R=cn(l,s);P(R,`No group element found for id "${l}"`);const u=R.getBoundingClientRect(),d=o?u.width:u.height;return(z-c)/d*100}function vr(e,n,t,r,s,o){if(Lt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:s!=null?l=s:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return r==null?0:Sr(e,n,t,r,o)}function wr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let r=0,s=100;for(let o=0;o<e.length;o++){const a=t[o];P(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(r++,n[o]=l,s-=l)}for(let o=0;o<e.length;o++){const a=t[o];P(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-r,z=s/c;r++,n[o]=z,s-=z}return n}function fe(e,n,t){n.forEach((r,s)=>{const o=e[s];P(o,`Panel data not found for index ${s}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:R}=l,u=t[c];if(u==null||r!==u){t[c]=r;const{onCollapse:d,onExpand:h,onResize:b}=a;b&&b(r,u),R&&(d||h)&&(h&&(u==null||u===z)&&r!==z&&h(),d&&(u==null||u!==z)&&r===z&&d())}})}function Le(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Pr({defaultSize:e,dragState:n,layout:t,panelData:r,panelIndex:s,precision:o=3}){const a=t[s];let l;return a==null?l=e!=null?e.toPrecision(o):"1":r.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Tr(e,n=10){let t=null;return(...s)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...s)},n)}}function Cn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Kt(e){return`react-resizable-panels:${e}`}function Ft(e){return e.map(n=>{const{constraints:t,id:r,idIsFromProps:s,order:o}=n;return s?r:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Vt(e,n){try{const t=Kt(e),r=n.getItem(t);if(r){const s=JSON.parse(r);if(typeof s=="object"&&s!=null)return s}}catch{}return null}function Er(e,n,t){var r,s;const o=(r=Vt(e,t))!==null&&r!==void 0?r:{},a=Ft(n);return(s=o[a])!==null&&s!==void 0?s:null}function Lr(e,n,t,r,s){var o;const a=Kt(e),l=Ft(n),c=(o=Vt(e,s))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:r};try{s.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function yn({layout:e,panelConstraints:n}){const t=[...e],r=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!q(r,100))for(let o=0;o<n.length;o++){const a=t[o];P(a!=null,`No layout data found for index ${o}`);const l=100/r*a;t[o]=l}let s=0;for(let o=0;o<n.length;o++){const a=t[o];P(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(s+=a-l,t[o]=l)}if(!q(s,0))for(let o=0;o<n.length;o++){const a=t[o];P(a!=null,`No layout data found for index ${o}`);const l=a+s,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(s-=c-a,t[o]=c,q(s,0)))break}return t}const Wr=100,Ie={getItem:e=>(Cn(Ie),Ie.getItem(e)),setItem:(e,n)=>{Cn(Ie),Ie.setItem(e,n)}},Sn={};function Xt({autoSaveId:e=null,children:n,className:t="",direction:r,forwardedRef:s,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:z,tagName:R="div",...u}){const d=sn(o),h=V(null),[b,T]=Ce(null),[y,x]=Ce([]),M=V({}),D=V(new Map),O=V(0),k=V({autoSaveId:e,direction:r,dragState:b,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),v=V({layout:y,panelDataArray:[],panelDataArrayChanged:!1});V({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Pt(s,()=>({getId:()=>k.current.id,getLayout:()=>{const{layout:p}=v.current;return p},setLayout:p=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:C}=v.current,w=yn({layout:p,panelConstraints:C.map(E=>E.constraints)});In(I,w)||(x(w),v.current.layout=w,S&&S(w),fe(C,w,M.current))}}),[]),ue(()=>{k.current.autoSaveId=e,k.current.direction=r,k.current.dragState=b,k.current.id=d,k.current.onLayout=a,k.current.storage=c}),yr({committedValuesRef:k,eagerValuesRef:v,groupId:d,layout:y,panelDataArray:v.current.panelDataArray,setLayout:x,panelGroupElement:h.current}),de(()=>{const{panelDataArray:p}=v.current;if(e){if(y.length===0||y.length!==p.length)return;let S=Sn[e];S==null&&(S=Tr(Lr,Wr),Sn[e]=S);const I=[...p],C=new Map(D.current);S(e,I,C,y,c)}},[e,y,c]),de(()=>{});const ne=U(p=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:C}=v.current;if(p.constraints.collapsible){const w=C.map(j=>j.constraints),{collapsedSize:E=0,panelSize:_,pivotIndices:B}=le(C,p,I);if(P(_!=null,`Panel size not found for panel "${p.id}"`),_!==E){D.current.set(p.id,_);const G=pe(C,p)===C.length-1?_-E:E-_,$=xe({delta:G,initialLayout:I,panelConstraints:w,pivotIndices:B,prevLayout:I,trigger:"imperative-api"});Le(I,$)||(x($),v.current.layout=$,S&&S($),fe(C,$,M.current))}}},[]),X=U(p=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:C}=v.current;if(p.constraints.collapsible){const w=C.map(G=>G.constraints),{collapsedSize:E=0,panelSize:_,minSize:B=0,pivotIndices:j}=le(C,p,I);if(_===E){const G=D.current.get(p.id),$=G!=null&&G>=B?G:B,Qe=pe(C,p)===C.length-1?_-$:$-_,F=xe({delta:Qe,initialLayout:I,panelConstraints:w,pivotIndices:j,prevLayout:I,trigger:"imperative-api"});Le(I,F)||(x(F),v.current.layout=F,S&&S(F),fe(C,F,M.current))}}},[]),J=U(p=>{const{layout:S,panelDataArray:I}=v.current,{panelSize:C}=le(I,p,S);return P(C!=null,`Panel size not found for panel "${p.id}"`),C},[]),re=U((p,S)=>{const{panelDataArray:I}=v.current,C=pe(I,p);return Pr({defaultSize:S,dragState:b,layout:y,panelData:I,panelIndex:C})},[b,y]),Y=U(p=>{const{layout:S,panelDataArray:I}=v.current,{collapsedSize:C=0,collapsible:w,panelSize:E}=le(I,p,S);return w===!0&&E===C},[]),A=U(p=>{const{layout:S,panelDataArray:I}=v.current,{collapsedSize:C=0,collapsible:w,panelSize:E}=le(I,p,S);return P(E!=null,`Panel size not found for panel "${p.id}"`),!w||E>C},[]),te=U(p=>{const{panelDataArray:S}=v.current;S.push(p),S.sort((I,C)=>{const w=I.order,E=C.order;return w==null&&E==null?0:w==null?-1:E==null?1:w-E}),v.current.panelDataArrayChanged=!0},[]);ue(()=>{if(v.current.panelDataArrayChanged){v.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:S,storage:I}=k.current,{layout:C,panelDataArray:w}=v.current;let E=null;if(p){const B=Er(p,w,I);B&&(D.current=new Map(Object.entries(B.expandToSizes)),E=B.layout)}E==null&&(E=wr({panelDataArray:w}));const _=yn({layout:E,panelConstraints:w.map(B=>B.constraints)});In(C,_)||(x(_),v.current.layout=_,S&&S(_),fe(w,_,M.current))}}),ue(()=>{const p=v.current;return()=>{p.layout=[]}},[]);const K=U(p=>function(I){I.preventDefault();const C=h.current;if(!C)return()=>null;const{direction:w,dragState:E,id:_,keyboardResizeBy:B,onLayout:j}=k.current,{layout:G,panelDataArray:$}=v.current,{initialLayout:me}=E??{},Qe=Bt(_,p,C);let F=vr(I,p,w,E,B,C);if(F===0)return;const un=w==="horizontal";document.dir==="rtl"&&un&&(F=-F);const Jt=$.map(Yt=>Yt.constraints),Re=xe({delta:F,initialLayout:me??G,panelConstraints:Jt,pivotIndices:Qe,prevLayout:G,trigger:Lt(I)?"keyboard":"mouse-or-touch"}),mn=!Le(G,Re);(Wt(I)||kt(I))&&O.current!=F&&(O.current=F,mn?nn(p,0):un?nn(p,F<0?Dt:_t):nn(p,F<0?At:$t)),mn&&(x(Re),v.current.layout=Re,j&&j(Re),fe($,Re,M.current))},[]),H=U((p,S)=>{const{onLayout:I}=k.current,{layout:C,panelDataArray:w}=v.current,E=w.map(me=>me.constraints),{panelSize:_,pivotIndices:B}=le(w,p,C);P(_!=null,`Panel size not found for panel "${p.id}"`);const G=pe(w,p)===w.length-1?_-S:S-_,$=xe({delta:G,initialLayout:C,panelConstraints:E,pivotIndices:B,prevLayout:C,trigger:"imperative-api"});Le(C,$)||(x($),v.current.layout=$,I&&I($),fe(w,$,M.current))},[]),Q=U((p,S)=>{const{layout:I,panelDataArray:C}=v.current,{collapsedSize:w=0,collapsible:E}=S,{collapsedSize:_=0,collapsible:B,maxSize:j=100,minSize:G=0}=p.constraints,{panelSize:$}=le(C,p,I);$!=null&&(E&&B&&$===w?w!==_&&H(p,_):$<G?H(p,G):$>j&&H(p,j))},[H]),Te=U((p,S)=>{const{direction:I}=k.current,{layout:C}=v.current;if(!h.current)return;const w=Pe(p,h.current);P(w,`Drag handle element not found for id "${p}"`);const E=Gt(I,S);T({dragHandleId:p,dragHandleRect:w.getBoundingClientRect(),initialCursorPosition:E,initialLayout:C})},[]),ge=U(()=>{T(null)},[]),ee=U(p=>{const{panelDataArray:S}=v.current,I=pe(S,p);I>=0&&(S.splice(I,1),delete M.current[p.id],v.current.panelDataArrayChanged=!0)},[]),Zt=sr(()=>({collapsePanel:ne,direction:r,dragState:b,expandPanel:X,getPanelSize:J,getPanelStyle:re,groupId:d,isPanelCollapsed:Y,isPanelExpanded:A,reevaluatePanelConstraints:Q,registerPanel:te,registerResizeHandle:K,resizePanel:H,startDragging:Te,stopDragging:ge,unregisterPanel:ee,panelGroupElement:h.current}),[ne,b,r,X,J,re,d,Y,A,Q,te,K,H,Te,ge,ee]),jt={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return be(Ze.Provider,{value:Zt},be(R,{...u,children:n,className:t,id:o,ref:h,style:{...jt,...z},"data-panel-group":"","data-panel-group-direction":r,"data-panel-group-id":d}))}const Ut=vt((e,n)=>be(Xt,{...e,forwardedRef:n}));Xt.displayName="PanelGroup";Ut.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function le(e,n,t){const r=pe(e,n),o=r===e.length-1?[r-1,r]:[r,r+1],a=t[r];return{...n.constraints,panelSize:a,pivotIndices:o}}function kr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:r}){de(()=>{if(e||t==null||r==null)return;const s=Pe(n,r);if(s==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=s.getAttribute("data-panel-group-id");P(l,`No group element found for id "${l}"`);const c=we(l,r),z=Ht(l,n,r);P(z!==null,`No resize element found for id "${n}"`);const R=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[R].focus();break}}};return s.addEventListener("keydown",o),()=>{s.removeEventListener("keydown",o)}},[r,e,n,t])}function qt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:r,id:s,onDragging:o,style:a={},tabIndex:l=0,tagName:c="div",...z}){const R=V(null),u=V({onDragging:o});de(()=>{u.current.onDragging=o});const d=wt(Ze);if(d===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:h,groupId:b,registerResizeHandle:T,startDragging:y,stopDragging:x,panelGroupElement:M}=d,D=sn(s),[O,k]=Ce("inactive"),[v,ne]=Ce(!1),[X,J]=Ce(null),re=V({state:O});return ue(()=>{re.current.state=O}),de(()=>{if(t)J(null);else{const A=T(D);J(()=>A)}},[t,D,T]),de(()=>{var A,te;if(t||X==null)return;const K=R.current;P(K,"Element ref not attached");const H=(Q,Te,ge)=>{if(Te)switch(Q){case"down":{k("drag"),y(D,ge);const{onDragging:ee}=u.current;ee&&ee(!0);break}case"move":{const{state:ee}=re.current;ee!=="drag"&&k("hover"),X(ge);break}case"up":{k("hover"),x();const{onDragging:ee}=u.current;ee&&ee(!1);break}}else k("inactive")};return Rr(D,K,h,{coarse:(A=r==null?void 0:r.coarse)!==null&&A!==void 0?A:15,fine:(te=r==null?void 0:r.fine)!==null&&te!==void 0?te:5},H)},[h,t,r,T,D,X,y,x]),kr({disabled:t,handleId:D,resizeHandler:X,panelGroupElement:M}),be(c,{...z,children:e,className:n,id:s,onBlur:()=>ne(!1),onFocus:()=>ne(!0),ref:R,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":h,"data-panel-group-id":b,"data-resize-handle":"","data-resize-handle-active":O==="drag"?"pointer":v?"keyboard":void 0,"data-resize-handle-state":O,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":D})}qt.displayName="PanelResizeHandle";function Mr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Dr,dn]=Qt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),_r=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:r,isDisabled:s=!1,onLayout:o,storage:a,ref:l,groupProps:c,...z})=>{e??(e=N.useId());const R=N.useCallback((d={},h=null)=>({...d,ref:h,...z}),[z]),u=N.useCallback((d={})=>{const{as:h,...b}=c??{};return{...d,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:r,onLayout:o,storage:a,...b}},[e,n,c,t,r,o,a]);return N.useEffect(()=>{if(!e)return;const d=cn(e);l&&(l.current=d)},[l,e]),{isDisabled:s,getContainerProps:R,getGroupProps:u}},Ar=({id:e,ref:n,collapsedSize:t,collapsible:r,defaultSize:s,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:R,controlRef:u,containerProps:d,...h})=>{e??(e=N.useId());const b=N.useCallback((y={})=>{const{as:x,...M}=d??{};return{...y,ref:u,id:e,tagName:x,collapsible:r,defaultSize:s,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:R,...M}},[e,u,d,t,r,s,o,a,l,c,z,R]),T=N.useCallback((y={},x=null)=>({...y,ref:x,...h}),[h]);return N.useEffect(()=>{if(!e)return;const y=Mr(e);n&&(n.current=y)},[n,e]),{getPanelProps:b,getItemProps:T}},$r=({id:e,ref:n,as:t,disabled:r,isDisabled:s,onDragging:o,...a})=>{e??(e=N.useId());const{isDisabled:l}=dn(),[c,z]=N.useState(!1),R=r||s||l,u=N.useCallback((h={})=>({...h,id:e,tagName:t,disabled:R,onDragging:er(o,b=>z(b)),...a,"data-active":zn(c),style:{...h.style,...a.style,...R?{cursor:"default"}:{}}}),[e,t,R,o,a,c]),d=N.useCallback((h={},b=null)=>({...h,ref:b,"data-active":zn(c)}),[c]);return N.useEffect(()=>{if(!e)return;const h=Pe(e);n&&(n.current=h)},[n,e]),{getTriggerProps:u,getIconProps:d}},W=on(({direction:e="horizontal",...n},t)=>{const[r,s]=nr("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=tr(s),{getContainerProps:z,getGroupProps:R,...u}=_r({ref:t,...c}),d={w:"100%",h:"100%",...r.container};return i(Dr,{value:{styles:r,...u},children:i(ye.div,{className:rn("ui-resizable",o),__css:d,...z({},l),children:i(Ut,{...R(),children:a})})})}),Nr=new Set(["order"]),Or=ye(Et,{disableStyleProp:e=>Nr.has(e)}),m=on(({className:e,children:n,innerRef:t,w:r,width:s,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:R,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:T,...y},x)=>{const{styles:M}=dn(),{getPanelProps:D,getItemProps:O}=Ar({ref:x,...y}),k={boxSize:"100%",...M.item};return i(Or,{...D({w:r,width:s,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:R,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:T}),children:i(ye.div,{className:rn("ui-resizable__item",e),__css:k,...O({},t),children:n})})}),L=on(({className:e,icon:n,children:t,iconProps:r,...s},o)=>{const{styles:a}=dn(),{getTriggerProps:l,getIconProps:c}=$r({ref:o,...s}),z={position:"relative",...a.trigger};return g(ye.div,{as:qt,className:rn("ui-resizable__trigger",e),__css:z,...l(),children:[n?i(ye.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(r),children:n}):null,t]})}),vn=e=>g(rr,{viewBox:"0 0 23 39",w:"0.5rem",h:"1rem",...e,children:[i("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),i("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),i("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),i("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),i("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),i("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),uo={title:"Components / Data Display / Resizable",component:W},We=()=>g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),ke=()=>g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),g(W,{variant:"spacer",h:"md",children:[i(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),i(L,{}),i(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),g(W,{variant:"unstyled",h:"md",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]})]}),Me=()=>g(Z,{children:[g(W,{variant:"spacer",colorScheme:"primary",h:"md",children:[i(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),i(L,{}),i(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),g(W,{variant:"spacer",colorScheme:"red",h:"md",children:[i(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),i(L,{}),i(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),De=()=>g(Z,{children:[g(W,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),g(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]})]}),_e=()=>g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,defaultSize:30,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),Ae=()=>g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,minSize:30,maxSize:70,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),$e=()=>g(W,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),Ne=()=>g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),g(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]})]}),Oe=()=>{const e=N.useRef(null),n=N.useRef(null),t=N.useRef(null),r=N.useRef(null),s=N.useRef(null);return N.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",r),console.log("Trigger ref",s)},[]),g(W,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,ref:t,innerRef:r,children:"One"}),i(L,{ref:s}),i(m,{as:f,children:"Two"})]})},He=()=>g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{icon:i(vn,{})}),i(m,{as:f,children:"Two"})]}),g(W,{direction:"vertical",variant:"spacer",h:"md",children:[i(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),i(L,{icon:i(vn,{})}),i(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Be=()=>g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{icon:i(fn,{icon:pn})}),i(m,{as:f,children:"Two"})]}),g(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{icon:i(fn,{icon:pn})}),i(m,{as:f,children:"Two"})]})]}),Ge=()=>g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"Left"}),i(L,{}),i(m,{children:g(W,{direction:"vertical",children:[i(m,{as:f,children:"Top"}),i(L,{}),i(m,{as:f,children:"Bottom"})]})})]}),g(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"Top"}),i(L,{}),i(m,{children:g(W,{children:[i(m,{as:f,children:"Left"}),i(L,{}),i(m,{as:f,children:"Right"})]})})]})]}),Ke=()=>g(Z,{children:[g(W,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"}),i(L,{}),i(m,{as:f,children:"Three"})]}),g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,children:"One"}),i(L,{isDisabled:!0}),i(m,{as:f,children:"Two"}),i(L,{}),i(m,{as:f,children:"Three"})]})]}),Fe=()=>g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]}),Ve=()=>{const[e,n]=hn(!0),[t,r]=hn(!0);return g(Z,{children:[g(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[i(m,{as:f,id:"one",children:"One"}),i(L,{}),i(m,{as:f,id:"two",children:"Two"})]}),g(St,{gap:"md",children:[g(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),g(he,{onClick:r.toggle,children:[t?"Hidden":"Show"," Right"]})]}),g(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?g(Z,{children:[i(m,{as:f,id:"left",minSize:10,order:1,children:"Left"}),i(L,{})]}):null,i(m,{as:f,id:"middle",minSize:10,order:2,children:"Middle"}),t?g(Z,{children:[i(L,{}),i(m,{as:f,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Xe=()=>{const e=N.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return g(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[i(m,{as:f,id:"one",children:"One"}),i(L,{}),i(m,{as:f,id:"two",children:"Two"})]})},Ue=()=>{const e=N.useRef(null);return g(Z,{children:[g(St,{gap:"md",children:[i(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),i(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),i(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),i(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),g(W,{h:"md",rounded:"md",borderWidth:"1px",children:[i(m,{as:f,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),i(L,{}),i(m,{as:f,children:"Two"})]})]})};var wn,Pn,Tn;We.parameters={...We.parameters,docs:{...(wn=We.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Tn=(Pn=We.parameters)==null?void 0:Pn.docs)==null?void 0:Tn.source}}};var En,Ln,Wn;ke.parameters={...ke.parameters,docs:{...(En=ke.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Ln=ke.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var kn,Mn,Dn;Me.parameters={...Me.parameters,docs:{...(kn=Me.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Mn=Me.parameters)==null?void 0:Mn.docs)==null?void 0:Dn.source}}};var _n,An,$n;De.parameters={...De.parameters,docs:{...(_n=De.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...($n=(An=De.parameters)==null?void 0:An.docs)==null?void 0:$n.source}}};var Nn,On,Hn;_e.parameters={..._e.parameters,docs:{...(Nn=_e.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Hn=(On=_e.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Bn,Gn,Kn;Ae.parameters={...Ae.parameters,docs:{...(Bn=Ae.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Kn=(Gn=Ae.parameters)==null?void 0:Gn.docs)==null?void 0:Kn.source}}};var Fn,Vn,Xn;$e.parameters={...$e.parameters,docs:{...(Fn=$e.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Xn=(Vn=$e.parameters)==null?void 0:Vn.docs)==null?void 0:Xn.source}}};var Un,qn,Zn;Ne.parameters={...Ne.parameters,docs:{...(Un=Ne.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Zn=(qn=Ne.parameters)==null?void 0:qn.docs)==null?void 0:Zn.source}}};var jn,Jn,Yn;Oe.parameters={...Oe.parameters,docs:{...(jn=Oe.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Jn=Oe.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Qn,et,nt;He.parameters={...He.parameters,docs:{...(Qn=He.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=He.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,ot;Be.parameters={...Be.parameters,docs:{...(tt=Be.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(ot=(rt=Be.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,st,at;Ge.parameters={...Ge.parameters,docs:{...(it=Ge.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
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
}`,...(at=(st=Ge.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var lt,ct,dt;Ke.parameters={...Ke.parameters,docs:{...(lt=Ke.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=Ke.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Fe.parameters={...Fe.parameters,docs:{...(ut=Fe.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(ft=(mt=Fe.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var pt,ht,zt;Ve.parameters={...Ve.parameters,docs:{...(pt=Ve.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
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
}`,...(zt=(ht=Ve.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,Rt;Xe.parameters={...Xe.parameters,docs:{...(bt=Xe.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(Rt=(gt=Xe.parameters)==null?void 0:gt.docs)==null?void 0:Rt.source}}};var xt,It,Ct;Ue.parameters={...Ue.parameters,docs:{...(xt=Ue.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
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
}`,...(Ct=(It=Ue.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};const mo=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{mo as __namedExportsOrder,We as basic,Ue as customControls,Be as customIcon,uo as default,Ke as isDisabled,Ge as nestedResizable,Xe as useCookieStorage,Ve as useLocaleStorage,Fe as useOnResize,Ne as withCollapsible,Me as withColorScheme,_e as withDefaultSize,De as withDirection,He as withIcon,$e as withKeyboardStep,Ae as withMinMaxSize,Oe as withRefs,ke as withVariant};
