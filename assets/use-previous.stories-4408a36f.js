import{a as e,F as m,j as l}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-54553de9.js";import{u as g}from"./index-11e13d28.js";import{T as c}from"./text-c74b4a28.js";import{B as u}from"./button-73490b67.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-c496b87d.js";import"./use-component-style-277e16ba.js";import"./theme-2199e320.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-4408a36f.js.map
