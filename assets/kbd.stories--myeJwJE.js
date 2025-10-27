import{j as r,T as i,C as m}from"./iframe-Cq3rcaMI.js";import{P as l}from"./props-table-C-lxxN5V.js";import{K as e}from"./kbd-CZoPClOd.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./for-CHPKWv_w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";const j={component:e,title:"Components / Kbd"},s=()=>r.jsxs(i,{children:[r.jsx(e,{children:"Shift"})," + ",r.jsx(e,{children:"Tab"})]}),t=()=>r.jsx(l,{columns:["solid","subtle","surface","outline"],rows:m,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,variant:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,variant:o,children:"Tab"})]},c)}),a=()=>r.jsx(l,{columns:["sm","md","lg"],rows:m,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,size:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,size:o,children:"Tab"})]},c)});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Text>
      <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd>
    </Text>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} variant={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} variant={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} size={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} size={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...a.parameters?.docs?.source}}};const f=["Basic","Variant","Size"];export{s as Basic,a as Size,t as Variant,f as __namedExportsOrder,j as default};
