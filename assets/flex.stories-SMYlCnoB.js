import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fs as n,Ps as r,Sl as i,Tl as a,qm as o,sm as s,vi as c,wl as l,yi as u}from"./iframe-CHoZGzMw.js";var d,f,p,m,h,g,_;e((()=>{d=t(o(),1),r(),i(),c(),f=s(),p={component:l,title:`Components / Flex`},m=()=>(0,f.jsx)(l,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(n,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(l,{direction:`column`,gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(n,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(a,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(l,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(n,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(l,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(n,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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