import{r as c,j as e,T as a}from"./iframe-1jXkjttE.js";import{u}from"./index-BK4ZlTnk.js";import{u as i}from"./index-CtFsqBTl.js";import{K as r}from"./kbd-D8iI8HZo.js";import{b as m}from"./input-DxKGe6d-.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-border-B-lYC9qG.js";import"./use-field-props-BJdtSFy6.js";const v={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return u("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n,placeholder:"Search"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
      <Input ref={inputRef} placeholder="Search" />
    </>;
}`,...t.parameters?.docs?.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,v as default};
