import{j as u}from"./extends-CwFRzn3r.js";import{u as n}from"./index-CmSkOU_f.js";import{r as i}from"./index-BwDkhjyp.js";import{B as p}from"./box-bmkbTjQ3.js";import"./factory-BPGpAF5Z.js";import"./_commonjsHelpers-BosuxZz1.js";const B={title:"Hooks / useTimeout"},t=()=>{const[o,a]=i.useState(1);return n(()=>a(m=>m+1),3e3),u.jsxs(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const b=["basic"];export{b as __namedExportsOrder,t as basic,B as default};
