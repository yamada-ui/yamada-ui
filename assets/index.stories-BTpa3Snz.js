import{j as r}from"./iframe-XeUDGc9-.js";import{u as t}from"./index-ByeMFnyo.js";import{B as e}from"./button-BMwb3xqF.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C9ERsox4.js";import"./button.style-CgX_lvjC.js";import"./use-ripple-CRLgxef_.js";import"./rings-DhKaXPYE.js";const d={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const k=["Basic"];export{s as Basic,k as __namedExportsOrder,d as default};
