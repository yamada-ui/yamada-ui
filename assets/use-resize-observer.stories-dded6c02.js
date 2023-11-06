import{j as l,F as c,a as o}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-d68d7549.js";import{u}from"./index-5a5e802d.js";import{B as g}from"./button-0fc0cb94.js";import{T as f}from"./text-d5943c82.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-c9bc4a28.js";import"./forward-ref-8b7d2a6f.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./theme-provider-a03ffa08.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";import"./use-component-style-ab2b35f8.js";const E={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const F=["basic"];export{F as __namedExportsOrder,e as basic,E as default};
//# sourceMappingURL=use-resize-observer.stories-dded6c02.js.map
