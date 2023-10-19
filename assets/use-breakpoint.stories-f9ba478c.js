import{j as p}from"./jsx-runtime-b08f8875.js";import{u,a as c}from"./index-a69af9f5.js";import{B as m}from"./box-ebb86753.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-1097130b.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const f={title:"Hooks / useBreakpoint"},r=()=>{const o=u();return p(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return p(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-breakpoint.stories-f9ba478c.js.map
