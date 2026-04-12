import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$r as n,Qr as r,Sn as i,Wm as a,dc as o,h as s,hc as c,im as l,iu as u,m as d,ru as f,xn as p}from"./iframe-C5psFsKt.js";var m,h,g,_,v;e((()=>{m=t(a(),1),p(),o(),r(),f(),d(),h=l(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=s()===`macos`,t=(0,m.useRef)(null);return i(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{children:[`Focus: `,(0,h.jsx)(n,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(n,{children:`K`})]}),(0,h.jsx)(c,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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