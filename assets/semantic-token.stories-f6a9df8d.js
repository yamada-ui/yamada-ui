import{a as p,j as e}from"./jsx-runtime-e6a661ac.js";import{e as a}from"./extend-theme-4c96dbde.js";import{U as d}from"./ui-provider-ce873809.js";import{B as o}from"./box-2d44dc53.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-559e4391.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./environment-provider-5e70bf46.js";import"./loading-provider-a82cb32c.js";import"./index-df6b7dd3.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-ed40a994.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./theme-19663a53.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";import"./index-6bcd17ac.js";import"./container-portal-cbbe0bc5.js";import"./index-2801d3c9.js";import"./notice-4f737ae2.js";import"./alert-ccabac55.js";import"./use-component-style-195b7054.js";import"./close-button-b1ad4075.js";const K={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const L=["useSemanticToken"];export{L as __namedExportsOrder,K as default,r as useSemanticToken};
//# sourceMappingURL=semantic-token.stories-f6a9df8d.js.map
