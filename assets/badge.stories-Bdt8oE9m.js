import{j as e,C as d,r as l}from"./iframe-5QspZtQ-.js";import{P as i}from"./props-table-DAC1ISVp.js";import{B as s,a as p}from"./badge-DSgRtDqP.js";import{W as u}from"./wrap-DtWh82PK.js";import{F as g}from"./for-DDltKb5N.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";const v={component:s,title:"Components / Badge"},n=()=>e.jsx(s,{children:"Badge"}),t=()=>e.jsx(i,{columns:["solid","subtle","surface","outline"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,variant:r,children:"Badge"},a)}),c=()=>e.jsx(i,{columns:["sm","md","lg"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,size:r,children:"Badge"},a)}),m=()=>{const r=l.useMemo(()=>({variant:"solid"}),[]);return e.jsx(p,{value:r,children:e.jsx(u,{gap:"md",children:e.jsx(g,{each:d,children:(o,a)=>e.jsx(s,{colorScheme:o,children:"Badge"},a)})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Badge>Badge</Badge>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} variant={column}>
            Badge
          </Badge>;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} size={column}>
            Badge
          </Badge>;
    }}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const w=["Basic","Variant","Size","Context"];export{n as Basic,m as Context,c as Size,t as Variant,w as __namedExportsOrder,v as default};
