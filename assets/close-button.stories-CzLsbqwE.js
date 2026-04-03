import{d as r,j as e,C as i}from"./iframe-Gd2wA5UH.js";import{W as c}from"./wrap-BfBuHf6U.js";import{P as m}from"./props-table-hQP5Z1dz.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-mFnSfPNF.js";import"./grid-CakiebxH.js";import"./grid-item-Dj5TeVSg.js";import"./for-C62laByO.js";import"./heading-CalVy3eO.js";const S={component:r,title:"Components / CloseButton"},s=()=>e.jsx(r,{}),o=()=>e.jsx(m,{columns:["solid","subtle","surface","outline","ghost"],rows:i,children:(u,l,d)=>e.jsx(r,{colorScheme:l,variant:u},d)}),t=()=>e.jsx(m,{columns:["xs","sm","md","lg","xl"],rows:i,children:(u,l,d)=>e.jsx(r,{colorScheme:l,size:u},d)}),n=()=>e.jsxs(c,{gap:"md",children:[e.jsx(r,{variant:"solid",fullRounded:!0}),e.jsx(r,{variant:"subtle",fullRounded:!0}),e.jsx(r,{variant:"surface",fullRounded:!0}),e.jsx(r,{variant:"outline",fullRounded:!0}),e.jsx(r,{variant:"ghost",fullRounded:!0})]}),a=()=>e.jsxs(c,{gap:"md",children:[e.jsx(r,{variant:"solid",disabled:!0}),e.jsx(r,{variant:"subtle",disabled:!0}),e.jsx(r,{variant:"surface",disabled:!0}),e.jsx(r,{variant:"outline",disabled:!0}),e.jsx(r,{variant:"ghost",disabled:!0})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
