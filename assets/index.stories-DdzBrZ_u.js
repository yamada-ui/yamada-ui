import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{Li as i,Ol as a,Ri as o,kl as s}from"./iframe-CgnmJX3j.js";var c,l,u,d,f;t((()=>{c=e(n(),1),i(),a(),l=r(),u={title:`Hooks / useInterval`},d=()=>{let[e,t]=(0,c.useState)(1);return o(()=>t(e=>e+1),3e3),(0,l.jsxs)(s,{children:[`Current state: `,e]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`]}))();export{d as Basic,f as __namedExportsOrder,u as default};