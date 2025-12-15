import{j as t,V as i,T as e}from"./iframe-C1QqsVA9.js";import{u as r}from"./use-format-byte-Cj_jTq0f.js";import"./preload-helper-C1FmrZbK.js";import"./use-format-number-Cq2m0Hw2.js";import"./i18n-cache-2nrF3WCd.js";const w={title:"Hooks / useFormatByte"},a=()=>{const s=r(50),o=r(5e3),d=r(5e6),D=r(5e9);return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d}),t.jsx(e,{children:D})]})},n=()=>{const s=r(1450,{unit:"bit"});return t.jsx(e,{children:s})},c=()=>{const s=r(1450,{locale:"de-DE"}),o=r(1450,{locale:"zh-CN"});return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o})]})},m=()=>{const s=r(50300,{unitDisplay:"short"}),o=r(50300,{unitDisplay:"long"}),d=r(50300,{unitDisplay:"narrow"});return t.jsxs(i,{gap:"0",children:[t.jsx(e,{children:s}),t.jsx(e,{children:o}),t.jsx(e,{children:d})]})};var B,u,l;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,x,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const formattedBits = useFormatByte(1450, {
    unit: "bit"
  });
  return <Text>{formattedBits}</Text>;
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,T,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const C=["Basic","Bits","Locale","UnitDisplay"];export{a as Basic,n as Bits,c as Locale,m as UnitDisplay,C as __namedExportsOrder,w as default};
