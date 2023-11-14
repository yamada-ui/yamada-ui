import{j as e,F as m,a as l}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-eb92a01e.js";import{u as g}from"./index-c3db8104.js";import{T as c}from"./text-c7eceae7.js";import{B as u}from"./button-a09a9cfc.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-b6002d28.js";import"./theme-provider-78d359c6.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-9c6ba408.js";import"./index-7636bab8.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./icon-a76117e5.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-ad1c75f3.js.map
