import{j as r,C as v}from"./iframe-Brv718Ke.js";import{P as g}from"./props-table-BhZ2Cxzm.js";import{P as e}from"./progress-Cfu1elw1.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DLYm4Rks.js";import"./grid-item-DWuT-LWZ.js";import"./for-y9tZyjCV.js";import"./flex-DhUoci5A.js";import"./heading-DLtRtgvj.js";import"./use-progress-DRAyP4XW.js";import"./number-CcP_arM8.js";const T={component:e,title:"Components / Progress"},o=()=>r.jsx(e,{value:50}),t=()=>r.jsx(g,{columns:["outline","subtle"],rows:v,children:(d,s,a)=>r.jsx(e,{colorScheme:s,variant:d,value:50},a)}),n=()=>r.jsx(g,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(d,s,a)=>r.jsx(e,{size:s,value:50},a)}),u=()=>r.jsx(g,{variant:"stack",rows:["rounded","square","circle"],children:(d,s,a)=>r.jsx(e,{shape:s,value:50},a)}),c=()=>r.jsx(e,{value:null}),m=()=>r.jsx(e,{striped:!0,value:50}),i=()=>r.jsx(e,{animated:!0,striped:!0,value:50}),p=()=>r.jsx(e,{animated:!0,duration:2,striped:!0,value:50}),l=()=>r.jsx(e,{rangeColor:"red.500",trackColor:"blue.500",value:50});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Progress value={50} />;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["outline", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Progress key={key} colorScheme={row} variant={column} value={50} />;
    }}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Progress key={key} size={row} value={50} />;
    }}
    </PropsTable>;
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "square", "circle"]}>
      {(_, row, key) => <Progress key={key} shape={row} value={50} />}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Progress value={null} />;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Progress striped value={50} />;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Progress animated striped value={50} />;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Progress animated duration={2} striped value={50} />;
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Progress rangeColor="red.500" trackColor="blue.500" value={50} />;
}`,...l.parameters?.docs?.source}}};const E=["Basic","Variant","Size","Shape","Indeterminate","Striped","Animated","Duration","CustomColor"];export{i as Animated,o as Basic,l as CustomColor,p as Duration,c as Indeterminate,u as Shape,n as Size,m as Striped,t as Variant,E as __namedExportsOrder,T as default};
