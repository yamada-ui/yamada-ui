import{n as e}from"./chunk-zsgVPwQN.js";import{$t as t,Xt as n,gl as r,if as i,im as a,jd as o,ml as s,no as c,to as l}from"./iframe-e5Q0HVQf.js";var u,d,f,p,m,h;e((()=>{s(),o(),n(),c(),u=a(),d={component:l,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(l,{children:(0,u.jsx)(r,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),p=()=>(0,u.jsx)(l,{fallback:(0,u.jsx)(t,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(r,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),m=()=>(0,u.jsx)(l,{children:()=>(0,u.jsx)(r,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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