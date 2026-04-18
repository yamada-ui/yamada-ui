import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fs as n,Ps as r,cu as i,lu as a,qm as o,sm as s}from"./iframe-CHoZGzMw.js";var c,l,u,d,f;e((()=>{c=t(o(),1),r(),i(),l=s(),u={title:`Hooks / useTimeout`},d=()=>{let[e,t]=(0,c.useState)(1);return a(()=>t(e=>e+1),3e3),(0,l.jsxs)(n,{children:[`Current state: `,e]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`]}))();export{d as Basic,f as __namedExportsOrder,u as default};