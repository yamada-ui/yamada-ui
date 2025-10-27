import{ay as a,j as l}from"./iframe-Cq3rcaMI.js";import{u as e}from"./index-hNMbzMH0.js";import{B as i}from"./box-CJbmBmxj.js";import{u as c}from"./use-breakpoint-B2hNbTgT.js";import"./preload-helper-PPVm8Dsz.js";import"./use-breakpoint-value-4bNhmqEp.js";import"./use-color-mode-value-D8ycUMtp.js";const g={title:"Hooks / useValue"},o=()=>{const{colorMode:r}=a(),t=c(),n=e({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),s=e(["whiteAlpha.800","blackAlpha.800"]);return l.jsxs(i,{bg:n,color:s,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',t,'", colorMode is "',r,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500"
  });
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"]);
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...o.parameters?.docs?.source}}};const h=["Basic"];export{o as Basic,h as __namedExportsOrder,g as default};
