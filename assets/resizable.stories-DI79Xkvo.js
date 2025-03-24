import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{b as Tt,r as _}from"./index-BwPxMuoB.js";import{B as tr,a as rr,X as ln,h as gn,d as xn,b as ve,c as cn}from"./factory-B_KMcXyW.js";import{f as Et}from"./forward-ref-Ukjd1cIW.js";import{a as sr}from"./use-component-style-65RA3nVD.js";import{o as or}from"./theme-provider-DGyR61Aa.js";import{G as Rn,M as In}from"./move-horizontal-D1q-Wxnj.js";import{C as h}from"./center-BgoPILRQ.js";import{u as yn}from"./index-qZwaV1-B.js";import{W as Lt}from"./flex-DvtQc3o-.js";import{B as he}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";const{createElement:xe,createContext:ir,forwardRef:kt,useCallback:K,useContext:Wt,useEffect:le,useImperativeHandle:_t,useLayoutEffect:ar,useMemo:lr,useRef:V,useState:be}=Tt,Sn=Tt[`useId${Math.random()}`.slice(0,5)],cr=ar,Ye=ir(null);Ye.displayName="PanelGroupContext";const ce=cr,dr=typeof Sn=="function"?Sn:()=>null;let ur=0;function dn(e=null){const n=dr(),t=V(e||n||null);return t.current===null&&(t.current=""+ur++),e??t.current}function Mt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:x,onResize:m,order:d,style:b,tagName:g="div",...C}){const R=Wt(Ye);if(R===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:p,expandPanel:L,getPanelSize:k,getPanelStyle:O,groupId:$,isPanelCollapsed:W,reevaluatePanelConstraints:y,registerPanel:U,resizePanel:q,unregisterPanel:se}=R,J=dn(a),A=V({callbacks:{onCollapse:z,onExpand:x,onResize:m},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:J,idIsFromProps:a!==void 0,order:d});V({didLogMissingDefaultSizeWarning:!1}),ce(()=>{const{callbacks:H,constraints:B}=A.current,G={...B};A.current.id=J,A.current.idIsFromProps=a!==void 0,A.current.order=d,H.onCollapse=z,H.onExpand=x,H.onResize=m,B.collapsedSize=t,B.collapsible=s,B.defaultSize=i,B.maxSize=l,B.minSize=c,(G.collapsedSize!==B.collapsedSize||G.collapsible!==B.collapsible||G.maxSize!==B.maxSize||G.minSize!==B.minSize)&&y(A.current,G)}),ce(()=>{const H=A.current;return U(H),()=>{se(H)}},[d,J,U,se]),_t(o,()=>({collapse:()=>{p(A.current)},expand:H=>{L(A.current,H)},getId(){return J},getSize(){return k(A.current)},isCollapsed(){return W(A.current)},isExpanded(){return!W(A.current)},resize:H=>{q(A.current,H)}}),[p,L,k,W,J,q]);const te=O(A.current,i);return xe(g,{...C,children:e,className:n,id:a,style:{...te,...b},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":$,"data-panel-id":J,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Dt=kt((e,n)=>xe(Mt,{...e,forwardedRef:n}));Mt.displayName="Panel";Dt.displayName="forwardRef(Panel)";let an=null,ae=null;function mr(e,n){if(n){const t=(n&Ht)!==0,s=(n&Bt)!==0,i=(n&Gt)!==0,o=(n&Ft)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function fr(){ae!==null&&(document.head.removeChild(ae),an=null,ae=null)}function sn(e,n){const t=mr(e,n);an!==t&&(an=t,ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${t}!important;}`)}function Ot(e){return e.type==="keydown"}function At(e){return e.type.startsWith("pointer")}function Nt(e){return e.type.startsWith("mouse")}function Ze(e){if(At(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Nt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function pr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function hr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function zr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Cn(e),b:Cn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;w(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:vn(wn(t.a)),b:vn(wn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const br=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function gr(e){var n;const t=getComputedStyle((n=$t(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function xr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||gr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||br.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function wn(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),xr(t))return t}return null}function vn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Cn(e){const n=[];for(;e;)n.push(e),e=$t(e);return n}function $t(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Ht=1,Bt=2,Gt=4,Ft=8,Rr=pr()==="coarse";let Z=[],ge=!1,re=new Map,Qe=new Map;const Ce=new Set;function Ir(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),Ce.add(l),qe(),function(){var x;Qe.delete(e),Ce.delete(l);const m=(x=re.get(a))!==null&&x!==void 0?x:1;if(re.set(a,m-1),qe(),m===1&&re.delete(a),Z.includes(l)){const d=Z.indexOf(l);d>=0&&Z.splice(d,1),mn(),i("up",!0,null)}}}function jn(e){const{target:n}=e,{x:t,y:s}=Ze(e);ge=!0,un({target:n,x:t,y:s}),qe(),Z.length>0&&(Je("down",e),e.preventDefault(),e.stopPropagation())}function ye(e){const{x:n,y:t}=Ze(e);if(ge&&e.buttons===0&&(ge=!1,Je("up",e)),!ge){const{target:s}=e;un({target:s,x:n,y:t})}Je("move",e),mn(),Z.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Ze(e);Qe.clear(),ge=!1,Z.length>0&&e.preventDefault(),Je("up",e),un({target:n,x:t,y:s}),mn(),qe()}function un({target:e,x:n,y:t}){Z.splice(0);let s=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:z,right:x,top:m}=l,d=Rr?a.coarse:a.fine;if(n>=z-d&&n<=x+d&&t>=m-d&&t<=c+d){if(s!==null&&document.contains(s)&&o!==s&&!o.contains(s)&&!s.contains(o)&&zr(s,o)>0){let g=s,C=!1;for(;g&&!g.contains(o);){if(hr(g.getBoundingClientRect(),l)){C=!0;break}g=g.parentElement}if(C)return}Z.push(i)}})}function on(e,n){Qe.set(e,n)}function mn(){let e=!1,n=!1;Z.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Qe.forEach(s=>{t|=s}),e&&n?sn("intersection",t):e?sn("horizontal",t):n?sn("vertical",t):fr()}function qe(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",jn),t.removeEventListener("pointerleave",ye),t.removeEventListener("pointermove",ye)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),Ce.size>0&&(ge?(Z.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",ye),t.addEventListener("pointermove",ye))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",jn,{capture:!0}),t.addEventListener("pointermove",ye))}))}function Je(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=Z.includes(t);s(e,i,n)})}function yr(){const[e,n]=be(0);return K(()=>n(t=>t+1),[])}function w(e,n){if(!e)throw console.error(n),Error(n)}const fn=10;function de(e,n,t=fn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=fn){return de(e,n,t)===0}function X(e,n,t){return de(e,n,t)===0}function Sr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!X(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];w(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(de(t,l)<0)if(o){const c=(i+l)/2;de(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(fn)),t}function Se({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(X(e,0))return n;const a=[...n],[l,c]=s;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let z=0;if(o==="keyboard"){{const m=e<0?c:l,d=t[m];w(d,`Panel constraints not found for index ${m}`);const{collapsedSize:b=0,collapsible:g,minSize:C=0}=d;if(g){const R=n[m];if(w(R!=null,`Previous layout not found for panel index ${m}`),X(R,b)){const p=C-R;de(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}{const m=e<0?l:c,d=t[m];w(d,`No panel constraints found for index ${m}`);const{collapsedSize:b=0,collapsible:g,minSize:C=0}=d;if(g){const R=n[m];if(w(R!=null,`Previous layout not found for panel index ${m}`),X(R,C)){const p=R-b;de(p,Math.abs(e))>0&&(e=e<0?0-p:p)}}}}{const m=e<0?1:-1;let d=e<0?c:l,b=0;for(;;){const C=n[d];w(C!=null,`Previous layout not found for panel index ${d}`);const p=ze({panelConstraints:t,panelIndex:d,size:100})-C;if(b+=p,d+=m,d<0||d>=t.length)break}const g=Math.min(Math.abs(e),Math.abs(b));e=e<0?0-g:g}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const b=Math.abs(e)-Math.abs(z),g=n[d];w(g!=null,`Previous layout not found for panel index ${d}`);const C=g-b,R=ze({panelConstraints:t,panelIndex:d,size:C});if(!X(g,R)&&(z+=g-R,a[d]=R,z.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(Sr(i,a))return i;{const m=e<0?c:l,d=n[m];w(d!=null,`Previous layout not found for panel index ${m}`);const b=d+z,g=ze({panelConstraints:t,panelIndex:m,size:b});if(a[m]=g,!X(g,b)){let C=b-g,p=e<0?c:l;for(;p>=0&&p<t.length;){const L=a[p];w(L!=null,`Previous layout not found for panel index ${p}`);const k=L+C,O=ze({panelConstraints:t,panelIndex:p,size:k});if(X(L,O)||(C-=O-L,a[p]=O),X(C,0))break;e>0?p--:p++}}}const x=a.reduce((m,d)=>d+m,0);return X(x,100)?a:i}function wr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((m,d)=>{const{constraints:b}=m,{maxSize:g=100,minSize:C=0}=b;d===l?(s=C,i=g):(o+=C,a+=g)});const c=Math.min(i,100-o),z=Math.max(s,100-a),x=e[l];return{valueMax:c,valueMin:z,valueNow:x}}function je(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Kt(e,n,t=document){const i=je(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Vt(e,n,t){const s=Kt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function pn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function vr(e,n,t,s=document){var i,o,a,l;const c=Pe(n,s),z=je(e,s),x=c?z.indexOf(c):-1,m=(i=(o=t[x])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[x+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[m,d]}function Cr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){V({didWarnAboutMissingResizeHandle:!1}),ce(()=>{if(!o)return;const l=je(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:z,valueMin:x,valueNow:m}=wr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const b=i[c];w(b,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",b.id),d.setAttribute("aria-valuemax",""+Math.round(z)),d.setAttribute("aria-valuemin",""+Math.round(x)),d.setAttribute("aria-valuenow",m!=null?""+Math.round(m):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),le(()=>{if(!o)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,z=pn(t,o);w(z!=null,`No group found for id "${t}"`);const x=je(t,o);w(x,`No resize handles found for group id "${t}"`);const m=x.map(d=>{const b=d.getAttribute("data-panel-resize-handle-id");w(b,"Resize handle element has no handle id attribute");const[g,C]=vr(t,b,c,o);if(g==null||C==null)return()=>{};const R=p=>{if(!p.defaultPrevented)switch(p.key){case"Enter":{p.preventDefault();const L=c.findIndex(k=>k.id===g);if(L>=0){const k=c[L];w(k,`No panel data found for index ${L}`);const O=s[L],{collapsedSize:$=0,collapsible:W,minSize:y=0}=k.constraints;if(O!=null&&W){const U=Se({delta:X(O,$)?y-$:$-O,initialLayout:s,panelConstraints:c.map(q=>q.constraints),pivotIndices:Vt(t,b,o),prevLayout:s,trigger:"keyboard"});s!==U&&a(U)}}break}}};return d.addEventListener("keydown",R),()=>{d.removeEventListener("keydown",R)}});return()=>{m.forEach(d=>d())}},[o,e,n,t,s,i,a])}function Pn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Ut(e,n){const t=e==="horizontal",{x:s,y:i}=Ze(n);return t?s:i}function jr(e,n,t,s,i){const o=t==="horizontal",a=Pe(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const z=Ut(t,e),x=pn(l,i);w(x,`No group element found for id "${l}"`);const m=x.getBoundingClientRect(),d=o?m.width:m.height;return(z-c)/d*100}function Pr(e,n,t,s,i,o){if(Ot(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:jr(e,n,t,s,o)}function Tr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=i/c;s++,n[o]=z,i-=z}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];w(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:z=0,collapsible:x}=l,m=t[c];if(m==null||s!==m){t[c]=s;const{onCollapse:d,onExpand:b,onResize:g}=a;g&&g(s,m),x&&(d||b)&&(b&&(m==null||ne(m,z))&&!ne(s,z)&&b(),d&&(m==null||!ne(m,z))&&ne(s,z)&&d())}})}function Le(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Er({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Lr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Tn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Xt(e){return`react-resizable-panels:${e}`}function qt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Jt(e,n){try{const t=Xt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function kr(e,n,t){var s,i;const o=(s=Jt(e,t))!==null&&s!==void 0?s:{},a=qt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Wr(e,n,t,s,i){var o;const a=Xt(e),l=qt(n),c=(o=Jt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function En({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!X(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!X(i,0))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,X(i,0)))break}return t}const _r=100,we={getItem:e=>(Tn(we),we.getItem(e)),setItem:(e,n)=>{Tn(we),we.setItem(e,n)}},Ln={};function Yt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=we,style:z,tagName:x="div",...m}){const d=dn(o),b=V(null),[g,C]=be(null),[R,p]=be([]),L=yr(),k=V({}),O=V(new Map),$=V(0),W=V({autoSaveId:e,direction:s,dragState:g,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),y=V({layout:R,panelDataArray:[],panelDataArrayChanged:!1});V({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),_t(i,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:u}=y.current;return u},setLayout:u=>{const{onLayout:S}=W.current,{layout:j,panelDataArray:v}=y.current,I=En({layout:u,panelConstraints:v.map(T=>T.constraints)});Pn(j,I)||(p(I),y.current.layout=I,S&&S(I),fe(v,I,k.current))}}),[]),ce(()=>{W.current.autoSaveId=e,W.current.direction=s,W.current.dragState=g,W.current.id=d,W.current.onLayout=a,W.current.storage=c}),Cr({committedValuesRef:W,eagerValuesRef:y,groupId:d,layout:R,panelDataArray:y.current.panelDataArray,setLayout:p,panelGroupElement:b.current}),le(()=>{const{panelDataArray:u}=y.current;if(e){if(R.length===0||R.length!==u.length)return;let S=Ln[e];S==null&&(S=Lr(Wr,_r),Ln[e]=S);const j=[...u],v=new Map(O.current);S(e,j,v,R,c)}},[e,R,c]),le(()=>{});const U=K(u=>{const{onLayout:S}=W.current,{layout:j,panelDataArray:v}=y.current;if(u.constraints.collapsible){const I=v.map(Q=>Q.constraints),{collapsedSize:T=0,panelSize:M,pivotIndices:N}=ie(v,u,j);if(w(M!=null,`Panel size not found for panel "${u.id}"`),!ne(M,T)){O.current.set(u.id,M);const ee=pe(v,u)===v.length-1?M-T:T-M,D=Se({delta:ee,initialLayout:j,panelConstraints:I,pivotIndices:N,prevLayout:j,trigger:"imperative-api"});Le(j,D)||(p(D),y.current.layout=D,S&&S(D),fe(v,D,k.current))}}},[]),q=K((u,S)=>{const{onLayout:j}=W.current,{layout:v,panelDataArray:I}=y.current;if(u.constraints.collapsible){const T=I.map(Y=>Y.constraints),{collapsedSize:M=0,panelSize:N=0,minSize:Q=0,pivotIndices:ee}=ie(I,u,v),D=S??Q;if(ne(N,M)){const Y=O.current.get(u.id),Re=Y!=null&&Y>=D?Y:D,rn=pe(I,u)===I.length-1?N-Re:Re-N,F=Se({delta:rn,initialLayout:v,panelConstraints:T,pivotIndices:ee,prevLayout:v,trigger:"imperative-api"});Le(v,F)||(p(F),y.current.layout=F,j&&j(F),fe(I,F,k.current))}}},[]),se=K(u=>{const{layout:S,panelDataArray:j}=y.current,{panelSize:v}=ie(j,u,S);return w(v!=null,`Panel size not found for panel "${u.id}"`),v},[]),J=K((u,S)=>{const{panelDataArray:j}=y.current,v=pe(j,u);return Er({defaultSize:S,dragState:g,layout:R,panelData:j,panelIndex:v})},[g,R]),A=K(u=>{const{layout:S,panelDataArray:j}=y.current,{collapsedSize:v=0,collapsible:I,panelSize:T}=ie(j,u,S);return w(T!=null,`Panel size not found for panel "${u.id}"`),I===!0&&ne(T,v)},[]),te=K(u=>{const{layout:S,panelDataArray:j}=y.current,{collapsedSize:v=0,collapsible:I,panelSize:T}=ie(j,u,S);return w(T!=null,`Panel size not found for panel "${u.id}"`),!I||de(T,v)>0},[]),H=K(u=>{const{panelDataArray:S}=y.current;S.push(u),S.sort((j,v)=>{const I=j.order,T=v.order;return I==null&&T==null?0:I==null?-1:T==null?1:I-T}),y.current.panelDataArrayChanged=!0,L()},[L]);ce(()=>{if(y.current.panelDataArrayChanged){y.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:S,storage:j}=W.current,{layout:v,panelDataArray:I}=y.current;let T=null;if(u){const N=kr(u,I,j);N&&(O.current=new Map(Object.entries(N.expandToSizes)),T=N.layout)}T==null&&(T=Tr({panelDataArray:I}));const M=En({layout:T,panelConstraints:I.map(N=>N.constraints)});Pn(v,M)||(p(M),y.current.layout=M,S&&S(M),fe(I,M,k.current))}}),ce(()=>{const u=y.current;return()=>{u.layout=[]}},[]);const B=K(u=>{let S=!1;const j=b.current;return j&&window.getComputedStyle(j,null).getPropertyValue("direction")==="rtl"&&(S=!0),function(I){I.preventDefault();const T=b.current;if(!T)return()=>null;const{direction:M,dragState:N,id:Q,keyboardResizeBy:ee,onLayout:D}=W.current,{layout:Y,panelDataArray:Re}=y.current,{initialLayout:Ee}=N??{},rn=Vt(Q,u,T);let F=Pr(I,u,M,N,ee,T);const zn=M==="horizontal";zn&&S&&(F=-F);const er=Re.map(nr=>nr.constraints),Ie=Se({delta:F,initialLayout:Ee??Y,panelConstraints:er,pivotIndices:rn,prevLayout:Y,trigger:Ot(I)?"keyboard":"mouse-or-touch"}),bn=!Le(Y,Ie);(At(I)||Nt(I))&&$.current!=F&&($.current=F,!bn&&F!==0?zn?on(u,F<0?Ht:Bt):on(u,F<0?Gt:Ft):on(u,0)),bn&&(p(Ie),y.current.layout=Ie,D&&D(Ie),fe(Re,Ie,k.current))}},[]),G=K((u,S)=>{const{onLayout:j}=W.current,{layout:v,panelDataArray:I}=y.current,T=I.map(Y=>Y.constraints),{panelSize:M,pivotIndices:N}=ie(I,u,v);w(M!=null,`Panel size not found for panel "${u.id}"`);const ee=pe(I,u)===I.length-1?M-S:S-M,D=Se({delta:ee,initialLayout:v,panelConstraints:T,pivotIndices:N,prevLayout:v,trigger:"imperative-api"});Le(v,D)||(p(D),y.current.layout=D,j&&j(D),fe(I,D,k.current))},[]),en=K((u,S)=>{const{layout:j,panelDataArray:v}=y.current,{collapsedSize:I=0,collapsible:T}=S,{collapsedSize:M=0,collapsible:N,maxSize:Q=100,minSize:ee=0}=u.constraints,{panelSize:D}=ie(v,u,j);D!=null&&(T&&N&&ne(D,I)?ne(I,M)||G(u,M):D<ee?G(u,ee):D>Q&&G(u,Q))},[G]),oe=K((u,S)=>{const{direction:j}=W.current,{layout:v}=y.current;if(!b.current)return;const I=Pe(u,b.current);w(I,`Drag handle element not found for id "${u}"`);const T=Ut(j,S);C({dragHandleId:u,dragHandleRect:I.getBoundingClientRect(),initialCursorPosition:T,initialLayout:v})},[]),nn=K(()=>{C(null)},[]),Te=K(u=>{const{panelDataArray:S}=y.current,j=pe(S,u);j>=0&&(S.splice(j,1),delete k.current[u.id],y.current.panelDataArrayChanged=!0,L())},[L]),tn=lr(()=>({collapsePanel:U,direction:s,dragState:g,expandPanel:q,getPanelSize:se,getPanelStyle:J,groupId:d,isPanelCollapsed:A,isPanelExpanded:te,reevaluatePanelConstraints:en,registerPanel:H,registerResizeHandle:B,resizePanel:G,startDragging:oe,stopDragging:nn,unregisterPanel:Te,panelGroupElement:b.current}),[U,g,s,q,se,J,d,A,te,en,H,B,G,oe,nn,Te]),ue={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return xe(Ye.Provider,{value:tn},xe(x,{...m,children:n,className:t,id:o,ref:b,style:{...ue,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Zt=kt((e,n)=>xe(Yt,{...e,forwardedRef:n}));Yt.displayName="PanelGroup";Zt.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ie(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Mr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){le(()=>{if(e||t==null||s==null)return;const i=Pe(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");w(l,`No group element found for id "${l}"`);const c=je(l,s),z=Kt(l,n,s);w(z!==null,`No resize element found for id "${n}"`);const x=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[x].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Qt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:z=0,tagName:x="div",...m}){var d,b;const g=V(null),C=V({onDragging:a});le(()=>{C.current.onDragging=a});const R=Wt(Ye);if(R===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:p,groupId:L,registerResizeHandle:k,startDragging:O,stopDragging:$,panelGroupElement:W}=R,y=dn(i),[U,q]=be("inactive"),[se,J]=be(!1),[A,te]=be(null),H=V({state:U});ce(()=>{H.current.state=U}),le(()=>{if(t)te(null);else{const oe=k(y);te(()=>oe)}},[t,y,k]);const B=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,G=(b=s==null?void 0:s.fine)!==null&&b!==void 0?b:5;return le(()=>{if(t||A==null)return;const oe=g.current;return w(oe,"Element ref not attached"),Ir(y,oe,p,{coarse:B,fine:G},(Te,tn,ue)=>{if(tn)switch(Te){case"down":{q("drag"),w(ue,'Expected event to be defined for "down" action'),O(y,ue);const{onDragging:u}=C.current;u&&u(!0);break}case"move":{const{state:u}=H.current;u!=="drag"&&q("hover"),w(ue,'Expected event to be defined for "move" action'),A(ue);break}case"up":{q("hover"),$();const{onDragging:u}=C.current;u&&u(!1);break}}else q("inactive")})},[B,p,t,G,k,y,A,O,$]),Mr({disabled:t,handleId:y,resizeHandler:A,panelGroupElement:W}),xe(x,{...m,children:e,className:n,id:i,onBlur:()=>{J(!1),o==null||o()},onFocus:()=>{J(!0),l==null||l()},ref:g,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:z,"data-panel-group-direction":p,"data-panel-group-id":L,"data-resize-handle":"","data-resize-handle-active":U==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":U,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":y})}Qt.displayName="PanelResizeHandle";function Dr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Or,hn]=tr({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Ar=({id:e,ref:n,controlRef:t,direction:s="horizontal",isDisabled:i=!1,disabled:o=i,keyboardStep:a,orientation:l=s,storage:c,storageKey:z,groupProps:x,onLayout:m,...d})=>{const b=_.useRef(null),g=_.useId();e??(e=g);const C=_.useCallback((p={},L=null)=>({...p,ref:L,...d}),[d]),R=_.useCallback((p={})=>{const{as:L,...k}=x??{};return{...p,id:e,ref:rr(t,b),autoSaveId:z,direction:l,keyboardResizeBy:a,storage:c,tagName:L,onLayout:m,...k}},[e,l,x,t,z,a,m,c]);return _.useEffect(()=>{if(!e)return;const p=pn(e);ln(n)&&(n.current=p)},[n,e]),{controlRef:b,disabled:o,orientation:l,getContainerProps:C,getGroupProps:R}},Nr=({id:e,ref:n,collapsedSize:t,collapsible:s,controlRef:i,defaultSize:o,maxSize:a,minSize:l,order:c,containerProps:z,onCollapse:x,onExpand:m,onResize:d,...b})=>{const g=_.useId();e??(e=g);const C=_.useCallback((p={})=>{const{as:L,...k}=z??{};return{...p,id:e,ref:i,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:a,minSize:l,order:c,tagName:L,onCollapse:x,onExpand:m,onResize:d,...k}},[e,i,z,t,s,o,a,l,x,m,d,c]),R=_.useCallback((p={},L=null)=>({...p,ref:L,...b}),[b]);return _.useEffect(()=>{if(!e)return;const p=Dr(e);ln(n)&&(n.current=p)},[n,e]),{getItemProps:R,getPanelProps:C}},$r=({id:e,ref:n,as:t,isDisabled:s,disabled:i=s,...o})=>{const a=_.useId(),{controlRef:l,disabled:c,orientation:z}=hn();e??(e=a);const[x,m]=_.useState(!1),d=i||c,b=_.useCallback(R=>{var $,W;R.preventDefault();const p=($=l.current)==null?void 0:$.getLayout();if(!p)return;const k=100/p.length,O=p.map(()=>k);(W=l.current)==null||W.setLayout(O)},[l]),g=_.useCallback((R={})=>({...R,id:e,"aria-orientation":z,disabled:d,tagName:t,...o,style:{...R.style,...o.style,...d?{cursor:"default"}:{}},"data-active":xn(x),onDoubleClick:gn(o.onDoubleClick,b),onDragging:gn(o.onDragging,p=>m(p))}),[e,t,z,d,o,b,x]),C=_.useCallback((R={},p=null)=>({...R,ref:p,"data-active":xn(x)}),[x]);return _.useEffect(()=>{if(!e)return;const R=Pe(e);ln(n)&&(n.current=R)},[n,e]),{getIconProps:C,getTriggerProps:g}},E=Et(({direction:e="horizontal",orientation:n=e,...t},s)=>{const[i,o]=sr("Resizable",{direction:e,orientation:n,...t}),{className:a,children:l,containerRef:c,...z}=or(o),{getContainerProps:x,getGroupProps:m,...d}=Ar({ref:s,...z}),b={h:"100%",w:"100%",...i.container};return r.jsx(Or,{value:{styles:i,...d},children:r.jsx(ve.div,{className:cn("ui-resizable",a),__css:b,...x({},c),children:r.jsx(Zt,{...m(),children:l})})})});E.displayName="Resizable";E.__ui__="Resizable";const Hr=new Set(["order"]),Br=ve(Dt,{disableStyleProp:e=>Hr.has(e)}),f=Et(({className:e,boxSize:n,children:t,h:s,height:i,innerRef:o,maxH:a,maxHeight:l,maxW:c,maxWidth:z,minH:x,minHeight:m,minW:d,minWidth:b,w:g,width:C,...R},p)=>{const{styles:L}=hn(),{getItemProps:k,getPanelProps:O}=Nr({ref:p,...R}),$={boxSize:"100%",...L.item};return r.jsx(Br,{...O({boxSize:n,h:s,height:i,maxH:a,maxHeight:l,maxW:c,maxWidth:z,minH:x,minHeight:m,minW:d,minWidth:b,w:g,width:C}),children:r.jsx(ve.div,{className:cn("ui-resizable__item",e),__css:$,...k({},o),children:t})})});f.displayName="ResizableItem";f.__ui__="ResizableItem";const P=_.forwardRef(({className:e,children:n,icon:t,iconProps:s,...i},o)=>{const{styles:a}=hn(),{getIconProps:l,getTriggerProps:c}=$r({ref:o,...i}),z={position:"relative",...a.trigger};return r.jsxs(ve.div,{as:Qt,className:cn("ui-resizable__trigger",e),__css:z,...c(),children:[t?r.jsx(ve.div,{className:"ui-resizable__trigger__icon",__css:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",transform:"auto",translateX:"-50%",translateY:"-50%",...a.icon},...l(s),children:t}):null,n]})});P.displayName="ResizableTrigger";P.__ui__="ResizableTrigger";const cs={component:E,title:"Components / Data Display / Resizable"},ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),We=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{colorScheme:"primary",variant:"spacer",h:"md",children:[r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{colorScheme:"red",variant:"spacer",h:"md",children:[r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]})]}),De=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,defaultSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),Oe=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,maxSize:70,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),Ae=()=>r.jsxs(E,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(f,{as:h,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]})]}),$e=()=>{const e=_.useRef(null),n=_.useRef(null),t=_.useRef(null),s=_.useRef(null),i=_.useRef(null);return _.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,borderWidth:"1px",containerRef:e,h:"md",rounded:"md",children:[r.jsx(f,{ref:t,as:h,innerRef:s,children:"One"}),r.jsx(P,{ref:i}),r.jsx(f,{as:h,children:"Two"})]})},He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",orientation:"vertical",children:[r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:h,children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"Left"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{orientation:"vertical",children:[r.jsx(f,{as:h,children:"Top"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Bottom"})]})})]}),r.jsxs(E,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(f,{as:h,children:"Top"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:h,children:"Left"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Right"})]})})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",disabled:!0,h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Three"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(P,{disabled:!0}),r.jsx(f,{as:h,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Three"})]})]}),Ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]}),Ve=()=>{const[e,n]=yn(!0),[t,s]=yn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"persistence",children:[r.jsx(f,{id:"one",as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:h,children:"Two"})]}),r.jsxs(Lt,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{id:"left",as:h,minSize:10,order:1,children:"Left"}),r.jsx(P,{})]}):null,r.jsx(f,{id:"middle",as:h,minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(P,{}),r.jsx(f,{id:"right",as:h,minSize:10,order:3,children:"Right"})]}):null]})]})},Ue=()=>{const e=_.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storage:e,storageKey:"persistence",children:[r.jsx(f,{id:"one",as:h,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:h,children:"Two"})]})},Xe=()=>{const e=_.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Lt,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:h,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:h,children:"Two"})]})]})};var kn,Wn,_n;ke.parameters={...ke.parameters,docs:{...(kn=ke.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(_n=(Wn=ke.parameters)==null?void 0:Wn.docs)==null?void 0:_n.source}}};var Mn,Dn,On;We.parameters={...We.parameters,docs:{...(Mn=We.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(On=(Dn=We.parameters)==null?void 0:Dn.docs)==null?void 0:On.source}}};var An,Nn,$n;_e.parameters={..._e.parameters,docs:{...(An=_e.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...($n=(Nn=_e.parameters)==null?void 0:Nn.docs)==null?void 0:$n.source}}};var Hn,Bn,Gn;Me.parameters={...Me.parameters,docs:{...(Hn=Me.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" orientation="horizontal" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" orientation="vertical" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(Gn=(Bn=Me.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.source}}};var Fn,Kn,Vn;De.parameters={...De.parameters,docs:{...(Fn=De.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=De.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var Un,Xn,qn;Oe.parameters={...Oe.parameters,docs:{...(Un=Oe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(qn=(Xn=Oe.parameters)==null?void 0:Xn.docs)==null?void 0:qn.source}}};var Jn,Yn,Zn;Ae.parameters={...Ae.parameters,docs:{...(Jn=Ae.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Zn=(Yn=Ae.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var Qn,et,nt;Ne.parameters={...Ne.parameters,docs:{...(Qn=Ne.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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

      <Resizable borderWidth="1px" h="md" orientation="vertical" rounded="md">
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
}`,...(nt=(et=Ne.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,st;$e.parameters={...$e.parameters,docs:{...(tt=$e.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(st=(rt=$e.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,it,at;He.parameters={...He.parameters,docs:{...(ot=He.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" h="md" orientation="vertical">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVerticalIcon />} />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(at=(it=He.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;Be.parameters={...Be.parameters,docs:{...(lt=Be.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" orientation="vertical" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontalIcon />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(dt=(ct=Be.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Ge.parameters={...Ge.parameters,docs:{...(ut=Ge.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>Left</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>
          <Resizable orientation="vertical">
            <ResizableItem as={Center}>Top</ResizableItem>

            <ResizableTrigger />

            <ResizableItem as={Center}>Bottom</ResizableItem>
          </Resizable>
        </ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" orientation="vertical" rounded="md">
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
}`,...(ft=(mt=Ge.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var pt,ht,zt;Fe.parameters={...Fe.parameters,docs:{...(pt=Fe.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" disabled h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger disabled />

        <ResizableItem as={Center}>Two</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Three</ResizableItem>
      </Resizable>
    </>;
}`,...(zt=(ht=Fe.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,xt;Ke.parameters={...Ke.parameters,docs:{...(bt=Ke.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(xt=(gt=Ke.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var Rt,It,yt;Ve.parameters={...Ve.parameters,docs:{...(Rt=Ve.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(yt=(It=Ve.parameters)==null?void 0:It.docs)==null?void 0:yt.source}}};var St,wt,vt;Ue.parameters={...Ue.parameters,docs:{...(St=Ue.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
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
}`,...(vt=(wt=Ue.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var Ct,jt,Pt;Xe.parameters={...Xe.parameters,docs:{...(Ct=Xe.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(Pt=(jt=Xe.parameters)==null?void 0:jt.docs)==null?void 0:Pt.source}}};const ds=["basic","withVariant","withColorScheme","withOrientation","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","disabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{ds as __namedExportsOrder,ke as basic,Xe as customControls,Be as customIcon,cs as default,Fe as disabled,Ge as nestedResizable,Ue as useCookieStorage,Ve as useLocaleStorage,Ke as useOnResize,Ne as withCollapsible,_e as withColorScheme,De as withDefaultSize,He as withIcon,Ae as withKeyboardStep,Oe as withMinMaxSize,Me as withOrientation,$e as withRefs,We as withVariant};
