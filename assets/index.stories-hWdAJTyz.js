import{r as c,j as e,T as a}from"./iframe-Gd2wA5UH.js";import{u}from"./index-DvkLS509.js";import{u as i}from"./index-gfIwJ53X.js";import{K as r}from"./kbd-B_A03B-_.js";import{I as m}from"./input-Br3BRLxR.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-border-pIvjYctk.js";import"./use-field-props-D4qWu9wV.js";const v={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return u("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n,placeholder:"Search"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
