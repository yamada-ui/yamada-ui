import{i as e}from"./preload-helper-usAeo7Bx.js";import{$ as t,Dv as n,Rf as r,et as i,zf as a}from"./iframe-B6Ybn7OE.js";var o,s,c,l;e((()=>{r(),t(),o=n(),s={title:`Hooks / useAsync`},c=()=>{let{error:e,loading:t,value:n}=i(async()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()>.5?e(`✌️`):t(Error(`A pseudo random error occurred`))},3e3)}),[]);return t?(0,o.jsx)(a,{children:`Loading...`}):e?(0,o.jsxs)(a,{children:[`Error: `,e.message]}):(0,o.jsxs)(a,{children:[`Value: `,n]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    error,
    loading,
    value
  } = useAsync(async () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("✌️");
      } else {
        reject(new Error("A pseudo random error occurred"));
      }
    }, 3000);
  }), []);
  return loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>;
}`,...c.parameters?.docs?.source}}},l=[`Basic`]}))();export{c as Basic,l as __namedExportsOrder,s as default};