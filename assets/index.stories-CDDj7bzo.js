import{bU as x,r as d,j as g,R as k,bk as m}from"./iframe-Bs84aKEy.js";import{u as b}from"./index-BGxWbQ05.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8gSi2nv.js";const p=(n,a,{loading:s=!1,loadingOptions:u,processing:r=!0}={})=>{const e=x(),{finish:o,loading:C,start:t}=b(),l=!!s,y=d.useCallback(async(...w)=>{try{return r&&t(),l&&e[s].start(u),await n(...w)}finally{r&&o(),l&&e[s].finish()}},[...a,r,l,e,s,u,n,t,o]),f=d.useMemo(()=>({finish:o,start:t}),[o,t]);return[C,y,f]},E={title:"Hooks / useAsyncCallback"},c=()=>{const[n,a]=p(async()=>{await m(3e3)},[]);return g.jsx(k,{loading:n,onClick:a,children:"Click me"})},i=()=>{const[n,a]=p(async()=>{await m(3e3)},[],{loading:"page"});return g.jsx(k,{loading:n,onClick:a,children:"Click me"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...i.parameters?.docs?.source}}};const R=["Basic","Loading"];export{c as Basic,i as Loading,R as __namedExportsOrder,E as default};
