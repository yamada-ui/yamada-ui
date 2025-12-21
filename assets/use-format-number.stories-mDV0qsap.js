import{j as r,T as t,V}from"./iframe-LqombrNM.js";import{a as n}from"./use-format-number-CaCzlCmI.js";import"./preload-helper-C1FmrZbK.js";import"./i18n-cache-2nrF3WCd.js";const P={title:"Hooks / useFormatNumber"},o=()=>{const e=n(123456789e-2,{style:"currency",currency:"USD"});return r.jsx(t,{children:e})},s=()=>{const e=n(123456789e-2,{style:"currency",currency:"USD",locale:"en-US"}),k=n(123456789e-2,{style:"currency",currency:"EUR",locale:"de-DE"});return r.jsxs(V,{gap:"0",children:[r.jsx(t,{children:e}),r.jsx(t,{children:k})]})},a=()=>{const e=n(123456789e-2,{style:"decimal",maximumFractionDigits:2,minimumFractionDigits:2});return r.jsx(t,{children:e})},c=()=>{const e=n(.145,{style:"percent"});return r.jsx(t,{children:e})},m=()=>{const e=n(384.4,{style:"unit",unit:"kilometer"});return r.jsx(t,{children:e})},u=()=>{const e=n(15e5,{notation:"compact"});return r.jsx(t,{children:e})};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,N,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
  return <VStack gap="0">
      <Text>{formattedNumberEn}</Text>
      <Text>{formattedNumberDE}</Text>
    </VStack>;
}`,...(b=(N=s.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var x,f,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  return <Text>{formattedNumber}</Text>;
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,S,g;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(0.145, {
    style: "percent"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var D,F,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(384.4, {
    style: "unit",
    unit: "kilometer"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(E=(F=m.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var j,U,h;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1500000, {
    notation: "compact"
  });
  return <Text>{formattedNumber}</Text>;
}`,...(h=(U=u.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};const _=["Basic","Locale","Options","Percentage","Unit","Notation"];export{o as Basic,s as Locale,u as Notation,a as Options,c as Percentage,m as Unit,_ as __namedExportsOrder,P as default};
