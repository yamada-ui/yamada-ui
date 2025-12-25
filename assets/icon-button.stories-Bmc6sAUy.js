import{Z as o,j as a,C as M}from"./iframe-3lFlqlPN.js";import{P as k}from"./props-table-CuU8BGsb.js";import{W as w}from"./wrap-FNCiLogC.js";import{B as C}from"./bold-icon-DIyXP4Tq.js";import{S as E,M as L}from"./sun-icon-Cw15w7Wt.js";import{P as n}from"./plus-icon-cC5fDiXE.js";import{M as O}from"./minus-icon-D2I7A0wZ.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CdpynwT9.js";import"./grid-item-L-ZB7s7_.js";import"./for-kQoYqs5h.js";import"./flex-Bmyv4kyF.js";import"./heading-DSztmhpV.js";const J={component:o,title:"Components / IconButton"},r=()=>a.jsx(o,{"aria-label":"Plus",icon:a.jsx(n,{})}),e=()=>a.jsx(k,{columns:["solid","subtle","surface","outline","ghost"],rows:M,children:(i,u,c)=>a.jsx(o,{colorScheme:u,variant:i,"aria-label":"Plus",icon:a.jsx(n,{})},c)}),s=()=>a.jsx(k,{columns:["xs","sm","md","lg","xl"],rows:M,children:(i,u,c)=>a.jsx(o,{colorScheme:u,size:i,"aria-label":"Plus",icon:a.jsx(n,{})},c)}),l=()=>a.jsxs(w,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",fullRounded:!0,icon:a.jsx(n,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",fullRounded:!0,icon:a.jsx(O,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",fullRounded:!0,icon:a.jsx(C,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",fullRounded:!0,icon:a.jsx(E,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",fullRounded:!0,icon:a.jsx(L,{})})]}),t=()=>a.jsxs(w,{gap:"md",children:[a.jsx(o,{variant:"solid","aria-label":"Plus",disabled:!0,icon:a.jsx(n,{})}),a.jsx(o,{variant:"subtle","aria-label":"Minus",disabled:!0,icon:a.jsx(O,{})}),a.jsx(o,{variant:"surface","aria-label":"Bold",disabled:!0,icon:a.jsx(C,{})}),a.jsx(o,{variant:"outline","aria-label":"Light",disabled:!0,icon:a.jsx(E,{})}),a.jsx(o,{variant:"ghost","aria-label":"Dark",disabled:!0,icon:a.jsx(L,{})})]});var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <IconButton aria-label="Plus" icon={<PlusIcon />} />;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,x,I;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <IconButton key={key} colorScheme={row} variant={column} aria-label="Plus" icon={<PlusIcon />} />;
    }}
    </PropsTable>;
}`,...(I=(x=e.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,B,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <IconButton key={key} colorScheme={row} size={column} aria-label="Plus" icon={<PlusIcon />} />;
    }}
    </PropsTable>;
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var P,v,g;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <IconButton variant="solid" aria-label="Plus" fullRounded icon={<PlusIcon />} />

      <IconButton variant="subtle" aria-label="Minus" fullRounded icon={<MinusIcon />} />

      <IconButton variant="surface" aria-label="Bold" fullRounded icon={<BoldIcon />} />

      <IconButton variant="outline" aria-label="Light" fullRounded icon={<SunIcon />} />

      <IconButton variant="ghost" aria-label="Dark" fullRounded icon={<MoonIcon />} />
    </Wrap>;
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var S,h,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <IconButton variant="solid" aria-label="Plus" disabled icon={<PlusIcon />} />

      <IconButton variant="subtle" aria-label="Minus" disabled icon={<MinusIcon />} />

      <IconButton variant="surface" aria-label="Bold" disabled icon={<BoldIcon />} />

      <IconButton variant="outline" aria-label="Light" disabled icon={<SunIcon />} />

      <IconButton variant="ghost" aria-label="Dark" disabled icon={<MoonIcon />} />
    </Wrap>;
}`,...(R=(h=t.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const K=["Basic","Variant","Size","FullRounded","Disabled"];export{r as Basic,t as Disabled,l as FullRounded,s as Size,e as Variant,K as __namedExportsOrder,J as default};
