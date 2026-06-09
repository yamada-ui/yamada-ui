import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dl as t,Dv as n,Ol as r,Rf as i,Sn as a,Tn as o,zf as s}from"./iframe-CM6ym36p.js";var c,l,u,d,f,p,m,h,g;e((()=>{a(),i(),t(),c=n(),l={title:`Hooks / useFormatNumber`},u=()=>(0,c.jsx)(s,{children:r(1234567.89,{style:`currency`,currency:`USD`})}),d=()=>{let e=r(1234567.89,{style:`currency`,currency:`USD`,locale:`en-US`}),t=r(1234567.89,{style:`currency`,currency:`EUR`,locale:`de-DE`});return(0,c.jsxs)(o,{gap:`0`,children:[(0,c.jsx)(s,{children:e}),(0,c.jsx)(s,{children:t})]})},f=()=>(0,c.jsx)(s,{children:r(1234567.89,{style:`decimal`,maximumFractionDigits:2,minimumFractionDigits:2})}),p=()=>(0,c.jsx)(s,{children:r(.145,{style:`percent`})}),m=()=>(0,c.jsx)(s,{children:r(384.4,{style:`unit`,unit:`kilometer`})}),h=()=>(0,c.jsx)(s,{children:r(15e5,{notation:`compact`})}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "currency",
    currency: "USD"
  });
  return <Text>{formattedNumber}</Text>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1234567.89, {
    style: "decimal",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  return <Text>{formattedNumber}</Text>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(0.145, {
    style: "percent"
  });
  return <Text>{formattedNumber}</Text>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(384.4, {
    style: "unit",
    unit: "kilometer"
  });
  return <Text>{formattedNumber}</Text>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const formattedNumber = useFormatNumber(1500000, {
    notation: "compact"
  });
  return <Text>{formattedNumber}</Text>;
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`Locale`,`Options`,`Percentage`,`Unit`,`Notation`]}))();export{u as Basic,d as Locale,h as Notation,f as Options,p as Percentage,m as Unit,g as __namedExportsOrder,l as default};