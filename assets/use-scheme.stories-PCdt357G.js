import{a as d}from"./jsx-runtime-5BUNAZ9W.js";import{j as p,q as a}from"./factory-mZ_iv4c5.js";import{B as u}from"./box-fDIv0iq2.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const x={title:"Hooks / useColorMode"},o=()=>{const{colorMode:e}=p();return d(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),h=a("blackAlpha.800","whiteAlpha.800"),m=a("whiteAlpha.800","blackAlpha.800");return d(u,{bg:h,p:"md",rounded:"md",color:m,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var t,l,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} p="md" rounded="md" color={["whiteAlpha.800", "blackAlpha.800"]} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const C=["basic","withValue"];export{C as __namedExportsOrder,o as basic,x as default,r as withValue};
