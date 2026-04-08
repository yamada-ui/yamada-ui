import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Du as r,Eu as i,Mu as a,Ut as o,Xp as s,ds as c,ju as l,pp as u,us as d}from"./iframe-BMT_Rpw5.js";var f,p,m,h,g,_,v;e((()=>{f=t(s(),1),l(),d(),n(),i(),p=u(),m={component:a,parameters:{layout:`centered`},title:`Components / Portal`},h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{children:`元の世界`}),(0,p.jsx)(a,{children:(0,p.jsx)(r,{children:`ナツキ・スバル`})})]}),g=()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(o,{children:[(0,p.jsx)(r,{children:`元の世界`}),(0,p.jsx)(a,{containerRef:e,children:(0,p.jsx)(r,{children:`ナツキ・スバル`})}),(0,p.jsx)(c,{ref:e,bg:`bg.contrast`,color:`fg.contrast`,p:`md`,children:(0,p.jsx)(r,{children:`エミリアたん`})})]})},_=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{children:`元の世界`}),(0,p.jsx)(a,{disabled:!0,children:(0,p.jsx)(r,{children:`ナツキ・スバル`})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <VStack>
      <Text>元の世界</Text>
      <Portal containerRef={containerRef}>
        <Text>ナツキ・スバル</Text>
      </Portal>
      <Box ref={containerRef} bg="bg.contrast" color="fg.contrast" p="md">
        <Text>エミリアたん</Text>
      </Box>
    </VStack>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal disabled>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`ChangeDestination`,`Disabled`]}))();export{h as Basic,g as ChangeDestination,_ as Disabled,v as __namedExportsOrder,m as default};