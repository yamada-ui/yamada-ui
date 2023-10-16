import{j as o,F as p,a as s}from"./jsx-runtime-03b4ddbf.js";import{r as u}from"./index-76fb7be0.js";import{u as c}from"./index-df112ca4.js";import{T as f}from"./text-64b2ab85.js";import{K as d}from"./kbd-ea657cf8.js";import{I as l}from"./input-e8f94a90.js";import"./_commonjsHelpers-de833af9.js";import"./factory-0b90ba06.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-c6f16384.js";import"./theme-provider-89b34f8f.js";import"./form-control-656e66ed.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=u.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["basic"];export{W as __namedExportsOrder,t as basic,k as default};
//# sourceMappingURL=use-window-event.stories-dff28c99.js.map
