import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as E}from"./use-format-byte-BGAiva_Q.js";import{f as z}from"./forward-ref-D13m8o2p.js";import{u as L}from"./use-component-style-B--WxH8d.js";import{o as O}from"./theme-provider-r-UN7Xzc.js";import{b as P,c as R}from"./factory-D0ba2aB7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-format-number-C-nav4pi.js";import"./i18n-provider-aaxwzEbO.js";const t=z((F,h)=>{const[j,f]=L("FormatByte",F),{className:D,locale:g,unit:w,unitDisplay:_,value:N,...S}=O(f),b=E(N,{locale:g,unit:w,unitDisplay:_}),C={...j};return e.jsx(P.span,{ref:h,className:R("ui-format-byte",D),__css:C,...S,children:b})});t.displayName="FormatByte";t.__ui__="FormatByte";const M={component:t,title:"Components / Other / FormatByte"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{value:50}),e.jsx(t,{value:5e3}),e.jsx(t,{value:5e6}),e.jsx(t,{value:5e9})]}),a=()=>e.jsx(t,{unit:"bit",value:1450}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{locale:"de-DE",value:1450}),e.jsx(t,{locale:"zh-CN",value:1450})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{unitDisplay:"short",value:50300}),e.jsx(t,{unitDisplay:"long",value:50300}),e.jsx(t,{unitDisplay:"narrow",value:50300})]});var n,m,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <>
      <FormatByte value={50} />
      <FormatByte value={5000} />
      <FormatByte value={5000000} />
      <FormatByte value={5000000000} />
    </>;
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,l,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <FormatByte unit="bit" value={1450} />;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,y,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <FormatByte locale="de-DE" value={1450} />
      <FormatByte locale="zh-CN" value={1450} />
    </>;
}`,...(d=(y=s.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var v,x,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <>
      <FormatByte unitDisplay="short" value={50300} />
      <FormatByte unitDisplay="long" value={50300} />
      <FormatByte unitDisplay="narrow" value={50300} />
    </>;
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const Q=["Basic","withBits","withLocale","withUnitDisplay"];export{r as Basic,Q as __namedExportsOrder,M as default,a as withBits,s as withLocale,o as withUnitDisplay};
