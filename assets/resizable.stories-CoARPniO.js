import{j as r}from"./jsx-runtime-DztICxWZ.js";import{r as u,a as Jt}from"./index-Bv9Y92EF.js";import{B as Yt,a as Zt,X as on,h as zn,d as bn,b as Se,c as an}from"./factory-7Z88KRtK.js";import{f as wt}from"./forward-ref-DH6f5tnY.js";import{a as Qt}from"./use-component-style-DHLtMqa5.js";import{o as er}from"./theme-provider-DsbwOWxu.js";import{G as gn,M as xn}from"./move-horizontal-DRz_2kS6.js";import{C as h}from"./center-D6SfTFGO.js";import{u as Rn}from"./index-YFprnXPi.js";import{W as jt}from"./flex-B0SWTXUi.js";import{B as ue}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";import"./createLucideIcon-Bq8XVWwL.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";const qe=u.createContext(null);qe.displayName="PanelGroupContext";const H={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},ln=10,ie=u.useLayoutEffect,In=Jt.useId,nr=typeof In=="function"?In:()=>null;let tr=0;function cn(e=null){const n=nr(),t=u.useRef(e||n||null);return t.current===null&&(t.current=""+tr++),e??t.current}function Pt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:i,forwardedRef:o,id:a,maxSize:l,minSize:c,onCollapse:b,onExpand:I,onResize:f,order:d,style:x,tagName:R="div",...P}){const S=u.useContext(qe);if(S===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:z,expandPanel:E,getPanelSize:W,getPanelStyle:_,groupId:G,isPanelCollapsed:M,reevaluatePanelConstraints:T,registerPanel:q,resizePanel:ee,unregisterPanel:U}=S,F=cn(a),O=u.useRef({callbacks:{onCollapse:b,onExpand:I,onResize:f},constraints:{collapsedSize:t,collapsible:s,defaultSize:i,maxSize:l,minSize:c},id:F,idIsFromProps:a!==void 0,order:d});u.useRef({didLogMissingDefaultSizeWarning:!1}),ie(()=>{const{callbacks:B,constraints:$}=O.current,K={...$};O.current.id=F,O.current.idIsFromProps=a!==void 0,O.current.order=d,B.onCollapse=b,B.onExpand=I,B.onResize=f,$.collapsedSize=t,$.collapsible=s,$.defaultSize=i,$.maxSize=l,$.minSize=c,(K.collapsedSize!==$.collapsedSize||K.collapsible!==$.collapsible||K.maxSize!==$.maxSize||K.minSize!==$.minSize)&&T(O.current,K)}),ie(()=>{const B=O.current;return q(B),()=>{U(B)}},[d,F,q,U]),u.useImperativeHandle(o,()=>({collapse:()=>{z(O.current)},expand:B=>{E(O.current,B)},getId(){return F},getSize(){return W(O.current)},isCollapsed(){return M(O.current)},isExpanded(){return!M(O.current)},resize:B=>{ee(O.current,B)}}),[z,E,W,M,F,ee]);const re=_(O.current,i);return u.createElement(R,{...P,children:e,className:n,id:F,style:{...re,...x},[H.groupId]:G,[H.panel]:"",[H.panelCollapsible]:s||void 0,[H.panelId]:F,[H.panelSize]:parseFloat(""+re.flexGrow).toFixed(1)})}const Tt=u.forwardRef((e,n)=>u.createElement(Pt,{...e,forwardedRef:n}));Pt.displayName="Panel";Tt.displayName="forwardRef(Panel)";let sn=null,Ve=-1,te=null;function rr(e,n){if(n){const t=(n&Mt)!==0,s=(n&Dt)!==0,i=(n&_t)!==0,o=(n&At)!==0;if(t)return i?"se-resize":o?"ne-resize":"e-resize";if(s)return i?"sw-resize":o?"nw-resize":"w-resize";if(i)return"s-resize";if(o)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function sr(){te!==null&&(document.head.removeChild(te),sn=null,te=null,Ve=-1)}function Qe(e,n){var t,s;const i=rr(e,n);if(sn!==i){if(sn=i,te===null&&(te=document.createElement("style"),document.head.appendChild(te)),Ve>=0){var o;(o=te.sheet)===null||o===void 0||o.removeRule(Ve)}Ve=(t=(s=te.sheet)===null||s===void 0?void 0:s.insertRule(`*{cursor: ${i} !important;}`))!==null&&t!==void 0?t:-1}}function Et(e){return e.type==="keydown"}function kt(e){return e.type.startsWith("pointer")}function Lt(e){return e.type.startsWith("mouse")}function Je(e){if(kt(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Lt(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function or(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ir(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function ar(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Cn(e),b:Cn(n)};let s;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),s=e;w(s,"Stacking order can only be calculated for elements with a common ancestor");const i={a:yn(Sn(t.a)),b:yn(Sn(t.b))};if(i.a===i.b){const o=s.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=o.length;for(;l--;){const c=o[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const lr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function cr(e){var n;const t=getComputedStyle((n=Wt(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function dr(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||cr(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||lr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Sn(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),dr(t))return t}return null}function yn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Cn(e){const n=[];for(;e;)n.push(e),e=Wt(e);return n}function Wt(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Mt=1,Dt=2,_t=4,At=8,ur=or()==="coarse";let Y=[],me=!1,oe=new Map,Ye=new Map;const ye=new Set;function fr(e,n,t,s,i){var o;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:i},c=(o=oe.get(a))!==null&&o!==void 0?o:0;return oe.set(a,c+1),ye.add(l),Ue(),function(){var I;Ye.delete(e),ye.delete(l);const f=(I=oe.get(a))!==null&&I!==void 0?I:1;if(oe.set(a,f-1),Ue(),f===1&&oe.delete(a),Y.includes(l)){const d=Y.indexOf(l);d>=0&&Y.splice(d,1),un(),i("up",!0,null)}}}function mr(e){const{target:n}=e,{x:t,y:s}=Je(e);me=!0,dn({target:n,x:t,y:s}),Ue(),Y.length>0&&(Xe("down",e),e.preventDefault(),Ht(n)||e.stopImmediatePropagation())}function en(e){const{x:n,y:t}=Je(e);if(me&&e.buttons===0&&(me=!1,Xe("up",e)),!me){const{target:s}=e;dn({target:s,x:n,y:t})}Xe("move",e),un(),Y.length>0&&e.preventDefault()}function nn(e){const{target:n}=e,{x:t,y:s}=Je(e);Ye.clear(),me=!1,Y.length>0&&(e.preventDefault(),Ht(n)||e.stopImmediatePropagation()),Xe("up",e),dn({target:n,x:t,y:s}),un(),Ue()}function Ht(e){let n=e;for(;n;){if(n.hasAttribute(H.resizeHandle))return!0;n=n.parentElement}return!1}function dn({target:e,x:n,y:t}){Y.splice(0);let s=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(s=e),ye.forEach(i=>{const{element:o,hitAreaMargins:a}=i,l=o.getBoundingClientRect(),{bottom:c,left:b,right:I,top:f}=l,d=ur?a.coarse:a.fine;if(n>=b-d&&n<=I+d&&t>=f-d&&t<=c+d){if(s!==null&&document.contains(s)&&o!==s&&!o.contains(s)&&!s.contains(o)&&ar(s,o)>0){let R=s,P=!1;for(;R&&!R.contains(o);){if(ir(R.getBoundingClientRect(),l)){P=!0;break}R=R.parentElement}if(P)return}Y.push(i)}})}function tn(e,n){Ye.set(e,n)}function un(){let e=!1,n=!1;Y.forEach(s=>{const{direction:i}=s;i==="horizontal"?e=!0:n=!0});let t=0;Ye.forEach(s=>{t|=s}),e&&n?Qe("intersection",t):e?Qe("horizontal",t):n?Qe("vertical",t):sr()}let rn=new AbortController;function Ue(){rn.abort(),rn=new AbortController;const e={capture:!0,signal:rn.signal};ye.size&&(me?(Y.length>0&&oe.forEach((n,t)=>{const{body:s}=t;n>0&&(s.addEventListener("contextmenu",nn,e),s.addEventListener("pointerleave",en,e),s.addEventListener("pointermove",en,e))}),window.addEventListener("pointerup",nn,e),window.addEventListener("pointercancel",nn,e)):oe.forEach((n,t)=>{const{body:s}=t;n>0&&(s.addEventListener("pointerdown",mr,e),s.addEventListener("pointermove",en,e))}))}function Xe(e,n){ye.forEach(t=>{const{setResizeHandlerState:s}=t,i=Y.includes(t);s(e,i,n)})}function pr(){const[e,n]=u.useState(0);return u.useCallback(()=>n(t=>t+1),[])}function w(e,n){if(!e)throw console.error(n),Error(n)}function ae(e,n,t=ln){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=ln){return ae(e,n,t)===0}function X(e,n,t){return ae(e,n,t)===0}function hr(e,n,t){if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++){const i=e[s],o=n[s];if(!X(i,o,t))return!1}return!0}function fe({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];w(s!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:o,maxSize:a=100,minSize:l=0}=s;if(ae(t,l)<0)if(o){const c=(i+l)/2;ae(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(ln)),t}function Re({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:s,prevLayout:i,trigger:o}){if(X(e,0))return n;const a=[...n],[l,c]=s;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let b=0;if(o==="keyboard"){{const f=e<0?c:l,d=t[f];w(d,`Panel constraints not found for index ${f}`);const{collapsedSize:x=0,collapsible:R,minSize:P=0}=d;if(R){const S=n[f];if(w(S!=null,`Previous layout not found for panel index ${f}`),X(S,x)){const z=P-S;ae(z,Math.abs(e))>0&&(e=e<0?0-z:z)}}}{const f=e<0?l:c,d=t[f];w(d,`No panel constraints found for index ${f}`);const{collapsedSize:x=0,collapsible:R,minSize:P=0}=d;if(R){const S=n[f];if(w(S!=null,`Previous layout not found for panel index ${f}`),X(S,P)){const z=S-x;ae(z,Math.abs(e))>0&&(e=e<0?0-z:z)}}}}{const f=e<0?1:-1;let d=e<0?c:l,x=0;for(;;){const P=n[d];w(P!=null,`Previous layout not found for panel index ${d}`);const z=fe({panelConstraints:t,panelIndex:d,size:100})-P;if(x+=z,d+=f,d<0||d>=t.length)break}const R=Math.min(Math.abs(e),Math.abs(x));e=e<0?0-R:R}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const x=Math.abs(e)-Math.abs(b),R=n[d];w(R!=null,`Previous layout not found for panel index ${d}`);const P=R-x,S=fe({panelConstraints:t,panelIndex:d,size:P});if(!X(R,S)&&(b+=R-S,a[d]=S,b.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(hr(i,a))return i;{const f=e<0?c:l,d=n[f];w(d!=null,`Previous layout not found for panel index ${f}`);const x=d+b,R=fe({panelConstraints:t,panelIndex:f,size:x});if(a[f]=R,!X(R,x)){let P=x-R,z=e<0?c:l;for(;z>=0&&z<t.length;){const E=a[z];w(E!=null,`Previous layout not found for panel index ${z}`);const W=E+P,_=fe({panelConstraints:t,panelIndex:z,size:W});if(X(E,_)||(P-=_-E,a[z]=_),X(P,0))break;e>0?z--:z++}}}const I=a.reduce((f,d)=>d+f,0);return X(I,100)?a:i}function zr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,i=100,o=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((f,d)=>{const{constraints:x}=f,{maxSize:R=100,minSize:P=0}=x;d===l?(s=P,i=R):(o+=P,a+=R)});const c=Math.min(i,100-o),b=Math.max(s,100-a),I=e[l];return{valueMax:c,valueMin:b,valueNow:I}}function Ce(e,n=document){return Array.from(n.querySelectorAll(`[${H.resizeHandleId}][data-panel-group-id="${e}"]`))}function Ot(e,n,t=document){const i=Ce(e,t).findIndex(o=>o.getAttribute(H.resizeHandleId)===n);return i??null}function Nt(e,n,t){const s=Ot(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function fn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function ve(e,n=document){const t=n.querySelector(`[${H.resizeHandleId}="${e}"]`);return t||null}function br(e,n,t,s=document){var i,o,a,l;const c=ve(n,s),b=Ce(e,s),I=c?b.indexOf(c):-1,f=(i=(o=t[I])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:null,d=(a=(l=t[I+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[f,d]}function gr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:i,panelGroupElement:o,setLayout:a}){u.useRef({didWarnAboutMissingResizeHandle:!1}),ie(()=>{if(!o)return;const l=Ce(t,o);for(let c=0;c<i.length-1;c++){const{valueMax:b,valueMin:I,valueNow:f}=zr({layout:s,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const x=i[c];w(x,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",x.id),d.setAttribute("aria-valuemax",""+Math.round(b)),d.setAttribute("aria-valuemin",""+Math.round(I)),d.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{l.forEach((c,b)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,i,o]),u.useEffect(()=>{if(!o)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,b=fn(t,o);w(b!=null,`No group found for id "${t}"`);const I=Ce(t,o);w(I,`No resize handles found for group id "${t}"`);const f=I.map(d=>{const x=d.getAttribute(H.resizeHandleId);w(x,"Resize handle element has no handle id attribute");const[R,P]=br(t,x,c,o);if(R==null||P==null)return()=>{};const S=z=>{if(!z.defaultPrevented)switch(z.key){case"Enter":{z.preventDefault();const E=c.findIndex(W=>W.id===R);if(E>=0){const W=c[E];w(W,`No panel data found for index ${E}`);const _=s[E],{collapsedSize:G=0,collapsible:M,minSize:T=0}=W.constraints;if(_!=null&&M){const q=Re({delta:X(_,G)?T-G:G-_,initialLayout:s,panelConstraints:c.map(ee=>ee.constraints),pivotIndices:Nt(t,x,o),prevLayout:s,trigger:"keyboard"});s!==q&&a(q)}}break}}};return d.addEventListener("keydown",S),()=>{d.removeEventListener("keydown",S)}});return()=>{f.forEach(d=>d())}},[o,e,n,t,s,i,a])}function vn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function $t(e,n){const t=e==="horizontal",{x:s,y:i}=Je(n);return t?s:i}function xr(e,n,t,s,i){const o=t==="horizontal",a=ve(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute(H.groupId);w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=s;const b=$t(t,e),I=fn(l,i);w(I,`No group element found for id "${l}"`);const f=I.getBoundingClientRect(),d=o?f.width:f.height;return(b-c)/d*100}function Rr(e,n,t,s,i,o){if(Et(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:xr(e,n,t,s,o)}function Ir({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,i=100;for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;l!=null&&(s++,n[o]=l,i-=l)}for(let o=0;o<e.length;o++){const a=t[o];w(a,`Panel constraints not found for index ${o}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,b=i/c;s++,n[o]=b,i-=b}return n}function ce(e,n,t){n.forEach((s,i)=>{const o=e[i];w(o,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=o,{collapsedSize:b=0,collapsible:I}=l,f=t[c];if(f==null||s!==f){t[c]=s;const{onCollapse:d,onExpand:x,onResize:R}=a;R&&R(s,f),I&&(d||x)&&(x&&(f==null||ne(f,b))&&!ne(s,b)&&x(),d&&(f==null||!ne(f,b))&&ne(s,b)&&d())}})}function Pe(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Sr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:i,precision:o=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(o):"1":s.length===1?l="1":l=a.toPrecision(o),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function yr(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function wn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Bt(e){return`react-resizable-panels:${e}`}function Gt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:i,order:o}=n;return i?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Ft(e,n){try{const t=Bt(e),s=n.getItem(t);if(s){const i=JSON.parse(s);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Cr(e,n,t){var s,i;const o=(s=Ft(e,t))!==null&&s!==void 0?s:{},a=Gt(n);return(i=o[a])!==null&&i!==void 0?i:null}function vr(e,n,t,s,i){var o;const a=Bt(e),l=Gt(n),c=(o=Ft(e,i))!==null&&o!==void 0?o:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{i.setItem(a,JSON.stringify(c))}catch(b){console.error(b)}}function jn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!X(s,100)&&t.length>0)for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=100/s*a;t[o]=l}let i=0;for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=fe({panelConstraints:n,panelIndex:o,size:a});a!=l&&(i+=a-l,t[o]=l)}if(!X(i,0))for(let o=0;o<n.length;o++){const a=t[o];w(a!=null,`No layout data found for index ${o}`);const l=a+i,c=fe({panelConstraints:n,panelIndex:o,size:l});if(a!==c&&(i-=c-a,t[o]=c,X(i,0)))break}return t}const wr=100,Ie={getItem:e=>(wn(Ie),Ie.getItem(e)),setItem:(e,n)=>{wn(Ie),Ie.setItem(e,n)}},Pn={};function Kt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:i,id:o=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:b,tagName:I="div",...f}){const d=cn(o),x=u.useRef(null),[R,P]=u.useState(null),[S,z]=u.useState([]),E=pr(),W=u.useRef({}),_=u.useRef(new Map),G=u.useRef(0),M=u.useRef({autoSaveId:e,direction:s,dragState:R,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),T=u.useRef({layout:S,panelDataArray:[],panelDataArrayChanged:!1});u.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),u.useImperativeHandle(i,()=>({getId:()=>M.current.id,getLayout:()=>{const{layout:p}=T.current;return p},setLayout:p=>{const{onLayout:C}=M.current,{layout:j,panelDataArray:y}=T.current,g=jn({layout:p,panelConstraints:y.map(v=>v.constraints)});vn(j,g)||(z(g),T.current.layout=g,C&&C(g),ce(y,g,W.current))}}),[]),ie(()=>{M.current.autoSaveId=e,M.current.direction=s,M.current.dragState=R,M.current.id=d,M.current.onLayout=a,M.current.storage=c}),gr({committedValuesRef:M,eagerValuesRef:T,groupId:d,layout:S,panelDataArray:T.current.panelDataArray,setLayout:z,panelGroupElement:x.current}),u.useEffect(()=>{const{panelDataArray:p}=T.current;if(e){if(S.length===0||S.length!==p.length)return;let C=Pn[e];C==null&&(C=yr(vr,wr),Pn[e]=C);const j=[...p],y=new Map(_.current);C(e,j,y,S,c)}},[e,S,c]),u.useEffect(()=>{});const q=u.useCallback(p=>{const{onLayout:C}=M.current,{layout:j,panelDataArray:y}=T.current;if(p.constraints.collapsible){const g=y.map(Z=>Z.constraints),{collapsedSize:v=0,panelSize:D,pivotIndices:N}=se(y,p,j);if(w(D!=null,`Panel size not found for panel "${p.id}"`),!ne(D,v)){_.current.set(p.id,D);const Q=de(y,p)===y.length-1?D-v:v-D,A=Re({delta:Q,initialLayout:j,panelConstraints:g,pivotIndices:N,prevLayout:j,trigger:"imperative-api"});Pe(j,A)||(z(A),T.current.layout=A,C&&C(A),ce(y,A,W.current))}}},[]),ee=u.useCallback((p,C)=>{const{onLayout:j}=M.current,{layout:y,panelDataArray:g}=T.current;if(p.constraints.collapsible){const v=g.map(J=>J.constraints),{collapsedSize:D=0,panelSize:N=0,minSize:Z=0,pivotIndices:Q}=se(g,p,y),A=C??Z;if(ne(N,D)){const J=_.current.get(p.id),ge=J!=null&&J>=A?J:A,Ze=de(g,p)===g.length-1?N-ge:ge-N,V=Re({delta:Ze,initialLayout:y,panelConstraints:v,pivotIndices:Q,prevLayout:y,trigger:"imperative-api"});Pe(y,V)||(z(V),T.current.layout=V,j&&j(V),ce(g,V,W.current))}}},[]),U=u.useCallback(p=>{const{layout:C,panelDataArray:j}=T.current,{panelSize:y}=se(j,p,C);return w(y!=null,`Panel size not found for panel "${p.id}"`),y},[]),F=u.useCallback((p,C)=>{const{panelDataArray:j}=T.current,y=de(j,p);return Sr({defaultSize:C,dragState:R,layout:S,panelData:j,panelIndex:y})},[R,S]),O=u.useCallback(p=>{const{layout:C,panelDataArray:j}=T.current,{collapsedSize:y=0,collapsible:g,panelSize:v}=se(j,p,C);return w(v!=null,`Panel size not found for panel "${p.id}"`),g===!0&&ne(v,y)},[]),re=u.useCallback(p=>{const{layout:C,panelDataArray:j}=T.current,{collapsedSize:y=0,collapsible:g,panelSize:v}=se(j,p,C);return w(v!=null,`Panel size not found for panel "${p.id}"`),!g||ae(v,y)>0},[]),B=u.useCallback(p=>{const{panelDataArray:C}=T.current;C.push(p),C.sort((j,y)=>{const g=j.order,v=y.order;return g==null&&v==null?0:g==null?-1:v==null?1:g-v}),T.current.panelDataArrayChanged=!0,E()},[E]);ie(()=>{if(T.current.panelDataArrayChanged){T.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:C,storage:j}=M.current,{layout:y,panelDataArray:g}=T.current;let v=null;if(p){const N=Cr(p,g,j);N&&(_.current=new Map(Object.entries(N.expandToSizes)),v=N.layout)}v==null&&(v=Ir({panelDataArray:g}));const D=jn({layout:v,panelConstraints:g.map(N=>N.constraints)});vn(y,D)||(z(D),T.current.layout=D,C&&C(D),ce(g,D,W.current))}}),ie(()=>{const p=T.current;return()=>{p.layout=[]}},[]);const $=u.useCallback(p=>{let C=!1;const j=x.current;return j&&window.getComputedStyle(j,null).getPropertyValue("direction")==="rtl"&&(C=!0),function(g){g.preventDefault();const v=x.current;if(!v)return()=>null;const{direction:D,dragState:N,id:Z,keyboardResizeBy:Q,onLayout:A}=M.current,{layout:J,panelDataArray:ge}=T.current,{initialLayout:je}=N??{},Ze=Nt(Z,p,v);let V=Rr(g,p,D,N,Q,v);const pn=D==="horizontal";pn&&C&&(V=-V);const Xt=ge.map(qt=>qt.constraints),xe=Re({delta:V,initialLayout:je??J,panelConstraints:Xt,pivotIndices:Ze,prevLayout:J,trigger:Et(g)?"keyboard":"mouse-or-touch"}),hn=!Pe(J,xe);(kt(g)||Lt(g))&&G.current!=V&&(G.current=V,!hn&&V!==0?pn?tn(p,V<0?Mt:Dt):tn(p,V<0?_t:At):tn(p,0)),hn&&(z(xe),T.current.layout=xe,A&&A(xe),ce(ge,xe,W.current))}},[]),K=u.useCallback((p,C)=>{const{onLayout:j}=M.current,{layout:y,panelDataArray:g}=T.current,v=g.map(J=>J.constraints),{panelSize:D,pivotIndices:N}=se(g,p,y);w(D!=null,`Panel size not found for panel "${p.id}"`);const Q=de(g,p)===g.length-1?D-C:C-D,A=Re({delta:Q,initialLayout:y,panelConstraints:v,pivotIndices:N,prevLayout:y,trigger:"imperative-api"});Pe(y,A)||(z(A),T.current.layout=A,j&&j(A),ce(g,A,W.current))},[]),pe=u.useCallback((p,C)=>{const{layout:j,panelDataArray:y}=T.current,{collapsedSize:g=0,collapsible:v}=C,{collapsedSize:D=0,collapsible:N,maxSize:Z=100,minSize:Q=0}=p.constraints,{panelSize:A}=se(y,p,j);A!=null&&(v&&N&&ne(A,g)?ne(g,D)||K(p,D):A<Q?K(p,Q):A>Z&&K(p,Z))},[K]),he=u.useCallback((p,C)=>{const{direction:j}=M.current,{layout:y}=T.current;if(!x.current)return;const g=ve(p,x.current);w(g,`Drag handle element not found for id "${p}"`);const v=$t(j,C);P({dragHandleId:p,dragHandleRect:g.getBoundingClientRect(),initialCursorPosition:v,initialLayout:y})},[]),ze=u.useCallback(()=>{P(null)},[]),we=u.useCallback(p=>{const{panelDataArray:C}=T.current,j=de(C,p);j>=0&&(C.splice(j,1),delete W.current[p.id],T.current.panelDataArrayChanged=!0,E())},[E]),le=u.useMemo(()=>({collapsePanel:q,direction:s,dragState:R,expandPanel:ee,getPanelSize:U,getPanelStyle:F,groupId:d,isPanelCollapsed:O,isPanelExpanded:re,reevaluatePanelConstraints:pe,registerPanel:B,registerResizeHandle:$,resizePanel:K,startDragging:he,stopDragging:ze,unregisterPanel:we,panelGroupElement:x.current}),[q,R,s,ee,U,F,d,O,re,pe,B,$,K,he,ze,we]),be={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return u.createElement(qe.Provider,{value:le},u.createElement(I,{...f,children:n,className:t,id:o,ref:x,style:{...be,...b},[H.group]:"",[H.groupDirection]:s,[H.groupId]:d}))}const Vt=u.forwardRef((e,n)=>u.createElement(Kt,{...e,forwardedRef:n}));Kt.displayName="PanelGroup";Vt.displayName="forwardRef(PanelGroup)";function de(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function se(e,n,t){const s=de(e,n),o=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:o}}function jr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){u.useEffect(()=>{if(e||t==null||s==null)return;const i=ve(n,s);if(i==null)return;const o=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute(H.groupId);w(l,`No group element found for id "${l}"`);const c=Ce(l,s),b=Ot(l,n,s);w(b!==null,`No resize element found for id "${n}"`);const I=a.shiftKey?b>0?b-1:c.length-1:b+1<c.length?b+1:0;c[I].focus();break}}};return i.addEventListener("keydown",o),()=>{i.removeEventListener("keydown",o)}},[s,e,n,t])}function Ut({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:i,onBlur:o,onClick:a,onDragging:l,onFocus:c,onPointerDown:b,onPointerUp:I,style:f={},tabIndex:d=0,tagName:x="div",...R}){var P,S;const z=u.useRef(null),E=u.useRef({onClick:a,onDragging:l,onPointerDown:b,onPointerUp:I});u.useEffect(()=>{E.current.onClick=a,E.current.onDragging=l,E.current.onPointerDown=b,E.current.onPointerUp=I});const W=u.useContext(qe);if(W===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:_,groupId:G,registerResizeHandle:M,startDragging:T,stopDragging:q,panelGroupElement:ee}=W,U=cn(i),[F,O]=u.useState("inactive"),[re,B]=u.useState(!1),[$,K]=u.useState(null),pe=u.useRef({state:F});ie(()=>{pe.current.state=F}),u.useEffect(()=>{if(t)K(null);else{const le=M(U);K(()=>le)}},[t,U,M]);const he=(P=s==null?void 0:s.coarse)!==null&&P!==void 0?P:15,ze=(S=s==null?void 0:s.fine)!==null&&S!==void 0?S:5;u.useEffect(()=>{if(t||$==null)return;const le=z.current;w(le,"Element ref not attached");let be=!1;return fr(U,le,_,{coarse:he,fine:ze},(C,j,y)=>{if(!j){O("inactive");return}switch(C){case"down":{O("drag"),be=!1,w(y,'Expected event to be defined for "down" action'),T(U,y);const{onDragging:g,onPointerDown:v}=E.current;g==null||g(!0),v==null||v();break}case"move":{const{state:g}=pe.current;be=!0,g!=="drag"&&O("hover"),w(y,'Expected event to be defined for "move" action'),$(y);break}case"up":{O("hover"),q();const{onClick:g,onDragging:v,onPointerUp:D}=E.current;v==null||v(!1),D==null||D(),be||g==null||g();break}}})},[he,_,t,ze,M,U,$,T,q]),jr({disabled:t,handleId:U,resizeHandler:$,panelGroupElement:ee});const we={touchAction:"none",userSelect:"none"};return u.createElement(x,{...R,children:e,className:n,id:i,onBlur:()=>{B(!1),o==null||o()},onFocus:()=>{B(!0),c==null||c()},ref:z,role:"separator",style:{...we,...f},tabIndex:d,[H.groupDirection]:_,[H.groupId]:G,[H.resizeHandle]:"",[H.resizeHandleActive]:F==="drag"?"pointer":re?"keyboard":void 0,[H.resizeHandleEnabled]:!t,[H.resizeHandleId]:U,[H.resizeHandleState]:F})}Ut.displayName="PanelResizeHandle";function Pr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Tr,mn]=Yt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Er=({id:e,ref:n,controlRef:t,direction:s="horizontal",isDisabled:i=!1,disabled:o=i,keyboardStep:a,orientation:l=s,storage:c,storageKey:b,groupProps:I,onLayout:f,...d})=>{const x=u.useRef(null),R=u.useId();e??(e=R);const P=u.useCallback((z={},E=null)=>({...z,ref:E,...d}),[d]),S=u.useCallback((z={})=>{const{as:E,...W}=I??{};return{...z,id:e,ref:Zt(t,x),autoSaveId:b,direction:l,keyboardResizeBy:a,storage:c,tagName:E,onLayout:f,...W}},[e,l,I,t,b,a,f,c]);return u.useEffect(()=>{if(!e)return;const z=fn(e);on(n)&&(n.current=z)},[n,e]),{controlRef:x,disabled:o,orientation:l,getContainerProps:P,getGroupProps:S}},kr=({id:e,ref:n,collapsedSize:t,collapsible:s,controlRef:i,defaultSize:o,maxSize:a,minSize:l,order:c,containerProps:b,onCollapse:I,onExpand:f,onResize:d,...x})=>{const R=u.useId();e??(e=R);const P=u.useCallback((z={})=>{const{as:E,...W}=b??{};return{...z,id:e,ref:i,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:a,minSize:l,order:c,tagName:E,onCollapse:I,onExpand:f,onResize:d,...W}},[e,i,b,t,s,o,a,l,I,f,d,c]),S=u.useCallback((z={},E=null)=>({...z,ref:E,...x}),[x]);return u.useEffect(()=>{if(!e)return;const z=Pr(e);on(n)&&(n.current=z)},[n,e]),{getItemProps:S,getPanelProps:P}},Lr=({id:e,ref:n,as:t,isDisabled:s,disabled:i=s,...o})=>{const a=u.useId(),{controlRef:l,disabled:c,orientation:b}=mn();e??(e=a);const[I,f]=u.useState(!1),d=i||c,x=u.useCallback(S=>{var G,M;S.preventDefault();const z=(G=l.current)==null?void 0:G.getLayout();if(!z)return;const W=100/z.length,_=z.map(()=>W);(M=l.current)==null||M.setLayout(_)},[l]),R=u.useCallback((S={})=>({...S,id:e,"aria-orientation":b,disabled:d,tagName:t,...o,style:{...S.style,...o.style,...d?{cursor:"default"}:{}},"data-active":bn(I),onDoubleClick:zn(o.onDoubleClick,x),onDragging:zn(o.onDragging,z=>f(z))}),[e,t,b,d,o,x,I]),P=u.useCallback((S={},z=null)=>({...S,ref:z,"data-active":bn(I)}),[I]);return u.useEffect(()=>{if(!e)return;const S=ve(e);on(n)&&(n.current=S)},[n,e]),{getIconProps:P,getTriggerProps:R}},L=wt(({direction:e="horizontal",orientation:n=e,...t},s)=>{const[i,o]=Qt("Resizable",{direction:e,orientation:n,...t}),{className:a,children:l,containerRef:c,...b}=er(o),{getContainerProps:I,getGroupProps:f,...d}=Er({ref:s,...b}),x={h:"100%",w:"100%",...i.container};return r.jsx(Tr,{value:{styles:i,...d},children:r.jsx(Se.div,{className:an("ui-resizable",a),__css:x,...I({},c),children:r.jsx(Vt,{...f(),children:l})})})});L.displayName="Resizable";L.__ui__="Resizable";const Wr=new Set(["order"]),Mr=Se(Tt,{disableStyleProp:e=>Wr.has(e)}),m=wt(({className:e,boxSize:n,children:t,h:s,height:i,innerRef:o,maxH:a,maxHeight:l,maxW:c,maxWidth:b,minH:I,minHeight:f,minW:d,minWidth:x,w:R,width:P,...S},z)=>{const{styles:E}=mn(),{getItemProps:W,getPanelProps:_}=kr({ref:z,...S}),G={boxSize:"100%",...E.item};return r.jsx(Mr,{..._({boxSize:n,h:s,height:i,maxH:a,maxHeight:l,maxW:c,maxWidth:b,minH:I,minHeight:f,minW:d,minWidth:x,w:R,width:P}),children:r.jsx(Se.div,{className:an("ui-resizable__item",e),__css:G,...W({},o),children:t})})});m.displayName="ResizableItem";m.__ui__="ResizableItem";const k=u.forwardRef(({className:e,children:n,icon:t,iconProps:s,...i},o)=>{const{styles:a}=mn(),{getIconProps:l,getTriggerProps:c}=Lr({ref:o,...i}),b={position:"relative",...a.trigger};return r.jsxs(Se.div,{as:Ut,className:an("ui-resizable__trigger",e),__css:b,...c(),children:[t?r.jsx(Se.div,{className:"ui-resizable__trigger__icon",__css:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",transform:"auto",translateX:"-50%",translateY:"-50%",...a.icon},...l(s),children:t}):null,n]})});k.displayName="ResizableTrigger";k.__ui__="ResizableTrigger";const ns={component:L,title:"Components / Data Display / Resizable"},Te=()=>r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),Ee=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),r.jsxs(L,{variant:"spacer",h:"md",children:[r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(L,{variant:"unstyled",h:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]})]}),ke=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{colorScheme:"primary",variant:"spacer",h:"md",children:[r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]}),r.jsxs(L,{colorScheme:"red",variant:"spacer",h:"md",children:[r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),r.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]})]}),We=()=>r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,defaultSize:30,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),Me=()=>r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,maxSize:70,minSize:30,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),De=()=>r.jsxs(L,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),r.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(m,{as:h,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]})]}),Ae=()=>{const e=u.useRef(null),n=u.useRef(null),t=u.useRef(null),s=u.useRef(null),i=u.useRef(null);return u.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",i)},[]),r.jsxs(L,{ref:n,borderWidth:"1px",containerRef:e,h:"md",rounded:"md",children:[r.jsx(m,{ref:t,as:h,innerRef:s,children:"One"}),r.jsx(k,{ref:i}),r.jsx(m,{as:h,children:"Two"})]})},He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{icon:r.jsx(gn,{})}),r.jsx(m,{as:h,children:"Two"})]}),r.jsxs(L,{variant:"spacer",h:"md",orientation:"vertical",children:[r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"One"}),r.jsx(k,{icon:r.jsx(gn,{})}),r.jsx(m,{as:h,borderWidth:"1px",rounded:"md",children:"Two"})]})]}),Oe=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{icon:r.jsx(xn,{})}),r.jsx(m,{as:h,children:"Two"})]}),r.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{icon:r.jsx(xn,{})}),r.jsx(m,{as:h,children:"Two"})]})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"Left"}),r.jsx(k,{}),r.jsx(m,{children:r.jsxs(L,{orientation:"vertical",children:[r.jsx(m,{as:h,children:"Top"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Bottom"})]})})]}),r.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"md",children:[r.jsx(m,{as:h,children:"Top"}),r.jsx(k,{}),r.jsx(m,{children:r.jsxs(L,{children:[r.jsx(m,{as:h,children:"Left"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Right"})]})})]})]}),$e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",disabled:!0,h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Three"})]}),r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,children:"One"}),r.jsx(k,{disabled:!0}),r.jsx(m,{as:h,children:"Two"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Three"})]})]}),Be=()=>r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]}),Ge=()=>{const[e,n]=Rn(!0),[t,s]=Rn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"persistence",children:[r.jsx(m,{id:"one",as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{id:"two",as:h,children:"Two"})]}),r.jsxs(jt,{gap:"md",children:[r.jsxs(ue,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(ue,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(m,{id:"left",as:h,minSize:10,order:1,children:"Left"}),r.jsx(k,{})]}):null,r.jsx(m,{id:"middle",as:h,minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(k,{}),r.jsx(m,{id:"right",as:h,minSize:10,order:3,children:"Right"})]}):null]})]})},Fe=()=>{const e=u.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",storage:e,storageKey:"persistence",children:[r.jsx(m,{id:"one",as:h,children:"One"}),r.jsx(k,{}),r.jsx(m,{id:"two",as:h,children:"Two"})]})},Ke=()=>{const e=u.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(jt,{gap:"md",children:[r.jsx(ue,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(ue,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(ue,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(ue,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(L,{borderWidth:"1px",h:"md",rounded:"md",children:[r.jsx(m,{as:h,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),r.jsx(k,{}),r.jsx(m,{as:h,children:"Two"})]})]})};var Tn,En,kn;Te.parameters={...Te.parameters,docs:{...(Tn=Te.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(kn=(En=Te.parameters)==null?void 0:En.docs)==null?void 0:kn.source}}};var Ln,Wn,Mn;Ee.parameters={...Ee.parameters,docs:{...(Ln=Ee.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(Mn=(Wn=Ee.parameters)==null?void 0:Wn.docs)==null?void 0:Mn.source}}};var Dn,_n,An;ke.parameters={...ke.parameters,docs:{...(Dn=ke.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(An=(_n=ke.parameters)==null?void 0:_n.docs)==null?void 0:An.source}}};var Hn,On,Nn;Le.parameters={...Le.parameters,docs:{...(Hn=Le.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(On=Le.parameters)==null?void 0:On.docs)==null?void 0:Nn.source}}};var $n,Bn,Gn;We.parameters={...We.parameters,docs:{...($n=We.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Gn=(Bn=We.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.source}}};var Fn,Kn,Vn;Me.parameters={...Me.parameters,docs:{...(Fn=Me.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} maxSize={70} minSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(Kn=Me.parameters)==null?void 0:Kn.docs)==null?void 0:Vn.source}}};var Un,Xn,qn;De.parameters={...De.parameters,docs:{...(Un=De.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" keyboardStep={25} rounded="md">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(qn=(Xn=De.parameters)==null?void 0:Xn.docs)==null?void 0:qn.source}}};var Jn,Yn,Zn;_e.parameters={..._e.parameters,docs:{...(Jn=_e.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=_e.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var Qn,et,nt;Ae.parameters={...Ae.parameters,docs:{...(Qn=Ae.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(nt=(et=Ae.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var tt,rt,st;He.parameters={...He.parameters,docs:{...(tt=He.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(st=(rt=He.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,it,at;Oe.parameters={...Oe.parameters,docs:{...(ot=Oe.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(at=(it=Oe.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,ct,dt;Ne.parameters={...Ne.parameters,docs:{...(lt=Ne.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
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
}`,...(dt=(ct=Ne.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,ft,mt;$e.parameters={...$e.parameters,docs:{...(ut=$e.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(mt=(ft=$e.parameters)==null?void 0:ft.docs)==null?void 0:mt.source}}};var pt,ht,zt;Be.parameters={...Be.parameters,docs:{...(pt=Be.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <Resizable borderWidth="1px" h="md" rounded="md">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(zt=(ht=Be.parameters)==null?void 0:ht.docs)==null?void 0:zt.source}}};var bt,gt,xt;Ge.parameters={...Ge.parameters,docs:{...(bt=Ge.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(xt=(gt=Ge.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var Rt,It,St;Fe.parameters={...Fe.parameters,docs:{...(Rt=Fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(St=(It=Fe.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var yt,Ct,vt;Ke.parameters={...Ke.parameters,docs:{...(yt=Ke.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
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
}`,...(vt=(Ct=Ke.parameters)==null?void 0:Ct.docs)==null?void 0:vt.source}}};const ts=["basic","withVariant","withColorScheme","withOrientation","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","disabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{ts as __namedExportsOrder,Te as basic,Ke as customControls,Oe as customIcon,ns as default,$e as disabled,Ne as nestedResizable,Fe as useCookieStorage,Ge as useLocaleStorage,Be as useOnResize,_e as withCollapsible,ke as withColorScheme,We as withDefaultSize,He as withIcon,De as withKeyboardStep,Me as withMinMaxSize,Le as withOrientation,Ae as withRefs,Ee as withVariant};
