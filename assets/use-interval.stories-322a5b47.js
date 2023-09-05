import{a as m}from"./jsx-runtime-e6a661ac.js";import{r as p}from"./index-61bf1805.js";import{u as c}from"./index-5bfac52e.js";import{B as u}from"./box-2d44dc53.js";import"./_commonjsHelpers-de833af9.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=p.useState(1);return c(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-interval.stories-322a5b47.js.map
