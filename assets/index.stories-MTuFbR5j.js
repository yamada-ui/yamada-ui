import{r as o,j as d}from"./iframe-3lFlqlPN.js";import{B as v}from"./box-emitGOf7.js";import"./preload-helper-C1FmrZbK.js";const f=()=>{const[t,r]=o.useState(!1),u=o.useRef(null),n=o.useCallback(()=>r(!0),[]),a=o.useCallback(()=>r(!1),[]);return o.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",a)}},[n,a]),{ref:u,hovered:t}},E={title:"Hooks / useHover"},s=()=>{const{ref:t,hovered:r}=f();return d.jsx(v,{ref:t,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",w:"full",children:r?"I am hovered":"Put mouse over me please"})};var m,c,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    ref,
    hovered
  } = useHover();
  return <Box ref={ref} bg="mono" color="mono.contrast" p="md" rounded="l2" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Basic"];export{s as Basic,h as __namedExportsOrder,E as default};
