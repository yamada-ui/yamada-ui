import{j as r,a as T}from"./jsx-runtime-29545a09.js";import{e as s,a as g}from"./extend-theme-32f0f6a9.js";import{a as f}from"./factory-1710cdec.js";import{U as a}from"./ui-provider-07c2d7ab.js";import{B as i}from"./box-91731c35.js";import{C as k}from"./center-e50a4a84.js";import{I as v}from"./image-e31ea93e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-dcf282fd.js";import"./theme-8ffbcb8d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-16be50e4.js";import"./loading-provider-321e31fa.js";import"./index-463d8b9a.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d7d6e7aa.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-2f69458e.js";import"./index-9e3e25b4.js";import"./index-1b18eee5.js";import"./index-93cf4015.js";import"./icon-a96e6c8c.js";import"./index-033cf86e.js";import"./container-portal-1f290143.js";import"./index-d3ea75b5.js";import"./notice-5a8655b9.js";import"./alert-44a24153.js";import"./use-component-style-41572cdb.js";import"./close-button-262cf133.js";import"./use-image-5f1862fe.js";const nr={title:"System / Theme / Tokens"},t=()=>{const{colorMode:o}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',o,'"']})})},n=()=>{const o=g("colors"),e=s({colors:o})();return r(a,{theme:e,children:r(B,{})})},m=()=>{const e=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:e,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ['#2196F3', '#F44336']
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg='primary' p='md' rounded='md' color='white' transitionProperty='all' transitionDuration='normal'>
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors: ThemeTokens = extendToken('colors');
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const mr=["useColorModeToken","useExtendToken","useSemanticToken"];export{mr as __namedExportsOrder,nr as default,t as useColorModeToken,n as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-9a49eead.js.map
