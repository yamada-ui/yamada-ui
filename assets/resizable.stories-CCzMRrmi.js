import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as mn,z as fn}from"./fontawesome-icon-JaZ0dMxh.js";import{u as pn}from"./index-rYLD436_.js";import{a as Ct,r as O}from"./index-CBqU2yxZ.js";import{p as Qt,h as er,y as hn,u as Ie,c as tn}from"./factory-D1MzC1Q2.js";import{f as rn}from"./forward-ref-DuAegr0M.js";import{a as nr}from"./use-component-style-i7T2CPTB.js";import{o as tr}from"./theme-provider-LCtE2tbw.js";import{b as rr}from"./icon-B3uV5IZ5.js";import{C as h}from"./center-D4kPHTkn.js";import{W as St}from"./flex-LFJj8xQk.js";import{B as fe}from"./button-BkvW6mjw.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CYT3-ShY.js";import"./use-ripple-K38Z2Edq.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-C1gM6QUe.js";import"./loading-BxQYss10.js";import"./index-BY3Kv4Lb.js";import"./index-D62GHI4F.js";function vt(e){return e.parentNode&&e.parentNode.host||e.parentNode}var sr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ir(e){var n=getComputedStyle(vt(e)).display;return n==="flex"||n==="inline-flex"}function or(e){var n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&n.position!=="static"||ir(e)||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||sr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function zn(e){for(var n=e.length;n--;)if(or(e[n]))return e[n];return null}function bn(e){for(var n=[];e;)n.push(e),e=vt(e);return n}function gn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function ye(e){return e[e.length-1]}function ar(e,n){if(e===n)throw new Error("Cannot compare node with itself");for(var t={a:bn(e),b:bn(n)},s;ye(t.a)===ye(t.b);)e=t.a.pop(),n=t.b.pop(),s=e;var o={a:zn(t.a),b:zn(t.b)},i={a:gn(o.a),b:gn(o.b)};if(i.a===i.b)for(var a=s.childNodes,l={a:ye(t.a),b:ye(t.b)},c=a.length;c--;){var z=a[c];if(z===l.a)return 1;if(z===l.b)return-1}return Math.sign(i.a-i.b)}const{createElement:he,createContext:lr,createRef:as,forwardRef:wt,useCallback:V,useContext:yt,useEffect:le,useImperativeHandle:jt,useLayoutEffect:cr,useMemo:dr,useRef:G,useState:Re}=Ct,xn=Ct.useId,ur=cr,Ue=lr(null);Ue.displayName="PanelGroupContext";const ce=ur,mr=typeof xn=="function"?xn:()=>null;let fr=0;function sn(e=null){const n=mr(),t=G(e||n||null);return t.current===null&&(t.current=""+fr++),e??t.current}function Tt({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:o,forwardedRef:i,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:p,onResize:d,order:u,style:m,tagName:g="div",...P}){const x=yt(Ue);if(x===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:y,expandPanel:D,getPanelSize:W,getPanelStyle:N,groupId:L,isPanelCollapsed:v,reevaluatePanelConstraints:Q,registerPanel:K,resizePanel:Z,unregisterPanel:ne}=x,q=sn(a),M=G({callbacks:{onCollapse:z,onExpand:p,onResize:d},constraints:{collapsedSize:t,collapsible:s,defaultSize:o,maxSize:l,minSize:c},id:q,idIsFromProps:a!==void 0,order:u});G({didLogMissingDefaultSizeWarning:!1}),ce(()=>{const{callbacks:$,constraints:_}=M.current,J={..._};M.current.id=q,M.current.idIsFromProps=a!==void 0,M.current.order=u,$.onCollapse=z,$.onExpand=p,$.onResize=d,_.collapsedSize=t,_.collapsible=s,_.defaultSize=o,_.maxSize=l,_.minSize=c,(J.collapsedSize!==_.collapsedSize||J.collapsible!==_.collapsible||J.maxSize!==_.maxSize||J.minSize!==_.minSize)&&Q(M.current,J)}),ce(()=>{const $=M.current;return K($),()=>{ne($)}},[u,q,K,ne]),jt(i,()=>({collapse:()=>{y(M.current)},expand:()=>{D(M.current)},getId(){return q},getSize(){return W(M.current)},isCollapsed(){return v(M.current)},isExpanded(){return!v(M.current)},resize:$=>{Z(M.current,$)}}),[y,D,W,v,q,Z]);const ee=N(M.current,o);return he(g,{...P,children:e,className:n,id:a,style:{...ee,...m},"data-panel":"","data-panel-collapsible":s||void 0,"data-panel-group-id":L,"data-panel-id":q,"data-panel-size":parseFloat(""+ee.flexGrow).toFixed(1)})}const Pt=wt((e,n)=>he(Tt,{...e,forwardedRef:n}));Tt.displayName="Panel";Pt.displayName="forwardRef(Panel)";let nn=null,ae=null;function pr(e,n){if(n){const t=(n&kt)!==0,s=(n&Dt)!==0,o=(n&Mt)!==0,i=(n&At)!==0;if(t)return o?"se-resize":i?"ne-resize":"e-resize";if(s)return o?"sw-resize":i?"nw-resize":"w-resize";if(o)return"s-resize";if(i)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function hr(){ae!==null&&(document.head.removeChild(ae),nn=null,ae=null)}function Qe(e,n){const t=pr(e,n);nn!==t&&(nn=t,ae===null&&(ae=document.createElement("style"),document.head.appendChild(ae)),ae.innerHTML=`*{cursor: ${t}!important;}`)}function Et(e){return e.type==="keydown"}function Lt(e){return e.type.startsWith("mouse")}function Wt(e){return e.type.startsWith("touch")}function Ze(e){if(Lt(e))return{x:e.pageX,y:e.pageY};if(Wt(e)){const n=e.touches[0];if(n&&n.pageX&&n.pageY)return{x:n.pageX,y:n.pageY}}return{x:1/0,y:1/0}}function zr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function br(e,n,t){return t?e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y:e.x<=n.x+n.width&&e.x+e.width>=n.x&&e.y<=n.y+n.height&&e.y+e.height>=n.y}const kt=1,Dt=2,Mt=4,At=8,gr=zr()==="coarse";let ie=[],qe=!1,se=new Map,Je=new Map;const Ve=new Set;function Ot(e,n,t,s,o){var i;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:s,setResizeHandlerState:o},c=(i=se.get(a))!==null&&i!==void 0?i:0;return se.set(a,c+1),Ve.add(l),Xe(),function(){var p;Je.delete(e),Ve.delete(l);const d=(p=se.get(a))!==null&&p!==void 0?p:1;se.set(a,d-1),Xe(),d===1&&se.delete(a)}}function je(e){const{target:n}=e,{x:t,y:s}=Ze(e);qe=!0,on({target:n,x:t,y:s}),Xe(),ie.length>0&&(an("down",e),e.preventDefault())}function te(e){const{x:n,y:t}=Ze(e);if(!qe){const{target:s}=e;on({target:s,x:n,y:t})}an("move",e),_t(),ie.length>0&&e.preventDefault()}function re(e){const{target:n}=e,{x:t,y:s}=Ze(e);Je.clear(),qe=!1,ie.length>0&&e.preventDefault(),an("up",e),on({target:n,x:t,y:s}),_t(),Xe()}function on({target:e,x:n,y:t}){ie.splice(0);let s=null;e instanceof HTMLElement&&(s=e),Ve.forEach(o=>{const{element:i,hitAreaMargins:a}=o,l=i.getBoundingClientRect(),{bottom:c,left:z,right:p,top:d}=l,u=gr?a.coarse:a.fine;if(n>=z-u&&n<=p+u&&t>=d-u&&t<=c+u){if(s!==null&&i!==s&&!i.contains(s)&&!s.contains(i)&&ar(s,i)>0){let g=s,P=!1;for(;g&&!g.contains(i);){if(br(g.getBoundingClientRect(),l,!0)){P=!0;break}g=g.parentElement}if(P)return}ie.push(o)}})}function en(e,n){Je.set(e,n)}function _t(){let e=!1,n=!1;ie.forEach(s=>{const{direction:o}=s;o==="horizontal"?e=!0:n=!0});let t=0;Je.forEach(s=>{t|=s}),e&&n?Qe("intersection",t):e?Qe("horizontal",t):n?Qe("vertical",t):hr()}function Xe(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",re),t.removeEventListener("mousedown",je),t.removeEventListener("mouseleave",te),t.removeEventListener("mousemove",te),t.removeEventListener("touchmove",te),t.removeEventListener("touchstart",je)}),window.removeEventListener("mouseup",re),window.removeEventListener("touchcancel",re),window.removeEventListener("touchend",re),Ot.length>0&&(qe?(ie.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",re),t.addEventListener("mouseleave",te),t.addEventListener("mousemove",te),t.addEventListener("touchmove",te,{passive:!1}))}),window.addEventListener("mouseup",re),window.addEventListener("touchcancel",re),window.addEventListener("touchend",re)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("mousedown",je),t.addEventListener("mousemove",te),t.addEventListener("touchmove",te,{passive:!1}),t.addEventListener("touchstart",je))}))}function an(e,n){Ve.forEach(t=>{const{setResizeHandlerState:s}=t,o=ie.includes(t);s(e,o,n)})}function S(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}const Ht=10;function Ce(e,n,t=Ht){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const s=e-n;return s===0?0:s>0?1:-1}function X(e,n,t){return Ce(e,n,t)===0}function pe({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];S(s!=null);let{collapsedSize:o=0,collapsible:i,maxSize:a=100,minSize:l=0}=s;if(Ce(t,l)<0)if(i){const c=(o+l)/2;Ce(t,c)<0?t=o:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed(Ht)),t}function ge({delta:e,layout:n,panelConstraints:t,pivotIndices:s,trigger:o}){if(X(e,0))return n;const i=[...n],[a,l]=s;S(a!=null),S(l!=null);let c=0;if(o==="keyboard"){{const p=e<0?l:a,d=t[p];if(S(d),d.collapsible){const u=n[p];S(u!=null);const m=t[p];S(m);const{collapsedSize:g=0,minSize:P=0}=m;if(X(u,g)){const x=P-u;Ce(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}{const p=e<0?a:l,d=t[p];S(d);const{collapsible:u}=d;if(u){const m=n[p];S(m!=null);const g=t[p];S(g);const{collapsedSize:P=0,minSize:x=0}=g;if(X(m,x)){const y=m-P;Ce(y,Math.abs(e))>0&&(e=e<0?0-y:y)}}}}{const p=e<0?1:-1;let d=e<0?l:a,u=0;for(;;){const g=n[d];S(g!=null);const x=pe({panelConstraints:t,panelIndex:d,size:100})-g;if(u+=x,d+=p,d<0||d>=t.length)break}const m=Math.min(Math.abs(e),Math.abs(u));e=e<0?0-m:m}{let d=e<0?a:l;for(;d>=0&&d<t.length;){const u=Math.abs(e)-Math.abs(c),m=n[d];S(m!=null);const g=m-u,P=pe({panelConstraints:t,panelIndex:d,size:g});if(!X(m,P)&&(c+=m-P,i[d]=P,c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(X(c,0))return n;{const p=e<0?l:a,d=n[p];S(d!=null);const u=d+c,m=pe({panelConstraints:t,panelIndex:p,size:u});if(i[p]=m,!X(m,u)){let g=u-m,x=e<0?l:a;for(;x>=0&&x<t.length;){const y=i[x];S(y!=null);const D=y+g,W=pe({panelConstraints:t,panelIndex:x,size:D});if(X(y,W)||(g-=W-y,i[x]=W),X(g,0))break;e>0?x--:x++}}}const z=i.reduce((p,d)=>d+p,0);return X(z,100)?i:n}function xr({layout:e,panelsArray:n,pivotIndices:t}){let s=0,o=100,i=0,a=0;const l=t[0];S(l!=null),n.forEach((d,u)=>{const{constraints:m}=d,{maxSize:g=100,minSize:P=0}=m;u===l?(s=P,o=g):(i+=P,a+=g)});const c=Math.min(o,100-i),z=Math.max(s,100-a),p=e[l];return{valueMax:c,valueMin:z,valueNow:p}}function Se(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Nt(e,n,t=document){const o=Se(e,t).findIndex(i=>i.getAttribute("data-panel-resize-handle-id")===n);return o??null}function Bt(e,n,t){const s=Nt(e,n,t);return s!=null?[s,s+1]:[-1,-1]}function ln(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const s=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return s||null}function ve(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Rr(e,n,t,s=document){var o,i,a,l;const c=ve(n,s),z=Se(e,s),p=c?z.indexOf(c):-1,d=(o=(i=t[p])===null||i===void 0?void 0:i.id)!==null&&o!==void 0?o:null,u=(a=(l=t[p+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[d,u]}function Ir({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:o,panelGroupElement:i,setLayout:a}){G({didWarnAboutMissingResizeHandle:!1}),ce(()=>{if(!i)return;const l=Se(t,i);for(let c=0;c<o.length-1;c++){const{valueMax:z,valueMin:p,valueNow:d}=xr({layout:s,panelsArray:o,pivotIndices:[c,c+1]}),u=l[c];if(u!=null){const m=o[c];S(m),u.setAttribute("aria-controls",m.id),u.setAttribute("aria-valuemax",""+Math.round(z)),u.setAttribute("aria-valuemin",""+Math.round(p)),u.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,s,o,i]),le(()=>{if(!i)return;const l=n.current;S(l);const{panelDataArray:c}=l,z=ln(t,i);S(z!=null,`No group found for id "${t}"`);const p=Se(t,i);S(p);const d=p.map(u=>{const m=u.getAttribute("data-panel-resize-handle-id");S(m);const[g,P]=Rr(t,m,c,i);if(g==null||P==null)return()=>{};const x=y=>{if(!y.defaultPrevented)switch(y.key){case"Enter":{y.preventDefault();const D=c.findIndex(W=>W.id===g);if(D>=0){const W=c[D];S(W);const N=s[D],{collapsedSize:L=0,collapsible:v,minSize:Q=0}=W.constraints;if(N!=null&&v){const K=ge({delta:X(N,L)?Q-L:L-N,layout:s,panelConstraints:c.map(Z=>Z.constraints),pivotIndices:Bt(t,m,i),trigger:"keyboard"});s!==K&&a(K)}}break}}};return u.addEventListener("keydown",x),()=>{u.removeEventListener("keydown",x)}});return()=>{d.forEach(u=>u())}},[i,e,n,t,s,o,a])}function Rn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function $t(e,n){const t=e==="horizontal",{x:s,y:o}=Ze(n);return t?s:o}function Cr(e,n,t,s,o){const i=t==="horizontal",a=ve(n,o);S(a);const l=a.getAttribute("data-panel-group-id");S(l);let{initialCursorPosition:c}=s;const z=$t(t,e),p=ln(l,o);S(p);const d=p.getBoundingClientRect(),u=i?d.width:d.height;return(z-c)/u*100}function Sr(e,n,t,s,o,i){if(Et(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:o!=null?l=o:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return s==null?0:Cr(e,n,t,s,i)}function vr({panelDataArray:e}){const n=Array(e.length),t=e.map(i=>i.constraints);let s=0,o=100;for(let i=0;i<e.length;i++){const a=t[i];S(a);const{defaultSize:l}=a;l!=null&&(s++,n[i]=l,o-=l)}for(let i=0;i<e.length;i++){const a=t[i];S(a);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-s,z=o/c;s++,n[i]=z,o-=z}return n}function ue(e,n,t){n.forEach((s,o)=>{const i=e[o];S(i);const{callbacks:a,constraints:l,id:c}=i,{collapsedSize:z=0,collapsible:p}=l,d=t[c];if(d==null||s!==d){t[c]=s;const{onCollapse:u,onExpand:m,onResize:g}=a;g&&g(s,d),p&&(u||m)&&(m&&(d==null||d===z)&&s!==z&&m(),u&&(d==null||d!==z)&&s===z&&u())}})}function Te(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function wr({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:o,precision:i=3}){const a=t[o];let l;return a==null?l=e!=null?e.toPrecision(i):"1":s.length===1?l="1":l=a.toPrecision(i),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function yr(e,n=10){let t=null;return(...o)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...o)},n)}}function In(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Ft(e){return`react-resizable-panels:${e}`}function Gt(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:o,order:i}=n;return o?s:i?`${i}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Kt(e,n){try{const t=Ft(e),s=n.getItem(t);if(s){const o=JSON.parse(s);if(typeof o=="object"&&o!=null)return o}}catch{}return null}function jr(e,n,t){var s,o;const i=(s=Kt(e,t))!==null&&s!==void 0?s:{},a=Gt(n);return(o=i[a])!==null&&o!==void 0?o:null}function Tr(e,n,t,s,o){var i;const a=Ft(e),l=Gt(n),c=(i=Kt(e,o))!==null&&i!==void 0?i:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{o.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function Cn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((i,a)=>i+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(i=>`${i}%`).join(", ")}`);if(!X(s,100))for(let i=0;i<n.length;i++){const a=t[i];S(a!=null);const l=100/s*a;t[i]=l}let o=0;for(let i=0;i<n.length;i++){const a=t[i];S(a!=null);const l=pe({panelConstraints:n,panelIndex:i,size:a});a!=l&&(o+=a-l,t[i]=l)}if(!X(o,0))for(let i=0;i<n.length;i++){const a=t[i];S(a!=null);const l=a+o,c=pe({panelConstraints:n,panelIndex:i,size:l});if(a!==c&&(o-=c-a,t[i]=c,X(o,0)))break}return t}const Pr=100,xe={getItem:e=>(In(xe),xe.getItem(e)),setItem:(e,n)=>{In(xe),xe.setItem(e,n)}},Sn={};function Vt({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:o,id:i=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=xe,style:z,tagName:p="div",...d}){const u=sn(i),m=G(null),[g,P]=Re(null),[x,y]=Re([]),D=G({}),W=G(new Map),N=G(0),L=G({autoSaveId:e,direction:s,dragState:g,id:u,keyboardResizeBy:l,onLayout:a,storage:c}),v=G({layout:x,panelDataArray:[],panelDataArrayChanged:!1});G({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),jt(o,()=>({getId:()=>L.current.id,getLayout:()=>{const{layout:b}=v.current;return b},setLayout:b=>{const{onLayout:C}=L.current,{layout:I,panelDataArray:R}=v.current,w=Cn({layout:b,panelConstraints:R.map(j=>j.constraints)});Rn(I,w)||(y(w),v.current.layout=w,C&&C(w),ue(R,w,D.current))}}),[]),ce(()=>{L.current.autoSaveId=e,L.current.direction=s,L.current.dragState=g,L.current.id=u,L.current.onLayout=a,L.current.storage=c}),Ir({committedValuesRef:L,eagerValuesRef:v,groupId:u,layout:x,panelDataArray:v.current.panelDataArray,setLayout:y,panelGroupElement:m.current}),le(()=>{const{panelDataArray:b}=v.current;if(e){if(x.length===0||x.length!==b.length)return;let C=Sn[e];C==null&&(C=yr(Tr,Pr),Sn[e]=C);const I=[...b],R=new Map(W.current);C(e,I,R,x,c)}},[e,x,c]),le(()=>{});const Q=V(b=>{const{onLayout:C}=L.current,{layout:I,panelDataArray:R}=v.current;if(b.constraints.collapsible){const w=R.map(U=>U.constraints),{collapsedSize:j=0,panelSize:k,pivotIndices:H}=oe(R,b,I);if(S(k!=null),k!==j){W.current.set(b.id,k);const B=me(R,b)===R.length-1?k-j:j-k,A=ge({delta:B,layout:I,panelConstraints:w,pivotIndices:H,trigger:"imperative-api"});Te(I,A)||(y(A),v.current.layout=A,C&&C(A),ue(R,A,D.current))}}},[]),K=V(b=>{const{onLayout:C}=L.current,{layout:I,panelDataArray:R}=v.current;if(b.constraints.collapsible){const w=R.map(B=>B.constraints),{collapsedSize:j=0,panelSize:k,minSize:H=0,pivotIndices:U}=oe(R,b,I);if(k===j){const B=W.current.get(b.id),A=B!=null&&B>=H?B:H,Ye=me(R,b)===R.length-1?k-A:A-k,F=ge({delta:Ye,layout:I,panelConstraints:w,pivotIndices:U,trigger:"imperative-api"});Te(I,F)||(y(F),v.current.layout=F,C&&C(F),ue(R,F,D.current))}}},[]),Z=V(b=>{const{layout:C,panelDataArray:I}=v.current,{panelSize:R}=oe(I,b,C);return S(R!=null),R},[]),ne=V((b,C)=>{const{panelDataArray:I}=v.current,R=me(I,b);return wr({defaultSize:C,dragState:g,layout:x,panelData:I,panelIndex:R})},[g,x]),q=V(b=>{const{layout:C,panelDataArray:I}=v.current,{collapsedSize:R=0,collapsible:w,panelSize:j}=oe(I,b,C);return w===!0&&j===R},[]),M=V(b=>{const{layout:C,panelDataArray:I}=v.current,{collapsedSize:R=0,collapsible:w,panelSize:j}=oe(I,b,C);return S(j!=null),!w||j>R},[]),ee=V(b=>{const{panelDataArray:C}=v.current;C.push(b),C.sort((I,R)=>{const w=I.order,j=R.order;return w==null&&j==null?0:w==null?-1:j==null?1:w-j}),v.current.panelDataArrayChanged=!0},[]);ce(()=>{if(v.current.panelDataArrayChanged){v.current.panelDataArrayChanged=!1;const{autoSaveId:b,onLayout:C,storage:I}=L.current,{layout:R,panelDataArray:w}=v.current;let j=null;if(b){const H=jr(b,w,I);H&&(W.current=new Map(Object.entries(H.expandToSizes)),j=H.layout)}j==null&&(j=vr({panelDataArray:w}));const k=Cn({layout:j,panelConstraints:w.map(H=>H.constraints)});Rn(R,k)||(y(k),v.current.layout=k,C&&C(k),ue(w,k,D.current))}}),ce(()=>{const b=v.current;return()=>{b.layout=[]}},[]);const $=V(b=>function(I){I.preventDefault();const R=m.current;if(!R)return()=>null;const{direction:w,dragState:j,id:k,keyboardResizeBy:H,onLayout:U}=L.current,{layout:B,panelDataArray:A}=v.current,{initialLayout:de}=j??{},Ye=Bt(k,b,R);let F=Sr(I,b,w,j,H,R);if(F===0)return;const dn=w==="horizontal";document.dir==="rtl"&&dn&&(F=-F);const Jt=A.map(Yt=>Yt.constraints),be=ge({delta:F,layout:de??B,panelConstraints:Jt,pivotIndices:Ye,trigger:Et(I)?"keyboard":"mouse-or-touch"}),un=!Te(B,be);(Lt(I)||Wt(I))&&N.current!=F&&(N.current=F,un?en(b,0):dn?en(b,F<0?kt:Dt):en(b,F<0?Mt:At)),un&&(y(be),v.current.layout=be,U&&U(be),ue(A,be,D.current))},[]),_=V((b,C)=>{const{onLayout:I}=L.current,{layout:R,panelDataArray:w}=v.current,j=w.map(de=>de.constraints),{panelSize:k,pivotIndices:H}=oe(w,b,R);S(k!=null);const B=me(w,b)===w.length-1?k-C:C-k,A=ge({delta:B,layout:R,panelConstraints:j,pivotIndices:H,trigger:"imperative-api"});Te(R,A)||(y(A),v.current.layout=A,I&&I(A),ue(w,A,D.current))},[]),J=V((b,C)=>{const{layout:I,panelDataArray:R}=v.current,{collapsedSize:w=0,collapsible:j}=C,{collapsedSize:k=0,collapsible:H,maxSize:U=100,minSize:B=0}=b.constraints,{panelSize:A}=oe(R,b,I);S(A!=null),j&&H&&A===w?w!==k&&_(b,k):A<B?_(b,B):A>U&&_(b,U)},[_]),we=V((b,C)=>{const{direction:I}=L.current,{layout:R}=v.current;if(!m.current)return;const w=ve(b,m.current);S(w);const j=$t(I,C);P({dragHandleId:b,dragHandleRect:w.getBoundingClientRect(),initialCursorPosition:j,initialLayout:R})},[]),ze=V(()=>{P(null)},[]),Y=V(b=>{const{panelDataArray:C}=v.current,I=me(C,b);I>=0&&(C.splice(I,1),delete D.current[b.id],v.current.panelDataArrayChanged=!0)},[]),Zt=dr(()=>({collapsePanel:Q,direction:s,dragState:g,expandPanel:K,getPanelSize:Z,getPanelStyle:ne,groupId:u,isPanelCollapsed:q,isPanelExpanded:M,reevaluatePanelConstraints:J,registerPanel:ee,registerResizeHandle:$,resizePanel:_,startDragging:we,stopDragging:ze,unregisterPanel:Y,panelGroupElement:m.current}),[Q,g,s,K,Z,ne,u,q,M,J,ee,$,_,we,ze,Y]),qt={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return he(Ue.Provider,{value:Zt},he(p,{...d,children:n,className:t,id:i,ref:m,style:{...qt,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":u}))}const Xt=wt((e,n)=>he(Vt,{...e,forwardedRef:n}));Vt.displayName="PanelGroup";Xt.displayName="forwardRef(PanelGroup)";function me(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function oe(e,n,t){const s=me(e,n),i=s===e.length-1?[s-1,s]:[s,s+1],a=t[s];return{...n.constraints,panelSize:a,pivotIndices:i}}function Er({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:s}){le(()=>{if(e||t==null||s==null)return;const o=ve(n,s);if(o==null)return;const i=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=o.getAttribute("data-panel-group-id");S(l);const c=Se(l,s),z=Nt(l,n,s);S(z!==null);const p=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[p].focus();break}}};return o.addEventListener("keydown",i),()=>{o.removeEventListener("keydown",i)}},[s,e,n,t])}function Ut({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:s,id:o,onDragging:i,style:a={},tabIndex:l=0,tagName:c="div",...z}){const p=G(null),d=G({onDragging:i});le(()=>{d.current.onDragging=i});const u=yt(Ue);if(u===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:m,groupId:g,registerResizeHandle:P,startDragging:x,stopDragging:y,panelGroupElement:D}=u,W=sn(o),[N,L]=Re("inactive"),[v,Q]=Re(!1),[K,Z]=Re(null),ne=G({state:N});return ce(()=>{ne.current.state=N}),le(()=>{if(t)Z(null);else{const M=P(W);Z(()=>M)}},[t,W,P]),le(()=>{var M,ee;if(t||K==null)return;const $=p.current;S($);const _=(J,we,ze)=>{if(we)switch(J){case"down":{L("drag"),x(W,ze);const{onDragging:Y}=d.current;Y&&Y(!0);break}case"move":{const{state:Y}=ne.current;Y!=="drag"&&L("hover"),K(ze);break}case"up":{L("hover"),y();const{onDragging:Y}=d.current;Y&&Y(!1);break}}else L("inactive")};return Ot(W,$,m,{coarse:(M=s==null?void 0:s.coarse)!==null&&M!==void 0?M:15,fine:(ee=s==null?void 0:s.fine)!==null&&ee!==void 0?ee:5},_)},[m,t,s,P,W,K,x,y]),Er({disabled:t,handleId:W,resizeHandler:K,panelGroupElement:D}),he(c,{...z,children:e,className:n,id:o,onBlur:()=>Q(!1),onFocus:()=>Q(!0),ref:p,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":m,"data-panel-group-id":g,"data-resize-handle":"","data-resize-handle-active":N==="drag"?"pointer":v?"keyboard":void 0,"data-resize-handle-state":N,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":W})}Ut.displayName="PanelResizeHandle";function Lr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Wr,cn]=Qt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),kr=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:o=!1,onLayout:i,storage:a,ref:l,groupProps:c,...z})=>{e??(e=O.useId());const p=O.useCallback((u={},m=null)=>({...u,ref:m,...z}),[z]),d=O.useCallback((u={})=>{const{as:m,...g}=c??{};return{...u,id:e,direction:n,tagName:m,autoSaveId:t,keyboardResizeBy:s,onLayout:i,storage:a,...g}},[e,n,c,t,s,i,a]);return O.useEffect(()=>{if(!e)return;const u=ln(e);l&&(l.current=u)},[l,e]),{isDisabled:o,getContainerProps:p,getGroupProps:d}},Dr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:o,maxSize:i,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:p,controlRef:d,containerProps:u,...m})=>{e??(e=O.useId());const g=O.useCallback((x={})=>{const{as:y,...D}=u??{};return{...x,ref:d,id:e,tagName:y,collapsible:s,defaultSize:o,maxSize:i,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:p,...D}},[e,d,u,t,s,o,i,a,l,c,z,p]),P=O.useCallback((x={},y=null)=>({...x,ref:y,...m}),[m]);return O.useEffect(()=>{if(!e)return;const x=Lr(e);n&&(n.current=x)},[n,e]),{getPanelProps:g,getItemProps:P}},Mr=({id:e,ref:n,as:t,disabled:s,isDisabled:o,onDragging:i,...a})=>{e??(e=O.useId());const{isDisabled:l}=cn(),[c,z]=O.useState(!1),p=s||o||l,d=O.useCallback((m={})=>({...m,id:e,tagName:t,disabled:p,onDragging:er(i,g=>z(g)),...a,"data-active":hn(c),style:{...m.style,...a.style,...p?{cursor:"default"}:{}}}),[e,t,p,i,a,c]),u=O.useCallback((m={},g=null)=>({...m,ref:g,"data-active":hn(c)}),[c]);return O.useEffect(()=>{if(!e)return;const m=ve(e);n&&(n.current=m)},[n,e]),{getTriggerProps:d,getIconProps:u}},E=rn(({direction:e="horizontal",...n},t)=>{const[s,o]=nr("Resizable",{direction:e,...n}),{className:i,children:a,containerRef:l,...c}=tr(o),{getContainerProps:z,getGroupProps:p,...d}=kr({ref:t,...c}),u={w:"100%",h:"100%",...s.container};return r.jsx(Wr,{value:{styles:s,...d},children:r.jsx(Ie.div,{className:tn("ui-resizable",i),__css:u,...z({},l),children:r.jsx(Xt,{...p(),children:a})})})}),Ar=new Set(["order"]),Or=Ie(Pt,{disableStyleProp:e=>Ar.has(e)}),f=rn(({className:e,children:n,innerRef:t,w:s,width:o,minW:i,minWidth:a,maxW:l,maxWidth:c,h:z,height:p,minH:d,minHeight:u,maxH:m,maxHeight:g,boxSize:P,...x},y)=>{const{styles:D}=cn(),{getPanelProps:W,getItemProps:N}=Dr({ref:y,...x}),L={boxSize:"100%",...D.item};return r.jsx(Or,{...W({w:s,width:o,minW:i,minWidth:a,maxW:l,maxWidth:c,h:z,height:p,minH:d,minHeight:u,maxH:m,maxHeight:g,boxSize:P}),children:r.jsx(Ie.div,{className:tn("ui-resizable__item",e),__css:L,...N({},t),children:n})})}),T=rn(({className:e,icon:n,children:t,iconProps:s,...o},i)=>{const{styles:a}=cn(),{getTriggerProps:l,getIconProps:c}=Mr({ref:i,...o}),z={position:"relative",...a.trigger};return r.jsxs(Ie.div,{as:Ut,className:tn("ui-resizable__trigger",e),__css:z,...l(),children:[n?r.jsx(Ie.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(s),children:n}):null,t]})}),vn=e=>r.jsxs(rr,{viewBox:"0 0 23 39",w:"0.5rem",h:"1rem",...e,children:[r.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),r.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),r.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),ls={title:"Components / Data Display / Resizable",component:E},Pe=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),Ee=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{variant:"spacer",h:"md",children:[r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"unstyled",h:"md",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]})]}),Le=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]}),r.jsxs(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),We=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]})]}),ke=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,defaultSize:30,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),De=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,minSize:30,maxSize:70,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),Me=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),Ae=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]})]}),Oe=()=>{const e=O.useRef(null),n=O.useRef(null),t=O.useRef(null),s=O.useRef(null),o=O.useRef(null);return O.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",o)},[]),r.jsxs(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,ref:t,innerRef:s,children:"One"}),r.jsx(T,{ref:o}),r.jsx(f,{as:h,children:"Two"})]})},_e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{icon:r.jsx(vn,{})}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{direction:"vertical",variant:"spacer",h:"md",children:[r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r.jsx(T,{icon:r.jsx(vn,{})}),r.jsx(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),He=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{icon:r.jsx(mn,{icon:fn})}),r.jsx(f,{as:h,children:"Two"})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{icon:r.jsx(mn,{icon:fn})}),r.jsx(f,{as:h,children:"Two"})]})]}),Ne=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"Left"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{direction:"vertical",children:[r.jsx(f,{as:h,children:"Top"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Bottom"})]})})]}),r.jsxs(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"Top"}),r.jsx(T,{}),r.jsx(f,{children:r.jsxs(E,{children:[r.jsx(f,{as:h,children:"Left"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Right"})]})})]})]}),Be=()=>r.jsxs(r.Fragment,{children:[r.jsxs(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Three"})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,children:"One"}),r.jsx(T,{isDisabled:!0}),r.jsx(f,{as:h,children:"Two"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Three"})]})]}),$e=()=>r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]}),Fe=()=>{const[e,n]=pn(!0),[t,s]=pn(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r.jsx(f,{as:h,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,id:"two",children:"Two"})]}),r.jsxs(St,{gap:"md",children:[r.jsxs(fe,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),r.jsxs(fe,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?r.jsxs(r.Fragment,{children:[r.jsx(f,{as:h,id:"left",minSize:10,order:1,children:"Left"}),r.jsx(T,{})]}):null,r.jsx(f,{as:h,id:"middle",minSize:10,order:2,children:"Middle"}),t?r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(f,{as:h,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Ge=()=>{const e=O.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r.jsx(f,{as:h,id:"one",children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,id:"two",children:"Two"})]})},Ke=()=>{const e=O.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsxs(St,{gap:"md",children:[r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r.jsx(fe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),r.jsxs(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r.jsx(f,{as:h,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r.jsx(T,{}),r.jsx(f,{as:h,children:"Two"})]})]})};var wn,yn,jn;Pe.parameters={...Pe.parameters,docs:{...(wn=Pe.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(jn=(yn=Pe.parameters)==null?void 0:yn.docs)==null?void 0:jn.source}}};var Tn,Pn,En;Ee.parameters={...Ee.parameters,docs:{...(Tn=Ee.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
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
}`,...(En=(Pn=Ee.parameters)==null?void 0:Pn.docs)==null?void 0:En.source}}};var Ln,Wn,kn;Le.parameters={...Le.parameters,docs:{...(Ln=Le.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(kn=(Wn=Le.parameters)==null?void 0:Wn.docs)==null?void 0:kn.source}}};var Dn,Mn,An;We.parameters={...We.parameters,docs:{...(Dn=We.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(An=(Mn=We.parameters)==null?void 0:Mn.docs)==null?void 0:An.source}}};var On,_n,Hn;ke.parameters={...ke.parameters,docs:{...(On=ke.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Hn=(_n=ke.parameters)==null?void 0:_n.docs)==null?void 0:Hn.source}}};var Nn,Bn,$n;De.parameters={...De.parameters,docs:{...(Nn=De.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...($n=(Bn=De.parameters)==null?void 0:Bn.docs)==null?void 0:$n.source}}};var Fn,Gn,Kn;Me.parameters={...Me.parameters,docs:{...(Fn=Me.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Kn=(Gn=Me.parameters)==null?void 0:Gn.docs)==null?void 0:Kn.source}}};var Vn,Xn,Un;Ae.parameters={...Ae.parameters,docs:{...(Vn=Ae.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Un=(Xn=Ae.parameters)==null?void 0:Xn.docs)==null?void 0:Un.source}}};var Zn,qn,Jn;Oe.parameters={...Oe.parameters,docs:{...(Zn=Oe.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(Jn=(qn=Oe.parameters)==null?void 0:qn.docs)==null?void 0:Jn.source}}};var Yn,Qn,et;_e.parameters={..._e.parameters,docs:{...(Yn=_e.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(et=(Qn=_e.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};var nt,tt,rt;He.parameters={...He.parameters,docs:{...(nt=He.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(rt=(tt=He.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var st,it,ot;Ne.parameters={...Ne.parameters,docs:{...(st=Ne.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
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
}`,...(ot=(it=Ne.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var at,lt,ct;Be.parameters={...Be.parameters,docs:{...(at=Be.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
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
}`,...(ct=(lt=Be.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,ut,mt;$e.parameters={...$e.parameters,docs:{...(dt=$e.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(mt=(ut=$e.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var ft,pt,ht;Fe.parameters={...Fe.parameters,docs:{...(ft=Fe.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
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
}`,...(ht=(pt=Fe.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};var zt,bt,gt;Ge.parameters={...Ge.parameters,docs:{...(zt=Ge.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
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
}`,...(gt=(bt=Ge.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var xt,Rt,It;Ke.parameters={...Ke.parameters,docs:{...(xt=Ke.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
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
}`,...(It=(Rt=Ke.parameters)==null?void 0:Rt.docs)==null?void 0:It.source}}};const cs=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{cs as __namedExportsOrder,Pe as basic,Ke as customControls,He as customIcon,ls as default,Be as isDisabled,Ne as nestedResizable,Ge as useCookieStorage,Fe as useLocaleStorage,$e as useOnResize,Ae as withCollapsible,Le as withColorScheme,ke as withDefaultSize,We as withDirection,_e as withIcon,Me as withKeyboardStep,De as withMinMaxSize,Oe as withRefs,Ee as withVariant};
