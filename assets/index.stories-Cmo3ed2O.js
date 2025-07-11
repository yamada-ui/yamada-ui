import{r as a,j as o}from"./iframe-Dqv37jui.js";import{u as n}from"./index-wJPk5nMY.js";import{B as u}from"./box-eZad9qV_.js";const i={title:"Hooks / useInterval"},t=()=>{const[e,r]=a.useState(1);return n(()=>r(s=>s+1),3e3),o.jsxs(u,{children:["Current state: ",e]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...t.parameters?.docs?.source}}};const x=["Basic"];export{t as Basic,x as __namedExportsOrder,i as default};
