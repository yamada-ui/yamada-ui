import{a as r,F as l}from"./jsx-runtime-03b4ddbf.js";import{r as o}from"./index-76fb7be0.js";import{u as m}from"./index-690e5404.js";import{C as p}from"./center-b95d9abd.js";import{B as u}from"./button-0fc0cb94.js";import"./_commonjsHelpers-de833af9.js";import"./factory-c9bc4a28.js";import"./forward-ref-8b7d2a6f.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./theme-provider-a03ffa08.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";import"./use-component-style-ab2b35f8.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[c,s]=o.useState(!1);return m({ref:t,handler:()=>s(!1)}),r(l,{children:c?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const F=["basic"];export{F as __namedExportsOrder,e as basic,S as default};
//# sourceMappingURL=use-outside-click.stories-7e522e3d.js.map
