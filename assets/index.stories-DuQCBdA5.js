import{az as c,j as p}from"./iframe-FV6Pf4zG.js";import{u as e}from"./index-gzKnGVq3.js";import{B as u}from"./box-lmNTjs2t.js";import{u as d}from"./use-breakpoint-DsgKrnZJ.js";import"./preload-helper-C1FmrZbK.js";import"./use-breakpoint-value-EeorSnRx.js";import"./use-color-mode-value-CR8x27_R.js";const M={title:"Hooks / useValue"},o=()=>{const{colorMode:s}=c(),a=d(),l=e({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),i=e(["whiteAlpha.800","blackAlpha.800"]);return p.jsxs(u,{bg:l,color:i,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',a,'", colorMode is "',s,'"']})};var r,t,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const f=["Basic"];export{o as Basic,f as __namedExportsOrder,M as default};
