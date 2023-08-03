import{a as m}from"./jsx-runtime-37f7df21.js";import{r as c}from"./index-f1f2c4b1.js";import{u as p}from"./index-a703b9a4.js";import{B as u}from"./box-81c93a1f.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
//# sourceMappingURL=use-interval.stories-2f87ef78.js.map
