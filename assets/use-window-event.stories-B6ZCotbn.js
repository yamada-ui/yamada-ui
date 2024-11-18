import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u}from"./index-DrhyGsqJ.js";import{u as p}from"./index-vfoIBUyO.js";import{r as d}from"./index-ClcD9ViR.js";import{T as f}from"./text-Y1d9IDh4.js";import{K as n}from"./kbd-BlU05sxA.js";import{I as l}from"./input-BU9suz69.js";import"./factory-BPYpkDor.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-CYL4T5vM.js";import"./theme-provider-Bsm-0rKu.js";import"./form-control-BcwAaE7G.js";const k={title:"Hooks / useWindowEvent"},r=()=>{const a=u()==="macos",s=d.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=s.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["Focus: ",e.jsx(n,{children:a?"Cmd":"Ctrl"})," + ",e.jsx(n,{children:"K"})]}),e.jsx(l,{ref:s})]})};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
