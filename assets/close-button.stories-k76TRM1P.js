import{D as r,j as e,C as i}from"./iframe-Brv718Ke.js";import{P as c}from"./props-table-BhZ2Cxzm.js";import{W as m}from"./wrap-CJPla_PE.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DLYm4Rks.js";import"./grid-item-DWuT-LWZ.js";import"./for-y9tZyjCV.js";import"./flex-DhUoci5A.js";import"./heading-DLtRtgvj.js";const S={component:r,title:"Components / CloseButton"},s=()=>e.jsx(r,{}),o=()=>e.jsx(c,{columns:["solid","subtle","surface","outline","ghost"],rows:i,children:(u,l,d)=>e.jsx(r,{colorScheme:l,variant:u},d)}),t=()=>e.jsx(c,{columns:["xs","sm","md","lg","xl"],rows:i,children:(u,l,d)=>e.jsx(r,{colorScheme:l,size:u},d)}),n=()=>e.jsxs(m,{gap:"md",children:[e.jsx(r,{variant:"solid",fullRounded:!0}),e.jsx(r,{variant:"subtle",fullRounded:!0}),e.jsx(r,{variant:"surface",fullRounded:!0}),e.jsx(r,{variant:"outline",fullRounded:!0}),e.jsx(r,{variant:"ghost",fullRounded:!0})]}),a=()=>e.jsxs(m,{gap:"md",children:[e.jsx(r,{variant:"solid",disabled:!0}),e.jsx(r,{variant:"subtle",disabled:!0}),e.jsx(r,{variant:"surface",disabled:!0}),e.jsx(r,{variant:"outline",disabled:!0}),e.jsx(r,{variant:"ghost",disabled:!0})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <CloseButton />;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CloseButton key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CloseButton key={key} colorScheme={row} size={column} />;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <CloseButton variant="solid" fullRounded />

      <CloseButton variant="subtle" fullRounded />

      <CloseButton variant="surface" fullRounded />

      <CloseButton variant="outline" fullRounded />

      <CloseButton variant="ghost" fullRounded />
    </Wrap>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <CloseButton variant="solid" disabled />

      <CloseButton variant="subtle" disabled />

      <CloseButton variant="surface" disabled />

      <CloseButton variant="outline" disabled />

      <CloseButton variant="ghost" disabled />
    </Wrap>;
}`,...a.parameters?.docs?.source}}};const R=["Basic","Variant","Size","FullRounded","Disabled"];export{s as Basic,a as Disabled,n as FullRounded,t as Size,o as Variant,R as __namedExportsOrder,S as default};
