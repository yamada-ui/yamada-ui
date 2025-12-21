import{j as i,Q as c}from"./iframe-LqombrNM.js";import{u as a}from"./index-BnpekGJC.js";import"./preload-helper-C1FmrZbK.js";import"./index-CevRMiHp.js";const g={title:"Hooks / useProcessing"},s=()=>{const o=a(),r=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return i.jsx(c,{loading:o.loading,onClick:r,children:"Click me"})};var n,e,t;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const processing = useProcessing();
  const onClick = () => {
    processing.start();
    setTimeout(() => {
      processing.finish();
    }, 3000);
  };
  return <Button loading={processing.loading} onClick={onClick}>
      Click me
    </Button>;
}`,...(t=(e=s.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const d=["Basic"];export{s as Basic,d as __namedExportsOrder,g as default};
