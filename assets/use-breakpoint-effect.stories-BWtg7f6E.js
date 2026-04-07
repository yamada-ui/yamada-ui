import{n as e}from"./chunk-zsgVPwQN.js";import{$l as t,ds as n,eu as r,iu as i,pp as a,ru as o,us as s}from"./iframe-a-xI_IFE.js";var c,l,u,d;e((()=>{s(),o(),t(),c=a(),l={title:`Hooks / useBreakpointEffect`},u=()=>{let[e,t]=r({base:`desktop`,sm:`mobile`,md:`tablet`});return i(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,c.jsxs)(n,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};