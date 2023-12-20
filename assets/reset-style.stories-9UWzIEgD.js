import{j as e}from"./jsx-runtime-TtYKBvr-.js";import{U as a}from"./ui-provider-xm31Yde9.js";import{e as d}from"./extend-theme-nrPEWYBZ.js";import{C as u}from"./center-zAWf1XEP.js";import{I as y}from"./image-4p7NImCk.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-_TpUstJ8.js";import"./factory-0U35BYk-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-DaZ8zned.js";import"./loading-provider-hWnwKQy_.js";import"./index-3ys8_0y0.js";import"./component-G3mliOEp.js";import"./loading-678li6bp.js";import"./index-sWcbvyzn.js";import"./index-dluY42U8.js";import"./index-Vee3qruC.js";import"./icon-gAHwiU-k.js";import"./forward-ref-6T0UNPU-.js";import"./motion-oaSIzDbx.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-NhaHBFpN.js";import"./index-xIHD0DlW.js";import"./notice-DKLklMRS.js";import"./alert-MZNqfmql.js";import"./use-component-style-5nTHLJk_.js";import"./close-button-aG_pjaCq.js";import"./use-ripple-0Krh0NIL.js";import"./use-image-vgkMyMC_.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
