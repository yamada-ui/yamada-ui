import{j as r,C as i,E as z}from"./iframe-C1QqsVA9.js";import{P as d}from"./props-table-CLqbYtSs.js";import{T as s}from"./tag-DPkOrl1g.js";import{W as R}from"./wrap-3wPTj9O4.js";import{F as W}from"./for-Be_orN7T.js";import{P as p}from"./plus-icon-DqZup0li.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DHpvRiol.js";import"./grid-item-Cxe7QMy1.js";import"./flex-Bs-NHhmm.js";import"./heading-V-V_Ybpq.js";import"./index-CeHKNIfO.js";import"./index-B7LYMO55.js";const Q={component:s,title:"Components / Tag"},a=()=>r.jsx(s,{children:"Tag"}),c=()=>r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,children:"Tag"},n)}),t=()=>r.jsx(d,{columns:["sm","md","lg"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,children:"Tag"},n)}),l=()=>r.jsxs(r.Fragment,{children:[r.jsx(d,{columns:["solid","subtle","surface","outline"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,variant:e,startIcon:r.jsx(p,{}),children:"Tag"},n)}),r.jsx(d,{columns:["sm","md","lg"],rows:i,children:(e,o,n)=>r.jsx(s,{colorScheme:o,size:e,endIcon:r.jsx(p,{}),children:"Tag"},n)})]}),m=()=>r.jsx(R,{alignItems:"flex-start",gap:"md",children:r.jsx(W,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,rounded:"full",onClose:z,children:e},o)})}),u=()=>r.jsx(R,{alignItems:"flex-start",gap:"md",children:r.jsx(W,{each:["primary","secondary","success","warning","error"],children:(e,o)=>r.jsx(s,{colorScheme:e,disabled:!0,rounded:"full",onClose:z,children:e},o)})});var g,T,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Tag>Tag</Tag>;
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var S,x,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} variant={column}>
            Tag
          </Tag>;
    }}
    </PropsTable>;
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,w,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Tag key={key} colorScheme={row} size={column}>
            Tag
          </Tag>;
    }}
    </PropsTable>;
}`,...(f=(w=t.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var C,b,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,E,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var O,F,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"] as const}>
        {(colorScheme, index) => <Tag key={index} colorScheme={colorScheme} disabled rounded="full" onClose={noop}>
            {colorScheme}
          </Tag>}
      </For>
    </Wrap>;
}`,...(_=(F=u.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const U=["Basic","Variant","Size","Icon","CloseButton","Disabled"];export{a as Basic,m as CloseButton,u as Disabled,l as Icon,t as Size,c as Variant,U as __namedExportsOrder,Q as default};
