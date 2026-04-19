import{n as e}from"./chunk-zsgVPwQN.js";import{$t as t,Pd as n,Xt as r,gl as i,io as a,ro as o,sf as s,sm as c,vl as l}from"./iframe-CXDvaz-K.js";var u,d,f,p,m,h;e((()=>{i(),n(),r(),a(),u=c(),d={component:o,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(o,{children:(0,u.jsx)(l,{"aria-label":`Plus`,icon:(0,u.jsx)(s,{})})}),p=()=>(0,u.jsx)(o,{fallback:(0,u.jsx)(t,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(l,{"aria-label":`Plus`,icon:(0,u.jsx)(s,{})})}),m=()=>(0,u.jsx)(o,{children:()=>(0,u.jsx)(l,{"aria-label":`Plus`,icon:(0,u.jsx)(s,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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