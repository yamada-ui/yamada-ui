import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{a as i,i as a,t as o}from"./flex-BV0Yg0SR.js";import{Ma as s,Na as c,Ol as l,kl as u}from"./iframe-wumx2IEZ.js";var d,f,p,m,h,g,_;t((()=>{d=e(n(),1),l(),o(),s(),f=r(),p={component:a,title:`Components / Flex`},m=()=>(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(c,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(u,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(a,{direction:`column`,gap:`md`,children:(0,f.jsx)(c,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(u,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(i,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(c,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(u,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(c,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(u,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Flex direction="column" gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const value = useMemo<FlexProps>(() => ({
    direction: "column"
  }), []);
  return <FlexPropsContext value={value}>
      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>}
        </For>
      </Flex>

      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>}
        </For>
      </Flex>
    </FlexPropsContext>;
}`,...g.parameters?.docs?.source}}},_=[`Horizontal`,`Vertical`,`Context`]}))();export{g as Context,m as Horizontal,h as Vertical,_ as __namedExportsOrder,p as default};