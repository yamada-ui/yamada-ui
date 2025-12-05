import{j as e,T as Y,C as U,r as Z}from"./iframe-BIJNUwA0.js";import{P as X}from"./props-table-lmXFHSBz.js";import{d as o,I as $}from"./toggle-CF3JbrZA.js";import{W as x}from"./wrap-MJNmnQxq.js";import{F as b}from"./for-Cpsr9B86.js";import{B as s}from"./bold-icon-CVUwOyU8.js";import{F as j}from"./use-field-props-DKzDJnFJ.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";import"./index-CH90kZaX.js";import"./use-input-border-DSgVNCGu.js";const pe={component:o,title:"Components / Toggle"},n=()=>e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(s,{})}),l=()=>e.jsxs(o,{px:"4",children:[e.jsx($,{}),e.jsx(Y,{as:"span",fontSize:"md",children:"Italic"})]}),t=()=>e.jsx(X,{columns:["ghost","subtle","surface","outline","solid"],rows:U,children:(r,a,h)=>e.jsx(o,{colorScheme:a,variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{})},h)}),c=()=>e.jsx(X,{columns:["xs","sm","md","lg","xl"],rows:U,children:(r,a,h)=>e.jsx(o,{colorScheme:a,size:r,"aria-label":"Toggle bold",icon:e.jsx(s,{})},h)}),i=()=>e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",fullRounded:!0,icon:e.jsx(s,{})},a)})}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",disabled:!0,icon:e.jsx(s,{})},a)})}),e.jsx(j,{disabled:!0,label:"Bold",children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{}),readOnly:!0},a)})}),e.jsx(j,{label:"Bold",readOnly:!0,children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{gap:"md",children:e.jsx(b,{each:["ghost","subtle","surface","outline","solid"],children:(r,a)=>e.jsx(o,{variant:r,"aria-label":"Toggle bold",icon:e.jsx(s,{}),invalid:!0},a)})}),e.jsx(j,{invalid:!0,label:"Bold",children:e.jsx(o,{icon:e.jsx(s,{}),justifySelf:"flex-start"})})]}),m=()=>e.jsx(o,{"aria-label":"Toggle bold",errorBorderColor:"orange.500",icon:e.jsx(s,{}),invalid:!0}),p=()=>{const[r,a]=Z.useState(!1);return e.jsx(o,{"aria-label":"Toggle bold",checked:r,icon:e.jsx(s,{}),onChange:a})};var T,f,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,v,y;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      <Text as="span" fontSize="md">
        Italic
      </Text>
    </Toggle>;
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var I,C,F;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} variant={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...(F=(C=t.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var k,R,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Toggle key={key} colorScheme={row} size={column} aria-label="Toggle bold" icon={<BoldIcon />} />;
    }}
    </PropsTable>;
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var W,E,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
        {(variant, index) => <Toggle key={index} variant={variant} aria-label="Toggle bold" fullRounded icon={<BoldIcon />} />}
      </For>
    </Wrap>;
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,P,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var H,L,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var D,V,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(q=(V=g.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var A,G,J;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" errorBorderColor="orange.500" icon={<BoldIcon />} invalid />;
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" checked={checked} icon={<BoldIcon />} onChange={setChecked} />;
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const xe=["Basic","WithText","Variant","Size","Rounded","Disabled","ReadOnly","Invalid","BorderColor","CustomControl"];export{n as Basic,m as BorderColor,p as CustomControl,d as Disabled,g as Invalid,u as ReadOnly,i as Rounded,c as Size,t as Variant,l as WithText,xe as __namedExportsOrder,pe as default};
