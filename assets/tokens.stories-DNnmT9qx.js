import{j as r}from"./jsx-runtime-X2b_N9AH.js";import{U as s}from"./ui-provider-DWDElRDz.js";import{o as P}from"./factory-BskLObbI.js";import{e as a,a as g}from"./extend-theme-B8nwPMEr.js";import{B as i}from"./box-CZJ9jS-d.js";import{C as f}from"./center-BPH6lPHu.js";import{I as k}from"./image-IP_zms7I.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFMnyllO.js";import"./theme-provider-jjrI8DS5.js";import"./environment-provider-CcIf9lIw.js";import"./motion-BNFRb361.js";import"./loading-provider-CDdYOLF-.js";import"./index-BvZw_CpU.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./loading-saJjm8M-.js";import"./icon-fvknOP9v.js";import"./index-H5wmSkhu.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-CgbLkkPD.js";import"./motion-CrGhO2Op.js";import"./index-DSHhgXSs.js";import"./container-portal-JDqPBgzp.js";import"./index-CqS9fqXy.js";import"./notice-DoZw1b4v.js";import"./alert-Di5w-WcJ.js";import"./close-button-CWeEuSm2.js";import"./use-ripple-CZ_-Qqh5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./use-image-9rSabBlD.js";const or={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(s,{theme:T,children:r.jsxs(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(s,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(s,{theme:o,children:[r.jsx(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const nr=["useColorModeToken","useExtendToken","useSemanticToken"];export{nr as __namedExportsOrder,or as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
