import{az as c,j as i}from"./iframe-FV6Pf4zG.js";import{u as r}from"./use-color-mode-value-CR8x27_R.js";import{B as d}from"./box-lmNTjs2t.js";import"./preload-helper-C1FmrZbK.js";const M={title:"Hooks / useColorModeValue"},o=()=>{const{colorMode:s}=c(),l=r("blackAlpha.800","whiteAlpha.800"),n=r("whiteAlpha.800","blackAlpha.800");return i.jsxs(d,{bg:l,color:n,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',s,'"']})};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const b=["Basic"];export{o as Basic,b as __namedExportsOrder,M as default};
