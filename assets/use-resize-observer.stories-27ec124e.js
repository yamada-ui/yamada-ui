import{a as l,F as c,j as o}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-d68d7549.js";import{u}from"./index-5052d7fc.js";import{B as g}from"./button-f58fea21.js";import{T as f}from"./text-a96a3b5c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./theme-752d0904.js";import"./factory-e20f0797.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-427fd69a.js";import"./index-7c33f66e.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./icon-0ac17974.js";import"./use-component-style-eed0605d.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-27ec124e.js.map
