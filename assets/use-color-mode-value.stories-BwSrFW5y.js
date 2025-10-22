import{aC as s,j as l}from"./iframe-C__kp2ks.js";import{u as r}from"./use-color-mode-value-sfPGuesh.js";import{B as n}from"./box-CzhcZ9L5.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Hooks / useColorModeValue"},o=()=>{const{colorMode:e}=s(),t=r("blackAlpha.800","whiteAlpha.800"),a=r("whiteAlpha.800","blackAlpha.800");return l.jsxs(n,{bg:t,color:a,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...o.parameters?.docs?.source}}};const m=["Basic"];export{o as Basic,m as __namedExportsOrder,p as default};
