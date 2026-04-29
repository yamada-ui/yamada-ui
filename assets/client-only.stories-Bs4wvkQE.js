import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{N as n,t as r}from"./icon-BMXCkoCb.js";import{r as i,t as a}from"./button-C66K-mOB.js";import{Ft as o,Mt as s,da as c,ua as l}from"./iframe-D8byj_kx.js";var u,d,f,p,m,h;e((()=>{a(),r(),s(),c(),u=t(),d={component:l,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(l,{children:(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(n,{})})}),p=()=>(0,u.jsx)(l,{fallback:(0,u.jsx)(o,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(n,{})})}),m=()=>(0,u.jsx)(l,{children:()=>(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(n,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`Fallback`,`RenderProp`]}))();export{f as Basic,p as Fallback,m as RenderProp,h as __namedExportsOrder,d as default};