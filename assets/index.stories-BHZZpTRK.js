import{ah as a,j as l}from"./iframe-BG38LAQ9.js";import{u as e}from"./index-JCvfJkvp.js";import{B as i}from"./box-CvTUj01L.js";import{u as c}from"./use-breakpoint-DdpUO0LK.js";import"./use-breakpoint-value-CTTBSlQj.js";import"./use-color-mode-value-CXJLU6LI.js";const k={title:"Hooks / useValue"},o=()=>{const{colorMode:r}=a(),n=c(),t=e({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),s=e(["whiteAlpha.800","blackAlpha.800"]);return l.jsxs(i,{bg:t,color:s,p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',n,'", colorMode is "',r,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
  return <Box bg={bg} color={color} p="md" rounded="md" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...o.parameters?.docs?.source}}};const x=["Basic"];export{o as Basic,x as __namedExportsOrder,k as default};
