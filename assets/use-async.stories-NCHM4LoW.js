import{j as n,F as l,a as s}from"./jsx-runtime-TtYKBvr-.js";import{P as p}from"./factory-BpP3TutA.js";import{T as e}from"./text-HhFMRBG-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-cxLt7Ns7.js";import"./theme-provider-RZopMVJP.js";const E={title:"Hooks / useAsync"},r=()=>{const{loading:m,error:o,value:c}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:m?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",c]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["basic"];export{w as __namedExportsOrder,r as basic,E as default};
