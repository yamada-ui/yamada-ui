import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Lt as r,Yt as i,i as a,it as o,o as s,ot as c,xn as l,yn as u}from"./props-Bz1FL_va.js";import{t as d}from"./jsx-runtime-BdxMnOeJ.js";import{E as f,T as p,d as m,f as h}from"./utils-DG4lHdyV.js";import{d as g,i as _,n as v,r as y}from"./create-component-DtmnY_ce.js";import{n as b,t as x}from"./grip-vertical-icon-2GTr6Sa6.js";import{n as ee,t as te}from"./use-value-DpgqT3Bp.js";import{r as S,t as C}from"./button-CFBNyQlD.js";import{n as ne,t as w}from"./wrap-Dg19SbjB.js";import{n as T,t as re}from"./use-local-storage-Ca8IVCcH.js";import{n as E,t as ie}from"./props-table-CLkISL0o.js";var ae;function oe(){return(oe=e((()=>{g(),ae=_({base:{icon:{alignItems:`center`,display:`flex`,justifyContent:`center`,left:`50%`,position:`absolute`,top:`50%`,translateX:`-50%`,translateY:`-50%`},item:{boxSize:`full`},root:{boxSize:`full`},trigger:{position:`relative`,transitionDuration:`moderate`,transitionProperty:`common`,_after:{transitionDuration:`moderate`,transitionProperty:`common`}}},variants:{border:{icon:{bg:`colorScheme.muted`,color:`colorScheme.fg`,py:`1`,rounded:`l1`},trigger:{bg:`colorScheme.muted`,focusVisibleRing:`none`,_after:{position:`absolute`},_hover:{bg:`colorScheme.emphasized`},_focusVisible:{bg:`colorScheme.emphasized`}}},plain:{trigger:{focusVisibleRing:`none`,_after:{position:`absolute`}}},spacer:{icon:{color:`colorScheme.fg`,transitionDuration:`moderate`,transitionProperty:`common`},trigger:{focusVisibleRing:`none`,p:`1`,_after:{bg:`transparent`,display:`block`,rounded:`full`},_hover:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}},_focusVisible:{_after:{bg:`colorScheme.bg`},_icon:{color:`transparent`}}}}},props:{orientation:{horizontal:{icon:{transform:`translate(-50%, -50%) rotate(0deg)`}},vertical:{icon:{transform:`translate(-50%, -50%) rotate(90deg)`}}}},compounds:[{css:{trigger:{h:`px`,_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`border`,orientation:`vertical`},{css:{trigger:{w:`px`,_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`border`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,w:`full`}}},variant:`spacer`,orientation:`vertical`},{css:{trigger:{_after:{h:`full`,w:`2`}}},variant:`spacer`,orientation:`horizontal`},{css:{trigger:{_after:{h:`2`,left:`0`,right:`0`,transform:`translateY(-50%)`}}},variant:`plain`,orientation:`vertical`},{css:{trigger:{_after:{bottom:`0`,top:`0`,transform:`translateX(-50%)`,w:`2`}}},variant:`plain`,orientation:`horizontal`}],defaultProps:{variant:`border`,orientation:`horizontal`}})})))()}function se(e,t){let n=getComputedStyle(e);return t*parseFloat(n.fontSize)}function ce(e,t){let n=getComputedStyle(e.ownerDocument.documentElement);return t*parseFloat(n.fontSize)}function le(e){return e/100*window.innerHeight}function ue(e){return e/100*window.innerWidth}function de(e){switch(typeof e){case`number`:return[e,`px`];case`string`:{let t=parseFloat(e);return e.endsWith(`%`)?[t,`%`]:e.endsWith(`px`)?[t,`px`]:e.endsWith(`rem`)?[t,`rem`]:e.endsWith(`em`)?[t,`em`]:e.endsWith(`vh`)?[t,`vh`]:e.endsWith(`vw`)?[t,`vw`]:[t,`%`]}}}function D({groupSize:e,panelElement:t,styleProp:n}){let r,[i,a]=de(n);switch(a){case`%`:r=i/100*e;break;case`px`:r=i;break;case`rem`:r=ce(t,i);break;case`em`:r=se(t,i);break;case`vh`:r=le(i);break;case`vw`:r=ue(i)}return r}function O(e){return parseFloat(e.toFixed(3))}function fe({group:e}){let{orientation:t,panels:n}=e;return n.reduce((e,n)=>(e+=t===`horizontal`?n.element.offsetWidth:n.element.offsetHeight,e),0)}function pe(e){let{panels:t}=e,n=fe({group:e});return n===0?t.map(e=>({groupResizeBehavior:e.panelConstraints.groupResizeBehavior,collapsedSize:0,collapsible:e.panelConstraints.collapsible===!0,defaultSize:void 0,disabled:e.panelConstraints.disabled,minSize:0,maxSize:100,panelId:e.id})):t.map(e=>{let{element:t,panelConstraints:r}=e,i=0;r.collapsedSize!==void 0&&(i=O(D({groupSize:n,panelElement:t,styleProp:r.collapsedSize})/n*100));let a;r.collapsedThreshold!==void 0&&(a=O(D({groupSize:n,panelElement:t,styleProp:r.collapsedThreshold})/n*100));let o;r.defaultSize!==void 0&&(o=O(D({groupSize:n,panelElement:t,styleProp:r.defaultSize})/n*100));let s=0;r.minSize!==void 0&&(s=O(D({groupSize:n,panelElement:t,styleProp:r.minSize})/n*100));let c=100;return r.maxSize!==void 0&&(c=O(D({groupSize:n,panelElement:t,styleProp:r.maxSize})/n*100)),{groupResizeBehavior:r.groupResizeBehavior,collapsedSize:i,collapsedThreshold:a,collapsible:r.collapsible===!0,defaultSize:o,disabled:r.disabled,minSize:s,maxSize:c,panelId:e.id}})}function k(){return U}function me(e){return Rt.addListener(`change`,e)}function he(e,t=[],n,r=!1){let i=U,a={...U};a.cursorFlags=e,a.state===`active`&&(a.didPointerMove||=r,a.previews=t,n&&(a.previewLayoutMap=n)),U=a,Rt.emit(`change`,{prev:i,next:a})}function A(e){let t=U;U=e,t.state===`active`&&e.state!==`active`&&t.didPointerMove&&t.hitRegions.forEach(({separator:e})=>{e&&e.element.ownerDocument.activeElement===e.element&&e.element.blur()}),Rt.emit(`change`,{prev:t,next:e})}function ge(e){U.state!==`active`||!U.previews.some(t=>t.separator===e)||A({...U,previews:U.previews.map(t=>t.separator===e?{...t}:t)})}function _e(e){if(U.state===`inactive`)return!1;let t=U.hitRegions.filter(t=>t.group!==e),n=U.state===`active`&&U.previews.some(t=>t.group===e);if(t.length===U.hitRegions.length&&!n)return!1;if(t.length===0)A({cursorFlags:0,state:`inactive`});else if(U.state===`active`){let n=new Map(U.initialLayoutMap),r=new Map(U.previewLayoutMap);n.delete(e),r.delete(e),A({...U,cursorFlags:0,hitRegions:t,initialLayoutMap:n,previewLayoutMap:r,previews:U.previews.filter(t=>t.group!==e)})}else A({...U,hitRegions:t});return!0}function ve(){return qt===void 0&&(qt=!1,typeof window<`u`&&(window.navigator.userAgent.includes(`Chrome`)||window.navigator.userAgent.includes(`Firefox`))&&(qt=!0)),qt}function ye({cursorFlags:e,groups:t,state:n}){let r=0,i=0;switch(n){case`active`:case`hover`:t.forEach(e=>{if(!e.mutableState.disableCursor)switch(e.orientation){case`horizontal`:r++;break;case`vertical`:i++}})}if(r!==0||i!==0){if(n===`active`&&e&&ve()){let t=(e&Vt)!==0,n=(e&Ht)!==0,r=(e&Ut)!==0,i=(e&Wt)!==0;if(t)return r?`se-resize`:i?`ne-resize`:`e-resize`;if(n)return r?`sw-resize`:i?`nw-resize`:`w-resize`;if(r)return`s-resize`;if(i)return`n-resize`}return ve()?r>0&&i>0?`move`:r>0?`ew-resize`:`ns-resize`:r>0&&i>0?`grab`:r>0?`col-resize`:`row-resize`}}function be(e){if(!e.defaultView||!e.adoptedStyleSheets)return;let{prevStyle:t,styleSheet:n}=Jt.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&(Object.isExtensible(e.adoptedStyleSheets)?e.adoptedStyleSheets.push(n):e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]));let r=k();switch(r.state){case`active`:case`hover`:{let e=ye({cursorFlags:r.cursorFlags,groups:r.hitRegions.map(e=>e.group),state:r.state}),i=`*, *:hover {cursor: ${e} !important; }`;if(t===i)return;t=i,e?n.cssRules.length===0?n.insertRule(i):n.replaceSync(i):n.cssRules.length===1&&n.deleteRule(0);break}case`inactive`:t=void 0,n.cssRules.length===1&&n.deleteRule(0)}Jt.set(e,{prevStyle:t,styleSheet:n})}function j(e,t=`Assertion error`){if(!e)throw Error(t)}function xe(e,t){return Array.from(t).sort((t,n)=>{let r=e===`horizontal`?Se(t,n):Ce(t,n);if(r!==0)return r;let i=t.element.compareDocumentPosition(n.element);return i&Node.DOCUMENT_POSITION_DISCONNECTED?0:i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Se(e,t){let n=e.element.offsetLeft-t.element.offsetLeft;return n===0?e.element.offsetWidth-t.element.offsetWidth:n}function Ce(e,t){let n=e.element.offsetTop-t.element.offsetTop;return n===0?e.element.offsetHeight-t.element.offsetHeight:n}function we(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE}function Te(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function Ee({orientation:e,rects:t,targetRect:n}){let r={x:n.x+n.width/2,y:n.y+n.height/2},i,a=Number.MAX_VALUE;for(let n of t){let{x:t,y:o}=Te(r,n),s=e===`horizontal`?t:o;s<a&&(a=s,i=n)}return j(i,`No rect found`),i}function De(){return Yt===void 0&&(Yt=typeof matchMedia==`function`&&!!matchMedia(`(pointer:coarse)`).matches),Yt}function Oe({expandHitTargets:e=!0,group:t,includeDisabled:n=!1}){let{element:r,orientation:i,panels:a,separators:o}=t,s=xe(i,Array.from(r.children).filter(we).filter(e=>!e.hasAttribute(`data-resize-preview`)).map(e=>({element:e}))).map(({element:e})=>e),c=[],l=!1,u=!1,d=-1,f,p=-1,m=0,h,g=[];{let e=-1;for(let t of s)t.hasAttribute(`data-panel`)&&(e++,t.hasAttribute(`data-disabled`)||(m++,d===-1&&(d=e),p=e))}if(n||m>1){let r=-1;for(let m of s)if(m.hasAttribute(`data-panel`)){r++;let o=a.find(e=>e.element===m);if(o){if(h){let a=h.element.getBoundingClientRect(),s=m.getBoundingClientRect(),_;if(u){let e=i===`horizontal`?new DOMRect(a.right,a.top,0,a.height):new DOMRect(a.left,a.bottom,a.width,0),t=i===`horizontal`?new DOMRect(s.left,s.top,0,s.height):new DOMRect(s.left,s.top,s.width,0);switch(g.length){case 0:_=[e,t];break;case 1:{let n=g[0];_=[n,Ee({orientation:i,rects:[a,s],targetRect:n.element.getBoundingClientRect()})===a?t:e];break}default:_=g}}else _=g.length?g:[i===`horizontal`?new DOMRect(a.right,s.top,s.left-a.right,s.height):new DOMRect(s.left,a.bottom,s.width,s.top-a.bottom)];for(let i of _){let a=`width`in i?i:i.element.getBoundingClientRect(),s=e?De()?t.resizeTargetMinimumSize.coarse:t.resizeTargetMinimumSize.fine:0;if(a.width<s){let e=s-a.width;a=new DOMRect(a.x-e/2,a.y,a.width+e,a.height)}if(a.height<s){let e=s-a.height;a=new DOMRect(a.x,a.y-e/2,a.width,a.height+e)}(n||!l&&!(r<=d||r>p))&&(f??=fe({group:t}),c.push({group:t,groupSize:f,panels:[h,o],separator:`width`in i?void 0:i,rect:a})),l=!1}}u=!1,h=o,g=[]}}else if(m.hasAttribute(`data-separator`)){m.ariaDisabled!==null&&(l=!0);let e=o.find(e=>e.element===m);e?g.push(e):(h=void 0,g=[])}else u=!0}return c}function ke(e){W=new Map(W),W.delete(e)}function Ae(e,t){for(let[t]of W)if(t.id===e)return t}function M(e,t){for(let[t,n]of W)if(t.id===e)return n;if(t)throw Error(`Could not find data for Group with id ${e}`)}function N(){return W}function je(e,t){return Xt.addListener(`groupChange`,n=>{n.group.id===e&&t(n)})}function P(e,t,n){let r=W.get(e);W=new Map(W),W.set(e,t),Xt.emit(`groupChange`,{group:e,isUserInteraction:n?.isUserInteraction===!0,prev:r,next:t})}function Me(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function F(e,t,n=0){return Math.abs(O(e)-O(t))<=n}function I(e,t){return F(e,t)?0:e>t?1:-1}function L({overrideDisabledPanels:e,panelConstraints:t,prevSize:n,size:r}){let{collapsedSize:i=0,collapsedThreshold:a,collapsible:o,disabled:s,maxSize:c=100,minSize:l=0}=t;if(s&&!e)return n;if(I(r,l)<0){if(o){let e=a??(l-i)/2,t=I(n,i)<=0,o=t?i+e:l-e,s=I(r,o);r=I(r,i)<=0||s<0||a!==void 0&&t&&s===0?i:l}else r=l}return r=Math.min(c,r),r=O(r),r}function Ne({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:i,trigger:a}){if(F(e,0))return t;let o=a===`imperative-api`,s=n.map(({panelId:e})=>t[e]),c=n.map(({panelId:e})=>i[e]),l=[...s],[u,d]=r;j(u!=null,`Invalid first pivot index`),j(d!=null,`Invalid second pivot index`);let f=0;switch(a){case`keyboard`:{let t=e<0?d:u,r=n[t];j(r,`Panel constraints not found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(j(n!=null,`Previous layout not found for panel index ${t}`),F(n,i)){let t=o-n;I(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}{let t=e<0?u:d,r=n[t];j(r,`No panel constraints found for index ${t}`);let{collapsedSize:i=0,collapsible:a,minSize:o=0}=r;if(a){let n=s[t];if(j(n!=null,`Previous layout not found for panel index ${t}`),F(n,o)){let t=n-i;I(t,Math.abs(e))>0&&(e=e<0?0-t:t)}}}break;default:{let t=e<0?d:u,r=n[t];j(r,`Panel constraints not found for index ${t}`);let i=s[t],{collapsedSize:a,collapsedThreshold:o,collapsible:c,minSize:l}=r;if(c&&I(i,l)<0){let t=l-a,n=o??t/2;if(I(i+Math.abs(e),l)<0){let r=I(Math.abs(e),n);e=r>0||r===0&&o===void 0&&e<0?e<0?-t:t:0}}break}}{let t=e<0?1:-1,r=e<0?d:u,i=0;for(;;){let e=s[r];j(e!=null,`Previous layout not found for panel index ${r}`);let a=L({overrideDisabledPanels:o,panelConstraints:n[r],prevSize:e,size:100})-e;if(i+=a,r+=t,r<0||r>=n.length)break}let a=Math.min(Math.abs(e),Math.abs(i));e=e<0?0-a:a}{let t=e<0?u:d;for(;t>=0&&t<n.length;){let r=Math.abs(e)-Math.abs(f),i=s[t];j(i!=null,`Previous layout not found for panel index ${t}`);let a=i-r,c=L({overrideDisabledPanels:o,panelConstraints:n[t],prevSize:i,size:a});if(!F(i,c)&&(f+=i-c,l[t]=c,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?t--:t++}}if(Me(c,l))return i;{let t=e<0?d:u,r=s[t];j(r!=null,`Previous layout not found for panel index ${t}`);let i=r+f,a=L({overrideDisabledPanels:o,panelConstraints:n[t],prevSize:r,size:i});if(l[t]=a,!F(a,i)){let t=i-a,r=e<0?d:u;for(;r>=0&&r<n.length;){let i=l[r];j(i!=null,`Previous layout not found for panel index ${r}`);let a=i+t,s=L({overrideDisabledPanels:o,panelConstraints:n[r],prevSize:i,size:a});if(F(i,s)||(t-=s-i,l[r]=s),F(t,0))break;e>0?r--:r++}}}return F(Object.values(l).reduce((e,t)=>t+e,0),100,.1)?l.reduce((e,t,r)=>(e[n[r].panelId]=t,e),{}):i}function R(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(t[n]===void 0||I(e[n],t[n])!==0)return!1;return!0}function Pe({commit:e,document:t,event:n,hitRegions:r,initialLayoutMap:i,mountedGroups:a,pointerDownAtPoint:o,prevCursorFlags:s}){let c=0,l=k(),u=l.state===`active`?l.previews:[],d=new Map(l.state===`active`?l.previewLayoutMap:void 0);r.forEach(t=>{let{group:r,groupSize:s}=t,{orientation:l,panels:f}=r;if(e&&r.resizePreviewMode!==`separator`)return;let{disableCursor:p}=r.mutableState,m=0;m=o?l===`horizontal`?(n.clientX-o.x)/s*100:(n.clientY-o.y)/s*100:l===`horizontal`?n.clientX<0?-100:100:n.clientY<0?-100:100;let h=i.get(r),g=a.get(r);if(!h||!g)return;let{defaultLayoutDeferred:_,derivedPanelConstraints:v,groupSize:y,layout:b,separatorToPanels:x}=g;if(v&&b&&x){let n=r.resizePreviewMode===`separator`?d.get(r)??b:b,i=Ne({delta:m,initialLayout:h,panelConstraints:v,pivotIndices:t.panels.map(e=>f.indexOf(e)),prevLayout:n,trigger:`mouse-or-touch`});if(r.resizePreviewMode===`separator`&&!e&&!R(i,n)){d.set(r,i);let e=0,t=f.map(t=>(e+=i[t.id]-h[t.id],s/100*e));u=u.map(e=>{if(e.group!==r)return e;let n=t[e.panelIndex];return n===e.offset?e:{...e,offset:n}})}if(R(i,n)&&m!==0&&!p)switch(l){case`horizontal`:c|=m<0?Vt:Ht;break;case`vertical`:c|=m<0?Ut:Wt}(r.resizePreviewMode!==`separator`||e)&&!R(i,b)&&P(t.group,{defaultLayoutDeferred:_,derivedPanelConstraints:v,groupSize:y,layout:i,separatorToPanels:x})}});let f=0;n.movementX===0?f|=s&Gt:f|=c&Gt,n.movementY===0?f|=s&Kt:f|=c&Kt;let p=l.state===`active`&&(n.clientX!==l.pointerDownAtPoint.x||n.clientY!==l.pointerDownAtPoint.y);he(f,u,d,p),be(t)}function Fe(e,t){let n=k(),r=N(),i=!1;return n.state===`active`&&(Pe({commit:!0,document:e,event:t,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:n.cursorFlags}),A({cursorFlags:0,state:`inactive`}),n.hitRegions.length>0&&(be(e),i=!0,n.hitRegions.forEach(e=>{if(!r.has(e.group))return;let t=M(e.group.id,!0);P(e.group,t,{isUserInteraction:!0})}))),i}function Ie(e){e.defaultPrevented||Fe(e.currentTarget,e)}function Le(e,t,n){let r,i={x:1/0,y:1/0};for(let a of t){let t=Te(n,a.rect);switch(e){case`horizontal`:t.x<=i.x&&(r=a,i=t);break;case`vertical`:t.y<=i.y&&(r=a,i=t)}}return r?{distance:i,hitRegion:r}:void 0}function Re(e){return typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function ze(e,t){if(e===t)throw Error(`Cannot compare node with itself`);let n={a:We(e),b:We(t)},r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();j(r,`Stacking order can only be calculated for elements with a common ancestor`);let i={a:Ue(He(n.a)),b:Ue(He(n.b))};if(i.a===i.b){let e=r.childNodes,t={a:n.a.at(-1),b:n.b.at(-1)},i=e.length;for(;i--;){let n=e[i];if(n===t.a)return 1;if(n===t.b)return-1}}return Math.sign(i.a-i.b)}function Be(e){let t=getComputedStyle(Ge(e)??e).display;return t===`flex`||t===`inline-flex`}function Ve(e){let t=getComputedStyle(e);return!!(t.position===`fixed`||t.zIndex!==`auto`&&(t.position!==`static`||Be(e))||+t.opacity<1||`transform`in t&&t.transform!==`none`||`webkitTransform`in t&&t.webkitTransform!==`none`||`mixBlendMode`in t&&t.mixBlendMode!==`normal`||`filter`in t&&t.filter!==`none`||`webkitFilter`in t&&t.webkitFilter!==`none`||`isolation`in t&&t.isolation===`isolate`||Zt.test(t.willChange)||t.webkitOverflowScrolling===`touch`)}function He(e){let t=e.length;for(;t--;){let n=e[t];if(j(n,`Missing node`),Ve(n))return n}return null}function Ue(e){return e&&Number(getComputedStyle(e).zIndex)||0}function We(e){let t=[];for(;e;)t.push(e),e=Ge(e);return t}function Ge(e){let{parentNode:t}=e;return Re(t)?t.host:t}function Ke(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function qe({groupElement:e,hitRegion:t,pointerEventTarget:n}){if(!we(n)||n.contains(e)||e.contains(n))return!0;if(ze(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(Ke(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function Je(e,t){let n=[];return t.forEach((t,r)=>{if(r.disabled)return;let i=Oe({group:r}),a=Le(r.orientation,i,{x:e.clientX,y:e.clientY});a&&a.distance.x<=0&&a.distance.y<=0&&qe({groupElement:r.element,hitRegion:a.hitRegion.rect,pointerEventTarget:e.target})&&n.push(a.hitRegion)}),n}function z({layout:e,panelConstraints:t}){let n=t.map(({panelId:t})=>e[t]),r=[...n],i=r.reduce((e,t)=>e+t,0);if(Object.keys(e).length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${Object.values(e).map(e=>`${e}%`).join(`, `)}`);if(!F(i,100)&&r.length>0)for(let e=0;e<t.length;e++){let t=r[e];j(t!=null,`No layout data found for index ${e}`);let n=100/i*t;r[e]=n}let a=0;for(let e=0;e<t.length;e++){let i=n[e];j(i!=null,`No layout data found for index ${e}`);let o=r[e];j(o!=null,`No layout data found for index ${e}`);let s=L({overrideDisabledPanels:!0,panelConstraints:t[e],prevSize:i,size:o});o!=s&&(a+=o-s,r[e]=s)}if(!F(a,0))for(let e=0;e<t.length;e++){let n=r[e];j(n!=null,`No layout data found for index ${e}`);let i=n+a,o=L({overrideDisabledPanels:!0,panelConstraints:t[e],prevSize:n,size:i});if(n!==o&&(a-=o-n,r[e]=o,F(a,0)))break}return r.reduce((e,n,r)=>(e[t[r].panelId]=n,e),{})}function Ye({groupId:e,panelId:t}){let n=()=>{let t=N();for(let[n,{defaultLayoutDeferred:r,derivedPanelConstraints:i,layout:a,groupSize:o,separatorToPanels:s}]of t)if(n.id===e)return{defaultLayoutDeferred:r,derivedPanelConstraints:i,group:n,groupSize:o,layout:a,separatorToPanels:s};throw Error(`Group ${e} not found`)},r=()=>{let e=n().derivedPanelConstraints.find(e=>e.panelId===t);if(e!==void 0)return e;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{let e=n().group.panels.find(e=>e.id===t);if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},a=()=>{let e=n().layout[t];if(e!==void 0)return e;throw Error(`Layout not found for Panel ${t}`)},o=({nextSize:e,panels:n,prevLayout:r,derivedPanelConstraints:i})=>{let o=a(),s=n.findIndex(e=>e.id===t),c=s===0,l=s===n.length-1;if(l&&e<o&&(c||n.slice(0,s).every((e,t)=>{let n=i[t];return n?.collapsible&&F(n.collapsedSize,r[n.panelId])}))){let e=n.slice(0,s).reduce((e,t)=>e+r[t.id],0);return{...r,[t]:O(100-e)}}return Ne({delta:l?o-e:e-o,initialLayout:r,panelConstraints:i,pivotIndices:l?[s-1,s]:[s,s+1],prevLayout:r,trigger:`imperative-api`})},s=e=>{if(e===a())return;let{defaultLayoutDeferred:t,derivedPanelConstraints:r,group:i,groupSize:s,layout:c,separatorToPanels:l}=n(),u=z({layout:o({nextSize:e,panels:i.panels,prevLayout:c,derivedPanelConstraints:r}),panelConstraints:r});R(c,u)||P(i,{defaultLayoutDeferred:t,derivedPanelConstraints:r,groupSize:s,layout:u,separatorToPanels:l})};return{collapse:()=>{let{collapsible:e,collapsedSize:t}=r(),{mutableValues:n}=i(),o=a();e&&o!==t&&(n.expandToSize=o,s(t))},expand:()=>{let{collapsible:e,collapsedSize:t,minSize:n}=r(),{mutableValues:o}=i(),c=a();if(e&&c===t){let e=o.expandToSize??n;e===0&&(e=1),s(e)}},getSize:()=>{let{group:e}=n(),t=a(),{element:r}=i();return{asPercentage:t,inPixels:e.orientation===`horizontal`?r.offsetWidth:r.offsetHeight}},isCollapsed:()=>{let{collapsible:e,collapsedSize:t}=r(),n=a();return e&&F(t,n)},resize:e=>{let{group:t}=n(),{element:r}=i(),a=fe({group:t}),o=O(D({groupSize:a,panelElement:r,styleProp:e})/a*100);s(o)}}}function Xe(e){e.defaultPrevented||Je(e,N()).forEach(t=>{if(t.separator&&!t.separator.disableDoubleClick){let n=t.panels.find(e=>e.panelConstraints.defaultSize!==void 0);if(n){let r=n.panelConstraints.defaultSize,i=Ye({groupId:t.group.id,panelId:n.id});i&&r!==void 0&&(i.resize(r),e.preventDefault())}}})}function Ze(e){let t=N();for(let[n]of t)if(n.separators.some(t=>t.element===e))return n;throw Error(`Could not find parent Group for separator element`)}function Qe({groupId:e}){let t=()=>{let t=N();for(let[n,r]of t)if(n.id===e)return{group:n,...r};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){let{defaultLayoutDeferred:e,layout:n}=t();return e?{}:n},setLayout(e){let{defaultLayoutDeferred:n,derivedPanelConstraints:r,group:i,groupSize:a,layout:o,separatorToPanels:s}=t(),c=z({layout:e,panelConstraints:r});return n?o:(R(o,c)||P(i,{defaultLayoutDeferred:n,derivedPanelConstraints:r,groupSize:a,layout:c,separatorToPanels:s}),c)}}}function B(e,t){let n=Ze(e),r=M(n.id,!0),i=n.separators.find(t=>t.element===e);j(i,`Matching separator not found`);let a=r.separatorToPanels.get(i);j(a,`Matching panels not found`);let o=a.map(e=>n.panels.indexOf(e)),s=Qe({groupId:n.id}).getLayout(),c=z({layout:Ne({delta:t,initialLayout:s,panelConstraints:r.derivedPanelConstraints,pivotIndices:o,prevLayout:s,trigger:`keyboard`}),panelConstraints:r.derivedPanelConstraints});R(s,c)||P(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedPanelConstraints:r.derivedPanelConstraints,groupSize:r.groupSize,layout:c,separatorToPanels:r.separatorToPanels},{isUserInteraction:!0})}function $e(e){if(e.defaultPrevented)return;let t=e.currentTarget,n=Ze(t);if(!(n.disabled||n.separators.find(e=>e.element===t)?.disabled))switch(e.key){case`ArrowDown`:e.preventDefault(),n.orientation===`vertical`&&B(t,5);break;case`ArrowLeft`:e.preventDefault(),n.orientation===`horizontal`&&B(t,-5);break;case`ArrowRight`:e.preventDefault(),n.orientation===`horizontal`&&B(t,5);break;case`ArrowUp`:e.preventDefault(),n.orientation===`vertical`&&B(t,-5);break;case`End`:e.preventDefault(),B(t,100);break;case`Enter`:{e.preventDefault();let n=Ze(t),{derivedPanelConstraints:r,layout:i,separatorToPanels:a}=M(n.id,!0),o=n.separators.find(e=>e.element===t);j(o,`Matching separator not found`);let s=a.get(o);j(s,`Matching panels not found`);let c=s[0],l=r.find(e=>e.panelId===c.id);if(j(l,`Panel metadata not found`),l.collapsible){let e=i[c.id];B(t,(l.collapsedSize===e?n.mutableState.expandedPanelSizes[c.id]??l.minSize:l.collapsedSize)-e)}break}case`F6`:{e.preventDefault();let n=Ze(t).separators.map(e=>e.element),r=Array.from(n).findIndex(t=>t===e.currentTarget);j(r!==null,`Index not found`),n[e.shiftKey?r>0?r-1:n.length-1:r+1<n.length?r+1:0].focus({preventScroll:!0});break}case`Home`:e.preventDefault(),B(t,-100)}}function et(e,t){let{element:n,orientation:r,panels:i}=e,a=n.getBoundingClientRect(),o=r===`horizontal`;return Oe({expandHitTargets:!1,group:e,includeDisabled:!0}).map(({panels:r,rect:s,separator:c},l)=>{let u=i.indexOf(r[0]),d=o?s.left+s.width/2:s.top+s.height/2;return{active:t.some(t=>{if(t.group!==e||t.panels[0]!==r[0])return!1;if(c||t.separator)return t.separator===c;let n=o?t.rect.left+t.rect.width/2:t.rect.top+t.rect.height/2;return F(d,n)}),group:e,key:c?`separator-${c.id}`:`panel-${r[0].id}-${l}`,offset:0,panelIndex:u,rect:new DOMRect((o&&!c?d:s.left)-a.left-n.clientLeft+n.scrollLeft,(!o&&!c?d:s.top)-a.top-n.clientTop+n.scrollTop,o&&!c?0:s.width,!o&&!c?0:s.height),separator:c}})}function tt(e){if(e.defaultPrevented||e.pointerType===`mouse`&&e.button>0)return;let t=N(),n=Je(e,t);if(n.length===0)return;let r=new Map,i=!1;n.forEach(e=>{e.separator&&(i||(i=!0,e.separator.element.focus({focusVisible:!1,preventScroll:!0})));let n=t.get(e.group);n&&r.set(e.group,n.layout)});let a=Array.from(r.keys()).flatMap(e=>e.resizePreviewMode===`separator`?et(e,n):[]);A({cursorFlags:0,didPointerMove:!1,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},previewLayoutMap:new Map(r),previews:a,state:`active`}),e.preventDefault()}function nt(e){let t=N(),n=k();n.state===`active`&&Pe({commit:!1,document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:t,prevCursorFlags:n.cursorFlags})}function rt(e){if(e.defaultPrevented)return;let t=k(),n=N();switch(t.state){case`active`:if(e.buttons===0){t.previewLayoutMap.forEach((e,t)=>{let r=n.get(t);t.resizePreviewMode===`separator`&&r&&!R(e,r.layout)&&P(t,{...r,layout:e})}),A({cursorFlags:0,state:`inactive`}),t.hitRegions.forEach(e=>{if(!n.has(e.group))return;let t=M(e.group.id,!0);P(e.group,t,{isUserInteraction:!0})}),be(e.currentTarget);return}for(let n of t.hitRegions)if(n.separator){let{element:t}=n.separator;t.isConnected&&!t.hasPointerCapture?.(e.pointerId)&&t.setPointerCapture?.(e.pointerId)}Pe({commit:!1,document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedGroups:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break;default:{let r=Je(e,n);r.length===0?t.state!==`inactive`&&A({cursorFlags:0,state:`inactive`}):A({cursorFlags:0,hitRegions:r,state:`hover`}),be(e.currentTarget);break}}}function it(e){if(e.relatedTarget instanceof HTMLIFrameElement)switch(k().state){case`hover`:A({cursorFlags:0,state:`inactive`})}}function at(e){e.defaultPrevented||e.pointerType===`mouse`&&e.button>0||Fe(e.currentTarget,e)&&e.preventDefault()}function ot(e){let t=0,n=0,r={};for(let i of e)if(i.defaultSize!==void 0){t++;let e=O(i.defaultSize);n+=e,r[i.panelId]=e}else r[i.panelId]=void 0;let i=e.length-t;if(i!==0){let t=O((100-n)/i);for(let n of e)n.defaultSize===void 0&&(r[n.panelId]=t)}return r}function st(e,t){let n=e.map(e=>e.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(let e of n)if(!r.includes(e))return!1;return!0}function ct({group:e,panelConstraints:t}){let n=e.panels.map(({id:e})=>e).join(`,`),r=e.mutableState.defaultLayout;return e.mutableState.layouts[n]??(r&&st(e.panels,r)?r:ot(t))}function lt(e,t,n){if(!n[0])return;let r=e.panels.find(e=>e.element===t);if(!r||!r.onResize)return;let i=fe({group:e}),a=e.orientation===`horizontal`?r.element.offsetWidth:r.element.offsetHeight,o=r.mutableValues.prevSize,s={asPercentage:O(a/i*100),inPixels:a};r.mutableValues.prevSize=s,r.onResize(s,r.id,o)}function ut(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function dt(e,t){return e.length===t.length&&e.every((e,n)=>ut(e,t[n]))}function ft({group:e,nextGroupSize:t,prevGroupSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,a=0,o=!1,s=new Map,c=[];for(let l of e.panels){let e=r[l.id]??0;switch(l.panelConstraints.groupResizeBehavior){case`preserve-pixel-size`:{o=!0;let r=O(e/100*n/t*100);s.set(l.id,r),i+=r;break}default:c.push(l.id),a+=e}}if(!o||c.length===0)return r;let l=100-i,u={...r};if(s.forEach((e,t)=>{u[t]=e}),a>0)for(let e of c)u[e]=O((r[e]??0)/a*l);else{let e=O(l/c.length);for(let t of c)u[t]=e}return u}function pt(e){let t=!0;j(e.element.ownerDocument.defaultView,`Cannot register an unmounted Group`);let n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,a=new n(n=>{for(let r of n){let{borderBoxSize:n,target:i}=r;if(i===e.element){if(t){let t=fe({group:e});if(t===0)return;let n=M(e.id);if(!n)return;let r=pe(e),i=n.defaultLayoutDeferred?ct({group:e,panelConstraints:r}):n.layout,a=z({layout:ft({group:e,nextGroupSize:t,prevGroupSize:n.groupSize,prevLayout:i}),panelConstraints:r});if(!n.defaultLayoutDeferred&&R(n.layout,a)&&dt(n.derivedPanelConstraints,r)&&n.groupSize===t)continue;P(e,{defaultLayoutDeferred:!1,derivedPanelConstraints:r,groupSize:t,layout:a,separatorToPanels:n.separatorToPanels})}}else lt(e,i,n)}});a.observe(e.element),e.panels.forEach(e=>{j(!r.has(e.id),`Panel ids must be unique; id "${e.id}" was used more than once`),r.add(e.id),e.onResize&&a.observe(e.element)});let o=fe({group:e}),s=pe(e),c=z({layout:ct({group:e,panelConstraints:s}),panelConstraints:s}),l=e.element.ownerDocument;G.set(l,(G.get(l)??0)+1);let u=new Map;return Oe({group:e,includeDisabled:!0}).forEach(e=>{e.separator&&u.set(e.separator,e.panels)}),P(e,{defaultLayoutDeferred:o===0,derivedPanelConstraints:s,groupSize:o,layout:c,separatorToPanels:u}),e.separators.forEach(e=>{j(!i.has(e.id),`Separator ids must be unique; id "${e.id}" was used more than once`),i.add(e.id),e.element.addEventListener(`keydown`,$e)}),G.get(l)===1&&(l.addEventListener(`contextmenu`,Ie,!0),l.addEventListener(`dblclick`,Xe,!0),l.addEventListener(`pointerdown`,tt,!0),l.addEventListener(`pointerleave`,nt),l.addEventListener(`pointermove`,rt),l.addEventListener(`pointerout`,it),l.addEventListener(`pointerup`,at,!0)),function(){t=!1,G.set(l,Math.max(0,(G.get(l)??0)-1)),ke(e),_e(e)&&be(l),e.separators.forEach(e=>{e.element.removeEventListener(`keydown`,$e)}),G.get(l)||(l.removeEventListener(`contextmenu`,Ie,!0),l.removeEventListener(`dblclick`,Xe,!0),l.removeEventListener(`pointerdown`,tt,!0),l.removeEventListener(`pointerleave`,nt),l.removeEventListener(`pointermove`,rt),l.removeEventListener(`pointerout`,it),l.removeEventListener(`pointerup`,at,!0)),a.disconnect()}}function mt(){let[e,t]=(0,H.useState)({});return[e,(0,H.useCallback)(()=>t({}),[])]}function ht(e){let t=(0,H.useId)();return`${e??t}`}function gt(e){let t=(0,H.useRef)(e);return K(()=>{t.current=e},[e]),(0,H.useCallback)((...e)=>t.current?.(...e),[t])}function _t(...e){return gt(t=>{e.forEach(e=>{if(e)switch(typeof e){case`function`:e(t);break;case`object`:e.current=t}})})}function vt(e){let t=(0,H.useRef)({...e});return K(()=>{for(let n in e)t.current[n]=e[n]},[e]),t.current}function yt({separator:e}){let{element:t}=e,n=(0,H.useRef)(null);return K(()=>{let e=t.cloneNode(!0),r=[t,...t.querySelectorAll(`*`)],i=[e,...e.querySelectorAll(`*`)],a=t.ownerDocument.defaultView;return r.forEach((e,t)=>{let n=i[t];if(n instanceof a.HTMLElement||n instanceof a.SVGElement){let t=a.getComputedStyle(e);for(let e=0;e<t.length;e++){let r=t.item(e);n.style.setProperty(r,t.getPropertyValue(r))}}n.removeAttribute(`data-testid`),n.removeAttribute(`id`)}),Object.assign(e.style,{boxSizing:`border-box`,height:`100%`,margin:`0`,position:`static`,transform:`none`,width:`100%`}),n.current.appendChild(e),()=>e.remove()},[t]),(0,V.jsx)(`div`,{ref:n,style:{height:`100%`,opacity:.65,pointerEvents:`none`,width:`100%`}})}function bt(){let e=(0,H.useContext)(Qt);return j(e,`Group Context not found; did you render a Panel or Separator outside of a Group?`),e}function xt(e){let{registerOverlay:t}=bt(),n=(0,H.useRef)(e);ut(n.current,e)||(n.current=e);let r=n.current;return K(()=>t(r),[t,r]),null}function St({active:e,orientation:t,style:n,...r}){let i;switch(t){case`horizontal`:i={height:`100%`,minWidth:`1px`};break;case`vertical`:i={minHeight:`1px`,width:`100%`}}return(0,V.jsx)(`div`,{...r,"data-separator-overlay":e?`active`:`inactive`,style:{...i,...n,flexShrink:0,pointerEvents:`none`}})}function Ct({overlay:e,preview:t}){let{group:n,offset:r,rect:i,separator:a}=t,o=n.orientation===`horizontal`,s=a?.preview,c=e;return(0,H.isValidElement)(s)&&s.type===xt&&(c=s.props,s=void 0),s??(c?s=(0,V.jsx)(St,{...c,active:t.active,orientation:n.orientation}):a&&(s=(0,V.jsx)(yt,{separator:a}))),(0,V.jsx)(`div`,{"aria-hidden":`true`,"data-resize-preview":!0,inert:!0,style:{height:i.height,left:i.left,pointerEvents:`none`,position:`absolute`,top:i.top,transform:o?`translateX(${r}px)`:`translateY(${r}px)`,width:i.width},children:s})}function wt(e,t){let n=(0,H.useRef)({getLayout:()=>({}),setLayout:zt});(0,H.useImperativeHandle)(t,()=>n.current,[]),K(()=>{Object.assign(n.current,Qe({groupId:e}))})}function Tt({groupId:e,resizePreviewMode:t}){let[n,r]=(0,H.useState)([]),i=(0,H.useRef)(n);return K(()=>{let n=n=>{let a=Ae(e),o=t===`separator`&&n.state===`active`?n.previews.filter(e=>e.group===a&&(e.active||!F(e.offset,0))):[],s=i.current;s.length===o.length&&o.every((e,t)=>e===s[t])||(i.current=o,r(o))};if(t!==`separator`){n(k());return}let a=me(({next:e})=>n(e));return n(k()),a},[e,t]),n}function Et({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:a,groupRef:o,id:s,onLayoutChange:c,onLayoutChanged:l,orientation:u=`horizontal`,resizePreviewMode:d=`panel`,resizeTargetMinimumSize:f={coarse:20,fine:10},style:p,...m}){let h=(0,H.useRef)({onLayoutChange:{},onLayoutChanged:{}}),g=gt(e=>{R(h.current.onLayoutChange,e)||(h.current.onLayoutChange=e,c?.(e))}),_=gt((e,t)=>{R(h.current.onLayoutChanged,e)||(h.current.onLayoutChanged=e,l?.(e,{isUserInteraction:t}))}),v=ht(s),[y,b]=(0,H.useState)(),x=Tt({groupId:v,resizePreviewMode:d}),ee=(0,H.useRef)(null),[te,S]=mt(),C=(0,H.useRef)({lastExpandedPanelSizes:{},layouts:{},panels:[],separators:[]}),ne=_t(ee,a);wt(v,o);let w=gt((e,t)=>{let r=M(e);if(r)return{flexGrow:r.layout[t]??1};if(n?.[t])return{flexGrow:n?.[t]}}),T=vt({defaultLayout:n,disableCursor:r,resizeTargetMinimumSize:f}),re=(0,H.useMemo)(()=>({get disableCursor(){return!!T.disableCursor},getPanelStyles:w,id:v,orientation:u,registerPanel:e=>{let t=C.current;return t.panels=xe(u,[...t.panels,e]),S(),()=>{t.panels=t.panels.filter(t=>t!==e),S()}},registerOverlay:e=>(b(e),()=>{b(void 0)}),registerSeparator:e=>{let t=C.current;return t.separators=xe(u,[...t.separators,e]),S(),()=>{t.separators=t.separators.filter(t=>t!==e),S()}},updatePanelProps:(e,{disabled:t})=>{let n=C.current.panels.find(t=>t.id===e);n&&(n.panelConstraints.disabled=t);let r=Ae(v),i=M(v);r&&i&&P(r,{...i,derivedPanelConstraints:pe(r)})},updateSeparatorProps:(e,{disabled:t,disableDoubleClick:n})=>{let r=C.current.separators.find(t=>t.id===e);r&&(r.disabled=t,r.disableDoubleClick=n)}}),[w,v,S,u,T]),E=(0,H.useRef)(null);return K(()=>{let e=ee.current;if(e===null)return;let t=C.current,n;if(T.defaultLayout!==void 0&&Object.keys(T.defaultLayout).length===t.panels.length){n={};for(let e of t.panels){let t=T.defaultLayout[e.id];t!==void 0&&(n[e.id]=t)}}let r={disabled:!!i,element:e,id:v,mutableState:{defaultLayout:n,disableCursor:!!T.disableCursor,expandedPanelSizes:C.current.lastExpandedPanelSizes,layouts:C.current.layouts},orientation:u,panels:t.panels,resizePreviewMode:d,get resizeTargetMinimumSize(){return T.resizeTargetMinimumSize},separators:t.separators};E.current=r;let a=pt(r),{defaultLayoutDeferred:o,derivedPanelConstraints:s,layout:c}=M(r.id,!0);!o&&s.length>0&&(g(c),_(c,!1));let l=je(v,e=>{let{defaultLayoutDeferred:t,derivedPanelConstraints:n,layout:i}=e.next;if(t||n.length===0)return;let a=r.panels.map(({id:e})=>e).join(`,`);r.mutableState.layouts[a]=i,n.forEach(t=>{if(t.collapsible){let{layout:n}=e.prev??{};if(n){let e=F(t.collapsedSize,i[t.panelId]),a=F(t.collapsedSize,n[t.panelId]);e&&!a&&(r.mutableState.expandedPanelSizes[t.panelId]=n[t.panelId])}}});let o=k(),s=o.state!==`active`||!o.hitRegions.some(e=>e.group===r);g(i),s&&_(i,e.isUserInteraction)});return()=>{E.current=null,a(),l()}},[i,v,_,g,u,te,d,T]),(0,H.useEffect)(()=>{let e=E.current;e&&(e.mutableState.defaultLayout=n,e.mutableState.disableCursor=!!r)}),(0,V.jsx)(Qt.Provider,{value:re,children:(0,V.jsxs)(`div`,{...m,className:t,"data-group":!0,"data-testid":v,id:v,ref:ne,style:{height:`100%`,width:`100%`,overflow:`hidden`,position:d===`separator`?`relative`:void 0,...p,display:`flex`,flexDirection:u===`horizontal`?`row`:`column`,flexWrap:`nowrap`,touchAction:u===`horizontal`?`pan-y`:`pan-x`},children:[e,x.map(e=>(0,V.jsx)(Ct,{overlay:y,preview:e},e.key))]})})}function Dt(e,t){return`react-resizable-panels:${[e,...t].join(`:`)}`}function Ot({id:e,panelIds:t,storage:n}){let r=Dt(e,[]),i=n.getItem(r);if(i)try{let e=JSON.parse(i);if(t){let n=e[t.join(`,`)];if(n&&Array.isArray(n.layout)&&t.length===n.layout.length){let e={};for(let r=0;r<t.length;r++)e[t[r]]=n.layout[r];return e}}else{let t=Object.keys(e);if(t.length===1){let n=e[t[0]];if(n&&Array.isArray(n.layout)){let e=t[0].split(`,`);if(e.length===n.layout.length){let t={};for(let r=0;r<e.length;r++)t[e[r]]=n.layout[r];return t}}}}}catch{}}function kt({debounceSaveMs:e=100,onlySaveAfterUserInteractions:t,panelIds:n,storage:r=localStorage,...i}){let a=n!==void 0,o=`id`in i?i.id:i.groupId,s=Dt(o,n??[]),c=(0,H.useSyncExternalStore)(At,()=>r.getItem(s),()=>r.getItem(s)),l=(0,H.useMemo)(()=>{if(c){let e=JSON.parse(c),t=Object.values(e);if(Array.from(t).every(e=>typeof e==`number`))return e}},[c]),u=(0,H.useMemo)(()=>{if(!l)return Ot({id:o,panelIds:n,storage:r})},[l,o,n,r]),d=l??u,f=(0,H.useRef)(null),p=(0,H.useCallback)(()=>{let e=f.current;e&&(f.current=null,clearTimeout(e))},[]);(0,H.useLayoutEffect)(()=>()=>{p()},[p]);let m=(0,H.useCallback)((e,n)=>{if(t&&!n.isUserInteraction)return;p();let i;i=a?Dt(o,Object.keys(e)):Dt(o,[]);try{r.setItem(i,JSON.stringify(e))}catch(e){console.error(e)}},[p,a,o,t,r]);return{defaultLayout:d,onLayoutChange:(0,H.useCallback)(t=>{p(),e===0?m(t,{isUserInteraction:!1}):f.current=setTimeout(()=>{m(t,{isUserInteraction:!1})},e)},[p,e,m]),onLayoutChanged:m}}function At(){return function(){}}function jt(){return(0,H.useRef)(null)}function Mt(e,t){let{id:n}=bt(),r=(0,H.useRef)({collapse:Bt,expand:Bt,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Bt});(0,H.useImperativeHandle)(t,()=>r.current,[]),K(()=>{Object.assign(r.current,Ye({groupId:n,panelId:e}))})}function Nt({children:e,className:t,collapsedSize:n=`0%`,collapsedThreshold:r,collapsible:i=!1,defaultSize:a,disabled:o,elementRef:s,groupResizeBehavior:c=`preserve-relative-size`,id:l,maxSize:u=`100%`,minSize:d=`0%`,onResize:f,panelRef:p,style:m,...h}){let g=!!l,_=ht(l),v=vt({disabled:o}),y=(0,H.useRef)(null),b=_t(y,s),{getPanelStyles:x,id:ee,orientation:te,registerPanel:S,updatePanelProps:C}=bt(),ne=f!==null,w=gt((e,t,n)=>{f?.(e,l,n)});K(()=>{let e=y.current;if(e!==null){let t={element:e,id:_,idIsStable:g,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:ne?w:void 0,panelConstraints:{groupResizeBehavior:c,collapsedSize:n,collapsedThreshold:r,collapsible:i,defaultSize:a,disabled:v.disabled,maxSize:u,minSize:d}};return S(t)}},[c,n,r,i,a,ne,_,g,u,d,w,S,v]),(0,H.useEffect)(()=>{C(_,{disabled:o})},[o,_,C]),Mt(_,p);let T=()=>{let e=x(ee,_);if(e)return JSON.stringify(e)},re=(0,H.useSyncExternalStore)(e=>je(ee,e),T,T),E;return E=re?JSON.parse(re):a===void 0?{flexGrow:1}:{flexGrow:void 0,flexShrink:void 0,flexBasis:a},(0,V.jsx)(`div`,{...h,"data-disabled":o||void 0,"data-panel":!0,"data-testid":_,id:_,ref:b,style:{...$t,display:`flex`,flexBasis:0,flexShrink:1,overflow:`visible`,...E},children:(0,V.jsx)(`div`,{className:t,style:{maxHeight:`100%`,maxWidth:`100%`,flexGrow:1,overflow:`auto`,...m,touchAction:te===`horizontal`?`pan-y`:`pan-x`},children:e})})}function Pt(){return(0,H.useRef)(null)}function Ft({layout:e,panelConstraints:t,panelId:n,panelIndex:r}){let i,a,o=e[n],s=t.find(e=>e.panelId===n);if(s){let c=s.maxSize,l=s.collapsible?s.collapsedSize:s.minSize,u=[r,r+1];a=z({layout:Ne({delta:l-o,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n],i=z({layout:Ne({delta:c-o,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:a,valueNow:o}}function It({children:e,className:t,disabled:n,disableDoubleClick:r,elementRef:i,id:a,preview:o,style:s,...c}){let l=ht(a),u=vt({disabled:n,disableDoubleClick:r,children:e,className:t,preview:o,style:s}),[d,f]=(0,H.useState)({}),[p,m]=(0,H.useState)(`inactive`),[h,g]=(0,H.useState)(!1),_=(0,H.useRef)(null),v=(0,H.useRef)(null),y=_t(_,i),{disableCursor:b,id:x,orientation:ee,registerSeparator:te,updateSeparatorProps:S}=bt(),C=ee===`horizontal`?`vertical`:`horizontal`;K(()=>{let e=_.current;if(e!==null){let t={disabled:u.disabled,disableDoubleClick:u.disableDoubleClick,element:e,id:l,get children(){return u.children},get className(){return u.className},get preview(){return u.preview},get style(){return u.style}};v.current=t;let n=te(t),r=me(e=>{m(e.next.state!==`inactive`&&e.next.hitRegions.some(e=>e.separator===t)?e.next.state:`inactive`)}),i=je(x,e=>{let{derivedPanelConstraints:n,layout:r,separatorToPanels:i}=e.next,a=i.get(t);if(a){let e=a[0],t=n.findIndex(t=>t.panelId===e.id);f(Ft({layout:r,panelConstraints:n,panelId:e.id,panelIndex:t}))}});return()=>{v.current=null,r(),i(),n()}}},[x,l,te,u]),K(()=>{let e=v.current;e&&ge(e)},[o]),(0,H.useEffect)(()=>{S(l,{disabled:n,disableDoubleClick:r})},[n,r,l,S]);let ne;n&&!b&&(ne=`not-allowed`);let w;if(n)w=`disabled`;else switch(p){case`active`:w=`active`;break;default:w=h?`focus`:p}return(0,V.jsx)(`div`,{...c,"aria-controls":d.valueControls,"aria-disabled":n||void 0,"aria-orientation":C,"aria-valuemax":d.valueMax,"aria-valuemin":d.valueMin,"aria-valuenow":d.valueNow,children:e,className:t,"data-separator":w,"data-testid":l,id:l,onBlur:()=>g(!1),onFocus:()=>g(!0),ref:y,role:`separator`,style:{flexBasis:`auto`,cursor:ne,...s,flexGrow:0,flexShrink:0,touchAction:`none`},tabIndex:n?void 0:0})}var V,H,Lt,U,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,W,Xt,Zt,G,K,Qt,$t;function en(){return(en=e((()=>{V=d(),H=t(),Lt=class{#e={};addListener(e,t){let n=this.#e[e];return n===void 0?this.#e[e]=[t]:n.includes(t)||n.push(t),()=>{this.removeListener(e,t)}}emit(e,t){let n=this.#e[e];if(n!==void 0){if(n.length===1)n[0].call(null,t);else{let e=!1,r=null,i=Array.from(n);for(let n=0;n<i.length;n++){let a=i[n];try{a.call(null,t)}catch(t){r===null&&(e=!0,r=t)}}if(e)throw r}}}removeAllListeners(){this.#e={}}removeListener(e,t){let n=this.#e[e];if(n!==void 0){let e=n.indexOf(t);e>=0&&n.splice(e,1)}}},U={cursorFlags:0,state:`inactive`},Rt=new Lt,zt=e=>e,Bt=()=>{},Vt=1,Ht=2,Ut=4,Wt=8,Gt=3,Kt=12,Jt=new WeakMap,W=new Map,Xt=new Lt,Zt=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/,G=new Map,K=typeof window<`u`?H.useLayoutEffect:H.useEffect,Qt=(0,H.createContext)(null),xt.displayName=`SeparatorOverlay`,Et.displayName=`Group`,Nt.displayName=`Panel`,$t={minHeight:0,maxHeight:`100%`,height:`auto`,minWidth:0,maxWidth:`100%`,width:`auto`,border:`none`,borderWidth:0,padding:0,margin:0},It.displayName=`Separator`})))()}var tn,nn,rn,an,on,sn;function cn(){return(cn=e((()=>{tn=t(),en(),a(),i(),f(),l(),o(),[nn,rn]=p({name:`ResizableContext`}),an=({controlRef:e,disabled:t,orientation:n=`horizontal`,...r}={})=>{let i=jt();return{disabled:t,groupRef:i,orientation:n,getRootProps:(0,tn.useCallback)((a={})=>({...s({disabled:t,orientation:n},r,a)(),style:{height:void 0,width:void 0,...r.style,...a.style},elementRef:c(a.elementRef,r.ref),groupRef:c(a.groupRef,i,e),onLayoutChange:u(a.onLayoutChange,r.onLayoutChange),onLayoutChanged:u(a.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r])}},on=({controlRef:e,...t})=>{let n=Pt();return{panelRef:n,getItemProps:(0,tn.useCallback)((r={})=>({...s(t,r)(),elementRef:c(r.elementRef,t.ref),panelRef:c(r.panelRef,n,e),onResize:u(r.onResize,t.onResize)}),[n,e,t])}},sn=({disabled:e,...t})=>{let{disabled:i,groupRef:a,orientation:o}=rn(),l=e||i,u=(0,tn.useCallback)(e=>{e.preventDefault();let t=a.current?.getLayout();if(!t)return;let n=100/Object.keys(t).length,r=Object.fromEntries(Object.keys(t).map(e=>[e,n]));a.current?.setLayout(r)},[a]),d=(0,tn.useCallback)((e={})=>({...s({"aria-disabled":r(l),"aria-orientation":o,"data-disabled":n(l),disabled:l,tabIndex:l?-1:0},e,t,{onDoubleClick:u})(),elementRef:c(e.elementRef,t.ref)}),[o,l,t,u]);return{getIconProps:(0,tn.useCallback)((e={})=>({"data-icon":``,...e}),[]),getTriggerProps:d}}})))()}var ln,un,dn,fn,pn,mn,q,J,Y,hn;function gn(){return(gn=e((()=>{ln=t(),en(),y(),m(),te(),oe(),cn(),un=d(),{PropsContext:dn,usePropsContext:fn,withContext:pn,withProvider:mn}=v(`resizable`,ae),q=mn(({children:e,orientation:t,...n})=>{let r=ee(t),{disabled:i,groupRef:a,orientation:o,getRootProps:s}=an({orientation:r,...n}),c=(0,ln.useMemo)(()=>({disabled:i,groupRef:a,orientation:o}),[i,o,a]);return(0,un.jsx)(nn,{value:c,children:(0,un.jsx)(h.div,{as:Et,...s(),children:e})})},`root`,{transferProps:[`orientation`]})(),J=pn(e=>{let{getItemProps:t}=on(e);return(0,un.jsx)(h.div,{as:Nt,...t()})},`item`)(),Y=pn(({children:e,icon:t,iconProps:n,...r})=>{let{getIconProps:i,getTriggerProps:a}=sn(r);return(0,un.jsxs)(h.div,{as:It,...a(),children:[t?(0,un.jsx)(hn,{...i(n),children:t}):null,e]})},`trigger`)(),hn=pn(`div`,`icon`)()})))()}var X,Z,_n,vn,yn,bn,Q,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,$,Mn,Nn;function Pn(){return(Pn=e((()=>{X=t(),b(),gn(),en(),E(),re(),S(),ne(),Z=d(),_n={component:q,title:`Components / Resizable`},vn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),yn=()=>(0,Z.jsx)(ie,{variant:`stack`,rows:[`border`,`spacer`,`plain`],children:(e,t,n)=>(0,Z.jsxs)(q,{variant:t,borderWidth:t===`border`?`1px`:void 0,h:`md`,rounded:t===`border`?`l2`:void 0,children:[(0,Z.jsx)(J,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:t===`spacer`?`1px`:void 0,display:`center`,rounded:t===`spacer`?`l2`:void 0,children:`Two`})]},n)}),bn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{colorScheme:`primary`,variant:`spacer`,h:`md`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]}),(0,Z.jsxs)(q,{colorScheme:`red`,variant:`spacer`,h:`md`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),Q=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`horizontal`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]}),xn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{defaultSize:`30%`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),Sn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,maxSize:`70%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),Cn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,defaultSize:`30%`,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]}),wn=()=>{let e=(0,X.useRef)(null),t=(0,X.useRef)(null),n=(0,X.useRef)(null);return(0,Z.jsxs)(q,{ref:e,borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{ref:t,display:`center`,children:`One`}),(0,Z.jsx)(Y,{ref:n}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})},Tn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{icon:(0,Z.jsx)(x,{})}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),(0,Z.jsxs)(q,{variant:`spacer`,h:`md`,orientation:`vertical`,children:[(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`One`}),(0,Z.jsx)(Y,{icon:(0,Z.jsx)(x,{})}),(0,Z.jsx)(J,{borderWidth:`1px`,display:`center`,rounded:`l2`,children:`Two`})]})]}),En=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`Left`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{children:(0,Z.jsxs)(q,{orientation:`vertical`,children:[(0,Z.jsx)(J,{display:`center`,children:`Top`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Bottom`})]})})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,orientation:`vertical`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`Top`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{children:(0,Z.jsxs)(q,{children:[(0,Z.jsx)(J,{display:`center`,children:`Left`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Right`})]})})]})]}),Dn=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(q,{borderWidth:`1px`,disabled:!0,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Three`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,children:`One`}),(0,Z.jsx)(Y,{disabled:!0}),(0,Z.jsx)(J,{display:`center`,children:`Two`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Three`})]})]}),On=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,onLayoutChange:e=>{console.log(`layout change`,e)},onLayoutChanged:e=>{console.log(`layout changed`,e)},children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]}),kn=()=>(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{display:`center`,onResize:(e,t,n)=>{console.log(`resize`,e,t,n)},children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]}),An=()=>{let{defaultLayout:e,onLayoutChanged:t}=kt({id:`persistence`,storage:localStorage});return(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]})},jn=()=>{let[e,t]=T({key:`showLeft`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),[n,r]=T({key:`showRight`,defaultValue:!0,deserialize:e=>e===`true`,serialize:e=>e.toString()}),{defaultLayout:i,onLayoutChanged:a}=kt({id:`conditional`,panelIds:(0,X.useCallback)(()=>{let t=[];return e&&t.push(`left`),t.push(`middle`),n&&t.push(`right`),t},[e,n])(),storage:localStorage});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(w,{gap:`md`,children:[(0,Z.jsxs)(C,{onClick:()=>t(!e),children:[e?`Hidden`:`Show`,` Left`]}),(0,Z.jsxs)(C,{onClick:()=>r(!n),children:[n?`Hidden`:`Show`,` Right`]})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:i,h:`md`,rounded:`l2`,onLayoutChanged:a,children:[e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(J,{id:`left`,display:`center`,minSize:`10%`,children:`Left`}),(0,Z.jsx)(Y,{})]}):null,(0,Z.jsx)(J,{id:`middle`,display:`center`,minSize:`10%`,children:`Middle`}),n?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`right`,display:`center`,minSize:`10%`,children:`Right`})]}):null]})]})},$=()=>{let{defaultLayout:e,onLayoutChanged:t}=kt({id:`persistence`,storage:(0,X.useMemo)(()=>({getItem:e=>{let t=document.cookie.match(RegExp(`(^| )${e}=([^;]+)`));return t?t[2]??null:null},setItem:(e,t)=>{document.cookie=`${e}=${t}; max-age=31536000; path=/`}}),[])});return(0,Z.jsxs)(q,{borderWidth:`1px`,defaultLayout:e,h:`md`,rounded:`l2`,onLayoutChanged:t,children:[(0,Z.jsx)(J,{id:`one`,display:`center`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{id:`two`,display:`center`,children:`Two`})]})},Mn=()=>{let e=(0,X.useRef)(null);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(w,{gap:`md`,children:[(0,Z.jsx)(C,{onClick:()=>e.current?.collapse(),children:`Collapse "one"`}),(0,Z.jsx)(C,{onClick:()=>e.current?.expand(),children:`Expand "one"`}),(0,Z.jsx)(C,{onClick:()=>e.current?.resize(`30%`),children:`Resize "one" to 30`}),(0,Z.jsx)(C,{onClick:()=>e.current?.resize(`50%`),children:`Resize "one" to 50`})]}),(0,Z.jsxs)(q,{borderWidth:`1px`,h:`md`,rounded:`l2`,children:[(0,Z.jsx)(J,{collapsedSize:`15%`,collapsible:!0,controlRef:e,display:`center`,maxSize:`50%`,minSize:`30%`,children:`One`}),(0,Z.jsx)(Y,{}),(0,Z.jsx)(J,{display:`center`,children:`Two`})]})]})},Nn=[`Basic`,`Variant`,`ColorScheme`,`Orientation`,`DefaultSize`,`MinMaxSize`,`Collapsible`,`Refs`,`Icon`,`NestedResizable`,`Disabled`,`onLayoutChange`,`OnResize`,`LocalStorage`,`ConditionalLocalStorage`,`CookieStorage`,`CustomControl`],vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`() => {
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
}`,...yn.parameters?.docs?.source}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`() => {
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
}`,...bn.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...xn.parameters?.docs?.source}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Sn.parameters?.docs?.source}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Cn.parameters?.docs?.source}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`() => {
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
}`,...wn.parameters?.docs?.source}}},Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Tn.parameters?.docs?.source}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`() => {
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
}`,...En.parameters?.docs?.source}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dn.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`() => {
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
}`,...On.parameters?.docs?.source}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...kn.parameters?.docs?.source}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`() => {
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
}`,...An.parameters?.docs?.source}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`() => {
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
}`,...jn.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Mn.parameters?.docs?.source}}}})))()}Pn();export{vn as Basic,Cn as Collapsible,bn as ColorScheme,jn as ConditionalLocalStorage,$ as CookieStorage,Mn as CustomControl,xn as DefaultSize,Dn as Disabled,Tn as Icon,An as LocalStorage,Sn as MinMaxSize,En as NestedResizable,kn as OnResize,Q as Orientation,wn as Refs,yn as Variant,Nn as __namedExportsOrder,_n as default,On as onLayoutChange};