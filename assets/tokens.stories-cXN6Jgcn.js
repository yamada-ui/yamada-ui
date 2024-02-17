import{j as r,a as T}from"./jsx-runtime-5BUNAZ9W.js";import{U as s}from"./ui-provider-FDPzGoTT.js";import{j as g}from"./factory-RXTd6Ype.js";import{e as a,a as f}from"./extend-theme-K-Bg3HvB.js";import{B as i}from"./box-er03aWxy.js";import{C as k}from"./center-HdGXT75I.js";import{I as v}from"./image--lvqpKTj.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-HUFWYrLx.js";import"./theme-provider-sgFj2JQg.js";import"./environment-provider-VC8BXH-w.js";import"./motion-heeYkzTb.js";import"./loading-provider--Nivk1IL.js";import"./index-Yt2yOm05.js";import"./Combination-8oCz4vin.js";import"./loading-wg4TUUCb.js";import"./index-CBfWCvKJ.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";import"./icon-2cwE6nV2.js";import"./forward-ref-A-8Arhkk.js";import"./motion-1HlxJrnU.js";import"./index-eMn_GZVX.js";import"./container-portal-MKckgmqP.js";import"./index-jmm5gWkb.js";import"./notice-k3QWejbC.js";import"./alert-geRj9HO8.js";import"./use-component-style-ur23iJdL.js";import"./close-button-JpPxzesw.js";import"./use-ripple-u7crcLVz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-image-8lx3hKp5.js";const tr={title:"System / Theme / Tokens"},n=()=>{const{colorMode:o}=g(),P=a({colors:{primary:["#2196F3","#F44336"]}})();return r(s,{theme:P,children:T(i,{bg:"primary",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',o,'"']})})},t=()=>{const o=f("colors"),e=a({colors:o})();return r(s,{theme:e,children:r(B,{})})},m=()=>{const e=a({semantics:{colors:{primary:"#FF7F0B",newPrimary:"red.500",extendPrimary:"primary"}}})();return T(s,{theme:e,children:[r(i,{bg:"primary",w:"full",p:"4",rounded:"md",color:"white",children:"override primary"}),r(i,{bg:"newPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"new primary"}),r(i,{bg:"extendPrimary",w:"full",p:"4",rounded:"md",color:"white",children:"extend primary"})]})},B=()=>r(k,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(v,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
