import{j as r}from"./iframe-Bn8cMbTR.js";import{u as t}from"./index-2QNvc35k.js";import{B as e}from"./button-BuVkzRhm.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BCG1hiCF.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";const d={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
