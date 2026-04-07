import{n as e}from"./chunk-zsgVPwQN.js";import{cp as t,ds as n,np as r,pp as i,sp as a,tp as o,us as s}from"./iframe-DZGIdQv0.js";var c,l,u,d,f;e((()=>{s(),a(),o(),c=i(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=t();return(0,c.jsxs)(n,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=t();return(0,c.jsxs)(n,{bg:r(`black`,`white`),color:r(`white`,`black`),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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