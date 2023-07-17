import{a as n,F as l,j as s}from"./jsx-runtime-4d953e71.js";import{E as p}from"./factory-07cc9cf0.js";import{T as e}from"./text-afdead5d.js";import"./index-de62f0e0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./forward-ref-396247d7.js";import"./use-component-style-a395c77f.js";import"./theme-326cd56d.js";const y={title:"Hooks / useAsync"},r=()=>{const{loading:c,error:o,value:m}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:c?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",m]})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const A=["basic"];export{A as __namedExportsOrder,r as basic,y as default};
//# sourceMappingURL=useAsync.stories-b4efd80a.js.map
