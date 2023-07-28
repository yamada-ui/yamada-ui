import{a as o,F as m,j as s}from"./jsx-runtime-276775ef.js";import{r as p}from"./index-1cdf6ce0.js";import{u as c}from"./index-84ac2388.js";import{K as f}from"./kbd-bec54b8e.js";import{I as d}from"./input-d1c50c59.js";import{T as l}from"./text-1e5971fb.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./forward-ref-86842115.js";import"./use-component-style-645da9e2.js";import"./theme-ead977c1.js";import"./form-control-2b7a4da4.js";const j={title:"Hooks / useWindowEvent"},t=()=>{const r=p.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(m,{children:[o(l,{children:["Focus: ",s(f,{children:"Ctrl + K"})]}),s(d,{ref:r})]})};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const inputRef = useRef<HTMLInputElement>(null);
  useWindowEvent('keydown', ev => {
    if (ev.code === 'KeyK' && (ev.ctrlKey || ev.metaKey)) {
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const k=["basic"];export{k as __namedExportsOrder,t as basic,j as default};
//# sourceMappingURL=use-window-event.stories-acbb823d.js.map
