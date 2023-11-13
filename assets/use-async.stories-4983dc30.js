import{a as n,F as l,j as s}from"./jsx-runtime-03b4ddbf.js";import{c as p}from"./factory-94a21dd6.js";import{T as e}from"./text-c933cc10.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-9258d34a.js";import"./theme-provider-8a6e6dcc.js";const A={title:"Hooks / useAsync"},r=()=>{const{loading:i,error:o,value:m}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:i?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",m]})})};var a,t,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    loading,
    error,
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
  return <>
      {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>}
    </>;
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const E=["basic"];export{E as __namedExportsOrder,r as basic,A as default};
//# sourceMappingURL=use-async.stories-4983dc30.js.map
