import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-DgylnHKd.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{Al as i,Fi as a,Pi as o,kl as s}from"./iframe-JqStoggy.js";var c,l,u,d,f;t((()=>{c=e(n(),1),o(),s(),l=r(),u={title:`Hooks / useInterval`},d=()=>{let[e,t]=(0,c.useState)(1);return a(()=>t(e=>e+1),3e3),(0,l.jsxs)(i,{children:[`Current state: `,e]})},f=[`Basic`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...d.parameters?.docs?.source}}}}))();export{d as Basic,f as __namedExportsOrder,u as default};