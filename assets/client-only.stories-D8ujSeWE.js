import{i as e}from"./preload-helper-usAeo7Bx.js";import{Bn as t,Dm as n,Dv as r,Eh as i,Fn as a,Ld as o,Ns as s,Pd as c,Ps as l}from"./iframe-DC0_9n1N.js";var u,d,f,p,m,h;e((()=>{c(),n(),a(),l(),u=r(),d={component:s,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(s,{children:(0,u.jsx)(o,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),p=()=>(0,u.jsx)(s,{fallback:(0,u.jsx)(t,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(o,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),m=()=>(0,u.jsx)(s,{children:()=>(0,u.jsx)(o,{"aria-label":`Plus`,icon:(0,u.jsx)(i,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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