import{j as p}from"./jsx-runtime-CfatFE5O.js";import{u,d as c}from"./index-Co5PRCxP.js";import{B as m}from"./box-C9iD9jp7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-ZSnRp-09.js";import"./theme-provider-B08WIPTu.js";const y={title:"Hooks / useBreakpoint"},r=()=>{const o=u();return p.jsxs(m,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',o,'"']})},e=()=>{const o=u(),d=c({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return p.jsxs(m,{bg:d,color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',o,'"']})};var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500"
  }} color="white" p="md" rounded="md" transitionDuration="slower" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,i,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  });
  return <Box bg={bg} color="white" p="md" rounded="md" transitionDuration="slower" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["basic","withValue"];export{f as __namedExportsOrder,r as basic,y as default,e as withValue};