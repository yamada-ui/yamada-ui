import{i as e}from"./preload-helper-usAeo7Bx.js";import{Qn as t,dt as n}from"./core-Bhdtn0pR.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{d as i,t as a}from"./button-CFUi4jSx.js";import{fr as o,pr as s}from"./iframe-CgnmJX3j.js";var c,l,u,d,f;e((()=>{a(),n(),o(),c=r(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,n]=s(async()=>{await t(3e3)},[]);return(0,c.jsx)(i,{loading:e,onClick:n,children:`Click me`})},d=()=>{let[e,n]=s(async()=>{await t(3e3)},[],{loading:`page`});return(0,c.jsx)(i,{loading:e,onClick:n,children:`Click me`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Loading`]}))();export{u as Basic,d as Loading,f as __namedExportsOrder,l as default};