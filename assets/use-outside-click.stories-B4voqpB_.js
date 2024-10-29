import{j as s}from"./extends-CwFRzn3r.js";import{u as p}from"./index-DbHNzxol.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-CfmrFwEl.js";import{B as l}from"./button-CJFsrc4z.js";import"./factory-CBW6YcbY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./loading-CKKxrtqP.js";import"./icon-C1fg-h9m.js";import"./use-component-style-Givb0biW.js";import"./theme-provider-B8NHi_rL.js";import"./use-var-BcRMoVLh.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
