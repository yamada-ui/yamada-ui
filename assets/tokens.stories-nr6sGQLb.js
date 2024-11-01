import{j as r}from"./extends-CwFRzn3r.js";import{U as i}from"./ui-provider-Bvww1J3G.js";import{I as P}from"./factory-CBW6YcbY.js";import{e as a,a as g}from"./extend-theme-DhYeMO6V.js";import{B as s}from"./box-BtRRJWAU.js";import{C as f}from"./center-CfmrFwEl.js";import{I as k}from"./image-6ENe9JPd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-33MD56qN.js";import"./theme-provider-B8NHi_rL.js";import"./motion-B7t0mTYZ.js";import"./loading-provider-Ds-i5NRY.js";import"./index-BhJ-TW00.js";import"./Combination-IUp2vs9T.js";import"./loading-DZQf4R8P.js";import"./icon-CQ7oKYSm.js";import"./use-component-style-Givb0biW.js";import"./use-var-BcRMoVLh.js";import"./forward-ref-BWI-Phbn.js";import"./index-CGy0U2a3.js";import"./portal-DCEThVLn.js";import"./index-CS4BWtGh.js";import"./factory-B6ZnNkK9.js";import"./notice-CImpiTIX.js";import"./alert-Dm48qGsv.js";import"./triangle-alert-C2tUJAbO.js";import"./lucide-icon-4Wt4_XDL.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";import"./use-image-UAMWVfre.js";const er={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",color:"white",p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{extendPrimary:"primary",newPrimary:"red.500",primary:"#FF7F0B"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",color:"white",p:"4",rounded:"md",w:"full",children:"override primary"}),r.jsx(s,{bg:"newPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",color:"white",p:"4",rounded:"md",w:"full",children:"extend primary"})]})},j=()=>r.jsx(f,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(k,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"32rem",w:"full"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
