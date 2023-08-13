import{a as p,j as e}from"./jsx-runtime-e6a661ac.js";import{e as a}from"./extend-theme-be4001c2.js";import{U as d}from"./ui-provider-2a96b827.js";import{B as o}from"./box-1be76882.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-02774241.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./environment-provider-ca813800.js";import"./loading-provider-9b0281b0.js";import"./index-121a462f.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./theme-2199e320.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./notice-6a6f87ef.js";import"./alert-efbb756e.js";import"./use-component-style-277e16ba.js";import"./close-button-922cce2a.js";const K={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-ed6c5c81.js.map
