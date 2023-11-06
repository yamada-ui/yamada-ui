import{j as l}from"./jsx-runtime-03b4ddbf.js";import{u,a as c}from"./index-85f341f5.js";import{B as m}from"./box-c0031f2e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-a03ffa08.js";import"./factory-c9bc4a28.js";const y={title:"System / Styles / Breakpoint"},r=()=>{const o=u();return l(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return l(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,i,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["basic","useHook"];export{f as __namedExportsOrder,r as basic,y as default,e as useHook};
//# sourceMappingURL=breakpoint.stories-f72bb215.js.map
