import{j as n}from"./iframe-BVYXOt_x.js";import{u as t}from"./use-breakpoint-CAqBpJlJ.js";import{u as a}from"./use-breakpoint-value-Bh-BKcFh.js";import{B as s}from"./box-Bkdbk87i.js";import"./preload-helper-D9Z9MdNV.js";const d={title:"Hooks / useBreakpointValue"},e=()=>{const r=t(),o=a({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return n.jsxs(s,{bg:o,color:"white",p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const c=["Basic"];export{e as Basic,c as __namedExportsOrder,d as default};
