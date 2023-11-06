import{j as o,F as m,a as s}from"./jsx-runtime-03b4ddbf.js";import{r as p}from"./index-76fb7be0.js";import{u as c}from"./index-b5dbe07e.js";import{T as f}from"./text-d5943c82.js";import{K as d}from"./kbd-42050ae9.js";import{I as l}from"./input-6f024ede.js";import"./_commonjsHelpers-de833af9.js";import"./factory-c9bc4a28.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-ab2b35f8.js";import"./theme-provider-a03ffa08.js";import"./form-control-eb3b7686.js";const j={title:"Hooks / useWindowEvent"},t=()=>{const r=p.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(m,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-window-event.stories-39137c69.js.map
