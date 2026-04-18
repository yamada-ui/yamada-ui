import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$c as n,Cf as r,N as i,P as a,Pd as o,U as s,V as c,Xf as l,Yc as u,am as d,au as f,ou as p,qm as m,sm as h,vi as g,yi as _,ym as v}from"./iframe-CHoZGzMw.js";import{n as y,t as b}from"./storybook-D7iTf7Rb.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{b(),x=t(m(),1),c(),d(),u(),g(),o(),f(),i(),S=h(),C={component:s,title:`Components / Toggle`},w=()=>(0,S.jsx)(s,{"aria-label":`Toggle bold`,icon:(0,S.jsx)(l,{})}),T=()=>(0,S.jsxs)(s,{px:`4`,children:[(0,S.jsx)(r,{}),(0,S.jsx)(p,{as:`span`,fontSize:`md`,children:`Italic`})]}),E=()=>(0,S.jsx)(y,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:v,children:(e,t,n)=>(0,S.jsx)(s,{colorScheme:t,variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(l,{})},n)}),D=()=>(0,S.jsx)(y,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:v,children:(e,t,n)=>(0,S.jsx)(s,{colorScheme:t,size:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(l,{})},n)}),O=()=>(0,S.jsx)(a,{gap:`md`,children:(0,S.jsx)(_,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(s,{variant:e,"aria-label":`Toggle bold`,fullRounded:!0,icon:(0,S.jsx)(l,{})},t)})}),k=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{gap:`md`,children:(0,S.jsx)(_,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(s,{variant:e,"aria-label":`Toggle bold`,disabled:!0,icon:(0,S.jsx)(l,{})},t)})}),(0,S.jsx)(n,{disabled:!0,label:`Bold`,children:(0,S.jsx)(s,{icon:(0,S.jsx)(l,{}),justifySelf:`flex-start`})})]}),A=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{gap:`md`,children:(0,S.jsx)(_,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(s,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(l,{}),readOnly:!0},t)})}),(0,S.jsx)(n,{label:`Bold`,readOnly:!0,children:(0,S.jsx)(s,{icon:(0,S.jsx)(l,{}),justifySelf:`flex-start`})})]}),j=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{gap:`md`,children:(0,S.jsx)(_,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(s,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(l,{}),invalid:!0},t)})}),(0,S.jsx)(n,{invalid:!0,label:`Bold`,children:(0,S.jsx)(s,{icon:(0,S.jsx)(l,{}),justifySelf:`flex-start`})})]}),M=()=>(0,S.jsx)(s,{"aria-label":`Toggle bold`,errorBorderColor:`orange.500`,icon:(0,S.jsx)(l,{}),invalid:!0}),N=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(s,{"aria-label":`Toggle bold`,checked:e,icon:(0,S.jsx)(l,{}),onChange:t})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      <Text as="span" fontSize="md">
        Italic
      </Text>
    </Toggle>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} variant={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} size={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
        {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" fullRounded icon={<BoldIcon />} />}
      </For>
    </Wrap>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" disabled icon={<BoldIcon />} />}
        </For>
      </Wrap>

      <Field.Root disabled label="Bold">
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
      </Field.Root>
    </>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" icon={<BoldIcon />} readOnly />}
        </For>
      </Wrap>

      <Field.Root label="Bold" readOnly>
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
      </Field.Root>
    </>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" icon={<BoldIcon />} invalid />}
        </For>
      </Wrap>

      <Field.Root invalid label="Bold">
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
      </Field.Root>
    </>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" errorBorderColor="orange.500" icon={<BoldIcon />} invalid />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" checked={checked} icon={<BoldIcon />} onChange={setChecked} />;
}`,...N.parameters?.docs?.source}}},P=[`Basic`,`WithText`,`Variant`,`Size`,`Rounded`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomControl`]}))();export{w as Basic,M as BorderColor,N as CustomControl,k as Disabled,j as Invalid,A as ReadOnly,O as Rounded,D as Size,E as Variant,T as WithText,P as __namedExportsOrder,C as default};