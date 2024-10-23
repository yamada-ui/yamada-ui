import{j as s}from"./extends-CwFRzn3r.js";import{u as p}from"./index-CPvTbioc.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-CX_RwAn4.js";import{B as l}from"./button-D-OQqBLL.js";import"./factory-zMrA9M4D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-C38FK3R5.js";import"./factory-ps7NpXEL.js";import"./motion-I-9Hg3gW.js";import"./loading-BAxQru_S.js";import"./icon-CZT7FJOE.js";import"./use-component-style-BfdzvKeB.js";import"./theme-provider-D6YJ9wXo.js";import"./use-var-De9F6Sch.js";const I={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
