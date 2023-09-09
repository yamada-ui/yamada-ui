import{j as r,F as c}from"./jsx-runtime-29545a09.js";import{r as o}from"./index-76fb7be0.js";import{u as l}from"./index-76fa0131.js";import{C as p}from"./center-64a1105b.js";import{B as u}from"./button-c5f6c9cf.js";import"./_commonjsHelpers-de833af9.js";import"./theme-ee3e3fce.js";import"./factory-5f559ecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-f83bd05e.js";import"./index-d06ecb96.js";import"./index-e993c520.js";import"./index-a4d0044e.js";import"./icon-96427744.js";import"./use-component-style-5e7d3fa1.js";const j={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-0c767335.js.map
