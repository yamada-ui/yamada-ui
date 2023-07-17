import{r as s}from"./index-de62f0e0.js";import{f as l,w as i}from"./factory-07cc9cf0.js";const C=e=>{e.onUpdate=e.onUpdate??((o,t)=>o!==t);const u=l(e.onChange),c=l(e.onUpdate),[f,r]=s.useState(e.defaultValue),n=s.useRef(e.value!==void 0).current,a=n?e.value:f,d=l(o=>{const t=i(o,a);c(a,t)&&(n||r(t),u(t))},[n,a,u,c]);return[a,d]};export{C as u};
//# sourceMappingURL=index-6000b458.js.map
