import{j as e,C as d,r as l}from"./iframe-Bn8cMbTR.js";import{P as i}from"./props-table-BxRkBYtX.js";import{B as s,a as p}from"./badge-BnfVv0gw.js";import{W as u}from"./wrap-DwiabKAS.js";import{F as g}from"./for-DbXOaV0m.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";const v={component:s,title:"Components / Badge"},n=()=>e.jsx(s,{children:"Badge"}),t=()=>e.jsx(i,{columns:["solid","subtle","surface","outline"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,variant:r,children:"Badge"},a)}),c=()=>e.jsx(i,{columns:["sm","md","lg"],rows:d,children:(r,o,a)=>e.jsx(s,{colorScheme:o,size:r,children:"Badge"},a)}),m=()=>{const r=l.useMemo(()=>({variant:"solid"}),[]);return e.jsx(p,{value:r,children:e.jsx(u,{gap:"md",children:e.jsx(g,{each:d,children:(o,a)=>e.jsx(s,{colorScheme:o,children:"Badge"},a)})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
