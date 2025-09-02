import{j as r}from"./iframe-XeUDGc9-.js";import{u}from"./index-B--oYsoJ.js";import{S as m}from"./show-DoT2XOB1.js";import{I as s}from"./icon-button-Cnht_NtW.js";import{S as p}from"./skeleton-BLiAVgfQ.js";import{P as a}from"./plus-icon-ByO_nKIX.js";import"./preload-helper-D9Z9MdNV.js";import"./button-BMwb3xqF.js";import"./button.style-CgX_lvjC.js";import"./use-ripple-CRLgxef_.js";import"./rings-DhKaXPYE.js";import"./createLucideIcon-BIZS7xSf.js";const t=({children:l,fallback:c})=>{const i=u({state:!0});return r.jsx(m,{fallback:c,when:i,children:l})},B={component:t,title:"Components / ClientOnly"},e=()=>r.jsx(t,{children:r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(t,{fallback:r.jsx(p,{boxSize:"10",rounded:"l2"}),children:r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(t,{children:()=>r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...n.parameters?.docs?.source}}};const h=["Basic","Fallback","RenderProp"];export{e as Basic,o as Fallback,n as RenderProp,h as __namedExportsOrder,B as default};
