import{r,a5 as u,j as n,T as l,Q as m}from"./iframe-5QspZtQ-.js";import{u as f}from"./index-CXNuYBHZ.js";import"./preload-helper-PPVm8Dsz.js";const g={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},x=()=>{const e=r.useRef(0),t=r.useRef(null),[o,c]=r.useState(g),a=r.useMemo(()=>u()?new ResizeObserver(([i])=>{i&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&c(i.contentRect)}))}):null,[]);return r.useEffect(()=>(t.current&&a?.observe(t.current),()=>{a?.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[a]),[t,o]},R={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:t}]=f(),[o,c]=x();return n.jsxs(n.Fragment,{children:[n.jsx(l,{children:JSON.stringify(c)}),n.jsx(m,{ref:o,h:e?"xl":"sm",w:e?"xl":"sm",onClick:t,children:"Click me to toggle the boolean value"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const b=["Basic"];export{s as Basic,b as __namedExportsOrder,R as default};
