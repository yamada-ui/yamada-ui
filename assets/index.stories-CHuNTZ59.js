import{r as c,j as e,T as u}from"./iframe-zUpmkGgl.js";import{u as a}from"./index-koisC9cM.js";import{u as i}from"./index-ByG_8McP.js";import{K as r}from"./kbd-CG4oQOIG.js";import{b as m}from"./input-BKPLuSIk.js";import"./preload-helper-D9Z9MdNV.js";import"./use-input-border-DszEfdnS.js";import"./use-field-props-DY5RPiKr.js";const E={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return a("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const os = useOS();
  const isMac = os === "macos";
  const inputRef = useRef<HTMLInputElement | null>(null);
  useWindowEvent("keydown", ev => {
    if (ev.code === "KeyK" && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault();
      inputRef.current?.focus();
    }
  });
  return <>
      <Text>
        Focus: <Kbd>{isMac ? "Cmd" : "Ctrl"}</Kbd> + <Kbd>K</Kbd>
      </Text>
      <Input ref={inputRef} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Basic"];export{t as Basic,R as __namedExportsOrder,E as default};
