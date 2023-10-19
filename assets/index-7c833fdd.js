import{r as s}from"./index-8ee6c85d.js";import{b as l,z as i}from"./factory-ab7c3580.js";const C=e=>{e.onUpdate=e.onUpdate??((o,t)=>o!==t);const u=l(e.onChange),c=l(e.onUpdate),[r,f]=s.useState(e.defaultValue),n=s.useRef(e.value!==void 0).current,a=n?e.value:r,d=l(o=>{const t=i(o,a);c(a,t)&&(n||f(t),u(t))},[n,a,u,c]);return[a,d]};export{C as u};
//# sourceMappingURL=index-7c833fdd.js.map
