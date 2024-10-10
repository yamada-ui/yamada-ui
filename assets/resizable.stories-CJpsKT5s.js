import{j as r}from"./extends-CwFRzn3r.js";import{u as bn}from"./index-CoJrGj-T.js";import{a as jt,r as _}from"./index-BwDkhjyp.js";import{o as Qt,h as er,d as gn,K as ln,b as ve,c as cn}from"./factory-BPGpAF5Z.js";import{f as Pt}from"./forward-ref-BWI-Phbn.js";import{a as nr}from"./use-component-style-vGTU0kmU.js";import{o as tr}from"./theme-provider-HQUvgn6k.js";import{G as xn,M as Rn}from"./move-horizontal-BAxo_k4B.js";import{C as p}from"./center-pJ5Ag6zE.js";import{W as Tt}from"./flex-Cjpz0lgM.js";import{B as ze}from"./button-9256ovQJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-DpgM6Xz3.js";import"./icon-BYVaiKtb.js";import"./use-var-CHlP19MT.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./loading-BJMWU62O.js";const{createElement:Re,createContext:rr,createRef:os,forwardRef:Et,useCallback:G,useContext:Lt,useEffect:ce,useImperativeHandle:Wt,useLayoutEffect:sr,useMemo:or,useRef:F,useState:ge}=jt,In=jt[`useId${Math.random()}`.slice(0,5)],ir=sr,Ze=rr(null);Ze.displayName="PanelGroupContext";const de=ir,ar=typeof In=="function"?In:()=>null;let lr=0;function dn(e=null){const n=ar(),t=F(e||n||null);return t.current===null&&(t.current=""+lr++),e??t.current}function kt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:h,onExpand:x,onResize:m,order:d,style:b,tagName:z="div",...v}){const j=Lt(Ze);if(j===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:g,expandPanel:L,getPanelSize:W,getPanelStyle:A,groupId:K,isPanelCollapsed:k,reevaluatePanelConstraints:R,registerPanel:V,resizePanel:q,unregisterPanel:se}=j,X=dn(a),O=F({callbacks:{onCollapse:h,onExpand:x,onResize:m},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:X,idIsFromProps:a!==void 0,order:d});F({didLogMissingDefaultSizeWarning:!1}),de(()=>{const{callbacks:N,constraints:H}=O.current,B={...H};O.current.id=X,O.current.idIsFromProps=a!==void 0,O.current.order=d,N.onCollapse=h,N.onExpand=x,N.onResize=m,H.collapsedSize=t,H.collapsible=s,H.defaultSize=i,H.maxSize=l,H.minSize=c,(B.collapsedSize!==H.collapsedSize||B.collapsible!==H.collapsible||B.maxSize!==H.maxSize||B.minSize!==H.minSize)&&R(O.current,B)}),de(()=>{const N=O.current;return V(N),()=>{se(N)}},[d,X,V,se]),Wt(o,()=>({collapse:()=>{g(O.current)},expand:N=>{L(O.current,N)},getId(){return X},getSize(){return W(O.current)},isCollapsed(){return k(O.current)},isExpanded(){return!k(O.current)},resize:N=>{q(O.current,N)}}),[g,L,W,k,X,q]);const te=A(O.current,i);return Re(z,{...v,children:e,className:n,id:a,style:{...te,...b},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":K,"data-panel-id":X,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Mt=Et((e,n)=>Re(kt,{...e,forwardedRef:n}));kt.displayName="Panel";Mt.displayName="forwardRef(Panel)";let an=null,le=null;function cr(e,n){if(n){const t=(n&$t)!==0,s=(n&Nt)!==0,i=(n&Ht)!==0,o=(n&Bt)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function dr(){le!==null&&(document.head.removeChild(le),an=null,le=null)}function sn(e,n){const t=cr(e,n);an!==t&&(an=t,le===null&&(le=document.createElement("style"),document.head.appendChild(le)),le.innerHTML=`*{cursor: ${t}!important;}`)}function Dt(e){return e.type==="keydown"}function _t(e){return e.type.startsWith("pointer")}function Ot(e){return e.type.startsWith("mouse")}function Qe(e){if(_t(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Ot(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function ur(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function mr(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function fr(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:wn(e),b:wn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;w(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:Sn(yn(t.a)),b:Sn(yn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const pr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function hr(e){var n;const t=getComputedStyle((n=At(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function zr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||hr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||pr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function yn(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),zr(t))return t}return null}function Sn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function wn(e){const n=[];for(;e;)n.push(e),e=At(e);return n}function At(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const $t=1,Nt=2,Ht=4,Bt=8,br=ur()==="coarse";let Q=[],xe=!1,re=new Map,en=new Map;const Ce=new Set;function gr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=re.get(a))!==null&&o!==void 0?o:0;return re.set(a,c+1),Ce.add(l),Je(),function(){var x;en.delete(e),Ce.delete(l);const m=(x=re.get(a))!==null&&x!==void 0?x:1;if(re.set(a,m-1),Je(),m===1&&re.delete(a),Q.includes(l)){const d=Q.indexOf(l);d>=0&&Q.splice(d,1),mn(),i("up",!0,null)}}}function vn(e){const{target:n}=e,{x:t,y:s}=Qe(e);xe=!0,un({target:n,x:t,y:s}),Je(),Q.length>0&&(Ye("down",e),e.preventDefault(),e.stopPropagation())}function ye(e){const{x:n,y:t}=Qe(e);if(xe&&e.buttons===0&&(xe=!1,Ye("up",e)),!xe){const{target:s}=e;un({target:s,x:n,y:t})}Ye("move",e),mn(),Q.length>0&&e.preventDefault()}function fe(e){const{target:n}=e,{x:t,y:s}=Qe(e);en.clear(),xe=!1,Q.length>0&&e.preventDefault(),Ye("up",e),un({target:n,x:t,y:s}),mn(),Je()}function un({target:e,x:n,y:t}){Q.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ce.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:h,right:x,top:m}=l,d=br?a.coarse:a.fine;if(n>=h-d&&n<=x+d&&t>=m-d&&t<=c+d){if(s!==null&&document.contains(s)&&o!==s&&!o.contains(s)&&!s.contains(o)&&fr(s,o)>0){let z=s,v=!1;for(;z&&!z.contains(o);){if(mr(z.getBoundingClientRect(),l)){v=!0;break}z=z.parentElement}if(v)return}Q.push(i)}})}function on(e,n){en.set(e,n)}function mn(){let e=!1,n=!1;Q.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;en.forEach(s=>{t|=s}),e&&n?sn("intersection",t):e?sn("horizontal",t):n?sn("vertical",t):dr()}function Je(){re.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",fe),t.removeEventListener("pointerdown",vn),t.removeEventListener("pointerleave",ye),t.removeEventListener("pointermove",ye)}),window.removeEventListener("pointerup",fe),window.removeEventListener("pointercancel",fe),Ce.size>0&&(xe?(Q.length>0&&re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",fe),t.addEventListener("pointerleave",ye),t.addEventListener("pointermove",ye))}),window.addEventListener("pointerup",fe),window.addEventListener("pointercancel",fe)):re.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("pointerdown",vn,{capture:!0}),t.addEventListener("pointermove",ye))}))}function Ye(e,n){Ce.forEach(t=>{const{setResizeHandlerState:s}=t,i=Q.includes(t);s(e,i,n)})}function xr(){const[e,n]=ge(0);return G(()=>n(t=>t+1),[])}function w(e,n){if(!e)throw console.error(n),Error(n)}const fn=10;function ue(e,n,t=fn){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=fn){return ue(e,n,t)===0}function U(e,n,t){return ue(e,n,t)===0}function Rr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!U(i,o,t))return!1}return!0}function be({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];w(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ue(t,l)<0)if(o){const c=(i+l)/2;ue(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(fn)),t}function Se({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(U(e,0))return n;const a=[...n],[l,c]=s;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let h=0;if(o==="keyboard"){{const m=e<0?c:l,d=t[m];w(d,`Panel constraints not found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:v=0}=d;if(z){const j=n[m];if(w(j!=null,`Previous layout not found for panel index ${m}`),U(j,b)){const g=v-j;ue(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const m=e<0?l:c,d=t[m];w(d,`No panel constraints found for index ${m}`);const{collapsedSize:b=0,collapsible:z,minSize:v=0}=d;if(z){const j=n[m];if(w(j!=null,`Previous layout not found for panel index ${m}`),U(j,v)){const g=j-b;ue(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}}{const m=e<0?1:-1;let d=e<0?c:l,b=0;for(;;){const v=n[d];w(v!=null,`Previous layout not found for panel index ${d}`);const g=be({panelConstraints:t,panelIndex:d,size:100})-v;if(b+=g,d+=m,d<0||d>=t.length)break}const z=Math.min(Math.abs(e),Math.abs(b));e=e<0?0-z:z}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const b=Math.abs(e)-Math.abs(h),z=n[d];w(z!=null,`Previous layout not found for panel index ${d}`);const v=z-b,j=be({panelConstraints:t,panelIndex:d,size:v});if(!U(z,j)&&(h+=z-j,a[d]=j,h.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(Rr(i,a))return i;{const m=e<0?c:l,d=n[m];w(d!=null,`Previous layout not found for panel index ${m}`);const b=d+h,z=be({panelConstraints:t,panelIndex:m,size:b});if(a[m]=z,!U(z,b)){let v=b-z,g=e<0?c:l;for(;g>=0&&g<t.length;){const L=a[g];w(L!=null,`Previous layout not found for panel index ${g}`);const W=L+v,A=be({panelConstraints:t,panelIndex:g,size:W});if(U(L,A)||(v-=A-L,a[g]=A),U(v,0))break;e>0?g--:g++}}}const x=a.reduce((m,d)=>d+m,0);return U(x,100)?a:i}function Ir({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((m,d)=>{const{constraints:b}=m,{maxSize:z=100,minSize:v=0}=b;d===l?(s=v,i=z):(o+=v,a+=z)});const c=Math.min(i,100-o),h=Math.max(s,100-a),x=e[l];return{valueMax:c,valueMin:h,valueNow:x}}function je(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Gt(e,n,t=document){const i=je(e,t).findIndex(o=>o.getAttribute("data-panel-resize-handle-id")===n);return i??null}function Ft(e,n,t){const s=Gt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function pn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function Pe(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function yr(e,n,t,s=document){var i,o,a,l;const c=Pe(n,s),h=je(e,s),x=c?h.indexOf(c):-1,m=(i=(o=t[x])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[x+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[m,d]}function Sr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){F({didWarnAboutMissingResizeHandle:!1}),de(()=>{if(!o)return;const l=je(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:h,valueMin:x,valueNow:m}=Ir({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const b=i[c];w(b,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",b.id),d.setAttribute("aria-valuemax",""+Math.round(h)),d.setAttribute("aria-valuemin",""+Math.round(x)),d.setAttribute("aria-valuenow",m!=null?""+Math.round(m):"")}}return()=>{l.forEach((c,h)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),ce(()=>{if(!o)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,h=pn(t,o);w(h!=null,`No group found for id "${t}"`);const x=je(t,o);w(x,`No resize handles found for group id "${t}"`);const m=x.map(d=>{const b=d.getAttribute("data-panel-resize-handle-id");w(b,"Resize handle element has no handle id attribute");const[z,v]=yr(t,b,c,o);if(z==null||v==null)return()=>{};const j=g=>{if(!g.defaultPrevented)switch(g.key){case"Enter":{g.preventDefault();const L=c.findIndex(W=>W.id===z);if(L>=0){const W=c[L];w(W,`No panel data found for index ${L}`);const A=s[L],{collapsedSize:K=0,collapsible:k,minSize:R=0}=W.constraints;if(A!=null&&k){const V=Se({delta:U(A,K)?R-K:K-A,initialLayout:s,panelConstraints:c.map(q=>q.constraints),pivotIndices:Ft(t,b,o),prevLayout:s,trigger:"keyboard"});s!==V&&a(V)}}break}}};return d.addEventListener("keydown",j),()=>{d.removeEventListener("keydown",j)}});return()=>{m.forEach(d=>d())}},[o,e,n,t,s,i,a])}function Cn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Kt(e,n){const t=e==="horizontal",{x:s,y:i}=Qe(n);return t?s:i}function wr(e,n,t,s,i){const o=t==="horizontal",a=Pe(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute("data-panel-group-id");w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const h=Kt(t,e),x=pn(l,i);w(x,`No group element found for id "${l}"`);const m=x.getBoundingClientRect(),d=o?m.width:m.height;return(h-c)/d*100}function vr(e,n,t,s,i,o){if(Dt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:wr(e,n,t,s,o)}function Cr({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,h=i/c;s++,n[o]=h,i-=h}return n}function pe(e,n,t){n.forEach((s,i)=>{const o=e[i];w(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:h=0,collapsible:x}=l,m=t[c];if(m==null||s!==m){t[c]=s;const{onCollapse:d,onExpand:b,onResize:z}=a;z&&z(s,m),x&&(d||b)&&(b&&(m==null||ne(m,h))&&!ne(s,h)&&b(),d&&(m==null||!ne(m,h))&&ne(s,h)&&d())}})}function We(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function jr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Pr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function jn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Vt(e){return`react-resizable-panels:${e}`}function Ut(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function qt(e,n){try{const t=Vt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Tr(e,n,t){var s,i;const o=(s=qt(e,t))!==null&&s!==void 0?s:{},a=Ut(n);return(i=o[a])!==null&&i!==void 0?i:null}function Er(e,n,t,s,i){var o;const a=Vt(e),l=Ut(n),c=(o=qt(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(h){console.error(h)}}function Pn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!U(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=be({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!U(i,0))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=a+i,c=be({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,U(i,0)))break}return t}const Lr=100,we={getItem:e=>(jn(we),we.getItem(e)),setItem:(e,n)=>{jn(we),we.setItem(e,n)}},Tn={};function Xt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=we,style:h,tagName:x="div",...m}){const d=dn(o),b=F(null),[z,v]=ge(null),[j,g]=ge([]),L=xr(),W=F({}),A=F(new Map),K=F(0),k=F({autoSaveId:e,direction:s,dragState:z,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),R=F({layout:j,panelDataArray:[],panelDataArrayChanged:!1});F({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Wt(i,()=>({getId:()=>k.current.id,getLayout:()=>{const{layout:u}=R.current;return u},setLayout:u=>{const{onLayout:C}=k.current,{layout:S,panelDataArray:I}=R.current,y=Pn({layout:u,panelConstraints:I.map(P=>P.constraints)});Cn(S,y)||(g(y),R.current.layout=y,C&&C(y),pe(I,y,W.current))}}),[]),de(()=>{k.current.autoSaveId=e,k.current.direction=s,k.current.dragState=z,k.current.id=d,k.current.onLayout=a,k.current.storage=c}),Sr({committedValuesRef:k,eagerValuesRef:R,groupId:d,layout:j,panelDataArray:R.current.panelDataArray,setLayout:g,panelGroupElement:b.current}),ce(()=>{const{panelDataArray:u}=R.current;if(e){if(j.length===0||j.length!==u.length)return;let C=Tn[e];C==null&&(C=Pr(Er,Lr),Tn[e]=C);const S=[...u],I=new Map(A.current);C(e,S,I,j,c)}},[e,j,c]),ce(()=>{});const V=G(u=>{const{onLayout:C}=k.current,{layout:S,panelDataArray:I}=R.current;if(u.constraints.collapsible){const y=I.map(Y=>Y.constraints),{collapsedSize:P=0,panelSize:M,pivotIndices:$}=ae(I,u,S);if(w(M!=null,`Panel size not found for panel "${u.id}"`),!ne(M,P)){A.current.set(u.id,M);const J=he(I,u)===I.length-1?M-P:P-M,D=Se({delta:J,initialLayout:S,panelConstraints:y,pivotIndices:$,prevLayout:S,trigger:"imperative-api"});We(S,D)||(g(D),R.current.layout=D,C&&C(D),pe(I,D,W.current))}}},[]),q=G((u,C)=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:y}=R.current;if(u.constraints.collapsible){const P=y.map(Z=>Z.constraints),{collapsedSize:M=0,panelSize:$=0,minSize:Y=0,pivotIndices:J}=ae(y,u,I),D=C??Y;if(ne($,M)){const Z=A.current.get(u.id),Ee=Z!=null&&Z>=D?Z:D,Le=he(y,u)===y.length-1?$-Ee:Ee-$,ie=Se({delta:Le,initialLayout:I,panelConstraints:P,pivotIndices:J,prevLayout:I,trigger:"imperative-api"});We(I,ie)||(g(ie),R.current.layout=ie,S&&S(ie),pe(y,ie,W.current))}}},[]),se=G(u=>{const{layout:C,panelDataArray:S}=R.current,{panelSize:I}=ae(S,u,C);return w(I!=null,`Panel size not found for panel "${u.id}"`),I},[]),X=G((u,C)=>{const{panelDataArray:S}=R.current,I=he(S,u);return jr({defaultSize:C,dragState:z,layout:j,panelData:S,panelIndex:I})},[z,j]),O=G(u=>{const{layout:C,panelDataArray:S}=R.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,u,C);return w(P!=null,`Panel size not found for panel "${u.id}"`),y===!0&&ne(P,I)},[]),te=G(u=>{const{layout:C,panelDataArray:S}=R.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=ae(S,u,C);return w(P!=null,`Panel size not found for panel "${u.id}"`),!y||ue(P,I)>0},[]),N=G(u=>{const{panelDataArray:C}=R.current;C.push(u),C.sort((S,I)=>{const y=S.order,P=I.order;return y==null&&P==null?0:y==null?-1:P==null?1:y-P}),R.current.panelDataArrayChanged=!0,L()},[L]);de(()=>{if(R.current.panelDataArrayChanged){R.current.panelDataArrayChanged=!1;const{autoSaveId:u,onLayout:C,storage:S}=k.current,{layout:I,panelDataArray:y}=R.current;let P=null;if(u){const $=Tr(u,y,S);$&&(A.current=new Map(Object.entries($.expandToSizes)),P=$.layout)}P==null&&(P=Cr({panelDataArray:y}));const M=Pn({layout:P,panelConstraints:y.map($=>$.constraints)});Cn(I,M)||(g(M),R.current.layout=M,C&&C(M),pe(y,M,W.current))}}),de(()=>{const u=R.current;return()=>{u.layout=[]}},[]);const H=G(u=>function(S){S.preventDefault();const I=b.current;if(!I)return()=>null;const{direction:y,dragState:P,id:M,keyboardResizeBy:$,onLayout:Y}=k.current,{layout:J,panelDataArray:D}=R.current,{initialLayout:Z}=P??{},Ee=Ft(M,u,I);let ee=vr(S,u,y,P,$,I);const Le=y==="horizontal";document.dir==="rtl"&&Le&&(ee=-ee);const ie=D.map(Zt=>Zt.constraints),Ie=Se({delta:ee,initialLayout:Z??J,panelConstraints:ie,pivotIndices:Ee,prevLayout:J,trigger:Dt(S)?"keyboard":"mouse-or-touch"}),zn=!We(J,Ie);(_t(S)||Ot(S))&&K.current!=ee&&(K.current=ee,!zn&&ee!==0?Le?on(u,ee<0?$t:Nt):on(u,ee<0?Ht:Bt):on(u,0)),zn&&(g(Ie),R.current.layout=Ie,Y&&Y(Ie),pe(D,Ie,W.current))},[]),B=G((u,C)=>{const{onLayout:S}=k.current,{layout:I,panelDataArray:y}=R.current,P=y.map(Z=>Z.constraints),{panelSize:M,pivotIndices:$}=ae(y,u,I);w(M!=null,`Panel size not found for panel "${u.id}"`);const J=he(y,u)===y.length-1?M-C:C-M,D=Se({delta:J,initialLayout:I,panelConstraints:P,pivotIndices:$,prevLayout:I,trigger:"imperative-api"});We(I,D)||(g(D),R.current.layout=D,S&&S(D),pe(y,D,W.current))},[]),nn=G((u,C)=>{const{layout:S,panelDataArray:I}=R.current,{collapsedSize:y=0,collapsible:P}=C,{collapsedSize:M=0,collapsible:$,maxSize:Y=100,minSize:J=0}=u.constraints,{panelSize:D}=ae(I,u,S);D!=null&&(P&&$&&ne(D,y)?ne(y,M)||B(u,M):D<J?B(u,J):D>Y&&B(u,Y))},[B]),oe=G((u,C)=>{const{direction:S}=k.current,{layout:I}=R.current;if(!b.current)return;const y=Pe(u,b.current);w(y,`Drag handle element not found for id "${u}"`);const P=Kt(S,C);v({dragHandleId:u,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:P,initialLayout:I})},[]),tn=G(()=>{v(null)},[]),Te=G(u=>{const{panelDataArray:C}=R.current,S=he(C,u);S>=0&&(C.splice(S,1),delete W.current[u.id],R.current.panelDataArrayChanged=!0,L())},[L]),rn=or(()=>({collapsePanel:V,direction:s,dragState:z,expandPanel:q,getPanelSize:se,getPanelStyle:X,groupId:d,isPanelCollapsed:O,isPanelExpanded:te,reevaluatePanelConstraints:nn,registerPanel:N,registerResizeHandle:H,resizePanel:B,startDragging:oe,stopDragging:tn,unregisterPanel:Te,panelGroupElement:b.current}),[V,z,s,q,se,X,d,O,te,nn,N,H,B,oe,tn,Te]),me={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Re(Ze.Provider,{value:rn},Re(x,{...m,children:n,className:t,id:o,ref:b,style:{...me,...h},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":d}))}const Jt=Et((e,n)=>Re(Xt,{...e,forwardedRef:n}));Xt.displayName="PanelGroup";Jt.displayName="forwardRef(PanelGroup)";function he(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function ae(e,n,t){const s=he(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function Wr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){ce(()=>{if(e||t==null||s==null)return;const i=Pe(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute("data-panel-group-id");w(l,`No group element found for id "${l}"`);const c=je(l,s),h=Gt(l,n,s);w(h!==null,`No resize element found for id "${n}"`);const x=a.shiftKey?h>0?h-1:c.length-1:h+1<c.length?h+1:0;c[x].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Yt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onDragging:a,onFocus:l,style:c={},tabIndex:h=0,tagName:x="div",...m}){var d,b;const z=F(null),v=F({onDragging:a});ce(()=>{v.current.onDragging=a});const j=Lt(Ze);if(j===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:g,groupId:L,registerResizeHandle:W,startDragging:A,stopDragging:K,panelGroupElement:k}=j,R=dn(i),[V,q]=ge("inactive"),[se,X]=ge(!1),[O,te]=ge(null),N=F({state:V});de(()=>{N.current.state=V}),ce(()=>{if(t)te(null);else{const oe=W(R);te(()=>oe)}},[t,R,W]);const H=(d=s==null?void 0:s.coarse)!==null&&d!==void 0?d:15,B=(b=s==null?void 0:s.fine)!==null&&b!==void 0?b:5;return ce(()=>{if(t||O==null)return;const oe=z.current;return w(oe,"Element ref not attached"),gr(R,oe,g,{coarse:H,fine:B},(Te,rn,me)=>{if(rn)switch(Te){case"down":{q("drag"),w(me,'Expected event to be defined for "down" action'),A(R,me);const{onDragging:u}=v.current;u&&u(!0);break}case"move":{const{state:u}=N.current;u!=="drag"&&q("hover"),w(me,'Expected event to be defined for "move" action'),O(me);break}case"up":{q("hover"),K();const{onDragging:u}=v.current;u&&u(!1);break}}else q("inactive")})},[H,g,t,B,W,R,O,A,K]),Wr({disabled:t,handleId:R,resizeHandler:O,panelGroupElement:k}),Re(x,{...m,children:e,className:n,id:i,onBlur:()=>{X(!1),o==null||o()},onFocus:()=>{X(!0),l==null||l()},ref:z,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...c},tabIndex:h,"data-panel-group-direction":g,"data-panel-group-id":L,"data-resize-handle":"","data-resize-handle-active":V==="drag"?"pointer":se?"keyboard":void 0,"data-resize-handle-state":V,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":R})}Yt.displayName="PanelResizeHandle";function kr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Mr,hn]=Qt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Dr=({id:e,ref:n,direction:t="horizontal",isDisabled:s=!1,keyboardStep:i,storage:o,storageKey:a,groupProps:l,onLayout:c,...h})=>{const x=_.useId();e??(e=x);const m=_.useCallback((b={},z=null)=>({...b,ref:z,...h}),[h]),d=_.useCallback((b={})=>{const{as:z,...v}=l??{};return{...b,id:e,autoSaveId:a,direction:t,keyboardResizeBy:i,storage:o,tagName:z,onLayout:c,...v}},[e,t,l,a,i,c,o]);return _.useEffect(()=>{if(!e)return;const b=pn(e);ln(n)&&(n.current=b)},[n,e]),{isDisabled:s,getContainerProps:m,getGroupProps:d}},_r=({id:e,ref:n,collapsedSize:t,collapsible:s,controlRef:i,defaultSize:o,maxSize:a,minSize:l,order:c,containerProps:h,onCollapse:x,onExpand:m,onResize:d,...b})=>{const z=_.useId();e??(e=z);const v=_.useCallback((g={})=>{const{as:L,...W}=h??{};return{...g,id:e,ref:i,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:a,minSize:l,order:c,tagName:L,onCollapse:x,onExpand:m,onResize:d,...s?{"aria-labelledby":e}:{"aria-label":e},...W}},[e,i,h,t,s,o,a,l,x,m,d,c]),j=_.useCallback((g={},L=null)=>({...g,ref:L,...b}),[b]);return _.useEffect(()=>{if(!e)return;const g=kr(e);ln(n)&&(n.current=g)},[n,e]),{getItemProps:j,getPanelProps:v}},Or=({id:e,ref:n,as:t,disabled:s,isDisabled:i,onDragging:o,...a})=>{const l=_.useId();e??(e=l);const{isDisabled:c}=hn(),[h,x]=_.useState(!1),m=s||i||c,d=_.useCallback((z={})=>({...z,id:e,disabled:m,tagName:t,onDragging:er(o,v=>x(v)),...a,style:{...z.style,...a.style,...m?{cursor:"default"}:{}},"data-active":gn(h)}),[e,t,m,o,a,h]),b=_.useCallback((z={},v=null)=>({...z,ref:v,"data-active":gn(h)}),[h]);return _.useEffect(()=>{if(!e)return;const z=Pe(e);ln(n)&&(n.current=z)},[n,e]),{getIconProps:b,getTriggerProps:d}},E=Pt(({direction:e="horizontal",...n},t)=>{const[s,i]=nr("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:l,...c}=tr(i),{getContainerProps:h,getGroupProps:x,...m}=Dr({ref:t,...c}),d={h:"100%",w:"100%",...s.container};return r.jsx(Mr,{value:{styles:s,...m},children:r.jsx(ve.div,{className:cn("ui-resizable",o),__css:d,...h({},l),children:r.jsx(Jt,{...x(),children:a})})})}),Ar=new Set(["order"]),$r=ve(Mt,{disableStyleProp:e=>Ar.has(e)}),f=Pt(({className:e,boxSize:n,children:t,h:s,height:i,innerRef:o,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:x,minHeight:m,minW:d,minWidth:b,w:z,width:v,...j},g)=>{const{styles:L}=hn(),{getItemProps:W,getPanelProps:A}=_r({ref:g,...j}),K={boxSize:"100%",...L.item};return r.jsx($r,{...A({boxSize:n,h:s,height:i,maxH:a,maxHeight:l,maxW:c,maxWidth:h,minH:x,minHeight:m,minW:d,minWidth:b,w:z,width:v}),children:r.jsx(ve.div,{className:cn("ui-resizable__item",e),__css:K,...W({},o),children:t})})}),T=_.forwardRef(({className:e,children:n,icon:t,iconProps:s,...i},o)=>{const{styles:a}=hn(),{getIconProps:l,getTriggerProps:c}=Or({ref:o,...i}),h={position:"relative",...a.trigger};return r.jsxs(ve.div,{as:Yt,className:cn("ui-resizable__trigger",e),__css:h,...c(),children:[t?r.jsx(ve.div,{className:"ui-resizable__trigger__icon",__css:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",transform:"auto",translateX:"-50%",translateY:"-50%",...a.icon},...l(s),children:t}):null,n]})});T.displayName="ResizableTrigger";const is={component:E,title:"Components / Data Display / Resizable"},ke=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Me=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),De=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{colorScheme:"primary",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(E,{colorScheme:"red",variant:"spacer",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",direction:"horizontal",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),Oe=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ae=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,maxSize:70,minSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),$e=()=>r.jsxs(E,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]}),He=()=>{const e=_.useRef(null),n=_.useRef(null),t=_.useRef(null),s=_.useRef(null),i=_.useRef(null);return _.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(E,{ref:n,borderWidth:"1px",containerRef:e,h:"md",rounded:"md",children:[r.jsx(f,{ref:t,as:p,innerRef:s,children:"One"}),r.jsx(T,{ref:i}),r.jsx(f,{as:p,children:"Two"})]})},Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{variant:"spacer",direction:"vertical",h:"md",children:[r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(T,{icon:r.jsx(xn,{})}),r.jsx(f,{as:p,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Ge=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:p,children:"Two"})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{icon:r.jsx(Rn,{})}),r.jsx(f,{as:p,children:"Two"})]})]}),Fe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Bottom"})]})})]}),r.jsxs(E,{borderWidth:"1px",direction:"vertical",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"Top"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:p,children:"Left"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Right"})]})})]})]}),Ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",isDisabled:!0,rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(f,{as:p,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Three"})]})]}),Ve=()=>r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]}),Ue=()=>{const[e,n]=bn(!0),[t,s]=bn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]}),r.jsxs(Tt,{gap:"md",children:[r.jsxs(ze,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(ze,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{id:"left",as:p,minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(f,{id:"middle",as:p,minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(f,{id:"right",as:p,minSize:10,order:3,children:"Right"})]}):null]})]})},qe=()=>{const e=_.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",storage:e,storageKey:"persistence",children:[r.jsx(f,{id:"one",as:p,children:"One"}),r.jsx(T,{}),r.jsx(f,{id:"two",as:p,children:"Two"})]})},Xe=()=>{const e=_.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(Tt,{gap:"md",children:[r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(ze,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(f,{as:p,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:p,children:"Two"})]})]})};var En,Ln,Wn;ke.parameters={...ke.parameters,docs:{...(En=ke.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Wn=(Ln=ke.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var kn,Mn,Dn;Me.parameters={...Me.parameters,docs:{...(kn=Me.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Mn=Me.parameters)==null?void 0:Mn.docs)==null?void 0:Dn.source}}};var _n,On,An;De.parameters={...De.parameters,docs:{...(_n=De.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(An=(On=De.parameters)==null?void 0:On.docs)==null?void 0:An.source}}};var $n,Nn,Hn;_e.parameters={..._e.parameters,docs:{...($n=_e.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Hn=(Nn=_e.parameters)==null?void 0:Nn.docs)==null?void 0:Hn.source}}};var Bn,Gn,Fn;Oe.parameters={...Oe.parameters,docs:{...(Bn=Oe.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Fn=(Gn=Oe.parameters)==null?void 0:Gn.docs)==null?void 0:Fn.source}}};var Kn,Vn,Un;Ae.parameters={...Ae.parameters,docs:{...(Kn=Ae.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Un=(Vn=Ae.parameters)==null?void 0:Vn.docs)==null?void 0:Un.source}}};var qn,Xn,Jn;$e.parameters={...$e.parameters,docs:{...(qn=$e.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Jn=(Xn=$e.parameters)==null?void 0:Xn.docs)==null?void 0:Jn.source}}};var Yn,Zn,Qn;Ne.parameters={...Ne.parameters,docs:{...(Yn=Ne.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Zn=Ne.parameters)==null?void 0:Zn.docs)==null?void 0:Qn.source}}};var et,nt,tt;He.parameters={...He.parameters,docs:{...(et=He.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(tt=(nt=He.parameters)==null?void 0:nt.docs)==null?void 0:tt.source}}};var rt,st,ot;Be.parameters={...Be.parameters,docs:{...(rt=Be.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable variant="spacer" direction="vertical" h="md">
        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          One
        </ResizableItem>

        <ResizableTrigger icon={<GripVertical />} />

        <ResizableItem as={Center} borderWidth="1px" rounded="md">
          Two
        </ResizableItem>
      </Resizable>
    </>;
}`,...(ot=(st=Be.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,at,lt;Ge.parameters={...Ge.parameters,docs:{...(it=Ge.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <>
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>

      <Resizable borderWidth="1px" direction="vertical" h="md" rounded="md">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger icon={<MoveHorizontal />} />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>
    </>;
}`,...(lt=(at=Ge.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ct,dt,ut;Fe.parameters={...Fe.parameters,docs:{...(ct=Fe.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
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
}`,...(ut=(dt=Fe.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,ft,pt;Ke.parameters={...Ke.parameters,docs:{...(mt=Ke.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
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
}`,...(pt=(ft=Ke.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var ht,zt,bt;Ve.parameters={...Ve.parameters,docs:{...(ht=Ve.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(bt=(zt=Ve.parameters)==null?void 0:zt.docs)==null?void 0:bt.source}}};var gt,xt,Rt;Ue.parameters={...Ue.parameters,docs:{...(gt=Ue.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
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
}`,...(Rt=(xt=Ue.parameters)==null?void 0:xt.docs)==null?void 0:Rt.source}}};var It,yt,St;qe.parameters={...qe.parameters,docs:{...(It=qe.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
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
}`,...(St=(yt=qe.parameters)==null?void 0:yt.docs)==null?void 0:St.source}}};var wt,vt,Ct;Xe.parameters={...Xe.parameters,docs:{...(wt=Xe.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
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
}`,...(Ct=(vt=Xe.parameters)==null?void 0:vt.docs)==null?void 0:Ct.source}}};const as=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{as as __namedExportsOrder,ke as basic,Xe as customControls,Ge as customIcon,is as default,Ke as isDisabled,Fe as nestedResizable,qe as useCookieStorage,Ue as useLocaleStorage,Ve as useOnResize,Ne as withCollapsible,De as withColorScheme,Oe as withDefaultSize,_e as withDirection,Be as withIcon,$e as withKeyboardStep,Ae as withMinMaxSize,He as withRefs,Me as withVariant};
