import{j as r,a as T}from"./jsx-runtime-29545a09.js";import{e as s,a as g}from"./extend-theme-27025ce7.js";import{a as f}from"./factory-bced6cdc.js";import{U as a}from"./ui-provider-a4e9fb75.js";import{B as i}from"./box-a8aa29d7.js";import{C as k}from"./center-aa7104cb.js";import{I as v}from"./image-37ce5770.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-ba0263e7.js";import"./theme-provider-29c1af7d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-689d0b96.js";import"./loading-provider-3e72270c.js";import"./index-b7b61e0f.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-cf248fef.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-8fed7a7a.js";import"./index-2efa400f.js";import"./index-7fac9d85.js";import"./index-dad2a763.js";import"./icon-3797bc47.js";import"./index-033cf86e.js";import"./container-portal-6da291d6.js";import"./index-d3ea75b5.js";import"./notice-db5d9491.js";import"./alert-66a8b31e.js";import"./use-component-style-76eb80d8.js";import"./close-button-2309a4fa.js";import"./use-image-eb8f8fea.js";const nr={title:"System / Theme / Tokens"},t=()=>{const{colorMode:o}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',o,'"']})})},n=()=>{const o=g("colors"),e=s({colors:o})();return r(a,{theme:e,children:r(B,{})})},m=()=>{const e=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:e,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=tokens.stories-2aebb556.js.map
