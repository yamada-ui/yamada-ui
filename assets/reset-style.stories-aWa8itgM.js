import{j as e}from"./jsx-runtime-5BUNAZ9W.js";import{U as a}from"./ui-provider-hH4SAj0F.js";import{e as d}from"./extend-theme-A-xOfX6a.js";import{C as u}from"./center-h3ZT_FrZ.js";import{I as y}from"./image-56izC0qK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PV_1V3nq.js";import"./theme-provider-rx4ttYe3.js";import"./factory-UVgmwG7m.js";import"./environment-provider-0jwEckdG.js";import"./motion-heeYkzTb.js";import"./loading-provider-06yPtTvu.js";import"./index-ywu_EmJp.js";import"./Combination-8oCz4vin.js";import"./loading-RG6ZNJzo.js";import"./index-Rnhjv4qA.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";import"./icon-q2lrQR9J.js";import"./forward-ref-A-8Arhkk.js";import"./motion-wmKyD4SQ.js";import"./index-eMn_GZVX.js";import"./container-portal-IQGWCVnt.js";import"./index-jmm5gWkb.js";import"./notice-cgYQsJql.js";import"./alert-Sx4iE_6u.js";import"./use-component-style-oL2nRWmA.js";import"./close-button-Dq9NYntd.js";import"./use-ripple-BZv2-DZW.js";import"./use-image-GghnA0dS.js";const N={title:"System / Theme / Reset Style"},t=()=>{const l=d({styles:{resetStyle:{}}})();return e(a,{theme:l,children:e(c,{})})},r=()=>e(a,{disableResetStyle:!0,children:e(c,{})}),c=()=>e(u,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:e(y,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
