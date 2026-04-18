import{n as e}from"./chunk-zsgVPwQN.js";import{Fs as t,Ps as n,Xp as r,Yp as i,nm as a,sm as o,tm as s}from"./iframe-CHoZGzMw.js";var c,l,u,d,f;e((()=>{n(),s(),i(),c=o(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=a();return(0,c.jsxs)(t,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=a();return(0,c.jsxs)(t,{bg:r(`black`,`white`),color:r(`white`,`black`),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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