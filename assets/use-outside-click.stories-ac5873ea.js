import{j as r,F as l}from"./jsx-runtime-276775ef.js";import{r as o}from"./index-1cdf6ce0.js";import{u as m}from"./index-f56df616.js";import{C as p}from"./center-0ea87f28.js";import{B as u}from"./button-ffa0d6e0.js";import"./theme-ead977c1.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";import"./use-component-style-645da9e2.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[c,s]=o.useState(!1);return m({ref:t,handler:()=>s(!1)}),r(l,{children:c?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const j=["basic"];export{j as __namedExportsOrder,e as basic,S as default};
//# sourceMappingURL=use-outside-click.stories-ac5873ea.js.map
