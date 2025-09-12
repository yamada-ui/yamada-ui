import{aZ as x,r as m,j as d}from"./iframe-Bn8cMbTR.js";import{u as B}from"./index-2QNvc35k.js";import{B as p}from"./button-BuVkzRhm.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BCG1hiCF.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";const g=(n,a,{loading:o=!1,loadingOptions:u,processing:c=!0}={})=>{const e=x(),{finish:s,loading:C,start:t}=B(),l=!!o,y=m.useCallback(async(...w)=>{try{return c&&t(),l&&e[o].start(u),await n(...w)}finally{c&&s(),l&&e[o].finish()}},[...a,c,l,e,o,u,n,t,s]),f=m.useMemo(()=>({finish:s,start:t}),[s,t]);return[C,y,f]},M={title:"Hooks / useAsyncCallback"},k=async n=>new Promise(a=>{setTimeout(a,n)}),i=()=>{const[n,a]=g(async()=>{await k(3e3)},[]);return d.jsx(p,{loading:n,onClick:a,children:"Click me"})},r=()=>{const[n,a]=g(async()=>{await k(3e3)},[],{loading:"page"});return d.jsx(p,{loading:n,onClick:a,children:"Click me"})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...r.parameters?.docs?.source}}};const R=["Basic","Loading"];export{i as Basic,r as Loading,R as __namedExportsOrder,M as default};
