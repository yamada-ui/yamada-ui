import{j as e,T as r,S as u}from"./iframe-C__kp2ks.js";import{u as a}from"./index-C1Es4VUR.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:s}]=a();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:["state: ",String(t)]}),e.jsx(u,{onClick:s,children:"Click me to toggle the boolean value"})]})},n=()=>{const[t,{off:s,on:l}]=a();return e.jsx(r,{w:"full",onMouseEnter:l,onMouseLeave:s,children:t?"I am hovered":"Put mouse over me please"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...n.parameters?.docs?.source}}};const i=["Basic","OnAndOff"];export{o as Basic,n as OnAndOff,i as __namedExportsOrder,g as default};
