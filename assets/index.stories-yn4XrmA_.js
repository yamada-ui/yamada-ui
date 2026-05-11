import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-CMXXrKHu.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-b_IgAtWs.js";import{t as a}from"./text-BspHgeMQ.js";import{a as o,t as s}from"./input-5yNzPiHc.js";import{n as c,t as l}from"./use-window-event-C4fCo0pN.js";import{Or as u,kr as d,o as f,s as p}from"./iframe-hd5efBrY.js";var m,h,g,_,v;e((()=>{m=t(n(),1),l(),s(),u(),a(),f(),h=r(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=p()===`macos`,t=(0,m.useRef)(null);return c(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Focus: `,(0,h.jsx)(d,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(d,{children:`K`})]}),(0,h.jsx)(o,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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