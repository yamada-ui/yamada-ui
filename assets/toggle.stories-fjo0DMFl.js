import{j as e,T as S,C as T,r as B}from"./iframe-BbB59fLB.js";import{P as f}from"./props-table-CLQ6uJWO.js";import{d as o,I as v}from"./toggle-37xmqloF.js";import{W as x}from"./wrap-Cub2p6cp.js";import{F as b}from"./for-JwY7aMwm.js";import{B as n}from"./bold-icon-B3scm8Zg.js";import{F as j}from"./use-field-props-vL0R9j3R.js";import"./grid-W1UnxTpU.js";import"./grid-item-Dq6QrI7D.js";import"./flex-mIT1fSUh.js";import"./heading-DTYqldnT.js";import"./createLucideIcon-BfIMf7K-.js";import"./icon-button-B48cT_t-.js";import"./button-C7yiHaiH.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";import"./index-vFGel0G-.js";import"./use-input-border-DDo_kBDF.js";const q={component:o,title:"Components / Toggle"},l=()=>e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(n,{})}),s=()=>e.jsxs(o,{px:"4",children:[e.jsx(v,{}),e.jsx(S,{as:"span",fontSize:"md",children:"Italic"})]}),t=()=>e.jsx(f,{columns:["ghost","subtle","surface","outline","solid"],rows:T,children:(r,a,h)=>e.jsx(o,{colorScheme:a,variant:r,"aria-label":"Toggle bold",icon:e.jsx(n,{})},h)}),i=()=>e.jsx(f,{columns:["xs","sm","md","lg","xl"],rows:T,children:(r,a,h)=>e.jsx(o,{colorScheme:a,size:r,"aria-label":"Toggle bold",icon:e.jsx(n,{})},h)}),c=()=>e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",fullRounded:!0,icon:e.jsx(n,{})},a)})}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",disabled:!0,icon:e.jsx(n,{})},a)})}),e.jsx(j,{disabled:!0,label:"Bold",children:e.jsx(o,{alignSelf:"flex-start",icon:e.jsx(n,{})})})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(n,{}),readOnly:!0},a)})}),e.jsx(j,{label:"Bold",readOnly:!0,children:e.jsx(o,{alignSelf:"flex-start",icon:e.jsx(n,{})})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(n,{}),invalid:!0},a)})}),e.jsx(j,{invalid:!0,label:"Bold",children:e.jsx(o,{alignSelf:"flex-start",icon:e.jsx(n,{})})})]}),m=()=>e.jsx(o,{"aria-label":"Toggle bold",errorBorderColor:"orange.500",icon:e.jsx(n,{}),invalid:!0}),p=()=>{const[r,a]=B.useState(!1);return e.jsx(o,{"aria-label":"Toggle bold",checked:r,icon:e.jsx(n,{}),onChange:a})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      <Text as="span" fontSize="md">
        Italic
      </Text>
    </Toggle>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} variant={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} size={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
        {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" fullRounded icon={<BoldIcon />} />}
      </For>
    </Wrap>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" disabled icon={<BoldIcon />} />}
        </For>
      </Wrap>

      <Field.Root disabled label="Bold">
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" icon={<BoldIcon />} readOnly />}
        </For>
      </Wrap>

      <Field.Root label="Bold" readOnly>
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>;
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" icon={<BoldIcon />} invalid />}
        </For>
      </Wrap>

      <Field.Root invalid label="Bold">
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" errorBorderColor="orange.500" icon={<BoldIcon />} invalid />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" checked={checked} icon={<BoldIcon />} onChange={setChecked} />;
}`,...p.parameters?.docs?.source}}};const A=["Basic","WithText","Variant","Size","Rounded","Disabled","Readonly","Invalid","BorderColor","CustomControl"];export{l as Basic,m as BorderColor,p as CustomControl,d as Disabled,g as Invalid,u as Readonly,c as Rounded,i as Size,t as Variant,s as WithText,A as __namedExportsOrder,q as default};
