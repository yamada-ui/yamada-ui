import{n as e}from"./chunk-zsgVPwQN.js";import{El as t,Id as n,Jl as r,Kf as i,Kl as a,N as o,Ol as s,P as c,Pd as l,am as u,ep as d,mm as f,sf as p,sm as m,vf as h,vi as g,yi as _,ym as v}from"./iframe-CXDvaz-K.js";import{n as y,t as b}from"./storybook-dZuXfK4h.js";var x,S,C,w,T,E,D,O,k,A;e((()=>{b(),u(),g(),l(),a(),o(),s(),x=m(),S={component:t,title:`Components / Button`},C=()=>(0,x.jsx)(t,{children:`Button`}),w=()=>(0,x.jsx)(y,{columns:[`solid`,`subtle`,`surface`,`outline`,`ghost`],rows:v,children:(e,n,r)=>(0,x.jsx)(t,{colorScheme:n,variant:e,children:`Button`},r)}),T=()=>(0,x.jsx)(y,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:v,children:(e,n,r)=>(0,x.jsx)(t,{colorScheme:n,size:e,children:`Button`},r)}),E=()=>(0,x.jsx)(c,{gap:`md`,children:(0,x.jsx)(_,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,n)=>(0,x.jsx)(t,{variant:e,fullRounded:!0,children:f(e)},n)})}),D=()=>(0,x.jsx)(c,{gap:`md`,children:(0,x.jsx)(_,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,n)=>(0,x.jsx)(t,{variant:e,disabled:!0,children:f(e)},n)})}),O=()=>(0,x.jsxs)(c,{gap:`md`,children:[(0,x.jsx)(t,{colorScheme:`primary`,size:`xs`,variant:`solid`,startIcon:(0,x.jsx)(p,{}),children:`Button`}),(0,x.jsx)(t,{colorScheme:`secondary`,size:`sm`,variant:`subtle`,endIcon:(0,x.jsx)(d,{}),children:`Button`}),(0,x.jsx)(t,{colorScheme:`info`,size:`md`,variant:`surface`,startIcon:(0,x.jsx)(h,{}),children:`Button`}),(0,x.jsx)(t,{colorScheme:`warning`,size:`lg`,variant:`outline`,startIcon:(0,x.jsx)(i,{}),children:`Button`}),(0,x.jsx)(t,{colorScheme:`danger`,size:`xl`,variant:`ghost`,startIcon:(0,x.jsx)(n,{}),children:`Button`})]}),k=()=>(0,x.jsxs)(c,{gap:`md`,children:[(0,x.jsx)(t,{colorScheme:`primary`,loading:!0,children:`Button`}),(0,x.jsx)(t,{colorScheme:`secondary`,variant:`subtle`,loading:!0,loadingIcon:`dots`,children:`Button`}),(0,x.jsx)(t,{colorScheme:`info`,variant:`surface`,loading:!0,loadingIcon:(0,x.jsx)(r,{}),children:`Button`}),(0,x.jsx)(t,{colorScheme:`warning`,variant:`outline`,loading:!0,loadingMessage:`Loading...`,children:`Button`}),(0,x.jsx)(t,{colorScheme:`danger`,variant:`ghost`,loading:!0,loadingIcon:`grid`,loadingMessage:`Loading...`,loadingPlacement:`end`,children:`Button`})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Button>Button</Button>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} variant={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Button key={key} colorScheme={row} size={column}>
            Button
          </Button>;
    }}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
        {(variant, index) => <Button key={index} variant={variant} disabled>
            {toTitleCase(variant)}
          </Button>}
      </For>
    </Wrap>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`Variant`,`Size`,`FullRounded`,`Disabled`,`Icon`,`LoadingIcon`]}))();export{C as Basic,D as Disabled,E as FullRounded,O as Icon,k as LoadingIcon,T as Size,w as Variant,A as __namedExportsOrder,S as default};