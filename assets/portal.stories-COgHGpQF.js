import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fl as r,Lf as i,Pl as a,Rf as o,Sn as s,Sp as c,Tn as l,xp as u,yy as d}from"./iframe-4z85howq.js";var f,p,m,h,g,_,v;t((()=>{f=e(d(),1),u(),a(),s(),i(),p=n(),m={component:c,parameters:{layout:`centered`},title:`Components / Portal`},h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(c,{children:(0,p.jsx)(o,{children:`ナツキ・スバル`})})]}),g=()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(l,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(c,{containerRef:e,children:(0,p.jsx)(o,{children:`ナツキ・スバル`})}),(0,p.jsx)(r,{ref:e,bg:`bg.contrast`,color:`fg.contrast`,p:`md`,children:(0,p.jsx)(o,{children:`エミリアたん`})})]})},_=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(c,{disabled:!0,children:(0,p.jsx)(o,{children:`ナツキ・スバル`})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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