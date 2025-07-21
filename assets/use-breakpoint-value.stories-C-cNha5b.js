import{j as n}from"./iframe-BbB59fLB.js";import{u as t}from"./use-breakpoint-CIqEKCzG.js";import{u as a}from"./use-breakpoint-value-DwWi_T2I.js";import{B as s}from"./box-B5PL6uw9.js";const m={title:"Hooks / useBreakpointValue"},e=()=>{const r=t(),o=a({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return n.jsxs(s,{bg:o,color:"white",p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  });
  return <Box bg={bg} color="white" p="md" rounded="md" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...e.parameters?.docs?.source}}};const d=["Basic"];export{e as Basic,d as __namedExportsOrder,m as default};
