import{j as r}from"./iframe-BHZTlJ0V.js";import{u}from"./index-CWc0vQoG.js";import{S as m}from"./show-CmrC46br.js";import{I as t}from"./icon-button-DctN4AEW.js";import{S as p}from"./skeleton-BrM83sPa.js";import{P as a}from"./plus-icon-BxNtJlcp.js";import"./preload-helper-D9Z9MdNV.js";import"./button-BB2ssYQZ.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./createLucideIcon-D8IHT0xS.js";const s=({children:l,fallback:c})=>{const i=u({state:!0});return r.jsx(m,{fallback:c,when:i,children:l})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(p,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const B=["Basic","Fallback","RenderProp"];export{e as Basic,n as Fallback,o as RenderProp,B as __namedExportsOrder,k as default};
