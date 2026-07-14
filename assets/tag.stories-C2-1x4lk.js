import{i as e}from"./preload-helper-B45gAKPr.js";import{Qn as t,pt as n,qn as r,tr as i}from"./core-CHnh0qx9.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{t as o,ut as s}from"./icon-rUPdsH0N.js";import{Ft as c,Ia as l,It as u,La as d,ot as f,st as p}from"./iframe-CUT_NmNE.js";import{n as m,t as h}from"./storybook-jCQcb4sW.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{h(),n(),l(),o(),f(),c(),g=a(),_={component:u,title:`Components / Tag`},v=()=>(0,g.jsx)(u,{children:`Tag`}),y=()=>(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:i,children:(e,t,n)=>(0,g.jsx)(u,{colorScheme:t,variant:e,children:r(e)},n)}),b=()=>(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:i,children:(e,t,n)=>(0,g.jsx)(u,{colorScheme:t,size:e,children:r(e)},n)}),x=()=>(0,g.jsx)(p,{gap:`md`,children:(0,g.jsx)(d,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,g.jsx)(u,{variant:e,fullRounded:!0,children:r(e)},t)})}),S=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:i,children:(e,t,n)=>(0,g.jsx)(u,{colorScheme:t,variant:e,startIcon:(0,g.jsx)(s,{}),children:`Tag`},n)}),(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:i,children:(e,t,n)=>(0,g.jsx)(u,{colorScheme:t,size:e,endIcon:(0,g.jsx)(s,{}),children:`Tag`},n)})]}),C=()=>(0,g.jsx)(p,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(d,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,n)=>(0,g.jsx)(u,{colorScheme:e,rounded:`full`,onClose:t,children:e},n)})}),w=()=>(0,g.jsx)(p,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(d,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,n)=>(0,g.jsx)(u,{colorScheme:e,disabled:!0,rounded:`full`,onClose:t,children:e},n)})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Tag key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Tag>}
      </For>
    </Wrap>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...w.parameters?.docs?.source}}},T=[`Basic`,`Variant`,`Size`,`FullRounded`,`Icon`,`CloseButton`,`Disabled`]}))();export{v as Basic,C as CloseButton,w as Disabled,x as FullRounded,S as Icon,b as Size,y as Variant,T as __namedExportsOrder,_ as default};