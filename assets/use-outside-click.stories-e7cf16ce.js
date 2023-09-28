import{j as r,F as c}from"./jsx-runtime-29545a09.js";import{r as o}from"./index-76fb7be0.js";import{u as l}from"./index-f1297105.js";import{C as p}from"./center-5725cf92.js";import{B as u}from"./button-47cccc58.js";import"./_commonjsHelpers-de833af9.js";import"./theme-53967a8a.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";import"./use-component-style-aad79748.js";const j={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const F=["basic"];export{F as __namedExportsOrder,e as basic,j as default};
//# sourceMappingURL=use-outside-click.stories-e7cf16ce.js.map
