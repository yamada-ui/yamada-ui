import{j as s,a as p}from"./jsx-runtime-e6a661ac.js";import{a as n}from"./factory-3c20bca9.js";import{e as a}from"./extend-theme-be4001c2.js";import{U as c}from"./ui-provider-2a96b827.js";import{B as d}from"./box-1be76882.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-02774241.js";import"./environment-provider-ca813800.js";import"./loading-provider-9b0281b0.js";import"./index-121a462f.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./theme-2199e320.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./notice-6a6f87ef.js";import"./alert-efbb756e.js";import"./use-component-style-277e16ba.js";import"./close-button-922cce2a.js";const L={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-760fbe92.js.map
