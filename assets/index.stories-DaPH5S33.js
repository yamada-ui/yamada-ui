import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./box-C47iDJeO.js";var a,o;function s(){return(s=e((()=>{a=t(),o=()=>{let[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(null),r=(0,a.useCallback)(()=>t(!0),[]),i=(0,a.useCallback)(()=>t(!1),[]);return(0,a.useEffect)(()=>{let e=n.current;if(e)return e.addEventListener(`mouseenter`,r),e.addEventListener(`mouseleave`,i),()=>{e.removeEventListener(`mouseenter`,r),e.removeEventListener(`mouseleave`,i)}},[r,i]),{ref:n,hovered:e}}})))()}var c,l,u,d;function f(){return(f=e((()=>{s(),r(),c=n(),l={title:`Hooks / useHover`},u=()=>{let{ref:e,hovered:t}=o();return(0,c.jsx)(i,{ref:e,bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,w:`full`,children:t?`I am hovered`:`Put mouse over me please`})},d=[`Basic`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    ref,
    hovered
  } = useHover();
  return <Box ref={ref} bg="mono" color="mono.contrast" p="md" rounded="l2" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Basic,d as __namedExportsOrder,l as default};