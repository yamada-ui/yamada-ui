import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Lt as r,Yt as i,i as a,it as o,o as s,ot as c,xn as l,yn as u}from"./props-Bz1FL_va.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{E as f,T as p,d as m,f as h}from"./utils-DG4lHdyV.js";import{d as g,i as _,n as v,r as y}from"./create-component-DtmnY_ce.js";import{n as b,t as x}from"./grip-vertical-icon-2GTr6Sa6.js";import{n as ee,t as te}from"./use-value-DpgqT3Bp.js";import{r as S,t as C}from"./button-CFBNyQlD.js";import{n as w,t as T}from"./wrap-Dg19SbjB.js";import{n as E,t as ne}from"./use-local-storage-Ca8IVCcH.js";import{n as D,t as re}from"./props-table-CLkISL0o.js";var ie;function ae(){return(ae=e((()=>{g(),ie=_({base:{icon:{alignItems:`center`,display:`flex`,justifyContent:`center`,left:`50%`,position:`absolute`,top:`50%`,translateX:`-50%`,translateY:`-50%`},item:{boxSize:`full`},root:{boxSize:`full`},trigger:{position:`relative`,transitionDuration:`moderate`,transitionProperty:`common`,_after:{transitionDuration:`moderate`,transitionProperty:`common`}}},variants:{border:{icon:{bg:`colorScheme.muted`,color:`colorScheme.fg`,py:`1`,rounded:`l1`},trigger:{bg:`colorScheme.muted`,focusVisibleRing:`none`,_after:{position:`absolute`},_hover:{bg:`colorScheme.emphasized`},_focusVisible:{bg:`colorScheme.emphasized`}}},plain:{trigger:{focusVisibleRing:`none`,_after:{position:`absolute`}}},spacer:{icon:{color:`colorScheme.fg`,transitionDuration:`moderate`,transitionProperty:`common`},trigger:{focusVisibleRing:`none`,p:`1`,_after:{bg:`transparent`,display:`block`,rounded:`full`},_hover:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}},_focusVisible:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}}}}},props:{orientation:{horizontal:{icon:{transform:`translate(-50%, -50%) rotate(0deg)`}},vertical:{icon:{transform:`translate(-50%, -50%) rotate(90deg)`}}}},compounds:[{css:{trigger:{h:`px`,_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`border`,orientation:`vertical`},{css:{trigger:{w:`px`,_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`border`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,w:`full`}}},variant:`spacer`,orientation:`vertical`},{css:{trigger:{_after:{h:`full`,w:`2`}}},variant:`spacer`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`plain`,orientation:`vertical`},{css:{trigger:{_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`plain`,orientation:`horizontal`}],defaultProps:{variant:`border`,orientation:`horizontal`}})})))()}function oe(e){let t=(0,U.useId)();return`${e??t}`}function se(e){let t=(0,U.useRef)(e);return W(()=>{t.current=e},[e]),(0,U.useCallback)((...e)=>t.current?.(...e),[t])}function ce(...e){return se(t=>{e.forEach(e=>{if(e)switch(typeof e){case`function`:e(t);break;case`object`:e.current=t}})})}function O(e,t=`Assertion error`){if(!e)throw Error(t)}function le(){return Vt===void 0&&(Vt=typeof matchMedia==`function`&&!!matchMedia(`(pointer:coarse)`).matches),Vt}function ue({expandHitTargets:e,axis:t,rect:n}){let r=e?le()?t.resizeTargetMinimumSize.coarse:t.resizeTargetMinimumSize.fine:0;if(n.width<r){let e=r-n.width;n=new DOMRect(n.x-e/2,n.y,n.width+e,n.height)}if(n.height<r){let e=r-n.height;n=new DOMRect(n.x,n.y-e/2,n.width,n.height+e)}return n}function de(e){switch(typeof e){case`number`:return[e,`px`];case`string`:{let t=parseFloat(e);return e.endsWith(`%`)?[t,`%`]:e.endsWith(`px`)?[t,`px`]:e.endsWith(`rem`)?[t,`rem`]:e.endsWith(`em`)?[t,`em`]:e.endsWith(`vh`)?[t,`vh`]:e.endsWith(`vw`)?[t,`vw`]:[t,`%`]}}}function k(){return G}function fe(e){return Ut.addListener(`change`,e)}function pe(e,t=[],n,r=!1){let i=G,a={...G};a.cursorFlags=e,a.state===`active`&&(a.didPointerMove||=r,a.previews=t,n&&(a.previewLayoutMap=n)),G=a,Ut.emit(`change`,{prev:i,next:a})}function A(e){let t=G;G=e,t.state===`active`&&e.state!==`active`&&t.didPointerMove&&t.hitRegions.forEach(({separator:e})=>{e&&e.element.ownerDocument.activeElement===e.element&&e.element.blur()}),Ut.emit(`change`,{prev:t,next:e})}function me(e){G.state!==`active`||!G.previews.some(t=>t.separator===e)||A({...G,previews:G.previews.map(t=>t.separator===e?{...t}:t)})}function he(e){if(G.state===`inactive`)return!1;let t=G.hitRegions.filter(t=>t.axis!==e),n=G.state===`active`&&G.previews.some(t=>t.axis===e);if(t.length===G.hitRegions.length&&!n)return!1;if(t.length===0)A({cursorFlags:0,state:`inactive`});else if(G.state===`active`){let n=new Map(G.initialLayoutMap),r=new Map(G.previewLayoutMap);n.delete(e),r.delete(e),A({...G,cursorFlags:0,hitRegions:t,initialLayoutMap:n,previewLayoutMap:r,previews:G.previews.filter(t=>t.axis!==e)})}else A({...G,hitRegions:t});return!0}function ge(){return Qt===void 0&&(Qt=!1,typeof window<`u`&&(window.navigator.userAgent.includes(`Chrome`)||window.navigator.userAgent.includes(`Firefox`))&&(Qt=!0)),Qt}function _e({cursorFlags:e,axes:t,state:n}){let r=0,i=0;switch(n){case`active`:case`hover`:t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case`horizontal`:r++;break;case`vertical`:i++}})}if(r!==0||i!==0){if(n===`active`&&e&&ge()){let t=(e&Kt)!==0,n=(e&qt)!==0,r=(e&Jt)!==0,i=(e&Yt)!==0;if(t)return r?`se-resize`:i?`ne-resize`:`e-resize`;if(n)return r?`sw-resize`:i?`nw-resize`:`w-resize`;if(r)return`s-resize`;if(i)return`n-resize`}return ge()?r>0&&i>0?`move`:r>0?`ew-resize`:`ns-resize`:r>0&&i>0?`grab`:r>0?`col-resize`:`row-resize`}}function ve(e){if(!e.defaultView||!e.adoptedStyleSheets)return;let{prevStyle:t,styleSheet:n}=$t.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(n):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]));let r=k();switch(r.state){case`active`:case`hover`:{let e=_e({cursorFlags:r.cursorFlags,axes:r.hitRegions.map(e=>e.axis),state:r.state}),i=`*, *:hover {cursor: ${e} !important; }`;if(t===i)return;t=i,e?n.cssRules.length===0?n.insertRule(i):n.replaceSync(i):n.cssRules.length===1&&n.deleteRule(0);break}case`inactive`:t=void 0,n.cssRules.length===1&&n.deleteRule(0)}$t.set(e,{prevStyle:t,styleSheet:n})}function ye({axis:e}){let{layoutStrategy:t,orientation:n,items:r}=e;return t?t.calculateAvailableSize():r.reduce((e,t)=>(e+=n===`horizontal`?t.element.offsetWidth:t.element.offsetHeight,e),0)}function be(e,t){return Array.from(t).sort((t,n)=>{let r=e===`horizontal`?xe(t,n):Se(t,n);if(r!==0)return r;let i=t.element.compareDocumentPosition(n.element);return i&Node.DOCUMENT_POSITION_DISCONNECTED?0:i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function xe(e,t){let n=e.element.offsetLeft-t.element.offsetLeft;return n===0?e.element.offsetWidth-t.element.offsetWidth:n}function Se(e,t){let n=e.element.offsetTop-t.element.offsetTop;return n===0?e.element.offsetHeight-t.element.offsetHeight:n}function Ce(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE}function we(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function Te({orientation:e,rects:t,targetRect:n}){let r={x:n.x+n.width/2,y:n.y+n.height/2},i,a=Number.MAX_VALUE;for(let n of t){let{x:t,y:o}=we(r,n),s=e===`horizontal`?t:o;s<a&&(a=s,i=n)}return O(i,`No rect found`),i}function Ee({expandHitTargets:e=!0,axis:t,includeDisabled:n=!1}){if(t.layoutStrategy)return t.layoutStrategy.calculateHitRegions({expandHitTargets:e,axis:t,includeDisabled:n});let{element:r,orientation:i,items:a,separators:o}=t,s=be(i,Array.from(r.children).filter(Ce).filter(e=>!e.hasAttribute(`data-resize-preview`)).map(e=>({element:e}))).map(({element:e})=>e),c=[],l=!1,u=!1,d=-1,f,p=-1,m=0,h,g=[];{let e=-1;for(let t of s)t.hasAttribute(`data-panel`)&&(e++,t.hasAttribute(`data-disabled`)||(m++,d===-1&&(d=e),p=e))}if(n||m>1){let r=-1;for(let m of s)if(m.hasAttribute(`data-panel`)){r++;let o=a.find(e=>e.element===m);if(o){if(h){let a=h.element.getBoundingClientRect(),s=m.getBoundingClientRect(),_;if(u){let e=i===`horizontal`?new DOMRect(a.right,a.top,0,a.height):new DOMRect(a.left,a.bottom,a.width,0),t=i===`horizontal`?new DOMRect(s.left,s.top,0,s.height):new DOMRect(s.left,s.top,s.width,0);switch(g.length){case 0:_=[e,t];break;case 1:{let n=g[0];_=[n,Te({orientation:i,rects:[a,s],targetRect:n.element.getBoundingClientRect()})===a?t:e];break}default:_=g}}else _=g.length?g:[i===`horizontal`?new DOMRect(a.right,s.top,s.left-a.right,s.height):new DOMRect(s.left,a.bottom,s.width,s.top-a.bottom)];for(let i of _){let a=ue({expandHitTargets:e,axis:t,rect:`width`in i?i:i.element.getBoundingClientRect()});(n||!l&&!(r<=d||r>p))&&(f??=ye({axis:t}),c.push({axis:t,axisSize:f,items:[h,o],separator:`width`in i?void 0:i,rect:a})),l=!1}}u=!1,h=o,g=[]}}else if(m.hasAttribute(`data-separator`)){m.ariaDisabled!==null&&(l=!0);let e=o.find(e=>e.element===m);e?g.push(e):(h=void 0,g=[])}else u=!0}return c}function De(e,t){let n=getComputedStyle(e);return t*parseFloat(n.fontSize)}function Oe(e,t){let n=getComputedStyle(e.ownerDocument.documentElement);return t*parseFloat(n.fontSize)}function ke(e){return e/100*window.innerHeight}function Ae(e){return e/100*window.innerWidth}function j({axisSize:e,itemElement:t,styleProp:n}){let r,[i,a]=de(n);switch(a){case`%`:r=i/100*e;break;case`px`:r=i;break;case`rem`:r=Oe(t,i);break;case`em`:r=De(t,i);break;case`vh`:r=ke(i);break;case`vw`:r=Ae(i)}return r}function M(e){return parseFloat(e.toFixed(3))}function je(e){let{items:t}=e,n=ye({axis:e});return n===0?t.map(e=>({groupResizeBehavior:e.constraintProps.groupResizeBehavior,collapsedSize:0,collapsible:e.constraintProps.collapsible===!0,defaultSize:void 0,disabled:e.constraintProps.disabled,minSize:0,maxSize:100,itemId:e.id})):t.map(e=>{let{element:t,constraintProps:r}=e,i=0;r.collapsedSize!==void 0&&(i=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedSize})/n*100));let a;r.collapsedThreshold!==void 0&&(a=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedThreshold})/n*100));let o;r.defaultSize!==void 0&&(o=M(j({axisSize:n,itemElement:t,styleProp:r.defaultSize})/n*100));let s=0;r.minSize!==void 0&&(s=M(j({axisSize:n,itemElement:t,styleProp:r.minSize})/n*100));let c=100;return r.maxSize!==void 0&&(c=M(j({axisSize:n,itemElement:t,styleProp:r.maxSize})/n*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:i,collapsedThreshold:a,collapsible:r.collapsible===!0,defaultSize:o,disabled:r.disabled,minSize:s,maxSize:c,itemId:e.id}})}function Me(e){K=new Map(K),K.delete(e)}function Ne(e,t){for(let[t]of K)if(t.id===e)return t}function N(e,t){for(let[t,n]of K)if(t.id===e)return n;if(t)throw Error(`Could not find data for Group with id ${e}`)}function P(){return K}function Pe(e,t){return en.addListener(`axisChange`,n=>{n.axis.id===e&&t(n)})}function F(e,t,n){let r=K.get(e);K=new Map(K),K.set(e,t),en.emit(`axisChange`,{axis:e,isUserInteraction:n?.isUserInteraction===!0,prev:r,next:t})}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function I(e,t,n=0){return Math.abs(M(e)-M(t))<=n}function L(e,t){return I(e,t)?0:e>t?1:-1}function R({overrideDisabledItems:e,itemConstraints:t,prevSize:n,size:r}){let{collapsedSize:i=0,collapsedThreshold:a,collapsible:o,disabled:s,maxSize:c=100,minSize:l=0}=t;if(s&&!e)return n;if(L(r,l)<0){if(o){let e=a??(l-i)/2,t=L(n,i)<=0,o=t?i+e:l-e,s=L(r,o);r=L(r,i)<=0||s<0||a!==void 0&&t&&s===0?i:l}else r=l}return r=Math.min(c,r),r=M(r),r}function Ie({delta:e,initialLayout:t,itemConstraints:n,pivotIndices:r,prevLayout:i,trigger:a}){if(I(e,0))return t;let o=a===`imperative-api`,s=n.map(({itemId:e})=>t[e]),c=n.map(({itemId:e})=>i[e]),l=[...s],[u,d]=r;O(u!=null,`Invalid first pivot index`),O(d!=null,`Invalid second pivot index`);let f=0;switch(a){case`keyboard`:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,i)){let t=o-n;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:d,r=n[t];O(r,`No panel constraints found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,o)){let t=n-i;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}break;default:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let i=s[t],{collapsedSize:a,collapsedThreshold:o,collapsible:c,minSize:l}=r;if(c&&L(i,l)<0){let t=l-a,n=o??t/2;if(L(i+Math.abs(e),l)<0){let r=L(Math.abs(e),n);e=r>0||r===0&&o===void 0&&e<0?e<0?-t:t:0}}break}}{let t=e<0?1:-1,r=e<0?d:u,i=0;for(;;){let e=s[r];O(e!=null,`Previous layout not found for panel index ${r}`);let a=R({overrideDisabledItems:o,itemConstraints:n[r],prevSize:e,size:100})-e;if(i+=a,r+=t,r<0||r>=n.length)break}let a=Math.min(Math.abs(e),Math.abs(i));e=e<0?0-a:a}{let t=e<0?u:d;for(;t>=0&&t<n.length;){let r=Math.abs(e)-Math.abs(f),i=s[t];O(i!=null,`Previous layout not found for panel index ${t}`);let a=i-r,c=R({overrideDisabledItems:o,itemConstraints:n[t],prevSize:i,size:a});if(!I(i,c)&&(f+=i-c,l[t]=c,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(Fe(c,l))return i;{let t=e<0?d:u,r=s[t];O(r!=null,`Previous layout not found for panel index ${t}`);let i=r+f,a=R({overrideDisabledItems:o,itemConstraints:n[t],prevSize:r,size:i});if(l[t]=a,!I(a,i)){let t=i-a,r=e<0?d:u;for(;r>=0&&r<n.length;){let i=l[r];O(i!=null,`Previous layout not found for panel index ${r}`);let a=i+t,s=R({overrideDisabledItems:o,itemConstraints:n[r],prevSize:i,size:a});if(I(i,s)||(t-=s-i,l[r]=s),I(t,0))break;e>0?r--:r++}}}return I(Object.values(l).reduce((e,t)=>t+e,0),100,.1)?l.reduce((e,t,r)=>(e[n[r].itemId]=t,e),{}):i}function z(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(t[n]===void 0||L(e[n],t[n])!==0)return!1;return!0}function Le({commit:e,document:t,event:n,hitRegions:r,initialLayoutMap:i,mountedAxes:a,pointerDownAtPoint:o,prevCursorFlags:s}){let c=0,l=k(),u=l.state===`active`?l.previews:[],d=new Map(l.state===`active`?l.previewLayoutMap:void 0);r.forEach(t=>{let{axis:r,axisSize:s}=t,{orientation:l,items:f}=r;if(e&&r.resizePreviewMode!==`separator`)return;let{disableCursor:p}=r.mutableState,m=0;m=o?l===`horizontal`?(n.clientX-o.x)/s*100:(n.clientY-o.y)/s*100:l===`horizontal`?n.clientX<0?-100:100:n.clientY<0?-100:100;let h=i.get(r),g=a.get(r);if(!h||!g)return;let{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:b,separatorToItems:x}=g;if(v&&b&&x){let n=r.resizePreviewMode===`separator`?d.get(r)??b:b,i=Ie({delta:m,initialLayout:h,itemConstraints:v,pivotIndices:t.items.map(e=>f.indexOf(e)),prevLayout:n,trigger:`mouse-or-touch`});if(r.resizePreviewMode===`separator`&&!e&&!z(i,n)){d.set(r,i);let e=0,t=f.map(t=>(e+=i[t.id]-h[t.id],s/100*e));u=u.map(e=>{if(e.axis!==r)return e;let n=t[e.itemIndex];return n===e.offset?e:{...e,offset:n}})}if(z(i,n)&&m!==0&&!p)switch(l){case`horizontal`:c|=m<0?Kt:qt;break;case`vertical`:c|=m<0?Jt:Yt}(r.resizePreviewMode!==`separator`||e)&&!z(i,b)&&F(t.axis,{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:i,requestedAxisSize:y,requestedLayout:i,separatorToItems:x})}});let f=0;n.movementX===0?f|=s&Xt:f|=c&Xt,n.movementY===0?f|=s&Zt:f|=c&Zt;let p=l.state===`active`&&(n.clientX!==l.pointerDownAtPoint.x||n.clientY!==l.pointerDownAtPoint.y);pe(f,u,d,p),ve(t)}function Re(e,t){let n=k(),r=P(),i=!1;return n.state===`active`&&(Le({commit:!0,document:e,event:t,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags}),A({cursorFlags:0,state:`inactive`}),n.hitRegions.length>0&&(ve(e),i=!0,n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})}))),i}function ze(e){e.defaultPrevented||Re(e.currentTarget,e)}function Be(e,t,n){let r,i={x:1/0,y:1/0};for(let a of t){let t=we(n,a.rect);switch(e){case`horizontal`:(t.x<i.x||t.x===i.x&&t.y<=i.y)&&(r=a,i=t);break;case`vertical`:(t.y<i.y||t.y===i.y&&t.x<=i.x)&&(r=a,i=t)}}return r?{distance:i,hitRegion:r}:void 0}function Ve(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function He(e,t){if(e===t)throw Error(`Cannot compare node with itself`);let n={a:qe(e),b:qe(t)},r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();O(r,`Stacking order can only be calculated for elements with a common ancestor`);let i={a:Ke(Ge(n.a)),b:Ke(Ge(n.b))};if(i.a===i.b){let e=r.childNodes,t={a:n.a.at(-1),b:n.b.at(-1)},i=e.length;for(;i--;){let n=e[i];if(n===t.a)return 1;if(n===t.b)return-1}}return Math.sign(i.a-i.b)}function Ue(e){let t=getComputedStyle(Je(e)??e).display;return t===`flex`||t===`inline-flex`}function We(e){let t=getComputedStyle(e);return!!(t.position===`fixed`||t.zIndex!==`auto`&&(t.position!==`static`||Ue(e))||+t.opacity<1||`transform`in t&&t.transform!==`none`||`webkitTransform`in t&&t.webkitTransform!==`none`||`mixBlendMode`in t&&t.mixBlendMode!==`normal`||`filter`in t&&t.filter!==`none`||`webkitFilter`in t&&t.webkitFilter!==`none`||`isolation`in t&&t.isolation===`isolate`||tn.test(t.willChange)||t.webkitOverflowScrolling===`touch`)}function Ge(e){let t=e.length;for(;t--;){let n=e[t];if(O(n,`Missing node`),We(n))return n}return null}function Ke(e){return e&&Number(getComputedStyle(e).zIndex)||0}function qe(e){let t=[];for(;e;)t.push(e),e=Je(e);return t}function Je(e){let{parentNode:t}=e;return Ve(t)?t.host:t}function Ye(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function Xe(e){try{return e.matches(`:modal`)}catch{return!1}}function Ze({axisElement:e,hitRegion:t,pointerEventTarget:n}){if(Ce(n)){let t=n.closest(`dialog`);if(t&&!t.contains(e)&&Xe(t))return!1}if(!Ce(n)||n.contains(e)||e.contains(n))return!0;if(He(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(Ye(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function Qe(e,t){let n=[];return t.forEach((t,r)=>{if(r.disabled)return;let i=Ee({axis:r}),a=Be(r.orientation,i,{x:e.clientX,y:e.clientY});a&&a.distance.x<=0&&a.distance.y<=0&&Ze({axisElement:r.element,hitRegion:a.hitRegion.rect,pointerEventTarget:e.target})&&n.push(a.hitRegion)}),n}function B({layout:e,itemConstraints:t}){let n=t.map(({itemId:t})=>e[t]),r=[...n],i=r.reduce((e,t)=>e+t,0);if(Object.keys(e).length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${Object.values(e).map(e=>`${e}%`).join(`, `)}`);if(!I(i,100)&&r.length>0)for(let e=0;e<t.length;e++){let t=r[e];O(t!=null,`No layout data found for index ${e}`);let n=100/i*t;r[e]=n}let a=0;for(let e=0;e<t.length;e++){let i=n[e];O(i!=null,`No layout data found for index ${e}`);let o=r[e];O(o!=null,`No layout data found for index ${e}`);let s=R({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:i,size:o});o!=s&&(a+=o-s,r[e]=s)}if(!I(a,0))for(let e=0;e<t.length;e++){let n=r[e];O(n!=null,`No layout data found for index ${e}`);let i=n+a,o=R({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:n,size:i});if(n!==o&&(a-=o-n,r[e]=o,I(a,0)))break}return r.reduce((e,n,r)=>(e[t[r].itemId]=n,e),{})}function $e({axisId:e,itemId:t}){let n=()=>{let t=P();for(let[n,{defaultLayoutDeferred:r,derivedItemConstraints:i,layout:a,axisSize:o,separatorToItems:s}]of t)if(n.id===e)return{defaultLayoutDeferred:r,derivedItemConstraints:i,axis:n,axisSize:o,layout:a,separatorToItems:s};throw Error(`Group ${e} not found`)},r=()=>{let e=n().derivedItemConstraints.find(e=>e.itemId===t);if(e!==void 0)return e;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{let e=n().axis.items.find(e=>e.id===t);if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},a=()=>{let e=n().layout[t];if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},o=({nextSize:e,items:n,prevLayout:r,derivedItemConstraints:i})=>{let o=a(),s=n.findIndex(e=>e.id===t),c=s===0,l=s===n.length-1;if(l&&e<o&&(c||n.slice(0,s).every((e,t)=>{let n=i[t];return n?.collapsible&&I(n.collapsedSize,r[n.itemId])}))){let e=n.slice(0,s).reduce((e,t)=>e+r[t.id],0);return{...r,[t]:M(100-e)}}return Ie({delta:l?o-e:e-o,initialLayout:r,itemConstraints:i,pivotIndices:l?[s-1,s]:[s,s+1],prevLayout:r,trigger:`imperative-api`})},s=e=>{if(e===a())return;let{defaultLayoutDeferred:t,derivedItemConstraints:r,axis:i,axisSize:s,layout:c,separatorToItems:l}=n(),u=B({layout:o({nextSize:e,items:i.items,prevLayout:c,derivedItemConstraints:r}),itemConstraints:r});z(c,u)||F(i,{defaultLayoutDeferred:t,derivedItemConstraints:r,axisSize:s,layout:u,requestedAxisSize:s,requestedLayout:u,separatorToItems:l})};return{collapse:()=>{let{collapsible:e,collapsedSize:t}=r(),{mutableValues:n}=i(),o=a();e&&o!==t&&(n.expandToSize=o,s(t))},expand:()=>{let{collapsible:e,collapsedSize:t,minSize:n}=r(),{mutableValues:o}=i(),c=a();if(e&&c===t){let e=o.expandToSize??n;e===0&&(e=1),s(e)}},getSize:()=>{let{axis:e}=n(),r=a(),{element:o}=i();return{asPercentage:r,inPixels:e.layoutStrategy?e.layoutStrategy.getItemSizeInPixels(t):e.orientation===`horizontal`?o.offsetWidth:o.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=r(),n=a();return e&&I(t,n)},resize:e=>{let{axis:t}=n(),{element:r}=i(),a=ye({axis:t}),o=M(j({axisSize:a,itemElement:r,styleProp:e})/a*100);s(o)}}}function et(e){e.defaultPrevented||Qe(e,P()).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let n=t.items.find(e=>e.constraintProps.defaultSize!==void 0);if(n){let r=n.constraintProps.defaultSize,i=$e({axisId:t.axis.id,itemId:n.id});i&&r!==void 0&&(i.resize(r),e.preventDefault())}}})}function tt(e){let t=P();for(let[n]of t)if(n.separators.some(t=>t.element===e))return n;throw Error(`Could not find parent Group for separator element`)}function nt({axisId:e}){let t=()=>{let t=P();for(let[n,r]of t)if(n.id===e)return{axis:n,...r};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:n}=t();return e?{}:n},setLayout(e){let{defaultLayoutDeferred:n,derivedItemConstraints:r,axis:i,axisSize:a,layout:o,separatorToItems:s}=t(),c=B({layout:e,itemConstraints:r});return n?o:(z(o,c)||F(i,{defaultLayoutDeferred:n,derivedItemConstraints:r,axisSize:a,layout:c,requestedAxisSize:a,requestedLayout:c,separatorToItems:s}),c)}}}function V(e,t){let n=tt(e),r=N(n.id,!0),i=n.separators.find(t=>t.element===e);O(i,`Matching separator not found`);let a=r.separatorToItems.get(i);O(a,`Matching panels not found`);let o=a.map(e=>n.items.indexOf(e)),s=nt({axisId:n.id}).getLayout(),c=B({layout:Ie({delta:t,initialLayout:s,itemConstraints:r.derivedItemConstraints,pivotIndices:o,prevLayout:s,trigger:`keyboard`}),itemConstraints:r.derivedItemConstraints});z(s,c)||F(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedItemConstraints:r.derivedItemConstraints,axisSize:r.axisSize,layout:c,requestedAxisSize:r.axisSize,requestedLayout:c,separatorToItems:r.separatorToItems},{isUserInteraction:!0})}function rt(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=tt(t);if(!(n.disabled||n.separators.find(e=>e.element===t)?.disabled))switch(e.key){case`ArrowDown`:e.preventDefault(),n.orientation===`vertical`&&V(t,5);break;case`ArrowLeft`:e.preventDefault(),n.orientation===`horizontal`&&V(t,-5);break;case`ArrowRight`:e.preventDefault(),n.orientation===`horizontal`&&V(t,5);break;case`ArrowUp`:e.preventDefault(),n.orientation===`vertical`&&V(t,-5);break;case`End`:e.preventDefault(),V(t,100);break;case`Enter`:{e.preventDefault();let{derivedItemConstraints:r,layout:i,separatorToItems:a}=N(n.id,!0),o=n.separators.find(e=>e.element===t);O(o,`Matching separator not found`);let s=a.get(o);O(s,`Matching panels not found`);let c=s[0],l=r.find(e=>e.itemId===c.id);if(O(l,`Panel metadata not found`),l.collapsible){let e=i[c.id];V(t,(l.collapsedSize===e?n.mutableState.expandedItemSizes[c.id]??l.minSize:l.collapsedSize)-e)}break}case`F6`:{e.preventDefault();let t=n.separators.map(e=>e.element),r=Array.from(t).findIndex(t=>t===e.currentTarget);O(r!==null,`Index not found`),t[e.shiftKey?r>0?r-1:t.length-1:r+1<t.length?r+1:0].focus({preventScroll:!0});break}case`Home`:e.preventDefault(),V(t,-100)}}function it(e,t){let{element:n,orientation:r,items:i}=e,a=n.getBoundingClientRect(),o=r===`horizontal`;return Ee({expandHitTargets:!1,axis:e,includeDisabled:!0}).map(({items:r,rect:s,separator:c},l)=>{let u=i.indexOf(r[0]),d=o?s.left+s.width/2:s.top+s.height/2;return{active:t.some(t=>{if(t.axis!==e||t.items[0]!==r[0])return!1;if(c||t.separator)return t.separator===c;let n=o?t.rect.left+t.rect.width/2:t.rect.top+t.rect.height/2;return I(d,n)}),axis:e,key:c?`separator-${c.id}`:`panel-${r[0].id}-${l}`,offset:0,itemIndex:u,rect:new DOMRect((o&&!c?d:s.left)-a.left-n.clientLeft+n.scrollLeft,(!o&&!c?d:s.top)-a.top-n.clientTop+n.scrollTop,o&&!c?0:s.width,!o&&!c?0:s.height),separator:c}})}function at(e){if(e.defaultPrevented||e.pointerType===`mouse`&&e.button>0)return;let t=P(),n=Qe(e,t);if(n.length===0)return;let r=new Map,i=!1;n.forEach(e=>{e.separator&&(i||(i=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let n=t.get(e.axis);n&&r.set(e.axis,n.layout)});let a=Array.from(r.keys()).flatMap(e=>e.resizePreviewMode===`separator`?it(e,n):[]);A({cursorFlags:0,didPointerMove:!1,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},previewLayoutMap:new Map(r),previews:a,state:`active`}),e.preventDefault()}function ot(e){let t=P(),n=k();n.state===`active`&&Le({commit:!1,document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:t,prevCursorFlags:n.cursorFlags})}function st(e){if(e.defaultPrevented)return;let t=k(),n=P();switch(t.state){case`active`:if(e.buttons===0){t.previewLayoutMap.forEach((e,t)=>{let r=n.get(t);t.resizePreviewMode===`separator`&&r&&!z(e,r.layout)&&F(t,{...r,layout:e,requestedAxisSize:r.axisSize,requestedLayout:e})}),A({cursorFlags:0,state:`inactive`}),t.hitRegions.forEach(e=>{if(!n.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})}),ve(e.currentTarget);return}for(let n of t.hitRegions)if(n.separator){let{element:t}=n.separator;t.isConnected&&!t.hasPointerCapture?.(e.pointerId)&&t.setPointerCapture?.(e.pointerId)}Le({commit:!1,document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedAxes:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break;default:{let r=Qe(e,n);r.length===0?t.state!==`inactive`&&A({cursorFlags:0,state:`inactive`}):A({cursorFlags:0,hitRegions:r,state:`hover`}),ve(e.currentTarget);break}}}function ct(e){if(e.relatedTarget instanceof HTMLIFrameElement)switch(k().state){case`hover`:A({cursorFlags:0,state:`inactive`})}}function lt(e){e.defaultPrevented||e.pointerType===`mouse`&&e.button>0||Re(e.currentTarget,e)&&e.preventDefault()}function ut(e){let t=0,n=0,r={};for(let i of e)if(i.defaultSize!==void 0){t++;let e=M(i.defaultSize);n+=e,r[i.itemId]=e}else r[i.itemId]=void 0;let i=e.length-t;if(i!==0){let t=M((100-n)/i);for(let n of e)n.defaultSize===void 0&&(r[n.itemId]=t)}return r}function dt(e,t){let n=e.map(e=>e.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(let e of n)if(!r.includes(e))return!1;return!0}function ft({axis:e,itemConstraints:t}){let n=e.items.map(({id:e})=>e).join(`,`),r=e.mutableState.defaultLayout;return e.mutableState.layouts[n]??(r&&dt(e.items,r)?r:ut(t))}function pt({itemIds:e,layout:t}){return B({layout:t,itemConstraints:e.map(e=>({collapsedSize:0,collapsible:!1,defaultSize:void 0,disabled:void 0,itemId:e,maxSize:100,minSize:0}))})}function mt(e,t,n){if(!n[0])return;let r=e.items.find(e=>e.element===t);if(!r||!r.onResize)return;let i=ye({axis:e}),a=e.orientation===`horizontal`?r.element.offsetWidth:r.element.offsetHeight,o=r.mutableValues.prevSize,s={asPercentage:M(a/i*100),inPixels:a};r.mutableValues.prevSize=s,r.onResize(s,r.id,o)}function ht(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function gt(e,t){return e.length===t.length&&e.every((e,n)=>ht(e,t[n]))}function _t({axis:e,nextAxisSize:t,prevAxisSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,a=0,o=!1,s=new Map,c=[];for(let l of e.items){let e=r[l.id]??0;switch(l.constraintProps.groupResizeBehavior){case`preserve-pixel-size`:{o=!0;let r=M(e/100*n/t*100);s.set(l.id,r),i+=r;break}default:c.push(l.id),a+=e}}if(!o||c.length===0)return r;let l=100-i,u={...r};if(s.forEach((e,t)=>{u[t]=e}),a>0)for(let e of c)u[e]=M((r[e]??0)/a*l);else{let e=M(l/c.length);for(let t of c)u[t]=e}return u}function vt(e){let t=!0;O(e.element.ownerDocument.defaultView,`Cannot register an unmounted Group`);let n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,a=new n(n=>{for(let r of n){let{borderBoxSize:n,target:i}=r;if(i===e.element){if(t){let t=ye({axis:e});if(t===0)return;let n=N(e.id);if(!n)return;let r=je(e),i=n.requestedAxisSize,a=n.requestedLayout;n.defaultLayoutDeferred&&(i=t,a=pt({itemIds:e.items.map(({id:e})=>e),layout:ft({axis:e,itemConstraints:r})}));let o=B({layout:_t({axis:e,nextAxisSize:t,prevAxisSize:i,prevLayout:a}),itemConstraints:r});if(!n.defaultLayoutDeferred&&z(n.layout,o)&&gt(n.derivedItemConstraints,r)&&n.axisSize===t)continue;F(e,{defaultLayoutDeferred:!1,derivedItemConstraints:r,axisSize:t,layout:o,requestedAxisSize:i,requestedLayout:a,separatorToItems:n.separatorToItems})}}else mt(e,i,n)}});a.observe(e.element),e.items.forEach(e=>{O(!r.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.onResize&&a.observe(e.element)});let o=ye({axis:e}),s=je(e),c=ft({axis:e,itemConstraints:s}),l=B({layout:c,itemConstraints:s}),u=e.element.ownerDocument;q.set(u,(q.get(u)??0)+1);let d=new Map;return Ee({axis:e,includeDisabled:!0}).forEach(e=>{e.separator&&d.set(e.separator,e.items)}),F(e,{defaultLayoutDeferred:o===0,derivedItemConstraints:s,axisSize:o,layout:l,requestedAxisSize:o,requestedLayout:pt({itemIds:e.items.map(({id:e})=>e),layout:c}),separatorToItems:d}),e.separators.forEach(e=>{O(!i.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),i.add(e.id),e.element.addEventListener(`keydown`,rt)}),q.get(u)===1&&(u.addEventListener(`contextmenu`,ze,!0),u.addEventListener(`dblclick`,et,!0),u.addEventListener(`pointerdown`,at,!0),u.addEventListener(`pointerleave`,ot),u.addEventListener(`pointermove`,st),u.addEventListener(`pointerout`,ct),u.addEventListener(`pointerup`,lt,!0)),function(){t=!1,q.set(u,Math.max(0,(q.get(u)??0)-1)),Me(e),he(e)&&ve(u),e.separators.forEach(e=>{e.element.removeEventListener(`keydown`,rt)}),q.get(u)||(u.removeEventListener(`contextmenu`,ze,!0),u.removeEventListener(`dblclick`,et,!0),u.removeEventListener(`pointerdown`,at,!0),u.removeEventListener(`pointerleave`,ot),u.removeEventListener(`pointermove`,st),u.removeEventListener(`pointerout`,ct),u.removeEventListener(`pointerup`,lt,!0)),a.disconnect()}}function yt({derivedItemConstraints:e,axis:t,layout:n,prevLayout:r,requestedLayout:i}){let a=t.items.map(({id:e})=>e).join(`,`);t.mutableState.layouts[a]=i,r&&e.forEach(e=>{if(e.collapsible){let i=I(e.collapsedSize,n[e.itemId]),a=I(e.collapsedSize,r[e.itemId]);i&&!a&&(t.mutableState.expandedItemSizes[e.itemId]=r[e.itemId])}})}function bt(){let[e,t]=(0,U.useState)({});return[e,(0,U.useCallback)(()=>t({}),[])]}function xt(e){let t=(0,U.useRef)({...e});return W(()=>{for(let n in e)t.current[n]=e[n]},[e]),t.current}function St({layout:e,itemConstraints:t,itemId:n,itemIndex:r}){let i,a,o=e[n],s=t.find(e=>e.itemId===n);if(s){let c=s.maxSize,l=s.collapsible?s.collapsedSize:s.minSize,u=[r,r+1];a=B({layout:Ie({delta:l-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n],i=B({layout:Ie({delta:c-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:a,valueNow:o}}function Ct({attributes:e,axisId:t,axisOrientation:n,children:r,className:i,disableCursor:a,disabled:o,disableDoubleClick:s,elementRef:c,id:l,isSharedHitRegion:u,preview:d,registerSeparator:f,requiredStyle:p,style:m,styleDefaults:h,tabIndex:g=0,updateSeparatorProps:_}){let v=xt({disabled:o,disableDoubleClick:s,children:r,className:i,preview:d,style:m}),[y,b]=(0,U.useState)({}),[x,ee]=(0,U.useState)(`inactive`),[te,S]=(0,U.useState)(!1),C=(0,U.useRef)(null),w=(0,U.useRef)(null),T=ce(C,c),E=n===`horizontal`?`vertical`:`horizontal`;W(()=>{let e=C.current;if(e!==null){let n={disabled:v.disabled,disableDoubleClick:v.disableDoubleClick,element:e,id:l,get children(){return v.children},get className(){return v.className},get preview(){return v.preview},get style(){return v.style}};w.current=n;let r=f(n),i=fe(e=>{ee(e.next.state!==`inactive`&&e.next.hitRegions.some(e=>e.separator===n||(u?.(e)??!1))?e.next.state:`inactive`)}),a=Pe(t,e=>{let{derivedItemConstraints:t,layout:r,separatorToItems:i}=e.next,a=i.get(n);if(a){let n=a[0],i=t.findIndex(e=>e.itemId===n.id),{layoutStrategy:o}=e.axis;b({...St({layout:r,itemConstraints:t,itemId:n.id,itemIndex:i}),...o?.getItemAriaControls&&{valueControls:o.getItemAriaControls(n.id)}})}});return()=>{w.current=null,i(),a(),r()}}},[t,l,u,f,v]),W(()=>{let e=w.current;e&&me(e)},[d]),(0,U.useEffect)(()=>{_(l,{disabled:o,disableDoubleClick:s})},[o,s,l,_]);let ne;o&&!a&&(ne=`not-allowed`);let D;if(o)D=`disabled`;else switch(x){case`active`:D=`active`;break;default:D=te?`focus`:x}return(0,H.jsx)(`div`,{...e,"aria-controls":y.valueControls,"aria-disabled":o||void 0,"aria-orientation":E,"aria-valuemax":y.valueMax,"aria-valuemin":y.valueMin,"aria-valuenow":y.valueNow,children:r,className:i,"data-separator":D,"data-testid":l,id:l,onBlur:()=>S(!1),onFocus:()=>S(!0),ref:T,role:`separator`,style:{...h,cursor:ne,...m,...p,touchAction:`none`},tabIndex:o?void 0:g})}function wt({separator:e}){let{element:t}=e,n=(0,U.useRef)(null);return W(()=>{let e=t.cloneNode(!0),r=[t,...t.querySelectorAll(`*`)],i=[e,...e.querySelectorAll(`*`)],a=t.ownerDocument.defaultView;return r.forEach((e,t)=>{let n=i[t];if(n instanceof a.HTMLElement||n instanceof a.SVGElement){let t=a.getComputedStyle(e);for(let e=0;e<t.length;e++){let r=t.item(e);n.style.setProperty(r,t.getPropertyValue(r))}}n.removeAttribute(`data-testid`),n.removeAttribute(`id`)}),Object.assign(e.style,{boxSizing:`border-box`,height:`100%`,margin:`0`,position:`static`,transform:`none`,width:`100%`}),n.current.appendChild(e),()=>e.remove()},[t]),(0,H.jsx)(`div`,{ref:n,style:{height:`100%`,opacity:.65,pointerEvents:`none`,width:`100%`}})}function Tt(){let e=(0,U.useContext)(nn);return O(e,`Group Context not found; did you render a Panel or Separator outside of a Group?`),e}function Et(e){let{registerOverlay:t}=Tt(),n=(0,U.useRef)(e);ht(n.current,e)||(n.current=e);let r=n.current;return W(()=>t(r),[t,r]),null}function Dt({active:e,orientation:t,style:n,...r}){let i;switch(t){case`horizontal`:i={height:`100%`,minWidth:`1px`};break;case`vertical`:i={minHeight:`1px`,width:`100%`}}return(0,H.jsx)(`div`,{...r,"data-separator-overlay":e?`active`:`inactive`,style:{...i,...n,flexShrink:0,pointerEvents:`none`}})}function Ot({overlay:e,preview:t}){let{axis:n,offset:r,rect:i,separator:a}=t,o=n.orientation===`horizontal`,s=a?.preview,c=e;return(0,U.isValidElement)(s)&&s.type===Et&&(c=s.props,s=void 0),s??(c?s=(0,H.jsx)(Dt,{...c,active:t.active,orientation:n.orientation}):a&&(s=(0,H.jsx)(wt,{separator:a}))),(0,H.jsx)(`div`,{"aria-hidden":`true`,"data-resize-preview":!0,inert:!0,style:{height:i.height,left:i.left,pointerEvents:`none`,position:`absolute`,top:i.top,transform:o?`translateX(${r}px)`:`translateY(${r}px)`,width:i.width},children:s})}function kt(e,t){let n=(0,U.useRef)({getLayout:()=>({}),setLayout:Wt});(0,U.useImperativeHandle)(t,()=>n.current,[]),W(()=>{Object.assign(n.current,nt({axisId:e}))})}function At({groupId:e,resizePreviewMode:t}){let[n,r]=(0,U.useState)([]),i=(0,U.useRef)(n);return W(()=>{let n=n=>{let a=Ne(e),o=t===`separator`&&n.state===`active`?n.previews.filter(e=>e.axis===a&&(e.active||!I(e.offset,0))):[],s=i.current;s.length===o.length&&o.every((e,t)=>e===s[t])||(i.current=o,r(o))};if(t!==`separator`){n(k());return}let a=fe(({next:e})=>n(e));return n(k()),a},[e,t]),n}function jt({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:a,groupRef:o,id:s,onLayoutChange:c,onLayoutChanged:l,orientation:u=`horizontal`,resizePreviewMode:d=`panel`,resizeTargetMinimumSize:f={coarse:20,fine:10},style:p,...m}){let h=(0,U.useRef)({onLayoutChange:{},onLayoutChanged:{}}),g=se(e=>{z(h.current.onLayoutChange,e)||(h.current.onLayoutChange=e,c?.(e))}),_=se((e,t,n)=>{z(h.current.onLayoutChanged,e)||(h.current.onLayoutChanged=e,l?.(e,{isUserInteraction:t,requestedLayout:n}))}),v=oe(s),[y,b]=(0,U.useState)(),x=At({groupId:v,resizePreviewMode:d}),ee=(0,U.useRef)(null),[te,S]=bt(),C=(0,U.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],separators:[]}),w=ce(ee,a);kt(v,o);let T=se((e,t)=>{let r=N(e);if(r)return{flexGrow:r.layout[t]??1};if(n?.[t])return{flexGrow:n?.[t]}}),E=xt({defaultLayout:n,disableCursor:r,resizeTargetMinimumSize:f}),ne=(0,U.useMemo)(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:v,orientation:u,registerPanel:e=>{let t=C.current;return t.panels=be(u,[...t.panels,e]),S(),()=>{t.panels=t.panels.filter(t=>t!==e),S()}},registerOverlay:e=>(b(e),()=>{b(void 0)}),registerSeparator:e=>{let t=C.current;return t.separators=be(u,[...t.separators,e]),S(),()=>{t.separators=t.separators.filter(t=>t!==e),S()}},updatePanelProps:(e,{disabled:t})=>{let n=C.current.panels.find(t=>t.id===e);n&&(n.constraintProps.disabled=t);let r=Ne(v),i=N(v);r&&i&&F(r,{...i,derivedItemConstraints:je(r)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:n})=>{let r=C.current.separators.find(t=>t.id===e);r&&(r.disabled=t,r.disableDoubleClick=n)}}),[T,v,S,u,E]),D=(0,U.useRef)(null);return W(()=>{let e=ee.current;if(e===null)return;let t=C.current,n;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===t.panels.length){n={};for(let e of t.panels){let t=E.defaultLayout[e.id];t!==void 0&&(n[e.id]=t)}}let r={disabled:!!i,element:e,id:v,mutableState:{defaultLayout:n,disableCursor:!!E.disableCursor,expandedItemSizes:C.current.lastExpandedPanelSizes,layouts:C.current.layouts},orientation:u,items:t.panels,resizePreviewMode:d,get resizeTargetMinimumSize(){return E.resizeTargetMinimumSize},separators:t.separators};D.current=r;let a=vt(r),{defaultLayoutDeferred:o,derivedItemConstraints:s,layout:c,requestedLayout:l}=N(r.id,!0);!o&&s.length>0&&(g(c),_(c,!1,l));let f=Pe(v,e=>{let{defaultLayoutDeferred:t,derivedItemConstraints:n,layout:i,requestedLayout:a}=e.next;if(t||n.length===0)return;yt({derivedItemConstraints:n,axis:r,layout:i,prevLayout:e.prev?.layout,requestedLayout:a});let o=k(),s=o.state!==`active`||!o.hitRegions.some(e=>e.axis===r);g(i),s&&_(i,e.isUserInteraction,a)});return()=>{D.current=null,a(),f()}},[i,v,_,g,u,te,d,E]),(0,U.useEffect)(()=>{let e=D.current;e&&(e.mutableState.defaultLayout=n,e.mutableState.disableCursor=!!r)}),(0,H.jsx)(nn.Provider,{value:ne,children:(0,H.jsxs)(`div`,{...m,className:t,"data-group":!0,"data-testid":v,id:v,ref:w,style:{height:`100%`,width:`100%`,overflow:`hidden`,position:d===`separator`?`relative`:void 0,...p,display:`flex`,flexDirection:u===`horizontal`?`row`:`column`,flexWrap:`nowrap`,touchAction:u===`horizontal`?`pan-y`:`pan-x`},children:[e,x.map(e=>(0,H.jsx)(Ot,{overlay:y,preview:e},e.key))]})})}function Mt(e,t){return`react-resizable-panels:${[e,...t].join(`:`)}`}function Nt({id:e,panelIds:t,storage:n}){let r=Mt(e,[]),i=n.getItem(r);if(i)try{let e=JSON.parse(i);if(t){let n=e[t.join(`,`)];if(n&&Array.isArray(n.layout)&&t.length===n.layout.length){let e={};for(let r=0;r<t.length;r++)e[t[r]]=n.layout[r];return e}}else{let t=Object.keys(e);if(t.length===1){let n=e[t[0]];if(n&&Array.isArray(n.layout)){let e=t[0].split(`,`);if(e.length===n.layout.length){let t={};for(let r=0;r<e.length;r++)t[e[r]]=n.layout[r];return t}}}}}catch{}}function Pt({debounceSaveMs:e=100,onlySaveAfterUserInteractions:t,panelIds:n,storage:r=localStorage,...i}){let a=n!==void 0,o=`id`in i?i.id:i.groupId,s=Mt(o,n??[]),c=(0,U.useSyncExternalStore)(Ft,()=>r.getItem(s),()=>r.getItem(s)),l=(0,U.useMemo)(()=>{if(c){let e=JSON.parse(c),t=Object.values(e);if(Array.from(t).every(e=>typeof e==`number`))return e}},[c]),u=(0,U.useMemo)(()=>{if(!l)return Nt({id:o,panelIds:n,storage:r})},[l,o,n,r]),d=l??u,f=(0,U.useRef)(null),p=(0,U.useCallback)(()=>{let e=f.current;e&&(f.current=null,clearTimeout(e))},[]);(0,U.useLayoutEffect)(()=>()=>{p()},[p]);let m=(0,U.useCallback)((e,n)=>{if(t&&!n.isUserInteraction)return;p();let i=n.requestedLayout??e,s;s=a?Mt(o,Object.keys(i)):Mt(o,[]);try{r.setItem(s,JSON.stringify(i))}catch(e){console.error(e)}},[p,a,o,t,r]);return{defaultLayout:d,onLayoutChange:(0,U.useCallback)(t=>{p(),e===0?m(t,{isUserInteraction:!1}):f.current=setTimeout(()=>{m(t,{isUserInteraction:!1})},e)},[p,e,m]),onLayoutChanged:m}}function Ft(){return function(){}}function It(){return(0,U.useRef)(null)}function Lt(e,t){let{id:n}=Tt(),r=(0,U.useRef)({collapse:Gt,expand:Gt,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Gt});(0,U.useImperativeHandle)(t,()=>r.current,[]),W(()=>{Object.assign(r.current,$e({axisId:n,itemId:e}))})}function Rt({children:e,className:t,collapsedSize:n=`0%`,collapsedThreshold:r,collapsible:i=!1,defaultSize:a,disabled:o,elementRef:s,groupResizeBehavior:c=`preserve-relative-size`,id:l,maxSize:u=`100%`,minSize:d=`0%`,onResize:f,panelRef:p,style:m,...h}){let g=!!l,_=oe(l),v=xt({disabled:o}),y=(0,U.useRef)(null),b=ce(y,s),{getPanelStyles:x,id:ee,orientation:te,registerPanel:S,updatePanelProps:C}=Tt(),w=f!==null,T=se((e,t,n)=>{f?.(e,l,n)});W(()=>{let e=y.current;if(e!==null){let t={element:e,id:_,idIsStable:g,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:w?T:void 0,constraintProps:{groupResizeBehavior:c,collapsedSize:n,collapsedThreshold:r,collapsible:i,defaultSize:a,disabled:v.disabled,maxSize:u,minSize:d}};return S(t)}},[c,n,r,i,a,w,_,g,u,d,T,S,v]),(0,U.useEffect)(()=>{C(_,{disabled:o})},[o,_,C]),Lt(_,p);let E=()=>{let e=x(ee,_);if(e)return JSON.stringify(e)},ne=(0,U.useSyncExternalStore)(e=>Pe(ee,e),E,E),D;return D=ne?JSON.parse(ne):a===void 0?{flexGrow:1}:{flexGrow:void 0,flexShrink:void 0,flexBasis:a},(0,H.jsx)(`div`,{...h,"data-disabled":o||void 0,"data-panel":!0,"data-testid":_,id:_,ref:b,style:{...rn,display:`flex`,flexBasis:0,flexShrink:1,overflow:`visible`,...D},children:(0,H.jsx)(`div`,{className:t,style:{maxHeight:`100%`,maxWidth:`100%`,flexGrow:1,overflow:`auto`,...m,touchAction:te===`horizontal`?`pan-y`:`pan-x`},children:e})})}function zt(){return(0,U.useRef)(null)}function Bt({children:e,className:t,disabled:n,disableDoubleClick:r,elementRef:i,id:a,preview:o,style:s,...c}){let l=oe(a),{disableCursor:u,id:d,orientation:f,registerSeparator:p,updateSeparatorProps:m}=Tt();return(0,H.jsx)(Ct,{attributes:c,axisId:d,axisOrientation:f,className:t,disableCursor:u,disabled:n,disableDoubleClick:r,elementRef:i,id:l,preview:o,registerSeparator:p,requiredStyle:on,style:s,styleDefaults:an,updateSeparatorProps:m,children:e})}var H,U,W,Vt,Ht,G,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,K,en,tn,q,nn,rn,an,on;function sn(){return(sn=e((()=>{H=d(),U=t(),W=typeof window<`u`?U.useLayoutEffect:U.useEffect,(0,U.createContext)(null),Ht=class{#e={};addListener(e,t){let n=this.#e[e];return n===void 0?this.#e[e]=[t]:n.includes(t)||n.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let n=this.#e[e];if(n!==void 0){if(n.length===1)n[0].call(null,t);else{let e=!1,r=null,i=Array.from(n);for(let n=0;n<i.length;n++){let a=i[n];try{a.call(null,t)}catch(t){r===null&&(e=!0,r=t)}}if(e)throw r}}}removeAllListeners(){this.#e={}}removeListener(e,t){let n=this.#e[e];if(n!==void 0){let e=n.indexOf(t);e>=0&&n.splice(e,1)}}},G={cursorFlags:0,state:`inactive`},Ut=new Ht,Wt=e=>e,Gt=()=>{},Kt=1,qt=2,Jt=4,Yt=8,Xt=3,Zt=12,$t=new WeakMap,K=new Map,en=new Ht,tn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/,q=new Map,nn=(0,U.createContext)(null),Et.displayName=`SeparatorOverlay`,jt.displayName=`Group`,Rt.displayName=`Panel`,rn={minHeight:0,maxHeight:`100%`,height:`auto`,minWidth:0,maxWidth:`100%`,width:`auto`,border:`none`,borderWidth:0,padding:0,margin:0},an={flexBasis:`auto`},on={flexGrow:0,flexShrink:0},Bt.displayName=`Separator`})))()}var cn,ln,un,dn,fn,pn;function mn(){return(mn=e((()=>{cn=t(),sn(),a(),i(),f(),l(),o(),[ln,un]=p({name:`ResizableContext`}),dn=({controlRef:e,disabled:t,orientation:n=`horizontal`,...r}={})=>{let i=It();return{disabled:t,groupRef:i,orientation:n,getRootProps:(0,cn.useCallback)((a={})=>({...s({disabled:t,orientation:n},r,a)(),style:{height:void 0,width:void 0,...r.style,...a.style},elementRef:c(a.elementRef,r.ref),groupRef:c(a.groupRef,i,e),onLayoutChange:u(a.onLayoutChange,r.onLayoutChange),onLayoutChanged:u(a.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r])}},fn=({controlRef:e,...t})=>{let n=zt();return{panelRef:n,getItemProps:(0,cn.useCallback)((r={})=>({...s(t,r)(),elementRef:c(r.elementRef,t.ref),panelRef:c(r.panelRef,n,e),onResize:u(r.onResize,t.onResize)}),[n,e,t])}},pn=({disabled:e,...t})=>{let{disabled:i,groupRef:a,orientation:o}=un(),l=e||i,u=(0,cn.useCallback)(e=>{e.preventDefault();let t=a.current?.getLayout();if(!t)return;let n=100/Object.keys(t).length,r=Object.fromEntries(Object.keys(t).map(e=>[e,n]));a.current?.setLayout(r)},[a]),d=(0,cn.useCallback)((e={})=>({...s({"aria-disabled":r(l),"aria-orientation":o,"data-disabled":n(l),disabled:l,tabIndex:l?-1:0},e,t,{onDoubleClick:u})(),elementRef:c(e.elementRef,t.ref)}),[o,l,t,u]);return{getIconProps:(0,cn.useCallback)((e={})=>({"data-icon":``,...e}),[]),getTriggerProps:d}}})))()}var hn,gn,_n,vn,yn,bn,J,Y,X,xn;function Sn(){return(Sn=e((()=>{hn=t(),sn(),y(),m(),te(),ae(),mn(),gn=d(),{PropsContext:_n,usePropsContext:vn,withContext:yn,withProvider:bn}=v(`resizable`,ie),J=bn(({children:e,orientation:t,...n})=>{let r=ee(t),{disabled:i,groupRef:a,orientation:o,getRootProps:s}=dn({orientation:r,...n}),c=(0,hn.useMemo)(()=>({disabled:i,groupRef:a,orientation:o}),[i,o,a]);return(0,gn.jsx)(ln,{value:c,children:(0,gn.jsx)(h.div,{as:jt,...s(),children:e})})},`root`,{transferProps:[`orientation`]})(),Y=yn(e=>{let{getItemProps:t}=fn(e);return(0,gn.jsx)(h.div,{as:Rt,...t()})},`item`)(),X=yn(({children:e,icon:t,iconProps:n,...r})=>{let{getIconProps:i,getTriggerProps:a}=pn(r);return(0,gn.jsxs)(h.div,{as:Bt,...a(),children:[t?(0,gn.jsx)(xn,{...i(n),children:t}):null,e]})},`trigger`)(),xn=yn(`div`,`icon`)()})))()}var Z,Q,Cn,wn,Tn,En,$,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn;function Vn(){return(Vn=e((()=>{Z=t(),b(),Sn(),sn(),D(),ne(),S(),w(),Q=d(),Cn={component:J,title:`Components / Resizable`},wn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),Tn=()=>(0,Q.jsx)(re,{variant:`stack`,rows:[`border`,`spacer`,`plain`],children:(e,t,n)=>(0,Q.jsxs)(J,{variant:t,borderWidth:t===`border`?`1px`:void 0,h:`md`,rounded:t===`border`?`l2`:void 0,children:[(0,Q.jsx)(Y,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`Two`})]},n)}),En=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{colorScheme:`primary`,variant:`spacer`,h:`md`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]}),(0,Q.jsxs)(J,{colorScheme:`red`,variant:`spacer`,h:`md`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),$=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`horizontal`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]}),Dn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{defaultSize:`30%`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),On=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,maxSize:`70%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),kn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]}),An=()=>{let e=(0,Z.useRef)(null),t=(0,Z.useRef)(null),n=(0,Z.useRef)(null);return(0,Q.jsxs)(J,{ref:e,borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{ref:t,display:`center`,children:`One`}),(0,Q.jsx)(X,{ref:n}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})},jn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{icon:(0,Q.jsx)(x,{})}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),(0,Q.jsxs)(J,{variant:`spacer`,h:`md`,orientation:`vertical`,children:[(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Q.jsx)(X,{icon:(0,Q.jsx)(x,{})}),(0,Q.jsx)(Y,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),Mn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Left`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{children:(0,Q.jsxs)(J,{orientation:`vertical`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Top`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Bottom`})]})})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`Top`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{children:(0,Q.jsxs)(J,{children:[(0,Q.jsx)(Y,{display:`center`,children:`Left`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Right`})]})})]})]}),Nn=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(J,{borderWidth:`1px`,disabled:!0,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Three`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,children:`One`}),(0,Q.jsx)(X,{disabled:!0}),(0,Q.jsx)(Y,{display:`center`,children:`Two`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Three`})]})]}),Pn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,onLayoutChange:e=>{console.log(`layout change`,e)},onLayoutChanged:e=>{console.log(`layout changed`,e)},children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]}),Fn=()=>(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{display:`center`,onResize:(e,t,n)=>{console.log(`resize`,e,t,n)},children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]}),In=()=>{let{defaultLayout:e,onLayoutChanged:t}=Pt({id:`persistence`,storage:localStorage});return(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]})},Ln=()=>{let[e,t]=E({key:`showLeft`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),[n,r]=E({key:`showRight`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),{defaultLayout:i,onLayoutChanged:a}=Pt({id:`conditional`,panelIds:(0,Z.useCallback)(()=>{let t=[];return e&&t.push(`left`),t.push(`middle`),n&&t.push(`right`),t},[e,n])(),storage:localStorage});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(T,{gap:`md`,children:[(0,Q.jsxs)(C,{onClick:()=>t(!e),children:[e?`Hidden`:`Show`,` Left`]}),(0,Q.jsxs)(C,{onClick:()=>r(!n),children:[n?`Hidden`:`Show`,` Right`]})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:i,h:`md`,rounded:`l2`,onLayoutChanged:a,children:[e?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Y,{id:`left`,display:`center`,minSize:`10%`,children:`Left`}),(0,Q.jsx)(X,{})]}):null,(0,Q.jsx)(Y,{id:`middle`,display:`center`,minSize:`10%`,children:`Middle`}),n?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`right`,display:`center`,minSize:`10%`,children:`Right`})]}):null]})]})},Rn=()=>{let{defaultLayout:e,onLayoutChanged:t}=Pt({id:`persistence`,storage:(0,Z.useMemo)(()=>({getItem:e=>{let t=document.cookie.match(RegExp(`(^| )${e}=([^;]+)`));return t?t[2]??null:null},setItem:(e,t)=>{document.cookie=`${e}=${t}; max-age=31536000; path=/`}}),[])});return(0,Q.jsxs)(J,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Q.jsx)(Y,{id:`one`,display:`center`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{id:`two`,display:`center`,children:`Two`})]})},zn=()=>{let e=(0,Z.useRef)(null);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(T,{gap:`md`,children:[(0,Q.jsx)(C,{onClick:()=>e.current?.collapse(),children:`Collapse "one"`}),(0,Q.jsx)(C,{onClick:()=>e.current?.expand(),children:`Expand "one"`}),(0,Q.jsx)(C,{onClick:()=>e.current?.resize(`30%`),children:`Resize "one" to 30`}),(0,Q.jsx)(C,{onClick:()=>e.current?.resize(`50%`),children:`Resize "one" to 50`})]}),(0,Q.jsxs)(J,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Q.jsx)(Y,{collapsedSize:`15%`,collapsible:!0,controlRef:e,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Q.jsx)(X,{}),(0,Q.jsx)(Y,{display:`center`,children:`Two`})]})]})},Bn=[`Basic`,`Variant`,`ColorScheme`,`Orientation`,`DefaultSize`,`MinMaxSize`,`Collapsible`,`Refs`,`Icon`,`NestedResizable`,`Disabled`,`onLayoutChange`,`OnResize`,`LocalStorage`,`ConditionalLocalStorage`,`CookieStorage`,`CustomControl`],wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...wn.parameters?.docs?.source}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Tn.parameters?.docs?.source}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`() => {
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
}`,...En.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Dn.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...On.parameters?.docs?.source}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`() => {
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
}`,...kn.parameters?.docs?.source}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`() => {
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
}`,...An.parameters?.docs?.source}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`() => {
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
}`,...jn.parameters?.docs?.source}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Mn.parameters?.docs?.source}}},Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Nn.parameters?.docs?.source}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pn.parameters?.docs?.source}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Fn.parameters?.docs?.source}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`() => {
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
}`,...In.parameters?.docs?.source}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ln.parameters?.docs?.source}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rn.parameters?.docs?.source}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`() => {
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
}`,...zn.parameters?.docs?.source}}}})))()}Vn();export{wn as Basic,kn as Collapsible,En as ColorScheme,Ln as ConditionalLocalStorage,Rn as CookieStorage,zn as CustomControl,Dn as DefaultSize,Nn as Disabled,jn as Icon,In as LocalStorage,On as MinMaxSize,Mn as NestedResizable,Fn as OnResize,$ as Orientation,An as Refs,Tn as Variant,Bn as __namedExportsOrder,Cn as default,Pn as onLayoutChange};