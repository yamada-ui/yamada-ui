import{j as n,F as l,a as s}from"./jsx-runtime-5BUNAZ9W.js";import{S as p}from"./factory-d4qha7R6.js";import{T as e}from"./text-puUo1HSE.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-d9n8R3cE.js";import"./theme-provider-bBWP4weD.js";const A={title:"Hooks / useAsync"},r=()=>{const{loading:m,error:o,value:c}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:m?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",c]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["basic"];export{w as __namedExportsOrder,r as basic,A as default};
