import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{B as n}from"./props-CAjJr30V.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{v as i,y as a}from"./utils-Bpx2jhpv.js";import{n as o,t as s}from"./use-breakpoint-BRHCF_7y.js";import{n as c,t as l}from"./use-breakpoint-state-D7QcFMG0.js";import{n as u,t as d}from"./box-Dnd1KywF.js";var f,p;function m(){return(m=e((()=>{f=t(),n(),i(),s(),p=(e,t)=>{let{config:n}=a(),r=o(),i=n.breakpoint?.direction??`down`;(0,f.useEffect)(()=>{e(r,i)},[r,i,...t])}})))()}var h,g,_,v;function y(){return(y=e((()=>{u(),m(),l(),h=r(),g={title:`Hooks / useBreakpointEffect`},_=()=>{let[e,t]=c({base:`desktop`,sm:`mobile`,md:`tablet`});return p(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,h.jsxs)(d,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},v=[`Basic`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet"
  });
  useBreakpointEffect(breakpoint => {
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