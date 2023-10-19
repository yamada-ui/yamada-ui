import{j as l,F as c,a as o}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-c3db8104.js";import{u}from"./index-87394bee.js";import{B as g}from"./button-401f14b3.js";import{T as f}from"./text-50bfeca2.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./theme-provider-1097130b.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";import"./use-component-style-07e84389.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-eb3afe29.js.map
