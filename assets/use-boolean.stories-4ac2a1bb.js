import{a as n,F as d,j as c}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-11e13d28.js";import{T as f}from"./text-c74b4a28.js";import{B as x}from"./button-73490b67.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-c496b87d.js";import"./use-component-style-277e16ba.js";import"./theme-2199e320.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";const P={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-boolean.stories-4ac2a1bb.js.map
