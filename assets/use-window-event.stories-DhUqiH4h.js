import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{u as p}from"./index-CaZXUgNE.js";import{T as d}from"./text-Q2VnSl4h.js";import{K as n}from"./kbd-GcT0AnWH.js";import{I as f}from"./input-B8KS_X0u.js";import{u as l}from"./index-DrhyGsqJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-ZSnRp-09.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-Bj6hwx_Q.js";import"./theme-provider-B08WIPTu.js";import"./form-control-CsCePsX1.js";const k={title:"Hooks / useWindowEvent"},r=()=>{const a=l()==="macos",s=u.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=s.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:["Focus: ",e.jsx(n,{children:a?"Cmd":"Ctrl"})," + ",e.jsx(n,{children:"K"})]}),e.jsx(f,{ref:s})]})};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
