import{a as o,F as p,j as s}from"./jsx-runtime-TtYKBvr-.js";import{u}from"./index-DAvAudpD.js";import{r as c}from"./index-IybTgENJ.js";import{T as f}from"./text-E6foS7tx.js";import{K as d}from"./kbd-d3EgK6pc.js";import{I as l}from"./input-qGVa8ipj.js";import"./factory-GBKO6tqf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-GDmDNOF2.js";import"./theme-provider-M6E7j4xw.js";import"./form-control-Vx3ho_r4.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=c.useRef(null);return u("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
