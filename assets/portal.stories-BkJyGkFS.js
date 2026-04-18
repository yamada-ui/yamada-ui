import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Bu as r,Fs as i,Lt as a,Ps as o,au as s,ou as c,qm as l,sm as u,zu as d}from"./iframe-CHoZGzMw.js";var f,p,m,h,g,_,v;e((()=>{f=t(l(),1),d(),o(),a(),s(),p=u(),m={component:r,parameters:{layout:`centered`},title:`Components / Portal`},h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{children:`元の世界`}),(0,p.jsx)(r,{children:(0,p.jsx)(c,{children:`ナツキ・スバル`})})]}),g=()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(n,{children:[(0,p.jsx)(c,{children:`元の世界`}),(0,p.jsx)(r,{containerRef:e,children:(0,p.jsx)(c,{children:`ナツキ・スバル`})}),(0,p.jsx)(i,{ref:e,bg:`bg.contrast`,color:`fg.contrast`,p:`md`,children:(0,p.jsx)(c,{children:`エミリアたん`})})]})},_=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{children:`元の世界`}),(0,p.jsx)(r,{disabled:!0,children:(0,p.jsx)(c,{children:`ナツキ・スバル`})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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