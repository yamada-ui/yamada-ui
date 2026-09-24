import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Nn as t,Tn as n,_n as r,dn as i}from"./props-Bz1FL_va.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./arrow-right-icon-D17aix0t.js";import{n as c,t as l}from"./check-icon-B4K3BaPN.js";import{n as u,t as d}from"./mail-icon-Stvauf3X.js";import{n as f,t as p}from"./plus-icon-rBaNJSiU.js";import{n as m,t as h}from"./x-icon-Bm8h1VjH.js";import{i as g,r as _}from"./rings-Cr09nJil.js";import{r as v,t as y}from"./button-CFBNyQlD.js";import{n as b,t as x}from"./for-BIl9Q3L3.js";import{n as S,t as C}from"./wrap-Dg19SbjB.js";import{n as w,t as T}from"./props-table-CLkISL0o.js";var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{w(),t(),i(),b(),o(),c(),u(),f(),m(),g(),S(),v(),E=a(),D={component:y,title:`Components / Button`},O=()=>(0,E.jsx)(y,{children:`Button`}),k=()=>(0,E.jsx)(T,{columns:[`solid`,`subtle`,`surface`,`outline`,`ghost`],rows:n,children:(e,t,n)=>(0,E.jsx)(y,{colorScheme:t,variant:e,children:`Button`},n)}),A=()=>(0,E.jsx)(T,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:n,children:(e,t,n)=>(0,E.jsx)(y,{colorScheme:t,size:e,children:`Button`},n)}),j=()=>(0,E.jsx)(C,{gap:`md`,children:(0,E.jsx)(x,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,E.jsx)(y,{variant:e,fullRounded:!0,children:r(e)},t)})}),M=()=>(0,E.jsx)(C,{gap:`md`,children:(0,E.jsx)(x,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,E.jsx)(y,{variant:e,disabled:!0,children:r(e)},t)})}),N=()=>(0,E.jsxs)(C,{gap:`md`,children:[(0,E.jsx)(y,{colorScheme:`primary`,size:`xs`,variant:`solid`,startIcon:(0,E.jsx)(p,{}),children:`Button`}),(0,E.jsx)(y,{colorScheme:`secondary`,size:`sm`,variant:`subtle`,endIcon:(0,E.jsx)(s,{}),children:`Button`}),(0,E.jsx)(y,{colorScheme:`info`,size:`md`,variant:`surface`,startIcon:(0,E.jsx)(d,{}),children:`Button`}),(0,E.jsx)(y,{colorScheme:`warning`,size:`lg`,variant:`outline`,startIcon:(0,E.jsx)(l,{}),children:`Button`}),(0,E.jsx)(y,{colorScheme:`danger`,size:`xl`,variant:`ghost`,startIcon:(0,E.jsx)(h,{}),children:`Button`})]}),P=()=>(0,E.jsxs)(C,{gap:`md`,children:[(0,E.jsx)(y,{colorScheme:`primary`,loading:!0,children:`Button`}),(0,E.jsx)(y,{colorScheme:`secondary`,variant:`subtle`,loading:!0,loadingIcon:`dots`,children:`Button`}),(0,E.jsx)(y,{colorScheme:`info`,variant:`surface`,loading:!0,loadingIcon:(0,E.jsx)(_,{}),children:`Button`}),(0,E.jsx)(y,{colorScheme:`warning`,variant:`outline`,loading:!0,loadingMessage:`Loading...`,children:`Button`}),(0,E.jsx)(y,{colorScheme:`danger`,variant:`ghost`,loading:!0,loadingIcon:`grid`,loadingMessage:`Loading...`,loadingPlacement:`end`,children:`Button`})]}),F=[`Basic`,`Variant`,`Size`,`FullRounded`,`Disabled`,`Icon`,`LoadingIcon`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Button>Button</Button>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} variant={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} size={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} disabled>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Button colorScheme="primary" size="xs" variant="solid" startIcon={<PlusIcon />}>
        Button
      </Button>

      <Button colorScheme="secondary" size="sm" variant="subtle" endIcon={<ArrowRightIcon />}>
        Button
      </Button>

      <Button colorScheme="info" size="md" variant="surface" startIcon={<MailIcon />}>
        Button
      </Button>

      <Button colorScheme="warning" size="lg" variant="outline" startIcon={<CheckIcon />}>
        Button
      </Button>

      <Button colorScheme="danger" size="xl" variant="ghost" startIcon={<XIcon />}>
        Button
      </Button>
    </Wrap>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Button colorScheme="primary" loading>
        Button
      </Button>

      <Button colorScheme="secondary" variant="subtle" loading loadingIcon="dots">
        Button
      </Button>

      <Button colorScheme="info" variant="surface" loading loadingIcon={<Loading.Puff />}>
        Button
      </Button>

      <Button colorScheme="warning" variant="outline" loading loadingMessage="Loading...">
        Button
      </Button>

      <Button colorScheme="danger" variant="ghost" loading loadingIcon="grid" loadingMessage="Loading..." loadingPlacement="end">
        Button
      </Button>
    </Wrap>;
}`,...P.parameters?.docs?.source}}}})))()}I();export{O as Basic,M as Disabled,j as FullRounded,N as Icon,P as LoadingIcon,A as Size,k as Variant,F as __namedExportsOrder,D as default};