var Xe=e=>{throw TypeError(e)};var Ye=(e,t,n)=>t.has(e)||Xe("Cannot "+n);var ae=(e,t,n)=>(Ye(e,t,"read from private field"),n?n.call(e):t.get(e)),Je=(e,t,n)=>t.has(e)?Xe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ue=(e,t,n,r)=>(Ye(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{d as Pn,r as R,j as i,c as Mn,bV as Ee,m as se,h as En,b as On,e as Dn,g as Wn,s as We,Q as te}from"./iframe-B_LcDk8j.js";import{P as Gn}from"./props-table-qgGdocBx.js";import{u as qe}from"./index-BmHHnfW2.js";import{W as un}from"./wrap-XeS6v3K8.js";import{u as Fn}from"./index-B3LE8AFU.js";import{G as Ke}from"./grip-vertical-icon-DVPq31fO.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BlZthnbl.js";import"./grid-item-D8ZfrR7E.js";import"./for-B4Q7qiCG.js";import"./flex-BReIzsmR.js";import"./heading-CKLDXwzq.js";import"./index-CgB6JB0w.js";import"./use-breakpoint-DLQz16Te.js";import"./use-breakpoint-value-BN7biuR1.js";import"./use-color-mode-value-D9RYeCtv.js";const Nn=Pn({base:{icon:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",translateX:"-50%",translateY:"-50%"},item:{boxSize:"full"},root:{boxSize:"full"},trigger:{position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{transitionDuration:"moderate",transitionProperty:"common"}}},variants:{border:{icon:{bg:"colorScheme.muted",color:"colorScheme.fg",py:"1",rounded:"l1"},trigger:{bg:"colorScheme.muted",focusVisibleRing:"none",_after:{position:"absolute"},_hover:{bg:"colorScheme.emphasized"},_focusVisible:{bg:"colorScheme.emphasized"}}},plain:{trigger:{focusVisibleRing:"none",_after:{position:"absolute"}}},spacer:{icon:{color:"colorScheme.fg",transitionDuration:"moderate",transitionProperty:"common"},trigger:{focusVisibleRing:"none",p:"1",_after:{bg:"transparent",display:"block",rounded:"full"},_hover:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}},_focusVisible:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}}}}},props:{orientation:{horizontal:{icon:{transform:"translate(-50%, -50%) rotate(0deg)"}},vertical:{icon:{transform:"translate(-50%, -50%) rotate(90deg)"}}}},compounds:[{css:{trigger:{h:"px",_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"border",orientation:"vertical"},{css:{trigger:{w:"px",_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"border",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",w:"full"}}},variant:"spacer",orientation:"vertical"},{css:{trigger:{_after:{h:"full",w:"2"}}},variant:"spacer",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"plain",orientation:"vertical"},{css:{trigger:{_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"plain",orientation:"horizontal"}],defaultProps:{variant:"border",orientation:"horizontal"}});function $n(e,t){const n=getComputedStyle(e),r=parseFloat(n.fontSize);return t*r}function Vn(e,t){const n=getComputedStyle(e.ownerDocument.body),r=parseFloat(n.fontSize);return t*r}function An(e){return e/100*window.innerHeight}function Bn(e){return e/100*window.innerWidth}function _n(e){switch(typeof e){case"number":return[e,"px"];case"string":{const t=parseFloat(e);return e.endsWith("%")?[t,"%"]:e.endsWith("px")?[t,"px"]:e.endsWith("rem")?[t,"rem"]:e.endsWith("em")?[t,"em"]:e.endsWith("vh")?[t,"vh"]:e.endsWith("vw")?[t,"vw"]:[t,"%"]}}}function ce({groupSize:e,panelElement:t,styleProp:n}){let r;const[o,s]=_n(n);switch(s){case"%":{r=o/100*e;break}case"px":{r=o;break}case"rem":{r=Vn(t,o);break}case"em":{r=$n(t,o);break}case"vh":{r=An(o);break}case"vw":{r=Bn(o);break}}return r}function V(e){return parseFloat(e.toFixed(3))}function re({group:e}){const{orientation:t,panels:n}=e;return n.reduce((r,o)=>(r+=t==="horizontal"?o.element.offsetWidth:o.element.offsetHeight,r),0)}function Oe(e){const{panels:t}=e,n=re({group:e});return n===0?t.map(r=>({collapsedSize:0,collapsible:r.panelConstraints.collapsible===!0,defaultSize:void 0,disabled:r.panelConstraints.disabled,minSize:0,maxSize:100,panelId:r.id})):t.map(r=>{const{element:o,panelConstraints:s}=r;let l=0;if(s.collapsedSize!==void 0){const c=ce({groupSize:n,panelElement:o,styleProp:s.collapsedSize});l=V(c/n*100)}let a;if(s.defaultSize!==void 0){const c=ce({groupSize:n,panelElement:o,styleProp:s.defaultSize});a=V(c/n*100)}let d=0;if(s.minSize!==void 0){const c=ce({groupSize:n,panelElement:o,styleProp:s.minSize});d=V(c/n*100)}let u=100;if(s.maxSize!==void 0){const c=ce({groupSize:n,panelElement:o,styleProp:s.maxSize});u=V(c/n*100)}return{collapsedSize:l,collapsible:s.collapsible===!0,defaultSize:a,disabled:s.disabled,minSize:d,maxSize:u,panelId:r.id}})}function L(e,t="Assertion error"){if(!e)throw Error(t)}function De(e,t){return Array.from(t).sort(e==="horizontal"?Hn:Xn)}function Hn(e,t){const n=e.element.offsetLeft-t.element.offsetLeft;return n!==0?n:e.element.offsetWidth-t.element.offsetWidth}function Xn(e,t){const n=e.element.offsetTop-t.element.offsetTop;return n!==0?n:e.element.offsetHeight-t.element.offsetHeight}function pn(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function fn(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function Yn({orientation:e,rects:t,targetRect:n}){const r={x:n.x+n.width/2,y:n.y+n.height/2};let o,s=Number.MAX_VALUE;for(const l of t){const{x:a,y:d}=fn(r,l),u=e==="horizontal"?a:d;u<s&&(s=u,o=l)}return L(o,"No rect found"),o}let ue;function Jn(){return ue===void 0&&(typeof matchMedia=="function"?ue=!!matchMedia("(pointer:coarse)").matches:ue=!1),ue}function mn(e){const{element:t,orientation:n,panels:r,separators:o}=e,s=De(n,Array.from(t.children).filter(pn).map(m=>({element:m}))).map(({element:m})=>m),l=[];let a=!1,d=!1,u=-1,c=-1,v=0,C,y=[];{let m=-1;for(const p of s)p.hasAttribute("data-panel")&&(m++,p.ariaDisabled===null&&(v++,u===-1&&(u=m),c=m))}if(v>1){let m=-1;for(const p of s)if(p.hasAttribute("data-panel")){m++;const h=r.find(f=>f.element===p);if(h){if(C){const f=C.element.getBoundingClientRect(),x=p.getBoundingClientRect();let S;if(d){const g=n==="horizontal"?new DOMRect(f.right,f.top,0,f.height):new DOMRect(f.left,f.bottom,f.width,0),b=n==="horizontal"?new DOMRect(x.left,x.top,0,x.height):new DOMRect(x.left,x.top,x.width,0);switch(y.length){case 0:{S=[g,b];break}case 1:{const j=y[0],P=Yn({orientation:n,rects:[f,x],targetRect:j.element.getBoundingClientRect()});S=[j,P===f?b:g];break}default:{S=y;break}}}else y.length?S=y:S=[n==="horizontal"?new DOMRect(f.right,x.top,x.left-f.right,x.height):new DOMRect(x.left,f.bottom,x.width,x.top-f.bottom)];for(const g of S){let b="width"in g?g:g.element.getBoundingClientRect();const j=Jn()?e.resizeTargetMinimumSize.coarse:e.resizeTargetMinimumSize.fine;if(b.width<j){const M=j-b.width;b=new DOMRect(b.x-M/2,b.y,b.width+M,b.height)}if(b.height<j){const M=j-b.height;b=new DOMRect(b.x,b.y-M/2,b.width,b.height+M)}const P=m<=u||m>c;!a&&!P&&l.push({group:e,groupSize:re({group:e}),panels:[C,h],separator:"width"in g?void 0:g,rect:b}),a=!1}}d=!1,C=h,y=[]}}else if(p.hasAttribute("data-separator")){p.ariaDisabled!==null&&(a=!0);const h=o.find(f=>f.element===p);h?y.push(h):(C=void 0,y=[])}else d=!0}return l}var H;class Un{constructor(){Je(this,H,{})}addListener(t,n){const r=ae(this,H)[t];return r===void 0?ae(this,H)[t]=[n]:r.includes(n)||r.push(n),()=>{this.removeListener(t,n)}}emit(t,n){const r=ae(this,H)[t];if(r!==void 0)if(r.length===1)r[0].call(null,n);else{let o=!1,s=null;const l=Array.from(r);for(let a=0;a<l.length;a++){const d=l[a];try{d.call(null,n)}catch(u){s===null&&(o=!0,s=u)}}if(o)throw s}}removeAllListeners(){Ue(this,H,{})}removeListener(t,n){const r=ae(this,H)[t];if(r!==void 0){const o=r.indexOf(n);o>=0&&r.splice(o,1)}}}H=new WeakMap;function O(e,t,n=0){return Math.abs(V(e)-V(t))<=n}let N={cursorFlags:0,interactionState:{state:"inactive"},mountedGroups:new Map};const B=new Un;function D(){return N}function W(e){const t=typeof e=="function"?e(N):e;if(N===t)return N;const n=N;return N={...N,...t},t.cursorFlags!==void 0&&B.emit("cursorFlagsChange",N.cursorFlags),t.interactionState!==void 0&&B.emit("interactionStateChange",N.interactionState),t.mountedGroups!==void 0&&(N.mountedGroups.forEach((r,o)=>{r.derivedPanelConstraints.forEach(s=>{if(s.collapsible){const{layout:l}=n.mountedGroups.get(o)??{};if(l){const a=O(s.collapsedSize,r.layout[s.panelId]),d=O(s.collapsedSize,l[s.panelId]);a&&!d&&(o.inMemoryLastExpandedPanelSizes[s.panelId]=l[s.panelId])}}})}),B.emit("mountedGroupsChange",N.mountedGroups)),N}function qn(e,t,n){let r,o={x:1/0,y:1/0};for(const s of t){const l=fn(n,s.rect);switch(e){case"horizontal":{l.x<=o.x&&(r=s,o=l);break}case"vertical":{l.y<=o.y&&(r=s,o=l);break}}}return r?{distance:o,hitRegion:r}:void 0}function Kn(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function Zn(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:et(e),b:et(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();L(r,"Stacking order can only be calculated for elements with a common ancestor");const o={a:Qe(Ze(n.a)),b:Qe(Ze(n.b))};if(o.a===o.b){const s=r.childNodes,l={a:n.a.at(-1),b:n.b.at(-1)};let a=s.length;for(;a--;){const d=s[a];if(d===l.a)return 1;if(d===l.b)return-1}}return Math.sign(o.a-o.b)}const Qn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function er(e){const t=getComputedStyle(hn(e)??e).display;return t==="flex"||t==="inline-flex"}function tr(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||er(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||Qn.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function Ze(e){let t=e.length;for(;t--;){const n=e[t];if(L(n,"Missing node"),tr(n))return n}return null}function Qe(e){return e&&Number(getComputedStyle(e).zIndex)||0}function et(e){const t=[];for(;e;)t.push(e),e=hn(e);return t}function hn(e){const{parentNode:t}=e;return Kn(t)?t.host:t}function nr(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function rr({groupElement:e,hitRegion:t,pointerEventTarget:n}){if(!pn(n)||n.contains(e)||e.contains(n))return!0;if(Zn(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(nr(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function Ge(e,t){const n=[];return t.forEach((r,o)=>{if(o.disabled)return;const s=mn(o),l=qn(o.orientation,s,{x:e.clientX,y:e.clientY});l&&l.distance.x<=0&&l.distance.y<=0&&rr({groupElement:o.element,hitRegion:l.hitRegion.rect,pointerEventTarget:e.target})&&n.push(l.hitRegion)}),n}function or(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function A(e,t){return O(e,t)?0:e>t?1:-1}function ne({overrideDisabledPanels:e,panelConstraints:t,prevSize:n,size:r}){const{collapsedSize:o=0,collapsible:s,disabled:l,maxSize:a=100,minSize:d=0}=t;if(l&&!e)return n;if(A(r,d)<0)if(s){const u=(o+d)/2;A(r,u)<0?r=o:r=d}else r=d;return r=Math.min(a,r),r=V(r),r}function le({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:o,trigger:s}){if(O(e,0))return t;const l=s==="imperative-api",a=Object.values(t),d=Object.values(o),u=[...a],[c,v]=r;L(c!=null,"Invalid first pivot index"),L(v!=null,"Invalid second pivot index");let C=0;switch(s){case"keyboard":{{const p=e<0?v:c,h=n[p];L(h,`Panel constraints not found for index ${p}`);const{collapsedSize:f=0,collapsible:x,minSize:S=0}=h;if(x){const g=a[p];if(L(g!=null,`Previous layout not found for panel index ${p}`),O(g,f)){const b=S-g;A(b,Math.abs(e))>0&&(e=e<0?0-b:b)}}}{const p=e<0?c:v,h=n[p];L(h,`No panel constraints found for index ${p}`);const{collapsedSize:f=0,collapsible:x,minSize:S=0}=h;if(x){const g=a[p];if(L(g!=null,`Previous layout not found for panel index ${p}`),O(g,S)){const b=g-f;A(b,Math.abs(e))>0&&(e=e<0?0-b:b)}}}break}default:{const p=e<0?v:c,h=n[p];L(h,`Panel constraints not found for index ${p}`);const f=a[p],{collapsible:x,collapsedSize:S,minSize:g}=h;if(x&&A(f,g)<0)if(e>0){const b=g-S,j=b/2,P=f+e;A(P,g)<0&&(e=A(e,j)<=0?0:b)}else{const b=g-S,j=100-b/2,P=f-e;A(P,g)<0&&(e=A(100+e,j)>0?0:-b)}break}}{const p=e<0?1:-1;let h=e<0?v:c,f=0;for(;;){const S=a[h];L(S!=null,`Previous layout not found for panel index ${h}`);const g=ne({overrideDisabledPanels:l,panelConstraints:n[h],prevSize:S,size:100})-S;if(f+=g,h+=p,h<0||h>=n.length)break}const x=Math.min(Math.abs(e),Math.abs(f));e=e<0?0-x:x}{let p=e<0?c:v;for(;p>=0&&p<n.length;){const h=Math.abs(e)-Math.abs(C),f=a[p];L(f!=null,`Previous layout not found for panel index ${p}`);const x=f-h,S=ne({overrideDisabledPanels:l,panelConstraints:n[p],prevSize:f,size:x});if(!O(f,S)&&(C+=f-S,u[p]=S,C.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?p--:p++}}if(or(d,u))return o;{const p=e<0?v:c,h=a[p];L(h!=null,`Previous layout not found for panel index ${p}`);const f=h+C,x=ne({overrideDisabledPanels:l,panelConstraints:n[p],prevSize:h,size:f});if(u[p]=x,!O(x,f)){let S=f-x,g=e<0?v:c;for(;g>=0&&g<n.length;){const b=u[g];L(b!=null,`Previous layout not found for panel index ${g}`);const j=b+S,P=ne({overrideDisabledPanels:l,panelConstraints:n[g],prevSize:b,size:j});if(O(b,P)||(S-=P-b,u[g]=P),O(S,0))break;e>0?g--:g++}}}const y=Object.values(u).reduce((p,h)=>h+p,0);if(!O(y,100,.1))return o;const m=Object.keys(o);return u.reduce((p,h,f)=>(p[m[f]]=h,p),{})}function q(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(t[n]===void 0||A(e[n],t[n])!==0)return!1;return!0}function K({layout:e,panelConstraints:t}){const n=Object.values(e),r=[...n],o=r.reduce((a,d)=>a+d,0);if(r.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${r.map(a=>`${a}%`).join(", ")}`);if(!O(o,100)&&r.length>0)for(let a=0;a<t.length;a++){const d=r[a];L(d!=null,`No layout data found for index ${a}`);const u=100/o*d;r[a]=u}let s=0;for(let a=0;a<t.length;a++){const d=n[a];L(d!=null,`No layout data found for index ${a}`);const u=r[a];L(u!=null,`No layout data found for index ${a}`);const c=ne({overrideDisabledPanels:!0,panelConstraints:t[a],prevSize:d,size:u});u!=c&&(s+=u-c,r[a]=c)}if(!O(s,0))for(let a=0;a<t.length;a++){const d=r[a];L(d!=null,`No layout data found for index ${a}`);const u=d+s,c=ne({overrideDisabledPanels:!0,panelConstraints:t[a],prevSize:d,size:u});if(d!==c&&(s-=c-d,r[a]=c,O(s,0)))break}const l=Object.keys(e);return r.reduce((a,d,u)=>(a[l[u]]=d,a),{})}function bn({groupId:e,panelId:t}){const n=()=>{const{mountedGroups:a}=D();for(const[d,{defaultLayoutDeferred:u,derivedPanelConstraints:c,layout:v,separatorToPanels:C}]of a)if(d.id===e)return{defaultLayoutDeferred:u,derivedPanelConstraints:c,group:d,layout:v,separatorToPanels:C};throw Error(`Group ${e} not found`)},r=()=>{const a=n().derivedPanelConstraints.find(d=>d.panelId===t);if(a!==void 0)return a;throw Error(`Panel constraints not found for Panel ${t}`)},o=()=>{const a=n().group.panels.find(d=>d.id===t);if(a!==void 0)return a;throw Error(`Layout not found for Panel ${t}`)},s=()=>{const a=n().layout[t];if(a!==void 0)return a;throw Error(`Layout not found for Panel ${t}`)},l=a=>{const d=s();if(a===d)return;const{defaultLayoutDeferred:u,derivedPanelConstraints:c,group:v,layout:C,separatorToPanels:y}=n(),m=v.panels.findIndex(x=>x.id===t),p=m===v.panels.length-1,h=le({delta:p?d-a:a-d,initialLayout:C,panelConstraints:c,pivotIndices:p?[m-1,m]:[m,m+1],prevLayout:C,trigger:"imperative-api"}),f=K({layout:h,panelConstraints:c});q(C,f)||W(x=>({mountedGroups:new Map(x.mountedGroups).set(v,{defaultLayoutDeferred:u,derivedPanelConstraints:c,layout:f,separatorToPanels:y})}))};return{collapse:()=>{const{collapsible:a,collapsedSize:d}=r(),{mutableValues:u}=o(),c=s();a&&c!==d&&(u.expandToSize=c,l(d))},expand:()=>{const{collapsible:a,collapsedSize:d,minSize:u}=r(),{mutableValues:c}=o(),v=s();if(a&&v===d){let C=c.expandToSize??u;C===0&&(C=1),l(C)}},getSize:()=>{const{group:a}=n(),d=s(),{element:u}=o(),c=a.orientation==="horizontal"?u.offsetWidth:u.offsetHeight;return{asPercentage:d,inPixels:c}},isCollapsed:()=>{const{collapsible:a,collapsedSize:d}=r(),u=s();return a&&O(d,u)},resize:a=>{if(s()!==a){let d;switch(typeof a){case"number":{const{group:u}=n(),c=re({group:u});d=V(a/c*100);break}case"string":{d=parseFloat(a);break}}l(d)}}}}function tt(e){if(e.defaultPrevented)return;const{mountedGroups:t}=D();Ge(e,t).forEach(n=>{if(n.separator){const r=n.panels.find(o=>o.panelConstraints.defaultSize!==void 0);if(r){const o=r.panelConstraints.defaultSize,s=bn({groupId:n.group.id,panelId:r.id});s&&o!==void 0&&(s.resize(o),e.preventDefault())}}})}function ke(e){const{mountedGroups:t}=D();for(const[n]of t)if(n.separators.some(r=>r.element===e))return n;throw Error("Could not find parent Group for separator element")}function gn({groupId:e}){const t=()=>{const{mountedGroups:n}=D();for(const[r,o]of n)if(r.id===e)return{group:r,...o};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){const{defaultLayoutDeferred:n,layout:r}=t();return n?{}:r},setLayout(n){const{defaultLayoutDeferred:r,derivedPanelConstraints:o,group:s,layout:l,separatorToPanels:a}=t(),d=K({layout:n,panelConstraints:o});if(r)return l;if(!q(l,d)){W(c=>({mountedGroups:new Map(c.mountedGroups).set(s,{defaultLayoutDeferred:r,derivedPanelConstraints:o,layout:d,separatorToPanels:a})}));const u=s.panels.map(({id:c})=>c).join(",");s.inMemoryLayouts[u]=d}return d}}}function zn(e){const{mountedGroups:t}=D(),n=t.get(e);return L(n,`Mounted Group ${e.id} not found`),n}function U(e,t){const n=ke(e),r=zn(n),o=n.separators.find(c=>c.element===e);L(o,"Matching separator not found");const s=r.separatorToPanels.get(o);L(s,"Matching panels not found");const l=s.map(c=>n.panels.indexOf(c)),a=gn({groupId:n.id}).getLayout(),d=le({delta:t,initialLayout:a,panelConstraints:r.derivedPanelConstraints,pivotIndices:l,prevLayout:a,trigger:"keyboard"}),u=K({layout:d,panelConstraints:r.derivedPanelConstraints});q(a,u)||W(c=>({mountedGroups:new Map(c.mountedGroups).set(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedPanelConstraints:r.derivedPanelConstraints,layout:u,separatorToPanels:r.separatorToPanels})}))}function nt(e){if(e.defaultPrevented)return;const t=e.currentTarget,n=ke(t);if(!n.disabled)switch(e.key){case"ArrowDown":{e.preventDefault(),n.orientation==="vertical"&&U(t,5);break}case"ArrowLeft":{e.preventDefault(),n.orientation==="horizontal"&&U(t,-5);break}case"ArrowRight":{e.preventDefault(),n.orientation==="horizontal"&&U(t,5);break}case"ArrowUp":{e.preventDefault(),n.orientation==="vertical"&&U(t,-5);break}case"End":{e.preventDefault(),U(t,100);break}case"Enter":{e.preventDefault();const r=ke(t),{derivedPanelConstraints:o,layout:s,separatorToPanels:l}=zn(r),a=r.separators.find(v=>v.element===t);L(a,"Matching separator not found");const d=l.get(a);L(d,"Matching panels not found");const u=d[0],c=o.find(v=>v.panelId===u.id);if(L(c,"Panel metadata not found"),c.collapsible){const v=s[u.id],C=c.collapsedSize===v?r.inMemoryLastExpandedPanelSizes[u.id]??c.minSize:c.collapsedSize;U(t,C-v)}break}case"F6":{e.preventDefault();const r=ke(t).separators.map(l=>l.element),o=Array.from(r).findIndex(l=>l===e.currentTarget);L(o!==null,"Index not found");const s=e.shiftKey?o>0?o-1:r.length-1:o+1<r.length?o+1:0;r[s].focus();break}case"Home":{e.preventDefault(),U(t,-100);break}}}function rt(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const{mountedGroups:t}=D(),n=Ge(e,t),r=new Map;let o=!1;n.forEach(s=>{s.separator&&(o||(o=!0,s.separator.element.focus()));const l=t.get(s.group);l&&r.set(s.group,l.layout)}),W({interactionState:{hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},state:"active"}}),n.length&&e.preventDefault()}const ar=e=>e,Pe=()=>{},yn=1,Rn=2,xn=4,vn=8,ot=3,at=12;let pe;function it(){return pe===void 0&&(pe=!1,typeof window<"u"&&(window.navigator.userAgent.includes("Chrome")||window.navigator.userAgent.includes("Firefox"))&&(pe=!0)),pe}function ir({cursorFlags:e,groups:t,state:n}){let r=0,o=0;switch(n){case"active":case"hover":t.forEach(s=>{if(!s.disableCursor)switch(s.orientation){case"horizontal":{r++;break}case"vertical":{o++;break}}})}if(!(r===0&&o===0)){switch(n){case"active":{if(e&&it()){const s=(e&yn)!==0,l=(e&Rn)!==0,a=(e&xn)!==0,d=(e&vn)!==0;if(s)return a?"se-resize":d?"ne-resize":"e-resize";if(l)return a?"sw-resize":d?"nw-resize":"w-resize";if(a)return"s-resize";if(d)return"n-resize"}break}}return it()?r>0&&o>0?"move":r>0?"ew-resize":"ns-resize":r>0&&o>0?"grab":r>0?"col-resize":"row-resize"}}const st=new WeakMap;function Fe(e){if(e.defaultView===null||e.defaultView===void 0)return;let{prevStyle:t,styleSheet:n}=st.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets.push(n));const{cursorFlags:r,interactionState:o}=D();switch(o.state){case"active":case"hover":{const s=ir({cursorFlags:r,groups:o.hitRegions.map(a=>a.group),state:o.state}),l=`*, *:hover {cursor: ${s} !important; }`;if(t===l)return;t=l,s?n.cssRules.length===0?n.insertRule(l):n.replaceSync(l):n.cssRules.length===1&&n.deleteRule(0);break}case"inactive":{t=void 0,n.cssRules.length===1&&n.deleteRule(0);break}}st.set(e,{prevStyle:t,styleSheet:n})}function Sn({document:e,event:t,hitRegions:n,initialLayoutMap:r,mountedGroups:o,pointerDownAtPoint:s,prevCursorFlags:l}){let a=0;const d=new Map(o);n.forEach(c=>{const{group:v,groupSize:C}=c,{disableCursor:y,orientation:m,panels:p}=v;let h=0;s?m==="horizontal"?h=(t.clientX-s.x)/C*100:h=(t.clientY-s.y)/C*100:m==="horizontal"?h=t.clientX<0?-100:100:h=t.clientY<0?-100:100;const f=r.get(v),{defaultLayoutDeferred:x,derivedPanelConstraints:S,layout:g,separatorToPanels:b}=o.get(v)??{defaultLayoutDeferred:!1};if(S&&f&&g&&b){const j=le({delta:h,initialLayout:f,panelConstraints:S,pivotIndices:c.panels.map(P=>p.indexOf(P)),prevLayout:g,trigger:"mouse-or-touch"});if(q(j,g)){if(h!==0&&!y)switch(m){case"horizontal":{a|=h<0?yn:Rn;break}case"vertical":{a|=h<0?xn:vn;break}}}else{d.set(c.group,{defaultLayoutDeferred:x,derivedPanelConstraints:S,layout:j,separatorToPanels:b});const P=c.group.panels.map(({id:M})=>M).join(",");c.group.inMemoryLayouts[P]=j}}});let u=0;t.movementX===0?u|=l&ot:u|=a&ot,t.movementY===0?u|=l&at:u|=a&at,W({cursorFlags:u,mountedGroups:d}),Fe(e)}function lt(e){const{cursorFlags:t,interactionState:n,mountedGroups:r}=D();switch(n.state){case"active":Sn({document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:r,prevCursorFlags:t})}}function dt(e){if(e.defaultPrevented)return;const{cursorFlags:t,interactionState:n,mountedGroups:r}=D();switch(n.state){case"active":{if(e.buttons===0){W(o=>o.interactionState.state==="inactive"?o:{cursorFlags:0,interactionState:{state:"inactive"}}),W(o=>({mountedGroups:new Map(o.mountedGroups)}));return}Sn({document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:r,pointerDownAtPoint:n.pointerDownAtPoint,prevCursorFlags:t});break}default:{const o=Ge(e,r);o.length===0?n.state!=="inactive"&&W({interactionState:{state:"inactive"}}):W({interactionState:{hitRegions:o,state:"hover"}}),Fe(e.currentTarget);break}}}function ct(e){if(e.relatedTarget instanceof HTMLIFrameElement){const{interactionState:t}=D();switch(t.state){case"hover":W({interactionState:{state:"inactive"}})}}}function ut(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const{interactionState:t}=D();switch(t.state){case"active":W({cursorFlags:0,interactionState:{state:"inactive"}}),t.hitRegions.length>0&&(Fe(e.currentTarget),W(n=>({mountedGroups:new Map(n.mountedGroups)})),e.preventDefault())}}function pt(e){let t=0,n=0;const r={};for(const s of e)if(s.defaultSize!==void 0){t++;const l=V(s.defaultSize);n+=l,r[s.panelId]=l}else r[s.panelId]=void 0;const o=e.length-t;if(o!==0){const s=V((100-n)/o);for(const l of e)l.defaultSize===void 0&&(r[l.panelId]=s)}return r}function sr(e,t,n){if(!n[0])return;const r=e.panels.find(d=>d.element===t);if(!r||!r.onResize)return;const o=re({group:e}),s=e.orientation==="horizontal"?r.element.offsetWidth:r.element.offsetHeight,l=r.mutableValues.prevSize,a={asPercentage:V(s/o*100),inPixels:s};r.mutableValues.prevSize=a,r.onResize(a,r.id,l)}function lr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function dr(e,t){const n=e.map(o=>o.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o))return!1;return!0}const ee=new Map;function cr(e){let t=!0;L(e.element.ownerDocument.defaultView,"Cannot register an unmounted Group");const n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,o=new Set,s=new n(m=>{for(const p of m){const{borderBoxSize:h,target:f}=p;if(f===e.element){if(t){if(re({group:e})===0)return;W(x=>{const S=x.mountedGroups.get(e);if(S){const g=Oe(e),b=S.defaultLayoutDeferred?pt(g):S.layout,j=K({layout:b,panelConstraints:g});return!S.defaultLayoutDeferred&&q(b,j)&&lr(S.derivedPanelConstraints,g)?x:{mountedGroups:new Map(x.mountedGroups).set(e,{defaultLayoutDeferred:!1,derivedPanelConstraints:g,layout:j,separatorToPanels:S.separatorToPanels})}}return x})}}else sr(e,f,h)}});s.observe(e.element),e.panels.forEach(m=>{L(!r.has(m.id),`Panel ids must be unique; id "${m.id}" was used more than once`),r.add(m.id),m.onResize&&s.observe(m.element)});const l=re({group:e}),a=Oe(e),d=e.panels.map(({id:m})=>m).join(",");let u=e.defaultLayout;u&&(dr(e.panels,u)||(u=void 0));const c=e.inMemoryLayouts[d]??u??pt(a),v=K({layout:c,panelConstraints:a}),C=mn(e),y=e.element.ownerDocument;return W(m=>{const p=new Map;return ee.set(y,(ee.get(y)??0)+1),C.forEach(h=>{h.separator&&p.set(h.separator,h.panels)}),{mountedGroups:new Map(m.mountedGroups).set(e,{defaultLayoutDeferred:l===0,derivedPanelConstraints:a,layout:v,separatorToPanels:p})}}),e.separators.forEach(m=>{L(!o.has(m.id),`Separator ids must be unique; id "${m.id}" was used more than once`),o.add(m.id),m.element.addEventListener("keydown",nt)}),ee.get(y)===1&&(y.addEventListener("dblclick",tt,!0),y.addEventListener("pointerdown",rt,!0),y.addEventListener("pointerleave",lt),y.addEventListener("pointermove",dt),y.addEventListener("pointerout",ct),y.addEventListener("pointerup",ut,!0)),function(){t=!1,ee.set(y,Math.max(0,(ee.get(y)??0)-1)),W(m=>{const p=new Map(m.mountedGroups);return p.delete(e),{mountedGroups:p}}),e.separators.forEach(m=>{m.element.removeEventListener("keydown",nt)}),ee.get(y)||(y.removeEventListener("dblclick",tt,!0),y.removeEventListener("pointerdown",rt,!0),y.removeEventListener("pointerleave",lt),y.removeEventListener("pointermove",dt),y.removeEventListener("pointerout",ct),y.removeEventListener("pointerup",ut,!0)),s.disconnect()}}function ur(){const[e,t]=R.useState({}),n=R.useCallback(()=>t({}),[]);return[e,n]}function Ne(e){const t=R.useId();return`${e??t}`}const Z=typeof window<"u"?R.useLayoutEffect:R.useEffect;function ie(e){const t=R.useRef(e);return Z(()=>{t.current=e},[e]),R.useCallback((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[t])}function $e(...e){return ie(t=>{e.forEach(n=>{if(n)switch(typeof n){case"function":{n(t);break}case"object":{n.current=t;break}}})})}function Ve(e){const t=R.useRef({...e});return Z(()=>{for(const n in e)t.current[n]=e[n]},[e]),t.current}const wn=R.createContext(null);function pr(e,t){const n=R.useRef({getLayout:()=>({}),setLayout:ar});R.useImperativeHandle(t,()=>n.current,[]),Z(()=>{Object.assign(n.current,gn({groupId:e}))})}function Cn({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:o,elementRef:s,groupRef:l,id:a,onLayoutChange:d,onLayoutChanged:u,orientation:c="horizontal",resizeTargetMinimumSize:v={coarse:20,fine:10},style:C,...y}){const m=R.useRef({onLayoutChange:{},onLayoutChanged:{}}),p=ie(w=>{q(m.current.onLayoutChange,w)||(m.current.onLayoutChange=w,d==null||d(w))}),h=ie(w=>{q(m.current.onLayoutChanged,w)||(m.current.onLayoutChanged=w,u==null||u(w))}),f=Ne(a),x=R.useRef(null),[S,g]=ur(),b=R.useRef({lastExpandedPanelSizes:{},layouts:{},panels:[],resizeTargetMinimumSize:v,separators:[]}),j=$e(x,s);pr(f,l);const P=ie((w,I)=>{const{interactionState:E,mountedGroups:G}=D();for(const F of G.keys())if(F.id===w){const $=G.get(F);if($){let Y=!1;switch(E.state){case"active":{Y=E.hitRegions.some(oe=>oe.group===F);break}}return{flexGrow:$.layout[I]??1,pointerEvents:Y?"none":void 0}}}return{flexGrow:(n==null?void 0:n[I])??1}}),M=Ve({defaultLayout:n,disableCursor:r}),Q=R.useMemo(()=>({get disableCursor(){return!!M.disableCursor},getPanelStyles:P,id:f,orientation:c,registerPanel:w=>{const I=b.current;return I.panels=De(c,[...I.panels,w]),g(),()=>{I.panels=I.panels.filter(E=>E!==w),g()}},registerSeparator:w=>{const I=b.current;return I.separators=De(c,[...I.separators,w]),g(),()=>{I.separators=I.separators.filter(E=>E!==w),g()}},togglePanelDisabled:(w,I)=>{const E=b.current.panels.find(F=>F.id===w);E&&(E.panelConstraints.disabled=I);const{mountedGroups:G}=D();for(const F of G.keys())if(F.id===f){const $=G.get(F);$&&($.derivedPanelConstraints=Oe(F))}},toggleSeparatorDisabled:(w,I)=>{const E=b.current.separators.find(G=>G.id===w);E&&(E.disabled=I)}}),[P,f,g,c,M]),X=R.useRef(null);return Z(()=>{const w=x.current;if(w===null)return;const I=b.current;let E;if(M.defaultLayout!==void 0&&Object.keys(M.defaultLayout).length===I.panels.length){E={};for(const _ of I.panels){const J=M.defaultLayout[_.id];J!==void 0&&(E[_.id]=J)}}const G={defaultLayout:E,disableCursor:!!M.disableCursor,disabled:!!o,element:w,id:f,inMemoryLastExpandedPanelSizes:b.current.lastExpandedPanelSizes,inMemoryLayouts:b.current.layouts,orientation:c,panels:I.panels,resizeTargetMinimumSize:I.resizeTargetMinimumSize,separators:I.separators};X.current=G;const F=cr(G),$=D().mountedGroups.get(G);if($){const{defaultLayoutDeferred:_,derivedPanelConstraints:J,layout:de}=$;!_&&J.length>0&&(p(de),h(de))}const Y=B.addListener("interactionStateChange",_=>{_.state}),oe=B.addListener("mountedGroupsChange",_=>{const J=_.get(G);if(J){const{defaultLayoutDeferred:de,derivedPanelConstraints:jn,layout:He}=J;if(de||jn.length===0)return;const{interactionState:Tn}=D(),kn=Tn.state!=="active";p(He),kn&&h(He)}});return()=>{X.current=null,F(),Y(),oe()}},[o,f,h,p,c,S,M]),R.useEffect(()=>{const w=X.current;w&&(w.defaultLayout=n,w.disableCursor=!!r)}),i.jsx(wn.Provider,{value:Q,children:i.jsx("div",{...y,className:t,"data-group":!0,"data-testid":f,id:f,ref:j,style:{height:"100%",width:"100%",overflow:"hidden",...C,display:"flex",flexDirection:c==="horizontal"?"row":"column",flexWrap:"nowrap",touchAction:c==="horizontal"?"pan-y":"pan-x"},children:e})})}Cn.displayName="Group";function Me(e,t){return`react-resizable-panels:${[e,...t].join(":")}`}function Ae({debounceSaveMs:e=100,panelIds:t,storage:n=localStorage,...r}){const o=t!==void 0,s="id"in r?r.id:r.groupId,l=Me(s,t??[]),a=R.useSyncExternalStore(fr,()=>n.getItem(l),()=>n.getItem(l)),d=R.useMemo(()=>a?JSON.parse(a):void 0,[a]),u=R.useRef(null),c=R.useCallback(()=>{const y=u.current;y&&(u.current=null,clearTimeout(y))},[]);R.useLayoutEffect(()=>()=>{c()},[c]);const v=R.useCallback(y=>{c();let m;o?m=Me(s,Object.keys(y)):m=Me(s,[]);try{n.setItem(m,JSON.stringify(y))}catch(p){console.error(p)}},[c,o,s,n]),C=R.useCallback(y=>{c(),e===0?v(y):u.current=setTimeout(()=>{v(y)},e)},[c,e,v]);return{defaultLayout:d,onLayoutChange:C,onLayoutChanged:v}}function fr(){return function(){}}function mr(){return R.useRef(null)}function Be(){const e=R.useContext(wn);return L(e,"Group Context not found; did you render a Panel or Separator outside of a Group?"),e}function hr(e,t){const{id:n}=Be(),r=R.useRef({collapse:Pe,expand:Pe,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Pe});R.useImperativeHandle(t,()=>r.current,[]),Z(()=>{Object.assign(r.current,bn({groupId:n,panelId:e}))})}function In({children:e,className:t,collapsedSize:n="0%",collapsible:r=!1,defaultSize:o,disabled:s,elementRef:l,id:a,maxSize:d="100%",minSize:u="0%",onResize:c,panelRef:v,style:C,...y}){const m=!!a,p=Ne(a),h=Ve({disabled:s}),f=R.useRef(null),x=$e(f,l),{getPanelStyles:S,id:g,orientation:b,registerPanel:j,togglePanelDisabled:P}=Be(),M=c!==null,Q=ie((w,I,E)=>{c==null||c(w,a,E)});Z(()=>{const w=f.current;if(w!==null){const I={element:w,id:p,idIsStable:m,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:M?Q:void 0,panelConstraints:{collapsedSize:n,collapsible:r,defaultSize:o,disabled:h.disabled,maxSize:d,minSize:u}};return j(I)}},[n,r,o,M,p,m,d,u,Q,j,h]),R.useEffect(()=>{P(p,!!s)},[s,p,P]),hr(p,v);const X=R.useSyncExternalStore(w=>(B.addListener("mountedGroupsChange",w),()=>{B.removeListener("mountedGroupsChange",w)}),()=>JSON.stringify(S(g,p)),()=>JSON.stringify(S(g,p)));return i.jsx("div",{...y,"aria-disabled":s||void 0,"data-panel":!0,"data-testid":p,id:p,ref:x,style:{...br,display:"flex",flexBasis:0,flexShrink:1,overflow:"hidden",...JSON.parse(X)},children:i.jsx("div",{className:t,style:{maxHeight:"100%",maxWidth:"100%",flexGrow:1,...C,touchAction:b==="horizontal"?"pan-y":"pan-x"},children:e})})}In.displayName="Panel";const br={minHeight:0,maxHeight:"100%",height:"auto",minWidth:0,maxWidth:"100%",width:"auto",border:"none",borderWidth:0,padding:0,margin:0};function gr(){return R.useRef(null)}function zr({layout:e,panelConstraints:t,panelId:n,panelIndex:r}){let o,s;const l=e[n],a=t.find(d=>d.panelId===n);if(a){const d=a.maxSize,u=a.collapsible?a.collapsedSize:a.minSize,c=[r,r+1];s=K({layout:le({delta:u-l,initialLayout:e,panelConstraints:t,pivotIndices:c,prevLayout:e}),panelConstraints:t})[n],o=K({layout:le({delta:d-l,initialLayout:e,panelConstraints:t,pivotIndices:c,prevLayout:e}),panelConstraints:t})[n]}return{valueControls:n,valueMax:o,valueMin:s,valueNow:l}}function Ln({children:e,className:t,disabled:n,elementRef:r,id:o,style:s,...l}){const a=Ne(o),d=Ve({disabled:n}),[u,c]=R.useState({}),[v,C]=R.useState("inactive"),y=R.useRef(null),m=$e(y,r),{disableCursor:p,id:h,orientation:f,registerSeparator:x,toggleSeparatorDisabled:S}=Be(),g=f==="horizontal"?"vertical":"horizontal";Z(()=>{const j=y.current;if(j!==null){const P={disabled:d.disabled,element:j,id:a},M=x(P),Q=B.addListener("interactionStateChange",w=>{C(w.state!=="inactive"&&w.hitRegions.some(I=>I.separator===P)?w.state:"inactive")}),X=B.addListener("mountedGroupsChange",w=>{w.forEach(({derivedPanelConstraints:I,layout:E,separatorToPanels:G},F)=>{if(F.id===h){const $=G.get(P);if($){const Y=$[0],oe=F.panels.indexOf(Y);c(zr({layout:E,panelConstraints:I,panelId:Y.id,panelIndex:oe}))}}})});return()=>{Q(),X(),M()}}},[h,a,x,d]),R.useEffect(()=>{S(a,!!n)},[n,a,S]);let b;return n&&!p&&(b="not-allowed"),i.jsx("div",{...l,"aria-controls":u.valueControls,"aria-disabled":n||void 0,"aria-orientation":g,"aria-valuemax":u.valueMax,"aria-valuemin":u.valueMin,"aria-valuenow":u.valueNow,children:e,className:t,"data-separator":n?"disabled":v,"data-testid":a,id:a,ref:m,role:"separator",style:{flexBasis:"auto",cursor:b,...s,flexGrow:0,flexShrink:0,touchAction:"none"},tabIndex:n?void 0:0})}Ln.displayName="Separator";const[yr,Rr]=Mn({name:"ResizableContext"}),xr=({controlRef:e,disabled:t,orientation:n="horizontal",...r}={})=>{const o=mr(),s=R.useCallback((l={})=>({disabled:t,orientation:n,...r,...l,style:{height:void 0,width:void 0,...r.style,...l.style},elementRef:se(l.elementRef,r.ref),groupRef:se(l.groupRef,o,e),onLayoutChange:Ee(l.onLayoutChange,r.onLayoutChange),onLayoutChanged:Ee(l.onLayoutChanged,r.onLayoutChanged)}),[t,n,o,e,r]);return{disabled:t,groupRef:o,orientation:n,getRootProps:s}},vr=({controlRef:e,...t})=>{const n=gr(),r=R.useCallback((o={})=>({...t,...o,elementRef:se(o.elementRef,t.ref),panelRef:se(o.panelRef,n,e),onResize:Ee(o.onResize,t.onResize)}),[n,e,t]);return{panelRef:n,getItemProps:r}},Sr=({disabled:e,...t})=>{const{disabled:n,groupRef:r,orientation:o}=Rr(),s=e||n,l=R.useCallback(u=>{var m,p;u.preventDefault();const c=(m=r.current)==null?void 0:m.getLayout();if(!c)return;const C=100/Object.keys(c).length,y=Object.fromEntries(Object.keys(c).map(h=>[h,C]));(p=r.current)==null||p.setLayout(y)},[r]),a=R.useCallback((u={})=>({"aria-disabled":Dn(s),"aria-orientation":o,"data-disabled":On(s),disabled:s,tabIndex:s?-1:0,...t,...u,elementRef:se(u.elementRef,t.ref),onDoubleClick:En(u.onDoubleClick,t.onDoubleClick,l)}),[o,s,t,l]);return{getIconProps:R.useCallback((u={})=>({"data-icon":"",...u}),[]),getTriggerProps:a}},{withContext:_e,withProvider:wr}=Wn("resizable",Nn),k=wr(({children:e,orientation:t,...n})=>{const r=Fn(t),{disabled:o,groupRef:s,orientation:l,getRootProps:a}=xr({orientation:r,...n}),d=R.useMemo(()=>({disabled:o,groupRef:s,orientation:l}),[o,l,s]);return i.jsx(yr,{value:d,children:i.jsx(We.div,{as:Cn,...a(),children:e})})},"root",{transferProps:["orientation"]})(),z=_e(e=>{const{getItemProps:t}=vr(e);return i.jsx(We.div,{as:In,...t()})},"item")(),T=_e(({children:e,icon:t,iconProps:n,...r})=>{const{getIconProps:o,getTriggerProps:s}=Sr(r);return i.jsxs(We.div,{as:Ln,...s(),children:[t?i.jsx(Cr,{...o(n),children:t}):null,e]})},"trigger")(),Cr=_e("div","icon")(),Br={component:k,title:"Components / Resizable"},fe=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),me=()=>i.jsx(Gn,{variant:"stack",rows:["border","spacer","plain"],children:(e,t,n)=>i.jsxs(k,{variant:t,borderWidth:t==="border"?"1px":void 0,h:"md",rounded:t==="border"?"l2":void 0,children:[i.jsx(z,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"One"}),i.jsx(T,{}),i.jsx(z,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"Two"})]},n)}),he=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{colorScheme:"primary",variant:"spacer",h:"md",children:[i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(T,{}),i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]}),i.jsxs(k,{colorScheme:"red",variant:"spacer",h:"md",children:[i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(T,{}),i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),be=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]})]}),ge=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{defaultSize:"30%",display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),ze=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",maxSize:"70%",minSize:"30%",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),ye=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(z,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]})]}),Re=()=>{const e=R.useRef(null),t=R.useRef(null),n=R.useRef(null);return i.jsxs(k,{ref:e,borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{ref:t,display:"center",children:"One"}),i.jsx(T,{ref:n}),i.jsx(z,{display:"center",children:"Two"})]})},xe=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{icon:i.jsx(Ke,{})}),i.jsx(z,{display:"center",children:"Two"})]}),i.jsxs(k,{variant:"spacer",h:"md",orientation:"vertical",children:[i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(T,{icon:i.jsx(Ke,{})}),i.jsx(z,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),ve=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",children:"Left"}),i.jsx(T,{}),i.jsx(z,{children:i.jsxs(k,{orientation:"vertical",children:[i.jsx(z,{display:"center",children:"Top"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Bottom"})]})})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(z,{display:"center",children:"Top"}),i.jsx(T,{}),i.jsx(z,{children:i.jsxs(k,{children:[i.jsx(z,{display:"center",children:"Left"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Right"})]})})]})]}),Se=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",disabled:!0,h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Three"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",children:"One"}),i.jsx(T,{disabled:!0}),i.jsx(z,{display:"center",children:"Two"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Three"})]})]}),we=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",onLayoutChange:e=>{console.log("layout change",e)},onLayoutChanged:e=>{console.log("layout changed",e)},children:[i.jsx(z,{id:"one",display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{id:"two",display:"center",children:"Two"})]}),Ce=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{display:"center",onResize:(e,t,n)=>{console.log("resize",e,t,n)},children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]}),Ie=()=>{const{defaultLayout:e,onLayoutChanged:t}=Ae({id:"persistence",storage:localStorage});return i.jsxs(k,{borderWidth:"1px",defaultLayout:e,h:"md",rounded:"l2",onLayoutChanged:t,children:[i.jsx(z,{id:"one",display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{id:"two",display:"center",children:"Two"})]})},Le=()=>{const[e,t]=qe({key:"showLeft",defaultValue:!0,deserialize:a=>a==="true",serialize:a=>a.toString()}),[n,r]=qe({key:"showRight",defaultValue:!0,deserialize:a=>a==="true",serialize:a=>a.toString()}),o=R.useCallback(()=>{const a=[];return e&&a.push("left"),a.push("middle"),n&&a.push("right"),a},[e,n]),{defaultLayout:s,onLayoutChanged:l}=Ae({id:"conditional",panelIds:o(),storage:localStorage});return i.jsxs(i.Fragment,{children:[i.jsxs(un,{gap:"md",children:[i.jsxs(te,{onClick:()=>t(!e),children:[e?"Hidden":"Show"," Left"]}),i.jsxs(te,{onClick:()=>r(!n),children:[n?"Hidden":"Show"," Right"]})]}),i.jsxs(k,{borderWidth:"1px",defaultLayout:s,h:"md",rounded:"l2",onLayoutChanged:l,children:[e?i.jsxs(i.Fragment,{children:[i.jsx(z,{id:"left",display:"center",minSize:"10%",children:"Left"}),i.jsx(T,{})]}):null,i.jsx(z,{id:"middle",display:"center",minSize:"10%",children:"Middle"}),n?i.jsxs(i.Fragment,{children:[i.jsx(T,{}),i.jsx(z,{id:"right",display:"center",minSize:"10%",children:"Right"})]}):null]})]})},je=()=>{const e=R.useMemo(()=>({getItem:r=>{const o=document.cookie.match(new RegExp(`(^| )${r}=([^;]+)`));return o?o[2]??null:null},setItem:(r,o)=>{document.cookie=`${r}=${o}; max-age=31536000; path=/`}}),[]),{defaultLayout:t,onLayoutChanged:n}=Ae({id:"persistence",storage:e});return i.jsxs(k,{borderWidth:"1px",defaultLayout:t,h:"md",rounded:"l2",onLayoutChanged:n,children:[i.jsx(z,{id:"one",display:"center",children:"One"}),i.jsx(T,{}),i.jsx(z,{id:"two",display:"center",children:"Two"})]})},Te=()=>{const e=R.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsxs(un,{gap:"md",children:[i.jsx(te,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.collapse()},children:'Collapse "one"'}),i.jsx(te,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.expand()},children:'Expand "one"'}),i.jsx(te,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.resize("30%")},children:'Resize "one" to 30'}),i.jsx(te,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.resize("50%")},children:'Resize "one" to 50'})]}),i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(z,{collapsedSize:"15%",collapsible:!0,controlRef:e,display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(T,{}),i.jsx(z,{display:"center",children:"Two"})]})]})};var ft,mt,ht;fe.parameters={...fe.parameters,docs:{...(ft=fe.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(ht=(mt=fe.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var bt,gt,zt;me.parameters={...me.parameters,docs:{...(bt=me.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(zt=(gt=me.parameters)==null?void 0:gt.docs)==null?void 0:zt.source}}};var yt,Rt,xt;he.parameters={...he.parameters,docs:{...(yt=he.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
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
}`,...(xt=(Rt=he.parameters)==null?void 0:Rt.docs)==null?void 0:xt.source}}};var vt,St,wt;be.parameters={...be.parameters,docs:{...(vt=be.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
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
}`,...(wt=(St=be.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var Ct,It,Lt;ge.parameters={...ge.parameters,docs:{...(Ct=ge.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(Lt=(It=ge.parameters)==null?void 0:It.docs)==null?void 0:Lt.source}}};var jt,Tt,kt;ze.parameters={...ze.parameters,docs:{...(jt=ze.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(kt=(Tt=ze.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};var Pt,Mt,Et;ye.parameters={...ye.parameters,docs:{...(Pt=ye.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
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
}`,...(Et=(Mt=ye.parameters)==null?void 0:Mt.docs)==null?void 0:Et.source}}};var Ot,Dt,Wt;Re.parameters={...Re.parameters,docs:{...(Ot=Re.parameters)==null?void 0:Ot.docs,source:{originalSource:`() => {
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
}`,...(Wt=(Dt=Re.parameters)==null?void 0:Dt.docs)==null?void 0:Wt.source}}};var Gt,Ft,Nt;xe.parameters={...xe.parameters,docs:{...(Gt=xe.parameters)==null?void 0:Gt.docs,source:{originalSource:`() => {
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
}`,...(Nt=(Ft=xe.parameters)==null?void 0:Ft.docs)==null?void 0:Nt.source}}};var $t,Vt,At;ve.parameters={...ve.parameters,docs:{...($t=ve.parameters)==null?void 0:$t.docs,source:{originalSource:`() => {
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
}`,...(At=(Vt=ve.parameters)==null?void 0:Vt.docs)==null?void 0:At.source}}};var Bt,_t,Ht;Se.parameters={...Se.parameters,docs:{...(Bt=Se.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
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
}`,...(Ht=(_t=Se.parameters)==null?void 0:_t.docs)==null?void 0:Ht.source}}};var Xt,Yt,Jt;we.parameters={...we.parameters,docs:{...(Xt=we.parameters)==null?void 0:Xt.docs,source:{originalSource:`() => {
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
}`,...(Jt=(Yt=we.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var Ut,qt,Kt;Ce.parameters={...Ce.parameters,docs:{...(Ut=Ce.parameters)==null?void 0:Ut.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(Kt=(qt=Ce.parameters)==null?void 0:qt.docs)==null?void 0:Kt.source}}};var Zt,Qt,en;Ie.parameters={...Ie.parameters,docs:{...(Zt=Ie.parameters)==null?void 0:Zt.docs,source:{originalSource:`() => {
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
}`,...(en=(Qt=Ie.parameters)==null?void 0:Qt.docs)==null?void 0:en.source}}};var tn,nn,rn;Le.parameters={...Le.parameters,docs:{...(tn=Le.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(rn=(nn=Le.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var on,an,sn;je.parameters={...je.parameters,docs:{...(on=je.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(sn=(an=je.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var ln,dn,cn;Te.parameters={...Te.parameters,docs:{...(ln=Te.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=Te.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};const _r=["Basic","Variant","ColorScheme","Orientation","DefaultSize","MinMaxSize","Collapsible","Refs","Icon","NestedResizable","Disabled","onLayoutChange","OnResize","LocaleStorage","ConditionalLocaleStorage","CookieStorage","CustomControl"];export{fe as Basic,ye as Collapsible,he as ColorScheme,Le as ConditionalLocaleStorage,je as CookieStorage,Te as CustomControl,ge as DefaultSize,Se as Disabled,xe as Icon,Ie as LocaleStorage,ze as MinMaxSize,ve as NestedResizable,Ce as OnResize,be as Orientation,Re as Refs,me as Variant,_r as __namedExportsOrder,Br as default,we as onLayoutChange};
