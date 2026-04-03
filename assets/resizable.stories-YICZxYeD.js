import{k as Bt,r as x,j as i,cd as We,v as le,q as At,a1 as $t,Z as Nt,bq as Gt,F as Be,G as Vt,B as Q}from"./iframe-Gd2wA5UH.js";import{u as Ze}from"./index-CV51QTMA.js";import{W as mt}from"./wrap-BfBuHf6U.js";import{G as Ke}from"./grip-vertical-icon-CytHv4A0.js";import{P as _t}from"./props-table-hQP5Z1dz.js";import{u as Ht}from"./index-B69f71zK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvkLS509.js";import"./flex-mFnSfPNF.js";import"./grid-CakiebxH.js";import"./grid-item-Dj5TeVSg.js";import"./for-C62laByO.js";import"./heading-CalVy3eO.js";import"./use-breakpoint-_TvgYbTn.js";import"./use-breakpoint-value-M3SNOELf.js";import"./use-color-mode-value-BkyTpO3Y.js";const Xt=Bt({base:{icon:{alignItems:"center",display:"flex",justifyContent:"center",left:"50%",position:"absolute",top:"50%",translateX:"-50%",translateY:"-50%"},item:{boxSize:"full"},root:{boxSize:"full"},trigger:{position:"relative",transitionDuration:"moderate",transitionProperty:"common",_after:{transitionDuration:"moderate",transitionProperty:"common"}}},variants:{border:{icon:{bg:"colorScheme.muted",color:"colorScheme.fg",py:"1",rounded:"l1"},trigger:{bg:"colorScheme.muted",focusVisibleRing:"none",_after:{position:"absolute"},_hover:{bg:"colorScheme.emphasized"},_focusVisible:{bg:"colorScheme.emphasized"}}},plain:{trigger:{focusVisibleRing:"none",_after:{position:"absolute"}}},spacer:{icon:{color:"colorScheme.fg",transitionDuration:"moderate",transitionProperty:"common"},trigger:{focusVisibleRing:"none",p:"1",_after:{bg:"transparent",display:"block",rounded:"full"},_hover:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}},_focusVisible:{_after:{bg:"colorScheme.bg"},_icon:{color:"transparent"}}}}},props:{orientation:{horizontal:{icon:{transform:"translate(-50%, -50%) rotate(0deg)"}},vertical:{icon:{transform:"translate(-50%, -50%) rotate(90deg)"}}}},compounds:[{css:{trigger:{h:"px",_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"border",orientation:"vertical"},{css:{trigger:{w:"px",_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"border",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",w:"full"}}},variant:"spacer",orientation:"vertical"},{css:{trigger:{_after:{h:"full",w:"2"}}},variant:"spacer",orientation:"horizontal"},{css:{trigger:{_after:{h:"2",left:"0",right:"0",transform:"translateY(-50%)"}}},variant:"plain",orientation:"vertical"},{css:{trigger:{_after:{bottom:"0",top:"0",transform:"translateX(-50%)",w:"2"}}},variant:"plain",orientation:"horizontal"}],defaultProps:{variant:"border",orientation:"horizontal"}});function Yt(e,t){const n=getComputedStyle(e),r=parseFloat(n.fontSize);return t*r}function Jt(e,t){const n=getComputedStyle(e.ownerDocument.body),r=parseFloat(n.fontSize);return t*r}function qt(e){return e/100*window.innerHeight}function Ut(e){return e/100*window.innerWidth}function Zt(e){switch(typeof e){case"number":return[e,"px"];case"string":{const t=parseFloat(e);return e.endsWith("%")?[t,"%"]:e.endsWith("px")?[t,"px"]:e.endsWith("rem")?[t,"rem"]:e.endsWith("em")?[t,"em"]:e.endsWith("vh")?[t,"vh"]:e.endsWith("vw")?[t,"vw"]:[t,"%"]}}}function ie({groupSize:e,panelElement:t,styleProp:n}){let r;const[a,s]=Zt(n);switch(s){case"%":{r=a/100*e;break}case"px":{r=a;break}case"rem":{r=Jt(t,a);break}case"em":{r=Yt(t,a);break}case"vh":{r=qt(a);break}case"vw":{r=Ut(a);break}}return r}function F(e){return parseFloat(e.toFixed(3))}function re({group:e}){const{orientation:t,panels:n}=e;return n.reduce((r,a)=>(r+=t==="horizontal"?a.element.offsetWidth:a.element.offsetHeight,r),0)}function De(e){const{panels:t}=e,n=re({group:e});return n===0?t.map(r=>({groupResizeBehavior:r.panelConstraints.groupResizeBehavior,collapsedSize:0,collapsible:r.panelConstraints.collapsible===!0,defaultSize:void 0,disabled:r.panelConstraints.disabled,minSize:0,maxSize:100,panelId:r.id})):t.map(r=>{const{element:a,panelConstraints:s}=r;let d=0;if(s.collapsedSize!==void 0){const u=ie({groupSize:n,panelElement:a,styleProp:s.collapsedSize});d=F(u/n*100)}let o;if(s.defaultSize!==void 0){const u=ie({groupSize:n,panelElement:a,styleProp:s.defaultSize});o=F(u/n*100)}let l=0;if(s.minSize!==void 0){const u=ie({groupSize:n,panelElement:a,styleProp:s.minSize});l=F(u/n*100)}let c=100;if(s.maxSize!==void 0){const u=ie({groupSize:n,panelElement:a,styleProp:s.maxSize});c=F(u/n*100)}return{groupResizeBehavior:s.groupResizeBehavior,collapsedSize:d,collapsible:s.collapsible===!0,defaultSize:o,disabled:s.disabled,minSize:l,maxSize:c,panelId:r.id}})}function j(e,t="Assertion error"){if(!e)throw Error(t)}function Fe(e,t){return Array.from(t).sort(e==="horizontal"?Kt:Qt)}function Kt(e,t){const n=e.element.offsetLeft-t.element.offsetLeft;return n!==0?n:e.element.offsetWidth-t.element.offsetWidth}function Qt(e,t){const n=e.element.offsetTop-t.element.offsetTop;return n!==0?n:e.element.offsetHeight-t.element.offsetHeight}function gt(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function bt(e,t){return{x:e.x>=t.left&&e.x<=t.right?0:Math.min(Math.abs(e.x-t.left),Math.abs(e.x-t.right)),y:e.y>=t.top&&e.y<=t.bottom?0:Math.min(Math.abs(e.y-t.top),Math.abs(e.y-t.bottom))}}function en({orientation:e,rects:t,targetRect:n}){const r={x:n.x+n.width/2,y:n.y+n.height/2};let a,s=Number.MAX_VALUE;for(const d of t){const{x:o,y:l}=bt(r,d),c=e==="horizontal"?o:l;c<s&&(s=c,a=d)}return j(a,"No rect found"),a}let pe;function tn(){return pe===void 0&&(typeof matchMedia=="function"?pe=!!matchMedia("(pointer:coarse)").matches:pe=!1),pe}function zt(e){const{element:t,orientation:n,panels:r,separators:a}=e,s=Fe(n,Array.from(t.children).filter(gt).map(z=>({element:z}))).map(({element:z})=>z),d=[];let o=!1,l=!1,c=-1,u=-1,b=0,f,w=[];{let z=-1;for(const p of s)p.hasAttribute("data-panel")&&(z++,p.hasAttribute("data-disabled")||(b++,c===-1&&(c=z),u=z))}if(b>1){let z=-1;for(const p of s)if(p.hasAttribute("data-panel")){z++;const m=r.find(h=>h.element===p);if(m){if(f){const h=f.element.getBoundingClientRect(),S=p.getBoundingClientRect();let v;if(l){const R=n==="horizontal"?new DOMRect(h.right,h.top,0,h.height):new DOMRect(h.left,h.bottom,h.width,0),g=n==="horizontal"?new DOMRect(S.left,S.top,0,S.height):new DOMRect(S.left,S.top,S.width,0);switch(w.length){case 0:{v=[R,g];break}case 1:{const O=w[0],T=en({orientation:n,rects:[h,S],targetRect:O.element.getBoundingClientRect()});v=[O,T===h?g:R];break}default:{v=w;break}}}else w.length?v=w:v=[n==="horizontal"?new DOMRect(h.right,S.top,S.left-h.right,S.height):new DOMRect(S.left,h.bottom,S.width,S.top-h.bottom)];for(const R of v){let g="width"in R?R:R.element.getBoundingClientRect();const O=tn()?e.resizeTargetMinimumSize.coarse:e.resizeTargetMinimumSize.fine;if(g.width<O){const E=O-g.width;g=new DOMRect(g.x-E/2,g.y,g.width+E,g.height)}if(g.height<O){const E=O-g.height;g=new DOMRect(g.x,g.y-E/2,g.width,g.height+E)}const T=z<=c||z>u;!o&&!T&&d.push({group:e,groupSize:re({group:e}),panels:[f,m],separator:"width"in R?void 0:R,rect:g}),o=!1}}l=!1,f=m,w=[]}}else if(p.hasAttribute("data-separator")){p.ariaDisabled!==null&&(o=!0);const m=a.find(h=>h.element===p);m?w.push(m):(f=void 0,w=[])}else l=!0}return d}class yt{#e={};addListener(t,n){const r=this.#e[t];return r===void 0?this.#e[t]=[n]:r.includes(n)||r.push(n),()=>{this.removeListener(t,n)}}emit(t,n){const r=this.#e[t];if(r!==void 0)if(r.length===1)r[0].call(null,n);else{let a=!1,s=null;const d=Array.from(r);for(let o=0;o<d.length;o++){const l=d[o];try{l.call(null,n)}catch(c){s===null&&(a=!0,s=c)}}if(a)throw s}}removeAllListeners(){this.#e={}}removeListener(t,n){const r=this.#e[t];if(r!==void 0){const a=r.indexOf(n);a>=0&&r.splice(a,1)}}}let $=new Map;const Rt=new yt;function nn(e){$=new Map($),$.delete(e)}function Qe(e,t){for(const[n]of $)if(n.id===e)return n}function _(e,t){for(const[n,r]of $)if(n.id===e)return r;if(t)throw Error(`Could not find data for Group with id ${e}`)}function q(){return $}function Ae(e,t){return Rt.addListener("groupChange",n=>{n.group.id===e&&t(n)})}function G(e,t){const n=$.get(e);$=new Map($),$.set(e,t),Rt.emit("groupChange",{group:e,prev:n,next:t})}function rn(e,t,n){let r,a={x:1/0,y:1/0};for(const s of t){const d=bt(n,s.rect);switch(e){case"horizontal":{d.x<=a.x&&(r=s,a=d);break}case"vertical":{d.y<=a.y&&(r=s,a=d);break}}}return r?{distance:a,hitRegion:r}:void 0}function on(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function an(e,t){if(e===t)throw new Error("Cannot compare node with itself");const n={a:nt(e),b:nt(t)};let r;for(;n.a.at(-1)===n.b.at(-1);)r=n.a.pop(),n.b.pop();j(r,"Stacking order can only be calculated for elements with a common ancestor");const a={a:tt(et(n.a)),b:tt(et(n.b))};if(a.a===a.b){const s=r.childNodes,d={a:n.a.at(-1),b:n.b.at(-1)};let o=s.length;for(;o--;){const l=s[o];if(l===d.a)return 1;if(l===d.b)return-1}}return Math.sign(a.a-a.b)}const sn=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function ln(e){const t=getComputedStyle(xt(e)??e).display;return t==="flex"||t==="inline-flex"}function dn(e){const t=getComputedStyle(e);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||ln(e))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||sn.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function et(e){let t=e.length;for(;t--;){const n=e[t];if(j(n,"Missing node"),dn(n))return n}return null}function tt(e){return e&&Number(getComputedStyle(e).zIndex)||0}function nt(e){const t=[];for(;e;)t.push(e),e=xt(e);return t}function xt(e){const{parentNode:t}=e;return on(t)?t.host:t}function cn(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function un({groupElement:e,hitRegion:t,pointerEventTarget:n}){if(!gt(n)||n.contains(e)||e.contains(n))return!0;if(an(n,e)>0){let r=n;for(;r;){if(r.contains(e))return!0;if(cn(r.getBoundingClientRect(),t))return!1;r=r.parentElement}}return!0}function $e(e,t){const n=[];return t.forEach((r,a)=>{if(a.disabled)return;const s=zt(a),d=rn(a.orientation,s,{x:e.clientX,y:e.clientY});d&&d.distance.x<=0&&d.distance.y<=0&&un({groupElement:a.element,hitRegion:d.hitRegion.rect,pointerEventTarget:e.target})&&n.push(d.hitRegion)}),n}function pn(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function W(e,t,n=0){return Math.abs(F(e)-F(t))<=n}function A(e,t){return W(e,t)?0:e>t?1:-1}function ee({overrideDisabledPanels:e,panelConstraints:t,prevSize:n,size:r}){const{collapsedSize:a=0,collapsible:s,disabled:d,maxSize:o=100,minSize:l=0}=t;if(d&&!e)return n;if(A(r,l)<0)if(s){const c=(a+l)/2;A(r,c)<0?r=a:r=l}else r=l;return r=Math.min(o,r),r=F(r),r}function de({delta:e,initialLayout:t,panelConstraints:n,pivotIndices:r,prevLayout:a,trigger:s}){if(W(e,0))return t;const d=s==="imperative-api",o=Object.values(t),l=Object.values(a),c=[...o],[u,b]=r;j(u!=null,"Invalid first pivot index"),j(b!=null,"Invalid second pivot index");let f=0;switch(s){case"keyboard":{{const p=e<0?b:u,m=n[p];j(m,`Panel constraints not found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:v=0}=m;if(S){const R=o[p];if(j(R!=null,`Previous layout not found for panel index ${p}`),W(R,h)){const g=v-R;A(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}{const p=e<0?u:b,m=n[p];j(m,`No panel constraints found for index ${p}`);const{collapsedSize:h=0,collapsible:S,minSize:v=0}=m;if(S){const R=o[p];if(j(R!=null,`Previous layout not found for panel index ${p}`),W(R,v)){const g=R-h;A(g,Math.abs(e))>0&&(e=e<0?0-g:g)}}}break}default:{const p=e<0?b:u,m=n[p];j(m,`Panel constraints not found for index ${p}`);const h=o[p],{collapsible:S,collapsedSize:v,minSize:R}=m;if(S&&A(h,R)<0)if(e>0){const g=R-v,O=g/2,T=h+e;A(T,R)<0&&(e=A(e,O)<=0?0:g)}else{const g=R-v,O=100-g/2,T=h-e;A(T,R)<0&&(e=A(100+e,O)>0?0:-g)}break}}{const p=e<0?1:-1;let m=e<0?b:u,h=0;for(;;){const v=o[m];j(v!=null,`Previous layout not found for panel index ${m}`);const R=ee({overrideDisabledPanels:d,panelConstraints:n[m],prevSize:v,size:100})-v;if(h+=R,m+=p,m<0||m>=n.length)break}const S=Math.min(Math.abs(e),Math.abs(h));e=e<0?0-S:S}{let p=e<0?u:b;for(;p>=0&&p<n.length;){const m=Math.abs(e)-Math.abs(f),h=o[p];j(h!=null,`Previous layout not found for panel index ${p}`);const S=h-m,v=ee({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:h,size:S});if(!W(h,v)&&(f+=h-v,c[p]=v,f.toFixed(3).localeCompare(Math.abs(e).toFixed(3),void 0,{numeric:!0})>=0))break;e<0?p--:p++}}if(pn(l,c))return a;{const p=e<0?b:u,m=o[p];j(m!=null,`Previous layout not found for panel index ${p}`);const h=m+f,S=ee({overrideDisabledPanels:d,panelConstraints:n[p],prevSize:m,size:h});if(c[p]=S,!W(S,h)){let v=h-S,R=e<0?b:u;for(;R>=0&&R<n.length;){const g=c[R];j(g!=null,`Previous layout not found for panel index ${R}`);const O=g+v,T=ee({overrideDisabledPanels:d,panelConstraints:n[R],prevSize:g,size:O});if(W(g,T)||(v-=T-g,c[R]=T),W(v,0))break;e>0?R--:R++}}}const w=Object.values(c).reduce((p,m)=>m+p,0);if(!W(w,100,.1))return a;const z=Object.keys(a);return c.reduce((p,m,h)=>(p[z[h]]=m,p),{})}function X(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(t[n]===void 0||A(e[n],t[n])!==0)return!1;return!0}function Y({layout:e,panelConstraints:t}){const n=Object.values(e),r=[...n],a=r.reduce((o,l)=>o+l,0);if(r.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${r.map(o=>`${o}%`).join(", ")}`);if(!W(a,100)&&r.length>0)for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=100/a*l;r[o]=c}let s=0;for(let o=0;o<t.length;o++){const l=n[o];j(l!=null,`No layout data found for index ${o}`);const c=r[o];j(c!=null,`No layout data found for index ${o}`);const u=ee({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});c!=u&&(s+=c-u,r[o]=u)}if(!W(s,0))for(let o=0;o<t.length;o++){const l=r[o];j(l!=null,`No layout data found for index ${o}`);const c=l+s,u=ee({overrideDisabledPanels:!0,panelConstraints:t[o],prevSize:l,size:c});if(l!==u&&(s-=u-l,r[o]=u,W(s,0)))break}const d=Object.keys(e);return r.reduce((o,l,c)=>(o[d[c]]=l,o),{})}function vt({groupId:e,panelId:t}){const n=()=>{const o=q();for(const[l,{defaultLayoutDeferred:c,derivedPanelConstraints:u,layout:b,groupSize:f,separatorToPanels:w}]of o)if(l.id===e)return{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:l,groupSize:f,layout:b,separatorToPanels:w};throw Error(`Group ${e} not found`)},r=()=>{const o=n().derivedPanelConstraints.find(l=>l.panelId===t);if(o!==void 0)return o;throw Error(`Panel constraints not found for Panel ${t}`)},a=()=>{const o=n().group.panels.find(l=>l.id===t);if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},s=()=>{const o=n().layout[t];if(o!==void 0)return o;throw Error(`Layout not found for Panel ${t}`)},d=o=>{const l=s();if(o===l)return;const{defaultLayoutDeferred:c,derivedPanelConstraints:u,group:b,groupSize:f,layout:w,separatorToPanels:z}=n(),p=b.panels.findIndex(v=>v.id===t),m=p===b.panels.length-1,h=de({delta:m?l-o:o-l,initialLayout:w,panelConstraints:u,pivotIndices:m?[p-1,p]:[p,p+1],prevLayout:w,trigger:"imperative-api"}),S=Y({layout:h,panelConstraints:u});X(w,S)||G(b,{defaultLayoutDeferred:c,derivedPanelConstraints:u,groupSize:f,layout:S,separatorToPanels:z})};return{collapse:()=>{const{collapsible:o,collapsedSize:l}=r(),{mutableValues:c}=a(),u=s();o&&u!==l&&(c.expandToSize=u,d(l))},expand:()=>{const{collapsible:o,collapsedSize:l,minSize:c}=r(),{mutableValues:u}=a(),b=s();if(o&&b===l){let f=u.expandToSize??c;f===0&&(f=1),d(f)}},getSize:()=>{const{group:o}=n(),l=s(),{element:c}=a(),u=o.orientation==="horizontal"?c.offsetWidth:c.offsetHeight;return{asPercentage:l,inPixels:u}},isCollapsed:()=>{const{collapsible:o,collapsedSize:l}=r(),c=s();return o&&W(l,c)},resize:o=>{const{group:l}=n(),{element:c}=a(),u=re({group:l}),b=ie({groupSize:u,panelElement:c,styleProp:o}),f=F(b/u*100);d(f)}}}function rt(e){if(e.defaultPrevented)return;const t=q();$e(e,t).forEach(n=>{if(n.separator){const r=n.panels.find(a=>a.panelConstraints.defaultSize!==void 0);if(r){const a=r.panelConstraints.defaultSize,s=vt({groupId:n.group.id,panelId:r.id});s&&a!==void 0&&(s.resize(a),e.preventDefault())}}})}function ke(e){const t=q();for(const[n]of t)if(n.separators.some(r=>r.element===e))return n;throw Error("Could not find parent Group for separator element")}function St({groupId:e}){const t=()=>{const n=q();for(const[r,a]of n)if(r.id===e)return{group:r,...a};throw Error(`Could not find Group with id "${e}"`)};return{getLayout(){const{defaultLayoutDeferred:n,layout:r}=t();return n?{}:r},setLayout(n){const{defaultLayoutDeferred:r,derivedPanelConstraints:a,group:s,groupSize:d,layout:o,separatorToPanels:l}=t(),c=Y({layout:n,panelConstraints:a});return r?o:(X(o,c)||G(s,{defaultLayoutDeferred:r,derivedPanelConstraints:a,groupSize:d,layout:c,separatorToPanels:l}),c)}}}function H(e,t){const n=ke(e),r=_(n.id,!0),a=n.separators.find(u=>u.element===e);j(a,"Matching separator not found");const s=r.separatorToPanels.get(a);j(s,"Matching panels not found");const d=s.map(u=>n.panels.indexOf(u)),o=St({groupId:n.id}).getLayout(),l=de({delta:t,initialLayout:o,panelConstraints:r.derivedPanelConstraints,pivotIndices:d,prevLayout:o,trigger:"keyboard"}),c=Y({layout:l,panelConstraints:r.derivedPanelConstraints});X(o,c)||G(n,{defaultLayoutDeferred:r.defaultLayoutDeferred,derivedPanelConstraints:r.derivedPanelConstraints,groupSize:r.groupSize,layout:c,separatorToPanels:r.separatorToPanels})}function ot(e){if(e.defaultPrevented)return;const t=e.currentTarget,n=ke(t);if(!n.disabled)switch(e.key){case"ArrowDown":{e.preventDefault(),n.orientation==="vertical"&&H(t,5);break}case"ArrowLeft":{e.preventDefault(),n.orientation==="horizontal"&&H(t,-5);break}case"ArrowRight":{e.preventDefault(),n.orientation==="horizontal"&&H(t,5);break}case"ArrowUp":{e.preventDefault(),n.orientation==="vertical"&&H(t,-5);break}case"End":{e.preventDefault(),H(t,100);break}case"Enter":{e.preventDefault();const r=ke(t),a=_(r.id,!0),{derivedPanelConstraints:s,layout:d,separatorToPanels:o}=a,l=r.separators.find(f=>f.element===t);j(l,"Matching separator not found");const c=o.get(l);j(c,"Matching panels not found");const u=c[0],b=s.find(f=>f.panelId===u.id);if(j(b,"Panel metadata not found"),b.collapsible){const f=d[u.id],w=b.collapsedSize===f?r.mutableState.expandedPanelSizes[u.id]??b.minSize:b.collapsedSize;H(t,w-f)}break}case"F6":{e.preventDefault();const r=ke(t).separators.map(d=>d.element),a=Array.from(r).findIndex(d=>d===e.currentTarget);j(a!==null,"Index not found");const s=e.shiftKey?a>0?a-1:r.length-1:a+1<r.length?a+1:0;r[s].focus({preventScroll:!0});break}case"Home":{e.preventDefault(),H(t,-100);break}}}let te={cursorFlags:0,state:"inactive"};const Ne=new yt;function J(){return te}function fn(e){return Ne.addListener("change",e)}function hn(e){const t=te,n={...te};n.cursorFlags=e,te=n,Ne.emit("change",{prev:t,next:n})}function ne(e){const t=te;te=e,Ne.emit("change",{prev:t,next:e})}function at(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=q(),n=$e(e,t),r=new Map;let a=!1;n.forEach(s=>{s.separator&&(a||(a=!0,s.separator.element.focus({preventScroll:!0})));const d=t.get(s.group);d&&r.set(s.group,d.layout)}),ne({cursorFlags:0,hitRegions:n,initialLayoutMap:r,pointerDownAtPoint:{x:e.clientX,y:e.clientY},state:"active"}),n.length&&e.preventDefault()}const mn=e=>e,Ee=()=>{},wt=1,Ct=2,It=4,jt=8,it=3,st=12;let fe;function lt(){return fe===void 0&&(fe=!1,typeof window<"u"&&(window.navigator.userAgent.includes("Chrome")||window.navigator.userAgent.includes("Firefox"))&&(fe=!0)),fe}function gn({cursorFlags:e,groups:t,state:n}){let r=0,a=0;switch(n){case"active":case"hover":t.forEach(s=>{if(!s.mutableState.disableCursor)switch(s.orientation){case"horizontal":{r++;break}case"vertical":{a++;break}}})}if(!(r===0&&a===0)){switch(n){case"active":{if(e&&lt()){const s=(e&wt)!==0,d=(e&Ct)!==0,o=(e&It)!==0,l=(e&jt)!==0;if(s)return o?"se-resize":l?"ne-resize":"e-resize";if(d)return o?"sw-resize":l?"nw-resize":"w-resize";if(o)return"s-resize";if(l)return"n-resize"}break}}return lt()?r>0&&a>0?"move":r>0?"ew-resize":"ns-resize":r>0&&a>0?"grab":r>0?"col-resize":"row-resize"}}const dt=new WeakMap;function Ge(e){if(e.defaultView===null||e.defaultView===void 0)return;let{prevStyle:t,styleSheet:n}=dt.get(e)??{};n===void 0&&(n=new e.defaultView.CSSStyleSheet,e.adoptedStyleSheets&&e.adoptedStyleSheets.push(n));const r=J();switch(r.state){case"active":case"hover":{const a=gn({cursorFlags:r.cursorFlags,groups:r.hitRegions.map(d=>d.group),state:r.state}),s=`*, *:hover {cursor: ${a} !important; }`;if(t===s)return;t=s,a?n.cssRules.length===0?n.insertRule(s):n.replaceSync(s):n.cssRules.length===1&&n.deleteRule(0);break}case"inactive":{t=void 0,n.cssRules.length===1&&n.deleteRule(0);break}}dt.set(e,{prevStyle:t,styleSheet:n})}function Lt({document:e,event:t,hitRegions:n,initialLayoutMap:r,mountedGroups:a,pointerDownAtPoint:s,prevCursorFlags:d}){let o=0;n.forEach(c=>{const{group:u,groupSize:b}=c,{orientation:f,panels:w}=u,{disableCursor:z}=u.mutableState;let p=0;s?f==="horizontal"?p=(t.clientX-s.x)/b*100:p=(t.clientY-s.y)/b*100:f==="horizontal"?p=t.clientX<0?-100:100:p=t.clientY<0?-100:100;const m=r.get(u),h=a.get(u);if(!m||!h)return;const{defaultLayoutDeferred:S,derivedPanelConstraints:v,groupSize:R,layout:g,separatorToPanels:O}=h;if(v&&g&&O){const T=de({delta:p,initialLayout:m,panelConstraints:v,pivotIndices:c.panels.map(E=>w.indexOf(E)),prevLayout:g,trigger:"mouse-or-touch"});if(X(T,g)){if(p!==0&&!z)switch(f){case"horizontal":{o|=p<0?wt:Ct;break}case"vertical":{o|=p<0?It:jt;break}}}else G(c.group,{defaultLayoutDeferred:S,derivedPanelConstraints:v,groupSize:R,layout:T,separatorToPanels:O})}});let l=0;t.movementX===0?l|=d&it:l|=o&it,t.movementY===0?l|=d&st:l|=o&st,hn(l),Ge(e)}function ct(e){const t=q(),n=J();n.state==="active"&&Lt({document:e.currentTarget,event:e,hitRegions:n.hitRegions,initialLayoutMap:n.initialLayoutMap,mountedGroups:t,prevCursorFlags:n.cursorFlags})}function ut(e){if(e.defaultPrevented)return;const t=J(),n=q();switch(t.state){case"active":{if(e.buttons===0){ne({cursorFlags:0,state:"inactive"}),t.hitRegions.forEach(r=>{const a=_(r.group.id,!0);G(r.group,a)});return}for(const r of t.hitRegions)if(r.separator){const{element:a}=r.separator;a.hasPointerCapture?.(e.pointerId)||a.setPointerCapture?.(e.pointerId)}Lt({document:e.currentTarget,event:e,hitRegions:t.hitRegions,initialLayoutMap:t.initialLayoutMap,mountedGroups:n,pointerDownAtPoint:t.pointerDownAtPoint,prevCursorFlags:t.cursorFlags});break}default:{const r=$e(e,n);r.length===0?t.state!=="inactive"&&ne({cursorFlags:0,state:"inactive"}):ne({cursorFlags:0,hitRegions:r,state:"hover"}),Ge(e.currentTarget);break}}}function pt(e){e.relatedTarget instanceof HTMLIFrameElement&&J().state==="hover"&&ne({cursorFlags:0,state:"inactive"})}function ft(e){if(e.defaultPrevented||e.pointerType==="mouse"&&e.button>0)return;const t=J();t.state==="active"&&(ne({cursorFlags:0,state:"inactive"}),t.hitRegions.length>0&&(Ge(e.currentTarget),t.hitRegions.forEach(n=>{const r=_(n.group.id,!0);G(n.group,r)}),e.preventDefault()))}function ht(e){let t=0,n=0;const r={};for(const s of e)if(s.defaultSize!==void 0){t++;const d=F(s.defaultSize);n+=d,r[s.panelId]=d}else r[s.panelId]=void 0;const a=e.length-t;if(a!==0){const s=F((100-n)/a);for(const d of e)d.defaultSize===void 0&&(r[d.panelId]=s)}return r}function bn(e,t,n){if(!n[0])return;const r=e.panels.find(l=>l.element===t);if(!r||!r.onResize)return;const a=re({group:e}),s=e.orientation==="horizontal"?r.element.offsetWidth:r.element.offsetHeight,d=r.mutableValues.prevSize,o={asPercentage:F(s/a*100),inPixels:s};r.mutableValues.prevSize=o,r.onResize(o,r.id,d)}function zn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function yn({group:e,nextGroupSize:t,prevGroupSize:n,prevLayout:r}){if(n<=0||t<=0||n===t)return r;let a=0,s=0,d=!1;const o=new Map,l=[];for(const b of e.panels){const f=r[b.id]??0;if(b.panelConstraints.groupResizeBehavior==="preserve-pixel-size"){d=!0;const w=f/100*n,z=F(w/t*100);o.set(b.id,z),a+=z}else l.push(b.id),s+=f}if(!d||l.length===0)return r;const c=100-a,u={...r};if(o.forEach((b,f)=>{u[f]=b}),s>0)for(const b of l){const f=r[b]??0;u[b]=F(f/s*c)}else{const b=F(c/l.length);for(const f of l)u[f]=b}return u}function Rn(e,t){const n=e.map(a=>a.id),r=Object.keys(t);if(n.length!==r.length)return!1;for(const a of n)if(!r.includes(a))return!1;return!0}const K=new Map;function xn(e){let t=!0;j(e.element.ownerDocument.defaultView,"Cannot register an unmounted Group");const n=e.element.ownerDocument.defaultView.ResizeObserver,r=new Set,a=new Set,s=new n(z=>{for(const p of z){const{borderBoxSize:m,target:h}=p;if(h===e.element){if(t){const S=re({group:e});if(S===0)return;const v=_(e.id);if(!v)return;const R=De(e),g=v.defaultLayoutDeferred?ht(R):v.layout,O=yn({group:e,nextGroupSize:S,prevGroupSize:v.groupSize,prevLayout:g}),T=Y({layout:O,panelConstraints:R});if(!v.defaultLayoutDeferred&&X(v.layout,T)&&zn(v.derivedPanelConstraints,R)&&v.groupSize===S)return;G(e,{defaultLayoutDeferred:!1,derivedPanelConstraints:R,groupSize:S,layout:T,separatorToPanels:v.separatorToPanels})}}else bn(e,h,m)}});s.observe(e.element),e.panels.forEach(z=>{j(!r.has(z.id),`Panel ids must be unique; id "${z.id}" was used more than once`),r.add(z.id),z.onResize&&s.observe(z.element)});const d=re({group:e}),o=De(e),l=e.panels.map(({id:z})=>z).join(",");let c=e.mutableState.defaultLayout;c&&(Rn(e.panels,c)||(c=void 0));const u=e.mutableState.layouts[l]??c??ht(o),b=Y({layout:u,panelConstraints:o}),f=e.element.ownerDocument;K.set(f,(K.get(f)??0)+1);const w=new Map;return zt(e).forEach(z=>{z.separator&&w.set(z.separator,z.panels)}),G(e,{defaultLayoutDeferred:d===0,derivedPanelConstraints:o,groupSize:d,layout:b,separatorToPanels:w}),e.separators.forEach(z=>{j(!a.has(z.id),`Separator ids must be unique; id "${z.id}" was used more than once`),a.add(z.id),z.element.addEventListener("keydown",ot)}),K.get(f)===1&&(f.addEventListener("dblclick",rt,!0),f.addEventListener("pointerdown",at,!0),f.addEventListener("pointerleave",ct),f.addEventListener("pointermove",ut),f.addEventListener("pointerout",pt),f.addEventListener("pointerup",ft,!0)),function(){t=!1,K.set(f,Math.max(0,(K.get(f)??0)-1)),nn(e),e.separators.forEach(z=>{z.element.removeEventListener("keydown",ot)}),K.get(f)||(f.removeEventListener("dblclick",rt,!0),f.removeEventListener("pointerdown",at,!0),f.removeEventListener("pointerleave",ct),f.removeEventListener("pointermove",ut),f.removeEventListener("pointerout",pt),f.removeEventListener("pointerup",ft,!0)),s.disconnect()}}function vn(){const[e,t]=x.useState({}),n=x.useCallback(()=>t({}),[]);return[e,n]}function Ve(e){const t=x.useId();return`${e??t}`}const U=typeof window<"u"?x.useLayoutEffect:x.useEffect;function se(e){const t=x.useRef(e);return U(()=>{t.current=e},[e]),x.useCallback((...n)=>t.current?.(...n),[t])}function _e(...e){return se(t=>{e.forEach(n=>{if(n)switch(typeof n){case"function":{n(t);break}case"object":{n.current=t;break}}})})}function He(e){const t=x.useRef({...e});return U(()=>{for(const n in e)t.current[n]=e[n]},[e]),t.current}const Tt=x.createContext(null);function Sn(e,t){const n=x.useRef({getLayout:()=>({}),setLayout:mn});x.useImperativeHandle(t,()=>n.current,[]),U(()=>{Object.assign(n.current,St({groupId:e}))})}function Pt({children:e,className:t,defaultLayout:n,disableCursor:r,disabled:a,elementRef:s,groupRef:d,id:o,onLayoutChange:l,onLayoutChanged:c,orientation:u="horizontal",resizeTargetMinimumSize:b={coarse:20,fine:10},style:f,...w}){const z=x.useRef({onLayoutChange:{},onLayoutChanged:{}}),p=se(C=>{X(z.current.onLayoutChange,C)||(z.current.onLayoutChange=C,l?.(C))}),m=se(C=>{X(z.current.onLayoutChanged,C)||(z.current.onLayoutChanged=C,c?.(C))}),h=Ve(o),S=x.useRef(null),[v,R]=vn(),g=x.useRef({lastExpandedPanelSizes:{},layouts:{},panels:[],resizeTargetMinimumSize:b,separators:[]}),O=_e(S,s);Sn(h,d);const T=se((C,I)=>{const M=J(),P=Qe(C),D=_(C);if(D){let B=!1;return M.state==="active"&&(B=M.hitRegions.some(oe=>oe.group===P)),{flexGrow:D.layout[I]??1,pointerEvents:B?"none":void 0}}if(n?.[I])return{flexGrow:n?.[I]}}),E=He({defaultLayout:n,disableCursor:r}),Z=x.useMemo(()=>({get disableCursor(){return!!E.disableCursor},getPanelStyles:T,id:h,orientation:u,registerPanel:C=>{const I=g.current;return I.panels=Fe(u,[...I.panels,C]),R(),()=>{I.panels=I.panels.filter(M=>M!==C),R()}},registerSeparator:C=>{const I=g.current;return I.separators=Fe(u,[...I.separators,C]),R(),()=>{I.separators=I.separators.filter(M=>M!==C),R()}},togglePanelDisabled:(C,I)=>{const M=g.current.panels.find(B=>B.id===C);M&&(M.panelConstraints.disabled=I);const P=Qe(h),D=_(h);P&&D&&G(P,{...D,derivedPanelConstraints:De(P)})},toggleSeparatorDisabled:(C,I)=>{const M=g.current.separators.find(P=>P.id===C);M&&(M.disabled=I)}}),[T,h,R,u,E]),V=x.useRef(null);return U(()=>{const C=S.current;if(C===null)return;const I=g.current;let M;if(E.defaultLayout!==void 0&&Object.keys(E.defaultLayout).length===I.panels.length){M={};for(const ae of I.panels){const ce=E.defaultLayout[ae.id];ce!==void 0&&(M[ae.id]=ce)}}const P={disabled:!!a,element:C,id:h,mutableState:{defaultLayout:M,disableCursor:!!E.disableCursor,expandedPanelSizes:g.current.lastExpandedPanelSizes,layouts:g.current.layouts},orientation:u,panels:I.panels,resizeTargetMinimumSize:I.resizeTargetMinimumSize,separators:I.separators};V.current=P;const D=xn(P),{defaultLayoutDeferred:B,derivedPanelConstraints:oe,layout:qe}=_(P.id,!0);!B&&oe.length>0&&(p(qe),m(qe));const Mt=Ae(h,ae=>{const{defaultLayoutDeferred:ce,derivedPanelConstraints:Ue,layout:ue}=ae.next;if(ce||Ue.length===0)return;const Et=P.panels.map(({id:N})=>N).join(",");P.mutableState.layouts[Et]=ue,Ue.forEach(N=>{if(N.collapsible){const{layout:Me}=ae.prev??{};if(Me){const Dt=W(N.collapsedSize,ue[N.panelId]),Ft=W(N.collapsedSize,Me[N.panelId]);Dt&&!Ft&&(P.mutableState.expandedPanelSizes[N.panelId]=Me[N.panelId])}}});const Wt=J().state!=="active";p(ue),Wt&&m(ue)});return()=>{V.current=null,D(),Mt()}},[a,h,m,p,u,v,E]),x.useEffect(()=>{const C=V.current;C&&(C.mutableState.defaultLayout=n,C.mutableState.disableCursor=!!r)}),i.jsx(Tt.Provider,{value:Z,children:i.jsx("div",{...w,className:t,"data-group":!0,"data-testid":h,id:h,ref:O,style:{height:"100%",width:"100%",overflow:"hidden",...f,display:"flex",flexDirection:u==="horizontal"?"row":"column",flexWrap:"nowrap",touchAction:u==="horizontal"?"pan-y":"pan-x"},children:e})})}Pt.displayName="Group";function Oe(e,t){return`react-resizable-panels:${[e,...t].join(":")}`}function wn({id:e,panelIds:t,storage:n}){const r=Oe(e,[]),a=n.getItem(r);if(a)try{const s=JSON.parse(a);if(t){const d=t.join(","),o=s[d];if(o&&Array.isArray(o.layout)&&t.length===o.layout.length){const l={};for(let c=0;c<t.length;c++)l[t[c]]=o.layout[c];return l}}else{const d=Object.keys(s);if(d.length===1){const o=s[d[0]];if(o&&Array.isArray(o.layout)){const l=d[0].split(",");if(l.length===o.layout.length){const c={};for(let u=0;u<l.length;u++)c[l[u]]=o.layout[u];return c}}}}}catch{}}function Xe({debounceSaveMs:e=100,panelIds:t,storage:n=localStorage,...r}){const a=t!==void 0,s="id"in r?r.id:r.groupId,d=Oe(s,t??[]),o=x.useSyncExternalStore(Cn,()=>n.getItem(d),()=>n.getItem(d)),l=x.useMemo(()=>{if(o){const p=JSON.parse(o),m=Object.values(p);if(Array.from(m).every(h=>typeof h=="number"))return p}},[o]),c=x.useMemo(()=>{if(!l)return wn({id:s,panelIds:t,storage:n})},[l,s,t,n]),u=l??c,b=x.useRef(null),f=x.useCallback(()=>{const p=b.current;p&&(b.current=null,clearTimeout(p))},[]);x.useLayoutEffect(()=>()=>{f()},[f]);const w=x.useCallback(p=>{f();let m;a?m=Oe(s,Object.keys(p)):m=Oe(s,[]);try{n.setItem(m,JSON.stringify(p))}catch(h){console.error(h)}},[f,a,s,n]),z=x.useCallback(p=>{f(),e===0?w(p):b.current=setTimeout(()=>{w(p)},e)},[f,e,w]);return{defaultLayout:u,onLayoutChange:z,onLayoutChanged:w}}function Cn(){return function(){}}function In(){return x.useRef(null)}function Ye(){const e=x.useContext(Tt);return j(e,"Group Context not found; did you render a Panel or Separator outside of a Group?"),e}function jn(e,t){const{id:n}=Ye(),r=x.useRef({collapse:Ee,expand:Ee,getSize:()=>({asPercentage:0,inPixels:0}),isCollapsed:()=>!1,resize:Ee});x.useImperativeHandle(t,()=>r.current,[]),U(()=>{Object.assign(r.current,vt({groupId:n,panelId:e}))})}function kt({children:e,className:t,collapsedSize:n="0%",collapsible:r=!1,defaultSize:a,disabled:s,elementRef:d,groupResizeBehavior:o="preserve-relative-size",id:l,maxSize:c="100%",minSize:u="0%",onResize:b,panelRef:f,style:w,...z}){const p=!!l,m=Ve(l),h=He({disabled:s}),S=x.useRef(null),v=_e(S,d),{getPanelStyles:R,id:g,orientation:O,registerPanel:T,togglePanelDisabled:E}=Ye(),Z=b!==null,V=se((P,D,B)=>{b?.(P,l,B)});U(()=>{const P=S.current;if(P!==null){const D={element:P,id:m,idIsStable:p,mutableValues:{expandToSize:void 0,prevSize:void 0},onResize:Z?V:void 0,panelConstraints:{groupResizeBehavior:o,collapsedSize:n,collapsible:r,defaultSize:a,disabled:h.disabled,maxSize:c,minSize:u}};return T(D)}},[o,n,r,a,Z,m,p,c,u,V,T,h]),x.useEffect(()=>{E(m,!!s)},[s,m,E]),jn(m,f);const C=()=>{const P=R(g,m);if(P)return JSON.stringify(P)},I=x.useSyncExternalStore(P=>Ae(g,P),C,C);let M;return I?M=JSON.parse(I):a?M={flexGrow:void 0,flexShrink:void 0,flexBasis:a}:M={flexGrow:1},i.jsx("div",{...z,"data-disabled":s||void 0,"data-panel":!0,"data-testid":m,id:m,ref:v,style:{...Ln,display:"flex",flexBasis:0,flexShrink:1,overflow:"visible",...M},children:i.jsx("div",{className:t,style:{maxHeight:"100%",maxWidth:"100%",flexGrow:1,overflow:"auto",...w,touchAction:O==="horizontal"?"pan-y":"pan-x"},children:e})})}kt.displayName="Panel";const Ln={minHeight:0,maxHeight:"100%",height:"auto",minWidth:0,maxWidth:"100%",width:"auto",border:"none",borderWidth:0,padding:0,margin:0};function Tn(){return x.useRef(null)}function Pn({layout:e,panelConstraints:t,panelId:n,panelIndex:r}){let a,s;const d=e[n],o=t.find(l=>l.panelId===n);if(o){const l=o.maxSize,c=o.collapsible?o.collapsedSize:o.minSize,u=[r,r+1];s=Y({layout:de({delta:c-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n],a=Y({layout:de({delta:l-d,initialLayout:e,panelConstraints:t,pivotIndices:u,prevLayout:e}),panelConstraints:t})[n]}return{valueControls:n,valueMax:a,valueMin:s,valueNow:d}}function Ot({children:e,className:t,disabled:n,elementRef:r,id:a,style:s,...d}){const o=Ve(a),l=He({disabled:n}),[c,u]=x.useState({}),[b,f]=x.useState("inactive"),w=x.useRef(null),z=_e(w,r),{disableCursor:p,id:m,orientation:h,registerSeparator:S,toggleSeparatorDisabled:v}=Ye(),R=h==="horizontal"?"vertical":"horizontal";U(()=>{const O=w.current;if(O!==null){const T={disabled:l.disabled,element:O,id:o},E=S(T),Z=fn(C=>{f(C.next.state!=="inactive"&&C.next.hitRegions.some(I=>I.separator===T)?C.next.state:"inactive")}),V=Ae(m,C=>{const{derivedPanelConstraints:I,layout:M,separatorToPanels:P}=C.next,D=P.get(T);if(D){const B=D[0],oe=D.indexOf(B);u(Pn({layout:M,panelConstraints:I,panelId:B.id,panelIndex:oe}))}});return()=>{Z(),V(),E()}}},[m,o,S,l]),x.useEffect(()=>{v(o,!!n)},[n,o,v]);let g;return n&&!p&&(g="not-allowed"),i.jsx("div",{...d,"aria-controls":c.valueControls,"aria-disabled":n||void 0,"aria-orientation":R,"aria-valuemax":c.valueMax,"aria-valuemin":c.valueMin,"aria-valuenow":c.valueNow,children:e,className:t,"data-separator":n?"disabled":b,"data-testid":o,id:o,ref:z,role:"separator",style:{flexBasis:"auto",cursor:g,...s,flexGrow:0,flexShrink:0,touchAction:"none"},tabIndex:n?void 0:0})}Ot.displayName="Separator";const[kn,On]=At({name:"ResizableContext"}),Mn=({controlRef:e,disabled:t,orientation:n="horizontal",...r}={})=>{const a=In(),s=x.useCallback((d={})=>({disabled:t,orientation:n,...r,...d,style:{height:void 0,width:void 0,...r.style,...d.style},elementRef:le(d.elementRef,r.ref),groupRef:le(d.groupRef,a,e),onLayoutChange:We(d.onLayoutChange,r.onLayoutChange),onLayoutChanged:We(d.onLayoutChanged,r.onLayoutChanged)}),[t,n,a,e,r]);return{disabled:t,groupRef:a,orientation:n,getRootProps:s}},En=({controlRef:e,...t})=>{const n=Tn(),r=x.useCallback((a={})=>({...t,...a,elementRef:le(a.elementRef,t.ref),panelRef:le(a.panelRef,n,e),onResize:We(a.onResize,t.onResize)}),[n,e,t]);return{panelRef:n,getItemProps:r}},Wn=({disabled:e,...t})=>{const{disabled:n,groupRef:r,orientation:a}=On(),s=e||n,d=x.useCallback(c=>{c.preventDefault();const u=r.current?.getLayout();if(!u)return;const f=100/Object.keys(u).length,w=Object.fromEntries(Object.keys(u).map(z=>[z,f]));r.current?.setLayout(w)},[r]),o=x.useCallback((c={})=>({"aria-disabled":Gt(s),"aria-orientation":a,"data-disabled":Nt(s),disabled:s,tabIndex:s?-1:0,...t,...c,elementRef:le(c.elementRef,t.ref),onDoubleClick:$t(c.onDoubleClick,t.onDoubleClick,d)}),[a,s,t,d]);return{getIconProps:x.useCallback((c={})=>({"data-icon":"",...c}),[]),getTriggerProps:o}},{withContext:Je,withProvider:Dn}=Vt("resizable",Xt),k=Dn(({children:e,orientation:t,...n})=>{const r=Ht(t),{disabled:a,groupRef:s,orientation:d,getRootProps:o}=Mn({orientation:r,...n}),l=x.useMemo(()=>({disabled:a,groupRef:s,orientation:d}),[a,d,s]);return i.jsx(kn,{value:l,children:i.jsx(Be.div,{as:Pt,...o(),children:e})})},"root",{transferProps:["orientation"]})(),y=Je(e=>{const{getItemProps:t}=En(e);return i.jsx(Be.div,{as:kt,...t()})},"item")(),L=Je(({children:e,icon:t,iconProps:n,...r})=>{const{getIconProps:a,getTriggerProps:s}=Wn(r);return i.jsxs(Be.div,{as:Ot,...s(),children:[t?i.jsx(Fn,{...a(n),children:t}):null,e]})},"trigger")(),Fn=Je("div","icon")(),er={component:k,title:"Components / Resizable"},he=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),me=()=>i.jsx(_t,{variant:"stack",rows:["border","spacer","plain"],children:(e,t,n)=>i.jsxs(k,{variant:t,borderWidth:t==="border"?"1px":void 0,h:"md",rounded:t==="border"?"l2":void 0,children:[i.jsx(y,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"One"}),i.jsx(L,{}),i.jsx(y,{borderWidth:t==="spacer"?"1px":void 0,display:"center",rounded:t==="spacer"?"l2":void 0,children:"Two"})]},n)}),ge=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{colorScheme:"primary",variant:"spacer",h:"md",children:[i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(L,{}),i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]}),i.jsxs(k,{colorScheme:"red",variant:"spacer",h:"md",children:[i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(L,{}),i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),be=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"horizontal",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]})]}),ze=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{defaultSize:"30%",display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),ye=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",maxSize:"70%",minSize:"30%",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),Re=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(y,{collapsedSize:"15%",collapsible:!0,defaultSize:"30%",display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]})]}),xe=()=>{const e=x.useRef(null),t=x.useRef(null),n=x.useRef(null);return i.jsxs(k,{ref:e,borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{ref:t,display:"center",children:"One"}),i.jsx(L,{ref:n}),i.jsx(y,{display:"center",children:"Two"})]})},ve=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{icon:i.jsx(Ke,{})}),i.jsx(y,{display:"center",children:"Two"})]}),i.jsxs(k,{variant:"spacer",h:"md",orientation:"vertical",children:[i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"One"}),i.jsx(L,{icon:i.jsx(Ke,{})}),i.jsx(y,{borderWidth:"1px",display:"center",rounded:"l2",children:"Two"})]})]}),Se=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",children:"Left"}),i.jsx(L,{}),i.jsx(y,{children:i.jsxs(k,{orientation:"vertical",children:[i.jsx(y,{display:"center",children:"Top"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Bottom"})]})})]}),i.jsxs(k,{borderWidth:"1px",h:"md",orientation:"vertical",rounded:"l2",children:[i.jsx(y,{display:"center",children:"Top"}),i.jsx(L,{}),i.jsx(y,{children:i.jsxs(k,{children:[i.jsx(y,{display:"center",children:"Left"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Right"})]})})]})]}),we=()=>i.jsxs(i.Fragment,{children:[i.jsxs(k,{borderWidth:"1px",disabled:!0,h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Three"})]}),i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",children:"One"}),i.jsx(L,{disabled:!0}),i.jsx(y,{display:"center",children:"Two"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Three"})]})]}),Ce=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",onLayoutChange:e=>{console.log("layout change",e)},onLayoutChanged:e=>{console.log("layout changed",e)},children:[i.jsx(y,{id:"one",display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{id:"two",display:"center",children:"Two"})]}),Ie=()=>i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{display:"center",onResize:(e,t,n)=>{console.log("resize",e,t,n)},children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]}),je=()=>{const{defaultLayout:e,onLayoutChanged:t}=Xe({id:"persistence",storage:localStorage});return i.jsxs(k,{borderWidth:"1px",defaultLayout:e,h:"md",rounded:"l2",onLayoutChanged:t,children:[i.jsx(y,{id:"one",display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{id:"two",display:"center",children:"Two"})]})},Le=()=>{const[e,t]=Ze({key:"showLeft",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),[n,r]=Ze({key:"showRight",defaultValue:!0,deserialize:o=>o==="true",serialize:o=>o.toString()}),a=x.useCallback(()=>{const o=[];return e&&o.push("left"),o.push("middle"),n&&o.push("right"),o},[e,n]),{defaultLayout:s,onLayoutChanged:d}=Xe({id:"conditional",panelIds:a(),storage:localStorage});return i.jsxs(i.Fragment,{children:[i.jsxs(mt,{gap:"md",children:[i.jsxs(Q,{onClick:()=>t(!e),children:[e?"Hidden":"Show"," Left"]}),i.jsxs(Q,{onClick:()=>r(!n),children:[n?"Hidden":"Show"," Right"]})]}),i.jsxs(k,{borderWidth:"1px",defaultLayout:s,h:"md",rounded:"l2",onLayoutChanged:d,children:[e?i.jsxs(i.Fragment,{children:[i.jsx(y,{id:"left",display:"center",minSize:"10%",children:"Left"}),i.jsx(L,{})]}):null,i.jsx(y,{id:"middle",display:"center",minSize:"10%",children:"Middle"}),n?i.jsxs(i.Fragment,{children:[i.jsx(L,{}),i.jsx(y,{id:"right",display:"center",minSize:"10%",children:"Right"})]}):null]})]})},Te=()=>{const e=x.useMemo(()=>({getItem:r=>{const a=document.cookie.match(new RegExp(`(^| )${r}=([^;]+)`));return a?a[2]??null:null},setItem:(r,a)=>{document.cookie=`${r}=${a}; max-age=31536000; path=/`}}),[]),{defaultLayout:t,onLayoutChanged:n}=Xe({id:"persistence",storage:e});return i.jsxs(k,{borderWidth:"1px",defaultLayout:t,h:"md",rounded:"l2",onLayoutChanged:n,children:[i.jsx(y,{id:"one",display:"center",children:"One"}),i.jsx(L,{}),i.jsx(y,{id:"two",display:"center",children:"Two"})]})},Pe=()=>{const e=x.useRef(null);return i.jsxs(i.Fragment,{children:[i.jsxs(mt,{gap:"md",children:[i.jsx(Q,{onClick:()=>e.current?.collapse(),children:'Collapse "one"'}),i.jsx(Q,{onClick:()=>e.current?.expand(),children:'Expand "one"'}),i.jsx(Q,{onClick:()=>e.current?.resize("30%"),children:'Resize "one" to 30'}),i.jsx(Q,{onClick:()=>e.current?.resize("50%"),children:'Resize "one" to 50'})]}),i.jsxs(k,{borderWidth:"1px",h:"md",rounded:"l2",children:[i.jsx(y,{collapsedSize:"15%",collapsible:!0,controlRef:e,display:"center",maxSize:"50%",minSize:"30%",children:"One"}),i.jsx(L,{}),i.jsx(y,{display:"center",children:"Two"})]})]})};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
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
}`,...ze.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  return <Resizable.Root borderWidth="1px" h="md" rounded="l2">
      <Resizable.Item display="center" maxSize="70%" minSize="30%">
        One
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item display="center">Two</Resizable.Item>
    </Resizable.Root>;
}`,...ye.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
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
}`,...Re.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pe.parameters?.docs?.source}}};const tr=["Basic","Variant","ColorScheme","Orientation","DefaultSize","MinMaxSize","Collapsible","Refs","Icon","NestedResizable","Disabled","onLayoutChange","OnResize","LocalStorage","ConditionalLocalStorage","CookieStorage","CustomControl"];export{he as Basic,Re as Collapsible,ge as ColorScheme,Le as ConditionalLocalStorage,Te as CookieStorage,Pe as CustomControl,ze as DefaultSize,we as Disabled,ve as Icon,je as LocalStorage,ye as MinMaxSize,Se as NestedResizable,Ie as OnResize,be as Orientation,xe as Refs,me as Variant,tr as __namedExportsOrder,er as default,Ce as onLayoutChange};
