import{n as e}from"./chunk-zsgVPwQN.js";import{En as t,Tn as n,im as r,ml as i,wl as a}from"./iframe-BNaKCSd5.js";var o,s,c,l;e((()=>{n(),i(),o=r(),s={title:`Hooks / useProcessing`},c=()=>{let e=t();return(0,o.jsx)(a,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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