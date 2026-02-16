import{r as u,j as c}from"./iframe-Bh9OJiMa.js";import{u as m}from"./index-C7sWJ4x3.js";import{B as p}from"./box-Bg2AiZ11.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=u.useState(1);return m(()=>o(n=>n+1),3e3),c.jsxs(p,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,B as default};
