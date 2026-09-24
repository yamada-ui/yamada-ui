import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./use-breakpoint-CiDR4MUo.js";import{n as a,t as o}from"./use-breakpoint-state-C6ipootB.js";import{n as s,t as c}from"./box-C47iDJeO.js";var l,u;function d(){return(d=e((()=>{l=t(),i(),u=(e,t)=>{let n=r();(0,l.useEffect)(()=>{e(n)},[n,...t])}})))()}var f,p,m,h;function g(){return(g=e((()=>{s(),d(),o(),f=n(),p={title:`Hooks / useBreakpointEffect`},m=()=>{let[e,t]=a({base:`desktop`,sm:`mobile`,md:`tablet`});return u(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,f.jsxs)(c,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},h=[`Basic`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Basic,h as __namedExportsOrder,p as default};