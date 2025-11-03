import{r as o,j as m}from"./iframe-D0k82VKj.js";import{B as c}from"./box-BYUm6qHd.js";import"./preload-helper-PPVm8Dsz.js";const l=()=>{const[t,r]=o.useState(!1),u=o.useRef(null),n=o.useCallback(()=>r(!0),[]),a=o.useCallback(()=>r(!1),[]);return o.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",a)}},[n,a]),{ref:u,hovered:t}},i={title:"Hooks / useHover"},s=()=>{const{ref:t,hovered:r}=l();return m.jsx(c,{ref:t,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",w:"full",children:r?"I am hovered":"Put mouse over me please"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    ref,
    hovered
  } = useHover();
  return <Box ref={ref} bg="mono" color="mono.contrast" p="md" rounded="l2" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...s.parameters?.docs?.source}}};const p=["Basic"];export{s as Basic,p as __namedExportsOrder,i as default};
