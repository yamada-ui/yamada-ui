import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as m}from"./index-CxhrTr4O.js";import{B as c}from"./button-CqSjNDtY.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qZwaV1-B.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./use-var-DlbRU9j0.js";const _={title:"Hooks / useProcessing"},o=()=>{const r=m(),n=()=>{r.start(),setTimeout(()=>{r.finish()},3e3)};return e.jsx(c,{loading:r.loading,onClick:n,children:"Click me"})};var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
