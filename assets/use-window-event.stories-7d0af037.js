import{a as o,F as p,j as s}from"./jsx-runtime-e6a661ac.js";import{r as u}from"./index-61bf1805.js";import{u as c}from"./index-60f4b498.js";import{K as f}from"./kbd-5da05911.js";import{I as d}from"./input-7bd585c5.js";import{T as l}from"./text-90618d09.js";import"./_commonjsHelpers-de833af9.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./forward-ref-c496b87d.js";import"./use-component-style-195b7054.js";import"./theme-19663a53.js";import"./form-control-8aafab1c.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=u.useRef(null);return c("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(l,{children:["Focus: ",s(f,{children:"Ctrl + K"})]}),s(d,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-window-event.stories-7d0af037.js.map
