import{j as e,$ as a}from"./iframe-BynoZ0Oq.js";import{u}from"./index-e19d1HXH.js";import{S as m}from"./show-CBUoUJhP.js";import{S as p}from"./skeleton-CtLhrqBB.js";import{P as t}from"./plus-icon-B7qs_cEs.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:l,fallback:c})=>{const i=u({state:!0});return e.jsx(m,{fallback:c,when:i,children:l})},C={component:s,title:"Components / ClientOnly"},r=()=>e.jsx(s,{children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),n=()=>e.jsx(s,{fallback:e.jsx(p,{boxSize:"10",rounded:"l2"}),children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),o=()=>e.jsx(s,{children:()=>e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const O=["Basic","Fallback","RenderProp"];export{r as Basic,n as Fallback,o as RenderProp,O as __namedExportsOrder,C as default};
