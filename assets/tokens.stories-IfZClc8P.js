import{j as r,a as T}from"./jsx-runtime-TtYKBvr-.js";import{U as s}from"./ui-provider-nkFuVjNy.js";import{j as g}from"./factory-APG2CWDq.js";import{e as a,a as f}from"./extend-theme-Tpj-CAu3.js";import{B as i}from"./box-aVe7Qm1R.js";import{C as k}from"./center-buHHRxIa.js";import{I as v}from"./image-JRY3unre.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-R8DBODQ4.js";import"./theme-provider-huIiJlAo.js";import"./environment-provider-ebV35j6x.js";import"./motion-RGBG165B.js";import"./loading-provider-qN3qwwi2.js";import"./index-dH9witMp.js";import"./Combination-X6sFZeet.js";import"./loading-tO_V0BGI.js";import"./index-VWNlQR2I.js";import"./index-iy1iKMCH.js";import"./index-DwEmuzi-.js";import"./icon-qB0k_Rc9.js";import"./forward-ref-6T0UNPU-.js";import"./motion-YDUrcbbR.js";import"./index-dKw0visz.js";import"./container-portal-o5r_vKh6.js";import"./index-xIHD0DlW.js";import"./notice-1NARxRzM.js";import"./alert-JwLoPDAe.js";import"./use-component-style-OLn8-IaK.js";import"./close-button-0LYyHiMY.js";import"./use-ripple-PKVw7PLF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-image-AuCul83v.js";const tr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:o}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',o,'"']})})},t=()=>{const o=f("colors"),e=a({colors:o})();return r(s,{theme:e,children:r(B,{})})},m=()=>{const e=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:e,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const mr=["useColorModeToken","useExtendToken","useSemanticToken"];export{mr as __namedExportsOrder,tr as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
