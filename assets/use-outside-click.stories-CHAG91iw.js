import{j as r,F as p}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-1lyp6Hv-.js";import{r as s}from"./index-IybTgENJ.js";import{C as l}from"./center-VSBWF0_S.js";import{B as u}from"./button-JAyR2IrF.js";import"./factory-4UsipNZi.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-DtOELnn4.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-Nrmqvszs.js";import"./loading--J4ajAZG.js";import"./index-4xX5BTts.js";import"./theme-provider-gSdpxlBZ.js";import"./index-QXkTb0vS.js";import"./index-Ni3ZWRlr.js";import"./icon-_M--SPCM.js";import"./use-component-style-46I8_shN.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
