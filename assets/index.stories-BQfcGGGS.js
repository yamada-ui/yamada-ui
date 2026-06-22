import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fl as r,Il as i,Li as a,Ri as o,by as s}from"./iframe-B_JZPEyf.js";var c,l,u,d,f;t((()=>{c=e(s(),1),a(),r(),l=n(),u={title:`Hooks / useInterval`},d=()=>{let[e,t]=(0,c.useState)(1);return o(()=>t(e=>e+1),3e3),(0,l.jsxs)(i,{children:[`Current state: `,e]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`]}))();export{d as Basic,f as __namedExportsOrder,u as default};