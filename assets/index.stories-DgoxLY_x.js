import{aq as x,u as B,r as k,j as g,B as m,ar as C}from"./iframe-C5w0vvr4.js";import{u as j}from"./index-Cqh2pSpo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYu7qMwV.js";const p=(a,n,{loading:s=!1,loadingOptions:u,processing:r=!0}={})=>{const i=x(),{finish:o,loading:f,start:t}=j(),l=!!s,d=B(a,n),y=k.useCallback(async(...w)=>{try{return r&&t(),l&&i[s].start(u),await d(...w)}finally{r&&o(),l&&i[s].finish()}},[d,r,l,i,s,u,t,o]),b=k.useMemo(()=>({finish:o,start:t}),[o,t]);return[f,y,b]},S={title:"Hooks / useAsyncCallback"},c=()=>{const[a,n]=p(async()=>{await C(3e3)},[]);return g.jsx(m,{loading:a,onClick:n,children:"Click me"})},e=()=>{const[a,n]=p(async()=>{await C(3e3)},[],{loading:"page"});return g.jsx(m,{loading:a,onClick:n,children:"Click me"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const _=["Basic","Loading"];export{c as Basic,e as Loading,_ as __namedExportsOrder,S as default};
