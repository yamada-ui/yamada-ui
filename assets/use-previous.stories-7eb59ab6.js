import{j as e,F as m,a as l}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-b0053e1f.js";import{u as g}from"./index-d68d7549.js";import{T as c}from"./text-d5943c82.js";import{B as u}from"./button-0fc0cb94.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-ab2b35f8.js";import"./theme-provider-a03ffa08.js";import"./factory-c9bc4a28.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";const H={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-7eb59ab6.js.map
