import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{d as n,t as r}from"./button-DWoK_lmA.js";import{fr as i,pr as a}from"./iframe-D5Y3ROF5.js";var o,s,c,l;e((()=>{i(),r(),o=t(),s={title:`Hooks / useProcessing`},c=()=>{let e=a();return(0,o.jsx)(n,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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