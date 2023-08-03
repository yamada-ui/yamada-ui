import{j as r,F as l}from"./jsx-runtime-37f7df21.js";import{r as o}from"./index-f1f2c4b1.js";import{u as m}from"./index-2f981b9c.js";import{C as p}from"./center-24089e74.js";import{B as u}from"./button-664b0d8f.js";import"./theme-2b4f2a73.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./forward-ref-92ccee95.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";import"./use-component-style-f03a93f0.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[c,s]=o.useState(!1);return m({ref:t,handler:()=>s(!1)}),r(l,{children:c?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-outside-click.stories-f13b865f.js.map
