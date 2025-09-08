import{j as e,T as s}from"./iframe-6Bjnmk15.js";import{u as a}from"./index-DWMqu5Gd.js";import{B as u}from"./button-CsD90Sgr.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";const x={title:"Hooks / useBoolean"},o=()=>{const[n,{toggle:r}]=a();return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["state: ",String(n)]}),e.jsx(u,{onClick:r,children:"Click me to toggle the boolean value"})]})},t=()=>{const[n,{off:r,on:l}]=a();return e.jsx(s,{w:"full",onMouseEnter:l,onMouseLeave:r,children:n?"I am hovered":"Put mouse over me please"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const B=["Basic","OnAndOff"];export{o as Basic,t as OnAndOff,B as __namedExportsOrder,x as default};
