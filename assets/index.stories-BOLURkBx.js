import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./text-ClYKebxE.js";import{t as a}from"./text-B2Y0ht7H.js";import{B as o,bu as s,da as c,dr as l,pu as u,ua as d,ur as f,z as p}from"./iframe-DpVGHWSQ.js";var m,h,g,_,v;t((()=>{m=e(n(),1),f(),u(),d(),a(),p(),h=r(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=o()===`macos`,t=(0,m.useRef)(null);return l(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Focus: `,(0,h.jsx)(c,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(c,{children:`K`})]}),(0,h.jsx)(s,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const os = useOS();
  const isMac = os === "macos";
  const inputRef = useRef<HTMLInputElement | null>(null);
  useWindowEvent("keydown", ev => {
    if (ev.code === "KeyK" && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault();
      inputRef.current?.focus();
    }
  });
  return <>
      <Text>
        Focus: <Kbd>{isMac ? "Cmd" : "Ctrl"}</Kbd> + <Kbd>K</Kbd>
      </Text>
      <Input ref={inputRef} placeholder="Search" />
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Basic`]}))();export{_ as Basic,v as __namedExportsOrder,g as default};