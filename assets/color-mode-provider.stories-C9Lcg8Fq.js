import{n as e}from"./chunk-jRWAZmH_.js";import{I as t,L as n,S as r,x as i}from"./core-D0ebHbTd.js";import{t as a}from"./jsx-runtime-D_578c1K.js";import{t as o}from"./box-BiheFhkD.js";import{Fo as s}from"./iframe-DKJKk4V0.js";var c,l,u,d,f;e((()=>{s(),t(),i(),c=a(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=n();return(0,c.jsxs)(o,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=n();return(0,c.jsxs)(o,{bg:r(`black`,`white`),color:r(`white`,`black`),p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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