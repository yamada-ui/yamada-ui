import{j as r}from"./extends-CwFRzn3r.js";import{Y as u}from"./factory-BFmlPmGv.js";import{T as o}from"./text-Cd4dmvuW.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-EAJDzyrD.js";import"./theme-provider-BxuddooS.js";const E={title:"Hooks / useAsync"},e=()=>{const{loading:i,error:s,value:m}=u(async()=>new Promise((c,d)=>{setTimeout(()=>{Math.random()>.5?c("✌️"):d(new Error("A pseudo random error occurred"))},3e3)}),[]);return r.jsx(r.Fragment,{children:i?r.jsx(o,{children:"Loading..."}):s?r.jsxs(o,{children:["Error: ",s.message]}):r.jsxs(o,{children:["Value: ",m]})})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const v=["basic"];export{v as __namedExportsOrder,e as basic,E as default};
