import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-VNXlvV5z.js";import{e as d}from"./extend-theme-u8DLQRtf.js";import{C as u}from"./center-_aUx3M16.js";import{I as y}from"./image-oCa5G65p.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-4KOeReOn.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-fkDixBz8.js";import"./motion-ukEXpwwk.js";import"./loading-provider-tfeo5hBk.js";import"./index-B4ddhKBr.js";import"./Combination-8oCz4vin.js";import"./loading-6RwEQblT.js";import"./index-2fdIbPpW.js";import"./index-F6j05pB5.js";import"./index-DKGSNMBl.js";import"./icon-VHqa4iO4.js";import"./forward-ref-A-8Arhkk.js";import"./motion-rimQiqxs.js";import"./index-EargzzxG.js";import"./container-portal-e1Mvj3y3.js";import"./index-jmm5gWkb.js";import"./notice-mCuNJqL1.js";import"./alert-3duH9q4H.js";import"./use-component-style-a9Y1koMB.js";import"./close-button-rjaFJeax.js";import"./use-ripple-iEFkrfzn.js";import"./use-image-Jm5nckRw.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
