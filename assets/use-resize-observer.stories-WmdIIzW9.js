import{a as f,F as p,j as m}from"./jsx-runtime-5BUNAZ9W.js";import{u as g}from"./index-YuXFfT5-.js";import{r as o}from"./index-4g5l5LRQ.js";import{r as d}from"./factory-Ph6enxrH.js";import{T as x}from"./text-ND628gHl.js";import{B as h}from"./button-fmMV717I.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-ZmBgLZU3.js";import"./theme-provider-wPz8KGo2.js";import"./use-ripple-hoxvAc5g.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-8yXhIBtj.js";import"./loading-6Si3C0_e.js";import"./index-n36vw3Ek.js";import"./index-uwAkCu1e.js";import"./index-cLrauuw6.js";import"./icon-TnMv01N9.js";const B={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},R=()=>{const e=o.useRef(0),r=o.useRef(null),[s,i]=o.useState(B),t=o.useMemo(()=>d()?new ResizeObserver(([c])=>{c&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&i(c.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,s]},L={title:"Hooks / useResizeObserver"},n=()=>{const[e,{toggle:r}]=g(),[s,i]=R();return f(p,{children:[m(x,{children:JSON.stringify(i)}),m(h,{ref:s,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const G=["basic"];export{G as __namedExportsOrder,n as basic,L as default};
