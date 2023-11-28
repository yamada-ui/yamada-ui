import{j as p}from"./jsx-runtime-b08f8875.js";import{u as c}from"./index-bd8d7283.js";import{u as r}from"./index-b9ad7a9b.js";import{B as u}from"./box-c903f1eb.js";import{u as m}from"./factory-7bddb6ec.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-9d5cd644.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:s}=m(),a=c(),l=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p(u,{bg:l,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',a,'", colorMode is "',s,'"']})};var e,n,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"]);
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const y=["basic"];export{y as __namedExportsOrder,o as basic,B as default};
//# sourceMappingURL=use-value.stories-2a02eea2.js.map
