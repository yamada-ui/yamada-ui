import{j as o,a as R,F as j}from"./jsx-runtime-TtYKBvr-.js";import{I as pn,w as hn}from"./fontawesome-icon-82H3DAgL.js";import{u as zn}from"./index-gWY0u-sb.js";import{R as wt,r as H}from"./index-IybTgENJ.js";import{c as nr,h as tr,K as bn,u as Se,a as on}from"./factory-APG2CWDq.js";import{f as sn}from"./forward-ref-6T0UNPU-.js";import{u as rr}from"./use-component-style-OLn8-IaK.js";import{o as ir}from"./theme-provider-huIiJlAo.js";import{b as or}from"./icon-qB0k_Rc9.js";import{C as h}from"./center-buHHRxIa.js";import{W as vt}from"./flex-efS-RiWe.js";import{B as he}from"./button-wRYGAgnL.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-VWNlQR2I.js";import"./use-ripple-PKVw7PLF.js";import"./index-dKw0visz.js";import"./motion-RGBG165B.js";import"./motion-YDUrcbbR.js";import"./loading-tO_V0BGI.js";import"./index-iy1iKMCH.js";import"./index-DwEmuzi-.js";function yt(e){return e.parentNode&&e.parentNode.host||e.parentNode}var sr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ar(e){var n=getComputedStyle(yt(e)).display;return n==="flex"||n==="inline-flex"}function lr(e){var n=getComputedStyle(e);return!!(n.position==="fixed"||n.zIndex!=="auto"&&n.position!=="static"||ar(e)||+n.opacity<1||"transform"in n&&n.transform!=="none"||"webkitTransform"in n&&n.webkitTransform!=="none"||"mixBlendMode"in n&&n.mixBlendMode!=="normal"||"filter"in n&&n.filter!=="none"||"webkitFilter"in n&&n.webkitFilter!=="none"||"isolation"in n&&n.isolation==="isolate"||sr.test(n.willChange)||n.webkitOverflowScrolling==="touch")}function gn(e){for(var n=e.length;n--;)if(lr(e[n]))return e[n];return null}function Rn(e){for(var n=[];e;)n.push(e),e=yt(e);return n}function xn(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Pe(e){return e[e.length-1]}function cr(e,n){if(e===n)throw new Error("Cannot compare node with itself");for(var t={a:Rn(e),b:Rn(n)},r;Pe(t.a)===Pe(t.b);)e=t.a.pop(),n=t.b.pop(),r=e;var s={a:gn(t.a),b:gn(t.b)},i={a:xn(s.a),b:xn(s.b)};if(i.a===i.b)for(var a=r.childNodes,l={a:Pe(t.a),b:Pe(t.b)},c=a.length;c--;){var z=a[c];if(z===l.a)return 1;if(z===l.b)return-1}return Math.sign(i.a-i.b)}const{createElement:be,createContext:dr,createRef:ci,forwardRef:Tt,useCallback:U,useContext:Pt,useEffect:de,useImperativeHandle:Et,useLayoutEffect:ur,useMemo:mr,useRef:V,useState:Ce}=wt,In=wt.useId,fr=ur,qe=dr(null);qe.displayName="PanelGroupContext";const ue=fr,pr=typeof In=="function"?In:()=>null;let hr=0;function an(e=null){const n=pr(),t=V(e||n||null);return t.current===null&&(t.current=""+hr++),e??t.current}function Lt({children:e,className:n="",collapsedSize:t,collapsible:r,defaultSize:s,forwardedRef:i,id:a,maxSize:l,minSize:c,onCollapse:z,onExpand:p,onResize:d,order:u,style:m,tagName:g="div",...L}){const x=Pt(qe);if(x===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:T,expandPanel:A,getPanelSize:D,getPanelStyle:$,groupId:k,isPanelCollapsed:v,reevaluatePanelConstraints:ne,registerPanel:X,resizePanel:J,unregisterPanel:re}=x,Y=an(a),O=V({callbacks:{onCollapse:z,onExpand:p,onResize:d},constraints:{collapsedSize:t,collapsible:r,defaultSize:s,maxSize:l,minSize:c},id:Y,idIsFromProps:a!==void 0,order:u});V({didLogMissingDefaultSizeWarning:!1}),ue(()=>{const{callbacks:K,constraints:N}=O.current,Q={...N};O.current.id=Y,O.current.idIsFromProps=a!==void 0,O.current.order=u,K.onCollapse=z,K.onExpand=p,K.onResize=d,N.collapsedSize=t,N.collapsible=r,N.defaultSize=s,N.maxSize=l,N.minSize=c,(Q.collapsedSize!==N.collapsedSize||Q.collapsible!==N.collapsible||Q.maxSize!==N.maxSize||Q.minSize!==N.minSize)&&ne(O.current,Q)}),ue(()=>{const K=O.current;return X(K),()=>{re(K)}},[u,Y,X,re]),Et(i,()=>({collapse:()=>{T(O.current)},expand:()=>{A(O.current)},getId(){return Y},getSize(){return D(O.current)},isCollapsed(){return v(O.current)},isExpanded(){return!v(O.current)},resize:K=>{J(O.current,K)}}),[T,A,D,v,Y,J]);const te=$(O.current,s);return be(g,{...L,children:e,className:n,id:a,style:{...te,...m},"data-panel":"","data-panel-collapsible":r||void 0,"data-panel-group-id":k,"data-panel-id":Y,"data-panel-size":parseFloat(""+te.flexGrow).toFixed(1)})}const Wt=Tt((e,n)=>be(Lt,{...e,forwardedRef:n}));Lt.displayName="Panel";Wt.displayName="forwardRef(Panel)";let rn=null,ce=null;function zr(e,n){if(n){const t=(n&At)!==0,r=(n&Ot)!==0,s=(n&_t)!==0,i=(n&Ht)!==0;if(t)return s?"se-resize":i?"ne-resize":"e-resize";if(r)return s?"sw-resize":i?"nw-resize":"w-resize";if(s)return"s-resize";if(i)return"n-resize"}switch(e){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function br(){ce!==null&&(document.head.removeChild(ce),rn=null,ce=null)}function nn(e,n){const t=zr(e,n);rn!==t&&(rn=t,ce===null&&(ce=document.createElement("style"),document.head.appendChild(ce)),ce.innerHTML=`*{cursor: ${t}!important;}`)}function kt(e){return e.type==="keydown"}function Dt(e){return e.type.startsWith("mouse")}function Mt(e){return e.type.startsWith("touch")}function Je(e){if(Dt(e))return{x:e.pageX,y:e.pageY};if(Mt(e)){const n=e.touches[0];if(n&&n.pageX&&n.pageY)return{x:n.pageX,y:n.pageY}}return{x:1/0,y:1/0}}function gr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function Rr(e,n,t){return t?e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.y+e.height>n.y:e.x<=n.x+n.width&&e.x+e.width>=n.x&&e.y<=n.y+n.height&&e.y+e.height>=n.y}const At=1,Ot=2,_t=4,Ht=8,xr=gr()==="coarse";let ae=[],Ye=!1,se=new Map,Qe=new Map;const Ze=new Set;function Nt(e,n,t,r,s){var i;const{ownerDocument:a}=n,l={direction:t,element:n,hitAreaMargins:r,setResizeHandlerState:s},c=(i=se.get(a))!==null&&i!==void 0?i:0;return se.set(a,c+1),Ze.add(l),je(),function(){var p;Qe.delete(e),Ze.delete(l);const d=(p=se.get(a))!==null&&p!==void 0?p:1;se.set(a,d-1),je(),d===1&&se.delete(a)}}function Ee(e){const{target:n}=e,{x:t,y:r}=Je(e);Ye=!0,ln({target:n,x:t,y:r}),je(),ae.length>0&&(cn("down",e),e.preventDefault())}function ie(e){const{x:n,y:t}=Je(e);if(!Ye){const{target:r}=e;ln({target:r,x:n,y:t})}cn("move",e),Bt(),ae.length>0&&e.preventDefault()}function oe(e){const{target:n}=e,{x:t,y:r}=Je(e);Qe.clear(),Ye=!1,ae.length>0&&e.preventDefault(),cn("up",e),ln({target:n,x:t,y:r}),Bt(),je()}function ln({target:e,x:n,y:t}){ae.splice(0);let r=null;e instanceof HTMLElement&&(r=e),Ze.forEach(s=>{const{element:i,hitAreaMargins:a}=s,l=i.getBoundingClientRect(),{bottom:c,left:z,right:p,top:d}=l,u=xr?a.coarse:a.fine;if(n>=z-u&&n<=p+u&&t>=d-u&&t<=c+u){if(r!==null&&i!==r&&!i.contains(r)&&!r.contains(i)&&cr(r,i)>0){let g=r,L=!1;for(;g&&!g.contains(i);){if(Rr(g.getBoundingClientRect(),l,!0)){L=!0;break}g=g.parentElement}if(L)return}ae.push(s)}})}function tn(e,n){Qe.set(e,n)}function Bt(){let e=!1,n=!1;ae.forEach(r=>{const{direction:s}=r;s==="horizontal"?e=!0:n=!0});let t=0;Qe.forEach(r=>{t|=r}),e&&n?nn("intersection",t):e?nn("horizontal",t):n?nn("vertical",t):br()}function je(){se.forEach((e,n)=>{const{body:t}=n;t.removeEventListener("contextmenu",oe),t.removeEventListener("mousedown",Ee),t.removeEventListener("mouseleave",ie),t.removeEventListener("mousemove",ie),t.removeEventListener("touchmove",ie),t.removeEventListener("touchstart",Ee)}),window.removeEventListener("mouseup",oe),window.removeEventListener("touchcancel",oe),window.removeEventListener("touchend",oe),Nt.length>0&&(Ye?(ae.length>0&&se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("contextmenu",oe),t.addEventListener("mouseleave",ie),t.addEventListener("mousemove",ie),t.addEventListener("touchmove",ie,{passive:!1}))}),window.addEventListener("mouseup",oe),window.addEventListener("touchcancel",oe),window.addEventListener("touchend",oe)):se.forEach((e,n)=>{const{body:t}=n;e>0&&(t.addEventListener("mousedown",Ee),t.addEventListener("mousemove",ie),t.addEventListener("touchmove",ie,{passive:!1}),t.addEventListener("touchstart",Ee))}))}function cn(e,n){Ze.forEach(t=>{const{setResizeHandlerState:r}=t,s=ae.includes(t);r(e,s,n)})}function w(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}const $t=10;function we(e,n,t=$t){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const r=e-n;return r===0?0:r>0?1:-1}function Z(e,n,t){return we(e,n,t)===0}function ze({panelConstraints:e,panelIndex:n,size:t}){const r=e[n];w(r!=null);let{collapsedSize:s=0,collapsible:i,maxSize:a=100,minSize:l=0}=r;if(we(t,l)<0)if(i){const c=(s+l)/2;we(t,c)<0?t=s:t=l}else t=l;return t=Math.min(a,t),t=parseFloat(t.toFixed($t)),t}function xe({delta:e,layout:n,panelConstraints:t,pivotIndices:r,trigger:s}){if(Z(e,0))return n;const i=[...n],[a,l]=r;w(a!=null),w(l!=null);let c=0;if(s==="keyboard"){{const p=e<0?l:a,d=t[p];if(w(d),d.collapsible){const u=n[p];w(u!=null);const m=t[p];w(m);const{collapsedSize:g=0,minSize:L=0}=m;if(Z(u,g)){const x=L-u;we(x,Math.abs(e))>0&&(e=e<0?0-x:x)}}}{const p=e<0?a:l,d=t[p];w(d);const{collapsible:u}=d;if(u){const m=n[p];w(m!=null);const g=t[p];w(g);const{collapsedSize:L=0,minSize:x=0}=g;if(Z(m,x)){const T=m-L;we(T,Math.abs(e))>0&&(e=e<0?0-T:T)}}}}{const p=e<0?1:-1;let d=e<0?l:a,u=0;for(;;){const g=n[d];w(g!=null);const x=ze({panelConstraints:t,panelIndex:d,size:100})-g;if(u+=x,d+=p,d<0||d>=t.length)break}const m=Math.min(Math.abs(e),Math.abs(u));e=e<0?0-m:m}{let d=e<0?a:l;for(;d>=0&&d<t.length;){const u=Math.abs(e)-Math.abs(c),m=n[d];w(m!=null);const g=m-u,L=ze({panelConstraints:t,panelIndex:d,size:g});if(!Z(m,L)&&(c+=m-L,i[d]=L,c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?d--:d++}}if(Z(c,0))return n;{const p=e<0?l:a,d=n[p];w(d!=null);const u=d+c,m=ze({panelConstraints:t,panelIndex:p,size:u});if(i[p]=m,!Z(m,u)){let g=u-m,x=e<0?l:a;for(;x>=0&&x<t.length;){const T=i[x];w(T!=null);const A=T+g,D=ze({panelConstraints:t,panelIndex:x,size:A});if(Z(T,D)||(g-=D-T,i[x]=D),Z(g,0))break;e>0?x--:x++}}}const z=i.reduce((p,d)=>d+p,0);return Z(z,100)?i:n}function Ir({layout:e,panelsArray:n,pivotIndices:t}){let r=0,s=100,i=0,a=0;const l=t[0];w(l!=null),n.forEach((d,u)=>{const{constraints:m}=d,{maxSize:g=100,minSize:L=0}=m;u===l?(r=L,s=g):(i+=L,a+=g)});const c=Math.min(s,100-i),z=Math.max(r,100-a),p=e[l];return{valueMax:c,valueMin:z,valueNow:p}}function ve(e,n=document){return Array.from(n.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function Gt(e,n,t=document){const s=ve(e,t).findIndex(i=>i.getAttribute("data-panel-resize-handle-id")===n);return s??null}function Kt(e,n,t){const r=Gt(e,n,t);return r!=null?[r,r+1]:[-1,-1]}function dn(e,n=document){var t;if(n instanceof HTMLElement&&(n==null||(t=n.dataset)===null||t===void 0?void 0:t.panelGroupId)==e)return n;const r=n.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return r||null}function ye(e,n=document){const t=n.querySelector(`[data-panel-resize-handle-id="${e}"]`);return t||null}function Cr(e,n,t,r=document){var s,i,a,l;const c=ye(n,r),z=ve(e,r),p=c?z.indexOf(c):-1,d=(s=(i=t[p])===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:null,u=(a=(l=t[p+1])===null||l===void 0?void 0:l.id)!==null&&a!==void 0?a:null;return[d,u]}function Sr({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:r,panelDataArray:s,panelGroupElement:i,setLayout:a}){V({didWarnAboutMissingResizeHandle:!1}),ue(()=>{if(!i)return;const l=ve(t,i);for(let c=0;c<s.length-1;c++){const{valueMax:z,valueMin:p,valueNow:d}=Ir({layout:r,panelsArray:s,pivotIndices:[c,c+1]}),u=l[c];if(u!=null){const m=s[c];w(m),u.setAttribute("aria-controls",m.id),u.setAttribute("aria-valuemax",""+Math.round(z)),u.setAttribute("aria-valuemin",""+Math.round(p)),u.setAttribute("aria-valuenow",d!=null?""+Math.round(d):"")}}return()=>{l.forEach((c,z)=>{c.removeAttribute("aria-controls"),c.removeAttribute("aria-valuemax"),c.removeAttribute("aria-valuemin"),c.removeAttribute("aria-valuenow")})}},[t,r,s,i]),de(()=>{if(!i)return;const l=n.current;w(l);const{panelDataArray:c}=l,z=dn(t,i);w(z!=null,`No group found for id "${t}"`);const p=ve(t,i);w(p);const d=p.map(u=>{const m=u.getAttribute("data-panel-resize-handle-id");w(m);const[g,L]=Cr(t,m,c,i);if(g==null||L==null)return()=>{};const x=T=>{if(!T.defaultPrevented)switch(T.key){case"Enter":{T.preventDefault();const A=c.findIndex(D=>D.id===g);if(A>=0){const D=c[A];w(D);const $=r[A],{collapsedSize:k=0,collapsible:v,minSize:ne=0}=D.constraints;if($!=null&&v){const X=xe({delta:Z($,k)?ne-k:k-$,layout:r,panelConstraints:c.map(J=>J.constraints),pivotIndices:Kt(t,m,i),trigger:"keyboard"});r!==X&&a(X)}}break}}};return u.addEventListener("keydown",x),()=>{u.removeEventListener("keydown",x)}});return()=>{d.forEach(u=>u())}},[i,e,n,t,r,s,a])}function Cn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function Ft(e,n){const t=e==="horizontal",{x:r,y:s}=Je(n);return t?r:s}function wr(e,n,t,r,s){const i=t==="horizontal",a=ye(n,s);w(a);const l=a.getAttribute("data-panel-group-id");w(l);let{initialCursorPosition:c}=r;const z=Ft(t,e),p=dn(l,s);w(p);const d=p.getBoundingClientRect(),u=i?d.width:d.height;return(z-c)/u*100}function vr(e,n,t,r,s,i){if(kt(e)){const a=t==="horizontal";let l=0;e.shiftKey?l=100:s!=null?l=s:l=10;let c=0;switch(e.key){case"ArrowDown":c=a?0:l;break;case"ArrowLeft":c=a?-l:0;break;case"ArrowRight":c=a?l:0;break;case"ArrowUp":c=a?0:-l;break;case"End":c=100;break;case"Home":c=-100;break}return c}else return r==null?0:wr(e,n,t,r,i)}function yr({panelDataArray:e}){const n=Array(e.length),t=e.map(i=>i.constraints);let r=0,s=100;for(let i=0;i<e.length;i++){const a=t[i];w(a);const{defaultSize:l}=a;l!=null&&(r++,n[i]=l,s-=l)}for(let i=0;i<e.length;i++){const a=t[i];w(a);const{defaultSize:l}=a;if(l!=null)continue;const c=e.length-r,z=s/c;r++,n[i]=z,s-=z}return n}function fe(e,n,t){n.forEach((r,s)=>{const i=e[s];w(i);const{callbacks:a,constraints:l,id:c}=i,{collapsedSize:z=0,collapsible:p}=l,d=t[c];if(d==null||r!==d){t[c]=r;const{onCollapse:u,onExpand:m,onResize:g}=a;g&&g(r,d),p&&(u||m)&&(m&&(d==null||d===z)&&r!==z&&m(),u&&(d==null||d!==z)&&r===z&&u())}})}function Le(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Tr({defaultSize:e,dragState:n,layout:t,panelData:r,panelIndex:s,precision:i=3}){const a=t[s];let l;return a==null?l=e!=null?e.toPrecision(i):"1":r.length===1?l="1":l=a.toPrecision(i),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}function Pr(e,n=10){let t=null;return(...s)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...s)},n)}}function Sn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Vt(e){return`react-resizable-panels:${e}`}function Xt(e){return e.map(n=>{const{constraints:t,id:r,idIsFromProps:s,order:i}=n;return s?r:i?`${i}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function Ut(e,n){try{const t=Vt(e),r=n.getItem(t);if(r){const s=JSON.parse(r);if(typeof s=="object"&&s!=null)return s}}catch{}return null}function Er(e,n,t){var r,s;const i=(r=Ut(e,t))!==null&&r!==void 0?r:{},a=Xt(n);return(s=i[a])!==null&&s!==void 0?s:null}function Lr(e,n,t,r,s){var i;const a=Vt(e),l=Xt(n),c=(i=Ut(e,s))!==null&&i!==void 0?i:{};c[l]={expandToSizes:Object.fromEntries(t.entries()),layout:r};try{s.setItem(a,JSON.stringify(c))}catch(z){console.error(z)}}function wn({layout:e,panelConstraints:n}){const t=[...e],r=t.reduce((i,a)=>i+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(i=>`${i}%`).join(", ")}`);if(!Z(r,100))for(let i=0;i<n.length;i++){const a=t[i];w(a!=null);const l=100/r*a;t[i]=l}let s=0;for(let i=0;i<n.length;i++){const a=t[i];w(a!=null);const l=ze({panelConstraints:n,panelIndex:i,size:a});a!=l&&(s+=a-l,t[i]=l)}if(!Z(s,0))for(let i=0;i<n.length;i++){const a=t[i];w(a!=null);const l=a+s,c=ze({panelConstraints:n,panelIndex:i,size:l});if(a!==c&&(s-=c-a,t[i]=c,Z(s,0)))break}return t}const Wr=100,Ie={getItem:e=>(Sn(Ie),Ie.getItem(e)),setItem:(e,n)=>{Sn(Ie),Ie.setItem(e,n)}},vn={};function Zt({autoSaveId:e=null,children:n,className:t="",direction:r,forwardedRef:s,id:i=null,onLayout:a=null,keyboardResizeBy:l=null,storage:c=Ie,style:z,tagName:p="div",...d}){const u=an(i),m=V(null),[g,L]=Ce(null),[x,T]=Ce([]),A=V({}),D=V(new Map),$=V(0),k=V({autoSaveId:e,direction:r,dragState:g,id:u,keyboardResizeBy:l,onLayout:a,storage:c}),v=V({layout:x,panelDataArray:[],panelDataArrayChanged:!1});V({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Et(s,()=>({getId:()=>k.current.id,getLayout:()=>{const{layout:b}=v.current;return b},setLayout:b=>{const{onLayout:S}=k.current,{layout:C,panelDataArray:I}=v.current,y=wn({layout:b,panelConstraints:I.map(P=>P.constraints)});Cn(C,y)||(T(y),v.current.layout=y,S&&S(y),fe(I,y,A.current))}}),[]),ue(()=>{k.current.autoSaveId=e,k.current.direction=r,k.current.dragState=g,k.current.id=u,k.current.onLayout=a,k.current.storage=c}),Sr({committedValuesRef:k,eagerValuesRef:v,groupId:u,layout:x,panelDataArray:v.current.panelDataArray,setLayout:T,panelGroupElement:m.current}),de(()=>{const{panelDataArray:b}=v.current;if(e){if(x.length===0||x.length!==b.length)return;let S=vn[e];S==null&&(S=Pr(Lr,Wr),vn[e]=S);const C=[...b],I=new Map(D.current);S(e,C,I,x,c)}},[e,x,c]),de(()=>{});const ne=U(b=>{const{onLayout:S}=k.current,{layout:C,panelDataArray:I}=v.current;if(b.constraints.collapsible){const y=I.map(q=>q.constraints),{collapsedSize:P=0,panelSize:M,pivotIndices:B}=le(I,b,C);if(w(M!=null),M!==P){D.current.set(b.id,M);const G=pe(I,b)===I.length-1?M-P:P-M,_=xe({delta:G,layout:C,panelConstraints:y,pivotIndices:B,trigger:"imperative-api"});Le(C,_)||(T(_),v.current.layout=_,S&&S(_),fe(I,_,A.current))}}},[]),X=U(b=>{const{onLayout:S}=k.current,{layout:C,panelDataArray:I}=v.current;if(b.constraints.collapsible){const y=I.map(G=>G.constraints),{collapsedSize:P=0,panelSize:M,minSize:B=0,pivotIndices:q}=le(I,b,C);if(M===P){const G=D.current.get(b.id),_=G!=null&&G>=B?G:B,en=pe(I,b)===I.length-1?M-_:_-M,F=xe({delta:en,layout:C,panelConstraints:y,pivotIndices:q,trigger:"imperative-api"});Le(C,F)||(T(F),v.current.layout=F,S&&S(F),fe(I,F,A.current))}}},[]),J=U(b=>{const{layout:S,panelDataArray:C}=v.current,{panelSize:I}=le(C,b,S);return w(I!=null),I},[]),re=U((b,S)=>{const{panelDataArray:C}=v.current,I=pe(C,b);return Tr({defaultSize:S,dragState:g,layout:x,panelData:C,panelIndex:I})},[g,x]),Y=U(b=>{const{layout:S,panelDataArray:C}=v.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=le(C,b,S);return y===!0&&P===I},[]),O=U(b=>{const{layout:S,panelDataArray:C}=v.current,{collapsedSize:I=0,collapsible:y,panelSize:P}=le(C,b,S);return w(P!=null),!y||P>I},[]),te=U(b=>{const{panelDataArray:S}=v.current;S.push(b),S.sort((C,I)=>{const y=C.order,P=I.order;return y==null&&P==null?0:y==null?-1:P==null?1:y-P}),v.current.panelDataArrayChanged=!0},[]);ue(()=>{if(v.current.panelDataArrayChanged){v.current.panelDataArrayChanged=!1;const{autoSaveId:b,onLayout:S,storage:C}=k.current,{layout:I,panelDataArray:y}=v.current;let P=null;if(b){const B=Er(b,y,C);B&&(D.current=new Map(Object.entries(B.expandToSizes)),P=B.layout)}P==null&&(P=yr({panelDataArray:y}));const M=wn({layout:P,panelConstraints:y.map(B=>B.constraints)});Cn(I,M)||(T(M),v.current.layout=M,S&&S(M),fe(y,M,A.current))}}),ue(()=>{const b=v.current;return()=>{b.layout=[]}},[]);const K=U(b=>function(C){C.preventDefault();const I=m.current;if(!I)return()=>null;const{direction:y,dragState:P,id:M,keyboardResizeBy:B,onLayout:q}=k.current,{layout:G,panelDataArray:_}=v.current,{initialLayout:me}=P??{},en=Kt(M,b,I);let F=vr(C,b,y,P,B,I);if(F===0)return;const mn=y==="horizontal";document.dir==="rtl"&&mn&&(F=-F);const Qt=_.map(er=>er.constraints),Re=xe({delta:F,layout:me??G,panelConstraints:Qt,pivotIndices:en,trigger:kt(C)?"keyboard":"mouse-or-touch"}),fn=!Le(G,Re);(Dt(C)||Mt(C))&&$.current!=F&&($.current=F,fn?tn(b,0):mn?tn(b,F<0?At:Ot):tn(b,F<0?_t:Ht)),fn&&(T(Re),v.current.layout=Re,q&&q(Re),fe(_,Re,A.current))},[]),N=U((b,S)=>{const{onLayout:C}=k.current,{layout:I,panelDataArray:y}=v.current,P=y.map(me=>me.constraints),{panelSize:M,pivotIndices:B}=le(y,b,I);w(M!=null);const G=pe(y,b)===y.length-1?M-S:S-M,_=xe({delta:G,layout:I,panelConstraints:P,pivotIndices:B,trigger:"imperative-api"});Le(I,_)||(T(_),v.current.layout=_,C&&C(_),fe(y,_,A.current))},[]),Q=U((b,S)=>{const{layout:C,panelDataArray:I}=v.current,{collapsedSize:y=0,collapsible:P}=S,{collapsedSize:M=0,collapsible:B,maxSize:q=100,minSize:G=0}=b.constraints,{panelSize:_}=le(I,b,C);w(_!=null),P&&B&&_===y?y!==M&&N(b,M):_<G?N(b,G):_>q&&N(b,q)},[N]),Te=U((b,S)=>{const{direction:C}=k.current,{layout:I}=v.current;if(!m.current)return;const y=ye(b,m.current);w(y);const P=Ft(C,S);L({dragHandleId:b,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:P,initialLayout:I})},[]),ge=U(()=>{L(null)},[]),ee=U(b=>{const{panelDataArray:S}=v.current,C=pe(S,b);C>=0&&(S.splice(C,1),delete A.current[b.id],v.current.panelDataArrayChanged=!0)},[]),Jt=mr(()=>({collapsePanel:ne,direction:r,dragState:g,expandPanel:X,getPanelSize:J,getPanelStyle:re,groupId:u,isPanelCollapsed:Y,isPanelExpanded:O,reevaluatePanelConstraints:Q,registerPanel:te,registerResizeHandle:K,resizePanel:N,startDragging:Te,stopDragging:ge,unregisterPanel:ee,panelGroupElement:m.current}),[ne,g,r,X,J,re,u,Y,O,Q,te,K,N,Te,ge,ee]),Yt={display:"flex",flexDirection:r==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return be(qe.Provider,{value:Jt},be(p,{...d,children:n,className:t,id:i,ref:m,style:{...Yt,...z},"data-panel-group":"","data-panel-group-direction":r,"data-panel-group-id":u}))}const jt=Tt((e,n)=>be(Zt,{...e,forwardedRef:n}));Zt.displayName="PanelGroup";jt.displayName="forwardRef(PanelGroup)";function pe(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function le(e,n,t){const r=pe(e,n),i=r===e.length-1?[r-1,r]:[r,r+1],a=t[r];return{...n.constraints,panelSize:a,pivotIndices:i}}function kr({disabled:e,handleId:n,resizeHandler:t,panelGroupElement:r}){de(()=>{if(e||t==null||r==null)return;const s=ye(n,r);if(s==null)return;const i=a=>{if(!a.defaultPrevented)switch(a.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{a.preventDefault(),t(a);break}case"F6":{a.preventDefault();const l=s.getAttribute("data-panel-group-id");w(l);const c=ve(l,r),z=Gt(l,n,r);w(z!==null);const p=a.shiftKey?z>0?z-1:c.length-1:z+1<c.length?z+1:0;c[p].focus();break}}};return s.addEventListener("keydown",i),()=>{s.removeEventListener("keydown",i)}},[r,e,n,t])}function qt({children:e=null,className:n="",disabled:t=!1,hitAreaMargins:r,id:s,onDragging:i,style:a={},tabIndex:l=0,tagName:c="div",...z}){const p=V(null),d=V({onDragging:i});de(()=>{d.current.onDragging=i});const u=Pt(qe);if(u===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:m,groupId:g,registerResizeHandle:L,startDragging:x,stopDragging:T,panelGroupElement:A}=u,D=an(s),[$,k]=Ce("inactive"),[v,ne]=Ce(!1),[X,J]=Ce(null),re=V({state:$});return ue(()=>{re.current.state=$}),de(()=>{if(t)J(null);else{const O=L(D);J(()=>O)}},[t,D,L]),de(()=>{var O,te;if(t||X==null)return;const K=p.current;w(K);const N=(Q,Te,ge)=>{if(Te)switch(Q){case"down":{k("drag"),x(D,ge);const{onDragging:ee}=d.current;ee&&ee(!0);break}case"move":{const{state:ee}=re.current;ee!=="drag"&&k("hover"),X(ge);break}case"up":{k("hover"),T();const{onDragging:ee}=d.current;ee&&ee(!1);break}}else k("inactive")};return Nt(D,K,m,{coarse:(O=r==null?void 0:r.coarse)!==null&&O!==void 0?O:15,fine:(te=r==null?void 0:r.fine)!==null&&te!==void 0?te:5},N)},[m,t,r,L,D,X,x,T]),kr({disabled:t,handleId:D,resizeHandler:X,panelGroupElement:A}),be(c,{...z,children:e,className:n,id:s,onBlur:()=>ne(!1),onFocus:()=>ne(!0),ref:p,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...a},tabIndex:l,"data-panel-group-direction":m,"data-panel-group-id":g,"data-resize-handle":"","data-resize-handle-active":$==="drag"?"pointer":v?"keyboard":void 0,"data-resize-handle-state":$,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":D})}qt.displayName="PanelResizeHandle";function Dr(e,n=document){const t=n.querySelector(`[data-panel-id="${e}"]`);return t||null}const[Mr,un]=nr({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),Ar=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:r,isDisabled:s=!1,onLayout:i,storage:a,ref:l,groupProps:c,...z})=>{e??(e=H.useId());const p=H.useCallback((u={},m=null)=>({...u,ref:m,...z}),[z]),d=H.useCallback((u={})=>{const{as:m,...g}=c??{};return{...u,id:e,direction:n,tagName:m,autoSaveId:t,keyboardResizeBy:r,onLayout:i,storage:a,...g}},[e,n,c,t,r,i,a]);return H.useEffect(()=>{if(!e)return;const u=dn(e);l&&(l.current=u)},[l,e]),{isDisabled:s,getContainerProps:p,getGroupProps:d}},Or=({id:e,ref:n,collapsedSize:t,collapsible:r,defaultSize:s,maxSize:i,minSize:a,onCollapse:l,onExpand:c,onResize:z,order:p,controlRef:d,containerProps:u,...m})=>{e??(e=H.useId());const g=H.useCallback((x={})=>{const{as:T,...A}=u??{};return{...x,ref:d,id:e,tagName:T,collapsible:r,defaultSize:s,maxSize:i,minSize:a,collapsedSize:t,onCollapse:l,onExpand:c,onResize:z,order:p,...A}},[e,d,u,t,r,s,i,a,l,c,z,p]),L=H.useCallback((x={},T=null)=>({...x,ref:T,...m}),[m]);return H.useEffect(()=>{if(!e)return;const x=Dr(e);n&&(n.current=x)},[n,e]),{getPanelProps:g,getItemProps:L}},_r=({id:e,ref:n,as:t,disabled:r,isDisabled:s,onDragging:i,...a})=>{e??(e=H.useId());const{isDisabled:l}=un(),[c,z]=H.useState(!1),p=r||s||l,d=H.useCallback((m={})=>({...m,id:e,tagName:t,disabled:p,onDragging:tr(i,g=>z(g)),...a,"data-active":bn(c),style:{...m.style,...a.style,...p?{cursor:"default"}:{}}}),[e,t,p,i,a,c]),u=H.useCallback((m={},g=null)=>({...m,ref:g,"data-active":bn(c)}),[c]);return H.useEffect(()=>{if(!e)return;const m=ye(e);n&&(n.current=m)},[n,e]),{getTriggerProps:d,getIconProps:u}},W=sn(({direction:e="horizontal",...n},t)=>{const[r,s]=rr("Resizable",{direction:e,...n}),{className:i,children:a,containerRef:l,...c}=ir(s),{getContainerProps:z,getGroupProps:p,...d}=Ar({ref:t,...c}),u={w:"full",h:"full",...r.container};return o(Mr,{value:{styles:r,...d},children:o(Se.div,{className:on("ui-resizable",i),__css:u,...z({},l),children:o(jt,{...p(),children:a})})})}),Hr=new Set(["order"]),Nr=Se(Wt,{disableStyleProp:e=>Hr.has(e)}),f=sn(({className:e,children:n,innerRef:t,w:r,width:s,minW:i,minWidth:a,maxW:l,maxWidth:c,h:z,height:p,minH:d,minHeight:u,maxH:m,maxHeight:g,boxSize:L,...x},T)=>{const{styles:A}=un(),{getPanelProps:D,getItemProps:$}=Or({ref:T,...x}),k={boxSize:"full",...A.item};return o(Nr,{...D({w:r,width:s,minW:i,minWidth:a,maxW:l,maxWidth:c,h:z,height:p,minH:d,minHeight:u,maxH:m,maxHeight:g,boxSize:L}),children:o(Se.div,{className:on("ui-resizable__item",e),__css:k,...$({},t),children:n})})}),E=sn(({className:e,icon:n,children:t,iconProps:r,...s},i)=>{const{styles:a}=un(),{getTriggerProps:l,getIconProps:c}=_r({ref:i,...s}),z={position:"relative",...a.trigger};return R(Se.div,{as:qt,className:on("ui-resizable__trigger",e),__css:z,...l(),children:[n?o(Se.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...c(r),children:n}):null,t]})}),yn=e=>R(or,{viewBox:"0 0 23 39",w:"2",h:"4",...e,children:[o("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),o("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),o("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),o("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),o("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),o("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),di={title:"Components / Data Display / Resizable",component:W},We=()=>R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),ke=()=>R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),R(W,{variant:"spacer",h:"md",children:[o(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),o(E,{}),o(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]}),R(W,{variant:"unstyled",h:"md",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]})]}),De=()=>R(j,{children:[R(W,{variant:"spacer",colorScheme:"primary",h:"md",children:[o(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),o(E,{}),o(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]}),R(W,{variant:"spacer",colorScheme:"red",h:"md",children:[o(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),o(E,{}),o(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Me=()=>R(j,{children:[R(W,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),R(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]})]}),Ae=()=>R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,defaultSize:30,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),Oe=()=>R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,minSize:30,maxSize:70,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),_e=()=>R(W,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),He=()=>R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),R(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]})]}),Ne=()=>{const e=H.useRef(null),n=H.useRef(null),t=H.useRef(null),r=H.useRef(null),s=H.useRef(null);return H.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",r),console.log("Trigger ref",s)},[]),R(W,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,ref:t,innerRef:r,children:"One"}),o(E,{ref:s}),o(f,{as:h,children:"Two"})]})},Be=()=>R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{icon:o(yn,{})}),o(f,{as:h,children:"Two"})]}),R(W,{direction:"vertical",variant:"spacer",h:"md",children:[o(f,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),o(E,{icon:o(yn,{})}),o(f,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),$e=()=>R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{icon:o(pn,{icon:hn})}),o(f,{as:h,children:"Two"})]}),R(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{icon:o(pn,{icon:hn})}),o(f,{as:h,children:"Two"})]})]}),Ge=()=>R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"Left"}),o(E,{}),o(f,{children:R(W,{direction:"vertical",children:[o(f,{as:h,children:"Top"}),o(E,{}),o(f,{as:h,children:"Bottom"})]})})]}),R(W,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"Top"}),o(E,{}),o(f,{children:R(W,{children:[o(f,{as:h,children:"Left"}),o(E,{}),o(f,{as:h,children:"Right"})]})})]})]}),Ke=()=>R(j,{children:[R(W,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"}),o(E,{}),o(f,{as:h,children:"Three"})]}),R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,children:"One"}),o(E,{isDisabled:!0}),o(f,{as:h,children:"Two"}),o(E,{}),o(f,{as:h,children:"Three"})]})]}),Fe=()=>R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]}),Ve=()=>{const[e,n]=zn(!0),[t,r]=zn(!0);return R(j,{children:[R(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[o(f,{as:h,id:"one",children:"One"}),o(E,{}),o(f,{as:h,id:"two",children:"Two"})]}),R(vt,{gap:"md",children:[R(he,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),R(he,{onClick:r.toggle,children:[t?"Hidden":"Show"," Right"]})]}),R(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?R(j,{children:[o(f,{as:h,id:"left",minSize:10,order:1,children:"Left"}),o(E,{})]}):null,o(f,{as:h,id:"middle",minSize:10,order:2,children:"Middle"}),t?R(j,{children:[o(E,{}),o(f,{as:h,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Xe=()=>{const e=H.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return R(W,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[o(f,{as:h,id:"one",children:"One"}),o(E,{}),o(f,{as:h,id:"two",children:"Two"})]})},Ue=()=>{const e=H.useRef(null);return R(j,{children:[R(vt,{gap:"md",children:[o(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),o(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),o(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),o(he,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),R(W,{h:"md",rounded:"md",borderWidth:"1px",children:[o(f,{as:h,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),o(E,{}),o(f,{as:h,children:"Two"})]})]})};var Tn,Pn,En;We.parameters={...We.parameters,docs:{...(Tn=We.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(En=(Pn=We.parameters)==null?void 0:Pn.docs)==null?void 0:En.source}}};var Ln,Wn,kn;ke.parameters={...ke.parameters,docs:{...(Ln=ke.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(kn=(Wn=ke.parameters)==null?void 0:Wn.docs)==null?void 0:kn.source}}};var Dn,Mn,An;De.parameters={...De.parameters,docs:{...(Dn=De.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(An=(Mn=De.parameters)==null?void 0:Mn.docs)==null?void 0:An.source}}};var On,_n,Hn;Me.parameters={...Me.parameters,docs:{...(On=Me.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Hn=(_n=Me.parameters)==null?void 0:_n.docs)==null?void 0:Hn.source}}};var Nn,Bn,$n;Ae.parameters={...Ae.parameters,docs:{...(Nn=Ae.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...($n=(Bn=Ae.parameters)==null?void 0:Bn.docs)==null?void 0:$n.source}}};var Gn,Kn,Fn;Oe.parameters={...Oe.parameters,docs:{...(Gn=Oe.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Fn=(Kn=Oe.parameters)==null?void 0:Kn.docs)==null?void 0:Fn.source}}};var Vn,Xn,Un;_e.parameters={..._e.parameters,docs:{...(Vn=_e.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Un=(Xn=_e.parameters)==null?void 0:Xn.docs)==null?void 0:Un.source}}};var Zn,jn,qn;He.parameters={...He.parameters,docs:{...(Zn=He.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(qn=(jn=He.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Jn,Yn,Qn;Ne.parameters={...Ne.parameters,docs:{...(Jn=Ne.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Yn=Ne.parameters)==null?void 0:Yn.docs)==null?void 0:Qn.source}}};var et,nt,tt;Be.parameters={...Be.parameters,docs:{...(et=Be.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(tt=(nt=Be.parameters)==null?void 0:nt.docs)==null?void 0:tt.source}}};var rt,it,ot;$e.parameters={...$e.parameters,docs:{...(rt=$e.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
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
}`,...(ot=(it=$e.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var st,at,lt;Ge.parameters={...Ge.parameters,docs:{...(st=Ge.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
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
}`,...(lt=(at=Ge.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var ct,dt,ut;Ke.parameters={...Ke.parameters,docs:{...(ct=Ke.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
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
}`,...(ut=(dt=Ke.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var mt,ft,pt;Fe.parameters={...Fe.parameters,docs:{...(mt=Fe.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(pt=(ft=Fe.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var ht,zt,bt;Ve.parameters={...Ve.parameters,docs:{...(ht=Ve.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
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
}`,...(bt=(zt=Ve.parameters)==null?void 0:zt.docs)==null?void 0:bt.source}}};var gt,Rt,xt;Xe.parameters={...Xe.parameters,docs:{...(gt=Xe.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
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
}`,...(xt=(Rt=Xe.parameters)==null?void 0:Rt.docs)==null?void 0:xt.source}}};var It,Ct,St;Ue.parameters={...Ue.parameters,docs:{...(It=Ue.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
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
}`,...(St=(Ct=Ue.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};const ui=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{ui as __namedExportsOrder,We as basic,Ue as customControls,$e as customIcon,di as default,Ke as isDisabled,Ge as nestedResizable,Xe as useCookieStorage,Ve as useLocaleStorage,Fe as useOnResize,He as withCollapsible,De as withColorScheme,Ae as withDefaultSize,Me as withDirection,Be as withIcon,_e as withKeyboardStep,Oe as withMinMaxSize,Ne as withRefs,ke as withVariant};
