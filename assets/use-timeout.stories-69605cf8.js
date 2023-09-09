import{a as u}from"./jsx-runtime-29545a09.js";import{r as n}from"./index-76fb7be0.js";import{u as i}from"./index-dd1ad792.js";import{B as p}from"./box-c16cb60e.js";import"./_commonjsHelpers-de833af9.js";import"./factory-5f559ecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";const b={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return i(()=>a(m=>m+1),3e3),u(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const T=["basic"];export{T as __namedExportsOrder,t as basic,b as default};
//# sourceMappingURL=use-timeout.stories-69605cf8.js.map
