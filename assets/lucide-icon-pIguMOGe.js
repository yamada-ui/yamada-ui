import{r as a}from"./index-ClcD9ViR.js";import{j as d}from"./jsx-runtime-CfatFE5O.js";import{I as p}from"./icon-BodRPJCf.js";import{f as w}from"./forward-ref-D13m8o2p.js";import{c as x}from"./factory-COau3w21.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=(...e)=>e.filter((r,t,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:n="",children:s,iconNode:i,...m},u)=>a.createElement("svg",{ref:u,...h,width:r,height:r,stroke:e,strokeWidth:o?Number(t)*24/Number(r):t,className:c("lucide",n),...m},[...i.map(([f,l])=>a.createElement(f,l)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(e,r)=>{const t=a.forwardRef(({className:o,...n},s)=>a.createElement(C,{ref:s,iconNode:r,className:c(`lucide-${g(e)}`,o),...n}));return t.displayName=`${e}`,t},$=w(({className:e,...r},t)=>d.jsx(p,{ref:t,className:x("ui-lucide-icon",e),...r}));export{C as I,$ as L,E as c};
