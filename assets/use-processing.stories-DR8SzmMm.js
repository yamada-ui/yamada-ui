import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as m}from"./index-BV35nwEU.js";import{B as c}from"./button-BDTEGqqa.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./factory-Db31n_eg.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-shOr3g-0.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-BRZ9AYsk.js";import"./loading-BptEEwSR.js";import"./icon-BfxegGWg.js";import"./use-component-style-5HWcAXul.js";import"./theme-provider-C-TvIt_J.js";import"./use-var-BbJRqi2C.js";const T={title:"Hooks / useProcessing"},o=()=>{const s=m(),n=()=>{s.start(),setTimeout(()=>{s.finish()},3e3)};return e.jsx(c,{isLoading:s.isLoading,onClick:n,children:"Click me"})};var i,r,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
