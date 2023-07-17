import{a as s,j as p}from"./jsx-runtime-4d953e71.js";import{e as n}from"./extend-theme-21f8bb03.js";import{g as a}from"./factory-07cc9cf0.js";import{U as c}from"./ui-provider-7833ec81.js";import{B as d}from"./box-d7b7850d.js";import"./index-de62f0e0.js";import"./index-667b1e1a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./environment-provider-6d48ceb5.js";import"./loading-provider-9b746d4c.js";import"./index-37462a16.js";import"./Combination-8cb803a5.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d07cf02b.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./theme-326cd56d.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";import"./forward-ref-396247d7.js";import"./index-9f37637c.js";import"./container-portal-1a9228bd.js";import"./index-75381731.js";import"./notice-13a56f8c.js";import"./alert-47d654c2.js";import"./use-component-style-a395c77f.js";import"./close-button-5831b830.js";const H={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=a(),i=n({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const J=["useColorModeToken"];export{J as __namedExportsOrder,H as default,o as useColorModeToken};
//# sourceMappingURL=color-scheme-tokens.stories-dfdc949e.js.map
