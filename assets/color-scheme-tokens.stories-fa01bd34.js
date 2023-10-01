import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-e20f0797.js";import{e as a}from"./extend-theme-896eb7dc.js";import{U as c}from"./ui-provider-ffffcd29.js";import{B as d}from"./box-988fdc58.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-74fccf14.js";import"./environment-provider-daea09da.js";import"./loading-provider-7ec773cb.js";import"./index-38a18756.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a038b553.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-427fd69a.js";import"./index-7c33f66e.js";import"./theme-752d0904.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./icon-0ac17974.js";import"./index-033cf86e.js";import"./container-portal-1ca43038.js";import"./index-d3ea75b5.js";import"./notice-2372c876.js";import"./alert-bfe1dfdf.js";import"./use-component-style-eed0605d.js";import"./close-button-e957af92.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-fa01bd34.js.map
