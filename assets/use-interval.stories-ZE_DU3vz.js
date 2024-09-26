import{j as m}from"./extends-CwFRzn3r.js";import{r as p}from"./index-BwDkhjyp.js";import{u}from"./index-C4gD_6pN.js";import{B as c}from"./box-Bx0dCD5X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-BgMvz7NM.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=p.useState(1);return u(()=>o(n=>n+1),3e3),m.jsxs(c,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
