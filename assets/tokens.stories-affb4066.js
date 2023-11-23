import{j as r,a as T}from"./jsx-runtime-3bfad254.js";import{e as s,a as g}from"./extend-theme-e27bd439.js";import{u as f}from"./factory-11559d5d.js";import{U as a}from"./ui-provider-0438a48d.js";import{B as i}from"./box-09676477.js";import{C as k}from"./center-6091e5f1.js";import{I as v}from"./image-459cf79c.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-7e521bb3.js";import"./theme-provider-d246dc71.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./environment-provider-733b965a.js";import"./loading-provider-c199d5de.js";import"./index-8cd4feb6.js";import"./component-911fdb88.js";import"./loading-7a918908.js";import"./index-028132fa.js";import"./index-11bf09da.js";import"./index-5e9263a1.js";import"./icon-2f1d814a.js";import"./forward-ref-cf7188bd.js";import"./motion-bd13f5ab.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-e958e5b8.js";import"./index-8bf7f4ad.js";import"./notice-b99d497f.js";import"./alert-0526a4fb.js";import"./use-component-style-57629fd2.js";import"./close-button-ac9a45f9.js";import"./use-image-c3763a88.js";const nr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=s({colors:e})();return r(a,{theme:o,children:r(B,{})})},m=()=>{const o=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=tokens.stories-affb4066.js.map
