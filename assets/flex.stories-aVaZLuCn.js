import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Bd as n,Ev as r,Fa as i,Fl as a,Pa as o,Pl as s,Ud as c,Wd as l,yy as u}from"./iframe-4z85howq.js";var d,f,p,m,h,g,_;t((()=>{d=e(u(),1),s(),n(),o(),f=r(),p={component:c,title:`Components / Flex`},m=()=>(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(i,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(a,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(c,{direction:`column`,gap:`md`,children:(0,f.jsx)(i,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(a,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(l,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(i,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(a,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(i,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(a,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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