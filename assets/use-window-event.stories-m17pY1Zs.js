import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-PVTWwWf2.js";import{r as u}from"./index-BwDkhjyp.js";import{T as a}from"./text-B7mQIKcl.js";import{K as c}from"./kbd-BDbkjdG8.js";import{I as f}from"./input-dDehklEF.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-Dz3o-zMC.js";import"./theme-provider-CJ7n5K3X.js";import"./form-control-WUztxq5W.js";const h={title:"Hooks / useWindowEvent"},r=()=>{const n=u.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=n.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(c,{children:"Ctrl + K"})]}),e.jsx(f,{ref:n})]})};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
