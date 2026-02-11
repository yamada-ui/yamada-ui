import{Q as o,j as n,C as E,P as F,X as _,_ as A}from"./iframe-FV6Pf4zG.js";import{P as T}from"./props-table-DZUGPlYC.js";import{W as d}from"./wrap-Br4jHdq7.js";import{F as O}from"./for-v94cQqt1.js";import{A as H}from"./arrow-right-icon-DmUSOEqC.js";import{M as X}from"./mail-icon-C7cL8AlS.js";import{P as D}from"./plus-icon-DEXFOstD.js";import{C as V}from"./check-icon-jMXxHMjr.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CSiCDg7_.js";import"./grid-item-bFCU3E8M.js";import"./flex-DLFcrCK5.js";import"./heading-CT3LVYzH.js";const tn={component:o,title:"Components / Button"},e=()=>n.jsx(o,{children:"Button"}),a=()=>n.jsx(T,{columns:["solid","subtle","surface","outline","ghost"],rows:E,children:(r,t,m)=>n.jsx(o,{colorScheme:t,variant:r,children:"Button"},m)}),s=()=>n.jsx(T,{columns:["xs","sm","md","lg","xl"],rows:E,children:(r,t,m)=>n.jsx(o,{colorScheme:t,size:r,children:"Button"},m)}),c=()=>n.jsx(d,{gap:"md",children:n.jsx(O,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,fullRounded:!0,children:F(r)},t)})}),i=()=>n.jsx(d,{gap:"md",children:n.jsx(O,{each:["solid","subtle","surface","outline","ghost"],children:(r,t)=>n.jsx(o,{variant:r,disabled:!0,children:F(r)},t)})}),u=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",size:"xs",variant:"solid",startIcon:n.jsx(D,{}),children:"Button"}),n.jsx(o,{colorScheme:"secondary",size:"sm",variant:"subtle",endIcon:n.jsx(H,{}),children:"Button"}),n.jsx(o,{colorScheme:"info",size:"md",variant:"surface",startIcon:n.jsx(X,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",size:"lg",variant:"outline",startIcon:n.jsx(V,{}),children:"Button"}),n.jsx(o,{colorScheme:"danger",size:"xl",variant:"ghost",startIcon:n.jsx(_,{}),children:"Button"})]}),l=()=>n.jsxs(d,{gap:"md",children:[n.jsx(o,{colorScheme:"primary",loading:!0,children:"Button"}),n.jsx(o,{colorScheme:"secondary",variant:"subtle",loading:!0,loadingIcon:"dots",children:"Button"}),n.jsx(o,{colorScheme:"info",variant:"surface",loading:!0,loadingIcon:n.jsx(A,{}),children:"Button"}),n.jsx(o,{colorScheme:"warning",variant:"outline",loading:!0,loadingMessage:"Loading...",children:"Button"}),n.jsx(o,{colorScheme:"danger",variant:"ghost",loading:!0,loadingIcon:"grid",loadingMessage:"Loading...",loadingPlacement:"end",children:"Button"})]});var g,p,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Button>Button</Button>;
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var B,x,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} variant={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,I,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} size={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var v,b,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,z,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} disabled>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var P,k,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var M,R,W;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const en=["Basic","Variant","Size","FullRounded","Disabled","Icon","LoadingIcon"];export{e as Basic,i as Disabled,c as FullRounded,u as Icon,l as LoadingIcon,s as Size,a as Variant,en as __namedExportsOrder,tn as default};
