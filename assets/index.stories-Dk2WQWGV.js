import{j as r}from"./iframe-COpE3uSe.js";import{u as t}from"./index-MyglE7Im.js";import{B as e}from"./button-C1iRx7Aw.js";import"./preload-helper-D9Z9MdNV.js";import"./index-8bl8yV-6.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";const d={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
