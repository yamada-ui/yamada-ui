import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{u as p}from"./index-BMKmWsig.js";import{C as c}from"./center-DbI1M6cv.js";import{B as l}from"./button-CCbGPPx6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-Nur_zO5a.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-C7oui4wX.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./theme-provider-BsBO7Bt7.js";import"./use-var-BmU0CMcq.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
