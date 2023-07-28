import{a as n,F as d,j as c}from"./jsx-runtime-276775ef.js";import{u as p}from"./index-7733ff91.js";import{T as f}from"./text-1e5971fb.js";import{B as x}from"./button-ffa0d6e0.js";import"./index-1cdf6ce0.js";import"./forward-ref-86842115.js";import"./use-component-style-645da9e2.js";import"./theme-ead977c1.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";const L={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
  return <Text w='full' onMouseEnter={on} onMouseLeave={off}>
      {flg ? 'I am hovered' : 'Put mouse over me please'}
    </Text>;
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const P=["basic","useOnOff"];export{P as __namedExportsOrder,e as basic,L as default,o as useOnOff};
//# sourceMappingURL=use-boolean.stories-e9e2f38a.js.map
