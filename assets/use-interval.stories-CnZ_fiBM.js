import{j as m}from"./jsx-runtime-DztICxWZ.js";import{r as p}from"./index-Bv9Y92EF.js";import{u}from"./index-2WAHly5K.js";import{B as c}from"./box-Ds8SIjx6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-7Z88KRtK.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=p.useState(1);return u(()=>o(n=>n+1),3e3),m.jsxs(c,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
