import{a as d}from"./jsx-runtime-e6a661ac.js";import{a as p,b as a}from"./factory-e819892b.js";import{B as u}from"./box-2d44dc53.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";const x={title:"Hooks / useColorMode"},o=()=>{const{colorMode:e}=p();return d(u,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})},r=()=>{const{colorMode:e}=p(),h=a("blackAlpha.800","whiteAlpha.800"),m=a("whiteAlpha.800","blackAlpha.800");return d(u,{bg:h,p:"md",rounded:"md",color:m,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})};var t,l,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
  const bg = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const color = useColorModeValue('whiteAlpha.800', 'blackAlpha.800');
  return <Box bg={bg} p='md' rounded='md' color={color} transitionProperty='all' transitionDuration='normal'>
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const C=["basic","withValue"];export{C as __namedExportsOrder,o as basic,x as default,r as withValue};
//# sourceMappingURL=use-scheme.stories-8bba18dc.js.map
