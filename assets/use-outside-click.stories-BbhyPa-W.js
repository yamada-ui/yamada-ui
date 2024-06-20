import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as p}from"./index-xFj5_Hpi.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-4LpPij4p.js";import{B as l}from"./button-8HjDCW-E.js";import"./factory-DqlmaKnk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-ePVrvqFu.js";import"./index-CSNxn7VS.js";import"./motion-Ceh1Zhyk.js";import"./motion-CVEUpyyH.js";import"./loading-UvXiSr0C.js";import"./icon-BWDJazoz.js";import"./index-CvHBrwTd.js";import"./theme-provider-DKpED47L.js";import"./use-component-style-C3e1SZSW.js";const R={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return <>
      {isOpen ? <Center ref={ref} h="10" px="4" bg="danger" color="white" rounded="md">
          Hey, Click anywhere outside of me to close.
        </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>}
    </>;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["basic"];export{S as __namedExportsOrder,r as basic,R as default};
