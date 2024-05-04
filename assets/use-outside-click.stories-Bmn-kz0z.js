import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-q0-WwcuI.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-UntJcWLo.js";import{B as l}from"./button-CLAnfRTj.js";import"./factory-DB2JyeD8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-BNFWROsb.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-DWzc3n8e.js";import"./loading-qhJXVDYI.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";import"./theme-provider-CVa4tFyh.js";import"./use-component-style-eZPQMXFE.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,r as basic,S as default};
