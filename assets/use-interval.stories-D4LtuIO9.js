import{j as m}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-C43CUOFb.js";import{r as u}from"./index-ClcD9ViR.js";import{B as c}from"./box-C6uIdwxO.js";import"./factory-Cp1Ju9mN.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=u.useState(1);return p(()=>o(n=>n+1),3e3),m.jsxs(c,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
