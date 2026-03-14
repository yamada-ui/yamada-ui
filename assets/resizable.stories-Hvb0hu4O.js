import{d as Bt,r as v,j as a,bW as We,m as se,c as $t,h as At,b as Nt,e as _t,s as Be,l as Vt,Q as Z}from"./iframe-DyywAl9M.js";import{P as Gt}from"./props-table-DObtv924.js";import{u as Ke}from"./index-DVnxKWvH.js";import{W as mt}from"./wrap-BOb1BHhO.js";import{u as Ht}from"./index-DtSGvXw0.js";import{G as Qe}from"./grip-vertical-icon-BQueMzhF.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./index-Bj-RbYzA.js";import"./use-breakpoint-_p73q9DO.js";import"./use-breakpoint-value-DSjm9V8o.js";import"./use-color-mode-value-DqCHpsqA.js";const Xt=Bt({base:{icon:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",translateX:"-50%",translateY:"-50%"},item:{boxSize:"full"},root:{boxSize:"full"},trigger:{position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{transitionDuration:"moderate",transitionProperty:"common"}}},variants:{border:{icon:{bg:"colorScheme.muted",color:"colorScheme.fg",py:"1",rounded:"l1"},trigger:{bg:"colorScheme.muted",focusVisibleRing:"none",_after:{position:"absolute"},_hover:{bg:"colorScheme.emphasized"},_focusVisible:{bg:"colorScheme.emphasized"}}},plain:{trigger:{focusVisibleRing:"none",_after:{position:"absolute"}}},spacer:{icon:{color:"colorScheme.fg",transitionDuration:"moderate",transitionProperty:"common"},trigger:{focusVisibleRing:"none",p:"1",_after:{bg:"transparent",display:"block",rounded:"full"},_hover:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}},_focusVisible:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}}}}},props:{orientation:{horizontal:{icon:{transform:"translate(-50%, -50%) rotate(0deg)"}},vertical:{icon:{transform:"translate(-50%, -50%) rotate(90deg)"}}}},compounds:[{css:{trigger:{h:"px",_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"border",orientation:"vertical"},{css:{trigger:{w:"px",_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"border",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",w:"full"}}},variant:"spacer",orientation:"vertical"},{css:{trigger:{_after:{h:"full",w:"2"}}},variant:"spacer",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"plain",orientation:"vertical"},{css:{trigger:{_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"plain",orientation:"horizontal"}],defaultProps:{variant:"border",orientation:"horizontal"}});function Yt(e,t){const n=getComputedStyle(e),r=parseFloat(n.fontSize);return t*r}function Jt(e,t){const n=getComputedStyle(e.ownerDocument.body),r=parseFloat(n.fontSize);return t*r}function qt(e){return e/100*window.innerHeight}function Ut(e){return e/100*window.innerWidth}function Kt(e){switch(typeof e){case"number":return[e,"px"];case"string":{const t=parseFloat(e);return e.endsWith("%")?[t,"%"]:e.endsWith("px")?[t,"px"]:e.endsWith("rem")?[t,"rem"]:e.endsWith("em")?[t,"em"]:e.endsWith("vh")?[t,"vh"]:e.endsWith("vw")?[t,"vw"]:[t,"%"]}}}function ue({groupSize:e,panelElement:t,styleProp:n}){let r;const[i,s]=Kt(n);switch(s){case"%":{r=i/100*e;break}case"px":{r=i;break}case"rem":{r=Jt(t,i);break}case"em":{r=Yt(t,i);break}case"vh":{r=qt(i);break}case"vw":{r=Ut(i);break}}return r}function D(e){return parseFloat(e.toFixed(3))}function re({group:e}){const{orientation:t,panels:n}=e;return n.reduce((r,i)=>(r+=t==="horizontal"?i.element.offsetWidth:i.element.offsetHeight,r),0)}function De(e){const{panels:t}=e,n=re({group:e});return n===0?t.map(r=>({groupResizeBehavior:r.panelConstraints.groupResizeBehavior,collapsedSize:0,collapsible:r.panelConstraints.collapsible===!0,defaultSize:void 0,disabled:r.panelConstraints.disabled,minSize:0,maxSize:100,panelId:r.id})):t.map(r=>{const{element:i,panelConstraints:s}=r;let d=0;if(s.collapsedSize!==void 0){const u=ue({groupSize:n,panelElement:i,styleProp:s.collapsedSize});d=D(u/n*100)}let o;if(s.defaultSize!==void 0){const u=ue({groupSize:n,panelElement:i,styleProp:s.defaultSize});o=D(u/n*100)}let l=0;if(s.minSize!==void 0){const u=ue({groupSize:n,panelElement:i,styleProp:s.minSize});l=D(u/n*100)}let c=100;if(s.maxSize!==void 0){const u=ue({groupSize:n,panelElement:i,styleProp:s.maxSize});c=D(u/n*100)}return{groupResizeBehavior:s.groupResizeBehavior,collapsedSize:d,collapsible:s.collapsible===!0,defaultSize:o,disabled:s.disabled,minSize:l,maxSize:c,panelId:r.id}})}function j(e,t="Assertion error"){if(!e)throw Error(t)}function Fe(e,t){return Array.from(t).sort(e==="horizontal"?Qt:Zt)}function Qt(e,t){const n=e.element.offsetLeft-t.element.offsetLeft;return n!==0?n:e.element.offsetWidth-t.element.offsetWidth}function Zt(e,t){const n=e.element.offsetTop-t.element.offsetTop;return n!==0?n:e.element.offsetHeight-t.element.offsetHeight}function gt(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function bt(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function en({orientation:e,rects:t,targetRect:n}){const r={x:n.x+n.width/2,y:n.y+n.height/2};let i,s=Number.MAX_VALUE;for(const d of t){const{x:o,y:l}=bt(r,d),c=e==="horizontal"?o:l;c<s&&(s=c,i=d)}return j(i,"No rect found"),i}let pe;function tn(){return pe===void 0&&(typeof matchMedia=="function"?pe=!!matchMedia("(pointer:coarse)").matches:pe=!1),pe}function zt(e){const{element:t,orientation:n,panels:r,separators:i}=e,s=Fe(n,Array.from(t.children).filter(gt).map(b=>({element:b}))).map(({element:b})=>b),d=[];let o=!1,l=!1,c=-1,u=-1,z=0,f,w=[];{let b=-1;for(const p of s)p.hasAttribute("data-panel")&&(b++,p.ariaDisabled===null&&(z++,c===-1&&(c=b),u=b))}if(z>1){let b=-1;for(const p of s)if(p.hasAttribute("data-panel")){b++;const g=r.find(h=>h.element===p);if(g){if(f){const h=f.element.getBoundingClientRect(),S=p.getBoundingClientRect();let x;if(l){const y=n==="horizontal"?new DOMRect(h.right,h.top,0,h.height):new DOMRect(h.left,h.bottom,h.width,0),m=n==="horizontal"?new DOMRect(S.left,S.top,0,S.height):new DOMRect(S.left,S.top,S.width,0);switch(w.length){case 0:{x=[y,m];break}case 1:{const k=w[0],T=en({orientation:n,rects:[h,S],targetRect:k.element.getBoundingClientRect()});x=[k,T===h?m:y];break}default:{x=w;break}}}else w.length?x=w:x=[n==="horizontal"?new DOMRect(h.right,S.top,S.left-h.right,S.height):new DOMRect(S.left,h.bottom,S.width,S.top-h.bottom)];for(const y of x){let m="width"in y?y:y.element.getBoundingClientRect();const k=tn()?e.resizeTargetMinimumSize.coarse:e.resizeTargetMinimumSize.fine;if(m.width<k){const E=k-m.width;m=new DOMRect(m.x-E/2,m.y,m.width+E,m.height)}if(m.height<k){const E=k-m.height;m=new DOMRect(m.x,m.y-E/2,m.width,m.height+E)}const T=b<=c||b>u;!o&&!T&&d.push({group:e,groupSize:re({group:e}),panels:[f,g],separator:"width"in y?void 0:y,rect:m}),o=!1}}l=!1,f=g,w=[]}}else if(p.hasAttribute("data-separator")){p.ariaDisabled!==null&&(o=!0);const g=i.find(h=>h.element===p);g?w.push(g):(f=void 0,w=[])}else l=!0}return d}class Rt{#e={};addListener(t,n){const r=this.#e[t];return r===void 0?this.#e[t]=[n]:r.includes(n)||r.push(n),()=>{this.removeListener(t,n)}}emit(t,n){const r=this.#e[t];if(r!==void 0)if(r.length===1)r[0].call(null,n);else{let i=!1,s=null;const d=Array.from(r);for(let o=0;o<d.length;o++){const l=d[o];try{l.call(null,n)}catch(c){s===null&&(i=!0,s=c)}}if(i)throw s}}removeAllListeners(){this.#e={}}removeListener(t,n){const r=this.#e[t];if(r!==void 0){const i=r.indexOf(n);i>=0&&r.splice(i,1)}}}let $=new Map;const yt=new Rt;function nn(e){$=new Map($),$.delete(e)}function Ze(e,t){for(const[n]of $)if(n.id===e)return n}function G(e,t){for(const[n,r]of $)if(n.id===e)return r;if(t)throw Error(`Could not find data for Group with id ${e}`)}function q(){return $}function $e(e,t){return yt.addListener("groupChange",n=>{n.group.id===e&&t(n)})}function _(e,t){const n=$.get(e);$=new Map($),$.set(e,t),yt.emit("groupChange",{group:e,prev:n,next:t})}function rn(e,t,n){let r,i={x:1/0,y:1/0};for(const s of t){const d=bt(n,s.rect);switch(e){case"horizontal":{d.x<=i.x&&(r=s,i=d);break}case"vertical":{d.y<=i.y&&(r=s,i=d);break}}}return r?{distance:i,hitRegion:r}:void 0}function on(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function an(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:nt(e),b:nt(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();j(r,"Stacking order can only be calculated for elements with a common ancestor");const i={a:tt(et(n.a)),b:tt(et(n.b))};if(i.a===i.b){const s=r.childNodes,d={a:n.a.at(-1),b:n.b.at(-1)};let o=s.length;for(;o--;){const l=s[o];if(l===d.a)return 1;if(l===d.b)return-1}}return Math.sign(i.a-i.b)}const sn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ln(e){const t=getComputedStyle(xt(e)??e).display;return t==="flex"||t==="inline-flex"}function dn(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||ln(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||sn.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function et(e){let t=e.length;for(;t--;){const n=e[t];if(j(n,"Missing node"),dn(n))return n}return null}function tt(e){return e&&Number(getComputedStyle(e).zIndex)||0}function nt(e){const t=[];for(;e;)t.push(e),e=xt(e);return t}function xt(e){const{parentNode:t}=e;return on(t)?t.host:t}function cn(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function un({groupElement:e,hitRegion:t,pointerEventTarget:n}){if(!gt(n)||n.contains(e)||e.contains(n))return!0;if(an(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(cn(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function Ae(e,t){const n=[];return t.forEach((r,i)=>{if(i.disabled)return;const s=zt(i),d=rn(i.orientation,s,{x:e.clientX,y:e.clientY});d&&d.distance.x<=0&&d.distance.y<=0&&un({groupElement:i.element,hitRegion:d.hitRegion.rect,pointerEventTarget:e.target})&&n.push(d.hitRegion)}),n}function pn(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function W(e,t,n=0){return Math.abs(D(e)-D(t))<=n}function B(e,t){return W(e,t)?0:e>t?1:-1}function ee({overrideDisabledPanels:e,panelConstraints:t,prevSize:n,size:r}){const{collapsedSize:i=0,collapsible:s,disabled:d,maxSize:o=100,minSize:l=0}=t;if(d&&!e)return n;if(B(r,l)<0)if(s){const c=(i+l)/2;B(r,c)<0?r=i:r=l}else r=l;return r=Math.min(o,r),r=D(r),r}function le({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:i,trigger:s}){if(W(e,0))return t;const d=s==="imperative-api",o=Object.values(t),l=Object.values(i),c=[...o],[u,z]=r;j(u!=null,"Invalid first pivot index"),j(z!=null,"Invalid second pivot index");let f=0;switch(s){case"keyboard":{{const p=e<0?z:u,g=n[p];j(g,`Panel constraints not found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:x=0}=g;if(S){const y=o[p];if(j(y!=null,`Previous layout not found for panel index ${p}`),W(y,h)){const m=x-y;B(m,Math.abs(e))>0&&(e=e<0?0-m:m)}}}{const p=e<0?u:z,g=n[p];j(g,`No panel constraints found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:x=0}=g;if(S){const y=o[p];if(j(y!=null,`Previous layout not found for panel index ${p}`),W(y,x)){const m=y-h;B(m,Math.abs(e))>0&&(e=e<0?0-m:m)}}}break}default:{const p=e<0?z:u,g=n[p];j(g,`Panel constraints not found for index ${p}`);const h=o[p],{collapsible:S,collapsedSize:x,minSize:y}=g;if(S&&B(h,y)<0)if(e>0){const m=y-x,k=m/2,T=h+e;B(T,y)<0&&(e=B(e,k)<=0?0:m)}else{const m=y-x,k=100-m/2,T=h-e;B(T,y)<0&&(e=B(100+e,k)>0?0:-m)}break}}{const p=e<0?1:-1;let g=e<0?z:u,h=0;for(;;){const x=o[g];j(x!=null,`Previous layout not found for panel index ${g}`);const y=ee({overrideDisabledPanels:d,panelConstraints:n[g],prevSize:x,size:100})-x;if(h+=y,g+=p,g<0||g>=n.length)break}const S=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-S:S}{let p=e<0?u:z;for(;p>=0&&p<n.length;){const g=Math.abs(e)-Math.abs(f),h=o[p];j(h!=null,`Previous layout not found for panel index ${p}`);const S=h-g,x=ee({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:h,size:S});if(!W(h,x)&&(f+=h-x,c[p]=x,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?p--:p++}}if(pn(l,c))return i;{const p=e<0?z:u,g=o[p];j(g!=null,`Previous layout not found for panel index ${p}`);const h=g+f,S=ee({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:g,size:h});if(c[p]=S,!W(S,h)){let x=h-S,y=e<0?z:u;for(;y>=0&&y<n.length;){const m=c[y];j(m!=null,`Previous layout not found for panel index ${y}`);const k=m+x,T=ee({overrideDisabledPanels:d,panelConstraints:n[y],prevSize:m,size:k});if(W(m,T)||(x-=T-m,c[y]=T),W(x,0))break;e>0?y--:y++}}}const w=Object.values(c).reduce((p,g)=>g+p,0);if(!W(w,100,.1))return i;const b=Object.keys(i);return c.reduce((p,g,h)=>(p[b[h]]=g,p),{})}function X(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(t[n]===void 0||B(e[n],t[n])!==0)return!1;return!0}function Y({layout:e,panelConstraints:t}){const n=Object.values(e),r=[...n],i=r.reduce((o,l)=>o+l,0);if(r.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${r.map(o=>`${o}%`).join(", ")}`);if(!W(i,100)&&r.length>0)for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=100/i*l;r[o]=c}let s=0;for(let o=0;o<t.length;o++){const l=n[o];j(l!=null,`No layout data found for index ${o}`);const c=r[o];j(c!=null,`No layout data found for index ${o}`);const u=ee({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});c!=u&&(s+=c-u,r[o]=u)}if(!W(s,0))for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=l+s,u=ee({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});if(l!==u&&(s-=u-l,r[o]=u,W(s,0)))break}const d=Object.keys(e);return r.reduce((o,l,c)=>(o[d[c]]=l,o),{})}function vt({groupId:e,panelId:t}){const n=()=>{const o=q();for(const[l,{defaultLayoutDeferred:c,derivedPanelConstraints:u,layout:z,groupSize:f,separatorToPanels:w}]of o)if(l.id===e)return{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:l,groupSize:f,layout:z,separatorToPanels:w};throw Error(`Group ${e} not found`)},r=()=>{const o=n().derivedPanelConstraints.find(l=>l.panelId===t);if(o!==void 0)return o;throw Error(`Panel constraints not found for Panel ${t}`)},i=()=>{const o=n().group.panels.find(l=>l.id===t);if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},s=()=>{const o=n().layout[t];if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},d=o=>{const l=s();if(o===l)return;const{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:z,groupSize:f,layout:w,separatorToPanels:b}=n(),p=z.panels.findIndex(x=>x.id===t),g=p===z.panels.length-1,h=le({delta:g?l-o:o-l,initialLayout:w,panelConstraints:u,pivotIndices:g?[p-1,p]:[p,p+1],prevLayout:w,trigger:"imperative-api"}),S=Y({layout:h,panelConstraints:u});X(w,S)||_(z,{defaultLayoutDeferred:c,derivedPanelConstraints:u,groupSize:f,layout:S,separatorToPanels:b})};return{collapse:()=>{const{collapsible:o,collapsedSize:l}=r(),{mutableValues:c}=i(),u=s();o&&u!==l&&(c.expandToSize=u,d(l))},expand:()=>{const{collapsible:o,collapsedSize:l,minSize:c}=r(),{mutableValues:u}=i(),z=s();if(o&&z===l){let f=u.expandToSize??c;f===0&&(f=1),d(f)}},getSize:()=>{const{group:o}=n(),l=s(),{element:c}=i(),u=o.orientation==="horizontal"?c.offsetWidth:c.offsetHeight;return{asPercentage:l,inPixels:u}},isCollapsed:()=>{const{collapsible:o,collapsedSize:l}=r(),c=s();return o&&W(l,c)},resize:o=>{if(s()!==o){let l;switch(typeof o){case"number":{const{group:c}=n(),u=re({group:c});l=D(o/u*100);break}case"string":{l=parseFloat(o);break}}d(l)}}}}function rt(e){if(e.defaultPrevented)return;const t=q();Ae(e,t).forEach(n=>{if(n.separator){const r=n.panels.find(i=>i.panelConstraints.defaultSize!==void 0);if(r){const i=r.panelConstraints.defaultSize,s=vt({groupId:n.group.id,panelId:r.id});s&&i!==void 0&&(s.resize(i),e.preventDefault())}}})}function ke(e){const t=q();for(const[n]of t)if(n.separators.some(r=>r.element===e))return n;throw Error("Could not find parent Group for separator element")}function St({groupId:e}){const t=()=>{const n=q();for(const[r,i]of n)if(r.id===e)return{group:r,...i};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){const{defaultLayoutDeferred:n,layout:r}=t();return n?{}:r},setLayout(n){const{defaultLayoutDeferred:r,derivedPanelConstraints:i,group:s,groupSize:d,layout:o,separatorToPanels:l}=t(),c=Y({layout:n,panelConstraints:i});return r?o:(X(o,c)||_(s,{defaultLayoutDeferred:r,derivedPanelConstraints:i,groupSize:d,layout:c,separatorToPanels:l}),c)}}}function H(e,t){const n=ke(e),r=G(n.id,!0),i=n.separators.find(u=>u.element===e);j(i,"Matching separator not found");const s=r.separatorToPanels.get(i);j(s,"Matching panels not found");const d=s.map(u=>n.panels.indexOf(u)),o=St({groupId:n.id}).getLayout(),l=le({delta:t,initialLayout:o,panelConstraints:r.derivedPanelConstraints,pivotIndices:d,prevLayout:o,trigger:"keyboard"}),c=Y({layout:l,panelConstraints:r.derivedPanelConstraints});X(o,c)||_(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedPanelConstraints:r.derivedPanelConstraints,groupSize:r.groupSize,layout:c,separatorToPanels:r.separatorToPanels})}function ot(e){if(e.defaultPrevented)return;const t=e.currentTarget,n=ke(t);if(!n.disabled)switch(e.key){case"ArrowDown":{e.preventDefault(),n.orientation==="vertical"&&H(t,5);break}case"ArrowLeft":{e.preventDefault(),n.orientation==="horizontal"&&H(t,-5);break}case"ArrowRight":{e.preventDefault(),n.orientation==="horizontal"&&H(t,5);break}case"ArrowUp":{e.preventDefault(),n.orientation==="vertical"&&H(t,-5);break}case"End":{e.preventDefault(),H(t,100);break}case"Enter":{e.preventDefault();const r=ke(t),i=G(r.id,!0),{derivedPanelConstraints:s,layout:d,separatorToPanels:o}=i,l=r.separators.find(f=>f.element===t);j(l,"Matching separator not found");const c=o.get(l);j(c,"Matching panels not found");const u=c[0],z=s.find(f=>f.panelId===u.id);if(j(z,"Panel metadata not found"),z.collapsible){const f=d[u.id],w=z.collapsedSize===f?r.mutableState.expandedPanelSizes[u.id]??z.minSize:z.collapsedSize;H(t,w-f)}break}case"F6":{e.preventDefault();const r=ke(t).separators.map(d=>d.element),i=Array.from(r).findIndex(d=>d===e.currentTarget);j(i!==null,"Index not found");const s=e.shiftKey?i>0?i-1:r.length-1:i+1<r.length?i+1:0;r[s].focus({preventScroll:!0});break}case"Home":{e.preventDefault(),H(t,-100);break}}}let te={cursorFlags:0,state:"inactive"};const Ne=new Rt;function J(){return te}function fn(e){return Ne.addListener("change",e)}function hn(e){const t=te,n={...te};n.cursorFlags=e,te=n,Ne.emit("change",{prev:t,next:n})}function ne(e){const t=te;te=e,Ne.emit("change",{prev:t,next:e})}function at(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=q(),n=Ae(e,t),r=new Map;let i=!1;n.forEach(s=>{s.separator&&(i||(i=!0,s.separator.element.focus({preventScroll:!0})));const d=t.get(s.group);d&&r.set(s.group,d.layout)}),ne({cursorFlags:0,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},state:"active"}),n.length&&e.preventDefault()}const mn=e=>e,Ee=()=>{},wt=1,Ct=2,It=4,jt=8,it=3,st=12;let fe;function lt(){return fe===void 0&&(fe=!1,typeof window<"u"&&(window.navigator.userAgent.includes("Chrome")||window.navigator.userAgent.includes("Firefox"))&&(fe=!0)),fe}function gn({cursorFlags:e,groups:t,state:n}){let r=0,i=0;switch(n){case"active":case"hover":t.forEach(s=>{if(!s.mutableState.disableCursor)switch(s.orientation){case"horizontal":{r++;break}case"vertical":{i++;break}}})}if(!(r===0&&i===0)){switch(n){case"active":{if(e&&lt()){const s=(e&wt)!==0,d=(e&Ct)!==0,o=(e&It)!==0,l=(e&jt)!==0;if(s)return o?"se-resize":l?"ne-resize":"e-resize";if(d)return o?"sw-resize":l?"nw-resize":"w-resize";if(o)return"s-resize";if(l)return"n-resize"}break}}return lt()?r>0&&i>0?"move":r>0?"ew-resize":"ns-resize":r>0&&i>0?"grab":r>0?"col-resize":"row-resize"}}const dt=new WeakMap;function _e(e){if(e.defaultView===null||e.defaultView===void 0)return;let{prevStyle:t,styleSheet:n}=dt.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&e.adoptedStyleSheets.push(n));const r=J();switch(r.state){case"active":case"hover":{const i=gn({cursorFlags:r.cursorFlags,groups:r.hitRegions.map(d=>d.group),state:r.state}),s=`*, *:hover {cursor: ${i} !important; }`;if(t===s)return;t=s,i?n.cssRules.length===0?n.insertRule(s):n.replaceSync(s):n.cssRules.length===1&&n.deleteRule(0);break}case"inactive":{t=void 0,n.cssRules.length===1&&n.deleteRule(0);break}}dt.set(e,{prevStyle:t,styleSheet:n})}function Lt({document:e,event:t,hitRegions:n,initialLayoutMap:r,mountedGroups:i,pointerDownAtPoint:s,prevCursorFlags:d}){let o=0;n.forEach(c=>{const{group:u,groupSize:z}=c,{orientation:f,panels:w}=u,{disableCursor:b}=u.mutableState;let p=0;s?f==="horizontal"?p=(t.clientX-s.x)/z*100:p=(t.clientY-s.y)/z*100:f==="horizontal"?p=t.clientX<0?-100:100:p=t.clientY<0?-100:100;const g=r.get(u),h=i.get(u);if(!g||!h)return;const{defaultLayoutDeferred:S,derivedPanelConstraints:x,groupSize:y,layout:m,separatorToPanels:k}=h;if(x&&m&&k){const T=le({delta:p,initialLayout:g,panelConstraints:x,pivotIndices:c.panels.map(E=>w.indexOf(E)),prevLayout:m,trigger:"mouse-or-touch"});if(X(T,m)){if(p!==0&&!b)switch(f){case"horizontal":{o|=p<0?wt:Ct;break}case"vertical":{o|=p<0?It:jt;break}}}else _(c.group,{defaultLayoutDeferred:S,derivedPanelConstraints:x,groupSize:y,layout:T,separatorToPanels:k})}});let l=0;t.movementX===0?l|=d&it:l|=o&it,t.movementY===0?l|=d&st:l|=o&st,hn(l),_e(e)}function ct(e){const t=q(),n=J();n.state==="active"&&Lt({document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:t,prevCursorFlags:n.cursorFlags})}function ut(e){if(e.defaultPrevented)return;const t=J(),n=q();switch(t.state){case"active":{if(e.buttons===0){ne({cursorFlags:0,state:"inactive"}),t.hitRegions.forEach(r=>{const i=G(r.group.id,!0);_(r.group,i)});return}Lt({document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedGroups:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break}default:{const r=Ae(e,n);r.length===0?t.state!=="inactive"&&ne({cursorFlags:0,state:"inactive"}):ne({cursorFlags:0,hitRegions:r,state:"hover"}),_e(e.currentTarget);break}}}function pt(e){e.relatedTarget instanceof HTMLIFrameElement&&J().state==="hover"&&ne({cursorFlags:0,state:"inactive"})}function ft(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=J();t.state==="active"&&(ne({cursorFlags:0,state:"inactive"}),t.hitRegions.length>0&&(_e(e.currentTarget),t.hitRegions.forEach(n=>{const r=G(n.group.id,!0);_(n.group,r)}),e.preventDefault()))}function ht(e){let t=0,n=0;const r={};for(const s of e)if(s.defaultSize!==void 0){t++;const d=D(s.defaultSize);n+=d,r[s.panelId]=d}else r[s.panelId]=void 0;const i=e.length-t;if(i!==0){const s=D((100-n)/i);for(const d of e)d.defaultSize===void 0&&(r[d.panelId]=s)}return r}function bn(e,t,n){if(!n[0])return;const r=e.panels.find(l=>l.element===t);if(!r||!r.onResize)return;const i=re({group:e}),s=e.orientation==="horizontal"?r.element.offsetWidth:r.element.offsetHeight,d=r.mutableValues.prevSize,o={asPercentage:D(s/i*100),inPixels:s};r.mutableValues.prevSize=o,r.onResize(o,r.id,d)}function zn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Rn({group:e,nextGroupSize:t,prevGroupSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let i=0,s=0,d=!1;const o=new Map,l=[];for(const z of e.panels){const f=r[z.id]??0;if(z.panelConstraints.groupResizeBehavior==="preserve-pixel-size"){d=!0;const w=f/100*n,b=D(w/t*100);o.set(z.id,b),i+=b}else l.push(z.id),s+=f}if(!d||l.length===0)return r;const c=100-i,u={...r};if(o.forEach((z,f)=>{u[f]=z}),s>0)for(const z of l){const f=r[z]??0;u[z]=D(f/s*c)}else{const z=D(c/l.length);for(const f of l)u[f]=z}return u}function yn(e,t){const n=e.map(i=>i.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n)if(!r.includes(i))return!1;return!0}const Q=new Map;function xn(e){let t=!0;j(e.element.ownerDocument.defaultView,"Cannot register an unmounted Group");const n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,i=new Set,s=new n(b=>{for(const p of b){const{borderBoxSize:g,target:h}=p;if(h===e.element){if(t){const S=re({group:e});if(S===0)return;const x=G(e.id);if(!x)return;const y=De(e),m=x.defaultLayoutDeferred?ht(y):x.layout,k=Rn({group:e,nextGroupSize:S,prevGroupSize:x.groupSize,prevLayout:m}),T=Y({layout:k,panelConstraints:y});if(!x.defaultLayoutDeferred&&X(x.layout,T)&&zn(x.derivedPanelConstraints,y)&&x.groupSize===S)return;_(e,{defaultLayoutDeferred:!1,derivedPanelConstraints:y,groupSize:S,layout:T,separatorToPanels:x.separatorToPanels})}}else bn(e,h,g)}});s.observe(e.element),e.panels.forEach(b=>{j(!r.has(b.id),`Panel ids must be unique; id "${b.id}" was used more than once`),r.add(b.id),b.onResize&&s.observe(b.element)});const d=re({group:e}),o=De(e),l=e.panels.map(({id:b})=>b).join(",");let c=e.mutableState.defaultLayout;c&&(yn(e.panels,c)||(c=void 0));const u=e.mutableState.layouts[l]??c??ht(o),z=Y({layout:u,panelConstraints:o}),f=e.element.ownerDocument;Q.set(f,(Q.get(f)??0)+1);const w=new Map;return zt(e).forEach(b=>{b.separator&&w.set(b.separator,b.panels)}),_(e,{defaultLayoutDeferred:d===0,derivedPanelConstraints:o,groupSize:d,layout:z,separatorToPanels:w}),e.separators.forEach(b=>{j(!i.has(b.id),`Separator ids must be unique; id "${b.id}" was used more than once`),i.add(b.id),b.element.addEventListener("keydown",ot)}),Q.get(f)===1&&(f.addEventListener("dblclick",rt,!0),f.addEventListener("pointerdown",at,!0),f.addEventListener("pointerleave",ct),f.addEventListener("pointermove",ut),f.addEventListener("pointerout",pt),f.addEventListener("pointerup",ft,!0)),function(){t=!1,Q.set(f,Math.max(0,(Q.get(f)??0)-1)),nn(e),e.separators.forEach(b=>{b.element.removeEventListener("keydown",ot)}),Q.get(f)||(f.removeEventListener("dblclick",rt,!0),f.removeEventListener("pointerdown",at,!0),f.removeEventListener("pointerleave",ct),f.removeEventListener("pointermove",ut),f.removeEventListener("pointerout",pt),f.removeEventListener("pointerup",ft,!0)),s.disconnect()}}function vn(){const[e,t]=v.useState({}),n=v.useCallback(()=>t({}),[]);return[e,n]}function Ve(e){const t=v.useId();return`${e??t}`}const U=typeof window<"u"?v.useLayoutEffect:v.useEffect;function ie(e){const t=v.useRef(e);return U(()=>{t.current=e},[e]),v.useCallback((...n)=>t.current?.(...n),[t])}function Ge(...e){return ie(t=>{e.forEach(n=>{if(n)switch(typeof n){case"function":{n(t);break}case"object":{n.current=t;break}}})})}function He(e){const t=v.useRef({...e});return U(()=>{for(const n in e)t.current[n]=e[n]},[e]),t.current}const Tt=v.createContext(null);function Sn(e,t){const n=v.useRef({getLayout:()=>({}),setLayout:mn});v.useImperativeHandle(t,()=>n.current,[]),U(()=>{Object.assign(n.current,St({groupId:e}))})}function Pt({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:i,elementRef:s,groupRef:d,id:o,onLayoutChange:l,onLayoutChanged:c,orientation:u="horizontal",resizeTargetMinimumSize:z={coarse:20,fine:10},style:f,...w}){const b=v.useRef({onLayoutChange:{},onLayoutChanged:{}}),p=ie(C=>{X(b.current.onLayoutChange,C)||(b.current.onLayoutChange=C,l?.(C))}),g=ie(C=>{X(b.current.onLayoutChanged,C)||(b.current.onLayoutChanged=C,c?.(C))}),h=Ve(o),S=v.useRef(null),[x,y]=vn(),m=v.useRef({lastExpandedPanelSizes:{},layouts:{},panels:[],resizeTargetMinimumSize:z,separators:[]}),k=Ge(S,s);Sn(h,d);const T=ie((C,I)=>{const O=J(),M=Ze(C),F=G(C);if(F){let A=!1;return O.state==="active"&&(A=O.hitRegions.some(oe=>oe.group===M)),{flexGrow:F.layout[I]??1,pointerEvents:A?"none":void 0}}return{flexGrow:n?.[I]??1}}),E=He({defaultLayout:n,disableCursor:r}),K=v.useMemo(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:h,orientation:u,registerPanel:C=>{const I=m.current;return I.panels=Fe(u,[...I.panels,C]),y(),()=>{I.panels=I.panels.filter(O=>O!==C),y()}},registerSeparator:C=>{const I=m.current;return I.separators=Fe(u,[...I.separators,C]),y(),()=>{I.separators=I.separators.filter(O=>O!==C),y()}},togglePanelDisabled:(C,I)=>{const O=m.current.panels.find(A=>A.id===C);O&&(O.panelConstraints.disabled=I);const M=Ze(h),F=G(h);M&&F&&_(M,{...F,derivedPanelConstraints:De(M)})},toggleSeparatorDisabled:(C,I)=>{const O=m.current.separators.find(M=>M.id===C);O&&(O.disabled=I)}}),[T,h,y,u,E]),V=v.useRef(null);return U(()=>{const C=S.current;if(C===null)return;const I=m.current;let O;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===I.panels.length){O={};for(const ae of I.panels){const de=E.defaultLayout[ae.id];de!==void 0&&(O[ae.id]=de)}}const M={disabled:!!i,element:C,id:h,mutableState:{defaultLayout:O,disableCursor:!!E.disableCursor,expandedPanelSizes:m.current.lastExpandedPanelSizes,layouts:m.current.layouts},orientation:u,panels:I.panels,resizeTargetMinimumSize:I.resizeTargetMinimumSize,separators:I.separators};V.current=M;const F=xn(M),{defaultLayoutDeferred:A,derivedPanelConstraints:oe,layout:qe}=G(M.id,!0);!A&&oe.length>0&&(p(qe),g(qe));const Et=$e(h,ae=>{const{defaultLayoutDeferred:de,derivedPanelConstraints:Ue,layout:ce}=ae.next;if(de||Ue.length===0)return;const Mt=M.panels.map(({id:N})=>N).join(",");M.mutableState.layouts[Mt]=ce,Ue.forEach(N=>{if(N.collapsible){const{layout:Oe}=ae.prev??{};if(Oe){const Dt=W(N.collapsedSize,ce[N.panelId]),Ft=W(N.collapsedSize,Oe[N.panelId]);Dt&&!Ft&&(M.mutableState.expandedPanelSizes[N.panelId]=Oe[N.panelId])}}});const Wt=J().state!=="active";p(ce),Wt&&g(ce)});return()=>{V.current=null,F(),Et()}},[i,h,g,p,u,x,E]),v.useEffect(()=>{const C=V.current;C&&(C.mutableState.defaultLayout=n,C.mutableState.disableCursor=!!r)}),a.jsx(Tt.Provider,{value:K,children:a.jsx("div",{...w,className:t,"data-group":!0,"data-testid":h,id:h,ref:k,style:{height:"100%",width:"100%",overflow:"hidden",...f,display:"flex",flexDirection:u==="horizontal"?"row":"column",flexWrap:"nowrap",touchAction:u==="horizontal"?"pan-y":"pan-x"},children:e})})}Pt.displayName="Group";function Me(e,t){return`react-resizable-panels:${[e,...t].join(":")}`}function Xe({debounceSaveMs:e=100,panelIds:t,storage:n=localStorage,...r}){const i=t!==void 0,s="id"in r?r.id:r.groupId,d=Me(s,t??[]),o=v.useSyncExternalStore(wn,()=>n.getItem(d),()=>n.getItem(d)),l=v.useMemo(()=>o?JSON.parse(o):void 0,[o]),c=v.useRef(null),u=v.useCallback(()=>{const w=c.current;w&&(c.current=null,clearTimeout(w))},[]);v.useLayoutEffect(()=>()=>{u()},[u]);const z=v.useCallback(w=>{u();let b;i?b=Me(s,Object.keys(w)):b=Me(s,[]);try{n.setItem(b,JSON.stringify(w))}catch(p){console.error(p)}},[u,i,s,n]),f=v.useCallback(w=>{u(),e===0?z(w):c.current=setTimeout(()=>{z(w)},e)},[u,e,z]);return{defaultLayout:l,onLayoutChange:f,onLayoutChanged:z}}function wn(){return function(){}}function Cn(){return v.useRef(null)}function Ye(){const e=v.useContext(Tt);return j(e,"Group Context not found; did you render a Panel or Separator outside of a Group?"),e}function In(e,t){const{id:n}=Ye(),r=v.useRef({collapse:Ee,expand:Ee,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Ee});v.useImperativeHandle(t,()=>r.current,[]),U(()=>{Object.assign(r.current,vt({groupId:n,panelId:e}))})}function kt({children:e,className:t,collapsedSize:n="0%",collapsible:r=!1,defaultSize:i,disabled:s,elementRef:d,groupResizeBehavior:o="preserve-relative-size",id:l,maxSize:c="100%",minSize:u="0%",onResize:z,panelRef:f,style:w,...b}){const p=!!l,g=Ve(l),h=He({disabled:s}),S=v.useRef(null),x=Ge(S,d),{getPanelStyles:y,id:m,orientation:k,registerPanel:T,togglePanelDisabled:E}=Ye(),K=z!==null,V=ie((I,O,M)=>{z?.(I,l,M)});U(()=>{const I=S.current;if(I!==null){const O={element:I,id:g,idIsStable:p,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:K?V:void 0,panelConstraints:{groupResizeBehavior:o,collapsedSize:n,collapsible:r,defaultSize:i,disabled:h.disabled,maxSize:c,minSize:u}};return T(O)}},[o,n,r,i,K,g,p,c,u,V,T,h]),v.useEffect(()=>{E(g,!!s)},[s,g,E]),In(g,f);const C=v.useSyncExternalStore(I=>$e(m,I),()=>JSON.stringify(y(m,g)),()=>JSON.stringify(y(m,g)));return a.jsx("div",{...b,"aria-disabled":s||void 0,"data-panel":!0,"data-testid":g,id:g,ref:x,style:{...jn,display:"flex",flexBasis:0,flexShrink:1,overflow:"visible",...JSON.parse(C)},children:a.jsx("div",{className:t,style:{maxHeight:"100%",maxWidth:"100%",flexGrow:1,overflow:"auto",...w,touchAction:k==="horizontal"?"pan-y":"pan-x"},children:e})})}kt.displayName="Panel";const jn={minHeight:0,maxHeight:"100%",height:"auto",minWidth:0,maxWidth:"100%",width:"auto",border:"none",borderWidth:0,padding:0,margin:0};function Ln(){return v.useRef(null)}function Tn({layout:e,panelConstraints:t,panelId:n,panelIndex:r}){let i,s;const d=e[n],o=t.find(l=>l.panelId===n);if(o){const l=o.maxSize,c=o.collapsible?o.collapsedSize:o.minSize,u=[r,r+1];s=Y({layout:le({delta:c-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n],i=Y({layout:le({delta:l-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n]}return{valueControls:n,valueMax:i,valueMin:s,valueNow:d}}function Ot({children:e,className:t,disabled:n,elementRef:r,id:i,style:s,...d}){const o=Ve(i),l=He({disabled:n}),[c,u]=v.useState({}),[z,f]=v.useState("inactive"),w=v.useRef(null),b=Ge(w,r),{disableCursor:p,id:g,orientation:h,registerSeparator:S,toggleSeparatorDisabled:x}=Ye(),y=h==="horizontal"?"vertical":"horizontal";U(()=>{const k=w.current;if(k!==null){const T={disabled:l.disabled,element:k,id:o},E=S(T),K=fn(C=>{f(C.next.state!=="inactive"&&C.next.hitRegions.some(I=>I.separator===T)?C.next.state:"inactive")}),V=$e(g,C=>{const{derivedPanelConstraints:I,layout:O,separatorToPanels:M}=C.next,F=M.get(T);if(F){const A=F[0],oe=F.indexOf(A);u(Tn({layout:O,panelConstraints:I,panelId:A.id,panelIndex:oe}))}});return()=>{K(),V(),E()}}},[g,o,S,l]),v.useEffect(()=>{x(o,!!n)},[n,o,x]);let m;return n&&!p&&(m="not-allowed"),a.jsx("div",{...d,"aria-controls":c.valueControls,"aria-disabled":n||void 0,"aria-orientation":y,"aria-valuemax":c.valueMax,"aria-valuemin":c.valueMin,"aria-valuenow":c.valueNow,children:e,className:t,"data-separator":n?"disabled":z,"data-testid":o,id:o,ref:b,role:"separator",style:{flexBasis:"auto",cursor:m,...s,flexGrow:0,flexShrink:0,touchAction:"none"},tabIndex:n?void 0:0})}Ot.displayName="Separator";const[Pn,kn]=$t({name:"ResizableContext"}),On=({controlRef:e,disabled:t,orientation:n="horizontal",...r}={})=>{const i=Cn(),s=v.useCallback((d={})=>({disabled:t,orientation:n,...r,...d,style:{height:void 0,width:void 0,...r.style,...d.style},elementRef:se(d.elementRef,r.ref),groupRef:se(d.groupRef,i,e),onLayoutChange:We(d.onLayoutChange,r.onLayoutChange),onLayoutChanged:We(d.onLayoutChanged,r.onLayoutChanged)}),[t,n,i,e,r]);return{disabled:t,groupRef:i,orientation:n,getRootProps:s}},En=({controlRef:e,...t})=>{const n=Ln(),r=v.useCallback((i={})=>({...t,...i,elementRef:se(i.elementRef,t.ref),panelRef:se(i.panelRef,n,e),onResize:We(i.onResize,t.onResize)}),[n,e,t]);return{panelRef:n,getItemProps:r}},Mn=({disabled:e,...t})=>{const{disabled:n,groupRef:r,orientation:i}=kn(),s=e||n,d=v.useCallback(c=>{c.preventDefault();const u=r.current?.getLayout();if(!u)return;const f=100/Object.keys(u).length,w=Object.fromEntries(Object.keys(u).map(b=>[b,f]));r.current?.setLayout(w)},[r]),o=v.useCallback((c={})=>({"aria-disabled":_t(s),"aria-orientation":i,"data-disabled":Nt(s),disabled:s,tabIndex:s?-1:0,...t,...c,elementRef:se(c.elementRef,t.ref),onDoubleClick:At(c.onDoubleClick,t.onDoubleClick,d)}),[i,s,t,d]);return{getIconProps:v.useCallback((c={})=>({"data-icon":"",...c}),[]),getTriggerProps:o}},{withContext:Je,withProvider:Wn}=Vt("resizable",Xt),P=Wn(({children:e,orientation:t,...n})=>{const r=Ht(t),{disabled:i,groupRef:s,orientation:d,getRootProps:o}=On({orientation:r,...n}),l=v.useMemo(()=>({disabled:i,groupRef:s,orientation:d}),[i,d,s]);return a.jsx(Pn,{value:l,children:a.jsx(Be.div,{as:Pt,...o(),children:e})})},"root",{transferProps:["orientation"]})(),R=Je(e=>{const{getItemProps:t}=En(e);return a.jsx(Be.div,{as:kt,...t()})},"item")(),L=Je(({children:e,icon:t,iconProps:n,...r})=>{const{getIconProps:i,getTriggerProps:s}=Mn(r);return a.jsxs(Be.div,{as:Ot,...s(),children:[t?a.jsx(Dn,{...i(n),children:t}):null,e]})},"trigger")(),Dn=Je("div","icon")(),Zn={component:P,title:"Components / Resizable"},he=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),me=()=>a.jsx(Gt,{variant:"stack",rows:["border","spacer","plain"],children:(e,t,n)=>a.jsxs(P,{variant:t,borderWidth:t==="border"?"1px":void 0,h:"md",rounded:t==="border"?"l2":void 0,children:[a.jsx(R,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"Two"})]},n)}),ge=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{colorScheme:"primary",variant:"spacer",h:"md",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]}),a.jsxs(P,{colorScheme:"red",variant:"spacer",h:"md",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),be=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]}),ze=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{defaultSize:"30%",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),Re=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",maxSize:"70%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),ye=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]}),xe=()=>{const e=v.useRef(null),t=v.useRef(null),n=v.useRef(null);return a.jsxs(P,{ref:e,borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{ref:t,display:"center",children:"One"}),a.jsx(L,{ref:n}),a.jsx(R,{display:"center",children:"Two"})]})},ve=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{icon:a.jsx(Qe,{})}),a.jsx(R,{display:"center",children:"Two"})]}),a.jsxs(P,{variant:"spacer",h:"md",orientation:"vertical",children:[a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),a.jsx(L,{icon:a.jsx(Qe,{})}),a.jsx(R,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),Se=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"Left"}),a.jsx(L,{}),a.jsx(R,{children:a.jsxs(P,{orientation:"vertical",children:[a.jsx(R,{display:"center",children:"Top"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Bottom"})]})})]}),a.jsxs(P,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[a.jsx(R,{display:"center",children:"Top"}),a.jsx(L,{}),a.jsx(R,{children:a.jsxs(P,{children:[a.jsx(R,{display:"center",children:"Left"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Right"})]})})]})]}),we=()=>a.jsxs(a.Fragment,{children:[a.jsxs(P,{borderWidth:"1px",disabled:!0,h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Three"})]}),a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",children:"One"}),a.jsx(L,{disabled:!0}),a.jsx(R,{display:"center",children:"Two"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Three"})]})]}),Ce=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",onLayoutChange:e=>{console.log("layout change",e)},onLayoutChanged:e=>{console.log("layout changed",e)},children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]}),Ie=()=>a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{display:"center",onResize:(e,t,n)=>{console.log("resize",e,t,n)},children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]}),je=()=>{const{defaultLayout:e,onLayoutChanged:t}=Xe({id:"persistence",storage:localStorage});return a.jsxs(P,{borderWidth:"1px",defaultLayout:e,h:"md",rounded:"l2",onLayoutChanged:t,children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]})},Le=()=>{const[e,t]=Ke({key:"showLeft",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),[n,r]=Ke({key:"showRight",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),i=v.useCallback(()=>{const o=[];return e&&o.push("left"),o.push("middle"),n&&o.push("right"),o},[e,n]),{defaultLayout:s,onLayoutChanged:d}=Xe({id:"conditional",panelIds:i(),storage:localStorage});return a.jsxs(a.Fragment,{children:[a.jsxs(mt,{gap:"md",children:[a.jsxs(Z,{onClick:()=>t(!e),children:[e?"Hidden":"Show"," Left"]}),a.jsxs(Z,{onClick:()=>r(!n),children:[n?"Hidden":"Show"," Right"]})]}),a.jsxs(P,{borderWidth:"1px",defaultLayout:s,h:"md",rounded:"l2",onLayoutChanged:d,children:[e?a.jsxs(a.Fragment,{children:[a.jsx(R,{id:"left",display:"center",minSize:"10%",children:"Left"}),a.jsx(L,{})]}):null,a.jsx(R,{id:"middle",display:"center",minSize:"10%",children:"Middle"}),n?a.jsxs(a.Fragment,{children:[a.jsx(L,{}),a.jsx(R,{id:"right",display:"center",minSize:"10%",children:"Right"})]}):null]})]})},Te=()=>{const e=v.useMemo(()=>({getItem:r=>{const i=document.cookie.match(new RegExp(`(^| )${r}=([^;]+)`));return i?i[2]??null:null},setItem:(r,i)=>{document.cookie=`${r}=${i}; max-age=31536000; path=/`}}),[]),{defaultLayout:t,onLayoutChanged:n}=Xe({id:"persistence",storage:e});return a.jsxs(P,{borderWidth:"1px",defaultLayout:t,h:"md",rounded:"l2",onLayoutChanged:n,children:[a.jsx(R,{id:"one",display:"center",children:"One"}),a.jsx(L,{}),a.jsx(R,{id:"two",display:"center",children:"Two"})]})},Pe=()=>{const e=v.useRef(null);return a.jsxs(a.Fragment,{children:[a.jsxs(mt,{gap:"md",children:[a.jsx(Z,{onClick:()=>e.current?.collapse(),children:'Collapse "one"'}),a.jsx(Z,{onClick:()=>e.current?.expand(),children:'Expand "one"'}),a.jsx(Z,{onClick:()=>e.current?.resize("30%"),children:'Resize "one" to 30'}),a.jsx(Z,{onClick:()=>e.current?.resize("50%"),children:'Resize "one" to 50'})]}),a.jsxs(P,{borderWidth:"1px",h:"md",rounded:"l2",children:[a.jsx(R,{collapsedSize:"15%",collapsible:!0,controlRef:e,display:"center",maxSize:"50%",minSize:"30%",children:"One"}),a.jsx(L,{}),a.jsx(R,{display:"center",children:"Two"})]})]})};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center">One</Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...he.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
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
}`,...me.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...ge.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
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
}`,...be.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item defaultSize="30%" display="center">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...ze.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Re.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
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
}`,...ye.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...xe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...ve.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
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
}`,...Se.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
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
}`,...we.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ce.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" onResize={(panelSize, id, prevPanelSize) => {
      console.log("resize", panelSize, id, prevPanelSize);
    }}>
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...Ie.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
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
}`,...je.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`() => {
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
}`,...Le.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`() => {
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
}`,...Te.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pe.parameters?.docs?.source}}};const er=["Basic","Variant","ColorScheme","Orientation","DefaultSize","MinMaxSize","Collapsible","Refs","Icon","NestedResizable","Disabled","onLayoutChange","OnResize","LocalStorage","ConditionalLocalStorage","CookieStorage","CustomControl"];export{he as Basic,ye as Collapsible,ge as ColorScheme,Le as ConditionalLocalStorage,Te as CookieStorage,Pe as CustomControl,ze as DefaultSize,we as Disabled,ve as Icon,je as LocalStorage,Re as MinMaxSize,Se as NestedResizable,Ie as OnResize,be as Orientation,xe as Refs,me as Variant,er as __namedExportsOrder,Zn as default,Ce as onLayoutChange};
