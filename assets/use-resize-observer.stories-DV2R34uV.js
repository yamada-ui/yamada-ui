import{j as n}from"./extends-CwFRzn3r.js";import{u as f}from"./index-CoJrGj-T.js";import{r as o}from"./index-BwDkhjyp.js";import{P as p}from"./factory-CsTAdKnO.js";import{T as g}from"./text-7SoedmCZ.js";import{B as x}from"./button-D8TbvY37.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CYei-jGG.js";import"./theme-provider-V0oWEqA6.js";import"./use-ripple-BD1DhmLJ.js";import"./factory-C2CyRybs.js";import"./motion-I-9Hg3gW.js";import"./loading-DVCIEwm3.js";import"./icon-1mDnm9Bi.js";import"./use-var-CUIZ3K35.js";const d={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>p()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},J={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=f(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,h:e?"xl":"sm",w:e?"xl":"sm",onClick:r,children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
