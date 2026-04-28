import{n as e}from"./chunk-jRWAZmH_.js";import{Tn as t,Z as n}from"./core-C7NnSGLR.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{l as i,t as a}from"./button-C66K-mOB.js";import{in as o,rn as s}from"./iframe-tUvmHr7L.js";var c,l,u,d,f;e((()=>{a(),n(),s(),c=r(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,n]=o(async()=>{await t(3e3)},[]);return(0,c.jsx)(i,{loading:e,onClick:n,children:`Click me`})},d=()=>{let[e,n]=o(async()=>{await t(3e3)},[],{loading:`page`});return(0,c.jsx)(i,{loading:e,onClick:n,children:`Click me`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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