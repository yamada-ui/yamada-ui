import{j as e}from"./extends-CwFRzn3r.js";import{r as m}from"./index-BwDkhjyp.js";import{u as p}from"./index-gqibircz.js";import{T as a}from"./text-CxEGNgXo.js";import{K as c}from"./kbd-CTf2rt78.js";import{I as f}from"./input-CkwgM_qk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-BgMvz7NM.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D3MffxdG.js";import"./theme-provider-Bpmh2ODM.js";import"./form-control-DAXawruh.js";const I={title:"Hooks / useWindowEvent"},r=()=>{const n=m.useRef(null);return p("keydown",t=>{var o;t.code==="KeyK"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),(o=n.current)==null||o.focus())}),e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:["Focus: ",e.jsx(c,{children:"Ctrl + K"})]}),e.jsx(f,{ref:n})]})};var s,i,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const h=["basic"];export{h as __namedExportsOrder,r as basic,I as default};
