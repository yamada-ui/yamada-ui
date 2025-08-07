import{j as r,T as t}from"./iframe-CDTQ5ROD.js";import{u as n}from"./use-format-number-C-GOYuPZ.js";import"./preload-helper-D9Z9MdNV.js";const N={title:"Hooks / useFormatNumber"},o=()=>{const e=n(123456789e-2,{style:"currency",currency:"USD"});return r.jsx(t,{children:e})},s=()=>{const e=n(123456789e-2,{style:"currency",currency:"USD",locale:"en-US"}),i=n(123456789e-2,{style:"currency",currency:"EUR",locale:"de-DE"});return r.jsxs(r.Fragment,{children:[r.jsx(t,{children:e}),r.jsx(t,{children:i})]})},a=()=>{const e=n(123456789e-2,{style:"decimal",maximumFractionDigits:2,minimumFractionDigits:2});return r.jsx(t,{children:e})},c=()=>{const e=n(.145,{style:"percent"});return r.jsx(t,{children:e})},m=()=>{const e=n(384.4,{style:"unit",unit:"kilometer"});return r.jsx(t,{children:e})},u=()=>{const e=n(15e5,{notation:"compact"});return r.jsx(t,{children:e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD"
  });
  return <Text>{formattedNumber}</Text>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  return <Text>{formattedNumber}</Text>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(0.145, {
    style: "percent"
  });
  return <Text>{formattedNumber}</Text>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(384.4, {
    style: "unit",
    unit: "kilometer"
  });
  return <Text>{formattedNumber}</Text>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1500000, {
    notation: "compact"
  });
  return <Text>{formattedNumber}</Text>;
}`,...u.parameters?.docs?.source}}};const b=["Basic","Locale","Options","Percentage","Unit","Notation"];export{o as Basic,s as Locale,u as Notation,a as Options,c as Percentage,m as Unit,b as __namedExportsOrder,N as default};
