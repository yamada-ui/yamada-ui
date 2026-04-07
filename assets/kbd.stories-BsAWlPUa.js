import{n as e}from"./chunk-zsgVPwQN.js";import{Ar as t,Cp as n,Du as r,Eu as i,dp as a,jr as o,pp as s}from"./iframe-ocB1-JHi.js";import{n as c,t as l}from"./storybook-DXx2uB7x.js";var u,d,f,p,m,h;e((()=>{l(),t(),a(),i(),u=s(),d={component:o,title:`Components / Kbd`},f=()=>(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:`Shift`}),` + `,(0,u.jsx)(o,{children:`Tab`})]}),p=()=>(0,u.jsx)(c,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:n,children:(e,t,n)=>(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{colorScheme:t,variant:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(o,{colorScheme:t,variant:e,children:`Tab`})]},n)}),m=()=>(0,u.jsx)(c,{columns:[`sm`,`md`,`lg`],rows:n,children:(e,t,n)=>(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{colorScheme:t,size:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(o,{colorScheme:t,size:e,children:`Tab`})]},n)}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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