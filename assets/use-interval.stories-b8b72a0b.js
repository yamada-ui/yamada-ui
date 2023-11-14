import{j as m}from"./jsx-runtime-b08f8875.js";import{r as p}from"./index-8ee6c85d.js";import{u as c}from"./index-5e97e8a5.js";import{B as u}from"./box-262adc2c.js";import"./_commonjsHelpers-de833af9.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=p.useState(1);return c(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-interval.stories-b8b72a0b.js.map
