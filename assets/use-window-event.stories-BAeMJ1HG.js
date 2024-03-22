import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-8r4lvHZ9.js";import{r as u}from"./index-CBqU2yxZ.js";import{T as a}from"./text-CKRf8NGT.js";import{K as c}from"./kbd-DgNeJnsh.js";import{I as f}from"./input-DZFZn-ZS.js";import"./factory-D1MzC1Q2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-i7T2CPTB.js";import"./theme-provider-LCtE2tbw.js";import"./form-control-Dbo-pJGm.js";const h={title:"Hooks / useWindowEvent"},r=()=>{const n=u.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=n.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(c,{children:"Ctrl + K"})]}),e.jsx(f,{ref:n})]})};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const inputRef = useRef<HTMLInputElement>(null);
  useWindowEvent("keydown", ev => {
    if (ev.code === "KeyK" && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault();
      inputRef.current?.focus();
    }
  });
  return <>
      <Text>
        Focus: <Kbd>Ctrl + K</Kbd>
      </Text>
      <Input ref={inputRef} />
    </>;
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["basic"];export{k as __namedExportsOrder,r as basic,h as default};
