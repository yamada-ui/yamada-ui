import{j as r,a as b,F as J}from"./jsx-runtime-5BUNAZ9W.js";import{I as Je,w as Xe}from"./fontawesome-icon-kxYT1wez.js";import{u as Ye}from"./index-YuXFfT5-.js";import{a as ot,r as N}from"./index-4g5l5LRQ.js";import{c as Lt,h as Et,K as Qe,u as Ae,a as _e}from"./factory-UVgmwG7m.js";import{f as $e}from"./forward-ref-A-8Arhkk.js";import{u as Wt}from"./use-component-style-oL2nRWmA.js";import{o as kt}from"./theme-provider-rx4ttYe3.js";import{b as Dt}from"./icon-q2lrQR9J.js";import{C as m}from"./center-h3ZT_FrZ.js";import{W as st}from"./flex-nTog3A0j.js";import{B as ie}from"./button-wgRwFiXZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-Rnhjv4qA.js";import"./use-ripple-BZv2-DZW.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-wmKyD4SQ.js";import"./loading-RG6ZNJzo.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";const{createElement:ce,createContext:Ot,createRef:wr,forwardRef:at,useCallback:U,useContext:it,useEffect:re,useImperativeHandle:lt,useLayoutEffect:Mt,useMemo:At,useRef:Z,useState:Ne}=ot,en=ot.useId,Be=Ot(null);Be.displayName="PanelGroupContext";const pe=Mt,Nt=typeof en=="function"?en:()=>null;let Bt=0;function Ke(e=null){const n=Nt(),t=Z(e||n||null);return t.current===null&&(t.current=""+Bt++),e??t.current}function ct({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:l,forwardedRef:o,id:i,maxSize:a,minSize:d,onCollapse:z,onExpand:f,onResize:c,order:p,style:h,tagName:S="div",...T}){const I=it(Be);if(I===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:L,expandPanel:D,getPanelSize:_,getPanelStyle:O,groupId:v,isPanelCollapsed:K,registerPanel:X,resizePanel:H,unregisterPanel:ne}=I,M=Ke(i),W=Z({callbacks:{onCollapse:z,onExpand:f,onResize:c},constraints:{collapsedSize:t,collapsible:s,defaultSize:l,maxSize:a,minSize:d},id:M,idIsFromProps:i!==void 0,order:p});Z({didLogMissingDefaultSizeWarning:!1}),pe(()=>{const{callbacks:B,constraints:q}=W.current;W.current.id=M,W.current.idIsFromProps=i!==void 0,W.current.order=p,B.onCollapse=z,B.onExpand=f,B.onResize=c,q.collapsedSize=t,q.collapsible=s,q.defaultSize=l,q.maxSize=a,q.minSize=d}),pe(()=>{const B=W.current;return X(B),()=>{ne(B)}},[p,M,X,ne]),lt(o,()=>({collapse:()=>{L(W.current)},expand:()=>{D(W.current)},getId(){return M},getSize(){return _(W.current)},isCollapsed(){return K(W.current)},isExpanded(){return!K(W.current)},resize:B=>{H(W.current,B)}}),[L,D,_,K,M,H]);const F=O(W.current,l);return ce(S,{...T,children:e,className:n,style:{...F,...h},"data-panel":"","data-panel-id":M,"data-panel-group-id":v,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const dt=at((e,n)=>ce(ct,{...e,forwardedRef:n}));ct.displayName="Panel";dt.displayName="forwardRef(Panel)";function R(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}const ut=10;function he(e,n,t=ut){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const s=e-n;return s===0?0:s>0?1:-1}function j(e,n,t){return he(e,n,t)===0}function le({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];R(s!=null);let{collapsedSize:l=0,collapsible:o,maxSize:i=100,minSize:a=0}=s;if(he(t,a)<0)if(o){const d=(l+a)/2;he(t,d)<0?t=l:t=a}else t=a;return t=Math.min(i,t),t=parseFloat(t.toFixed(ut)),t}function ue({delta:e,layout:n,panelConstraints:t,pivotIndices:s,trigger:l}){if(j(e,0))return n;const o=[...n],[i,a]=s;R(i!=null),R(a!=null);let d=0;if(l==="keyboard"){{const f=e<0?a:i,c=t[f];if(R(c),c.collapsible){const p=n[f];R(p!=null);const h=t[f];R(h);const{collapsedSize:S=0,minSize:T=0}=h;if(j(p,S)){const I=T-p;he(I,Math.abs(e))>0&&(e=e<0?0-I:I)}}}{const f=e<0?i:a,c=t[f];R(c);const{collapsible:p}=c;if(p){const h=n[f];R(h!=null);const S=t[f];R(S);const{collapsedSize:T=0,minSize:I=0}=S;if(j(h,I)){const L=h-T;he(L,Math.abs(e))>0&&(e=e<0?0-L:L)}}}}{const f=e<0?1:-1;let c=e<0?a:i,p=0;for(;;){const S=n[c];R(S!=null);const I=le({panelConstraints:t,panelIndex:c,size:100})-S;if(p+=I,c+=f,c<0||c>=t.length)break}const h=Math.min(Math.abs(e),Math.abs(p));e=e<0?0-h:h}{let c=e<0?i:a;for(;c>=0&&c<t.length;){const p=Math.abs(e)-Math.abs(d),h=n[c];R(h!=null);const S=h-p,T=le({panelConstraints:t,panelIndex:c,size:S});if(!j(h,T)&&(d+=h-T,o[c]=T,d.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?c--:c++}}if(j(d,0))return n;{const f=e<0?a:i,c=n[f];R(c!=null);const p=c+d,h=le({panelConstraints:t,panelIndex:f,size:p});if(o[f]=h,!j(h,p)){let S=p-h,I=e<0?a:i;for(;I>=0&&I<t.length;){const L=o[I];R(L!=null);const D=L+S,_=le({panelConstraints:t,panelIndex:I,size:D});if(j(L,_)||(S-=_-L,o[I]=_),j(S,0))break;e>0?I--:I++}}}const z=o.reduce((f,c)=>c+f,0);return j(z,100)?o:n}function Ht({layout:e,panelsArray:n,pivotIndices:t}){let s=0,l=100,o=0,i=0;const a=t[0];R(a!=null),n.forEach((c,p)=>{const{constraints:h}=c,{maxSize:S=100,minSize:T=0}=h;p===a?(s=T,l=S):(o+=T,i+=S)});const d=Math.min(l,100-o),z=Math.max(s,100-i),f=e[a];return{valueMax:d,valueMin:z,valueNow:f}}function fe(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function mt(e,n){const s=fe(e).findIndex(l=>l.getAttribute("data-panel-resize-handle-id")===n);return s??null}function pt(e,n){const t=mt(e,n);return t!=null?[t,t+1]:[-1,-1]}function Fe(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function ze(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function Gt(e,n,t){var s,l,o,i;const a=ze(n),d=fe(e),z=a?d.indexOf(a):-1,f=(s=(l=t[z])===null||l===void 0?void 0:l.id)!==null&&s!==void 0?s:null,c=(o=(i=t[z+1])===null||i===void 0?void 0:i.id)!==null&&o!==void 0?o:null;return[f,c]}function _t({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:l,setLayout:o}){Z({didWarnAboutMissingResizeHandle:!1}),pe(()=>{const i=fe(t);for(let a=0;a<l.length-1;a++){const{valueMax:d,valueMin:z,valueNow:f}=Ht({layout:s,panelsArray:l,pivotIndices:[a,a+1]}),c=i[a];if(c!=null){const p=l[a];R(p),c.setAttribute("aria-controls",p.id),c.setAttribute("aria-valuemax",""+Math.round(d)),c.setAttribute("aria-valuemin",""+Math.round(z)),c.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{i.forEach((a,d)=>{a.removeAttribute("aria-controls"),a.removeAttribute("aria-valuemax"),a.removeAttribute("aria-valuemin"),a.removeAttribute("aria-valuenow")})}},[t,s,l]),re(()=>{const i=n.current;R(i);const{panelDataArray:a}=i,d=Fe(t);R(d!=null,`No group found for id "${t}"`);const z=fe(t);R(z);const f=z.map(c=>{const p=c.getAttribute("data-panel-resize-handle-id");R(p);const[h,S]=Gt(t,p,a);if(h==null||S==null)return()=>{};const T=I=>{if(!I.defaultPrevented)switch(I.key){case"Enter":{I.preventDefault();const L=a.findIndex(D=>D.id===h);if(L>=0){const D=a[L];R(D);const _=s[L],{collapsedSize:O=0,collapsible:v,minSize:K=0}=D.constraints;if(_!=null&&v){const X=ue({delta:j(_,O)?K-O:O-_,layout:s,panelConstraints:a.map(H=>H.constraints),pivotIndices:pt(t,p),trigger:"keyboard"});s!==X&&o(X)}}break}}};return c.addEventListener("keydown",T),()=>{c.removeEventListener("keydown",T)}});return()=>{f.forEach(c=>c())}},[e,n,t,s,l,o])}function nn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function ht(e){return e.type==="keydown"}function ft(e){return e.type.startsWith("mouse")}function zt(e){return e.type.startsWith("touch")}function bt(e,n){const t=e==="horizontal";if(ft(n))return t?n.clientX:n.clientY;if(zt(n)){const s=n.touches[0];return R(s),t?s.screenX:s.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function $t(e,n,t,s){const l=t==="horizontal",o=ze(n);R(o);const i=o.getAttribute("data-panel-group-id");R(i);let{initialCursorPosition:a}=s;const d=bt(t,e),z=Fe(i);R(z);const f=z.getBoundingClientRect(),c=l?f.width:f.height;return(d-a)/c*100}function Kt(e,n,t,s,l){if(ht(e)){const o=t==="horizontal";let i=0;e.shiftKey?i=100:l!=null?i=l:i=10;let a=0;switch(e.key){case"ArrowDown":a=o?0:i;break;case"ArrowLeft":a=o?-i:0;break;case"ArrowRight":a=o?i:0;break;case"ArrowUp":a=o?0:-i;break;case"End":a=100;break;case"Home":a=-100;break}return a}else return s==null?0:$t(e,n,t,s)}function Ft({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,l=100;for(let o=0;o<e.length;o++){const i=t[o];R(i);const{defaultSize:a}=i;a!=null&&(s++,n[o]=a,l-=a)}for(let o=0;o<e.length;o++){const i=t[o];R(i);const{defaultSize:a}=i;if(a!=null)continue;const d=e.length-s,z=l/d;s++,n[o]=z,l-=z}return n}function oe(e,n,t){n.forEach((s,l)=>{const o=e[l];R(o);const{callbacks:i,constraints:a,id:d}=o,{collapsedSize:z=0,collapsible:f}=a,c=t[d];if(c==null||s!==c){t[d]=s;const{onCollapse:p,onExpand:h,onResize:S}=i;S&&S(s,c),f&&(p||h)&&(h&&(c==null||c===z)&&s!==z&&h(),p&&(c==null||c!==z)&&s===z&&p())}})}function ge(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Ut({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:l,precision:o=3}){const i=t[l];let a;return i==null?a=e??"1":s.length===1?a="1":a=i.toPrecision(o),{flexBasis:0,flexGrow:a,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}let Ge=null,te=null;function gt(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function jt(){te!==null&&(document.head.removeChild(te),Ge=null,te=null)}function He(e){if(Ge===e)return;Ge=e;const n=gt(e);te===null&&(te=document.createElement("style"),document.head.appendChild(te)),te.innerHTML=`*{cursor: ${n}!important;}`}function qt(e,n=10){let t=null;return(...l)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...l)},n)}}function tn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Rt(e){return`react-resizable-panels:${e}`}function It(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:l,order:o}=n;return l?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function xt(e,n){try{const t=Rt(e),s=n.getItem(t);if(s){const l=JSON.parse(s);if(typeof l=="object"&&l!=null)return l}}catch{}return null}function Vt(e,n,t){var s,l;const o=(s=xt(e,t))!==null&&s!==void 0?s:{},i=It(n);return(l=o[i])!==null&&l!==void 0?l:null}function Zt(e,n,t,s,l){var o;const i=Rt(e),a=It(n),d=(o=xt(e,l))!==null&&o!==void 0?o:{};d[a]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{l.setItem(i,JSON.stringify(d))}catch(z){console.error(z)}}function rn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,i)=>o+i,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!j(s,100))for(let o=0;o<n.length;o++){const i=t[o];R(i!=null);const a=100/s*i;t[o]=a}let l=0;for(let o=0;o<n.length;o++){const i=t[o];R(i!=null);const a=le({panelConstraints:n,panelIndex:o,size:i});i!=a&&(l+=i-a,t[o]=a)}if(!j(l,0))for(let o=0;o<n.length;o++){const i=t[o];R(i!=null);const a=i+l,d=le({panelConstraints:n,panelIndex:o,size:a});if(i!==d&&(l-=d-i,t[o]=d,j(l,0)))break}return t}const Jt=100,me={getItem:e=>(tn(me),me.getItem(e)),setItem:(e,n)=>{tn(me),me.setItem(e,n)}},on={};function Ct({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:l,id:o=null,onLayout:i=null,keyboardResizeBy:a=null,storage:d=me,style:z,tagName:f="div",...c}){const p=Ke(o),[h,S]=Ne(null),[T,I]=Ne([]),L=Z({}),D=Z(new Map),_=Z(0),O=Z({autoSaveId:e,direction:s,dragState:h,id:p,keyboardResizeBy:a,onLayout:i,storage:d}),v=Z({layout:T,panelDataArray:[],panelDataArrayChanged:!1});Z({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),lt(l,()=>({getId:()=>O.current.id,getLayout:()=>{const{layout:g}=v.current;return g},setLayout:g=>{const{onLayout:w}=O.current,{layout:x,panelDataArray:C}=v.current,y=rn({layout:g,panelConstraints:C.map(k=>k.constraints)});nn(x,y)||(I(y),v.current.layout=y,w&&w(y),oe(C,y,L.current))}}),[]),pe(()=>{O.current.autoSaveId=e,O.current.direction=s,O.current.dragState=h,O.current.id=p,O.current.onLayout=i,O.current.storage=d}),_t({committedValuesRef:O,eagerValuesRef:v,groupId:p,layout:T,panelDataArray:v.current.panelDataArray,setLayout:I}),re(()=>{const{panelDataArray:g}=v.current;if(e){if(T.length===0||T.length!==g.length)return;let w=on[e];w==null&&(w=qt(Zt,Jt),on[e]=w);const x=[...g],C=new Map(D.current);w(e,x,C,T,d)}},[e,T,d]),re(()=>{});const K=U(g=>{const{onLayout:w}=O.current,{layout:x,panelDataArray:C}=v.current;if(g.constraints.collapsible){const y=C.map(ee=>ee.constraints),{collapsedSize:k=0,panelSize:A,pivotIndices:$}=se(C,g,x);if(R(A!=null),A!==k){D.current.set(g.id,A);const V=ae(C,g)===C.length-1?A-k:k-A,G=ue({delta:V,layout:x,panelConstraints:y,pivotIndices:$,trigger:"imperative-api"});ge(x,G)||(I(G),v.current.layout=G,w&&w(G),oe(C,G,L.current))}}},[]),X=U(g=>{const{onLayout:w}=O.current,{layout:x,panelDataArray:C}=v.current;if(g.constraints.collapsible){const y=C.map(V=>V.constraints),{collapsedSize:k=0,panelSize:A,minSize:$=0,pivotIndices:ee}=se(C,g,x);if(A===k){const V=D.current.get(g.id),G=V!=null&&V>=$?V:$,Y=ae(C,g)===C.length-1?A-G:G-A,Q=ue({delta:Y,layout:x,panelConstraints:y,pivotIndices:ee,trigger:"imperative-api"});ge(x,Q)||(I(Q),v.current.layout=Q,w&&w(Q),oe(C,Q,L.current))}}},[]),H=U(g=>{const{layout:w,panelDataArray:x}=v.current,{panelSize:C}=se(x,g,w);return R(C!=null),C},[]),ne=U((g,w)=>{const{panelDataArray:x}=v.current,C=ae(x,g);return Ut({defaultSize:w,dragState:h,layout:T,panelData:x,panelIndex:C})},[h,T]),M=U(g=>{const{layout:w,panelDataArray:x}=v.current,{collapsedSize:C=0,collapsible:y,panelSize:k}=se(x,g,w);return y===!0&&k===C},[]),W=U(g=>{const{layout:w,panelDataArray:x}=v.current,{collapsedSize:C=0,collapsible:y,panelSize:k}=se(x,g,w);return R(k!=null),!y||k>C},[]),F=U(g=>{const{panelDataArray:w}=v.current;w.push(g),w.sort((x,C)=>{const y=x.order,k=C.order;return y==null&&k==null?0:y==null?-1:k==null?1:y-k}),v.current.panelDataArrayChanged=!0},[]);pe(()=>{if(v.current.panelDataArrayChanged){v.current.panelDataArrayChanged=!1;const{autoSaveId:g,onLayout:w,storage:x}=O.current,{layout:C,panelDataArray:y}=v.current;let k=null;if(g){const $=Vt(g,y,x);$&&(D.current=new Map(Object.entries($.expandToSizes)),k=$.layout)}k==null&&(k=Ft({panelDataArray:y}));const A=rn({layout:k,panelConstraints:y.map($=>$.constraints)});nn(C,A)||(I(A),v.current.layout=A,w&&w(A),oe(y,A,L.current))}});const B=U(g=>function(x){x.preventDefault();const{direction:C,dragState:y,id:k,keyboardResizeBy:A,onLayout:$}=O.current,{layout:ee,panelDataArray:V}=v.current,{initialLayout:G}=y??{},be=pt(k,g);let Y=Kt(x,g,C,y,A);if(Y===0)return;const Q=C==="horizontal";document.dir==="rtl"&&Q&&(Y=-Y);const Tt=V.map(Pt=>Pt.constraints),de=ue({delta:Y,layout:G??ee,panelConstraints:Tt,pivotIndices:be,trigger:ht(x)?"keyboard":"mouse-or-touch"}),Ze=!ge(ee,de);(ft(x)||zt(x))&&_.current!=Y&&(_.current=Y,He(Ze?Q?"horizontal":"vertical":Q?Y<0?"horizontal-min":"horizontal-max":Y<0?"vertical-min":"vertical-max")),Ze&&(I(de),v.current.layout=de,$&&$(de),oe(V,de,L.current))},[]),q=U((g,w)=>{const{onLayout:x}=O.current,{layout:C,panelDataArray:y}=v.current,k=y.map(be=>be.constraints),{panelSize:A,pivotIndices:$}=se(y,g,C);R(A!=null);const V=ae(y,g)===y.length-1?A-w:w-A,G=ue({delta:V,layout:C,panelConstraints:k,pivotIndices:$,trigger:"imperative-api"});ge(C,G)||(I(G),v.current.layout=G,x&&x(G),oe(y,G,L.current))},[]),je=U((g,w)=>{const{direction:x}=O.current,{layout:C}=v.current,y=ze(g);R(y);const k=bt(x,w);S({dragHandleId:g,dragHandleRect:y.getBoundingClientRect(),initialCursorPosition:k,initialLayout:C})},[]),qe=U(()=>{jt(),S(null)},[]),Ve=U(g=>{const{panelDataArray:w}=v.current,x=ae(w,g);x>=0&&(w.splice(x,1),delete L.current[g.id],v.current.panelDataArrayChanged=!0)},[]),yt=At(()=>({collapsePanel:K,direction:s,dragState:h,expandPanel:X,getPanelSize:H,getPanelStyle:ne,groupId:p,isPanelCollapsed:M,isPanelExpanded:W,registerPanel:F,registerResizeHandle:B,resizePanel:q,startDragging:je,stopDragging:qe,unregisterPanel:Ve}),[K,h,s,X,H,ne,p,M,W,F,B,q,je,qe,Ve]),vt={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return ce(Be.Provider,{value:yt},ce(f,{...c,children:n,className:t,style:{...vt,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":p}))}const St=at((e,n)=>ce(Ct,{...e,forwardedRef:n}));Ct.displayName="PanelGroup";St.displayName="forwardRef(PanelGroup)";function ae(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function se(e,n,t){const s=e.map(z=>z.constraints),l=ae(e,n),o=s[l],a=l===e.length-1?[l-1,l]:[l,l+1],d=t[l];return{...o,panelSize:d,pivotIndices:a}}function Xt({disabled:e,handleId:n,resizeHandler:t}){re(()=>{if(e||t==null)return;const s=ze(n);if(s==null)return;const l=o=>{if(!o.defaultPrevented)switch(o.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{o.preventDefault(),t(o);break}case"F6":{o.preventDefault();const i=s.getAttribute("data-panel-group-id");R(i);const a=fe(i),d=mt(i,n);R(d!==null);const z=o.shiftKey?d>0?d-1:a.length-1:d+1<a.length?d+1:0;a[z].focus();break}}};return s.addEventListener("keydown",l),()=>{s.removeEventListener("keydown",l)}},[e,n,t])}function wt({children:e=null,className:n="",disabled:t=!1,id:s,onDragging:l,style:o={},tabIndex:i=0,tagName:a="div",...d}){const z=Z(null),f=Z({onDragging:l});re(()=>{f.current.onDragging=l});const c=it(Be);if(c===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:p,dragState:h,groupId:S,registerResizeHandle:T,startDragging:I,stopDragging:L}=c,D=Ke(s),_=(h==null?void 0:h.dragHandleId)===D,[O,v]=Ne(!1),[K,X]=Ne(null),H=U(()=>{const M=z.current;R(M),M.blur(),L();const{onDragging:W}=f.current;W&&W(!1)},[L]);re(()=>{if(t)X(null);else{const M=T(D);X(()=>M)}},[t,D,T]),re(()=>{if(t||K==null||!_)return;const M=q=>{K(q)},W=q=>{K(q)},F=z.current;R(F);const B=F.ownerDocument;return B.body.addEventListener("contextmenu",H),B.body.addEventListener("mousemove",M),B.body.addEventListener("touchmove",M),B.body.addEventListener("mouseleave",W),window.addEventListener("mouseup",H),window.addEventListener("touchend",H),()=>{B.body.removeEventListener("contextmenu",H),B.body.removeEventListener("mousemove",M),B.body.removeEventListener("touchmove",M),B.body.removeEventListener("mouseleave",W),window.removeEventListener("mouseup",H),window.removeEventListener("touchend",H)}},[p,t,_,K,H]),Xt({disabled:t,handleId:D,resizeHandler:K});const ne={cursor:gt(p),touchAction:"none",userSelect:"none"};return ce(a,{...d,children:e,className:n,onBlur:()=>v(!1),onFocus:()=>v(!0),onMouseDown:M=>{I(D,M.nativeEvent);const W=f.current;R(W);const{onDragging:F}=W;F&&F(!0)},onMouseUp:H,onTouchCancel:H,onTouchEnd:H,onTouchStart:M=>{I(D,M.nativeEvent);const W=f.current;R(W);const{onDragging:F}=W;F&&F(!0)},ref:z,role:"separator",style:{...ne,...o},tabIndex:i,"data-panel-group-direction":p,"data-panel-group-id":S,"data-resize-handle":"","data-resize-handle-active":_?"pointer":O?"keyboard":void 0,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":D})}wt.displayName="PanelResizeHandle";function Yt(e){const n=document.querySelector(`[data-panel-id="${e}"]`);return n||null}const[Qt,Ue]=Lt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),er=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:l=!1,onLayout:o,storage:i,ref:a,groupProps:d,...z})=>{e??(e=N.useId());const f=N.useCallback((p={},h=null)=>({...p,ref:h,...z}),[z]),c=N.useCallback((p={})=>{const{as:h,...S}=d??{};return{...p,id:e,direction:n,tagName:h,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:i,...S}},[e,n,d,t,s,o,i]);return N.useEffect(()=>{if(!e)return;const p=Fe(e);a&&(a.current=p)},[a,e]),{isDisabled:l,getContainerProps:f,getGroupProps:c}},nr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:l,maxSize:o,minSize:i,onCollapse:a,onExpand:d,onResize:z,order:f,controlRef:c,itemProps:p,...h})=>{e??(e=N.useId());const S=N.useCallback((I={})=>{const{as:L,...D}=p??{};return{...I,ref:c,id:e,tagName:L,collapsible:s,defaultSize:l,maxSize:o,minSize:i,collapsedSize:t,onCollapse:a,onExpand:d,onResize:z,order:f,...D}},[e,c,p,t,s,l,o,i,a,d,z,f]),T=N.useCallback((I={},L=null)=>({...I,ref:L,...h}),[h]);return N.useEffect(()=>{if(!e)return;const I=Yt(e);n&&(n.current=I)},[n,e]),{getPanelProps:S,getItemProps:T}},tr=({id:e,ref:n,as:t,disabled:s,isDisabled:l,onDragging:o,...i})=>{e??(e=N.useId());const{isDisabled:a}=Ue(),[d,z]=N.useState(!1),f=s||l||a,c=N.useCallback((h={})=>({...h,id:e,tagName:t,disabled:f,onDragging:Et(o,S=>z(S)),...i,"data-active":Qe(d),style:{...h.style,...i.style,...f?{cursor:"default"}:{}}}),[e,t,f,o,i,d]),p=N.useCallback((h={},S=null)=>({...h,ref:S,"data-active":Qe(d)}),[d]);return N.useEffect(()=>{if(!e)return;const h=ze(e);n&&(n.current=h)},[n,e]),{getTriggerProps:c,getIconProps:p}},E=$e(({direction:e="horizontal",...n},t)=>{const[s,l]=Wt("Resizable",{direction:e,...n}),{className:o,children:i,containerRef:a,...d}=kt(l),{getContainerProps:z,getGroupProps:f,...c}=er({ref:t,...d}),p={w:"full",h:"full",...s.container};return r(Qt,{value:{styles:s,...c},children:r(Ae.div,{className:_e("ui-resizable",o),__css:p,...z({},a),children:r(St,{...f(),children:i})})})}),u=$e(({className:e,children:n,innerRef:t,...s},l)=>{const{styles:o}=Ue(),{getPanelProps:i,getItemProps:a}=nr({ref:l,...s}),d={boxSize:"full",...o.item};return r(dt,{...i(),children:r(Ae.div,{className:_e("ui-resizable__item",e),__css:d,...a({},t),children:n})})}),P=$e(({className:e,icon:n,children:t,iconProps:s,...l},o)=>{const{styles:i}=Ue(),{getTriggerProps:a,getIconProps:d}=tr({ref:o,...l}),z={position:"relative",...i.trigger};return b(Ae.div,{as:wt,className:_e("ui-resizable__trigger",e),__css:z,...a(),children:[n?r(Ae.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...i.icon},...d(s),children:n}):null,t]})}),sn=e=>b(Dt,{viewBox:"0 0 23 39",w:"2",h:"4",...e,children:[r("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),r("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),r("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),r("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),r("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),r("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),yr={title:"Components / Data Display / Resizable",component:E},Re=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),Ie=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),b(E,{variant:"spacer",h:"md",children:[r(u,{as:m,rounded:"md",borderWidth:"1px",children:"One"}),r(P,{}),r(u,{as:m,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),xe=()=>b(J,{children:[b(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r(u,{as:m,rounded:"md",borderWidth:"1px",children:"One"}),r(P,{}),r(u,{as:m,rounded:"md",borderWidth:"1px",children:"Two"})]}),b(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r(u,{as:m,rounded:"md",borderWidth:"1px",children:"One"}),r(P,{}),r(u,{as:m,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ce=()=>b(J,{children:[b(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]})]}),Se=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,defaultSize:30,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),we=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,minSize:30,maxSize:70,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),ye=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),ve=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]})]}),Te=()=>{const e=N.useRef(null),n=N.useRef(null),t=N.useRef(null),s=N.useRef(null),l=N.useRef(null);return N.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",l)},[]),b(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,ref:t,innerRef:s,children:"One"}),r(P,{ref:l}),r(u,{as:m,children:"Two"})]})},Pe=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{icon:r(sn,{})}),r(u,{as:m,children:"Two"})]}),b(E,{direction:"vertical",variant:"spacer",h:"md",children:[r(u,{as:m,rounded:"md",borderWidth:"1px",children:"One"}),r(P,{icon:r(sn,{})}),r(u,{as:m,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Le=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{icon:r(Je,{icon:Xe})}),r(u,{as:m,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{icon:r(Je,{icon:Xe})}),r(u,{as:m,children:"Two"})]})]}),Ee=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"Left"}),r(P,{}),r(u,{children:b(E,{direction:"vertical",children:[r(u,{as:m,children:"Top"}),r(P,{}),r(u,{as:m,children:"Bottom"})]})})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"Top"}),r(P,{}),r(u,{children:b(E,{children:[r(u,{as:m,children:"Left"}),r(P,{}),r(u,{as:m,children:"Right"})]})})]})]}),We=()=>b(J,{children:[b(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"}),r(P,{}),r(u,{as:m,children:"Three"})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,children:"One"}),r(P,{isDisabled:!0}),r(u,{as:m,children:"Two"}),r(P,{}),r(u,{as:m,children:"Three"})]})]}),ke=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]}),De=()=>{const[e,n]=Ye(!0),[t,s]=Ye(!0);return b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r(u,{as:m,id:"one",children:"One"}),r(P,{}),r(u,{as:m,id:"two",children:"Two"})]}),b(st,{gap:"md",children:[b(ie,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),b(ie,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?b(J,{children:[r(u,{as:m,id:"left",minSize:10,order:1,children:"Left"}),r(P,{})]}):null,r(u,{as:m,id:"middle",minSize:10,order:2,children:"Middle"}),t?b(J,{children:[r(P,{}),r(u,{as:m,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Oe=()=>{const e=N.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r(u,{as:m,id:"one",children:"One"}),r(P,{}),r(u,{as:m,id:"two",children:"Two"})]})},Me=()=>{const e=N.useRef(null);return b(J,{children:[b(st,{gap:"md",children:[r(ie,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r(ie,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r(ie,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r(ie,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:m,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r(P,{}),r(u,{as:m,children:"Two"})]})]})};var an,ln,cn;Re.parameters={...Re.parameters,docs:{...(an=Re.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(cn=(ln=Re.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var dn,un,mn;Ie.parameters={...Ie.parameters,docs:{...(dn=Ie.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
    </>;
}`,...(mn=(un=Ie.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var pn,hn,fn;xe.parameters={...xe.parameters,docs:{...(pn=xe.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(fn=(hn=xe.parameters)==null?void 0:hn.docs)==null?void 0:fn.source}}};var zn,bn,gn;Ce.parameters={...Ce.parameters,docs:{...(zn=Ce.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(gn=(bn=Ce.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var Rn,In,xn;Se.parameters={...Se.parameters,docs:{...(Rn=Se.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(xn=(In=Se.parameters)==null?void 0:In.docs)==null?void 0:xn.source}}};var Cn,Sn,wn;we.parameters={...we.parameters,docs:{...(Cn=we.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(wn=(Sn=we.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var yn,vn,Tn;ye.parameters={...ye.parameters,docs:{...(yn=ye.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Tn=(vn=ye.parameters)==null?void 0:vn.docs)==null?void 0:Tn.source}}};var Pn,Ln,En;ve.parameters={...ve.parameters,docs:{...(Pn=ve.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
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
}`,...(En=(Ln=ve.parameters)==null?void 0:Ln.docs)==null?void 0:En.source}}};var Wn,kn,Dn;Te.parameters={...Te.parameters,docs:{...(Wn=Te.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(kn=Te.parameters)==null?void 0:kn.docs)==null?void 0:Dn.source}}};var On,Mn,An;Pe.parameters={...Pe.parameters,docs:{...(On=Pe.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(An=(Mn=Pe.parameters)==null?void 0:Mn.docs)==null?void 0:An.source}}};var Nn,Bn,Hn;Le.parameters={...Le.parameters,docs:{...(Nn=Le.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(Bn=Le.parameters)==null?void 0:Bn.docs)==null?void 0:Hn.source}}};var Gn,_n,$n;Ee.parameters={...Ee.parameters,docs:{...(Gn=Ee.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
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
}`,...($n=(_n=Ee.parameters)==null?void 0:_n.docs)==null?void 0:$n.source}}};var Kn,Fn,Un;We.parameters={...We.parameters,docs:{...(Kn=We.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Un=(Fn=We.parameters)==null?void 0:Fn.docs)==null?void 0:Un.source}}};var jn,qn,Vn;ke.parameters={...ke.parameters,docs:{...(jn=ke.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(qn=ke.parameters)==null?void 0:qn.docs)==null?void 0:Vn.source}}};var Zn,Jn,Xn;De.parameters={...De.parameters,docs:{...(Zn=De.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Jn=De.parameters)==null?void 0:Jn.docs)==null?void 0:Xn.source}}};var Yn,Qn,et;Oe.parameters={...Oe.parameters,docs:{...(Yn=Oe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(et=(Qn=Oe.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};var nt,tt,rt;Me.parameters={...Me.parameters,docs:{...(nt=Me.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(rt=(tt=Me.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};const vr=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{vr as __namedExportsOrder,Re as basic,Me as customControls,Le as customIcon,yr as default,We as isDisabled,Ee as nestedResizable,Oe as useCookieStorage,De as useLocaleStorage,ke as useOnResize,ve as withCollapsible,xe as withColorScheme,Se as withDefaultSize,Ce as withDirection,Pe as withIcon,ye as withKeyboardStep,we as withMinMaxSize,Te as withRefs,Ie as withVariant};
