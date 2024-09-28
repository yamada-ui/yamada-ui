import{j as p}from"./extends-CwFRzn3r.js";import{u,d as c}from"./index-CDflVp_n.js";import{B as m}from"./box-CJbYVqkD.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-BZKkW4ID.js";import"./factory-CYpx3TMG.js";const y={title:"Hooks / useBreakpoint"},r=()=>{const o=u();return p.jsxs(m,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return p.jsxs(m,{bg:d,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',o,'"']})};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    "2xl": "pink.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  return <Box bg={bg} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["basic","withValue"];export{f as __namedExportsOrder,r as basic,y as default,e as withValue};
