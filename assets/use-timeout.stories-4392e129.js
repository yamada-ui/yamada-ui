import{j as u}from"./jsx-runtime-4d953e71.js";import{r as n}from"./index-de62f0e0.js";import{u as c}from"./index-37462a16.js";import{B as i}from"./box-d7b7850d.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return c(()=>a(m=>m+1),3e3),u(i,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-timeout.stories-4392e129.js.map
