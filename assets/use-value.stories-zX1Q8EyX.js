import{j as p}from"./extends-CwFRzn3r.js";import{u as c}from"./index-CBVM-6nn.js";import{u as r}from"./index-BNB2iawI.js";import{E as u}from"./factory-DkiAY2ad.js";import{B as m}from"./box-BQhfyHd0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-BQjm75QN.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:t}=u(),a=c(),l=r({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p.jsxs(m,{bg:l,color:i,p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',a,'", colorMode is "',t,'"']})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
  return <Box bg={bg} color={color} p="md" rounded="md" transitionDuration="slower" transitionProperty="all">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,o as basic,w as default};
