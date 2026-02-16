import{j as r,D as B,P as g,C as d}from"./iframe-Bh9OJiMa.js";import{P as p}from"./props-table-Clbdh-et.js";import{T as s}from"./tag-BPI4Y3ax.js";import{W as h}from"./wrap-BLv8Ry5J.js";import{F as T}from"./for-Drx2NpVa.js";import{P as x}from"./plus-icon-hrMyghJY.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DEBT4jh_.js";import"./grid-item-DglFRIPa.js";import"./flex-Cq9fG4Y2.js";import"./heading-D9jKM5Is.js";import"./index-CT2eTHRG.js";import"./index-DupE20-r.js";const $={component:s,title:"Components / Tag"},a=()=>r.jsx(s,{children:"Tag"}),c=()=>r.jsx(p,{columns:["solid","subtle","surface","outline"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,children:g(e)},n)}),t=()=>r.jsx(p,{columns:["sm","md","lg"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,children:g(e)},n)}),l=()=>r.jsx(h,{gap:"md",children:r.jsx(T,{each:["solid","subtle","surface","outline"],children:(e,o)=>r.jsx(s,{variant:e,fullRounded:!0,children:g(e)},o)})}),u=()=>r.jsxs(r.Fragment,{children:[r.jsx(p,{columns:["solid","subtle","surface","outline"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,startIcon:r.jsx(x,{}),children:"Tag"},n)}),r.jsx(p,{columns:["sm","md","lg"],rows:d,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,endIcon:r.jsx(x,{}),children:"Tag"},n)})]}),m=()=>r.jsx(h,{alignItems:"flex-start",gap:"md",children:r.jsx(T,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,rounded:"full",onClose:B,children:e},o)})}),i=()=>r.jsx(h,{alignItems:"flex-start",gap:"md",children:r.jsx(T,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,disabled:!0,rounded:"full",onClose:B,children:e},o)})});var S,f,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,C,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var b,k,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Tag>;
    }}
    </PropsTable>;
}`,...(P=(k=t.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var I,E,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Tag key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Tag>}
      </For>
    </Wrap>;
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,R,W;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Tag key={key} colorScheme={row} variant={column} startIcon={<PlusIcon />}>
              Tag
            </Tag>;
      }}
      </PropsTable>

      <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Tag key={key} colorScheme={row} size={column} endIcon={<PlusIcon />}>
              Tag
            </Tag>;
      }}
      </PropsTable>
    </>;
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var v,_,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var H,L,M;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const rr=["Basic","Variant","Size","FullRounded","Icon","CloseButton","Disabled"];export{a as Basic,m as CloseButton,i as Disabled,l as FullRounded,u as Icon,t as Size,c as Variant,rr as __namedExportsOrder,$ as default};
