import{a as m}from"./jsx-runtime-TtYKBvr-.js";import{u as p}from"./index-Y2g0saq0.js";import{r as c}from"./index-IybTgENJ.js";import{B as u}from"./box-m5A1GaX7.js";import"./factory-0U35BYk-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
