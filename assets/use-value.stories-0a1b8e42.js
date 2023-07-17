import{j as c}from"./jsx-runtime-4d953e71.js";import{u as r}from"./index-1532491c.js";import{g as p}from"./factory-07cc9cf0.js";import{a as u}from"./index-f989dc93.js";import{B as m}from"./box-d7b7850d.js";import"./index-de62f0e0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./theme-326cd56d.js";const w={title:"Hooks / useValue"},o=()=>{const{colorMode:a}=p(),l=u(),n=r({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"}),i=r(["whiteAlpha.800","blackAlpha.800"]);return c(m,{bg:n,p:"md",rounded:"md",color:i,transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',l,'", colorMode is "',a,'"']})};var e,s,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-value.stories-0a1b8e42.js.map
