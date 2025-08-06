import{aX as B,r as f,j as o,aU as j,aV as A,aW as b}from"./iframe-BVYXOt_x.js";import{u as L}from"./index-z9nBkikI.js";import{B as g}from"./button-DhYNg7P2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Ba1DlwHc.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";const m=(n,a,{loading:s=!1,loadingOptions:C,processing:l=!0}={})=>{const u=B(),{finish:e,loading:k,start:r}=L(),d=!!s,y=f.useCallback(async(...w)=>{try{return l&&r(),d&&u[s].start(C),await n(...w)}finally{l&&e(),d&&u[s].finish()}},[...a,l,d,u,s,C,n,r,e]),x=f.useMemo(()=>({finish:e,start:r}),[e,r]);return[k,y,x]},H={title:"Hooks / useAsyncCallback"},p=async n=>new Promise(a=>{setTimeout(a,n)}),t=()=>{const[n,a]=m(async()=>{await p(3e3)},[]);return o.jsx(g,{loading:n,onClick:a,children:"Click me"})},i=()=>{const[n,a]=m(async()=>{await p(3e3)},[],{loading:"page"});return o.jsx(g,{loading:n,onClick:a,children:"Click me"})},c=()=>{const n=j(b,{loading:{defaultComponent:"page"}});return o.jsx(A,{config:n,children:o.jsx(U,{})})},U=()=>{const[n,a]=m(async()=>{await p(3e3)},[]);return o.jsx(g,{loading:n,onClick:a,children:"Click me"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const config = merge(defaultConfig, {
    loading: {
      defaultComponent: "page"
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...c.parameters?.docs?.source}}};const M=["Basic","Loading","Config"];export{t as Basic,c as Config,i as Loading,M as __namedExportsOrder,H as default};
