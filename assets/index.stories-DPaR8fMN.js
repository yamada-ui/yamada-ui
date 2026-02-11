import{j as r,T as o}from"./iframe-FV6Pf4zG.js";import{u}from"./index-B0uphEEN.js";import"./preload-helper-C1FmrZbK.js";import"./index-BkinRi1p.js";const g={title:"Hooks / useAsync"},e=()=>{const{error:s,loading:c,value:i}=u(async()=>new Promise((m,d)=>{setTimeout(()=>{Math.random()>.5?m("✌️"):d(new Error("A pseudo random error occurred"))},3e3)}),[]);return c?r.jsx(o,{children:"Loading..."}):s?r.jsxs(o,{children:["Error: ",s.message]}):r.jsxs(o,{children:["Value: ",i]})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Basic"];export{e as Basic,j as __namedExportsOrder,g as default};
