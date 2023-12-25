import{j as e}from"./jsx-runtime-TtYKBvr-.js";import{U as a}from"./ui-provider-yGNAv058.js";import{e as d}from"./extend-theme-qdNEpwVh.js";import{C as u}from"./center--2n6uLbu.js";import{I as y}from"./image-YDgOBk7-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-WG22_9xQ.js";import"./factory-K2EgzEzN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-5dfMCWdR.js";import"./motion-AgWUVtfu.js";import"./loading-provider-rGODioNK.js";import"./index-c230YMEh.js";import"./component-G3mliOEp.js";import"./loading-ubMXvBrR.js";import"./index-3YLteYYa.js";import"./index-IiCOgs8R.js";import"./index-fr2XEHwU.js";import"./icon-yFQ9IdhB.js";import"./forward-ref-6T0UNPU-.js";import"./motion-IA6mdqBG.js";import"./index-GPdqE8CR.js";import"./container-portal-xiQGrDEm.js";import"./index-xIHD0DlW.js";import"./notice-4BhmFOzq.js";import"./alert-tqfoW4Zy.js";import"./use-component-style-SBdvRTzg.js";import"./close-button-v1XSz0IO.js";import"./use-ripple-WyPsLtJa.js";import"./use-image-cgtv85zI.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = {
    /**
     * Define the style you want to customize
     */
  };
  const theme = extendTheme({
    styles: {
      resetStyle
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var i,p,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <UIProvider disableResetStyle>
      <App />
    </UIProvider>;
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Q=["customResetStyle","disabledResetStyle"];export{Q as __namedExportsOrder,t as customResetStyle,N as default,r as disabledResetStyle};
