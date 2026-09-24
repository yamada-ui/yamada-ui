import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Nn as n,Tn as r}from"./props-Bz1FL_va.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./bold-icon-DC2DPHFB.js";import{i as s,l as c,t as l,u}from"./toggle-CJq3WVrf.js";import{n as d,t as f}from"./text-b2W5euYI.js";import{c as p,s as m}from"./use-field-props-DklfXwrD.js";import{n as h,t as g}from"./for-BIl9Q3L3.js";import{n as _,t as v}from"./wrap-Dg19SbjB.js";import{n as y,t as b}from"./props-table-CLkISL0o.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{x=t(),y(),s(),n(),p(),h(),a(),u(),d(),_(),S=i(),C={component:l,title:`Components / Toggle`},w=()=>(0,S.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,S.jsx)(o,{})}),T=()=>(0,S.jsxs)(l,{px:`4`,children:[(0,S.jsx)(c,{}),(0,S.jsx)(f,{as:`span`,fontSize:`md`,children:`Italic`})]}),E=()=>(0,S.jsx)(b,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:r,children:(e,t,n)=>(0,S.jsx)(l,{colorScheme:t,variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(o,{})},n)}),D=()=>(0,S.jsx)(b,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:r,children:(e,t,n)=>(0,S.jsx)(l,{colorScheme:t,size:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(o,{})},n)}),O=()=>(0,S.jsx)(v,{gap:`md`,children:(0,S.jsx)(g,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(l,{variant:e,"aria-label":`Toggle bold`,fullRounded:!0,icon:(0,S.jsx)(o,{})},t)})}),k=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v,{gap:`md`,children:(0,S.jsx)(g,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(l,{variant:e,"aria-label":`Toggle bold`,disabled:!0,icon:(0,S.jsx)(o,{})},t)})}),(0,S.jsx)(m,{disabled:!0,label:`Bold`,children:(0,S.jsx)(l,{icon:(0,S.jsx)(o,{}),justifySelf:`flex-start`})})]}),A=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v,{gap:`md`,children:(0,S.jsx)(g,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(l,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(o,{}),readOnly:!0},t)})}),(0,S.jsx)(m,{label:`Bold`,readOnly:!0,children:(0,S.jsx)(l,{icon:(0,S.jsx)(o,{}),justifySelf:`flex-start`})})]}),j=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v,{gap:`md`,children:(0,S.jsx)(g,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,S.jsx)(l,{variant:e,"aria-label":`Toggle bold`,icon:(0,S.jsx)(o,{}),invalid:!0},t)})}),(0,S.jsx)(m,{invalid:!0,label:`Bold`,children:(0,S.jsx)(l,{icon:(0,S.jsx)(o,{}),justifySelf:`flex-start`})})]}),M=()=>(0,S.jsx)(l,{"aria-label":`Toggle bold`,errorBorderColor:`orange.500`,icon:(0,S.jsx)(o,{}),invalid:!0}),N=()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(l,{"aria-label":`Toggle bold`,checked:e,icon:(0,S.jsx)(o,{}),onChange:t})},P=[`Basic`,`WithText`,`Variant`,`Size`,`Rounded`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomControl`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}}})))()}F();export{w as Basic,M as BorderColor,N as CustomControl,k as Disabled,j as Invalid,A as ReadOnly,O as Rounded,D as Size,E as Variant,T as WithText,P as __namedExportsOrder,C as default};