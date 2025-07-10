import{r as s,j as n}from"./iframe-BG38LAQ9.js";import{u as i}from"./use-breakpoint-DdpUO0LK.js";import{u as a}from"./use-breakpoint-state-BfG43WyX.js";import{B as m}from"./box-CvTUj01L.js";import"./use-breakpoint-value-CTTBSlQj.js";const c=(o,e)=>{const t=i();s.useEffect(()=>{o(t)},[t,...e])},f={title:"Hooks / useBreakpointEffect"},r=()=>{const[o,e]=a({base:"desktop",sm:"mobile",md:"tablet"});return c(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),n.jsxs(m,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',o,'"']})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
