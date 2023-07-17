import{j as p,a as e}from"./jsx-runtime-4d953e71.js";import{e as a}from"./extend-theme-21f8bb03.js";import{U as d}from"./ui-provider-7833ec81.js";import{B as o}from"./box-d7b7850d.js";import"./index-de62f0e0.js";import"./index-667b1e1a.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./environment-provider-6d48ceb5.js";import"./loading-provider-9b746d4c.js";import"./index-37462a16.js";import"./Combination-8cb803a5.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d07cf02b.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./theme-326cd56d.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";import"./forward-ref-396247d7.js";import"./index-9f37637c.js";import"./container-portal-1a9228bd.js";import"./index-75381731.js";import"./notice-13a56f8c.js";import"./alert-47d654c2.js";import"./use-component-style-a395c77f.js";import"./close-button-5831b830.js";const G={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const H=["useSemanticToken"];export{H as __namedExportsOrder,G as default,r as useSemanticToken};
//# sourceMappingURL=semantic-token.stories-27893ebf.js.map
