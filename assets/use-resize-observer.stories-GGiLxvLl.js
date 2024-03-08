import{a as f,F as p,j as m}from"./jsx-runtime-5BUNAZ9W.js";import{u as g}from"./index-YuXFfT5-.js";import{r as o}from"./index-4g5l5LRQ.js";import{r as d}from"./factory-d4qha7R6.js";import{T as x}from"./text-puUo1HSE.js";import{B as h}from"./button-74Rie5Vi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-d9n8R3cE.js";import"./theme-provider-bBWP4weD.js";import"./use-ripple-WbBjk5fz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-v7t8L39m.js";import"./loading-a2VmdJrN.js";import"./index-gPPkT-3X.js";import"./index-NfIPy_Y6.js";import"./index-Ar4QPYE3.js";import"./icon-hF0n87st.js";const B={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},R=()=>{const e=o.useRef(0),r=o.useRef(null),[s,i]=o.useState(B),t=o.useMemo(()=>d()?new ResizeObserver(([c])=>{c&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&i(c.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,s]},L={title:"Hooks / useResizeObserver"},n=()=>{const[e,{toggle:r}]=g(),[s,i]=R();return f(p,{children:[m(x,{children:JSON.stringify(i)}),m(h,{ref:s,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
