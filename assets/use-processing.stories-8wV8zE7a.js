import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as m}from"./index-uZ08_XDr.js";import{B as c}from"./button-CCbGPPx6.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./factory-Nur_zO5a.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-C7oui4wX.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./theme-provider-BsBO7Bt7.js";import"./use-var-BmU0CMcq.js";const T={title:"Hooks / useProcessing"},o=()=>{const s=m(),n=()=>{s.start(),setTimeout(()=>{s.finish()},3e3)};return e.jsx(c,{isLoading:s.isLoading,onClick:n,children:"Click me"})};var i,r,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
