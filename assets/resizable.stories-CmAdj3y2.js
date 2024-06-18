import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{I as hn,D as zn}from"./icon-BQcQed63.js";import{u as bn}from"./index-CBqzus2r.js";import{$ as vt,r as D}from"./index-uCp2LrAq.js";import{l as Yt,h as Qt,d as gn,b as ye,c as on}from"./factory-Bf0a1C4O.js";import{f as an}from"./forward-ref-Dr5Hqd9a.js";import{a as er}from"./use-component-style-C1oydc60.js";import{o as nr}from"./theme-provider-CfMKAtcZ.js";import{b as tr}from"./icon-BtMBNqBn.js";import{C as f}from"./center-CSFPO4u1.js";import{W as jt}from"./flex-BWicnFVx.js";import{B as he}from"./button-C5HSAH_Q.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-ZgcAASpW.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";const{createElement:be,createContext:rr,createRef:is,forwardRef:Pt,useCallback:G,useContext:Tt,useEffect:ce,useImperativeHandle:Et,useLayoutEffect:sr,useMemo:or,useRef:B,useState:Ce}=vt,xn=vt.useId,ir=sr,Je=rr(null);Je.displayName="PanelGroupContext";const de=ir,ar=typeof xn=="function"?xn:()=>null;let lr=0;function ln(e=null){const n=ar(),t=B(e||n||null);return t.current===null&&(t.current=""+lr++),e??t.current}function Lt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:g,onResize:u,order:d,style:h,tagName:b="div",...j}){const w=Tt(Je);if(w===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:x,expandPanel:W,getPanelSize:A,getPanelStyle:N,groupId:E,isPanelCollapsed:C,reevaluatePanelConstraints:U,registerPanel:J,resizePanel:Y,unregisterPanel:Q}=w,V=ln(a),$=B({callbacks:{onCollapse:z,onExpand:g,onResize:u},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:V,idIsFromProps:a!==void 0,order:d});B({didLogMissingDefaultSizeWarning:!1}),de(()=>{const{callbacks:H,constraints:_}=$.current,F={..._};$.current.id=V,$.current.idIsFromProps=a!==void 0,$.current.order=d,H.onCollapse=z,H.onExpand=g,H.onResize=u,_.collapsedSize=t,_.collapsible=s,_.defaultSize=i,_.maxSize=l,_.minSize=c,(F.collapsedSize!==_.collapsedSize||F.collapsible!==_.collapsible||F.maxSize!==_.maxSize||F.minSize!==_.minSize)&&U($.current,F)}),de(()=>{const H=$.current;return J(H),()=>{Q(H)}},[d,V,J,Q]),Et(o,()=>({collapse:()=>{x($.current)},expand:H=>{W($.current,H)},getId(){return V},getSize(){return A($.current)},isCollapsed(){return C($.current)},isExpanded(){return!C($.current)},resize:H=>{Y($.current,H)}}),[x,W,A,C,V,Y]);const re=N($.current,i);return be(b,{...j,children:e,className:n,id:a,style:{...re,...h},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":E,"data-panel-id":V,"data-panel-size":parseFloat(""+re.flexGrow).toFixed(1)})}const Wt=Pt((e,n)=>be(Lt,{...e,forwardedRef:n}));Lt.displayName="Panel";Wt.displayName="forwardRef(Panel)";let sn=null,le=null;function cr(e,n){if(n){const t=(n&$t)!==0,s=(n&_t)!==0,i=(n&Ot)!==0,o=(n&Nt)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function dr(){le!==null&&(document.head.removeChild(le),sn=null,le=null)}function tn(e,n){const t=cr(e,n);sn!==t&&(sn=t,le===null&&(le=document.createElement("style"),document.head.appendChild(le)),le.innerHTML=`*{cursor: ${t}!important;}`)}function kt(e){return e.type==="keydown"}function Mt(e){return e.type.startsWith("pointer")}function Dt(e){return e.type.startsWith("mouse")}function Ye(e){if(Mt(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Dt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function ur(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function mr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function fr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Cn(e),b:Cn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;v(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:In(Rn(t.a)),b:In(Rn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const pr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function hr(e){var n;const t=getComputedStyle((n=At(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function zr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||hr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||pr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Rn(e){let n=e.length;for(;n--;){const t=e[n];if(v(t,"Missing node"),zr(t))return t}return null}function In(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Cn(e){const n=[];for(;e;)n.push(e),e=At(e);return n}function At(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const $t=1,_t=2,Ot=4,Nt=8,br=ur()==="coarse";let oe=[],Qe=!1,se=new Map,en=new Map;const Se=new Set;function gr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=se.get(a))!==null&&o!==void 0?o:0;return se.set(a,c+1),Se.add(l),Ze(),function(){var g;en.delete(e),Se.delete(l);const u=(g=se.get(a))!==null&&g!==void 0?g:1;se.set(a,u-1),Ze(),u===1&&se.delete(a)}}function yn(e){const{target:n}=e,{x:t,y:s}=Ye(e);Qe=!0,cn({target:n,x:t,y:s}),Ze(),oe.length>0&&(dn("down",e),e.preventDefault(),e.stopPropagation())}function xe(e){const{x:n,y:t}=Ye(e);if(!Qe){const{target:s}=e;cn({target:s,x:n,y:t})}dn("move",e),Ht(),oe.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Ye(e);en.clear(),Qe=!1,oe.length>0&&e.preventDefault(),dn("up",e),cn({target:n,x:t,y:s}),Ht(),Ze()}function cn({target:e,x:n,y:t}){oe.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Se.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:z,right:g,top:u}=l,d=br?a.coarse:a.fine;if(n>=z-d&&n<=g+d&&t>=u-d&&t<=c+d){if(s!==null&&o!==s&&!o.contains(s)&&!s.contains(o)&&fr(s,o)>0){let b=s,j=!1;for(;b&&!b.contains(o);){if(mr(b.getBoundingClientRect(),l)){j=!0;break}b=b.parentElement}if(j)return}oe.push(i)}})}function rn(e,n){en.set(e,n)}function Ht(){let e=!1,n=!1;oe.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;en.forEach(s=>{t|=s}),e&&n?tn("intersection",t):e?tn("horizontal",t):n?tn("vertical",t):dr()}function Ze(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",yn),t.removeEventListener("pointerleave",xe),t.removeEventListener("pointermove",xe)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),Se.size>0&&(Qe?(oe.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",xe),t.addEventListener("pointermove",xe))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",yn,{capture:!0}),t.addEventListener("pointermove",xe))}))}function dn(e,n){Se.forEach(t=>{const{setResizeHandlerState:s}=t,i=oe.includes(t);s(e,i,n)})}function v(e,n){if(!e)throw console.error(n),Error(n)}const un=10;function ue(e,n,t=un){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function te(e,n,t=un){return ue(e,n,t)===0}function K(e,n,t){return ue(e,n,t)===0}function xr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!K(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];v(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ue(t,l)<0)if(o){const c=(i+l)/2;ue(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(un)),t}function Re({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(K(e,0))return n;const a=[...n],[l,c]=s;v(l!=null,"Invalid first pivot index"),v(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const u=e<0?c:l,d=t[u];v(d,`Panel constraints not found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const w=n[u];if(v(w!=null,`Previous layout not found for panel index ${u}`),K(w,h)){const x=j-w;ue(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}{const u=e<0?l:c,d=t[u];v(d,`No panel constraints found for index ${u}`);const{collapsedSize:h=0,collapsible:b,minSize:j=0}=d;if(b){const w=n[u];if(v(w!=null,`Previous layout not found for panel index ${u}`),K(w,j)){const x=w-h;ue(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}}{const u=e<0?1:-1;let d=e<0?c:l,h=0;for(;;){const j=n[d];v(j!=null,`Previous layout not found for panel index ${d}`);const x=ze({panelConstraints:t,panelIndex:d,size:100})-j;if(h+=x,d+=u,d<0||d>=t.length)break}const b=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-b:b}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const h=Math.abs(e)-Math.abs(z),b=n[d];v(b!=null,`Previous layout not found for panel index ${d}`);const j=b-h,w=ze({panelConstraints:t,panelIndex:d,size:j});if(!K(b,w)&&(z+=b-w,a[d]=w,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(xr(i,a))return i;{const u=e<0?c:l,d=n[u];v(d!=null,`Previous layout not found for panel index ${u}`);const h=d+z,b=ze({panelConstraints:t,panelIndex:u,size:h});if(a[u]=b,!K(b,h)){let j=h-b,x=e<0?c:l;for(;x>=0&&x<t.length;){const W=a[x];v(W!=null,`Previous layout not found for panel index ${x}`);const A=W+j,N=ze({panelConstraints:t,panelIndex:x,size:A});if(K(W,N)||(j-=N-W,a[x]=N),K(j,0))break;e>0?x--:x++}}}const g=a.reduce((u,d)=>d+u,0);return K(g,100)?a:i}function Rr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];v(l!=null,"No pivot index found"),n.forEach((u,d)=>{const{constraints:h}=u,{maxSize:b=100,minSize:j=0}=h;d===l?(s=j,i=b):(o+=j,a+=b)});const c=Math.min(i,100-o),z=Math.max(s,100-a),g=e[l];return{valueMax:c,valueMin:z,valueNow:g}}function we(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Bt(e,n,t=document){const i=we(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Ft(e,n,t){const s=Bt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function mn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function ve(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Ir(e,n,t,s=document){var i,o,a,l;const c=ve(n,s),z=we(e,s),g=c?z.indexOf(c):-1,u=(i=(o=t[g])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[g+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[u,d]}function Cr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){B({didWarnAboutMissingResizeHandle:!1}),de(()=>{if(!o)return;const l=we(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:z,valueMin:g,valueNow:u}=Rr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const h=i[c];v(h,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",h.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(g)),d.setAttribute("aria-valuenow",u!=null?""+Math.round(u):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),ce(()=>{if(!o)return;const l=n.current;v(l,"Eager values not found");const{panelDataArray:c}=l,z=mn(t,o);v(z!=null,`No group found for id "${t}"`);const g=we(t,o);v(g,`No resize handles found for group id "${t}"`);const u=g.map(d=>{const h=d.getAttribute("data-panel-resize-handle-id");v(h,"Resize handle element has no handle id attribute");const[b,j]=Ir(t,h,c,o);if(b==null||j==null)return()=>{};const w=x=>{if(!x.defaultPrevented)switch(x.key){case"Enter":{x.preventDefault();const W=c.findIndex(A=>A.id===b);if(W>=0){const A=c[W];v(A,`No panel data found for index ${W}`);const N=s[W],{collapsedSize:E=0,collapsible:C,minSize:U=0}=A.constraints;if(N!=null&&C){const J=Re({delta:K(N,E)?U-E:E-N,initialLayout:s,panelConstraints:c.map(Y=>Y.constraints),pivotIndices:Ft(t,h,o),prevLayout:s,trigger:"keyboard"});s!==J&&a(J)}}break}}};return d.addEventListener("keydown",w),()=>{d.removeEventListener("keydown",w)}});return()=>{u.forEach(d=>d())}},[o,e,n,t,s,i,a])}function Sn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Gt(e,n){const t=e==="horizontal",{x:s,y:i}=Ye(n);return t?s:i}function yr(e,n,t,s,i){const o=t==="horizontal",a=ve(n,i);v(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");v(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const z=Gt(t,e),g=mn(l,i);v(g,`No group element found for id "${l}"`);const u=g.getBoundingClientRect(),d=o?u.width:u.height;return(z-c)/d*100}function Sr(e,n,t,s,i,o){if(kt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:yr(e,n,t,s,o)}function wr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=i/c;s++,n[o]=z,i-=z}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];v(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:g}=l,u=t[c];if(u==null||s!==u){t[c]=s;const{onCollapse:d,onExpand:h,onResize:b}=a;b&&b(s,u),g&&(d||h)&&(h&&(u==null||te(u,z))&&!te(s,z)&&h(),d&&(u==null||!te(u,z))&&te(s,z)&&d())}})}function We(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function vr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function jr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function wn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Kt(e){return`react-resizable-panels:${e}`}function Vt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function qt(e,n){try{const t=Kt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Pr(e,n,t){var s,i;const o=(s=qt(e,t))!==null&&s!==void 0?s:{},a=Vt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Tr(e,n,t,s,i){var o;const a=Kt(e),l=Vt(n),c=(o=qt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function vn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!K(s,100))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!K(i,0))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,K(i,0)))break}return t}const Er=100,Ie={getItem:e=>(wn(Ie),Ie.getItem(e)),setItem:(e,n)=>{wn(Ie),Ie.setItem(e,n)}},jn={};function Ut({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:z,tagName:g="div",...u}){const d=ln(o),h=B(null),[b,j]=Ce(null),[w,x]=Ce([]),W=B({}),A=B(new Map),N=B(0),E=B({autoSaveId:e,direction:s,dragState:b,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),C=B({layout:w,panelDataArray:[],panelDataArrayChanged:!1});B({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Et(i,()=>({getId:()=>E.current.id,getLayout:()=>{const{layout:p}=C.current;return p},setLayout:p=>{const{onLayout:S}=E.current,{layout:y,panelDataArray:R}=C.current,I=vn({layout:p,panelConstraints:R.map(P=>P.constraints)});Sn(y,I)||(x(I),C.current.layout=I,S&&S(I),fe(R,I,W.current))}}),[]),de(()=>{E.current.autoSaveId=e,E.current.direction=s,E.current.dragState=b,E.current.id=d,E.current.onLayout=a,E.current.storage=c}),Cr({committedValuesRef:E,eagerValuesRef:C,groupId:d,layout:w,panelDataArray:C.current.panelDataArray,setLayout:x,panelGroupElement:h.current}),ce(()=>{const{panelDataArray:p}=C.current;if(e){if(w.length===0||w.length!==p.length)return;let S=jn[e];S==null&&(S=jr(Tr,Er),jn[e]=S);const y=[...p],R=new Map(A.current);S(e,y,R,w,c)}},[e,w,c]),ce(()=>{});const U=G(p=>{const{onLayout:S}=E.current,{layout:y,panelDataArray:R}=C.current;if(p.constraints.collapsible){const I=R.map(X=>X.constraints),{collapsedSize:P=0,panelSize:k,pivotIndices:O}=ae(R,p,y);if(v(k!=null,`Panel size not found for panel "${p.id}"`),!te(k,P)){A.current.set(p.id,k);const q=pe(R,p)===R.length-1?k-P:P-k,M=Re({delta:q,initialLayout:y,panelConstraints:I,pivotIndices:O,prevLayout:y,trigger:"imperative-api"});We(y,M)||(x(M),C.current.layout=M,S&&S(M),fe(R,M,W.current))}}},[]),J=G((p,S)=>{const{onLayout:y}=E.current,{layout:R,panelDataArray:I}=C.current;if(p.constraints.collapsible){const P=I.map(Z=>Z.constraints),{collapsedSize:k=0,panelSize:O=0,minSize:X=0,pivotIndices:q}=ae(I,p,R),M=S??X;if(te(O,k)){const Z=A.current.get(p.id),Ee=Z!=null&&Z>=M?Z:M,Le=pe(I,p)===I.length-1?O-Ee:Ee-O,ie=Re({delta:Le,initialLayout:R,panelConstraints:P,pivotIndices:q,prevLayout:R,trigger:"imperative-api"});We(R,ie)||(x(ie),C.current.layout=ie,y&&y(ie),fe(I,ie,W.current))}}},[]),Y=G(p=>{const{layout:S,panelDataArray:y}=C.current,{panelSize:R}=ae(y,p,S);return v(R!=null,`Panel size not found for panel "${p.id}"`),R},[]),Q=G((p,S)=>{const{panelDataArray:y}=C.current,R=pe(y,p);return vr({defaultSize:S,dragState:b,layout:w,panelData:y,panelIndex:R})},[b,w]),V=G(p=>{const{layout:S,panelDataArray:y}=C.current,{collapsedSize:R=0,collapsible:I,panelSize:P}=ae(y,p,S);return v(P!=null,`Panel size not found for panel "${p.id}"`),I===!0&&te(P,R)},[]),$=G(p=>{const{layout:S,panelDataArray:y}=C.current,{collapsedSize:R=0,collapsible:I,panelSize:P}=ae(y,p,S);return v(P!=null,`Panel size not found for panel "${p.id}"`),!I||ue(P,R)>0},[]),re=G(p=>{const{panelDataArray:S}=C.current;S.push(p),S.sort((y,R)=>{const I=y.order,P=R.order;return I==null&&P==null?0:I==null?-1:P==null?1:I-P}),C.current.panelDataArrayChanged=!0},[]);de(()=>{if(C.current.panelDataArrayChanged){C.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:S,storage:y}=E.current,{layout:R,panelDataArray:I}=C.current;let P=null;if(p){const O=Pr(p,I,y);O&&(A.current=new Map(Object.entries(O.expandToSizes)),P=O.layout)}P==null&&(P=wr({panelDataArray:I}));const k=vn({layout:P,panelConstraints:I.map(O=>O.constraints)});Sn(R,k)||(x(k),C.current.layout=k,S&&S(k),fe(I,k,W.current))}}),de(()=>{const p=C.current;return()=>{p.layout=[]}},[]);const H=G(p=>function(y){y.preventDefault();const R=h.current;if(!R)return()=>null;const{direction:I,dragState:P,id:k,keyboardResizeBy:O,onLayout:X}=E.current,{layout:q,panelDataArray:M}=C.current,{initialLayout:Z}=P??{},Ee=Ft(k,p,R);let ne=Sr(y,p,I,P,O,R);if(ne===0)return;const Le=I==="horizontal";document.dir==="rtl"&&Le&&(ne=-ne);const ie=M.map(Jt=>Jt.constraints),ge=Re({delta:ne,initialLayout:Z??q,panelConstraints:ie,pivotIndices:Ee,prevLayout:q,trigger:kt(y)?"keyboard":"mouse-or-touch"}),pn=!We(q,ge);(Mt(y)||Dt(y))&&N.current!=ne&&(N.current=ne,pn?rn(p,0):Le?rn(p,ne<0?$t:_t):rn(p,ne<0?Ot:Nt)),pn&&(x(ge),C.current.layout=ge,X&&X(ge),fe(M,ge,W.current))},[]),_=G((p,S)=>{const{onLayout:y}=E.current,{layout:R,panelDataArray:I}=C.current,P=I.map(Z=>Z.constraints),{panelSize:k,pivotIndices:O}=ae(I,p,R);v(k!=null,`Panel size not found for panel "${p.id}"`);const q=pe(I,p)===I.length-1?k-S:S-k,M=Re({delta:q,initialLayout:R,panelConstraints:P,pivotIndices:O,prevLayout:R,trigger:"imperative-api"});We(R,M)||(x(M),C.current.layout=M,y&&y(M),fe(I,M,W.current))},[]),F=G((p,S)=>{const{layout:y,panelDataArray:R}=C.current,{collapsedSize:I=0,collapsible:P}=S,{collapsedSize:k=0,collapsible:O,maxSize:X=100,minSize:q=0}=p.constraints,{panelSize:M}=ae(R,p,y);M!=null&&(P&&O&&te(M,I)?te(I,k)||_(p,k):M<q?_(p,q):M>X&&_(p,X))},[_]),nn=G((p,S)=>{const{direction:y}=E.current,{layout:R}=C.current;if(!h.current)return;const I=ve(p,h.current);v(I,`Drag handle element not found for id "${p}"`);const P=Gt(y,S);j({dragHandleId:p,dragHandleRect:I.getBoundingClientRect(),initialCursorPosition:P,initialLayout:R})},[]),je=G(()=>{j(null)},[]),Pe=G(p=>{const{panelDataArray:S}=C.current,y=pe(S,p);y>=0&&(S.splice(y,1),delete W.current[p.id],C.current.panelDataArrayChanged=!0)},[]),Te=or(()=>({collapsePanel:U,direction:s,dragState:b,expandPanel:J,getPanelSize:Y,getPanelStyle:Q,groupId:d,isPanelCollapsed:V,isPanelExpanded:$,reevaluatePanelConstraints:F,registerPanel:re,registerResizeHandle:H,resizePanel:_,startDragging:nn,stopDragging:je,unregisterPanel:Pe,panelGroupElement:h.current}),[U,b,s,J,Y,Q,d,V,$,F,re,H,_,nn,je,Pe]),ee={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return be(Je.Provider,{value:Te},be(g,{...u,children:n,className:t,id:o,ref:h,style:{...ee,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Xt=Pt((e,n)=>be(Ut,{...e,forwardedRef:n}));Ut.displayName="PanelGroup";Xt.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ae(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Lr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){ce(()=>{if(e||t==null||s==null)return;const i=ve(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");v(l,`No group element found for id "${l}"`);const c=we(l,s),z=Bt(l,n,s);v(z!==null,`No resize element found for id "${n}"`);const g=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[g].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Zt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onDragging:o,style:a={},tabIndex:l=0,tagName:c="div",...z}){var g,u;const d=B(null),h=B({onDragging:o});ce(()=>{h.current.onDragging=o});const b=Tt(Je);if(b===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:j,groupId:w,registerResizeHandle:x,startDragging:W,stopDragging:A,panelGroupElement:N}=b,E=ln(i),[C,U]=Ce("inactive"),[J,Y]=Ce(!1),[Q,V]=Ce(null),$=B({state:C});de(()=>{$.current.state=C}),ce(()=>{if(t)V(null);else{const F=x(E);V(()=>F)}},[t,E,x]);const re=(g=s==null?void 0:s.coarse)!==null&&g!==void 0?g:15,H=(u=s==null?void 0:s.fine)!==null&&u!==void 0?u:5;return ce(()=>{if(t||Q==null)return;const F=d.current;return v(F,"Element ref not attached"),gr(E,F,j,{coarse:re,fine:H},(je,Pe,Te)=>{if(Pe)switch(je){case"down":{U("drag"),W(E,Te);const{onDragging:ee}=h.current;ee&&ee(!0);break}case"move":{const{state:ee}=$.current;ee!=="drag"&&U("hover"),Q(Te);break}case"up":{U("hover"),A();const{onDragging:ee}=h.current;ee&&ee(!1);break}}else U("inactive")})},[re,j,t,H,x,E,Q,W,A]),Lr({disabled:t,handleId:E,resizeHandler:Q,panelGroupElement:N}),be(c,{...z,children:e,className:n,id:i,onBlur:()=>Y(!1),onFocus:()=>Y(!0),ref:d,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":j,"data-panel-group-id":w,"data-resize-handle":"","data-resize-handle-active":C==="drag"?"pointer":J?"keyboard":void 0,"data-resize-handle-state":C,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":E})}Zt.displayName="PanelResizeHandle";function Wr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[kr,fn]=Yt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Mr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:i=!1,onLayout:o,storage:a,ref:l,groupProps:c,...z})=>{e??(e=D.useId());const g=D.useCallback((d={},h=null)=>({...d,ref:h,...z}),[z]),u=D.useCallback((d={})=>{const{as:h,...b}=c??{};return{...d,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...b}},[e,n,c,t,s,o,a]);return D.useEffect(()=>{if(!e)return;const d=mn(e);l&&(l.current=d)},[l,e]),{isDisabled:i,getContainerProps:g,getGroupProps:u}},Dr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:i,maxSize:o,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:g,controlRef:u,containerProps:d,...h})=>{e??(e=D.useId());const b=D.useCallback((w={})=>{const{as:x,...W}=d??{};return{...w,ref:u,id:e,tagName:x,collapsible:s,defaultSize:i,maxSize:o,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:g,...s?{"aria-labelledby":e}:{"aria-label":e},...W}},[e,u,d,t,s,i,o,a,l,c,z,g]),j=D.useCallback((w={},x=null)=>({...w,ref:x,...h}),[h]);return D.useEffect(()=>{if(!e)return;const w=Wr(e);n&&(n.current=w)},[n,e]),{getPanelProps:b,getItemProps:j}},Ar=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{e??(e=D.useId());const{isDisabled:l}=fn(),[c,z]=D.useState(!1),g=s||i||l,u=D.useCallback((h={})=>({...h,id:e,tagName:t,disabled:g,onDragging:Qt(o,b=>z(b)),...a,"data-active":gn(c),style:{...h.style,...a.style,...g?{cursor:"default"}:{}}}),[e,t,g,o,a,c]),d=D.useCallback((h={},b=null)=>({...h,ref:b,"data-active":gn(c)}),[c]);return D.useEffect(()=>{if(!e)return;const h=ve(e);n&&(n.current=h)},[n,e]),{getTriggerProps:u,getIconProps:d}},L=an(({direction:e="horizontal",...n},t)=>{const[s,i]=er("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=nr(i),{getContainerProps:z,getGroupProps:g,...u}=Mr({ref:t,...c}),d={w:"100%",h:"100%",...s.container};return r.jsx(kr,{value:{styles:s,...u},children:r.jsx(ye.div,{className:on("ui-resizable",o),__css:d,...z({},l),children:r.jsx(Xt,{...g(),children:a})})})}),$r=new Set(["order"]),_r=ye(Wt,{disableStyleProp:e=>$r.has(e)}),m=an(({className:e,children:n,innerRef:t,w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:g,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j,...w},x)=>{const{styles:W}=fn(),{getPanelProps:A,getItemProps:N}=Dr({ref:x,...w}),E={boxSize:"100%",...W.item};return r.jsx(_r,{...A({w:s,width:i,minW:o,minWidth:a,maxW:l,maxWidth:c,h:z,height:g,minH:u,minHeight:d,maxH:h,maxHeight:b,boxSize:j}),children:r.jsx(ye.div,{className:on("ui-resizable__item",e),__css:E,...N({},t),children:n})})}),T=an(({className:e,icon:n,children:t,iconProps:s,...i},o)=>{const{styles:a}=fn(),{getTriggerProps:l,getIconProps:c}=Ar({ref:o,...i}),z={position:"relative",...a.trigger};return r.jsxs(ye.div,{as:Zt,className:on("ui-resizable__trigger",e),__css:z,...l(),children:[n?r.jsx(ye.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})}),Pn=e=>r.jsxs(tr,{viewBox:"0 0 23 39",w:"0.5rem",h:"1rem",...e,children:[r.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),as={title:"Components / Data Display / Resizable",component:L},ke=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(L,{variant:"unstyled",h:"md",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),De=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(L,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ae=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),$e=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),_e=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Oe=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]}),He=()=>{const e=D.useRef(null),n=D.useRef(null),t=D.useRef(null),s=D.useRef(null),i=D.useRef(null);return D.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(L,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(m,{as:f,children:"Two"})]})},Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(Pn,{})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(Pn,{})}),r.jsx(m,{as:f,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(hn,{icon:zn})}),r.jsx(m,{as:f,children:"Two"})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{icon:r.jsx(hn,{icon:zn})}),r.jsx(m,{as:f,children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(L,{direction:"vertical",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Bottom"})]})})]}),r.jsxs(L,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"Top"}),r.jsx(T,{}),r.jsx(m,{children:r.jsxs(L,{children:[r.jsx(m,{as:f,children:"Left"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Right"})]})})]})]}),Ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(m,{as:f,children:"Two"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Three"})]})]}),Ve=()=>r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]}),qe=()=>{const[e,n]=bn(!0),[t,s]=bn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]}),r.jsxs(jt,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(m,{as:f,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(m,{as:f,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(m,{as:f,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Ue=()=>{const e=D.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(m,{as:f,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,id:"two",children:"Two"})]})},Xe=()=>{const e=D.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(jt,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(L,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(m,{as:f,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(m,{as:f,children:"Two"})]})]})};var Tn,En,Ln;ke.parameters={...ke.parameters,docs:{...(Tn=ke.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(kn=Me.parameters)==null?void 0:kn.docs)==null?void 0:Mn.source}}};var Dn,An,$n;De.parameters={...De.parameters,docs:{...(Dn=De.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...($n=(An=De.parameters)==null?void 0:An.docs)==null?void 0:$n.source}}};var _n,On,Nn;Ae.parameters={...Ae.parameters,docs:{...(_n=Ae.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Nn=(On=Ae.parameters)==null?void 0:On.docs)==null?void 0:Nn.source}}};var Hn,Bn,Fn;$e.parameters={...$e.parameters,docs:{...(Hn=$e.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Fn=(Bn=$e.parameters)==null?void 0:Bn.docs)==null?void 0:Fn.source}}};var Gn,Kn,Vn;_e.parameters={..._e.parameters,docs:{...(Gn=_e.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=_e.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var qn,Un,Xn;Oe.parameters={...Oe.parameters,docs:{...(qn=Oe.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Xn=(Un=Oe.parameters)==null?void 0:Un.docs)==null?void 0:Xn.source}}};var Zn,Jn,Yn;Ne.parameters={...Ne.parameters,docs:{...(Zn=Ne.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Jn=Ne.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Qn,et,nt;He.parameters={...He.parameters,docs:{...(Qn=He.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(st=(rt=Be.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,it,at;Fe.parameters={...Fe.parameters,docs:{...(ot=Fe.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(at=(it=Fe.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;Ge.parameters={...Ge.parameters,docs:{...(lt=Ge.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=Ge.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Ke.parameters={...Ke.parameters,docs:{...(ut=Ke.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(zt=(ht=Ve.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,xt;qe.parameters={...qe.parameters,docs:{...(bt=qe.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(xt=(gt=qe.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var Rt,It,Ct;Ue.parameters={...Ue.parameters,docs:{...(Rt=Ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(Ct=(It=Ue.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var yt,St,wt;Xe.parameters={...Xe.parameters,docs:{...(yt=Xe.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
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
}`,...(wt=(St=Xe.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};const ls=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{ls as __namedExportsOrder,ke as basic,Xe as customControls,Fe as customIcon,as as default,Ke as isDisabled,Ge as nestedResizable,Ue as useCookieStorage,qe as useLocaleStorage,Ve as useOnResize,Ne as withCollapsible,De as withColorScheme,$e as withDefaultSize,Ae as withDirection,Be as withIcon,Oe as withKeyboardStep,_e as withMinMaxSize,He as withRefs,Me as withVariant};
