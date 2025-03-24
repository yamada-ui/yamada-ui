import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{r as s}from"./index-BwPxMuoB.js";import{u as p}from"./index-2pdm5d7T.js";import{C as c}from"./center-BgoPILRQ.js";import{B as l}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-B_KMcXyW.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";import"./use-var-Tj-aA0qb.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,r]=s.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?o.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):o.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,e as basic,S as default};
