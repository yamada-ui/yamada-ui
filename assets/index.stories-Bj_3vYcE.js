import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,F as r,P as i,pp as a}from"./iframe-yoIXfJPu.js";var o,s,c,l;e((()=>{n(),i(),o=a(),s={title:`Hooks / useAsync`},c=()=>{let{error:e,loading:n,value:i}=r(async()=>new Promise((e,t)=>{setTimeout(()=>{Math.random()>.5?e(`✌️`):t(Error(`A pseudo random error occurred`))},3e3)}),[]);return n?(0,o.jsx)(t,{children:`Loading...`}):e?(0,o.jsxs)(t,{children:[`Error: `,e.message]}):(0,o.jsxs)(t,{children:[`Value: `,i]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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