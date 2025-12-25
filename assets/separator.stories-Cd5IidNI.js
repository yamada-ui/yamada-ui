import{j as r}from"./iframe-3lFlqlPN.js";import{P as g}from"./props-table-CuU8BGsb.js";import{S as a}from"./separator-BVAjgt82.js";import{F as y}from"./flex-Bmyv4kyF.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CdpynwT9.js";import"./grid-item-L-ZB7s7_.js";import"./for-kQoYqs5h.js";import"./heading-DSztmhpV.js";const E={component:a,title:"Components / Separator"},e=()=>r.jsx(a,{}),t=()=>r.jsx(g,{variant:"stack",rows:["solid","dashed","dotted"],children:(w,n,i)=>r.jsx(a,{variant:n},i)}),o=()=>r.jsx(g,{variant:"stack",rows:["xs","sm","md","lg"],children:(w,n,i)=>r.jsx(a,{size:n},i)}),s=()=>r.jsxs(y,{gap:"md",children:[r.jsx(a,{variant:"solid",h:"32",orientation:"vertical"}),r.jsx(a,{variant:"dashed",h:"32",orientation:"vertical"}),r.jsx(a,{variant:"dotted",h:"32",orientation:"vertical"})]});var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Separator />;
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["solid", "dashed", "dotted"]}>
      {(_, row, key) => <Separator key={key} variant={row} />}
    </PropsTable>;
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var v,x,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => <Separator key={key} size={row} />}
    </PropsTable>;
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var h,j,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <Separator variant="solid" h="32" orientation="vertical" />

      <Separator variant="dashed" h="32" orientation="vertical" />

      <Separator variant="dotted" h="32" orientation="vertical" />
    </Flex>;
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const C=["Basic","Variant","Size","Vertical"];export{e as Basic,o as Size,t as Variant,s as Vertical,C as __namedExportsOrder,E as default};
