import{j as p}from"./jsx-runtime-b08f8875.js";import{u as c}from"./index-a69af9f5.js";import{u as r}from"./index-2cfd973b.js";import{B as u}from"./box-ebb86753.js";import{u as m}from"./factory-ab7c3580.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-1097130b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=m(),l=c(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p(u,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: 'red.500',
    xl: 'blue.500',
    lg: 'green.500',
    md: 'yellow.500',
    sm: 'purple.500'
  });
  const color = useValue(['whiteAlpha.800', 'blackAlpha.800']);
  return <Box bg={bg} p='md' rounded='md' color={color} transitionProperty='all' transitionDuration='slower'>
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const y=["basic"];export{y as __namedExportsOrder,o as basic,B as default};
//# sourceMappingURL=use-value.stories-b579363b.js.map
