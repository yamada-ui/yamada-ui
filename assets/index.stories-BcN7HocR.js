import{r as n,j as o,T as a,Q as c}from"./iframe-Cq3rcaMI.js";import{u as l}from"./index-CoHgiz7D.js";import"./preload-helper-PPVm8Dsz.js";const u=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},m={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=l(),s=u(e);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{children:["state: ",String(e),", prev: ",String(s??"none")]}),o.jsx(c,{onClick:t,children:"Click me to toggle the boolean value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
