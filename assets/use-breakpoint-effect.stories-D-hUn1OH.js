import{r as s,j as n}from"./iframe-BbB59fLB.js";import{u as i}from"./use-breakpoint-CIqEKCzG.js";import{u as a}from"./use-breakpoint-state-CDY00E6E.js";import{B as m}from"./box-B5PL6uw9.js";import"./use-breakpoint-value-DwWi_T2I.js";const c=(o,e)=>{const t=i();s.useEffect(()=>{o(t)},[t,...e])},f={title:"Hooks / useBreakpointEffect"},r=()=>{const[o,e]=a({base:"desktop",sm:"mobile",md:"tablet"});return c(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),n.jsxs(m,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',o,'"']})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet"
  });
  useBreakpointEffect(breakpoint => {
    if (breakpoint === "sm") {
      setDevice("mobile");
    } else if (breakpoint === "md") {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  }, []);
  return <Box bg={{
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500"
  }} color="white" p="md" rounded="md" transitionDuration="moderate" transitionProperty="all">
      The current device is "{device}"
    </Box>;
}`,...r.parameters?.docs?.source}}};const k=["Basic"];export{r as Basic,k as __namedExportsOrder,f as default};
