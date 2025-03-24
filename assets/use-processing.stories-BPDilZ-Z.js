import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as m}from"./index-bFM6bsx5.js";import{B as c}from"./button-Dm54j0EP.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qZwaV1-B.js";import"./factory-B_KMcXyW.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";import"./use-var-Tj-aA0qb.js";const _={title:"Hooks / useProcessing"},o=()=>{const r=m(),n=()=>{r.start(),setTimeout(()=>{r.finish()},3e3)};return e.jsx(c,{loading:r.loading,onClick:n,children:"Click me"})};var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
