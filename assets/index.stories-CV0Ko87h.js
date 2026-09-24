import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./button-CFBNyQlD.js";import{n as i,t as a}from"./use-processing-AqI7TOe7.js";var o,s,c,l;function u(){return(u=e((()=>{a(),n(),o=t(),s={title:`Hooks / useProcessing`},c=()=>{let e=i();return(0,o.jsx)(r,{loading:e.loading,onClick:()=>{e.start(),setTimeout(()=>{e.finish()},3e3)},children:`Click me`})},l=[`Basic`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Basic,l as __namedExportsOrder,s as default};