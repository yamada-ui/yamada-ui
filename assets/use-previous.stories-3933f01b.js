import{a as e,F as m,j as l}from"./jsx-runtime-3bfad254.js";import{u as p}from"./index-eb92a01e.js";import{u as g}from"./index-c3db8104.js";import{T as c}from"./text-43961d79.js";import{B as u}from"./button-b56286bb.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-57629fd2.js";import"./theme-provider-d246dc71.js";import"./factory-11559d5d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-7a918908.js";import"./index-028132fa.js";import"./index-11bf09da.js";import"./index-5e9263a1.js";import"./icon-2f1d814a.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=g(),a=p(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-previous.stories-3933f01b.js.map
