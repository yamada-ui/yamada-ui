import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{B as n,Cp as r,Du as i,Eu as a,K as o,Pd as s,W as c,Xp as l,Xr as u,Zr as d,dp as f,el as p,il as m,nf as h,pp as g,rd as _,z as v}from"./iframe-BNI00s7o.js";import{n as y,t as b}from"./storybook-BZRvw9tA.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{b(),x=t(l(),1),c(),f(),p(),u(),_(),a(),v(),S=g(),C={component:o,title:`Components / Toggle`},w=()=>(0,S.jsx)(o,{"aria-label":`Toggle bold`,icon:(0,S.jsx)(h,{})}),T=()=>(0,S.jsxs)(o,{px:`4`,children:[(0,S.jsx)(s,{}),(0,S.jsx)(i,{as:`span`,fontSize:`md`,children:`Italic`})]}),E=()=>(0,S.jsx)(y,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:r,children:(e,t,n)=>(0,S.jsx)(o,{colorScheme:t,variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(h,{})},n)}),D=()=>(0,S.jsx)(y,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:r,children:(e,t,n)=>(0,S.jsx)(o,{colorScheme:t,size:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(h,{})},n)}),O=()=>(0,S.jsx)(n,{gap:`md`,children:(0,S.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(o,{variant:e,"aria-label":`Toggle bold`,fullRounded:!0,icon:(0,S.jsx)(h,{})},t)})}),k=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{gap:`md`,children:(0,S.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(o,{variant:e,"aria-label":`Toggle bold`,disabled:!0,icon:(0,S.jsx)(h,{})},t)})}),(0,S.jsx)(m,{disabled:!0,label:`Bold`,children:(0,S.jsx)(o,{icon:(0,S.jsx)(h,{}),justifySelf:`flex-start`})})]}),A=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{gap:`md`,children:(0,S.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(o,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(h,{}),readOnly:!0},t)})}),(0,S.jsx)(m,{label:`Bold`,readOnly:!0,children:(0,S.jsx)(o,{icon:(0,S.jsx)(h,{}),justifySelf:`flex-start`})})]}),j=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{gap:`md`,children:(0,S.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(o,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(h,{}),invalid:!0},t)})}),(0,S.jsx)(m,{invalid:!0,label:`Bold`,children:(0,S.jsx)(o,{icon:(0,S.jsx)(h,{}),justifySelf:`flex-start`})})]}),M=()=>(0,S.jsx)(o,{"aria-label":`Toggle bold`,errorBorderColor:`orange.500`,icon:(0,S.jsx)(h,{}),invalid:!0}),N=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(o,{"aria-label":`Toggle bold`,checked:e,icon:(0,S.jsx)(h,{}),onChange:t})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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