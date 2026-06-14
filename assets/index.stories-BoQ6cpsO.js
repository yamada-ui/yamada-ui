import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{B as n,Eu as r,Ev as i,Lf as a,Rf as o,da as s,dr as c,ua as l,ur as u,yu as d,yy as f,z as p}from"./iframe-4z85howq.js";var m,h,g,_,v;t((()=>{m=e(f(),1),u(),d(),l(),a(),p(),h=i(),g={title:`Hooks / useWindowEvent`},_=()=>{let e=n()===`macos`,t=(0,m.useRef)(null);return c(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o,{children:[`Focus: `,(0,h.jsx)(s,{children:e?`Cmd`:`Ctrl`}),` + `,(0,h.jsx)(s,{children:`K`})]}),(0,h.jsx)(r,{ref:t,placeholder:`Search`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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