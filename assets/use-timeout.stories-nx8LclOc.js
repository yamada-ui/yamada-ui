import{a as u}from"./jsx-runtime-5BUNAZ9W.js";import{u as n}from"./index-ltPgTMPh.js";import{r as c}from"./index-4g5l5LRQ.js";import{B as i}from"./box-0KuW7_iA.js";import"./factory-cZuM5uc7.js";import"./_commonjsHelpers-4gQjN7DL.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=c.useState(1);return n(()=>a(m=>m+1),3e3),u(i,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
