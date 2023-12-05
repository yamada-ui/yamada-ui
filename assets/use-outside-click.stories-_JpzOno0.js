import{a as r,F as c}from"./jsx-runtime-yA-pgArV.js";import{u as l}from"./index-zFNhnQcr.js";import{r as o}from"./index-IybTgENJ.js";import{C as p}from"./center-_UdnTL46.js";import{B as u}from"./button-9VUarSO2.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./theme-provider-JJMfppNb.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./icon-U1tgplMe.js";import"./use-component-style-KGYGTazl.js";const F={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,s]=o.useState(!1);return l({ref:t,handler:()=>s(!1)}),r(c,{children:m?r(p,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>s(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const P=["basic"];export{P as __namedExportsOrder,e as basic,F as default};
