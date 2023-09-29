import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-9aeef3c5.js";import{U as d}from"./ui-provider-a96f997f.js";import{B as o}from"./box-17a9b8c9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-1b8ce393.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-d5d02e55.js";import"./loading-provider-007c3275.js";import"./index-ad143476.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-3a1a6555.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./theme-53967a8a.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";import"./index-033cf86e.js";import"./container-portal-9ee8ff0f.js";import"./index-d3ea75b5.js";import"./notice-2c1951ac.js";import"./alert-bb2f7269.js";import"./use-component-style-aad79748.js";import"./close-button-43d5181f.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const semantics: Semantics = {
    colors: {
      primary: '#FF7F0B',
      // override token primary
      newPrimary: 'red.500',
      extendPrimary: 'primary'
    }
  };
  const theme = extendTheme({
    semantics
  })();
  return <UIProvider theme={theme}>
      <Box bg='primary' w='full' p='4' rounded='md' color='white'>
        override primary
      </Box>

      <Box bg='newPrimary' w='full' p='4' rounded='md' color='white'>
        new primary
      </Box>

      <Box bg='extendPrimary' w='full' p='4' rounded='md' color='white'>
        extend primary
      </Box>
    </UIProvider>;
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const K=["useSemanticToken"];export{K as __namedExportsOrder,J as default,r as useSemanticToken};
//# sourceMappingURL=semantic-token.stories-faca957a.js.map
