import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Hv as n,Pd as r,fr as i,pr as a,qd as o,wv as s}from"./iframe-B_RvmxW5.js";var c,l,u,d,f;e((()=>{r(),s(),i(),c=t(),l={title:`Hooks / useAsyncCallback`},u=()=>{let[e,t]=a(async()=>{await n(3e3)},[]);return(0,c.jsx)(o,{loading:e,onClick:t,children:`Click me`})},d=()=>{let[e,t]=a(async()=>{await n(3e3)},[],{loading:`page`});return(0,c.jsx)(o,{loading:e,onClick:t,children:`Click me`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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