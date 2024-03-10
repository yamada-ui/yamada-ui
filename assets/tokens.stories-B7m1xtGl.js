import{j as r,a as T}from"./jsx-runtime-5BUNAZ9W.js";import{U as s}from"./ui-provider-f7-v_dTI.js";import{j as g}from"./factory-PArTdL2L.js";import{e as a,a as f}from"./extend-theme-4Cwunbs5.js";import{B as i}from"./box-Zg6CDeVy.js";import{C as k}from"./center-uTckAgum.js";import{I as v}from"./image-HlkyUuTv.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-AOOgu23r.js";import"./theme-provider-GeG-940j.js";import"./environment-provider-fChHRy0j.js";import"./motion-heeYkzTb.js";import"./loading-provider-td-a-VOZ.js";import"./index-sbisnaO3.js";import"./Combination-DfugsOYv.js";import"./loading-yz72m8Iy.js";import"./index-ekn2fQi1.js";import"./index-zDL136ZB.js";import"./index-tnmL674y.js";import"./icon-39Pfil-I.js";import"./forward-ref-A-8Arhkk.js";import"./motion-5fUAUGeG.js";import"./index-eMn_GZVX.js";import"./container-portal-C4oLkacu.js";import"./index-jmm5gWkb.js";import"./notice-n6GlXFDf.js";import"./alert-ndBtQ1uU.js";import"./use-component-style-WCoXUinJ.js";import"./close-button-qVEnagAe.js";import"./use-ripple-7QvyeNp2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-image-BfpNFOxm.js";const tr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:e}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',e,'"']})})},t=()=>{const e=f("colors"),o=a({colors:e})();return r(s,{theme:o,children:r(B,{})})},m=()=>{const o=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:o,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
