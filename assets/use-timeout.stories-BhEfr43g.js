import{j as u}from"./jsx-runtime-CfatFE5O.js";import{u as n}from"./index-CA_fCdqy.js";import{r as i}from"./index-ClcD9ViR.js";import{B as p}from"./box-Co1KKng-.js";import"./factory-COau3w21.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=i.useState(1);return n(()=>a(m=>m+1),3e3),u.jsxs(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
