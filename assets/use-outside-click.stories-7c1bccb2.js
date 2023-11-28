import{a as r,F as c}from"./jsx-runtime-b08f8875.js";import{r as o}from"./index-8ee6c85d.js";import{u as l}from"./index-9bbf54ab.js";import{C as p}from"./center-72365e1a.js";import{B as u}from"./button-1f60b64e.js";import"./_commonjsHelpers-de833af9.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./theme-provider-9d5cd644.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";import"./use-component-style-873f0974.js";const F={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return <>
      {isOpen ? <Center ref={ref} h="10" px="4" bg="danger" color="white" rounded="md">
          Hey, Click anywhere outside of me to close.
        </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>}
    </>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,e as basic,F as default};
//# sourceMappingURL=use-outside-click.stories-7c1bccb2.js.map
