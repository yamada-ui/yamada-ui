import{bc as E,r as d,j as f,Q as w}from"./iframe-C1QqsVA9.js";import{u as S}from"./index-B-eYvLFE.js";import"./preload-helper-C1FmrZbK.js";import"./index-KAAQppRK.js";const x=(n,a,{loading:s=!1,loadingOptions:u,processing:i=!0}={})=>{const r=E(),{finish:o,loading:b,start:t}=S(),l=!!s,j=d.useCallback(async(...L)=>{try{return i&&t(),l&&r[s].start(u),await n(...L)}finally{i&&o(),l&&r[s].finish()}},[...a,i,l,r,s,u,n,t,o]),A=d.useMemo(()=>({finish:o,start:t}),[o,t]);return[b,j,A]},R={title:"Hooks / useAsyncCallback"},B=async n=>new Promise(a=>{setTimeout(a,n)}),c=()=>{const[n,a]=x(async()=>{await B(3e3)},[]);return f.jsx(w,{loading:n,onClick:a,children:"Click me"})},e=()=>{const[n,a]=x(async()=>{await B(3e3)},[],{loading:"page"});return f.jsx(w,{loading:n,onClick:a,children:"Click me"})};var m,g,k;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...(k=(g=c.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var p,C,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...(y=(C=e.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const T=["Basic","Loading"];export{c as Basic,e as Loading,T as __namedExportsOrder,R as default};
