import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ar as n,C as r,Du as i,Eu as a,S as o,Us as s,Xp as c,h as l,jr as u,m as d,pp as f,qs as p}from"./iframe-DfzTHUcv.js";var m,h,g,_,v;e((()=>{m=t(c(),1),o(),s(),n(),a(),d(),h=f(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=l()===`macos`,t=(0,m.useRef)(null);return r(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Focus: `,(0,h.jsx)(u,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(u,{children:`K`})]}),(0,h.jsx)(p,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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