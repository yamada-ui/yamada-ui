import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-_auX6mnM.js";import{e as d}from"./extend-theme-lc7Hghig.js";import{C as u}from"./center-UYRiGEMd.js";import{I as y}from"./image-FLQcPxbE.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-4obKj2CG.js";import"./theme-provider-YeTkYVXb.js";import"./factory-cZuM5uc7.js";import"./environment-provider-vAbItcqW.js";import"./motion-heeYkzTb.js";import"./loading-provider-I-qw-mi2.js";import"./index-ltPgTMPh.js";import"./Combination-8oCz4vin.js";import"./loading-61VaiPw8.js";import"./index-R-iIN9fN.js";import"./index-_j_eT4tT.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./forward-ref-A-8Arhkk.js";import"./motion-LsoKV39r.js";import"./index-eMn_GZVX.js";import"./container-portal-y4qjr1wr.js";import"./index-jmm5gWkb.js";import"./notice-JZooQAz5.js";import"./alert-AAJ7ElzC.js";import"./use-component-style-UguhvTUx.js";import"./close-button-vHPhk_et.js";import"./use-ripple--RYc3gC9.js";import"./use-image-eJzrk7Nf.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
