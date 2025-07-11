import{j as r}from"./iframe-Dqv37jui.js";import{u as t}from"./index-BWK1ZuP3.js";import{B as e}from"./button-C8c51KbT.js";import"./index-uoRv15dA.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";const l={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
