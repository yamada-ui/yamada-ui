import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-3da97b05.js";import{U as d}from"./ui-provider-0ce1e2cf.js";import{B as o}from"./box-a8c9d15d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d9f6dadc.js";import"./factory-13baf058.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-342a40ee.js";import"./loading-provider-734f9526.js";import"./index-ba2996ff.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a065c970.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9d024140.js";import"./index-e3fbdd0b.js";import"./theme-688174ae.js";import"./index-261ce10c.js";import"./index-5b5a8403.js";import"./icon-e3b07242.js";import"./index-033cf86e.js";import"./container-portal-a32cf525.js";import"./index-d3ea75b5.js";import"./notice-ce75f2e4.js";import"./alert-21c4ff6a.js";import"./use-component-style-1fb1c86d.js";import"./close-button-215ad1ae.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-3daefeaf.js.map
