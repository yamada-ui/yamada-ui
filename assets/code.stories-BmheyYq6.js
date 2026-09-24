import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Nn as t,Tn as n}from"./props-Bz1FL_va.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{a as i,d as a,r as o,t as s}from"./create-component-DtmnY_ce.js";import{n as c,t as l}from"./props-table-CLkISL0o.js";var u;function d(){return(d=e((()=>{a(),u=i({base:{alignItems:`center`,display:`inline-flex`,fontFamily:`mono`,rounded:`l1`},variants:{outline:{layerStyle:`outline`},solid:{layerStyle:`solid`},subtle:{layerStyle:`subtle`},surface:{layerStyle:`surface`}},sizes:{xs:{fontSize:`2xs`,lineHeight:`{sizes.4}`,minH:`4`,px:`1`},sm:{fontSize:`xs`,lineHeight:`{sizes.5}`,minH:`5`,px:`1.5`},md:{fontSize:`sm`,lineHeight:`{sizes.6}`,minH:`6`,px:`2`},lg:{fontSize:`sm`,lineHeight:`{sizes.7}`,minH:`7`,px:`2.5`}},defaultProps:{size:`sm`,variant:`subtle`}})})))()}var f,p,m,h;function g(){return(g=e((()=>{o(),d(),{PropsContext:f,usePropsContext:p,withContext:m}=s(`code`,u),h=m(`code`)()})))()}var _,v,y,b,x,S;function C(){return(C=e((()=>{c(),t(),g(),_=r(),v={component:h,title:`Components / Code`},y=()=>(0,_.jsx)(h,{children:`console.log("Hello, Yamada!")`}),b=()=>(0,_.jsx)(l,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:n,children:(e,t,n)=>(0,_.jsx)(h,{colorScheme:t,variant:e,children:`console.log("Hello, Yamada!")`},n)}),x=()=>(0,_.jsx)(l,{columns:[`xs`,`sm`,`md`,`lg`],rows:n,children:(e,t,n)=>(0,_.jsx)(h,{colorScheme:t,size:e,children:`console.log("Hello, Yamada!")`},n)}),S=[`Basic`,`Variant`,`Size`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Basic,x as Size,b as Variant,S as __namedExportsOrder,v as default};