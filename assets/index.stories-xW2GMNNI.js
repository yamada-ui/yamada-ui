import{n as e}from"./chunk-zsgVPwQN.js";import{Bi as t,D as n,E as r,Fi as i,Ht as a,Lt as o,Vi as s,dc as c,hc as l,im as u,ml as d,wl as f,zi as p}from"./iframe-ny1HWA6_.js";var m,h,g,_,v,y;e((()=>{r(),d(),i(),c(),o(),m=u(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:r,value:i,onCopy:o}=n();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a,{children:[(0,m.jsx)(l,{placeholder:`text to be copied...`,value:i,onChange:e=>r(e.target.value)}),(0,m.jsx)(f,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(s,{placeholder:`Paste here`,children:[(0,m.jsx)(t,{width:`full`}),(0,m.jsx)(p,{})]})]})},_=()=>{let{copied:e,setValue:r,value:i,onCopy:o}=n(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(a,{children:[(0,m.jsx)(l,{placeholder:`text to be copied...`,value:i,onChange:e=>r(e.target.value)}),(0,m.jsx)(f,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(s,{placeholder:`Paste here`,children:[(0,m.jsx)(t,{width:`full`}),(0,m.jsx)(p,{})]})]})},v=()=>{let{copied:e,onCopy:t}=n(),r=`孫悟空`;return(0,m.jsxs)(a,{children:[(0,m.jsx)(l,{"aria-label":`Copy content`,readOnly:!0,value:r}),(0,m.jsx)(f,{onClick:()=>t(r),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    copied,
    setValue,
    value,
    onCopy
  } = useClipboard();
  return <>
      <HStack>
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const {
    copied,
    setValue,
    value,
    onCopy
  } = useClipboard("", 5000);
  return <>
      <HStack>
        <Input placeholder="text to be copied..." value={value} onChange={e => setValue(e.target.value)} />
        <Button onClick={onCopy}>{copied ? "Copied!" : "Copy"}</Button>
      </HStack>

      <Editable.Root placeholder="Paste here">
        <Editable.Preview width="full" />
        <Editable.Input />
      </Editable.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    copied,
    onCopy
  } = useClipboard();
  const value = "孫悟空";
  return <HStack>
      <Input aria-label="Copy content" readOnly value={value} />
      <Button onClick={() => onCopy(value)}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </HStack>;
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Timeout`,`DirectCopy`]}))();export{g as Basic,v as DirectCopy,_ as Timeout,y as __namedExportsOrder,h as default};