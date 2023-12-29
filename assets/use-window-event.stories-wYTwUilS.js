import{a as o,F as p,j as s}from"./jsx-runtime-5BUNAZ9W.js";import{u}from"./index-Yugz9I2m.js";import{r as c}from"./index-4g5l5LRQ.js";import{T as f}from"./text-rkzyuG52.js";import{K as d}from"./kbd-UD4Obpep.js";import{I as l}from"./input-SRKMmTal.js";import"./factory-Ei-jEUJK.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-eekTqtz5.js";import"./theme-provider-PZSzWP7q.js";import"./form-control-l7lnk72n.js";const k={title:"Hooks / useWindowEvent"},t=()=>{const r=c.useRef(null);return u("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(p,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
