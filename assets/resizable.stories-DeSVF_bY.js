import{d as Yn,r as u,bf as Jn,c as Zn,bg as ye,m as wn,M as on,h as Qn,a as hn,f as et,j as o,s as sn,E as z}from"./iframe-DqV1pF0Y.js";import{P as nt}from"./props-table-D14vFRWA.js";import{u as bn}from"./index-C3YLfF9-.js";import{W as jn}from"./wrap-CipR2sIR.js";import{B as de}from"./button-BhTpfwih.js";import{u as tt}from"./index-tKPH2zoG.js";import{G as zn}from"./grip-vertical-icon-Wju3oOHI.js";import"./grid-DVIWBgtE.js";import"./grid-item-eH7jfJXq.js";import"./for-Jc9KR5-P.js";import"./flex-BBgO32zm.js";import"./heading-Bb3j_Ov5.js";import"./use-ripple-DSVVW1dc.js";import"./rings-sHcC8uPJ.js";import"./use-breakpoint-C0qheGjm.js";import"./use-breakpoint-value-DSoUfoVJ.js";import"./use-color-mode-value-CfexdzMu.js";import"./createLucideIcon-dUf62_pT.js";const rt=Yn({base:{icon:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",translateX:"-50%",translateY:"-50%"},item:{boxSize:"full"},root:{boxSize:"full"},trigger:{position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{transitionDuration:"moderate",transitionProperty:"common"}}},variants:{border:{icon:{bg:"colorScheme.muted",color:"colorScheme.fg",py:"1",rounded:"l1"},trigger:{bg:"colorScheme.muted",focusVisibleRing:"none",_after:{position:"absolute"},_hover:{bg:"colorScheme.emphasized"},_focusVisible:{bg:"colorScheme.emphasized"}}},plain:{trigger:{focusVisibleRing:"none",_after:{position:"absolute"}}},spacer:{icon:{color:"colorScheme.fg",transitionDuration:"moderate",transitionProperty:"common",_active:{color:"transparent"}},trigger:{focusVisibleRing:"none",p:"1",_after:{bg:"transparent",display:"block",rounded:"full"},_hover:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}},_focusVisible:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}}}}},props:{orientation:{horizontal:{icon:{transform:"translate(-50%, -50%) rotate(0deg)"}},vertical:{icon:{transform:"translate(-50%, -50%) rotate(90deg)"}}}},compounds:[{css:{trigger:{h:"px",_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"border",orientation:"vertical"},{css:{trigger:{w:"px",_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"border",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",w:"full"}}},variant:"spacer",orientation:"vertical"},{css:{trigger:{_after:{h:"full",w:"2"}}},variant:"spacer",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"plain",orientation:"vertical"},{css:{trigger:{_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"plain",orientation:"horizontal"}],defaultProps:{variant:"border",orientation:"horizontal"}}),Xe=u.createContext(null);Xe.displayName="PanelGroupContext";const _={group:"data-panel-group",groupDirection:"data-panel-group-direction",groupId:"data-panel-group-id",panel:"data-panel",panelCollapsible:"data-panel-collapsible",panelId:"data-panel-id",panelSize:"data-panel-size",resizeHandle:"data-resize-handle",resizeHandleActive:"data-resize-handle-active",resizeHandleEnabled:"data-panel-resize-handle-enabled",resizeHandleId:"data-panel-resize-handle-id",resizeHandleState:"data-resize-handle-state"},an=10,ie=u.useLayoutEffect,gn=Jn.useId,ot=typeof gn=="function"?gn:()=>null;let st=0;function ln(e=null){const n=ot(),t=u.useRef(e||n||null);return t.current===null&&(t.current=""+st++),e??t.current}function Pn({children:e,className:n="",collapsedSize:t,collapsible:r,defaultSize:i,forwardedRef:s,id:a,maxSize:l,minSize:c,onCollapse:b,onExpand:R,onResize:f,order:d,style:S,tagName:x="div",...P}){const g=u.useContext(Xe);if(g===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:v,expandPanel:W,getPanelSize:A,getPanelStyle:$,groupId:J,isPanelCollapsed:D,reevaluatePanelConstraints:E,registerPanel:X,resizePanel:ee,unregisterPanel:K}=g,G=ln(a),H=u.useRef({callbacks:{onCollapse:b,onExpand:R,onResize:f},constraints:{collapsedSize:t,collapsible:r,defaultSize:i,maxSize:l,minSize:c},id:G,idIsFromProps:a!==void 0,order:d});u.useRef({didLogMissingDefaultSizeWarning:!1}),ie(()=>{const{callbacks:B,constraints:N}=H.current,V={...N};H.current.id=G,H.current.idIsFromProps=a!==void 0,H.current.order=d,B.onCollapse=b,B.onExpand=R,B.onResize=f,N.collapsedSize=t,N.collapsible=r,N.defaultSize=i,N.maxSize=l,N.minSize=c,(V.collapsedSize!==N.collapsedSize||V.collapsible!==N.collapsible||V.maxSize!==N.maxSize||V.minSize!==N.minSize)&&E(H.current,V)}),ie(()=>{const B=H.current;return X(B),()=>{K(B)}},[d,G,X,K]),u.useImperativeHandle(s,()=>({collapse:()=>{v(H.current)},expand:B=>{W(H.current,B)},getId(){return G},getSize(){return A(H.current)},isCollapsed(){return D(H.current)},isExpanded(){return!D(H.current)},resize:B=>{ee(H.current,B)}}),[v,W,A,D,G,ee]);const oe=$(H.current,i);return u.createElement(x,{...P,children:e,className:n,id:G,style:{...oe,...S},[_.groupId]:J,[_.panel]:"",[_.panelCollapsible]:r||void 0,[_.panelId]:G,[_.panelSize]:parseFloat(""+oe.flexGrow).toFixed(1)})}const En=u.forwardRef((e,n)=>u.createElement(Pn,{...e,forwardedRef:n}));Pn.displayName="Panel";En.displayName="forwardRef(Panel)";let rn=null,Fe=-1,te=null;function it(e,n){if(n){const t=(n&Dn)!==0,r=(n&An)!==0,i=(n&Mn)!==0,s=(n&_n)!==0;if(t)return i?"se-resize":s?"ne-resize":"e-resize";if(r)return i?"sw-resize":s?"nw-resize":"w-resize";if(i)return"s-resize";if(s)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function at(){te!==null&&(document.head.removeChild(te),rn=null,te=null,Fe=-1)}function Ze(e,n){var t,r;const i=it(e,n);if(rn!==i){if(rn=i,te===null&&(te=document.createElement("style"),document.head.appendChild(te)),Fe>=0){var s;(s=te.sheet)===null||s===void 0||s.removeRule(Fe)}Fe=(t=(r=te.sheet)===null||r===void 0?void 0:r.insertRule(`*{cursor: ${i} !important;}`))!==null&&t!==void 0?t:-1}}function Tn(e){return e.type==="keydown"}function kn(e){return e.type.startsWith("pointer")}function Ln(e){return e.type.startsWith("mouse")}function qe(e){if(kn(e)){if(e.isPrimary)return{x:e.clientX,y:e.clientY}}else if(Ln(e))return{x:e.clientX,y:e.clientY};return{x:1/0,y:1/0}}function lt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ct(e,n,t){return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y}function ut(e,n){if(e===n)throw new Error("Cannot compare node with itself");const t={a:Sn(e),b:Sn(n)};let r;for(;t.a.at(-1)===t.b.at(-1);)e=t.a.pop(),n=t.b.pop(),r=e;w(r,"Stacking order can only be calculated for elements with a common ancestor");const i={a:xn(Rn(t.a)),b:xn(Rn(t.b))};if(i.a===i.b){const s=r.childNodes,a={a:t.a.at(-1),b:t.b.at(-1)};let l=s.length;for(;l--;){const c=s[l];if(c===a.a)return 1;if(c===a.b)return-1}}return Math.sign(i.a-i.b)}const dt=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ft(e){var n;const t=getComputedStyle((n=Wn(e))!==null&&n!==void 0?n:e).display;return t==="flex"||t==="inline-flex"}function pt(e){const n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&(n.position!=="static"||ft(e))||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||dt.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function Rn(e){let n=e.length;for(;n--;){const t=e[n];if(w(t,"Missing node"),pt(t))return t}return null}function xn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Sn(e){const n=[];for(;e;)n.push(e),e=Wn(e);return n}function Wn(e){const{parentNode:n}=e;return n&&n instanceof ShadowRoot?n.host:n}const Dn=1,An=2,Mn=4,_n=8,mt=lt()==="coarse";let Y=[],pe=!1,re=new Map,Ye=new Map;const Ie=new Set;function ht(e,n,t,r,i){var s;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:r,setResizeHandlerState:i},c=(s=re.get(a))!==null&&s!==void 0?s:0;return re.set(a,c+1),Ie.add(l),Ke(),function(){var R;Ye.delete(e),Ie.delete(l);const f=(R=re.get(a))!==null&&R!==void 0?R:1;if(re.set(a,f-1),Ke(),f===1&&re.delete(a),Y.includes(l)){const d=Y.indexOf(l);d>=0&&Y.splice(d,1),un(),i("up",!0,null)}}}function bt(e){const{target:n}=e,{x:t,y:r}=qe(e);pe=!0,cn({target:n,x:t,y:r}),Ke(),Y.length>0&&(Ue("down",e),e.preventDefault(),Hn(n)||e.stopImmediatePropagation())}function Qe(e){const{x:n,y:t}=qe(e);if(pe&&e.buttons===0&&(pe=!1,Ue("up",e)),!pe){const{target:r}=e;cn({target:r,x:n,y:t})}Ue("move",e),un(),Y.length>0&&e.preventDefault()}function en(e){const{target:n}=e,{x:t,y:r}=qe(e);Ye.clear(),pe=!1,Y.length>0&&(e.preventDefault(),Hn(n)||e.stopImmediatePropagation()),Ue("up",e),cn({target:n,x:t,y:r}),un(),Ke()}function Hn(e){let n=e;for(;n;){if(n.hasAttribute(_.resizeHandle))return!0;n=n.parentElement}return!1}function cn({target:e,x:n,y:t}){Y.splice(0);let r=null;(e instanceof HTMLElement||e instanceof SVGElement)&&(r=e),Ie.forEach(i=>{const{element:s,hitAreaMargins:a}=i,l=s.getBoundingClientRect(),{bottom:c,left:b,right:R,top:f}=l,d=mt?a.coarse:a.fine;if(n>=b-d&&n<=R+d&&t>=f-d&&t<=c+d){if(r!==null&&document.contains(r)&&s!==r&&!s.contains(r)&&!r.contains(s)&&ut(r,s)>0){let x=r,P=!1;for(;x&&!x.contains(s);){if(ct(x.getBoundingClientRect(),l)){P=!0;break}x=x.parentElement}if(P)return}Y.push(i)}})}function nn(e,n){Ye.set(e,n)}function un(){let e=!1,n=!1;Y.forEach(r=>{const{direction:i}=r;i==="horizontal"?e=!0:n=!0});let t=0;Ye.forEach(r=>{t|=r}),e&&n?Ze("intersection",t):e?Ze("horizontal",t):n?Ze("vertical",t):at()}let tn;function Ke(){var e;(e=tn)===null||e===void 0||e.abort(),tn=new AbortController;const n={capture:!0,signal:tn.signal};Ie.size&&(pe?(Y.length>0&&re.forEach((t,r)=>{const{body:i}=r;t>0&&(i.addEventListener("contextmenu",en,n),i.addEventListener("pointerleave",Qe,n),i.addEventListener("pointermove",Qe,n))}),re.forEach((t,r)=>{const{body:i}=r;i.addEventListener("pointerup",en,n),i.addEventListener("pointercancel",en,n)})):re.forEach((t,r)=>{const{body:i}=r;t>0&&(i.addEventListener("pointerdown",bt,n),i.addEventListener("pointermove",Qe,n))}))}function Ue(e,n){Ie.forEach(t=>{const{setResizeHandlerState:r}=t,i=Y.includes(t);r(e,i,n)})}function zt(){const[e,n]=u.useState(0);return u.useCallback(()=>n(t=>t+1),[])}function w(e,n){if(!e)throw console.error(n),Error(n)}function ae(e,n,t=an){return e.toFixed(t)===n.toFixed(t)?0:e>n?1:-1}function ne(e,n,t=an){return ae(e,n,t)===0}function U(e,n,t){return ae(e,n,t)===0}function gt(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){const i=e[r],s=n[r];if(!U(i,s,t))return!1}return!0}function fe({panelConstraints:e,panelIndex:n,size:t}){const r=e[n];w(r!=null,`Panel constraints not found for index ${n}`);let{collapsedSize:i=0,collapsible:s,maxSize:a=100,minSize:l=0}=r;if(ae(t,l)<0)if(s){const c=(i+l)/2;ae(t,c)<0?t=i:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(an)),t}function xe({delta:e,initialLayout:n,panelConstraints:t,pivotIndices:r,prevLayout:i,trigger:s}){if(U(e,0))return n;const a=[...n],[l,c]=r;w(l!=null,"Invalid first pivot index"),w(c!=null,"Invalid second pivot index");let b=0;if(s==="keyboard"){{const f=e<0?c:l,d=t[f];w(d,`Panel constraints not found for index ${f}`);const{collapsedSize:S=0,collapsible:x,minSize:P=0}=d;if(x){const g=n[f];if(w(g!=null,`Previous layout not found for panel index ${f}`),U(g,S)){const v=P-g;ae(v,Math.abs(e))>0&&(e=e<0?0-v:v)}}}{const f=e<0?l:c,d=t[f];w(d,`No panel constraints found for index ${f}`);const{collapsedSize:S=0,collapsible:x,minSize:P=0}=d;if(x){const g=n[f];if(w(g!=null,`Previous layout not found for panel index ${f}`),U(g,P)){const v=g-S;ae(v,Math.abs(e))>0&&(e=e<0?0-v:v)}}}}{const f=e<0?1:-1;let d=e<0?c:l,S=0;for(;;){const P=n[d];w(P!=null,`Previous layout not found for panel index ${d}`);const v=fe({panelConstraints:t,panelIndex:d,size:100})-P;if(S+=v,d+=f,d<0||d>=t.length)break}const x=Math.min(Math.abs(e),Math.abs(S));e=e<0?0-x:x}{let d=e<0?l:c;for(;d>=0&&d<t.length;){const S=Math.abs(e)-Math.abs(b),x=n[d];w(x!=null,`Previous layout not found for panel index ${d}`);const P=x-S,g=fe({panelConstraints:t,panelIndex:d,size:P});if(!U(x,g)&&(b+=x-g,a[d]=g,b.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(gt(i,a))return i;{const f=e<0?c:l,d=n[f];w(d!=null,`Previous layout not found for panel index ${f}`);const S=d+b,x=fe({panelConstraints:t,panelIndex:f,size:S});if(a[f]=x,!U(x,S)){let P=S-x,v=e<0?c:l;for(;v>=0&&v<t.length;){const W=a[v];w(W!=null,`Previous layout not found for panel index ${v}`);const A=W+P,$=fe({panelConstraints:t,panelIndex:v,size:A});if(U(W,$)||(P-=$-W,a[v]=$),U(P,0))break;e>0?v--:v++}}}const R=a.reduce((f,d)=>d+f,0);return U(R,100)?a:i}function Rt({layout:e,panelsArray:n,pivotIndices:t}){let r=0,i=100,s=0,a=0;const l=t[0];w(l!=null,"No pivot index found"),n.forEach((f,d)=>{const{constraints:S}=f,{maxSize:x=100,minSize:P=0}=S;d===l?(r=P,i=x):(s+=P,a+=x)});const c=Math.min(i,100-s),b=Math.max(r,100-a),R=e[l];return{valueMax:c,valueMin:b,valueNow:R}}function ve(e,n=document){return Array.from(n.querySelectorAll(`[${_.resizeHandleId}][data-panel-group-id="${e}"]`))}function $n(e,n,t=document){const i=ve(e,t).findIndex(s=>s.getAttribute(_.resizeHandleId)===n);return i??null}function On(e,n,t){const r=$n(e,n,t);return r!=null?[r,r+1]:[-1,-1]}function xt(e){return e instanceof HTMLElement?!0:typeof e=="object"&&e!==null&&"tagName"in e&&"getAttribute"in e}function dn(e,n=document){if(xt(n)&&n.dataset.panelGroupId==e)return n;const t=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return t||null}function Ce(e,n=document){const t=n.querySelector(`[${_.resizeHandleId}="${e}"]`);return t||null}function St(e,n,t,r=document){var i,s,a,l;const c=Ce(n,r),b=ve(e,r),R=c?b.indexOf(c):-1,f=(i=(s=t[R])===null||s===void 0?void 0:s.id)!==null&&i!==void 0?i:null,d=(a=(l=t[R+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[f,d]}function yt({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:r,panelDataArray:i,panelGroupElement:s,setLayout:a}){u.useRef({didWarnAboutMissingResizeHandle:!1}),ie(()=>{if(!s)return;const l=ve(t,s);for(let c=0;c<i.length-1;c++){const{valueMax:b,valueMin:R,valueNow:f}=Rt({layout:r,panelsArray:i,pivotIndices:[c,c+1]}),d=l[c];if(d!=null){const S=i[c];w(S,`No panel data found for index "${c}"`),d.setAttribute("aria-controls",S.id),d.setAttribute("aria-valuemax",""+Math.round(b)),d.setAttribute("aria-valuemin",""+Math.round(R)),d.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{l.forEach((c,b)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,r,i,s]),u.useEffect(()=>{if(!s)return;const l=n.current;w(l,"Eager values not found");const{panelDataArray:c}=l,b=dn(t,s);w(b!=null,`No group found for id "${t}"`);const R=ve(t,s);w(R,`No resize handles found for group id "${t}"`);const f=R.map(d=>{const S=d.getAttribute(_.resizeHandleId);w(S,"Resize handle element has no handle id attribute");const[x,P]=St(t,S,c,s);if(x==null||P==null)return()=>{};const g=v=>{if(!v.defaultPrevented)switch(v.key){case"Enter":{v.preventDefault();const W=c.findIndex(A=>A.id===x);if(W>=0){const A=c[W];w(A,`No panel data found for index ${W}`);const $=r[W],{collapsedSize:J=0,collapsible:D,minSize:E=0}=A.constraints;if($!=null&&D){const X=xe({delta:U($,J)?E-J:J-$,initialLayout:r,panelConstraints:c.map(ee=>ee.constraints),pivotIndices:On(t,S,s),prevLayout:r,trigger:"keyboard"});r!==X&&a(X)}}break}}};return d.addEventListener("keydown",g),()=>{d.removeEventListener("keydown",g)}});return()=>{f.forEach(d=>d())}},[s,e,n,t,r,i,a])}function yn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Nn(e,n){const t=e==="horizontal",{x:r,y:i}=qe(n);return t?r:i}function It(e,n,t,r,i){const s=t==="horizontal",a=Ce(n,i);w(a,`No resize handle element found for id "${n}"`);const l=a.getAttribute(_.groupId);w(l,"Resize handle element has no group id attribute");let{initialCursorPosition:c}=r;const b=Nn(t,e),R=dn(l,i);w(R,`No group element found for id "${l}"`);const f=R.getBoundingClientRect(),d=s?f.width:f.height;return(b-c)/d*100}function vt(e,n,t,r,i,s){if(Tn(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:i!=null?l=i:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return r==null?0:It(e,n,t,r,s)}function Ct({panelDataArray:e}){const n=Array(e.length),t=e.map(s=>s.constraints);let r=0,i=100;for(let s=0;s<e.length;s++){const a=t[s];w(a,`Panel constraints not found for index ${s}`);const{defaultSize:l}=a;l!=null&&(r++,n[s]=l,i-=l)}for(let s=0;s<e.length;s++){const a=t[s];w(a,`Panel constraints not found for index ${s}`);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-r,b=i/c;r++,n[s]=b,i-=b}return n}function ce(e,n,t){n.forEach((r,i)=>{const s=e[i];w(s,`Panel data not found for index ${i}`);const{callbacks:a,constraints:l,id:c}=s,{collapsedSize:b=0,collapsible:R}=l,f=t[c];if(f==null||r!==f){t[c]=r;const{onCollapse:d,onExpand:S,onResize:x}=a;x&&x(r,f),R&&(d||S)&&(S&&(f==null||ne(f,b))&&!ne(r,b)&&S(),d&&(f==null||!ne(f,b))&&ne(r,b)&&d())}})}function Pe(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function wt({defaultSize:e,dragState:n,layout:t,panelData:r,panelIndex:i,precision:s=3}){const a=t[i];let l;return a==null?l=e!=null?e.toPrecision(s):"1":r.length===1?l="1":l=a.toPrecision(s),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function jt(e,n=10){let t=null;return(...i)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...i)},n)}}function In(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Bn(e){return`react-resizable-panels:${e}`}function Gn(e){return e.map(n=>{const{constraints:t,id:r,idIsFromProps:i,order:s}=n;return i?r:s?`${s}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Vn(e,n){try{const t=Bn(e),r=n.getItem(t);if(r){const i=JSON.parse(r);if(typeof i=="object"&&i!=null)return i}}catch{}return null}function Pt(e,n,t){var r,i;const s=(r=Vn(e,t))!==null&&r!==void 0?r:{},a=Gn(n);return(i=s[a])!==null&&i!==void 0?i:null}function Et(e,n,t,r,i){var s;const a=Bn(e),l=Gn(n),c=(s=Vn(e,i))!==null&&s!==void 0?s:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:r};try{i.setItem(a,JSON.stringify(c))}catch(b){console.error(b)}}function vn({layout:e,panelConstraints:n}){const t=[...e],r=t.reduce((s,a)=>s+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(s=>`${s}%`).join(", ")}`);if(!U(r,100)&&t.length>0)for(let s=0;s<n.length;s++){const a=t[s];w(a!=null,`No layout data found for index ${s}`);const l=100/r*a;t[s]=l}let i=0;for(let s=0;s<n.length;s++){const a=t[s];w(a!=null,`No layout data found for index ${s}`);const l=fe({panelConstraints:n,panelIndex:s,size:a});a!=l&&(i+=a-l,t[s]=l)}if(!U(i,0))for(let s=0;s<n.length;s++){const a=t[s];w(a!=null,`No layout data found for index ${s}`);const l=a+i,c=fe({panelConstraints:n,panelIndex:s,size:l});if(a!==c&&(i-=c-a,t[s]=c,U(i,0)))break}return t}const Tt=100,Se={getItem:e=>(In(Se),Se.getItem(e)),setItem:(e,n)=>{In(Se),Se.setItem(e,n)}},Cn={};function Fn({autoSaveId:e=null,children:n,className:t="",direction:r,forwardedRef:i,id:s=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Se,style:b,tagName:R="div",...f}){const d=ln(s),S=u.useRef(null),[x,P]=u.useState(null),[g,v]=u.useState([]),W=zt(),A=u.useRef({}),$=u.useRef(new Map),J=u.useRef(0),D=u.useRef({autoSaveId:e,direction:r,dragState:x,id:d,keyboardResizeBy:l,onLayout:a,storage:c}),E=u.useRef({layout:g,panelDataArray:[],panelDataArrayChanged:!1});u.useRef({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),u.useImperativeHandle(i,()=>({getId:()=>D.current.id,getLayout:()=>{const{layout:p}=E.current;return p},setLayout:p=>{const{onLayout:I}=D.current,{layout:j,panelDataArray:y}=E.current,m=vn({layout:p,panelConstraints:y.map(C=>C.constraints)});yn(j,m)||(v(m),E.current.layout=m,I&&I(m),ce(y,m,A.current))}}),[]),ie(()=>{D.current.autoSaveId=e,D.current.direction=r,D.current.dragState=x,D.current.id=d,D.current.onLayout=a,D.current.storage=c}),yt({committedValuesRef:D,eagerValuesRef:E,groupId:d,layout:g,panelDataArray:E.current.panelDataArray,setLayout:v,panelGroupElement:S.current}),u.useEffect(()=>{const{panelDataArray:p}=E.current;if(e){if(g.length===0||g.length!==p.length)return;let I=Cn[e];I==null&&(I=jt(Et,Tt),Cn[e]=I);const j=[...p],y=new Map($.current);I(e,j,y,g,c)}},[e,g,c]),u.useEffect(()=>{});const X=u.useCallback(p=>{const{onLayout:I}=D.current,{layout:j,panelDataArray:y}=E.current;if(p.constraints.collapsible){const m=y.map(Z=>Z.constraints),{collapsedSize:C=0,panelSize:k,pivotIndices:O}=se(y,p,j);if(w(k!=null,`Panel size not found for panel "${p.id}"`),!ne(k,C)){$.current.set(p.id,k);const Q=ue(y,p)===y.length-1?k-C:C-k,M=xe({delta:Q,initialLayout:j,panelConstraints:m,pivotIndices:O,prevLayout:j,trigger:"imperative-api"});Pe(j,M)||(v(M),E.current.layout=M,I&&I(M),ce(y,M,A.current))}}},[]),ee=u.useCallback((p,I)=>{const{onLayout:j}=D.current,{layout:y,panelDataArray:m}=E.current;if(p.constraints.collapsible){const C=m.map(q=>q.constraints),{collapsedSize:k=0,panelSize:O=0,minSize:Z=0,pivotIndices:Q}=se(m,p,y),M=I??Z;if(ne(O,k)){const q=$.current.get(p.id),ge=q!=null&&q>=M?q:M,Je=ue(m,p)===m.length-1?O-ge:ge-O,F=xe({delta:Je,initialLayout:y,panelConstraints:C,pivotIndices:Q,prevLayout:y,trigger:"imperative-api"});Pe(y,F)||(v(F),E.current.layout=F,j&&j(F),ce(m,F,A.current))}}},[]),K=u.useCallback(p=>{const{layout:I,panelDataArray:j}=E.current,{panelSize:y}=se(j,p,I);return w(y!=null,`Panel size not found for panel "${p.id}"`),y},[]),G=u.useCallback((p,I)=>{const{panelDataArray:j}=E.current,y=ue(j,p);return wt({defaultSize:I,dragState:x,layout:g,panelData:j,panelIndex:y})},[x,g]),H=u.useCallback(p=>{const{layout:I,panelDataArray:j}=E.current,{collapsedSize:y=0,collapsible:m,panelSize:C}=se(j,p,I);return w(C!=null,`Panel size not found for panel "${p.id}"`),m===!0&&ne(C,y)},[]),oe=u.useCallback(p=>{const{layout:I,panelDataArray:j}=E.current,{collapsedSize:y=0,collapsible:m,panelSize:C}=se(j,p,I);return w(C!=null,`Panel size not found for panel "${p.id}"`),!m||ae(C,y)>0},[]),B=u.useCallback(p=>{const{panelDataArray:I}=E.current;I.push(p),I.sort((j,y)=>{const m=j.order,C=y.order;return m==null&&C==null?0:m==null?-1:C==null?1:m-C}),E.current.panelDataArrayChanged=!0,W()},[W]);ie(()=>{if(E.current.panelDataArrayChanged){E.current.panelDataArrayChanged=!1;const{autoSaveId:p,onLayout:I,storage:j}=D.current,{layout:y,panelDataArray:m}=E.current;let C=null;if(p){const O=Pt(p,m,j);O&&($.current=new Map(Object.entries(O.expandToSizes)),C=O.layout)}C==null&&(C=Ct({panelDataArray:m}));const k=vn({layout:C,panelConstraints:m.map(O=>O.constraints)});yn(y,k)||(v(k),E.current.layout=k,I&&I(k),ce(m,k,A.current))}}),ie(()=>{const p=E.current;return()=>{p.layout=[]}},[]);const N=u.useCallback(p=>{let I=!1;const j=S.current;return j&&window.getComputedStyle(j,null).getPropertyValue("direction")==="rtl"&&(I=!0),function(m){m.preventDefault();const C=S.current;if(!C)return()=>null;const{direction:k,dragState:O,id:Z,keyboardResizeBy:Q,onLayout:M}=D.current,{layout:q,panelDataArray:ge}=E.current,{initialLayout:je}=O??{},Je=On(Z,p,C);let F=vt(m,p,k,O,Q,C);const pn=k==="horizontal";pn&&I&&(F=-F);const Xn=ge.map(qn=>qn.constraints),Re=xe({delta:F,initialLayout:je??q,panelConstraints:Xn,pivotIndices:Je,prevLayout:q,trigger:Tn(m)?"keyboard":"mouse-or-touch"}),mn=!Pe(q,Re);(kn(m)||Ln(m))&&J.current!=F&&(J.current=F,!mn&&F!==0?pn?nn(p,F<0?Dn:An):nn(p,F<0?Mn:_n):nn(p,0)),mn&&(v(Re),E.current.layout=Re,M&&M(Re),ce(ge,Re,A.current))}},[]),V=u.useCallback((p,I)=>{const{onLayout:j}=D.current,{layout:y,panelDataArray:m}=E.current,C=m.map(q=>q.constraints),{panelSize:k,pivotIndices:O}=se(m,p,y);w(k!=null,`Panel size not found for panel "${p.id}"`);const Q=ue(m,p)===m.length-1?k-I:I-k,M=xe({delta:Q,initialLayout:y,panelConstraints:C,pivotIndices:O,prevLayout:y,trigger:"imperative-api"});Pe(y,M)||(v(M),E.current.layout=M,j&&j(M),ce(m,M,A.current))},[]),me=u.useCallback((p,I)=>{const{layout:j,panelDataArray:y}=E.current,{collapsedSize:m=0,collapsible:C}=I,{collapsedSize:k=0,collapsible:O,maxSize:Z=100,minSize:Q=0}=p.constraints,{panelSize:M}=se(y,p,j);M!=null&&(C&&O&&ne(M,m)?ne(m,k)||V(p,k):M<Q?V(p,Q):M>Z&&V(p,Z))},[V]),he=u.useCallback((p,I)=>{const{direction:j}=D.current,{layout:y}=E.current;if(!S.current)return;const m=Ce(p,S.current);w(m,`Drag handle element not found for id "${p}"`);const C=Nn(j,I);P({dragHandleId:p,dragHandleRect:m.getBoundingClientRect(),initialCursorPosition:C,initialLayout:y})},[]),be=u.useCallback(()=>{P(null)},[]),we=u.useCallback(p=>{const{panelDataArray:I}=E.current,j=ue(I,p);j>=0&&(I.splice(j,1),delete A.current[p.id],E.current.panelDataArrayChanged=!0,W())},[W]),le=u.useMemo(()=>({collapsePanel:X,direction:r,dragState:x,expandPanel:ee,getPanelSize:K,getPanelStyle:G,groupId:d,isPanelCollapsed:H,isPanelExpanded:oe,reevaluatePanelConstraints:me,registerPanel:B,registerResizeHandle:N,resizePanel:V,startDragging:he,stopDragging:be,unregisterPanel:we,panelGroupElement:S.current}),[X,x,r,ee,K,G,d,H,oe,me,B,N,V,he,be,we]),ze={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return u.createElement(Xe.Provider,{value:le},u.createElement(R,{...f,children:n,className:t,id:s,ref:S,style:{...ze,...b},[_.group]:"",[_.groupDirection]:r,[_.groupId]:d}))}const Kn=u.forwardRef((e,n)=>u.createElement(Fn,{...e,forwardedRef:n}));Fn.displayName="PanelGroup";Kn.displayName="forwardRef(PanelGroup)";function ue(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function se(e,n,t){const r=ue(e,n),s=r===e.length-1?[r-1,r]:[r,r+1],a=t[r];return{...n.constraints,panelSize:a,pivotIndices:s}}function kt({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:r}){u.useEffect(()=>{if(e||t==null||r==null)return;const i=Ce(n,r);if(i==null)return;const s=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=i.getAttribute(_.groupId);w(l,`No group element found for id "${l}"`);const c=ve(l,r),b=$n(l,n,r);w(b!==null,`No resize element found for id "${n}"`);const R=a.shiftKey?b>0?b-1:c.length-1:b+1<c.length?b+1:0;c[R].focus();break}}};return i.addEventListener("keydown",s),()=>{i.removeEventListener("keydown",s)}},[r,e,n,t])}function Un({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:r,id:i,onBlur:s,onClick:a,onDragging:l,onFocus:c,onPointerDown:b,onPointerUp:R,style:f={},tabIndex:d=0,tagName:S="div",...x}){var P,g;const v=u.useRef(null),W=u.useRef({onClick:a,onDragging:l,onPointerDown:b,onPointerUp:R});u.useEffect(()=>{W.current.onClick=a,W.current.onDragging=l,W.current.onPointerDown=b,W.current.onPointerUp=R});const A=u.useContext(Xe);if(A===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:$,groupId:J,registerResizeHandle:D,startDragging:E,stopDragging:X,panelGroupElement:ee}=A,K=ln(i),[G,H]=u.useState("inactive"),[oe,B]=u.useState(!1),[N,V]=u.useState(null),me=u.useRef({state:G});ie(()=>{me.current.state=G}),u.useEffect(()=>{if(t)V(null);else{const le=D(K);V(()=>le)}},[t,K,D]);const he=(P=r?.coarse)!==null&&P!==void 0?P:15,be=(g=r?.fine)!==null&&g!==void 0?g:5;u.useEffect(()=>{if(t||N==null)return;const le=v.current;w(le,"Element ref not attached");let ze=!1;return ht(K,le,$,{coarse:he,fine:be},(I,j,y)=>{if(!j){H("inactive");return}switch(I){case"down":{H("drag"),ze=!1,w(y,'Expected event to be defined for "down" action'),E(K,y);const{onDragging:m,onPointerDown:C}=W.current;m?.(!0),C?.();break}case"move":{const{state:m}=me.current;ze=!0,m!=="drag"&&H("hover"),w(y,'Expected event to be defined for "move" action'),N(y);break}case"up":{H("hover"),X();const{onClick:m,onDragging:C,onPointerUp:k}=W.current;C?.(!1),k?.(),ze||m?.();break}}})},[he,$,t,be,D,K,N,E,X]),kt({disabled:t,handleId:K,resizeHandler:N,panelGroupElement:ee});const we={touchAction:"none",userSelect:"none"};return u.createElement(S,{...x,children:e,className:n,id:i,onBlur:()=>{B(!1),s?.()},onFocus:()=>{B(!0),c?.()},ref:v,role:"separator",style:{...we,...f},tabIndex:d,[_.groupDirection]:$,[_.groupId]:J,[_.resizeHandle]:"",[_.resizeHandleActive]:G==="drag"?"pointer":oe?"keyboard":void 0,[_.resizeHandleEnabled]:!t,[_.resizeHandleId]:K,[_.resizeHandleState]:G})}Un.displayName="PanelResizeHandle";function Lt(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Wt,Dt]=Zn({name:"ResizableContext"}),At=({id:e,ref:n,controlRef:t,disabled:r,keyboardStep:i,orientation:s="horizontal",storage:a,storageKey:l,groupProps:c={},onLayout:b,...R}={})=>{const f=u.useRef(null),d=u.useId();e??=d;const S=u.useCallback((P={})=>({...R,...P}),[R]),x=u.useCallback(({ref:P,...g}={})=>({id:e,autoSaveId:l,direction:s,keyboardResizeBy:i,storage:a,...c,...g,ref:wn(P,t,f),tagName:g.as??c.as,onLayout:ye(g.onLayout,c.onLayout,b)}),[e,s,c,t,l,i,b,a]);return u.useLayoutEffect(()=>{const P=dn(e);on(n,P)},[n,e]),{controlRef:f,disabled:r,orientation:s,getGroupProps:x,getRootProps:S}},Mt=({id:e,ref:n,as:t,controlRef:r,onCollapse:i,onExpand:s,onResize:a,...l})=>{const c=u.useId();e??=c;const b=u.useCallback(({ref:R,...f}={})=>({id:e,ref:wn(R,r),tagName:f.as??t,...f,...l,onCollapse:ye(f.onCollapse,i),onExpand:ye(f.onExpand,s),onResize:ye(f.onResize,a)}),[t,r,e,i,s,a,l]);return u.useLayoutEffect(()=>{const R=Lt(e);on(n,R)},[n,e]),{getItemProps:b}},_t=({id:e,ref:n,as:t,disabled:r,onDragging:i,...s})=>{const a=u.useId(),{controlRef:l,disabled:c,orientation:b}=Dt(),[R,f]=u.useState(!1),d=r||c;e??=a;const S=u.useCallback(g=>{g.preventDefault();const v=l.current?.getLayout();if(!v)return;const A=100/v.length,$=v.map(()=>A);l.current?.setLayout($)},[l]),x=u.useCallback((g={})=>({id:e,"aria-orientation":b,"data-active":hn(R),disabled:d,tagName:g.as??t,...s,...g,onDoubleClick:Qn(g.onDoubleClick,s.onDoubleClick,S),onDragging:ye(g.onDragging,i,f)}),[e,t,b,d,s,S,i,R]),P=u.useCallback((g={})=>({"data-active":hn(R),"data-icon":"",...g}),[R]);return u.useLayoutEffect(()=>{const g=Ce(e);on(n,g)},[n,e]),{getIconProps:P,getTriggerProps:x}},{withContext:fn,withProvider:Ht}=et("resizable",rt),L=Ht(({children:e,orientation:n,rootRef:t,...r})=>{const i=tt(n),{controlRef:s,disabled:a,orientation:l,getGroupProps:c,getRootProps:b}=At({...r,orientation:i}),R=u.useMemo(()=>({controlRef:s,disabled:a,orientation:l}),[a,l,s]);return o.jsx(Wt,{value:R,children:o.jsx(sn.div,{...b({ref:t}),children:o.jsx(Kn,{...c(),children:e})})})},"root",{transferProps:["orientation"]})(),$t=sn(En,{forwardProps:["order"]}),h=fn(e=>{const{getItemProps:n}=Mt(e);return o.jsx($t,{...n()})},"item")(),T=fn(({children:e,icon:n,iconProps:t,...r})=>{const{getIconProps:i,getTriggerProps:s}=_t(r);return o.jsxs(sn.div,{as:Un,...s(),children:[n?o.jsx(Ot,{...i(t),children:n}):null,e]})},"trigger")(),Ot=fn("div","icon")(),sr={component:L,title:"Components / Resizable"},Ee=()=>o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),Te=()=>o.jsx(nt,{variant:"stack",rows:["border","spacer","plain"],children:(e,n,t)=>o.jsxs(L,{variant:n,borderWidth:n==="border"?"1px":void 0,h:"md",rounded:n==="border"?"l2":void 0,children:[o.jsx(h,{as:z,borderWidth:n==="spacer"?"1px":void 0,rounded:n==="spacer"?"l2":void 0,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,borderWidth:n==="spacer"?"1px":void 0,rounded:n==="spacer"?"l2":void 0,children:"Two"})]},t)}),ke=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{colorScheme:"primary",variant:"spacer",h:"md",children:[o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"Two"})]}),o.jsxs(L,{colorScheme:"red",variant:"spacer",h:"md",children:[o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"Two"})]})]}),Le=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),o.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]})]}),We=()=>o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,defaultSize:30,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),De=()=>o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,maxSize:70,minSize:30,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),Ae=()=>o.jsxs(L,{borderWidth:"1px",h:"md",keyboardStep:25,rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),Me=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,collapsedSize:5,collapsible:!0,defaultSize:15,maxSize:20,minSize:15,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),o.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[o.jsx(h,{as:z,collapsedSize:10,collapsible:!0,defaultSize:25,maxSize:30,minSize:25,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]})]}),_e=()=>{const e=u.useRef(null),n=u.useRef(null),t=u.useRef(null),r=u.useRef(null);return u.useEffect(()=>{console.log("Root ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Trigger ref",r)},[]),o.jsxs(L,{ref:n,borderWidth:"1px",h:"md",rootRef:e,rounded:"l2",children:[o.jsx(h,{ref:t,as:z,children:"One"}),o.jsx(T,{ref:r}),o.jsx(h,{as:z,children:"Two"})]})},He=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{icon:o.jsx(zn,{})}),o.jsx(h,{as:z,children:"Two"})]}),o.jsxs(L,{variant:"spacer",h:"md",orientation:"vertical",children:[o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"One"}),o.jsx(T,{icon:o.jsx(zn,{})}),o.jsx(h,{as:z,borderWidth:"1px",rounded:"l2",children:"Two"})]})]}),$e=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,children:"Left"}),o.jsx(T,{}),o.jsx(h,{children:o.jsxs(L,{orientation:"vertical",children:[o.jsx(h,{as:z,children:"Top"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Bottom"})]})})]}),o.jsxs(L,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[o.jsx(h,{as:z,children:"Top"}),o.jsx(T,{}),o.jsx(h,{children:o.jsxs(L,{children:[o.jsx(h,{as:z,children:"Left"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Right"})]})})]})]}),Oe=()=>o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",disabled:!0,h:"md",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Three"})]}),o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,children:"One"}),o.jsx(T,{disabled:!0}),o.jsx(h,{as:z,children:"Two"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Three"})]})]}),Ne=()=>o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]}),Be=()=>{const[e,n]=bn(!0),[t,r]=bn(!0);return o.jsxs(o.Fragment,{children:[o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",storageKey:"persistence",children:[o.jsx(h,{id:"one",as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{id:"two",as:z,children:"Two"})]}),o.jsxs(jn,{gap:"md",children:[o.jsxs(de,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),o.jsxs(de,{onClick:r.toggle,children:[t?"Hidden":"Show"," Right"]})]}),o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",storageKey:"conditional",children:[e?o.jsxs(o.Fragment,{children:[o.jsx(h,{id:"left",as:z,minSize:10,order:1,children:"Left"}),o.jsx(T,{})]}):null,o.jsx(h,{id:"middle",as:z,minSize:10,order:2,children:"Middle"}),t?o.jsxs(o.Fragment,{children:[o.jsx(T,{}),o.jsx(h,{id:"right",as:z,minSize:10,order:3,children:"Right"})]}):null]})]})},Ge=()=>{const e=u.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]??null:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",storage:e,storageKey:"persistence",children:[o.jsx(h,{id:"one",as:z,children:"One"}),o.jsx(T,{}),o.jsx(h,{id:"two",as:z,children:"Two"})]})},Ve=()=>{const e=u.useRef(null);return o.jsxs(o.Fragment,{children:[o.jsxs(jn,{gap:"md",children:[o.jsx(de,{onClick:()=>e.current?.collapse(),children:'Collapse "one"'}),o.jsx(de,{onClick:()=>e.current?.expand(),children:'Expand "one"'}),o.jsx(de,{onClick:()=>e.current?.resize(30),children:'Resize "one" to 30'}),o.jsx(de,{onClick:()=>e.current?.resize(50),children:'Resize "one" to 50'})]}),o.jsxs(L,{borderWidth:"1px",h:"md",rounded:"l2",children:[o.jsx(h,{as:z,collapsedSize:15,collapsible:!0,controlRef:e,maxSize:50,minSize:30,children:"One"}),o.jsx(T,{}),o.jsx(h,{as:z,children:"Two"})]})]})};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item as={Center}>One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,...Ee.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["border", "spacer", "plain"]}>
      {(_, row, key) => <Resizable.Root key={key} variant={row} borderWidth={row === "border" ? "1px" : undefined} h="md" rounded={row === "border" ? "l2" : undefined}>
          <Resizable.Item as={Center} borderWidth={row === "spacer" ? "1px" : undefined} rounded={row === "spacer" ? "l2" : undefined}>
            One
          </Resizable.Item>

          <Resizable.Trigger />

          <Resizable.Item as={Center} borderWidth={row === "spacer" ? "1px" : undefined} rounded={row === "spacer" ? "l2" : undefined}>
            Two
          </Resizable.Item>
        </Resizable.Root>}
    </PropsTable>;
}`,...Te.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root colorScheme="primary" variant="spacer" h="md">
        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root colorScheme="red" variant="spacer" h="md">
        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...ke.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" orientation="horizontal" rounded="l2">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...Le.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item as={Center} defaultSize={30}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,...We.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item as={Center} maxSize={70} minSize={30}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,...De.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" keyboardStep={25} rounded="l2">
      <Resizable.Item as={Center}>One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,...Ae.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item as={Center} collapsedSize={5} collapsible defaultSize={15} maxSize={20} minSize={15} onCollapse={() => {
        console.log("collapsed item");
      }} onExpand={() => {
        console.log("expand item");
      }}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item as={Center} collapsedSize={10} collapsible defaultSize={25} maxSize={30} minSize={25} onCollapse={() => {
        console.log("collapsed item");
      }} onExpand={() => {
        console.log("expand item");
      }}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...Me.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("Root ref", rootRef);
    console.log("Group ref", groupRef);
    console.log("Item ref", itemRef);
    console.log("Trigger ref", triggerRef);
  }, []);
  return <Resizable.Root ref={groupRef} borderWidth="1px" h="md" rootRef={rootRef} rounded="l2">
      <Resizable.Item ref={itemRef} as={Center}>
        One
      </Resizable.Item>

      <Resizable.Trigger ref={triggerRef} />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,..._e.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="spacer" h="md" orientation="vertical">
        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item as={Center} borderWidth="1px" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...He.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item as={Center}>Left</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root orientation="vertical">
            <Resizable.Item as={Center}>Top</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item as={Center}>Bottom</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item as={Center}>Top</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root>
            <Resizable.Item as={Center}>Left</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item as={Center}>Right</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...$e.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" disabled h="md" rounded="l2">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Three</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item as={Center}>One</Resizable.Item>

        <Resizable.Trigger disabled />

        <Resizable.Item as={Center}>Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Three</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...Oe.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item as={Center}>Two</Resizable.Item>
    </Resizable.Root>;
}`,...Ne.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
  const [showLeft, showLeftControls] = useBoolean(true);
  const [showRight, showRightControls] = useBoolean(true);
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2" storageKey="persistence">
        <Resizable.Item id="one" as={Center}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item id="two" as={Center}>
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Wrap gap="md">
        <Button onClick={showLeftControls.toggle}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={showRightControls.toggle}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2" storageKey="conditional">
        {showLeft ? <>
            <Resizable.Item id="left" as={Center} minSize={10} order={1}>
              Left
            </Resizable.Item>

            <Resizable.Trigger />
          </> : null}

        <Resizable.Item id="middle" as={Center} minSize={10} order={2}>
          Middle
        </Resizable.Item>

        {showRight ? <>
            <Resizable.Trigger />

            <Resizable.Item id="right" as={Center} minSize={10} order={3}>
              Right
            </Resizable.Item>
          </> : null}
      </Resizable.Root>
    </>;
}`,...Be.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
  const storage: Resizable.Storage = useMemo(() => ({
    getItem: key => {
      const match = document.cookie.match(new RegExp(\`(^| )\${key}=([^;]+)\`));
      return match ? match[2] ?? null : null;
    },
    setItem: (key, value) => {
      document.cookie = \`\${key}=\${value}; max-age=31536000; path=/\`;
    }
  }), []);
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2" storage={storage} storageKey="persistence">
      <Resizable.Item id="one" as={Center}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" as={Center}>
        Two
      </Resizable.Item>
    </Resizable.Root>;
}`,...Ge.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
  const controlRef = useRef<Resizable.ItemControl>(null);
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

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item as={Center} collapsedSize={15} collapsible controlRef={controlRef} maxSize={50} minSize={30}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item as={Center}>Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...Ve.parameters?.docs?.source}}};const ir=["Basic","Variant","ColorScheme","Orientation","DefaultSize","MinMaxSize","KeyboardStep","Collapsible","Refs","Icon","NestedResizable","Disabled","OnResize","LocaleStorage","CookieStorage","CustomControls"];export{Ee as Basic,Me as Collapsible,ke as ColorScheme,Ge as CookieStorage,Ve as CustomControls,We as DefaultSize,Oe as Disabled,He as Icon,Ae as KeyboardStep,Be as LocaleStorage,De as MinMaxSize,$e as NestedResizable,Ne as OnResize,Le as Orientation,_e as Refs,Te as Variant,ir as __namedExportsOrder,sr as default};
