import{a as r,F as c}from"./jsx-runtime-03b4ddbf.js";import{r as o}from"./index-76fb7be0.js";import{u as l}from"./index-84a52c9d.js";import{C as p}from"./center-a5003329.js";import{B as u}from"./button-55b73728.js";import"./_commonjsHelpers-de833af9.js";import"./factory-3147849f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-6f2def66.js";import"./index-d67a3cdd.js";import"./theme-provider-1f5b74fc.js";import"./index-3fdaba91.js";import"./index-b3930670.js";import"./icon-733ea9be.js";import"./use-component-style-82d4d359.js";const F={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-9ab426e7.js.map
