import{r as c,j as e,T as a}from"./iframe-dfTRu6Tw.js";import{u}from"./index-Da__Abkn.js";import{u as i}from"./index-m_uIm0EP.js";import{K as r}from"./kbd-B7ZuU3E4.js";import{b as m}from"./input-DHxzkzvn.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-border-D600Fay8.js";import"./use-field-props-0qPFf40l.js";const v={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return u("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n,placeholder:"Search"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
