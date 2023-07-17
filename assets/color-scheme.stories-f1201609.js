import{j as d}from"./jsx-runtime-4d953e71.js";import{g as p,n as t}from"./factory-07cc9cf0.js";import{B as u}from"./box-d7b7850d.js";import"./index-de62f0e0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";const w={title:"System / Styles / Color Scheme"},o=()=>{const{colorMode:e}=p();return d(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),h=t("blackAlpha.800","whiteAlpha.800"),m=t("whiteAlpha.800","blackAlpha.800");return d(u,{bg:h,p:"md",rounded:"md",color:m,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={['blackAlpha.800', 'whiteAlpha.800']} p='md' rounded='md' color={['whiteAlpha.800', 'blackAlpha.800']} transitionProperty='all' transitionDuration='normal'>
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,n,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModetValue('blackAlpha.800', 'whiteAlpha.800');
  const color = useColorModetValue('whiteAlpha.800', 'blackAlpha.800');
  return <Box bg={bg} p='md' rounded='md' color={color} transitionProperty='all' transitionDuration='normal'>
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const x=["basic","useHook"];export{x as __namedExportsOrder,o as basic,w as default,r as useHook};
//# sourceMappingURL=color-scheme.stories-f1201609.js.map
