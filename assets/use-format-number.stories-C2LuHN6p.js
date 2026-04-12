import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Es as n,Lt as r,Ts as i,im as a,iu as o,ru as s}from"./iframe-B8XBG3U5.js";var c,l,u,d,f,p,m,h,g;e((()=>{r(),s(),i(),c=a(),l={title:`Hooks / useFormatNumber`},u=()=>(0,c.jsx)(o,{children:n(1234567.89,{style:`currency`,currency:`USD`})}),d=()=>{let e=n(1234567.89,{style:`currency`,currency:`USD`,locale:`en-US`}),r=n(1234567.89,{style:`currency`,currency:`EUR`,locale:`de-DE`});return(0,c.jsxs)(t,{gap:`0`,children:[(0,c.jsx)(o,{children:e}),(0,c.jsx)(o,{children:r})]})},f=()=>(0,c.jsx)(o,{children:n(1234567.89,{style:`decimal`,maximumFractionDigits:2,minimumFractionDigits:2})}),p=()=>(0,c.jsx)(o,{children:n(.145,{style:`percent`})}),m=()=>(0,c.jsx)(o,{children:n(384.4,{style:`unit`,unit:`kilometer`})}),h=()=>(0,c.jsx)(o,{children:n(15e5,{notation:`compact`})}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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