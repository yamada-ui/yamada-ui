import{j as r,C as i,E as g}from"./iframe-Cq3rcaMI.js";import{P as d}from"./props-table-C-lxxN5V.js";import{T as s}from"./tag-BBE08PBI.js";import{W as T}from"./wrap-BovZRhxo.js";import{F as h}from"./for-CHPKWv_w.js";import{P as p}from"./plus-icon-DMZpR6Vi.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";import"./index--qi090hu.js";import"./index-C6-Q4i0p.js";const F={component:s,title:"Components / Tag"},a=()=>r.jsx(s,{children:"Tag"}),c=()=>r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,children:"Tag"},n)}),t=()=>r.jsx(d,{columns:["sm","md","lg"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,children:"Tag"},n)}),l=()=>r.jsxs(r.Fragment,{children:[r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,startIcon:r.jsx(p,{}),children:"Tag"},n)}),r.jsx(d,{columns:["sm","md","lg"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,endIcon:r.jsx(p,{}),children:"Tag"},n)})]}),m=()=>r.jsx(T,{alignItems:"flex-start",gap:"md",children:r.jsx(h,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,rounded:"full",onClose:g,children:e},o)})}),u=()=>r.jsx(T,{alignItems:"flex-start",gap:"md",children:r.jsx(h,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,disabled:!0,rounded:"full",onClose:g,children:e},o)})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            Tag
          </Tag>;
    }}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            Tag
          </Tag>;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...u.parameters?.docs?.source}}};const _=["Basic","Variant","Size","Icon","CloseButton","Disabled"];export{a as Basic,m as CloseButton,u as Disabled,l as Icon,t as Size,c as Variant,_ as __namedExportsOrder,F as default};
