import{a as f,F as p,j as m}from"./jsx-runtime-TtYKBvr-.js";import{u as g}from"./index-gWY0u-sb.js";import{r as o}from"./index-IybTgENJ.js";import{l as d}from"./factory-K2EgzEzN.js";import{T as x}from"./text-Ir_nN7z7.js";import{B as h}from"./button-OhYCiCfe.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-SBdvRTzg.js";import"./theme-provider-WG22_9xQ.js";import"./use-ripple-WyPsLtJa.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-IA6mdqBG.js";import"./loading-ubMXvBrR.js";import"./index-3YLteYYa.js";import"./index-IiCOgs8R.js";import"./index-fr2XEHwU.js";import"./icon-yFQ9IdhB.js";const B={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},R=()=>{const e=o.useRef(0),r=o.useRef(null),[s,i]=o.useState(B),t=o.useMemo(()=>d()?new ResizeObserver(([c])=>{c&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&i(c.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,s]},L={title:"Hooks / useResizeObserver"},n=()=>{const[e,{toggle:r}]=g(),[s,i]=R();return f(p,{children:[m(x,{children:JSON.stringify(i)}),m(h,{ref:s,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,l,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const G=["basic"];export{G as __namedExportsOrder,n as basic,L as default};
