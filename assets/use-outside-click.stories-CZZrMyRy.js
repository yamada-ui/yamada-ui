import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as a}from"./index-BxUjUPEB.js";import{r as s}from"./index-CBqU2yxZ.js";import{C as c}from"./center-BQOEyiS1.js";import{B as l}from"./button-oNOtr6rX.js";import"./factory-DKdOmnTE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-CmSVpGdD.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CLgphBsa.js";import"./loading-wACCLo5l.js";import"./index-CdrX07di.js";import"./theme-provider-6JRwGmsH.js";import"./index-mdwqubC6.js";import"./index-5LWoB8xm.js";import"./icon-1JWgpStP.js";import"./use-component-style-CM81S9bB.js";const _={title:"Hooks / useOutsideClick"},r=()=>{const t=s.useRef(null),[p,o]=s.useState(!1);return a({ref:t,handler:()=>o(!1)}),e.jsx(e.Fragment,{children:p?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
