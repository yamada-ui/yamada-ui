import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{n as i,t as a}from"./use-format-number-CWpz-cMj.js";import{n as o,t as s}from"./v-stack-DgxvBjIl.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),n(),a(),c=t(),l={title:`Hooks / useFormatNumber`},u=()=>{let e=i(1234567.89,{style:`currency`,currency:`USD`});return(0,c.jsx)(r,{children:e})},d=()=>{let e=i(1234567.89,{style:`currency`,currency:`USD`,locale:`en-US`}),t=i(1234567.89,{style:`currency`,currency:`EUR`,locale:`de-DE`});return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t})]})},f=()=>{let e=i(1234567.89,{style:`decimal`,maximumFractionDigits:2,minimumFractionDigits:2});return(0,c.jsx)(r,{children:e})},p=()=>{let e=i(.145,{style:`percent`});return(0,c.jsx)(r,{children:e})},m=()=>{let e=i(384.4,{style:`unit`,unit:`kilometer`});return(0,c.jsx)(r,{children:e})},h=()=>{let e=i(15e5,{notation:`compact`});return(0,c.jsx)(r,{children:e})},g=[`Basic`,`Locale`,`Options`,`Percentage`,`Unit`,`Notation`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{u as Basic,d as Locale,h as Notation,f as Options,p as Percentage,m as Unit,g as __namedExportsOrder,l as default};