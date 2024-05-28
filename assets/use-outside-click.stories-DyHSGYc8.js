import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as p}from"./index-1St3wXnV.js";import{r as o}from"./index-uCp2LrAq.js";import{C as c}from"./center-BSOfo3xR.js";import{B as l}from"./button-Dg1r1tLc.js";import"./factory-eGqOwxJN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-ripple-BL9M4SmM.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-D9P5qI5Q.js";import"./loading-RZrS9-iD.js";import"./icon-C4f_KbJN.js";import"./index-BAZmNyaF.js";import"./theme-provider-DBZuijdl.js";import"./use-component-style-DAcjH3Cb.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
