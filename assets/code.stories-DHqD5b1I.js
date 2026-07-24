import{i as e}from"./preload-helper-B45gAKPr.js";import{n as t,pt as n,t as r,tr as i}from"./core-CwFz10Qm.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{Fs as o,Is as s}from"./iframe-DTxndMIb.js";import{n as c,t as l}from"./storybook-D8sCzE6-.js";var u,d,f,p,m=e((()=>{r(),s(),{PropsContext:u,usePropsContext:d,withContext:f}=t(`code`,o),p=f(`code`)()})),h,g,_,v,y,b;e((()=>{l(),n(),m(),h=a(),g={component:p,title:`Components / Code`},_=()=>(0,h.jsx)(p,{children:`console.log("Hello, Yamada!")`}),v=()=>(0,h.jsx)(c,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:i,children:(e,t,n)=>(0,h.jsx)(p,{colorScheme:t,variant:e,children:`console.log("Hello, Yamada!")`},n)}),y=()=>(0,h.jsx)(c,{columns:[`xs`,`sm`,`md`,`lg`],rows:i,children:(e,t,n)=>(0,h.jsx)(p,{colorScheme:t,size:e,children:`console.log("Hello, Yamada!")`},n)}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Variant`,`Size`]}))();export{_ as Basic,y as Size,v as Variant,b as __namedExportsOrder,g as default};