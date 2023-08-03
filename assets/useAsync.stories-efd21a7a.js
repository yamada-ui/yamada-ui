import{j as n,F as l,a as s}from"./jsx-runtime-37f7df21.js";import{u as p}from"./factory-81c6291d.js";import{T as e}from"./text-6737f911.js";import"./index-f1f2c4b1.js";import"./extends-3d932e16.js";import"./forward-ref-92ccee95.js";import"./use-component-style-f03a93f0.js";import"./theme-2b4f2a73.js";const A={title:"Hooks / useAsync"},r=()=>{const{loading:c,error:o,value:m}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:c?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",m]})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=useAsync.stories-efd21a7a.js.map
