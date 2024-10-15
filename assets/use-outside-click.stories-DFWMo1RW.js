import{j as s}from"./extends-CwFRzn3r.js";import{u as p}from"./index-CZa1003m.js";import{r as o}from"./index-BwDkhjyp.js";import{C as c}from"./center-DPjSmKkM.js";import{B as l}from"./button-BG6kekf_.js";import"./factory-DkiAY2ad.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-VNo1fv7Z.js";import"./factory-DmXgzuxm.js";import"./motion-I-9Hg3gW.js";import"./loading-BAPtC7K8.js";import"./icon-A2vzomTu.js";import"./use-component-style-DQLsgxr3.js";import"./theme-provider-BQjm75QN.js";import"./use-var-D2w0wtCZ.js";const I={title:"Hooks / useOutsideClick"},e=()=>{const t=o.useRef(null),[m,r]=o.useState(!1);return p({ref:t,handler:()=>r(!1)}),m?s.jsx(c,{ref:t,bg:"danger",color:"white",h:"10",px:"4",rounded:"md",children:"Hey, Click anywhere outside of me to close."}):s.jsx(l,{onClick:()=>r(!0),children:"Please Click"})};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setIsOpen(false)
  });
  return isOpen ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="md">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setIsOpen(true)}>Please Click</Button>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const R=["basic"];export{R as __namedExportsOrder,e as basic,I as default};
