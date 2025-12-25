import{r as m,j as e,T as p}from"./iframe-3lFlqlPN.js";import{u as d}from"./index-C5dBe0eE.js";import{u as f}from"./index-CokLMd4u.js";import{K as o}from"./kbd-BMrLih0x.js";import{I as l}from"./input-B3uwrL3L.js";import"./preload-helper-C1FmrZbK.js";import"./use-input-border-kcXteDtJ.js";import"./use-field-props-F7ZzN_40.js";const T={title:"Hooks / useWindowEvent"},t=()=>{const i=f()==="macos",n=m.useRef(null);return d("keydown",s=>{var r;s.code==="KeyK"&&(s.ctrlKey||s.metaKey)&&(s.preventDefault(),(r=n.current)==null||r.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["Focus: ",e.jsx(o,{children:i?"Cmd":"Ctrl"})," + ",e.jsx(o,{children:"K"})]}),e.jsx(l,{ref:n})]})};var c,u,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(a=(u=t.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};const h=["Basic"];export{t as Basic,h as __namedExportsOrder,T as default};
