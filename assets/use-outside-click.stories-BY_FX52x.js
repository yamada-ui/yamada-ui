import{j as o}from"./jsx-runtime-DztICxWZ.js";import{r as s}from"./index-Bv9Y92EF.js";import{u as p}from"./index-vKAUfVXn.js";import{C as c}from"./center-D6SfTFGO.js";import{B as l}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";const S={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,r]=s.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?o.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):o.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
