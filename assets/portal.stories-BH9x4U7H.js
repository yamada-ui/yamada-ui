import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-CMXXrKHu.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{n as i,t as a}from"./portal-ZRniTpcU.js";import{t as o}from"./text-b_IgAtWs.js";import{t as s}from"./text-BspHgeMQ.js";import{t as c}from"./box-BxZdjN9X.js";import{r as l}from"./z-stack-lWqh8Oxz.js";import{Dt as u,Fo as d}from"./iframe-CxrZL9Jv.js";var f,p,m,h,g,_,v;e((()=>{f=t(n(),1),a(),d(),u(),s(),p=r(),m={component:i,parameters:{layout:`centered`},title:`Components / Portal`},h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(i,{children:(0,p.jsx)(o,{children:`ナツキ・スバル`})})]}),g=()=>{let e=(0,f.useRef)(null);return(0,p.jsxs)(l,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(i,{containerRef:e,children:(0,p.jsx)(o,{children:`ナツキ・スバル`})}),(0,p.jsx)(c,{ref:e,bg:`bg.contrast`,color:`fg.contrast`,p:`md`,children:(0,p.jsx)(o,{children:`エミリアたん`})})]})},_=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{children:`元の世界`}),(0,p.jsx)(i,{disabled:!0,children:(0,p.jsx)(o,{children:`ナツキ・スバル`})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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