import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./plus-icon-rBaNJSiU.js";import{r as i,t as a}from"./icon-button-BPVZ8V7k.js";import{n as o,t as s}from"./use-mounted-U788b5Pq.js";import{n as c,t as l}from"./show-ByqawjtF.js";import{n as u,t as d}from"./skeleton-f0A8K7s-.js";var f,p;function m(){return(m=e((()=>{s(),c(),f=t(),p=({children:e,fallback:t})=>{let n=o({state:!0});return(0,f.jsx)(l,{fallback:t,when:n,children:e})}})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),u(),m(),h=t(),g={component:p,title:`Components / ClientOnly`},_=()=>(0,h.jsx)(p,{children:(0,h.jsx)(a,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),v=()=>(0,h.jsx)(p,{fallback:(0,h.jsx)(d,{boxSize:`10`,rounded:`l2`}),children:(0,h.jsx)(a,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),y=()=>(0,h.jsx)(p,{children:()=>(0,h.jsx)(a,{"aria-label":`Plus`,icon:(0,h.jsx)(r,{})})}),b=[`Basic`,`Fallback`,`RenderProp`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Basic,v as Fallback,y as RenderProp,b as __namedExportsOrder,g as default};