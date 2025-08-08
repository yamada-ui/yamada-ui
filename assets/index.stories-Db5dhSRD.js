import{j as r}from"./iframe-Cz9Hkuf2.js";import{u as t}from"./index-B9S6sLeL.js";import{B as e}from"./button-D91gE1vK.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C3R1Mrn3.js";import"./use-ripple-BqwrQuB9.js";import"./rings-DpK90kMJ.js";const g={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
