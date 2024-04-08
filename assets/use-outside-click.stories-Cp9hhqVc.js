import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as a}from"./index-D900PHOz.js";import{r as s}from"./index-CBqU2yxZ.js";import{C as c}from"./center-BHMC1n-3.js";import{B as l}from"./button-Wjdc7Vcw.js";import"./factory-CG-dRo5g.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-3blkJY2I.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BcRArT4T.js";import"./loading-DyGv7QZI.js";import"./index-BU3bWtrQ.js";import"./theme-provider-9qkSZ5k2.js";import"./index-HS2FxB0t.js";import"./index-Jylzys7p.js";import"./icon-BUD5BiyK.js";import"./use-component-style-l21esVYr.js";const _={title:"Hooks / useOutsideClick"},r=()=>{const t=s.useRef(null),[p,o]=s.useState(!1);return a({ref:t,handler:()=>o(!1)}),e.jsx(e.Fragment,{children:p?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
