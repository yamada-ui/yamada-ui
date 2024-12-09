import{j as p}from"./jsx-runtime-CfatFE5O.js";import{u as r}from"./index-kFzQREm-.js";import{O as c}from"./factory-ZSnRp-09.js";import{u}from"./index-Co5PRCxP.js";import{B as m}from"./box-C9iD9jp7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-B08WIPTu.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:t}=c(),a=u(),l=r({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p.jsxs(m,{bg:l,color:i,p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',a,'", colorMode is "',t,'"']})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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