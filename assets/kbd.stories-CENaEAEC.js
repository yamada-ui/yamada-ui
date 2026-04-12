import{n as e}from"./chunk-zsgVPwQN.js";import{$r as t,Qr as n,gm as r,im as i,iu as a,nm as o,ru as s}from"./iframe-oONnPOF5.js";import{n as c,t as l}from"./storybook-BTvOKQAd.js";var u,d,f,p,m,h;e((()=>{l(),n(),o(),s(),u=i(),d={component:t,title:`Components / Kbd`},f=()=>(0,u.jsxs)(a,{children:[(0,u.jsx)(t,{children:`Shift`}),` + `,(0,u.jsx)(t,{children:`Tab`})]}),p=()=>(0,u.jsx)(c,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:r,children:(e,n,r)=>(0,u.jsxs)(a,{children:[(0,u.jsx)(t,{colorScheme:n,variant:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(t,{colorScheme:n,variant:e,children:`Tab`})]},r)}),m=()=>(0,u.jsx)(c,{columns:[`sm`,`md`,`lg`],rows:r,children:(e,n,r)=>(0,u.jsxs)(a,{children:[(0,u.jsx)(t,{colorScheme:n,size:e,children:`Shift`}),` `,`+`,` `,(0,u.jsx)(t,{colorScheme:n,size:e,children:`Tab`})]},r)}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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