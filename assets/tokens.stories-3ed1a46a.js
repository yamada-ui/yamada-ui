import{a as r,j as T}from"./jsx-runtime-b08f8875.js";import{e as s,a as g}from"./extend-theme-44529a2c.js";import{u as f}from"./factory-2d442159.js";import{U as a}from"./ui-provider-88cfb06e.js";import{B as i}from"./box-262adc2c.js";import{C as k}from"./center-91109801.js";import{I as v}from"./image-0609fc88.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-cfedfcc5.js";import"./theme-provider-78d359c6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./environment-provider-d44107bb.js";import"./loading-provider-ff9a5329.js";import"./index-161daff9.js";import"./component-911fdb88.js";import"./loading-9c6ba408.js";import"./index-7636bab8.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./icon-a76117e5.js";import"./forward-ref-cf7188bd.js";import"./motion-f1cc01af.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-8be8bf32.js";import"./index-8bf7f4ad.js";import"./notice-6c581891.js";import"./alert-45c11755.js";import"./use-component-style-b6002d28.js";import"./close-button-7784ce89.js";import"./use-image-9c7f5b4b.js";const nr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=s({colors:e})();return r(a,{theme:o,children:r(B,{})})},m=()=>{const o=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const colors: ThemeTokens = {
    primary: ["#2196F3", "#F44336"]
  };
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="normal">
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>;
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors: ThemeTokens = extendToken("colors");
  const theme = extendTheme({
    colors
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,y,w;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const semantics: ThemeSemantics = {
    colors: {
      primary: "#FF7F0B",
      // override token primary
      newPrimary: "red.500",
      extendPrimary: "primary"
    }
  };
  const theme = extendTheme({
    semantics
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" w="full" p="4" rounded="md" color="white">
        override primary
      </Box>

      <Box bg="newPrimary" w="full" p="4" rounded="md" color="white">
        new primary
      </Box>

      <Box bg="extendPrimary" w="full" p="4" rounded="md" color="white">
        extend primary
      </Box>
    </UIProvider>;
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const tr=["useColorModeToken","useExtendToken","useSemanticToken"];export{tr as __namedExportsOrder,nr as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-3ed1a46a.js.map
