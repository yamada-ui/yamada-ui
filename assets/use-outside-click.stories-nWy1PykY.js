import{j as r,F as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-wIMh_G5R.js";import{r as s}from"./index-4g5l5LRQ.js";import{C as l}from"./center-_aUx3M16.js";import{B as u}from"./button-BwFPDuN6.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-iEFkrfzn.js";import"./index-EargzzxG.js";import"./motion-ukEXpwwk.js";import"./motion-rimQiqxs.js";import"./loading-6RwEQblT.js";import"./index-2fdIbPpW.js";import"./theme-provider-4KOeReOn.js";import"./index-F6j05pB5.js";import"./index-DKGSNMBl.js";import"./icon-VHqa4iO4.js";import"./use-component-style-a9Y1koMB.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
