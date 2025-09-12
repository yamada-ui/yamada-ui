import{j as a,C as d}from"./iframe-Bn8cMbTR.js";import{P as m}from"./props-table-BxRkBYtX.js";import{I as o}from"./icon-button-CMJ7K4VL.js";import{W as p}from"./wrap-DwiabKAS.js";import{B as b}from"./bold-icon--3nRR2fi.js";import{S as x,M as I}from"./sun-icon-Bfwtqhw2.js";import{P as r}from"./plus-icon-CkbOPTND.js";import{M as j}from"./minus-icon-B7sM154V.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./for-DbXOaV0m.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";import"./button-BuVkzRhm.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";import"./createLucideIcon-C--YS6xs.js";const _={component:o,title:"Components / IconButton"},n=()=>a.jsx(o,{"aria-label":"Plus",icon:a.jsx(r,{})}),e=()=>a.jsx(m,{columns:["solid","subtle","surface","outline","ghost"],rows:d,children:(i,u,c)=>a.jsx(o,{colorScheme:u,variant:i,"aria-label":"Plus",icon:a.jsx(r,{})},c)}),s=()=>a.jsx(m,{columns:["xs","sm","md","lg","xl"],rows:d,children:(i,u,c)=>a.jsx(o,{colorScheme:u,size:i,"aria-label":"Plus",icon:a.jsx(r,{})},c)}),l=()=>a.jsxs(p,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",fullRounded:!0,icon:a.jsx(r,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",fullRounded:!0,icon:a.jsx(j,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",fullRounded:!0,icon:a.jsx(b,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",fullRounded:!0,icon:a.jsx(x,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",fullRounded:!0,icon:a.jsx(I,{})})]}),t=()=>a.jsxs(p,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",disabled:!0,icon:a.jsx(r,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",disabled:!0,icon:a.jsx(j,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",disabled:!0,icon:a.jsx(b,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",disabled:!0,icon:a.jsx(x,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",disabled:!0,icon:a.jsx(I,{})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <IconButton aria-label="Plus" icon={<PlusIcon />} />;
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const z=["Basic","Variant","Size","FullRounded","Disabled"];export{n as Basic,t as Disabled,l as FullRounded,s as Size,e as Variant,z as __namedExportsOrder,_ as default};
