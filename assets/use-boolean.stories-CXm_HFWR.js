import{j as e}from"./extends-CwFRzn3r.js";import{u as c}from"./index-Du0-7Fls.js";import{T as p}from"./text-C4kk1pFE.js";import{B as g}from"./button-CrM87X6c.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D0DGb12b.js";import"./factory-DfCPDZht.js";import"./theme-provider-Bw55Thfs.js";import"./use-ripple-C-c72TCS.js";import"./factory-B9-LT_yD.js";import"./motion-I-9Hg3gW.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";const L={title:"Hooks / useBoolean"},o=()=>{const[r,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["state: ",String(r)]}),e.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=c();return e.jsx(p,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const P=["basic","useOnOff"];export{P as __namedExportsOrder,o as basic,L as default,t as useOnOff};
