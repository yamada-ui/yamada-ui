import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Dn as n,Kt as r,Tn as i,Ut as a,i as o,lt as s,o as c,st as l,tn as u}from"./props-BMk_kdQM.js";import{t as d}from"./jsx-runtime-BB9-612F.js";import{E as f,T as p,d as m,f as h}from"./utils-DSv0gVii.js";import{d as g,i as _,n as v,r as y}from"./create-component-BDXZtL2-.js";import{n as b,t as x}from"./grip-vertical-icon-CNdRVF11.js";import{n as S,t as ee}from"./use-value-C31Up2dU.js";import{r as C,t as w}from"./button-CmOvQp3A.js";import{n as T,t as E}from"./wrap-DnActldc.js";import{n as D,t as te}from"./use-local-storage-dDM_INWg.js";import{n as O,t as k}from"./props-table-B7IDbuyO.js";var ne;function re(){return(re=e((()=>{g(),ne=_({base:{icon:{alignItems:`center`,display:`flex`,justifyContent:`center`,left:`50%`,position:`absolute`,top:`50%`,translateX:`-50%`,translateY:`-50%`},item:{boxSize:`full`},root:{boxSize:`full`},trigger:{position:`relative`,transitionDuration:`moderate`,transitionProperty:`common`,_after:{transitionDuration:`moderate`,transitionProperty:`common`}}},variants:{border:{icon:{bg:`colorScheme.muted`,color:`colorScheme.fg`,py:`1`,rounded:`l1`},trigger:{bg:`colorScheme.muted`,focusVisibleRing:`none`,_after:{position:`absolute`},_hover:{bg:`colorScheme.emphasized`},_focusVisible:{bg:`colorScheme.emphasized`}}},plain:{trigger:{focusVisibleRing:`none`,_after:{position:`absolute`}}},spacer:{icon:{color:`colorScheme.fg`,transitionDuration:`moderate`,transitionProperty:`common`},trigger:{focusVisibleRing:`none`,p:`1`,_after:{bg:`transparent`,display:`block`,rounded:`full`},_hover:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}},_focusVisible:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}}}}},props:{orientation:{horizontal:{icon:{transform:`translate(-50%, -50%) rotate(0deg)`}},vertical:{icon:{transform:`translate(-50%, -50%) rotate(90deg)`}}}},compounds:[{css:{trigger:{h:`px`,_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`border`,orientation:`vertical`},{css:{trigger:{w:`px`,_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`border`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,w:`full`}}},variant:`spacer`,orientation:`vertical`},{css:{trigger:{_after:{h:`full`,w:`2`}}},variant:`spacer`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`plain`,orientation:`vertical`},{css:{trigger:{_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`plain`,orientation:`horizontal`}],defaultProps:{variant:`border`,orientation:`horizontal`}})})))()}function ie(e){return(typeof e==`number`||typeof e==`string`)&&e!==``}function ae(e){let t=(0,W.useId)();return ie(e)?`${e}`:t}function oe(e){let t=(0,W.useRef)(e);return G(()=>{t.current=e},[e]),(0,W.useCallback)((...e)=>t.current?.(...e),[t])}function se(...e){return oe(t=>{e.forEach(e=>{if(e)switch(typeof e){case`function`:e(t);break;case`object`:e.current=t}})})}function ce(e,t){let n=e?.[`data-testid`];return ie(n)?`${n}`:ie(t)?`${t}`:void 0}function A(e,t=`Assertion error`){if(!e)throw Error(t)}function le(){return un===void 0&&(un=typeof matchMedia==`function`&&!!matchMedia(`(pointer:coarse)`).matches),un}function ue({expandHitTargets:e,axis:t,rect:n}){let r=e?le()?t.resizeTargetMinimumSize.coarse:t.resizeTargetMinimumSize.fine:0;if(n.width<r){let e=r-n.width;n=new DOMRect(n.x-e/2,n.y,n.width+e,n.height)}if(n.height<r){let e=r-n.height;n=new DOMRect(n.x,n.y-e/2,n.width,n.height+e)}return n}function de(e){switch(typeof e){case`number`:return[e,`px`];case`string`:{let t=parseFloat(e);return e.endsWith(`%`)?[t,`%`]:e.endsWith(`px`)?[t,`px`]:e.endsWith(`rem`)?[t,`rem`]:e.endsWith(`em`)?[t,`em`]:e.endsWith(`vh`)?[t,`vh`]:e.endsWith(`vw`)?[t,`vw`]:[t,`%`]}}}function fe(e){let t=e=>{e.preventDefault(),e.stopPropagation(),n()},n=()=>{e.removeEventListener(`click`,t,!0)};e.addEventListener(`click`,t,!0),setTimeout(n,0)}function j(){return K}function pe(e){return fn.addListener(`change`,e)}function me(e,t=[],n,r=!1){let i=K,a={...K};a.cursorFlags=e,a.state===`active`&&(a.didPointerMove||=r,a.previews=t,n&&(a.previewLayoutMap=n)),K=a,fn.emit(`change`,{prev:i,next:a})}function M(e){let t=K;K=e,t.state===`active`&&e.state!==`active`&&t.didPointerMove&&(t.hitRegions.forEach(({separator:e})=>{e&&e.element.ownerDocument.activeElement===e.element&&e.element.blur()}),fe(t.ownerDocument)),fn.emit(`change`,{prev:t,next:e})}function he(e){K.state!==`active`||!K.previews.some(t=>t.separator===e)||M({...K,previews:K.previews.map(t=>t.separator===e?{...t}:t)})}function ge(e){if(K.state===`inactive`)return;let t=K.hitRegions.filter(t=>t.axis!==e),n=K.state===`active`&&K.previews.some(t=>t.axis===e);if(t.length!==K.hitRegions.length||n){if(t.length===0)M({cursorFlags:0,state:`inactive`});else if(K.state===`active`){let n=new Map(K.initialLayoutMap),r=new Map(K.previewLayoutMap);n.delete(e),r.delete(e),M({...K,cursorFlags:0,hitRegions:t,initialLayoutMap:n,previewLayoutMap:r,previews:K.previews.filter(t=>t.axis!==e)})}else M({...K,hitRegions:t})}}function _e(){return xn===void 0&&(xn=!1,typeof window<`u`&&(window.navigator.userAgent.includes(`Chrome`)||window.navigator.userAgent.includes(`Firefox`))&&(xn=!0)),xn}function ve({cursorFlags:e,axes:t,state:n}){let r=0,i=0;switch(n){case`active`:case`hover`:t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case`horizontal`:r++;break;case`vertical`:i++}})}if(r!==0||i!==0){if(n===`active`&&e&&_e()){let t=(e&hn)!==0,n=(e&gn)!==0,r=(e&_n)!==0,i=(e&vn)!==0;if(t)return r?`se-resize`:i?`ne-resize`:`e-resize`;if(n)return r?`sw-resize`:i?`nw-resize`:`w-resize`;if(r)return`s-resize`;if(i)return`n-resize`}return _e()?r>0&&i>0?`move`:r>0?`ew-resize`:`ns-resize`:r>0&&i>0?`grab`:r>0?`col-resize`:`row-resize`}}function ye(e){if(!e.defaultView||!e.adoptedStyleSheets)return;let{prevStyle:t,styleSheet:n}=Sn.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(n):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]));let r=j();switch(r.state!==`inactive`&&r.ownerDocument!==e&&(r={cursorFlags:0,state:`inactive`}),r.state){case`active`:case`hover`:{let e=ve({cursorFlags:r.cursorFlags,axes:r.hitRegions.map(e=>e.axis),state:r.state}),i=`*, *:hover {cursor: ${e} !important; }`;if(t===i)return;t=i,e?n.cssRules.length===0?n.insertRule(i):n.replaceSync(i):n.cssRules.length===1&&n.deleteRule(0);break}case`inactive`:t=void 0,n.cssRules.length===1&&n.deleteRule(0)}Sn.set(e,{prevStyle:t,styleSheet:n})}function be(e){return e.state===`inactive`?void 0:e.ownerDocument}function xe({next:e,prev:t}){let n=be(t),r=be(e);n&&n!==r&&ye(n),r&&ye(r)}function Se({axis:e}){let{layoutStrategy:t,orientation:n,items:r}=e;return t?t.calculateAvailableSize():r.reduce((e,t)=>(e+=n===`horizontal`?t.element.offsetWidth:t.element.offsetHeight,e),0)}function Ce(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_DISCONNECTED?0:n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function we(e,t){return Array.from(t).sort((t,n)=>{let r=e===`horizontal`?Te(t,n):Ee(t,n);return r===0?Ce(t.element,n.element):r})}function Te(e,t){let n=e.element.offsetLeft-t.element.offsetLeft;return n===0?e.element.offsetWidth-t.element.offsetWidth:n}function Ee(e,t){let n=e.element.offsetTop-t.element.offsetTop;return n===0?e.element.offsetHeight-t.element.offsetHeight:n}function De(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE}function Oe(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function ke({orientation:e,rects:t,targetRect:n}){let r={x:n.x+n.width/2,y:n.y+n.height/2},i,a=Number.MAX_VALUE;for(let n of t){let{x:t,y:o}=Oe(r,n),s=e===`horizontal`?t:o;s<a&&(a=s,i=n)}return A(i,`No rect found`),i}function Ae({expandHitTargets:e=!0,axis:t,includeDisabled:n=!1}){if(t.layoutStrategy)return t.layoutStrategy.calculateHitRegions({expandHitTargets:e,axis:t,includeDisabled:n});let{element:r,orientation:i,items:a,separators:o}=t,s=we(i,Array.from(r.children).filter(De).filter(e=>!e.hasAttribute(`data-resize-preview`)).map(e=>({element:e}))).map(({element:e})=>e),c=[],l=!1,u=!1,d=-1,f,p=-1,m=0,h,g=[];{let e=-1;for(let t of s)t.hasAttribute(`data-panel`)&&(e++,t.hasAttribute(`data-disabled`)||(m++,d===-1&&(d=e),p=e))}if(n||m>1){let r=-1;for(let m of s)if(m.hasAttribute(`data-panel`)){r++;let o=a.find(e=>e.element===m);if(o){if(h){let a=h.element.getBoundingClientRect(),s=m.getBoundingClientRect(),_;if(u){let e=i===`horizontal`?new DOMRect(a.right,a.top,0,a.height):new DOMRect(a.left,a.bottom,a.width,0),t=i===`horizontal`?new DOMRect(s.left,s.top,0,s.height):new DOMRect(s.left,s.top,s.width,0);switch(g.length){case 0:_=[e,t];break;case 1:{let n=g[0];_=[n,ke({orientation:i,rects:[a,s],targetRect:n.element.getBoundingClientRect()})===a?t:e];break}default:_=g}}else _=g.length?g:[i===`horizontal`?new DOMRect(a.right,s.top,s.left-a.right,s.height):new DOMRect(s.left,a.bottom,s.width,s.top-a.bottom)];for(let i of _){let a=ue({expandHitTargets:e,axis:t,rect:`width`in i?i:i.element.getBoundingClientRect()});(n||!l&&!(r<=d||r>p))&&(f??=Se({axis:t}),c.push({axis:t,axisSize:f,items:[h,o],separator:`width`in i?void 0:i,rect:a})),l=!1}}u=!1,h=o,g=[]}}else if(m.hasAttribute(`data-separator`)){m.ariaDisabled!==null&&(l=!0);let e=o.find(e=>e.element===m);e?g.push(e):(h=void 0,g=[])}else u=!0}return c}function je(e,t){let n=getComputedStyle(e);return t*parseFloat(n.fontSize)}function Me(e,t){let n=getComputedStyle(e.ownerDocument.documentElement);return t*parseFloat(n.fontSize)}function Ne(e){return e/100*window.innerHeight}function Pe(e){return e/100*window.innerWidth}function Fe({axisSize:e,itemElement:t,styleProp:n}){let r,[i,a]=de(n);switch(a){case`%`:r=i/100*e;break;case`px`:r=i;break;case`rem`:r=Me(t,i);break;case`em`:r=je(t,i);break;case`vh`:r=Ne(i);break;case`vw`:r=Pe(i)}return r}function N(e){return parseFloat(e.toFixed(3))}function Ie(e,t=Se({axis:e})){let{items:n}=e;return t===0?n.map(e=>({groupResizeBehavior:e.constraintProps.groupResizeBehavior,collapsedSize:0,collapsible:e.constraintProps.collapsible===!0,defaultSize:void 0,disabled:e.constraintProps.disabled,minSize:0,maxSize:100,itemId:e.id})):n.map(e=>{let{element:n,constraintProps:r}=e,i=0;r.collapsedSize!==void 0&&(i=N(Fe({axisSize:t,itemElement:n,styleProp:r.collapsedSize})/t*100));let a;r.collapsedThreshold!==void 0&&(a=N(Fe({axisSize:t,itemElement:n,styleProp:r.collapsedThreshold})/t*100));let o;r.defaultSize!==void 0&&(o=N(Fe({axisSize:t,itemElement:n,styleProp:r.defaultSize})/t*100));let s=0;r.minSize!==void 0&&(s=N(Fe({axisSize:t,itemElement:n,styleProp:r.minSize})/t*100));let c=100;return r.maxSize!==void 0&&(c=N(Fe({axisSize:t,itemElement:n,styleProp:r.maxSize})/t*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:i,collapsedThreshold:a,collapsible:r.collapsible===!0,defaultSize:o,disabled:r.disabled,minSize:s,maxSize:c,itemId:e.id}})}function Le(){wn++}function Re(){for(let e=0;e<Tn.length;e++)try{Cn.emit(`axisChange`,Tn[e])}catch(e){En??={error:e}}Tn.length=0}function ze(){if(wn===1&&Re(),wn--,wn===0&&En){let{error:e}=En;throw En=void 0,e}}function Be(e){q=new Map(q),q.delete(e)}function Ve(e,t){for(let[t]of q)if(t.id===e)return t}function P(e,t){for(let[t,n]of q)if(t.id===e)return n;if(t)throw Error(`Could not find data for Group with id ${e}`)}function F(){return q}function He(e,t){return Cn.addListener(`axisChange`,n=>{n.axis.id===e&&t(n)})}function I(e,t,n){let r=q.get(e);q=new Map(q),q.set(e,t);let i={axis:e,isUserInteraction:n?.isUserInteraction===!0,prev:r,next:t};wn>0?Tn.push(i):Cn.emit(`axisChange`,i)}function Ue(e,{pointerId:t,pointerType:n}){return t===e.pointerId||n===`pen`&&e.pointerType===`pen`}function We(e,t,n={}){return e.ownerDocument===t&&(n.pointerId===void 0||Ue(e,n))}function Ge(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function L(e,t,n=0){return Math.abs(N(e)-N(t))<=n}function R(e,t){return L(e,t)?0:e>t?1:-1}function z({overrideDisabledItems:e,itemConstraints:t,prevSize:n,size:r}){let{collapsedSize:i=0,collapsedThreshold:a,collapsible:o,disabled:s,maxSize:c=100,minSize:l=0}=t;if(s&&!e)return n;if(R(r,l)<0){if(o){let e=a??(l-i)/2,t=R(n,i)<=0,o=t?i+e:l-e,s=R(r,o);r=R(r,i)<=0||s<0||a!==void 0&&t&&s===0?i:l}else r=l}return r=Math.min(c,r),r=N(r),r}function Ke({delta:e,initialLayout:t,itemConstraints:n,pivotIndices:r,prevLayout:i,trigger:a}){if(L(e,0))return t;let o=a===`imperative-api`,s=n.map(({itemId:e})=>t[e]),c=n.map(({itemId:e})=>i[e]),l=[...s],[u,d]=r;A(u!=null,`Invalid first pivot index`),A(d!=null,`Invalid second pivot index`);let f=0;switch(a){case`keyboard`:{let t=e<0?d:u,r=n[t];A(r,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(A(n!=null,`Previous layout not found for panel index ${t}`),L(n,i)){let t=o-n;R(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:d,r=n[t];A(r,`No panel constraints found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(A(n!=null,`Previous layout not found for panel index ${t}`),L(n,o)){let t=n-i;R(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}break;default:{let t=e<0?d:u,r=n[t];A(r,`Panel constraints not found for index ${t}`);let i=s[t],{collapsedSize:a,collapsedThreshold:o,collapsible:c,minSize:l}=r;if(c&&R(i,l)<0){let t=l-a,n=o??t/2;if(R(i+Math.abs(e),l)<0){let r=R(Math.abs(e),n);e=r>0||r===0&&o===void 0&&e<0?e<0?-t:t:0}}break}}{let t=e<0?1:-1,r=e<0?d:u,i=0;for(;;){let e=s[r];A(e!=null,`Previous layout not found for panel index ${r}`);let a=z({overrideDisabledItems:o,itemConstraints:n[r],prevSize:e,size:100})-e;if(i+=a,r+=t,r<0||r>=n.length)break}let a=Math.min(Math.abs(e),Math.abs(i));e=e<0?0-a:a}{let t=e<0?u:d;for(;t>=0&&t<n.length;){let r=Math.abs(e)-Math.abs(f),i=s[t];A(i!=null,`Previous layout not found for panel index ${t}`);let a=i-r,c=z({overrideDisabledItems:o,itemConstraints:n[t],prevSize:i,size:a});if(!L(i,c)&&(f+=i-c,l[t]=c,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(Ge(c,l))return i;{let t=e<0?d:u,r=s[t];A(r!=null,`Previous layout not found for panel index ${t}`);let i=r+f,a=z({overrideDisabledItems:o,itemConstraints:n[t],prevSize:r,size:i});if(l[t]=a,!L(a,i)){let t=i-a,r=e<0?d:u;for(;r>=0&&r<n.length;){let i=l[r];A(i!=null,`Previous layout not found for panel index ${r}`);let a=i+t,s=z({overrideDisabledItems:o,itemConstraints:n[r],prevSize:i,size:a});if(L(i,s)||(t-=s-i,l[r]=s),L(t,0))break;e>0?r--:r++}}}return L(Object.values(l).reduce((e,t)=>t+e,0),100,.1)?l.reduce((e,t,r)=>(e[n[r].itemId]=t,e),{}):i}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(t[n]===void 0||R(e[n],t[n])!==0)return!1;return!0}function qe(e){Le();try{Je(e)}finally{ze()}}function Je({commit:e,event:t,hitRegions:n,initialLayoutMap:r,mountedAxes:i,pointerDownAtPoint:a,prevCursorFlags:o}){let s=0,c=j(),l=c.state===`active`?c.previews:[],u=new Map(c.state===`active`?c.previewLayoutMap:void 0);n.forEach(n=>{let{axis:o,axisSize:c}=n,{orientation:d,items:f}=o;if(e&&o.resizePreviewMode!==`separator`)return;let{disableCursor:p}=o.mutableState,m=0;m=a?d===`horizontal`?(t.clientX-a.x)/c*100:(t.clientY-a.y)/c*100:d===`horizontal`?t.clientX<0?-100:100:t.clientY<0?-100:100;let h=r.get(o),g=i.get(o);if(!h||!g)return;let{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:b,separatorToItems:x}=g;if(v&&b&&x){let t=o.resizePreviewMode===`separator`?u.get(o)??b:b,r=Ke({delta:m,initialLayout:h,itemConstraints:v,pivotIndices:n.items.map(e=>f.indexOf(e)),prevLayout:t,trigger:`mouse-or-touch`});if(o.resizePreviewMode===`separator`&&!e&&!B(r,t)){u.set(o,r);let e=0,t=f.map(t=>(e+=r[t.id]-h[t.id],c/100*e));l=l.map(e=>{if(e.axis!==o)return e;let n=t[e.itemIndex];return n===e.offset?e:{...e,offset:n}})}if(B(r,t)&&m!==0&&!p)switch(d){case`horizontal`:s|=m<0?hn:gn;break;case`vertical`:s|=m<0?_n:vn}(o.resizePreviewMode!==`separator`||e)&&!B(r,b)&&I(n.axis,{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:r,requestedAxisSize:y,requestedLayout:r,separatorToItems:x})}});let d=0;t.movementX===0?d|=o&yn:d|=s&yn,t.movementY===0?d|=o&bn:d|=s&bn;let f=c.state===`active`&&(t.clientX!==c.pointerDownAtPoint.x||t.clientY!==c.pointerDownAtPoint.y);me(d,l,u,f)}function Ye(e,t){let n=j();if(n.state!==`active`||!We(n,e,t))return;let r=F();Le();try{qe({commit:!0,event:t,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags}),Re(),M({cursorFlags:0,state:`inactive`}),n.hitRegions.length>0&&(t.preventDefault?.(),n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=P(e.axis.id,!0);I(e.axis,t,{isUserInteraction:!0})}))}finally{ze()}}function Xe(e){if(e.defaultPrevented)return;let{clientX:t,clientY:n,movementX:r,movementY:i}=e;Ye(e.currentTarget,{clientX:t,clientY:n,movementX:r,movementY:i})}function Ze(e,t,n){let r,i={x:1/0,y:1/0};for(let a of t){let t=Oe(n,a.rect);switch(e){case`horizontal`:(t.x<i.x||t.x===i.x&&t.y<=i.y)&&(r=a,i=t);break;case`vertical`:(t.y<i.y||t.y===i.y&&t.x<=i.x)&&(r=a,i=t)}}return r?{distance:i,hitRegion:r}:void 0}function Qe(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function $e(e,t){if(e===t)throw Error(`Cannot compare node with itself`);let n={a:it(e),b:it(t)},r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();A(r,`Stacking order can only be calculated for elements with a common ancestor`);let i={a:rt(nt(n.a)),b:rt(nt(n.b))};if(i.a===i.b){let e=r.childNodes,t={a:n.a.at(-1),b:n.b.at(-1)},i=e.length;for(;i--;){let n=e[i];if(n===t.a)return 1;if(n===t.b)return-1}}return Math.sign(i.a-i.b)}function et(e){let t=getComputedStyle(at(e)??e).display;return t===`flex`||t===`inline-flex`}function tt(e){let t=getComputedStyle(e);return!!(t.position===`fixed`||t.zIndex!==`auto`&&(t.position!==`static`||et(e))||+t.opacity<1||`transform`in t&&t.transform!==`none`||`webkitTransform`in t&&t.webkitTransform!==`none`||`mixBlendMode`in t&&t.mixBlendMode!==`normal`||`filter`in t&&t.filter!==`none`||`webkitFilter`in t&&t.webkitFilter!==`none`||`isolation`in t&&t.isolation===`isolate`||Dn.test(t.willChange)||t.webkitOverflowScrolling===`touch`)}function nt(e){let t=e.length;for(;t--;){let n=e[t];if(A(n,`Missing node`),tt(n))return n}return null}function rt(e){return e&&Number(getComputedStyle(e).zIndex)||0}function it(e){let t=[];for(;e;)t.push(e),e=at(e);return t}function at(e){let{parentNode:t}=e;return Qe(t)?t.host:t}function ot(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function st(e){try{return e.matches(`:modal`)}catch{return!1}}function ct({axisElement:e,hitRegion:t,pointerEventTarget:n}){if(De(n)){let t=n.closest(`dialog`);if(t&&!t.contains(e)&&st(t))return!1}if(!De(n)||n.contains(e)||e.contains(n)||!n.isConnected||!e.isConnected)return!0;if($e(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(ot(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function lt(e,t,n){let r=[];return t.forEach((t,i)=>{if(i.disabled||i.element.ownerDocument!==n)return;let a=Ae({axis:i}),o=Ze(i.orientation,a,{x:e.clientX,y:e.clientY});o&&o.distance.x<=0&&o.distance.y<=0&&ct({axisElement:i.element,hitRegion:o.hitRegion.rect,pointerEventTarget:e.target})&&r.push(o.hitRegion)}),r}function ut(e){let t=0,n=0,r={};for(let i of e)if(i.defaultSize!==void 0){t++;let e=N(i.defaultSize);n+=e,r[i.itemId]=e}else r[i.itemId]=void 0;let i=e.length-t;if(i!==0){let t=N((100-n)/i);for(let n of e)n.defaultSize===void 0&&(r[n.itemId]=t)}return r}function dt(e,t){let n=e.map(e=>e.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(let e of n)if(!r.includes(e))return!1;return!0}function ft({axis:e,itemConstraints:t}){let n=e.items.map(({id:e})=>e).join(`,`),r=e.mutableState.defaultLayout;return e.mutableState.layouts[n]??(r&&dt(e.items,r)?r:ut(t))}function pt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function mt(e,t){return e.length===t.length&&e.every((e,n)=>pt(e,t[n]))}function V({layout:e,itemConstraints:t}){let n=t.map(({itemId:t})=>e[t]),r=[...n],i=r.reduce((e,t)=>e+t,0);if(Object.keys(e).length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${Object.values(e).map(e=>`${e}%`).join(`, `)}`);if(!L(i,100)&&r.length>0)for(let e=0;e<t.length;e++){let t=r[e];A(t!=null,`No layout data found for index ${e}`);let n=100/i*t;r[e]=n}let a=0;for(let e=0;e<t.length;e++){let i=n[e];A(i!=null,`No layout data found for index ${e}`);let o=r[e];A(o!=null,`No layout data found for index ${e}`);let s=z({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:i,size:o});o!=s&&(a+=o-s,r[e]=s)}if(!L(a,0))for(let e=0;e<t.length;e++){let n=r[e];A(n!=null,`No layout data found for index ${e}`);let i=n+a,o=z({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:n,size:i});if(n!==o&&(a-=o-n,r[e]=o,L(a,0)))break}return r.reduce((e,n,r)=>(e[t[r].itemId]=n,e),{})}function ht({itemIds:e,layout:t}){return V({layout:t,itemConstraints:e.map(e=>({collapsedSize:0,collapsible:!1,defaultSize:void 0,disabled:void 0,itemId:e,maxSize:100,minSize:0}))})}function gt({axis:e,nextAxisSize:t,prevAxisSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,a=0,o=!1,s=new Map,c=[];for(let l of e.items){let e=r[l.id]??0;switch(l.constraintProps.groupResizeBehavior){case`preserve-pixel-size`:{o=!0;let r=N(e/100*n/t*100);s.set(l.id,r),i+=r;break}default:c.push(l.id),a+=e}}if(!o||c.length===0)return r;let l=100-i,u={...r};if(s.forEach((e,t)=>{u[t]=e}),a>0)for(let e of c)u[e]=N((r[e]??0)/a*l);else{let e=N(l/c.length);for(let t of c)u[t]=e}return u}function _t({axis:e,axisState:t}){let n=Se({axis:e});if(n===0)return;let r=Ie(e,n),i=t.requestedAxisSize,a=t.requestedLayout;t.defaultLayoutDeferred&&(i=n,a=ht({itemIds:e.items.map(({id:e})=>e),layout:ft({axis:e,itemConstraints:r})}));let o=V({layout:gt({axis:e,nextAxisSize:n,prevAxisSize:i,prevLayout:a}),itemConstraints:r});return{changed:t.defaultLayoutDeferred||!B(t.layout,o)||!mt(t.derivedItemConstraints,r)||t.axisSize!==n,state:{defaultLayoutDeferred:!1,derivedItemConstraints:r,axisSize:n,layout:o,requestedAxisSize:i,requestedLayout:a,separatorToItems:t.separatorToItems}}}function vt({axisId:e,itemId:t}){let n=()=>{let t=F();for(let[n,r]of t)if(n.id===e)return{axis:n,...r};throw Error(`Group ${e} not found`)},r=()=>{let e=n().derivedItemConstraints.find(e=>e.itemId===t);if(e!==void 0)return e;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{let{axis:e,...r}=n(),i=_t({axis:e,axisState:r}),a=i?.state??r,o=a.derivedItemConstraints.find(e=>e.itemId===t);if(o===void 0)throw Error(`Panel constraints not found for Panel ${t}`);let s=a.layout[t];if(s===void 0)throw Error(`Layout not found for Panel ${t}`);return{axis:e,changed:i?.changed===!0,itemConstraints:o,itemSize:s,state:a}},a=()=>{let e=n().axis.items.find(e=>e.id===t);if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},o=()=>{let e=n().layout[t];if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},s=({allowPartialSize:e=!1,nextSize:n,items:r,prevLayout:i,derivedItemConstraints:a})=>{let o=i[t],s=r.findIndex(e=>e.id===t),c=s===0,l=s===r.length-1;if(l&&n<o&&(c||r.slice(0,s).every((e,t)=>{let n=a[t];return n?.collapsible&&L(n.collapsedSize,i[n.itemId])}))){let e=r.slice(0,s).reduce((e,t)=>e+i[t.id],0);return{...i,[t]:N(100-e)}}let u=a[s],d=z({overrideDisabledItems:!0,itemConstraints:u,prevSize:o,size:n}),f={...i},p=d-o;for(let e of c?[1]:l?[-1]:[1,-1])for(let t=s+e;t>=0&&t<r.length&&!L(p,0);t+=e){let e=a[t],n=f[e.itemId];if(yt(e,f)||(p>0?R(n,e.minSize)<=0:R(n,e.maxSize)>=0))continue;let r=p>0?Math.max(e.minSize,n-p):Math.min(e.maxSize,n-p);p-=n-r,f[e.itemId]=N(r)}if(f[t]=N(d-p),L(p,0)||e&&R(f[t],u.minSize)>=0)return f;let m=(e,t,n)=>{let i=e===`after`?1:-1,o=e=>{for(let n=s+i;n>=0&&n<r.length;n+=i){let r=a[n];if(!yt(r,t)&&e(r))return n}},c=o(({itemId:e,maxSize:r,minSize:i})=>n>0?R(t[e],i)>0:R(t[e],r)<0)??o(()=>!0)??s+i;return Ke({delta:e===`after`?n:-n,initialLayout:t,itemConstraints:a,pivotIndices:e===`after`?[s,c]:[c,s],prevLayout:t,trigger:`imperative-api`})};if(c||l)return m(l?`before`:`after`,i,n-o);let h=e=>{let r=m(e,i,n-o),a=n-r[t];return L(a,0)?r:m(e===`after`?`before`:`after`,r,a)},g=h(`after`);if(bt({itemConstraints:a,itemId:t,nextLayout:g,prevLayout:i})){let e=h(`before`);if(!bt({itemConstraints:a,itemId:t,nextLayout:e,prevLayout:i}))return e}return g},c=(e,{axis:t,changed:n,itemSize:r,state:i},{allowPartialSize:a=!1}={})=>{if(e===r)return;let{derivedItemConstraints:o,axisSize:c,layout:l}=i,u=V({layout:s({allowPartialSize:a,nextSize:e,items:t.items,prevLayout:l,derivedItemConstraints:o}),itemConstraints:o});(n||!B(l,u))&&I(t,{...i,layout:u,requestedAxisSize:c,requestedLayout:u})};return{collapse:()=>{let e=i(),{collapsible:t,collapsedSize:n}=e.itemConstraints,{mutableValues:r}=a(),o=e.itemSize;t&&o!==n&&(r.expandToSize=o,c(n,e))},expand:()=>{let e=i(),{collapsible:t,collapsedSize:n,minSize:r}=e.itemConstraints,{mutableValues:o}=a(),s=e.itemSize;if(t&&s===n){let t=o.expandToSize??r;t===0&&(t=1),c(t,e,{allowPartialSize:!0})}},getSize:()=>{let{axis:e}=n(),r=o(),{element:i}=a();return{asPercentage:r,inPixels:e.layoutStrategy?e.layoutStrategy.getItemSizeInPixels(t):e.orientation===`horizontal`?i.offsetWidth:i.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=r(),n=o();return e&&L(t,n)},resize:e=>{let t=i(),{axisSize:n}=t.state,{element:r}=a(),o=N(Fe({axisSize:n,itemElement:r,styleProp:e})/n*100);c(o,t)}}}function yt({collapsedSize:e,collapsible:t,itemId:n},r){return t&&L(r[n],e)}function bt({itemConstraints:e,itemId:t,nextLayout:n,prevLayout:r}){return e.some(e=>e.itemId!==t&&yt(e,r)!==yt(e,n))}function xt(e){e.defaultPrevented||lt(e,F(),e.currentTarget).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let n=t.items.find(e=>e.constraintProps.defaultSize!==void 0);if(n){let r=n.constraintProps.defaultSize,i=vt({axisId:t.axis.id,itemId:n.id});i&&r!==void 0&&(i.resize(r),e.preventDefault())}}})}function St(e){let t=F();for(let[n]of t)if(n.separators.some(t=>t.element===e))return n;throw Error(`Could not find parent Group for separator element`)}function Ct({axisId:e}){let t=()=>{let t=F();for(let[n,r]of t)if(n.id===e)return{axis:n,...r};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:n}=t();return e?{}:n},setLayout(e){let{axis:n,...r}=t(),i=_t({axis:n,axisState:r}),a=i?.state??r,{defaultLayoutDeferred:o,derivedItemConstraints:s,axisSize:c,layout:l}=a,u=V({layout:e,itemConstraints:s});return o?l:((i?.changed||!B(l,u))&&I(n,{...a,layout:u,requestedAxisSize:c,requestedLayout:u}),u)}}}function H(e,t){let n=St(e),r=P(n.id,!0),i=n.separators.find(t=>t.element===e);A(i,`Matching separator not found`);let a=r.separatorToItems.get(i);A(a,`Matching panels not found`);let o=a.map(e=>n.items.indexOf(e)),s=Ct({axisId:n.id}).getLayout(),c=V({layout:Ke({delta:t,initialLayout:s,itemConstraints:r.derivedItemConstraints,pivotIndices:o,prevLayout:s,trigger:`keyboard`}),itemConstraints:r.derivedItemConstraints});B(s,c)||I(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedItemConstraints:r.derivedItemConstraints,axisSize:r.axisSize,layout:c,requestedAxisSize:r.axisSize,requestedLayout:c,separatorToItems:r.separatorToItems},{isUserInteraction:!0})}function wt(e){return e.separators.filter(e=>!e.disabled)}function Tt(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=St(t);if(!(n.disabled||n.separators.find(e=>e.element===t)?.disabled))switch(e.key){case`ArrowDown`:e.preventDefault(),n.orientation===`vertical`&&H(t,5);break;case`ArrowLeft`:e.preventDefault(),n.orientation===`horizontal`&&H(t,-5);break;case`ArrowRight`:e.preventDefault(),n.orientation===`horizontal`&&H(t,5);break;case`ArrowUp`:e.preventDefault(),n.orientation===`vertical`&&H(t,-5);break;case`End`:e.preventDefault(),H(t,100);break;case`Enter`:{e.preventDefault();let{derivedItemConstraints:r,layout:i,separatorToItems:a}=P(n.id,!0),o=n.separators.find(e=>e.element===t);A(o,`Matching separator not found`);let s=a.get(o);A(s,`Matching panels not found`);let c=s[0],l=r.find(e=>e.itemId===c.id);if(A(l,`Panel metadata not found`),l.collapsible){let e=i[c.id];H(t,(l.collapsedSize===e?n.mutableState.expandedItemSizes[c.id]??l.minSize:l.collapsedSize)-e)}break}case`F6`:{e.preventDefault();let t=wt(n).map(e=>e.element),r=t.findIndex(t=>t===e.currentTarget);A(r!==-1,`Index not found`),t[e.shiftKey?r>0?r-1:t.length-1:r+1<t.length?r+1:0].focus({preventScroll:!0});break}case`Home`:e.preventDefault(),H(t,-100)}}function Et(e,t){let n=j();if(n.state!==`active`||!We(n,e,t))return!1;let r=F();Le();try{n.previewLayoutMap.forEach((e,t)=>{let n=r.get(t);t.resizePreviewMode===`separator`&&n&&!B(e,n.layout)&&I(t,{...n,layout:e,requestedAxisSize:n.axisSize,requestedLayout:e})}),Re(),M({cursorFlags:0,state:`inactive`}),n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=P(e.axis.id,!0);I(e.axis,t,{isUserInteraction:!0})})}finally{ze()}return!0}function Dt(e){let t=j();if(t.state!==`active`)return;let n=t.hitRegions.flatMap(({separator:e})=>e?[e.element]:[]);!n.some(t=>t===e.target)||n.some(t=>t.hasPointerCapture?.(e.pointerId))||Et(e.currentTarget,e)}function Ot(e){Et(e.currentTarget,e)}function kt(e,t){let{element:n,orientation:r,items:i}=e,a=n.getBoundingClientRect(),o=r===`horizontal`;return Ae({expandHitTargets:!1,axis:e,includeDisabled:!0}).map(({items:r,rect:s,separator:c},l)=>{let u=i.indexOf(r[0]),d=o?s.left+s.width/2:s.top+s.height/2;return{active:t.some(t=>{if(t.axis!==e||t.items[0]!==r[0])return!1;if(c||t.separator)return t.separator===c;let n=o?t.rect.left+t.rect.width/2:t.rect.top+t.rect.height/2;return L(d,n)}),axis:e,key:c?`separator-${c.id}`:`panel-${r[0].id}-${l}`,offset:0,itemIndex:u,rect:new DOMRect((o&&!c?d:s.left)-a.left-n.clientLeft+n.scrollLeft,(!o&&!c?d:s.top)-a.top-n.clientTop+n.scrollTop,o&&!c?0:s.width,!o&&!c?0:s.height),separator:c}})}function At(e){if(e.defaultPrevented||e.pointerType===`mouse`&&e.button>0)return;let t=j();if(t.state===`active`){Ue(t,e)&&Et(t.ownerDocument,t);return}let n=F(),r=lt(e,n,e.currentTarget);if(r.length===0)return;let i=new Map,a=!1;r.forEach(e=>{e.separator&&(a||(a=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let t=n.get(e.axis);t&&i.set(e.axis,t.layout)});let o=Array.from(i.keys()).flatMap(e=>e.resizePreviewMode===`separator`?kt(e,r):[]);M({cursorFlags:0,didPointerMove:!1,hitRegions:r,initialLayoutMap:i,ownerDocument:e.currentTarget,pointerDownAtPoint:{x:e.clientX,y:e.clientY},pointerId:e.pointerId,pointerType:e.pointerType,previewLayoutMap:new Map(i),previews:o,state:`active`}),e.preventDefault()}function jt(e){let t=e.currentTarget,n=F(),r=j();if(r.state===`active`){if(!We(r,t,e))return;qe({commit:!1,event:e,hitRegions:r.hitRegions,initialLayoutMap:r.initialLayoutMap,mountedAxes:n,prevCursorFlags:r.cursorFlags})}}function Mt(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=j(),r=F();switch(n.state){case`active`:if(!We(n,t,e))return;if(e.buttons===0){Et(t,e);return}for(let t of n.hitRegions)if(t.separator){let{element:n}=t.separator;n.isConnected&&!n.hasPointerCapture?.(e.pointerId)&&n.setPointerCapture?.(e.pointerId)}qe({commit:!1,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags});break;default:{let i=lt(e,r,t);i.length===0?n.state!==`inactive`&&M({cursorFlags:0,state:`inactive`}):M({cursorFlags:0,hitRegions:i,ownerDocument:t,state:`hover`});break}}}function Nt(e){if(e.relatedTarget instanceof HTMLIFrameElement){let t=j();t.state===`hover`&&t.ownerDocument===e.currentTarget&&M({cursorFlags:0,state:`inactive`})}}function Pt(e){e.defaultPrevented||e.pointerType===`mouse`&&e.button>0||Ye(e.currentTarget,e)}function Ft(e){e.target===e.currentTarget&&Et(e.currentTarget.document)}function It(e){Et(e.currentTarget.document)}function Lt(e,t,n){if(!n[0])return;let r=e.items.find(e=>e.element===t);if(!r||!r.onResize)return;let i=Se({axis:e}),a=e.orientation===`horizontal`?r.element.offsetWidth:r.element.offsetHeight,o=r.mutableValues.prevSize,s={asPercentage:N(a/i*100),inPixels:a};r.mutableValues.prevSize=s,r.onResize(s,r.id,o)}function Rt(e){let t=!0;A(e.element.ownerDocument.defaultView,`Cannot register an unmounted Group`);let n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,a=new n(n=>{let r;Le();try{for(let i of n){let{borderBoxSize:n,target:a}=i;if(a===e.element){if(t){let t=P(e.id);if(!t)break;let n=_t({axis:e,axisState:t});if(!n)break;if(!n.changed)continue;I(e,n.state)}}else try{Lt(e,a,n)}catch(e){r??={error:e}}}}finally{ze()}if(r)throw r.error});a.observe(e.element),e.items.forEach(e=>{A(!r.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.onResize&&a.observe(e.element)});let o=Se({axis:e}),s=Ie(e,o),c=ft({axis:e,itemConstraints:s}),l=V({layout:c,itemConstraints:s}),u=e.element.ownerDocument,d=u.defaultView;J.set(u,(J.get(u)??0)+1);let f=new Map;return Ae({axis:e,includeDisabled:!0}).forEach(e=>{e.separator&&f.set(e.separator,e.items)}),I(e,{defaultLayoutDeferred:o===0,derivedItemConstraints:s,axisSize:o,layout:l,requestedAxisSize:o,requestedLayout:ht({itemIds:e.items.map(({id:e})=>e),layout:c}),separatorToItems:f}),e.separators.forEach(e=>{A(!i.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),i.add(e.id),e.element.addEventListener(`keydown`,Tt)}),On||(On=!0,pe(xe)),J.get(u)===1&&(u.addEventListener(`contextmenu`,Xe,!0),u.addEventListener(`dblclick`,xt,!0),u.addEventListener(`lostpointercapture`,Dt,!0),u.addEventListener(`pointercancel`,Ot,!0),u.addEventListener(`pointerdown`,At,!0),u.addEventListener(`pointerleave`,jt),u.addEventListener(`pointermove`,Mt),u.addEventListener(`pointerout`,Nt),u.addEventListener(`pointerup`,Pt,!0),d?.addEventListener(`blur`,Ft),d?.addEventListener(`pagehide`,It)),function(){t=!1,J.set(u,Math.max(0,(J.get(u)??0)-1)),Be(e),ge(e),e.separators.forEach(e=>{e.element.removeEventListener(`keydown`,Tt)}),J.get(u)||(u.removeEventListener(`contextmenu`,Xe,!0),u.removeEventListener(`dblclick`,xt,!0),u.removeEventListener(`lostpointercapture`,Dt,!0),u.removeEventListener(`pointercancel`,Ot,!0),u.removeEventListener(`pointerdown`,At,!0),u.removeEventListener(`pointerleave`,jt),u.removeEventListener(`pointermove`,Mt),u.removeEventListener(`pointerout`,Nt),u.removeEventListener(`pointerup`,Pt,!0),d?.removeEventListener(`blur`,Ft),d?.removeEventListener(`pagehide`,It)),a.disconnect()}}function zt({derivedItemConstraints:e,axis:t,layout:n,prevLayout:r,requestedLayout:i}){let a=t.items.map(({id:e})=>e).join(`,`);t.mutableState.layouts[a]=i,r&&e.forEach(e=>{if(e.collapsible){let i=L(e.collapsedSize,n[e.itemId]),a=L(e.collapsedSize,r[e.itemId]);i&&!a&&(t.mutableState.expandedItemSizes[e.itemId]=r[e.itemId])}})}function Bt(){let[e,t]=(0,W.useState)({});return[e,(0,W.useCallback)(()=>t({}),[])]}function Vt(e){let t=(0,W.useRef)({...e});return G(()=>{for(let n in e)t.current[n]=e[n]},[e]),t.current}function Ht({layout:e,itemConstraints:t,itemId:n,itemIndex:r}){let i,a,o=e[n],s=t.find(e=>e.itemId===n);if(s){let c=s.maxSize,l=s.collapsible?s.collapsedSize:s.minSize,u=[r,r+1];a=V({layout:Ke({delta:l-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n],i=V({layout:Ke({delta:c-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:a,valueNow:o}}function Ut({attributes:e,axisId:t,axisOrientation:n,children:r,className:i,"data-testid":a,disableCursor:o,disabled:s,disableDoubleClick:c,elementRef:l,id:u,isSharedHitRegion:d,preview:f,registerSeparator:p,requiredStyle:m,style:h,styleDefaults:g,tabIndex:_=0,updateSeparatorProps:v}){let y=Vt({disabled:s,disableDoubleClick:c,children:r,className:i,preview:f,style:h}),[b,x]=(0,W.useState)({}),[S,ee]=(0,W.useState)(`inactive`),[C,w]=(0,W.useState)(!1),T=(0,W.useRef)(null),E=(0,W.useRef)(null),D=se(T,l),te=n===`horizontal`?`vertical`:`horizontal`;G(()=>{let e=T.current;if(e!==null){let n={disabled:y.disabled,disableDoubleClick:y.disableDoubleClick,element:e,id:u,get children(){return y.children},get className(){return y.className},get preview(){return y.preview},get style(){return y.style}};E.current=n;let r=p(n),i=pe(e=>{ee(e.next.state!==`inactive`&&e.next.hitRegions.some(e=>e.separator===n||(d?.(e)??!1))?e.next.state:`inactive`)}),a=He(t,e=>{let{derivedItemConstraints:t,layout:r,separatorToItems:i}=e.next,a=i.get(n);if(a){let n=a[0],i=t.findIndex(e=>e.itemId===n.id),{layoutStrategy:o}=e.axis;x({...Ht({layout:r,itemConstraints:t,itemId:n.id,itemIndex:i}),...o?.getItemAriaControls&&{valueControls:o.getItemAriaControls(n.id)}})}});return()=>{E.current=null,i(),a(),r()}}},[t,u,d,p,y]),G(()=>{let e=E.current;e&&he(e)},[f]),(0,W.useEffect)(()=>{v(u,{disabled:s,disableDoubleClick:c})},[s,c,u,v]);let O;s&&!o&&(O=`not-allowed`);let k;if(s)k=`disabled`;else switch(S){case`active`:k=`active`;break;default:k=C?`focus`:S}return(0,U.jsx)(`div`,{...e,"aria-controls":b.valueControls,"aria-disabled":s||void 0,"aria-orientation":te,"aria-valuemax":b.valueMax,"aria-valuemin":b.valueMin,"aria-valuenow":b.valueNow,children:r,className:i,"data-separator":k,"data-testid":a,id:u,onBlur:()=>w(!1),onFocus:()=>w(!0),ref:D,role:`separator`,style:{...g,cursor:O,...h,...m,touchAction:`none`},tabIndex:s?void 0:_})}function Wt(e){for(let t=1;t<e.length;t++)if(Ce(e[t-1],e[t])>0)return!1;return!0}function Gt({separator:e}){let{element:t}=e,n=(0,W.useRef)(null);return G(()=>{let e=t.cloneNode(!0),r=[t,...t.querySelectorAll(`*`)],i=[e,...e.querySelectorAll(`*`)],a=t.ownerDocument.defaultView;return r.forEach((e,t)=>{let n=i[t];if(n instanceof a.HTMLElement||n instanceof a.SVGElement){let t=a.getComputedStyle(e);for(let e=0;e<t.length;e++){let r=t.item(e);n.style.setProperty(r,t.getPropertyValue(r))}}n.removeAttribute(`data-testid`),n.removeAttribute(`id`)}),Object.assign(e.style,{boxSizing:`border-box`,height:`100%`,margin:`0`,position:`static`,transform:`none`,width:`100%`}),n.current.appendChild(e),()=>e.remove()},[t]),(0,U.jsx)(`div`,{ref:n,style:{height:`100%`,opacity:.65,pointerEvents:`none`,width:`100%`}})}function Kt(){let e=(0,W.useContext)(kn);return A(e,`Group Context not found; did you render a Panel or Separator outside of a Group?`),e}function qt(e){let{registerOverlay:t}=Kt(),n=(0,W.useRef)(e);pt(n.current,e)||(n.current=e);let r=n.current;return G(()=>t(r),[t,r]),null}function Jt({active:e,orientation:t,style:n,...r}){let i;switch(t){case`horizontal`:i={height:`100%`,minWidth:`1px`};break;case`vertical`:i={minHeight:`1px`,width:`100%`}}return(0,U.jsx)(`div`,{...r,"data-separator-overlay":e?`active`:`inactive`,style:{...i,...n,flexShrink:0,pointerEvents:`none`}})}function Yt({overlay:e,preview:t}){let{axis:n,offset:r,rect:i,separator:a}=t,o=n.orientation===`horizontal`,s=a?.preview,c=e;return(0,W.isValidElement)(s)&&s.type===qt&&(c=s.props,s=void 0),s??(c?s=(0,U.jsx)(Jt,{...c,active:t.active,orientation:n.orientation}):a&&(s=(0,U.jsx)(Gt,{separator:a}))),(0,U.jsx)(`div`,{"aria-hidden":`true`,"data-resize-preview":!0,inert:!0,style:{height:i.height,left:i.left,pointerEvents:`none`,position:`absolute`,top:i.top,transform:o?`translateX(${r}px)`:`translateY(${r}px)`,width:i.width},children:s})}function Xt(e){return Array.from(e).sort(Ce)}function Zt(e,t){let n=(0,W.useRef)({getLayout:()=>({}),setLayout:pn});return(0,W.useImperativeHandle)(t,()=>n.current,[]),G(()=>{Object.assign(n.current,Ct({axisId:e}))}),n}function Qt({groupId:e,resizePreviewMode:t}){let[n,r]=(0,W.useState)([]),i=(0,W.useRef)(n);return G(()=>{let n=n=>{let a=Ve(e),o=t===`separator`&&n.state===`active`?n.previews.filter(e=>e.axis===a&&(e.active||!L(e.offset,0))):[],s=i.current;s.length===o.length&&o.every((e,t)=>e===s[t])||(i.current=o,r(o))};if(t!==`separator`){n(j());return}let a=pe(({next:e})=>n(e));return n(j()),a},[e,t]),n}function $t({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:a,groupRef:o,id:s,onLayoutChange:c,onLayoutChanged:l,orientation:u=`horizontal`,resizePreviewMode:d=`panel`,resizeTargetMinimumSize:f={coarse:20,fine:10},style:p,...m}){let h=(0,W.useRef)({onLayoutChange:{},onLayoutChanged:{}}),g=oe(e=>{B(h.current.onLayoutChange,e)||(h.current.onLayoutChange=e,c?.(e))}),_=oe((e,t,n)=>{B(h.current.onLayoutChanged,e)||(h.current.onLayoutChanged=e,l?.(e,{isUserInteraction:t,requestedLayout:n}))}),v=ae(s),[y,b]=(0,W.useState)(),x=Qt({groupId:v,resizePreviewMode:d}),S=(0,W.useRef)(null),[ee,C]=Bt(),w=(0,W.useRef)([]),T=(0,W.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],separators:[]}),E=se(S,a),D=Zt(v,o),te=(0,W.useMemo)(()=>({getLayout:()=>D.current.getLayout(),id:v,orientation:u,setLayout:e=>D.current.setLayout(e)}),[v,D,u]),O=oe((e,t)=>{let r=P(e);if(r)return{flexGrow:r.layout[t]??1};if(n?.[t])return{flexGrow:n?.[t]}}),k=Vt({defaultLayout:n,disableCursor:r,resizeTargetMinimumSize:f}),ne=(0,W.useMemo)(()=>({get disableCursor(){return!!k.disableCursor},getPanelStyles:O,id:v,orientation:u,registerPanel:e=>{let t=T.current;return t.panels=we(u,[...t.panels,e]),C(),()=>{t.panels=t.panels.filter(t=>t!==e),C()}},registerOverlay:e=>(b(e),()=>{b(void 0)}),registerSeparator:e=>{let t=T.current;return t.separators=we(u,[...t.separators,e]),C(),()=>{t.separators=t.separators.filter(t=>t!==e),C()}},updatePanelProps:(e,{disabled:t})=>{let n=T.current.panels.find(t=>t.id===e);if(!n||n.constraintProps.disabled===t)return;n.constraintProps.disabled=t;let r=Ve(v),i=P(v);r&&i&&I(r,{...i,derivedItemConstraints:Ie(r)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:n})=>{let r=T.current.separators.find(t=>t.id===e);r&&(r.disabled=t,r.disableDoubleClick=n)}}),[O,v,C,u,k]),re=(0,W.useRef)(null);return G(()=>{let e=S.current;if(e===null)return;let t=T.current;t.panels=we(u,t.panels),t.separators=we(u,t.separators),w.current=Xt([...t.panels.map(({element:e})=>e),...t.separators.map(({element:e})=>e)]);let n;if(k.defaultLayout!==void 0&&Object.keys(k.defaultLayout).length===t.panels.length){n={};for(let e of t.panels){let t=k.defaultLayout[e.id];t!==void 0&&(n[e.id]=t)}}let r={disabled:!!i,element:e,id:v,mutableState:{defaultLayout:n,disableCursor:!!k.disableCursor,expandedItemSizes:T.current.lastExpandedPanelSizes,layouts:T.current.layouts},orientation:u,items:t.panels,resizePreviewMode:d,get resizeTargetMinimumSize(){return k.resizeTargetMinimumSize},separators:t.separators};re.current=r;let a=Rt(r),{defaultLayoutDeferred:o,derivedItemConstraints:s,layout:c,requestedLayout:l}=P(r.id,!0);if(!o&&s.length>0)try{try{g(c)}finally{_(c,!1,l)}}catch(e){throw re.current=null,a(),e}let f=He(v,e=>{let{defaultLayoutDeferred:t,derivedItemConstraints:n,layout:i,requestedLayout:a}=e.next;if(t||n.length===0)return;zt({derivedItemConstraints:n,axis:r,layout:i,prevLayout:e.prev?.layout,requestedLayout:a});let o=j(),s=o.state!==`active`||!o.hitRegions.some(e=>e.axis===r);try{g(i)}finally{s&&_(i,e.isUserInteraction,a)}});return()=>{re.current=null,a(),f()}},[i,v,_,g,u,ee,d,k]),G(()=>{Wt(w.current)||C()}),(0,W.useEffect)(()=>{let e=re.current;e&&(e.mutableState.defaultLayout=n,e.mutableState.disableCursor=!!r)}),(0,U.jsx)(An.Provider,{value:te,children:(0,U.jsx)(kn.Provider,{value:ne,children:(0,U.jsxs)(`div`,{...m,className:t,"data-group":!0,"data-testid":ce(m,s),id:v,ref:E,style:{height:`100%`,width:`100%`,overflow:`hidden`,position:d===`separator`?`relative`:void 0,...p,display:`flex`,flexDirection:u===`horizontal`?`row`:`column`,flexWrap:`nowrap`,touchAction:u===`horizontal`?`pan-y`:`pan-x`},children:[e,x.map(e=>(0,U.jsx)(Yt,{overlay:y,preview:e},e.key))]})})})}function en(e,t){return`react-resizable-panels:${[e,...t].join(`:`)}`}function tn({id:e,panelIds:t,storage:n}){let r=en(e,[]),i=n.getItem(r);if(i)try{let e=JSON.parse(i);if(t){let n=e[t.join(`,`)];if(n&&Array.isArray(n.layout)&&t.length===n.layout.length){let e={};for(let r=0;r<t.length;r++)e[t[r]]=n.layout[r];return e}}else{let t=Object.keys(e);if(t.length===1){let n=e[t[0]];if(n&&Array.isArray(n.layout)){let e=t[0].split(`,`);if(e.length===n.layout.length){let t={};for(let r=0;r<e.length;r++)t[e[r]]=n.layout[r];return t}}}}}catch{}}function nn({debounceSaveMs:e=100,onlySaveAfterUserInteractions:t,panelIds:n,storage:r=localStorage,...i}){let a=n!==void 0,o=`id`in i?i.id:i.groupId,s=en(o,n??[]),c=(0,W.useSyncExternalStore)(rn,()=>r.getItem(s),()=>r.getItem(s)),l=(0,W.useMemo)(()=>{if(c){let e=JSON.parse(c),t=Object.values(e);if(Array.from(t).every(e=>typeof e==`number`))return e}},[c]),u=(0,W.useMemo)(()=>{if(!l)return tn({id:o,panelIds:n,storage:r})},[l,o,n,r]),d=l??u,f=(0,W.useRef)(null),p=(0,W.useCallback)(()=>{let e=f.current;e&&(f.current=null,clearTimeout(e))},[]);(0,W.useLayoutEffect)(()=>()=>{p()},[p]);let m=(0,W.useCallback)((e,n)=>{if(t&&!n.isUserInteraction)return;p();let i=n.requestedLayout??e,s;s=a?en(o,Object.keys(i)):en(o,[]);try{r.setItem(s,JSON.stringify(i))}catch(e){console.error(e)}},[p,a,o,t,r]);return{defaultLayout:d,onLayoutChange:(0,W.useCallback)(t=>{p(),e===0?m(t,{isUserInteraction:!1}):f.current=setTimeout(()=>{m(t,{isUserInteraction:!1})},e)},[p,e,m]),onLayoutChanged:m}}function rn(){return function(){}}function an(){return(0,W.useRef)(null)}function on(e,t){let{id:n}=Kt(),r=(0,W.useRef)({collapse:mn,expand:mn,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:mn});return(0,W.useImperativeHandle)(t,()=>r.current,[]),G(()=>{Object.assign(r.current,vt({axisId:n,itemId:e}))}),r}function sn({children:e,className:t,collapsedSize:n=`0%`,collapsedThreshold:r,collapsible:i=!1,defaultSize:a,disabled:o,elementRef:s,groupResizeBehavior:c=`preserve-relative-size`,id:l,maxSize:u=`100%`,minSize:d=`0%`,onResize:f,panelRef:p,style:m,...h}){let g=ie(l),_=ae(l),v=Vt({disabled:o}),y=(0,W.useRef)(null),b=se(y,s),{getPanelStyles:x,id:S,orientation:ee,registerPanel:C,updatePanelProps:w}=Kt(),T=f!==null,E=oe((e,t,n)=>{f?.(e,l,n)});G(()=>{let e=y.current;if(e!==null){let t={element:e,id:_,idIsStable:g,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:T?E:void 0,constraintProps:{groupResizeBehavior:c,collapsedSize:n,collapsedThreshold:r,collapsible:i,defaultSize:a,disabled:v.disabled,maxSize:u,minSize:d}};return C(t)}},[c,n,r,i,a,T,_,g,u,d,E,C,v]),(0,W.useEffect)(()=>{w(_,{disabled:o})},[o,_,w]);let D=on(_,p),te=(0,W.useMemo)(()=>({collapse:()=>D.current.collapse(),expand:()=>D.current.expand(),getSize:()=>D.current.getSize(),groupId:S,id:_,isCollapsed:()=>D.current.isCollapsed(),resize:e=>D.current.resize(e)}),[S,_,D]),O=()=>{let e=x(S,_);if(e)return JSON.stringify(e)},k=(0,W.useSyncExternalStore)(e=>He(S,e),O,O),ne;return ne=k?JSON.parse(k):a===void 0?{flexGrow:1}:{flexGrow:void 0,flexShrink:void 0,flexBasis:a},(0,U.jsx)(`div`,{...h,"data-disabled":o||void 0,"data-panel":!0,"data-testid":ce(h,l),id:_,ref:b,style:{...Mn,display:`flex`,flexBasis:0,flexShrink:1,overflow:`visible`,...ne},children:(0,U.jsx)(`div`,{className:t,style:{maxHeight:`100%`,maxWidth:`100%`,flexGrow:1,overflow:`auto`,...m,touchAction:ee===`horizontal`?`pan-y`:`pan-x`},children:(0,U.jsx)(jn.Provider,{value:te,children:e})})})}function cn(){return(0,W.useRef)(null)}function ln({children:e,className:t,disabled:n,disableDoubleClick:r,elementRef:i,id:a,preview:o,style:s,...c}){let l=ae(a),{disableCursor:u,id:d,orientation:f,registerSeparator:p,updateSeparatorProps:m}=Kt();return(0,U.jsx)(Ut,{attributes:c,axisId:d,axisOrientation:f,className:t,"data-testid":ce(c,a),disableCursor:u,disabled:n,disableDoubleClick:r,elementRef:i,id:l,preview:o,registerSeparator:p,requiredStyle:Pn,style:s,styleDefaults:Nn,updateSeparatorProps:m,children:e})}var U,W,G,un,dn,K,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,q,Cn,wn,Tn,En,Dn,J,On,kn,An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{U=d(),W=t(),G=typeof window<`u`?W.useLayoutEffect:W.useEffect,(0,W.createContext)(null),dn=class{#e={};addListener(e,t){let n=this.#e[e];return n===void 0?this.#e[e]=[t]:n.includes(t)||n.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let n=this.#e[e];if(n!==void 0){if(n.length===1){n[0].call(null,t);return}let e,r=Array.from(n);for(let n=0;n<r.length;n++){let i=r[n];try{i.call(null,t)}catch(t){e??={error:t}}}if(e)throw e.error}}removeAllListeners(){this.#e={}}removeListener(e,t){let n=this.#e[e];if(n!==void 0){let e=n.indexOf(t);e>=0&&n.splice(e,1)}}},K={cursorFlags:0,state:`inactive`},fn=new dn,pn=e=>e,mn=()=>{},hn=1,gn=2,_n=4,vn=8,yn=3,bn=12,Sn=new WeakMap,q=new Map,Cn=new dn,wn=0,Tn=[],Dn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/,J=new Map,On=!1,kn=(0,W.createContext)(null),(0,W.createContext)(null),qt.displayName=`SeparatorOverlay`,An=(0,W.createContext)(null),$t.displayName=`Group`,jn=(0,W.createContext)(null),sn.displayName=`Panel`,Mn={minHeight:0,maxHeight:`100%`,height:`auto`,minWidth:0,maxWidth:`100%`,width:`auto`,border:`none`,borderWidth:0,padding:0,margin:0},Nn={flexBasis:`auto`},Pn={flexGrow:0,flexShrink:0},ln.displayName=`Separator`})))()}var In,Ln,Rn,zn,Bn,Vn;function Hn(){return(Hn=e((()=>{In=t(),Fn(),o(),u(),f(),n(),l(),[Ln,Rn]=p({name:`ResizableContext`}),zn=({controlRef:e,disabled:t,orientation:n=`horizontal`,...r}={})=>{let a=an();return{disabled:t,groupRef:a,orientation:n,getRootProps:(0,In.useCallback)((o={})=>({...c({disabled:t,orientation:n},r,o)(),style:{height:void 0,width:void 0,...r.style,...o.style},elementRef:s(o.elementRef,r.ref),groupRef:s(o.groupRef,a,e),onLayoutChange:i(o.onLayoutChange,r.onLayoutChange),onLayoutChanged:i(o.onLayoutChanged,r.onLayoutChanged)}),[t,n,a,e,r])}},Bn=({controlRef:e,...t})=>{let n=cn();return{panelRef:n,getItemProps:(0,In.useCallback)((r={})=>({...c(t,r)(),elementRef:s(r.elementRef,t.ref),panelRef:s(r.panelRef,n,e),onResize:i(r.onResize,t.onResize)}),[n,e,t])}},Vn=({disabled:e,...t})=>{let{disabled:n,groupRef:i,orientation:o}=Rn(),l=e||n,u=(0,In.useCallback)(e=>{e.preventDefault();let t=i.current?.getLayout();if(!t)return;let n=100/Object.keys(t).length,r=Object.fromEntries(Object.keys(t).map(e=>[e,n]));i.current?.setLayout(r)},[i]),d=(0,In.useCallback)((e={})=>({...c({"aria-disabled":a(l),"aria-orientation":o,"data-disabled":r(l),disabled:l,tabIndex:l?-1:0},e,t,{onDoubleClick:u})(),elementRef:s(e.elementRef,t.ref)}),[o,l,t,u]);return{getIconProps:(0,In.useCallback)((e={})=>({"data-icon":``,...e}),[]),getTriggerProps:d}}})))()}var Un,Wn,Gn,Kn,qn,Jn,Y,X,Z,Yn;function Xn(){return(Xn=e((()=>{Un=t(),Fn(),y(),m(),ee(),re(),Hn(),Wn=d(),{PropsContext:Gn,usePropsContext:Kn,withContext:qn,withProvider:Jn}=v(`resizable`,ne),Y=Jn(({children:e,orientation:t,...n})=>{let r=S(t),{disabled:i,groupRef:a,orientation:o,getRootProps:s}=zn({orientation:r,...n}),c=(0,Un.useMemo)(()=>({disabled:i,groupRef:a,orientation:o}),[i,o,a]);return(0,Wn.jsx)(Ln,{value:c,children:(0,Wn.jsx)(h.div,{as:$t,...s(),children:e})})},`root`,{transferProps:[`orientation`]})(),X=qn(e=>{let{getItemProps:t}=Bn(e);return(0,Wn.jsx)(h.div,{as:sn,...t()})},`item`)(),Z=qn(({children:e,icon:t,iconProps:n,...r})=>{let{getIconProps:i,getTriggerProps:a}=Vn(r);return(0,Wn.jsxs)(h.div,{as:ln,...a(),children:[t?(0,Wn.jsx)(Yn,{...i(n),children:t}):null,e]})},`trigger`)(),Yn=qn(`div`,`icon`)()})))()}var Q,$,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr;function gr(){return(gr=e((()=>{Q=t(),b(),Xn(),Fn(),O(),te(),C(),T(),$=d(),Zn={component:Y,title:`Components / Resizable`},Qn=()=>(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),$n=()=>(0,$.jsx)(k,{variant:`stack`,rows:[`border`,`spacer`,`plain`],children:(e,t,n)=>(0,$.jsxs)(Y,{variant:t,borderWidth:t===`border`?`1px`:void 0,h:`md`,rounded:t===`border`?`l2`:void 0,children:[(0,$.jsx)(X,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`Two`})]},n)}),er=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{colorScheme:`primary`,variant:`spacer`,h:`md`,children:[(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]}),(0,$.jsxs)(Y,{colorScheme:`red`,variant:`spacer`,h:`md`,children:[(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),tr=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,orientation:`horizontal`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]})]}),nr=()=>(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{defaultSize:`30%`,display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),rr=()=>(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,maxSize:`70%`,minSize:`30%`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),ir=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,$.jsx)(X,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]})]}),ar=()=>{let e=(0,Q.useRef)(null),t=(0,Q.useRef)(null),n=(0,Q.useRef)(null);return(0,$.jsxs)(Y,{ref:e,borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{ref:t,display:`center`,children:`One`}),(0,$.jsx)(Z,{ref:n}),(0,$.jsx)(X,{display:`center`,children:`Two`})]})},or=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{icon:(0,$.jsx)(x,{})}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),(0,$.jsxs)(Y,{variant:`spacer`,h:`md`,orientation:`vertical`,children:[(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,$.jsx)(Z,{icon:(0,$.jsx)(x,{})}),(0,$.jsx)(X,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),sr=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`Left`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{children:(0,$.jsxs)(Y,{orientation:`vertical`,children:[(0,$.jsx)(X,{display:`center`,children:`Top`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Bottom`})]})})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`Top`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{children:(0,$.jsxs)(Y,{children:[(0,$.jsx)(X,{display:`center`,children:`Left`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Right`})]})})]})]}),cr=()=>(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Y,{borderWidth:`1px`,disabled:!0,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Three`})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,children:`One`}),(0,$.jsx)(Z,{disabled:!0}),(0,$.jsx)(X,{display:`center`,children:`Two`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Three`})]})]}),lr=()=>(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,onLayoutChange:e=>{console.log(`layout change`,e)},onLayoutChanged:e=>{console.log(`layout changed`,e)},children:[(0,$.jsx)(X,{id:`one`,display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{id:`two`,display:`center`,children:`Two`})]}),ur=()=>(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{display:`center`,onResize:(e,t,n)=>{console.log(`resize`,e,t,n)},children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]}),dr=()=>{let{defaultLayout:e,onLayoutChanged:t}=nn({id:`persistence`,storage:localStorage});return(0,$.jsxs)(Y,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,$.jsx)(X,{id:`one`,display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{id:`two`,display:`center`,children:`Two`})]})},fr=()=>{let[e,t]=D({key:`showLeft`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),[n,r]=D({key:`showRight`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),{defaultLayout:i,onLayoutChanged:a}=nn({id:`conditional`,panelIds:(0,Q.useCallback)(()=>{let t=[];return e&&t.push(`left`),t.push(`middle`),n&&t.push(`right`),t},[e,n])(),storage:localStorage});return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(E,{gap:`md`,children:[(0,$.jsxs)(w,{onClick:()=>t(!e),children:[e?`Hidden`:`Show`,` Left`]}),(0,$.jsxs)(w,{onClick:()=>r(!n),children:[n?`Hidden`:`Show`,` Right`]})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,defaultLayout:i,h:`md`,rounded:`l2`,onLayoutChanged:a,children:[e?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(X,{id:`left`,display:`center`,minSize:`10%`,children:`Left`}),(0,$.jsx)(Z,{})]}):null,(0,$.jsx)(X,{id:`middle`,display:`center`,minSize:`10%`,children:`Middle`}),n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Z,{}),(0,$.jsx)(X,{id:`right`,display:`center`,minSize:`10%`,children:`Right`})]}):null]})]})},pr=()=>{let{defaultLayout:e,onLayoutChanged:t}=nn({id:`persistence`,storage:(0,Q.useMemo)(()=>({getItem:e=>{let t=document.cookie.match(RegExp(`(^| )${e}=([^;]+)`));return t?t[2]??null:null},setItem:(e,t)=>{document.cookie=`${e}=${t}; max-age=31536000; path=/`}}),[])});return(0,$.jsxs)(Y,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,$.jsx)(X,{id:`one`,display:`center`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{id:`two`,display:`center`,children:`Two`})]})},mr=()=>{let e=(0,Q.useRef)(null);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(E,{gap:`md`,children:[(0,$.jsx)(w,{onClick:()=>e.current?.collapse(),children:`Collapse "one"`}),(0,$.jsx)(w,{onClick:()=>e.current?.expand(),children:`Expand "one"`}),(0,$.jsx)(w,{onClick:()=>e.current?.resize(`30%`),children:`Resize "one" to 30`}),(0,$.jsx)(w,{onClick:()=>e.current?.resize(`50%`),children:`Resize "one" to 50`})]}),(0,$.jsxs)(Y,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,$.jsx)(X,{collapsedSize:`15%`,collapsible:!0,controlRef:e,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,$.jsx)(Z,{}),(0,$.jsx)(X,{display:`center`,children:`Two`})]})]})},hr=[`Basic`,`Variant`,`ColorScheme`,`Orientation`,`DefaultSize`,`MinMaxSize`,`Collapsible`,`Refs`,`Icon`,`NestedResizable`,`Disabled`,`onLayoutChange`,`OnResize`,`LocalStorage`,`ConditionalLocalStorage`,`CookieStorage`,`CustomControl`],Qn.parameters={...Qn.parameters,docs:{...Qn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Qn.parameters?.docs?.source}}},$n.parameters={...$n.parameters,docs:{...$n.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["border", "spacer", "plain"]}>
      {(_, row, key) => <Resizable.Root key={key} variant={row} borderWidth={row === "border" ? "1px" : undefined} h="md" rounded={row === "border" ? "l2" : undefined}>
          <Resizable.Item borderWidth={row === "spacer" ? "1px" : undefined} display="center" rounded={row === "spacer" ? "l2" : undefined}>
            One
          </Resizable.Item>

          <Resizable.Trigger />

          <Resizable.Item borderWidth={row === "spacer" ? "1px" : undefined} display="center" rounded={row === "spacer" ? "l2" : undefined}>
            Two
          </Resizable.Item>
        </Resizable.Root>}
    </PropsTable>;
}`,...$n.parameters?.docs?.source}}},er.parameters={...er.parameters,docs:{...er.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root colorScheme="primary" variant="spacer" h="md">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root colorScheme="red" variant="spacer" h="md">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...er.parameters?.docs?.source}}},tr.parameters={...tr.parameters,docs:{...tr.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" orientation="horizontal" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...tr.parameters?.docs?.source}}},nr.parameters={...nr.parameters,docs:{...nr.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...nr.parameters?.docs?.source}}},rr.parameters={...rr.parameters,docs:{...rr.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...rr.parameters?.docs?.source}}},ir.parameters={...ir.parameters,docs:{...ir.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item collapsedSize="15%" collapsible defaultSize="30%" display="center" maxSize="50%" minSize="30%">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item collapsedSize="15%" collapsible defaultSize="30%" display="center" maxSize="50%" minSize="30%">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...ir.parameters?.docs?.source}}},ar.parameters={...ar.parameters,docs:{...ar.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  return <Resizable.Root ref={rootRef} borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item ref={itemRef} display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger ref={triggerRef} />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...ar.parameters?.docs?.source}}},or.parameters={...or.parameters,docs:{...or.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root variant="spacer" h="md" orientation="vertical">
        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          One
        </Resizable.Item>

        <Resizable.Trigger icon={<GripVerticalIcon />} />

        <Resizable.Item borderWidth="1px" display="center" rounded="l2">
          Two
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...or.parameters?.docs?.source}}},sr.parameters={...sr.parameters,docs:{...sr.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">Left</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root orientation="vertical">
            <Resizable.Item display="center">Top</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item display="center">Bottom</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" orientation="vertical" rounded="l2">
        <Resizable.Item display="center">Top</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>
          <Resizable.Root>
            <Resizable.Item display="center">Left</Resizable.Item>

            <Resizable.Trigger />

            <Resizable.Item display="center">Right</Resizable.Item>
          </Resizable.Root>
        </Resizable.Item>
      </Resizable.Root>
    </>;
}`,...sr.parameters?.docs?.source}}},cr.parameters={...cr.parameters,docs:{...cr.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Resizable.Root borderWidth="1px" disabled h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Three</Resizable.Item>
      </Resizable.Root>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item display="center">One</Resizable.Item>

        <Resizable.Trigger disabled />

        <Resizable.Item display="center">Two</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Three</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...cr.parameters?.docs?.source}}},lr.parameters={...lr.parameters,docs:{...lr.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2" onLayoutChange={layout => {
    console.log("layout change", layout);
  }} onLayoutChanged={layout => {
    console.log("layout changed", layout);
  }}>
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>;
}`,...lr.parameters?.docs?.source}}},ur.parameters={...ur.parameters,docs:{...ur.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...ur.parameters?.docs?.source}}},dr.parameters={...dr.parameters,docs:{...dr.parameters?.docs,source:{originalSource:`() => {
  const {
    defaultLayout,
    onLayoutChanged
  } = Resizable.useLayout({
    id: "persistence",
    storage: localStorage
  });
  return <Resizable.Root borderWidth="1px" defaultLayout={defaultLayout} h="md" rounded="l2" onLayoutChanged={onLayoutChanged}>
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>;
}`,...dr.parameters?.docs?.source}}},fr.parameters={...fr.parameters,docs:{...fr.parameters?.docs,source:{originalSource:`() => {
  const [showLeft, showLeftControls] = useLocalStorage({
    key: "showLeft",
    defaultValue: true,
    deserialize: value => value === "true",
    serialize: value => value.toString()
  });
  const [showRight, showRightControls] = useLocalStorage({
    key: "showRight",
    defaultValue: true,
    deserialize: value => value === "true",
    serialize: value => value.toString()
  });
  const getPanelIds = useCallback(() => {
    const panelIds: string[] = [];
    if (showLeft) panelIds.push("left");
    panelIds.push("middle");
    if (showRight) panelIds.push("right");
    return panelIds;
  }, [showLeft, showRight]);
  const {
    defaultLayout,
    onLayoutChanged
  } = Resizable.useLayout({
    id: "conditional",
    panelIds: getPanelIds(),
    storage: localStorage
  });
  return <>
      <Wrap gap="md">
        <Button onClick={() => showLeftControls(!showLeft)}>
          {showLeft ? "Hidden" : "Show"} Left
        </Button>
        <Button onClick={() => showRightControls(!showRight)}>
          {showRight ? "Hidden" : "Show"} Right
        </Button>
      </Wrap>

      <Resizable.Root borderWidth="1px" defaultLayout={defaultLayout} h="md" rounded="l2" onLayoutChanged={onLayoutChanged}>
        {showLeft ? <>
            <Resizable.Item id="left" display="center" minSize="10%">
              Left
            </Resizable.Item>

            <Resizable.Trigger />
          </> : null}

        <Resizable.Item id="middle" display="center" minSize="10%">
          Middle
        </Resizable.Item>

        {showRight ? <>
            <Resizable.Trigger />

            <Resizable.Item id="right" display="center" minSize="10%">
              Right
            </Resizable.Item>
          </> : null}
      </Resizable.Root>
    </>;
}`,...fr.parameters?.docs?.source}}},pr.parameters={...pr.parameters,docs:{...pr.parameters?.docs,source:{originalSource:`() => {
  const storage: Resizable.Storage = useMemo(() => ({
    getItem: key => {
      const match = document.cookie.match(new RegExp(\`(^| )\${key}=([^;]+)\`));
      return match ? match[2] ?? null : null;
    },
    setItem: (key, value) => {
      document.cookie = \`\${key}=\${value}; max-age=31536000; path=/\`;
    }
  }), []);
  const {
    defaultLayout,
    onLayoutChanged
  } = Resizable.useLayout({
    id: "persistence",
    storage
  });
  return <Resizable.Root borderWidth="1px" defaultLayout={defaultLayout} h="md" rounded="l2" onLayoutChanged={onLayoutChanged}>
      <Resizable.Item id="one" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item id="two" display="center">
        Two
      </Resizable.Item>
    </Resizable.Root>;
}`,...pr.parameters?.docs?.source}}},mr.parameters={...mr.parameters,docs:{...mr.parameters?.docs,source:{originalSource:`() => {
  const controlRef = useRef<Resizable.ItemControl>(null);
  return <>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.collapse()}>
          Collapse "one"
        </Button>

        <Button onClick={() => controlRef.current?.expand()}>
          Expand "one"
        </Button>
        <Button onClick={() => controlRef.current?.resize("30%")}>
          Resize "one" to 30
        </Button>

        <Button onClick={() => controlRef.current?.resize("50%")}>
          Resize "one" to 50
        </Button>
      </Wrap>

      <Resizable.Root borderWidth="1px" h="md" rounded="l2">
        <Resizable.Item collapsedSize="15%" collapsible controlRef={controlRef} display="center" maxSize="50%" minSize="30%">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item display="center">Two</Resizable.Item>
      </Resizable.Root>
    </>;
}`,...mr.parameters?.docs?.source}}}})))()}gr();export{Qn as Basic,ir as Collapsible,er as ColorScheme,fr as ConditionalLocalStorage,pr as CookieStorage,mr as CustomControl,nr as DefaultSize,cr as Disabled,or as Icon,dr as LocalStorage,rr as MinMaxSize,sr as NestedResizable,ur as OnResize,tr as Orientation,ar as Refs,$n as Variant,hr as __namedExportsOrder,Zn as default,lr as onLayoutChange};