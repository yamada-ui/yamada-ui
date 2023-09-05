import{j as s,a as p}from"./jsx-runtime-e6a661ac.js";import{a as n}from"./factory-e819892b.js";import{e as a}from"./extend-theme-4c96dbde.js";import{U as c}from"./ui-provider-ce873809.js";import{B as d}from"./box-2d44dc53.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-559e4391.js";import"./environment-provider-5e70bf46.js";import"./loading-provider-a82cb32c.js";import"./index-df6b7dd3.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-ed40a994.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./theme-19663a53.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";import"./index-6bcd17ac.js";import"./container-portal-cbbe0bc5.js";import"./index-2801d3c9.js";import"./notice-4f737ae2.js";import"./alert-ccabac55.js";import"./use-component-style-195b7054.js";import"./close-button-b1ad4075.js";const L={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-54c07780.js.map
