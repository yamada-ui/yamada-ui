import{j as s,a as p}from"./jsx-runtime-37f7df21.js";import{a as n}from"./factory-81c6291d.js";import{e as a}from"./extend-theme-03bdbd13.js";import{U as c}from"./ui-provider-25001f86.js";import{B as d}from"./box-81c93a1f.js";import"./index-f1f2c4b1.js";import"./extends-3d932e16.js";import"./index-d47dbc89.js";import"./environment-provider-c122b435.js";import"./loading-provider-34b5a91f.js";import"./index-e8888536.js";import"./Combination-57c1ccd2.js";import"./tslib.es6-90f6c3e8.js";import"./motion-88bc75b0.js";import"./motion-16fcbfe3.js";import"./forward-ref-92ccee95.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./theme-2b4f2a73.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";import"./index-b62ab4fb.js";import"./container-portal-07f4b31f.js";import"./index-c74c9f7f.js";import"./notice-57727710.js";import"./alert-f120eb93.js";import"./use-component-style-f03a93f0.js";import"./close-button-2f543ee4.js";const J={title:"System / Theme / Tokens"},o=()=>{const{colorMode:m}=n(),i=a({colors:{primary:["#2196F3","#F44336"]}})();return s(c,{theme:i,children:p(d,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',m,'"']})})};var r,e,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=color-scheme-tokens.stories-1b439d4c.js.map
