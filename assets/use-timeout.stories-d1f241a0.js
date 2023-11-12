import{j as u}from"./jsx-runtime-03b4ddbf.js";import{r as n}from"./index-76fb7be0.js";import{u as c}from"./index-2f1549ef.js";import{B as i}from"./box-e201343f.js";import"./_commonjsHelpers-de833af9.js";import"./factory-5c69ebb0.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return c(()=>a(m=>m+1),3e3),u(i,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-timeout.stories-d1f241a0.js.map
