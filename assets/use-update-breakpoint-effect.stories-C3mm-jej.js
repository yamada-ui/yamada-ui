import{N as a,j as p}from"./iframe-D_HYglKf.js";import{u as m}from"./use-breakpoint-state-DR6O202A.js";import{u as d}from"./use-breakpoint-DzseuvVx.js";import{B as l}from"./box-Dq_m1DJN.js";import"./preload-helper-C1FmrZbK.js";import"./use-breakpoint-value-DJZAC5OA.js";const c=(r,e)=>{const t=d();a(()=>{r(t)},[t,...e])},x={title:"Hooks / useUpdateBreakpointEffect"},o=()=>{const[r,e]=m({base:"desktop",sm:"mobile",md:"tablet"});return c(t=>{e(t==="sm"?"mobile":t==="md"?"tablet":"desktop")},[]),p.jsxs(l,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current device is "',r,'"']})};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Basic"];export{o as Basic,g as __namedExportsOrder,x as default};
