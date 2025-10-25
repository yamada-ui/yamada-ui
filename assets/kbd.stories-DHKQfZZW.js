import{j as r,T as i,C as m}from"./iframe-5QspZtQ-.js";import{P as l}from"./props-table-DAC1ISVp.js";import{K as e}from"./kbd-CKKig--h.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./for-DDltKb5N.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";const j={component:e,title:"Components / Kbd"},s=()=>r.jsxs(i,{children:[r.jsx(e,{children:"Shift"})," + ",r.jsx(e,{children:"Tab"})]}),t=()=>r.jsx(l,{columns:["solid","subtle","surface","outline"],rows:m,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,variant:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,variant:o,children:"Tab"})]},c)}),a=()=>r.jsx(l,{columns:["sm","md","lg"],rows:m,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,size:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,size:o,children:"Tab"})]},c)});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
