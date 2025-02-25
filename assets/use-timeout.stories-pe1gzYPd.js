import{j as u}from"./jsx-runtime-BpbtHYHY.js";import{r as n}from"./index-BwPxMuoB.js";import{u as i}from"./index-Dog50vdO.js";import{B as p}from"./box-CKfluZfz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-DbNU74ts.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return i(()=>a(m=>m+1),3e3),u.jsxs(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
