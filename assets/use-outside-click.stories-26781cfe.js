import{j as r,F as l}from"./jsx-runtime-276775ef.js";import{r as o}from"./index-1cdf6ce0.js";import{u as m}from"./index-0b524f4c.js";import{C as p}from"./center-f24092aa.js";import{B as u}from"./button-aae638aa.js";import"./theme-8f32df8a.js";import"./factory-75cc801c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./use-component-style-9ee8741d.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[c,s]=o.useState(!1);return m({ref:t,handler:()=>s(!1)}),r(l,{children:c?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-26781cfe.js.map
