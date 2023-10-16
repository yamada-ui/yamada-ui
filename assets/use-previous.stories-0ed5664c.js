import{j as e,F as m,a as l}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-b0053e1f.js";import{u as g}from"./index-d68d7549.js";import{T as c}from"./text-64b2ab85.js";import{B as u}from"./button-88fe2c22.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-c6f16384.js";import"./theme-provider-89b34f8f.js";import"./factory-0b90ba06.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-a0c81de9.js";import"./index-8dce054c.js";import"./index-1560c0d4.js";import"./index-a6848ad8.js";import"./icon-583bdc7e.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? 'none')}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const q=["basic"];export{q as __namedExportsOrder,o as basic,O as default};
//# sourceMappingURL=use-previous.stories-0ed5664c.js.map
