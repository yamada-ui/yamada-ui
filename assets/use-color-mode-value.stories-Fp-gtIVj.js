import{ah as s,j as l}from"./iframe-DqV1pF0Y.js";import{u as r}from"./use-color-mode-value-CfexdzMu.js";import{B as n}from"./box-RnP1VP1U.js";const u={title:"Hooks / useColorModeValue"},o=()=>{const{colorMode:e}=s(),a=r("blackAlpha.800","whiteAlpha.800"),t=r("whiteAlpha.800","blackAlpha.800");return l.jsxs(n,{bg:a,color:t,p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} color={color} p="md" rounded="md" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...o.parameters?.docs?.source}}};const p=["Basic"];export{o as Basic,p as __namedExportsOrder,u as default};
