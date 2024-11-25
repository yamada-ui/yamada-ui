import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as c}from"./index-gGKStiao.js";import{T as p}from"./text-CIX2g0cs.js";import{B as g}from"./button-vnBqyEiG.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-BGLOU3Ga.js";import"./factory-Cp1Ju9mN.js";import"./theme-provider-DMHFYkuw.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./loading-DkRHwhPr.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";const P={title:"Hooks / useBoolean"},o=()=>{const[r,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["state: ",String(r)]}),e.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{off:n,on:f}]=c();return e.jsx(p,{w:"full",onMouseEnter:f,onMouseLeave:n,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const _=["basic","useOnOff"];export{_ as __namedExportsOrder,o as basic,P as default,t as useOnOff};