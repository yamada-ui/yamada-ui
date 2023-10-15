import{j as n,F as d,a as c}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-d68d7549.js";import{T as f}from"./text-3a61c91c.js";import{B as x}from"./button-55a1630a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-f62022c6.js";import"./theme-provider-87f127bc.js";import"./factory-b055fecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-9bbac61f.js";import"./index-f35d6182.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./icon-4b40a161.js";const P={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w='full' onMouseEnter={on} onMouseLeave={off}>
      {flg ? 'I am hovered' : 'Put mouse over me please'}
    </Text>;
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const _=["basic","useOnOff"];export{_ as __namedExportsOrder,e as basic,P as default,o as useOnOff};
//# sourceMappingURL=use-boolean.stories-63054653.js.map
