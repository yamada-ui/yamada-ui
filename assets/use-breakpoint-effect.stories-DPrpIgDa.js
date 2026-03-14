import{r as s,j as n}from"./iframe-BkSt7vyM.js";import{u as i}from"./use-breakpoint-40vW7z1m.js";import{u as a}from"./use-breakpoint-state-DuS85rKU.js";import{B as m}from"./box-D31hHSyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./use-breakpoint-value-wrLKYw6K.js";const l=(o,e)=>{const t=i();s.useEffect(()=>{o(t)},[t,...e])},k={title:"Hooks / useBreakpointEffect"},r=()=>{const[o,e]=a({base:"desktop",sm:"mobile",md:"tablet"});return l(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),n.jsxs(m,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',o,'"']})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
  }} color="white" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current device is "{device}"
    </Box>;
}`,...r.parameters?.docs?.source}}};const B=["Basic"];export{r as Basic,B as __namedExportsOrder,k as default};
