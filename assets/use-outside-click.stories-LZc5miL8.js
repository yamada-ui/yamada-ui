import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as p}from"./index-bZtXKkOa.js";import{r as o}from"./index-uCp2LrAq.js";import{C as c}from"./center-dMhW4i5v.js";import{B as l}from"./button-BpMvshjJ.js";import"./factory-0Lglu3Ih.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-ripple-P2ONJKnm.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bb3QB0ep.js";import"./loading-CK4UxomQ.js";import"./icon-1BAWhYZ8.js";import"./index-Cf61Aa9S.js";import"./theme-provider-DZ-B-vNc.js";import"./use-component-style-lFSlOadu.js";const S={title:"Hooks / useOutsideClick"},r=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return p({ref:t,handler:()=>s(!1)}),e.jsx(e.Fragment,{children:m?e.jsx(c,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):e.jsx(l,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
