import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-8UPguuR5.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-Cb298qBJ.js";import{B as l}from"./button-2eUQRjXe.js";import"./factory-CUXX-tpD.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-CTaDySPp.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-C3RdzhNH.js";import"./loading-Cv2t_DkB.js";import"./icon-AfnI_U7a.js";import"./index-Bg9mmZcs.js";import"./theme-provider-C2d9AdUa.js";import"./use-component-style-D81cq1tY.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
