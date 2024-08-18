import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-vu1fpqXi.js";import{r as u}from"./index-BwDkhjyp.js";import{B as c}from"./box-BIex-WMn.js";import"./factory-CgjGrZPJ.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=u.useState(1);return p(()=>o(n=>n+1),3e3),m.jsxs(c,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
