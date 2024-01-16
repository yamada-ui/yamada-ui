import{j as r,F as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-N5V5gvhL.js";import{r as s}from"./index-4g5l5LRQ.js";import{C as l}from"./center-h3ZT_FrZ.js";import{B as u}from"./button-wgRwFiXZ.js";import"./factory-UVgmwG7m.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-BZv2-DZW.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-wmKyD4SQ.js";import"./loading-RG6ZNJzo.js";import"./index-Rnhjv4qA.js";import"./theme-provider-rx4ttYe3.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";import"./icon-q2lrQR9J.js";import"./use-component-style-oL2nRWmA.js";const R={title:"Hooks / useOutsideClick"},e=()=>{const t=s.useRef(null),[m,o]=s.useState(!1);return c({ref:t,handler:()=>o(!1)}),r(p,{children:m?r(l,{ref:t,h:"10",px:"4",bg:"danger",color:"white",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):r(u,{onClick:()=>o(!0),children:"Please Click"})})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
