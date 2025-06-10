import{j as e}from"./jsx-runtime-DztICxWZ.js";import{u as m}from"./index-DJNQ1H65.js";import{B as c}from"./button-nZ2ZqBRb.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-YFprnXPi.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";const _={title:"Hooks / useProcessing"},o=()=>{const r=m(),n=()=>{r.start(),setTimeout(()=>{r.finish()},3e3)};return e.jsx(c,{loading:r.loading,onClick:n,children:"Click me"})};var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const H=["basic"];export{H as __namedExportsOrder,o as basic,_ as default};
