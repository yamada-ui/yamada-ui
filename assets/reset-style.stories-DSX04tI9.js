import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{U as a}from"./ui-provider-t_Q4obj2.js";import{e as d}from"./extend-theme-Dd8s_bUr.js";import{C as u}from"./center-BDphHFlP.js";import{I as y}from"./image-DC1yDcp0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BBYQdQx5.js";import"./theme-provider-QhVoByOm.js";import"./factory-CJjTzqIw.js";import"./environment-provider-ChTqlOMC.js";import"./motion-Ceh1Zhyk.js";import"./loading-provider-CZSQS1oy.js";import"./index-C0N86Ahx.js";import"./Combination--D52Dw1Q.js";import"./component-o6OrGXrC.js";import"./loading-BQdsdx3B.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-BHPJug4L.js";import"./motion-B0bI6Xcj.js";import"./index-CSNxn7VS.js";import"./container-portal-CH8_15h1.js";import"./index-B8XB3FuZ.js";import"./notice-BVeSRnXU.js";import"./alert-BkGI-yA3.js";import"./close-button-DgNeJdEj.js";import"./use-ripple-wDY3RbRD.js";import"./use-image-CWa-dmOF.js";const M={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e.jsx(a,{theme:l,children:e.jsx(c,{})})},r=()=>e.jsx(a,{disableResetStyle:!0,children:e.jsx(c,{})}),c=()=>e.jsx(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e.jsx(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
