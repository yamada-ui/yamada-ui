import{i as e}from"./preload-helper-usAeo7Bx.js";import{Bp as t,Dv as n,Fl as r,Il as i,Rp as a,Xp as o,uv as s,xv as c,zp as l}from"./iframe-B_JZPEyf.js";var u,d,f,p;e((()=>{a(),r(),s(),t(),u=n(),d={title:`Hooks / useValue`},f=()=>{let{colorMode:e}=c(),t=o();return(0,u.jsxs)(i,{bg:l({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`}),color:l([`whiteAlpha.800`,`blackAlpha.800`]),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,t,`", colorMode is "`,e,`"`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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