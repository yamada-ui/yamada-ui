import{a as l}from"./jsx-runtime-29545a09.js";import{u,a as c}from"./index-7b119b1a.js";import{B as m}from"./box-17a9b8c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-53967a8a.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const f={title:"System / Styles / Breakpoint"},r=()=>{const o=u();return l(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return l(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var t,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["basic","useHook"];export{D as __namedExportsOrder,r as basic,f as default,e as useHook};
//# sourceMappingURL=breakpoint.stories-84e62614.js.map
