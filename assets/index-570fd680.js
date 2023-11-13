import{r as p}from"./index-76fb7be0.js";import{b as l,z as V}from"./factory-94a21dd6.js";const C=({value:u,...e})=>{e.onUpdate=e.onUpdate??((n,t)=>n!==t);const s=l(e.onChange),c=l(e.onUpdate),[r,d]=p.useState(e.defaultValue),a=u!==void 0,o=a?u:r,f=l(n=>{const t=V(n,o);c(o,t)&&(a||d(t),s(t))},[a,o,s,c]);return[o,f]};export{C as u};
//# sourceMappingURL=index-570fd680.js.map
