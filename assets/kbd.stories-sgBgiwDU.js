import{n as e}from"./chunk-jRWAZmH_.js";import{Dn as t,Z as n}from"./core-3C2oxizh.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-CdQ6A3ld.js";import{t as a}from"./text-SrSsDo5C.js";import{Or as o,kr as s}from"./iframe-0-o75UJy.js";import{n as c,t as l}from"./storybook-D6e0J5SD.js";var u,d,f,p,m,h;e((()=>{l(),o(),n(),a(),u=r(),d={component:s,title:`Components / Kbd`},f=()=>(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:`Shift`}),` + `,(0,u.jsx)(s,{children:`Tab`})]}),p=()=>(0,u.jsx)(c,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,n)=>(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{colorScheme:t,variant:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(s,{colorScheme:t,variant:e,children:`Tab`})]},n)}),m=()=>(0,u.jsx)(c,{columns:[`sm`,`md`,`lg`],rows:t,children:(e,t,n)=>(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{colorScheme:t,size:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(s,{colorScheme:t,size:e,children:`Tab`})]},n)}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Text>
      <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd>
    </Text>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} variant={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} variant={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} size={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} size={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`Variant`,`Size`]}))();export{f as Basic,m as Size,p as Variant,h as __namedExportsOrder,d as default};