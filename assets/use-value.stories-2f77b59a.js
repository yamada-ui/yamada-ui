import{a as p}from"./jsx-runtime-29545a09.js";import{u as c}from"./index-5b5a8403.js";import{u as r}from"./index-261ce10c.js";import{B as u}from"./box-a8c9d15d.js";import{a as m}from"./factory-13baf058.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-688174ae.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=m(),l=c(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p(u,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-value.stories-2f77b59a.js.map
