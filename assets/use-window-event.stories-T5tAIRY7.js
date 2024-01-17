import{a as o,F as p,j as s}from"./jsx-runtime-5BUNAZ9W.js";import{u}from"./index-Iq1FopM-.js";import{r as c}from"./index-4g5l5LRQ.js";import{T as f}from"./text-XO0n_4gP.js";import{K as d}from"./kbd-5yoh6w4i.js";import{I as l}from"./input-kqdZ0CL5.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-a9Y1koMB.js";import"./theme-provider-4KOeReOn.js";import"./form-control-H3Q401dh.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=c.useRef(null);return u("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
