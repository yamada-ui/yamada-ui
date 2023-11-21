import{r as p}from"./index-8ee6c85d.js";import{b as l,z as V}from"./factory-2d442159.js";const C=({value:u,...o})=>{o.onUpdate??(o.onUpdate=(n,a)=>n!==a);const c=l(o.onChange),s=l(o.onUpdate),[f,r]=p.useState(o.defaultValue),t=u!==void 0,e=t?u:f,d=l(n=>{const a=V(n,e);s(e,a)&&(t||r(a),c(a))},[t,e,c,s]);return[e,d]};export{C as u};
//# sourceMappingURL=index-980936f4.js.map
