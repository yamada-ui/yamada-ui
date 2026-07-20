import{i as e}from"./preload-helper-B45gAKPr.js";import{J as t,M as n,Y as r,j as i}from"./core-CBrv4WaS.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{Nl as o,Pl as s}from"./iframe-BI2Pxu8D.js";var c,l,u,d,f;e((()=>{o(),t(),i(),c=a(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=r();return(0,c.jsxs)(s,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=r();return(0,c.jsxs)(s,{bg:n(`black`,`white`),color:n(`white`,`black`),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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