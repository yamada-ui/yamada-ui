import{a as m}from"./jsx-runtime-276775ef.js";import{r as c}from"./index-1cdf6ce0.js";import{u as p}from"./index-7aaba533.js";import{B as u}from"./box-34b29ebb.js";import"./factory-75cc801c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
//# sourceMappingURL=use-interval.stories-defc8477.js.map
