import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-rTBqrtPM.js";import{e as d}from"./extend-theme-E5KLoV2W.js";import{C as u}from"./center-sR6g-wHX.js";import{I as y}from"./image-NPIEwgUG.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-hZoT5C0K.js";import"./factory-qmA5MQgQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-FNXndkDC.js";import"./motion-ukEXpwwk.js";import"./loading-provider-VBJZrAI9.js";import"./index-y3gJVxZf.js";import"./Combination-8oCz4vin.js";import"./loading-UQYqEc74.js";import"./index-4cYQkiTb.js";import"./index-DtOM48_0.js";import"./index-ffCptnWF.js";import"./icon-fOnK7QCM.js";import"./forward-ref-A-8Arhkk.js";import"./motion-klEGzG2n.js";import"./index-EargzzxG.js";import"./container-portal-zuGopSwV.js";import"./index-jmm5gWkb.js";import"./notice-s08z__HM.js";import"./alert-vMUSGwPs.js";import"./use-component-style-rHEypyE8.js";import"./close-button-Ry_zDY-s.js";import"./use-ripple-FTR2ufPl.js";import"./use-image-0KfDfTEH.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
