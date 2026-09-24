import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Nn as t,Sn as n,Tn as r,_n as i,dn as a,xn as o}from"./props-Bz1FL_va.js";import{t as s}from"./jsx-runtime-BdxMnOeJ.js";import{n as c,t as l}from"./plus-icon-rBaNJSiU.js";import{n as u,t as d}from"./for-BIl9Q3L3.js";import{n as f,t as p}from"./tag-BZNURefF.js";import{n as m,t as h}from"./wrap-Dg19SbjB.js";import{n as g,t as _}from"./props-table-CLkISL0o.js";var v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{g(),t(),o(),a(),u(),c(),m(),f(),v=s(),y={component:p,title:`Components / Tag`},b=()=>(0,v.jsx)(p,{children:`Tag`}),x=()=>(0,v.jsx)(_,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:r,children:(e,t,n)=>(0,v.jsx)(p,{colorScheme:t,variant:e,children:i(e)},n)}),S=()=>(0,v.jsx)(_,{columns:[`sm`,`md`,`lg`],rows:r,children:(e,t,n)=>(0,v.jsx)(p,{colorScheme:t,size:e,children:i(e)},n)}),C=()=>(0,v.jsx)(h,{gap:`md`,children:(0,v.jsx)(d,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,v.jsx)(p,{variant:e,fullRounded:!0,children:i(e)},t)})}),w=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:r,children:(e,t,n)=>(0,v.jsx)(p,{colorScheme:t,variant:e,startIcon:(0,v.jsx)(l,{}),children:`Tag`},n)}),(0,v.jsx)(_,{columns:[`sm`,`md`,`lg`],rows:r,children:(e,t,n)=>(0,v.jsx)(p,{colorScheme:t,size:e,endIcon:(0,v.jsx)(l,{}),children:`Tag`},n)})]}),T=()=>(0,v.jsx)(h,{alignItems:`flex-start`,gap:`md`,children:(0,v.jsx)(d,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(p,{colorScheme:e,rounded:`full`,onClose:n,children:e},t)})}),E=()=>(0,v.jsx)(h,{alignItems:`flex-start`,gap:`md`,children:(0,v.jsx)(d,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(p,{colorScheme:e,disabled:!0,rounded:`full`,onClose:n,children:e},t)})}),D=[`Basic`,`Variant`,`Size`,`FullRounded`,`Icon`,`CloseButton`,`Disabled`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Tag key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Tag>}
      </For>
    </Wrap>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...E.parameters?.docs?.source}}}})))()}O();export{b as Basic,T as CloseButton,E as Disabled,C as FullRounded,w as Icon,S as Size,x as Variant,D as __namedExportsOrder,y as default};