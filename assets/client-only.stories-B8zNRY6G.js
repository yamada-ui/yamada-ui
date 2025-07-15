import{j as r}from"./iframe-6cyGxZR1.js";import{u as m}from"./index-3HENc5E7.js";import{S as p}from"./show-cIr3K9K-.js";import{I as t}from"./icon-button-B5j3FGrm.js";import{S as d}from"./skeleton-BRoyYN2v.js";import{P as a}from"./plus-icon-BAUrQ7jS.js";import"./button-G4XTmEMi.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";import"./createLucideIcon-Teo9AeaP.js";const s=l=>{const{children:c,fallback:i}=l,u=m({state:!0});return r.jsx(p,{fallback:i,when:u,children:c})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(d,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...o.parameters?.docs?.source}}};const h=["Basic","Fallback","RenderProp"];export{e as Basic,n as Fallback,o as RenderProp,h as __namedExportsOrder,k as default};
