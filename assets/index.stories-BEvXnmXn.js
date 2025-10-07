import{r as a,bT as o,j as n}from"./iframe-Dp_HdYH_.js";import{B as u}from"./box-B_V-pe2N.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Hooks / useTimeout"},t=()=>{const[e,s]=a.useState(1);return o(()=>s(r=>r+1),3e3),n.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const x=["Basic"];export{t as Basic,x as __namedExportsOrder,p as default};
