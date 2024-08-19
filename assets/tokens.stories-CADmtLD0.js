import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{U as i}from"./ui-provider-D4VN7gsW.js";import{o as P}from"./factory-BfeSrOMR.js";import{e as a,a as g}from"./extend-theme-BVw2a-Ry.js";import{B as s}from"./box-DtlfYO23.js";import{C as f}from"./center-DMD5Vy7Z.js";import{I as k}from"./image-BsHwIhaO.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Byy5cVRW.js";import"./theme-provider-Dn5H8djQ.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-67Ziabpp.js";import"./index-CMIDqJXN.js";import"./Combination-CONbhR2A.js";import"./loading-BJ_4QuWs.js";import"./icon-XC0we3t2.js";import"./index-CeW_W80V.js";import"./use-component-style-DcixVaSS.js";import"./forward-ref-BmTAT9U5.js";import"./motion-DC3xxboT.js";import"./index-Ms_xn5rh.js";import"./container-portal-CD6d5l7x.js";import"./index-DxjWwZXO.js";import"./notice-VR331ZAS.js";import"./alert-BwOY4fNX.js";import"./close-button-BHfJDSTC.js";import"./use-ripple-DDagHHie.js";import"./extends-CF3RwP-h.js";import"./use-image-Dr9LDOwy.js";const rr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=P(),T=a({colors:{primary:["#2196F3","#F44336"]}})();return r.jsx(i,{theme:T,children:r.jsxs(s,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=g("colors"),o=a({colors:e})();return r.jsx(i,{theme:o,children:r.jsx(j,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return r.jsxs(i,{theme:o,children:[r.jsx(s,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r.jsx(s,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r.jsx(s,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},j=()=>r.jsx(f,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(k,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const er=["useColorModeToken","useExtendToken","useSemanticToken"];export{er as __namedExportsOrder,rr as default,n as useColorModeToken,t as useExtendToken,m as useSemanticToken};
