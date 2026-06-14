import{i as e}from"./preload-helper-usAeo7Bx.js";import{Bn as t,Em as n,Ev as r,Fn as i,Id as a,Nd as o,Ns as s,Ps as c,Th as l}from"./iframe-4z85howq.js";var u,d,f,p,m,h;e((()=>{o(),n(),i(),c(),u=r(),d={component:s,title:`Components / ClientOnly`},f=()=>(0,u.jsx)(s,{children:(0,u.jsx)(a,{"aria-label":`Plus`,icon:(0,u.jsx)(l,{})})}),p=()=>(0,u.jsx)(s,{fallback:(0,u.jsx)(t,{boxSize:`10`,rounded:`l2`}),children:(0,u.jsx)(a,{"aria-label":`Plus`,icon:(0,u.jsx)(l,{})})}),m=()=>(0,u.jsx)(s,{children:()=>(0,u.jsx)(a,{"aria-label":`Plus`,icon:(0,u.jsx)(l,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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