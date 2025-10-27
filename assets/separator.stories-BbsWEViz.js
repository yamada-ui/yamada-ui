import{j as r}from"./iframe-Cq3rcaMI.js";import{P as c}from"./props-table-C-lxxN5V.js";import{S as a}from"./separator-DNdkHOVI.js";import{F as d}from"./flex-hG4eu5He.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./for-CHPKWv_w.js";import"./heading-vD3e3jk6.js";const g={component:a,title:"Components / Separator"},e=()=>r.jsx(a,{}),t=()=>r.jsx(c,{variant:"stack",rows:["solid","dashed","dotted"],children:(p,n,i)=>r.jsx(a,{variant:n},i)}),o=()=>r.jsx(c,{variant:"stack",rows:["xs","sm","md","lg"],children:(p,n,i)=>r.jsx(a,{size:n},i)}),s=()=>r.jsxs(d,{gap:"md",children:[r.jsx(a,{variant:"solid",h:"32",orientation:"vertical"}),r.jsx(a,{variant:"dashed",h:"32",orientation:"vertical"}),r.jsx(a,{variant:"dotted",h:"32",orientation:"vertical"})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <Separator />;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["solid", "dashed", "dotted"]}>
      {(_, row, key) => <Separator key={key} variant={row} />}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => <Separator key={key} size={row} />}
    </PropsTable>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <Separator variant="solid" h="32" orientation="vertical" />

      <Separator variant="dashed" h="32" orientation="vertical" />

      <Separator variant="dotted" h="32" orientation="vertical" />
    </Flex>;
}`,...s.parameters?.docs?.source}}};const w=["Basic","Variant","Size","Vertical"];export{e as Basic,o as Size,t as Variant,s as Vertical,w as __namedExportsOrder,g as default};
