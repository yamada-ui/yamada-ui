import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-9175a5c6.js";import{U as d}from"./ui-provider-41cbbe98.js";import{B as o}from"./box-925d69d7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-ead2eac5.js";import"./factory-693455ee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-a0a05ab5.js";import"./loading-provider-0787e42e.js";import"./index-a4c50a71.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a98de681.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-ed892129.js";import"./index-3527803c.js";import"./theme-d25050a9.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";import"./icon-c50323e0.js";import"./index-033cf86e.js";import"./container-portal-76ab62e4.js";import"./index-d3ea75b5.js";import"./notice-f3aee0de.js";import"./alert-8c32f34d.js";import"./use-component-style-3d3df90d.js";import"./close-button-bc32ad51.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-7f2a4db5.js.map
