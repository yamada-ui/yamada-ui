import{j as r,F as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-0MKP2jTU.js";import{r as s}from"./index-4g5l5LRQ.js";import{C as l}from"./center-HdGXT75I.js";import{B as u}from"./button-_x0xF1BK.js";import"./factory-RXTd6Ype.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-u7crcLVz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-1HlxJrnU.js";import"./loading-wg4TUUCb.js";import"./index-CBfWCvKJ.js";import"./theme-provider-sgFj2JQg.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";import"./icon-2cwE6nV2.js";import"./use-component-style-ur23iJdL.js";const _={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
