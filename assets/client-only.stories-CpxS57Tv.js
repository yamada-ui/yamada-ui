import{j as e,Z as a}from"./iframe-DaVT7dxo.js";import{u as C}from"./index-COK3hFBl.js";import{S as O}from"./show-DUjGMfs4.js";import{S as f}from"./skeleton-CCOgxqM4.js";import{P as t}from"./plus-icon-pYaK9uNK.js";import"./preload-helper-C1FmrZbK.js";const s=({children:P,fallback:b})=>{const S=C({state:!0});return e.jsx(O,{fallback:b,when:S,children:P})},R={component:s,title:"Components / ClientOnly"},r=()=>e.jsx(s,{children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),n=()=>e.jsx(s,{fallback:e.jsx(f,{boxSize:"10",rounded:"l2"}),children:e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})}),o=()=>e.jsx(s,{children:()=>e.jsx(a,{"aria-label":"Plus",icon:e.jsx(t,{})})});var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,j;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const w=["Basic","Fallback","RenderProp"];export{r as Basic,n as Fallback,o as RenderProp,w as __namedExportsOrder,R as default};
