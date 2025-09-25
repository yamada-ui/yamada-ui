import{j as t,T as e}from"./iframe-BToZTpox.js";import{u as r}from"./use-format-byte-DSJV7eeO.js";import"./preload-helper-D9Z9MdNV.js";import"./use-format-number-CLj-Riad.js";const y={title:"Hooks / useFormatByte"},n=()=>{const s=r(50),o=r(5e3),d=r(5e6),i=r(5e9);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d}),t.jsx(e,{children:i})]})},a=()=>{const s=r(1450,{unit:"bit"});return t.jsx(e,{children:s})},c=()=>{const s=r(1450,{locale:"de-DE"}),o=r(1450,{locale:"zh-CN"});return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:s}),t.jsx(e,{children:o})]})},m=()=>{const s=r(50300,{unitDisplay:"short"}),o=r(50300,{unitDisplay:"long"}),d=r(50300,{unitDisplay:"narrow"});return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const formatted50Bytes = useFormatByte(50);
  const formatted5KB = useFormatByte(5000);
  const formatted5MB = useFormatByte(5000000);
  const formatted5GB = useFormatByte(5000000000);
  return <>
      <Text>{formatted50Bytes}</Text>
      <Text>{formatted5KB}</Text>
      <Text>{formatted5MB}</Text>
      <Text>{formatted5GB}</Text>
    </>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const formattedBits = useFormatByte(1450, {
    unit: "bit"
  });
  return <Text>{formattedBits}</Text>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const formattedBytesDE = useFormatByte(1450, {
    locale: "de-DE"
  });
  const formattedBytesCN = useFormatByte(1450, {
    locale: "zh-CN"
  });
  return <>
      <Text>{formattedBytesDE}</Text>
      <Text>{formattedBytesCN}</Text>
    </>;
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
  return <>
      <Text>{formattedBytesShort}</Text>
      <Text>{formattedBytesLong}</Text>
      <Text>{formattedBytesNarrow}</Text>
    </>;
}`,...m.parameters?.docs?.source}}};const f=["Basic","Bits","Locale","UnitDisplay"];export{n as Basic,a as Bits,c as Locale,m as UnitDisplay,f as __namedExportsOrder,y as default};
