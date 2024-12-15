import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a7 as u}from"./factory-Bqmz9C5P.js";import{T as o}from"./text-Cr1YzEG3.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-D7fUVUlo.js";import"./theme-provider-Dit74geM.js";const h={title:"Hooks / useAsync"},r=()=>{const{error:s,loading:i,value:m}=u(async()=>new Promise((c,d)=>{setTimeout(()=>{Math.random()>.5?c("✌️"):d(new Error("A pseudo random error occurred"))},3e3)}),[]);return i?e.jsx(o,{children:"Loading..."}):s?e.jsxs(o,{children:["Error: ",s.message]}):e.jsxs(o,{children:["Value: ",m]})};var n,t,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const v=["basic"];export{v as __namedExportsOrder,r as basic,h as default};
