import{j as e}from"./jsx-runtime-TtYKBvr-.js";import{U as a}from"./ui-provider-2R8HsRwi.js";import{e as d}from"./extend-theme-I3MsOvU_.js";import{C as u}from"./center-CEvrDlq5.js";import{I as y}from"./image-0rTkdqo-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-YFsjp2SR.js";import"./factory-xOnmJ4_k.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-jl-xvQt_.js";import"./loading-provider-RBKmlPdM.js";import"./index-vSs7hjNF.js";import"./component-G3mliOEp.js";import"./loading-XrRp0hhF.js";import"./index-Ya3bZDsJ.js";import"./index-xoGZiekO.js";import"./index-Mbccz9Tu.js";import"./icon-TzdJ8lpu.js";import"./forward-ref-6T0UNPU-.js";import"./motion-T7wh5Xor.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-UxAMZgtD.js";import"./index-xIHD0DlW.js";import"./notice-jnoBxlFR.js";import"./alert-t_mvZaxe.js";import"./use-component-style-jaCuodUa.js";import"./close-button-67YWK-fw.js";import"./use-ripple-vFs2N3lI.js";import"./use-image-WVv-OdBd.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
