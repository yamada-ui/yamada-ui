import{j as e,F as m,a as l}from"./jsx-runtime-4d953e71.js";import{u as p}from"./index-241bd16a.js";import{u as g}from"./index-f1306a69.js";import{T as c}from"./text-afdead5d.js";import{B as u}from"./button-6d999cdb.js";import"./index-de62f0e0.js";import"./forward-ref-396247d7.js";import"./use-component-style-a395c77f.js";import"./theme-326cd56d.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";const H={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-a11405ee.js.map
