import{j as t,V as i,T as e}from"./iframe-Cq3rcaMI.js";import{u as r}from"./use-format-byte-aBdaGhSA.js";import"./preload-helper-PPVm8Dsz.js";import"./use-format-number-CG4vT_jL.js";import"./i18n-cache-2nrF3WCd.js";const f={title:"Hooks / useFormatByte"},a=()=>{const s=r(50),o=r(5e3),d=r(5e6),B=r(5e9);return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d}),t.jsx(e,{children:B})]})},n=()=>{const s=r(1450,{unit:"bit"});return t.jsx(e,{children:s})},c=()=>{const s=r(1450,{locale:"de-DE"}),o=r(1450,{locale:"zh-CN"});return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o})]})},m=()=>{const s=r(50300,{unitDisplay:"short"}),o=r(50300,{unitDisplay:"long"}),d=r(50300,{unitDisplay:"narrow"});return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const formatted50Bytes = useFormatByte(50);
  const formatted5KB = useFormatByte(5000);
  const formatted5MB = useFormatByte(5000000);
  const formatted5GB = useFormatByte(5000000000);
  return <VStack gap="0">
      <Text>{formatted50Bytes}</Text>
      <Text>{formatted5KB}</Text>
      <Text>{formatted5MB}</Text>
      <Text>{formatted5GB}</Text>
    </VStack>;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const formattedBits = useFormatByte(1450, {
    unit: "bit"
  });
  return <Text>{formattedBits}</Text>;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const formattedBytesDE = useFormatByte(1450, {
    locale: "de-DE"
  });
  const formattedBytesCN = useFormatByte(1450, {
    locale: "zh-CN"
  });
  return <VStack gap="0">
      <Text>{formattedBytesDE}</Text>
      <Text>{formattedBytesCN}</Text>
    </VStack>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const formattedBytesShort = useFormatByte(50300, {
    unitDisplay: "short"
  });
  const formattedBytesLong = useFormatByte(50300, {
    unitDisplay: "long"
  });
  const formattedBytesNarrow = useFormatByte(50300, {
    unitDisplay: "narrow"
  });
  return <VStack gap="0">
      <Text>{formattedBytesShort}</Text>
      <Text>{formattedBytesLong}</Text>
      <Text>{formattedBytesNarrow}</Text>
    </VStack>;
}`,...m.parameters?.docs?.source}}};const T=["Basic","Bits","Locale","UnitDisplay"];export{a as Basic,n as Bits,c as Locale,m as UnitDisplay,T as __namedExportsOrder,f as default};
