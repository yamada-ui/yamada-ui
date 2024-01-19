import{a as o,F as m,j as s}from"./jsx-runtime-5BUNAZ9W.js";import{u as p}from"./index-esIlLAXy.js";import{r as c}from"./index-4g5l5LRQ.js";import{T as f}from"./text-3Ui1tvgC.js";import{K as d}from"./kbd-iJHKukYL.js";import{I as l}from"./input-azzyAlvx.js";import"./factory-cZuM5uc7.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-UguhvTUx.js";import"./theme-provider-YeTkYVXb.js";import"./form-control-ZNxtDnw3.js";const j={title:"Hooks / useWindowEvent"},t=()=>{const r=c.useRef(null);return p("keydown",e=>{var n;e.code==="KeyK"&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),(n=r.current)==null||n.focus())}),o(m,{children:[o(f,{children:["Focus: ",s(d,{children:"Ctrl + K"})]}),s(l,{ref:r})]})};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const k=["basic"];export{k as __namedExportsOrder,t as basic,j as default};
