import{a as l,F as c,j as o}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-11e13d28.js";import{u}from"./index-73f46656.js";import{B as g}from"./button-78028f3e.js";import{T as f}from"./text-db0e2e1e.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./theme-00f66a43.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./forward-ref-c496b87d.js";import"./loading-3c2f8b38.js";import"./index-1e5cc672.js";import"./index-14097b93.js";import"./index-f963e1c4.js";import"./icon-4e9764f5.js";import"./use-component-style-b3c7bc86.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? 'xl' : 'sm'} h={flg ? 'xl' : 'sm'}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const H=["basic"];export{H as __namedExportsOrder,e as basic,F as default};
//# sourceMappingURL=use-resize-observer.stories-929bc706.js.map
