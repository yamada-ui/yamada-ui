import{r as a,j as m}from"./iframe-D_HYglKf.js";import{u as l}from"./use-breakpoint-DzseuvVx.js";import{u as c}from"./use-breakpoint-state-DR6O202A.js";import{B as p}from"./box-Dq_m1DJN.js";import"./preload-helper-C1FmrZbK.js";import"./use-breakpoint-value-DJZAC5OA.js";const d=(o,e)=>{const t=l();a.useEffect(()=>{o(t)},[t,...e])},v={title:"Hooks / useBreakpointEffect"},r=()=>{const[o,e]=c({base:"desktop",sm:"mobile",md:"tablet"});return d(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),m.jsxs(p,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',o,'"']})};var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
