import{a as n,F as d,j as c}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-d68d7549.js";import{T as f}from"./text-a96a3b5c.js";import{B as x}from"./button-f58fea21.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-eed0605d.js";import"./theme-752d0904.js";import"./factory-e20f0797.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-427fd69a.js";import"./index-7c33f66e.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./icon-0ac17974.js";const P={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-boolean.stories-4ad2f0ee.js.map
