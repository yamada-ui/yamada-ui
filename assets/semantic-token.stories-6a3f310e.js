import{a as p,j as e}from"./jsx-runtime-276775ef.js";import{e as a}from"./extend-theme-6e6d1896.js";import{U as d}from"./ui-provider-6163335a.js";import{B as o}from"./box-95ce222e.js";import"./index-1cdf6ce0.js";import"./index-8b0602a1.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./environment-provider-c1da5b39.js";import"./loading-provider-480dca76.js";import"./index-0b74cf33.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-211c7716.js";import"./motion-1ef152f4.js";import"./forward-ref-86842115.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./theme-ead977c1.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";import"./index-f3237c2b.js";import"./container-portal-5153eba9.js";import"./index-a01a9712.js";import"./notice-25b0ea87.js";import"./alert-64325b88.js";import"./use-component-style-645da9e2.js";import"./close-button-cb99a846.js";const H={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const J=["useSemanticToken"];export{J as __namedExportsOrder,H as default,r as useSemanticToken};
//# sourceMappingURL=semantic-token.stories-6a3f310e.js.map
