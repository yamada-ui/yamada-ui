import{i as e}from"./preload-helper-usAeo7Bx.js";import{Cv as t,Ev as n,Kd as r,Nd as i,Vv as a,fr as o,pr as s}from"./iframe-4z85howq.js";var c,l,u,d,f;e((()=>{i(),t(),o(),c=n(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,t]=s(async()=>{await a(3e3)},[]);return(0,c.jsx)(r,{loading:e,onClick:t,children:`Click me`})},d=()=>{let[e,t]=s(async()=>{await a(3e3)},[],{loading:`page`});return(0,c.jsx)(r,{loading:e,onClick:t,children:`Click me`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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