import{a as o,F as m,j as s}from"./jsx-runtime-37f7df21.js";import{r as p}from"./index-f1f2c4b1.js";import{u as c}from"./index-f52b060a.js";import{K as f}from"./kbd-03959c79.js";import{I as d}from"./input-1ab3ff7d.js";import{T as l}from"./text-6737f911.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./forward-ref-92ccee95.js";import"./use-component-style-f03a93f0.js";import"./theme-2b4f2a73.js";import"./form-control-7888c8d6.js";const j={title:"Hooks / useWindowEvent"},t=()=>{const r=p.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(m,{children:[o(l,{children:["Focus: ",s(f,{children:"Ctrl + K"})]}),s(d,{ref:r})]})};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-window-event.stories-e43ed23a.js.map
