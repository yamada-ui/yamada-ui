import{j as e,T as r,R as u}from"./iframe-Brv718Ke.js";import{u as a}from"./index-2Zpngp_N.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:s}]=a();return e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:["state: ",String(t)]}),e.jsx(u,{onClick:s,children:"Click me to toggle the boolean value"})]})},n=()=>{const[t,{off:s,on:l}]=a();return e.jsx(r,{w:"full",onMouseEnter:l,onMouseLeave:s,children:t?"I am hovered":"Put mouse over me please"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
