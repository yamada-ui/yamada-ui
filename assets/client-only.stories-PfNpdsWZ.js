import{j as r}from"./iframe-zUpmkGgl.js";import{u}from"./index-CRZoWlqa.js";import{S as m}from"./show-oJeAO0qn.js";import{I as s}from"./icon-button-DnSVOKtD.js";import{S as p}from"./skeleton-BPFJOdn3.js";import{P as a}from"./plus-icon-BnM7iB_c.js";import"./preload-helper-D9Z9MdNV.js";import"./button-BSJyaaef.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";import"./createLucideIcon-D8b2f8gg.js";const t=({children:l,fallback:c})=>{const i=u({state:!0});return r.jsx(m,{fallback:c,when:i,children:l})},B={component:t,title:"Components / ClientOnly"},e=()=>r.jsx(t,{children:r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(t,{fallback:r.jsx(p,{boxSize:"10",rounded:"l2"}),children:r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(t,{children:()=>r.jsx(s,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
