import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{U as s}from"./ui-provider-BrTCx3ip.js";import{P}from"./factory-DbNU74ts.js";import{e as a,a as g}from"./extend-theme-CmUkcRVq.js";import{B as i}from"./box-CKfluZfz.js";import{C as f}from"./center-B3pLLn64.js";import{I as k}from"./image-AsrGZXBk.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-j-_balfN.js";import"./theme-provider-ChqdwXGn.js";import"./i18n-provider-D58p8CY1.js";import"./proxy-BdCiNrpl.js";import"./loading-provider-kitZsRjt.js";import"./index-Dog50vdO.js";import"./Combination-4Rar1Jsv.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./use-var-DlbRU9j0.js";import"./forward-ref-Ukjd1cIW.js";import"./memo-CPHdbx3K.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-DGyI5Ya3.js";import"./notice-DQQ0jAKh.js";import"./alert-n1mY6WpW.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./use-image-D0o6TYRh.js";const or={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(s,{theme:T,children:r.jsxs(i,{bg:"primary",color:"white",p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(s,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{extendPrimary:"primary",newPrimary:"red.500",primary:"#FF7F0B"}}})();return r.jsxs(s,{theme:o,children:[r.jsx(i,{bg:"primary",color:"white",p:"4",rounded:"md",w:"full",children:"override primary"}),r.jsx(i,{bg:"newPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"new primary"}),r.jsx(i,{bg:"extendPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"extend primary"})]})},j=()=>r.jsx(f,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(k,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"32rem",w:"full"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
      <Box bg="primary" color="white" p="md" rounded="md" transitionDuration="normal" transitionProperty="all">
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
      extendPrimary: "primary",
      newPrimary: "red.500",
      primary: "#FF7F0B" // override token primary
    }
  };
  const theme = extendTheme({
    semantics
  })();
  return <UIProvider theme={theme}>
      <Box bg="primary" color="white" p="4" rounded="md" w="full">
        override primary
      </Box>

      <Box bg="newPrimary" color="white" p="4" rounded="md" w="full">
        new primary
      </Box>

      <Box bg="extendPrimary" color="white" p="4" rounded="md" w="full">
        extend primary
      </Box>
    </UIProvider>;
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const nr=["useColorModeToken","useExtendToken","useSemanticToken"];export{nr as __namedExportsOrder,or as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
