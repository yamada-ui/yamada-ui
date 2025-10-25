import{j as r,T as o}from"./iframe-5QspZtQ-.js";import{u as i}from"./index-BrUEOMzF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_1AD8bs.js";const x={title:"Hooks / useAsync"},e=()=>{const{error:s,loading:n,value:t}=i(async()=>new Promise((a,c)=>{setTimeout(()=>{Math.random()>.5?a("✌️"):c(new Error("A pseudo random error occurred"))},3e3)}),[]);return n?r.jsx(o,{children:"Loading..."}):s?r.jsxs(o,{children:["Error: ",s.message]}):r.jsxs(o,{children:["Value: ",t]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const p=["Basic"];export{e as Basic,p as __namedExportsOrder,x as default};
