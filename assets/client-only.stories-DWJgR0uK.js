import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n,ut as r}from"./icon-BJ0kjvJ7.js";import{i,t as a}from"./button-Dd3r5aCq.js";import{Bn as o,Fn as s,Os as c,ks as l}from"./iframe-DpVGHWSQ.js";var u,d,f,p,m,h;e((()=>{a(),n(),s(),l(),u=t(),d={component:c,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(c,{children:(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(r,{})})}),p=()=>(0,u.jsx)(c,{fallback:(0,u.jsx)(o,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(r,{})})}),m=()=>(0,u.jsx)(c,{children:()=>(0,u.jsx)(i,{"aria-label":`Plus`,icon:(0,u.jsx)(r,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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