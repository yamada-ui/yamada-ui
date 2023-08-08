import{j as n,F as l,a as s}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./factory-3c20bca9.js";import{T as e}from"./text-db0e2e1e.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./forward-ref-c496b87d.js";import"./use-component-style-b3c7bc86.js";import"./theme-00f66a43.js";const E={title:"Hooks / useAsync"},r=()=>{const{loading:m,error:o,value:c}=p(async()=>new Promise((d,u)=>{setTimeout(()=>{Math.random()>.5?d("✌️"):u(new Error("A pseudo random error occurred"))},3e3)}),[]);return n(l,{children:m?n(e,{children:"Loading..."}):o?s(e,{children:["Error: ",o.message]}):s(e,{children:["Value: ",c]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const w=["basic"];export{w as __namedExportsOrder,r as basic,E as default};
//# sourceMappingURL=useAsync.stories-ff0ecd59.js.map
