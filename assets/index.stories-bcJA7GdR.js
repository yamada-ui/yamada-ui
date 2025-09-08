import{j as r}from"./iframe-6Bjnmk15.js";import{u as t}from"./index-BvBv2vEQ.js";import{B as e}from"./button-CsD90Sgr.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DWMqu5Gd.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";const d={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
