import{j as e,T as f,Q as d}from"./iframe-LqombrNM.js";import{u as g}from"./index-CevRMiHp.js";import"./preload-helper-C1FmrZbK.js";const h={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:s}]=g();return e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["state: ",String(t)]}),e.jsx(d,{onClick:s,children:"Click me to toggle the boolean value"})]})},n=()=>{const[t,{off:s,on:i}]=g();return e.jsx(f,{w:"full",onMouseEnter:i,onMouseLeave:s,children:t?"I am hovered":"Put mouse over me please"})};var r,a,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Basic","OnAndOff"];export{o as Basic,n as OnAndOff,v as __namedExportsOrder,h as default};
