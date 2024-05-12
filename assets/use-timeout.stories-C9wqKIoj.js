import{j as u}from"./jsx-runtime-Nms4Y4qS.js";import{u as n}from"./index-CN4cNXcQ.js";import{r as i}from"./index-BwDkhjyp.js";import{B as p}from"./box-BrhSB_Fu.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./_commonjsHelpers-BosuxZz1.js";const b={title:"Hooks / useTimeout"},t=()=>{const[o,a]=i.useState(1);return n(()=>a(m=>m+1),3e3),u.jsxs(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const j=["basic"];export{j as __namedExportsOrder,t as basic,b as default};
