import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{u as t}from"./use-format-number-pB2tVhim.js";import{T as n}from"./text-clsxocLN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./i18n-provider-D_kv1vSA.js";import"./factory-B_KMcXyW.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";const A={title:"Hooks / useFormatNumber"},o=()=>{const e=t(123456789e-2,{style:"currency",currency:"USD"});return r.jsx(n,{children:e})},s=()=>{const e=t(123456789e-2,{style:"currency",currency:"USD",locale:"en-US"}),U=t(123456789e-2,{style:"currency",currency:"EUR",locale:"de-DE"});return r.jsxs(r.Fragment,{children:[r.jsx(n,{children:e}),r.jsx(n,{children:U})]})},m=()=>{const e=t(123456789e-2,{style:"decimal",maximumFractionDigits:2,minimumFractionDigits:2});return r.jsx(n,{children:e})},a=()=>{const e=t(.145,{style:"percent"});return r.jsx(n,{children:e})},c=()=>{const e=t(384.4,{style:"unit",unit:"kilometer"});return r.jsx(n,{children:e})},u=()=>{const e=t(15e5,{notation:"compact"});return r.jsx(n,{children:e})};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,b,N;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const formattedNumberEn = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD",
    locale: "en-US"
  });
  const formattedNumberDE = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "EUR",
    locale: "de-DE"
  });
  return <>
      <Text>{formattedNumberEn}</Text>
      <Text>{formattedNumberDE}</Text>
    </>;
}`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var x,f,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  return <Text>{formattedNumber}</Text>;
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,T,F;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(0.145, {
    style: "percent"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(F=(T=a.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,D,E;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(384.4, {
    style: "unit",
    unit: "kilometer"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var S,j,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1500000, {
    notation: "compact"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const B=["basic","withLocale","withOptions","withPercentage","withUnit","withNotation"];export{B as __namedExportsOrder,o as basic,A as default,s as withLocale,u as withNotation,m as withOptions,a as withPercentage,c as withUnit};
