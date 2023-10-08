import{r as s}from"./index-76fb7be0.js";import{c as l,x as i}from"./factory-ea08dcfd.js";const x=e=>{e.onUpdate=e.onUpdate??((o,t)=>o!==t);const u=l(e.onChange),c=l(e.onUpdate),[r,f]=s.useState(e.defaultValue),n=s.useRef(e.value!==void 0).current,a=n?e.value:r,d=l(o=>{const t=i(o,a);c(a,t)&&(n||f(t),u(t))},[n,a,u,c]);return[a,d]};export{x as u};
//# sourceMappingURL=index-c794b4cd.js.map
