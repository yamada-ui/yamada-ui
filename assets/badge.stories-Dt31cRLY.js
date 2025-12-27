import{j as e,C as i,P as u,r as w}from"./iframe-DaVT7dxo.js";import{P as R}from"./props-table-c8iwS7A1.js";import{B as a,a as y}from"./badge-D7oK1u5s.js";import{W as T}from"./wrap-Cu2KzMD_.js";import{F as k}from"./for-CMUOzp-w.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";const D={component:a,title:"Components / Badge"},n=()=>e.jsx(a,{children:"Badge"}),t=()=>e.jsx(R,{columns:["solid","subtle","surface","outline"],rows:i,children:(r,o,s)=>e.jsx(a,{colorScheme:o,variant:r,children:u(r)},s)}),c=()=>e.jsx(R,{columns:["sm","md","lg"],rows:i,children:(r,o,s)=>e.jsx(a,{colorScheme:o,size:r,children:u(r)},s)}),d=()=>e.jsx(T,{gap:"md",children:e.jsx(k,{each:["solid","subtle","surface","outline"],children:(r,o)=>e.jsx(a,{variant:r,fullRounded:!0,children:u(r)},o)})}),l=()=>{const r=w.useMemo(()=>({variant:"solid"}),[]);return e.jsx(y,{value:r,children:e.jsx(T,{gap:"md",children:e.jsx(k,{each:i,children:(o,s)=>e.jsx(a,{colorScheme:o,children:"Badge"},s)})})})};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Badge>Badge</Badge>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var S,C,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,v,E;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Badge key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Badge>}
      </For>
    </Wrap>;
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var P,b,O;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const value = useMemo<BadgeProps>(() => ({
    variant: "solid"
  }), []);
  return <BadgePropsContext value={value}>
      <Wrap gap="md">
        <For each={COLOR_SCHEMES}>
          {(colorScheme, index) => <Badge key={index} colorScheme={colorScheme}>
              Badge
            </Badge>}
        </For>
      </Wrap>
    </BadgePropsContext>;
}`,...(O=(b=l.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const G=["Basic","Variant","Size","FullRounded","Context"];export{n as Basic,l as Context,d as FullRounded,c as Size,t as Variant,G as __namedExportsOrder,D as default};
