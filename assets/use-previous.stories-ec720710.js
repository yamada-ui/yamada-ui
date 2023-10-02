import{a as e,F as m,j as l}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-b0053e1f.js";import{u as g}from"./index-d68d7549.js";import{T as c}from"./text-e11ebe79.js";import{B as u}from"./button-d7b0a30b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-3d3df90d.js";import"./theme-d25050a9.js";import"./factory-693455ee.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-ed892129.js";import"./index-3527803c.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";import"./icon-c50323e0.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-ec720710.js.map
