import{j as n,F as d,a as c}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-c3db8104.js";import{T as f}from"./text-c614df96.js";import{B as x}from"./button-1f60b64e.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-873f0974.js";import"./theme-provider-9d5cd644.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";const P={title:"Hooks / useBoolean"},e=()=>{const[t,{toggle:r}]=p();return n(d,{children:[n(f,{children:["state: ",String(t)]}),c(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},o=()=>{const[t,{on:r,off:g}]=p();return c(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const _=["basic","useOnOff"];export{_ as __namedExportsOrder,e as basic,P as default,o as useOnOff};
//# sourceMappingURL=use-boolean.stories-6ec6810a.js.map
