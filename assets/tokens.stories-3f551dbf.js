import{a as r,j as T}from"./jsx-runtime-03b4ddbf.js";import{e as s,a as g}from"./extend-theme-7750126d.js";import{u as f}from"./factory-5c69ebb0.js";import{U as a}from"./ui-provider-9396d4db.js";import{B as i}from"./box-e201343f.js";import{C as k}from"./center-d50b689d.js";import{I as v}from"./image-bbd3a754.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-5cd0c3c5.js";import"./theme-provider-cb22a602.js";import"./environment-provider-97639767.js";import"./loading-provider-b53954b2.js";import"./index-2f1549ef.js";import"./loading-6fc37ca1.js";import"./index-e9290b19.js";import"./index-3c722384.js";import"./index-a304defb.js";import"./icon-b93ac65a.js";import"./forward-ref-8b7d2a6f.js";import"./motion-519043e1.js";import"./motion-90200a2f.js";import"./index-033cf86e.js";import"./container-portal-74757e9f.js";import"./index-d3ea75b5.js";import"./notice-b467e5eb.js";import"./alert-6183eed3.js";import"./use-component-style-7eac11b7.js";import"./close-button-e2af6a37.js";import"./use-image-209050f9.js";const er={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=f(),P=s({colors:{primary:["#2196F3","#F44336"]}})();return r(a,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=s({colors:e})();return r(a,{theme:o,children:r(B,{})})},m=()=>{const o=s({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(a,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const or=["useColorModeToken","useExtendToken","useSemanticToken"];export{or as __namedExportsOrder,er as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
//# sourceMappingURL=tokens.stories-3f551dbf.js.map
