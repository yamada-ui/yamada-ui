import{n as e}from"./chunk-jRWAZmH_.js";import{Cn as t,En as n,Z as r,yn as i}from"./core-C7NnSGLR.js";import{t as a}from"./jsx-runtime-D_578c1K.js";import{N as o,t as s}from"./icon-BMXCkoCb.js";import{t as c}from"./wrap-DVXQ7Jc8.js";import{K as l,T as u,Ur as d,Wr as f,q as p}from"./iframe-DE87BsHf.js";import{n as m,t as h}from"./storybook-3mtO6wfP.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{h(),r(),d(),s(),u(),l(),g=a(),_={component:p,title:`Components / Tag`},v=()=>(0,g.jsx)(p,{children:`Tag`}),y=()=>(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:n,children:(e,t,n)=>(0,g.jsx)(p,{colorScheme:t,variant:e,children:i(e)},n)}),b=()=>(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:n,children:(e,t,n)=>(0,g.jsx)(p,{colorScheme:t,size:e,children:i(e)},n)}),x=()=>(0,g.jsx)(c,{gap:`md`,children:(0,g.jsx)(f,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,g.jsx)(p,{variant:e,fullRounded:!0,children:i(e)},t)})}),S=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:n,children:(e,t,n)=>(0,g.jsx)(p,{colorScheme:t,variant:e,startIcon:(0,g.jsx)(o,{}),children:`Tag`},n)}),(0,g.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:n,children:(e,t,n)=>(0,g.jsx)(p,{colorScheme:t,size:e,endIcon:(0,g.jsx)(o,{}),children:`Tag`},n)})]}),C=()=>(0,g.jsx)(c,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(f,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,n)=>(0,g.jsx)(p,{colorScheme:e,rounded:`full`,onClose:t,children:e},n)})}),w=()=>(0,g.jsx)(c,{alignItems:`flex-start`,gap:`md`,children:(0,g.jsx)(f,{each:[`primary`,`secondary`,`success`,`warning`,`error`],children:(e,n)=>(0,g.jsx)(p,{colorScheme:e,disabled:!0,rounded:`full`,onClose:t,children:e},n)})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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