import{a as p,j as e}from"./jsx-runtime-276775ef.js";import{e as a}from"./extend-theme-bcb14b98.js";import{U as d}from"./ui-provider-f97965d3.js";import{B as o}from"./box-34b29ebb.js";import"./index-1cdf6ce0.js";import"./index-4e46c8e5.js";import"./factory-75cc801c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./environment-provider-f0cd95a3.js";import"./loading-provider-61e73c0d.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./theme-8f32df8a.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./forward-ref-86842115.js";import"./index-7320e9bd.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-53506941.js";import"./motion-1ef152f4.js";import"./index-f3237c2b.js";import"./container-portal-1f9dc5e6.js";import"./index-a01a9712.js";import"./notice-ba0e8aa8.js";import"./alert-185d7d3c.js";import"./use-component-style-9ee8741d.js";import"./close-button-a6b70db7.js";const H={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-fd65a0b7.js.map
