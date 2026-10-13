import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Ht as r,Zt as i,ct as a,i as o,o as s,ot as c,xn as l,zt as u}from"./props-CCQavtXy.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{E as f,T as p,d as m,f as h}from"./utils-DZVvNDIZ.js";import{d as g,i as _,n as v,r as y}from"./create-component-CNpeiJ0q.js";import{n as b,t as x}from"./grip-vertical-icon-B5OyPh0v.js";import{n as ee,t as te}from"./use-value-bjgl3VlR.js";import{r as S,t as C}from"./button-BCcG2Qpy.js";import{n as w,t as ne}from"./wrap-VuUmTsbR.js";import{n as T,t as E}from"./use-local-storage-C3VAjaOG.js";import{n as D,t as re}from"./props-table-CbpR6Bxo.js";var ie;function ae(){return(ae=e((()=>{g(),ie=_({base:{icon:{alignItems:`center`,display:`flex`,justifyContent:`center`,left:`50%`,position:`absolute`,top:`50%`,translateX:`-50%`,translateY:`-50%`},item:{boxSize:`full`},root:{boxSize:`full`},trigger:{position:`relative`,transitionDuration:`moderate`,transitionProperty:`common`,_after:{transitionDuration:`moderate`,transitionProperty:`common`}}},variants:{border:{icon:{bg:`colorScheme.muted`,color:`colorScheme.fg`,py:`1`,rounded:`l1`},trigger:{bg:`colorScheme.muted`,focusVisibleRing:`none`,_after:{position:`absolute`},_hover:{bg:`colorScheme.emphasized`},_focusVisible:{bg:`colorScheme.emphasized`}}},plain:{trigger:{focusVisibleRing:`none`,_after:{position:`absolute`}}},spacer:{icon:{color:`colorScheme.fg`,transitionDuration:`moderate`,transitionProperty:`common`},trigger:{focusVisibleRing:`none`,p:`1`,_after:{bg:`transparent`,display:`block`,rounded:`full`},_hover:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}},_focusVisible:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}}}}},props:{orientation:{horizontal:{icon:{transform:`translate(-50%, -50%) rotate(0deg)`}},vertical:{icon:{transform:`translate(-50%, -50%) rotate(90deg)`}}}},compounds:[{css:{trigger:{h:`px`,_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`border`,orientation:`vertical`},{css:{trigger:{w:`px`,_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`border`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,w:`full`}}},variant:`spacer`,orientation:`vertical`},{css:{trigger:{_after:{h:`full`,w:`2`}}},variant:`spacer`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`plain`,orientation:`vertical`},{css:{trigger:{_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`plain`,orientation:`horizontal`}],defaultProps:{variant:`border`,orientation:`horizontal`}})})))()}function oe(e){let t=(0,U.useId)();return`${e??t}`}function se(e){let t=(0,U.useRef)(e);return W(()=>{t.current=e},[e]),(0,U.useCallback)((...e)=>t.current?.(...e),[t])}function ce(...e){return se(t=>{e.forEach(e=>{if(e)switch(typeof e){case`function`:e(t);break;case`object`:e.current=t}})})}function O(e,t=`Assertion error`){if(!e)throw Error(t)}function le(){return Wt===void 0&&(Wt=typeof matchMedia==`function`&&!!matchMedia(`(pointer:coarse)`).matches),Wt}function ue({expandHitTargets:e,axis:t,rect:n}){let r=e?le()?t.resizeTargetMinimumSize.coarse:t.resizeTargetMinimumSize.fine:0;if(n.width<r){let e=r-n.width;n=new DOMRect(n.x-e/2,n.y,n.width+e,n.height)}if(n.height<r){let e=r-n.height;n=new DOMRect(n.x,n.y-e/2,n.width,n.height+e)}return n}function de(e){switch(typeof e){case`number`:return[e,`px`];case`string`:{let t=parseFloat(e);return e.endsWith(`%`)?[t,`%`]:e.endsWith(`px`)?[t,`px`]:e.endsWith(`rem`)?[t,`rem`]:e.endsWith(`em`)?[t,`em`]:e.endsWith(`vh`)?[t,`vh`]:e.endsWith(`vw`)?[t,`vw`]:[t,`%`]}}}function k(){return G}function fe(e){return Kt.addListener(`change`,e)}function pe(e,t=[],n,r=!1){let i=G,a={...G};a.cursorFlags=e,a.state===`active`&&(a.didPointerMove||=r,a.previews=t,n&&(a.previewLayoutMap=n)),G=a,Kt.emit(`change`,{prev:i,next:a})}function A(e){let t=G;G=e,t.state===`active`&&e.state!==`active`&&t.didPointerMove&&t.hitRegions.forEach(({separator:e})=>{e&&e.element.ownerDocument.activeElement===e.element&&e.element.blur()}),Kt.emit(`change`,{prev:t,next:e})}function me(e){G.state!==`active`||!G.previews.some(t=>t.separator===e)||A({...G,previews:G.previews.map(t=>t.separator===e?{...t}:t)})}function he(e){if(G.state===`inactive`)return!1;let t=G.hitRegions.filter(t=>t.axis!==e),n=G.state===`active`&&G.previews.some(t=>t.axis===e);if(t.length===G.hitRegions.length&&!n)return!1;if(t.length===0)A({cursorFlags:0,state:`inactive`});else if(G.state===`active`){let n=new Map(G.initialLayoutMap),r=new Map(G.previewLayoutMap);n.delete(e),r.delete(e),A({...G,cursorFlags:0,hitRegions:t,initialLayoutMap:n,previewLayoutMap:r,previews:G.previews.filter(t=>t.axis!==e)})}else A({...G,hitRegions:t});return!0}function ge(){return tn===void 0&&(tn=!1,typeof window<`u`&&(window.navigator.userAgent.includes(`Chrome`)||window.navigator.userAgent.includes(`Firefox`))&&(tn=!0)),tn}function _e({cursorFlags:e,axes:t,state:n}){let r=0,i=0;switch(n){case`active`:case`hover`:t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case`horizontal`:r++;break;case`vertical`:i++}})}if(r!==0||i!==0){if(n===`active`&&e&&ge()){let t=(e&Yt)!==0,n=(e&Xt)!==0,r=(e&Zt)!==0,i=(e&Qt)!==0;if(t)return r?`se-resize`:i?`ne-resize`:`e-resize`;if(n)return r?`sw-resize`:i?`nw-resize`:`w-resize`;if(r)return`s-resize`;if(i)return`n-resize`}return ge()?r>0&&i>0?`move`:r>0?`ew-resize`:`ns-resize`:r>0&&i>0?`grab`:r>0?`col-resize`:`row-resize`}}function ve(e){if(!e.defaultView||!e.adoptedStyleSheets)return;let{prevStyle:t,styleSheet:n}=nn.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(n):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]));let r=k();switch(r.state){case`active`:case`hover`:{let e=_e({cursorFlags:r.cursorFlags,axes:r.hitRegions.map(e=>e.axis),state:r.state}),i=`*, *:hover {cursor: ${e} !important; }`;if(t===i)return;t=i,e?n.cssRules.length===0?n.insertRule(i):n.replaceSync(i):n.cssRules.length===1&&n.deleteRule(0);break}case`inactive`:t=void 0,n.cssRules.length===1&&n.deleteRule(0)}nn.set(e,{prevStyle:t,styleSheet:n})}function ye({axis:e}){let{layoutStrategy:t,orientation:n,items:r}=e;return t?t.calculateAvailableSize():r.reduce((e,t)=>(e+=n===`horizontal`?t.element.offsetWidth:t.element.offsetHeight,e),0)}function be(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_DISCONNECTED?0:n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function xe(e,t){return Array.from(t).sort((t,n)=>{let r=e===`horizontal`?Se(t,n):Ce(t,n);return r===0?be(t.element,n.element):r})}function Se(e,t){let n=e.element.offsetLeft-t.element.offsetLeft;return n===0?e.element.offsetWidth-t.element.offsetWidth:n}function Ce(e,t){let n=e.element.offsetTop-t.element.offsetTop;return n===0?e.element.offsetHeight-t.element.offsetHeight:n}function we(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE}function Te(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function Ee({orientation:e,rects:t,targetRect:n}){let r={x:n.x+n.width/2,y:n.y+n.height/2},i,a=Number.MAX_VALUE;for(let n of t){let{x:t,y:o}=Te(r,n),s=e===`horizontal`?t:o;s<a&&(a=s,i=n)}return O(i,`No rect found`),i}function De({expandHitTargets:e=!0,axis:t,includeDisabled:n=!1}){if(t.layoutStrategy)return t.layoutStrategy.calculateHitRegions({expandHitTargets:e,axis:t,includeDisabled:n});let{element:r,orientation:i,items:a,separators:o}=t,s=xe(i,Array.from(r.children).filter(we).filter(e=>!e.hasAttribute(`data-resize-preview`)).map(e=>({element:e}))).map(({element:e})=>e),c=[],l=!1,u=!1,d=-1,f,p=-1,m=0,h,g=[];{let e=-1;for(let t of s)t.hasAttribute(`data-panel`)&&(e++,t.hasAttribute(`data-disabled`)||(m++,d===-1&&(d=e),p=e))}if(n||m>1){let r=-1;for(let m of s)if(m.hasAttribute(`data-panel`)){r++;let o=a.find(e=>e.element===m);if(o){if(h){let a=h.element.getBoundingClientRect(),s=m.getBoundingClientRect(),_;if(u){let e=i===`horizontal`?new DOMRect(a.right,a.top,0,a.height):new DOMRect(a.left,a.bottom,a.width,0),t=i===`horizontal`?new DOMRect(s.left,s.top,0,s.height):new DOMRect(s.left,s.top,s.width,0);switch(g.length){case 0:_=[e,t];break;case 1:{let n=g[0];_=[n,Ee({orientation:i,rects:[a,s],targetRect:n.element.getBoundingClientRect()})===a?t:e];break}default:_=g}}else _=g.length?g:[i===`horizontal`?new DOMRect(a.right,s.top,s.left-a.right,s.height):new DOMRect(s.left,a.bottom,s.width,s.top-a.bottom)];for(let i of _){let a=ue({expandHitTargets:e,axis:t,rect:`width`in i?i:i.element.getBoundingClientRect()});(n||!l&&!(r<=d||r>p))&&(f??=ye({axis:t}),c.push({axis:t,axisSize:f,items:[h,o],separator:`width`in i?void 0:i,rect:a})),l=!1}}u=!1,h=o,g=[]}}else if(m.hasAttribute(`data-separator`)){m.ariaDisabled!==null&&(l=!0);let e=o.find(e=>e.element===m);e?g.push(e):(h=void 0,g=[])}else u=!0}return c}function Oe(e,t){let n=getComputedStyle(e);return t*parseFloat(n.fontSize)}function ke(e,t){let n=getComputedStyle(e.ownerDocument.documentElement);return t*parseFloat(n.fontSize)}function Ae(e){return e/100*window.innerHeight}function je(e){return e/100*window.innerWidth}function j({axisSize:e,itemElement:t,styleProp:n}){let r,[i,a]=de(n);switch(a){case`%`:r=i/100*e;break;case`px`:r=i;break;case`rem`:r=ke(t,i);break;case`em`:r=Oe(t,i);break;case`vh`:r=Ae(i);break;case`vw`:r=je(i)}return r}function M(e){return parseFloat(e.toFixed(3))}function Me(e){let{items:t}=e,n=ye({axis:e});return n===0?t.map(e=>({groupResizeBehavior:e.constraintProps.groupResizeBehavior,collapsedSize:0,collapsible:e.constraintProps.collapsible===!0,defaultSize:void 0,disabled:e.constraintProps.disabled,minSize:0,maxSize:100,itemId:e.id})):t.map(e=>{let{element:t,constraintProps:r}=e,i=0;r.collapsedSize!==void 0&&(i=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedSize})/n*100));let a;r.collapsedThreshold!==void 0&&(a=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedThreshold})/n*100));let o;r.defaultSize!==void 0&&(o=M(j({axisSize:n,itemElement:t,styleProp:r.defaultSize})/n*100));let s=0;r.minSize!==void 0&&(s=M(j({axisSize:n,itemElement:t,styleProp:r.minSize})/n*100));let c=100;return r.maxSize!==void 0&&(c=M(j({axisSize:n,itemElement:t,styleProp:r.maxSize})/n*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:i,collapsedThreshold:a,collapsible:r.collapsible===!0,defaultSize:o,disabled:r.disabled,minSize:s,maxSize:c,itemId:e.id}})}function Ne(e){K=new Map(K),K.delete(e)}function Pe(e,t){for(let[t]of K)if(t.id===e)return t}function N(e,t){for(let[t,n]of K)if(t.id===e)return n;if(t)throw Error(`Could not find data for Group with id ${e}`)}function P(){return K}function Fe(e,t){return rn.addListener(`axisChange`,n=>{n.axis.id===e&&t(n)})}function F(e,t,n){let r=K.get(e);K=new Map(K),K.set(e,t),rn.emit(`axisChange`,{axis:e,isUserInteraction:n?.isUserInteraction===!0,prev:r,next:t})}function Ie(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function I(e,t,n=0){return Math.abs(M(e)-M(t))<=n}function L(e,t){return I(e,t)?0:e>t?1:-1}function R({overrideDisabledItems:e,itemConstraints:t,prevSize:n,size:r}){let{collapsedSize:i=0,collapsedThreshold:a,collapsible:o,disabled:s,maxSize:c=100,minSize:l=0}=t;if(s&&!e)return n;if(L(r,l)<0){if(o){let e=a??(l-i)/2,t=L(n,i)<=0,o=t?i+e:l-e,s=L(r,o);r=L(r,i)<=0||s<0||a!==void 0&&t&&s===0?i:l}else r=l}return r=Math.min(c,r),r=M(r),r}function Le({delta:e,initialLayout:t,itemConstraints:n,pivotIndices:r,prevLayout:i,trigger:a}){if(I(e,0))return t;let o=a===`imperative-api`,s=n.map(({itemId:e})=>t[e]),c=n.map(({itemId:e})=>i[e]),l=[...s],[u,d]=r;O(u!=null,`Invalid first pivot index`),O(d!=null,`Invalid second pivot index`);let f=0;switch(a){case`keyboard`:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,i)){let t=o-n;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:d,r=n[t];O(r,`No panel constraints found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,o)){let t=n-i;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}break;default:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let i=s[t],{collapsedSize:a,collapsedThreshold:o,collapsible:c,minSize:l}=r;if(c&&L(i,l)<0){let t=l-a,n=o??t/2;if(L(i+Math.abs(e),l)<0){let r=L(Math.abs(e),n);e=r>0||r===0&&o===void 0&&e<0?e<0?-t:t:0}}break}}{let t=e<0?1:-1,r=e<0?d:u,i=0;for(;;){let e=s[r];O(e!=null,`Previous layout not found for panel index ${r}`);let a=R({overrideDisabledItems:o,itemConstraints:n[r],prevSize:e,size:100})-e;if(i+=a,r+=t,r<0||r>=n.length)break}let a=Math.min(Math.abs(e),Math.abs(i));e=e<0?0-a:a}{let t=e<0?u:d;for(;t>=0&&t<n.length;){let r=Math.abs(e)-Math.abs(f),i=s[t];O(i!=null,`Previous layout not found for panel index ${t}`);let a=i-r,c=R({overrideDisabledItems:o,itemConstraints:n[t],prevSize:i,size:a});if(!I(i,c)&&(f+=i-c,l[t]=c,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(Ie(c,l))return i;{let t=e<0?d:u,r=s[t];O(r!=null,`Previous layout not found for panel index ${t}`);let i=r+f,a=R({overrideDisabledItems:o,itemConstraints:n[t],prevSize:r,size:i});if(l[t]=a,!I(a,i)){let t=i-a,r=e<0?d:u;for(;r>=0&&r<n.length;){let i=l[r];O(i!=null,`Previous layout not found for panel index ${r}`);let a=i+t,s=R({overrideDisabledItems:o,itemConstraints:n[r],prevSize:i,size:a});if(I(i,s)||(t-=s-i,l[r]=s),I(t,0))break;e>0?r--:r++}}}return I(Object.values(l).reduce((e,t)=>t+e,0),100,.1)?l.reduce((e,t,r)=>(e[n[r].itemId]=t,e),{}):i}function z(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(t[n]===void 0||L(e[n],t[n])!==0)return!1;return!0}function Re({commit:e,document:t,event:n,hitRegions:r,initialLayoutMap:i,mountedAxes:a,pointerDownAtPoint:o,prevCursorFlags:s}){let c=0,l=k(),u=l.state===`active`?l.previews:[],d=new Map(l.state===`active`?l.previewLayoutMap:void 0);r.forEach(t=>{let{axis:r,axisSize:s}=t,{orientation:l,items:f}=r;if(e&&r.resizePreviewMode!==`separator`)return;let{disableCursor:p}=r.mutableState,m=0;m=o?l===`horizontal`?(n.clientX-o.x)/s*100:(n.clientY-o.y)/s*100:l===`horizontal`?n.clientX<0?-100:100:n.clientY<0?-100:100;let h=i.get(r),g=a.get(r);if(!h||!g)return;let{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:b,separatorToItems:x}=g;if(v&&b&&x){let n=r.resizePreviewMode===`separator`?d.get(r)??b:b,i=Le({delta:m,initialLayout:h,itemConstraints:v,pivotIndices:t.items.map(e=>f.indexOf(e)),prevLayout:n,trigger:`mouse-or-touch`});if(r.resizePreviewMode===`separator`&&!e&&!z(i,n)){d.set(r,i);let e=0,t=f.map(t=>(e+=i[t.id]-h[t.id],s/100*e));u=u.map(e=>{if(e.axis!==r)return e;let n=t[e.itemIndex];return n===e.offset?e:{...e,offset:n}})}if(z(i,n)&&m!==0&&!p)switch(l){case`horizontal`:c|=m<0?Yt:Xt;break;case`vertical`:c|=m<0?Zt:Qt}(r.resizePreviewMode!==`separator`||e)&&!z(i,b)&&F(t.axis,{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:i,requestedAxisSize:y,requestedLayout:i,separatorToItems:x})}});let f=0;n.movementX===0?f|=s&$t:f|=c&$t,n.movementY===0?f|=s&en:f|=c&en;let p=l.state===`active`&&(n.clientX!==l.pointerDownAtPoint.x||n.clientY!==l.pointerDownAtPoint.y);pe(f,u,d,p),ve(t)}function ze(e,t){let n=k(),r=P(),i=!1;return n.state===`active`&&(Re({commit:!0,document:e,event:t,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags}),A({cursorFlags:0,state:`inactive`}),n.hitRegions.length>0&&(ve(e),i=!0,n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})}))),i}function Be(e){e.defaultPrevented||ze(e.currentTarget,e)}function Ve(e,t,n){let r,i={x:1/0,y:1/0};for(let a of t){let t=Te(n,a.rect);switch(e){case`horizontal`:(t.x<i.x||t.x===i.x&&t.y<=i.y)&&(r=a,i=t);break;case`vertical`:(t.y<i.y||t.y===i.y&&t.x<=i.x)&&(r=a,i=t)}}return r?{distance:i,hitRegion:r}:void 0}function He(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function Ue(e,t){if(e===t)throw Error(`Cannot compare node with itself`);let n={a:Je(e),b:Je(t)},r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();O(r,`Stacking order can only be calculated for elements with a common ancestor`);let i={a:qe(Ke(n.a)),b:qe(Ke(n.b))};if(i.a===i.b){let e=r.childNodes,t={a:n.a.at(-1),b:n.b.at(-1)},i=e.length;for(;i--;){let n=e[i];if(n===t.a)return 1;if(n===t.b)return-1}}return Math.sign(i.a-i.b)}function We(e){let t=getComputedStyle(Ye(e)??e).display;return t===`flex`||t===`inline-flex`}function Ge(e){let t=getComputedStyle(e);return!!(t.position===`fixed`||t.zIndex!==`auto`&&(t.position!==`static`||We(e))||+t.opacity<1||`transform`in t&&t.transform!==`none`||`webkitTransform`in t&&t.webkitTransform!==`none`||`mixBlendMode`in t&&t.mixBlendMode!==`normal`||`filter`in t&&t.filter!==`none`||`webkitFilter`in t&&t.webkitFilter!==`none`||`isolation`in t&&t.isolation===`isolate`||an.test(t.willChange)||t.webkitOverflowScrolling===`touch`)}function Ke(e){let t=e.length;for(;t--;){let n=e[t];if(O(n,`Missing node`),Ge(n))return n}return null}function qe(e){return e&&Number(getComputedStyle(e).zIndex)||0}function Je(e){let t=[];for(;e;)t.push(e),e=Ye(e);return t}function Ye(e){let{parentNode:t}=e;return He(t)?t.host:t}function Xe(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function Ze(e){try{return e.matches(`:modal`)}catch{return!1}}function Qe({axisElement:e,hitRegion:t,pointerEventTarget:n}){if(we(n)){let t=n.closest(`dialog`);if(t&&!t.contains(e)&&Ze(t))return!1}if(!we(n)||n.contains(e)||e.contains(n))return!0;if(Ue(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(Xe(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function $e(e,t){let n=[];return t.forEach((t,r)=>{if(r.disabled)return;let i=De({axis:r}),a=Ve(r.orientation,i,{x:e.clientX,y:e.clientY});a&&a.distance.x<=0&&a.distance.y<=0&&Qe({axisElement:r.element,hitRegion:a.hitRegion.rect,pointerEventTarget:e.target})&&n.push(a.hitRegion)}),n}function B({layout:e,itemConstraints:t}){let n=t.map(({itemId:t})=>e[t]),r=[...n],i=r.reduce((e,t)=>e+t,0);if(Object.keys(e).length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${Object.values(e).map(e=>`${e}%`).join(`, `)}`);if(!I(i,100)&&r.length>0)for(let e=0;e<t.length;e++){let t=r[e];O(t!=null,`No layout data found for index ${e}`);let n=100/i*t;r[e]=n}let a=0;for(let e=0;e<t.length;e++){let i=n[e];O(i!=null,`No layout data found for index ${e}`);let o=r[e];O(o!=null,`No layout data found for index ${e}`);let s=R({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:i,size:o});o!=s&&(a+=o-s,r[e]=s)}if(!I(a,0))for(let e=0;e<t.length;e++){let n=r[e];O(n!=null,`No layout data found for index ${e}`);let i=n+a,o=R({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:n,size:i});if(n!==o&&(a-=o-n,r[e]=o,I(a,0)))break}return r.reduce((e,n,r)=>(e[t[r].itemId]=n,e),{})}function et({axisId:e,itemId:t}){let n=()=>{let t=P();for(let[n,{defaultLayoutDeferred:r,derivedItemConstraints:i,layout:a,axisSize:o,separatorToItems:s}]of t)if(n.id===e)return{defaultLayoutDeferred:r,derivedItemConstraints:i,axis:n,axisSize:o,layout:a,separatorToItems:s};throw Error(`Group ${e} not found`)},r=()=>{let e=n().derivedItemConstraints.find(e=>e.itemId===t);if(e!==void 0)return e;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{let e=n().axis.items.find(e=>e.id===t);if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},a=()=>{let e=n().layout[t];if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},o=({nextSize:e,items:n,prevLayout:r,derivedItemConstraints:i})=>{let o=a(),s=n.findIndex(e=>e.id===t),c=s===0,l=s===n.length-1;if(l&&e<o&&(c||n.slice(0,s).every((e,t)=>{let n=i[t];return n?.collapsible&&I(n.collapsedSize,r[n.itemId])}))){let e=n.slice(0,s).reduce((e,t)=>e+r[t.id],0);return{...r,[t]:M(100-e)}}return Le({delta:l?o-e:e-o,initialLayout:r,itemConstraints:i,pivotIndices:l?[s-1,s]:[s,s+1],prevLayout:r,trigger:`imperative-api`})},s=e=>{if(e===a())return;let{defaultLayoutDeferred:t,derivedItemConstraints:r,axis:i,axisSize:s,layout:c,separatorToItems:l}=n(),u=B({layout:o({nextSize:e,items:i.items,prevLayout:c,derivedItemConstraints:r}),itemConstraints:r});z(c,u)||F(i,{defaultLayoutDeferred:t,derivedItemConstraints:r,axisSize:s,layout:u,requestedAxisSize:s,requestedLayout:u,separatorToItems:l})};return{collapse:()=>{let{collapsible:e,collapsedSize:t}=r(),{mutableValues:n}=i(),o=a();e&&o!==t&&(n.expandToSize=o,s(t))},expand:()=>{let{collapsible:e,collapsedSize:t,minSize:n}=r(),{mutableValues:o}=i(),c=a();if(e&&c===t){let e=o.expandToSize??n;e===0&&(e=1),s(e)}},getSize:()=>{let{axis:e}=n(),r=a(),{element:o}=i();return{asPercentage:r,inPixels:e.layoutStrategy?e.layoutStrategy.getItemSizeInPixels(t):e.orientation===`horizontal`?o.offsetWidth:o.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=r(),n=a();return e&&I(t,n)},resize:e=>{let{axis:t}=n(),{element:r}=i(),a=ye({axis:t}),o=M(j({axisSize:a,itemElement:r,styleProp:e})/a*100);s(o)}}}function tt(e){e.defaultPrevented||$e(e,P()).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let n=t.items.find(e=>e.constraintProps.defaultSize!==void 0);if(n){let r=n.constraintProps.defaultSize,i=et({axisId:t.axis.id,itemId:n.id});i&&r!==void 0&&(i.resize(r),e.preventDefault())}}})}function nt(e){let t=P();for(let[n]of t)if(n.separators.some(t=>t.element===e))return n;throw Error(`Could not find parent Group for separator element`)}function rt({axisId:e}){let t=()=>{let t=P();for(let[n,r]of t)if(n.id===e)return{axis:n,...r};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:n}=t();return e?{}:n},setLayout(e){let{defaultLayoutDeferred:n,derivedItemConstraints:r,axis:i,axisSize:a,layout:o,separatorToItems:s}=t(),c=B({layout:e,itemConstraints:r});return n?o:(z(o,c)||F(i,{defaultLayoutDeferred:n,derivedItemConstraints:r,axisSize:a,layout:c,requestedAxisSize:a,requestedLayout:c,separatorToItems:s}),c)}}}function V(e,t){let n=nt(e),r=N(n.id,!0),i=n.separators.find(t=>t.element===e);O(i,`Matching separator not found`);let a=r.separatorToItems.get(i);O(a,`Matching panels not found`);let o=a.map(e=>n.items.indexOf(e)),s=rt({axisId:n.id}).getLayout(),c=B({layout:Le({delta:t,initialLayout:s,itemConstraints:r.derivedItemConstraints,pivotIndices:o,prevLayout:s,trigger:`keyboard`}),itemConstraints:r.derivedItemConstraints});z(s,c)||F(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedItemConstraints:r.derivedItemConstraints,axisSize:r.axisSize,layout:c,requestedAxisSize:r.axisSize,requestedLayout:c,separatorToItems:r.separatorToItems},{isUserInteraction:!0})}function it(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=nt(t);if(!(n.disabled||n.separators.find(e=>e.element===t)?.disabled))switch(e.key){case`ArrowDown`:e.preventDefault(),n.orientation===`vertical`&&V(t,5);break;case`ArrowLeft`:e.preventDefault(),n.orientation===`horizontal`&&V(t,-5);break;case`ArrowRight`:e.preventDefault(),n.orientation===`horizontal`&&V(t,5);break;case`ArrowUp`:e.preventDefault(),n.orientation===`vertical`&&V(t,-5);break;case`End`:e.preventDefault(),V(t,100);break;case`Enter`:{e.preventDefault();let{derivedItemConstraints:r,layout:i,separatorToItems:a}=N(n.id,!0),o=n.separators.find(e=>e.element===t);O(o,`Matching separator not found`);let s=a.get(o);O(s,`Matching panels not found`);let c=s[0],l=r.find(e=>e.itemId===c.id);if(O(l,`Panel metadata not found`),l.collapsible){let e=i[c.id];V(t,(l.collapsedSize===e?n.mutableState.expandedItemSizes[c.id]??l.minSize:l.collapsedSize)-e)}break}case`F6`:{e.preventDefault();let t=n.separators.map(e=>e.element),r=Array.from(t).findIndex(t=>t===e.currentTarget);O(r!==null,`Index not found`),t[e.shiftKey?r>0?r-1:t.length-1:r+1<t.length?r+1:0].focus({preventScroll:!0});break}case`Home`:e.preventDefault(),V(t,-100)}}function at(e,t){let{element:n,orientation:r,items:i}=e,a=n.getBoundingClientRect(),o=r===`horizontal`;return De({expandHitTargets:!1,axis:e,includeDisabled:!0}).map(({items:r,rect:s,separator:c},l)=>{let u=i.indexOf(r[0]),d=o?s.left+s.width/2:s.top+s.height/2;return{active:t.some(t=>{if(t.axis!==e||t.items[0]!==r[0])return!1;if(c||t.separator)return t.separator===c;let n=o?t.rect.left+t.rect.width/2:t.rect.top+t.rect.height/2;return I(d,n)}),axis:e,key:c?`separator-${c.id}`:`panel-${r[0].id}-${l}`,offset:0,itemIndex:u,rect:new DOMRect((o&&!c?d:s.left)-a.left-n.clientLeft+n.scrollLeft,(!o&&!c?d:s.top)-a.top-n.clientTop+n.scrollTop,o&&!c?0:s.width,!o&&!c?0:s.height),separator:c}})}function ot(e){if(e.defaultPrevented||e.pointerType===`mouse`&&e.button>0)return;let t=P(),n=$e(e,t);if(n.length===0)return;let r=new Map,i=!1;n.forEach(e=>{e.separator&&(i||(i=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let n=t.get(e.axis);n&&r.set(e.axis,n.layout)});let a=Array.from(r.keys()).flatMap(e=>e.resizePreviewMode===`separator`?at(e,n):[]);A({cursorFlags:0,didPointerMove:!1,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},previewLayoutMap:new Map(r),previews:a,state:`active`}),e.preventDefault()}function st(e){let t=P(),n=k();n.state===`active`&&Re({commit:!1,document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:t,prevCursorFlags:n.cursorFlags})}function ct(e){if(e.defaultPrevented)return;let t=k(),n=P();switch(t.state){case`active`:if(e.buttons===0){t.previewLayoutMap.forEach((e,t)=>{let r=n.get(t);t.resizePreviewMode===`separator`&&r&&!z(e,r.layout)&&F(t,{...r,layout:e,requestedAxisSize:r.axisSize,requestedLayout:e})}),A({cursorFlags:0,state:`inactive`}),t.hitRegions.forEach(e=>{if(!n.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})}),ve(e.currentTarget);return}for(let n of t.hitRegions)if(n.separator){let{element:t}=n.separator;t.isConnected&&!t.hasPointerCapture?.(e.pointerId)&&t.setPointerCapture?.(e.pointerId)}Re({commit:!1,document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedAxes:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break;default:{let r=$e(e,n);r.length===0?t.state!==`inactive`&&A({cursorFlags:0,state:`inactive`}):A({cursorFlags:0,hitRegions:r,state:`hover`}),ve(e.currentTarget);break}}}function lt(e){if(e.relatedTarget instanceof HTMLIFrameElement)switch(k().state){case`hover`:A({cursorFlags:0,state:`inactive`})}}function ut(e){e.defaultPrevented||e.pointerType===`mouse`&&e.button>0||ze(e.currentTarget,e)&&e.preventDefault()}function dt(e){let t=0,n=0,r={};for(let i of e)if(i.defaultSize!==void 0){t++;let e=M(i.defaultSize);n+=e,r[i.itemId]=e}else r[i.itemId]=void 0;let i=e.length-t;if(i!==0){let t=M((100-n)/i);for(let n of e)n.defaultSize===void 0&&(r[n.itemId]=t)}return r}function ft(e,t){let n=e.map(e=>e.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(let e of n)if(!r.includes(e))return!1;return!0}function pt({axis:e,itemConstraints:t}){let n=e.items.map(({id:e})=>e).join(`,`),r=e.mutableState.defaultLayout;return e.mutableState.layouts[n]??(r&&ft(e.items,r)?r:dt(t))}function mt({itemIds:e,layout:t}){return B({layout:t,itemConstraints:e.map(e=>({collapsedSize:0,collapsible:!1,defaultSize:void 0,disabled:void 0,itemId:e,maxSize:100,minSize:0}))})}function ht(e,t,n){if(!n[0])return;let r=e.items.find(e=>e.element===t);if(!r||!r.onResize)return;let i=ye({axis:e}),a=e.orientation===`horizontal`?r.element.offsetWidth:r.element.offsetHeight,o=r.mutableValues.prevSize,s={asPercentage:M(a/i*100),inPixels:a};r.mutableValues.prevSize=s,r.onResize(s,r.id,o)}function gt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function _t(e,t){return e.length===t.length&&e.every((e,n)=>gt(e,t[n]))}function vt({axis:e,nextAxisSize:t,prevAxisSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,a=0,o=!1,s=new Map,c=[];for(let l of e.items){let e=r[l.id]??0;switch(l.constraintProps.groupResizeBehavior){case`preserve-pixel-size`:{o=!0;let r=M(e/100*n/t*100);s.set(l.id,r),i+=r;break}default:c.push(l.id),a+=e}}if(!o||c.length===0)return r;let l=100-i,u={...r};if(s.forEach((e,t)=>{u[t]=e}),a>0)for(let e of c)u[e]=M((r[e]??0)/a*l);else{let e=M(l/c.length);for(let t of c)u[t]=e}return u}function yt(e){let t=!0;O(e.element.ownerDocument.defaultView,`Cannot register an unmounted Group`);let n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,a=new n(n=>{for(let r of n){let{borderBoxSize:n,target:i}=r;if(i===e.element){if(t){let t=ye({axis:e});if(t===0)return;let n=N(e.id);if(!n)return;let r=Me(e),i=n.requestedAxisSize,a=n.requestedLayout;n.defaultLayoutDeferred&&(i=t,a=mt({itemIds:e.items.map(({id:e})=>e),layout:pt({axis:e,itemConstraints:r})}));let o=B({layout:vt({axis:e,nextAxisSize:t,prevAxisSize:i,prevLayout:a}),itemConstraints:r});if(!n.defaultLayoutDeferred&&z(n.layout,o)&&_t(n.derivedItemConstraints,r)&&n.axisSize===t)continue;F(e,{defaultLayoutDeferred:!1,derivedItemConstraints:r,axisSize:t,layout:o,requestedAxisSize:i,requestedLayout:a,separatorToItems:n.separatorToItems})}}else ht(e,i,n)}});a.observe(e.element),e.items.forEach(e=>{O(!r.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.onResize&&a.observe(e.element)});let o=ye({axis:e}),s=Me(e),c=pt({axis:e,itemConstraints:s}),l=B({layout:c,itemConstraints:s}),u=e.element.ownerDocument;q.set(u,(q.get(u)??0)+1);let d=new Map;return De({axis:e,includeDisabled:!0}).forEach(e=>{e.separator&&d.set(e.separator,e.items)}),F(e,{defaultLayoutDeferred:o===0,derivedItemConstraints:s,axisSize:o,layout:l,requestedAxisSize:o,requestedLayout:mt({itemIds:e.items.map(({id:e})=>e),layout:c}),separatorToItems:d}),e.separators.forEach(e=>{O(!i.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),i.add(e.id),e.element.addEventListener(`keydown`,it)}),q.get(u)===1&&(u.addEventListener(`contextmenu`,Be,!0),u.addEventListener(`dblclick`,tt,!0),u.addEventListener(`pointerdown`,ot,!0),u.addEventListener(`pointerleave`,st),u.addEventListener(`pointermove`,ct),u.addEventListener(`pointerout`,lt),u.addEventListener(`pointerup`,ut,!0)),function(){t=!1,q.set(u,Math.max(0,(q.get(u)??0)-1)),Ne(e),he(e)&&ve(u),e.separators.forEach(e=>{e.element.removeEventListener(`keydown`,it)}),q.get(u)||(u.removeEventListener(`contextmenu`,Be,!0),u.removeEventListener(`dblclick`,tt,!0),u.removeEventListener(`pointerdown`,ot,!0),u.removeEventListener(`pointerleave`,st),u.removeEventListener(`pointermove`,ct),u.removeEventListener(`pointerout`,lt),u.removeEventListener(`pointerup`,ut,!0)),a.disconnect()}}function bt({derivedItemConstraints:e,axis:t,layout:n,prevLayout:r,requestedLayout:i}){let a=t.items.map(({id:e})=>e).join(`,`);t.mutableState.layouts[a]=i,r&&e.forEach(e=>{if(e.collapsible){let i=I(e.collapsedSize,n[e.itemId]),a=I(e.collapsedSize,r[e.itemId]);i&&!a&&(t.mutableState.expandedItemSizes[e.itemId]=r[e.itemId])}})}function xt(){let[e,t]=(0,U.useState)({});return[e,(0,U.useCallback)(()=>t({}),[])]}function St(e){let t=(0,U.useRef)({...e});return W(()=>{for(let n in e)t.current[n]=e[n]},[e]),t.current}function Ct({layout:e,itemConstraints:t,itemId:n,itemIndex:r}){let i,a,o=e[n],s=t.find(e=>e.itemId===n);if(s){let c=s.maxSize,l=s.collapsible?s.collapsedSize:s.minSize,u=[r,r+1];a=B({layout:Le({delta:l-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n],i=B({layout:Le({delta:c-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:a,valueNow:o}}function wt({attributes:e,axisId:t,axisOrientation:n,children:r,className:i,disableCursor:a,disabled:o,disableDoubleClick:s,elementRef:c,id:l,isSharedHitRegion:u,preview:d,registerSeparator:f,requiredStyle:p,style:m,styleDefaults:h,tabIndex:g=0,updateSeparatorProps:_}){let v=St({disabled:o,disableDoubleClick:s,children:r,className:i,preview:d,style:m}),[y,b]=(0,U.useState)({}),[x,ee]=(0,U.useState)(`inactive`),[te,S]=(0,U.useState)(!1),C=(0,U.useRef)(null),w=(0,U.useRef)(null),ne=ce(C,c),T=n===`horizontal`?`vertical`:`horizontal`;W(()=>{let e=C.current;if(e!==null){let n={disabled:v.disabled,disableDoubleClick:v.disableDoubleClick,element:e,id:l,get children(){return v.children},get className(){return v.className},get preview(){return v.preview},get style(){return v.style}};w.current=n;let r=f(n),i=fe(e=>{ee(e.next.state!==`inactive`&&e.next.hitRegions.some(e=>e.separator===n||(u?.(e)??!1))?e.next.state:`inactive`)}),a=Fe(t,e=>{let{derivedItemConstraints:t,layout:r,separatorToItems:i}=e.next,a=i.get(n);if(a){let n=a[0],i=t.findIndex(e=>e.itemId===n.id),{layoutStrategy:o}=e.axis;b({...Ct({layout:r,itemConstraints:t,itemId:n.id,itemIndex:i}),...o?.getItemAriaControls&&{valueControls:o.getItemAriaControls(n.id)}})}});return()=>{w.current=null,i(),a(),r()}}},[t,l,u,f,v]),W(()=>{let e=w.current;e&&me(e)},[d]),(0,U.useEffect)(()=>{_(l,{disabled:o,disableDoubleClick:s})},[o,s,l,_]);let E;o&&!a&&(E=`not-allowed`);let D;if(o)D=`disabled`;else switch(x){case`active`:D=`active`;break;default:D=te?`focus`:x}return(0,H.jsx)(`div`,{...e,"aria-controls":y.valueControls,"aria-disabled":o||void 0,"aria-orientation":T,"aria-valuemax":y.valueMax,"aria-valuemin":y.valueMin,"aria-valuenow":y.valueNow,children:r,className:i,"data-separator":D,"data-testid":l,id:l,onBlur:()=>S(!1),onFocus:()=>S(!0),ref:ne,role:`separator`,style:{...h,cursor:E,...m,...p,touchAction:`none`},tabIndex:o?void 0:g})}function Tt(e){for(let t=1;t<e.length;t++)if(be(e[t-1],e[t])>0)return!1;return!0}function Et({separator:e}){let{element:t}=e,n=(0,U.useRef)(null);return W(()=>{let e=t.cloneNode(!0),r=[t,...t.querySelectorAll(`*`)],i=[e,...e.querySelectorAll(`*`)],a=t.ownerDocument.defaultView;return r.forEach((e,t)=>{let n=i[t];if(n instanceof a.HTMLElement||n instanceof a.SVGElement){let t=a.getComputedStyle(e);for(let e=0;e<t.length;e++){let r=t.item(e);n.style.setProperty(r,t.getPropertyValue(r))}}n.removeAttribute(`data-testid`),n.removeAttribute(`id`)}),Object.assign(e.style,{boxSizing:`border-box`,height:`100%`,margin:`0`,position:`static`,transform:`none`,width:`100%`}),n.current.appendChild(e),()=>e.remove()},[t]),(0,H.jsx)(`div`,{ref:n,style:{height:`100%`,opacity:.65,pointerEvents:`none`,width:`100%`}})}function Dt(){let e=(0,U.useContext)(on);return O(e,`Group Context not found; did you render a Panel or Separator outside of a Group?`),e}function Ot(e){let{registerOverlay:t}=Dt(),n=(0,U.useRef)(e);gt(n.current,e)||(n.current=e);let r=n.current;return W(()=>t(r),[t,r]),null}function kt({active:e,orientation:t,style:n,...r}){let i;switch(t){case`horizontal`:i={height:`100%`,minWidth:`1px`};break;case`vertical`:i={minHeight:`1px`,width:`100%`}}return(0,H.jsx)(`div`,{...r,"data-separator-overlay":e?`active`:`inactive`,style:{...i,...n,flexShrink:0,pointerEvents:`none`}})}function At({overlay:e,preview:t}){let{axis:n,offset:r,rect:i,separator:a}=t,o=n.orientation===`horizontal`,s=a?.preview,c=e;return(0,U.isValidElement)(s)&&s.type===Ot&&(c=s.props,s=void 0),s??(c?s=(0,H.jsx)(kt,{...c,active:t.active,orientation:n.orientation}):a&&(s=(0,H.jsx)(Et,{separator:a}))),(0,H.jsx)(`div`,{"aria-hidden":`true`,"data-resize-preview":!0,inert:!0,style:{height:i.height,left:i.left,pointerEvents:`none`,position:`absolute`,top:i.top,transform:o?`translateX(${r}px)`:`translateY(${r}px)`,width:i.width},children:s})}function jt(e){return Array.from(e).sort(be)}function Mt(e,t){let n=(0,U.useRef)({getLayout:()=>({}),setLayout:qt});(0,U.useImperativeHandle)(t,()=>n.current,[]),W(()=>{Object.assign(n.current,rt({axisId:e}))})}function Nt({groupId:e,resizePreviewMode:t}){let[n,r]=(0,U.useState)([]),i=(0,U.useRef)(n);return W(()=>{let n=n=>{let a=Pe(e),o=t===`separator`&&n.state===`active`?n.previews.filter(e=>e.axis===a&&(e.active||!I(e.offset,0))):[],s=i.current;s.length===o.length&&o.every((e,t)=>e===s[t])||(i.current=o,r(o))};if(t!==`separator`){n(k());return}let a=fe(({next:e})=>n(e));return n(k()),a},[e,t]),n}function Pt({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:a,groupRef:o,id:s,onLayoutChange:c,onLayoutChanged:l,orientation:u=`horizontal`,resizePreviewMode:d=`panel`,resizeTargetMinimumSize:f={coarse:20,fine:10},style:p,...m}){let h=(0,U.useRef)({onLayoutChange:{},onLayoutChanged:{}}),g=se(e=>{z(h.current.onLayoutChange,e)||(h.current.onLayoutChange=e,c?.(e))}),_=se((e,t,n)=>{z(h.current.onLayoutChanged,e)||(h.current.onLayoutChanged=e,l?.(e,{isUserInteraction:t,requestedLayout:n}))}),v=oe(s),[y,b]=(0,U.useState)(),x=Nt({groupId:v,resizePreviewMode:d}),ee=(0,U.useRef)(null),[te,S]=xt(),C=(0,U.useRef)([]),w=(0,U.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],separators:[]}),ne=ce(ee,a);Mt(v,o);let T=se((e,t)=>{let r=N(e);if(r)return{flexGrow:r.layout[t]??1};if(n?.[t])return{flexGrow:n?.[t]}}),E=St({defaultLayout:n,disableCursor:r,resizeTargetMinimumSize:f}),D=(0,U.useMemo)(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:v,orientation:u,registerPanel:e=>{let t=w.current;return t.panels=xe(u,[...t.panels,e]),S(),()=>{t.panels=t.panels.filter(t=>t!==e),S()}},registerOverlay:e=>(b(e),()=>{b(void 0)}),registerSeparator:e=>{let t=w.current;return t.separators=xe(u,[...t.separators,e]),S(),()=>{t.separators=t.separators.filter(t=>t!==e),S()}},updatePanelProps:(e,{disabled:t})=>{let n=w.current.panels.find(t=>t.id===e);n&&(n.constraintProps.disabled=t);let r=Pe(v),i=N(v);r&&i&&F(r,{...i,derivedItemConstraints:Me(r)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:n})=>{let r=w.current.separators.find(t=>t.id===e);r&&(r.disabled=t,r.disableDoubleClick=n)}}),[T,v,S,u,E]),re=(0,U.useRef)(null);return W(()=>{let e=ee.current;if(e===null)return;let t=w.current;t.panels=xe(u,t.panels),t.separators=xe(u,t.separators),C.current=jt([...t.panels.map(({element:e})=>e),...t.separators.map(({element:e})=>e)]);let n;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===t.panels.length){n={};for(let e of t.panels){let t=E.defaultLayout[e.id];t!==void 0&&(n[e.id]=t)}}let r={disabled:!!i,element:e,id:v,mutableState:{defaultLayout:n,disableCursor:!!E.disableCursor,expandedItemSizes:w.current.lastExpandedPanelSizes,layouts:w.current.layouts},orientation:u,items:t.panels,resizePreviewMode:d,get resizeTargetMinimumSize(){return E.resizeTargetMinimumSize},separators:t.separators};re.current=r;let a=yt(r),{defaultLayoutDeferred:o,derivedItemConstraints:s,layout:c,requestedLayout:l}=N(r.id,!0);!o&&s.length>0&&(g(c),_(c,!1,l));let f=Fe(v,e=>{let{defaultLayoutDeferred:t,derivedItemConstraints:n,layout:i,requestedLayout:a}=e.next;if(t||n.length===0)return;bt({derivedItemConstraints:n,axis:r,layout:i,prevLayout:e.prev?.layout,requestedLayout:a});let o=k(),s=o.state!==`active`||!o.hitRegions.some(e=>e.axis===r);g(i),s&&_(i,e.isUserInteraction,a)});return()=>{re.current=null,a(),f()}},[i,v,_,g,u,te,d,E]),W(()=>{Tt(C.current)||S()}),(0,U.useEffect)(()=>{let e=re.current;e&&(e.mutableState.defaultLayout=n,e.mutableState.disableCursor=!!r)}),(0,H.jsx)(on.Provider,{value:D,children:(0,H.jsxs)(`div`,{...m,className:t,"data-group":!0,"data-testid":v,id:v,ref:ne,style:{height:`100%`,width:`100%`,overflow:`hidden`,position:d===`separator`?`relative`:void 0,...p,display:`flex`,flexDirection:u===`horizontal`?`row`:`column`,flexWrap:`nowrap`,touchAction:u===`horizontal`?`pan-y`:`pan-x`},children:[e,x.map(e=>(0,H.jsx)(At,{overlay:y,preview:e},e.key))]})})}function Ft(e,t){return`react-resizable-panels:${[e,...t].join(`:`)}`}function It({id:e,panelIds:t,storage:n}){let r=Ft(e,[]),i=n.getItem(r);if(i)try{let e=JSON.parse(i);if(t){let n=e[t.join(`,`)];if(n&&Array.isArray(n.layout)&&t.length===n.layout.length){let e={};for(let r=0;r<t.length;r++)e[t[r]]=n.layout[r];return e}}else{let t=Object.keys(e);if(t.length===1){let n=e[t[0]];if(n&&Array.isArray(n.layout)){let e=t[0].split(`,`);if(e.length===n.layout.length){let t={};for(let r=0;r<e.length;r++)t[e[r]]=n.layout[r];return t}}}}}catch{}}function Lt({debounceSaveMs:e=100,onlySaveAfterUserInteractions:t,panelIds:n,storage:r=localStorage,...i}){let a=n!==void 0,o=`id`in i?i.id:i.groupId,s=Ft(o,n??[]),c=(0,U.useSyncExternalStore)(Rt,()=>r.getItem(s),()=>r.getItem(s)),l=(0,U.useMemo)(()=>{if(c){let e=JSON.parse(c),t=Object.values(e);if(Array.from(t).every(e=>typeof e==`number`))return e}},[c]),u=(0,U.useMemo)(()=>{if(!l)return It({id:o,panelIds:n,storage:r})},[l,o,n,r]),d=l??u,f=(0,U.useRef)(null),p=(0,U.useCallback)(()=>{let e=f.current;e&&(f.current=null,clearTimeout(e))},[]);(0,U.useLayoutEffect)(()=>()=>{p()},[p]);let m=(0,U.useCallback)((e,n)=>{if(t&&!n.isUserInteraction)return;p();let i=n.requestedLayout??e,s;s=a?Ft(o,Object.keys(i)):Ft(o,[]);try{r.setItem(s,JSON.stringify(i))}catch(e){console.error(e)}},[p,a,o,t,r]);return{defaultLayout:d,onLayoutChange:(0,U.useCallback)(t=>{p(),e===0?m(t,{isUserInteraction:!1}):f.current=setTimeout(()=>{m(t,{isUserInteraction:!1})},e)},[p,e,m]),onLayoutChanged:m}}function Rt(){return function(){}}function zt(){return(0,U.useRef)(null)}function Bt(e,t){let{id:n}=Dt(),r=(0,U.useRef)({collapse:Jt,expand:Jt,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Jt});(0,U.useImperativeHandle)(t,()=>r.current,[]),W(()=>{Object.assign(r.current,et({axisId:n,itemId:e}))})}function Vt({children:e,className:t,collapsedSize:n=`0%`,collapsedThreshold:r,collapsible:i=!1,defaultSize:a,disabled:o,elementRef:s,groupResizeBehavior:c=`preserve-relative-size`,id:l,maxSize:u=`100%`,minSize:d=`0%`,onResize:f,panelRef:p,style:m,...h}){let g=!!l,_=oe(l),v=St({disabled:o}),y=(0,U.useRef)(null),b=ce(y,s),{getPanelStyles:x,id:ee,orientation:te,registerPanel:S,updatePanelProps:C}=Dt(),w=f!==null,ne=se((e,t,n)=>{f?.(e,l,n)});W(()=>{let e=y.current;if(e!==null){let t={element:e,id:_,idIsStable:g,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:w?ne:void 0,constraintProps:{groupResizeBehavior:c,collapsedSize:n,collapsedThreshold:r,collapsible:i,defaultSize:a,disabled:v.disabled,maxSize:u,minSize:d}};return S(t)}},[c,n,r,i,a,w,_,g,u,d,ne,S,v]),(0,U.useEffect)(()=>{C(_,{disabled:o})},[o,_,C]),Bt(_,p);let T=()=>{let e=x(ee,_);if(e)return JSON.stringify(e)},E=(0,U.useSyncExternalStore)(e=>Fe(ee,e),T,T),D;return D=E?JSON.parse(E):a===void 0?{flexGrow:1}:{flexGrow:void 0,flexShrink:void 0,flexBasis:a},(0,H.jsx)(`div`,{...h,"data-disabled":o||void 0,"data-panel":!0,"data-testid":_,id:_,ref:b,style:{...sn,display:`flex`,flexBasis:0,flexShrink:1,overflow:`visible`,...D},children:(0,H.jsx)(`div`,{className:t,style:{maxHeight:`100%`,maxWidth:`100%`,flexGrow:1,overflow:`auto`,...m,touchAction:te===`horizontal`?`pan-y`:`pan-x`},children:e})})}function Ht(){return(0,U.useRef)(null)}function Ut({children:e,className:t,disabled:n,disableDoubleClick:r,elementRef:i,id:a,preview:o,style:s,...c}){let l=oe(a),{disableCursor:u,id:d,orientation:f,registerSeparator:p,updateSeparatorProps:m}=Dt();return(0,H.jsx)(wt,{attributes:c,axisId:d,axisOrientation:f,className:t,disableCursor:u,disabled:n,disableDoubleClick:r,elementRef:i,id:l,preview:o,registerSeparator:p,requiredStyle:ln,style:s,styleDefaults:cn,updateSeparatorProps:m,children:e})}var H,U,W,Wt,Gt,G,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,K,rn,an,q,on,sn,cn,ln;function un(){return(un=e((()=>{H=d(),U=t(),W=typeof window<`u`?U.useLayoutEffect:U.useEffect,(0,U.createContext)(null),Gt=class{#e={};addListener(e,t){let n=this.#e[e];return n===void 0?this.#e[e]=[t]:n.includes(t)||n.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let n=this.#e[e];if(n!==void 0){if(n.length===1)n[0].call(null,t);else{let e=!1,r=null,i=Array.from(n);for(let n=0;n<i.length;n++){let a=i[n];try{a.call(null,t)}catch(t){r===null&&(e=!0,r=t)}}if(e)throw r}}}removeAllListeners(){this.#e={}}removeListener(e,t){let n=this.#e[e];if(n!==void 0){let e=n.indexOf(t);e>=0&&n.splice(e,1)}}},G={cursorFlags:0,state:`inactive`},Kt=new Gt,qt=e=>e,Jt=()=>{},Yt=1,Xt=2,Zt=4,Qt=8,$t=3,en=12,nn=new WeakMap,K=new Map,rn=new Gt,an=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/,q=new Map,on=(0,U.createContext)(null),Ot.displayName=`SeparatorOverlay`,Pt.displayName=`Group`,Vt.displayName=`Panel`,sn={minHeight:0,maxHeight:`100%`,height:`auto`,minWidth:0,maxWidth:`100%`,width:`auto`,border:`none`,borderWidth:0,padding:0,margin:0},cn={flexBasis:`auto`},ln={flexGrow:0,flexShrink:0},Ut.displayName=`Separator`})))()}var dn,fn,pn,mn,hn,gn;function _n(){return(_n=e((()=>{dn=t(),un(),o(),i(),f(),n(),c(),[fn,pn]=p({name:`ResizableContext`}),mn=({controlRef:e,disabled:t,orientation:n=`horizontal`,...r}={})=>{let i=zt();return{disabled:t,groupRef:i,orientation:n,getRootProps:(0,dn.useCallback)((o={})=>({...s({disabled:t,orientation:n},r,o)(),style:{height:void 0,width:void 0,...r.style,...o.style},elementRef:a(o.elementRef,r.ref),groupRef:a(o.groupRef,i,e),onLayoutChange:l(o.onLayoutChange,r.onLayoutChange),onLayoutChanged:l(o.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r])}},hn=({controlRef:e,...t})=>{let n=Ht();return{panelRef:n,getItemProps:(0,dn.useCallback)((r={})=>({...s(t,r)(),elementRef:a(r.elementRef,t.ref),panelRef:a(r.panelRef,n,e),onResize:l(r.onResize,t.onResize)}),[n,e,t])}},gn=({disabled:e,...t})=>{let{disabled:n,groupRef:i,orientation:o}=pn(),c=e||n,l=(0,dn.useCallback)(e=>{e.preventDefault();let t=i.current?.getLayout();if(!t)return;let n=100/Object.keys(t).length,r=Object.fromEntries(Object.keys(t).map(e=>[e,n]));i.current?.setLayout(r)},[i]),d=(0,dn.useCallback)((e={})=>({...s({"aria-disabled":u(c),"aria-orientation":o,"data-disabled":r(c),disabled:c,tabIndex:c?-1:0},e,t,{onDoubleClick:l})(),elementRef:a(e.elementRef,t.ref)}),[o,c,t,l]);return{getIconProps:(0,dn.useCallback)((e={})=>({"data-icon":``,...e}),[]),getTriggerProps:d}}})))()}var vn,yn,bn,xn,Sn,Cn,J,Y,X,wn;function Tn(){return(Tn=e((()=>{vn=t(),un(),y(),m(),te(),ae(),_n(),yn=d(),{PropsContext:bn,usePropsContext:xn,withContext:Sn,withProvider:Cn}=v(`resizable`,ie),J=Cn(({children:e,orientation:t,...n})=>{let r=ee(t),{disabled:i,groupRef:a,orientation:o,getRootProps:s}=mn({orientation:r,...n}),c=(0,vn.useMemo)(()=>({disabled:i,groupRef:a,orientation:o}),[i,o,a]);return(0,yn.jsx)(fn,{value:c,children:(0,yn.jsx)(h.div,{as:Pt,...s(),children:e})})},`root`,{transferProps:[`orientation`]})(),Y=Sn(e=>{let{getItemProps:t}=hn(e);return(0,yn.jsx)(h.div,{as:Vt,...t()})},`item`)(),X=Sn(({children:e,icon:t,iconProps:n,...r})=>{let{getIconProps:i,getTriggerProps:a}=gn(r);return(0,yn.jsxs)(h.div,{as:Ut,...a(),children:[t?(0,yn.jsx)(wn,{...i(n),children:t}):null,e]})},`trigger`)(),wn=Sn(`div`,`icon`)()})))()}var Z,Q,En,$,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un;function Wn(){return(Wn=e((()=>{Z=t(),b(),Tn(),un(),D(),E(),S(),w(),Q=d(),En={component:J,title:`Components / Resizable`},$=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),Dn=()=>(0,Q.jsx)(re,{variant:`stack`,rows:[`border`,`spacer`,`plain`],children:(e,t,n)=>(0,Q.jsxs)(J,{variant:t,borderWidth:t===`border`?`1px`:void 0,h:`md`,rounded:t===`border`?`l2`:void 0,children:[(0,Q.jsx)(Y,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`Two`})]},n)}),On=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{colorScheme:`primary`,variant:`spacer`,h:`md`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]}),(0,Q.jsxs)(J,{colorScheme:`red`,variant:`spacer`,h:`md`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),kn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`horizontal`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]}),An=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{defaultSize:`30%`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),jn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,maxSize:`70%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),Mn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]}),Nn=()=>{let e=(0,Z.useRef)(null),t=(0,Z.useRef)(null),n=(0,Z.useRef)(null);return(0,Q.jsxs)(J,{ref:e,borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{ref:t,display:`center`,children:`One`}),(0,Q.jsx)(X,{ref:n}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})},Pn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{icon:(0,Q.jsx)(x,{})}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{variant:`spacer`,h:`md`,orientation:`vertical`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{icon:(0,Q.jsx)(x,{})}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),Fn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Left`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{children:(0,Q.jsxs)(J,{orientation:`vertical`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Top`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Bottom`})]})})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Top`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{children:(0,Q.jsxs)(J,{children:[(0,Q.jsx)(Y,{display:`center`,children:`Left`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Right`})]})})]})]}),In=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,disabled:!0,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Three`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{disabled:!0}),(0,Q.jsx)(Y,{display:`center`,children:`Two`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Three`})]})]}),Ln=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,onLayoutChange:e=>{console.log(`layout change`,e)},onLayoutChanged:e=>{console.log(`layout changed`,e)},children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]}),Rn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,onResize:(e,t,n)=>{console.log(`resize`,e,t,n)},children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),zn=()=>{let{defaultLayout:e,onLayoutChanged:t}=Lt({id:`persistence`,storage:localStorage});return(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]})},Bn=()=>{let[e,t]=T({key:`showLeft`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),[n,r]=T({key:`showRight`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),{defaultLayout:i,onLayoutChanged:a}=Lt({id:`conditional`,panelIds:(0,Z.useCallback)(()=>{let t=[];return e&&t.push(`left`),t.push(`middle`),n&&t.push(`right`),t},[e,n])(),storage:localStorage});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ne,{gap:`md`,children:[(0,Q.jsxs)(C,{onClick:()=>t(!e),children:[e?`Hidden`:`Show`,` Left`]}),(0,Q.jsxs)(C,{onClick:()=>r(!n),children:[n?`Hidden`:`Show`,` Right`]})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:i,h:`md`,rounded:`l2`,onLayoutChanged:a,children:[e?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Y,{id:`left`,display:`center`,minSize:`10%`,children:`Left`}),(0,Q.jsx)(X,{})]}):null,(0,Q.jsx)(Y,{id:`middle`,display:`center`,minSize:`10%`,children:`Middle`}),n?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`right`,display:`center`,minSize:`10%`,children:`Right`})]}):null]})]})},Vn=()=>{let{defaultLayout:e,onLayoutChanged:t}=Lt({id:`persistence`,storage:(0,Z.useMemo)(()=>({getItem:e=>{let t=document.cookie.match(RegExp(`(^| )${e}=([^;]+)`));return t?t[2]??null:null},setItem:(e,t)=>{document.cookie=`${e}=${t}; max-age=31536000; path=/`}}),[])});return(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]})},Hn=()=>{let e=(0,Z.useRef)(null);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ne,{gap:`md`,children:[(0,Q.jsx)(C,{onClick:()=>e.current?.collapse(),children:`Collapse "one"`}),(0,Q.jsx)(C,{onClick:()=>e.current?.expand(),children:`Expand "one"`}),(0,Q.jsx)(C,{onClick:()=>e.current?.resize(`30%`),children:`Resize "one" to 30`}),(0,Q.jsx)(C,{onClick:()=>e.current?.resize(`50%`),children:`Resize "one" to 50`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,controlRef:e,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]})},Un=[`Basic`,`Variant`,`ColorScheme`,`Orientation`,`DefaultSize`,`MinMaxSize`,`Collapsible`,`Refs`,`Icon`,`NestedResizable`,`Disabled`,`onLayoutChange`,`OnResize`,`LocalStorage`,`ConditionalLocalStorage`,`CookieStorage`,`CustomControl`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...$.parameters?.docs?.source}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dn.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`() => {
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
}`,...On.parameters?.docs?.source}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`() => {
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
}`,...kn.parameters?.docs?.source}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...An.parameters?.docs?.source}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...jn.parameters?.docs?.source}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Mn.parameters?.docs?.source}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Nn.parameters?.docs?.source}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pn.parameters?.docs?.source}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Fn.parameters?.docs?.source}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`() => {
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
}`,...In.parameters?.docs?.source}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ln.parameters?.docs?.source}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Rn.parameters?.docs?.source}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`() => {
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
}`,...zn.parameters?.docs?.source}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Bn.parameters?.docs?.source}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Vn.parameters?.docs?.source}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Hn.parameters?.docs?.source}}}})))()}Wn();export{$ as Basic,Mn as Collapsible,On as ColorScheme,Bn as ConditionalLocalStorage,Vn as CookieStorage,Hn as CustomControl,An as DefaultSize,In as Disabled,Pn as Icon,zn as LocalStorage,jn as MinMaxSize,Fn as NestedResizable,Rn as OnResize,kn as Orientation,Nn as Refs,Dn as Variant,Un as __namedExportsOrder,En as default,Ln as onLayoutChange};