import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as f}from"./index-Du0-7Fls.js";import{r as o}from"./index-BwDkhjyp.js";import{P as p}from"./factory-BXeT7qA-.js";import{T as g}from"./text-BwL1Rj_o.js";import{B as x}from"./button-BZeThE85.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-DuIjxI-P.js";import"./theme-provider-CgekAyNK.js";import"./use-ripple-CX-fFskN.js";import"./index-DFuW1CVx.js";import"./motion-B3m9R3Ab.js";import"./motion-DnMpPmZx.js";import"./loading-DCdc0AhN.js";import"./icon-BjkWeIz-.js";import"./index-jt6EZpVS.js";const d={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>p()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},N={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=f(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const _=["basic"];export{_ as __namedExportsOrder,s as basic,N as default};
