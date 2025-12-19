import{r,j as n,W as u,Q as i}from"./iframe-D_HYglKf.js";import{u as d}from"./index-ab6sp2Gl.js";import"./preload-helper-C1FmrZbK.js";const C={title:"Hooks / useOutsideClick"},e=()=>{const s=r.useRef(null),[c,t]=r.useState(!1);return d({ref:s,handler:()=>t(!1)}),c?n.jsx(u,{ref:s,bg:"danger",color:"white",h:"10",px:"4",rounded:"l2",children:"Hey, Click anywhere outside of me to close."}):n.jsx(i,{onClick:()=>t(!0),children:"Please Click"})};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="l2">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const h=["Basic"];export{e as Basic,h as __namedExportsOrder,C as default};
