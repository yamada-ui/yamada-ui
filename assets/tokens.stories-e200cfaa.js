import{a as r,j as T}from"./jsx-runtime-03b4ddbf.js";import{e as s,a as g}from"./extend-theme-8cc7e146.js";import{u as f}from"./factory-c9bc4a28.js";import{U as a}from"./ui-provider-e6945d99.js";import{B as i}from"./box-c0031f2e.js";import{C as k}from"./center-b95d9abd.js";import{I as v}from"./image-30a01044.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-261cdc9e.js";import"./theme-provider-a03ffa08.js";import"./environment-provider-bc762e27.js";import"./loading-provider-13df117c.js";import"./index-634aeabf.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";import"./forward-ref-8b7d2a6f.js";import"./motion-9f301354.js";import"./motion-90200a2f.js";import"./index-033cf86e.js";import"./container-portal-d8f11cbb.js";import"./index-d3ea75b5.js";import"./notice-8ebf1e7b.js";import"./alert-77d4448d.js";import"./use-component-style-ab2b35f8.js";import"./close-button-7617767f.js";import"./use-image-60bc7fd4.js";const er={title:"System / Theme / Tokens"},t=()=>{const{colorMode:e}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},n=()=>{const e=g("colors"),o=s({colors:e})();return r(a,{theme:o,children:r(B,{})})},m=()=>{const o=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const or=["useColorModeToken","useExtendToken","useSemanticToken"];export{or as __namedExportsOrder,er as default,t as useColorModeToken,n as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-e200cfaa.js.map
