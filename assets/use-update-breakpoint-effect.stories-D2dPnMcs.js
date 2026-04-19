import{n as e}from"./chunk-zsgVPwQN.js";import{Fs as t,Ps as n,ad as r,id as i,nd as a,rd as o,sm as s}from"./iframe-CXDvaz-K.js";var c,l,u,d;e((()=>{n(),i(),a(),c=s(),l={title:`Hooks / useUpdateBreakpointEffect`},u=()=>{let[e,n]=r({base:`desktop`,sm:`mobile`,md:`tablet`});return o(e=>{n(e===`sm`?`mobile`:e===`md`?`tablet`:`desktop`)},[]),(0,c.jsxs)(t,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current device is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet"
  });
  useUpdateBreakpointEffect(breakpoint => {
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