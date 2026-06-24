import{i as e}from"./preload-helper-usAeo7Bx.js";import{$n as t,dt as n}from"./core-DkLkzQLq.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{Ds as i,Es as a}from"./iframe-QFtltEr1.js";import{n as o,t as s}from"./storybook-DaILEofl.js";var c,l,u,d,f,p;e((()=>{s(),n(),i(),c=r(),l={component:a,title:`Components / Code`},u=()=>(0,c.jsx)(a,{children:`console.log("Hello, Yamada!")`}),d=()=>(0,c.jsx)(o,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,n)=>(0,c.jsx)(a,{colorScheme:t,variant:e,children:`console.log("Hello, Yamada!")`},n)}),f=()=>(0,c.jsx)(o,{columns:[`xs`,`sm`,`md`,`lg`],rows:t,children:(e,t,n)=>(0,c.jsx)(a,{colorScheme:t,size:e,children:`console.log("Hello, Yamada!")`},n)}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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