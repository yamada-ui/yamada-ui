import{j as s,a as p}from"./jsx-runtime-e6a661ac.js";import{a as n}from"./factory-3c20bca9.js";import{e as a}from"./extend-theme-47300db0.js";import{U as c}from"./ui-provider-b90281bb.js";import{B as d}from"./box-1be76882.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-889e24e9.js";import"./environment-provider-ca813800.js";import"./loading-provider-4472eab6.js";import"./index-121a462f.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-3c2f8b38.js";import"./index-1e5cc672.js";import"./theme-00f66a43.js";import"./index-14097b93.js";import"./index-f963e1c4.js";import"./icon-4e9764f5.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./notice-92746e96.js";import"./alert-69d52738.js";import"./use-component-style-b3c7bc86.js";import"./close-button-26ca03e9.js";const L={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const N=["useColorModeToken"];export{N as __namedExportsOrder,L as default,o as useColorModeToken};
//# sourceMappingURL=color-scheme-tokens.stories-f937f3ea.js.map
