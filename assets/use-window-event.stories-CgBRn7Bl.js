import{j as e}from"./extends-CwFRzn3r.js";import{u}from"./index-DrhyGsqJ.js";import{u as p}from"./index-DbOstyJI.js";import{r as d}from"./index-BwDkhjyp.js";import{T as f}from"./text-LaTineB_.js";import{K as n}from"./kbd-DEZJTZ1b.js";import{I as l}from"./input-BHl4y0m3.js";import"./factory-DBrfn43w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-DhRiPQIp.js";import"./theme-provider-Cr3m0r8P.js";import"./form-control-DALmJTHd.js";const k={title:"Hooks / useWindowEvent"},r=()=>{const a=u()==="macos",s=d.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=s.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["Focus: ",e.jsx(n,{children:a?"Cmd":"Ctrl"})," + ",e.jsx(n,{children:"K"})]}),e.jsx(l,{ref:s})]})};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
