import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{a as i,i as a,t as o}from"./flex-LgA_0pwb.js";import{Fl as s,Ia as c,La as l,Pl as u}from"./iframe-CUT_NmNE.js";var d,f,p,m,h,g,_;t((()=>{d=e(n(),1),u(),o(),c(),f=r(),p={component:a,title:`Components / Flex`},m=()=>(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(a,{direction:`column`,gap:`md`,children:(0,f.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(i,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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