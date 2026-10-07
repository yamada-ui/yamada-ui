import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-DuXNrJf_.js";import{r as a,t as o}from"./input-D740622u.js";import{n as s,t as c}from"./kbd-CqmhNBFy.js";import{n as l,t as u}from"./use-window-event-Uxs00GTZ.js";import{n as d,t as f}from"./use-os-BIR7NOZ5.js";var p,m,h,g,_;function v(){return(v=e((()=>{p=t(),u(),a(),s(),r(),f(),m=n(),h={title:`Hooks / useWindowEvent`},g=()=>{let e=d()===`macos`,t=(0,p.useRef)(null);return l(`keydown`,e=>{e.code===`KeyK`&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t.current?.focus())}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[`Focus: `,(0,m.jsx)(c,{children:e?`Cmd`:`Ctrl`}),` + `,(0,m.jsx)(c,{children:`K`})]}),(0,m.jsx)(o,{ref:t,placeholder:`Search`})]})},_=[`Basic`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Basic,_ as __namedExportsOrder,h as default};