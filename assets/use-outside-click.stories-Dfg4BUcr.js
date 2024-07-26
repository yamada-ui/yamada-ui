import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-D5mciU3Y.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-CrIvuMIb.js";import{B as l}from"./button-BNYY7Slw.js";import"./factory-CSM9sPSx.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-D-GIaEzw.js";import"./index-CLw4Dysw.js";import"./motion-D_mik6Sq.js";import"./motion-DbFL6ada.js";import"./loading-tpmCqo-t.js";import"./icon-BiToCgiA.js";import"./index-D_rx36I2.js";import"./theme-provider-DvoMT5nL.js";import"./use-component-style-j75HgCyZ.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
