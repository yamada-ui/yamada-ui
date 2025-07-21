import{j as r}from"./iframe-BbB59fLB.js";import{u as m}from"./index-B0J3A37_.js";import{S as p}from"./show-D29UuOGu.js";import{I as t}from"./icon-button-B48cT_t-.js";import{S as d}from"./skeleton-B3e90ykQ.js";import{P as a}from"./plus-icon-Bd--BULa.js";import"./button-C7yiHaiH.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";import"./createLucideIcon-BfIMf7K-.js";const s=l=>{const{children:c,fallback:i}=l,u=m({state:!0});return r.jsx(p,{fallback:i,when:u,children:c})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(d,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
