import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fl as n,Pl as r,bv as i,fv as a,pv as o,yv as s}from"./iframe-4z85howq.js";var c,l,u,d,f;e((()=>{r(),s(),a(),c=t(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=i();return(0,c.jsxs)(n,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=i();return(0,c.jsxs)(n,{bg:o(`black`,`white`),color:o(`white`,`black`),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Hook`]}))();export{u as Basic,d as Hook,f as __namedExportsOrder,l as default};