import{j as r}from"./iframe-BG38LAQ9.js";import{u as t}from"./index-DfKJ7c-Q.js";import{B as e}from"./button-CfsqSZ9w.js";import"./index-BoPMWYjX.js";import"./use-ripple-MuLBmFKU.js";import"./rings-BXfyi9cx.js";const l={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
