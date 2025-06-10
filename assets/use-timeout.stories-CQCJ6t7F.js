import{j as u}from"./jsx-runtime-DztICxWZ.js";import{r as n}from"./index-Bv9Y92EF.js";import{u as i}from"./index-CIBO3FO4.js";import{B as p}from"./box-Ds8SIjx6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-7Z88KRtK.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=n.useState(1);return i(()=>a(m=>m+1),3e3),u.jsxs(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
