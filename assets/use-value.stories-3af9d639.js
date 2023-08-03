import{a as c}from"./jsx-runtime-37f7df21.js";import{u as p}from"./index-18b70ca1.js";import{u as r}from"./index-c08cc7ee.js";import{B as u}from"./box-81c93a1f.js";import{a as m}from"./factory-81c6291d.js";import"./index-f1f2c4b1.js";import"./theme-2b4f2a73.js";import"./extends-3d932e16.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=m(),l=p(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return c(u,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,s,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const B=["basic"];export{B as __namedExportsOrder,o as basic,w as default};
//# sourceMappingURL=use-value.stories-3af9d639.js.map
