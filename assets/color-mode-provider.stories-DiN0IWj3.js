import{az as i,j as u}from"./iframe-Bh9OJiMa.js";import{u as t}from"./use-color-mode-value-1gZklRVD.js";import{B as m}from"./box-Bg2AiZ11.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Styled System / Color Mode"},o=()=>{const{colorMode:e}=i();return u.jsxs(m,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=i(),p=t("black","white"),M=t("white","black");return u.jsxs(m,{bg:p,color:M,p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current colorMode is "',e,'"']})};var n,s,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");
  return <Box bg={bg} color={color} p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const C=["Basic","Hook"];export{o as Basic,r as Hook,C as __namedExportsOrder,B as default};
