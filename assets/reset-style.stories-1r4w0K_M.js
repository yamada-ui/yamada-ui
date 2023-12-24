import{j as e}from"./jsx-runtime-TtYKBvr-.js";import{U as a}from"./ui-provider-ooGYdwXw.js";import{e as d}from"./extend-theme-WgGqne3u.js";import{C as u}from"./center-VSBWF0_S.js";import{I as y}from"./image-evQ0CzrV.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-gSdpxlBZ.js";import"./factory-4UsipNZi.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-ZgHadnpK.js";import"./motion-AgWUVtfu.js";import"./loading-provider-w5OpNnW5.js";import"./index-ZvRY0jhH.js";import"./component-G3mliOEp.js";import"./loading--J4ajAZG.js";import"./index-4xX5BTts.js";import"./index-QXkTb0vS.js";import"./index-Ni3ZWRlr.js";import"./icon-_M--SPCM.js";import"./forward-ref-6T0UNPU-.js";import"./motion-Nrmqvszs.js";import"./index-GPdqE8CR.js";import"./container-portal-_zZMQUoq.js";import"./index-xIHD0DlW.js";import"./notice-iqZzsFir.js";import"./alert-bsStod25.js";import"./use-component-style-46I8_shN.js";import"./close-button-wOQCHM1j.js";import"./use-ripple-DtOELnn4.js";import"./use-image-KQ-xtBk1.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
