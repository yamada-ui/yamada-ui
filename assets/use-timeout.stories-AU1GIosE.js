import{j as u}from"./jsx-runtime-yA-pgArV.js";import{u as n}from"./index-i9SU6yQS.js";import{r as i}from"./index-IybTgENJ.js";import{B as p}from"./box-SLf6P9Vd.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";const b={title:"Hooks / useTimeout"},t=()=>{const[o,a]=i.useState(1);return n(()=>a(m=>m+1),3e3),u(p,{children:["Current state: ",o]})};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [state, setState] = useState<number>(1);
  useTimeout(() => setState(prev => prev + 1), 3000);
  return <Box>Current state: {state}</Box>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const T=["basic"];export{T as __namedExportsOrder,t as basic,b as default};
