import{r as n,j as o,T as a,R as c}from"./iframe-BToZTpox.js";import{u as l}from"./index-B2u64Qqf.js";import"./preload-helper-D9Z9MdNV.js";const u=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},m={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=l(),s=u(e);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{children:["state: ",String(e),", prev: ",String(s??"none")]}),o.jsx(c,{onClick:t,children:"Click me to toggle the boolean value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const f=["Basic"];export{r as Basic,f as __namedExportsOrder,m as default};
