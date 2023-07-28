import{a as m}from"./jsx-runtime-276775ef.js";import{r as c}from"./index-1cdf6ce0.js";import{u as p}from"./index-ebfe36ab.js";import{B as u}from"./box-95ce222e.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";const v={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["basic"];export{B as __namedExportsOrder,t as basic,v as default};
//# sourceMappingURL=use-interval.stories-b522994b.js.map
