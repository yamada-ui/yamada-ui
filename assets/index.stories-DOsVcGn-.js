import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,En as n}from"./props-CCQavtXy.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{r as i,t as a}from"./button-BCcG2Qpy.js";import{n as o,t as s}from"./use-async-callback-CMZ1w7cJ.js";var c,l,u,d,f;function p(){return(p=e((()=>{i(),t(),s(),c=r(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,t]=o(async()=>{await n(3e3)},[]);return(0,c.jsx)(a,{loading:e,onClick:t,children:`Click me`})},d=()=>{let[e,t]=o(async()=>{await n(3e3)},[],{loading:`page`});return(0,c.jsx)(a,{loading:e,onClick:t,children:`Click me`})},f=[`Basic`,`Loading`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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