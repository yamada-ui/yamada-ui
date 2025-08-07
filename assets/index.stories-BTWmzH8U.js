import{j as r}from"./iframe-CDTQ5ROD.js";import{u as t}from"./index-bE_dS5pe.js";import{B as e}from"./button-DJ5m59RZ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DcBYRjO0.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";const g={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
