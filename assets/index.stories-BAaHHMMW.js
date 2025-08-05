import{r as s,j as o,E as a}from"./iframe-DiGnZRjA.js";import{u as c}from"./index-qjplEhfW.js";import{B as i}from"./button-BKZEusiz.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-50SMBN3h.js";import"./rings-Dw5EsMos.js";const C={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[n,r]=s.useState(!1);return c({ref:t,handler:()=>r(!1)}),n?o.jsx(a,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):o.jsx(i,{onClick:()=>r(!0),children:"Please Click"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...e.parameters?.docs?.source}}};const h=["Basic"];export{e as Basic,h as __namedExportsOrder,C as default};
