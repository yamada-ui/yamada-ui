import{j as s,a as p}from"./jsx-runtime-276775ef.js";import{a as n}from"./factory-75cc801c.js";import{e as a}from"./extend-theme-bcb14b98.js";import{U as c}from"./ui-provider-f97965d3.js";import{B as d}from"./box-34b29ebb.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./index-4e46c8e5.js";import"./environment-provider-f0cd95a3.js";import"./loading-provider-61e73c0d.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./theme-8f32df8a.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./forward-ref-86842115.js";import"./index-7320e9bd.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-53506941.js";import"./motion-1ef152f4.js";import"./index-f3237c2b.js";import"./container-portal-1f9dc5e6.js";import"./index-a01a9712.js";import"./notice-ba0e8aa8.js";import"./alert-185d7d3c.js";import"./use-component-style-9ee8741d.js";import"./close-button-a6b70db7.js";const J={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-ab63b578.js.map
