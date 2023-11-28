import{r}from"./index-8ee6c85d.js";import{b as l,z as p,i as V,E as m}from"./factory-7bddb6ec.js";const b=({value:u,...e})=>{e.onUpdate??(e.onUpdate=(t,a)=>t!==a);const s=l(e.onChange),c=l(e.onUpdate),[d,f]=r.useState(e.defaultValue),n=u!==void 0,o=n?u:d,i=l(t=>{const a=p(t,o);c(o,a)&&((!n||V(a)||m(a))&&f(a),s(a))},[n,o,s,c]);return[o,i]};export{b as u};
//# sourceMappingURL=index-fb6972ca.js.map
