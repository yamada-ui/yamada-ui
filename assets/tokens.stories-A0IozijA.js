import{j as r,a as T}from"./jsx-runtime-TtYKBvr-.js";import{U as s}from"./ui-provider-3oypVV75.js";import{e as g}from"./factory-GBKO6tqf.js";import{e as a,a as f}from"./extend-theme-YYZ0dvfD.js";import{B as i}from"./box-kDaKgkz4.js";import{C as k}from"./center-C_puks5H.js";import{I as v}from"./image-mXh10VTO.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-M6E7j4xw.js";import"./environment-provider-JFUuQBeY.js";import"./loading-provider-mqpVYqR_.js";import"./index-bBA2NZFf.js";import"./component-G3mliOEp.js";import"./loading-S17wzBnk.js";import"./index-LBRkRkdp.js";import"./index-LoV1DwO_.js";import"./index-sZBzzfRi.js";import"./icon-uEf7artW.js";import"./forward-ref-6T0UNPU-.js";import"./motion--NSyoWHf.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-RBWavUqi.js";import"./index-xIHD0DlW.js";import"./notice-itPvnU3c.js";import"./alert-ws6fErr0.js";import"./use-component-style-GDmDNOF2.js";import"./close-button-RI3fd6L9.js";import"./use-ripple-Rwx17x6B.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-image-xTin-YKP.js";const nr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=f("colors"),o=a({colors:e})();return r(s,{theme:o,children:r(B,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
