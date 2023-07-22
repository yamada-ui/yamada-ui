import{j as n,F as l,a as s}from"./jsx-runtime-276775ef.js";import{u as p}from"./factory-75cc801c.js";import{T as e}from"./text-914562f0.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./use-component-style-9ee8741d.js";import"./theme-8f32df8a.js";const A={title:"Hooks / useAsync"},r=()=>{const{loading:c,error:o,value:m}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:c?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",m]})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    loading,
    error,
    value
  } = useAsync(async () => new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('✌️');
      } else {
        reject(new Error('A pseudo random error occurred'));
      }
    }, 3000);
  }), []);
  return <>
      {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error.message}</Text> : <Text>Value: {value}</Text>}
    </>;
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const E=["basic"];export{E as __namedExportsOrder,r as basic,A as default};
//# sourceMappingURL=useAsync.stories-a402f649.js.map
