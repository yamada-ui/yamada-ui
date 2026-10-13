import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Ht as r,Zt as i,ct as a,i as o,o as s,ot as c,xn as l,zt as u}from"./props-7EQg-ZC8.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{E as f,T as p,d as m,f as h}from"./utils-DotE62IT.js";import{d as g,i as _,n as v,r as y}from"./create-component-BYXFedxp.js";import{n as b,t as x}from"./grip-vertical-icon-D7jTuknh.js";import{n as ee,t as te}from"./use-value-DXGlFUEt.js";import{r as S,t as C}from"./button-Du7XfJ1d.js";import{n as w,t as ne}from"./wrap-D9SBW8L_.js";import{n as T,t as E}from"./use-local-storage-BtwxP5oU.js";import{n as D,t as re}from"./props-table-BpWovw3Y.js";var ie;function ae(){return(ae=e((()=>{g(),ie=_({base:{icon:{alignItems:`center`,display:`flex`,justifyContent:`center`,left:`50%`,position:`absolute`,top:`50%`,translateX:`-50%`,translateY:`-50%`},item:{boxSize:`full`},root:{boxSize:`full`},trigger:{position:`relative`,transitionDuration:`moderate`,transitionProperty:`common`,_after:{transitionDuration:`moderate`,transitionProperty:`common`}}},variants:{border:{icon:{bg:`colorScheme.muted`,color:`colorScheme.fg`,py:`1`,rounded:`l1`},trigger:{bg:`colorScheme.muted`,focusVisibleRing:`none`,_after:{position:`absolute`},_hover:{bg:`colorScheme.emphasized`},_focusVisible:{bg:`colorScheme.emphasized`}}},plain:{trigger:{focusVisibleRing:`none`,_after:{position:`absolute`}}},spacer:{icon:{color:`colorScheme.fg`,transitionDuration:`moderate`,transitionProperty:`common`},trigger:{focusVisibleRing:`none`,p:`1`,_after:{bg:`transparent`,display:`block`,rounded:`full`},_hover:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}},_focusVisible:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}}}}},props:{orientation:{horizontal:{icon:{transform:`translate(-50%, -50%) rotate(0deg)`}},vertical:{icon:{transform:`translate(-50%, -50%) rotate(90deg)`}}}},compounds:[{css:{trigger:{h:`px`,_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`border`,orientation:`vertical`},{css:{trigger:{w:`px`,_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`border`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,w:`full`}}},variant:`spacer`,orientation:`vertical`},{css:{trigger:{_after:{h:`full`,w:`2`}}},variant:`spacer`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`plain`,orientation:`vertical`},{css:{trigger:{_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`plain`,orientation:`horizontal`}],defaultProps:{variant:`border`,orientation:`horizontal`}})})))()}function oe(e){let t=(0,H.useId)();return`${e??t}`}function se(e){let t=(0,H.useRef)(e);return U(()=>{t.current=e},[e]),(0,H.useCallback)((...e)=>t.current?.(...e),[t])}function ce(...e){return se(t=>{e.forEach(e=>{if(e)switch(typeof e){case`function`:e(t);break;case`object`:e.current=t}})})}function O(e,t=`Assertion error`){if(!e)throw Error(t)}function le(){return an===void 0&&(an=typeof matchMedia==`function`&&!!matchMedia(`(pointer:coarse)`).matches),an}function ue({expandHitTargets:e,axis:t,rect:n}){let r=e?le()?t.resizeTargetMinimumSize.coarse:t.resizeTargetMinimumSize.fine:0;if(n.width<r){let e=r-n.width;n=new DOMRect(n.x-e/2,n.y,n.width+e,n.height)}if(n.height<r){let e=r-n.height;n=new DOMRect(n.x,n.y-e/2,n.width,n.height+e)}return n}function de(e){switch(typeof e){case`number`:return[e,`px`];case`string`:{let t=parseFloat(e);return e.endsWith(`%`)?[t,`%`]:e.endsWith(`px`)?[t,`px`]:e.endsWith(`rem`)?[t,`rem`]:e.endsWith(`em`)?[t,`em`]:e.endsWith(`vh`)?[t,`vh`]:e.endsWith(`vw`)?[t,`vw`]:[t,`%`]}}}function k(){return W}function fe(e){return sn.addListener(`change`,e)}function pe(e,t=[],n,r=!1){let i=W,a={...W};a.cursorFlags=e,a.state===`active`&&(a.didPointerMove||=r,a.previews=t,n&&(a.previewLayoutMap=n)),W=a,sn.emit(`change`,{prev:i,next:a})}function A(e){let t=W;W=e,t.state===`active`&&e.state!==`active`&&t.didPointerMove&&t.hitRegions.forEach(({separator:e})=>{e&&e.element.ownerDocument.activeElement===e.element&&e.element.blur()}),sn.emit(`change`,{prev:t,next:e})}function me(e){W.state!==`active`||!W.previews.some(t=>t.separator===e)||A({...W,previews:W.previews.map(t=>t.separator===e?{...t}:t)})}function he(e){if(W.state===`inactive`)return;let t=W.hitRegions.filter(t=>t.axis!==e),n=W.state===`active`&&W.previews.some(t=>t.axis===e);if(t.length!==W.hitRegions.length||n){if(t.length===0)A({cursorFlags:0,state:`inactive`});else if(W.state===`active`){let n=new Map(W.initialLayoutMap),r=new Map(W.previewLayoutMap);n.delete(e),r.delete(e),A({...W,cursorFlags:0,hitRegions:t,initialLayoutMap:n,previewLayoutMap:r,previews:W.previews.filter(t=>t.axis!==e)})}else A({...W,hitRegions:t})}}function ge(){return gn===void 0&&(gn=!1,typeof window<`u`&&(window.navigator.userAgent.includes(`Chrome`)||window.navigator.userAgent.includes(`Firefox`))&&(gn=!0)),gn}function _e({cursorFlags:e,axes:t,state:n}){let r=0,i=0;switch(n){case`active`:case`hover`:t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case`horizontal`:r++;break;case`vertical`:i++}})}if(r!==0||i!==0){if(n===`active`&&e&&ge()){let t=(e&un)!==0,n=(e&dn)!==0,r=(e&fn)!==0,i=(e&pn)!==0;if(t)return r?`se-resize`:i?`ne-resize`:`e-resize`;if(n)return r?`sw-resize`:i?`nw-resize`:`w-resize`;if(r)return`s-resize`;if(i)return`n-resize`}return ge()?r>0&&i>0?`move`:r>0?`ew-resize`:`ns-resize`:r>0&&i>0?`grab`:r>0?`col-resize`:`row-resize`}}function ve(e){if(!e.defaultView||!e.adoptedStyleSheets)return;let{prevStyle:t,styleSheet:n}=_n.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(n):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]));let r=k();switch(r.state!==`inactive`&&r.ownerDocument!==e&&(r={cursorFlags:0,state:`inactive`}),r.state){case`active`:case`hover`:{let e=_e({cursorFlags:r.cursorFlags,axes:r.hitRegions.map(e=>e.axis),state:r.state}),i=`*, *:hover {cursor: ${e} !important; }`;if(t===i)return;t=i,e?n.cssRules.length===0?n.insertRule(i):n.replaceSync(i):n.cssRules.length===1&&n.deleteRule(0);break}case`inactive`:t=void 0,n.cssRules.length===1&&n.deleteRule(0)}_n.set(e,{prevStyle:t,styleSheet:n})}function ye(e){return e.state===`inactive`?void 0:e.ownerDocument}function be({next:e,prev:t}){let n=ye(t),r=ye(e);n&&n!==r&&ve(n),r&&ve(r)}function xe({axis:e}){let{layoutStrategy:t,orientation:n,items:r}=e;return t?t.calculateAvailableSize():r.reduce((e,t)=>(e+=n===`horizontal`?t.element.offsetWidth:t.element.offsetHeight,e),0)}function Se(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_DISCONNECTED?0:n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function Ce(e,t){return Array.from(t).sort((t,n)=>{let r=e===`horizontal`?we(t,n):Te(t,n);return r===0?Se(t.element,n.element):r})}function we(e,t){let n=e.element.offsetLeft-t.element.offsetLeft;return n===0?e.element.offsetWidth-t.element.offsetWidth:n}function Te(e,t){let n=e.element.offsetTop-t.element.offsetTop;return n===0?e.element.offsetHeight-t.element.offsetHeight:n}function Ee(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE}function De(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function Oe({orientation:e,rects:t,targetRect:n}){let r={x:n.x+n.width/2,y:n.y+n.height/2},i,a=Number.MAX_VALUE;for(let n of t){let{x:t,y:o}=De(r,n),s=e===`horizontal`?t:o;s<a&&(a=s,i=n)}return O(i,`No rect found`),i}function ke({expandHitTargets:e=!0,axis:t,includeDisabled:n=!1}){if(t.layoutStrategy)return t.layoutStrategy.calculateHitRegions({expandHitTargets:e,axis:t,includeDisabled:n});let{element:r,orientation:i,items:a,separators:o}=t,s=Ce(i,Array.from(r.children).filter(Ee).filter(e=>!e.hasAttribute(`data-resize-preview`)).map(e=>({element:e}))).map(({element:e})=>e),c=[],l=!1,u=!1,d=-1,f,p=-1,m=0,h,g=[];{let e=-1;for(let t of s)t.hasAttribute(`data-panel`)&&(e++,t.hasAttribute(`data-disabled`)||(m++,d===-1&&(d=e),p=e))}if(n||m>1){let r=-1;for(let m of s)if(m.hasAttribute(`data-panel`)){r++;let o=a.find(e=>e.element===m);if(o){if(h){let a=h.element.getBoundingClientRect(),s=m.getBoundingClientRect(),_;if(u){let e=i===`horizontal`?new DOMRect(a.right,a.top,0,a.height):new DOMRect(a.left,a.bottom,a.width,0),t=i===`horizontal`?new DOMRect(s.left,s.top,0,s.height):new DOMRect(s.left,s.top,s.width,0);switch(g.length){case 0:_=[e,t];break;case 1:{let n=g[0];_=[n,Oe({orientation:i,rects:[a,s],targetRect:n.element.getBoundingClientRect()})===a?t:e];break}default:_=g}}else _=g.length?g:[i===`horizontal`?new DOMRect(a.right,s.top,s.left-a.right,s.height):new DOMRect(s.left,a.bottom,s.width,s.top-a.bottom)];for(let i of _){let a=ue({expandHitTargets:e,axis:t,rect:`width`in i?i:i.element.getBoundingClientRect()});(n||!l&&!(r<=d||r>p))&&(f??=xe({axis:t}),c.push({axis:t,axisSize:f,items:[h,o],separator:`width`in i?void 0:i,rect:a})),l=!1}}u=!1,h=o,g=[]}}else if(m.hasAttribute(`data-separator`)){m.ariaDisabled!==null&&(l=!0);let e=o.find(e=>e.element===m);e?g.push(e):(h=void 0,g=[])}else u=!0}return c}function Ae(e,t){let n=getComputedStyle(e);return t*parseFloat(n.fontSize)}function je(e,t){let n=getComputedStyle(e.ownerDocument.documentElement);return t*parseFloat(n.fontSize)}function Me(e){return e/100*window.innerHeight}function Ne(e){return e/100*window.innerWidth}function j({axisSize:e,itemElement:t,styleProp:n}){let r,[i,a]=de(n);switch(a){case`%`:r=i/100*e;break;case`px`:r=i;break;case`rem`:r=je(t,i);break;case`em`:r=Ae(t,i);break;case`vh`:r=Me(i);break;case`vw`:r=Ne(i)}return r}function M(e){return parseFloat(e.toFixed(3))}function Pe(e){let{items:t}=e,n=xe({axis:e});return n===0?t.map(e=>({groupResizeBehavior:e.constraintProps.groupResizeBehavior,collapsedSize:0,collapsible:e.constraintProps.collapsible===!0,defaultSize:void 0,disabled:e.constraintProps.disabled,minSize:0,maxSize:100,itemId:e.id})):t.map(e=>{let{element:t,constraintProps:r}=e,i=0;r.collapsedSize!==void 0&&(i=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedSize})/n*100));let a;r.collapsedThreshold!==void 0&&(a=M(j({axisSize:n,itemElement:t,styleProp:r.collapsedThreshold})/n*100));let o;r.defaultSize!==void 0&&(o=M(j({axisSize:n,itemElement:t,styleProp:r.defaultSize})/n*100));let s=0;r.minSize!==void 0&&(s=M(j({axisSize:n,itemElement:t,styleProp:r.minSize})/n*100));let c=100;return r.maxSize!==void 0&&(c=M(j({axisSize:n,itemElement:t,styleProp:r.maxSize})/n*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:i,collapsedThreshold:a,collapsible:r.collapsible===!0,defaultSize:o,disabled:r.disabled,minSize:s,maxSize:c,itemId:e.id}})}function Fe(){yn++}function Ie(){for(let e=0;e<bn.length;e++)try{vn.emit(`axisChange`,bn[e])}catch(e){xn??={error:e}}bn.length=0}function Le(){if(yn===1&&Ie(),yn--,yn===0&&xn){let{error:e}=xn;throw xn=void 0,e}}function Re(e){G=new Map(G),G.delete(e)}function ze(e,t){for(let[t]of G)if(t.id===e)return t}function N(e,t){for(let[t,n]of G)if(t.id===e)return n;if(t)throw Error(`Could not find data for Group with id ${e}`)}function P(){return G}function Be(e,t){return vn.addListener(`axisChange`,n=>{n.axis.id===e&&t(n)})}function F(e,t,n){let r=G.get(e);G=new Map(G),G.set(e,t);let i={axis:e,isUserInteraction:n?.isUserInteraction===!0,prev:r,next:t};yn>0?bn.push(i):vn.emit(`axisChange`,i)}function Ve(e,{pointerId:t,pointerType:n}){return t===e.pointerId||n===`pen`&&e.pointerType===`pen`}function He(e,t,n={}){return e.ownerDocument===t&&(n.pointerId===void 0||Ve(e,n))}function Ue(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function I(e,t,n=0){return Math.abs(M(e)-M(t))<=n}function L(e,t){return I(e,t)?0:e>t?1:-1}function We({overrideDisabledItems:e,itemConstraints:t,prevSize:n,size:r}){let{collapsedSize:i=0,collapsedThreshold:a,collapsible:o,disabled:s,maxSize:c=100,minSize:l=0}=t;if(s&&!e)return n;if(L(r,l)<0){if(o){let e=a??(l-i)/2,t=L(n,i)<=0,o=t?i+e:l-e,s=L(r,o);r=L(r,i)<=0||s<0||a!==void 0&&t&&s===0?i:l}else r=l}return r=Math.min(c,r),r=M(r),r}function Ge({delta:e,initialLayout:t,itemConstraints:n,pivotIndices:r,prevLayout:i,trigger:a}){if(I(e,0))return t;let o=a===`imperative-api`,s=n.map(({itemId:e})=>t[e]),c=n.map(({itemId:e})=>i[e]),l=[...s],[u,d]=r;O(u!=null,`Invalid first pivot index`),O(d!=null,`Invalid second pivot index`);let f=0;switch(a){case`keyboard`:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,i)){let t=o-n;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:d,r=n[t];O(r,`No panel constraints found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(O(n!=null,`Previous layout not found for panel index ${t}`),I(n,o)){let t=n-i;L(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}break;default:{let t=e<0?d:u,r=n[t];O(r,`Panel constraints not found for index ${t}`);let i=s[t],{collapsedSize:a,collapsedThreshold:o,collapsible:c,minSize:l}=r;if(c&&L(i,l)<0){let t=l-a,n=o??t/2;if(L(i+Math.abs(e),l)<0){let r=L(Math.abs(e),n);e=r>0||r===0&&o===void 0&&e<0?e<0?-t:t:0}}break}}{let t=e<0?1:-1,r=e<0?d:u,i=0;for(;;){let e=s[r];O(e!=null,`Previous layout not found for panel index ${r}`);let a=We({overrideDisabledItems:o,itemConstraints:n[r],prevSize:e,size:100})-e;if(i+=a,r+=t,r<0||r>=n.length)break}let a=Math.min(Math.abs(e),Math.abs(i));e=e<0?0-a:a}{let t=e<0?u:d;for(;t>=0&&t<n.length;){let r=Math.abs(e)-Math.abs(f),i=s[t];O(i!=null,`Previous layout not found for panel index ${t}`);let a=i-r,c=We({overrideDisabledItems:o,itemConstraints:n[t],prevSize:i,size:a});if(!I(i,c)&&(f+=i-c,l[t]=c,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(Ue(c,l))return i;{let t=e<0?d:u,r=s[t];O(r!=null,`Previous layout not found for panel index ${t}`);let i=r+f,a=We({overrideDisabledItems:o,itemConstraints:n[t],prevSize:r,size:i});if(l[t]=a,!I(a,i)){let t=i-a,r=e<0?d:u;for(;r>=0&&r<n.length;){let i=l[r];O(i!=null,`Previous layout not found for panel index ${r}`);let a=i+t,s=We({overrideDisabledItems:o,itemConstraints:n[r],prevSize:i,size:a});if(I(i,s)||(t-=s-i,l[r]=s),I(t,0))break;e>0?r--:r++}}}return I(Object.values(l).reduce((e,t)=>t+e,0),100,.1)?l.reduce((e,t,r)=>(e[n[r].itemId]=t,e),{}):i}function R(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(t[n]===void 0||L(e[n],t[n])!==0)return!1;return!0}function Ke(e){Fe();try{qe(e)}finally{Le()}}function qe({commit:e,event:t,hitRegions:n,initialLayoutMap:r,mountedAxes:i,pointerDownAtPoint:a,prevCursorFlags:o}){let s=0,c=k(),l=c.state===`active`?c.previews:[],u=new Map(c.state===`active`?c.previewLayoutMap:void 0);n.forEach(n=>{let{axis:o,axisSize:c}=n,{orientation:d,items:f}=o;if(e&&o.resizePreviewMode!==`separator`)return;let{disableCursor:p}=o.mutableState,m=0;m=a?d===`horizontal`?(t.clientX-a.x)/c*100:(t.clientY-a.y)/c*100:d===`horizontal`?t.clientX<0?-100:100:t.clientY<0?-100:100;let h=r.get(o),g=i.get(o);if(!h||!g)return;let{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:b,separatorToItems:x}=g;if(v&&b&&x){let t=o.resizePreviewMode===`separator`?u.get(o)??b:b,r=Ge({delta:m,initialLayout:h,itemConstraints:v,pivotIndices:n.items.map(e=>f.indexOf(e)),prevLayout:t,trigger:`mouse-or-touch`});if(o.resizePreviewMode===`separator`&&!e&&!R(r,t)){u.set(o,r);let e=0,t=f.map(t=>(e+=r[t.id]-h[t.id],c/100*e));l=l.map(e=>{if(e.axis!==o)return e;let n=t[e.itemIndex];return n===e.offset?e:{...e,offset:n}})}if(R(r,t)&&m!==0&&!p)switch(d){case`horizontal`:s|=m<0?un:dn;break;case`vertical`:s|=m<0?fn:pn}(o.resizePreviewMode!==`separator`||e)&&!R(r,b)&&F(n.axis,{defaultLayoutDeferred:_,derivedItemConstraints:v,axisSize:y,layout:r,requestedAxisSize:y,requestedLayout:r,separatorToItems:x})}});let d=0;t.movementX===0?d|=o&mn:d|=s&mn,t.movementY===0?d|=o&hn:d|=s&hn;let f=c.state===`active`&&(t.clientX!==c.pointerDownAtPoint.x||t.clientY!==c.pointerDownAtPoint.y);pe(d,l,u,f)}function Je(e,t){let n=k();if(n.state!==`active`||!He(n,e,t))return;let r=P();Fe();try{Ke({commit:!0,event:t,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags}),Ie(),A({cursorFlags:0,state:`inactive`}),n.hitRegions.length>0&&(t.preventDefault?.(),n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})}))}finally{Le()}}function Ye(e){if(e.defaultPrevented)return;let{clientX:t,clientY:n,movementX:r,movementY:i}=e;Je(e.currentTarget,{clientX:t,clientY:n,movementX:r,movementY:i})}function Xe(e,t,n){let r,i={x:1/0,y:1/0};for(let a of t){let t=De(n,a.rect);switch(e){case`horizontal`:(t.x<i.x||t.x===i.x&&t.y<=i.y)&&(r=a,i=t);break;case`vertical`:(t.y<i.y||t.y===i.y&&t.x<=i.x)&&(r=a,i=t)}}return r?{distance:i,hitRegion:r}:void 0}function Ze(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function Qe(e,t){if(e===t)throw Error(`Cannot compare node with itself`);let n={a:rt(e),b:rt(t)},r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();O(r,`Stacking order can only be calculated for elements with a common ancestor`);let i={a:nt(tt(n.a)),b:nt(tt(n.b))};if(i.a===i.b){let e=r.childNodes,t={a:n.a.at(-1),b:n.b.at(-1)},i=e.length;for(;i--;){let n=e[i];if(n===t.a)return 1;if(n===t.b)return-1}}return Math.sign(i.a-i.b)}function $e(e){let t=getComputedStyle(it(e)??e).display;return t===`flex`||t===`inline-flex`}function et(e){let t=getComputedStyle(e);return!!(t.position===`fixed`||t.zIndex!==`auto`&&(t.position!==`static`||$e(e))||+t.opacity<1||`transform`in t&&t.transform!==`none`||`webkitTransform`in t&&t.webkitTransform!==`none`||`mixBlendMode`in t&&t.mixBlendMode!==`normal`||`filter`in t&&t.filter!==`none`||`webkitFilter`in t&&t.webkitFilter!==`none`||`isolation`in t&&t.isolation===`isolate`||Sn.test(t.willChange)||t.webkitOverflowScrolling===`touch`)}function tt(e){let t=e.length;for(;t--;){let n=e[t];if(O(n,`Missing node`),et(n))return n}return null}function nt(e){return e&&Number(getComputedStyle(e).zIndex)||0}function rt(e){let t=[];for(;e;)t.push(e),e=it(e);return t}function it(e){let{parentNode:t}=e;return Ze(t)?t.host:t}function at(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function ot(e){try{return e.matches(`:modal`)}catch{return!1}}function st({axisElement:e,hitRegion:t,pointerEventTarget:n}){if(Ee(n)){let t=n.closest(`dialog`);if(t&&!t.contains(e)&&ot(t))return!1}if(!Ee(n)||n.contains(e)||e.contains(n))return!0;if(Qe(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(at(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function ct(e,t,n){let r=[];return t.forEach((t,i)=>{if(i.disabled||i.element.ownerDocument!==n)return;let a=ke({axis:i}),o=Xe(i.orientation,a,{x:e.clientX,y:e.clientY});o&&o.distance.x<=0&&o.distance.y<=0&&st({axisElement:i.element,hitRegion:o.hitRegion.rect,pointerEventTarget:e.target})&&r.push(o.hitRegion)}),r}function z({layout:e,itemConstraints:t}){let n=t.map(({itemId:t})=>e[t]),r=[...n],i=r.reduce((e,t)=>e+t,0);if(Object.keys(e).length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${Object.values(e).map(e=>`${e}%`).join(`, `)}`);if(!I(i,100)&&r.length>0)for(let e=0;e<t.length;e++){let t=r[e];O(t!=null,`No layout data found for index ${e}`);let n=100/i*t;r[e]=n}let a=0;for(let e=0;e<t.length;e++){let i=n[e];O(i!=null,`No layout data found for index ${e}`);let o=r[e];O(o!=null,`No layout data found for index ${e}`);let s=We({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:i,size:o});o!=s&&(a+=o-s,r[e]=s)}if(!I(a,0))for(let e=0;e<t.length;e++){let n=r[e];O(n!=null,`No layout data found for index ${e}`);let i=n+a,o=We({overrideDisabledItems:!0,itemConstraints:t[e],prevSize:n,size:i});if(n!==o&&(a-=o-n,r[e]=o,I(a,0)))break}return r.reduce((e,n,r)=>(e[t[r].itemId]=n,e),{})}function lt({axisId:e,itemId:t}){let n=()=>{let t=P();for(let[n,{defaultLayoutDeferred:r,derivedItemConstraints:i,layout:a,axisSize:o,separatorToItems:s}]of t)if(n.id===e)return{defaultLayoutDeferred:r,derivedItemConstraints:i,axis:n,axisSize:o,layout:a,separatorToItems:s};throw Error(`Group ${e} not found`)},r=()=>{let e=n().derivedItemConstraints.find(e=>e.itemId===t);if(e!==void 0)return e;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{let e=n().axis.items.find(e=>e.id===t);if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},a=()=>{let e=n().layout[t];if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},o=({nextSize:e,items:n,prevLayout:r,derivedItemConstraints:i})=>{let o=a(),s=n.findIndex(e=>e.id===t),c=s===0,l=s===n.length-1;if(l&&e<o&&(c||n.slice(0,s).every((e,t)=>{let n=i[t];return n?.collapsible&&I(n.collapsedSize,r[n.itemId])}))){let e=n.slice(0,s).reduce((e,t)=>e+r[t.id],0);return{...r,[t]:M(100-e)}}return Ge({delta:l?o-e:e-o,initialLayout:r,itemConstraints:i,pivotIndices:l?[s-1,s]:[s,s+1],prevLayout:r,trigger:`imperative-api`})},s=e=>{if(e===a())return;let{defaultLayoutDeferred:t,derivedItemConstraints:r,axis:i,axisSize:s,layout:c,separatorToItems:l}=n(),u=z({layout:o({nextSize:e,items:i.items,prevLayout:c,derivedItemConstraints:r}),itemConstraints:r});R(c,u)||F(i,{defaultLayoutDeferred:t,derivedItemConstraints:r,axisSize:s,layout:u,requestedAxisSize:s,requestedLayout:u,separatorToItems:l})};return{collapse:()=>{let{collapsible:e,collapsedSize:t}=r(),{mutableValues:n}=i(),o=a();e&&o!==t&&(n.expandToSize=o,s(t))},expand:()=>{let{collapsible:e,collapsedSize:t,minSize:n}=r(),{mutableValues:o}=i(),c=a();if(e&&c===t){let e=o.expandToSize??n;e===0&&(e=1),s(e)}},getSize:()=>{let{axis:e}=n(),r=a(),{element:o}=i();return{asPercentage:r,inPixels:e.layoutStrategy?e.layoutStrategy.getItemSizeInPixels(t):e.orientation===`horizontal`?o.offsetWidth:o.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=r(),n=a();return e&&I(t,n)},resize:e=>{let{axis:t}=n(),{element:r}=i(),a=xe({axis:t}),o=M(j({axisSize:a,itemElement:r,styleProp:e})/a*100);s(o)}}}function ut(e){e.defaultPrevented||ct(e,P(),e.currentTarget).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let n=t.items.find(e=>e.constraintProps.defaultSize!==void 0);if(n){let r=n.constraintProps.defaultSize,i=lt({axisId:t.axis.id,itemId:n.id});i&&r!==void 0&&(i.resize(r),e.preventDefault())}}})}function dt(e){let t=P();for(let[n]of t)if(n.separators.some(t=>t.element===e))return n;throw Error(`Could not find parent Group for separator element`)}function ft({axisId:e}){let t=()=>{let t=P();for(let[n,r]of t)if(n.id===e)return{axis:n,...r};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:n}=t();return e?{}:n},setLayout(e){let{defaultLayoutDeferred:n,derivedItemConstraints:r,axis:i,axisSize:a,layout:o,separatorToItems:s}=t(),c=z({layout:e,itemConstraints:r});return n?o:(R(o,c)||F(i,{defaultLayoutDeferred:n,derivedItemConstraints:r,axisSize:a,layout:c,requestedAxisSize:a,requestedLayout:c,separatorToItems:s}),c)}}}function B(e,t){let n=dt(e),r=N(n.id,!0),i=n.separators.find(t=>t.element===e);O(i,`Matching separator not found`);let a=r.separatorToItems.get(i);O(a,`Matching panels not found`);let o=a.map(e=>n.items.indexOf(e)),s=ft({axisId:n.id}).getLayout(),c=z({layout:Ge({delta:t,initialLayout:s,itemConstraints:r.derivedItemConstraints,pivotIndices:o,prevLayout:s,trigger:`keyboard`}),itemConstraints:r.derivedItemConstraints});R(s,c)||F(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedItemConstraints:r.derivedItemConstraints,axisSize:r.axisSize,layout:c,requestedAxisSize:r.axisSize,requestedLayout:c,separatorToItems:r.separatorToItems},{isUserInteraction:!0})}function pt(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=dt(t);if(!(n.disabled||n.separators.find(e=>e.element===t)?.disabled))switch(e.key){case`ArrowDown`:e.preventDefault(),n.orientation===`vertical`&&B(t,5);break;case`ArrowLeft`:e.preventDefault(),n.orientation===`horizontal`&&B(t,-5);break;case`ArrowRight`:e.preventDefault(),n.orientation===`horizontal`&&B(t,5);break;case`ArrowUp`:e.preventDefault(),n.orientation===`vertical`&&B(t,-5);break;case`End`:e.preventDefault(),B(t,100);break;case`Enter`:{e.preventDefault();let{derivedItemConstraints:r,layout:i,separatorToItems:a}=N(n.id,!0),o=n.separators.find(e=>e.element===t);O(o,`Matching separator not found`);let s=a.get(o);O(s,`Matching panels not found`);let c=s[0],l=r.find(e=>e.itemId===c.id);if(O(l,`Panel metadata not found`),l.collapsible){let e=i[c.id];B(t,(l.collapsedSize===e?n.mutableState.expandedItemSizes[c.id]??l.minSize:l.collapsedSize)-e)}break}case`F6`:{e.preventDefault();let t=n.separators.map(e=>e.element),r=Array.from(t).findIndex(t=>t===e.currentTarget);O(r!==null,`Index not found`),t[e.shiftKey?r>0?r-1:t.length-1:r+1<t.length?r+1:0].focus({preventScroll:!0});break}case`Home`:e.preventDefault(),B(t,-100)}}function mt(e,t){let n=k();if(n.state!==`active`||!He(n,e,t))return!1;let r=P();Fe();try{n.previewLayoutMap.forEach((e,t)=>{let n=r.get(t);t.resizePreviewMode===`separator`&&n&&!R(e,n.layout)&&F(t,{...n,layout:e,requestedAxisSize:n.axisSize,requestedLayout:e})}),Ie(),A({cursorFlags:0,state:`inactive`}),n.hitRegions.forEach(e=>{if(!r.has(e.axis))return;let t=N(e.axis.id,!0);F(e.axis,t,{isUserInteraction:!0})})}finally{Le()}return!0}function ht(e){let t=k();if(t.state!==`active`)return;let n=t.hitRegions.flatMap(({separator:e})=>e?[e.element]:[]);!n.some(t=>t===e.target)||n.some(t=>t.hasPointerCapture?.(e.pointerId))||mt(e.currentTarget,e)}function gt(e){mt(e.currentTarget,e)}function _t(e,t){let{element:n,orientation:r,items:i}=e,a=n.getBoundingClientRect(),o=r===`horizontal`;return ke({expandHitTargets:!1,axis:e,includeDisabled:!0}).map(({items:r,rect:s,separator:c},l)=>{let u=i.indexOf(r[0]),d=o?s.left+s.width/2:s.top+s.height/2;return{active:t.some(t=>{if(t.axis!==e||t.items[0]!==r[0])return!1;if(c||t.separator)return t.separator===c;let n=o?t.rect.left+t.rect.width/2:t.rect.top+t.rect.height/2;return I(d,n)}),axis:e,key:c?`separator-${c.id}`:`panel-${r[0].id}-${l}`,offset:0,itemIndex:u,rect:new DOMRect((o&&!c?d:s.left)-a.left-n.clientLeft+n.scrollLeft,(!o&&!c?d:s.top)-a.top-n.clientTop+n.scrollTop,o&&!c?0:s.width,!o&&!c?0:s.height),separator:c}})}function vt(e){if(e.defaultPrevented||e.pointerType===`mouse`&&e.button>0)return;let t=k();if(t.state===`active`){Ve(t,e)&&mt(t.ownerDocument,t);return}let n=P(),r=ct(e,n,e.currentTarget);if(r.length===0)return;let i=new Map,a=!1;r.forEach(e=>{e.separator&&(a||(a=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let t=n.get(e.axis);t&&i.set(e.axis,t.layout)});let o=Array.from(i.keys()).flatMap(e=>e.resizePreviewMode===`separator`?_t(e,r):[]);A({cursorFlags:0,didPointerMove:!1,hitRegions:r,initialLayoutMap:i,ownerDocument:e.currentTarget,pointerDownAtPoint:{x:e.clientX,y:e.clientY},pointerId:e.pointerId,pointerType:e.pointerType,previewLayoutMap:new Map(i),previews:o,state:`active`}),e.preventDefault()}function yt(e){let t=e.currentTarget,n=P(),r=k();if(r.state===`active`){if(!He(r,t,e))return;Ke({commit:!1,event:e,hitRegions:r.hitRegions,initialLayoutMap:r.initialLayoutMap,mountedAxes:n,prevCursorFlags:r.cursorFlags})}}function bt(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=k(),r=P();switch(n.state){case`active`:if(!He(n,t,e))return;if(e.buttons===0){mt(t,e);return}for(let t of n.hitRegions)if(t.separator){let{element:n}=t.separator;n.isConnected&&!n.hasPointerCapture?.(e.pointerId)&&n.setPointerCapture?.(e.pointerId)}Ke({commit:!1,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedAxes:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags});break;default:{let i=ct(e,r,t);i.length===0?n.state!==`inactive`&&A({cursorFlags:0,state:`inactive`}):A({cursorFlags:0,hitRegions:i,ownerDocument:t,state:`hover`});break}}}function xt(e){if(e.relatedTarget instanceof HTMLIFrameElement){let t=k();t.state===`hover`&&t.ownerDocument===e.currentTarget&&A({cursorFlags:0,state:`inactive`})}}function St(e){e.defaultPrevented||e.pointerType===`mouse`&&e.button>0||Je(e.currentTarget,e)}function Ct(e){e.target===e.currentTarget&&mt(e.currentTarget.document)}function wt(e){mt(e.currentTarget.document)}function Tt(e){let t=0,n=0,r={};for(let i of e)if(i.defaultSize!==void 0){t++;let e=M(i.defaultSize);n+=e,r[i.itemId]=e}else r[i.itemId]=void 0;let i=e.length-t;if(i!==0){let t=M((100-n)/i);for(let n of e)n.defaultSize===void 0&&(r[n.itemId]=t)}return r}function Et(e,t){let n=e.map(e=>e.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(let e of n)if(!r.includes(e))return!1;return!0}function Dt({axis:e,itemConstraints:t}){let n=e.items.map(({id:e})=>e).join(`,`),r=e.mutableState.defaultLayout;return e.mutableState.layouts[n]??(r&&Et(e.items,r)?r:Tt(t))}function Ot({itemIds:e,layout:t}){return z({layout:t,itemConstraints:e.map(e=>({collapsedSize:0,collapsible:!1,defaultSize:void 0,disabled:void 0,itemId:e,maxSize:100,minSize:0}))})}function kt(e,t,n){if(!n[0])return;let r=e.items.find(e=>e.element===t);if(!r||!r.onResize)return;let i=xe({axis:e}),a=e.orientation===`horizontal`?r.element.offsetWidth:r.element.offsetHeight,o=r.mutableValues.prevSize,s={asPercentage:M(a/i*100),inPixels:a};r.mutableValues.prevSize=s,r.onResize(s,r.id,o)}function At(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function jt(e,t){return e.length===t.length&&e.every((e,n)=>At(e,t[n]))}function Mt({axis:e,nextAxisSize:t,prevAxisSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,a=0,o=!1,s=new Map,c=[];for(let l of e.items){let e=r[l.id]??0;switch(l.constraintProps.groupResizeBehavior){case`preserve-pixel-size`:{o=!0;let r=M(e/100*n/t*100);s.set(l.id,r),i+=r;break}default:c.push(l.id),a+=e}}if(!o||c.length===0)return r;let l=100-i,u={...r};if(s.forEach((e,t)=>{u[t]=e}),a>0)for(let e of c)u[e]=M((r[e]??0)/a*l);else{let e=M(l/c.length);for(let t of c)u[t]=e}return u}function Nt(e){let t=!0;O(e.element.ownerDocument.defaultView,`Cannot register an unmounted Group`);let n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,a=new n(n=>{let r;Fe();try{for(let i of n){let{borderBoxSize:n,target:a}=i;if(a===e.element){if(t){let t=xe({axis:e});if(t===0)break;let n=N(e.id);if(!n)break;let r=Pe(e),i=n.requestedAxisSize,a=n.requestedLayout;n.defaultLayoutDeferred&&(i=t,a=Ot({itemIds:e.items.map(({id:e})=>e),layout:Dt({axis:e,itemConstraints:r})}));let o=z({layout:Mt({axis:e,nextAxisSize:t,prevAxisSize:i,prevLayout:a}),itemConstraints:r});if(!n.defaultLayoutDeferred&&R(n.layout,o)&&jt(n.derivedItemConstraints,r)&&n.axisSize===t)continue;F(e,{defaultLayoutDeferred:!1,derivedItemConstraints:r,axisSize:t,layout:o,requestedAxisSize:i,requestedLayout:a,separatorToItems:n.separatorToItems})}}else try{kt(e,a,n)}catch(e){r??={error:e}}}}finally{Le()}if(r)throw r.error});a.observe(e.element),e.items.forEach(e=>{O(!r.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.onResize&&a.observe(e.element)});let o=xe({axis:e}),s=Pe(e),c=Dt({axis:e,itemConstraints:s}),l=z({layout:c,itemConstraints:s}),u=e.element.ownerDocument,d=u.defaultView;K.set(u,(K.get(u)??0)+1);let f=new Map;return ke({axis:e,includeDisabled:!0}).forEach(e=>{e.separator&&f.set(e.separator,e.items)}),F(e,{defaultLayoutDeferred:o===0,derivedItemConstraints:s,axisSize:o,layout:l,requestedAxisSize:o,requestedLayout:Ot({itemIds:e.items.map(({id:e})=>e),layout:c}),separatorToItems:f}),e.separators.forEach(e=>{O(!i.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),i.add(e.id),e.element.addEventListener(`keydown`,pt)}),Cn||(Cn=!0,fe(be)),K.get(u)===1&&(u.addEventListener(`contextmenu`,Ye,!0),u.addEventListener(`dblclick`,ut,!0),u.addEventListener(`lostpointercapture`,ht,!0),u.addEventListener(`pointercancel`,gt,!0),u.addEventListener(`pointerdown`,vt,!0),u.addEventListener(`pointerleave`,yt),u.addEventListener(`pointermove`,bt),u.addEventListener(`pointerout`,xt),u.addEventListener(`pointerup`,St,!0),d?.addEventListener(`blur`,Ct),d?.addEventListener(`pagehide`,wt)),function(){t=!1,K.set(u,Math.max(0,(K.get(u)??0)-1)),Re(e),he(e),e.separators.forEach(e=>{e.element.removeEventListener(`keydown`,pt)}),K.get(u)||(u.removeEventListener(`contextmenu`,Ye,!0),u.removeEventListener(`dblclick`,ut,!0),u.removeEventListener(`lostpointercapture`,ht,!0),u.removeEventListener(`pointercancel`,gt,!0),u.removeEventListener(`pointerdown`,vt,!0),u.removeEventListener(`pointerleave`,yt),u.removeEventListener(`pointermove`,bt),u.removeEventListener(`pointerout`,xt),u.removeEventListener(`pointerup`,St,!0),d?.removeEventListener(`blur`,Ct),d?.removeEventListener(`pagehide`,wt)),a.disconnect()}}function Pt({derivedItemConstraints:e,axis:t,layout:n,prevLayout:r,requestedLayout:i}){let a=t.items.map(({id:e})=>e).join(`,`);t.mutableState.layouts[a]=i,r&&e.forEach(e=>{if(e.collapsible){let i=I(e.collapsedSize,n[e.itemId]),a=I(e.collapsedSize,r[e.itemId]);i&&!a&&(t.mutableState.expandedItemSizes[e.itemId]=r[e.itemId])}})}function Ft(){let[e,t]=(0,H.useState)({});return[e,(0,H.useCallback)(()=>t({}),[])]}function It(e){let t=(0,H.useRef)({...e});return U(()=>{for(let n in e)t.current[n]=e[n]},[e]),t.current}function Lt({layout:e,itemConstraints:t,itemId:n,itemIndex:r}){let i,a,o=e[n],s=t.find(e=>e.itemId===n);if(s){let c=s.maxSize,l=s.collapsible?s.collapsedSize:s.minSize,u=[r,r+1];a=z({layout:Ge({delta:l-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n],i=z({layout:Ge({delta:c-o,initialLayout:e,itemConstraints:t,pivotIndices:u,prevLayout:e}),itemConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:a,valueNow:o}}function Rt({attributes:e,axisId:t,axisOrientation:n,children:r,className:i,disableCursor:a,disabled:o,disableDoubleClick:s,elementRef:c,id:l,isSharedHitRegion:u,preview:d,registerSeparator:f,requiredStyle:p,style:m,styleDefaults:h,tabIndex:g=0,updateSeparatorProps:_}){let v=It({disabled:o,disableDoubleClick:s,children:r,className:i,preview:d,style:m}),[y,b]=(0,H.useState)({}),[x,ee]=(0,H.useState)(`inactive`),[te,S]=(0,H.useState)(!1),C=(0,H.useRef)(null),w=(0,H.useRef)(null),ne=ce(C,c),T=n===`horizontal`?`vertical`:`horizontal`;U(()=>{let e=C.current;if(e!==null){let n={disabled:v.disabled,disableDoubleClick:v.disableDoubleClick,element:e,id:l,get children(){return v.children},get className(){return v.className},get preview(){return v.preview},get style(){return v.style}};w.current=n;let r=f(n),i=fe(e=>{ee(e.next.state!==`inactive`&&e.next.hitRegions.some(e=>e.separator===n||(u?.(e)??!1))?e.next.state:`inactive`)}),a=Be(t,e=>{let{derivedItemConstraints:t,layout:r,separatorToItems:i}=e.next,a=i.get(n);if(a){let n=a[0],i=t.findIndex(e=>e.itemId===n.id),{layoutStrategy:o}=e.axis;b({...Lt({layout:r,itemConstraints:t,itemId:n.id,itemIndex:i}),...o?.getItemAriaControls&&{valueControls:o.getItemAriaControls(n.id)}})}});return()=>{w.current=null,i(),a(),r()}}},[t,l,u,f,v]),U(()=>{let e=w.current;e&&me(e)},[d]),(0,H.useEffect)(()=>{_(l,{disabled:o,disableDoubleClick:s})},[o,s,l,_]);let E;o&&!a&&(E=`not-allowed`);let D;if(o)D=`disabled`;else switch(x){case`active`:D=`active`;break;default:D=te?`focus`:x}return(0,V.jsx)(`div`,{...e,"aria-controls":y.valueControls,"aria-disabled":o||void 0,"aria-orientation":T,"aria-valuemax":y.valueMax,"aria-valuemin":y.valueMin,"aria-valuenow":y.valueNow,children:r,className:i,"data-separator":D,"data-testid":l,id:l,onBlur:()=>S(!1),onFocus:()=>S(!0),ref:ne,role:`separator`,style:{...h,cursor:E,...m,...p,touchAction:`none`},tabIndex:o?void 0:g})}function zt(e){for(let t=1;t<e.length;t++)if(Se(e[t-1],e[t])>0)return!1;return!0}function Bt({separator:e}){let{element:t}=e,n=(0,H.useRef)(null);return U(()=>{let e=t.cloneNode(!0),r=[t,...t.querySelectorAll(`*`)],i=[e,...e.querySelectorAll(`*`)],a=t.ownerDocument.defaultView;return r.forEach((e,t)=>{let n=i[t];if(n instanceof a.HTMLElement||n instanceof a.SVGElement){let t=a.getComputedStyle(e);for(let e=0;e<t.length;e++){let r=t.item(e);n.style.setProperty(r,t.getPropertyValue(r))}}n.removeAttribute(`data-testid`),n.removeAttribute(`id`)}),Object.assign(e.style,{boxSizing:`border-box`,height:`100%`,margin:`0`,position:`static`,transform:`none`,width:`100%`}),n.current.appendChild(e),()=>e.remove()},[t]),(0,V.jsx)(`div`,{ref:n,style:{height:`100%`,opacity:.65,pointerEvents:`none`,width:`100%`}})}function Vt(){let e=(0,H.useContext)(wn);return O(e,`Group Context not found; did you render a Panel or Separator outside of a Group?`),e}function Ht(e){let{registerOverlay:t}=Vt(),n=(0,H.useRef)(e);At(n.current,e)||(n.current=e);let r=n.current;return U(()=>t(r),[t,r]),null}function Ut({active:e,orientation:t,style:n,...r}){let i;switch(t){case`horizontal`:i={height:`100%`,minWidth:`1px`};break;case`vertical`:i={minHeight:`1px`,width:`100%`}}return(0,V.jsx)(`div`,{...r,"data-separator-overlay":e?`active`:`inactive`,style:{...i,...n,flexShrink:0,pointerEvents:`none`}})}function Wt({overlay:e,preview:t}){let{axis:n,offset:r,rect:i,separator:a}=t,o=n.orientation===`horizontal`,s=a?.preview,c=e;return(0,H.isValidElement)(s)&&s.type===Ht&&(c=s.props,s=void 0),s??(c?s=(0,V.jsx)(Ut,{...c,active:t.active,orientation:n.orientation}):a&&(s=(0,V.jsx)(Bt,{separator:a}))),(0,V.jsx)(`div`,{"aria-hidden":`true`,"data-resize-preview":!0,inert:!0,style:{height:i.height,left:i.left,pointerEvents:`none`,position:`absolute`,top:i.top,transform:o?`translateX(${r}px)`:`translateY(${r}px)`,width:i.width},children:s})}function Gt(e){return Array.from(e).sort(Se)}function Kt(e,t){let n=(0,H.useRef)({getLayout:()=>({}),setLayout:cn});(0,H.useImperativeHandle)(t,()=>n.current,[]),U(()=>{Object.assign(n.current,ft({axisId:e}))})}function qt({groupId:e,resizePreviewMode:t}){let[n,r]=(0,H.useState)([]),i=(0,H.useRef)(n);return U(()=>{let n=n=>{let a=ze(e),o=t===`separator`&&n.state===`active`?n.previews.filter(e=>e.axis===a&&(e.active||!I(e.offset,0))):[],s=i.current;s.length===o.length&&o.every((e,t)=>e===s[t])||(i.current=o,r(o))};if(t!==`separator`){n(k());return}let a=fe(({next:e})=>n(e));return n(k()),a},[e,t]),n}function Jt({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:a,groupRef:o,id:s,onLayoutChange:c,onLayoutChanged:l,orientation:u=`horizontal`,resizePreviewMode:d=`panel`,resizeTargetMinimumSize:f={coarse:20,fine:10},style:p,...m}){let h=(0,H.useRef)({onLayoutChange:{},onLayoutChanged:{}}),g=se(e=>{R(h.current.onLayoutChange,e)||(h.current.onLayoutChange=e,c?.(e))}),_=se((e,t,n)=>{R(h.current.onLayoutChanged,e)||(h.current.onLayoutChanged=e,l?.(e,{isUserInteraction:t,requestedLayout:n}))}),v=oe(s),[y,b]=(0,H.useState)(),x=qt({groupId:v,resizePreviewMode:d}),ee=(0,H.useRef)(null),[te,S]=Ft(),C=(0,H.useRef)([]),w=(0,H.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],separators:[]}),ne=ce(ee,a);Kt(v,o);let T=se((e,t)=>{let r=N(e);if(r)return{flexGrow:r.layout[t]??1};if(n?.[t])return{flexGrow:n?.[t]}}),E=It({defaultLayout:n,disableCursor:r,resizeTargetMinimumSize:f}),D=(0,H.useMemo)(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:v,orientation:u,registerPanel:e=>{let t=w.current;return t.panels=Ce(u,[...t.panels,e]),S(),()=>{t.panels=t.panels.filter(t=>t!==e),S()}},registerOverlay:e=>(b(e),()=>{b(void 0)}),registerSeparator:e=>{let t=w.current;return t.separators=Ce(u,[...t.separators,e]),S(),()=>{t.separators=t.separators.filter(t=>t!==e),S()}},updatePanelProps:(e,{disabled:t})=>{let n=w.current.panels.find(t=>t.id===e);n&&(n.constraintProps.disabled=t);let r=ze(v),i=N(v);r&&i&&F(r,{...i,derivedItemConstraints:Pe(r)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:n})=>{let r=w.current.separators.find(t=>t.id===e);r&&(r.disabled=t,r.disableDoubleClick=n)}}),[T,v,S,u,E]),re=(0,H.useRef)(null);return U(()=>{let e=ee.current;if(e===null)return;let t=w.current;t.panels=Ce(u,t.panels),t.separators=Ce(u,t.separators),C.current=Gt([...t.panels.map(({element:e})=>e),...t.separators.map(({element:e})=>e)]);let n;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===t.panels.length){n={};for(let e of t.panels){let t=E.defaultLayout[e.id];t!==void 0&&(n[e.id]=t)}}let r={disabled:!!i,element:e,id:v,mutableState:{defaultLayout:n,disableCursor:!!E.disableCursor,expandedItemSizes:w.current.lastExpandedPanelSizes,layouts:w.current.layouts},orientation:u,items:t.panels,resizePreviewMode:d,get resizeTargetMinimumSize(){return E.resizeTargetMinimumSize},separators:t.separators};re.current=r;let a=Nt(r),{defaultLayoutDeferred:o,derivedItemConstraints:s,layout:c,requestedLayout:l}=N(r.id,!0);if(!o&&s.length>0)try{try{g(c)}finally{_(c,!1,l)}}catch(e){throw re.current=null,a(),e}let f=Be(v,e=>{let{defaultLayoutDeferred:t,derivedItemConstraints:n,layout:i,requestedLayout:a}=e.next;if(t||n.length===0)return;Pt({derivedItemConstraints:n,axis:r,layout:i,prevLayout:e.prev?.layout,requestedLayout:a});let o=k(),s=o.state!==`active`||!o.hitRegions.some(e=>e.axis===r);try{g(i)}finally{s&&_(i,e.isUserInteraction,a)}});return()=>{re.current=null,a(),f()}},[i,v,_,g,u,te,d,E]),U(()=>{zt(C.current)||S()}),(0,H.useEffect)(()=>{let e=re.current;e&&(e.mutableState.defaultLayout=n,e.mutableState.disableCursor=!!r)}),(0,V.jsx)(wn.Provider,{value:D,children:(0,V.jsxs)(`div`,{...m,className:t,"data-group":!0,"data-testid":v,id:v,ref:ne,style:{height:`100%`,width:`100%`,overflow:`hidden`,position:d===`separator`?`relative`:void 0,...p,display:`flex`,flexDirection:u===`horizontal`?`row`:`column`,flexWrap:`nowrap`,touchAction:u===`horizontal`?`pan-y`:`pan-x`},children:[e,x.map(e=>(0,V.jsx)(Wt,{overlay:y,preview:e},e.key))]})})}function Yt(e,t){return`react-resizable-panels:${[e,...t].join(`:`)}`}function Xt({id:e,panelIds:t,storage:n}){let r=Yt(e,[]),i=n.getItem(r);if(i)try{let e=JSON.parse(i);if(t){let n=e[t.join(`,`)];if(n&&Array.isArray(n.layout)&&t.length===n.layout.length){let e={};for(let r=0;r<t.length;r++)e[t[r]]=n.layout[r];return e}}else{let t=Object.keys(e);if(t.length===1){let n=e[t[0]];if(n&&Array.isArray(n.layout)){let e=t[0].split(`,`);if(e.length===n.layout.length){let t={};for(let r=0;r<e.length;r++)t[e[r]]=n.layout[r];return t}}}}}catch{}}function Zt({debounceSaveMs:e=100,onlySaveAfterUserInteractions:t,panelIds:n,storage:r=localStorage,...i}){let a=n!==void 0,o=`id`in i?i.id:i.groupId,s=Yt(o,n??[]),c=(0,H.useSyncExternalStore)(Qt,()=>r.getItem(s),()=>r.getItem(s)),l=(0,H.useMemo)(()=>{if(c){let e=JSON.parse(c),t=Object.values(e);if(Array.from(t).every(e=>typeof e==`number`))return e}},[c]),u=(0,H.useMemo)(()=>{if(!l)return Xt({id:o,panelIds:n,storage:r})},[l,o,n,r]),d=l??u,f=(0,H.useRef)(null),p=(0,H.useCallback)(()=>{let e=f.current;e&&(f.current=null,clearTimeout(e))},[]);(0,H.useLayoutEffect)(()=>()=>{p()},[p]);let m=(0,H.useCallback)((e,n)=>{if(t&&!n.isUserInteraction)return;p();let i=n.requestedLayout??e,s;s=a?Yt(o,Object.keys(i)):Yt(o,[]);try{r.setItem(s,JSON.stringify(i))}catch(e){console.error(e)}},[p,a,o,t,r]);return{defaultLayout:d,onLayoutChange:(0,H.useCallback)(t=>{p(),e===0?m(t,{isUserInteraction:!1}):f.current=setTimeout(()=>{m(t,{isUserInteraction:!1})},e)},[p,e,m]),onLayoutChanged:m}}function Qt(){return function(){}}function $t(){return(0,H.useRef)(null)}function en(e,t){let{id:n}=Vt(),r=(0,H.useRef)({collapse:ln,expand:ln,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:ln});(0,H.useImperativeHandle)(t,()=>r.current,[]),U(()=>{Object.assign(r.current,lt({axisId:n,itemId:e}))})}function tn({children:e,className:t,collapsedSize:n=`0%`,collapsedThreshold:r,collapsible:i=!1,defaultSize:a,disabled:o,elementRef:s,groupResizeBehavior:c=`preserve-relative-size`,id:l,maxSize:u=`100%`,minSize:d=`0%`,onResize:f,panelRef:p,style:m,...h}){let g=!!l,_=oe(l),v=It({disabled:o}),y=(0,H.useRef)(null),b=ce(y,s),{getPanelStyles:x,id:ee,orientation:te,registerPanel:S,updatePanelProps:C}=Vt(),w=f!==null,ne=se((e,t,n)=>{f?.(e,l,n)});U(()=>{let e=y.current;if(e!==null){let t={element:e,id:_,idIsStable:g,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:w?ne:void 0,constraintProps:{groupResizeBehavior:c,collapsedSize:n,collapsedThreshold:r,collapsible:i,defaultSize:a,disabled:v.disabled,maxSize:u,minSize:d}};return S(t)}},[c,n,r,i,a,w,_,g,u,d,ne,S,v]),(0,H.useEffect)(()=>{C(_,{disabled:o})},[o,_,C]),en(_,p);let T=()=>{let e=x(ee,_);if(e)return JSON.stringify(e)},E=(0,H.useSyncExternalStore)(e=>Be(ee,e),T,T),D;return D=E?JSON.parse(E):a===void 0?{flexGrow:1}:{flexGrow:void 0,flexShrink:void 0,flexBasis:a},(0,V.jsx)(`div`,{...h,"data-disabled":o||void 0,"data-panel":!0,"data-testid":_,id:_,ref:b,style:{...Tn,display:`flex`,flexBasis:0,flexShrink:1,overflow:`visible`,...D},children:(0,V.jsx)(`div`,{className:t,style:{maxHeight:`100%`,maxWidth:`100%`,flexGrow:1,overflow:`auto`,...m,touchAction:te===`horizontal`?`pan-y`:`pan-x`},children:e})})}function nn(){return(0,H.useRef)(null)}function rn({children:e,className:t,disabled:n,disableDoubleClick:r,elementRef:i,id:a,preview:o,style:s,...c}){let l=oe(a),{disableCursor:u,id:d,orientation:f,registerSeparator:p,updateSeparatorProps:m}=Vt();return(0,V.jsx)(Rt,{attributes:c,axisId:d,axisOrientation:f,className:t,disableCursor:u,disabled:n,disableDoubleClick:r,elementRef:i,id:l,preview:o,registerSeparator:p,requiredStyle:Dn,style:s,styleDefaults:En,updateSeparatorProps:m,children:e})}var V,H,U,an,on,W,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,G,vn,yn,bn,xn,Sn,K,Cn,wn,Tn,En,Dn;function On(){return(On=e((()=>{V=d(),H=t(),U=typeof window<`u`?H.useLayoutEffect:H.useEffect,(0,H.createContext)(null),on=class{#e={};addListener(e,t){let n=this.#e[e];return n===void 0?this.#e[e]=[t]:n.includes(t)||n.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let n=this.#e[e];if(n!==void 0){if(n.length===1){n[0].call(null,t);return}let e,r=Array.from(n);for(let n=0;n<r.length;n++){let i=r[n];try{i.call(null,t)}catch(t){e??={error:t}}}if(e)throw e.error}}removeAllListeners(){this.#e={}}removeListener(e,t){let n=this.#e[e];if(n!==void 0){let e=n.indexOf(t);e>=0&&n.splice(e,1)}}},W={cursorFlags:0,state:`inactive`},sn=new on,cn=e=>e,ln=()=>{},un=1,dn=2,fn=4,pn=8,mn=3,hn=12,_n=new WeakMap,G=new Map,vn=new on,yn=0,bn=[],Sn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/,K=new Map,Cn=!1,wn=(0,H.createContext)(null),Ht.displayName=`SeparatorOverlay`,Jt.displayName=`Group`,tn.displayName=`Panel`,Tn={minHeight:0,maxHeight:`100%`,height:`auto`,minWidth:0,maxWidth:`100%`,width:`auto`,border:`none`,borderWidth:0,padding:0,margin:0},En={flexBasis:`auto`},Dn={flexGrow:0,flexShrink:0},rn.displayName=`Separator`})))()}var kn,An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{kn=t(),On(),o(),i(),f(),n(),c(),[An,jn]=p({name:`ResizableContext`}),Mn=({controlRef:e,disabled:t,orientation:n=`horizontal`,...r}={})=>{let i=$t();return{disabled:t,groupRef:i,orientation:n,getRootProps:(0,kn.useCallback)((o={})=>({...s({disabled:t,orientation:n},r,o)(),style:{height:void 0,width:void 0,...r.style,...o.style},elementRef:a(o.elementRef,r.ref),groupRef:a(o.groupRef,i,e),onLayoutChange:l(o.onLayoutChange,r.onLayoutChange),onLayoutChanged:l(o.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r])}},Nn=({controlRef:e,...t})=>{let n=nn();return{panelRef:n,getItemProps:(0,kn.useCallback)((r={})=>({...s(t,r)(),elementRef:a(r.elementRef,t.ref),panelRef:a(r.panelRef,n,e),onResize:l(r.onResize,t.onResize)}),[n,e,t])}},Pn=({disabled:e,...t})=>{let{disabled:n,groupRef:i,orientation:o}=jn(),c=e||n,l=(0,kn.useCallback)(e=>{e.preventDefault();let t=i.current?.getLayout();if(!t)return;let n=100/Object.keys(t).length,r=Object.fromEntries(Object.keys(t).map(e=>[e,n]));i.current?.setLayout(r)},[i]),d=(0,kn.useCallback)((e={})=>({...s({"aria-disabled":u(c),"aria-orientation":o,"data-disabled":r(c),disabled:c,tabIndex:c?-1:0},e,t,{onDoubleClick:l})(),elementRef:a(e.elementRef,t.ref)}),[o,c,t,l]);return{getIconProps:(0,kn.useCallback)((e={})=>({"data-icon":``,...e}),[]),getTriggerProps:d}}})))()}var In,Ln,Rn,zn,Bn,Vn,q,J,Y,Hn;function Un(){return(Un=e((()=>{In=t(),On(),y(),m(),te(),ae(),Fn(),Ln=d(),{PropsContext:Rn,usePropsContext:zn,withContext:Bn,withProvider:Vn}=v(`resizable`,ie),q=Vn(({children:e,orientation:t,...n})=>{let r=ee(t),{disabled:i,groupRef:a,orientation:o,getRootProps:s}=Mn({orientation:r,...n}),c=(0,In.useMemo)(()=>({disabled:i,groupRef:a,orientation:o}),[i,o,a]);return(0,Ln.jsx)(An,{value:c,children:(0,Ln.jsx)(h.div,{as:Jt,...s(),children:e})})},`root`,{transferProps:[`orientation`]})(),J=Bn(e=>{let{getItemProps:t}=Nn(e);return(0,Ln.jsx)(h.div,{as:tn,...t()})},`item`)(),Y=Bn(({children:e,icon:t,iconProps:n,...r})=>{let{getIconProps:i,getTriggerProps:a}=Pn(r);return(0,Ln.jsxs)(h.div,{as:rn,...a(),children:[t?(0,Ln.jsx)(Hn,{...i(n),children:t}):null,e]})},`trigger`)(),Hn=Bn(`div`,`icon`)()})))()}var X,Z,Wn,Gn,Kn,qn,Jn,Yn,Xn,Q,Zn,Qn,$n,er,tr,nr,rr,ir,ar,$,or;function sr(){return(sr=e((()=>{X=t(),b(),Un(),On(),D(),E(),S(),w(),Z=d(),Wn={component:q,title:`Components / Resizable`},Gn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),Kn=()=>(0,Z.jsx)(re,{variant:`stack`,rows:[`border`,`spacer`,`plain`],children:(e,t,n)=>(0,Z.jsxs)(q,{variant:t,borderWidth:t===`border`?`1px`:void 0,h:`md`,rounded:t===`border`?`l2`:void 0,children:[(0,Z.jsx)(J,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`Two`})]},n)}),qn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{colorScheme:`primary`,variant:`spacer`,h:`md`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]}),(0,Z.jsxs)(q,{colorScheme:`red`,variant:`spacer`,h:`md`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),Jn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`horizontal`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]}),Yn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{defaultSize:`30%`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),Xn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,maxSize:`70%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),Q=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]}),Zn=()=>{let e=(0,X.useRef)(null),t=(0,X.useRef)(null),n=(0,X.useRef)(null);return(0,Z.jsxs)(q,{ref:e,borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{ref:t,display:`center`,children:`One`}),(0,Z.jsx)(Y,{ref:n}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})},Qn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{icon:(0,Z.jsx)(x,{})}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{variant:`spacer`,h:`md`,orientation:`vertical`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{icon:(0,Z.jsx)(x,{})}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),$n=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`Left`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{children:(0,Z.jsxs)(q,{orientation:`vertical`,children:[(0,Z.jsx)(J,{display:`center`,children:`Top`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Bottom`})]})})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`Top`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{children:(0,Z.jsxs)(q,{children:[(0,Z.jsx)(J,{display:`center`,children:`Left`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Right`})]})})]})]}),er=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,disabled:!0,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Three`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{disabled:!0}),(0,Z.jsx)(J,{display:`center`,children:`Two`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Three`})]})]}),tr=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,onLayoutChange:e=>{console.log(`layout change`,e)},onLayoutChanged:e=>{console.log(`layout changed`,e)},children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]}),nr=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,onResize:(e,t,n)=>{console.log(`resize`,e,t,n)},children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),rr=()=>{let{defaultLayout:e,onLayoutChanged:t}=Zt({id:`persistence`,storage:localStorage});return(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]})},ir=()=>{let[e,t]=T({key:`showLeft`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),[n,r]=T({key:`showRight`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),{defaultLayout:i,onLayoutChanged:a}=Zt({id:`conditional`,panelIds:(0,X.useCallback)(()=>{let t=[];return e&&t.push(`left`),t.push(`middle`),n&&t.push(`right`),t},[e,n])(),storage:localStorage});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(ne,{gap:`md`,children:[(0,Z.jsxs)(C,{onClick:()=>t(!e),children:[e?`Hidden`:`Show`,` Left`]}),(0,Z.jsxs)(C,{onClick:()=>r(!n),children:[n?`Hidden`:`Show`,` Right`]})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:i,h:`md`,rounded:`l2`,onLayoutChanged:a,children:[e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{id:`left`,display:`center`,minSize:`10%`,children:`Left`}),(0,Z.jsx)(Y,{})]}):null,(0,Z.jsx)(J,{id:`middle`,display:`center`,minSize:`10%`,children:`Middle`}),n?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`right`,display:`center`,minSize:`10%`,children:`Right`})]}):null]})]})},ar=()=>{let{defaultLayout:e,onLayoutChanged:t}=Zt({id:`persistence`,storage:(0,X.useMemo)(()=>({getItem:e=>{let t=document.cookie.match(RegExp(`(^| )${e}=([^;]+)`));return t?t[2]??null:null},setItem:(e,t)=>{document.cookie=`${e}=${t}; max-age=31536000; path=/`}}),[])});return(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]})},$=()=>{let e=(0,X.useRef)(null);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(ne,{gap:`md`,children:[(0,Z.jsx)(C,{onClick:()=>e.current?.collapse(),children:`Collapse "one"`}),(0,Z.jsx)(C,{onClick:()=>e.current?.expand(),children:`Expand "one"`}),(0,Z.jsx)(C,{onClick:()=>e.current?.resize(`30%`),children:`Resize "one" to 30`}),(0,Z.jsx)(C,{onClick:()=>e.current?.resize(`50%`),children:`Resize "one" to 50`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,controlRef:e,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]})},or=[`Basic`,`Variant`,`ColorScheme`,`Orientation`,`DefaultSize`,`MinMaxSize`,`Collapsible`,`Refs`,`Icon`,`NestedResizable`,`Disabled`,`onLayoutChange`,`OnResize`,`LocalStorage`,`ConditionalLocalStorage`,`CookieStorage`,`CustomControl`],Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Gn.parameters?.docs?.source}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Kn.parameters?.docs?.source}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`() => {
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
}`,...qn.parameters?.docs?.source}}},Jn.parameters={...Jn.parameters,docs:{...Jn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Jn.parameters?.docs?.source}}},Yn.parameters={...Yn.parameters,docs:{...Yn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Yn.parameters?.docs?.source}}},Xn.parameters={...Xn.parameters,docs:{...Xn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Xn.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},Zn.parameters={...Zn.parameters,docs:{...Zn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Zn.parameters?.docs?.source}}},Qn.parameters={...Qn.parameters,docs:{...Qn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qn.parameters?.docs?.source}}},$n.parameters={...$n.parameters,docs:{...$n.parameters?.docs,source:{originalSource:`() => {
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
}`,...$n.parameters?.docs?.source}}},er.parameters={...er.parameters,docs:{...er.parameters?.docs,source:{originalSource:`() => {
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
}`,...er.parameters?.docs?.source}}},tr.parameters={...tr.parameters,docs:{...tr.parameters?.docs,source:{originalSource:`() => {
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
}`,...tr.parameters?.docs?.source}}},nr.parameters={...nr.parameters,docs:{...nr.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...nr.parameters?.docs?.source}}},rr.parameters={...rr.parameters,docs:{...rr.parameters?.docs,source:{originalSource:`() => {
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
}`,...rr.parameters?.docs?.source}}},ir.parameters={...ir.parameters,docs:{...ir.parameters?.docs,source:{originalSource:`() => {
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
}`,...ir.parameters?.docs?.source}}},ar.parameters={...ar.parameters,docs:{...ar.parameters?.docs,source:{originalSource:`() => {
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
}`,...ar.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}sr();export{Gn as Basic,Q as Collapsible,qn as ColorScheme,ir as ConditionalLocalStorage,ar as CookieStorage,$ as CustomControl,Yn as DefaultSize,er as Disabled,Qn as Icon,rr as LocalStorage,Xn as MinMaxSize,$n as NestedResizable,nr as OnResize,Jn as Orientation,Zn as Refs,Kn as Variant,or as __namedExportsOrder,Wn as default,tr as onLayoutChange};