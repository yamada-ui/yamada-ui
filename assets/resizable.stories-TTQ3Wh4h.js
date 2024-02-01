import{j as r,a as b,F as J}from"./jsx-runtime-5BUNAZ9W.js";import{I as Je,w as Xe}from"./fontawesome-icon-_Wx_Ed8O.js";import{u as Ye}from"./index-YuXFfT5-.js";import{a as ot,r as N}from"./index-4g5l5LRQ.js";import{c as Lt,h as Et,K as Qe,u as pe,a as _e}from"./factory-RgfxYELV.js";import{f as $e}from"./forward-ref-A-8Arhkk.js";import{u as Wt}from"./use-component-style-w5CKuE2B.js";import{o as kt}from"./theme-provider-3UPjg8SK.js";import{b as Dt}from"./icon-_8-FzyzA.js";import{C as h}from"./center-s5LlUf31.js";import{W as st}from"./flex-jmkNAMLJ.js";import{B as ae}from"./button-Alg8QOdJ.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-C-jqR-WU.js";import"./use-ripple-GML7p_Ge.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-cwWH0vUb.js";import"./loading-XllCM6KN.js";import"./index-l_LhqSw0.js";import"./index-DFTBuhAG.js";const{createElement:ce,createContext:Ot,createRef:vr,forwardRef:it,useCallback:U,useContext:at,useEffect:re,useImperativeHandle:lt,useLayoutEffect:Mt,useMemo:At,useRef:Z,useState:Ne}=ot,en=ot.useId,Be=Ot(null);Be.displayName="PanelGroupContext";const he=Mt,Nt=typeof en=="function"?en:()=>null;let Bt=0;function Ke(e=null){const n=Nt(),t=Z(e||n||null);return t.current===null&&(t.current=""+Bt++),e??t.current}function ct({children:e,className:n="",collapsedSize:t,collapsible:s,defaultSize:l,forwardedRef:o,id:a,maxSize:i,minSize:d,onCollapse:z,onExpand:f,onResize:c,order:m,style:p,tagName:x="div",...T}){const g=at(Be);if(g===null)throw Error("Panel components must be rendered within a PanelGroup container");const{collapsePanel:P,expandPanel:D,getPanelSize:H,getPanelStyle:O,groupId:w,isPanelCollapsed:K,registerPanel:X,resizePanel:G,unregisterPanel:ne}=g,M=Ke(a),W=Z({callbacks:{onCollapse:z,onExpand:f,onResize:c},constraints:{collapsedSize:t,collapsible:s,defaultSize:l,maxSize:i,minSize:d},id:M,idIsFromProps:a!==void 0,order:m});Z({didLogMissingDefaultSizeWarning:!1}),he(()=>{const{callbacks:B,constraints:q}=W.current;W.current.id=M,W.current.idIsFromProps=a!==void 0,W.current.order=m,B.onCollapse=z,B.onExpand=f,B.onResize=c,q.collapsedSize=t,q.collapsible=s,q.defaultSize=l,q.maxSize=i,q.minSize=d}),he(()=>{const B=W.current;return X(B),()=>{ne(B)}},[m,M,X,ne]),lt(o,()=>({collapse:()=>{P(W.current)},expand:()=>{D(W.current)},getId(){return M},getSize(){return H(W.current)},isCollapsed(){return K(W.current)},isExpanded(){return!K(W.current)},resize:B=>{G(W.current,B)}}),[P,D,H,K,M,G]);const F=O(W.current,l);return ce(x,{...T,children:e,className:n,style:{...F,...p},"data-panel":"","data-panel-id":M,"data-panel-group-id":w,"data-panel-collapsible":void 0,"data-panel-size":void 0})}const dt=it((e,n)=>ce(ct,{...e,forwardedRef:n}));ct.displayName="Panel";dt.displayName="forwardRef(Panel)";function I(e,n="Assertion failed!"){if(!e)throw console.error(n),Error(n)}const ut=10;function fe(e,n,t=ut){e=parseFloat(e.toFixed(t)),n=parseFloat(n.toFixed(t));const s=e-n;return s===0?0:s>0?1:-1}function j(e,n,t){return fe(e,n,t)===0}function le({panelConstraints:e,panelIndex:n,size:t}){const s=e[n];I(s!=null);let{collapsedSize:l=0,collapsible:o,maxSize:a=100,minSize:i=0}=s;if(fe(t,i)<0)if(o){const d=(l+i)/2;fe(t,d)<0?t=l:t=i}else t=i;return t=Math.min(a,t),t=parseFloat(t.toFixed(ut)),t}function ue({delta:e,layout:n,panelConstraints:t,pivotIndices:s,trigger:l}){if(j(e,0))return n;const o=[...n],[a,i]=s;I(a!=null),I(i!=null);let d=0;if(l==="keyboard"){{const f=e<0?i:a,c=t[f];if(I(c),c.collapsible){const m=n[f];I(m!=null);const p=t[f];I(p);const{collapsedSize:x=0,minSize:T=0}=p;if(j(m,x)){const g=T-m;fe(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const f=e<0?a:i,c=t[f];I(c);const{collapsible:m}=c;if(m){const p=n[f];I(p!=null);const x=t[f];I(x);const{collapsedSize:T=0,minSize:g=0}=x;if(j(p,g)){const P=p-T;fe(P,Math.abs(e))>0&&(e=e<0?0-P:P)}}}}{const f=e<0?1:-1;let c=e<0?i:a,m=0;for(;;){const x=n[c];I(x!=null);const g=le({panelConstraints:t,panelIndex:c,size:100})-x;if(m+=g,c+=f,c<0||c>=t.length)break}const p=Math.min(Math.abs(e),Math.abs(m));e=e<0?0-p:p}{let c=e<0?a:i;for(;c>=0&&c<t.length;){const m=Math.abs(e)-Math.abs(d),p=n[c];I(p!=null);const x=p-m,T=le({panelConstraints:t,panelIndex:c,size:x});if(!j(p,T)&&(d+=p-T,o[c]=T,d.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3),void 0,{numeric:!0})>=0))break;e<0?c--:c++}}if(j(d,0))return n;{const f=e<0?i:a,c=n[f];I(c!=null);const m=c+d,p=le({panelConstraints:t,panelIndex:f,size:m});if(o[f]=p,!j(p,m)){let x=m-p,g=e<0?i:a;for(;g>=0&&g<t.length;){const P=o[g];I(P!=null);const D=P+x,H=le({panelConstraints:t,panelIndex:g,size:D});if(j(P,H)||(x-=H-P,o[g]=H),j(x,0))break;e>0?g--:g++}}}const z=o.reduce((f,c)=>c+f,0);return j(z,100)?o:n}function Ht({layout:e,panelsArray:n,pivotIndices:t}){let s=0,l=100,o=0,a=0;const i=t[0];I(i!=null),n.forEach((c,m)=>{const{constraints:p}=c,{maxSize:x=100,minSize:T=0}=p;m===i?(s=T,l=x):(o+=T,a+=x)});const d=Math.min(l,100-o),z=Math.max(s,100-a),f=e[i];return{valueMax:d,valueMin:z,valueNow:f}}function ze(e){return Array.from(document.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`))}function mt(e,n){const s=ze(e).findIndex(l=>l.getAttribute("data-panel-resize-handle-id")===n);return s??null}function pt(e,n){const t=mt(e,n);return t!=null?[t,t+1]:[-1,-1]}function Fe(e){const n=document.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);return n||null}function be(e){const n=document.querySelector(`[data-panel-resize-handle-id="${e}"]`);return n||null}function Gt(e,n,t){var s,l,o,a;const i=be(n),d=ze(e),z=i?d.indexOf(i):-1,f=(s=(l=t[z])===null||l===void 0?void 0:l.id)!==null&&s!==void 0?s:null,c=(o=(a=t[z+1])===null||a===void 0?void 0:a.id)!==null&&o!==void 0?o:null;return[f,c]}function _t({committedValuesRef:e,eagerValuesRef:n,groupId:t,layout:s,panelDataArray:l,setLayout:o}){Z({didWarnAboutMissingResizeHandle:!1}),he(()=>{const a=ze(t);for(let i=0;i<l.length-1;i++){const{valueMax:d,valueMin:z,valueNow:f}=Ht({layout:s,panelsArray:l,pivotIndices:[i,i+1]}),c=a[i];if(c!=null){const m=l[i];I(m),c.setAttribute("aria-controls",m.id),c.setAttribute("aria-valuemax",""+Math.round(d)),c.setAttribute("aria-valuemin",""+Math.round(z)),c.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{a.forEach((i,d)=>{i.removeAttribute("aria-controls"),i.removeAttribute("aria-valuemax"),i.removeAttribute("aria-valuemin"),i.removeAttribute("aria-valuenow")})}},[t,s,l]),re(()=>{const a=n.current;I(a);const{panelDataArray:i}=a,d=Fe(t);I(d!=null,`No group found for id "${t}"`);const z=ze(t);I(z);const f=z.map(c=>{const m=c.getAttribute("data-panel-resize-handle-id");I(m);const[p,x]=Gt(t,m,i);if(p==null||x==null)return()=>{};const T=g=>{if(!g.defaultPrevented)switch(g.key){case"Enter":{g.preventDefault();const P=i.findIndex(D=>D.id===p);if(P>=0){const D=i[P];I(D);const H=s[P],{collapsedSize:O=0,collapsible:w,minSize:K=0}=D.constraints;if(H!=null&&w){const X=ue({delta:j(H,O)?K-O:O-H,layout:s,panelConstraints:i.map(G=>G.constraints),pivotIndices:pt(t,m),trigger:"keyboard"});s!==X&&o(X)}}break}}};return c.addEventListener("keydown",T),()=>{c.removeEventListener("keydown",T)}});return()=>{f.forEach(c=>c())}},[e,n,t,s,l,o])}function nn(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function ht(e){return e.type==="keydown"}function ft(e){return e.type.startsWith("mouse")}function zt(e){return e.type.startsWith("touch")}function bt(e,n){const t=e==="horizontal";if(ft(n))return t?n.clientX:n.clientY;if(zt(n)){const s=n.touches[0];return I(s),t?s.screenX:s.screenY}else throw Error(`Unsupported event type "${n.type}"`)}function $t(e,n,t,s){const l=t==="horizontal",o=be(n);I(o);const a=o.getAttribute("data-panel-group-id");I(a);let{initialCursorPosition:i}=s;const d=bt(t,e),z=Fe(a);I(z);const f=z.getBoundingClientRect(),c=l?f.width:f.height;return(d-i)/c*100}function Kt(e,n,t,s,l){if(ht(e)){const o=t==="horizontal";let a=0;e.shiftKey?a=100:l!=null?a=l:a=10;let i=0;switch(e.key){case"ArrowDown":i=o?0:a;break;case"ArrowLeft":i=o?-a:0;break;case"ArrowRight":i=o?a:0;break;case"ArrowUp":i=o?0:-a;break;case"End":i=100;break;case"Home":i=-100;break}return i}else return s==null?0:$t(e,n,t,s)}function Ft({panelDataArray:e}){const n=Array(e.length),t=e.map(o=>o.constraints);let s=0,l=100;for(let o=0;o<e.length;o++){const a=t[o];I(a);const{defaultSize:i}=a;i!=null&&(s++,n[o]=i,l-=i)}for(let o=0;o<e.length;o++){const a=t[o];I(a);const{defaultSize:i}=a;if(i!=null)continue;const d=e.length-s,z=l/d;s++,n[o]=z,l-=z}return n}function oe(e,n,t){n.forEach((s,l)=>{const o=e[l];I(o);const{callbacks:a,constraints:i,id:d}=o,{collapsedSize:z=0,collapsible:f}=i,c=t[d];if(c==null||s!==c){t[d]=s;const{onCollapse:m,onExpand:p,onResize:x}=a;x&&x(s,c),f&&(m||p)&&(p&&(c==null||c===z)&&s!==z&&p(),m&&(c==null||c!==z)&&s===z&&m())}})}function Re(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function Ut({defaultSize:e,dragState:n,layout:t,panelData:s,panelIndex:l,precision:o=3}){const a=t[l];let i;return a==null?i=e??"1":s.length===1?i="1":i=a.toPrecision(o),{flexBasis:0,flexGrow:i,flexShrink:1,overflow:"hidden",pointerEvents:n!==null?"none":void 0}}let Ge=null,te=null;function gt(e){switch(e){case"horizontal":return"ew-resize";case"horizontal-max":return"w-resize";case"horizontal-min":return"e-resize";case"vertical":return"ns-resize";case"vertical-max":return"n-resize";case"vertical-min":return"s-resize"}}function jt(){te!==null&&(document.head.removeChild(te),Ge=null,te=null)}function He(e){if(Ge===e)return;Ge=e;const n=gt(e);te===null&&(te=document.createElement("style"),document.head.appendChild(te)),te.innerHTML=`*{cursor: ${n}!important;}`}function qt(e,n=10){let t=null;return(...l)=>{t!==null&&clearTimeout(t),t=setTimeout(()=>{e(...l)},n)}}function tn(e){try{if(typeof localStorage<"u")e.getItem=n=>localStorage.getItem(n),e.setItem=(n,t)=>{localStorage.setItem(n,t)};else throw new Error("localStorage not supported in this environment")}catch(n){console.error(n),e.getItem=()=>null,e.setItem=()=>{}}}function Rt(e){return`react-resizable-panels:${e}`}function It(e){return e.map(n=>{const{constraints:t,id:s,idIsFromProps:l,order:o}=n;return l?s:o?`${o}:${JSON.stringify(t)}`:JSON.stringify(t)}).sort((n,t)=>n.localeCompare(t)).join(",")}function xt(e,n){try{const t=Rt(e),s=n.getItem(t);if(s){const l=JSON.parse(s);if(typeof l=="object"&&l!=null)return l}}catch{}return null}function Vt(e,n,t){var s,l;const o=(s=xt(e,t))!==null&&s!==void 0?s:{},a=It(n);return(l=o[a])!==null&&l!==void 0?l:null}function Zt(e,n,t,s,l){var o;const a=Rt(e),i=It(n),d=(o=xt(e,l))!==null&&o!==void 0?o:{};d[i]={expandToSizes:Object.fromEntries(t.entries()),layout:s};try{l.setItem(a,JSON.stringify(d))}catch(z){console.error(z)}}function rn({layout:e,panelConstraints:n}){const t=[...e],s=t.reduce((o,a)=>o+a,0);if(t.length!==n.length)throw Error(`Invalid ${n.length} panel layout: ${t.map(o=>`${o}%`).join(", ")}`);if(!j(s,100))for(let o=0;o<n.length;o++){const a=t[o];I(a!=null);const i=100/s*a;t[o]=i}let l=0;for(let o=0;o<n.length;o++){const a=t[o];I(a!=null);const i=le({panelConstraints:n,panelIndex:o,size:a});a!=i&&(l+=a-i,t[o]=i)}if(!j(l,0))for(let o=0;o<n.length;o++){const a=t[o];I(a!=null);const i=a+l,d=le({panelConstraints:n,panelIndex:o,size:i});if(a!==d&&(l-=d-a,t[o]=d,j(l,0)))break}return t}const Jt=100,me={getItem:e=>(tn(me),me.getItem(e)),setItem:(e,n)=>{tn(me),me.setItem(e,n)}},on={};function Ct({autoSaveId:e=null,children:n,className:t="",direction:s,forwardedRef:l,id:o=null,onLayout:a=null,keyboardResizeBy:i=null,storage:d=me,style:z,tagName:f="div",...c}){const m=Ke(o),[p,x]=Ne(null),[T,g]=Ne([]),P=Z({}),D=Z(new Map),H=Z(0),O=Z({autoSaveId:e,direction:s,dragState:p,id:m,keyboardResizeBy:i,onLayout:a,storage:d}),w=Z({layout:T,panelDataArray:[],panelDataArrayChanged:!1});Z({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),lt(l,()=>({getId:()=>O.current.id,getLayout:()=>{const{layout:R}=w.current;return R},setLayout:R=>{const{onLayout:y}=O.current,{layout:C,panelDataArray:S}=w.current,v=rn({layout:R,panelConstraints:S.map(k=>k.constraints)});nn(C,v)||(g(v),w.current.layout=v,y&&y(v),oe(S,v,P.current))}}),[]),he(()=>{O.current.autoSaveId=e,O.current.direction=s,O.current.dragState=p,O.current.id=m,O.current.onLayout=a,O.current.storage=d}),_t({committedValuesRef:O,eagerValuesRef:w,groupId:m,layout:T,panelDataArray:w.current.panelDataArray,setLayout:g}),re(()=>{const{panelDataArray:R}=w.current;if(e){if(T.length===0||T.length!==R.length)return;let y=on[e];y==null&&(y=qt(Zt,Jt),on[e]=y);const C=[...R],S=new Map(D.current);y(e,C,S,T,d)}},[e,T,d]),re(()=>{});const K=U(R=>{const{onLayout:y}=O.current,{layout:C,panelDataArray:S}=w.current;if(R.constraints.collapsible){const v=S.map(ee=>ee.constraints),{collapsedSize:k=0,panelSize:A,pivotIndices:$}=se(S,R,C);if(I(A!=null),A!==k){D.current.set(R.id,A);const V=ie(S,R)===S.length-1?A-k:k-A,_=ue({delta:V,layout:C,panelConstraints:v,pivotIndices:$,trigger:"imperative-api"});Re(C,_)||(g(_),w.current.layout=_,y&&y(_),oe(S,_,P.current))}}},[]),X=U(R=>{const{onLayout:y}=O.current,{layout:C,panelDataArray:S}=w.current;if(R.constraints.collapsible){const v=S.map(V=>V.constraints),{collapsedSize:k=0,panelSize:A,minSize:$=0,pivotIndices:ee}=se(S,R,C);if(A===k){const V=D.current.get(R.id),_=V!=null&&V>=$?V:$,Y=ie(S,R)===S.length-1?A-_:_-A,Q=ue({delta:Y,layout:C,panelConstraints:v,pivotIndices:ee,trigger:"imperative-api"});Re(C,Q)||(g(Q),w.current.layout=Q,y&&y(Q),oe(S,Q,P.current))}}},[]),G=U(R=>{const{layout:y,panelDataArray:C}=w.current,{panelSize:S}=se(C,R,y);return I(S!=null),S},[]),ne=U((R,y)=>{const{panelDataArray:C}=w.current,S=ie(C,R);return Ut({defaultSize:y,dragState:p,layout:T,panelData:C,panelIndex:S})},[p,T]),M=U(R=>{const{layout:y,panelDataArray:C}=w.current,{collapsedSize:S=0,collapsible:v,panelSize:k}=se(C,R,y);return v===!0&&k===S},[]),W=U(R=>{const{layout:y,panelDataArray:C}=w.current,{collapsedSize:S=0,collapsible:v,panelSize:k}=se(C,R,y);return I(k!=null),!v||k>S},[]),F=U(R=>{const{panelDataArray:y}=w.current;y.push(R),y.sort((C,S)=>{const v=C.order,k=S.order;return v==null&&k==null?0:v==null?-1:k==null?1:v-k}),w.current.panelDataArrayChanged=!0},[]);he(()=>{if(w.current.panelDataArrayChanged){w.current.panelDataArrayChanged=!1;const{autoSaveId:R,onLayout:y,storage:C}=O.current,{layout:S,panelDataArray:v}=w.current;let k=null;if(R){const $=Vt(R,v,C);$&&(D.current=new Map(Object.entries($.expandToSizes)),k=$.layout)}k==null&&(k=Ft({panelDataArray:v}));const A=rn({layout:k,panelConstraints:v.map($=>$.constraints)});nn(S,A)||(g(A),w.current.layout=A,y&&y(A),oe(v,A,P.current))}});const B=U(R=>function(C){C.preventDefault();const{direction:S,dragState:v,id:k,keyboardResizeBy:A,onLayout:$}=O.current,{layout:ee,panelDataArray:V}=w.current,{initialLayout:_}=v??{},ge=pt(k,R);let Y=Kt(C,R,S,v,A);if(Y===0)return;const Q=S==="horizontal";document.dir==="rtl"&&Q&&(Y=-Y);const Tt=V.map(Pt=>Pt.constraints),de=ue({delta:Y,layout:_??ee,panelConstraints:Tt,pivotIndices:ge,trigger:ht(C)?"keyboard":"mouse-or-touch"}),Ze=!Re(ee,de);(ft(C)||zt(C))&&H.current!=Y&&(H.current=Y,He(Ze?Q?"horizontal":"vertical":Q?Y<0?"horizontal-min":"horizontal-max":Y<0?"vertical-min":"vertical-max")),Ze&&(g(de),w.current.layout=de,$&&$(de),oe(V,de,P.current))},[]),q=U((R,y)=>{const{onLayout:C}=O.current,{layout:S,panelDataArray:v}=w.current,k=v.map(ge=>ge.constraints),{panelSize:A,pivotIndices:$}=se(v,R,S);I(A!=null);const V=ie(v,R)===v.length-1?A-y:y-A,_=ue({delta:V,layout:S,panelConstraints:k,pivotIndices:$,trigger:"imperative-api"});Re(S,_)||(g(_),w.current.layout=_,C&&C(_),oe(v,_,P.current))},[]),je=U((R,y)=>{const{direction:C}=O.current,{layout:S}=w.current,v=be(R);I(v);const k=bt(C,y);x({dragHandleId:R,dragHandleRect:v.getBoundingClientRect(),initialCursorPosition:k,initialLayout:S})},[]),qe=U(()=>{jt(),x(null)},[]),Ve=U(R=>{const{panelDataArray:y}=w.current,C=ie(y,R);C>=0&&(y.splice(C,1),delete P.current[R.id],w.current.panelDataArrayChanged=!0)},[]),yt=At(()=>({collapsePanel:K,direction:s,dragState:p,expandPanel:X,getPanelSize:G,getPanelStyle:ne,groupId:m,isPanelCollapsed:M,isPanelExpanded:W,registerPanel:F,registerResizeHandle:B,resizePanel:q,startDragging:je,stopDragging:qe,unregisterPanel:Ve}),[K,p,s,X,G,ne,m,M,W,F,B,q,je,qe,Ve]),vt={display:"flex",flexDirection:s==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return ce(Be.Provider,{value:yt},ce(f,{...c,children:n,className:t,style:{...vt,...z},"data-panel-group":"","data-panel-group-direction":s,"data-panel-group-id":m}))}const St=it((e,n)=>ce(Ct,{...e,forwardedRef:n}));Ct.displayName="PanelGroup";St.displayName="forwardRef(PanelGroup)";function ie(e,n){return e.findIndex(t=>t===n||t.id===n.id)}function se(e,n,t){const s=e.map(z=>z.constraints),l=ie(e,n),o=s[l],i=l===e.length-1?[l-1,l]:[l,l+1],d=t[l];return{...o,panelSize:d,pivotIndices:i}}function Xt({disabled:e,handleId:n,resizeHandler:t}){re(()=>{if(e||t==null)return;const s=be(n);if(s==null)return;const l=o=>{if(!o.defaultPrevented)switch(o.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{o.preventDefault(),t(o);break}case"F6":{o.preventDefault();const a=s.getAttribute("data-panel-group-id");I(a);const i=ze(a),d=mt(a,n);I(d!==null);const z=o.shiftKey?d>0?d-1:i.length-1:d+1<i.length?d+1:0;i[z].focus();break}}};return s.addEventListener("keydown",l),()=>{s.removeEventListener("keydown",l)}},[e,n,t])}function wt({children:e=null,className:n="",disabled:t=!1,id:s,onDragging:l,style:o={},tabIndex:a=0,tagName:i="div",...d}){const z=Z(null),f=Z({onDragging:l});re(()=>{f.current.onDragging=l});const c=at(Be);if(c===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");const{direction:m,dragState:p,groupId:x,registerResizeHandle:T,startDragging:g,stopDragging:P}=c,D=Ke(s),H=(p==null?void 0:p.dragHandleId)===D,[O,w]=Ne(!1),[K,X]=Ne(null),G=U(()=>{const M=z.current;I(M),M.blur(),P();const{onDragging:W}=f.current;W&&W(!1)},[P]);re(()=>{if(t)X(null);else{const M=T(D);X(()=>M)}},[t,D,T]),re(()=>{if(t||K==null||!H)return;const M=q=>{K(q)},W=q=>{K(q)},F=z.current;I(F);const B=F.ownerDocument;return B.body.addEventListener("contextmenu",G),B.body.addEventListener("mousemove",M),B.body.addEventListener("touchmove",M),B.body.addEventListener("mouseleave",W),window.addEventListener("mouseup",G),window.addEventListener("touchend",G),()=>{B.body.removeEventListener("contextmenu",G),B.body.removeEventListener("mousemove",M),B.body.removeEventListener("touchmove",M),B.body.removeEventListener("mouseleave",W),window.removeEventListener("mouseup",G),window.removeEventListener("touchend",G)}},[m,t,H,K,G]),Xt({disabled:t,handleId:D,resizeHandler:K});const ne={cursor:gt(m),touchAction:"none",userSelect:"none"};return ce(i,{...d,children:e,className:n,onBlur:()=>w(!1),onFocus:()=>w(!0),onMouseDown:M=>{g(D,M.nativeEvent);const W=f.current;I(W);const{onDragging:F}=W;F&&F(!0)},onMouseUp:G,onTouchCancel:G,onTouchEnd:G,onTouchStart:M=>{g(D,M.nativeEvent);const W=f.current;I(W);const{onDragging:F}=W;F&&F(!0)},ref:z,role:"separator",style:{...ne,...o},tabIndex:a,"data-panel-group-direction":m,"data-panel-group-id":x,"data-resize-handle":"","data-resize-handle-active":H?"pointer":O?"keyboard":void 0,"data-panel-resize-handle-enabled":!t,"data-panel-resize-handle-id":D})}wt.displayName="PanelResizeHandle";function Yt(e){const n=document.querySelector(`[data-panel-id="${e}"]`);return n||null}const[Qt,Ue]=Lt({name:"ResizableContext",errorMessage:`useResizableContext returned is 'undefined'. Seems you forgot to wrap the components in "<Resizable />"`}),er=({id:e,direction:n="horizontal",storageKey:t,keyboardStep:s,isDisabled:l=!1,onLayout:o,storage:a,ref:i,groupProps:d,...z})=>{e??(e=N.useId());const f=N.useCallback((m={},p=null)=>({...m,ref:p,...z}),[z]),c=N.useCallback((m={})=>{const{as:p,...x}=d??{};return{...m,id:e,direction:n,tagName:p,autoSaveId:t,keyboardResizeBy:s,onLayout:o,storage:a,...x}},[e,n,d,t,s,o,a]);return N.useEffect(()=>{if(!e)return;const m=Fe(e);i&&(i.current=m)},[i,e]),{isDisabled:l,getContainerProps:f,getGroupProps:c}},nr=({id:e,ref:n,collapsedSize:t,collapsible:s,defaultSize:l,maxSize:o,minSize:a,onCollapse:i,onExpand:d,onResize:z,order:f,controlRef:c,containerProps:m,...p})=>{e??(e=N.useId());const x=N.useCallback((g={})=>{const{as:P,...D}=m??{};return{...g,ref:c,id:e,tagName:P,collapsible:s,defaultSize:l,maxSize:o,minSize:a,collapsedSize:t,onCollapse:i,onExpand:d,onResize:z,order:f,...D}},[e,c,m,t,s,l,o,a,i,d,z,f]),T=N.useCallback((g={},P=null)=>({...g,ref:P,...p}),[p]);return N.useEffect(()=>{if(!e)return;const g=Yt(e);n&&(n.current=g)},[n,e]),{getPanelProps:x,getItemProps:T}},tr=({id:e,ref:n,as:t,disabled:s,isDisabled:l,onDragging:o,...a})=>{e??(e=N.useId());const{isDisabled:i}=Ue(),[d,z]=N.useState(!1),f=s||l||i,c=N.useCallback((p={})=>({...p,id:e,tagName:t,disabled:f,onDragging:Et(o,x=>z(x)),...a,"data-active":Qe(d),style:{...p.style,...a.style,...f?{cursor:"default"}:{}}}),[e,t,f,o,a,d]),m=N.useCallback((p={},x=null)=>({...p,ref:x,"data-active":Qe(d)}),[d]);return N.useEffect(()=>{if(!e)return;const p=be(e);n&&(n.current=p)},[n,e]),{getTriggerProps:c,getIconProps:m}},E=$e(({direction:e="horizontal",...n},t)=>{const[s,l]=Wt("Resizable",{direction:e,...n}),{className:o,children:a,containerRef:i,...d}=kt(l),{getContainerProps:z,getGroupProps:f,...c}=er({ref:t,...d}),m={w:"full",h:"full",...s.container};return r(Qt,{value:{styles:s,...c},children:r(pe.div,{className:_e("ui-resizable",o),__css:m,...z({},i),children:r(St,{...f(),children:a})})})}),u=$e(({className:e,children:n,innerRef:t,w:s,width:l,minW:o,minWidth:a,maxW:i,maxWidth:d,h:z,height:f,minH:c,minHeight:m,maxH:p,maxHeight:x,boxSize:T,...g},P)=>{const{styles:D}=Ue(),{getPanelProps:H,getItemProps:O}=nr({ref:P,...g}),w={boxSize:"full",...D.item};return r(pe.div,{as:dt,...H({w:s,width:l,minW:o,minWidth:a,maxW:i,maxWidth:d,h:z,height:f,minH:c,minHeight:m,maxH:p,maxHeight:x,boxSize:T}),children:r(pe.div,{className:_e("ui-resizable__item",e),__css:w,...O({},t),children:n})})}),L=$e(({className:e,icon:n,children:t,iconProps:s,...l},o)=>{const{styles:a}=Ue(),{getTriggerProps:i,getIconProps:d}=tr({ref:o,...l}),z={position:"relative",...a.trigger};return b(pe.div,{as:wt,className:_e("ui-resizable__trigger",e),__css:z,...i(),children:[n?r(pe.div,{className:"ui-resizable__trigger__icon",__css:{position:"absolute",top:"50%",left:"50%",transform:"auto",translateY:"-50%",translateX:"-50%",display:"flex",justifyContent:"center",alignItems:"center",...a.icon},...d(s),children:n}):null,t]})}),sn=e=>b(Dt,{viewBox:"0 0 23 39",w:"2",h:"4",...e,children:[r("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),r("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),r("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),r("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),r("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),r("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"})]}),Tr={title:"Components / Data Display / Resizable",component:E},Ie=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),xe=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),b(E,{variant:"spacer",h:"md",children:[r(u,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r(L,{}),r(u,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ce=()=>b(J,{children:[b(E,{variant:"spacer",colorScheme:"primary",h:"md",children:[r(u,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r(L,{}),r(u,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]}),b(E,{variant:"spacer",colorScheme:"red",h:"md",children:[r(u,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r(L,{}),r(u,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Se=()=>b(J,{children:[b(E,{direction:"horizontal",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]})]}),we=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,defaultSize:30,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),ye=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,minSize:30,maxSize:70,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),ve=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",keyboardStep:25,children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),Te=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,collapsedSize:5,collapsible:!0,defaultSize:15,minSize:15,maxSize:20,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,collapsedSize:10,collapsible:!0,defaultSize:25,minSize:25,maxSize:30,onCollapse:()=>{console.log("collapsed item")},onExpand:()=>{console.log("expand item")},children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]})]}),Pe=()=>{const e=N.useRef(null),n=N.useRef(null),t=N.useRef(null),s=N.useRef(null),l=N.useRef(null);return N.useEffect(()=>{console.log("Container ref",e),console.log("Group ref",n),console.log("Item ref",t),console.log("Item inner ref",s),console.log("Trigger ref",l)},[]),b(E,{ref:n,containerRef:e,h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,ref:t,innerRef:s,children:"One"}),r(L,{ref:l}),r(u,{as:h,children:"Two"})]})},Le=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{icon:r(sn,{})}),r(u,{as:h,children:"Two"})]}),b(E,{direction:"vertical",variant:"spacer",h:"md",children:[r(u,{as:h,rounded:"md",borderWidth:"1px",children:"One"}),r(L,{icon:r(sn,{})}),r(u,{as:h,rounded:"md",borderWidth:"1px",children:"Two"})]})]}),Ee=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{icon:r(Je,{icon:Xe})}),r(u,{as:h,children:"Two"})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{icon:r(Je,{icon:Xe})}),r(u,{as:h,children:"Two"})]})]}),We=()=>b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"Left"}),r(L,{}),r(u,{children:b(E,{direction:"vertical",children:[r(u,{as:h,children:"Top"}),r(L,{}),r(u,{as:h,children:"Bottom"})]})})]}),b(E,{direction:"vertical",h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"Top"}),r(L,{}),r(u,{children:b(E,{children:[r(u,{as:h,children:"Left"}),r(L,{}),r(u,{as:h,children:"Right"})]})})]})]}),ke=()=>b(J,{children:[b(E,{isDisabled:!0,h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"}),r(L,{}),r(u,{as:h,children:"Three"})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,children:"One"}),r(L,{isDisabled:!0}),r(u,{as:h,children:"Two"}),r(L,{}),r(u,{as:h,children:"Three"})]})]}),De=()=>b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,onResize:(e,n)=>{console.log("resized",e,n)},children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]}),Oe=()=>{const[e,n]=Ye(!0),[t,s]=Ye(!0);return b(J,{children:[b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",children:[r(u,{as:h,id:"one",children:"One"}),r(L,{}),r(u,{as:h,id:"two",children:"Two"})]}),b(st,{gap:"md",children:[b(ae,{onClick:n.toggle,children:[e?"Hidden":"Show"," Left"]}),b(ae,{onClick:s.toggle,children:[t?"Hidden":"Show"," Right"]})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"conditional",children:[e?b(J,{children:[r(u,{as:h,id:"left",minSize:10,order:1,children:"Left"}),r(L,{})]}):null,r(u,{as:h,id:"middle",minSize:10,order:2,children:"Middle"}),t?b(J,{children:[r(L,{}),r(u,{as:h,id:"right",minSize:10,order:3,children:"Right"})]}):null]})]})},Me=()=>{const e=N.useMemo(()=>({getItem:n=>{const t=document.cookie.match(new RegExp(`(^| )${n}=([^;]+)`));return t?t[2]:null},setItem:(n,t)=>{document.cookie=`${n}=${t}; max-age=31536000; path=/`}}),[]);return b(E,{h:"md",rounded:"md",borderWidth:"1px",storageKey:"persistence",storage:e,children:[r(u,{as:h,id:"one",children:"One"}),r(L,{}),r(u,{as:h,id:"two",children:"Two"})]})},Ae=()=>{const e=N.useRef(null);return b(J,{children:[b(st,{gap:"md",children:[r(ae,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.collapse()},children:'Collapse "one"'}),r(ae,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.expand()},children:'Expand "one"'}),r(ae,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(30)},children:'Resize "one" to 30'}),r(ae,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.resize(50)},children:'Resize "one" to 50'})]}),b(E,{h:"md",rounded:"md",borderWidth:"1px",children:[r(u,{as:h,controlRef:e,collapsible:!0,collapsedSize:15,minSize:30,maxSize:50,children:"One"}),r(L,{}),r(u,{as:h,children:"Two"})]})]})};var an,ln,cn;Ie.parameters={...Ie.parameters,docs:{...(an=Ie.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(cn=(ln=Ie.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var dn,un,mn;xe.parameters={...xe.parameters,docs:{...(dn=xe.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(mn=(un=xe.parameters)==null?void 0:un.docs)==null?void 0:mn.source}}};var pn,hn,fn;Ce.parameters={...Ce.parameters,docs:{...(pn=Ce.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(fn=(hn=Ce.parameters)==null?void 0:hn.docs)==null?void 0:fn.source}}};var zn,bn,gn;Se.parameters={...Se.parameters,docs:{...(zn=Se.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(gn=(bn=Se.parameters)==null?void 0:bn.docs)==null?void 0:gn.source}}};var Rn,In,xn;we.parameters={...we.parameters,docs:{...(Rn=we.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} defaultSize={30}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(xn=(In=we.parameters)==null?void 0:In.docs)==null?void 0:xn.source}}};var Cn,Sn,wn;ye.parameters={...ye.parameters,docs:{...(Cn=ye.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} minSize={30} maxSize={70}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(wn=(Sn=ye.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var yn,vn,Tn;ve.parameters={...ve.parameters,docs:{...(yn=ve.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px" keyboardStep={25}>
      <ResizableItem as={Center}>One</ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Tn=(vn=ve.parameters)==null?void 0:vn.docs)==null?void 0:Tn.source}}};var Pn,Ln,En;Te.parameters={...Te.parameters,docs:{...(Pn=Te.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
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
}`,...(En=(Ln=Te.parameters)==null?void 0:Ln.docs)==null?void 0:En.source}}};var Wn,kn,Dn;Pe.parameters={...Pe.parameters,docs:{...(Wn=Pe.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(kn=Pe.parameters)==null?void 0:kn.docs)==null?void 0:Dn.source}}};var On,Mn,An;Le.parameters={...Le.parameters,docs:{...(On=Le.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(An=(Mn=Le.parameters)==null?void 0:Mn.docs)==null?void 0:An.source}}};var Nn,Bn,Hn;Ee.parameters={...Ee.parameters,docs:{...(Nn=Ee.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(Bn=Ee.parameters)==null?void 0:Bn.docs)==null?void 0:Hn.source}}};var Gn,_n,$n;We.parameters={...We.parameters,docs:{...(Gn=We.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
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
}`,...($n=(_n=We.parameters)==null?void 0:_n.docs)==null?void 0:$n.source}}};var Kn,Fn,Un;ke.parameters={...ke.parameters,docs:{...(Kn=ke.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Un=(Fn=ke.parameters)==null?void 0:Fn.docs)==null?void 0:Un.source}}};var jn,qn,Vn;De.parameters={...De.parameters,docs:{...(jn=De.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <Resizable h="md" rounded="md" borderWidth="1px">
      <ResizableItem as={Center} onResize={(size, prevSize) => {
      console.log("resized", size, prevSize);
    }}>
        One
      </ResizableItem>

      <ResizableTrigger />

      <ResizableItem as={Center}>Two</ResizableItem>
    </Resizable>;
}`,...(Vn=(qn=De.parameters)==null?void 0:qn.docs)==null?void 0:Vn.source}}};var Zn,Jn,Xn;Oe.parameters={...Oe.parameters,docs:{...(Zn=Oe.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Jn=Oe.parameters)==null?void 0:Jn.docs)==null?void 0:Xn.source}}};var Yn,Qn,et;Me.parameters={...Me.parameters,docs:{...(Yn=Me.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(et=(Qn=Me.parameters)==null?void 0:Qn.docs)==null?void 0:et.source}}};var nt,tt,rt;Ae.parameters={...Ae.parameters,docs:{...(nt=Ae.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(rt=(tt=Ae.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};const Pr=["basic","withVariant","withColorScheme","withDirection","withDefaultSize","withMinMaxSize","withKeyboardStep","withCollapsible","withRefs","withIcon","customIcon","nestedResizable","isDisabled","useOnResize","useLocaleStorage","useCookieStorage","customControls"];export{Pr as __namedExportsOrder,Ie as basic,Ae as customControls,Ee as customIcon,Tr as default,ke as isDisabled,We as nestedResizable,Me as useCookieStorage,Oe as useLocaleStorage,De as useOnResize,Te as withCollapsible,Ce as withColorScheme,we as withDefaultSize,Se as withDirection,Le as withIcon,ve as withKeyboardStep,ye as withMinMaxSize,Pe as withRefs,xe as withVariant};
