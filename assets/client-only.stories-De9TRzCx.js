import{j as r}from"./iframe-Dqv37jui.js";import{u as m}from"./index-CE4ctCbl.js";import{S as p}from"./show-CLe8qkD4.js";import{I as t}from"./icon-button-B2blonpm.js";import{S as d}from"./skeleton-YOgknfN9.js";import{P as a}from"./plus-icon-CkQvfaf4.js";import"./button-C8c51KbT.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";import"./createLucideIcon-9w-Kw71s.js";const s=l=>{const{children:c,fallback:i}=l,u=m({state:!0});return r.jsx(p,{fallback:i,when:u,children:c})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(d,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
