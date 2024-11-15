import{j as r}from"./jsx-runtime-CfatFE5O.js";import{u as gn}from"./index-gGKStiao.js";import{a as Tt,r as D}from"./index-ClcD9ViR.js";import{p as tr,d as xn,h as Rn,O as ln,a as rr,b as ve,c as cn}from"./factory-COau3w21.js";import{f as Et}from"./forward-ref-D13m8o2p.js";import{a as sr}from"./use-component-style-CLSKeq_H.js";import{o as or}from"./theme-provider-CNI9L2WW.js";import{G as In,M as yn}from"./move-horizontal-DC9tnt8a.js";import{C as p}from"./center-CSG2P-cD.js";import{W as Lt}from"./flex-BgJeD3no.js";import{B as he}from"./button-C2qeh-k-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./createLucideIcon-Czt4prMK.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";const{createElement:xe,createContext:ir,createRef:cs,forwardRef:kt,useCallback:K,useContext:Wt,useEffect:le,useImperativeHandle:Dt,useLayoutEffect:ar,useMemo:lr,useRef:V,useState:be}=Tt,Sn=Tt[`useId${Math.random()}`.slice(0,5)],cr=ar,Ye=ir(null);Ye.displayName="PanelGroupContext";const ce=cr,dr=typeof Sn=="function"?Sn:()=>null;let ur=0;function dn(e=null){const n=dr(),t=V(e||n||null);return t.current===null&&(t.current=""+ur++),e??t.current}function _t({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:h,onExpand:R,onResize:m,order:d,style:b,tagName:g="div",...y}){const x=Wt(Ye);if(x===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:z,expandPanel:k,getPanelSize:L,getPanelStyle:O,groupId:$,isPanelCollapsed:W,reevaluatePanelConstraints:S,registerPanel:U,resizePanel:X,unregisterPanel:se}=x,J=dn(a),A=V({callbacks:{onCollapse:h,onExpand:R,onResize:m},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:J,idIsFromProps:a!==void 0,order:d});V({didLogMissingDefaultSizeWarning:!1}),ce(()=>{const{callbacks:H,constraints:B}=A.current,G={...B};A.current.id=J,A.current.idIsFromProps=a!==void 0,A.current.order=d,H.onCollapse=h,H.onExpand=R,H.onResize=m,B.collapsedSize=t,B.collapsible=s,B.defaultSize=i,B.maxSize=l,B.minSize=c,(G.collapsedSize!==B.collapsedSize||G.collapsible!==B.collapsible||G.maxSize!==B.maxSize||G.minSize!==B.minSize)&&S(A.current,G)}),ce(()=>{const H=A.current;return U(H),()=>{se(H)}},[d,J,U,se]),Dt(o,()=>({collapse:()=>{z(A.current)},expand:H=>{k(A.current,H)},getId(){return J},getSize(){return L(A.current)},isCollapsed(){return W(A.current)},isExpanded(){return!W(A.current)},resize:H=>{X(A.current,H)}}),[z,k,L,W,J,X]);const te=O(A.current,i);return xe(g,{...y,children:e,className:n,id:a,style:{...te,...b},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":$,"data-panel-id":J,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Mt=kt((e,n)=>xe(_t,{...e,forwardedRef:n}));_t.displayName="Panel";Mt.displayName="forwardRef(Panel)";let an=null,ae=null;function mr(e,n){if(n){const t=(n&Ht)!==0,s=(n&Bt)!==0,i=(n&Gt)!==0,o=(n&Ft)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function fr(){ae!==null&&(document.head.removeChild(ae),an=null,ae=null)}function sn(e,n){const t=mr(e,n);an!==t&&(an=t,ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${t}!important;}`)}function Ot(e){return e.type==="keydown"}function At(e){return e.type.startsWith("pointer")}function Nt(e){return e.type.startsWith("mouse")}function Ze(e){if(At(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Nt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function pr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function hr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function zr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Cn(e),b:Cn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;v(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:vn(wn(t.a)),b:vn(wn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const br=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function gr(e){var n;const t=getComputedStyle((n=$t(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function xr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||gr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||br.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function wn(e){let n=e.length;for(;n--;){const t=e[n];if(v(t,"Missing node"),xr(t))return t}return null}function vn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Cn(e){const n=[];for(;e;)n.push(e),e=$t(e);return n}function $t(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Ht=1,Bt=2,Gt=4,Ft=8,Rr=pr()==="coarse";let Z=[],ge=!1,re=new Map,Qe=new Map;const Ce=new Set;function Ir(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),Ce.add(l),Xe(),function(){var R;Qe.delete(e),Ce.delete(l);const m=(R=re.get(a))!==null&&R!==void 0?R:1;if(re.set(a,m-1),Xe(),m===1&&re.delete(a),Z.includes(l)){const d=Z.indexOf(l);d>=0&&Z.splice(d,1),mn(),i("up",!0,null)}}}function jn(e){const{target:n}=e,{x:t,y:s}=Ze(e);ge=!0,un({target:n,x:t,y:s}),Xe(),Z.length>0&&(Je("down",e),e.preventDefault(),e.stopPropagation())}function ye(e){const{x:n,y:t}=Ze(e);if(ge&&e.buttons===0&&(ge=!1,Je("up",e)),!ge){const{target:s}=e;un({target:s,x:n,y:t})}Je("move",e),mn(),Z.length>0&&e.preventDefault()}function me(e){const{target:n}=e,{x:t,y:s}=Ze(e);Qe.clear(),ge=!1,Z.length>0&&e.preventDefault(),Je("up",e),un({target:n,x:t,y:s}),mn(),Xe()}function un({target:e,x:n,y:t}){Z.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:h,right:R,top:m}=l,d=Rr?a.coarse:a.fine;if(n>=h-d&&n<=R+d&&t>=m-d&&t<=c+d){if(s!==null&&document.contains(s)&&o!==s&&!o.contains(s)&&!s.contains(o)&&zr(s,o)>0){let g=s,y=!1;for(;g&&!g.contains(o);){if(hr(g.getBoundingClientRect(),l)){y=!0;break}g=g.parentElement}if(y)return}Z.push(i)}})}function on(e,n){Qe.set(e,n)}function mn(){let e=!1,n=!1;Z.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Qe.forEach(s=>{t|=s}),e&&n?sn("intersection",t):e?sn("horizontal",t):n?sn("vertical",t):fr()}function Xe(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",me),t.removeEventListener("pointerdown",jn),t.removeEventListener("pointerleave",ye),t.removeEventListener("pointermove",ye)}),window.removeEventListener("pointerup",me),window.removeEventListener("pointercancel",me),Ce.size>0&&(ge?(Z.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",me),t.addEventListener("pointerleave",ye),t.addEventListener("pointermove",ye))}),window.addEventListener("pointerup",me),window.addEventListener("pointercancel",me)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",jn,{capture:!0}),t.addEventListener("pointermove",ye))}))}function Je(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=Z.includes(t);s(e,i,n)})}function yr(){const[e,n]=be(0);return K(()=>n(t=>t+1),[])}function v(e,n){if(!e)throw console.error(n),Error(n)}const fn=10;function de(e,n,t=fn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=fn){return de(e,n,t)===0}function q(e,n,t){return de(e,n,t)===0}function Sr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!q(i,o,t))return!1}return!0}function ze({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];v(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(de(t,l)<0)if(o){const c=(i+l)/2;de(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(fn)),t}function Se({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(q(e,0))return n;const a=[...n],[l,c]=s;v(l!=null,"Invalid first pivot index"),v(c!=null,"Invalid second pivot index");let h=0;if(o==="keyboard"){{const m=e<0?c:l,d=t[m];v(d,`Panel constraints not found for index ${m}`);const{collapsedSize:b=0,collapsible:g,minSize:y=0}=d;if(g){const x=n[m];if(v(x!=null,`Previous layout not found for panel index ${m}`),q(x,b)){const z=y-x;de(z,Math.abs(e))>0&&(e=e<0?0-z:z)}}}{const m=e<0?l:c,d=t[m];v(d,`No panel constraints found for index ${m}`);const{collapsedSize:b=0,collapsible:g,minSize:y=0}=d;if(g){const x=n[m];if(v(x!=null,`Previous layout not found for panel index ${m}`),q(x,y)){const z=x-b;de(z,Math.abs(e))>0&&(e=e<0?0-z:z)}}}}{const m=e<0?1:-1;let d=e<0?c:l,b=0;for(;;){const y=n[d];v(y!=null,`Previous layout not found for panel index ${d}`);const z=ze({panelConstraints:t,panelIndex:d,size:100})-y;if(b+=z,d+=m,d<0||d>=t.length)break}const g=Math.min(Math.abs(e),Math.abs(b));e=e<0?0-g:g}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const b=Math.abs(e)-Math.abs(h),g=n[d];v(g!=null,`Previous layout not found for panel index ${d}`);const y=g-b,x=ze({panelConstraints:t,panelIndex:d,size:y});if(!q(g,x)&&(h+=g-x,a[d]=x,h.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(Sr(i,a))return i;{const m=e<0?c:l,d=n[m];v(d!=null,`Previous layout not found for panel index ${m}`);const b=d+h,g=ze({panelConstraints:t,panelIndex:m,size:b});if(a[m]=g,!q(g,b)){let y=b-g,z=e<0?c:l;for(;z>=0&&z<t.length;){const k=a[z];v(k!=null,`Previous layout not found for panel index ${z}`);const L=k+y,O=ze({panelConstraints:t,panelIndex:z,size:L});if(q(k,O)||(y-=O-k,a[z]=O),q(y,0))break;e>0?z--:z++}}}const R=a.reduce((m,d)=>d+m,0);return q(R,100)?a:i}function wr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];v(l!=null,"No pivot index found"),n.forEach((m,d)=>{const{constraints:b}=m,{maxSize:g=100,minSize:y=0}=b;d===l?(s=y,i=g):(o+=y,a+=g)});const c=Math.min(i,100-o),h=Math.max(s,100-a),R=e[l];return{valueMax:c,valueMin:h,valueNow:R}}function je(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Kt(e,n,t=document){const i=je(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Vt(e,n,t){const s=Kt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function pn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function vr(e,n,t,s=document){var i,o,a,l;const c=Pe(n,s),h=je(e,s),R=c?h.indexOf(c):-1,m=(i=(o=t[R])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[R+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[m,d]}function Cr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){V({didWarnAboutMissingResizeHandle:!1}),ce(()=>{if(!o)return;const l=je(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:h,valueMin:R,valueNow:m}=wr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const b=i[c];v(b,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",b.id),d.setAttribute("aria-valuemax",""+Math.round(h)),d.setAttribute("aria-valuemin",""+Math.round(R)),d.setAttribute("aria-valuenow",m!=null?""+Math.round(m):"")}}return()=>{l.forEach((c,h)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),le(()=>{if(!o)return;const l=n.current;v(l,"Eager values not found");const{panelDataArray:c}=l,h=pn(t,o);v(h!=null,`No group found for id "${t}"`);const R=je(t,o);v(R,`No resize handles found for group id "${t}"`);const m=R.map(d=>{const b=d.getAttribute("data-panel-resize-handle-id");v(b,"Resize handle element has no handle id attribute");const[g,y]=vr(t,b,c,o);if(g==null||y==null)return()=>{};const x=z=>{if(!z.defaultPrevented)switch(z.key){case"Enter":{z.preventDefault();const k=c.findIndex(L=>L.id===g);if(k>=0){const L=c[k];v(L,`No panel data found for index ${k}`);const O=s[k],{collapsedSize:$=0,collapsible:W,minSize:S=0}=L.constraints;if(O!=null&&W){const U=Se({delta:q(O,$)?S-$:$-O,initialLayout:s,panelConstraints:c.map(X=>X.constraints),pivotIndices:Vt(t,b,o),prevLayout:s,trigger:"keyboard"});s!==U&&a(U)}}break}}};return d.addEventListener("keydown",x),()=>{d.removeEventListener("keydown",x)}});return()=>{m.forEach(d=>d())}},[o,e,n,t,s,i,a])}function Pn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Ut(e,n){const t=e==="horizontal",{x:s,y:i}=Ze(n);return t?s:i}function jr(e,n,t,s,i){const o=t==="horizontal",a=Pe(n,i);v(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");v(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const h=Ut(t,e),R=pn(l,i);v(R,`No group element found for id "${l}"`);const m=R.getBoundingClientRect(),d=o?m.width:m.height;return(h-c)/d*100}function Pr(e,n,t,s,i,o){if(Ot(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:jr(e,n,t,s,o)}function Tr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];v(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,h=i/c;s++,n[o]=h,i-=h}return n}function fe(e,n,t){n.forEach((s,i)=>{const o=e[i];v(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:h=0,collapsible:R}=l,m=t[c];if(m==null||s!==m){t[c]=s;const{onCollapse:d,onExpand:b,onResize:g}=a;g&&g(s,m),R&&(d||b)&&(b&&(m==null||ne(m,h))&&!ne(s,h)&&b(),d&&(m==null||!ne(m,h))&&ne(s,h)&&d())}})}function Le(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Er({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Lr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function Tn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function qt(e){return`react-resizable-panels:${e}`}function Xt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Jt(e,n){try{const t=qt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function kr(e,n,t){var s,i;const o=(s=Jt(e,t))!==null&&s!==void 0?s:{},a=Xt(n);return(i=o[a])!==null&&i!==void 0?i:null}function Wr(e,n,t,s,i){var o;const a=qt(e),l=Xt(n),c=(o=Jt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(h){console.error(h)}}function En({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!q(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=ze({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!q(i,0))for(let o=0;o<n.length;o++){const a=t[o];v(a!=null,`No layout data found for index ${o}`);const l=a+i,c=ze({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,q(i,0)))break}return t}const Dr=100,we={getItem:e=>(Tn(we),we.getItem(e)),setItem:(e,n)=>{Tn(we),we.setItem(e,n)}},Ln={};function Yt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=we,style:h,tagName:R="div",...m}){const d=dn(o),b=V(null),[g,y]=be(null),[x,z]=be([]),k=yr(),L=V({}),O=V(new Map),$=V(0),W=V({autoSaveId:e,direction:s,dragState:g,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),S=V({layout:x,panelDataArray:[],panelDataArrayChanged:!1});V({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Dt(i,()=>({getId:()=>W.current.id,getLayout:()=>{const{layout:u}=S.current;return u},setLayout:u=>{const{onLayout:w}=W.current,{layout:j,panelDataArray:C}=S.current,I=En({layout:u,panelConstraints:C.map(T=>T.constraints)});Pn(j,I)||(z(I),S.current.layout=I,w&&w(I),fe(C,I,L.current))}}),[]),ce(()=>{W.current.autoSaveId=e,W.current.direction=s,W.current.dragState=g,W.current.id=d,W.current.onLayout=a,W.current.storage=c}),Cr({committedValuesRef:W,eagerValuesRef:S,groupId:d,layout:x,panelDataArray:S.current.panelDataArray,setLayout:z,panelGroupElement:b.current}),le(()=>{const{panelDataArray:u}=S.current;if(e){if(x.length===0||x.length!==u.length)return;let w=Ln[e];w==null&&(w=Lr(Wr,Dr),Ln[e]=w);const j=[...u],C=new Map(O.current);w(e,j,C,x,c)}},[e,x,c]),le(()=>{});const U=K(u=>{const{onLayout:w}=W.current,{layout:j,panelDataArray:C}=S.current;if(u.constraints.collapsible){const I=C.map(Q=>Q.constraints),{collapsedSize:T=0,panelSize:_,pivotIndices:N}=ie(C,u,j);if(v(_!=null,`Panel size not found for panel "${u.id}"`),!ne(_,T)){O.current.set(u.id,_);const ee=pe(C,u)===C.length-1?_-T:T-_,M=Se({delta:ee,initialLayout:j,panelConstraints:I,pivotIndices:N,prevLayout:j,trigger:"imperative-api"});Le(j,M)||(z(M),S.current.layout=M,w&&w(M),fe(C,M,L.current))}}},[]),X=K((u,w)=>{const{onLayout:j}=W.current,{layout:C,panelDataArray:I}=S.current;if(u.constraints.collapsible){const T=I.map(Y=>Y.constraints),{collapsedSize:_=0,panelSize:N=0,minSize:Q=0,pivotIndices:ee}=ie(I,u,C),M=w??Q;if(ne(N,_)){const Y=O.current.get(u.id),Re=Y!=null&&Y>=M?Y:M,rn=pe(I,u)===I.length-1?N-Re:Re-N,F=Se({delta:rn,initialLayout:C,panelConstraints:T,pivotIndices:ee,prevLayout:C,trigger:"imperative-api"});Le(C,F)||(z(F),S.current.layout=F,j&&j(F),fe(I,F,L.current))}}},[]),se=K(u=>{const{layout:w,panelDataArray:j}=S.current,{panelSize:C}=ie(j,u,w);return v(C!=null,`Panel size not found for panel "${u.id}"`),C},[]),J=K((u,w)=>{const{panelDataArray:j}=S.current,C=pe(j,u);return Er({defaultSize:w,dragState:g,layout:x,panelData:j,panelIndex:C})},[g,x]),A=K(u=>{const{layout:w,panelDataArray:j}=S.current,{collapsedSize:C=0,collapsible:I,panelSize:T}=ie(j,u,w);return v(T!=null,`Panel size not found for panel "${u.id}"`),I===!0&&ne(T,C)},[]),te=K(u=>{const{layout:w,panelDataArray:j}=S.current,{collapsedSize:C=0,collapsible:I,panelSize:T}=ie(j,u,w);return v(T!=null,`Panel size not found for panel "${u.id}"`),!I||de(T,C)>0},[]),H=K(u=>{const{panelDataArray:w}=S.current;w.push(u),w.sort((j,C)=>{const I=j.order,T=C.order;return I==null&&T==null?0:I==null?-1:T==null?1:I-T}),S.current.panelDataArrayChanged=!0,k()},[k]);ce(()=>{if(S.current.panelDataArrayChanged){S.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:w,storage:j}=W.current,{layout:C,panelDataArray:I}=S.current;let T=null;if(u){const N=kr(u,I,j);N&&(O.current=new Map(Object.entries(N.expandToSizes)),T=N.layout)}T==null&&(T=Tr({panelDataArray:I}));const _=En({layout:T,panelConstraints:I.map(N=>N.constraints)});Pn(C,_)||(z(_),S.current.layout=_,w&&w(_),fe(I,_,L.current))}}),ce(()=>{const u=S.current;return()=>{u.layout=[]}},[]);const B=K(u=>{let w=!1;const j=b.current;return j&&window.getComputedStyle(j,null).getPropertyValue("direction")==="rtl"&&(w=!0),function(I){I.preventDefault();const T=b.current;if(!T)return()=>null;const{direction:_,dragState:N,id:Q,keyboardResizeBy:ee,onLayout:M}=W.current,{layout:Y,panelDataArray:Re}=S.current,{initialLayout:Ee}=N??{},rn=Vt(Q,u,T);let F=Pr(I,u,_,N,ee,T);const zn=_==="horizontal";zn&&w&&(F=-F);const er=Re.map(nr=>nr.constraints),Ie=Se({delta:F,initialLayout:Ee??Y,panelConstraints:er,pivotIndices:rn,prevLayout:Y,trigger:Ot(I)?"keyboard":"mouse-or-touch"}),bn=!Le(Y,Ie);(At(I)||Nt(I))&&$.current!=F&&($.current=F,!bn&&F!==0?zn?on(u,F<0?Ht:Bt):on(u,F<0?Gt:Ft):on(u,0)),bn&&(z(Ie),S.current.layout=Ie,M&&M(Ie),fe(Re,Ie,L.current))}},[]),G=K((u,w)=>{const{onLayout:j}=W.current,{layout:C,panelDataArray:I}=S.current,T=I.map(Y=>Y.constraints),{panelSize:_,pivotIndices:N}=ie(I,u,C);v(_!=null,`Panel size not found for panel "${u.id}"`);const ee=pe(I,u)===I.length-1?_-w:w-_,M=Se({delta:ee,initialLayout:C,panelConstraints:T,pivotIndices:N,prevLayout:C,trigger:"imperative-api"});Le(C,M)||(z(M),S.current.layout=M,j&&j(M),fe(I,M,L.current))},[]),en=K((u,w)=>{const{layout:j,panelDataArray:C}=S.current,{collapsedSize:I=0,collapsible:T}=w,{collapsedSize:_=0,collapsible:N,maxSize:Q=100,minSize:ee=0}=u.constraints,{panelSize:M}=ie(C,u,j);M!=null&&(T&&N&&ne(M,I)?ne(I,_)||G(u,_):M<ee?G(u,ee):M>Q&&G(u,Q))},[G]),oe=K((u,w)=>{const{direction:j}=W.current,{layout:C}=S.current;if(!b.current)return;const I=Pe(u,b.current);v(I,`Drag handle element not found for id "${u}"`);const T=Ut(j,w);y({dragHandleId:u,dragHandleRect:I.getBoundingClientRect(),initialCursorPosition:T,initialLayout:C})},[]),nn=K(()=>{y(null)},[]),Te=K(u=>{const{panelDataArray:w}=S.current,j=pe(w,u);j>=0&&(w.splice(j,1),delete L.current[u.id],S.current.panelDataArrayChanged=!0,k())},[k]),tn=lr(()=>({collapsePanel:U,direction:s,dragState:g,expandPanel:X,getPanelSize:se,getPanelStyle:J,groupId:d,isPanelCollapsed:A,isPanelExpanded:te,reevaluatePanelConstraints:en,registerPanel:H,registerResizeHandle:B,resizePanel:G,startDragging:oe,stopDragging:nn,unregisterPanel:Te,panelGroupElement:b.current}),[U,g,s,X,se,J,d,A,te,en,H,B,G,oe,nn,Te]),ue={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return xe(Ye.Provider,{value:tn},xe(R,{...m,children:n,className:t,id:o,ref:b,style:{...ue,...h},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Zt=kt((e,n)=>xe(Yt,{...e,forwardedRef:n}));Yt.displayName="PanelGroup";Zt.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ie(e,n,t){const s=pe(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function _r({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){le(()=>{if(e||t==null||s==null)return;const i=Pe(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");v(l,`No group element found for id "${l}"`);const c=je(l,s),h=Kt(l,n,s);v(h!==null,`No resize element found for id "${n}"`);const R=a.shiftKey?h>0?h-1:c.length-1:h+1<c.length?h+1:0;c[R].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Qt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:h=0,tagName:R="div",...m}){var d,b;const g=V(null),y=V({onDragging:a});le(()=>{y.current.onDragging=a});const x=Wt(Ye);if(x===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:z,groupId:k,registerResizeHandle:L,startDragging:O,stopDragging:$,panelGroupElement:W}=x,S=dn(i),[U,X]=be("inactive"),[se,J]=be(!1),[A,te]=be(null),H=V({state:U});ce(()=>{H.current.state=U}),le(()=>{if(t)te(null);else{const oe=L(S);te(()=>oe)}},[t,S,L]);const B=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,G=(b=s==null?void 0:s.fine)!==null&&b!==void 0?b:5;return le(()=>{if(t||A==null)return;const oe=g.current;return v(oe,"Element ref not attached"),Ir(S,oe,z,{coarse:B,fine:G},(Te,tn,ue)=>{if(tn)switch(Te){case"down":{X("drag"),v(ue,'Expected event to be defined for "down" action'),O(S,ue);const{onDragging:u}=y.current;u&&u(!0);break}case"move":{const{state:u}=H.current;u!=="drag"&&X("hover"),v(ue,'Expected event to be defined for "move" action'),A(ue);break}case"up":{X("hover"),$();const{onDragging:u}=y.current;u&&u(!1);break}}else X("inactive")})},[B,z,t,G,L,S,A,O,$]),_r({disabled:t,handleId:S,resizeHandler:A,panelGroupElement:W}),xe(R,{...m,children:e,className:n,id:i,onBlur:()=>{J(!1),o==null||o()},onFocus:()=>{J(!0),l==null||l()},ref:g,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:h,"data-panel-group-direction":z,"data-panel-group-id":k,"data-resize-handle":"","data-resize-handle-active":U==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":U,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":S})}Qt.displayName="PanelResizeHandle";function Mr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Or,hn]=tr({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Ar=({id:e,ref:n,controlRef:t,direction:s="horizontal",isDisabled:i=!1,keyboardStep:o,storage:a,storageKey:l,groupProps:c,onLayout:h,...R})=>{const m=D.useRef(null),d=D.useId();e??(e=d);const b=D.useCallback((y={},x=null)=>({...y,ref:x,...R}),[R]),g=D.useCallback((y={})=>{const{as:x,...z}=c??{};return{...y,id:e,ref:rr(t,m),autoSaveId:l,direction:s,keyboardResizeBy:o,storage:a,tagName:x,onLayout:h,...z}},[e,s,c,t,l,o,h,a]);return D.useEffect(()=>{if(!e)return;const y=pn(e);ln(n)&&(n.current=y)},[n,e]),{controlRef:m,direction:s,isDisabled:i,getContainerProps:b,getGroupProps:g}},Nr=({id:e,ref:n,collapsedSize:t,collapsible:s,controlRef:i,defaultSize:o,maxSize:a,minSize:l,order:c,containerProps:h,onCollapse:R,onExpand:m,onResize:d,...b})=>{const g=D.useId();e??(e=g);const y=D.useCallback((z={})=>{const{as:k,...L}=h??{};return{...z,id:e,ref:i,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:a,minSize:l,order:c,tagName:k,onCollapse:R,onExpand:m,onResize:d,...L}},[e,i,h,t,s,o,a,l,R,m,d,c]),x=D.useCallback((z={},k=null)=>({...z,ref:k,...b}),[b]);return D.useEffect(()=>{if(!e)return;const z=Mr(e);ln(n)&&(n.current=z)},[n,e]),{getItemProps:x,getPanelProps:y}},$r=({id:e,ref:n,as:t,disabled:s,isDisabled:i,...o})=>{const a=D.useId();e??(e=a);const{controlRef:l,direction:c,isDisabled:h}=hn(),[R,m]=D.useState(!1),d=s||i||h,b=D.useCallback(x=>{var $,W;x.preventDefault();const z=($=l.current)==null?void 0:$.getLayout();if(!z)return;const L=100/z.length,O=z.map(()=>L);(W=l.current)==null||W.setLayout(O)},[l]),g=D.useCallback((x={})=>({...x,id:e,"aria-orientation":c,disabled:d,tagName:t,...o,style:{...x.style,...o.style,...d?{cursor:"default"}:{}},"data-active":xn(R),onDoubleClick:Rn(o.onDoubleClick,b),onDragging:Rn(o.onDragging,z=>m(z))}),[e,t,c,d,o,b,R]),y=D.useCallback((x={},z=null)=>({...x,ref:z,"data-active":xn(R)}),[R]);return D.useEffect(()=>{if(!e)return;const x=Pe(e);ln(n)&&(n.current=x)},[n,e]),{getIconProps:y,getTriggerProps:g}},E=Et(({direction:e="horizontal",...n},t)=>{const[s,i]=sr("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=or(i),{getContainerProps:h,getGroupProps:R,...m}=Ar({ref:t,...c}),d={h:"100%",w:"100%",...s.container};return r.jsx(Or,{value:{styles:s,...m},children:r.jsx(ve.div,{className:cn("ui-resizable",o),__css:d,...h({},l),children:r.jsx(Zt,{...R(),children:a})})})});E.displayName="Resizable";E.__ui__="Resizable";const Hr=new Set(["order"]),Br=ve(Mt,{disableStyleProp:e=>Hr.has(e)}),f=Et(({className:e,boxSize:n,children:t,h:s,height:i,innerRef:o,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:R,minHeight:m,minW:d,minWidth:b,w:g,width:y,...x},z)=>{const{styles:k}=hn(),{getItemProps:L,getPanelProps:O}=Nr({ref:z,...x}),$={boxSize:"100%",...k.item};return r.jsx(Br,{...O({boxSize:n,h:s,height:i,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:R,minHeight:m,minW:d,minWidth:b,w:g,width:y}),children:r.jsx(ve.div,{className:cn("ui-resizable__item",e),__css:$,...L({},o),children:t})})});f.displayName="ResizableItem";f.__ui__="ResizableItem";const P=D.forwardRef(({className:e,children:n,icon:t,iconProps:s,...i},o)=>{const{styles:a}=hn(),{getIconProps:l,getTriggerProps:c}=$r({ref:o,...i}),h={position:"relative",...a.trigger};return r.jsxs(ve.div,{as:Qt,className:cn("ui-resizable__trigger",e),__css:h,...c(),children:[t?r.jsx(ve.div,{className:"ui-resizable__trigger__icon",__css:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",transform:"auto",translateX:"-50%",translateY:"-50%",...a.icon},...l(s),children:t}):null,n]})});P.displayName="ResizableTrigger";P.__ui__="ResizableTrigger";const ds={component:E,title:"Components / Data Display / Resizable"},ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),We=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),De=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{colorScheme:"primary",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{colorScheme:"red",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",direction:"horizontal",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),Me=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,defaultSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Oe=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,maxSize:70,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ae=()=>r.jsxs(E,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]}),$e=()=>{const e=D.useRef(null),n=D.useRef(null),t=D.useRef(null),s=D.useRef(null),i=D.useRef(null);return D.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,borderWidth:"1px",containerRef:e,h:"md",rounded:"md",children:[r.jsx(f,{ref:t,as:p,innerRef:s,children:"One"}),r.jsx(P,{ref:i}),r.jsx(f,{as:p,children:"Two"})]})},He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",direction:"vertical",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(P,{icon:r.jsx(In,{})}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(yn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{icon:r.jsx(yn,{})}),r.jsx(f,{as:p,children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Bottom"})]})})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(P,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Right"})]})})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",isDisabled:!0,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Three"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(P,{isDisabled:!0}),r.jsx(f,{as:p,children:"Two"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Three"})]})]}),Ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]}),Ve=()=>{const[e,n]=gn(!0),[t,s]=gn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]}),r.jsxs(Lt,{gap:"md",children:[r.jsxs(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(he,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{id:"left",as:p,minSize:10,order:1,children:"Left"}),r.jsx(P,{})]}):null,r.jsx(f,{id:"middle",as:p,minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(P,{}),r.jsx(f,{id:"right",as:p,minSize:10,order:3,children:"Right"})]}):null]})]})},Ue=()=>{const e=D.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storage:e,storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(P,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]})},qe=()=>{const e=D.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Lt,{gap:"md",children:[r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),r.jsx(P,{}),r.jsx(f,{as:p,children:"Two"})]})]})};var kn,Wn,Dn;ke.parameters={...ke.parameters,docs:{...(kn=ke.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Dn=(Wn=ke.parameters)==null?void 0:Wn.docs)==null?void 0:Dn.source}}};var _n,Mn,On;We.parameters={...We.parameters,docs:{...(_n=We.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(On=(Mn=We.parameters)==null?void 0:Mn.docs)==null?void 0:On.source}}};var An,Nn,$n;De.parameters={...De.parameters,docs:{...(An=De.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...($n=(Nn=De.parameters)==null?void 0:Nn.docs)==null?void 0:$n.source}}};var Hn,Bn,Gn;_e.parameters={..._e.parameters,docs:{...(Hn=_e.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Bn=_e.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.source}}};var Fn,Kn,Vn;Me.parameters={...Me.parameters,docs:{...(Fn=Me.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=Me.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var Un,qn,Xn;Oe.parameters={...Oe.parameters,docs:{...(Un=Oe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Xn=(qn=Oe.parameters)==null?void 0:qn.docs)==null?void 0:Xn.source}}};var Jn,Yn,Zn;Ae.parameters={...Ae.parameters,docs:{...(Jn=Ae.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(at=(it=He.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;Be.parameters={...Be.parameters,docs:{...(lt=Be.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=Be.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,ft;Ge.parameters={...Ge.parameters,docs:{...(ut=Ge.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(ft=(mt=Ge.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var pt,ht,zt;Fe.parameters={...Fe.parameters,docs:{...(pt=Fe.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
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
}`,...(vt=(wt=Ue.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var Ct,jt,Pt;qe.parameters={...qe.parameters,docs:{...(Ct=qe.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(Pt=(jt=qe.parameters)==null?void 0:jt.docs)==null?void 0:Pt.source}}};const us=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{us as __namedExportsOrder,ke as basic,qe as customControls,Be as customIcon,ds as default,Fe as isDisabled,Ge as nestedResizable,Ue as useCookieStorage,Ve as useLocaleStorage,Ke as useOnResize,Ne as withCollapsible,De as withColorScheme,Me as withDefaultSize,_e as withDirection,He as withIcon,Ae as withKeyboardStep,Oe as withMinMaxSize,$e as withRefs,We as withVariant};
