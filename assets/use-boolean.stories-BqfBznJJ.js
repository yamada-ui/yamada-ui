import{j as e}from"./extends-CwFRzn3r.js";import{u as c}from"./index-CoJrGj-T.js";import{T as p}from"./text-DzUFhekZ.js";import{B as g}from"./button-D6MtFxez.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CLkw4iG2.js";import"./factory-CB2imrkD.js";import"./theme-provider-D1j4LEQ9.js";import"./use-ripple-D_F9Vz55.js";import"./factory-C3FBZMw9.js";import"./motion-I-9Hg3gW.js";import"./loading-6PAwx6O9.js";import"./icon-GDJ6YhRU.js";import"./use-var-D-eiJB8b.js";const L={title:"Hooks / useBoolean"},o=()=>{const[r,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["state: ",String(r)]}),e.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{off:n,on:f}]=c();return e.jsx(p,{w:"full",onMouseEnter:f,onMouseLeave:n,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const P=["basic","useOnOff"];export{P as __namedExportsOrder,o as basic,L as default,t as useOnOff};
