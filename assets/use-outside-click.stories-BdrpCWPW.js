import{j as s}from"./extends-CwFRzn3r.js";import{u as p}from"./index-CL25N26u.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-Be-BS5k4.js";import{B as l}from"./button-DejEDEJ2.js";import"./factory-CTJ-ITwV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-MSZSdTJh.js";import"./factory-CmtZP4aZ.js";import"./motion-I-9Hg3gW.js";import"./loading-BNHDbHrX.js";import"./icon-DlOX_f12.js";import"./use-component-style-_O1yHJxH.js";import"./theme-provider-gLqcKpHk.js";import"./use-var-Cgd0M5xr.js";const I={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return isOpen ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const R=["basic"];export{R as __namedExportsOrder,e as basic,I as default};
