import{j as s,a as p}from"./jsx-runtime-276775ef.js";import{a as n}from"./factory-54465b8b.js";import{e as a}from"./extend-theme-8369480d.js";import{U as c}from"./ui-provider-eaa09156.js";import{B as d}from"./box-95ce222e.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./index-c358cdd5.js";import"./environment-provider-c1da5b39.js";import"./loading-provider-480dca76.js";import"./index-0b74cf33.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-211c7716.js";import"./motion-1ef152f4.js";import"./forward-ref-86842115.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./theme-ead977c1.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";import"./index-f3237c2b.js";import"./container-portal-5153eba9.js";import"./index-a01a9712.js";import"./notice-25b0ea87.js";import"./alert-64325b88.js";import"./use-component-style-645da9e2.js";import"./close-button-cb99a846.js";const J={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const K=["useColorModeToken"];export{K as __namedExportsOrder,J as default,o as useColorModeToken};
//# sourceMappingURL=color-scheme-tokens.stories-984642c0.js.map
