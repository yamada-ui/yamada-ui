import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{wn as t,xn as n}from"./props-Bz1FL_va.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{r as i,t as a}from"./button-CFBNyQlD.js";import{n as o,t as s}from"./use-async-callback-DBHk58eG.js";var c,l,u,d,f;function p(){return(p=e((()=>{i(),n(),s(),c=r(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,n]=o(async()=>{await t(3e3)},[]);return(0,c.jsx)(a,{loading:e,onClick:n,children:`Click me`})},d=()=>{let[e,n]=o(async()=>{await t(3e3)},[],{loading:`page`});return(0,c.jsx)(a,{loading:e,onClick:n,children:`Click me`})},f=[`Basic`,`Loading`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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