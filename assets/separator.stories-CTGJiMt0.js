import{n as e}from"./chunk-zsgVPwQN.js";import{On as t,Sl as n,bl as r,im as i,kn as a}from"./iframe-C5psFsKt.js";import{n as o,t as s}from"./storybook-DjhTnEiC.js";var c,l,u,d,f,p,m;e((()=>{s(),r(),a(),c=i(),l={component:t,title:`Components / Separator`},u=()=>(0,c.jsx)(t,{}),d=()=>(0,c.jsx)(o,{variant:`stack`,rows:[`solid`,`dashed`,`dotted`],children:(e,n,r)=>(0,c.jsx)(t,{variant:n},r)}),f=()=>(0,c.jsx)(o,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`],children:(e,n,r)=>(0,c.jsx)(t,{size:n},r)}),p=()=>(0,c.jsxs)(n,{gap:`md`,children:[(0,c.jsx)(t,{variant:`solid`,h:`32`,orientation:`vertical`}),(0,c.jsx)(t,{variant:`dashed`,h:`32`,orientation:`vertical`}),(0,c.jsx)(t,{variant:`dotted`,h:`32`,orientation:`vertical`})]}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Separator />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["solid", "dashed", "dotted"]}>
      {(_, row, key) => <Separator key={key} variant={row} />}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => <Separator key={key} size={row} />}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <Separator variant="solid" h="32" orientation="vertical" />

      <Separator variant="dashed" h="32" orientation="vertical" />

      <Separator variant="dotted" h="32" orientation="vertical" />
    </Flex>;
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Variant`,`Size`,`Vertical`]}))();export{u as Basic,f as Size,d as Variant,p as Vertical,m as __namedExportsOrder,l as default};