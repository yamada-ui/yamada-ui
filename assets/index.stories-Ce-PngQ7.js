import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Kd as n,Nd as r,hr as i,mr as a}from"./iframe-4z85howq.js";var o,s,c,l;e((()=>{a(),r(),o=t(),s={title:`Hooks / useProcessing`},c=()=>{let e=i();return(0,o.jsx)(n,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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