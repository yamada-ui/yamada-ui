import{a as e,F as m,j as l}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-54553de9.js";import{u as g}from"./index-11e13d28.js";import{T as c}from"./text-90618d09.js";import{B as u}from"./button-b34f397c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-c496b87d.js";import"./use-component-style-195b7054.js";import"./theme-19663a53.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-21320189.js.map
