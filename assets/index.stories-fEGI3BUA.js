import{aq as x,r as d,j as g,B as m,ar as k}from"./iframe-D2MBOeiZ.js";import{u as B}from"./index-CLuYXj5T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bckcv6t6.js";const p=(n,a,{loading:s=!1,loadingOptions:u,processing:i=!0}={})=>{const e=x(),{finish:o,loading:C,start:t}=B(),l=!!s,y=d.useCallback(async(...w)=>{try{return i&&t(),l&&e[s].start(u),await n(...w)}finally{i&&o(),l&&e[s].finish()}},[...a,i,l,e,s,u,n,t,o]),f=d.useMemo(()=>({finish:o,start:t}),[o,t]);return[C,y,f]},E={title:"Hooks / useAsyncCallback"},c=()=>{const[n,a]=p(async()=>{await k(3e3)},[]);return g.jsx(m,{loading:n,onClick:a,children:"Click me"})},r=()=>{const[n,a]=p(async()=>{await k(3e3)},[],{loading:"page"});return g.jsx(m,{loading:n,onClick:a,children:"Click me"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...r.parameters?.docs?.source}}};const S=["Basic","Loading"];export{c as Basic,r as Loading,S as __namedExportsOrder,E as default};
