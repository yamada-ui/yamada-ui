import{a as e,F as m,j as l}from"./jsx-runtime-276775ef.js";import{u as p}from"./index-2450d9ca.js";import{u as g}from"./index-7733ff91.js";import{T as c}from"./text-1e5971fb.js";import{B as u}from"./button-ffa0d6e0.js";import"./index-1cdf6ce0.js";import"./forward-ref-86842115.js";import"./use-component-style-645da9e2.js";import"./theme-ead977c1.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";const H={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-2151b9db.js.map
