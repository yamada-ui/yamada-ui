import{j as e}from"./extends-CwFRzn3r.js";import{u as m}from"./index-Bbuo0goj.js";import{r as p}from"./index-BwDkhjyp.js";import{T as a}from"./text-DzUFhekZ.js";import{K as c}from"./kbd-BasNMHV8.js";import{I as f}from"./input-BbSU9FN9.js";import"./factory-CB2imrkD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CLkw4iG2.js";import"./theme-provider-D1j4LEQ9.js";import"./form-control-DEVK4waL.js";const I={title:"Hooks / useWindowEvent"},r=()=>{const n=p.useRef(null);return m("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=n.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(c,{children:"Ctrl + K"})]}),e.jsx(f,{ref:n})]})};var s,i,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const h=["basic"];export{h as __namedExportsOrder,r as basic,I as default};
