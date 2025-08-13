import{r as n,j as o,T as a}from"./iframe-BHZTlJ0V.js";import{u as c}from"./index-B7143Kr8.js";import{B as i}from"./button-BB2ssYQZ.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";const l=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},d={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=c(),s=l(e);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{children:["state: ",String(e),", prev: ",String(s??"none")]}),o.jsx(i,{onClick:t,children:"Click me to toggle the boolean value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const v=["Basic"];export{r as Basic,v as __namedExportsOrder,d as default};
