import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-591d6cb9.js";import{U as d}from"./ui-provider-7eca8cae.js";import{B as o}from"./box-3f91afd2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-6f020d5b.js";import"./factory-ea08dcfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-40c34aae.js";import"./loading-provider-d340c85d.js";import"./index-1494cdb8.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a585ffe0.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-bc85ffb6.js";import"./index-c817ab90.js";import"./theme-17a0d6cf.js";import"./index-74b59fee.js";import"./index-803a57bb.js";import"./icon-cd648dc6.js";import"./index-033cf86e.js";import"./container-portal-e051976e.js";import"./index-d3ea75b5.js";import"./notice-c8d9fec2.js";import"./alert-d857f029.js";import"./use-component-style-fa830b0f.js";import"./close-button-07e9b685.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-685bf1ff.js.map
