import{a as u}from"./jsx-runtime-37f7df21.js";import{r as n}from"./index-f1f2c4b1.js";import{u as c}from"./index-e8888536.js";import{B as i}from"./box-81c93a1f.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return c(()=>a(m=>m+1),3e3),u(i,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-timeout.stories-5538b4f7.js.map
