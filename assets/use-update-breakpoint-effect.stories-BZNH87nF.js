import{N as s,j as n}from"./iframe-Cq3rcaMI.js";import{u as i}from"./use-breakpoint-state-BvugDsSM.js";import{u as a}from"./use-breakpoint-B2hNbTgT.js";import{B as p}from"./box-CJbmBmxj.js";import"./preload-helper-PPVm8Dsz.js";import"./use-breakpoint-value-4bNhmqEp.js";const m=(r,e)=>{const t=a();s(()=>{r(t)},[t,...e])},k={title:"Hooks / useUpdateBreakpointEffect"},o=()=>{const[r,e]=i({base:"desktop",sm:"mobile",md:"tablet"});return m(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),n.jsxs(p,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',r,'"']})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet"
  });
  useUpdateBreakpointEffect(breakpoint => {
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
}`,...o.parameters?.docs?.source}}};const B=["Basic"];export{o as Basic,B as __namedExportsOrder,k as default};
