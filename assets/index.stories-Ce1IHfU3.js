import{j as e,R as t}from"./iframe-AnrJ8TER.js";import{u as r}from"./index-CPACCj-j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNV-B3MM.js";const p={title:"Hooks / useProcessing"},s=()=>{const o=r(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return e.jsx(t,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const u=["Basic"];export{s as Basic,u as __namedExportsOrder,p as default};
