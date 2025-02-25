import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{U as a}from"./ui-provider-BrTCx3ip.js";import{e as d}from"./extend-theme-CmUkcRVq.js";import{C as u}from"./center-B3pLLn64.js";import{I as y}from"./image-AsrGZXBk.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-j-_balfN.js";import"./theme-provider-ChqdwXGn.js";import"./factory-DbNU74ts.js";import"./i18n-provider-D58p8CY1.js";import"./proxy-BdCiNrpl.js";import"./loading-provider-kitZsRjt.js";import"./index-Dog50vdO.js";import"./Combination-4Rar1Jsv.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./use-var-DlbRU9j0.js";import"./forward-ref-Ukjd1cIW.js";import"./memo-CPHdbx3K.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-DGyI5Ya3.js";import"./notice-DQQ0jAKh.js";import"./alert-n1mY6WpW.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./use-image-D0o6TYRh.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e.jsx(a,{theme:l,children:e.jsx(c,{})})},r=()=>e.jsx(a,{disableResetStyle:!0,children:e.jsx(c,{})}),c=()=>e.jsx(u,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(y,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"xl",w:"full"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
