import{j as r,F as p}from"./jsx-runtime-2xDJh5tt.js";import{u as c}from"./index-BdxuPiOo.js";import{r as s}from"./index-CBqU2yxZ.js";import{C as l}from"./center-B2ejGzAv.js";import{B as u}from"./button-B04h-bnh.js";import"./factory-DpmudyXM.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-CYLHRNNs.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BNANSLgb.js";import"./loading-PB7xGStd.js";import"./index-CjPoKz7c.js";import"./theme-provider-BSSgazaQ.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";import"./icon-BPDO9FjE.js";import"./use-component-style-C8HPJoXa.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const v=["basic"];export{v as __namedExportsOrder,e as basic,_ as default};
