import{r as a}from"./index-BwDkhjyp.js";import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{b as p}from"./icon-AfnI_U7a.js";import{f as w}from"./forward-ref-BmTAT9U5.js";import{c as x}from"./factory-CUXX-tpD.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((r,o,t)=>!!r&&t.indexOf(r)===o).join(" ");/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:t,className:n="",children:s,iconNode:i,...m},u)=>a.createElement("svg",{ref:u,...b,width:r,height:r,stroke:e,strokeWidth:t?Number(o)*24/Number(r):o,className:c("lucide",n),...m},[...i.map(([l,f])=>a.createElement(l,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,r)=>{const o=a.forwardRef(({className:t,...n},s)=>a.createElement(h,{ref:s,iconNode:r,className:c(`lucide-${g(e)}`,t),...n}));return o.displayName=`${e}`,o},$=w(({className:e,...r},o)=>d.jsx(p,{ref:o,className:x("ui-lucide-icon",e),...r}));export{h as I,$ as L,I as c};
