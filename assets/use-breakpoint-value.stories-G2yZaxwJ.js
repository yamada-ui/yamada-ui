import{j as n}from"./iframe-B0P9Y6nu.js";import{u as t}from"./use-breakpoint-CQAuVy7J.js";import{u as a}from"./use-breakpoint-value-GRhcN3af.js";import{B as s}from"./box-ByskiYsC.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Hooks / useBreakpointValue"},e=()=>{const r=t(),o=a({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return n.jsxs(s,{bg:o,color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  });
  return <Box bg={bg} color="white" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...e.parameters?.docs?.source}}};const d=["Basic"];export{e as Basic,d as __namedExportsOrder,c as default};
