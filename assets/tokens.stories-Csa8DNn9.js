import{j as r,a as T}from"./jsx-runtime-2xDJh5tt.js";import{U as s}from"./ui-provider-Umc9Mnar.js";import{j as g}from"./factory-kXR3An-G.js";import{e as a,a as f}from"./extend-theme-BJQDiQF4.js";import{B as i}from"./box-BLs15Z1y.js";import{C as k}from"./center-8K7PHZ-H.js";import{I as v}from"./image-CtPRLnvJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_8cg2h.js";import"./theme-provider-Bd5T4K5M.js";import"./environment-provider-C0WtuHQO.js";import"./motion-JgkBPv6g.js";import"./loading-provider-BXCVmkwq.js";import"./index-CP6JVgmG.js";import"./Combination-DlzjZhkT.js";import"./loading-B8AyfAAt.js";import"./index-C-d4WQS4.js";import"./index-DqoR4ST1.js";import"./index-B3rKjj8b.js";import"./icon-CXZIg4wR.js";import"./forward-ref-DuAegr0M.js";import"./motion-Ca3VN97B.js";import"./index-_tcQm2Fk.js";import"./container-portal-H66RvNRR.js";import"./index-BtM5VmRH.js";import"./notice-CTFWT_I_.js";import"./alert-CZPx4gA7.js";import"./use-component-style-BnPBcn2P.js";import"./close-button-BMuAXO8x.js";import"./use-ripple-Q0byik3_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-image-DLd_6Rin.js";const tr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=f("colors"),o=a({colors:e})();return r(s,{theme:o,children:r(B,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
