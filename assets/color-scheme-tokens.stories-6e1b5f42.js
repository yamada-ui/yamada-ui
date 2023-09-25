import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-0893e977.js";import{e as a}from"./extend-theme-ea62e7da.js";import{U as c}from"./ui-provider-230b9984.js";import{B as d}from"./box-17a9b8c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-16b89318.js";import"./environment-provider-d5d02e55.js";import"./loading-provider-007c3275.js";import"./index-ad143476.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-3a1a6555.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./theme-53967a8a.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";import"./index-033cf86e.js";import"./container-portal-9ee8ff0f.js";import"./index-d3ea75b5.js";import"./notice-91eecb0f.js";import"./alert-ec0b3841.js";import"./use-component-style-1d64e7de.js";import"./close-button-69b575fd.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-6e1b5f42.js.map
