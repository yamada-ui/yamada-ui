import{a as l,F as c,j as o}from"./jsx-runtime-3bfad254.js";import{u as p}from"./index-c3db8104.js";import{u}from"./index-c59769ca.js";import{B as g}from"./button-b56286bb.js";import{T as f}from"./text-43961d79.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./factory-11559d5d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-7a918908.js";import"./index-028132fa.js";import"./theme-provider-d246dc71.js";import"./index-11bf09da.js";import"./index-5e9263a1.js";import"./icon-2f1d814a.js";import"./use-component-style-57629fd2.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-52bae3b0.js.map
