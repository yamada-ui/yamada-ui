import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-28c0d9a5.js";import{U as d}from"./ui-provider-603869b0.js";import{B as o}from"./box-c16cb60e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-bf644e73.js";import"./factory-5f559ecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-0c5f8842.js";import"./loading-provider-8565f527.js";import"./index-dd1ad792.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-4ebfef6a.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-f83bd05e.js";import"./index-d06ecb96.js";import"./theme-ee3e3fce.js";import"./index-e993c520.js";import"./index-a4d0044e.js";import"./icon-96427744.js";import"./index-033cf86e.js";import"./container-portal-e944bb4d.js";import"./index-d3ea75b5.js";import"./notice-b5d5961c.js";import"./alert-9cfaafe6.js";import"./use-component-style-5e7d3fa1.js";import"./close-button-fc78241b.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-0403d746.js.map
