import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-D3Ssu5BV.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-BWpsSVrn.js";import{B as l}from"./button-D-R1cZB4.js";import"./factory-CKqVSKj1.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DKTvpK5d.js";import"./use-ripple-Z2pjxNmq.js";import"./factory-DJUHOzOq.js";import"./motion-Bd6WkMzw.js";import"./loading-CgUBxj3m.js";import"./icon-Bq_LsFku.js";import"./index-CQttdDYc.js";import"./theme-provider-BTK0d_tQ.js";import"./use-component-style-DIJQBRrz.js";const R={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
