import{a as r,F as c}from"./jsx-runtime-b08f8875.js";import{r as o}from"./index-8ee6c85d.js";import{u as l}from"./index-bfc306aa.js";import{C as p}from"./center-91109801.js";import{B as u}from"./button-a09a9cfc.js";import"./_commonjsHelpers-de833af9.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./loading-9c6ba408.js";import"./index-7636bab8.js";import"./theme-provider-78d359c6.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./icon-a76117e5.js";import"./use-component-style-b6002d28.js";const F={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-c958dd05.js.map
