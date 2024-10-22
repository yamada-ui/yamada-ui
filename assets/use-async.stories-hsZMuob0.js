import{j as e}from"./extends-CwFRzn3r.js";import{Z as u}from"./factory-CsTAdKnO.js";import{T as o}from"./text-7SoedmCZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CYei-jGG.js";import"./theme-provider-V0oWEqA6.js";const h={title:"Hooks / useAsync"},r=()=>{const{error:s,loading:i,value:m}=u(async()=>new Promise((c,d)=>{setTimeout(()=>{Math.random()>.5?c("✌️"):d(new Error("A pseudo random error occurred"))},3e3)}),[]);return i?e.jsx(o,{children:"Loading..."}):s?e.jsxs(o,{children:["Error: ",s.message]}):e.jsxs(o,{children:["Value: ",m]})};var n,t,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
