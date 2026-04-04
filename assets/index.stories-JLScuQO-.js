import{n as e}from"./chunk-zsgVPwQN.js";import{M as t,N as n,jl as r,pp as i,xl as a}from"./iframe-DfzTHUcv.js";var o,s,c,l;e((()=>{t(),a(),o=i(),s={title:`Hooks / useProcessing`},c=()=>{let e=n();return(0,o.jsx)(r,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l=[`Basic`]}))();export{c as Basic,l as __namedExportsOrder,s as default};