import{j as l}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{B as v}from"./box-Ch0hVi2V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-D0ba2aB7.js";const i=()=>{const[t,o]=r.useState(!1),u=r.useRef(null),n=r.useCallback(()=>o(!0),[]),a=r.useCallback(()=>o(!1),[]);return r.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",a)}},[n,a]),{ref:u,hovered:t}},b={title:"Hooks / useHover"},s=()=>{const{ref:t,hovered:o}=i();return l.jsx(v,{ref:t,bg:"red.500",color:"white",p:"md",rounded:"md",w:"full",children:o?"I am hovered":"Put mouse over me please"})};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    ref,
    hovered
  } = useHover();
  return <Box ref={ref} bg="red.500" color="white" p="md" rounded="md" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const H=["basic"];export{H as __namedExportsOrder,s as basic,b as default};
