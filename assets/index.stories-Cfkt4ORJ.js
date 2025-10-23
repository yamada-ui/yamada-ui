import{b8 as x,r as d,j as m,S as g}from"./iframe-DJ0yX4dv.js";import{u as B}from"./index-DL2UO1g0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZpUeCLW.js";const k=(n,a,{loading:s=!1,loadingOptions:u,processing:i=!0}={})=>{const r=x(),{finish:o,loading:C,start:t}=B(),l=!!s,y=d.useCallback(async(...w)=>{try{return i&&t(),l&&r[s].start(u),await n(...w)}finally{i&&o(),l&&r[s].finish()}},[...a,i,l,r,s,u,n,t,o]),f=d.useMemo(()=>({finish:o,start:t}),[o,t]);return[C,y,f]},E={title:"Hooks / useAsyncCallback"},p=async n=>new Promise(a=>{setTimeout(a,n)}),c=()=>{const[n,a]=k(async()=>{await p(3e3)},[]);return m.jsx(g,{loading:n,onClick:a,children:"Click me"})},e=()=>{const[n,a]=k(async()=>{await p(3e3)},[],{loading:"page"});return m.jsx(g,{loading:n,onClick:a,children:"Click me"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...e.parameters?.docs?.source}}};const S=["Basic","Loading"];export{c as Basic,e as Loading,S as __namedExportsOrder,E as default};
