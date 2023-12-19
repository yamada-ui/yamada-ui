import{j as r,F as p}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-mzKzxik6.js";import{r as s}from"./index-IybTgENJ.js";import{C as l}from"./center-5D7zPdPp.js";import{B as u}from"./button-FPtidzDX.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-cz0_rK7P.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-S2htefC9.js";import"./theme-provider-AD5gKQ6i.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./icon-lGxzm-PJ.js";import"./use-component-style-eqg6O7Tm.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
