import{j as s}from"./jsx-runtime-BpbtHYHY.js";import{r as o}from"./index-BwPxMuoB.js";import{u as p}from"./index-BjpHvtnu.js";import{C as c}from"./center-B3pLLn64.js";import{B as l}from"./button-CqSjNDtY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./use-var-DlbRU9j0.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return isOpen ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["basic"];export{S as __namedExportsOrder,e as basic,R as default};
