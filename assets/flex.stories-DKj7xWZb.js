import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./flex-DVZqYG3M.js";import{n as o,t as s}from"./box-C47iDJeO.js";import{n as c,t as l}from"./for-BIl9Q3L3.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{u=t(),o(),i(),c(),d=n(),f={component:a,title:`Components / Flex`},p=()=>(0,d.jsx)(a,{gap:`md`,children:(0,d.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,d.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),m=()=>(0,d.jsx)(a,{direction:`column`,gap:`md`,children:(0,d.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,d.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),h=()=>{let e=(0,u.useMemo)(()=>({direction:`column`}),[]);return(0,d.jsxs)(r,{value:e,children:[(0,d.jsx)(a,{gap:`md`,children:(0,d.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,d.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),(0,d.jsx)(a,{gap:`md`,children:(0,d.jsx)(l,{each:[`info`,`success`,`warning`,`danger`],children:(e,t)=>(0,d.jsx)(s,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})})]})},g=[`Horizontal`,`Vertical`,`Context`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Flex direction="column" gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Context,p as Horizontal,m as Vertical,g as __namedExportsOrder,f as default};