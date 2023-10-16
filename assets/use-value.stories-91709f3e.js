import{j as p}from"./jsx-runtime-03b4ddbf.js";import{u as c}from"./index-a6848ad8.js";import{u as r}from"./index-1560c0d4.js";import{B as u}from"./box-843ebc67.js";import{u as m}from"./factory-0b90ba06.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-89b34f8f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const B={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=m(),l=c(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return p(u,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,t,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-value.stories-91709f3e.js.map
