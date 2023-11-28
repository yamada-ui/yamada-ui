import{j as e,F as m,a as l}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-eb92a01e.js";import{u as g}from"./index-c3db8104.js";import{T as c}from"./text-c614df96.js";import{B as u}from"./button-1f60b64e.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-873f0974.js";import"./theme-provider-9d5cd644.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const q=["basic"];export{q as __namedExportsOrder,o as basic,O as default};
//# sourceMappingURL=use-previous.stories-a6f80aee.js.map
