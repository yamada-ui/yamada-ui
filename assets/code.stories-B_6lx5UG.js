import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{jn as t,zn as n}from"./props-sAZv67b_.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{r as i,t as a}from"./create-component-CMKj7xAv.js";import{n as o,t as s}from"./code.style-C6HfJyaL.js";import{n as c,t as l}from"./props-table-DnYpWynU.js";var u,d,f,p;function m(){return(m=e((()=>{i(),o(),{PropsContext:u,usePropsContext:d,withContext:f}=a(`code`,s),p=f(`code`)()})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{c(),n(),m(),h=r(),g={component:p,title:`Components / Code`},_=()=>(0,h.jsx)(p,{children:`console.log("Hello, Yamada!")`}),v=()=>(0,h.jsx)(l,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,n)=>(0,h.jsx)(p,{colorScheme:t,variant:e,children:`console.log("Hello, Yamada!")`},n)}),y=()=>(0,h.jsx)(l,{columns:[`xs`,`sm`,`md`,`lg`],rows:t,children:(e,t,n)=>(0,h.jsx)(p,{colorScheme:t,size:e,children:`console.log("Hello, Yamada!")`},n)}),b=[`Basic`,`Variant`,`Size`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Basic,y as Size,v as Variant,b as __namedExportsOrder,g as default};