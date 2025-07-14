import{r,Q as u,j as n,T as l}from"./iframe-Cn-KGvUL.js";import{u as m}from"./index-DXW1bZJ6.js";import{B as f}from"./button-C4DORSB8.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";const g={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},x=()=>{const e=r.useRef(0),t=r.useRef(null),[o,c]=r.useState(g),i=r.useMemo(()=>u()?new ResizeObserver(([a])=>{a&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&c(a.contentRect)}))}):null,[]);return r.useEffect(()=>(t.current&&i?.observe(t.current),()=>{i?.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[i]),[t,o]},B={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:t}]=m(),[o,c]=x();return n.jsxs(n.Fragment,{children:[n.jsx(l,{children:JSON.stringify(c)}),n.jsx(f,{ref:o,h:e?"xl":"sm",w:e?"xl":"sm",onClick:t,children:"Click me to toggle the boolean value"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const v=["Basic"];export{s as Basic,v as __namedExportsOrder,B as default};
