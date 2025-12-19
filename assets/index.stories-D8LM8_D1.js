import{r as n,a5 as f,j as s,T as g,Q as x}from"./iframe-D_HYglKf.js";import{u as d}from"./index-D_QHbnhU.js";import"./preload-helper-C1FmrZbK.js";const p={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},h=()=>{const e=n.useRef(0),r=n.useRef(null),[c,a]=n.useState(p),t=n.useMemo(()=>f()?new ResizeObserver(([i])=>{i&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&a(i.contentRect)}))}):null,[]);return n.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,c]},b={title:"Hooks / useResizeObserver"},o=()=>{const[e,{toggle:r}]=d(),[c,a]=h();return s.jsxs(s.Fragment,{children:[s.jsx(g,{children:JSON.stringify(a)}),s.jsx(x,{ref:c,h:e?"xl":"sm",w:e?"xl":"sm",onClick:r,children:"Click me to toggle the boolean value"})]})};var u,l,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const j=["Basic"];export{o as Basic,j as __namedExportsOrder,b as default};
