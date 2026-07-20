import{i as e}from"./preload-helper-B45gAKPr.js";import{Y as t,t as n}from"./core-CBrv4WaS.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i}from"./use-breakpoint-Bvshk7i8.js";import{n as a,r as o,t as s}from"./use-value-DYIVtk6a.js";import{Nl as c,Pl as l}from"./iframe-BI2Pxu8D.js";var u,d,f,p;e((()=>{s(),c(),n(),o(),u=r(),d={title:`Hooks / useValue`},f=()=>{let{colorMode:e}=t(),n=i();return(0,u.jsxs)(l,{bg:a({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`}),color:a([`whiteAlpha.800`,`blackAlpha.800`]),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,n,`", colorMode is "`,e,`"`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`Basic`]}))();export{f as Basic,p as __namedExportsOrder,d as default};