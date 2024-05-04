import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{U as i}from"./ui-provider-CegOqY5F.js";import{n as P}from"./factory-DB2JyeD8.js";import{e as a,a as g}from"./extend-theme-fAOsuOMa.js";import{B as s}from"./box-w6FEGY1C.js";import{C as f}from"./center-UntJcWLo.js";import{I as k}from"./image-BCDGtlXv.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BY_szq1e.js";import"./theme-provider-CVa4tFyh.js";import"./environment-provider-B_j58KoN.js";import"./motion-B93Hlbuy.js";import"./loading-provider-C84VWPLn.js";import"./index-DfKVCsmU.js";import"./Combination-DJN7gWe0.js";import"./loading-qhJXVDYI.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-eZPQMXFE.js";import"./motion-DWzc3n8e.js";import"./index-D53P4PVU.js";import"./container-portal-Dedn3QCZ.js";import"./index-B8XB3FuZ.js";import"./notice-iR7cp8Fj.js";import"./alert-oZh_Z9zi.js";import"./close-button-BMomi7bd.js";import"./use-ripple-BNFWROsb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./use-image-CSsopwfX.js";const er={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(s,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
