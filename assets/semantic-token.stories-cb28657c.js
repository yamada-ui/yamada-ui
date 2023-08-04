import{a as p,j as e}from"./jsx-runtime-37f7df21.js";import{e as a}from"./extend-theme-b67c1bbc.js";import{U as d}from"./ui-provider-44c10877.js";import{B as o}from"./box-81c93a1f.js";import"./index-f1f2c4b1.js";import"./index-42518dec.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./environment-provider-c122b435.js";import"./loading-provider-34b5a91f.js";import"./index-e8888536.js";import"./Combination-57c1ccd2.js";import"./tslib.es6-90f6c3e8.js";import"./motion-88bc75b0.js";import"./motion-16fcbfe3.js";import"./forward-ref-92ccee95.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./theme-2b4f2a73.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";import"./index-b62ab4fb.js";import"./container-portal-07f4b31f.js";import"./index-c74c9f7f.js";import"./notice-57727710.js";import"./alert-f120eb93.js";import"./use-component-style-f03a93f0.js";import"./close-button-2f543ee4.js";const H={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-cb28657c.js.map
