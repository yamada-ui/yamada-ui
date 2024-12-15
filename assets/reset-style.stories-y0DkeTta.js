import{j as e}from"./jsx-runtime-CfatFE5O.js";import{U as a}from"./ui-provider-xzfBwVsg.js";import{e as d}from"./extend-theme-CLBkIjSu.js";import{C as u}from"./center-DxI5r7X_.js";import{I as y}from"./image-CB_oE3PG.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C1v1tYaZ.js";import"./theme-provider-Dit74geM.js";import"./factory-Bqmz9C5P.js";import"./i18n-provider-D80ymFzi.js";import"./proxy-BYKFXsWv.js";import"./loading-provider-DwZ6aWGm.js";import"./index-FkUjIXEe.js";import"./Combination-CkmEMpJG.js";import"./loading-CmllsJT7.js";import"./icon-DeZ7GCXS.js";import"./use-component-style-D7fUVUlo.js";import"./use-var-DKkLsRXg.js";import"./forward-ref-D13m8o2p.js";import"./index-BkD6i14w.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-Cbq3E2qU.js";import"./notice-BUUybEK3.js";import"./alert-BhrbxAIR.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./use-image-DwPG3Una.js";const M={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e.jsx(a,{theme:l,children:e.jsx(c,{})})},r=()=>e.jsx(a,{disableResetStyle:!0,children:e.jsx(c,{})}),c=()=>e.jsx(u,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(y,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"xl",w:"full"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
