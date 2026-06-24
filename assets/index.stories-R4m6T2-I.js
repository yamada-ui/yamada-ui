import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{d as n,t as r}from"./button-Dd3r5aCq.js";import{Dn as i,Q as a,Qa as o,Sn as s,Z as c,bu as l,io as u,no as d,pu as f,ro as p}from"./iframe-QFtltEr1.js";var m,h,g,_,v,y;e((()=>{c(),r(),o(),f(),s(),m=t(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:t,value:r,onCopy:o}=a();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[(0,m.jsx)(l,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(n,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(u,{placeholder:`Paste here`,children:[(0,m.jsx)(p,{width:`full`}),(0,m.jsx)(d,{})]})]})},_=()=>{let{copied:e,setValue:t,value:r,onCopy:o}=a(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[(0,m.jsx)(l,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(n,{onClick:o,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(u,{placeholder:`Paste here`,children:[(0,m.jsx)(p,{width:`full`}),(0,m.jsx)(d,{})]})]})},v=()=>{let{copied:e,onCopy:t}=a(),r=`孫悟空`;return(0,m.jsxs)(i,{children:[(0,m.jsx)(l,{"aria-label":`Copy content`,readOnly:!0,value:r}),(0,m.jsx)(n,{onClick:()=>t(r),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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