import{r,j as n,E as a}from"./iframe-6cyGxZR1.js";import{u as c}from"./index-DCrRJmFA.js";import{B as l}from"./button-G4XTmEMi.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";const f={title:"Hooks / useOutsideClick"},e=()=>{const t=r.useRef(null),[o,s]=r.useState(!1);return c({ref:t,handler:()=>s(!1)}),o?n.jsx(a,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):n.jsx(l,{onClick:()=>s(!0),children:"Please Click"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...e.parameters?.docs?.source}}};const C=["Basic"];export{e as Basic,C as __namedExportsOrder,f as default};
