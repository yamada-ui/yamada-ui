import{j as r}from"./iframe-Cn-KGvUL.js";import{u as t}from"./index-C7y8OPDh.js";import{B as e}from"./button-C4DORSB8.js";import"./index-DXW1bZJ6.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";const l={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const g=["Basic"];export{s as Basic,g as __namedExportsOrder,l as default};
