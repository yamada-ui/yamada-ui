import{j as s,a as p}from"./jsx-runtime-29545a09.js";import{a as n}from"./factory-13baf058.js";import{e as a}from"./extend-theme-3da97b05.js";import{U as c}from"./ui-provider-0ce1e2cf.js";import{B as d}from"./box-a8c9d15d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-d9f6dadc.js";import"./environment-provider-342a40ee.js";import"./loading-provider-734f9526.js";import"./index-ba2996ff.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a065c970.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9d024140.js";import"./index-e3fbdd0b.js";import"./theme-688174ae.js";import"./index-261ce10c.js";import"./index-5b5a8403.js";import"./icon-e3b07242.js";import"./index-033cf86e.js";import"./container-portal-a32cf525.js";import"./index-d3ea75b5.js";import"./notice-ce75f2e4.js";import"./alert-21c4ff6a.js";import"./use-component-style-1fb1c86d.js";import"./close-button-215ad1ae.js";const K={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-23e391d8.js.map
