import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n,ut as r}from"./icon-BCdQECWv.js";import{l as i,t as a}from"./button-B74B6_fk.js";import{Ln as o,Mn as s,et as c,mr as l,pr as u,tt as d}from"./iframe-DTxndMIb.js";var f,p,m=e((()=>{c(),u(),f=t(),p=({children:e,fallback:t})=>(0,f.jsx)(l,{fallback:t,when:d({state:!0}),children:e})})),h,g,_,v,y,b;e((()=>{a(),n(),s(),m(),h=t(),g={component:p,title:`Components / ClientOnly`},_=()=>(0,h.jsx)(p,{children:(0,h.jsx)(i,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),v=()=>(0,h.jsx)(p,{fallback:(0,h.jsx)(o,{boxSize:`10`,rounded:`l2`}),children:(0,h.jsx)(i,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),y=()=>(0,h.jsx)(p,{children:()=>(0,h.jsx)(i,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly fallback={<Skeleton boxSize="10" rounded="l2" />}>
      <IconButton aria-label="Plus" icon={<PlusIcon />} />
    </ClientOnly>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <ClientOnly>
      {() => <IconButton aria-label="Plus" icon={<PlusIcon />} />}
    </ClientOnly>;
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Fallback`,`RenderProp`]}))();export{_ as Basic,v as Fallback,y as RenderProp,b as __namedExportsOrder,g as default};