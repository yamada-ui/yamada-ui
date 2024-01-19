import{j as r,F as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-ZarA7Oao.js";import{r as s}from"./index-4g5l5LRQ.js";import{C as l}from"./center-UYRiGEMd.js";import{B as u}from"./button-fXXqKWAC.js";import"./factory-cZuM5uc7.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple--RYc3gC9.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-LsoKV39r.js";import"./loading-61VaiPw8.js";import"./index-R-iIN9fN.js";import"./theme-provider-YeTkYVXb.js";import"./index-_j_eT4tT.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./use-component-style-UguhvTUx.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const _=["basic"];export{_ as __namedExportsOrder,e as basic,R as default};
