import{j as e,Q as t}from"./iframe-5QspZtQ-.js";import{u as r}from"./index-9ZSB3L32.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXNuYBHZ.js";const p={title:"Hooks / useProcessing"},s=()=>{const o=r(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return e.jsx(t,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
