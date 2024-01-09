import{a as m}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-ngh5qXH8.js";import{r as p}from"./index-4g5l5LRQ.js";import{B as u}from"./box-UMGsOCaH.js";import"./factory-Ddmu4EkR.js";import"./_commonjsHelpers-4gQjN7DL.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=p.useState(1);return c(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
