import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Pd as n,hr as r,mr as i,qd as a}from"./iframe-B6Ybn7OE.js";var o,s,c,l;e((()=>{i(),n(),o=t(),s={title:`Hooks / useProcessing`},c=()=>{let e=r();return(0,o.jsx)(a,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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