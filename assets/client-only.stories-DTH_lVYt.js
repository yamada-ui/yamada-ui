import{j as r}from"./iframe-Cn-KGvUL.js";import{u as m}from"./index-xiF2BN31.js";import{S as p}from"./show-BRIMr_nS.js";import{I as t}from"./icon-button-CnBlN9Ks.js";import{S as d}from"./skeleton-Qwvq16AS.js";import{P as a}from"./plus-icon-B-elctm8.js";import"./button-C4DORSB8.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";import"./createLucideIcon-CiWl1mji.js";const s=l=>{const{children:c,fallback:i}=l,u=m({state:!0});return r.jsx(p,{fallback:i,when:u,children:c})},k={component:s,title:"Components / ClientOnly"},e=()=>r.jsx(s,{children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),n=()=>r.jsx(s,{fallback:r.jsx(d,{boxSize:"10",rounded:"l2"}),children:r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})}),o=()=>r.jsx(s,{children:()=>r.jsx(t,{"aria-label":"Plus",icon:r.jsx(a,{})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
