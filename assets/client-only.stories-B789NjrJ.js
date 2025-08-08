import{j as r}from"./iframe-Cz9Hkuf2.js";import{u}from"./index-B8OwhXiI.js";import{S as m}from"./show-B6ioN8-9.js";import{I as t}from"./icon-button-D-ZVEkgW.js";import{S as p}from"./skeleton-D9eXOMW2.js";import{P as a}from"./plus-icon-B5Ab2iC_.js";import"./preload-helper-D9Z9MdNV.js";import"./button-D91gE1vK.js";import"./use-ripple-BqwrQuB9.js";import"./rings-DpK90kMJ.js";import"./createLucideIcon-CBK9Ft_T.js";const s=({children:l,fallback:c})=>{const i=u({state:!0});return r.jsx(m,{fallback:c,when:i,children:l})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(p,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
