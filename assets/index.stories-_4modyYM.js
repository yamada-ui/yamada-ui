import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{d as n,t as r}from"./button-CApaI_Gh.js";import{Dn as i,Eu as a,Q as o,Z as s,do as c,fo as l,oo as u,uo as d,wn as f,yu as p}from"./iframe-DeULREvG.js";var m,h,g,_,v,y;e((()=>{s(),r(),u(),p(),f(),m=t(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:t,value:r,onCopy:s}=o();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(n,{onClick:s,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(l,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},_=()=>{let{copied:e,setValue:t,value:r,onCopy:s}=o(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(n,{onClick:s,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(l,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},v=()=>{let{copied:e,onCopy:t}=o(),r=`孫悟空`;return(0,m.jsxs)(i,{children:[(0,m.jsx)(a,{"aria-label":`Copy content`,readOnly:!0,value:r}),(0,m.jsx)(n,{onClick:()=>t(r),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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