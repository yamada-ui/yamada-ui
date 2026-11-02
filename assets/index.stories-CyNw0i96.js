import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{An as t,Dn as n}from"./props-BOrE8-AT.js";import{t as r}from"./jsx-runtime-BB9-612F.js";import{r as i,t as a}from"./button-CliLQZ-3.js";import{n as o,t as s}from"./use-async-callback-DD6t-dCd.js";var c,l,u,d,f;function p(){return(p=e((()=>{i(),n(),s(),c=r(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,n]=o(async()=>{await t(3e3)},[]);return(0,c.jsx)(a,{loading:e,onClick:n,children:`Click me`})},d=()=>{let[e,n]=o(async()=>{await t(3e3)},[],{loading:`page`});return(0,c.jsx)(a,{loading:e,onClick:n,children:`Click me`})},f=[`Basic`,`Loading`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Basic,d as Loading,f as __namedExportsOrder,l as default};