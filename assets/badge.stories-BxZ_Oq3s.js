import{j as e,C as d,r as O}from"./iframe-C1QqsVA9.js";import{P}from"./props-table-CLqbYtSs.js";import{B as s,a as f}from"./badge-DFsVFpaC.js";import{W as v}from"./wrap-3wPTj9O4.js";import{F as w}from"./for-Be_orN7T.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DHpvRiol.js";import"./grid-item-Cxe7QMy1.js";import"./flex-Bs-NHhmm.js";import"./heading-V-V_Ybpq.js";const L={component:s,title:"Components / Badge"},n=()=>e.jsx(s,{children:"Badge"}),t=()=>e.jsx(P,{columns:["solid","subtle","surface","outline"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,variant:r,children:"Badge"},a)}),c=()=>e.jsx(P,{columns:["sm","md","lg"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,size:r,children:"Badge"},a)}),m=()=>{const r=O.useMemo(()=>({variant:"solid"}),[]);return e.jsx(f,{value:r,children:e.jsx(v,{gap:"md",children:e.jsx(w,{each:d,children:(o,a)=>e.jsx(s,{colorScheme:o,children:"Badge"},a)})})})};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Badge>Badge</Badge>;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,B;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} variant={column}>
            Badge
          </Badge>;
    }}
    </PropsTable>;
}`,...(B=(g=t.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var x,S,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} size={column}>
            Badge
          </Badge>;
    }}
    </PropsTable>;
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,j,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const W=["Basic","Variant","Size","Context"];export{n as Basic,m as Context,c as Size,t as Variant,W as __namedExportsOrder,L as default};
