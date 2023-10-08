import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-ea08dcfd.js";import{e as a}from"./extend-theme-591d6cb9.js";import{U as c}from"./ui-provider-7eca8cae.js";import{B as d}from"./box-3f91afd2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-6f020d5b.js";import"./environment-provider-40c34aae.js";import"./loading-provider-d340c85d.js";import"./index-1494cdb8.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a585ffe0.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-bc85ffb6.js";import"./index-c817ab90.js";import"./theme-17a0d6cf.js";import"./index-74b59fee.js";import"./index-803a57bb.js";import"./icon-cd648dc6.js";import"./index-033cf86e.js";import"./container-portal-e051976e.js";import"./index-d3ea75b5.js";import"./notice-c8d9fec2.js";import"./alert-d857f029.js";import"./use-component-style-fa830b0f.js";import"./close-button-07e9b685.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ['#2196F3', '#F44336']
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg='primary' p='md' rounded='md' color='white' transitionProperty='all' transitionDuration='normal'>
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const L=["useColorModeToken"];export{L as __namedExportsOrder,K as default,o as useColorModeToken};
//# sourceMappingURL=color-scheme-tokens.stories-446b6af9.js.map
