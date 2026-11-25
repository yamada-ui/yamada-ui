import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{B as t}from"./props-D6D-sCZr.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{v as r,y as i}from"./utils-B9FFdVC1.js";import{i as a,t as o}from"./effect-BX-3lD32.js";import{n as s,t as c}from"./use-breakpoint-CLMAYOBZ.js";import{n as l,t as u}from"./use-breakpoint-state-rklb-jiQ.js";import{n as d,t as f}from"./box-DsusYjFu.js";var p;function m(){return(m=e((()=>{t(),r(),o(),c(),p=(e,t)=>{let{config:n}=i(),r=s(),o=n.breakpoint?.direction??`down`;a(()=>{e(r,o)},[r,o,...t])}})))()}var h,g,_,v;function y(){return(y=e((()=>{d(),u(),m(),h=n(),g={title:`Hooks / useUpdateBreakpointEffect`},_=()=>{let[e,t]=l({base:`desktop`,sm:`mobile`,md:`tablet`});return p(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,h.jsxs)(f,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},v=[`Basic`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet"
  });
  useUpdateBreakpointEffect(breakpoint => {
    if (breakpoint === "sm") setDevice("mobile");else if (breakpoint === "md") setDevice("tablet");else setDevice("desktop");
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Basic,v as __namedExportsOrder,g as default};