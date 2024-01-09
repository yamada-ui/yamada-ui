import{a as f,F as p,j as m}from"./jsx-runtime-5BUNAZ9W.js";import{u as g}from"./index-YuXFfT5-.js";import{r as o}from"./index-4g5l5LRQ.js";import{r as d}from"./factory-Ddmu4EkR.js";import{T as x}from"./text-3hpqDbhU.js";import{B as h}from"./button-F5n5_bzK.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-zqeBCG90.js";import"./theme-provider-ePNg-PER.js";import"./use-ripple-X0fM5X0u.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-z0k3I5F3.js";import"./loading-WkkQcnq4.js";import"./index-qNazZ1dd.js";import"./index-4KtNWCXs.js";import"./index-Jxs9usl9.js";import"./icon-R3NodgbI.js";const B={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},R=()=>{const e=o.useRef(0),r=o.useRef(null),[s,i]=o.useState(B),t=o.useMemo(()=>d()?new ResizeObserver(([c])=>{c&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&i(c.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,s]},D={title:"Hooks / useResizeObserver"},n=()=>{const[e,{toggle:r}]=g(),[s,i]=R();return f(p,{children:[m(x,{children:JSON.stringify(i)}),m(h,{ref:s,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const L=["basic"];export{L as __namedExportsOrder,n as basic,D as default};
