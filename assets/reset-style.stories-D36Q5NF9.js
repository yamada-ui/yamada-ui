import{j as e}from"./jsx-runtime-CfatFE5O.js";import{U as a}from"./ui-provider-CbUKWBZL.js";import{e as d}from"./extend-theme-CbWKebaZ.js";import{C as u}from"./center-DbI1M6cv.js";import{I as y}from"./image-C8hXf6L7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CRiLUpIq.js";import"./theme-provider-BsBO7Bt7.js";import"./factory-Nur_zO5a.js";import"./i18n-provider-CHVVk7pM.js";import"./proxy-BYKFXsWv.js";import"./loading-provider-Cgn_kgsf.js";import"./index-BNtkqexU.js";import"./Combination-CkmEMpJG.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./use-var-BmU0CMcq.js";import"./forward-ref-D13m8o2p.js";import"./index-BkD6i14w.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-C7oui4wX.js";import"./notice-BxRycEFA.js";import"./alert-Ol2ee-1X.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./use-image-CmKgOqFG.js";const M={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e.jsx(a,{theme:l,children:e.jsx(c,{})})},r=()=>e.jsx(a,{disableResetStyle:!0,children:e.jsx(c,{})}),c=()=>e.jsx(u,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(y,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"xl",w:"full"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["customResetStyle","disabledResetStyle"];export{N as __namedExportsOrder,t as customResetStyle,M as default,r as disabledResetStyle};
