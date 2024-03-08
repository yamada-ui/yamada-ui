import{a as l}from"./jsx-runtime-5BUNAZ9W.js";import{a as u,u as c}from"./index-Ar4QPYE3.js";import{B as m}from"./box-gsgHkkli.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-bBWP4weD.js";import"./factory-d4qha7R6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const f={title:"System / Styles / Breakpoint"},r=()=>{const o=u();return l(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return l(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  }} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,i,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  return <Box bg={bg} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["basic","useHook"];export{D as __namedExportsOrder,r as basic,f as default,e as useHook};
