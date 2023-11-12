import{j as l,F as c,a as o}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-d68d7549.js";import{u}from"./index-13b4c2c6.js";import{B as g}from"./button-43f12c11.js";import{T as f}from"./text-5fb4d3a2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-5c69ebb0.js";import"./forward-ref-8b7d2a6f.js";import"./loading-6fc37ca1.js";import"./index-e9290b19.js";import"./theme-provider-cb22a602.js";import"./index-3c722384.js";import"./index-a304defb.js";import"./icon-b93ac65a.js";import"./use-component-style-7eac11b7.js";const E={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const F=["basic"];export{F as __namedExportsOrder,e as basic,E as default};
//# sourceMappingURL=use-resize-observer.stories-584237d3.js.map
