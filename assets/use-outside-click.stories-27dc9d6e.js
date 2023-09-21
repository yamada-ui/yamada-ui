import{j as r,F as c}from"./jsx-runtime-29545a09.js";import{r as o}from"./index-76fb7be0.js";import{u as l}from"./index-38baea3e.js";import{C as p}from"./center-ff734d83.js";import{B as u}from"./button-900c3cb1.js";import"./_commonjsHelpers-de833af9.js";import"./theme-f3d0af46.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-a8f76bf0.js";import"./index-d953af92.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./icon-2298db64.js";import"./use-component-style-fb710021.js";const j={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-27dc9d6e.js.map
