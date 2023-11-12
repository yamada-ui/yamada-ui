import{j as n,F as d,a as c}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-d68d7549.js";import{T as f}from"./text-5fb4d3a2.js";import{B as x}from"./button-43f12c11.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-7eac11b7.js";import"./theme-provider-cb22a602.js";import"./factory-5c69ebb0.js";import"./loading-6fc37ca1.js";import"./index-e9290b19.js";import"./index-3c722384.js";import"./index-a304defb.js";import"./icon-b93ac65a.js";const L={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,u,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const P=["basic","useOnOff"];export{P as __namedExportsOrder,e as basic,L as default,o as useOnOff};
//# sourceMappingURL=use-boolean.stories-ae5e85ec.js.map
