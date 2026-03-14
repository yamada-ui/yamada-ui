import{j as r,D as S,P as g,C as d}from"./iframe-DyywAl9M.js";import{P as p}from"./props-table-DObtv924.js";import{T as s}from"./tag-aw7QqOnU.js";import{W as h}from"./wrap-BOb1BHhO.js";import{F as T}from"./for-CDZkNiUE.js";import{P as x}from"./plus-icon-BvnEx_qW.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./index-dXPSl-8O.js";import"./index-DicEFgu4.js";const W={component:s,title:"Components / Tag"},a=()=>r.jsx(s,{children:"Tag"}),c=()=>r.jsx(p,{columns:["solid","subtle","surface","outline"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,children:g(e)},n)}),t=()=>r.jsx(p,{columns:["sm","md","lg"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,children:g(e)},n)}),l=()=>r.jsx(h,{gap:"md",children:r.jsx(T,{each:["solid","subtle","surface","outline"],children:(e,o)=>r.jsx(s,{variant:e,fullRounded:!0,children:g(e)},o)})}),u=()=>r.jsxs(r.Fragment,{children:[r.jsx(p,{columns:["solid","subtle","surface","outline"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,startIcon:r.jsx(x,{}),children:"Tag"},n)}),r.jsx(p,{columns:["sm","md","lg"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,endIcon:r.jsx(x,{}),children:"Tag"},n)})]}),m=()=>r.jsx(h,{alignItems:"flex-start",gap:"md",children:r.jsx(T,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,rounded:"full",onClose:S,children:e},o)})}),i=()=>r.jsx(h,{alignItems:"flex-start",gap:"md",children:r.jsx(T,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,disabled:!0,rounded:"full",onClose:S,children:e},o)})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Tag key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Tag>}
      </For>
    </Wrap>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Tag key={key} colorScheme={row} variant={column} startIcon={<PlusIcon />}>
              Tag
            </Tag>;
      }}
      </PropsTable>

      <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Tag key={key} colorScheme={row} size={column} endIcon={<PlusIcon />}>
              Tag
            </Tag>;
      }}
      </PropsTable>
    </>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...i.parameters?.docs?.source}}};const v=["Basic","Variant","Size","FullRounded","Icon","CloseButton","Disabled"];export{a as Basic,m as CloseButton,i as Disabled,l as FullRounded,u as Icon,t as Size,c as Variant,v as __namedExportsOrder,W as default};
