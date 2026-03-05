import{r as m,j as e,T as p}from"./iframe-Boi2xgLT.js";import{u as d}from"./index-C9iILspA.js";import{u as l}from"./index-CdJgONoN.js";import{K as o}from"./kbd-DPgTL8V2.js";import{b as f}from"./input-BAPazxu_.js";import"./preload-helper-C1FmrZbK.js";import"./use-input-border-D57DVOw2.js";import"./use-field-props-C2kDPfKj.js";const w={title:"Hooks / useWindowEvent"},t=()=>{const i=l()==="macos",n=m.useRef(null);return d("keydown",s=>{var r;s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),(r=n.current)==null||r.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["Focus: ",e.jsx(o,{children:i?"Cmd":"Ctrl"})," + ",e.jsx(o,{children:"K"})]}),e.jsx(f,{ref:n,placeholder:"Search"})]})};var c,a,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,w as default};
