import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,t as r}from"./effect-CjnfyxRk.js";import{n as i,t as a}from"./use-breakpoint-CiDR4MUo.js";import{n as o,t as s}from"./use-breakpoint-state-C6ipootB.js";import{n as c,t as l}from"./box-C47iDJeO.js";var u;function d(){return(d=e((()=>{r(),a(),u=(e,t)=>{let r=i();n(()=>{e(r)},[r,...t])}})))()}var f,p,m,h;function g(){return(g=e((()=>{c(),s(),d(),f=t(),p={title:`Hooks / useUpdateBreakpointEffect`},m=()=>{let[e,t]=o({base:`desktop`,sm:`mobile`,md:`tablet`});return u(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,f.jsxs)(l,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},h=[`Basic`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Basic,h as __namedExportsOrder,p as default};