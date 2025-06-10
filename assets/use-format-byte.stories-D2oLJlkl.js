import{j as t}from"./jsx-runtime-DztICxWZ.js";import{u as e}from"./use-format-byte-Dz_6QOGe.js";import{T as r}from"./text-KN7rBBtq.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-format-number-DhG64xPA.js";import"./i18n-provider-CmpcPFo-.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";const z={title:"Hooks / useFormatByte"},n=()=>{const o=e(50),s=e(5e3),i=e(5e6),D=e(5e9);return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:o}),t.jsx(r,{children:s}),t.jsx(r,{children:i}),t.jsx(r,{children:D})]})},a=()=>{const o=e(1450,{unit:"bit"});return t.jsx(r,{children:o})},m=()=>{const o=e(1450,{locale:"de-DE"}),s=e(1450,{locale:"zh-CN"});return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:o}),t.jsx(r,{children:s})]})},c=()=>{const o=e(50300,{unitDisplay:"short"}),s=e(50300,{unitDisplay:"long"}),i=e(50300,{unitDisplay:"narrow"});return t.jsxs(t.Fragment,{children:[t.jsx(r,{children:o}),t.jsx(r,{children:s}),t.jsx(r,{children:i})]})};var d,B,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(u=(B=n.parameters)==null?void 0:B.docs)==null?void 0:u.source}}};var l,p,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const formattedBits = useFormatByte(1450, {
    unit: "bit"
  });
  return <Text>{formattedBits}</Text>;
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var y,f,h;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(h=(f=m.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,j,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const U=["basic","withBits","withLocale","withUnitDisplay"];export{U as __namedExportsOrder,n as basic,z as default,a as withBits,m as withLocale,c as withUnitDisplay};
