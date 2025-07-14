import{j as r,T as i,C as m}from"./iframe-DqV1pF0Y.js";import{P as l}from"./props-table-D14vFRWA.js";import{K as e}from"./kbd-BLsjKKPG.js";import"./grid-DVIWBgtE.js";import"./grid-item-eH7jfJXq.js";import"./for-Jc9KR5-P.js";import"./flex-BBgO32zm.js";import"./heading-Bb3j_Ov5.js";const K={component:e,title:"Components / Kbd"},n=()=>r.jsxs(i,{children:[r.jsx(e,{children:"shift"})," + ",r.jsx(e,{children:"Tab"})]}),t=()=>r.jsx(l,{columns:["solid","subtle","surface","outline"],rows:m,children:(s,o,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:o,variant:s,children:"shift"})," ","+"," ",r.jsx(e,{colorScheme:o,variant:s,children:"Tab"})]},c)}),a=()=>r.jsx(l,{columns:["sm","md","lg"],rows:m,children:(s,o,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:o,size:s,children:"shift"})," ","+"," ",r.jsx(e,{colorScheme:o,size:s,children:"Tab"})]},c)});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Text>
      <Kbd>shift</Kbd> + <Kbd>Tab</Kbd>
    </Text>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} variant={column}>
              shift
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
              shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} size={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...a.parameters?.docs?.source}}};const j=["Basic","Variant","Size"];export{n as Basic,a as Size,t as Variant,j as __namedExportsOrder,K as default};
