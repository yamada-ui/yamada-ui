import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Cs as n,Lt as r,im as i,iu as a,ru as o,ws as s}from"./iframe-ny1HWA6_.js";var c,l,u,d,f,p,m;e((()=>{r(),o(),n(),c=i(),l={title:`Hooks / useFormatByte`},u=()=>{let e=s(50),n=s(5e3),r=s(5e6),i=s(5e9);return(0,c.jsxs)(t,{gap:`0`,children:[(0,c.jsx)(a,{children:e}),(0,c.jsx)(a,{children:n}),(0,c.jsx)(a,{children:r}),(0,c.jsx)(a,{children:i})]})},d=()=>(0,c.jsx)(a,{children:s(1450,{unit:`bit`})}),f=()=>{let e=s(1450,{locale:`de-DE`}),n=s(1450,{locale:`zh-CN`});return(0,c.jsxs)(t,{gap:`0`,children:[(0,c.jsx)(a,{children:e}),(0,c.jsx)(a,{children:n})]})},p=()=>{let e=s(50300,{unitDisplay:`short`}),n=s(50300,{unitDisplay:`long`}),r=s(50300,{unitDisplay:`narrow`});return(0,c.jsxs)(t,{gap:`0`,children:[(0,c.jsx)(a,{children:e}),(0,c.jsx)(a,{children:n}),(0,c.jsx)(a,{children:r})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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