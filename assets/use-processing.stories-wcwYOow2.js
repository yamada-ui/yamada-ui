import{j as e}from"./extends-CwFRzn3r.js";import{u as m}from"./index-z6ECgnn3.js";import{B as c}from"./button-BtgxkHkM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CoJrGj-T.js";import"./factory-CBW6YcbY.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./loading-DZQf4R8P.js";import"./icon-CQ7oKYSm.js";import"./use-component-style-Givb0biW.js";import"./theme-provider-B8NHi_rL.js";import"./use-var-BcRMoVLh.js";const T={title:"Hooks / useProcessing"},o=()=>{const s=m(),n=()=>{s.start(),setTimeout(()=>{s.finish()},3e3)};return e.jsx(c,{isLoading:s.isLoading,onClick:n,children:"Click me"})};var i,r,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
