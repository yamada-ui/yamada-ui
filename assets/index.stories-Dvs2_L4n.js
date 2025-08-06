import{j as e,T as s}from"./iframe-BVYXOt_x.js";import{u as a}from"./index-Ba1DlwHc.js";import{B as u}from"./button-DhYNg7P2.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";const d={title:"Hooks / useBoolean"},o=()=>{const[n,{toggle:r}]=a();return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["state: ",String(n)]}),e.jsx(u,{onClick:r,children:"Click me to toggle the boolean value"})]})},t=()=>{const[n,{off:r,on:l}]=a();return e.jsx(s,{w:"full",onMouseEnter:l,onMouseLeave:r,children:n?"I am hovered":"Put mouse over me please"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...t.parameters?.docs?.source}}};const x=["Basic","OnAndOff"];export{o as Basic,t as OnAndOff,x as __namedExportsOrder,d as default};
