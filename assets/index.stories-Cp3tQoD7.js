import{r as c,j as e,T as u}from"./iframe-6Bjnmk15.js";import{u as a}from"./index-CZ6kDwkG.js";import{u as i}from"./index-Bia1UonM.js";import{K as r}from"./kbd-vokknnMR.js";import{b as m}from"./input-C14uX6bY.js";import"./preload-helper-D9Z9MdNV.js";import"./use-input-border-D6r5drvY.js";import"./use-field-props-CJllY30F.js";const E={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return a("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
