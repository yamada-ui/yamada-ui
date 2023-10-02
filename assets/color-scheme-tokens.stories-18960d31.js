import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-693455ee.js";import{e as a}from"./extend-theme-9175a5c6.js";import{U as c}from"./ui-provider-41cbbe98.js";import{B as d}from"./box-925d69d7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-ead2eac5.js";import"./environment-provider-a0a05ab5.js";import"./loading-provider-0787e42e.js";import"./index-a4c50a71.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a98de681.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-ed892129.js";import"./index-3527803c.js";import"./theme-d25050a9.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";import"./icon-c50323e0.js";import"./index-033cf86e.js";import"./container-portal-76ab62e4.js";import"./index-d3ea75b5.js";import"./notice-f3aee0de.js";import"./alert-8c32f34d.js";import"./use-component-style-3d3df90d.js";import"./close-button-bc32ad51.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-18960d31.js.map
