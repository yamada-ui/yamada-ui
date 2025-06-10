import{j as n}from"./jsx-runtime-DztICxWZ.js";import{r as o}from"./index-Bv9Y92EF.js";import{l as f}from"./factory-7Z88KRtK.js";import{u as p}from"./index-YFprnXPi.js";import{T as g}from"./text-KN7rBBtq.js";import{B as x}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-DH6f5tnY.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";const d={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>f()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},J={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=p(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,h:e?"xl":"sm",w:e?"xl":"sm",onClick:r,children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const M=["basic"];export{M as __namedExportsOrder,s as basic,J as default};
