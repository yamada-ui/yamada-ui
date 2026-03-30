import{j as e,r as x,C as i,t as u}from"./iframe-C5w0vvr4.js";import{B as a,a as h}from"./badge-CvY-0Enr.js";import{W as m}from"./wrap-OCZzZuSr.js";import{F as p}from"./for-ENMl83Kw.js";import{P as g}from"./props-table-BNvAUKoQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-CMJCml74.js";import"./grid-Drm6c-Tg.js";import"./grid-item-M74-NeoE.js";import"./heading-BI5b63Dr.js";const R={component:a,title:"Components / Badge"},n=()=>e.jsx(a,{children:"Badge"}),t=()=>e.jsx(g,{columns:["solid","subtle","surface","outline"],rows:i,children:(r,o,s)=>e.jsx(a,{colorScheme:o,variant:r,children:u(r)},s)}),c=()=>e.jsx(g,{columns:["sm","md","lg"],rows:i,children:(r,o,s)=>e.jsx(a,{colorScheme:o,size:r,children:u(r)},s)}),d=()=>e.jsx(m,{gap:"md",children:e.jsx(p,{each:["solid","subtle","surface","outline"],children:(r,o)=>e.jsx(a,{variant:r,fullRounded:!0,children:u(r)},o)})}),l=()=>{const r=x.useMemo(()=>({variant:"solid"}),[]);return e.jsx(h,{value:r,children:e.jsx(m,{gap:"md",children:e.jsx(p,{each:i,children:(o,s)=>e.jsx(a,{colorScheme:o,children:"Badge"},s)})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Badge>Badge</Badge>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Badge key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Badge>}
      </For>
    </Wrap>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const T=["Basic","Variant","Size","FullRounded","Context"];export{n as Basic,l as Context,d as FullRounded,c as Size,t as Variant,T as __namedExportsOrder,R as default};
