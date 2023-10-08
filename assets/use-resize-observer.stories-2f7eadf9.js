import{a as l,F as c,j as o}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-d68d7549.js";import{u}from"./index-9e3fc498.js";import{B as g}from"./button-e3cfca6e.js";import{T as f}from"./text-55afa3ec.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-17a0d6cf.js";import"./factory-ea08dcfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-bc85ffb6.js";import"./index-c817ab90.js";import"./index-74b59fee.js";import"./index-803a57bb.js";import"./icon-cd648dc6.js";import"./use-component-style-fa830b0f.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-2f7eadf9.js.map
