import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dm as n,Dv as r,Fa as i,Pa as a,Rf as o,Uv as s,at as c,by as l,gt as u,i_ as d,ig as f,it as p,md as m,pt as h,ud as g,wv as _,zf as v}from"./iframe-B6Ybn7OE.js";import{n as y,t as b}from"./storybook-HIb1BQuw.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{x=e(l(),1),b(),h(),_(),g(),a(),n(),o(),p(),S=r(),C={component:u,title:`Components / Toggle`},w=()=>(0,S.jsx)(u,{"aria-label":`Toggle bold`,icon:(0,S.jsx)(d,{})}),T=()=>(0,S.jsxs)(u,{px:`4`,children:[(0,S.jsx)(f,{}),(0,S.jsx)(v,{as:`span`,fontSize:`md`,children:`Italic`})]}),E=()=>(0,S.jsx)(y,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:s,children:(e,t,n)=>(0,S.jsx)(u,{colorScheme:t,variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(d,{})},n)}),D=()=>(0,S.jsx)(y,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:s,children:(e,t,n)=>(0,S.jsx)(u,{colorScheme:t,size:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(d,{})},n)}),O=()=>(0,S.jsx)(c,{gap:`md`,children:(0,S.jsx)(i,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(u,{variant:e,"aria-label":`Toggle bold`,fullRounded:!0,icon:(0,S.jsx)(d,{})},t)})}),k=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{gap:`md`,children:(0,S.jsx)(i,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(u,{variant:e,"aria-label":`Toggle bold`,disabled:!0,icon:(0,S.jsx)(d,{})},t)})}),(0,S.jsx)(m,{disabled:!0,label:`Bold`,children:(0,S.jsx)(u,{icon:(0,S.jsx)(d,{}),justifySelf:`flex-start`})})]}),A=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{gap:`md`,children:(0,S.jsx)(i,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(u,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(d,{}),readOnly:!0},t)})}),(0,S.jsx)(m,{label:`Bold`,readOnly:!0,children:(0,S.jsx)(u,{icon:(0,S.jsx)(d,{}),justifySelf:`flex-start`})})]}),j=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{gap:`md`,children:(0,S.jsx)(i,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(u,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(d,{}),invalid:!0},t)})}),(0,S.jsx)(m,{invalid:!0,label:`Bold`,children:(0,S.jsx)(u,{icon:(0,S.jsx)(d,{}),justifySelf:`flex-start`})})]}),M=()=>(0,S.jsx)(u,{"aria-label":`Toggle bold`,errorBorderColor:`orange.500`,icon:(0,S.jsx)(d,{}),invalid:!0}),N=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(u,{"aria-label":`Toggle bold`,checked:e,icon:(0,S.jsx)(d,{}),onChange:t})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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