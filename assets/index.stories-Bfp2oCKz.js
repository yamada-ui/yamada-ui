import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dn as t,Eu as n,Ev as r,Kd as i,Nd as a,Q as o,Sn as s,Z as c,ao as l,eo as u,io as d,oo as f,yu as p}from"./iframe-4z85howq.js";var m,h,g,_,v,y;e((()=>{c(),a(),u(),p(),s(),m=r(),h={title:`Hooks / useClipboard`},g=()=>{let{copied:e,setValue:r,value:a,onCopy:s}=o();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:a,onChange:e=>r(e.target.value)}),(0,m.jsx)(i,{onClick:s,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(f,{placeholder:`Paste here`,children:[(0,m.jsx)(l,{width:`full`}),(0,m.jsx)(d,{})]})]})},_=()=>{let{copied:e,setValue:r,value:a,onCopy:s}=o(``,5e3);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{placeholder:`text to be copied...`,value:a,onChange:e=>r(e.target.value)}),(0,m.jsx)(i,{onClick:s,children:e?`Copied!`:`Copy`})]}),(0,m.jsxs)(f,{placeholder:`Paste here`,children:[(0,m.jsx)(l,{width:`full`}),(0,m.jsx)(d,{})]})]})},v=()=>{let{copied:e,onCopy:r}=o(),a=`孫悟空`;return(0,m.jsxs)(t,{children:[(0,m.jsx)(n,{"aria-label":`Copy content`,readOnly:!0,value:a}),(0,m.jsx)(i,{onClick:()=>r(a),children:e?`Copied!`:`Copy`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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