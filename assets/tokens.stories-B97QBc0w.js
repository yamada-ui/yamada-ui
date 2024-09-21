import{j as r}from"./extends-CwFRzn3r.js";import{U as i}from"./ui-provider-yMwBxUIm.js";import{o as P}from"./factory-DfCPDZht.js";import{e as a,a as g}from"./extend-theme-7mkSnG70.js";import{B as s}from"./box-BNUHdVqZ.js";import{C as f}from"./center-B5cF8U0h.js";import{I as k}from"./image-CgoPyE2J.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_KRzJwV.js";import"./theme-provider-Bw55Thfs.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CXnmHf9o.js";import"./index-BMx7qnvq.js";import"./Combination-IUp2vs9T.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./use-component-style-D0DGb12b.js";import"./forward-ref-BWI-Phbn.js";import"./factory-B9-LT_yD.js";import"./portal-CQMr5Yur.js";import"./index-Drt3gf4w.js";import"./notice-DTPWb24k.js";import"./alert-B68M2OPG.js";import"./close-button-nW1Gs_LT.js";import"./use-ripple-C-c72TCS.js";import"./use-image-D17jHJ_d.js";const Z={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(s,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
