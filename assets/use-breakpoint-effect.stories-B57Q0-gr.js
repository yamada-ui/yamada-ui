import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{n,t as r}from"./use-breakpoint-effect-NEuS5odd.js";import{n as i,t as a}from"./use-breakpoint-state-BcaNSc6K.js";import{Nl as o,Pl as s}from"./iframe-Clx83w1K.js";var c,l,u,d;e((()=>{o(),r(),a(),c=t(),l={title:`Hooks / useBreakpointEffect`},u=()=>{let[e,t]=i({base:`desktop`,sm:`mobile`,md:`tablet`});return n(e=>{t(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,c.jsxs)(s,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};