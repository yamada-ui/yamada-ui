import{n as e}from"./chunk-zsgVPwQN.js";import{O as t,im as n,iu as r,k as i,ru as a}from"./iframe-Cky8WQYe.js";var o,s,c,l;e((()=>{a(),t(),o=n(),s={title:`Hooks / useAsync`},c=()=>{let{error:e,loading:t,value:n}=i(async()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()>.5?e(`✌️`):t(Error(`A pseudo random error occurred`))},3e3)}),[]);return t?(0,o.jsx)(r,{children:`Loading...`}):e?(0,o.jsxs)(r,{children:[`Error: `,e.message]}):(0,o.jsxs)(r,{children:[`Value: `,n]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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