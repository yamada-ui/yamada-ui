import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-CMXXrKHu.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{i,r as a,t as o}from"./flex-OAzaomtM.js";import{t as s}from"./box-BxZdjN9X.js";import{Fo as c,Ur as l,Wr as u}from"./iframe-DO0z5V9x.js";var d,f,p,m,h,g,_;e((()=>{d=t(n(),1),c(),o(),l(),f=r(),p={component:a,title:`Components / Flex`},m=()=>(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>(0,f.jsx)(a,{direction:`column`,gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),g=()=>(0,f.jsxs)(i,{value:(0,d.useMemo)(()=>({direction:`column`}),[]),children:[(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,f.jsx)(a,{gap:`md`,children:(0,f.jsx)(u,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,f.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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