import{a as m}from"./jsx-runtime-5BUNAZ9W.js";import{u as p}from"./index-4nXa8W-z.js";import{r as c}from"./index-4g5l5LRQ.js";import{B as u}from"./box-fDIv0iq2.js";import"./factory-mZ_iv4c5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./_commonjsHelpers-4gQjN7DL.js";const B={title:"Hooks / useInterval"},t=()=>{const[a,o]=c.useState(1);return p(()=>o(n=>n+1),3e3),m(u,{children:["Current state: ",a]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useInterval(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
