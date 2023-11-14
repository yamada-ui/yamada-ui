import{j as l,F as c,a as o}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-c3db8104.js";import{u}from"./index-2166585a.js";import{B as g}from"./button-a09a9cfc.js";import{T as f}from"./text-c7eceae7.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-9c6ba408.js";import"./index-7636bab8.js";import"./theme-provider-78d359c6.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./icon-a76117e5.js";import"./use-component-style-b6002d28.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-855cbf8c.js.map
