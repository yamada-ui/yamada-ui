import{j as r}from"./iframe-CDvKCJeY.js";import{u}from"./index-kVIRc8S4.js";import{S as m}from"./show-RSUUK6mo.js";import{I as t}from"./icon-button-BY5_vXRW.js";import{S as p}from"./skeleton-BwFxm-M4.js";import{P as a}from"./plus-icon-B2_7eKSf.js";import"./button-CJHWYlLB.js";import"./use-ripple-BOWtBklS.js";import"./rings-CTwWZ55N.js";import"./createLucideIcon-DLwdYwoU.js";const s=({children:l,fallback:c})=>{const i=u({state:!0});return r.jsx(m,{fallback:c,when:i,children:l})},y={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(p,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const k=["Basic","Fallback","RenderProp"];export{e as Basic,n as Fallback,o as RenderProp,k as __namedExportsOrder,y as default};
