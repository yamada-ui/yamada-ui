import{j as r}from"./iframe-DkaXVr_9.js";import{u as t}from"./index-Dvp24D84.js";import{B as e}from"./button-RXS8KHkm.js";import"./preload-helper-D9Z9MdNV.js";import"./index-UuYROTOa.js";import"./use-ripple-Conhq2CH.js";import"./rings-Dawgqh-Z.js";const g={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
