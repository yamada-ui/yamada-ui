import{a as r,j as T}from"./jsx-runtime-b08f8875.js";import{e as s,a as g}from"./extend-theme-488f603a.js";import{u as f}from"./factory-ab7c3580.js";import{U as a}from"./ui-provider-33bf6d72.js";import{B as i}from"./box-ebb86753.js";import{C as k}from"./center-d172a620.js";import{I as v}from"./image-4973800f.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-704f2581.js";import"./theme-provider-1097130b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./environment-provider-c01394a3.js";import"./loading-provider-ee662396.js";import"./index-76f20168.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";import"./forward-ref-cf7188bd.js";import"./motion-2d0d8241.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-d647f37d.js";import"./index-8bf7f4ad.js";import"./notice-c6d0d044.js";import"./alert-96f995e0.js";import"./use-component-style-07e84389.js";import"./close-button-b4ee3b21.js";import"./use-image-0efcb53a.js";const or={title:"System / Theme / Tokens"},t=()=>{const{colorMode:e}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},n=()=>{const e=g("colors"),o=s({colors:e})();return r(a,{theme:o,children:r(B,{})})},m=()=>{const o=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
  const semantics: ThemeSemantics = {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const tr=["useColorModeToken","useExtendToken","useSemanticToken"];export{tr as __namedExportsOrder,or as default,t as useColorModeToken,n as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-0492c6ef.js.map
