import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{B as n,Du as r,Dv as i,Rf as a,bu as o,by as s,da as c,dr as l,ua as u,ur as d,z as f,zf as p}from"./iframe-BuTDpTUb.js";var m,h,g,_,v;t((()=>{m=e(s(),1),d(),o(),u(),a(),f(),h=i(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=n()===`macos`,t=(0,m.useRef)(null);return l(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{children:[`Focus: `,(0,h.jsx)(c,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(c,{children:`K`})]}),(0,h.jsx)(r,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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