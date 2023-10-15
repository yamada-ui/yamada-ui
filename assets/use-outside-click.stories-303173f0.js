import{a as r,F as c}from"./jsx-runtime-03b4ddbf.js";import{r as o}from"./index-76fb7be0.js";import{u as l}from"./index-3f4dedd4.js";import{C as p}from"./center-d68235fb.js";import{B as u}from"./button-55a1630a.js";import"./_commonjsHelpers-de833af9.js";import"./theme-provider-87f127bc.js";import"./factory-b055fecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9bbac61f.js";import"./index-f35d6182.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./icon-4b40a161.js";import"./use-component-style-f62022c6.js";const F={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return <>
      {isOpen ? <Center ref={ref} h='10' px='4' bg='danger' color='white' rounded='md'>
          Hey, Click anywhere outside of me to close.
        </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>}
    </>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,e as basic,F as default};
//# sourceMappingURL=use-outside-click.stories-303173f0.js.map
