import{ay as n,j as s}from"./iframe-Cq3rcaMI.js";import{u as t}from"./use-color-mode-value-D8ycUMtp.js";import{B as a}from"./box-CJbmBmxj.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Styled System / Color Mode"},o=()=>{const{colorMode:e}=n();return s.jsxs(a,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=n(),c=t("black","white"),l=t("white","black");return s.jsxs(a,{bg:c,color:l,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...r.parameters?.docs?.source}}};const M=["Basic","Hook"];export{o as Basic,r as Hook,M as __namedExportsOrder,p as default};
