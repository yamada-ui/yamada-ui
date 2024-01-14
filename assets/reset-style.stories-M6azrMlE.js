import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-LMwKEwUD.js";import{e as d}from"./extend-theme-kT-fcchP.js";import{C as u}from"./center-MRW0nyd8.js";import{I as y}from"./image-WQw9koKp.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-iI3DD0ZP.js";import"./theme-provider-XorC6D0y.js";import"./factory-_mTQY6PK.js";import"./environment-provider-7Jfup-Jr.js";import"./motion-heeYkzTb.js";import"./loading-provider-o-I3OMrN.js";import"./index-Jg6JIUo6.js";import"./Combination-8oCz4vin.js";import"./loading-MtZqCvSr.js";import"./index-z6pzycMb.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";import"./icon-_12WOtQg.js";import"./forward-ref-A-8Arhkk.js";import"./motion-V5SSOO6i.js";import"./index-eMn_GZVX.js";import"./container-portal-2rZsAQsm.js";import"./index-jmm5gWkb.js";import"./notice-ps6ctqpi.js";import"./alert-cwCGnpjP.js";import"./use-component-style-lJBCD4Hi.js";import"./close-button-bBA8Anc2.js";import"./use-ripple-NMzR3tTC.js";import"./use-image-_WlgL8q_.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
