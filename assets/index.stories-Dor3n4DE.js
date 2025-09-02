import{j as r}from"./iframe-zUpmkGgl.js";import{u as t}from"./index-BbFFpGoB.js";import{B as e}from"./button-BSJyaaef.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DYRkv6Tb.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";const d={title:"Hooks / useProcessing"},s=()=>{const o=t(),n=()=>{o.start(),setTimeout(()=>{o.finish()},3e3)};return r.jsx(e,{loading:o.loading,onClick:n,children:"Click me"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
