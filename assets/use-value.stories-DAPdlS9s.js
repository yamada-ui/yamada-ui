import{j as p}from"./jsx-runtime-BpbtHYHY.js";import{u as r}from"./index-Boyzt1qu.js";import{P as c}from"./factory-DbNU74ts.js";import{u}from"./index-CssvN-gw.js";import{B as m}from"./box-CKfluZfz.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-ChqdwXGn.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:t}=c(),a=u(),l=r({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p.jsxs(m,{bg:l,color:i,p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',a,'", colorMode is "',t,'"']})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
