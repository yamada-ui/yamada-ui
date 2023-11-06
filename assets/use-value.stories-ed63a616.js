import{j as c}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-85f341f5.js";import{u as r}from"./index-a701aaa0.js";import{B as u}from"./box-c0031f2e.js";import{u as m}from"./factory-c9bc4a28.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-a03ffa08.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=m(),l=p(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return c(u,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,s,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-value.stories-ed63a616.js.map
