import{r,j as n,Y as a,R as l}from"./iframe-BToZTpox.js";import{u as c}from"./index-Ck5VIWTs.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Hooks / useOutsideClick"},e=()=>{const s=r.useRef(null),[o,t]=r.useState(!1);return c({ref:s,handler:()=>t(!1)}),o?n.jsx(a,{ref:s,bg:"danger",color:"white",h:"10",px:"4",rounded:"l2",children:"Hey, Click anywhere outside of me to close."}):n.jsx(l,{onClick:()=>t(!0),children:"Please Click"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="l2">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...e.parameters?.docs?.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,p as default};
