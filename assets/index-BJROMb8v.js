import{r as i}from"./index-BwDkhjyp.js";import{k as l,z as p,A as V,B as m}from"./factory-BFmlPmGv.js";const x=({value:u,...e})=>{e.onUpdate??(e.onUpdate=(t,a)=>t!==a);const s=l(e.onChange),c=l(e.onUpdate),[d,f]=i.useState(e.defaultValue),n=u!==void 0,o=n?u:d,r=l(t=>{const a=p(t,o);c(o,a)&&((!n||V(a)||m(a))&&f(a),s(a))},[n,o,s,c]);return[o,r]};export{x as u};