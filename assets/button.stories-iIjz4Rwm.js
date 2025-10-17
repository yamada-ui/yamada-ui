import{S as o,j as n,C as g,R as p,X as x,a0 as S}from"./iframe-BynoZ0Oq.js";import{P as h}from"./props-table-fajrmhzO.js";import{W as d}from"./wrap-DNTaTEw_.js";import{F as B}from"./for-BimcTw3e.js";import{A as j}from"./arrow-right-icon-DjJ1fY1O.js";import{M as I}from"./mail-icon-Q7ngrHvG.js";import{P as f}from"./plus-icon-B7qs_cEs.js";import{C as v}from"./check-icon-Bnz78nl9.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-MdBZoBbZ.js";import"./grid-item-DEfTZrVK.js";import"./flex-zG46G6gY.js";import"./heading-Dpwm0c5v.js";const T={component:o,title:"Components / Button"},e=()=>n.jsx(o,{children:"Button"}),a=()=>n.jsx(h,{columns:["solid","subtle","surface","outline","ghost"],rows:g,children:(r,t,m)=>n.jsx(o,{colorScheme:t,variant:r,children:"Button"},m)}),s=()=>n.jsx(h,{columns:["xs","sm","md","lg","xl"],rows:g,children:(r,t,m)=>n.jsx(o,{colorScheme:t,size:r,children:"Button"},m)}),c=()=>n.jsx(d,{gap:"md",children:n.jsx(B,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,fullRounded:!0,children:p(r)},t)})}),i=()=>n.jsx(d,{gap:"md",children:n.jsx(B,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,disabled:!0,children:p(r)},t)})}),u=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",size:"xs",variant:"solid",startIcon:n.jsx(f,{}),children:"Button"}),n.jsx(o,{colorScheme:"secondary",size:"sm",variant:"subtle",endIcon:n.jsx(j,{}),children:"Button"}),n.jsx(o,{colorScheme:"info",size:"md",variant:"surface",startIcon:n.jsx(I,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",size:"lg",variant:"outline",startIcon:n.jsx(v,{}),children:"Button"}),n.jsx(o,{colorScheme:"danger",size:"xl",variant:"ghost",startIcon:n.jsx(x,{}),children:"Button"})]}),l=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",loading:!0,children:"Button"}),n.jsx(o,{colorScheme:"secondary",variant:"subtle",loading:!0,loadingIcon:"dots",children:"Button"}),n.jsx(o,{colorScheme:"info",variant:"surface",loading:!0,loadingIcon:n.jsx(S,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",variant:"outline",loading:!0,loadingMessage:"Loading...",children:"Button"}),n.jsx(o,{colorScheme:"danger",variant:"ghost",loading:!0,loadingIcon:"grid",loadingMessage:"Loading...",loadingPlacement:"end",children:"Button"})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <Button>Button</Button>;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} variant={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} size={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} disabled>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const O=["Basic","Variant","Size","FullRounded","Disabled","Icon","LoadingIcon"];export{e as Basic,i as Disabled,c as FullRounded,u as Icon,l as LoadingIcon,s as Size,a as Variant,O as __namedExportsOrder,T as default};
