import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Cp as n,Dv as r,Fl as i,Il as a,Rf as o,Sn as s,Sp as c,Tn as l,by as u,zf as d}from"./iframe-DT1sT_sY.js";var f,p,m,h,g,_,v;t((()=>{f=e(u(),1),c(),i(),s(),o(),p=r(),m={component:n,parameters:{layout:`centered`},title:`Components / Portal`},h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{children:`元の世界`}),(0,p.jsx)(n,{children:(0,p.jsx)(d,{children:`ナツキ・スバル`})})]}),g=()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(l,{children:[(0,p.jsx)(d,{children:`元の世界`}),(0,p.jsx)(n,{containerRef:e,children:(0,p.jsx)(d,{children:`ナツキ・スバル`})}),(0,p.jsx)(a,{ref:e,bg:`bg.contrast`,color:`fg.contrast`,p:`md`,children:(0,p.jsx)(d,{children:`エミリアたん`})})]})},_=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{children:`元の世界`}),(0,p.jsx)(n,{disabled:!0,children:(0,p.jsx)(d,{children:`ナツキ・スバル`})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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