import{r as o,j as m}from"./iframe-BG38LAQ9.js";import{B as c}from"./box-CvTUj01L.js";const d=()=>{const[t,r]=o.useState(!1),u=o.useRef(null),n=o.useCallback(()=>r(!0),[]),a=o.useCallback(()=>r(!1),[]);return o.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",a)}},[n,a]),{ref:u,hovered:t}},f={title:"Hooks / useHover"},s=()=>{const{ref:t,hovered:r}=d();return m.jsx(c,{ref:t,bg:"mono",color:"mono.contrast",p:"md",rounded:"md",w:"full",children:r?"I am hovered":"Put mouse over me please"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    ref,
    hovered
  } = useHover();
  return <Box ref={ref} bg="mono" color="mono.contrast" p="md" rounded="md" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...s.parameters?.docs?.source}}};const i=["Basic"];export{s as Basic,i as __namedExportsOrder,f as default};
