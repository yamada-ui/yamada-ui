import{a as p}from"./jsx-runtime-29545a09.js";import{u,a as c}from"./index-5b5a8403.js";import{B as m}from"./box-a8c9d15d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-688174ae.js";import"./factory-13baf058.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const f={title:"Hooks / useBreakpoint"},r=()=>{const o=u();return p(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return p(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: 'red.500',
    xl: 'blue.500',
    lg: 'green.500',
    md: 'yellow.500',
    sm: 'purple.500'
  }} p='md' rounded='md' color='white' transitionProperty='all' transitionDuration='slower'>
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: 'red.500',
    xl: 'blue.500',
    lg: 'green.500',
    md: 'yellow.500',
    sm: 'purple.500'
  });
  return <Box bg={bg} p='md' rounded='md' color='white' transitionProperty='all' transitionDuration='slower'>
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const D=["basic","withValue"];export{D as __namedExportsOrder,r as basic,f as default,e as withValue};
//# sourceMappingURL=use-breakpoint.stories-9ce9d1ee.js.map
