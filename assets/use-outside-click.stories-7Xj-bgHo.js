import{j as r,F as p}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-cbvTaoBF.js";import{r as s}from"./index-IybTgENJ.js";import{C as l}from"./center-Y9AEyGEu.js";import{B as u}from"./button-D0eokz41.js";import"./factory-KjDUWRxd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-h-5pxw8v.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-74zfp4gy.js";import"./loading-M7zTGsj5.js";import"./index-bmva5xHb.js";import"./theme-provider-H1stovVN.js";import"./index-6KIs1ztp.js";import"./index-AvH0vXKE.js";import"./icon-rps1Vs7a.js";import"./use-component-style-xqqjtukQ.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
