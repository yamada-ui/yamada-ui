import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{a as n,t as r}from"./input-BKIv75g2.js";import{l as i,t as a}from"./button-BAB7Fua7.js";import{a as o}from"./z-stack-B9s6NVhI.js";import{Dt as s,di as c,fi as l,oi as u,ui as d,v as f,y as p}from"./iframe-yFPvjW-A.js";var m,h,g,_,v,y;e((()=>{f(),a(),u(),r(),s(),m=t(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:t,value:r,onCopy:a}=p();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(i,{onClick:a,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(l,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},_=()=>{let{copied:e,setValue:t,value:r,onCopy:a}=p(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:r,onChange:e=>t(e.target.value)}),(0,m.jsx)(i,{onClick:a,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(l,{placeholder:`Paste here`,children:[(0,m.jsx)(c,{width:`full`}),(0,m.jsx)(d,{})]})]})},v=()=>{let{copied:e,onCopy:t}=p(),r=`孫悟空`;return(0,m.jsxs)(o,{children:[(0,m.jsx)(n,{"aria-label":`Copy content`,readOnly:!0,value:r}),(0,m.jsx)(i,{onClick:()=>t(r),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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