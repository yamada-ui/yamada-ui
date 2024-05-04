import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-yVAB4Vor.js";import{r as u}from"./index-BwDkhjyp.js";import{T as a}from"./text-ya_NqogR.js";import{K as c}from"./kbd-DMLrbLfb.js";import{I as f}from"./input-Gm_NK44I.js";import"./factory-DB2JyeD8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-eZPQMXFE.js";import"./theme-provider-CVa4tFyh.js";import"./form-control-VTiS_GWM.js";const h={title:"Hooks / useWindowEvent"},r=()=>{const n=u.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=n.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(c,{children:"Ctrl + K"})]}),e.jsx(f,{ref:n})]})};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
