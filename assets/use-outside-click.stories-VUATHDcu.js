import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as a}from"./index-_9uB05C8.js";import{r as s}from"./index-CBqU2yxZ.js";import{C as c}from"./center-CaFe57yB.js";import{B as l}from"./button-D6Xv5gej.js";import"./factory-DBv693c8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-BGPrLyn5.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-B78TtHbt.js";import"./loading-BZATwpJ-.js";import"./index-BLOGRGTX.js";import"./theme-provider-B81-8twE.js";import"./index-DT1MKHzI.js";import"./index-C_T8L7c2.js";import"./icon-CttZDCjD.js";import"./use-component-style-x77HgIAf.js";const _={title:"Hooks / useOutsideClick"},r=()=>{const t=s.useRef(null),[p,o]=s.useState(!1);return a({ref:t,handler:()=>o(!1)}),e.jsx(e.Fragment,{children:p?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["basic"];export{v as __namedExportsOrder,r as basic,_ as default};
