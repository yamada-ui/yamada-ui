import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-k5tecyKK.js";import{e as d}from"./extend-theme-6fgqKllv.js";import{C as u}from"./center-fyQWM-kL.js";import{I as y}from"./image-ZBosLDRQ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-5V_IKGX1.js";import"./factory-dcM_aT7G.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-uixNuWLh.js";import"./motion-ukEXpwwk.js";import"./loading-provider-HX2IPxQ4.js";import"./index-t2vQ3W0h.js";import"./Combination-8oCz4vin.js";import"./loading-pgPsKy-B.js";import"./index-IifBfCIi.js";import"./index-pXhAjey9.js";import"./index-BgoZuHN8.js";import"./icon-KS9auLtj.js";import"./forward-ref-A-8Arhkk.js";import"./motion-tce6SEvU.js";import"./index-EargzzxG.js";import"./container-portal-Yi4n-bPi.js";import"./index-jmm5gWkb.js";import"./notice-VC4RfpnO.js";import"./alert-MvITGrhO.js";import"./use-component-style-rFDzjddw.js";import"./close-button-PB5ySZ0m.js";import"./use-ripple-u6WIY_9Q.js";import"./use-image-4DbGZQHX.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
