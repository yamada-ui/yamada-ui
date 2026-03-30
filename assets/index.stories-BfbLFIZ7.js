import{r as a,j as o}from"./iframe-D2MBOeiZ.js";import{u as n}from"./index-D41smy-X.js";import{B as u}from"./box-C_1IkXcX.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Hooks / useInterval"},t=()=>{const[e,r]=a.useState(1);return n(()=>r(s=>s+1),3e3),o.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const d=["Basic"];export{t as Basic,d as __namedExportsOrder,x as default};
