import{a as p,j as e}from"./jsx-runtime-29545a09.js";import{e as a}from"./extend-theme-896eb7dc.js";import{U as d}from"./ui-provider-ffffcd29.js";import{B as o}from"./box-988fdc58.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-74fccf14.js";import"./factory-e20f0797.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-daea09da.js";import"./loading-provider-7ec773cb.js";import"./index-38a18756.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-a038b553.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-427fd69a.js";import"./index-7c33f66e.js";import"./theme-752d0904.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./icon-0ac17974.js";import"./index-033cf86e.js";import"./container-portal-1ca43038.js";import"./index-d3ea75b5.js";import"./notice-2372c876.js";import"./alert-bfe1dfdf.js";import"./use-component-style-eed0605d.js";import"./close-button-e957af92.js";const J={title:"System / Theme / Tokens"},r=()=>{const n=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return p(d,{theme:n,children:[e(o,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),e(o,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),e(o,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=semantic-token.stories-2541f938.js.map
