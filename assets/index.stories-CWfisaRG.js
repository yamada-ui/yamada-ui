import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r}from"./color-mode-provider-CifNlfSs.js";import{n as i,t as a}from"./use-breakpoint-CiDR4MUo.js";import{n as o,t as s}from"./use-value-DpgqT3Bp.js";import{n as c,t as l}from"./box-C47iDJeO.js";var u,d,f,p;function m(){return(m=e((()=>{s(),c(),n(),a(),u=t(),d={title:`Hooks / useValue`},f=()=>{let{colorMode:e}=r(),t=i(),n=o({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`}),a=o([`whiteAlpha.800`,`blackAlpha.800`]);return(0,u.jsxs)(l,{bg:n,color:a,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,t,`", colorMode is "`,e,`"`]})},p=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const breakpoint = useBreakpoint();
  const bg = useValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500"
  });
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"]);
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>;
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};