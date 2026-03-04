import{r as a,j as m}from"./iframe-B_bR2KLr.js";import{u as l}from"./use-breakpoint-Xzfs0iey.js";import{u as c}from"./use-breakpoint-state-Dl7GryM8.js";import{B as p}from"./box-D8bj0IuR.js";import"./preload-helper-C1FmrZbK.js";import"./use-breakpoint-value-Bw-3nA_-.js";const d=(o,e)=>{const t=l();a.useEffect(()=>{o(t)},[t,...e])},v={title:"Hooks / useBreakpointEffect"},r=()=>{const[o,e]=c({base:"desktop",sm:"mobile",md:"tablet"});return d(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),m.jsxs(p,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',o,'"']})};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Basic"];export{r as Basic,g as __namedExportsOrder,v as default};
