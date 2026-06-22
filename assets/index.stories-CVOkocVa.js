import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fl as r,Hf as i,Il as a,Vf as o,by as s}from"./iframe-B_RvmxW5.js";var c,l,u,d,f;t((()=>{c=e(s(),1),r(),o(),l=n(),u={title:`Hooks / useTimeout`},d=()=>{let[e,t]=(0,c.useState)(1);return i(()=>t(e=>e+1),3e3),(0,l.jsxs)(a,{children:[`Current state: `,e]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`]}))();export{d as Basic,f as __namedExportsOrder,u as default};