import{i as e}from"./preload-helper-usAeo7Bx.js";import{Bd as t,Ev as n,Ud as r,_r as i,vr as a}from"./iframe-4z85howq.js";import{n as o,t as s}from"./storybook-DJV3OteS.js";var c,l,u,d,f,p,m;e((()=>{s(),t(),a(),c=n(),l={component:i,title:`Components / Separator`},u=()=>(0,c.jsx)(i,{}),d=()=>(0,c.jsx)(o,{variant:`stack`,rows:[`solid`,`dashed`,`dotted`],children:(e,t,n)=>(0,c.jsx)(i,{variant:t},n)}),f=()=>(0,c.jsx)(o,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`],children:(e,t,n)=>(0,c.jsx)(i,{size:t},n)}),p=()=>(0,c.jsxs)(r,{gap:`md`,children:[(0,c.jsx)(i,{variant:`solid`,h:`32`,orientation:`vertical`}),(0,c.jsx)(i,{variant:`dashed`,h:`32`,orientation:`vertical`}),(0,c.jsx)(i,{variant:`dotted`,h:`32`,orientation:`vertical`})]}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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