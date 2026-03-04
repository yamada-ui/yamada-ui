var Ze=e=>{throw TypeError(e)};var et=(e,t,n)=>t.has(e)||Ze("Cannot "+n);var se=(e,t,n)=>(et(e,t,"read from private field"),n?n.call(e):t.get(e)),tt=(e,t,n)=>t.has(e)?Ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),nt=(e,t,n,r)=>(et(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{d as _n,r as v,j as a,bV as Fe,m as de,c as Vn,h as Gn,b as Hn,e as Xn,s as Ae,l as Yn,Q as ee}from"./iframe-DUA3oqMy.js";import{P as Jn}from"./props-table-Cj5B83mD.js";import{u as rt}from"./index-DL09X-zC.js";import{W as Rn}from"./wrap-BIvghWgh.js";import{u as qn}from"./index-CcecY9Cs.js";import{G as ot}from"./grip-vertical-icon-Bx73Zahm.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BjdtNp2g.js";import"./grid-item-BYxt1f2b.js";import"./for-B0PAANOF.js";import"./flex-BtD-iYsF.js";import"./heading-Bp7J583J.js";import"./index-D1nHtZAa.js";import"./use-breakpoint-DYVsIoty.js";import"./use-breakpoint-value-cOf6H18k.js";import"./use-color-mode-value-BpZPuStl.js";const Un=_n({base:{icon:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",translateX:"-50%",translateY:"-50%"},item:{boxSize:"full"},root:{boxSize:"full"},trigger:{position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{transitionDuration:"moderate",transitionProperty:"common"}}},variants:{border:{icon:{bg:"colorScheme.muted",color:"colorScheme.fg",py:"1",rounded:"l1"},trigger:{bg:"colorScheme.muted",focusVisibleRing:"none",_after:{position:"absolute"},_hover:{bg:"colorScheme.emphasized"},_focusVisible:{bg:"colorScheme.emphasized"}}},plain:{trigger:{focusVisibleRing:"none",_after:{position:"absolute"}}},spacer:{icon:{color:"colorScheme.fg",transitionDuration:"moderate",transitionProperty:"common"},trigger:{focusVisibleRing:"none",p:"1",_after:{bg:"transparent",display:"block",rounded:"full"},_hover:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}},_focusVisible:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}}}}},props:{orientation:{horizontal:{icon:{transform:"translate(-50%, -50%) rotate(0deg)"}},vertical:{icon:{transform:"translate(-50%, -50%) rotate(90deg)"}}}},compounds:[{css:{trigger:{h:"px",_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"border",orientation:"vertical"},{css:{trigger:{w:"px",_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"border",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",w:"full"}}},variant:"spacer",orientation:"vertical"},{css:{trigger:{_after:{h:"full",w:"2"}}},variant:"spacer",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"plain",orientation:"vertical"},{css:{trigger:{_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"plain",orientation:"horizontal"}],defaultProps:{variant:"border",orientation:"horizontal"}});function Kn(e,t){const n=getComputedStyle(e),r=parseFloat(n.fontSize);return t*r}function Qn(e,t){const n=getComputedStyle(e.ownerDocument.body),r=parseFloat(n.fontSize);return t*r}function Zn(e){return e/100*window.innerHeight}function er(e){return e/100*window.innerWidth}function tr(e){switch(typeof e){case"number":return[e,"px"];case"string":{const t=parseFloat(e);return e.endsWith("%")?[t,"%"]:e.endsWith("px")?[t,"px"]:e.endsWith("rem")?[t,"rem"]:e.endsWith("em")?[t,"em"]:e.endsWith("vh")?[t,"vh"]:e.endsWith("vw")?[t,"vw"]:[t,"%"]}}}function fe({groupSize:e,panelElement:t,styleProp:n}){let r;const[i,s]=tr(n);switch(s){case"%":{r=i/100*e;break}case"px":{r=i;break}case"rem":{r=Qn(t,i);break}case"em":{r=Kn(t,i);break}case"vh":{r=Zn(i);break}case"vw":{r=er(i);break}}return r}function W(e){return parseFloat(e.toFixed(3))}function oe({group:e}){const{orientation:t,panels:n}=e;return n.reduce((r,i)=>(r+=t==="horizontal"?i.element.offsetWidth:i.element.offsetHeight,r),0)}function Be(e){const{panels:t}=e,n=oe({group:e});return n===0?t.map(r=>({groupResizeBehavior:r.panelConstraints.groupResizeBehavior,collapsedSize:0,collapsible:r.panelConstraints.collapsible===!0,defaultSize:void 0,disabled:r.panelConstraints.disabled,minSize:0,maxSize:100,panelId:r.id})):t.map(r=>{const{element:i,panelConstraints:s}=r;let d=0;if(s.collapsedSize!==void 0){const u=fe({groupSize:n,panelElement:i,styleProp:s.collapsedSize});d=W(u/n*100)}let o;if(s.defaultSize!==void 0){const u=fe({groupSize:n,panelElement:i,styleProp:s.defaultSize});o=W(u/n*100)}let l=0;if(s.minSize!==void 0){const u=fe({groupSize:n,panelElement:i,styleProp:s.minSize});l=W(u/n*100)}let c=100;if(s.maxSize!==void 0){const u=fe({groupSize:n,panelElement:i,styleProp:s.maxSize});c=W(u/n*100)}return{groupResizeBehavior:s.groupResizeBehavior,collapsedSize:d,collapsible:s.collapsible===!0,defaultSize:o,disabled:s.disabled,minSize:l,maxSize:c,panelId:r.id}})}function j(e,t="Assertion error"){if(!e)throw Error(t)}function $e(e,t){return Array.from(t).sort(e==="horizontal"?nr:rr)}function nr(e,t){const n=e.element.offsetLeft-t.element.offsetLeft;return n!==0?n:e.element.offsetWidth-t.element.offsetWidth}function rr(e,t){const n=e.element.offsetTop-t.element.offsetTop;return n!==0?n:e.element.offsetHeight-t.element.offsetHeight}function yn(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function xn(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function or({orientation:e,rects:t,targetRect:n}){const r={x:n.x+n.width/2,y:n.y+n.height/2};let i,s=Number.MAX_VALUE;for(const d of t){const{x:o,y:l}=xn(r,d),c=e==="horizontal"?o:l;c<s&&(s=c,i=d)}return j(i,"No rect found"),i}let he;function ar(){return he===void 0&&(typeof matchMedia=="function"?he=!!matchMedia("(pointer:coarse)").matches:he=!1),he}function vn(e){const{element:t,orientation:n,panels:r,separators:i}=e,s=$e(n,Array.from(t.children).filter(yn).map(z=>({element:z}))).map(({element:z})=>z),d=[];let o=!1,l=!1,c=-1,u=-1,b=0,f,w=[];{let z=-1;for(const p of s)p.hasAttribute("data-panel")&&(z++,p.ariaDisabled===null&&(b++,c===-1&&(c=z),u=z))}if(b>1){let z=-1;for(const p of s)if(p.hasAttribute("data-panel")){z++;const m=r.find(h=>h.element===p);if(m){if(f){const h=f.element.getBoundingClientRect(),S=p.getBoundingClientRect();let x;if(l){const y=n==="horizontal"?new DOMRect(h.right,h.top,0,h.height):new DOMRect(h.left,h.bottom,h.width,0),g=n==="horizontal"?new DOMRect(S.left,S.top,0,S.height):new DOMRect(S.left,S.top,S.width,0);switch(w.length){case 0:{x=[y,g];break}case 1:{const k=w[0],T=or({orientation:n,rects:[h,S],targetRect:k.element.getBoundingClientRect()});x=[k,T===h?g:y];break}default:{x=w;break}}}else w.length?x=w:x=[n==="horizontal"?new DOMRect(h.right,S.top,S.left-h.right,S.height):new DOMRect(S.left,h.bottom,S.width,S.top-h.bottom)];for(const y of x){let g="width"in y?y:y.element.getBoundingClientRect();const k=ar()?e.resizeTargetMinimumSize.coarse:e.resizeTargetMinimumSize.fine;if(g.width<k){const E=k-g.width;g=new DOMRect(g.x-E/2,g.y,g.width+E,g.height)}if(g.height<k){const E=k-g.height;g=new DOMRect(g.x,g.y-E/2,g.width,g.height+E)}const T=z<=c||z>u;!o&&!T&&d.push({group:e,groupSize:oe({group:e}),panels:[f,m],separator:"width"in y?void 0:y,rect:g}),o=!1}}l=!1,f=m,w=[]}}else if(p.hasAttribute("data-separator")){p.ariaDisabled!==null&&(o=!0);const m=i.find(h=>h.element===p);m?w.push(m):(f=void 0,w=[])}else l=!0}return d}var G;class Sn{constructor(){tt(this,G,{})}addListener(t,n){const r=se(this,G)[t];return r===void 0?se(this,G)[t]=[n]:r.includes(n)||r.push(n),()=>{this.removeListener(t,n)}}emit(t,n){const r=se(this,G)[t];if(r!==void 0)if(r.length===1)r[0].call(null,n);else{let i=!1,s=null;const d=Array.from(r);for(let o=0;o<d.length;o++){const l=d[o];try{l.call(null,n)}catch(c){s===null&&(i=!0,s=c)}}if(i)throw s}}removeAllListeners(){nt(this,G,{})}removeListener(t,n){const r=se(this,G)[t];if(r!==void 0){const i=r.indexOf(n);i>=0&&r.splice(i,1)}}}G=new WeakMap;let $=new Map;const wn=new Sn;function ir(e){$=new Map($),$.delete(e)}function at(e,t){for(const[n]of $)if(n.id===e)return n}function H(e,t){for(const[n,r]of $)if(n.id===e)return r;if(t)throw Error(`Could not find data for Group with id ${e}`)}function U(){return $}function Ne(e,t){return wn.addListener("groupChange",n=>{n.group.id===e&&t(n)})}function _(e,t){const n=$.get(e);$=new Map($),$.set(e,t),wn.emit("groupChange",{group:e,prev:n,next:t})}function sr(e,t,n){let r,i={x:1/0,y:1/0};for(const s of t){const d=xn(n,s.rect);switch(e){case"horizontal":{d.x<=i.x&&(r=s,i=d);break}case"vertical":{d.y<=i.y&&(r=s,i=d);break}}}return r?{distance:i,hitRegion:r}:void 0}function lr(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function dr(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:lt(e),b:lt(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();j(r,"Stacking order can only be calculated for elements with a common ancestor");const i={a:st(it(n.a)),b:st(it(n.b))};if(i.a===i.b){const s=r.childNodes,d={a:n.a.at(-1),b:n.b.at(-1)};let o=s.length;for(;o--;){const l=s[o];if(l===d.a)return 1;if(l===d.b)return-1}}return Math.sign(i.a-i.b)}const cr=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ur(e){const t=getComputedStyle(Cn(e)??e).display;return t==="flex"||t==="inline-flex"}function pr(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||ur(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||cr.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function it(e){let t=e.length;for(;t--;){const n=e[t];if(j(n,"Missing node"),pr(n))return n}return null}function st(e){return e&&Number(getComputedStyle(e).zIndex)||0}function lt(e){const t=[];for(;e;)t.push(e),e=Cn(e);return t}function Cn(e){const{parentNode:t}=e;return lr(t)?t.host:t}function fr(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function hr({groupElement:e,hitRegion:t,pointerEventTarget:n}){if(!yn(n)||n.contains(e)||e.contains(n))return!0;if(dr(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(fr(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function _e(e,t){const n=[];return t.forEach((r,i)=>{if(i.disabled)return;const s=vn(i),d=sr(i.orientation,s,{x:e.clientX,y:e.clientY});d&&d.distance.x<=0&&d.distance.y<=0&&hr({groupElement:i.element,hitRegion:d.hitRegion.rect,pointerEventTarget:e.target})&&n.push(d.hitRegion)}),n}function mr(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function D(e,t,n=0){return Math.abs(W(e)-W(t))<=n}function B(e,t){return D(e,t)?0:e>t?1:-1}function te({overrideDisabledPanels:e,panelConstraints:t,prevSize:n,size:r}){const{collapsedSize:i=0,collapsible:s,disabled:d,maxSize:o=100,minSize:l=0}=t;if(d&&!e)return n;if(B(r,l)<0)if(s){const c=(i+l)/2;B(r,c)<0?r=i:r=l}else r=l;return r=Math.min(o,r),r=W(r),r}function ce({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:i,trigger:s}){if(D(e,0))return t;const d=s==="imperative-api",o=Object.values(t),l=Object.values(i),c=[...o],[u,b]=r;j(u!=null,"Invalid first pivot index"),j(b!=null,"Invalid second pivot index");let f=0;switch(s){case"keyboard":{{const p=e<0?b:u,m=n[p];j(m,`Panel constraints not found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:x=0}=m;if(S){const y=o[p];if(j(y!=null,`Previous layout not found for panel index ${p}`),D(y,h)){const g=x-y;B(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const p=e<0?u:b,m=n[p];j(m,`No panel constraints found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:x=0}=m;if(S){const y=o[p];if(j(y!=null,`Previous layout not found for panel index ${p}`),D(y,x)){const g=y-h;B(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}break}default:{const p=e<0?b:u,m=n[p];j(m,`Panel constraints not found for index ${p}`);const h=o[p],{collapsible:S,collapsedSize:x,minSize:y}=m;if(S&&B(h,y)<0)if(e>0){const g=y-x,k=g/2,T=h+e;B(T,y)<0&&(e=B(e,k)<=0?0:g)}else{const g=y-x,k=100-g/2,T=h-e;B(T,y)<0&&(e=B(100+e,k)>0?0:-g)}break}}{const p=e<0?1:-1;let m=e<0?b:u,h=0;for(;;){const x=o[m];j(x!=null,`Previous layout not found for panel index ${m}`);const y=te({overrideDisabledPanels:d,panelConstraints:n[m],prevSize:x,size:100})-x;if(h+=y,m+=p,m<0||m>=n.length)break}const S=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-S:S}{let p=e<0?u:b;for(;p>=0&&p<n.length;){const m=Math.abs(e)-Math.abs(f),h=o[p];j(h!=null,`Previous layout not found for panel index ${p}`);const S=h-m,x=te({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:h,size:S});if(!D(h,x)&&(f+=h-x,c[p]=x,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?p--:p++}}if(mr(l,c))return i;{const p=e<0?b:u,m=o[p];j(m!=null,`Previous layout not found for panel index ${p}`);const h=m+f,S=te({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:m,size:h});if(c[p]=S,!D(S,h)){let x=h-S,y=e<0?b:u;for(;y>=0&&y<n.length;){const g=c[y];j(g!=null,`Previous layout not found for panel index ${y}`);const k=g+x,T=te({overrideDisabledPanels:d,panelConstraints:n[y],prevSize:g,size:k});if(D(g,T)||(x-=T-g,c[y]=T),D(x,0))break;e>0?y--:y++}}}const w=Object.values(c).reduce((p,m)=>m+p,0);if(!D(w,100,.1))return i;const z=Object.keys(i);return c.reduce((p,m,h)=>(p[z[h]]=m,p),{})}function Y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(t[n]===void 0||B(e[n],t[n])!==0)return!1;return!0}function J({layout:e,panelConstraints:t}){const n=Object.values(e),r=[...n],i=r.reduce((o,l)=>o+l,0);if(r.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${r.map(o=>`${o}%`).join(", ")}`);if(!D(i,100)&&r.length>0)for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=100/i*l;r[o]=c}let s=0;for(let o=0;o<t.length;o++){const l=n[o];j(l!=null,`No layout data found for index ${o}`);const c=r[o];j(c!=null,`No layout data found for index ${o}`);const u=te({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});c!=u&&(s+=c-u,r[o]=u)}if(!D(s,0))for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=l+s,u=te({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});if(l!==u&&(s-=u-l,r[o]=u,D(s,0)))break}const d=Object.keys(e);return r.reduce((o,l,c)=>(o[d[c]]=l,o),{})}function In({groupId:e,panelId:t}){const n=()=>{const o=U();for(const[l,{defaultLayoutDeferred:c,derivedPanelConstraints:u,layout:b,groupSize:f,separatorToPanels:w}]of o)if(l.id===e)return{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:l,groupSize:f,layout:b,separatorToPanels:w};throw Error(`Group ${e} not found`)},r=()=>{const o=n().derivedPanelConstraints.find(l=>l.panelId===t);if(o!==void 0)return o;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{const o=n().group.panels.find(l=>l.id===t);if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},s=()=>{const o=n().layout[t];if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},d=o=>{const l=s();if(o===l)return;const{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:b,groupSize:f,layout:w,separatorToPanels:z}=n(),p=b.panels.findIndex(x=>x.id===t),m=p===b.panels.length-1,h=ce({delta:m?l-o:o-l,initialLayout:w,panelConstraints:u,pivotIndices:m?[p-1,p]:[p,p+1],prevLayout:w,trigger:"imperative-api"}),S=J({layout:h,panelConstraints:u});Y(w,S)||_(b,{defaultLayoutDeferred:c,derivedPanelConstraints:u,groupSize:f,layout:S,separatorToPanels:z})};return{collapse:()=>{const{collapsible:o,collapsedSize:l}=r(),{mutableValues:c}=i(),u=s();o&&u!==l&&(c.expandToSize=u,d(l))},expand:()=>{const{collapsible:o,collapsedSize:l,minSize:c}=r(),{mutableValues:u}=i(),b=s();if(o&&b===l){let f=u.expandToSize??c;f===0&&(f=1),d(f)}},getSize:()=>{const{group:o}=n(),l=s(),{element:c}=i(),u=o.orientation==="horizontal"?c.offsetWidth:c.offsetHeight;return{asPercentage:l,inPixels:u}},isCollapsed:()=>{const{collapsible:o,collapsedSize:l}=r(),c=s();return o&&D(l,c)},resize:o=>{if(s()!==o){let l;switch(typeof o){case"number":{const{group:c}=n(),u=oe({group:c});l=W(o/u*100);break}case"string":{l=parseFloat(o);break}}d(l)}}}}function dt(e){if(e.defaultPrevented)return;const t=U();_e(e,t).forEach(n=>{if(n.separator){const r=n.panels.find(i=>i.panelConstraints.defaultSize!==void 0);if(r){const i=r.panelConstraints.defaultSize,s=In({groupId:n.group.id,panelId:r.id});s&&i!==void 0&&(s.resize(i),e.preventDefault())}}})}function Ee(e){const t=U();for(const[n]of t)if(n.separators.some(r=>r.element===e))return n;throw Error("Could not find parent Group for separator element")}function jn({groupId:e}){const t=()=>{const n=U();for(const[r,i]of n)if(r.id===e)return{group:r,...i};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){const{defaultLayoutDeferred:n,layout:r}=t();return n?{}:r},setLayout(n){const{defaultLayoutDeferred:r,derivedPanelConstraints:i,group:s,groupSize:d,layout:o,separatorToPanels:l}=t(),c=J({layout:n,panelConstraints:i});return r?o:(Y(o,c)||_(s,{defaultLayoutDeferred:r,derivedPanelConstraints:i,groupSize:d,layout:c,separatorToPanels:l}),c)}}}function X(e,t){const n=Ee(e),r=H(n.id,!0),i=n.separators.find(u=>u.element===e);j(i,"Matching separator not found");const s=r.separatorToPanels.get(i);j(s,"Matching panels not found");const d=s.map(u=>n.panels.indexOf(u)),o=jn({groupId:n.id}).getLayout(),l=ce({delta:t,initialLayout:o,panelConstraints:r.derivedPanelConstraints,pivotIndices:d,prevLayout:o,trigger:"keyboard"}),c=J({layout:l,panelConstraints:r.derivedPanelConstraints});Y(o,c)||_(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedPanelConstraints:r.derivedPanelConstraints,groupSize:r.groupSize,layout:c,separatorToPanels:r.separatorToPanels})}function ct(e){if(e.defaultPrevented)return;const t=e.currentTarget,n=Ee(t);if(!n.disabled)switch(e.key){case"ArrowDown":{e.preventDefault(),n.orientation==="vertical"&&X(t,5);break}case"ArrowLeft":{e.preventDefault(),n.orientation==="horizontal"&&X(t,-5);break}case"ArrowRight":{e.preventDefault(),n.orientation==="horizontal"&&X(t,5);break}case"ArrowUp":{e.preventDefault(),n.orientation==="vertical"&&X(t,-5);break}case"End":{e.preventDefault(),X(t,100);break}case"Enter":{e.preventDefault();const r=Ee(t),i=H(r.id,!0),{derivedPanelConstraints:s,layout:d,separatorToPanels:o}=i,l=r.separators.find(f=>f.element===t);j(l,"Matching separator not found");const c=o.get(l);j(c,"Matching panels not found");const u=c[0],b=s.find(f=>f.panelId===u.id);if(j(b,"Panel metadata not found"),b.collapsible){const f=d[u.id],w=b.collapsedSize===f?r.mutableState.expandedPanelSizes[u.id]??b.minSize:b.collapsedSize;X(t,w-f)}break}case"F6":{e.preventDefault();const r=Ee(t).separators.map(d=>d.element),i=Array.from(r).findIndex(d=>d===e.currentTarget);j(i!==null,"Index not found");const s=e.shiftKey?i>0?i-1:r.length-1:i+1<r.length?i+1:0;r[s].focus();break}case"Home":{e.preventDefault(),X(t,-100);break}}}let ne={cursorFlags:0,state:"inactive"};const Ve=new Sn;function q(){return ne}function gr(e){return Ve.addListener("change",e)}function br(e){const t=ne,n={...ne};n.cursorFlags=e,ne=n,Ve.emit("change",{prev:t,next:n})}function re(e){const t=ne;ne=e,Ve.emit("change",{prev:t,next:e})}function ut(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=U(),n=_e(e,t),r=new Map;let i=!1;n.forEach(s=>{s.separator&&(i||(i=!0,s.separator.element.focus()));const d=t.get(s.group);d&&r.set(s.group,d.layout)}),re({cursorFlags:0,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},state:"active"}),n.length&&e.preventDefault()}const zr=e=>e,De=()=>{},Ln=1,Tn=2,Pn=4,kn=8,pt=3,ft=12;let me;function ht(){return me===void 0&&(me=!1,typeof window<"u"&&(window.navigator.userAgent.includes("Chrome")||window.navigator.userAgent.includes("Firefox"))&&(me=!0)),me}function Rr({cursorFlags:e,groups:t,state:n}){let r=0,i=0;switch(n){case"active":case"hover":t.forEach(s=>{if(!s.mutableState.disableCursor)switch(s.orientation){case"horizontal":{r++;break}case"vertical":{i++;break}}})}if(!(r===0&&i===0)){switch(n){case"active":{if(e&&ht()){const s=(e&Ln)!==0,d=(e&Tn)!==0,o=(e&Pn)!==0,l=(e&kn)!==0;if(s)return o?"se-resize":l?"ne-resize":"e-resize";if(d)return o?"sw-resize":l?"nw-resize":"w-resize";if(o)return"s-resize";if(l)return"n-resize"}break}}return ht()?r>0&&i>0?"move":r>0?"ew-resize":"ns-resize":r>0&&i>0?"grab":r>0?"col-resize":"row-resize"}}const mt=new WeakMap;function Ge(e){if(e.defaultView===null||e.defaultView===void 0)return;let{prevStyle:t,styleSheet:n}=mt.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&e.adoptedStyleSheets.push(n));const r=q();switch(r.state){case"active":case"hover":{const i=Rr({cursorFlags:r.cursorFlags,groups:r.hitRegions.map(d=>d.group),state:r.state}),s=`*, *:hover {cursor: ${i} !important; }`;if(t===s)return;t=s,i?n.cssRules.length===0?n.insertRule(s):n.replaceSync(s):n.cssRules.length===1&&n.deleteRule(0);break}case"inactive":{t=void 0,n.cssRules.length===1&&n.deleteRule(0);break}}mt.set(e,{prevStyle:t,styleSheet:n})}function On({document:e,event:t,hitRegions:n,initialLayoutMap:r,mountedGroups:i,pointerDownAtPoint:s,prevCursorFlags:d}){let o=0;n.forEach(c=>{const{group:u,groupSize:b}=c,{orientation:f,panels:w}=u,{disableCursor:z}=u.mutableState;let p=0;s?f==="horizontal"?p=(t.clientX-s.x)/b*100:p=(t.clientY-s.y)/b*100:f==="horizontal"?p=t.clientX<0?-100:100:p=t.clientY<0?-100:100;const m=r.get(u),h=i.get(u);if(!m||!h)return;const{defaultLayoutDeferred:S,derivedPanelConstraints:x,groupSize:y,layout:g,separatorToPanels:k}=h;if(x&&g&&k){const T=ce({delta:p,initialLayout:m,panelConstraints:x,pivotIndices:c.panels.map(E=>w.indexOf(E)),prevLayout:g,trigger:"mouse-or-touch"});if(Y(T,g)){if(p!==0&&!z)switch(f){case"horizontal":{o|=p<0?Ln:Tn;break}case"vertical":{o|=p<0?Pn:kn;break}}}else _(c.group,{defaultLayoutDeferred:S,derivedPanelConstraints:x,groupSize:y,layout:T,separatorToPanels:k})}});let l=0;t.movementX===0?l|=d&pt:l|=o&pt,t.movementY===0?l|=d&ft:l|=o&ft,br(l),Ge(e)}function gt(e){const t=U(),n=q();switch(n.state){case"active":On({document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:t,prevCursorFlags:n.cursorFlags})}}function bt(e){if(e.defaultPrevented)return;const t=q(),n=U();switch(t.state){case"active":{if(e.buttons===0){re({cursorFlags:0,state:"inactive"}),t.hitRegions.forEach(r=>{const i=H(r.group.id,!0);_(r.group,i)});return}On({document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedGroups:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break}default:{const r=_e(e,n);r.length===0?t.state!=="inactive"&&re({cursorFlags:0,state:"inactive"}):re({cursorFlags:0,hitRegions:r,state:"hover"}),Ge(e.currentTarget);break}}}function zt(e){if(e.relatedTarget instanceof HTMLIFrameElement)switch(q().state){case"hover":re({cursorFlags:0,state:"inactive"})}}function Rt(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=q();switch(t.state){case"active":re({cursorFlags:0,state:"inactive"}),t.hitRegions.length>0&&(Ge(e.currentTarget),t.hitRegions.forEach(n=>{const r=H(n.group.id,!0);_(n.group,r)}),e.preventDefault())}}function yt(e){let t=0,n=0;const r={};for(const s of e)if(s.defaultSize!==void 0){t++;const d=W(s.defaultSize);n+=d,r[s.panelId]=d}else r[s.panelId]=void 0;const i=e.length-t;if(i!==0){const s=W((100-n)/i);for(const d of e)d.defaultSize===void 0&&(r[d.panelId]=s)}return r}function yr(e,t,n){if(!n[0])return;const r=e.panels.find(l=>l.element===t);if(!r||!r.onResize)return;const i=oe({group:e}),s=e.orientation==="horizontal"?r.element.offsetWidth:r.element.offsetHeight,d=r.mutableValues.prevSize,o={asPercentage:W(s/i*100),inPixels:s};r.mutableValues.prevSize=o,r.onResize(o,r.id,d)}function xr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function vr({group:e,nextGroupSize:t,prevGroupSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,s=0,d=!1;const o=new Map,l=[];for(const b of e.panels){const f=r[b.id]??0;switch(b.panelConstraints.groupResizeBehavior){case"preserve-pixel-size":{d=!0;const w=f/100*n,z=W(w/t*100);o.set(b.id,z),i+=z;break}case"preserve-relative-size":default:{l.push(b.id),s+=f;break}}}if(!d||l.length===0)return r;const c=100-i,u={...r};if(o.forEach((b,f)=>{u[f]=b}),s>0)for(const b of l){const f=r[b]??0;u[b]=W(f/s*c)}else{const b=W(c/l.length);for(const f of l)u[f]=b}return u}function Sr(e,t){const n=e.map(i=>i.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n)if(!r.includes(i))return!1;return!0}const Z=new Map;function wr(e){let t=!0;j(e.element.ownerDocument.defaultView,"Cannot register an unmounted Group");const n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,s=new n(z=>{for(const p of z){const{borderBoxSize:m,target:h}=p;if(h===e.element){if(t){const S=oe({group:e});if(S===0)return;const x=H(e.id);if(!x)return;const y=Be(e),g=x.defaultLayoutDeferred?yt(y):x.layout,k=vr({group:e,nextGroupSize:S,prevGroupSize:x.groupSize,prevLayout:g}),T=J({layout:k,panelConstraints:y});if(!x.defaultLayoutDeferred&&Y(x.layout,T)&&xr(x.derivedPanelConstraints,y)&&x.groupSize===S)return;_(e,{defaultLayoutDeferred:!1,derivedPanelConstraints:y,groupSize:S,layout:T,separatorToPanels:x.separatorToPanels})}}else yr(e,h,m)}});s.observe(e.element),e.panels.forEach(z=>{j(!r.has(z.id),`Panel ids must be unique; id "${z.id}" was used more than once`),r.add(z.id),z.onResize&&s.observe(z.element)});const d=oe({group:e}),o=Be(e),l=e.panels.map(({id:z})=>z).join(",");let c=e.mutableState.defaultLayout;c&&(Sr(e.panels,c)||(c=void 0));const u=e.mutableState.layouts[l]??c??yt(o),b=J({layout:u,panelConstraints:o}),f=e.element.ownerDocument;Z.set(f,(Z.get(f)??0)+1);const w=new Map;return vn(e).forEach(z=>{z.separator&&w.set(z.separator,z.panels)}),_(e,{defaultLayoutDeferred:d===0,derivedPanelConstraints:o,groupSize:d,layout:b,separatorToPanels:w}),e.separators.forEach(z=>{j(!i.has(z.id),`Separator ids must be unique; id "${z.id}" was used more than once`),i.add(z.id),z.element.addEventListener("keydown",ct)}),Z.get(f)===1&&(f.addEventListener("dblclick",dt,!0),f.addEventListener("pointerdown",ut,!0),f.addEventListener("pointerleave",gt),f.addEventListener("pointermove",bt),f.addEventListener("pointerout",zt),f.addEventListener("pointerup",Rt,!0)),function(){t=!1,Z.set(f,Math.max(0,(Z.get(f)??0)-1)),ir(e),e.separators.forEach(z=>{z.element.removeEventListener("keydown",ct)}),Z.get(f)||(f.removeEventListener("dblclick",dt,!0),f.removeEventListener("pointerdown",ut,!0),f.removeEventListener("pointerleave",gt),f.removeEventListener("pointermove",bt),f.removeEventListener("pointerout",zt),f.removeEventListener("pointerup",Rt,!0)),s.disconnect()}}function Cr(){const[e,t]=v.useState({}),n=v.useCallback(()=>t({}),[]);return[e,n]}function He(e){const t=v.useId();return`${e??t}`}const K=typeof window<"u"?v.useLayoutEffect:v.useEffect;function le(e){const t=v.useRef(e);return K(()=>{t.current=e},[e]),v.useCallback((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[t])}function Xe(...e){return le(t=>{e.forEach(n=>{if(n)switch(typeof n){case"function":{n(t);break}case"object":{n.current=t;break}}})})}function Ye(e){const t=v.useRef({...e});return K(()=>{for(const n in e)t.current[n]=e[n]},[e]),t.current}const En=v.createContext(null);function Ir(e,t){const n=v.useRef({getLayout:()=>({}),setLayout:zr});v.useImperativeHandle(t,()=>n.current,[]),K(()=>{Object.assign(n.current,jn({groupId:e}))})}function Mn({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:s,groupRef:d,id:o,onLayoutChange:l,onLayoutChanged:c,orientation:u="horizontal",resizeTargetMinimumSize:b={coarse:20,fine:10},style:f,...w}){const z=v.useRef({onLayoutChange:{},onLayoutChanged:{}}),p=le(C=>{Y(z.current.onLayoutChange,C)||(z.current.onLayoutChange=C,l==null||l(C))}),m=le(C=>{Y(z.current.onLayoutChanged,C)||(z.current.onLayoutChanged=C,c==null||c(C))}),h=He(o),S=v.useRef(null),[x,y]=Cr(),g=v.useRef({lastExpandedPanelSizes:{},layouts:{},panels:[],resizeTargetMinimumSize:b,separators:[]}),k=Xe(S,s);Ir(h,d);const T=le((C,I)=>{const O=q(),M=at(C),F=H(C);if(F){let A=!1;switch(O.state){case"active":{A=O.hitRegions.some(ae=>ae.group===M);break}}return{flexGrow:F.layout[I]??1,pointerEvents:A?"none":void 0}}return{flexGrow:(n==null?void 0:n[I])??1}}),E=Ye({defaultLayout:n,disableCursor:r}),Q=v.useMemo(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:h,orientation:u,registerPanel:C=>{const I=g.current;return I.panels=$e(u,[...I.panels,C]),y(),()=>{I.panels=I.panels.filter(O=>O!==C),y()}},registerSeparator:C=>{const I=g.current;return I.separators=$e(u,[...I.separators,C]),y(),()=>{I.separators=I.separators.filter(O=>O!==C),y()}},togglePanelDisabled:(C,I)=>{const O=g.current.panels.find(A=>A.id===C);O&&(O.panelConstraints.disabled=I);const M=at(h),F=H(h);M&&F&&_(M,{...F,derivedPanelConstraints:Be(M)})},toggleSeparatorDisabled:(C,I)=>{const O=g.current.separators.find(M=>M.id===C);O&&(O.disabled=I)}}),[T,h,y,u,E]),V=v.useRef(null);return K(()=>{const C=S.current;if(C===null)return;const I=g.current;let O;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===I.panels.length){O={};for(const ie of I.panels){const ue=E.defaultLayout[ie.id];ue!==void 0&&(O[ie.id]=ue)}}const M={disabled:!!i,element:C,id:h,mutableState:{defaultLayout:O,disableCursor:!!E.disableCursor,expandedPanelSizes:g.current.lastExpandedPanelSizes,layouts:g.current.layouts},orientation:u,panels:I.panels,resizeTargetMinimumSize:I.resizeTargetMinimumSize,separators:I.separators};V.current=M;const F=wr(M),{defaultLayoutDeferred:A,derivedPanelConstraints:ae,layout:Ke}=H(M.id,!0);!A&&ae.length>0&&(p(Ke),m(Ke));const Fn=Ne(h,ie=>{const{defaultLayoutDeferred:ue,derivedPanelConstraints:Qe,layout:pe}=ie.next;if(ue||Qe.length===0)return;const Bn=M.panels.map(({id:N})=>N).join(",");M.mutableState.layouts[Bn]=pe,Qe.forEach(N=>{if(N.collapsible){const{layout:Me}=ie.prev??{};if(Me){const An=D(N.collapsedSize,pe[N.panelId]),Nn=D(N.collapsedSize,Me[N.panelId]);An&&!Nn&&(M.mutableState.expandedPanelSizes[N.panelId]=Me[N.panelId])}}});const $n=q().state!=="active";p(pe),$n&&m(pe)});return()=>{V.current=null,F(),Fn()}},[i,h,m,p,u,x,E]),v.useEffect(()=>{const C=V.current;C&&(C.mutableState.defaultLayout=n,C.mutableState.disableCursor=!!r)}),a.jsx(En.Provider,{value:Q,children:a.jsx("div",{...w,className:t,"data-group":!0,"data-testid":h,id:h,ref:k,style:{height:"100%",width:"100%",overflow:"hidden",...f,display:"flex",flexDirection:u==="horizontal"?"row":"column",flexWrap:"nowrap",touchAction:u==="horizontal"?"pan-y":"pan-x"},children:e})})}Mn.displayName="Group";function We(e,t){return`react-resizable-panels:${[e,...t].join(":")}`}function Je({debounceSaveMs:e=100,panelIds:t,storage:n=localStorage,...r}){const i=t!==void 0,s="id"in r?r.id:r.groupId,d=We(s,t??[]),o=v.useSyncExternalStore(jr,()=>n.getItem(d),()=>n.getItem(d)),l=v.useMemo(()=>o?JSON.parse(o):void 0,[o]),c=v.useRef(null),u=v.useCallback(()=>{const w=c.current;w&&(c.current=null,clearTimeout(w))},[]);v.useLayoutEffect(()=>()=>{u()},[u]);const b=v.useCallback(w=>{u();let z;i?z=We(s,Object.keys(w)):z=We(s,[]);try{n.setItem(z,JSON.stringify(w))}catch(p){console.error(p)}},[u,i,s,n]),f=v.useCallback(w=>{u(),e===0?b(w):c.current=setTimeout(()=>{b(w)},e)},[u,e,b]);return{defaultLayout:l,onLayoutChange:f,onLayoutChanged:b}}function jr(){return function(){}}function Lr(){return v.useRef(null)}function qe(){const e=v.useContext(En);return j(e,"Group Context not found; did you render a Panel or Separator outside of a Group?"),e}function Tr(e,t){const{id:n}=qe(),r=v.useRef({collapse:De,expand:De,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:De});v.useImperativeHandle(t,()=>r.current,[]),K(()=>{Object.assign(r.current,In({groupId:n,panelId:e}))})}function Dn({children:e,className:t,collapsedSize:n="0%",collapsible:r=!1,defaultSize:i,disabled:s,elementRef:d,groupResizeBehavior:o="preserve-relative-size",id:l,maxSize:c="100%",minSize:u="0%",onResize:b,panelRef:f,style:w,...z}){const p=!!l,m=He(l),h=Ye({disabled:s}),S=v.useRef(null),x=Xe(S,d),{getPanelStyles:y,id:g,orientation:k,registerPanel:T,togglePanelDisabled:E}=qe(),Q=b!==null,V=le((I,O,M)=>{b==null||b(I,l,M)});K(()=>{const I=S.current;if(I!==null){const O={element:I,id:m,idIsStable:p,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:Q?V:void 0,panelConstraints:{groupResizeBehavior:o,collapsedSize:n,collapsible:r,defaultSize:i,disabled:h.disabled,maxSize:c,minSize:u}};return T(O)}},[o,n,r,i,Q,m,p,c,u,V,T,h]),v.useEffect(()=>{E(m,!!s)},[s,m,E]),Tr(m,f);const C=v.useSyncExternalStore(I=>Ne(g,I),()=>JSON.stringify(y(g,m)),()=>JSON.stringify(y(g,m)));return a.jsx("div",{...z,"aria-disabled":s||void 0,"data-panel":!0,"data-testid":m,id:m,ref:x,style:{...Pr,display:"flex",flexBasis:0,flexShrink:1,overflow:"hidden",...JSON.parse(C)},children:a.jsx("div",{className:t,style:{maxHeight:"100%",maxWidth:"100%",flexGrow:1,...w,touchAction:k==="horizontal"?"pan-y":"pan-x"},children:e})})}Dn.displayName="Panel";const Pr={minHeight:0,maxHeight:"100%",height:"auto",minWidth:0,maxWidth:"100%",width:"auto",border:"none",borderWidth:0,padding:0,margin:0};function kr(){return v.useRef(null)}function Or({layout:e,panelConstraints:t,panelId:n,panelIndex:r}){let i,s;const d=e[n],o=t.find(l=>l.panelId===n);if(o){const l=o.maxSize,c=o.collapsible?o.collapsedSize:o.minSize,u=[r,r+1];s=J({layout:ce({delta:c-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n],i=J({layout:ce({delta:l-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:s,valueNow:d}}function Wn({children:e,className:t,disabled:n,elementRef:r,id:i,style:s,...d}){const o=He(i),l=Ye({disabled:n}),[c,u]=v.useState({}),[b,f]=v.useState("inactive"),w=v.useRef(null),z=Xe(w,r),{disableCursor:p,id:m,orientation:h,registerSeparator:S,toggleSeparatorDisabled:x}=qe(),y=h==="horizontal"?"vertical":"horizontal";K(()=>{const k=w.current;if(k!==null){const T={disabled:l.disabled,element:k,id:o},E=S(T),Q=gr(C=>{f(C.next.state!=="inactive"&&C.next.hitRegions.some(I=>I.separator===T)?C.next.state:"inactive")}),V=Ne(m,C=>{const{derivedPanelConstraints:I,layout:O,separatorToPanels:M}=C.next,F=M.get(T);if(F){const A=F[0],ae=F.indexOf(A);u(Or({layout:O,panelConstraints:I,panelId:A.id,panelIndex:ae}))}});return()=>{Q(),V(),E()}}},[m,o,S,l]),v.useEffect(()=>{x(o,!!n)},[n,o,x]);let g;return n&&!p&&(g="not-allowed"),a.jsx("div",{...d,"aria-controls":c.valueControls,"aria-disabled":n||void 0,"aria-orientation":y,"aria-valuemax":c.valueMax,"aria-valuemin":c.valueMin,"aria-valuenow":c.valueNow,children:e,className:t,"data-separator":n?"disabled":b,"data-testid":o,id:o,ref:z,role:"separator",style:{flexBasis:"auto",cursor:g,...s,flexGrow:0,flexShrink:0,touchAction:"none"},tabIndex:n?void 0:0})}Wn.displayName="Separator";const[Er,Mr]=Vn({name:"ResizableContext"}),Dr=({controlRef:e,disabled:t,orientation:n="horizontal",...r}={})=>{const i=Lr(),s=v.useCallback((d={})=>({disabled:t,orientation:n,...r,...d,style:{height:void 0,width:void 0,...r.style,...d.style},elementRef:de(d.elementRef,r.ref),groupRef:de(d.groupRef,i,e),onLayoutChange:Fe(d.onLayoutChange,r.onLayoutChange),onLayoutChanged:Fe(d.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r]);return{disabled:t,groupRef:i,orientation:n,getRootProps:s}},Wr=({controlRef:e,...t})=>{const n=kr(),r=v.useCallback((i={})=>({...t,...i,elementRef:de(i.elementRef,t.ref),panelRef:de(i.panelRef,n,e),onResize:Fe(i.onResize,t.onResize)}),[n,e,t]);return{panelRef:n,getItemProps:r}},Fr=({disabled:e,...t})=>{const{disabled:n,groupRef:r,orientation:i}=Mr(),s=e||n,d=v.useCallback(c=>{var z,p;c.preventDefault();const u=(z=r.current)==null?void 0:z.getLayout();if(!u)return;const f=100/Object.keys(u).length,w=Object.fromEntries(Object.keys(u).map(m=>[m,f]));(p=r.current)==null||p.setLayout(w)},[r]),o=v.useCallback((c={})=>({"aria-disabled":Xn(s),"aria-orientation":i,"data-disabled":Hn(s),disabled:s,tabIndex:s?-1:0,...t,...c,elementRef:de(c.elementRef,t.ref),onDoubleClick:Gn(c.onDoubleClick,t.onDoubleClick,d)}),[i,s,t,d]);return{getIconProps:v.useCallback((c={})=>({"data-icon":"",...c}),[]),getTriggerProps:o}},{withContext:Ue,withProvider:Br}=Yn("resizable",Un),P=Br(({children:e,orientation:t,...n})=>{const r=qn(t),{disabled:i,groupRef:s,orientation:d,getRootProps:o}=Dr({orientation:r,...n}),l=v.useMemo(()=>({disabled:i,groupRef:s,orientation:d}),[i,d,s]);return a.jsx(Er,{value:l,children:a.jsx(Ae.div,{as:Mn,...o(),children:e})})},"root",{transferProps:["orientation"]})(),R=Ue(e=>{const{getItemProps:t}=Wr(e);return a.jsx(Ae.div,{as:Dn,...t()})},"item")(),L=Ue(({children:e,icon:t,iconProps:n,...r})=>{const{getIconProps:i,getTriggerProps:s}=Fr(r);return a.jsxs(Ae.div,{as:Wn,...s(),children:[t?a.jsx($r,{...i(n),children:t}):null,e]})},"trigger")(),$r=Ue("div","icon")(),ro={component:P,title:"Components / Resizable"},ge=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),be=()=>a.jsx(Jn,{variant:"stack",rows:["border","spacer","plain"],children:(e,t,n)=>a.jsxs(P,{variant:t,borderWidth:t==="border"?"1px":void 0,h:"md",rounded:t==="border"?"l2":void 0,children:[a.jsx(R,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"Two"})]},n)}),ze=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{colorScheme:"primary",variant:"spacer",h:"md",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]}),a.jsxs(P,{colorScheme:"red",variant:"spacer",h:"md",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),Re=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]}),ye=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{defaultSize:"30%",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),xe=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",maxSize:"70%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),ve=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]}),Se=()=>{const e=v.useRef(null),t=v.useRef(null),n=v.useRef(null);return a.jsxs(P,{ref:e,borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{ref:t,display:"center",children:"One"}),a.jsx(L,{ref:n}),a.jsx(R,{display:"center",children:"Two"})]})},we=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{icon:a.jsx(ot,{})}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{variant:"spacer",h:"md",orientation:"vertical",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{icon:a.jsx(ot,{})}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),Ce=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"Left"}),a.jsx(L,{}),a.jsx(R,{children:a.jsxs(P,{orientation:"vertical",children:[a.jsx(R,{display:"center",children:"Top"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Bottom"})]})})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{display:"center",children:"Top"}),a.jsx(L,{}),a.jsx(R,{children:a.jsxs(P,{children:[a.jsx(R,{display:"center",children:"Left"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Right"})]})})]})]}),Ie=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",disabled:!0,h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Three"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{disabled:!0}),a.jsx(R,{display:"center",children:"Two"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Three"})]})]}),je=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",onLayoutChange:e=>{console.log("layout change",e)},onLayoutChanged:e=>{console.log("layout changed",e)},children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]}),Le=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",onResize:(e,t,n)=>{console.log("resize",e,t,n)},children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),Te=()=>{const{defaultLayout:e,onLayoutChanged:t}=Je({id:"persistence",storage:localStorage});return a.jsxs(P,{borderWidth:"1px",defaultLayout:e,h:"md",rounded:"l2",onLayoutChanged:t,children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]})},Pe=()=>{const[e,t]=rt({key:"showLeft",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),[n,r]=rt({key:"showRight",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),i=v.useCallback(()=>{const o=[];return e&&o.push("left"),o.push("middle"),n&&o.push("right"),o},[e,n]),{defaultLayout:s,onLayoutChanged:d}=Je({id:"conditional",panelIds:i(),storage:localStorage});return a.jsxs(a.Fragment,{children:[a.jsxs(Rn,{gap:"md",children:[a.jsxs(ee,{onClick:()=>t(!e),children:[e?"Hidden":"Show"," Left"]}),a.jsxs(ee,{onClick:()=>r(!n),children:[n?"Hidden":"Show"," Right"]})]}),a.jsxs(P,{borderWidth:"1px",defaultLayout:s,h:"md",rounded:"l2",onLayoutChanged:d,children:[e?a.jsxs(a.Fragment,{children:[a.jsx(R,{id:"left",display:"center",minSize:"10%",children:"Left"}),a.jsx(L,{})]}):null,a.jsx(R,{id:"middle",display:"center",minSize:"10%",children:"Middle"}),n?a.jsxs(a.Fragment,{children:[a.jsx(L,{}),a.jsx(R,{id:"right",display:"center",minSize:"10%",children:"Right"})]}):null]})]})},ke=()=>{const e=v.useMemo(()=>({getItem:r=>{const i=document.cookie.match(new RegExp(`(^| )${r}=([^;]+)`));return i?i[2]??null:null},setItem:(r,i)=>{document.cookie=`${r}=${i}; max-age=31536000; path=/`}}),[]),{defaultLayout:t,onLayoutChanged:n}=Je({id:"persistence",storage:e});return a.jsxs(P,{borderWidth:"1px",defaultLayout:t,h:"md",rounded:"l2",onLayoutChanged:n,children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]})},Oe=()=>{const e=v.useRef(null);return a.jsxs(a.Fragment,{children:[a.jsxs(Rn,{gap:"md",children:[a.jsx(ee,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.collapse()},children:'Collapse "one"'}),a.jsx(ee,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.expand()},children:'Expand "one"'}),a.jsx(ee,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.resize("30%")},children:'Resize "one" to 30'}),a.jsx(ee,{onClick:()=>{var t;return(t=e.current)==null?void 0:t.resize("50%")},children:'Resize "one" to 50'})]}),a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,controlRef:e,display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]})};var xt,vt,St;ge.parameters={...ge.parameters,docs:{...(xt=ge.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(St=(vt=ge.parameters)==null?void 0:vt.docs)==null?void 0:St.source}}};var wt,Ct,It;be.parameters={...be.parameters,docs:{...(wt=be.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
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
}`,...(It=(Ct=be.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};var jt,Lt,Tt;ze.parameters={...ze.parameters,docs:{...(jt=ze.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
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
}`,...(Tt=(Lt=ze.parameters)==null?void 0:Lt.docs)==null?void 0:Tt.source}}};var Pt,kt,Ot;Re.parameters={...Re.parameters,docs:{...(Pt=Re.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
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
}`,...(Ot=(kt=Re.parameters)==null?void 0:kt.docs)==null?void 0:Ot.source}}};var Et,Mt,Dt;ye.parameters={...ye.parameters,docs:{...(Et=ye.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(Dt=(Mt=ye.parameters)==null?void 0:Mt.docs)==null?void 0:Dt.source}}};var Wt,Ft,Bt;xe.parameters={...xe.parameters,docs:{...(Wt=xe.parameters)==null?void 0:Wt.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(Bt=(Ft=xe.parameters)==null?void 0:Ft.docs)==null?void 0:Bt.source}}};var $t,At,Nt;ve.parameters={...ve.parameters,docs:{...($t=ve.parameters)==null?void 0:$t.docs,source:{originalSource:`() => {
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
}`,...(Nt=(At=ve.parameters)==null?void 0:At.docs)==null?void 0:Nt.source}}};var _t,Vt,Gt;Se.parameters={...Se.parameters,docs:{...(_t=Se.parameters)==null?void 0:_t.docs,source:{originalSource:`() => {
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
}`,...(Gt=(Vt=Se.parameters)==null?void 0:Vt.docs)==null?void 0:Gt.source}}};var Ht,Xt,Yt;we.parameters={...we.parameters,docs:{...(Ht=we.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => {
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
}`,...(Yt=(Xt=we.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Jt,qt,Ut;Ce.parameters={...Ce.parameters,docs:{...(Jt=Ce.parameters)==null?void 0:Jt.docs,source:{originalSource:`() => {
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
}`,...(Ut=(qt=Ce.parameters)==null?void 0:qt.docs)==null?void 0:Ut.source}}};var Kt,Qt,Zt;Ie.parameters={...Ie.parameters,docs:{...(Kt=Ie.parameters)==null?void 0:Kt.docs,source:{originalSource:`() => {
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
}`,...(Zt=(Qt=Ie.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var en,tn,nn;je.parameters={...je.parameters,docs:{...(en=je.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(nn=(tn=je.parameters)==null?void 0:tn.docs)==null?void 0:nn.source}}};var rn,on,an;Le.parameters={...Le.parameters,docs:{...(rn=Le.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...(an=(on=Le.parameters)==null?void 0:on.docs)==null?void 0:an.source}}};var sn,ln,dn;Te.parameters={...Te.parameters,docs:{...(sn=Te.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(dn=(ln=Te.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var cn,un,pn;Pe.parameters={...Pe.parameters,docs:{...(cn=Pe.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(pn=(un=Pe.parameters)==null?void 0:un.docs)==null?void 0:pn.source}}};var fn,hn,mn;ke.parameters={...ke.parameters,docs:{...(fn=ke.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(mn=(hn=ke.parameters)==null?void 0:hn.docs)==null?void 0:mn.source}}};var gn,bn,zn;Oe.parameters={...Oe.parameters,docs:{...(gn=Oe.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(zn=(bn=Oe.parameters)==null?void 0:bn.docs)==null?void 0:zn.source}}};const oo=["Basic","Variant","ColorScheme","Orientation","DefaultSize","MinMaxSize","Collapsible","Refs","Icon","NestedResizable","Disabled","onLayoutChange","OnResize","LocaleStorage","ConditionalLocaleStorage","CookieStorage","CustomControl"];export{ge as Basic,ve as Collapsible,ze as ColorScheme,Pe as ConditionalLocaleStorage,ke as CookieStorage,Oe as CustomControl,ye as DefaultSize,Ie as Disabled,we as Icon,Te as LocaleStorage,xe as MinMaxSize,Ce as NestedResizable,Le as OnResize,Re as Orientation,Se as Refs,be as Variant,oo as __namedExportsOrder,ro as default,je as onLayoutChange};
