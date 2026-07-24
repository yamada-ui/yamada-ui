import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CWhjq_ZM.js";import{t as r}from"./text-PitPK9Eo.js";import{$ as i,Q as a}from"./iframe-DTxndMIb.js";var o,s,c,l;e((()=>{r(),a(),o=t(),s={title:`Hooks / useAsync`},c=()=>{let{error:e,loading:t,value:r}=i(async()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()>.5?e(`✌️`):t(Error(`A pseudo random error occurred`))},3e3)}),[]);return t?(0,o.jsx)(n,{children:`Loading...`}):e?(0,o.jsxs)(n,{children:[`Error: `,e.message]}):(0,o.jsxs)(n,{children:[`Value: `,r]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    error,
    loading,
    value
  } = useAsync(async () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve("✌️");else reject(new Error("A pseudo random error occurred"));
    }, 3000);
  }), []);
  return loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>;
}`,...c.parameters?.docs?.source}}},l=[`Basic`]}))();export{c as Basic,l as __namedExportsOrder,s as default};