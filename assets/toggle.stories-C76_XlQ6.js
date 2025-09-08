import{j as e,T as S,C as T,r as B}from"./iframe-6Bjnmk15.js";import{P as f}from"./props-table-ols_EFU2.js";import{d as o,I as v}from"./toggle-DSu6F3t9.js";import{W as x}from"./wrap-fOOK-PMa.js";import{F as b}from"./for-DmT075i_.js";import{B as s}from"./bold-icon-CnScViso.js";import{F as j}from"./use-field-props-CJllY30F.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BOPRDfru.js";import"./grid-item-b6_EoPjA.js";import"./flex-DoVac8e8.js";import"./heading-OelD6mpu.js";import"./createLucideIcon-dBwzvMsk.js";import"./icon-button-CbRY8Yre.js";import"./button-CsD90Sgr.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";import"./index-BYjVelZx.js";import"./use-input-border-D6r5drvY.js";const G={component:o,title:"Components / Toggle"},n=()=>e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(s,{})}),l=()=>e.jsxs(o,{px:"4",children:[e.jsx(v,{}),e.jsx(S,{as:"span",fontSize:"md",children:"Italic"})]}),t=()=>e.jsx(f,{columns:["ghost","subtle","surface","outline","solid"],rows:T,children:(r,a,h)=>e.jsx(o,{colorScheme:a,variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{})},h)}),i=()=>e.jsx(f,{columns:["xs","sm","md","lg","xl"],rows:T,children:(r,a,h)=>e.jsx(o,{colorScheme:a,size:r,"aria-label":"Toggle bold",icon:e.jsx(s,{})},h)}),c=()=>e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",fullRounded:!0,icon:e.jsx(s,{})},a)})}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",disabled:!0,icon:e.jsx(s,{})},a)})}),e.jsx(j,{disabled:!0,label:"Bold",children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{}),readOnly:!0},a)})}),e.jsx(j,{label:"Bold",readOnly:!0,children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{}),invalid:!0},a)})}),e.jsx(j,{invalid:!0,label:"Bold",children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),m=()=>e.jsx(o,{"aria-label":"Toggle bold",errorBorderColor:"orange.500",icon:e.jsx(s,{}),invalid:!0}),p=()=>{const[r,a]=B.useState(!1);return e.jsx(o,{"aria-label":"Toggle bold",checked:r,icon:e.jsx(s,{}),onChange:a})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      <Text as="span" fontSize="md">
        Italic
      </Text>
    </Toggle>;
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
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
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
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
        <Toggle icon={<BoldIcon />} justifySelf="flex-start" />
      </Field.Root>
    </>;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" errorBorderColor="orange.500" icon={<BoldIcon />} invalid />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" checked={checked} icon={<BoldIcon />} onChange={setChecked} />;
}`,...p.parameters?.docs?.source}}};const J=["Basic","WithText","Variant","Size","Rounded","Disabled","ReadOnly","Invalid","BorderColor","CustomControl"];export{n as Basic,m as BorderColor,p as CustomControl,d as Disabled,g as Invalid,u as ReadOnly,c as Rounded,i as Size,t as Variant,l as WithText,J as __namedExportsOrder,G as default};
