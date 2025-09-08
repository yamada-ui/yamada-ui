import{r as a,bx as o,j as n}from"./iframe-6Bjnmk15.js";import{B as u}from"./box-CFI6uNm2.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Hooks / useTimeout"},t=()=>{const[e,s]=a.useState(1);return o(()=>s(r=>r+1),3e3),n.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const x=["Basic"];export{t as Basic,x as __namedExportsOrder,p as default};
