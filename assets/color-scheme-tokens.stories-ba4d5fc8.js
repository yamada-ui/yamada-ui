import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-5f559ecf.js";import{e as a}from"./extend-theme-28c0d9a5.js";import{U as c}from"./ui-provider-603869b0.js";import{B as d}from"./box-c16cb60e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-bf644e73.js";import"./environment-provider-0c5f8842.js";import"./loading-provider-8565f527.js";import"./index-dd1ad792.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-4ebfef6a.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-f83bd05e.js";import"./index-d06ecb96.js";import"./theme-ee3e3fce.js";import"./index-e993c520.js";import"./index-a4d0044e.js";import"./icon-96427744.js";import"./index-033cf86e.js";import"./container-portal-e944bb4d.js";import"./index-d3ea75b5.js";import"./notice-b5d5961c.js";import"./alert-9cfaafe6.js";import"./use-component-style-5e7d3fa1.js";import"./close-button-fc78241b.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-ba4d5fc8.js.map
