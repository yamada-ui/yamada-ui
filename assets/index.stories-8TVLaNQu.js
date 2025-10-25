import{r as c,j as e,T as u}from"./iframe-5QspZtQ-.js";import{u as a}from"./index-kB1I1VJk.js";import{u as i}from"./index-Z4Kej2fT.js";import{K as r}from"./kbd-CKKig--h.js";import{I as m}from"./input-ClZ3yx_T.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-border-DCrAv45g.js";import"./use-field-props-BSPmBEwJ.js";const E={title:"Hooks / useWindowEvent"},t=()=>{const o=i()==="macos",n=c.useRef(null);return a("keydown",s=>{s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),n.current?.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Focus: ",e.jsx(r,{children:o?"Cmd":"Ctrl"})," + ",e.jsx(r,{children:"K"})]}),e.jsx(m,{ref:n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
