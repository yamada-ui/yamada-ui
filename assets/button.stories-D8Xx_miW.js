import{j as n,C as p,G as g}from"./iframe-BG38LAQ9.js";import{B as o}from"./button-CfsqSZ9w.js";import{W as d}from"./wrap-D_uUB3Mo.js";import{F as h}from"./for-1Jrr3mXT.js";import{A as x}from"./arrow-right-icon-DdRzSCWu.js";import{M as S}from"./mail-icon-BYwqxZ2m.js";import{P as B}from"./props-table-JZnj-Axh.js";import{P as f}from"./plus-icon-D1haQDIa.js";import{C as j}from"./check-icon-BY2gewzu.js";import{X as I}from"./x-icon-Cem_7L-6.js";import{P as v}from"./rings-BXfyi9cx.js";import"./use-ripple-MuLBmFKU.js";import"./flex-BnFbM7LR.js";import"./createLucideIcon-CsglGZ6M.js";import"./grid-C7OhmlE8.js";import"./grid-item-KziFp2cJ.js";import"./heading-DSMkYvJJ.js";const H={component:o,title:"Components / Button"},e=()=>n.jsx(o,{children:"Button"}),a=()=>n.jsx(B,{columns:["solid","subtle","surface","outline","ghost"],rows:p,children:(r,t,m)=>n.jsx(o,{colorScheme:t,variant:r,children:"Button"},m)}),s=()=>n.jsx(B,{columns:["xs","sm","md","lg","xl"],rows:p,children:(r,t,m)=>n.jsx(o,{colorScheme:t,size:r,children:"Button"},m)}),c=()=>n.jsx(d,{gap:"md",children:n.jsx(h,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,fullRounded:!0,children:g(r)},t)})}),i=()=>n.jsx(d,{gap:"md",children:n.jsx(h,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,disabled:!0,children:g(r)},t)})}),u=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",size:"xs",variant:"solid",startIcon:n.jsx(f,{}),children:"Button"}),n.jsx(o,{colorScheme:"secondary",size:"sm",variant:"subtle",endIcon:n.jsx(x,{}),children:"Button"}),n.jsx(o,{colorScheme:"info",size:"md",variant:"surface",startIcon:n.jsx(S,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",size:"lg",variant:"outline",startIcon:n.jsx(j,{}),children:"Button"}),n.jsx(o,{colorScheme:"danger",size:"xl",variant:"ghost",startIcon:n.jsx(I,{}),children:"Button"})]}),l=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",loading:!0,children:"Button"}),n.jsx(o,{colorScheme:"secondary",variant:"subtle",loading:!0,loadingIcon:"dots",children:"Button"}),n.jsx(o,{colorScheme:"info",variant:"surface",loading:!0,loadingIcon:n.jsx(v,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",variant:"outline",loading:!0,loadingMessage:"Loading...",children:"Button"}),n.jsx(o,{colorScheme:"danger",variant:"ghost",loading:!0,loadingIcon:"grid",loadingMessage:"Loading...",loadingPlacement:"end",children:"Button"})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const X=["Basic","Variant","Size","FullRounded","Disabled","Icon","LoadingIcon"];export{e as Basic,i as Disabled,c as FullRounded,u as Icon,l as LoadingIcon,s as Size,a as Variant,X as __namedExportsOrder,H as default};
