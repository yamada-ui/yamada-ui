import{n as e}from"./chunk-zsgVPwQN.js";import{Ad as t,B as n,Cp as r,Nl as i,Qd as a,Xr as o,Zr as s,ad as c,dp as l,hu as u,jl as d,of as f,pp as p,pu as m,rd as h,xd as g,yp as _,z as v}from"./iframe-BMT_Rpw5.js";import{n as y,t as b}from"./storybook-B9kHjFpk.js";var x,S,C,w,T,E,D,O,k,A;e((()=>{b(),l(),o(),h(),m(),v(),i(),x=p(),S={component:d,title:`Components / Button`},C=()=>(0,x.jsx)(d,{children:`Button`}),w=()=>(0,x.jsx)(y,{columns:[`solid`,`subtle`,`surface`,`outline`,`ghost`],rows:r,children:(e,t,n)=>(0,x.jsx)(d,{colorScheme:t,variant:e,children:`Button`},n)}),T=()=>(0,x.jsx)(y,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:r,children:(e,t,n)=>(0,x.jsx)(d,{colorScheme:t,size:e,children:`Button`},n)}),E=()=>(0,x.jsx)(n,{gap:`md`,children:(0,x.jsx)(s,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,x.jsx)(d,{variant:e,fullRounded:!0,children:_(e)},t)})}),D=()=>(0,x.jsx)(n,{gap:`md`,children:(0,x.jsx)(s,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,x.jsx)(d,{variant:e,disabled:!0,children:_(e)},t)})}),O=()=>(0,x.jsxs)(n,{gap:`md`,children:[(0,x.jsx)(d,{colorScheme:`primary`,size:`xs`,variant:`solid`,startIcon:(0,x.jsx)(g,{}),children:`Button`}),(0,x.jsx)(d,{colorScheme:`secondary`,size:`sm`,variant:`subtle`,endIcon:(0,x.jsx)(f,{}),children:`Button`}),(0,x.jsx)(d,{colorScheme:`info`,size:`md`,variant:`surface`,startIcon:(0,x.jsx)(t,{}),children:`Button`}),(0,x.jsx)(d,{colorScheme:`warning`,size:`lg`,variant:`outline`,startIcon:(0,x.jsx)(a,{}),children:`Button`}),(0,x.jsx)(d,{colorScheme:`danger`,size:`xl`,variant:`ghost`,startIcon:(0,x.jsx)(c,{}),children:`Button`})]}),k=()=>(0,x.jsxs)(n,{gap:`md`,children:[(0,x.jsx)(d,{colorScheme:`primary`,loading:!0,children:`Button`}),(0,x.jsx)(d,{colorScheme:`secondary`,variant:`subtle`,loading:!0,loadingIcon:`dots`,children:`Button`}),(0,x.jsx)(d,{colorScheme:`info`,variant:`surface`,loading:!0,loadingIcon:(0,x.jsx)(u,{}),children:`Button`}),(0,x.jsx)(d,{colorScheme:`warning`,variant:`outline`,loading:!0,loadingMessage:`Loading...`,children:`Button`}),(0,x.jsx)(d,{colorScheme:`danger`,variant:`ghost`,loading:!0,loadingIcon:`grid`,loadingMessage:`Loading...`,loadingPlacement:`end`,children:`Button`})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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