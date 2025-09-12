import{j as r,C as u,w as g}from"./iframe-Bn8cMbTR.js";import{P as d}from"./props-table-BxRkBYtX.js";import{T as s}from"./tag-uNNJf31p.js";import{W as T}from"./wrap-DwiabKAS.js";import{F as h}from"./for-DbXOaV0m.js";import{P as p}from"./plus-icon-CkbOPTND.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";import"./index-C5LqjgOW.js";import"./index-D0aT385A.js";import"./x-icon-CUNqek_Z.js";import"./createLucideIcon-C--YS6xs.js";const z={component:s,title:"Components / Tag"},a=()=>r.jsx(s,{children:"Tag"}),c=()=>r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:u,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,children:"Tag"},n)}),t=()=>r.jsx(d,{columns:["sm","md","lg"],rows:u,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,children:"Tag"},n)}),l=()=>r.jsxs(r.Fragment,{children:[r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:u,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,startIcon:r.jsx(p,{}),children:"Tag"},n)}),r.jsx(d,{columns:["sm","md","lg"],rows:u,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,endIcon:r.jsx(p,{}),children:"Tag"},n)})]}),m=()=>r.jsx(T,{alignItems:"flex-start",gap:"md",children:r.jsx(h,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,rounded:"full",onClose:g,children:e},o)})}),i=()=>r.jsx(T,{alignItems:"flex-start",gap:"md",children:r.jsx(h,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,disabled:!0,rounded:"full",onClose:g,children:e},o)})});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...i.parameters?.docs?.source}}};const R=["Basic","Variant","Size","Icon","CloseButton","Disabled"];export{a as Basic,m as CloseButton,i as Disabled,l as Icon,t as Size,c as Variant,R as __namedExportsOrder,z as default};
