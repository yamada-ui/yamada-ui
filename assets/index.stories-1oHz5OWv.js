import{r as n,j as o,T as a}from"./iframe-Bn8cMbTR.js";import{u as c}from"./index-BCG1hiCF.js";import{B as i}from"./button-BuVkzRhm.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";const l=e=>{const t=n.useRef(void 0);return n.useEffect(()=>{t.current=e},[e]),t.current},v={title:"Hooks / usePrevious"},r=()=>{const[e,{toggle:t}]=c(),s=l(e);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{children:["state: ",String(e),", prev: ",String(s??"none")]}),o.jsx(i,{onClick:t,children:"Click me to toggle the boolean value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const B=["Basic"];export{r as Basic,B as __namedExportsOrder,v as default};
