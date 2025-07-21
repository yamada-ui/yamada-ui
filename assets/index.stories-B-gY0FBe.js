import{r as n,j as o,T as a}from"./iframe-BbB59fLB.js";import{u as c}from"./index-T2y2OLC7.js";import{B as l}from"./button-C7yiHaiH.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";const i=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},x={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=c(),s=i(e);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{children:["state: ",String(e),", prev: ",String(s??"none")]}),o.jsx(l,{onClick:t,children:"Click me to toggle the boolean value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const d=["Basic"];export{r as Basic,d as __namedExportsOrder,x as default};
