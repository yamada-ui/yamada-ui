import{n as e}from"./chunk-zsgVPwQN.js";import{Cp as t,Oa as n,dp as r,ka as i,pp as a}from"./iframe-yoIXfJPu.js";import{n as o,t as s}from"./storybook-B1Qen0YU.js";var c,l,u,d,f,p;e((()=>{s(),r(),i(),c=a(),l={component:n,title:`Components / Code`},u=()=>(0,c.jsx)(n,{children:`console.log("Hello, Yamada!")`}),d=()=>(0,c.jsx)(o,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,r)=>(0,c.jsx)(n,{colorScheme:t,variant:e,children:`console.log("Hello, Yamada!")`},r)}),f=()=>(0,c.jsx)(o,{columns:[`xs`,`sm`,`md`,`lg`],rows:t,children:(e,t,r)=>(0,c.jsx)(n,{colorScheme:t,size:e,children:`console.log("Hello, Yamada!")`},r)}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Variant`,`Size`]}))();export{u as Basic,f as Size,d as Variant,p as __namedExportsOrder,l as default};