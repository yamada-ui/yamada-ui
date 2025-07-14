import{j as r,T as s}from"./iframe-Cn-KGvUL.js";import{u as i}from"./index-BfyTdbfV.js";import"./index-xiF2BN31.js";const l={title:"Hooks / useAsync"},e=()=>{const{error:o,loading:n,value:a}=i(async()=>new Promise((t,c)=>{setTimeout(()=>{Math.random()>.5?t("✌️"):c(new Error("A pseudo random error occurred"))},3e3)}),[]);return n?r.jsx(s,{children:"Loading..."}):o?r.jsxs(s,{children:["Error: ",o.message]}):r.jsxs(s,{children:["Value: ",a]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const x=["Basic"];export{e as Basic,x as __namedExportsOrder,l as default};
