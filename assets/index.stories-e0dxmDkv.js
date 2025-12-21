import{r as n,j as o,T as u,Q as i}from"./iframe-LqombrNM.js";import{u as g}from"./index-CevRMiHp.js";import"./preload-helper-C1FmrZbK.js";const p=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},d={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=g(),l=p(e);return o.jsxs(o.Fragment,{children:[o.jsxs(u,{children:["state: ",String(e),", prev: ",String(l??"none")]}),o.jsx(i,{onClick:t,children:"Click me to toggle the boolean value"})]})};var s,a,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const v=["Basic"];export{r as Basic,v as __namedExportsOrder,d as default};
