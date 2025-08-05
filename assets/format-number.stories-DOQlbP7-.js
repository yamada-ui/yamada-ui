import{n as L,o as Y,j as e,s as _}from"./iframe-DiGnZRjA.js";import{u as w}from"./use-format-number-gKqNx_eU.js";import"./preload-helper-D9Z9MdNV.js";const O=L({}),{withContext:R}=Y("format-number",O),r=R(({style:u,compactDisplay:m,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:v,minimumFractionDigits:j,minimumIntegerDigits:N,minimumSignificantDigits:b,notation:F,numberingSystem:S,roundingIncrement:g,roundingMode:f,roundingPriority:C,signDisplay:P,trailingZeroDisplay:E,unit:J,unitDisplay:U,useGrouping:h,value:k,...B})=>{const D=w(k,{style:u,compactDisplay:m,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:v,minimumFractionDigits:j,minimumIntegerDigits:N,minimumSignificantDigits:b,notation:F,numberingSystem:S,roundingIncrement:g,roundingMode:f,roundingPriority:C,signDisplay:P,trailingZeroDisplay:E,unit:J,unitDisplay:U,useGrouping:h});return e.jsx(_.span,{...B,children:D})})(),G={component:r,title:"Components / FormatNumber"},t=()=>e.jsx(r,{value:1e3}),a=()=>e.jsx(r,{style:"percent",value:.145}),o=()=>e.jsx(r,{style:"currency",currency:"JPY",locale:"ja-JP",value:1234.45}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{locale:"de-DE",value:1450.45}),e.jsx(r,{locale:"en-US",value:1450.45})]}),n=()=>e.jsx(r,{style:"unit",unit:"kilometer",value:384.4}),c=()=>e.jsx(r,{notation:"compact",value:15e5});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <FormatNumber value={1000} />;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <FormatNumber style="percent" value={0.145} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <FormatNumber style="currency" currency="JPY" locale="ja-JP" value={1234.45} />;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FormatNumber locale="de-DE" value={1450.45} />
      <FormatNumber locale="en-US" value={1450.45} />
    </>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <FormatNumber style="unit" unit="kilometer" value={384.4} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <FormatNumber notation="compact" value={1500000} />;
}`,...c.parameters?.docs?.source}}};const H=["Basic","Percentage","Currency","Locale","Unit","Notation"];export{t as Basic,o as Currency,s as Locale,c as Notation,a as Percentage,n as Unit,H as __namedExportsOrder,G as default};
