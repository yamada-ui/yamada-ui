import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r}from"./color-mode-provider-CifNlfSs.js";import{n as i,r as a}from"./use-color-mode-value-CGk-7-FX.js";import{n as o,t as s}from"./box-C47iDJeO.js";var c,l,u,d,f;function p(){return(p=e((()=>{o(),n(),i(),c=t(),l={title:`Styled System / Color Mode`},u=()=>{let{colorMode:e}=r();return(0,c.jsxs)(s,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},d=()=>{let{colorMode:e}=r(),t=a(`black`,`white`),n=a(`white`,`black`);return(0,c.jsxs)(s,{bg:t,color:n,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current colorMode is "`,e,`"`]})},f=[`Basic`,`Hook`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Basic,d as Hook,f as __namedExportsOrder,l as default};