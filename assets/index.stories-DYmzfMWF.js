import{r as c,j as e,T as u}from"./iframe-Dqv37jui.js";import{u as a}from"./index-BKiQrH87.js";import{u as i}from"./index-VoyGI06Z.js";import{K as r}from"./kbd-C0xmFMVL.js";import{I as m}from"./input-BQgqu4T8.js";import"./use-input-border-BCjCS4v6.js";import"./use-field-props-DbtZIaYl.js";const v={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return a("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,v as default};
