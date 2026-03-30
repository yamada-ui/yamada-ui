import{I as o,j as a,C as d}from"./iframe-Bly_QBCH.js";import{W as m}from"./wrap-H-AsMPZ6.js";import{B as p}from"./bold-icon-BrtAXJ80.js";import{S as b,M as x}from"./sun-icon-8ocR6Y3v.js";import{P as n}from"./plus-icon-DDz0ZdYj.js";import{M as I}from"./minus-icon-Al2Oxbar.js";import{P as j}from"./props-table-C3vMHLRE.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-ClwVNL9a.js";import"./grid-BGUI98px.js";import"./grid-item-HANaGcfZ.js";import"./for-6VbXiyE7.js";import"./heading-CT_rir98.js";const L={component:o,title:"Components / IconButton"},r=()=>a.jsx(o,{"aria-label":"Plus",icon:a.jsx(n,{})}),e=()=>a.jsx(j,{columns:["solid","subtle","surface","outline","ghost"],rows:d,children:(i,u,c)=>a.jsx(o,{colorScheme:u,variant:i,"aria-label":"Plus",icon:a.jsx(n,{})},c)}),s=()=>a.jsx(j,{columns:["xs","sm","md","lg","xl"],rows:d,children:(i,u,c)=>a.jsx(o,{colorScheme:u,size:i,"aria-label":"Plus",icon:a.jsx(n,{})},c)}),l=()=>a.jsxs(m,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",fullRounded:!0,icon:a.jsx(n,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",fullRounded:!0,icon:a.jsx(I,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",fullRounded:!0,icon:a.jsx(p,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",fullRounded:!0,icon:a.jsx(b,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",fullRounded:!0,icon:a.jsx(x,{})})]}),t=()=>a.jsxs(m,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",disabled:!0,icon:a.jsx(n,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",disabled:!0,icon:a.jsx(I,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",disabled:!0,icon:a.jsx(p,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",disabled:!0,icon:a.jsx(b,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",disabled:!0,icon:a.jsx(x,{})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <IconButton aria-label="Plus" icon={<PlusIcon />} />;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <IconButton key={key} colorScheme={row} variant={column} aria-label="Plus" icon={<PlusIcon />} />;
    }}
    </PropsTable>;
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <IconButton key={key} colorScheme={row} size={column} aria-label="Plus" icon={<PlusIcon />} />;
    }}
    </PropsTable>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <IconButton variant="solid" aria-label="Plus" fullRounded icon={<PlusIcon />} />

      <IconButton variant="subtle" aria-label="Minus" fullRounded icon={<MinusIcon />} />

      <IconButton variant="surface" aria-label="Bold" fullRounded icon={<BoldIcon />} />

      <IconButton variant="outline" aria-label="Light" fullRounded icon={<SunIcon />} />

      <IconButton variant="ghost" aria-label="Dark" fullRounded icon={<MoonIcon />} />
    </Wrap>;
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <IconButton variant="solid" aria-label="Plus" disabled icon={<PlusIcon />} />

      <IconButton variant="subtle" aria-label="Minus" disabled icon={<MinusIcon />} />

      <IconButton variant="surface" aria-label="Bold" disabled icon={<BoldIcon />} />

      <IconButton variant="outline" aria-label="Light" disabled icon={<SunIcon />} />

      <IconButton variant="ghost" aria-label="Dark" disabled icon={<MoonIcon />} />
    </Wrap>;
}`,...t.parameters?.docs?.source}}};const O=["Basic","Variant","Size","FullRounded","Disabled"];export{r as Basic,t as Disabled,l as FullRounded,s as Size,e as Variant,O as __namedExportsOrder,L as default};
