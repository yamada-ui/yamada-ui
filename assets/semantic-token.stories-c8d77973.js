import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-8a277c4c.js";import{U as d}from"./ui-provider-494adcb9.js";import{B as o}from"./box-e7553e69.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-fad5103e.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-eeae9a72.js";import"./loading-provider-f5540443.js";import"./index-065321ef.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-54b001af.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-a8f76bf0.js";import"./index-d953af92.js";import"./theme-f3d0af46.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./icon-2298db64.js";import"./index-033cf86e.js";import"./container-portal-ebea413f.js";import"./index-d3ea75b5.js";import"./notice-9f128b39.js";import"./alert-34b55442.js";import"./use-component-style-fb710021.js";import"./close-button-9cffda7a.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-c8d77973.js.map
