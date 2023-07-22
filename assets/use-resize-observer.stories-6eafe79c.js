import{a as l,F as c,j as o}from"./jsx-runtime-276775ef.js";import{u as p}from"./index-7733ff91.js";import{u}from"./index-f503eb09.js";import{B as g}from"./button-aae638aa.js";import{T as f}from"./text-914562f0.js";import"./index-1cdf6ce0.js";import"./theme-8f32df8a.js";import"./factory-75cc801c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./use-component-style-9ee8741d.js";const E={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(f,{children:JSON.stringify(a)}),o(g,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-6eafe79c.js.map
