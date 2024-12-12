import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{u as p}from"./index-BX40uRdT.js";import{T as d}from"./text-62Futka0.js";import{K as n}from"./kbd-Dj1YdIhU.js";import{I as f}from"./input-CN_F8JmQ.js";import{u as l}from"./index-DrhyGsqJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-Nur_zO5a.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-DXYrx7jC.js";import"./theme-provider-BsBO7Bt7.js";import"./form-control-zj-lY-eQ.js";const k={title:"Hooks / useWindowEvent"},r=()=>{const a=l()==="macos",s=u.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=s.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:["Focus: ",e.jsx(n,{children:a?"Cmd":"Ctrl"})," + ",e.jsx(n,{children:"K"})]}),e.jsx(f,{ref:s})]})};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const os = useOS();
  const isMac = os === "macos";
  const inputRef = useRef<HTMLInputElement>(null);
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const F=["basic"];export{F as __namedExportsOrder,r as basic,k as default};
