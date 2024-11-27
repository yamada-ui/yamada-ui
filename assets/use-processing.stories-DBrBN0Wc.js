import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as m}from"./index-D1PiMshp.js";import{B as c}from"./button-OnwWSCmB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-gGKStiao.js";import"./factory-CehSyZ2b.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./loading-J7FyZR17.js";import"./icon-Tcjn8UpA.js";import"./use-component-style-PhZ538dD.js";import"./theme-provider-BOnS9RWG.js";import"./use-var-C7Dt5UAR.js";const T={title:"Hooks / useProcessing"},o=()=>{const s=m(),n=()=>{s.start(),setTimeout(()=>{s.finish()},3e3)};return e.jsx(c,{isLoading:s.isLoading,onClick:n,children:"Click me"})};var i,r,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
