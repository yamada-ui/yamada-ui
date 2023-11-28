import{j as l,F as c,a as o}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-c3db8104.js";import{u}from"./index-420b16fc.js";import{B as g}from"./button-1f60b64e.js";import{T as f}from"./text-c614df96.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./theme-provider-9d5cd644.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";import"./use-component-style-873f0974.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const H=["basic"];export{H as __namedExportsOrder,e as basic,F as default};
//# sourceMappingURL=use-resize-observer.stories-c67d18f1.js.map
