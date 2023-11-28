import{j as o,F as p,a as s}from"./jsx-runtime-b08f8875.js";import{r as u}from"./index-8ee6c85d.js";import{u as c}from"./index-c407a81b.js";import{T as f}from"./text-c614df96.js";import{K as d}from"./kbd-03a2c818.js";import{I as l}from"./input-45caf94a.js";import"./_commonjsHelpers-de833af9.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-873f0974.js";import"./theme-provider-9d5cd644.js";import"./form-control-8e97ab42.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=u.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["basic"];export{W as __namedExportsOrder,t as basic,k as default};
//# sourceMappingURL=use-window-event.stories-cb77a60d.js.map
