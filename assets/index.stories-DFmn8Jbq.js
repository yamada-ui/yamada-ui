import{n as e}from"./chunk-zsgVPwQN.js";import{Cn as t,El as n,am as r,gl as i,sm as a,vm as o,wn as s}from"./iframe-CHoZGzMw.js";var c,l,u,d,f;e((()=>{i(),r(),t(),c=a(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,t]=s(async()=>{await o(3e3)},[]);return(0,c.jsx)(n,{loading:e,onClick:t,children:`Click me`})},d=()=>{let[e,t]=s(async()=>{await o(3e3)},[],{loading:`page`});return(0,c.jsx)(n,{loading:e,onClick:t,children:`Click me`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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