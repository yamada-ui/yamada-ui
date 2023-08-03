import{a as e,F as m,j as l}from"./jsx-runtime-37f7df21.js";import{u as p}from"./index-a5c21f85.js";import{u as g}from"./index-82c18e8f.js";import{T as c}from"./text-6737f911.js";import{B as u}from"./button-664b0d8f.js";import"./index-f1f2c4b1.js";import"./forward-ref-92ccee95.js";import"./use-component-style-f03a93f0.js";import"./theme-2b4f2a73.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";const H={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const O=["basic"];export{O as __namedExportsOrder,o as basic,H as default};
//# sourceMappingURL=use-previous.stories-e5d84c77.js.map
