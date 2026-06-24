import{i as e}from"./preload-helper-usAeo7Bx.js";import{$n as t,Gn as n,Xn as r,dt as i}from"./core-DkLkzQLq.js";import{t as a}from"./jsx-runtime-O9QVJvLM.js";import{t as o,ut as s}from"./icon-BJ0kjvJ7.js";import{Ma as c,Na as l,Nt as u,Pt as d,at as f,it as p}from"./iframe-QFtltEr1.js";import{n as m,t as h}from"./storybook-DaILEofl.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{h(),i(),c(),o(),p(),u(),g=a(),_={component:d,title:`Components / Tag`},v=()=>(0,g.jsx)(d,{children:`Tag`}),y=()=>(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,r)=>(0,g.jsx)(d,{colorScheme:t,variant:e,children:n(e)},r)}),b=()=>(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:t,children:(e,t,r)=>(0,g.jsx)(d,{colorScheme:t,size:e,children:n(e)},r)}),x=()=>(0,g.jsx)(f,{gap:`md`,children:(0,g.jsx)(l,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,g.jsx)(d,{variant:e,fullRounded:!0,children:n(e)},t)})}),S=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:t,children:(e,t,n)=>(0,g.jsx)(d,{colorScheme:t,variant:e,startIcon:(0,g.jsx)(s,{}),children:`Tag`},n)}),(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:t,children:(e,t,n)=>(0,g.jsx)(d,{colorScheme:t,size:e,endIcon:(0,g.jsx)(s,{}),children:`Tag`},n)})]}),C=()=>(0,g.jsx)(f,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(l,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,t)=>(0,g.jsx)(d,{colorScheme:e,rounded:`full`,onClose:r,children:e},t)})}),w=()=>(0,g.jsx)(f,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(l,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,t)=>(0,g.jsx)(d,{colorScheme:e,disabled:!0,rounded:`full`,onClose:r,children:e},t)})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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