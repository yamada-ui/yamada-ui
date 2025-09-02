import{r as s,j as o,K as a}from"./iframe-zUpmkGgl.js";import{u as l}from"./index-CEYmrBXe.js";import{B as i}from"./button-BSJyaaef.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";const h={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[n,r]=s.useState(!1);return l({ref:t,handler:()=>r(!1)}),n?o.jsx(a,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"l2",children:"Hey, Click anywhere outside of me to close."}):o.jsx(i,{onClick:()=>r(!0),children:"Please Click"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="l2">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...e.parameters?.docs?.source}}};const k=["Basic"];export{e as Basic,k as __namedExportsOrder,h as default};
