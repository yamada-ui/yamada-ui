import{n as e}from"./chunk-zsgVPwQN.js";import{$t as t,Cl as n,Na as r,Pa as i,nn as a,pp as o,rd as s,xd as c,xl as l}from"./iframe-xN-XyuUR.js";var u,d,f,p,m,h;e((()=>{l(),s(),t(),i(),u=o(),d={component:r,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(r,{children:(0,u.jsx)(n,{"aria-label":`Plus`,icon:(0,u.jsx)(c,{})})}),p=()=>(0,u.jsx)(r,{fallback:(0,u.jsx)(a,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(n,{"aria-label":`Plus`,icon:(0,u.jsx)(c,{})})}),m=()=>(0,u.jsx)(r,{children:()=>(0,u.jsx)(n,{"aria-label":`Plus`,icon:(0,u.jsx)(c,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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