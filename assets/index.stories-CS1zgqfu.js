import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{B as o,Eu as s,cr as c,fa as l,lr as u,pa as d,yu as f,z as p}from"./iframe-D5Y3ROF5.js";var m,h,g,_,v;t((()=>{m=e(n(),1),c(),f(),l(),a(),p(),h=r(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=o()===`macos`,t=(0,m.useRef)(null);return u(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Focus: `,(0,h.jsx)(d,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(d,{children:`K`})]}),(0,h.jsx)(s,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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