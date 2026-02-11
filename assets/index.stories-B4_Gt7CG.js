import{r as u,bY as m,j as c}from"./iframe-FV6Pf4zG.js";import{B as i}from"./box-lmNTjs2t.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Hooks / useTimeout"},t=()=>{const[a,o]=u.useState(1);return m(()=>o(n=>n+1),3e3),c.jsxs(i,{children:["Current state: ",a]})};var e,s,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,B as default};
