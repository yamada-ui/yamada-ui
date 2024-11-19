import{j as s}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-vvrM3dVN.js";import{r as o}from"./index-ClcD9ViR.js";import{C as c}from"./center-DQ9g3-7I.js";import{B as l}from"./button-mz3Uh9F2.js";import"./factory-CsPvKZdD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-D3QnPsMa.js";import"./index-2WvfircW.js";import"./proxy-DwHv-pG9.js";import"./factory-CGSCAS8e.js";import"./loading-Dqjo7Xgj.js";import"./icon-DQQopEtL.js";import"./use-component-style-DigxQCYK.js";import"./theme-provider-BzJf26st.js";import"./use-var-U7aWLCqe.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
