import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as m}from"./index-CCV2FPn0.js";import{B as c}from"./button-BN1WQcNU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./factory-BPYpkDor.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-EznoQwCc.js";import"./index-2WvfircW.js";import"./proxy-DwHv-pG9.js";import"./factory-BiXCYStP.js";import"./loading-Bd8HLEYZ.js";import"./icon-DT11Nal8.js";import"./use-component-style-CYL4T5vM.js";import"./theme-provider-Bsm-0rKu.js";import"./use-var-DoLXLJEg.js";const T={title:"Hooks / useProcessing"},o=()=>{const s=m(),n=()=>{s.start(),setTimeout(()=>{s.finish()},3e3)};return e.jsx(c,{isLoading:s.isLoading,onClick:n,children:"Click me"})};var i,r,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const processing = useProcessing();
  const onClick = () => {
    processing.start();
    setTimeout(() => {
      processing.finish();
    }, 3000);
  };
  return <Button isLoading={processing.isLoading} onClick={onClick}>
      Click me
    </Button>;
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,T as default};
