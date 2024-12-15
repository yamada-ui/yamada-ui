import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{u as p}from"./index-D0QjGqiR.js";import{C as c}from"./center-DxI5r7X_.js";import{B as l}from"./button-B8Q1YJpe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-Bqmz9C5P.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-DFvMPDyV.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-Cbq3E2qU.js";import"./loading-CmllsJT7.js";import"./icon-DeZ7GCXS.js";import"./use-component-style-D7fUVUlo.js";import"./theme-provider-Dit74geM.js";import"./use-var-DKkLsRXg.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
