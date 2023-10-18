import{a as r,j as T}from"./jsx-runtime-03b4ddbf.js";import{e as s,a as g}from"./extend-theme-8601c7af.js";import{u as f}from"./factory-3147849f.js";import{U as a}from"./ui-provider-64e7f642.js";import{B as i}from"./box-a7c75200.js";import{C as k}from"./center-a5003329.js";import{I as v}from"./image-a49b621b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-03a2d05b.js";import"./theme-provider-1f5b74fc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-1aab5d43.js";import"./loading-provider-ca00ed13.js";import"./index-9c9a8873.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d1722169.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-6f2def66.js";import"./index-d67a3cdd.js";import"./index-3fdaba91.js";import"./index-b3930670.js";import"./icon-733ea9be.js";import"./index-033cf86e.js";import"./container-portal-ffbf9c4d.js";import"./index-d3ea75b5.js";import"./notice-d95b4dfb.js";import"./alert-b974788e.js";import"./use-component-style-82d4d359.js";import"./close-button-83505c42.js";import"./use-image-aba5765f.js";const nr={title:"System / Theme / Tokens"},t=()=>{const{colorMode:o}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',o,'"']})})},n=()=>{const o=g("colors"),e=s({colors:o})();return r(a,{theme:e,children:r(B,{})})},m=()=>{const e=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:e,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const mr=["useColorModeToken","useExtendToken","useSemanticToken"];export{mr as __namedExportsOrder,nr as default,t as useColorModeToken,n as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-3de66be5.js.map
