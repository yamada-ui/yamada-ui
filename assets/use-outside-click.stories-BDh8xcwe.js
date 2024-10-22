import{j as s}from"./extends-CwFRzn3r.js";import{u as p}from"./index-DgjEdtSN.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-DPe8Aa5C.js";import{B as l}from"./button-D8TbvY37.js";import"./factory-CsTAdKnO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-BD1DhmLJ.js";import"./factory-C2CyRybs.js";import"./motion-I-9Hg3gW.js";import"./loading-DVCIEwm3.js";import"./icon-1mDnm9Bi.js";import"./use-component-style-CYei-jGG.js";import"./theme-provider-V0oWEqA6.js";import"./use-var-CUIZ3K35.js";const I={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
