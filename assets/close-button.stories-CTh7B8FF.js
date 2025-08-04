import{j as r,C as d}from"./iframe-CDvKCJeY.js";import{P as c}from"./props-table-B5jd3eOh.js";import{C as e}from"./close-button-Dt_WUjHv.js";import{W as m}from"./wrap-Be2DGhzO.js";import"./grid-7ltxq6Fa.js";import"./grid-item-DNu_2ZLx.js";import"./for-Dx7nH0k1.js";import"./flex-CO0xfN_q.js";import"./heading-CF4T3G26.js";import"./icon-button-BY5_vXRW.js";import"./button-CJHWYlLB.js";import"./use-ripple-BOWtBklS.js";import"./rings-CTwWZ55N.js";import"./x-icon-Cl7yPkvf.js";import"./createLucideIcon-DLwdYwoU.js";const k={component:e,title:"Components / CloseButton"},o=()=>r.jsx(e,{}),s=()=>r.jsx(c,{columns:["solid","subtle","surface","outline","ghost"],rows:d,children:(u,l,i)=>r.jsx(e,{colorScheme:l,variant:u},i)}),t=()=>r.jsx(c,{columns:["xs","sm","md","lg","xl"],rows:d,children:(u,l,i)=>r.jsx(e,{colorScheme:l,size:u},i)}),n=()=>r.jsxs(m,{gap:"md",children:[r.jsx(e,{variant:"solid",fullRounded:!0}),r.jsx(e,{variant:"subtle",fullRounded:!0}),r.jsx(e,{variant:"surface",fullRounded:!0}),r.jsx(e,{variant:"outline",fullRounded:!0}),r.jsx(e,{variant:"ghost",fullRounded:!0})]}),a=()=>r.jsxs(m,{gap:"md",children:[r.jsx(e,{variant:"solid",disabled:!0}),r.jsx(e,{variant:"subtle",disabled:!0}),r.jsx(e,{variant:"surface",disabled:!0}),r.jsx(e,{variant:"outline",disabled:!0}),r.jsx(e,{variant:"ghost",disabled:!0})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <CloseButton />;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CloseButton key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const y=["Basic","Variant","Size","FullRounded","Disabled"];export{o as Basic,a as Disabled,n as FullRounded,t as Size,s as Variant,y as __namedExportsOrder,k as default};
