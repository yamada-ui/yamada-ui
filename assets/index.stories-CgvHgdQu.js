import{r as a,j as o}from"./iframe-BHZTlJ0V.js";import{u as n}from"./index-BNO2AxRQ.js";import{B as u}from"./box-8pATHs1H.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"Hooks / useInterval"},t=()=>{const[e,r]=a.useState(1);return n(()=>r(s=>s+1),3e3),o.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const d=["Basic"];export{t as Basic,d as __namedExportsOrder,x as default};
