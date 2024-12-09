import{j as r}from"./jsx-runtime-CfatFE5O.js";import{U as i}from"./ui-provider-DsKQbJxr.js";import{O as P}from"./factory-ZSnRp-09.js";import{e as a,a as g}from"./extend-theme-BoH28M9N.js";import{B as s}from"./box-C9iD9jp7.js";import{C as f}from"./center-BAqe7zvx.js";import{I as k}from"./image-CV7tXz41.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-3WpywC.js";import"./theme-provider-B08WIPTu.js";import"./i18n-provider-hIJzsxvZ.js";import"./proxy-Cmv22F1b.js";import"./loading-provider--y3RkBPg.js";import"./index-B2YNaAAX.js";import"./Combination-CkmEMpJG.js";import"./loading-YSmVr9V5.js";import"./icon-D-mdHq7J.js";import"./use-component-style-Bj6hwx_Q.js";import"./use-var-BqMKFNOM.js";import"./forward-ref-D13m8o2p.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-g1ZPYqox.js";import"./notice-DvQqbFbR.js";import"./alert-B_-MDf54.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./use-image-DLrTaywm.js";const er={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",color:"white",p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{extendPrimary:"primary",newPrimary:"red.500",primary:"#FF7F0B"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",color:"white",p:"4",rounded:"md",w:"full",children:"override primary"}),r.jsx(s,{bg:"newPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"extend primary"})]})},j=()=>r.jsx(f,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(k,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"32rem",w:"full"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const or=["useColorModeToken","useExtendToken","useSemanticToken"];export{or as __namedExportsOrder,er as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
