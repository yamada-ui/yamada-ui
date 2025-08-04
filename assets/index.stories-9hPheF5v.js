import{r as a,bD as o,j as n}from"./iframe-CDvKCJeY.js";import{B as u}from"./box-xTzNsHnl.js";const i={title:"Hooks / useTimeout"},t=()=>{const[e,s]=a.useState(1);return o(()=>s(r=>r+1),3e3),n.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const p=["Basic"];export{t as Basic,p as __namedExportsOrder,i as default};
