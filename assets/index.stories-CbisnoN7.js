import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fl as n,Lp as r,Pl as i,Rp as a,Yp as o,bv as s,lv as c,zp as l}from"./iframe-4z85howq.js";var u,d,f,p;e((()=>{r(),i(),c(),l(),u=t(),d={title:`Hooks / useValue`},f=()=>{let{colorMode:e}=s(),t=o();return(0,u.jsxs)(n,{bg:a({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`}),color:a([`whiteAlpha.800`,`blackAlpha.800`]),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,t,`", colorMode is "`,e,`"`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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