import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./text-DSMMc5B6.js";import{t as r}from"./text-BM4F8FHS.js";import{r as i}from"./z-stack-D_lbkXhr.js";import{Dt as a,Oo as o,ko as s}from"./iframe-CL-k_-ao.js";var c,l,u,d,f,p,m;e((()=>{a(),r(),o(),c=t(),l={title:`Hooks / useFormatByte`},u=()=>{let e=s(50),t=s(5e3),r=s(5e6),a=s(5e9);return(0,c.jsxs)(i,{gap:`0`,children:[(0,c.jsx)(n,{children:e}),(0,c.jsx)(n,{children:t}),(0,c.jsx)(n,{children:r}),(0,c.jsx)(n,{children:a})]})},d=()=>(0,c.jsx)(n,{children:s(1450,{unit:`bit`})}),f=()=>{let e=s(1450,{locale:`de-DE`}),t=s(1450,{locale:`zh-CN`});return(0,c.jsxs)(i,{gap:`0`,children:[(0,c.jsx)(n,{children:e}),(0,c.jsx)(n,{children:t})]})},p=()=>{let e=s(50300,{unitDisplay:`short`}),t=s(50300,{unitDisplay:`long`}),r=s(50300,{unitDisplay:`narrow`});return(0,c.jsxs)(i,{gap:`0`,children:[(0,c.jsx)(n,{children:e}),(0,c.jsx)(n,{children:t}),(0,c.jsx)(n,{children:r})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const formattedBits = useFormatByte(1450, {
    unit: "bit"
  });
  return <Text>{formattedBits}</Text>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Bits`,`Locale`,`UnitDisplay`]}))();export{u as Basic,d as Bits,f as Locale,p as UnitDisplay,m as __namedExportsOrder,l as default};