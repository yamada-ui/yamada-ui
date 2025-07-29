import{n as p,o as y,j as e,s as d}from"./iframe-B58gGoPv.js";import{u as v}from"./use-format-byte-D35-CxhR.js";import"./use-format-number-BBjSXC9s.js";const x=p({}),{withContext:B}=y("format-byte",x),t=B(({locale:n,unit:l,unitDisplay:u,value:c,...m})=>{const i=v(c,{locale:n,unit:l,unitDisplay:u});return e.jsx(d.span,{...m,children:i})})(),g={component:t,title:"Components / FormatByte"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{value:50}),e.jsx(t,{value:5e3}),e.jsx(t,{value:5e6}),e.jsx(t,{value:5e9})]}),a=()=>e.jsx(t,{unit:"bit",value:1450}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{locale:"de-DE",value:1450}),e.jsx(t,{locale:"zh-CN",value:1450})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{unitDisplay:"short",value:50300}),e.jsx(t,{unitDisplay:"long",value:50300}),e.jsx(t,{unitDisplay:"narrow",value:50300})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FormatByte value={50} />
      <FormatByte value={5000} />
      <FormatByte value={5000000} />
      <FormatByte value={5000000000} />
    </>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <FormatByte unit="bit" value={1450} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FormatByte locale="de-DE" value={1450} />
      <FormatByte locale="zh-CN" value={1450} />
    </>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FormatByte unitDisplay="short" value={50300} />
      <FormatByte unitDisplay="long" value={50300} />
      <FormatByte unitDisplay="narrow" value={50300} />
    </>;
}`,...o.parameters?.docs?.source}}};const h=["Basic","Bits","Locale","UnitDisplay"];export{r as Basic,a as Bits,s as Locale,o as UnitDisplay,h as __namedExportsOrder,g as default};
