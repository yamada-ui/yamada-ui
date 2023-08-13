import{a as l,F as c,j as o}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-11e13d28.js";import{u}from"./index-cf1878c9.js";import{B as g}from"./button-73490b67.js";import{T as f}from"./text-c74b4a28.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./theme-2199e320.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./use-component-style-277e16ba.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-3b6b8a47.js.map
