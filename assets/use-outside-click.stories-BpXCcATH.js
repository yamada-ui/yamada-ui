import{j as e}from"./extends-CwFRzn3r.js";import{u as p}from"./index-DqLTqNdm.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-B5cF8U0h.js";import{B as l}from"./button-CrM87X6c.js";import"./factory-DfCPDZht.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-C-c72TCS.js";import"./factory-B9-LT_yD.js";import"./motion-I-9Hg3gW.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./theme-provider-Bw55Thfs.js";import"./use-component-style-D0DGb12b.js";const I={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const R=["basic"];export{R as __namedExportsOrder,r as basic,I as default};
