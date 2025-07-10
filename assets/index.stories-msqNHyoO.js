import{j as r}from"./iframe-CzCJWi2Q.js";import{u as t}from"./index-CghQ5QYW.js";import{B as e}from"./button-DehxczKB.js";import"./index-DpFfI8Mo.js";import"./use-ripple-Cto3JHtM.js";import"./rings-DZYkvdi_.js";const l={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
