import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Al as n,Dl as r,Xp as i,Xr as a,Zr as o,ds as s,kl as c,pp as l,us as u}from"./iframe-BMT_Rpw5.js";var d,f,p,m,h,g,_;e((()=>{d=t(i(),1),u(),r(),a(),f=l(),p={component:c,title:`Components / Flex`},m=()=>(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(o,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(c,{direction:`column`,gap:`md`,children:(0,f.jsx)(o,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(n,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(o,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(c,{gap:`md`,children:(0,f.jsx)(o,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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