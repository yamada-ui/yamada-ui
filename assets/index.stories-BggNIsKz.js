import{ah as a,j as l}from"./iframe-CzCJWi2Q.js";import{u as e}from"./index-DKVEtqlH.js";import{B as i}from"./box-B7HQRlfK.js";import{u as c}from"./use-breakpoint-kMDbih6w.js";import"./use-breakpoint-value-C7XqWH-l.js";import"./use-color-mode-value-cCNJaHKB.js";const k={title:"Hooks / useValue"},o=()=>{const{colorMode:r}=a(),n=c(),t=e({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),s=e(["whiteAlpha.800","blackAlpha.800"]);return l.jsxs(i,{bg:t,color:s,p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',n,'", colorMode is "',r,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
