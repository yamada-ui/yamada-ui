import{j as l,F as c,a as o}from"./jsx-runtime-4d953e71.js";import{u as p}from"./index-b9804262.js";import{u}from"./index-f1306a69.js";import{T as g}from"./text-afdead5d.js";import{B as f}from"./button-6d999cdb.js";import"./index-de62f0e0.js";import"./theme-326cd56d.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./forward-ref-396247d7.js";import"./use-component-style-a395c77f.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";const E={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=u(),[m,a]=p();return l(c,{children:[o(g,{children:JSON.stringify(a)}),o(f,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-resize-observer.stories-21c0cc31.js.map
