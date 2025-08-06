import{j as r}from"./iframe-BVYXOt_x.js";import{u as t}from"./index-z9nBkikI.js";import{B as e}from"./button-DhYNg7P2.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Ba1DlwHc.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";const g={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const d=["Basic"];export{s as Basic,d as __namedExportsOrder,g as default};
