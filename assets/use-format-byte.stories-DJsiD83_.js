import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{n as i,t as a}from"./use-format-byte-_B6oz4nz.js";import{n as o,t as s}from"./v-stack-DgxvBjIl.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),a(),c=t(),l={title:`Hooks / useFormatByte`},u=()=>{let e=i(50),t=i(5e3),n=i(5e6),a=i(5e9);return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t}),(0,c.jsx)(r,{children:n}),(0,c.jsx)(r,{children:a})]})},d=()=>{let e=i(1450,{unit:`bit`});return(0,c.jsx)(r,{children:e})},f=()=>{let e=i(1450,{locale:`de-DE`}),t=i(1450,{locale:`zh-CN`});return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t})]})},p=()=>{let e=i(50300,{unitDisplay:`short`}),t=i(50300,{unitDisplay:`long`}),n=i(50300,{unitDisplay:`narrow`});return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t}),(0,c.jsx)(r,{children:n})]})},m=[`Basic`,`Bits`,`Locale`,`UnitDisplay`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Basic,d as Bits,f as Locale,p as UnitDisplay,m as __namedExportsOrder,l as default};