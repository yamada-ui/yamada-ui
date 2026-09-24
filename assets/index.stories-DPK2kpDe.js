import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Yt as n,zt as r}from"./props-Bz1FL_va.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./text-b2W5euYI.js";import{r as s,t as c}from"./button-CFBNyQlD.js";import{n as l,t as u}from"./use-boolean-DS6wYhWQ.js";var d,f,p;function m(){return(m=e((()=>{d=t(),n(),f={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},p=()=>{let e=(0,d.useRef)(0),t=(0,d.useRef)(null),[n,i]=(0,d.useState)(f),a=(0,d.useMemo)(()=>r()?new ResizeObserver(([n])=>{n&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&i(n.contentRect)}))}):null,[]);return(0,d.useEffect)(()=>(t.current&&a?.observe(t.current),()=>{a?.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[a]),[t,n]}})))()}var h,g,_,v;function y(){return(y=e((()=>{m(),s(),a(),u(),h=i(),g={title:`Hooks / useResizeObserver`},_=()=>{let[e,{toggle:t}]=l(),[n,r]=p();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{children:JSON.stringify(r)}),(0,h.jsx)(c,{ref:n,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:t,children:`Click me to toggle the boolean value`})]})},v=[`Basic`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} h={flg ? "xl" : "sm"} w={flg ? "xl" : "sm"} onClick={toggle}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Basic,v as __namedExportsOrder,g as default};