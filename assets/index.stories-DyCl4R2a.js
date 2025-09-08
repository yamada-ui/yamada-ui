import{r,Y as u,j as n,T as l}from"./iframe-6Bjnmk15.js";import{u as m}from"./index-DWMqu5Gd.js";import{B as f}from"./button-CsD90Sgr.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";const g={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},p=()=>{const e=r.useRef(0),t=r.useRef(null),[s,c]=r.useState(g),i=r.useMemo(()=>u()?new ResizeObserver(([a])=>{a&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{t.current&&c(a.contentRect)}))}):null,[]);return r.useEffect(()=>(t.current&&i?.observe(t.current),()=>{i?.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[i]),[t,s]},O={title:"Hooks / useResizeObserver"},o=()=>{const[e,{toggle:t}]=m(),[s,c]=p();return n.jsxs(n.Fragment,{children:[n.jsx(l,{children:JSON.stringify(c)}),n.jsx(f,{ref:s,h:e?"xl":"sm",w:e?"xl":"sm",onClick:t,children:"Click me to toggle the boolean value"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const j=["Basic"];export{o as Basic,j as __namedExportsOrder,O as default};
