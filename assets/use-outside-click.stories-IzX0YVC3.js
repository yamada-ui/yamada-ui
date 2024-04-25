import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-DFthOoxg.js";import{r as o}from"./index-CBqU2yxZ.js";import{C as c}from"./center-HH1enGZV.js";import{B as l}from"./button-B4ILhPuk.js";import"./factory-By3J3PC4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-Bw-5RoCu.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-DRACrS5o.js";import"./loading-DhmQ7yG_.js";import"./icon-CWMRDXe1.js";import"./index-B9zh6AZB.js";import"./theme-provider-CVsgkwIz.js";import"./use-component-style-DO2aDOfD.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return <>
      {isOpen ? <Center ref={ref} h="10" px="4" bg="danger" color="white" rounded="md">
          Hey, Click anywhere outside of me to close.
        </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>}
    </>;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,r as basic,S as default};
