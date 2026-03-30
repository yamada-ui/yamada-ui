import{j as e,I as a}from"./iframe-D2MBOeiZ.js";import{u}from"./index-BJE0FHDV.js";import{S as m}from"./show-CSx7U4Bt.js";import{S as p}from"./skeleton-DWPEbczw.js";import{P as t}from"./plus-icon-CtwgQwEw.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:l,fallback:c})=>{const i=u({state:!0});return e.jsx(m,{fallback:c,when:i,children:l})},C={component:s,title:"Components / ClientOnly"},r=()=>e.jsx(s,{children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),n=()=>e.jsx(s,{fallback:e.jsx(p,{boxSize:"10",rounded:"l2"}),children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),o=()=>e.jsx(s,{children:()=>e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...o.parameters?.docs?.source}}};const I=["Basic","Fallback","RenderProp"];export{r as Basic,n as Fallback,o as RenderProp,I as __namedExportsOrder,C as default};
