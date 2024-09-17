import{j as r}from"./extends-CwFRzn3r.js";import{U as i}from"./ui-provider-Bsa2Wmgf.js";import{o as P}from"./factory-BjF4_dRw.js";import{e as a,a as g}from"./extend-theme-DhrmMTy8.js";import{B as s}from"./box-B5FcoOR4.js";import{C as f}from"./center-CgHKqMQH.js";import{I as k}from"./image-DqQnNvt7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-MCBmKyEn.js";import"./theme-provider-CpaSpGZh.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./use-component-style-DVO-iEPi.js";import"./forward-ref-BWI-Phbn.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./use-image-WVr8CyK7.js";const Z={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(s,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const $=["useColorModeToken","useExtendToken","useSemanticToken"];export{$ as __namedExportsOrder,Z as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
