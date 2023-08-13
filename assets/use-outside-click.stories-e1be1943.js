import{j as r,F as c}from"./jsx-runtime-e6a661ac.js";import{r as o}from"./index-61bf1805.js";import{u as l}from"./index-e6ad47cd.js";import{C as p}from"./center-29cb8b4c.js";import{B as u}from"./button-73490b67.js";import"./_commonjsHelpers-de833af9.js";import"./theme-2199e320.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./use-component-style-277e16ba.js";const j={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-e1be1943.js.map
